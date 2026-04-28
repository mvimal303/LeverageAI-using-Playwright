// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkbox Interactions', () => {
  test('Select and Unselect Checkboxes', async ({ page }) => {
    // Navigate to http://the-internet.herokuapp.com/checkboxes
    await page.goto('http://the-internet.herokuapp.com/checkboxes');
    
    const checkbox1 = page.getByRole('checkbox').first();
    
    // Verify checkbox 1 is unchecked initially
    await expect(checkbox1).not.toBeChecked();
    
    // Click checkbox 1 to select it
    await checkbox1.click();
    
    // Verify checkbox 1 is now checked
    await expect(checkbox1).toBeChecked();
    
    // Click checkbox 1 to deselect it
    await checkbox1.click();
    
    // Verify checkbox 1 is unchecked again
    await expect(checkbox1).not.toBeChecked();
  });
});
