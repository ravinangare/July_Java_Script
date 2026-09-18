// Assert
// Hard Assert - default Assert -- expect  -- if assertion fails, test will fail and stop the execution.
// Soft Assert - if assertion fails, test will fail and still executes further steps.

import{test,expect} from '@playwright/test'

test("Assert Test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const email = await page.locator("#email");
    await email.fill("ravi.nangare@gmail.com")
   // await expect(email).toHaveValue("ravi.nangre@gmail.com") // Hard Assert
    await expect.soft(email).toHaveValue("ravi.nangre@gmail.com")
    await page.locator("input[name='password']").fill("admin123")
    await page.waitForTimeout(5000)
   
})