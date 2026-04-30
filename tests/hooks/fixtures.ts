import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/auth/LoginPage';
import { CheckboxesPage } from '../pages/CheckboxesPage';
import { DropdownPage } from '../pages/DropdownPage';
import { AlertsPage } from '../pages/AlertsPage';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type Pages = {
  homePage: HomePage;
  loginPage: LoginPage;
  checkboxesPage: CheckboxesPage;
  dropdownPage: DropdownPage;
  alertsPage: AlertsPage;
};

type TestData = {
  users: any;
  testData: any;
};

export const test = base.extend<{ pages: Pages; testData: TestData }>({
  pages: async ({ page }, use) => {
    const pages = {
      homePage: new HomePage(page),
      loginPage: new LoginPage(page),
      checkboxesPage: new CheckboxesPage(page),
      dropdownPage: new DropdownPage(page),
      alertsPage: new AlertsPage(page),
    };
    await use(pages);
  },

  testData: async ({}, use) => {
    const usersPath = path.join(__dirname, '../fixtures/users.json');
    const dataPath = path.join(__dirname, '../fixtures/testData.json');

    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const testData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    await use({ users, testData });
  },
});

export { expect };
