module.exports = {
  name: "/help",
  usage: "/help",
  description: "Shows all the available commands with their usage and description",
  canBeExecuted: () => true,
  handler: async ({ message, commands }) => {
    let info = "";
    commands.map((command) => {
      info += `${command.usage} | ${command.description}\n`;
    });
    message.channel.send(info);
  },
};
