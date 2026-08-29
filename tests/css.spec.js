import{test,expect} from '@playwright/test'

test('css Selector test',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    // css with id
    // syntax ---> tagname#id_value
    // input#firstName
    // #firstName
    await page.locator("#firstName").fill("Nishant")

    // css with className
    // syntax ---> tagname.class_value
    // input.mr-sm-2.form-control
    //await page.locator("input.mr-sm-2.form-control").nth(1).fill("Bokade")
    

    // css with other attribute
    // syntax ----> tagname[attribute='value']
    // input[placeholder="name@example.com"]
    await page.locator("input[placeholder='name@example.com']").fill('nishant.bokade@gmail.com')
    

    // css with combining attribute

    //await page.locator("input.mr-sm-2.form-control#lastName").fill("Bokade")
    await page.locator('input.mr-sm-2.form-control[placeholder="Last Name"]').fill("Bokade")
})

test('css with tagname',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page.locator('div[class="orangehrm-login-footer-sm"]>a:last-child')).toBeVisible()
    await expect(page.locator('div[class="orangehrm-login-footer-sm"]>a:nth-child(2)')).toBeVisible()
    await expect(page.locator('div[class="orangehrm-login-footer-sm"]>a:nth-child(3)')).toBeVisible()
    await expect(page.locator('div[class="orangehrm-login-footer-sm"]>a:first-child')).toBeVisible()
    await page.locator('[name="username"]').fill("admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('button').click()
})

test('css with direct child',async({page})=>{
        await page.goto("https://demoqa.com/automation-practice-form")
        await page.locator("div[class='form-check form-check-inline']>input[value='Male']").click();
        await page.locator("div>button").click()
})

test('css with descendent',async({page})=>{
        await page.goto("https://demoqa.com/automation-practice-form")
        await page.locator("div button").last().click()
})


test('css with Adjacent Sibling',async({page})=>{
        await page.goto("https://demoqa.com/automation-practice-form")
        await page.locator("input[value='Female'] + label").click()
})

test('css with first & last child',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("div[class='form-check form-check-inline']:first-child").first().click()
    await page.locator("div[class='form-check form-check-inline']:first-child").last().click()

    await page.locator("div[class='form-check form-check-inline']:last-child").first().click()
    await page.locator("div[class='form-check form-check-inline']:last-child").last().click()

    await page.locator("div[class='form-check form-check-inline']:nth-child(2)").first().click()
    await page.locator("div[class='form-check form-check-inline']:nth-child(2)").last().click()
})

test('starts with, Ends With & contains',async({page})=>{
      await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator('[placeholder^="Mobile"]').fill('9423111564')    // strats with
    await page.locator('[placeholder$="Address"]').fill('Ambegaon Pune') // ends with
    await page.locator('[id*="jectsInp"]').fill('English')  // contains
})