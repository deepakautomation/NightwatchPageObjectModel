const LoginPageMethods = {
  getUsername(email) {
    return this
      .waitForElementVisible('@email')
      .setValue('@email', email);
  },
   getPassword(password) {
    return this
      .waitForElementVisible('@password')
      .setValue('@password', password);
  },
  clickLoginBtn() {
    return this
      .waitForElementVisible('@loginBtn')
      .click('@loginBtn');
  }
};


module.exports = {
  url: 'https://www.khanacademy.org/',
  commands: [LoginPageMethods],
  elements: {
    email: {
      selector: "//input[contains(@type,'email')]",
      locateStrategy: 'xpath'
    },
    password: {
      selector: "//input[contains(@type,'password')]",
      locateStrategy: 'xpath'
    },
    loginBtn: {
      selector: "//a[contains(@role,'button')][text()='Sign in']",
      locateStrategy: 'xpath'
    }
  }
};