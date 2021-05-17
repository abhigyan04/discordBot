module.exports = {
    name: 'getperm',
    description: 'This is a getperm command',
    execute(message, args){
        if(message.member.roles.cache.has('Enter the role ID here')){
            message.channel.send('You already have the permission to use this bot');
        }
        else if(!message.member.roles.cache.has('Enter the admin role ID here')){
            message.channel.send('You are not an admin');
        }
        else{
            message.member.roles.add('Enter the role ID here');
            message.channel.send('You now have the permission to use this bot :)');
            message.channel.send('To remove the permission type $removePerm');
        }
    }
}
