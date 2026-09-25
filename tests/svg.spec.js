import{test,expect} from '@playwright/test'

test('SVG Elements',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const circle = await page.locator("svg circle")
    await circle.click()
    const rect = await page.locator("svg rect[fill='green']")
    await rect.click()

    const dropdwon = await page.getByPlaceholder("Select an item")
    await dropdwon.click()
    await page.locator("div#dropdown div").nth(10).click()

    await page.goto("https://www.google.com/")
    const mike = await page.locator("svg.ByCvB")
    await mike.click()
})