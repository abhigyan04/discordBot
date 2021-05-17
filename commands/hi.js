module.exports = {
    name: 'hi',
    description: 'This is a hi command',
    execute(message, args){
        if(message.member.roles.cache.has('759194564325670912')){
            message.channel.send('Hey there!');
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}