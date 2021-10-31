const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const config = require('./config.json')

client.o("ready", () => console.log(`${client.user.tag} is ready!`))

client.login(config.token)