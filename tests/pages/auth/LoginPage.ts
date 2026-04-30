import { Page, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput = 'input[name="username"]';
  private readonly passwordInput = 'input[name="password"]';
  private readonly loginButton = 'button[type="submit"]';
  private readonly successMessage = 'text=You logged into a secure area!';
  private readonly errorMessage = 'text=Your username is invalid!';
  private readonly secureAreaHeading = 'h2:has-text("Secure Area")';

  constructor(page: Page) {
    super(page);
  }

  async navigateToLogin(): Promise<void> {
    await this.navigateTo('/login');
  }

  async enterUsername(username: string): Promise<void> {
    await this.fillInput(this.usernameInput, username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.fillInput(this.passwordInput, password);
  }

  async clickLoginButton(): Promise<void> {
    await this.clickElement(this.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async verifySuccessMessage(): Promise<void> {
    await expect(this.page.locator(this.successMessage)).toBeVisible();
  }

  async verifyErrorMessage(): Promise<void> {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }

  async verifySecureAreaHeading(): Promise<void> {
    await expect(this.page.locator(this.secureAreaHeading)).toBeVisible();
  }
}
