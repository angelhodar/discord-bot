require("dotenv").config();

const { Client } = require("discord.js");
const { isCommand, isValidCommand, handleCommand } = require("./commands");

const client = new Client();

const handleReady = () => {
  console.log("Bot is ready!");
};

const handleMessage = async (message) => {
  if (!message.author.bot) {
    if (isCommand(message)) {
      if (isValidCommand) await handleCommand(message);
      else message.channel.send("No entiendo ese comando");
    }
  }
};

client.once("ready", handleReady);
client.on("message", handleMessage);

client.login(process.env.DISCORD_TOKEN);
