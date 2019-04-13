const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args, owner) => {
	var yes = args[0]

    if(yes == "STREAMING"){
        var length = args[1].length
        var string = args.join(" ").slice(length+11)
    }else{
        var string = args.join(" ").slice(args[0].length)
    }

    if(yes == "STREAMING"){
        var link = args[1]
        bot.user.setPresence({
        game: {
            name: string,
            type: yes,
            url: link
        }
    })
    }else{
        bot.user.setActivity(string, {type: yes})
    }

    message.edit("Done.")
}

module.exports.help = {
	name: "setstatus"
}