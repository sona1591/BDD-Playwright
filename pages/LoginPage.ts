import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page'

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  public readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /**
   * Encapsulates credentials entry and submits the form
   */
  async login(user: string, pass: string) {
    await this.enterCredentials(user, pass);
    await this.submitLogin();
  }

  async enterCredentials(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
  }

  async submitLogin() {
    await this.loginButton.click();
  }
}
