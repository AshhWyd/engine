const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require("fs")
var config = require("./config.json")
const prefix = config.prefix
const uid = config.userid
bot.commands = new Discord.Collection()

bot.login(config.token)

bot.on('ready', () => {
	console.log("---------------------------------------------")
    console.log("Self Bot Loaded For "+config.token)
	console.log("Discord version: " + Discord.version)
	bot.user.setPresence({
	    game: {
	        name: 'Engine',
	        type: "STREAMING",
	        url: "https://www.twitch.tv/xytronical"
	    }
	})
})

fs.readdir("./cmds/", (err, files) => {
	if(err) console.log(err)
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js")
	if(jsfiles.length <= 0) {
		console.log("No commands are present.")
		return
	}

	console.log(`Loading ${jsfiles.length} js files.`)

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`)
        bot.commands.set(props.help.name, props)
	})
})

bot.on("message", async message => {
	const uid = config.userid

	if(message.author.id !== uid) return

	let messageArray = message.content.split(' ')
    let args = messageArray.slice(1)
    let command = messageArray[0]
    let owner = uid

    if(message.channel.type === "dm") return
	if(!command.startsWith(prefix)) return
    let cmd = bot.commands.get(command.slice(prefix.length))
    if (cmd) cmd.run(bot, message, args, owner, prefix)
})
