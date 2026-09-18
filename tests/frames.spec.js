import{test,expect} from '@playwright/test'

test('Handle Frames',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/video")
    const frame1 = await page.frameLocator('iframe[data-aid="VIDEO_VIDEO_RENDERED1"]').first()
    await frame1.locator("button[aria-label='Play video']").click()
    await page.waitForTimeout(5000)

    const frame2 = await page.frameLocator('iframe[data-aid="VIDEO_VIDEO_RENDERED1"]').last()
    await frame2.locator("button[aria-label='Play video']").click()
    await page.waitForTimeout(5000)

    await page.getByText("Placements").first().click()
    await page.waitForTimeout(5000)

})

test('Nested Frames',async({page})=>{
    await page.goto("https://www.dezlearn.com/nested-iframes-example/")
    const parentFrame = await page.frameLocator("#parent_iframe");
    const childFrame = await parentFrame.frameLocator("#iframe1")
    await childFrame.getByText("Click Here").click()
    expect(childFrame.locator("#processing")).toHaveText("Hooray..! You clicked the button from iframe 2")
     await page.waitForTimeout(5000)

})