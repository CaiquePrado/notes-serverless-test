const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return {
        baseUrl: "https://notes-serverless-app.com"
      }
    }
  }
})
