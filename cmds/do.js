const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args, owner) => {
	if(message.author.id !== owner) return

	const code = args.join(" ")
	eval(code)
}

module.exports.help = {
	name: "do"
}