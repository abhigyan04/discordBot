module.exports = {
    name: 'who',
    description: 'This is a who command',
    execute(message, args){
        if(message.member.roles.cache.has('759194564325670912')){
            message.channel.send('I am ABGs discord bot!');
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}