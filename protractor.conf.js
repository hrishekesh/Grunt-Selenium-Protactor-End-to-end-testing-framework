var proxy = {
  proxyType: 'manual',
  /*httpProxy: '172.20.144.240:443',
  sslProxy: '172.20.144.240:443',*/
  noProxy: 'sit.selfservice.com,preprod.selfservice.com,www.selfservice.com,localhost,127.0.0.1'
};

var resizeWindow = function(config) {
  var params = browser.params[config.capabilities.name];
  if (params) {
    browser.driver.manage().window()
      .setSize(params.width, params.height);
  }

  return config;
};

var bridgeAppium = function(config) {
  var capabilities = config.capabilities;
  if (capabilities.deviceName) {
    var wd = require('wd'),
    protractor = require('protractor'),
    wdBridge = require('wd-bridge')(protractor, wd);
    config.seleniumAddress = capabilities.seleniumAddress;
    wdBridge.initFromProtractor(config);
  }

  return config;
};

var onPrepare = function() {
  browser.getProcessedConfig()
    .then(resizeWindow)
    .then(bridgeAppium);
};

exports.config = {

  directConnect: true,

  multiCapabilities:[{
    name: 'chrome1',
    browserName: 'chrome',
    proxy: proxy
  },
  {
    name: 'firefox1',
    browserName: 'firefox',
    proxy: proxy
  }],
  params: {
    hasTestData: true,
    firefox2: {
      width: 540,
      height: 800
    }
  },

  baseUrl: '.selfservice.com',
  //allScriptsTimeout: 6000,
  //getPageTimeout: 5000,
  onPrepare: onPrepare,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  exclude: [],
  specs: [
    'tests-e2e/feature/*.feature'
	],

  mochaOpts: {
    ui: 'bdd',
    reporter: 'json',
    slow: 3000
  },

  cucumberOpts: {
    require: [
      'cucumber.conf.js',
	  'tests-e2e/steps/*.steps.js',
	  'tests-e2e/steps/hooks/MyselfserviceHooks.js'
    ],
    tags: [],
    format: 'json:./testReport.json',
	keepAlive: false
  }

};
