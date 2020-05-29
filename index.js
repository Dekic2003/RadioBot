const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv= require('dotenv');
dotenv.config();
const prefix=process.env.PREFIX;

let Currently='';
const naxi = [
    'house', 'evergreen', 'cafe', 'classic', '80s', 'kids', 'gold', 'clubbing','','',
    'love', 'dance', 'rnb', '', '', '', 'boem', 'jazz',
    'rock', '', '', 'fresh', 'mix', 'latino', 'exyu', 'lounge', '','hype'
];

function Playing(station , message){
    Currently=station;
    message.channel.send(`Svira ${station}`).then(msg=>{
        msg.delete({ timeout:10000});

    })
}

client.once('ready', () => {

    console.log('Moze!');

});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}naxi`)) {
        const connection = await message.member.voice.channel.join();
        const radio_index = prefix.length + 'naxi '.length;
        const radio_name = message.content.substring(radio_index);

                connection.play('http://naxidigital-house128.streaming.rs:8000/;*.mp3');
                Playing('NAXI',message);

            if ( radio_name!=='' && naxi.includes(radio_name)) {
                const radio_number = ('0' + naxi.indexOf(radio_name)).slice(-2);
                let link =`http://naxidigital-${radio_name}128.streaming.rs:8${radio_number}0/;*.mp3`;
                Playing(`NAXI ${radio_name}`,message);

                connection.play(link);
            }


        }
    if (message.content.startsWith(`${prefix}rsg`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://195.201.112.14:9000/;stream');
        Playing('RSG',message);

    }
    if (message.content.startsWith(`${prefix}kameleon`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://188.40.62.20:8006/;stream.mp3');
        Playing('Kameleon',message);

    }
    if (message.content.startsWith(`${prefix}antenaZg`)) {
    const connection = await message.member.voice.channel.join();
    connection.play('http://live.antenazagreb.hr:8002/;*.mp3');
        Playing('Antena Zagreb',message);
    }
    if (message.content.startsWith(`${prefix}feral`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://185.50.56.3:80/;*.mp3');
        Playing('Feral',message);

    }
    if (message.content.startsWith(`${prefix}kalman`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://163.172.213.155:8203/;*.mp3');
        Playing('Kalman',message);

    }
    if (message.content.startsWith(`${prefix}orv`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://77.74.231.19:7109/stream');
        Playing('ORV',message);


    }
    if (message.content.startsWith(`${prefix}otvorenaMreza`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://s8.iqstreaming.com:8050/stream;');
        Playing('Otvorena Mreza',message);

    }
    if (message.content.startsWith(`${prefix}glasDrine`)) {
        const connection = await message.member.voice.channel.join();
        connection.play('http://77.74.231.21:8028/;*.mp3');
        Playing('Glas Drine',message);


    }
    if(message.content.startsWith(`${prefix}list`)){
        message.send(

        )
    }
    client.user.setActivity(`${Currently}`,{type:'PLAYING'});


});
client.login(process.env.DISCORD_BOT_TOKEN);




