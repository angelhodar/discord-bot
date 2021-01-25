const { Client } = require("discord.js");
const { isCommand, isValidCommand, handleCommand } = require("./commands");
const { discord_token } = require("./config");

const client = new Client();

const handleReady = () => {
  console.log("Bot ready and listening to requests...");
};

const handleMessage = async (message) => {
  if (!message.author.bot) {
    if (isCommand(message)) {
      if (isValidCommand) await handleCommand(message);
      else message.channel.send("Command not available");
    }
  }
};

client.once("ready", handleReady);
client.on("message", handleMessage);

client.login(discord_token);
