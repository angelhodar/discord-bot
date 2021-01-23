const { MessageEmbed } = require("discord.js");

options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "Europe/Madrid",
};

const formatDate = (date) => {
  const datetime = new Date(date);
  return new Intl.DateTimeFormat("en-GB", options).format(datetime);
};

const createCalendarEventEmbed = (event) => {
  return new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(event.summary)
    .setURL(event.htmlLink)
    .setAuthor(event.creator.email)
    .setDescription(event.description || "")
    .addFields(
      {
        name: "Created",
        value: formatDate(event.created),
      },
      {
        name: "Start",
        value: formatDate(event.start.dateTime),
        inline: true,
      },
      {
        name: "End",
        value: formatDate(event.end.dateTime),
        inline: true,
      },
      { name: "Link", value: event.hangoutLink || "Sin link" }
    );
};

module.exports = { formatDate, createCalendarEventEmbed };
