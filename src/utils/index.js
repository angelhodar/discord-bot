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

const createWorkPackageEmbed = (wpackage) => {
  return new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(wpackage.subject)
    .setDescription(wpackage.description || "")
    .addFields(
      {
        name: "Created",
        value: formatDate(wpackage.createdAt),
        inline: true,
      },
      {
        name: "Percentage Completed",
        value: wpackage.percentageDone,
        inline: true,
      },
      {
        name: "Story Points",
        value: wpackage.storyPoints,
        inline: true,
      }
    );
};

module.exports = {
  formatDate,
  createCalendarEventEmbed,
  createWorkPackageEmbed,
};
