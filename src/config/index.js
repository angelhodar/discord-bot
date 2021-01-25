require("dotenv").config();

const convict = require("convict");

const config = convict({
  discord_token: {
    doc: "The discord bot token",
    default: null,
    arg: "token",
    env: "DISCORD_TOKEN",
  },
  db_url: {
    doc: "The URL of the database",
    default: null,
    arg: "db_url",
    env: "DB_URL",
  },
  openproject_api_key: {
    doc: "The user OpenProject API key",
    default: null,
    arg: "op_api_key",
    env: "OPENPROJECT_API_KEY",
  },
  google_service_credentials: {
    doc: "The salt for password encryption",
    default: null,
    arg: "google_credentials",
    env: "GOOGLE_SERVICE_CREDENTIALS",
  }
});

module.exports = config.getProperties();