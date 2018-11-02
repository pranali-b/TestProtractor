var data=require('/Users/pranalibankar/eclipse-workspace/TestProtractor/src/Utility/MultiFormDataTest.json');
var managerPage=function(){

	
	//add customervar:
	var addCustomer= element(by.partialButtonText('Add Customer'));

	var firstname=element(by.model('fName'));
	var lastname=element(by.model('lName'));
	var post=element(by.model('postCd'));
	var clickButton=element(by.className('btn btn-default'));
	
	//openacntvar:
	var openaccount=element(by.partialButtonText('Open Account'));
	


	/*$$("select option").then(function(data){


		data[2].click();

	});*/

	var process=element(by.partialButtonText('Process'));

//custvar:
	
	var customers=element(by.partialButtonText('Customers'));
	
	var searchcustomer=element(by.model('searchCustomer'));
	var deletecust =element(by.buttonText('Delete'));

	var home=element(by.partialButtonText('Home'));

	
	//addcustomer:
	this.addCustomer=function(){
		addCustomer.click();

	}

	this.firstName=function(){
		firstname.sendKeys('data.userData.fName');
		return this;

	}

	this.lastName=function(){
		lastname.sendKeys('data.userData.lName');
		return this;
	}

	this.postCode=function(){
		post.sendKeys('1234');
		return this;
	}


	this.clickButton=function(){
		clickButton.click();

	}

	this.acceptAlert=function(){
		browser.switchTo().alert().accept();
	}

	//openaccnt:

	this.openAccount=function(){
		openaccount.click();

	}
	
	this.processButton=function(){
		process.click();

	}


	
	//customers:
	this.customersButton=function(){
		customers.click();

	}

	this.searchCustomer=function(){
		searchcustomer.sendKeys('a');
		return this;

	}
	this.deleteCust=function(){
		deletecust.click();

	}
	
	this.homeButton=function(){
		home.click();
		return require('./loginPage.js');

	}
	
}

module.exports = new managerPage();



