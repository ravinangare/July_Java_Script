import{test,expect} from '@playwright/test'
import { ADDRGETNETWORKPARAMS } from 'node:dns'

test("Handle Alerts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    page.on('dialog',async dialog =>{
        console.log(dialog.message())
        await dialog.accept();
    })
    await page.getByText("Simple Alert").click()
})

test("Handle Confirmation Alerts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    page.on('dialog',async dialog =>{
        console.log(dialog.message())
      //     await dialog.accept();
        await dialog.dismiss();
    })
    await page.getByText("Confirmation Alert").click()
    await page.waitForTimeout(5000);
})

test("Handle Prompt Alerts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    page.on('dialog',async dialog =>{
        console.log(dialog.message())
        await dialog.accept("Nishant");
    })
    await page.getByText("Prompt Alert").click()
    await page.waitForTimeout(5000);
})

test("Mouse Over",async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
     await page.getByText("Point Me").hover();
      await page.waitForTimeout(5000);
})

test("Mouse Clicks",async({page})=>{
    await page.goto("https://demoqa.com/buttons")
    await page.locator("#doubleClickBtn").dblclick()
    await page.locator("#rightClickBtn").click({
        button: 'right'
    })
    // await page.mouse.click(500,300,{
    //     button:'right'
    // })

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const source =  page.locator("#draggable").first()
    const target =  page.locator("#droppable").first()
    await source.dragTo(target);


    await page.locator("#field1").press('Control+A')
    await page.locator("#field1").press('Control+C')
    await page.locator("#field2").press('Control+V')


    const first = await page.locator("span.ui-slider-handle.ui-corner-all.ui-state-default").first()
    const last = await  page.locator("span.ui-slider-handle.ui-corner-all.ui-state-default").last()
    await first.fill("10")
    await last.fill("100")
    await page.waitForTimeout(5000);
})