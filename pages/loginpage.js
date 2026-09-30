class loginpage{
    constructor(page){
        this.page = page;
        // locators
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.invalidcreds = page.getByText('Invalid credentials');
    }
    // action methods
    async naviagate(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    async validLogin(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

        async InvalidLogin(invalidusername,password){
        await this.username.fill(invalidusername)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    async getErrorMessage(){
        return await this.invalidcreds.textContent();
    }
}
module.exports = {loginpage}