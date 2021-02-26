const Discord = require('Discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Você não tem permissão para realizar essa ação.')
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Eu não tenho permissão para realizar essa ação, coloque a permissão `BANIR MEMBROS` para o meu cargo.')

    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    const membro = message.mentions.members.first() || message.guild.members.chache.get(args[0]);

    if(!args[0]) return message.channel.send('Mencione um usuário.')

    if(!membro) return message.channel.send('Não consegui encontrar este usuário, tente mencionar novamente')
    if(!membro.kickable) return message.channel.send('Este usuário não pode ser kickado.')

    if(membro.id === message.author.id) return message.channel.send('Você pode não se kickar kkkk')

    let rasao = args.slice(1).join("  ")

    if(!rasao) rasao = 'A rasão não foi informada.'

    membro.kick(rasao)
    .catch(err => {
        if(err) return message.channel.send('Não consegui kickar o usuário devido a um erro! erro:', err)
    })

   
   const kickEmbed = new Discord.MessageEmbed()
   .setTitle("Ação de kick")
   .setThumbnail(membro.user.displayAvatarURL())
   .addField("👤 Membro kickado", membro)
   .addField("👮‍♂️ Staff que kickou", message.author)
   .addField("📙 Rasão", rasao)
   .setTimestamp()
   .setFooter(`Ação de kick realizada por ${message.author.tag}`, message.author.displayAvatarURL())

   message.channel.send(kickEmbed);
}