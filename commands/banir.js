const Discord = require('Discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Você não tem permissão para realizar essa ação.')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Eu não tenho permissão para realizar essa ação, coloque a permissão `BANIR MEMBROS` para o meu cargo.')

   if (message.author.bot) return;
   let prefix = config.prefix;
   if(!message.content.startsWith(prefix)) return;

   const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

   if(!args[0]) return message.channel.send("Por favor, mencione um usuário.")

   if(!membro) return message.channel.send('Não consegui encontrar este usuário, tente mencionar novamente')
   if(!membro.bannable) return message.channel.send('Não consigo banir este usuário, talvez ele tenha uma permissão mais alta que eu.')

   if(membro.id === message.author.id) return message.channel.send('Você não pode se banir, kkkk.')

   let Rasaodoban = args.slice(1).join("  ")

   if(!Rasaodoban) Rasaodoban = "A rasão não foi informada.";

   membro.ban({ reason: Rasaodoban})
   .catch(err => {
       if(err) return message.channel.send('Algo deu errado e não consegui banir o usuário!! erro:', err)
   })
   
   const banEmbed = new Discord.MessageEmbed()
   .setTitle("Ação de banimento")
   .setThumbnail(membro.user.displayAvatarURL())
   .addField("👤 Membro banido", membro)
   .addField("👮‍♂️ Staff que baniu", message.author)
   .addField("📙 Rasão", Rasaodoban)
   .setTimestamp()
   .setFooter(`Ação de ban realizada por ${message.author.tag}`, message.author.displayAvatarURL())

   message.channel.send(banEmbed);
}