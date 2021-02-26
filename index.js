const Discord = require('Discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
client.config = config;

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if(!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`🔮 Evento carregado: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
   });
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (
       message.content.startsWith(`<@!${client.user.id}>`) ||
       message.content.startsWith(`<@${client.user.id}>`)
    ) {
      return message
        .reply("Olá, caso precise de ajuda meu prefixo é `!`").then(message => {
          message.delete(120000);
        });
    }
    
     
    if (!message.content.startsWith(config.prefix)) return;
    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    try {
      let commandFile = require(`./commands/${command}.js`);
      //console.log(`🎮 Comando carregado: ${commandFile}`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
    } catch (err) {
      message.delete(5000)
        message.channel.send("comando desconhecido.").then(message => {message.delete(10000)})
      console.error("Erro:" + err);
    }
     
  })  


client.login(config.token);