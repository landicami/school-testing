import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
	excludeSpecPattern: [
		"**/e2e/1-getting-started",
		"**/e2e/2-advanced-examples"
	],
	baseUrl: "http://localhost:5173/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
