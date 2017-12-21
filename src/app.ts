import * as Discord from 'discord.js';
import * as express from 'express';
import * as fs from 'fs';
import { CommandHandler, HelpMode } from 'mechan.js'
// const MainManager = require('./src/MainManager.js');
// const CommandManager = require('./src/CommandManager.js');
// MainManager.associateCommandManager(CommandManager);

// Config crap
var config: Config = {};

if (fs.existsSync('config.json'))
    config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

else {
    // Import everything from environment variables
    config.token = process.env.TOKEN;
    config.owners = JSON.parse(process.env.OWNERS);
    config.prefix = process.env.PREFIX;
    config.port = parseInt(process.env.PORT); // Used cause of Heroku
    config.public_url = process.env.PUBLIC_URL;
}
if (config.port == null)
    config.port = 80;

// Discord Client and Web Server
let handler = new CommandHandler({
    helpMode: HelpMode.Public,
    isSelfBot: false,
    mentionPrefix: false,
    prefix: config.prefix
});
var client = new Discord.Client();
var app = express();

client.on('ready', () => {
    console.log("Logged in as " + client.user.tag);
    client.user.setGame(`Do y.help | ${client.guilds.size} servers`);
});

handler.createCommand('info')
    .setDescription('Get the bot\'s info')
    .setCategory('Info Commands')
    .setCallback((context) => {
        context.channel.send('http://localhost:8080');
    })

// client.on('message', (message) => {
//     if (message.content.toUpperCase().startsWith(config.prefix.toUpperCase())) {
//         let args = message.content.split(" ");
//         let command = args[0].toUpperCase();
//         if (command === config.prefix.toUpperCase() + "HELP")
//             message.channel.send(":globe_with_meridians: **Check the available commands here:** " + config.public_url + "commands");
//         else if (command === config.prefix.toUpperCase() + "INFO") {
//             // Do a thing here
//         }
//     };
// });

app.get("/", (req, res) => {
    res.send("Web stuff good stuff");
});

// Login stuff good stuff
handler.install(client)
       .login(config.token);
app.listen(config.port, () => {
    console.log("Webserver running on port " + config.port);
});
