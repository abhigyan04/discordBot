module.exports = {
    name: 'removeperm',
    description: 'This is a removeperm command',
    execute(message, args){
        if(message.member.roles.cache.has('759194564325670912')){
            message.member.roles.remove('759194564325670912');
            message.channel.send("You no longer have the permission to use this bot");
        }
    }
}