const { Telegraf } = require('telegraf');

// Bot Token from Telegram BotFather
const BOT_TOKEN = '9043858038:AAFfZyRhP1mEKqSwt5nztXyBJEYQVFeQcU8';
const bot = new Telegraf(BOT_TOKEN);

// Track bot start time for dynamic uptime calculation
const startTime = Date.now();

function getUptime() {
    const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
}

// Start command and welcome message
bot.start((ctx) => {
    const uptime = getUptime();
    const welcomeMessage = `
╔════════════════════════════════════════════╗
║        🔥 EX AYUSH VIP BAN • UNBAN BOT 🔥     ║
╚════════════════════════════════════════════╝

👋 Welcome, 😈 🩸

╭──────────── ❖ SYSTEM ❖ ────────────╮
│ 🤖 BOT        : EX AYUSH BOT
│ 👑 OWNER      : DJ AYUSH (7863972304)
│ ⏱ UPTIME      : ${uptime}
│ 👥 OWNERS     : 1
│ 💎 PREMIUM    : 0
│ 🌐 PROXIES    : 0/0
│ 📺 YOUTUBE    : ✅
╰───────────────────────────────────────────╯

╔══════════ 🆓 FREE COMMANDS ══════════╗
┃ 📱 /check <+94xxx>   ➜ CHECK NUMBER
┃ 📊 /stats            ➜ BOT STATS
┃ ℹ️ /info             ➜ BOT INFO
┃ 📞 /contact          ➜ CONTACT
┃ 💰 /price            ➜ VIP PRICE
┃ 👑 /owner            ➜ OWNER CONTACT
╚═══════════════════════════════════════════╝

╔════════ 🎁 REFERRAL SYSTEM ═════════╗
┃ 🔗 /referral         ➜ MY REF LINK
┃ 📊 /myrefs           ➜ MY REFERRALS
┃ 🏆 /reftop           ➜ TOP REFERRERS
┃ 💎 /myrefstats       ➜ FULL STATS
╚═══════════════════════════════════════════╝

╔══════════ 🛠️ TOOLS ═══════════════════╗
┃ 🆔 /id | 🌐 /ip | 🔑 /passgen
╚═══════════════════════════════════════════╝

🔥 POWERED BY • DJ AYUSH TEAM
    `;
    ctx.reply(welcomeMessage);
});

// /check command
bot.command('check', (ctx) => {
    ctx.reply('📱 Number check feature is active. Please provide the number.');
});

// /stats command
bot.command('stats', (ctx) => {
    const uptime = getUptime();
    ctx.reply(`📊 Bot Stats:\nUptime: ${uptime}\nOwners: 1\nPremium: 0`);
});

// /info command
bot.command('info', (ctx) => {
    ctx.reply('ℹ️ This is EX AYUSH VIP Ban/Unban Bot powered by DJ Ayush Team.');
});

// /contact command
bot.command('contact', (ctx) => {
    ctx.reply('📞 Owner Contact: DJ AYUSH (Phone: 7863972304)');
});

// /owner command
bot.command('owner', (ctx) => {
    ctx.reply('👑 Bot Owner Information:\nName: DJ AYUSH\nWhatsApp/Phone: 7863972304');
});

// /price command
bot.command('price', (ctx) => {
    ctx.reply('💰 VIP Price details are currently empty.');
});

// /id command
bot.command('id', (ctx) => {
    ctx.reply(`🆔 Your Telegram ID: ${ctx.from.id}`);
});

// Launch the bot
bot.launch();
console.log('Bot is running successfully...');

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
