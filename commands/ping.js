module.exports = {
    name: 'ping',
    description: 'This is a ping command',
    execute(message, args){
        if(message.member.roles.cache.has('Enter the role ID here')){
            message.channel.send('Pong!');
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}
