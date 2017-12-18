'use strict'
var school = require('./constant.json');


module.exports = {

    schoolSearch: function(browser){
        browser.url("https://www.greatschools.org/");
        var length =  school.length;
        console.log(length)
        for (var i=0;i<length;i++ ) {
            console.log(school[i].f1);
            //client.init();
            browser.waitForElementVisible("body", 2000);
            browser.useXpath();
            browser.clearValue('//*[@name=\'locationSearchString\']').pause(2000);
            browser.setValue('//*[@name=\'locationSearchString\']', school[i].f2).pause(2000);
            console.log("School name entered", school[i].f1);
            browser.click('//*[@id="home-page"]/div[1]/div/div[2]/div/div[2]/div[2]/form/div/div/button').pause(2000);
            console.log("Cliked on search");
            browser.click('/html/body/div[6]/div[2]/div[6]/div/div[2]/div/div[4]/div/div[1]/div/div[2]/div[2]/div[1]/a').pause(2000);
            browser.click('//*[@class="js-continueToDestination"]');
            browser.click('//*[@id="close-school-tour"]');
            browser.verify.containsText('//*[@id="hero"]/div/div[2]/div[1]/div[1]/div[1]/div[1]/a/div/span[2]', school[i].f4);
            console.log("Matched address");
            browser.verify.containsText('//*[@id="hero"]/div/div[2]/div[2]/div[3]/div[2]', school[i].f5);
            console.log("Found Grades");
            browser.verify.containsText('//*[@id="hero"]/div/div[2]/div[2]/div[4]/div[1]', "STUDENTS");
            console.log("Found Student");
            browser.getText('//*[@id="hero"]/div/div[2]/div[2]/div[5]/div[2]',(function (result) {
                this.verify.equal(result.value.toLowerCase(),school[i].f7)
            }));
            console.log("Found Type");
        }

}
};