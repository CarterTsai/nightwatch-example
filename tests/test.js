module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.containsText('a', 'Gmail')
      .end();
  }
};
