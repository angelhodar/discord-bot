const { calendar, openproject } = require("../src/services");

const query = {
  calendarId: "angelhodar76@gmail.com",
  timeMin: new Date().toISOString(),
  maxResults: 10,
  singleEvents: true,
  orderBy: "startTime",
};

(async () => {
  try {
    const packages = await openproject.getWorkPackages(2);
    packages.map(p => console.log(JSON.stringify(packages)));
  } catch (err) {
    console.log(`The API returned an error: ${err}`);
  }
})();
