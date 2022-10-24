const { monospace } = require("../../lib/function")

module.exports = {
  name: "tagall",
  alias: ["tagall","infoall"],
	category: "group",
	desc: "Announcement for group",
	isGroup: true,
	isAdmin: true,
	async run({msg, conn},{q}){
	  let data = await conn.groupMetadata(msg.from)
	  let txt1 = `*Announcement Group*\n\n`
	  let txt = ` ❏ From @${msg.sender.split("@")[0]}\n`
	      txt += ` ❏ Message : ${q ? q : "Hello 🧸"}\n`
	      txt += ` ❏ Group : ${data.subject}\n`
	      txt += ` ❏ Total Member : ${data.participants.length}\n\n`
	      for(let i of data.participants){
	        txt += `  ༆ ➪  @${i.id.split("@")[0]}\n`
	      }
	      txt2 = "\n\n" + global.footer
	      teks = txt1 + monospace(txt) + txt2
	      conn.sendMessage(msg.from,{text : teks, withTag : true},{quoted:msg})
	}
}
