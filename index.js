const { Telegraf } = require('telegraf');
const axios = require('axios');
require("dotenv").config();
console.log(process.env)
const bot = new Telegraf(process.env.BOT_TOKEN);

try{
    bot.start((ctx) => ctx.reply('Welcome'));
    bot.command('toplinuxcommands',(ctx) => ctx.reply('ls cd pwd grep'))
    bot.on('sticker', (ctx) => ctx.reply('👍'));
    bot.on('text', (ctx) => {
        console.log(ctx.update.message);
        if(ctx.update.message.text == 'i love you'){
            ctx.reply('i love you too');
        }else{
            ctx.reply('i don\'t understand humans');
        }
});
 bot.launch();
}catch{
    console.log("unexpected command");
}
