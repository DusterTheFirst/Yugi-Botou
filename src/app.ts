import * as Discord from 'discord.js';
import * as express from 'express';
import * as fs from 'fs';
import { CommandHandler, HelpMode, ParameterType } from 'mechan.js';
import { Card, CardType, Rarity, Modifier } from './card/Generator';
import { inspect } from 'util';
// const MainManager = require('./src/MainManager.js');
// const CommandManager = require('./src/CommandManager.js');
// MainManager.associateCommandManager(CommandManager);

let cards: Card[] = [];

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
    });

handler.createCommand('create')
    .setCategory('Card commands')
    .setDescription('Create a card')
    .addParameter('image', ParameterType.Required)
    .addParameter('name', ParameterType.Required)
    .addParameter('description', ParameterType.Required)
    .addParameter('attack', ParameterType.Optional)
    .addParameter('defense', ParameterType.Optional)
    .addParameter('level', ParameterType.Optional)
    .addParameter('cardtype', ParameterType.Optional)
    .addParameter('attribute', ParameterType.Optional)
    .addParameter('rarity', ParameterType.Optional)
    .setCallback((context) => {
        let card = new Card(cards.length)
                        .setCreator(context.user.tag)
                        .setPicture(context.params.get('image'))
                        .setName(context.params.get('name'))
                        .setDescription(context.params.get('description'));

        let attack = context.params.get('attack');
        let defense = context.params.get('defense');
        let level = context.params.get('level');
        let cardtype = context.params.get('cardtype');
        let attribute = context.params.get('attribute');
        let rarity = context.params.get('rarity');
        let year = context.params.get('year');
        let creator = context.params.get('creator');

        if (attack && defense) card.setAttDef(attack, defense);
        if (level) card.setLevel(level);
        if (cardtype) {
            let split = cardtype.split('/');
            let type: CardType;
            let modifier: Modifier;
            console.log(CardType);
            if (Object.values(CardType).includes(split[0])) {
                type = split[0];
            } else {
                context.channel.send(`**${split[0]}** is an invalid \`CardType\`\nValid types are: \`${Object.values(CardType).filter(x => isNaN(x as any)).join(', ')}\``);
                return;
            }
            if (Object.values(Modifier).includes(split[1])) {
                modifier = split[0];
            } else {
                context.channel.send(`**${split[1]}** is an invalid \`Modifier\`\nValid types are: \`${Object.values(Modifier).filter(x => isNaN(x as any)).join(', ')}\``);
                return;
            }
            card.setCardType(split[0], split[1]);
        }
        if (attribute) card.setAttribute(attribute);
        if (rarity) {
            if (Object.values(Rarity).includes(rarity)) {} 
            else {
                context.channel.send(`**${rarity}** is an invalid \`Rairity\`\nValid types are: \`${Object.values(Rarity).filter(x => isNaN(x as any)).join(', ')}\``);
                return;
            }
            card.setRairity(rarity);
        }

        context.channel.send(`\`\`\`js\n${inspect(context.params)}\`\`\``);
        context.channel.send(`\`\`\`js\n${inspect(card)}\`\`\``);

        cards.push(card);
    });

handler.createCommand('list')
    .setCategory('Card Commands')
    .setDescription('List all created cards')
    .setCallback((context) => {
        context.channel.send(`\`\`\`js\n${inspect(cards)}\`\`\``);
    });

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
