import { test, expect } from '../../hooks/fixtures';

test.describe('Dropdown Interactions', () => {
  test('Select Option from Dropdown', async ({ pages, testData }) => {
    // Navigate to dropdown page
    await pages.dropdownPage.navigateToDropdown();

    // Verify default value
    let selectedValue = await pages.dropdownPage.getSelectedValue();
    expect(selectedValue).toBe('');

    // Select option from test data
    const optionToSelect = testData.testData.dropdown.selectedValue;
    await pages.dropdownPage.selectOption(optionToSelect);

    // Verify selected value
    selectedValue = await pages.dropdownPage.getSelectedValue();
    expect(selectedValue).toBe(optionToSelect);
  });
});
