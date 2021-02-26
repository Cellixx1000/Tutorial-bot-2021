const Discord = require('Discord.js');
const config = require('../config.json');
const os = require('os')
    
    module.exports.run = async (client, message, args) => {
       if (message.author.bot) return;
       let prefix = config.prefix;
       if(!message.content.startsWith(prefix)) return;

       let servidores = client.guilds.cache.size;
       let usuarios = client.users.cache.size;
       let canais = client.channels.cache.size;
       let shard = client.ws.shards.size;
   
       //maquina hospedagem
       let arq = os.arch();
       let plataforma = os.platform();
       let versaonode = process.version;
       let cores = os.cpus().length;
       
       const ajuda = new Discord.MessageEmbed()
       .setAuthor("Status do BOT")
       .addField("Servidores", `${servidores}`, true)
       .addField("Usuarios comigo", `${usuarios}`, true)
       .addField("Canais de texto", `${canais}`, true)
       .addField("Shards", `${shard}`, true)
       .addField("Versão do node", `${versaonode}`, true)
       .addField("Arquitetura", `${arq}`, true)
       .addField("Plataforma", `${plataforma}`, true)
       .addField("Cores da maquina", `${cores}`, true)
       .setTimestamp()
       .setFooter(`Comando solicitado por ${message.author.tag}`)
       message.channel.send(ajuda);
    }