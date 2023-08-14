import axios from 'axios';
import { expect } from 'chai';
import { describe, before, after, it } from 'mocha';
import LoginPage from '../pageobjects/LoginPage';
import AccountOverviewpage from '../pageobjects/Accountoverviewpage'; 

describe('ParaBank Transfer Funds', () => {
    let fromAccountNumber: string;
    let toAccountNumber: string;

    before(async () => {
        
        await browser.url('https://parabank.parasoft.com/');
        await browser.maximizeWindow();

        
        await LoginPage.open();
        await LoginPage.usernamelink('ranju565');
        await LoginPage.password('1111');
        await LoginPage.btnSubmit.click();

    
        const res = await axios.get(`https://parabank.parasoft.com/parabank/services/bank/accounts`);
        const accounts = res.data.accounts;

        
        fromAccountNumber = accounts[0].accountNumber;
        toAccountNumber = accounts[1].accountNumber;
    });

    it('should transfer funds between accounts', async () => {
        const transferAmount = 789;


        const transferResponse = await axios.post(
            `https://parabank.parasoft.com/parabank/services/bank/transfer/${fromAccountNumber}/${toAccountNumber}/${transferAmount}`
        );

        
        expect(transferResponse.status).to.equal(200);
        expect(transferResponse.data.message).to.equal(`Successfully transferred $${transferAmount} from account #${fromAccountNumber} to account #${toAccountNumber}`);

        
    });

    after(async () => {
        
        await LoginPage.logout();

        
        await browser.closeWindow();
    });
});
