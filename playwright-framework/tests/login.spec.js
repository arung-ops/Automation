const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');

test('user logs in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  const title = await homePage.verifyProductsVisible();
  expect(title).toContain('Products');
});
