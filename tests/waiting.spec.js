// Auto Waiting Time --- default 30 seconds 
// Auto waiting time for expect conditions --- default 5 seconds
import { test,expect } from '@playwright/test';

test('Waiting Mechanism waitFor',async({page})=>{
    test.setTimeout(60000);   // test level timeout, it will override the default timeout of 30 seconds.
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.waitForTimeout(3000);    // Not Recommended to use waitForTimeout, it is a static wait, it will wait for the given time even if the element is visible before that time.
    const username = await page.locator('//input[@class=" mr-sm-2 form-control"]').first();
    await username.waitFor({state:'visible',timeout:3000});
    await username.fill("Sonali");
})

test('Waiting Mechanism waitFor Selector',async({page})=>{
    test.setTimeout(60000);   // test level timeout, it will override the default timeout of 30 seconds.
    await page.goto("https://demoqa.com/automation-practice-form")
   // await page.waitForSelector('#firstName',{state:'visible',timeout:3000});
    await page.locator('#firstName').waitFor({state:'visible',timeout:3000});
    await page.locator('#firstName').fill("Sonali");

    // Assertion timeout is 5 seconds by default, we can change it to 7 seconds using expect timeout option.
    const Male = await page.getByText('Male',{exact:true});
    expect(Male).toBeVisible({timeout:7000});
    await Male.click();
    const Submit = await page.locator('#submit');
    expect(Submit).toHaveText('Submit',{timeout:7000});
    await Submit.click();
})

test('Waiting mechanism for url',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill("Admin");

    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('**/dashboard/index',{timeout:5000});
    expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})
test('Wait for Load State',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill("Admin");  
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('domcontentloaded',{timeout:5000});
    expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})