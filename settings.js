import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.botNumber = ''

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.owner = ["51963315293", "51963315293", "51919199620"]

global.mods = ['51963315293']
global.suittag = ['51963315293'] 
global.prems = ['51963315293']

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = '✦⃟🌙 ᴛᴏᴊɪ ʙᴏᴛ 🍒⃟✦'
global.namebot = '⸸ 𝑡𝑜𝑗𝑖 𝐵𝑂𝑇 ⸸'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.shadowJadibts = true

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.packname = '🥭 ⌬ 𝒕𝒐𝒋𝒊 𝑩𝑶𝑻 ⌬ 🍁'
global.botname = '⛩️ 𝗧𝗢𝗝𝗜𝗕𝗢𝗧-𝗠𝗗 ⛩️'
global.wm = '◈ 𝐓𝐨𝐣𝐢 𝐁𝐎𝐓 ◈'
global.author = '⩇⃟🍒 𝑴𝒂𝒅𝒆 𝒃𝒚 𝐜𝐚𝐫𝐥𝐨𝐬.𝐫𝐯 ⩇⃟🥭'
global.dev = '🎶 ミ🍒 》𝑪𝑨𝑹𝑳𝑶𝑺.𝑹𝑽《 ミ 🌙'
global.bot = '𝒕𝒐𝒋𝒊 𝑩𝑶𝑻'
global.club = '🎵 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 carlos•Core 𝖢𝗅𝗎𝖻 🍒'
global.textbot = 'ᴛᴏᴊɪ ʙᴏᴛ ✦ ℂ𝔸ℝ𝕃𝕆𝕊•ℝ𝕍'
global.etiqueta = '@ᴄ`ᴀʀʟᴏs ʀ`ᴀᴍɪʀᴇᴢ ° ғ`ᴄ'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.moneda = 'ᴇᴜʀᴏs💶'
global.banner = 'https://files.catbox.moe/8vmid3.jpg'
global.avatar = 'https://files.catbox.moe/y1sy8v.jpg'
global.logo = 'https://files.catbox.moe/otob5u.jpg'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.gp1 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.comunidad1 = 'https://whatsapp.com/channel/0029Vb6iXGDISTkKY8fxUa39'
global.channel = 'https://whatsapp.com/channel/0029VbBukpH6LwHm0Ox44K2g'
global.channel2 = 'https://whatsapp.com/channel/0029VbBukpH6LwHm0Ox44K2g'
global.md = 'https://github.com/carlos13ra/SANTAFLOW-BOT13'
global.correo = 'carlosramirezvillanueva30@gmail.com'

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363404087331895@newsletter',
ch2: "120363404087331895@newsletter",
ch3: "120363404087331895@newsletter"
}
global.multiplier = 60

///*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.APIs = {
xyro: { url: "https://xyro.site", key: null },
yupra: { url: "https://api.yupra.my.id", key: null },
vreden: { url: "https://api.vreden.web.id", key: null },
delirius: { url: "https://api.delirius.store", key: null },
zenzxz: { url: "https://api.zenzxz.my.id", key: null },
siputzx: { url: "https://api.siputzx.my.id", key: null },
adonix: { url: "https://api-adonix.ultraplus.click", key: 'the.shadow' }
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
