const Discord = require('discord.js');
const fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var client = new Discord.Client();


client.on('ready', () => {
  console.log("Logged in as " + client.user.tag);
});

client.login(config.token);
