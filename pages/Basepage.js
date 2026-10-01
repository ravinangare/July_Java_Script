class Basepage{
    constructor(page){
        this.page = page;
    }

    async navigate(url){
        await this.page.goto(url);
    }
    async getPageTitle(){
        return await this.page.title();
    }
    async getPageUrl(){
        return await this.page.url();
    }
    async getPageContent(){
        return await this.page.content();
    }
    async getPageScreenshot(){
        return await this.page.screenshot();
    }   
    async getPageSource(){
        return await this.page.content();
    }
    async refreshPage(){
        await this.page.reload();
    }
    async goBack(){
        await this.page.goBack();
    }
    async goForward(){
        await this.page.goForward();
    }   
}
module.exports = {Basepage}