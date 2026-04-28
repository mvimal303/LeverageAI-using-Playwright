// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Form Interactions', () => {
  test('Submit Form with Valid Data', async ({ page }) => {
    // Navigate to http://the-internet.herokuapp.com/login
    await page.goto('http://the-internet.herokuapp.com/login');
    
    // Enter username "tomsmith"
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    
    // Enter password "SuperSecretPassword!"
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    
    // Click the Login button
    await page.getByRole('button', { name: ' Login' }).click();
    
    // Verify success message displays
    await expect(page.locator('text=You logged into a secure area!')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Secure Area' })).toBeVisible();
  });
});
