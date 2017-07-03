var data = require('../data/testdata.json')
var logger = require('../logs/log.js')


module.exports = {
  'User is successfully logs in': (client) => {
    const homepage = client.page.homepage();
    const loginpage = client.page.loginpage();

    homepage
      .navigate()
      .verifySearchBtn()
      .clickLoginLink();

 logger.log('info', 'filling in username and password');
    loginpage
      .getUsername(data.testdata.email)
      .getPassword(data.testdata.password)  
      .clickElement('@loginBtn')
       logger.log('info', 'Entering the userpage');
   // 
  },


  'Verify User successfully logs in': (client) => {
    const userpage = client.page.userpage();
   
   userpage
   .clickElement('@welcome')
   client.end();
  }
};
