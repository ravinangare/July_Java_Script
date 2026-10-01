const{test,expect}=require('../fixtures/customfixtures');

test('Valid Login creds Test',async({loginPage,dashboardPage})=>{
    await loginPage.naviagate()
    await loginPage.validLogin('admin','admin123');
    expect(await dashboardPage.validateDashboard()).toContain('Dashboard')
})

test('Invalid Login creds Test',async({loginPage})=>{
    await loginPage.naviagate()
    await loginPage.InvalidLogin('admin1','admin123');
    expect(await loginPage.getErrorMessage()).toContain('Invalid credentials')   
})  