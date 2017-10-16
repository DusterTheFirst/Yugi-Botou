const Discord = require('discord.js');
const express = require('express');
const fs = require('fs');

// Config crap
var config = {};
if(fs.existsSync('config.json')) JSON.parse(fs.readFileSync('config.json', 'utf8'));
else {
  // Import everything from environment variables
  config.token = process.env.TOKEN;
  config.owners = JSON.parse(process.env.OWNERS);
  config.prefix = process.env.PREFIX;
  config.port = process.env.PORT; // Used cause of Heroku
  config.public_url = process.env.PUBLIC_URL
}
if(config.port == null) config.port = 80;

// Discord Client and Web Server
var client = new Discord.Client();
var app = express();

client.on('ready', () => {
  console.log("Logged in as " + client.user.tag);
  client.user.setGame(`Do y.help | ${client.guilds.size} servers`);
});

client.on('message', (message) => {
  if(message.content.toUpperCase().startsWith(config.prefix.toUpperCase())) {
    let args = message.content.split(" ");
    let command = args[0].toUpperCase();
    if(command === config.prefix.toUpperCase() + "HELP")
      message.channel.send(":globe_with_meridians: **Check the available commands here:** " + config.public_url + "commands");
    else if(command === config.prefix.toUpperCase() + "INFO") {
      // Do a thing here
    }
  };
});

app.get("/", (req, res) => {
  res.send("Web stuff good stuff");
});

// Login stuff good stuff
client.login(config.token);
app.listen(config.port, () => {
  console.log("Webserver running on port " + config.port);
});
