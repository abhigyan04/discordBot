module.exports = {
    name: 'makintoshi',
    description: 'This is an echo command',
    execute(message, args){
        if(message.member.roles.cache.has('Enter the role ID here')){
            message.channel.send('');
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}
