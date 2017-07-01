const loginLink = {
  
  clickLoginLink() {
    return this
      .waitForElementVisible('@signIn')
      .click('@signIn');
  },
  verifySearchBtn() {
    return this
      .waitForElementPresent('@search')
  }
};

export default {
  url: 'https://www.khanacademy.org/',
  commands: [loginLink],
  elements: {
    signIn: {
      selector: "//a[contains(@class,'signUpLink')]",
      locateStrategy: 'xpath'
    },
    search: {
      selector: "//span[contains(@class,'Search')]",
      locateStrategy: 'xpath'
    }
  }
};
