# The Internet - Comprehensive POM Framework Plan

## Application Overview

This comprehensive test automation framework plan implements a Page Object Model (POM) structure for testing The Internet application (http://the-internet.herokuapp.com). The framework follows Playwright best practices, includes reusable page objects, test data management, custom utilities, environment configuration, CI/CD integration, and comprehensive reporting. The plan covers refactoring existing tests, creating page objects, setting up utilities, configuring environments, and implementing hooks and fixtures.

## Test Scenarios

### 1. Framework Setup & Configuration

**Seed:** `mytests/seed.spec.ts`

#### 1.1. Setup Project Folder Structure

**File:** `tests/setup/folder-structure.setup.ts`

**Steps:**
  1. Create directory structure: tests/pages/, tests/utils/, tests/fixtures/, tests/config/, tests/hooks/
    - expect: All directories created successfully
    - expect: Folder structure matches POM standards
  2. Create pages directory with subdirectories: tests/pages/auth/, tests/pages/common/
    - expect: Page object subdirectories created
    - expect: Ready for organizing page objects by feature
  3. Create tests/config/ directory with environment-specific config files
    - expect: Config directory ready for baseURL, credentials, and environment variables

#### 1.2. Update package.json with Dependencies

**File:** `tests/setup/package-config.setup.ts`

**Steps:**
  1. Install required dependencies: npm install --save-dev dotenv faker allure-playwright
    - expect: Dependencies installed successfully
    - expect: package.json updated with new dev dependencies
  2. Update package.json scripts: 'test', 'test:headed', 'test:debug', 'test:report', 'test:ui'
    - expect: Scripts section contains all test running commands
    - expect: Scripts support different execution modes

#### 1.3. Configure Playwright Config with Environment Support

**File:** `tests/setup/playwright-config.setup.ts`

**Steps:**
  1. Update playwright.config.ts: add baseURL from environment or default to 'http://the-internet.herokuapp.com'
    - expect: baseURL configured in use section
    - expect: Supports multiple environments (dev, staging, prod)
  2. Enable screenshot and video capture on test failure
    - expect: Screenshots folder configured in screenshotsDir
    - expect: Videos folder configured in videosDir
  3. Configure Allure reporter: update reporter array to include '@playwright/test/reporter/html' and allure reporter
    - expect: HTML reporter configured
    - expect: Allure reporter configured for advanced reporting
  4. Enable trace collection: set trace to 'on-first-retry' and 'retain-on-failure'
    - expect: Trace collection enabled
    - expect: Traces stored in traces/ directory

#### 1.4. Create Environment Configuration Files

**File:** `tests/setup/env-config.setup.ts`

**Steps:**
  1. Create tests/config/environments.ts with configuration for dev, staging, prod environments
    - expect: Environment config file created
    - expect: Contains baseURL, timeout, and other settings per environment
  2. Create .env.example file documenting all environment variables
    - expect: .env.example exists
    - expect: Contains BASE_URL, ENV, DEBUG, and other variables
  3. Create tests/config/constants.ts with test data constants (usernames, passwords, timeouts)
    - expect: Constants file created
    - expect: Contains reusable test data and timeout values

### 2. Page Object Model Implementation

**Seed:** `mytests/seed.spec.ts`

#### 2.1. Create Base Page Object Class

**File:** `tests/pages/BasePage.ts`

**Steps:**
  1. Create tests/pages/BasePage.ts with constructor accepting page object and baseURL
    - expect: BasePage class created
    - expect: Contains page property and navigation methods
  2. Implement common methods: navigateTo(path), waitForElement(selector), fillInput(selector, value)
    - expect: navigateTo method navigates to baseURL + path
    - expect: Helper methods for common operations
  3. Implement wait and assertion methods: waitForLoadState(), waitForURL(), isElementVisible()
    - expect: Wait methods implemented
    - expect: Assertion helper methods available

#### 2.2. Create HomePage Page Object

**File:** `tests/pages/HomePage.ts`

**Steps:**
  1. Create tests/pages/HomePage.ts extending BasePage with selectors for main heading and example links
    - expect: HomePage class created
    - expect: Contains selectors for 'Welcome to the-internet' heading and 'Available Examples'
  2. Implement method: navigateToHome() - navigates to '/'
    - expect: navigateToHome method navigates to home page
    - expect: Returns this for method chaining
  3. Implement methods: verifyPageTitle(), verifyMainHeading(), getExampleLinks()
    - expect: Methods return page elements or verify content
    - expect: Methods support fluent API pattern
  4. Implement navigation methods: clickLoginLink(), clickCheckboxesLink(), clickDropdownLink(), clickAlertsLink()
    - expect: Navigation methods click on example links
    - expect: Methods support testing different features

#### 2.3. Create LoginPage Page Object

**File:** `tests/pages/auth/LoginPage.ts`

**Steps:**
  1. Create tests/pages/auth/LoginPage.ts extending BasePage with selectors for username, password, and login button
    - expect: LoginPage class created
    - expect: Contains selectors for input fields and submit button
  2. Implement methods: navigateToLogin(), enterUsername(username), enterPassword(password), clickLoginButton()
    - expect: Navigation and input methods implemented
    - expect: Methods support fluent API
  3. Implement convenience method: login(username, password) - fills both fields and clicks login
    - expect: login method fills credentials and submits form
    - expect: Supports method chaining
  4. Implement verification methods: verifySuccessMessage(), verifyErrorMessage(), verifySecureAreaHeading()
    - expect: Verification methods check for expected messages
    - expect: Methods return boolean or throw assertions

#### 2.4. Create CheckboxesPage Page Object

**File:** `tests/pages/CheckboxesPage.ts`

**Steps:**
  1. Create tests/pages/CheckboxesPage.ts extending BasePage with selectors for checkboxes
    - expect: CheckboxesPage class created
    - expect: Contains locators for checkbox elements
  2. Implement methods: navigateToCheckboxes(), getCheckboxes(), getCheckboxByIndex(index)
    - expect: Navigation and element retrieval methods
    - expect: Can access individual checkboxes
  3. Implement methods: checkCheckbox(index), uncheckCheckbox(index), isCheckboxChecked(index)
    - expect: Methods to check/uncheck and verify checkbox state
    - expect: Index-based selection

#### 2.5. Create DropdownPage Page Object

**File:** `tests/pages/DropdownPage.ts`

**Steps:**
  1. Create tests/pages/DropdownPage.ts extending BasePage with dropdown selector
    - expect: DropdownPage class created
    - expect: Contains dropdown element selector
  2. Implement methods: navigateToDropdown(), selectOption(value), getSelectedValue()
    - expect: Navigation and dropdown methods
    - expect: Can select options and get selected value
  3. Implement method: getAvailableOptions() - returns all option values in dropdown
    - expect: Method returns array of available options
    - expect: Can verify all options are present

#### 2.6. Create AlertsPage Page Object

**File:** `tests/pages/AlertsPage.ts`

**Steps:**
  1. Create tests/pages/AlertsPage.ts extending BasePage with button selectors for different alert types
    - expect: AlertsPage class created
    - expect: Contains selectors for 'Click for JS Alert', 'Click for JS Confirm', etc.
  2. Implement methods: navigateToAlerts(), clickAlertButton(), clickConfirmButton(), clickPromptButton()
    - expect: Navigation and button click methods
    - expect: Ready for dialog handling
  3. Implement method: verifyAlertHandled() - checks for success message
    - expect: Method verifies alert was handled
    - expect: Can assert user feedback message

### 3. Test Data & Utilities Setup

**Seed:** `mytests/seed.spec.ts`

#### 3.1. Create Test Data JSON Fixtures

**File:** `tests/fixtures/setup-test-data.setup.ts`

**Steps:**
  1. Create tests/fixtures/users.json with valid and invalid login credentials
    - expect: JSON file contains valid user: username 'tomsmith', password 'SuperSecretPassword!'
    - expect: Contains invalid users for negative testing
  2. Create tests/fixtures/testData.json with test scenarios, search keywords, form data
    - expect: JSON file contains dropdown options, alert messages
    - expect: Contains expected test values and messages

#### 3.2. Create Data Generator Utility

**File:** `tests/utils/dataGenerator.ts`

**Steps:**
  1. Create tests/utils/dataGenerator.ts using Faker library for dynamic data generation
    - expect: Utility file created
    - expect: Exports functions: generateUsername(), generateEmail(), generatePassword()
  2. Implement functions: generateRandomString(length), generateRandomNumber(min, max), generateTimestamp()
    - expect: Dynamic data generation functions
    - expect: Returns random but valid test data

#### 3.3. Create Helper Utilities

**File:** `tests/utils/helpers.ts`

**Steps:**
  1. Create tests/utils/helpers.ts with common helper functions
    - expect: Utility file created
    - expect: Exports functions: wait(ms), getCurrentDate(), formatDate()
  2. Implement functions: getCurrentDate(), addDaysToDate(date, days), getTimeFromNow(minutes)
    - expect: Date utility functions
    - expect: Supports date manipulation
  3. Implement logging function: log(message, level) - logs with timestamp and level
    - expect: Logging utility for debug information
    - expect: Supports different log levels

#### 3.4. Create API Request Utility

**File:** `tests/utils/apiHelper.ts`

**Steps:**
  1. Create tests/utils/apiHelper.ts for API testing with Playwright request context
    - expect: API utility file created
    - expect: Exports functions for GET, POST, PUT, DELETE requests
  2. Implement methods: get(url), post(url, data), put(url, data), delete(url)
    - expect: HTTP methods implemented
    - expect: Can test API endpoints

### 4. Hooks & Fixtures Configuration

**Seed:** `mytests/seed.spec.ts`

#### 4.1. Create Custom Playwright Fixtures

**File:** `tests/hooks/fixtures.ts`

**Steps:**
  1. Create tests/hooks/fixtures.ts extending base test with custom fixtures
    - expect: Fixtures file created
    - expect: Exports custom test with page objects and utilities
  2. Implement fixture: pages - provides HomePage, LoginPage, CheckboxesPage, DropdownPage, AlertsPage instances
    - expect: pages fixture provides all page objects
    - expect: Page objects initialized with test page
  3. Implement fixture: testData - loads test data from JSON fixtures
    - expect: testData fixture loads JSON data
    - expect: Available in all tests
  4. Implement fixture: api - provides API request helpers
    - expect: api fixture provides request utilities
    - expect: Can make API calls in tests

#### 4.2. Setup Global Hooks

**File:** `tests/hooks/global-setup.ts`

**Steps:**
  1. Create tests/hooks/global-setup.ts for before all tests setup (e.g., test environment check)
    - expect: Global setup file created
    - expect: Verifies environment variables and test configuration
  2. Add environment validation: verify BASE_URL is accessible, check required env vars
    - expect: Setup validates BASE_URL
    - expect: Fails fast if environment is not configured

#### 4.3. Setup Global Teardown

**File:** `tests/hooks/global-teardown.ts`

**Steps:**
  1. Create tests/hooks/global-teardown.ts for after all tests cleanup
    - expect: Global teardown file created
    - expect: Can clean up test artifacts if needed

### 5. Refactor Existing Tests to Use POM

**Seed:** `mytests/seed.spec.ts`

#### 5.1. Refactor Homepage Navigation Test

**File:** `tests/homepage/navigation.spec.ts`

**Steps:**
  1. Create tests/homepage/navigation.spec.ts using HomePage page object
    - expect: Test file created
    - expect: Imports HomePage from pages/HomePage.ts
  2. Rewrite test: Navigate to Homepage and Verify Elements using homePage.navigateToHome()
    - expect: Test navigates using page object method
    - expect: Uses homePage.verifyPageTitle() and homePage.verifyMainHeading()
  3. Verify test passes with new POM structure
    - expect: Test executes successfully
    - expect: All assertions pass

#### 5.2. Refactor Form Authentication Tests

**File:** `tests/auth/login.spec.ts`

**Steps:**
  1. Create tests/auth/login.spec.ts using LoginPage page object and testData fixture
    - expect: Test file created
    - expect: Imports LoginPage and testData
  2. Rewrite test: Submit Form with Valid Credentials using loginPage.login(username, password)
    - expect: Test uses loginPage.login() method
    - expect: Loads credentials from testData fixture
  3. Rewrite test: Submit Form with Invalid Credentials with negative test data
    - expect: Negative test case implemented
    - expect: Verifies error message
  4. Verify both tests pass
    - expect: Both tests execute successfully
    - expect: All assertions validate

#### 5.3. Refactor Checkbox Interactions Test

**File:** `tests/elements/checkboxes.spec.ts`

**Steps:**
  1. Create tests/elements/checkboxes.spec.ts using CheckboxesPage page object
    - expect: Test file created
    - expect: Imports CheckboxesPage
  2. Rewrite test: Select and Unselect Checkboxes using checkboxesPage.checkCheckbox() and checkboxesPage.uncheckCheckbox()
    - expect: Test uses page object methods
    - expect: Verifies checkbox state with isCheckboxChecked()
  3. Verify test passes
    - expect: Test executes successfully
    - expect: All checkbox operations work correctly

#### 5.4. Refactor Dropdown Selection Test

**File:** `tests/elements/dropdown.spec.ts`

**Steps:**
  1. Create tests/elements/dropdown.spec.ts using DropdownPage page object
    - expect: Test file created
    - expect: Imports DropdownPage
  2. Rewrite test: Select Option from Dropdown using dropdownPage.selectOption()
    - expect: Test uses page object method
    - expect: Verifies selected value with dropdownPage.getSelectedValue()
  3. Verify test passes
    - expect: Test executes successfully
    - expect: Dropdown selection works correctly

#### 5.5. Refactor JavaScript Alert Handling Test

**File:** `tests/interactions/alerts.spec.ts`

**Steps:**
  1. Create tests/interactions/alerts.spec.ts using AlertsPage page object
    - expect: Test file created
    - expect: Imports AlertsPage
  2. Rewrite test: Handle JavaScript Alert using alertsPage.clickAlertButton() and dialog handler
    - expect: Test uses page object method
    - expect: Dialog handler implemented correctly
  3. Verify test passes
    - expect: Test executes successfully
    - expect: Alert dialog handled correctly

### 6. Reporting Configuration

**Seed:** `mytests/seed.spec.ts`

#### 6.1. Configure HTML Reporting

**File:** `tests/setup/reporting-setup.setup.ts`

**Steps:**
  1. Update playwright.config.ts: configure HTML reporter with custom config (outputFolder: 'playwright-report')
    - expect: HTML reporter configured
    - expect: Report output directory set
  2. Add screenshot and video configuration: screenshotsDir: 'test-results/screenshots', videosDir: 'test-results/videos'
    - expect: Screenshots captured on failure
    - expect: Videos recorded for failed tests

#### 6.2. Configure Allure Reporting

**File:** `tests/setup/allure-setup.setup.ts`

**Steps:**
  1. Install allure-playwright: npm install --save-dev allure-playwright
    - expect: Allure package installed
  2. Add Allure reporter to playwright.config.ts: include 'allure-playwright' in reporter array
    - expect: Allure reporter configured in config
  3. Add test descriptions and tags to tests using @tag and @description
    - expect: Tests marked with metadata
    - expect: Allure reports show test details

### 7. CI/CD Integration

**Seed:** `mytests/seed.spec.ts`

#### 7.1. Create GitHub Actions Workflow

**File:** `tests/ci-cd/github-workflow.setup.ts`

**Steps:**
  1. Create .github/workflows/test.yml GitHub Actions workflow file
    - expect: Workflow file created
    - expect: Contains trigger on push and pull_request
  2. Configure workflow: checkout code, install dependencies, run tests across Chromium, Firefox, Webkit
    - expect: Workflow installs Playwright and runs tests
    - expect: Tests run on multiple browsers
  3. Add report upload: upload playwright-report and test-results artifacts
    - expect: Artifacts uploaded after test completion
    - expect: Reports available for review

#### 7.2. Create Test Execution Documentation

**File:** `tests/ci-cd/ci-cd-readme.setup.ts`

**Steps:**
  1. Create TESTING.md documenting local test execution commands
    - expect: Documentation created
    - expect: Contains commands: npm test, npm run test:headed, npm run test:debug
  2. Document CI/CD pipeline: how tests trigger on push, where reports are stored
    - expect: CI/CD process documented
    - expect: Teams know where to find test results

### 8. Cross-Browser Testing Validation

**Seed:** `mytests/seed.spec.ts`

#### 8.1. Verify Cross-Browser Configuration

**File:** `tests/cross-browser/browser-config.spec.ts`

**Steps:**
  1. Verify playwright.config.ts has projects configured for: chromium, firefox, webkit
    - expect: All three browsers configured in projects array
  2. Run tests on all browsers: npx playwright test --project=chromium --project=firefox --project=webkit
    - expect: Tests run successfully on Chromium
    - expect: Tests run successfully on Firefox
    - expect: Tests run successfully on WebKit
