import { test, expect } from '../../hooks/fixtures';

test.describe('Form Authentication', () => {
  test('Submit Form with Valid Credentials', async ({ pages, testData }) => {
    // Navigate to login page
    await pages.loginPage.navigateToLogin();

    // Get valid credentials from test data
    const credentials = testData.users.validUsers[0];

    // Login with valid credentials
    await pages.loginPage.login(credentials.username, credentials.password);

    // Verify success message
    await pages.loginPage.verifySuccessMessage();

    // Verify secure area heading
    await pages.loginPage.verifySecureAreaHeading();
  });

  test('Submit Form with Invalid Credentials', async ({ pages, testData }) => {
    // Navigate to login page
    await pages.loginPage.navigateToLogin();

    // Get invalid credentials from test data
    const credentials = testData.users.invalidUsers[0];

    // Login with invalid credentials
    await pages.loginPage.login(credentials.username, credentials.password);

    // Verify error message
    await pages.loginPage.verifyErrorMessage();
  });
});
