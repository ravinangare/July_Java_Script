const {test,expect} = require('@playwright/test')
const {loginpage} = require('../pages/loginpage')
const {dashboardpage} = require('../pages/dashboardpage')

test('Valid Login creds Test',async({page})=>{
    const loginPage = new loginpage(page);
    const dashboardPage = new dashboardpage(page);
    await loginPage.naviagate()
    await loginPage.validLogin('admin','admin123');
    expect(await dashboardPage.validateDashboard()).toContain('Dashboard')
})

test('Invalid Login creds Test',async({page})=>{
    const loginPage = new loginpage(page);
    await loginPage.naviagate()
    await loginPage.InvalidLogin('admin1','admin123');
    expect(await loginPage.getErrorMessage()).toContain('Invalid credentials')   
})