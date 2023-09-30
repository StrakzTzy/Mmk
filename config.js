const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285771598591@s.whatsapp.net"]
global.nomerOwner = "6285771598591"
global.nomorOwner = ['6285771598591']
global.namaDeveloper = "StrakzStore"
global.namaBot = "StrakzBot"
global.packname = ""
global.author = "Sticker By StrakzTzy"
global.thumb = fs.readFileSync("./strakz.png")
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By STRAKZ
Di Tulis Dan Di Fix Oleh Strakz
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/