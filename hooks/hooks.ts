import { After, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium, firefox, webkit, BrowserType } from "playwright";
import path from "path";
import { testConfig } from "../config/config";
import { CustomWorld } from "../utils/world";

const browserTypes: Record<string, BrowserType> = { chromium, firefox, webkit };
setDefaultTimeout(testConfig.timeoutMs);

// Hooks run around each scenario so every scenario receives isolated browser state.
Before(async function (this: CustomWorld) {
  this.browser = await browserTypes[testConfig.browser].launch({ headless: testConfig.headless });
  this.context = await this.browser.newContext({ baseURL: testConfig.baseUrl });
  this.page = await this.context.newPage();
  this.page.setDefaultTimeout(testConfig.timeoutMs);
});

After(async function (this: CustomWorld, scenario) {
  try {
    if (scenario.result?.status === Status.FAILED && this.page) {
      const safeName = scenario.pickle.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
      const screenshotPath = path.join(
        process.cwd(),
        "screenshots",
        `${safeName}-${Date.now()}.png`,
      );
      const screenshot = await this.page.screenshot({ path: screenshotPath, fullPage: true });
      await this.attach(screenshot, "image/png");
    }
  } catch (error) {
    console.error("Unable to capture or attach the failure screenshot:", error);
  } finally {
    await closeQuietly(this.page);
    await closeQuietly(this.context);
    await closeQuietly(this.browser);
  }
});

async function closeQuietly(resource?: { close: () => Promise<void> }): Promise<void> {
  if (!resource) return;
  try {
    await resource.close();
  } catch (error) {
    console.error("Unable to close a Playwright resource cleanly:", error);
  }
}