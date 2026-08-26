import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Test location
  testDir: './tests',

  // Run independent tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Parallel workers
  // Local machine  -> Playwright decides
  // GitHub Actions  -> 4 workers
  workers: process.env.CI ? 4 : undefined,

  // Test timeout
  timeout: 60_000,

  // Assertion timeout
  expect: {
    timeout: 10_000,
  },

  // Reports
  reporter: [
    ['list'],

    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never',
      },
    ],
  ],

  // Common browser settings
  use: {
    baseURL: process.env.BASE_URL || 'https://demoqa.com',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 15_000,

    navigationTimeout: 30_000,
  },

  // Browser
  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});