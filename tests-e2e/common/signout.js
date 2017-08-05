var signout = function(){
	var signout = element.all(by.repeater('itemL1 in megaMenu.items')).last()
	signout.click();
	browser.sleep(5000);
};

module.exports = {
	signout:signout
};