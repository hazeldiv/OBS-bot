const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const config = require("./config.json")

bot.on('ready', async () => {
  console.log(`${bot.user.username}! Telah online!`);
  bot.user.setActivity("sedang dalam proses, selesai dalam 1 tahun lagi", {type: "PLAYING"});
});

bot.on("message", async message  => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");

  if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "halo")) {
    message.channel.send("https://media.giphy.com/media/SrzKzyDOtuz9n9yldj/giphy.gif");
  }

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  }

  if (message.content.startsWith(prefix + "infoserver")) {
    let $Embed = new Discord.RichEmbed()
    .setColor("#00ff80")
    .setTitle("Server Info")
    .setURL('https://discord.gg/d7wryP7')
	.setAuthor('OBS', 'https://cdn.discordapp.com/attachments/358814442487545858/376709310014816257/OBS.jpg', 'https://discord.gg/d7wryP7')
	.setDescription('OBS')
	.setThumbnail('https://cdn.discordapp.com/attachments/358814442487545858/376709310014816257/OBS.jpg')
	.addField('Nama Server', 'Kingdom Of OBS')
	.addBlankField()
	.addField('Nama Pemilik', '[KING]Cybertron', true)
	.addField('Jumlah Member', '262', true)
	.setImage('https://cdn.discordapp.com/attachments/358814442487545858/376709310014816257/OBS.jpg')
	.setTimestamp()
	.setFooter('Kingdom Of OBS', 'https://cdn.discordapp.com/attachments/358814442487545858/376709310014816257/OBS.jpg');

    message.channel.send({embed: $Embed});
  }
});


bot.login(process.env.token);
