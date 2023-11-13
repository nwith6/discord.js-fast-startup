const fs = require("fs")
const { token } = require("./config.json").discord
const { Client, Collection, IntentsBitField } = require("discord.js")

const client = new Client({ intents: [new IntentsBitField(32767)] })
client.commands = new Collection()

const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'))
const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'))

for (let file of commandFiles) {
	const command = require(`${__dirname}/commands/${file}`);
	client.commands.set(command.data.name, command);
}

for (let file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`)
	const eventName = file.split(".")[0]

	client.on(eventName, async(...args) => {
		try {
			await event.execute(client, args)
		} catch (error) {
			console.error(error)
		}
	})
}

client.login(token)
