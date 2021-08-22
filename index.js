const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const conf = require("./config.json");
client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.login(conf.token);
