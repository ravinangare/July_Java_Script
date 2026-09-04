// How to Handle Dropdowns in Playwright

// In Playwright, you can handle dropdowns using the `selectOption` method. 
// This method allows you to select an option from a dropdown menu by its value, label, or index.

import { test, expect } from '@playwright/test';

test('Handle Static Dropdowns in Playwright', async ({ page }) => {
    // Navigate to the page with the dropdown
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption('india'); // Select by value
    await page.locator('#country').selectOption({ label: 'Brazil' }); // Select by label
    await page.locator('#country').selectOption({ index: 3 }); // Select by index
    await expect(await page.locator('#country').inputValue()).toBe('germany'); // Verify the selected value
})

test('Handle Static MultiSelectDropdowns in Playwright', async ({ page }) => {
    // Navigate to the page with the dropdown
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#colors').selectOption(['red', 'green', 'white']); // Select multiple options by value
    await expect(await page.locator('#colors').inputValue()).toContain('red','green','white'); // Verify the selected values
})

test('Handle Dynamic Dropdowns in Playwright', async ({ page }) => {
    // Navigate to the page with the dropdown
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByPlaceholder('Select an item').click(); // Click on the dropdown to open it
    await page.locator("//div[text()='Item 30']").click()
    await expect(await page.getByPlaceholder('Select an item').inputValue()).toBe('Item 30')
})

test('Auto Suggest Dropdown',async({page})=>{
    await page.goto('https://www.amazon.in')
    await page.locator('input#twotabsearchtextbox').fill('mobiles');
  // await page.locator('div.left-pane-results-container>div').first().click()
  // await page.locator('div.left-pane-results-container>div').nth(1).click()
  // await page.locator('div.left-pane-results-container>div').last().click()
     await page.locator('div.left-pane-results-container>div span').filter({hasText: 'under 15000 5g phones'}).click()
})