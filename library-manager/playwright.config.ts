import { defineConfig } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    headless: false,
    baseURL: BASE_URL,
  },

  webServer: {
    command: "yarn start",
    port: 3000,
    reuseExistingServer: true,
  },
});
