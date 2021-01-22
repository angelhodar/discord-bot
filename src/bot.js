require("dotenv").config();

const { Client } = require("discord.js");
const { isCommand, isValidCommand, handleCommand } = require("./commands");

const client = new Client();

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("message", async (message) => {
  if (!message.author.bot) {
    if (isCommand(message)) {
      if (isValidCommand) await handleCommand(message);
      else message.channel.send("No entiendo ese comando");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
