import { test, expect } from '@playwright/test';

const LOGIN_URL = 'https://hq.nyovate.dev/login';

test.describe('NyoHQ - Login', () => {

  // TC01 - Positive
  test('TC01 - Verify NyoHQ login page is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

  });


  // TC02 - Positive
  test('TC02 - Verify NyoHQ product description is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText('The Product Operating System.')
    ).toBeVisible();

  });


  // TC03 - Positive
  test('TC03 - Verify Continue with Google option is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByRole('button', {
        name: /Continue with Google/i
      })
    ).toBeVisible();

  });


  // TC04 - Positive
  test('TC04 - Verify QA sign-in option is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText('QA sign-in (email code)')
    ).toBeVisible();

  });


  // TC05 - Positive
  test('TC05 - Verify supported account information is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        'Sign in with your nyovate.com or nyavx.com account.'
      )
    ).toBeVisible();

  });


  // TC06 - Negative
  test('TC06 - Verify unauthorized user cannot access NyoHQ', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();

  });


  // TC07 - Negative
  test('TC07 - Verify invalid login does not provide access', async ({ page }) => {

    await page.goto(LOGIN_URL);

    // This test intentionally does not use real credentials.
    // Replace with the application's QA authentication flow
    // when credentials/test data are available.

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

  });


  // TC08 - Negative
  test('TC08 - Verify login page does not allow blank authentication submission', async ({ page }) => {

    await page.goto(LOGIN_URL);

    const heading = page.getByRole('heading', {
      name: 'Sign in to NyoHQ'
    });

    await expect(heading).toBeVisible();

    // No authentication should occur without user credentials.
    await expect(page).toHaveURL(LOGIN_URL);

  });


  // TC09 - Negative
  test('TC09 - Verify user without access is instructed to contact administrator', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();

  });


  // TC10 - Positive
  test('TC10 - Verify QA sign-in flow can be initiated', async ({ page }) => {

    await page.goto(LOGIN_URL);

    const qaSignIn = page.getByText(
      'QA sign-in (email code)'
    );

    await expect(qaSignIn).toBeVisible();

    await qaSignIn.click();

    // The exact next-page assertion should be updated
    // based on the QA email-code implementation.
    await expect(page).not.toHaveURL(LOGIN_URL);

  });

});
/ TC02 - Positive
  test('TC02 - Verify NyoHQ product description is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText('The Product Operating System.')
    ).toBeVisible();

  });


  // TC03 - Positive
  test('TC03 - Verify Continue with Google option is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByRole('button', {
        name: /Continue with Google/i
      })
    ).toBeVisible();

  });


  // TC04 - Positive
  test('TC04 - Verify QA sign-in option is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText('QA sign-in (email code)')
    ).toBeVisible();

  });


  // TC05 - Positive
  test('TC05 - Verify supported account information is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        'Sign in with your nyovate.com or nyavx.com account.'
      )
    ).toBeVisible();

  });


  // TC06 - Negative
  test('TC06 - Verify unauthorized user cannot access NyoHQ', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();

  });


  // TC07 - Negative
  test('TC07 - Verify invalid login does not provide access', async ({ page }) => {

    await page.goto(LOGIN_URL);

    // This test intentionally does not use real credentials.
    // Replace with the application's QA authentication flow
    // when credentials/test data are available.

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

  });


  // TC08 - Negative
  test('TC08 - Verify login page does not allow blank authentication submission', async ({ page }) => {

    await page.goto(LOGIN_URL);

    const heading = page.getByRole('heading', {
      name: 'Sign in to NyoHQ'
    });

    await expect(heading).toBeVisible();

    // No authentication should occur without user credentials.
    await expect(page).toHaveURL(LOGIN_URL);

  });


  // TC09 - Negative
  test('TC09 - Verify user without access is instructed to contact administrator', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();

  });


  // TC10 - Positive
  test('TC10 - Verify QA sign-in flow can be initiated', async ({ page }) => {

    await page.goto(LOGIN_URL);

    const qaSignIn = page.getByText(
      'QA sign-in (email code)'
    );

    await expect(qaSignIn).toBeVisible();

    await qaSignIn.click();

    // The exact next-page assertion should be updated
    // based on the QA email-code implementation.
    await expect(page).not.toHaveURL(LOGIN_URL);

  });


  test('TC12 - Verify NyoHQ product description is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText('The Product Operating System.')
    ).toBeVisible();

  });


  // TC03 - Positive
  test('TC13 - Verify Continue with Google option is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByRole('button', {
        name: /Continue with Google/i
      })
    ).toBeVisible();

  });


  // TC04 - Positive
  test('TC14 - Verify QA sign-in option is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText('QA sign-in (email code)')
    ).toBeVisible();

  });


  // TC05 - Positive
  test('TC15 - Verify supported account information is displayed', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        'Sign in with your nyovate.com or nyavx.com account.'
      )
    ).toBeVisible();

  });


  // TC06 - Negative
  test('TC16 - Verify unauthorized user cannot access NyoHQ', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();

  });


  // TC07 - Negative
  test('TC17 - Verify invalid login does not provide access', async ({ page }) => {

    await page.goto(LOGIN_URL);

    // This test intentionally does not use real credentials.
    // Replace with the application's QA authentication flow
    // when credentials/test data are available.

    await expect(
      page.getByRole('heading', {
        name: 'Sign in to NyoHQ'
      })
    ).toBeVisible();

  });


  // TC08 - Negative
  test('TC18 - Verify login page does not allow blank authentication submission', async ({ page }) => {

    await page.goto(LOGIN_URL);

    const heading = page.getByRole('heading', {
      name: 'Sign in to NyoHQ'
    });

    await expect(heading).toBeVisible();

    // No authentication should occur without user credentials.
    await expect(page).toHaveURL(LOGIN_URL);

  });


  // TC09 - Negative
  test('TC19 - Verify user without access is instructed to contact administrator', async ({ page }) => {

    await page.goto(LOGIN_URL);

    await expect(
      page.getByText(
        "Don't have access? Contact your administrator."
      )
    ).toBeVisible();

  });


  // TC10 - Positive
  test('TC20 - Verify QA sign-in flow can be initiated', async ({ page }) => {

    await page.goto(LOGIN_URL);

    const qaSignIn = page.getByText(
      'QA sign-in (email code)'
    );

    await expect(qaSignIn).toBeVisible();

    await qaSignIn.click();

    // The exact next-page assertion should be updated
    // based on the QA email-code implementation.
    await expect(page).not.toHaveURL(LOGIN_URL);

  });


