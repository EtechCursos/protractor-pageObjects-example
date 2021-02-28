const {element, browser, ExpectedConditions } =  require('protractor');

class MyAccountPage{


    get textNameUser(){
        return element(by.css('.account'))
    }

    async getTextName(){
        browser.wait(ExpectedConditions.visibilityOf(this.textNameUser), 5000);
        return await this.textNameUser.getText();
    }

}
module.exports = new MyAccountPage();