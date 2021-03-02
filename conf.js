let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      silent: true,
      defaultTimeoutInterval: 360000,
      print: function () {
      }
    },
    onPrepare: function(){
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }));
      },
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/login.spec.js']
};