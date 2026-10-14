import { expect, type Page } from '@playwright/test';

export const LOGIN_URL = 'https://hq.nyovate.dev/login';

export async function verifyLoginPage(page: Page): Promise<void> {
  await expect(page).toHaveURL(LOGIN_URL);
  await expect(
    page.getByRole('heading', { name: 'Sign in to NyoHQ' })
  ).toBeVisible();
}
