const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args, owner, prefix) => {

	let status = new Discord.RichEmbed()
	.setAuthor("Set Status",bot.user.avatarURL)
	.setDescription("Below tells you how to use the setstatus command.")
    .addField("How to use it:","Use or edit one of the examples listed below!")
    .addField("Streaming Example:",`${prefix}setstatus STREAMING https://twitch.tv/twitch message`)
    .addField("Watching Example:",`${prefix}setstatus WATCHING message`)
    .addField("Playing Example:",`${prefix}setstatus PLAYING message`)
    .addField("Reset to Online:",`${prefix}setstatus default`)
    .setColor("#af84ff")
    .setTimestamp()
    .setFooter(`Engine - Prefix: ${prefix}`)
  

    if(args[0] == "status"){
        message.channel.send(status)
    }else{
        console.log("notstatus")
    }
}

module.exports.help = {
	name: "help"
}