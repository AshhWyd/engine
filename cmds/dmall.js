const Discord = module.require("discord.js")


module.exports.run = async (bot, message, args, owner) => {
	let text = args.join(" ")

	message.channel.guild.members.forEach(person => {
    	person.send(text)
	})
}

module.exports.help = {
	name: "dmall"
}
