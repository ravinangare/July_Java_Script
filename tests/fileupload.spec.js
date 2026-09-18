import{test,expect} from '@playwright/test'
import fs from 'fs'

test('Single file upload',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    // const filePath = path.join('C:', 'Users', 'GR0002TU', 'app1.js')
    // await page.setInputFiles('#singleFileInput', filePath)

  //  await page.setInputFiles("#singleFileInput","./fileuploads/abc.txt")
    await page.setInputFiles("#singleFileInput","C:/Users/GR0002TU/Arrays.pdf")
    await page.getByText("Upload Single File").click()
    expect(await page.locator("#singleFileStatus")).toContainText("Arrays.pdf")

})

test('Multiple file upload',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.setInputFiles("#multipleFilesInput",["C:/Users/GR0002TU/Arrays.pdf","C:/Users/GR0002TU/class_object.pdf"])
    await page.getByText("Upload Multiple Files").click()

})

test('File Download test',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("textarea#inputText").fill("utkarshaa Academy")
    await page.getByText("Generate and Download Text File").click();
    const downloadPromise = page.waitForEvent('download')
    await page.getByText("Download Text File",{exact:true}).click()
    const download = await downloadPromise;
    await download.saveAs('downloads/info1.txt')
    expect(fs.existsSync('downloads/info1.txt')).toBeTruthy()
})