import { test, expect } from '../../hooks/fixtures';

test.describe('Homepage Navigation', () => {
  test('Navigate to Homepage and Verify Elements', async ({ pages }) => {
    // Navigate to homepage
    await pages.homePage.navigateToHome();

    // Verify page title
    const title = await pages.homePage.verifyPageTitle();
    expect(title).toBe('The Internet');

    // Verify main heading is visible
    const mainHeadingVisible = await pages.homePage.verifyMainHeadingVisible();
    expect(mainHeadingVisible).toBe(true);

    // Verify examples heading is visible
    const examplesHeadingVisible = await pages.homePage.verifyExamplesHeadingVisible();
    expect(examplesHeadingVisible).toBe(true);
  });
});
