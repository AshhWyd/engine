const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args, owner) => {
	const msg = await message.channel.send("O-One second...");
	let ping = new Discord.RichEmbed()
	.setAuthor("Ping")
	.setDescription(`The current latency is ${msg.createdTimestamp - message.createdTimestamp}ms. Bot API Latency is ${Math.round(bot.ping)}ms.`)
    .setColor(process.env.pink)
    .setTimestamp()
    .setFooter("Bot ping", bot.user.avatarURL)
  	
    message.channel.send(ping)
    msg.delete()
}

module.exports.help = {
	name: "ping"
}