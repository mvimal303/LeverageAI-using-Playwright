import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
  private readonly dropdown = '#dropdown';

  constructor(page: Page) {
    super(page);
  }

  async navigateToDropdown(): Promise<void> {
    await this.navigateTo('/dropdown');
  }

  async selectOption(value: string): Promise<void> {
    await this.page.selectOption(this.dropdown, value);
  }

  async getSelectedValue(): Promise<string> {
    // Use locator's inputValue() method which gets the current value properly
    const value = await this.page.locator(this.dropdown).inputValue();
    return value || '';
  }

  async getAvailableOptions(): Promise<string[]> {
    const options = await this.page.locator(`${this.dropdown} option`).allTextContents();
    return options;
  }
}
