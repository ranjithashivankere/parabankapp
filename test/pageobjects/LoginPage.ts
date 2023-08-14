import { $ } from '@wdio/globals'


class LoginPage  {
  
    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get title () {
        return $('//title[text()="ParaBank | Welcome | Online Banking"]');
    }

    get lnkLogout(){
        return $('a[href="/parabank/logout.htm"]');
    }
    
    async usernamelink (username:string) 
    {
        await this.inputUsername.setValue(username);
    }
    async password(password1:string)
    {
        await this.inputPassword.setValue(password1);}


        

    async logout(){
        await this.lnkLogout.click();
        await this.inputUsername.waitForDisplayed();
    }
    
    open () {
        return browser.url('https://parabank.parasoft.com/');
    }
}

export default new LoginPage();
