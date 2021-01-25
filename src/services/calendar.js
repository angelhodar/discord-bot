const { google } = require("googleapis");
const { google_service_credentials: credentials } = require("../config");

const client = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
});

const calendar = google.calendar({ version: "v3", auth: client });

module.exports = calendar;
