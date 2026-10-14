import { expect, test } from '@playwright/test';
import { LOGIN_URL, verifyLoginPage } from '../utils/login-page';

test.describe('NyoHQ - General tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });

  test('Verify the login page loads successfully', async ({ page }) => {
    await verifyLoginPage(page);
    await expect(page.getByText('The Product Operating System.')).toBeVisible();
  });
});
