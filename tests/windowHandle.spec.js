import{test,expect} from '@playwright/test'

test('Multiple popup test',async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.locator('#PopUp').click()
    await page.waitForTimeout(2000)
    const pages = context.pages();

    const popup1 = pages[1]
    const popup2 = pages[2]

    await popup1.waitForLoadState();
    await popup2.waitForLoadState();

    console.log(await popup1.title())
    console.log(await popup2.title())

    await popup1.locator("a[class='selenium-button selenium-ide text-uppercase fw-bold']").click();
    await popup2.getByRole('link', { name: 'Get started' }).click()
    await expect(popup2.getByRole('heading', { name: 'Installation',level: 1})).toBeVisible();
})

test('window handle test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Jobs', description: 'Search Jobs' }).click();
  await page.getByRole('link', { name: 'Companies', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByText('MOST POPULARRESUME').click();
  await expect(page1.locator('#referenceStickyViewport')).toContainText('Key Features');
  await page1.getByRole('link', { name: 'RESUME WRITING' }).click();
  await expect(page1.getByText('Benefits of buying Text')).toBeVisible();
  await expect(page1.locator('#benefitChart')).toContainText('Benefits of buying Text Resume service from Naukri');
  await page1.getByRole('columnheader', { name: 'Benefits on Naukri' }).click();
  await page1.getByRole('cell', { name: 'CV visible to all recruiters' }).click();
  await expect(page1.getByRole('columnheader', { name: 'Benefits on Naukri' })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'CV visible to all recruiters' })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'Stand out as the right' })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'Highlight skills valued by' })).toBeVisible();
  await page.getByRole('link', { name: 'Naukri.com' }).first().click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Remote-img Remote arrow-icon' }).click();
  const page2 = await page2Promise;
  await page2.locator('label').filter({ hasText: 'Hybrid(21979)' }).locator('i').click();
});

test('basic auth test',async({page})=>{
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')    // Not recommended
    await page.waitForTimeout(5000)
})

test('basic auth',async({browser})=>{
    const context = await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        }
    })
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth')   
    expect(await page.locator("p")).toContainText("Congratulations! You must have the proper credentials.");
    await page.waitForTimeout(5000)
})