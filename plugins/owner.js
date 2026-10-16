// ╔══════════════════════════════════════╗
//       𒁂 ACS TONMOY — OWNER PROFILE
// ╚══════════════════════════════════════╝

const OWNER_NAME = "𒁂 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔 𒁂";
const BOT_NAME = "𒁂 𝘼𝙇𝙄𝙔𝘼 𝘽𝘼𝘽𝙔__༊⫸";
const OWNER_VIDEO = "https://files.catbox.moe/28izyd.mp4";

const ownerMessage = `
╭━━━〔 👑 𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊 〕━━━╮

  ✦ 𝙉𝘼𝙈𝙀
  ➤ 𒁂 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔 𒁂

  ✦ 𝙃𝙊𝙈𝙀 𝙏𝙊𝙒𝙉
  ➤ 𝙍𝘼𝙉𝙂𝙋𝙐𝙍

  ✦ 𝙍𝙀𝙇𝙄𝙂𝙄𝙊𝙉
  ➤ 𝙄𝙎𝙇𝘼𝙈

  ✦ 𝘼𝙂𝙀
  ➤ 𝟮𝟮 𝙔𝙀𝘼𝙍𝙎 𝙊𝙇𝘿

  ✦ 𝙋𝙍𝙊𝙁𝙀𝙎𝙎𝙄𝙊𝙉
  ➤ 𝘼𝙏𝙏𝘼𝘾𝙆 𝘾𝙔𝘽𝙀𝙍
     𝙎𝙀𝘾𝙐𝙍𝙄𝙏𝙔 - 𝘼𝘾𝙎

╰━━━━━━━━━━━━━━━━━━━━╯

🤖 𝘽𝙊𝙏 𝙉𝘼𝙈𝙀:
${BOT_NAME}

⚡ 𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔
𒁂 𝘼𝘾𝙎 𝙏𝙊𝙉𝙈𝙊𝙔 𒁂
`;

module.exports = {
    name: "owner",
    aliases: ["creator", "dev"],
    category: "main",
    description: "Show stylish owner information",
    ownerMessage,
    OWNER_NAME,
    BOT_NAME,
    OWNER_VIDEO
};
