// tags are used to catogorize tests and then run or exclude specific groups of tests.

import{test,expect} from '@playwright/test'

test('tags test',{tag: '@smoke'},async({page})=>{
    await page.goto("https://www.playwright.dev")
     // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
})

test('get started link @regression', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation',level: 1})).toBeVisible();
});