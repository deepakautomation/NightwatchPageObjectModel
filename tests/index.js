var data = require('../data/testdata.json')


module.exports = {
  'User is successfully logs in': (client) => {
    const homepage = client.page.homepage();
    const loginpage = client.page.loginpage();

    homepage
      .navigate()
      .verifySearchBtn()
      .clickLoginLink();

    loginpage
      .getUsername(data.testdata.email)
      .getPassword(data.testdata.password)  
      .clickElement('@loginBtn')
   // 
  },


  'Verify User successfully logs in': (client) => {
    const userpage = client.page.userpage();
   
   userpage
   .clickElement('@welcome')
   client.end();
  }
};
