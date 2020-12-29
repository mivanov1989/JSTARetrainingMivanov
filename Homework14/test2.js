const {Builder, By, Key, until} = require('selenium-webdriver');
const expect = require('chai').expect;
 
(async function () {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://the-internet.herokuapp.com/hovers');
    //Creating implicit wait for locating of the avatar web element
    let avatar = driver.wait(until.elementLocated(By.xpath("//h5[text() = 'name: user1']/ancestor::div[@class = 'figure']/img")), 10000);
    //Waiting for locating of the avatar web element
    await avatar.then(async (img) => {
    //Hovering over the avatar
    await driver.actions({async: true}).move({origin: img}).perform().then(async () => {
        //Checking if the user name is displayed on hovering the avatar
        await (await driver.findElement(By.xpath("//h5[text() = 'name: user1']"))).isDisplayed().then(displayed => 
        expect(displayed).to.be.true);
    });
});
    console.log("Test passed");
  } finally {
    await driver.quit();
  }
})();