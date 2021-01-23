require("dotenv").config();

const calendar = require("../src/services/calendar.js");

const query = {
  calendarId: "angelhodar76@gmail.com",
  timeMin: new Date().toISOString(),
  maxResults: 10,
  singleEvents: true,
  orderBy: "startTime",
};

(async () => {
  try {
    const { data } = await calendar.events.list(query);
    console.log(JSON.stringify(data));
  } catch (err) {
    console.log(`The API returned an error: ${err}`);
  }
})();
