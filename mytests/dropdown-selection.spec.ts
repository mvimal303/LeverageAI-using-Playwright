// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Dropdown Interactions', () => {
  test('Select Option from Dropdown', async ({ page }) => {
    // Navigate to http://the-internet.herokuapp.com/dropdown
    await page.goto('http://the-internet.herokuapp.com/dropdown');
    
    const dropdown = page.locator('#dropdown');
    
    // Verify default option is selected
    await expect(dropdown).toHaveValue('');
    
    // Select Option 1 from dropdown
    await dropdown.selectOption('1');
    
    // Verify Option 1 is now selected
    await expect(dropdown).toHaveValue('1');
  });
});
