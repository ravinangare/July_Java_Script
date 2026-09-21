const { test, expect } = require('@playwright/test');
const path = require('path')
const { readCSV } = require('../util/csvReader')

const csvFilePath = path.join(__dirname,'../Data/test1.csv');
const testData = readCSV(csvFilePath);

for(const data of testData){
test(`Read data from csv file for user ${data.username}`, async ({page}) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const username = await page.getByPlaceholder("Username")
    const password = await page.getByPlaceholder("Password")
    await username.fill(data.username)
    await password.fill(data.password)
    await page.getByRole('button', { name: 'Login' }).click()
})
}