import{test,expect} from '@playwright/test'
// const {test,expect} = require('@playwright/test')

test("My First Test",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html',{
        waitUntil:"load"})
    await page.getByRole('button',{name:'Primary Action'}).click()
    expect(await page.getByRole('button',{name:'Primary Action'})).toBeVisible();
    await page.getByRole('button',{name: 'Toggle Button'}).click()
    expect(await page.getByRole('button',{name:'Toggle Button'})).toBeVisible();
    await page.getByRole('button',{name: 'Div with button role'}).click()
    await page.getByRole('textbox', { name: 'Username:' }).fill('Nishant')
    await page.getByRole('checkbox',{name: 'Accept terms'}).check()
    await page.getByRole('link',{ name:'Home'}).nth(1).click()
    await page.getByRole('link',{name:'Products'}).first().click()
    await page.getByRole('link',{name:'Contact'}).first().click()

})