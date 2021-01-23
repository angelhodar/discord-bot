const axios = require("axios");
const { MessageAttachment } = require("discord.js");

const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}`;

module.exports = {
  name: "/gif",
  usage: "/gif",
  description: "Get a random gif",
  handler: async ({ message }) => {
    const { data } = await axios.get(endpoint);
    const attachment = new MessageAttachment(data.data.images.original.url);
    message.channel.send(attachment);
  },
};
