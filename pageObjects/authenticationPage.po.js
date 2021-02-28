const {element, browser, ExpectedConditions} = require('protractor');

class AuthenticationPage{

    get inputEmail(){
        return element(by.css('#email'));
    }

    get inputPassword(){
        return element(by.css('#passwd'));
    }

    get btnSignIn(){
        return element(by.css('#SubmitLogin'));
    }

    async login(email, senha){
        browser.wait(ExpectedConditions.elementToBeClickable(this.inputEmail), 5000);
        this.inputEmail.sendKeys(email);
        this.inputPassword.sendKeys(senha);
        this.btnSignIn.click();
    }
}

module.exports = new AuthenticationPage();