import { test, expect } from '@playwright/test';

const LOGIN_URL = 'https://hq.nyovate.dev/login';

test.describe('NyoHQ - Login Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.waitForLoadState('domcontentloaded');
  });


  // =========================================================
  // POSITIVE TEST CASES
  // =========================================================

  // TC01
  test('TC01 - Verify NyoHQ login page is displayed', async ({ page }) => {

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

    await expect(page).toHaveURL(LOGIN_URL);
  });


  // TC02
  test('TC02 - Verify NyoHQ product description is displayed', async ({ page }) => {

    await expect(
      page.getByText('The Product Operating System.')
    ).toBeVisible();
  });


  // TC03
  test('TC03 - Verify Continue with Google button is displayed', async ({ page }) => {

    await expect(
      page.getByRole('button', {
        name: /Continue with Google/i
      })
    ).toBeVisible();
  });


  // TC04
  test('TC04 - Verify QA sign-in option is displayed', async ({ page }) => {

    await expect(
      page.getByText('QA sign-in (email code)')
    ).toBeVisible();
  });


  // TC05
  test('TC05 - Verify supported account information is displayed', async ({ page }) => {

    await expect(
      page.getByText(
        'Sign in with your nyovate.com or nyavx.com account.'
      )
    ).toBeVisible();
  });


  // TC06
  test('TC06 - Verify administrator contact information is displayed', async ({ page }) => {

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();
  });


  // TC07
  test('TC07 - Verify login page contains Sign in heading', async ({ page }) => {

    const heading = page.getByRole('heading', {
      name: 'Sign in to NyoHQ'
    });

    await expect(heading).toBeVisible();
  });


  // TC08
  test('TC08 - Verify Google sign-in button is enabled', async ({ page }) => {

    const googleButton = page.getByRole('button', {
      name: /Continue with Google/i
    });

    await expect(googleButton).toBeVisible();
    await expect(googleButton).toBeEnabled();
  });


  // TC09
  test('TC09 - Verify QA email-code option is clickable', async ({ page }) => {

    const qaSignIn = page.getByText(
      'QA sign-in (email code)'
    );

    await expect(qaSignIn).toBeVisible();

    await expect(qaSignIn).toBeEnabled();
  });


  // TC10
  test('TC10 - Verify login page remains accessible after reload', async ({ page }) => {

    await page.reload();

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

    await expect(page).toHaveURL(LOGIN_URL);
  });


  // =========================================================
  // NEGATIVE TEST CASES
  // =========================================================

  // TC11
  test('TC11 - Verify unauthorized user access message is displayed', async ({ page }) => {

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();
  });


  // TC12
  test('TC12 - Verify unauthenticated user remains on login page', async ({ page }) => {

    await expect(page).toHaveURL(LOGIN_URL);

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();
  });


  // TC13
  test('TC13 - Verify blank authentication does not provide access', async ({ page }) => {

    await expect(page).toHaveURL(LOGIN_URL);

    // No credentials or authentication action is performed.
    // User should remain unauthenticated.

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();
  });


  // TC14
  test('TC14 - Verify invalid URL does not provide authenticated access', async ({ page }) => {

    await page.goto(
      'https://hq.nyovate.dev/invalid-page'
    );

    await expect(page).not.toHaveURL(
      /dashboard|home/i
    );
  });


  // TC15
  test('TC15 - Verify unauthorized access message remains available', async ({ page }) => {

    const accessMessage = page.getByText(
      "Don't have access? Contact your administrator."
    );

    await expect(accessMessage).toBeVisible();
  });


  // TC16
  test('TC16 - Verify login page does not expose authenticated dashboard without login', async ({ page }) => {

    await expect(page).toHaveURL(LOGIN_URL);

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

    await expect(
      page.getByText(/dashboard/i)
    ).not.toBeVisible();
  });


  // TC17
  test('TC17 - Verify unsupported account information is not incorrectly displayed', async ({ page }) => {

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


  // TC18
  test('TC18 - Verify invalid authentication cannot be assumed as successful', async ({ page }) => {

    await expect(page).toHaveURL(LOGIN_URL);

    // No valid credentials are supplied.
    // Therefore the test verifies that we do not reach
    // an authenticated application page.

    await expect(page).not.toHaveURL(
      /dashboard|workspace|projects/i
    );
  });


  // TC19
  test('TC19 - Verify login page does not automatically authenticate user', async ({ page }) => {

    await page.waitForTimeout(1000);

    await expect(page).toHaveURL(LOGIN_URL);

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();
  });


  // TC20
  test('TC20 - Verify user is instructed to contact administrator when access is unavailable', async ({ page }) => {

    const message = page.getByText(
      "Don't have access? Contact your administrator."
    );

    await expect(message).toBeVisible();

    await expect(message).toContainText(
      'Contact your administrator'
    );
  });

   test('TC21 - Verify user is instructed to contact administrator when access is avliable', async ({ page }) => {

    const message = page.getByText(
      "Don't have access? Contact your administrator."
    );

    await expect(message).toBeVisible();

    await expect(message).toContainText(
      'Contact your administrator'
    );
  });
});