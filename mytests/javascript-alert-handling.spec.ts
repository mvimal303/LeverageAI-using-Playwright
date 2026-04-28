// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Alert Handling', () => {
  test('Handle JavaScript Alert', async ({ page }) => {
    // Navigate to http://the-internet.herokuapp.com/javascript_alerts
    await page.goto('http://the-internet.herokuapp.com/javascript_alerts');
    
    // Listen for alert and handle it
    page.once('dialog', dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('I am a JS Alert');
      dialog.accept();
    });
    
    // Click "Click for JS Alert" button
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    
    // Verify success message displays
    await expect(page.locator('text=You successfully clicked an alert')).toBeVisible();
  });
});
