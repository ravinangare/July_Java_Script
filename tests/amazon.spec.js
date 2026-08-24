import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobiles');
  await page.goto('https://www.amazon.in/s?k=mobiles&crid=2VGEZGYZ9QD87&sprefix=mobiles%2Caps%2C251&ref=nb_sb_noss_2');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'iQOO Z11 Lite 44W 5G (Solar' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('#title')).toContainText('iQOO Z11 Lite 44W 5G (Solar Flame, 6GB RAM, 256GB Storage) | 6500mAh Battery with 44W Fast Charging* | Dimensity 6300 with 579k+ AnTuTu Score* | OriginOS 6.0 with AI Creation* & Private Space*');
});