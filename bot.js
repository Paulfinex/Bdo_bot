
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

	client.login("NTU2NzAwMjA0ODMzNzAxODkw.D29n5w.EPYO2Iaw7x6hDWbNpwKAa2d-Yro")

}
module.exports = bot;