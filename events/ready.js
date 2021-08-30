module.exports = (client) => {
    console.log(`Bot iniciado com sucesso`);

    const activities = [`Boa noite`]
    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity("Tutorial bot", { type: "STREAMING", url: "sua twitch/youtube"});
    }, 20000)
}

// PLAYING = jogando
// WATCHING = assistindo
// LISTENING = ouvindo
// STREAMING = stremando
