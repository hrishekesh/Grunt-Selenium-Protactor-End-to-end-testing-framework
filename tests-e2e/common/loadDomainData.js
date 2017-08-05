var loadDomainData = function(jsonFileName){
	var domainPath = '../domain/'+browser.params.subdomain+'/'+jsonFileName;
	var jsonData = require(domainPath);
	return jsonData;
};

module.exports = {
	loadDomainData:loadDomainData
};