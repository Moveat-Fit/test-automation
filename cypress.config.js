const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tee5za',
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
