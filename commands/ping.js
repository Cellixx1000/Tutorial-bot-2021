const Discord = require('Discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
   if (message.author.bot) return;
   let prefix = config.prefix;
   if(!message.content.startsWith(prefix)) return;

   let botping = new Date() - message.createdAt;

   const m = await message.channel.send("Adquirindo seu ping...");
   
   const ping = new Discord.MessageEmbed()
   .setTitle("🏓 Pong!")
   .addField("estou a", Math.floor(botping) + "ms")
   .setTimestamp()
   .setFooter(`Comando solicitado por ${message.author.tag}`)

   m.edit(ping)
}