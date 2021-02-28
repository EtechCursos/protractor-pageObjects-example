const {browser} = require('protractor');
const { isMainThread } = require('worker_threads');

var homePage = require('../pageObjects/homePage.po.js');
var authenticationPage = require('../pageObjects/authenticationPage.po.js');
var myAccountPage = require('../pageObjects/myAcccountPage.po.js')
const {expect} = require('chai');

describe('Login no site de compra: ', function(){
    beforeAll(function(){
        homePage.visit();
    });

    it('Realizar login com sucesso na aplicação', 
    async function(){
        await homePage.btnSignIn.click();
        authenticationPage.login('automacao2@protractor.com.br','teste123')
        expect(await myAccountPage.getTextName()).to.be.eq("Protractor Teste");
    })

    afterAll(function(){
        browser.close();
    })
});