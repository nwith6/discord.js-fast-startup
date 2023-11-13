const discord = require("discord.js")

module.exports = {
    
    /**
     * 
     * @param {discord.Client} client 
     * @param {discord.Interaction} interaction
     */
    async execute(client, [interaction]) {
        if (interaction.isCommand) {
            const command = client.commands.get(interaction.commandName)
            if (!command) return
    
            try {
                await command.execute(interaction)
            } catch (error) {
                console.error(error)
                return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
            }
        } // else if (interaction.isButton) {} ...etc
    }
}
