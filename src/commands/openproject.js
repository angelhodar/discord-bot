const { createWorkPackageEmbed } = require("../utils");

module.exports = {
  name: "/openproject",
  usage: "/openproject <maxResults>",
  description: "Shows the next <maxResults> tasks in the OpenProject platform",
  canBeExecuted: ({ config, services }) => {
    const { openproject } = services;
    return config.openproject_api_key && openproject;
  },
  handler: async ({ message, args, services }) => {
    const { openproject } = services;
    const [maxResults] = args;
    const packages = await openproject.getWorkPackages(maxResults);
    packages.map(wpackage => {
      message.channel.send(createWorkPackageEmbed(wpackage));
    });
  }
};
