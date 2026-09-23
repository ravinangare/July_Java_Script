// Test Annotations in playwright
// skip - skip the test completely.
// only - runs only this test
// fail - marks a test as expected to fail
// fixme - skip the test because it is broken or not yet completely implemented
// slow - triplets the timeout (30 seconds * 3 = 90 seconds)
// describe - groups related test cases

import{test,expect} from '@playwright/test'

// // skip - skip the test completely.
test.skip('Firts Test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
})

test('Second Test',async({page,browserName})=>{
    test.skip(browserName === 'webkit')
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
})

// only - runs only this test
// test.only('Third Test',async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     const username = await page.getByPlaceholder("Username")
//     const password = await page.getByPlaceholder("Password")
//     await username.fill("admin")
//     await password.fill("admin123")
//     await page.getByRole('button', { name: 'Login' }).click()
// })

// test.only('Fourth Test',async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     const username = await page.getByPlaceholder("Username")
//     const password = await page.getByPlaceholder("Password")
//     await username.fill("admin")
//     await password.fill("admin123")
//     await page.getByRole('button', { name: 'Login' }).click()
// })

// fail - marks a test as expected to fail

test.fail('Fifth Test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(await page.getByRole('heading',{name:'Dashboard'})).not.toBeVisible()
})

test('Sixth Test',async({page,browserName})=>{
    test.fail(browserName === 'firefox')
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(await page.getByRole('heading',{name:'Dashboard'})).not.toBeVisible()
})

// fixme - skip the test because it is broken or not yet completely implemented
test.fixme('Seventh Test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(await page.getByRole('heading',{name:'Dashboard'})).not.toBeVisible()
})

// slow - triplets the timeout (30 seconds * 3 = 90 seconds)

test('Eight Test',async({page})=>{
    test.slow()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(await page.getByRole('heading',{name:'Dashboard'})).not.toBeVisible()
})

// describe - groups related test cases
test.describe("Login Module",()=>{
    test.describe.configure({
        mode: 'parallel',
        retries: 1,
        timeout: 90000
    })
    test('Valid Login',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
})

   test('Invalid Login',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill("admin")
    await password.fill("admin1")
    await page.getByRole('button', { name: 'Login' }).click()
})
})