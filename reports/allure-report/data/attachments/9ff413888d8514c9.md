# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> has title
- Location: e2e\example.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://demoqa.com/
Call log:
  - navigating to "https://demoqa.com/", waiting until "load"

```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('has title', async ({ page }) => {
> 4 |   await page.goto('https://demoqa.com');
    |              ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://demoqa.com/
  5 | 
  6 |   await expect(page).toHaveTitle(/DEMOQA/);
  7 | });
```