import{test,expect} from '@playwright/test'

test('date picker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const SelectDate = await page.locator("input#datepicker");
  //  await SelectDate.fill('10/30/2026')
    await SelectDate.click()
    const PrevBtn = page.locator('a.ui-datepicker-prev');
    const NextBtn = page.locator('a.ui-datepicker-next');
    const date = 30;
    //await NextBtn.click()
    await PrevBtn.click()
    await page.locator(`a[data-date='${date}']`).click()
    await page.waitForTimeout(5000)
})

test('date picker Select Date',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const month = "Oct"
    const year = "2025"
    const date = "30"
    const selectDate = await page.locator('input#txtDate');
    await selectDate.click()
    await page.locator('.ui-datepicker-month').selectOption(month)
    await page.locator('.ui-datepicker-year').selectOption(year)
    await page.locator(`a[data-date='${date}']`).click()
 

    await page.getByPlaceholder("Start Date").fill('2026-05-03');
    await page.getByPlaceholder('End Date').fill('2026-09-15');
    await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('You selected a range of 135')).toBeVisible();
    await page.waitForTimeout(5000)
})

test('test for date picker', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByPlaceholder('yyyy-dd-mm').first().fill('2026-19-10')
  await page.getByPlaceholder('yyyy-dd-mm').nth(1).fill('2026-21-10')
//   await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
//   await page.locator('div').filter({ hasText: /^September$/ }).click();
//   await page.getByText('October').click();
//   await page.getByText('19').click();
//   await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
//   await page.getByText('December').click();
//   await page.getByText('October').click();
//   await page.getByText('21').click();
})