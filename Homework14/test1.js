const {Builder, By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
 
(async function () {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://the-internet.herokuapp.com/dropdown');
    //Creating implicit wait for locating of the dropdown web element
    let dropDownOpts = driver.wait(until.elementLocated(By.xpath('//select')), 10000);
    //Waiting for locating of the dropdown web element
    await dropDownOpts.findElements(By.xpath('//option')).then(async (options) => {
    //Checking if the first option in the dropdown web element is disabled
    await Array.from(options)[0].isEnabled().then(option => expect(option).to.be.false);
    //Checking if the second option in the dropdown web element is enabled
    await Array.from(options)[1].isEnabled().then(option => expect(option).to.be.true);
});
    console.log("Test passed");
  } finally {
    await driver.quit();
  }
})();