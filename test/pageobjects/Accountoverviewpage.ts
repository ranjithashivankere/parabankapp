import { $ } from '@wdio/globals'

class Accountoverviewpage  {
    
    get accountNumberLink() {
        return $('//a[contains(@href, "/parabank/services/bank/accounts/") and contains(@href, "account.htm")]');
    }

    get AvailableBalance () {
        return $('//tr[@ng-repeat="account in accounts"]//td[last()]');
    }

    get AccountOverview() {
        return $('a[href="/parabank/overview.htm"]');
    }
    
   

    public async clicknumber(){

        (await this.accountNumberLink).click();
    }

    public async clickaccountoverview(){
        (await this.AccountOverview).click();
     }
      

      public async Amountbalance2(){
        (await this.AvailableBalance).click();





}
}

export default new Accountoverviewpage();
