import { expect, test } from '@playwright/test';
import { LOGIN_URL, verifyLoginPage } from '../utils/login-page';

test.describe('NyoHQ - Negative page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Verify password input is not exposed', async ({ page }) => {
    await verifyLoginPage(page);
    await expect(page.locator('input[type="password"]')).toHaveCount(0);
  });

  test('Verify unsupported Gmail account text is not displayed', async ({ page }) => {
    await verifyLoginPage(page);
    await expect(
      page.getByText('Sign in with your gmail.com account.')
    ).not.toBeVisible();
  });
});
