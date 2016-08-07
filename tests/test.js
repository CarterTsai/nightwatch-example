module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://tw.yahoo.com/')
      .waitForElementVisible('body', 1000)
      .setValue('input#UHSearchBox', 'nightwatch')
      .waitForElementVisible('input#UHSearchWeb', 1000)
      .click('input#UHSearchWeb')
      .pause(1000)
      .waitForElementVisible('li.first  p > a > b', 1000)
      .assert.containsText('li.first  p > a > b', 'Nightwatch')
      .end();
  }
};
