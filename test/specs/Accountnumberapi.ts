import axios from 'axios';
import { expect } from 'chai';
import { describe, it, before } from 'mocha';

describe('API Testing', () => {
    let accountNumber: string;

    beforeEach(async () => {
        
        const response = await axios.get('https://parabank.parasoft.com/parabank/overview.htm');
        const regex = /Account Number: (\d+)/;
        const match = response.data.match(regex);
        if (match) {
            accountNumber = match[1];
        } else {
            throw new Error('Account number not found.');
        }
    });

    it('should deposit an amount to the account', async () => {
        const depositAmount = 400;

        
        const response = await axios.post(`https://parabank.parasoft.com/parabank/services/bank/deposit?accountId=${accountNumber}&amount=${depositAmount}`);

    
        expect(response.status).to.equal(200);
        expect(response.data.message).to.equal(`Successfully deposited ${depositAmount} to account #${accountNumber}`);
    });

    it('should verify deposited amount in account', async () => {
        
        const accountDetailsResponse = await axios.get(`https://parabank.parasoft.com/parabank/services/bank/accounts/${accountNumber}`);

        
        expect(accountDetailsResponse.status).to.equal(200);
        expect(accountDetailsResponse.data.balance).to.be.above(0);
    });


    


    


    





});