const base = require('@playwright/test');
const {loginpage} = require('../pages/loginpage')
const {dashboardpage} = require('../pages/dashboardpage')

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new loginpage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new dashboardpage(page);
        await use(dashboardPage);
    }
});
exports.expect = base.expect;