const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv");
const RADIO_STATIONS = require("../data/stations").DATA;
dotenv.config();
const prefix = process.env.PREFIX;
const thumb_url = process.env.THUMB_URL;

function refresh(message) {
  const connection = message.member.voice.channel.join();
  connection.play(url);
}

function printRadioList(channel) {
  // Initialize embeded mesage
  let fieldCounter = 0;
  let listMessage = new Discord.MessageEmbed()
    .setTitle("Ponuda radio stanica")
    .setAuthor("Radio bot")
    .setThumbnail(thumb_url)
    .setTimestamp()
    .setFooter("\u3000".repeat(10 /*any big number works too*/) + "|");

  // Iterate over radios and create list
  RADIO_STATIONS.map((radio) => {
    listMessage.addField("Naziv stanice", radio.name, true);
    listMessage.addField("Komanda", `${prefix}pusti ${radio.identifier}`, true);
    listMessage.addField(
      "Kontakt",
      radio.contact.length > 0 ? radio.contact.length : "NEMA",
      true
    );
    fieldCounter += 3;

    // Since we can only send 25 fileds in a list we are sending multiple mesagess
    if (fieldCounter == 24) {
      fieldCounter = 0;
      channel.send(listMessage);
      listMessage = new Discord.MessageEmbed()
        .setTitle("Ponuda radio stanica")
        .setAuthor("Radio bot")
        .setThumbnail(thumb_url)
        .setTimestamp()
        .setFooter("\u3000".repeat(10 /*any big number works too*/) + "|");
    }
  });
}

const playRadioStation = async (message, user) => {
  // Validate play command
  let radioName;
  if (/\s/.test(message.content)) {
    radioName = message.content.split(" ")[1];
  } else if (!/\s/.test(message.content) || !radioName) {
    message.channel.send("Nejma te komande");
    return;
  }

  // Extract radio data
  const radio = RADIO_STATIONS.find((r) => r.identifier === radioName);
  if (!radio) {
    message.channel.send("Nejma tog radija");
    return;
  }

  // Create connection
  const connection = await message.member.voice.channel.join();

  // Play radio
  connection.play(radio.url);

  // Update channel with mesage and user statu
  const statusMessage = new Discord.MessageEmbed()
    .setAuthor("Trenutno svira")
    .setTitle(`${radio.name}`);
  message.channel.send(statusMessage);
  user.setActivity(`${radio.name}`, { type: "PLAYING" });
};

client.once("ready", () => {
  console.log("Moze!");
});

client.on("message", async (message) => {
  // Validate bot request
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Clean command
  let command = message.content;
  if (/\s/.test(message.content)) {
    command = message.content.split(" ")[0];
  }

  // Decide what to run
  switch (command) {
    case `${prefix}ponuda`:
      printRadioList(message.channel);
      break;
    case `${prefix}pusti`:
      playRadioStation(message, client.user);
      break;
  }
});
client.login(process.env.DISCORD_BOT_TOKEN);
