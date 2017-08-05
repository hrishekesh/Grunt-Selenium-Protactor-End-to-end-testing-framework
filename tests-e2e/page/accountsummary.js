var getNumberOfConnections = function(){
	return element.all(by.repeater('item in accessList.items | limitTo:accessList.limit track by item.trackId'));
};

module.exports = {
	getNumberOfConnections: getNumberOfConnections
};