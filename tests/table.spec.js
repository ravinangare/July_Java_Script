import{test,expect} from '@playwright/test'
import { ADDRGETNETWORKPARAMS } from 'node:dns';

test('Static Table test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    const BookTable = await page.locator("table[name='BookTable']");
    expect(await BookTable).toBeVisible();
    const rows = BookTable.locator("tbody tr");
    await (expect(rows).toHaveCount(7))
    const price = await rows.locator("td:nth-child(4)")
    const FirstBookPrice = await price.first().textContent();
    const priceArr = await price.allTextContents();
    //console.log(FirstBookPrice)
    for(const p of priceArr){
        console.log(p)
    }
    const BookName = await rows.locator("td:nth-child(1)")
    console.log(await BookName.allTextContents())
    expect(FirstBookPrice).toEqual('300')
    const FirstBook = await BookName.nth(0).textContent()
    expect(FirstBook).toEqual("Learn Selenium")
})

test('Dynamic Table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    const DynamicTable = await page.locator("#taskTable");
    expect(await DynamicTable).toBeVisible()
    const chromerow = await DynamicTable.locator(" tr",{hasText: "Chrome"});
    const firefoxrow = await DynamicTable.locator(" tr",{hasText: "Firefox"});   
    const Systemrow = await DynamicTable.locator(" tr",{hasText: "System"});
    
    const cpuLoadChrome = await chromerow.locator("td",{hasText:"%"}).textContent()
    console.log(await cpuLoadChrome)

    const MemorySizeFirefox = await firefoxrow.locator("td",{hasText:/\d+\s*MB$/}).textContent()
    console.log(await MemorySizeFirefox)

    const NetworkSpeedChrome = await chromerow.locator("td",{hasText:"Mbps"}).textContent()
    console.log(await NetworkSpeedChrome)

    const DiskSpaceFirefox = await firefoxrow.locator("td",{hasText:/MB\/s$/}).textContent()
    console.log(await DiskSpaceFirefox)

    const chromeCPULoad = await page.locator("strong.chrome-cpu").textContent()
    expect(chromeCPULoad).toEqual(cpuLoadChrome)
})