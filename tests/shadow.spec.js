import{test,expect} from '@playwright/test'

test('Handle Shadow Dom Elemenets',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const shadowTextBox = await page.locator("input[type='text']").last();
    await shadowTextBox.fill("Utkatshaa Academy")
    const shadowCheckBox = await page.locator("input[type='checkbox']").last();
    await shadowCheckBox.check();
    await page.getByText("Youtube").click()
})