import { test, expect } from '@playwright/test';

test('Handle price range slider', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  const amount = page.locator('#amount');
  const handles = page.locator('#slider-range .ui-slider-handle');

  await expect(amount).toHaveValue('$75 - $300');
  await expect(handles).toHaveCount(2);

  await handles.nth(0).focus();
  await page.keyboard.press('Home');
  for (let value = 0; value < 100; value++) {
    await page.keyboard.press('ArrowRight');
  }

  await handles.nth(1).focus();
  await page.keyboard.press('End');
  for (let value = 0; value < 100; value++) {
    await page.keyboard.press('ArrowLeft');
  }

  await expect(amount).toHaveValue('$100 - $400');
});