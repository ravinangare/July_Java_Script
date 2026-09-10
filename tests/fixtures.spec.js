// what is fixtures?
// A fixture is a reusable setup mechanism that provides the required objects, data, or environemnt. to test.
// Reduce duplicate code
// perform common setup
// perform common teardown
// manage browser/context/page
// manage test data
// implement authentication.
// implentation page object model
// custom reusable fixture utlities.

// built in fixture
// browser  --- browser instance create
// context ---- browser context create
// page -----   browser page/tab
// request ---  API request context
// browserName -- current browser Name

import{test,expect,firefox} from '@playwright/test'

// browser fixture
test('Browser Test',async({browser})=>{
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto("https://www.google.com")
})
// browser ---> context ----> page

// context fixture
test('Context Test',async({context})=>{
  const page = await context.newPage()
  await page.goto("https://www.playwright.dev")
})

// page fixture
test('page Fixture',async({page})=>{
    await page.goto('https://www.utkarshaaacademy.com')
})
// creates browser context
// create page
// provide page to test
// cleans it up after test

// request fixture
test('Api Test',async({request})=>{
   const response = await request.get('https://demoqa.com/BookStore/v1/Books')
   expect(response.status()).toBe(200)
   console.log(await response.json())
})

// fixture lifecycle
// test starts ---> Fixture setup ---> test execution ----> fixture teardown ---> test ends.

// custom fixtures
// page object model ---> page wise class create 
// test case login test ---> login page ---> login object create ---> login page method call
// performance test ---> login page ---> login object create ---> login page method call ---> dashboard ---> performance ---> performance test
// custom fixtures ---

test('Multiple browser instances',async()=>{
   const browser = await firefox.launch();
   const context1 = await browser.newContext();
   const context2 = await browser.newContext();

   const page1 = await context1.newPage()
   const page2 = await context2.newPage()

   await page1.goto('https://www.google.com')
   await page2.goto('https://www.playwright.dev')

   await page1.waitForTimeout(5000)
   await page2.waitForTimeout(5000)
   await browser.close()
})