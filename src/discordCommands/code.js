const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("code")
    .setDescription("for getting info"),
  async execute(interaction, vp, fcm, client) {
    await interaction.reply("Pong!");
  },
};
