const Discord = require('discord.js');

const client = new Discord.Client();

module.exports = {
    name: 'muteall',
    description: 'This is a mute all command',
    execute(message, args){
        if(message.member.roles.cache.has('759194564325670912')){
            const amongUSVC = client.channels.cache.get('755122373069635766');
            if(message.member.voice.channel.id != '755122373069635766'){
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


client.login('NzU5MTgwMjg0MTE2NzI5ODU2.X25vvA.F3Jd6epNONSUzTAoL28azaBaNCo');