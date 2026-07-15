require("dotenv").config();
const { GatewayIntentBits } = require("discord-api-types/v10");
const { Events, Client } = require("discord.js");

const client = new Client({
 intents: [
   GatewayIntentBits.GuildVoiceStates,
   GatewayIntentBits.GuildMessages,
   GatewayIntentBits.MessageContent,
   GatewayIntentBits.Guilds,
 ],
});

client.on(Events.ClientReady, () => console.log("Ready!"));

client.on(Events.MessageCreate, async (message) => {
 console.log(`New message; ${message.content}`);
});

client.on(Events.Error, console.warn);

void client.login(process.env.DISCORD_TOKEN); 