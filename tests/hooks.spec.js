// hooks - special methods used to execute common setup or cleanup code before or after test.
// beforeEach - Runs before every test
// beforeAll - runs once before all tests
// afterEach - Runs after every test
// afterAll -  runs once after all tests

import{test,expect} from '@playwright/test'

test.describe('Login Module', ()=>{
    test.beforeAll(async()=>{
        console.log("Test Suite Started")
    })
    test.beforeEach(async ({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
    test('Valid Login',async({page})=>{
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForTimeout(2000)
    })
    test('Invalid Login',async({page})=>{
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin1")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
     await page.waitForTimeout(2000)
    })
    test('Forgot Password',async({page})=>{
    await page.getByText("Forgot your password? ").click()
     await page.waitForTimeout(2000)
    })

    test.afterEach(async ({page}, testInfo)=>{
        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`,
            fullPage: true
        })
    })
    test.afterAll(async()=>{
        console.log("Cleanup test data")
    })
})