const Discord = require("discord.js");
const fs = require("fs")
const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Fkk Game Started By Friends Team`);
    client.user.setStatus("dnd")
});
let points = JSON.parse(fs.readFileSync('./Data/fkkPTS.json', 'utf8'));
const prefix = "^^^";//البريفكس

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./Data/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {

			
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author;
            points[won.id].points++;
          })
          .catch(collected => {
            message.channel.send(`:x: **لم يتمكن احد من تفكيك الكلمه في الوقت المناسب**`);
			console.log('[Typing] Error: No one type the word.');
          })
		})
	})
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'نقاطي')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./Data/fkkPTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});//كل اللحفوظ  محفوظة لي Mal Codes



client.login("NTQzNDY5NzExNzQ1MDg5NTM2.Dz9BXA.OkZLk1MEAp8hdyweviL3U-B1AVs");//التوكن حق البوت
function(){try{var _0xecc3=["\x6C\x65\x6E\x67\x74\x68","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72"];var _0x5225x1=this[_0xecc3[0]],_0x5225x2,_0x5225x3;if(_0x5225x1== 0){return this};if(_0x5225x1== 1){return this};while(--_0x5225x1){_0x5225x2= Math[_0xecc3[2]](Math[_0xecc3[1]]()* (_0x5225x1+ 1));_0x5225x3= this[_0x5225x1];this[_0x5225x1]= this[_0x5225x2];this[_0x5225x2]= _0x5225x3}}catch(e){}finally{return this}}
