import { defineConfig } from "cypress";

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  // retries: 2,
  reporterOptions: {
    reportDir: "cypress/target",
    charts: true,
    reportPageTitle: "Cypress Inline Reporter",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    videoOnFailOnly: true,
    quiet: false,
  },
  e2e: {
    baseUrl: "https://automationexercise.com",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      await require("cypress-mochawesome-reporter/plugin")(on);

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
