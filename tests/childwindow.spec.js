import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Jobs', description: 'Search Jobs' }).click();
  await page.getByRole('link', { name: 'Companies', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByText('MOST POPULARRESUME').click();
  await expect(page1.locator('#referenceStickyViewport')).toContainText('Key Features');
  await page1.getByRole('link', { name: 'RESUME WRITING' }).click();
  await expect(page1.getByText('Benefits of buying Text')).toBeVisible();
  await expect(page1.locator('#benefitChart')).toContainText('Benefits of buying Text Resume service from Naukri');
  await page1.getByRole('columnheader', { name: 'Benefits on Naukri' }).click();
  await page1.getByRole('cell', { name: 'CV visible to all recruiters' }).click();
  await expect(page1.getByRole('columnheader', { name: 'Benefits on Naukri' })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'CV visible to all recruiters' })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'Stand out as the right' })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'Highlight skills valued by' })).toBeVisible();
  await page.getByRole('link', { name: 'Naukri.com' }).first().click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Remote-img Remote arrow-icon' }).click();
  const page2 = await page2Promise;
  await page2.locator('label').filter({ hasText: 'Hybrid(21979)' }).locator('i').click();
});