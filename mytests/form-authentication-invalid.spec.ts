// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Form Interactions', () => {
  test('Submit Form with Invalid Credentials', async ({ page }) => {
    // Navigate to http://the-internet.herokuapp.com/login
    await page.goto('http://the-internet.herokuapp.com/login');
    
    // Enter username "invalid"
    await page.getByRole('textbox', { name: 'Username' }).fill('invalid');
    
    // Enter password "wrong"
    await page.getByRole('textbox', { name: 'Password' }).fill('wrong');
    
    // Click the Login button
    await page.getByRole('button', { name: ' Login' }).click();
    
    // Verify error message displays
    await expect(page.locator('text=Your username is invalid!')).toBeVisible();
  });
});
