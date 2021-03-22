const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
const { WebhookClient, MessageEmbed } = require('discord.js')
const DEVIL = new Discord.WebhookClient("801838024257962024", "4GTgLQ62kQ6bG2m9qWmDVK0hyR0xekjlJICvRxvFQ4eVkPKWBqRGETjSphi3hUwF2t9r") //⁶⁶⁶ DEVIL
const LIFE = new Discord.WebhookClient("801838199047061514", "Y7Cg6552vMKUQkswCpKSieg5F5glodl_5_noMBPWGlTet4Jl0nLiMMYT8hwUIexxhTAh") //大 LIFE
const MILITARY = new Discord.WebhookClient("801838425245745182", "Jt6cVH0kXAma6BAUyds8jole0PjUriNxvB-O8BrXwQyOuxX8IUP6HFEJvMv9ACr4JsRa") //Military
const REDUX = new Discord.WebhookClient("801838630099746836", "9VibOpXVOhuWOnPIjmk5Wn_-0LJEoI3rMyjosdGBqJB2ph3NH55bMzs249XvkQvbUIYn") //REDUX
const STORM = new Discord.WebhookClient("801838849096548393", "noTTrJNFB58rk4p5ekTDbOmbNS11tCnaHwCjnYx_US6RbpV56gp_vVMlp83KlCOe3NLZ") //🌪 STORM
const THANOS = new Discord.WebhookClient("802417367908745236", "rWFzyVglNi8zwCiOsfG_Q778NYsYCnS1t-dnfYvrwyVoDf3_2pMEnMWGmD0CFdcK_fzK") //🌪 THANOS
const GOLD = new Discord.WebhookClient("802417476625236008", "qegZs22PwSk8H80OsCpQWn14yDitdJUKzE2q0iKdWKPMSzj9Nc4ktGEHrNue-_B_299s") //🌪 GOLD
const Database = new Discord.WebhookClient("803973285972017182", "MFaP0uJ6ldCvxvzFLimK-S_FdTZvbBwMHhDGf7xIepwMG0dlKxidDt8io4amKs9N6FCn") //🌪 Database




client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
////////////OtoCevap

//Nihad Design

//sese soxma

client.on("ready", () => {
  client.channels.cache.get("799046385159634955").join();
})

//otocevap



client.on("message" , async message => {

if(message.content==="+sipariş")

message.channel.send("**Siparişiniz Alınmıştır En kısa sürede sizinle iletişime geçeceğiz <a:22:798987731787186197>**")
if(message.content != "+sipariş") return
message.react("798987732265074729")

})

//yanlis yazilis tarzi

client.on("message" , async message => {

if(message.content==="+siparis")

message.channel.send("**yazım hatası`+sipariş`**")
if(message.content != "+siparis") return
message.react("❌")

})

//log dm

client.on("message", msg => {
var dm = client.channels.cache.get("799337872661938229")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`<a:36:798987668066926593> Yeni Bir Mesajım Var`)
.setTimestamp()
.setColor("random")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});

  
 client.on("ready", async () => {
   log("Durum başarıyla ayarlandı")
      client.user.setActivity("🔮 Destek için dm", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})


//MESAJ AKTIFLIK DURUMU ATMAGLARI

setInterval(function() {
    let krevzkanal = client.channels.cache.get("801837935983984661");
    if (krevzkanal) {
      DEVIL.send(
        "```Devil Botu Aktif Durumda```"
      );//krevz
    }
  }, 300000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("801837935983984661");
    if (krevzkanal) {
      LIFE.send(
        "```Life Botu Aktif Durumda```"
      );//krevz
    }
  }, 400000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("801837935983984661");
    if (krevzkanal) {
      MILITARY.send(
        "```Military Botu Aktif Durumda```"
      );//krevz
    }
  }, 500000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("801837935983984661");
    if (krevzkanal) {
      REDUX.send(
        "```Redux Botu Aktif Durumda```"
      );//krevz
    }
  }, 600000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("801837935983984661");
    if (krevzkanal) {
      STORM.send(
        "```Storm Botu Aktif Durumda```"
      );//krevz
    }
  }, 700000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("801837935983984661");
    if (krevzkanal) {
      THANOS.send(
        "```Thanos Botu Aktif Durumda```"
      );//krevz
    }
  }, 800000);

setInterval(function() {
    let krevzkanal = client.channels.cache.get("801837935983984661");
    if (krevzkanal) {
      GOLD.send(
        "```Gold Botu Aktif Durumda```"
      );//krevz
    }
  }, 900000);


//adminin mesajlarina tepki
//bosdu heleki

//bu webhooklarin aktiflik durumlarina emojiyle tepki vermekdir

client.on('message', async msg => {
if (msg.author.id == '801838024257962024') {
await msg.react('798987683560685649')
}
});

client.on('message', async msg => {
if (msg.author.id == '801838199047061514') {
await msg.react('798987683560685649')
}
});

client.on('message', async msg => {
if (msg.author.id == '801838425245745182') {
await msg.react('798987683560685649')
}
});

client.on('message', async msg => {
if (msg.author.id == '801838630099746836') {
await msg.react('798987683560685649')
}
});

client.on('message', async msg => {
if (msg.author.id == '801838849096548393') {
await msg.react('798987683560685649')
}
});

client.on('message', async msg => {
if (msg.author.id == '802417367908745236') {
await msg.react('798987683560685649')
}
});

client.on('message', async msg => {
if (msg.author.id == '802417476625236008') {
await msg.react('798987683560685649')
}
});





//bura

client.on(`userUpdate`, (oldUser, newUser) => {

  let kişi = client.users.get(oldUser.id)
  let avatar = kişi.avatarURL
  let kanal = client.channels.find(ch => ch.id === '794903464118321192')

  const emb = new Discord.RichEmbed()
  .setImage(avatar)
  .setFooter(`${kişi.tag}`)
  .setTimestamp()
  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL})!`)
  kanal.send(emb)

})


//ROL KORUMA

/////Rol Koruma
client.on("roleDelete", async role => {
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Rol Açıldı.'})
})
client.on("roleCreate", async role => {
       const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.delete()
}) 


//KANAL KORUMA

//KanalKoruma

client.on("channelDelete", async function(channel) {
    let rol = await db.fetch(`kanalk_${channel.guild.id}`);
  
  if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

  channel.clone().then(z => {
    let kanal = z.guild.channels.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.find(channel => channel.id === channelp)
      
    );
  });
  }
})


//kanala yaziyor komutu

client.on('ready', ()=>{
client.channels.cache.get('798986430557716511').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('798986980343808070').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('801303666401083392').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('799337872661938229').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('799008260866572298').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('801837935983984661').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('799009068080693270').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('799009083541553163').startTyping()
})

client.on('ready', ()=>{
client.channels.cache.get('799093243077722162').startTyping()
})


//tag yazanda tag atacaq

client.on("message" , async message => {

if(message.content==="tag")

message.channel.send("〶")
if(message.content != "〶") return
message.react("802030209737949224")

})



client.on("message" , async message => {

if(message.content==="TAG")

message.channel.send("〶")
if(message.content != "〶") return
message.react("802030209737949224")

})

client.on("message" , async message => {

if(message.content==="+tag")

message.channel.send("〶")
if(message.content != "〶") return
message.react("802030209737949224")

})

client.on("message" , async message => {

if(message.content==="!tag")

message.channel.send("〶")
if(message.content != "〶") return
message.react("802030209737949224")

})


