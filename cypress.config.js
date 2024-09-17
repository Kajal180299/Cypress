const { defineConfig } = require("cypress");
const fs = require('fs-extra'); const path = require('path'); // Function to get the right environment config file
 function getConfigurationByFile(file) 
 { const pathToConfigFile = path.resolve('cypress', `cypress.env.${file}.json`);
  return fs.readJson(pathToConfigFile); 
}
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://phoenix.techwithjatin.com',
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'development'; // Default to development 
      return getConfigurationByFile(file);
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
