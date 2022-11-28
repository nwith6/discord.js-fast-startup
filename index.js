const fs = require("fs")
const { token } = require("./config.json").discord
const { Client, Collection, Intents } = require("discord.js")


const client = new Client({intents: [new Intents(32767)]})
client.commands = new Collection()

const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'))
const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'))

for (let file of commandFiles) {
	const command = require(`${__dirname}/commands/${file}`);
	client.commands.set(command.data.name, command);
}

for (let file of eventFiles) {
	let event = require(`${__dirname}/events/${file}`)
	let eventName = file.split(".")[0]

	client.on(eventName, async(...args) => {
		try {
			event.execute(client, args)
		} catch (error) {
			console.error(error)
		}
	})
}

client.on('interactionCreate', async (interaction) => {
	if (interaction.isCommand) {
		let command = client.commands.get(interaction.commandName)
		if (!command) return

		try {
			await command.execute(interaction)
		} catch (error) {
			console.error(error)
			return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
		}
	} else {
		return
	}
})

client.login(token)