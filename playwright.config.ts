import { defineConfig, devices } from '@playwright/test';

const isCI = process.env.CI === 'true';

export default defineConfig({
  testDir: './e2e',

  fullyParallel: true,

  forbidOnly: isCI,

  retries: isCI ? 2 : 0,

  timeout: 60_000,

  expect: {
    timeout: 10_000,
  },

  reporter: [
    ['list'],

    [
      'html',
      {
        outputFolder: 'reports/playwright-report',
        open: 'never',
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

  ...(isCI
    ? {
        workers: 4,
      }
    : {}),
});