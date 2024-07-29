self.webpackChunkdouyin_web = self.webpackChunkdouyin_web || []
self.webpackChunkdouyin_web.push([
    [8306],
    {
        78306: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    SecureSDK: function () {
                        return t0
                    },
                    createSecureInstance: function () {
                        return t1
                    }
                });
            var i, r, o, a, s, c, u, l, h, f, d, p, g, m = function (e) {
                return e ? e.startsWith("http") ? new URL(e).pathname : e : ""
            }, v = n(50045), _ = function () {
                return (_ = Object.assign || function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }
                ).apply(this, arguments)
            }, y = {
                params_for_special: "uc_login"
            }, b = function () {
                function e(e) {
                    var t = e.appId
                        , n = e.config;
                    this.zeroTrustTea = new v.Collector("zeroTrustTea"),
                        this.zeroTrustTea.init({
                            app_id: t,
                            channel: "cn",
                            log: !1,
                            disable_auto_pv: !0,
                            disable_webid: !0
                        }),
                        this.setConfig(void 0 === n ? {} : n),
                        this.zeroTrustTea.start()
                }

                return e.initTea = function (t) {
                    var n = t.appId
                        , i = t.config;
                    return this._instance || (this._instance = new e({
                        appId: n,
                        config: void 0 === i ? {} : i
                    })),
                        this._instance
                }
                    ,
                    e.getTea = function () {
                        return this._instance
                    }
                    ,
                    e.prototype.setEvtParams = function (e) {
                        this.zeroTrustTea.config({
                            evtParams: e
                        })
                    }
                    ,
                    e.prototype.setConfig = function (e) {
                        void 0 === e && (e = {}),
                            this.zeroTrustTea.config(_({
                                _staging_flag: 0
                            }, e))
                    }
                    ,
                    e.prototype.sendLog = function (e, t) {
                        e && this.zeroTrustTea.event(e, t)
                    }
                    ,
                    e.prototype.sendBecon = function (e, t) {
                        e && this.zeroTrustTea.beconEvent(e, t)
                    }
                    ,
                    e
            }(), w = function (e) {
                var t = e.appId
                    , n = e.webId
                    , i = void 0 === n ? "" : n
                    , r = e.config;
                b.initTea({
                    appId: (void 0 === t ? 1661 : t) || 1661,
                    config: _({
                        user_unique_id: i,
                        device_id: i,
                        user_id: i
                    }, void 0 === r ? {} : r)
                })
            }, S = function (e) {
                var t;
                void 0 === e && (e = {}),
                null === (t = b.getTea()) || void 0 === t || t.setEvtParams(e)
            }, E = function (e, t) {
                var n;
                return null === (n = b.getTea()) || void 0 === n ? void 0 : n.sendLog(e, _(_({}, y), t || {}))
            }, k = function (e, t) {
                var n;
                return null === (n = b.getTea()) || void 0 === n ? void 0 : n.sendBecon(e, _(_({}, y), t || {}))
            };
            (i = g || (g = {})).logWebBdTicketGuardConsumerResponse = "web_bd_ticket_guard_consumer_response",
                i.logWebBdTicketGuardEnv = "web_bd_ticket_guard_env",
                i.logWebBdTicketGuardLocalMiss = "web_bd_ticket_guard_local_miss",
                i.logWebBdTicketGuardIframeStatusBeforeUnLoad = "web_bd_ticket_guard_iframe_status_before_unload",
                i.logWebBdTicketGuardIframeStatus = "web_bd_ticket_guard_iframe_status",
                i.logWebBdTicketGuardConsumerResponseError = "web_bd_ticket_guard_consumer_response_error";
            var D = function (e, t) {
                var n, i, r, o, a, s, c, u, l, h = "";
                try {
                    h = m(null === (n = null == e ? void 0 : e.config) || void 0 === n ? void 0 : n.url)
                } catch (e) {
                }
                var f = (null === (i = null == e ? void 0 : e.headers) || void 0 === i ? void 0 : i["bd-ticket-guard-result"]) || "-99"
                    ,
                    d = (null === (r = null == e ? void 0 : e.headers) || void 0 === r ? void 0 : r["x-tt-logid"]) || ""
                    ,
                    p = null === (o = null == e ? void 0 : e.reqHeaders) || void 0 === o ? void 0 : o["bd-ticket-guard-version"]
                    ,
                    v = null === (a = null == e ? void 0 : e.reqHeaders) || void 0 === a ? void 0 : a["bd-ticket-guard-iteration-version"]
                    ,
                    _ = (null === (s = null == e ? void 0 : e.reqHeaders) || void 0 === s ? void 0 : s["bd-ticket-guard-client-csr"]) ? 1 : 0
                    ,
                    y = (null === (c = null == e ? void 0 : e.reqHeaders) || void 0 === c ? void 0 : c["bd-ticket-guard-client-cert"]) ? 1 : 0
                    ,
                    b = (null === (u = null == e ? void 0 : e.reqHeaders) || void 0 === u ? void 0 : u["bd-ticket-guard-client-data"]) ? 1 : 0
                    , w = (null == e ? void 0 : e.loginStatus) || "-1"
                    , S = (null == e ? void 0 : e.cookieStatus) || "0"
                    , k = (null == e ? void 0 : e.signVersion) || "0"
                    , D = (null == e ? void 0 : e.webDomain) || "3"
                    , T = (null == t ? void 0 : t.dataFrom) || "-99"
                    , C = (null == t ? void 0 : t.crossStatus) || "-99"
                    , O = (null == e ? void 0 : e.cookieCrypt) || "0"
                    , x = (null == t ? void 0 : t.match_md5_local) || "-99"
                    , I = (null == t ? void 0 : t.match_md5_iframe) || "-99"
                    , A = t.is_pubkey_ts_sign || "1"
                    , M = (null == t ? void 0 : t.isConnection) || "-99"
                    , K = (null == t ? void 0 : t.retryCount) || "-99"
                    , P = (null == t ? void 0 : t.lost) || "0"
                    , G = (null == t ? void 0 : t.initMatch) || "0"
                    , R = (null == t ? void 0 : t.is_new_cert) || "0"
                    ,
                    B = (null === (l = null == window ? void 0 : window.location) || void 0 === l ? void 0 : l.hostname) || "";
                E(g.logWebBdTicketGuardConsumerResponse, {
                    logid: d,
                    path: h,
                    ticket_guard_version: p,
                    ticket_guard_iteration_version: v,
                    request_with_csr: _,
                    request_with_cert: y,
                    request_with_client_data: b,
                    error_code: f,
                    login_status: w,
                    sign_version: k,
                    cookie_status: S,
                    data_from: T,
                    cookie_crypt: O,
                    iframe_status: C,
                    match_md5_local: x,
                    match_md5_iframe: I,
                    is_pubkey_ts_sign: A,
                    iframe_connection: M,
                    iframe_retrycount: K,
                    lost: P,
                    init_match: G,
                    is_new_cert: R,
                    hostname: B,
                    cookie_domain: D
                }),
                f > 0 && E(g.logWebBdTicketGuardConsumerResponseError, {
                    logid: d,
                    path: h,
                    ticket_guard_version: p,
                    ticket_guard_iteration_version: v,
                    request_with_csr: _,
                    request_with_cert: y,
                    request_with_client_data: b,
                    error_code: f,
                    login_status: w,
                    sign_version: k,
                    cookie_status: S,
                    data_from: T,
                    cookie_crypt: O,
                    iframe_status: C,
                    match_md5_local: x,
                    match_md5_iframe: I,
                    is_pubkey_ts_sign: A,
                    iframe_connection: M,
                    iframe_retrycount: K,
                    lost: P,
                    init_match: G,
                    is_new_cert: R,
                    hostname: B,
                    cookie_domain: D
                })
            }
                , T = function (e) {
                k(g.logWebBdTicketGuardIframeStatusBeforeUnLoad, e)
            }
                , C = function (e) {
                E(g.logWebBdTicketGuardIframeStatus, e)
            }
                , O = n(48480)
                , x = function (e, t) {
                var n, i, r, o, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0])
                            throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                        return this
                    }
                ),
                    o;

                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw TypeError("Generator is already executing.");
                            for (; a;)
                                try {
                                    if (n = 1,
                                    i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                        0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0,
                                    r && (o = [2 & o[0], r.value]),
                                        o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++,
                                                {
                                                    value: o[1],
                                                    done: !1
                                                };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e],
                                        i = 0
                                } finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
                , I = function (e) {
                return O.utf8tob64(e)
            }
                , A = function (e) {
                var t = new O.KJUR.crypto.MessageDigest({
                    alg: "md5",
                    prov: "cryptojs"
                });
                return t.updateString(e),
                    t.digest()
            }
                , M = function (e) {
                return O.hextob64(e)
            }
                , K = function (e) {
                return O.b64toutf8(e)
            }
                , P = function (e) {
                var t = O.KEYUTIL.getKey(e);
                return O.KEYUTIL.getPEM(t)
            }
                , G = function (e) {
                for (var t = [], n = 0; n < e.length; n += 3)
                    for (var i = e[n] << 16 | e[n + 1] << 8 | e[n + 2], r = 0; r < 4; r++)
                        8 * n + 6 * r <= 8 * e.length ? t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - r) & 63)) : t.push("=");
                return t.join("")
            }
                , R = function (e) {
                return e ? G(function (e) {
                    for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2)
                        t[n / 2] = parseInt(e.substr(n, 2), 16);
                    return t
                }(O.KEYUTIL.getKey(e).generatePublicKeyHex())) : ""
            }
                , B = function (e, t) {
                try {
                    if (!e || !t || "string" != typeof e)
                        return !1;
                    var n = JSON.parse(e)
                        , i = P(t)
                        , r = (n || {}).ec_publicKey;
                    if (i === r)
                        return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            }
                , L = function (e, t) {
                try {
                    if (!e || !t || "string" != typeof e)
                        return !1;
                    var n = (JSON.parse(e) || {}).ec_privateKey
                        , i = R(n)
                        , r = t.split(".")[1];
                    if (i === r)
                        return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            }
                , N = function (e, t, n, i) {
                try {
                    if (!e || !t || !n || !i || "string" != typeof t || "string" != typeof i)
                        return !1;
                    var r = (JSON.parse(t || "{}") || {}).ec_publicKey;
                    if (!r)
                        return !1;
                    if (A(JSON.stringify({
                        publicKey: r,
                        cert: n,
                        serverData: i
                    })) === e)
                        return !0
                } catch (e) {
                }
                return !1
            }
                , U = function (e, t, n) {
                try {
                    if (!e || !t || !n || "string" != typeof e || "string" != typeof n)
                        return "";
                    var i = (JSON.parse(e) || {}).ec_publicKey;
                    if (!i)
                        return "";
                    return A(JSON.stringify({
                        publicKey: i,
                        cert: t,
                        serverData: n
                    }))
                } catch (e) {
                }
                return ""
            }
                , z = function (e, t, n, i, r) {
                return function () {
                    for (var o, a, s, c, u = [], l = 0; l < arguments.length; l++)
                        u[l] = arguments[l];
                    return o = void 0,
                        a = void 0,
                        s = void 0,
                        c = function () {
                            var o;
                            return x(this, function (a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]),
                                            [4, e.apply(this, u)];
                                    case 1:
                                        return [2, a.sent()];
                                    case 2:
                                        return o = a.sent(),
                                        null == n || n(o, t, r, i, u),
                                            [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        }
                        ,
                        new (s || (s = Promise))(function (e, t) {
                                function n(e) {
                                    try {
                                        r(c.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function i(e) {
                                    try {
                                        r(c.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function r(t) {
                                    var r;
                                    t.done ? e(t.value) : ((r = t.value) instanceof s ? r : new s(function (e) {
                                            e(r)
                                        }
                                    )).then(n, i)
                                }

                                r((c = c.apply(o, a || [])).next())
                            }
                        )
                }
            }
                , j = function (e) {
                var t, n;
                return function () {
                    for (var i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                    return t ? Promise.resolve(t) : (n || (n = new Promise(function (r, o) {
                            e.apply(void 0, i).then(function (e) {
                                e && (t = e),
                                    r(e),
                                    n = void 0
                            }).catch(function (e) {
                                o(e),
                                    n = void 0
                            })
                        }
                    )),
                        n)
                }
            }
                , V = function () {
                function e() {
                    var e = this;
                    this.list = [],
                        this.count = 0,
                        this.maxCount = 1,
                        this.provider = function (t) {
                            return e.addTask(function () {
                                return new Promise(function (e, n) {
                                        t().then(function (t) {
                                            e(t)
                                        }).catch(function (e) {
                                            n(e)
                                        })
                                    }
                                )
                            })
                        }
                        ,
                        this.wait = function () {
                            e.provider(function () {
                                return Promise.resolve(!0)
                            })
                        }
                        ,
                        this.list = [],
                        this.count = 0
                }

                return e.prototype.addTask = function (e) {
                    var t = this;
                    return new Promise(function (n) {
                            t.list.push(function () {
                                return e().then(function (e) {
                                    return t.count -= 1,
                                        t.consume(),
                                        n(e),
                                        e
                                })
                            }),
                                t.consume()
                        }
                    )
                }
                    ,
                    e.prototype.consume = function () {
                        if (this.count < this.maxCount && this.list.length > 0) {
                            this.count += 1;
                            var e = this.list.shift();
                            e && e()
                        }
                    }
                    ,
                    e
            }()
                , $ = function (e, t, n) {
                if (n || 2 == arguments.length)
                    for (var i, r = 0, o = t.length; r < o; r++)
                        !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)),
                            i[r] = t[r]);
                return e.concat(i || Array.prototype.slice.call(t))
            }
                , q = function () {
                function e() {
                    this.eventMap = {}
                }

                return e.prototype.on = function (e, t) {
                    var n = this.eventMap;
                    n[e] ? n[e].push(t) : n[e] = [t]
                }
                    ,
                    e.prototype.off = function (e, t) {
                        var n = this.eventMap;
                        if (n[e])
                            for (var i = n[e], r = i.length; r >= 0; r--)
                                t && i[r] !== t || i.splice(r, 1)
                    }
                    ,
                    e.prototype.emit = function (e, t) {
                        var n = this.eventMap[e];
                        n && $([], n, !0).forEach(function (e) {
                            e(t)
                        })
                    }
                    ,
                    e.prototype.has = function (e, t) {
                        var n = this.eventMap;
                        return !!n[e] && ("function" != typeof t || -1 !== n[e].indexOf(t))
                    }
                    ,
                    e
            }()
                , W = "4.0.1";

            function H() {
                var e, t;
                try {
                    return !!navigator.userAgent.match(/chrome\/[\d.]+/gi) && !!(null == navigator ? void 0 : navigator.userAgentData) || !!(null === (e = navigator.storage) || void 0 === e ? void 0 : e.getDirectory) || !!navigator.canShare || -1 !== ((null === (t = window.Promise) || void 0 === t ? void 0 : t.allSettled) || "").toString().indexOf("[native code]") && !!(Number((navigator.userAgent.match(/Chrome\/(\d+\.+\d+)/) || [])[1]) >= 76 && window.visualViewport)
                } catch (e) {
                    return !1
                }
            }

            var J = H()
                , F = "https://lf-zt.douyin.com"
                , Y = "".concat(F, "/obj/uc-assets/zt/")
                , X = function (e, t, n) {
                    return "".concat(e).concat("@byted/x-storage-web", "/").concat(t || W, "/dist/").concat(n || (J ? "latest" : "page"), "/index.html")
                }
                , Q = function (e) {
                    try {
                        localStorage.setItem("X_STORAGE_FALLBACK_VERSION", e)
                    } catch (e) {
                    }
                }
                , Z = function () {
                    try {
                        return localStorage.getItem("X_STORAGE_FALLBACK_VERSION")
                    } catch (e) {
                    }
                }
                , ee = function () {
                    var e = Z();
                    if (e)
                        return X(Y, e)
                }
                , et = (r = function (e, t) {
                        return (r = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            r(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , en = function (e) {
                    function t(t, n, i) {
                        var r = e.call(this, n) || this;
                        return r.message = n || "",
                            r.name = t,
                            r.origin = i || location.origin,
                            r
                    }

                    return et(t, e),
                        t
                }(Error)
                , ei = {}
                , er = {}
                , eo = function () {
                    try {
                        return indexedDB || window.indexedDB || webkitIndexedDB || mozIndexedDB || OIndexedDB
                    } catch (e) {
                        return
                    }
                }
                , ea = "DBStorageNotSupport"
                , es = Promise.resolve()
                , ec = 0
                , eu = function (e) {
                    return new Promise(function (t, n) {
                            e.onsuccess = function () {
                                t(e.result)
                            }
                                ,
                                e.onerror = function () {
                                    n(e.error)
                                }
                        }
                    )
                }
                , el = function (e, t) {
                    return new Promise(function (n, i) {
                            e.oncomplete = function () {
                                n()
                            }
                                ,
                                e.onabort = e.onerror = function () {
                                    var e,
                                        n = t ? t.error || (null === (e = t.transaction) || void 0 === e ? void 0 : e.error) : {
                                            name: "TransactionAbortOrError",
                                            message: ""
                                        };
                                    i(new en((null == n ? void 0 : n.name) || "TransactionAbortOrError", (null == n ? void 0 : n.message) || ""))
                                }
                        }
                    )
                }
                , eh = function () {
                    return (eh = Object.assign || function (e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n])
                                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }
                    ).apply(this, arguments)
                }
                , ef = function () {
                    function e(t) {
                        var n = this;
                        this.config = {
                            dbName: "secure-store",
                            storeName: "cryptvalues",
                            closeDBTime: 2e4
                        },
                            this.getItem = function (e) {
                                return n.getItemByKeys([e]).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            this.getItemByKeys = function (e) {
                                var t = n.config.storeName;
                                return n.transaction(function () {
                                    return n.openDB().then(function (n) {
                                        var i = n.transaction(t, "readonly").objectStore(t);
                                        return Promise.all(e.map(function (e) {
                                            return eu(i.get(e)).then(function (e) {
                                                return JSON.parse(e || "{}").data
                                            })
                                        }))
                                    })
                                })
                            }
                            ,
                            this.setItem = function (e, t) {
                                return n.setItemByKeys([[e, t]]).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            this.setItemByKeys = function (e) {
                                var t = n.config.storeName;
                                return n.transaction(function () {
                                    return n.openDB().then(function (n) {
                                        var i = n.transaction(t, "readwrite")
                                            , r = i.objectStore(t);
                                        return Promise.all(e.map(function (e) {
                                            var t = e[0]
                                                , n = e[1]
                                                , i = JSON.stringify({
                                                data: n
                                            });
                                            return eu(r.get(t)).then(function (e) {
                                                return e !== i && r.put(i, t),
                                                    n
                                            })
                                        })).then(function (e) {
                                            return el(i).then(function () {
                                                return e
                                            })
                                        })
                                    })
                                })
                            }
                            ,
                            this.removeItem = function (e) {
                                var t = n.config.storeName;
                                return n.openDB().then(function (n) {
                                    var i = n.transaction(t, "readwrite")
                                        , r = i.objectStore(t).delete(e);
                                    return el(i, r)
                                })
                            }
                            ,
                            this.getKeys = function () {
                                var e = n.config.storeName;
                                return n.transaction(function () {
                                    return n.openDB().then(function (t) {
                                        var n = t.transaction(e).objectStore(e).openKeyCursor();
                                        return new Promise(function (e, t) {
                                                var i = [];
                                                n.onsuccess = function () {
                                                    n.result ? (i.push(n.result.key),
                                                        n.result.continue()) : e(i)
                                                }
                                                    ,
                                                    n.onerror = function () {
                                                        t(n.error)
                                                    }
                                            }
                                        )
                                    })
                                })
                            }
                            ,
                            this.openDB = function () {
                                var t = n.config
                                    , i = t.storeName
                                    , r = t.dbName
                                    , o = t.closeDBTime;
                                return clearTimeout(er[r]),
                                    er[r] = setTimeout(function () {
                                        e.closeDB(r).catch(function () {
                                        })
                                    }, o),
                                    e.openDB(n.config).then(function (t) {
                                        if (!t.objectStoreNames.contains(i)) {
                                            var o = t.version + 1;
                                            return e.closeDB(r).then(function () {
                                                return e.openDB(n.config, o)
                                            })
                                        }
                                        return t
                                    })
                            }
                            ,
                            this.transaction = function (e) {
                                var t, i = n.config, r = i.dbName, o = i.onQuotaErrorCallback;
                                return t = function (e, t) {
                                    e && "function" == typeof o && o.call(n, t)
                                }
                                    ,
                                    es = es.then(function () {
                                        var n = function () {
                                            return e().then(function (e) {
                                                return ec = 0,
                                                    e
                                            }).catch(function (e) {
                                                if (ec < 3)
                                                    return ec++,
                                                        ei[r] = void 0,
                                                        Promise.resolve({
                                                            isQuotaError: "quotaexceedederror" === ((null == e ? void 0 : e.name) || "").toLowerCase(),
                                                            clean: function (e) {
                                                                var t = eo()
                                                                    , n = null == t ? void 0 : t.deleteDatabase(e || r);
                                                                return new Promise(function (e) {
                                                                        n ? (n.onsuccess = function () {
                                                                                e()
                                                                            }
                                                                                ,
                                                                                n.onerror = function () {
                                                                                    e()
                                                                                }
                                                                        ) : e()
                                                                    }
                                                                )
                                                            }
                                                        }).then(function (e) {
                                                            if ("function" == typeof t)
                                                                return t(e.isQuotaError, e.clean)
                                                        }),
                                                        n();
                                                throw ec = 0,
                                                    e
                                            })
                                        };
                                        return n()
                                    })
                            }
                            ,
                            this.config = eh(eh({}, this.config), t || {})
                    }

                    return e.isSupport = function () {
                        return !!eo()
                    }
                        ,
                        e.openDB = function (t, n) {
                            var i = t.dbName
                                , r = t.storeName
                                , o = t.version;
                            if (n && (ei[i] = void 0),
                                !e.isSupport())
                                return Promise.reject(new en(ea));
                            var a = eo()
                                , s = function (e, t) {
                                return new Promise(function (n, i) {
                                        var o = a.open(e, t);
                                        o.onsuccess = function () {
                                            n(o.result)
                                        }
                                            ,
                                            o.onerror = function (e) {
                                                var t, n;
                                                e.preventDefault(),
                                                    i(new en((null === (t = o.error) || void 0 === t ? void 0 : t.name) || "IndexedDBOpenError", null === (n = o.error) || void 0 === n ? void 0 : n.message))
                                            }
                                            ,
                                            o.onupgradeneeded = function (e) {
                                                try {
                                                    (o.result || e.target.result).createObjectStore(r)
                                                } catch (e) {
                                                    i(e)
                                                }
                                            }
                                    }
                                )
                            };
                            return ei[i] || (ei[i] = new Promise(function (e, t) {
                                    try {
                                        s(i, n || o || 1).catch(function (e) {
                                            if (ed(e))
                                                return ep(i).then(function (e) {
                                                    return e ? s(i, e) : s(i)
                                                }).catch(function () {
                                                    return s(i)
                                                });
                                            throw e
                                        }).then(e).catch(t)
                                    } catch (e) {
                                        t(new en(ea, e.message))
                                    }
                                }
                            ))
                        }
                        ,
                        e.deleteDB = function (t) {
                            var n = eo();
                            return n ? e.closeDB(t).then(function () {
                                if (null == n ? void 0 : n.deleteDatabase) {
                                    var e = null == n ? void 0 : n.deleteDatabase(t);
                                    if (e)
                                        return clearTimeout(er[t]),
                                            new Promise(function (t, n) {
                                                    e.onsuccess = function () {
                                                        t(e.result)
                                                    }
                                                        ,
                                                        e.onerror = function () {
                                                            n(null == e ? void 0 : e.error)
                                                        }
                                                }
                                            )
                                }
                                return Promise.reject(new en("IDBDeleteDataBaseError"))
                            }) : Promise.reject(new en("IDBObjectError"))
                        }
                        ,
                        e.closeDB = function (e) {
                            return new Promise(function (t, n) {
                                    ei[e] ? ei[e].then(function (i) {
                                        !function () {
                                            ei[e] = void 0;
                                            try {
                                                i.close(),
                                                    t(1)
                                            } catch (e) {
                                                n(e)
                                            }
                                        }()
                                    }).catch(n) : t(-1)
                                }
                            )
                        }
                        ,
                        e
                }()
                , ed = function (e) {
                    return "versionerror" === ((null == e ? void 0 : e.name) || "").toString().toLowerCase() && (!!(-1 !== ((null == e ? void 0 : e.message) || "").indexOf("version") || ((null == e ? void 0 : e.message) || "").match(/\s*less\s*than/i)) || -1 !== ((null == e ? void 0 : e.message) || "").match(/\s*higher\s*version\s*than\s*/gi) || void 0)
                }
                , ep = function (e) {
                    return new Promise(function (t, n) {
                            var i = eo();
                            if (null == i ? void 0 : i.databases)
                                return i.databases().then(function (n) {
                                    var i = n.filter(function (t) {
                                        return t.name === e
                                    })[0];
                                    t(null == i ? void 0 : i.version)
                                }).catch(n);
                            n(Error("idb.database is ".concat(typeof (null == i ? void 0 : i.databases))))
                        }
                    )
                }
                , eg = function () {
                    function e() {
                        var t = this;
                        this.getItem = function (e) {
                            return t.getItemByKeys([e]).then(function (e) {
                                return e[0]
                            })
                        }
                            ,
                            this.setItem = function (e, n) {
                                return t.setItemByKeys([[e, n]]).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            this.getItemByKeys = function (e) {
                                return t.openLocalStorage().then(function (t) {
                                    return e.map(function (e) {
                                        return JSON.parse(t.getItem(e) || "{}").data
                                    })
                                })
                            }
                            ,
                            this.setItemByKeys = function (e) {
                                return t.openLocalStorage().then(function (t) {
                                    return e.map(function (e) {
                                        var n = e[0]
                                            , i = e[1]
                                            , r = JSON.stringify({
                                            data: i
                                        });
                                        return t.setItem(n, r),
                                            i
                                    })
                                })
                            }
                            ,
                            this.removeItem = function (e) {
                                return t.openLocalStorage().then(function (t) {
                                    t.removeItem(e)
                                })
                            }
                            ,
                            this.getKeys = function () {
                                return t.openLocalStorage().then(function (e) {
                                    for (var t = [], n = 0; n < e.length; n++)
                                        e.key(n) && t.push(e.key(n));
                                    return t
                                })
                            }
                            ,
                            this.openLocalStorage = function () {
                                return e.isSupport() ? Promise.resolve(em()) : Promise.reject(new en("LocalStorageNotSupport"))
                            }
                    }

                    return e.isSupport = function () {
                        var e = em();
                        if (!e)
                            return !1;
                        try {
                            var t = "__x_storage_test__";
                            e.setItem(t, t);
                            var n = e.getItem(t);
                            return e.removeItem(t),
                            t === n
                        } catch (e) {
                            return !1
                        }
                    }
                        ,
                        e
                }()
                , em = function () {
                    return window.localStorage
                }
                , ev = {}
                , e_ = function () {
                    function e() {
                        var e = this;
                        this.getItem = function (t) {
                            return e.getItemByKeys([t]).then(function (e) {
                                return e[0]
                            })
                        }
                            ,
                            this.setItem = function (t, n) {
                                return e.setItemByKeys([[t, n]]).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            this.getItemByKeys = function (t) {
                                return e.openMStorage().then(function (e) {
                                    return t.map(function (t) {
                                        return JSON.parse(e.getItem(t) || "{}").data
                                    })
                                })
                            }
                            ,
                            this.setItemByKeys = function (t) {
                                return e.openMStorage().then(function (e) {
                                    return t.map(function (t) {
                                        var n = t[0]
                                            , i = t[1]
                                            , r = JSON.stringify({
                                            data: i
                                        });
                                        return e.setItem(n, r),
                                            i
                                    })
                                })
                            }
                            ,
                            this.removeItem = function (t) {
                                return e.openMStorage().then(function (e) {
                                    e.removeItem(t)
                                })
                            }
                            ,
                            this.getKeys = function () {
                                return e.openMStorage().then(function () {
                                    return Object.keys(ev)
                                })
                            }
                            ,
                            this.openMStorage = function () {
                                return Promise.resolve({
                                    setItem: function (e, t) {
                                        ev[e] = "".concat(t)
                                    },
                                    getItem: function (e) {
                                        return ev[e] || null
                                    },
                                    removeItem: function (e) {
                                        delete ev[e]
                                    }
                                })
                            }
                    }

                    return e.isSupport = function () {
                        return !0
                    }
                        ,
                        e
                }()
                , ey = window
                , eb = ey.addEventListener
                , ew = ey.removeEventListener
                , eS = ey.location
                , eE = document
                , ek = function () {
                    return performance.now && Number(performance.now().toFixed(0)) || Date.now()
                }
                , eD = function (e) {
                    var t = e.split("//") || [];
                    return "".concat(t[0], "//").concat(t[1].split("/")[0])
                }
                , eT = function (e, t) {
                    return -1 !== e.indexOf("html?") ? "".concat(e, "&").concat(t) : "".concat(e, "?").concat(t)
                }
                , eC = function (e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (-1 === t.indexOf(e[n]))
                            return !1;
                    return !0
                }
                , eO = function (e, t) {
                    for (var n = Promise.reject(new en("WebStorageRunSerialQueueError")), i = function (i) {
                        n = n.then(function (n) {
                            return "function" == typeof t && t(n) || void 0 === n ? e[i]() : n
                        }).catch(function () {
                            return e[i]()
                        })
                    }, r = 0; r < e.length; r++)
                        i(r);
                    return n
                }
                , ex = function (e) {
                    for (var t = Promise.reject(new en("WebStorageRunSerialQueueIfOneResolveError")), n = function (n) {
                        e[n] && (t = t.then(function (t) {
                            return e[n]().catch(function (e) {
                            }),
                                t
                        }).catch(function (t) {
                            return e[n]()
                        }))
                    }, i = 0; i < e.length; i++)
                        n(i);
                    return t
                }
                , eI = "J_uc_iframe_box-".concat(Date.now())
                , eA = function () {
                    var e = function () {
                        var e = document.getElementById(eI);
                        if (e)
                            return e;
                        var t = document.createElement("div");
                        return t.style.display = "none",
                            t.id = eI,
                            eE.body.appendChild(t),
                            t
                    };
                    return new Promise(function (t) {
                            var n = eE.body
                                , i = {
                                appendChild: function (t) {
                                    e().appendChild(t)
                                }
                            };
                            n ? t(i) : "loading" === eE.readyState ? eE.addEventListener("DOMContentLoaded", function () {
                                t(i)
                            }) : t(i)
                        }
                    )
                }
                , eM = !1
                , eK = function (e) {
                    !eM && e.config.debug && (eM = !0,
                        e.emit("debug", {
                            name: "OpenMessageLog"
                        }),
                        window.addEventListener("message", function (t) {
                            var n = t.data;
                            eM && "string" == typeof n && 0 === n.indexOf("log:") && e.emit("debug", {
                                name: "Message:Log=".concat(n.substring(4))
                            })
                        }))
                }
                , eP = function (e) {
                    try {
                        eS.origin === F && window.parent.postMessage("log:".concat(e), "*")
                    } catch (e) {
                    }
                }
                , eG = (o = function (e, t) {
                        return (o = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            o(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , eR = function () {
                    return (eR = Object.assign || function (e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n])
                                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }
                    ).apply(this, arguments)
                }
                , eB = eS.origin
                , eL = function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.dbSetFlag = [],
                            n.getItem = function (e) {
                                return n.getItemByKeys([e]).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            n.setItem = function (e, t) {
                                return n.setItemByKeys([[e, t]]).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            n.getItemByKeys = function (e) {
                                var t = -1
                                    , i = [];
                                return n.db.then(function (t) {
                                    return eO(t.map(function (t, n) {
                                        return function () {
                                            return t.getItemByKeys(e).then(function (t) {
                                                return i[n] = e.map(function (e, i) {
                                                    return {
                                                        from: void 0 !== t[i] ? n : -1,
                                                        value: t[i],
                                                        origin: eB
                                                    }
                                                }),
                                                    t
                                            })
                                        }
                                    }), function (e) {
                                        for (var t = 0; t < (null == e ? void 0 : e.length); t++)
                                            if (void 0 === e[t])
                                                return !0;
                                        return !1
                                    })
                                }).catch(function (i) {
                                    return n.fallbackDB.getItemByKeys(e).then(function (e) {
                                        return t = 2,
                                            e
                                    })
                                }).then(function (e) {
                                    return i[0] ? i[0].map(function (e, t) {
                                        return void 0 !== e.value ? e : i[1] && i[1][t] ? void 0 === i[1][t].value ? e : i[1][t] : e
                                    }) : i[1] ? i[1] : e.map(function (e) {
                                        return {
                                            value: e,
                                            from: t,
                                            origin: eB
                                        }
                                    })
                                })
                            }
                            ,
                            n.setItemByKeys = function (e) {
                                var t = -1;
                                return n.db.then(function (i) {
                                    return ex(i.map(function (n, i) {
                                        return function () {
                                            return n.setItemByKeys(e).then(function (e) {
                                                return t = i,
                                                    e
                                            })
                                        }
                                    })).catch(function (i) {
                                        return t = 2,
                                            n.fallbackDB.setItemByKeys(e)
                                    }).then(function (e) {
                                        return e.map(function (e) {
                                            return {
                                                value: e,
                                                from: t,
                                                origin: eB
                                            }
                                        })
                                    })
                                }).then(function (e) {
                                    return e
                                }, function (e) {
                                    throw eP("storage:setItemByKeys:error:".concat(null == e ? void 0 : e.message)),
                                        e
                                })
                            }
                            ,
                            n.removeItem = function (e) {
                                return n.db.then(function (t) {
                                    return Promise.all(t.map(function (t) {
                                        return t.removeItem(e)
                                    })).then(function () {
                                        return n.fallbackDB.removeItem(e)
                                    })
                                })
                            }
                            ,
                            n.config = t || {},
                            n.localDB = new eg,
                            n.db = Promise.resolve([n.localDB, new ef(eR(eR({}, (null == t ? void 0 : t.dbStorage) || {}), {
                                onQuotaErrorCallback: function () {
                                    n.emit("log", {
                                        name: "QuotaError"
                                    })
                                }
                            }))]),
                            n.fallbackDB = new e_,
                            n
                    }

                    return eG(t, e),
                        t.prototype.getKeys = function () {
                            return this.db.then(function (e) {
                                return eO(e.map(function (e) {
                                    return function () {
                                        return e.getKeys()
                                    }
                                }), function (e) {
                                    return void 0 === e || 0 === e.length
                                })
                            })
                        }
                        ,
                        t
                }(q)
                ,
                eN = ["security-sdk/s_sdk_crypt_sdk", "security-sdk/s_sdk_cert_key", "security-sdk/s_sdk_sign_data_key/web_protect"]
                , eU = (a = function (e, t) {
                        return (a = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            a(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , ez = function () {
                    return (ez = Object.assign || function (e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n])
                                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }
                    ).apply(this, arguments)
                }
                , ej = {
                    get visibility() {
                        return document.visibilityState
                    }
                }
                , eV = {
                    current: 0,
                    max: 2
                }
                , e$ = "visibilitychange"
                , eq = function () {
                    return "hidden" === document.visibilityState
                }
                , eW = function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.autoLoadIframeConfig = {
                            max: 10,
                            current: 0,
                            iframeLoadPromise: null
                        },
                            n.reset = function () {
                                var e = n.autoLoadIframeConfig;
                                e.current >= e.max && (e.max += 10),
                                    e.iframeLoadPromise = null,
                                eV.current >= eV.max && (eV.max += 3)
                            }
                            ,
                            n.loadWindow = function () {
                                var e = n.config
                                    , t = e.url
                                    , i = e.ackTimeout
                                    , r = n.autoLoadIframeConfig;
                                return new Promise(function (e) {
                                        setTimeout(e, 0 === r.current ? 0 : 100)
                                    }
                                ).then(function () {
                                    if (!t)
                                        throw Error("URL Error");
                                    var e = r.current === r.max ? eT(t, "t=".concat(Date.now())) : t;
                                    return n.createIframeElement(e, i)
                                }).catch(function (e) {
                                    if (r.current >= r.max) {
                                        if (eq())
                                            return new Promise(function (e) {
                                                    var t = function () {
                                                        eq() || (document.removeEventListener(e$, t),
                                                            e(1))
                                                    };
                                                    document.addEventListener(e$, t)
                                                }
                                            ).then(function () {
                                                return n.loadWindow().then(function (e) {
                                                    return n.emit("log", {
                                                        name: "visibilityChangeLoadWindowSuccuess"
                                                    }),
                                                        e
                                                })
                                            });
                                        var t = ee();
                                        if (t)
                                            return n.emit("debug", {
                                                name: "StartFireFallbackURL",
                                                content: t
                                            }),
                                                n.createIframeElement(t, i).then(function (e) {
                                                    return n.emit("debug", {
                                                        name: "EndFireFallbackURL",
                                                        content: t
                                                    }),
                                                        e.fallback = !0,
                                                        e
                                                }).catch(function (t) {
                                                    throw n.emit("debug", {
                                                        name: "fireFallbackURLError",
                                                        content: "".concat(null == t ? void 0 : t.name, ":").concat(null == t ? void 0 : t.message)
                                                    }),
                                                        e
                                                });
                                        throw e
                                    }
                                    return r.current++,
                                        n.loadWindow()
                                })
                            }
                            ,
                            n.createPostMessageFlight = function (e, t) {
                                void 0 === t && (t = 3e3);
                                var i, r = ek(), o = r, a = function (e) {
                                    n.config.debug && n.emit("metrics", {
                                        name: "PostMessageFlight",
                                        metrics: {
                                            startTime: r,
                                            endTime: o,
                                            loadTime: o - r
                                        },
                                        categories: {
                                            status: e,
                                            retryCount: String(eV.current),
                                            version: W
                                        }
                                    })
                                };
                                return Promise.race([new Promise(function (t, n) {
                                        var r = "ACK_0_".concat(Math.random())
                                            , a = function (e) {
                                            e.data === "ACK_1_".concat(r) && (clearTimeout(i),
                                                o = ek(),
                                                t(),
                                                ew("message", a))
                                        };
                                        eb("message", a);
                                        try {
                                            e(r)
                                        } catch (e) {
                                            n(new en("PostMessageWindowError", null == e ? void 0 : e.message))
                                        }
                                    }
                                ), new Promise(function (e, n) {
                                        i = setTimeout(function () {
                                            o = ek(),
                                                n(new en("PostMessageTimeout"))
                                        }, t)
                                    }
                                )]).then(function () {
                                    a("1")
                                }).catch(function (e) {
                                    throw a("0"),
                                        e
                                })
                            }
                            ,
                            n.config = ez({
                                ackTimeout: 2e3
                            }, t || {}),
                            n
                    }

                    return eU(t, e),
                        t.prototype.setConfig = function (e) {
                            this.config = {
                                ackTimeout: e.ackTimeout || this.config.ackTimeout,
                                url: e.url || this.config.url
                            }
                        }
                        ,
                        t.prototype.start = function () {
                            var e = this.autoLoadIframeConfig;
                            return e.iframeLoadPromise = e.iframeLoadPromise || this.loadWindow()
                        }
                        ,
                        t.prototype.createIframeElement = function (e, t) {
                            var n, i, r, o = this, a = t || this.config.ackTimeout, s = this.autoLoadIframeConfig, c = ek(),
                                u = eE.createElement("iframe"), l = c, h = !1, f = -1;
                            return u.style.display = "none",
                                u.src = e,
                                eA().then(function (t) {
                                    var o = Promise.race([new Promise(function (e, t) {
                                            u.onload = function () {
                                                l = ek(),
                                                h || (i = setTimeout(function () {
                                                    h || t(new en("CreateIframeError", JSON.stringify(ez(ez({
                                                        startTime: c,
                                                        endTime: l,
                                                        loadTime: l - c
                                                    }, ej), {
                                                        current: s.current,
                                                        max: s.max
                                                    }))))
                                                }, a || 2e3))
                                            }
                                        }
                                    ), new Promise(function (t, o) {
                                            var a = function (s) {
                                                try {
                                                    -1 === f && "ACK" === s.data && eD(e) === s.origin && (h = !0,
                                                        n = s.source,
                                                        clearTimeout(i),
                                                        clearTimeout(r),
                                                        t(),
                                                        ew("message", a))
                                                } catch (e) {
                                                    o(e)
                                                }
                                            };
                                            eb("message", a)
                                        }
                                    ), new Promise(function (e, t) {
                                            r = setTimeout(function () {
                                                t(new en("CreateIframeMainTimeout"))
                                            }, 12e4)
                                        }
                                    )]);
                                    return t.appendChild(u),
                                        o
                                }).then(function () {
                                    return o.createPostMessageFlight(function (t) {
                                        var i = eD(e);
                                        (u.contentWindow || n).postMessage(t, i)
                                    }).catch(function (e) {
                                        if ("PostMessageWindowError" === e.name) {
                                            if (eV.current < eV.max)
                                                throw eV.current++,
                                                    e
                                        } else
                                            throw e
                                    })
                                }).then(function () {
                                    if (u.parentNode)
                                        return f = 1,
                                            {
                                                startTime: c,
                                                endTime: ek(),
                                                postMessage: function (e, t) {
                                                    (u.contentWindow || n).postMessage(e, t || "*")
                                                },
                                                destory: function () {
                                                    var e;
                                                    try {
                                                        null === (e = u.parentNode) || void 0 === e || e.removeChild(u)
                                                    } catch (e) {
                                                    }
                                                },
                                                isValid: function () {
                                                    var e;
                                                    return !!((null == u ? void 0 : u.parentNode) && (null === (e = null == u ? void 0 : u.parentNode) || void 0 === e ? void 0 : e.parentNode))
                                                }
                                            };
                                    throw Error("CreateIframeElementError")
                                }).catch(function (e) {
                                    var t;
                                    f = 0;
                                    try {
                                        null === (t = u.parentNode) || void 0 === t || t.removeChild(u)
                                    } catch (e) {
                                    }
                                    try {
                                        "CreateIframeMainTimeout" === e.name && o.emit("debug", {
                                            name: "CreateIframeMainTimeout"
                                        })
                                    } catch (e) {
                                    }
                                    throw e
                                })
                        }
                        ,
                        t
                }(q)
                , eH = (s = function (e, t) {
                        return (s = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            s(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , eJ = function () {
                    return (eJ = Object.assign || function (e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n])
                                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }
                    ).apply(this, arguments)
                }
                , eF = function (e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var i, r = 0, o = t.length; r < o; r++)
                            !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)),
                                i[r] = t[r]);
                    return e.concat(i || Array.prototype.slice.call(t))
                }
                , eY = function (e) {
                    return "p-".concat(e)
                }
                , eX = ".".concat(location.origin.split(".").slice(-2).join("."))
                , eQ = function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.config = {
                            protocol: "Common"
                        },
                            n.loadTime = 0,
                            n.startTime = 0,
                            n.endTime = 0,
                            n.callParentBridgetIndex = 0,
                            n.listen = function () {
                                window.parent !== window && window.parent.postMessage("ACK", "*")
                            }
                            ,
                            n.getIframeState = function () {
                                return {
                                    isConnection: "boolean" == typeof n.isConnection ? Number(!!n.isConnection) : -1,
                                    retryCount: n.iframeConnection.autoLoadIframeConfig.current,
                                    startTime: n.startTime,
                                    endTime: n.endTime,
                                    loadTime: n.loadTime,
                                    origin: location.origin
                                }
                            }
                            ,
                            n.postIframeMessage = function (e) {
                                var t = n.config.protocol;
                                if (n.window) {
                                    var i = n.config.url;
                                    return n.window.catch(function (e) {
                                        return n.reConnection()
                                    }).then(function (n) {
                                        n.target.postMessage({
                                            protocol: t,
                                            data: e
                                        }, eD(i))
                                    })
                                }
                                return Promise.reject(new en("postMessageError"))
                            }
                            ,
                            n.postWindowMessage = function (e, t, i, r) {
                                void 0 === r && (r = "*");
                                var o = n.config.protocol;
                                return new Promise(function (n) {
                                        e.postMessage({
                                            type: t,
                                            protocol: o,
                                            data: i
                                        }, r),
                                            n()
                                    }
                                )
                            }
                            ,
                            n.postParentMessage = function (e, t, i) {
                                void 0 === i && (i = "*");
                                var r = ey.parent;
                                return r !== ey ? n.postWindowMessage(r, e, t, i) : Promise.resolve()
                            }
                            ,
                            n.dispatchParentEvent = function (e, t) {
                                return n.postParentMessage("event", {
                                    id: eY(n.callParentBridgetIndex++),
                                    message: {
                                        eventName: e,
                                        eventData: t
                                    }
                                })
                            }
                            ,
                            n.callParentBridge = function (e, t, i) {
                                var r = eY(n.callParentBridgetIndex++);
                                return Promise.race([new Promise(function (o, a) {
                                        var s = function (e) {
                                            var t = e.data;
                                            t.id === r && (n.off("message", s),
                                                "reject" === t.promiseStatus ? a(new en("".concat(t.message || "UNKNOW_CallParentBridge_Error"))) : o(t.message))
                                        };
                                        n.on("message", s),
                                            n.postParentMessage("function", {
                                                id: r,
                                                message: {
                                                    callObj: e,
                                                    callName: t,
                                                    callArgs: i
                                                }
                                            }).catch(a)
                                    }
                                ), new Promise(function (n, i) {
                                        setTimeout(function () {
                                            i(new en("CallParentBridgeInvokeTimeout", "CallBridge invoke timeout: callObj=".concat(e, ";callName=").concat(t, ";")))
                                        }, 5e3)
                                    }
                                )])
                            }
                            ,
                            n.startConnection = function (e) {
                                var t = n.config.url;
                                !n.window && t && (n.isStart = !0,
                                    n.isConnection = void 0,
                                    n.emit("log", {
                                        name: "startConnection:".concat(e)
                                    }),
                                    n.createConnection(t))
                            }
                            ,
                            n.reStartConection = function (e) {
                                n.isStart = !1,
                                n.window && n.window.then(function (e) {
                                    return e.target.destory()
                                }).catch(function () {
                                }),
                                    n.window = void 0,
                                    n.iframeConnection.reset(),
                                    n.startConnection(e)
                            }
                            ,
                            n.start = function (e) {
                                return new Promise(function (t) {
                                        n.config = eJ(eJ({}, n.config || {}), e || {}),
                                            n.isStart = !0,
                                            n.emit("config"),
                                            t()
                                    }
                                )
                            }
                            ,
                            n.reConnection = function () {
                                var e = n.config.url;
                                return n.createConnection(e)
                            }
                            ,
                            n.preCheck = function () {
                                return n.isConnection && n.isStart && n.window ? n.window.then(function (e) {
                                    e.target.isValid() || n.reStartConection("valid")
                                }) : (!n.config.disablePreCheckConnection && !1 === n.isConnection && n.iframeConnection.autoLoadIframeConfig.current >= n.iframeConnection.autoLoadIframeConfig.max && n.reStartConection("reConnection"),
                                    Promise.resolve())
                            }
                            ,
                            n.onMessage = function (e) {
                                var t, i, r, o, a = function (t, n) {
                                    var i;
                                    try {
                                        null === (i = e.source) || void 0 === i || i.postMessage("SOCKET_ERROR_".concat(t, "@").concat(n), e.origin)
                                    } catch (e) {
                                    }
                                };
                                try {
                                    var s = n.config
                                        , c = s.url
                                        , u = s.protocol
                                        , l = s.allowOrigin
                                        , h = !!c && eD(c) === e.origin
                                        , f = c ? h : !!eF([eX], void 0 === l ? [] : l, !0).filter(function (t) {
                                        return -1 !== e.origin.lastIndexOf(t)
                                    })[0];
                                    try {
                                        e.origin || n.emit("debug", {
                                            name: "eventLostOrigin",
                                            content: JSON.stringify(e.data || {})
                                        })
                                    } catch (e) {
                                    }
                                    if (f) {
                                        if ("string" == typeof e.data && 0 === e.data.indexOf("ACK_0_"))
                                            try {
                                                null === (t = e.source) || void 0 === t || t.postMessage("ACK_1_".concat(e.data), e.origin)
                                            } catch (e) {
                                            }
                                        else if ((null === (i = e.data) || void 0 === i ? void 0 : i.protocol) === u)
                                            try {
                                                n.emit("message", {
                                                    type: null === (r = e.data) || void 0 === r ? void 0 : r.type,
                                                    data: null === (o = e.data) || void 0 === o ? void 0 : o.data,
                                                    origin: e.origin,
                                                    sourceWindow: e.source
                                                })
                                            } catch (t) {
                                                a(500, JSON.stringify(e.data)),
                                                    n.emit("debug", {
                                                        name: "postMessage:protocol:error:".concat(null == t ? void 0 : t.message)
                                                    })
                                            }
                                    }
                                } catch (e) {
                                    a(501, "".concat(e.message)),
                                        n.emit("debug", {
                                            name: "SomePostMessageEventError",
                                            content: null == e ? void 0 : e.message
                                        })
                                }
                            }
                            ,
                            n.initMessageEvent = function () {
                                n.removeMessageEvent(),
                                    window.addEventListener("message", n.onMessage),
                                    n.emit("debug", {
                                        name: "initMessageEvent"
                                    })
                            }
                            ,
                            n.removeMessageEvent = function () {
                                window.addEventListener("message", n.onMessage)
                            }
                            ,
                            n.config = eJ(eJ({}, n.config), t || {}),
                            n.iframeConnection = new eW,
                            n.startConnection("init"),
                            n.on("config", function () {
                                n.startConnection("config")
                            }),
                            n.initMessageEvent(),
                            n.on("connection", function (e) {
                                n.loadTime = e.endTime - e.startTime,
                                    n.startTime = e.startTime,
                                    n.endTime = e.endTime,
                                    n.isConnection = !0,
                                n.config.enableFallback && !e.target.fallback && Q(W),
                                    n.emit("debug", {
                                        name: "ConnectionSuccess"
                                    }),
                                    n.initMessageEvent()
                            }),
                            n.iframeConnection.on("debug", function (e) {
                                n.emit("debug", e)
                            }),
                            n.iframeConnection.on("log", function (e) {
                                n.emit("log", e)
                            }),
                            n.iframeConnection.on("metrics", function (e) {
                                n.emit("metrics", e)
                            }),
                            n.on("connectionFail", function (e) {
                                var t = n.config.downgradeCSPURL;
                                if (n.isConnection = !1,
                                    n.emit("error", new en("Connection:".concat(e.name), e.message)),
                                    n.emit("debug", {
                                        name: "connectionFail"
                                    }),
                                t && (null == e ? void 0 : e.message.indexOf("Content Security Policy")) !== -1) {
                                    var i = "string" == typeof t ? t : X(Y, void 0, "page");
                                    i && n.config.url !== i && (n.emit("debug", {
                                        name: "fireDefaultPageURL",
                                        content: i
                                    }),
                                        n.config.url = i,
                                        n.reStartConection("csp"))
                                }
                            }),
                            eb("message", function (e) {
                                "string" == typeof e.data && (-1 !== e.data.indexOf("SOCKET_ERROR_") ? n.emit("error", new en("SCOKET_ERROR", e.data)) : -1 !== e.data.indexOf("Version:") && n.emit("debug", {
                                    name: "SocketVersion",
                                    content: e.data.split(":")[1]
                                }))
                            }),
                            n
                    }

                    return eH(t, e),
                        t.prototype.createConnection = function (e) {
                            var t = this
                                , n = this.config.ackTimeout
                                , i = ek()
                                , r = this.iframeConnection.autoLoadIframeConfig.max;
                            this.iframeConnection.setConfig({
                                url: r > 10 ? eT(e, "t=".concat(r)) : e,
                                ackTimeout: n
                            });
                            var o = this.iframeConnection.start().then(function (e) {
                                var n = {
                                    target: e,
                                    startTime: i,
                                    endTime: ek()
                                };
                                return t.emit("connection", eJ({}, n)),
                                    n
                            }).catch(function (e) {
                                throw t.emit("connectionFail", new en("".concat(e.name || "ConnectionError"), e.message)),
                                    e
                            });
                            return this.window = o
                        }
                        ,
                        t
                }(q)
                , eZ = function (e) {
                    return function (t) {
                        return e.then(function (e) {
                            return Promise.resolve(t()).then(function () {
                                return e
                            })
                        }, function (e) {
                            return Promise.resolve(t()).then(function () {
                                throw e
                            })
                        })
                    }
                }
                , e0 = null
                , e1 = -1
                , e2 = 0
                , e4 = {}
                , e3 = function (e, t, n) {
                    void 0 === t && (t = !1),
                    void 0 === n && (n = 8e3);
                    var i = e.postIframeMessage;
                    return function (r, o, a) {
                        var s, c = e2++, u = "".concat(c);
                        if ("string" != typeof r || "string" != typeof o)
                            return Promise.reject(new en("CallBridgeParameterError", "callObj:".concat(r, ", callName:").concat(o)));
                        var l = function (t) {
                            return e.emit("debug", {
                                name: "PostMessageId=".concat(u),
                                content: "".concat(r, ":").concat(o)
                            }),
                                e4[u] = {},
                                e4[u].st = ek(),
                                Promise.race([e.window.then(function () {
                                    return new Promise(function (t, n) {
                                            var c = function (i) {
                                                try {
                                                    var r;
                                                    (r = i.data).id === u && e4[u] && !e4[u].et && (e4[u].et = ek(),
                                                        e.emit("debug", {
                                                            name: "BackPostMessageId=".concat(u)
                                                        }),
                                                        clearTimeout(s),
                                                        e.off("message", c),
                                                        "reject" === r.promiseStatus ? n(new en("".concat(r.message || "UNKNOW_CallBridge_Error"))) : t(r.message),
                                                        delete e4[u])
                                                } catch (e) {
                                                    n(e)
                                                }
                                            };
                                            e.on("message", c),
                                                i({
                                                    id: u,
                                                    message: {
                                                        callObj: r,
                                                        callName: o,
                                                        callArgs: a
                                                    }
                                                }).catch(n)
                                        }
                                    )
                                }), new Promise(function (n, i) {
                                        s = setTimeout(function () {
                                            e4[u].timeout = ek(),
                                                i(new en("CallBridgeInvokeTimeout:".concat(r, ":").concat(o), "".concat(JSON.stringify({
                                                    iframe: e.getIframeState(),
                                                    id: u
                                                }))))
                                        }, t)
                                    }
                                )])
                        };
                        return e.preCheck().then(function () {
                            return l(n)
                        }).catch(function (n) {
                            if (!0 === e.isConnection && t && -1 !== ((null == n ? void 0 : n.name) || "").indexOf("CallBridgeInvokeTimeout")) {
                                var i = c < e1
                                    , r = e2;
                                return e.emit("debug", {
                                    name: "reCallBridgeWhenTimeout",
                                    content: JSON.stringify({
                                        isTimeoutId: i,
                                        $MessageId: r,
                                        $id: c,
                                        callName: o,
                                        reCallBridgeWhenTimeout: !!e0
                                    })
                                }),
                                    (e0 = e0 && i ? e0 : new Promise(function (t) {
                                            e1 = r,
                                                eK(e),
                                                e.reStartConection("callBridge"),
                                                t()
                                        }
                                    )).then(function () {
                                        return l(8e3)
                                    })
                            }
                            throw n
                        })
                    }
                }
                , e5 = (c = function (e, t) {
                        return (c = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            c(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , e6 = function () {
                    return (e6 = Object.assign || function (e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n])
                                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }
                    ).apply(this, arguments)
                }
                , e9 = function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.listen = function () {
                            n.client.listen()
                        }
                            ,
                            n.setConfig = function (e) {
                                return new Promise(function (t) {
                                        n.config = e6(e6({}, n.config || {}), e),
                                            n.emit("config", n.config),
                                            t()
                                    }
                                )
                            }
                            ,
                            n.startStorageChecker = function () {
                                return new Promise(function (e) {
                                        n.client.isConnection ? e() : n.client.on("connection", function () {
                                            e()
                                        })
                                    }
                                ).then(function () {
                                    return e3(n.client, !0, 3e3)("config", "startChecker", [])
                                })
                            }
                            ,
                            n.startChecker = function () {
                                return new Promise(function (e, t) {
                                        var i = (n.config || {}).startStorageCheckerCallBack;
                                        null == i || i(),
                                            e()
                                    }
                                )
                            }
                            ,
                            n.setOriginStorageConfig = function (e) {
                                return new Promise(function (e) {
                                        n.client.isConnection ? e() : n.client.on("connection", function () {
                                            e()
                                        })
                                    }
                                ).then(function () {
                                    if (n.client.config.url)
                                        return e3(n.client, !0, 3e4)("config", "setConfig", [e]);
                                    throw Error("NoOriginStorageURL")
                                })
                            }
                            ,
                            n.setItem = function (e, t, i) {
                                return n.setItemByKeys([[e, t]], i).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            n.getItem = function (e, t) {
                                return n.getItemByKeys([e], t).then(function (e) {
                                    return e[0]
                                })
                            }
                            ,
                            n.getItemByKeys = function (e, t) {
                                var i = t || {}
                                    , r = i.async
                                    , o = i.logger
                                    , a = void 0 === o || o
                                    , s = ek()
                                    , c = 0
                                    , u = 0
                                    , l = -1
                                    , h = {}
                                    , f = function () {
                                    if (a)
                                        try {
                                            c = c || ek(),
                                                u = u || c,
                                                n.emit("metrics", {
                                                    name: "getOriginItemByKeys",
                                                    metrics: {
                                                        duration: c - s,
                                                        callTime: c - u,
                                                        startCallTime: u,
                                                        startTime: s,
                                                        endTime: c
                                                    },
                                                    categories: e6({
                                                        status: String(l)
                                                    }, h)
                                                })
                                        } catch (e) {
                                        }
                                }
                                    , d = function (t) {
                                    l = l > -1 ? l : 1;
                                    try {
                                        t.forEach(function (t, n) {
                                            ["from", "origin", "status", "code"].forEach(function (i) {
                                                var r = e[n]
                                                    , o = r.split("/")
                                                    , a = "status" === i ? String(t.value ? 1 : 0) : String(t[i]);
                                                "undefined" !== a && (h["".concat(o[1] || r, "_").concat(i)] = a)
                                            })
                                        })
                                    } catch (e) {
                                    }
                                }
                                    , p = function () {
                                    var t = n.client.config.url;
                                    u = ek();
                                    var i = function () {
                                        return e3(n.client)("storage", "getItemByKeys", [e]).then(function (t) {
                                            return c = ek(),
                                                l = 2,
                                                Promise.all(t.map(function (t, i) {
                                                    return void 0 === t.value && (l = 3),
                                                        void 0 === t.value ? n.storage.getItem(e[i]) : t
                                                }))
                                        })
                                    };
                                    return t ? void 0 !== r ? Promise.race([i(), new Promise(function (e) {
                                            setTimeout(e, "number" == typeof r ? r : 1e3)
                                        }
                                    ).then(function () {
                                        return n.storage.getItemByKeys(e)
                                    })]) : ex([i, function () {
                                        return n.storage.getItemByKeys(e).then(function (e) {
                                            return e.map(function (e) {
                                                return e.code = 1001,
                                                    e
                                            })
                                        })
                                    }
                                    ]) : n.storage.getItemByKeys(e)
                                };
                                return n.getLocalItemWithSignByKeys(e).then(function (e) {
                                    var t = e.values
                                        , n = e.st
                                        , i = e.et;
                                    return s = n,
                                        c = i,
                                        l = 12,
                                        d(t),
                                        f(),
                                        t
                                }).catch(function () {
                                    return eZ(p().catch(function () {
                                        return n.storage.getItemByKeys(e)
                                    }).then(function (e) {
                                        return d(e),
                                            e
                                    }).catch(function (e) {
                                        throw l = 0,
                                            e
                                    }))(f)
                                })
                            }
                            ,
                            n.setItemByKeys = function (e, t) {
                                var i, r, o = t || {}, a = o.async, s = o.logger, c = void 0 === s || s, u = ek(), l = 0,
                                    h = -1, f = 0, d = 0, p = {}, g = {
                                        end: !1,
                                        sync: !1,
                                        resolve: function () {
                                        }
                                    }, m = function (t) {
                                        h = h > -1 ? h : 1;
                                        try {
                                            t.forEach(function (t, n) {
                                                ["from", "origin", "status"].forEach(function (i) {
                                                    var r = e[n][0]
                                                        , o = r.split("/");
                                                    p["".concat(o[1] || r, "_").concat(i)] = "status" === i ? String(t.value ? 1 : 0) : String(t[i])
                                                })
                                            })
                                        } catch (e) {
                                        }
                                    };
                                new Promise(function (e) {
                                        g.resolve = e
                                    }
                                ).then(function () {
                                    if (c)
                                        try {
                                            l = l || ek(),
                                                n.emit("metrics", {
                                                    name: "setOriginItemByKeys",
                                                    metrics: {
                                                        duration: l - u,
                                                        callTime: l - d,
                                                        startCallTime: d,
                                                        startTime: u,
                                                        endTime: l,
                                                        retryCount: f
                                                    },
                                                    categories: e6({
                                                        status: String(h)
                                                    }, p)
                                                })
                                        } catch (e) {
                                        }
                                });
                                var v = function (e) {
                                    g[e] = !0,
                                    g.end && g.sync && g.resolve()
                                };
                                return eZ((i = n.client.config.url,
                                    d = ek(),
                                    r = function (t) {
                                        return e3(n.client, !0, t)("storage", "setItemByKeys", [e]).then(function (e) {
                                            return h = 2,
                                                m(e),
                                                l = ek(),
                                                e
                                        })
                                    }
                                    ,
                                    i ? void 0 !== a ? Promise.race([eZ(r(3e4).catch(function (e) {
                                        var t = "".concat(null == e ? void 0 : e.name, "@").concat(null == e ? void 0 : e.message);
                                        return f++,
                                            r().catch(function (i) {
                                                throw n.emit("log", {
                                                    name: "callBridgeSetItemByKeysRetryError",
                                                    content: JSON.stringify({
                                                        iframe: n.client.getIframeState(),
                                                        errorMessage: t
                                                    })
                                                }),
                                                    e
                                            })
                                    }))(v.bind(null, "sync")), new Promise(function (e) {
                                            setTimeout(e, "number" == typeof a ? a : 1e3)
                                        }
                                    ).then(function () {
                                        return n.storage.setItemByKeys(e)
                                    })]) : ex([function () {
                                        return eZ(r())(v.bind(null, "sync"))
                                    }
                                        , function () {
                                            return n.storage.setItemByKeys(e)
                                        }
                                    ]) : n.storage.setItemByKeys(e)).catch(function () {
                                    return n.storage.setItemByKeys(e)
                                }).catch(function (e) {
                                    throw h = 0,
                                        e
                                }).then(function (e) {
                                    return m(e),
                                        e
                                }))(v.bind(null, "end"))
                            }
                            ,
                            n.removeItem = function (e) {
                                return n.client.config.url ? Promise.all([n.storage.removeItem(e), e3(n.client)("storage", "removeItem", [e])]).then(function () {
                                }) : n.storage.removeItem(e)
                            }
                            ,
                            n.getLocalItemWithSignByKeys = function (e) {
                                var t;
                                if ((null === (t = n.sign) || void 0 === t ? void 0 : t.verify) && eC(e, eN)) {
                                    var i = ek();
                                    return n.storage.localDB.getItemByKeys(eN).then(function (t) {
                                        return n.sign.verify(t).then(function (n) {
                                            if (n)
                                                return e.map(function (e) {
                                                    return {
                                                        value: t[eN.indexOf(e)],
                                                        origin: location.origin,
                                                        from: 0,
                                                        code: 304
                                                    }
                                                });
                                            throw Error("VerifySignFail")
                                        }).then(function (e) {
                                            return {
                                                values: e,
                                                st: i,
                                                et: ek()
                                            }
                                        })
                                    })
                                }
                                return Promise.reject(Error("NotVerifySignFunction"))
                            }
                            ,
                            n.initBirdgeEvent = function () {
                                n.client.on("message", function (e) {
                                    var t = e.data
                                        , i = e.origin
                                        , r = e.type
                                        , o = e.sourceWindow
                                        , a = (t || {}).id;
                                    if ("event" === r) {
                                        var s = t.message || {}
                                            , c = s.eventName
                                            , u = s.eventData;
                                        if ("error" === c)
                                            n.emit("error", new en(u.name, u.message, u.origin));
                                        else if ("log" === c)
                                            return n.emit("log", u)
                                    } else {
                                        var l = t.message || {}
                                            , h = l.callObj
                                            , f = l.callName
                                            , d = l.callArgs
                                            , p = function (e, t) {
                                            return n.client.postWindowMessage(o, "function", {
                                                id: a,
                                                promiseStatus: e,
                                                message: t
                                            }, i)
                                        };
                                        if (-1 !== ["storage", "storageX", "client", "sign", "config", "logger"].indexOf(h))
                                            try {
                                                eP("".concat(h, "-").concat(f)),
                                                    (-1 !== ["storage", "config"].indexOf(h) ? n : n[h])[f].apply(n, void 0 === d ? [] : d).then(p.bind(null, "resolve")).catch(function (e) {
                                                        p("reject", e.name || e.message || "UnknowMessageError").catch(function () {
                                                        })
                                                    })
                                            } catch (e) {
                                                p("reject", "UnknowMessageError").catch(function () {
                                                })
                                            }
                                    }
                                })
                            }
                            ,
                            n.config = e6({
                                debug: !1,
                                hostname: location.hostname
                            }, t || {}),
                            n.client = new eQ(e6(e6({}, n.config.scoket || {}), {
                                protocol: n.config.protocol,
                                allowOrigin: n.config.allowOrigin,
                                debug: n.config.debug,
                                url: n.config.url
                            })),
                            n.storage = new eL(n.config.storage),
                            n.storageX = n.storage,
                        n.config.verifySignMethod && (n.sign = e6(e6({}, n.sign || {}), {
                            verify: function (e) {
                                return Promise.resolve(n.config.verifySignMethod(e))
                            }
                        })),
                            n.logger = {
                                metrics: function (e) {
                                    return n.emit("metrics", e),
                                        Promise.resolve()
                                }
                            },
                            n.initBirdgeEvent(),
                            n.on("error", function (e) {
                                n.config.disableReportLogger || n.client.dispatchParentEvent("error", {
                                    name: e.name,
                                    message: e.message,
                                    origin: e.origin
                                }).catch(function () {
                                })
                            }),
                            n.on("log", function (e) {
                                n.config.disableReportLogger || n.client.dispatchParentEvent("log", e).catch(function () {
                                })
                            }),
                            n.on("debug", function (e) {
                                n.config.debug && n.emit("log", e6(e6({}, e), {
                                    name: "Debug:".concat(e.name)
                                }))
                            }),
                            n.client.on("error", function (e) {
                                e.name = "Socket:".concat(e.name),
                                    n.emit("error", e)
                            }),
                            n.storage.on("error", function (e) {
                                n.emit("error", (e.name = "".concat("WebStorage", ":").concat(e.name),
                                    e))
                            }),
                            n.storage.on("log", function (e) {
                                n.emit("log", e)
                            }),
                            n.client.on("log", function (e) {
                                n.emit("log", e)
                            }),
                            n.client.on("metrics", function (e) {
                                n.emit("metrics", e)
                            }),
                            n.client.on("debug", function (e) {
                                n.emit("debug", e)
                            }),
                            n.client.start().catch(function (e) {
                                n.emit("error", new en("StartSocketClientError", e.message))
                            }),
                            n
                    }

                    return e5(t, e),
                        t
                }(q)
                , e8 = function () {
                    try {
                        var e = ""
                            , t = document.location.hostname
                            , n = t.split(".");
                        if (/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(t) || "localhost" === t)
                            return document.location.hostname.replace(/^.*?\b\.\b/, "");
                        var i = [];
                        for (i.unshift(n.pop()); i.length < 2;)
                            i.unshift(n.pop()),
                                e = i.join(".");
                        return e || document.location.hostname
                    } catch (e) {
                        return document.location.hostname
                    }
                }
                , e7 = function (e) {
                    try {
                        for (var t = "".concat(e, "="), n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                            var r = n[i].trim();
                            if (0 === r.indexOf(t)) {
                                var o = r.substring(t.length, r.length);
                                if (o.length > 0)
                                    return decodeURIComponent(o)
                            }
                        }
                    } catch (e) {
                    }
                    return ""
                }
                , te = (u = function (e, t) {
                        return (u = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            u(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , tt = function (e, t, n, i) {
                    return new (n || (n = Promise))(function (r, o) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                        e(t)
                                    }
                                )).then(a, s)
                            }

                            c((i = i.apply(e, t || [])).next())
                        }
                    )
                }
                , tn = function (e, t) {
                    var n, i, r, o, a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }
                    ),
                        o;

                    function s(o) {
                        return function (s) {
                            return function (o) {
                                if (n)
                                    throw TypeError("Generator is already executing.");
                                for (; a;)
                                    try {
                                        if (n = 1,
                                        i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                            return r;
                                        switch (i = 0,
                                        r && (o = [2 & o[0], r.value]),
                                            o[0]) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return a.label++,
                                                    {
                                                        value: o[1],
                                                        done: !1
                                                    };
                                            case 5:
                                                a.label++,
                                                    i = o[1],
                                                    o = [0];
                                                continue;
                                            case 7:
                                                o = a.ops.pop(),
                                                    a.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                    a.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && a.label < r[1]) {
                                                    a.label = r[1],
                                                        r = o;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2],
                                                        a.ops.push(o);
                                                    break
                                                }
                                                r[2] && a.ops.pop(),
                                                    a.trys.pop();
                                                continue
                                        }
                                        o = t.call(e, a)
                                    } catch (e) {
                                        o = [6, e],
                                            i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                if (5 & o[0])
                                    throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                }
                , ti = function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        n.getCurrentHostName = function () {
                            var e,
                                t = null === (e = null == window ? void 0 : window.location) || void 0 === e ? void 0 : e.hostname;
                            if (t && -1 !== t.indexOf("creator.douyin.com"))
                                return t
                        }
                            ,
                            n.startStorageChecker = function () {
                                var e;
                                null === (e = n.storage) || void 0 === e || e.startStorageChecker().catch(function (e) {
                                    n.emit("error", {
                                        name: "start storage checker error",
                                        error: e
                                    })
                                })
                            }
                            ,
                            n.initLoadIframePromise = function () {
                                return new Promise(function (e, t) {
                                        var i;
                                        n.storage ? null === (i = n.storage) || void 0 === i || i.client.on("connection", function (t) {
                                            n.crossStatus = !0,
                                                e()
                                        }) : e()
                                    }
                                )
                            }
                            ,
                            n.getStorageStatus = function () {
                                var e;
                                return null === (e = n.storage) || void 0 === e ? void 0 : e.client.getIframeState()
                            }
                            ,
                            n._createStorageKey = function (e) {
                                var t = n.config.namespace;
                                return t ? "security-sdk/".concat(t, "/").concat(e) : "security-sdk/".concat(e)
                            }
                            ,
                            n._deleteStorageKey = function (e) {
                                return e.replace(/security-sdk\//g, "")
                            }
                            ,
                            n.getItem = function (e) {
                                return tt(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a;
                                    return tn(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                if (t = this._createStorageKey(e),
                                                    this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (o = this.storage) || void 0 === o ? void 0 : o.getItem(t)];
                                            case 1:
                                                return n = s.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (a = this.localStore) || void 0 === a ? void 0 : a.getItem(t)];
                                            case 3:
                                                n = s.sent(),
                                                    s.label = 4;
                                            case 4:
                                                if (n)
                                                    return r = (i = n || {}).value,
                                                        i.from,
                                                        i.origin,
                                                        [2, r || ""];
                                                return [2, ""]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getLocalItem = function (e) {
                                return tt(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l;
                                    return tn(this, function (h) {
                                        switch (h.label) {
                                            case 0:
                                                if (t = this._createStorageKey(e),
                                                    n = new Date().getTime(),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (u = this.localStore) || void 0 === u ? void 0 : u.getItem(t)];
                                            case 1:
                                                return i = h.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (l = this.storage) || void 0 === l ? void 0 : l.storage.getItem(t)];
                                            case 3:
                                                i = h.sent(),
                                                    h.label = 4;
                                            case 4:
                                                if (r = new Date().getTime(),
                                                    i)
                                                    return a = (o = i || {}).value,
                                                        s = o.from,
                                                        c = o.origin,
                                                        this.emit("execute", {
                                                            action: "localstorage",
                                                            op: "getItem",
                                                            status: a ? "success" : "success_null",
                                                            duration: r > n ? r - n : 0,
                                                            ctx: {
                                                                key: e,
                                                                from: "number" == typeof s ? s.toString() : "-99",
                                                                origin: c || "",
                                                                type: "localStorage"
                                                            }
                                                        }),
                                                        [2, a || ""];
                                                return this.emit("execute", {
                                                    action: "localstorage",
                                                    op: "getItem",
                                                    duration: r > n ? r - n : 0,
                                                    ctx: {
                                                        key: e,
                                                        type: "localStorage"
                                                    },
                                                    status: "success_null"
                                                }),
                                                    [2, ""]
                                        }
                                    })
                                })
                            }
                            ,
                            n.setLocalItem = function (e, t) {
                                return tt(n, void 0, void 0, function () {
                                    var n, i, r, o, a, s, c, u, l;
                                    return tn(this, function (h) {
                                        switch (h.label) {
                                            case 0:
                                                if (n = this._createStorageKey(e),
                                                    i = new Date().getTime(),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (u = this.localStore) || void 0 === u ? void 0 : u.setItem(n, t)];
                                            case 1:
                                                return r = h.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (l = this.storage) || void 0 === l ? void 0 : l.storage.setItem(n, t)];
                                            case 3:
                                                r = h.sent(),
                                                    h.label = 4;
                                            case 4:
                                                return a = (o = r || {}).from,
                                                    s = o.origin,
                                                    c = new Date().getTime(),
                                                    this.emit("execute", {
                                                        action: "localstorage",
                                                        op: "setItem",
                                                        status: "success",
                                                        duration: c > i ? c - i : 0,
                                                        ctx: {
                                                            key: e,
                                                            from: "number" == typeof a ? a.toString() : "-99",
                                                            origin: s || ""
                                                        }
                                                    }),
                                                    [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getLocalItemsWithKeys = function (e) {
                                return tt(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l = this;
                                    return tn(this, function (h) {
                                        switch (h.label) {
                                            case 0:
                                                if (t = e.map(function (e) {
                                                    return l._createStorageKey(e)
                                                }),
                                                    n = new Date().getTime(),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (s = this.localStore) || void 0 === s ? void 0 : s.getItemByKeys(t)];
                                            case 1:
                                                return i = h.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (u = null === (c = this.storage) || void 0 === c ? void 0 : c.storage) || void 0 === u ? void 0 : u.getItemByKeys(t)];
                                            case 3:
                                                i = h.sent(),
                                                    h.label = 4;
                                            case 4:
                                                if (r = new Date().getTime(),
                                                    o = {},
                                                    a = {},
                                                i && Array.isArray(i) && i.length === e.length)
                                                    return i.forEach(function (t, n) {
                                                        var i = t || {}
                                                            , r = i.value
                                                            , s = i.from
                                                            , c = i.origin
                                                            , u = e[n]
                                                            , l = "number" == typeof s ? s.toString() : "-99";
                                                        a["".concat(u.replace(/\//g, "_"), "_origin")] = c || "",
                                                            a["".concat(u.replace(/\//g, "_"), "_from")] = l,
                                                            a["".concat(u.replace(/\//g, "_"), "_status")] = r ? "success" : "success_null",
                                                            o[u] = r
                                                    }),
                                                        this.emit("execute", {
                                                            action: "localstorage",
                                                            op: "getKeys",
                                                            status: "success",
                                                            duration: r > n ? r - n : 0,
                                                            ctx: a
                                                        }),
                                                        [2, o];
                                                return e.forEach(function (e) {
                                                    o[e] = "",
                                                        a["".concat(e.replace(/\//g, "_"), "_status")] = "success_null"
                                                }),
                                                    this.emit("execute", {
                                                        action: "localstorage",
                                                        op: "getKeys",
                                                        duration: r > n ? r - n : 0,
                                                        ctx: a,
                                                        status: "success_null"
                                                    }),
                                                    [2, o]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getItemWithKeys = function (e) {
                                return tt(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s = this;
                                    return tn(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                if (t = e.map(function (e) {
                                                    return s._createStorageKey(e)
                                                }),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (o = this.localStore) || void 0 === o ? void 0 : o.getItemByKeys(t)];
                                            case 1:
                                                return n = c.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (a = this.storage) || void 0 === a ? void 0 : a.getItemByKeys(t)];
                                            case 3:
                                                n = c.sent(),
                                                    c.label = 4;
                                            case 4:
                                                if (i = {},
                                                    (r = {}).cross = "1",
                                                n && Array.isArray(n) && n.length === e.length)
                                                    return n.forEach(function (t, n) {
                                                        var o = t || {}
                                                            , a = o.value
                                                            , s = o.from
                                                            , c = o.origin
                                                            , u = e[n];
                                                        c && -1 === c.indexOf("lf-zt.douyin.com") && (r.cross = "0");
                                                        var l = "number" == typeof s ? s.toString() : "-99";
                                                        r["".concat(u.replace(/\//g, "_"), "_origin")] = c || "",
                                                            r["".concat(u.replace(/\//g, "_"), "_from")] = l,
                                                            r["".concat(u.replace(/\//g, "_"), "_status")] = a ? "success" : "success_null",
                                                            i[u] = a
                                                    }),
                                                        [2, i];
                                                return e.forEach(function (e) {
                                                    i[e] = "",
                                                        r["".concat(e.replace(/\//g, "_"), "_status")] = "success_null"
                                                }),
                                                    [2, i]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getItemsWithOrigin = function (e) {
                                return tt(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c = this;
                                    return tn(this, function (u) {
                                        switch (u.label) {
                                            case 0:
                                                if (t = e.map(function (e) {
                                                    return c._createStorageKey(e)
                                                }),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (a = this.localStore) || void 0 === a ? void 0 : a.getItemByKeys(t)];
                                            case 1:
                                                return n = u.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (s = this.storage) || void 0 === s ? void 0 : s.getItemByKeys(t)];
                                            case 3:
                                                n = u.sent(),
                                                    u.label = 4;
                                            case 4:
                                                if (i = {
                                                    data: {}
                                                },
                                                    r = {},
                                                    (o = {}).cross = "1",
                                                n && Array.isArray(n) && n.length === e.length)
                                                    return n.forEach(function (t, n) {
                                                        var i = t || {}
                                                            , a = i.value
                                                            , s = i.from
                                                            , c = i.origin
                                                            , u = e[n];
                                                        c && -1 === c.indexOf("lf-zt.douyin.com") && (o.cross = "0");
                                                        var l = "number" == typeof s ? s.toString() : "-99";
                                                        o["".concat(u.replace(/\//g, "_"), "_origin")] = c || "",
                                                            o["".concat(u.replace(/\//g, "_"), "_from")] = l,
                                                            o["".concat(u.replace(/\//g, "_"), "_status")] = a ? "success" : "success_null",
                                                            r[u] = {
                                                                key: u,
                                                                value: a,
                                                                from: l || "-99",
                                                                origin: c || "-1"
                                                            }
                                                    }),
                                                        i.data = r,
                                                        i.from = (null == o ? void 0 : o.cross) || "0",
                                                        [2, i];
                                                return e.forEach(function (e) {
                                                    r[e] = {
                                                        key: e,
                                                        value: "",
                                                        from: "-98",
                                                        origin: "-2"
                                                    },
                                                        o["".concat(e.replace(/\//g, "_"), "_status")] = "success_null"
                                                }),
                                                    i.data = r,
                                                    [2, i]
                                        }
                                    })
                                })
                            }
                            ,
                            n.setItemWithKeys = function (e, t, i) {
                                return tt(n, void 0, void 0, function () {
                                    var n, i, r, o, a, s = this;
                                    return tn(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                if (e.length !== t.length)
                                                    throw Error("set item with Keys need equal length");
                                                if (n = [],
                                                    e.forEach(function (e, i) {
                                                        var r = [s._createStorageKey(e), t[i]];
                                                        n.push(r)
                                                    }),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (o = this.localStore) || void 0 === o ? void 0 : o.setItemByKeys(n)];
                                            case 1:
                                                return i = c.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (a = this.storage) || void 0 === a ? void 0 : a.setItemByKeys(n, {
                                                    async: 3e3
                                                })];
                                            case 3:
                                                i = c.sent(),
                                                    c.label = 4;
                                            case 4:
                                                if ((r = {}).cross = "1",
                                                i && Array.isArray(i) && i.length === e.length)
                                                    return i.forEach(function (t, n) {
                                                        var i = t || {}
                                                            , o = i.from
                                                            , a = i.origin
                                                            , s = e[n];
                                                        a && -1 === a.indexOf("lf-zt.douyin.com") && (r.cross = "0");
                                                        var c = "number" == typeof o ? o.toString() : "-99";
                                                        r["".concat(s.replace(/\//g, "_"), "_origin")] = a || "",
                                                            r["".concat(s.replace(/\//g, "_"), "_from")] = c
                                                    }),
                                                        [2, {
                                                            cross: r.cross || "0"
                                                        }];
                                                return [2, {
                                                    cross: "0"
                                                }]
                                        }
                                    })
                                })
                            }
                            ,
                            n.setItem = function (e, t, i) {
                                return tt(n, void 0, void 0, function () {
                                    var n, r, o, a, s, c, u;
                                    return tn(this, function (l) {
                                        switch (l.label) {
                                            case 0:
                                                if (n = this._createStorageKey(e),
                                                    new Date().getTime(),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (s = this.localStore) || void 0 === s ? void 0 : s.setItem(n, t)];
                                            case 1:
                                            case 3:
                                                return r = l.sent(),
                                                    [3, 6];
                                            case 2:
                                                if (!i)
                                                    return [3, 4];
                                                return [4, null === (c = this.storage) || void 0 === c ? void 0 : c.setItem(n, t, {
                                                    async: i
                                                })];
                                            case 4:
                                                return [4, null === (u = this.storage) || void 0 === u ? void 0 : u.setItem(n, t, {
                                                    async: !0
                                                })];
                                            case 5:
                                                r = l.sent(),
                                                    l.label = 6;
                                            case 6:
                                                return (o = r || {}).from,
                                                    a = o.origin,
                                                    new Date().getTime(),
                                                    [2, {
                                                        cross: a && -1 !== a.indexOf("lf-zt.douyin.com") ? "1" : "0"
                                                    }]
                                        }
                                    })
                                })
                            }
                            ,
                            n.deleteItem = function (e) {
                                return tt(n, void 0, void 0, function () {
                                    var t, n, i;
                                    return tn(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                if (t = this._createStorageKey(e),
                                                    !this.disableCrossStorage)
                                                    return [3, 2];
                                                return [4, null === (n = this.localStore) || void 0 === n ? void 0 : n.removeItem(t)];
                                            case 1:
                                                return r.sent(),
                                                    [3, 4];
                                            case 2:
                                                return [4, null === (i = this.storage) || void 0 === i ? void 0 : i.removeItem(t)];
                                            case 3:
                                                r.sent(),
                                                    r.label = 4;
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n.checkIframeStatus = function (e) {
                                var t;
                                try {
                                    if (n.hasCheckIframeStatus && !e)
                                        return;
                                    n.hasCheckIframeStatus = !0;
                                    var i = null === (t = null == document ? void 0 : document.querySelectorAll) || void 0 === t ? void 0 : t.call(document, "iframe")
                                        , r = !1;
                                    i && i.length > 0 && i.forEach(function (t) {
                                        var i = t.src;
                                        i && -1 !== i.indexOf("lf-zt.douyin.com") && (n.emit("execute", {
                                            action: "iframe",
                                            op: e ? "check" : "getKeys",
                                            status: "success",
                                            ctx: {
                                                type: e ? "unload" : "getKeys"
                                            }
                                        }),
                                            r = !0)
                                    }),
                                    r || n.emit("execute", {
                                        action: "iframe",
                                        op: e ? "check" : "getKeys",
                                        status: "fail",
                                        ctx: {
                                            type: e ? "unload" : "getKeys"
                                        }
                                    })
                                } catch (t) {
                                    n.emit("error", {
                                        error: t,
                                        name: "check iframe status error"
                                    }),
                                        n.emit("execute", {
                                            action: "iframe",
                                            op: e ? "check" : "getKeys",
                                            status: "fail",
                                            ctx: {
                                                type: e ? "unload" : "getKeys"
                                            }
                                        })
                                }
                            }
                            ,
                            n.getIframeStatus = function () {
                                return n.crossStatus || n.iframeStatus
                            }
                            ,
                            n.verifySignMethod = function (e) {
                                try {
                                    var t = e7("_bd_ticket_crypt_cookie") || "";
                                    if (e && Array.isArray(e) && 3 === e.length) {
                                        var i = e[0]
                                            , r = e[1]
                                            , o = e[2];
                                        return N(t, i, r, o)
                                    }
                                } catch (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "verify sign method error"
                                    })
                                }
                                return !1
                            }
                            ,
                            n.enableHotPath = function () {
                                try {
                                    var e = document.location.href;
                                    if (-1 !== e.indexOf("creator.douyin.com"))
                                        return !0
                                } catch (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "enable hot path error"
                                    })
                                }
                                return !1
                            }
                            ,
                            n.initUnloadEvent = function () {
                                try {
                                    window.addEventListener("beforeunload", function (e) {
                                    })
                                } catch (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "unload check error"
                                    })
                                }
                            }
                        ;
                        var i = t.url
                            , r = t.fallbackCacheOriginURL
                            , o = t.sendEvent
                            , a = t.disableCrossStorage;
                        if (n.disableCrossStorage = a,
                            n.config = t,
                            n.disableCrossStorage)
                            n.localStore = new eL,
                                n.localStore.on("log", function (e) {
                                    var t = e || {}
                                        , i = t.name
                                        , r = t.content;
                                    n.emit("log", {
                                        extra: {
                                            content: r || ""
                                        },
                                        content: i,
                                        level: "info"
                                    })
                                }),
                                n.localStore.on("error", function (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "storage error"
                                    })
                                });
                        else {
                            var s = X("https://lf-zt.douyin.com/obj/uc-assets/zt/");
                            n.localStore = new eL,
                                n.storage = new e9({
                                    url: i || s || "",
                                    protocol: "SERCURE",
                                    fallback: r,
                                    verifySignMethod: n.verifySignMethod
                                }),
                                n.storage.setOriginStorageConfig({
                                    enableHotPatch: n.enableHotPath(),
                                    hostname: n.getCurrentHostName()
                                }).catch(function (e) {
                                    n.emit("error", {
                                        name: "enbale hot patch error",
                                        error: e
                                    })
                                }),
                                n.hasCheckIframeStatus = !1,
                                n.iframeStatus = !1,
                                n.crossStatus = !1,
                                n.storage.on("error", function (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "storage error"
                                    })
                                }),
                                n.storage.on("log", function (e) {
                                    var t = e || {}
                                        , i = t.name
                                        , r = t.content;
                                    n.emit("log", {
                                        extra: {
                                            content: r || ""
                                        },
                                        content: i,
                                        level: "info"
                                    })
                                }),
                                n.storage.on("metrics", function (e) {
                                    var t = e || {}
                                        , n = t.name
                                        , i = t.metrics
                                        , r = t.categories;
                                    n && "string" == typeof n ? null == o || o({
                                        name: "storage_".concat(n),
                                        metrics: i,
                                        categories: r
                                    }) : null == o || o({
                                        name: "storage_event_without_name",
                                        metrics: i,
                                        categories: r
                                    })
                                }),
                                n.loadIframePromise = n.initLoadIframePromise()
                        }
                        return n
                    }

                    return te(t, e),
                        t
                }(q)
                , tr = function (e) {
                    var t = this;
                    this.getKeys = function () {
                        return {
                            publicKey: t._public_key,
                            privateKey: t._private_key
                        }
                    }
                        ,
                        this.sign = function (e) {
                            var n = O.KEYUTIL.getKey(t._private_key || "")
                                , i = new O.KJUR.crypto.Signature({
                                alg: "SHA256withECDSA"
                            });
                            return i.init(n),
                                i.signString(e)
                        }
                        ,
                        this.verify = function (e, n, i) {
                            var r = new O.KJUR.crypto.Signature({
                                alg: "SHA256withECDSA"
                            });
                            if (i)
                                r.init(i);
                            else {
                                var o = O.KEYUTIL.getKey(t._public_key || "");
                                r.init(o)
                            }
                            return r.updateString(n),
                                r.verify(e)
                        }
                        ,
                        this.getCSR = function () {
                            var e;
                            return new O.KJUR.asn1.csr.CertificationRequest({
                                subject: {
                                    str: "/C=CN/CN=bd_ticket_guard"
                                },
                                sbjpubkey: t._public_key || "",
                                sigalg: "SHA256withECDSA",
                                extreq: [{
                                    extname: "subjectAltName",
                                    array: [{
                                        dns: (null === (e = null == window ? void 0 : window.location) || void 0 === e ? void 0 : e.hostname) || ""
                                    }]
                                }],
                                sbjprvkey: t._private_key || ""
                            }).getPEM()
                        }
                        ,
                        this.comparePubKey = function (e, t) {
                            var n = O.KEYUTIL.getKey(e)
                                , i = O.pemtohex(t)
                                , r = n.generatePublicKeyHex();
                            return i.includes(r)
                        }
                    ;
                    var n = e.privateKey
                        , i = e.publicKey;
                    if (n && i)
                        this._public_key = i,
                            this._private_key = n;
                    else {
                        var r = O.KEYUTIL.generateKeypair("EC", "secp256r1")
                            , o = r.prvKeyObj
                            , a = r.pubKeyObj;
                        this._public_key = O.KEYUTIL.getPEM(a),
                            this._private_key = O.KEYUTIL.getPEM(o, "PKCS8PRV")
                    }
                }
                , to = (l = function (e, t) {
                        return (l = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            l(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , ta = function (e) {
                    function t() {
                        var t = e.call(this) || this;
                        return t.getCookie = function (e) {
                            try {
                                return decodeURIComponent(document.cookie.replace(RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                            } catch (e) {
                                t.emit("error", {
                                    error: e,
                                    name: "cookie get item error"
                                })
                            }
                            return null
                        }
                            ,
                            t.setCookie = function (e, n, i, r, o, a) {
                                try {
                                    if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e))
                                        return !1;
                                    return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(n) + (o ? "; max-age=" + o : "") + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (a ? "; secure" : ""),
                                        !0
                                } catch (e) {
                                    t.emit("error", {
                                        error: e,
                                        name: "cookie set item error"
                                    })
                                }
                                return !1
                            }
                            ,
                            t.setCookieNoTimeout = function (e, n) {
                                t.setCookie(e, n, "/")
                            }
                            ,
                            t.setCookieWithMaxAge = function (e, n) {
                                t.setCookie(e, n, "/", void 0, 5184e3)
                            }
                            ,
                            t.setCookieWithDomain = function (e, n) {
                                var i = e8();
                                t.setCookie(e, n, "/", i, 5184e3)
                            }
                            ,
                            t.deleteCookie = function (e, n, i) {
                                return !!(e && t.hasCookie(e)) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC" + (i ? "; domain=" + i : "") + (n ? "; path=" + n : ""),
                                    !0)
                            }
                            ,
                            t.deleteAllCookie = function (e) {
                                var n = e8()
                                    , i = document.location.hostname;
                                t.deleteCookie(e, "/", n),
                                    t.deleteCookie(e, "/", i),
                                    t.deleteCookie(e, "/")
                            }
                            ,
                            t.hasCookie = function (e) {
                                return RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                            }
                            ,
                            t.getCookieKeys = function () {
                                for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = [], n = 0; n < e.length; n++)
                                    e[n] && t.push(decodeURIComponent(e[n]));
                                return t
                            }
                            ,
                            t
                    }

                    return to(t, e),
                        t
                }(q)
                , ts = (h = function (e, t) {
                        return (h = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function (e, t) {
                                    e.__proto__ = t
                                }
                                || function (e, t) {
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                        )(e, t)
                    }
                        ,
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }

                            h(e, t),
                                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                    new n)
                        }
                )
                , tc = function () {
                    return (tc = Object.assign || function (e) {
                            for (var t, n = 1, i = arguments.length; n < i; n++)
                                for (var r in t = arguments[n])
                                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }
                    ).apply(this, arguments)
                }
                , tu = function (e, t, n, i) {
                    return new (n || (n = Promise))(function (r, o) {
                            function a(e) {
                                try {
                                    c(i.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(i.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                        e(t)
                                    }
                                )).then(a, s)
                            }

                            c((i = i.apply(e, t || [])).next())
                        }
                    )
                }
                , tl = function (e, t) {
                    var n, i, r, o, a = {
                        label: 0,
                        sent: function () {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }
                    ),
                        o;

                    function s(o) {
                        return function (s) {
                            return function (o) {
                                if (n)
                                    throw TypeError("Generator is already executing.");
                                for (; a;)
                                    try {
                                        if (n = 1,
                                        i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                            return r;
                                        switch (i = 0,
                                        r && (o = [2 & o[0], r.value]),
                                            o[0]) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return a.label++,
                                                    {
                                                        value: o[1],
                                                        done: !1
                                                    };
                                            case 5:
                                                a.label++,
                                                    i = o[1],
                                                    o = [0];
                                                continue;
                                            case 7:
                                                o = a.ops.pop(),
                                                    a.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                    a.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && a.label < r[1]) {
                                                    a.label = r[1],
                                                        r = o;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2],
                                                        a.ops.push(o);
                                                    break
                                                }
                                                r[2] && a.ops.pop(),
                                                    a.trys.pop();
                                                continue
                                        }
                                        o = t.call(e, a)
                                    } catch (e) {
                                        o = [6, e],
                                            i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                if (5 & o[0])
                                    throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                }
                , th = "s_sdk_crypt_sdk"
                , tf = "s_sdk_cert_key"
                , td = "s_sdk_sign_data_key"
                , tp = "_bd_ticket_crypt_cookie"
                , tg = function (e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.signType = "pubKey",
                            n.initType = "pubKey",
                            n.setType = function (e) {
                                var t = e.initType
                                    , i = e.signType;
                                n.signType = void 0 === i ? "pubKey" : i,
                                    n.initType = void 0 === t ? "pubKey" : t
                            }
                            ,
                            n.setStorageType = function (e) {
                                if (n.storeType && e !== n.storeType)
                                    throw Error("secure sdk only one storage type, please set correct type!");
                                n.storeType = e
                            }
                            ,
                            n.setDisableStorageSignData = function (e) {
                                n._disableStorageSignData = e
                            }
                            ,
                            n.setCrossStorageURL = function (e) {
                                n._iframeURL = e
                            }
                            ,
                            n.setCrossStorageBackURL = function (e) {
                                n._iframeBackURL = e
                            }
                            ,
                            n.setDisableCrossStorage = function (e) {
                                n._disableCrossStorage = e
                            }
                            ,
                            n.setStorageNamespace = function (e) {
                                n._storageNamespace = e
                            }
                            ,
                            n.setUpdateKeys = function (e) {
                                n.updateKeys = e
                            }
                            ,
                            n.setConfig = function (e) {
                                n.config = e
                            }
                            ,
                            n.setContext = function (e) {
                                var t = e.disableCrossStorage
                                    , i = e.updateKeys
                                    , r = e.storageNamespace
                                    , o = e.iframeBackURL
                                    , a = e.iframeURL
                                    , s = e.signType
                                    , c = e.initType
                                    , u = e.storeType
                                    , l = e.disableStorageSignData;
                                n.signType = void 0 === s ? "pubKey" : s,
                                    n.initType = void 0 === c ? "pubKey" : c,
                                    n._disableCrossStorage = void 0 !== t && t,
                                    n._storageNamespace = r,
                                    n._iframeBackURL = o,
                                    n._iframeURL = a,
                                    n.updateKeys = void 0 !== i && i,
                                    n.storeType = void 0 === u ? "iframe" : u,
                                    n._disableStorageSignData = void 0 !== l && l
                            }
                            ,
                            n.start = function () {
                                n.initIframeKeys(),
                                    Object.keys(n.config || {}).forEach(function (e) {
                                        var t, i = null === (t = n.config) || void 0 === t ? void 0 : t[e],
                                            r = Array.isArray(i) && i.length > 0 && i[0] || {}, o = r.scene;
                                        "cookie" === r.certType && n._initCookie(void 0 === o ? "" : o)
                                    })
                            }
                            ,
                            n.initIframeStore = function () {
                                var e, t = n._iframeURL;
                                if (!n._storeSDK) {
                                    n.cookieOperate = new ta,
                                    null === (e = n.cookieOperate) || void 0 === e || e.on("error", function (e) {
                                        n.emit("error", e)
                                    });
                                    var i = (n.initConfig || {}).sendEvent
                                        , r = new ti({
                                        url: t,
                                        fallbackCacheOriginURL: n._iframeBackURL,
                                        sendEvent: i,
                                        disableCrossStorage: n._disableCrossStorage,
                                        namespace: n._storageNamespace
                                    });
                                    n.loadIframePromise = r.loadIframePromise,
                                        r.on("error", function (e) {
                                            n.emit("error", e)
                                        }),
                                        r.on("load", function (e) {
                                            n.emit("load", e)
                                        }),
                                        r.on("execute", function (e) {
                                            n.emit("execute", e)
                                        }),
                                        r.on("log", function (e) {
                                            n.emit("log", e)
                                        });
                                    var o = void 0;
                                    o = {
                                        get: z(r.getItem, "iframe get item error", n.reportError, "getItem", "storage"),
                                        set: z(r.setItem, "iframe set item error", n.reportError, "setItem", "storage"),
                                        delete: z(r.deleteItem, "iframe delete item error", n.reportError, "deleteItem", "storage"),
                                        getItems: z(r.getItemWithKeys, "iframe get items keys error", n.reportError, "getKeys", "storage"),
                                        setItems: z(r.setItemWithKeys, "iframe set items keys error", n.reportError, "setKeys", "storage"),
                                        getItemsWithOrigin: z(r.getItemsWithOrigin, "iframe get items keys with origin error", n.reportError, "getKeys", "storage"),
                                        getLocalItem: z(r.getLocalItem, "localstorage get item keys error", n.reportError, "getItem", "localstorage"),
                                        setLocalItem: z(r.setLocalItem, "localstorage set item keys error", n.reportError, "setItem", "localstorage"),
                                        getLocalItems: z(r.getLocalItemsWithKeys, "localstorage set item keys error", n.reportError, "setItem", "localstorage"),
                                        getIframeStatus: r.getIframeStatus,
                                        getStorageStatus: r.getStorageStatus,
                                        startStorageChecker: r.startStorageChecker
                                    },
                                        n._storeSDK = o
                                }
                            }
                            ,
                            n.initIframeKeys = function () {
                                n.initIframeStore(),
                                    n._checkCryptKeys()
                            }
                            ,
                            n._initCookie = j(function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t;
                                    return tl(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 3, , 4]),
                                                    [4, this._processServerCookie(e)];
                                            case 1:
                                                return n.sent(),
                                                    [4, this._processCookie()];
                                            case 2:
                                                return n.sent(),
                                                    [2, !0];
                                            case 3:
                                                return t = n.sent(),
                                                    this.reportError(t, "Init Cookie Error"),
                                                    [3, 4];
                                            case 4:
                                                return [2, !1]
                                        }
                                    })
                                })
                            }),
                            n._checkCryptKeys = j(function () {
                                return tu(n, void 0, void 0, function () {
                                    var e, t, n, i, r, o, a, s, c, u, l, h;
                                    return tl(this, function (f) {
                                        switch (f.label) {
                                            case 0:
                                                return f.trys.push([0, 9, , 10]),
                                                    e = this._getInitKeys(),
                                                    [4, null === (h = this._storeSDK) || void 0 === h ? void 0 : h.getItems(e)];
                                            case 1:
                                                if (n = (t = f.sent()) && t[th],
                                                    this._initData = t || {},
                                                    !(n && "string" == typeof n))
                                                    return [3, 7];
                                                f.label = 2;
                                            case 2:
                                                if (f.trys.push([2, 5, , 7]),
                                                    o = (r = (i = JSON.parse(n)) || {}).ec_privateKey,
                                                    a = r.ec_publicKey,
                                                    s = r.ec_csr,
                                                    !(!o || !a || "cert" === this.initType && !s))
                                                    return [3, 4];
                                                return this._initData = {},
                                                    this.emit("load", {
                                                        action: "keys",
                                                        op: "check",
                                                        status: "fail"
                                                    }),
                                                    [4, this._initCert()];
                                            case 3:
                                            case 6:
                                                return [2, f.sent()];
                                            case 4:
                                                return this.cryptoSDK = new tr({
                                                    privateKey: o,
                                                    publicKey: a
                                                }),
                                                    this._cryptObject = i,
                                                    this._cryptData = n,
                                                    this.emit("load", {
                                                        action: "sdk",
                                                        op: "init",
                                                        duration: this.getPerfomanceTimes(),
                                                        status: "success"
                                                    }),
                                                    [2, !0];
                                            case 5:
                                                return c = f.sent(),
                                                    this.emit("load", {
                                                        action: "keys",
                                                        op: "check",
                                                        status: "fail"
                                                    }),
                                                    this.emit("error", {
                                                        error: c,
                                                        name: "check crypt data error"
                                                    }),
                                                    this._initData = {},
                                                    [4, this._initCert()];
                                            case 7:
                                                return [4, this._initCert()];
                                            case 8:
                                                return u = f.sent(),
                                                    this.emit("load", {
                                                        action: "sdk",
                                                        op: "init",
                                                        duration: this.getPerfomanceTimes(),
                                                        status: "success"
                                                    }),
                                                    [2, u];
                                            case 9:
                                                return l = f.sent(),
                                                    this.emit("load", {
                                                        action: "sdk",
                                                        op: "init",
                                                        status: "fail"
                                                    }),
                                                    this.reportError(l, "check_crypt_keys_error"),
                                                    [2, !1];
                                            case 10:
                                                return [2]
                                        }
                                    })
                                })
                            }),
                            n.getPerfomanceTimes = function () {
                                var e, t = 0;
                                try {
                                    t = (null === (e = window.performance) || void 0 === e ? void 0 : e.now()) || new Date().getTime()
                                } catch (e) {
                                }
                                return t
                            }
                            ,
                            n._getInitKeys = function () {
                                try {
                                    var e = [th, tf]
                                        , t = "".concat(td, "/web_protect");
                                    return e.push(t),
                                        e
                                } catch (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "get init keys error"
                                    })
                                }
                                return [th, tf]
                            }
                            ,
                            n._processCookie = function () {
                                return tu(n, void 0, void 0, function () {
                                    var e, t, n, i, r, o, a, s, c, u, l, h, f;
                                    return tl(this, function (d) {
                                        switch (d.label) {
                                            case 0:
                                                return d.trys.push([0, 4, , 5]),
                                                    [4, this._checkCryptKeys()];
                                            case 1:
                                                if (d.sent(),
                                                    !(!this._hasProcessServerData || "pubKey" === this.initType))
                                                    return [3, 3];
                                                return [4, this.checkCookieMd5()];
                                            case 2:
                                                d.sent(),
                                                    d.label = 3;
                                            case 3:
                                                if (null === (s = null === (a = this._storeSDK) || void 0 === a ? void 0 : a.startStorageChecker) || void 0 === s || s.call(a),
                                                    t = (e = this._cryptObject || {}).ec_privateKey,
                                                    n = e.ec_csr,
                                                "cert" === this.initType && !n || !t)
                                                    return [2];
                                                return i = "cert" === this.initType ? {
                                                    "bd-ticket-guard-client-csr": n || ""
                                                } : {
                                                    "bd-ticket-guard-ree-public-key": R(t),
                                                    "bd-ticket-guard-web-version": 1
                                                },
                                                    r = I(JSON.stringify(tc({
                                                        "bd-ticket-guard-version": 2,
                                                        "bd-ticket-guard-iteration-version": 1
                                                    }, i))),
                                                null === (c = this.cookieOperate) || void 0 === c || c.deleteAllCookie("bd_ticket_guard_client_data"),
                                                null === (u = this.cookieOperate) || void 0 === u || u.setCookieWithDomain("bd_ticket_guard_client_data", r),
                                                null === (l = this.cookieOperate) || void 0 === l || l.setCookieWithDomain("bd_ticket_guard_client_web_domain", "2"),
                                                    this.emit("execute", {
                                                        action: "cookie",
                                                        op: "setItem",
                                                        status: "success",
                                                        ctx: {
                                                            type: "client"
                                                        }
                                                    }),
                                                    this.emit("log", {
                                                        extra: {
                                                            cookie: (null === (h = this.cookieOperate) || void 0 === h ? void 0 : h.getCookie("bd_ticket_guard_client_data")) || "",
                                                            cookieString: r
                                                        },
                                                        content: "set client data success",
                                                        level: "info"
                                                    }),
                                                    [3, 5];
                                            case 4:
                                                return o = d.sent(),
                                                    this.emit("log", {
                                                        extra: {
                                                            cookie: (null === (f = this.cookieOperate) || void 0 === f ? void 0 : f.getCookie("bd_ticket_guard_client_data")) || ""
                                                        },
                                                        content: "process client cookie error",
                                                        level: "error"
                                                    }),
                                                    this.reportError(o, "Process Cookie Error"),
                                                    this.emit("execute", {
                                                        action: "cookie",
                                                        op: "setItem",
                                                        status: "fail",
                                                        ctx: {
                                                            type: "client"
                                                        }
                                                    }),
                                                    [3, 5];
                                            case 5:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n.checkCookieMd5 = function () {
                                return tu(n, void 0, void 0, function () {
                                    var e, t, n, i, r, o, a, s, c, u, l, h, f, d, p, g, m, v, _, y = this;
                                    return tl(this, function (b) {
                                        switch (b.label) {
                                            case 0:
                                                if (b.trys.push([0, 3, , 4]),
                                                    !(e = (null === (h = this.cookieOperate) || void 0 === h ? void 0 : h.getCookie(tp)) || ""))
                                                    return [2, !1];
                                                if (N(e, this._cryptData, this._initData[tf], this._initData["".concat(td, "/web_protect")]))
                                                    return t = [th, tf, "".concat(td, "/web_protect")],
                                                        n = [this._cryptData || "", this._initData[tf] || "", this._initData["".concat(td, "/web_protect")] || ""],
                                                    null === (f = this.loadIframePromise) || void 0 === f || f.then(function () {
                                                        var e;
                                                        return null === (e = y._storeSDK) || void 0 === e ? void 0 : e.setItems(t, n, 2).then(function (e) {
                                                            var n, i = (e || {}).cross, r = void 0 === i ? "0" : i;
                                                            return null === (n = y._storeSDK) || void 0 === n ? void 0 : n.getItems(t).then(function (e) {
                                                                var t,
                                                                    n = N((null === (t = y.cookieOperate) || void 0 === t ? void 0 : t.getCookie(tp)) || "", null == e ? void 0 : e[th], null == e ? void 0 : e[tf], null == e ? void 0 : e["".concat(td, "/web_protect")]);
                                                                y.emit("load", {
                                                                    action: "cookie",
                                                                    op: "process",
                                                                    status: "success",
                                                                    ctx: {
                                                                        type: "1",
                                                                        scene: "callback",
                                                                        correct: n ? "1" : "0",
                                                                        cross: r
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    }).catch(function (e) {
                                                        y.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "fail",
                                                            ctx: {
                                                                type: "1",
                                                                scene: "callback"
                                                            }
                                                        }),
                                                            y.emit("error", {
                                                                error: e,
                                                                name: "async data fail"
                                                            })
                                                    }),
                                                        this.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "success",
                                                            ctx: {
                                                                type: "1"
                                                            }
                                                        }),
                                                        this.initMatch = !0,
                                                        [2];
                                                return [4, null === (d = this._storeSDK) || void 0 === d ? void 0 : d.getLocalItem(th)];
                                            case 1:
                                                if (i = b.sent(),
                                                    N(e, i, (null === (p = this._initData) || void 0 === p ? void 0 : p[tf]) || "", (null === (g = this._initData) || void 0 === g ? void 0 : g["".concat(td, "/web_protect")]) || ""))
                                                    return r = [th, tf, "".concat(td, "/web_protect")],
                                                        o = [i || "", this._initData[tf] || "", this._initData["".concat(td, "/web_protect")] || ""],
                                                        this._processCryptData(i, "check cookie md5 error"),
                                                    null === (m = this.loadIframePromise) || void 0 === m || m.then(function () {
                                                        var e;
                                                        return null === (e = y._storeSDK) || void 0 === e ? void 0 : e.setItems(r, o, 2).then(function (e) {
                                                            var t, n = (e || {}).cross, i = void 0 === n ? "0" : n;
                                                            return null === (t = y._storeSDK) || void 0 === t ? void 0 : t.getItems(r).then(function (e) {
                                                                var t,
                                                                    n = N((null === (t = y.cookieOperate) || void 0 === t ? void 0 : t.getCookie(tp)) || "", null == e ? void 0 : e[th], null == e ? void 0 : e[tf], null == e ? void 0 : e["".concat(td, "/web_protect")]);
                                                                y.emit("load", {
                                                                    action: "cookie",
                                                                    op: "process",
                                                                    status: "success",
                                                                    ctx: {
                                                                        type: "2",
                                                                        scene: "callback",
                                                                        correct: n ? "1" : "0",
                                                                        cross: i
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    }).catch(function (e) {
                                                        y.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "fail",
                                                            ctx: {
                                                                type: "2",
                                                                scene: "callback"
                                                            }
                                                        }),
                                                            y.emit("error", {
                                                                error: e,
                                                                name: "async data fail"
                                                            })
                                                    }),
                                                        this.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "success",
                                                            ctx: {
                                                                type: "2"
                                                            }
                                                        }),
                                                        this.initMatch = !0,
                                                        [2];
                                                return a = this._getInitKeys(),
                                                    [4, null === (v = this._storeSDK) || void 0 === v ? void 0 : v.getLocalItems(a)];
                                            case 2:
                                                if (s = b.sent(),
                                                    N(e, null == s ? void 0 : s[th], null == s ? void 0 : s[tf], null == s ? void 0 : s["".concat(td, "/web_protect")]))
                                                    return c = [th, tf, "".concat(td, "/web_protect")],
                                                        u = [null == s ? void 0 : s[th], null == s ? void 0 : s[tf], null == s ? void 0 : s["".concat(td, "/web_protect")]],
                                                        this._processCryptData((null == s ? void 0 : s[th]) || "", "check cookie md5 error"),
                                                    null === (_ = this.loadIframePromise) || void 0 === _ || _.then(function () {
                                                        var e;
                                                        return null === (e = y._storeSDK) || void 0 === e ? void 0 : e.setItems(c, u, 2).then(function (e) {
                                                            var t, n = (e || {}).cross, i = void 0 === n ? "0" : n;
                                                            return null === (t = y._storeSDK) || void 0 === t ? void 0 : t.getItems(c).then(function (e) {
                                                                var t,
                                                                    n = N((null === (t = y.cookieOperate) || void 0 === t ? void 0 : t.getCookie(tp)) || "", null == e ? void 0 : e[th], null == e ? void 0 : e[tf], null == e ? void 0 : e["".concat(td, "/web_protect")]);
                                                                y.emit("load", {
                                                                    action: "cookie",
                                                                    op: "process",
                                                                    status: "success",
                                                                    ctx: {
                                                                        type: "3",
                                                                        scene: "callback",
                                                                        correct: n ? "1" : "0",
                                                                        cross: i
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    }).catch(function (e) {
                                                        y.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "fail",
                                                            ctx: {
                                                                type: "3",
                                                                scene: "callback"
                                                            }
                                                        }),
                                                            y.emit("error", {
                                                                error: e,
                                                                name: "async data fail"
                                                            })
                                                    }),
                                                        this.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "success",
                                                            ctx: {
                                                                type: "3"
                                                            }
                                                        }),
                                                        this.initMatch = !0,
                                                        [2];
                                                return this.emit("load", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "fail"
                                                }),
                                                    [3, 4];
                                            case 3:
                                                return l = b.sent(),
                                                    this.emit("error", {
                                                        error: l,
                                                        name: "check cookie md5 fail"
                                                    }),
                                                    [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n._processCryptData = function (e, t) {
                                try {
                                    if (!e || "string" != typeof e)
                                        return;
                                    var i = JSON.parse(e)
                                        , r = i || {}
                                        , o = r.ec_privateKey
                                        , a = r.ec_publicKey;
                                    r.ec_csr,
                                        n._cryptData = e,
                                        n._initData[th] = e,
                                        n._cryptObject = i,
                                        n.cryptoSDK = new tr({
                                            privateKey: o,
                                            publicKey: a
                                        })
                                } catch (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: t || "process crypt data error"
                                    })
                                }
                            }
                            ,
                            n._compareCookieWithCache = function (e, t) {
                                return !!t && !!e && t === e
                            }
                            ,
                            n._processServerCookie = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l, h, f, d, p, g, m, v, _, y, b, w, S, E, k, D, T, C, O,
                                        x,
                                        I, A, M, P, G, R, N, z, j, V;
                                    return tl(this, function ($) {
                                        switch ($.label) {
                                            case 0:
                                                return $.trys.push([0, 8, , 9]),
                                                    [4, this._checkCryptKeys()];
                                            case 1:
                                                if ($.sent(),
                                                    t = (null === (k = this.cookieOperate) || void 0 === k ? void 0 : k.getCookie("bd_ticket_guard_server_data")) || "",
                                                    n = e7("bd_ticket_guard_server_data") || "",
                                                (t || n) && this.emit("log", {
                                                    extra: {
                                                        cookie: t,
                                                        cookie2: n,
                                                        docCookie: (null == document ? void 0 : document.cookie) || "",
                                                        lost: t && n ? "0" : "1"
                                                    },
                                                    content: "get_cookie_two",
                                                    level: "info"
                                                }),
                                                    i = t || n,
                                                (r = (null === (D = this.cookieOperate) || void 0 === D ? void 0 : D.getCookie("bd_ticket_guard_web_domain")) || "") && (this.emit("execute", {
                                                    op: "check",
                                                    action: "server_data",
                                                    status: "success",
                                                    ctx: {
                                                        server: i ? "1" : "0",
                                                        server2: n ? "1" : "0",
                                                        domain: r
                                                    }
                                                }),
                                                null === (T = this.cookieOperate) || void 0 === T || T.setCookieWithDomain("_bd_ticket_crypt_doamin", r)),
                                                    !i)
                                                    return [3, 6];
                                                if (o = new Date().getTime(),
                                                    s = (JSON.parse(a = K(decodeURIComponent(i))) || {}).client_cert,
                                                    c = ["".concat(td, "/").concat(e)],
                                                    u = [a],
                                                    !s)
                                                    return [3, 4];
                                                if (this._initData[tf] = s,
                                                    c.push(tf),
                                                    u.push(s),
                                                    l = B(this._cryptData, s),
                                                    h = L(this._cryptData, s),
                                                    !(!l && !h))
                                                    return [3, 3];
                                                return [4, null === (C = this._storeSDK) || void 0 === C ? void 0 : C.getLocalItem(th)];
                                            case 2:
                                                return d = B(f = $.sent(), s),
                                                    p = L(f, s),
                                                    f && (d || p) ? (c.push(th),
                                                        u.push(f),
                                                        this._processCryptData(f, "process local server cert error"),
                                                        g = new Date().getTime(),
                                                    (m = U(f, s, a)) && (null === (O = this.cookieOperate) || void 0 === O || O.setCookieWithDomain(tp, m)),
                                                        v = new Date().getTime(),
                                                        this.emit("log", {
                                                            extra: {
                                                                md5: m,
                                                                md5Cookie: (null === (x = this.cookieOperate) || void 0 === x ? void 0 : x.getCookie(tp)) || "",
                                                                duration: v - g
                                                            },
                                                            content: "generate keys info success local",
                                                            level: "info"
                                                        }),
                                                        this.emit("load", {
                                                            action: "cookie",
                                                            op: "check",
                                                            status: "success",
                                                            ctx: {
                                                                type: "local"
                                                            }
                                                        })) : (this.emit("load", {
                                                        action: "cookie",
                                                        op: "check",
                                                        status: "fail",
                                                        ctx: {
                                                            type: "local",
                                                            local: f ? "1" : "0",
                                                            localCorrect: d ? "1" : "0"
                                                        }
                                                    }),
                                                        y = (_ = this._cryptObject || {}).ec_csr,
                                                        b = _.ec_publicKey,
                                                        this.emit("log", {
                                                            content: "generate keys info success fail",
                                                            level: "info",
                                                            extra: {
                                                                csr: y || "",
                                                                pub: b || "",
                                                                cert: s || ""
                                                            }
                                                        })),
                                                    [3, 4];
                                            case 3:
                                                this._cryptData && c.push(th),
                                                this._cryptData && u.push(this._cryptData),
                                                (m = U(this._cryptData, s, a)) && (null === (I = this.cookieOperate) || void 0 === I || I.setCookieWithDomain(tp, m)),
                                                    this.emit("log", {
                                                        extra: {
                                                            md5: m,
                                                            md5Cookie: (null === (A = this.cookieOperate) || void 0 === A ? void 0 : A.getCookie(tp)) || ""
                                                        },
                                                        content: "generate keys info success init",
                                                        level: "info"
                                                    }),
                                                    this.emit("load", {
                                                        action: "cookie",
                                                        op: "check",
                                                        status: "success",
                                                        ctx: {
                                                            type: "init"
                                                        }
                                                    }),
                                                    $.label = 4;
                                            case 4:
                                                return [4, null === (M = this._storeSDK) || void 0 === M ? void 0 : M.setItems(c, u)];
                                            case 5:
                                                $.sent(),
                                                null === (P = this.cookieOperate) || void 0 === P || P.deleteAllCookie("bd_ticket_guard_server_data"),
                                                r && (null === (G = this.cookieOperate) || void 0 === G || G.deleteAllCookie("bd_ticket_guard_web_domain")),
                                                    this.emit("log", {
                                                        extra: {
                                                            cookie: i,
                                                            setCookie: (null === (R = this.cookieOperate) || void 0 === R ? void 0 : R.getCookie("bd_ticket_guard_server_data")) || "",
                                                            utf8Data: a
                                                        },
                                                        content: "process server cookie success",
                                                        level: "info"
                                                    }),
                                                    w = (null === (N = this.cookieOperate) || void 0 === N ? void 0 : N.getCookie("bd_ticket_guard_server_data")) ? "0" : "1",
                                                    S = new Date().getTime(),
                                                    this.emit("execute", {
                                                        action: "cookie",
                                                        op: "setItem",
                                                        status: "success",
                                                        duration: S > o ? S - o : 0,
                                                        ctx: {
                                                            type: "server",
                                                            deleteStatus: w
                                                        }
                                                    });
                                                try {
                                                    null === (z = this.cookieOperate) || void 0 === z || z.setCookieWithDomain("__security_server_data_status", "1"),
                                                        this.emit("execute", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "success"
                                                        })
                                                } catch (e) {
                                                    this.emit("execute", {
                                                        action: "cookie",
                                                        op: "process",
                                                        status: "fail"
                                                    }),
                                                        this.emit("log", {
                                                            content: "set process server cookie error",
                                                            level: "error"
                                                        })
                                                }
                                                return this._hasProcessServerData = !0,
                                                    [3, 7];
                                            case 6:
                                                !i && r && (null === (j = this.cookieOperate) || void 0 === j || j.deleteAllCookie("bd_ticket_guard_web_domain"),
                                                    this.emit("log", {
                                                        content: "process_web_domain",
                                                        level: "info",
                                                        extra: {
                                                            cookie: (null == document ? void 0 : document.cookie) || "",
                                                            domain: (null === (V = this.cookieOperate) || void 0 === V ? void 0 : V.getCookie("bd_ticket_guard_web_domain")) || ""
                                                        }
                                                    })),
                                                    $.label = 7;
                                            case 7:
                                                return [2, !0];
                                            case 8:
                                                return E = $.sent(),
                                                    this.emit("log", {
                                                        extra: {
                                                            cookie: null == document ? void 0 : document.cookie
                                                        },
                                                        content: "Process server Cookie Error",
                                                        level: "error"
                                                    }),
                                                    this.reportError(E, "process server cookie Error"),
                                                    this.emit("execute", {
                                                        action: "cookie",
                                                        op: "setItem",
                                                        status: "fail",
                                                        ctx: {
                                                            type: "server"
                                                        }
                                                    }),
                                                    [3, 9];
                                            case 9:
                                                return [2, !1]
                                        }
                                    })
                                })
                            }
                            ,
                            n._initCert = function () {
                                return tu(n, void 0, void 0, function () {
                                    var e, t, n, i, r, o, a, s, c, u, l;
                                    return tl(this, function (h) {
                                        switch (h.label) {
                                            case 0:
                                                return h.trys.push([0, 4, , 5]),
                                                    t = (e = this._getCertificatePem()).ec_privateKey,
                                                    n = e.ec_publicKey,
                                                    i = e.ec_csr,
                                                    [4, null === (a = this._storeSDK) || void 0 === a ? void 0 : a.getLocalItem(th)];
                                            case 1:
                                                if ((r = h.sent()) && "string" == typeof r)
                                                    return this._cryptData = r,
                                                        this._cryptObject = JSON.parse(r),
                                                        this.cryptoSDK = new tr({
                                                            privateKey: null === (s = this._cryptObject) || void 0 === s ? void 0 : s.ec_privateKey,
                                                            publicKey: null === (c = this._cryptObject) || void 0 === c ? void 0 : c.ec_publicKey
                                                        }),
                                                        this._initData = {
                                                            cryptCacheKey: r
                                                        },
                                                        this.emit("ready", {
                                                            action: "keys",
                                                            op: "init",
                                                            status: "fail",
                                                            ctx: {
                                                                type: "check"
                                                            }
                                                        }),
                                                        [2, !0];
                                                return this._cryptObject = {
                                                    ec_privateKey: t,
                                                    ec_publicKey: n,
                                                    ec_csr: i
                                                },
                                                    this._cryptData = JSON.stringify(this._cryptObject),
                                                    [4, null === (u = this._storeSDK) || void 0 === u ? void 0 : u.setLocalItem(th, this._cryptData)];
                                            case 2:
                                                return h.sent(),
                                                    [4, null === (l = this._storeSDK) || void 0 === l ? void 0 : l.set(th, this._cryptData)];
                                            case 3:
                                                return h.sent(),
                                                    this._initData = {
                                                        cryptCacheKey: this._cryptData
                                                    },
                                                    [2, !0];
                                            case 4:
                                                return o = h.sent(),
                                                    this.emit("load", {
                                                        action: "keys",
                                                        op: "init",
                                                        status: "fail"
                                                    }),
                                                    this.reportError(o, "init_cert_error"),
                                                    [2, !1];
                                            case 5:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getCertificate = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a;
                                    return tl(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                t = e.certType,
                                                    n = e.scene,
                                                    s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 8, , 9]),
                                                    [4, this._checkCryptKeys()];
                                            case 2:
                                                if (s.sent(),
                                                "cookie" !== t)
                                                    return [3, 5];
                                                return [4, this._initCookie()];
                                            case 3:
                                                return s.sent(),
                                                    [4, this._processServerCookie(n)];
                                            case 4:
                                                s.sent(),
                                                    s.label = 5;
                                            case 5:
                                                return [4, null === (o = this.setSignValueScheduler) || void 0 === o ? void 0 : o.wait()];
                                            case 6:
                                                return s.sent(),
                                                    [4, null === (a = this._storeSDK) || void 0 === a ? void 0 : a.get(tf)];
                                            case 7:
                                                if (i = s.sent())
                                                    return this.emit("log", {
                                                        extra: {
                                                            cert: i || ""
                                                        },
                                                        content: "Get Cert Success",
                                                        level: "info"
                                                    }),
                                                        [2, I(i)];
                                                return this.emit("log", {
                                                    extra: {
                                                        cert: i || ""
                                                    },
                                                    content: "Get Cert Fail",
                                                    level: "info"
                                                }),
                                                    [2, !1];
                                            case 8:
                                                return r = s.sent(),
                                                    this.reportError(r, "get cert fail"),
                                                    [3, 9];
                                            case 9:
                                                return [2, !1]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getPubKey = function () {
                                return tu(n, void 0, void 0, function () {
                                    var e, t;
                                    return tl(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]),
                                                    [4, this._checkCryptKeys()];
                                            case 1:
                                                if (n.sent(),
                                                    e = (this._cryptObject || {}).ec_privateKey)
                                                    return [2, R(e)];
                                                return [3, 3];
                                            case 2:
                                                return t = n.sent(),
                                                    this.reportError(t, "get pubkey error"),
                                                    [3, 3];
                                            case 3:
                                                return [2, ""]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getCertSignRequest = function () {
                                return tu(n, void 0, void 0, function () {
                                    var e, t;
                                    return tl(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]),
                                                    [4, this._checkCryptKeys()];
                                            case 1:
                                                if (n.sent(),
                                                    e = (this._cryptObject || {}).ec_csr)
                                                    return [2, I(e)];
                                                return [2, ""];
                                            case 2:
                                                return t = n.sent(),
                                                    this.reportError(t, "get csr error"),
                                                    [3, 3];
                                            case 3:
                                                return [2, ""]
                                        }
                                    })
                                })
                            }
                            ,
                            n._signValueWithIframe = function (e, t, i) {
                                return tu(n, void 0, void 0, function () {
                                    var n, r, o, a, s;
                                    return tl(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                if (c.trys.push([0, 9, , 10]),
                                                    n = (JSON.parse(e) || {}).client_cert,
                                                    this._disableStorageSignData)
                                                    return [3, 2];
                                                return [4, null === (o = this._storeSDK) || void 0 === o ? void 0 : o.set("".concat(td, "/").concat(t), e)];
                                            case 1:
                                                c.sent(),
                                                    c.label = 2;
                                            case 2:
                                                if (this._signData = e,
                                                    !i)
                                                    return [3, 5];
                                                if (!n)
                                                    return [3, 4];
                                                return [4, null === (a = this._storeSDK) || void 0 === a ? void 0 : a.set("".concat(tf), n)];
                                            case 3:
                                                c.sent(),
                                                    c.label = 4;
                                            case 4:
                                                c.label = 5;
                                            case 5:
                                                if (!this._storageNamespace)
                                                    return [3, 8];
                                                if (!n)
                                                    return [3, 7];
                                                return [4, null === (s = this._storeSDK) || void 0 === s ? void 0 : s.set("".concat(tf), n)];
                                            case 6:
                                                c.sent(),
                                                    c.label = 7;
                                            case 7:
                                                c.label = 8;
                                            case 8:
                                                return [2, !0];
                                            case 9:
                                                return r = c.sent(),
                                                    this.reportError(r, "sign value error"),
                                                    [2, !1];
                                            case 10:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n.setSignValue = function (e) {
                                var t, i, r = e || {}, o = r.sign, a = r.scene, s = r.namespace;
                                try {
                                    if ("string" == typeof o)
                                        i = K(o);
                                    else {
                                        if ("object" != typeof o)
                                            return !1;
                                        i = JSON.stringify(o)
                                    }
                                    return null === (t = n.setSignValueScheduler) || void 0 === t || t.provider(function () {
                                        return n._signValueWithIframe(i, a, s)
                                    }),
                                        !0
                                } catch (e) {
                                    return n.reportError(e, "set signValue Error"),
                                        !1
                                }
                            }
                            ,
                            n.setSignValueAsync = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a;
                                    return tl(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                n = (t = e || {}).sign,
                                                    i = t.scene,
                                                    r = t.namespace,
                                                    s.label = 1;
                                            case 1:
                                                if (s.trys.push([1, 3, , 4]),
                                                "string" == typeof n)
                                                    o = K(n);
                                                else {
                                                    if ("object" != typeof n)
                                                        return [2, !1];
                                                    o = JSON.stringify(n)
                                                }
                                                return [4, this._signValueWithIframe(o, i, r)];
                                            case 2:
                                                return s.sent(),
                                                    [2, !0];
                                            case 3:
                                                return a = s.sent(),
                                                    this.reportError(a, "set signValue Error"),
                                                    [2, !1];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n.clearSignData = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n;
                                    return tl(this, function (i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 4, , 5]),
                                                    [4, null === (t = this._storeSDK) || void 0 === t ? void 0 : t.delete("".concat(td, "/").concat(e))];
                                            case 1:
                                                if (i.sent(),
                                                    this._signData = "",
                                                    !this._storageNamespace)
                                                    return [3, 3];
                                                return [4, null === (n = this._storeSDK) || void 0 === n ? void 0 : n.delete("".concat(tf))];
                                            case 2:
                                                i.sent(),
                                                    i.label = 3;
                                            case 3:
                                                return [2, !0];
                                            case 4:
                                                return i.sent(),
                                                    [2, !1];
                                            case 5:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n.sign = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l, h, f, d, p, g, m;
                                    return tl(this, function (v) {
                                        switch (v.label) {
                                            case 0:
                                                t = e.sign_data,
                                                    n = e.req_content,
                                                    i = e.timestamp,
                                                    o = void 0 === (r = e.certType) ? "header" : r,
                                                    a = e.scene,
                                                    v.label = 1;
                                            case 1:
                                                return v.trys.push([1, 11, , 12]),
                                                    [4, this._checkCryptKeys()];
                                            case 2:
                                                if (v.sent(),
                                                "cookie" !== o)
                                                    return [3, 5];
                                                return [4, this._initCookie()];
                                            case 3:
                                                return v.sent(),
                                                    [4, this._processServerCookie(a || "")];
                                            case 4:
                                                v.sent(),
                                                    v.label = 5;
                                            case 5:
                                                if ("header" !== o)
                                                    return [3, 7];
                                                return [4, null === (p = this.setSignValueScheduler) || void 0 === p ? void 0 : p.wait()];
                                            case 6:
                                                v.sent(),
                                                    v.label = 7;
                                            case 7:
                                                if (s = void 0,
                                                    this._disableStorageSignData)
                                                    return [3, 9];
                                                return [4, null === (g = this._storeSDK) || void 0 === g ? void 0 : g.get("".concat(td, "/").concat(a))];
                                            case 8:
                                                return s = v.sent(),
                                                    [3, 10];
                                            case 9:
                                                s = this._signData,
                                                    v.label = 10;
                                            case 10:
                                                if (u = (c = JSON.parse(s || "{}")).ticket,
                                                    l = c.ts_sign,
                                                !t && !u)
                                                    return this.emit("log", {
                                                        extra: {
                                                            content: "sign_data and ticket is null"
                                                        },
                                                        content: "sign data fail",
                                                        level: "info"
                                                    }),
                                                        [2, ""];
                                                return h = M((null === (m = this.cryptoSDK) || void 0 === m ? void 0 : m.sign(t || u)) || ""),
                                                    f = {
                                                        ts_sign: l,
                                                        req_content: n || t || u,
                                                        req_sign: h,
                                                        timestamp: i || Math.floor(new Date().getTime() / 1e3)
                                                    },
                                                    this.emit("log", {
                                                        extra: {
                                                            content: JSON.stringify(f)
                                                        },
                                                        content: "sign data success",
                                                        level: "info"
                                                    }),
                                                    [2, I(JSON.stringify(f) || "")];
                                            case 11:
                                                return d = v.sent(),
                                                    this.emit("log", {
                                                        extra: {
                                                            sign_data: t || "",
                                                            req_content: n || "",
                                                            certType: o || "",
                                                            scene: a || ""
                                                        },
                                                        content: "sign data is error",
                                                        level: "error"
                                                    }),
                                                    this.reportError(d, "sign error"),
                                                    [3, 12];
                                            case 12:
                                                return [2, ""]
                                        }
                                    })
                                })
                            }
                            ,
                            n.pureSign = function (e) {
                                var t;
                                try {
                                    var i = null === (t = n.cryptoSDK) || void 0 === t ? void 0 : t.sign(e);
                                    return M(i || "")
                                } catch (e) {
                                    return n.reportError(e, "pure sign fail"),
                                        ""
                                }
                            }
                            ,
                            n.getTSSign = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c;
                                    return tl(this, function (u) {
                                        switch (u.label) {
                                            case 0:
                                                n = void 0 === (t = e.certType) ? "header" : t,
                                                    i = e.scene,
                                                    u.label = 1;
                                            case 1:
                                                return u.trys.push([1, 11, , 12]),
                                                    [4, this._checkCryptKeys()];
                                            case 2:
                                                if (u.sent(),
                                                "cookie" !== n)
                                                    return [3, 5];
                                                return [4, this._initCookie()];
                                            case 3:
                                                return u.sent(),
                                                    [4, this._processServerCookie(i)];
                                            case 4:
                                                u.sent(),
                                                    u.label = 5;
                                            case 5:
                                                if ("header" !== n)
                                                    return [3, 7];
                                                return [4, null === (s = this.setSignValueScheduler) || void 0 === s ? void 0 : s.wait()];
                                            case 6:
                                                u.sent(),
                                                    u.label = 7;
                                            case 7:
                                                if (r = void 0,
                                                    this._disableStorageSignData)
                                                    return [3, 9];
                                                return [4, null === (c = this._storeSDK) || void 0 === c ? void 0 : c.get("".concat(td, "/").concat(i))];
                                            case 8:
                                                if (!(r = u.sent()))
                                                    return this.emit("log", {
                                                        extra: {
                                                            content: r || ""
                                                        },
                                                        content: "get tssign fail",
                                                        level: "info"
                                                    }),
                                                        [2, !1];
                                                return [3, 10];
                                            case 9:
                                                r = this._signData,
                                                    u.label = 10;
                                            case 10:
                                                return o = JSON.parse(r || "{}").ts_sign,
                                                    this.emit("log", {
                                                        extra: {
                                                            content: o || ""
                                                        },
                                                        content: "get tssign success",
                                                        level: "info"
                                                    }),
                                                    [2, o];
                                            case 11:
                                                return a = u.sent(),
                                                    this.reportError(a, "get ts sign Error"),
                                                    [3, 12];
                                            case 12:
                                                return [2, !1]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getTicket = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s;
                                    return tl(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                t = e.certType,
                                                    n = e.scene,
                                                    c.label = 1;
                                            case 1:
                                                return c.trys.push([1, 11, , 12]),
                                                    [4, this._checkCryptKeys()];
                                            case 2:
                                                if (c.sent(),
                                                "cookie" !== t)
                                                    return [3, 5];
                                                return [4, this._initCookie()];
                                            case 3:
                                                return c.sent(),
                                                    [4, this._processServerCookie(n)];
                                            case 4:
                                                return c.sent(),
                                                    [3, 7];
                                            case 5:
                                                if ("header" !== t)
                                                    return [3, 7];
                                                return [4, null === (a = this.setSignValueScheduler) || void 0 === a ? void 0 : a.wait()];
                                            case 6:
                                                c.sent(),
                                                    c.label = 7;
                                            case 7:
                                                if (i = void 0,
                                                    this._disableStorageSignData)
                                                    return [3, 9];
                                                return [4, null === (s = this._storeSDK) || void 0 === s ? void 0 : s.get("".concat(td, "/").concat(n))];
                                            case 8:
                                                if (!(i = c.sent()))
                                                    return this.emit("log", {
                                                        content: "Get Ticket Fail",
                                                        level: "error"
                                                    }),
                                                        [2, !1];
                                                return [3, 10];
                                            case 9:
                                                i = this._signData,
                                                    c.label = 10;
                                            case 10:
                                                return r = (JSON.parse(i || "{}") || {}).ticket,
                                                    this.emit("log", {
                                                        extra: {
                                                            storage_sign_data: i || "",
                                                            ticket: r || ""
                                                        },
                                                        content: "Get Ticket Success",
                                                        level: "info"
                                                    }),
                                                    [2, r];
                                            case 11:
                                                return o = c.sent(),
                                                    this.reportError(o, "Get Ticket Error"),
                                                    [2, !1];
                                            case 12:
                                                return [2]
                                        }
                                    })
                                })
                            }
                            ,
                            n._getCertificatePem = function () {
                                var e, t, i = new Date().getTime();
                                n.cryptoSDK = new tr({});
                                var r = (null === (e = n.cryptoSDK) || void 0 === e ? void 0 : e.getKeys()) || {}
                                    , o = r.publicKey
                                    , a = void 0 === o ? "" : o
                                    , s = r.privateKey
                                    , c = void 0 === s ? "" : s
                                    , u = null === (t = n.cryptoSDK) || void 0 === t ? void 0 : t.getCSR()
                                    , l = new Date().getTime();
                                return n.emit("load", {
                                    action: "keys",
                                    op: "init",
                                    duration: l > i ? l - i : 0,
                                    status: "success",
                                    ctx: {
                                        pri: c ? "1" : "0",
                                        pub: a ? "1" : "0"
                                    }
                                }),
                                    {
                                        ec_publicKey: a,
                                        ec_privateKey: c,
                                        ec_csr: u
                                    }
                            }
                            ,
                            n._checkCert = function (e) {
                                try {
                                    var t = (n._cryptObject || {}).ec_publicKey;
                                    if (!e || !t)
                                        return !0;
                                    var i = P(e);
                                    if (i && t !== i)
                                        return n.emit("log", {
                                            extra: {
                                                message: "Cert Fail Delete",
                                                localCert: e || "",
                                                ec_publicKey: t || ""
                                            },
                                            content: "Cert Fail Delete",
                                            level: "error"
                                        }),
                                            n.emit("ready", {
                                                action: "cert",
                                                op: "check",
                                                status: "fail"
                                            }),
                                            !1;
                                    n.emit("ready", {
                                        action: "cert",
                                        op: "check",
                                        status: "success"
                                    })
                                } catch (e) {
                                    n.emit("ready", {
                                        action: "cert",
                                        op: "check",
                                        status: "fail"
                                    }),
                                        n.reportError(e, "Check Cert fail")
                                }
                                return !0
                            }
                            ,
                            n.refresh = function () {
                                return tu(n, void 0, void 0, function () {
                                    var e, t;
                                    return tl(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return this._cryptData = void 0,
                                                    this._cryptObject = void 0,
                                                    this._signData = void 0,
                                                    [4, null === (e = this._storeSDK) || void 0 === e ? void 0 : e.delete(th)];
                                            case 1:
                                                return n.sent(),
                                                    [4, null === (t = this._storeSDK) || void 0 === t ? void 0 : t.delete(tf)];
                                            case 2:
                                                return n.sent(),
                                                    this._storeSDK = void 0,
                                                    [2, this.start()]
                                        }
                                    })
                                })
                            }
                            ,
                            n.reportError = function (e, t, i, r, o) {
                                try {
                                    if (n.emit("error", {
                                        error: e,
                                        name: t
                                    }),
                                    i && r) {
                                        var a = Array.isArray(o) && o.length > 0 && o[0];
                                        if ("string" == typeof a)
                                            n.emit("log", {
                                                content: "report error",
                                                extra: {
                                                    key: a || ""
                                                },
                                                level: "error"
                                            });
                                        else if (a && Array.isArray(a)) {
                                            var s = {};
                                            a.forEach(function (e) {
                                                s["".concat(e.replace(/\//g, "_"))] = "1"
                                            }),
                                                n.emit("log", {
                                                    content: "report error",
                                                    extra: tc({}, s || {}),
                                                    level: "error"
                                                })
                                        }
                                    }
                                } catch (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "report error"
                                    })
                                }
                            }
                            ,
                            n.getKeysInfo = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l, h, f, d, p, g, m, v, _;
                                    return tl(this, function (y) {
                                        switch (y.label) {
                                            case 0:
                                                t = e.certType,
                                                    n = e.scene,
                                                    y.label = 1;
                                            case 1:
                                                return y.trys.push([1, 9, , 10]),
                                                    [4, this._checkCryptKeys()];
                                            case 2:
                                                if (y.sent(),
                                                "cookie" !== t)
                                                    return [3, 5];
                                                return [4, this._initCookie()];
                                            case 3:
                                                return y.sent(),
                                                    [4, this._processServerCookie(n)];
                                            case 4:
                                                return y.sent(),
                                                    [3, 7];
                                            case 5:
                                                if ("header" !== t)
                                                    return [3, 7];
                                                return [4, null === (v = this.setSignValueScheduler) || void 0 === v ? void 0 : v.wait()];
                                            case 6:
                                                y.sent(),
                                                    y.label = 7;
                                            case 7:
                                                return i = [th, tf, "".concat(td, "/").concat(n)],
                                                    [4, null === (_ = this._storeSDK) || void 0 === _ ? void 0 : _.getItems(i)];
                                            case 8:
                                                if (!(r = y.sent()))
                                                    return this.emit("log", {
                                                        content: "Get Keys Info Fail",
                                                        level: "error"
                                                    }),
                                                        [2, {}];
                                                return o = r[th],
                                                    a = r[tf],
                                                    s = r["".concat(td, "/").concat(n)],
                                                    u = (c = JSON.parse(o || "{}") || {}).ec_privateKey,
                                                    l = c.ec_publicKey,
                                                    h = c.ec_csr,
                                                    d = (f = JSON.parse(s || "{}") || {}).ticket,
                                                    p = f.ts_sign,
                                                    g = f.client_cert,
                                                    this.emit("log", {
                                                        extra: {
                                                            server_data: s || "",
                                                            cert_data: a || "",
                                                            csr: h || ""
                                                        },
                                                        content: "Get Keys Info Success",
                                                        level: "info"
                                                    }),
                                                    [2, {
                                                        crypt: {
                                                            ec_privateKey: u,
                                                            ec_publicKey: l
                                                        },
                                                        cert: a,
                                                        sign: {
                                                            ticket: d,
                                                            ts_sign: p,
                                                            client_cert: g
                                                        },
                                                        b64Cert: I(a || ""),
                                                        b64PubKey: K(l || ""),
                                                        b64Csr: I(h || "")
                                                    }];
                                            case 9:
                                                return m = y.sent(),
                                                    this.reportError(m, "Get Ticket Fail"),
                                                    [3, 10];
                                            case 10:
                                                return [2, {}]
                                        }
                                    })
                                })
                            }
                            ,
                            n.getKeysInfoWithOrigin = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l, h, f, d, p, g, m, v, _, y, b, w, S, E, k, D, T, C, O,
                                        x;
                                    return tl(this, function (A) {
                                        switch (A.label) {
                                            case 0:
                                                t = e.certType,
                                                    n = e.scene,
                                                    e.namespace,
                                                    A.label = 1;
                                            case 1:
                                                return A.trys.push([1, 9, , 10]),
                                                    [4, this._checkCryptKeys()];
                                            case 2:
                                                if (A.sent(),
                                                "cookie" !== t)
                                                    return [3, 5];
                                                return [4, this._initCookie()];
                                            case 3:
                                                return A.sent(),
                                                    [4, this._processServerCookie(n)];
                                            case 4:
                                                return A.sent(),
                                                    [3, 7];
                                            case 5:
                                                if ("header" !== t)
                                                    return [3, 7];
                                                return [4, null === (O = this.setSignValueScheduler) || void 0 === O ? void 0 : O.wait()];
                                            case 6:
                                                A.sent(),
                                                    A.label = 7;
                                            case 7:
                                                return i = [th, tf, "".concat(td, "/").concat(n)],
                                                    [4, null === (x = this._storeSDK) || void 0 === x ? void 0 : x.getItemsWithOrigin(i)];
                                            case 8:
                                                if (!(r = A.sent()))
                                                    return this.emit("log", {
                                                        content: "Get Keys Info Fail",
                                                        level: "error"
                                                    }),
                                                        [2, {}];
                                                return s = void 0 === (a = (o = r || {}).data) ? {} : a,
                                                    u = void 0 === (c = o.from) ? "0" : c,
                                                    l = Object.values(s),
                                                    h = s[th],
                                                    f = s[tf],
                                                    d = s["".concat(td, "/").concat(n)],
                                                    v = (m = JSON.parse((g = void 0 === (p = (h || {}).value) ? "" : p) || "{}") || {}).ec_privateKey,
                                                    _ = m.ec_publicKey,
                                                    y = m.ec_csr,
                                                    b = (null == d ? void 0 : d.value) || "",
                                                    w = (null == f ? void 0 : f.value) || "",
                                                    E = (S = JSON.parse(b || "{}") || {}).ticket,
                                                    k = S.ts_sign,
                                                    D = S.client_cert,
                                                    T = R(v) || "",
                                                    this.emit("log", {
                                                        extra: {
                                                            server_data: b || "",
                                                            cert_data: w || "",
                                                            b64PubKey: T
                                                        },
                                                        content: "Get Keys Info Success",
                                                        level: "info"
                                                    }),
                                                    [2, {
                                                        crypt: {
                                                            ec_privateKey: v,
                                                            ec_publicKey: _
                                                        },
                                                        cryptData: g,
                                                        cert: w,
                                                        sign: {
                                                            ticket: E,
                                                            ts_sign: k,
                                                            client_cert: D
                                                        },
                                                        b64Cert: I(w || ""),
                                                        b64PubKey: T,
                                                        b64Csr: I(y || ""),
                                                        serverData: b,
                                                        dataFrom: u,
                                                        items: l
                                                    }];
                                            case 9:
                                                return C = A.sent(),
                                                    this.reportError(C, "Get Ticket catch"),
                                                    [3, 10];
                                            case 10:
                                                return [2, {}]
                                        }
                                    })
                                })
                            }
                            ,
                            n.signWithKeysInfo = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l, h, f, d, p, g, m, v, _, y, b, w;
                                    return tl(this, function (S) {
                                        switch (S.label) {
                                            case 0:
                                                t = e.sign_data,
                                                    n = e.req_content,
                                                    i = e.timestamp,
                                                    r = e.certType,
                                                    o = e.scene,
                                                    a = e.keysInfo,
                                                    S.label = 1;
                                            case 1:
                                                return S.trys.push([1, 8, , 9]),
                                                    [4, this._checkCryptKeys()];
                                            case 2:
                                                if (S.sent(),
                                                "cookie" !== r)
                                                    return [3, 5];
                                                return [4, this._initCookie()];
                                            case 3:
                                                return S.sent(),
                                                    [4, this._processServerCookie(o || "")];
                                            case 4:
                                                S.sent(),
                                                    S.label = 5;
                                            case 5:
                                                if ("header" !== r)
                                                    return [3, 7];
                                                return [4, null === (_ = this.setSignValueScheduler) || void 0 === _ ? void 0 : _.wait()];
                                            case 6:
                                                S.sent(),
                                                    S.label = 7;
                                            case 7:
                                                if (s = a.sign,
                                                    c = a.crypt,
                                                    !s)
                                                    return this.emit("log", {
                                                        content: "sign data fail",
                                                        level: "info",
                                                        extra: {
                                                            content: "sign data is null"
                                                        }
                                                    }),
                                                        [2, ""];
                                                if (l = (u = s || {}).ticket,
                                                    h = u.ts_sign,
                                                !t && !l)
                                                    return this.emit("log", {
                                                        content: "sign data fail",
                                                        level: "info",
                                                        extra: {
                                                            content: "sign data and ticket is null"
                                                        }
                                                    }),
                                                        [2, ""];
                                                return d = (f = c || {}).ec_privateKey,
                                                    p = f.ec_publicKey,
                                                    this.cryptoSDK = new tr({
                                                        privateKey: d,
                                                        publicKey: p
                                                    }),
                                                    g = M((null === (y = this.cryptoSDK) || void 0 === y ? void 0 : y.sign(t || l)) || ""),
                                                    m = {
                                                        ts_sign: h,
                                                        req_content: n || t || l,
                                                        req_sign: g,
                                                        timestamp: i || Math.floor(new Date().getTime() / 1e3)
                                                    },
                                                    this.emit("log", {
                                                        extra: {
                                                            content: JSON.stringify(m)
                                                        },
                                                        content: "sign data success",
                                                        level: "info"
                                                    }),
                                                    [2, I(JSON.stringify(m) || "")];
                                            case 8:
                                                return v = S.sent(),
                                                    this.emit("log", {
                                                        extra: {
                                                            sign_data: t || "",
                                                            req_content: n || "",
                                                            certType: r || "",
                                                            scene: o || "",
                                                            csr: (null === (b = null == a ? void 0 : a.crypt) || void 0 === b ? void 0 : b.ec_csr) || "",
                                                            cert: a.cert || "",
                                                            sign: (null === (w = a.sign) || void 0 === w ? void 0 : w.ticket) || ""
                                                        },
                                                        content: "sign data with keys Info is error",
                                                        level: "error"
                                                    }),
                                                    this.reportError(v, "sign error"),
                                                    [3, 9];
                                            case 9:
                                                return [2, ""]
                                        }
                                    })
                                })
                            }
                            ,
                            n.setKeysAndValues = function (e, t) {
                                var i, r = "", o = "", a = "";
                                null === (i = n._storeSDK) || void 0 === i || i.setItems(e, t, 2).then(function (i) {
                                    e.forEach(function (e, n) {
                                        var i = t[n];
                                        e === th ? r = i : e === tf ? o = i : e === "".concat(td, "/web_protect") && (a = i)
                                    });
                                    var s, c, u = U(r, o, a);
                                    u && (null === (s = n.cookieOperate) || void 0 === s || s.setCookieWithDomain(tp, u)),
                                        n.emit("log", {
                                            extra: {
                                                md5: u,
                                                md5Cookie: (null === (c = n.cookieOperate) || void 0 === c ? void 0 : c.getCookie(tp)) || ""
                                            },
                                            content: "generate crypt key success sign success",
                                            level: "info"
                                        })
                                }).catch(function (e) {
                                    n.emit("error", {
                                        error: e,
                                        name: "update keys when sign error"
                                    })
                                })
                            }
                            ,
                            n.b642str = function (e) {
                                return K(e)
                            }
                            ,
                            n.getIframeStatus = function () {
                                var e;
                                return null === (e = n._storeSDK) || void 0 === e ? void 0 : e.getIframeStatus()
                            }
                            ,
                            n.getCookieCryptStatus = function () {
                                var e;
                                return null !== (e = n.cookieOperate) && void 0 !== e && !!e.getCookie(tp)
                            }
                            ,
                            n.getStorageStatus = function () {
                                var e;
                                return null === (e = n._storeSDK) || void 0 === e ? void 0 : e.getStorageStatus()
                            }
                            ,
                            n.checkSignData = function (e) {
                                return tu(n, void 0, void 0, function () {
                                    var t, n, i, r, o, a, s, c, u, l, h;
                                    return tl(this, function (f) {
                                        switch (f.label) {
                                            case 0:
                                                if (f.trys.push([0, 2, , 3]),
                                                    !(t = (null === (l = this.cookieOperate) || void 0 === l ? void 0 : l.getCookie(tp)) || ""))
                                                    return [2, {
                                                        match_md5_local: "-99",
                                                        match_md5_iframe: "-99"
                                                    }];
                                                return i = (n = e || {}).cryptData,
                                                    r = n.cert,
                                                    o = n.serverData,
                                                    n.dataFrom,
                                                    a = N(t, i, r, o),
                                                    s = this._getInitKeys(),
                                                    [4, null === (h = this._storeSDK) || void 0 === h ? void 0 : h.getLocalItems(s)];
                                            case 1:
                                                return c = f.sent(),
                                                    [2, {
                                                        match_md5_local: N(t, null == c ? void 0 : c[th], null == c ? void 0 : c[tf], null == c ? void 0 : c["".concat(td, "/web_protect")]) ? "1" : "-99",
                                                        match_md5_iframe: a ? "1" : "-99"
                                                    }];
                                            case 2:
                                                return u = f.sent(),
                                                    this.emit("error", {
                                                        error: u,
                                                        name: "check sign data error"
                                                    }),
                                                    [3, 3];
                                            case 3:
                                                return [2, {
                                                    match_md5_local: "-99",
                                                    match_md5_iframe: "-99"
                                                }]
                                        }
                                    })
                                })
                            }
                            ,
                            n.isTopBrowser = function () {
                                return H()
                            }
                            ,
                            n.initConfig = t,
                            n.setSignValueScheduler = new V,
                            n._initData = {},
                            n._hasProcessServerData = !1,
                            n.initMatch = !1,
                            n
                    }

                    return ts(t, e),
                        t
                }(q)
                , tm = n(33621)
                , tv = function () {
                    function e(t) {
                        var n, i = this;
                        if (this.setContext = function (e) {
                            for (var t in e)
                                i.accountApiSlardar("context.set", t, e[t])
                        }
                            ,
                            this.setWebId = function (t) {
                                var n;
                                null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("config", {
                                    userId: t
                                })
                            }
                            ,
                            this.setEnv = function (t) {
                                var n;
                                null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("config", {
                                    env: t
                                })
                            }
                            ,
                            !e._instance) {
                            this.accountApiSlardar = (0,
                                tm.createBrowserClient)(),
                                this.accountApiSlardar("init", {
                                    bid: "uc_secure_sdk",
                                    pid: null === (n = null == window ? void 0 : window.location) || void 0 === n ? void 0 : n.host,
                                    env: "online",
                                    plugins: {
                                        tti: !1,
                                        fmp: !1,
                                        performance: !1,
                                        resource: !1,
                                        resourceError: !1,
                                        pageview: !1,
                                        jsError: {
                                            onerror: !1,
                                            onunhandledrejection: !1,
                                            dedupe: !1,
                                            captureGlobalAsync: !1
                                        },
                                        breadcrumb: {
                                            dom: !1
                                        },
                                        ajax: {
                                            autoWrap: !1,
                                            ignoreUrls: [/^((?!\/passport\/).)*$/],
                                            collectBodyOnError: !0
                                        },
                                        fetch: {
                                            autoWrap: !1,
                                            ignoreUrls: [/^((?!\/passport\/).)*$/],
                                            collectBodyOnError: !0
                                        },
                                        blankScreen: {
                                            autoDetect: !1,
                                            screenshot: !1
                                        }
                                    }
                                }),
                                this.accountApiSlardar("start");
                            var r = this.checkEnv();
                            this.accountApiSlardar("context.set", "container", r),
                                this.accountApiSlardar("context.set", "sdkversion", t),
                                e._instance = this
                        }
                        return e._instance
                    }

                    return e.getSlardar = function () {
                        return this._instance
                    }
                        ,
                        e.clearSlardar = function () {
                            this._instance = null
                        }
                        ,
                        e.prototype.dot = function (t) {
                            var n;
                            try {
                                null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("sendEvent", t)
                            } catch (e) {
                            }
                        }
                        ,
                        e.prototype.log = function (t) {
                            var n;
                            try {
                                null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("sendLog", t)
                            } catch (e) {
                            }
                        }
                        ,
                        e.prototype.throw = function (t) {
                            var n;
                            try {
                                var i = t.err
                                    , r = t.extra;
                                null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("captureException", i, r)
                            } catch (e) {
                            }
                        }
                        ,
                        e.prototype.checkEnv = function () {
                            var e = null == window ? void 0 : window.navigator.userAgent;
                            return /TTElectron/.test(e) ? "electron" : "web"
                        }
                        ,
                        e.prototype.logRequestResponse = function (e, t) {
                            var n;
                            try {
                                try {
                                    m(null === (n = null == e ? void 0 : e.config) || void 0 === n ? void 0 : n.url)
                                } catch (e) {
                                }
                            } catch (e) {
                            }
                        }
                        ,
                        e
                }()
                , t_ = function (e) {
                    return decodeURIComponent(document.cookie.replace(RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                }
                , ty = function () {
                    var e = null == window ? void 0 : window.navigator.userAgent;
                    return /TTElectron/.test(e) ? "electron" : "web"
                }
                , tb = 18e6
                , tw = {}
                , tS = !1
                , tE = function (e) {
                    tS || (tb = e),
                        tS = !0
                }
                , tk = function (e, t) {
                    try {
                        var n = tw[e];
                        if (!n)
                            return "";
                        var i = n.timeout
                            , r = n.signStr;
                        if (n.ticket !== t || new Date().getTime() >= i)
                            return "";
                        if (r)
                            return r
                    } catch (e) {
                    }
                    return ""
                }
                , tD = function (e, t, n) {
                    try {
                        var i = new Date().getTime()
                            , r = i + tb;
                        tw[e] = {
                            timeout: r,
                            signStr: n,
                            ticket: t,
                            createTime: i
                        }
                    } catch (e) {
                    }
                }
                ,
                tT = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

            function tC(e) {
                var t, n, i, r = {};
                return e && e.split("\n").forEach(function (e) {
                    i = e.indexOf(":"),
                        t = e.substr(0, i).trim().toLowerCase(),
                        n = e.substr(i + 1).trim(),
                    t && !(r[t] && tT.indexOf(t) >= 0) && ("set-cookie" === t ? r[t] = (r[t] ? r[t] : []).concat([n]) : r[t] = r[t] ? r[t] + ", " + n : n)
                }),
                    r
            }

            var tO = function (e) {
                try {
                    if (!e)
                        return "";
                    if (e.startsWith("http"))
                        return new URL(e).pathname
                } catch (e) {
                }
                return e
            }
            var tx = function (e) {
                return !e || e.startsWith("ts.1")
            }
            var tI = function (e) {
                return !!e && "string" == typeof e && -1 !== e.indexOf("pub.")
            }
            var tA = function () {
                return (tA = Object.assign || function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }
                ).apply(this, arguments)
            }
            var tM = function (e, t, n, i) {
                return new (n || (n = Promise))(function (r, o) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                    e(t)
                                }
                            )).then(a, s)
                        }

                        c((i = i.apply(e, t || [])).next())
                    }
                )
            }
            var tK = function (e, t) {
                var n, i, r, o, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0])
                            throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                        return this
                    }
                ),
                    o;

                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw TypeError("Generator is already executing.");
                            for (; a;)
                                try {
                                    if (n = 1,
                                    i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                        0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0,
                                    r && (o = [2 & o[0], r.value]),
                                        o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++,
                                                {
                                                    value: o[1],
                                                    done: !1
                                                };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e],
                                        i = 0
                                } finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var tP = function (e, t, n, i) {
                try {
                    if (!t)
                        return {
                            needProxy: !1
                        };
                    var r, o = (e || {}).url;
                    if (!o)
                        return {
                            needProxy: !1
                        };
                    var a = !1
                        , s = void 0
                        , c = void 0;
                    return Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        Array.isArray(n) && n.forEach(function (e) {
                            var t = e || {}
                                , n = t.providerPathList
                                , i = void 0 === n ? [] : n
                                , u = t.consumerPathList
                                , l = void 0 === u ? [] : u;
                            if (i.length > 0 && !s)
                                for (var h = 0; h < i.length; h++) {
                                    var f = i[h]
                                        , d = new RegExp(f);
                                    if (o.match(d)) {
                                        a = !0,
                                            s = e,
                                            r = f;
                                        break
                                    }
                                }
                            if (l.length > 0 && !c)
                                for (var h = 0; h < l.length; h++) {
                                    var f = l[h]
                                        , d = new RegExp(f);
                                    if (o.match(d)) {
                                        a = !0,
                                            c = e,
                                            r = f;
                                        break
                                    }
                                }
                        })
                    }),
                        {
                            needProxy: a,
                            providerConfig: s,
                            consumerConfig: c,
                            url: r,
                            signType: n,
                            initType: i
                        }
                } catch (e) {
                    return {
                        needProxy: !1
                    }
                }
            }
            var tG = function (e, t, n, i) {
                return tM(void 0, void 0, void 0, function () {
                    var r, o, a, s, c, u, l, h, f, d, p, g, m, v, _, y, b, w, S, E, k, D, T, C, O, x, I, A, M, K, P, G,
                        R,
                        B, L, N, U, z, j, V, $, q, W, H, J, F, Y, X, Q, Z, ee, et, en;
                    return tK(this, function (ei) {
                        switch (ei.label) {
                            case 0:
                                if (ei.trys.push([0, 7, , 8]),
                                    r = (e || {}).headers,
                                    o = t.crypt,
                                !r || "string" == typeof r)
                                    return [2, Promise.resolve(e)];
                                if (a = new Date().getTime(),
                                    s = n.needProxy,
                                    c = n.consumerConfig,
                                    u = n.providerConfig,
                                    l = n.url,
                                    f = void 0 === (h = n.signType) ? "pubKey" : h,
                                    p = void 0 === (d = n.initType) ? "pubKey" : d,
                                    v = void 0 === (m = (g = c || u || {}).scene) ? "" : m,
                                    y = void 0 === (_ = g.certType) ? "header" : _,
                                    b = g.signTimeout,
                                    w = g.namespace,
                                    S = !!u,
                                    !(s && o))
                                    return [3, 6];
                                return E = !1,
                                    [4, null == o ? void 0 : o.getKeysInfoWithOrigin({
                                        certType: y,
                                        scene: v,
                                        namespace: w
                                    })];
                            case 1:
                                return k = ei.sent(),
                                    [4, null == o ? void 0 : o.checkSignData(k)];
                            case 2:
                                if (T = (D = ei.sent()).match_md5_iframe,
                                    C = D.match_md5_local,
                                    x = (O = (null == k ? void 0 : k.crypt) || {}).ec_publicKey,
                                    I = O.ec_csr,
                                    M = (A = (null == k ? void 0 : k.sign) || {}).ticket,
                                    K = A.ts_sign,
                                    G = (P = k || {}).cert,
                                    R = P.b64Cert,
                                    B = P.dataFrom,
                                    L = P.b64PubKey,
                                    N = P.b64Csr,
                                    U = void 0,
                                    z = "0",
                                    j = null == o ? void 0 : o.getCookieCryptStatus(),
                                M || K || !j || (z = "1"),
                                    !(M && x && c && l))
                                    return [3, 5];
                                if (b && tE(b),
                                    !(V = tk(l, M)))
                                    return [3, 3];
                                return U = V,
                                    E = !0,
                                    [3, 5];
                            case 3:
                                return q = ($ = tR(e, M, (null == c ? void 0 : c.urlRewriteRules) || [], i)).req_content,
                                    W = $.sign_data,
                                    H = $.timestamp,
                                    [4, null == o ? void 0 : o.signWithKeysInfo({
                                        sign_data: W,
                                        req_content: q,
                                        timestamp: H,
                                        certType: y,
                                        scene: v,
                                        keysInfo: k
                                    })];
                            case 4:
                                (U = ei.sent()) && (tD(l, M, U),
                                    i.reportLog({
                                        extra: {
                                            content: U,
                                            url: l,
                                            ticket: M
                                        },
                                        content: "set cache data success",
                                        level: "info"
                                    })),
                                    ei.label = 5;
                            case 5:
                                J = {},
                                    J = S ? "pubKey" === p ? {
                                        "bd-ticket-guard-ree-public-key": L,
                                        "bd-ticket-guard-web-version": 1
                                    } : R ? {
                                        "bd-ticket-guard-client-cert": R || ""
                                    } : {
                                        "bd-ticket-guard-client-csr": N || ""
                                    } : tx(K || "") && "pubKey" === f || tI(G) ? {
                                        "bd-ticket-guard-ree-public-key": L,
                                        "bd-ticket-guard-web-version": 1
                                    } : R ? {
                                        "bd-ticket-guard-client-cert": R || ""
                                    } : {
                                        "bd-ticket-guard-client-csr": N || ""
                                    },
                                    e.headers = tA(tA(tA({}, e.headers), J), {
                                        "bd-ticket-guard-version": (null == c ? void 0 : c.signVersion) || (null == u ? void 0 : u.signVersion) || 1,
                                        "bd-ticket-guard-iteration-version": 1
                                    }),
                                U && (e.headers = tA(tA({}, null == e ? void 0 : e.headers), {
                                    "bd-ticket-guard-client-data": U
                                })),
                                    F = new Date().getTime(),
                                    i.reportLog({
                                        extra: {
                                            content: JSON.stringify(e),
                                            time: new Date().getTime()
                                        },
                                        content: "process request config ",
                                        level: "info"
                                    }),
                                    X = (Y = (null == o ? void 0 : o.getStorageStatus()) || {}).isConnection,
                                    Q = Y.retryCount,
                                    Z = Y.startTime,
                                    ee = Y.endTime,
                                    et = Y.loadTime,
                                    i.reportEvent({
                                        action: "request",
                                        op: "sign",
                                        duration: F > a ? F - a : 0,
                                        status: "success",
                                        ctx: {
                                            cache: E ? "1" : "0",
                                            path: l || "",
                                            cert: G ? "1" : "0",
                                            pubKey: x ? "1" : "0",
                                            isPubKeySign: tx(K || "") ? "1" : "0",
                                            isPubKeyInit: "pubKey" === p ? "1" : "0",
                                            csr: I ? "1" : "0",
                                            version: "".concat((null == c ? void 0 : c.signVersion) || "") || "".concat((null == u ? void 0 : u.signVersion) || "") || "1",
                                            server: U ? "1" : "0",
                                            crossStatus: (null == o ? void 0 : o.getIframeStatus()) ? "1" : "0",
                                            initMatch: (null == o ? void 0 : o.initMatch) ? "1" : "0",
                                            dataFrom: B || "-99",
                                            match_md5_local: C || "-99",
                                            match_md5_iframe: T || "-99",
                                            lost: z,
                                            isNewCert: tI(G) ? "1" : "0",
                                            isConnection: tB(X),
                                            retryCount: tB(Q)
                                        },
                                        metrics: {
                                            startTime: Z || 0,
                                            endTime: ee || 0,
                                            loadTime: et || 0
                                        }
                                    }),
                                    e.extras = tA(tA({}, k || {}), {
                                        scene: v,
                                        certType: y,
                                        match_md5_iframe: T,
                                        match_md5_local: C,
                                        is_pubkey_ts_sign: tx(K || "") ? "1" : "0",
                                        is_new_cert: tI(G) ? "1" : "0",
                                        lost: z,
                                        isPubKeyInit: "pubKey" === p ? "1" : "0"
                                    }),
                                    ei.label = 6;
                            case 6:
                                return [3, 8];
                            case 7:
                                return en = ei.sent(),
                                    i.reportError({
                                        error: en,
                                        name: "process request config fail"
                                    }),
                                    i.reportLog({
                                        content: "process request config fail",
                                        extra: {
                                            content: JSON.stringify(e)
                                        }
                                    }),
                                    i.reportEvent({
                                        action: "request",
                                        op: "sign",
                                        status: "fail",
                                        ctx: {
                                            path: (null == e ? void 0 : e.url) || ""
                                        }
                                    }),
                                    [3, 8];
                            case 8:
                                return [2, Promise.resolve(e)]
                        }
                    })
                })
            }
            var tR = function (e, t, n, i) {
                try {
                    var r = (e || {}).url;
                    if (!r)
                        return {
                            req_content: "",
                            sign_data: ""
                        };
                    var o = Math.floor(new Date().getTime() / 1e3)
                        , a = new URL(r, window.location.href).pathname;
                    return n && n.length > 0 && n.forEach(function (e) {
                        if (e instanceof Array && e.length > 1) {
                            var t = e[0]
                                , n = e[1]
                                , i = new RegExp(t);
                            r.match(i) && (a = n)
                        }
                    }),
                        {
                            req_content: "ticket,path,timestamp",
                            sign_data: "ticket=".concat(t, "&path=").concat(a, "&timestamp=").concat(o),
                            timestamp: o
                        }
                } catch (e) {
                    return null == i || i.reportError({
                        error: e,
                        name: "request process sign data fail"
                    }),
                        {
                            req_content: "",
                            sign_data: ""
                        }
                }
            }
            var tB = function (e) {
                return "number" == typeof e ? e.toString() : "-99"
            }
            var tL = function (e, t, n, i, r, o) {
                return tM(void 0, void 0, void 0, function () {
                    var a, s, c, u, l, h, f, d, p, g, m, v, _, y, b, w, S, E, k, D, T, C, O, x, I, A, M, K, P, G, R, B,
                        L,
                        N, U, z;
                    return tK(this, function (j) {
                        switch (j.label) {
                            case 0:
                                if (j.trys.push([0, 5, , 6]),
                                    a = t.crypt,
                                !(null === (B = null == e ? void 0 : e.config) || void 0 === B ? void 0 : B.headers) || "string" == typeof (null === (L = null == e ? void 0 : e.config) || void 0 === L ? void 0 : L.headers))
                                    return [2, e];
                                if (l = (u = (c = void 0 === (s = ((null == e ? void 0 : e.config) || {}).extras) ? {} : s) || {}).dataFrom,
                                    h = u.match_md5_local,
                                    f = u.match_md5_iframe,
                                    d = u.is_pubkey_ts_sign,
                                    p = u.is_new_cert,
                                    g = u.lost,
                                    m = u.isPubKeyInit,
                                    _ = (v = (null == a ? void 0 : a.getStorageStatus()) || {}).isConnection,
                                    y = v.retryCount,
                                    b = v.startTime,
                                    w = v.endTime,
                                    S = v.loadTime,
                                (null == e ? void 0 : e.reqHeaders) && (null === (N = null == e ? void 0 : e.reqHeaders) || void 0 === N ? void 0 : N["bd-ticket-guard-version"]) && o.reportEvent({
                                    action: "response",
                                    op: "sign",
                                    status: "finish",
                                    ctx: {
                                        url: tO(null == e ? void 0 : e.config.url) || "",
                                        crossStatus: (null == a ? void 0 : a.getIframeStatus()) ? "1" : "0",
                                        lost: g,
                                        dataFrom: l || "-99",
                                        match_md5_local: h,
                                        match_md5_iframe: f,
                                        initMatch: (null == a ? void 0 : a.initMatch) ? "1" : "0",
                                        isConnection: tB(_),
                                        retryCount: tB(y),
                                        is_pubkey_ts_sign: d,
                                        is_new_cert: p,
                                        isPubKeyInit: m
                                    },
                                    metrics: {
                                        startTime: b || 0,
                                        endTime: w || 0,
                                        loadTime: S || 0
                                    },
                                    extras: e
                                }),
                                    E = new Date().getTime(),
                                    k = n.needProxy,
                                    D = n.providerConfig,
                                    n.signType,
                                    C = (T = D || {}).scene,
                                    O = T.namespace,
                                    !(k && a))
                                    return [3, 4];
                                if (x = (null === (U = null == e ? void 0 : e.headers) || void 0 === U ? void 0 : U["bd-ticket-guard-server-data"]) || "",
                                    I = (null === (z = null == e ? void 0 : e.headers) || void 0 === z ? void 0 : z["bd-ticket-guard-result"]) || "-99",
                                    !((K = ((M = (A = x && (null == a ? void 0 : a.b642str(x))) && JSON.parse(A)) || {}).ticket) && C && O))
                                    return [3, 2];
                                return [4, null == a ? void 0 : a.setSignValueAsync({
                                    sign: M,
                                    scene: C,
                                    namespace: O
                                })];
                            case 1:
                                return j.sent(),
                                    [3, 3];
                            case 2:
                                K && C && (null == a || a.setSignValue({
                                    sign: M,
                                    scene: C
                                })),
                                    j.label = 3;
                            case 3:
                                P = tN(I, c, e, t, i, r, o),
                                    G = new Date().getTime(),
                                    o.reportEvent({
                                        action: "response",
                                        op: "init",
                                        status: "success",
                                        duration: G > E ? G - E : 0,
                                        ctx: tA({
                                            url: tO(null == e ? void 0 : e.config.url) || "",
                                            crossStatus: (null == a ? void 0 : a.getIframeStatus()) ? "1" : "0",
                                            lost: g,
                                            verify: I,
                                            dataFrom: l || "-99",
                                            match_md5_local: h,
                                            match_md5_iframe: f,
                                            isConnection: tB(_),
                                            retryCount: tB(y),
                                            initMatch: (null == a ? void 0 : a.initMatch) ? "1" : "0",
                                            isNewCert: p,
                                            isPubkeyTssign: d,
                                            isPubKeyInit: m
                                        }, P || {}),
                                        metrics: {
                                            startTime: b || 0,
                                            endTime: w || 0,
                                            loadTime: S || 0
                                        }
                                    }),
                                    j.label = 4;
                            case 4:
                            case 6:
                                return [2, e];
                            case 5:
                                return R = j.sent(),
                                    o.reportEvent({
                                        action: "response",
                                        op: "init",
                                        status: "fail",
                                        ctx: {
                                            url: tO(null == e ? void 0 : e.config.url) || ""
                                        }
                                    }),
                                    o.reportError({
                                        error: R,
                                        name: "get sign data error in response"
                                    }),
                                    [3, 6]
                        }
                    })
                })
            }
            var tN = function (e, t, n, i, r, o, a) {
                var s, c, u, l, h;
                try {
                    var f = i.crypt
                        , d = t || {}
                        , p = d.certType
                        , g = d.items
                        , m = void 0 === g ? [] : g
                        , v = {}
                        , _ = []
                        , y = []
                        ,
                        b = (null === (s = null == n ? void 0 : n.reqHeaders) || void 0 === s ? void 0 : s["bd-ticket-guard-client-data"]) ? "1" : "0"
                        , w = ((null == n ? void 0 : n.config) || {}).url;
                    if ("header" === p)
                        return {};
                    if ("cookie" === p && (m && Array.isArray(m) && m.forEach(function (e) {
                        var t = e || {}
                            , n = t.key
                            , i = t.value
                            , r = t.from
                            , o = t.origin;
                        v["".concat(n.replace(/\//g, "_"), "_origin")] = o || "",
                            v["".concat(n.replace(/\//g, "_"), "_from")] = r || "-99",
                            v["".concat(n.replace(/\//g, "_"), "_status")] = i ? "success" : "success_null",
                        i && (_.push(n),
                            y.push(i))
                    }),
                    "-99" === e && r && w))
                        for (var S = ["/aweme/v1/web/commit/item/digg", "/aweme/v1/web/commit/follow/user", "/aweme/v1/web/comment/publish", "/web/api/media/aweme/create"], E = 0; E < S.length; E++) {
                            var k = S[E]
                                , D = new RegExp(k);
                            if (w.match(D)) {
                                _.length > 0 && f.setKeysAndValues(_, y);
                                break
                            }
                        }
                    var T = (null === (c = null == n ? void 0 : n.reqHeaders) || void 0 === c ? void 0 : c["bd-ticket-guard-version"]) || "-99"
                        ,
                        C = (null === (u = null == n ? void 0 : n.reqHeaders) || void 0 === u ? void 0 : u["bd-ticket-guard-iteration-version"]) || "-99"
                        ,
                        O = (null === (l = null == n ? void 0 : n.reqHeaders) || void 0 === l ? void 0 : l["bd-ticket-guard-client-csr"]) ? "1" : "0"
                        ,
                        x = (null === (h = null == n ? void 0 : n.reqHeaders) || void 0 === h ? void 0 : h["bd-ticket-guard-client-cert"]) ? "1" : "0";
                    return tA(tA({}, {
                        csr: O,
                        cert: x,
                        server: b,
                        version: T,
                        iterVersion: C
                    }), v)
                } catch (e) {
                    a.reportError({
                        error: e,
                        name: "process Request Header Error"
                    })
                }
                return {}
            }
            var tU = function (e) {
                var t, n, i = {};
                return i["bd-ticket-guard-server-data"] = (null === (t = null == e ? void 0 : e.headers) || void 0 === t ? void 0 : t.get("bd-ticket-guard-server-data")) || "",
                    i["bd-ticket-guard-result"] = (null === (n = null == e ? void 0 : e.headers) || void 0 === n ? void 0 : n.get("bd-ticket-guard-result")) || "",
                    i
            }
            var tz = (f = function (e, t) {
                    return (f = Object.setPrototypeOf || ({
                                __proto__: []
                            }) instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }

                        f(e, t),
                            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                new n)
                    }
            )
            var tj = function (e, t, n, i) {
                return new (n || (n = Promise))(function (r, o) {
                        function a(e) {
                            try {
                                c(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                    e(t)
                                }
                            )).then(a, s)
                        }

                        c((i = i.apply(e, t || [])).next())
                    }
                )
            }
            var tV = function (e, t) {
                var n, i, r, o, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0])
                            throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                        return this
                    }
                ),
                    o;

                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw TypeError("Generator is already executing.");
                            for (; a;)
                                try {
                                    if (n = 1,
                                    i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                        0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0,
                                    r && (o = [2 & o[0], r.value]),
                                        o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++,
                                                {
                                                    value: o[1],
                                                    done: !1
                                                };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e],
                                        i = 0
                                } finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var t$ = "fetch" in window
            var tq = "Request" in window
            var tW = "Headers" in window
            var tH = function (baseCls) {
                function t(params) {
                    let _this = baseCls.call(this) || this;
                    _this.config = {}
                    _this.updateData = false
                    _this.login = false
                    _this.signType = "pubKey"
                    _this.initType = "pubKey"
                    _this.nativeXMLHttpRequestOpen = window.XMLHttpRequest.prototype.open
                    _this.nativeXMLHttpRequestSend = window.XMLHttpRequest.prototype.send
                    _this.nativeXMLHttpRequestSetRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader
                    _this.nativeFetch = window.fetch
                    _this.setType = function (e) {
                        var initType = e.initType
                        var signType = e.signType
                        _this.signType = undefined === signType ? "pubKey" : signType
                        _this.initType = undefined === initType ? "pubKey" : initType
                    }
                    _this.setConfig = function (config) {
                        _this.config = config
                    }
                    _this.setUpdateDataWhenVerifySuccess = function (updateData) {
                        _this.updateData = updateData
                    }
                    _this.setLogin = function (login) {
                        _this.login = login
                    }
                    _this.reportEvent = function (e) {
                        _this.emit("execute", e)
                    }
                    _this.reportError = function (e) {
                        _this.emit("error", e)
                    }
                    _this.reportLog = function (e) {
                        _this.emit("log", e)
                    }
                    _this.params = params
                    _this.monkeyPatchXMLHttpRequest()
                    _this.monkeyPatchFetch()
                    return _this
                }

                tz(t, baseCls)
                t.prototype.monkeyPatchXMLHttpRequest = function () {
                    let _this = this;
                    XMLHttpRequest.prototype.open = function () {
                        this.secureOpenArgs = arguments
                        _this.nativeXMLHttpRequestOpen.apply(this, arguments)
                    }
                    XMLHttpRequest.prototype.send = function () {
                        var t = this
                        let secureOpenArgs = this.secureOpenArgs
                        let method = secureOpenArgs[0] || "GET"
                        let url = new URL(secureOpenArgs[1], window.location.href).toString()
                        let a = tP({
                            method: method,
                            url: url,
                            headers: {}
                        }, _this.config, _this.signType || "pubKey", _this.initType || "pubKey")
                        let needProxy = (a || {}).needProxy;
                        if (!needProxy) {
                            return _this.nativeXMLHttpRequestSend.apply(this, arguments)
                        }
                        var c = {}
                            , u = {}
                            , l = this.onreadystatechange;
                        "onreadystatechange" in this && "function" == typeof l
                            ? this.onreadystatechange = function () {
                                for (var n = [], i = 0; i < arguments.length; i++)
                                    n[i] = arguments[i];
                                return tj(t, void 0, void 0, function () {
                                    var t;
                                    return tV(this, function (i) {
                                        switch (i.label) {
                                            case 0:
                                                if (4 !== this.readyState || !("getAllResponseHeaders" in this && "function" == typeof this.getAllResponseHeaders) || !needProxy)
                                                    return [3, 2];
                                                return t = tC(this.getAllResponseHeaders()),
                                                    [4, tL({
                                                        config: {
                                                            method: method,
                                                            url: url,
                                                            headers: {},
                                                            extras: u
                                                        },
                                                        headers: t || {},
                                                        reqHeaders: c
                                                    }, _this.params, a, _this.updateData, _this.login, {
                                                        reportEvent: _this.reportEvent,
                                                        reportError: _this.reportError,
                                                        reportLog: _this.reportLog
                                                    })];
                                            case 1:
                                                i.sent(),
                                                    i.label = 2;
                                            case 2:
                                                return [2, l.apply(this, n)]
                                        }
                                    })
                                })
                            }
                            : this.onreadystatechange = function () {
                                for (var n = [], i = 0; i < arguments.length; i++)
                                    n[i] = arguments[i];
                                return tj(t, void 0, void 0, function () {
                                    var t;
                                    return tV(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                if (4 !== this.readyState || !("getAllResponseHeaders" in this && "function" == typeof this.getAllResponseHeaders) || !needProxy)
                                                    return [3, 2];
                                                return t = tC(this.getAllResponseHeaders()),
                                                    [4, tL({
                                                        config: {
                                                            method: method,
                                                            url: url,
                                                            headers: {},
                                                            extras: u
                                                        },
                                                        headers: t || {},
                                                        reqHeaders: c
                                                    }, _this.params, a, _this.updateData, _this.login, {
                                                        reportEvent: _this.reportEvent,
                                                        reportError: _this.reportError,
                                                        reportLog: _this.reportLog
                                                    })];
                                            case 1:
                                                n.sent(),
                                                    n.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                                })
                            }

                        if (secureOpenArgs.length >= 3 && !secureOpenArgs[2]) {
                            return _this.nativeXMLHttpRequestSend.apply(this, arguments);
                        }
                        if (null != tG) {
                            tG({
                                method: method,
                                url: url,
                                headers: {}
                            }, _this.params, a, {
                                reportEvent: _this.reportEvent,
                                reportError: _this.reportError,
                                reportLog: _this.reportLog
                            }).then(function (n) {
                                var resp = n || {}
                                    , o = resp.headers
                                    , a = void 0 === o ? {} : o
                                    , s = resp.extras;
                                u = void 0 === s ? {} : s
                                Object.keys(a).forEach(function (n) {
                                    c[n] = a[n],
                                        _this.nativeXMLHttpRequestSetRequestHeader.call(t, n, a[n])
                                })
                                return _this.nativeXMLHttpRequestSend.apply(t, arguments)
                            })
                        }
                    }
                }
                t.prototype.monkeyPatchFetch = function () {
                    if (t$) {
                        var e = this;
                        window.fetch = function (t, n) {
                            var i, r, o = this;
                            tq && t instanceof Request ? (i = t.url,
                                r = t.method) : (i = t,
                                r = n && n.method ? n.method : "GET");
                            var a = tP({
                                method: r,
                                url: i,
                                headers: {}
                            }, e.config, e.signType || "pubKey", e.initType || "pubKey");
                            return (a || {}).needProxy ? tG({
                                method: r,
                                url: i,
                                headers: {}
                            }, e.params, a, {
                                reportEvent: e.reportEvent,
                                reportError: e.reportError,
                                reportLog: e.reportLog
                            }).then(function (s) {
                                var c = s || {}
                                    , u = c.headers
                                    , l = c.extras
                                    , h = void 0 === l ? {} : l;
                                return tq && t instanceof Request ? Object.keys(u).forEach(function (e) {
                                    t.headers.set(e, u[e])
                                }) : ((n = n || {}).headers = n.headers || {},
                                    tW && (null == n ? void 0 : n.headers) instanceof Headers ? Object.keys(s).forEach(function (e) {
                                        var t, i;
                                        null === (i = null === (t = null == n ? void 0 : n.headers) || void 0 === t ? void 0 : t.set) || void 0 === i || i.call(t, e, u[e])
                                    }) : n && n.headers && Array.isArray(n.headers) ? Object.keys(u).forEach(function (e) {
                                        var t;
                                        n && n.headers && Array.isArray(n.headers) && (null === (t = null == n ? void 0 : n.headers) || void 0 === t || t.push([e, u[e]]))
                                    }) : Object.keys(u).forEach(function (e) {
                                        n.headers[e] = u[e]
                                    })),
                                    e.nativeFetch.apply(o, [t, n]).then(function (t) {
                                        var n, o, s, c, l = {};
                                        if (null == t ? void 0 : t.headers) {
                                            if ("function" == typeof (null === (n = null == t ? void 0 : t.headers) || void 0 === n ? void 0 : n.forEach))
                                                null === (s = null === (o = null == t ? void 0 : t.headers) || void 0 === o ? void 0 : o.forEach) || void 0 === s || s.call(o, function (e, t) {
                                                    l[t] = e
                                                });
                                            else if ("function" == typeof (null === (c = null == t ? void 0 : t.headers) || void 0 === c ? void 0 : c.get)) {
                                                var f = tU(t);
                                                Object.keys(f).forEach(function (e) {
                                                    l[e] = f[e]
                                                })
                                            }
                                            return tL({
                                                config: {
                                                    method: r,
                                                    url: i,
                                                    headers: {},
                                                    extras: h
                                                },
                                                headers: l,
                                                reqHeaders: u
                                            }, e.params, a, e.updateData, e.login, {
                                                reportEvent: e.reportEvent,
                                                reportError: e.reportError,
                                                reportLog: e.reportLog
                                            }).then(function () {
                                                return t
                                            }).catch(function (e) {
                                                return t
                                            })
                                        }
                                        return t
                                    })
                            }) : e.nativeFetch.apply(this, [t, n])
                        }
                    }
                }

                return t
            }(q)
            var tJ = "3.0.18"
            var tF = (d = function (e, t) {
                    return (d = Object.setPrototypeOf || ({
                                __proto__: []
                            }) instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }

                        d(e, t),
                            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                new n)
                    }
            )
            var tY = function () {
                return (tY = Object.assign || function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }
                ).apply(this, arguments)
            }
            var tX = function (e, t) {
                var n, i, r, o, a = {
                    label: 0,
                    sent: function () {
                        if (1 & r[0])
                            throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                        return this
                    }
                ),
                    o;

                function s(o) {
                    return function (s) {
                        return function (o) {
                            if (n)
                                throw TypeError("Generator is already executing.");
                            for (; a;)
                                try {
                                    if (n = 1,
                                    i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                        0) : i.next) && !(r = r.call(i, o[1])).done)
                                        return r;
                                    switch (i = 0,
                                    r && (o = [2 & o[0], r.value]),
                                        o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++,
                                                {
                                                    value: o[1],
                                                    done: !1
                                                };
                                        case 5:
                                            a.label++,
                                                i = o[1],
                                                o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(),
                                                a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1],
                                                    r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2],
                                                    a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(),
                                                a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e],
                                        i = 0
                                } finally {
                                    n = r = 0
                                }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }
            var tQ = function (e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.config = {},
                        t.processSignCookie = function () {
                            var e;
                            try {
                                var n = t_("_bd_ticket_crypt_doamin") || ""
                                    , i = t_("bd_ticket_guard_client_web_domain") || "3"
                                    , r = t_("_bd_ticket_crypt_cookie") ? "1" : "0"
                                    , o = t_("__security_server_data_status") || "0"
                                    , a = t_("bd_sign_version") || "0"
                                    ,
                                    s = (null === (e = t.cryptoSDK) || void 0 === e ? void 0 : e.isTopBrowser()) ? "1" : "0";
                                return {
                                    cookieStatus: o,
                                    signVersion: a,
                                    cookieCrypt: r,
                                    isTopBrowser: s,
                                    webDomain: n || "3",
                                    webClientDomain: i
                                }
                            } catch (e) {
                                e instanceof Error ? t._slardarSDK.throw({
                                    err: e,
                                    extra: {
                                        content: "init sign cookie error"
                                    }
                                }) : t._slardarSDK.throw({
                                    err: Error("init sign cookie error"),
                                    extra: {
                                        content: "init sign cookie error"
                                    }
                                })
                            }
                            return {
                                cookieStatus: "0",
                                signVersion: "0",
                                cookieCrypt: "0",
                                isTopBrowser: "0",
                                webDomain: "3",
                                webClientDomain: "3"
                            }
                        }
                        ,
                        t.setStorageType = function (e) {
                            t.cryptoSDK.setStorageType(e)
                        }
                        ,
                        t.setUpdateDataWhenVerifySuccess = function (e) {
                            t.secureProxy.setUpdateDataWhenVerifySuccess(e)
                        }
                        ,
                        t.setDisableGenerateKey = function (e) {
                        }
                        ,
                        t.setNamespace = function (e) {
                            t.cryptoSDK.setStorageNamespace(e)
                        }
                        ,
                        t.setDisableCrossStorage = function (e) {
                            t.cryptoSDK.setDisableCrossStorage(e)
                        }
                        ,
                        t.setDisableStorageSignData = function (e) {
                            t.cryptoSDK.setDisableStorageSignData(e)
                        }
                        ,
                        t.setCrossStorageURL = function (e) {
                            t.cryptoSDK.setCrossStorageURL(e)
                        }
                        ,
                        t.setCrossStorageBackURL = function (e) {
                            t.cryptoSDK.setCrossStorageBackURL(e)
                        }
                        ,
                        t.setLoginStatus = function (e) {
                            "boolean" == typeof e && (t._isLogin = e ? "1" : "0",
                                t.secureProxy.setLogin(e)),
                            "function" == typeof e && (t._isLoginPromise = e().catch(function (e) {
                                return !1
                            }))
                        }
                        ,
                        t.start = function () {
                            t.cryptoSDK.start(),
                                t.emit("load", {
                                    action: "sdk",
                                    op: "init",
                                    status: "start"
                                })
                        }
                        ,
                        t.setUpdateKeys = function (e) {
                            t.cryptoSDK.setUpdateKeys(e)
                        }
                        ,
                        t.setContext = function (e) {
                            t.cryptoSDK.setContext(e)
                        }
                        ,
                        t.setWebId = function (e, n) {
                            var i;
                            null === (i = null == tv ? void 0 : tv._instance) || void 0 === i || i.setWebId(e),
                                w({
                                    appId: n || 1661,
                                    webId: e,
                                    config: {
                                        evtParams: {
                                            sdk_version: tJ,
                                            self_platform: ty()
                                        }
                                    }
                                }),
                                t.emit("load", {
                                    action: "sdk",
                                    op: "setwebid",
                                    status: "success"
                                })
                        }
                        ,
                        t.setSlardarEnv = function (e) {
                            var t;
                            null === (t = null == tv ? void 0 : tv._instance) || void 0 === t || t.setEnv(e)
                        }
                        ,
                        t.setConfig = function (e) {
                            var n = e.scene;
                            if (t.config) {
                                if (t.config[n]) {
                                    var i = t.config[n];
                                    Array.isArray(i) ? (i.push(e),
                                        t.config[n] = i) : t.config[n] = [e]
                                } else
                                    t.config[n] = [e]
                            } else
                                t.config = {},
                                    t.config[n] = [e];
                            t.cryptoSDK.setConfig(t.config),
                                t.secureProxy.setConfig(t.config),
                                t.emit("load", {
                                    action: "sdk",
                                    op: "config",
                                    status: "success"
                                })
                        }
                        ,
                        t.refresh = function () {
                            var e, n, i;
                            return e = void 0,
                                n = void 0,
                                i = function () {
                                    return tX(this, function (e) {
                                        return [2, this.cryptoSDK.refresh()]
                                    })
                                }
                                ,
                                new (n || (n = Promise))(function (r, o) {
                                        function a(e) {
                                            try {
                                                c(i.next(e))
                                            } catch (e) {
                                                o(e)
                                            }
                                        }

                                        function s(e) {
                                            try {
                                                c(i.throw(e))
                                            } catch (e) {
                                                o(e)
                                            }
                                        }

                                        function c(e) {
                                            var t;
                                            e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                                    e(t)
                                                }
                                            )).then(a, s)
                                        }

                                        c((i = i.apply(t, e || [])).next())
                                    }
                                )
                        }
                        ,
                        t.sendEvent = function (e) {
                            var n = t.processSignCookie()
                                , i = e.name
                                , r = e.metrics
                                , o = e.categories;
                            t._slardarSDK.dot({
                                name: i,
                                metrics: r,
                                categories: tY(tY(tY({}, o || {}), n || {}), {
                                    loginStatus: t._isLogin
                                })
                            })
                        }
                        ,
                        t.setType = function (e) {
                            t.cryptoSDK.setType(e),
                                t.secureProxy.setType(e),
                                S({
                                    init_type: e.initType,
                                    sign_type: e.signType
                                }),
                                t._slardarSDK.setContext({
                                    initType: e.initType,
                                    signType: e.signType,
                                    type: e.signType
                                })
                        }
                        ,
                        t.convertBase64ToString = function (e) {
                            return K(e)
                        }
                        ,
                        t.convertStringToBase64 = function (e) {
                            return I(e)
                        }
                        ,
                        t.convertHexToBase64 = function (e) {
                            return M(e)
                        }
                        ,
                        t._isLogin = "-1",
                        t._slardarSDK = new tv(tJ),
                        t.cryptoSDK = new tg({
                            sendEvent: t.sendEvent
                        }),
                        t.cryptoSDK.on("error", function (e) {
                            var n = e.error
                                , i = e.name;
                            n instanceof Error ? t._slardarSDK.throw({
                                err: n,
                                extra: {
                                    content: i,
                                    origin: (null == n ? void 0 : n.origin) || "",
                                    login: t._isLogin
                                }
                            }) : t._slardarSDK.throw({
                                err: Error(i),
                                extra: {
                                    content: i,
                                    login: t._isLogin
                                }
                            }),
                                t.emit("error", e)
                        }),
                        t.cryptoSDK.on("load", function (e) {
                            var n = e.action
                                , i = e.op
                                , r = e.status
                                , o = e.duration
                                , a = e.ctx
                                , s = e.metrics
                                , c = "load_".concat(n, "_").concat(i.toLocaleLowerCase())
                                , u = t.processSignCookie();
                            t._isLoginPromise ? t._isLoginPromise.then(function (e) {
                                t._isLogin = e ? "1" : "0",
                                    t._slardarSDK.dot({
                                        name: c,
                                        metrics: tY({
                                            count: 1,
                                            duration: o || 0
                                        }, s || {}),
                                        categories: tY(tY({
                                            satus: r,
                                            login: t._isLogin
                                        }, a || {}), u)
                                    })
                            }) : t._slardarSDK.dot({
                                name: c,
                                metrics: tY({
                                    count: 1,
                                    duration: o || 0
                                }, s || {}),
                                categories: tY(tY({
                                    satus: r,
                                    login: t._isLogin
                                }, a || {}), u)
                            }),
                                t.emit("load", e)
                        }),
                        t.cryptoSDK.on("log", function (e) {
                            var n = t.processSignCookie()
                                , i = e || {}
                                , r = i.level
                                , o = i.extra
                                , a = i.content;
                            t._slardarSDK.log({
                                content: a,
                                extra: tY(tY({}, n || {}), o || {}),
                                level: r
                            }),
                                t.emit("log", e)
                        }),
                        t.cryptoSDK.on("execute", function (e) {
                            var n = e.action
                                , i = e.op
                                , r = e.status
                                , o = e.duration
                                , a = e.ctx
                                , s = e.metrics
                                , c = "execute_".concat(n, "_").concat(i.toLocaleLowerCase())
                                , u = t.processSignCookie();
                            t._isLoginPromise ? t._isLoginPromise.then(function (e) {
                                t._isLogin = e ? "1" : "0",
                                    t._slardarSDK.dot({
                                        name: c,
                                        metrics: tY({
                                            count: 1,
                                            duration: o || 0
                                        }, s || {}),
                                        categories: tY(tY({
                                            satus: r,
                                            login: t._isLogin
                                        }, a || {}), u)
                                    })
                            }) : t._slardarSDK.dot({
                                name: c,
                                metrics: tY({
                                    count: 1,
                                    duration: o || 0
                                }, s || {}),
                                categories: tY(tY({
                                    satus: r,
                                    login: t._isLogin
                                }, a || {}), u)
                            }),
                                t.emit("execute", e)
                        }),
                        t.cryptoSDK.on("ready", function (e) {
                            var n = e.action
                                , i = e.op
                                , r = e.status
                                , o = e.duration
                                , a = e.ctx
                                , s = e.metrics
                                , c = "ready_".concat(n, "_").concat(i.toLocaleLowerCase());
                            t._isLoginPromise ? t._isLoginPromise.then(function (e) {
                                t._isLogin = e ? "1" : "0",
                                    t._slardarSDK.dot({
                                        name: c,
                                        metrics: tY({
                                            count: 1,
                                            duration: o || 0
                                        }, s || {}),
                                        categories: tY({
                                            satus: r,
                                            login: t._isLogin
                                        }, a || {})
                                    })
                            }) : t._slardarSDK.dot({
                                name: c,
                                metrics: tY({
                                    count: 1,
                                    duration: o || 0
                                }, s || {}),
                                categories: tY({
                                    satus: r,
                                    login: t._isLogin
                                }, a || {})
                            }),
                                t.emit("execute", e)
                        }),
                        t.secureProxy = new tH({
                            crypt: t.cryptoSDK
                        }),
                        t.secureProxy.on("error", function (e) {
                            var n = e.error
                                , i = e.name;
                            n instanceof Error ? t._slardarSDK.throw({
                                err: n,
                                extra: {
                                    content: i,
                                    login: t._isLogin
                                }
                            }) : t._slardarSDK.throw({
                                err: Error(i),
                                extra: {
                                    content: i,
                                    login: t._isLogin
                                }
                            }),
                                t.emit("error", e)
                        }),
                        t.secureProxy.on("execute", function (e) {
                            var n = e.action
                                , i = e.op
                                , r = e.status
                                , o = e.duration
                                , a = e.ctx
                                , s = e.extras
                                , c = e.metrics
                                , u = "execute_".concat(n, "_").concat(i.toLocaleLowerCase())
                                , l = t.processSignCookie();
                            t._isLoginPromise ? t._isLoginPromise.then(function (h) {
                                t._isLogin = h ? "1" : "0",
                                "sign" === i && "response" === n || t._slardarSDK.dot({
                                    name: u,
                                    metrics: tY({
                                        count: 1,
                                        duration: o || 0
                                    }, c || {}),
                                    categories: tY(tY({
                                        satus: r,
                                        login: t._isLogin
                                    }, a || {}), l)
                                }),
                                    t.emit("execute", tY(tY({}, e), {
                                        extras: tY({
                                            loginStatus: t._isLogin
                                        }, s || {})
                                    }))
                            }).catch(function (e) {
                            }) : ("sign" === i && "response" === n || t._slardarSDK.dot({
                                name: u,
                                metrics: tY({
                                    count: 1,
                                    duration: o || 0
                                }, c || {}),
                                categories: tY(tY({
                                    satus: r,
                                    login: t._isLogin
                                }, a || {}), l)
                            }),
                                t.emit("execute", tY(tY({}, e), {
                                    extras: tY(tY({
                                        loginStatus: t._isLogin
                                    }, s || {}), l)
                                })))
                        }),
                        t.secureProxy.on("log", function (e) {
                            var n = t.processSignCookie()
                                , i = e || {}
                                , r = i.level
                                , o = i.extra
                                , a = i.content;
                            t._slardarSDK.log({
                                content: a,
                                extra: tY(tY({}, n || {}), o || {}),
                                level: r
                            }),
                                t.emit("log", e)
                        }),
                        window.$SECURE_VERSION = tJ,
                        t
                }

                return tF(t, e),
                    t
            }(q)
            var tZ = (p = function (e, t) {
                    return (p = Object.setPrototypeOf || ({
                                __proto__: []
                            }) instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var n in t)
                                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }

                        p(e, t),
                            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                                new n)
                    }
            )
            var t0 = new (function (e) {
                function t() {
                    var n = e.call(this) || this;
                    return t.instance || (t.instance = n),
                        t.instance
                }

                return tZ(t, e),
                    t
            }(tQ));
            t0.on("execute", function (e) {
                var t = e.action
                    , n = e.op
                    , i = e.extras
                    , r = e.ctx
                    , o = e.status;
                try {
                    "response" === t && "sign" === n ? D(i, r) : "iframe" === t && "getKeys" === n ? C({
                        iframe_status: "success" === o ? "1" : "0"
                    }) : "iframe" === t && "check" === n && T({
                        iframe_status: "success" === o ? "1" : "0"
                    })
                } catch (e) {
                }
            });
            var t1 = function () {
                var e = new tQ;
                return e.on("execute", function (e) {
                    var t = e.action
                        , n = e.op
                        , i = e.extras
                        , r = e.ctx
                        , o = e.status;
                    try {
                        "response" === t && "sign" === n ? D(i, r) : "iframe" === t && "getKeys" === n ? C({
                            iframe_status: "success" === o ? "1" : "0"
                        }) : "iframe" === t && "check" === n && T({
                            iframe_status: "success" === o ? "1" : "0"
                        })
                    } catch (e) {
                    }
                }),
                    e
            }
        },
        50045: function (e, t, n) {
            n.r(t),
                n.d(t, {
                    Collector: function () {
                        return tt
                    }
                });
            var i, r = function () {
                return (r = Object.assign || function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }
                ).apply(this, arguments)
            };

            function o(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator]
                    , n = 0;
                return t ? t.call(e) : {
                    next: function () {
                        return e && n >= e.length && (e = void 0),
                            {
                                value: e && e[n++],
                                done: !e
                            }
                    }
                }
            }

            function a(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var i, r, o = n.call(e), a = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(i = o.next()).done;)
                        a.push(i.value)
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                return a
            }

            function s() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(a(arguments[t]));
                return e
            }

            var c, u = function () {
                function e() {
                    this._hooks = {},
                        this._cache = [],
                        this._hooksCache = {}
                }

                return e.prototype.on = function (e, t) {
                    e && t && "function" == typeof t && (this._hooks[e] || (this._hooks[e] = []),
                        this._hooks[e].push(t))
                }
                    ,
                    e.prototype.once = function (e, t) {
                        var n = this;
                        e && t && "function" == typeof t && this.on(e, function i(r) {
                            t(r),
                                n.off(e, i)
                        })
                    }
                    ,
                    e.prototype.off = function (e, t) {
                        if (e && this._hooks[e] && this._hooks[e].length) {
                            if (t) {
                                var n = this._hooks[e].indexOf(t);
                                -1 !== n && this._hooks[e].splice(n, 1)
                            } else
                                this._hooks[e] = []
                        }
                    }
                    ,
                    e.prototype.emit = function (e, t, n) {
                        n ? e && (-1 !== this._cache.indexOf(n) ? this._emit(e, t) : (this._hooksCache.hasOwnProperty(n) || (this._hooksCache[n] = {}),
                        this._hooksCache[n].hasOwnProperty(e) || (this._hooksCache[n][e] = []),
                            this._hooksCache[n][e].push(t))) : this._emit(e, t)
                    }
                    ,
                    e.prototype._emit = function (e, t) {
                        e && this._hooks[e] && this._hooks[e].length && s(this._hooks[e]).forEach(function (e) {
                            try {
                                e(t)
                            } catch (e) {
                            }
                        })
                    }
                    ,
                    e.prototype.set = function (e) {
                        e && -1 === this._cache.indexOf(e) && this._cache.push(e)
                    }
                    ,
                    e
            }(), l = function (e) {
                return null != e && "[object Object]" == Object.prototype.toString.call(e)
            }, h = function (e) {
                return Array.isArray(e)
            }, f = (c = +Date.now() + Number(("" + Math.random()).slice(2, 8)),
                    function () {
                        return c += 1
                    }
            ), d = function (e) {
                return function (e, t, n) {
                    if ("string" == typeof e && "number" == typeof t && "number" == typeof n) {
                        var i, r = [], o = String.fromCharCode((n = n <= 25 ? n : n % 25) + 97);
                        i = e.split(o);
                        for (var a = 0; a < i.length; a++) {
                            var s = parseInt(i[a], n)
                                , c = String.fromCharCode(s = 1 * s ^ t);
                            r.push(c)
                        }
                        return r.join("")
                    }
                }(e, 64, 25)
            }, p = function (e) {
                navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? window.addEventListener("pagehide", e, !1) : window.addEventListener("beforeunload", e, !1)
            }, g = function (e, t, n) {
                var i = document.createElement("script");
                i.src = e,
                    i.onerror = function () {
                        n(e)
                    }
                    ,
                    i.onload = function () {
                        t()
                    }
                    ,
                    document.getElementsByTagName("head")[0].appendChild(i)
            }, m = function () {
                var e = 0;
                return ["hidden", "msHidden", "webkitHidden"].forEach(function (t) {
                    void 0 !== document[t] && (e = 1)
                }),
                    e
            }, v = function (e, t) {
                void 0 === e && (e = function () {
                    }
                ),
                void 0 === t && (t = 1e3);
                var n, i = Date.now() + t;
                return n = window.setTimeout(function r() {
                    var o = Date.now() - i;
                    e(),
                        i += t,
                        n = window.setTimeout(r, Math.max(0, t - o))
                }, t),
                    function () {
                        window.clearTimeout(n)
                    }
            }, _ = function (e) {
                var t = document.createElement("a");
                return t.href = e,
                    t
            }, y = function (e) {
                var t = {};
                try {
                    var n = _(e).search;
                    if (!n)
                        return t;
                    (n = n.slice(1)).split("&").forEach(function (e) {
                        var n, i, r = e.split("=");
                        r.length && (n = r[0],
                            i = r[1]);
                        try {
                            t[n] = decodeURIComponent(void 0 === i ? "" : i)
                        } catch (e) {
                            t[n] = i
                        }
                    })
                } catch (e) {
                }
                return t
            }, b = function (e) {
                for (var t = 0, n = 0, i = (e += "").length, r = 0; r < i; r++)
                    ((t = 31 * t + e.charCodeAt(n++)) > 0x7fffffffffff || t < -140737488355328) && (t &= 0xffffffffffff);
                return t < 0 && (t += 0x7ffffffffffff),
                    t
            };

            function w(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports),
                    t.exports
            }

            "undefined" != typeof window ? window : "undefined" != typeof window ? window : "undefined" != typeof self && self;
            var S, E, k = w(function (e, t) {
                e.exports = function () {
                    function e() {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n)
                                t[i] = n[i]
                        }
                        return t
                    }

                    function t(e) {
                        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                    }

                    return function n(i) {
                        function r() {
                        }

                        function o(t, n, o) {
                            if ("undefined" != typeof document) {
                                "number" == typeof (o = e({
                                    path: "/"
                                }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                                    o.expires = o.expires ? o.expires.toUTCString() : "";
                                try {
                                    var a = JSON.stringify(n);
                                    /^[\{\[]/.test(a) && (n = a)
                                } catch (e) {
                                }
                                n = i.write ? i.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                                    t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                var s = "";
                                for (var c in o)
                                    o[c] && (s += "; " + c,
                                    !0 !== o[c] && (s += "=" + o[c].split(";")[0]));
                                return document.cookie = t + "=" + n + s
                            }
                        }

                        function a(e, n) {
                            if ("undefined" != typeof document) {
                                for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                                    var s = o[a].split("=")
                                        , c = s.slice(1).join("=");
                                    n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                    try {
                                        var u = t(s[0]);
                                        if (c = (i.read || i)(c, u) || t(c),
                                            n)
                                            try {
                                                c = JSON.parse(c)
                                            } catch (e) {
                                            }
                                        if (r[u] = c,
                                        e === u)
                                            break
                                    } catch (e) {
                                    }
                                }
                                return e ? r[e] : r
                            }
                        }

                        return r.set = o,
                            r.get = function (e) {
                                return a(e, !1)
                            }
                            ,
                            r.getJSON = function (e) {
                                return a(e, !0)
                            }
                            ,
                            r.remove = function (t, n) {
                                o(t, "", e(n, {
                                    expires: -1
                                }))
                            }
                            ,
                            r.defaults = {},
                            r.withConverter = n,
                            r
                    }(function () {
                    })
                }()
            }), D = function (e, t) {
                try {
                    return e ? k.get(e, {
                        domain: t || document.domain
                    }) : k.get()
                } catch (e) {
                    return ""
                }
            }, T = function (e, t, n, i) {
                try {
                    var r = i || document.domain
                        , o = +new Date + (n || 6048e5);
                    k.set(e, t, {
                        expires: new Date(o),
                        path: "/",
                        domain: r
                    })
                } catch (e) {
                }
            }, C = function () {
                function e() {
                    this.cache = {}
                }

                return e.prototype.setItem = function (e, t) {
                    this.cache[e] = t
                }
                    ,
                    e.prototype.getItem = function (e) {
                        return this.cache[e]
                    }
                    ,
                    e.prototype.removeItem = function (e) {
                        this.cache[e] = void 0
                    }
                    ,
                    e.prototype.getCookie = function (e, t) {
                        return D(e, t)
                    }
                    ,
                    e.prototype.setCookie = function (e, t, n, i) {
                        T(e, t, n, i)
                    }
                    ,
                    e
            }(), O = {
                getItem: function (e) {
                    try {
                        var t = localStorage.getItem(e)
                            , n = t;
                        try {
                            t && "string" == typeof t && (n = JSON.parse(t))
                        } catch (e) {
                        }
                        return n || {}
                    } catch (e) {
                    }
                    return {}
                },
                setItem: function (e, t) {
                    try {
                        var n = "string" == typeof t ? t : JSON.stringify(t);
                        localStorage.setItem(e, n)
                    } catch (e) {
                    }
                },
                removeItem: function (e) {
                    try {
                        localStorage.removeItem(e)
                    } catch (e) {
                    }
                },
                getCookie: function (e, t) {
                    return D(e, t)
                },
                setCookie: function (e, t, n, i) {
                    T(e, t, n, i)
                },
                isSupportLS: function () {
                    try {
                        return localStorage.setItem("_ranger-test-key", "hi"),
                            localStorage.getItem("_ranger-test-key"),
                            localStorage.removeItem("_ranger-test-key"),
                            !0
                    } catch (e) {
                        return !1
                    }
                }()
            }, x = {
                getItem: function (e) {
                    try {
                        var t = sessionStorage.getItem(e)
                            , n = t;
                        try {
                            t && "string" == typeof t && (n = JSON.parse(t))
                        } catch (e) {
                        }
                        return n || {}
                    } catch (e) {
                    }
                    return {}
                },
                setItem: function (e, t) {
                    try {
                        var n = "string" == typeof t ? t : JSON.stringify(t);
                        sessionStorage.setItem(e, n)
                    } catch (e) {
                    }
                },
                removeItem: function (e) {
                    try {
                        sessionStorage.removeItem(e)
                    } catch (e) {
                    }
                },
                getCookie: function (e, t) {
                    return D(e, t)
                },
                setCookie: function (e, t, n, i) {
                    T(e, t, n, i)
                },
                isSupportSession: function () {
                    try {
                        return sessionStorage.setItem("_ranger-test-key", "hi"),
                            sessionStorage.getItem("_ranger-test-key"),
                            sessionStorage.removeItem("_ranger-test-key"),
                            !0
                    } catch (e) {
                        return !1
                    }
                }()
            }, I = function () {
                function e(e, t) {
                    this._storage = t && "session" === t ? x : !e && O.isSupportLS ? O : new C
                }

                return e.prototype.getItem = function (e) {
                    return this._storage.getItem(e)
                }
                    ,
                    e.prototype.setItem = function (e, t) {
                        this._storage.setItem(e, t)
                    }
                    ,
                    e.prototype.getCookie = function (e, t) {
                        return this._storage.getCookie(e, t)
                    }
                    ,
                    e.prototype.setCookie = function (e, t, n, i) {
                        this._storage.setCookie(e, t, n, i)
                    }
                    ,
                    e.prototype.removeItem = function (e) {
                        this._storage.removeItem(e)
                    }
                    ,
                    e
            }(), A = function () {
                function e(e, t, n) {
                    this.appid = e,
                        this.domain = t,
                        this.userAgent = window.navigator.userAgent,
                        this.appVersion = window.navigator.appVersion,
                        this.cookie_expire = n
                }

                return e.prototype.init = function () {
                    var e = window.navigator.userAgent
                        , t = window.navigator.language
                        , n = document.referrer
                        , i = n ? _(n).hostname : ""
                        , r = y(window.location.href)
                        , o = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(this.appVersion) ? "wap" : "web";
                    this.utm = function (e, t, n, i) {
                        var r = new I(!1)
                            , o = new I(!1, "session")
                            , a = e ? "_tea_utm_cache_" + e : "_tea_utm_cache"
                            , s = e ? "_$utm_from_url_" + e : "_$utm_from_url"
                            , c = {}
                            ,
                            u = ["tr_shareuser", "tr_admaster", "tr_param1", "tr_param2", "tr_param3", "tr_param4", "$utm_from_url"]
                            , l = {
                                ad_id: Number(t.ad_id) || void 0,
                                campaign_id: Number(t.campaign_id) || void 0,
                                creative_id: Number(t.creative_id) || void 0,
                                utm_source: t.utm_source,
                                utm_medium: t.utm_medium,
                                utm_campaign: t.utm_campaign,
                                utm_term: t.utm_term,
                                utm_content: t.utm_content,
                                tr_shareuser: t.tr_shareuser,
                                tr_admaster: t.tr_admaster,
                                tr_param1: t.tr_param1,
                                tr_param2: t.tr_param2,
                                tr_param3: t.tr_param3,
                                tr_param4: t.tr_param4
                            };
                        try {
                            var h = !1;
                            for (var f in l)
                                l[f] && (-1 !== u.indexOf(f) ? (c.hasOwnProperty("tracer_data") || (c.tracer_data = {}),
                                    c.tracer_data[f] = l[f]) : c[f] = l[f],
                                    h = !0);
                            if (h)
                                o.setItem(s, "1"),
                                    r.setCookie(a, JSON.stringify(c), i, n);
                            else {
                                var d = r.getCookie(a, n);
                                d && (c = JSON.parse(d))
                            }
                            o.getItem(s) && (c.hasOwnProperty("tracer_data") || (c.tracer_data = {}),
                                c.tracer_data.$utm_from_url = 1)
                        } catch (e) {
                            return l
                        }
                        return c
                    }(this.appid, r, this.domain, this.cookie_expire);
                    var a = this.browser()
                        , s = this.os();
                    return {
                        browser: a.browser,
                        browser_version: a.browser_version,
                        platform: o,
                        os_name: s.os_name,
                        os_version: s.os_version,
                        userAgent: e,
                        screen_width: window.screen && window.screen.width,
                        screen_height: window.screen && window.screen.height,
                        device_model: this.getDeviceModel(s.os_name),
                        language: t,
                        referrer: n,
                        referrer_host: i,
                        utm: this.utm,
                        latest_data: this.last(n, i)
                    }
                }
                    ,
                    e.prototype.last = function (e, t) {
                        var n = ""
                            , i = ""
                            , r = ""
                            , o = location.hostname
                            , a = !1;
                        if (e && t && o !== t) {
                            n = e,
                                i = t,
                                a = !0;
                            var s = y(e);
                            s.keyword && (r = s.keyword)
                        }
                        return {
                            $latest_referrer: n,
                            $latest_referrer_host: i,
                            $latest_search_keyword: r,
                            isLast: a
                        }
                    }
                    ,
                    e.prototype.browser = function () {
                        var e, t, n = "", i = "" + parseFloat(this.appVersion), r = this.userAgent;
                        return -1 !== r.indexOf("Edge") || -1 !== r.indexOf("Edg") ? (n = "Microsoft Edge",
                            -1 !== r.indexOf("Edge") ? (e = r.indexOf("Edge"),
                                i = r.substring(e + 5)) : (e = r.indexOf("Edg"),
                                i = r.substring(e + 4))) : -1 !== (e = r.indexOf("MSIE")) ? (n = "Microsoft Internet Explorer",
                            i = r.substring(e + 5)) : -1 !== (e = r.indexOf("Lark")) ? (n = "Lark",
                            i = r.substring(e + 5, e + 11)) : -1 !== (e = r.indexOf("MetaSr")) ? (n = "sougoubrowser",
                            i = r.substring(e + 7, e + 10)) : -1 !== r.indexOf("MQQBrowser") || -1 !== r.indexOf("QQBrowser") ? (n = "qqbrowser",
                            -1 !== r.indexOf("MQQBrowser") ? (e = r.indexOf("MQQBrowser"),
                                i = r.substring(e + 11, e + 15)) : -1 !== r.indexOf("QQBrowser") && (e = r.indexOf("QQBrowser"),
                                i = r.substring(e + 10, e + 17))) : -1 !== r.indexOf("Chrome") ? -1 !== (e = r.indexOf("MicroMessenger")) ? (n = "weixin",
                            i = r.substring(e + 15, e + 20)) : -1 !== (e = r.indexOf("360")) ? (n = "360browser",
                            i = r.substring(r.indexOf("Chrome") + 7)) : -1 !== r.indexOf("baidubrowser") || -1 !== r.indexOf("BIDUBrowser") ? (-1 !== r.indexOf("baidubrowser") ? (e = r.indexOf("baidubrowser"),
                            i = r.substring(e + 13, e + 16)) : -1 !== r.indexOf("BIDUBrowser") && (e = r.indexOf("BIDUBrowser"),
                            i = r.substring(e + 12, e + 15)),
                            n = "baidubrowser") : -1 !== (e = r.indexOf("xiaomi")) ? -1 !== r.indexOf("openlanguagexiaomi") ? (n = "openlanguage xiaomi",
                            i = r.substring(e + 7, e + 13)) : (n = "xiaomi",
                            i = r.substring(e - 7, e - 1)) : -1 !== (e = r.indexOf("TTWebView")) ? (n = "TTWebView",
                            i = r.substring(e + 10, e + 23)) : -1 !== (e = r.indexOf("Chrome")) ? (n = "Chrome",
                            i = r.substring(e + 7)) : -1 !== (e = r.indexOf("Chrome")) && (n = "Chrome",
                            i = r.substring(e + 7)) : -1 !== r.indexOf("Safari") ? -1 !== (e = r.indexOf("QQ")) ? (n = "qqbrowser",
                            i = r.substring(e + 10, e + 16)) : -1 !== (e = r.indexOf("Safari")) && (n = "Safari",
                            i = r.substring(e + 7),
                        -1 !== (e = r.indexOf("Version")) && (i = r.substring(e + 8))) : -1 !== (e = r.indexOf("Firefox")) ? (n = "Firefox",
                            i = r.substring(e + 8)) : -1 !== (e = r.indexOf("MicroMessenger")) ? (n = "weixin",
                            i = r.substring(e + 15, e + 20)) : -1 !== (e = r.indexOf("QQ")) && (n = "qqbrowser",
                            i = r.substring(e + 3, e + 8)),
                        -1 !== (t = i.indexOf(";")) && (i = i.substring(0, t)),
                        -1 !== (t = i.indexOf(" ")) && (i = i.substring(0, t)),
                        -1 !== (t = i.indexOf(")")) && (i = i.substring(0, t)),
                            {
                                browser: n,
                                browser_version: i
                            }
                    }
                    ,
                    e.prototype.os = function () {
                        for (var e, t, n = "", i = "", r = [{
                            s: "Windows 10",
                            r: /(Windows 10.0|Windows NT 10.0|Windows NT 10.1)/
                        }, {
                            s: "Windows 8.1",
                            r: /(Windows 8.1|Windows NT 6.3)/
                        }, {
                            s: "Windows 8",
                            r: /(Windows 8|Windows NT 6.2)/
                        }, {
                            s: "Windows 7",
                            r: /(Windows 7|Windows NT 6.1)/
                        }, {
                            s: "Android",
                            r: /Android/
                        }, {
                            s: "Sun OS",
                            r: /SunOS/
                        }, {
                            s: "Linux",
                            r: /(Linux|X11)/
                        }, {
                            s: "iOS",
                            r: /(iPhone|iPad|iPod)/
                        }, {
                            s: "Mac OS X",
                            r: /Mac OS X/
                        }, {
                            s: "Mac OS",
                            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                        }], o = 0; o < r.length; o++) {
                            var a = r[o];
                            if (a.r.test(this.userAgent)) {
                                "Mac OS X" === (n = a.s) && this.isNewIpad() && (n = "iOS");
                                break
                            }
                        }
                        var s = function (e, t) {
                            var n = e.exec(t);
                            return n && n[1] ? n[1] : ""
                        }
                            , c = function (e, t) {
                            var n = RegExp("(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:" + e + ")", "i").exec(t);
                            return n ? n.slice(1)[0] : ""
                        };
                        switch (/Windows/.test(n) && (i = s(/Windows (.*)/, n),
                            n = "windows"),
                            n) {
                            case "Mac OS X":
                                i = c("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent),
                                    n = "mac";
                                break;
                            case "Android":
                                (t = s(/Android ([\.\_\d]+)/, e = this.userAgent)) || (t = s(/Android\/([\.\_\d]+)/, e)),
                                    i = t,
                                    n = "android";
                                break;
                            case "iOS":
                                i = this.isNewIpad() ? c("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent) : (i = /OS (\d+)_(\d+)_?(\d+)?/.exec(this.appVersion)) ? i[1] + "." + i[2] + "." + (0 | i[3]) : "",
                                    n = "ios"
                        }
                        return {
                            os_name: n,
                            os_version: i
                        }
                    }
                    ,
                    e.prototype.getDeviceModel = function (e) {
                        var t = "";
                        try {
                            if ("android" === e)
                                navigator.userAgent.split(";").forEach(function (e) {
                                    e.indexOf("Build/") > -1 && (t = e.slice(0, e.indexOf("Build/")))
                                });
                            else if ("ios" === e || "mac" === e || "windows" === e) {
                                if (this.isNewIpad())
                                    t = "iPad";
                                else {
                                    var n = navigator.userAgent.replace("Mozilla/5.0 (", "")
                                        , i = n.indexOf(";");
                                    t = n.slice(0, i)
                                }
                            }
                        } catch (e) {
                        }
                        return t.trim()
                    }
                    ,
                    e.prototype.isNewIpad = function () {
                        return void 0 !== this.userAgent && "MacIntel" === navigator.platform && "number" == typeof navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                    }
                    ,
                    e
            }(), M = {
                cn: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
                va: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
                sg: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k"
            }, K = {
                cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az28z1gz1hz1gz1cz18z1nz1gz4az1az1mz1k",
                sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
                va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k"
            }, P = "5.0.47", G = function () {
                function e(e, t) {
                    this.collector = e,
                        this.config = t,
                        this.eventNameWhiteList = ["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure"],
                        this.paramsNameWhiteList = ["$inactive", "$inline", "$target_uuid_list", "$source_uuid", "$is_spider", "$source_id", "$is_first_time", "_staging_flag"],
                        this.regStr = RegExp("^[a-zA-Z0-9][a-z0-9A-Z_.-]{1,255}$")
                }

                return e.prototype.checkVerify = function (e) {
                    var t = this;
                    if (!e || !e.length)
                        return !1;
                    var n = e[0];
                    if (!n)
                        return !1;
                    var i = n.events
                        , r = n.header;
                    if (!i || !i.length)
                        return !1;
                    var o = !0;
                    return i.forEach(function (e) {
                        if (!e)
                            return o = !1,
                                void (e.checkEvent = "事件异常");
                        t.checkEventName(e.event) || (o = !1,
                            e.checkEvent = "事件名不能以 $ or __开头"),
                        t.checkEventParams(e.params) || (o = !1,
                            e.checkParams = "属性名不能以 $ or __开头")
                    }),
                    this.checkEventParams(r) || (o = !1),
                        o
                }
                    ,
                    e.prototype.checkEventName = function (e) {
                        return !!e && this.calculate(e, "event")
                    }
                    ,
                    e.prototype.checkEventParams = function (e) {
                        var t = e;
                        if ("string" == typeof e && (t = JSON.parse(t)),
                            !Object.keys(t).length)
                            return !0;
                        for (var n in t)
                            return !!this.calculate(n, "params") && !("string" == typeof t[n] && t[n].length > 1024);
                        return !0
                    }
                    ,
                    e.prototype.calculate = function (e, t) {
                        return -1 !== ("event" === t ? this.eventNameWhiteList : this.paramsNameWhiteList).indexOf(e) || !RegExp("^\\$").test(e) && !RegExp("^__").test(e)
                    }
                    ,
                    e
            }();
            (eV = S || (S = {})).Init = "init",
                eV.Config = "config",
                eV.Start = "start",
                eV.Ready = "ready",
                eV.UnReady = "un-ready",
                eV.TokenComplete = "token-complete",
                eV.TokenStorage = "token-storage",
                eV.TokenFetch = "token-fetch",
                eV.TokenError = "token-error",
                eV.ConfigUuid = "config-uuid",
                eV.ConfigWebId = "config-webid",
                eV.ConfigDomain = "config-domain",
                eV.CustomWebId = "custom-webid",
                eV.TokenChange = "token-change",
                eV.TokenReset = "token-reset",
                eV.ConfigTransform = "config-transform",
                eV.EnvTransform = "env-transform",
                eV.SessionReset = "session-reset",
                eV.SessionResetTime = "session-reset-time",
                eV.Event = "event",
                eV.Events = "events",
                eV.EventNow = "event-now",
                eV.CleanEvents = "clean-events",
                eV.BeconEvent = "becon-event",
                eV.SubmitBefore = "submit-before",
                eV.SubmitScuess = "submit-scuess",
                eV.SubmitAfter = "submit-after",
                eV.SubmitError = "submit-error",
                eV.SubmitVerify = "submit-verify",
                eV.Stay = "stay",
                eV.ResetStay = "reset-stay",
                eV.StayReady = "stay-ready",
                eV.SetStay = "set-stay",
                eV.RouteChange = "route-change",
                eV.RouteReady = "route-ready",
                eV.Ab = "ab",
                eV.AbVar = "ab-var",
                eV.AbAllVars = "ab-all-vars",
                eV.AbConfig = "ab-config",
                eV.AbExternalVersion = "ab-external-version",
                eV.AbVersionChangeOn = "ab-version-change-on",
                eV.AbVersionChangeOff = "ab-version-change-off",
                eV.AbOpenLayer = "ab-open-layer",
                eV.AbCloseLayer = "ab-close-layer",
                eV.AbReady = "ab-ready",
                eV.AbComplete = "ab-complete",
                eV.AbTimeout = "ab-timeout",
                eV.Profile = "profile",
                eV.ProfileSet = "profile-set",
                eV.ProfileSetOnce = "profile-set-once",
                eV.ProfileUnset = "profile-unset",
                eV.ProfileIncrement = "profile-increment",
                eV.ProfileAppend = "profile-append",
                eV.ProfileClear = "profile-clear",
                eV.Autotrack = "autotrack",
                eV.AutotrackReady = "autotrack-ready",
                eV.CepReady = "cep-ready",
                eV.TracerReady = "tracer-ready",
                eV.sessionRecord = "session-record",
                eV.SessionRecordStart = "session-record-start",
                eV.SessionRecordPause = "session-record-pause",
                eV.SessionRecordEnd = "session-record-end",
                eV.SessionRecordReport = "session-record-report",
                (e$ = E || (E = {})).DEBUGGER_MESSAGE = "debugger-message",
                e$.DEBUGGER_MESSAGE_SDK = "debugger-message-sdk",
                e$.DEBUGGER_MESSAGE_FETCH = "debugger-message-fetch",
                e$.DEBUGGER_MESSAGE_FETCH_RESULT = "debugger-message-fetch-result",
                e$.DEBUGGER_MESSAGE_EVENT = "debugger-message-event",
                e$.DEVTOOL_WEB_READY = "devtool-web-ready";
            var R = S
                , B = void 0
                , L = (new Date).getTimezoneOffset()
                , N = parseInt("" + -L / 60, 10)
                , U = 60 * L
                , z = function () {
                function e(e, t) {
                    this.is_first_time = !0,
                        this.configPersist = !1,
                        this.initConfig = t,
                        this.collect = e;
                    var n = new A(t.app_id, t.cookie_domain || "", t.cookie_expire || 7776e6).init();
                    this.eventCheck = new G(e, t);
                    var i = "__tea_cache_first_" + t.app_id;
                    this.configKey = "__tea_cache_config_" + t.app_id,
                        this.sessionStorage = new I(!1, "session"),
                        this.localStorage = new I(!1, "local"),
                    t.configPersist && (this.configPersist = !0,
                        this.storage = 1 === t.configPersist ? this.sessionStorage : this.localStorage);
                    var r = this.localStorage.getItem(i);
                    r && 1 == r ? this.is_first_time = !1 : (this.is_first_time = !0,
                        this.localStorage.setItem(i, "1")),
                        this.envInfo = {
                            user: {
                                user_unique_id: B,
                                user_type: B,
                                user_id: B,
                                user_is_auth: B,
                                user_is_login: B,
                                device_id: B,
                                web_id: B,
                                ip_addr_id: B,
                                user_unique_id_type: B
                            },
                            header: {
                                app_id: B,
                                app_name: B,
                                app_install_id: B,
                                install_id: B,
                                app_package: B,
                                app_channel: B,
                                app_version: B,
                                ab_version: B,
                                os_name: n.os_name,
                                os_version: n.os_version,
                                device_model: n.device_model,
                                ab_client: B,
                                traffic_type: B,
                                client_ip: B,
                                device_brand: B,
                                os_api: B,
                                access: B,
                                language: n.language,
                                region: B,
                                app_language: B,
                                app_region: B,
                                creative_id: n.utm.creative_id,
                                ad_id: n.utm.ad_id,
                                campaign_id: n.utm.campaign_id,
                                log_type: B,
                                rnd: B,
                                platform: n.platform,
                                sdk_version: P,
                                sdk_lib: "js",
                                province: B,
                                city: B,
                                timezone: N,
                                tz_offset: U,
                                tz_name: B,
                                sim_region: B,
                                carrier: B,
                                resolution: n.screen_width + "x" + n.screen_height,
                                browser: n.browser,
                                browser_version: n.browser_version,
                                referrer: n.referrer,
                                referrer_host: n.referrer_host,
                                width: n.screen_width,
                                height: n.screen_height,
                                screen_width: n.screen_width,
                                screen_height: n.screen_height,
                                utm_term: n.utm.utm_term,
                                utm_content: n.utm.utm_content,
                                utm_source: n.utm.utm_source,
                                utm_medium: n.utm.utm_medium,
                                utm_campaign: n.utm.utm_campaign,
                                tracer_data: JSON.stringify(n.utm.tracer_data),
                                custom: {},
                                wechat_unionid: B,
                                wechat_openid: B
                            }
                        },
                        this.ab_version = "",
                        this.evtParams = {},
                        this.reportErrorCallback = function () {
                        }
                        ,
                        this.isLast = !1,
                        this.setCustom(n),
                        this.initDomain(),
                        this.initABData()
                }

                return e.prototype.initDomain = function () {
                    var e = this.initConfig.channel_domain;
                    if (e)
                        this.domain = e;
                    else {
                        var t = this.initConfig.channel;
                        this.domain = d(K[t])
                    }
                }
                    ,
                    e.prototype.setDomain = function (e) {
                        this.domain = e
                    }
                    ,
                    e.prototype.getDomain = function () {
                        return this.domain
                    }
                    ,
                    e.prototype.initABData = function () {
                        var e = "__tea_sdk_ab_version_" + this.initConfig.app_id
                            , t = null;
                        if (this.initConfig.ab_cross) {
                            var n = this.localStorage.getCookie(e, this.initConfig.ab_cookie_domain);
                            t = n ? JSON.parse(n) : null
                        } else
                            t = this.localStorage.getItem(e);
                        this.setAbCache(t)
                    }
                    ,
                    e.prototype.setAbCache = function (e) {
                        this.ab_cache = e
                    }
                    ,
                    e.prototype.getAbCache = function () {
                        return this.ab_cache
                    }
                    ,
                    e.prototype.setAbVersion = function (e) {
                        this.ab_version = e
                    }
                    ,
                    e.prototype.getAbVersion = function () {
                        return this.ab_version
                    }
                    ,
                    e.prototype.clearAbCache = function () {
                        this.ab_version = "",
                            this.ab_cache = {}
                    }
                    ,
                    e.prototype.getUrl = function (e) {
                        var t = "";
                        switch (e) {
                            case "event":
                                t = this.initConfig.report_url || "/list";
                                break;
                            case "webid":
                                t = "/webid";
                                break;
                            case "tobid":
                                t = "/tobid"
                        }
                        var n = "";
                        return this.initConfig.caller && (n = "?sdk_version=" + P + "&sdk_name=web&app_id=" + this.initConfig.app_id + "&caller=" + this.initConfig.caller),
                        "" + this.getDomain() + t + n
                    }
                    ,
                    e.prototype.setCustom = function (e) {
                        if (e && e.latest_data && e.latest_data.isLast)
                            for (var t in delete e.latest_data.isLast,
                                this.isLast = !0,
                                e.latest_data)
                                this.envInfo.header.custom[t] = e.latest_data[t]
                    }
                    ,
                    e.prototype.set = function (e) {
                        var t = this;
                        Object.keys(e).forEach(function (n) {
                            void 0 !== e[n] && null !== e[n] || t.delete(n);
                            try {
                                t.eventCheck.calculate(n, "config")
                            } catch (e) {
                            }
                            if ("traffic_type" === n && t.isLast && (t.envInfo.header.custom.$latest_traffic_source_type = e[n]),
                            "evtParams" === n)
                                t.evtParams = r({}, t.evtParams || {}, e.evtParams || {});
                            else if ("_staging_flag" === n)
                                t.evtParams = r({}, t.evtParams || {}, {
                                    _staging_flag: e._staging_flag
                                });
                            else if ("reportErrorCallback" === n && "function" == typeof e[n])
                                t.reportErrorCallback = e[n];
                            else {
                                var i = ""
                                    , o = "";
                                if (n.indexOf(".") > -1) {
                                    var a = n.split(".");
                                    i = a[0],
                                        o = a[1]
                                }
                                i ? "user" === i || "header" === i ? t.envInfo[i][o] = e[n] : t.envInfo.header.custom[o] = e[n] : Object.hasOwnProperty.call(t.envInfo.user, n) ? ["user_type", "ip_addr_id"].indexOf(n) > -1 ? t.envInfo.user[n] = e[n] ? Number(e[n]) : e[n] : ["user_id", "web_id", "user_unique_id", "user_unique_id_type"].indexOf(n) > -1 ? t.envInfo.user[n] = e[n] ? String(e[n]) : e[n] : ["user_is_auth", "user_is_login"].indexOf(n) > -1 ? t.envInfo.user[n] = !!e[n] : "device_id" === n && (t.envInfo.user[n] = e[n]) : Object.hasOwnProperty.call(t.envInfo.header, n) ? t.envInfo.header[n] = e[n] : t.envInfo.header.custom[n] = e[n]
                            }
                        })
                    }
                    ,
                    e.prototype.get = function (e) {
                        try {
                            return e ? "evtParams" === e ? this.evtParams : "reportErrorCallback" === e ? this[e] : Object.hasOwnProperty.call(this.envInfo.user, e) ? this.envInfo.user[e] : Object.hasOwnProperty.call(this.envInfo.header, e) ? this.envInfo.header[e] : JSON.parse(JSON.stringify(this.envInfo[e])) : JSON.parse(JSON.stringify(this.envInfo))
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.setStore = function (e) {
                        try {
                            if (!this.configPersist)
                                return;
                            var t = this.storage.getItem(this.configKey) || {};
                            if (t && Object.keys(e).length) {
                                var n = Object.assign(e, t);
                                this.storage.setItem(this.configKey, n)
                            }
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.getStore = function () {
                        try {
                            if (!this.configPersist)
                                return null;
                            var e = this.storage.getItem(this.configKey) || {};
                            return e && Object.keys(e).length ? e : null
                        } catch (e) {
                            return this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            }),
                                null
                        }
                    }
                    ,
                    e.prototype.delete = function (e) {
                        try {
                            if (!this.configPersist)
                                return;
                            var t = this.storage.getItem(this.configKey) || {};
                            t && Object.hasOwnProperty.call(t, e) && (delete t[e],
                                this.storage.setItem(this.configKey, t))
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e
            }()
                , j = function () {
                function e(e, t) {
                    this.isLog = t || !1,
                        this.name = e || ""
                }

                return e.prototype.info = function (e) {
                    this.isLog
                }
                    ,
                    e.prototype.warn = function (e) {
                        this.isLog
                    }
                    ,
                    e.prototype.error = function (e) {
                        this.isLog
                    }
                    ,
                    e.prototype.throw = function (e) {
                        throw this.error(this.name),
                            Error(e)
                    }
                    ,
                    e
            }()
                , V = function () {
                function e() {
                    this.spiderBot = ["Baiduspider", "googlebot", "360Spider", "haosouspider", "YoudaoBot", "Sogou News Spider", "Yisouspider", "Googlebot", "Headless", "Applebot", "Bingbot", "PetalBot"]
                }

                return e.prototype.checkSpider = function (e) {
                    if (!e.enable_spider)
                        return !1;
                    var t = window.navigator.userAgent;
                    if (!t)
                        return !0;
                    var n = !1;
                    return this.spiderBot.forEach(function (e) {
                        -1 !== t.indexOf(e) && (n = !0)
                    }),
                        n
                }
                    ,
                    e
            }()
                , $ = function () {
                function e(e, t) {
                    this.collect = e,
                        this.native = t
                }

                var t = e.prototype;
                return t.bridgeInject = function () {
                    try {
                        return !!this.native && !!AppLogBridge
                    } catch (e) {
                        return !1
                    }
                }
                    ,
                    t.bridgeReady = function () {
                        var e = this;
                        return new Promise(function (t, n) {
                                try {
                                    e.bridgeInject() ? AppLogBridge.hasStarted(function (e) {
                                        e ? t(!0) : n(!1)
                                    }) : n(!1)
                                } catch (e) {
                                    n(!1)
                                }
                            }
                        )
                    }
                    ,
                    t.setNativeAppId = function (e) {
                        try {
                            AppLogBridge.setNativeAppId(JSON.stringify(e))
                        } catch (e) {
                        }
                    }
                    ,
                    t.setConfig = function (e) {
                        var t = this;
                        try {
                            Object.keys(e).forEach(function (n) {
                                "user_unique_id" === n ? t.setUserUniqueId(e[n]) : e[n] ? t.addHeaderInfo(n, e[n]) : t.removeHeaderInfo(n)
                            })
                        } catch (e) {
                        }
                    }
                    ,
                    t.setUserUniqueId = function (e) {
                        try {
                            AppLogBridge.setUserUniqueId(e)
                        } catch (e) {
                        }
                    }
                    ,
                    t.addHeaderInfo = function (e, t) {
                        try {
                            AppLogBridge.addHeaderInfo(e, t)
                        } catch (e) {
                        }
                    }
                    ,
                    t.setHeaderInfo = function (e) {
                        try {
                            AppLogBridge.setHeaderInfo(JSON.stringify(e))
                        } catch (e) {
                        }
                    }
                    ,
                    t.removeHeaderInfo = function (e) {
                        try {
                            AppLogBridge.removeHeaderInfo(e)
                        } catch (e) {
                        }
                    }
                    ,
                    t.reportPv = function (e) {
                        this.onEventV3("predefine_pageview", e)
                    }
                    ,
                    t.onEventV3 = function (e, t) {
                        try {
                            AppLogBridge.onEventV3(e, t),
                                this.collect.emit(DebuggerMesssge.DEBUGGER_MESSAGE, {
                                    type: DebuggerMesssge.DEBUGGER_MESSAGE_EVENT,
                                    info: "bridge埋点上报",
                                    time: Date.now(),
                                    data: [{
                                        events: [{
                                            event: e,
                                            params: t
                                        }]
                                    }],
                                    code: 200,
                                    status: "success"
                                })
                        } catch (e) {
                        }
                    }
                    ,
                    t.profileSet = function (e) {
                        try {
                            AppLogBridge.profileSet(e)
                        } catch (e) {
                        }
                    }
                    ,
                    t.profileSetOnce = function (e) {
                        try {
                            AppLogBridge.profileSetOnce(e)
                        } catch (e) {
                        }
                    }
                    ,
                    t.profileIncrement = function (e) {
                        try {
                            AppLogBridge.profileIncrement(e)
                        } catch (e) {
                        }
                    }
                    ,
                    t.profileUnset = function (e) {
                        try {
                            AppLogBridge.profileUnset(e)
                        } catch (e) {
                        }
                    }
                    ,
                    t.profileAppend = function (e) {
                        try {
                            AppLogBridge.profileAppend(e)
                        } catch (e) {
                        }
                    }
                    ,
                    e
            }()
                , q = {
                XHR_ON: 500,
                TIMEOUT: 5005
            };

            function W(e, t, n, i, r, o, a, s, c) {
                try {
                    var u = new XMLHttpRequest;
                    u.open(s || "POST", "" + e, !0),
                        u.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
                    a && u.setRequestHeader("X-MCS-AppKey", "" + a),
                    i && (u.withCredentials = !0),
                    n && (u.timeout = n,
                            u.ontimeout = function () {
                                o && o(t, q.TIMEOUT)
                            }
                    ),
                        u.onload = function () {
                            if (r) {
                                var e = null;
                                if (u.responseText) {
                                    try {
                                        e = JSON.parse(u.responseText)
                                    } catch (t) {
                                        e = {}
                                    }
                                    r(e, t)
                                }
                            }
                        }
                        ,
                        u.onerror = function () {
                            u.abort(),
                            o && o(t, q.XHR_ON)
                        }
                        ,
                        c ? u.send(t) : u.send(JSON.stringify(t))
                } catch (e) {
                }
            }

            var H = function (e, t, n, i) {
                try {
                    var r = e.match(/\/v\d\//)
                        , o = "";
                    o = r ? r[0] : -1 !== e.indexOf("/v1/") ? "/v1/" : "/v2/";
                    var a = e.split(o)[0];
                    if (!a)
                        return void i(e, t, 4001);
                    t.forEach(function (r) {
                        var o = function (e) {
                            var t = "";
                            for (var n in e)
                                e.hasOwnProperty(n) && void 0 !== e[n] && (t += "&" + n + "=" + encodeURIComponent(JSON.stringify(e[n])));
                            return t = "&" === t[0] ? t.slice(1) : t
                        }(r)
                            , s = new Image(1, 1);
                        s.onload = function () {
                            s = null,
                            n && n()
                        }
                            ,
                            s.onerror = function () {
                                s = null,
                                i && i(e, t, 4e3)
                            }
                            ,
                            s.src = a + "/gif?" + o
                    })
                } catch (n) {
                    i && i(e, t, 4002, n.message)
                }
            }
                , J = function (e, t, n, i, r, o, a, s) {
                var c = window.navigator.userAgent;
                if (-1 === window.navigator.appName.indexOf("Microsoft Internet Explorer") || -1 === c.indexOf("MSIE 8.0") && -1 === c.indexOf("MSIE 9.0")) {
                    if (a)
                        return window.navigator && window.navigator.sendBeacon ? void (window.navigator.sendBeacon(e, JSON.stringify(t)) ? r() : o(e, t, 4003)) : void H(e, t, r, o)
                } else
                    H(e, t, r, o);
                W(e, t, n, i, r, o, "", "", s)
            }
                , F = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
                , Y = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    this.collect = e,
                        this.storage = new I(!1, "session"),
                        this.sessionKey = "__tea_session_id_" + t.app_id,
                        this.expireTime = t.expireTime || 18e5,
                        this.disableSession = t.disable_session,
                    this.disableSession || (this.setSessionId(),
                        this.collect.on(R.SessionReset, function () {
                            n.resetSessionId()
                        }),
                        this.collect.on(R.SessionResetTime, function () {
                            n.updateSessionIdTime()
                        }))
                }
                    ,
                    e.prototype.updateSessionIdTime = function () {
                        var e = this.storage.getItem(this.sessionKey);
                        if (e && e.sessionId) {
                            var t = e.timestamp;
                            Date.now() - t > this.expireTime ? e = {
                                sessionId: F(),
                                timestamp: Date.now()
                            } : e.timestamp = Date.now(),
                                this.storage.setItem(this.sessionKey, e),
                                this.resetExpTime()
                        }
                    }
                    ,
                    e.prototype.setSessionId = function () {
                        var e = this
                            , t = this.storage.getItem(this.sessionKey);
                        t && t.sessionId ? t.timestamp = Date.now() : t = {
                            sessionId: F(),
                            timestamp: Date.now()
                        },
                            this.storage.setItem(this.sessionKey, t),
                            this.sessionExp = setInterval(function () {
                                e.checkEXp()
                            }, this.expireTime)
                    }
                    ,
                    e.prototype.getSessionId = function () {
                        var e = this.storage.getItem(this.sessionKey);
                        return this.disableSession ? "" : e && e.sessionId ? e.sessionId : ""
                    }
                    ,
                    e.prototype.resetExpTime = function () {
                        var e = this;
                        this.sessionExp && (clearInterval(this.sessionExp),
                            this.sessionExp = setInterval(function () {
                                e.checkEXp()
                            }, this.expireTime))
                    }
                    ,
                    e.prototype.resetSessionId = function () {
                        var e = {
                            sessionId: F(),
                            timestamp: Date.now()
                        };
                        this.storage.setItem(this.sessionKey, e)
                    }
                    ,
                    e.prototype.checkEXp = function () {
                        var e = this.storage.getItem(this.sessionKey);
                        e && e.sessionId && Date.now() - e.timestamp + 30 >= this.expireTime && (e = {
                            sessionId: F(),
                            timestamp: Date.now()
                        },
                            this.storage.setItem(this.sessionKey, e))
                    }
                    ,
                    e
            }()
                , X = function () {
                function e() {
                    this.eventLimit = 50,
                        this.enable_ttwebid = !1,
                        this.eventCache = [],
                        this.beconEventCache = []
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    this.collect = e,
                        this.config = t,
                        this.configManager = e.configManager,
                        this.eventCheck = new G(e, t),
                        this.cacheStorgae = new I(!0),
                        this.localStorage = new I(!1),
                        this.maxReport = t.max_report || 10,
                        this.reportTime = t.reportTime || t.report_time || 30,
                        this.timeout = t.timeout || 1e5,
                        this.enable_ttwebid = t.enable_ttwebid,
                        this.reportUrl = this.configManager.getUrl("event"),
                        this.eventKey = "__tea_cache_events_" + this.configManager.get("app_id"),
                        this.beconKey = "__tea_cache_events_becon_" + this.configManager.get("app_id"),
                        this.abKey = "__tea_sdk_ab_version_" + this.configManager.get("app_id"),
                        this.refer_key = "__tea_cache_refer_" + this.configManager.get("app_id"),
                        this.pageId = F(),
                        this.collect.on(R.Ready, function () {
                            n.reportAll(!1)
                        }),
                        this.collect.on(R.ConfigDomain, function () {
                            n.reportUrl = n.configManager.getUrl("event")
                        }),
                        this.collect.on(R.Event, function (e) {
                            n.event(e)
                        }),
                        this.collect.on(R.BeconEvent, function (e) {
                            n.beconEvent(e)
                        }),
                        this.collect.on(R.CleanEvents, function () {
                            n.reportAll(!1)
                        }),
                        this.linster()
                }
                    ,
                    e.prototype.linster = function () {
                        var e = this;
                        window.addEventListener("unload", function () {
                            e.reportAll(!0)
                        }, !1),
                            p(function () {
                                e.reportAll(!0)
                            }),
                            document.addEventListener("visibilitychange", function () {
                                "hidden" === document.visibilityState && e.reportAll(!0)
                            }, !1)
                    }
                    ,
                    e.prototype.reportAll = function (e) {
                        this.report(e),
                            this.reportBecon()
                    }
                    ,
                    e.prototype.event = function (e) {
                        var t = this;
                        try {
                            var n = s(e, this.cacheStorgae.getItem(this.eventKey) || []);
                            if (this.cacheStorgae.setItem(this.eventKey, n),
                            this.reportTimeout && clearTimeout(this.reportTimeout),
                            n.length >= this.maxReport)
                                this.report(!1);
                            else {
                                var i = this.reportTime;
                                this.reportTimeout = setTimeout(function () {
                                    t.report(!1),
                                        t.reportTimeout = null
                                }, i)
                            }
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.beconEvent = function (e) {
                        var t = s(e, this.cacheStorgae.getItem(this.beconKey) || []);
                        this.cacheStorgae.setItem(this.beconKey, t),
                        this.collect.destroyInstance || this.collect.sdkStop || this.collect.tokenManager.getReady() && this.collect.sdkReady && (this.cacheStorgae.removeItem(this.beconKey),
                            this.send(this.split(this.merge(t)), !0))
                    }
                    ,
                    e.prototype.reportBecon = function () {
                        if (!this.collect.destroyInstance && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
                            var e = this.cacheStorgae.getItem(this.beconKey) || [];
                            e && e.length && (this.cacheStorgae.removeItem(this.beconKey),
                                this.send(this.split(this.merge(e)), !0))
                        }
                    }
                    ,
                    e.prototype.report = function (e) {
                        if (!this.collect.destroyInstance && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
                            var t = this.cacheStorgae.getItem(this.eventKey) || [];
                            t.length && (this.cacheStorgae.removeItem(this.eventKey),
                                this.sliceEvent(t, e))
                        }
                    }
                    ,
                    e.prototype.sliceEvent = function (e, t) {
                        if (e.length > this.eventLimit)
                            for (var n = 0; n < e.length; n += this.eventLimit) {
                                i = e.slice(n, n + this.eventLimit);
                                var i, r = this.split(this.merge(i));
                                this.send(r, t)
                            }
                        else
                            r = this.split(this.merge(e)),
                                this.send(r, t)
                    }
                    ,
                    e.prototype.handleRefer = function () {
                        var e = "";
                        if (this.config.spa || this.config.autotrack) {
                            var t = this.localStorage.getItem(this.refer_key) || {};
                            e = t.routeChange ? t.refer_key : document.referrer
                        } else
                            e = document.referrer;
                        return e
                    }
                    ,
                    e.prototype.merge = function (e, t) {
                        var n = this
                            , i = this.configManager.get()
                            , o = i.header
                            , a = i.user;
                        this.config.enable_pageid && (o.custom.page_id = this.pageId),
                            o.custom = JSON.stringify(o.custom);
                        var s = this.configManager.get("evtParams")
                            , c = this.configManager.get("user_unique_id_type")
                            , u = JSON.parse(JSON.stringify({
                            events: e.map(function (e) {
                                try {
                                    Object.keys(s).length && !t && (e.params = r({}, s, e.params)),
                                    c && (e.params.$user_unique_id_type = c);
                                    var i = n.configManager.getAbCache();
                                    return i && i.uuid && i.uuid === a.user_unique_id && n.configManager.getAbVersion() && (e.ab_sdk_version = n.configManager.getAbVersion()),
                                        e.session_id = n.collect.sessionManager.getSessionId(),
                                        e.params = JSON.stringify(e.params),
                                        e
                                } catch (t) {
                                    return n.collect.emit(E.DEBUGGER_MESSAGE, {
                                        type: E.DEBUGGER_MESSAGE_SDK,
                                        info: "发生了异常",
                                        level: "error",
                                        time: Date.now(),
                                        data: t.message
                                    }),
                                        e
                                }
                            }),
                            user: a,
                            header: o
                        }));
                        u.local_time = Math.floor(Date.now() / 1e3),
                            u.user_unique_type = this.config.enable_ttwebid ? this.config.user_unique_type : void 0,
                            u.verbose = 1;
                        var l = [];
                        return l.push(u),
                            l
                    }
                    ,
                    e.prototype.split = function (e) {
                        return e = e.map(function (e) {
                            var t = [];
                            return t.push(e),
                                t
                        })
                    }
                    ,
                    e.prototype.send = function (e, t) {
                        var n = this;
                        e.length && (this.config.disable_track_event || e.forEach(function (e) {
                            try {
                                var i = JSON.parse(JSON.stringify(e));
                                n.config.filter && (i = n.config.filter(i)),
                                n.collect.eventFilter && i && (i = n.collect.eventFilter(i));
                                var r = i || e
                                    , o = JSON.parse(JSON.stringify(r));
                                if (n.eventCheck.checkVerify(o),
                                    !r.length)
                                    return;
                                n.collect.emit(R.SubmitBefore, r),
                                    J(n.reportUrl, r, n.timeout, n.enable_ttwebid, function (e, t) {
                                        e && 0 !== e.e ? (n.collect.emit(R.SubmitError, {
                                            type: "f_data",
                                            eventData: t,
                                            errorCode: e.e,
                                            response: e
                                        }),
                                            n.collect.emit(E.DEBUGGER_MESSAGE, {
                                                type: E.DEBUGGER_MESSAGE_EVENT,
                                                info: "埋点上报失败",
                                                time: Date.now(),
                                                data: o,
                                                code: e.e,
                                                failType: "数据异常失败",
                                                status: "fail"
                                            })) : (n.collect.emit(R.SubmitScuess, {
                                            eventData: t,
                                            res: e
                                        }),
                                            n.collect.emit(E.DEBUGGER_MESSAGE, {
                                                type: E.DEBUGGER_MESSAGE_EVENT,
                                                info: "埋点上报成功",
                                                time: Date.now(),
                                                data: o,
                                                code: 200,
                                                status: "success"
                                            }))
                                    }, function (e, t) {
                                        n.configManager.get("reportErrorCallback")(e, t),
                                            n.collect.emit(R.SubmitError, {
                                                type: "f_net",
                                                eventData: e,
                                                errorCode: t
                                            }),
                                            n.collect.emit(E.DEBUGGER_MESSAGE, {
                                                type: E.DEBUGGER_MESSAGE_EVENT,
                                                info: "埋点上报网络异常",
                                                time: Date.now(),
                                                data: o,
                                                code: t,
                                                failType: "网络异常失败",
                                                status: "fail"
                                            })
                                    }, t, !1),
                                    n.collect.emit(R.SubmitAfter, r)
                            } catch (e) {
                                n.collect.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_SDK,
                                    info: "发生了异常",
                                    level: "error",
                                    time: Date.now(),
                                    data: e.message
                                })
                            }
                        }))
                    }
                    ,
                    e
            }()
                , Q = function () {
                return (function e(t) {
                        return t ? (t ^ 16 * Math.random() >> t / 4).toString(10) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e)
                    }
                )().replace(/-/g, "").slice(0, 19)
            }
                , Z = function () {
                function e() {
                    this.cacheToken = {},
                        this.enableCookie = !1,
                        this.enable_ttwebid = !1,
                        this.enableCustomWebid = !1
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    this.collect = e,
                        this.config = t,
                        this.configManager = this.collect.configManager,
                        this.storage = new I(!1),
                        this.tokenKey = "__tea_cache_tokens_" + t.app_id,
                        this.enable_ttwebid = t.enable_ttwebid,
                        this.enableCustomWebid = t.enable_custom_webid,
                        this.collect.on(R.ConfigUuid, function (e) {
                            n.setUuid(e)
                        }),
                        this.collect.on(R.ConfigWebId, function (e) {
                            n.setWebId(e)
                        }),
                        this.enableCookie = t.cross_subdomain,
                        this.expiresTime = t.cookie_expire || 6048e5,
                        this.cookieDomain = t.cookie_domain || "",
                        this.checkStorage()
                }
                    ,
                    e.prototype.checkStorage = function () {
                        var e = this;
                        if (this.enableCookie) {
                            var t = this.storage.getCookie(this.tokenKey, this.cookieDomain);
                            this.cacheToken = t && "string" == typeof t ? JSON.parse(t) : {}
                        } else
                            this.cacheToken = this.storage.getItem(this.tokenKey) || {};
                        this.tokenType = this.cacheToken && this.cacheToken._type_ ? this.cacheToken._type_ : "default",
                            "custom" !== this.tokenType || this.enableCustomWebid ? this.enableCustomWebid ? this.collect.on(R.CustomWebId, function () {
                                e.tokenReady = !0,
                                    e.collect.emit(R.TokenComplete)
                            }) : this.checkEnv() || (this.enable_ttwebid ? this.completeTtWid(this.cacheToken) : this.check()) : this.remoteWebid()
                    }
                    ,
                    e.prototype.check = function () {
                        this.cacheToken && this.cacheToken.web_id ? this.complete(this.cacheToken) : this.config.disable_webid ? this.complete({
                            web_id: Q(),
                            user_unique_id: this.configManager.get("user_unique_id") || Q()
                        }) : this.remoteWebid()
                    }
                    ,
                    e.prototype.checkEnv = function () {
                        var e = window.navigator.userAgent;
                        if (-1 !== e.indexOf("miniProgram") || -1 !== e.indexOf("MiniProgram")) {
                            var t = y(window.location.href);
                            return !(!t || !t.Web_ID) && (this.complete({
                                web_id: "" + t.Web_ID,
                                user_unique_id: this.configManager.get("user_unique_id") || "" + t.Web_ID
                            }),
                                !0)
                        }
                        return !1
                    }
                    ,
                    e.prototype.remoteWebid = function () {
                        var e = this
                            , t = this.configManager.getUrl("webid")
                            , n = {
                            app_key: this.config.app_key,
                            app_id: this.config.app_id,
                            url: location.href,
                            user_agent: window.navigator.userAgent,
                            referer: document.referrer,
                            user_unique_id: ""
                        };
                        this.collect.emit(E.DEBUGGER_MESSAGE, {
                            type: E.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 发起WEBID请求",
                            logType: "fetch",
                            level: "info",
                            time: Date.now(),
                            data: n
                        });
                        var i = Q();
                        W(t, n, 3e5, !1, function (t) {
                            var n;
                            t && 0 === t.e ? (n = t.web_id,
                                e.collect.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_SDK,
                                    info: "WEBID请求成功",
                                    logType: "fetch",
                                    level: "info",
                                    time: Date.now(),
                                    data: t
                                })) : (n = i,
                                e.collect.configManager.set({
                                    localWebId: i
                                }),
                                e.collect.emit(R.TokenError),
                                e.collect.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_SDK,
                                    info: "WEBID请求返回值异常",
                                    logType: "fetch",
                                    level: "warn",
                                    time: Date.now(),
                                    data: t
                                }),
                                e.collect.logger.warn("appid: " + e.config.app_id + " get webid error, use local webid~")),
                                e.complete({
                                    web_id: e.configManager.get("web_id") || n,
                                    user_unique_id: e.configManager.get("user_unique_id") || n
                                })
                        }, function () {
                            e.complete({
                                web_id: e.configManager.get("web_id") || i,
                                user_unique_id: e.configManager.get("user_unique_id") || i
                            }),
                                e.collect.configManager.set({
                                    localWebId: i
                                }),
                                e.collect.emit(R.TokenError),
                                e.collect.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_SDK,
                                    info: "WEBID请求网络异常",
                                    logType: "fetch",
                                    level: "error",
                                    time: Date.now(),
                                    data: null
                                }),
                                e.collect.logger.warn("appid: " + e.config.app_id + ", get webid error, use local webid~")
                        })
                    }
                    ,
                    e.prototype.complete = function (e) {
                        var t = e.web_id
                            , n = e.user_unique_id;
                        e.timestamp = Date.now(),
                            this.collect.configManager.set({
                                web_id: t,
                                user_unique_id: n
                            }),
                            this.setStorage(e),
                            this.tokenReady = !0,
                            this.collect.emit(R.TokenComplete)
                    }
                    ,
                    e.prototype.completeTtWid = function (e) {
                        var t = e.user_unique_id || ""
                            , n = this.configManager.get("user_unique_id");
                        (n || t) && this.configManager.set({
                            user_unique_id: n || t
                        }),
                            this.setStorage(e),
                            this.tokenReady = !0,
                            this.collect.emit(R.TokenComplete)
                    }
                    ,
                    e.prototype.setUuid = function (e) {
                        if (e && -1 === ["null", "undefined", "Null", "None"].indexOf(e)) {
                            var t = String(e)
                                , n = this.configManager.get("user_unique_id")
                                , i = this.cacheToken && this.cacheToken.user_unique_id;
                            (t !== n || t !== i) && (this.configManager.set({
                                user_unique_id: t
                            }),
                            this.cacheToken || (this.cacheToken = {}),
                                this.cacheToken.user_unique_id = t,
                                this.cacheToken.timestamp = Date.now(),
                                this.setStorage(this.cacheToken),
                                this.collect.emit(R.TokenChange, "uuid"),
                                this.collect.emit(R.SessionReset))
                        } else
                            this.clearUuid()
                    }
                    ,
                    e.prototype.clearUuid = function () {
                        this.config.enable_ttwebid || this.configManager.get("web_id") && this.configManager.get("user_unique_id") !== this.configManager.get("web_id") && (this.configManager.set({
                            user_unique_id: this.configManager.get("web_id")
                        }),
                        this.cacheToken && this.cacheToken.web_id && (this.cacheToken.user_unique_id = this.cacheToken.web_id,
                            this.cacheToken.timestamp = Date.now(),
                            this.setStorage(this.cacheToken)),
                            this.collect.emit(R.TokenReset, "uuid"))
                    }
                    ,
                    e.prototype.setWebId = function (e) {
                        if (e && !this.config.enable_ttwebid) {
                            this.cacheToken && this.cacheToken.web_id ? this.cacheToken.web_id !== e && (this.cacheToken.user_unique_id = this.cacheToken.web_id === this.cacheToken.user_unique_id ? e : this.cacheToken.user_unique_id,
                                this.cacheToken.web_id = e) : (this.cacheToken = {},
                                this.cacheToken.web_id = e,
                                this.cacheToken.user_unique_id = e),
                                this.cacheToken.timestamp = Date.now();
                            var t = this.configManager.get("web_id")
                                , n = this.configManager.get("user_unique_id");
                            n && n !== t || (this.configManager.set({
                                user_unique_id: e
                            }),
                                this.collect.emit(R.TokenChange, "uuid")),
                            t !== e && (this.configManager.set({
                                web_id: e
                            }),
                                this.collect.emit(R.TokenChange, "webid")),
                                this.setStorage(this.cacheToken)
                        }
                    }
                    ,
                    e.prototype.setStorage = function (e) {
                        e._type_ = this.enableCustomWebid ? "custom" : "default",
                            delete e["diss".split("").reverse().join("")],
                            this.enableCookie || this.enable_ttwebid ? (this.storage.setCookie(this.tokenKey, e, this.expiresTime, this.cookieDomain),
                            this.enable_ttwebid && (delete e.web_id,
                                this.storage.setItem(this.tokenKey, e))) : this.storage.setItem(this.tokenKey, e),
                            this.cacheToken = e
                    }
                    ,
                    e.prototype.getReady = function () {
                        return this.tokenReady
                    }
                    ,
                    e.prototype.getTobId = function () {
                        var e = this
                            , t = this.configManager.getUrl("tobid");
                        return new Promise(function (n) {
                                W(t, {
                                    app_id: e.config.app_id,
                                    user_unique_id: e.configManager.get("user_unique_id"),
                                    web_id: e.configManager.get("web_id"),
                                    user_unique_id_type: e.configManager.get("user_unique_id_type")
                                }, 3e4, e.enable_ttwebid, function (e) {
                                    e && 0 === e.e ? n(e.tobid) : n("")
                                }, function () {
                                    n("")
                                })
                            }
                        )
                    }
                    ,
                    e
            }()
                , ee = function () {
                function e(e, t) {
                    this.devToolReady = !1,
                        this.devToolOrigin = "*",
                        this.sendAlready = !1,
                        this.eventVerifyReady = !1,
                        this.collect = e,
                        this.config = t,
                        this.app_id = t.app_id;
                    var n = e.adapters
                        , i = n.storage
                        , r = n.fetch;
                    this.cacheStorgae = new i(!1, "session"),
                        this.fetch = r,
                        this.eventVerifyInfo = [],
                        this.sdk_type = P.includes("tob") ? "tob" : "inner",
                        this.filterEvent = ["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "bav2b_click", "bav2b_page_exposure", "_be_active", "predefine_pageview", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append", "predefine_page_alive", "predefine_page_close", "abtest_exposure"],
                    t.enable_debug && this.load()
                }

                return e.prototype.loadScript = function (e) {
                    try {
                        var t = document.createElement("script");
                        t.src = e,
                            t.onerror = function () {
                            }
                            ,
                            t.onload = function () {
                            }
                            ,
                            document.getElementsByTagName("body")[0].appendChild(t)
                    } catch (e) {
                    }
                }
                    ,
                    e.prototype.load = function () {
                        var e, t, n, i;
                        return e = this,
                            t = void 0,
                            i = function () {
                                var e, t;
                                return function (e, t) {
                                    var n, i, r, o, a = {
                                        label: 0,
                                        sent: function () {
                                            if (1 & r[0])
                                                throw r[1];
                                            return r[1]
                                        },
                                        trys: [],
                                        ops: []
                                    };
                                    return o = {
                                        next: s(0),
                                        throw: s(1),
                                        return: s(2)
                                    },
                                    "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                                            return this
                                        }
                                    ),
                                        o;

                                    function s(o) {
                                        return function (s) {
                                            return function (o) {
                                                if (n)
                                                    throw TypeError("Generator is already executing.");
                                                for (; a;)
                                                    try {
                                                        if (n = 1,
                                                        i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                                            return r;
                                                        switch (i = 0,
                                                        r && (o = [2 & o[0], r.value]),
                                                            o[0]) {
                                                            case 0:
                                                            case 1:
                                                                r = o;
                                                                break;
                                                            case 4:
                                                                return a.label++,
                                                                    {
                                                                        value: o[1],
                                                                        done: !1
                                                                    };
                                                            case 5:
                                                                a.label++,
                                                                    i = o[1],
                                                                    o = [0];
                                                                continue;
                                                            case 7:
                                                                o = a.ops.pop(),
                                                                    a.trys.pop();
                                                                continue;
                                                            default:
                                                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                                    a = 0;
                                                                    continue
                                                                }
                                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                                    a.label = o[1];
                                                                    break
                                                                }
                                                                if (6 === o[0] && a.label < r[1]) {
                                                                    a.label = r[1],
                                                                        r = o;
                                                                    break
                                                                }
                                                                if (r && a.label < r[2]) {
                                                                    a.label = r[2],
                                                                        a.ops.push(o);
                                                                    break
                                                                }
                                                                r[2] && a.ops.pop(),
                                                                    a.trys.pop();
                                                                continue
                                                        }
                                                        o = t.call(e, a)
                                                    } catch (e) {
                                                        o = [6, e],
                                                            i = 0
                                                    } finally {
                                                        n = r = 0
                                                    }
                                                if (5 & o[0])
                                                    throw o[1];
                                                return {
                                                    value: o[0] ? o[1] : void 0,
                                                    done: !0
                                                }
                                            }([o, s])
                                        }
                                    }
                                }(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]),
                                                e = y(window.location.href),
                                                1 === this.getStorage() || e.open_devtool_web || parseInt(e.app_id) === this.app_id ? (this.loadBaseInfo(),
                                                    this.loadHook(),
                                                    this.setStorage(),
                                                    this.addLintener(),
                                                    this.loadDebuggerModule(),
                                                    this.loadDevTool(),
                                                    [4, this.fetchEventInfo()]) : [2];
                                        case 1:
                                            return t = n.sent(),
                                                this.sendData("devtool:web:verify", t.verifyStatus),
                                                this.eventVerifyInfo = t.data,
                                                [3, 3];
                                        case 2:
                                            return n.sent(),
                                                [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            }
                            ,
                            new (n = void 0,
                                n = Promise)(function (r, o) {
                                    function a(e) {
                                        try {
                                            c(i.next(e))
                                        } catch (e) {
                                            o(e)
                                        }
                                    }

                                    function s(e) {
                                        try {
                                            c(i.throw(e))
                                        } catch (e) {
                                            o(e)
                                        }
                                    }

                                    function c(e) {
                                        e.done ? r(e.value) : new n(function (t) {
                                                t(e.value)
                                            }
                                        ).then(a, s)
                                    }

                                    c((i = i.apply(e, t || [])).next())
                                }
                            )
                    }
                    ,
                    e.prototype.getStorage = function () {
                        return this.cacheStorgae.getItem("__applog_devtool_web_" + this.app_id)
                    }
                    ,
                    e.prototype.setStorage = function () {
                        this.cacheStorgae.setItem("__applog_devtool_web_" + this.app_id, 1)
                    }
                    ,
                    e.prototype.loadDevTool = function () {
                        this.loadScript("https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/devtool/debug-web.0.0.2.js")
                    }
                    ,
                    e.prototype.loadBaseInfo = function () {
                        var e = this;
                        this.info = [{
                            title: "基本信息",
                            type: 1,
                            infoName: {
                                app_id: this.config.app_id,
                                channel: this.config.channel,
                                上报域名: this.collect.configManager.getDomain(),
                                SDK版本: P,
                                SDK引入方式: "npm"
                            }
                        }, {
                            title: "用户信息",
                            type: 2,
                            infoName: {
                                uuid: this.collect.configManager.get("user").user_unique_id || "",
                                web_id: this.collect.configManager.get("user").web_id || "",
                                ssid: "点击获取SSID"
                            }
                        }, {
                            title: "公共参数信息",
                            type: 2,
                            infoName: {
                                浏览器: this.collect.configManager.get("browser"),
                                浏览器版本: this.collect.configManager.get("browser_version"),
                                平台: this.collect.configManager.get("platform"),
                                设备型号: this.collect.configManager.get("device_model"),
                                操作系统: this.collect.configManager.get("os_name"),
                                操作系统版本: this.collect.configManager.get("os_version"),
                                屏幕分辨率: this.collect.configManager.get("resolution"),
                                来源: this.collect.configManager.get("referrer"),
                                自定义信息: ""
                            }
                        }, {
                            title: "配置信息",
                            type: 3,
                            infoName: {
                                全埋点: !!this.config.autotrack,
                                停留时长: !!this.config.enable_stay_duration
                            }
                        }, {
                            title: "A/B配置信息",
                            type: 4,
                            infoName: {
                                "A/B实验": !!this.config.enable_ab_test
                            }
                        }, {
                            title: "客户端信息",
                            type: 3,
                            infoName: {
                                打通开关: !!this.config.Native
                            }
                        }],
                            this.log = [],
                            this.event = [],
                            this.collect.on(R.Ready, function () {
                                e.info[1].infoName.uuid = e.collect.configManager.get("user").user_unique_id,
                                    e.info[1].infoName.web_id = e.collect.configManager.get("user").web_id,
                                    e.info[2].infoName["自定义信息"] = JSON.stringify(e.collect.configManager.get("custom")),
                                e.config.enable_ab_test && (e.info[4].infoName["已曝光VID"] = e.collect.configManager.getAbVersion(),
                                    e.info[4].infoName["A/B域名"] = e.config.ab_channel_domain || d(M[e.config.channel]),
                                    e.info[4].infoName["全部配置"] = e.collect.configManager.getAbData()),
                                e.config.Native && (e.info[5].infoName["是否打通"] = !!e.collect.bridgeReport)
                            })
                    }
                    ,
                    e.prototype.loadHook = function () {
                        var e = this;
                        this.collect.stop(),
                            this.collect.on(E.DEBUGGER_MESSAGE, function (t) {
                                switch (t.type) {
                                    case E.DEBUGGER_MESSAGE_SDK:
                                        var n = {
                                            time: t.time,
                                            type: t.logType || "sdk",
                                            level: t.level,
                                            name: t.info,
                                            show: !0,
                                            levelShow: !0,
                                            needDesc: !!t.data
                                        };
                                        return t.data && (n.desc = {
                                            content: JSON.stringify(t.data)
                                        }),
                                            e.updateLog(n),
                                            t.secType && "AB" === t.secType ? (e.info[4].infoName["已曝光VID"] = e.collect.configManager.getAbVersion(),
                                                e.info[4].infoName["全部配置"] = e.collect.configManager.getAbData()) : "USER" === t.secType && (e.info[1].infoName.uuid = e.collect.configManager.get("user").user_unique_id,
                                                e.info[1].infoName.web_id = e.collect.configManager.get("user").web_id),
                                            void e.updateInfo();
                                    case E.DEBUGGER_MESSAGE_EVENT:
                                        if (t.data && t.data.length) {
                                            var i = t.data[0]
                                                , r = i.events
                                                , o = i.header;
                                            if (o.custom = JSON.parse(o.custom),
                                                !r.length)
                                                return;
                                            r.forEach(function (n) {
                                                n.checkShow = !0,
                                                    n.searchShow = !0,
                                                    n.type = -1 !== e.filterEvent.indexOf(n.event) ? "sdk" : "cus",
                                                    n.type = e.collect.bridgeReport ? "bridge" : n.type,
                                                    n.params = JSON.parse(n.params),
                                                "fail" === t.status && (n.info = {
                                                    message: "code: " + t.code + "， msg: " + t.failType
                                                },
                                                    n.failType = t.failType);
                                                var i = !1
                                                    , r = !1
                                                    , o = [];
                                                e.eventVerifyInfo && e.eventVerifyInfo.length && (e.eventVerifyInfo.forEach(function (e) {
                                                    e.eventStatus = !1
                                                }),
                                                    e.eventVerifyInfo.forEach(function (t) {
                                                        n.event === t.name && (r = !0,
                                                            i = !0,
                                                            n.verifyStatus = t.status,
                                                            Object.keys(n.params).forEach(function (i) {
                                                                if ("event_index" !== i) {
                                                                    var a = {};
                                                                    a.paramsKey = i,
                                                                        a.paramsKeyValue = n.params["" + i],
                                                                        a.paramsStatus = !1,
                                                                        a.paramsStatusInfo = "属性未录入",
                                                                        t.params.forEach(function (t) {
                                                                            i === t.name && (t.checked = !0,
                                                                                typeof n.params["" + i] !== e.formatParamsType(t.value_type) ? a.paramsStatusInfo = "属性类型错误，应为" + e.formatParamsType(t.value_type) : (a.paramsStatus = !0,
                                                                                    a.paramsStatusInfo = ""))
                                                                        }),
                                                                        o.push(a),
                                                                    a.paramsStatusInfo && (r = !1)
                                                                }
                                                            }),
                                                            t.params.forEach(function (e) {
                                                                e.checked || (r = !1,
                                                                    o.push({
                                                                        paramsKey: e.name,
                                                                        paramsStatus: !1,
                                                                        paramsStatusInfo: "缺少属性" + e.name
                                                                    }))
                                                            }))
                                                    })),
                                                    n.reportStatus = "success" === t.status,
                                                    n.paramsInfo = o,
                                                    n.eventStatus = r && "success" === t.status,
                                                    n.eventRecord = i
                                            }),
                                                e.updateEvent(i)
                                        }
                                        return
                                }
                            })
                    }
                    ,
                    e.prototype.formatParamsType = function (e) {
                        switch (e) {
                            case 0:
                                return "string";
                            case 1:
                            case 2:
                                return "number";
                            case 3:
                                return "boolean"
                        }
                    }
                    ,
                    e.prototype.fetchEventInfo = function () {
                        var e = this;
                        try {
                            return new Promise(function (t) {
                                    var n = d("1fz22z22z1nz21z4mz4bz4bz18z1nz1nz1jz1mz1ez1fz1mz1kz1cz4az19z27z22z1cz1bz18z1lz1az1cz4az1lz1cz22z4bz18z1nz1nz1jz1mz1ez1bz1cz24z22z1mz1mz1jz21z4bz1mz1nz1cz1lz18z1nz1gz4bz24z4dz4bz18z1nz1nz16z1jz1mz1ez16z1kz1cz22z18") + "?app_id=" + e.app_id + "&t=" + e.sdk_type + "&nc=false";
                                    e.fetch(n, null, 3e3, !1, function (n) {
                                        e.eventVerifyReady = !0,
                                            e.collect.reStart(),
                                            t({
                                                data: n.data,
                                                verifyStatus: !0
                                            })
                                    }, function () {
                                        e.eventVerifyReady = !0,
                                            e.collect.reStart(),
                                            t({
                                                data: [],
                                                verifyStatus: !1
                                            })
                                    }, "", "GET")
                                }
                            )
                        } catch (e) {
                            return {
                                data: [],
                                verifyStatus: !1
                            }
                        }
                    }
                    ,
                    e.prototype.addLintener = function () {
                        var e = this;
                        window.addEventListener("message", function (t) {
                            if (t.origin === location.origin) {
                                if (t && t.data && "devtool:web:ready" === t.data.type) {
                                    if (e.devToolOrigin = t.origin,
                                        e.devToolReady = !0,
                                        e.sendAlready)
                                        return;
                                    e.sendData("devtool:web:init", {
                                        info: e.info,
                                        log: e.log,
                                        event: e.event,
                                        appid: e.app_id
                                    }),
                                        e.sendAlready = !0
                                }
                                t && t.data && "devtool:web:ssid" === t.data.type && e.collect.getToken(function (t) {
                                    e.info[1].infoName.ssid = t.tobid,
                                        e.updateInfo()
                                })
                            }
                        })
                    }
                    ,
                    e.prototype.sendData = function (e, t) {
                        try {
                            (window.opener || window.parent).postMessage({
                                type: e,
                                payload: t
                            }, this.devToolOrigin)
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.updateInfo = function () {
                        this.devToolReady && this.sendData("devtool:web:info", this.info)
                    }
                    ,
                    e.prototype.updateLog = function (e) {
                        this.devToolReady ? this.sendData("devtool:web:log", e) : this.log.push(e)
                    }
                    ,
                    e.prototype.updateEvent = function (e) {
                        this.devToolReady || this.eventVerifyReady ? this.sendData("devtool:web:event", e) : this.event.push(e)
                    }
                    ,
                    e.prototype.loadDebuggerModule = function () {
                        var e = document.head || document.getElementsByTagName("head")[0]
                            , t = document.createElement("style");
                        t.appendChild(document.createTextNode("#debugger-applog-web {\n      position: fixed;\n      width: 50px;\n      height: 50px;\n      background-image: url('https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/devtool/applog.png');;\n      bottom: 5%;\n      right: 10%;\n      cursor: pointer;\n      z-index:100;\n      background-size: 50px;\n    }")),
                            e.appendChild(t);
                        var n = document.createElement("div");
                        n.innerHTML = '<div id="debugger-applog-web" class="debugger-applog-web"></div>';
                        var i = document.createElement("div");
                        i.innerHTML = '<div id="debugger-container" class="debugger-container"></div>',
                            document.getElementsByTagName("body")[0].appendChild(n),
                            document.getElementsByTagName("body")[0].appendChild(i),
                            document.getElementById("debugger-applog-web").addEventListener("click", function () {
                                (window.opener || window.parent).postMessage({
                                    type: "devtool:web:open-draw"
                                }, location.origin)
                            })
                    }
                    ,
                    e
            }()
                , et = function () {
                function e(e) {
                    this.disableAutoPageView = !1,
                        this.bridgeReport = !1,
                        this.staging = !1,
                        this.pluginInstances = [],
                        this.sended = !1,
                        this.started = !1,
                        this.destroyInstance = !1,
                        this.sdkReady = !1,
                        this.adapters = {},
                        this.loadType = "base",
                        this.sdkStop = !1,
                        this.name = e,
                        this.hook = new u,
                        this.remotePlugin = new Map,
                        this.Types = R,
                        this.adapters.fetch = W,
                        this.adapters.storage = I,
                        this.loadType = "full"
                }

                return e.usePlugin = function (t, n, i) {
                    if (n) {
                        for (var r = !1, o = 0, a = e.plugins.length; o < a; o++)
                            if (e.plugins[o].name === n) {
                                e.plugins[o].plugin = t,
                                    e.plugins[o].options = i || {},
                                    r = !0;
                                break
                            }
                        r || e.plugins.push({
                            name: n,
                            plugin: t,
                            options: i
                        })
                    } else
                        e.plugins.push({
                            plugin: t
                        })
                }
                    ,
                    e.prototype.usePlugin = function (e, t, n) {
                        e && ("full" === this.loadType && this.remotePlugin.get(e) || (t ? "string" == typeof t ? this.remotePlugin.get(e) || this.remotePlugin.set(e, {
                            src: t,
                            call: n
                        }) : this.remotePlugin.get(e) || this.remotePlugin.set(e, {
                            instance: t
                        }) : this.remotePlugin.get(e) || this.remotePlugin.set(e, "sdk")))
                    }
                    ,
                    e.prototype.init = function (t) {
                        var n, i = this;
                        (this.logger = new j(this.name, t.log),
                            this.inited) ? this.logger.warn("[instance: " + this.name + "], every instance's api: init,  can be call only one time!") : t && l(t) ? t.app_id && "number" == typeof (n = t.app_id) && !isNaN(n) ? t.app_key && "string" != typeof t.app_key ? this.logger.warn("app_key param is error, must be string, please check!") : (t.channel_domain || -1 !== ["cn", "sg", "va"].indexOf(t.channel) || (this.logger.warn("channel must be `cn`, `sg`,`va` !"),
                            t.channel = "cn"),
                            this.spider = new V,
                            this.spider.checkSpider(t) ? this.logger.warn("your env may be a spider, can not report!") : (this.appBridge = new $(this, t.enable_native),
                                this.bridgeReport = this.appBridge.bridgeInject(),
                                this.configManager = new z(this, t),
                                this.debugger = new ee(this, t),
                                this.initConfig = t,
                                this.emit(R.Init),
                                this.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_SDK,
                                    info: "SDK 执行INIT",
                                    data: t,
                                    level: "info",
                                    time: Date.now()
                                }),
                            t.disable_auto_pv && (this.disableAutoPageView = !0),
                            this.bridgeReport || (this.configManager.set({
                                app_id: t.app_id
                            }),
                                this.eventManager = new X,
                                this.tokenManager = new Z,
                                this.sessionManager = new Y,
                                Promise.all([new Promise(function (e) {
                                        i.once(R.TokenComplete, function () {
                                            e(!0)
                                        })
                                    }
                                ), new Promise(function (e) {
                                        i.once(R.Start, function () {
                                            e(!0)
                                        })
                                    }
                                )]).then(function () {
                                    try {
                                        e.plugins.reduce(function (e, t) {
                                            var n = t.plugin
                                                , r = t.options
                                                , o = Object.assign(i.initConfig, r)
                                                , a = new n;
                                            return a.apply(i, o),
                                                e.push(a),
                                                e
                                        }, i.pluginInstances)
                                    } catch (e) {
                                        i.emit(E.DEBUGGER_MESSAGE, {
                                            type: E.DEBUGGER_MESSAGE_SDK,
                                            info: "发生了异常",
                                            level: "error",
                                            time: Date.now(),
                                            data: e.message
                                        })
                                    }
                                    i.sdkReady = !0,
                                        i.emit(R.Ready),
                                        i.emit(E.DEBUGGER_MESSAGE, {
                                            type: E.DEBUGGER_MESSAGE_SDK,
                                            info: "SDK 初始化完成",
                                            time: Date.now(),
                                            level: "info",
                                            data: i.configManager.get("user")
                                        }),
                                        i.logger.info("appid: " + t.app_id + ", userInfo:" + JSON.stringify(i.configManager.get("user"))),
                                        i.logger.info("appid: " + t.app_id + ", sdk is ready, version type is " + i.loadType + ", version is " + P + ", you can report now !!!"),
                                    t.disable_auto_pv && (i.disableAutoPageView = !0);
                                    try {
                                        "full" === i.loadType && (t.enable_ab_test || t.autotrack) && (window.opener || window.parent).postMessage("[tea-sdk]ready", "*")
                                    } catch (e) {
                                        i.emit(E.DEBUGGER_MESSAGE, {
                                            type: E.DEBUGGER_MESSAGE_SDK,
                                            info: "发生了异常",
                                            level: "error",
                                            time: Date.now(),
                                            data: e.message
                                        })
                                    }
                                    i.pageView(),
                                        i.on(R.TokenChange, function (e) {
                                            "webid" === e && i.pageView(),
                                                i.logger.info("appid: " + t.app_id + " token change, new userInfo:" + JSON.stringify(i.configManager.get("user"))),
                                                i.emit(E.DEBUGGER_MESSAGE, {
                                                    type: E.DEBUGGER_MESSAGE_SDK,
                                                    info: "SDK 设置了用户信息",
                                                    time: Date.now(),
                                                    secType: "USER",
                                                    level: "info",
                                                    data: i.configManager.get("user")
                                                })
                                        }),
                                        i.on(R.TokenReset, function () {
                                            i.logger.info("appid: " + t.app_id + " token reset, new userInfo:" + JSON.stringify(i.configManager.get("user"))),
                                                i.emit(E.DEBUGGER_MESSAGE, {
                                                    type: E.DEBUGGER_MESSAGE_SDK,
                                                    info: "SDK 重置了用户信息",
                                                    time: Date.now(),
                                                    secType: "USER",
                                                    level: "info",
                                                    data: i.configManager.get("user")
                                                })
                                        }),
                                        i.on(R.RouteChange, function (e) {
                                            e.init || t.disable_route_report || i.pageView()
                                        })
                                }),
                                this.tokenManager.apply(this, t),
                                this.eventManager.apply(this, t),
                                this.sessionManager.apply(this, t)),
                                this.inited = !0)) : this.logger.warn("app_id param is error, must be number, please check!") : this.logger.warn("init params error,please check!")
                    }
                    ,
                    e.prototype.config = function (e) {
                        if (this.inited) {
                            if (e && l(e)) {
                                if (this.bridgeReport)
                                    this.appBridge.setConfig(e);
                                else {
                                    e._staging_flag && 1 === e._staging_flag && (this.staging = !0),
                                    e.disable_auto_pv && (this.disableAutoPageView = !0,
                                        delete e.disable_auto_pv);
                                    var t = r({}, e)
                                        , n = this.initConfig.configPersist || this.initConfig.config_persist || !1;
                                    if (this.initConfig && n) {
                                        var i = this.configManager.getStore();
                                        i && (t = Object.assign(i, e)),
                                            this.configManager.setStore(e)
                                    }
                                    t.web_id,
                                        t.user_unique_id;
                                    var o = function (e, t) {
                                        var n = {};
                                        for (var i in e)
                                            Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                            var r = 0;
                                            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                                                0 > t.indexOf(i[r]) && (n[i[r]] = e[i[r]])
                                        }
                                        return n
                                    }(t, ["web_id", "user_unique_id"]);
                                    this.configManager.set(o),
                                    t.hasOwnProperty("web_id") && this.emit(R.ConfigWebId, t.web_id),
                                    t.hasOwnProperty("user_unique_id") && this.emit(R.ConfigUuid, t.user_unique_id),
                                        this.emit(E.DEBUGGER_MESSAGE, {
                                            type: E.DEBUGGER_MESSAGE_SDK,
                                            info: "SDK 执行CONFIG",
                                            level: "info",
                                            time: Date.now(),
                                            data: t
                                        })
                                }
                            } else
                                this.logger.warn("config params is error, please check")
                        } else
                            this.logger.warn("config must be use after function init")
                    }
                    ,
                    e.prototype.setUserUniqueID = function (e) {
                        this.config({
                            user_unique_id: e
                        })
                    }
                    ,
                    e.prototype.setHeaderInfo = function (e, t) {
                        var n = {};
                        n[e] = t,
                            this.config(n)
                    }
                    ,
                    e.prototype.removeHeaderInfo = function (e) {
                        var t = {};
                        t[e] = void 0,
                            this.config(t)
                    }
                    ,
                    e.prototype.setDomain = function (e) {
                        this.configManager && this.configManager.setDomain(e),
                            this.emit(R.ConfigDomain)
                    }
                    ,
                    e.prototype.getConfig = function (e) {
                        return this.configManager.get(e)
                    }
                    ,
                    e.prototype.send = function () {
                        this.start()
                    }
                    ,
                    e.prototype.start = function () {
                        this.inited && !this.sended && (this.sended = !0,
                            this.started = !0,
                            this.emit(R.Start),
                            this.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行START",
                                level: "info",
                                time: Date.now()
                            }),
                        this.bridgeReport && (this.pageView(),
                            this.emit(R.Ready)))
                    }
                    ,
                    e.prototype.event = function (e, t) {
                        var n = this;
                        try {
                            var i = [];
                            if (Array.isArray(e))
                                e.forEach(function (e) {
                                    var t = n.processEvent(e[0], e[1] || {});
                                    t && i.push(t)
                                });
                            else {
                                var r = this.processEvent(e, t);
                                if (!r)
                                    return;
                                i.push(r)
                            }
                            this.bridgeReport ? i.forEach(function (e) {
                                var t = e.event
                                    , i = e.params;
                                n.appBridge.onEventV3(t, JSON.stringify(i))
                            }) : i.length && (this.emit(R.Event, i),
                                this.emit(R.SessionResetTime))
                        } catch (e) {
                            this.logger.warn("something error, please check"),
                                this.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_SDK,
                                    info: "发生了异常",
                                    level: "error",
                                    time: Date.now(),
                                    data: e.message
                                })
                        }
                    }
                    ,
                    e.prototype.beconEvent = function (e, t) {
                        if (Array.isArray(e))
                            this.logger.warn("beconEvent not support batch report, please check");
                        else {
                            var n = []
                                , i = this.processEvent(e, t || {});
                            i && (n.push(i),
                            n.length && (this.emit(R.BeconEvent, n),
                                this.emit(R.SessionResetTime)))
                        }
                    }
                    ,
                    e.prototype.processEvent = function (e, t) {
                        void 0 === t && (t = {});
                        try {
                            if (!e)
                                return this.logger.warn("eventName is null， please check"),
                                    null;
                            var n = e;
                            /^event\./.test(e) && (n = e.slice(6));
                            var i = t;
                            "object" != typeof i && (i = {}),
                                i.profile ? delete i.profile : i.event_index = f();
                            var r = void 0;
                            return i.local_ms ? (r = i.local_ms,
                                delete i.local_ms) : r = +new Date,
                                {
                                    event: n,
                                    params: i,
                                    local_time_ms: r,
                                    is_bav: this.initConfig && this.initConfig.autotrack ? 1 : 0
                                }
                        } catch (n) {
                            return this.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: n.message
                            }),
                                {
                                    event: e,
                                    params: t
                                }
                        }
                    }
                    ,
                    e.prototype.filterEvent = function (e) {
                        this.eventFilter = e
                    }
                    ,
                    e.prototype.on = function (e, t) {
                        this.hook.on(e, t)
                    }
                    ,
                    e.prototype.once = function (e, t) {
                        this.hook.once(e, t)
                    }
                    ,
                    e.prototype.off = function (e, t) {
                        this.hook.off(e, t)
                    }
                    ,
                    e.prototype.emit = function (e, t, n) {
                        this.hook.emit(e, t, n)
                    }
                    ,
                    e.prototype.set = function (e) {
                        this.hook.set(e)
                    }
                    ,
                    e.prototype.stop = function () {
                        this.sdkStop = !0
                    }
                    ,
                    e.prototype.reStart = function () {
                        this.sdkStop = !1
                    }
                    ,
                    e.prototype.pageView = function () {
                        this.disableAutoPageView || this.predefinePageView()
                    }
                    ,
                    e.prototype.predefinePageView = function (e) {
                        if (void 0 === e && (e = {}),
                            this.inited) {
                            var t = {
                                title: document.title || location.pathname,
                                url: location.href,
                                url_path: location.pathname,
                                time: Date.now(),
                                referrer: window.document.referrer,
                                $is_first_time: "" + (this.configManager && this.configManager.is_first_time || !1)
                            }
                                , n = r({}, t, e);
                            this.event("predefine_pageview", n)
                        }
                    }
                    ,
                    e.prototype.clearEventCache = function () {
                        this.emit(R.CleanEvents)
                    }
                    ,
                    e.prototype.setWebIDviaUnionID = function (e) {
                        if (e) {
                            var t = b(e);
                            this.config({
                                web_id: "" + t,
                                wechat_unionid: e
                            }),
                                this.emit(R.CustomWebId)
                        }
                    }
                    ,
                    e.prototype.setWebId = function (e) {
                        this.config({
                            web_id: "" + e
                        })
                    }
                    ,
                    e.prototype.setWebIDviaOpenID = function (e) {
                        if (e) {
                            var t = b(e);
                            this.config({
                                web_id: "" + t,
                                wechat_openid: e
                            }),
                                this.emit(R.CustomWebId)
                        }
                    }
                    ,
                    e.prototype.setNativeAppId = function (e) {
                        this.bridgeReport && this.appBridge.setNativeAppId(e)
                    }
                    ,
                    e.prototype.resetStayDuration = function (e, t, n) {
                        this.emit(R.ResetStay, {
                            url_path: e,
                            title: t,
                            url: n
                        }, R.Stay)
                    }
                    ,
                    e.prototype.resetStayParams = function (e, t, n) {
                        void 0 === e && (e = ""),
                        void 0 === t && (t = ""),
                        void 0 === n && (n = ""),
                            this.emit(R.SetStay, {
                                url_path: e,
                                title: t,
                                url: n
                            }, R.Stay)
                    }
                    ,
                    e.prototype.getToken = function (e, t) {
                        var n = this;
                        if (this.inited) {
                            var i = !1
                                , o = function (t) {
                                if (!i) {
                                    i = !0;
                                    var o = n.configManager.get().user;
                                    return t && (o.tobid = t,
                                        o["diss".split("").reverse().join("")] = t),
                                        e(r({}, o))
                                }
                            }
                                , a = function () {
                                n.tokenManager.getTobId().then(function (e) {
                                    o(e)
                                })
                            };
                            this.sdkReady ? a() : (t && setTimeout(function () {
                                o()
                            }, t),
                                this.on(R.Ready, function () {
                                    a()
                                }))
                        }
                    }
                    ,
                    e.prototype.profileSet = function (e) {
                        this.bridgeReport ? this.appBridge.profileSet(JSON.stringify(e)) : this.emit(R.ProfileSet, e, R.Profile),
                            this.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行profileSet",
                                level: "info",
                                time: Date.now(),
                                data: e
                            })
                    }
                    ,
                    e.prototype.profileSetOnce = function (e) {
                        this.bridgeReport ? this.appBridge.profileSetOnce(JSON.stringify(e)) : this.emit(R.ProfileSetOnce, e, R.Profile),
                            this.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行profileSetOnce",
                                level: "info",
                                time: Date.now(),
                                data: e
                            })
                    }
                    ,
                    e.prototype.profileIncrement = function (e) {
                        this.bridgeReport ? this.appBridge.profileIncrement(JSON.stringify(e)) : this.emit(R.ProfileIncrement, e, R.Profile),
                            this.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行profileIncrement",
                                level: "info",
                                time: Date.now(),
                                data: e
                            })
                    }
                    ,
                    e.prototype.profileUnset = function (e) {
                        this.bridgeReport ? this.appBridge.profileUnset(e) : this.emit(R.ProfileUnset, e, R.Profile),
                            this.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行profileUnset",
                                level: "info",
                                time: Date.now(),
                                data: e
                            })
                    }
                    ,
                    e.prototype.profileAppend = function (e) {
                        this.bridgeReport ? this.appBridge.profileAppend(JSON.stringify(e)) : this.emit(R.ProfileAppend, e, R.Profile),
                            this.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行profileAppend",
                                level: "info",
                                time: Date.now(),
                                data: e
                            })
                    }
                    ,
                    e.prototype.setExternalAbVersion = function (e) {
                        this.emit(R.AbExternalVersion, "string" == typeof e && e ? ("" + e).trim() : null, R.Ab)
                    }
                    ,
                    e.prototype.getVar = function (e, t, n) {
                        this.emit(R.AbVar, {
                            name: e,
                            defaultValue: t,
                            callback: n
                        }, R.Ab)
                    }
                    ,
                    e.prototype.getABconfig = function (e, t) {
                        this.emit(R.AbConfig, {
                            params: e,
                            callback: t
                        }, R.Ab)
                    }
                    ,
                    e.prototype.getAbSdkVersion = function () {
                        return this.configManager.getAbVersion()
                    }
                    ,
                    e.prototype.onAbSdkVersionChange = function (e) {
                        var t = this;
                        return this.emit(R.AbVersionChangeOn, e, R.Ab),
                            function () {
                                t.emit(R.AbVersionChangeOff, e, R.Ab)
                            }
                    }
                    ,
                    e.prototype.offAbSdkVersionChange = function (e) {
                        this.emit(R.AbVersionChangeOff, e, R.Ab)
                    }
                    ,
                    e.prototype.openOverlayer = function () {
                        this.emit(R.AbOpenLayer, "", R.Ab)
                    }
                    ,
                    e.prototype.closeOverlayer = function () {
                        this.emit(R.AbCloseLayer, "", R.Ab)
                    }
                    ,
                    e.prototype.getAllVars = function (e) {
                        this.emit(R.AbAllVars, e, R.Ab)
                    }
                    ,
                    e.prototype.autoInitializationRangers = function (e) {
                        var t, n, i, r, o, a, s;
                        t = e.app_id,
                            n = e.channel,
                            i = e.onTokenReady,
                            r = K[n] + "/webid",
                            o = new I(!1),
                            a = "__tea_cache_tokens_" + t,
                            (s = o.getItem(a)) && s.web_id ? i(s.web_id) : J(r, {
                                app_key: "",
                                app_id: t,
                                url: location.href,
                                user_agent: window.navigator.userAgent,
                                referer: document.referrer
                            }, 3e3, !1, function (e) {
                                if (e && 0 === e.e) {
                                    i(e.web_id);
                                    var t = {
                                        web_id: e.web_id,
                                        user_unique_id: e.web_id,
                                        timestamp: Date.now()
                                    };
                                    o.setItem(a, t)
                                } else
                                    i("")
                            }, function () {
                                i("")
                            }, !0)
                    }
                    ,
                    e.prototype.destoryInstace = function () {
                        this.destroyInstance || (this.destroyInstance = !0,
                            this.off(R.TokenComplete))
                    }
                    ,
                    e.plugins = [],
                    e
            }()
                , en = "__rangers_ab_style__"
                , ei = {}
                , er = []
                , eo = function (e) {
                e.length && e.forEach(function (e) {
                    er.push(e)
                })
            };

            function ea(e, t, n, i) {
                var r = e && e.source || window.opener || window.parent
                    , o = e && e.origin || i || "*";
                r.postMessage(JSON.stringify({
                    type: t,
                    payload: n
                }), o)
            }

            function es(e, t) {
                ei[e] = ei[e] || [],
                    ei[e].push(t)
            }

            function ec(e) {
                if (er.some(function (e) {
                    return "*" === e
                }) || er.some(function (t) {
                    return e.origin.indexOf(t) > -1
                })) {
                    var t = e.data;
                    if ("string" == typeof e.data)
                        try {
                            t = JSON.parse(e.data)
                        } catch (e) {
                            t = void 0
                        }
                    if (t) {
                        var n = t.type
                            , i = t.payload;
                        ei[n] && ei[n].forEach(function (t) {
                            "function" == typeof t && t(e, i)
                        })
                    }
                }
            }

            function eu(e, t) {
                var n = r({}, e);
                delete n.filter,
                    (window.opener || window.parent).postMessage({
                        type: "tea:sdk:info",
                        config: n,
                        version: t
                    }, "*"),
                    window.addEventListener("message", ec, !1)
            }

            var el = ""
                , eh = !1;

            function ef(e) {
                var t = e.event
                    , n = e.editorUrl;
                e.collectInstance,
                    e.fromSession,
                eh || (eh = !0,
                    g(n, function () {
                        ea(t, "abEditorScriptloadSuccess")
                    }, function () {
                        t && ea(t, "abEditorScriptloadError"),
                            eh = !1
                    }))
            }

            (eq = eW || (eW = {}))[eq.Var = 0] = "Var",
                eq[eq.All = 1] = "All";
            var ed = function () {
                function e() {
                    this.fetchStatus = "no",
                        this.refreshFetchStatus = "complete",
                        this.versions = [],
                        this.extVersions = [],
                        this.mulilinkVersions = [],
                        this.enable_multilink = !1,
                        this.enable_ab_visual = !1,
                        this.editMode = !1,
                        this.callbacks = [],
                        this.data = null,
                        this.changeListener = new Map,
                        this.readyStatus = !1,
                        this.exposureCache = []
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    if (this.collect = e,
                        this.config = t,
                        this.config.enable_ab_test) {
                        var i = t.enable_multilink
                            , r = t.ab_channel_domain
                            , o = t.enable_ab_visual
                            , a = t.ab_cross
                            , s = t.ab_cookie_domain
                            , c = r || d(M[t.channel || "cn"])
                            , u = e.adapters
                            , l = u.storage
                            , h = u.fetch;
                        this.cacheStorgae = new l(!1),
                            this.fetch = h,
                            this.enable_multilink = i,
                            this.enable_ab_visual = o,
                            this.abKey = "__tea_sdk_ab_version_" + t.app_id,
                            this.ab_cross = a,
                            this.ab_cookie_domain = s || "",
                            this.fetchUrl = c + "/service/2/abtest_config/",
                            this.reportUrl = "" + e.configManager.getUrl("event"),
                            this.exposureLimit = t.exposure_limit || 20,
                            this.ab_batch_time = t.ab_batch_time || 500;
                        var f = this.collect.Types;
                        this.types = f,
                            this.collect.on(f.TokenChange, function (e) {
                                "uuid" === e && n.readyStatus && (n.clearCache(),
                                    n.fetchAB())
                            }),
                            this.collect.on(f.TokenReset, function (e) {
                                "uuid" === e && n.readyStatus && (n.clearCache(),
                                    n.fetchAB())
                            }),
                            this.collect.on(f.AbVar, function (e) {
                                var t = e.name
                                    , i = e.defaultValue
                                    , r = e.callback;
                                n.getVar(t, i, r)
                            }),
                            this.collect.on(f.AbAllVars, function (e) {
                                n.getAllVars(e)
                            }),
                            this.collect.on(f.AbConfig, function (e) {
                                var t = e.params
                                    , i = e.callback;
                                n.getABconfig(t, i)
                            }),
                            this.collect.on(f.AbExternalVersion, function (e) {
                                n.setExternalAbVersion(e)
                            }),
                            this.collect.on(f.AbOpenLayer, function () {
                                n.openOverlayer()
                            }),
                            this.collect.on(f.AbCloseLayer, function () {
                                n.closeOverlayer()
                            }),
                            this.collect.on(f.AbVersionChangeOn, function (e) {
                                n.changeListener.set(e, e)
                            }),
                            this.collect.on(f.AbVersionChangeOff, function (e) {
                                n.changeListener.get(e) && n.changeListener.delete(e)
                            }),
                            this.loadMode(),
                        (this.enable_ab_visual || this.enable_multilink) && this.openOverlayer(this.config.multilink_timeout_ms || 500),
                            this.checkLocal(),
                            this.ready("ab"),
                        this.readyStatus || (this.fetchAB(),
                            this.readyStatus = !0),
                            this.collect.emit(f.AbReady)
                    }
                }
                    ,
                    e.prototype.ready = function (e) {
                        var t = this;
                        if (this.collect.set(e),
                            this.collect.hook._hooksCache.hasOwnProperty(e)) {
                            var n = this.collect.hook._hooksCache[e];
                            if (!Object.keys(n).length)
                                return;
                            var i = function (e) {
                                n[e].length && n[e].forEach(function (n) {
                                    t.collect.hook.emit(e, n)
                                })
                            };
                            for (var r in n)
                                i(r)
                        }
                    }
                    ,
                    e.prototype.loadMode = function () {
                        var e, t, n = function () {
                            try {
                                return JSON.parse(atob(window.name)) || void 0
                            } catch (e) {
                                return
                            }
                        }(), i = "";
                        if (n) {
                            var r = n.scenario
                                , o = n.href;
                            r ? (this.editMode = !0,
                                i = r) : o && (-1 !== o.indexOf("datatester") || -1 !== o.indexOf("visual-editor")) && (this.editMode = !0,
                                i = "visual-editor")
                        }
                        this.enable_ab_visual && (function (e, t) {
                            window.TEAVisualEditor = window.TEAVisualEditor || {},
                                eo(["*"]);
                            var n, i = "";
                            eu(t, P);
                            var r = "";
                            try {
                                var o = window.performance.getEntriesByType("resource");
                                if (o && o.length && (o.forEach(function (e) {
                                    "script" === e.initiatorType && e.name && -1 !== e.name.indexOf("collect") && (r = e.name)
                                }),
                                r || document.currentScript && (r = document.currentScript.src),
                                r && (n = r.split("/")) && n.length)) {
                                    i = "https:/";
                                    for (var a = 2; a < n.length && a !== n.length - 1; a++)
                                        i = i + "/" + n[a];
                                    i += "/visual-ab-core"
                                }
                            } catch (e) {
                            }
                            es("tea:openVisualABEditor", function (n) {
                                var r = n.data;
                                if ("string" == typeof n.data)
                                    try {
                                        r = JSON.parse(n.data)
                                    } catch (e) {
                                        r = void 0
                                    }
                                if (r) {
                                    var o = r.lang;
                                    if (r.appId !== t.app_id)
                                        return void ea(n, "appIdError");
                                    var a = r.version;
                                    el = a && i ? i + (a ? "." + a : ".1.0.1") + ".js?query=" + Date.now() : "https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/visual-ab-core.js?query=" + Date.now(),
                                        window.TEAVisualEditor.lang = o,
                                        window.TEAVisualEditor.__ab_domin = t.channel_domain || "",
                                        ef({
                                            event: n,
                                            editorUrl: el,
                                            collectInstance: e
                                        })
                                }
                            })
                        }(this.collect, this.config),
                        "visual-editor" === i) ? this.collect.destoryInstace() : this.enable_multilink && (e = this.collect,
                            t = this.config,
                            window.TEAVisualEditor = window.TEAVisualEditor || {},
                            window.TEAVisualEditor.appId = t.app_id,
                            es("tea:openTesterEventInspector", function (t) {
                                var n = t.data;
                                if ("string" == typeof t.data)
                                    try {
                                        n = JSON.parse(t.data)
                                    } catch (e) {
                                        n = void 0
                                    }
                                if (n) {
                                    var i = n.referrer
                                        , r = n.lang
                                        , o = n.appId;
                                    window.TEAVisualEditor.__editor_ajax_domain = i || "",
                                        window.TEAVisualEditor.__ab_appId = o || "",
                                        window.TEAVisualEditor.lang = r || "",
                                        ef({
                                            event: t,
                                            editorUrl: "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/tester-event-inspector.js?query=" + Date.now(),
                                            collectInstance: e
                                        })
                                }
                            }))
                    }
                    ,
                    e.prototype.checkLocal = function () {
                        var e = this.getABCache()
                            , t = e.ab_version
                            , n = e.ab_ext_version
                            , i = e.ab_version_multilink
                            , r = e.data
                            , o = this.checkFromUrl();
                        o ? this.mulilinkVersions.push(o) : this.mulilinkVersions = i || [],
                            this.extVersions = n || [],
                            this.versions = t || [],
                            this.data = r;
                        var a = this.versions.concat(this.extVersions);
                        this.enable_multilink && (a = a.concat(this.mulilinkVersions)),
                            this.configVersions(a.join(","))
                    }
                    ,
                    e.prototype.checkFromUrl = function () {
                        var e = y(window.location.href);
                        return e && e.vid ? e.vid : ""
                    }
                    ,
                    e.prototype.updateVersions = function () {
                        var e = this.extVersions.length ? this.versions.concat(this.extVersions) : this.versions;
                        this.enable_multilink && (e = e.concat(this.mulilinkVersions)),
                            this.configVersions(e.join(",")),
                            this.updateABCache(),
                        this.changeListener.size > 0 && this.changeListener.forEach(function (t) {
                            "function" == typeof t && t(e)
                        })
                    }
                    ,
                    e.prototype.configVersions = function (e) {
                        this.collect.configManager.setAbVersion(e)
                    }
                    ,
                    e.prototype.getVar = function (e, t, n) {
                        if (!e)
                            throw Error("variable must not be empty");
                        if (void 0 === t)
                            throw Error("variable no default value");
                        if ("function" != typeof n)
                            throw Error("callback must be a function");
                        var i = {
                            name: e,
                            defaultValue: t,
                            callback: n,
                            type: eW.Var
                        };
                        "complete" === this.fetchStatus && "complete" === this.refreshFetchStatus ? this.getRealVar(i, e) : this.callbacks.push(i)
                    }
                    ,
                    e.prototype.getRealVar = function (e, t) {
                        var n = e.name
                            , i = e.defaultValue
                            , r = e.callback
                            , o = this.data;
                        if (o) {
                            if (l(o[n])) {
                                var a = o[n].vid;
                                return "$ab_url" === t ? this.mulilinkVersions.includes(a) || this.mulilinkVersions.push(a) : this.versions.includes(a) || this.versions.push(a),
                                    this.updateVersions(),
                                    this.fechEvent(a, t, i),
                                    r(o[n].val),
                                    void this.collect.emit(E.DEBUGGER_MESSAGE, {
                                        type: E.DEBUGGER_MESSAGE_SDK,
                                        secType: "AB",
                                        info: "SDK 曝光了实验" + n,
                                        level: "info",
                                        time: Date.now(),
                                        data: o[n]
                                    })
                            }
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                secType: "AB",
                                info: "SDK 调用getVar",
                                level: "info",
                                time: Date.now(),
                                data: i
                            }),
                                r(i)
                        } else
                            r(i)
                    }
                    ,
                    e.prototype.getAllVars = function (e) {
                        if ("function" != typeof e)
                            throw Error("callback must be a function");
                        var t = {
                            callback: e,
                            type: eW.All
                        };
                        "complete" === this.fetchStatus && "complete" === this.refreshFetchStatus ? this.getRealAllVars(t) : this.callbacks.push(t)
                    }
                    ,
                    e.prototype.getRealAllVars = function (e) {
                        (0,
                            e.callback)(this.data ? JSON.parse(JSON.stringify(this.data)) : {}),
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                secType: "AB",
                                info: "SDK 调用getAllVars",
                                level: "info",
                                time: Date.now(),
                                data: this.data
                            })
                    }
                    ,
                    e.prototype.fechEvent = function (e, t, n) {
                        try {
                            if (this.config.disable_track_event || !e)
                                return;
                            var i = this.collect.configManager.get()
                                , r = i.header
                                , o = i.user
                                , a = this.getABCache();
                            if (a && a.uuid && a.uuid !== o.user_unique_id)
                                return;
                            var s = {
                                event: "abtest_exposure",
                                ab_sdk_version: "" + e,
                                params: JSON.stringify({
                                    app_id: this.config.appId,
                                    ab_url: "$ab_url" === t ? n : window.location.href
                                }),
                                local_time_ms: Date.now()
                            };
                            r.custom = JSON.stringify(r.custom);
                            var c = {
                                events: [s],
                                user: o,
                                header: r
                            };
                            "$ab_url" === t && window.navigator.sendBeacon ? window.navigator.sendBeacon(this.reportUrl, JSON.stringify([c])) : this.reportExposure(c)
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.reportExposure = function (e) {
                        var t = this;
                        this.exposureCache.push(e),
                        this.reportTimeout && clearTimeout(this.reportTimeout),
                            this.exposureCache.length >= this.exposureLimit ? this.report() : this.reportTimeout = setTimeout(function () {
                                t.report(),
                                    clearTimeout(t.reportTimeout)
                            }, this.ab_batch_time)
                    }
                    ,
                    e.prototype.report = function () {
                        var e = this;
                        this.fetch(this.reportUrl, this.exposureCache, 2e4),
                            this.exposureCache.forEach(function (t) {
                                e.collect.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_EVENT,
                                    info: "埋点上报成功",
                                    time: Date.now(),
                                    data: [t],
                                    code: 200,
                                    status: "success"
                                })
                            }),
                            this.exposureCache = []
                    }
                    ,
                    e.prototype.setExternalAbVersion = function (e) {
                        this.extVersions = [e],
                            this.updateVersions()
                    }
                    ,
                    e.prototype.getABconfig = function (e, t) {
                        var n = Object.keys(e);
                        n && n.length && this.collect.configManager.set(e),
                            this.fetchAB(t)
                    }
                    ,
                    e.prototype.get = function (e) {
                        if (this.ab_cross) {
                            var t = this.cacheStorgae.getCookie(e, this.ab_cookie_domain);
                            return t ? JSON.parse(t) : {}
                        }
                        return this.cacheStorgae.getItem(e)
                    }
                    ,
                    e.prototype.set = function (e, t) {
                        this.ab_cross ? this.cacheStorgae.setCookie(e, t, 2592e6, this.ab_cookie_domain) : this.cacheStorgae.setItem(e, t),
                            this.collect.configManager.setAbCache(t)
                    }
                    ,
                    e.prototype.getABCache = function (e) {
                        var t = {
                            ab_version: [],
                            ab_ext_version: [],
                            ab_version_multilink: [],
                            data: null,
                            timestamp: +new Date,
                            uuid: ""
                        };
                        return t = this.get(this.abKey) || t,
                            e ? t[e] : t
                    }
                    ,
                    e.prototype.updateABCache = function () {
                        var e = this.getABCache();
                        e.ab_version_multilink = this.mulilinkVersions,
                            e.ab_ext_version = this.extVersions,
                            e.ab_version = this.versions,
                            e.timestamp = Date.now(),
                            this.set(this.abKey, e)
                    }
                    ,
                    e.prototype.setAbCache = function (e) {
                        var t = this.getABCache();
                        t.data = this.data,
                            t.uuid = e,
                            t.timestamp = Date.now(),
                            this.set(this.abKey, t)
                    }
                    ,
                    e.prototype.clearCache = function () {
                        this.refreshFetchStatus = "ing",
                            this.data = {},
                            this.extVersions = [],
                            this.mulilinkVersions = [],
                            this.versions = [],
                            this.collect.configManager.clearAbCache()
                    }
                    ,
                    e.prototype.openOverlayer = function (e) {
                        var t = this;
                        if (function () {
                            if (!document.getElementById(en)) {
                                var e = "body { opacity: 0 !important; }"
                                    , t = document.head || document.getElementsByTagName("head")[0]
                                    , n = document.createElement("style");
                                n.id = en,
                                    n.type = "text/css",
                                    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)),
                                    t.appendChild(n)
                            }
                        }(),
                            e)
                            var n = setTimeout(function () {
                                t.closeOverlayer(),
                                    clearTimeout(n)
                            }, e)
                    }
                    ,
                    e.prototype.closeOverlayer = function () {
                        var e;
                        (e = document.getElementById(en)) && e.parentElement.removeChild(e)
                    }
                    ,
                    e.prototype.fetchComplete = function (e, t) {
                        var n = this;
                        try {
                            if (e && "[object Object]" == Object.prototype.toString.call(e)) {
                                this.data = e,
                                    this.setAbCache(t);
                                var i = [];
                                Object.keys(e).forEach(function (t) {
                                    var n = e[t].vid;
                                    n && i.push(n)
                                }),
                                    this.versions = this.versions.filter(function (e) {
                                        return i.includes(e)
                                    });
                                var r = e.$ab_url
                                    , o = e.$ab_modification;
                                if (o && o.val && this.enable_ab_visual) {
                                    if (this.collect.destroyInstance)
                                        return;
                                    this.getVar("$ab_modification", window.location.href, function () {
                                        var e;
                                        e = o.val,
                                            window.TEAVisualEditor = window.TEAVisualEditor || {},
                                            window.TEAVisualEditor.__ab_config = e,
                                            g("https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/visual-ab-loader.js?query=" + Date.now(), function () {
                                            }, function () {
                                            }),
                                            n.closeOverlayer()
                                    })
                                } else if (r && this.enable_multilink) {
                                    this.mulilinkVersions = this.mulilinkVersions.filter(function (e) {
                                        return i.includes(e)
                                    });
                                    var a = r.val
                                        , s = r.vid;
                                    a && s && this.getVar("$ab_url", a, function () {
                                        n.editMode || (a !== window.location.href ? setTimeout(function () {
                                            if (!n.collect.destroyInstance) {
                                                var e = "" + a;
                                                e = -1 === e.indexOf("http") ? "https://" + e : e,
                                                    _(e).host !== location.host ? e = e + "&vid=" + s : window.history.replaceState("", "", e),
                                                    window.location.href = e
                                            }
                                        }, 100) : n.closeOverlayer())
                                    })
                                }
                                this.updateVersions()
                            } else
                                this.closeOverlayer();
                            this.callbacks.forEach(function (e) {
                                return n[e.type === eW.Var ? "getRealVar" : "getRealAllVars"](e, "")
                            }),
                                this.callbacks = []
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.fetchAB = function (e) {
                        var t = this
                            , n = this.collect.configManager.get()
                            , i = {
                            header: r({
                                aid: this.config.app_id
                            }, n.user || {}, n.header || {}, {
                                ab_sdk_version: this.collect.configManager.getAbVersion(),
                                ab_url: window.location.href
                            })
                        };
                        this.collect.emit(E.DEBUGGER_MESSAGE, {
                            type: E.DEBUGGER_MESSAGE_SDK,
                            info: "SDK 发起AB实验请求",
                            level: "info",
                            logType: "fetch",
                            time: Date.now(),
                            data: i
                        }),
                            this.fetch(this.fetchUrl, i, this.config.ab_timeout || 3e3, !1, function (i) {
                                t.fetchStatus = "complete",
                                    t.refreshFetchStatus = "complete";
                                var r = i.data;
                                "success" === i.message ? (t.fetchComplete(r, n.user.user_unique_id),
                                e && e(r)) : (t.fetchComplete(null, n.user.user_unique_id),
                                e && e(null)),
                                    t.collect.emit(t.types.AbComplete, r),
                                    t.collect.emit(E.DEBUGGER_MESSAGE, {
                                        type: E.DEBUGGER_MESSAGE_SDK,
                                        secType: "AB",
                                        info: "AB实验请求成功",
                                        level: "info",
                                        logType: "fetch",
                                        time: Date.now(),
                                        data: r
                                    })
                            }, function () {
                                t.fetchStatus = "complete",
                                    t.refreshFetchStatus = "complete",
                                    t.fetchComplete(null, n.user.user_unique_id),
                                    t.collect.emit(t.types.AbTimeout),
                                e && e(null),
                                    t.collect.emit(E.DEBUGGER_MESSAGE, {
                                        type: E.DEBUGGER_MESSAGE_SDK,
                                        secType: "AB",
                                        info: "AB实验请求网络异常",
                                        level: "error",
                                        logType: "fetch",
                                        time: Date.now()
                                    })
                            })
                    }
                    ,
                    e.prototype.filterUrl = function (e) {
                        try {
                            var t = "";
                            -1 !== e.indexOf("&multilink=true") ? t = "&multilink=true[\x00-\xff]*" : -1 !== e.indexOf("?multilink=true") && (t = "\\?multilink=true[\x00-\xff]*");
                            var n = RegExp(t, "g");
                            e = e.replace(n, "")
                        } catch (e) {
                        }
                        return e
                    }
                    ,
                    e
            }()
                , ep = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    if (e.adapters.fetch,
                    t.event_verify_url && "string" == typeof t.event_verify_url && (this.url = t.event_verify_url + "/v1/list_test",
                        this.url)) {
                        var i = e.Types;
                        e.on(i.SubmitBefore, function (e) {
                            window.navigator.sendBeacon(n.url, JSON.stringify(e))
                        })
                    }
                }
                    ,
                    e
            }()
                , eg = function () {
                function e(e, t) {
                    this.maxDuration = 432e5,
                        this.aliveDTime = 6e4,
                        this.options = {
                            aliveName: "predefine_page_alive",
                            params: {}
                        },
                        this.collect = e,
                        this.config = t,
                        this.pageStartTime = Date.now(),
                        this.sessionStartTime = this.pageStartTime,
                        this.timerHandler = null,
                    l(t.enable_stay_duration) && (this.options = Object.assign(this.options, t.enable_stay_duration))
                }

                return e.prototype.setParams = function (e, t, n) {
                    this.set_path = e,
                        this.set_url = n,
                        this.set_title = t
                }
                    ,
                    e.prototype.enable = function (e, t, n) {
                        this.url_path = e,
                            this.url = n,
                            this.title = t,
                            this.disableCallback = this.enablePageAlive()
                    }
                    ,
                    e.prototype.disable = function () {
                        this.disableCallback(),
                            this.pageStartTime = Date.now()
                    }
                    ,
                    e.prototype.sendEvent = function (e, t) {
                        void 0 === t && (t = !1);
                        var n = t ? this.aliveDTime : Date.now() - this.sessionStartTime;
                        n < 0 || n > this.aliveDTime || Date.now() - this.pageStartTime > this.maxDuration || (this.collect.beconEvent(this.options.aliveName, r({
                            url_path: this.getParams("url_path"),
                            title: this.getParams("title"),
                            url: this.getParams("url"),
                            duration: n,
                            is_support_visibility_change: m(),
                            startTime: this.sessionStartTime,
                            hidden: document.visibilityState,
                            leave: e
                        }, this.options.params)),
                            this.sessionStartTime = Date.now())
                    }
                    ,
                    e.prototype.getParams = function (e) {
                        switch (e) {
                            case "url_path":
                                return this.set_path || this.url_path || location.pathname;
                            case "title":
                                return this.set_title || this.title || document.title || location.pathname;
                            case "url":
                                return this.set_url || this.url || location.href
                        }
                    }
                    ,
                    e.prototype.setUpTimer = function () {
                        var e = this;
                        return this.timerHandler && clearInterval(this.timerHandler),
                            setInterval(function () {
                                Date.now() - e.sessionStartTime > e.aliveDTime && e.sendEvent(!1, !0)
                            }, 1e3)
                    }
                    ,
                    e.prototype.visibilitychange = function () {
                        "hidden" === document.visibilityState ? this.timerHandler && (clearInterval(this.timerHandler),
                            this.sendEvent(!1)) : "visible" === document.visibilityState && (this.sessionStartTime = Date.now(),
                            this.timerHandler = this.setUpTimer())
                    }
                    ,
                    e.prototype.beforeunload = function () {
                        document.hidden || this.sendEvent(!0)
                    }
                    ,
                    e.prototype.enablePageAlive = function () {
                        var e = this;
                        this.timerHandler = this.setUpTimer();
                        var t = this.visibilitychange.bind(this)
                            , n = this.beforeunload.bind(this);
                        return document.addEventListener("visibilitychange", t),
                            window.addEventListener("pagehide", n),
                            function () {
                                e.beforeunload(),
                                    document.removeEventListener("visibilitychange", t),
                                    window.removeEventListener("pagehide", n)
                            }
                    }
                    ,
                    e
            }()
                , em = function () {
                function e(e, t) {
                    var n = this;
                    this.maxDuration = 432e5,
                        this.aliveDTime = 6e4,
                        this.options = {
                            closeName: "predefine_page_close",
                            params: {}
                        },
                        this.visibilitychange = function () {
                            "hidden" === document.visibilityState ? n.activeEndTime = Date.now() : "visible" === document.visibilityState && (n.activeEndTime && (n.totalTime += n.activeEndTime - n.activeStartTime,
                                n.activeTimes += 1),
                                n.activeEndTime = void 0,
                                n.activeStartTime = Date.now())
                        }
                        ,
                        this.beforeunload = function () {
                            if (n.totalTime += (n.activeEndTime || Date.now()) - n.activeStartTime,
                                n.config.autotrack)
                                try {
                                    window.sessionStorage.setItem("_tea_cache_duration", JSON.stringify({
                                        duration: n.totalTime,
                                        page_title: document.title || location.pathname
                                    }))
                                } catch (e) {
                                }
                            n.sendEventPageClose()
                        }
                        ,
                        this.collect = e,
                        this.config = t,
                        this.maxDuration = t.maxDuration || t.max_duration || 864e5,
                        this.pageStartTime = Date.now(),
                    l(t.enable_stay_duration) && (this.options = Object.assign(this.options, t.enable_stay_duration)),
                        this.resetData()
                }

                return e.prototype.setParams = function (e, t, n) {
                    this.set_path = e,
                        this.set_url = n,
                        this.set_title = t
                }
                    ,
                    e.prototype.resetParams = function (e, t, n) {
                        this.url_path = e,
                            this.url = n,
                            this.title = t
                    }
                    ,
                    e.prototype.enable = function (e, t, n) {
                        this.url_path = e,
                            this.url = n,
                            this.title = t,
                            this.disableCallback = this.enablePageClose()
                    }
                    ,
                    e.prototype.disable = function () {
                        this.disableCallback()
                    }
                    ,
                    e.prototype.resetData = function () {
                        this.activeStartTime = void 0 === this.activeStartTime ? this.pageStartTime : Date.now(),
                            this.activeEndTime = void 0,
                            this.activeTimes = 1,
                            this.totalTime = 0,
                            this.resetParams(location.pathname, location.href, document.title)
                    }
                    ,
                    e.prototype.sendEventPageClose = function () {
                        var e = Date.now() - this.pageStartTime;
                        this.totalTime < 0 || e < 0 || this.totalTime >= this.maxDuration || (this.collect.beconEvent(this.options.closeName, r({
                            url_path: this.getParams("url_path"),
                            title: this.getParams("title"),
                            url: this.getParams("url"),
                            active_times: this.activeTimes,
                            duration: this.totalTime,
                            total_duration: e,
                            is_support_visibility_change: m()
                        }, this.options.params)),
                            this.pageStartTime = Date.now(),
                            this.resetData())
                    }
                    ,
                    e.prototype.getParams = function (e) {
                        switch (e) {
                            case "url_path":
                                return this.set_path || this.url_path || location.pathname;
                            case "title":
                                return this.set_title || this.title || document.title || location.pathname;
                            case "url":
                                return this.set_url || this.url || location.href
                        }
                    }
                    ,
                    e.prototype.enablePageClose = function () {
                        var e = this
                            , t = this.visibilitychange.bind(this)
                            , n = this.beforeunload.bind(this);
                        return document.addEventListener("visibilitychange", t),
                            window.addEventListener("pagehide", n),
                            function () {
                                e.beforeunload(),
                                    document.removeEventListener("visibilitychange", t),
                                    window.removeEventListener("pagehide", n)
                            }
                    }
                    ,
                    e
            }()
                , ev = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    if (this.collect = e,
                        this.config = t,
                        this.config.enable_stay_duration) {
                        this.title = document.title || location.pathname,
                            this.url = location.href,
                            this.url_path = location.pathname,
                            this.pageAlive = new eg(e, t),
                            this.pageClose = new em(e, t);
                        var i = this.collect.Types;
                        this.collect.on(i.ResetStay, function (e) {
                            var t = e.url_path
                                , i = e.title
                                , r = e.url;
                            n.resetStayDuration(t, i, r)
                        }),
                            this.collect.on(i.RouteChange, function (e) {
                                e.init || t.disable_route_report || n.resetStayDuration()
                            }),
                            this.collect.on(i.SetStay, function (e) {
                                var t = e.url_path
                                    , i = e.title
                                    , r = e.url;
                                n.setStayParmas(t, i, r)
                            }),
                            this.enable(this.url_path, this.title, this.url),
                            this.ready(i.Stay),
                            this.collect.emit(i.StayReady)
                    }
                }
                    ,
                    e.prototype.ready = function (e) {
                        var t = this;
                        if (this.collect.set(e),
                            this.collect.hook._hooksCache.hasOwnProperty(e)) {
                            var n = this.collect.hook._hooksCache[e];
                            if (!Object.keys(n).length)
                                return;
                            var i = function (e) {
                                n[e].length && n[e].forEach(function (n) {
                                    t.collect.hook.emit(e, n)
                                })
                            };
                            for (var r in n)
                                i(r)
                        }
                    }
                    ,
                    e.prototype.enable = function (e, t, n) {
                        this.pageAlive.enable(e, t, n),
                            this.pageClose.enable(e, t, n)
                    }
                    ,
                    e.prototype.disable = function () {
                        this.pageAlive.disable(),
                            this.pageClose.disable()
                    }
                    ,
                    e.prototype.setStayParmas = function (e, t, n) {
                        void 0 === e && (e = ""),
                        void 0 === t && (t = ""),
                        void 0 === n && (n = ""),
                            this.pageAlive.setParams(e, t, n),
                            this.pageClose.setParams(e, t, n),
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行 resetStayParams",
                                level: "info",
                                time: Date.now(),
                                data: {
                                    url_path: e,
                                    title: t,
                                    url: n
                                }
                            })
                    }
                    ,
                    e.prototype.reset = function (e, t, n) {
                        this.disable(),
                            this.enable(e, t, n)
                    }
                    ,
                    e.prototype.resetStayDuration = function (e, t, n) {
                        this.reset(e, t, n),
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "SDK 执行 resetStayDuration",
                                level: "info",
                                time: Date.now(),
                                data: {
                                    url_path: e,
                                    title: t,
                                    url: n
                                }
                            })
                    }
                    ,
                    e
            }()
                , e_ = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    this.collect = e,
                        this.config = t,
                        this.duration = 6e4,
                        this.reportUrl = e.configManager.getDomain() + "/profile/list";
                    var i = e.Types
                        , r = e.adapters.fetch;
                    this.eventCheck = new G(e, t),
                        this.fetch = r,
                        this.cache = {},
                        this.collect.on(i.ProfileSet, function (e) {
                            n.setProfile(e)
                        }),
                        this.collect.on(i.ProfileSetOnce, function (e) {
                            n.setOnceProfile(e)
                        }),
                        this.collect.on(i.ProfileUnset, function (e) {
                            n.unsetProfile(e)
                        }),
                        this.collect.on(i.ProfileIncrement, function (e) {
                            n.incrementProfile(e)
                        }),
                        this.collect.on(i.ProfileAppend, function (e) {
                            n.appendProfile(e)
                        }),
                        this.collect.on(i.ProfileClear, function () {
                            n.cache = {}
                        }),
                        this.ready(i.Profile)
                }
                    ,
                    e.prototype.ready = function (e) {
                        var t = this;
                        if (this.collect.set(e),
                            this.collect.hook._hooksCache.hasOwnProperty(e)) {
                            var n = this.collect.hook._hooksCache[e];
                            if (!Object.keys(n).length)
                                return;
                            var i = function (e) {
                                n[e].length && n[e].forEach(function (n) {
                                    t.collect.hook.emit(e, n)
                                })
                            };
                            for (var r in n)
                                i(r)
                        }
                    }
                    ,
                    e.prototype.report = function (e, t) {
                        void 0 === t && (t = {});
                        try {
                            if (this.config.disable_track_event)
                                return;
                            var n = [];
                            n.push(this.collect.processEvent(e, t));
                            var i = this.collect.eventManager.merge(n);
                            this.fetch(this.reportUrl, i),
                                this.collect.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_EVENT,
                                    info: "埋点上报成功",
                                    time: Date.now(),
                                    data: i,
                                    code: 200,
                                    status: "success"
                                })
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.setProfile = function (e) {
                        var t = this.formatParams(e);
                        t && Object.keys(t).length && (this.pushCache(t),
                            this.report("__profile_set", r({}, t, {
                                profile: !0
                            })))
                    }
                    ,
                    e.prototype.setOnceProfile = function (e) {
                        var t = this.formatParams(e, !0);
                        t && Object.keys(t).length && (this.pushCache(t),
                            this.report("__profile_set_once", r({}, t, {
                                profile: !0
                            })))
                    }
                    ,
                    e.prototype.incrementProfile = function (e) {
                        e && this.report("__profile_increment", r({}, e, {
                            profile: !0
                        }))
                    }
                    ,
                    e.prototype.unsetProfile = function (e) {
                        if (e) {
                            var t = {};
                            t[e] = "1",
                                this.report("__profile_unset", r({}, t, {
                                    profile: !0
                                }))
                        }
                    }
                    ,
                    e.prototype.appendProfile = function (e) {
                        if (e) {
                            var t = {};
                            for (var n in e)
                                ("string" == typeof e[n] || "Array" === Object.prototype.toString.call(e[n]).slice(8, -1)) && (t[n] = e[n]);
                            Object.keys(t).length && this.report("__profile_append", r({}, t, {
                                profile: !0
                            }))
                        }
                    }
                    ,
                    e.prototype.pushCache = function (e) {
                        var t = this;
                        Object.keys(e).forEach(function (n) {
                            t.cache[n] = {
                                val: t.clone(e[n]),
                                timestamp: Date.now()
                            }
                        })
                    }
                    ,
                    e.prototype.formatParams = function (e, t) {
                        var n = this;
                        void 0 === t && (t = !1);
                        try {
                            if (!e || "[object Object]" !== Object.prototype.toString.call(e))
                                return;
                            var i = {};
                            for (var r in e)
                                ("string" == typeof e[r] || "number" == typeof e[r] || "Array" === Object.prototype.toString.call(e[r]).slice(8, -1)) && (i[r] = e[r]);
                            var o = Object.keys(i);
                            if (!o.length || !this.eventCheck.checkEventParams(i))
                                return;
                            var a = Date.now();
                            return o.filter(function (i) {
                                var r = n.cache[i];
                                return t ? !r : !(r && n.compare(r.val, e[i]) && a - r.timestamp < n.duration)
                            }).reduce(function (e, t) {
                                return e[t] = i[t],
                                    e
                            }, {})
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.compare = function (e, t) {
                        try {
                            return JSON.stringify(e) === JSON.stringify(t)
                        } catch (e) {
                            return this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            }),
                                !1
                        }
                    }
                    ,
                    e.prototype.clone = function (e) {
                        try {
                            return JSON.parse(JSON.stringify(e))
                        } catch (t) {
                            return this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: t.message
                            }),
                                e
                        }
                    }
                    ,
                    e.prototype.unReady = function () {
                    }
                    ,
                    e
            }()
                , ey = function () {
                function e() {
                    var e = this;
                    this.setInterval = function () {
                        e.clearIntervalFunc = v(function () {
                            e.isSessionhasEvent && e.endCurrentSession()
                        }, e.sessionInterval)
                    }
                        ,
                        this.clearInterval = function () {
                            e.clearIntervalFunc && e.clearIntervalFunc()
                        }
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    if (this.collect = e,
                        !t.disable_heartbeat) {
                        this.sessionInterval = 6e4,
                            this.startTime = 0,
                            this.lastTime = 0,
                            this.setInterval();
                        var i = this.collect.Types;
                        this.collect.on(i.SessionReset, function () {
                            n.process()
                        })
                    }
                }
                    ,
                    e.prototype.endCurrentSession = function () {
                        this.collect.event("_be_active", {
                            start_time: this.startTime,
                            end_time: this.lastTime,
                            url: window.location.href,
                            referrer: window.document.referrer,
                            title: document.title || location.pathname
                        }),
                            this.isSessionhasEvent = !1,
                            this.startTime = 0
                    }
                    ,
                    e.prototype.process = function () {
                        this.isSessionhasEvent || (this.isSessionhasEvent = !0,
                            this.startTime = +new Date);
                        var e = this.lastTime || +new Date;
                        this.lastTime = +new Date,
                        this.lastTime - e > this.sessionInterval && (this.clearInterval(),
                            this.endCurrentSession(),
                            this.setInterval())
                    }
                    ,
                    e
            }()
                , eb = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    if (this.collect = e,
                        this.config = t,
                        !this.config.channel_domain) {
                        var i = e.adapters.fetch;
                        if (this.fetch = i,
                        !t.disable_track_event && !t.disable_sdk_monitor) {
                            this.url = e.configManager.getUrl("event");
                            var r = this.collect.Types;
                            this.collect.on(r.Ready, function () {
                                n.sdkOnload()
                            }),
                                this.collect.on(r.SubmitError, function (e) {
                                    var t = e.type
                                        , i = e.eventData
                                        , r = e.errorCode;
                                    "f_data" === t && n.sdkError(i, r)
                                })
                        }
                    }
                }
                    ,
                    e.prototype.sdkOnload = function () {
                        var e = this;
                        try {
                            var t = this.collect.configManager.get()
                                , n = t.header
                                , i = t.user
                                , r = n.app_id
                                , o = n.app_name
                                , a = n.sdk_version
                                , s = i.web_id
                                , c = {
                                events: [{
                                    event: "onload",
                                    params: JSON.stringify({
                                        app_id: r,
                                        app_name: o || "",
                                        sdk_version: a,
                                        sdk_type: "npm",
                                        sdk_config: this.config,
                                        sdk_desc: "TOC",
                                        url: location.href
                                    }),
                                    local_time_ms: Date.now()
                                }],
                                user: {
                                    user_unique_id: s
                                },
                                header: {}
                            };
                            setTimeout(function () {
                                e.fetch(e.url, [c], 3e4, !1, function () {
                                }, function () {
                                }, "566f58151b0ed37e")
                            }, 16)
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.sdkError = function (e, t) {
                        var n = this;
                        try {
                            var i = e[0]
                                , r = i.user
                                , o = i.header
                                , a = [];
                            e.forEach(function (e) {
                                e.events.forEach(function (e) {
                                    a.push(e)
                                })
                            });
                            var s = {
                                events: a.map(function (e) {
                                    return {
                                        event: "on_error",
                                        params: JSON.stringify({
                                            error_code: t,
                                            app_id: o.app_id,
                                            app_name: o.app_name || "",
                                            error_event: e.event,
                                            sdk_version: o.sdk_version,
                                            local_time_ms: e.local_time_ms,
                                            tea_event_index: Date.now(),
                                            params: e.params,
                                            header: JSON.stringify(o),
                                            user: JSON.stringify(r)
                                        }),
                                        local_time_ms: Date.now()
                                    }
                                }),
                                user: {
                                    user_unique_id: r.user_unique_id
                                },
                                header: {}
                            };
                            setTimeout(function () {
                                n.fetch(n.url, [s], 3e4, !1, function () {
                                }, function () {
                                }, "566f58151b0ed37e")
                            }, 16)
                        } catch (e) {
                        }
                    }
                    ,
                    e
            }();

            function ew(e, t) {
                if (void 0 === t && (t = "list"),
                    !e)
                    return !1;
                if (t && "list" === t) {
                    if (["LI", "TR", "DL"].includes(e.nodeName) || e.dataset && e.dataset.hasOwnProperty("teaIdx") || e.hasAttribute && e.hasAttribute("data-tea-idx"))
                        return !0
                } else if (["A", "BUTTON"].includes(e.nodeName) || e.dataset && e.dataset.hasOwnProperty("teaContainer") || e.hasAttribute && e.hasAttribute("data-tea-container"))
                    return !0;
                return !1
            }

            function eS(e) {
                for (var t = e; t && !ew(t, "container");) {
                    if ("HTML" === t.nodeName || "BODY" === t.nodeName)
                        return e;
                    t = t.parentElement
                }
                return t || e
            }

            function eE(e) {
                var t = "";
                return 3 === e.nodeType ? t = e.textContent.trim() : e.dataset && e.dataset.hasOwnProperty("teaTitle") ? t = e.getAttribute("data-tea-title") : e.hasAttribute("ata-tea-title") ? t = e.getAttribute("data-tea-title") : e.hasAttribute("title") ? t = e.getAttribute("title") : "INPUT" === e.nodeName && ["button", "submit"].includes(e.getAttribute("type")) ? t = e.getAttribute("value") : "IMG" === e.nodeName && e.getAttribute("alt") && (t = e.getAttribute("alt")),
                    t.slice(0, 200)
            }

            var ek = function (e, t) {
                return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0
            }
                , eD = function (e, t) {
                if ("string" == typeof t)
                    return ek(e, t);
                if (h(t)) {
                    for (var n = !1, i = 0; i < t.length; i++)
                        if (ek(e, t[i])) {
                            n = !0;
                            break
                        }
                    return n
                }
            }
                , eT = function (e, t) {
                var n = {};
                if ("string" == typeof t)
                    ek(e, t) && (n.attrs = e.getAttribute(t));
                else if (h(t))
                    for (var i = 0; i < t.length; i++)
                        ek(e, t[i]) && (n[t[i]] = e.getAttribute(t[i]));
                return n
            }
                , eC = function (e) {
                if (e.children.length) {
                    var t = e.children;
                    return ![].slice.call(t).some(function (e) {
                        return e.children.length > 0
                    })
                }
                return !0
            }
                , eO = function (e) {
                if ("svg" === e.tagName.toLowerCase())
                    return !0;
                for (var t = e.parentElement, n = !1; t;)
                    "svg" === t.tagName.toLowerCase() ? (t = null,
                        n = !0) : t = t.parentElement;
                return n
            }
                , ex = function () {
                function e(e, t, n) {
                    var i = this;
                    this.statistics = !1,
                        this.pageView = !1,
                        this.clickEvent = function (e) {
                            var t, n;
                            t = e.target,
                                n = i.options,
                                window.innerHeight,
                                window.innerWidth,
                            !(1 !== t.nodeType || !n.svg && eO(t) || ["HTML", "BODY"].includes(t.tagName.toUpperCase())) && "none" !== t.style.display && (ew(t, "container") || eC(t) || n.svg) && i.eventHandel({
                                eventType: "dom",
                                eventName: "click"
                            }, e)
                        }
                        ,
                        this.changeEvent = function (e) {
                            i.eventHandel({
                                eventType: "dom",
                                eventName: "change"
                            }, e)
                        }
                        ,
                        this.submitEvent = function (e) {
                            i.eventHandel({
                                eventType: "dom",
                                eventName: "submit"
                            }, e)
                        }
                        ,
                        this.getPageViewEvent = function (e, t) {
                            t && "pushState" === t && i.eventHandel({
                                eventType: "dom",
                                eventName: "beat"
                            }, r({
                                beat_type: 0
                            }, e)),
                                i.eventHandel({
                                    eventType: "dom",
                                    eventName: "page_view"
                                }, e)
                        }
                        ,
                        this.getPageLoadEvent = function (e) {
                            i.eventHandel({
                                eventType: "dom",
                                eventName: "page_statistics"
                            }, {
                                lcp: e
                            })
                        }
                        ,
                        this.config = n.getConfig().eventConfig,
                        this.collect = t,
                        this.options = e,
                        this.beatTime = e.beat
                }

                return e.prototype.init = function (e) {
                    this.eventHandel = e;
                    var t = this.config.mode;
                    this.addListener(t)
                }
                    ,
                    e.prototype.addListener = function (e) {
                        var t = this;
                        if ("proxy-capturing" === e) {
                            if (this.config.click && window.document.addEventListener("click", this.clickEvent, !0),
                            this.config.change && window.document.addEventListener("change", this.changeEvent, !0),
                            this.config.submit && window.document.addEventListener("submit", this.submitEvent, !0),
                                this.config.pv) {
                                this.collect.on("route-change", function (e) {
                                    var n = e.config
                                        , i = e.name;
                                    t.getPageViewEvent(n, i),
                                        t.pageView = !0
                                });
                                var n = setTimeout(function () {
                                    t.pageView || (t.getPageViewEvent(t.getDefaultConfig()),
                                        t.pageView = !0,
                                        clearTimeout(n))
                                }, 2e3)
                            }
                            if (this.config.beat) {
                                try {
                                    "complete" === document.readyState ? this.beatEvent(this.beatTime) : window.addEventListener("load", function () {
                                        t.beatEvent(t.beatTime)
                                    });
                                    var i = 0
                                        , r = null;
                                    window.addEventListener("scroll", function () {
                                        clearTimeout(r),
                                            r = setTimeout(o, 500),
                                            i = document.documentElement.scrollTop || document.body.scrollTop
                                    });
                                    var o = function () {
                                        (document.documentElement.scrollTop || document.body.scrollTop) == i && t.eventHandel({
                                            eventType: "dom",
                                            eventName: "beat"
                                        }, {
                                            beat_type: 1
                                        })
                                    }
                                } catch (e) {
                                }
                                try {
                                    var a = window.performance && window.performance.getEntriesByType("paint");
                                    if (a && a.length) {
                                        new PerformanceObserver(function (e) {
                                                var n = e.getEntries()
                                                    , i = n[n.length - 1]
                                                    , r = i.renderTime || i.loadTime;
                                                t.statistics || (t.getPageLoadEvent(r),
                                                    t.statistics = !0)
                                            }
                                        ).observe({
                                            entryTypes: ["largest-contentful-paint"]
                                        });
                                        var s = setTimeout(function () {
                                            t.statistics || (t.getPageLoadEvent(a[0].startTime || 0),
                                                t.statistics = !0,
                                                clearTimeout(s))
                                        }, 2e3)
                                    } else
                                        this.getPageLoadEvent(0)
                                } catch (e) {
                                    this.getPageLoadEvent(0)
                                }
                            }
                        }
                    }
                    ,
                    e.prototype.removeListener = function () {
                        window.document.removeEventListener("click", this.clickEvent, !0),
                            window.document.removeEventListener("change", this.changeEvent, !0),
                            window.document.removeEventListener("submit", this.submitEvent, !0)
                    }
                    ,
                    e.prototype.beatEvent = function (e) {
                        var t, n = this;
                        try {
                            this.eventHandel({
                                eventType: "dom",
                                eventName: "beat"
                            }, {
                                beat_type: 3
                            }),
                            this.beatTime && (t = setInterval(function () {
                                n.eventHandel({
                                    eventType: "dom",
                                    eventName: "beat"
                                }, {
                                    beat_type: 2
                                })
                            }, e)),
                                p(function () {
                                    n.eventHandel({
                                        eventType: "dom",
                                        eventName: "beat",
                                        eventSend: "becon"
                                    }, {
                                        beat_type: 0
                                    }),
                                    n.beatTime && clearInterval(t)
                                })
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.getDefaultConfig = function () {
                        return {
                            is_html: 1,
                            url: location.href,
                            referrer: document.referrer,
                            page_key: location.href,
                            refer_page_key: document.referrer,
                            page_title: document.title || location.pathname,
                            page_manual_key: "",
                            refer_page_manual_key: "",
                            refer_page_title: "",
                            page_path: location.pathname,
                            page_host: location.host
                        }
                    }
                    ,
                    e
            }()
                , eI = {
                eventConfig: {
                    mode: "proxy-capturing",
                    submit: !1,
                    click: !0,
                    change: !1,
                    pv: !0,
                    beat: !0,
                    hashTag: !1,
                    impr: !1
                },
                scoutConfig: {
                    mode: "xpath"
                }
            }
                , eA = function () {
                function e(e, t) {
                    this.config = e,
                        this.config.eventConfig = Object.assign(this.config.eventConfig, t)
                }

                return e.prototype.getConfig = function () {
                    return this.config
                }
                    ,
                    e.prototype.setConfig = function (e) {
                        return this.config = e
                    }
                    ,
                    e
            }()
                , eM = function (e, t, n, i, o) {
                return r({
                    event: e
                }, function (e, t, n, i) {
                    var r, o, a, s, c, u, l, h, f, d, p = {}, g = function (e) {
                        if (e) {
                            var t = e.getBoundingClientRect()
                                , n = t.width
                                , i = t.height;
                            return {
                                left: t.left,
                                top: t.top,
                                element_width: n,
                                element_height: i
                            }
                        }
                    }(t), m = (void 0 === (r = e) && (r = {}),
                    void 0 === (o = g) && (o = {}),
                        a = r.clientX,
                        s = r.clientY,
                        {
                            touch_x: Math.floor(a - (c = o.left) >= 0 ? a - c : 0),
                            touch_y: Math.floor(s - (u = o.top) >= 0 ? s - u : 0)
                        }), v = g.element_width, _ = g.element_height, y = m.touch_x, b = m.touch_y, w = function (e) {
                        for (var t = []; null !== e.parentElement;)
                            t.push(e),
                                e = e.parentElement;
                        var n = []
                            , i = [];
                        return t.forEach(function (e) {
                            var t = function (e) {
                                if (null === e)
                                    return {
                                        str: "",
                                        index: 0
                                    };
                                var t = 0
                                    , n = e.parentElement;
                                if (n)
                                    for (var i = n.children, r = 0; r < i.length && i[r] !== e; r++)
                                        i[r].nodeName === e.nodeName && t++;
                                return {
                                    str: [e.nodeName.toLowerCase(), ew(e, "list") ? "[]" : ""].join(""),
                                    index: t
                                }
                            }(e)
                                , r = t.str
                                , o = t.index;
                            n.unshift(r),
                                i.unshift(o)
                        }),
                            {
                                element_path: "/" + n.join("/"),
                                positions: i
                            }
                    }(t), S = w.element_path, E = w.positions, k = (l = eS(t),
                        h = [],
                        function e(t) {
                            var n = eE(t);
                            if (n && -1 === h.indexOf(n) && h.push(n),
                            t.childNodes.length > 0)
                                for (var i = t.childNodes, r = 0; r < i.length; r++)
                                    8 !== i[r].nodeType && e(i[r])
                        }(l),
                        h), D = window.performance.timing.navigationStart, T = Date.now() - D, C = E.map(function (e) {
                        return "" + e
                    }), O = null;
                    if (window.TEAVisualEditor && window.TEAVisualEditor.getOriginXpath && (O = window.TEAVisualEditor.getOriginXpath({
                        xpath: S,
                        positions: C
                    })),
                        p.element_path = O && O.xpath || S,
                        p.positions = O && O.positions || C,
                    i && !i.text && (p.texts = k,
                        p.element_title = (f = eS(t),
                            d = "",
                            function e(t) {
                                var n = eE(t);
                                if (n && (d += n),
                                t.childNodes.length > 0)
                                    for (var i = t.childNodes, r = 0; r < i.length; r++)
                                        3 === i[r].nodeType && e(i[r])
                            }(f),
                            d)),
                        p.element_id = t.getAttribute("id") || "",
                        p.element_class_name = t.getAttribute("class") || "",
                        p.element_type = t.nodeType,
                        p.element_width = Math.floor(v),
                        p.element_height = Math.floor(_),
                        p.touch_x = y,
                        p.touch_y = b,
                        p.page_manual_key = "",
                        p.elememt_manual_key = "",
                        p.since_page_start_ms = T,
                        p.page_start_ms = D,
                        p.page_path = location.pathname,
                        p.page_host = location.host,
                    n.track_attr && eD(t, n.track_attr)) {
                        var x = eT(t, n.track_attr);
                        for (var I in x)
                            p[I] = x[I]
                    }
                    var A = eS(t);
                    return "A" === A.tagName && (p.href = A.getAttribute("href")),
                    "IMG" === t.tagName && (p.src = t.getAttribute("src")),
                        p
                }(t, n, i, o), {
                    is_html: 1,
                    page_key: window.location.href,
                    page_title: document.title
                })
            }
                , eK = function () {
                function e(e, t) {
                    this.ignore = {
                        text: !1
                    },
                        this.initConfig = e,
                        this.options = t,
                        this.eventName = t && "tea" === t.custom ? {
                            click: "__bav_click",
                            page: "__bav_page",
                            beat: "__bav_beat",
                            static: "__bav_page_statistics",
                            exposure: "__bav_page_exposure"
                        } : {
                            click: "bav2b_click",
                            page: "bav2b_page",
                            beat: "bav2b_beat",
                            static: "bav2b_page_statistics",
                            exposure: "bav2b_exposure"
                        },
                    t && !1 === t.text && (this.ignore.text = !0),
                    t && t.exposure && t.exposure.eventName && (this.eventName.exposure = t.exposure.eventName)
                }

                return e.prototype.handleEvent = function (e, t) {
                    try {
                        if (function (e) {
                            for (var t = e; t && t.parentNode;) {
                                if (t.hasAttribute("data-tea-ignore"))
                                    return !0;
                                if ("HTML" === t.nodeName || "body" === t.nodeName)
                                    break;
                                t = t.parentNode
                            }
                            return !1
                        }(e.target))
                            return null;
                        var n = "bav2b_click";
                        switch (t) {
                            case "click":
                                return n = this.eventName.click,
                                    eM(n, e, e.target, this.options, this.ignore);
                            case "exposure":
                                return n = this.eventName.exposure,
                                    eM(n, e, e.target, this.options, this.ignore);
                            case "change":
                                return r({}, eM(n = "bav2b_change", e, e.target, this.options), function (e, t) {
                                    try {
                                        if ("bav2b_change" === e)
                                            return t.hasAttribute("data-tea-track") ? {
                                                value: t.value
                                            } : {}
                                    } catch (e) {
                                        return {}
                                    }
                                }(n, e.target));
                            case "submit":
                                return eM(n = "bav2b_submit", e, e.target, this.options)
                        }
                    } catch (e) {
                        return null
                    }
                }
                    ,
                    e.prototype.handleViewEvent = function (e) {
                        e.event = this.eventName.page,
                            e.page_title = document.title,
                            e.page_total_width = window.innerWidth,
                            e.page_total_height = window.innerHeight;
                        try {
                            var t = window.sessionStorage.getItem("_tea_cache_duration");
                            if (t) {
                                var n = JSON.parse(t);
                                e.refer_page_duration_ms = n ? n.duration : ""
                            }
                            e.scroll_width = document.documentElement.scrollLeft ? document.documentElement.scrollLeft + window.innerWidth : window.innerWidth,
                                e.scroll_height = document.documentElement.scrollTop ? document.documentElement.scrollTop + window.innerHeight : window.innerHeight,
                                e.page_start_ms = window.performance.timing.navigationStart
                        } catch (e) {
                        }
                        return e
                    }
                    ,
                    e.prototype.handleStatisticsEvent = function (e) {
                        var t = {};
                        t.event = this.eventName.static,
                            t.is_html = 1,
                            t.page_key = location.href,
                            t.refer_page_key = document.referrer || "",
                            t.page_title = document.title,
                            t.page_manual_key = this.initConfig.autotrack.page_manual_key || "",
                            t.refer_page_manual_key = "";
                        try {
                            var n = e.lcp
                                , i = window.performance.timing
                                , r = i.loadEventEnd - i.navigationStart;
                            t.page_init_cost_ms = parseInt(n || (r > 0 ? r : 0)),
                                t.page_start_ms = i.navigationStart
                        } catch (e) {
                        }
                        return t
                    }
                    ,
                    e.prototype.handleBeadtEvent = function (e) {
                        e.event = this.eventName.beat,
                            e.page_key = window.location.href,
                            e.is_html = 1,
                            e.page_title = document.title,
                            e.page_manual_key = this.initConfig.autotrack.page_manual_key || "";
                        try {
                            e.page_viewport_width = window.innerWidth,
                                e.page_viewport_height = window.innerHeight,
                                e.page_total_width = document.documentElement.scrollWidth,
                                e.page_total_height = document.documentElement.scrollHeight,
                                e.scroll_width = document.documentElement.scrollLeft + window.innerWidth,
                                e.scroll_height = document.documentElement.scrollTop + window.innerHeight,
                                e.since_page_start_ms = Date.now() - window.performance.timing.navigationStart,
                                e.page_start_ms = window.performance.timing.navigationStart
                        } catch (e) {
                        }
                        return e
                    }
                    ,
                    e
            }()
                , eP = function () {
                function e(e) {
                    this.collect = e,
                        this.eventNameList = ["report_click_event", "report_change_event", "report_submit_event", "report_exposure_event", "report_page_view_event", "report_page_statistics_event", "report_beat_event"]
                }

                return e.prototype.send = function (e, t) {
                    var n = e.eventSend
                        , i = t.event;
                    delete t.event,
                        n && "becon" === n ? this.collect.beconEvent(i, t) : this.collect.event(i, t)
                }
                    ,
                    e.prototype.get = function (e, t) {
                        var n = Object.assign({
                            headers: {
                                "content-type": "application/json"
                            },
                            method: "GET"
                        }, t);
                        fetch(e, n)
                    }
                    ,
                    e.prototype.post = function (e, t) {
                        var n = Object.assign({
                            headers: {
                                "content-type": "application/json"
                            },
                            method: "POST"
                        }, t);
                        fetch(e, n)
                    }
                    ,
                    e
            }()
                , eG = "_TEA_VE_OPEN"
                , eR = "_TEA_VE_APIHOST"
                , eB = "lang"
                , eL = "_VISUAL_EDITOR_V"
                , eN = "_VISUAL_EDITOR_U";

            function eU() {
                try {
                    var e = window.TEAVisualEditor.lang = window.TEAVisualEditor.lang || k.get(eB)
                        ,
                        t = window.TEAVisualEditor.__editor_ajax_domain = window.TEAVisualEditor.__editor_ajax_domain || k.get(eR)
                        ,
                        n = window.TEAVisualEditor.__editor_verison = window.TEAVisualEditor.__editor_verison || k.get(eL)
                        , i = window.TEAVisualEditor.__editor_url = window.TEAVisualEditor.__editor_url || k.get(eN)
                        , r = +new Date
                        , o = new Date(r + 18e5);
                    k.set(eG, "1", {
                        expires: o
                    }),
                        k.set(eR, t, {
                            expires: o
                        }),
                        k.set(eN, i, {
                            expires: o
                        }),
                        k.set(eB, e, {
                            expires: o
                        }),
                        k.set(eL, n || "", {
                            expires: o
                        })
                } catch (e) {
                }
            }

            var ez = !1;

            function ej(e) {
                var t = e.event
                    , n = e.editorUrl
                    , i = e.autoTrackInstance;
                ez || (ez = !0,
                    g(n, function () {
                        ea(t, "editorScriptloadSuccess"),
                            i.destroy()
                    }, function () {
                        t && ea(t, "editorScriptloadError"),
                            ez = !1
                    }))
            }

            var eV, e$, eq, eW, eH, eJ = function () {
                function e(e) {
                    this._instance = null,
                        this._intersection = e,
                        this.init()
                }

                return e.prototype.init = function () {
                    var e = this;
                    this._instance = new MutationObserver(function (t) {
                            t.forEach(function (t) {
                                "attributes" === t.type && e.attributeChangeObserve(t),
                                "childList" === t.type && e.modifyNodeObserve(t)
                            })
                        }
                    ),
                        this._instance.observe(document.body, {
                            childList: !0,
                            attributes: !0,
                            subtree: !0,
                            attributeOldValue: !1
                        })
                }
                    ,
                    e.prototype.attributeChangeObserve = function (e) {
                        e.target.hasAttribute("data-exposure") ? this.exposureAdd(e, "mutation") : this.exposureRemove(e)
                    }
                    ,
                    e.prototype.modifyNodeObserve = function (e) {
                        var t = this;
                        Array.prototype.forEach.call(e.addedNodes, function (e) {
                            1 === e.nodeType && e.hasAttribute("data-exposure") && t.exposureAdd(e, "intersect"),
                                t.mapChild(e, t.exposureAdd)
                        }),
                            Array.prototype.forEach.call(e.removedNodes, function (e) {
                                1 === e.nodeType && e.hasAttribute("data-exposure") && t.exposureRemove(e),
                                    t.mapChild(e, t.exposureRemove)
                            })
                    }
                    ,
                    e.prototype.mapChild = function (e, t) {
                        var n = this;
                        1 === e.nodeType && e.children.length && Array.prototype.forEach.call(e.children, function (e) {
                            1 === e.nodeType && e.hasAttribute("data-exposure") && t(e),
                                n.mapChild(e, t)
                        })
                    }
                    ,
                    e.prototype.exposureAdd = function (e, t) {
                        this._intersection.exposureAdd(e, t)
                    }
                    ,
                    e.prototype.exposureRemove = function (e) {
                        this._intersection.exposureRemove(e)
                    }
                    ,
                    e._exposure_observer = null,
                    e
            }(), eF = function () {
                function e(t, n) {
                    this.count = 1,
                        this.instance = this.buildObserver(),
                        this.observeMap = e._observer_map,
                        t.autotrack.exposure.ratio ? this.Ratio = t.autotrack.exposure.ratio : 0 === t.autotrack.exposure.ratio ? this.Ratio = 0 : this.Ratio = .5,
                        this.EventHandle = n
                }

                return e.prototype.buildObserver = function () {
                    var t = this;
                    if (!e._observer_instance)
                        return IntersectionObserver && (e._observer_instance = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                    t.observeMap.get(e.target._observeId) && t.exposureEvent(e)
                                })
                            }
                            , {
                                threshold: [.01, .25, .5, .75, 1]
                            })),
                            e._observer_instance
                }
                    ,
                    e.prototype.exposureAdd = function (e, t) {
                        var n = e;
                        "mutation" === t && (n = e.target);
                        var i = n._observeId;
                        if (i || this.observeMap.has(i)) {
                            if (!1 === n.visible) {
                                var r = n.getBoundingClientRect()
                                    , o = r.top
                                    , a = r.left
                                    , s = r.right
                                    , c = r.bottom;
                                o >= 0 && c <= window.innerHeight && a >= 0 && s <= window.innerWidth && (n.visible = !0,
                                    this.EventHandle({
                                        eventType: "dom",
                                        eventName: "exposure"
                                    }, e))
                            }
                        } else
                            n._observeId = this.count,
                                n.visible = !1,
                                this.observeMap.set(this.count, n),
                                this.observe(n),
                                this.count++
                    }
                    ,
                    e.prototype.exposureRemove = function (e) {
                        this.observeMap.has(e._observeId) && (this.observeMap.delete(e._observeId),
                            this.unobserve(e))
                    }
                    ,
                    e.prototype.exposureEvent = function (e) {
                        e.intersectionRatio >= this.Ratio && e.isIntersecting ? "0" !== e.target.style.opacity && "hidden" !== e.target.style.visibility && !0 !== e.target.visible && (e.target.visible = !0,
                            this.EventHandle({
                                eventType: "dom",
                                eventName: "exposure"
                            }, e)) : e.target.visible = !1
                    }
                    ,
                    e.prototype.observe = function (e) {
                        this.instance.observe(e)
                    }
                    ,
                    e.prototype.unobserve = function (e) {
                        this.instance.unobserve(e)
                    }
                    ,
                    e._observer_instance = null,
                    e._observer_map = new Map,
                    e
            }(), eY = function () {
                function e(e, t) {
                    e.autotrack && e.autotrack.exposure && (this._intersection = new eF(e, t),
                        this._observer = new eJ(this._intersection),
                        this.initObserver())
                }

                return e.prototype.initObserver = function () {
                    var e = this;
                    Array.prototype.forEach.call(document.querySelectorAll("[data-exposure]"), function (t) {
                        e._intersection.exposureAdd(t, "intersect")
                    })
                }
                    ,
                    e
            }(), eX = {
                hashTag: !1,
                impr: !1
            }, eQ = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    if (this.autoTrackStart = !1,
                        this.collect = e,
                        this.config = t,
                        t.autotrack) {
                        var n = e.Types;
                        t.autotrack && t.autotrack.collect_url && !t.autotrack.collect_url() || (this.ready(n.Autotrack),
                            this.collect.emit(n.AutotrackReady))
                    }
                }
                    ,
                    e.prototype.ready = function (e) {
                        this.collect.set(e);
                        var t = this.config.autotrack;
                        t = Object.assign(eX, t = "object" == typeof t ? t : {}),
                            this.destroyed = !1,
                            this.options = t,
                            this.Config = new eA(eI, this.options),
                            this.Exposure = new eY(this.config, this.handle.bind(this)),
                            this.Listener = new ex(t, this.collect, this.Config),
                            this.EventHandle = new eK(this.config, t),
                            this.Request = new eP(this.collect),
                            this.autoTrackStart = !0,
                            this.init(),
                            function (e, t) {
                                window.TEAVisualEditor = window.TEAVisualEditor || {};
                                var n = ""
                                    ,
                                    i = "https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/visual-editor-rangers.js?query=" + Date.now();
                                window.TEAVisualEditor.appId = t.app_id;
                                var r = t.channel_domain
                                    , o = "";
                                if (eo(["*"]),
                                    r) {
                                    var a, s = "";
                                    try {
                                        var c = window.performance.getEntriesByType("resource");
                                        if (c && c.length && (c.forEach(function (e) {
                                            "script" === e.initiatorType && e.name && -1 !== e.name.indexOf("collect") && (s = e.name)
                                        }),
                                        s && (a = s.split("/")) && a.length)) {
                                            o = "https:/";
                                            for (var u = 2; u < a.length && u !== a.length - 1; u++)
                                                o = o + "/" + a[u];
                                            o && o.indexOf("/5.0") && (o = o.split("/5.0")[0] || o)
                                        }
                                    } catch (e) {
                                    }
                                }
                                if (eu(t, P),
                                "1" === k.get(eG)) {
                                    var l = function () {
                                        var e = k.get(eR);
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {
                                        }
                                        return e
                                    }()
                                        , h = "";
                                    l && (window.TEAVisualEditor.__editor_ajax_domain = l,
                                        h = k.get(eN)),
                                        ej({
                                            event: null,
                                            editorUrl: h || i,
                                            autoTrackInstance: e
                                        }),
                                        eU()
                                } else
                                    try {
                                        es("tea:openVisualEditor", function (t) {
                                            var a = t.data;
                                            if ("string" == typeof t.data)
                                                try {
                                                    a = JSON.parse(t.data)
                                                } catch (e) {
                                                    a = void 0
                                                }
                                            if (a) {
                                                var s = a.referrer
                                                    , c = a.lang;
                                                if (s && (window.TEAVisualEditor.__editor_ajax_domain = s),
                                                    n = i,
                                                    r) {
                                                    var u = a.version;
                                                    n = o ? "" + o + (u ? "/visual-editor-rangers-v" + u : "/visual-editor-rangers-v1.0.0") + ".js" : i,
                                                        window.TEAVisualEditor.__editor_verison = u
                                                }
                                                window.TEAVisualEditor.__editor_url = n,
                                                    window.TEAVisualEditor.lang = c,
                                                    ej({
                                                        event: t,
                                                        editorUrl: n,
                                                        autoTrackInstance: e
                                                    }),
                                                    eU()
                                            }
                                        }),
                                            window.TEAVisualEditor.openAutotrackEditor = function () {
                                                ej({
                                                    event: null,
                                                    editorUrl: window.TEAVisualEditor.__editor_url,
                                                    autoTrackInstance: e
                                                })
                                            }
                                    } catch (e) {
                                    }
                                try {
                                    es("tea:openHeatMapCore", function (n) {
                                        var i = n.data.app_id;
                                        i && i !== t.app_id || ej({
                                            event: n,
                                            editorUrl: "https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/heatmap-core.js?query=" + Date.now(),
                                            autoTrackInstance: e
                                        })
                                    })
                                } catch (e) {
                                }
                            }(this, this.config)
                    }
                    ,
                    e.prototype.init = function () {
                        this.Listener.init(this.handle.bind(this));
                        try {
                            "base" === this.collect.loadType && (window.opener || window.parent).postMessage("[tea-sdk]ready", "*")
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.handle = function (e, t) {
                        "dom" === e.eventType && this.handleDom(e, t)
                    }
                    ,
                    e.prototype.handleDom = function (e, t) {
                        try {
                            var n = e.eventName;
                            if ("click" === n || "exposure" === n || "change" === n || "submit" === n) {
                                var i = this.EventHandle.handleEvent(t, n);
                                null !== i && this.Request.send({
                                    eventType: "custom",
                                    eventName: "report_" + n + "_event",
                                    extra: {
                                        methods: "GET"
                                    }
                                }, i)
                            } else if ("page_view" === n || "page_statistics" === n) {
                                var r = void 0;
                                r = "page_view" === n ? this.EventHandle.handleViewEvent(t) : this.EventHandle.handleStatisticsEvent(t),
                                    this.Request.send({
                                        eventType: "custom",
                                        eventName: "report_${eventName}_event",
                                        extra: {
                                            methods: "GET"
                                        }
                                    }, r)
                            } else if ("beat" === n) {
                                var o = this.EventHandle.handleBeadtEvent(t)
                                    , a = e.eventSend;
                                this.Request.send({
                                    eventType: "custom",
                                    eventName: "report_${eventName}_event",
                                    extra: {
                                        methods: "GET"
                                    },
                                    eventSend: a
                                }, o)
                            }
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.destroy = function () {
                        this.autoTrackStart && (this.autoTrackStart = !1,
                            this.Listener.removeListener())
                    }
                    ,
                    e
            }();
            (i = eH || (eH = {})).Net = "net",
                i.FailNet = "f_net",
                i.FailData = "f_data";
            var eZ = {
                pv: ["predefine_pageview"],
                sdk: ["_be_active", "predefine_page_alive", "predefine_page_close", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append"],
                autotrack: ["bav2b_click", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "__bav_click", "__bav_page", "__bav_beat", "__bav_page_statistics"]
            }
                , e0 = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    if (this.ready = t.app_id && t.enable_tracer && !t.disable_track_event,
                        this.ready) {
                        this.limit = {
                            pv: 1,
                            sdk: 3,
                            autotrack: 3,
                            log: 3
                        },
                            this.errorCode = {
                                f_net: 0,
                                f_data: 0
                            },
                            this.tracerCache = new Map,
                            this.collect = e,
                            this.appid = t.app_id,
                            this.reportUrl = e.configManager.getUrl("event");
                        var i = this.collect.Types
                            , r = e.adapters.fetch;
                        this.fetch = r,
                            this.collect.on(i.Event, function () {
                                n.addCount("log")
                            }),
                            this.collect.on(i.SubmitError, function (e) {
                                var t = e.type
                                    , i = e.eventDate
                                    , r = e.errorCode
                                    , o = e.response;
                                n.addErrorCount(i, t, r, o)
                            }),
                            this.listener(),
                            this.collect.emit(i.TracerReady)
                    }
                }
                    ,
                    e.prototype.addCount = function (e, t, n) {
                        void 0 === t && (t = "net"),
                        void 0 === n && (n = 1);
                        try {
                            this.tracerCache || (this.tracerCache = new Map);
                            var i = void 0;
                            if (this.tracerCache.has(e))
                                (r = this.tracerCache.get(e)).has(t) ? (i = r.get(t).params.count,
                                    i++,
                                    r.set(t, this.processTracer(i, e, t))) : (i = n,
                                    r.set(t, this.processTracer(n, e, t)));
                            else {
                                var r = new Map;
                                i = n,
                                    r.set(t, this.processTracer(n, e, t)),
                                    this.tracerCache.set(e, r)
                            }
                            "net" === t && i >= this.limit[e] && this.report(!1)
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.addErrorCount = function (e, t, n, i) {
                        var r = this;
                        try {
                            if (e && e.length) {
                                var o = e[0].events;
                                o && o.length && ("f_data" === t ? (i && i.hasOwnProperty("sc") ? this.addCount("log", t, o.length - i.sc) : this.addCount("log", t, o.length),
                                    this.errorCode[t] = n) : o.forEach(function (e) {
                                    var i = "log";
                                    for (var o in eZ)
                                        if (-1 !== eZ[o].indexOf(e.event)) {
                                            i = o;
                                            break
                                        }
                                    r.addCount(i, t, 1),
                                        r.errorCode[t] = n
                                }))
                            }
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.report = function (e) {
                        if (this.tracerCache) {
                            var t = [];
                            this.tracerCache.forEach(function (e) {
                                e.forEach(function (e) {
                                    t.push(e)
                                })
                            }),
                            t && t.length && this.sendTracer(t, e)
                        }
                    }
                    ,
                    e.prototype.sendTracer = function (e, t) {
                        try {
                            var n = this.collect.eventManager.merge(e);
                            t && window.navigator.sendBeacon ? window.navigator.sendBeacon(this.reportUrl, JSON.stringify(n)) : this.fetch(this.reportUrl, n),
                                this.tracerCache = null
                        } catch (e) {
                        }
                    }
                    ,
                    e.prototype.processTracer = function (e, t, n) {
                        var i = {
                            count: e,
                            state: n,
                            key: t,
                            params_for_special: "applog_trace",
                            aid: this.appid,
                            platform: "web",
                            _staging_flag: 1,
                            sdk_version: P
                        };
                        "f_net" !== n && "f_data" !== n || (i.errorCode = this.errorCode[n]);
                        var r = this.collect.processEvent("applog_trace", i);
                        if (r && r.event)
                            return delete r.is_bav,
                                r
                    }
                    ,
                    e.prototype.listener = function () {
                        var e = this;
                        document.addEventListener("visibilitychange", function () {
                            "hidden" === document.visibilityState && e.leavePage()
                        }),
                            p(function () {
                                e.leavePage()
                            })
                    }
                    ,
                    e.prototype.leavePage = function () {
                        this.report(!0)
                    }
                    ,
                    e
            }()
                , e1 = w(function (e, t) {
                var n, i, r, o, a, s, c, u, l, h, f, d, p, g, m, v, _, y, b, w, S;
                e.exports = (n = "millisecond",
                    i = "second",
                    r = "minute",
                    o = "hour",
                    a = "week",
                    s = "month",
                    c = "quarter",
                    u = "year",
                    l = "date",
                    h = "Invalid Date",
                    f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    p = function (e, t, n) {
                        var i = String(e);
                        return !i || i.length >= t ? e : "" + Array(t + 1 - i.length).join(n) + e
                    }
                    ,
                    (m = {})[g = "en"] = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                    },
                    v = function (e) {
                        return e instanceof w
                    }
                    ,
                    _ = function (e, t, n) {
                        var i;
                        if (!e)
                            return g;
                        if ("string" == typeof e)
                            m[e] && (i = e),
                            t && (m[e] = t,
                                i = e);
                        else {
                            var r = e.name;
                            m[r] = e,
                                i = r
                        }
                        return !n && i && (g = i),
                        i || !n && g
                    }
                    ,
                    y = function (e, t) {
                        if (v(e))
                            return e.clone();
                        var n = "object" == typeof t ? t : {};
                        return n.date = e,
                            n.args = arguments,
                            new w(n)
                    }
                    ,
                    (b = {
                        s: p,
                        z: function (e) {
                            var t = -e.utcOffset()
                                , n = Math.abs(t);
                            return (t <= 0 ? "+" : "-") + p(Math.floor(n / 60), 2, "0") + ":" + p(n % 60, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date())
                                return -e(n, t);
                            var i = 12 * (n.year() - t.year()) + (n.month() - t.month())
                                , r = t.clone().add(i, s)
                                , o = n - r < 0
                                , a = t.clone().add(i + (o ? -1 : 1), s);
                            return +(-(i + (n - r) / (o ? r - a : a - r)) || 0)
                        },
                        a: function (e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function (e) {
                            return ({
                                M: s,
                                y: u,
                                w: a,
                                d: "day",
                                D: l,
                                h: o,
                                m: r,
                                s: i,
                                ms: n,
                                Q: c
                            })[e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function (e) {
                            return void 0 === e
                        }
                    }).l = _,
                    b.i = v,
                    b.w = function (e, t) {
                        return y(e, {
                            locale: t.$L,
                            utc: t.$u,
                            x: t.$x,
                            $offset: t.$offset
                        })
                    }
                    ,
                    S = (w = function () {
                        function e(e) {
                            this.$L = _(e.locale, null, !0),
                                this.parse(e)
                        }

                        var t = e.prototype;
                        return t.parse = function (e) {
                            this.$d = function (e) {
                                var t = e.date
                                    , n = e.utc;
                                if (null === t)
                                    return new Date(NaN);
                                if (b.u(t))
                                    return new Date;
                                if (t instanceof Date)
                                    return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var i = t.match(f);
                                    if (i) {
                                        var r = i[2] - 1 || 0
                                            , o = (i[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)) : new Date(i[1], r, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)
                                    }
                                }
                                return new Date(t)
                            }(e),
                                this.$x = e.x || {},
                                this.init()
                        }
                            ,
                            t.init = function () {
                                var e = this.$d;
                                this.$y = e.getFullYear(),
                                    this.$M = e.getMonth(),
                                    this.$D = e.getDate(),
                                    this.$W = e.getDay(),
                                    this.$H = e.getHours(),
                                    this.$m = e.getMinutes(),
                                    this.$s = e.getSeconds(),
                                    this.$ms = e.getMilliseconds()
                            }
                            ,
                            t.$utils = function () {
                                return b
                            }
                            ,
                            t.isValid = function () {
                                return this.$d.toString() !== h
                            }
                            ,
                            t.isSame = function (e, t) {
                                var n = y(e);
                                return this.startOf(t) <= n && n <= this.endOf(t)
                            }
                            ,
                            t.isAfter = function (e, t) {
                                return y(e) < this.startOf(t)
                            }
                            ,
                            t.isBefore = function (e, t) {
                                return this.endOf(t) < y(e)
                            }
                            ,
                            t.$g = function (e, t, n) {
                                return b.u(e) ? this[t] : this.set(n, e)
                            }
                            ,
                            t.unix = function () {
                                return Math.floor(this.valueOf() / 1e3)
                            }
                            ,
                            t.valueOf = function () {
                                return this.$d.getTime()
                            }
                            ,
                            t.startOf = function (e, t) {
                                var n = this
                                    , c = !!b.u(t) || t
                                    , h = b.p(e)
                                    , f = function (e, t) {
                                    var i = b.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                                    return c ? i : i.endOf("day")
                                }
                                    , d = function (e, t) {
                                    return b.w(n.toDate()[e].apply(n.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                                }
                                    , p = this.$W
                                    , g = this.$M
                                    , m = this.$D
                                    , v = "set" + (this.$u ? "UTC" : "");
                                switch (h) {
                                    case u:
                                        return c ? f(1, 0) : f(31, 11);
                                    case s:
                                        return c ? f(1, g) : f(0, g + 1);
                                    case a:
                                        var _ = this.$locale().weekStart || 0
                                            , y = (p < _ ? p + 7 : p) - _;
                                        return f(c ? m - y : m + (6 - y), g);
                                    case "day":
                                    case l:
                                        return d(v + "Hours", 0);
                                    case o:
                                        return d(v + "Minutes", 1);
                                    case r:
                                        return d(v + "Seconds", 2);
                                    case i:
                                        return d(v + "Milliseconds", 3);
                                    default:
                                        return this.clone()
                                }
                            }
                            ,
                            t.endOf = function (e) {
                                return this.startOf(e, !1)
                            }
                            ,
                            t.$set = function (e, t) {
                                var a, c = b.p(e), h = "set" + (this.$u ? "UTC" : ""), f = ((a = {}).day = h + "Date",
                                    a[l] = h + "Date",
                                    a[s] = h + "Month",
                                    a[u] = h + "FullYear",
                                    a[o] = h + "Hours",
                                    a[r] = h + "Minutes",
                                    a[i] = h + "Seconds",
                                    a[n] = h + "Milliseconds",
                                    a)[c], d = "day" === c ? this.$D + (t - this.$W) : t;
                                if (c === s || c === u) {
                                    var p = this.clone().set(l, 1);
                                    p.$d[f](d),
                                        p.init(),
                                        this.$d = p.set(l, Math.min(this.$D, p.daysInMonth())).$d
                                } else
                                    f && this.$d[f](d);
                                return this.init(),
                                    this
                            }
                            ,
                            t.set = function (e, t) {
                                return this.clone().$set(e, t)
                            }
                            ,
                            t.get = function (e) {
                                return this[b.p(e)]()
                            }
                            ,
                            t.add = function (e, t) {
                                var n, c = this;
                                e = Number(e);
                                var l = b.p(t)
                                    , h = function (t) {
                                    var n = y(c);
                                    return b.w(n.date(n.date() + Math.round(t * e)), c)
                                };
                                if (l === s)
                                    return this.set(s, this.$M + e);
                                if (l === u)
                                    return this.set(u, this.$y + e);
                                if ("day" === l)
                                    return h(1);
                                if (l === a)
                                    return h(7);
                                var f = ((n = {})[r] = 6e4,
                                    n[o] = 36e5,
                                    n[i] = 1e3,
                                    n)[l] || 1
                                    , d = this.$d.getTime() + e * f;
                                return b.w(d, this)
                            }
                            ,
                            t.subtract = function (e, t) {
                                return this.add(-1 * e, t)
                            }
                            ,
                            t.format = function (e) {
                                var t = this
                                    , n = this.$locale();
                                if (!this.isValid())
                                    return n.invalidDate || h;
                                var i = e || "YYYY-MM-DDTHH:mm:ssZ"
                                    , r = b.z(this)
                                    , o = this.$H
                                    , a = this.$m
                                    , s = this.$M
                                    , c = n.weekdays
                                    , u = n.months
                                    , l = function (e, n, r, o) {
                                    return e && (e[n] || e(t, i)) || r[n].substr(0, o)
                                }
                                    , f = function (e) {
                                    return b.s(o % 12 || 12, e, "0")
                                }
                                    , p = n.meridiem || function (e, t, n) {
                                    var i = e < 12 ? "AM" : "PM";
                                    return n ? i.toLowerCase() : i
                                }
                                    , g = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: s + 1,
                                    MM: b.s(s + 1, 2, "0"),
                                    MMM: l(n.monthsShort, s, u, 3),
                                    MMMM: l(u, s),
                                    D: this.$D,
                                    DD: b.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: l(n.weekdaysMin, this.$W, c, 2),
                                    ddd: l(n.weekdaysShort, this.$W, c, 3),
                                    dddd: c[this.$W],
                                    H: String(o),
                                    HH: b.s(o, 2, "0"),
                                    h: f(1),
                                    hh: f(2),
                                    a: p(o, a, !0),
                                    A: p(o, a, !1),
                                    m: String(a),
                                    mm: b.s(a, 2, "0"),
                                    s: String(this.$s),
                                    ss: b.s(this.$s, 2, "0"),
                                    SSS: b.s(this.$ms, 3, "0"),
                                    Z: r
                                };
                                return i.replace(d, function (e, t) {
                                    return t || g[e] || r.replace(":", "")
                                })
                            }
                            ,
                            t.utcOffset = function () {
                                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15))
                            }
                            ,
                            t.diff = function (e, t, n) {
                                var l, h = b.p(t), f = y(e), d = 6e4 * (f.utcOffset() - this.utcOffset()), p = this - f,
                                    g = b.m(this, f);
                                return g = ((l = {})[u] = g / 12,
                                    l[s] = g,
                                    l[c] = g / 3,
                                    l[a] = (p - d) / 6048e5,
                                    l.day = (p - d) / 864e5,
                                    l[o] = p / 36e5,
                                    l[r] = p / 6e4,
                                    l[i] = p / 1e3,
                                    l)[h] || p,
                                    n ? g : b.a(g)
                            }
                            ,
                            t.daysInMonth = function () {
                                return this.endOf(s).$D
                            }
                            ,
                            t.$locale = function () {
                                return m[this.$L]
                            }
                            ,
                            t.locale = function (e, t) {
                                if (!e)
                                    return this.$L;
                                var n = this.clone()
                                    , i = _(e, t, !0);
                                return i && (n.$L = i),
                                    n
                            }
                            ,
                            t.clone = function () {
                                return b.w(this.$d, this)
                            }
                            ,
                            t.toDate = function () {
                                return new Date(this.valueOf())
                            }
                            ,
                            t.toJSON = function () {
                                return this.isValid() ? this.toISOString() : null
                            }
                            ,
                            t.toISOString = function () {
                                return this.$d.toISOString()
                            }
                            ,
                            t.toString = function () {
                                return this.$d.toUTCString()
                            }
                            ,
                            e
                    }()).prototype,
                    y.prototype = S,
                    [["$ms", n], ["$s", i], ["$m", r], ["$H", o], ["$W", "day"], ["$M", s], ["$y", u], ["$D", l]].forEach(function (e) {
                        S[e[1]] = function (t) {
                            return this.$g(t, e[0], e[1])
                        }
                    }),
                    y.extend = function (e, t) {
                        return e.$i || (e(t, w, y),
                            e.$i = !0),
                            y
                    }
                    ,
                    y.locale = _,
                    y.isDayjs = v,
                    y.unix = function (e) {
                        return y(1e3 * e)
                    }
                    ,
                    y.en = m[g],
                    y.Ls = m,
                    y.p = {},
                    y)
            })
                , e2 = w(function (e, t) {
                var n, i, r, o, a, s, c, u, l, h, f, d;
                e.exports = (r = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        o = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
                        a = {
                            years: 31536e6,
                            months: 2592e6,
                            days: 864e5,
                            hours: 36e5,
                            minutes: 6e4,
                            seconds: 1e3,
                            milliseconds: 1,
                            weeks: 6048e5
                        },
                        s = function (e) {
                            return e instanceof d
                        }
                        ,
                        c = function (e, t, n) {
                            return new d(e, n, t.$l)
                        }
                        ,
                        u = function (e) {
                            return i.p(e) + "s"
                        }
                        ,
                        l = function (e) {
                            return e < 0
                        }
                        ,
                        h = function (e) {
                            return l(e) ? Math.ceil(e) : Math.floor(e)
                        }
                        ,
                        f = function (e, t) {
                            return e ? l(e) ? {
                                negative: !0,
                                format: "" + Math.abs(e) + t
                            } : {
                                negative: !1,
                                format: "" + e + t
                            } : {
                                negative: !1,
                                format: ""
                            }
                        }
                        ,
                        d = function () {
                            function e(e, t, n) {
                                var i = this;
                                if (this.$d = {},
                                    this.$l = n,
                                void 0 === e && (this.$ms = 0,
                                    this.parseFromMilliseconds()),
                                    t)
                                    return c(e * a[u(t)], this);
                                if ("number" == typeof e)
                                    return this.$ms = e,
                                        this.parseFromMilliseconds(),
                                        this;
                                if ("object" == typeof e)
                                    return Object.keys(e).forEach(function (t) {
                                        i.$d[u(t)] = e[t]
                                    }),
                                        this.calMilliseconds(),
                                        this;
                                if ("string" == typeof e) {
                                    var r = e.match(o);
                                    if (r) {
                                        var s = r.slice(2).map(function (e) {
                                            return Number(e)
                                        });
                                        return this.$d.years = s[0],
                                            this.$d.months = s[1],
                                            this.$d.weeks = s[2],
                                            this.$d.days = s[3],
                                            this.$d.hours = s[4],
                                            this.$d.minutes = s[5],
                                            this.$d.seconds = s[6],
                                            this.calMilliseconds(),
                                            this
                                    }
                                }
                                return this
                            }

                            var t = e.prototype;
                            return t.calMilliseconds = function () {
                                var e = this;
                                this.$ms = Object.keys(this.$d).reduce(function (t, n) {
                                    return t + (e.$d[n] || 0) * a[n]
                                }, 0)
                            }
                                ,
                                t.parseFromMilliseconds = function () {
                                    var e = this.$ms;
                                    this.$d.years = h(e / 31536e6),
                                        e %= 31536e6,
                                        this.$d.months = h(e / 2592e6),
                                        e %= 2592e6,
                                        this.$d.days = h(e / 864e5),
                                        e %= 864e5,
                                        this.$d.hours = h(e / 36e5),
                                        e %= 36e5,
                                        this.$d.minutes = h(e / 6e4),
                                        e %= 6e4,
                                        this.$d.seconds = h(e / 1e3),
                                        e %= 1e3,
                                        this.$d.milliseconds = e
                                }
                                ,
                                t.toISOString = function () {
                                    var e = f(this.$d.years, "Y")
                                        , t = f(this.$d.months, "M")
                                        , n = +this.$d.days || 0;
                                    this.$d.weeks && (n += 7 * this.$d.weeks);
                                    var i = f(n, "D")
                                        , r = f(this.$d.hours, "H")
                                        , o = f(this.$d.minutes, "M")
                                        , a = this.$d.seconds || 0;
                                    this.$d.milliseconds && (a += this.$d.milliseconds / 1e3);
                                    var s = f(a, "S")
                                        ,
                                        c = e.negative || t.negative || i.negative || r.negative || o.negative || s.negative
                                        , u = r.format || o.format || s.format ? "T" : ""
                                        ,
                                        l = (c ? "-" : "") + "P" + e.format + t.format + i.format + u + r.format + o.format + s.format;
                                    return "P" === l || "-P" === l ? "P0D" : l
                                }
                                ,
                                t.toJSON = function () {
                                    return this.toISOString()
                                }
                                ,
                                t.format = function (e) {
                                    var t = {
                                        Y: this.$d.years,
                                        YY: i.s(this.$d.years, 2, "0"),
                                        YYYY: i.s(this.$d.years, 4, "0"),
                                        M: this.$d.months,
                                        MM: i.s(this.$d.months, 2, "0"),
                                        D: this.$d.days,
                                        DD: i.s(this.$d.days, 2, "0"),
                                        H: this.$d.hours,
                                        HH: i.s(this.$d.hours, 2, "0"),
                                        m: this.$d.minutes,
                                        mm: i.s(this.$d.minutes, 2, "0"),
                                        s: this.$d.seconds,
                                        ss: i.s(this.$d.seconds, 2, "0"),
                                        SSS: i.s(this.$d.milliseconds, 3, "0")
                                    };
                                    return (e || "YYYY-MM-DDTHH:mm:ss").replace(r, function (e, n) {
                                        return n || String(t[e])
                                    })
                                }
                                ,
                                t.as = function (e) {
                                    return this.$ms / a[u(e)]
                                }
                                ,
                                t.get = function (e) {
                                    var t = this.$ms
                                        , n = u(e);
                                    return "milliseconds" === n ? t %= 1e3 : t = "weeks" === n ? h(t / a[n]) : this.$d[n],
                                        0 === t ? 0 : t
                                }
                                ,
                                t.add = function (e, t, n) {
                                    var i;
                                    return i = t ? e * a[u(t)] : s(e) ? e.$ms : c(e, this).$ms,
                                        c(this.$ms + i * (n ? -1 : 1), this)
                                }
                                ,
                                t.subtract = function (e, t) {
                                    return this.add(e, t, !0)
                                }
                                ,
                                t.locale = function (e) {
                                    var t = this.clone();
                                    return t.$l = e,
                                        t
                                }
                                ,
                                t.clone = function () {
                                    return c(this.$ms, this)
                                }
                                ,
                                t.humanize = function (e) {
                                    return n().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
                                }
                                ,
                                t.milliseconds = function () {
                                    return this.get("milliseconds")
                                }
                                ,
                                t.asMilliseconds = function () {
                                    return this.as("milliseconds")
                                }
                                ,
                                t.seconds = function () {
                                    return this.get("seconds")
                                }
                                ,
                                t.asSeconds = function () {
                                    return this.as("seconds")
                                }
                                ,
                                t.minutes = function () {
                                    return this.get("minutes")
                                }
                                ,
                                t.asMinutes = function () {
                                    return this.as("minutes")
                                }
                                ,
                                t.hours = function () {
                                    return this.get("hours")
                                }
                                ,
                                t.asHours = function () {
                                    return this.as("hours")
                                }
                                ,
                                t.days = function () {
                                    return this.get("days")
                                }
                                ,
                                t.asDays = function () {
                                    return this.as("days")
                                }
                                ,
                                t.weeks = function () {
                                    return this.get("weeks")
                                }
                                ,
                                t.asWeeks = function () {
                                    return this.as("weeks")
                                }
                                ,
                                t.months = function () {
                                    return this.get("months")
                                }
                                ,
                                t.asMonths = function () {
                                    return this.as("months")
                                }
                                ,
                                t.years = function () {
                                    return this.get("years")
                                }
                                ,
                                t.asYears = function () {
                                    return this.as("years")
                                }
                                ,
                                e
                        }(),
                        function (e, t, r) {
                            n = r,
                                i = r().$utils(),
                                r.duration = function (e, t) {
                                    return c(e, {
                                        $l: r.locale()
                                    }, t)
                                }
                                ,
                                r.isDuration = s;
                            var o = t.prototype.add
                                , a = t.prototype.subtract;
                            t.prototype.add = function (e, t) {
                                return s(e) && (e = e.asMilliseconds()),
                                    o.bind(this)(e, t)
                            }
                                ,
                                t.prototype.subtract = function (e, t) {
                                    return s(e) && (e = e.asMilliseconds()),
                                        a.bind(this)(e, t)
                                }
                        }
                )
            });
            e1.extend(e2);
            var e4 = ["__cep_sdk_onboard", "__cep_trigger_sdk", "_be_active"]
                , e3 = ["and", "or", "not"]
                , e5 = function () {
                function e() {
                    this.support = !0,
                        this.currentPlan = 1,
                        this.shouldSendEvent = !1,
                        this.staing = !1,
                        this.test = !1,
                        this.cepReady = !1,
                        this.eventCache = []
                }

                return e.prototype.apply = function (e, t) {
                    var n = this;
                    if (this.collect = e,
                        this.config = t,
                        this.config.cep) {
                        var i = e.adapters
                            , r = i.fetch
                            , o = i.storage
                            , a = e.Types;
                        this.types = a,
                            this.storage = new o(!1),
                            this.fetch = r,
                            this.configManager = e.configManager,
                            this.url = t.cep_url ? "" + t.cep_url : e.configManager.getDomain() + "/service/2/cep_settings/",
                            this.reportUrl = e.configManager.getUrl("event"),
                            this.key = "__tea_cep_plan_" + t.app_id,
                            this.quotasKey = "__tea_cep_plan_quotas_" + t.app_id,
                            this.isWait = !1,
                            this.eventCache = [],
                            this.test = e.configManager.staging,
                            this.collect.on(a.SubmitAfter, function (e) {
                                n.matchEvent(e)
                            }),
                            this.init()
                    }
                }
                    ,
                    e.prototype.init = function () {
                        var e = this
                            , t = !0
                            , n = 0
                            , i = 0
                            , r = 0
                            , o = !1
                            , a = this.storage.getItem(this.key) || {};
                        if (a && Object.keys(a).length && (o = !0,
                            n = a.last_update_time,
                            i = a.fetch_interval,
                            r = a.config_version || 0,
                            t = Date.now() - n > 1e3 * i),
                            t) {
                            var s = this.configManager.get()
                                , c = s.header
                                , u = s.user;
                            this.fetch(this.url, {
                                header: c,
                                user: u,
                                local_time: Date.now(),
                                config_version: r
                            }, 1e4, !1, function (t) {
                                t && 0 === t.code ? (a.fetch_interval = t.fetch_interval,
                                    a.data = t.data,
                                    a.last_update_time = Date.now(),
                                    a.config_version = t.config_version,
                                    e.clearQuotas(),
                                    e.initState(t.data),
                                    e.storage.setItem(e.key, a),
                                    t.data.forEach(function (t) {
                                        e.event("__cep_sdk_onboard", t.plan_id)
                                    })) : (304 === t.code || 400 === t.code) && o && (a.last_update_time = Date.now(),
                                    e.storage.setItem(e.key, a),
                                    e.initState(a.data))
                            }, function () {
                                o ? (e.planData = a.data,
                                    e.initState(a.data)) : e.support = !1
                            })
                        } else
                            a.last_update_time = Date.now(),
                                this.storage.setItem(this.key, a),
                                this.initState(a.data)
                    }
                    ,
                    e.prototype.initState = function (e) {
                        var t = this;
                        e && e.length && (this.stateArray = new Map,
                            this.waitArray = new Map,
                            this.planData = e,
                            e.forEach(function (e) {
                                var n = new Map;
                                if (e.pattern && e.pattern.events) {
                                    var i = 1 === e.pattern.events.length;
                                    e.pattern.events.forEach(function (e) {
                                        n.set(e.id, {
                                            id: e.id,
                                            isMatch: !1,
                                            event: null,
                                            after: e.after || null,
                                            connection: e.connection || null,
                                            window: e.window || null,
                                            matchTime: 0,
                                            initTime: Date.now(),
                                            singleRule: i
                                        })
                                    }),
                                        t.stateArray.set(e.plan_id, {
                                            patternState: n,
                                            singleRule: i,
                                            pattern: {
                                                aid: e.aid,
                                                biz_id: e.biz_id,
                                                end_time: e.end_time,
                                                start_time: e.start_time,
                                                web_sdk_version: e.web_sdk_version,
                                                stage: e.stage
                                            },
                                            quotas: e.quotas
                                        })
                                }
                            }),
                            this.cepReady = !0,
                            this.dealCache(),
                            this.collect.emit(this.types.CepReady))
                    }
                    ,
                    e.prototype.check = function (e) {
                        var t = Date.now();
                        return !(Date.now() > 1e3 * e.end_time) && !(t < 1e3 * e.start_time) && !(t > 1e3 * e.end_time) && (this.staing = "testing" === e.staing,
                        !(P < e.web_sdk_version) || (this.support = !1,
                            !1))
                    }
                    ,
                    e.prototype.dealCache = function () {
                        var e = this;
                        if (this.eventCache.length) {
                            var t = 1;
                            this.eventCache.forEach(function (n) {
                                e.matchEvent(n),
                                    t++
                            }),
                            t === this.eventCache.length && (this.eventCache = [])
                        }
                    }
                    ,
                    e.prototype.matchEvent = function (e) {
                        if (this.support && (!this.staing || this.test) && e && e.length)
                            try {
                                if (!this.cepReady)
                                    return void this.eventCache.push(e);
                                var t = e[0]
                                    , n = t.header
                                    , i = t.user
                                    , r = t.events;
                                r.length && r.reverse();
                                for (var o = 0; o < r.length; o++) {
                                    var a = r[o].event;
                                    if (-1 !== e4.indexOf(a))
                                        return !1;
                                    this.matchRule(n, i, r[o])
                                }
                            } catch (e) {
                                return void this.collect.emit(E.DEBUGGER_MESSAGE, {
                                    type: E.DEBUGGER_MESSAGE_SDK,
                                    info: "发生了异常",
                                    level: "error",
                                    time: Date.now(),
                                    data: e.message
                                })
                            }
                    }
                    ,
                    e.prototype.matchRule = function (e, t, n) {
                        try {
                            for (var i = 0; i < this.planData.length; i++) {
                                var r = this.planData[i]
                                    , o = r.plan_id;
                                if (this.check(r) && this.checkQuotas(o) && r.pattern && r.pattern.events) {
                                    for (var a = r.pattern.events, s = 0; s < a.length; s++)
                                        if (this.rule(e, t, n, a[s].condition)) {
                                            var c = this.stateArray.get(o).patternState
                                                , u = c.get(a[s].id);
                                            if (this.stateArray.get(o).singleRule) {
                                                this.changeStatus(o, a[s].id, n),
                                                    this.publish([n], o, a[s].id);
                                                break
                                            }
                                            if (!u.isMatch) {
                                                u.after && c.get(u.after).isMatch ? this.changeStatus(o, a[s].id, n) : u.after || this.changeStatus(o, a[s].id, n);
                                                break
                                            }
                                        }
                                }
                            }
                            this.statusCheck()
                        } catch (e) {
                            return void this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.changeStatus = function (e, t, n) {
                        var i = this.stateArray.get(e)
                            , r = i.patternState.get(t);
                        r.isMatch = !0,
                            r.event = n,
                            r.matchTime = n.local_time_ms || Date.now(),
                            i.patternState.set(t, r),
                            this.stateArray.set(e, i)
                    }
                    ,
                    e.prototype.statusCheck = function () {
                        var e, t, n, i;
                        try {
                            for (var r = o(this.stateArray), s = r.next(); !s.done; s = r.next()) {
                                var c = a(s.value, 2)
                                    , u = c[0]
                                    , l = c[1]
                                    , h = l.patternState;
                                if (l.isSingle)
                                    break;
                                try {
                                    for (var f = o(h), d = f.next(); !d.done; d = f.next()) {
                                        var p = a(d.value, 2)
                                            , g = p[0]
                                            , m = p[1];
                                        if (m.after && (!m.after || h.get(m.after).isMatch)) {
                                            if ("NOT_FOLLOWED_BY" === m.connection) {
                                                m.isMatch ? this.reset(u, g) : Date.now() - h.get(m.after).matchTime > m.window ? this.publish([h.get(m.after).event, m.event], u, g) : this.startWait(u, g, m);
                                                break
                                            }
                                            m.isMatch ? m.matchTime - h.get(m.after).matchTime <= m.window ? this.publish([h.get(m.after).event, m.event], u, g) : this.reset(u, g) : Date.now() - h.get(m.after).matchTime > m.window ? this.reset(u, g) : this.startWait(u, g, m);
                                            break
                                        }
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (i = f.return) && i.call(f)
                                    } finally {
                                        if (n)
                                            throw n.error
                                    }
                                }
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (t = r.return) && t.call(r)
                            } finally {
                                if (e)
                                    throw e.error
                            }
                        }
                    }
                    ,
                    e.prototype.startWait = function (e, t, n) {
                        var i = this;
                        try {
                            this.waitArray.get(e) || this.waitArray.set(e, new Map);
                            var r = this.waitArray.get(e);
                            if (!r.get(t)) {
                                var o = setTimeout(function () {
                                    var r, o = i.stateArray.get(e).patternState, a = o.get(t);
                                    "NOT_FOLLOWED_BY" === a.connection ? !a.isMatch && o.get(a.after).isMatch || a.matchTime - o.get(a.after).matchTime > n.window ? ((r = i.waitArray.get(e).get(t)).triggerWait = !0,
                                        i.waitArray.set(e, i.waitArray.get(e).set(t, r)),
                                        i.publish([o.get(a.after).event], e, t)) : i.reset(e, t) : "FOLLOWED_BY" === a.connection && (a.isMatch && o.get(a.after).isMatch ? ((r = i.waitArray.get(e).get(t)).triggerWait = !0,
                                        i.waitArray.set(e, i.waitArray.get(e).set(t, r)),
                                        i.publish([o.get(a.after).event], e, t)) : i.reset(e, t))
                                }, n.window);
                                r.set(t, {
                                    waitFn: o,
                                    triggerWait: !1
                                }),
                                    this.waitArray.set(e, r)
                            }
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.rule = function (e, t, n, i) {
                        var r = this;
                        try {
                            var o = n.event
                                , a = n.params;
                            if (a = JSON.parse(a),
                            -1 !== e3.indexOf(i.op)) {
                                if (i.conditions && i.conditions.length) {
                                    var s = i.conditions
                                        , c = 0
                                        , u = new Map;
                                    u.set(c, {
                                        op: i.op,
                                        result: void 0,
                                        resultList: [],
                                        resultKey: [],
                                        resultLength: s.length
                                    }),
                                        function n(i, s) {
                                            for (var l = 0; l < i.length; l++)
                                                if (c++,
                                                -1 !== e3.indexOf(i[l].op) && i[l].hasOwnProperty("conditions"))
                                                    u.set(c, {
                                                        op: i[l].op,
                                                        result: void 0,
                                                        fatherKey: s,
                                                        resultList: [],
                                                        resultKey: [],
                                                        resultLength: i[l].conditions.length
                                                    }),
                                                        n(i[l].conditions, c);
                                                else {
                                                    var h = r.scope(i[l].key)
                                                        , f = h.scope
                                                        , d = h.key
                                                        , p = h.key2
                                                        ,
                                                        g = f ? "header" === f ? p ? JSON.parse(e[p])[d] : e[d] : "user" === f ? t[d] : a[d] : o
                                                        , m = r.calculate(i[l].op, g, i[l].value);
                                                    u.set(c, {
                                                        op: i[l].op,
                                                        result: m,
                                                        fatherKey: s
                                                    })
                                                }
                                        }(s, c);
                                    for (var l = u.get(0); void 0 === l.result || l.resultList.length < l.resultLength;)
                                        u.forEach(function (e, t) {
                                            if (void 0 !== e.result && void 0 !== e.fatherKey) {
                                                var n = u.get(e.fatherKey);
                                                n.resultList.length < n.resultLength && -1 === n.resultKey.indexOf(t) && (n.resultKey.push(t),
                                                    n.resultList.push(e.result),
                                                    u.set(e.fatherKey, n))
                                            }
                                        }),
                                            u.forEach(function (e) {
                                                e.resultList && e.resultList.length === e.resultLength && ("and" === e.op && (e.result = -1 === e.resultList.indexOf(!1)),
                                                "or" === e.op && (e.result = -1 !== e.resultList.indexOf(!0)))
                                            });
                                    return u.get(0).result
                                }
                                return !1
                            }
                            var h = this.scope(i.key)
                                , f = h.scope
                                , d = h.key
                                , p = h.key2
                                ,
                                g = f ? "header" === f ? p ? JSON.parse(e[p])[d] : e[d] : "user" === f ? t[d] : a[d] : o;
                            return this.calculate(i.op, g, i.value)
                        } catch (e) {
                            return this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            }),
                                !1
                        }
                    }
                    ,
                    e.prototype.publish = function (e, t, n) {
                        try {
                            var i = this.configManager.get().user
                                , r = {
                                biz_id: this.stateArray.get(t).pattern.biz_id,
                                plan_id: t,
                                uid: i.user_id || "",
                                did: i.device_id || "",
                                uuid: i.user_unique_id,
                                events: e,
                                extra: {
                                    url: window.location.href
                                }
                            };
                            this.collect.emit("__cep_match", r),
                                (window.opener || window.parent).postMessage({
                                    type: "__cep_match",
                                    data: r
                                }, "*"),
                                this.event("__cep_trigger_sdk", t),
                                this.addQuotas(t),
                                this.reset(t, n)
                        } catch (e) {
                            return void this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.addQuotas = function (e) {
                        var t = this.stateArray.get(e).quotas;
                        if (t && t.length) {
                            var n = this.storage.getItem(this.quotasKey) || {};
                            n[e] || (n[e] = {
                                value: 0,
                                lastTime: Date.now()
                            });
                            var i = n[e].value;
                            0 === i && (n[e].lastTime = Date.now()),
                                n[e].value = i + 1,
                                this.storage.setItem(this.quotasKey, n)
                        }
                    }
                    ,
                    e.prototype.checkQuotas = function (e) {
                        var t = this.stateArray.get(e).quotas
                            , n = this.storage.getItem(this.quotasKey) || {};
                        if (n[e] || (n[e] = {
                            value: 0,
                            lastTime: Date.now()
                        }),
                        t && t.length) {
                            var i = t[0].granularity
                                , r = t[0].value;
                            if ("per_keyid" !== t[0].type)
                                return !0;
                            var o = this.release(i);
                            return "all" === o ? !(n[e].value >= r) : Date.now() - n[e].lastTime >= o ? (n[e].value = 0,
                                n[e].lastTime = Date.now(),
                                this.storage.setItem(this.quotasKey, n),
                                !0) : !(n[e].value >= r)
                        }
                        return !0
                    }
                    ,
                    e.prototype.clearQuotas = function () {
                        this.storage.setItem(this.quotasKey, null)
                    }
                    ,
                    e.prototype.release = function (e) {
                        if ("all" === e)
                            return e;
                        var t = e1.duration(e);
                        return t ? t.asMilliseconds() : "all"
                    }
                    ,
                    e.prototype.reset = function (e, t) {
                        var n = this.stateArray.get(e);
                        if (n.singleRule) {
                            var i = n.patternState.get(t);
                            i.isMatch = !1,
                                i.event = null,
                                i.matchTime = 0,
                                i.initTime = Date.now(),
                                n.patternState.set(t, i)
                        } else
                            n.patternState.forEach(function (e) {
                                e.isMatch = !1,
                                    e.event = null,
                                    e.matchTime = 0,
                                    e.initTime = Date.now()
                            });
                        this.stateArray.set(e, n);
                        var r = this.waitArray.get(e);
                        r && r.get(t) && (clearTimeout(r.get(t).waitFn),
                            r.delete(t))
                    }
                    ,
                    e.prototype.event = function (e, t) {
                        try {
                            var n = {
                                event: e,
                                params: JSON.stringify({
                                    plan_id: t || "",
                                    biz_id: this.stateArray.get(t).pattern.biz_id
                                }),
                                local_time_ms: Date.now()
                            }
                                , i = this.configManager.get()
                                , r = i.header
                                , o = i.user;
                            r.custom = JSON.stringify(r.custom),
                                this.fetch(this.reportUrl, [{
                                    events: [n],
                                    user: o,
                                    header: r
                                }])
                        } catch (e) {
                            return void this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.scope = function (e) {
                        var t = ""
                            , n = "";
                        if (e.indexOf(".") > -1) {
                            var i = e.split(".");
                            t = i[0],
                                e = i[1],
                            "header" === t && "custom" === e && (e = i[2],
                                n = i[1])
                        }
                        return {
                            scope: t,
                            key: e,
                            key2: n
                        }
                    }
                    ,
                    e.prototype.calculate = function (e, t, n) {
                        try {
                            if ("=" === e)
                                return t === n;
                            if (-1 !== ["=", "<", ">", ">=", "<=", "!="].indexOf(e))
                                switch (e) {
                                    case "=":
                                        return t === n;
                                    case "<":
                                        return t < n;
                                    case ">":
                                        return t > n;
                                    case ">=":
                                        return t >= n;
                                    case "<=":
                                        return t <= n;
                                    case "!=":
                                        return t !== n
                                }
                            else {
                                if (-1 !== ["in", "contains"].indexOf(e))
                                    return -1 !== n.indexOf(t);
                                if (-1 !== ["is not null", "is null"].indexOf(e))
                                    return "is null" === e ? null == t : null != t;
                                if (-1 !== ["startswith", "endswith"].indexOf(e)) {
                                    if ("startswith" === e)
                                        return 0 === t.indexOf(n);
                                    var i = t.length - n.length;
                                    return t.substr(i, n.length) === n
                                }
                            }
                        } catch (e) {
                            return this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            }),
                                !1
                        }
                    }
                    ,
                    e
            }()
                , e6 = {
                autotrack: {
                    src: {
                        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/autotrack.js",
                        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/autotrack.js",
                        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/autotrack.js"
                    },
                    object: "LogAutoTrack"
                },
                ab: {
                    src: {
                        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/ab.js",
                        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/ab.js",
                        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/ab.js"
                    },
                    object: "LogAb"
                },
                stay: {
                    src: {
                        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/stay.js",
                        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/stay.js",
                        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/stay.js"
                    },
                    object: "LogStay"
                },
                route: {
                    src: {
                        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/route.js",
                        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/route.js",
                        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/route.js"
                    },
                    object: "LogRoute"
                },
                cep: {
                    src: {
                        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/cep.js",
                        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/cep.js",
                        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/cep.js"
                    },
                    object: "LogCep"
                },
                tracer: {
                    src: {
                        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/tracer.js",
                        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/tracer.js",
                        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/tracer.js"
                    },
                    object: "LogTracer"
                },
                visual: {
                    src: {
                        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/visual.js",
                        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/visual.js",
                        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/visual.js"
                    },
                    object: "LogVisual"
                }
            }
                , e9 = "undefined" != typeof window ? (window.LogPluginObject || (window.LogPluginObject = {}),
                window.LogPluginObject) : null
                , e8 = function () {
                function e() {
                }

                return e.prototype.apply = function (e, t) {
                    this._plugin = {},
                        this.config = t,
                        this.collect = e,
                        this.channel = t.channel || "cn",
                        this.loadExtend()
                }
                    ,
                    e.prototype.loadExtend = function () {
                        var e = this;
                        try {
                            this.collect.remotePlugin.forEach(function (t, n) {
                                if ("sdk" === t) {
                                    if (e6.hasOwnProperty(n)) {
                                        var i = e6[n].object
                                            , r = e6[n].src[e.channel] + "?query=" + Date.now();
                                        e.exist(n, i, r)
                                    }
                                } else
                                    "object" == typeof t && (t.src ? e.exist(n, t.call, t.src) : e.process(n, t.instance, "INSTANCE"))
                            })
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.exist = function (e, t, n) {
                        var i = this;
                        e9[t] ? this.process(e, e9[t]) : this.loadPlugin(e, n, function () {
                            i.process(e, e9[t])
                        }, function () {
                        })
                    }
                    ,
                    e.prototype.process = function (e, t, n) {
                        try {
                            if (n) {
                                var i = new t;
                                i.apply && i.apply(this.collect, this.config)
                            } else
                                t && t(this.collect, this.config)
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e.prototype.loadPlugin = function (e, t, n, i) {
                        var r = this;
                        try {
                            var o = document.createElement("script");
                            o.src = t,
                            this._plugin[e] || (this._plugin[e] = []),
                                this._plugin[e].push(n),
                                o.onerror = function () {
                                    i(t)
                                }
                                ,
                                o.onload = function () {
                                    r._plugin[e].forEach(function (e) {
                                        e()
                                    })
                                }
                                ,
                                document.getElementsByTagName("head")[0].appendChild(o)
                        } catch (e) {
                            this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            })
                        }
                    }
                    ,
                    e
            }()
                , e7 = function () {
                function e() {
                    this.autotrack = !1,
                        this.spa = !1,
                        this.cache = {},
                        this.allowHash = !1
                }

                return e.prototype.apply = function (e, t) {
                    if (t.spa || t.autotrack) {
                        var n = e.Types;
                        this.collect = e,
                            this.config = t,
                            this.appid = t.app_id,
                            this.allowHash = t.allow_hash,
                            this.fncArray = new Map,
                            this.setKey(),
                            this.setLocation(),
                            this.hack(),
                            this.init(),
                            this.listener(),
                            e.emit(n.RouteReady)
                    }
                }
                    ,
                    e.prototype.setKey = function () {
                        var e = this.collect.adapters.storage;
                        this.storage = new e(!1),
                            this.cache_key = "__tea_cache_refer_" + this.appid,
                            this.cache = {
                                refer_key: location.href,
                                refer_title: document.title || location.pathname,
                                refer_manual_key: "",
                                routeChange: !1
                            },
                        this.config.autotrack && "object" == typeof this.config.autotrack && this.config.autotrack.page_manual_key && (this.cache.refer_manual_key = this.config.autotrack.page_manual_key),
                            this.storage.setItem(this.cache_key, this.cache)
                    }
                    ,
                    e.prototype.hack = function () {
                        var e = this
                            , t = window.history.pushState;
                        history.pushState = function (n) {
                            for (var i = [], r = 1; r < arguments.length; r++)
                                i[r - 1] = arguments[r];
                            "function" == typeof history.onpushstate && history.onpushstate({
                                state: n
                            });
                            var o = t.call.apply(t, s([history, n], i));
                            if (e.lastLocation !== location.href) {
                                var a = e.getPopStateChangeEventData();
                                return e.lastLocation = location.href,
                                    e.setReferCache(e.lastLocation),
                                    e.sendPv(a, "pushState"),
                                    o
                            }
                        }
                        ;
                        var n = history.replaceState;
                        history.replaceState = function (t) {
                            for (var i = [], r = 1; r < arguments.length; r++)
                                i[r - 1] = arguments[r];
                            "function" == typeof history.onreplacestate && history.onreplacestate({
                                state: t
                            });
                            var o = n.call.apply(n, s([history, t], i));
                            if (e.lastLocation !== location.href) {
                                var a = e.getPopStateChangeEventData();
                                return e.lastLocation = location.href,
                                    e.setReferCache(e.lastLocation),
                                    e.sendPv(a),
                                    o
                            }
                        }
                    }
                    ,
                    e.prototype.setLocation = function () {
                        "undefined" != typeof window && (this.lastLocation = window.location.href)
                    }
                    ,
                    e.prototype.init = function () {
                        var e = this.getPopStateChangeEventData();
                        this.collect.emit("route-change", {
                            config: e,
                            init: !0
                        })
                    }
                    ,
                    e.prototype.listener = function () {
                        var e = this
                            , t = null;
                        window.addEventListener("hashchange", function (n) {
                            if (e.lastLocation !== window.location.href && (clearTimeout(t),
                                e.allowHash)) {
                                e.lastLocation = window.location.href;
                                var i = e.getPopStateChangeEventData();
                                e.setReferCache(e.lastLocation),
                                    e.sendPv(i)
                            }
                        }),
                            window.addEventListener("popstate", function (n) {
                                e.lastLocation !== window.location.href && (t = setTimeout(function () {
                                    e.lastLocation = window.location.href;
                                    var t = e.getPopStateChangeEventData();
                                    e.setReferCache(e.lastLocation),
                                        e.sendPv(t)
                                }, 10))
                            })
                    }
                    ,
                    e.prototype.getPopStateChangeEventData = function () {
                        var e = this.pageConfig();
                        return e.is_back = 0,
                            e
                    }
                    ,
                    e.prototype.pageConfig = function () {
                        try {
                            var e = this.storage.getItem(this.cache_key) || {}
                                , t = !1
                                , n = this.storage.getItem("__tea_cache_first_" + this.appid);
                            return t = !n || 1 != n,
                                {
                                    is_html: 1,
                                    url: location.href,
                                    referrer: this.handleRefer(),
                                    page_key: location.href,
                                    refer_page_key: this.handleRefer(),
                                    page_title: document.title || location.pathname,
                                    page_manual_key: this.config.autotrack && this.config.autotrack.page_manual_key || "",
                                    refer_page_manual_key: e && e.refer_manual_key || "",
                                    refer_page_title: e && e.refer_title || "",
                                    page_path: location.pathname,
                                    page_host: location.host,
                                    is_first_time: "" + t
                                }
                        } catch (e) {
                            return this.collect.emit(E.DEBUGGER_MESSAGE, {
                                type: E.DEBUGGER_MESSAGE_SDK,
                                info: "发生了异常",
                                level: "error",
                                time: Date.now(),
                                data: e.message
                            }),
                                {}
                        }
                    }
                    ,
                    e.prototype.sendPv = function (e, t) {
                        this.collect.emit("route-change", {
                            config: e,
                            init: !1
                        })
                    }
                    ,
                    e.prototype.handleRefer = function () {
                        var e = this.storage.getItem() || {};
                        return e.routeChange ? e.refer_key : document.referrer
                    }
                    ,
                    e.prototype.setReferCache = function (e) {
                        var t = this.storage.getItem(this.cache_key) || {};
                        t.refer_key = e,
                            t.routeChange = !0,
                            this.storage.setItem(this.cache_key, t)
                    }
                    ,
                    e
            }();
            et.usePlugin(e8, "extend"),
                et.usePlugin(ed, "ab"),
                et.usePlugin(ev, "stay"),
                et.usePlugin(eQ, "autotrack"),
                et.usePlugin(ep, "et"),
                et.usePlugin(e_, "profile"),
                et.usePlugin(e5, "cep"),
                et.usePlugin(ey, "heartbeat"),
                et.usePlugin(eb, "monitor"),
                et.usePlugin(e7, "route"),
                et.usePlugin(e0, "tracer");
            var te = new et("default")
                , tt = et;
            t.default = te
        }
    }
])
