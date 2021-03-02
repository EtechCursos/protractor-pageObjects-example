
const {browser} = require('protractor');
const { isMainThread } = require('worker_threads');

var homePage = require('../pageObjects/homePage.po.js');
var authenticationPage = require('../pageObjects/authenticationPage.po.js');
var myAccountPage = require('../pageObjects/myAcccountPage.po.js')

describe('Login no site de compra: ', function(){
    beforeEach(function(){
        homePage.visit();
    });

    it('Realizar login com sucesso na aplicação', 
     function(){
        homePage.visit();
         homePage.btnSignIn.click();
        authenticationPage.login('automacao2@protractor.com.br','teste123')
        expect(myAccountPage.getTextName()).toEqual("Protractor Teste");
    });

    it('Realizar login com sucesso na aplicação2', 
     function(){
        expect(myAccountPage.getTextName()).toEqual("Protractor Teste");
    });

    it('Realizar login com sucesso na aplicação3', 
     function(){
        expect(myAccountPage.getTextName()).toEqual("Protractor Teste");
    });

    it('Realizar login com sucesso na aplicação4', 
     function(){
        expect(myAccountPage.getTextName()).toEqual("Protractor Teste");
    });
    

    afterAll(function(){
        browser.close();
    });
});