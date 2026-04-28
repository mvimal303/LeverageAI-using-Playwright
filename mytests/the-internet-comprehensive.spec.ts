// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('The Internet Application', () => {
  
  test.describe('Homepage Navigation', () => {
    test('Navigate to Homepage and Verify Elements', async ({ page }) => {
      await page.goto('http://the-internet.herokuapp.com');
      await expect(page).toHaveTitle('The Internet');
      await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
    });
  });

  test.describe('Form Authentication', () => {
    test('Submit Form with Valid Credentials', async ({ page }) => {
      await page.goto('http://the-internet.herokuapp.com/login');
      await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
      await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
      await page.getByRole('button', { name: ' Login' }).click();
      await expect(page.locator('text=You logged into a secure area!')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Secure Area' })).toBeVisible();
    });

    test('Submit Form with Invalid Credentials', async ({ page }) => {
      await page.goto('http://the-internet.herokuapp.com/login');
      await page.getByRole('textbox', { name: 'Username' }).fill('invalid');
      await page.getByRole('textbox', { name: 'Password' }).fill('wrong');
      await page.getByRole('button', { name: ' Login' }).click();
      await expect(page.locator('text=Your username is invalid!')).toBeVisible();
    });
  });

  test.describe('Checkbox Interactions', () => {
    test('Select and Unselect Checkboxes', async ({ page }) => {
      await page.goto('http://the-internet.herokuapp.com/checkboxes');
      const checkbox1 = page.getByRole('checkbox').first();
      await expect(checkbox1).not.toBeChecked();
      await checkbox1.click();
      await expect(checkbox1).toBeChecked();
      await checkbox1.click();
      await expect(checkbox1).not.toBeChecked();
    });
  });

  test.describe('Dropdown Interactions', () => {
    test('Select Option from Dropdown', async ({ page }) => {
      await page.goto('http://the-internet.herokuapp.com/dropdown');
      const dropdown = page.locator('#dropdown');
      await expect(dropdown).toHaveValue('');
      await dropdown.selectOption('1');
      await expect(dropdown).toHaveValue('1');
    });
  });

  test.describe('Alert Handling', () => {
    test('Handle JavaScript Alert', async ({ page }) => {
      await page.goto('http://the-internet.herokuapp.com/javascript_alerts');
      page.once('dialog', dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');
        dialog.accept();
      });
      await page.getByRole('button', { name: 'Click for JS Alert' }).click();
      await expect(page.locator('text=You successfully clicked an alert')).toBeVisible();
    });
  });

});
