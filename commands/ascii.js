const Discord = require('Discord.js');
const config = require('../config.json');
const figlet = require('figlet');

module.exports.run = async (client, message, args) => {
    if(!args[0]) return message.reply('Digite algo para eu fazer um ascii');

    mensagem = args.join("  ");

    figlet.text(mensagem, function (err, data) {
        if(err) {
            console.log('algo deu errado! erro:', err)
        }
        if(data.length > 2000) return message.channel.send('Por favor, não ultrapasse o limite de 2000 caracteres')

        message.channel.send('```' + data + '```')
    })
}