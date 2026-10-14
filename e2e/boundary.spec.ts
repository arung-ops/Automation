import { expect, test } from '@playwright/test';
import { LOGIN_URL, verifyLoginPage } from '../utils/login-page';

test.describe('NyoHQ - Boundary page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Verify the login page remains available after reload', async ({ page }) => {
    await verifyLoginPage(page);
    await page.reload();
    await verifyLoginPage(page);
  });

  test('Verify administrator contact information remains visible', async ({ page }) => {
    await verifyLoginPage(page);
    await expect(
      page.getByText("Don't have access? Contact your administrator.")
    ).toBeVisible();
  });
});
