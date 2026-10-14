import { expect, test } from '@playwright/test';
import usersData from '../test-data/users.json';
import type { LoginCase } from '../types/test-data.types';
import { LOGIN_URL, verifyLoginPage } from '../utils/login-page';

const loginCases = usersData.loginCases as LoginCase[];

test.describe('NyoHQ - Data-driven login page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });

  test('TC01 - Verify login page is displayed', async ({ page }) => {
    await verifyLoginPage(page);
  });

  test('TC02 - Verify password is not exposed on the email-code login page', async ({ page }) => {
    await verifyLoginPage(page);
    await expect(page.locator('input[type="password"]')).toHaveCount(0);
    await expect(page.getByText('QA sign-in (email code)')).toBeVisible();
  });
  test('TC03- Verify Sign in to NyoHQ page is displayed', async ({ page }) => {
    await verifyLoginPage(page);
  });

  for (const loginCase of loginCases) {
    test(`TC04 - ${loginCase.type} - ${loginCase.id}`, async ({ page }) => {
      await verifyLoginPage(page);
      await expect(page.getByText('QA sign-in (email code)')).toBeVisible();
      await expect(page.locator('input[type="password"]')).toHaveCount(0);
    });
  }
});
