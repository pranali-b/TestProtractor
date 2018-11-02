var customerPage=function(){

	var customerlogin=element(by.partialButtonText('Customer Login'));

	$$("select option").then(function(data){


		data[1].click();

	});

	var login=element(by.partialButtonText('Login'));
	var transactions=element(by.partialButtonText('Transactions'));
	var back=element(by.partialButtonText('Back'));
	$$("select option").then(function(data){


		data[2].click();

	});

	var deposit=element(by.partialButtonText('Deposit'));
	var amount=element(by.model('amount'));
	var amount1=element(by.model('amount'));
	var amount2=element(by.model('amount'));
	var button=element(by.className('btn btn-default'));
	var withdrawl=element(by.partialButtonText('Withdrawl'));
	var reset=element(by.partialButtonText('Reset'));

	var logout=element(by.partialButtonText('Logout'));


	this.customerLogin=function(){
		customerlogin.click();

	}


	this.loginButton=function(){
		login.click();

	}

	this.transactionsButton=function(){
		transactions.click();

	}


	this.backButton=function(){
		back.click();

	}


	this.depositButton=function(){
		deposit.click();

	}

	this.amountButton=function(){
		amount.sendKeys('2000');
		return this;

	}

	this.resetButton=function(){
		reset.click();

	}

	this.logoutButton=function(){
		logout.click();

	}
	this.buttonButton=function(){
		button.click();

	}
	
	this.withdrawlButton=function(){
		withdrawl.click();

	}
	this.ammountWithButton=function(){
		amount1.sendKeys('2001');
		return this;

	}
	this.ammountDepoButton=function(){
		amount2.sendKeys('1000');
		return this;

	}
	
	
}
module.exports = new customerPage();



