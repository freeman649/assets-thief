module.exports = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 141))
  );
})([
  function (e, t) {
    e.exports = require("path");
  },
  function (e, t) {
    e.exports = require("fs");
  },
  function (e, t, r) {
    "use strict";
    var n = r(18),
      i = r(101),
      o = r(46),
      s = r(36);
    function a(e) {
      return e;
    }
    function c(e, t) {
      for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
      return t;
    }
    r(188),
      (t.newBlob = function (e, r) {
        t.checkSupport("blob");
        try {
          return new Blob([e], { type: r });
        } catch (t) {
          try {
            var n = new (self.BlobBuilder ||
              self.WebKitBlobBuilder ||
              self.MozBlobBuilder ||
              self.MSBlobBuilder)();
            return n.append(e), n.getBlob(r);
          } catch (e) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      });
    var l = {
      stringifyByChunk: function (e, t, r) {
        var n = [],
          i = 0,
          o = e.length;
        if (o <= r) return String.fromCharCode.apply(null, e);
        for (; i < o; )
          "array" === t || "nodebuffer" === t
            ? n.push(
                String.fromCharCode.apply(null, e.slice(i, Math.min(i + r, o)))
              )
            : n.push(
                String.fromCharCode.apply(
                  null,
                  e.subarray(i, Math.min(i + r, o))
                )
              ),
            (i += r);
        return n.join("");
      },
      stringifyByChar: function (e) {
        for (var t = "", r = 0; r < e.length; r++)
          t += String.fromCharCode(e[r]);
        return t;
      },
      applyCanBeUsed: {
        uint8array: (function () {
          try {
            return (
              n.uint8array &&
              1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
            );
          } catch (e) {
            return !1;
          }
        })(),
        nodebuffer: (function () {
          try {
            return (
              n.nodebuffer &&
              1 === String.fromCharCode.apply(null, o.allocBuffer(1)).length
            );
          } catch (e) {
            return !1;
          }
        })(),
      },
    };
    function u(e) {
      var r = 65536,
        n = t.getTypeOf(e),
        i = !0;
      if (
        ("uint8array" === n
          ? (i = l.applyCanBeUsed.uint8array)
          : "nodebuffer" === n && (i = l.applyCanBeUsed.nodebuffer),
        i)
      )
        for (; r > 1; )
          try {
            return l.stringifyByChunk(e, n, r);
          } catch (e) {
            r = Math.floor(r / 2);
          }
      return l.stringifyByChar(e);
    }
    function h(e, t) {
      for (var r = 0; r < e.length; r++) t[r] = e[r];
      return t;
    }
    t.applyFromCharCode = u;
    var f = {};
    (f.string = {
      string: a,
      array: function (e) {
        return c(e, new Array(e.length));
      },
      arraybuffer: function (e) {
        return f.string.uint8array(e).buffer;
      },
      uint8array: function (e) {
        return c(e, new Uint8Array(e.length));
      },
      nodebuffer: function (e) {
        return c(e, o.allocBuffer(e.length));
      },
    }),
      (f.array = {
        string: u,
        array: a,
        arraybuffer: function (e) {
          return new Uint8Array(e).buffer;
        },
        uint8array: function (e) {
          return new Uint8Array(e);
        },
        nodebuffer: function (e) {
          return o.newBufferFrom(e);
        },
      }),
      (f.arraybuffer = {
        string: function (e) {
          return u(new Uint8Array(e));
        },
        array: function (e) {
          return h(new Uint8Array(e), new Array(e.byteLength));
        },
        arraybuffer: a,
        uint8array: function (e) {
          return new Uint8Array(e);
        },
        nodebuffer: function (e) {
          return o.newBufferFrom(new Uint8Array(e));
        },
      }),
      (f.uint8array = {
        string: u,
        array: function (e) {
          return h(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return e.buffer;
        },
        uint8array: a,
        nodebuffer: function (e) {
          return o.newBufferFrom(e);
        },
      }),
      (f.nodebuffer = {
        string: u,
        array: function (e) {
          return h(e, new Array(e.length));
        },
        arraybuffer: function (e) {
          return f.nodebuffer.uint8array(e).buffer;
        },
        uint8array: function (e) {
          return h(e, new Uint8Array(e.length));
        },
        nodebuffer: a,
      }),
      (t.transformTo = function (e, r) {
        if ((r || (r = ""), !e)) return r;
        t.checkSupport(e);
        var n = t.getTypeOf(r);
        return f[n][e](r);
      }),
      (t.resolve = function (e) {
        for (var t = e.split("/"), r = [], n = 0; n < t.length; n++) {
          var i = t[n];
          "." === i ||
            ("" === i && 0 !== n && n !== t.length - 1) ||
            (".." === i ? r.pop() : r.push(i));
        }
        return r.join("/");
      }),
      (t.getTypeOf = function (e) {
        return "string" == typeof e
          ? "string"
          : "[object Array]" === Object.prototype.toString.call(e)
          ? "array"
          : n.nodebuffer && o.isBuffer(e)
          ? "nodebuffer"
          : n.uint8array && e instanceof Uint8Array
          ? "uint8array"
          : n.arraybuffer && e instanceof ArrayBuffer
          ? "arraybuffer"
          : void 0;
      }),
      (t.checkSupport = function (e) {
        if (!n[e.toLowerCase()])
          throw new Error(e + " is not supported by this platform");
      }),
      (t.MAX_VALUE_16BITS = 65535),
      (t.MAX_VALUE_32BITS = -1),
      (t.pretty = function (e) {
        var t,
          r,
          n = "";
        for (r = 0; r < (e || "").length; r++)
          n +=
            "\\x" +
            ((t = e.charCodeAt(r)) < 16 ? "0" : "") +
            t.toString(16).toUpperCase();
        return n;
      }),
      (t.delay = function (e, t, r) {
        setImmediate(function () {
          e.apply(r || null, t || []);
        });
      }),
      (t.inherits = function (e, t) {
        var r = function () {};
        (r.prototype = t.prototype), (e.prototype = new r());
      }),
      (t.extend = function () {
        var e,
          t,
          r = {};
        for (e = 0; e < arguments.length; e++)
          for (t in arguments[e])
            Object.prototype.hasOwnProperty.call(arguments[e], t) &&
              void 0 === r[t] &&
              (r[t] = arguments[e][t]);
        return r;
      }),
      (t.prepareContent = function (e, r, o, a, l) {
        return s.Promise.resolve(r)
          .then(function (e) {
            return n.blob &&
              (e instanceof Blob ||
                -1 !==
                  ["[object File]", "[object Blob]"].indexOf(
                    Object.prototype.toString.call(e)
                  )) &&
              "undefined" != typeof FileReader
              ? new s.Promise(function (t, r) {
                  var n = new FileReader();
                  (n.onload = function (e) {
                    t(e.target.result);
                  }),
                    (n.onerror = function (e) {
                      r(e.target.error);
                    }),
                    n.readAsArrayBuffer(e);
                })
              : e;
          })
          .then(function (r) {
            var u,
              h = t.getTypeOf(r);
            return h
              ? ("arraybuffer" === h
                  ? (r = t.transformTo("uint8array", r))
                  : "string" === h &&
                    (l
                      ? (r = i.decode(r))
                      : o &&
                        !0 !== a &&
                        (r = c(
                          (u = r),
                          n.uint8array
                            ? new Uint8Array(u.length)
                            : new Array(u.length)
                        ))),
                r)
              : s.Promise.reject(
                  new Error(
                    "Can't read the data of '" +
                      e +
                      "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                  )
                );
          });
      });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.newError =
        t.asArray =
        t.CURRENT_APP_PACKAGE_FILE_NAME =
        t.CURRENT_APP_INSTALLER_FILE_NAME =
        t.XElement =
        t.parseXml =
        t.ProgressCallbackTransform =
        t.UUID =
        t.parseDn =
        t.githubUrl =
        t.getS3LikeProviderBaseUrl =
        t.configureRequestUrl =
        t.parseJson =
        t.safeStringifyJson =
        t.configureRequestOptionsFromUrl =
        t.configureRequestOptions =
        t.safeGetHeader =
        t.DigestTransform =
        t.HttpExecutor =
        t.createHttpError =
        t.HttpError =
        t.CancellationError =
        t.CancellationToken =
          void 0);
    var n = r(119);
    Object.defineProperty(t, "CancellationToken", {
      enumerable: !0,
      get: function () {
        return n.CancellationToken;
      },
    }),
      Object.defineProperty(t, "CancellationError", {
        enumerable: !0,
        get: function () {
          return n.CancellationError;
        },
      });
    var i = r(120);
    Object.defineProperty(t, "HttpError", {
      enumerable: !0,
      get: function () {
        return i.HttpError;
      },
    }),
      Object.defineProperty(t, "createHttpError", {
        enumerable: !0,
        get: function () {
          return i.createHttpError;
        },
      }),
      Object.defineProperty(t, "HttpExecutor", {
        enumerable: !0,
        get: function () {
          return i.HttpExecutor;
        },
      }),
      Object.defineProperty(t, "DigestTransform", {
        enumerable: !0,
        get: function () {
          return i.DigestTransform;
        },
      }),
      Object.defineProperty(t, "safeGetHeader", {
        enumerable: !0,
        get: function () {
          return i.safeGetHeader;
        },
      }),
      Object.defineProperty(t, "configureRequestOptions", {
        enumerable: !0,
        get: function () {
          return i.configureRequestOptions;
        },
      }),
      Object.defineProperty(t, "configureRequestOptionsFromUrl", {
        enumerable: !0,
        get: function () {
          return i.configureRequestOptionsFromUrl;
        },
      }),
      Object.defineProperty(t, "safeStringifyJson", {
        enumerable: !0,
        get: function () {
          return i.safeStringifyJson;
        },
      }),
      Object.defineProperty(t, "parseJson", {
        enumerable: !0,
        get: function () {
          return i.parseJson;
        },
      }),
      Object.defineProperty(t, "configureRequestUrl", {
        enumerable: !0,
        get: function () {
          return i.configureRequestUrl;
        },
      });
    var o = r(237);
    Object.defineProperty(t, "getS3LikeProviderBaseUrl", {
      enumerable: !0,
      get: function () {
        return o.getS3LikeProviderBaseUrl;
      },
    }),
      Object.defineProperty(t, "githubUrl", {
        enumerable: !0,
        get: function () {
          return o.githubUrl;
        },
      });
    var s = r(238);
    Object.defineProperty(t, "parseDn", {
      enumerable: !0,
      get: function () {
        return s.parseDn;
      },
    });
    var a = r(239);
    Object.defineProperty(t, "UUID", {
      enumerable: !0,
      get: function () {
        return a.UUID;
      },
    });
    var c = r(123);
    Object.defineProperty(t, "ProgressCallbackTransform", {
      enumerable: !0,
      get: function () {
        return c.ProgressCallbackTransform;
      },
    });
    var l = r(240);
    Object.defineProperty(t, "parseXml", {
      enumerable: !0,
      get: function () {
        return l.parseXml;
      },
    }),
      Object.defineProperty(t, "XElement", {
        enumerable: !0,
        get: function () {
          return l.XElement;
        },
      }),
      (t.CURRENT_APP_INSTALLER_FILE_NAME = "installer.exe"),
      (t.CURRENT_APP_PACKAGE_FILE_NAME = "package.7z"),
      (t.asArray = function (e) {
        return null == e ? [] : Array.isArray(e) ? e : [e];
      }),
      (t.newError = function (e, t) {
        const r = new Error(e);
        return (r.code = t), r;
      });
  },
  function (e, t) {
    e.exports = require("electron");
  },
  function (e, t, r) {
    const n = r(39),
      { MAX_LENGTH: i, MAX_SAFE_INTEGER: o } = r(38),
      { re: s, t: a } = r(32),
      c = r(58),
      { compareIdentifiers: l } = r(81);
    class u {
      constructor(e, t) {
        if (((t = c(t)), e instanceof u)) {
          if (
            e.loose === !!t.loose &&
            e.includePrerelease === !!t.includePrerelease
          )
            return e;
          e = e.version;
        } else if ("string" != typeof e)
          throw new TypeError(
            `Invalid version. Must be a string. Got type "${typeof e}".`
          );
        if (e.length > i)
          throw new TypeError(`version is longer than ${i} characters`);
        n("SemVer", e, t),
          (this.options = t),
          (this.loose = !!t.loose),
          (this.includePrerelease = !!t.includePrerelease);
        const r = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
        if (!r) throw new TypeError("Invalid Version: " + e);
        if (
          ((this.raw = e),
          (this.major = +r[1]),
          (this.minor = +r[2]),
          (this.patch = +r[3]),
          this.major > o || this.major < 0)
        )
          throw new TypeError("Invalid major version");
        if (this.minor > o || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > o || this.patch < 0)
          throw new TypeError("Invalid patch version");
        r[4]
          ? (this.prerelease = r[4].split(".").map((e) => {
              if (/^[0-9]+$/.test(e)) {
                const t = +e;
                if (t >= 0 && t < o) return t;
              }
              return e;
            }))
          : (this.prerelease = []),
          (this.build = r[5] ? r[5].split(".") : []),
          this.format();
      }
      format() {
        return (
          (this.version = `${this.major}.${this.minor}.${this.patch}`),
          this.prerelease.length &&
            (this.version += "-" + this.prerelease.join(".")),
          this.version
        );
      }
      toString() {
        return this.version;
      }
      compare(e) {
        if (
          (n("SemVer.compare", this.version, this.options, e),
          !(e instanceof u))
        ) {
          if ("string" == typeof e && e === this.version) return 0;
          e = new u(e, this.options);
        }
        return e.version === this.version
          ? 0
          : this.compareMain(e) || this.comparePre(e);
      }
      compareMain(e) {
        return (
          e instanceof u || (e = new u(e, this.options)),
          l(this.major, e.major) ||
            l(this.minor, e.minor) ||
            l(this.patch, e.patch)
        );
      }
      comparePre(e) {
        if (
          (e instanceof u || (e = new u(e, this.options)),
          this.prerelease.length && !e.prerelease.length)
        )
          return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let t = 0;
        do {
          const r = this.prerelease[t],
            i = e.prerelease[t];
          if ((n("prerelease compare", t, r, i), void 0 === r && void 0 === i))
            return 0;
          if (void 0 === i) return 1;
          if (void 0 === r) return -1;
          if (r !== i) return l(r, i);
        } while (++t);
      }
      compareBuild(e) {
        e instanceof u || (e = new u(e, this.options));
        let t = 0;
        do {
          const r = this.build[t],
            i = e.build[t];
          if ((n("prerelease compare", t, r, i), void 0 === r && void 0 === i))
            return 0;
          if (void 0 === i) return 1;
          if (void 0 === r) return -1;
          if (r !== i) return l(r, i);
        } while (++t);
      }
      inc(e, t, r) {
        switch (e) {
          case "premajor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              (this.minor = 0),
              this.major++,
              this.inc("pre", t, r);
            break;
          case "preminor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              this.minor++,
              this.inc("pre", t, r);
            break;
          case "prepatch":
            (this.prerelease.length = 0),
              this.inc("patch", t, r),
              this.inc("pre", t, r);
            break;
          case "prerelease":
            0 === this.prerelease.length && this.inc("patch", t, r),
              this.inc("pre", t, r);
            break;
          case "major":
            (0 === this.minor &&
              0 === this.patch &&
              0 !== this.prerelease.length) ||
              this.major++,
              (this.minor = 0),
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "minor":
            (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "patch":
            0 === this.prerelease.length && this.patch++,
              (this.prerelease = []);
            break;
          case "pre": {
            const e = Number(r) ? 1 : 0;
            if (!t && !1 === r)
              throw new Error(
                "invalid increment argument: identifier is empty"
              );
            if (0 === this.prerelease.length) this.prerelease = [e];
            else {
              let n = this.prerelease.length;
              for (; --n >= 0; )
                "number" == typeof this.prerelease[n] &&
                  (this.prerelease[n]++, (n = -2));
              if (-1 === n) {
                if (t === this.prerelease.join(".") && !1 === r)
                  throw new Error(
                    "invalid increment argument: identifier already exists"
                  );
                this.prerelease.push(e);
              }
            }
            if (t) {
              let n = [t, e];
              !1 === r && (n = [t]),
                0 === l(this.prerelease[0], t)
                  ? isNaN(this.prerelease[1]) && (this.prerelease = n)
                  : (this.prerelease = n);
            }
            break;
          }
          default:
            throw new Error("invalid increment argument: " + e);
        }
        return this.format(), (this.raw = this.version), this;
      }
    }
    e.exports = u;
  },
  function (e, t, r) {
    var n,
      i,
      o = r(1),
      s = r(216),
      a = r(218),
      c = r(219),
      l = r(14);
    function u(e, t) {
      Object.defineProperty(e, n, {
        get: function () {
          return t;
        },
      });
    }
    "function" == typeof Symbol && "function" == typeof Symbol.for
      ? ((n = Symbol.for("graceful-fs.queue")),
        (i = Symbol.for("graceful-fs.previous")))
      : ((n = "___graceful-fs.queue"), (i = "___graceful-fs.previous"));
    var h,
      f = function () {};
    if (
      (l.debuglog
        ? (f = l.debuglog("gfs4"))
        : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
          (f = function () {
            var e = l.format.apply(l, arguments);
            (e = "GFS4: " + e.split(/\n/).join("\nGFS4: ")), console.error(e);
          }),
      !o[n])
    ) {
      var d = global[n] || [];
      u(o, d),
        (o.close = (function (e) {
          function t(t, r) {
            return e.call(o, t, function (e) {
              e || g(), "function" == typeof r && r.apply(this, arguments);
            });
          }
          return Object.defineProperty(t, i, { value: e }), t;
        })(o.close)),
        (o.closeSync = (function (e) {
          function t(t) {
            e.apply(o, arguments), g();
          }
          return Object.defineProperty(t, i, { value: e }), t;
        })(o.closeSync)),
        /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") &&
          process.on("exit", function () {
            f(o[n]), r(33).equal(o[n].length, 0);
          });
    }
    function p(e) {
      s(e),
        (e.gracefulify = p),
        (e.createReadStream = function (t, r) {
          return new e.ReadStream(t, r);
        }),
        (e.createWriteStream = function (t, r) {
          return new e.WriteStream(t, r);
        });
      var t = e.readFile;
      e.readFile = function (e, r, n) {
        "function" == typeof r && ((n = r), (r = null));
        return (function e(r, n, i, o) {
          return t(r, n, function (t) {
            !t || ("EMFILE" !== t.code && "ENFILE" !== t.code)
              ? "function" == typeof i && i.apply(this, arguments)
              : m([e, [r, n, i], t, o || Date.now(), Date.now()]);
          });
        })(e, r, n);
      };
      var r = e.writeFile;
      e.writeFile = function (e, t, n, i) {
        "function" == typeof n && ((i = n), (n = null));
        return (function e(t, n, i, o, s) {
          return r(t, n, i, function (r) {
            !r || ("EMFILE" !== r.code && "ENFILE" !== r.code)
              ? "function" == typeof o && o.apply(this, arguments)
              : m([e, [t, n, i, o], r, s || Date.now(), Date.now()]);
          });
        })(e, t, n, i);
      };
      var n = e.appendFile;
      n &&
        (e.appendFile = function (e, t, r, i) {
          "function" == typeof r && ((i = r), (r = null));
          return (function e(t, r, i, o, s) {
            return n(t, r, i, function (n) {
              !n || ("EMFILE" !== n.code && "ENFILE" !== n.code)
                ? "function" == typeof o && o.apply(this, arguments)
                : m([e, [t, r, i, o], n, s || Date.now(), Date.now()]);
            });
          })(e, t, r, i);
        });
      var i = e.copyFile;
      i &&
        (e.copyFile = function (e, t, r, n) {
          "function" == typeof r && ((n = r), (r = 0));
          return (function e(t, r, n, o, s) {
            return i(t, r, n, function (i) {
              !i || ("EMFILE" !== i.code && "ENFILE" !== i.code)
                ? "function" == typeof o && o.apply(this, arguments)
                : m([e, [t, r, n, o], i, s || Date.now(), Date.now()]);
            });
          })(e, t, r, n);
        });
      var o = e.readdir;
      e.readdir = function (e, t, r) {
        "function" == typeof t && ((r = t), (t = null));
        var n = c.test(process.version)
          ? function (e, t, r, n) {
              return o(e, i(e, t, r, n));
            }
          : function (e, t, r, n) {
              return o(e, t, i(e, t, r, n));
            };
        return n(e, t, r);
        function i(e, t, r, i) {
          return function (o, s) {
            !o || ("EMFILE" !== o.code && "ENFILE" !== o.code)
              ? (s && s.sort && s.sort(),
                "function" == typeof r && r.call(this, o, s))
              : m([n, [e, t, r], o, i || Date.now(), Date.now()]);
          };
        }
      };
      var c = /^v[0-5]\./;
      if ("v0.8" === process.version.substr(0, 4)) {
        var l = a(e);
        (g = l.ReadStream), (v = l.WriteStream);
      }
      var u = e.ReadStream;
      u &&
        ((g.prototype = Object.create(u.prototype)),
        (g.prototype.open = function () {
          var e = this;
          w(e.path, e.flags, e.mode, function (t, r) {
            t
              ? (e.autoClose && e.destroy(), e.emit("error", t))
              : ((e.fd = r), e.emit("open", r), e.read());
          });
        }));
      var h = e.WriteStream;
      h &&
        ((v.prototype = Object.create(h.prototype)),
        (v.prototype.open = function () {
          var e = this;
          w(e.path, e.flags, e.mode, function (t, r) {
            t
              ? (e.destroy(), e.emit("error", t))
              : ((e.fd = r), e.emit("open", r));
          });
        })),
        Object.defineProperty(e, "ReadStream", {
          get: function () {
            return g;
          },
          set: function (e) {
            g = e;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, "WriteStream", {
          get: function () {
            return v;
          },
          set: function (e) {
            v = e;
          },
          enumerable: !0,
          configurable: !0,
        });
      var f = g;
      Object.defineProperty(e, "FileReadStream", {
        get: function () {
          return f;
        },
        set: function (e) {
          f = e;
        },
        enumerable: !0,
        configurable: !0,
      });
      var d = v;
      function g(e, t) {
        return this instanceof g
          ? (u.apply(this, arguments), this)
          : g.apply(Object.create(g.prototype), arguments);
      }
      function v(e, t) {
        return this instanceof v
          ? (h.apply(this, arguments), this)
          : v.apply(Object.create(v.prototype), arguments);
      }
      Object.defineProperty(e, "FileWriteStream", {
        get: function () {
          return d;
        },
        set: function (e) {
          d = e;
        },
        enumerable: !0,
        configurable: !0,
      });
      var y = e.open;
      function w(e, t, r, n) {
        return (
          "function" == typeof r && ((n = r), (r = null)),
          (function e(t, r, n, i, o) {
            return y(t, r, n, function (s, a) {
              !s || ("EMFILE" !== s.code && "ENFILE" !== s.code)
                ? "function" == typeof i && i.apply(this, arguments)
                : m([e, [t, r, n, i], s, o || Date.now(), Date.now()]);
            });
          })(e, t, r, n)
        );
      }
      return (e.open = w), e;
    }
    function m(e) {
      f("ENQUEUE", e[0].name, e[1]), o[n].push(e), v();
    }
    function g() {
      for (var e = Date.now(), t = 0; t < o[n].length; ++t)
        o[n][t].length > 2 && ((o[n][t][3] = e), (o[n][t][4] = e));
      v();
    }
    function v() {
      if ((clearTimeout(h), (h = void 0), 0 !== o[n].length)) {
        var e = o[n].shift(),
          t = e[0],
          r = e[1],
          i = e[2],
          s = e[3],
          a = e[4];
        if (void 0 === s) f("RETRY", t.name, r), t.apply(null, r);
        else if (Date.now() - s >= 6e4) {
          f("TIMEOUT", t.name, r);
          var c = r.pop();
          "function" == typeof c && c.call(null, i);
        } else {
          var l = Date.now() - a,
            u = Math.max(a - s, 1);
          l >= Math.min(1.2 * u, 100)
            ? (f("RETRY", t.name, r), t.apply(null, r.concat([s])))
            : o[n].push(e);
        }
        void 0 === h && (h = setTimeout(v, 0));
      }
    }
    global[n] || u(global, o[n]),
      (e.exports = p(c(o))),
      process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH &&
        !o.__patched &&
        ((e.exports = p(o)), (o.__patched = !0));
  },
  function (e, t, r) {
    const n = r(52),
      { MAX_LENGTH: i, MAX_SAFE_INTEGER: o } = r(51),
      { re: s, t: a } = r(37),
      c = r(74),
      { compareIdentifiers: l } = r(126);
    class u {
      constructor(e, t) {
        if (((t = c(t)), e instanceof u)) {
          if (
            e.loose === !!t.loose &&
            e.includePrerelease === !!t.includePrerelease
          )
            return e;
          e = e.version;
        } else if ("string" != typeof e)
          throw new TypeError(
            `Invalid version. Must be a string. Got type "${typeof e}".`
          );
        if (e.length > i)
          throw new TypeError(`version is longer than ${i} characters`);
        n("SemVer", e, t),
          (this.options = t),
          (this.loose = !!t.loose),
          (this.includePrerelease = !!t.includePrerelease);
        const r = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
        if (!r) throw new TypeError("Invalid Version: " + e);
        if (
          ((this.raw = e),
          (this.major = +r[1]),
          (this.minor = +r[2]),
          (this.patch = +r[3]),
          this.major > o || this.major < 0)
        )
          throw new TypeError("Invalid major version");
        if (this.minor > o || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > o || this.patch < 0)
          throw new TypeError("Invalid patch version");
        r[4]
          ? (this.prerelease = r[4].split(".").map((e) => {
              if (/^[0-9]+$/.test(e)) {
                const t = +e;
                if (t >= 0 && t < o) return t;
              }
              return e;
            }))
          : (this.prerelease = []),
          (this.build = r[5] ? r[5].split(".") : []),
          this.format();
      }
      format() {
        return (
          (this.version = `${this.major}.${this.minor}.${this.patch}`),
          this.prerelease.length &&
            (this.version += "-" + this.prerelease.join(".")),
          this.version
        );
      }
      toString() {
        return this.version;
      }
      compare(e) {
        if (
          (n("SemVer.compare", this.version, this.options, e),
          !(e instanceof u))
        ) {
          if ("string" == typeof e && e === this.version) return 0;
          e = new u(e, this.options);
        }
        return e.version === this.version
          ? 0
          : this.compareMain(e) || this.comparePre(e);
      }
      compareMain(e) {
        return (
          e instanceof u || (e = new u(e, this.options)),
          l(this.major, e.major) ||
            l(this.minor, e.minor) ||
            l(this.patch, e.patch)
        );
      }
      comparePre(e) {
        if (
          (e instanceof u || (e = new u(e, this.options)),
          this.prerelease.length && !e.prerelease.length)
        )
          return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let t = 0;
        do {
          const r = this.prerelease[t],
            i = e.prerelease[t];
          if ((n("prerelease compare", t, r, i), void 0 === r && void 0 === i))
            return 0;
          if (void 0 === i) return 1;
          if (void 0 === r) return -1;
          if (r !== i) return l(r, i);
        } while (++t);
      }
      compareBuild(e) {
        e instanceof u || (e = new u(e, this.options));
        let t = 0;
        do {
          const r = this.build[t],
            i = e.build[t];
          if ((n("prerelease compare", t, r, i), void 0 === r && void 0 === i))
            return 0;
          if (void 0 === i) return 1;
          if (void 0 === r) return -1;
          if (r !== i) return l(r, i);
        } while (++t);
      }
      inc(e, t, r) {
        switch (e) {
          case "premajor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              (this.minor = 0),
              this.major++,
              this.inc("pre", t, r);
            break;
          case "preminor":
            (this.prerelease.length = 0),
              (this.patch = 0),
              this.minor++,
              this.inc("pre", t, r);
            break;
          case "prepatch":
            (this.prerelease.length = 0),
              this.inc("patch", t, r),
              this.inc("pre", t, r);
            break;
          case "prerelease":
            0 === this.prerelease.length && this.inc("patch", t, r),
              this.inc("pre", t, r);
            break;
          case "major":
            (0 === this.minor &&
              0 === this.patch &&
              0 !== this.prerelease.length) ||
              this.major++,
              (this.minor = 0),
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "minor":
            (0 === this.patch && 0 !== this.prerelease.length) || this.minor++,
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case "patch":
            0 === this.prerelease.length && this.patch++,
              (this.prerelease = []);
            break;
          case "pre": {
            const e = Number(r) ? 1 : 0;
            if (!t && !1 === r)
              throw new Error(
                "invalid increment argument: identifier is empty"
              );
            if (0 === this.prerelease.length) this.prerelease = [e];
            else {
              let n = this.prerelease.length;
              for (; --n >= 0; )
                "number" == typeof this.prerelease[n] &&
                  (this.prerelease[n]++, (n = -2));
              if (-1 === n) {
                if (t === this.prerelease.join(".") && !1 === r)
                  throw new Error(
                    "invalid increment argument: identifier already exists"
                  );
                this.prerelease.push(e);
              }
            }
            if (t) {
              let n = [t, e];
              !1 === r && (n = [t]),
                0 === l(this.prerelease[0], t)
                  ? isNaN(this.prerelease[1]) && (this.prerelease = n)
                  : (this.prerelease = n);
            }
            break;
          }
          default:
            throw new Error("invalid increment argument: " + e);
        }
        return this.format(), (this.raw = this.version), this;
      }
    }
    e.exports = u;
  },
  function (e, t, r) {
    "use strict";
    (t.fromCallback = function (e) {
      return Object.defineProperty(
        function (...t) {
          if ("function" != typeof t[t.length - 1])
            return new Promise((r, n) => {
              e.call(this, ...t, (e, t) => (null != e ? n(e) : r(t)));
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
            const r = t[t.length - 1];
            if ("function" != typeof r) return e.apply(this, t);
            e.apply(this, t.slice(0, -1)).then((e) => r(null, e), r);
          },
          "name",
          { value: e.name }
        );
      });
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      (this.name = e || "default"),
        (this.streamInfo = {}),
        (this.generatedError = null),
        (this.extraStreamInfo = {}),
        (this.isPaused = !0),
        (this.isFinished = !1),
        (this.isLocked = !1),
        (this._listeners = { data: [], end: [], error: [] }),
        (this.previous = null);
    }
    (n.prototype = {
      push: function (e) {
        this.emit("data", e);
      },
      end: function () {
        if (this.isFinished) return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), (this.isFinished = !0);
        } catch (e) {
          this.emit("error", e);
        }
        return !0;
      },
      error: function (e) {
        return (
          !this.isFinished &&
          (this.isPaused
            ? (this.generatedError = e)
            : ((this.isFinished = !0),
              this.emit("error", e),
              this.previous && this.previous.error(e),
              this.cleanUp()),
          !0)
        );
      },
      on: function (e, t) {
        return this._listeners[e].push(t), this;
      },
      cleanUp: function () {
        (this.streamInfo = this.generatedError = this.extraStreamInfo = null),
          (this._listeners = []);
      },
      emit: function (e, t) {
        if (this._listeners[e])
          for (var r = 0; r < this._listeners[e].length; r++)
            this._listeners[e][r].call(this, t);
      },
      pipe: function (e) {
        return e.registerPrevious(this);
      },
      registerPrevious: function (e) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        (this.streamInfo = e.streamInfo),
          this.mergeStreamInfo(),
          (this.previous = e);
        var t = this;
        return (
          e.on("data", function (e) {
            t.processChunk(e);
          }),
          e.on("end", function () {
            t.end();
          }),
          e.on("error", function (e) {
            t.error(e);
          }),
          this
        );
      },
      pause: function () {
        return (
          !this.isPaused &&
          !this.isFinished &&
          ((this.isPaused = !0), this.previous && this.previous.pause(), !0)
        );
      },
      resume: function () {
        if (!this.isPaused || this.isFinished) return !1;
        this.isPaused = !1;
        var e = !1;
        return (
          this.generatedError && (this.error(this.generatedError), (e = !0)),
          this.previous && this.previous.resume(),
          !e
        );
      },
      flush: function () {},
      processChunk: function (e) {
        this.push(e);
      },
      withStreamInfo: function (e, t) {
        return (this.extraStreamInfo[e] = t), this.mergeStreamInfo(), this;
      },
      mergeStreamInfo: function () {
        for (var e in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) &&
            (this.streamInfo[e] = this.extraStreamInfo[e]);
      },
      lock: function () {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        (this.isLocked = !0), this.previous && this.previous.lock();
      },
      toString: function () {
        var e = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + e : e;
      },
    }),
      (e.exports = n);
  },
  function (e, t, r) {
    const n = r(5);
    e.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
  },
  function (e, t, r) {
    class n {
      constructor(e, t) {
        if (((t = o(t)), e instanceof n))
          return e.loose === !!t.loose &&
            e.includePrerelease === !!t.includePrerelease
            ? e
            : new n(e.raw, t);
        if (e instanceof s)
          return (this.raw = e.value), (this.set = [[e]]), this.format(), this;
        if (
          ((this.options = t),
          (this.loose = !!t.loose),
          (this.includePrerelease = !!t.includePrerelease),
          (this.raw = e),
          (this.set = e
            .split("||")
            .map((e) => this.parseRange(e.trim()))
            .filter((e) => e.length)),
          !this.set.length)
        )
          throw new TypeError("Invalid SemVer Range: " + e);
        if (this.set.length > 1) {
          const e = this.set[0];
          if (
            ((this.set = this.set.filter((e) => !g(e[0]))),
            0 === this.set.length)
          )
            this.set = [e];
          else if (this.set.length > 1)
            for (const e of this.set)
              if (1 === e.length && v(e[0])) {
                this.set = [e];
                break;
              }
        }
        this.format();
      }
      format() {
        return (
          (this.range = this.set
            .map((e) => e.join(" ").trim())
            .join("||")
            .trim()),
          this.range
        );
      }
      toString() {
        return this.range;
      }
      parseRange(e) {
        e = e.trim();
        const t =
            ((this.options.includePrerelease && p) |
              (this.options.loose && m)) +
            ":" +
            e,
          r = i.get(t);
        if (r) return r;
        const n = this.options.loose,
          o = n ? l[u.HYPHENRANGELOOSE] : l[u.HYPHENRANGE];
        (e = e.replace(o, T(this.options.includePrerelease))),
          a("hyphen replace", e),
          (e = e.replace(l[u.COMPARATORTRIM], h)),
          a("comparator trim", e);
        let c = (e = (e = (e = e.replace(l[u.TILDETRIM], f)).replace(
          l[u.CARETTRIM],
          d
        ))
          .split(/\s+/)
          .join(" "))
          .split(" ")
          .map((e) => w(e, this.options))
          .join(" ")
          .split(/\s+/)
          .map((e) => k(e, this.options));
        n &&
          (c = c.filter(
            (e) => (
              a("loose invalid filter", e, this.options),
              !!e.match(l[u.COMPARATORLOOSE])
            )
          )),
          a("range list", c);
        const v = new Map(),
          y = c.map((e) => new s(e, this.options));
        for (const e of y) {
          if (g(e)) return [e];
          v.set(e.value, e);
        }
        v.size > 1 && v.has("") && v.delete("");
        const b = [...v.values()];
        return i.set(t, b), b;
      }
      intersects(e, t) {
        if (!(e instanceof n)) throw new TypeError("a Range is required");
        return this.set.some(
          (r) =>
            y(r, t) &&
            e.set.some(
              (e) =>
                y(e, t) && r.every((r) => e.every((e) => r.intersects(e, t)))
            )
        );
      }
      test(e) {
        if (!e) return !1;
        if ("string" == typeof e)
          try {
            e = new c(e, this.options);
          } catch (e) {
            return !1;
          }
        for (let t = 0; t < this.set.length; t++)
          if (x(this.set[t], e, this.options)) return !0;
        return !1;
      }
    }
    e.exports = n;
    const i = new (r(85))({ max: 1e3 }),
      o = r(58),
      s = r(41),
      a = r(39),
      c = r(5),
      {
        re: l,
        t: u,
        comparatorTrimReplace: h,
        tildeTrimReplace: f,
        caretTrimReplace: d,
      } = r(32),
      { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: m } = r(38),
      g = (e) => "<0.0.0-0" === e.value,
      v = (e) => "" === e.value,
      y = (e, t) => {
        let r = !0;
        const n = e.slice();
        let i = n.pop();
        for (; r && n.length; )
          (r = n.every((e) => i.intersects(e, t))), (i = n.pop());
        return r;
      },
      w = (e, t) => (
        a("comp", e, t),
        (e = A(e, t)),
        a("caret", e),
        (e = E(e, t)),
        a("tildes", e),
        (e = O(e, t)),
        a("xrange", e),
        (e = I(e, t)),
        a("stars", e),
        e
      ),
      b = (e) => !e || "x" === e.toLowerCase() || "*" === e,
      E = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => _(e, t))
          .join(" "),
      _ = (e, t) => {
        const r = t.loose ? l[u.TILDELOOSE] : l[u.TILDE];
        return e.replace(r, (t, r, n, i, o) => {
          let s;
          return (
            a("tilde", e, t, r, n, i, o),
            b(r)
              ? (s = "")
              : b(n)
              ? (s = `>=${r}.0.0 <${+r + 1}.0.0-0`)
              : b(i)
              ? (s = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0`)
              : o
              ? (a("replaceTilde pr", o),
                (s = `>=${r}.${n}.${i}-${o} <${r}.${+n + 1}.0-0`))
              : (s = `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`),
            a("tilde return", s),
            s
          );
        });
      },
      A = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => S(e, t))
          .join(" "),
      S = (e, t) => {
        a("caret", e, t);
        const r = t.loose ? l[u.CARETLOOSE] : l[u.CARET],
          n = t.includePrerelease ? "-0" : "";
        return e.replace(r, (t, r, i, o, s) => {
          let c;
          return (
            a("caret", e, t, r, i, o, s),
            b(r)
              ? (c = "")
              : b(i)
              ? (c = `>=${r}.0.0${n} <${+r + 1}.0.0-0`)
              : b(o)
              ? (c =
                  "0" === r
                    ? `>=${r}.${i}.0${n} <${r}.${+i + 1}.0-0`
                    : `>=${r}.${i}.0${n} <${+r + 1}.0.0-0`)
              : s
              ? (a("replaceCaret pr", s),
                (c =
                  "0" === r
                    ? "0" === i
                      ? `>=${r}.${i}.${o}-${s} <${r}.${i}.${+o + 1}-0`
                      : `>=${r}.${i}.${o}-${s} <${r}.${+i + 1}.0-0`
                    : `>=${r}.${i}.${o}-${s} <${+r + 1}.0.0-0`))
              : (a("no pr"),
                (c =
                  "0" === r
                    ? "0" === i
                      ? `>=${r}.${i}.${o}${n} <${r}.${i}.${+o + 1}-0`
                      : `>=${r}.${i}.${o}${n} <${r}.${+i + 1}.0-0`
                    : `>=${r}.${i}.${o} <${+r + 1}.0.0-0`)),
            a("caret return", c),
            c
          );
        });
      },
      O = (e, t) => (
        a("replaceXRanges", e, t),
        e
          .split(/\s+/)
          .map((e) => C(e, t))
          .join(" ")
      ),
      C = (e, t) => {
        e = e.trim();
        const r = t.loose ? l[u.XRANGELOOSE] : l[u.XRANGE];
        return e.replace(r, (r, n, i, o, s, c) => {
          a("xRange", e, r, n, i, o, s, c);
          const l = b(i),
            u = l || b(o),
            h = u || b(s),
            f = h;
          return (
            "=" === n && f && (n = ""),
            (c = t.includePrerelease ? "-0" : ""),
            l
              ? (r = ">" === n || "<" === n ? "<0.0.0-0" : "*")
              : n && f
              ? (u && (o = 0),
                (s = 0),
                ">" === n
                  ? ((n = ">="),
                    u
                      ? ((i = +i + 1), (o = 0), (s = 0))
                      : ((o = +o + 1), (s = 0)))
                  : "<=" === n && ((n = "<"), u ? (i = +i + 1) : (o = +o + 1)),
                "<" === n && (c = "-0"),
                (r = `${n + i}.${o}.${s}${c}`))
              : u
              ? (r = `>=${i}.0.0${c} <${+i + 1}.0.0-0`)
              : h && (r = `>=${i}.${o}.0${c} <${i}.${+o + 1}.0-0`),
            a("xRange return", r),
            r
          );
        });
      },
      I = (e, t) => (a("replaceStars", e, t), e.trim().replace(l[u.STAR], "")),
      k = (e, t) => (
        a("replaceGTE0", e, t),
        e.trim().replace(l[t.includePrerelease ? u.GTE0PRE : u.GTE0], "")
      ),
      T = (e) => (t, r, n, i, o, s, a, c, l, u, h, f, d) =>
        `${(r = b(n)
          ? ""
          : b(i)
          ? `>=${n}.0.0${e ? "-0" : ""}`
          : b(o)
          ? `>=${n}.${i}.0${e ? "-0" : ""}`
          : s
          ? ">=" + r
          : `>=${r}${e ? "-0" : ""}`)} ${(c = b(l)
          ? ""
          : b(u)
          ? `<${+l + 1}.0.0-0`
          : b(h)
          ? `<${l}.${+u + 1}.0-0`
          : f
          ? `<=${l}.${u}.${h}-${f}`
          : e
          ? `<${l}.${u}.${+h + 1}-0`
          : "<=" + c)}`.trim(),
      x = (e, t, r) => {
        for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
        if (t.prerelease.length && !r.includePrerelease) {
          for (let r = 0; r < e.length; r++)
            if (
              (a(e[r].semver),
              e[r].semver !== s.ANY && e[r].semver.prerelease.length > 0)
            ) {
              const n = e[r].semver;
              if (
                n.major === t.major &&
                n.minor === t.minor &&
                n.patch === t.patch
              )
                return !0;
            }
          return !1;
        }
        return !0;
      };
  },
  function (e, t, r) {
    const n = r(7);
    e.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
  },
  function (e, t, r) {
    class n {
      constructor(e, t) {
        if (((t = o(t)), e instanceof n))
          return e.loose === !!t.loose &&
            e.includePrerelease === !!t.includePrerelease
            ? e
            : new n(e.raw, t);
        if (e instanceof s)
          return (this.raw = e.value), (this.set = [[e]]), this.format(), this;
        if (
          ((this.options = t),
          (this.loose = !!t.loose),
          (this.includePrerelease = !!t.includePrerelease),
          (this.raw = e),
          (this.set = e
            .split("||")
            .map((e) => this.parseRange(e.trim()))
            .filter((e) => e.length)),
          !this.set.length)
        )
          throw new TypeError("Invalid SemVer Range: " + e);
        if (this.set.length > 1) {
          const e = this.set[0];
          if (
            ((this.set = this.set.filter((e) => !g(e[0]))),
            0 === this.set.length)
          )
            this.set = [e];
          else if (this.set.length > 1)
            for (const e of this.set)
              if (1 === e.length && v(e[0])) {
                this.set = [e];
                break;
              }
        }
        this.format();
      }
      format() {
        return (
          (this.range = this.set
            .map((e) => e.join(" ").trim())
            .join("||")
            .trim()),
          this.range
        );
      }
      toString() {
        return this.range;
      }
      parseRange(e) {
        e = e.trim();
        const t =
            ((this.options.includePrerelease && p) |
              (this.options.loose && m)) +
            ":" +
            e,
          r = i.get(t);
        if (r) return r;
        const n = this.options.loose,
          o = n ? l[u.HYPHENRANGELOOSE] : l[u.HYPHENRANGE];
        (e = e.replace(o, T(this.options.includePrerelease))),
          a("hyphen replace", e),
          (e = e.replace(l[u.COMPARATORTRIM], h)),
          a("comparator trim", e);
        let c = (e = (e = (e = e.replace(l[u.TILDETRIM], f)).replace(
          l[u.CARETTRIM],
          d
        ))
          .split(/\s+/)
          .join(" "))
          .split(" ")
          .map((e) => w(e, this.options))
          .join(" ")
          .split(/\s+/)
          .map((e) => k(e, this.options));
        n &&
          (c = c.filter(
            (e) => (
              a("loose invalid filter", e, this.options),
              !!e.match(l[u.COMPARATORLOOSE])
            )
          )),
          a("range list", c);
        const v = new Map(),
          y = c.map((e) => new s(e, this.options));
        for (const e of y) {
          if (g(e)) return [e];
          v.set(e.value, e);
        }
        v.size > 1 && v.has("") && v.delete("");
        const b = [...v.values()];
        return i.set(t, b), b;
      }
      intersects(e, t) {
        if (!(e instanceof n)) throw new TypeError("a Range is required");
        return this.set.some(
          (r) =>
            y(r, t) &&
            e.set.some(
              (e) =>
                y(e, t) && r.every((r) => e.every((e) => r.intersects(e, t)))
            )
        );
      }
      test(e) {
        if (!e) return !1;
        if ("string" == typeof e)
          try {
            e = new c(e, this.options);
          } catch (e) {
            return !1;
          }
        for (let t = 0; t < this.set.length; t++)
          if (x(this.set[t], e, this.options)) return !0;
        return !1;
      }
    }
    e.exports = n;
    const i = new (r(85))({ max: 1e3 }),
      o = r(74),
      s = r(54),
      a = r(52),
      c = r(7),
      {
        re: l,
        t: u,
        comparatorTrimReplace: h,
        tildeTrimReplace: f,
        caretTrimReplace: d,
      } = r(37),
      { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: m } = r(51),
      g = (e) => "<0.0.0-0" === e.value,
      v = (e) => "" === e.value,
      y = (e, t) => {
        let r = !0;
        const n = e.slice();
        let i = n.pop();
        for (; r && n.length; )
          (r = n.every((e) => i.intersects(e, t))), (i = n.pop());
        return r;
      },
      w = (e, t) => (
        a("comp", e, t),
        (e = A(e, t)),
        a("caret", e),
        (e = E(e, t)),
        a("tildes", e),
        (e = O(e, t)),
        a("xrange", e),
        (e = I(e, t)),
        a("stars", e),
        e
      ),
      b = (e) => !e || "x" === e.toLowerCase() || "*" === e,
      E = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => _(e, t))
          .join(" "),
      _ = (e, t) => {
        const r = t.loose ? l[u.TILDELOOSE] : l[u.TILDE];
        return e.replace(r, (t, r, n, i, o) => {
          let s;
          return (
            a("tilde", e, t, r, n, i, o),
            b(r)
              ? (s = "")
              : b(n)
              ? (s = `>=${r}.0.0 <${+r + 1}.0.0-0`)
              : b(i)
              ? (s = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0`)
              : o
              ? (a("replaceTilde pr", o),
                (s = `>=${r}.${n}.${i}-${o} <${r}.${+n + 1}.0-0`))
              : (s = `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`),
            a("tilde return", s),
            s
          );
        });
      },
      A = (e, t) =>
        e
          .trim()
          .split(/\s+/)
          .map((e) => S(e, t))
          .join(" "),
      S = (e, t) => {
        a("caret", e, t);
        const r = t.loose ? l[u.CARETLOOSE] : l[u.CARET],
          n = t.includePrerelease ? "-0" : "";
        return e.replace(r, (t, r, i, o, s) => {
          let c;
          return (
            a("caret", e, t, r, i, o, s),
            b(r)
              ? (c = "")
              : b(i)
              ? (c = `>=${r}.0.0${n} <${+r + 1}.0.0-0`)
              : b(o)
              ? (c =
                  "0" === r
                    ? `>=${r}.${i}.0${n} <${r}.${+i + 1}.0-0`
                    : `>=${r}.${i}.0${n} <${+r + 1}.0.0-0`)
              : s
              ? (a("replaceCaret pr", s),
                (c =
                  "0" === r
                    ? "0" === i
                      ? `>=${r}.${i}.${o}-${s} <${r}.${i}.${+o + 1}-0`
                      : `>=${r}.${i}.${o}-${s} <${r}.${+i + 1}.0-0`
                    : `>=${r}.${i}.${o}-${s} <${+r + 1}.0.0-0`))
              : (a("no pr"),
                (c =
                  "0" === r
                    ? "0" === i
                      ? `>=${r}.${i}.${o}${n} <${r}.${i}.${+o + 1}-0`
                      : `>=${r}.${i}.${o}${n} <${r}.${+i + 1}.0-0`
                    : `>=${r}.${i}.${o} <${+r + 1}.0.0-0`)),
            a("caret return", c),
            c
          );
        });
      },
      O = (e, t) => (
        a("replaceXRanges", e, t),
        e
          .split(/\s+/)
          .map((e) => C(e, t))
          .join(" ")
      ),
      C = (e, t) => {
        e = e.trim();
        const r = t.loose ? l[u.XRANGELOOSE] : l[u.XRANGE];
        return e.replace(r, (r, n, i, o, s, c) => {
          a("xRange", e, r, n, i, o, s, c);
          const l = b(i),
            u = l || b(o),
            h = u || b(s),
            f = h;
          return (
            "=" === n && f && (n = ""),
            (c = t.includePrerelease ? "-0" : ""),
            l
              ? (r = ">" === n || "<" === n ? "<0.0.0-0" : "*")
              : n && f
              ? (u && (o = 0),
                (s = 0),
                ">" === n
                  ? ((n = ">="),
                    u
                      ? ((i = +i + 1), (o = 0), (s = 0))
                      : ((o = +o + 1), (s = 0)))
                  : "<=" === n && ((n = "<"), u ? (i = +i + 1) : (o = +o + 1)),
                "<" === n && (c = "-0"),
                (r = `${n + i}.${o}.${s}${c}`))
              : u
              ? (r = `>=${i}.0.0${c} <${+i + 1}.0.0-0`)
              : h && (r = `>=${i}.${o}.0${c} <${i}.${+o + 1}.0-0`),
            a("xRange return", r),
            r
          );
        });
      },
      I = (e, t) => (a("replaceStars", e, t), e.trim().replace(l[u.STAR], "")),
      k = (e, t) => (
        a("replaceGTE0", e, t),
        e.trim().replace(l[t.includePrerelease ? u.GTE0PRE : u.GTE0], "")
      ),
      T = (e) => (t, r, n, i, o, s, a, c, l, u, h, f, d) =>
        `${(r = b(n)
          ? ""
          : b(i)
          ? `>=${n}.0.0${e ? "-0" : ""}`
          : b(o)
          ? `>=${n}.${i}.0${e ? "-0" : ""}`
          : s
          ? ">=" + r
          : `>=${r}${e ? "-0" : ""}`)} ${(c = b(l)
          ? ""
          : b(u)
          ? `<${+l + 1}.0.0-0`
          : b(h)
          ? `<${l}.${+u + 1}.0-0`
          : f
          ? `<=${l}.${u}.${h}-${f}`
          : e
          ? `<${l}.${u}.${+h + 1}-0`
          : "<=" + c)}`.trim(),
      x = (e, t, r) => {
        for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
        if (t.prerelease.length && !r.includePrerelease) {
          for (let r = 0; r < e.length; r++)
            if (
              (a(e[r].semver),
              e[r].semver !== s.ANY && e[r].semver.prerelease.length > 0)
            ) {
              const n = e[r].semver;
              if (
                n.major === t.major &&
                n.minor === t.minor &&
                n.patch === t.patch
              )
                return !0;
            }
          return !1;
        }
        return !0;
      };
  },
  function (e, t) {
    e.exports = require("util");
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromPromise,
      { makeDir: i, makeDirSync: o } = r(244),
      s = n(i);
    e.exports = {
      mkdirs: s,
      mkdirsSync: o,
      mkdirp: s,
      mkdirpSync: o,
      ensureDir: s,
      ensureDirSync: o,
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.resolveFiles =
        t.getFileList =
        t.parseUpdateInfo =
        t.findFile =
        t.Provider =
          void 0);
    const n = r(3),
      i = r(73),
      o = r(21);
    function s(e) {
      const t = e.files;
      if (null != t && t.length > 0) return t;
      if (null != e.path)
        return [{ url: e.path, sha2: e.sha2, sha512: e.sha512 }];
      throw n.newError(
        "No files provided: " + n.safeStringifyJson(e),
        "ERR_UPDATER_NO_FILES_PROVIDED"
      );
    }
    (t.Provider = class {
      constructor(e) {
        (this.runtimeOptions = e),
          (this.requestHeaders = null),
          (this.executor = e.executor);
      }
      get isUseMultipleRangeRequest() {
        return !1 !== this.runtimeOptions.isUseMultipleRangeRequest;
      }
      getChannelFilePrefix() {
        if ("linux" === this.runtimeOptions.platform) {
          const e = process.env.TEST_UPDATER_ARCH || process.arch;
          return "-linux" + ("x64" === e ? "" : "-" + e);
        }
        return "darwin" === this.runtimeOptions.platform ? "-mac" : "";
      }
      getDefaultChannelName() {
        return this.getCustomChannelName("latest");
      }
      getCustomChannelName(e) {
        return `${e}${this.getChannelFilePrefix()}`;
      }
      get fileExtraDownloadHeaders() {
        return null;
      }
      setRequestHeaders(e) {
        this.requestHeaders = e;
      }
      httpRequest(e, t, r) {
        return this.executor.request(this.createRequestOptions(e, t), r);
      }
      createRequestOptions(e, t) {
        const r = {};
        return (
          null == this.requestHeaders
            ? null != t && (r.headers = t)
            : (r.headers =
                null == t
                  ? this.requestHeaders
                  : { ...this.requestHeaders, ...t }),
          n.configureRequestUrl(e, r),
          r
        );
      }
    }),
      (t.findFile = function (e, t, r) {
        if (0 === e.length)
          throw n.newError(
            "No files provided",
            "ERR_UPDATER_NO_FILES_PROVIDED"
          );
        const i = e.find((e) => e.url.pathname.toLowerCase().endsWith("." + t));
        return null != i
          ? i
          : null == r
          ? e[0]
          : e.find(
              (e) =>
                !r.some((t) => e.url.pathname.toLowerCase().endsWith("." + t))
            );
      }),
      (t.parseUpdateInfo = function (e, t, r) {
        if (null == e)
          throw n.newError(
            `Cannot parse update info from ${t} in the latest release artifacts (${r}): rawData: null`,
            "ERR_UPDATER_INVALID_UPDATE_INFO"
          );
        let o;
        try {
          o = i.load(e);
        } catch (i) {
          throw n.newError(
            `Cannot parse update info from ${t} in the latest release artifacts (${r}): ${
              i.stack || i.message
            }, rawData: ${e}`,
            "ERR_UPDATER_INVALID_UPDATE_INFO"
          );
        }
        return o;
      }),
      (t.getFileList = s),
      (t.resolveFiles = function (e, t, r = (e) => e) {
        const i = s(e).map((e) => {
            if (null == e.sha2 && null == e.sha512)
              throw n.newError(
                "Update info doesn't contain nor sha256 neither sha512 checksum: " +
                  n.safeStringifyJson(e),
                "ERR_UPDATER_NO_CHECKSUM"
              );
            return { url: o.newUrlFromBase(r(e.url), t), info: e };
          }),
          a = e.packages,
          c = null == a ? null : a[process.arch] || a.ia32;
        return (
          null != c &&
            (i[0].packageInfo = {
              ...c,
              path: o.newUrlFromBase(r(c.path), t).href,
            }),
          i
        );
      });
  },
  function (e, t) {
    e.exports = require("url");
  },
  function (e, t, r) {
    "use strict";
    if (
      ((t.base64 = !0),
      (t.array = !0),
      (t.string = !0),
      (t.arraybuffer =
        "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array),
      (t.nodebuffer = "undefined" != typeof Buffer),
      (t.uint8array = "undefined" != typeof Uint8Array),
      "undefined" == typeof ArrayBuffer)
    )
      t.blob = !1;
    else {
      var n = new ArrayBuffer(0);
      try {
        t.blob = 0 === new Blob([n], { type: "application/zip" }).size;
      } catch (e) {
        try {
          var i = new (self.BlobBuilder ||
            self.WebKitBlobBuilder ||
            self.MozBlobBuilder ||
            self.MSBlobBuilder)();
          i.append(n), (t.blob = 0 === i.getBlob("application/zip").size);
        } catch (e) {
          t.blob = !1;
        }
      }
    }
    try {
      t.nodestream = !!r(93).Readable;
    } catch (e) {
      t.nodestream = !1;
    }
  },
  function (e, t) {
    e.exports = require("stream");
  },
  function (e, t, r) {
    "use strict";
    var n =
      "undefined" != typeof Uint8Array &&
      "undefined" != typeof Uint16Array &&
      "undefined" != typeof Int32Array;
    function i(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    (t.assign = function (e) {
      for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
        var r = t.shift();
        if (r) {
          if ("object" != typeof r)
            throw new TypeError(r + "must be non-object");
          for (var n in r) i(r, n) && (e[n] = r[n]);
        }
      }
      return e;
    }),
      (t.shrinkBuf = function (e, t) {
        return e.length === t
          ? e
          : e.subarray
          ? e.subarray(0, t)
          : ((e.length = t), e);
      });
    var o = {
        arraySet: function (e, t, r, n, i) {
          if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
          else for (var o = 0; o < n; o++) e[i + o] = t[r + o];
        },
        flattenChunks: function (e) {
          var t, r, n, i, o, s;
          for (n = 0, t = 0, r = e.length; t < r; t++) n += e[t].length;
          for (s = new Uint8Array(n), i = 0, t = 0, r = e.length; t < r; t++)
            (o = e[t]), s.set(o, i), (i += o.length);
          return s;
        },
      },
      s = {
        arraySet: function (e, t, r, n, i) {
          for (var o = 0; o < n; o++) e[i + o] = t[r + o];
        },
        flattenChunks: function (e) {
          return [].concat.apply([], e);
        },
      };
    (t.setTyped = function (e) {
      e
        ? ((t.Buf8 = Uint8Array),
          (t.Buf16 = Uint16Array),
          (t.Buf32 = Int32Array),
          t.assign(t, o))
        : ((t.Buf8 = Array),
          (t.Buf16 = Array),
          (t.Buf32 = Array),
          t.assign(t, s));
    }),
      t.setTyped(n);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.blockmapFiles =
        t.getChannelFilename =
        t.newUrlFromBase =
        t.newBaseUrl =
          void 0);
    const n = r(17),
      i = r(294);
    function o(e, t, r = !1) {
      const i = new n.URL(e, t),
        o = t.search;
      return (
        null != o && 0 !== o.length
          ? (i.search = o)
          : r && (i.search = "noCache=" + Date.now().toString(32)),
        i
      );
    }
    (t.newBaseUrl = function (e) {
      const t = new n.URL(e);
      return t.pathname.endsWith("/") || (t.pathname += "/"), t;
    }),
      (t.newUrlFromBase = o),
      (t.getChannelFilename = function (e) {
        return e + ".yml";
      }),
      (t.blockmapFiles = function (e, t, r) {
        const n = o(e.pathname + ".blockmap", e);
        return [
          o(e.pathname.replace(new RegExp(i(r), "g"), t) + ".blockmap", e),
          n,
        ];
      });
  },
  function (e, t) {
    e.exports = require("os");
  },
  function (e, t, r) {
    "use strict";
    e.exports = {
      ...r(29),
      ...r(70),
      ...r(247),
      ...r(249),
      ...r(255),
      ...r(15),
      ...r(260),
      ...r(72),
      ...r(24),
      ...r(50),
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromPromise,
      i = r(29);
    e.exports = {
      pathExists: n(function (e) {
        return i
          .access(e)
          .then(() => !0)
          .catch(() => !1);
      }),
      pathExistsSync: i.existsSync,
    };
  },
  function (e, t, r) {
    const n = r(5);
    e.exports = (e, t, r = !1) => {
      if (e instanceof n) return e;
      try {
        return new n(e, t);
      } catch (e) {
        if (!r) return null;
        throw e;
      }
    };
  },
  function (e, t, r) {
    try {
      var n = r(14);
      if ("function" != typeof n.inherits) throw "";
      e.exports = n.inherits;
    } catch (t) {
      e.exports = r(176);
    }
  },
  function (e, t, r) {
    "use strict";
    var n = r(44),
      i =
        Object.keys ||
        function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return t;
        };
    e.exports = h;
    var o = Object.create(r(35));
    o.inherits = r(26);
    var s = r(94),
      a = r(98);
    o.inherits(h, s);
    for (var c = i(a.prototype), l = 0; l < c.length; l++) {
      var u = c[l];
      h.prototype[u] || (h.prototype[u] = a.prototype[u]);
    }
    function h(e) {
      if (!(this instanceof h)) return new h(e);
      s.call(this, e),
        a.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", f);
    }
    function f() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this);
    }
    function d(e) {
      e.end();
    }
    Object.defineProperty(h.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      },
    }),
      Object.defineProperty(h.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          );
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        },
      }),
      (h.prototype._destroy = function (e, t) {
        this.push(null), this.end(), n.nextTick(t, e);
      });
  },
  function (e, t, r) {
    "use strict";
    var n;
    try {
      n = r(4);
    } catch (e) {
      n = null;
    }
    function i() {
      return o("app");
    }
    function o(e) {
      return n ? (n[e] ? n[e] : n.remote ? n.remote[e] : null) : null;
    }
    e.exports = {
      getElectronApp: i,
      getElectronAppName: function () {
        var e = i();
        return e ? ("name" in e ? e.name : e.getName()) : null;
      },
      getRemote: function () {
        if (n && n.remote) return n.remote;
        return null;
      },
      getUserData: function () {
        var e = i();
        return e ? e.getPath("userData") : null;
      },
      isDev: function () {
        var e = i();
        return !!e && (!e.isPackaged || "1" === process.env.ELECTRON_IS_DEV);
      },
      onIpcMain: function (e, t) {
        if (!n || !n.ipcMain) return;
        n.ipcMain.on(e, t);
      },
      onIpcRenderer: function (e, t) {
        if (!n || !n.ipcRenderer) return;
        n.ipcRenderer.on(e, t);
      },
      sendIpcToMain: function (e, t) {
        if (!n || !n.ipcRenderer) return;
        n.ipcRenderer.send(e, t);
      },
      sendIpcToRenderer: function (e, t) {
        if (!n || !n.BrowserWindow) return;
        n.BrowserWindow.getAllWindows().forEach(function (r) {
          r.webContents.send(e, t);
        });
      },
      showErrorBox: function (e, t) {
        var r = o("dialog");
        if (!r) return;
        r.showErrorBox(e, t);
      },
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromCallback,
      i = r(6),
      o = [
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
      ].filter((e) => "function" == typeof i[e]);
    Object.assign(t, i),
      o.forEach((e) => {
        t[e] = n(i[e]);
      }),
      (t.exists = function (e, t) {
        return "function" == typeof t
          ? i.exists(e, t)
          : new Promise((t) => i.exists(e, t));
      }),
      (t.read = function (e, t, r, n, o, s) {
        return "function" == typeof s
          ? i.read(e, t, r, n, o, s)
          : new Promise((s, a) => {
              i.read(e, t, r, n, o, (e, t, r) => {
                if (e) return a(e);
                s({ bytesRead: t, buffer: r });
              });
            });
      }),
      (t.write = function (e, t, ...r) {
        return "function" == typeof r[r.length - 1]
          ? i.write(e, t, ...r)
          : new Promise((n, o) => {
              i.write(e, t, ...r, (e, t, r) => {
                if (e) return o(e);
                n({ bytesWritten: t, buffer: r });
              });
            });
      }),
      "function" == typeof i.writev &&
        (t.writev = function (e, t, ...r) {
          return "function" == typeof r[r.length - 1]
            ? i.writev(e, t, ...r)
            : new Promise((n, o) => {
                i.writev(e, t, ...r, (e, t, r) => {
                  if (e) return o(e);
                  n({ bytesWritten: t, buffers: r });
                });
              });
        }),
      "function" == typeof i.realpath.native
        ? (t.realpath.native = n(i.realpath.native))
        : process.emitWarning(
            "fs.realpath.native is not a function. Is fs being monkey-patched?",
            "Warning",
            "fs-extra-WARN0003"
          );
  },
  function (e, t, r) {
    "use strict";
    const n = r(29),
      i = r(0),
      o = r(14);
    function s(e, t, r) {
      const i = r.dereference
        ? (e) => n.stat(e, { bigint: !0 })
        : (e) => n.lstat(e, { bigint: !0 });
      return Promise.all([
        i(e),
        i(t).catch((e) => {
          if ("ENOENT" === e.code) return null;
          throw e;
        }),
      ]).then(([e, t]) => ({ srcStat: e, destStat: t }));
    }
    function a(e, t) {
      return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
    }
    function c(e, t) {
      const r = i
          .resolve(e)
          .split(i.sep)
          .filter((e) => e),
        n = i
          .resolve(t)
          .split(i.sep)
          .filter((e) => e);
      return r.reduce((e, t, r) => e && n[r] === t, !0);
    }
    function l(e, t, r) {
      return `Cannot ${r} '${e}' to a subdirectory of itself, '${t}'.`;
    }
    e.exports = {
      checkPaths: function (e, t, r, n, u) {
        o.callbackify(s)(e, t, n, (n, o) => {
          if (n) return u(n);
          const { srcStat: s, destStat: h } = o;
          if (h) {
            if (a(s, h)) {
              const n = i.basename(e),
                o = i.basename(t);
              return "move" === r &&
                n !== o &&
                n.toLowerCase() === o.toLowerCase()
                ? u(null, { srcStat: s, destStat: h, isChangingCase: !0 })
                : u(new Error("Source and destination must not be the same."));
            }
            if (s.isDirectory() && !h.isDirectory())
              return u(
                new Error(
                  `Cannot overwrite non-directory '${t}' with directory '${e}'.`
                )
              );
            if (!s.isDirectory() && h.isDirectory())
              return u(
                new Error(
                  `Cannot overwrite directory '${t}' with non-directory '${e}'.`
                )
              );
          }
          return s.isDirectory() && c(e, t)
            ? u(new Error(l(e, t, r)))
            : u(null, { srcStat: s, destStat: h });
        });
      },
      checkPathsSync: function (e, t, r, o) {
        const { srcStat: s, destStat: u } = (function (e, t, r) {
          let i;
          const o = r.dereference
              ? (e) => n.statSync(e, { bigint: !0 })
              : (e) => n.lstatSync(e, { bigint: !0 }),
            s = o(e);
          try {
            i = o(t);
          } catch (e) {
            if ("ENOENT" === e.code) return { srcStat: s, destStat: null };
            throw e;
          }
          return { srcStat: s, destStat: i };
        })(e, t, o);
        if (u) {
          if (a(s, u)) {
            const n = i.basename(e),
              o = i.basename(t);
            if ("move" === r && n !== o && n.toLowerCase() === o.toLowerCase())
              return { srcStat: s, destStat: u, isChangingCase: !0 };
            throw new Error("Source and destination must not be the same.");
          }
          if (s.isDirectory() && !u.isDirectory())
            throw new Error(
              `Cannot overwrite non-directory '${t}' with directory '${e}'.`
            );
          if (!s.isDirectory() && u.isDirectory())
            throw new Error(
              `Cannot overwrite directory '${t}' with non-directory '${e}'.`
            );
        }
        if (s.isDirectory() && c(e, t)) throw new Error(l(e, t, r));
        return { srcStat: s, destStat: u };
      },
      checkParentPaths: function e(t, r, o, s, c) {
        const u = i.resolve(i.dirname(t)),
          h = i.resolve(i.dirname(o));
        if (h === u || h === i.parse(h).root) return c();
        n.stat(h, { bigint: !0 }, (n, i) =>
          n
            ? "ENOENT" === n.code
              ? c()
              : c(n)
            : a(r, i)
            ? c(new Error(l(t, o, s)))
            : e(t, r, h, s, c)
        );
      },
      checkParentPathsSync: function e(t, r, o, s) {
        const c = i.resolve(i.dirname(t)),
          u = i.resolve(i.dirname(o));
        if (u === c || u === i.parse(u).root) return;
        let h;
        try {
          h = n.statSync(u, { bigint: !0 });
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw e;
        }
        if (a(r, h)) throw new Error(l(t, o, s));
        return e(t, r, u, s);
      },
      isSrcSubdir: c,
      areIdentical: a,
    };
  },
  function (e, t, r) {
    const n = r(7);
    e.exports = (e, t, r = !1) => {
      if (e instanceof n) return e;
      try {
        return new n(e, t);
      } catch (e) {
        if (!r) return null;
        throw e;
      }
    };
  },
  function (e, t, r) {
    const { MAX_SAFE_COMPONENT_LENGTH: n } = r(38),
      i = r(39),
      o = ((t = e.exports = {}).re = []),
      s = (t.src = []),
      a = (t.t = {});
    let c = 0;
    const l = (e, t, r) => {
      const n = c++;
      i(e, n, t),
        (a[e] = n),
        (s[n] = t),
        (o[n] = new RegExp(t, r ? "g" : void 0));
    };
    l("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
      l("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
      l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
      l(
        "MAINVERSION",
        `(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${
          s[a.NUMERICIDENTIFIER]
        })`
      ),
      l(
        "MAINVERSIONLOOSE",
        `(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${
          s[a.NUMERICIDENTIFIERLOOSE]
        })\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`
      ),
      l(
        "PRERELEASEIDENTIFIER",
        `(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`
      ),
      l(
        "PRERELEASEIDENTIFIERLOOSE",
        `(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`
      ),
      l(
        "PRERELEASE",
        `(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${
          s[a.PRERELEASEIDENTIFIER]
        })*))`
      ),
      l(
        "PRERELEASELOOSE",
        `(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
          s[a.PRERELEASEIDENTIFIERLOOSE]
        })*))`
      ),
      l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
      l(
        "BUILD",
        `(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`
      ),
      l("FULLPLAIN", `v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`),
      l("FULL", `^${s[a.FULLPLAIN]}$`),
      l(
        "LOOSEPLAIN",
        `[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`
      ),
      l("LOOSE", `^${s[a.LOOSEPLAIN]}$`),
      l("GTLT", "((?:<|>)?=?)"),
      l("XRANGEIDENTIFIERLOOSE", s[a.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
      l("XRANGEIDENTIFIER", s[a.NUMERICIDENTIFIER] + "|x|X|\\*"),
      l(
        "XRANGEPLAIN",
        `[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${
          s[a.XRANGEIDENTIFIER]
        })(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${
          s[a.BUILD]
        }?)?)?`
      ),
      l(
        "XRANGEPLAINLOOSE",
        `[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
          s[a.XRANGEIDENTIFIERLOOSE]
        })(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${
          s[a.BUILD]
        }?)?)?`
      ),
      l("XRANGE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`),
      l("XRANGELOOSE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`),
      l(
        "COERCE",
        `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`
      ),
      l("COERCERTL", s[a.COERCE], !0),
      l("LONETILDE", "(?:~>?)"),
      l("TILDETRIM", `(\\s*)${s[a.LONETILDE]}\\s+`, !0),
      (t.tildeTrimReplace = "$1~"),
      l("TILDE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`),
      l("TILDELOOSE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`),
      l("LONECARET", "(?:\\^)"),
      l("CARETTRIM", `(\\s*)${s[a.LONECARET]}\\s+`, !0),
      (t.caretTrimReplace = "$1^"),
      l("CARET", `^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`),
      l("CARETLOOSE", `^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`),
      l("COMPARATORLOOSE", `^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`),
      l("COMPARATOR", `^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`),
      l(
        "COMPARATORTRIM",
        `(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`,
        !0
      ),
      (t.comparatorTrimReplace = "$1$2$3"),
      l(
        "HYPHENRANGE",
        `^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`
      ),
      l(
        "HYPHENRANGELOOSE",
        `^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${
          s[a.XRANGEPLAINLOOSE]
        })\\s*$`
      ),
      l("STAR", "(<|>)?=?\\s*\\*"),
      l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
      l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  },
  function (e, t) {
    e.exports = require("assert");
  },
  function (e, t, r) {
    "use strict";
    for (
      var n = r(2), i = r(18), o = r(46), s = r(9), a = new Array(256), c = 0;
      c < 256;
      c++
    )
      a[c] =
        c >= 252
          ? 6
          : c >= 248
          ? 5
          : c >= 240
          ? 4
          : c >= 224
          ? 3
          : c >= 192
          ? 2
          : 1;
    a[254] = a[254] = 1;
    function l() {
      s.call(this, "utf-8 decode"), (this.leftOver = null);
    }
    function u() {
      s.call(this, "utf-8 encode");
    }
    (t.utf8encode = function (e) {
      return i.nodebuffer
        ? o.newBufferFrom(e, "utf-8")
        : (function (e) {
            var t,
              r,
              n,
              o,
              s,
              a = e.length,
              c = 0;
            for (o = 0; o < a; o++)
              55296 == (64512 & (r = e.charCodeAt(o))) &&
                o + 1 < a &&
                56320 == (64512 & (n = e.charCodeAt(o + 1))) &&
                ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++),
                (c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
            for (
              t = i.uint8array ? new Uint8Array(c) : new Array(c), s = 0, o = 0;
              s < c;
              o++
            )
              55296 == (64512 & (r = e.charCodeAt(o))) &&
                o + 1 < a &&
                56320 == (64512 & (n = e.charCodeAt(o + 1))) &&
                ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), o++),
                r < 128
                  ? (t[s++] = r)
                  : r < 2048
                  ? ((t[s++] = 192 | (r >>> 6)), (t[s++] = 128 | (63 & r)))
                  : r < 65536
                  ? ((t[s++] = 224 | (r >>> 12)),
                    (t[s++] = 128 | ((r >>> 6) & 63)),
                    (t[s++] = 128 | (63 & r)))
                  : ((t[s++] = 240 | (r >>> 18)),
                    (t[s++] = 128 | ((r >>> 12) & 63)),
                    (t[s++] = 128 | ((r >>> 6) & 63)),
                    (t[s++] = 128 | (63 & r)));
            return t;
          })(e);
    }),
      (t.utf8decode = function (e) {
        return i.nodebuffer
          ? n.transformTo("nodebuffer", e).toString("utf-8")
          : (function (e) {
              var t,
                r,
                i,
                o,
                s = e.length,
                c = new Array(2 * s);
              for (r = 0, t = 0; t < s; )
                if ((i = e[t++]) < 128) c[r++] = i;
                else if ((o = a[i]) > 4) (c[r++] = 65533), (t += o - 1);
                else {
                  for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && t < s; )
                    (i = (i << 6) | (63 & e[t++])), o--;
                  o > 1
                    ? (c[r++] = 65533)
                    : i < 65536
                    ? (c[r++] = i)
                    : ((i -= 65536),
                      (c[r++] = 55296 | ((i >> 10) & 1023)),
                      (c[r++] = 56320 | (1023 & i)));
                }
              return (
                c.length !== r &&
                  (c.subarray ? (c = c.subarray(0, r)) : (c.length = r)),
                n.applyFromCharCode(c)
              );
            })((e = n.transformTo(i.uint8array ? "uint8array" : "array", e)));
      }),
      n.inherits(l, s),
      (l.prototype.processChunk = function (e) {
        var r = n.transformTo(i.uint8array ? "uint8array" : "array", e.data);
        if (this.leftOver && this.leftOver.length) {
          if (i.uint8array) {
            var o = r;
            (r = new Uint8Array(o.length + this.leftOver.length)).set(
              this.leftOver,
              0
            ),
              r.set(o, this.leftOver.length);
          } else r = this.leftOver.concat(r);
          this.leftOver = null;
        }
        var s = (function (e, t) {
            var r;
            for (
              (t = t || e.length) > e.length && (t = e.length), r = t - 1;
              r >= 0 && 128 == (192 & e[r]);

            )
              r--;
            return r < 0 || 0 === r ? t : r + a[e[r]] > t ? r : t;
          })(r),
          c = r;
        s !== r.length &&
          (i.uint8array
            ? ((c = r.subarray(0, s)),
              (this.leftOver = r.subarray(s, r.length)))
            : ((c = r.slice(0, s)), (this.leftOver = r.slice(s, r.length)))),
          this.push({ data: t.utf8decode(c), meta: e.meta });
      }),
      (l.prototype.flush = function () {
        this.leftOver &&
          this.leftOver.length &&
          (this.push({ data: t.utf8decode(this.leftOver), meta: {} }),
          (this.leftOver = null));
      }),
      (t.Utf8DecodeWorker = l),
      n.inherits(u, s),
      (u.prototype.processChunk = function (e) {
        this.push({ data: t.utf8encode(e.data), meta: e.meta });
      }),
      (t.Utf8EncodeWorker = u);
  },
  function (e, t, r) {
    function n(e) {
      return Object.prototype.toString.call(e);
    }
    (t.isArray = function (e) {
      return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
    }),
      (t.isBoolean = function (e) {
        return "boolean" == typeof e;
      }),
      (t.isNull = function (e) {
        return null === e;
      }),
      (t.isNullOrUndefined = function (e) {
        return null == e;
      }),
      (t.isNumber = function (e) {
        return "number" == typeof e;
      }),
      (t.isString = function (e) {
        return "string" == typeof e;
      }),
      (t.isSymbol = function (e) {
        return "symbol" == typeof e;
      }),
      (t.isUndefined = function (e) {
        return void 0 === e;
      }),
      (t.isRegExp = function (e) {
        return "[object RegExp]" === n(e);
      }),
      (t.isObject = function (e) {
        return "object" == typeof e && null !== e;
      }),
      (t.isDate = function (e) {
        return "[object Date]" === n(e);
      }),
      (t.isError = function (e) {
        return "[object Error]" === n(e) || e instanceof Error;
      }),
      (t.isFunction = function (e) {
        return "function" == typeof e;
      }),
      (t.isPrimitive = function (e) {
        return (
          null === e ||
          "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          "symbol" == typeof e ||
          void 0 === e
        );
      }),
      (t.isBuffer = r(96).Buffer.isBuffer);
  },
  function (e, t, r) {
    "use strict";
    var n = null;
    (n = "undefined" != typeof Promise ? Promise : r(186)),
      (e.exports = { Promise: n });
  },
  function (e, t, r) {
    const { MAX_SAFE_COMPONENT_LENGTH: n } = r(51),
      i = r(52),
      o = ((t = e.exports = {}).re = []),
      s = (t.src = []),
      a = (t.t = {});
    let c = 0;
    const l = (e, t, r) => {
      const n = c++;
      i(e, n, t),
        (a[e] = n),
        (s[n] = t),
        (o[n] = new RegExp(t, r ? "g" : void 0));
    };
    l("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
      l("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
      l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
      l(
        "MAINVERSION",
        `(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${
          s[a.NUMERICIDENTIFIER]
        })`
      ),
      l(
        "MAINVERSIONLOOSE",
        `(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${
          s[a.NUMERICIDENTIFIERLOOSE]
        })\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`
      ),
      l(
        "PRERELEASEIDENTIFIER",
        `(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`
      ),
      l(
        "PRERELEASEIDENTIFIERLOOSE",
        `(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`
      ),
      l(
        "PRERELEASE",
        `(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${
          s[a.PRERELEASEIDENTIFIER]
        })*))`
      ),
      l(
        "PRERELEASELOOSE",
        `(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
          s[a.PRERELEASEIDENTIFIERLOOSE]
        })*))`
      ),
      l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
      l(
        "BUILD",
        `(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`
      ),
      l("FULLPLAIN", `v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`),
      l("FULL", `^${s[a.FULLPLAIN]}$`),
      l(
        "LOOSEPLAIN",
        `[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`
      ),
      l("LOOSE", `^${s[a.LOOSEPLAIN]}$`),
      l("GTLT", "((?:<|>)?=?)"),
      l("XRANGEIDENTIFIERLOOSE", s[a.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"),
      l("XRANGEIDENTIFIER", s[a.NUMERICIDENTIFIER] + "|x|X|\\*"),
      l(
        "XRANGEPLAIN",
        `[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${
          s[a.XRANGEIDENTIFIER]
        })(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${
          s[a.BUILD]
        }?)?)?`
      ),
      l(
        "XRANGEPLAINLOOSE",
        `[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
          s[a.XRANGEIDENTIFIERLOOSE]
        })(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${
          s[a.BUILD]
        }?)?)?`
      ),
      l("XRANGE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`),
      l("XRANGELOOSE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`),
      l(
        "COERCE",
        `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`
      ),
      l("COERCERTL", s[a.COERCE], !0),
      l("LONETILDE", "(?:~>?)"),
      l("TILDETRIM", `(\\s*)${s[a.LONETILDE]}\\s+`, !0),
      (t.tildeTrimReplace = "$1~"),
      l("TILDE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`),
      l("TILDELOOSE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`),
      l("LONECARET", "(?:\\^)"),
      l("CARETTRIM", `(\\s*)${s[a.LONECARET]}\\s+`, !0),
      (t.caretTrimReplace = "$1^"),
      l("CARET", `^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`),
      l("CARETLOOSE", `^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`),
      l("COMPARATORLOOSE", `^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`),
      l("COMPARATOR", `^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`),
      l(
        "COMPARATORTRIM",
        `(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`,
        !0
      ),
      (t.comparatorTrimReplace = "$1$2$3"),
      l(
        "HYPHENRANGE",
        `^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`
      ),
      l(
        "HYPHENRANGELOOSE",
        `^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${
          s[a.XRANGEPLAINLOOSE]
        })\\s*$`
      ),
      l("STAR", "(<|>)?=?\\s*\\*"),
      l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
      l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  },
  function (e, t) {
    const r = Number.MAX_SAFE_INTEGER || 9007199254740991;
    e.exports = {
      MAX_LENGTH: 256,
      MAX_SAFE_COMPONENT_LENGTH: 16,
      MAX_SAFE_INTEGER: r,
      RELEASE_TYPES: [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease",
      ],
      SEMVER_SPEC_VERSION: "2.0.0",
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2,
    };
  },
  function (e, t) {
    const r =
      "object" == typeof process &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
        ? (...e) => console.error("SEMVER", ...e)
        : () => {};
    e.exports = r;
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t, r) => n(e, t, r) > 0;
  },
  function (e, t, r) {
    const n = Symbol("SemVer ANY");
    class i {
      static get ANY() {
        return n;
      }
      constructor(e, t) {
        if (((t = o(t)), e instanceof i)) {
          if (e.loose === !!t.loose) return e;
          e = e.value;
        }
        l("comparator", e, t),
          (this.options = t),
          (this.loose = !!t.loose),
          this.parse(e),
          this.semver === n
            ? (this.value = "")
            : (this.value = this.operator + this.semver.version),
          l("comp", this);
      }
      parse(e) {
        const t = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR],
          r = e.match(t);
        if (!r) throw new TypeError("Invalid comparator: " + e);
        (this.operator = void 0 !== r[1] ? r[1] : ""),
          "=" === this.operator && (this.operator = ""),
          r[2]
            ? (this.semver = new u(r[2], this.options.loose))
            : (this.semver = n);
      }
      toString() {
        return this.value;
      }
      test(e) {
        if (
          (l("Comparator.test", e, this.options.loose),
          this.semver === n || e === n)
        )
          return !0;
        if ("string" == typeof e)
          try {
            e = new u(e, this.options);
          } catch (e) {
            return !1;
          }
        return c(e, this.operator, this.semver, this.options);
      }
      intersects(e, t) {
        if (!(e instanceof i)) throw new TypeError("a Comparator is required");
        return "" === this.operator
          ? "" === this.value || new h(e.value, t).test(this.value)
          : "" === e.operator
          ? "" === e.value || new h(this.value, t).test(e.semver)
          : (!(t = o(t)).includePrerelease ||
              ("<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value)) &&
            !(
              !t.includePrerelease &&
              (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))
            ) &&
            (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) ||
              !(
                !this.operator.startsWith("<") || !e.operator.startsWith("<")
              ) ||
              !(
                this.semver.version !== e.semver.version ||
                !this.operator.includes("=") ||
                !e.operator.includes("=")
              ) ||
              !!(
                c(this.semver, "<", e.semver, t) &&
                this.operator.startsWith(">") &&
                e.operator.startsWith("<")
              ) ||
              !!(
                c(this.semver, ">", e.semver, t) &&
                this.operator.startsWith("<") &&
                e.operator.startsWith(">")
              ));
      }
    }
    e.exports = i;
    const o = r(58),
      { re: s, t: a } = r(32),
      c = r(84),
      l = r(39),
      u = r(5),
      h = r(11);
  },
  function (e, t, r) {
    const n = r(11);
    e.exports = (e, t, r) => {
      try {
        t = new n(t, r);
      } catch (e) {
        return !1;
      }
      return t.test(e);
    };
  },
  function (e, t) {
    e.exports = require("events");
  },
  function (e, t, r) {
    "use strict";
    "undefined" == typeof process ||
    !process.version ||
    0 === process.version.indexOf("v0.") ||
    (0 === process.version.indexOf("v1.") &&
      0 !== process.version.indexOf("v1.8."))
      ? (e.exports = {
          nextTick: function (e, t, r, n) {
            if ("function" != typeof e)
              throw new TypeError('"callback" argument must be a function');
            var i,
              o,
              s = arguments.length;
            switch (s) {
              case 0:
              case 1:
                return process.nextTick(e);
              case 2:
                return process.nextTick(function () {
                  e.call(null, t);
                });
              case 3:
                return process.nextTick(function () {
                  e.call(null, t, r);
                });
              case 4:
                return process.nextTick(function () {
                  e.call(null, t, r, n);
                });
              default:
                for (i = new Array(s - 1), o = 0; o < i.length; )
                  i[o++] = arguments[o];
                return process.nextTick(function () {
                  e.apply(null, i);
                });
            }
          },
        })
      : (e.exports = process);
  },
  function (e, t, r) {
    var n = r(96),
      i = n.Buffer;
    function o(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function s(e, t, r) {
      return i(e, t, r);
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = n)
      : (o(n, t), (t.Buffer = s)),
      o(i, s),
      (s.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return i(e, t, r);
      }),
      (s.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var n = i(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? n.fill(t, r)
              : n.fill(t)
            : n.fill(0),
          n
        );
      }),
      (s.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i(e);
      }),
      (s.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n.SlowBuffer(e);
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = {
      isNode: "undefined" != typeof Buffer,
      newBufferFrom: function (e, t) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(e, t);
        if ("number" == typeof e)
          throw new Error('The "data" argument must not be a number');
        return new Buffer(e, t);
      },
      allocBuffer: function (e) {
        if (Buffer.alloc) return Buffer.alloc(e);
        var t = new Buffer(e);
        return t.fill(0), t;
      },
      isBuffer: function (e) {
        return Buffer.isBuffer(e);
      },
      isStream: function (e) {
        return (
          e &&
          "function" == typeof e.on &&
          "function" == typeof e.pause &&
          "function" == typeof e.resume
        );
      },
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(14);
    function i(e) {
      return (
        (e = e.map(o)),
        n.formatWithOptions
          ? n.formatWithOptions.apply(n, [{ getters: !0 }].concat(e))
          : n.format.apply(n, e)
      );
    }
    function o(e) {
      return "function" == typeof e
        ? e.toString()
        : e instanceof Error
        ? e.stack
        : e;
    }
    function s(e, t) {
      return (t = t || 2), (new Array(t + 1).join("0") + e).substr(-t, t);
    }
    function a(e) {
      var t = Math.abs(e);
      return (e >= 0 ? "-" : "+") + s(Math.floor(t / 60)) + ":" + s(t % 60);
    }
    e.exports = {
      format: function (e, t, r, n) {
        if (((n = void 0 !== n && n), "function" == typeof t)) return t(e, r);
        var o = new Date(e.date || Date.now()),
          c = e.variables,
          l = t;
        for (var u in c)
          c.hasOwnProperty(u) && (l = l.replace("{" + u + "}", c[u]));
        (l = l
          .replace("{level}", e.level)
          .replace("{text}", i(e.data))
          .replace("{y}", String(o.getFullYear()))
          .replace("{m}", s(o.getMonth() + 1))
          .replace("{d}", s(o.getDate()))
          .replace("{h}", s(o.getHours()))
          .replace("{i}", s(o.getMinutes()))
          .replace("{s}", s(o.getSeconds()))
          .replace("{ms}", s(o.getMilliseconds(), 3))
          .replace("{z}", a(o.getTimezoneOffset()))),
          n && (l = l.replace(/%c/g, ""));
        return l;
      },
      formatTimeZone: a,
      pad: s,
      stringifyObject: o,
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.UpdaterSignal =
        t.UPDATE_DOWNLOADED =
        t.DOWNLOAD_PROGRESS =
        t.NsisUpdater =
        t.MacUpdater =
        t.AppImageUpdater =
        t.Provider =
        t.CancellationToken =
        t.NoOpLogger =
        t.AppUpdater =
          void 0);
    const n = r(3);
    Object.defineProperty(t, "CancellationToken", {
      enumerable: !0,
      get: function () {
        return n.CancellationToken;
      },
    });
    var i = r(69);
    Object.defineProperty(t, "AppUpdater", {
      enumerable: !0,
      get: function () {
        return i.AppUpdater;
      },
    }),
      Object.defineProperty(t, "NoOpLogger", {
        enumerable: !0,
        get: function () {
          return i.NoOpLogger;
        },
      });
    var o = r(16);
    Object.defineProperty(t, "Provider", {
      enumerable: !0,
      get: function () {
        return o.Provider;
      },
    });
    var s = r(132);
    Object.defineProperty(t, "AppImageUpdater", {
      enumerable: !0,
      get: function () {
        return s.AppImageUpdater;
      },
    });
    var a = r(138);
    Object.defineProperty(t, "MacUpdater", {
      enumerable: !0,
      get: function () {
        return a.MacUpdater;
      },
    });
    var c = r(139);
    let l;
    Object.defineProperty(t, "NsisUpdater", {
      enumerable: !0,
      get: function () {
        return c.NsisUpdater;
      },
    }),
      Object.defineProperty(t, "autoUpdater", {
        enumerable: !0,
        get: () =>
          l ||
          ((l =
            "win32" === process.platform
              ? new (r(139).NsisUpdater)()
              : "darwin" === process.platform
              ? new (r(138).MacUpdater)()
              : new (r(132).AppImageUpdater)()),
          l),
      }),
      (t.DOWNLOAD_PROGRESS = "download-progress"),
      (t.UPDATE_DOWNLOADED = "update-downloaded");
    t.UpdaterSignal = class {
      constructor(e) {
        this.emitter = e;
      }
      login(e) {
        u(this.emitter, "login", e);
      }
      progress(e) {
        u(this.emitter, t.DOWNLOAD_PROGRESS, e);
      }
      updateDownloaded(e) {
        u(this.emitter, t.UPDATE_DOWNLOADED, e);
      }
      updateCancelled(e) {
        u(this.emitter, "update-cancelled", e);
      }
    };
    function u(e, t, r) {
      e.on(t, r);
    }
  },
  function (e, t) {
    e.exports = require("crypto");
  },
  function (e, t, r) {
    "use strict";
    const n = r(6),
      i = r(8).fromCallback,
      o = r(248);
    e.exports = {
      remove: i(function (e, t) {
        if (n.rm) return n.rm(e, { recursive: !0, force: !0 }, t);
        o(e, t);
      }),
      removeSync: function (e) {
        if (n.rmSync) return n.rmSync(e, { recursive: !0, force: !0 });
        o.sync(e);
      },
    };
  },
  function (e, t) {
    const r = Number.MAX_SAFE_INTEGER || 9007199254740991;
    e.exports = {
      MAX_LENGTH: 256,
      MAX_SAFE_COMPONENT_LENGTH: 16,
      MAX_SAFE_INTEGER: r,
      RELEASE_TYPES: [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease",
      ],
      SEMVER_SPEC_VERSION: "2.0.0",
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2,
    };
  },
  function (e, t) {
    const r =
      "object" == typeof process &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
        ? (...e) => console.error("SEMVER", ...e)
        : () => {};
    e.exports = r;
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t, r) => n(e, t, r) > 0;
  },
  function (e, t, r) {
    const n = Symbol("SemVer ANY");
    class i {
      static get ANY() {
        return n;
      }
      constructor(e, t) {
        if (((t = o(t)), e instanceof i)) {
          if (e.loose === !!t.loose) return e;
          e = e.value;
        }
        l("comparator", e, t),
          (this.options = t),
          (this.loose = !!t.loose),
          this.parse(e),
          this.semver === n
            ? (this.value = "")
            : (this.value = this.operator + this.semver.version),
          l("comp", this);
      }
      parse(e) {
        const t = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR],
          r = e.match(t);
        if (!r) throw new TypeError("Invalid comparator: " + e);
        (this.operator = void 0 !== r[1] ? r[1] : ""),
          "=" === this.operator && (this.operator = ""),
          r[2]
            ? (this.semver = new u(r[2], this.options.loose))
            : (this.semver = n);
      }
      toString() {
        return this.value;
      }
      test(e) {
        if (
          (l("Comparator.test", e, this.options.loose),
          this.semver === n || e === n)
        )
          return !0;
        if ("string" == typeof e)
          try {
            e = new u(e, this.options);
          } catch (e) {
            return !1;
          }
        return c(e, this.operator, this.semver, this.options);
      }
      intersects(e, t) {
        if (!(e instanceof i)) throw new TypeError("a Comparator is required");
        return "" === this.operator
          ? "" === this.value || new h(e.value, t).test(this.value)
          : "" === e.operator
          ? "" === e.value || new h(this.value, t).test(e.semver)
          : (!(t = o(t)).includePrerelease ||
              ("<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value)) &&
            !(
              !t.includePrerelease &&
              (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))
            ) &&
            (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) ||
              !(
                !this.operator.startsWith("<") || !e.operator.startsWith("<")
              ) ||
              !(
                this.semver.version !== e.semver.version ||
                !this.operator.includes("=") ||
                !e.operator.includes("=")
              ) ||
              !!(
                c(this.semver, "<", e.semver, t) &&
                this.operator.startsWith(">") &&
                e.operator.startsWith("<")
              ) ||
              !!(
                c(this.semver, ">", e.semver, t) &&
                this.operator.startsWith("<") &&
                e.operator.startsWith(">")
              ));
      }
    }
    e.exports = i;
    const o = r(74),
      { re: s, t: a } = r(37),
      c = r(129),
      l = r(52),
      u = r(7),
      h = r(13);
  },
  function (e, t, r) {
    const n = r(13);
    e.exports = (e, t, r) => {
      try {
        t = new n(t, r);
      } catch (e) {
        return !1;
      }
      return t.test(e);
    };
  },
  function (e, t) {
    e.exports = require("child_process");
  },
  function (e, t) {
    (e.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t) {
    const r = Object.freeze({ loose: !0 }),
      n = Object.freeze({});
    e.exports = (e) => (e ? ("object" != typeof e ? r : e) : n);
  },
  function (e, t, r) {
    const n = r(5);
    e.exports = (e, t, r) => {
      const i = new n(e, r),
        o = new n(t, r);
      return i.compare(o) || i.compareBuild(o);
    };
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t, r) => n(e, t, r) < 0;
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t, r) => n(e, t, r) >= 0;
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t, r) => n(e, t, r) <= 0;
  },
  function (e, t, r) {
    const n = r(5),
      i = r(41),
      { ANY: o } = i,
      s = r(11),
      a = r(42),
      c = r(40),
      l = r(60),
      u = r(62),
      h = r(61);
    e.exports = (e, t, r, f) => {
      let d, p, m, g, v;
      switch (((e = new n(e, f)), (t = new s(t, f)), r)) {
        case ">":
          (d = c), (p = u), (m = l), (g = ">"), (v = ">=");
          break;
        case "<":
          (d = l), (p = h), (m = c), (g = "<"), (v = "<=");
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (a(e, t, f)) return !1;
      for (let r = 0; r < t.set.length; ++r) {
        const n = t.set[r];
        let s = null,
          a = null;
        if (
          (n.forEach((e) => {
            e.semver === o && (e = new i(">=0.0.0")),
              (s = s || e),
              (a = a || e),
              d(e.semver, s.semver, f)
                ? (s = e)
                : m(e.semver, a.semver, f) && (a = e);
          }),
          s.operator === g || s.operator === v)
        )
          return !1;
        if ((!a.operator || a.operator === g) && p(e, a.semver)) return !1;
        if (a.operator === v && m(e, a.semver)) return !1;
      }
      return !0;
    };
  },
  function (e, t, r) {
    (e.exports = u), (u.Minimatch = h);
    var n = (function () {
      try {
        return r(0);
      } catch (e) {}
    })() || { sep: "/" };
    u.sep = n.sep;
    var i = (u.GLOBSTAR = h.GLOBSTAR = {}),
      o = r(173),
      s = {
        "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
        "?": { open: "(?:", close: ")?" },
        "+": { open: "(?:", close: ")+" },
        "*": { open: "(?:", close: ")*" },
        "@": { open: "(?:", close: ")" },
      },
      a = "().*{}+?[]^$\\!".split("").reduce(function (e, t) {
        return (e[t] = !0), e;
      }, {});
    var c = /\/+/;
    function l(e, t) {
      t = t || {};
      var r = {};
      return (
        Object.keys(e).forEach(function (t) {
          r[t] = e[t];
        }),
        Object.keys(t).forEach(function (e) {
          r[e] = t[e];
        }),
        r
      );
    }
    function u(e, t, r) {
      return (
        d(t),
        r || (r = {}),
        !(!r.nocomment && "#" === t.charAt(0)) && new h(t, r).match(e)
      );
    }
    function h(e, t) {
      if (!(this instanceof h)) return new h(e, t);
      d(e),
        t || (t = {}),
        (e = e.trim()),
        t.allowWindowsEscape || "/" === n.sep || (e = e.split(n.sep).join("/")),
        (this.options = t),
        (this.set = []),
        (this.pattern = e),
        (this.regexp = null),
        (this.negate = !1),
        (this.comment = !1),
        (this.empty = !1),
        (this.partial = !!t.partial),
        this.make();
    }
    function f(e, t) {
      return (
        t || (t = this instanceof h ? this.options : {}),
        (e = void 0 === e ? this.pattern : e),
        d(e),
        t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : o(e)
      );
    }
    (u.filter = function (e, t) {
      return (
        (t = t || {}),
        function (r, n, i) {
          return u(r, e, t);
        }
      );
    }),
      (u.defaults = function (e) {
        if (!e || "object" != typeof e || !Object.keys(e).length) return u;
        var t = u,
          r = function (r, n, i) {
            return t(r, n, l(e, i));
          };
        return (
          ((r.Minimatch = function (r, n) {
            return new t.Minimatch(r, l(e, n));
          }).defaults = function (r) {
            return t.defaults(l(e, r)).Minimatch;
          }),
          (r.filter = function (r, n) {
            return t.filter(r, l(e, n));
          }),
          (r.defaults = function (r) {
            return t.defaults(l(e, r));
          }),
          (r.makeRe = function (r, n) {
            return t.makeRe(r, l(e, n));
          }),
          (r.braceExpand = function (r, n) {
            return t.braceExpand(r, l(e, n));
          }),
          (r.match = function (r, n, i) {
            return t.match(r, n, l(e, i));
          }),
          r
        );
      }),
      (h.defaults = function (e) {
        return u.defaults(e).Minimatch;
      }),
      (h.prototype.debug = function () {}),
      (h.prototype.make = function () {
        var e = this.pattern,
          t = this.options;
        if (!t.nocomment && "#" === e.charAt(0))
          return void (this.comment = !0);
        if (!e) return void (this.empty = !0);
        this.parseNegate();
        var r = (this.globSet = this.braceExpand());
        t.debug &&
          (this.debug = function () {
            console.error.apply(console, arguments);
          });
        this.debug(this.pattern, r),
          (r = this.globParts =
            r.map(function (e) {
              return e.split(c);
            })),
          this.debug(this.pattern, r),
          (r = r.map(function (e, t, r) {
            return e.map(this.parse, this);
          }, this)),
          this.debug(this.pattern, r),
          (r = r.filter(function (e) {
            return -1 === e.indexOf(!1);
          })),
          this.debug(this.pattern, r),
          (this.set = r);
      }),
      (h.prototype.parseNegate = function () {
        var e = this.pattern,
          t = !1,
          r = this.options,
          n = 0;
        if (r.nonegate) return;
        for (var i = 0, o = e.length; i < o && "!" === e.charAt(i); i++)
          (t = !t), n++;
        n && (this.pattern = e.substr(n));
        this.negate = t;
      }),
      (u.braceExpand = function (e, t) {
        return f(e, t);
      }),
      (h.prototype.braceExpand = f);
    var d = function (e) {
      if ("string" != typeof e) throw new TypeError("invalid pattern");
      if (e.length > 65536) throw new TypeError("pattern is too long");
    };
    h.prototype.parse = function (e, t) {
      d(e);
      var r = this.options;
      if ("**" === e) {
        if (!r.noglobstar) return i;
        e = "*";
      }
      if ("" === e) return "";
      var n,
        o = "",
        c = !!r.nocase,
        l = !1,
        u = [],
        h = [],
        f = !1,
        m = -1,
        g = -1,
        v =
          "." === e.charAt(0)
            ? ""
            : r.dot
            ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))"
            : "(?!\\.)",
        y = this;
      function w() {
        if (n) {
          switch (n) {
            case "*":
              (o += "[^/]*?"), (c = !0);
              break;
            case "?":
              (o += "[^/]"), (c = !0);
              break;
            default:
              o += "\\" + n;
          }
          y.debug("clearStateChar %j %j", n, o), (n = !1);
        }
      }
      for (var b, E = 0, _ = e.length; E < _ && (b = e.charAt(E)); E++)
        if ((this.debug("%s\t%s %s %j", e, E, o, b), l && a[b]))
          (o += "\\" + b), (l = !1);
        else
          switch (b) {
            case "/":
              return !1;
            case "\\":
              w(), (l = !0);
              continue;
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              if ((this.debug("%s\t%s %s %j <-- stateChar", e, E, o, b), f)) {
                this.debug("  in class"),
                  "!" === b && E === g + 1 && (b = "^"),
                  (o += b);
                continue;
              }
              y.debug("call clearStateChar %j", n),
                w(),
                (n = b),
                r.noext && w();
              continue;
            case "(":
              if (f) {
                o += "(";
                continue;
              }
              if (!n) {
                o += "\\(";
                continue;
              }
              u.push({
                type: n,
                start: E - 1,
                reStart: o.length,
                open: s[n].open,
                close: s[n].close,
              }),
                (o += "!" === n ? "(?:(?!(?:" : "(?:"),
                this.debug("plType %j %j", n, o),
                (n = !1);
              continue;
            case ")":
              if (f || !u.length) {
                o += "\\)";
                continue;
              }
              w(), (c = !0);
              var A = u.pop();
              (o += A.close), "!" === A.type && h.push(A), (A.reEnd = o.length);
              continue;
            case "|":
              if (f || !u.length || l) {
                (o += "\\|"), (l = !1);
                continue;
              }
              w(), (o += "|");
              continue;
            case "[":
              if ((w(), f)) {
                o += "\\" + b;
                continue;
              }
              (f = !0), (g = E), (m = o.length), (o += b);
              continue;
            case "]":
              if (E === g + 1 || !f) {
                (o += "\\" + b), (l = !1);
                continue;
              }
              var S = e.substring(g + 1, E);
              try {
                RegExp("[" + S + "]");
              } catch (e) {
                var O = this.parse(S, p);
                (o = o.substr(0, m) + "\\[" + O[0] + "\\]"),
                  (c = c || O[1]),
                  (f = !1);
                continue;
              }
              (c = !0), (f = !1), (o += b);
              continue;
            default:
              w(),
                l ? (l = !1) : !a[b] || ("^" === b && f) || (o += "\\"),
                (o += b);
          }
      f &&
        ((S = e.substr(g + 1)),
        (O = this.parse(S, p)),
        (o = o.substr(0, m) + "\\[" + O[0]),
        (c = c || O[1]));
      for (A = u.pop(); A; A = u.pop()) {
        var C = o.slice(A.reStart + A.open.length);
        this.debug("setting tail", o, A),
          (C = C.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (e, t, r) {
            return r || (r = "\\"), t + t + r + "|";
          })),
          this.debug("tail=%j\n   %s", C, C, A, o);
        var I =
          "*" === A.type ? "[^/]*?" : "?" === A.type ? "[^/]" : "\\" + A.type;
        (c = !0), (o = o.slice(0, A.reStart) + I + "\\(" + C);
      }
      w(), l && (o += "\\\\");
      var k = !1;
      switch (o.charAt(0)) {
        case "[":
        case ".":
        case "(":
          k = !0;
      }
      for (var T = h.length - 1; T > -1; T--) {
        var x = h[T],
          R = o.slice(0, x.reStart),
          N = o.slice(x.reStart, x.reEnd - 8),
          D = o.slice(x.reEnd - 8, x.reEnd),
          P = o.slice(x.reEnd);
        D += P;
        var L = R.split("(").length - 1,
          F = P;
        for (E = 0; E < L; E++) F = F.replace(/\)[+*?]?/, "");
        var U = "";
        "" === (P = F) && t !== p && (U = "$"), (o = R + N + P + U + D);
      }
      "" !== o && c && (o = "(?=.)" + o);
      k && (o = v + o);
      if (t === p) return [o, c];
      if (!c)
        return (function (e) {
          return e.replace(/\\(.)/g, "$1");
        })(e);
      var j = r.nocase ? "i" : "";
      try {
        var B = new RegExp("^" + o + "$", j);
      } catch (e) {
        return new RegExp("$.");
      }
      return (B._glob = e), (B._src = o), B;
    };
    var p = {};
    (u.makeRe = function (e, t) {
      return new h(e, t || {}).makeRe();
    }),
      (h.prototype.makeRe = function () {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        var e = this.set;
        if (!e.length) return (this.regexp = !1), this.regexp;
        var t = this.options,
          r = t.noglobstar
            ? "[^/]*?"
            : t.dot
            ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
            : "(?:(?!(?:\\/|^)\\.).)*?",
          n = t.nocase ? "i" : "",
          o = e
            .map(function (e) {
              return e
                .map(function (e) {
                  return e === i
                    ? r
                    : "string" == typeof e
                    ? (function (e) {
                        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                      })(e)
                    : e._src;
                })
                .join("\\/");
            })
            .join("|");
        (o = "^(?:" + o + ")$"), this.negate && (o = "^(?!" + o + ").*$");
        try {
          this.regexp = new RegExp(o, n);
        } catch (e) {
          this.regexp = !1;
        }
        return this.regexp;
      }),
      (u.match = function (e, t, r) {
        var n = new h(t, (r = r || {}));
        return (
          (e = e.filter(function (e) {
            return n.match(e);
          })),
          n.options.nonull && !e.length && e.push(t),
          e
        );
      }),
      (h.prototype.match = function (e, t) {
        if (
          (void 0 === t && (t = this.partial),
          this.debug("match", e, this.pattern),
          this.comment)
        )
          return !1;
        if (this.empty) return "" === e;
        if ("/" === e && t) return !0;
        var r = this.options;
        "/" !== n.sep && (e = e.split(n.sep).join("/")),
          (e = e.split(c)),
          this.debug(this.pattern, "split", e);
        var i,
          o,
          s = this.set;
        for (
          this.debug(this.pattern, "set", s), o = e.length - 1;
          o >= 0 && !(i = e[o]);
          o--
        );
        for (o = 0; o < s.length; o++) {
          var a = s[o],
            l = e;
          if (
            (r.matchBase && 1 === a.length && (l = [i]), this.matchOne(l, a, t))
          )
            return !!r.flipNegate || !this.negate;
        }
        return !r.flipNegate && this.negate;
      }),
      (h.prototype.matchOne = function (e, t, r) {
        var n = this.options;
        this.debug("matchOne", { this: this, file: e, pattern: t }),
          this.debug("matchOne", e.length, t.length);
        for (
          var o = 0, s = 0, a = e.length, c = t.length;
          o < a && s < c;
          o++, s++
        ) {
          this.debug("matchOne loop");
          var l,
            u = t[s],
            h = e[o];
          if ((this.debug(t, u, h), !1 === u)) return !1;
          if (u === i) {
            this.debug("GLOBSTAR", [t, u, h]);
            var f = o,
              d = s + 1;
            if (d === c) {
              for (this.debug("** at the end"); o < a; o++)
                if (
                  "." === e[o] ||
                  ".." === e[o] ||
                  (!n.dot && "." === e[o].charAt(0))
                )
                  return !1;
              return !0;
            }
            for (; f < a; ) {
              var p = e[f];
              if (
                (this.debug("\nglobstar while", e, f, t, d, p),
                this.matchOne(e.slice(f), t.slice(d), r))
              )
                return this.debug("globstar found match!", f, a, p), !0;
              if ("." === p || ".." === p || (!n.dot && "." === p.charAt(0))) {
                this.debug("dot detected!", e, f, t, d);
                break;
              }
              this.debug("globstar swallow a segment, and continue"), f++;
            }
            return !(
              !r ||
              (this.debug("\n>>> no match, partial?", e, f, t, d), f !== a)
            );
          }
          if (
            ("string" == typeof u
              ? ((l = h === u), this.debug("string match", u, h, l))
              : ((l = h.match(u)), this.debug("pattern match", u, h, l)),
            !l)
          )
            return !1;
        }
        if (o === a && s === c) return !0;
        if (o === a) return r;
        if (s === c) return o === a - 1 && "" === e[o];
        throw new Error("wtf?");
      });
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      return "/" === e.charAt(0);
    }
    function i(e) {
      var t =
          /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(
            e
          ),
        r = t[1] || "",
        n = Boolean(r && ":" !== r.charAt(1));
      return Boolean(t[2] || n);
    }
    (e.exports = "win32" === process.platform ? i : n),
      (e.exports.posix = n),
      (e.exports.win32 = i);
  },
  function (e, t, r) {
    "use strict";
    var n = r(36),
      i = r(104),
      o = r(105),
      s = r(191);
    function a(e, t, r, n, i) {
      (this.compressedSize = e),
        (this.uncompressedSize = t),
        (this.crc32 = r),
        (this.compression = n),
        (this.compressedContent = i);
    }
    (a.prototype = {
      getContentWorker: function () {
        var e = new i(n.Promise.resolve(this.compressedContent))
            .pipe(this.compression.uncompressWorker())
            .pipe(new s("data_length")),
          t = this;
        return (
          e.on("end", function () {
            if (this.streamInfo.data_length !== t.uncompressedSize)
              throw new Error("Bug : uncompressed data size mismatch");
          }),
          e
        );
      },
      getCompressedWorker: function () {
        return new i(n.Promise.resolve(this.compressedContent))
          .withStreamInfo("compressedSize", this.compressedSize)
          .withStreamInfo("uncompressedSize", this.uncompressedSize)
          .withStreamInfo("crc32", this.crc32)
          .withStreamInfo("compression", this.compression);
      },
    }),
      (a.createWorkerFrom = function (e, t, r) {
        return e
          .pipe(new o())
          .pipe(new s("uncompressedSize"))
          .pipe(t.compressWorker(r))
          .pipe(new s("compressedSize"))
          .withStreamInfo("compression", t);
      }),
      (e.exports = a);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    var i = (function () {
      for (var e, t = [], r = 0; r < 256; r++) {
        e = r;
        for (var n = 0; n < 8; n++)
          e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
        t[r] = e;
      }
      return t;
    })();
    e.exports = function (e, t) {
      return void 0 !== e && e.length
        ? "string" !== n.getTypeOf(e)
          ? (function (e, t, r, n) {
              var o = i,
                s = n + r;
              e ^= -1;
              for (var a = n; a < s; a++) e = (e >>> 8) ^ o[255 & (e ^ t[a])];
              return -1 ^ e;
            })(0 | t, e, e.length, 0)
          : (function (e, t, r, n) {
              var o = i,
                s = n + r;
              e ^= -1;
              for (var a = n; a < s; a++)
                e = (e >>> 8) ^ o[255 & (e ^ t.charCodeAt(a))];
              return -1 ^ e;
            })(0 | t, e, e.length, 0)
        : 0;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.NoOpLogger = t.AppUpdater = void 0);
    const n = r(3),
      i = r(49),
      o = r(43),
      s = r(23),
      a = r(263),
      c = r(73),
      l = r(264),
      u = r(0),
      h = r(125),
      f = r(288),
      d = r(291),
      p = r(293),
      m = r(130),
      g = r(48),
      v = r(295);
    class y extends o.EventEmitter {
      constructor(e, t) {
        super(),
          (this.autoDownload = !0),
          (this.autoInstallOnAppQuit = !0),
          (this.allowPrerelease = !1),
          (this.fullChangelog = !1),
          (this.allowDowngrade = !1),
          (this._channel = null),
          (this.downloadedUpdateHelper = null),
          (this.requestHeaders = null),
          (this._logger = console),
          (this.signals = new g.UpdaterSignal(this)),
          (this._appUpdateConfigPath = null),
          (this.clientPromise = null),
          (this.stagingUserIdPromise = new l.Lazy(() =>
            this.getOrCreateStagingUserId()
          )),
          (this.configOnDisk = new l.Lazy(() => this.loadUpdateConfig())),
          (this.checkForUpdatesPromise = null),
          (this.updateInfoAndProvider = null),
          (this._testOnlyOptions = null),
          this.on("error", (e) => {
            this._logger.error("Error: " + (e.stack || e.message));
          }),
          null == t
            ? ((this.app = new d.ElectronAppAdapter()),
              (this.httpExecutor = new p.ElectronHttpExecutor((e, t) =>
                this.emit("login", e, t)
              )))
            : ((this.app = t), (this.httpExecutor = null));
        const r = this.app.version,
          i = h.parse(r);
        if (null == i)
          throw n.newError(
            `App version is not a valid semver version: "${r}"`,
            "ERR_UPDATER_INVALID_VERSION"
          );
        (this.currentVersion = i),
          (this.allowPrerelease = (function (e) {
            const t = h.prerelease(e);
            return null != t && t.length > 0;
          })(i)),
          null != e &&
            (this.setFeedURL(e),
            "string" != typeof e &&
              e.requestHeaders &&
              (this.requestHeaders = e.requestHeaders));
      }
      get channel() {
        return this._channel;
      }
      set channel(e) {
        if (null != this._channel) {
          if ("string" != typeof e)
            throw n.newError(
              "Channel must be a string, but got: " + e,
              "ERR_UPDATER_INVALID_CHANNEL"
            );
          if (0 === e.length)
            throw n.newError(
              "Channel must be not an empty string",
              "ERR_UPDATER_INVALID_CHANNEL"
            );
        }
        (this._channel = e), (this.allowDowngrade = !0);
      }
      addAuthHeader(e) {
        this.requestHeaders = Object.assign({}, this.requestHeaders, {
          authorization: e,
        });
      }
      get netSession() {
        return p.getNetSession();
      }
      get logger() {
        return this._logger;
      }
      set logger(e) {
        this._logger = null == e ? new w() : e;
      }
      set updateConfigPath(e) {
        (this.clientPromise = null),
          (this._appUpdateConfigPath = e),
          (this.configOnDisk = new l.Lazy(() => this.loadUpdateConfig()));
      }
      getFeedURL() {
        return "Deprecated. Do not use it.";
      }
      setFeedURL(e) {
        const t = this.createProviderRuntimeOptions();
        let r;
        (r =
          "string" == typeof e
            ? new m.GenericProvider({ provider: "generic", url: e }, this, {
                ...t,
                isUseMultipleRangeRequest:
                  v.isUrlProbablySupportMultiRangeRequests(e),
              })
            : v.createClient(e, this, t)),
          (this.clientPromise = Promise.resolve(r));
      }
      checkForUpdates() {
        let e = this.checkForUpdatesPromise;
        if (null != e)
          return (
            this._logger.info("Checking for update (already in progress)"), e
          );
        const t = () => (this.checkForUpdatesPromise = null);
        return (
          this._logger.info("Checking for update"),
          (e = this.doCheckForUpdates()
            .then((e) => (t(), e))
            .catch((e) => {
              throw (
                (t(),
                this.emit(
                  "error",
                  e,
                  "Cannot check for updates: " + (e.stack || e).toString()
                ),
                e)
              );
            })),
          (this.checkForUpdatesPromise = e),
          e
        );
      }
      isUpdaterActive() {
        return (
          !!this.app.isPackaged ||
          (this._logger.info(
            "Skip checkForUpdatesAndNotify because application is not packed"
          ),
          !1)
        );
      }
      checkForUpdatesAndNotify(e) {
        return this.isUpdaterActive()
          ? this.checkForUpdates().then((t) => {
              const n = t.downloadPromise;
              return null == n
                ? (null != this._logger.debug &&
                    this._logger.debug(
                      "checkForUpdatesAndNotify called, downloadPromise is null"
                    ),
                  t)
                : (n.then(() => {
                    const n = y.formatDownloadNotification(
                      t.updateInfo.version,
                      this.app.name,
                      e
                    );
                    new (r(4).Notification)(n).show();
                  }),
                  t);
            })
          : Promise.resolve(null);
      }
      static formatDownloadNotification(e, t, r) {
        return (
          null == r &&
            (r = {
              title: "A new update is ready to install",
              body: "{appName} version {version} has been downloaded and will be automatically installed on exit",
            }),
          (r = {
            title: r.title.replace("{appName}", t).replace("{version}", e),
            body: r.body.replace("{appName}", t).replace("{version}", e),
          })
        );
      }
      async isStagingMatch(e) {
        const t = e.stagingPercentage;
        let r = t;
        if (null == r) return !0;
        if (((r = parseInt(r, 10)), isNaN(r)))
          return this._logger.warn("Staging percentage is NaN: " + t), !0;
        r /= 100;
        const i = await this.stagingUserIdPromise.value,
          o = n.UUID.parse(i).readUInt32BE(12) / 4294967295;
        return (
          this._logger.info(
            `Staging percentage: ${r}, percentage: ${o}, user id: ${i}`
          ),
          o < r
        );
      }
      computeFinalHeaders(e) {
        return (
          null != this.requestHeaders && Object.assign(e, this.requestHeaders),
          e
        );
      }
      async isUpdateAvailable(e) {
        const t = h.parse(e.version);
        if (null == t)
          throw n.newError(
            `This file could not be downloaded, or the latest version (from update server) does not have a valid semver version: "${e.version}"`,
            "ERR_UPDATER_INVALID_VERSION"
          );
        const r = this.currentVersion;
        if (h.eq(t, r)) return !1;
        if (!(await this.isStagingMatch(e))) return !1;
        const i = h.gt(t, r),
          o = h.lt(t, r);
        return !!i || (this.allowDowngrade && o);
      }
      async getUpdateInfoAndProvider() {
        await this.app.whenReady(),
          null == this.clientPromise &&
            (this.clientPromise = this.configOnDisk.value.then((e) =>
              v.createClient(e, this, this.createProviderRuntimeOptions())
            ));
        const e = await this.clientPromise,
          t = await this.stagingUserIdPromise.value;
        return (
          e.setRequestHeaders(
            this.computeFinalHeaders({ "x-user-staging-id": t })
          ),
          { info: await e.getLatestVersion(), provider: e }
        );
      }
      createProviderRuntimeOptions() {
        return {
          isUseMultipleRangeRequest: !0,
          platform:
            null == this._testOnlyOptions
              ? process.platform
              : this._testOnlyOptions.platform,
          executor: this.httpExecutor,
        };
      }
      async doCheckForUpdates() {
        this.emit("checking-for-update");
        const e = await this.getUpdateInfoAndProvider(),
          t = e.info;
        if (!(await this.isUpdateAvailable(t)))
          return (
            this._logger.info(
              `Update for version ${
                this.currentVersion
              } is not available (latest version: ${t.version}, downgrade is ${
                this.allowDowngrade ? "allowed" : "disallowed"
              }).`
            ),
            this.emit("update-not-available", t),
            { versionInfo: t, updateInfo: t }
          );
        (this.updateInfoAndProvider = e), this.onUpdateAvailable(t);
        const r = new n.CancellationToken();
        return {
          versionInfo: t,
          updateInfo: t,
          cancellationToken: r,
          downloadPromise: this.autoDownload ? this.downloadUpdate(r) : null,
        };
      }
      onUpdateAvailable(e) {
        this._logger.info(
          `Found version ${e.version} (url: ${n
            .asArray(e.files)
            .map((e) => e.url)
            .join(", ")})`
        ),
          this.emit("update-available", e);
      }
      downloadUpdate(e = new n.CancellationToken()) {
        const t = this.updateInfoAndProvider;
        if (null == t) {
          const e = new Error("Please check update first");
          return this.dispatchError(e), Promise.reject(e);
        }
        this._logger.info(
          "Downloading update from " +
            n
              .asArray(t.info.files)
              .map((e) => e.url)
              .join(", ")
        );
        const r = (e) => {
          if (!(e instanceof n.CancellationError))
            try {
              this.dispatchError(e);
            } catch (e) {
              this._logger.warn(
                "Cannot dispatch error event: " + (e.stack || e)
              );
            }
          return e;
        };
        try {
          return this.doDownloadUpdate({
            updateInfoAndProvider: t,
            requestHeaders: this.computeRequestHeaders(t.provider),
            cancellationToken: e,
          }).catch((e) => {
            throw r(e);
          });
        } catch (e) {
          return Promise.reject(r(e));
        }
      }
      dispatchError(e) {
        this.emit("error", e, (e.stack || e).toString());
      }
      dispatchUpdateDownloaded(e) {
        this.emit(g.UPDATE_DOWNLOADED, e);
      }
      async loadUpdateConfig() {
        return (
          null == this._appUpdateConfigPath &&
            (this._appUpdateConfigPath = this.app.appUpdateConfigPath),
          c.load(await a.readFile(this._appUpdateConfigPath, "utf-8"))
        );
      }
      computeRequestHeaders(e) {
        const t = e.fileExtraDownloadHeaders;
        if (null != t) {
          const e = this.requestHeaders;
          return null == e ? t : { ...t, ...e };
        }
        return this.computeFinalHeaders({ accept: "*/*" });
      }
      async getOrCreateStagingUserId() {
        const e = u.join(this.app.userDataPath, ".updaterId");
        try {
          const t = await a.readFile(e, "utf-8");
          if (n.UUID.check(t)) return t;
          this._logger.warn(
            "Staging user id file exists, but content was invalid: " + t
          );
        } catch (e) {
          "ENOENT" !== e.code &&
            this._logger.warn(
              "Couldn't read staging user ID, creating a blank one: " + e
            );
        }
        const t = n.UUID.v5(i.randomBytes(4096), n.UUID.OID);
        this._logger.info("Generated new staging user ID: " + t);
        try {
          await s.outputFile(e, t);
        } catch (e) {
          this._logger.warn("Couldn't write out staging user ID: " + e);
        }
        return t;
      }
      get isAddNoCacheQuery() {
        const e = this.requestHeaders;
        if (null == e) return !0;
        for (const t of Object.keys(e)) {
          const e = t.toLowerCase();
          if ("authorization" === e || "private-token" === e) return !1;
        }
        return !0;
      }
      async getOrCreateDownloadHelper() {
        let e = this.downloadedUpdateHelper;
        if (null == e) {
          const t = (await this.configOnDisk.value).updaterCacheDirName,
            r = this._logger;
          null == t &&
            r.error(
              "updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?"
            );
          const n = u.join(this.app.baseCachePath, t || this.app.name);
          null != r.debug && r.debug("updater cache dir: " + n),
            (e = new f.DownloadedUpdateHelper(n)),
            (this.downloadedUpdateHelper = e);
        }
        return e;
      }
      async executeDownload(e) {
        const t = e.fileInfo,
          r = {
            headers: e.downloadUpdateOptions.requestHeaders,
            cancellationToken: e.downloadUpdateOptions.cancellationToken,
            sha2: t.info.sha2,
            sha512: t.info.sha512,
          };
        this.listenerCount(g.DOWNLOAD_PROGRESS) > 0 &&
          (r.onProgress = (e) => this.emit(g.DOWNLOAD_PROGRESS, e));
        const i = e.downloadUpdateOptions.updateInfoAndProvider.info,
          o = i.version,
          s = t.packageInfo;
        const c = await this.getOrCreateDownloadHelper(),
          l = c.cacheDirForPendingUpdate;
        await a.mkdir(l, { recursive: !0 });
        const h = (function () {
          const t = decodeURIComponent(e.fileInfo.url.pathname);
          return t.endsWith("." + e.fileExtension)
            ? u.posix.basename(t)
            : "update." + e.fileExtension;
        })();
        let d = u.join(l, h);
        const p =
            null == s
              ? null
              : u.join(l, `package-${o}${u.extname(s.path) || ".7z"}`),
          m = async (r) => (
            await c.setDownloadedFile(d, p, i, t, h, r),
            await e.done({ ...i, downloadedFile: d }),
            null == p ? [d] : [d, p]
          ),
          v = this._logger,
          y = await c.validateDownloadedPath(d, i, t, v);
        if (null != y) return (d = y), await m(!1);
        const w = async () => (
            await c.clear().catch(() => {}), await a.unlink(d).catch(() => {})
          ),
          b = await f.createTempUpdateFile("temp-" + h, l, v);
        try {
          await e.task(b, r, p, w), await a.rename(b, d);
        } catch (e) {
          throw (
            (await w(),
            e instanceof n.CancellationError &&
              (v.info("cancelled"), this.emit("update-cancelled", i)),
            e)
          );
        }
        return (
          v.info(`New version ${o} has been downloaded to ${d}`), await m(!0)
        );
      }
    }
    t.AppUpdater = y;
    class w {
      info(e) {}
      warn(e) {}
      error(e) {}
    }
    t.NoOpLogger = w;
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromCallback;
    e.exports = { copy: n(r(243)), copySync: r(246) };
  },
  function (e, t) {
    e.exports = {
      stringify: function (
        e,
        { EOL: t = "\n", finalEOL: r = !0, replacer: n = null, spaces: i } = {}
      ) {
        const o = r ? t : "";
        return JSON.stringify(e, n, i).replace(/\n/g, t) + o;
      },
      stripBom: function (e) {
        return (
          Buffer.isBuffer(e) && (e = e.toString("utf8")),
          e.replace(/^\uFEFF/, "")
        );
      },
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromCallback,
      i = r(6),
      o = r(0),
      s = r(15),
      a = r(24).pathExists;
    e.exports = {
      outputFile: n(function (e, t, r, n) {
        "function" == typeof r && ((n = r), (r = "utf8"));
        const c = o.dirname(e);
        a(c, (o, a) =>
          o
            ? n(o)
            : a
            ? i.writeFile(e, t, r, n)
            : void s.mkdirs(c, (o) => {
                if (o) return n(o);
                i.writeFile(e, t, r, n);
              })
        );
      }),
      outputFileSync: function (e, ...t) {
        const r = o.dirname(e);
        if (i.existsSync(r)) return i.writeFileSync(e, ...t);
        s.mkdirsSync(r), i.writeFileSync(e, ...t);
      },
    };
  },
  function (e, t, r) {
    "use strict";
    /*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
    function n(e) {
      return null == e;
    }
    r.r(t),
      r.d(t, "CORE_SCHEMA", function () {
        return rt;
      }),
      r.d(t, "DEFAULT_SCHEMA", function () {
        return nt;
      }),
      r.d(t, "FAILSAFE_SCHEMA", function () {
        return et;
      }),
      r.d(t, "JSON_SCHEMA", function () {
        return tt;
      }),
      r.d(t, "Schema", function () {
        return Ze;
      }),
      r.d(t, "Type", function () {
        return Ke;
      }),
      r.d(t, "YAMLException", function () {
        return at;
      }),
      r.d(t, "dump", function () {
        return st;
      }),
      r.d(t, "load", function () {
        return it;
      }),
      r.d(t, "loadAll", function () {
        return ot;
      }),
      r.d(t, "safeDump", function () {
        return ht;
      }),
      r.d(t, "safeLoad", function () {
        return lt;
      }),
      r.d(t, "safeLoadAll", function () {
        return ut;
      }),
      r.d(t, "types", function () {
        return ct;
      });
    var i = {
      isNothing: n,
      isObject: function (e) {
        return "object" == typeof e && null !== e;
      },
      toArray: function (e) {
        return Array.isArray(e) ? e : n(e) ? [] : [e];
      },
      repeat: function (e, t) {
        var r,
          n = "";
        for (r = 0; r < t; r += 1) n += e;
        return n;
      },
      isNegativeZero: function (e) {
        return 0 === e && Number.NEGATIVE_INFINITY === 1 / e;
      },
      extend: function (e, t) {
        var r, n, i, o;
        if (t)
          for (r = 0, n = (o = Object.keys(t)).length; r < n; r += 1)
            e[(i = o[r])] = t[i];
        return e;
      },
    };
    function o(e, t) {
      var r = "",
        n = e.reason || "(unknown reason)";
      return e.mark
        ? (e.mark.name && (r += 'in "' + e.mark.name + '" '),
          (r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")"),
          !t && e.mark.snippet && (r += "\n\n" + e.mark.snippet),
          n + " " + r)
        : n;
    }
    function s(e, t) {
      Error.call(this),
        (this.name = "YAMLException"),
        (this.reason = e),
        (this.mark = t),
        (this.message = o(this, !1)),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, this.constructor)
          : (this.stack = new Error().stack || "");
    }
    (s.prototype = Object.create(Error.prototype)),
      (s.prototype.constructor = s),
      (s.prototype.toString = function (e) {
        return this.name + ": " + o(this, e);
      });
    var a = s;
    function c(e, t, r, n, i) {
      var o = "",
        s = "",
        a = Math.floor(i / 2) - 1;
      return (
        n - t > a && (t = n - a + (o = " ... ").length),
        r - n > a && (r = n + a - (s = " ...").length),
        {
          str: o + e.slice(t, r).replace(/\t/g, "→") + s,
          pos: n - t + o.length,
        }
      );
    }
    function l(e, t) {
      return i.repeat(" ", t - e.length) + e;
    }
    var u = function (e, t) {
        if (((t = Object.create(t || null)), !e.buffer)) return null;
        t.maxLength || (t.maxLength = 79),
          "number" != typeof t.indent && (t.indent = 1),
          "number" != typeof t.linesBefore && (t.linesBefore = 3),
          "number" != typeof t.linesAfter && (t.linesAfter = 2);
        for (
          var r, n = /\r?\n|\r|\0/g, o = [0], s = [], a = -1;
          (r = n.exec(e.buffer));

        )
          s.push(r.index),
            o.push(r.index + r[0].length),
            e.position <= r.index && a < 0 && (a = o.length - 2);
        a < 0 && (a = o.length - 1);
        var u,
          h,
          f = "",
          d = Math.min(e.line + t.linesAfter, s.length).toString().length,
          p = t.maxLength - (t.indent + d + 3);
        for (u = 1; u <= t.linesBefore && !(a - u < 0); u++)
          (h = c(
            e.buffer,
            o[a - u],
            s[a - u],
            e.position - (o[a] - o[a - u]),
            p
          )),
            (f =
              i.repeat(" ", t.indent) +
              l((e.line - u + 1).toString(), d) +
              " | " +
              h.str +
              "\n" +
              f);
        for (
          h = c(e.buffer, o[a], s[a], e.position, p),
            f +=
              i.repeat(" ", t.indent) +
              l((e.line + 1).toString(), d) +
              " | " +
              h.str +
              "\n",
            f += i.repeat("-", t.indent + d + 3 + h.pos) + "^\n",
            u = 1;
          u <= t.linesAfter && !(a + u >= s.length);
          u++
        )
          (h = c(
            e.buffer,
            o[a + u],
            s[a + u],
            e.position - (o[a] - o[a + u]),
            p
          )),
            (f +=
              i.repeat(" ", t.indent) +
              l((e.line + u + 1).toString(), d) +
              " | " +
              h.str +
              "\n");
        return f.replace(/\n$/, "");
      },
      h = [
        "kind",
        "multi",
        "resolve",
        "construct",
        "instanceOf",
        "predicate",
        "represent",
        "representName",
        "defaultStyle",
        "styleAliases",
      ],
      f = ["scalar", "sequence", "mapping"];
    var d = function (e, t) {
      if (
        ((t = t || {}),
        Object.keys(t).forEach(function (t) {
          if (-1 === h.indexOf(t))
            throw new a(
              'Unknown option "' +
                t +
                '" is met in definition of "' +
                e +
                '" YAML type.'
            );
        }),
        (this.options = t),
        (this.tag = e),
        (this.kind = t.kind || null),
        (this.resolve =
          t.resolve ||
          function () {
            return !0;
          }),
        (this.construct =
          t.construct ||
          function (e) {
            return e;
          }),
        (this.instanceOf = t.instanceOf || null),
        (this.predicate = t.predicate || null),
        (this.represent = t.represent || null),
        (this.representName = t.representName || null),
        (this.defaultStyle = t.defaultStyle || null),
        (this.multi = t.multi || !1),
        (this.styleAliases = (function (e) {
          var t = {};
          return (
            null !== e &&
              Object.keys(e).forEach(function (r) {
                e[r].forEach(function (e) {
                  t[String(e)] = r;
                });
              }),
            t
          );
        })(t.styleAliases || null)),
        -1 === f.indexOf(this.kind))
      )
        throw new a(
          'Unknown kind "' +
            this.kind +
            '" is specified for "' +
            e +
            '" YAML type.'
        );
    };
    function p(e, t) {
      var r = [];
      return (
        e[t].forEach(function (e) {
          var t = r.length;
          r.forEach(function (r, n) {
            r.tag === e.tag &&
              r.kind === e.kind &&
              r.multi === e.multi &&
              (t = n);
          }),
            (r[t] = e);
        }),
        r
      );
    }
    function m(e) {
      return this.extend(e);
    }
    m.prototype.extend = function (e) {
      var t = [],
        r = [];
      if (e instanceof d) r.push(e);
      else if (Array.isArray(e)) r = r.concat(e);
      else {
        if (!e || (!Array.isArray(e.implicit) && !Array.isArray(e.explicit)))
          throw new a(
            "Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })"
          );
        e.implicit && (t = t.concat(e.implicit)),
          e.explicit && (r = r.concat(e.explicit));
      }
      t.forEach(function (e) {
        if (!(e instanceof d))
          throw new a(
            "Specified list of YAML types (or a single Type object) contains a non-Type object."
          );
        if (e.loadKind && "scalar" !== e.loadKind)
          throw new a(
            "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
          );
        if (e.multi)
          throw new a(
            "There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit."
          );
      }),
        r.forEach(function (e) {
          if (!(e instanceof d))
            throw new a(
              "Specified list of YAML types (or a single Type object) contains a non-Type object."
            );
        });
      var n = Object.create(m.prototype);
      return (
        (n.implicit = (this.implicit || []).concat(t)),
        (n.explicit = (this.explicit || []).concat(r)),
        (n.compiledImplicit = p(n, "implicit")),
        (n.compiledExplicit = p(n, "explicit")),
        (n.compiledTypeMap = (function () {
          var e,
            t,
            r = {
              scalar: {},
              sequence: {},
              mapping: {},
              fallback: {},
              multi: { scalar: [], sequence: [], mapping: [], fallback: [] },
            };
          function n(e) {
            e.multi
              ? (r.multi[e.kind].push(e), r.multi.fallback.push(e))
              : (r[e.kind][e.tag] = r.fallback[e.tag] = e);
          }
          for (e = 0, t = arguments.length; e < t; e += 1)
            arguments[e].forEach(n);
          return r;
        })(n.compiledImplicit, n.compiledExplicit)),
        n
      );
    };
    var g = m,
      v = new d("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function (e) {
          return null !== e ? e : "";
        },
      }),
      y = new d("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function (e) {
          return null !== e ? e : [];
        },
      }),
      w = new d("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function (e) {
          return null !== e ? e : {};
        },
      }),
      b = new g({ explicit: [v, y, w] });
    var E = new d("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: function (e) {
        if (null === e) return !0;
        var t = e.length;
        return (
          (1 === t && "~" === e) ||
          (4 === t && ("null" === e || "Null" === e || "NULL" === e))
        );
      },
      construct: function () {
        return null;
      },
      predicate: function (e) {
        return null === e;
      },
      represent: {
        canonical: function () {
          return "~";
        },
        lowercase: function () {
          return "null";
        },
        uppercase: function () {
          return "NULL";
        },
        camelcase: function () {
          return "Null";
        },
        empty: function () {
          return "";
        },
      },
      defaultStyle: "lowercase",
    });
    var _ = new d("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: function (e) {
        if (null === e) return !1;
        var t = e.length;
        return (
          (4 === t && ("true" === e || "True" === e || "TRUE" === e)) ||
          (5 === t && ("false" === e || "False" === e || "FALSE" === e))
        );
      },
      construct: function (e) {
        return "true" === e || "True" === e || "TRUE" === e;
      },
      predicate: function (e) {
        return "[object Boolean]" === Object.prototype.toString.call(e);
      },
      represent: {
        lowercase: function (e) {
          return e ? "true" : "false";
        },
        uppercase: function (e) {
          return e ? "TRUE" : "FALSE";
        },
        camelcase: function (e) {
          return e ? "True" : "False";
        },
      },
      defaultStyle: "lowercase",
    });
    function A(e) {
      return 48 <= e && e <= 55;
    }
    function S(e) {
      return 48 <= e && e <= 57;
    }
    var O = new d("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: function (e) {
          if (null === e) return !1;
          var t,
            r,
            n = e.length,
            i = 0,
            o = !1;
          if (!n) return !1;
          if ((("-" !== (t = e[i]) && "+" !== t) || (t = e[++i]), "0" === t)) {
            if (i + 1 === n) return !0;
            if ("b" === (t = e[++i])) {
              for (i++; i < n; i++)
                if ("_" !== (t = e[i])) {
                  if ("0" !== t && "1" !== t) return !1;
                  o = !0;
                }
              return o && "_" !== t;
            }
            if ("x" === t) {
              for (i++; i < n; i++)
                if ("_" !== (t = e[i])) {
                  if (
                    !(
                      (48 <= (r = e.charCodeAt(i)) && r <= 57) ||
                      (65 <= r && r <= 70) ||
                      (97 <= r && r <= 102)
                    )
                  )
                    return !1;
                  o = !0;
                }
              return o && "_" !== t;
            }
            if ("o" === t) {
              for (i++; i < n; i++)
                if ("_" !== (t = e[i])) {
                  if (!A(e.charCodeAt(i))) return !1;
                  o = !0;
                }
              return o && "_" !== t;
            }
          }
          if ("_" === t) return !1;
          for (; i < n; i++)
            if ("_" !== (t = e[i])) {
              if (!S(e.charCodeAt(i))) return !1;
              o = !0;
            }
          return !(!o || "_" === t);
        },
        construct: function (e) {
          var t,
            r = e,
            n = 1;
          if (
            (-1 !== r.indexOf("_") && (r = r.replace(/_/g, "")),
            ("-" !== (t = r[0]) && "+" !== t) ||
              ("-" === t && (n = -1), (t = (r = r.slice(1))[0])),
            "0" === r)
          )
            return 0;
          if ("0" === t) {
            if ("b" === r[1]) return n * parseInt(r.slice(2), 2);
            if ("x" === r[1]) return n * parseInt(r.slice(2), 16);
            if ("o" === r[1]) return n * parseInt(r.slice(2), 8);
          }
          return n * parseInt(r, 10);
        },
        predicate: function (e) {
          return (
            "[object Number]" === Object.prototype.toString.call(e) &&
            e % 1 == 0 &&
            !i.isNegativeZero(e)
          );
        },
        represent: {
          binary: function (e) {
            return e >= 0
              ? "0b" + e.toString(2)
              : "-0b" + e.toString(2).slice(1);
          },
          octal: function (e) {
            return e >= 0
              ? "0o" + e.toString(8)
              : "-0o" + e.toString(8).slice(1);
          },
          decimal: function (e) {
            return e.toString(10);
          },
          hexadecimal: function (e) {
            return e >= 0
              ? "0x" + e.toString(16).toUpperCase()
              : "-0x" + e.toString(16).toUpperCase().slice(1);
          },
        },
        defaultStyle: "decimal",
        styleAliases: {
          binary: [2, "bin"],
          octal: [8, "oct"],
          decimal: [10, "dec"],
          hexadecimal: [16, "hex"],
        },
      }),
      C = new RegExp(
        "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
      );
    var I = /^[-+]?[0-9]+e/;
    var k = new d("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: function (e) {
          return null !== e && !(!C.test(e) || "_" === e[e.length - 1]);
        },
        construct: function (e) {
          var t, r;
          return (
            (r = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1),
            "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)),
            ".inf" === t
              ? 1 === r
                ? Number.POSITIVE_INFINITY
                : Number.NEGATIVE_INFINITY
              : ".nan" === t
              ? NaN
              : r * parseFloat(t, 10)
          );
        },
        predicate: function (e) {
          return (
            "[object Number]" === Object.prototype.toString.call(e) &&
            (e % 1 != 0 || i.isNegativeZero(e))
          );
        },
        represent: function (e, t) {
          var r;
          if (isNaN(e))
            switch (t) {
              case "lowercase":
                return ".nan";
              case "uppercase":
                return ".NAN";
              case "camelcase":
                return ".NaN";
            }
          else if (Number.POSITIVE_INFINITY === e)
            switch (t) {
              case "lowercase":
                return ".inf";
              case "uppercase":
                return ".INF";
              case "camelcase":
                return ".Inf";
            }
          else if (Number.NEGATIVE_INFINITY === e)
            switch (t) {
              case "lowercase":
                return "-.inf";
              case "uppercase":
                return "-.INF";
              case "camelcase":
                return "-.Inf";
            }
          else if (i.isNegativeZero(e)) return "-0.0";
          return (r = e.toString(10)), I.test(r) ? r.replace("e", ".e") : r;
        },
        defaultStyle: "lowercase",
      }),
      T = b.extend({ implicit: [E, _, O, k] }),
      x = T,
      R = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
      N = new RegExp(
        "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
      );
    var D = new d("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: function (e) {
        return null !== e && (null !== R.exec(e) || null !== N.exec(e));
      },
      construct: function (e) {
        var t,
          r,
          n,
          i,
          o,
          s,
          a,
          c,
          l = 0,
          u = null;
        if ((null === (t = R.exec(e)) && (t = N.exec(e)), null === t))
          throw new Error("Date resolve error");
        if (((r = +t[1]), (n = +t[2] - 1), (i = +t[3]), !t[4]))
          return new Date(Date.UTC(r, n, i));
        if (((o = +t[4]), (s = +t[5]), (a = +t[6]), t[7])) {
          for (l = t[7].slice(0, 3); l.length < 3; ) l += "0";
          l = +l;
        }
        return (
          t[9] &&
            ((u = 6e4 * (60 * +t[10] + +(t[11] || 0))),
            "-" === t[9] && (u = -u)),
          (c = new Date(Date.UTC(r, n, i, o, s, a, l))),
          u && c.setTime(c.getTime() - u),
          c
        );
      },
      instanceOf: Date,
      represent: function (e) {
        return e.toISOString();
      },
    });
    var P = new d("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: function (e) {
          return "<<" === e || null === e;
        },
      }),
      L =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    var F = new d("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: function (e) {
          if (null === e) return !1;
          var t,
            r,
            n = 0,
            i = e.length,
            o = L;
          for (r = 0; r < i; r++)
            if (!((t = o.indexOf(e.charAt(r))) > 64)) {
              if (t < 0) return !1;
              n += 6;
            }
          return n % 8 == 0;
        },
        construct: function (e) {
          var t,
            r,
            n = e.replace(/[\r\n=]/g, ""),
            i = n.length,
            o = L,
            s = 0,
            a = [];
          for (t = 0; t < i; t++)
            t % 4 == 0 &&
              t &&
              (a.push((s >> 16) & 255),
              a.push((s >> 8) & 255),
              a.push(255 & s)),
              (s = (s << 6) | o.indexOf(n.charAt(t)));
          return (
            0 === (r = (i % 4) * 6)
              ? (a.push((s >> 16) & 255),
                a.push((s >> 8) & 255),
                a.push(255 & s))
              : 18 === r
              ? (a.push((s >> 10) & 255), a.push((s >> 2) & 255))
              : 12 === r && a.push((s >> 4) & 255),
            new Uint8Array(a)
          );
        },
        predicate: function (e) {
          return "[object Uint8Array]" === Object.prototype.toString.call(e);
        },
        represent: function (e) {
          var t,
            r,
            n = "",
            i = 0,
            o = e.length,
            s = L;
          for (t = 0; t < o; t++)
            t % 3 == 0 &&
              t &&
              ((n += s[(i >> 18) & 63]),
              (n += s[(i >> 12) & 63]),
              (n += s[(i >> 6) & 63]),
              (n += s[63 & i])),
              (i = (i << 8) + e[t]);
          return (
            0 === (r = o % 3)
              ? ((n += s[(i >> 18) & 63]),
                (n += s[(i >> 12) & 63]),
                (n += s[(i >> 6) & 63]),
                (n += s[63 & i]))
              : 2 === r
              ? ((n += s[(i >> 10) & 63]),
                (n += s[(i >> 4) & 63]),
                (n += s[(i << 2) & 63]),
                (n += s[64]))
              : 1 === r &&
                ((n += s[(i >> 2) & 63]),
                (n += s[(i << 4) & 63]),
                (n += s[64]),
                (n += s[64])),
            n
          );
        },
      }),
      U = Object.prototype.hasOwnProperty,
      j = Object.prototype.toString;
    var B = new d("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: function (e) {
          if (null === e) return !0;
          var t,
            r,
            n,
            i,
            o,
            s = [],
            a = e;
          for (t = 0, r = a.length; t < r; t += 1) {
            if (((n = a[t]), (o = !1), "[object Object]" !== j.call(n)))
              return !1;
            for (i in n)
              if (U.call(n, i)) {
                if (o) return !1;
                o = !0;
              }
            if (!o) return !1;
            if (-1 !== s.indexOf(i)) return !1;
            s.push(i);
          }
          return !0;
        },
        construct: function (e) {
          return null !== e ? e : [];
        },
      }),
      M = Object.prototype.toString;
    var $ = new d("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: function (e) {
          if (null === e) return !0;
          var t,
            r,
            n,
            i,
            o,
            s = e;
          for (o = new Array(s.length), t = 0, r = s.length; t < r; t += 1) {
            if (((n = s[t]), "[object Object]" !== M.call(n))) return !1;
            if (1 !== (i = Object.keys(n)).length) return !1;
            o[t] = [i[0], n[i[0]]];
          }
          return !0;
        },
        construct: function (e) {
          if (null === e) return [];
          var t,
            r,
            n,
            i,
            o,
            s = e;
          for (o = new Array(s.length), t = 0, r = s.length; t < r; t += 1)
            (n = s[t]), (i = Object.keys(n)), (o[t] = [i[0], n[i[0]]]);
          return o;
        },
      }),
      z = Object.prototype.hasOwnProperty;
    var G = new d("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: function (e) {
          if (null === e) return !0;
          var t,
            r = e;
          for (t in r) if (z.call(r, t) && null !== r[t]) return !1;
          return !0;
        },
        construct: function (e) {
          return null !== e ? e : {};
        },
      }),
      q = x.extend({ implicit: [D, P], explicit: [F, B, $, G] }),
      H = Object.prototype.hasOwnProperty,
      W =
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
      V = /[\x85\u2028\u2029]/,
      Y = /[,\[\]\{\}]/,
      X = /^(?:!|!!|![a-z\-]+!)$/i,
      Q =
        /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function J(e) {
      return Object.prototype.toString.call(e);
    }
    function K(e) {
      return 10 === e || 13 === e;
    }
    function Z(e) {
      return 9 === e || 32 === e;
    }
    function ee(e) {
      return 9 === e || 32 === e || 10 === e || 13 === e;
    }
    function te(e) {
      return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
    }
    function re(e) {
      var t;
      return 48 <= e && e <= 57
        ? e - 48
        : 97 <= (t = 32 | e) && t <= 102
        ? t - 97 + 10
        : -1;
    }
    function ne(e) {
      return 48 === e
        ? "\0"
        : 97 === e
        ? ""
        : 98 === e
        ? "\b"
        : 116 === e || 9 === e
        ? "\t"
        : 110 === e
        ? "\n"
        : 118 === e
        ? "\v"
        : 102 === e
        ? "\f"
        : 114 === e
        ? "\r"
        : 101 === e
        ? ""
        : 32 === e
        ? " "
        : 34 === e
        ? '"'
        : 47 === e
        ? "/"
        : 92 === e
        ? "\\"
        : 78 === e
        ? ""
        : 95 === e
        ? " "
        : 76 === e
        ? "\u2028"
        : 80 === e
        ? "\u2029"
        : "";
    }
    function ie(e) {
      return e <= 65535
        ? String.fromCharCode(e)
        : String.fromCharCode(
            55296 + ((e - 65536) >> 10),
            56320 + ((e - 65536) & 1023)
          );
    }
    for (var oe = new Array(256), se = new Array(256), ae = 0; ae < 256; ae++)
      (oe[ae] = ne(ae) ? 1 : 0), (se[ae] = ne(ae));
    function ce(e, t) {
      (this.input = e),
        (this.filename = t.filename || null),
        (this.schema = t.schema || q),
        (this.onWarning = t.onWarning || null),
        (this.legacy = t.legacy || !1),
        (this.json = t.json || !1),
        (this.listener = t.listener || null),
        (this.implicitTypes = this.schema.compiledImplicit),
        (this.typeMap = this.schema.compiledTypeMap),
        (this.length = e.length),
        (this.position = 0),
        (this.line = 0),
        (this.lineStart = 0),
        (this.lineIndent = 0),
        (this.firstTabInLine = -1),
        (this.documents = []);
    }
    function le(e, t) {
      var r = {
        name: e.filename,
        buffer: e.input.slice(0, -1),
        position: e.position,
        line: e.line,
        column: e.position - e.lineStart,
      };
      return (r.snippet = u(r)), new a(t, r);
    }
    function ue(e, t) {
      throw le(e, t);
    }
    function he(e, t) {
      e.onWarning && e.onWarning.call(null, le(e, t));
    }
    var fe = {
      YAML: function (e, t, r) {
        var n, i, o;
        null !== e.version && ue(e, "duplication of %YAML directive"),
          1 !== r.length &&
            ue(e, "YAML directive accepts exactly one argument"),
          null === (n = /^([0-9]+)\.([0-9]+)$/.exec(r[0])) &&
            ue(e, "ill-formed argument of the YAML directive"),
          (i = parseInt(n[1], 10)),
          (o = parseInt(n[2], 10)),
          1 !== i && ue(e, "unacceptable YAML version of the document"),
          (e.version = r[0]),
          (e.checkLineBreaks = o < 2),
          1 !== o &&
            2 !== o &&
            he(e, "unsupported YAML version of the document");
      },
      TAG: function (e, t, r) {
        var n, i;
        2 !== r.length && ue(e, "TAG directive accepts exactly two arguments"),
          (n = r[0]),
          (i = r[1]),
          X.test(n) ||
            ue(
              e,
              "ill-formed tag handle (first argument) of the TAG directive"
            ),
          H.call(e.tagMap, n) &&
            ue(
              e,
              'there is a previously declared suffix for "' + n + '" tag handle'
            ),
          Q.test(i) ||
            ue(
              e,
              "ill-formed tag prefix (second argument) of the TAG directive"
            );
        try {
          i = decodeURIComponent(i);
        } catch (t) {
          ue(e, "tag prefix is malformed: " + i);
        }
        e.tagMap[n] = i;
      },
    };
    function de(e, t, r, n) {
      var i, o, s, a;
      if (t < r) {
        if (((a = e.input.slice(t, r)), n))
          for (i = 0, o = a.length; i < o; i += 1)
            9 === (s = a.charCodeAt(i)) ||
              (32 <= s && s <= 1114111) ||
              ue(e, "expected valid JSON character");
        else W.test(a) && ue(e, "the stream contains non-printable characters");
        e.result += a;
      }
    }
    function pe(e, t, r, n) {
      var o, s, a, c;
      for (
        i.isObject(r) ||
          ue(
            e,
            "cannot merge mappings; the provided source object is unacceptable"
          ),
          a = 0,
          c = (o = Object.keys(r)).length;
        a < c;
        a += 1
      )
        (s = o[a]), H.call(t, s) || ((t[s] = r[s]), (n[s] = !0));
    }
    function me(e, t, r, n, i, o, s, a, c) {
      var l, u;
      if (Array.isArray(i))
        for (
          l = 0, u = (i = Array.prototype.slice.call(i)).length;
          l < u;
          l += 1
        )
          Array.isArray(i[l]) &&
            ue(e, "nested arrays are not supported inside keys"),
            "object" == typeof i &&
              "[object Object]" === J(i[l]) &&
              (i[l] = "[object Object]");
      if (
        ("object" == typeof i &&
          "[object Object]" === J(i) &&
          (i = "[object Object]"),
        (i = String(i)),
        null === t && (t = {}),
        "tag:yaml.org,2002:merge" === n)
      )
        if (Array.isArray(o))
          for (l = 0, u = o.length; l < u; l += 1) pe(e, t, o[l], r);
        else pe(e, t, o, r);
      else
        e.json ||
          H.call(r, i) ||
          !H.call(t, i) ||
          ((e.line = s || e.line),
          (e.lineStart = a || e.lineStart),
          (e.position = c || e.position),
          ue(e, "duplicated mapping key")),
          "__proto__" === i
            ? Object.defineProperty(t, i, {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: o,
              })
            : (t[i] = o),
          delete r[i];
      return t;
    }
    function ge(e) {
      var t;
      10 === (t = e.input.charCodeAt(e.position))
        ? e.position++
        : 13 === t
        ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++)
        : ue(e, "a line break is expected"),
        (e.line += 1),
        (e.lineStart = e.position),
        (e.firstTabInLine = -1);
    }
    function ve(e, t, r) {
      for (var n = 0, i = e.input.charCodeAt(e.position); 0 !== i; ) {
        for (; Z(i); )
          9 === i && -1 === e.firstTabInLine && (e.firstTabInLine = e.position),
            (i = e.input.charCodeAt(++e.position));
        if (t && 35 === i)
          do {
            i = e.input.charCodeAt(++e.position);
          } while (10 !== i && 13 !== i && 0 !== i);
        if (!K(i)) break;
        for (
          ge(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0;
          32 === i;

        )
          e.lineIndent++, (i = e.input.charCodeAt(++e.position));
      }
      return (
        -1 !== r &&
          0 !== n &&
          e.lineIndent < r &&
          he(e, "deficient indentation"),
        n
      );
    }
    function ye(e) {
      var t,
        r = e.position;
      return !(
        (45 !== (t = e.input.charCodeAt(r)) && 46 !== t) ||
        t !== e.input.charCodeAt(r + 1) ||
        t !== e.input.charCodeAt(r + 2) ||
        ((r += 3), 0 !== (t = e.input.charCodeAt(r)) && !ee(t))
      );
    }
    function we(e, t) {
      1 === t
        ? (e.result += " ")
        : t > 1 && (e.result += i.repeat("\n", t - 1));
    }
    function be(e, t) {
      var r,
        n,
        i = e.tag,
        o = e.anchor,
        s = [],
        a = !1;
      if (-1 !== e.firstTabInLine) return !1;
      for (
        null !== e.anchor && (e.anchorMap[e.anchor] = s),
          n = e.input.charCodeAt(e.position);
        0 !== n &&
        (-1 !== e.firstTabInLine &&
          ((e.position = e.firstTabInLine),
          ue(e, "tab characters must not be used in indentation")),
        45 === n) &&
        ee(e.input.charCodeAt(e.position + 1));

      )
        if (((a = !0), e.position++, ve(e, !0, -1) && e.lineIndent <= t))
          s.push(null), (n = e.input.charCodeAt(e.position));
        else if (
          ((r = e.line),
          Ae(e, t, 3, !1, !0),
          s.push(e.result),
          ve(e, !0, -1),
          (n = e.input.charCodeAt(e.position)),
          (e.line === r || e.lineIndent > t) && 0 !== n)
        )
          ue(e, "bad indentation of a sequence entry");
        else if (e.lineIndent < t) break;
      return (
        !!a &&
        ((e.tag = i), (e.anchor = o), (e.kind = "sequence"), (e.result = s), !0)
      );
    }
    function Ee(e) {
      var t,
        r,
        n,
        i,
        o = !1,
        s = !1;
      if (33 !== (i = e.input.charCodeAt(e.position))) return !1;
      if (
        (null !== e.tag && ue(e, "duplication of a tag property"),
        60 === (i = e.input.charCodeAt(++e.position))
          ? ((o = !0), (i = e.input.charCodeAt(++e.position)))
          : 33 === i
          ? ((s = !0), (r = "!!"), (i = e.input.charCodeAt(++e.position)))
          : (r = "!"),
        (t = e.position),
        o)
      ) {
        do {
          i = e.input.charCodeAt(++e.position);
        } while (0 !== i && 62 !== i);
        e.position < e.length
          ? ((n = e.input.slice(t, e.position)),
            (i = e.input.charCodeAt(++e.position)))
          : ue(e, "unexpected end of the stream within a verbatim tag");
      } else {
        for (; 0 !== i && !ee(i); )
          33 === i &&
            (s
              ? ue(e, "tag suffix cannot contain exclamation marks")
              : ((r = e.input.slice(t - 1, e.position + 1)),
                X.test(r) ||
                  ue(e, "named tag handle cannot contain such characters"),
                (s = !0),
                (t = e.position + 1))),
            (i = e.input.charCodeAt(++e.position));
        (n = e.input.slice(t, e.position)),
          Y.test(n) &&
            ue(e, "tag suffix cannot contain flow indicator characters");
      }
      n && !Q.test(n) && ue(e, "tag name cannot contain such characters: " + n);
      try {
        n = decodeURIComponent(n);
      } catch (t) {
        ue(e, "tag name is malformed: " + n);
      }
      return (
        o
          ? (e.tag = n)
          : H.call(e.tagMap, r)
          ? (e.tag = e.tagMap[r] + n)
          : "!" === r
          ? (e.tag = "!" + n)
          : "!!" === r
          ? (e.tag = "tag:yaml.org,2002:" + n)
          : ue(e, 'undeclared tag handle "' + r + '"'),
        !0
      );
    }
    function _e(e) {
      var t, r;
      if (38 !== (r = e.input.charCodeAt(e.position))) return !1;
      for (
        null !== e.anchor && ue(e, "duplication of an anchor property"),
          r = e.input.charCodeAt(++e.position),
          t = e.position;
        0 !== r && !ee(r) && !te(r);

      )
        r = e.input.charCodeAt(++e.position);
      return (
        e.position === t &&
          ue(e, "name of an anchor node must contain at least one character"),
        (e.anchor = e.input.slice(t, e.position)),
        !0
      );
    }
    function Ae(e, t, r, n, o) {
      var s,
        a,
        c,
        l,
        u,
        h,
        f,
        d,
        p,
        m = 1,
        g = !1,
        v = !1;
      if (
        (null !== e.listener && e.listener("open", e),
        (e.tag = null),
        (e.anchor = null),
        (e.kind = null),
        (e.result = null),
        (s = a = c = 4 === r || 3 === r),
        n &&
          ve(e, !0, -1) &&
          ((g = !0),
          e.lineIndent > t
            ? (m = 1)
            : e.lineIndent === t
            ? (m = 0)
            : e.lineIndent < t && (m = -1)),
        1 === m)
      )
        for (; Ee(e) || _e(e); )
          ve(e, !0, -1)
            ? ((g = !0),
              (c = s),
              e.lineIndent > t
                ? (m = 1)
                : e.lineIndent === t
                ? (m = 0)
                : e.lineIndent < t && (m = -1))
            : (c = !1);
      if (
        (c && (c = g || o),
        (1 !== m && 4 !== r) ||
          ((d = 1 === r || 2 === r ? t : t + 1),
          (p = e.position - e.lineStart),
          1 === m
            ? (c &&
                (be(e, p) ||
                  (function (e, t, r) {
                    var n,
                      i,
                      o,
                      s,
                      a,
                      c,
                      l,
                      u = e.tag,
                      h = e.anchor,
                      f = {},
                      d = Object.create(null),
                      p = null,
                      m = null,
                      g = null,
                      v = !1,
                      y = !1;
                    if (-1 !== e.firstTabInLine) return !1;
                    for (
                      null !== e.anchor && (e.anchorMap[e.anchor] = f),
                        l = e.input.charCodeAt(e.position);
                      0 !== l;

                    ) {
                      if (
                        (v ||
                          -1 === e.firstTabInLine ||
                          ((e.position = e.firstTabInLine),
                          ue(
                            e,
                            "tab characters must not be used in indentation"
                          )),
                        (n = e.input.charCodeAt(e.position + 1)),
                        (o = e.line),
                        (63 !== l && 58 !== l) || !ee(n))
                      ) {
                        if (
                          ((s = e.line),
                          (a = e.lineStart),
                          (c = e.position),
                          !Ae(e, r, 2, !1, !0))
                        )
                          break;
                        if (e.line === o) {
                          for (l = e.input.charCodeAt(e.position); Z(l); )
                            l = e.input.charCodeAt(++e.position);
                          if (58 === l)
                            ee((l = e.input.charCodeAt(++e.position))) ||
                              ue(
                                e,
                                "a whitespace character is expected after the key-value separator within a block mapping"
                              ),
                              v &&
                                (me(e, f, d, p, m, null, s, a, c),
                                (p = m = g = null)),
                              (y = !0),
                              (v = !1),
                              (i = !1),
                              (p = e.tag),
                              (m = e.result);
                          else {
                            if (!y) return (e.tag = u), (e.anchor = h), !0;
                            ue(
                              e,
                              "can not read an implicit mapping pair; a colon is missed"
                            );
                          }
                        } else {
                          if (!y) return (e.tag = u), (e.anchor = h), !0;
                          ue(
                            e,
                            "can not read a block mapping entry; a multiline key may not be an implicit key"
                          );
                        }
                      } else
                        63 === l
                          ? (v &&
                              (me(e, f, d, p, m, null, s, a, c),
                              (p = m = g = null)),
                            (y = !0),
                            (v = !0),
                            (i = !0))
                          : v
                          ? ((v = !1), (i = !0))
                          : ue(
                              e,
                              "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
                            ),
                          (e.position += 1),
                          (l = n);
                      if (
                        ((e.line === o || e.lineIndent > t) &&
                          (v &&
                            ((s = e.line), (a = e.lineStart), (c = e.position)),
                          Ae(e, t, 4, !0, i) &&
                            (v ? (m = e.result) : (g = e.result)),
                          v ||
                            (me(e, f, d, p, m, g, s, a, c), (p = m = g = null)),
                          ve(e, !0, -1),
                          (l = e.input.charCodeAt(e.position))),
                        (e.line === o || e.lineIndent > t) && 0 !== l)
                      )
                        ue(e, "bad indentation of a mapping entry");
                      else if (e.lineIndent < t) break;
                    }
                    return (
                      v && me(e, f, d, p, m, null, s, a, c),
                      y &&
                        ((e.tag = u),
                        (e.anchor = h),
                        (e.kind = "mapping"),
                        (e.result = f)),
                      y
                    );
                  })(e, p, d))) ||
              (function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  s,
                  a,
                  c,
                  l,
                  u,
                  h,
                  f,
                  d,
                  p = !0,
                  m = e.tag,
                  g = e.anchor,
                  v = Object.create(null);
                if (91 === (d = e.input.charCodeAt(e.position)))
                  (s = 93), (l = !1), (o = []);
                else {
                  if (123 !== d) return !1;
                  (s = 125), (l = !0), (o = {});
                }
                for (
                  null !== e.anchor && (e.anchorMap[e.anchor] = o),
                    d = e.input.charCodeAt(++e.position);
                  0 !== d;

                ) {
                  if (
                    (ve(e, !0, t), (d = e.input.charCodeAt(e.position)) === s)
                  )
                    return (
                      e.position++,
                      (e.tag = m),
                      (e.anchor = g),
                      (e.kind = l ? "mapping" : "sequence"),
                      (e.result = o),
                      !0
                    );
                  p
                    ? 44 === d &&
                      ue(e, "expected the node content, but found ','")
                    : ue(e, "missed comma between flow collection entries"),
                    (f = null),
                    (a = c = !1),
                    63 === d &&
                      ee(e.input.charCodeAt(e.position + 1)) &&
                      ((a = c = !0), e.position++, ve(e, !0, t)),
                    (r = e.line),
                    (n = e.lineStart),
                    (i = e.position),
                    Ae(e, t, 1, !1, !0),
                    (h = e.tag),
                    (u = e.result),
                    ve(e, !0, t),
                    (d = e.input.charCodeAt(e.position)),
                    (!c && e.line !== r) ||
                      58 !== d ||
                      ((a = !0),
                      (d = e.input.charCodeAt(++e.position)),
                      ve(e, !0, t),
                      Ae(e, t, 1, !1, !0),
                      (f = e.result)),
                    l
                      ? me(e, o, v, h, u, f, r, n, i)
                      : a
                      ? o.push(me(e, null, v, h, u, f, r, n, i))
                      : o.push(u),
                    ve(e, !0, t),
                    44 === (d = e.input.charCodeAt(e.position))
                      ? ((p = !0), (d = e.input.charCodeAt(++e.position)))
                      : (p = !1);
                }
                ue(e, "unexpected end of the stream within a flow collection");
              })(e, d)
              ? (v = !0)
              : ((a &&
                  (function (e, t) {
                    var r,
                      n,
                      o,
                      s,
                      a,
                      c = 1,
                      l = !1,
                      u = !1,
                      h = t,
                      f = 0,
                      d = !1;
                    if (124 === (s = e.input.charCodeAt(e.position))) n = !1;
                    else {
                      if (62 !== s) return !1;
                      n = !0;
                    }
                    for (e.kind = "scalar", e.result = ""; 0 !== s; )
                      if (
                        43 === (s = e.input.charCodeAt(++e.position)) ||
                        45 === s
                      )
                        1 === c
                          ? (c = 43 === s ? 3 : 2)
                          : ue(e, "repeat of a chomping mode identifier");
                      else {
                        if (
                          !((o = 48 <= (a = s) && a <= 57 ? a - 48 : -1) >= 0)
                        )
                          break;
                        0 === o
                          ? ue(
                              e,
                              "bad explicit indentation width of a block scalar; it cannot be less than one"
                            )
                          : u
                          ? ue(e, "repeat of an indentation width identifier")
                          : ((h = t + o - 1), (u = !0));
                      }
                    if (Z(s)) {
                      do {
                        s = e.input.charCodeAt(++e.position);
                      } while (Z(s));
                      if (35 === s)
                        do {
                          s = e.input.charCodeAt(++e.position);
                        } while (!K(s) && 0 !== s);
                    }
                    for (; 0 !== s; ) {
                      for (
                        ge(e),
                          e.lineIndent = 0,
                          s = e.input.charCodeAt(e.position);
                        (!u || e.lineIndent < h) && 32 === s;

                      )
                        e.lineIndent++, (s = e.input.charCodeAt(++e.position));
                      if ((!u && e.lineIndent > h && (h = e.lineIndent), K(s)))
                        f++;
                      else {
                        if (e.lineIndent < h) {
                          3 === c
                            ? (e.result += i.repeat("\n", l ? 1 + f : f))
                            : 1 === c && l && (e.result += "\n");
                          break;
                        }
                        for (
                          n
                            ? Z(s)
                              ? ((d = !0),
                                (e.result += i.repeat("\n", l ? 1 + f : f)))
                              : d
                              ? ((d = !1), (e.result += i.repeat("\n", f + 1)))
                              : 0 === f
                              ? l && (e.result += " ")
                              : (e.result += i.repeat("\n", f))
                            : (e.result += i.repeat("\n", l ? 1 + f : f)),
                            l = !0,
                            u = !0,
                            f = 0,
                            r = e.position;
                          !K(s) && 0 !== s;

                        )
                          s = e.input.charCodeAt(++e.position);
                        de(e, r, e.position, !1);
                      }
                    }
                    return !0;
                  })(e, d)) ||
                (function (e, t) {
                  var r, n, i;
                  if (39 !== (r = e.input.charCodeAt(e.position))) return !1;
                  for (
                    e.kind = "scalar",
                      e.result = "",
                      e.position++,
                      n = i = e.position;
                    0 !== (r = e.input.charCodeAt(e.position));

                  )
                    if (39 === r) {
                      if (
                        (de(e, n, e.position, !0),
                        39 !== (r = e.input.charCodeAt(++e.position)))
                      )
                        return !0;
                      (n = e.position), e.position++, (i = e.position);
                    } else
                      K(r)
                        ? (de(e, n, i, !0),
                          we(e, ve(e, !1, t)),
                          (n = i = e.position))
                        : e.position === e.lineStart && ye(e)
                        ? ue(
                            e,
                            "unexpected end of the document within a single quoted scalar"
                          )
                        : (e.position++, (i = e.position));
                  ue(
                    e,
                    "unexpected end of the stream within a single quoted scalar"
                  );
                })(e, d) ||
                (function (e, t) {
                  var r, n, i, o, s, a, c;
                  if (34 !== (a = e.input.charCodeAt(e.position))) return !1;
                  for (
                    e.kind = "scalar",
                      e.result = "",
                      e.position++,
                      r = n = e.position;
                    0 !== (a = e.input.charCodeAt(e.position));

                  ) {
                    if (34 === a)
                      return de(e, r, e.position, !0), e.position++, !0;
                    if (92 === a) {
                      if (
                        (de(e, r, e.position, !0),
                        K((a = e.input.charCodeAt(++e.position))))
                      )
                        ve(e, !1, t);
                      else if (a < 256 && oe[a])
                        (e.result += se[a]), e.position++;
                      else if (
                        (s =
                          120 === (c = a)
                            ? 2
                            : 117 === c
                            ? 4
                            : 85 === c
                            ? 8
                            : 0) > 0
                      ) {
                        for (i = s, o = 0; i > 0; i--)
                          (s = re((a = e.input.charCodeAt(++e.position)))) >= 0
                            ? (o = (o << 4) + s)
                            : ue(e, "expected hexadecimal character");
                        (e.result += ie(o)), e.position++;
                      } else ue(e, "unknown escape sequence");
                      r = n = e.position;
                    } else
                      K(a)
                        ? (de(e, r, n, !0),
                          we(e, ve(e, !1, t)),
                          (r = n = e.position))
                        : e.position === e.lineStart && ye(e)
                        ? ue(
                            e,
                            "unexpected end of the document within a double quoted scalar"
                          )
                        : (e.position++, (n = e.position));
                  }
                  ue(
                    e,
                    "unexpected end of the stream within a double quoted scalar"
                  );
                })(e, d)
                  ? (v = !0)
                  : !(function (e) {
                      var t, r, n;
                      if (42 !== (n = e.input.charCodeAt(e.position)))
                        return !1;
                      for (
                        n = e.input.charCodeAt(++e.position), t = e.position;
                        0 !== n && !ee(n) && !te(n);

                      )
                        n = e.input.charCodeAt(++e.position);
                      return (
                        e.position === t &&
                          ue(
                            e,
                            "name of an alias node must contain at least one character"
                          ),
                        (r = e.input.slice(t, e.position)),
                        H.call(e.anchorMap, r) ||
                          ue(e, 'unidentified alias "' + r + '"'),
                        (e.result = e.anchorMap[r]),
                        ve(e, !0, -1),
                        !0
                      );
                    })(e)
                  ? (function (e, t, r) {
                      var n,
                        i,
                        o,
                        s,
                        a,
                        c,
                        l,
                        u,
                        h = e.kind,
                        f = e.result;
                      if (
                        ee((u = e.input.charCodeAt(e.position))) ||
                        te(u) ||
                        35 === u ||
                        38 === u ||
                        42 === u ||
                        33 === u ||
                        124 === u ||
                        62 === u ||
                        39 === u ||
                        34 === u ||
                        37 === u ||
                        64 === u ||
                        96 === u
                      )
                        return !1;
                      if (
                        (63 === u || 45 === u) &&
                        (ee((n = e.input.charCodeAt(e.position + 1))) ||
                          (r && te(n)))
                      )
                        return !1;
                      for (
                        e.kind = "scalar",
                          e.result = "",
                          i = o = e.position,
                          s = !1;
                        0 !== u;

                      ) {
                        if (58 === u) {
                          if (
                            ee((n = e.input.charCodeAt(e.position + 1))) ||
                            (r && te(n))
                          )
                            break;
                        } else if (35 === u) {
                          if (ee(e.input.charCodeAt(e.position - 1))) break;
                        } else {
                          if (
                            (e.position === e.lineStart && ye(e)) ||
                            (r && te(u))
                          )
                            break;
                          if (K(u)) {
                            if (
                              ((a = e.line),
                              (c = e.lineStart),
                              (l = e.lineIndent),
                              ve(e, !1, -1),
                              e.lineIndent >= t)
                            ) {
                              (s = !0), (u = e.input.charCodeAt(e.position));
                              continue;
                            }
                            (e.position = o),
                              (e.line = a),
                              (e.lineStart = c),
                              (e.lineIndent = l);
                            break;
                          }
                        }
                        s &&
                          (de(e, i, o, !1),
                          we(e, e.line - a),
                          (i = o = e.position),
                          (s = !1)),
                          Z(u) || (o = e.position + 1),
                          (u = e.input.charCodeAt(++e.position));
                      }
                      return (
                        de(e, i, o, !1),
                        !!e.result || ((e.kind = h), (e.result = f), !1)
                      );
                    })(e, d, 1 === r) &&
                    ((v = !0), null === e.tag && (e.tag = "?"))
                  : ((v = !0),
                    (null === e.tag && null === e.anchor) ||
                      ue(e, "alias node should not have any properties")),
                null !== e.anchor && (e.anchorMap[e.anchor] = e.result))
            : 0 === m && (v = c && be(e, p))),
        null === e.tag)
      )
        null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
      else if ("?" === e.tag) {
        for (
          null !== e.result &&
            "scalar" !== e.kind &&
            ue(
              e,
              'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
                e.kind +
                '"'
            ),
            l = 0,
            u = e.implicitTypes.length;
          l < u;
          l += 1
        )
          if ((f = e.implicitTypes[l]).resolve(e.result)) {
            (e.result = f.construct(e.result)),
              (e.tag = f.tag),
              null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
            break;
          }
      } else if ("!" !== e.tag) {
        if (H.call(e.typeMap[e.kind || "fallback"], e.tag))
          f = e.typeMap[e.kind || "fallback"][e.tag];
        else
          for (
            f = null,
              l = 0,
              u = (h = e.typeMap.multi[e.kind || "fallback"]).length;
            l < u;
            l += 1
          )
            if (e.tag.slice(0, h[l].tag.length) === h[l].tag) {
              f = h[l];
              break;
            }
        f || ue(e, "unknown tag !<" + e.tag + ">"),
          null !== e.result &&
            f.kind !== e.kind &&
            ue(
              e,
              "unacceptable node kind for !<" +
                e.tag +
                '> tag; it should be "' +
                f.kind +
                '", not "' +
                e.kind +
                '"'
            ),
          f.resolve(e.result, e.tag)
            ? ((e.result = f.construct(e.result, e.tag)),
              null !== e.anchor && (e.anchorMap[e.anchor] = e.result))
            : ue(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
      }
      return (
        null !== e.listener && e.listener("close", e),
        null !== e.tag || null !== e.anchor || v
      );
    }
    function Se(e) {
      var t,
        r,
        n,
        i,
        o = e.position,
        s = !1;
      for (
        e.version = null,
          e.checkLineBreaks = e.legacy,
          e.tagMap = Object.create(null),
          e.anchorMap = Object.create(null);
        0 !== (i = e.input.charCodeAt(e.position)) &&
        (ve(e, !0, -1),
        (i = e.input.charCodeAt(e.position)),
        !(e.lineIndent > 0 || 37 !== i));

      ) {
        for (
          s = !0, i = e.input.charCodeAt(++e.position), t = e.position;
          0 !== i && !ee(i);

        )
          i = e.input.charCodeAt(++e.position);
        for (
          n = [],
            (r = e.input.slice(t, e.position)).length < 1 &&
              ue(
                e,
                "directive name must not be less than one character in length"
              );
          0 !== i;

        ) {
          for (; Z(i); ) i = e.input.charCodeAt(++e.position);
          if (35 === i) {
            do {
              i = e.input.charCodeAt(++e.position);
            } while (0 !== i && !K(i));
            break;
          }
          if (K(i)) break;
          for (t = e.position; 0 !== i && !ee(i); )
            i = e.input.charCodeAt(++e.position);
          n.push(e.input.slice(t, e.position));
        }
        0 !== i && ge(e),
          H.call(fe, r)
            ? fe[r](e, r, n)
            : he(e, 'unknown document directive "' + r + '"');
      }
      ve(e, !0, -1),
        0 === e.lineIndent &&
        45 === e.input.charCodeAt(e.position) &&
        45 === e.input.charCodeAt(e.position + 1) &&
        45 === e.input.charCodeAt(e.position + 2)
          ? ((e.position += 3), ve(e, !0, -1))
          : s && ue(e, "directives end mark is expected"),
        Ae(e, e.lineIndent - 1, 4, !1, !0),
        ve(e, !0, -1),
        e.checkLineBreaks &&
          V.test(e.input.slice(o, e.position)) &&
          he(e, "non-ASCII line breaks are interpreted as content"),
        e.documents.push(e.result),
        e.position === e.lineStart && ye(e)
          ? 46 === e.input.charCodeAt(e.position) &&
            ((e.position += 3), ve(e, !0, -1))
          : e.position < e.length - 1 &&
            ue(e, "end of the stream or a document separator is expected");
    }
    function Oe(e, t) {
      (t = t || {}),
        0 !== (e = String(e)).length &&
          (10 !== e.charCodeAt(e.length - 1) &&
            13 !== e.charCodeAt(e.length - 1) &&
            (e += "\n"),
          65279 === e.charCodeAt(0) && (e = e.slice(1)));
      var r = new ce(e, t),
        n = e.indexOf("\0");
      for (
        -1 !== n &&
          ((r.position = n), ue(r, "null byte is not allowed in input")),
          r.input += "\0";
        32 === r.input.charCodeAt(r.position);

      )
        (r.lineIndent += 1), (r.position += 1);
      for (; r.position < r.length - 1; ) Se(r);
      return r.documents;
    }
    var Ce = {
        loadAll: function (e, t, r) {
          null !== t &&
            "object" == typeof t &&
            void 0 === r &&
            ((r = t), (t = null));
          var n = Oe(e, r);
          if ("function" != typeof t) return n;
          for (var i = 0, o = n.length; i < o; i += 1) t(n[i]);
        },
        load: function (e, t) {
          var r = Oe(e, t);
          if (0 !== r.length) {
            if (1 === r.length) return r[0];
            throw new a(
              "expected a single document in the stream, but found more"
            );
          }
        },
      },
      Ie = Object.prototype.toString,
      ke = Object.prototype.hasOwnProperty,
      Te = {
        0: "\\0",
        7: "\\a",
        8: "\\b",
        9: "\\t",
        10: "\\n",
        11: "\\v",
        12: "\\f",
        13: "\\r",
        27: "\\e",
        34: '\\"',
        92: "\\\\",
        133: "\\N",
        160: "\\_",
        8232: "\\L",
        8233: "\\P",
      },
      xe = [
        "y",
        "Y",
        "yes",
        "Yes",
        "YES",
        "on",
        "On",
        "ON",
        "n",
        "N",
        "no",
        "No",
        "NO",
        "off",
        "Off",
        "OFF",
      ],
      Re = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    function Ne(e) {
      var t, r, n;
      if (((t = e.toString(16).toUpperCase()), e <= 255)) (r = "x"), (n = 2);
      else if (e <= 65535) (r = "u"), (n = 4);
      else {
        if (!(e <= 4294967295))
          throw new a(
            "code point within a string may not be greater than 0xFFFFFFFF"
          );
        (r = "U"), (n = 8);
      }
      return "\\" + r + i.repeat("0", n - t.length) + t;
    }
    function De(e) {
      (this.schema = e.schema || q),
        (this.indent = Math.max(1, e.indent || 2)),
        (this.noArrayIndent = e.noArrayIndent || !1),
        (this.skipInvalid = e.skipInvalid || !1),
        (this.flowLevel = i.isNothing(e.flowLevel) ? -1 : e.flowLevel),
        (this.styleMap = (function (e, t) {
          var r, n, i, o, s, a, c;
          if (null === t) return {};
          for (r = {}, i = 0, o = (n = Object.keys(t)).length; i < o; i += 1)
            (s = n[i]),
              (a = String(t[s])),
              "!!" === s.slice(0, 2) && (s = "tag:yaml.org,2002:" + s.slice(2)),
              (c = e.compiledTypeMap.fallback[s]) &&
                ke.call(c.styleAliases, a) &&
                (a = c.styleAliases[a]),
              (r[s] = a);
          return r;
        })(this.schema, e.styles || null)),
        (this.sortKeys = e.sortKeys || !1),
        (this.lineWidth = e.lineWidth || 80),
        (this.noRefs = e.noRefs || !1),
        (this.noCompatMode = e.noCompatMode || !1),
        (this.condenseFlow = e.condenseFlow || !1),
        (this.quotingType = '"' === e.quotingType ? 2 : 1),
        (this.forceQuotes = e.forceQuotes || !1),
        (this.replacer = "function" == typeof e.replacer ? e.replacer : null),
        (this.implicitTypes = this.schema.compiledImplicit),
        (this.explicitTypes = this.schema.compiledExplicit),
        (this.tag = null),
        (this.result = ""),
        (this.duplicates = []),
        (this.usedDuplicates = null);
    }
    function Pe(e, t) {
      for (
        var r, n = i.repeat(" ", t), o = 0, s = -1, a = "", c = e.length;
        o < c;

      )
        -1 === (s = e.indexOf("\n", o))
          ? ((r = e.slice(o)), (o = c))
          : ((r = e.slice(o, s + 1)), (o = s + 1)),
          r.length && "\n" !== r && (a += n),
          (a += r);
      return a;
    }
    function Le(e, t) {
      return "\n" + i.repeat(" ", e.indent * t);
    }
    function Fe(e) {
      return 32 === e || 9 === e;
    }
    function Ue(e) {
      return (
        (32 <= e && e <= 126) ||
        (161 <= e && e <= 55295 && 8232 !== e && 8233 !== e) ||
        (57344 <= e && e <= 65533 && 65279 !== e) ||
        (65536 <= e && e <= 1114111)
      );
    }
    function je(e) {
      return Ue(e) && 65279 !== e && 13 !== e && 10 !== e;
    }
    function Be(e, t, r) {
      var n = je(e),
        i = n && !Fe(e);
      return (
        ((r
          ? n
          : n && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) &&
          35 !== e &&
          !(58 === t && !i)) ||
        (je(t) && !Fe(t) && 35 === e) ||
        (58 === t && i)
      );
    }
    function Me(e, t) {
      var r,
        n = e.charCodeAt(t);
      return n >= 55296 &&
        n <= 56319 &&
        t + 1 < e.length &&
        (r = e.charCodeAt(t + 1)) >= 56320 &&
        r <= 57343
        ? 1024 * (n - 55296) + r - 56320 + 65536
        : n;
    }
    function $e(e) {
      return /^\n* /.test(e);
    }
    function ze(e, t, r, n, i, o, s, a) {
      var c,
        l,
        u = 0,
        h = null,
        f = !1,
        d = !1,
        p = -1 !== n,
        m = -1,
        g =
          Ue((l = Me(e, 0))) &&
          65279 !== l &&
          !Fe(l) &&
          45 !== l &&
          63 !== l &&
          58 !== l &&
          44 !== l &&
          91 !== l &&
          93 !== l &&
          123 !== l &&
          125 !== l &&
          35 !== l &&
          38 !== l &&
          42 !== l &&
          33 !== l &&
          124 !== l &&
          61 !== l &&
          62 !== l &&
          39 !== l &&
          34 !== l &&
          37 !== l &&
          64 !== l &&
          96 !== l &&
          (function (e) {
            return !Fe(e) && 58 !== e;
          })(Me(e, e.length - 1));
      if (t || s)
        for (c = 0; c < e.length; u >= 65536 ? (c += 2) : c++) {
          if (!Ue((u = Me(e, c)))) return 5;
          (g = g && Be(u, h, a)), (h = u);
        }
      else {
        for (c = 0; c < e.length; u >= 65536 ? (c += 2) : c++) {
          if (10 === (u = Me(e, c)))
            (f = !0),
              p && ((d = d || (c - m - 1 > n && " " !== e[m + 1])), (m = c));
          else if (!Ue(u)) return 5;
          (g = g && Be(u, h, a)), (h = u);
        }
        d = d || (p && c - m - 1 > n && " " !== e[m + 1]);
      }
      return f || d
        ? r > 9 && $e(e)
          ? 5
          : s
          ? 2 === o
            ? 5
            : 2
          : d
          ? 4
          : 3
        : !g || s || i(e)
        ? 2 === o
          ? 5
          : 2
        : 1;
    }
    function Ge(e, t, r, n, i) {
      e.dump = (function () {
        if (0 === t.length) return 2 === e.quotingType ? '""' : "''";
        if (!e.noCompatMode && (-1 !== xe.indexOf(t) || Re.test(t)))
          return 2 === e.quotingType ? '"' + t + '"' : "'" + t + "'";
        var o = e.indent * Math.max(1, r),
          s =
            -1 === e.lineWidth
              ? -1
              : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o),
          c = n || (e.flowLevel > -1 && r >= e.flowLevel);
        switch (
          ze(
            t,
            c,
            e.indent,
            s,
            function (t) {
              return (function (e, t) {
                var r, n;
                for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
                  if (e.implicitTypes[r].resolve(t)) return !0;
                return !1;
              })(e, t);
            },
            e.quotingType,
            e.forceQuotes && !n,
            i
          )
        ) {
          case 1:
            return t;
          case 2:
            return "'" + t.replace(/'/g, "''") + "'";
          case 3:
            return "|" + qe(t, e.indent) + He(Pe(t, o));
          case 4:
            return (
              ">" +
              qe(t, e.indent) +
              He(
                Pe(
                  (function (e, t) {
                    var r,
                      n,
                      i = /(\n+)([^\n]*)/g,
                      o =
                        ((a = e.indexOf("\n")),
                        (a = -1 !== a ? a : e.length),
                        (i.lastIndex = a),
                        We(e.slice(0, a), t)),
                      s = "\n" === e[0] || " " === e[0];
                    var a;
                    for (; (n = i.exec(e)); ) {
                      var c = n[1],
                        l = n[2];
                      (r = " " === l[0]),
                        (o += c + (s || r || "" === l ? "" : "\n") + We(l, t)),
                        (s = r);
                    }
                    return o;
                  })(t, s),
                  o
                )
              )
            );
          case 5:
            return (
              '"' +
              (function (e) {
                for (
                  var t, r = "", n = 0, i = 0;
                  i < e.length;
                  n >= 65536 ? (i += 2) : i++
                )
                  (n = Me(e, i)),
                    !(t = Te[n]) && Ue(n)
                      ? ((r += e[i]), n >= 65536 && (r += e[i + 1]))
                      : (r += t || Ne(n));
                return r;
              })(t) +
              '"'
            );
          default:
            throw new a("impossible error: invalid scalar style");
        }
      })();
    }
    function qe(e, t) {
      var r = $e(e) ? String(t) : "",
        n = "\n" === e[e.length - 1];
      return (
        r +
        (n && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : n ? "" : "-") +
        "\n"
      );
    }
    function He(e) {
      return "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
    }
    function We(e, t) {
      if ("" === e || " " === e[0]) return e;
      for (
        var r, n, i = / [^ ]/g, o = 0, s = 0, a = 0, c = "";
        (r = i.exec(e));

      )
        (a = r.index) - o > t &&
          ((n = s > o ? s : a), (c += "\n" + e.slice(o, n)), (o = n + 1)),
          (s = a);
      return (
        (c += "\n"),
        e.length - o > t && s > o
          ? (c += e.slice(o, s) + "\n" + e.slice(s + 1))
          : (c += e.slice(o)),
        c.slice(1)
      );
    }
    function Ve(e, t, r, n) {
      var i,
        o,
        s,
        a = "",
        c = e.tag;
      for (i = 0, o = r.length; i < o; i += 1)
        (s = r[i]),
          e.replacer && (s = e.replacer.call(r, String(i), s)),
          (Xe(e, t + 1, s, !0, !0, !1, !0) ||
            (void 0 === s && Xe(e, t + 1, null, !0, !0, !1, !0))) &&
            ((n && "" === a) || (a += Le(e, t)),
            e.dump && 10 === e.dump.charCodeAt(0) ? (a += "-") : (a += "- "),
            (a += e.dump));
      (e.tag = c), (e.dump = a || "[]");
    }
    function Ye(e, t, r) {
      var n, i, o, s, c, l;
      for (
        o = 0, s = (i = r ? e.explicitTypes : e.implicitTypes).length;
        o < s;
        o += 1
      )
        if (
          ((c = i[o]).instanceOf || c.predicate) &&
          (!c.instanceOf ||
            ("object" == typeof t && t instanceof c.instanceOf)) &&
          (!c.predicate || c.predicate(t))
        ) {
          if (
            (r
              ? c.multi && c.representName
                ? (e.tag = c.representName(t))
                : (e.tag = c.tag)
              : (e.tag = "?"),
            c.represent)
          ) {
            if (
              ((l = e.styleMap[c.tag] || c.defaultStyle),
              "[object Function]" === Ie.call(c.represent))
            )
              n = c.represent(t, l);
            else {
              if (!ke.call(c.represent, l))
                throw new a(
                  "!<" + c.tag + '> tag resolver accepts not "' + l + '" style'
                );
              n = c.represent[l](t, l);
            }
            e.dump = n;
          }
          return !0;
        }
      return !1;
    }
    function Xe(e, t, r, n, i, o, s) {
      (e.tag = null), (e.dump = r), Ye(e, r, !1) || Ye(e, r, !0);
      var c,
        l = Ie.call(e.dump),
        u = n;
      n && (n = e.flowLevel < 0 || e.flowLevel > t);
      var h,
        f,
        d = "[object Object]" === l || "[object Array]" === l;
      if (
        (d && (f = -1 !== (h = e.duplicates.indexOf(r))),
        ((null !== e.tag && "?" !== e.tag) || f || (2 !== e.indent && t > 0)) &&
          (i = !1),
        f && e.usedDuplicates[h])
      )
        e.dump = "*ref_" + h;
      else {
        if (
          (d && f && !e.usedDuplicates[h] && (e.usedDuplicates[h] = !0),
          "[object Object]" === l)
        )
          n && 0 !== Object.keys(e.dump).length
            ? (!(function (e, t, r, n) {
                var i,
                  o,
                  s,
                  c,
                  l,
                  u,
                  h = "",
                  f = e.tag,
                  d = Object.keys(r);
                if (!0 === e.sortKeys) d.sort();
                else if ("function" == typeof e.sortKeys) d.sort(e.sortKeys);
                else if (e.sortKeys)
                  throw new a("sortKeys must be a boolean or a function");
                for (i = 0, o = d.length; i < o; i += 1)
                  (u = ""),
                    (n && "" === h) || (u += Le(e, t)),
                    (c = r[(s = d[i])]),
                    e.replacer && (c = e.replacer.call(r, s, c)),
                    Xe(e, t + 1, s, !0, !0, !0) &&
                      ((l =
                        (null !== e.tag && "?" !== e.tag) ||
                        (e.dump && e.dump.length > 1024)) &&
                        (e.dump && 10 === e.dump.charCodeAt(0)
                          ? (u += "?")
                          : (u += "? ")),
                      (u += e.dump),
                      l && (u += Le(e, t)),
                      Xe(e, t + 1, c, !0, l) &&
                        (e.dump && 10 === e.dump.charCodeAt(0)
                          ? (u += ":")
                          : (u += ": "),
                        (h += u += e.dump)));
                (e.tag = f), (e.dump = h || "{}");
              })(e, t, e.dump, i),
              f && (e.dump = "&ref_" + h + e.dump))
            : (!(function (e, t, r) {
                var n,
                  i,
                  o,
                  s,
                  a,
                  c = "",
                  l = e.tag,
                  u = Object.keys(r);
                for (n = 0, i = u.length; n < i; n += 1)
                  (a = ""),
                    "" !== c && (a += ", "),
                    e.condenseFlow && (a += '"'),
                    (s = r[(o = u[n])]),
                    e.replacer && (s = e.replacer.call(r, o, s)),
                    Xe(e, t, o, !1, !1) &&
                      (e.dump.length > 1024 && (a += "? "),
                      (a +=
                        e.dump +
                        (e.condenseFlow ? '"' : "") +
                        ":" +
                        (e.condenseFlow ? "" : " ")),
                      Xe(e, t, s, !1, !1) && (c += a += e.dump));
                (e.tag = l), (e.dump = "{" + c + "}");
              })(e, t, e.dump),
              f && (e.dump = "&ref_" + h + " " + e.dump));
        else if ("[object Array]" === l)
          n && 0 !== e.dump.length
            ? (e.noArrayIndent && !s && t > 0
                ? Ve(e, t - 1, e.dump, i)
                : Ve(e, t, e.dump, i),
              f && (e.dump = "&ref_" + h + e.dump))
            : (!(function (e, t, r) {
                var n,
                  i,
                  o,
                  s = "",
                  a = e.tag;
                for (n = 0, i = r.length; n < i; n += 1)
                  (o = r[n]),
                    e.replacer && (o = e.replacer.call(r, String(n), o)),
                    (Xe(e, t, o, !1, !1) ||
                      (void 0 === o && Xe(e, t, null, !1, !1))) &&
                      ("" !== s && (s += "," + (e.condenseFlow ? "" : " ")),
                      (s += e.dump));
                (e.tag = a), (e.dump = "[" + s + "]");
              })(e, t, e.dump),
              f && (e.dump = "&ref_" + h + " " + e.dump));
        else {
          if ("[object String]" !== l) {
            if ("[object Undefined]" === l) return !1;
            if (e.skipInvalid) return !1;
            throw new a("unacceptable kind of an object to dump " + l);
          }
          "?" !== e.tag && Ge(e, e.dump, t, o, u);
        }
        null !== e.tag &&
          "?" !== e.tag &&
          ((c = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(
            /!/g,
            "%21"
          )),
          (c =
            "!" === e.tag[0]
              ? "!" + c
              : "tag:yaml.org,2002:" === c.slice(0, 18)
              ? "!!" + c.slice(18)
              : "!<" + c + ">"),
          (e.dump = c + " " + e.dump));
      }
      return !0;
    }
    function Qe(e, t) {
      var r,
        n,
        i = [],
        o = [];
      for (
        (function e(t, r, n) {
          var i, o, s;
          if (null !== t && "object" == typeof t)
            if (-1 !== (o = r.indexOf(t))) -1 === n.indexOf(o) && n.push(o);
            else if ((r.push(t), Array.isArray(t)))
              for (o = 0, s = t.length; o < s; o += 1) e(t[o], r, n);
            else
              for (i = Object.keys(t), o = 0, s = i.length; o < s; o += 1)
                e(t[i[o]], r, n);
        })(e, i, o),
          r = 0,
          n = o.length;
        r < n;
        r += 1
      )
        t.duplicates.push(i[o[r]]);
      t.usedDuplicates = new Array(n);
    }
    function Je(e, t) {
      return function () {
        throw new Error(
          "Function yaml." +
            e +
            " is removed in js-yaml 4. Use yaml." +
            t +
            " instead, which is now safe by default."
        );
      };
    }
    var Ke = d,
      Ze = g,
      et = b,
      tt = T,
      rt = x,
      nt = q,
      it = Ce.load,
      ot = Ce.loadAll,
      st = {
        dump: function (e, t) {
          var r = new De((t = t || {}));
          r.noRefs || Qe(e, r);
          var n = e;
          return (
            r.replacer && (n = r.replacer.call({ "": n }, "", n)),
            Xe(r, 0, n, !0, !0) ? r.dump + "\n" : ""
          );
        },
      }.dump,
      at = a,
      ct = {
        binary: F,
        float: k,
        map: w,
        null: E,
        pairs: $,
        set: G,
        timestamp: D,
        bool: _,
        int: O,
        merge: P,
        omap: B,
        seq: y,
        str: v,
      },
      lt = Je("safeLoad", "load"),
      ut = Je("safeLoadAll", "loadAll"),
      ht = Je("safeDump", "dump"),
      ft = {
        Type: Ke,
        Schema: Ze,
        FAILSAFE_SCHEMA: et,
        JSON_SCHEMA: tt,
        CORE_SCHEMA: rt,
        DEFAULT_SCHEMA: nt,
        load: it,
        loadAll: ot,
        dump: st,
        YAMLException: at,
        types: ct,
        safeLoad: lt,
        safeLoadAll: ut,
        safeDump: ht,
      };
    t.default = ft;
  },
  function (e, t) {
    const r = Object.freeze({ loose: !0 }),
      n = Object.freeze({});
    e.exports = (e) => (e ? ("object" != typeof e ? r : e) : n);
  },
  function (e, t, r) {
    const n = r(7);
    e.exports = (e, t, r) => {
      const i = new n(e, r),
        o = new n(t, r);
      return i.compare(o) || i.compareBuild(o);
    };
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t, r) => n(e, t, r) < 0;
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t, r) => n(e, t, r) >= 0;
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t, r) => n(e, t, r) <= 0;
  },
  function (e, t, r) {
    const n = r(7),
      i = r(54),
      { ANY: o } = i,
      s = r(13),
      a = r(55),
      c = r(53),
      l = r(76),
      u = r(78),
      h = r(77);
    e.exports = (e, t, r, f) => {
      let d, p, m, g, v;
      switch (((e = new n(e, f)), (t = new s(t, f)), r)) {
        case ">":
          (d = c), (p = u), (m = l), (g = ">"), (v = ">=");
          break;
        case "<":
          (d = l), (p = h), (m = c), (g = "<"), (v = "<=");
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (a(e, t, f)) return !1;
      for (let r = 0; r < t.set.length; ++r) {
        const n = t.set[r];
        let s = null,
          a = null;
        if (
          (n.forEach((e) => {
            e.semver === o && (e = new i(">=0.0.0")),
              (s = s || e),
              (a = a || e),
              d(e.semver, s.semver, f)
                ? (s = e)
                : m(e.semver, a.semver, f) && (a = e);
          }),
          s.operator === g || s.operator === v)
        )
          return !1;
        if ((!a.operator || a.operator === g) && p(e, a.semver)) return !1;
        if (a.operator === v && m(e, a.semver)) return !1;
      }
      return !0;
    };
  },
  function (e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.computeOperations = t.OperationKind = void 0),
      (function (e) {
        (e[(e.COPY = 0)] = "COPY"), (e[(e.DOWNLOAD = 1)] = "DOWNLOAD");
      })((n = t.OperationKind || (t.OperationKind = {}))),
      (t.computeOperations = function (e, t, r) {
        const i = s(e.files),
          a = s(t.files);
        let c = null;
        const l = t.files[0],
          u = [],
          h = l.name,
          f = i.get(h);
        if (null == f) throw new Error(`no file ${h} in old blockmap`);
        const d = a.get(h);
        let p = 0;
        const { checksumToOffset: m, checksumToOldSize: g } = (function (
          e,
          t,
          r
        ) {
          const n = new Map(),
            i = new Map();
          let o = t;
          for (let t = 0; t < e.checksums.length; t++) {
            const s = e.checksums[t],
              a = e.sizes[t],
              c = i.get(s);
            if (void 0 === c) n.set(s, o), i.set(s, a);
            else if (null != r.debug) {
              const e =
                c === a ? "(same size)" : `(size: ${c}, this size: ${a})`;
              r.debug(
                `${s} duplicated in blockmap ${e}, it doesn't lead to broken differential downloader, just corresponding block will be skipped)`
              );
            }
            o += a;
          }
          return { checksumToOffset: n, checksumToOldSize: i };
        })(i.get(h), f.offset, r);
        let v = l.offset;
        for (let e = 0; e < d.checksums.length; v += d.sizes[e], e++) {
          const t = d.sizes[e],
            i = d.checksums[e];
          let s = m.get(i);
          null != s &&
            g.get(i) !== t &&
            (r.warn(
              `Checksum ("${i}") matches, but size differs (old: ${g.get(
                i
              )}, new: ${t})`
            ),
            (s = void 0)),
            void 0 === s
              ? (p++,
                null != c && c.kind === n.DOWNLOAD && c.end === v
                  ? (c.end += t)
                  : ((c = { kind: n.DOWNLOAD, start: v, end: v + t }),
                    o(c, u, i, e)))
              : null != c && c.kind === n.COPY && c.end === s
              ? (c.end += t)
              : ((c = { kind: n.COPY, start: s, end: s + t }), o(c, u, i, e));
        }
        return (
          p > 0 &&
            r.info(
              `File${
                "file" === l.name ? "" : " " + l.name
              } has ${p} changed blocks`
            ),
          u
        );
      });
    const i =
      "true" === process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES;
    function o(e, t, r, o) {
      if (i && 0 !== t.length) {
        const i = t[t.length - 1];
        if (i.kind === e.kind && e.start < i.end && e.start > i.start) {
          const t = [i.start, i.end, e.start, e.end].reduce((e, t) =>
            e < t ? e : t
          );
          throw new Error(
            `operation (block index: ${o}, checksum: ${r}, kind: ${
              n[e.kind]
            }) overlaps previous operation (checksum: ${r}):\nabs: ${
              i.start
            } until ${i.end} and ${e.start} until ${e.end}\nrel: ${
              i.start - t
            } until ${i.end - t} and ${e.start - t} until ${e.end - t}`
          );
        }
      }
      t.push(e);
    }
    function s(e) {
      const t = new Map();
      for (const r of e) t.set(r.name, r);
      return t;
    }
  },
  function (e, t) {
    const r = /^[0-9]+$/,
      n = (e, t) => {
        const n = r.test(e),
          i = r.test(t);
        return (
          n && i && ((e = +e), (t = +t)),
          e === t ? 0 : n && !i ? -1 : i && !n ? 1 : e < t ? -1 : 1
        );
      };
    e.exports = {
      compareIdentifiers: n,
      rcompareIdentifiers: (e, t) => n(t, e),
    };
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t, r) => 0 === n(e, t, r);
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t, r) => 0 !== n(e, t, r);
  },
  function (e, t, r) {
    const n = r(82),
      i = r(83),
      o = r(40),
      s = r(61),
      a = r(60),
      c = r(62);
    e.exports = (e, t, r, l) => {
      switch (t) {
        case "===":
          return (
            "object" == typeof e && (e = e.version),
            "object" == typeof r && (r = r.version),
            e === r
          );
        case "!==":
          return (
            "object" == typeof e && (e = e.version),
            "object" == typeof r && (r = r.version),
            e !== r
          );
        case "":
        case "=":
        case "==":
          return n(e, r, l);
        case "!=":
          return i(e, r, l);
        case ">":
          return o(e, r, l);
        case ">=":
          return s(e, r, l);
        case "<":
          return a(e, r, l);
        case "<=":
          return c(e, r, l);
        default:
          throw new TypeError("Invalid operator: " + t);
      }
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(158),
      i = Symbol("max"),
      o = Symbol("length"),
      s = Symbol("lengthCalculator"),
      a = Symbol("allowStale"),
      c = Symbol("maxAge"),
      l = Symbol("dispose"),
      u = Symbol("noDisposeOnSet"),
      h = Symbol("lruList"),
      f = Symbol("cache"),
      d = Symbol("updateAgeOnGet"),
      p = () => 1;
    const m = (e, t, r) => {
        const n = e[f].get(t);
        if (n) {
          const t = n.value;
          if (g(e, t)) {
            if ((y(e, n), !e[a])) return;
          } else r && (e[d] && (n.value.now = Date.now()), e[h].unshiftNode(n));
          return t.value;
        }
      },
      g = (e, t) => {
        if (!t || (!t.maxAge && !e[c])) return !1;
        const r = Date.now() - t.now;
        return t.maxAge ? r > t.maxAge : e[c] && r > e[c];
      },
      v = (e) => {
        if (e[o] > e[i])
          for (let t = e[h].tail; e[o] > e[i] && null !== t; ) {
            const r = t.prev;
            y(e, t), (t = r);
          }
      },
      y = (e, t) => {
        if (t) {
          const r = t.value;
          e[l] && e[l](r.key, r.value),
            (e[o] -= r.length),
            e[f].delete(r.key),
            e[h].removeNode(t);
        }
      };
    class w {
      constructor(e, t, r, n, i) {
        (this.key = e),
          (this.value = t),
          (this.length = r),
          (this.now = n),
          (this.maxAge = i || 0);
      }
    }
    const b = (e, t, r, n) => {
      let i = r.value;
      g(e, i) && (y(e, r), e[a] || (i = void 0)),
        i && t.call(n, i.value, i.key, e);
    };
    e.exports = class {
      constructor(e) {
        if (
          ("number" == typeof e && (e = { max: e }),
          e || (e = {}),
          e.max && ("number" != typeof e.max || e.max < 0))
        )
          throw new TypeError("max must be a non-negative number");
        this[i] = e.max || 1 / 0;
        const t = e.length || p;
        if (
          ((this[s] = "function" != typeof t ? p : t),
          (this[a] = e.stale || !1),
          e.maxAge && "number" != typeof e.maxAge)
        )
          throw new TypeError("maxAge must be a number");
        (this[c] = e.maxAge || 0),
          (this[l] = e.dispose),
          (this[u] = e.noDisposeOnSet || !1),
          (this[d] = e.updateAgeOnGet || !1),
          this.reset();
      }
      set max(e) {
        if ("number" != typeof e || e < 0)
          throw new TypeError("max must be a non-negative number");
        (this[i] = e || 1 / 0), v(this);
      }
      get max() {
        return this[i];
      }
      set allowStale(e) {
        this[a] = !!e;
      }
      get allowStale() {
        return this[a];
      }
      set maxAge(e) {
        if ("number" != typeof e)
          throw new TypeError("maxAge must be a non-negative number");
        (this[c] = e), v(this);
      }
      get maxAge() {
        return this[c];
      }
      set lengthCalculator(e) {
        "function" != typeof e && (e = p),
          e !== this[s] &&
            ((this[s] = e),
            (this[o] = 0),
            this[h].forEach((e) => {
              (e.length = this[s](e.value, e.key)), (this[o] += e.length);
            })),
          v(this);
      }
      get lengthCalculator() {
        return this[s];
      }
      get length() {
        return this[o];
      }
      get itemCount() {
        return this[h].length;
      }
      rforEach(e, t) {
        t = t || this;
        for (let r = this[h].tail; null !== r; ) {
          const n = r.prev;
          b(this, e, r, t), (r = n);
        }
      }
      forEach(e, t) {
        t = t || this;
        for (let r = this[h].head; null !== r; ) {
          const n = r.next;
          b(this, e, r, t), (r = n);
        }
      }
      keys() {
        return this[h].toArray().map((e) => e.key);
      }
      values() {
        return this[h].toArray().map((e) => e.value);
      }
      reset() {
        this[l] &&
          this[h] &&
          this[h].length &&
          this[h].forEach((e) => this[l](e.key, e.value)),
          (this[f] = new Map()),
          (this[h] = new n()),
          (this[o] = 0);
      }
      dump() {
        return this[h]
          .map(
            (e) =>
              !g(this, e) && {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0),
              }
          )
          .toArray()
          .filter((e) => e);
      }
      dumpLru() {
        return this[h];
      }
      set(e, t, r) {
        if ((r = r || this[c]) && "number" != typeof r)
          throw new TypeError("maxAge must be a number");
        const n = r ? Date.now() : 0,
          a = this[s](t, e);
        if (this[f].has(e)) {
          if (a > this[i]) return y(this, this[f].get(e)), !1;
          const s = this[f].get(e).value;
          return (
            this[l] && (this[u] || this[l](e, s.value)),
            (s.now = n),
            (s.maxAge = r),
            (s.value = t),
            (this[o] += a - s.length),
            (s.length = a),
            this.get(e),
            v(this),
            !0
          );
        }
        const d = new w(e, t, a, n, r);
        return d.length > this[i]
          ? (this[l] && this[l](e, t), !1)
          : ((this[o] += d.length),
            this[h].unshift(d),
            this[f].set(e, this[h].head),
            v(this),
            !0);
      }
      has(e) {
        if (!this[f].has(e)) return !1;
        const t = this[f].get(e).value;
        return !g(this, t);
      }
      get(e) {
        return m(this, e, !0);
      }
      peek(e) {
        return m(this, e, !1);
      }
      pop() {
        const e = this[h].tail;
        return e ? (y(this, e), e.value) : null;
      }
      del(e) {
        y(this, this[f].get(e));
      }
      load(e) {
        this.reset();
        const t = Date.now();
        for (let r = e.length - 1; r >= 0; r--) {
          const n = e[r],
            i = n.e || 0;
          if (0 === i) this.set(n.k, n.v);
          else {
            const e = i - t;
            e > 0 && this.set(n.k, n.v, e);
          }
        }
      }
      prune() {
        this[f].forEach((e, t) => m(this, t, !1));
      }
    };
  },
  function (e, t, r) {
    e.exports = y;
    var n = r(87),
      i = r(64),
      o = (i.Minimatch, r(26)),
      s = r(43).EventEmitter,
      a = r(0),
      c = r(33),
      l = r(65),
      u = r(177),
      h = r(88),
      f = h.setopts,
      d = h.ownProp,
      p = r(178),
      m = (r(14), h.childrenIgnored),
      g = h.isIgnored,
      v = r(90);
    function y(e, t, r) {
      if (
        ("function" == typeof t && ((r = t), (t = {})), t || (t = {}), t.sync)
      ) {
        if (r) throw new TypeError("callback provided to sync glob");
        return u(e, t);
      }
      return new b(e, t, r);
    }
    y.sync = u;
    var w = (y.GlobSync = u.GlobSync);
    function b(e, t, r) {
      if (("function" == typeof t && ((r = t), (t = null)), t && t.sync)) {
        if (r) throw new TypeError("callback provided to sync glob");
        return new w(e, t);
      }
      if (!(this instanceof b)) return new b(e, t, r);
      f(this, e, t), (this._didRealPath = !1);
      var n = this.minimatch.set.length;
      (this.matches = new Array(n)),
        "function" == typeof r &&
          ((r = v(r)),
          this.on("error", r),
          this.on("end", function (e) {
            r(null, e);
          }));
      var i = this;
      if (
        ((this._processing = 0),
        (this._emitQueue = []),
        (this._processQueue = []),
        (this.paused = !1),
        this.noprocess)
      )
        return this;
      if (0 === n) return s();
      for (var o = 0; o < n; o++)
        this._process(this.minimatch.set[o], o, !1, s);
      function s() {
        --i._processing, i._processing <= 0 && i._finish();
      }
    }
    (y.glob = y),
      (y.hasMagic = function (e, t) {
        var r = (function (e, t) {
          if (null === t || "object" != typeof t) return e;
          for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
          return e;
        })({}, t);
        r.noprocess = !0;
        var n = new b(e, r).minimatch.set;
        if (!e) return !1;
        if (n.length > 1) return !0;
        for (var i = 0; i < n[0].length; i++)
          if ("string" != typeof n[0][i]) return !0;
        return !1;
      }),
      (y.Glob = b),
      o(b, s),
      (b.prototype._finish = function () {
        if ((c(this instanceof b), !this.aborted)) {
          if (this.realpath && !this._didRealpath) return this._realpath();
          h.finish(this), this.emit("end", this.found);
        }
      }),
      (b.prototype._realpath = function () {
        if (!this._didRealpath) {
          this._didRealpath = !0;
          var e = this.matches.length;
          if (0 === e) return this._finish();
          for (var t = this, r = 0; r < this.matches.length; r++)
            this._realpathSet(r, n);
        }
        function n() {
          0 == --e && t._finish();
        }
      }),
      (b.prototype._realpathSet = function (e, t) {
        var r = this.matches[e];
        if (!r) return t();
        var i = Object.keys(r),
          o = this,
          s = i.length;
        if (0 === s) return t();
        var a = (this.matches[e] = Object.create(null));
        i.forEach(function (r, i) {
          (r = o._makeAbs(r)),
            n.realpath(r, o.realpathCache, function (n, i) {
              n
                ? "stat" === n.syscall
                  ? (a[r] = !0)
                  : o.emit("error", n)
                : (a[i] = !0),
                0 == --s && ((o.matches[e] = a), t());
            });
        });
      }),
      (b.prototype._mark = function (e) {
        return h.mark(this, e);
      }),
      (b.prototype._makeAbs = function (e) {
        return h.makeAbs(this, e);
      }),
      (b.prototype.abort = function () {
        (this.aborted = !0), this.emit("abort");
      }),
      (b.prototype.pause = function () {
        this.paused || ((this.paused = !0), this.emit("pause"));
      }),
      (b.prototype.resume = function () {
        if (this.paused) {
          if (
            (this.emit("resume"), (this.paused = !1), this._emitQueue.length)
          ) {
            var e = this._emitQueue.slice(0);
            this._emitQueue.length = 0;
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              this._emitMatch(r[0], r[1]);
            }
          }
          if (this._processQueue.length) {
            var n = this._processQueue.slice(0);
            this._processQueue.length = 0;
            for (t = 0; t < n.length; t++) {
              var i = n[t];
              this._processing--, this._process(i[0], i[1], i[2], i[3]);
            }
          }
        }
      }),
      (b.prototype._process = function (e, t, r, n) {
        if ((c(this instanceof b), c("function" == typeof n), !this.aborted))
          if ((this._processing++, this.paused))
            this._processQueue.push([e, t, r, n]);
          else {
            for (var o, s = 0; "string" == typeof e[s]; ) s++;
            switch (s) {
              case e.length:
                return void this._processSimple(e.join("/"), t, n);
              case 0:
                o = null;
                break;
              default:
                o = e.slice(0, s).join("/");
            }
            var a,
              u = e.slice(s);
            null === o
              ? (a = ".")
              : l(o) ||
                l(
                  e
                    .map(function (e) {
                      return "string" == typeof e ? e : "[*]";
                    })
                    .join("/")
                )
              ? ((o && l(o)) || (o = "/" + o), (a = o))
              : (a = o);
            var h = this._makeAbs(a);
            if (m(this, a)) return n();
            u[0] === i.GLOBSTAR
              ? this._processGlobStar(o, a, h, u, t, r, n)
              : this._processReaddir(o, a, h, u, t, r, n);
          }
      }),
      (b.prototype._processReaddir = function (e, t, r, n, i, o, s) {
        var a = this;
        this._readdir(r, o, function (c, l) {
          return a._processReaddir2(e, t, r, n, i, o, l, s);
        });
      }),
      (b.prototype._processReaddir2 = function (e, t, r, n, i, o, s, c) {
        if (!s) return c();
        for (
          var l = n[0],
            u = !!this.minimatch.negate,
            h = l._glob,
            f = this.dot || "." === h.charAt(0),
            d = [],
            p = 0;
          p < s.length;
          p++
        ) {
          if ("." !== (g = s[p]).charAt(0) || f)
            (u && !e ? !g.match(l) : g.match(l)) && d.push(g);
        }
        var m = d.length;
        if (0 === m) return c();
        if (1 === n.length && !this.mark && !this.stat) {
          this.matches[i] || (this.matches[i] = Object.create(null));
          for (p = 0; p < m; p++) {
            var g = d[p];
            e && (g = "/" !== e ? e + "/" + g : e + g),
              "/" !== g.charAt(0) || this.nomount || (g = a.join(this.root, g)),
              this._emitMatch(i, g);
          }
          return c();
        }
        n.shift();
        for (p = 0; p < m; p++) {
          g = d[p];
          e && (g = "/" !== e ? e + "/" + g : e + g),
            this._process([g].concat(n), i, o, c);
        }
        c();
      }),
      (b.prototype._emitMatch = function (e, t) {
        if (!this.aborted && !g(this, t))
          if (this.paused) this._emitQueue.push([e, t]);
          else {
            var r = l(t) ? t : this._makeAbs(t);
            if (
              (this.mark && (t = this._mark(t)),
              this.absolute && (t = r),
              !this.matches[e][t])
            ) {
              if (this.nodir) {
                var n = this.cache[r];
                if ("DIR" === n || Array.isArray(n)) return;
              }
              this.matches[e][t] = !0;
              var i = this.statCache[r];
              i && this.emit("stat", t, i), this.emit("match", t);
            }
          }
      }),
      (b.prototype._readdirInGlobStar = function (e, t) {
        if (!this.aborted) {
          if (this.follow) return this._readdir(e, !1, t);
          var r = this,
            n = p("lstat\0" + e, function (n, i) {
              if (n && "ENOENT" === n.code) return t();
              var o = i && i.isSymbolicLink();
              (r.symlinks[e] = o),
                o || !i || i.isDirectory()
                  ? r._readdir(e, !1, t)
                  : ((r.cache[e] = "FILE"), t());
            });
          n && r.fs.lstat(e, n);
        }
      }),
      (b.prototype._readdir = function (e, t, r) {
        if (!this.aborted && (r = p("readdir\0" + e + "\0" + t, r))) {
          if (t && !d(this.symlinks, e)) return this._readdirInGlobStar(e, r);
          if (d(this.cache, e)) {
            var n = this.cache[e];
            if (!n || "FILE" === n) return r();
            if (Array.isArray(n)) return r(null, n);
          }
          this.fs.readdir(
            e,
            (function (e, t, r) {
              return function (n, i) {
                n ? e._readdirError(t, n, r) : e._readdirEntries(t, i, r);
              };
            })(this, e, r)
          );
        }
      }),
      (b.prototype._readdirEntries = function (e, t, r) {
        if (!this.aborted) {
          if (!this.mark && !this.stat)
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i = "/" === e ? e + i : e + "/" + i), (this.cache[i] = !0);
            }
          return (this.cache[e] = t), r(null, t);
        }
      }),
      (b.prototype._readdirError = function (e, t, r) {
        if (!this.aborted) {
          switch (t.code) {
            case "ENOTSUP":
            case "ENOTDIR":
              var n = this._makeAbs(e);
              if (((this.cache[n] = "FILE"), n === this.cwdAbs)) {
                var i = new Error(t.code + " invalid cwd " + this.cwd);
                (i.path = this.cwd),
                  (i.code = t.code),
                  this.emit("error", i),
                  this.abort();
              }
              break;
            case "ENOENT":
            case "ELOOP":
            case "ENAMETOOLONG":
            case "UNKNOWN":
              this.cache[this._makeAbs(e)] = !1;
              break;
            default:
              (this.cache[this._makeAbs(e)] = !1),
                this.strict && (this.emit("error", t), this.abort()),
                this.silent || console.error("glob error", t);
          }
          return r();
        }
      }),
      (b.prototype._processGlobStar = function (e, t, r, n, i, o, s) {
        var a = this;
        this._readdir(r, o, function (c, l) {
          a._processGlobStar2(e, t, r, n, i, o, l, s);
        });
      }),
      (b.prototype._processGlobStar2 = function (e, t, r, n, i, o, s, a) {
        if (!s) return a();
        var c = n.slice(1),
          l = e ? [e] : [],
          u = l.concat(c);
        this._process(u, i, !1, a);
        var h = this.symlinks[r],
          f = s.length;
        if (h && o) return a();
        for (var d = 0; d < f; d++) {
          if ("." !== s[d].charAt(0) || this.dot) {
            var p = l.concat(s[d], c);
            this._process(p, i, !0, a);
            var m = l.concat(s[d], n);
            this._process(m, i, !0, a);
          }
        }
        a();
      }),
      (b.prototype._processSimple = function (e, t, r) {
        var n = this;
        this._stat(e, function (i, o) {
          n._processSimple2(e, t, i, o, r);
        });
      }),
      (b.prototype._processSimple2 = function (e, t, r, n, i) {
        if ((this.matches[t] || (this.matches[t] = Object.create(null)), !n))
          return i();
        if (e && l(e) && !this.nomount) {
          var o = /[\/\\]$/.test(e);
          "/" === e.charAt(0)
            ? (e = a.join(this.root, e))
            : ((e = a.resolve(this.root, e)), o && (e += "/"));
        }
        "win32" === process.platform && (e = e.replace(/\\/g, "/")),
          this._emitMatch(t, e),
          i();
      }),
      (b.prototype._stat = function (e, t) {
        var r = this._makeAbs(e),
          n = "/" === e.slice(-1);
        if (e.length > this.maxLength) return t();
        if (!this.stat && d(this.cache, r)) {
          var i = this.cache[r];
          if ((Array.isArray(i) && (i = "DIR"), !n || "DIR" === i))
            return t(null, i);
          if (n && "FILE" === i) return t();
        }
        var o = this.statCache[r];
        if (void 0 !== o) {
          if (!1 === o) return t(null, o);
          var s = o.isDirectory() ? "DIR" : "FILE";
          return n && "FILE" === s ? t() : t(null, s, o);
        }
        var a = this,
          c = p("stat\0" + r, function (n, i) {
            if (i && i.isSymbolicLink())
              return a.fs.stat(r, function (n, o) {
                n ? a._stat2(e, r, null, i, t) : a._stat2(e, r, n, o, t);
              });
            a._stat2(e, r, n, i, t);
          });
        c && a.fs.lstat(r, c);
      }),
      (b.prototype._stat2 = function (e, t, r, n, i) {
        if (r && ("ENOENT" === r.code || "ENOTDIR" === r.code))
          return (this.statCache[t] = !1), i();
        var o = "/" === e.slice(-1);
        if (
          ((this.statCache[t] = n),
          "/" === t.slice(-1) && n && !n.isDirectory())
        )
          return i(null, !1, n);
        var s = !0;
        return (
          n && (s = n.isDirectory() ? "DIR" : "FILE"),
          (this.cache[t] = this.cache[t] || s),
          o && "FILE" === s ? i() : i(null, s, n)
        );
      });
  },
  function (e, t, r) {
    (e.exports = u),
      (u.realpath = u),
      (u.sync = h),
      (u.realpathSync = h),
      (u.monkeypatch = function () {
        (n.realpath = u), (n.realpathSync = h);
      }),
      (u.unmonkeypatch = function () {
        (n.realpath = i), (n.realpathSync = o);
      });
    var n = r(1),
      i = n.realpath,
      o = n.realpathSync,
      s = process.version,
      a = /^v[0-5]\./.test(s),
      c = r(172);
    function l(e) {
      return (
        e &&
        "realpath" === e.syscall &&
        ("ELOOP" === e.code || "ENOMEM" === e.code || "ENAMETOOLONG" === e.code)
      );
    }
    function u(e, t, r) {
      if (a) return i(e, t, r);
      "function" == typeof t && ((r = t), (t = null)),
        i(e, t, function (n, i) {
          l(n) ? c.realpath(e, t, r) : r(n, i);
        });
    }
    function h(e, t) {
      if (a) return o(e, t);
      try {
        return o(e, t);
      } catch (r) {
        if (l(r)) return c.realpathSync(e, t);
        throw r;
      }
    }
  },
  function (e, t, r) {
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    (t.setopts = function (e, t, r) {
      r || (r = {});
      if (r.matchBase && -1 === t.indexOf("/")) {
        if (r.noglobstar) throw new Error("base matching requires globstar");
        t = "**/" + t;
      }
      (e.silent = !!r.silent),
        (e.pattern = t),
        (e.strict = !1 !== r.strict),
        (e.realpath = !!r.realpath),
        (e.realpathCache = r.realpathCache || Object.create(null)),
        (e.follow = !!r.follow),
        (e.dot = !!r.dot),
        (e.mark = !!r.mark),
        (e.nodir = !!r.nodir),
        e.nodir && (e.mark = !0);
      (e.sync = !!r.sync),
        (e.nounique = !!r.nounique),
        (e.nonull = !!r.nonull),
        (e.nosort = !!r.nosort),
        (e.nocase = !!r.nocase),
        (e.stat = !!r.stat),
        (e.noprocess = !!r.noprocess),
        (e.absolute = !!r.absolute),
        (e.fs = r.fs || i),
        (e.maxLength = r.maxLength || 1 / 0),
        (e.cache = r.cache || Object.create(null)),
        (e.statCache = r.statCache || Object.create(null)),
        (e.symlinks = r.symlinks || Object.create(null)),
        (function (e, t) {
          (e.ignore = t.ignore || []),
            Array.isArray(e.ignore) || (e.ignore = [e.ignore]);
          e.ignore.length && (e.ignore = e.ignore.map(u));
        })(e, r),
        (e.changedCwd = !1);
      var s = process.cwd();
      n(r, "cwd")
        ? ((e.cwd = o.resolve(r.cwd)), (e.changedCwd = e.cwd !== s))
        : (e.cwd = s);
      (e.root = r.root || o.resolve(e.cwd, "/")),
        (e.root = o.resolve(e.root)),
        "win32" === process.platform && (e.root = e.root.replace(/\\/g, "/"));
      (e.cwdAbs = a(e.cwd) ? e.cwd : h(e, e.cwd)),
        "win32" === process.platform &&
          (e.cwdAbs = e.cwdAbs.replace(/\\/g, "/"));
      (e.nomount = !!r.nomount),
        (r.nonegate = !0),
        (r.nocomment = !0),
        (r.allowWindowsEscape = !1),
        (e.minimatch = new c(t, r)),
        (e.options = e.minimatch.options);
    }),
      (t.ownProp = n),
      (t.makeAbs = h),
      (t.finish = function (e) {
        for (
          var t = e.nounique,
            r = t ? [] : Object.create(null),
            n = 0,
            i = e.matches.length;
          n < i;
          n++
        ) {
          var o = e.matches[n];
          if (o && 0 !== Object.keys(o).length) {
            var s = Object.keys(o);
            t
              ? r.push.apply(r, s)
              : s.forEach(function (e) {
                  r[e] = !0;
                });
          } else if (e.nonull) {
            var a = e.minimatch.globSet[n];
            t ? r.push(a) : (r[a] = !0);
          }
        }
        t || (r = Object.keys(r));
        e.nosort || (r = r.sort(l));
        if (e.mark) {
          for (n = 0; n < r.length; n++) r[n] = e._mark(r[n]);
          e.nodir &&
            (r = r.filter(function (t) {
              var r = !/\/$/.test(t),
                n = e.cache[t] || e.cache[h(e, t)];
              return r && n && (r = "DIR" !== n && !Array.isArray(n)), r;
            }));
        }
        e.ignore.length &&
          (r = r.filter(function (t) {
            return !f(e, t);
          }));
        e.found = r;
      }),
      (t.mark = function (e, t) {
        var r = h(e, t),
          n = e.cache[r],
          i = t;
        if (n) {
          var o = "DIR" === n || Array.isArray(n),
            s = "/" === t.slice(-1);
          if (
            (o && !s ? (i += "/") : !o && s && (i = i.slice(0, -1)), i !== t)
          ) {
            var a = h(e, i);
            (e.statCache[a] = e.statCache[r]), (e.cache[a] = e.cache[r]);
          }
        }
        return i;
      }),
      (t.isIgnored = f),
      (t.childrenIgnored = function (e, t) {
        return (
          !!e.ignore.length &&
          e.ignore.some(function (e) {
            return !(!e.gmatcher || !e.gmatcher.match(t));
          })
        );
      });
    var i = r(1),
      o = r(0),
      s = r(64),
      a = r(65),
      c = s.Minimatch;
    function l(e, t) {
      return e.localeCompare(t, "en");
    }
    function u(e) {
      var t = null;
      if ("/**" === e.slice(-3)) {
        var r = e.replace(/(\/\*\*)+$/, "");
        t = new c(r, { dot: !0 });
      }
      return { matcher: new c(e, { dot: !0 }), gmatcher: t };
    }
    function h(e, t) {
      var r = t;
      return (
        (r =
          "/" === t.charAt(0)
            ? o.join(e.root, t)
            : a(t) || "" === t
            ? t
            : e.changedCwd
            ? o.resolve(e.cwd, t)
            : o.resolve(t)),
        "win32" === process.platform && (r = r.replace(/\\/g, "/")),
        r
      );
    }
    function f(e, t) {
      return (
        !!e.ignore.length &&
        e.ignore.some(function (e) {
          return e.matcher.match(t) || !(!e.gmatcher || !e.gmatcher.match(t));
        })
      );
    }
  },
  function (e, t) {
    e.exports = function e(t, r) {
      if (t && r) return e(t)(r);
      if ("function" != typeof t) throw new TypeError("need wrapper function");
      return (
        Object.keys(t).forEach(function (e) {
          n[e] = t[e];
        }),
        n
      );
      function n() {
        for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
          e[r] = arguments[r];
        var n = t.apply(this, e),
          i = e[e.length - 1];
        return (
          "function" == typeof n &&
            n !== i &&
            Object.keys(i).forEach(function (e) {
              n[e] = i[e];
            }),
          n
        );
      }
    };
  },
  function (e, t, r) {
    var n = r(89);
    function i(e) {
      var t = function () {
        return t.called
          ? t.value
          : ((t.called = !0), (t.value = e.apply(this, arguments)));
      };
      return (t.called = !1), t;
    }
    function o(e) {
      var t = function () {
          if (t.called) throw new Error(t.onceError);
          return (t.called = !0), (t.value = e.apply(this, arguments));
        },
        r = e.name || "Function wrapped with `once`";
      return (
        (t.onceError = r + " shouldn't be called more than once"),
        (t.called = !1),
        t
      );
    }
    (e.exports = n(i)),
      (e.exports.strict = n(o)),
      (i.proto = i(function () {
        Object.defineProperty(Function.prototype, "once", {
          value: function () {
            return i(this);
          },
          configurable: !0,
        }),
          Object.defineProperty(Function.prototype, "onceStrict", {
            value: function () {
              return o(this);
            },
            configurable: !0,
          });
      }));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.changePermissions = t.downloadFile = t.getPath = void 0);
    const n = r(4),
      i = r(1),
      o = r(0),
      s = r(92);
    t.getPath = () => {
      const e = n.app.getPath("userData");
      return o.resolve(e + "/extensions");
    };
    const a = n.net ? n.net.request : s.get;
    t.downloadFile = (e, r) =>
      new Promise((n, o) => {
        const s = a(e);
        s.on("response", (e) => {
          if (
            e.statusCode &&
            e.statusCode >= 300 &&
            e.statusCode < 400 &&
            e.headers.location
          )
            return t.downloadFile(e.headers.location, r).then(n).catch(o);
          e.pipe(i.createWriteStream(r)).on("close", n), e.on("error", o);
        }),
          s.on("error", o),
          s.end();
      });
    t.changePermissions = (e, r) => {
      i.readdirSync(e).forEach((n) => {
        const s = o.join(e, n);
        i.chmodSync(s, parseInt("" + r, 8)),
          i.statSync(s).isDirectory() && t.changePermissions(s, r);
      });
    };
  },
  function (e, t) {
    e.exports = require("https");
  },
  function (e, t, r) {
    var n = r(19);
    "disable" === process.env.READABLE_STREAM && n
      ? ((e.exports = n),
        ((t = e.exports = n.Readable).Readable = n.Readable),
        (t.Writable = n.Writable),
        (t.Duplex = n.Duplex),
        (t.Transform = n.Transform),
        (t.PassThrough = n.PassThrough),
        (t.Stream = n))
      : (((t = e.exports = r(94)).Stream = n || t),
        (t.Readable = t),
        (t.Writable = r(98)),
        (t.Duplex = r(27)),
        (t.Transform = r(100)),
        (t.PassThrough = r(185)));
  },
  function (e, t, r) {
    "use strict";
    var n = r(44);
    e.exports = y;
    var i,
      o = r(182);
    y.ReadableState = v;
    r(43).EventEmitter;
    var s = function (e, t) {
        return e.listeners(t).length;
      },
      a = r(95),
      c = r(45).Buffer,
      l =
        ("undefined" != typeof global
          ? global
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : {}
        ).Uint8Array || function () {};
    var u = Object.create(r(35));
    u.inherits = r(26);
    var h = r(14),
      f = void 0;
    f = h && h.debuglog ? h.debuglog("stream") : function () {};
    var d,
      p = r(183),
      m = r(97);
    u.inherits(y, a);
    var g = ["error", "close", "destroy", "pause", "resume"];
    function v(e, t) {
      e = e || {};
      var n = t instanceof (i = i || r(27));
      (this.objectMode = !!e.objectMode),
        n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
      var o = e.highWaterMark,
        s = e.readableHighWaterMark,
        a = this.objectMode ? 16 : 16384;
      (this.highWaterMark = o || 0 === o ? o : n && (s || 0 === s) ? s : a),
        (this.highWaterMark = Math.floor(this.highWaterMark)),
        (this.buffer = new p()),
        (this.length = 0),
        (this.pipes = null),
        (this.pipesCount = 0),
        (this.flowing = null),
        (this.ended = !1),
        (this.endEmitted = !1),
        (this.reading = !1),
        (this.sync = !0),
        (this.needReadable = !1),
        (this.emittedReadable = !1),
        (this.readableListening = !1),
        (this.resumeScheduled = !1),
        (this.destroyed = !1),
        (this.defaultEncoding = e.defaultEncoding || "utf8"),
        (this.awaitDrain = 0),
        (this.readingMore = !1),
        (this.decoder = null),
        (this.encoding = null),
        e.encoding &&
          (d || (d = r(99).StringDecoder),
          (this.decoder = new d(e.encoding)),
          (this.encoding = e.encoding));
    }
    function y(e) {
      if (((i = i || r(27)), !(this instanceof y))) return new y(e);
      (this._readableState = new v(e, this)),
        (this.readable = !0),
        e &&
          ("function" == typeof e.read && (this._read = e.read),
          "function" == typeof e.destroy && (this._destroy = e.destroy)),
        a.call(this);
    }
    function w(e, t, r, n, i) {
      var o,
        s = e._readableState;
      null === t
        ? ((s.reading = !1),
          (function (e, t) {
            if (t.ended) return;
            if (t.decoder) {
              var r = t.decoder.end();
              r &&
                r.length &&
                (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
            }
            (t.ended = !0), _(e);
          })(e, s))
        : (i ||
            (o = (function (e, t) {
              var r;
              (n = t),
                c.isBuffer(n) ||
                  n instanceof l ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (r = new TypeError("Invalid non-string/buffer chunk"));
              var n;
              return r;
            })(s, t)),
          o
            ? e.emit("error", o)
            : s.objectMode || (t && t.length > 0)
            ? ("string" == typeof t ||
                s.objectMode ||
                Object.getPrototypeOf(t) === c.prototype ||
                (t = (function (e) {
                  return c.from(e);
                })(t)),
              n
                ? s.endEmitted
                  ? e.emit(
                      "error",
                      new Error("stream.unshift() after end event")
                    )
                  : b(e, s, t, !0)
                : s.ended
                ? e.emit("error", new Error("stream.push() after EOF"))
                : ((s.reading = !1),
                  s.decoder && !r
                    ? ((t = s.decoder.write(t)),
                      s.objectMode || 0 !== t.length ? b(e, s, t, !1) : S(e, s))
                    : b(e, s, t, !1)))
            : n || (s.reading = !1));
      return (function (e) {
        return (
          !e.ended &&
          (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        );
      })(s);
    }
    function b(e, t, r, n) {
      t.flowing && 0 === t.length && !t.sync
        ? (e.emit("data", r), e.read(0))
        : ((t.length += t.objectMode ? 1 : r.length),
          n ? t.buffer.unshift(r) : t.buffer.push(r),
          t.needReadable && _(e)),
        S(e, t);
    }
    Object.defineProperty(y.prototype, "destroyed", {
      get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
      },
      set: function (e) {
        this._readableState && (this._readableState.destroyed = e);
      },
    }),
      (y.prototype.destroy = m.destroy),
      (y.prototype._undestroy = m.undestroy),
      (y.prototype._destroy = function (e, t) {
        this.push(null), t(e);
      }),
      (y.prototype.push = function (e, t) {
        var r,
          n = this._readableState;
        return (
          n.objectMode
            ? (r = !0)
            : "string" == typeof e &&
              ((t = t || n.defaultEncoding) !== n.encoding &&
                ((e = c.from(e, t)), (t = "")),
              (r = !0)),
          w(this, e, t, !1, r)
        );
      }),
      (y.prototype.unshift = function (e) {
        return w(this, e, null, !0, !1);
      }),
      (y.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
      }),
      (y.prototype.setEncoding = function (e) {
        return (
          d || (d = r(99).StringDecoder),
          (this._readableState.decoder = new d(e)),
          (this._readableState.encoding = e),
          this
        );
      });
    function E(e, t) {
      return e <= 0 || (0 === t.length && t.ended)
        ? 0
        : t.objectMode
        ? 1
        : e != e
        ? t.flowing && t.length
          ? t.buffer.head.data.length
          : t.length
        : (e > t.highWaterMark &&
            (t.highWaterMark = (function (e) {
              return (
                e >= 8388608
                  ? (e = 8388608)
                  : (e--,
                    (e |= e >>> 1),
                    (e |= e >>> 2),
                    (e |= e >>> 4),
                    (e |= e >>> 8),
                    (e |= e >>> 16),
                    e++),
                e
              );
            })(e)),
          e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0));
    }
    function _(e) {
      var t = e._readableState;
      (t.needReadable = !1),
        t.emittedReadable ||
          (f("emitReadable", t.flowing),
          (t.emittedReadable = !0),
          t.sync ? n.nextTick(A, e) : A(e));
    }
    function A(e) {
      f("emit readable"), e.emit("readable"), k(e);
    }
    function S(e, t) {
      t.readingMore || ((t.readingMore = !0), n.nextTick(O, e, t));
    }
    function O(e, t) {
      for (
        var r = t.length;
        !t.reading &&
        !t.flowing &&
        !t.ended &&
        t.length < t.highWaterMark &&
        (f("maybeReadMore read 0"), e.read(0), r !== t.length);

      )
        r = t.length;
      t.readingMore = !1;
    }
    function C(e) {
      f("readable nexttick read 0"), e.read(0);
    }
    function I(e, t) {
      t.reading || (f("resume read 0"), e.read(0)),
        (t.resumeScheduled = !1),
        (t.awaitDrain = 0),
        e.emit("resume"),
        k(e),
        t.flowing && !t.reading && e.read(0);
    }
    function k(e) {
      var t = e._readableState;
      for (f("flow", t.flowing); t.flowing && null !== e.read(); );
    }
    function T(e, t) {
      return 0 === t.length
        ? null
        : (t.objectMode
            ? (r = t.buffer.shift())
            : !e || e >= t.length
            ? ((r = t.decoder
                ? t.buffer.join("")
                : 1 === t.buffer.length
                ? t.buffer.head.data
                : t.buffer.concat(t.length)),
              t.buffer.clear())
            : (r = (function (e, t, r) {
                var n;
                e < t.head.data.length
                  ? ((n = t.head.data.slice(0, e)),
                    (t.head.data = t.head.data.slice(e)))
                  : (n =
                      e === t.head.data.length
                        ? t.shift()
                        : r
                        ? (function (e, t) {
                            var r = t.head,
                              n = 1,
                              i = r.data;
                            e -= i.length;
                            for (; (r = r.next); ) {
                              var o = r.data,
                                s = e > o.length ? o.length : e;
                              if (
                                (s === o.length
                                  ? (i += o)
                                  : (i += o.slice(0, e)),
                                0 === (e -= s))
                              ) {
                                s === o.length
                                  ? (++n,
                                    r.next
                                      ? (t.head = r.next)
                                      : (t.head = t.tail = null))
                                  : ((t.head = r), (r.data = o.slice(s)));
                                break;
                              }
                              ++n;
                            }
                            return (t.length -= n), i;
                          })(e, t)
                        : (function (e, t) {
                            var r = c.allocUnsafe(e),
                              n = t.head,
                              i = 1;
                            n.data.copy(r), (e -= n.data.length);
                            for (; (n = n.next); ) {
                              var o = n.data,
                                s = e > o.length ? o.length : e;
                              if (
                                (o.copy(r, r.length - e, 0, s), 0 === (e -= s))
                              ) {
                                s === o.length
                                  ? (++i,
                                    n.next
                                      ? (t.head = n.next)
                                      : (t.head = t.tail = null))
                                  : ((t.head = n), (n.data = o.slice(s)));
                                break;
                              }
                              ++i;
                            }
                            return (t.length -= i), r;
                          })(e, t));
                return n;
              })(e, t.buffer, t.decoder)),
          r);
      var r;
    }
    function x(e) {
      var t = e._readableState;
      if (t.length > 0)
        throw new Error('"endReadable()" called on non-empty stream');
      t.endEmitted || ((t.ended = !0), n.nextTick(R, t, e));
    }
    function R(e, t) {
      e.endEmitted ||
        0 !== e.length ||
        ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
    }
    function N(e, t) {
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    (y.prototype.read = function (e) {
      f("read", e), (e = parseInt(e, 10));
      var t = this._readableState,
        r = e;
      if (
        (0 !== e && (t.emittedReadable = !1),
        0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
      )
        return (
          f("read: emitReadable", t.length, t.ended),
          0 === t.length && t.ended ? x(this) : _(this),
          null
        );
      if (0 === (e = E(e, t)) && t.ended)
        return 0 === t.length && x(this), null;
      var n,
        i = t.needReadable;
      return (
        f("need readable", i),
        (0 === t.length || t.length - e < t.highWaterMark) &&
          f("length less than watermark", (i = !0)),
        t.ended || t.reading
          ? f("reading or ended", (i = !1))
          : i &&
            (f("do read"),
            (t.reading = !0),
            (t.sync = !0),
            0 === t.length && (t.needReadable = !0),
            this._read(t.highWaterMark),
            (t.sync = !1),
            t.reading || (e = E(r, t))),
        null === (n = e > 0 ? T(e, t) : null)
          ? ((t.needReadable = !0), (e = 0))
          : (t.length -= e),
        0 === t.length &&
          (t.ended || (t.needReadable = !0), r !== e && t.ended && x(this)),
        null !== n && this.emit("data", n),
        n
      );
    }),
      (y.prototype._read = function (e) {
        this.emit("error", new Error("_read() is not implemented"));
      }),
      (y.prototype.pipe = function (e, t) {
        var r = this,
          i = this._readableState;
        switch (i.pipesCount) {
          case 0:
            i.pipes = e;
            break;
          case 1:
            i.pipes = [i.pipes, e];
            break;
          default:
            i.pipes.push(e);
        }
        (i.pipesCount += 1), f("pipe count=%d opts=%j", i.pipesCount, t);
        var a =
          (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr
            ? l
            : y;
        function c(t, n) {
          f("onunpipe"),
            t === r &&
              n &&
              !1 === n.hasUnpiped &&
              ((n.hasUnpiped = !0),
              f("cleanup"),
              e.removeListener("close", g),
              e.removeListener("finish", v),
              e.removeListener("drain", u),
              e.removeListener("error", m),
              e.removeListener("unpipe", c),
              r.removeListener("end", l),
              r.removeListener("end", y),
              r.removeListener("data", p),
              (h = !0),
              !i.awaitDrain ||
                (e._writableState && !e._writableState.needDrain) ||
                u());
        }
        function l() {
          f("onend"), e.end();
        }
        i.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", c);
        var u = (function (e) {
          return function () {
            var t = e._readableState;
            f("pipeOnDrain", t.awaitDrain),
              t.awaitDrain && t.awaitDrain--,
              0 === t.awaitDrain && s(e, "data") && ((t.flowing = !0), k(e));
          };
        })(r);
        e.on("drain", u);
        var h = !1;
        var d = !1;
        function p(t) {
          f("ondata"),
            (d = !1),
            !1 !== e.write(t) ||
              d ||
              (((1 === i.pipesCount && i.pipes === e) ||
                (i.pipesCount > 1 && -1 !== N(i.pipes, e))) &&
                !h &&
                (f("false write response, pause", i.awaitDrain),
                i.awaitDrain++,
                (d = !0)),
              r.pause());
        }
        function m(t) {
          f("onerror", t),
            y(),
            e.removeListener("error", m),
            0 === s(e, "error") && e.emit("error", t);
        }
        function g() {
          e.removeListener("finish", v), y();
        }
        function v() {
          f("onfinish"), e.removeListener("close", g), y();
        }
        function y() {
          f("unpipe"), r.unpipe(e);
        }
        return (
          r.on("data", p),
          (function (e, t, r) {
            if ("function" == typeof e.prependListener)
              return e.prependListener(t, r);
            e._events && e._events[t]
              ? o(e._events[t])
                ? e._events[t].unshift(r)
                : (e._events[t] = [r, e._events[t]])
              : e.on(t, r);
          })(e, "error", m),
          e.once("close", g),
          e.once("finish", v),
          e.emit("pipe", r),
          i.flowing || (f("pipe resume"), r.resume()),
          e
        );
      }),
      (y.prototype.unpipe = function (e) {
        var t = this._readableState,
          r = { hasUnpiped: !1 };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount)
          return (
            (e && e !== t.pipes) ||
              (e || (e = t.pipes),
              (t.pipes = null),
              (t.pipesCount = 0),
              (t.flowing = !1),
              e && e.emit("unpipe", this, r)),
            this
          );
        if (!e) {
          var n = t.pipes,
            i = t.pipesCount;
          (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
          for (var o = 0; o < i; o++)
            n[o].emit("unpipe", this, { hasUnpiped: !1 });
          return this;
        }
        var s = N(t.pipes, e);
        return (
          -1 === s ||
            (t.pipes.splice(s, 1),
            (t.pipesCount -= 1),
            1 === t.pipesCount && (t.pipes = t.pipes[0]),
            e.emit("unpipe", this, r)),
          this
        );
      }),
      (y.prototype.on = function (e, t) {
        var r = a.prototype.on.call(this, e, t);
        if ("data" === e) !1 !== this._readableState.flowing && this.resume();
        else if ("readable" === e) {
          var i = this._readableState;
          i.endEmitted ||
            i.readableListening ||
            ((i.readableListening = i.needReadable = !0),
            (i.emittedReadable = !1),
            i.reading ? i.length && _(this) : n.nextTick(C, this));
        }
        return r;
      }),
      (y.prototype.addListener = y.prototype.on),
      (y.prototype.resume = function () {
        var e = this._readableState;
        return (
          e.flowing ||
            (f("resume"),
            (e.flowing = !0),
            (function (e, t) {
              t.resumeScheduled ||
                ((t.resumeScheduled = !0), n.nextTick(I, e, t));
            })(this, e)),
          this
        );
      }),
      (y.prototype.pause = function () {
        return (
          f("call pause flowing=%j", this._readableState.flowing),
          !1 !== this._readableState.flowing &&
            (f("pause"),
            (this._readableState.flowing = !1),
            this.emit("pause")),
          this
        );
      }),
      (y.prototype.wrap = function (e) {
        var t = this,
          r = this._readableState,
          n = !1;
        for (var i in (e.on("end", function () {
          if ((f("wrapped end"), r.decoder && !r.ended)) {
            var e = r.decoder.end();
            e && e.length && t.push(e);
          }
          t.push(null);
        }),
        e.on("data", function (i) {
          (f("wrapped data"),
          r.decoder && (i = r.decoder.write(i)),
          r.objectMode && null == i) ||
            ((r.objectMode || (i && i.length)) &&
              (t.push(i) || ((n = !0), e.pause())));
        }),
        e))
          void 0 === this[i] &&
            "function" == typeof e[i] &&
            (this[i] = (function (t) {
              return function () {
                return e[t].apply(e, arguments);
              };
            })(i));
        for (var o = 0; o < g.length; o++)
          e.on(g[o], this.emit.bind(this, g[o]));
        return (
          (this._read = function (t) {
            f("wrapped _read", t), n && ((n = !1), e.resume());
          }),
          this
        );
      }),
      Object.defineProperty(y.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._readableState.highWaterMark;
        },
      }),
      (y._fromList = T);
  },
  function (e, t, r) {
    e.exports = r(19);
  },
  function (e, t) {
    e.exports = require("buffer");
  },
  function (e, t, r) {
    "use strict";
    var n = r(44);
    function i(e, t) {
      e.emit("error", t);
    }
    e.exports = {
      destroy: function (e, t) {
        var r = this,
          o = this._readableState && this._readableState.destroyed,
          s = this._writableState && this._writableState.destroyed;
        return o || s
          ? (t
              ? t(e)
              : e &&
                (this._writableState
                  ? this._writableState.errorEmitted ||
                    ((this._writableState.errorEmitted = !0),
                    n.nextTick(i, this, e))
                  : n.nextTick(i, this, e)),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? r._writableState
                  ? r._writableState.errorEmitted ||
                    ((r._writableState.errorEmitted = !0), n.nextTick(i, r, e))
                  : n.nextTick(i, r, e)
                : t && t(e);
            }),
            this);
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finalCalled = !1),
            (this._writableState.prefinished = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(44);
    function i(e) {
      var t = this;
      (this.next = null),
        (this.entry = null),
        (this.finish = function () {
          !(function (e, t, r) {
            var n = e.entry;
            e.entry = null;
            for (; n; ) {
              var i = n.callback;
              t.pendingcb--, i(r), (n = n.next);
            }
            t.corkedRequestsFree.next = e;
          })(t, e);
        });
    }
    e.exports = g;
    var o,
      s =
        !process.browser &&
        ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1
          ? setImmediate
          : n.nextTick;
    g.WritableState = m;
    var a = Object.create(r(35));
    a.inherits = r(26);
    var c = { deprecate: r(184) },
      l = r(95),
      u = r(45).Buffer,
      h =
        ("undefined" != typeof global
          ? global
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : {}
        ).Uint8Array || function () {};
    var f,
      d = r(97);
    function p() {}
    function m(e, t) {
      (o = o || r(27)), (e = e || {});
      var a = t instanceof o;
      (this.objectMode = !!e.objectMode),
        a && (this.objectMode = this.objectMode || !!e.writableObjectMode);
      var c = e.highWaterMark,
        l = e.writableHighWaterMark,
        u = this.objectMode ? 16 : 16384;
      (this.highWaterMark = c || 0 === c ? c : a && (l || 0 === l) ? l : u),
        (this.highWaterMark = Math.floor(this.highWaterMark)),
        (this.finalCalled = !1),
        (this.needDrain = !1),
        (this.ending = !1),
        (this.ended = !1),
        (this.finished = !1),
        (this.destroyed = !1);
      var h = !1 === e.decodeStrings;
      (this.decodeStrings = !h),
        (this.defaultEncoding = e.defaultEncoding || "utf8"),
        (this.length = 0),
        (this.writing = !1),
        (this.corked = 0),
        (this.sync = !0),
        (this.bufferProcessing = !1),
        (this.onwrite = function (e) {
          !(function (e, t) {
            var r = e._writableState,
              i = r.sync,
              o = r.writecb;
            if (
              ((function (e) {
                (e.writing = !1),
                  (e.writecb = null),
                  (e.length -= e.writelen),
                  (e.writelen = 0);
              })(r),
              t)
            )
              !(function (e, t, r, i, o) {
                --t.pendingcb,
                  r
                    ? (n.nextTick(o, i),
                      n.nextTick(_, e, t),
                      (e._writableState.errorEmitted = !0),
                      e.emit("error", i))
                    : (o(i),
                      (e._writableState.errorEmitted = !0),
                      e.emit("error", i),
                      _(e, t));
              })(e, r, i, t, o);
            else {
              var a = b(r);
              a ||
                r.corked ||
                r.bufferProcessing ||
                !r.bufferedRequest ||
                w(e, r),
                i ? s(y, e, r, a, o) : y(e, r, a, o);
            }
          })(t, e);
        }),
        (this.writecb = null),
        (this.writelen = 0),
        (this.bufferedRequest = null),
        (this.lastBufferedRequest = null),
        (this.pendingcb = 0),
        (this.prefinished = !1),
        (this.errorEmitted = !1),
        (this.bufferedRequestCount = 0),
        (this.corkedRequestsFree = new i(this));
    }
    function g(e) {
      if (((o = o || r(27)), !(f.call(g, this) || this instanceof o)))
        return new g(e);
      (this._writableState = new m(e, this)),
        (this.writable = !0),
        e &&
          ("function" == typeof e.write && (this._write = e.write),
          "function" == typeof e.writev && (this._writev = e.writev),
          "function" == typeof e.destroy && (this._destroy = e.destroy),
          "function" == typeof e.final && (this._final = e.final)),
        l.call(this);
    }
    function v(e, t, r, n, i, o, s) {
      (t.writelen = n),
        (t.writecb = s),
        (t.writing = !0),
        (t.sync = !0),
        r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
        (t.sync = !1);
    }
    function y(e, t, r, n) {
      r ||
        (function (e, t) {
          0 === t.length &&
            t.needDrain &&
            ((t.needDrain = !1), e.emit("drain"));
        })(e, t),
        t.pendingcb--,
        n(),
        _(e, t);
    }
    function w(e, t) {
      t.bufferProcessing = !0;
      var r = t.bufferedRequest;
      if (e._writev && r && r.next) {
        var n = t.bufferedRequestCount,
          o = new Array(n),
          s = t.corkedRequestsFree;
        s.entry = r;
        for (var a = 0, c = !0; r; )
          (o[a] = r), r.isBuf || (c = !1), (r = r.next), (a += 1);
        (o.allBuffers = c),
          v(e, t, !0, t.length, o, "", s.finish),
          t.pendingcb++,
          (t.lastBufferedRequest = null),
          s.next
            ? ((t.corkedRequestsFree = s.next), (s.next = null))
            : (t.corkedRequestsFree = new i(t)),
          (t.bufferedRequestCount = 0);
      } else {
        for (; r; ) {
          var l = r.chunk,
            u = r.encoding,
            h = r.callback;
          if (
            (v(e, t, !1, t.objectMode ? 1 : l.length, l, u, h),
            (r = r.next),
            t.bufferedRequestCount--,
            t.writing)
          )
            break;
        }
        null === r && (t.lastBufferedRequest = null);
      }
      (t.bufferedRequest = r), (t.bufferProcessing = !1);
    }
    function b(e) {
      return (
        e.ending &&
        0 === e.length &&
        null === e.bufferedRequest &&
        !e.finished &&
        !e.writing
      );
    }
    function E(e, t) {
      e._final(function (r) {
        t.pendingcb--,
          r && e.emit("error", r),
          (t.prefinished = !0),
          e.emit("prefinish"),
          _(e, t);
      });
    }
    function _(e, t) {
      var r = b(t);
      return (
        r &&
          (!(function (e, t) {
            t.prefinished ||
              t.finalCalled ||
              ("function" == typeof e._final
                ? (t.pendingcb++, (t.finalCalled = !0), n.nextTick(E, e, t))
                : ((t.prefinished = !0), e.emit("prefinish")));
          })(e, t),
          0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
        r
      );
    }
    a.inherits(g, l),
      (m.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next);
        return t;
      }),
      (function () {
        try {
          Object.defineProperty(m.prototype, "buffer", {
            get: c.deprecate(
              function () {
                return this.getBuffer();
              },
              "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
              "DEP0003"
            ),
          });
        } catch (e) {}
      })(),
      "function" == typeof Symbol &&
      Symbol.hasInstance &&
      "function" == typeof Function.prototype[Symbol.hasInstance]
        ? ((f = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(g, Symbol.hasInstance, {
            value: function (e) {
              return (
                !!f.call(this, e) ||
                (this === g && e && e._writableState instanceof m)
              );
            },
          }))
        : (f = function (e) {
            return e instanceof this;
          }),
      (g.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"));
      }),
      (g.prototype.write = function (e, t, r) {
        var i,
          o = this._writableState,
          s = !1,
          a = !o.objectMode && ((i = e), u.isBuffer(i) || i instanceof h);
        return (
          a &&
            !u.isBuffer(e) &&
            (e = (function (e) {
              return u.from(e);
            })(e)),
          "function" == typeof t && ((r = t), (t = null)),
          a ? (t = "buffer") : t || (t = o.defaultEncoding),
          "function" != typeof r && (r = p),
          o.ended
            ? (function (e, t) {
                var r = new Error("write after end");
                e.emit("error", r), n.nextTick(t, r);
              })(this, r)
            : (a ||
                (function (e, t, r, i) {
                  var o = !0,
                    s = !1;
                  return (
                    null === r
                      ? (s = new TypeError(
                          "May not write null values to stream"
                        ))
                      : "string" == typeof r ||
                        void 0 === r ||
                        t.objectMode ||
                        (s = new TypeError("Invalid non-string/buffer chunk")),
                    s && (e.emit("error", s), n.nextTick(i, s), (o = !1)),
                    o
                  );
                })(this, o, e, r)) &&
              (o.pendingcb++,
              (s = (function (e, t, r, n, i, o) {
                if (!r) {
                  var s = (function (e, t, r) {
                    e.objectMode ||
                      !1 === e.decodeStrings ||
                      "string" != typeof t ||
                      (t = u.from(t, r));
                    return t;
                  })(t, n, i);
                  n !== s && ((r = !0), (i = "buffer"), (n = s));
                }
                var a = t.objectMode ? 1 : n.length;
                t.length += a;
                var c = t.length < t.highWaterMark;
                c || (t.needDrain = !0);
                if (t.writing || t.corked) {
                  var l = t.lastBufferedRequest;
                  (t.lastBufferedRequest = {
                    chunk: n,
                    encoding: i,
                    isBuf: r,
                    callback: o,
                    next: null,
                  }),
                    l
                      ? (l.next = t.lastBufferedRequest)
                      : (t.bufferedRequest = t.lastBufferedRequest),
                    (t.bufferedRequestCount += 1);
                } else v(e, t, !1, a, n, i, o);
                return c;
              })(this, o, a, e, t, r))),
          s
        );
      }),
      (g.prototype.cork = function () {
        this._writableState.corked++;
      }),
      (g.prototype.uncork = function () {
        var e = this._writableState;
        e.corked &&
          (e.corked--,
          e.writing ||
            e.corked ||
            e.bufferProcessing ||
            !e.bufferedRequest ||
            w(this, e));
      }),
      (g.prototype.setDefaultEncoding = function (e) {
        if (
          ("string" == typeof e && (e = e.toLowerCase()),
          !(
            [
              "hex",
              "utf8",
              "utf-8",
              "ascii",
              "binary",
              "base64",
              "ucs2",
              "ucs-2",
              "utf16le",
              "utf-16le",
              "raw",
            ].indexOf((e + "").toLowerCase()) > -1
          ))
        )
          throw new TypeError("Unknown encoding: " + e);
        return (this._writableState.defaultEncoding = e), this;
      }),
      Object.defineProperty(g.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
      (g.prototype._write = function (e, t, r) {
        r(new Error("_write() is not implemented"));
      }),
      (g.prototype._writev = null),
      (g.prototype.end = function (e, t, r) {
        var i = this._writableState;
        "function" == typeof e
          ? ((r = e), (e = null), (t = null))
          : "function" == typeof t && ((r = t), (t = null)),
          null != e && this.write(e, t),
          i.corked && ((i.corked = 1), this.uncork()),
          i.ending ||
            (function (e, t, r) {
              (t.ending = !0),
                _(e, t),
                r && (t.finished ? n.nextTick(r) : e.once("finish", r));
              (t.ended = !0), (e.writable = !1);
            })(this, i, r);
      }),
      Object.defineProperty(g.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._writableState && this._writableState.destroyed
          );
        },
        set: function (e) {
          this._writableState && (this._writableState.destroyed = e);
        },
      }),
      (g.prototype.destroy = d.destroy),
      (g.prototype._undestroy = d.undestroy),
      (g.prototype._destroy = function (e, t) {
        this.end(), t(e);
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(45).Buffer,
      i =
        n.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (n.isEncoding === i || !i(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = c), (this.end = l), (t = 4);
          break;
        case "utf8":
          (this.fillLast = a), (t = 4);
          break;
        case "base64":
          (this.text = u), (this.end = h), (t = 3);
          break;
        default:
          return (this.write = f), void (this.end = d);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = n.allocUnsafe(t));
    }
    function s(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function a(e) {
      var t = this.lastTotal - this.lastNeed,
        r = (function (e, t, r) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== r
        ? r
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function c(e, t) {
      if ((e.length - t) % 2 == 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var n = r.charCodeAt(r.length - 1);
          if (n >= 55296 && n <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              r.slice(0, -1)
            );
        }
        return r;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function l(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function u(e, t) {
      var r = (e.length - t) % 3;
      return 0 === r
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - r),
          (this.lastTotal = 3),
          1 === r
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - r));
    }
    function h(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function f(e) {
      return e.toString(this.encoding);
    }
    function d(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, r;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (r = this.lastNeed), (this.lastNeed = 0);
        } else r = 0;
        return r < e.length
          ? t
            ? t + this.text(e, r)
            : this.text(e, r)
          : t || "";
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (o.prototype.text = function (e, t) {
        var r = (function (e, t, r) {
          var n = t.length - 1;
          if (n < r) return 0;
          var i = s(t[n]);
          if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
          if (--n < r || -2 === i) return 0;
          if ((i = s(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
          if (--n < r || -2 === i) return 0;
          if ((i = s(t[n])) >= 0)
            return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = r;
        var n = e.length - (r - this.lastNeed);
        return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = s;
    var n = r(27),
      i = Object.create(r(35));
    function o(e, t) {
      var r = this._transformState;
      r.transforming = !1;
      var n = r.writecb;
      if (!n)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (r.writechunk = null),
        (r.writecb = null),
        null != t && this.push(t),
        n(e);
      var i = this._readableState;
      (i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark);
    }
    function s(e) {
      if (!(this instanceof s)) return new s(e);
      n.call(this, e),
        (this._transformState = {
          afterTransform: o.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", a);
    }
    function a() {
      var e = this;
      "function" == typeof this._flush
        ? this._flush(function (t, r) {
            c(e, t, r);
          })
        : c(this, null, null);
    }
    function c(e, t, r) {
      if (t) return e.emit("error", t);
      if ((null != r && e.push(r), e._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    (i.inherits = r(26)),
      i.inherits(s, n),
      (s.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          n.prototype.push.call(this, e, t)
        );
      }),
      (s.prototype._transform = function (e, t, r) {
        throw new Error("_transform() is not implemented");
      }),
      (s.prototype._write = function (e, t, r) {
        var n = this._transformState;
        if (
          ((n.writecb = r),
          (n.writechunk = e),
          (n.writeencoding = t),
          !n.transforming)
        ) {
          var i = this._readableState;
          (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
        }
      }),
      (s.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (s.prototype._destroy = function (e, t) {
        var r = this;
        n.prototype._destroy.call(this, e, function (e) {
          t(e), r.emit("close");
        });
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(18),
      o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    (t.encode = function (e) {
      for (
        var t,
          r,
          i,
          s,
          a,
          c,
          l,
          u = [],
          h = 0,
          f = e.length,
          d = f,
          p = "string" !== n.getTypeOf(e);
        h < e.length;

      )
        (d = f - h),
          p
            ? ((t = e[h++]), (r = h < f ? e[h++] : 0), (i = h < f ? e[h++] : 0))
            : ((t = e.charCodeAt(h++)),
              (r = h < f ? e.charCodeAt(h++) : 0),
              (i = h < f ? e.charCodeAt(h++) : 0)),
          (s = t >> 2),
          (a = ((3 & t) << 4) | (r >> 4)),
          (c = d > 1 ? ((15 & r) << 2) | (i >> 6) : 64),
          (l = d > 2 ? 63 & i : 64),
          u.push(o.charAt(s) + o.charAt(a) + o.charAt(c) + o.charAt(l));
      return u.join("");
    }),
      (t.decode = function (e) {
        var t,
          r,
          n,
          s,
          a,
          c,
          l = 0,
          u = 0;
        if ("data:" === e.substr(0, "data:".length))
          throw new Error("Invalid base64 input, it looks like a data url.");
        var h,
          f = (3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length) / 4;
        if (
          (e.charAt(e.length - 1) === o.charAt(64) && f--,
          e.charAt(e.length - 2) === o.charAt(64) && f--,
          f % 1 != 0)
        )
          throw new Error("Invalid base64 input, bad content length.");
        for (
          h = i.uint8array ? new Uint8Array(0 | f) : new Array(0 | f);
          l < e.length;

        )
          (t =
            (o.indexOf(e.charAt(l++)) << 2) |
            ((s = o.indexOf(e.charAt(l++))) >> 4)),
            (r = ((15 & s) << 4) | ((a = o.indexOf(e.charAt(l++))) >> 2)),
            (n = ((3 & a) << 6) | (c = o.indexOf(e.charAt(l++)))),
            (h[u++] = t),
            64 !== a && (h[u++] = r),
            64 !== c && (h[u++] = n);
        return h;
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(189),
      o = r(9),
      s = r(101),
      a = r(18),
      c = r(36),
      l = null;
    if (a.nodestream)
      try {
        l = r(190);
      } catch (e) {}
    function u(e, t) {
      return new c.Promise(function (r, i) {
        var o = [],
          a = e._internalType,
          c = e._outputType,
          l = e._mimeType;
        e.on("data", function (e, r) {
          o.push(e), t && t(r);
        })
          .on("error", function (e) {
            (o = []), i(e);
          })
          .on("end", function () {
            try {
              var e = (function (e, t, r) {
                switch (e) {
                  case "blob":
                    return n.newBlob(n.transformTo("arraybuffer", t), r);
                  case "base64":
                    return s.encode(t);
                  default:
                    return n.transformTo(e, t);
                }
              })(
                c,
                (function (e, t) {
                  var r,
                    n = 0,
                    i = null,
                    o = 0;
                  for (r = 0; r < t.length; r++) o += t[r].length;
                  switch (e) {
                    case "string":
                      return t.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t);
                    case "uint8array":
                      for (i = new Uint8Array(o), r = 0; r < t.length; r++)
                        i.set(t[r], n), (n += t[r].length);
                      return i;
                    case "nodebuffer":
                      return Buffer.concat(t);
                    default:
                      throw new Error("concat : unsupported type '" + e + "'");
                  }
                })(a, o),
                l
              );
              r(e);
            } catch (e) {
              i(e);
            }
            o = [];
          })
          .resume();
      });
    }
    function h(e, t, r) {
      var s = t;
      switch (t) {
        case "blob":
        case "arraybuffer":
          s = "uint8array";
          break;
        case "base64":
          s = "string";
      }
      try {
        (this._internalType = s),
          (this._outputType = t),
          (this._mimeType = r),
          n.checkSupport(s),
          (this._worker = e.pipe(new i(s))),
          e.lock();
      } catch (e) {
        (this._worker = new o("error")), this._worker.error(e);
      }
    }
    (h.prototype = {
      accumulate: function (e) {
        return u(this, e);
      },
      on: function (e, t) {
        var r = this;
        return (
          "data" === e
            ? this._worker.on(e, function (e) {
                t.call(r, e.data, e.meta);
              })
            : this._worker.on(e, function () {
                n.delay(t, arguments, r);
              }),
          this
        );
      },
      resume: function () {
        return n.delay(this._worker.resume, [], this._worker), this;
      },
      pause: function () {
        return this._worker.pause(), this;
      },
      toNodejsStream: function (e) {
        if ((n.checkSupport("nodestream"), "nodebuffer" !== this._outputType))
          throw new Error(
            this._outputType + " is not supported by this method"
          );
        return new l(
          this,
          { objectMode: "nodebuffer" !== this._outputType },
          e
        );
      },
    }),
      (e.exports = h);
  },
  function (e, t, r) {
    "use strict";
    (t.base64 = !1),
      (t.binary = !1),
      (t.dir = !1),
      (t.createFolders = !0),
      (t.date = null),
      (t.compression = null),
      (t.compressionOptions = null),
      (t.comment = null),
      (t.unixPermissions = null),
      (t.dosPermissions = null);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(9);
    function o(e) {
      i.call(this, "DataWorker");
      var t = this;
      (this.dataIsReady = !1),
        (this.index = 0),
        (this.max = 0),
        (this.data = null),
        (this.type = ""),
        (this._tickScheduled = !1),
        e.then(
          function (e) {
            (t.dataIsReady = !0),
              (t.data = e),
              (t.max = (e && e.length) || 0),
              (t.type = n.getTypeOf(e)),
              t.isPaused || t._tickAndRepeat();
          },
          function (e) {
            t.error(e);
          }
        );
    }
    n.inherits(o, i),
      (o.prototype.cleanUp = function () {
        i.prototype.cleanUp.call(this), (this.data = null);
      }),
      (o.prototype.resume = function () {
        return (
          !!i.prototype.resume.call(this) &&
          (!this._tickScheduled &&
            this.dataIsReady &&
            ((this._tickScheduled = !0),
            n.delay(this._tickAndRepeat, [], this)),
          !0)
        );
      }),
      (o.prototype._tickAndRepeat = function () {
        (this._tickScheduled = !1),
          this.isPaused ||
            this.isFinished ||
            (this._tick(),
            this.isFinished ||
              (n.delay(this._tickAndRepeat, [], this),
              (this._tickScheduled = !0)));
      }),
      (o.prototype._tick = function () {
        if (this.isPaused || this.isFinished) return !1;
        var e = null,
          t = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            e = this.data.substring(this.index, t);
            break;
          case "uint8array":
            e = this.data.subarray(this.index, t);
            break;
          case "array":
          case "nodebuffer":
            e = this.data.slice(this.index, t);
        }
        return (
          (this.index = t),
          this.push({
            data: e,
            meta: { percent: this.max ? (this.index / this.max) * 100 : 0 },
          })
        );
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(9),
      i = r(67);
    function o() {
      n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
    }
    r(2).inherits(o, n),
      (o.prototype.processChunk = function (e) {
        (this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0)),
          this.push(e);
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(9);
    (t.STORE = {
      magic: "\0\0",
      compressWorker: function () {
        return new n("STORE compression");
      },
      uncompressWorker: function () {
        return new n("STORE decompression");
      },
    }),
      (t.DEFLATE = r(194));
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n) {
      for (
        var i = (65535 & e) | 0, o = ((e >>> 16) & 65535) | 0, s = 0;
        0 !== r;

      ) {
        r -= s = r > 2e3 ? 2e3 : r;
        do {
          o = (o + (i = (i + t[n++]) | 0)) | 0;
        } while (--s);
        (i %= 65521), (o %= 65521);
      }
      return i | (o << 16) | 0;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = (function () {
      for (var e, t = [], r = 0; r < 256; r++) {
        e = r;
        for (var n = 0; n < 8; n++)
          e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
        t[r] = e;
      }
      return t;
    })();
    e.exports = function (e, t, r, i) {
      var o = n,
        s = i + r;
      e ^= -1;
      for (var a = i; a < s; a++) e = (e >>> 8) ^ o[255 & (e ^ t[a])];
      return -1 ^ e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(20),
      i = !0,
      o = !0;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (e) {
      i = !1;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (e) {
      o = !1;
    }
    for (var s = new n.Buf8(256), a = 0; a < 256; a++)
      s[a] =
        a >= 252
          ? 6
          : a >= 248
          ? 5
          : a >= 240
          ? 4
          : a >= 224
          ? 3
          : a >= 192
          ? 2
          : 1;
    function c(e, t) {
      if (t < 65534 && ((e.subarray && o) || (!e.subarray && i)))
        return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
      for (var r = "", s = 0; s < t; s++) r += String.fromCharCode(e[s]);
      return r;
    }
    (s[254] = s[254] = 1),
      (t.string2buf = function (e) {
        var t,
          r,
          i,
          o,
          s,
          a = e.length,
          c = 0;
        for (o = 0; o < a; o++)
          55296 == (64512 & (r = e.charCodeAt(o))) &&
            o + 1 < a &&
            56320 == (64512 & (i = e.charCodeAt(o + 1))) &&
            ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++),
            (c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
        for (t = new n.Buf8(c), s = 0, o = 0; s < c; o++)
          55296 == (64512 & (r = e.charCodeAt(o))) &&
            o + 1 < a &&
            56320 == (64512 & (i = e.charCodeAt(o + 1))) &&
            ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), o++),
            r < 128
              ? (t[s++] = r)
              : r < 2048
              ? ((t[s++] = 192 | (r >>> 6)), (t[s++] = 128 | (63 & r)))
              : r < 65536
              ? ((t[s++] = 224 | (r >>> 12)),
                (t[s++] = 128 | ((r >>> 6) & 63)),
                (t[s++] = 128 | (63 & r)))
              : ((t[s++] = 240 | (r >>> 18)),
                (t[s++] = 128 | ((r >>> 12) & 63)),
                (t[s++] = 128 | ((r >>> 6) & 63)),
                (t[s++] = 128 | (63 & r)));
        return t;
      }),
      (t.buf2binstring = function (e) {
        return c(e, e.length);
      }),
      (t.binstring2buf = function (e) {
        for (var t = new n.Buf8(e.length), r = 0, i = t.length; r < i; r++)
          t[r] = e.charCodeAt(r);
        return t;
      }),
      (t.buf2string = function (e, t) {
        var r,
          n,
          i,
          o,
          a = t || e.length,
          l = new Array(2 * a);
        for (n = 0, r = 0; r < a; )
          if ((i = e[r++]) < 128) l[n++] = i;
          else if ((o = s[i]) > 4) (l[n++] = 65533), (r += o - 1);
          else {
            for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < a; )
              (i = (i << 6) | (63 & e[r++])), o--;
            o > 1
              ? (l[n++] = 65533)
              : i < 65536
              ? (l[n++] = i)
              : ((i -= 65536),
                (l[n++] = 55296 | ((i >> 10) & 1023)),
                (l[n++] = 56320 | (1023 & i)));
          }
        return c(l, n);
      }),
      (t.utf8border = function (e, t) {
        var r;
        for (
          (t = t || e.length) > e.length && (t = e.length), r = t - 1;
          r >= 0 && 128 == (192 & e[r]);

        )
          r--;
        return r < 0 || 0 === r ? t : r + s[e[r]] > t ? r : t;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    };
  },
  function (e, t, r) {
    "use strict";
    (t.LOCAL_FILE_HEADER = "PK"),
      (t.CENTRAL_FILE_HEADER = "PK"),
      (t.CENTRAL_DIRECTORY_END = "PK"),
      (t.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
      (t.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
      (t.DATA_DESCRIPTOR = "PK\b");
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(18),
      o = r(114),
      s = r(208),
      a = r(209),
      c = r(116);
    e.exports = function (e) {
      var t = n.getTypeOf(e);
      return (
        n.checkSupport(t),
        "string" !== t || i.uint8array
          ? "nodebuffer" === t
            ? new a(e)
            : i.uint8array
            ? new c(n.transformTo("uint8array", e))
            : new o(n.transformTo("array", e))
          : new s(e)
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(115);
    function i(e) {
      n.call(this, e);
      for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
    }
    r(2).inherits(i, n),
      (i.prototype.byteAt = function (e) {
        return this.data[this.zero + e];
      }),
      (i.prototype.lastIndexOfSignature = function (e) {
        for (
          var t = e.charCodeAt(0),
            r = e.charCodeAt(1),
            n = e.charCodeAt(2),
            i = e.charCodeAt(3),
            o = this.length - 4;
          o >= 0;
          --o
        )
          if (
            this.data[o] === t &&
            this.data[o + 1] === r &&
            this.data[o + 2] === n &&
            this.data[o + 3] === i
          )
            return o - this.zero;
        return -1;
      }),
      (i.prototype.readAndCheckSignature = function (e) {
        var t = e.charCodeAt(0),
          r = e.charCodeAt(1),
          n = e.charCodeAt(2),
          i = e.charCodeAt(3),
          o = this.readData(4);
        return t === o[0] && r === o[1] && n === o[2] && i === o[3];
      }),
      (i.prototype.readData = function (e) {
        if ((this.checkOffset(e), 0 === e)) return [];
        var t = this.data.slice(
          this.zero + this.index,
          this.zero + this.index + e
        );
        return (this.index += e), t;
      }),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    function i(e) {
      (this.data = e),
        (this.length = e.length),
        (this.index = 0),
        (this.zero = 0);
    }
    (i.prototype = {
      checkOffset: function (e) {
        this.checkIndex(this.index + e);
      },
      checkIndex: function (e) {
        if (this.length < this.zero + e || e < 0)
          throw new Error(
            "End of data reached (data length = " +
              this.length +
              ", asked index = " +
              e +
              "). Corrupted zip ?"
          );
      },
      setIndex: function (e) {
        this.checkIndex(e), (this.index = e);
      },
      skip: function (e) {
        this.setIndex(this.index + e);
      },
      byteAt: function () {},
      readInt: function (e) {
        var t,
          r = 0;
        for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--)
          r = (r << 8) + this.byteAt(t);
        return (this.index += e), r;
      },
      readString: function (e) {
        return n.transformTo("string", this.readData(e));
      },
      readData: function () {},
      lastIndexOfSignature: function () {},
      readAndCheckSignature: function () {},
      readDate: function () {
        var e = this.readInt(4);
        return new Date(
          Date.UTC(
            1980 + ((e >> 25) & 127),
            ((e >> 21) & 15) - 1,
            (e >> 16) & 31,
            (e >> 11) & 31,
            (e >> 5) & 63,
            (31 & e) << 1
          )
        );
      },
    }),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    var n = r(114);
    function i(e) {
      n.call(this, e);
    }
    r(2).inherits(i, n),
      (i.prototype.readData = function (e) {
        if ((this.checkOffset(e), 0 === e)) return new Uint8Array(0);
        var t = this.data.subarray(
          this.zero + this.index,
          this.zero + this.index + e
        );
        return (this.index += e), t;
      }),
      (e.exports = i);
  },
  function (e, t, r) {
    var n = r(0),
      i = r(1),
      o = parseInt("0777", 8);
    function s(e, t, r, a) {
      "function" == typeof t
        ? ((r = t), (t = {}))
        : (t && "object" == typeof t) || (t = { mode: t });
      var c = t.mode,
        l = t.fs || i;
      void 0 === c && (c = o), a || (a = null);
      var u = r || function () {};
      (e = n.resolve(e)),
        l.mkdir(e, c, function (r) {
          if (!r) return u(null, (a = a || e));
          switch (r.code) {
            case "ENOENT":
              if (n.dirname(e) === e) return u(r);
              s(n.dirname(e), t, function (r, n) {
                r ? u(r, n) : s(e, t, u, n);
              });
              break;
            default:
              l.stat(e, function (e, t) {
                e || !t.isDirectory() ? u(r, a) : u(null, a);
              });
          }
        });
    }
    (e.exports = s.mkdirp = s.mkdirP = s),
      (s.sync = function e(t, r, s) {
        (r && "object" == typeof r) || (r = { mode: r });
        var a = r.mode,
          c = r.fs || i;
        void 0 === a && (a = o), s || (s = null), (t = n.resolve(t));
        try {
          c.mkdirSync(t, a), (s = s || t);
        } catch (i) {
          switch (i.code) {
            case "ENOENT":
              (s = e(n.dirname(t), r, s)), e(t, r, s);
              break;
            default:
              var l;
              try {
                l = c.statSync(t);
              } catch (e) {
                throw i;
              }
              if (!l.isDirectory()) throw i;
          }
        }
        return s;
      });
  },
  function (e, t) {
    e.exports = require("http");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.CancellationError = t.CancellationToken = void 0);
    const n = r(43);
    class i extends n.EventEmitter {
      constructor(e) {
        super(),
          (this.parentCancelHandler = null),
          (this._parent = null),
          (this._cancelled = !1),
          null != e && (this.parent = e);
      }
      get cancelled() {
        return (
          this._cancelled || (null != this._parent && this._parent.cancelled)
        );
      }
      set parent(e) {
        this.removeParentCancelHandler(),
          (this._parent = e),
          (this.parentCancelHandler = () => this.cancel()),
          this._parent.onCancel(this.parentCancelHandler);
      }
      cancel() {
        (this._cancelled = !0), this.emit("cancel");
      }
      onCancel(e) {
        this.cancelled ? e() : this.once("cancel", e);
      }
      createPromise(e) {
        if (this.cancelled) return Promise.reject(new o());
        const t = () => {
          if (null != r)
            try {
              this.removeListener("cancel", r), (r = null);
            } catch (e) {}
        };
        let r = null;
        return new Promise((t, n) => {
          let i = null;
          (r = () => {
            try {
              null != i && (i(), (i = null));
            } finally {
              n(new o());
            }
          }),
            this.cancelled
              ? r()
              : (this.onCancel(r),
                e(t, n, (e) => {
                  i = e;
                }));
        })
          .then((e) => (t(), e))
          .catch((e) => {
            throw (t(), e);
          });
      }
      removeParentCancelHandler() {
        const e = this._parent;
        null != e &&
          null != this.parentCancelHandler &&
          (e.removeListener("cancel", this.parentCancelHandler),
          (this.parentCancelHandler = null));
      }
      dispose() {
        try {
          this.removeParentCancelHandler();
        } finally {
          this.removeAllListeners(), (this._parent = null);
        }
      }
    }
    t.CancellationToken = i;
    class o extends Error {
      constructor() {
        super("cancelled");
      }
    }
    t.CancellationError = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.safeStringifyJson =
        t.configureRequestOptions =
        t.safeGetHeader =
        t.DigestTransform =
        t.configureRequestUrl =
        t.configureRequestOptionsFromUrl =
        t.HttpExecutor =
        t.parseJson =
        t.HttpError =
        t.createHttpError =
          void 0);
    const n = r(49),
      i = r(231),
      o = r(1),
      s = r(19),
      a = r(17),
      c = r(119),
      l = r(3),
      u = r(123),
      h = i.default("electron-builder");
    function f(e, t = null) {
      return new p(
        e.statusCode || -1,
        `${e.statusCode} ${e.statusMessage}` +
          (null == t ? "" : "\n" + JSON.stringify(t, null, "  ")) +
          "\nHeaders: " +
          E(e.headers),
        t
      );
    }
    t.createHttpError = f;
    const d = new Map([
      [429, "Too many requests"],
      [400, "Bad request"],
      [403, "Forbidden"],
      [404, "Not found"],
      [405, "Method not allowed"],
      [406, "Not acceptable"],
      [408, "Request timeout"],
      [413, "Request entity too large"],
      [500, "Internal server error"],
      [502, "Bad gateway"],
      [503, "Service unavailable"],
      [504, "Gateway timeout"],
      [505, "HTTP version not supported"],
    ]);
    class p extends Error {
      constructor(e, t = "HTTP error: " + (d.get(e) || e), r = null) {
        super(t),
          (this.statusCode = e),
          (this.description = r),
          (this.name = "HttpError"),
          (this.code = "HTTP_ERROR_" + e);
      }
      isServerError() {
        return this.statusCode >= 500 && this.statusCode <= 599;
      }
    }
    (t.HttpError = p),
      (t.parseJson = function (e) {
        return e.then((e) =>
          null == e || 0 === e.length ? null : JSON.parse(e)
        );
      });
    class m {
      constructor() {
        this.maxRedirects = 10;
      }
      request(e, t = new c.CancellationToken(), r) {
        b(e);
        const n = null == r ? void 0 : JSON.stringify(r),
          i = n ? Buffer.from(n) : void 0;
        if (null != i) {
          h(n);
          const { headers: t, ...r } = e;
          e = {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "Content-Length": i.length,
              ...t,
            },
            ...r,
          };
        }
        return this.doApiRequest(e, t, (e) => e.end(i));
      }
      doApiRequest(e, t, r, n = 0) {
        return (
          h.enabled && h("Request: " + E(e)),
          t.createPromise((i, o, s) => {
            const a = this.createRequest(e, (s) => {
              try {
                this.handleResponse(s, e, t, i, o, n, r);
              } catch (e) {
                o(e);
              }
            });
            this.addErrorAndTimeoutHandlers(a, o),
              this.addRedirectHandlers(a, e, o, n, (e) => {
                this.doApiRequest(e, t, r, n).then(i).catch(o);
              }),
              r(a, o),
              s(() => a.abort());
          })
        );
      }
      addRedirectHandlers(e, t, r, n, i) {}
      addErrorAndTimeoutHandlers(e, t) {
        this.addTimeOutHandler(e, t),
          e.on("error", t),
          e.on("aborted", () => {
            t(new Error("Request has been aborted by the server"));
          });
      }
      handleResponse(e, t, r, n, i, o, s) {
        var a;
        if (
          (h.enabled &&
            h(
              `Response: ${e.statusCode} ${
                e.statusMessage
              }, request options: ${E(t)}`
            ),
          404 === e.statusCode)
        )
          return void i(
            f(
              e,
              `method: ${t.method || "GET"} url: ${t.protocol || "https:"}//${
                t.hostname
              }${t.port ? ":" + t.port : ""}${
                t.path
              }\n\nPlease double check that your authentication token is correct. Due to security reasons, actual status maybe not reported, but 404.\n`
            )
          );
        if (204 === e.statusCode) return void n();
        const c = null !== (a = e.statusCode) && void 0 !== a ? a : 0,
          l = c >= 300 && c < 400,
          u = w(e, "location");
        if (l && null != u)
          return o > this.maxRedirects
            ? void i(this.createMaxRedirectError())
            : void this.doApiRequest(m.prepareRedirectUrlOptions(u, t), r, s, o)
                .then(n)
                .catch(i);
        e.setEncoding("utf8");
        let d = "";
        e.on("error", i),
          e.on("data", (e) => (d += e)),
          e.on("end", () => {
            try {
              if (null != e.statusCode && e.statusCode >= 400) {
                const r = w(e, "content-type"),
                  n =
                    null != r &&
                    (Array.isArray(r)
                      ? null != r.find((e) => e.includes("json"))
                      : r.includes("json"));
                i(
                  f(
                    e,
                    `method: ${t.method || "GET"} url: ${
                      t.protocol || "https:"
                    }//${t.hostname}${t.port ? ":" + t.port : ""}${
                      t.path
                    }\n\n          Data:\n          ${
                      n ? JSON.stringify(JSON.parse(d)) : d
                    }\n          `
                  )
                );
              } else n(0 === d.length ? null : d);
            } catch (e) {
              i(e);
            }
          });
      }
      async downloadToBuffer(e, t) {
        return await t.cancellationToken.createPromise((r, n, i) => {
          let o = null;
          const s = { headers: t.headers || void 0, redirect: "manual" };
          v(e, s),
            b(s),
            this.doDownload(
              s,
              {
                destination: null,
                options: t,
                onCancel: i,
                callback: (e) => {
                  null == e ? r(o) : n(e);
                },
                responseHandler: (e, t) => {
                  const r = w(e, "content-length");
                  let n = -1;
                  if (null != r) {
                    const e = parseInt(r, 10);
                    if (e > 0) {
                      if (e > 524288e3)
                        return void t(
                          new Error("Maximum allowed size is 500 MB")
                        );
                      (o = Buffer.alloc(e)), (n = 0);
                    }
                  }
                  e.on("data", (e) => {
                    if (-1 !== n) e.copy(o, n), (n += e.length);
                    else if (null == o) o = e;
                    else {
                      if (o.length > 524288e3)
                        return void t(
                          new Error("Maximum allowed size is 500 MB")
                        );
                      o = Buffer.concat([o, e]);
                    }
                  }),
                    e.on("end", () => {
                      null != o && -1 !== n && n !== o.length
                        ? t(
                            new Error(
                              `Received data length ${n} is not equal to expected ${o.length}`
                            )
                          )
                        : t(null);
                    });
                },
              },
              0
            );
        });
      }
      doDownload(e, t, r) {
        const n = this.createRequest(e, (n) => {
          if (n.statusCode >= 400)
            return void t.callback(
              new Error(
                `Cannot download "${e.protocol || "https:"}//${e.hostname}${
                  e.path
                }", status ${n.statusCode}: ${n.statusMessage}`
              )
            );
          n.on("error", t.callback);
          const i = w(n, "location");
          null == i
            ? null == t.responseHandler
              ? (function (e, t) {
                  if (
                    !(function (e, t, r) {
                      if (null != e && null != t && e !== t)
                        return (
                          r(
                            new Error(
                              `checksum mismatch: expected ${t} but got ${e} (X-Checksum-Sha2 header)`
                            )
                          ),
                          !1
                        );
                      return !0;
                    })(w(t, "X-Checksum-Sha2"), e.options.sha2, e.callback)
                  )
                    return;
                  const r = [];
                  if (null != e.options.onProgress) {
                    const n = w(t, "content-length");
                    null != n &&
                      r.push(
                        new u.ProgressCallbackTransform(
                          parseInt(n, 10),
                          e.options.cancellationToken,
                          e.options.onProgress
                        )
                      );
                  }
                  const n = e.options.sha512;
                  null != n
                    ? r.push(
                        new y(
                          n,
                          "sha512",
                          128 !== n.length ||
                          n.includes("+") ||
                          n.includes("Z") ||
                          n.includes("=")
                            ? "base64"
                            : "hex"
                        )
                      )
                    : null != e.options.sha2 &&
                      r.push(new y(e.options.sha2, "sha256", "hex"));
                  const i = o.createWriteStream(e.destination);
                  r.push(i);
                  let s = t;
                  for (const t of r)
                    t.on("error", (t) => {
                      e.options.cancellationToken.cancelled || e.callback(t);
                    }),
                      (s = s.pipe(t));
                  i.on("finish", () => {
                    i.close(e.callback);
                  });
                })(t, n)
              : t.responseHandler(n, t.callback)
            : r < this.maxRedirects
            ? this.doDownload(m.prepareRedirectUrlOptions(i, e), t, r++)
            : t.callback(this.createMaxRedirectError());
        });
        this.addErrorAndTimeoutHandlers(n, t.callback),
          this.addRedirectHandlers(n, e, t.callback, r, (e) => {
            this.doDownload(e, t, r++);
          }),
          n.end();
      }
      createMaxRedirectError() {
        return new Error(`Too many redirects (> ${this.maxRedirects})`);
      }
      addTimeOutHandler(e, t) {
        e.on("socket", (r) => {
          r.setTimeout(6e4, () => {
            e.abort(), t(new Error("Request timed out"));
          });
        });
      }
      static prepareRedirectUrlOptions(e, t) {
        const r = g(e, { ...t }),
          n = r.headers;
        if (null == n ? void 0 : n.authorization) {
          const t = new a.URL(e);
          (t.hostname.endsWith(".amazonaws.com") ||
            t.searchParams.has("X-Amz-Credential")) &&
            delete n.authorization;
        }
        return r;
      }
      static retryOnServerError(e, t = 3) {
        for (let r = 0; ; r++)
          try {
            return e();
          } catch (e) {
            if (
              r < t &&
              ((e instanceof p && e.isServerError()) || "EPIPE" === e.code)
            )
              continue;
            throw e;
          }
      }
    }
    function g(e, t) {
      const r = b(t);
      return v(new a.URL(e), r), r;
    }
    function v(e, t) {
      (t.protocol = e.protocol),
        (t.hostname = e.hostname),
        e.port ? (t.port = e.port) : t.port && delete t.port,
        (t.path = e.pathname + e.search);
    }
    (t.HttpExecutor = m),
      (t.configureRequestOptionsFromUrl = g),
      (t.configureRequestUrl = v);
    class y extends s.Transform {
      constructor(e, t = "sha512", r = "base64") {
        super(),
          (this.expected = e),
          (this.algorithm = t),
          (this.encoding = r),
          (this._actual = null),
          (this.isValidateOnEnd = !0),
          (this.digester = n.createHash(t));
      }
      get actual() {
        return this._actual;
      }
      _transform(e, t, r) {
        this.digester.update(e), r(null, e);
      }
      _flush(e) {
        if (
          ((this._actual = this.digester.digest(this.encoding)),
          this.isValidateOnEnd)
        )
          try {
            this.validate();
          } catch (t) {
            return void e(t);
          }
        e(null);
      }
      validate() {
        if (null == this._actual)
          throw l.newError("Not finished yet", "ERR_STREAM_NOT_FINISHED");
        if (this._actual !== this.expected)
          throw l.newError(
            `${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`,
            "ERR_CHECKSUM_MISMATCH"
          );
        return null;
      }
    }
    function w(e, t) {
      const r = e.headers[t];
      return null == r
        ? null
        : Array.isArray(r)
        ? 0 === r.length
          ? null
          : r[r.length - 1]
        : r;
    }
    function b(e, t, r) {
      null != r && (e.method = r), (e.headers = { ...e.headers });
      const n = e.headers;
      return (
        null != t &&
          (n.authorization =
            t.startsWith("Basic") || t.startsWith("Bearer") ? t : "token " + t),
        null == n["User-Agent"] && (n["User-Agent"] = "electron-builder"),
        (null != r && "GET" !== r && null != n["Cache-Control"]) ||
          (n["Cache-Control"] = "no-cache"),
        null == e.protocol &&
          null != process.versions.electron &&
          (e.protocol = "https:"),
        e
      );
    }
    function E(e, t) {
      return JSON.stringify(
        e,
        (e, r) =>
          e.endsWith("Authorization") ||
          e.endsWith("authorization") ||
          e.endsWith("Password") ||
          e.endsWith("PASSWORD") ||
          e.endsWith("Token") ||
          e.includes("password") ||
          e.includes("token") ||
          (null != t && t.has(e))
            ? "<stripped sensitive data>"
            : r,
        2
      );
    }
    (t.DigestTransform = y),
      (t.safeGetHeader = w),
      (t.configureRequestOptions = b),
      (t.safeStringifyJson = E);
  },
  function (e, t, r) {
    e.exports = function (e) {
      function t(e) {
        let r,
          i,
          o,
          s = null;
        function a(...e) {
          if (!a.enabled) return;
          const n = a,
            i = Number(new Date()),
            o = i - (r || i);
          (n.diff = o),
            (n.prev = r),
            (n.curr = i),
            (r = i),
            (e[0] = t.coerce(e[0])),
            "string" != typeof e[0] && e.unshift("%O");
          let s = 0;
          (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, i) => {
            if ("%%" === r) return "%";
            s++;
            const o = t.formatters[i];
            if ("function" == typeof o) {
              const t = e[s];
              (r = o.call(n, t)), e.splice(s, 1), s--;
            }
            return r;
          })),
            t.formatArgs.call(n, e);
          (n.log || t.log).apply(n, e);
        }
        return (
          (a.namespace = e),
          (a.useColors = t.useColors()),
          (a.color = t.selectColor(e)),
          (a.extend = n),
          (a.destroy = t.destroy),
          Object.defineProperty(a, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () =>
              null !== s
                ? s
                : (i !== t.namespaces &&
                    ((i = t.namespaces), (o = t.enabled(e))),
                  o),
            set: (e) => {
              s = e;
            },
          }),
          "function" == typeof t.init && t.init(a),
          a
        );
      }
      function n(e, r) {
        const n = t(this.namespace + (void 0 === r ? ":" : r) + e);
        return (n.log = this.log), n;
      }
      function i(e) {
        return e
          .toString()
          .substring(2, e.toString().length - 2)
          .replace(/\.\*\?$/, "*");
      }
      return (
        (t.debug = t),
        (t.default = t),
        (t.coerce = function (e) {
          if (e instanceof Error) return e.stack || e.message;
          return e;
        }),
        (t.disable = function () {
          const e = [
            ...t.names.map(i),
            ...t.skips.map(i).map((e) => "-" + e),
          ].join(",");
          return t.enable(""), e;
        }),
        (t.enable = function (e) {
          let r;
          t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
          const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
            i = n.length;
          for (r = 0; r < i; r++)
            n[r] &&
              ("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          if ("*" === e[e.length - 1]) return !0;
          let r, n;
          for (r = 0, n = t.skips.length; r < n; r++)
            if (t.skips[r].test(e)) return !1;
          for (r = 0, n = t.names.length; r < n; r++)
            if (t.names[r].test(e)) return !0;
          return !1;
        }),
        (t.humanize = r(233)),
        (t.destroy = function () {
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          );
        }),
        Object.keys(e).forEach((r) => {
          t[r] = e[r];
        }),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {}),
        (t.selectColor = function (e) {
          let r = 0;
          for (let t = 0; t < e.length; t++)
            (r = (r << 5) - r + e.charCodeAt(t)), (r |= 0);
          return t.colors[Math.abs(r) % t.colors.length];
        }),
        t.enable(t.load()),
        t
      );
    };
  },
  function (e, t) {
    e.exports = require("tty");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ProgressCallbackTransform = void 0);
    const n = r(19);
    class i extends n.Transform {
      constructor(e, t, r) {
        super(),
          (this.total = e),
          (this.cancellationToken = t),
          (this.onProgress = r),
          (this.start = Date.now()),
          (this.transferred = 0),
          (this.delta = 0),
          (this.nextUpdate = this.start + 1e3);
      }
      _transform(e, t, r) {
        if (this.cancellationToken.cancelled)
          return void r(new Error("cancelled"), null);
        (this.transferred += e.length), (this.delta += e.length);
        const n = Date.now();
        n >= this.nextUpdate &&
          this.transferred !== this.total &&
          ((this.nextUpdate = n + 1e3),
          this.onProgress({
            total: this.total,
            delta: this.delta,
            transferred: this.transferred,
            percent: (this.transferred / this.total) * 100,
            bytesPerSecond: Math.round(
              this.transferred / ((n - this.start) / 1e3)
            ),
          }),
          (this.delta = 0)),
          r(null, e);
      }
      _flush(e) {
        this.cancellationToken.cancelled
          ? e(new Error("cancelled"))
          : (this.onProgress({
              total: this.total,
              delta: this.delta,
              transferred: this.total,
              percent: 100,
              bytesPerSecond: Math.round(
                this.transferred / ((Date.now() - this.start) / 1e3)
              ),
            }),
            (this.delta = 0),
            e(null));
      }
    }
    t.ProgressCallbackTransform = i;
  },
  function (e, t, r) {
    "use strict";
    const n = r(6);
    e.exports = {
      utimesMillis: function (e, t, r, i) {
        n.open(e, "r+", (e, o) => {
          if (e) return i(e);
          n.futimes(o, t, r, (e) => {
            n.close(o, (t) => {
              i && i(e || t);
            });
          });
        });
      },
      utimesMillisSync: function (e, t, r) {
        const i = n.openSync(e, "r+");
        return n.futimesSync(i, t, r), n.closeSync(i);
      },
    };
  },
  function (e, t, r) {
    const n = r(37),
      i = r(51),
      o = r(7),
      s = r(126),
      a = r(31),
      c = r(265),
      l = r(266),
      u = r(267),
      h = r(268),
      f = r(269),
      d = r(270),
      p = r(271),
      m = r(272),
      g = r(12),
      v = r(273),
      y = r(274),
      w = r(75),
      b = r(275),
      E = r(276),
      _ = r(53),
      A = r(76),
      S = r(127),
      O = r(128),
      C = r(77),
      I = r(78),
      k = r(129),
      T = r(277),
      x = r(54),
      R = r(13),
      N = r(55),
      D = r(278),
      P = r(279),
      L = r(280),
      F = r(281),
      U = r(282),
      j = r(79),
      B = r(283),
      M = r(284),
      $ = r(285),
      z = r(286),
      G = r(287);
    e.exports = {
      parse: a,
      valid: c,
      clean: l,
      inc: u,
      diff: h,
      major: f,
      minor: d,
      patch: p,
      prerelease: m,
      compare: g,
      rcompare: v,
      compareLoose: y,
      compareBuild: w,
      sort: b,
      rsort: E,
      gt: _,
      lt: A,
      eq: S,
      neq: O,
      gte: C,
      lte: I,
      cmp: k,
      coerce: T,
      Comparator: x,
      Range: R,
      satisfies: N,
      toComparators: D,
      maxSatisfying: P,
      minSatisfying: L,
      minVersion: F,
      validRange: U,
      outside: j,
      gtr: B,
      ltr: M,
      intersects: $,
      simplifyRange: z,
      subset: G,
      SemVer: o,
      re: n.re,
      src: n.src,
      tokens: n.t,
      SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: i.RELEASE_TYPES,
      compareIdentifiers: s.compareIdentifiers,
      rcompareIdentifiers: s.rcompareIdentifiers,
    };
  },
  function (e, t) {
    const r = /^[0-9]+$/,
      n = (e, t) => {
        const n = r.test(e),
          i = r.test(t);
        return (
          n && i && ((e = +e), (t = +t)),
          e === t ? 0 : n && !i ? -1 : i && !n ? 1 : e < t ? -1 : 1
        );
      };
    e.exports = {
      compareIdentifiers: n,
      rcompareIdentifiers: (e, t) => n(t, e),
    };
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t, r) => 0 === n(e, t, r);
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t, r) => 0 !== n(e, t, r);
  },
  function (e, t, r) {
    const n = r(127),
      i = r(128),
      o = r(53),
      s = r(77),
      a = r(76),
      c = r(78);
    e.exports = (e, t, r, l) => {
      switch (t) {
        case "===":
          return (
            "object" == typeof e && (e = e.version),
            "object" == typeof r && (r = r.version),
            e === r
          );
        case "!==":
          return (
            "object" == typeof e && (e = e.version),
            "object" == typeof r && (r = r.version),
            e !== r
          );
        case "":
        case "=":
        case "==":
          return n(e, r, l);
        case "!=":
          return i(e, r, l);
        case ">":
          return o(e, r, l);
        case ">=":
          return s(e, r, l);
        case "<":
          return a(e, r, l);
        case "<=":
          return c(e, r, l);
        default:
          throw new TypeError("Invalid operator: " + t);
      }
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GenericProvider = void 0);
    const n = r(3),
      i = r(21),
      o = r(16);
    class s extends o.Provider {
      constructor(e, t, r) {
        super(r),
          (this.configuration = e),
          (this.updater = t),
          (this.baseUrl = i.newBaseUrl(this.configuration.url));
      }
      get channel() {
        const e = this.updater.channel || this.configuration.channel;
        return null == e
          ? this.getDefaultChannelName()
          : this.getCustomChannelName(e);
      }
      async getLatestVersion() {
        const e = i.getChannelFilename(this.channel),
          t = i.newUrlFromBase(e, this.baseUrl, this.updater.isAddNoCacheQuery);
        for (let r = 0; ; r++)
          try {
            return o.parseUpdateInfo(await this.httpRequest(t), e, t);
          } catch (t) {
            if (t instanceof n.HttpError && 404 === t.statusCode)
              throw n.newError(
                `Cannot find channel "${e}" update info: ${
                  t.stack || t.message
                }`,
                "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND"
              );
            if ("ECONNREFUSED" === t.code && r < 3) {
              await new Promise((e, t) => {
                try {
                  setTimeout(e, 1e3 * r);
                } catch (e) {
                  t(e);
                }
              });
              continue;
            }
            throw t;
          }
      }
      resolveFiles(e) {
        return o.resolveFiles(e, this.baseUrl);
      }
    }
    t.GenericProvider = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.computeReleaseNotes =
        t.GitHubProvider =
        t.BaseGitHubProvider =
          void 0);
    const n = r(3),
      i = r(125),
      o = r(17),
      s = r(21),
      a = r(16),
      c = /\/tag\/([^/]+)$/;
    class l extends a.Provider {
      constructor(e, t, r) {
        super({ ...r, isUseMultipleRangeRequest: !1 }),
          (this.options = e),
          (this.baseUrl = s.newBaseUrl(n.githubUrl(e, t)));
        const i = "github.com" === t ? "api.github.com" : t;
        this.baseApiUrl = s.newBaseUrl(n.githubUrl(e, i));
      }
      computeGithubBasePath(e) {
        const t = this.options.host;
        return null != t && "github.com" !== t && "api.github.com" !== t
          ? "/api/v3" + e
          : e;
      }
    }
    t.BaseGitHubProvider = l;
    function u(e) {
      const t = e.elementValueOrEmpty("content");
      return "No content." === t ? "" : t;
    }
    function h(e, t, r, n) {
      if (!t) return u(n);
      const o = [];
      for (const t of r.getElements("entry")) {
        const r = /\/tag\/v?([^/]+)$/.exec(
          t.element("link").attribute("href")
        )[1];
        i.lt(e, r) && o.push({ version: r, note: u(t) });
      }
      return o.sort((e, t) => i.rcompare(e.version, t.version));
    }
    (t.GitHubProvider = class extends l {
      constructor(e, t, r) {
        super(e, "github.com", r), (this.options = e), (this.updater = t);
      }
      async getLatestVersion() {
        const e = new n.CancellationToken(),
          t = await this.httpRequest(
            s.newUrlFromBase(this.basePath + ".atom", this.baseUrl),
            { accept: "application/xml, application/atom+xml, text/xml, */*" },
            e
          ),
          r = n.parseXml(t);
        let i,
          o = r.element("entry", !1, "No published versions on GitHub");
        try {
          if (this.updater.allowPrerelease)
            i = c.exec(o.element("link").attribute("href"))[1];
          else {
            i = await this.getLatestTagName(e);
            for (const e of r.getElements("entry"))
              if (c.exec(e.element("link").attribute("href"))[1] === i) {
                o = e;
                break;
              }
          }
        } catch (e) {
          throw n.newError(
            `Cannot parse releases feed: ${e.stack || e.message},\nXML:\n${t}`,
            "ERR_UPDATER_INVALID_RELEASE_FEED"
          );
        }
        if (null == i)
          throw n.newError(
            "No published versions on GitHub",
            "ERR_UPDATER_NO_PUBLISHED_VERSIONS"
          );
        const l = s.getChannelFilename(this.getDefaultChannelName()),
          u = s.newUrlFromBase(this.getBaseDownloadPath(i, l), this.baseUrl),
          f = this.createRequestOptions(u);
        let d;
        try {
          d = await this.executor.request(f, e);
        } catch (e) {
          if (
            !this.updater.allowPrerelease &&
            e instanceof n.HttpError &&
            404 === e.statusCode
          )
            throw n.newError(
              `Cannot find ${l} in the latest release artifacts (${u}): ${
                e.stack || e.message
              }`,
              "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND"
            );
          throw e;
        }
        const p = a.parseUpdateInfo(d, l, u);
        return (
          null == p.releaseName &&
            (p.releaseName = o.elementValueOrEmpty("title")),
          null == p.releaseNotes &&
            (p.releaseNotes = h(
              this.updater.currentVersion,
              this.updater.fullChangelog,
              r,
              o
            )),
          { tag: i, ...p }
        );
      }
      async getLatestTagName(e) {
        const t = this.options,
          r =
            null == t.host || "github.com" === t.host
              ? s.newUrlFromBase(this.basePath + "/latest", this.baseUrl)
              : new o.URL(
                  this.computeGithubBasePath(
                    `/repos/${t.owner}/${t.repo}/releases`
                  ) + "/latest",
                  this.baseApiUrl
                );
        try {
          const t = await this.httpRequest(
            r,
            { Accept: "application/json" },
            e
          );
          if (null == t) return null;
          return JSON.parse(t).tag_name;
        } catch (e) {
          throw n.newError(
            `Unable to find latest version on GitHub (${r}), please ensure a production release exists: ${
              e.stack || e.message
            }`,
            "ERR_UPDATER_LATEST_VERSION_NOT_FOUND"
          );
        }
      }
      get basePath() {
        return `/${this.options.owner}/${this.options.repo}/releases`;
      }
      resolveFiles(e) {
        return a.resolveFiles(e, this.baseUrl, (t) =>
          this.getBaseDownloadPath(e.tag, t.replace(/ /g, "-"))
        );
      }
      getBaseDownloadPath(e, t) {
        return `${this.basePath}/download/${e}/${t}`;
      }
    }),
      (t.computeReleaseNotes = h);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.AppImageUpdater = void 0);
    const n = r(3),
      i = r(56),
      o = r(23),
      s = r(1),
      a = r(0),
      c = r(133),
      l = r(134),
      u = r(48),
      h = r(16);
    class f extends c.BaseUpdater {
      constructor(e, t) {
        super(e, t);
      }
      isUpdaterActive() {
        return null == process.env.APPIMAGE
          ? (null == process.env.SNAP
              ? this._logger.warn(
                  "APPIMAGE env is not defined, current application is not an AppImage"
                )
              : this._logger.info("SNAP env is defined, updater is disabled"),
            !1)
          : super.isUpdaterActive();
      }
      doDownloadUpdate(e) {
        const t = e.updateInfoAndProvider.provider,
          r = h.findFile(
            t.resolveFiles(e.updateInfoAndProvider.info),
            "AppImage"
          );
        return this.executeDownload({
          fileExtension: "AppImage",
          fileInfo: r,
          downloadUpdateOptions: e,
          task: async (i, s) => {
            const a = process.env.APPIMAGE;
            if (null == a)
              throw n.newError(
                "APPIMAGE env is not defined",
                "ERR_UPDATER_OLD_FILE_NOT_FOUND"
              );
            let c = !1;
            try {
              const n = {
                newUrl: r.url,
                oldFile: a,
                logger: this._logger,
                newFile: i,
                isUseMultipleRangeRequest: t.isUseMultipleRangeRequest,
                requestHeaders: e.requestHeaders,
                cancellationToken: e.cancellationToken,
              };
              this.listenerCount(u.DOWNLOAD_PROGRESS) > 0 &&
                (n.onProgress = (e) => this.emit(u.DOWNLOAD_PROGRESS, e)),
                await new l.FileWithEmbeddedBlockMapDifferentialDownloader(
                  r.info,
                  this.httpExecutor,
                  n
                ).download();
            } catch (e) {
              this._logger.error(
                "Cannot download differentially, fallback to full download: " +
                  (e.stack || e)
              ),
                (c = "linux" === process.platform);
            }
            c && (await this.httpExecutor.download(r.url, i, s)),
              await o.chmod(i, 493);
          },
        });
      }
      doInstall(e) {
        const t = process.env.APPIMAGE;
        if (null == t)
          throw n.newError(
            "APPIMAGE env is not defined",
            "ERR_UPDATER_OLD_FILE_NOT_FOUND"
          );
        let r;
        s.unlinkSync(t);
        const o = a.basename(t);
        (r =
          a.basename(e.installerPath) !== o && /\d+\.\d+\.\d+/.test(o)
            ? a.join(a.dirname(t), a.basename(e.installerPath))
            : t),
          i.execFileSync("mv", ["-f", e.installerPath, r]),
          r !== t && this.emit("appimage-filename-updated", r);
        const c = { ...process.env, APPIMAGE_SILENT_INSTALL: "true" };
        return (
          e.isForceRunAfter
            ? i.spawn(r, [], { detached: !0, stdio: "ignore", env: c }).unref()
            : ((c.APPIMAGE_EXIT_AFTER_INSTALL = "true"),
              i.execFileSync(r, [], { env: c })),
          !0
        );
      }
    }
    t.AppImageUpdater = f;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BaseUpdater = void 0);
    const n = r(69);
    class i extends n.AppUpdater {
      constructor(e, t) {
        super(e, t),
          (this.quitAndInstallCalled = !1),
          (this.quitHandlerAdded = !1);
      }
      quitAndInstall(e = !1, t = !1) {
        this._logger.info("Install on explicit quitAndInstall");
        this.install(e, !e || t)
          ? setImmediate(() => {
              r(4).autoUpdater.emit("before-quit-for-update"), this.app.quit();
            })
          : (this.quitAndInstallCalled = !1);
      }
      executeDownload(e) {
        return super.executeDownload({
          ...e,
          done: (e) => (
            this.dispatchUpdateDownloaded(e),
            this.addQuitHandler(),
            Promise.resolve()
          ),
        });
      }
      install(e, t) {
        if (this.quitAndInstallCalled)
          return (
            this._logger.warn(
              "install call ignored: quitAndInstallCalled is set to true"
            ),
            !1
          );
        const r = this.downloadedUpdateHelper,
          n = null == r ? null : r.file,
          i = null == r ? null : r.downloadedFileInfo;
        if (null == n || null == i)
          return (
            this.dispatchError(
              new Error("No valid update available, can't quit and install")
            ),
            !1
          );
        this.quitAndInstallCalled = !0;
        try {
          return (
            this._logger.info(`Install: isSilent: ${e}, isForceRunAfter: ${t}`),
            this.doInstall({
              installerPath: n,
              isSilent: e,
              isForceRunAfter: t,
              isAdminRightsRequired: i.isAdminRightsRequired,
            })
          );
        } catch (e) {
          return this.dispatchError(e), !1;
        }
      }
      addQuitHandler() {
        !this.quitHandlerAdded &&
          this.autoInstallOnAppQuit &&
          ((this.quitHandlerAdded = !0),
          this.app.onQuit((e) => {
            this.quitAndInstallCalled
              ? this._logger.info(
                  "Update installer has already been triggered. Quitting application."
                )
              : this.autoInstallOnAppQuit
              ? 0 === e
                ? (this._logger.info("Auto install update on quit"),
                  this.install(!0, !1))
                : this._logger.info(
                    "Update will be not installed on quit because application is quitting with exit code " +
                      e
                  )
              : this._logger.info(
                  "Update will not be installed on quit because autoInstallOnAppQuit is set to false."
                );
          }));
      }
    }
    t.BaseUpdater = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FileWithEmbeddedBlockMapDifferentialDownloader = void 0);
    const n = r(23),
      i = r(135),
      o = r(137);
    class s extends i.DifferentialDownloader {
      async download() {
        const e = this.blockAwareFileInfo,
          t = e.size,
          r = t - (e.blockMapSize + 4);
        this.fileMetadataBuffer = await this.readRemoteBytes(r, t - 1);
        const i = a(
          this.fileMetadataBuffer.slice(0, this.fileMetadataBuffer.length - 4)
        );
        await this.doDownload(
          await (async function (e) {
            const t = await n.open(e, "r");
            try {
              const e = (await n.fstat(t)).size,
                r = Buffer.allocUnsafe(4);
              await n.read(t, r, 0, r.length, e - r.length);
              const i = Buffer.allocUnsafe(r.readUInt32BE(0));
              return (
                await n.read(t, i, 0, i.length, e - r.length - i.length),
                await n.close(t),
                a(i)
              );
            } catch (e) {
              throw (await n.close(t), e);
            }
          })(this.options.oldFile),
          i
        );
      }
    }
    function a(e) {
      return JSON.parse(o.inflateRawSync(e).toString());
    }
    t.FileWithEmbeddedBlockMapDifferentialDownloader = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DifferentialDownloader = void 0);
    const n = r(3),
      i = r(23),
      o = r(1),
      s = r(136),
      a = r(17),
      c = r(80),
      l = r(301),
      u = r(302);
    function h(e, t = " KB") {
      return new Intl.NumberFormat("en").format((e / 1024).toFixed(2)) + t;
    }
    t.DifferentialDownloader = class {
      constructor(e, t, r) {
        (this.blockAwareFileInfo = e),
          (this.httpExecutor = t),
          (this.options = r),
          (this.fileMetadataBuffer = null),
          (this.logger = r.logger);
      }
      createRequestOptions() {
        const e = {
          headers: { ...this.options.requestHeaders, accept: "*/*" },
        };
        return (
          n.configureRequestUrl(this.options.newUrl, e),
          n.configureRequestOptions(e),
          e
        );
      }
      doDownload(e, t) {
        if (e.version !== t.version)
          throw new Error(
            `version is different (${e.version} - ${t.version}), full download is required`
          );
        const r = this.logger,
          n = c.computeOperations(e, t, r);
        null != r.debug && r.debug(JSON.stringify(n, null, 2));
        let i = 0,
          o = 0;
        for (const e of n) {
          const t = e.end - e.start;
          e.kind === c.OperationKind.DOWNLOAD ? (i += t) : (o += t);
        }
        const s = this.blockAwareFileInfo.size;
        if (
          i +
            o +
            (null == this.fileMetadataBuffer
              ? 0
              : this.fileMetadataBuffer.length) !==
          s
        )
          throw new Error(
            `Internal error, size mismatch: downloadSize: ${i}, copySize: ${o}, newSize: ${s}`
          );
        return (
          r.info(
            `Full: ${h(s)}, To download: ${h(i)} (${Math.round(
              i / (s / 100)
            )}%)`
          ),
          this.downloadFile(n)
        );
      }
      downloadFile(e) {
        const t = [],
          r = () =>
            Promise.all(
              t.map((e) =>
                i.close(e.descriptor).catch((t) => {
                  this.logger.error(`cannot close file "${e.path}": ${t}`);
                })
              )
            );
        return this.doDownloadFile(e, t)
          .then(r)
          .catch((e) =>
            r()
              .catch((t) => {
                try {
                  this.logger.error("cannot close files: " + t);
                } catch (e) {
                  try {
                    console.error(e);
                  } catch (e) {}
                }
                throw e;
              })
              .then(() => {
                throw e;
              })
          );
      }
      async doDownloadFile(e, t) {
        const r = await i.open(this.options.oldFile, "r");
        t.push({ descriptor: r, path: this.options.oldFile });
        const h = await i.open(this.options.newFile, "w");
        t.push({ descriptor: h, path: this.options.newFile });
        const f = o.createWriteStream(this.options.newFile, { fd: h });
        await new Promise((i, o) => {
          const h = [];
          let d = void 0;
          if (
            !this.options.isUseMultipleRangeRequest &&
            this.options.onProgress
          ) {
            const t = [];
            let r = 0;
            for (const n of e)
              n.kind === c.OperationKind.DOWNLOAD &&
                (t.push(n.end - n.start), (r += n.end - n.start));
            const n = { expectedByteCounts: t, grandTotal: r };
            (d = new u.ProgressDifferentialDownloadCallbackTransform(
              n,
              this.options.cancellationToken,
              this.options.onProgress
            )),
              h.push(d);
          }
          const p = new n.DigestTransform(this.blockAwareFileInfo.sha512);
          (p.isValidateOnEnd = !1),
            h.push(p),
            f.on("finish", () => {
              f.close(() => {
                t.splice(1, 1);
                try {
                  p.validate();
                } catch (e) {
                  return void o(e);
                }
                i(void 0);
              });
            }),
            h.push(f);
          let m = null;
          for (const e of h) e.on("error", o), (m = null == m ? e : m.pipe(e));
          const g = h[0];
          let v;
          if (this.options.isUseMultipleRangeRequest)
            return (
              (v = l.executeTasksUsingMultipleRangeRequests(this, e, g, r, o)),
              void v(0)
            );
          let y = 0,
            w = null;
          this.logger.info("Differential download: " + this.options.newUrl);
          const b = this.createRequestOptions();
          (b.redirect = "manual"),
            (v = (t) => {
              var i, l;
              if (t >= e.length)
                return (
                  null != this.fileMetadataBuffer &&
                    g.write(this.fileMetadataBuffer),
                  void g.end()
                );
              const u = e[t++];
              if (u.kind === c.OperationKind.COPY)
                return (
                  d && d.beginFileCopy(),
                  void s.copyData(u, g, r, o, () => v(t))
                );
              const h = `bytes=${u.start}-${u.end - 1}`;
              (b.headers.range = h),
                null ===
                  (l =
                    null === (i = this.logger) || void 0 === i
                      ? void 0
                      : i.debug) ||
                  void 0 === l ||
                  l.call(i, "download range: " + h),
                d && d.beginRangeDownload();
              const f = this.httpExecutor.createRequest(b, (e) => {
                e.statusCode >= 400 && o(n.createHttpError(e)),
                  e.pipe(g, { end: !1 }),
                  e.once("end", () => {
                    d && d.endRangeDownload(),
                      100 == ++y
                        ? ((y = 0), setTimeout(() => v(t), 1e3))
                        : v(t);
                  });
              });
              f.on("redirect", (e, t, r) => {
                this.logger.info(
                  "Redirect to " +
                    (function (e) {
                      const t = e.indexOf("?");
                      return t < 0 ? e : e.substring(0, t);
                    })(r)
                ),
                  (w = r),
                  n.configureRequestUrl(new a.URL(w), b),
                  f.followRedirect();
              }),
                this.httpExecutor.addErrorAndTimeoutHandlers(f, o),
                f.end();
            }),
            v(0);
        });
      }
      async readRemoteBytes(e, t) {
        const r = Buffer.allocUnsafe(t + 1 - e),
          n = this.createRequestOptions();
        n.headers.range = `bytes=${e}-${t}`;
        let i = 0;
        if (
          (await this.request(n, (e) => {
            e.copy(r, i), (i += e.length);
          }),
          i !== r.length)
        )
          throw new Error(
            `Received data length ${i} is not equal to expected ${r.length}`
          );
        return r;
      }
      request(e, t) {
        return new Promise((r, n) => {
          const i = this.httpExecutor.createRequest(e, (e) => {
            l.checkIsRangesSupported(e, n) &&
              (e.on("data", t), e.on("end", () => r()));
          });
          this.httpExecutor.addErrorAndTimeoutHandlers(i, n), i.end();
        });
      }
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DataSplitter = t.copyData = void 0);
    const n = r(3),
      i = r(1),
      o = r(19),
      s = r(80),
      a = Buffer.from("\r\n\r\n");
    var c;
    function l(e, t, r, n, o) {
      const s = i.createReadStream("", {
        fd: r,
        autoClose: !1,
        start: e.start,
        end: e.end - 1,
      });
      s.on("error", n), s.once("end", o), s.pipe(t, { end: !1 });
    }
    !(function (e) {
      (e[(e.INIT = 0)] = "INIT"),
        (e[(e.HEADER = 1)] = "HEADER"),
        (e[(e.BODY = 2)] = "BODY");
    })(c || (c = {})),
      (t.copyData = l);
    class u extends o.Writable {
      constructor(e, t, r, n, i, o) {
        super(),
          (this.out = e),
          (this.options = t),
          (this.partIndexToTaskIndex = r),
          (this.partIndexToLength = i),
          (this.finishHandler = o),
          (this.partIndex = -1),
          (this.headerListBuffer = null),
          (this.readState = c.INIT),
          (this.ignoreByteCount = 0),
          (this.remainingPartDataCount = 0),
          (this.actualPartLength = 0),
          (this.boundaryLength = n.length + 4),
          (this.ignoreByteCount = this.boundaryLength - 2);
      }
      get isFinished() {
        return this.partIndex === this.partIndexToLength.length;
      }
      _write(e, t, r) {
        this.isFinished
          ? console.error(`Trailing ignored data: ${e.length} bytes`)
          : this.handleData(e).then(r).catch(r);
      }
      async handleData(e) {
        let t = 0;
        if (0 !== this.ignoreByteCount && 0 !== this.remainingPartDataCount)
          throw n.newError(
            "Internal error",
            "ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH"
          );
        if (this.ignoreByteCount > 0) {
          const r = Math.min(this.ignoreByteCount, e.length);
          (this.ignoreByteCount -= r), (t = r);
        } else if (this.remainingPartDataCount > 0) {
          const r = Math.min(this.remainingPartDataCount, e.length);
          (this.remainingPartDataCount -= r),
            await this.processPartData(e, 0, r),
            (t = r);
        }
        if (t !== e.length) {
          if (this.readState === c.HEADER) {
            const r = this.searchHeaderListEnd(e, t);
            if (-1 === r) return;
            (t = r), (this.readState = c.BODY), (this.headerListBuffer = null);
          }
          for (;;) {
            if (this.readState === c.BODY) this.readState = c.INIT;
            else {
              this.partIndex++;
              let r = this.partIndexToTaskIndex.get(this.partIndex);
              if (null == r) {
                if (!this.isFinished)
                  throw n.newError(
                    "taskIndex is null",
                    "ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL"
                  );
                r = this.options.end;
              }
              const i =
                0 === this.partIndex
                  ? this.options.start
                  : this.partIndexToTaskIndex.get(this.partIndex - 1) + 1;
              if (i < r) await this.copyExistingData(i, r);
              else if (i > r)
                throw n.newError(
                  "prevTaskIndex must be < taskIndex",
                  "ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED"
                );
              if (this.isFinished)
                return this.onPartEnd(), void this.finishHandler();
              if (((t = this.searchHeaderListEnd(e, t)), -1 === t))
                return void (this.readState = c.HEADER);
            }
            const r = this.partIndexToLength[this.partIndex],
              i = t + r,
              o = Math.min(i, e.length);
            if (
              (await this.processPartStarted(e, t, o),
              (this.remainingPartDataCount = r - (o - t)),
              this.remainingPartDataCount > 0)
            )
              return;
            if (((t = i + this.boundaryLength), t >= e.length))
              return void (this.ignoreByteCount =
                this.boundaryLength - (e.length - i));
          }
        }
      }
      copyExistingData(e, t) {
        return new Promise((r, n) => {
          const i = () => {
            if (e === t) return void r();
            const o = this.options.tasks[e];
            o.kind === s.OperationKind.COPY
              ? l(o, this.out, this.options.oldFileFd, n, () => {
                  e++, i();
                })
              : n(new Error("Task kind must be COPY"));
          };
          i();
        });
      }
      searchHeaderListEnd(e, t) {
        const r = e.indexOf(a, t);
        if (-1 !== r) return r + a.length;
        const n = 0 === t ? e : e.slice(t);
        return (
          null == this.headerListBuffer
            ? (this.headerListBuffer = n)
            : (this.headerListBuffer = Buffer.concat([
                this.headerListBuffer,
                n,
              ])),
          -1
        );
      }
      onPartEnd() {
        const e = this.partIndexToLength[this.partIndex - 1];
        if (this.actualPartLength !== e)
          throw n.newError(
            `Expected length: ${e} differs from actual: ${this.actualPartLength}`,
            "ERR_DATA_SPLITTER_LENGTH_MISMATCH"
          );
        this.actualPartLength = 0;
      }
      processPartStarted(e, t, r) {
        return (
          0 !== this.partIndex && this.onPartEnd(),
          this.processPartData(e, t, r)
        );
      }
      processPartData(e, t, r) {
        this.actualPartLength += r - t;
        const n = this.out;
        return n.write(0 === t && e.length === r ? e : e.slice(t, r))
          ? Promise.resolve()
          : new Promise((e, t) => {
              n.on("error", t),
                n.once("drain", () => {
                  n.removeListener("error", t), e();
                });
            });
      }
    }
    t.DataSplitter = u;
  },
  function (e, t) {
    e.exports = require("zlib");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MacUpdater = void 0);
    const n = r(3),
      i = r(23),
      o = r(1),
      s = r(118),
      a = r(69),
      c = r(16),
      l = r(56);
    class u extends a.AppUpdater {
      constructor(e, t) {
        super(e, t),
          (this.nativeUpdater = r(4).autoUpdater),
          (this.squirrelDownloadedUpdate = !1),
          this.nativeUpdater.on("error", (e) => {
            this._logger.warn(e), this.emit("error", e);
          }),
          this.nativeUpdater.on("update-downloaded", () => {
            this.squirrelDownloadedUpdate = !0;
          });
      }
      debug(e) {
        null != this._logger.debug && this._logger.debug(e);
      }
      async doDownloadUpdate(e) {
        let t = e.updateInfoAndProvider.provider.resolveFiles(
          e.updateInfoAndProvider.info
        );
        const r = this._logger;
        let i = !1;
        try {
          this.debug("Checking for macOS Rosetta environment");
          (i = l
            .execFileSync("sysctl", ["sysctl.proc_translated"], {
              encoding: "utf8",
            })
            .includes("sysctl.proc_translated: 1")),
            r.info(`Checked for macOS Rosetta environment (isRosetta=${i})`);
        } catch (e) {
          r.warn(
            "sysctl shell command to check for macOS Rosetta environment failed: " +
              e
          );
        }
        let o = !1;
        try {
          this.debug("Checking for arm64 in uname");
          const e = l
            .execFileSync("uname", ["-a"], { encoding: "utf8" })
            .includes("ARM");
          r.info("Checked 'uname -a': arm64=" + e), (o = o || e);
        } catch (e) {
          r.warn("uname shell command to check for arm64 failed: " + e);
        }
        o = o || "arm64" === process.arch || i;
        const s = (e) => {
          var t;
          return (
            e.url.pathname.includes("arm64") ||
            (null === (t = e.info.url) || void 0 === t
              ? void 0
              : t.includes("arm64"))
          );
        };
        t =
          o && t.some(s) ? t.filter((e) => o === s(e)) : t.filter((e) => !s(e));
        const a = c.findFile(t, "zip", ["pkg", "dmg"]);
        if (null == a)
          throw n.newError(
            "ZIP file not provided: " + n.safeStringifyJson(t),
            "ERR_UPDATER_ZIP_FILE_NOT_FOUND"
          );
        return this.executeDownload({
          fileExtension: "zip",
          fileInfo: a,
          downloadUpdateOptions: e,
          task: (e, t) => this.httpExecutor.download(a.url, e, t),
          done: (e) => this.updateDownloaded(a, e),
        });
      }
      async updateDownloaded(e, t) {
        var r;
        const n = t.downloadedFile,
          a =
            null !== (r = e.info.size) && void 0 !== r
              ? r
              : (await i.stat(n)).size,
          c = this._logger,
          l = "fileToProxy=" + e.url.href;
        this.debug(`Creating proxy server for native Squirrel.Mac (${l})`);
        const u = s.createServer();
        function h() {
          return "http://127.0.0.1:" + u.address().port;
        }
        return (
          this.debug(`Proxy server for native Squirrel.Mac is created (${l})`),
          u.on("close", () => {
            c.info(`Proxy server for native Squirrel.Mac is closed (${l})`);
          }),
          await new Promise((e, r) => {
            const i = `/${Date.now().toString(16)}-${Math.floor(
              9999 * Math.random()
            ).toString(16)}.zip`;
            u.on("request", (t, s) => {
              const l = t.url;
              if ((c.info(l + " requested"), "/" === l)) {
                const e = Buffer.from(`{ "url": "${h()}${i}" }`);
                return (
                  s.writeHead(200, {
                    "Content-Type": "application/json",
                    "Content-Length": e.length,
                  }),
                  void s.end(e)
                );
              }
              if (!l.startsWith(i))
                return (
                  c.warn(l + " requested, but not supported"),
                  s.writeHead(404),
                  void s.end()
                );
              c.info(`${i} requested by Squirrel.Mac, pipe ${n}`);
              let f = !1;
              s.on("finish", () => {
                try {
                  setImmediate(() => u.close());
                } finally {
                  f || (this.nativeUpdater.removeListener("error", r), e([]));
                }
              });
              const d = o.createReadStream(n);
              d.on("error", (e) => {
                try {
                  s.end();
                } catch (e) {
                  c.warn("cannot end response: " + e);
                }
                (f = !0),
                  this.nativeUpdater.removeListener("error", r),
                  r(new Error(`Cannot pipe "${n}": ${e}`));
              }),
                s.writeHead(200, {
                  "Content-Type": "application/zip",
                  "Content-Length": a,
                }),
                d.pipe(s);
            }),
              this.debug(
                `Proxy server for native Squirrel.Mac is starting to listen (${l})`
              ),
              u.listen(0, "127.0.0.1", () => {
                this.debug(
                  `Proxy server for native Squirrel.Mac is listening (address=${h()}, ${l})`
                ),
                  this.nativeUpdater.setFeedURL({
                    url: h(),
                    headers: { "Cache-Control": "no-cache" },
                  }),
                  this.dispatchUpdateDownloaded(t),
                  this.autoInstallOnAppQuit
                    ? (this.nativeUpdater.once("error", r),
                      this.nativeUpdater.checkForUpdates())
                    : e([]);
              });
          })
        );
      }
      quitAndInstall() {
        this.squirrelDownloadedUpdate
          ? this.nativeUpdater.quitAndInstall()
          : (this.nativeUpdater.on("update-downloaded", () => {
              this.nativeUpdater.quitAndInstall();
            }),
            this.autoInstallOnAppQuit || this.nativeUpdater.checkForUpdates());
      }
    }
    t.MacUpdater = u;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.NsisUpdater = void 0);
    const n = r(3),
      i = r(56),
      o = r(0),
      s = r(133),
      a = r(134),
      c = r(303),
      l = r(48),
      u = r(21),
      h = r(16),
      f = r(23),
      d = r(304),
      p = r(17),
      m = r(137);
    class g extends s.BaseUpdater {
      constructor(e, t) {
        super(e, t);
      }
      doDownloadUpdate(e) {
        const t = e.updateInfoAndProvider.provider,
          r = h.findFile(t.resolveFiles(e.updateInfoAndProvider.info), "exe");
        return this.executeDownload({
          fileExtension: "exe",
          downloadUpdateOptions: e,
          fileInfo: r,
          task: async (i, o, s, a) => {
            const c = r.packageInfo,
              l = null != c && null != s;
            (l || (await this.differentialDownloadInstaller(r, e, i, t))) &&
              (await this.httpExecutor.download(r.url, i, o));
            const u = await this.verifySignature(i);
            if (null != u)
              throw (
                (await a(),
                n.newError(
                  `New version ${e.updateInfoAndProvider.info.version} is not signed by the application owner: ${u}`,
                  "ERR_UPDATER_INVALID_SIGNATURE"
                ))
              );
            if (l && (await this.differentialDownloadWebPackage(e, c, s, t)))
              try {
                await this.httpExecutor.download(new p.URL(c.path), s, {
                  headers: e.requestHeaders,
                  cancellationToken: e.cancellationToken,
                  sha512: c.sha512,
                });
              } catch (e) {
                try {
                  await f.unlink(s);
                } catch (e) {}
                throw e;
              }
          },
        });
      }
      async verifySignature(e) {
        let t;
        try {
          if (((t = (await this.configOnDisk.value).publisherName), null == t))
            return null;
        } catch (e) {
          if ("ENOENT" === e.code) return null;
          throw e;
        }
        return await d.verifySignature(
          Array.isArray(t) ? t : [t],
          e,
          this._logger
        );
      }
      doInstall(e) {
        const t = ["--updated"];
        e.isSilent && t.push("/S"), e.isForceRunAfter && t.push("--force-run");
        const r =
          null == this.downloadedUpdateHelper
            ? null
            : this.downloadedUpdateHelper.packageFile;
        null != r && t.push("--package-file=" + r);
        const n = () => {
          v(
            o.join(process.resourcesPath, "elevate.exe"),
            [e.installerPath].concat(t)
          ).catch((e) => this.dispatchError(e));
        };
        return e.isAdminRightsRequired
          ? (this._logger.info(
              "isAdminRightsRequired is set to true, run installer using elevate.exe"
            ),
            n(),
            !0)
          : (v(e.installerPath, t).catch((e) => {
              const t = e.code;
              this._logger.info(
                `Cannot run installer: error code: ${t}, error message: "${e.message}", will be executed again using elevate if EACCES"`
              ),
                "UNKNOWN" === t || "EACCES" === t ? n() : this.dispatchError(e);
            }),
            !0);
      }
      async differentialDownloadInstaller(e, t, r, i) {
        try {
          if (
            null != this._testOnlyOptions &&
            !this._testOnlyOptions.isUseDifferentialDownload
          )
            return !0;
          const s = u.blockmapFiles(
            e.url,
            this.app.version,
            t.updateInfoAndProvider.info.version
          );
          this._logger.info(
            `Download block maps (old: "${s[0]}", new: ${s[1]})`
          );
          const a = async (e) => {
              const r = await this.httpExecutor.downloadToBuffer(e, {
                headers: t.requestHeaders,
                cancellationToken: t.cancellationToken,
              });
              if (null == r || 0 === r.length)
                throw new Error(`Blockmap "${e.href}" is empty`);
              try {
                return JSON.parse(m.gunzipSync(r).toString());
              } catch (t) {
                throw new Error(
                  `Cannot parse blockmap "${e.href}", error: ${t}`
                );
              }
            },
            h = {
              newUrl: e.url,
              oldFile: o.join(
                this.downloadedUpdateHelper.cacheDir,
                n.CURRENT_APP_INSTALLER_FILE_NAME
              ),
              logger: this._logger,
              newFile: r,
              isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
              requestHeaders: t.requestHeaders,
              cancellationToken: t.cancellationToken,
            };
          this.listenerCount(l.DOWNLOAD_PROGRESS) > 0 &&
            (h.onProgress = (e) => this.emit(l.DOWNLOAD_PROGRESS, e));
          const f = await Promise.all(s.map((e) => a(e)));
          return (
            await new c.GenericDifferentialDownloader(
              e.info,
              this.httpExecutor,
              h
            ).download(f[0], f[1]),
            !1
          );
        } catch (e) {
          if (
            (this._logger.error(
              "Cannot download differentially, fallback to full download: " +
                (e.stack || e)
            ),
            null != this._testOnlyOptions)
          )
            throw e;
          return !0;
        }
      }
      async differentialDownloadWebPackage(e, t, r, i) {
        if (null == t.blockMapSize) return !0;
        try {
          const s = {
            newUrl: new p.URL(t.path),
            oldFile: o.join(
              this.downloadedUpdateHelper.cacheDir,
              n.CURRENT_APP_PACKAGE_FILE_NAME
            ),
            logger: this._logger,
            newFile: r,
            requestHeaders: this.requestHeaders,
            isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
            cancellationToken: e.cancellationToken,
          };
          this.listenerCount(l.DOWNLOAD_PROGRESS) > 0 &&
            (s.onProgress = (e) => this.emit(l.DOWNLOAD_PROGRESS, e)),
            await new a.FileWithEmbeddedBlockMapDifferentialDownloader(
              t,
              this.httpExecutor,
              s
            ).download();
        } catch (e) {
          return (
            this._logger.error(
              "Cannot download differentially, fallback to full download: " +
                (e.stack || e)
            ),
            "win32" === process.platform
          );
        }
        return !1;
      }
    }
    async function v(e, t) {
      return new Promise((r, n) => {
        try {
          const o = i.spawn(e, t, { detached: !0, stdio: "ignore" });
          o.on("error", (e) => {
            n(e);
          }),
            o.unref(),
            void 0 !== o.pid && r(!0);
        } catch (e) {
          n(e);
        }
      });
    }
    t.NsisUpdater = g;
  },
  function (e, t) {
    var r = {
      utf8: {
        stringToBytes: function (e) {
          return r.bin.stringToBytes(unescape(encodeURIComponent(e)));
        },
        bytesToString: function (e) {
          return decodeURIComponent(escape(r.bin.bytesToString(e)));
        },
      },
      bin: {
        stringToBytes: function (e) {
          for (var t = [], r = 0; r < e.length; r++)
            t.push(255 & e.charCodeAt(r));
          return t;
        },
        bytesToString: function (e) {
          for (var t = [], r = 0; r < e.length; r++)
            t.push(String.fromCharCode(e[r]));
          return t.join("");
        },
      },
    };
    e.exports = r;
  },
  function (e, t, r) {
    "use strict";
    var n = r(57),
      i = r(0),
      o = r(17),
      s = r(22),
      a = r(142),
      c = r(4),
      l =
        ((function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = f(t);
          if (r && r.has(e)) return r.get(e);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(n, o, s)
                : (n[o] = e[o]);
            }
          (n.default = e), r && r.set(e, n);
        })(r(143)),
        n(r(214))),
      u = n(r(220)),
      h = n(r(306));
    function f(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (f = function (e) {
        return e ? r : t;
      })(e);
    }
    process
      .on("uncaughtException", (e) => {
        console.log("Uncaught Exception thrown!\n", e);
      })
      .on("unhandledRejection", (e) => {
        console.log("Unhandled Rejection at Promise!\n", e);
      })
      .on("exit", () => {
        console.log("Process exit");
      })
      .on("SIGHUP", () => {
        console.log("Got SIGHUP signal.");
      })
      .on("SIGTERM", () => {
        console.log("Got SIGTERM signal.");
      })
      .on("SIGINT", () => {
        console.log("Got SIGINT signal.");
      })
      .on("SIGFPE", () => {
        console.log("Got SIGFPE signal.");
      });
    let d = null;
    const p = "win32" === (0, s.platform)(),
      m = (0, i.join)(__dirname, "./preload.js"),
      g = p ? 730 : 700,
      v = p ? 1110 : 1105,
      y = p ? 955 : 940,
      w = "true" === process.env.WITHOUT_SCREEN_CONSTRAINTS ? 200 : y;
    function b() {
      var e, t;
      let r = (0, l.default)({
        defaultWidth: v,
        defaultHeight: g,
        file: "window-state",
      });
      (d = new c.BrowserWindow({
        show: !1,
        backgroundColor: "#232c48",
        x: r.x,
        y: r.y,
        width: r.width,
        height: r.height,
        minHeight: g,
        minWidth: w,
        maximizable: !0,
        autoHideMenuBar: !1,
        title: "Atomic Wallet " + a.version,
        webPreferences: {
          webSecurity: !1,
          contextIsolation: !1,
          backgroundThrottling: !1,
          nodeIntegration: !0,
          enableRemoteModule: !1,
          webviewTag: !0,
          sandbox: !1,
          preload: m,
        },
      })),
        process.env.STAGING
          ? console.warn("STAGING CONFIG MODE ON")
          : console.warn("STAGING CONFIG MODE OFF");
      let n = (0, o.format)({
        protocol: "file",
        slashes: !0,
        pathname: (0, i.join)(__dirname, "index.html"),
      });
      const s = d.webContents.getUserAgent().replace(/Electron.*[0-9] /, "");
      d.webContents.session.setPermissionRequestHandler((e, t, r) =>
        r(e.getURL() === n)
      ),
        d.webContents.on("did-frame-finish-load", () => {
          d.show(), process.env.DEBUG && d.webContents.openDevTools();
        }),
        d.loadURL(n, { userAgent: s }),
        h.default.initialize(d),
        d.once("ready-to-show", () => {
          d.show(), r.manage(d);
        }),
        null === (e = (t = d.webContents).clearCache) ||
          void 0 === e ||
          e.call(t),
        d.webContents.session.setPermissionRequestHandler((e, t, r) =>
          r(e.getURL() === winURL)
        ),
        d.setMenuBarVisibility(!1);
    }
    (0, s.release)().startsWith("6.1") && c.app.disableHardwareAcceleration(),
      (function () {
        const e = [
          {
            label: "Edit",
            submenu: [
              { role: "cut" },
              { role: "copy" },
              { role: "paste" },
              { role: "selectAll" },
              { type: "separator" },
              { role: "undo" },
              { role: "redo" },
            ],
          },
          { role: "window", submenu: [{ role: "close" }] },
        ];
        "darwin" === (0, s.platform)() &&
          (e.unshift({
            label: c.app.getName(),
            submenu: [
              { role: "about" },
              { type: "separator" },
              { role: "services", submenu: [] },
              { type: "separator" },
              { role: "hide" },
              { role: "hideothers" },
              { role: "unhide" },
              { type: "separator" },
              { role: "quit" },
            ],
          }),
          e[1].submenu.push(
            { type: "separator" },
            {
              label: "Speech",
              submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }],
            }
          )),
          p || c.Menu.setApplicationMenu(c.Menu.buildFromTemplate(e));
      })(),
      c.app.whenReady().then(async () => {
        (c.app.platformVersion = (0, s.release)()),
          c.app.setAppUserModelId("io.atomicwallet"),
          b(),
          (0, u.default)(a.version, d),
          c.app.on("activate", function () {
            0 === c.BrowserWindow.getAllWindows().length && b();
          });
      }),
      c.app
        .on("window-all-closed", () => {
          (d = null), "darwin" !== (0, s.platform)() && c.app.quit();
        })
        .on("child-process-gone", () => {
          console.log("gpu crashed/killed");
        }),
      c.app.requestSingleInstanceLock()
        ? c.app.on("second-instance", () => {
            d.isMinimized() && d.restore(), d.focus();
          })
        : (c.app.quit(), process.exit(0)),
      c.powerSaveBlocker.start("prevent-app-suspension");
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"atomic","version":"2.76.4","author":"atomicwallet.io <support@atomicwallet.io>","description":"Manage your Bitcoin, Ethereum, XRP, Litecoin, XLM, and over 300 other coins and tokens.","license":"UNLICENCED","main":"./dist/electron/main.js","repository":"https://atomicwallet.io","homepage":"https://atomicwallet.io","scripts":{"prunecaches":"rimraf ./node_modules/.cache/","postuninstall":"yarn prunecaches","sync:configs":"atomic-sync-configs","bump":"npm --no-git-tag-version version patch -m \\"Build %s\\"","prebuild":"cross-env NODE_ENV=production node --max-old-space-size=8192 .electron-vue/build.js","build":"electron-builder --config build-config.yaml","build:win":"yarn build --win","build:linux":"yarn build --linux","build:linux:deb":"yarn build --linux deb ","build:dir":"yarn build --dir","build:mac":"yarn build --mac","build:mac:dmg":"yarn build --mac dmg","deps":"electron-builder install-app-deps","dev":"cross-env NODE_ENV=development node --trace-deprecation --max-old-space-size=8192 .electron-vue/dev-runner.js","jest:unit":"yarn sync:configs && cross-env NODE_OPTIONS=\\"--unhandled-rejections=none\\" jest --ci","jest:unit:update":"yarn sync:configs && jest -update","prepare":"husky install","ownrebuild":"electron-builder node-gyp-rebuild","postinstall":"yarn prunecaches && patch-package --patch-dir ./node_modules/atomic-core/patches"},"build":{"publish":[{"provider":"generic","url":"https://releases.atomicwallet.io/","channel":"latest"}],"productName":"Atomic Wallet","appId":"io.atomicwallet","directories":{"output":"build"},"files":["dist/electron/**/*"],"dmg":{"sign":true,"writeUpdateInfo":false,"contents":[{"x":410,"y":150,"type":"link","path":"/Applications"},{"x":130,"y":150,"type":"file"}]},"mac":{"icon":"build/resources/icons/icon.icns","gatekeeperAssess":false,"target":["zip","dmg"]},"win":{"publisherName":"Atomic Protocol Systems OÜ","verifyUpdateCodeSignature":true,"icon":"build/resources/icons/icon.ico","target":"nsis","sign":"build/resources/sign.js"},"nsis":{"differentialPackage":false},"linux":{"icon":"build/resources/icons/256x256.png"}},"engines":{"yarn":">=1.22.0","node":">=14"},"dependencies":{"atomic-core":"git+ssh://git@github.com:Atomicwallet/atomic-core.git#1.36.7","atomic-uikit":"git+ssh://git@github.com:Atomicwallet/atomic-uikit.git","axios":"0.18.1","bignumber.js":"8.1.1","compare-version":"0.1.2","countup.js":"1.9.3","d3":"5.16.0","electron-google-analytics":"0.1.2","electron-updater":"4.6.5","fast-sort":"1.6.0","md5":"2.3.0","mime-types":"2.1.35","qrious":"https://github.com/Atomicwallet/qrious","sha256":"0.2.0","vue":"2.7.14","vue-moment":"4.1.0","vue-router":"3.6.5","vue2-teleport":"1.0.1","vuex":"3.6.2"},"devDependencies":{"@babel/core":"7.22.5","@babel/plugin-proposal-class-properties":"7.18.6","@babel/plugin-proposal-export-namespace-from":"7.18.9","@babel/plugin-proposal-nullish-coalescing-operator":"7.18.6","@babel/plugin-proposal-optional-chaining":"7.21.0","@babel/plugin-proposal-private-methods":"7.18.6","@babel/plugin-proposal-private-property-in-object":"7.21.11","@babel/plugin-transform-modules-commonjs":"7.22.5","@babel/plugin-transform-runtime":"7.22.5","@babel/preset-env":"7.22.5","@babel/register":"7.22.5","@commitlint/cli":"17.6.5","@commitlint/config-conventional":"17.6.5","@open-wc/webpack-import-meta-loader":"0.4.7","@types/jest":"28.1.8","@vue/cli-plugin-unit-jest":"5.0.8","@vue/test-utils":"1.3.6","@vue/vue2-jest":"27.0.0","babel-core":"7.0.0-bridge.0","babel-jest":"27.5.1","babel-loader":"8.3.0","cache-loader":"4.1.0","cfonts":"2.10.1","chalk":"2.4.2","copy-webpack-plugin":"5.1.2","core-js":"3.31.0","cross-env":"5.2.1","css-loader":"2.1.1","dompurify":"3.0.3","electron":"22.3.14","electron-builder":"22.14.13","electron-debug":"2.2.0","electron-devtools-installer":"3.2.0","electron-log":"3.0.9","electron-notarize":"0.1.1","electron-unhandled":"2.2.0","electron-window-state":"5.0.3","esbuild-loader":"2.21.0","eslint":"^8.45.0","eslint-config-prettier":"^8.8.0","eslint-plugin-prettier-vue":"^4.2.0","eslint-plugin-vue":"^9.15.1","extract-text-webpack-plugin":"4.0.0-beta.0","file-loader":"3.0.1","html-webpack-plugin":"4.5.2","husky":"8.0.3","jest":"27.5.1","jest-transform-stub":"2.0.0","lint-staged":"^13.2.3","listr":"0.14.3","mini-css-extract-plugin":"0.6.0","node-loader":"0.6.0","node-sass":"4.14.1","patch-package":"7.0.0","prettier":"^3.0.0","process":"0.11.10","sass-loader":"7.3.1","style-loader":"0.23.1","terser":"4.6.7","terser-webpack-plugin":"2.3.8","thread-loader":"3.0.4","ts-jest":"27.1.5","typescript":"4.9.5","url-loader":"1.1.2","vue-html-loader":"1.2.4","vue-loader":"14.2.4","vue-style-loader":"4.1.3","vue-template-compiler":"2.7.14","webpack":"4.46.0","webpack-dev-server":"2.11.5","webpack-hot-middleware":"2.25.4","webpack-merge":"4.2.2"},"resolutions":{"@solana/web3.js":"1.67.0","blake2b":"2.1.4","bufferutil":"^4.0.3","ed25519":"^0.0.5","keccak":"^3.0.1","tiny-secp256k1":"^1.1.6","ua-parser-js":"0.7.28","ripple-binary-codec":"1.4.2","ripple-keypairs":"1.0.3","atomic-core/@thetalabs/theta-js/lodash":"4.17.12","atomic-core/bitcore-lib-xvg/lodash":"4.17.12","atomic-core/decred-bitcore-lib/lodash":"4.17.12","minimist":"^0.2.4","atomic-core/nem-sdk/sockjs-client":"1.6.1","atomic-core/nem-sdk/**/cryptiles":"4.1.2"},"optionalDependencies":{"fsevents":"*"},"lint-staged":{"./src/**/*.{js,vue}":"eslint --ext .js,.vue --fix ./src"},"jest":{"testMatch":["**/?(*.)+(spec|test).[jt]s?(x)"],"transform":{"^.+\\\\.tsx?$":"ts-jest",".+\\\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":"jest-transform-stub"},"preset":"@vue/cli-plugin-unit-jest/presets/no-babel","transformIgnorePatterns":["<rootDir>/node_modules/(?!atomic-core|atomic-uikit)"],"setupFiles":["<rootDir>/__tests__/setup.js"],"moduleNameMapper":{".+\\\\.(svg)(\\\\?component)?$":"<rootDir>/__tests__/svgMock.vue","^@/(.*)$":"<rootDir>/src/renderer/$1","^@/?main/(.*)$":"<rootDir>/src/main/$1"},"modulePathIgnorePatterns":["<rootDir>/plugins","<rootDir>/platforms"],"moduleFileExtensions":["js","jsx","json","vue","ts"],"testEnvironment":"jsdom","snapshotSerializers":["jest-serializer-vue"]},"browserslist":{"production":["chrome >= 67","edge >= 79","firefox >= 68","opera >= 54","safari >= 14"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'
    );
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MOBX_DEVTOOLS =
        t.APOLLO_DEVELOPER_TOOLS =
        t.CYCLEJS_DEVTOOL =
        t.REDUX_DEVTOOLS =
        t.VUEJS3_DEVTOOLS =
        t.VUEJS_DEVTOOLS =
        t.ANGULARJS_BATARANG =
        t.JQUERY_DEBUGGER =
        t.BACKBONE_DEBUGGER =
        t.REACT_DEVELOPER_TOOLS =
        t.EMBER_INSPECTOR =
          void 0);
    const n = r(4),
      i = r(1),
      o = r(0),
      s = r(144),
      a = r(170),
      c = r(91);
    let l = {};
    const u = () => o.resolve(c.getPath(), "IDMap.json");
    if (i.existsSync(u()))
      try {
        l = JSON.parse(i.readFileSync(u(), "utf8"));
      } catch (e) {
        console.error(
          "electron-devtools-installer: Invalid JSON present in the IDMap file"
        );
      }
    const h = (e, t = {}) => {
      "boolean" == typeof t && (t = { forceDownload: t });
      const { forceDownload: r, loadExtensionOptions: o } = t;
      if ("browser" !== process.type)
        return Promise.reject(
          new Error(
            "electron-devtools-installer can only be used from the main process"
          )
        );
      if (Array.isArray(e))
        return e.reduce((e, r) => e.then(() => h(r, t)), Promise.resolve(""));
      let c;
      if ("object" == typeof e && e.id) {
        c = e.id;
        const t = process.versions.electron.split("-")[0];
        if (!s.satisfies(t, e.electron))
          return Promise.reject(
            new Error(
              `Version of Electron: ${t} does not match required range ${e.electron} for extension ${c}`
            )
          );
      } else {
        if ("string" != typeof e)
          return Promise.reject(
            new Error(`Invalid extensionReference passed in: "${e}"`)
          );
        c = e;
      }
      const f = l[c];
      let d;
      return (
        (d = n.session.defaultSession.getExtension
          ? !!f &&
            n.session.defaultSession
              .getAllExtensions()
              .find((e) => e.name === f)
          : !!f &&
            n.BrowserWindow.getDevToolsExtensions &&
            n.BrowserWindow.getDevToolsExtensions().hasOwnProperty(f)),
        !r && d
          ? Promise.resolve(l[c])
          : a.default(c, r || !1).then((e) => {
              if (d)
                if (n.session.defaultSession.removeExtension) {
                  const e = n.session.defaultSession
                    .getAllExtensions()
                    .find((e) => e.name).id;
                  n.session.defaultSession.removeExtension(e);
                } else n.BrowserWindow.removeDevToolsExtension(f);
              if (n.session.defaultSession.loadExtension)
                return n.session.defaultSession
                  .loadExtension(e, o)
                  .then((e) => Promise.resolve(e.name));
              const t = n.BrowserWindow.addDevToolsExtension(e);
              return (
                i.writeFileSync(
                  u(),
                  JSON.stringify(Object.assign(l, { [c]: t }))
                ),
                Promise.resolve(t)
              );
            })
      );
    };
    (t.default = h),
      (t.EMBER_INSPECTOR = {
        id: "bmdblncegkenkacieihfhpjfppoconhi",
        electron: ">=1.2.1",
      }),
      (t.REACT_DEVELOPER_TOOLS = {
        id: "fmkadmapgofadopljbjfkapdkoienihi",
        electron: ">=1.2.1",
      }),
      (t.BACKBONE_DEBUGGER = {
        id: "bhljhndlimiafopmmhjlgfpnnchjjbhd",
        electron: ">=1.2.1",
      }),
      (t.JQUERY_DEBUGGER = {
        id: "dbhhnnnpaeobfddmlalhnehgclcmjimi",
        electron: ">=1.2.1",
      }),
      (t.ANGULARJS_BATARANG = {
        id: "ighdmehidhipcmcojjgiloacoafjmpfk",
        electron: ">=1.2.1",
      }),
      (t.VUEJS_DEVTOOLS = {
        id: "nhdogjmejiglipccpnnnanhbledajbpd",
        electron: ">=1.2.1",
      }),
      (t.VUEJS3_DEVTOOLS = {
        id: "ljjemllljcmogpfapbkkighbhhppjdbg",
        electron: ">=1.2.1",
      }),
      (t.REDUX_DEVTOOLS = {
        id: "lmhkpmbekcpmknklioeibfkpmmfibljd",
        electron: ">=1.2.1",
      }),
      (t.CYCLEJS_DEVTOOL = {
        id: "dfgplfmhhmdekalbpejekgfegkonjpfp",
        electron: ">=1.2.1",
      }),
      (t.APOLLO_DEVELOPER_TOOLS = {
        id: "jdkknkkbebbapilgoeccciglkfbmbnfm",
        electron: ">=1.2.1",
      }),
      (t.MOBX_DEVTOOLS = {
        id: "pfgnfdagidkfgccljigdamigbcnndkod",
        electron: ">=1.2.1",
      });
  },
  function (e, t, r) {
    const n = r(32),
      i = r(38),
      o = r(5),
      s = r(81),
      a = r(25),
      c = r(145),
      l = r(146),
      u = r(147),
      h = r(148),
      f = r(149),
      d = r(150),
      p = r(151),
      m = r(152),
      g = r(10),
      v = r(153),
      y = r(154),
      w = r(59),
      b = r(155),
      E = r(156),
      _ = r(40),
      A = r(60),
      S = r(82),
      O = r(83),
      C = r(61),
      I = r(62),
      k = r(84),
      T = r(157),
      x = r(41),
      R = r(11),
      N = r(42),
      D = r(160),
      P = r(161),
      L = r(162),
      F = r(163),
      U = r(164),
      j = r(63),
      B = r(165),
      M = r(166),
      $ = r(167),
      z = r(168),
      G = r(169);
    e.exports = {
      parse: a,
      valid: c,
      clean: l,
      inc: u,
      diff: h,
      major: f,
      minor: d,
      patch: p,
      prerelease: m,
      compare: g,
      rcompare: v,
      compareLoose: y,
      compareBuild: w,
      sort: b,
      rsort: E,
      gt: _,
      lt: A,
      eq: S,
      neq: O,
      gte: C,
      lte: I,
      cmp: k,
      coerce: T,
      Comparator: x,
      Range: R,
      satisfies: N,
      toComparators: D,
      maxSatisfying: P,
      minSatisfying: L,
      minVersion: F,
      validRange: U,
      outside: j,
      gtr: B,
      ltr: M,
      intersects: $,
      simplifyRange: z,
      subset: G,
      SemVer: o,
      re: n.re,
      src: n.src,
      tokens: n.t,
      SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: i.RELEASE_TYPES,
      compareIdentifiers: s.compareIdentifiers,
      rcompareIdentifiers: s.rcompareIdentifiers,
    };
  },
  function (e, t, r) {
    const n = r(25);
    e.exports = (e, t) => {
      const r = n(e, t);
      return r ? r.version : null;
    };
  },
  function (e, t, r) {
    const n = r(25);
    e.exports = (e, t) => {
      const r = n(e.trim().replace(/^[=v]+/, ""), t);
      return r ? r.version : null;
    };
  },
  function (e, t, r) {
    const n = r(5);
    e.exports = (e, t, r, i, o) => {
      "string" == typeof r && ((o = i), (i = r), (r = void 0));
      try {
        return new n(e instanceof n ? e.version : e, r).inc(t, i, o).version;
      } catch (e) {
        return null;
      }
    };
  },
  function (e, t, r) {
    const n = r(25);
    e.exports = (e, t) => {
      const r = n(e, null, !0),
        i = n(t, null, !0),
        o = r.compare(i);
      if (0 === o) return null;
      const s = o > 0,
        a = s ? i : r,
        c = !!(s ? r : i).prerelease.length,
        l = c ? "pre" : "";
      return r.major !== i.major
        ? l + "major"
        : r.minor !== i.minor
        ? l + "minor"
        : r.patch !== i.patch
        ? l + "patch"
        : c
        ? "prerelease"
        : a.patch
        ? "patch"
        : a.minor
        ? "minor"
        : "major";
    };
  },
  function (e, t, r) {
    const n = r(5);
    e.exports = (e, t) => new n(e, t).major;
  },
  function (e, t, r) {
    const n = r(5);
    e.exports = (e, t) => new n(e, t).minor;
  },
  function (e, t, r) {
    const n = r(5);
    e.exports = (e, t) => new n(e, t).patch;
  },
  function (e, t, r) {
    const n = r(25);
    e.exports = (e, t) => {
      const r = n(e, t);
      return r && r.prerelease.length ? r.prerelease : null;
    };
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t, r) => n(t, e, r);
  },
  function (e, t, r) {
    const n = r(10);
    e.exports = (e, t) => n(e, t, !0);
  },
  function (e, t, r) {
    const n = r(59);
    e.exports = (e, t) => e.sort((e, r) => n(e, r, t));
  },
  function (e, t, r) {
    const n = r(59);
    e.exports = (e, t) => e.sort((e, r) => n(r, e, t));
  },
  function (e, t, r) {
    const n = r(5),
      i = r(25),
      { re: o, t: s } = r(32);
    e.exports = (e, t) => {
      if (e instanceof n) return e;
      if (("number" == typeof e && (e = String(e)), "string" != typeof e))
        return null;
      let r = null;
      if ((t = t || {}).rtl) {
        let t;
        for (
          ;
          (t = o[s.COERCERTL].exec(e)) &&
          (!r || r.index + r[0].length !== e.length);

        )
          (r && t.index + t[0].length === r.index + r[0].length) || (r = t),
            (o[s.COERCERTL].lastIndex = t.index + t[1].length + t[2].length);
        o[s.COERCERTL].lastIndex = -1;
      } else r = e.match(o[s.COERCE]);
      return null === r ? null : i(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t);
    };
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      var t = this;
      if (
        (t instanceof n || (t = new n()),
        (t.tail = null),
        (t.head = null),
        (t.length = 0),
        e && "function" == typeof e.forEach)
      )
        e.forEach(function (e) {
          t.push(e);
        });
      else if (arguments.length > 0)
        for (var r = 0, i = arguments.length; r < i; r++) t.push(arguments[r]);
      return t;
    }
    function i(e, t, r) {
      var n = t === e.head ? new a(r, null, t, e) : new a(r, t, t.next, e);
      return (
        null === n.next && (e.tail = n),
        null === n.prev && (e.head = n),
        e.length++,
        n
      );
    }
    function o(e, t) {
      (e.tail = new a(t, e.tail, null, e)),
        e.head || (e.head = e.tail),
        e.length++;
    }
    function s(e, t) {
      (e.head = new a(t, null, e.head, e)),
        e.tail || (e.tail = e.head),
        e.length++;
    }
    function a(e, t, r, n) {
      if (!(this instanceof a)) return new a(e, t, r, n);
      (this.list = n),
        (this.value = e),
        t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
        r ? ((r.prev = this), (this.next = r)) : (this.next = null);
    }
    (e.exports = n),
      (n.Node = a),
      (n.create = n),
      (n.prototype.removeNode = function (e) {
        if (e.list !== this)
          throw new Error("removing node which does not belong to this list");
        var t = e.next,
          r = e.prev;
        return (
          t && (t.prev = r),
          r && (r.next = t),
          e === this.head && (this.head = t),
          e === this.tail && (this.tail = r),
          e.list.length--,
          (e.next = null),
          (e.prev = null),
          (e.list = null),
          t
        );
      }),
      (n.prototype.unshiftNode = function (e) {
        if (e !== this.head) {
          e.list && e.list.removeNode(e);
          var t = this.head;
          (e.list = this),
            (e.next = t),
            t && (t.prev = e),
            (this.head = e),
            this.tail || (this.tail = e),
            this.length++;
        }
      }),
      (n.prototype.pushNode = function (e) {
        if (e !== this.tail) {
          e.list && e.list.removeNode(e);
          var t = this.tail;
          (e.list = this),
            (e.prev = t),
            t && (t.next = e),
            (this.tail = e),
            this.head || (this.head = e),
            this.length++;
        }
      }),
      (n.prototype.push = function () {
        for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
        return this.length;
      }),
      (n.prototype.unshift = function () {
        for (var e = 0, t = arguments.length; e < t; e++) s(this, arguments[e]);
        return this.length;
      }),
      (n.prototype.pop = function () {
        if (this.tail) {
          var e = this.tail.value;
          return (
            (this.tail = this.tail.prev),
            this.tail ? (this.tail.next = null) : (this.head = null),
            this.length--,
            e
          );
        }
      }),
      (n.prototype.shift = function () {
        if (this.head) {
          var e = this.head.value;
          return (
            (this.head = this.head.next),
            this.head ? (this.head.prev = null) : (this.tail = null),
            this.length--,
            e
          );
        }
      }),
      (n.prototype.forEach = function (e, t) {
        t = t || this;
        for (var r = this.head, n = 0; null !== r; n++)
          e.call(t, r.value, n, this), (r = r.next);
      }),
      (n.prototype.forEachReverse = function (e, t) {
        t = t || this;
        for (var r = this.tail, n = this.length - 1; null !== r; n--)
          e.call(t, r.value, n, this), (r = r.prev);
      }),
      (n.prototype.get = function (e) {
        for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
        if (t === e && null !== r) return r.value;
      }),
      (n.prototype.getReverse = function (e) {
        for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
        if (t === e && null !== r) return r.value;
      }),
      (n.prototype.map = function (e, t) {
        t = t || this;
        for (var r = new n(), i = this.head; null !== i; )
          r.push(e.call(t, i.value, this)), (i = i.next);
        return r;
      }),
      (n.prototype.mapReverse = function (e, t) {
        t = t || this;
        for (var r = new n(), i = this.tail; null !== i; )
          r.push(e.call(t, i.value, this)), (i = i.prev);
        return r;
      }),
      (n.prototype.reduce = function (e, t) {
        var r,
          n = this.head;
        if (arguments.length > 1) r = t;
        else {
          if (!this.head)
            throw new TypeError("Reduce of empty list with no initial value");
          (n = this.head.next), (r = this.head.value);
        }
        for (var i = 0; null !== n; i++) (r = e(r, n.value, i)), (n = n.next);
        return r;
      }),
      (n.prototype.reduceReverse = function (e, t) {
        var r,
          n = this.tail;
        if (arguments.length > 1) r = t;
        else {
          if (!this.tail)
            throw new TypeError("Reduce of empty list with no initial value");
          (n = this.tail.prev), (r = this.tail.value);
        }
        for (var i = this.length - 1; null !== n; i--)
          (r = e(r, n.value, i)), (n = n.prev);
        return r;
      }),
      (n.prototype.toArray = function () {
        for (
          var e = new Array(this.length), t = 0, r = this.head;
          null !== r;
          t++
        )
          (e[t] = r.value), (r = r.next);
        return e;
      }),
      (n.prototype.toArrayReverse = function () {
        for (
          var e = new Array(this.length), t = 0, r = this.tail;
          null !== r;
          t++
        )
          (e[t] = r.value), (r = r.prev);
        return e;
      }),
      (n.prototype.slice = function (e, t) {
        (t = t || this.length) < 0 && (t += this.length),
          (e = e || 0) < 0 && (e += this.length);
        var r = new n();
        if (t < e || t < 0) return r;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
        for (; null !== o && i < t; i++, o = o.next) r.push(o.value);
        return r;
      }),
      (n.prototype.sliceReverse = function (e, t) {
        (t = t || this.length) < 0 && (t += this.length),
          (e = e || 0) < 0 && (e += this.length);
        var r = new n();
        if (t < e || t < 0) return r;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var i = this.length, o = this.tail; null !== o && i > t; i--)
          o = o.prev;
        for (; null !== o && i > e; i--, o = o.prev) r.push(o.value);
        return r;
      }),
      (n.prototype.splice = function (e, t, ...r) {
        e > this.length && (e = this.length - 1),
          e < 0 && (e = this.length + e);
        for (var n = 0, o = this.head; null !== o && n < e; n++) o = o.next;
        var s = [];
        for (n = 0; o && n < t; n++) s.push(o.value), (o = this.removeNode(o));
        null === o && (o = this.tail),
          o !== this.head && o !== this.tail && (o = o.prev);
        for (n = 0; n < r.length; n++) o = i(this, o, r[n]);
        return s;
      }),
      (n.prototype.reverse = function () {
        for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
          var n = r.prev;
          (r.prev = r.next), (r.next = n);
        }
        return (this.head = t), (this.tail = e), this;
      });
    try {
      r(159)(n);
    } catch (e) {}
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      e.prototype[Symbol.iterator] = function* () {
        for (let e = this.head; e; e = e.next) yield e.value;
      };
    };
  },
  function (e, t, r) {
    const n = r(11);
    e.exports = (e, t) =>
      new n(e, t).set.map((e) =>
        e
          .map((e) => e.value)
          .join(" ")
          .trim()
          .split(" ")
      );
  },
  function (e, t, r) {
    const n = r(5),
      i = r(11);
    e.exports = (e, t, r) => {
      let o = null,
        s = null,
        a = null;
      try {
        a = new i(t, r);
      } catch (e) {
        return null;
      }
      return (
        e.forEach((e) => {
          a.test(e) &&
            ((o && -1 !== s.compare(e)) || ((o = e), (s = new n(o, r))));
        }),
        o
      );
    };
  },
  function (e, t, r) {
    const n = r(5),
      i = r(11);
    e.exports = (e, t, r) => {
      let o = null,
        s = null,
        a = null;
      try {
        a = new i(t, r);
      } catch (e) {
        return null;
      }
      return (
        e.forEach((e) => {
          a.test(e) &&
            ((o && 1 !== s.compare(e)) || ((o = e), (s = new n(o, r))));
        }),
        o
      );
    };
  },
  function (e, t, r) {
    const n = r(5),
      i = r(11),
      o = r(40);
    e.exports = (e, t) => {
      e = new i(e, t);
      let r = new n("0.0.0");
      if (e.test(r)) return r;
      if (((r = new n("0.0.0-0")), e.test(r))) return r;
      r = null;
      for (let t = 0; t < e.set.length; ++t) {
        const i = e.set[t];
        let s = null;
        i.forEach((e) => {
          const t = new n(e.semver.version);
          switch (e.operator) {
            case ">":
              0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                (t.raw = t.format());
            case "":
            case ">=":
              (s && !o(t, s)) || (s = t);
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error("Unexpected operation: " + e.operator);
          }
        }),
          !s || (r && !o(r, s)) || (r = s);
      }
      return r && e.test(r) ? r : null;
    };
  },
  function (e, t, r) {
    const n = r(11);
    e.exports = (e, t) => {
      try {
        return new n(e, t).range || "*";
      } catch (e) {
        return null;
      }
    };
  },
  function (e, t, r) {
    const n = r(63);
    e.exports = (e, t, r) => n(e, t, ">", r);
  },
  function (e, t, r) {
    const n = r(63);
    e.exports = (e, t, r) => n(e, t, "<", r);
  },
  function (e, t, r) {
    const n = r(11);
    e.exports = (e, t, r) => (
      (e = new n(e, r)), (t = new n(t, r)), e.intersects(t, r)
    );
  },
  function (e, t, r) {
    const n = r(42),
      i = r(10);
    e.exports = (e, t, r) => {
      const o = [];
      let s = null,
        a = null;
      const c = e.sort((e, t) => i(e, t, r));
      for (const e of c) {
        n(e, t, r)
          ? ((a = e), s || (s = e))
          : (a && o.push([s, a]), (a = null), (s = null));
      }
      s && o.push([s, null]);
      const l = [];
      for (const [e, t] of o)
        e === t
          ? l.push(e)
          : t || e !== c[0]
          ? t
            ? e === c[0]
              ? l.push("<=" + t)
              : l.push(`${e} - ${t}`)
            : l.push(">=" + e)
          : l.push("*");
      const u = l.join(" || "),
        h = "string" == typeof t.raw ? t.raw : String(t);
      return u.length < h.length ? u : t;
    };
  },
  function (e, t, r) {
    const n = r(11),
      i = r(41),
      { ANY: o } = i,
      s = r(42),
      a = r(10),
      c = [new i(">=0.0.0-0")],
      l = [new i(">=0.0.0")],
      u = (e, t, r) => {
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === o) {
          if (1 === t.length && t[0].semver === o) return !0;
          e = r.includePrerelease ? c : l;
        }
        if (1 === t.length && t[0].semver === o) {
          if (r.includePrerelease) return !0;
          t = l;
        }
        const n = new Set();
        let i, u, d, p, m, g, v;
        for (const t of e)
          ">" === t.operator || ">=" === t.operator
            ? (i = h(i, t, r))
            : "<" === t.operator || "<=" === t.operator
            ? (u = f(u, t, r))
            : n.add(t.semver);
        if (n.size > 1) return null;
        if (i && u) {
          if (((d = a(i.semver, u.semver, r)), d > 0)) return null;
          if (0 === d && (">=" !== i.operator || "<=" !== u.operator))
            return null;
        }
        for (const e of n) {
          if (i && !s(e, String(i), r)) return null;
          if (u && !s(e, String(u), r)) return null;
          for (const n of t) if (!s(e, String(n), r)) return !1;
          return !0;
        }
        let y =
            !(!u || r.includePrerelease || !u.semver.prerelease.length) &&
            u.semver,
          w =
            !(!i || r.includePrerelease || !i.semver.prerelease.length) &&
            i.semver;
        y &&
          1 === y.prerelease.length &&
          "<" === u.operator &&
          0 === y.prerelease[0] &&
          (y = !1);
        for (const e of t) {
          if (
            ((v = v || ">" === e.operator || ">=" === e.operator),
            (g = g || "<" === e.operator || "<=" === e.operator),
            i)
          )
            if (
              (w &&
                e.semver.prerelease &&
                e.semver.prerelease.length &&
                e.semver.major === w.major &&
                e.semver.minor === w.minor &&
                e.semver.patch === w.patch &&
                (w = !1),
              ">" === e.operator || ">=" === e.operator)
            ) {
              if (((p = h(i, e, r)), p === e && p !== i)) return !1;
            } else if (">=" === i.operator && !s(i.semver, String(e), r))
              return !1;
          if (u)
            if (
              (y &&
                e.semver.prerelease &&
                e.semver.prerelease.length &&
                e.semver.major === y.major &&
                e.semver.minor === y.minor &&
                e.semver.patch === y.patch &&
                (y = !1),
              "<" === e.operator || "<=" === e.operator)
            ) {
              if (((m = f(u, e, r)), m === e && m !== u)) return !1;
            } else if ("<=" === u.operator && !s(u.semver, String(e), r))
              return !1;
          if (!e.operator && (u || i) && 0 !== d) return !1;
        }
        return (
          !(i && g && !u && 0 !== d) && !(u && v && !i && 0 !== d) && !w && !y
        );
      },
      h = (e, t, r) => {
        if (!e) return t;
        const n = a(e.semver, t.semver, r);
        return n > 0
          ? e
          : n < 0 || (">" === t.operator && ">=" === e.operator)
          ? t
          : e;
      },
      f = (e, t, r) => {
        if (!e) return t;
        const n = a(e.semver, t.semver, r);
        return n < 0
          ? e
          : n > 0 || ("<" === t.operator && "<=" === e.operator)
          ? t
          : e;
      };
    e.exports = (e, t, r = {}) => {
      if (e === t) return !0;
      (e = new n(e, r)), (t = new n(t, r));
      let i = !1;
      e: for (const n of e.set) {
        for (const e of t.set) {
          const t = u(n, e, r);
          if (((i = i || null !== t), t)) continue e;
        }
        if (i) return !1;
      }
      return !0;
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = r(1),
      i = r(0),
      o = r(171),
      s = r(91),
      a = r(179),
      c = (e, t, r = 5) => {
        const l = s.getPath();
        n.existsSync(l) || n.mkdirSync(l, { recursive: !0 });
        const u = i.resolve(`${l}/${e}`);
        return new Promise((l, h) => {
          if (!n.existsSync(u) || t) {
            n.existsSync(u) && o.sync(u);
            const f = `https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,
              d = i.resolve(u + ".crx");
            s.downloadFile(f, d)
              .then(() => {
                a(d, u)
                  .then(() => {
                    s.changePermissions(u, 755), l(u);
                  })
                  .catch((e) => {
                    if (!n.existsSync(i.resolve(u, "manifest.json")))
                      return h(e);
                  });
              })
              .catch((n) => {
                if (
                  (console.log(
                    `Failed to fetch extension, trying ${r - 1} more times`
                  ),
                  r <= 1)
                )
                  return h(n);
                setTimeout(() => {
                  c(e, t, r - 1)
                    .then(l)
                    .catch(h);
                }, 200);
              });
          } else l(u);
        });
      };
    t.default = c;
  },
  function (e, t, r) {
    const n = r(33),
      i = r(0),
      o = r(1);
    let s = void 0;
    try {
      s = r(86);
    } catch (e) {}
    const a = { nosort: !0, silent: !0 };
    let c = 0;
    const l = "win32" === process.platform,
      u = (e) => {
        if (
          (["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(
            (t) => {
              (e[t] = e[t] || o[t]), (e[(t += "Sync")] = e[t] || o[t]);
            }
          ),
          (e.maxBusyTries = e.maxBusyTries || 3),
          (e.emfileWait = e.emfileWait || 1e3),
          !1 === e.glob && (e.disableGlob = !0),
          !0 !== e.disableGlob && void 0 === s)
        )
          throw Error(
            "glob dependency not found, set `options.disableGlob = true` if intentional"
          );
        (e.disableGlob = e.disableGlob || !1), (e.glob = e.glob || a);
      },
      h = (e, t, r) => {
        "function" == typeof t && ((r = t), (t = {})),
          n(e, "rimraf: missing path"),
          n.equal(typeof e, "string", "rimraf: path should be a string"),
          n.equal(typeof r, "function", "rimraf: callback function required"),
          n(t, "rimraf: invalid options argument provided"),
          n.equal(typeof t, "object", "rimraf: options should be object"),
          u(t);
        let i = 0,
          o = null,
          a = 0;
        const l = (e, n) =>
          e
            ? r(e)
            : ((a = n.length),
              0 === a
                ? r()
                : void n.forEach((e) => {
                    const n = (s) => {
                      if (s) {
                        if (
                          ("EBUSY" === s.code ||
                            "ENOTEMPTY" === s.code ||
                            "EPERM" === s.code) &&
                          i < t.maxBusyTries
                        )
                          return i++, setTimeout(() => f(e, t, n), 100 * i);
                        if ("EMFILE" === s.code && c < t.emfileWait)
                          return setTimeout(() => f(e, t, n), c++);
                        "ENOENT" === s.code && (s = null);
                      }
                      (c = 0),
                        ((e) => {
                          (o = o || e), 0 == --a && r(o);
                        })(s);
                    };
                    f(e, t, n);
                  }));
        if (t.disableGlob || !s.hasMagic(e)) return l(null, [e]);
        t.lstat(e, (r, n) => {
          if (!r) return l(null, [e]);
          s(e, t.glob, l);
        });
      },
      f = (e, t, r) => {
        n(e),
          n(t),
          n("function" == typeof r),
          t.lstat(e, (n, i) =>
            n && "ENOENT" === n.code
              ? r(null)
              : (n && "EPERM" === n.code && l && d(e, t, n, r),
                i && i.isDirectory()
                  ? m(e, t, n, r)
                  : void t.unlink(e, (n) => {
                      if (n) {
                        if ("ENOENT" === n.code) return r(null);
                        if ("EPERM" === n.code)
                          return l ? d(e, t, n, r) : m(e, t, n, r);
                        if ("EISDIR" === n.code) return m(e, t, n, r);
                      }
                      return r(n);
                    }))
          );
      },
      d = (e, t, r, i) => {
        n(e),
          n(t),
          n("function" == typeof i),
          t.chmod(e, 438, (n) => {
            n
              ? i("ENOENT" === n.code ? null : r)
              : t.stat(e, (n, o) => {
                  n
                    ? i("ENOENT" === n.code ? null : r)
                    : o.isDirectory()
                    ? m(e, t, r, i)
                    : t.unlink(e, i);
                });
          });
      },
      p = (e, t, r) => {
        n(e), n(t);
        try {
          t.chmodSync(e, 438);
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw r;
        }
        let i;
        try {
          i = t.statSync(e);
        } catch (e) {
          if ("ENOENT" === e.code) return;
          throw r;
        }
        i.isDirectory() ? y(e, t, r) : t.unlinkSync(e);
      },
      m = (e, t, r, i) => {
        n(e),
          n(t),
          n("function" == typeof i),
          t.rmdir(e, (n) => {
            !n ||
            ("ENOTEMPTY" !== n.code &&
              "EEXIST" !== n.code &&
              "EPERM" !== n.code)
              ? n && "ENOTDIR" === n.code
                ? i(r)
                : i(n)
              : g(e, t, i);
          });
      },
      g = (e, t, r) => {
        n(e),
          n(t),
          n("function" == typeof r),
          t.readdir(e, (n, o) => {
            if (n) return r(n);
            let s,
              a = o.length;
            if (0 === a) return t.rmdir(e, r);
            o.forEach((n) => {
              h(i.join(e, n), t, (n) => {
                if (!s)
                  return n ? r((s = n)) : void (0 == --a && t.rmdir(e, r));
              });
            });
          });
      },
      v = (e, t) => {
        let r;
        if (
          (u((t = t || {})),
          n(e, "rimraf: missing path"),
          n.equal(typeof e, "string", "rimraf: path should be a string"),
          n(t, "rimraf: missing options"),
          n.equal(typeof t, "object", "rimraf: options should be object"),
          t.disableGlob || !s.hasMagic(e))
        )
          r = [e];
        else
          try {
            t.lstatSync(e), (r = [e]);
          } catch (n) {
            r = s.sync(e, t.glob);
          }
        if (r.length)
          for (let e = 0; e < r.length; e++) {
            const n = r[e];
            let i;
            try {
              i = t.lstatSync(n);
            } catch (e) {
              if ("ENOENT" === e.code) return;
              "EPERM" === e.code && l && p(n, t, e);
            }
            try {
              i && i.isDirectory() ? y(n, t, null) : t.unlinkSync(n);
            } catch (e) {
              if ("ENOENT" === e.code) return;
              if ("EPERM" === e.code) return l ? p(n, t, e) : y(n, t, e);
              if ("EISDIR" !== e.code) throw e;
              y(n, t, e);
            }
          }
      },
      y = (e, t, r) => {
        n(e), n(t);
        try {
          t.rmdirSync(e);
        } catch (n) {
          if ("ENOENT" === n.code) return;
          if ("ENOTDIR" === n.code) throw r;
          ("ENOTEMPTY" !== n.code &&
            "EEXIST" !== n.code &&
            "EPERM" !== n.code) ||
            w(e, t);
        }
      },
      w = (e, t) => {
        n(e), n(t), t.readdirSync(e).forEach((r) => v(i.join(e, r), t));
        const r = l ? 100 : 1;
        let o = 0;
        for (;;) {
          let n = !0;
          try {
            const i = t.rmdirSync(e, t);
            return (n = !1), i;
          } finally {
            if (++o < r && n) continue;
          }
        }
      };
    (e.exports = h), (h.sync = v);
  },
  function (e, t, r) {
    var n = r(0),
      i = "win32" === process.platform,
      o = r(1),
      s = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function a(e) {
      return "function" == typeof e
        ? e
        : (function () {
            var e;
            if (s) {
              var t = new Error();
              e = function (e) {
                e && ((t.message = e.message), r((e = t)));
              };
            } else e = r;
            return e;
            function r(e) {
              if (e) {
                if (process.throwDeprecation) throw e;
                if (!process.noDeprecation) {
                  var t = "fs: missing callback " + (e.stack || e.message);
                  process.traceDeprecation
                    ? console.trace(t)
                    : console.error(t);
                }
              }
            }
          })();
    }
    n.normalize;
    if (i) var c = /(.*?)(?:[\/\\]+|$)/g;
    else c = /(.*?)(?:[\/]+|$)/g;
    if (i) var l = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    else l = /^[\/]*/;
    (t.realpathSync = function (e, t) {
      if (((e = n.resolve(e)), t && Object.prototype.hasOwnProperty.call(t, e)))
        return t[e];
      var r,
        s,
        a,
        u,
        h = e,
        f = {},
        d = {};
      function p() {
        var t = l.exec(e);
        (r = t[0].length),
          (s = t[0]),
          (a = t[0]),
          (u = ""),
          i && !d[a] && (o.lstatSync(a), (d[a] = !0));
      }
      for (p(); r < e.length; ) {
        c.lastIndex = r;
        var m = c.exec(e);
        if (
          ((u = s),
          (s += m[0]),
          (a = u + m[1]),
          (r = c.lastIndex),
          !(d[a] || (t && t[a] === a)))
        ) {
          var g;
          if (t && Object.prototype.hasOwnProperty.call(t, a)) g = t[a];
          else {
            var v = o.lstatSync(a);
            if (!v.isSymbolicLink()) {
              (d[a] = !0), t && (t[a] = a);
              continue;
            }
            var y = null;
            if (!i) {
              var w = v.dev.toString(32) + ":" + v.ino.toString(32);
              f.hasOwnProperty(w) && (y = f[w]);
            }
            null === y && (o.statSync(a), (y = o.readlinkSync(a))),
              (g = n.resolve(u, y)),
              t && (t[a] = g),
              i || (f[w] = y);
          }
          (e = n.resolve(g, e.slice(r))), p();
        }
      }
      return t && (t[h] = e), e;
    }),
      (t.realpath = function (e, t, r) {
        if (
          ("function" != typeof r && ((r = a(t)), (t = null)),
          (e = n.resolve(e)),
          t && Object.prototype.hasOwnProperty.call(t, e))
        )
          return process.nextTick(r.bind(null, null, t[e]));
        var s,
          u,
          h,
          f,
          d = e,
          p = {},
          m = {};
        function g() {
          var t = l.exec(e);
          (s = t[0].length),
            (u = t[0]),
            (h = t[0]),
            (f = ""),
            i && !m[h]
              ? o.lstat(h, function (e) {
                  if (e) return r(e);
                  (m[h] = !0), v();
                })
              : process.nextTick(v);
        }
        function v() {
          if (s >= e.length) return t && (t[d] = e), r(null, e);
          c.lastIndex = s;
          var n = c.exec(e);
          return (
            (f = u),
            (u += n[0]),
            (h = f + n[1]),
            (s = c.lastIndex),
            m[h] || (t && t[h] === h)
              ? process.nextTick(v)
              : t && Object.prototype.hasOwnProperty.call(t, h)
              ? b(t[h])
              : o.lstat(h, y)
          );
        }
        function y(e, n) {
          if (e) return r(e);
          if (!n.isSymbolicLink())
            return (m[h] = !0), t && (t[h] = h), process.nextTick(v);
          if (!i) {
            var s = n.dev.toString(32) + ":" + n.ino.toString(32);
            if (p.hasOwnProperty(s)) return w(null, p[s], h);
          }
          o.stat(h, function (e) {
            if (e) return r(e);
            o.readlink(h, function (e, t) {
              i || (p[s] = t), w(e, t);
            });
          });
        }
        function w(e, i, o) {
          if (e) return r(e);
          var s = n.resolve(f, i);
          t && (t[o] = s), b(s);
        }
        function b(t) {
          (e = n.resolve(t, e.slice(s))), g();
        }
        g();
      });
  },
  function (e, t, r) {
    var n = r(174),
      i = r(175);
    e.exports = function (e) {
      if (!e) return [];
      "{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2));
      return (function e(t, r) {
        var o = [],
          s = i("{", "}", t);
        if (!s || /\$$/.test(s.pre)) return [t];
        var c,
          l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),
          h = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),
          g = l || h,
          v = s.body.indexOf(",") >= 0;
        if (!g && !v)
          return s.post.match(/,.*\}/)
            ? ((t = s.pre + "{" + s.body + a + s.post), e(t))
            : [t];
        if (g) c = s.body.split(/\.\./);
        else {
          if (
            1 ===
            (c = (function e(t) {
              if (!t) return [""];
              var r = [],
                n = i("{", "}", t);
              if (!n) return t.split(",");
              var o = n.pre,
                s = n.body,
                a = n.post,
                c = o.split(",");
              c[c.length - 1] += "{" + s + "}";
              var l = e(a);
              a.length && ((c[c.length - 1] += l.shift()), c.push.apply(c, l));
              return r.push.apply(r, c), r;
            })(s.body)).length
          )
            if (1 === (c = e(c[0], !1).map(f)).length)
              return (b = s.post.length ? e(s.post, !1) : [""]).map(function (
                e
              ) {
                return s.pre + c[0] + e;
              });
        }
        var y,
          w = s.pre,
          b = s.post.length ? e(s.post, !1) : [""];
        if (g) {
          var E = u(c[0]),
            _ = u(c[1]),
            A = Math.max(c[0].length, c[1].length),
            S = 3 == c.length ? Math.abs(u(c[2])) : 1,
            O = p;
          _ < E && ((S *= -1), (O = m));
          var C = c.some(d);
          y = [];
          for (var I = E; O(I, _); I += S) {
            var k;
            if (h) "\\" === (k = String.fromCharCode(I)) && (k = "");
            else if (((k = String(I)), C)) {
              var T = A - k.length;
              if (T > 0) {
                var x = new Array(T + 1).join("0");
                k = I < 0 ? "-" + x + k.slice(1) : x + k;
              }
            }
            y.push(k);
          }
        } else
          y = n(c, function (t) {
            return e(t, !1);
          });
        for (var R = 0; R < y.length; R++)
          for (var N = 0; N < b.length; N++) {
            var D = w + y[R] + b[N];
            (!r || g || D) && o.push(D);
          }
        return o;
      })(
        (function (e) {
          return e
            .split("\\\\")
            .join(o)
            .split("\\{")
            .join(s)
            .split("\\}")
            .join(a)
            .split("\\,")
            .join(c)
            .split("\\.")
            .join(l);
        })(e),
        !0
      ).map(h);
    };
    var o = "\0SLASH" + Math.random() + "\0",
      s = "\0OPEN" + Math.random() + "\0",
      a = "\0CLOSE" + Math.random() + "\0",
      c = "\0COMMA" + Math.random() + "\0",
      l = "\0PERIOD" + Math.random() + "\0";
    function u(e) {
      return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
    }
    function h(e) {
      return e
        .split(o)
        .join("\\")
        .split(s)
        .join("{")
        .split(a)
        .join("}")
        .split(c)
        .join(",")
        .split(l)
        .join(".");
    }
    function f(e) {
      return "{" + e + "}";
    }
    function d(e) {
      return /^-?0\d/.test(e);
    }
    function p(e, t) {
      return e <= t;
    }
    function m(e, t) {
      return e >= t;
    }
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = [], i = 0; i < e.length; i++) {
        var o = t(e[i], i);
        r(o) ? n.push.apply(n, o) : n.push(o);
      }
      return n;
    };
    var r =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
  },
  function (e, t, r) {
    "use strict";
    function n(e, t, r) {
      e instanceof RegExp && (e = i(e, r)),
        t instanceof RegExp && (t = i(t, r));
      var n = o(e, t, r);
      return (
        n && {
          start: n[0],
          end: n[1],
          pre: r.slice(0, n[0]),
          body: r.slice(n[0] + e.length, n[1]),
          post: r.slice(n[1] + t.length),
        }
      );
    }
    function i(e, t) {
      var r = t.match(e);
      return r ? r[0] : null;
    }
    function o(e, t, r) {
      var n,
        i,
        o,
        s,
        a,
        c = r.indexOf(e),
        l = r.indexOf(t, c + 1),
        u = c;
      if (c >= 0 && l > 0) {
        if (e === t) return [c, l];
        for (n = [], o = r.length; u >= 0 && !a; )
          u == c
            ? (n.push(u), (c = r.indexOf(e, u + 1)))
            : 1 == n.length
            ? (a = [n.pop(), l])
            : ((i = n.pop()) < o && ((o = i), (s = l)),
              (l = r.indexOf(t, u + 1))),
            (u = c < l && c >= 0 ? c : l);
        n.length && (a = [o, s]);
      }
      return a;
    }
    (e.exports = n), (n.range = o);
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
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
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var r = function () {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t, r) {
    (e.exports = d), (d.GlobSync = p);
    var n = r(87),
      i = r(64),
      o = (i.Minimatch, r(86).Glob, r(14), r(0)),
      s = r(33),
      a = r(65),
      c = r(88),
      l = c.setopts,
      u = c.ownProp,
      h = c.childrenIgnored,
      f = c.isIgnored;
    function d(e, t) {
      if ("function" == typeof t || 3 === arguments.length)
        throw new TypeError(
          "callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167"
        );
      return new p(e, t).found;
    }
    function p(e, t) {
      if (!e) throw new Error("must provide pattern");
      if ("function" == typeof t || 3 === arguments.length)
        throw new TypeError(
          "callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167"
        );
      if (!(this instanceof p)) return new p(e, t);
      if ((l(this, e, t), this.noprocess)) return this;
      var r = this.minimatch.set.length;
      this.matches = new Array(r);
      for (var n = 0; n < r; n++) this._process(this.minimatch.set[n], n, !1);
      this._finish();
    }
    (p.prototype._finish = function () {
      if ((s.ok(this instanceof p), this.realpath)) {
        var e = this;
        this.matches.forEach(function (t, r) {
          var i = (e.matches[r] = Object.create(null));
          for (var o in t)
            try {
              (o = e._makeAbs(o)), (i[n.realpathSync(o, e.realpathCache)] = !0);
            } catch (t) {
              if ("stat" !== t.syscall) throw t;
              i[e._makeAbs(o)] = !0;
            }
        });
      }
      c.finish(this);
    }),
      (p.prototype._process = function (e, t, r) {
        s.ok(this instanceof p);
        for (var n, o = 0; "string" == typeof e[o]; ) o++;
        switch (o) {
          case e.length:
            return void this._processSimple(e.join("/"), t);
          case 0:
            n = null;
            break;
          default:
            n = e.slice(0, o).join("/");
        }
        var c,
          l = e.slice(o);
        null === n
          ? (c = ".")
          : a(n) ||
            a(
              e
                .map(function (e) {
                  return "string" == typeof e ? e : "[*]";
                })
                .join("/")
            )
          ? ((n && a(n)) || (n = "/" + n), (c = n))
          : (c = n);
        var u = this._makeAbs(c);
        h(this, c) ||
          (l[0] === i.GLOBSTAR
            ? this._processGlobStar(n, c, u, l, t, r)
            : this._processReaddir(n, c, u, l, t, r));
      }),
      (p.prototype._processReaddir = function (e, t, r, n, i, s) {
        var a = this._readdir(r, s);
        if (a) {
          for (
            var c = n[0],
              l = !!this.minimatch.negate,
              u = c._glob,
              h = this.dot || "." === u.charAt(0),
              f = [],
              d = 0;
            d < a.length;
            d++
          ) {
            if ("." !== (g = a[d]).charAt(0) || h)
              (l && !e ? !g.match(c) : g.match(c)) && f.push(g);
          }
          var p = f.length;
          if (0 !== p)
            if (1 !== n.length || this.mark || this.stat) {
              n.shift();
              for (d = 0; d < p; d++) {
                var m;
                g = f[d];
                (m = e ? [e, g] : [g]), this._process(m.concat(n), i, s);
              }
            } else {
              this.matches[i] || (this.matches[i] = Object.create(null));
              for (var d = 0; d < p; d++) {
                var g = f[d];
                e && (g = "/" !== e.slice(-1) ? e + "/" + g : e + g),
                  "/" !== g.charAt(0) ||
                    this.nomount ||
                    (g = o.join(this.root, g)),
                  this._emitMatch(i, g);
              }
            }
        }
      }),
      (p.prototype._emitMatch = function (e, t) {
        if (!f(this, t)) {
          var r = this._makeAbs(t);
          if (
            (this.mark && (t = this._mark(t)),
            this.absolute && (t = r),
            !this.matches[e][t])
          ) {
            if (this.nodir) {
              var n = this.cache[r];
              if ("DIR" === n || Array.isArray(n)) return;
            }
            (this.matches[e][t] = !0), this.stat && this._stat(t);
          }
        }
      }),
      (p.prototype._readdirInGlobStar = function (e) {
        if (this.follow) return this._readdir(e, !1);
        var t, r;
        try {
          r = this.fs.lstatSync(e);
        } catch (e) {
          if ("ENOENT" === e.code) return null;
        }
        var n = r && r.isSymbolicLink();
        return (
          (this.symlinks[e] = n),
          n || !r || r.isDirectory()
            ? (t = this._readdir(e, !1))
            : (this.cache[e] = "FILE"),
          t
        );
      }),
      (p.prototype._readdir = function (e, t) {
        if (t && !u(this.symlinks, e)) return this._readdirInGlobStar(e);
        if (u(this.cache, e)) {
          var r = this.cache[e];
          if (!r || "FILE" === r) return null;
          if (Array.isArray(r)) return r;
        }
        try {
          return this._readdirEntries(e, this.fs.readdirSync(e));
        } catch (t) {
          return this._readdirError(e, t), null;
        }
      }),
      (p.prototype._readdirEntries = function (e, t) {
        if (!this.mark && !this.stat)
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n = "/" === e ? e + n : e + "/" + n), (this.cache[n] = !0);
          }
        return (this.cache[e] = t), t;
      }),
      (p.prototype._readdirError = function (e, t) {
        switch (t.code) {
          case "ENOTSUP":
          case "ENOTDIR":
            var r = this._makeAbs(e);
            if (((this.cache[r] = "FILE"), r === this.cwdAbs)) {
              var n = new Error(t.code + " invalid cwd " + this.cwd);
              throw ((n.path = this.cwd), (n.code = t.code), n);
            }
            break;
          case "ENOENT":
          case "ELOOP":
          case "ENAMETOOLONG":
          case "UNKNOWN":
            this.cache[this._makeAbs(e)] = !1;
            break;
          default:
            if (((this.cache[this._makeAbs(e)] = !1), this.strict)) throw t;
            this.silent || console.error("glob error", t);
        }
      }),
      (p.prototype._processGlobStar = function (e, t, r, n, i, o) {
        var s = this._readdir(r, o);
        if (s) {
          var a = n.slice(1),
            c = e ? [e] : [],
            l = c.concat(a);
          this._process(l, i, !1);
          var u = s.length;
          if (!this.symlinks[r] || !o)
            for (var h = 0; h < u; h++) {
              if ("." !== s[h].charAt(0) || this.dot) {
                var f = c.concat(s[h], a);
                this._process(f, i, !0);
                var d = c.concat(s[h], n);
                this._process(d, i, !0);
              }
            }
        }
      }),
      (p.prototype._processSimple = function (e, t) {
        var r = this._stat(e);
        if ((this.matches[t] || (this.matches[t] = Object.create(null)), r)) {
          if (e && a(e) && !this.nomount) {
            var n = /[\/\\]$/.test(e);
            "/" === e.charAt(0)
              ? (e = o.join(this.root, e))
              : ((e = o.resolve(this.root, e)), n && (e += "/"));
          }
          "win32" === process.platform && (e = e.replace(/\\/g, "/")),
            this._emitMatch(t, e);
        }
      }),
      (p.prototype._stat = function (e) {
        var t = this._makeAbs(e),
          r = "/" === e.slice(-1);
        if (e.length > this.maxLength) return !1;
        if (!this.stat && u(this.cache, t)) {
          var n = this.cache[t];
          if ((Array.isArray(n) && (n = "DIR"), !r || "DIR" === n)) return n;
          if (r && "FILE" === n) return !1;
        }
        var i = this.statCache[t];
        if (!i) {
          var o;
          try {
            o = this.fs.lstatSync(t);
          } catch (e) {
            if (e && ("ENOENT" === e.code || "ENOTDIR" === e.code))
              return (this.statCache[t] = !1), !1;
          }
          if (o && o.isSymbolicLink())
            try {
              i = this.fs.statSync(t);
            } catch (e) {
              i = o;
            }
          else i = o;
        }
        this.statCache[t] = i;
        n = !0;
        return (
          i && (n = i.isDirectory() ? "DIR" : "FILE"),
          (this.cache[t] = this.cache[t] || n),
          (!r || "FILE" !== n) && n
        );
      }),
      (p.prototype._mark = function (e) {
        return c.mark(this, e);
      }),
      (p.prototype._makeAbs = function (e) {
        return c.makeAbs(this, e);
      });
  },
  function (e, t, r) {
    var n = r(89),
      i = Object.create(null),
      o = r(90);
    function s(e) {
      for (var t = e.length, r = [], n = 0; n < t; n++) r[n] = e[n];
      return r;
    }
    e.exports = n(function (e, t) {
      return i[e]
        ? (i[e].push(t), null)
        : ((i[e] = [t]),
          (function (e) {
            return o(function t() {
              var r = i[e],
                n = r.length,
                o = s(arguments);
              try {
                for (var a = 0; a < n; a++) r[a].apply(null, o);
              } finally {
                r.length > n
                  ? (r.splice(0, n),
                    process.nextTick(function () {
                      t.apply(null, o);
                    }))
                  : delete i[e];
              }
            });
          })(e));
    });
  },
  function (e, t, r) {
    "use strict";
    var n = r(1),
      i = r(0),
      o = r(180),
      s = r(117),
      a = r(211),
      c = a(n.writeFile),
      l = a(n.readFile),
      u = a(s);
    e.exports = function (e, t) {
      var r = i.resolve(e),
        n = i.extname(e),
        s = i.basename(e, n),
        a = i.dirname(e);
      return (
        (t = t || i.resolve(a, s)),
        l(r)
          .then(function (e) {
            return o.loadAsync(
              (function (e) {
                function t(e, t, r, n) {
                  var i = 0;
                  return (
                    (i += e), (i += t << 8), (i += r << 16), (i += n << 24)
                  );
                }
                if (80 === e[0] && 75 === e[1] && 3 === e[2] && 4 === e[3])
                  return e;
                if (67 !== e[0] || 114 !== e[1] || 50 !== e[2] || 52 !== e[3])
                  throw new Error("Invalid header: Does not start with Cr24");
                var r = 3 === e[4],
                  n = 2 === e[4];
                if ((!n && !r) || e[5] || e[6] || e[7])
                  throw new Error("Unexpected crx format version number.");
                if (n) {
                  var i =
                    16 +
                    t(e[8], e[9], e[10], e[11]) +
                    t(e[12], e[13], e[14], e[15]);
                  return e.slice(i, e.length);
                }
                var o = 12 + t(e[8], e[9], e[10], e[11]);
                return e.slice(o, e.length);
              })(e)
            );
          })
          .then(function (e) {
            var r = Object.keys(e.files);
            return Promise.all(
              r.map(function (r) {
                var n = !e.files[r].dir,
                  o = i.join(t, r),
                  s = (n && i.dirname(o)) || o,
                  a = e.files[r].async("nodebuffer");
                return u(s)
                  .then(function () {
                    return !!n && a;
                  })
                  .then(function (e) {
                    return !e || c(o, e);
                  });
              })
            );
          })
      );
    };
  },
  function (e, t, r) {
    "use strict";
    function n() {
      if (!(this instanceof n)) return new n();
      if (arguments.length)
        throw new Error(
          "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
        );
      (this.files = Object.create(null)),
        (this.comment = null),
        (this.root = ""),
        (this.clone = function () {
          var e = new n();
          for (var t in this) "function" != typeof this[t] && (e[t] = this[t]);
          return e;
        });
    }
    (n.prototype = r(181)),
      (n.prototype.loadAsync = r(206)),
      (n.support = r(18)),
      (n.defaults = r(103)),
      (n.version = "3.10.1"),
      (n.loadAsync = function (e, t) {
        return new n().loadAsync(e, t);
      }),
      (n.external = r(36)),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var n = r(34),
      i = r(2),
      o = r(9),
      s = r(102),
      a = r(103),
      c = r(66),
      l = r(192),
      u = r(193),
      h = r(46),
      f = r(205),
      d = function (e, t, r) {
        var n,
          s = i.getTypeOf(t),
          u = i.extend(r || {}, a);
        (u.date = u.date || new Date()),
          null !== u.compression &&
            (u.compression = u.compression.toUpperCase()),
          "string" == typeof u.unixPermissions &&
            (u.unixPermissions = parseInt(u.unixPermissions, 8)),
          u.unixPermissions && 16384 & u.unixPermissions && (u.dir = !0),
          u.dosPermissions && 16 & u.dosPermissions && (u.dir = !0),
          u.dir && (e = m(e)),
          u.createFolders && (n = p(e)) && g.call(this, n, !0);
        var d = "string" === s && !1 === u.binary && !1 === u.base64;
        (r && void 0 !== r.binary) || (u.binary = !d),
          ((t instanceof c && 0 === t.uncompressedSize) ||
            u.dir ||
            !t ||
            0 === t.length) &&
            ((u.base64 = !1),
            (u.binary = !0),
            (t = ""),
            (u.compression = "STORE"),
            (s = "string"));
        var v = null;
        v =
          t instanceof c || t instanceof o
            ? t
            : h.isNode && h.isStream(t)
            ? new f(e, t)
            : i.prepareContent(
                e,
                t,
                u.binary,
                u.optimizedBinaryString,
                u.base64
              );
        var y = new l(e, v, u);
        this.files[e] = y;
      },
      p = function (e) {
        "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
        var t = e.lastIndexOf("/");
        return t > 0 ? e.substring(0, t) : "";
      },
      m = function (e) {
        return "/" !== e.slice(-1) && (e += "/"), e;
      },
      g = function (e, t) {
        return (
          (t = void 0 !== t ? t : a.createFolders),
          (e = m(e)),
          this.files[e] || d.call(this, e, null, { dir: !0, createFolders: t }),
          this.files[e]
        );
      };
    function v(e) {
      return "[object RegExp]" === Object.prototype.toString.call(e);
    }
    var y = {
      load: function () {
        throw new Error(
          "This method has been removed in JSZip 3.0, please check the upgrade guide."
        );
      },
      forEach: function (e) {
        var t, r, n;
        for (t in this.files)
          (n = this.files[t]),
            (r = t.slice(this.root.length, t.length)) &&
              t.slice(0, this.root.length) === this.root &&
              e(r, n);
      },
      filter: function (e) {
        var t = [];
        return (
          this.forEach(function (r, n) {
            e(r, n) && t.push(n);
          }),
          t
        );
      },
      file: function (e, t, r) {
        if (1 === arguments.length) {
          if (v(e)) {
            var n = e;
            return this.filter(function (e, t) {
              return !t.dir && n.test(e);
            });
          }
          var i = this.files[this.root + e];
          return i && !i.dir ? i : null;
        }
        return (e = this.root + e), d.call(this, e, t, r), this;
      },
      folder: function (e) {
        if (!e) return this;
        if (v(e))
          return this.filter(function (t, r) {
            return r.dir && e.test(t);
          });
        var t = this.root + e,
          r = g.call(this, t),
          n = this.clone();
        return (n.root = r.name), n;
      },
      remove: function (e) {
        e = this.root + e;
        var t = this.files[e];
        if (
          (t || ("/" !== e.slice(-1) && (e += "/"), (t = this.files[e])),
          t && !t.dir)
        )
          delete this.files[e];
        else
          for (
            var r = this.filter(function (t, r) {
                return r.name.slice(0, e.length) === e;
              }),
              n = 0;
            n < r.length;
            n++
          )
            delete this.files[r[n].name];
        return this;
      },
      generate: function () {
        throw new Error(
          "This method has been removed in JSZip 3.0, please check the upgrade guide."
        );
      },
      generateInternalStream: function (e) {
        var t,
          r = {};
        try {
          if (
            (((r = i.extend(e || {}, {
              streamFiles: !1,
              compression: "STORE",
              compressionOptions: null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: "application/zip",
              encodeFileName: n.utf8encode,
            })).type = r.type.toLowerCase()),
            (r.compression = r.compression.toUpperCase()),
            "binarystring" === r.type && (r.type = "string"),
            !r.type)
          )
            throw new Error("No output type specified.");
          i.checkSupport(r.type),
            ("darwin" !== r.platform &&
              "freebsd" !== r.platform &&
              "linux" !== r.platform &&
              "sunos" !== r.platform) ||
              (r.platform = "UNIX"),
            "win32" === r.platform && (r.platform = "DOS");
          var a = r.comment || this.comment || "";
          t = u.generateWorker(this, r, a);
        } catch (e) {
          (t = new o("error")).error(e);
        }
        return new s(t, r.type || "string", r.mimeType);
      },
      generateAsync: function (e, t) {
        return this.generateInternalStream(e).accumulate(t);
      },
      generateNodeStream: function (e, t) {
        return (
          (e = e || {}).type || (e.type = "nodebuffer"),
          this.generateInternalStream(e).toNodejsStream(t)
        );
      },
    };
    e.exports = y;
  },
  function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  function (e, t, r) {
    "use strict";
    var n = r(45).Buffer,
      i = r(14);
    (e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, r = "" + t.data; (t = t.next); )
            r += e + t.data;
          return r;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return n.alloc(0);
          for (
            var t, r, i, o = n.allocUnsafe(e >>> 0), s = this.head, a = 0;
            s;

          )
            (t = s.data),
              (r = o),
              (i = a),
              t.copy(r, i),
              (a += s.data.length),
              (s = s.next);
          return o;
        }),
        e
      );
    })()),
      i &&
        i.inspect &&
        i.inspect.custom &&
        (e.exports.prototype[i.inspect.custom] = function () {
          var e = i.inspect({ length: this.length });
          return this.constructor.name + " " + e;
        });
  },
  function (e, t, r) {
    e.exports = r(14).deprecate;
  },
  function (e, t, r) {
    "use strict";
    e.exports = o;
    var n = r(100),
      i = Object.create(r(35));
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      n.call(this, e);
    }
    (i.inherits = r(26)),
      i.inherits(o, n),
      (o.prototype._transform = function (e, t, r) {
        r(null, e);
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(187);
    function i() {}
    var o = {},
      s = ["REJECTED"],
      a = ["FULFILLED"],
      c = ["PENDING"];
    if (!process.browser) var l = ["UNHANDLED"];
    function u(e) {
      if ("function" != typeof e)
        throw new TypeError("resolver must be a function");
      (this.state = c),
        (this.queue = []),
        (this.outcome = void 0),
        process.browser || (this.handled = l),
        e !== i && p(this, e);
    }
    function h(e, t, r) {
      (this.promise = e),
        "function" == typeof t &&
          ((this.onFulfilled = t),
          (this.callFulfilled = this.otherCallFulfilled)),
        "function" == typeof r &&
          ((this.onRejected = r), (this.callRejected = this.otherCallRejected));
    }
    function f(e, t, r) {
      n(function () {
        var n;
        try {
          n = t(r);
        } catch (t) {
          return o.reject(e, t);
        }
        n === e
          ? o.reject(e, new TypeError("Cannot resolve promise with itself"))
          : o.resolve(e, n);
      });
    }
    function d(e) {
      var t = e && e.then;
      if (
        e &&
        ("object" == typeof e || "function" == typeof e) &&
        "function" == typeof t
      )
        return function () {
          t.apply(e, arguments);
        };
    }
    function p(e, t) {
      var r = !1;
      function n(t) {
        r || ((r = !0), o.reject(e, t));
      }
      function i(t) {
        r || ((r = !0), o.resolve(e, t));
      }
      var s = m(function () {
        t(i, n);
      });
      "error" === s.status && n(s.value);
    }
    function m(e, t) {
      var r = {};
      try {
        (r.value = e(t)), (r.status = "success");
      } catch (e) {
        (r.status = "error"), (r.value = e);
      }
      return r;
    }
    (e.exports = u),
      (u.prototype.finally = function (e) {
        if ("function" != typeof e) return this;
        var t = this.constructor;
        return this.then(
          function (r) {
            return t.resolve(e()).then(function () {
              return r;
            });
          },
          function (r) {
            return t.resolve(e()).then(function () {
              throw r;
            });
          }
        );
      }),
      (u.prototype.catch = function (e) {
        return this.then(null, e);
      }),
      (u.prototype.then = function (e, t) {
        if (
          ("function" != typeof e && this.state === a) ||
          ("function" != typeof t && this.state === s)
        )
          return this;
        var r = new this.constructor(i);
        (process.browser || (this.handled === l && (this.handled = null)),
        this.state !== c)
          ? f(r, this.state === a ? e : t, this.outcome)
          : this.queue.push(new h(r, e, t));
        return r;
      }),
      (h.prototype.callFulfilled = function (e) {
        o.resolve(this.promise, e);
      }),
      (h.prototype.otherCallFulfilled = function (e) {
        f(this.promise, this.onFulfilled, e);
      }),
      (h.prototype.callRejected = function (e) {
        o.reject(this.promise, e);
      }),
      (h.prototype.otherCallRejected = function (e) {
        f(this.promise, this.onRejected, e);
      }),
      (o.resolve = function (e, t) {
        var r = m(d, t);
        if ("error" === r.status) return o.reject(e, r.value);
        var n = r.value;
        if (n) p(e, n);
        else {
          (e.state = a), (e.outcome = t);
          for (var i = -1, s = e.queue.length; ++i < s; )
            e.queue[i].callFulfilled(t);
        }
        return e;
      }),
      (o.reject = function (e, t) {
        (e.state = s),
          (e.outcome = t),
          process.browser ||
            (e.handled === l &&
              n(function () {
                e.handled === l && process.emit("unhandledRejection", t, e);
              }));
        for (var r = -1, i = e.queue.length; ++r < i; )
          e.queue[r].callRejected(t);
        return e;
      }),
      (u.resolve = function (e) {
        if (e instanceof this) return e;
        return o.resolve(new this(i), e);
      }),
      (u.reject = function (e) {
        var t = new this(i);
        return o.reject(t, e);
      }),
      (u.all = function (e) {
        var t = this;
        if ("[object Array]" !== Object.prototype.toString.call(e))
          return this.reject(new TypeError("must be an array"));
        var r = e.length,
          n = !1;
        if (!r) return this.resolve([]);
        var s = new Array(r),
          a = 0,
          c = -1,
          l = new this(i);
        for (; ++c < r; ) u(e[c], c);
        return l;
        function u(e, i) {
          t.resolve(e).then(
            function (e) {
              (s[i] = e), ++a !== r || n || ((n = !0), o.resolve(l, s));
            },
            function (e) {
              n || ((n = !0), o.reject(l, e));
            }
          );
        }
      }),
      (u.race = function (e) {
        var t = this;
        if ("[object Array]" !== Object.prototype.toString.call(e))
          return this.reject(new TypeError("must be an array"));
        var r = e.length,
          n = !1;
        if (!r) return this.resolve([]);
        var s = -1,
          a = new this(i);
        for (; ++s < r; )
          (c = e[s]),
            t.resolve(c).then(
              function (e) {
                n || ((n = !0), o.resolve(a, e));
              },
              function (e) {
                n || ((n = !0), o.reject(a, e));
              }
            );
        var c;
        return a;
      });
  },
  function (e, t, r) {
    "use strict";
    var n,
      i,
      o = global.MutationObserver || global.WebKitMutationObserver;
    if (process.browser)
      if (o) {
        var s = 0,
          a = new o(h),
          c = global.document.createTextNode("");
        a.observe(c, { characterData: !0 }),
          (n = function () {
            c.data = s = ++s % 2;
          });
      } else if (global.setImmediate || void 0 === global.MessageChannel)
        n =
          "document" in global &&
          "onreadystatechange" in global.document.createElement("script")
            ? function () {
                var e = global.document.createElement("script");
                (e.onreadystatechange = function () {
                  h(),
                    (e.onreadystatechange = null),
                    e.parentNode.removeChild(e),
                    (e = null);
                }),
                  global.document.documentElement.appendChild(e);
              }
            : function () {
                setTimeout(h, 0);
              };
      else {
        var l = new global.MessageChannel();
        (l.port1.onmessage = h),
          (n = function () {
            l.port2.postMessage(0);
          });
      }
    else
      n = function () {
        process.nextTick(h);
      };
    var u = [];
    function h() {
      var e, t;
      i = !0;
      for (var r = u.length; r; ) {
        for (t = u, u = [], e = -1; ++e < r; ) t[e]();
        r = u.length;
      }
      i = !1;
    }
    e.exports = function (e) {
      1 !== u.push(e) || i || n();
    };
  },
  function (e, t) {
    !(function (e, t) {
      "use strict";
      if (!e.setImmediate) {
        var r,
          n,
          i,
          o,
          s,
          a = 1,
          c = {},
          l = !1,
          u = e.document,
          h = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (h = h && h.setTimeout ? h : e),
          "[object process]" === {}.toString.call(e.process)
            ? (r = function (e) {
                process.nextTick(function () {
                  d(e);
                });
              })
            : !(function () {
                if (e.postMessage && !e.importScripts) {
                  var t = !0,
                    r = e.onmessage;
                  return (
                    (e.onmessage = function () {
                      t = !1;
                    }),
                    e.postMessage("", "*"),
                    (e.onmessage = r),
                    t
                  );
                }
              })()
            ? e.MessageChannel
              ? (((i = new MessageChannel()).port1.onmessage = function (e) {
                  d(e.data);
                }),
                (r = function (e) {
                  i.port2.postMessage(e);
                }))
              : u && "onreadystatechange" in u.createElement("script")
              ? ((n = u.documentElement),
                (r = function (e) {
                  var t = u.createElement("script");
                  (t.onreadystatechange = function () {
                    d(e),
                      (t.onreadystatechange = null),
                      n.removeChild(t),
                      (t = null);
                  }),
                    n.appendChild(t);
                }))
              : (r = function (e) {
                  setTimeout(d, 0, e);
                })
            : ((o = "setImmediate$" + Math.random() + "$"),
              (s = function (t) {
                t.source === e &&
                  "string" == typeof t.data &&
                  0 === t.data.indexOf(o) &&
                  d(+t.data.slice(o.length));
              }),
              e.addEventListener
                ? e.addEventListener("message", s, !1)
                : e.attachEvent("onmessage", s),
              (r = function (t) {
                e.postMessage(o + t, "*");
              })),
          (h.setImmediate = function (e) {
            "function" != typeof e && (e = new Function("" + e));
            for (
              var t = new Array(arguments.length - 1), n = 0;
              n < t.length;
              n++
            )
              t[n] = arguments[n + 1];
            var i = { callback: e, args: t };
            return (c[a] = i), r(a), a++;
          }),
          (h.clearImmediate = f);
      }
      function f(e) {
        delete c[e];
      }
      function d(e) {
        if (l) setTimeout(d, 0, e);
        else {
          var t = c[e];
          if (t) {
            l = !0;
            try {
              !(function (e) {
                var t = e.callback,
                  r = e.args;
                switch (r.length) {
                  case 0:
                    t();
                    break;
                  case 1:
                    t(r[0]);
                    break;
                  case 2:
                    t(r[0], r[1]);
                    break;
                  case 3:
                    t(r[0], r[1], r[2]);
                    break;
                  default:
                    t.apply(void 0, r);
                }
              })(t);
            } finally {
              f(e), (l = !1);
            }
          }
        }
      }
    })(
      "undefined" == typeof self
        ? "undefined" == typeof global
          ? this
          : global
        : self
    );
  },
  function (e, t, r) {
    "use strict";
    var n = r(9),
      i = r(2);
    function o(e) {
      n.call(this, "ConvertWorker to " + e), (this.destType = e);
    }
    i.inherits(o, n),
      (o.prototype.processChunk = function (e) {
        this.push({ data: i.transformTo(this.destType, e.data), meta: e.meta });
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(93).Readable;
    function i(e, t, r) {
      n.call(this, t), (this._helper = e);
      var i = this;
      e.on("data", function (e, t) {
        i.push(e) || i._helper.pause(), r && r(t);
      })
        .on("error", function (e) {
          i.emit("error", e);
        })
        .on("end", function () {
          i.push(null);
        });
    }
    r(2).inherits(i, n),
      (i.prototype._read = function () {
        this._helper.resume();
      }),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(9);
    function o(e) {
      i.call(this, "DataLengthProbe for " + e),
        (this.propName = e),
        this.withStreamInfo(e, 0);
    }
    n.inherits(o, i),
      (o.prototype.processChunk = function (e) {
        if (e) {
          var t = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = t + e.data.length;
        }
        i.prototype.processChunk.call(this, e);
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(102),
      i = r(104),
      o = r(34),
      s = r(66),
      a = r(9),
      c = function (e, t, r) {
        (this.name = e),
          (this.dir = r.dir),
          (this.date = r.date),
          (this.comment = r.comment),
          (this.unixPermissions = r.unixPermissions),
          (this.dosPermissions = r.dosPermissions),
          (this._data = t),
          (this._dataBinary = r.binary),
          (this.options = {
            compression: r.compression,
            compressionOptions: r.compressionOptions,
          });
      };
    c.prototype = {
      internalStream: function (e) {
        var t = null,
          r = "string";
        try {
          if (!e) throw new Error("No output type specified.");
          var i = "string" === (r = e.toLowerCase()) || "text" === r;
          ("binarystring" !== r && "text" !== r) || (r = "string"),
            (t = this._decompressWorker());
          var s = !this._dataBinary;
          s && !i && (t = t.pipe(new o.Utf8EncodeWorker())),
            !s && i && (t = t.pipe(new o.Utf8DecodeWorker()));
        } catch (e) {
          (t = new a("error")).error(e);
        }
        return new n(t, r, "");
      },
      async: function (e, t) {
        return this.internalStream(e).accumulate(t);
      },
      nodeStream: function (e, t) {
        return this.internalStream(e || "nodebuffer").toNodejsStream(t);
      },
      _compressWorker: function (e, t) {
        if (this._data instanceof s && this._data.compression.magic === e.magic)
          return this._data.getCompressedWorker();
        var r = this._decompressWorker();
        return (
          this._dataBinary || (r = r.pipe(new o.Utf8EncodeWorker())),
          s.createWorkerFrom(r, e, t)
        );
      },
      _decompressWorker: function () {
        return this._data instanceof s
          ? this._data.getContentWorker()
          : this._data instanceof a
          ? this._data
          : new i(this._data);
      },
    };
    for (
      var l = [
          "asText",
          "asBinary",
          "asNodeBuffer",
          "asUint8Array",
          "asArrayBuffer",
        ],
        u = function () {
          throw new Error(
            "This method has been removed in JSZip 3.0, please check the upgrade guide."
          );
        },
        h = 0;
      h < l.length;
      h++
    )
      c.prototype[l[h]] = u;
    e.exports = c;
  },
  function (e, t, r) {
    "use strict";
    var n = r(106),
      i = r(204);
    t.generateWorker = function (e, t, r) {
      var o = new i(t.streamFiles, r, t.platform, t.encodeFileName),
        s = 0;
      try {
        e.forEach(function (e, r) {
          s++;
          var i = (function (e, t) {
              var r = e || t,
                i = n[r];
              if (!i)
                throw new Error(r + " is not a valid compression method !");
              return i;
            })(r.options.compression, t.compression),
            a = r.options.compressionOptions || t.compressionOptions || {},
            c = r.dir,
            l = r.date;
          r._compressWorker(i, a)
            .withStreamInfo("file", {
              name: e,
              dir: c,
              date: l,
              comment: r.comment || "",
              unixPermissions: r.unixPermissions,
              dosPermissions: r.dosPermissions,
            })
            .pipe(o);
        }),
          (o.entriesCount = s);
      } catch (e) {
        o.error(e);
      }
      return o;
    };
  },
  function (e, t, r) {
    "use strict";
    var n =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Uint32Array,
      i = r(195),
      o = r(2),
      s = r(9),
      a = n ? "uint8array" : "array";
    function c(e, t) {
      s.call(this, "FlateWorker/" + e),
        (this._pako = null),
        (this._pakoAction = e),
        (this._pakoOptions = t),
        (this.meta = {});
    }
    (t.magic = "\b\0"),
      o.inherits(c, s),
      (c.prototype.processChunk = function (e) {
        (this.meta = e.meta),
          null === this._pako && this._createPako(),
          this._pako.push(o.transformTo(a, e.data), !1);
      }),
      (c.prototype.flush = function () {
        s.prototype.flush.call(this),
          null === this._pako && this._createPako(),
          this._pako.push([], !0);
      }),
      (c.prototype.cleanUp = function () {
        s.prototype.cleanUp.call(this), (this._pako = null);
      }),
      (c.prototype._createPako = function () {
        this._pako = new i[this._pakoAction]({
          raw: !0,
          level: this._pakoOptions.level || -1,
        });
        var e = this;
        this._pako.onData = function (t) {
          e.push({ data: t, meta: e.meta });
        };
      }),
      (t.compressWorker = function (e) {
        return new c("Deflate", e);
      }),
      (t.uncompressWorker = function () {
        return new c("Inflate", {});
      });
  },
  function (e, t, r) {
    "use strict";
    var n = {};
    (0, r(20).assign)(n, r(196), r(199), r(111)), (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var n = r(197),
      i = r(20),
      o = r(109),
      s = r(68),
      a = r(110),
      c = Object.prototype.toString;
    function l(e) {
      if (!(this instanceof l)) return new l(e);
      this.options = i.assign(
        {
          level: -1,
          method: 8,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: 0,
          to: "",
        },
        e || {}
      );
      var t = this.options;
      t.raw && t.windowBits > 0
        ? (t.windowBits = -t.windowBits)
        : t.gzip &&
          t.windowBits > 0 &&
          t.windowBits < 16 &&
          (t.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new a()),
        (this.strm.avail_out = 0);
      var r = n.deflateInit2(
        this.strm,
        t.level,
        t.method,
        t.windowBits,
        t.memLevel,
        t.strategy
      );
      if (0 !== r) throw new Error(s[r]);
      if ((t.header && n.deflateSetHeader(this.strm, t.header), t.dictionary)) {
        var u;
        if (
          ((u =
            "string" == typeof t.dictionary
              ? o.string2buf(t.dictionary)
              : "[object ArrayBuffer]" === c.call(t.dictionary)
              ? new Uint8Array(t.dictionary)
              : t.dictionary),
          0 !== (r = n.deflateSetDictionary(this.strm, u)))
        )
          throw new Error(s[r]);
        this._dict_set = !0;
      }
    }
    function u(e, t) {
      var r = new l(t);
      if ((r.push(e, !0), r.err)) throw r.msg || s[r.err];
      return r.result;
    }
    (l.prototype.push = function (e, t) {
      var r,
        s,
        a = this.strm,
        l = this.options.chunkSize;
      if (this.ended) return !1;
      (s = t === ~~t ? t : !0 === t ? 4 : 0),
        "string" == typeof e
          ? (a.input = o.string2buf(e))
          : "[object ArrayBuffer]" === c.call(e)
          ? (a.input = new Uint8Array(e))
          : (a.input = e),
        (a.next_in = 0),
        (a.avail_in = a.input.length);
      do {
        if (
          (0 === a.avail_out &&
            ((a.output = new i.Buf8(l)), (a.next_out = 0), (a.avail_out = l)),
          1 !== (r = n.deflate(a, s)) && 0 !== r)
        )
          return this.onEnd(r), (this.ended = !0), !1;
        (0 !== a.avail_out && (0 !== a.avail_in || (4 !== s && 2 !== s))) ||
          ("string" === this.options.to
            ? this.onData(o.buf2binstring(i.shrinkBuf(a.output, a.next_out)))
            : this.onData(i.shrinkBuf(a.output, a.next_out)));
      } while ((a.avail_in > 0 || 0 === a.avail_out) && 1 !== r);
      return 4 === s
        ? ((r = n.deflateEnd(this.strm)),
          this.onEnd(r),
          (this.ended = !0),
          0 === r)
        : 2 !== s || (this.onEnd(0), (a.avail_out = 0), !0);
    }),
      (l.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (l.prototype.onEnd = function (e) {
        0 === e &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = i.flattenChunks(this.chunks))),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      }),
      (t.Deflate = l),
      (t.deflate = u),
      (t.deflateRaw = function (e, t) {
        return ((t = t || {}).raw = !0), u(e, t);
      }),
      (t.gzip = function (e, t) {
        return ((t = t || {}).gzip = !0), u(e, t);
      });
  },
  function (e, t, r) {
    "use strict";
    var n,
      i = r(20),
      o = r(198),
      s = r(107),
      a = r(108),
      c = r(68);
    function l(e, t) {
      return (e.msg = c[t]), t;
    }
    function u(e) {
      return (e << 1) - (e > 4 ? 9 : 0);
    }
    function h(e) {
      for (var t = e.length; --t >= 0; ) e[t] = 0;
    }
    function f(e) {
      var t = e.state,
        r = t.pending;
      r > e.avail_out && (r = e.avail_out),
        0 !== r &&
          (i.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
          (e.next_out += r),
          (t.pending_out += r),
          (e.total_out += r),
          (e.avail_out -= r),
          (t.pending -= r),
          0 === t.pending && (t.pending_out = 0));
    }
    function d(e, t) {
      o._tr_flush_block(
        e,
        e.block_start >= 0 ? e.block_start : -1,
        e.strstart - e.block_start,
        t
      ),
        (e.block_start = e.strstart),
        f(e.strm);
    }
    function p(e, t) {
      e.pending_buf[e.pending++] = t;
    }
    function m(e, t) {
      (e.pending_buf[e.pending++] = (t >>> 8) & 255),
        (e.pending_buf[e.pending++] = 255 & t);
    }
    function g(e, t) {
      var r,
        n,
        i = e.max_chain_length,
        o = e.strstart,
        s = e.prev_length,
        a = e.nice_match,
        c = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
        l = e.window,
        u = e.w_mask,
        h = e.prev,
        f = e.strstart + 258,
        d = l[o + s - 1],
        p = l[o + s];
      e.prev_length >= e.good_match && (i >>= 2),
        a > e.lookahead && (a = e.lookahead);
      do {
        if (
          l[(r = t) + s] === p &&
          l[r + s - 1] === d &&
          l[r] === l[o] &&
          l[++r] === l[o + 1]
        ) {
          (o += 2), r++;
          do {} while (
            l[++o] === l[++r] &&
            l[++o] === l[++r] &&
            l[++o] === l[++r] &&
            l[++o] === l[++r] &&
            l[++o] === l[++r] &&
            l[++o] === l[++r] &&
            l[++o] === l[++r] &&
            l[++o] === l[++r] &&
            o < f
          );
          if (((n = 258 - (f - o)), (o = f - 258), n > s)) {
            if (((e.match_start = t), (s = n), n >= a)) break;
            (d = l[o + s - 1]), (p = l[o + s]);
          }
        }
      } while ((t = h[t & u]) > c && 0 != --i);
      return s <= e.lookahead ? s : e.lookahead;
    }
    function v(e) {
      var t,
        r,
        n,
        o,
        c,
        l,
        u,
        h,
        f,
        d,
        p = e.w_size;
      do {
        if (
          ((o = e.window_size - e.lookahead - e.strstart),
          e.strstart >= p + (p - 262))
        ) {
          i.arraySet(e.window, e.window, p, p, 0),
            (e.match_start -= p),
            (e.strstart -= p),
            (e.block_start -= p),
            (t = r = e.hash_size);
          do {
            (n = e.head[--t]), (e.head[t] = n >= p ? n - p : 0);
          } while (--r);
          t = r = p;
          do {
            (n = e.prev[--t]), (e.prev[t] = n >= p ? n - p : 0);
          } while (--r);
          o += p;
        }
        if (0 === e.strm.avail_in) break;
        if (
          ((l = e.strm),
          (u = e.window),
          (h = e.strstart + e.lookahead),
          (f = o),
          (d = void 0),
          (d = l.avail_in) > f && (d = f),
          (r =
            0 === d
              ? 0
              : ((l.avail_in -= d),
                i.arraySet(u, l.input, l.next_in, d, h),
                1 === l.state.wrap
                  ? (l.adler = s(l.adler, u, d, h))
                  : 2 === l.state.wrap && (l.adler = a(l.adler, u, d, h)),
                (l.next_in += d),
                (l.total_in += d),
                d)),
          (e.lookahead += r),
          e.lookahead + e.insert >= 3)
        )
          for (
            c = e.strstart - e.insert,
              e.ins_h = e.window[c],
              e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[c + 1]) & e.hash_mask;
            e.insert &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[c + 3 - 1]) & e.hash_mask),
            (e.prev[c & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = c),
            c++,
            e.insert--,
            !(e.lookahead + e.insert < 3));

          );
      } while (e.lookahead < 262 && 0 !== e.strm.avail_in);
    }
    function y(e, t) {
      for (var r, n; ; ) {
        if (e.lookahead < 262) {
          if ((v(e), e.lookahead < 262 && 0 === t)) return 1;
          if (0 === e.lookahead) break;
        }
        if (
          ((r = 0),
          e.lookahead >= 3 &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
              e.hash_mask),
            (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart)),
          0 !== r &&
            e.strstart - r <= e.w_size - 262 &&
            (e.match_length = g(e, r)),
          e.match_length >= 3)
        )
          if (
            ((n = o._tr_tally(
              e,
              e.strstart - e.match_start,
              e.match_length - 3
            )),
            (e.lookahead -= e.match_length),
            e.match_length <= e.max_lazy_match && e.lookahead >= 3)
          ) {
            e.match_length--;
            do {
              e.strstart++,
                (e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
                  e.hash_mask),
                (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart);
            } while (0 != --e.match_length);
            e.strstart++;
          } else
            (e.strstart += e.match_length),
              (e.match_length = 0),
              (e.ins_h = e.window[e.strstart]),
              (e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
                e.hash_mask);
        else
          (n = o._tr_tally(e, 0, e.window[e.strstart])),
            e.lookahead--,
            e.strstart++;
        if (n && (d(e, !1), 0 === e.strm.avail_out)) return 1;
      }
      return (
        (e.insert = e.strstart < 2 ? e.strstart : 2),
        4 === t
          ? (d(e, !0), 0 === e.strm.avail_out ? 3 : 4)
          : e.last_lit && (d(e, !1), 0 === e.strm.avail_out)
          ? 1
          : 2
      );
    }
    function w(e, t) {
      for (var r, n, i; ; ) {
        if (e.lookahead < 262) {
          if ((v(e), e.lookahead < 262 && 0 === t)) return 1;
          if (0 === e.lookahead) break;
        }
        if (
          ((r = 0),
          e.lookahead >= 3 &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
              e.hash_mask),
            (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart)),
          (e.prev_length = e.match_length),
          (e.prev_match = e.match_start),
          (e.match_length = 2),
          0 !== r &&
            e.prev_length < e.max_lazy_match &&
            e.strstart - r <= e.w_size - 262 &&
            ((e.match_length = g(e, r)),
            e.match_length <= 5 &&
              (1 === e.strategy ||
                (3 === e.match_length && e.strstart - e.match_start > 4096)) &&
              (e.match_length = 2)),
          e.prev_length >= 3 && e.match_length <= e.prev_length)
        ) {
          (i = e.strstart + e.lookahead - 3),
            (n = o._tr_tally(
              e,
              e.strstart - 1 - e.prev_match,
              e.prev_length - 3
            )),
            (e.lookahead -= e.prev_length - 1),
            (e.prev_length -= 2);
          do {
            ++e.strstart <= i &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) &
                e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart));
          } while (0 != --e.prev_length);
          if (
            ((e.match_available = 0),
            (e.match_length = 2),
            e.strstart++,
            n && (d(e, !1), 0 === e.strm.avail_out))
          )
            return 1;
        } else if (e.match_available) {
          if (
            ((n = o._tr_tally(e, 0, e.window[e.strstart - 1])) && d(e, !1),
            e.strstart++,
            e.lookahead--,
            0 === e.strm.avail_out)
          )
            return 1;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
      }
      return (
        e.match_available &&
          ((n = o._tr_tally(e, 0, e.window[e.strstart - 1])),
          (e.match_available = 0)),
        (e.insert = e.strstart < 2 ? e.strstart : 2),
        4 === t
          ? (d(e, !0), 0 === e.strm.avail_out ? 3 : 4)
          : e.last_lit && (d(e, !1), 0 === e.strm.avail_out)
          ? 1
          : 2
      );
    }
    function b(e, t, r, n, i) {
      (this.good_length = e),
        (this.max_lazy = t),
        (this.nice_length = r),
        (this.max_chain = n),
        (this.func = i);
    }
    function E() {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = 8),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new i.Buf16(1146)),
        (this.dyn_dtree = new i.Buf16(122)),
        (this.bl_tree = new i.Buf16(78)),
        h(this.dyn_ltree),
        h(this.dyn_dtree),
        h(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new i.Buf16(16)),
        (this.heap = new i.Buf16(573)),
        h(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new i.Buf16(573)),
        h(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    }
    function _(e) {
      var t;
      return e && e.state
        ? ((e.total_in = e.total_out = 0),
          (e.data_type = 2),
          ((t = e.state).pending = 0),
          (t.pending_out = 0),
          t.wrap < 0 && (t.wrap = -t.wrap),
          (t.status = t.wrap ? 42 : 113),
          (e.adler = 2 === t.wrap ? 0 : 1),
          (t.last_flush = 0),
          o._tr_init(t),
          0)
        : l(e, -2);
    }
    function A(e) {
      var t,
        r = _(e);
      return (
        0 === r &&
          (((t = e.state).window_size = 2 * t.w_size),
          h(t.head),
          (t.max_lazy_match = n[t.level].max_lazy),
          (t.good_match = n[t.level].good_length),
          (t.nice_match = n[t.level].nice_length),
          (t.max_chain_length = n[t.level].max_chain),
          (t.strstart = 0),
          (t.block_start = 0),
          (t.lookahead = 0),
          (t.insert = 0),
          (t.match_length = t.prev_length = 2),
          (t.match_available = 0),
          (t.ins_h = 0)),
        r
      );
    }
    function S(e, t, r, n, o, s) {
      if (!e) return -2;
      var a = 1;
      if (
        (-1 === t && (t = 6),
        n < 0 ? ((a = 0), (n = -n)) : n > 15 && ((a = 2), (n -= 16)),
        o < 1 ||
          o > 9 ||
          8 !== r ||
          n < 8 ||
          n > 15 ||
          t < 0 ||
          t > 9 ||
          s < 0 ||
          s > 4)
      )
        return l(e, -2);
      8 === n && (n = 9);
      var c = new E();
      return (
        (e.state = c),
        (c.strm = e),
        (c.wrap = a),
        (c.gzhead = null),
        (c.w_bits = n),
        (c.w_size = 1 << c.w_bits),
        (c.w_mask = c.w_size - 1),
        (c.hash_bits = o + 7),
        (c.hash_size = 1 << c.hash_bits),
        (c.hash_mask = c.hash_size - 1),
        (c.hash_shift = ~~((c.hash_bits + 3 - 1) / 3)),
        (c.window = new i.Buf8(2 * c.w_size)),
        (c.head = new i.Buf16(c.hash_size)),
        (c.prev = new i.Buf16(c.w_size)),
        (c.lit_bufsize = 1 << (o + 6)),
        (c.pending_buf_size = 4 * c.lit_bufsize),
        (c.pending_buf = new i.Buf8(c.pending_buf_size)),
        (c.d_buf = 1 * c.lit_bufsize),
        (c.l_buf = 3 * c.lit_bufsize),
        (c.level = t),
        (c.strategy = s),
        (c.method = r),
        A(e)
      );
    }
    (n = [
      new b(0, 0, 0, 0, function (e, t) {
        var r = 65535;
        for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
          if (e.lookahead <= 1) {
            if ((v(e), 0 === e.lookahead && 0 === t)) return 1;
            if (0 === e.lookahead) break;
          }
          (e.strstart += e.lookahead), (e.lookahead = 0);
          var n = e.block_start + r;
          if (
            (0 === e.strstart || e.strstart >= n) &&
            ((e.lookahead = e.strstart - n),
            (e.strstart = n),
            d(e, !1),
            0 === e.strm.avail_out)
          )
            return 1;
          if (
            e.strstart - e.block_start >= e.w_size - 262 &&
            (d(e, !1), 0 === e.strm.avail_out)
          )
            return 1;
        }
        return (
          (e.insert = 0),
          4 === t
            ? (d(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : (e.strstart > e.block_start && (d(e, !1), e.strm.avail_out), 1)
        );
      }),
      new b(4, 4, 8, 4, y),
      new b(4, 5, 16, 8, y),
      new b(4, 6, 32, 32, y),
      new b(4, 4, 16, 16, w),
      new b(8, 16, 32, 32, w),
      new b(8, 16, 128, 128, w),
      new b(8, 32, 128, 256, w),
      new b(32, 128, 258, 1024, w),
      new b(32, 258, 258, 4096, w),
    ]),
      (t.deflateInit = function (e, t) {
        return S(e, t, 8, 15, 8, 0);
      }),
      (t.deflateInit2 = S),
      (t.deflateReset = A),
      (t.deflateResetKeep = _),
      (t.deflateSetHeader = function (e, t) {
        return e && e.state
          ? 2 !== e.state.wrap
            ? -2
            : ((e.state.gzhead = t), 0)
          : -2;
      }),
      (t.deflate = function (e, t) {
        var r, i, s, c;
        if (!e || !e.state || t > 5 || t < 0) return e ? l(e, -2) : -2;
        if (
          ((i = e.state),
          !e.output ||
            (!e.input && 0 !== e.avail_in) ||
            (666 === i.status && 4 !== t))
        )
          return l(e, 0 === e.avail_out ? -5 : -2);
        if (
          ((i.strm = e),
          (r = i.last_flush),
          (i.last_flush = t),
          42 === i.status)
        )
          if (2 === i.wrap)
            (e.adler = 0),
              p(i, 31),
              p(i, 139),
              p(i, 8),
              i.gzhead
                ? (p(
                    i,
                    (i.gzhead.text ? 1 : 0) +
                      (i.gzhead.hcrc ? 2 : 0) +
                      (i.gzhead.extra ? 4 : 0) +
                      (i.gzhead.name ? 8 : 0) +
                      (i.gzhead.comment ? 16 : 0)
                  ),
                  p(i, 255 & i.gzhead.time),
                  p(i, (i.gzhead.time >> 8) & 255),
                  p(i, (i.gzhead.time >> 16) & 255),
                  p(i, (i.gzhead.time >> 24) & 255),
                  p(
                    i,
                    9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0
                  ),
                  p(i, 255 & i.gzhead.os),
                  i.gzhead.extra &&
                    i.gzhead.extra.length &&
                    (p(i, 255 & i.gzhead.extra.length),
                    p(i, (i.gzhead.extra.length >> 8) & 255)),
                  i.gzhead.hcrc &&
                    (e.adler = a(e.adler, i.pending_buf, i.pending, 0)),
                  (i.gzindex = 0),
                  (i.status = 69))
                : (p(i, 0),
                  p(i, 0),
                  p(i, 0),
                  p(i, 0),
                  p(i, 0),
                  p(
                    i,
                    9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0
                  ),
                  p(i, 3),
                  (i.status = 113));
          else {
            var g = (8 + ((i.w_bits - 8) << 4)) << 8;
            (g |=
              (i.strategy >= 2 || i.level < 2
                ? 0
                : i.level < 6
                ? 1
                : 6 === i.level
                ? 2
                : 3) << 6),
              0 !== i.strstart && (g |= 32),
              (g += 31 - (g % 31)),
              (i.status = 113),
              m(i, g),
              0 !== i.strstart && (m(i, e.adler >>> 16), m(i, 65535 & e.adler)),
              (e.adler = 1);
          }
        if (69 === i.status)
          if (i.gzhead.extra) {
            for (
              s = i.pending;
              i.gzindex < (65535 & i.gzhead.extra.length) &&
              (i.pending !== i.pending_buf_size ||
                (i.gzhead.hcrc &&
                  i.pending > s &&
                  (e.adler = a(e.adler, i.pending_buf, i.pending - s, s)),
                f(e),
                (s = i.pending),
                i.pending !== i.pending_buf_size));

            )
              p(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
            i.gzhead.hcrc &&
              i.pending > s &&
              (e.adler = a(e.adler, i.pending_buf, i.pending - s, s)),
              i.gzindex === i.gzhead.extra.length &&
                ((i.gzindex = 0), (i.status = 73));
          } else i.status = 73;
        if (73 === i.status)
          if (i.gzhead.name) {
            s = i.pending;
            do {
              if (
                i.pending === i.pending_buf_size &&
                (i.gzhead.hcrc &&
                  i.pending > s &&
                  (e.adler = a(e.adler, i.pending_buf, i.pending - s, s)),
                f(e),
                (s = i.pending),
                i.pending === i.pending_buf_size)
              ) {
                c = 1;
                break;
              }
              (c =
                i.gzindex < i.gzhead.name.length
                  ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                  : 0),
                p(i, c);
            } while (0 !== c);
            i.gzhead.hcrc &&
              i.pending > s &&
              (e.adler = a(e.adler, i.pending_buf, i.pending - s, s)),
              0 === c && ((i.gzindex = 0), (i.status = 91));
          } else i.status = 91;
        if (91 === i.status)
          if (i.gzhead.comment) {
            s = i.pending;
            do {
              if (
                i.pending === i.pending_buf_size &&
                (i.gzhead.hcrc &&
                  i.pending > s &&
                  (e.adler = a(e.adler, i.pending_buf, i.pending - s, s)),
                f(e),
                (s = i.pending),
                i.pending === i.pending_buf_size)
              ) {
                c = 1;
                break;
              }
              (c =
                i.gzindex < i.gzhead.comment.length
                  ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                  : 0),
                p(i, c);
            } while (0 !== c);
            i.gzhead.hcrc &&
              i.pending > s &&
              (e.adler = a(e.adler, i.pending_buf, i.pending - s, s)),
              0 === c && (i.status = 103);
          } else i.status = 103;
        if (
          (103 === i.status &&
            (i.gzhead.hcrc
              ? (i.pending + 2 > i.pending_buf_size && f(e),
                i.pending + 2 <= i.pending_buf_size &&
                  (p(i, 255 & e.adler),
                  p(i, (e.adler >> 8) & 255),
                  (e.adler = 0),
                  (i.status = 113)))
              : (i.status = 113)),
          0 !== i.pending)
        ) {
          if ((f(e), 0 === e.avail_out)) return (i.last_flush = -1), 0;
        } else if (0 === e.avail_in && u(t) <= u(r) && 4 !== t) return l(e, -5);
        if (666 === i.status && 0 !== e.avail_in) return l(e, -5);
        if (
          0 !== e.avail_in ||
          0 !== i.lookahead ||
          (0 !== t && 666 !== i.status)
        ) {
          var y =
            2 === i.strategy
              ? (function (e, t) {
                  for (var r; ; ) {
                    if (0 === e.lookahead && (v(e), 0 === e.lookahead)) {
                      if (0 === t) return 1;
                      break;
                    }
                    if (
                      ((e.match_length = 0),
                      (r = o._tr_tally(e, 0, e.window[e.strstart])),
                      e.lookahead--,
                      e.strstart++,
                      r && (d(e, !1), 0 === e.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (e.insert = 0),
                    4 === t
                      ? (d(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                      : e.last_lit && (d(e, !1), 0 === e.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(i, t)
              : 3 === i.strategy
              ? (function (e, t) {
                  for (var r, n, i, s, a = e.window; ; ) {
                    if (e.lookahead <= 258) {
                      if ((v(e), e.lookahead <= 258 && 0 === t)) return 1;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((e.match_length = 0),
                      e.lookahead >= 3 &&
                        e.strstart > 0 &&
                        (n = a[(i = e.strstart - 1)]) === a[++i] &&
                        n === a[++i] &&
                        n === a[++i])
                    ) {
                      s = e.strstart + 258;
                      do {} while (
                        n === a[++i] &&
                        n === a[++i] &&
                        n === a[++i] &&
                        n === a[++i] &&
                        n === a[++i] &&
                        n === a[++i] &&
                        n === a[++i] &&
                        n === a[++i] &&
                        i < s
                      );
                      (e.match_length = 258 - (s - i)),
                        e.match_length > e.lookahead &&
                          (e.match_length = e.lookahead);
                    }
                    if (
                      (e.match_length >= 3
                        ? ((r = o._tr_tally(e, 1, e.match_length - 3)),
                          (e.lookahead -= e.match_length),
                          (e.strstart += e.match_length),
                          (e.match_length = 0))
                        : ((r = o._tr_tally(e, 0, e.window[e.strstart])),
                          e.lookahead--,
                          e.strstart++),
                      r && (d(e, !1), 0 === e.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (e.insert = 0),
                    4 === t
                      ? (d(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                      : e.last_lit && (d(e, !1), 0 === e.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(i, t)
              : n[i.level].func(i, t);
          if (((3 !== y && 4 !== y) || (i.status = 666), 1 === y || 3 === y))
            return 0 === e.avail_out && (i.last_flush = -1), 0;
          if (
            2 === y &&
            (1 === t
              ? o._tr_align(i)
              : 5 !== t &&
                (o._tr_stored_block(i, 0, 0, !1),
                3 === t &&
                  (h(i.head),
                  0 === i.lookahead &&
                    ((i.strstart = 0), (i.block_start = 0), (i.insert = 0)))),
            f(e),
            0 === e.avail_out)
          )
            return (i.last_flush = -1), 0;
        }
        return 4 !== t
          ? 0
          : i.wrap <= 0
          ? 1
          : (2 === i.wrap
              ? (p(i, 255 & e.adler),
                p(i, (e.adler >> 8) & 255),
                p(i, (e.adler >> 16) & 255),
                p(i, (e.adler >> 24) & 255),
                p(i, 255 & e.total_in),
                p(i, (e.total_in >> 8) & 255),
                p(i, (e.total_in >> 16) & 255),
                p(i, (e.total_in >> 24) & 255))
              : (m(i, e.adler >>> 16), m(i, 65535 & e.adler)),
            f(e),
            i.wrap > 0 && (i.wrap = -i.wrap),
            0 !== i.pending ? 0 : 1);
      }),
      (t.deflateEnd = function (e) {
        var t;
        return e && e.state
          ? 42 !== (t = e.state.status) &&
            69 !== t &&
            73 !== t &&
            91 !== t &&
            103 !== t &&
            113 !== t &&
            666 !== t
            ? l(e, -2)
            : ((e.state = null), 113 === t ? l(e, -3) : 0)
          : -2;
      }),
      (t.deflateSetDictionary = function (e, t) {
        var r,
          n,
          o,
          a,
          c,
          l,
          u,
          f,
          d = t.length;
        if (!e || !e.state) return -2;
        if (
          2 === (a = (r = e.state).wrap) ||
          (1 === a && 42 !== r.status) ||
          r.lookahead
        )
          return -2;
        for (
          1 === a && (e.adler = s(e.adler, t, d, 0)),
            r.wrap = 0,
            d >= r.w_size &&
              (0 === a &&
                (h(r.head),
                (r.strstart = 0),
                (r.block_start = 0),
                (r.insert = 0)),
              (f = new i.Buf8(r.w_size)),
              i.arraySet(f, t, d - r.w_size, r.w_size, 0),
              (t = f),
              (d = r.w_size)),
            c = e.avail_in,
            l = e.next_in,
            u = e.input,
            e.avail_in = d,
            e.next_in = 0,
            e.input = t,
            v(r);
          r.lookahead >= 3;

        ) {
          (n = r.strstart), (o = r.lookahead - 2);
          do {
            (r.ins_h =
              ((r.ins_h << r.hash_shift) ^ r.window[n + 3 - 1]) & r.hash_mask),
              (r.prev[n & r.w_mask] = r.head[r.ins_h]),
              (r.head[r.ins_h] = n),
              n++;
          } while (--o);
          (r.strstart = n), (r.lookahead = 2), v(r);
        }
        return (
          (r.strstart += r.lookahead),
          (r.block_start = r.strstart),
          (r.insert = r.lookahead),
          (r.lookahead = 0),
          (r.match_length = r.prev_length = 2),
          (r.match_available = 0),
          (e.next_in = l),
          (e.input = u),
          (e.avail_in = c),
          (r.wrap = a),
          0
        );
      }),
      (t.deflateInfo = "pako deflate (from Nodeca project)");
  },
  function (e, t, r) {
    "use strict";
    var n = r(20);
    function i(e) {
      for (var t = e.length; --t >= 0; ) e[t] = 0;
    }
    var o = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ],
      s = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ],
      a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
      c = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      l = new Array(576);
    i(l);
    var u = new Array(60);
    i(u);
    var h = new Array(512);
    i(h);
    var f = new Array(256);
    i(f);
    var d = new Array(29);
    i(d);
    var p,
      m,
      g,
      v = new Array(30);
    function y(e, t, r, n, i) {
      (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = r),
        (this.elems = n),
        (this.max_length = i),
        (this.has_stree = e && e.length);
    }
    function w(e, t) {
      (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
    }
    function b(e) {
      return e < 256 ? h[e] : h[256 + (e >>> 7)];
    }
    function E(e, t) {
      (e.pending_buf[e.pending++] = 255 & t),
        (e.pending_buf[e.pending++] = (t >>> 8) & 255);
    }
    function _(e, t, r) {
      e.bi_valid > 16 - r
        ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
          E(e, e.bi_buf),
          (e.bi_buf = t >> (16 - e.bi_valid)),
          (e.bi_valid += r - 16))
        : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += r));
    }
    function A(e, t, r) {
      _(e, r[2 * t], r[2 * t + 1]);
    }
    function S(e, t) {
      var r = 0;
      do {
        (r |= 1 & e), (e >>>= 1), (r <<= 1);
      } while (--t > 0);
      return r >>> 1;
    }
    function O(e, t, r) {
      var n,
        i,
        o = new Array(16),
        s = 0;
      for (n = 1; n <= 15; n++) o[n] = s = (s + r[n - 1]) << 1;
      for (i = 0; i <= t; i++) {
        var a = e[2 * i + 1];
        0 !== a && (e[2 * i] = S(o[a]++, a));
      }
    }
    function C(e) {
      var t;
      for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
      for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
      for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
      (e.dyn_ltree[512] = 1),
        (e.opt_len = e.static_len = 0),
        (e.last_lit = e.matches = 0);
    }
    function I(e) {
      e.bi_valid > 8
        ? E(e, e.bi_buf)
        : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        (e.bi_buf = 0),
        (e.bi_valid = 0);
    }
    function k(e, t, r, n) {
      var i = 2 * t,
        o = 2 * r;
      return e[i] < e[o] || (e[i] === e[o] && n[t] <= n[r]);
    }
    function T(e, t, r) {
      for (
        var n = e.heap[r], i = r << 1;
        i <= e.heap_len &&
        (i < e.heap_len && k(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
        !k(t, n, e.heap[i], e.depth));

      )
        (e.heap[r] = e.heap[i]), (r = i), (i <<= 1);
      e.heap[r] = n;
    }
    function x(e, t, r) {
      var n,
        i,
        a,
        c,
        l = 0;
      if (0 !== e.last_lit)
        do {
          (n =
            (e.pending_buf[e.d_buf + 2 * l] << 8) |
            e.pending_buf[e.d_buf + 2 * l + 1]),
            (i = e.pending_buf[e.l_buf + l]),
            l++,
            0 === n
              ? A(e, i, t)
              : (A(e, (a = f[i]) + 256 + 1, t),
                0 !== (c = o[a]) && _(e, (i -= d[a]), c),
                A(e, (a = b(--n)), r),
                0 !== (c = s[a]) && _(e, (n -= v[a]), c));
        } while (l < e.last_lit);
      A(e, 256, t);
    }
    function R(e, t) {
      var r,
        n,
        i,
        o = t.dyn_tree,
        s = t.stat_desc.static_tree,
        a = t.stat_desc.has_stree,
        c = t.stat_desc.elems,
        l = -1;
      for (e.heap_len = 0, e.heap_max = 573, r = 0; r < c; r++)
        0 !== o[2 * r]
          ? ((e.heap[++e.heap_len] = l = r), (e.depth[r] = 0))
          : (o[2 * r + 1] = 0);
      for (; e.heap_len < 2; )
        (o[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1),
          (e.depth[i] = 0),
          e.opt_len--,
          a && (e.static_len -= s[2 * i + 1]);
      for (t.max_code = l, r = e.heap_len >> 1; r >= 1; r--) T(e, o, r);
      i = c;
      do {
        (r = e.heap[1]),
          (e.heap[1] = e.heap[e.heap_len--]),
          T(e, o, 1),
          (n = e.heap[1]),
          (e.heap[--e.heap_max] = r),
          (e.heap[--e.heap_max] = n),
          (o[2 * i] = o[2 * r] + o[2 * n]),
          (e.depth[i] =
            (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1),
          (o[2 * r + 1] = o[2 * n + 1] = i),
          (e.heap[1] = i++),
          T(e, o, 1);
      } while (e.heap_len >= 2);
      (e.heap[--e.heap_max] = e.heap[1]),
        (function (e, t) {
          var r,
            n,
            i,
            o,
            s,
            a,
            c = t.dyn_tree,
            l = t.max_code,
            u = t.stat_desc.static_tree,
            h = t.stat_desc.has_stree,
            f = t.stat_desc.extra_bits,
            d = t.stat_desc.extra_base,
            p = t.stat_desc.max_length,
            m = 0;
          for (o = 0; o <= 15; o++) e.bl_count[o] = 0;
          for (
            c[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1;
            r < 573;
            r++
          )
            (o = c[2 * c[2 * (n = e.heap[r]) + 1] + 1] + 1) > p &&
              ((o = p), m++),
              (c[2 * n + 1] = o),
              n > l ||
                (e.bl_count[o]++,
                (s = 0),
                n >= d && (s = f[n - d]),
                (a = c[2 * n]),
                (e.opt_len += a * (o + s)),
                h && (e.static_len += a * (u[2 * n + 1] + s)));
          if (0 !== m) {
            do {
              for (o = p - 1; 0 === e.bl_count[o]; ) o--;
              e.bl_count[o]--,
                (e.bl_count[o + 1] += 2),
                e.bl_count[p]--,
                (m -= 2);
            } while (m > 0);
            for (o = p; 0 !== o; o--)
              for (n = e.bl_count[o]; 0 !== n; )
                (i = e.heap[--r]) > l ||
                  (c[2 * i + 1] !== o &&
                    ((e.opt_len += (o - c[2 * i + 1]) * c[2 * i]),
                    (c[2 * i + 1] = o)),
                  n--);
          }
        })(e, t),
        O(o, l, e.bl_count);
    }
    function N(e, t, r) {
      var n,
        i,
        o = -1,
        s = t[1],
        a = 0,
        c = 7,
        l = 4;
      for (
        0 === s && ((c = 138), (l = 3)), t[2 * (r + 1) + 1] = 65535, n = 0;
        n <= r;
        n++
      )
        (i = s),
          (s = t[2 * (n + 1) + 1]),
          (++a < c && i === s) ||
            (a < l
              ? (e.bl_tree[2 * i] += a)
              : 0 !== i
              ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[32]++)
              : a <= 10
              ? e.bl_tree[34]++
              : e.bl_tree[36]++,
            (a = 0),
            (o = i),
            0 === s
              ? ((c = 138), (l = 3))
              : i === s
              ? ((c = 6), (l = 3))
              : ((c = 7), (l = 4)));
    }
    function D(e, t, r) {
      var n,
        i,
        o = -1,
        s = t[1],
        a = 0,
        c = 7,
        l = 4;
      for (0 === s && ((c = 138), (l = 3)), n = 0; n <= r; n++)
        if (((i = s), (s = t[2 * (n + 1) + 1]), !(++a < c && i === s))) {
          if (a < l)
            do {
              A(e, i, e.bl_tree);
            } while (0 != --a);
          else
            0 !== i
              ? (i !== o && (A(e, i, e.bl_tree), a--),
                A(e, 16, e.bl_tree),
                _(e, a - 3, 2))
              : a <= 10
              ? (A(e, 17, e.bl_tree), _(e, a - 3, 3))
              : (A(e, 18, e.bl_tree), _(e, a - 11, 7));
          (a = 0),
            (o = i),
            0 === s
              ? ((c = 138), (l = 3))
              : i === s
              ? ((c = 6), (l = 3))
              : ((c = 7), (l = 4));
        }
    }
    i(v);
    var P = !1;
    function L(e, t, r, i) {
      _(e, 0 + (i ? 1 : 0), 3),
        (function (e, t, r, i) {
          I(e),
            i && (E(e, r), E(e, ~r)),
            n.arraySet(e.pending_buf, e.window, t, r, e.pending),
            (e.pending += r);
        })(e, t, r, !0);
    }
    (t._tr_init = function (e) {
      P ||
        (!(function () {
          var e,
            t,
            r,
            n,
            i,
            c = new Array(16);
          for (r = 0, n = 0; n < 28; n++)
            for (d[n] = r, e = 0; e < 1 << o[n]; e++) f[r++] = n;
          for (f[r - 1] = n, i = 0, n = 0; n < 16; n++)
            for (v[n] = i, e = 0; e < 1 << s[n]; e++) h[i++] = n;
          for (i >>= 7; n < 30; n++)
            for (v[n] = i << 7, e = 0; e < 1 << (s[n] - 7); e++)
              h[256 + i++] = n;
          for (t = 0; t <= 15; t++) c[t] = 0;
          for (e = 0; e <= 143; ) (l[2 * e + 1] = 8), e++, c[8]++;
          for (; e <= 255; ) (l[2 * e + 1] = 9), e++, c[9]++;
          for (; e <= 279; ) (l[2 * e + 1] = 7), e++, c[7]++;
          for (; e <= 287; ) (l[2 * e + 1] = 8), e++, c[8]++;
          for (O(l, 287, c), e = 0; e < 30; e++)
            (u[2 * e + 1] = 5), (u[2 * e] = S(e, 5));
          (p = new y(l, o, 257, 286, 15)),
            (m = new y(u, s, 0, 30, 15)),
            (g = new y(new Array(0), a, 0, 19, 7));
        })(),
        (P = !0)),
        (e.l_desc = new w(e.dyn_ltree, p)),
        (e.d_desc = new w(e.dyn_dtree, m)),
        (e.bl_desc = new w(e.bl_tree, g)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        C(e);
    }),
      (t._tr_stored_block = L),
      (t._tr_flush_block = function (e, t, r, n) {
        var i,
          o,
          s = 0;
        e.level > 0
          ? (2 === e.strm.data_type &&
              (e.strm.data_type = (function (e) {
                var t,
                  r = 4093624447;
                for (t = 0; t <= 31; t++, r >>>= 1)
                  if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
                if (
                  0 !== e.dyn_ltree[18] ||
                  0 !== e.dyn_ltree[20] ||
                  0 !== e.dyn_ltree[26]
                )
                  return 1;
                for (t = 32; t < 256; t++)
                  if (0 !== e.dyn_ltree[2 * t]) return 1;
                return 0;
              })(e)),
            R(e, e.l_desc),
            R(e, e.d_desc),
            (s = (function (e) {
              var t;
              for (
                N(e, e.dyn_ltree, e.l_desc.max_code),
                  N(e, e.dyn_dtree, e.d_desc.max_code),
                  R(e, e.bl_desc),
                  t = 18;
                t >= 3 && 0 === e.bl_tree[2 * c[t] + 1];
                t--
              );
              return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
            })(e)),
            (i = (e.opt_len + 3 + 7) >>> 3),
            (o = (e.static_len + 3 + 7) >>> 3) <= i && (i = o))
          : (i = o = r + 5),
          r + 4 <= i && -1 !== t
            ? L(e, t, r, n)
            : 4 === e.strategy || o === i
            ? (_(e, 2 + (n ? 1 : 0), 3), x(e, l, u))
            : (_(e, 4 + (n ? 1 : 0), 3),
              (function (e, t, r, n) {
                var i;
                for (
                  _(e, t - 257, 5), _(e, r - 1, 5), _(e, n - 4, 4), i = 0;
                  i < n;
                  i++
                )
                  _(e, e.bl_tree[2 * c[i] + 1], 3);
                D(e, e.dyn_ltree, t - 1), D(e, e.dyn_dtree, r - 1);
              })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
              x(e, e.dyn_ltree, e.dyn_dtree)),
          C(e),
          n && I(e);
      }),
      (t._tr_tally = function (e, t, r) {
        return (
          (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
          (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
          (e.pending_buf[e.l_buf + e.last_lit] = 255 & r),
          e.last_lit++,
          0 === t
            ? e.dyn_ltree[2 * r]++
            : (e.matches++,
              t--,
              e.dyn_ltree[2 * (f[r] + 256 + 1)]++,
              e.dyn_dtree[2 * b(t)]++),
          e.last_lit === e.lit_bufsize - 1
        );
      }),
      (t._tr_align = function (e) {
        _(e, 2, 3),
          A(e, 256, l),
          (function (e) {
            16 === e.bi_valid
              ? (E(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
              : e.bi_valid >= 8 &&
                ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                (e.bi_buf >>= 8),
                (e.bi_valid -= 8));
          })(e);
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(200),
      i = r(20),
      o = r(109),
      s = r(111),
      a = r(68),
      c = r(110),
      l = r(203),
      u = Object.prototype.toString;
    function h(e) {
      if (!(this instanceof h)) return new h(e);
      this.options = i.assign(
        { chunkSize: 16384, windowBits: 0, to: "" },
        e || {}
      );
      var t = this.options;
      t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits),
        0 === t.windowBits && (t.windowBits = -15)),
        !(t.windowBits >= 0 && t.windowBits < 16) ||
          (e && e.windowBits) ||
          (t.windowBits += 32),
        t.windowBits > 15 &&
          t.windowBits < 48 &&
          0 == (15 & t.windowBits) &&
          (t.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new c()),
        (this.strm.avail_out = 0);
      var r = n.inflateInit2(this.strm, t.windowBits);
      if (r !== s.Z_OK) throw new Error(a[r]);
      if (
        ((this.header = new l()),
        n.inflateGetHeader(this.strm, this.header),
        t.dictionary &&
          ("string" == typeof t.dictionary
            ? (t.dictionary = o.string2buf(t.dictionary))
            : "[object ArrayBuffer]" === u.call(t.dictionary) &&
              (t.dictionary = new Uint8Array(t.dictionary)),
          t.raw &&
            (r = n.inflateSetDictionary(this.strm, t.dictionary)) !== s.Z_OK))
      )
        throw new Error(a[r]);
    }
    function f(e, t) {
      var r = new h(t);
      if ((r.push(e, !0), r.err)) throw r.msg || a[r.err];
      return r.result;
    }
    (h.prototype.push = function (e, t) {
      var r,
        a,
        c,
        l,
        h,
        f = this.strm,
        d = this.options.chunkSize,
        p = this.options.dictionary,
        m = !1;
      if (this.ended) return !1;
      (a = t === ~~t ? t : !0 === t ? s.Z_FINISH : s.Z_NO_FLUSH),
        "string" == typeof e
          ? (f.input = o.binstring2buf(e))
          : "[object ArrayBuffer]" === u.call(e)
          ? (f.input = new Uint8Array(e))
          : (f.input = e),
        (f.next_in = 0),
        (f.avail_in = f.input.length);
      do {
        if (
          (0 === f.avail_out &&
            ((f.output = new i.Buf8(d)), (f.next_out = 0), (f.avail_out = d)),
          (r = n.inflate(f, s.Z_NO_FLUSH)) === s.Z_NEED_DICT &&
            p &&
            (r = n.inflateSetDictionary(this.strm, p)),
          r === s.Z_BUF_ERROR && !0 === m && ((r = s.Z_OK), (m = !1)),
          r !== s.Z_STREAM_END && r !== s.Z_OK)
        )
          return this.onEnd(r), (this.ended = !0), !1;
        f.next_out &&
          ((0 !== f.avail_out &&
            r !== s.Z_STREAM_END &&
            (0 !== f.avail_in || (a !== s.Z_FINISH && a !== s.Z_SYNC_FLUSH))) ||
            ("string" === this.options.to
              ? ((c = o.utf8border(f.output, f.next_out)),
                (l = f.next_out - c),
                (h = o.buf2string(f.output, c)),
                (f.next_out = l),
                (f.avail_out = d - l),
                l && i.arraySet(f.output, f.output, c, l, 0),
                this.onData(h))
              : this.onData(i.shrinkBuf(f.output, f.next_out)))),
          0 === f.avail_in && 0 === f.avail_out && (m = !0);
      } while ((f.avail_in > 0 || 0 === f.avail_out) && r !== s.Z_STREAM_END);
      return (
        r === s.Z_STREAM_END && (a = s.Z_FINISH),
        a === s.Z_FINISH
          ? ((r = n.inflateEnd(this.strm)),
            this.onEnd(r),
            (this.ended = !0),
            r === s.Z_OK)
          : a !== s.Z_SYNC_FLUSH || (this.onEnd(s.Z_OK), (f.avail_out = 0), !0)
      );
    }),
      (h.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (h.prototype.onEnd = function (e) {
        e === s.Z_OK &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = i.flattenChunks(this.chunks))),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      }),
      (t.Inflate = h),
      (t.inflate = f),
      (t.inflateRaw = function (e, t) {
        return ((t = t || {}).raw = !0), f(e, t);
      }),
      (t.ungzip = f);
  },
  function (e, t, r) {
    "use strict";
    var n = r(20),
      i = r(107),
      o = r(108),
      s = r(201),
      a = r(202);
    function c(e) {
      return (
        ((e >>> 24) & 255) +
        ((e >>> 8) & 65280) +
        ((65280 & e) << 8) +
        ((255 & e) << 24)
      );
    }
    function l() {
      (this.mode = 0),
        (this.last = !1),
        (this.wrap = 0),
        (this.havedict = !1),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new n.Buf16(320)),
        (this.work = new n.Buf16(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0);
    }
    function u(e) {
      var t;
      return e && e.state
        ? ((t = e.state),
          (e.total_in = e.total_out = t.total = 0),
          (e.msg = ""),
          t.wrap && (e.adler = 1 & t.wrap),
          (t.mode = 1),
          (t.last = 0),
          (t.havedict = 0),
          (t.dmax = 32768),
          (t.head = null),
          (t.hold = 0),
          (t.bits = 0),
          (t.lencode = t.lendyn = new n.Buf32(852)),
          (t.distcode = t.distdyn = new n.Buf32(592)),
          (t.sane = 1),
          (t.back = -1),
          0)
        : -2;
    }
    function h(e) {
      var t;
      return e && e.state
        ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), u(e))
        : -2;
    }
    function f(e, t) {
      var r, n;
      return e && e.state
        ? ((n = e.state),
          t < 0
            ? ((r = 0), (t = -t))
            : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
          t && (t < 8 || t > 15)
            ? -2
            : (null !== n.window && n.wbits !== t && (n.window = null),
              (n.wrap = r),
              (n.wbits = t),
              h(e)))
        : -2;
    }
    function d(e, t) {
      var r, n;
      return e
        ? ((n = new l()),
          (e.state = n),
          (n.window = null),
          0 !== (r = f(e, t)) && (e.state = null),
          r)
        : -2;
    }
    var p,
      m,
      g = !0;
    function v(e) {
      if (g) {
        var t;
        for (p = new n.Buf32(512), m = new n.Buf32(32), t = 0; t < 144; )
          e.lens[t++] = 8;
        for (; t < 256; ) e.lens[t++] = 9;
        for (; t < 280; ) e.lens[t++] = 7;
        for (; t < 288; ) e.lens[t++] = 8;
        for (a(1, e.lens, 0, 288, p, 0, e.work, { bits: 9 }), t = 0; t < 32; )
          e.lens[t++] = 5;
        a(2, e.lens, 0, 32, m, 0, e.work, { bits: 5 }), (g = !1);
      }
      (e.lencode = p), (e.lenbits = 9), (e.distcode = m), (e.distbits = 5);
    }
    function y(e, t, r, i) {
      var o,
        s = e.state;
      return (
        null === s.window &&
          ((s.wsize = 1 << s.wbits),
          (s.wnext = 0),
          (s.whave = 0),
          (s.window = new n.Buf8(s.wsize))),
        i >= s.wsize
          ? (n.arraySet(s.window, t, r - s.wsize, s.wsize, 0),
            (s.wnext = 0),
            (s.whave = s.wsize))
          : ((o = s.wsize - s.wnext) > i && (o = i),
            n.arraySet(s.window, t, r - i, o, s.wnext),
            (i -= o)
              ? (n.arraySet(s.window, t, r - i, i, 0),
                (s.wnext = i),
                (s.whave = s.wsize))
              : ((s.wnext += o),
                s.wnext === s.wsize && (s.wnext = 0),
                s.whave < s.wsize && (s.whave += o))),
        0
      );
    }
    (t.inflateReset = h),
      (t.inflateReset2 = f),
      (t.inflateResetKeep = u),
      (t.inflateInit = function (e) {
        return d(e, 15);
      }),
      (t.inflateInit2 = d),
      (t.inflate = function (e, t) {
        var r,
          l,
          u,
          h,
          f,
          d,
          p,
          m,
          g,
          w,
          b,
          E,
          _,
          A,
          S,
          O,
          C,
          I,
          k,
          T,
          x,
          R,
          N,
          D,
          P = 0,
          L = new n.Buf8(4),
          F = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ];
        if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in))
          return -2;
        12 === (r = e.state).mode && (r.mode = 13),
          (f = e.next_out),
          (u = e.output),
          (p = e.avail_out),
          (h = e.next_in),
          (l = e.input),
          (d = e.avail_in),
          (m = r.hold),
          (g = r.bits),
          (w = d),
          (b = p),
          (R = 0);
        e: for (;;)
          switch (r.mode) {
            case 1:
              if (0 === r.wrap) {
                r.mode = 13;
                break;
              }
              for (; g < 16; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              if (2 & r.wrap && 35615 === m) {
                (r.check = 0),
                  (L[0] = 255 & m),
                  (L[1] = (m >>> 8) & 255),
                  (r.check = o(r.check, L, 2, 0)),
                  (m = 0),
                  (g = 0),
                  (r.mode = 2);
                break;
              }
              if (
                ((r.flags = 0),
                r.head && (r.head.done = !1),
                !(1 & r.wrap) || (((255 & m) << 8) + (m >> 8)) % 31)
              ) {
                (e.msg = "incorrect header check"), (r.mode = 30);
                break;
              }
              if (8 != (15 & m)) {
                (e.msg = "unknown compression method"), (r.mode = 30);
                break;
              }
              if (((g -= 4), (x = 8 + (15 & (m >>>= 4))), 0 === r.wbits))
                r.wbits = x;
              else if (x > r.wbits) {
                (e.msg = "invalid window size"), (r.mode = 30);
                break;
              }
              (r.dmax = 1 << x),
                (e.adler = r.check = 1),
                (r.mode = 512 & m ? 10 : 12),
                (m = 0),
                (g = 0);
              break;
            case 2:
              for (; g < 16; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              if (((r.flags = m), 8 != (255 & r.flags))) {
                (e.msg = "unknown compression method"), (r.mode = 30);
                break;
              }
              if (57344 & r.flags) {
                (e.msg = "unknown header flags set"), (r.mode = 30);
                break;
              }
              r.head && (r.head.text = (m >> 8) & 1),
                512 & r.flags &&
                  ((L[0] = 255 & m),
                  (L[1] = (m >>> 8) & 255),
                  (r.check = o(r.check, L, 2, 0))),
                (m = 0),
                (g = 0),
                (r.mode = 3);
            case 3:
              for (; g < 32; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              r.head && (r.head.time = m),
                512 & r.flags &&
                  ((L[0] = 255 & m),
                  (L[1] = (m >>> 8) & 255),
                  (L[2] = (m >>> 16) & 255),
                  (L[3] = (m >>> 24) & 255),
                  (r.check = o(r.check, L, 4, 0))),
                (m = 0),
                (g = 0),
                (r.mode = 4);
            case 4:
              for (; g < 16; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              r.head && ((r.head.xflags = 255 & m), (r.head.os = m >> 8)),
                512 & r.flags &&
                  ((L[0] = 255 & m),
                  (L[1] = (m >>> 8) & 255),
                  (r.check = o(r.check, L, 2, 0))),
                (m = 0),
                (g = 0),
                (r.mode = 5);
            case 5:
              if (1024 & r.flags) {
                for (; g < 16; ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                (r.length = m),
                  r.head && (r.head.extra_len = m),
                  512 & r.flags &&
                    ((L[0] = 255 & m),
                    (L[1] = (m >>> 8) & 255),
                    (r.check = o(r.check, L, 2, 0))),
                  (m = 0),
                  (g = 0);
              } else r.head && (r.head.extra = null);
              r.mode = 6;
            case 6:
              if (
                1024 & r.flags &&
                ((E = r.length) > d && (E = d),
                E &&
                  (r.head &&
                    ((x = r.head.extra_len - r.length),
                    r.head.extra ||
                      (r.head.extra = new Array(r.head.extra_len)),
                    n.arraySet(r.head.extra, l, h, E, x)),
                  512 & r.flags && (r.check = o(r.check, l, E, h)),
                  (d -= E),
                  (h += E),
                  (r.length -= E)),
                r.length)
              )
                break e;
              (r.length = 0), (r.mode = 7);
            case 7:
              if (2048 & r.flags) {
                if (0 === d) break e;
                E = 0;
                do {
                  (x = l[h + E++]),
                    r.head &&
                      x &&
                      r.length < 65536 &&
                      (r.head.name += String.fromCharCode(x));
                } while (x && E < d);
                if (
                  (512 & r.flags && (r.check = o(r.check, l, E, h)),
                  (d -= E),
                  (h += E),
                  x)
                )
                  break e;
              } else r.head && (r.head.name = null);
              (r.length = 0), (r.mode = 8);
            case 8:
              if (4096 & r.flags) {
                if (0 === d) break e;
                E = 0;
                do {
                  (x = l[h + E++]),
                    r.head &&
                      x &&
                      r.length < 65536 &&
                      (r.head.comment += String.fromCharCode(x));
                } while (x && E < d);
                if (
                  (512 & r.flags && (r.check = o(r.check, l, E, h)),
                  (d -= E),
                  (h += E),
                  x)
                )
                  break e;
              } else r.head && (r.head.comment = null);
              r.mode = 9;
            case 9:
              if (512 & r.flags) {
                for (; g < 16; ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                if (m !== (65535 & r.check)) {
                  (e.msg = "header crc mismatch"), (r.mode = 30);
                  break;
                }
                (m = 0), (g = 0);
              }
              r.head &&
                ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                (e.adler = r.check = 0),
                (r.mode = 12);
              break;
            case 10:
              for (; g < 32; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              (e.adler = r.check = c(m)), (m = 0), (g = 0), (r.mode = 11);
            case 11:
              if (0 === r.havedict)
                return (
                  (e.next_out = f),
                  (e.avail_out = p),
                  (e.next_in = h),
                  (e.avail_in = d),
                  (r.hold = m),
                  (r.bits = g),
                  2
                );
              (e.adler = r.check = 1), (r.mode = 12);
            case 12:
              if (5 === t || 6 === t) break e;
            case 13:
              if (r.last) {
                (m >>>= 7 & g), (g -= 7 & g), (r.mode = 27);
                break;
              }
              for (; g < 3; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              switch (((r.last = 1 & m), (g -= 1), 3 & (m >>>= 1))) {
                case 0:
                  r.mode = 14;
                  break;
                case 1:
                  if ((v(r), (r.mode = 20), 6 === t)) {
                    (m >>>= 2), (g -= 2);
                    break e;
                  }
                  break;
                case 2:
                  r.mode = 17;
                  break;
                case 3:
                  (e.msg = "invalid block type"), (r.mode = 30);
              }
              (m >>>= 2), (g -= 2);
              break;
            case 14:
              for (m >>>= 7 & g, g -= 7 & g; g < 32; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              if ((65535 & m) != ((m >>> 16) ^ 65535)) {
                (e.msg = "invalid stored block lengths"), (r.mode = 30);
                break;
              }
              if (
                ((r.length = 65535 & m),
                (m = 0),
                (g = 0),
                (r.mode = 15),
                6 === t)
              )
                break e;
            case 15:
              r.mode = 16;
            case 16:
              if ((E = r.length)) {
                if ((E > d && (E = d), E > p && (E = p), 0 === E)) break e;
                n.arraySet(u, l, h, E, f),
                  (d -= E),
                  (h += E),
                  (p -= E),
                  (f += E),
                  (r.length -= E);
                break;
              }
              r.mode = 12;
              break;
            case 17:
              for (; g < 14; ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              if (
                ((r.nlen = 257 + (31 & m)),
                (m >>>= 5),
                (g -= 5),
                (r.ndist = 1 + (31 & m)),
                (m >>>= 5),
                (g -= 5),
                (r.ncode = 4 + (15 & m)),
                (m >>>= 4),
                (g -= 4),
                r.nlen > 286 || r.ndist > 30)
              ) {
                (e.msg = "too many length or distance symbols"), (r.mode = 30);
                break;
              }
              (r.have = 0), (r.mode = 18);
            case 18:
              for (; r.have < r.ncode; ) {
                for (; g < 3; ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                (r.lens[F[r.have++]] = 7 & m), (m >>>= 3), (g -= 3);
              }
              for (; r.have < 19; ) r.lens[F[r.have++]] = 0;
              if (
                ((r.lencode = r.lendyn),
                (r.lenbits = 7),
                (N = { bits: r.lenbits }),
                (R = a(0, r.lens, 0, 19, r.lencode, 0, r.work, N)),
                (r.lenbits = N.bits),
                R)
              ) {
                (e.msg = "invalid code lengths set"), (r.mode = 30);
                break;
              }
              (r.have = 0), (r.mode = 19);
            case 19:
              for (; r.have < r.nlen + r.ndist; ) {
                for (
                  ;
                  (O =
                    ((P = r.lencode[m & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                    (C = 65535 & P),
                    !((S = P >>> 24) <= g);

                ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                if (C < 16) (m >>>= S), (g -= S), (r.lens[r.have++] = C);
                else {
                  if (16 === C) {
                    for (D = S + 2; g < D; ) {
                      if (0 === d) break e;
                      d--, (m += l[h++] << g), (g += 8);
                    }
                    if (((m >>>= S), (g -= S), 0 === r.have)) {
                      (e.msg = "invalid bit length repeat"), (r.mode = 30);
                      break;
                    }
                    (x = r.lens[r.have - 1]),
                      (E = 3 + (3 & m)),
                      (m >>>= 2),
                      (g -= 2);
                  } else if (17 === C) {
                    for (D = S + 3; g < D; ) {
                      if (0 === d) break e;
                      d--, (m += l[h++] << g), (g += 8);
                    }
                    (g -= S),
                      (x = 0),
                      (E = 3 + (7 & (m >>>= S))),
                      (m >>>= 3),
                      (g -= 3);
                  } else {
                    for (D = S + 7; g < D; ) {
                      if (0 === d) break e;
                      d--, (m += l[h++] << g), (g += 8);
                    }
                    (g -= S),
                      (x = 0),
                      (E = 11 + (127 & (m >>>= S))),
                      (m >>>= 7),
                      (g -= 7);
                  }
                  if (r.have + E > r.nlen + r.ndist) {
                    (e.msg = "invalid bit length repeat"), (r.mode = 30);
                    break;
                  }
                  for (; E--; ) r.lens[r.have++] = x;
                }
              }
              if (30 === r.mode) break;
              if (0 === r.lens[256]) {
                (e.msg = "invalid code -- missing end-of-block"), (r.mode = 30);
                break;
              }
              if (
                ((r.lenbits = 9),
                (N = { bits: r.lenbits }),
                (R = a(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, N)),
                (r.lenbits = N.bits),
                R)
              ) {
                (e.msg = "invalid literal/lengths set"), (r.mode = 30);
                break;
              }
              if (
                ((r.distbits = 6),
                (r.distcode = r.distdyn),
                (N = { bits: r.distbits }),
                (R = a(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, N)),
                (r.distbits = N.bits),
                R)
              ) {
                (e.msg = "invalid distances set"), (r.mode = 30);
                break;
              }
              if (((r.mode = 20), 6 === t)) break e;
            case 20:
              r.mode = 21;
            case 21:
              if (d >= 6 && p >= 258) {
                (e.next_out = f),
                  (e.avail_out = p),
                  (e.next_in = h),
                  (e.avail_in = d),
                  (r.hold = m),
                  (r.bits = g),
                  s(e, b),
                  (f = e.next_out),
                  (u = e.output),
                  (p = e.avail_out),
                  (h = e.next_in),
                  (l = e.input),
                  (d = e.avail_in),
                  (m = r.hold),
                  (g = r.bits),
                  12 === r.mode && (r.back = -1);
                break;
              }
              for (
                r.back = 0;
                (O =
                  ((P = r.lencode[m & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                  (C = 65535 & P),
                  !((S = P >>> 24) <= g);

              ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              if (O && 0 == (240 & O)) {
                for (
                  I = S, k = O, T = C;
                  (O =
                    ((P = r.lencode[T + ((m & ((1 << (I + k)) - 1)) >> I)]) >>>
                      16) &
                    255),
                    (C = 65535 & P),
                    !(I + (S = P >>> 24) <= g);

                ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                (m >>>= I), (g -= I), (r.back += I);
              }
              if (
                ((m >>>= S), (g -= S), (r.back += S), (r.length = C), 0 === O)
              ) {
                r.mode = 26;
                break;
              }
              if (32 & O) {
                (r.back = -1), (r.mode = 12);
                break;
              }
              if (64 & O) {
                (e.msg = "invalid literal/length code"), (r.mode = 30);
                break;
              }
              (r.extra = 15 & O), (r.mode = 22);
            case 22:
              if (r.extra) {
                for (D = r.extra; g < D; ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                (r.length += m & ((1 << r.extra) - 1)),
                  (m >>>= r.extra),
                  (g -= r.extra),
                  (r.back += r.extra);
              }
              (r.was = r.length), (r.mode = 23);
            case 23:
              for (
                ;
                (O =
                  ((P = r.distcode[m & ((1 << r.distbits) - 1)]) >>> 16) & 255),
                  (C = 65535 & P),
                  !((S = P >>> 24) <= g);

              ) {
                if (0 === d) break e;
                d--, (m += l[h++] << g), (g += 8);
              }
              if (0 == (240 & O)) {
                for (
                  I = S, k = O, T = C;
                  (O =
                    ((P = r.distcode[T + ((m & ((1 << (I + k)) - 1)) >> I)]) >>>
                      16) &
                    255),
                    (C = 65535 & P),
                    !(I + (S = P >>> 24) <= g);

                ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                (m >>>= I), (g -= I), (r.back += I);
              }
              if (((m >>>= S), (g -= S), (r.back += S), 64 & O)) {
                (e.msg = "invalid distance code"), (r.mode = 30);
                break;
              }
              (r.offset = C), (r.extra = 15 & O), (r.mode = 24);
            case 24:
              if (r.extra) {
                for (D = r.extra; g < D; ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                (r.offset += m & ((1 << r.extra) - 1)),
                  (m >>>= r.extra),
                  (g -= r.extra),
                  (r.back += r.extra);
              }
              if (r.offset > r.dmax) {
                (e.msg = "invalid distance too far back"), (r.mode = 30);
                break;
              }
              r.mode = 25;
            case 25:
              if (0 === p) break e;
              if (((E = b - p), r.offset > E)) {
                if ((E = r.offset - E) > r.whave && r.sane) {
                  (e.msg = "invalid distance too far back"), (r.mode = 30);
                  break;
                }
                E > r.wnext
                  ? ((E -= r.wnext), (_ = r.wsize - E))
                  : (_ = r.wnext - E),
                  E > r.length && (E = r.length),
                  (A = r.window);
              } else (A = u), (_ = f - r.offset), (E = r.length);
              E > p && (E = p), (p -= E), (r.length -= E);
              do {
                u[f++] = A[_++];
              } while (--E);
              0 === r.length && (r.mode = 21);
              break;
            case 26:
              if (0 === p) break e;
              (u[f++] = r.length), p--, (r.mode = 21);
              break;
            case 27:
              if (r.wrap) {
                for (; g < 32; ) {
                  if (0 === d) break e;
                  d--, (m |= l[h++] << g), (g += 8);
                }
                if (
                  ((b -= p),
                  (e.total_out += b),
                  (r.total += b),
                  b &&
                    (e.adler = r.check =
                      r.flags
                        ? o(r.check, u, b, f - b)
                        : i(r.check, u, b, f - b)),
                  (b = p),
                  (r.flags ? m : c(m)) !== r.check)
                ) {
                  (e.msg = "incorrect data check"), (r.mode = 30);
                  break;
                }
                (m = 0), (g = 0);
              }
              r.mode = 28;
            case 28:
              if (r.wrap && r.flags) {
                for (; g < 32; ) {
                  if (0 === d) break e;
                  d--, (m += l[h++] << g), (g += 8);
                }
                if (m !== (4294967295 & r.total)) {
                  (e.msg = "incorrect length check"), (r.mode = 30);
                  break;
                }
                (m = 0), (g = 0);
              }
              r.mode = 29;
            case 29:
              R = 1;
              break e;
            case 30:
              R = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return -2;
          }
        return (
          (e.next_out = f),
          (e.avail_out = p),
          (e.next_in = h),
          (e.avail_in = d),
          (r.hold = m),
          (r.bits = g),
          (r.wsize ||
            (b !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t))) &&
          y(e, e.output, e.next_out, b - e.avail_out)
            ? ((r.mode = 31), -4)
            : ((w -= e.avail_in),
              (b -= e.avail_out),
              (e.total_in += w),
              (e.total_out += b),
              (r.total += b),
              r.wrap &&
                b &&
                (e.adler = r.check =
                  r.flags
                    ? o(r.check, u, b, e.next_out - b)
                    : i(r.check, u, b, e.next_out - b)),
              (e.data_type =
                r.bits +
                (r.last ? 64 : 0) +
                (12 === r.mode ? 128 : 0) +
                (20 === r.mode || 15 === r.mode ? 256 : 0)),
              ((0 === w && 0 === b) || 4 === t) && 0 === R && (R = -5),
              R)
        );
      }),
      (t.inflateEnd = function (e) {
        if (!e || !e.state) return -2;
        var t = e.state;
        return t.window && (t.window = null), (e.state = null), 0;
      }),
      (t.inflateGetHeader = function (e, t) {
        var r;
        return e && e.state
          ? 0 == (2 & (r = e.state).wrap)
            ? -2
            : ((r.head = t), (t.done = !1), 0)
          : -2;
      }),
      (t.inflateSetDictionary = function (e, t) {
        var r,
          n = t.length;
        return e && e.state
          ? 0 !== (r = e.state).wrap && 11 !== r.mode
            ? -2
            : 11 === r.mode && i(1, t, n, 0) !== r.check
            ? -3
            : y(e, t, n, n)
            ? ((r.mode = 31), -4)
            : ((r.havedict = 1), 0)
          : -2;
      }),
      (t.inflateInfo = "pako inflate (from Nodeca project)");
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      var r,
        n,
        i,
        o,
        s,
        a,
        c,
        l,
        u,
        h,
        f,
        d,
        p,
        m,
        g,
        v,
        y,
        w,
        b,
        E,
        _,
        A,
        S,
        O,
        C;
      (r = e.state),
        (n = e.next_in),
        (O = e.input),
        (i = n + (e.avail_in - 5)),
        (o = e.next_out),
        (C = e.output),
        (s = o - (t - e.avail_out)),
        (a = o + (e.avail_out - 257)),
        (c = r.dmax),
        (l = r.wsize),
        (u = r.whave),
        (h = r.wnext),
        (f = r.window),
        (d = r.hold),
        (p = r.bits),
        (m = r.lencode),
        (g = r.distcode),
        (v = (1 << r.lenbits) - 1),
        (y = (1 << r.distbits) - 1);
      e: do {
        p < 15 && ((d += O[n++] << p), (p += 8), (d += O[n++] << p), (p += 8)),
          (w = m[d & v]);
        t: for (;;) {
          if (((d >>>= b = w >>> 24), (p -= b), 0 === (b = (w >>> 16) & 255)))
            C[o++] = 65535 & w;
          else {
            if (!(16 & b)) {
              if (0 == (64 & b)) {
                w = m[(65535 & w) + (d & ((1 << b) - 1))];
                continue t;
              }
              if (32 & b) {
                r.mode = 12;
                break e;
              }
              (e.msg = "invalid literal/length code"), (r.mode = 30);
              break e;
            }
            (E = 65535 & w),
              (b &= 15) &&
                (p < b && ((d += O[n++] << p), (p += 8)),
                (E += d & ((1 << b) - 1)),
                (d >>>= b),
                (p -= b)),
              p < 15 &&
                ((d += O[n++] << p), (p += 8), (d += O[n++] << p), (p += 8)),
              (w = g[d & y]);
            r: for (;;) {
              if (
                ((d >>>= b = w >>> 24),
                (p -= b),
                !(16 & (b = (w >>> 16) & 255)))
              ) {
                if (0 == (64 & b)) {
                  w = g[(65535 & w) + (d & ((1 << b) - 1))];
                  continue r;
                }
                (e.msg = "invalid distance code"), (r.mode = 30);
                break e;
              }
              if (
                ((_ = 65535 & w),
                p < (b &= 15) &&
                  ((d += O[n++] << p),
                  (p += 8) < b && ((d += O[n++] << p), (p += 8))),
                (_ += d & ((1 << b) - 1)) > c)
              ) {
                (e.msg = "invalid distance too far back"), (r.mode = 30);
                break e;
              }
              if (((d >>>= b), (p -= b), _ > (b = o - s))) {
                if ((b = _ - b) > u && r.sane) {
                  (e.msg = "invalid distance too far back"), (r.mode = 30);
                  break e;
                }
                if (((A = 0), (S = f), 0 === h)) {
                  if (((A += l - b), b < E)) {
                    E -= b;
                    do {
                      C[o++] = f[A++];
                    } while (--b);
                    (A = o - _), (S = C);
                  }
                } else if (h < b) {
                  if (((A += l + h - b), (b -= h) < E)) {
                    E -= b;
                    do {
                      C[o++] = f[A++];
                    } while (--b);
                    if (((A = 0), h < E)) {
                      E -= b = h;
                      do {
                        C[o++] = f[A++];
                      } while (--b);
                      (A = o - _), (S = C);
                    }
                  }
                } else if (((A += h - b), b < E)) {
                  E -= b;
                  do {
                    C[o++] = f[A++];
                  } while (--b);
                  (A = o - _), (S = C);
                }
                for (; E > 2; )
                  (C[o++] = S[A++]),
                    (C[o++] = S[A++]),
                    (C[o++] = S[A++]),
                    (E -= 3);
                E && ((C[o++] = S[A++]), E > 1 && (C[o++] = S[A++]));
              } else {
                A = o - _;
                do {
                  (C[o++] = C[A++]),
                    (C[o++] = C[A++]),
                    (C[o++] = C[A++]),
                    (E -= 3);
                } while (E > 2);
                E && ((C[o++] = C[A++]), E > 1 && (C[o++] = C[A++]));
              }
              break;
            }
          }
          break;
        }
      } while (n < i && o < a);
      (n -= E = p >> 3),
        (d &= (1 << (p -= E << 3)) - 1),
        (e.next_in = n),
        (e.next_out = o),
        (e.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
        (e.avail_out = o < a ? a - o + 257 : 257 - (o - a)),
        (r.hold = d),
        (r.bits = p);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(20),
      i = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ],
      o = [
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ],
      s = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ],
      a = [
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ];
    e.exports = function (e, t, r, c, l, u, h, f) {
      var d,
        p,
        m,
        g,
        v,
        y,
        w,
        b,
        E,
        _ = f.bits,
        A = 0,
        S = 0,
        O = 0,
        C = 0,
        I = 0,
        k = 0,
        T = 0,
        x = 0,
        R = 0,
        N = 0,
        D = null,
        P = 0,
        L = new n.Buf16(16),
        F = new n.Buf16(16),
        U = null,
        j = 0;
      for (A = 0; A <= 15; A++) L[A] = 0;
      for (S = 0; S < c; S++) L[t[r + S]]++;
      for (I = _, C = 15; C >= 1 && 0 === L[C]; C--);
      if ((I > C && (I = C), 0 === C))
        return (l[u++] = 20971520), (l[u++] = 20971520), (f.bits = 1), 0;
      for (O = 1; O < C && 0 === L[O]; O++);
      for (I < O && (I = O), x = 1, A = 1; A <= 15; A++)
        if (((x <<= 1), (x -= L[A]) < 0)) return -1;
      if (x > 0 && (0 === e || 1 !== C)) return -1;
      for (F[1] = 0, A = 1; A < 15; A++) F[A + 1] = F[A] + L[A];
      for (S = 0; S < c; S++) 0 !== t[r + S] && (h[F[t[r + S]]++] = S);
      if (
        (0 === e
          ? ((D = U = h), (y = 19))
          : 1 === e
          ? ((D = i), (P -= 257), (U = o), (j -= 257), (y = 256))
          : ((D = s), (U = a), (y = -1)),
        (N = 0),
        (S = 0),
        (A = O),
        (v = u),
        (k = I),
        (T = 0),
        (m = -1),
        (g = (R = 1 << I) - 1),
        (1 === e && R > 852) || (2 === e && R > 592))
      )
        return 1;
      for (;;) {
        (w = A - T),
          h[S] < y
            ? ((b = 0), (E = h[S]))
            : h[S] > y
            ? ((b = U[j + h[S]]), (E = D[P + h[S]]))
            : ((b = 96), (E = 0)),
          (d = 1 << (A - T)),
          (O = p = 1 << k);
        do {
          l[v + (N >> T) + (p -= d)] = (w << 24) | (b << 16) | E | 0;
        } while (0 !== p);
        for (d = 1 << (A - 1); N & d; ) d >>= 1;
        if ((0 !== d ? ((N &= d - 1), (N += d)) : (N = 0), S++, 0 == --L[A])) {
          if (A === C) break;
          A = t[r + h[S]];
        }
        if (A > I && (N & g) !== m) {
          for (
            0 === T && (T = I), v += O, x = 1 << (k = A - T);
            k + T < C && !((x -= L[k + T]) <= 0);

          )
            k++, (x <<= 1);
          if (((R += 1 << k), (1 === e && R > 852) || (2 === e && R > 592)))
            return 1;
          l[(m = N & g)] = (I << 24) | (k << 16) | (v - u) | 0;
        }
      }
      return (
        0 !== N && (l[v + N] = ((A - T) << 24) | (64 << 16) | 0),
        (f.bits = I),
        0
      );
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = !1);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(9),
      o = r(34),
      s = r(67),
      a = r(112),
      c = function (e, t) {
        var r,
          n = "";
        for (r = 0; r < t; r++) (n += String.fromCharCode(255 & e)), (e >>>= 8);
        return n;
      },
      l = function (e, t, r, i, l, u) {
        var h,
          f,
          d = e.file,
          p = e.compression,
          m = u !== o.utf8encode,
          g = n.transformTo("string", u(d.name)),
          v = n.transformTo("string", o.utf8encode(d.name)),
          y = d.comment,
          w = n.transformTo("string", u(y)),
          b = n.transformTo("string", o.utf8encode(y)),
          E = v.length !== d.name.length,
          _ = b.length !== y.length,
          A = "",
          S = "",
          O = "",
          C = d.dir,
          I = d.date,
          k = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        (t && !r) ||
          ((k.crc32 = e.crc32),
          (k.compressedSize = e.compressedSize),
          (k.uncompressedSize = e.uncompressedSize));
        var T = 0;
        t && (T |= 8), m || (!E && !_) || (T |= 2048);
        var x,
          R,
          N,
          D = 0,
          P = 0;
        C && (D |= 16),
          "UNIX" === l
            ? ((P = 798),
              (D |=
                ((x = d.unixPermissions),
                (R = C),
                (N = x),
                x || (N = R ? 16893 : 33204),
                (65535 & N) << 16)))
            : ((P = 20), (D |= 63 & (d.dosPermissions || 0))),
          (h = I.getUTCHours()),
          (h <<= 6),
          (h |= I.getUTCMinutes()),
          (h <<= 5),
          (h |= I.getUTCSeconds() / 2),
          (f = I.getUTCFullYear() - 1980),
          (f <<= 4),
          (f |= I.getUTCMonth() + 1),
          (f <<= 5),
          (f |= I.getUTCDate()),
          E &&
            ((S = c(1, 1) + c(s(g), 4) + v), (A += "up" + c(S.length, 2) + S)),
          _ &&
            ((O = c(1, 1) + c(s(w), 4) + b), (A += "uc" + c(O.length, 2) + O));
        var L = "";
        return (
          (L += "\n\0"),
          (L += c(T, 2)),
          (L += p.magic),
          (L += c(h, 2)),
          (L += c(f, 2)),
          (L += c(k.crc32, 4)),
          (L += c(k.compressedSize, 4)),
          (L += c(k.uncompressedSize, 4)),
          (L += c(g.length, 2)),
          (L += c(A.length, 2)),
          {
            fileRecord: a.LOCAL_FILE_HEADER + L + g + A,
            dirRecord:
              a.CENTRAL_FILE_HEADER +
              c(P, 2) +
              L +
              c(w.length, 2) +
              "\0\0\0\0" +
              c(D, 4) +
              c(i, 4) +
              g +
              A +
              w,
          }
        );
      },
      u = function (e) {
        return (
          a.DATA_DESCRIPTOR +
          c(e.crc32, 4) +
          c(e.compressedSize, 4) +
          c(e.uncompressedSize, 4)
        );
      };
    function h(e, t, r, n) {
      i.call(this, "ZipFileWorker"),
        (this.bytesWritten = 0),
        (this.zipComment = t),
        (this.zipPlatform = r),
        (this.encodeFileName = n),
        (this.streamFiles = e),
        (this.accumulate = !1),
        (this.contentBuffer = []),
        (this.dirRecords = []),
        (this.currentSourceOffset = 0),
        (this.entriesCount = 0),
        (this.currentFile = null),
        (this._sources = []);
    }
    n.inherits(h, i),
      (h.prototype.push = function (e) {
        var t = e.meta.percent || 0,
          r = this.entriesCount,
          n = this._sources.length;
        this.accumulate
          ? this.contentBuffer.push(e)
          : ((this.bytesWritten += e.data.length),
            i.prototype.push.call(this, {
              data: e.data,
              meta: {
                currentFile: this.currentFile,
                percent: r ? (t + 100 * (r - n - 1)) / r : 100,
              },
            }));
      }),
      (h.prototype.openedSource = function (e) {
        (this.currentSourceOffset = this.bytesWritten),
          (this.currentFile = e.file.name);
        var t = this.streamFiles && !e.file.dir;
        if (t) {
          var r = l(
            e,
            t,
            !1,
            this.currentSourceOffset,
            this.zipPlatform,
            this.encodeFileName
          );
          this.push({ data: r.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }),
      (h.prototype.closedSource = function (e) {
        this.accumulate = !1;
        var t = this.streamFiles && !e.file.dir,
          r = l(
            e,
            t,
            !0,
            this.currentSourceOffset,
            this.zipPlatform,
            this.encodeFileName
          );
        if ((this.dirRecords.push(r.dirRecord), t))
          this.push({ data: u(e), meta: { percent: 100 } });
        else
          for (
            this.push({ data: r.fileRecord, meta: { percent: 0 } });
            this.contentBuffer.length;

          )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }),
      (h.prototype.flush = function () {
        for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++)
          this.push({ data: this.dirRecords[t], meta: { percent: 100 } });
        var r = this.bytesWritten - e,
          i = (function (e, t, r, i, o) {
            var s = n.transformTo("string", o(i));
            return (
              a.CENTRAL_DIRECTORY_END +
              "\0\0\0\0" +
              c(e, 2) +
              c(e, 2) +
              c(t, 4) +
              c(r, 4) +
              c(s.length, 2) +
              s
            );
          })(
            this.dirRecords.length,
            r,
            e,
            this.zipComment,
            this.encodeFileName
          );
        this.push({ data: i, meta: { percent: 100 } });
      }),
      (h.prototype.prepareNextSource = function () {
        (this.previous = this._sources.shift()),
          this.openedSource(this.previous.streamInfo),
          this.isPaused ? this.previous.pause() : this.previous.resume();
      }),
      (h.prototype.registerPrevious = function (e) {
        this._sources.push(e);
        var t = this;
        return (
          e.on("data", function (e) {
            t.processChunk(e);
          }),
          e.on("end", function () {
            t.closedSource(t.previous.streamInfo),
              t._sources.length ? t.prepareNextSource() : t.end();
          }),
          e.on("error", function (e) {
            t.error(e);
          }),
          this
        );
      }),
      (h.prototype.resume = function () {
        return (
          !!i.prototype.resume.call(this) &&
          (!this.previous && this._sources.length
            ? (this.prepareNextSource(), !0)
            : this.previous || this._sources.length || this.generatedError
            ? void 0
            : (this.end(), !0))
        );
      }),
      (h.prototype.error = function (e) {
        var t = this._sources;
        if (!i.prototype.error.call(this, e)) return !1;
        for (var r = 0; r < t.length; r++)
          try {
            t[r].error(e);
          } catch (e) {}
        return !0;
      }),
      (h.prototype.lock = function () {
        i.prototype.lock.call(this);
        for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
      }),
      (e.exports = h);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(9);
    function o(e, t) {
      i.call(this, "Nodejs stream input adapter for " + e),
        (this._upstreamEnded = !1),
        this._bindStream(t);
    }
    n.inherits(o, i),
      (o.prototype._bindStream = function (e) {
        var t = this;
        (this._stream = e),
          e.pause(),
          e
            .on("data", function (e) {
              t.push({ data: e, meta: { percent: 0 } });
            })
            .on("error", function (e) {
              t.isPaused ? (this.generatedError = e) : t.error(e);
            })
            .on("end", function () {
              t.isPaused ? (t._upstreamEnded = !0) : t.end();
            });
      }),
      (o.prototype.pause = function () {
        return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
      }),
      (o.prototype.resume = function () {
        return (
          !!i.prototype.resume.call(this) &&
          (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
        );
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      i = r(36),
      o = r(34),
      s = r(207),
      a = r(105),
      c = r(46);
    function l(e) {
      return new i.Promise(function (t, r) {
        var n = e.decompressed.getContentWorker().pipe(new a());
        n.on("error", function (e) {
          r(e);
        })
          .on("end", function () {
            n.streamInfo.crc32 !== e.decompressed.crc32
              ? r(new Error("Corrupted zip : CRC32 mismatch"))
              : t();
          })
          .resume();
      });
    }
    e.exports = function (e, t) {
      var r = this;
      return (
        (t = n.extend(t || {}, {
          base64: !1,
          checkCRC32: !1,
          optimizedBinaryString: !1,
          createFolders: !1,
          decodeFileName: o.utf8decode,
        })),
        c.isNode && c.isStream(e)
          ? i.Promise.reject(
              new Error("JSZip can't accept a stream when loading a zip file.")
            )
          : n
              .prepareContent(
                "the loaded zip file",
                e,
                !0,
                t.optimizedBinaryString,
                t.base64
              )
              .then(function (e) {
                var r = new s(t);
                return r.load(e), r;
              })
              .then(function (e) {
                var r = [i.Promise.resolve(e)],
                  n = e.files;
                if (t.checkCRC32)
                  for (var o = 0; o < n.length; o++) r.push(l(n[o]));
                return i.Promise.all(r);
              })
              .then(function (e) {
                for (var i = e.shift(), o = i.files, s = 0; s < o.length; s++) {
                  var a = o[s],
                    c = a.fileNameStr,
                    l = n.resolve(a.fileNameStr);
                  r.file(l, a.decompressed, {
                    binary: !0,
                    optimizedBinaryString: !0,
                    date: a.date,
                    dir: a.dir,
                    comment: a.fileCommentStr.length ? a.fileCommentStr : null,
                    unixPermissions: a.unixPermissions,
                    dosPermissions: a.dosPermissions,
                    createFolders: t.createFolders,
                  }),
                    a.dir || (r.file(l).unsafeOriginalName = c);
                }
                return i.zipComment.length && (r.comment = i.zipComment), r;
              })
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(113),
      i = r(2),
      o = r(112),
      s = r(210),
      a = r(18);
    function c(e) {
      (this.files = []), (this.loadOptions = e);
    }
    (c.prototype = {
      checkSignature: function (e) {
        if (!this.reader.readAndCheckSignature(e)) {
          this.reader.index -= 4;
          var t = this.reader.readString(4);
          throw new Error(
            "Corrupted zip or bug: unexpected signature (" +
              i.pretty(t) +
              ", expected " +
              i.pretty(e) +
              ")"
          );
        }
      },
      isSignature: function (e, t) {
        var r = this.reader.index;
        this.reader.setIndex(e);
        var n = this.reader.readString(4) === t;
        return this.reader.setIndex(r), n;
      },
      readBlockEndOfCentral: function () {
        (this.diskNumber = this.reader.readInt(2)),
          (this.diskWithCentralDirStart = this.reader.readInt(2)),
          (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
          (this.centralDirRecords = this.reader.readInt(2)),
          (this.centralDirSize = this.reader.readInt(4)),
          (this.centralDirOffset = this.reader.readInt(4)),
          (this.zipCommentLength = this.reader.readInt(2));
        var e = this.reader.readData(this.zipCommentLength),
          t = a.uint8array ? "uint8array" : "array",
          r = i.transformTo(t, e);
        this.zipComment = this.loadOptions.decodeFileName(r);
      },
      readBlockZip64EndOfCentral: function () {
        (this.zip64EndOfCentralSize = this.reader.readInt(8)),
          this.reader.skip(4),
          (this.diskNumber = this.reader.readInt(4)),
          (this.diskWithCentralDirStart = this.reader.readInt(4)),
          (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
          (this.centralDirRecords = this.reader.readInt(8)),
          (this.centralDirSize = this.reader.readInt(8)),
          (this.centralDirOffset = this.reader.readInt(8)),
          (this.zip64ExtensibleData = {});
        for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n; )
          (e = this.reader.readInt(2)),
            (t = this.reader.readInt(4)),
            (r = this.reader.readData(t)),
            (this.zip64ExtensibleData[e] = { id: e, length: t, value: r });
      },
      readBlockZip64EndOfCentralLocator: function () {
        if (
          ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
          (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
          (this.disksCount = this.reader.readInt(4)),
          this.disksCount > 1)
        )
          throw new Error("Multi-volumes zip are not supported");
      },
      readLocalFiles: function () {
        var e, t;
        for (e = 0; e < this.files.length; e++)
          (t = this.files[e]),
            this.reader.setIndex(t.localHeaderOffset),
            this.checkSignature(o.LOCAL_FILE_HEADER),
            t.readLocalPart(this.reader),
            t.handleUTF8(),
            t.processAttributes();
      },
      readCentralDir: function () {
        var e;
        for (
          this.reader.setIndex(this.centralDirOffset);
          this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);

        )
          (e = new s({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(
            this.reader
          ),
            this.files.push(e);
        if (
          this.centralDirRecords !== this.files.length &&
          0 !== this.centralDirRecords &&
          0 === this.files.length
        )
          throw new Error(
            "Corrupted zip or bug: expected " +
              this.centralDirRecords +
              " records in central dir, got " +
              this.files.length
          );
      },
      readEndOfCentral: function () {
        var e = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
        if (e < 0)
          throw !this.isSignature(0, o.LOCAL_FILE_HEADER)
            ? new Error(
                "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
              )
            : new Error("Corrupted zip: can't find end of central directory");
        this.reader.setIndex(e);
        var t = e;
        if (
          (this.checkSignature(o.CENTRAL_DIRECTORY_END),
          this.readBlockEndOfCentral(),
          this.diskNumber === i.MAX_VALUE_16BITS ||
            this.diskWithCentralDirStart === i.MAX_VALUE_16BITS ||
            this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS ||
            this.centralDirRecords === i.MAX_VALUE_16BITS ||
            this.centralDirSize === i.MAX_VALUE_32BITS ||
            this.centralDirOffset === i.MAX_VALUE_32BITS)
        ) {
          if (
            ((this.zip64 = !0),
            (e = this.reader.lastIndexOfSignature(
              o.ZIP64_CENTRAL_DIRECTORY_LOCATOR
            )) < 0)
          )
            throw new Error(
              "Corrupted zip: can't find the ZIP64 end of central directory locator"
            );
          if (
            (this.reader.setIndex(e),
            this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
            this.readBlockZip64EndOfCentralLocator(),
            !this.isSignature(
              this.relativeOffsetEndOfZip64CentralDir,
              o.ZIP64_CENTRAL_DIRECTORY_END
            ) &&
              ((this.relativeOffsetEndOfZip64CentralDir =
                this.reader.lastIndexOfSignature(
                  o.ZIP64_CENTRAL_DIRECTORY_END
                )),
              this.relativeOffsetEndOfZip64CentralDir < 0))
          )
            throw new Error(
              "Corrupted zip: can't find the ZIP64 end of central directory"
            );
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
            this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),
            this.readBlockZip64EndOfCentral();
        }
        var r = this.centralDirOffset + this.centralDirSize;
        this.zip64 && ((r += 20), (r += 12 + this.zip64EndOfCentralSize));
        var n = t - r;
        if (n > 0)
          this.isSignature(t, o.CENTRAL_FILE_HEADER) || (this.reader.zero = n);
        else if (n < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.");
      },
      prepareReader: function (e) {
        this.reader = n(e);
      },
      load: function (e) {
        this.prepareReader(e),
          this.readEndOfCentral(),
          this.readCentralDir(),
          this.readLocalFiles();
      },
    }),
      (e.exports = c);
  },
  function (e, t, r) {
    "use strict";
    var n = r(115);
    function i(e) {
      n.call(this, e);
    }
    r(2).inherits(i, n),
      (i.prototype.byteAt = function (e) {
        return this.data.charCodeAt(this.zero + e);
      }),
      (i.prototype.lastIndexOfSignature = function (e) {
        return this.data.lastIndexOf(e) - this.zero;
      }),
      (i.prototype.readAndCheckSignature = function (e) {
        return e === this.readData(4);
      }),
      (i.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(
          this.zero + this.index,
          this.zero + this.index + e
        );
        return (this.index += e), t;
      }),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    var n = r(116);
    function i(e) {
      n.call(this, e);
    }
    r(2).inherits(i, n),
      (i.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(
          this.zero + this.index,
          this.zero + this.index + e
        );
        return (this.index += e), t;
      }),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    var n = r(113),
      i = r(2),
      o = r(66),
      s = r(67),
      a = r(34),
      c = r(106),
      l = r(18);
    function u(e, t) {
      (this.options = e), (this.loadOptions = t);
    }
    (u.prototype = {
      isEncrypted: function () {
        return 1 == (1 & this.bitFlag);
      },
      useUTF8: function () {
        return 2048 == (2048 & this.bitFlag);
      },
      readLocalPart: function (e) {
        var t, r;
        if (
          (e.skip(22),
          (this.fileNameLength = e.readInt(2)),
          (r = e.readInt(2)),
          (this.fileName = e.readData(this.fileNameLength)),
          e.skip(r),
          -1 === this.compressedSize || -1 === this.uncompressedSize)
        )
          throw new Error(
            "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
          );
        if (
          null ===
          (t = (function (e) {
            for (var t in c)
              if (
                Object.prototype.hasOwnProperty.call(c, t) &&
                c[t].magic === e
              )
                return c[t];
            return null;
          })(this.compressionMethod))
        )
          throw new Error(
            "Corrupted zip : compression " +
              i.pretty(this.compressionMethod) +
              " unknown (inner file : " +
              i.transformTo("string", this.fileName) +
              ")"
          );
        this.decompressed = new o(
          this.compressedSize,
          this.uncompressedSize,
          this.crc32,
          t,
          e.readData(this.compressedSize)
        );
      },
      readCentralPart: function (e) {
        (this.versionMadeBy = e.readInt(2)),
          e.skip(2),
          (this.bitFlag = e.readInt(2)),
          (this.compressionMethod = e.readString(2)),
          (this.date = e.readDate()),
          (this.crc32 = e.readInt(4)),
          (this.compressedSize = e.readInt(4)),
          (this.uncompressedSize = e.readInt(4));
        var t = e.readInt(2);
        if (
          ((this.extraFieldsLength = e.readInt(2)),
          (this.fileCommentLength = e.readInt(2)),
          (this.diskNumberStart = e.readInt(2)),
          (this.internalFileAttributes = e.readInt(2)),
          (this.externalFileAttributes = e.readInt(4)),
          (this.localHeaderOffset = e.readInt(4)),
          this.isEncrypted())
        )
          throw new Error("Encrypted zip are not supported");
        e.skip(t),
          this.readExtraFields(e),
          this.parseZIP64ExtraField(e),
          (this.fileComment = e.readData(this.fileCommentLength));
      },
      processAttributes: function () {
        (this.unixPermissions = null), (this.dosPermissions = null);
        var e = this.versionMadeBy >> 8;
        (this.dir = !!(16 & this.externalFileAttributes)),
          0 === e && (this.dosPermissions = 63 & this.externalFileAttributes),
          3 === e &&
            (this.unixPermissions =
              (this.externalFileAttributes >> 16) & 65535),
          this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
      },
      parseZIP64ExtraField: function () {
        if (this.extraFields[1]) {
          var e = n(this.extraFields[1].value);
          this.uncompressedSize === i.MAX_VALUE_32BITS &&
            (this.uncompressedSize = e.readInt(8)),
            this.compressedSize === i.MAX_VALUE_32BITS &&
              (this.compressedSize = e.readInt(8)),
            this.localHeaderOffset === i.MAX_VALUE_32BITS &&
              (this.localHeaderOffset = e.readInt(8)),
            this.diskNumberStart === i.MAX_VALUE_32BITS &&
              (this.diskNumberStart = e.readInt(4));
        }
      },
      readExtraFields: function (e) {
        var t,
          r,
          n,
          i = e.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); e.index + 4 < i; )
          (t = e.readInt(2)),
            (r = e.readInt(2)),
            (n = e.readData(r)),
            (this.extraFields[t] = { id: t, length: r, value: n });
        e.setIndex(i);
      },
      handleUTF8: function () {
        var e = l.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          (this.fileNameStr = a.utf8decode(this.fileName)),
            (this.fileCommentStr = a.utf8decode(this.fileComment));
        else {
          var t = this.findExtraFieldUnicodePath();
          if (null !== t) this.fileNameStr = t;
          else {
            var r = i.transformTo(e, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(r);
          }
          var n = this.findExtraFieldUnicodeComment();
          if (null !== n) this.fileCommentStr = n;
          else {
            var o = i.transformTo(e, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(o);
          }
        }
      },
      findExtraFieldUnicodePath: function () {
        var e = this.extraFields[28789];
        if (e) {
          var t = n(e.value);
          return 1 !== t.readInt(1) || s(this.fileName) !== t.readInt(4)
            ? null
            : a.utf8decode(t.readData(e.length - 5));
        }
        return null;
      },
      findExtraFieldUnicodeComment: function () {
        var e = this.extraFields[25461];
        if (e) {
          var t = n(e.value);
          return 1 !== t.readInt(1) || s(this.fileComment) !== t.readInt(4)
            ? null
            : a.utf8decode(t.readData(e.length - 5));
        }
        return null;
      },
    }),
      (e.exports = u);
  },
  function (e, t, r) {
    var n = r(212),
      i = n.isFunction;
    e.exports = function (e, t) {
      return function (r, o, s, a, c) {
        var l,
          u,
          h,
          f,
          d = arguments.length;
        function p(e, t) {
          null == e ? h(t) : f(e);
        }
        switch (
          ((u = new n.Promise(function (e, t) {
            (h = e), (f = t);
          })),
          d)
        ) {
          case 0:
            e.call(t, p);
            break;
          case 1:
            i(r) ? e.call(t, r) : e.call(t, r, p);
            break;
          case 2:
            i(o) ? e.call(t, r, o) : e.call(t, r, o, p);
            break;
          case 3:
            i(s) ? e.call(t, r, o, s) : e.call(t, r, o, s, p);
            break;
          case 4:
            i(a) ? e.call(t, r, o, s, a) : e.call(t, r, o, s, a, p);
            break;
          case 5:
            i(c) ? e.call(t, r, o, s, a, c) : e.call(t, r, o, s, a, c, p);
            break;
          default:
            l = new Array(d);
            for (var m = 0; m < d; m++) l[m] = arguments[m];
            if (i(l[d - 1])) return e.apply(t, l);
            (l[m] = p), e.apply(t, l);
        }
        return u;
      };
    };
  },
  function (e, t, r) {
    var n = r(213);
    e.exports = {
      extendPrototype: function (e, t) {
        for (var r in t) e.prototype[r] = t[r];
        return e;
      },
      isFunction: function (e) {
        return "function" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      Promise: n,
      slice: [].slice,
    };
  },
  function (e, t) {
    !(function () {
      "use strict";
      var t,
        r,
        n = "object" == typeof window ? window : global,
        i = !1,
        o = n.process,
        s = Array,
        a = Error,
        c = { e: null },
        l = function () {},
        u = /^.+\/node_modules\/yaku\/.+\n?/gm,
        h = (e.exports = function (e) {
          var t;
          if (!d(this) || void 0 !== this._s) throw E("Invalid this");
          if (((this._s = 2), i && (this._pt = _()), e !== l)) {
            if (!p(e)) throw E("Invalid argument");
            (t = y(e)(k(this, 1), k(this, 0))) === c && R(this, 0, t.e);
          }
        });
      function f() {
        return h.Symbol.species || "Symbol(species)";
      }
      function d(e) {
        return e && "object" == typeof e;
      }
      function p(e) {
        return "function" == typeof e;
      }
      function m(e, t) {
        return e instanceof t;
      }
      function g(e, t, r) {
        if (!t(e)) throw E(r);
      }
      function v() {
        try {
          return t.apply(r, arguments);
        } catch (e) {
          return (c.e = e), c;
        }
      }
      function y(e, n) {
        return (t = e), (r = n), v;
      }
      function w(e, t) {
        var r = s(e),
          n = 0;
        function i() {
          for (var i = 0; i < n; )
            t(r[i], r[i + 1]), (r[i++] = void 0), (r[i++] = void 0);
          (n = 0), r.length > e && (r.length = e);
        }
        return function (e, t) {
          (r[n++] = e), (r[n++] = t), 2 === n && h.nextTick(i);
        };
      }
      function b(e, t) {
        var r,
          n,
          i,
          o,
          a = 0;
        if (!e) throw E("Invalid argument");
        var l = e[h.Symbol.iterator];
        if (p(l)) n = l.call(e);
        else {
          if (!p(e.next)) {
            if (m(e, s)) {
              for (r = e.length; a < r; ) t(e[a], a++);
              return a;
            }
            throw E("Invalid argument");
          }
          n = e;
        }
        for (; !(i = n.next()).done; )
          if ((o = y(t)(i.value, a++)) === c)
            throw (p(n.return) && n.return(), o.e);
        return a;
      }
      function E(e) {
        return new TypeError(e);
      }
      function _(e) {
        return (e ? "" : "\nFrom previous ") + new a().stack;
      }
      (h.default = h),
        (function (e, t) {
          for (var r in t) e.prototype[r] = t[r];
        })(h, {
          then: function (e, t) {
            if (void 0 === this._s) throw E();
            return (function (e, t, r, n) {
              p(r) && (t._onFulfilled = r);
              p(n) && (e._uh && O("rejectionHandled", e), (t._onRejected = n));
              i && (t._pre = e);
              (e[e._pCount++] = t), 2 !== e._s && A(e, t);
              return t;
            })(this, I(h.speciesConstructor(this, h)), e, t);
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
          _pCount: 0,
          _pre: null,
          _Yaku: 1,
        }),
        (h.resolve = function (e) {
          return C(e) ? e : N(I(this), e);
        }),
        (h.reject = function (e) {
          return R(I(this), 0, e);
        }),
        (h.race = function (e) {
          var t = this,
            r = I(t),
            n = function (e) {
              R(r, 1, e);
            },
            i = function (e) {
              R(r, 0, e);
            },
            o = y(b)(e, function (e) {
              t.resolve(e).then(n, i);
            });
          return o === c ? t.reject(o.e) : r;
        }),
        (h.all = function (e) {
          var t,
            r = this,
            n = I(r),
            i = [];
          function o(e) {
            R(n, 0, e);
          }
          return (t = y(b)(e, function (e, s) {
            r.resolve(e).then(function (e) {
              (i[s] = e), --t || R(n, 1, i);
            }, o);
          })) === c
            ? r.reject(t.e)
            : (t || R(n, 1, []), n);
        }),
        (h.Symbol = n.Symbol || {}),
        y(function () {
          Object.defineProperty(h, f(), {
            get: function () {
              return this;
            },
          });
        })(),
        (h.speciesConstructor = function (e, t) {
          var r = e.constructor;
          return (r && r[f()]) || t;
        }),
        (h.unhandledRejection = function (e, t) {
          try {
            n.console.error("Uncaught (in promise)", i ? t.longStack : T(e, t));
          } catch (e) {}
        }),
        (h.rejectionHandled = l),
        (h.enableLongStackTrace = function () {
          i = !0;
        }),
        (h.nextTick = o
          ? o.nextTick
          : function (e) {
              setTimeout(e);
            }),
        (h._Yaku = 1);
      var A = w(999, function (e, t) {
          var r, n;
          void 0 !== (n = e._s ? t._onFulfilled : t._onRejected)
            ? (r = y(x)(n, e._v)) !== c
              ? N(t, r)
              : R(t, 0, r.e)
            : R(t, e._s, e._v);
        }),
        S = w(9, function (e) {
          (function e(t) {
            if (t._umark) return !0;
            t._umark = !0;
            var r,
              n = 0,
              i = t._pCount;
            for (; n < i; ) if ((r = t[n++])._onRejected || e(r)) return !0;
          })(e) || ((e._uh = 1), O("unhandledRejection", e));
        });
      function O(e, t) {
        var r = "on" + e.toLowerCase(),
          i = n[r];
        o && o.listeners(e).length
          ? "unhandledRejection" === e
            ? o.emit(e, t._v, t)
            : o.emit(e, t)
          : i
          ? i({ reason: t._v, promise: t })
          : h[e](t._v, t);
      }
      function C(e) {
        return e && e._Yaku;
      }
      function I(e) {
        return C(e)
          ? new e(l)
          : ((t = new e(function (e, i) {
              if (t) throw E();
              (r = e), (n = i);
            })),
            g(r, p),
            g(n, p),
            t);
        var t, r, n;
      }
      function k(e, t) {
        return function (r) {
          i && (e._st = _(!0)), 1 === t ? N(e, r) : R(e, t, r);
        };
      }
      function T(e, t) {
        var r = [];
        function n(e) {
          return r.push(e.replace(/^\s+|\s+$/g, ""));
        }
        return (
          i &&
            (t._st && n(t._st),
            (function e(t) {
              t && "_pt" in t && (e(t._next), n(t._pt + ""), e(t._pre));
            })(t)),
          (e && e.stack ? e.stack : e) + ("\n" + r.join("\n")).replace(u, "")
        );
      }
      function x(e, t) {
        return e(t);
      }
      function R(e, t, r) {
        var n = 0,
          o = e._pCount;
        if (2 === e._s)
          for (
            e._s = t,
              e._v = r,
              0 === t && (i && m(r, a) && (r.longStack = T(r, e)), S(e));
            n < o;

          )
            A(e, e[n++]);
        return e;
      }
      function N(e, t) {
        if (t === e && t)
          return R(e, 0, E("Chaining cycle detected for promise")), e;
        if (null !== t && (p(t) || d(t))) {
          var r = y(D)(t);
          if (r === c) return R(e, 0, r.e), e;
          p(r)
            ? (i && C(t) && (e._next = t),
              C(t)
                ? P(e, t, r)
                : h.nextTick(function () {
                    P(e, t, r);
                  }))
            : R(e, 1, t);
        } else R(e, 1, t);
        return e;
      }
      function D(e) {
        return e.then;
      }
      function P(e, t, r) {
        var n = y(r, t)(
          function (r) {
            t && ((t = null), N(e, r));
          },
          function (r) {
            t && ((t = null), R(e, 0, r));
          }
        );
        n === c && t && (R(e, 0, n.e), (t = null));
      }
    })();
  },
  function (e, t, r) {
    "use strict";
    const n = r(0),
      i = r(4),
      o = r(215),
      s = r(117);
    e.exports = function (e) {
      const t = i.app || i.remote.app,
        r = i.screen || i.remote.screen;
      let a, c, l;
      const u = Object.assign(
          {
            file: "window-state.json",
            path: t.getPath("userData"),
            maximize: !0,
            fullScreen: !0,
          },
          e
        ),
        h = n.join(u.path, u.file);
      function f() {
        return (
          a &&
          Number.isInteger(a.x) &&
          Number.isInteger(a.y) &&
          Number.isInteger(a.width) &&
          a.width > 0 &&
          Number.isInteger(a.height) &&
          a.height > 0
        );
      }
      function d() {
        const e = r.getPrimaryDisplay().bounds;
        a = {
          width: u.defaultWidth || 800,
          height: u.defaultHeight || 600,
          x: 0,
          y: 0,
          displayBounds: e,
        };
      }
      function p() {
        if (
          !r.getAllDisplays().some((e) => {
            return (
              (t = e.bounds),
              a.x >= t.x &&
                a.y >= t.y &&
                a.x + a.width <= t.x + t.width &&
                a.y + a.height <= t.y + t.height
            );
            var t;
          })
        )
          return d();
      }
      function m(e) {
        if ((e = e || c))
          try {
            const t = e.getBounds();
            (function (e) {
              return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen();
            })(e) &&
              ((a.x = t.x),
              (a.y = t.y),
              (a.width = t.width),
              (a.height = t.height)),
              (a.isMaximized = e.isMaximized()),
              (a.isFullScreen = e.isFullScreen()),
              (a.displayBounds = r.getDisplayMatching(t).bounds);
          } catch (e) {}
      }
      function g(e) {
        e && m(e);
        try {
          s.sync(n.dirname(h)), o.writeFileSync(h, a);
        } catch (e) {}
      }
      function v() {
        clearTimeout(l), (l = setTimeout(m, 100));
      }
      function y() {
        m();
      }
      function w() {
        b(), g();
      }
      function b() {
        c &&
          (c.removeListener("resize", v),
          c.removeListener("move", v),
          clearTimeout(l),
          c.removeListener("close", y),
          c.removeListener("closed", w),
          (c = null));
      }
      try {
        a = o.readFileSync(h);
      } catch (e) {}
      return (
        a && (f() || a.isMaximized || a.isFullScreen)
          ? f() && a.displayBounds && p()
          : (a = null),
        (a = Object.assign(
          { width: u.defaultWidth || 800, height: u.defaultHeight || 600 },
          a
        )),
        {
          get x() {
            return a.x;
          },
          get y() {
            return a.y;
          },
          get width() {
            return a.width;
          },
          get height() {
            return a.height;
          },
          get displayBounds() {
            return a.displayBounds;
          },
          get isMaximized() {
            return a.isMaximized;
          },
          get isFullScreen() {
            return a.isFullScreen;
          },
          saveState: g,
          unmanage: b,
          manage: function (e) {
            u.maximize && a.isMaximized && e.maximize(),
              u.fullScreen && a.isFullScreen && e.setFullScreen(!0),
              e.on("resize", v),
              e.on("move", v),
              e.on("close", y),
              e.on("closed", w),
              (c = e);
          },
          resetStateToDefault: d,
        }
      );
    };
  },
  function (e, t, r) {
    var n;
    try {
      n = r(6);
    } catch (e) {
      n = r(1);
    }
    function i(e, t) {
      var r,
        n = "\n";
      return (
        "object" == typeof t &&
          null !== t &&
          (t.spaces && (r = t.spaces), t.EOL && (n = t.EOL)),
        JSON.stringify(e, t ? t.replacer : null, r).replace(/\n/g, n) + n
      );
    }
    function o(e) {
      return (
        Buffer.isBuffer(e) && (e = e.toString("utf8")),
        (e = e.replace(/^\uFEFF/, ""))
      );
    }
    var s = {
      readFile: function (e, t, r) {
        null == r && ((r = t), (t = {})),
          "string" == typeof t && (t = { encoding: t });
        var i = (t = t || {}).fs || n,
          s = !0;
        "throws" in t && (s = t.throws),
          i.readFile(e, t, function (n, i) {
            if (n) return r(n);
            var a;
            i = o(i);
            try {
              a = JSON.parse(i, t ? t.reviver : null);
            } catch (t) {
              return s
                ? ((t.message = e + ": " + t.message), r(t))
                : r(null, null);
            }
            r(null, a);
          });
      },
      readFileSync: function (e, t) {
        "string" == typeof (t = t || {}) && (t = { encoding: t });
        var r = t.fs || n,
          i = !0;
        "throws" in t && (i = t.throws);
        try {
          var s = r.readFileSync(e, t);
          return (s = o(s)), JSON.parse(s, t.reviver);
        } catch (t) {
          if (i) throw ((t.message = e + ": " + t.message), t);
          return null;
        }
      },
      writeFile: function (e, t, r, o) {
        null == o && ((o = r), (r = {}));
        var s = (r = r || {}).fs || n,
          a = "";
        try {
          a = i(t, r);
        } catch (e) {
          return void (o && o(e, null));
        }
        s.writeFile(e, a, r, o);
      },
      writeFileSync: function (e, t, r) {
        var o = (r = r || {}).fs || n,
          s = i(t, r);
        return o.writeFileSync(e, s, r);
      },
    };
    e.exports = s;
  },
  function (e, t, r) {
    var n = r(217),
      i = process.cwd,
      o = null,
      s = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function () {
      return o || (o = i.call(process)), o;
    };
    try {
      process.cwd();
    } catch (e) {}
    if ("function" == typeof process.chdir) {
      var a = process.chdir;
      (process.chdir = function (e) {
        (o = null), a.call(process, e);
      }),
        Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, a);
    }
    e.exports = function (e) {
      n.hasOwnProperty("O_SYMLINK") &&
        process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) &&
        (function (e) {
          (e.lchmod = function (t, r, i) {
            e.open(t, n.O_WRONLY | n.O_SYMLINK, r, function (t, n) {
              t
                ? i && i(t)
                : e.fchmod(n, r, function (t) {
                    e.close(n, function (e) {
                      i && i(t || e);
                    });
                  });
            });
          }),
            (e.lchmodSync = function (t, r) {
              var i,
                o = e.openSync(t, n.O_WRONLY | n.O_SYMLINK, r),
                s = !0;
              try {
                (i = e.fchmodSync(o, r)), (s = !1);
              } finally {
                if (s)
                  try {
                    e.closeSync(o);
                  } catch (e) {}
                else e.closeSync(o);
              }
              return i;
            });
        })(e);
      e.lutimes ||
        (function (e) {
          n.hasOwnProperty("O_SYMLINK") && e.futimes
            ? ((e.lutimes = function (t, r, i, o) {
                e.open(t, n.O_SYMLINK, function (t, n) {
                  t
                    ? o && o(t)
                    : e.futimes(n, r, i, function (t) {
                        e.close(n, function (e) {
                          o && o(t || e);
                        });
                      });
                });
              }),
              (e.lutimesSync = function (t, r, i) {
                var o,
                  s = e.openSync(t, n.O_SYMLINK),
                  a = !0;
                try {
                  (o = e.futimesSync(s, r, i)), (a = !1);
                } finally {
                  if (a)
                    try {
                      e.closeSync(s);
                    } catch (e) {}
                  else e.closeSync(s);
                }
                return o;
              }))
            : e.futimes &&
              ((e.lutimes = function (e, t, r, n) {
                n && process.nextTick(n);
              }),
              (e.lutimesSync = function () {}));
        })(e);
      (e.chown = i(e.chown)),
        (e.fchown = i(e.fchown)),
        (e.lchown = i(e.lchown)),
        (e.chmod = t(e.chmod)),
        (e.fchmod = t(e.fchmod)),
        (e.lchmod = t(e.lchmod)),
        (e.chownSync = o(e.chownSync)),
        (e.fchownSync = o(e.fchownSync)),
        (e.lchownSync = o(e.lchownSync)),
        (e.chmodSync = r(e.chmodSync)),
        (e.fchmodSync = r(e.fchmodSync)),
        (e.lchmodSync = r(e.lchmodSync)),
        (e.stat = a(e.stat)),
        (e.fstat = a(e.fstat)),
        (e.lstat = a(e.lstat)),
        (e.statSync = c(e.statSync)),
        (e.fstatSync = c(e.fstatSync)),
        (e.lstatSync = c(e.lstatSync)),
        e.chmod &&
          !e.lchmod &&
          ((e.lchmod = function (e, t, r) {
            r && process.nextTick(r);
          }),
          (e.lchmodSync = function () {}));
      e.chown &&
        !e.lchown &&
        ((e.lchown = function (e, t, r, n) {
          n && process.nextTick(n);
        }),
        (e.lchownSync = function () {}));
      "win32" === s &&
        (e.rename =
          "function" != typeof e.rename
            ? e.rename
            : (function (t) {
                function r(r, n, i) {
                  var o = Date.now(),
                    s = 0;
                  t(r, n, function a(c) {
                    if (
                      c &&
                      ("EACCES" === c.code ||
                        "EPERM" === c.code ||
                        "EBUSY" === c.code) &&
                      Date.now() - o < 6e4
                    )
                      return (
                        setTimeout(function () {
                          e.stat(n, function (e, o) {
                            e && "ENOENT" === e.code ? t(r, n, a) : i(c);
                          });
                        }, s),
                        void (s < 100 && (s += 10))
                      );
                    i && i(c);
                  });
                }
                return Object.setPrototypeOf && Object.setPrototypeOf(r, t), r;
              })(e.rename));
      function t(t) {
        return t
          ? function (r, n, i) {
              return t.call(e, r, n, function (e) {
                l(e) && (e = null), i && i.apply(this, arguments);
              });
            }
          : t;
      }
      function r(t) {
        return t
          ? function (r, n) {
              try {
                return t.call(e, r, n);
              } catch (e) {
                if (!l(e)) throw e;
              }
            }
          : t;
      }
      function i(t) {
        return t
          ? function (r, n, i, o) {
              return t.call(e, r, n, i, function (e) {
                l(e) && (e = null), o && o.apply(this, arguments);
              });
            }
          : t;
      }
      function o(t) {
        return t
          ? function (r, n, i) {
              try {
                return t.call(e, r, n, i);
              } catch (e) {
                if (!l(e)) throw e;
              }
            }
          : t;
      }
      function a(t) {
        return t
          ? function (r, n, i) {
              function o(e, t) {
                t &&
                  (t.uid < 0 && (t.uid += 4294967296),
                  t.gid < 0 && (t.gid += 4294967296)),
                  i && i.apply(this, arguments);
              }
              return (
                "function" == typeof n && ((i = n), (n = null)),
                n ? t.call(e, r, n, o) : t.call(e, r, o)
              );
            }
          : t;
      }
      function c(t) {
        return t
          ? function (r, n) {
              var i = n ? t.call(e, r, n) : t.call(e, r);
              return (
                i &&
                  (i.uid < 0 && (i.uid += 4294967296),
                  i.gid < 0 && (i.gid += 4294967296)),
                i
              );
            }
          : t;
      }
      function l(e) {
        return (
          !e ||
          "ENOSYS" === e.code ||
          !(
            (process.getuid && 0 === process.getuid()) ||
            ("EINVAL" !== e.code && "EPERM" !== e.code)
          )
        );
      }
      (e.read =
        "function" != typeof e.read
          ? e.read
          : (function (t) {
              function r(r, n, i, o, s, a) {
                var c;
                if (a && "function" == typeof a) {
                  var l = 0;
                  c = function (u, h, f) {
                    if (u && "EAGAIN" === u.code && l < 10)
                      return l++, t.call(e, r, n, i, o, s, c);
                    a.apply(this, arguments);
                  };
                }
                return t.call(e, r, n, i, o, s, c);
              }
              return Object.setPrototypeOf && Object.setPrototypeOf(r, t), r;
            })(e.read)),
        (e.readSync =
          "function" != typeof e.readSync
            ? e.readSync
            : ((u = e.readSync),
              function (t, r, n, i, o) {
                for (var s = 0; ; )
                  try {
                    return u.call(e, t, r, n, i, o);
                  } catch (e) {
                    if ("EAGAIN" === e.code && s < 10) {
                      s++;
                      continue;
                    }
                    throw e;
                  }
              }));
      var u;
    };
  },
  function (e, t) {
    e.exports = require("constants");
  },
  function (e, t, r) {
    var n = r(19).Stream;
    e.exports = function (e) {
      return {
        ReadStream: function t(r, i) {
          if (!(this instanceof t)) return new t(r, i);
          n.call(this);
          var o = this;
          (this.path = r),
            (this.fd = null),
            (this.readable = !0),
            (this.paused = !1),
            (this.flags = "r"),
            (this.mode = 438),
            (this.bufferSize = 65536),
            (i = i || {});
          for (var s = Object.keys(i), a = 0, c = s.length; a < c; a++) {
            var l = s[a];
            this[l] = i[l];
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
              o._read();
            });
          e.open(this.path, this.flags, this.mode, function (e, t) {
            if (e) return o.emit("error", e), void (o.readable = !1);
            (o.fd = t), o.emit("open", t), o._read();
          });
        },
        WriteStream: function t(r, i) {
          if (!(this instanceof t)) return new t(r, i);
          n.call(this),
            (this.path = r),
            (this.fd = null),
            (this.writable = !0),
            (this.flags = "w"),
            (this.encoding = "binary"),
            (this.mode = 438),
            (this.bytesWritten = 0),
            (i = i || {});
          for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
            var c = o[s];
            this[c] = i[c];
          }
          if (void 0 !== this.start) {
            if ("number" != typeof this.start)
              throw TypeError("start must be a Number");
            if (this.start < 0) throw new Error("start must be >= zero");
            this.pos = this.start;
          }
          (this.busy = !1),
            (this._queue = []),
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
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      if (null === e || "object" != typeof e) return e;
      if (e instanceof Object) var t = { __proto__: n(e) };
      else t = Object.create(null);
      return (
        Object.getOwnPropertyNames(e).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
        }),
        t
      );
    };
    var n =
      Object.getPrototypeOf ||
      function (e) {
        return e.__proto__;
      };
  },
  function (e, t, r) {
    "use strict";
    var n = r(57);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var i = r(4),
      o = n(r(221)),
      s = r(48),
      a = (r(0), n(r(305)));
    var c = (e, t) => {
      (o.default.transports.file.level = "info"),
        (s.autoUpdater.logger = o.default),
        (s.autoUpdater.autoDownload = !1),
        (s.autoUpdater.autoInstallOnAppQuit = !0),
        i.ipcMain.on("checking-for-update", () => {
          try {
            var r, n;
            if (process.env.DEBUG)
              s.autoUpdater.setFeedURL(
                null !== (r = process.env.UPDATE_FEED_URL) && void 0 !== r
                  ? r
                  : "https://get.atomicwallet.io/pre-release/"
              ),
                (s.autoUpdater.channel =
                  null !== (n = process.env.UPDATE_CHANNEL) && void 0 !== n
                    ? n
                    : "pre-release");
            setTimeout(() => {
              s.autoUpdater.checkForUpdates().then((r) => {
                let {
                  updateInfo: { version: n },
                } = r;
                1 === (0, a.default)(n, e) &&
                  t.webContents.send("update-available", n);
              });
            }, 2e3);
          } catch (e) {}
        }),
        i.ipcMain.on("download-initiated", () => {
          s.autoUpdater.downloadUpdate();
        }),
        i.ipcMain.on("restart-initiated", () => {
          s.autoUpdater.quitAndInstall();
        }),
        s.autoUpdater.on("download-progress", (e) => {
          let { percent: r } = e;
          t.webContents.send("download-progress", { percent: r });
        }),
        s.autoUpdater.on("update-downloaded", () => {
          setTimeout(() => {
            t.webContents.send("update-downloaded");
          }, 1e3);
        }),
        s.autoUpdater.on("error", (e) => {
          console.log(e);
        });
    };
    t.default = c;
  },
  function (e, t, r) {
    "use strict";
    var n = r(222),
      i = r(223),
      o = r(224),
      s = r(225),
      a = r(228),
      c = r(229),
      l = r(230),
      u = r(28);
    (e.exports = {
      catchErrors: function (t) {
        var r = Object.assign(
          {},
          { log: e.exports.error, showDialog: "browser" === process.type },
          t || {}
        );
        n(r);
      },
      hooks: [],
      isDev: u.isDev(),
      levels: ["error", "warn", "info", "verbose", "debug", "silly"],
      variables: { processType: process.type },
    }),
      (e.exports.transports = {
        console: o(e.exports),
        file: s(e.exports),
        remote: a(e.exports),
        mainConsole: c(e.exports),
        rendererConsole: l(e.exports),
      }),
      e.exports.levels.forEach(function (t) {
        e.exports[t] = i.bind(null, e.exports, t);
      }),
      (e.exports.log = i.bind(null, e.exports, "info")),
      (e.exports.default = e.exports);
  },
  function (e, t, r) {
    "use strict";
    var n = r(28),
      i = !1;
    e.exports = function (e) {
      return (
        i ||
          ((i = !0),
          "renderer" === process.type
            ? (window.addEventListener("error", o),
              window.addEventListener("unhandledrejection", s))
            : (process.on("uncaughtException", t),
              process.on("unhandledRejection", r))),
        { stop: a }
      );
      function t(t) {
        try {
          if ("function" == typeof e.onError && !1 === e.onError(t)) return;
          if (
            (e.log(t), e.showDialog && t.name.indexOf("UnhandledRejection") < 0)
          ) {
            var r = process.type || "main";
            n.showErrorBox(
              "A JavaScript error occurred in the " + r + " process",
              t.stack
            );
          }
        } catch (e) {
          console.error(t);
        }
      }
      function r(e) {
        if (e instanceof Error) {
          var r = "UnhandledRejection " + e.name,
            n = Object.getPrototypeOf(e),
            i = Object.getOwnPropertyDescriptor(n, "name");
          return (
            (i && i.writable) || (e = new Error(e.message)),
            (e.name = r),
            void t(e)
          );
        }
        var o = new Error(JSON.stringify(e));
        (o.name = "UnhandledRejection"), t(o);
      }
      function o(e) {
        e.preventDefault(), t(e.error);
      }
      function s(e) {
        e.preventDefault(), r(e.reason);
      }
      function a() {
        (i = !1),
          "renderer" === process.type
            ? (window.removeEventListener("error", o),
              window.removeEventListener("unhandledrejection", s))
            : (process.removeListener("uncaughtException", t),
              process.removeListener("unhandledRejection", r));
      }
    };
  },
  function (e, t, r) {
    "use strict";
    function n(e, t) {
      var r = i(e, t);
      for (var n in r)
        if (r.hasOwnProperty(n) && "function" == typeof r[n]) {
          var o = a(Array.prototype.slice.call(arguments, 2)),
            c = s(e.hooks, r[n], {
              data: o.messages,
              date: new Date(),
              level: t,
              variables: e.variables,
              styles: o.styles,
            });
          c && r[n](c);
        }
    }
    function i(e, t) {
      var r = e.transports,
        n = e.levels,
        i = {};
      for (var s in r)
        r.hasOwnProperty(s) &&
          r[s] &&
          !1 !== r[s].level &&
          o(n, r[s].level, t) &&
          (i[s] = r[s]);
      return i;
    }
    function o(e, t, r) {
      var n = e.indexOf(t),
        i = e.indexOf(r);
      return -1 === i || -1 === n || i <= n;
    }
    function s(e, t, r) {
      if (!e || !e.length) return r;
      for (var n = 0; n < e.length && (r = e[n](r, t)); n++);
      return r;
    }
    function a(e) {
      var t = [];
      return {
        messages: (e = e.filter(function (e) {
          return (
            !e || !e.substr || "color:" !== e.substr(0, 6) || (t.push(e), !1)
          );
        })),
        styles: t,
      };
    }
    (n.compareLevels = o), (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var n = r(47),
      i = {
        context: console,
        error: console.error,
        warn: console.warn,
        info: console.info,
        verbose: console.verbose,
        debug: console.debug,
        silly: console.silly,
        log: console.log,
      };
    function o(e, t) {
      return (
        t.forEach(function (t) {
          e = e.replace(
            "%c",
            (function (e) {
              switch (e.replace(/color:\s*(\w+).*/, "$1").toLowerCase()) {
                case "unset":
                  return "[0m";
                case "black":
                  return "[30m";
                case "red":
                  return "[31m";
                case "green":
                  return "[32m";
                case "yellow":
                  return "[33m";
                case "blue":
                  return "[34m";
                case "magenta":
                  return "[35m";
                case "cyan":
                  return "[36m";
                case "white":
                  return "[37m";
                default:
                  return "";
              }
            })(t)
          );
        }),
        e + "[0m"
      );
    }
    function s(e, t) {
      i[e] ? i[e].apply(i.context, t) : i.log.apply(i.context, t);
    }
    function a(e) {
      switch (e) {
        case "error":
          return "red";
        case "warn":
          return "yellow";
        case "info":
          return "cyan";
        default:
          return "unset";
      }
    }
    e.exports = function (e) {
      if (
        ((r.level = "silly"),
        (r.forceStyles = Boolean(process.env.FORCE_STYLES)),
        "renderer" === process.type)
      )
        r.format = "{h}:{i}:{s}.{ms} › {text}";
      else {
        var t = "win32" === process.platform ? ">" : "›";
        r.format = "%c{h}:{i}:{s}.{ms}%c " + t + " {text}";
      }
      return r;
      function r(t) {
        var i = n.format(t, r.format, e);
        if ("renderer" !== process.type) {
          var c,
            l,
            u = t.styles || [];
          r.format.substr &&
            "%c" === r.format.substr(0, 2) &&
            (u = ["color:" + a(t.level), "color:unset"].concat(u)),
            r.forceStyles ||
            ((c = t.level),
            (l =
              "error" === c || "warn" === c
                ? process.stderr
                : process.stdout) && l.isTTY)
              ? s(t.level, [o(i, u)])
              : s(t.level, [i.replace(/%c/g, "")]);
        } else s(t.level, [i].concat(t.styles));
      }
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(1),
      i = r(22).EOL,
      o = r(0),
      s = r(47),
      a = r(226);
    e.exports = function (e) {
      return (
        (t.appName = null),
        (t.archiveLog = function (e) {
          var t = o.parse(e);
          try {
            n.renameSync(e, o.join(t.dir, t.name + ".old" + t.ext));
          } catch (e) {
            u("Could not rotate log", e);
          }
        }),
        (t.bytesWritten = 0),
        (t.file = null),
        (t.fileName = "log.log"),
        (t.fileSize = null),
        (t.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}"),
        (t.level = "silly"),
        (t.maxSize = 1048576),
        (t.sync = !0),
        (t.writeOptions = { flag: "a", mode: 438, encoding: "utf8" }),
        (t.clear = function () {
          try {
            n.unlinkSync(t.file);
          } catch (e) {
            u("Could not clear log", e);
          }
        }),
        (t.findLogPath = l.bind(null, t)),
        (t.init = r),
        t
      );
      function t(o) {
        (t.file && null !== t.fileSize) || r(t),
          t.maxSize > 0 &&
            t.fileSize + t.bytesWritten > t.maxSize &&
            (t.archiveLog(t.file), r(t)),
          (function (e, t) {
            if (t.sync)
              try {
                n.writeFileSync(t.file, e, t.writeOptions), c(e, t);
              } catch (e) {
                u("Couldn't write to " + t.file, e);
              }
            else
              n.writeFile(t.file, e, t.writeOptions, function (r) {
                r ? u("Couldn't write to " + t.file, r) : c(e, t);
              });
          })(s.format(o, t.format, e, !0) + i, t);
      }
      function r(e) {
        if ((((e = e || t).file = l(e)), !e.file))
          return (e.level = !1), void u("Could not set a log file");
        try {
          e.fileSize = n.statSync(e.file).size;
        } catch (t) {
          e.fileSize = 0;
        }
        e.bytesWritten = 0;
      }
      function c(e, t) {
        t.bytesWritten += Buffer.byteLength(e, t.writeOptions.encoding);
      }
      function l(e) {
        return e.file || a(e.appName, e.fileName);
      }
      function u(t, r) {
        var n = ["electron-log.transports.file: " + t];
        r && n.push(r),
          e.transports.console({ data: n, date: new Date(), level: "warn" });
      }
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(1),
      i = r(0),
      o = r(22),
      s = r(28),
      a = r(227);
    function c(e) {
      if (!this || this.or !== c || !this.result) {
        if (!e) return { or: c };
        l((e = i.join.apply(i, arguments)));
        try {
          n.accessSync(e, n.W_OK);
        } catch (e) {
          return { or: c };
        }
      }
      return { or: c, result: (!!this && this.result) || e };
    }
    function l(e, t) {
      var r = e.split(i.sep);
      t = (t || "") + r.shift() + i.sep;
      try {
        n.mkdirSync(t);
      } catch (e) {
        if (!n.statSync(t).isDirectory()) throw new Error(e);
      }
      return !r.length || l(r.join(i.sep), t);
    }
    e.exports = function (e, t) {
      t = t || "log.log";
      var r = e ? null : s.getUserData();
      e = e || a();
      var n,
        l = o.homedir ? o.homedir() : process.env.HOME;
      switch (process.platform) {
        case "darwin":
          n = c(l, "Library", "Logs", e)
            .or(r)
            .or(l, "Library", "Application Support", e).result;
          break;
        case "win32":
          n = c(r)
            .or(process.env.APPDATA, e)
            .or(l, "AppData", "Roaming", e).result;
          break;
        default:
          n = c(r)
            .or(process.env.XDG_CONFIG_HOME, e)
            .or(l, ".config", e)
            .or(process.env.XDG_DATA_HOME, e)
            .or(l, ".local", "share", e).result;
      }
      if (n) return i.join(n, t);
      return !1;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(1),
      i = r(0),
      o = r(28);
    function s(e) {
      for (var t; !t; ) {
        var r;
        t = i.join(e, "package.json");
        try {
          n.statSync(t);
        } catch (n) {
          (r = i.resolve(e, "..")), (t = null);
        }
        if (e === r) break;
        e = r;
      }
      return t;
    }
    function a(e) {
      console.warn(e);
    }
    e.exports = function () {
      var e = o.getElectronAppName();
      if (e) return e;
      try {
        return (
          (e = (function () {
            var e;
            try {
              r.c[r.s].filename && (e = s(i.dirname(r.c[r.s].filename)));
            } catch (t) {
              e = null;
            }
            if (!e && process.resourcesPath) {
              e = s(i.join(process.resourcesPath, "app.asar"));
              var t = i.join("node_modules", "electron", "package.json");
              e && -1 !== e.indexOf(t) && (e = null);
            }
            e || (e = s(process.cwd()));
            if (!e) return null;
            var o = n.readFileSync(e, "utf-8"),
              a = JSON.parse(o);
            return !!a && (a.productName || a.name);
          })()) ||
          a("electron-log: unable to load the app name from package.json")
        );
      } catch (e) {
        return a("electron-log: " + e.message);
      }
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(118),
      i = r(92),
      o = r(17);
    function s(e) {
      if (s.url) {
        var t = (function e(t, r) {
          if (r < 1)
            return Array.isArray(t)
              ? "[array]"
              : "object" == typeof t
              ? "[object]"
              : t;
          if (Array.isArray(t))
            return t.map(function (t) {
              return e(t, r - 1);
            });
          if (t && "function" == typeof t.getMonth) return t;
          if (null === t) return null;
          if ("object" == typeof t) {
            "function" == typeof t.toJSON && (t = t.toJSON());
            var n = {};
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) &&
                (n[i] = e(t[i], r - 1));
            return n;
          }
          return t;
        })(
          {
            client: s.client,
            data: e.data,
            date: e.date.getTime(),
            level: e.level,
            styles: e.styles,
            variables: e.variables,
          },
          s.depth + 1
        );
        !(function (e, t) {
          var r = o.parse(e),
            a = "https:" === r.protocol ? i : n,
            c = JSON.stringify(t),
            l = {
              hostname: r.hostname,
              port: r.port,
              path: r.path,
              method: "POST",
              headers: {
                "Content-Length": c.length,
                "Content-Type": "application/json",
              },
            };
          Object.assign(l, s.requestOptions);
          var u = a.request(l);
          u.write(c), u.end();
        })(s.url, t);
      }
    }
    e.exports = function () {
      return (
        (s.client = { name: "electron-application" }),
        (s.depth = 6),
        (s.level = !1),
        (s.requestOptions = {}),
        (s.url = null),
        s
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(47),
      i = r(28),
      o = "__ELECTRON_LOG_MAIN_CONSOLE__";
    e.exports = function (e) {
      switch (
        ((t.level = !!e.isDev && "silly"),
        (t.format = "[{h}:{i}:{s}.{ms}] {text}"),
        process.type)
      ) {
        case "browser":
          return (
            i.onIpcMain(o, function (t, r) {
              e.transports.console(r);
            }),
            null
          );
        case "renderer":
          try {
            i.getRemote().require("electron-log");
          } catch (e) {}
          return t;
        default:
          return null;
      }
      function t(e) {
        (e.data = e.data.map(n.stringifyObject)), i.sendIpcToMain(o, e);
      }
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(47),
      i = r(28),
      o = "__ELECTRON_LOG_RENDERER_CONSOLE__";
    e.exports = function (e) {
      switch (
        ((t.level = !!e.isDev && "silly"),
        (t.format = "[{h}:{i}:{s}.{ms}] {text}"),
        process.type)
      ) {
        case "browser":
          return (
            i.getElectronApp().on("web-contents-created", function (e, t) {
              t.executeJavaScript('try {require("electron-log")} catch(e){}');
            }),
            t
          );
        case "renderer":
          return (
            i.onIpcRenderer(o, function (t, r) {
              e.transports.console(r);
            }),
            null
          );
        default:
          return null;
      }
      function t(e) {
        (e.data = e.data.map(n.stringifyObject)), i.sendIpcToRenderer(o, e);
      }
    };
  },
  function (e, t, r) {
    "undefined" == typeof process ||
    "renderer" === process.type ||
    !0 === process.browser ||
    process.__nwjs
      ? (e.exports = r(232))
      : (e.exports = r(234));
  },
  function (e, t, r) {
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
      const r = "color: " + this.color;
      t.splice(1, 0, r, "color: inherit");
      let n = 0,
        i = 0;
      t[0].replace(/%[a-zA-Z%]/g, (e) => {
        "%%" !== e && (n++, "%c" === e && (i = n));
      }),
        t.splice(i, 0, r);
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
        !e &&
          "undefined" != typeof process &&
          "env" in process &&
          (e = process.env.DEBUG);
        return e;
      }),
      (t.useColors = function () {
        if (
          "undefined" != typeof window &&
          window.process &&
          ("renderer" === window.process.type || window.process.__nwjs)
        )
          return !0;
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
          ("undefined" != typeof window &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
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
      (e.exports = r(121)(t));
    const { formatters: n } = e.exports;
    n.j = function (e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message;
      }
    };
  },
  function (e, t) {
    var r = 1e3,
      n = 6e4,
      i = 60 * n,
      o = 24 * i;
    function s(e, t, r, n) {
      var i = t >= 1.5 * r;
      return Math.round(e / r) + " " + n + (i ? "s" : "");
    }
    e.exports = function (e, t) {
      t = t || {};
      var a = typeof e;
      if ("string" === a && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t =
            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              e
            );
          if (!t) return;
          var s = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return 315576e5 * s;
            case "weeks":
            case "week":
            case "w":
              return 6048e5 * s;
            case "days":
            case "day":
            case "d":
              return s * o;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return s * i;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return s * n;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return s * r;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return s;
            default:
              return;
          }
        })(e);
      if ("number" === a && isFinite(e))
        return t.long
          ? (function (e) {
              var t = Math.abs(e);
              if (t >= o) return s(e, t, o, "day");
              if (t >= i) return s(e, t, i, "hour");
              if (t >= n) return s(e, t, n, "minute");
              if (t >= r) return s(e, t, r, "second");
              return e + " ms";
            })(e)
          : (function (e) {
              var t = Math.abs(e);
              if (t >= o) return Math.round(e / o) + "d";
              if (t >= i) return Math.round(e / i) + "h";
              if (t >= n) return Math.round(e / n) + "m";
              if (t >= r) return Math.round(e / r) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, r) {
    const n = r(122),
      i = r(14);
    (t.init = function (e) {
      e.inspectOpts = {};
      const r = Object.keys(t.inspectOpts);
      for (let n = 0; n < r.length; n++)
        e.inspectOpts[r[n]] = t.inspectOpts[r[n]];
    }),
      (t.log = function (...e) {
        return process.stderr.write(i.format(...e) + "\n");
      }),
      (t.formatArgs = function (r) {
        const { namespace: n, useColors: i } = this;
        if (i) {
          const t = this.color,
            i = "[3" + (t < 8 ? t : "8;5;" + t),
            o = `  ${i};1m${n} [0m`;
          (r[0] = o + r[0].split("\n").join("\n" + o)),
            r.push(i + "m+" + e.exports.humanize(this.diff) + "[0m");
        } else
          r[0] =
            (function () {
              if (t.inspectOpts.hideDate) return "";
              return new Date().toISOString() + " ";
            })() +
            n +
            " " +
            r[0];
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
          : n.isatty(process.stderr.fd);
      }),
      (t.destroy = i.deprecate(() => {},
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")),
      (t.colors = [6, 2, 3, 4, 5, 1]);
    try {
      const e = r(235);
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
        const r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (e, t) => t.toUpperCase());
        let n = process.env[t];
        return (
          (n =
            !!/^(yes|on|true|enabled)$/i.test(n) ||
            (!/^(no|off|false|disabled)$/i.test(n) &&
              ("null" === n ? null : Number(n)))),
          (e[r] = n),
          e
        );
      }, {})),
      (e.exports = r(121)(t));
    const { formatters: o } = e.exports;
    (o.o = function (e) {
      return (
        (this.inspectOpts.colors = this.useColors),
        i
          .inspect(e, this.inspectOpts)
          .split("\n")
          .map((e) => e.trim())
          .join(" ")
      );
    }),
      (o.O = function (e) {
        return (
          (this.inspectOpts.colors = this.useColors),
          i.inspect(e, this.inspectOpts)
        );
      });
  },
  function (e, t, r) {
    "use strict";
    const n = r(22),
      i = r(122),
      o = r(236),
      { env: s } = process;
    let a;
    function c(e) {
      return (
        0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }
      );
    }
    function l(e, t) {
      if (0 === a) return 0;
      if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
      if (o("color=256")) return 2;
      if (e && !t && void 0 === a) return 0;
      const r = a || 0;
      if ("dumb" === s.TERM) return r;
      if ("win32" === process.platform) {
        const e = n.release().split(".");
        return Number(e[0]) >= 10 && Number(e[2]) >= 10586
          ? Number(e[2]) >= 14931
            ? 3
            : 2
          : 1;
      }
      if ("CI" in s)
        return [
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI",
          "GITHUB_ACTIONS",
          "BUILDKITE",
        ].some((e) => e in s) || "codeship" === s.CI_NAME
          ? 1
          : r;
      if ("TEAMCITY_VERSION" in s)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === s.COLORTERM) return 3;
      if ("TERM_PROGRAM" in s) {
        const e = parseInt((s.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (s.TERM_PROGRAM) {
          case "iTerm.app":
            return e >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(s.TERM)
        ? 2
        : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            s.TERM
          ) || "COLORTERM" in s
        ? 1
        : r;
    }
    o("no-color") || o("no-colors") || o("color=false") || o("color=never")
      ? (a = 0)
      : (o("color") || o("colors") || o("color=true") || o("color=always")) &&
        (a = 1),
      "FORCE_COLOR" in s &&
        (a =
          "true" === s.FORCE_COLOR
            ? 1
            : "false" === s.FORCE_COLOR
            ? 0
            : 0 === s.FORCE_COLOR.length
            ? 1
            : Math.min(parseInt(s.FORCE_COLOR, 10), 3)),
      (e.exports = {
        supportsColor: function (e) {
          return c(l(e, e && e.isTTY));
        },
        stdout: c(l(!0, i.isatty(1))),
        stderr: c(l(!0, i.isatty(2))),
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = (e, t = process.argv) => {
      const r = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
        n = t.indexOf(r + e),
        i = t.indexOf("--");
      return -1 !== n && (-1 === i || n < i);
    };
  },
  function (e, t, r) {
    "use strict";
    function n(e, t) {
      return (
        null != t &&
          t.length > 0 &&
          (t.startsWith("/") || (e += "/"), (e += t)),
        e
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getS3LikeProviderBaseUrl = t.githubUrl = void 0),
      (t.githubUrl = function (e, t = "github.com") {
        return `${e.protocol || "https"}://${e.host || t}`;
      }),
      (t.getS3LikeProviderBaseUrl = function (e) {
        const t = e.provider;
        if ("s3" === t)
          return (function (e) {
            let t;
            if (null != e.endpoint) t = `${e.endpoint}/${e.bucket}`;
            else if (e.bucket.includes(".")) {
              if (null == e.region)
                throw new Error(
                  `Bucket name "${e.bucket}" includes a dot, but S3 region is missing`
                );
              t =
                "us-east-1" === e.region
                  ? "https://s3.amazonaws.com/" + e.bucket
                  : `https://s3-${e.region}.amazonaws.com/${e.bucket}`;
            } else
              t =
                "cn-north-1" === e.region
                  ? `https://${e.bucket}.s3.${e.region}.amazonaws.com.cn`
                  : `https://${e.bucket}.s3.amazonaws.com`;
            return n(t, e.path);
          })(e);
        if ("spaces" === t)
          return (function (e) {
            if (null == e.name) throw new Error("name is missing");
            if (null == e.region) throw new Error("region is missing");
            return n(
              `https://${e.name}.${e.region}.digitaloceanspaces.com`,
              e.path
            );
          })(e);
        throw new Error("Not supported provider: " + t);
      });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.parseDn = void 0),
      (t.parseDn = function (e) {
        let t = !1,
          r = null,
          n = "",
          i = 0;
        e = e.trim();
        const o = new Map();
        for (let s = 0; s <= e.length; s++) {
          if (s === e.length) {
            null !== r && o.set(r, n);
            break;
          }
          const a = e[s];
          if (t) {
            if ('"' === a) {
              t = !1;
              continue;
            }
          } else {
            if ('"' === a) {
              t = !0;
              continue;
            }
            if ("\\" === a) {
              s++;
              const t = parseInt(e.slice(s, s + 2), 16);
              Number.isNaN(t)
                ? (n += e[s])
                : (s++, (n += String.fromCharCode(t)));
              continue;
            }
            if (null === r && "=" === a) {
              (r = n), (n = "");
              continue;
            }
            if ("," === a || ";" === a || "+" === a) {
              null !== r && o.set(r, n), (r = null), (n = "");
              continue;
            }
          }
          if (" " === a && !t) {
            if (0 === n.length) continue;
            if (s > i) {
              let t = s;
              for (; " " === e[t]; ) t++;
              i = t;
            }
            if (
              i >= e.length ||
              "," === e[i] ||
              ";" === e[i] ||
              (null === r && "=" === e[i]) ||
              (null !== r && "+" === e[i])
            ) {
              s = i - 1;
              continue;
            }
          }
          n += a;
        }
        return o;
      });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.nil = t.UUID = void 0);
    const n = r(49),
      i = r(3),
      o = n.randomBytes(16);
    o[0] = 1 | o[0];
    const s = {},
      a = [];
    for (let e = 0; e < 256; e++) {
      const t = (e + 256).toString(16).substr(1);
      (s[t] = e), (a[e] = t);
    }
    class c {
      constructor(e) {
        (this.ascii = null), (this.binary = null);
        const t = c.check(e);
        if (!t) throw new Error("not a UUID");
        (this.version = t.version),
          "ascii" === t.format ? (this.ascii = e) : (this.binary = e);
      }
      static v5(e, t) {
        return (function (e, t, r, o, s = u.ASCII) {
          const l = n.createHash(t);
          if ("string" != typeof e && !Buffer.isBuffer(e))
            throw i.newError(
              "options.name must be either a string or a Buffer",
              "ERR_INVALID_UUID_NAME"
            );
          l.update(o), l.update(e);
          const h = l.digest();
          let f;
          switch (s) {
            case u.BINARY:
              (h[6] = (15 & h[6]) | r), (h[8] = (63 & h[8]) | 128), (f = h);
              break;
            case u.OBJECT:
              (h[6] = (15 & h[6]) | r),
                (h[8] = (63 & h[8]) | 128),
                (f = new c(h));
              break;
            default:
              f =
                a[h[0]] +
                a[h[1]] +
                a[h[2]] +
                a[h[3]] +
                "-" +
                a[h[4]] +
                a[h[5]] +
                "-" +
                a[(15 & h[6]) | r] +
                a[h[7]] +
                "-" +
                a[(63 & h[8]) | 128] +
                a[h[9]] +
                "-" +
                a[h[10]] +
                a[h[11]] +
                a[h[12]] +
                a[h[13]] +
                a[h[14]] +
                a[h[15]];
          }
          return f;
        })(e, "sha1", 80, t);
      }
      toString() {
        var e;
        return (
          null == this.ascii &&
            (this.ascii =
              ((e = this.binary),
              a[e[0]] +
                a[e[1]] +
                a[e[2]] +
                a[e[3]] +
                "-" +
                a[e[4]] +
                a[e[5]] +
                "-" +
                a[e[6]] +
                a[e[7]] +
                "-" +
                a[e[8]] +
                a[e[9]] +
                "-" +
                a[e[10]] +
                a[e[11]] +
                a[e[12]] +
                a[e[13]] +
                a[e[14]] +
                a[e[15]])),
          this.ascii
        );
      }
      inspect() {
        return `UUID v${this.version} ${this.toString()}`;
      }
      static check(e, t = 0) {
        if ("string" == typeof e)
          return (
            (e = e.toLowerCase()),
            !!/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(e) &&
              ("00000000-0000-0000-0000-000000000000" === e
                ? { version: void 0, variant: "nil", format: "ascii" }
                : {
                    version: (240 & s[e[14] + e[15]]) >> 4,
                    variant: l((224 & s[e[19] + e[20]]) >> 5),
                    format: "ascii",
                  })
          );
        if (Buffer.isBuffer(e)) {
          if (e.length < t + 16) return !1;
          let r = 0;
          for (; r < 16 && 0 === e[t + r]; r++);
          return 16 === r
            ? { version: void 0, variant: "nil", format: "binary" }
            : {
                version: (240 & e[t + 6]) >> 4,
                variant: l((224 & e[t + 8]) >> 5),
                format: "binary",
              };
        }
        throw i.newError("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE");
      }
      static parse(e) {
        const t = Buffer.allocUnsafe(16);
        let r = 0;
        for (let n = 0; n < 16; n++)
          (t[n] = s[e[r++] + e[r++]]),
            (3 !== n && 5 !== n && 7 !== n && 9 !== n) || (r += 1);
        return t;
      }
    }
    function l(e) {
      switch (e) {
        case 0:
        case 1:
        case 3:
          return "ncs";
        case 4:
        case 5:
          return "rfc4122";
        case 6:
          return "microsoft";
        default:
          return "future";
      }
    }
    var u;
    (t.UUID = c),
      (c.OID = c.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8")),
      (function (e) {
        (e[(e.ASCII = 0)] = "ASCII"),
          (e[(e.BINARY = 1)] = "BINARY"),
          (e[(e.OBJECT = 2)] = "OBJECT");
      })(u || (u = {})),
      (t.nil = new c("00000000-0000-0000-0000-000000000000"));
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.parseXml = t.XElement = void 0);
    const n = r(241),
      i = r(3);
    class o {
      constructor(e) {
        if (
          ((this.name = e),
          (this.value = ""),
          (this.attributes = null),
          (this.isCData = !1),
          (this.elements = null),
          !e)
        )
          throw i.newError(
            "Element name cannot be empty",
            "ERR_XML_ELEMENT_NAME_EMPTY"
          );
        if (
          !(function (e) {
            return s.test(e);
          })(e)
        )
          throw i.newError(
            "Invalid element name: " + e,
            "ERR_XML_ELEMENT_INVALID_NAME"
          );
      }
      attribute(e) {
        const t = null === this.attributes ? null : this.attributes[e];
        if (null == t)
          throw i.newError(`No attribute "${e}"`, "ERR_XML_MISSED_ATTRIBUTE");
        return t;
      }
      removeAttribute(e) {
        null !== this.attributes && delete this.attributes[e];
      }
      element(e, t = !1, r = null) {
        const n = this.elementOrNull(e, t);
        if (null === n)
          throw i.newError(r || `No element "${e}"`, "ERR_XML_MISSED_ELEMENT");
        return n;
      }
      elementOrNull(e, t = !1) {
        if (null === this.elements) return null;
        for (const r of this.elements) if (a(r, e, t)) return r;
        return null;
      }
      getElements(e, t = !1) {
        return null === this.elements
          ? []
          : this.elements.filter((r) => a(r, e, t));
      }
      elementValueOrEmpty(e, t = !1) {
        const r = this.elementOrNull(e, t);
        return null === r ? "" : r.value;
      }
    }
    t.XElement = o;
    const s = new RegExp(/^[A-Za-z_][:A-Za-z0-9_-]*$/i);
    function a(e, t, r) {
      const n = e.name;
      return (
        n === t ||
        (!0 === r &&
          n.length === t.length &&
          n.toLowerCase() === t.toLowerCase())
      );
    }
    t.parseXml = function (e) {
      let t = null;
      const r = n.parser(!0, {}),
        i = [];
      return (
        (r.onopentag = (e) => {
          const r = new o(e.name);
          if (((r.attributes = e.attributes), null === t)) t = r;
          else {
            const e = i[i.length - 1];
            null == e.elements && (e.elements = []), e.elements.push(r);
          }
          i.push(r);
        }),
        (r.onclosetag = () => {
          i.pop();
        }),
        (r.ontext = (e) => {
          i.length > 0 && (i[i.length - 1].value = e);
        }),
        (r.oncdata = (e) => {
          const t = i[i.length - 1];
          (t.value = e), (t.isCData = !0);
        }),
        (r.onerror = (e) => {
          throw e;
        }),
        r.write(e),
        t
      );
    };
  },
  function (e, t, r) {
    !(function (e) {
      (e.parser = function (e, t) {
        return new i(e, t);
      }),
        (e.SAXParser = i),
        (e.SAXStream = s),
        (e.createStream = function (e, t) {
          return new s(e, t);
        }),
        (e.MAX_BUFFER_LENGTH = 65536);
      var t,
        n = [
          "comment",
          "sgmlDecl",
          "textNode",
          "tagName",
          "doctype",
          "procInstName",
          "procInstBody",
          "entity",
          "attribName",
          "attribValue",
          "cdata",
          "script",
        ];
      function i(t, r) {
        if (!(this instanceof i)) return new i(t, r);
        !(function (e) {
          for (var t = 0, r = n.length; t < r; t++) e[n[t]] = "";
        })(this),
          (this.q = this.c = ""),
          (this.bufferCheckPosition = e.MAX_BUFFER_LENGTH),
          (this.opt = r || {}),
          (this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags),
          (this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase"),
          (this.tags = []),
          (this.closed = this.closedRoot = this.sawRoot = !1),
          (this.tag = this.error = null),
          (this.strict = !!t),
          (this.noscript = !(!t && !this.opt.noscript)),
          (this.state = E.BEGIN),
          (this.strictEntities = this.opt.strictEntities),
          (this.ENTITIES = this.strictEntities
            ? Object.create(e.XML_ENTITIES)
            : Object.create(e.ENTITIES)),
          (this.attribList = []),
          this.opt.xmlns && (this.ns = Object.create(c)),
          (this.trackPosition = !1 !== this.opt.position),
          this.trackPosition && (this.position = this.line = this.column = 0),
          A(this, "onready");
      }
      (e.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace",
      ]),
        Object.create ||
          (Object.create = function (e) {
            function t() {}
            return (t.prototype = e), new t();
          }),
        Object.keys ||
          (Object.keys = function (e) {
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(r);
            return t;
          }),
        (i.prototype = {
          end: function () {
            k(this);
          },
          write: function (t) {
            if (this.error) throw this.error;
            if (this.closed)
              return I(
                this,
                "Cannot write after close. Assign an onready handler."
              );
            if (null === t) return k(this);
            "object" == typeof t && (t = t.toString());
            var r = 0,
              i = "";
            for (; (i = U(t, r++)), (this.c = i), i; )
              switch (
                (this.trackPosition &&
                  (this.position++,
                  "\n" === i
                    ? (this.line++, (this.column = 0))
                    : this.column++),
                this.state)
              ) {
                case E.BEGIN:
                  if (((this.state = E.BEGIN_WHITESPACE), "\ufeff" === i))
                    continue;
                  F(this, i);
                  continue;
                case E.BEGIN_WHITESPACE:
                  F(this, i);
                  continue;
                case E.TEXT:
                  if (this.sawRoot && !this.closedRoot) {
                    for (var o = r - 1; i && "<" !== i && "&" !== i; )
                      (i = U(t, r++)) &&
                        this.trackPosition &&
                        (this.position++,
                        "\n" === i
                          ? (this.line++, (this.column = 0))
                          : this.column++);
                    this.textNode += t.substring(o, r - 1);
                  }
                  "<" !== i || (this.sawRoot && this.closedRoot && !this.strict)
                    ? (d(i) ||
                        (this.sawRoot && !this.closedRoot) ||
                        T(this, "Text data outside of root node."),
                      "&" === i
                        ? (this.state = E.TEXT_ENTITY)
                        : (this.textNode += i))
                    : ((this.state = E.OPEN_WAKA),
                      (this.startTagPosition = this.position));
                  continue;
                case E.SCRIPT:
                  "<" === i
                    ? (this.state = E.SCRIPT_ENDING)
                    : (this.script += i);
                  continue;
                case E.SCRIPT_ENDING:
                  "/" === i
                    ? (this.state = E.CLOSE_TAG)
                    : ((this.script += "<" + i), (this.state = E.SCRIPT));
                  continue;
                case E.OPEN_WAKA:
                  if ("!" === i)
                    (this.state = E.SGML_DECL), (this.sgmlDecl = "");
                  else if (d(i));
                  else if (g(l, i))
                    (this.state = E.OPEN_TAG), (this.tagName = i);
                  else if ("/" === i)
                    (this.state = E.CLOSE_TAG), (this.tagName = "");
                  else if ("?" === i)
                    (this.state = E.PROC_INST),
                      (this.procInstName = this.procInstBody = "");
                  else {
                    if (
                      (T(this, "Unencoded <"),
                      this.startTagPosition + 1 < this.position)
                    ) {
                      var s = this.position - this.startTagPosition;
                      i = new Array(s).join(" ") + i;
                    }
                    (this.textNode += "<" + i), (this.state = E.TEXT);
                  }
                  continue;
                case E.SGML_DECL:
                  "[CDATA[" === (this.sgmlDecl + i).toUpperCase()
                    ? (S(this, "onopencdata"),
                      (this.state = E.CDATA),
                      (this.sgmlDecl = ""),
                      (this.cdata = ""))
                    : this.sgmlDecl + i === "--"
                    ? ((this.state = E.COMMENT),
                      (this.comment = ""),
                      (this.sgmlDecl = ""))
                    : "DOCTYPE" === (this.sgmlDecl + i).toUpperCase()
                    ? ((this.state = E.DOCTYPE),
                      (this.doctype || this.sawRoot) &&
                        T(this, "Inappropriately located doctype declaration"),
                      (this.doctype = ""),
                      (this.sgmlDecl = ""))
                    : ">" === i
                    ? (S(this, "onsgmldeclaration", this.sgmlDecl),
                      (this.sgmlDecl = ""),
                      (this.state = E.TEXT))
                    : p(i)
                    ? ((this.state = E.SGML_DECL_QUOTED), (this.sgmlDecl += i))
                    : (this.sgmlDecl += i);
                  continue;
                case E.SGML_DECL_QUOTED:
                  i === this.q && ((this.state = E.SGML_DECL), (this.q = "")),
                    (this.sgmlDecl += i);
                  continue;
                case E.DOCTYPE:
                  ">" === i
                    ? ((this.state = E.TEXT),
                      S(this, "ondoctype", this.doctype),
                      (this.doctype = !0))
                    : ((this.doctype += i),
                      "[" === i
                        ? (this.state = E.DOCTYPE_DTD)
                        : p(i) &&
                          ((this.state = E.DOCTYPE_QUOTED), (this.q = i)));
                  continue;
                case E.DOCTYPE_QUOTED:
                  (this.doctype += i),
                    i === this.q && ((this.q = ""), (this.state = E.DOCTYPE));
                  continue;
                case E.DOCTYPE_DTD:
                  (this.doctype += i),
                    "]" === i
                      ? (this.state = E.DOCTYPE)
                      : p(i) &&
                        ((this.state = E.DOCTYPE_DTD_QUOTED), (this.q = i));
                  continue;
                case E.DOCTYPE_DTD_QUOTED:
                  (this.doctype += i),
                    i === this.q &&
                      ((this.state = E.DOCTYPE_DTD), (this.q = ""));
                  continue;
                case E.COMMENT:
                  "-" === i
                    ? (this.state = E.COMMENT_ENDING)
                    : (this.comment += i);
                  continue;
                case E.COMMENT_ENDING:
                  "-" === i
                    ? ((this.state = E.COMMENT_ENDED),
                      (this.comment = C(this.opt, this.comment)),
                      this.comment && S(this, "oncomment", this.comment),
                      (this.comment = ""))
                    : ((this.comment += "-" + i), (this.state = E.COMMENT));
                  continue;
                case E.COMMENT_ENDED:
                  ">" !== i
                    ? (T(this, "Malformed comment"),
                      (this.comment += "--" + i),
                      (this.state = E.COMMENT))
                    : (this.state = E.TEXT);
                  continue;
                case E.CDATA:
                  "]" === i ? (this.state = E.CDATA_ENDING) : (this.cdata += i);
                  continue;
                case E.CDATA_ENDING:
                  "]" === i
                    ? (this.state = E.CDATA_ENDING_2)
                    : ((this.cdata += "]" + i), (this.state = E.CDATA));
                  continue;
                case E.CDATA_ENDING_2:
                  ">" === i
                    ? (this.cdata && S(this, "oncdata", this.cdata),
                      S(this, "onclosecdata"),
                      (this.cdata = ""),
                      (this.state = E.TEXT))
                    : "]" === i
                    ? (this.cdata += "]")
                    : ((this.cdata += "]]" + i), (this.state = E.CDATA));
                  continue;
                case E.PROC_INST:
                  "?" === i
                    ? (this.state = E.PROC_INST_ENDING)
                    : d(i)
                    ? (this.state = E.PROC_INST_BODY)
                    : (this.procInstName += i);
                  continue;
                case E.PROC_INST_BODY:
                  if (!this.procInstBody && d(i)) continue;
                  "?" === i
                    ? (this.state = E.PROC_INST_ENDING)
                    : (this.procInstBody += i);
                  continue;
                case E.PROC_INST_ENDING:
                  ">" === i
                    ? (S(this, "onprocessinginstruction", {
                        name: this.procInstName,
                        body: this.procInstBody,
                      }),
                      (this.procInstName = this.procInstBody = ""),
                      (this.state = E.TEXT))
                    : ((this.procInstBody += "?" + i),
                      (this.state = E.PROC_INST_BODY));
                  continue;
                case E.OPEN_TAG:
                  g(u, i)
                    ? (this.tagName += i)
                    : (x(this),
                      ">" === i
                        ? D(this)
                        : "/" === i
                        ? (this.state = E.OPEN_TAG_SLASH)
                        : (d(i) || T(this, "Invalid character in tag name"),
                          (this.state = E.ATTRIB)));
                  continue;
                case E.OPEN_TAG_SLASH:
                  ">" === i
                    ? (D(this, !0), P(this))
                    : (T(
                        this,
                        "Forward-slash in opening tag not followed by >"
                      ),
                      (this.state = E.ATTRIB));
                  continue;
                case E.ATTRIB:
                  if (d(i)) continue;
                  ">" === i
                    ? D(this)
                    : "/" === i
                    ? (this.state = E.OPEN_TAG_SLASH)
                    : g(l, i)
                    ? ((this.attribName = i),
                      (this.attribValue = ""),
                      (this.state = E.ATTRIB_NAME))
                    : T(this, "Invalid attribute name");
                  continue;
                case E.ATTRIB_NAME:
                  "=" === i
                    ? (this.state = E.ATTRIB_VALUE)
                    : ">" === i
                    ? (T(this, "Attribute without value"),
                      (this.attribValue = this.attribName),
                      N(this),
                      D(this))
                    : d(i)
                    ? (this.state = E.ATTRIB_NAME_SAW_WHITE)
                    : g(u, i)
                    ? (this.attribName += i)
                    : T(this, "Invalid attribute name");
                  continue;
                case E.ATTRIB_NAME_SAW_WHITE:
                  if ("=" === i) this.state = E.ATTRIB_VALUE;
                  else {
                    if (d(i)) continue;
                    T(this, "Attribute without value"),
                      (this.tag.attributes[this.attribName] = ""),
                      (this.attribValue = ""),
                      S(this, "onattribute", {
                        name: this.attribName,
                        value: "",
                      }),
                      (this.attribName = ""),
                      ">" === i
                        ? D(this)
                        : g(l, i)
                        ? ((this.attribName = i), (this.state = E.ATTRIB_NAME))
                        : (T(this, "Invalid attribute name"),
                          (this.state = E.ATTRIB));
                  }
                  continue;
                case E.ATTRIB_VALUE:
                  if (d(i)) continue;
                  p(i)
                    ? ((this.q = i), (this.state = E.ATTRIB_VALUE_QUOTED))
                    : (T(this, "Unquoted attribute value"),
                      (this.state = E.ATTRIB_VALUE_UNQUOTED),
                      (this.attribValue = i));
                  continue;
                case E.ATTRIB_VALUE_QUOTED:
                  if (i !== this.q) {
                    "&" === i
                      ? (this.state = E.ATTRIB_VALUE_ENTITY_Q)
                      : (this.attribValue += i);
                    continue;
                  }
                  N(this), (this.q = ""), (this.state = E.ATTRIB_VALUE_CLOSED);
                  continue;
                case E.ATTRIB_VALUE_CLOSED:
                  d(i)
                    ? (this.state = E.ATTRIB)
                    : ">" === i
                    ? D(this)
                    : "/" === i
                    ? (this.state = E.OPEN_TAG_SLASH)
                    : g(l, i)
                    ? (T(this, "No whitespace between attributes"),
                      (this.attribName = i),
                      (this.attribValue = ""),
                      (this.state = E.ATTRIB_NAME))
                    : T(this, "Invalid attribute name");
                  continue;
                case E.ATTRIB_VALUE_UNQUOTED:
                  if (!m(i)) {
                    "&" === i
                      ? (this.state = E.ATTRIB_VALUE_ENTITY_U)
                      : (this.attribValue += i);
                    continue;
                  }
                  N(this), ">" === i ? D(this) : (this.state = E.ATTRIB);
                  continue;
                case E.CLOSE_TAG:
                  if (this.tagName)
                    ">" === i
                      ? P(this)
                      : g(u, i)
                      ? (this.tagName += i)
                      : this.script
                      ? ((this.script += "</" + this.tagName),
                        (this.tagName = ""),
                        (this.state = E.SCRIPT))
                      : (d(i) || T(this, "Invalid tagname in closing tag"),
                        (this.state = E.CLOSE_TAG_SAW_WHITE));
                  else {
                    if (d(i)) continue;
                    v(l, i)
                      ? this.script
                        ? ((this.script += "</" + i), (this.state = E.SCRIPT))
                        : T(this, "Invalid tagname in closing tag.")
                      : (this.tagName = i);
                  }
                  continue;
                case E.CLOSE_TAG_SAW_WHITE:
                  if (d(i)) continue;
                  ">" === i
                    ? P(this)
                    : T(this, "Invalid characters in closing tag");
                  continue;
                case E.TEXT_ENTITY:
                case E.ATTRIB_VALUE_ENTITY_Q:
                case E.ATTRIB_VALUE_ENTITY_U:
                  var a, c;
                  switch (this.state) {
                    case E.TEXT_ENTITY:
                      (a = E.TEXT), (c = "textNode");
                      break;
                    case E.ATTRIB_VALUE_ENTITY_Q:
                      (a = E.ATTRIB_VALUE_QUOTED), (c = "attribValue");
                      break;
                    case E.ATTRIB_VALUE_ENTITY_U:
                      (a = E.ATTRIB_VALUE_UNQUOTED), (c = "attribValue");
                  }
                  ";" === i
                    ? ((this[c] += L(this)),
                      (this.entity = ""),
                      (this.state = a))
                    : g(this.entity.length ? f : h, i)
                    ? (this.entity += i)
                    : (T(this, "Invalid character in entity name"),
                      (this[c] += "&" + this.entity + i),
                      (this.entity = ""),
                      (this.state = a));
                  continue;
                default:
                  throw new Error(this, "Unknown state: " + this.state);
              }
            this.position >= this.bufferCheckPosition &&
              (function (t) {
                for (
                  var r = Math.max(e.MAX_BUFFER_LENGTH, 10),
                    i = 0,
                    o = 0,
                    s = n.length;
                  o < s;
                  o++
                ) {
                  var a = t[n[o]].length;
                  if (a > r)
                    switch (n[o]) {
                      case "textNode":
                        O(t);
                        break;
                      case "cdata":
                        S(t, "oncdata", t.cdata), (t.cdata = "");
                        break;
                      case "script":
                        S(t, "onscript", t.script), (t.script = "");
                        break;
                      default:
                        I(t, "Max buffer length exceeded: " + n[o]);
                    }
                  i = Math.max(i, a);
                }
                var c = e.MAX_BUFFER_LENGTH - i;
                t.bufferCheckPosition = c + t.position;
              })(this);
            return this;
          },
          /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */ resume:
            function () {
              return (this.error = null), this;
            },
          close: function () {
            return this.write(null);
          },
          flush: function () {
            var e;
            O((e = this)),
              "" !== e.cdata && (S(e, "oncdata", e.cdata), (e.cdata = "")),
              "" !== e.script && (S(e, "onscript", e.script), (e.script = ""));
          },
        });
      try {
        t = r(19).Stream;
      } catch (e) {
        t = function () {};
      }
      var o = e.EVENTS.filter(function (e) {
        return "error" !== e && "end" !== e;
      });
      function s(e, r) {
        if (!(this instanceof s)) return new s(e, r);
        t.apply(this),
          (this._parser = new i(e, r)),
          (this.writable = !0),
          (this.readable = !0);
        var n = this;
        (this._parser.onend = function () {
          n.emit("end");
        }),
          (this._parser.onerror = function (e) {
            n.emit("error", e), (n._parser.error = null);
          }),
          (this._decoder = null),
          o.forEach(function (e) {
            Object.defineProperty(n, "on" + e, {
              get: function () {
                return n._parser["on" + e];
              },
              set: function (t) {
                if (!t)
                  return n.removeAllListeners(e), (n._parser["on" + e] = t), t;
                n.on(e, t);
              },
              enumerable: !0,
              configurable: !1,
            });
          });
      }
      (s.prototype = Object.create(t.prototype, { constructor: { value: s } })),
        (s.prototype.write = function (e) {
          if (
            "function" == typeof Buffer &&
            "function" == typeof Buffer.isBuffer &&
            Buffer.isBuffer(e)
          ) {
            if (!this._decoder) {
              var t = r(242).StringDecoder;
              this._decoder = new t("utf8");
            }
            e = this._decoder.write(e);
          }
          return this._parser.write(e.toString()), this.emit("data", e), !0;
        }),
        (s.prototype.end = function (e) {
          return e && e.length && this.write(e), this._parser.end(), !0;
        }),
        (s.prototype.on = function (e, r) {
          var n = this;
          return (
            n._parser["on" + e] ||
              -1 === o.indexOf(e) ||
              (n._parser["on" + e] = function () {
                var t =
                  1 === arguments.length
                    ? [arguments[0]]
                    : Array.apply(null, arguments);
                t.splice(0, 0, e), n.emit.apply(n, t);
              }),
            t.prototype.on.call(n, e, r)
          );
        });
      var a = "http://www.w3.org/XML/1998/namespace",
        c = { xml: a, xmlns: "http://www.w3.org/2000/xmlns/" },
        l =
          /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        u =
          /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
        h =
          /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        f =
          /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function d(e) {
        return " " === e || "\n" === e || "\r" === e || "\t" === e;
      }
      function p(e) {
        return '"' === e || "'" === e;
      }
      function m(e) {
        return ">" === e || d(e);
      }
      function g(e, t) {
        return e.test(t);
      }
      function v(e, t) {
        return !g(e, t);
      }
      var y,
        w,
        b,
        E = 0;
      for (var _ in ((e.STATE = {
        BEGIN: E++,
        BEGIN_WHITESPACE: E++,
        TEXT: E++,
        TEXT_ENTITY: E++,
        OPEN_WAKA: E++,
        SGML_DECL: E++,
        SGML_DECL_QUOTED: E++,
        DOCTYPE: E++,
        DOCTYPE_QUOTED: E++,
        DOCTYPE_DTD: E++,
        DOCTYPE_DTD_QUOTED: E++,
        COMMENT_STARTING: E++,
        COMMENT: E++,
        COMMENT_ENDING: E++,
        COMMENT_ENDED: E++,
        CDATA: E++,
        CDATA_ENDING: E++,
        CDATA_ENDING_2: E++,
        PROC_INST: E++,
        PROC_INST_BODY: E++,
        PROC_INST_ENDING: E++,
        OPEN_TAG: E++,
        OPEN_TAG_SLASH: E++,
        ATTRIB: E++,
        ATTRIB_NAME: E++,
        ATTRIB_NAME_SAW_WHITE: E++,
        ATTRIB_VALUE: E++,
        ATTRIB_VALUE_QUOTED: E++,
        ATTRIB_VALUE_CLOSED: E++,
        ATTRIB_VALUE_UNQUOTED: E++,
        ATTRIB_VALUE_ENTITY_Q: E++,
        ATTRIB_VALUE_ENTITY_U: E++,
        CLOSE_TAG: E++,
        CLOSE_TAG_SAW_WHITE: E++,
        SCRIPT: E++,
        SCRIPT_ENDING: E++,
      }),
      (e.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" }),
      (e.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830,
      }),
      Object.keys(e.ENTITIES).forEach(function (t) {
        var r = e.ENTITIES[t],
          n = "number" == typeof r ? String.fromCharCode(r) : r;
        e.ENTITIES[t] = n;
      }),
      e.STATE))
        e.STATE[e.STATE[_]] = _;
      function A(e, t, r) {
        e[t] && e[t](r);
      }
      function S(e, t, r) {
        e.textNode && O(e), A(e, t, r);
      }
      function O(e) {
        (e.textNode = C(e.opt, e.textNode)),
          e.textNode && A(e, "ontext", e.textNode),
          (e.textNode = "");
      }
      function C(e, t) {
        return (
          e.trim && (t = t.trim()),
          e.normalize && (t = t.replace(/\s+/g, " ")),
          t
        );
      }
      function I(e, t) {
        return (
          O(e),
          e.trackPosition &&
            (t +=
              "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c),
          (t = new Error(t)),
          (e.error = t),
          A(e, "onerror", t),
          e
        );
      }
      function k(e) {
        return (
          e.sawRoot && !e.closedRoot && T(e, "Unclosed root tag"),
          e.state !== E.BEGIN &&
            e.state !== E.BEGIN_WHITESPACE &&
            e.state !== E.TEXT &&
            I(e, "Unexpected end"),
          O(e),
          (e.c = ""),
          (e.closed = !0),
          A(e, "onend"),
          i.call(e, e.strict, e.opt),
          e
        );
      }
      function T(e, t) {
        if ("object" != typeof e || !(e instanceof i))
          throw new Error("bad call to strictFail");
        e.strict && I(e, t);
      }
      function x(e) {
        e.strict || (e.tagName = e.tagName[e.looseCase]());
        var t = e.tags[e.tags.length - 1] || e,
          r = (e.tag = { name: e.tagName, attributes: {} });
        e.opt.xmlns && (r.ns = t.ns),
          (e.attribList.length = 0),
          S(e, "onopentagstart", r);
      }
      function R(e, t) {
        var r = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
          n = r[0],
          i = r[1];
        return (
          t && "xmlns" === e && ((n = "xmlns"), (i = "")),
          { prefix: n, local: i }
        );
      }
      function N(e) {
        if (
          (e.strict || (e.attribName = e.attribName[e.looseCase]()),
          -1 !== e.attribList.indexOf(e.attribName) ||
            e.tag.attributes.hasOwnProperty(e.attribName))
        )
          e.attribName = e.attribValue = "";
        else {
          if (e.opt.xmlns) {
            var t = R(e.attribName, !0),
              r = t.prefix,
              n = t.local;
            if ("xmlns" === r)
              if ("xml" === n && e.attribValue !== a)
                T(
                  e,
                  "xml: prefix must be bound to " +
                    a +
                    "\nActual: " +
                    e.attribValue
                );
              else if (
                "xmlns" === n &&
                "http://www.w3.org/2000/xmlns/" !== e.attribValue
              )
                T(
                  e,
                  "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " +
                    e.attribValue
                );
              else {
                var i = e.tag,
                  o = e.tags[e.tags.length - 1] || e;
                i.ns === o.ns && (i.ns = Object.create(o.ns)),
                  (i.ns[n] = e.attribValue);
              }
            e.attribList.push([e.attribName, e.attribValue]);
          } else
            (e.tag.attributes[e.attribName] = e.attribValue),
              S(e, "onattribute", { name: e.attribName, value: e.attribValue });
          e.attribName = e.attribValue = "";
        }
      }
      function D(e, t) {
        if (e.opt.xmlns) {
          var r = e.tag,
            n = R(e.tagName);
          (r.prefix = n.prefix),
            (r.local = n.local),
            (r.uri = r.ns[n.prefix] || ""),
            r.prefix &&
              !r.uri &&
              (T(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)),
              (r.uri = n.prefix));
          var i = e.tags[e.tags.length - 1] || e;
          r.ns &&
            i.ns !== r.ns &&
            Object.keys(r.ns).forEach(function (t) {
              S(e, "onopennamespace", { prefix: t, uri: r.ns[t] });
            });
          for (var o = 0, s = e.attribList.length; o < s; o++) {
            var a = e.attribList[o],
              c = a[0],
              l = a[1],
              u = R(c, !0),
              h = u.prefix,
              f = u.local,
              d = "" === h ? "" : r.ns[h] || "",
              p = { name: c, value: l, prefix: h, local: f, uri: d };
            h &&
              "xmlns" !== h &&
              !d &&
              (T(e, "Unbound namespace prefix: " + JSON.stringify(h)),
              (p.uri = h)),
              (e.tag.attributes[c] = p),
              S(e, "onattribute", p);
          }
          e.attribList.length = 0;
        }
        (e.tag.isSelfClosing = !!t),
          (e.sawRoot = !0),
          e.tags.push(e.tag),
          S(e, "onopentag", e.tag),
          t ||
            (e.noscript || "script" !== e.tagName.toLowerCase()
              ? (e.state = E.TEXT)
              : (e.state = E.SCRIPT),
            (e.tag = null),
            (e.tagName = "")),
          (e.attribName = e.attribValue = ""),
          (e.attribList.length = 0);
      }
      function P(e) {
        if (!e.tagName)
          return (
            T(e, "Weird empty close tag."),
            (e.textNode += "</>"),
            void (e.state = E.TEXT)
          );
        if (e.script) {
          if ("script" !== e.tagName)
            return (
              (e.script += "</" + e.tagName + ">"),
              (e.tagName = ""),
              void (e.state = E.SCRIPT)
            );
          S(e, "onscript", e.script), (e.script = "");
        }
        var t = e.tags.length,
          r = e.tagName;
        e.strict || (r = r[e.looseCase]());
        for (var n = r; t--; ) {
          if (e.tags[t].name === n) break;
          T(e, "Unexpected close tag");
        }
        if (t < 0)
          return (
            T(e, "Unmatched closing tag: " + e.tagName),
            (e.textNode += "</" + e.tagName + ">"),
            void (e.state = E.TEXT)
          );
        e.tagName = r;
        for (var i = e.tags.length; i-- > t; ) {
          var o = (e.tag = e.tags.pop());
          (e.tagName = e.tag.name), S(e, "onclosetag", e.tagName);
          var s = {};
          for (var a in o.ns) s[a] = o.ns[a];
          var c = e.tags[e.tags.length - 1] || e;
          e.opt.xmlns &&
            o.ns !== c.ns &&
            Object.keys(o.ns).forEach(function (t) {
              var r = o.ns[t];
              S(e, "onclosenamespace", { prefix: t, uri: r });
            });
        }
        0 === t && (e.closedRoot = !0),
          (e.tagName = e.attribValue = e.attribName = ""),
          (e.attribList.length = 0),
          (e.state = E.TEXT);
      }
      function L(e) {
        var t,
          r = e.entity,
          n = r.toLowerCase(),
          i = "";
        return e.ENTITIES[r]
          ? e.ENTITIES[r]
          : e.ENTITIES[n]
          ? e.ENTITIES[n]
          : ("#" === (r = n).charAt(0) &&
              ("x" === r.charAt(1)
                ? ((r = r.slice(2)), (i = (t = parseInt(r, 16)).toString(16)))
                : ((r = r.slice(1)), (i = (t = parseInt(r, 10)).toString(10)))),
            (r = r.replace(/^0+/, "")),
            isNaN(t) || i.toLowerCase() !== r
              ? (T(e, "Invalid character entity"), "&" + e.entity + ";")
              : String.fromCodePoint(t));
      }
      function F(e, t) {
        "<" === t
          ? ((e.state = E.OPEN_WAKA), (e.startTagPosition = e.position))
          : d(t) ||
            (T(e, "Non-whitespace before first tag."),
            (e.textNode = t),
            (e.state = E.TEXT));
      }
      function U(e, t) {
        var r = "";
        return t < e.length && (r = e.charAt(t)), r;
      }
      (E = e.STATE),
        String.fromCodePoint ||
          ((y = String.fromCharCode),
          (w = Math.floor),
          (b = function () {
            var e,
              t,
              r = 16384,
              n = [],
              i = -1,
              o = arguments.length;
            if (!o) return "";
            for (var s = ""; ++i < o; ) {
              var a = Number(arguments[i]);
              if (!isFinite(a) || a < 0 || a > 1114111 || w(a) !== a)
                throw RangeError("Invalid code point: " + a);
              a <= 65535
                ? n.push(a)
                : ((e = 55296 + ((a -= 65536) >> 10)),
                  (t = (a % 1024) + 56320),
                  n.push(e, t)),
                (i + 1 === o || n.length > r) &&
                  ((s += y.apply(null, n)), (n.length = 0));
            }
            return s;
          }),
          Object.defineProperty
            ? Object.defineProperty(String, "fromCodePoint", {
                value: b,
                configurable: !0,
                writable: !0,
              })
            : (String.fromCodePoint = b));
    })(t);
  },
  function (e, t) {
    e.exports = require("string_decoder");
  },
  function (e, t, r) {
    "use strict";
    const n = r(6),
      i = r(0),
      o = r(15).mkdirs,
      s = r(24).pathExists,
      a = r(124).utimesMillis,
      c = r(30);
    function l(e, t, r, n, a) {
      const c = i.dirname(r);
      s(c, (i, s) =>
        i
          ? a(i)
          : s
          ? h(e, t, r, n, a)
          : void o(c, (i) => (i ? a(i) : h(e, t, r, n, a)))
      );
    }
    function u(e, t, r, n, i, o) {
      Promise.resolve(i.filter(r, n)).then(
        (s) => (s ? e(t, r, n, i, o) : o()),
        (e) => o(e)
      );
    }
    function h(e, t, r, i, o) {
      (i.dereference ? n.stat : n.lstat)(t, (s, a) =>
        s
          ? o(s)
          : a.isDirectory()
          ? (function (e, t, r, i, o, s) {
              return t
                ? m(r, i, o, s)
                : (function (e, t, r, i, o) {
                    n.mkdir(r, (n) => {
                      if (n) return o(n);
                      m(t, r, i, (t) => (t ? o(t) : p(r, e, o)));
                    });
                  })(e.mode, r, i, o, s);
            })(a, e, t, r, i, o)
          : a.isFile() || a.isCharacterDevice() || a.isBlockDevice()
          ? (function (e, t, r, i, o, s) {
              return t
                ? (function (e, t, r, i, o) {
                    if (!i.overwrite)
                      return i.errorOnExist
                        ? o(new Error(`'${r}' already exists`))
                        : o();
                    n.unlink(r, (n) => (n ? o(n) : f(e, t, r, i, o)));
                  })(e, r, i, o, s)
                : f(e, r, i, o, s);
            })(a, e, t, r, i, o)
          : a.isSymbolicLink()
          ? v(e, t, r, i, o)
          : a.isSocket()
          ? o(new Error("Cannot copy a socket file: " + t))
          : a.isFIFO()
          ? o(new Error("Cannot copy a FIFO pipe: " + t))
          : o(new Error("Unknown file: " + t))
      );
    }
    function f(e, t, r, i, o) {
      n.copyFile(t, r, (n) =>
        n
          ? o(n)
          : i.preserveTimestamps
          ? (function (e, t, r, n) {
              if (
                (function (e) {
                  return 0 == (128 & e);
                })(e)
              )
                return (function (e, t, r) {
                  return p(e, 128 | t, r);
                })(r, e, (i) => (i ? n(i) : d(e, t, r, n)));
              return d(e, t, r, n);
            })(e.mode, t, r, o)
          : p(r, e.mode, o)
      );
    }
    function d(e, t, r, i) {
      !(function (e, t, r) {
        n.stat(e, (e, n) => (e ? r(e) : a(t, n.atime, n.mtime, r)));
      })(t, r, (t) => (t ? i(t) : p(r, e, i)));
    }
    function p(e, t, r) {
      return n.chmod(e, t, r);
    }
    function m(e, t, r, i) {
      n.readdir(e, (n, o) => (n ? i(n) : g(o, e, t, r, i)));
    }
    function g(e, t, r, n, o) {
      const s = e.pop();
      return s
        ? (function (e, t, r, n, o, s) {
            const a = i.join(r, t),
              l = i.join(n, t);
            c.checkPaths(a, l, "copy", o, (t, i) => {
              if (t) return s(t);
              const { destStat: c } = i;
              !(function (e, t, r, n, i) {
                n.filter ? u(h, e, t, r, n, i) : h(e, t, r, n, i);
              })(c, a, l, o, (t) => (t ? s(t) : g(e, r, n, o, s)));
            });
          })(e, s, t, r, n, o)
        : o();
    }
    function v(e, t, r, o, s) {
      n.readlink(t, (t, a) =>
        t
          ? s(t)
          : (o.dereference && (a = i.resolve(process.cwd(), a)),
            e
              ? void n.readlink(r, (t, l) =>
                  t
                    ? "EINVAL" === t.code || "UNKNOWN" === t.code
                      ? n.symlink(a, r, s)
                      : s(t)
                    : (o.dereference && (l = i.resolve(process.cwd(), l)),
                      c.isSrcSubdir(a, l)
                        ? s(
                            new Error(
                              `Cannot copy '${a}' to a subdirectory of itself, '${l}'.`
                            )
                          )
                        : e.isDirectory() && c.isSrcSubdir(l, a)
                        ? s(new Error(`Cannot overwrite '${l}' with '${a}'.`))
                        : (function (e, t, r) {
                            n.unlink(t, (i) => (i ? r(i) : n.symlink(e, t, r)));
                          })(a, r, s))
                )
              : n.symlink(a, r, s))
      );
    }
    e.exports = function (e, t, r, n) {
      "function" != typeof r || n
        ? "function" == typeof r && (r = { filter: r })
        : ((n = r), (r = {})),
        (n = n || function () {}),
        ((r = r || {}).clobber = !("clobber" in r) || !!r.clobber),
        (r.overwrite = "overwrite" in r ? !!r.overwrite : r.clobber),
        r.preserveTimestamps &&
          "ia32" === process.arch &&
          process.emitWarning(
            "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269",
            "Warning",
            "fs-extra-WARN0001"
          ),
        c.checkPaths(e, t, "copy", r, (i, o) => {
          if (i) return n(i);
          const { srcStat: s, destStat: a } = o;
          c.checkParentPaths(e, s, t, "copy", (i) =>
            i ? n(i) : r.filter ? u(l, a, e, t, r, n) : l(a, e, t, r, n)
          );
        });
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(29),
      { checkPath: i } = r(245),
      o = (e) => ("number" == typeof e ? e : { mode: 511, ...e }.mode);
    (e.exports.makeDir = async (e, t) => (
      i(e), n.mkdir(e, { mode: o(t), recursive: !0 })
    )),
      (e.exports.makeDirSync = (e, t) => (
        i(e), n.mkdirSync(e, { mode: o(t), recursive: !0 })
      ));
  },
  function (e, t, r) {
    "use strict";
    const n = r(0);
    e.exports.checkPath = function (e) {
      if ("win32" === process.platform) {
        if (/[<>:"|?*]/.test(e.replace(n.parse(e).root, ""))) {
          const t = new Error("Path contains invalid characters: " + e);
          throw ((t.code = "EINVAL"), t);
        }
      }
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(6),
      i = r(0),
      o = r(15).mkdirsSync,
      s = r(124).utimesMillisSync,
      a = r(30);
    function c(e, t, r, o) {
      const s = (o.dereference ? n.statSync : n.lstatSync)(t);
      if (s.isDirectory())
        return (function (e, t, r, i, o) {
          return t
            ? h(r, i, o)
            : (function (e, t, r, i) {
                return n.mkdirSync(r), h(t, r, i), u(r, e);
              })(e.mode, r, i, o);
        })(s, e, t, r, o);
      if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice())
        return (function (e, t, r, i, o) {
          return t
            ? (function (e, t, r, i) {
                if (i.overwrite) return n.unlinkSync(r), l(e, t, r, i);
                if (i.errorOnExist) throw new Error(`'${r}' already exists`);
              })(e, r, i, o)
            : l(e, r, i, o);
        })(s, e, t, r, o);
      if (s.isSymbolicLink())
        return (function (e, t, r, o) {
          let s = n.readlinkSync(t);
          o.dereference && (s = i.resolve(process.cwd(), s));
          if (e) {
            let e;
            try {
              e = n.readlinkSync(r);
            } catch (e) {
              if ("EINVAL" === e.code || "UNKNOWN" === e.code)
                return n.symlinkSync(s, r);
              throw e;
            }
            if (
              (o.dereference && (e = i.resolve(process.cwd(), e)),
              a.isSrcSubdir(s, e))
            )
              throw new Error(
                `Cannot copy '${s}' to a subdirectory of itself, '${e}'.`
              );
            if (n.statSync(r).isDirectory() && a.isSrcSubdir(e, s))
              throw new Error(`Cannot overwrite '${e}' with '${s}'.`);
            return (function (e, t) {
              return n.unlinkSync(t), n.symlinkSync(e, t);
            })(s, r);
          }
          return n.symlinkSync(s, r);
        })(e, t, r, o);
      if (s.isSocket()) throw new Error("Cannot copy a socket file: " + t);
      if (s.isFIFO()) throw new Error("Cannot copy a FIFO pipe: " + t);
      throw new Error("Unknown file: " + t);
    }
    function l(e, t, r, i) {
      return (
        n.copyFileSync(t, r),
        i.preserveTimestamps &&
          (function (e, t, r) {
            (function (e) {
              return 0 == (128 & e);
            })(e) &&
              (function (e, t) {
                u(e, 128 | t);
              })(r, e);
            (function (e, t) {
              const r = n.statSync(e);
              s(t, r.atime, r.mtime);
            })(t, r);
          })(e.mode, t, r),
        u(r, e.mode)
      );
    }
    function u(e, t) {
      return n.chmodSync(e, t);
    }
    function h(e, t, r) {
      n.readdirSync(e).forEach((n) =>
        (function (e, t, r, n) {
          const o = i.join(t, e),
            s = i.join(r, e),
            { destStat: l } = a.checkPathsSync(o, s, "copy", n);
          return (function (e, t, r, n) {
            if (!n.filter || n.filter(t, r)) return c(e, t, r, n);
          })(l, o, s, n);
        })(n, e, t, r)
      );
    }
    e.exports = function (e, t, r) {
      "function" == typeof r && (r = { filter: r }),
        ((r = r || {}).clobber = !("clobber" in r) || !!r.clobber),
        (r.overwrite = "overwrite" in r ? !!r.overwrite : r.clobber),
        r.preserveTimestamps &&
          "ia32" === process.arch &&
          process.emitWarning(
            "Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269",
            "Warning",
            "fs-extra-WARN0002"
          );
      const { srcStat: s, destStat: l } = a.checkPathsSync(e, t, "copy", r);
      return (
        a.checkParentPathsSync(e, s, t, "copy"),
        (function (e, t, r, s) {
          if (s.filter && !s.filter(t, r)) return;
          const a = i.dirname(r);
          n.existsSync(a) || o(a);
          return c(e, t, r, s);
        })(l, e, t, r)
      );
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromPromise,
      i = r(29),
      o = r(0),
      s = r(15),
      a = r(50),
      c = n(async function (e) {
        let t;
        try {
          t = await i.readdir(e);
        } catch {
          return s.mkdirs(e);
        }
        return Promise.all(t.map((t) => a.remove(o.join(e, t))));
      });
    function l(e) {
      let t;
      try {
        t = i.readdirSync(e);
      } catch {
        return s.mkdirsSync(e);
      }
      t.forEach((t) => {
        (t = o.join(e, t)), a.removeSync(t);
      });
    }
    e.exports = { emptyDirSync: l, emptydirSync: l, emptyDir: c, emptydir: c };
  },
  function (e, t, r) {
    "use strict";
    const n = r(6),
      i = r(0),
      o = r(33),
      s = "win32" === process.platform;
    function a(e) {
      ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((t) => {
        (e[t] = e[t] || n[t]), (e[(t += "Sync")] = e[t] || n[t]);
      }),
        (e.maxBusyTries = e.maxBusyTries || 3);
    }
    function c(e, t, r) {
      let n = 0;
      "function" == typeof t && ((r = t), (t = {})),
        o(e, "rimraf: missing path"),
        o.strictEqual(typeof e, "string", "rimraf: path should be a string"),
        o.strictEqual(
          typeof r,
          "function",
          "rimraf: callback function required"
        ),
        o(t, "rimraf: invalid options argument provided"),
        o.strictEqual(typeof t, "object", "rimraf: options should be object"),
        a(t),
        l(e, t, function i(o) {
          if (o) {
            if (
              ("EBUSY" === o.code ||
                "ENOTEMPTY" === o.code ||
                "EPERM" === o.code) &&
              n < t.maxBusyTries
            ) {
              n++;
              return setTimeout(() => l(e, t, i), 100 * n);
            }
            "ENOENT" === o.code && (o = null);
          }
          r(o);
        });
    }
    function l(e, t, r) {
      o(e),
        o(t),
        o("function" == typeof r),
        t.lstat(e, (n, i) =>
          n && "ENOENT" === n.code
            ? r(null)
            : n && "EPERM" === n.code && s
            ? u(e, t, n, r)
            : i && i.isDirectory()
            ? f(e, t, n, r)
            : void t.unlink(e, (n) => {
                if (n) {
                  if ("ENOENT" === n.code) return r(null);
                  if ("EPERM" === n.code)
                    return s ? u(e, t, n, r) : f(e, t, n, r);
                  if ("EISDIR" === n.code) return f(e, t, n, r);
                }
                return r(n);
              })
        );
    }
    function u(e, t, r, n) {
      o(e),
        o(t),
        o("function" == typeof n),
        t.chmod(e, 438, (i) => {
          i
            ? n("ENOENT" === i.code ? null : r)
            : t.stat(e, (i, o) => {
                i
                  ? n("ENOENT" === i.code ? null : r)
                  : o.isDirectory()
                  ? f(e, t, r, n)
                  : t.unlink(e, n);
              });
        });
    }
    function h(e, t, r) {
      let n;
      o(e), o(t);
      try {
        t.chmodSync(e, 438);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw r;
      }
      try {
        n = t.statSync(e);
      } catch (e) {
        if ("ENOENT" === e.code) return;
        throw r;
      }
      n.isDirectory() ? p(e, t, r) : t.unlinkSync(e);
    }
    function f(e, t, r, n) {
      o(e),
        o(t),
        o("function" == typeof n),
        t.rmdir(e, (s) => {
          !s ||
          ("ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code)
            ? s && "ENOTDIR" === s.code
              ? n(r)
              : n(s)
            : (function (e, t, r) {
                o(e),
                  o(t),
                  o("function" == typeof r),
                  t.readdir(e, (n, o) => {
                    if (n) return r(n);
                    let s,
                      a = o.length;
                    if (0 === a) return t.rmdir(e, r);
                    o.forEach((n) => {
                      c(i.join(e, n), t, (n) => {
                        if (!s)
                          return n
                            ? r((s = n))
                            : void (0 == --a && t.rmdir(e, r));
                      });
                    });
                  });
              })(e, t, n);
        });
    }
    function d(e, t) {
      let r;
      a((t = t || {})),
        o(e, "rimraf: missing path"),
        o.strictEqual(typeof e, "string", "rimraf: path should be a string"),
        o(t, "rimraf: missing options"),
        o.strictEqual(typeof t, "object", "rimraf: options should be object");
      try {
        r = t.lstatSync(e);
      } catch (r) {
        if ("ENOENT" === r.code) return;
        "EPERM" === r.code && s && h(e, t, r);
      }
      try {
        r && r.isDirectory() ? p(e, t, null) : t.unlinkSync(e);
      } catch (r) {
        if ("ENOENT" === r.code) return;
        if ("EPERM" === r.code) return s ? h(e, t, r) : p(e, t, r);
        if ("EISDIR" !== r.code) throw r;
        p(e, t, r);
      }
    }
    function p(e, t, r) {
      o(e), o(t);
      try {
        t.rmdirSync(e);
      } catch (n) {
        if ("ENOTDIR" === n.code) throw r;
        if ("ENOTEMPTY" === n.code || "EEXIST" === n.code || "EPERM" === n.code)
          !(function (e, t) {
            if (
              (o(e),
              o(t),
              t.readdirSync(e).forEach((r) => d(i.join(e, r), t)),
              !s)
            ) {
              return t.rmdirSync(e, t);
            }
            {
              const r = Date.now();
              do {
                try {
                  return t.rmdirSync(e, t);
                } catch {}
              } while (Date.now() - r < 500);
            }
          })(e, t);
        else if ("ENOENT" !== n.code) throw n;
      }
    }
    (e.exports = c), (c.sync = d);
  },
  function (e, t, r) {
    "use strict";
    const { createFile: n, createFileSync: i } = r(250),
      { createLink: o, createLinkSync: s } = r(251),
      { createSymlink: a, createSymlinkSync: c } = r(252);
    e.exports = {
      createFile: n,
      createFileSync: i,
      ensureFile: n,
      ensureFileSync: i,
      createLink: o,
      createLinkSync: s,
      ensureLink: o,
      ensureLinkSync: s,
      createSymlink: a,
      createSymlinkSync: c,
      ensureSymlink: a,
      ensureSymlinkSync: c,
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromCallback,
      i = r(0),
      o = r(6),
      s = r(15);
    e.exports = {
      createFile: n(function (e, t) {
        function r() {
          o.writeFile(e, "", (e) => {
            if (e) return t(e);
            t();
          });
        }
        o.stat(e, (n, a) => {
          if (!n && a.isFile()) return t();
          const c = i.dirname(e);
          o.stat(c, (e, n) => {
            if (e)
              return "ENOENT" === e.code
                ? s.mkdirs(c, (e) => {
                    if (e) return t(e);
                    r();
                  })
                : t(e);
            n.isDirectory()
              ? r()
              : o.readdir(c, (e) => {
                  if (e) return t(e);
                });
          });
        });
      }),
      createFileSync: function (e) {
        let t;
        try {
          t = o.statSync(e);
        } catch {}
        if (t && t.isFile()) return;
        const r = i.dirname(e);
        try {
          o.statSync(r).isDirectory() || o.readdirSync(r);
        } catch (e) {
          if (!e || "ENOENT" !== e.code) throw e;
          s.mkdirsSync(r);
        }
        o.writeFileSync(e, "");
      },
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromCallback,
      i = r(0),
      o = r(6),
      s = r(15),
      a = r(24).pathExists,
      { areIdentical: c } = r(30);
    e.exports = {
      createLink: n(function (e, t, r) {
        function n(e, t) {
          o.link(e, t, (e) => {
            if (e) return r(e);
            r(null);
          });
        }
        o.lstat(t, (l, u) => {
          o.lstat(e, (o, l) => {
            if (o)
              return (
                (o.message = o.message.replace("lstat", "ensureLink")), r(o)
              );
            if (u && c(l, u)) return r(null);
            const h = i.dirname(t);
            a(h, (i, o) =>
              i
                ? r(i)
                : o
                ? n(e, t)
                : void s.mkdirs(h, (i) => {
                    if (i) return r(i);
                    n(e, t);
                  })
            );
          });
        });
      }),
      createLinkSync: function (e, t) {
        let r;
        try {
          r = o.lstatSync(t);
        } catch {}
        try {
          const t = o.lstatSync(e);
          if (r && c(t, r)) return;
        } catch (e) {
          throw ((e.message = e.message.replace("lstat", "ensureLink")), e);
        }
        const n = i.dirname(t);
        return o.existsSync(n) || s.mkdirsSync(n), o.linkSync(e, t);
      },
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromCallback,
      i = r(0),
      o = r(29),
      s = r(15),
      a = s.mkdirs,
      c = s.mkdirsSync,
      l = r(253),
      u = l.symlinkPaths,
      h = l.symlinkPathsSync,
      f = r(254),
      d = f.symlinkType,
      p = f.symlinkTypeSync,
      m = r(24).pathExists,
      { areIdentical: g } = r(30);
    function v(e, t, r, n) {
      u(e, t, (s, c) => {
        if (s) return n(s);
        (e = c.toDst),
          d(c.toCwd, r, (r, s) => {
            if (r) return n(r);
            const c = i.dirname(t);
            m(c, (r, i) =>
              r
                ? n(r)
                : i
                ? o.symlink(e, t, s, n)
                : void a(c, (r) => {
                    if (r) return n(r);
                    o.symlink(e, t, s, n);
                  })
            );
          });
      });
    }
    e.exports = {
      createSymlink: n(function (e, t, r, n) {
        (n = "function" == typeof r ? r : n),
          (r = "function" != typeof r && r),
          o.lstat(t, (i, s) => {
            !i && s.isSymbolicLink()
              ? Promise.all([o.stat(e), o.stat(t)]).then(([i, o]) => {
                  if (g(i, o)) return n(null);
                  v(e, t, r, n);
                })
              : v(e, t, r, n);
          });
      }),
      createSymlinkSync: function (e, t, r) {
        let n;
        try {
          n = o.lstatSync(t);
        } catch {}
        if (n && n.isSymbolicLink()) {
          const r = o.statSync(e),
            n = o.statSync(t);
          if (g(r, n)) return;
        }
        const s = h(e, t);
        (e = s.toDst), (r = p(s.toCwd, r));
        const a = i.dirname(t);
        return o.existsSync(a) || c(a), o.symlinkSync(e, t, r);
      },
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(0),
      i = r(6),
      o = r(24).pathExists;
    e.exports = {
      symlinkPaths: function (e, t, r) {
        if (n.isAbsolute(e))
          return i.lstat(e, (t) =>
            t
              ? ((t.message = t.message.replace("lstat", "ensureSymlink")),
                r(t))
              : r(null, { toCwd: e, toDst: e })
          );
        {
          const s = n.dirname(t),
            a = n.join(s, e);
          return o(a, (t, o) =>
            t
              ? r(t)
              : o
              ? r(null, { toCwd: a, toDst: e })
              : i.lstat(e, (t) =>
                  t
                    ? ((t.message = t.message.replace(
                        "lstat",
                        "ensureSymlink"
                      )),
                      r(t))
                    : r(null, { toCwd: e, toDst: n.relative(s, e) })
                )
          );
        }
      },
      symlinkPathsSync: function (e, t) {
        let r;
        if (n.isAbsolute(e)) {
          if (((r = i.existsSync(e)), !r))
            throw new Error("absolute srcpath does not exist");
          return { toCwd: e, toDst: e };
        }
        {
          const o = n.dirname(t),
            s = n.join(o, e);
          if (((r = i.existsSync(s)), r)) return { toCwd: s, toDst: e };
          if (((r = i.existsSync(e)), !r))
            throw new Error("relative srcpath does not exist");
          return { toCwd: e, toDst: n.relative(o, e) };
        }
      },
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(6);
    e.exports = {
      symlinkType: function (e, t, r) {
        if (
          ((r = "function" == typeof t ? t : r),
          (t = "function" != typeof t && t))
        )
          return r(null, t);
        n.lstat(e, (e, n) => {
          if (e) return r(null, "file");
          (t = n && n.isDirectory() ? "dir" : "file"), r(null, t);
        });
      },
      symlinkTypeSync: function (e, t) {
        let r;
        if (t) return t;
        try {
          r = n.lstatSync(e);
        } catch {
          return "file";
        }
        return r && r.isDirectory() ? "dir" : "file";
      },
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromPromise,
      i = r(256);
    (i.outputJson = n(r(258))),
      (i.outputJsonSync = r(259)),
      (i.outputJSON = i.outputJson),
      (i.outputJSONSync = i.outputJsonSync),
      (i.writeJSON = i.writeJson),
      (i.writeJSONSync = i.writeJsonSync),
      (i.readJSON = i.readJson),
      (i.readJSONSync = i.readJsonSync),
      (e.exports = i);
  },
  function (e, t, r) {
    "use strict";
    const n = r(257);
    e.exports = {
      readJson: n.readFile,
      readJsonSync: n.readFileSync,
      writeJson: n.writeFile,
      writeJsonSync: n.writeFileSync,
    };
  },
  function (e, t, r) {
    let n;
    try {
      n = r(6);
    } catch (e) {
      n = r(1);
    }
    const i = r(8),
      { stringify: o, stripBom: s } = r(71);
    const a = {
      readFile: i.fromPromise(async function (e, t = {}) {
        "string" == typeof t && (t = { encoding: t });
        const r = t.fs || n,
          o = !("throws" in t) || t.throws;
        let a,
          c = await i.fromCallback(r.readFile)(e, t);
        c = s(c);
        try {
          a = JSON.parse(c, t ? t.reviver : null);
        } catch (t) {
          if (o) throw ((t.message = `${e}: ${t.message}`), t);
          return null;
        }
        return a;
      }),
      readFileSync: function (e, t = {}) {
        "string" == typeof t && (t = { encoding: t });
        const r = t.fs || n,
          i = !("throws" in t) || t.throws;
        try {
          let n = r.readFileSync(e, t);
          return (n = s(n)), JSON.parse(n, t.reviver);
        } catch (t) {
          if (i) throw ((t.message = `${e}: ${t.message}`), t);
          return null;
        }
      },
      writeFile: i.fromPromise(async function (e, t, r = {}) {
        const s = r.fs || n,
          a = o(t, r);
        await i.fromCallback(s.writeFile)(e, a, r);
      }),
      writeFileSync: function (e, t, r = {}) {
        const i = r.fs || n,
          s = o(t, r);
        return i.writeFileSync(e, s, r);
      },
    };
    e.exports = a;
  },
  function (e, t, r) {
    "use strict";
    const { stringify: n } = r(71),
      { outputFile: i } = r(72);
    e.exports = async function (e, t, r = {}) {
      const o = n(t, r);
      await i(e, o, r);
    };
  },
  function (e, t, r) {
    "use strict";
    const { stringify: n } = r(71),
      { outputFileSync: i } = r(72);
    e.exports = function (e, t, r) {
      const o = n(t, r);
      i(e, o, r);
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(8).fromCallback;
    e.exports = { move: n(r(261)), moveSync: r(262) };
  },
  function (e, t, r) {
    "use strict";
    const n = r(6),
      i = r(0),
      o = r(70).copy,
      s = r(50).remove,
      a = r(15).mkdirp,
      c = r(24).pathExists,
      l = r(30);
    function u(e, t, r, n, i) {
      return n
        ? h(e, t, r, i)
        : r
        ? s(t, (n) => (n ? i(n) : h(e, t, r, i)))
        : void c(t, (n, o) =>
            n ? i(n) : o ? i(new Error("dest already exists.")) : h(e, t, r, i)
          );
    }
    function h(e, t, r, i) {
      n.rename(e, t, (n) =>
        n
          ? "EXDEV" !== n.code
            ? i(n)
            : (function (e, t, r, n) {
                o(e, t, { overwrite: r, errorOnExist: !0 }, (t) =>
                  t ? n(t) : s(e, n)
                );
              })(e, t, r, i)
          : i()
      );
    }
    e.exports = function (e, t, r, n) {
      "function" == typeof r && ((n = r), (r = {}));
      const o = (r = r || {}).overwrite || r.clobber || !1;
      l.checkPaths(e, t, "move", r, (r, s) => {
        if (r) return n(r);
        const { srcStat: c, isChangingCase: h = !1 } = s;
        l.checkParentPaths(e, c, t, "move", (r) =>
          r
            ? n(r)
            : (function (e) {
                const t = i.dirname(e);
                return i.parse(t).root === t;
              })(t)
            ? u(e, t, o, h, n)
            : void a(i.dirname(t), (r) => (r ? n(r) : u(e, t, o, h, n)))
        );
      });
    };
  },
  function (e, t, r) {
    "use strict";
    const n = r(6),
      i = r(0),
      o = r(70).copySync,
      s = r(50).removeSync,
      a = r(15).mkdirpSync,
      c = r(30);
    function l(e, t, r) {
      try {
        n.renameSync(e, t);
      } catch (n) {
        if ("EXDEV" !== n.code) throw n;
        return (function (e, t, r) {
          return o(e, t, { overwrite: r, errorOnExist: true }), s(e);
        })(e, t, r);
      }
    }
    e.exports = function (e, t, r) {
      const o = (r = r || {}).overwrite || r.clobber || !1,
        { srcStat: u, isChangingCase: h = !1 } = c.checkPathsSync(
          e,
          t,
          "move",
          r
        );
      return (
        c.checkParentPathsSync(e, u, t, "move"),
        (function (e) {
          const t = i.dirname(e);
          return i.parse(t).root === t;
        })(t) || a(i.dirname(t)),
        (function (e, t, r, i) {
          if (i) return l(e, t, r);
          if (r) return s(t), l(e, t, r);
          if (n.existsSync(t)) throw new Error("dest already exists.");
          return l(e, t, r);
        })(e, t, o, h)
      );
    };
  },
  function (e, t) {
    e.exports = require("fs/promises");
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Lazy = void 0);
    t.Lazy = class {
      constructor(e) {
        (this._value = null), (this.creator = e);
      }
      get hasValue() {
        return null == this.creator;
      }
      get value() {
        if (null == this.creator) return this._value;
        const e = this.creator();
        return (this.value = e), e;
      }
      set value(e) {
        (this._value = e), (this.creator = null);
      }
    };
  },
  function (e, t, r) {
    const n = r(31);
    e.exports = (e, t) => {
      const r = n(e, t);
      return r ? r.version : null;
    };
  },
  function (e, t, r) {
    const n = r(31);
    e.exports = (e, t) => {
      const r = n(e.trim().replace(/^[=v]+/, ""), t);
      return r ? r.version : null;
    };
  },
  function (e, t, r) {
    const n = r(7);
    e.exports = (e, t, r, i, o) => {
      "string" == typeof r && ((o = i), (i = r), (r = void 0));
      try {
        return new n(e instanceof n ? e.version : e, r).inc(t, i, o).version;
      } catch (e) {
        return null;
      }
    };
  },
  function (e, t, r) {
    const n = r(31);
    e.exports = (e, t) => {
      const r = n(e, null, !0),
        i = n(t, null, !0),
        o = r.compare(i);
      if (0 === o) return null;
      const s = o > 0,
        a = s ? i : r,
        c = !!(s ? r : i).prerelease.length,
        l = c ? "pre" : "";
      return r.major !== i.major
        ? l + "major"
        : r.minor !== i.minor
        ? l + "minor"
        : r.patch !== i.patch
        ? l + "patch"
        : c
        ? "prerelease"
        : a.patch
        ? "patch"
        : a.minor
        ? "minor"
        : "major";
    };
  },
  function (e, t, r) {
    const n = r(7);
    e.exports = (e, t) => new n(e, t).major;
  },
  function (e, t, r) {
    const n = r(7);
    e.exports = (e, t) => new n(e, t).minor;
  },
  function (e, t, r) {
    const n = r(7);
    e.exports = (e, t) => new n(e, t).patch;
  },
  function (e, t, r) {
    const n = r(31);
    e.exports = (e, t) => {
      const r = n(e, t);
      return r && r.prerelease.length ? r.prerelease : null;
    };
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t, r) => n(t, e, r);
  },
  function (e, t, r) {
    const n = r(12);
    e.exports = (e, t) => n(e, t, !0);
  },
  function (e, t, r) {
    const n = r(75);
    e.exports = (e, t) => e.sort((e, r) => n(e, r, t));
  },
  function (e, t, r) {
    const n = r(75);
    e.exports = (e, t) => e.sort((e, r) => n(r, e, t));
  },
  function (e, t, r) {
    const n = r(7),
      i = r(31),
      { re: o, t: s } = r(37);
    e.exports = (e, t) => {
      if (e instanceof n) return e;
      if (("number" == typeof e && (e = String(e)), "string" != typeof e))
        return null;
      let r = null;
      if ((t = t || {}).rtl) {
        let t;
        for (
          ;
          (t = o[s.COERCERTL].exec(e)) &&
          (!r || r.index + r[0].length !== e.length);

        )
          (r && t.index + t[0].length === r.index + r[0].length) || (r = t),
            (o[s.COERCERTL].lastIndex = t.index + t[1].length + t[2].length);
        o[s.COERCERTL].lastIndex = -1;
      } else r = e.match(o[s.COERCE]);
      return null === r ? null : i(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t);
    };
  },
  function (e, t, r) {
    const n = r(13);
    e.exports = (e, t) =>
      new n(e, t).set.map((e) =>
        e
          .map((e) => e.value)
          .join(" ")
          .trim()
          .split(" ")
      );
  },
  function (e, t, r) {
    const n = r(7),
      i = r(13);
    e.exports = (e, t, r) => {
      let o = null,
        s = null,
        a = null;
      try {
        a = new i(t, r);
      } catch (e) {
        return null;
      }
      return (
        e.forEach((e) => {
          a.test(e) &&
            ((o && -1 !== s.compare(e)) || ((o = e), (s = new n(o, r))));
        }),
        o
      );
    };
  },
  function (e, t, r) {
    const n = r(7),
      i = r(13);
    e.exports = (e, t, r) => {
      let o = null,
        s = null,
        a = null;
      try {
        a = new i(t, r);
      } catch (e) {
        return null;
      }
      return (
        e.forEach((e) => {
          a.test(e) &&
            ((o && 1 !== s.compare(e)) || ((o = e), (s = new n(o, r))));
        }),
        o
      );
    };
  },
  function (e, t, r) {
    const n = r(7),
      i = r(13),
      o = r(53);
    e.exports = (e, t) => {
      e = new i(e, t);
      let r = new n("0.0.0");
      if (e.test(r)) return r;
      if (((r = new n("0.0.0-0")), e.test(r))) return r;
      r = null;
      for (let t = 0; t < e.set.length; ++t) {
        const i = e.set[t];
        let s = null;
        i.forEach((e) => {
          const t = new n(e.semver.version);
          switch (e.operator) {
            case ">":
              0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                (t.raw = t.format());
            case "":
            case ">=":
              (s && !o(t, s)) || (s = t);
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error("Unexpected operation: " + e.operator);
          }
        }),
          !s || (r && !o(r, s)) || (r = s);
      }
      return r && e.test(r) ? r : null;
    };
  },
  function (e, t, r) {
    const n = r(13);
    e.exports = (e, t) => {
      try {
        return new n(e, t).range || "*";
      } catch (e) {
        return null;
      }
    };
  },
  function (e, t, r) {
    const n = r(79);
    e.exports = (e, t, r) => n(e, t, ">", r);
  },
  function (e, t, r) {
    const n = r(79);
    e.exports = (e, t, r) => n(e, t, "<", r);
  },
  function (e, t, r) {
    const n = r(13);
    e.exports = (e, t, r) => (
      (e = new n(e, r)), (t = new n(t, r)), e.intersects(t, r)
    );
  },
  function (e, t, r) {
    const n = r(55),
      i = r(12);
    e.exports = (e, t, r) => {
      const o = [];
      let s = null,
        a = null;
      const c = e.sort((e, t) => i(e, t, r));
      for (const e of c) {
        n(e, t, r)
          ? ((a = e), s || (s = e))
          : (a && o.push([s, a]), (a = null), (s = null));
      }
      s && o.push([s, null]);
      const l = [];
      for (const [e, t] of o)
        e === t
          ? l.push(e)
          : t || e !== c[0]
          ? t
            ? e === c[0]
              ? l.push("<=" + t)
              : l.push(`${e} - ${t}`)
            : l.push(">=" + e)
          : l.push("*");
      const u = l.join(" || "),
        h = "string" == typeof t.raw ? t.raw : String(t);
      return u.length < h.length ? u : t;
    };
  },
  function (e, t, r) {
    const n = r(13),
      i = r(54),
      { ANY: o } = i,
      s = r(55),
      a = r(12),
      c = [new i(">=0.0.0-0")],
      l = [new i(">=0.0.0")],
      u = (e, t, r) => {
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === o) {
          if (1 === t.length && t[0].semver === o) return !0;
          e = r.includePrerelease ? c : l;
        }
        if (1 === t.length && t[0].semver === o) {
          if (r.includePrerelease) return !0;
          t = l;
        }
        const n = new Set();
        let i, u, d, p, m, g, v;
        for (const t of e)
          ">" === t.operator || ">=" === t.operator
            ? (i = h(i, t, r))
            : "<" === t.operator || "<=" === t.operator
            ? (u = f(u, t, r))
            : n.add(t.semver);
        if (n.size > 1) return null;
        if (i && u) {
          if (((d = a(i.semver, u.semver, r)), d > 0)) return null;
          if (0 === d && (">=" !== i.operator || "<=" !== u.operator))
            return null;
        }
        for (const e of n) {
          if (i && !s(e, String(i), r)) return null;
          if (u && !s(e, String(u), r)) return null;
          for (const n of t) if (!s(e, String(n), r)) return !1;
          return !0;
        }
        let y =
            !(!u || r.includePrerelease || !u.semver.prerelease.length) &&
            u.semver,
          w =
            !(!i || r.includePrerelease || !i.semver.prerelease.length) &&
            i.semver;
        y &&
          1 === y.prerelease.length &&
          "<" === u.operator &&
          0 === y.prerelease[0] &&
          (y = !1);
        for (const e of t) {
          if (
            ((v = v || ">" === e.operator || ">=" === e.operator),
            (g = g || "<" === e.operator || "<=" === e.operator),
            i)
          )
            if (
              (w &&
                e.semver.prerelease &&
                e.semver.prerelease.length &&
                e.semver.major === w.major &&
                e.semver.minor === w.minor &&
                e.semver.patch === w.patch &&
                (w = !1),
              ">" === e.operator || ">=" === e.operator)
            ) {
              if (((p = h(i, e, r)), p === e && p !== i)) return !1;
            } else if (">=" === i.operator && !s(i.semver, String(e), r))
              return !1;
          if (u)
            if (
              (y &&
                e.semver.prerelease &&
                e.semver.prerelease.length &&
                e.semver.major === y.major &&
                e.semver.minor === y.minor &&
                e.semver.patch === y.patch &&
                (y = !1),
              "<" === e.operator || "<=" === e.operator)
            ) {
              if (((m = f(u, e, r)), m === e && m !== u)) return !1;
            } else if ("<=" === u.operator && !s(u.semver, String(e), r))
              return !1;
          if (!e.operator && (u || i) && 0 !== d) return !1;
        }
        return (
          !(i && g && !u && 0 !== d) && !(u && v && !i && 0 !== d) && !w && !y
        );
      },
      h = (e, t, r) => {
        if (!e) return t;
        const n = a(e.semver, t.semver, r);
        return n > 0
          ? e
          : n < 0 || (">" === t.operator && ">=" === e.operator)
          ? t
          : e;
      },
      f = (e, t, r) => {
        if (!e) return t;
        const n = a(e.semver, t.semver, r);
        return n < 0
          ? e
          : n > 0 || ("<" === t.operator && "<=" === e.operator)
          ? t
          : e;
      };
    e.exports = (e, t, r = {}) => {
      if (e === t) return !0;
      (e = new n(e, r)), (t = new n(t, r));
      let i = !1;
      e: for (const n of e.set) {
        for (const e of t.set) {
          const t = u(n, e, r);
          if (((i = i || null !== t), t)) continue e;
        }
        if (i) return !1;
      }
      return !0;
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createTempUpdateFile = t.DownloadedUpdateHelper = void 0);
    const n = r(49),
      i = r(1),
      o = r(289),
      s = r(23),
      a = r(0);
    (t.DownloadedUpdateHelper = class {
      constructor(e) {
        (this.cacheDir = e),
          (this._file = null),
          (this._packageFile = null),
          (this.versionInfo = null),
          (this.fileInfo = null),
          (this._downloadedFileInfo = null);
      }
      get downloadedFileInfo() {
        return this._downloadedFileInfo;
      }
      get file() {
        return this._file;
      }
      get packageFile() {
        return this._packageFile;
      }
      get cacheDirForPendingUpdate() {
        return a.join(this.cacheDir, "pending");
      }
      async validateDownloadedPath(e, t, r, n) {
        if (
          null != this.versionInfo &&
          this.file === e &&
          null != this.fileInfo
        )
          return o(this.versionInfo, t) &&
            o(this.fileInfo.info, r.info) &&
            (await s.pathExists(e))
            ? e
            : null;
        const i = await this.getValidCachedUpdateFile(r, n);
        return null === i
          ? null
          : (n.info(`Update has already been downloaded to ${e}).`),
            (this._file = i),
            i);
      }
      async setDownloadedFile(e, t, r, n, i, o) {
        (this._file = e),
          (this._packageFile = t),
          (this.versionInfo = r),
          (this.fileInfo = n),
          (this._downloadedFileInfo = {
            fileName: i,
            sha512: n.info.sha512,
            isAdminRightsRequired: !0 === n.info.isAdminRightsRequired,
          }),
          o &&
            (await s.outputJson(
              this.getUpdateInfoFile(),
              this._downloadedFileInfo
            ));
      }
      async clear() {
        (this._file = null),
          (this._packageFile = null),
          (this.versionInfo = null),
          (this.fileInfo = null),
          await this.cleanCacheDirForPendingUpdate();
      }
      async cleanCacheDirForPendingUpdate() {
        try {
          await s.emptyDir(this.cacheDirForPendingUpdate);
        } catch (e) {}
      }
      async getValidCachedUpdateFile(e, t) {
        var r;
        const o = this.getUpdateInfoFile();
        if (!(await s.pathExists(o))) return null;
        let c;
        try {
          c = await s.readJson(o);
        } catch (e) {
          let r = "No cached update info available";
          return (
            "ENOENT" !== e.code &&
              (await this.cleanCacheDirForPendingUpdate(),
              (r += ` (error on read: ${e.message})`)),
            t.info(r),
            null
          );
        }
        if (
          !(
            null !== (r = null !== (null == c ? void 0 : c.fileName)) &&
            void 0 !== r &&
            r
          )
        )
          return (
            t.warn(
              "Cached update info is corrupted: no fileName, directory for cached update will be cleaned"
            ),
            await this.cleanCacheDirForPendingUpdate(),
            null
          );
        if (e.info.sha512 !== c.sha512)
          return (
            t.info(
              `Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${c.sha512}, expected: ${e.info.sha512}. Directory for cached update will be cleaned`
            ),
            await this.cleanCacheDirForPendingUpdate(),
            null
          );
        const l = a.join(this.cacheDirForPendingUpdate, c.fileName);
        if (!(await s.pathExists(l)))
          return t.info("Cached update file doesn't exist"), null;
        const u = await (function (e, t = "sha512", r = "base64", o) {
          return new Promise((s, a) => {
            const c = n.createHash(t);
            c.on("error", a).setEncoding(r),
              i
                .createReadStream(e, { ...o, highWaterMark: 1048576 })
                .on("error", a)
                .on("end", () => {
                  c.end(), s(c.read());
                })
                .pipe(c, { end: !1 });
          });
        })(l);
        return e.info.sha512 !== u
          ? (t.warn(
              `Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${u}, expected: ${e.info.sha512}`
            ),
            await this.cleanCacheDirForPendingUpdate(),
            null)
          : ((this._downloadedFileInfo = c), l);
      }
      getUpdateInfoFile() {
        return a.join(this.cacheDirForPendingUpdate, "update-info.json");
      }
    }),
      (t.createTempUpdateFile = async function (e, t, r) {
        let n = 0,
          i = a.join(t, e);
        for (let o = 0; o < 3; o++)
          try {
            return await s.unlink(i), i;
          } catch (o) {
            if ("ENOENT" === o.code) return i;
            r.warn("Error on remove temp update file: " + o),
              (i = a.join(t, `${n++}-${e}`));
          }
        return i;
      });
  },
  function (e, t, r) {
    (function (e) {
      var r = "[object Arguments]",
        n = "[object Map]",
        i = "[object Object]",
        o = "[object Set]",
        s = /^\[object .+?Constructor\]$/,
        a = /^(?:0|[1-9]\d*)$/,
        c = {};
      (c["[object Float32Array]"] =
        c["[object Float64Array]"] =
        c["[object Int8Array]"] =
        c["[object Int16Array]"] =
        c["[object Int32Array]"] =
        c["[object Uint8Array]"] =
        c["[object Uint8ClampedArray]"] =
        c["[object Uint16Array]"] =
        c["[object Uint32Array]"] =
          !0),
        (c[r] =
          c["[object Array]"] =
          c["[object ArrayBuffer]"] =
          c["[object Boolean]"] =
          c["[object DataView]"] =
          c["[object Date]"] =
          c["[object Error]"] =
          c["[object Function]"] =
          c[n] =
          c["[object Number]"] =
          c[i] =
          c["[object RegExp]"] =
          c[o] =
          c["[object String]"] =
          c["[object WeakMap]"] =
            !1);
      var l =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global,
        u = "object" == typeof self && self && self.Object === Object && self,
        h = l || u || Function("return this")(),
        f = t && !t.nodeType && t,
        d = f && "object" == typeof e && e && !e.nodeType && e,
        p = d && d.exports === f,
        m = p && l.process,
        g = (function () {
          try {
            return m && m.binding && m.binding("util");
          } catch (e) {}
        })(),
        v = g && g.isTypedArray;
      function y(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      function w(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, n) {
            r[++t] = [n, e];
          }),
          r
        );
      }
      function b(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var E,
        _,
        A,
        S = Array.prototype,
        O = Function.prototype,
        C = Object.prototype,
        I = h["__core-js_shared__"],
        k = O.toString,
        T = C.hasOwnProperty,
        x = (E = /[^.]+$/.exec((I && I.keys && I.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + E
          : "",
        R = C.toString,
        N = RegExp(
          "^" +
            k
              .call(T)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        D = p ? h.Buffer : void 0,
        P = h.Symbol,
        L = h.Uint8Array,
        F = C.propertyIsEnumerable,
        U = S.splice,
        j = P ? P.toStringTag : void 0,
        B = Object.getOwnPropertySymbols,
        M = D ? D.isBuffer : void 0,
        $ =
          ((_ = Object.keys),
          (A = Object),
          function (e) {
            return _(A(e));
          }),
        z = ge(h, "DataView"),
        G = ge(h, "Map"),
        q = ge(h, "Promise"),
        H = ge(h, "Set"),
        W = ge(h, "WeakMap"),
        V = ge(Object, "create"),
        Y = be(z),
        X = be(G),
        Q = be(q),
        J = be(H),
        K = be(W),
        Z = P ? P.prototype : void 0,
        ee = Z ? Z.valueOf : void 0;
      function te(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function re(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function ne(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function ie(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new ne(); ++t < r; ) this.add(e[t]);
      }
      function oe(e) {
        var t = (this.__data__ = new re(e));
        this.size = t.size;
      }
      function se(e, t) {
        var r = Ae(e),
          n = !r && _e(e),
          i = !r && !n && Se(e),
          o = !r && !n && !i && Te(e),
          s = r || n || i || o,
          a = s
            ? (function (e, t) {
                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                return n;
              })(e.length, String)
            : [],
          c = a.length;
        for (var l in e)
          (!t && !T.call(e, l)) ||
            (s &&
              ("length" == l ||
                (i && ("offset" == l || "parent" == l)) ||
                (o &&
                  ("buffer" == l || "byteLength" == l || "byteOffset" == l)) ||
                we(l, c))) ||
            a.push(l);
        return a;
      }
      function ae(e, t) {
        for (var r = e.length; r--; ) if (Ee(e[r][0], t)) return r;
        return -1;
      }
      function ce(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : j && j in Object(e)
          ? (function (e) {
              var t = T.call(e, j),
                r = e[j];
              try {
                e[j] = void 0;
                var n = !0;
              } catch (e) {}
              var i = R.call(e);
              n && (t ? (e[j] = r) : delete e[j]);
              return i;
            })(e)
          : (function (e) {
              return R.call(e);
            })(e);
      }
      function le(e) {
        return ke(e) && ce(e) == r;
      }
      function ue(e, t, s, a, c) {
        return (
          e === t ||
          (null == e || null == t || (!ke(e) && !ke(t))
            ? e != e && t != t
            : (function (e, t, s, a, c, l) {
                var u = Ae(e),
                  h = Ae(t),
                  f = u ? "[object Array]" : ye(e),
                  d = h ? "[object Array]" : ye(t),
                  p = (f = f == r ? i : f) == i,
                  m = (d = d == r ? i : d) == i,
                  g = f == d;
                if (g && Se(e)) {
                  if (!Se(t)) return !1;
                  (u = !0), (p = !1);
                }
                if (g && !p)
                  return (
                    l || (l = new oe()),
                    u || Te(e)
                      ? de(e, t, s, a, c, l)
                      : (function (e, t, r, i, s, a, c) {
                          switch (r) {
                            case "[object DataView]":
                              if (
                                e.byteLength != t.byteLength ||
                                e.byteOffset != t.byteOffset
                              )
                                return !1;
                              (e = e.buffer), (t = t.buffer);
                            case "[object ArrayBuffer]":
                              return !(
                                e.byteLength != t.byteLength ||
                                !a(new L(e), new L(t))
                              );
                            case "[object Boolean]":
                            case "[object Date]":
                            case "[object Number]":
                              return Ee(+e, +t);
                            case "[object Error]":
                              return e.name == t.name && e.message == t.message;
                            case "[object RegExp]":
                            case "[object String]":
                              return e == t + "";
                            case n:
                              var l = w;
                            case o:
                              var u = 1 & i;
                              if ((l || (l = b), e.size != t.size && !u))
                                return !1;
                              var h = c.get(e);
                              if (h) return h == t;
                              (i |= 2), c.set(e, t);
                              var f = de(l(e), l(t), i, s, a, c);
                              return c.delete(e), f;
                            case "[object Symbol]":
                              if (ee) return ee.call(e) == ee.call(t);
                          }
                          return !1;
                        })(e, t, f, s, a, c, l)
                  );
                if (!(1 & s)) {
                  var v = p && T.call(e, "__wrapped__"),
                    y = m && T.call(t, "__wrapped__");
                  if (v || y) {
                    var E = v ? e.value() : e,
                      _ = y ? t.value() : t;
                    return l || (l = new oe()), c(E, _, s, a, l);
                  }
                }
                if (!g) return !1;
                return (
                  l || (l = new oe()),
                  (function (e, t, r, n, i, o) {
                    var s = 1 & r,
                      a = pe(e),
                      c = a.length,
                      l = pe(t).length;
                    if (c != l && !s) return !1;
                    var u = c;
                    for (; u--; ) {
                      var h = a[u];
                      if (!(s ? h in t : T.call(t, h))) return !1;
                    }
                    var f = o.get(e);
                    if (f && o.get(t)) return f == t;
                    var d = !0;
                    o.set(e, t), o.set(t, e);
                    var p = s;
                    for (; ++u < c; ) {
                      h = a[u];
                      var m = e[h],
                        g = t[h];
                      if (n)
                        var v = s ? n(g, m, h, t, e, o) : n(m, g, h, e, t, o);
                      if (!(void 0 === v ? m === g || i(m, g, r, n, o) : v)) {
                        d = !1;
                        break;
                      }
                      p || (p = "constructor" == h);
                    }
                    if (d && !p) {
                      var y = e.constructor,
                        w = t.constructor;
                      y == w ||
                        !("constructor" in e) ||
                        !("constructor" in t) ||
                        ("function" == typeof y &&
                          y instanceof y &&
                          "function" == typeof w &&
                          w instanceof w) ||
                        (d = !1);
                    }
                    return o.delete(e), o.delete(t), d;
                  })(e, t, s, a, c, l)
                );
              })(e, t, s, a, ue, c))
        );
      }
      function he(e) {
        return (
          !(
            !Ie(e) ||
            (function (e) {
              return !!x && x in e;
            })(e)
          ) && (Oe(e) ? N : s).test(be(e))
        );
      }
      function fe(e) {
        if (
          ((r = (t = e) && t.constructor),
          (n = ("function" == typeof r && r.prototype) || C),
          t !== n)
        )
          return $(e);
        var t,
          r,
          n,
          i = [];
        for (var o in Object(e))
          T.call(e, o) && "constructor" != o && i.push(o);
        return i;
      }
      function de(e, t, r, n, i, o) {
        var s = 1 & r,
          a = e.length,
          c = t.length;
        if (a != c && !(s && c > a)) return !1;
        var l = o.get(e);
        if (l && o.get(t)) return l == t;
        var u = -1,
          h = !0,
          f = 2 & r ? new ie() : void 0;
        for (o.set(e, t), o.set(t, e); ++u < a; ) {
          var d = e[u],
            p = t[u];
          if (n) var m = s ? n(p, d, u, t, e, o) : n(d, p, u, e, t, o);
          if (void 0 !== m) {
            if (m) continue;
            h = !1;
            break;
          }
          if (f) {
            if (
              !y(t, function (e, t) {
                if (((s = t), !f.has(s) && (d === e || i(d, e, r, n, o))))
                  return f.push(t);
                var s;
              })
            ) {
              h = !1;
              break;
            }
          } else if (d !== p && !i(d, p, r, n, o)) {
            h = !1;
            break;
          }
        }
        return o.delete(e), o.delete(t), h;
      }
      function pe(e) {
        return (function (e, t, r) {
          var n = t(e);
          return Ae(e)
            ? n
            : (function (e, t) {
                for (var r = -1, n = t.length, i = e.length; ++r < n; )
                  e[i + r] = t[r];
                return e;
              })(n, r(e));
        })(e, xe, ve);
      }
      function me(e, t) {
        var r,
          n,
          i = e.__data__;
        return (
          "string" == (n = typeof (r = t)) ||
          "number" == n ||
          "symbol" == n ||
          "boolean" == n
            ? "__proto__" !== r
            : null === r
        )
          ? i["string" == typeof t ? "string" : "hash"]
          : i.map;
      }
      function ge(e, t) {
        var r = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return he(r) ? r : void 0;
      }
      (te.prototype.clear = function () {
        (this.__data__ = V ? V(null) : {}), (this.size = 0);
      }),
        (te.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (te.prototype.get = function (e) {
          var t = this.__data__;
          if (V) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r;
          }
          return T.call(t, e) ? t[e] : void 0;
        }),
        (te.prototype.has = function (e) {
          var t = this.__data__;
          return V ? void 0 !== t[e] : T.call(t, e);
        }),
        (te.prototype.set = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = V && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        }),
        (re.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (re.prototype.delete = function (e) {
          var t = this.__data__,
            r = ae(t, e);
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : U.call(t, r, 1), --this.size, !0)
          );
        }),
        (re.prototype.get = function (e) {
          var t = this.__data__,
            r = ae(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (re.prototype.has = function (e) {
          return ae(this.__data__, e) > -1;
        }),
        (re.prototype.set = function (e, t) {
          var r = this.__data__,
            n = ae(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        }),
        (ne.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new te(),
              map: new (G || re)(),
              string: new te(),
            });
        }),
        (ne.prototype.delete = function (e) {
          var t = me(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (ne.prototype.get = function (e) {
          return me(this, e).get(e);
        }),
        (ne.prototype.has = function (e) {
          return me(this, e).has(e);
        }),
        (ne.prototype.set = function (e, t) {
          var r = me(this, e),
            n = r.size;
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        }),
        (ie.prototype.add = ie.prototype.push =
          function (e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"), this;
          }),
        (ie.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (oe.prototype.clear = function () {
          (this.__data__ = new re()), (this.size = 0);
        }),
        (oe.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (oe.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (oe.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (oe.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof re) {
            var n = r.__data__;
            if (!G || n.length < 199)
              return n.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new ne(n);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var ve = B
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  (function (e, t) {
                    for (
                      var r = -1, n = null == e ? 0 : e.length, i = 0, o = [];
                      ++r < n;

                    ) {
                      var s = e[r];
                      t(s, r, e) && (o[i++] = s);
                    }
                    return o;
                  })(B(e), function (t) {
                    return F.call(e, t);
                  }));
            }
          : function () {
              return [];
            },
        ye = ce;
      function we(e, t) {
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == typeof e || a.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function be(e) {
        if (null != e) {
          try {
            return k.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function Ee(e, t) {
        return e === t || (e != e && t != t);
      }
      ((z && "[object DataView]" != ye(new z(new ArrayBuffer(1)))) ||
        (G && ye(new G()) != n) ||
        (q && "[object Promise]" != ye(q.resolve())) ||
        (H && ye(new H()) != o) ||
        (W && "[object WeakMap]" != ye(new W()))) &&
        (ye = function (e) {
          var t = ce(e),
            r = t == i ? e.constructor : void 0,
            s = r ? be(r) : "";
          if (s)
            switch (s) {
              case Y:
                return "[object DataView]";
              case X:
                return n;
              case Q:
                return "[object Promise]";
              case J:
                return o;
              case K:
                return "[object WeakMap]";
            }
          return t;
        });
      var _e = le(
          (function () {
            return arguments;
          })()
        )
          ? le
          : function (e) {
              return ke(e) && T.call(e, "callee") && !F.call(e, "callee");
            },
        Ae = Array.isArray;
      var Se =
        M ||
        function () {
          return !1;
        };
      function Oe(e) {
        if (!Ie(e)) return !1;
        var t = ce(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      }
      function Ce(e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      }
      function Ie(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function ke(e) {
        return null != e && "object" == typeof e;
      }
      var Te = v
        ? (function (e) {
            return function (t) {
              return e(t);
            };
          })(v)
        : function (e) {
            return ke(e) && Ce(e.length) && !!c[ce(e)];
          };
      function xe(e) {
        return null != (t = e) && Ce(t.length) && !Oe(t) ? se(e) : fe(e);
        var t;
      }
      e.exports = function (e, t) {
        return ue(e, t);
      };
    }).call(this, r(290)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ElectronAppAdapter = void 0);
    const n = r(0),
      i = r(292);
    t.ElectronAppAdapter = class {
      constructor(e = r(4).app) {
        this.app = e;
      }
      whenReady() {
        return this.app.whenReady();
      }
      get version() {
        return this.app.getVersion();
      }
      get name() {
        return this.app.getName();
      }
      get isPackaged() {
        return !0 === this.app.isPackaged;
      }
      get appUpdateConfigPath() {
        return this.isPackaged
          ? n.join(process.resourcesPath, "app-update.yml")
          : n.join(this.app.getAppPath(), "dev-app-update.yml");
      }
      get userDataPath() {
        return this.app.getPath("userData");
      }
      get baseCachePath() {
        return i.getAppCacheDir();
      }
      quit() {
        this.app.quit();
      }
      onQuit(e) {
        this.app.once("quit", (t, r) => e(r));
      }
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getAppCacheDir = void 0);
    const n = r(0),
      i = r(22);
    t.getAppCacheDir = function () {
      const e = i.homedir();
      let t;
      return (
        (t =
          "win32" === process.platform
            ? process.env.LOCALAPPDATA || n.join(e, "AppData", "Local")
            : "darwin" === process.platform
            ? n.join(e, "Library", "Application Support", "Caches")
            : process.env.XDG_CACHE_HOME || n.join(e, ".cache")),
        t
      );
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ElectronHttpExecutor = t.getNetSession = t.NET_SESSION_NAME = void 0);
    const n = r(3);
    function i() {
      return r(4).session.fromPartition(t.NET_SESSION_NAME, { cache: !1 });
    }
    (t.NET_SESSION_NAME = "electron-updater"), (t.getNetSession = i);
    class o extends n.HttpExecutor {
      constructor(e) {
        super(), (this.proxyLoginCallback = e), (this.cachedSession = null);
      }
      async download(e, t, r) {
        return await r.cancellationToken.createPromise((i, o, s) => {
          const a = { headers: r.headers || void 0, redirect: "manual" };
          n.configureRequestUrl(e, a),
            n.configureRequestOptions(a),
            this.doDownload(
              a,
              {
                destination: t,
                options: r,
                onCancel: s,
                callback: (e) => {
                  null == e ? i(t) : o(e);
                },
                responseHandler: null,
              },
              0
            );
        });
      }
      createRequest(e, t) {
        e.headers &&
          e.headers.Host &&
          ((e.host = e.headers.Host), delete e.headers.Host),
          null == this.cachedSession && (this.cachedSession = i());
        const n = r(4).net.request({ ...e, session: this.cachedSession });
        return (
          n.on("response", t),
          null != this.proxyLoginCallback &&
            n.on("login", this.proxyLoginCallback),
          n
        );
      }
      addRedirectHandlers(e, t, r, i, o) {
        e.on("redirect", (s, a, c) => {
          e.abort(),
            i > this.maxRedirects
              ? r(this.createMaxRedirectError())
              : o(n.HttpExecutor.prepareRedirectUrlOptions(c, t));
        });
      }
    }
    t.ElectronHttpExecutor = o;
  },
  function (e, t) {
    var r = /[\\^$.*+?()[\]{}|]/g,
      n = RegExp(r.source),
      i =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global,
      o = "object" == typeof self && self && self.Object === Object && self,
      s = i || o || Function("return this")(),
      a = Object.prototype.toString,
      c = s.Symbol,
      l = c ? c.prototype : void 0,
      u = l ? l.toString : void 0;
    function h(e) {
      if ("string" == typeof e) return e;
      if (
        (function (e) {
          return (
            "symbol" == typeof e ||
            ((function (e) {
              return !!e && "object" == typeof e;
            })(e) &&
              "[object Symbol]" == a.call(e))
          );
        })(e)
      )
        return u ? u.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    e.exports = function (e) {
      var t;
      return (e = null == (t = e) ? "" : h(t)) && n.test(e)
        ? e.replace(r, "\\$&")
        : e;
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createClient = t.isUrlProbablySupportMultiRangeRequests = void 0);
    const n = r(3),
      i = r(296),
      o = r(298),
      s = r(130),
      a = r(131),
      c = r(299),
      l = r(300);
    function u(e) {
      return !e.includes("s3.amazonaws.com");
    }
    (t.isUrlProbablySupportMultiRangeRequests = u),
      (t.createClient = function (e, t, r) {
        if ("string" == typeof e)
          throw n.newError(
            "Please pass PublishConfiguration object",
            "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION"
          );
        const h = e.provider;
        switch (h) {
          case "github": {
            const n = e,
              i =
                (n.private
                  ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN
                  : null) || n.token;
            return null == i
              ? new a.GitHubProvider(n, t, r)
              : new l.PrivateGitHubProvider(n, t, i, r);
          }
          case "bitbucket":
            return new o.BitbucketProvider(e, t, r);
          case "keygen":
            return new c.KeygenProvider(e, t, r);
          case "s3":
          case "spaces":
            return new s.GenericProvider(
              {
                provider: "generic",
                url: n.getS3LikeProviderBaseUrl(e),
                channel: e.channel || null,
              },
              t,
              { ...r, isUseMultipleRangeRequest: !1 }
            );
          case "generic": {
            const n = e;
            return new s.GenericProvider(n, t, {
              ...r,
              isUseMultipleRangeRequest:
                !1 !== n.useMultipleRangeRequest && u(n.url),
            });
          }
          case "bintray":
            return new i.BintrayProvider(e, r);
          case "custom": {
            const i = e,
              o = i.updateProvider;
            if (!o)
              throw n.newError(
                "Custom provider not specified",
                "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION"
              );
            return new o(i, t, r);
          }
          default:
            throw n.newError(
              "Unsupported provider: " + h,
              "ERR_UPDATER_UNSUPPORTED_PROVIDER"
            );
        }
      });
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BintrayProvider = void 0);
    const n = r(3),
      i = r(297),
      o = r(17),
      s = r(21),
      a = r(16);
    class c extends a.Provider {
      constructor(e, t) {
        super(t),
          (this.client = new i.BintrayClient(
            e,
            t.executor,
            new n.CancellationToken()
          )),
          (this.baseUrl = s.newBaseUrl(
            `https://dl.bintray.com/${this.client.owner}/${this.client.repo}`
          ));
      }
      setRequestHeaders(e) {
        super.setRequestHeaders(e), this.client.setRequestHeaders(e);
      }
      async getLatestVersion() {
        try {
          const e = await this.client.getVersion("_latest"),
            t = s.getChannelFilename(this.getDefaultChannelName()),
            r = await this.client.getVersionFiles(e.name),
            i = r.find(
              (e) => e.name.endsWith("_" + t) || e.name.endsWith("-" + t)
            );
          if (null == i)
            throw n.newError(
              `Cannot find channel file "${t}", existing files:\n${r
                .map((e) => JSON.stringify(e, null, 2))
                .join(",\n")}`,
              "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND"
            );
          const c = new o.URL(
            `https://dl.bintray.com/${this.client.owner}/${this.client.repo}/${i.name}`
          );
          return a.parseUpdateInfo(await this.httpRequest(c), t, c);
        } catch (e) {
          if ("statusCode" in e && 404 === e.statusCode)
            throw n.newError(
              "No latest version, please ensure that user, package and repository correctly configured. Or at least one version is published. " +
                (e.stack || e.message),
              "ERR_UPDATER_LATEST_VERSION_NOT_FOUND"
            );
          throw e;
        }
      }
      resolveFiles(e) {
        return a.resolveFiles(e, this.baseUrl);
      }
    }
    t.BintrayProvider = c;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BintrayClient = void 0);
    const n = r(120);
    t.BintrayClient = class {
      constructor(e, t, r, n) {
        if (
          ((this.httpExecutor = t),
          (this.cancellationToken = r),
          (this.requestHeaders = null),
          null == e.owner)
        )
          throw new Error("owner is not specified");
        if (null == e.package) throw new Error("package is not specified");
        (this.repo = e.repo || "generic"),
          (this.packageName = e.package),
          (this.owner = e.owner),
          (this.user = e.user || e.owner),
          (this.component = e.component || null),
          (this.distribution = e.distribution || "stable"),
          (this.auth =
            null == n
              ? null
              : "Basic " + Buffer.from(`${this.user}:${n}`).toString("base64")),
          (this.basePath = `/packages/${this.owner}/${this.repo}/${this.packageName}`);
      }
      setRequestHeaders(e) {
        this.requestHeaders = e;
      }
      bintrayRequest(e, t, r = null, i, o) {
        return n.parseJson(
          this.httpExecutor.request(
            n.configureRequestOptions(
              {
                hostname: "api.bintray.com",
                path: e,
                headers: this.requestHeaders || void 0,
              },
              t,
              o
            ),
            i,
            r
          )
        );
      }
      getVersion(e) {
        return this.bintrayRequest(
          `${this.basePath}/versions/${e}`,
          this.auth,
          null,
          this.cancellationToken
        );
      }
      getVersionFiles(e) {
        return this.bintrayRequest(
          `${this.basePath}/versions/${e}/files`,
          this.auth,
          null,
          this.cancellationToken
        );
      }
      createVersion(e) {
        return this.bintrayRequest(
          this.basePath + "/versions",
          this.auth,
          { name: e },
          this.cancellationToken
        );
      }
      deleteVersion(e) {
        return this.bintrayRequest(
          `${this.basePath}/versions/${e}`,
          this.auth,
          null,
          this.cancellationToken,
          "DELETE"
        );
      }
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BitbucketProvider = void 0);
    const n = r(3),
      i = r(21),
      o = r(16);
    class s extends o.Provider {
      constructor(e, t, r) {
        super({ ...r, isUseMultipleRangeRequest: !1 }),
          (this.configuration = e),
          (this.updater = t);
        const { owner: n, slug: o } = e;
        this.baseUrl = i.newBaseUrl(
          `https://api.bitbucket.org/2.0/repositories/${n}/${o}/downloads`
        );
      }
      get channel() {
        return this.updater.channel || this.configuration.channel || "latest";
      }
      async getLatestVersion() {
        const e = new n.CancellationToken(),
          t = i.getChannelFilename(this.getCustomChannelName(this.channel)),
          r = i.newUrlFromBase(t, this.baseUrl, this.updater.isAddNoCacheQuery);
        try {
          const n = await this.httpRequest(r, void 0, e);
          return o.parseUpdateInfo(n, t, r);
        } catch (e) {
          throw n.newError(
            `Unable to find latest version on ${this.toString()}, please ensure release exists: ${
              e.stack || e.message
            }`,
            "ERR_UPDATER_LATEST_VERSION_NOT_FOUND"
          );
        }
      }
      resolveFiles(e) {
        return o.resolveFiles(e, this.baseUrl);
      }
      toString() {
        const { owner: e, slug: t } = this.configuration;
        return `Bitbucket (owner: ${e}, slug: ${t}, channel: ${this.channel})`;
      }
    }
    t.BitbucketProvider = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.KeygenProvider = void 0);
    const n = r(3),
      i = r(21),
      o = r(16);
    class s extends o.Provider {
      constructor(e, t, r) {
        super({ ...r, isUseMultipleRangeRequest: !1 }),
          (this.configuration = e),
          (this.updater = t),
          (this.baseUrl = i.newBaseUrl(
            `https://api.keygen.sh/v1/accounts/${this.configuration.account}/artifacts`
          ));
      }
      get channel() {
        return this.updater.channel || this.configuration.channel || "stable";
      }
      async getLatestVersion() {
        const e = new n.CancellationToken(),
          t = i.getChannelFilename(this.getCustomChannelName(this.channel)),
          r = i.newUrlFromBase(t, this.baseUrl, this.updater.isAddNoCacheQuery);
        try {
          const n = await this.httpRequest(
            r,
            { Accept: "application/vnd.api+json" },
            e
          );
          return o.parseUpdateInfo(n, t, r);
        } catch (e) {
          throw n.newError(
            `Unable to find latest version on ${this.toString()}, please ensure release exists: ${
              e.stack || e.message
            }`,
            "ERR_UPDATER_LATEST_VERSION_NOT_FOUND"
          );
        }
      }
      resolveFiles(e) {
        return o.resolveFiles(e, this.baseUrl);
      }
      toString() {
        const { account: e, product: t, platform: r } = this.configuration;
        return `Keygen (account: ${e}, product: ${t}, platform: ${r}, channel: ${this.channel})`;
      }
    }
    t.KeygenProvider = s;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.PrivateGitHubProvider = void 0);
    const n = r(3),
      i = r(73),
      o = r(0),
      s = r(17),
      a = r(21),
      c = r(131),
      l = r(16);
    class u extends c.BaseGitHubProvider {
      constructor(e, t, r, n) {
        super(e, "api.github.com", n), (this.updater = t), (this.token = r);
      }
      createRequestOptions(e, t) {
        const r = super.createRequestOptions(e, t);
        return (r.redirect = "manual"), r;
      }
      async getLatestVersion() {
        const e = new n.CancellationToken(),
          t = a.getChannelFilename(this.getDefaultChannelName()),
          r = await this.getLatestVersionInfo(e),
          o = r.assets.find((e) => e.name === t);
        if (null == o)
          throw n.newError(
            `Cannot find ${t} in the release ${r.html_url || r.name}`,
            "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND"
          );
        const c = new s.URL(o.url);
        let l;
        try {
          l = i.load(
            await this.httpRequest(
              c,
              this.configureHeaders("application/octet-stream"),
              e
            )
          );
        } catch (e) {
          if (e instanceof n.HttpError && 404 === e.statusCode)
            throw n.newError(
              `Cannot find ${t} in the latest release artifacts (${c}): ${
                e.stack || e.message
              }`,
              "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND"
            );
          throw e;
        }
        return (l.assets = r.assets), l;
      }
      get fileExtraDownloadHeaders() {
        return this.configureHeaders("application/octet-stream");
      }
      configureHeaders(e) {
        return { accept: e, authorization: "token " + this.token };
      }
      async getLatestVersionInfo(e) {
        const t = this.updater.allowPrerelease;
        let r = this.basePath;
        t || (r += "/latest");
        const i = a.newUrlFromBase(r, this.baseUrl);
        try {
          const r = JSON.parse(
            await this.httpRequest(
              i,
              this.configureHeaders("application/vnd.github.v3+json"),
              e
            )
          );
          return t ? r.find((e) => e.prerelease) || r[0] : r;
        } catch (e) {
          throw n.newError(
            `Unable to find latest version on GitHub (${i}), please ensure a production release exists: ${
              e.stack || e.message
            }`,
            "ERR_UPDATER_LATEST_VERSION_NOT_FOUND"
          );
        }
      }
      get basePath() {
        return this.computeGithubBasePath(
          `/repos/${this.options.owner}/${this.options.repo}/releases`
        );
      }
      resolveFiles(e) {
        return l.getFileList(e).map((t) => {
          const r = o.posix.basename(t.url).replace(/ /g, "-"),
            i = e.assets.find((e) => null != e && e.name === r);
          if (null == i)
            throw n.newError(
              `Cannot find asset "${r}" in: ${JSON.stringify(
                e.assets,
                null,
                2
              )}`,
              "ERR_UPDATER_ASSET_NOT_FOUND"
            );
          return { url: new s.URL(i.url), info: t };
        });
      }
    }
    t.PrivateGitHubProvider = u;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.checkIsRangesSupported = t.executeTasksUsingMultipleRangeRequests =
        void 0);
    const n = r(3),
      i = r(136),
      o = r(80);
    function s(e, t) {
      if (e.statusCode >= 400) return t(n.createHttpError(e)), !1;
      if (206 !== e.statusCode) {
        const r = n.safeGetHeader(e, "accept-ranges");
        if (null == r || "none" === r)
          return (
            t(
              new Error(
                `Server doesn't support Accept-Ranges (response code ${e.statusCode})`
              )
            ),
            !1
          );
      }
      return !0;
    }
    (t.executeTasksUsingMultipleRangeRequests = function (e, t, r, a, c) {
      const l = (u) => {
        if (u >= t.length)
          return (
            null != e.fileMetadataBuffer && r.write(e.fileMetadataBuffer),
            void r.end()
          );
        const h = u + 1e3;
        !(function (e, t, r, a, c) {
          let l = "bytes=",
            u = 0;
          const h = new Map(),
            f = [];
          for (let e = t.start; e < t.end; e++) {
            const r = t.tasks[e];
            r.kind === o.OperationKind.DOWNLOAD &&
              ((l += `${r.start}-${r.end - 1}, `),
              h.set(u, e),
              u++,
              f.push(r.end - r.start));
          }
          if (u <= 1) {
            const n = (l) => {
              if (l >= t.end) return void a();
              const u = t.tasks[l++];
              if (u.kind === o.OperationKind.COPY)
                i.copyData(u, r, t.oldFileFd, c, () => n(l));
              else {
                const t = e.createRequestOptions();
                t.headers.Range = `bytes=${u.start}-${u.end - 1}`;
                const i = e.httpExecutor.createRequest(t, (e) => {
                  s(e, c) &&
                    (e.pipe(r, { end: !1 }), e.once("end", () => n(l)));
                });
                e.httpExecutor.addErrorAndTimeoutHandlers(i, c), i.end();
              }
            };
            return void n(t.start);
          }
          const d = e.createRequestOptions();
          d.headers.Range = l.substring(0, l.length - 2);
          const p = e.httpExecutor.createRequest(d, (e) => {
            if (!s(e, c)) return;
            const o = n.safeGetHeader(e, "content-type"),
              l =
                /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i.exec(
                  o
                );
            if (null == l)
              return void c(
                new Error(
                  `Content-Type "multipart/byteranges" is expected, but got "${o}"`
                )
              );
            const u = new i.DataSplitter(r, t, h, l[1] || l[2], f, a);
            u.on("error", c),
              e.pipe(u),
              e.on("end", () => {
                setTimeout(() => {
                  p.abort(),
                    c(new Error("Response ends without calling any handlers"));
                }, 1e4);
              });
          });
          e.httpExecutor.addErrorAndTimeoutHandlers(p, c), p.end();
        })(
          e,
          { tasks: t, start: u, end: Math.min(t.length, h), oldFileFd: a },
          r,
          () => l(h),
          c
        );
      };
      return l;
    }),
      (t.checkIsRangesSupported = s);
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ProgressDifferentialDownloadCallbackTransform = void 0);
    const n = r(19);
    var i;
    !(function (e) {
      (e[(e.COPY = 0)] = "COPY"), (e[(e.DOWNLOAD = 1)] = "DOWNLOAD");
    })(i || (i = {}));
    class o extends n.Transform {
      constructor(e, t, r) {
        super(),
          (this.progressDifferentialDownloadInfo = e),
          (this.cancellationToken = t),
          (this.onProgress = r),
          (this.start = Date.now()),
          (this.transferred = 0),
          (this.delta = 0),
          (this.expectedBytes = 0),
          (this.index = 0),
          (this.operationType = i.COPY),
          (this.nextUpdate = this.start + 1e3);
      }
      _transform(e, t, r) {
        if (this.cancellationToken.cancelled)
          return void r(new Error("cancelled"), null);
        if (this.operationType == i.COPY) return void r(null, e);
        (this.transferred += e.length), (this.delta += e.length);
        const n = Date.now();
        n >= this.nextUpdate &&
          this.transferred !== this.expectedBytes &&
          this.transferred !==
            this.progressDifferentialDownloadInfo.grandTotal &&
          ((this.nextUpdate = n + 1e3),
          this.onProgress({
            total: this.progressDifferentialDownloadInfo.grandTotal,
            delta: this.delta,
            transferred: this.transferred,
            percent:
              (this.transferred /
                this.progressDifferentialDownloadInfo.grandTotal) *
              100,
            bytesPerSecond: Math.round(
              this.transferred / ((n - this.start) / 1e3)
            ),
          }),
          (this.delta = 0)),
          r(null, e);
      }
      beginFileCopy() {
        this.operationType = i.COPY;
      }
      beginRangeDownload() {
        (this.operationType = i.DOWNLOAD),
          (this.expectedBytes +=
            this.progressDifferentialDownloadInfo.expectedByteCounts[
              this.index++
            ]);
      }
      endRangeDownload() {
        this.transferred !== this.progressDifferentialDownloadInfo.grandTotal &&
          this.onProgress({
            total: this.progressDifferentialDownloadInfo.grandTotal,
            delta: this.delta,
            transferred: this.transferred,
            percent:
              (this.transferred /
                this.progressDifferentialDownloadInfo.grandTotal) *
              100,
            bytesPerSecond: Math.round(
              this.transferred / ((Date.now() - this.start) / 1e3)
            ),
          });
      }
      _flush(e) {
        this.cancellationToken.cancelled
          ? e(new Error("cancelled"))
          : (this.onProgress({
              total: this.progressDifferentialDownloadInfo.grandTotal,
              delta: this.delta,
              transferred: this.transferred,
              percent: 100,
              bytesPerSecond: Math.round(
                this.transferred / ((Date.now() - this.start) / 1e3)
              ),
            }),
            (this.delta = 0),
            (this.transferred = 0),
            e(null));
      }
    }
    t.ProgressDifferentialDownloadCallbackTransform = o;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GenericDifferentialDownloader = void 0);
    const n = r(135);
    class i extends n.DifferentialDownloader {
      download(e, t) {
        return this.doDownload(e, t);
      }
    }
    t.GenericDifferentialDownloader = i;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.verifySignature = void 0);
    const n = r(3),
      i = r(56),
      o = r(22);
    t.verifySignature = function (e, t, r) {
      return new Promise((s) => {
        const a = t.replace(/'/g, "''").replace(/`/g, "``");
        i.execFile(
          "powershell.exe",
          [
            "-NoProfile",
            "-NonInteractive",
            "-InputFormat",
            "None",
            "-Command",
            `Get-AuthenticodeSignature '${a}' | ConvertTo-Json -Compress | ForEach-Object { [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($_)) }`,
          ],
          { timeout: 2e4 },
          (t, a, c) => {
            try {
              if (null != t || c)
                return (
                  (function (e, t, r) {
                    if (
                      (function () {
                        const e = o.release();
                        return e.startsWith("6.") && !e.startsWith("6.3");
                      })()
                    )
                      return void e.warn(
                        `Cannot execute Get-AuthenticodeSignature: ${
                          t || r
                        }. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`
                      );
                    try {
                      i.execFileSync(
                        "powershell.exe",
                        [
                          "-NoProfile",
                          "-NonInteractive",
                          "-Command",
                          "ConvertTo-Json test",
                        ],
                        { timeout: 1e4 }
                      );
                    } catch (t) {
                      return void e.warn(
                        `Cannot execute ConvertTo-Json: ${t.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`
                      );
                    }
                    if (null != t) throw t;
                    if (r)
                      e.warn(
                        `Cannot execute Get-AuthenticodeSignature, stderr: ${r}. Ignoring signature validation due to unknown stderr.`
                      );
                  })(r, t, c),
                  void s(null)
                );
              const l = (function (e) {
                const t = JSON.parse(e);
                delete t.PrivateKey,
                  delete t.IsOSBinary,
                  delete t.SignatureType;
                const r = t.SignerCertificate;
                null != r &&
                  (delete r.Archived,
                  delete r.Extensions,
                  delete r.Handle,
                  delete r.HasPrivateKey,
                  delete r.SubjectName);
                return delete t.Path, t;
              })(Buffer.from(a, "base64").toString("utf-8"));
              if (0 === l.Status) {
                const t = n.parseDn(l.SignerCertificate.Subject).get("CN");
                if (e.includes(t)) return void s(null);
              }
              const u =
                `publisherNames: ${e.join(" | ")}, raw info: ` +
                JSON.stringify(l, (e, t) => ("RawData" === e ? void 0 : t), 2);
              r.warn(
                "Sign verification failed, installer signed with incorrect certificate: " +
                  u
              ),
                s(u);
            } catch (e) {
              return (
                r.warn(
                  `Cannot execute Get-AuthenticodeSignature: ${t}. Ignoring signature validation due to unknown error.`
                ),
                void s(null)
              );
            }
          }
        );
      });
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      var r, n;
      if (typeof e + typeof t != "stringstring") return !1;
      for (
        e = e.split("."),
          t = t.split("."),
          r = 0,
          n = Math.max(e.length, t.length);
        r < n;
        r++
      ) {
        if (
          (e[r] && !t[r] && parseInt(e[r]) > 0) ||
          parseInt(e[r]) > parseInt(t[r])
        )
          return 1;
        if (
          (t[r] && !e[r] && parseInt(t[r]) > 0) ||
          parseInt(e[r]) < parseInt(t[r])
        )
          return -1;
      }
      return 0;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(57);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var i = r(4),
      o = r(22),
      s = r(0),
      a = r(1),
      c = n(r(307)),
      l = n(r(310)),
      u = r(311);
    const h = i.app.getPath("desktop") + "/Atomic-Exports",
      f = (0, s.normalize)(i.app.getPath("cache") + u.CACHE_DIR),
      d = (e, t, r) => {
        try {
          return (
            (0, a.existsSync)(t) || (0, a.mkdirSync)(t),
            (0, a.writeFileSync)(`${t}/${e}`, r),
            !0
          );
        } catch (e) {
          return console.error(e), !1;
        }
      };
    t.default = class {
      static initialize(e) {
        i.ipcMain.on("openExternal", async (e, t) => {
          await i.shell.openExternal(t);
        }),
          i.ipcMain.on("writeText", async (e, t) => {
            i.clipboard.writeText(t);
          }),
          i.ipcMain.handle("readText", (e) => {
            var t;
            return null !== (t = i.clipboard.readText()) && void 0 !== t
              ? t
              : "";
          }),
          i.ipcMain.on("activate-window", () => {
            e.isMinimized() && e.restore(), e.focus();
          }),
          i.ipcMain.on("txNotification", (e, t) => {
            const r = new i.Notification({
              title: "Incoming transaction",
              body: `+ ${t.amount} ${t.ticker}`,
              icon:
                "darwin" !== (0, o.platform)()
                  ? i.nativeImage.createFromDataURL(l.default)
                  : void 0,
            });
            r.show(), r.on("click", () => e.reply("txNotificationOpen", !0));
          }),
          i.ipcMain.handle("exportTransactions", (e, t) => {
            let { fileName: r, body: n } = t;
            return d(r, h, n);
          }),
          i.ipcMain.handle("saveToCache", (e, t) => {
            let { uri: r, body: n } = t;
            return d((0, c.default)(r), f, n);
          }),
          i.ipcMain.handle("saveToDesktop", (e, t) => {
            let { uri: r, body: n } = t;
            return d(r, h, n);
          }),
          i.ipcMain.handle("getFileFromCache", async (e, t) => {
            const r = `${f}/${(0, c.default)(t)}`;
            return {
              buf: await a.promises.readFile(r, { encoding: "base64" }),
              path: (0, s.resolve)(r),
            };
          });
      }
    };
  },
  function (e, t, r) {
    var n, i, o, s, a;
    (n = r(308)),
      (i = r(140).utf8),
      (o = r(309)),
      (s = r(140).bin),
      ((a = function (e, t) {
        e.constructor == String
          ? (e =
              t && "binary" === t.encoding
                ? s.stringToBytes(e)
                : i.stringToBytes(e))
          : o(e)
          ? (e = Array.prototype.slice.call(e, 0))
          : Array.isArray(e) ||
            e.constructor === Uint8Array ||
            (e = e.toString());
        for (
          var r = n.bytesToWords(e),
            c = 8 * e.length,
            l = 1732584193,
            u = -271733879,
            h = -1732584194,
            f = 271733878,
            d = 0;
          d < r.length;
          d++
        )
          r[d] =
            (16711935 & ((r[d] << 8) | (r[d] >>> 24))) |
            (4278255360 & ((r[d] << 24) | (r[d] >>> 8)));
        (r[c >>> 5] |= 128 << c % 32), (r[14 + (((c + 64) >>> 9) << 4)] = c);
        var p = a._ff,
          m = a._gg,
          g = a._hh,
          v = a._ii;
        for (d = 0; d < r.length; d += 16) {
          var y = l,
            w = u,
            b = h,
            E = f;
          (l = p(l, u, h, f, r[d + 0], 7, -680876936)),
            (f = p(f, l, u, h, r[d + 1], 12, -389564586)),
            (h = p(h, f, l, u, r[d + 2], 17, 606105819)),
            (u = p(u, h, f, l, r[d + 3], 22, -1044525330)),
            (l = p(l, u, h, f, r[d + 4], 7, -176418897)),
            (f = p(f, l, u, h, r[d + 5], 12, 1200080426)),
            (h = p(h, f, l, u, r[d + 6], 17, -1473231341)),
            (u = p(u, h, f, l, r[d + 7], 22, -45705983)),
            (l = p(l, u, h, f, r[d + 8], 7, 1770035416)),
            (f = p(f, l, u, h, r[d + 9], 12, -1958414417)),
            (h = p(h, f, l, u, r[d + 10], 17, -42063)),
            (u = p(u, h, f, l, r[d + 11], 22, -1990404162)),
            (l = p(l, u, h, f, r[d + 12], 7, 1804603682)),
            (f = p(f, l, u, h, r[d + 13], 12, -40341101)),
            (h = p(h, f, l, u, r[d + 14], 17, -1502002290)),
            (l = m(
              l,
              (u = p(u, h, f, l, r[d + 15], 22, 1236535329)),
              h,
              f,
              r[d + 1],
              5,
              -165796510
            )),
            (f = m(f, l, u, h, r[d + 6], 9, -1069501632)),
            (h = m(h, f, l, u, r[d + 11], 14, 643717713)),
            (u = m(u, h, f, l, r[d + 0], 20, -373897302)),
            (l = m(l, u, h, f, r[d + 5], 5, -701558691)),
            (f = m(f, l, u, h, r[d + 10], 9, 38016083)),
            (h = m(h, f, l, u, r[d + 15], 14, -660478335)),
            (u = m(u, h, f, l, r[d + 4], 20, -405537848)),
            (l = m(l, u, h, f, r[d + 9], 5, 568446438)),
            (f = m(f, l, u, h, r[d + 14], 9, -1019803690)),
            (h = m(h, f, l, u, r[d + 3], 14, -187363961)),
            (u = m(u, h, f, l, r[d + 8], 20, 1163531501)),
            (l = m(l, u, h, f, r[d + 13], 5, -1444681467)),
            (f = m(f, l, u, h, r[d + 2], 9, -51403784)),
            (h = m(h, f, l, u, r[d + 7], 14, 1735328473)),
            (l = g(
              l,
              (u = m(u, h, f, l, r[d + 12], 20, -1926607734)),
              h,
              f,
              r[d + 5],
              4,
              -378558
            )),
            (f = g(f, l, u, h, r[d + 8], 11, -2022574463)),
            (h = g(h, f, l, u, r[d + 11], 16, 1839030562)),
            (u = g(u, h, f, l, r[d + 14], 23, -35309556)),
            (l = g(l, u, h, f, r[d + 1], 4, -1530992060)),
            (f = g(f, l, u, h, r[d + 4], 11, 1272893353)),
            (h = g(h, f, l, u, r[d + 7], 16, -155497632)),
            (u = g(u, h, f, l, r[d + 10], 23, -1094730640)),
            (l = g(l, u, h, f, r[d + 13], 4, 681279174)),
            (f = g(f, l, u, h, r[d + 0], 11, -358537222)),
            (h = g(h, f, l, u, r[d + 3], 16, -722521979)),
            (u = g(u, h, f, l, r[d + 6], 23, 76029189)),
            (l = g(l, u, h, f, r[d + 9], 4, -640364487)),
            (f = g(f, l, u, h, r[d + 12], 11, -421815835)),
            (h = g(h, f, l, u, r[d + 15], 16, 530742520)),
            (l = v(
              l,
              (u = g(u, h, f, l, r[d + 2], 23, -995338651)),
              h,
              f,
              r[d + 0],
              6,
              -198630844
            )),
            (f = v(f, l, u, h, r[d + 7], 10, 1126891415)),
            (h = v(h, f, l, u, r[d + 14], 15, -1416354905)),
            (u = v(u, h, f, l, r[d + 5], 21, -57434055)),
            (l = v(l, u, h, f, r[d + 12], 6, 1700485571)),
            (f = v(f, l, u, h, r[d + 3], 10, -1894986606)),
            (h = v(h, f, l, u, r[d + 10], 15, -1051523)),
            (u = v(u, h, f, l, r[d + 1], 21, -2054922799)),
            (l = v(l, u, h, f, r[d + 8], 6, 1873313359)),
            (f = v(f, l, u, h, r[d + 15], 10, -30611744)),
            (h = v(h, f, l, u, r[d + 6], 15, -1560198380)),
            (u = v(u, h, f, l, r[d + 13], 21, 1309151649)),
            (l = v(l, u, h, f, r[d + 4], 6, -145523070)),
            (f = v(f, l, u, h, r[d + 11], 10, -1120210379)),
            (h = v(h, f, l, u, r[d + 2], 15, 718787259)),
            (u = v(u, h, f, l, r[d + 9], 21, -343485551)),
            (l = (l + y) >>> 0),
            (u = (u + w) >>> 0),
            (h = (h + b) >>> 0),
            (f = (f + E) >>> 0);
        }
        return n.endian([l, u, h, f]);
      })._ff = function (e, t, r, n, i, o, s) {
        var a = e + ((t & r) | (~t & n)) + (i >>> 0) + s;
        return ((a << o) | (a >>> (32 - o))) + t;
      }),
      (a._gg = function (e, t, r, n, i, o, s) {
        var a = e + ((t & n) | (r & ~n)) + (i >>> 0) + s;
        return ((a << o) | (a >>> (32 - o))) + t;
      }),
      (a._hh = function (e, t, r, n, i, o, s) {
        var a = e + (t ^ r ^ n) + (i >>> 0) + s;
        return ((a << o) | (a >>> (32 - o))) + t;
      }),
      (a._ii = function (e, t, r, n, i, o, s) {
        var a = e + (r ^ (t | ~n)) + (i >>> 0) + s;
        return ((a << o) | (a >>> (32 - o))) + t;
      }),
      (a._blocksize = 16),
      (a._digestsize = 16),
      (e.exports = function (e, t) {
        if (null == e) throw new Error("Illegal argument " + e);
        var r = n.wordsToBytes(a(e, t));
        return t && t.asBytes
          ? r
          : t && t.asString
          ? s.bytesToString(r)
          : n.bytesToHex(r);
      });
  },
  function (e, t) {
    var r, n;
    (r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
      (n = {
        rotl: function (e, t) {
          return (e << t) | (e >>> (32 - t));
        },
        rotr: function (e, t) {
          return (e << (32 - t)) | (e >>> t);
        },
        endian: function (e) {
          if (e.constructor == Number)
            return (16711935 & n.rotl(e, 8)) | (4278255360 & n.rotl(e, 24));
          for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
          return e;
        },
        randomBytes: function (e) {
          for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
          return t;
        },
        bytesToWords: function (e) {
          for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8)
            t[n >>> 5] |= e[r] << (24 - (n % 32));
          return t;
        },
        wordsToBytes: function (e) {
          for (var t = [], r = 0; r < 32 * e.length; r += 8)
            t.push((e[r >>> 5] >>> (24 - (r % 32))) & 255);
          return t;
        },
        bytesToHex: function (e) {
          for (var t = [], r = 0; r < e.length; r++)
            t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));
          return t.join("");
        },
        hexToBytes: function (e) {
          for (var t = [], r = 0; r < e.length; r += 2)
            t.push(parseInt(e.substr(r, 2), 16));
          return t;
        },
        bytesToBase64: function (e) {
          for (var t = [], n = 0; n < e.length; n += 3)
            for (
              var i = (e[n] << 16) | (e[n + 1] << 8) | e[n + 2], o = 0;
              o < 4;
              o++
            )
              8 * n + 6 * o <= 8 * e.length
                ? t.push(r.charAt((i >>> (6 * (3 - o))) & 63))
                : t.push("=");
          return t.join("");
        },
        base64ToBytes: function (e) {
          e = e.replace(/[^A-Z0-9+\/]/gi, "");
          for (var t = [], n = 0, i = 0; n < e.length; i = ++n % 4)
            0 != i &&
              t.push(
                ((r.indexOf(e.charAt(n - 1)) & (Math.pow(2, -2 * i + 8) - 1)) <<
                  (2 * i)) |
                  (r.indexOf(e.charAt(n)) >>> (6 - 2 * i))
              );
          return t;
        },
      }),
      (e.exports = n);
  },
  function (e, t) {
    function r(e) {
      return (
        !!e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return (
        null != e &&
        (r(e) ||
          (function (e) {
            return (
              "function" == typeof e.readFloatLE &&
              "function" == typeof e.slice &&
              r(e.slice(0, 0))
            );
          })(e) ||
          !!e._isBuffer)
      );
    };
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    t.default =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADgwSURBVHgB7Z1rkF3VdaDXPv1QSwLUYCOMseEKjC0kBMJBxHZSUeOacWzIlJukwJnyVCFSUzU1SaqMf9hV+TPA/ElmnCrDD3t+AlOVqhgyppkacKYcD63JeAYjYlogCdk8dOX4wcM2jQE9Wn3Pnr32c+19zu2+j3Nv38f6VK1z7nndfe69a+312vsIYIaaWm1+FrZADSbUH8BsJtRSwjaAbFaCxG0ghN7nT1nnknW3IqVZFyDUMl9WK2/nuA3/cliGU1Cv1xeWgRlaBDADDxHyvRnA9Vq4hdwrjDDPwsayLJXSEFIpCZEfVgpiSSmI5fqRhUVgBh5WAAOGFvbzlKBnsBdkdj0IOQfr99oDiVIMS1YxHMxzpRjehSW2GAYLVgAbjBb482Eee3YpxJz6QvbCCGOUglzMAQ7COaUQji/UgdkwWAH0Gd/DC/i8cs7nYUh796qwVsJSDvnj8A4ssoXQX1gB9AEU+uwCOCCl+LwKyGEPv9F++8CiAo+LGciHG+eUMmDroOewAugRRuizL0kp55TQzwHTNqgMhJCP5yuwwMqgN7ACqJCkp58DpjLYMugNrAAqoHbtvOrlxT1s3vcJKR7CmEH9hYUFYLqCFUCHOBNf/RrvBhb6jaIOkN2frzQeZ6ugM1gBtAn29plQgi/kPDCDA1oFMn+YC5DagxVAixAzfw6YgcXFCl55YeEhYNaFFcA61PbMH8iU4MOY5+uHkLqQ8j5WBGvDCqAJLPgjAyuCNWAFkMCCP7KwIiiBFYCFffyxgRUBYewVQG3X/F4xIb7Ogj9mSLGQn8u/PO7pw7FVADaPf4/N4zPjCqYPz+X3jasimIAx5Mrr/uhLYhNgFdkcMOONALQA5y/avvPtt944vgRjxlhZAGzuM+tQz1fkzeNkDYyNBXDldX94j8jgb5P58RiGMqs6iLsvvGQXvPX6iwdhDBh5C0D3+pPiwVGfaYepnLGwBjIYYbDXzybFcyz8TAfUsmlxAn9DMMKMpAVQ2zlfE9PiMRZ8piJG1hoYuRiAjvBPKF+fK/mY6sDYwIELL9l59q3Xjz8NI8TIWACc12f6ghT35xP5ffWl0Zi8dCQUAJr8yl97CrjXZ/rDyLgEQx8EvOq6P7pTCf9zwMLP9A/scJ67as/8ARhyhjoGYCK08n61OgMM019m8LkOw14zMJQugPb3z88e5Gm5mIEABxZN5HcNY1xg6BQA+/vMgDKUcYGhigFgVR8LPzOg6I4JOygYIoZGAejZeCdZ+JmBRgcHa3vmh8Y1HYogIEb6hdDDdznYxww6M0KIP77wkp1vD0PR0MArABLpZ5ghQnx2GDIEA60ArPDfCwwznMwNuhIYWAXAws+MCAOtBAZSAbDwMyPGwCqBgVMALPzMiDKQSmCgFAALPzPiDJwSGBgFwMLPjAkDpQQGQgHgJB5K+P8KGGY8mLvokt11pQQOwwaz4WMBsGoqE+IxYJgxI8/lzfUjC4uwgWyoArADe3As/ywwzPixnK8qJXBsYcMeSLJhYwHIqD4WfmZcmc0mxWMbOYBoQywAM38fz+LTDyYv2g4zV++C6Q/vgGxmK0x/qAZiZgtMvm97dFzj12/A6q/fhMap92Dlp3U497O6Xq6q7UzPqeeZvGEj5hOYhA1AT+YBsgZMT9j0kd2w5fp9sGXPPiXol8Q7pVRqP9b7+GpCKQr8Q7Zcd5M6zuxoKKVw+qUj8N7Ti3Dm5aPA9IRa1kCZgNugz/TdAuB0X2/INm+F8+duhQvUH667b1YqgRfuBS6sYEf73HYI+/C1P9TuR2vgN4tPwOnnD7Fl0BPEva8+/+37oI/0VQGoiP8BFfF/EJjKKAq+0L28Ft7k25UyrJd98U7g6ZJqDLpv+TuPwLs/WNSuA1MdArIDrzz/3x6GPtE3BcAR/+pBwZ/93BdAbN7iTftUgGnnDtLpB9XzW+0g04tKe5aIjAF9vHQaxF4HrQBUBO8pRcBUxnK+ouIBfZparC8KgIN+1YK++vu/+Gfa1zcQuz5IeViWfM1oIwi63WsKczw9Ve+il4uOBzj1wjPw1rcfYmugOvoWFOxLJeBFl+/6S7X4LDBdg0J/8b/9KkxftoP05EGQtaAC3Vau46nwU2VgBL38nILSsExdcpkKHO7TQcL8nZF4YM5GMyvybOatN178n9Bjeq4AbJnvvcB0zfn7b4X33Xm39vW1kDqT3yoCJ7z0NYptvI0eWxR4b+qLIOrSWwb22BKjQqgU4/m/+xnIT78LKydfAqZLBHyiH9OK9VQB6Kf0TsDfAs/l1zUXfPZ2mP1X/wZM3y0i313E3rrfqv93Qk+dem3ix+e4aL9TEPo9nAKx/4rWRNwKZOaaG/TaWU4ZVoD4xLYLd35r+ZfHe2ZW9bQSkCv9quGCz94B2z77Bf9aJqE7Cb5/tlt8ns/uMArDuQco5OYvHGv2G2WgTyPOfrg+JO8kojVzjrTtvQOYrpnFx9xDD+mZBWDy/cBP7umS8/f/ger5vxhtC35+XNRDo/saERSBN90hqQvwJ0NJ8DBkAArH+fWwLdPnmX0Yq2i89aauKGQ6R32aH1CugFCuwCL0gJ4oAGv6LwDTFVOX1eB9f/IVa/LLaGmIi3h8II/012mQMFIYvjcP10ldCxovCNaEjN6rLKCIyxmlBM4cX+LAYNeIuW3v2/n48pvHX4OK6YkLYE1/pgt0qu9PvgrOBBfJUrp/rqeWfosxDCD48c7kNwe6cwFCPEHGSoQIurlWcAncec4tKFM6/sozW/Q9ZFinwHSFmOxNAV3lFgCb/tUwO38ANl2125vjsRmeBPv8qu3tienvd9LoPTHjzRnC+/9Aa399lgGaXJMaIMFtMG9njsm2nAfTV3wUTh1aBKZzeuUKVKoA2PSvhq375lQg7QvEb4cgwBYqy1lk1gNxFeJtrp8mYTsoBA496euy7UFpmExD2E+vPHHRxSBPn+L0YNdU7wpU6gKw6d89Exdu18KvrW9qVSeR+WCyh+i9M+nd8e4IWiAcF/JQFZG8WQnOzSjZEdUbS3854dt6we/fwa5ABYgJ8XWokMosABzoo3qsA8B0BZr+08r0d/21CcLZLDytxy/FnKXz+CUVgqVn2ON8ipAU/DjFIkQ4NrgLQI6jwUZBWkMChpNTyo+dhrM/2rDJb0YC9THXqiwQqsQC0AN9hLgHmK7A3n/Lvpv1uhNEl1t3efq4KIea78EblxKi4J8TWFE4HiJhDhF9Qc6h14KCceDa5PYXrieEyz7Ceb/3BzD1wRow3SLuqe2dr6S+phIFkE0BCn8NmK644PdvD9JLhZWY87ERbgWWRPh9xQ8Et8BH9d11qSQ7ofUWAIRreYsgtCfEE0ibvNCTdkuI3RYbzNz2+QPAdM1s1sgq6XC7VgB6PjM2/btG9/433hwLoBdmsiQ9t3O9XQ9LDPPk/FDfH5L6grjuJnPgFIHx9YNiwOIemm7MyXZ6vdA2pz+Eb4M7H90bnd1gukPIu2u75vdCl3StALKprNKgxLhywWduh1BEQ7HCCVQgQ5otVOwFBeFLeiEs9XXzYMa7qL3L+4dAogQaKgxJCFFwJdKQYKHeQMblxo4tN84B0z1VBAS7UgAY+FOaiHP+XYK9/2aV+qMms+u8tZDlwUT3+3KnLEhvT5QH7c2jVCKQ9wiyai2IkDwMpn7w71Nl4V/noY0AUJKJgMhC2awUAGcEukd9nXO1a+fnoAu6UgAc+KuGTVftKvjV4IfkiiC4bjcxx6PwvvPl3VBhQc6VcT+Mk32u/uIknH3laJjIw3sbzm0wJwpyjfBWxLdvGhOIrxcUFcDW370VmO4RXcqggA7h+f2qY/tffBMmL7oYwCf/AMqH+KavqYkPUHDzNSE7gNN+v/d/noDTh56C/MypqA0TF16s/fPz/+Udui0htRcLM5BBRcmOsM3NSxi1I74DVEBv/OWfAtM9Qsq7Xnlh4SHogI7rAC76wDU4TJGH+nYJCh32hoURdwBxzyuc2FslQYTLbSeD+Oz5Yf3df3wClv/m67Dy6jGQq+cK7ZBKIaz+vK4VBJbvTl1+NblGXE+QqoWyiUViZSRAknvCo7LN58HZV4/qEYNMlwix963Xjz8AHdCRAuCin+o4/zN36Nx4VISTGGZhgE68TesFOwS32XRdyLvffRTe+c7flAp+GVisM7E5KIHofUUYlFR8v7UNylRxyDPvcWFQNcxetH3nybfeON72h9lRDIB9/+qYvnI3pNV1Tg2E1zKy+qORgXmIxNNMgAN79Xe++wi0y9v//UFlLYRZfYSI8/t5UhYcFxkBkXR6H3RFwObfUsHAGQ4GVoHsUCbbVgA68s9FP5Uwc+1N2veOc+YANtQeRfd9UM674FYAnZ9OBc6n3wB+/fB/hk5Z/tY3ICrosYLvWuTbJiGqE7CmSVxBCKIQRMS5DScv2wFMJdSuMrLZFm0rAO79q2Pzx+egEDVPRwBagfZGgBRx/o4WBBFBxB4bh+B242Pjue/8w6MAxAWJnieQRviiFCa1DshSkvPU+nn/4nZgqqETK6AtBcC9f3Vg7n/T7n0mfw7gq+9o5w9UzknEn4pWbFaDNwbweu/+Q/umf8opFRSkE4gEi8Tm/yVxQWRwBdIohitCkvY8d59Tl9bYDaiOWrt1AW0pAPXl3glMJUxfuSsSWu/b01iAq6xLzPCgJCRxE5DQs55+drGSCHt+WgXqjhyCaDJRGsoj7THGShBu2m46KIhaDjid+MyNNwNTDe3WBbSsAFCzYOURMJWAATBJ/HskrQIMhHJgKKQLbUFvkgM8/U+LUBXvff+J2E0hSidqpmx+jTBhCNj4RWBm1z5gqqHd6sCWFUAmgHv/ikDzf2rHbivLIXIviUUQl/6QUlsS4NP7ZJji223Hgh8awe8WvJYrHEoLD0MbzT1QJHFnfNgicVUQ/CzwM2GqIRPZl1o+tpWDeMRftWz5nVv0MkTHqdnvVsJ+3ccLERXUFIVN+sKbcyeqfyjH6Wefiop6aDujJST7yb5SJWDX0SJiKkLI+VbnC2hJAWTTPMlnlWzadROkA2bCaLywmVYCRiPtQJD0WsC9PvX9/wFVc/bYodJ20veN21ik8MxBcuiWT90CTHVkOdzd0nHQEqJlk4JZm6krlbk7e3GI+NslKeiNesxgBZRUB5aANfbnfn4SqgbdgHMnjkGhnk/SNqdFQBAdF41MtIe7YKHYvBWmd/A8AdXRmsyuqwCu2jOPvX8NmErA3L8ReumL5V3azk+2IdL5/Ek2wEpNXhaUU3/vfa/71F8zVl45Gpx6CPUAObmXSAn4LADECo/uh7BvEwcDq2S2lWDgugpAfS+fB6YyXC9Hq+RsHF9vT1OB5mAiT6QSj1oIjpUTvXsop84GuCaVBCPtSqFOIbJVqEKAqMIZZrg0uFJaSQmuqQA4+FctM6r3z5T5D0X5DutSRr0n3U+F3skbfagHCn8vR9fh4B10BQoBQLsetZPci+/9SZsBigpMbNqqXSSmGpRRtne9YODaFsAU5/2rBIN/kexH0XAZCVHsKgsvQIUKO2t+oxleZe6/GWd+uBjaBMGHNy+I3kqUA6UQCyD3vvlTPFFIhcyqYOCBtQ5YUwFw5V91ZLPbYdM1+3wvHiOitVRJFM3tsM9vwN752DPQazAbgHMHUFfEt8v9J6E8DijjZbodr4UuErsB1SGlWNOFb6oA9GO+uPKvMrD01/WONJdOhSISbPoaBJ1glyD9tjNKMNNZfnqBHsNvFU1agAT0dXJfLk5YuJ4M8UN3nRk9SIqpAl0ZuIYb0FQBcO6/WjZ/8lYQXrBt75lM0mnWIdlHg4XxjDtU0Jxp3g9OOzdAZCS3H0qazb7yNGWZwkutm+lrbgKmOtaqCWiqANYzHZjWQfN/8tJaZLEHRSAKVXOlmQAAaFZkky+/2ZPqv2bge+WnjRuQ+5F9VIqLboveltvVkiwHZaq2W39eTDUoWd7fbF+pAmDzv1q2fvp2YgrLeJh/FEUzhMeCFXt6t90PzZVQad1/q5z+v08YZUXuhfr/9HXIZkiICofc/UHi2gi2AqpkLTeg3ALg6H+lYI9GTWUZmQJmWyFqTl67eTklDbGTfPupp3pX/NMMX2/glBqEZqfGf7hLASV6IdQCkB1bPsmlwVXSLBtQqgA4+l8dKPwZTvslSe8H1hyO/GRR6h/7rIAMlXd0HMHqL+obMrMuugErJ46BywWkzgkt8PEugV6XBWVXsB7AzBMwVdsFTDU0c+kLCgBNBTb/q0NHtEvMYPsCoqftOGGIpCcZ/y9jBXHq/z0BG8XZF5/xbQpj/aGQ4TCE8QIimv/QfibRPRvYDaiOZkVBBQUw0WDhr5KpnUl9u4wWUJgN2Hb5UYZAQjFwZmWon8G/lLPPLUL81KCyPF/xZXovbnZjehAesumG/VwTUB2zsAqFh4kWFIDk2v/KmNmLte1bS4Xd5MyTh2fqSLkkwcG0FyXypFbOqR4YMwAbhS4N1grI1jWQ+Q3NMvb3ZWTBJIovzYbglpnz2AqokCwrpvaLMQAhun7kMGPYdMNc9KOnk2UI/0w9pwhMdiB9uk60LuPxAGePH4KNBrMB0ub36KxkaVGTIJqLPtjYx0aibeF+p5USZaqiGAeIFIAe/APACqACcNDPZI0MbEm6N1rlZzZAeXEMyadLsl1X5CkTfKM5Vz+qS4ORqHIxOS7cvUjcBZGcK6PPSgdR2Q2oiloaB4gUwMQUC39VTDvhd70cfbIOEBO4VBGQfU0q6nQAbgBARXQGFVEzVwUACjMFJdZBCG7KYuBTsekTPECoKlSML3IDIgUgOfpfGfijdb/naPirXgH7utzPT2cFiiLmdn1l6SAMCuecK0LvK2q3iEY0us8gUhJgjtMVBbSoAIwVwFSDkvGok09iAM1LBpnWmfjADvVXg+Dlp/68Uwsi6gwB4ih59D/Jn+dvv6lN70EB25IrS8Art0T+o/kBEoLlH1sIXv6lUQCsBKpBJjLuFYD1DdgFqICZT9wS9+7pH9AUXzD3/bHkIRqRkrArKwNi/lPOPv1kaCCJ6Pn2u/susRIil4dYCG4frk5yUVAlqG8gqgcIFsAqC39V6NLfJgN6PDJ93BaEcQF2IaLxAiFGcPrpjSv+acaZpaeiXtvfBrFcDFbTCVr5Q0cShsecu8eh4WLmtzkOUBlE1r0CUDlCVgAVoKPW2y7W6zTfbWQiSIJMLAHpf/ih5DdKpVlW0dzewNx/M7BNjZPHCgU9RUSwdMCIu15K+oATpxrJ8GJdGsxuQBVQWfcKQOVp9wPTNdPXz5F0HnmYBzH/ZWIOa6iyKBEct+3M4UUYVLAuQZAZjeOJT4KAm+1hQlSHq40omx8Bl1PX80+0EkR2vVv1CkAKUQOmK7CXmk5+pDLqxoU3891jwWI3IX48WEif2RmB1PrqAAX/UlaWFosZDS/hwcSnn4ksKD73OcXCj0x/7Cb1GXNNQNdIOedWaRaAXYAumfoY1v2neXtBfHhv9yYugDN3qfkc/F8nFCs/OjSQ5r8DawKMgrJCnLtnGrr7EtG9C4hnEyp8Tv7C9vWmLTB93RwwXeMLgrQCaPeZ4kw5m7T5H7ot6suG2X/IUgbhd0fSXt9sCnX25wag9Hc9Th98FGJhJgE+Ivh0xiA6VNpvl6FE2gUTcf/0Th4bUBE1/E8rgAkBLT1IkGlOtm07TFyxK0pdUX9WEN/fBfxc5y5BFgJfbptTEI3lN2BlgP1/R+P1uq4JEEL4wKd7urG0YVA/4xHEZc4ItQrouAi3ffKK3ewGVMBEw1j8WgGk1UFM+5g8tYAwR5bt9yTE6TGN8DUAghxPU35RNaD6Wz05uL4/RY8QxFgAjg+S5OYFCXrabeYepU95uJ4+Uor2WK8Q1ctNnBLsGifzWgGoDMD1wHTFzO/dHv2Yo2g/uG3xM/7CD552g8Kav27dbF85fBCGhXM/QldFgh3emAi/dQ2EiF0dIEMJBY0VuH1BUU59lN2ArhHZNlxYC0DUgOmYiUt2aBfABbCcgQtu6RSCO8GaBtT3D7hjg8Gcv/3G0FgACLY1X/5l6P1DWCR8BiTOFxwCe3juS4AgDgqaZbb9CuUKcGVgNyjlGywAsAEBpjOmb/pc9BNNy3d9XtwFwHIoSfdBoeLPLMRQ+P4pK88/FQJ4dpsQcdWj7/D9/yQz4K2nkuCpYpKtgK4QLgho0wEcBOwCDEy5qLUP9sliJDxE+G2f5y3eYAGkw2Zxz1AqANdmqwGj2yJpwaD8rLjTAyGOi9Bd09ftB6YrZlH2M1jh3r8bJj92ky/99VV/mrjHAqD+brNjyGZzRTiH5vTbg5v7bwa2efXkMfD9uwBIb1NDPq8y4adpQ4O93sxWk3VhuqGWKSeAe/8umProPhffCz08cXaFn8PLnUFr4WneO7gLOTl+5fBTMKyc+7F7hiD4giCfCnXBUpIFMQdDHAC0n4fwFwpW1aZ9nA3oigYqAMEWQKdgzz+9Z868sL1/5urZcRsJ/pnXsGZvH61Zf7mhe9Hh5NzzB3VNgCF2c6Jhwl7fiShmEJkMorgPLQCuCeicCXx8eMYKoGPQ9/d17HYUXC5d9J6k+cAFBn1kL6TBfMxLRr0f/q08vziU5r8DawLy1+sQshoANK/vK//selwf4AyncFx4qIr9hKe3wpRTwEzbqDBVDbMA7AJ0iP7xhUC1xf2Qg+ADCWS5Y6V9qCb94YdCInP+6o8Hb+KPdjnzvx/R90KHOmucy0TXk6yBOS4uk47TLYJrArpjNpOsADoCzf+Jy3dBId1Pg1UyKXaJCn4gshDM67Cup/368eDX/q9H4yfH9KzBuYzHOJBPCQqKgc4pEPyDyE0wG6T+DtgN6BCRbcvUj/QKYNrG5aFp8V/sxcvS8+LjycMyJTlAbR+mwp/1OPfCos/wB5eIxPRo2Y+LCUogAUPpLSZpA4JRSpCDgR2hPtNaBkxHTN94SxSp1gvvv8skf01Ke+3xblIMkUTA3Xnnnh28ab86BbMBUe8vIakLoJ8ZQPpUgWhQkBB+6Y6fvHYOmM5QQWtZA6YtJi7fDdns9sJ25+dGhT3EnA2Te4S8dprf1kpAmf+N10/CqIBuAN6P/yyoMgS7Tpz/eEYgWXydxwrEuGM8XVi7CBsEZNpkas/+JJ9ttrsqv2iGm7T2B2v7c5luChdRx589NDq9v2P1pWcASise42yI2QmRxUTrJsAvaCDF1GMw7cMKoAMmPkxKf8kTf7wcE6UARFGYHzL5UUOoHKTLxku9Df7puQtUj4lZDPzDdfzrZTDt3KEnfQAkBPGCTx9So+Sjk3EJsUHEnymY8yav3c/BwA6YVJ9eDZiWweCfUCanNeaNWet6L+nlW+Nz/0mkPzwpiJj/NgWG5nLVuX8sm0UBmbpatX17bU1BkW+c1JN6nDuyqNpSXSBSnn0PVtW96Qk9pIQkzm/a6ZaCpE6DfvXnRWMGpPlMYdNWyLbvqLTNY0BtEpi2mNw9Z9fszD6CFPhE5n5a+EO2y/j4MH+Q0BHzqsBefdPv3K6XtC3xvPsAVBoFDrXFP6UwMBax8v1HtTKoglVl2ejUKVF49POjQVEq/E6R+lKK1CqwQdVpda+nWQG0BbsAbSAuuBgmr74x/EClrfyTxE+lvmrqCug/GtACoAYCXrPxcvfFP2LTFpi55c9g87++F7IP74qzDYKMSnRtEnEe3pnpaOlsuuVPYeu/+0YlkfZVVG5nTnvhR3KfKQGgBUFRW6LgafG60l5n4pIauwFtwgqgDVyk2Zn/ACQeJSH4pC5vDUkwC6LOlsb99Cr2tO5R2920ccuBrxmBdcFIsIIFwXSO9BVRYqk5ThXBJqVUuhEw7Qa89INwYbfdxQEg7t3TNmLwNEkQQsi9KKa3cEqwTVgBtAGaxZCazxZXwOLmA6C9VVQG7LfRpdm3+sJB6Iap37oFZr5wD4CyVOL4QrA2XBENVVxQKNElbSPnTu7eD5vv/BpkF2yHTqEuTtQOIMaSV6RQ+LyigKo9iyquyY9waXA7sAJoEW3+X35tZDqbH2Kcqkrz+y5LQF/TXs4/Jec3Kvf/z537r+j/Tn/6gHmvcHX7f1w8Q/eVtdXfTwn4Ocz88T1KCVwMndD4ZxXkJFZOpCwlRFmVcBD4+6CZl7jM2lwLXR43PwOzPqwAWmTqxluhfChvE0kpi/TT116BmNfdCP/kb90KU5+6HYC6JRD8adqzAtmXkrbNrbv2+3/oEtz2lY7dgVUa6JSunZAo0LA/HBor17TNro0TPlDLrAcrgBaZ+Mi+NU1S6rDGskUGAtFjAOjAv45Lf4Uyx6dR+J0yisz6NGhGfP1UwOh9iSShAVSZmAOyi2swffNd0AmrGOiU5CNxrgANPIBrSzHwJyMLzG4U7v6kdoWY1lAKQNaBWZPsw7u16UvczoANYFEd4Lb7pS8OSCe1MLvzN+uQq/x7J6A5jo/M8m/l2mGlw+fMozcOsQAngO58kbyOlhCsFlzHmIBWjG2SKzeg8dN4opNw7dA+cG23B7j96QhsGkfR22fOM8VazHrU2QJogSkd/DOkwuvlqsQKkDIWGD/pB7kW/ohX/+lJ6ASMeIsLwqPIAQDo/AK0cyz16WVxNVUC1BYQULQMpm8+0JEroAt21rBCqIC7XaGACvyTh9JJQsx+lRK8mkuDW4EVQAtkV91UEG5tJov4CT6hlA18RsBDe2Cy1BZAh8UrU5+8I5Fyq2Qgvr5rryRtSCP97ni3zffIxK2gyk63G19gcPTj7Q/HRaXnFadbCogyAHlBqQatpgXe329xYNHELi4NboVMRbHrwDRlAvPKm0p+SK5nt+ZnJEi0mi0cXjgfweBf/pv2S38x0CUueH8cfyh9o5LtqSvgt4noMJEcG/ncECyCyQ58bqwJyJUbEH1ksmhlNGm2O8VrKqewfAOxNPhD7Aashfqo2AVYj8mr9hVMep+L1kckg4IgNkf1a9drQehZ3fbVDsts0f/WfZ8gaciCgZ6+pyj42tTkTyfbSJcgi+6EPn96q46TtIu+d9+jlwi+7/lDO9N78+2LFLCxviY/zsHA9chAyJPAlIL+dZYEucz89tI88s4X/bje3kWswwNCnL8KyY9U78Ne8NX2R/7pdmHvFlkZ8TBkKrQgQ71B2qPTJZ27P/b8y5UB3dZRMPDlQ+oziGsC/FKWnxMpYhm3PT5GxQE+fC27AWsgMlHP1Oe2DEwpuleTEA/5pQJMBM4s3a82fthHWc4d0QLQQekvjnqjSPvgTFpQo7fnslCItBayVDmsfx4ycVX7CgAVYOPoIsRvIaCV9pXt809a9tuUEtg1B0wTZP42ugCsAJow9fFbTbArL3SLnrWCaaUQJbJ67CB0QvahXZF5HNrinBILmXkotT7COYlgFfY164rj88T5F+tBSO3iBz/Za+V5Tq4vi+/V5B6c0jVjMMIzBrOrOBuwBsuZ+rzqwBRAM1u8/4pgWpaYns78d/H+4GsXj0sFCYfa5h1W/2Hxj5NnNzLBvyeE4FhqJpe1z7fHHQvxvYlkLEGpeW7PEx2UB+tAoLWCjJ8flJZ/7+R9UjfEj85wH4iUPnuBrhKWBzNFBAYBJ9gCKGXyk7frpfuBpZ1kVISSCjeQYhVBioDMBv2qm9Jf7GmJXvJCGRX3kP3RuWQpm70BURJl1/LbiNLQ1+1wfMDqD5+Irh3PlixLFQ5ZmPU8WZJ2cTagnAYqgEaDLYAysst2F3tLIg1pL+RfJmZ41PPL8INeffpR6BhXlRhfOghPYvbTh3JEkX5JU2nk+iLeRwc4xfMIuMNtUc6m86AT8p8ehXgyENoeEWockvf19041LkBkCeF1J2/gbEApk8oFgGlWACnYY3hzlvY2tNtN99mV6Ek/JYoD9+dvntCj/zomVUTkz6ckqXKgggtpoAzidXLtPDHFBcQzHptjmvTSbaDdgJ++CGGsgWtQfBz9nKO/JuaMiw0Apik/xG5ACfWsvrSALgC7AYRs1/7Y9KW9ISSmJ5BeFKBwHiTHYkCx8dx3oBvkb97wcYV0Dv3UMoi2+3bJwnZZcrx/dp+UkTnu5V0mufsulFrjFTcTUohqeMvD1VWUuFpmf/F7gUQnTVzF8wQkLKPsu0KgOjCeCVL6KwuSIYsagK4SIQFIZtqx2gJN3m5AQRMi5PYjV8U1odQcDu2MhuBCwaom92BTjAA+zSiISU7/uqGhMiI03kLfz1VW0kKmuI1QUEZ+v71eds3+jrIUo4q0Mp+ZF/IwMBqdN57GH0rcN8pIIOgPPpkTEJKie2oa4LGvHOrO/MernD0F5XMTAKSmf9x2WDuoJsHX2KcHFa5R1i7l2nSMLg0+6oOqsVKJtWwovPIxVVLNCJFS9BoAS4PZCiCYAkCtALgYKIA9hUEkSyjKtBX4Qs+jf6Gm5zQ9ZnhIaBWTfuJwWvCVhuZXn5cKZbHtQTBIgZB0z94z0mV8fhGdR5ElSgaHNNOqvk5oLD0ZtTsttKLv7wU9B6CTngBR0inhu2XUJ7SES60A1He/BIyOrovLdpUIC3i71P/YSA+VpwLhXwsfkNP+9Jn3oPHiQeiW/GdH9bX8+4hicA5SM9lH9uMqRWF8CVM05I8n9wgycTNkUnFohTUZ39/RfemagPf8+/ngI61mJJ+7aXsceHXt9R8DaTtmdoDdAI2TeRMDaLACQPQPBMqeQw/E9/RlJ2ZpJcH1SmkO2/fSik7q/ktR5rLEHhcAgiUApD2h7V72ZZBXJ/TBgoAQUBTm3tx4+zhjICFYNeQjUiv5K91bNnhfRkGSQCB5D7NN+vhA5F35JbFcvPIIH8TEXk4JaqSx+o0C4FSgJvM/DvLwTgDyUMsgabTAJxISgLK4vMkAVND7O1Z/8GiJbWz+XNRcpic5Yc/p3PtB0KmSkzmpqKHukHMZ7MFavFRWIv9Z9xaAfjtUJDKe/jt8/rSeIXw3LnAYiB+7Lsi9icu4KAipH1lYxKVWACYVON5Tg4n313Tpr/3FGLxECO8fO3MgetJt8ud/jPq1NZdV4K/b6D9FKoGT77wZtdPFG9ywPupDm1sivbprryi/B3OeBD+egJgQ0l/U3FvjB10UNSWgIvGxBG9W0eKmoHwAkva4Xh8gKnCS5J7QyssuG++aAAnB4s/Ixuq6pyFk4oZbwQ/hpdNL+SOE3R4mxowEhUKFyK40qjCRE1a/+1+AxhtMW8ALKvX3ZfGGoFkBj6S9PulBzUu3z9x/jr3/i9X+dHIVDMztoB4JxD0BGX0fzucPikl6Xe2DooK02226ctwHCIUpALwCEDDmcYAPXpNY1LFZH22XAFLKguAHs1P6Pyc8+eHO5v1bC6mCgTogSN7PvX/UXne8VwbFqcKpy0PPjasIwfewblPjib+GqsmPLwKIWAG5toqSmIRbp6XEXmmRdrvvJ9s5B+OM+pQW3bpXAMrlG1sFgH5h+rQbV0cugJrTIjI96dHBDDXH0bHpEvPbXeb+m9H47jetK0AyDoI+jpw0K4lO6C0i7AumNTH7/XEiPk6RK9Nf/rIOVYOfFSo3/xpCj06VndtJ7y0EZcOYB0mjlrg6s9UGfMcTKuthSrDJ8VUAmB+WkSktvAnq5wKIeh4SJrDdjCgcE36I+YuL0CtQ+HUvjMVBeRAS4Z1gt5S+gs+5M17QSxyegoKLYgpSZzQaz1Tn+6fkWDDlBFtC8vmmS7DtircFL0CEmA0YF0+Mc03AZIkCsGMCxk8JYIUYmoTEJpZlPZ83++1h+r9gpuZ+CltBDjDKRP68mgh5M7AXbvzjg+G1jWMEi8W2Iw8FQ2WzHOn7kSXtd1aNFUb41UnIv/cN6CX58YNGqRXiFIJYY83OFpE7p49O0oZZbd9Y1gSoe1+ysq5JJgWV1UZzhoBsx76Cn+igAu+gRSk0AGV+kHH6UCuGVw/1zPynoMCsfuevdSGNy+Eb2SHCIBILRTrbRfj7MYU0of0+jmEvkp84BKuP3dt11d+6YGnwmydCPYJMrRAIbXX3ErkHweRPYzVakaHi/9gcjBsikfFIAYxjRaC4Zk4vo2AX/bNQgYgyAABRhJwOndXbjj8F/UKiWf6tr+q8PM3vuXiGN/8lDZLFZr8PslEf22UyDj0CjSe/pnvmfpAf+jvSDBm1ki59BsAcSO/C479aouTHMRugZHyRvo4tgAlYgHEC57G79Jq4hxCx7xvyydLnvSM/IPIJTC+VW2WiU2SvPgv9BGMCq//1zyF/5hElqKcjpZWWyMaISBlIcgzWHDQW/qO65t9BP9EBRlfyLEX4jPXOEI8wUm2tMBFSh/p78DcD0f3hvrEsDZ6IO/kJ+mL5teNnLrxk5wH1Kc7CGIC+v7j8Br3uvFzX14SgU/ChfW/q9hdq8MOZmvqzIE9UVP7bJhh3kC99X0e80dwVeoSj8FZKuF8A2oNGgTN1jfx/fVP3xPBO792YAo1zAFvVT/GSq0mbwbeZftTpdt/LQ1nAMMzhKBqrPY/RDAra/z+88J/otsmS4x5Xf1+CMUBcd0sw263/69d1hx8movC+v/0POxwhS8x/cOa1NPnsDURnCL73Tb2O5q5QgS9xcQ3gfTWz36YzjHoTJuj2c1NbAEpxyY0Q+gRUoGLPLbadgsRdii6B+Q7CPAd2J3jrh17DnbfjRoBDvctmDBLqN1xw8QsKQOUIF7JsDBTA+2vaBTC18BJ8+SxQM9lmAYA8/Yf6xsLVC7hNZKTcu7/UpvOggPEBSQYj4TTeZsXe98p7ffPt28GXPKO7lkx1FgQfvKsmRdGV0QrOTZ7ilIBdR2UoPrhrLKyAPM8fT7cVHw1mcoQjPz9Adh0O/CEGvf/NxOGjNf1mH3EOboJ7nR9+AgYZFCr9h9OLoYANoPA75HETuM5l7ASEDID0dRsk5WEPCsc5BULHFWh2jEkwcCIOACIFBYA5QjkG2QCt9UsCYWEIr3ntkSVLf4xVJOTHt1G+/ygiX3gyZC6i7yxkNmhdQ+oiuONSZe2+33FIB6pbX6T5f0fpw0GV7/s4jDBCaXx53sWkyIdElIGYllJ6RWB+UzS/TiLlkuTO8Vj0oQfAfx4Zzir3BIOaUiZlziEjQNOcGpKVcdmBSEfTLxGDpB8c7RGCGciHy7eXkGfwEIwwGAwr5PIjvzE19cP2kgnASETdXDP/0SIw1WIsKlFitUEUiA0DnURcxCTJcZIOmrJ1GzfeDqNMo8T8R0oVgHUDSk8YejCYpE0+WvIbineoIEe9iH2dVpn58xH34xuTtFI/kT86aGZC8qYXRN8LJRJ6VwMBiYWgV0MFpMDMyIjWBFjzv162L2t2knIDDsIIIi7dDVF9ubPpBR36mgT+hCCyHgJNrqcJwUAF9v5s/lcPZil+VfeJVqBLESvknMZicBG5Aakyt8dNb7Edw+ixlkvfVAEoN+B+GEU+th98xB4SXx5KYnz6BZl2SgadEVYcGPyrfuIPxpA/S/L1ghYvEUuOBgSBjNL0ip0oD/pl4+srRjMboGS5aYVvUwUwkm6ACvzBpbsgHsgD3vwH6uFHpmYQeHdeGBQUdIB8R6XU6v0t/R0r0LXCYiVw05jT7yVE+f2ciO67s1EambpsIpyn3YAP7rbPhBgd1jL/kWytk0ctGyCw9Jemi8gyGmUm17hIcrzfjOex799zdIDVfvR+/kMtyUEhmxV9hD4mmtJMkhGDkqh86xKIPbfCKNEs+h/2r4HNBoxOUdDV+6E4XVboGeLhv4migLiWvFRJHBns4p+RoB7qKyQxzYrfK/jteZ7GdcIxeS5D4Bf3qd/IKNEs+u9YUwGMVFEQmne69BcgLRYRZLZfgwvsxXEAIPUBrgTY/5gw8PfLk8D0mF8cA4mfs4QoIyCIm0+DvJIs3fHmu/Mh3ChoqH8jo1ITIMRDa5n/yJoKAFEf1H0wCqBmd8KaPBhDyrgHcZH/8Jr4mO4HRa+N5x+pftJPpgnKCkiDtVIC6cehEJ91jzZ3x/uCIiAKwZ0wIsHAstr/lHUVgH2AwPC7ARj8AwjFInlRkqlQp6nCZjPT+lhinUt/+4ZWtnHFn0jKeyNk+N79a0lmEQZyKfzvo3OjEAys119YWHd+j3UVgEE+AMMMavTzt0cBn6gexJv/aT15WOZR758MOcXgH+f++wfWBPz8KPXPvBWXlxZq+cNc9+/Oirc763B6qx8yPazkLcpsSwpg6GsCUKPLpMeXEAX/7ArQPD/9DVHTsmA1/HgRmP4iTxKLKzL1wbhkkH5XgmyTscIHQVw8+/fxIS8Nzlqb3aslBYDBQJUSHM7pwlTuX15xo/6C8zyp8idBvCDswlsIghzjg31U+N1JJ9n87zfixwdBrpyKYwFEqbuqDvedusAt+NdAzH//zZtX+FK5jEPrBrQQ/HO06AKodEIDhtINkCr6L5Kqr6goTJTV+kNkIZCrmf8l6TuOKn90ZXDH0o8syg0QmHZtopjTbIDL2tDvOIwXcOMHqFUIxnIcQvJG/nCrx060euDyG8frs9uvmVPyUoNh4rfvNBWAEKr34nn8yigLJoXHYsMvjqof33dAPKV04kmu/NswVEpQvKQsgV/VTW99/vbkgDiTY7729b57cuzEtL7+MKEr/44s3Nfq8ZPQBpgSVMIzB8MCmv8f2AUhT2w0PgaKCnN5ItQGdMX/bvnaEcheexHgpUUO+A0S775phBT/UNGrgK/cfYtZF9ILs4hqvK1LYBWCJL8Hc7zdduluc513h+f7Xq/yL2V9dZhw5XW3nVCLGgwBEnv/3be4uh7/xSKl8i9is1+gaX/0CdPTvMZlvkOFiuLLq+cALr/RdARQ1OlAtxHrgCoH+OEjIJ7r73ToXVB/9fnHdrRzQlsWAKJ6z/syIR6EYeCKm6JIcDzpRxGtJHBuvJcXQWBgj4V+eMGhw796CODph7QVKLAQTPXo4rztIEnQz4eG3A8FfwNZUATYgQyLAhAdFO21bQEgw2AFyA/sBvm5/xBvFC4yHAJ9GgwovXwQxE8O6d6eGV20S/iR/SCdeU/NAn8QRHnf7O/vG4bfRdu9P9K2BYAMhRXgBnVQ506G4g8076USeKF8evHrOkfyxwTtyqk/LfeX7zMxA1xiEDGZ9t0tcL8YcAUgOizZ78gCQAbdCsi/+KCZ5QWIv6fMe/FWXQfydG/PQs8g6neCQi6xYvRyMw7AeQS6/1AWYvbonw/y76Wj3h/pyAJABtkKkGjiTYUiDoFpu588q8z8RRZ6poj6TWgX8OWDIXOEvyHlRmqmt5o4wk8GM+Uruhiw17EFgOzYc9tTSkPOwYCRf/orWqvrXh4Deiz0TCdYZSA/Mqdf6ljA4NFx7490pQBq187PZZl4CgYN9OdY6JkqGdB6ANX73/XKCwsPQYd0pQCQQbUCGGbkkWLh1Re+fRt0QctjAZq2oSG/DAzD9J18Iu9a9rpWAPVjC0sw7PMFMMyw0caIv7XoWgEgeQb3whg8UZhhBoR6LvJKIpItjwZci+XXjp+58JKdZ5Va+iwwDNNTVODvyyee11P1dX8tqBAOCDJMz+kq7ZdSiQvg4IAgw/SWPJM3Q4VU4gI4lt88/ppyBXDIzRwwDFMx8r4ThxcqnZqvUhfAseO6255TF94LDMNURaWmv6NSF8AhV+VdwDBMZVRt+jsqdQEc7AowTJVUb/o7euICONgVYJiu6Ynp7+iJC+CQmcQ6ZS4QYpjOWO6V6e/oiQvgWH7t+DIXCDFMp8i/UKb/30MP6akCQN56/fjTSglcqJTAJ4BhmBaRD7z6/MK90GN66gI47FiBOjAM0wp1KzM9p6dBQEpt73wty8VzanUWGIZpBvr9N1Qx0q8Veu4CODAesG37zteFEPPAMEwpQsp/X9VAn1bomwJAlt84vsT1AQzTDHnfqy8s3A99pG8uAOXKPX/4mFJ1bAkwjEOIhVcPdze9Vyf0JQiYkk/kWCpcB4ZhEJzgY0PK5zdEAagAhytwqAPDjDd1lAWUCdgANsQFcNR2ze/NJvW04pwZYMaRvkb8y9gQC8CBE4rmuey738Mwg0Au5V0bKfxIX7MAZajMQF2lB09yepAZL+SXT3TxQI+q2HAFgHB6kBkvVLrv+YW/ggFgIBQA8tbrxxdZCTCjjxb+e2FAGBgFgLASYEabwRJ+ZKAUAMJKgBlNBk/4kYFTAAgrAWa0GEzhRwZSASCsBJjRYHCFHxlYBYCwEmCGm8EWfmSgFQBilcDbPK0YM0wIKe/q98i+Thh4BYDgtGLbtu88LIRWAjPAMIPLcp7Lz5040ptpvKtmQ8cCtIudVQjHDtSAYQYPHNhzW31pYQmGhKFSAAgrAWZAcaP66jBEbOhgoE7ADxhHUIEUQ2FiMWOAEAsbPaqvU4bOAqBced38veoW7gGG2TAGP9K/FkMRBGwGZgjsSMI54OAg01+WcQLPYYj0r8VQWwAOjgswfWYo/f0yhi4GUIaPC4B8ABimp8gHhtXfL2MkLACKigvcbeMCPM0YUyXL1t8fapM/ZeQUAMIuAVMlEmBJmvx+HUaMkVQADs4SMN0z3FH+9RhpBYCwNcB0gu317xqmqr5OGHkF4GBrgGmd0e71KWOjABC2Bpi1kBIW5YT88qj3+pSxUgCO2p75A5nQ1kANGGZEI/ytMNSVgJ2C05Bvu3Tn48rRu1CA2AvMGIN5fbjtxOH+PZJ7kBhLC4CCbsGEhK9LyQ8mGSfG0dwvY+wVgIPdgvFAC76U99WPjGePn8IKIIEVwchSF0rwXxmAx3ENEqwAmsCKYGRgwV8DVgDrwIpgaGHBbwFWAC2CikBlDO4UAuaAGVjYx28PVgBtUrt2fk5koJUBMIODFAu5zB9gwW8PVgAdYqoKQaUOxZeA3YONYtnm8e9X6bxlYNqGFUAFKPdgXrkG82wV9IVlZeYvsZlfDawAKgStAmjAHMcKqgd9eyHk46q3f4h7++pgBdAjnIsgpfg8K4POsEJ/kE383sEKoA+wZdAy2rznnr5/sALoM0oZzGplIHQA8Xr1BYz7YKS66usfz3NYgElYYqHvL6wANhhrHezNlGUgQewfdYWAM+0IUGa96ulhAhZY4DcWVgADhrYQVpVCyJQikNl+KWRtiJVCXeXnF0Hkh1UPv8Q9/ODBCmBIwAIk9W3NKksBFcP1VjHUYOOnP1+WuuxWLClBf1v37A31Nw11FvbBhxXAkKMthhWlCDKlCATUlIKoASoFmW2TIHEdhIgKlWrrXLLuVlRATq+r4GUdhRvw2fdm27IS8joL+fDz/wHucBaSz24T/AAAAABJRU5ErkJggg==";
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.WALLET_MODULE_NAME =
        t.HISTORY_TITLE_REGULAR =
        t.HISTORY_TITLE_BASIC =
        t.DISABLED_COINS =
        t.CURRENT_FIAT_CURRENCY =
        t.CURRENCIES =
        t.COB =
        t.CACHE_DIR =
          void 0);
    t.COB = "https://ob.atomicwallet.io";
    t.HISTORY_TITLE_BASIC = "Exchange";
    t.HISTORY_TITLE_REGULAR = "Wallet";
    t.WALLET_MODULE_NAME = "wallet";
    t.CURRENT_FIAT_CURRENCY = "current_fiat_currency";
    t.CACHE_DIR = "/AtomicCache";
    t.CURRENCIES = [
      { code: "BTC", name: "Bitcoin", char: "Ƀ" },
      { code: "USD", name: "United States dollar", char: "&#36;" },
      { code: "AUD", name: "Australian dollar", char: "&#36;" },
      { code: "BRL", name: "Brazilian real", char: "&#82;&#36;" },
      { code: "CAD", name: "Canadian dollar", char: "&#36;" },
      { code: "CHF", name: "Swiss franc", char: "&#67;&#72;&#70;" },
      { code: "CLP", name: "Chilean peso", char: "&#36;" },
      { code: "CNY", name: "Chinese yuan", char: "&#165;" },
      { code: "CZK", name: "Czech koruna", char: "&#75;&#269;" },
      { code: "DKK", name: "Danish krone", char: "&#107;&#114;" },
      { code: "EUR", name: "Euro", char: "&#8364;" },
      { code: "GBP", name: "British pound", char: "&#163;" },
      { code: "HKD", name: "Hong Kong dollar", char: "&#36;" },
      { code: "HUF", name: "Hungrian forint", char: "&#70;&#116;" },
      { code: "IDR", name: "Indonesian rupiah", char: "&#82;&#112;" },
      { code: "ILS", name: "Israel new shekel", char: "&#8362;" },
      { code: "INR", name: "Indian rupee", char: "&#8377;" },
      { code: "JPY", name: "Japanese yen", char: "&#165;" },
      { code: "KRW", name: "South Korean won", char: "&#8361;" },
      { code: "MXN", name: "Mexican peso", char: "&#36;" },
      { code: "MYR", name: "Malaysian ringgit", char: "&#82;&#77;" },
      { code: "NOK", name: "Norway krone", char: "&#107;&#114;" },
      { code: "NZD", name: "New Zealand dollar", char: "&#36;" },
      { code: "PHP", name: "Philippine peso", char: "&#8369;" },
      { code: "PKR", name: "Pakistani ruppie", char: "&#8360;" },
      { code: "PLN", name: "Polish zloty", char: "&#122;&#322;" },
      { code: "RUB", name: "Russian ruble", char: "&#8381;" },
      { code: "SEK", name: "Swedish krona", char: "&#107;&#114;" },
      { code: "SGD", name: "Singapore dollar", char: "&#36;" },
      { code: "THB", name: "Thai bat", char: "&#3647;" },
      { code: "TRY", name: "Turkish lira", char: "₺" },
      { code: "TWD", name: "New Taiwan dollar", char: "&#78;&#84;&#36;" },
      { code: "ZAR", name: "South African rand", char: "&#82;" },
    ];
    t.DISABLED_COINS = ["SMART", "GRS", "BCD", "YEC", "LSK", "NEO", "GAS"];
  },
]);
