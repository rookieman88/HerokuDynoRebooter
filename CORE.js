const Discord = require('discord.js');
const app = new Discord.Client();
const Heroku = require('heroku-client')
const heroku = new Heroku({ token: process.env.THETOKEN })
app.login(process.env.BotToken)

app.on('message', (message) => {

	if(message.content.startsWith(`리붓`)){
    if (message.author.id === '님ID_Here') {
      heroku.delete('/apps/앱이름/dynos/worker')
 
      message.channel.send('처리완료')
    } else {
      message.channel.send('관리자로 등록되어있지 않습니다.')
    }
}

});
