// what is xpath? - xml path.
// Syntax
/*
    //tagname[@attribute='value']
    page.locator("//input[@id='username']")
*/

import{test,expect} from '@playwright/test'

test('Basic Xpath Test',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator('//input[@class=" mr-sm-2 form-control"]').first().fill("Sonali")
    // contains method
    // Syntax
    // tagname[contains(@attribute,'partial_value')]
    await page.locator('//input[contains(@placeholder,"Last")]').fill("Mane");
    await page.locator('//input[contains(@id,"jectsInp")]').fill('English')

    // starts with
    await page.locator('//input[starts-with(@placeholder,"Mobile")]').fill('9423111564')    // strats with

    // Xpatg using Text
    await page.locator("//label[text()='Male']").click()
    await page.locator("//label[text()='Sports']").check()
    await page.locator("//label[text()='Reading']").check()
    // xpath using contains text
    await page.locator("//label[contains(text(),'Mu')]").check()
})

test('Xpath Test using multiple Attributes',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator('//input[@class=" mr-sm-2 form-control" and @placeholder="First Name"]').fill("Riddhi")
    await page.locator('//input[@class="-sm-2 form-control" or @placeholder="Last Name"]').fill('Ganorkar')
})