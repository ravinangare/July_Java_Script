class dashboardpage{
    constructor(page){
        this.page = page;
        // locators
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.logoutprofile = page.getByRole('listitem').filter({ hasText: 'gael mierdas' }).locator('i');
        this.logoutBtn = page.getByRole('menuitem', { name: 'Logout' })
    }
    // methods
    async validateDashboard(){
        return await this.dashboardHeading.textContent();
    }
    async Logout(){
        await this.logoutprofile.click()
        await this.logoutBtn.click()
    }
}
module.exports = {dashboardpage}