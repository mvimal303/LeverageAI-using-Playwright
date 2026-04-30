import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  // Selectors
  private readonly mainHeading = 'h1:has-text("Welcome to the-internet")';
  private readonly examplesHeading = 'h2:has-text("Available Examples")';
  private readonly loginLink = 'a:has-text("Form Authentication")';
  private readonly checkboxesLink = 'a:has-text("Checkboxes")';
  private readonly dropdownLink = 'a:has-text("Dropdown")';
  private readonly alertsLink = 'a:has-text("JavaScript Alerts")';

  constructor(page: Page) {
    super(page);
  }

  async navigateToHome(): Promise<void> {
    await this.navigateTo('/');
  }

  async verifyPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async verifyMainHeadingVisible(): Promise<boolean> {
    return await this.isElementVisible(this.mainHeading);
  }

  async verifyExamplesHeadingVisible(): Promise<boolean> {
    return await this.isElementVisible(this.examplesHeading);
  }

  async clickLoginLink(): Promise<void> {
    await this.clickElement(this.loginLink);
  }

  async clickCheckboxesLink(): Promise<void> {
    await this.clickElement(this.checkboxesLink);
  }

  async clickDropdownLink(): Promise<void> {
    await this.clickElement(this.dropdownLink);
  }

  async clickAlertsLink(): Promise<void> {
    await this.clickElement(this.alertsLink);
  }
}
