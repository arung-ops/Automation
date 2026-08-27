# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> NyoHQ - Login >> TC10 - Verify QA sign-in flow can be initiated
- Location: e2e\example.spec.ts:137:7

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected: not "https://hq.nyovate.dev/login"
Received: "https://hq.nyovate.dev/login"
Timeout:  10000ms

Call log:
  - Expect "not toHaveURL" with timeout 10000ms
    23 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://hq.nyovate.dev/login"

```

```yaml
- text: NyoHQ
- heading "Sign in to NyoHQ" [level=1]
- paragraph: The Product Operating System.
- button "Continue with Google"
- paragraph: Sign in with your nyovate.com or nyavx.com account.
- button "QA sign-in (email code)" [expanded]
- paragraph: For QA multi-role testing only. Invitation-gated — uninvited emails never receive a code.
- text: Email
- textbox "Email":
  - /placeholder: you@nyovate.com
- button "Email me a code" [disabled]
- paragraph: Don't have access? Contact your administrator.
- paragraph: NyoHQ · The Product Operating System · Nyovate
```

# Test source

```ts
  51  | 
  52  |     await expect(
  53  |       page.getByText('QA sign-in (email code)')
  54  |     ).toBeVisible();
  55  | 
  56  |   });
  57  | 
  58  | 
  59  |   // TC05 - Positive
  60  |   test('TC05 - Verify supported account information is displayed', async ({ page }) => {
  61  | 
  62  |     await page.goto(LOGIN_URL);
  63  | 
  64  |     await expect(
  65  |       page.getByText(
  66  |         'Sign in with your nyovate.com or nyavx.com account.'
  67  |       )
  68  |     ).toBeVisible();
  69  | 
  70  |   });
  71  | 
  72  | 
  73  |   // TC06 - Negative
  74  |   test('TC06 - Verify unauthorized user cannot access NyoHQ', async ({ page }) => {
  75  | 
  76  |     await page.goto(LOGIN_URL);
  77  | 
  78  |     await expect(
  79  |       page.getByText(
  80  |         "Don't have access? Contact your administrator."
  81  |       )
  82  |     ).toBeVisible();
  83  | 
  84  |   });
  85  | 
  86  | 
  87  |   // TC07 - Negative
  88  |   test('TC07 - Verify invalid login does not provide access', async ({ page }) => {
  89  | 
  90  |     await page.goto(LOGIN_URL);
  91  | 
  92  |     // This test intentionally does not use real credentials.
  93  |     // Replace with the application's QA authentication flow
  94  |     // when credentials/test data are available.
  95  | 
  96  |     await expect(
  97  |       page.getByRole('heading', {
  98  |         name: 'Sign in to NyoHQ'
  99  |       })
  100 |     ).toBeVisible();
  101 | 
  102 |   });
  103 | 
  104 | 
  105 |   // TC08 - Negative
  106 |   test('TC08 - Verify login page does not allow blank authentication submission', async ({ page }) => {
  107 | 
  108 |     await page.goto(LOGIN_URL);
  109 | 
  110 |     const heading = page.getByRole('heading', {
  111 |       name: 'Sign in to NyoHQ'
  112 |     });
  113 | 
  114 |     await expect(heading).toBeVisible();
  115 | 
  116 |     // No authentication should occur without user credentials.
  117 |     await expect(page).toHaveURL(LOGIN_URL);
  118 | 
  119 |   });
  120 | 
  121 | 
  122 |   // TC09 - Negative
  123 |   test('TC09 - Verify user without access is instructed to contact administrator', async ({ page }) => {
  124 | 
  125 |     await page.goto(LOGIN_URL);
  126 | 
  127 |     await expect(
  128 |       page.getByText(
  129 |         "Don't have access? Contact your administrator."
  130 |       )
  131 |     ).toBeVisible();
  132 | 
  133 |   });
  134 | 
  135 | 
  136 |   // TC10 - Positive
  137 |   test('TC10 - Verify QA sign-in flow can be initiated', async ({ page }) => {
  138 | 
  139 |     await page.goto(LOGIN_URL);
  140 | 
  141 |     const qaSignIn = page.getByText(
  142 |       'QA sign-in (email code)'
  143 |     );
  144 | 
  145 |     await expect(qaSignIn).toBeVisible();
  146 | 
  147 |     await qaSignIn.click();
  148 | 
  149 |     // The exact next-page assertion should be updated
  150 |     // based on the QA email-code implementation.
> 151 |     await expect(page).not.toHaveURL(LOGIN_URL);
      |                            ^ Error: expect(page).not.toHaveURL(expected) failed
  152 | 
  153 |   });
  154 | 
  155 | });
```