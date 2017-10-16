# Yugi Botou
A Discord bot for playing ridiculous custom Yu Gi Oh cards with friends and other people  
Use the command y.help to get the command list

[Click here to invite the official bot to your server](https://discordapp.com/oauth2/authorize?client_id=369218526042390531&scope=bot&permissions=322624)
[Or join the official server!](https://discord.gg/KKR94hT)

### Self-hosting
Self-hosting the bot is totally possible. You will need to create a `config.json` file that has 3 fields before starting the bot though.  
|-------|------|-------------|
| Field | Type | Description |
|-------|------|-------------|
| token | String | Discord bot token |
| owners | Array | Array of Snowflake IDs that belong to the hoster and maybe a couple more people |
| prefix | String | Prefix used for executingp commands. Is y. on the official build |
| port | Number | Port used for the Webserver |  
| public_url | String | Public URL that's visible to the world. Doesn't automatically append port, but does append paths. |
When using Heroku, you can set the Client Vars to the config vars. The keys just need to be capitalized
