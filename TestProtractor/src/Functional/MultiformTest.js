describe('MultiformTest e2e flow automation', function() {

	it('e2e flow', function() {

		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

		element(by.partialButtonText('Bank Manager Login')).click();
		element(by.partialButtonText('Add Customer')).click();

		element(by.model('fName')).sendKeys('tim');
		element(by.model('lName')).sendKeys('ann');
		element(by.model('postCd')).sendKeys('1234');
		 element(by.className('btn btn-default')).click();
		browser.switchTo().alert().accept();
		browser.sleep(2000);
		element(by.partialButtonText('Open Account')).click();
		browser.sleep(2000);
	

		$$("select option").then(function(data){


			data[2].click();

		});

		element(by.partialButtonText('Process')).click();

		element(by.partialButtonText('Customers')).click();
		browser.sleep(6000);
		element(by.model('searchCustomer')).sendKeys('a');
		element(by.buttonText('Delete')).click();


		element(by.partialButtonText('Home')).click();
		//browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		element(by.partialButtonText('Customer Login')).click();

		$$("select option").then(function(data){


			data[1].click();

		});
		element(by.partialButtonText('Login')).click();
		element(by.partialButtonText('Transactions')).click();
		element(by.partialButtonText('Back')).click();
		$$("select option").then(function(data){


			data[2].click();

		});
		element(by.partialButtonText('Deposit')).click();
		element(by.model('amount')).sendKeys('2000');
		
		browser.sleep(3000);
		element(by.className('btn btn-default')).click();
		element(by.partialButtonText('Transactions')).click();

		element(by.partialButtonText('Back')).click();
		element(by.partialButtonText('Withdrawl')).click();
		element(by.model('amount')).sendKeys('2001');
		browser.sleep(3000);
		element(by.className('btn btn-default')).click();

		browser.sleep(3000);

		element(by.partialButtonText('Withdrawl')).click();
		element(by.model('amount')).sendKeys('1000');
		
		element(by.className('btn btn-default')).click();

		element(by.partialButtonText('Transactions')).click();
		
		element(by.partialButtonText('Reset')).click();
		
		element(by.partialButtonText('Logout')).click();
	});

});

