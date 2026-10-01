const {test,expect} = require('@playwright/test')
const {loginpage} = require('../pages/loginpage')
const {dashboardpage} = require('../pages/dashboardpage')

test('Valid Login creds Test',async({page})=>{
    const loginPage = new loginpage(page);
    const dashboardPage = new dashboardpage(page);
    await test.step('Navigate to login page', async () => {
    await loginPage.navigate()  // inherited from basepage class
    })
    await test.step('Enter valid username and password and click login', async () => {
    await loginPage.validLogin('admin','admin123');     // use encapsulation to call the method from loginpage class
    })
    await test.step('Verify dashboard page', async () => {
    expect(await dashboardPage.validateDashboard()).toContain('Dashboard')
    })
})

test('Invalid Login creds Test',async({page})=>{
    const loginPage = new loginpage(page);
    await loginPage.navigate()
    await loginPage.InvalidLogin('admin1','admin123');
    expect(await loginPage.getErrorMessage()).toContain('Invalid credentials')   
})