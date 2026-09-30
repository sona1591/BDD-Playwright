import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/bdd-fixtures';

// Pass your custom test fixture to automatically inject loginPage
const { Given, When, Then } = createBdd(test);

Given('I navigate to the login view', async ({ loginPage }) => {
  await loginPage.navigate();
});

Given('I navigate to the login page', async ({ loginPage }) => {
  await loginPage.navigate();
});

When('I execute login with {string} and {string}', async ({ loginPage }, user: string, pass: string) => {
  await loginPage.login(user, pass);
});

When('I enter valid username and password', async ({ loginPage }) => {
  await loginPage.enterCredentials('standard_user', 'secret_sauce');
});

When('I enter invalid username and password', async ({ loginPage }) => {
  await loginPage.enterCredentials('invalid_user', 'invalid_password');
});

When('I click the login button', async ({ loginPage }) => {
  await loginPage.submitLogin();
});

Then('I should be successfully logged in', async ({ page }) => {
  await expect(page).toHaveURL(/inventory\.html/);
});

Then('I should see an invalid credentials error', async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeVisible();
});

Then('I see the authentication error message', async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeVisible();
});
