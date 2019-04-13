const Discord = module.require("discord.js")


module.exports.run = async (bot, message, args, owner) => {
	let text = args.join(" ")

	message.channel.guild.members.forEach(nigger => {
    	nigger.send(text)
	})
}

module.exports.help = {
	name: "dmall"
}