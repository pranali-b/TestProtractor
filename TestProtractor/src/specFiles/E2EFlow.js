var data = require(process.cwd()+'/src/Utility/MultiFormDataTest.json');
var login=require(process.cwd()+'/src/PageModel/loginPage.js');

describe('Multiform e2e flow automation', function(){
	it('managerLogin', function(){

		browser.get(data.url);
		var managerPage=login.clickManagerLogin();
		managerPage.addCustomer();
		managerPage.firstName();
		managerPage.lastName();
		managerPage.postCode();
		managerPage.clickButton();
		managerPage.acceptAlert();
		managerPage.openAccount();
		managerPage.processButton();
		managerPage.customersButton();
		managerPage.searchCustomer();
		managerPage.deleteCust();
		managerPage.homeButton();
	});
	
	
	it('customerLogin', function(){

		var customerPage=login.clickCustomerLogin();
		$$("select option").then(function(data){


			data[1].click();

		});
		customerPage.loginButton();

		$$("select option").then(function(data){


			data[2].click();

		});
		customerPage.transactionsButton();
		customerPage.backButton();
		customerPage.depositButton();
		customerPage.amountButton();
		customerPage.buttonButton();
		customerPage.withdrawlButton();
		customerPage.ammountWithButton();
		customerPage.buttonButton();
		customerPage.depositButton();
		customerPage.ammountDepoButton();
		customerPage.buttonButton();
		customerPage.transactionsButton();
		customerPage.resetButton();
		customerPage.logoutButton();
		browser.sleep(5000);
	});
});
