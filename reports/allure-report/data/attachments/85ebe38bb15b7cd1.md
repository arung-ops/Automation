# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> DemoQA - Automation Practice Form >> TC01 - Verify DemoQA home page title
- Location: e2e\example.spec.ts:6:7

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://demoqa.com/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('DemoQA - Automation Practice Form', () => {
  4   | 
  5   |   // TC01 - Positive
  6   |   test('TC01 - Verify DemoQA home page title', async ({ page }) => {
  7   | 
> 8   |     await page.goto('https://demoqa.com');
      |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  9   | 
  10  |     await expect(page).toHaveTitle(/DEMOQA/);
  11  | 
  12  |   });
  13  | 
  14  | 
  15  |   // TC02 - Positive
  16  |   test('TC02 - Verify Automation Practice Form page loads', async ({ page }) => {
  17  | 
  18  |     await page.goto(
  19  |       'https://demoqa.com/automation-practice-form'
  20  |     );
  21  | 
  22  |     await expect(
  23  |       page.locator('h5')
  24  |     ).toHaveText('Student Registration Form');
  25  | 
  26  |   });
  27  | 
  28  | 
  29  |   // TC03 - Positive
  30  |   test('TC03 - Verify user can enter First Name and Last Name', async ({ page }) => {
  31  | 
  32  |     await page.goto(
  33  |       'https://demoqa.com/automation-practice-form'
  34  |     );
  35  | 
  36  |     await page.locator('#firstName').fill('Arun');
  37  | 
  38  |     await page.locator('#lastName').fill('Kumar');
  39  | 
  40  |     await expect(page.locator('#firstName'))
  41  |       .toHaveValue('Arun');
  42  | 
  43  |     await expect(page.locator('#lastName'))
  44  |       .toHaveValue('Kumar');
  45  | 
  46  |   });
  47  | 
  48  | 
  49  |   // TC04 - Positive
  50  |   test('TC04 - Verify user can enter valid email', async ({ page }) => {
  51  | 
  52  |     await page.goto(
  53  |       'https://demoqa.com/automation-practice-form'
  54  |     );
  55  | 
  56  |     await page.locator('#userEmail')
  57  |       .fill('arun.kumar@example.com');
  58  | 
  59  |     await expect(page.locator('#userEmail'))
  60  |       .toHaveValue('arun.kumar@example.com');
  61  | 
  62  |   });
  63  | 
  64  | 
  65  |   // TC05 - Positive
  66  |   test('TC05 - Verify user can select Male gender', async ({ page }) => {
  67  | 
  68  |     await page.goto(
  69  |       'https://demoqa.com/automation-practice-form'
  70  |     );
  71  | 
  72  |     await page.locator('label[for="gender-radio-1"]').click();
  73  | 
  74  |     await expect(
  75  |       page.locator('#gender-radio-1')
  76  |     ).toBeChecked();
  77  | 
  78  |   });
  79  | 
  80  | 
  81  |   // TC06 - Negative
  82  |   test('TC06 - Verify First Name is mandatory', async ({ page }) => {
  83  | 
  84  |     await page.goto(
  85  |       'https://demoqa.com/automation-practice-form'
  86  |     );
  87  | 
  88  |     await page.locator('#lastName').fill('Kumar');
  89  | 
  90  |     await page.locator('#userEmail')
  91  |       .fill('arun.kumar@example.com');
  92  | 
  93  |     await page.locator('label[for="gender-radio-1"]').click();
  94  | 
  95  |     await page.locator('#submit').click();
  96  | 
  97  |     await expect(
  98  |       page.locator('#firstName')
  99  |     ).toHaveClass(/field-error/);
  100 | 
  101 |   });
  102 | 
  103 | 
  104 |   // TC07 - Negative
  105 |   test('TC07 - Verify invalid email is rejected', async ({ page }) => {
  106 | 
  107 |     await page.goto(
  108 |       'https://demoqa.com/automation-practice-form'
```