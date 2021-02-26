const Discord = require('Discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
   if (message.author.bot) return;
   let prefix = config.prefix;
   if(!message.content.startsWith(prefix)) return;
   
   const conviteEmbed = new Discord.MessageEmbed()
   .setTitle("Convite!")
   .setDescription("Já imaginou estar em uma comunidade de desenvolvedores de bot? Entre no meu servidor de suporte!!")
   .addField("Servidor de suporte", "clique [aqui](https://discord.gg/4wBzrDAJap) para entrar em meu servidor de suporte")
   .addField("Meu site", "clique [aqui](https://github.com/P0larDevv) para entrar no meu site")
   .setTimestamp()
   .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL());
   message.channel.send(conviteEmbed);
}