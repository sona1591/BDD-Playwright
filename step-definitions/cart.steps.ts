import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../utils/world";

When("I add {string} to the cart", async function (this: CustomWorld, productName: string) {
  const item = this.page.locator(".inventory_item").filter({
    has: this.page.getByText(productName, { exact: true }),
  });
  await item.locator("button").click();
});

Then("I see cart badge count as {string}", async function (this: CustomWorld, count: string) {
  const badge = this.page.locator('[data-test="shopping-cart-badge"]');
  const actualCount = await badge.textContent();
  if (actualCount !== count) {
    throw new Error(`Expected cart badge count ${count}, received ${actualCount ?? "no badge"}`);
  }
});

Then("I see {string} in the cart", async function (this: CustomWorld, productName: string) {
  await this.page.getByText(productName, { exact: true }).waitFor({ state: "visible" });
});
