/*
 * Grunt File
 */

"use strict";
module.exports = function(grunt) {
  var createProtractorOption = function(accum, subdomain) {
	  console.log('createProtractorOption with accum::'+accum+' and subdomain::'+subdomain);
    var option = {};

    option[subdomain] = {
      options: {
        args: {
          params: {
            subdomain: subdomain
          }
        }
      }
    };

    return Object.assign(accum, option);
  };

  var createProtractorOptions = function(subdomains) {
    return subdomains.reduce(createProtractorOption, {})
  };

  grunt.initConfig({
    protractor: Object.assign(
      {
        options: {
          configFile: "protractor.conf.js",
          webdriverManagerUpdate: true,
		  keepAlive: true,
          noColor: false
        }
      },
      createProtractorOptions([
        'www', 'va064'
      ])
    )
  });

  grunt.loadNpmTasks('grunt-protractor-runner');

};
