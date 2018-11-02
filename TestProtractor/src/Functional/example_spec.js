describe('angularjs homepage', function() {
	it('should greet the named user', function() {
		browser.get('http://www.angularjs.org');
		browser.sleep(8000);

		element(by.model('yourName')).sendKeys('prahan');

		var greeting = element(by.binding('yourName'));

		expect(greeting.getText()).toEqual('Hello prahan!');
	});
});
