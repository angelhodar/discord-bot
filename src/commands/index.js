const fs = require("fs");

const files = fs.readdirSync("./src/commands").filter((f) => f !== "index.js");
const handlers = files.map((file) => require(`./${file}`));

const isCommand = (message) => message.content.startsWith("/");

const parseCommand = (message) => {
  return message.content.trim().split(' ');
};

const isValidCommand = (message) => {
  const [commandName] = parseCommand(message);
  return handlers.find((h) => h.name === commandName) !== undefined;
};

const handleCommand = async (message) => {
  const [commandName, ...args] = parseCommand(message);
  const command = handlers.find((h) => h.name === commandName);
  await command.handler(message, args);
};

module.exports = { handleCommand, isValidCommand, isCommand };
