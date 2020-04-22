const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';
const ownerID = '277006365598154753';

client.on('ready', () => {
    client.user.setPresence({
        status: "online",
        game: {
            name: "/룰렛",
            type: "LISTENING"
          }
    });
    console.log(`봇이 로그인 하는중....`);
});


client.on('message', message => {
    console.log(message.content);
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
  
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    try {
  
      delete require.cache[require.resolve(`./commands/${cmd}.js`)];
  
      let cmdFile = require(`./commands/${cmd}.js`);
      cmdFile.run(client, message, args);
      
    } catch (e) {
      console.log(e.stack);
    }
});

client.login('taken')
