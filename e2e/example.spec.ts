import { test, expect } from '@playwright/test';

const LOGIN_URL = 'https://hq.nyovate.dev/login';

test.describe('NyoHQ - Login Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });


  test('TC01 - Verify NyoHQ login page is displayed', async ({ page }) => {

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

    await expect(page).toHaveURL(LOGIN_URL);
  });


  test('TC02 - Verify NyoHQ product description is displayed', async ({ page }) => {

    await expect(
      page.getByText('The Product Operating System.')
    ).toBeVisible();
  });


  test('TC03 - Verify Continue with Google button sis displayed', async ({ page }) => {

    await expect(
      page.getByRole('button', {
        name: /Continue with Google/i
      })
    ).toBeVisible();
  });


  test('TC04 - Verify QA sign-in option is displayed', async ({ page }) => {

    await expect(
      page.getByText('QA sign-in (email code)')
    ).toBeVisible();
  });


  test('TC05 - Verify supported account information is displayed', async ({ page }) => {

    await expect(
      page.getByText(
        'Sign in with your nyovate.com or nyavx.com account.'
      )
    ).toBeVisible();
  });


  test('TC06 - Verify administrator contact information is displayed', async ({ page }) => {

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();
  });


  test('TC07 - Verify login page contains Sign in heading', async ({ page }) => {

    const heading = page.getByRole('heading', {
      name: 'Sign in to NyoHQ'
    });

    await expect(heading).toBeVisible();
  });


  test('TC08 - Verify Google sign-in button is enabled', async ({ page }) => {

    const googleButton = page.getByRole('button', {
      name: /Continue with Google/i
    });

    await expect(googleButton).toBeVisible();
    await expect(googleButton).toBeEnabled();
  });


  test('TC09 - Verify QA email-code option is displayed', async ({ page }) => {

    await expect(
      page.getByText('QA sign-in (email code)')
    ).toBeVisible();
  });

  test('TC10 - Verify login page remains accessible after reload', async ({ page }) => {

    await page.reload();

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

    await expect(page).toHaveURL(LOGIN_URL);
  });


  test('TC11 - Verify unsupported account information is not displayed', async ({ page }) => {

    await expect(
      page.getByText(
        'Sign in with your nyovate.com or nyavx.com account.'
      )
    ).toBeVisible();

    await expect(
      page.getByText(
        'Sign in with your gmail.com account.'
      )
    ).not.toBeVisible();
  });
 test('TC13- Verify all the lements ion is not displayed', async ({ page }) => {

    await expect(
      page.getByText(
        'Sign in with your nyovate.com or nyavx.com account.'
      )
    ).toBeVisible();
    await expect(
      page.getByText(
        'Sign in with your gmail.com account.'
      )
    ).not.toBeVisible();
  });

  test('TC12 - Verify administrator contact message is displayed', async ({ page }) => {

    const message = page.getByText(
      "Don't have access? Contact your administrator."
    );

    await expect(message).toBeVisible();

    await expect(message).toContainText(
      'Contact your administrator'
    );
  });
});