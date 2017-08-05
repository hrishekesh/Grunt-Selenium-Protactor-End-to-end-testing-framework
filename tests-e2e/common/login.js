var domain = require('./loadDomainData');
var utility = require('./utility');
var loginDomain = domain.loadDomainData('login.js');

var openLoginPage = function() {
	var landingpage = utility.getContextUrl()+loginDomain.loginDetails.loginUrl;
	browser.ignoreSynchronization = true;
	browser.get(landingpage);
};

var enterCredentials=function(customerType){
	var customerData = loginDomain.loginDetails[customerType];
	browser.driver.findElement(By.id('myvfLoginOnlineId')).sendKeys(customerData.username);
	browser.driver.findElement(By.id('myvfLoginPassword')).sendKeys(customerData.password);
	browser.driver.findElement(By.id('sign-in-button')).click();
	browser.ignoreSynchronization = false;
	browser.sleep(10000);
	return true;
};

var hideOverlay=function(){
	//click the overlay irrespective whether it is shown or not
	browser.driver.findElement(By.css('.close-overlay')).click();
	browser.executeScript("window.scrollTo(0, document.body.scrollHeight)").then(function(){
		browser.sleep(20000);
	});
};

var signout=function(){
	var menuItems = element.all(by.repeater('itemL1 in megaMenu.items'));
	console.log('Print Menu Items');
	console.log(menuItems);
	browser.close();
};

module.exports = {
  openLoginPage: openLoginPage,
  enterCredentials: enterCredentials,
  hideOverlay:hideOverlay,
  signout:signout
};
