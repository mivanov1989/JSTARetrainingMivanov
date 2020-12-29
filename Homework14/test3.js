const {Builder, By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
 
(async function () {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://formy-project.herokuapp.com/form');
    //Creating implicit wait for locating of the page title to make sure it's loaded
    let title = driver.wait(until.elementLocated(By.xpath("//h1")), 10000);
    await title.then(async () => {
    await driver.findElement(By.id('first-name')).sendKeys('Peter');
    await driver.findElement(By.id('last-name')).sendKeys('Peterson');
    await driver.findElement(By.id('job-title')).sendKeys('tester');
    await driver.findElement(By.xpath("//input[@id='radio-button-1']")).click();
    await driver.findElement(By.xpath("//input[@id='checkbox-1']")).click();
    await driver.findElement(By.id("select-menu")).click().then(async () => {
        await driver.findElement(By.xpath("//option[@value='2']")).click();
    });
    await driver.findElement(By.xpath("//input[@id='datepicker']")).sendKeys('12/12/2020');
    await driver.findElement(By.xpath("//a[@role='button']")).click();
    
    let successMsg = driver.wait(until.elementLocated(By.xpath("//div[@class='alert alert-success']")), 5000);
    await successMsg.isDisplayed().then(displayed => 
    expect(displayed).to.be.true
    );
});
    console.log("Test passed");
  } finally {
    await driver.quit();
  }
})();