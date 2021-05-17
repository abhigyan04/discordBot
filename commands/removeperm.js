module.exports = {
    name: 'removeperm',
    description: 'This is a removeperm command',
    execute(message, args){
        if(message.member.roles.cache.has('Enter the role ID here')){
            message.member.roles.remove('Enter the role ID here');
            message.channel.send("You no longer have the permission to use this bot");
        }
    }
}
