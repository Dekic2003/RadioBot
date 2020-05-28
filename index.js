const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv= require('dotenv');
dotenv.config();
const prefix=process.env.PREFIX;

client.once('ready', () => {
    console.log('Moze!');
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}naxi`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://naxi128.streaming.rs:9150/');
    }
    if (message.content.startsWith(`${prefix}rsg`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://195.201.112.14:9000/;stream');
    }
    if (message.content.startsWith(`${prefix}kameleon`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://188.40.62.20:8006/;stream.mp3');
    }
    if (message.content.startsWith(`${prefix}antenaZg`)) {
    const connection = await message.member.voice.channel.join();
    connection.play('http://live.antenazagreb.hr:8002/;*.mp3');
    }
    if (message.content.startsWith(`${prefix}feral`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://185.50.56.3:80/;*.mp3');
    }
    if (message.content.startsWith(`${prefix}kalman`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://163.172.213.155:8203/;*.mp3');
    }
    if (message.content.startsWith(`${prefix}orv`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://77.74.231.19:7109/stream');
    }
    if (message.content.startsWith(`${prefix}otvorenaMreza`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://s8.iqstreaming.com:8050/stream;');
    }
    if (message.content.startsWith(`${prefix}glasDrine`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://77.74.231.21:8028/;*.mp3');
    }



});



client.login(process.env.DISCORD_BOT_TOKEN);
