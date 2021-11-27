const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Yo boi!!'));

app.listen(port, () =>
	console.log(`Your app is listening to http://localhost:${port}`)
);

const discord = require('discord.js')
const akinator = require('discord.js-akinator')

const { Client } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

//Bot prefix
const prefix = "aki."
//

//Status
client.on("ready", () => {
  let statusList = [`${prefix}akinator`, `${prefix}help`];
    setInterval(function() {
  		let status = statusList[Math.floor(Math.random()*statusList.length)];
  		client.user.setActivity(status, {type: "LISTENING"});
  	}, 10000)

    console.log(`${client.user.tag} has been successfully deployed!! 🚀`)
});
//

//Akinator Command
client.on("messageCreate", async message => {
    if(message.content.startsWith(`${prefix}akinator`)) {
        akinator(message, client, "en");
    }
});
//

client.login(process.env.token) //token should be put in the lock/client secrets button


//Bot coded by 365 ɢᴀᴍɪɴɢ ɴ ᴍᴏʀᴇ_2.0#0002 DONOT share without credits