import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxesPage extends BasePage {
  private readonly checkboxes = 'input[type="checkbox"]';

  constructor(page: Page) {
    super(page);
  }

  async navigateToCheckboxes(): Promise<void> {
    await this.navigateTo('/checkboxes');
  }

  async getCheckboxes(): Promise<Locator[]> {
    const checkboxElements = this.page.locator(this.checkboxes);
    const count = await checkboxElements.count();
    const checkboxes: Locator[] = [];
    for (let i = 0; i < count; i++) {
      checkboxes.push(checkboxElements.nth(i));
    }
    return checkboxes;
  }

  async checkCheckbox(index: number): Promise<void> {
    const checkbox = this.page.locator(this.checkboxes).nth(index);
    const isChecked = await checkbox.isChecked();
    if (!isChecked) {
      await checkbox.click();
    }
  }

  async uncheckCheckbox(index: number): Promise<void> {
    const checkbox = this.page.locator(this.checkboxes).nth(index);
    const isChecked = await checkbox.isChecked();
    if (isChecked) {
      await checkbox.click();
    }
  }

  async isCheckboxChecked(index: number): Promise<boolean> {
    const checkbox = this.page.locator(this.checkboxes).nth(index);
    return await checkbox.isChecked();
  }
}
