const Discord = require('Discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

    const quantidade = args.join("  ");

    if(!quantidade) return message.reply('Por favor, insira a quantidade de mensagens que devem ser apagadas')

    if(quantidade > 100) return message.reply('Você pode limpar só até 100 mensagens')
    if(quantidade < 1) return message.reply('Você só pode limpar de 1 até 100 mensagens')

    await message.channel.messages.fetch({limit: quantidade}).then(messages => {
        message.channel.bulkDelete(messages
    )});


    // por mensagem
   // message.channel.send(`Foram deletadas ${quantidade} mensagens!`)

    // por embed
    const limparEmbed = new Discord.MessageEmbed()
    .setAuthor("Chat limpo!")
    .setDescription(`${message.author} limpou o chat`)
    .addField(`Foram limpas no total`, `${quantidade} mensagens`)
    .setTimestamp()
    .setFooter(`Chat limpo por ${message.author.tag}`, message.author.displayAvatarURL())

    message.channel.send(limparEmbed)
}