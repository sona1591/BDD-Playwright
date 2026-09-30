
import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../utils/world";

When("I proceed to checkout", async function (this: CustomWorld) {
  await this.page.locator(".shopping_cart_link").click();
  await this.page.locator("#checkout").click();
});

When(
  "I fill in checkout information with {string} {string} {string}",
  async function (this: CustomWorld, firstName: string, lastName: string, postalCode: string) {
    await this.page.locator("#first-name").fill(firstName);
    await this.page.locator("#last-name").fill(lastName);
    await this.page.locator("#postal-code").fill(postalCode);
    await this.page.locator("#continue").click();
  }
);

When("I finish the checkout", async function (this: CustomWorld) {
  await this.page.locator("#finish").click();
});

Then("I see the order confirmation page", async function (this: CustomWorld) {
  const confirmation = this.page.locator(".complete-header");
  const actualText = await confirmation.textContent();
  if (actualText?.trim() !== "Thank you for your order!") {
    throw new Error(`Expected order confirmation, received ${actualText ?? "no confirmation"}`);
  }
});