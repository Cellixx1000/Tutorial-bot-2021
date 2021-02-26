const Discord = require('Discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
   if (message.author.bot) return;
   let prefix = config.prefix;
   if(!message.content.startsWith(prefix)) return;
   
   const ajuda = new Discord.MessageEmbed()
   .setAuthor("Tutorial video")
   .setTitle("Lista de comandos")
   .setDescription("Para cada comando, use ! antes.")
   .addField("Comandos de info", "\najuda")
   .setTimestamp()
   .setFooter(`Comando solicitado por ${message.author.tag}`)
   message.channel.send("<:pepeVergonha:814246195312066570> | Comandos enviados no seu privado! (Lembre-se de deixar o privado habilitado)")

   return message.author.send(ajuda);
}