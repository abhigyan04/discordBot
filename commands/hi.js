module.exports = {
    name: 'hi',
    description: 'This is a hi command',
    execute(message, args){
        if(message.member.roles.cache.has('Enter the role ID here')){
            message.channel.send('Hey there!');
        }
        else{
            message.channel.send('You do not have permission to use this bot');
        }
    }
}
