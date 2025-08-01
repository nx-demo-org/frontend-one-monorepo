import { test, expect } from '@playwright/test';

test('app0 test 2', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(10000);s

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
