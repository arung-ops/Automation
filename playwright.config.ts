import { defineConfig, devices } from '@playwright/test';

const isCI = process.env.CI === 'true';

export default defineConfig({
  // =====================================================
  // Test Directory
  // =====================================================

  testDir: './e2e',

  // =====================================================
  // Parallel Execution
  // =====================================================

  fullyParallel: true,

  // Fail CI if test.only is accidentally committed
  forbidOnly: isCI,

  // Retry failed tests in CI
  retries: isCI ? 2 : 0,

  // =====================================================
  // Timeouts
  // =====================================================

  timeout: 60_000,

  expect: {
    timeout: 10_000,
  },

  // =====================================================
  // Reports
  // =====================================================

  reporter: [

    // Console output
    ['list'],

    // Playwright HTML Report
    [
      'html',
      {
        outputFolder: 'reports/playwright-report',
        open: 'never',
      },
    ],

    // Allure Report
    [
      'allure-playwright',
      {
        resultsDir: 'reports/allure-results',
      },
    ],
  ],

  // =====================================================
  // Browser / Test Settings
  // =====================================================

  use: {
    baseURL:
      process.env.BASE_URL || 'https://hq.nyovate.dev',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 15_000,

    navigationTimeout: 30_000,
  },

  // =====================================================
  // Browser Projects
  // =====================================================

  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  // =====================================================
  // CI Workers
  // =====================================================

  ...(isCI
    ? {
        workers: 4,
      }
    : {}),
});