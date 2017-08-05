'use strict'
var getContextUrl = function(){
	var protocol = 'https://';
	var pageUrl = protocol+browser.params.subdomain+browser.baseUrl;
	return pageUrl;
};

module.exports = {
	getContextUrl: getContextUrl
};
