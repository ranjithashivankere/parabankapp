import { before } from 'mocha';
import LoginPage from '../pageobjects/LoginPage';
import { assert, expect } from 'chai';
import Registerpage from '../pageobjects/Registerpage';
import Accountoverviewpage from '../pageobjects/Accountoverviewpage';
import { browser, $ } from '@wdio/globals';
import axios from 'axios';
import registerdata from "../data/register.json"

describe('parabankregisterregis', () => {
    before(async () => {
        await browser.url('https://parabank.parasoft.com/');
        await browser.maximizeWindow();
    });

    it('should have correct page title', async () => {
        const expectedTitle = 'ParaBank | Welcome | Online Banking';

        await browser.waitUntil(async () => {
            const actualTitle = await browser.getTitle();
            return actualTitle === expectedTitle;
        }, {
            timeout: 10000,
            timeoutMsg: 'Expected page title did not appear after waiting'
        });

        const actualTitle = await browser.getTitle();
        expect(actualTitle).to.equal(expectedTitle, `Page title is not as expected. Actual: ${actualTitle}`);
    });

    it('should register a new user', async () => {
        await Registerpage.registerlink();

        await Registerpage.firstnametext(registerdata.firstname);

        await Registerpage.lastnametext(registerdata.lastname);
        await Registerpage.addresstext(registerdata.address);
        await Registerpage.citytext(registerdata.city);
        await Registerpage.statetext(registerdata.state);
        await Registerpage.zipcodetext(registerdata.zipcode);
        await Registerpage.phonetext(registerdata.phone);
        await Registerpage.ssntext(registerdata.ssn);
        await Registerpage.usernametext(registerdata.username);
        await Registerpage.passwordtext(registerdata.password);
        await Registerpage.Confirmpass(registerdata.confirmpsw);

        await Registerpage.clickregisterbutton();


        
        

        });



    
});
