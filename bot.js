const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '&help') {
    msg.reply('Ik ben er mee bezig!');
  }
});

client.login('token');

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
