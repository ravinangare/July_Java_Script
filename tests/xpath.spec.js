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
test('Xpath Axes methods',async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.getByPlaceholder('Search Amazon.in').fill('Andriod Phone')
    await page.locator('#nav-search-submit-button').click()
    // Xpath Axes methods parent Child
    // Syntax
    // //tagname[@attribute='value']//child::tagname
    // parent
    // child
    // sibling
    // ancestors
    // descendents
    // following
    // following-sibling
    // self

   // await page.locator("//span[text()='Get It Today']//parent::a").click()
   //  await page.locator("//span[text()='Get It Today']//preceding-sibling::div").click()
   // await page.locator("//span[text()='Get It Today']//ancestor::span[@role='presentation' and @data-csa-c-type='element']").click()
 //   await page.locator('//span[@data-component-type="s-search-results"]//child::div[@class="a-section"]//child::h2//child::span').first().click()
//    await page.locator('//span[@data-component-type="s-search-results"]//div[@class="a-section"]//h2/child:://span').nth(2).click()
    //span[@data-component-type="s-search-results"]//div[@class="a-section"]
   // await page.locator("//a[text()='Amazon Global Selling']//parent::li//following-sibling::li").first().click()
    await page.locator("//a[text()='Amazon Global Selling']//parent::li//preceding-sibling::li").first().click()
})