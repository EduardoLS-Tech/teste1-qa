import { defineConfig } from "cypress";
import { urls } from "./cypress/e2e/config/env.config.js";

export default defineConfig({
  e2e: {
    baseUrl: urls.inicial,
    env: {
      homeUrl: urls.home,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
