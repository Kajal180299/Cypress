const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const fs = require('fs-extra'); const path = require('path'); // Function to get the right environment config file
 function getConfigurationByFile(file) 
 { const pathToConfigFile = path.resolve('cypress', `cypress.env.${file}.json`);
  return fs.readJson(pathToConfigFile); 
}
module.exports = defineConfig({
  
  e2e: {

    baseUrl: 'http://phoenix.techwithjatin.com',
    setupNodeEvents(on, config) {
     // allureWriter(on, config);

      const file = config.env.configFile || 'development'; // Default to development 
      return getConfigurationByFile(file);
    },
    retries: {
      runMode: 2, // Number of retries during `cypress run`
      openMode: 0, // Number of retries during `cypress open`
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',  // Directory where reports are saved
      overwrite: false,              // Do not overwrite existing reports
      html: true,                    // Generate HTML report
      json: true,                    // Generate JSON report
      reportTitle: 'Test Report',    // Custom title for your report
      charts: true,                  // Include charts in the report
      embeddedScreenshots: true,     // Embed screenshots in the report
      inlineAssets: true             // Inline CSS/JS in the report
    },



    browser: 'chrome',

    // Set the default headed mode to true
    chromeWebSecurity: false,
    video: true, // Record videos of the test
    viewportWidth: 1280, // Set the browser width
    viewportHeight: 720, // Set the browser height
    defaultCommandTimeout: 10000, // Increase command timeout
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
