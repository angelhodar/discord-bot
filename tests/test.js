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
    const res = await calendar.events.list(query);
    console.log(res.data);
  } catch (err) {
    console.log(`The API returned an error: ${err}`);
  }
})();
