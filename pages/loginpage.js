import { Basepage } from '../pages/Basepage';

class loginpage extends Basepage {
   constructor(page){
        super(page);
        // locators
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.invalidcreds = page.getByText('Invalid credentials');
        this.url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
     
    }
  //  action methods
    async navigate(url = this.url){
        await super.navigate(url)
    }

    async naviagate(url = this.url){
        await this.navigate(url)
    }

    async validLogin(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(invalidusername,password){
        await this.username.fill(invalidusername)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async InvalidLogin(invalidusername,password){
        await this.invalidLogin(invalidusername, password)
    }

    async getErrorMessage(){
        return await this.invalidcreds.textContent();
    }
}
module.exports = {loginpage}