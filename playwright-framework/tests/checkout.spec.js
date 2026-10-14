const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('user completes checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
  await homePage.openCart();
  await checkoutPage.proceedToCheckout();
  await checkoutPage.fillCustomerInfo('John', 'Doe', '12345');
  await checkoutPage.finishPurchase();

  await expect(page.locator('.complete-header')).toBeVisible();
});
