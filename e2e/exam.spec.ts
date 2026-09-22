import { expect, test } from '@playwright/test';
import usersData from '../test-data/users.json';
import type { LoginCase } from '../types/test-data.types';

const LOGIN_URL = 'https://hq.nyovate.dev/login';
const loginCases = usersData.loginCases as LoginCase[];

test.describe('NyoHQ - Data-driven login page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });

  test('TC01 - Verify login page is displayed', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Sign in to NyoHQ' })).toBeVisible();
    await expect(page).toHaveURL(LOGIN_URL);
  });

  test('TC02 - Verify password is not exposed on the email-code login page', async ({ page }) => {
    await expect(page.locator('input[type="password"]')).toHaveCount(0);
    await expect(page.getByText('QA sign-in (email code)')).toBeVisible();
  });

  for (const loginCase of loginCases) {
    test(`TC03 - ${loginCase.type} - ${loginCase.id}`, async ({ page }) => {
      const qaSignIn = page.getByText('QA sign-in (email code)');
      await expect(qaSignIn).toBeVisible();
      await qaSignIn.click();

      const emailInput = page.getByRole('textbox', { name: 'Email' });
      await expect(emailInput).toBeVisible();
      await emailInput.fill(loginCase.username);

      if (loginCase.expected === 'accepted-format') {
        await expect(emailInput).toHaveValue(loginCase.username);
      } else if (loginCase.expected === 'rejected-format') {
        await expect(emailInput).toHaveValue(loginCase.username);
        await expect(page).toHaveURL(LOGIN_URL);
      } else if (loginCase.expected === 'empty-values') {
        await expect(emailInput).toHaveValue('');
        await expect(page).toHaveURL(LOGIN_URL);
      } else {
        await expect(emailInput).toHaveValue(loginCase.username);
        await expect(page.locator('input[type="password"]')).toHaveCount(0);
        await expect(page).toHaveURL(LOGIN_URL);
      }
    });
  }
});
