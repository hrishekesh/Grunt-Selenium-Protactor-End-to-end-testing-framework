var _ = require('underscore'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
	domain = require('../common/loadDomainData'),
	commonData = require('../common/commonData.js'),
	signoutJs = require('../common/signout.js');;
	
var accountsummaryData = domain.loadDomainData('accountsummary.js');
var accountsummaryPage = require('../page/accountsummary.js');

chai.use(chaiAsPromised);

module.exports = function() {

this.setDefaultTimeout(120*1000);

this.Given(/^I view account summary page$/, function(){
	
});

this.Then(/^I am able to see list of all my selfservice connections$/, function(done){
	var expectedNumberOfConnections = accountsummaryData.accountsummary.numberOfConnections[commonData.customerType];
	browser.executeScript('console.log(\'test\');').then(function(){
		var numberOfConnections = accountsummaryPage.getNumberOfConnections().then(
			function(connectionList){
				chai.assert.equal(connectionList.length,expectedNumberOfConnections);
				signoutJs.signout(); //signout at the end of the scenario so that next scenario can run
		});
	}).then(function(){
		done();
	});
});

this.Then(/^And I am able to search on the connections$/, function(done){
	
});
};
