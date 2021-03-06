const fs = require("fs");
const db = require("../db");
const config = require("../config");
const services = require("../services");

const excluded = ["index.js"];

const commands = fs
  .readdirSync("./src/commands")
  .filter((f) => !excluded.includes(f))
  .map((f) => require(`./${f}`));

const parseCommand = (message) => {
  return message.content.trim().split(" ");
};

const isCommand = (message) => message.content.startsWith("/");

const isValidCommand = (message) => {
  const [commandName] = parseCommand(message);
  return commands.includes((c) => c.name === commandName);
};

const handleCommand = async (message) => {
  const [commandName, ...args] = parseCommand(message);
  const command = commands.find((c) => c.name === commandName);
  const ctx = { message, args, commands, db, services, config };
  if (command.canBeExecuted) await command.handler(ctx);
  else message.channel.send(`Command ${commandName} cant be executed because bot is not properly configured`);
};

module.exports = { handleCommand, isValidCommand, isCommand };
