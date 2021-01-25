const { createCalendarEventEmbed } = require("../utils");

module.exports = {
  name: "/calendar",
  usage: "/calendar <email> <maxResults>",
  description: "Shows the next <maxResults> meetings for <email> user calendar",
  canBeExecuted: ({ config, services }) => {
    const { calendar } = services;
    return config.GOOGLE_SERVICE_CREDENTIALS && calendar;
  },
  handler: async ({ message, args, services }) => {
    const { calendar } = services;
    const [email, maxResults] = args;

    const { data } = await calendar.events.list({
      calendarId: email,
      timeMin: new Date().toISOString(),
      maxResults: maxResults,
      singleEvents: true,
      orderBy: "startTime",
    });

    data.items.map((event) => {
      const embedEvent = createCalendarEventEmbed(event);
      message.channel.send(embedEvent);
    });
  },
};
