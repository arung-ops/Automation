import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 4 : undefined,

  timeout: 60_000,

  expect: {
    timeout: 10_000,
  },

  reporter: [
    ['list'],

    [
      'html',
      {
        outputFolder: './reports/playwright-report',
        open: 'never',
      },
    ],

    [
      'allure-playwright',
      {
        outputFolder: 'reports/allure-results',
      },
    ],
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://demoqa.com',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 15_000,

    navigationTimeout: 30_000,
  },

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});