import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";

// Cucumber creates one World per scenario; it carries that scenario's browser objects.
export class CustomWorld extends World {
  // Browser is the launched engine process shared by this scenario.
  browser!: Browser;
  // BrowserContext isolates cookies and storage from other scenarios.
  context!: BrowserContext;
  // Page is the tab where Playwright performs UI interactions.
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);