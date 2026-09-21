const{test,expect} = require('@playwright/test')
const { readExcel } = require('../util/excelReader')

const excelData = readExcel('C://Users//GR0002TU//July Java script//Data//test2.xlsx')

excelData.forEach((data)=>{
test(`Read Data from Excel for user ${data.username}`,async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill(data.username)
    await password.fill(data.password)
    await page.getByRole('button', { name: 'Login' }).click()
})
})