const discord = require("discord.js")

module.exports = {
    
    /**
     * 
     * @param {discord.Client} client 
     */
    execute: async function(client) {
        console.log(`Logged in as ${client.user.tag}`)
    }
}