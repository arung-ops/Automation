# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> DemoQA - Automation Practice Form >> TC07 - Verify invalid email is rejected
- Location: e2e\example.spec.ts:105:7

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

```

# Test source

```ts
  7   | 
  8   |     await page.goto('https://demoqa.com');
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
> 107 |     await page.goto(
      |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  108 |       'https://demoqa.com/automation-practice-form'
  109 |     );
  110 | 
  111 |     await page.locator('#firstName').fill('Arun');
  112 | 
  113 |     await page.locator('#lastName').fill('Kumar');
  114 | 
  115 |     await page.locator('#userEmail')
  116 |       .fill('invalid-email');
  117 | 
  118 |     await page.locator('label[for="gender-radio-1"]').click();
  119 | 
  120 |     await page.locator('#submit').click();
  121 | 
  122 |     await expect(
  123 |       page.locator('#userEmail')
  124 |     ).toHaveClass(/field-error/);
  125 | 
  126 |   });
  127 | 
  128 | 
  129 |   // TC08 - Negative
  130 |   test('TC08 - Verify Last Name is mandatory', async ({ page }) => {
  131 | 
  132 |     await page.goto(
  133 |       'https://demoqa.com/automation-practice-form'
  134 |     );
  135 | 
  136 |     await page.locator('#firstName').fill('Arun');
  137 | 
  138 |     await page.locator('#userEmail')
  139 |       .fill('arun.kumar@example.com');
  140 | 
  141 |     await page.locator('label[for="gender-radio-1"]').click();
  142 | 
  143 |     await page.locator('#submit').click();
  144 | 
  145 |     await expect(
  146 |       page.locator('#lastName')
  147 |     ).toHaveClass(/field-error/);
  148 | 
  149 |   });
  150 | 
  151 | 
  152 |   // TC09 - Negative
  153 |   test('TC09 - Verify email field rejects empty value', async ({ page }) => {
  154 | 
  155 |     await page.goto(
  156 |       'https://demoqa.com/automation-practice-form'
  157 |     );
  158 | 
  159 |     await page.locator('#firstName').fill('Arun');
  160 | 
  161 |     await page.locator('#lastName').fill('Kumar');
  162 | 
  163 |     await page.locator('label[for="gender-radio-1"]').click();
  164 | 
  165 |     await page.locator('#submit').click();
  166 | 
  167 |     await expect(
  168 |       page.locator('#userEmail')
  169 |     ).toHaveClass(/field-error/);
  170 | 
  171 |   });
  172 | 
  173 | 
  174 |   // TC10 - Positive
  175 |   test('TC10 - Verify complete registration form submission', async ({ page }) => {
  176 | 
  177 |     await page.goto(
  178 |       'https://demoqa.com/automation-practice-form'
  179 |     );
  180 | 
  181 |     await page.locator('#firstName').fill('Arun');
  182 | 
  183 |     await page.locator('#lastName').fill('Kumar');
  184 | 
  185 |     await page.locator('#userEmail')
  186 |       .fill('arun.kumar@example.com');
  187 | 
  188 |     await page.locator('label[for="gender-radio-1"]').click();
  189 | 
  190 |     await page.locator('#userNumber')
  191 |       .fill('9876543210');
  192 | 
  193 |     await page.locator('#submit').click();
  194 | 
  195 |     await expect(
  196 |       page.locator('.modal-content')
  197 |     ).toBeVisible();
  198 | 
  199 |     await expect(
  200 |       page.locator('#example-modal-sizes-title-lg')
  201 |     ).toHaveText('Thanks for submitting the form');
  202 | 
  203 |   });
  204 | 
  205 | });
```