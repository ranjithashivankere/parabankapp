import Page from "./page.js";

class Registerpage {
    
        get register() {
            return $('//a[text()="Register"]');
        }
        
        get firstName()
        {
            return $('[id="customer.firstName"]');
        }
    
        get lastName()
        {
            return $('[id="customer.lastName"]');
        }
    
        get address()
        {
            return $('[id="customer.address.street"]');
        }
    
        get city()
        {
            return $('[id="customer.address.city"]');
        }
    
        get state()
        {
            return $('[id="customer.address.state"]');
        }
    
        get zipCode()
        {
            return $('[id="customer.address.zipCode"]');
        }
    
        get phoneNumber()
        {
            return $('[id="customer.phoneNumber"]');
        }
    
        get ssn()
        {
            return $('[id="customer.ssn"]');
        }
    
        get Username()
        {
            return $('[id="customer.username"]');
        }
    
        get Password()
        {
            return $('[id="customer.password"]');
        }  
    
        get ConfirmPassword()
        {
            return $('#repeatedPassword');
        }
    
        get Submit()
        {
            return $('input[value="Register"]');
        }
    
        get WelcomeTitletext()
        {
            return $('#rightPanel h1');
        }
        
        get WelcomeMessage()
        {
            return $('#rightPanel p');
        }
    
    


     public async registerlink()
     {
      await this.register.click();
     }
    public async firstnametext (firstname1:string)
    {
    await this.firstName.setValue(firstname1);
    }
    public async lastnametext (lastname1:string){
    await this.lastName.setValue(lastname1);
    }
    public async addresstext(address1:string){
    (await this.address).setValue(address1);
   }
   public async citytext(city1:string){
    (await this.city).setValue(city1);
}
public async statetext(state1:string){
    (await this.state).setValue(state1);
}
public async zipcodetext(zipcode1:string){
    await this.zipCode.setValue(zipcode1);
}
public async phonetext(phone1:string){
    (await this.phoneNumber).setValue(phone1);
}
public async ssntext(ssn1:string){
    (await this.ssn).setValue(ssn1);
}
public async usernametext(username1:string){
    (await this.Username).setValue(username1);
}
public async passwordtext(password1:string){
    (await this.Password).setValue(password1);
}
public async Confirmpass(conpassword:string)
{
    (await this.ConfirmPassword).setValue(conpassword);
}
public async clickregisterbutton() {
    const submitButton = await this.Submit;

    // Wait for the submit button to be displayed before clicking it
    await submitButton?.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: 'Submit button did not appear after waiting'
    });

    // Click the submit button if it's defined
    await submitButton?.click();
}












}
export default new Registerpage ()


