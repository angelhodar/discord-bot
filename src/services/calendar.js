const { google } = require("googleapis");

const credentials = JSON.parse(process.env.GOOGLE_SERVICE_CREDENTIALS);

const client = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
});

const calendar = google.calendar({ version: "v3", auth: client });

module.exports = calendar;
