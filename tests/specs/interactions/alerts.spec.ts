import { test, expect } from '../../hooks/fixtures';

test.describe('Alert Handling', () => {
  test('Handle JavaScript Alert', async ({ page, pages, testData }) => {
    // Navigate to alerts page
    await pages.alertsPage.navigateToAlerts();

    // Set up dialog handler
    page.once('dialog', (dialog) => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe(testData.testData.alerts.alertMessage);
      dialog.accept();
    });

    // Click alert button
    await pages.alertsPage.clickAlertButton();

    // Verify result message
    const resultMessage = await pages.alertsPage.getResultMessage();
    expect(resultMessage.toLowerCase()).toContain('you successfully clicked an alert');
  });
});
