const { createWorkPackageEmbed } = require("../utils");

module.exports = {
  name: "/openproject",
  usage: "/openproject <maxResults>",
  description: "Shows the next <maxResults> tasks in the OpenProject platform",
  handler: async ({ message, args, services }) => {
    const { openproject } = services;
    const [maxResults] = args;
    const packages = await openproject.getWorkPackages(maxResults);
    packages.map(wpackage => {
      message.channel.send(createWorkPackageEmbed(wpackage));
    });
  }
};
