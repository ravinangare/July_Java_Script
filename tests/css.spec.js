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