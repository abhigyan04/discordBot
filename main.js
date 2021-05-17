const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');
const ping = require('./commands/ping');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command); 
}

client.once('ready', () =>{
    console.log('ABGs dicord bot is online')
});

const prefix = '$';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if(command == 'hi'){
        client.commands.get('hi').execute(message, args);
    }
    else if(command == 'who'){
        client.commands.get('who').execute(message, args);
    }
    else if(command == 'nikku'){
        client.commands.get('nikku').execute(message, args);
    }
    else if(command == 'raju'){
        client.commands.get('raju').execute(message, args);
    }
    else if(command == 'devang'){
        client.commands.get('devang').execute(message, args);
    }
    else if(command == 'amur'){
        client.commands.get('amur').execute(message, args);
    }
    else if(command == 'makintoshi'){
        client.commands.get('makintoshi').execute(message, args);
    }
    else if(command == 'getperm'){
        client.commands.get('getperm').execute(message, args);
    }
    else if(command == 'removeperm'){
        client.commands.get('removeperm').execute(message, args);
    }
    else if(command == 'commands'){
        client.commands.get('commands').execute(message, args);
    }
    else if((command == 'muteall') || (command == 'ma')){
        client.commands.get('muteall').execute(message, args);
    }
    else if((command == 'unmuteall') || (command == 'ua')){
        client.commands.get('unmuteall').execute(message, args);
    }
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    const amongUSVC = client.channels.cache.get('755122373069635766');
    const newUserChannel = newMember.channelID;
    const oldUserChannel = oldMember.channelID;
    const amongUsTC = client.channels.cache.get('759169450800578562')
     
    if(newUserChannel === '755122373069635766' && oldUserChannel !== '755122373069635766' && amongUSVC.members.size === 1){
        amongUsTC.send('Hey! I see you have joined the Among Us VC');
        amongUsTC.send('Use me to moderate your games efficiently');
        amongUsTC.send('Type $commands to see the list of commands');
        amongUsTC.send('Have fun! :)');
    }
});


client.login('Enter your bots token here which can be found on your discord developer portal.');
