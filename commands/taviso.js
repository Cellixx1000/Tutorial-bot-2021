const Discord = require('Discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Você não tem permissão para realizar essa ação.')

    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let razao = args.slice(1).join("  ")
    let membro = message.mentions.members.first();

    if(!membro) return message.reply("Por favor, mencione o membro que receberá o aviso")

    message.delete()

    if (razao.length < 2) return message.reply("Por favor, insira motivos validos.")

    let cargo = '814669132423233546'
    message.guild.members.cache.get(membro.id).roles.remove(cargo)

    message.channel.send(`O aviso de ${membro} foi removido por ${message.author} pelo motivo: ${razao}`)
}