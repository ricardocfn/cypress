const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "uncaughtException": false,
  e2e: {
    setupNodeEvents(on, config) {
      uncaughtException: false
      chromeWebSecurity: false
      // implement node event listeners here
    },
  },
});
