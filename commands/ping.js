const discord = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Reply to the message saying Pong!"),

    /**
     * 
     * @param {discord.Interaction} interaction 
     */
    async execute(interaction) {
        await interaction.reply({content: "Pong!", ephemeral: true})
    }
}