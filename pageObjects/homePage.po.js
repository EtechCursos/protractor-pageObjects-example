const {element, browser} = require('protractor');

class HomePage {

    async visit(){
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get('http://automationpractice.com/index.php')
    }

    get btnSignIn() {
        return element(by.css('.login'))
    }
}

module.exports = new HomePage();
