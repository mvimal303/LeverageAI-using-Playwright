import { test, expect } from '../../hooks/fixtures';

test.describe('Checkbox Interactions', () => {
  test('Select and Unselect Checkboxes', async ({ pages }) => {
    // Navigate to checkboxes page
    await pages.checkboxesPage.navigateToCheckboxes();

    // Check first checkbox state before click
    let isChecked = await pages.checkboxesPage.isCheckboxChecked(0);
    expect(isChecked).toBe(false);

    // Click checkbox to check it
    await pages.checkboxesPage.checkCheckbox(0);

    // Verify checkbox is checked
    isChecked = await pages.checkboxesPage.isCheckboxChecked(0);
    expect(isChecked).toBe(true);

    // Uncheck checkbox
    await pages.checkboxesPage.uncheckCheckbox(0);

    // Verify checkbox is unchecked
    isChecked = await pages.checkboxesPage.isCheckboxChecked(0);
    expect(isChecked).toBe(false);
  });
});
