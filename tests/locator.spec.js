import{test,expect} from '@playwright/test'

test('Locators Test with getBy Text',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    expect (page.getByText('This paragraph contains some')).toBeVisible()
    expect (page.getByText('Another paragraph with')).toBeVisible()
    expect (page.getByText('colored text')).toBeVisible()
    await page.getByText('List item 1').click()
    await page.getByText('link',{exact: true}).click()
    await page.getByText('Submit Form',{}).click()
})

test('Locators Test with getByLabel',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByLabel("Email Address:").fill("utkarshaa.academy@gmail.com")
    await page.getByLabel("Password:").fill("**********")
    await page.getByLabel("Your Age:").fill("42")
    await page.getByLabel("Standard").click()
})

test('Locators Test with getByPlaceHolder',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByPlaceholder("Enter your full name").fill("Ravi Nangare")
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("9423111564")
})

test('Locators Test with getByAltText',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await expect(page.getByAltText('logo image')).toBeVisible()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page.getByAltText("orangehrm-logo").last()).toBeVisible();

})