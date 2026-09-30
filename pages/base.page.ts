import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  /**
   * Navigates to a specific URL path or defaults to the baseUrl
   */
  async navigate(path: string = '') {
    await this.page.goto(path);
  }
}
