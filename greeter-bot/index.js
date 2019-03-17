const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NTU2NzAwMjA0ODMzNzAxODkw.D29n5w.EPYO2Iaw7x6hDWbNpwKAa2d-Yro');