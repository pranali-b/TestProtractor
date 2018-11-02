var Jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter');
var AllureReporter = require('jasmine-allure-reporter');

//An example configuration file.
exports.config = {

		//seleniunAddress: 'http://localhost:4444/wd/hub',
		directConnect: true,

		// Capabilities to be passed to the webdriver instance.

		capabilities: {
			'browserName': 'chrome',
			
			//shardTestFiles: true,
			//maxInstances: 2
		},

		// Framework to use. Jasmine is recommended.
		framework: 'jasmine',

		// Spec patterns are relative to the current working directory when
		// protractor is called.

		specs: 
		
		  ['./src/specFiles/E2EFlow.js'],
		
		
		//['./src/functional/example_spec.js'],
	
		// ['./src/functional/MultiformTest.js'],
		
			
			
			

			/*	suites:{

			functional:['./src/functional/Calculator2.js','./src/functional/Calculator.js'],
			regression:['./src/functional/example_spec.js'],    


		},*/

			/*	multiCapabilities: [
				{
					'browserName': 'chrome',
					specs:['./src/functional/Calculator.js']
				},

				{
					'browserName':  'firefox',
					specs:['./src/functional/example_spec.js']
				}

				],       */


		onPrepare: function(){
				jasmine.getEnv().addReporter(
						new Jasmine2HtmlReporter({
							savePath: 'target/screenshots',
							takeScreenshots:true,
						   // takeScreenshotsOnlyOnFailures:true

						})

				);  

				//jasmine.getEnv().addReporter(new AllureReporter({
		     	//resultsDir: './node_modules/jasmine-allure-reporter/allure-results'
					
				//}));
			}, 


    //			Options to be passed to Jasmine.
			jasmineNodeOpts: {
				defaultTimeoutInterval: 70000
			}
			
			
};
