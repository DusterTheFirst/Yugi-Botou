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
  config.port = process.env.PORT; // Used cause of Heroku
}
if(config.port == null) config.port = 80;

// Discord Client and Web Server
var client = new Discord.Client();
var app = express();;

client.on('ready', () => {
  console.log("Logged in as " + client.user.tag);
});

app.get("/", (req, res) => {
  res.send("Umm, what? Am I supposed to send you a page?<br>Not yet!");
});

// Login stuff good stuff
client.login(config.token);
app.listen(config.port, () => {
  console.log("Webserver running on port " + config.port);
});
