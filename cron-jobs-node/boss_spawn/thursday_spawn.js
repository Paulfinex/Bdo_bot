function thursday_spawn(id)
{

    const Discord = require('discord.js');
    const client = new Discord.Client();

    client.login("NTU2NzAwMjA0ODMzNzAxODkw.D29n5w.EPYO2Iaw7x6hDWbNpwKAa2d-Yro").then(() => {
        let bdoChannel = client.channels.get("556692990056464411")

        switch(id)
        {
               case 1:
               bdoChannel.send("`Nouver is spawning in 30 minutes!`").then(() => client.destroy());
               break
               case 2:
               bdoChannel.send("`Kutum is spawning in 30 minutes!`").then(() => client.destroy());
               break
               case 3:
               bdoChannel.send("`Nouver is spawning in 30 minutes!`").then(() => client.destroy());
               break
               case 4:
               bdoChannel.send("`Kutum is spawning in 30 minutes!`").then(() => client.destroy());
               break
               case 5:
               bdoChannel.send("`Nouver is spawning in 30 minutes!`").then(() => client.destroy());
               break
               case 6:
               bdoChannel.send("`Kzarka is spawning in 30 minutes!`").then(() => client.destroy());
               break
               case 7:
               bdoChannel.send("`Kutum is spawning in 30 minutes!`").then(() => client.destroy());
               break
               case 8:
               bdoChannel.send("`Garmoth is spawning in 30 minutes!`").then(() => client.destroy());
               break
        }

        
            //if the bot doesn't have guild with the id guildid
            // or if the guild doesn't have the channel with id channelid
        client.destroy()
    })
}
module.exports = thursday_spawn;