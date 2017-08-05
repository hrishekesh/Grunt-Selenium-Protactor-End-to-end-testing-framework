var login = require('../../common/login.js');
var commonData = require('../../common/commonData.js');
var domain = require('../../common/loadDomainData');
var loginDomain = domain.loadDomainData('login.js');

var myvfHooks = function () {

  // Synchronous
  this.Before({tags: ["@Login", "@Customer,@Enterprise"]}, function (scenario) {
	  var tags = scenario.getTags();
	  if(!commonData.loggedIn){
		login.openLoginPage();
		  for(var tag of tags){
			  var tagName = tag.getName().replace('@','');
			  if(loginDomain.loginDetails.hasOwnProperty(tagName)){
				  login.enterCredentials(tagName);
				  commonData.customerType = tagName;
			  }
		  }
		  for(var tag of tags){
			  var tagName = tag.getName().replace('@','');
			  if(tagName === 'CloseOverlay'){
				  	login.hideOverlay();
			  }
		  }
	  }
  });
  
  this.After({tags: ["@Logout"]}, function (){
	  console.log('Signing out');
  });
/*
  // Asynchronous Callback
  this.Before(function (scenario, callback) {
	  console.log('Async hook executed');
	  console.log(scenario.getKeyword());
      callback();
  });

  // Asynchronous Promise
  this.After(function (scenario) {
	  console.log('Promise hook executed');
	  console.log(scenario.getKeyword());
  });*/
};
/* functions in hooks
{ Before: [Function],
  After: [Function],
  Given: [Function: defineStep],
  When: [Function: defineStep],
  Then: [Function: defineStep],
  defineStep: [Function: defineStep],
  registerListener: [Function: registerListener],
  registerHandler: [Function: registerHandler],
  setDefaultTimeout: [Function: setDefaultTimeout],
  World: [Function: World],
  BeforeFeatures: [Function],
  AfterFeatures: [Function],
  FeaturesResult: [Function],
  BeforeFeature: [Function],
  AfterFeature: [Function],
  BeforeScenario: [Function],
  AfterScenario: [Function],
  ScenarioResult: [Function],
  BeforeStep: [Function],
  AfterStep: [Function],
  StepResult: [Function] }*/ 

module.exports = myvfHooks;