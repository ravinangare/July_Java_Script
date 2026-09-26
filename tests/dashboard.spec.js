import{test,expect} from '@playwright/test'
import loginData from '../Data/testdata.json'
import users from '../Data/users.json'

test("Read the data from json file",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill(loginData.username)
    await password.fill(loginData.password)
    await page.getByRole('button', { name: 'Login' }).click()
})

users.forEach(user =>{
    test(`Read data from json ${user.username}`,async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill(user.username)
    await password.fill(user.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForLoadState('load')
    const pageUrl = await page.url()
    await expect(await pageUrl).toContain('dashboard/index')
    })
})