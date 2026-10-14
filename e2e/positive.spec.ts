import { expect, test } from '@playwright/test';
import { LOGIN_URL, verifyLoginPage } from '../utils/login-page';

test.describe('NyoHQ - Positive page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Verify Google sign-in is available', async ({ page }) => {
    await verifyLoginPage(page);
    await expect(
      page.getByRole('button', { name: /Continue with Google/i })
    ).toBeVisible();
  });

  test('Verify QA sign-in option is available', async ({ page }) => {
    await verifyLoginPage(page);
    await expect(page.getByText('QA sign-in (email code)')).toBeVisible();
  });
});
