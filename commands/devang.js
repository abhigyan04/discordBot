module.exports = {
    name: 'devang',
    description: 'This is a test command',
    execute(message, args){
        if(message.member.roles.cache.has('759194564325670912')){
            message.channel.send('');
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}