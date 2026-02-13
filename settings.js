const fs = require('fs')
const chalk = require('chalk')

//Message
global.message = {
  error: "Internal Server Error x_x",
  botNotAdmin: "Maaf, bot ini hanya dapat digunakan ketika bot menjadi admin grup.",
  isAdmin: "Hanya admin yang dapat menggunakan perintah ini.",
  isOwn: "Anda tidak dapat melakukan tindakan ini karena anda bukan owner",
  isOwn2: "Anda tidak dapat melakukan tindakan ini terhadap owner sendiri.",
  isMe: "Anda tidak bisa melakukan tindakan ini terhadap diri Anda sendiri.",
  isGroup: "Anda hanya bisa melakukan tindakan ini didalam group.",
  isMyLink: "Link tersebut adalah link group anda sendiri."
};

//Apikey && Logic Ai

global.APIs = {
	btz: 'https://api.betabotz.eu.org' // JAN UBAH
}

global.APIKeys = {
	'https://https://api.betabotz.eu.org': 'paullch' // Isi key lu
}

global.logic = 'Kamu adalah OmgBotz-AI';
global.btz = 'paullch' //Register di https://api.betabotz.eu.org

//Data
global.grubbot = ''
global.namabot = "OmgBotz-V2" // UBAH JADI NAMA LU
global.namaowner = "Paull" // NAMA OWNER
global.footer_text = "© 2024" + namabot // NAMA BOT
global.pp_bot = "https://i.supa.codes/a2taef" // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['12894272886'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://dreamline.biz.id" // BEBAS ASAL JAN HAPUS

// NAME STICKER \\
global.packname = 'OmgBotz'
global.author = 'V2'

// TRUE OR FALSE \\

global.autoread = true
global.antispam = true // SARAN GUA TRUE AJA
global.autodownload = true
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})