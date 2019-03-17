
function bot()
{
	const Discord = require('discord.js')
	const client = new Discord.Client()

	client.on('ready', () => {

		let bdoChannel = client.channels.get("556692990056464411")

		client.user.setActivity("Picchiare i bambini")

		var date = new Date()
		var current_hour = date.getHours()+":" + date.getMinutes()


	})

	client.on('message', (receivedMessage) => {
		// Prevent bot from responding to its own messages
		if (receivedMessage.author == client.user) {
			return
		}

		if(receivedMessage.content.startsWith("-"))
		{
			processCommand(receivedMessage)
		}
	// receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
	})


	function processCommand(receivedMessage)
	{
		let fullCommand = receivedMessage.content.substr(1)
		let splitCommand = fullCommand.split(" ")
		let primaryCommand = splitCommand[0]
		let arguments = splitCommand.slice(1)

		if(primaryCommand == "help")
		{
			helpCommand(arguments,receivedMessage)
		}

		if(primaryCommand == "table")
		{
			tableCommand(arguments,receivedMessage)
		}

		if(primaryCommand == "vicnopls")
		{
			vicnoplsCommand(arguments,receivedMessage)
		}

		if(primaryCommand == "fs")
		{
			failstackCommand(arguments,receivedMessage)
		}
	}


	function helpCommand(arguments,receivedMessage)
	{
		receivedMessage.channel.send("`BDO Bot Command list:\n -timer : Tempo rimanente per il prossimo boss \n -table : Tabella dei boss \n -vicnopls : Il bot piange per la roulette di vic`" )
	}

	function tableCommand(arguments,receivedMessage)
	{
		const localFileAttachment = new Discord.Attachment('boss_table.png')
		receivedMessage.channel.send(localFileAttachment)
		
	}

	function vicnoplsCommand(arguments,receivedMessage)
	{
		const localFileAttachment = new Discord.Attachment('vic_stop.png')
		receivedMessage.channel.send(localFileAttachment)
		receivedMessage.channel.send("`VIC PLS \n PENSA AI BAMBINI VIC \n LA TRI BASILISK VIC, FERMATI VIC \n PEN KZARKA ATTEMPT VIC, NON FARLO VIC`")
		receivedMessage.channel.send("`F \n F \n F \n F`")
		
	}

	function failstackCommand(arguments,receivedMessage)
	{
		let temp = arguments[1]
		switch (temp)
		{
			case "acc-b":
			receivedMessage.channel.send(
				"`PRI   18 to 25 FS \nDUO   30 to 35 FS \nTRI   40 to 45 FS \nTET   70 to 90 FS \nPEN   100 or more FS (no vic,don't) \n`")
			break
			case "acc-y":
			receivedMessage.channel.send(
				"`PRI   25 or more FS \nDUO   35 or more FS  \nTRI   45 or more FS \nTET   90 or more FS \nPEN   100 or more FS (no vic,don't) \n`")
			
			break
			case "boss-arm":
			receivedMessage.channel.send(
				"`+6 - +8   10 to 13 FS \n+9   11 to 14 FS \n+10   11 to 15 FS \n+11   15 to 16 FS \n+12   15 to 18 FS \n+13   18 to 20 FS \n+14 - +15   20 to 25 FS \nPRI   20 to 25 FS \nDUO   25 to 35 FS \nTRI   30 to 45 FS \nTET   50 to 90 FS \nPEN   80 or more FS (no vic,don't) \n`")
			break
			case "boss-wep":
			receivedMessage.channel.send(
				"`+8   10 to 13 FS \n+9   10 to 14 FS \n+10   11 to 15 FS \n+11   11 to 16 FS \n+12   12 to 18 FS \n+13   15 to 20 FS \n+14   16 to 25 FS \n+15   20 to 25 FS \nPRI   20 to 25 FS \nDUO   25 to 35 FS \nTRI   30 to 45 FS \nTET   50 to 90 FS \nPEN   80 or more FS (no vic,don't) \n`")
			break
		}
	}
	client.login("NTU2NzAwMjA0ODMzNzAxODkw.D29n5w.EPYO2Iaw7x6hDWbNpwKAa2d-Yro")

}
module.exports = bot;