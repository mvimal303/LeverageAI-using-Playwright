import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertsPage extends BasePage {
  private readonly alertButton = 'button:has-text("Click for JS Alert")';
  private readonly confirmButton = 'button:has-text("Click for JS Confirm")';
  private readonly promptButton = 'button:has-text("Click for JS Prompt")';
  private readonly result = '#result';

  constructor(page: Page) {
    super(page);
  }

  async navigateToAlerts(): Promise<void> {
    await this.navigateTo('/javascript_alerts');
  }

  async clickAlertButton(): Promise<void> {
    await this.clickElement(this.alertButton);
  }

  async clickConfirmButton(): Promise<void> {
    await this.clickElement(this.confirmButton);
  }

  async clickPromptButton(): Promise<void> {
    await this.clickElement(this.promptButton);
  }

  async getResultMessage(): Promise<string> {
    return await this.getText(this.result);
  }
}
