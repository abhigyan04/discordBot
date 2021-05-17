module.exports = {
    name: 'commands',
    description: 'This is a commands command',
    execute(message, args){
        if(message.member.roles.cache.has('759194564325670912')){
            message.channel.send('Use these commands to moderate your games!');
            message.channel.send('$muteall : To mute all members in the vc');
            message.channel.send('$unmuteall : To unmunte all members in the vc');
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}