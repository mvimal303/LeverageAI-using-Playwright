// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Page Navigation', () => {
  test('Navigate to Homepage and Verify Elements', async ({ page }) => {
    // Navigate to http://the-internet.herokuapp.com
    await page.goto('http://the-internet.herokuapp.com');
    
    // Verify the homepage loads successfully
    await expect(page).toHaveTitle('The Internet');
    
    // Verify the main heading is visible
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    
    // Verify Available Examples heading is visible
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    
    // Verify multiple test scenario links are displayed
    await expect(page.getByRole('link', { name: 'Form Authentication' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Checkboxes' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dropdown' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'JavaScript Alerts' })).toBeVisible();
  });
});
