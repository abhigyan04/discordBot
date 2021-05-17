const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'muteall',
    description: 'This is a mute all command',
    execute(message, args){
        if(message.member.roles.cache.has('Enter the role ID here')){
            const amongUSVC = client.channels.cache.get('Enter the voice channels ID here');
            if(message.member.voice.channel.id != 'Enter the voice channels ID here'){
                message.channel.send('You are not in the Among Us VC');
            }
            else{
                for(const [memberID, member] of amongUSVC.members){
                    member.voice.setMute(true);
                }
            message.channel.send('All users have been muted');
            }
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}


client.login('Enter your bots token here which can be found on your discord developer portal.');
