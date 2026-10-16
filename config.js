const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
    path: './config.env'
  });
}

const toBool = (x) =>
  !!x && ['true', 'on'].includes(x.toLowerCase());

const DATABASE_URL =
  process.env.DATABASE_URL === undefined
    ? './database.db'
    : process.env.DATABASE_URL;

module.exports = {
  // ═══════ BOT CONFIGURATION ═══════

  SESSION_ID: process.env.SESSION_ID || '',

  // Bot name and branding
  BOT_NAME:
    process.env.BOT_NAME ||
    '𒁂 𝘼𝙇𝙄𝙔𝘼 𝘽𝘼𝘽𝙔__༊⫸',

  OWNER_NAME:
    process.env.OWNER_NAME ||
    '⚡ 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔',

  STICKER_DATA:
    process.env.STICKER_DATA ||
    '🎯 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔 🍀',

  ALIVE_DATA:
    process.env.ALIVE_DATA ||
    '╭━━〔 🤖 𒁂 𝘼𝙇𝙄𝙔𝘼 𝘽𝘼𝘽𝙔__༊⫸ 〕━━╮\n' +
    '┃ 👋 ʜᴇʟʟᴏ, &sender\n' +
    '┃ 🟢 sᴛᴀᴛᴜs: ᴏɴʟɪɴᴇ\n' +
    '┃ 📱 ᴘʟᴀᴛғᴏʀᴍ: &platform\n' +
    '┃ ⏱️ ʀᴜɴᴛɪᴍᴇ: &runtime\n' +
    '╰━━━━━━━━━━━━━━━━━━╯\n\n' +
    '╭━━〔 📌 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 〕━━╮\n' +
    '┃ 💠 ᴛʏᴘᴇ *menu* ғᴏʀ ᴄᴏᴍᴍᴀɴᴅs\n' +
    '╰━━━━━━━━━━━━━━━━━━╯\n\n' +
    '⚡ ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔',

  AUDIO_DATA:
    process.env.AUDIO_DATA ||
    '𒁂 𝘼𝙇𝙄𝙔𝘼 𝘽𝘼𝘽𝙔__༊⫸;𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔;',

  BOT_INFO:
    process.env.BOT_INFO ||
    '𒁂 𝘼𝙇𝙄𝙔𝘼 𝘽𝘼𝘽𝙔__༊⫸;𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔;019400***;',

  PREFIX: process.env.PREFIX || '.',

  MODE: process.env.MODE || 'private',

  // ═══════ ADMIN CONFIGURATION ═══════

  SUDO: process.env.SUDO || '8801940047435',

  // Public display only
  SUDO_DISPLAY: '019400***',

  // ═══════ API AND LANGUAGE SETTINGS ═══════

  ELEVENLABS_API_KEY:
    process.env.ELEVENLABS_API_KEY || '',

  TIMEZONE: process.env.TIMEZONE || 'Asia/Dhaka',

  BOT_LANG: process.env.BOT_LANG || 'EN',

  START_MSG: toBool(process.env.START_MSG || 'true'),

  ERROR_MSG: toBool(process.env.ERROR_MSG || 'true'),

  // ═══════ DEPLOY / HOSTING ═══════

  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',

  RENDER_NAME: process.env.RENDER_NAME || '',
  RENDER_API: process.env.RENDER_API || '',

  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
  KOYEB_API_KEY: process.env.KOYEB_API_KEY || '',

  // ═══════ AUTOMATION ═══════

  AUTO_ALWAYS_ONLINE: toBool(
    process.env.AUTO_ALWAYS_ONLINE || 'false'
  ),

  AUTO_CALL_REJECT: toBool(
    process.env.AUTO_CALL_REJECT || 'false'
  ),

  AUTO_CALL_REJECT_MSG:
    process.env.AUTO_CALL_REJECT_MSG ||
    '╭━━〔 📵 𝘾𝘼𝙇𝙇 𝘽𝙇𝙊𝘾𝙆 〕━━╮\n' +
    '┃ ❌ ᴄᴀʟʟs ᴀʀᴇ ɴᴏᴛ ᴀᴄᴄᴇᴘᴛᴇᴅ\n' +
    '┃ 💬 ᴘʟᴇᴀsᴇ sᴇɴᴅ ᴀ ᴍᴇssᴀɢᴇ\n' +
    '╰━━━━━━━━━━━━━━━━━━╯\n\n' +
    '⚡ 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔',

  AUTO_MSG_READ: toBool(
    process.env.AUTO_MSG_READ || 'false'
  ),

  AUTO_MSG_REACT: toBool(
    process.env.AUTO_MSG_REACT || 'false'
  ),

  // ═══════ STATUS AUTOMATION ═══════

  AUTO_STATUS_SAVER: toBool(
    process.env.AUTO_STATUS_SAVER || 'false'
  ),

  AUTO_STATUS_VIEW: toBool(
    process.env.AUTO_STATUS_VIEW || 'false'
  ),

  AUTO_STATUS_REPLY: toBool(
    process.env.AUTO_STATUS_REPLY || 'false'
  ),

  AUTO_STATUS_REPLY_MSG:
    process.env.AUTO_STATUS_REPLY_MSG ||
    '╭━━〔 💎 𝙉𝙄𝘾𝙀 𝙎𝙏𝘼𝙏𝙐𝙎 〕━━╮\n' +
    '┃ 🤍 ɴɪᴄᴇ sᴛᴀᴛᴜs, ʙʀᴏ!\n' +
    '╰━━━━━━━━━━━━━━━━━━╯\n' +
    '⚡ 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔 🍀',

  AUTO_STATUS_REACT: toBool(
    process.env.AUTO_STATUS_REACT || 'false'
  ),

  AUTO_STATUS_REACT_EMOJIS:
    process.env.AUTO_STATUS_REACT_EMOJIS ||
    ['💎', '🤍', '🍀', '💀', '📈', '🎯', '🫶', '👀', '☠️'],

  // ═══════ CORE SETTINGS ═══════

  BASE_URL: 'https://abhi-api.vercel.app/',

  BRANCH: 'main',

  // ═══════ DATABASE ═══════

  DATABASE:
    DATABASE_URL === './database.db'
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          },
          logging: false
        })
};
