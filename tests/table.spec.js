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

test('Pagination Table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const paginationTable = await page.locator('#productTable')
    await expect(paginationTable).toBeVisible();
    const tableButtons = await page.locator("#pagination a")
    const pageCount = await tableButtons.count();
    expect(pageCount).toEqual(4)

    const allproducts = [];
    const searchProduct = "Television";
    let productFound = false;
    for(let pageNum = 1; pageNum <= pageCount;pageNum++){
        const ActiveBtn = await page.locator("ul.pagination a[class='active']");
        await expect(ActiveBtn).toHaveText(`${pageNum}`)
        const rows = await paginationTable.locator("tbody tr")
        const rowscount = await rows.count()
        console.log("Rows on page " +pageNum+ "rows count for" +rowscount)
        for(let i =0;i<rowscount;i++){
            const idcolumn = await rows.nth(i).locator("td").nth(0).textContent()
            const ProductName = await rows.nth(i).locator("td").nth(1).textContent()
            const productPrice = await rows.nth(i).locator("td").nth(2).textContent()
            if(ProductName.includes(searchProduct)){
                productFound = true;
                console.log(productFound)
                console.log(await productPrice)
            }
             const product = {
            id : idcolumn.trim(),
            product: ProductName.trim(),
            price : productPrice.trim()
        };
        allproducts.push(product);
        }
        if(pageNum<pageCount){
            const nextBtn = page.locator("#pagination a",{hasText: `${pageNum + 1}`})
            await nextBtn.click()
            await expect(page.locator("ul.pagination a[class='active']")).toHaveText(`${pageNum + 1}`)
        }
    }
    expect(productFound).toBeTruthy()
    expect(allproducts.length).toEqual(20)
    console.log(allproducts.length)
    console.log(allproducts)
})