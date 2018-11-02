var loginPage=function(){

	var home=element(by.partialButtonText('Home'));
	var managerlogin=element(by.partialButtonText('Bank Manager Login'));
	var customerlogin=element(by.partialButtonText('Customer Login'));

	this.clickHome=function(){
		clickHome.click();
	
	}

	this.clickManagerLogin=function(){
		managerlogin.click();
		return require('./managerPage.js');

	}

	this.clickCustomerLogin=function(){
		customerlogin.click();
		return require('./customerPage.js');

	}


}


module.exports = new loginPage();





