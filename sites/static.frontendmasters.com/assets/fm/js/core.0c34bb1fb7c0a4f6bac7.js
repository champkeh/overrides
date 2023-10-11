/*! For license information please see core.0c34bb1fb7c0a4f6bac7.js.LICENSE.txt */
/*!
     * cookie
     * Copyright(c) 2012-2014 Roman Shtylman
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//! COPYRIGHT (c) 2021 ALL RIGHTS RESERVED
//! See License at https://trackjs.com/terms/
//! TrackJS JavaScript error monitoring agent.


!function () {
    var t = [], e = {}, mods = {
        805: function () {
            const t = window.location.pathname;
            if (!["/", "/login/", "/404/", "/join/", "/my-account/agreement-renewal/", "/reset-your-password/", "/recover-password/"].includes(t)) {
                const e = "/login/?return=" + encodeURIComponent(t);
                Array.from(document.querySelectorAll('a[href="/login/"]')).forEach((t => {
                        t.setAttribute("href", e)
                    }
                ))
            }
        },
        8983: function (t, e, r) {
            "use strict";
            r.r(e),
                r.d(e, {
                    initBookmarkButtons: function () {
                        return i
                    }
                });
            var n = r(9448);

            function i(t) {
                t.forEach((t => {
                        t.removeEventListener("click", s),
                            t.addEventListener("click", s)
                    }
                )),
                    window.addEventListener("bookmark", (e => {
                            t.forEach((t => {
                                    t.dataset.bookmark === e.detail.slug && (t.textContent = "Bookmarked",
                                        t.classList.remove("ButtonGray"),
                                        t.classList.add("ButtonYellow"),
                                        t.classList.add("bookmarked"),
                                        window._bs.bookmarks[e.detail.hash] = {})
                                }
                            ))
                        }
                    )),
                    window.addEventListener("unbookmark", (e => {
                            t.forEach((t => {
                                    t.dataset.bookmark === e.detail.slug && (t.textContent = "Bookmark",
                                        t.classList.remove("bookmarked"),
                                        t.classList.remove("ButtonYellow"),
                                        t.classList.add("ButtonGray"),
                                        delete window._bs.bookmarks[e.detail.hash])
                                }
                            ))
                        }
                    ))
            }

            const o = document.querySelectorAll("#main-content .Button.bookmark");

            function s(t) {
                t.preventDefault();
                const e = t.currentTarget;
                let r;
                const i = e.dataset.bookmark;
                if (!i)
                    return;
                const o = e.dataset.bookmarkId;
                r = e.classList.contains("bookmarked") ? "unbookmark" : "bookmark",
                    n.Z.add({
                        command: r,
                        level: n.Z.levels.USER,
                        data: {
                            courseSlug: i
                        }
                    }),
                    e.dispatchEvent(new CustomEvent(r)),
                    window.dispatchEvent(new CustomEvent(r, {
                        detail: {
                            slug: i,
                            hash: o
                        }
                    }))
            }

            o && i(o)
        },
        2467: function (t, e, r) {
            "use strict";

            function n(t, e, r) {
                let n;
                return function () {
                    const i = this
                        , o = arguments
                        , s = r && !n;
                    clearTimeout(n),
                        n = setTimeout((function () {
                                n = null,
                                r || t.apply(i, o)
                            }
                        ), e),
                    s && t.apply(i, o)
                }
            }

            r.r(e),
                r.d(e, {
                    default: function () {
                        return n
                    }
                })
        },
        2694: function (t, e, r) {
            "use strict";
            r.d(e, {
                t: function () {
                    return i
                }
            });
            var n = function (t, e, r) {
                var n = function (t, e) {
                    this.config = t,
                        this.onError = e,
                    t.enabled && this.watch()
                };
                n.prototype = {
                    watch: function () {
                        f.forEach(["EventTarget", "Node", "XMLHttpRequest"], (function (e) {
                                f.has(t, e + ".prototype.addEventListener") && f.hasOwn(t[e].prototype, "addEventListener") && this.wrapEventTarget(t[e].prototype)
                            }
                        ), this),
                            this.wrapTimer("setTimeout"),
                            this.wrapTimer("setInterval")
                    },
                    wrap: function (t) {
                        function e() {
                            try {
                                return t.apply(this, arguments)
                            } catch (t) {
                                throw i.onError("catch", t, {
                                    bindTime: r,
                                    bindStack: n
                                }),
                                    f.wrapError(t)
                            }
                        }

                        var r, n, i = this;
                        try {
                            if (!f.isFunction(t) || f.hasOwn(t, "__trackjs__"))
                                return t;
                            if (f.hasOwn(t, "__trackjs_state__"))
                                return t.__trackjs_state__
                        } catch (e) {
                            return t
                        }
                        if (i.config.bindStack)
                            try {
                                throw Error()
                            } catch (t) {
                                n = t.stack,
                                    r = f.isoNow()
                            }
                        for (var o in t)
                            f.hasOwn(t, o) && (e[o] = t[o]);
                        return e.prototype = t.prototype,
                            e.__trackjs__ = !0,
                            t.__trackjs_state__ = e
                    },
                    wrapEventTarget: function (t) {
                        var e = this;
                        f.has(t, "addEventListener.call") && f.has(t, "removeEventListener.call") && (f.patch(t, "addEventListener", (function (t) {
                                return function (r, n, i, o) {
                                    try {
                                        f.has(n, "handleEvent") && (n.handleEvent = e.wrap(n.handleEvent))
                                    } catch (t) {
                                    }
                                    return t.call(this, r, e.wrap(n), i, o)
                                }
                            }
                        )),
                            f.patch(t, "removeEventListener", (function (t) {
                                    return function (e, r, n, i) {
                                        try {
                                            r = r && (r.__trackjs_state__ || r)
                                        } catch (t) {
                                        }
                                        return t.call(this, e, r, n, i)
                                    }
                                }
                            )))
                    },
                    wrapTimer: function (e) {
                        var r = this;
                        f.patch(t, e, (function (t) {
                                return function (e, n) {
                                    var i = Array.prototype.slice.call(arguments)
                                        , o = i[0];
                                    return f.isFunction(o) && (i[0] = r.wrap(o)),
                                        f.has(t, "apply") ? t.apply(this, i) : t(i[0], i[1])
                                }
                            }
                        ))
                    }
                };
                var i = function (t) {
                    this.initCurrent(t) || console.warn("[TrackJS] invalid config")
                };
                i.prototype = {
                    current: {},
                    initOnly: {
                        application: !0,
                        cookie: !0,
                        enabled: !0,
                        token: !0,
                        callback: {
                            enabled: !0
                        },
                        console: {
                            enabled: !0
                        },
                        navigation: {
                            enabled: !0
                        },
                        network: {
                            enabled: !0,
                            fetch: !0
                        },
                        visitor: {
                            enabled: !0
                        },
                        window: {
                            enabled: !0,
                            promise: !0
                        }
                    },
                    defaults: {
                        application: "",
                        cookie: !1,
                        dedupe: !0,
                        dependencies: !0,
                        enabled: !0,
                        forwardingDomain: "",
                        errorURL: "https://capture.trackjs.com/capture",
                        errorNoSSLURL: "http://capture.trackjs.com/capture",
                        faultURL: "https://usage.trackjs.com/fault.gif",
                        usageURL: "https://usage.trackjs.com/usage.gif",
                        onError: function () {
                            return !0
                        },
                        serialize: function (t) {
                            function e(t) {
                                var e = "<" + t.tagName.toLowerCase();
                                t = t.attributes || [];
                                for (var r = 0; r < t.length; r++)
                                    e += " " + t[r].name + '="' + t[r].value + '"';
                                return e + ">"
                            }

                            if ("" === t)
                                return "Empty String";
                            if (t === r)
                                return "undefined";
                            if (f.isString(t) || f.isNumber(t) || f.isBoolean(t) || f.isFunction(t))
                                return "" + t;
                            if (f.isElement(t))
                                return e(t);
                            if ("symbol" == typeof t)
                                return Symbol.prototype.toString.call(t);
                            var n;
                            try {
                                n = JSON.stringify(t, (function (t, n) {
                                        return n === r ? "undefined" : f.isNumber(n) && isNaN(n) ? "NaN" : f.isError(n) ? {
                                            name: n.name,
                                            message: n.message,
                                            stack: n.stack
                                        } : f.isElement(n) ? e(n) : n
                                    }
                                ))
                            } catch (e) {
                                for (var i in n = "",
                                    t)
                                    if (t.hasOwnProperty(i))
                                        try {
                                            n += ',"' + i + '":"' + t[i] + '"'
                                        } catch (t) {
                                        }
                                n = n ? "{" + n.replace(",", "") + "}" : "Unserializable Object"
                            }
                            return n.replace(/"undefined"/g, "undefined").replace(/"NaN"/g, "NaN")
                        },
                        sessionId: "",
                        token: "",
                        userId: "",
                        version: "",
                        callback: {
                            enabled: !0,
                            bindStack: !1
                        },
                        console: {
                            enabled: !0,
                            display: !0,
                            error: !0,
                            warn: !1,
                            watch: ["log", "debug", "info", "warn", "error"]
                        },
                        navigation: {
                            enabled: !0
                        },
                        network: {
                            enabled: !0,
                            error: !0,
                            fetch: !0
                        },
                        visitor: {
                            enabled: !0
                        },
                        window: {
                            enabled: !0,
                            promise: !0
                        }
                    },
                    initCurrent: function (t) {
                        return this.removeEmpty(t),
                            this.validate(t, this.defaults, "[TrackJS] config", {}) ? (this.current = f.defaultsDeep({}, t, this.defaults),
                                !0) : (this.current = f.defaultsDeep({}, this.defaults),
                                !1)
                    },
                    setCurrent: function (t) {
                        return !!this.validate(t, this.defaults, "[TrackJS] config", this.initOnly) && (this.current = f.defaultsDeep({}, t, this.current),
                            !0)
                    },
                    removeEmpty: function (t) {
                        for (var e in t)
                            t.hasOwnProperty(e) && t[e] === r && delete t[e]
                    },
                    validate: function (t, e, r, n) {
                        var i = !0;
                        for (var o in r = r || "",
                            n = n || {},
                            t)
                            if (t.hasOwnProperty(o))
                                if (e.hasOwnProperty(o)) {
                                    var s = typeof e[o];
                                    s !== typeof t[o] ? (console.warn(r + "." + o + ": property must be type " + s + "."),
                                        i = !1) : "[object Array]" !== Object.prototype.toString.call(t[o]) || this.validateArray(t[o], e[o], r + "." + o) ? "[object Object]" === Object.prototype.toString.call(t[o]) ? i = this.validate(t[o], e[o], r + "." + o, n[o]) : n.hasOwnProperty(o) && (console.warn(r + "." + o + ": property cannot be set after load."),
                                        i = !1) : i = !1
                                } else
                                    console.warn(r + "." + o + ": property not supported."),
                                        i = !1;
                        return i
                    },
                    validateArray: function (t, e, r) {
                        var n = !0;
                        r = r || "";
                        for (var i = 0; i < t.length; i++)
                            f.contains(e, t[i]) || (console.warn(r + "[" + i + "]: invalid value: " + t[i] + "."),
                                n = !1);
                        return n
                    }
                };
                var o = function (t, e, r, n, i, o, s) {
                    this.util = t,
                        this.log = e,
                        this.onError = r,
                        this.onFault = n,
                        this.serialize = i,
                    s.enabled && (o.console = this.wrapConsoleObject(o.console, s))
                };
                o.prototype = {
                    wrapConsoleObject: function (t, e) {
                        var r, n = (t = t || {}).log || function () {
                        }
                            , i = this;
                        for (r = 0; r < e.watch.length; r++)
                            !function (r) {
                                var o = t[r] || n;
                                t[r] = function () {
                                    try {
                                        var n = Array.prototype.slice.call(arguments);
                                        if (i.log.add("c", {
                                            timestamp: i.util.isoNow(),
                                            severity: r,
                                            message: i.serialize(1 === n.length ? n[0] : n)
                                        }),
                                            e[r])
                                            if (f.isError(n[0]) && 1 === n.length)
                                                i.onError("console", n[0]);
                                            else
                                                try {
                                                    throw Error(i.serialize(1 === n.length ? n[0] : n))
                                                } catch (t) {
                                                    i.onError("console", t)
                                                }
                                        e.display && (i.util.hasFunction(o, "apply") ? o.apply(t, n) : o(n[0]))
                                    } catch (t) {
                                        i.onFault(t)
                                    }
                                }
                            }(e.watch[r]);
                        return t
                    },
                    report: function () {
                        return this.log.all("c")
                    }
                };
                var s = function (t, e, r, n, i) {
                    this.config = t,
                        this.util = e,
                        this.log = r,
                        this.window = n,
                        this.document = i,
                        this.correlationId = this.token = null,
                        this.initialize()
                };
                s.prototype = {
                    initialize: function () {
                        this.token = this.getCustomerToken(),
                            this.correlationId = this.getCorrelationId()
                    },
                    getCustomerToken: function () {
                        if (this.config.current.token)
                            return this.config.current.token;
                        var t = this.document.getElementsByTagName("script");
                        return t[t.length - 1].getAttribute("data-token")
                    },
                    getCorrelationId: function () {
                        var t;
                        if (!this.config.current.cookie)
                            return this.util.uuid();
                        try {
                            (t = this.document.cookie.replace(/(?:(?:^|.*;\s*)TrackJS\s*\=\s*([^;]*).*$)|^.*$/, "$1")) || (t = this.util.uuid(),
                                this.document.cookie = "TrackJS=" + t + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/")
                        } catch (e) {
                            t = this.util.uuid()
                        }
                        return t
                    },
                    report: function () {
                        return {
                            application: this.config.current.application,
                            correlationId: this.correlationId,
                            sessionId: this.config.current.sessionId,
                            token: this.token,
                            userId: this.config.current.userId,
                            version: this.config.current.version
                        }
                    }
                };
                var a = function (t) {
                    this.config = t,
                        this.loadedOn = (new Date).getTime(),
                        this.originalUrl = f.getLocation(),
                        this.referrer = f.isBrowser ? e.referrer : ""
                };
                a.prototype = {
                    discoverDependencies: function () {
                        var e = {
                            TrackJS: "3.10.1"
                        };
                        for (var r in t.jQuery && t.jQuery.fn && t.jQuery.fn.jquery && (e.jQuery = t.jQuery.fn.jquery),
                        t.jQuery && t.jQuery.ui && t.jQuery.ui.version && (e.jQueryUI = t.jQuery.ui.version),
                        t.angular && t.angular.version && t.angular.version.full && (e.angular = t.angular.version.full),
                            t)
                            if ("_trackJs" !== r && "_trackJS" !== r && "_trackjs" !== r && "webkitStorageInfo" !== r && "webkitIndexedDB" !== r && "top" !== r && "parent" !== r && "frameElement" !== r)
                                try {
                                    if (t[r]) {
                                        var n = t[r].version || t[r].Version || t[r].VERSION;
                                        "string" == typeof n && (e[r] = n)
                                    }
                                } catch (t) {
                                }
                        return e.TrackJS && e.trackJs && delete e.trackJs,
                            e
                    },
                    report: function () {
                        return {
                            age: (new Date).getTime() - this.loadedOn,
                            dependencies: this.config.current.dependencies ? this.discoverDependencies() : {
                                trackJs: "3.10.1"
                            },
                            originalUrl: this.originalUrl,
                            referrer: this.referrer,
                            userAgent: t.navigator.userAgent,
                            viewportHeight: f.isBrowser ? t.document.documentElement.clientHeight : 0,
                            viewportWidth: f.isBrowser ? t.document.documentElement.clientWidth : 0
                        }
                    }
                };
                var l = function (t) {
                    this.util = t,
                        this.appender = [],
                        this.maxLength = 30
                };
                l.prototype = {
                    all: function (t) {
                        var e, r, n = [];
                        for (r = 0; r < this.appender.length; r++)
                            (e = this.appender[r]) && e.category === t && n.push(e.value);
                        return n
                    },
                    clear: function () {
                        this.appender.length = 0
                    },
                    truncate: function () {
                        this.appender.length > this.maxLength && (this.appender = this.appender.slice(Math.max(this.appender.length - this.maxLength, 0)))
                    },
                    add: function (t, e) {
                        var r = this.util.uuid();
                        return this.appender.push({
                            key: r,
                            category: t,
                            value: e
                        }),
                            this.truncate(),
                            r
                    },
                    get: function (t, e) {
                        var r, n;
                        for (n = 0; n < this.appender.length; n++)
                            if ((r = this.appender[n]).category === t && r.key === e)
                                return r.value;
                        return !1
                    }
                };
                var c = function (t) {
                    var e = {};
                    return {
                        addMetadata: function (t, r) {
                            e[t] = r
                        },
                        removeMetadata: function (t) {
                            delete e[t]
                        },
                        report: function () {
                            var r, n = [];
                            for (r in e)
                                e.hasOwnProperty(r) && n.push({
                                    key: r,
                                    value: t(e[r])
                                });
                            return n
                        },
                        store: e
                    }
                }
                    , u = function (t, e) {
                    this.log = t,
                        this.options = e,
                    e.enabled && this.watch()
                };
                u.prototype = {
                    isCompatible: function (e) {
                        return e = e || t,
                        !f.has(e, "chrome.app.runtime") && f.has(e, "addEventListener") && f.has(e, "history.pushState")
                    },
                    record: function (t, e, r) {
                        this.log.add("h", {
                            type: t,
                            from: f.truncate(e, 250),
                            to: f.truncate(r, 250),
                            on: f.isoNow()
                        })
                    },
                    report: function () {
                        return this.log.all("h")
                    },
                    watch: function () {
                        if (this.isCompatible()) {
                            var e = this
                                , r = f.getLocationURL().relative;
                            t.addEventListener("popstate", (function () {
                                    var t = f.getLocationURL().relative;
                                    e.record("popState", r, t),
                                        r = t
                                }
                            ), !0),
                                f.forEach(["pushState", "replaceState"], (function (t) {
                                        f.patch(history, t, (function (n) {
                                                return function () {
                                                    r = f.getLocationURL().relative;
                                                    var i = n.apply(this, arguments)
                                                        , o = f.getLocationURL().relative;
                                                    return e.record(t, r, o),
                                                        r = o,
                                                        i
                                                }
                                            }
                                        ))
                                    }
                                ))
                        }
                    }
                };
                var d = function (t, e, r, n, i, o) {
                    this.util = t,
                        this.log = e,
                        this.onError = r,
                        this.onFault = n,
                        this.window = i,
                        this.options = o,
                    o.enabled && this.initialize(i)
                };
                d.prototype = {
                    initialize: function (t) {
                        t.XMLHttpRequest && this.util.hasFunction(t.XMLHttpRequest.prototype.open, "apply") && this.watchNetworkObject(t.XMLHttpRequest),
                        t.XDomainRequest && this.util.hasFunction(t.XDomainRequest.prototype.open, "apply") && this.watchNetworkObject(t.XDomainRequest),
                        this.options.fetch && f.isWrappableFunction(t.fetch) && this.watchFetch()
                    },
                    escapeUrl: function (t) {
                        return ("" + t).replace(/ /gi, "%20").replace(/\t/gi, "%09")
                    },
                    watchFetch: function () {
                        var e = this
                            , r = this.log
                            , n = this.options
                            , i = this.onError;
                        f.patch(t, "fetch", (function (o) {
                                return function (s, a) {
                                    if (a && a.__trackjs__)
                                        return o.apply(t, arguments);
                                    var l;
                                    try {
                                        throw Error()
                                    } catch (t) {
                                        l = t.stack
                                    }
                                    var c = s instanceof Request ? s.url : s
                                        , u = s instanceof Request ? s.method : (a || {}).method || "GET"
                                        , d = (c = e.escapeUrl(c),
                                        o.apply(t, arguments));
                                    return d.__trackjs_state__ = r.add("n", {
                                        type: "fetch",
                                        startedOn: f.isoNow(),
                                        method: u,
                                        url: f.truncate(c, 2e3)
                                    }),
                                        d.then((function (t) {
                                                var e = r.get("n", d.__trackjs_state__);
                                                if (e) {
                                                    f.defaults(e, {
                                                        completedOn: f.isoNow(),
                                                        statusCode: t.status,
                                                        statusText: t.statusText
                                                    });
                                                    var o = t.headers.get("trackjs-correlation-id");
                                                    o && (e.requestCorrelationId = o),
                                                    n.error && 400 <= t.status && ((e = Error(e.statusCode + " : " + e.method + " " + e.url)).stack = l,
                                                        i("ajax", e))
                                                }
                                                return t
                                            }
                                        )).catch((function (t) {
                                                t = t || {};
                                                var e = r.get("n", d.__trackjs_state__);
                                                throw e && (f.defaults(e, {
                                                    completedOn: f.isoNow(),
                                                    statusCode: 0,
                                                    statusText: t.toString()
                                                }),
                                                n.error && (i("ajax", {
                                                    name: t.name,
                                                    message: (t.message || "Failed") + ": " + e.method + " " + e.url,
                                                    stack: t.stack || l
                                                }),
                                                    t.__trackjs_state__ = !0)),
                                                    t
                                            }
                                        ))
                                }
                            }
                        ))
                    },
                    watchNetworkObject: function (t) {
                        var e = this
                            , r = t.prototype.open
                            , n = t.prototype.send;
                        return t.prototype.open = function (t, n) {
                            var i = (n || "").toString();
                            return 0 > i.indexOf("localhost:0") && (i = e.escapeUrl(i),
                                this._trackJs = {
                                    method: t,
                                    url: i
                                }),
                                r.apply(this, arguments)
                        }
                            ,
                            t.prototype.send = function () {
                                if (!this._trackJs)
                                    try {
                                        return n.apply(this, arguments)
                                    } catch (t) {
                                        return void e.onError("ajax", t)
                                    }
                                try {
                                    this._trackJs.logId = e.log.add("n", {
                                        type: "xhr",
                                        startedOn: e.util.isoNow(),
                                        method: this._trackJs.method,
                                        url: f.truncate(this._trackJs.url, 2e3)
                                    }),
                                        e.listenForNetworkComplete(this)
                                } catch (t) {
                                    e.onFault(t)
                                }
                                return n.apply(this, arguments)
                            }
                            ,
                            t
                    },
                    listenForNetworkComplete: function (t) {
                        var e = this;
                        e.window.ProgressEvent && t.addEventListener && t.addEventListener("readystatechange", (function () {
                                4 === t.readyState && e.finalizeNetworkEvent(t)
                            }
                        ), !0),
                            t.addEventListener ? t.addEventListener("load", (function () {
                                    e.finalizeNetworkEvent(t),
                                        e.checkNetworkFault(t)
                                }
                            ), !0) : setTimeout((function () {
                                    try {
                                        var r = t.onload;
                                        t.onload = function () {
                                            e.finalizeNetworkEvent(t),
                                                e.checkNetworkFault(t),
                                            "function" == typeof r && e.util.hasFunction(r, "apply") && r.apply(t, arguments)
                                        }
                                        ;
                                        var n = t.onerror;
                                        t.onerror = function () {
                                            e.finalizeNetworkEvent(t),
                                                e.checkNetworkFault(t),
                                            "function" == typeof oldOnError && n.apply(t, arguments)
                                        }
                                    } catch (t) {
                                        e.onFault(t)
                                    }
                                }
                            ), 0)
                    },
                    finalizeNetworkEvent: function (t) {
                        if (t._trackJs) {
                            var e = this.log.get("n", t._trackJs.logId);
                            e && (e.completedOn = this.util.isoNow(),
                            t.getAllResponseHeaders && t.getResponseHeader && 0 <= (t.getAllResponseHeaders() || "").toLowerCase().indexOf("trackjs-correlation-id") && (e.requestCorrelationId = t.getResponseHeader("trackjs-correlation-id")),
                                e.statusCode = 1223 == t.status ? 204 : t.status,
                                e.statusText = 1223 == t.status ? "No Content" : t.statusText)
                        }
                    },
                    checkNetworkFault: function (t) {
                        if (this.options.error && 400 <= t.status && 1223 != t.status) {
                            var e = t._trackJs || {};
                            this.onError("ajax", t.status + " : " + e.method + " " + e.url)
                        }
                    },
                    report: function () {
                        return this.log.all("n")
                    }
                };
                var h = function (e, r) {
                    this.util = e,
                        this.config = r,
                        this.disabled = !1,
                        this.throttleStats = {
                            attemptCount: 0,
                            throttledCount: 0,
                            lastAttempt: (new Date).getTime()
                        },
                    t.JSON && t.JSON.stringify || (this.disabled = !0)
                };
                h.prototype = {
                    errorEndpoint: function (e) {
                        var r = this.config.current
                            , n = r.errorURL;
                        return f.isBrowser && !f.testCrossdomainXhr() && -1 === t.location.protocol.indexOf("https") ? n = r.errorNoSSLURL : r.forwardingDomain && (n = "https://" + r.forwardingDomain + "/capture"),
                        n + "?token=" + e + "&v=3.10.1"
                    },
                    usageEndpoint: function (t) {
                        var e = this.config.current
                            , r = e.usageURL;
                        return e.forwardingDomain && (r = "https://" + e.forwardingDomain + "/usage.gif"),
                            this.appendObjectAsQuery(t, r)
                    },
                    trackerFaultEndpoint: function (t) {
                        var e = (this.config || {}).current || i.prototype.defaults
                            , r = e.faultURL;
                        return e.forwardingDomain && (r = "https://" + e.forwardingDomain + "/fault.gif"),
                            this.appendObjectAsQuery(t, r)
                    },
                    appendObjectAsQuery: function (t, e) {
                        for (var r in e += "?",
                            t)
                            t.hasOwnProperty(r) && (e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]) + "&");
                        return e
                    },
                    getCORSRequest: function (e, r) {
                        var n;
                        return this.util.testCrossdomainXhr() ? ((n = new t.XMLHttpRequest).open(e, r),
                            n.setRequestHeader("Content-Type", "text/plain")) : void 0 !== t.XDomainRequest ? (n = new t.XDomainRequest).open(e, r) : n = null,
                            n
                    },
                    sendTrackerFault: function (t) {
                        this.throttle(t) || (f.isBrowser ? e.createElement("img").src = this.trackerFaultEndpoint(t) : fetch(this.trackerFaultEndpoint(t), {
                            mode: "no-cors",
                            __trackjs__: !0
                        }))
                    },
                    sendUsage: function (t) {
                        f.isBrowser ? e.createElement("img").src = this.usageEndpoint(t) : fetch(this.usageEndpoint(t), {
                            mode: "no-cors",
                            __trackjs__: !0
                        })
                    },
                    sendError: function (e, n) {
                        var i = this;
                        if (!this.disabled && !this.throttle(e))
                            try {
                                if (f.isBrowser) {
                                    var o = this.getCORSRequest("POST", this.errorEndpoint(n));
                                    o.onreadystatechange = function () {
                                        4 !== o.readyState || f.contains([200, 202], o.status) || (i.disabled = !0)
                                    }
                                        ,
                                        o._trackJs = r,
                                        o.send(t.JSON.stringify(e))
                                } else if (f.isWorker) {
                                    var s = {
                                        method: "POST",
                                        mode: "cors",
                                        body: t.JSON.stringify(e),
                                        __trackjs__: 1
                                    };
                                    fetch(this.errorEndpoint(n), s).then((function (t) {
                                            t.ok || (i.disabled = !0)
                                        }
                                    )).catch((function (t) {
                                            i.disabled = !0
                                        }
                                    ))
                                }
                            } catch (t) {
                                throw this.disabled = !0,
                                    t
                            }
                    },
                    throttle: function (t) {
                        var e = (new Date).getTime();
                        if (this.throttleStats.attemptCount++,
                        this.throttleStats.lastAttempt + 1e3 >= e) {
                            if (this.throttleStats.lastAttempt = e,
                            10 < this.throttleStats.attemptCount)
                                return this.throttleStats.throttledCount++,
                                    !0
                        } else
                            t.throttled = this.throttleStats.throttledCount,
                                this.throttleStats.attemptCount = 0,
                                this.throttleStats.lastAttempt = e,
                                this.throttleStats.throttledCount = 0;
                        return !1
                    }
                };
                var f = function () {
                    function n(t, e, o, s) {
                        return o = o || !1,
                            s = s || 0,
                            f.forEach(e, (function (e) {
                                    f.forEach(f.keys(e), (function (a) {
                                            null === e[a] || e[a] === r ? t[a] = e[a] : o && 10 > s && "[object Object]" === i(e[a]) ? (t[a] = t[a] || {},
                                                n(t[a], [e[a]], o, s + 1)) : t.hasOwnProperty(a) || (t[a] = e[a])
                                        }
                                    ))
                                }
                            )),
                            t
                    }

                    function i(t) {
                        return Object.prototype.toString.call(t)
                    }

                    return {
                        isBrowser: void 0 !== t && void 0 !== t.document,
                        isWorker: "object" == typeof self && self.constructor && 0 <= (self.constructor.name || "").indexOf("WorkerGlobalScope"),
                        isNode: "undefined" != typeof process && null != process.versions && null != process.versions.node,
                        addEventListenerSafe: function (t, e, r, n) {
                            t.addEventListener ? t.addEventListener(e, r, n) : t.attachEvent && t.attachEvent("on" + e, r)
                        },
                        afterDocumentLoad: function (t) {
                            if (f.isWorker)
                                f.defer(t);
                            else {
                                var r = !1;
                                "complete" === e.readyState ? f.defer(t) : (f.addEventListenerSafe(e, "readystatechange", (function () {
                                        "complete" !== e.readyState || r || (f.defer(t),
                                            r = !0)
                                    }
                                )),
                                    setTimeout((function () {
                                            r || (f.defer(t),
                                                r = !0)
                                        }
                                    ), 1e4))
                            }
                        },
                        bind: function (t, e) {
                            return function () {
                                return t.apply(e, Array.prototype.slice.call(arguments))
                            }
                        },
                        contains: function (t, e) {
                            return 0 <= t.indexOf(e)
                        },
                        defaults: function (t) {
                            return n(t, Array.prototype.slice.call(arguments, 1), !1)
                        },
                        defaultsDeep: function (t) {
                            return n(t, Array.prototype.slice.call(arguments, 1), !0)
                        },
                        defer: function (t, e) {
                            setTimeout((function () {
                                    t.apply(e)
                                }
                            ))
                        },
                        forEach: function (t, e, r) {
                            if (f.isArray(t)) {
                                if (t.forEach)
                                    return t.forEach(e, r);
                                for (var n = 0; n < t.length;)
                                    e.call(r, t[n], n, t),
                                        n++
                            }
                        },
                        getLocation: function () {
                            return t.location.toString().replace(/ /g, "%20")
                        },
                        getLocationURL: function () {
                            return f.parseURL(f.getLocation())
                        },
                        has: function (t, e) {
                            try {
                                for (var r = e.split("."), n = t, i = 0; i < r.length; i++) {
                                    if (!n[r[i]])
                                        return !1;
                                    n = n[r[i]]
                                }
                                return !0
                            } catch (t) {
                                return !1
                            }
                        },
                        hasFunction: function (t, e) {
                            try {
                                return !!t[e]
                            } catch (t) {
                                return !1
                            }
                        },
                        hasOwn: function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        },
                        isArray: function (t) {
                            return "[object Array]" === i(t)
                        },
                        isBoolean: function (t) {
                            return "boolean" == typeof t || f.isObject(t) && "[object Boolean]" === i(t)
                        },
                        isBrowserIE: function (e) {
                            var r = (e = e || t.navigator.userAgent).match(/Trident\/([\d.]+)/);
                            return r && "7.0" === r[1] ? 11 : !!(e = e.match(/MSIE ([\d.]+)/)) && parseInt(e[1], 10)
                        },
                        isBrowserSupported: function () {
                            var t = this.isBrowserIE();
                            return !t || 8 <= t
                        },
                        isError: function (t) {
                            if (!f.isObject(t))
                                return !1;
                            var e = i(t);
                            return "[object Error]" === e || "[object DOMException]" === e || f.isString(t.name) && f.isString(t.message)
                        },
                        isElement: function (t) {
                            return f.isObject(t) && 1 === t.nodeType
                        },
                        isFunction: function (t) {
                            return !(!t || "function" != typeof t)
                        },
                        isNumber: function (t) {
                            return "number" == typeof t || f.isObject(t) && "[object Number]" === i(t)
                        },
                        isObject: function (t) {
                            return !(!t || "object" != typeof t)
                        },
                        isString: function (t) {
                            return "string" == typeof t || !f.isArray(t) && f.isObject(t) && "[object String]" === i(t)
                        },
                        isWrappableFunction: function (t) {
                            return this.isFunction(t) && this.hasFunction(t, "apply")
                        },
                        isoNow: function () {
                            var t = new Date;
                            return t.toISOString ? t.toISOString() : t.getUTCFullYear() + "-" + this.pad(t.getUTCMonth() + 1) + "-" + this.pad(t.getUTCDate()) + "T" + this.pad(t.getUTCHours()) + ":" + this.pad(t.getUTCMinutes()) + ":" + this.pad(t.getUTCSeconds()) + "." + String((t.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                        },
                        keys: function (t) {
                            if (!f.isObject(t))
                                return [];
                            var e, r = [];
                            for (e in t)
                                t.hasOwnProperty(e) && r.push(e);
                            return r
                        },
                        noop: function () {
                        },
                        pad: function (t) {
                            return 1 === (t = String(t)).length && (t = "0" + t),
                                t
                        },
                        parseURL: function (t) {
                            var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                            return e ? ((e = {
                                protocol: e[2],
                                host: e[4],
                                path: e[5],
                                query: e[6],
                                hash: e[8]
                            }).origin = (e.protocol || "") + "://" + (e.host || ""),
                                e.relative = (e.path || "") + (e.query || "") + (e.hash || ""),
                                e.href = t,
                                e) : {}
                        },
                        patch: function (t, e, r) {
                            t[e] = r(t[e] || f.noop)
                        },
                        testCrossdomainXhr: function () {
                            return f.isBrowser && "withCredentials" in new XMLHttpRequest
                        },
                        truncate: function (t, e) {
                            if ((t = "" + t).length <= e)
                                return t;
                            var r = t.length - e;
                            return t.substr(0, e) + "...{" + r + "}"
                        },
                        tryGet: function (t, e) {
                            try {
                                return t[e]
                            } catch (t) {
                            }
                        },
                        uuid: function () {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                                    var e = 16 * Math.random() | 0;
                                    return ("x" == t ? e : 3 & e | 8).toString(16)
                                }
                            ))
                        },
                        wrapError: function (t) {
                            var e = t || Object.prototype.toString.call(t);
                            if (e && e.innerError)
                                return t;
                            var r = Error("TrackJS Caught: " + (e.message || e));
                            return r.description = "TrackJS Caught: " + e.description,
                                r.file = e.file,
                                r.line = e.line || e.lineNumber,
                                r.column = e.column || e.columnNumber,
                                r.stack = e.stack,
                                r.innerError = t,
                                r
                        }
                    }
                }()
                    , p = function (t, e, r, n, i, o) {
                    this.util = t,
                        this.log = e,
                        this.onError = r,
                        this.onFault = n,
                        this.options = o,
                        this.document = i,
                    t.isBrowser && o.enabled && this.initialize(i)
                };
                p.prototype = {
                    initialize: function (t) {
                        var e = this.util.bind(this.onDocumentClicked, this)
                            , r = this.util.bind(this.onInputChanged, this);
                        t.addEventListener ? (t.addEventListener("click", e, !0),
                            t.addEventListener("blur", r, !0)) : t.attachEvent && (t.attachEvent("onclick", e),
                            t.attachEvent("onfocusout", r))
                    },
                    onDocumentClicked: function (t) {
                        try {
                            var e = this.getElementFromEvent(t);
                            e && e.tagName && (this.isDescribedElement(e, "a") || this.isDescribedElement(e, "button") || this.isDescribedElement(e, "input", ["button", "submit"]) ? this.writeVisitorEvent(e, "click") : this.isDescribedElement(e, "input", ["checkbox", "radio"]) && this.writeVisitorEvent(e, "input", e.value, e.checked))
                        } catch (t) {
                            this.onFault(t)
                        }
                    },
                    onInputChanged: function (t) {
                        try {
                            var e = this.getElementFromEvent(t);
                            e && e.tagName && (this.isDescribedElement(e, "textarea") ? this.writeVisitorEvent(e, "input", e.value) : this.isDescribedElement(e, "select") && e.options && e.options.length ? this.onSelectInputChanged(e) : this.isDescribedElement(e, "input") && !this.isDescribedElement(e, "input", ["button", "submit", "hidden", "checkbox", "radio"]) && this.writeVisitorEvent(e, "input", e.value))
                        } catch (t) {
                            this.onFault(t)
                        }
                    },
                    onSelectInputChanged: function (t) {
                        if (t.multiple)
                            for (var e = 0; e < t.options.length; e++)
                                t.options[e].selected && this.writeVisitorEvent(t, "input", t.options[e].value);
                        else
                            0 <= t.selectedIndex && t.options[t.selectedIndex] && this.writeVisitorEvent(t, "input", t.options[t.selectedIndex].value)
                    },
                    writeVisitorEvent: function (t, e, n, i) {
                        "password" === this.getElementType(t) && (n = r);
                        var o = this.getElementAttributes(t);
                        t.innerText && (o.__trackjs_element_text = this.util.truncate(t.innerText, 500)),
                            this.log.add("v", {
                                timestamp: this.util.isoNow(),
                                action: e,
                                element: {
                                    tag: t.tagName.toLowerCase(),
                                    attributes: o,
                                    value: this.getMetaValue(n, i)
                                }
                            })
                    },
                    getElementFromEvent: function (t) {
                        return t.target || e.elementFromPoint(t.clientX, t.clientY)
                    },
                    isDescribedElement: function (t, e, r) {
                        if (t.tagName.toLowerCase() !== e.toLowerCase())
                            return !1;
                        if (!r)
                            return !0;
                        for (t = this.getElementType(t),
                                 e = 0; e < r.length; e++)
                            if (r[e] === t)
                                return !0;
                        return !1
                    },
                    getElementType: function (t) {
                        return (t.getAttribute("type") || "").toLowerCase()
                    },
                    getElementAttributes: function (t) {
                        for (var e = {}, r = Math.min(t.attributes.length, 10), n = 0; n < r; n++) {
                            var i = t.attributes[n];
                            f.contains(["data-value", "value"], i.name.toLowerCase()) || (e[i.name] = f.truncate(i.value, 100))
                        }
                        return e
                    },
                    getMetaValue: function (t, e) {
                        return t === r ? r : {
                            length: t.length,
                            pattern: this.matchInputPattern(t),
                            checked: e
                        }
                    },
                    matchInputPattern: function (t) {
                        return "" === t ? "empty" : /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(t) ? "email" : /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(t) || /^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(t) ? "date" : /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(t) ? "usphone" : /^\s*$/.test(t) ? "whitespace" : /^\d*$/.test(t) ? "numeric" : /^[a-zA-Z]*$/.test(t) ? "alpha" : /^[a-zA-Z0-9]*$/.test(t) ? "alphanumeric" : "characters"
                    },
                    report: function () {
                        return this.log.all("v")
                    }
                };
                var v = function (t, e, r, n, i) {
                    this.onError = t,
                        this.onFault = e,
                        this.serialize = r,
                    i.enabled && this.watchWindowErrors(n),
                    i.promise && this.watchPromiseErrors(n)
                };
                v.prototype = {
                    watchPromiseErrors: function (t) {
                        var e = this;
                        t.addEventListener ? t.addEventListener("unhandledrejection", (function (t) {
                                try {
                                    var n = (t = t || {}).detail ? f.tryGet(t.detail, "reason") : f.tryGet(t, "reason");
                                    if (n !== r && null !== n && !n.__trackjs_state__) {
                                        if (!f.isError(n))
                                            try {
                                                throw Error(e.serialize(n))
                                            } catch (t) {
                                                n = t
                                            }
                                        e.onError("promise", n)
                                    }
                                } catch (t) {
                                    e.onFault(t)
                                }
                            }
                        )) : f.patch(t, "onunhandledrejection", (function (t) {
                                return function (r) {
                                    e.onError("promise", r),
                                        t.apply(this, arguments)
                                }
                            }
                        ))
                    },
                    watchWindowErrors: function (t) {
                        var e = this;
                        f.patch(t, "onerror", (function (t) {
                                return function (r, n, i, o, s) {
                                    try {
                                        if (f.isError(s))
                                            return e.onError("window", s),
                                                void t.apply(this, arguments);
                                        var a = {
                                            message: (s = s || {}).message || e.serialize(r),
                                            name: s.name || "Error",
                                            line: s.line || parseInt(i, 10) || null,
                                            column: s.column || parseInt(o, 10) || null,
                                            stack: s.stack || null
                                        };
                                        "[object Event]" !== Object.prototype.toString.call(r) || n ? a.file = s.file || e.serialize(n) : a.file = (r.target || {}).src,
                                            e.onError("window", a)
                                    } catch (t) {
                                        e.onFault(t)
                                    }
                                    t.apply(this, arguments)
                                }
                            }
                        ))
                    }
                };
                var m, g, y = function () {
                    this.hasInstalled = !1,
                        this.hasEnabled = !0,
                        this.window = t,
                        this.document = e,
                        this.util = f,
                        this.install = f.bind(this.install, this),
                        this.onError = f.bind(this.onError, this),
                        this.onFault = f.bind(this.onFault, this),
                        this.serialize = f.bind(this.serialize, this),
                        this.log = new l(f),
                        this.metadata = new c(this.serialize);
                    var r = t && (t._trackJs || t._trackJS || t._trackjs);
                    r && this.install(r)
                };
                return y.prototype = {
                    install: function (t) {
                        try {
                            if (f.isNode)
                                return this.warn("monitoring disabled in node"),
                                    !1;
                            if (!f.has(t, "token"))
                                return this.warn("missing token"),
                                    !1;
                            if (this.hasInstalled)
                                return this.warn("already installed"),
                                    !1;
                            if (this.config = new i(t),
                                this.transmitter = new h(this.util, this.config),
                                this.environment = new a(this.config),
                                this.customer = new s(this.config, this.util, this.log, this.window, this.document),
                                !this.config.current.enabled)
                                return this.hasEnabled = !1;
                            if (this.windowConsoleWatcher = new o(this.util, this.log, this.onError, this.onFault, this.serialize, this.window, this.config.current.console),
                                !this.util.isBrowserSupported())
                                return !1;
                            this.callbackWatcher = new n(this.config.current.callback, this.onError, this.onFault),
                                this.visitorWatcher = new p(this.util, this.log, this.onError, this.onFault, this.document, this.config.current.visitor),
                                this.navigationWatcher = new u(this.log, this.config.current.navigation),
                                this.networkWatcher = new d(this.util, this.log, this.onError, this.onFault, this.window, this.config.current.network),
                                this.windowWatcher = new v(this.onError, this.onFault, this.serialize, this.window, this.config.current.window);
                            var e = this;
                            return f.afterDocumentLoad((function () {
                                    e.transmitter.sendUsage({
                                        token: e.customer.token,
                                        correlationId: e.customer.correlationId,
                                        application: e.config.current.application,
                                        x: e.util.uuid()
                                    })
                                }
                            )),
                                this.hasInstalled = !0
                        } catch (t) {
                            return this.onFault(t),
                                !1
                        }
                    },
                    pub: function () {
                        var t = this
                            , e = {
                            addMetadata: this.metadata.addMetadata,
                            attempt: function (e, r) {
                                try {
                                    var n = Array.prototype.slice.call(arguments, 2);
                                    return e.apply(r || this, n)
                                } catch (e) {
                                    throw t.onError("catch", e),
                                        f.wrapError(e)
                                }
                            },
                            configure: function (e) {
                                return !t.hasInstalled && t.hasEnabled ? (t.warn("agent must be installed"),
                                    !1) : t.config.setCurrent(e)
                            },
                            hash: "fb090f9249a14e8440f317f57bd82ec8d6ea32a4",
                            isInstalled: function () {
                                return t.hasInstalled
                            },
                            install: this.install,
                            removeMetadata: this.metadata.removeMetadata,
                            track: function (e) {
                                if (!t.hasInstalled && t.hasEnabled)
                                    t.warn("agent must be installed");
                                else {
                                    var r = f.isError(e) ? e.message : t.serialize(e);
                                    if (!(e = e || {}).stack)
                                        try {
                                            throw Error(r)
                                        } catch (t) {
                                            e = t
                                        }
                                    t.onError("direct", e)
                                }
                            },
                            version: "3.10.1",
                            watch: function (e, r) {
                                return function () {
                                    try {
                                        var n = Array.prototype.slice.call(arguments, 0);
                                        return e.apply(r || this, n)
                                    } catch (e) {
                                        throw t.onError("catch", e),
                                            f.wrapError(e)
                                    }
                                }
                            },
                            watchAll: function (t) {
                                var e, r = Array.prototype.slice.call(arguments, 1);
                                for (e in t)
                                    "function" != typeof t[e] || f.contains(r, e) || (t[e] = this.watch(t[e], t));
                                return t
                            }
                        };
                        return new o(f, t.log, t.onError, t.onFault, t.serialize, e, i.prototype.defaults.console),
                            e
                    },
                    onError: (g = !1,
                            function (e, r, n) {
                                if (this.hasInstalled && this.hasEnabled && f.isBrowserSupported())
                                    try {
                                        if (n = n || {
                                            bindStack: null,
                                            bindTime: null,
                                            force: !1
                                        },
                                        r && f.isError(r) || (r = {
                                            name: "Error",
                                            message: this.serialize(r, n.force)
                                        }),
                                        -1 === r.message.indexOf("TrackJS Caught"))
                                            if (g && -1 !== r.message.indexOf("Script error"))
                                                g = !1;
                                            else {
                                                var i = f.defaultsDeep({}, {
                                                    agentPlatform: f.isBrowser ? "browser" : "worker",
                                                    bindStack: n.bindStack,
                                                    bindTime: n.bindTime,
                                                    column: r.column || r.columnNumber,
                                                    console: this.windowConsoleWatcher.report(),
                                                    customer: this.customer.report(),
                                                    entry: e,
                                                    environment: this.environment.report(),
                                                    file: r.file || r.fileName,
                                                    line: r.line || r.lineNumber,
                                                    message: r.message,
                                                    metadata: this.metadata.report(),
                                                    nav: this.navigationWatcher.report(),
                                                    network: this.networkWatcher.report(),
                                                    url: (t.location || "").toString(),
                                                    stack: r.stack,
                                                    timestamp: this.util.isoNow(),
                                                    visitor: this.visitorWatcher.report(),
                                                    version: "3.10.1"
                                                });
                                                if (!n.force)
                                                    try {
                                                        if (!this.config.current.onError(i, r))
                                                            return
                                                    } catch (t) {
                                                        i.console.push({
                                                            timestamp: this.util.isoNow(),
                                                            severity: "error",
                                                            message: t.message
                                                        });
                                                        var o = this;
                                                        setTimeout((function () {
                                                                o.onError("catch", t, {
                                                                    force: !0
                                                                })
                                                            }
                                                        ), 0)
                                                    }
                                                if (this.config.current.dedupe) {
                                                    var s = (i.message + i.stack).substr(0, 1e4);
                                                    if (s === m)
                                                        return;
                                                    m = s
                                                }
                                                !function () {
                                                    function t() {
                                                        var t = 0;
                                                        return f.forEach(i.console, (function (e) {
                                                                t += (e.message || "").length
                                                            }
                                                        )),
                                                        8e4 <= t
                                                    }

                                                    for (var e = 0; t() && e < i.console.length;)
                                                        i.console[e].message = f.truncate(i.console[e].message, 1e3),
                                                            e++
                                                }(),
                                                    this.log.clear(),
                                                    setTimeout((function () {
                                                            g = !1
                                                        }
                                                    )),
                                                    g = !0,
                                                    this.transmitter.sendError(i, this.customer.token)
                                            }
                                    } catch (t) {
                                        this.onFault(t)
                                    }
                            }
                    ),
                    onFault: function (t) {
                        var e = this.transmitter || new h;
                        t = t || {},
                            t = {
                                token: (this.customer || {}).token,
                                file: t.file || t.fileName,
                                msg: t.message || "unknown",
                                stack: (t.stack || "unknown").substr(0, 1e3),
                                url: this.window.location,
                                v: "3.10.1",
                                h: "fb090f9249a14e8440f317f57bd82ec8d6ea32a4",
                                x: this.util.uuid()
                            },
                            e.sendTrackerFault(t)
                    },
                    serialize: function (t, e) {
                        if (this.hasInstalled && this.config.current.serialize && !e)
                            try {
                                return this.config.current.serialize(t)
                            } catch (t) {
                                this.onError("catch", t, {
                                    force: !0
                                })
                            }
                        return i.prototype.defaults.serialize(t)
                    },
                    warn: function (e) {
                        f.has(t, "console.warn") && t.console.warn("TrackJS: " + e)
                    }
                },
                    (new y).pub()
            }("undefined" == typeof self ? void 0 : self, "undefined" == typeof document ? void 0 : document);

            function i(t) {
                n.isInstalled() && (t?.parsedBody?.message && (t.message = t.parsedBody.message),
                    n.track(t))
            }

            window.location.origin.includes("frontendmasters.com") && (n.install({
                token: "477b9df4b9af41fea1d32431e1702aa5",
                forwardingDomain: "pathway.frontendmasters.com",
                application: "fm-com",
                userId: window._bs && window._bs.currentUser ? window._bs.currentUser.email : ""
            }),
                window.TrackJS = n)
        },
        4781: function (t, e, r) {
            "use strict";

            function n(t, e = {}) {
                const r = {
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json; charset=utf-8"
                    },
                    ...e
                };
                return r.body && "string" != typeof r.body && (r.body = JSON.stringify(r.body)),
                    fetch(t, r).then((t => {
                            if (!t.ok)
                                throw t;
                            return i(t)
                        }
                    )).catch((t => {
                            if ("function" != typeof t.text)
                                throw t;
                            return i(t).then((t => {
                                    throw t
                                }
                            ))
                        }
                    ))
            }

            function i(t) {
                return t.text().then((e => {
                        try {
                            return t.parsedBody = JSON.parse(e),
                                t
                        } catch (e) {
                            return t
                        }
                    }
                ))
            }

            function o(t) {
                if (t.parsedBody?.data?.errors) {
                    const e = Object.keys(t.parsedBody.data.errors)[0]
                        , r = t.parsedBody.data.errors[e];
                    return "string" == typeof r ? r : r[0]
                }
                if (t.parsedBody?.Message)
                    return t.parsedBody.Message[0].toUpperCase() + t.parsedBody.Message.slice(1);
                if (t.message)
                    return t.message;
                return `Unexpected error ${void 0 !== t.status ? ` (${t.status})` : ""}. Please contact customer support.`
            }

            r.r(e),
                r.d(e, {
                    extractApiError: function () {
                        return o
                    },
                    jsonFetch: function () {
                        return n
                    }
                })
        },
        6774: function () {
            function t(t) {
                t.classList.add("lazyloaded")
            }

            document.querySelectorAll("img[loading='lazy']").forEach((e => {
                    e.complete ? t(e) : e.addEventListener("load", (() => {
                            t(e)
                        }
                    ))
                }
            ))
        },
        9448: function (t, e, r) {
            "use strict";
            r.d(e, {
                Z: function () {
                    return H
                }
            });
            var n = r(9853)
                , i = r.n(n);
            let o;
            const s = new Uint8Array(16);

            function a() {
                if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
                    !o))
                    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return o(s)
            }

            const l = [];
            for (let t = 0; t < 256; ++t)
                l.push((t + 256).toString(16).slice(1));
            var c = {
                randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
            };
            var u = {}
                , d = {}
                , h = {}
                , f = {
                parse: function (t, e) {
                    if ("string" != typeof t)
                        throw new TypeError("argument str must be a string");
                    for (var r = {}, n = e || {}, i = t.split(m), o = n.decode || p, s = 0; s < i.length; s++) {
                        var a = i[s]
                            , l = a.indexOf("=");
                        if (!(l < 0)) {
                            var c = a.substr(0, l).trim()
                                , u = a.substr(++l, a.length).trim();
                            '"' == u[0] && (u = u.slice(1, -1)),
                            null == r[c] && (r[c] = y(u, o))
                        }
                    }
                    return r
                },
                serialize: function (t, e, r) {
                    var n = r || {}
                        , i = n.encode || v;
                    if ("function" != typeof i)
                        throw new TypeError("option encode is invalid");
                    if (!g.test(t))
                        throw new TypeError("argument name is invalid");
                    var o = i(e);
                    if (o && !g.test(o))
                        throw new TypeError("argument val is invalid");
                    var s = t + "=" + o;
                    if (null != n.maxAge) {
                        var a = n.maxAge - 0;
                        if (isNaN(a))
                            throw new Error("maxAge should be a Number");
                        s += "; Max-Age=" + Math.floor(a)
                    }
                    if (n.domain) {
                        if (!g.test(n.domain))
                            throw new TypeError("option domain is invalid");
                        s += "; Domain=" + n.domain
                    }
                    if (n.path) {
                        if (!g.test(n.path))
                            throw new TypeError("option path is invalid");
                        s += "; Path=" + n.path
                    }
                    if (n.expires) {
                        if ("function" != typeof n.expires.toUTCString)
                            throw new TypeError("option expires is invalid");
                        s += "; Expires=" + n.expires.toUTCString()
                    }
                    if (n.httpOnly && (s += "; HttpOnly"),
                    n.secure && (s += "; Secure"),
                        n.sameSite)
                        switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                            case !0:
                                s += "; SameSite=Strict";
                                break;
                            case "lax":
                                s += "; SameSite=Lax";
                                break;
                            case "strict":
                                s += "; SameSite=Strict";
                                break;
                            default:
                                throw new TypeError("option sameSite is invalid")
                        }
                    return s
                }
            }
                , p = decodeURIComponent
                , v = encodeURIComponent
                , m = /; */
                , g = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function y(t, e) {
                try {
                    return e(t)
                } catch (e) {
                    return t
                }
            }

            Object.defineProperty(h, "__esModule", {
                value: !0
            });
            var w = function () {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                        "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, r, n) {
                    return r && t(e.prototype, r),
                    n && t(e, n),
                        e
                }
            }();
            h.hasCookies = function () {
                var t = new E;
                try {
                    var e = "__test";
                    t.setItem(e, "1");
                    var r = t.getItem(e);
                    return t.removeItem(e),
                    "1" === r
                } catch (t) {
                    return !1
                }
            }
            ;
            var _, b = (_ = f) && _.__esModule ? _ : {
                default: _
            }, S = "lS_", E = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        this.cookieOptions = Object.assign({
                            path: "/"
                        }, e),
                        S = void 0 === e.prefix ? S : e.prefix
                }

                return w(t, [{
                    key: "getItem",
                    value: function (t) {
                        var e = b.default.parse(document.cookie);
                        return e && e.hasOwnProperty(S + t) ? e[S + t] : null
                    }
                }, {
                    key: "setItem",
                    value: function (t, e) {
                        return document.cookie = b.default.serialize(S + t, e, this.cookieOptions),
                            e
                    }
                }, {
                    key: "removeItem",
                    value: function (t) {
                        var e = Object.assign({}, this.cookieOptions, {
                            maxAge: -1
                        });
                        return document.cookie = b.default.serialize(S + t, "", e),
                            null
                    }
                }, {
                    key: "clear",
                    value: function () {
                        var t = b.default.parse(document.cookie);
                        for (var e in t)
                            0 === e.indexOf(S) && this.removeItem(e.substr(S.length));
                        return null
                    }
                }]),
                    t
            }();
            h.default = E,
                Object.defineProperty(d, "__esModule", {
                    value: !0
                }),
                d.default = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "localStorage"
                        , e = String(t).replace(/storage$/i, "").toLowerCase();
                    if ("local" === e)
                        return T("localStorage");
                    if ("session" === e)
                        return T("sessionStorage");
                    if ("cookie" === e)
                        return (0,
                            k.hasCookies)();
                    if ("memory" === e)
                        return !0;
                    throw new Error("Storage method `" + t + "` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.")
                }
            ;
            var k = h
                , $ = "__test";

            function T(t) {
                try {
                    var e = window[t];
                    return e.setItem($, "1"),
                        e.removeItem($),
                        !0
                } catch (t) {
                    return !1
                }
            }

            var A = {};
            Object.defineProperty(A, "__esModule", {
                value: !0
            });
            var L = function () {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                        "value" in n && (n.writable = !0),
                            Object.defineProperty(t, n.key, n)
                    }
                }

                return function (e, r, n) {
                    return r && t(e.prototype, r),
                    n && t(e, n),
                        e
                }
            }()
                , C = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        this._data = {}
                }

                return L(t, [{
                    key: "getItem",
                    value: function (t) {
                        return this._data.hasOwnProperty(t) ? this._data[t] : null
                    }
                }, {
                    key: "setItem",
                    value: function (t, e) {
                        return this._data[t] = String(e)
                    }
                }, {
                    key: "removeItem",
                    value: function (t) {
                        return delete this._data[t]
                    }
                }, {
                    key: "clear",
                    value: function () {
                        return this._data = {}
                    }
                }]),
                    t
            }();
            A.default = C,
                Object.defineProperty(u, "__esModule", {
                    value: !0
                }),
                u.MemoryStorage = u.CookieStorage = u.isSupported = u.storage = void 0;
            var P = R(d)
                , O = R(h)
                , x = R(A);

            function R(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            var I = null;
            (0,
                P.default)("localStorage") ? u.storage = I = window.localStorage : (0,
                P.default)("sessionStorage") ? u.storage = I = window.sessionStorage : (0,
                P.default)("cookieStorage") ? u.storage = I = new O.default : u.storage = I = new x.default;
            var j = u.default = I;
            u.storage = I,
                u.isSupported = P.default,
                u.CookieStorage = O.default,
                u.MemoryStorage = x.default;
            var N = {
                set(t, e) {
                    const r = JSON.stringify(e);
                    j.setItem(t, r)
                },
                get(t, e) {
                    const r = j.getItem(t);
                    if (null === r)
                        return e;
                    try {
                        return JSON.parse(r)
                    } catch (t) {
                        return r
                    }
                },
                remove(t) {
                    j.removeItem(t)
                }
            };

            function M(t) {
                return "function" != typeof t.text ? Promise.resolve(t) : t.text().then((e => {
                        try {
                            return t.parsedBody = JSON.parse(e),
                                t
                        } catch (e) {
                            return t
                        }
                    }
                ))
            }

            const U = {
                api: "",
                batchSize: 10,
                errorBackoff: 2e3,
                skipInitial: !1
            };

            class D {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const e = Object.assign({}, U, t);
                    if (this.api = e.api,
                        this.batchSize = e.batchSize,
                        this.defaultErrorBackoff = e.errorBackoff,
                        this.defaultLevel = e.defaultLevel,
                        this.defaultSource = e.defaultSource,
                        this.defaultType = e.defaultType,
                    !this.defaultSource || !this.defaultType || !this.defaultLevel)
                        throw new Error("FMPlayer: EventsSync missing required options");
                    this.levels = D.levels,
                        this.types = D.types,
                        this.sources = D.sources,
                        this.inProgress = !1,
                        this.abortController = null,
                        this.successHandlers = [],
                        this.errorHandlers = [],
                        this.errorBackoff = this.defaultErrorBackoff,
                        this.run = i()((() => this.runImmediately()), 1e3, {
                            maxWait: 5e3
                        }),
                    e.skipInitial || this.run()
                }

                registerSuccessHandler(t) {
                    this.successHandlers.push(t)
                }

                registerErrorHandler(t) {
                    this.errorHandlers.push(t)
                }

                add(t) {
                    if (!t.command)
                        return;
                    t.source = t.source || this.defaultSource,
                        t.eventType = t.eventType || this.defaultType,
                        t.level = t.level || this.defaultLevel,
                        t.timestamp = Date.now(),
                        t.nonce = t.nonce || function (t, e, r) {
                            if (c.randomUUID && !e && !t)
                                return c.randomUUID();
                            const n = (t = t || {}).random || (t.rng || a)();
                            if (n[6] = 15 & n[6] | 64,
                                n[8] = 63 & n[8] | 128,
                                e) {
                                r = r || 0;
                                for (let t = 0; t < 16; ++t)
                                    e[r + t] = n[t];
                                return e
                            }
                            return function (t, e = 0) {
                                return l[t[e + 0]] + l[t[e + 1]] + l[t[e + 2]] + l[t[e + 3]] + "-" + l[t[e + 4]] + l[t[e + 5]] + "-" + l[t[e + 6]] + l[t[e + 7]] + "-" + l[t[e + 8]] + l[t[e + 9]] + "-" + l[t[e + 10]] + l[t[e + 11]] + l[t[e + 12]] + l[t[e + 13]] + l[t[e + 14]] + l[t[e + 15]]
                            }(n)
                        }();
                    const e = JSON.stringify(t);
                    if (this.inProgress) {
                        const t = N.get("fmq2", "");
                        N.set("fmq2", t + (t ? "," : "") + e)
                    } else {
                        const t = N.get("fmq1", "");
                        N.set("fmq1", t + (t ? "," : "") + e)
                    }
                    return this.run(),
                        t.nonce
                }

                remove() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                        , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.inProgress && (this.abortController.abort(),
                        this.inProgress = !1),
                        this.merge();
                    const r = Object.keys(t)
                        , n = Object.keys(e);
                    if (!r.length && !n.length)
                        return;
                    let i = B(N.get("fmq1", ""));
                    i.length && (i = i.filter((i => {
                            let o = 0
                                , s = 0;
                            return r.forEach((r => {
                                    i[r] === t[r] && (o++,
                                        n.forEach((t => {
                                                i.data[t] === e[t] && s++
                                            }
                                        )))
                                }
                            )),
                            o !== r.length || s !== n.length
                        }
                    )),
                        i = JSON.stringify(i),
                        N.set("fmq1", i.slice(1, -1)),
                    this.abortController?.signal.aborted && this.run())
                }

                merge() {
                    const t = N.get("fmq2", "");
                    if (t) {
                        const e = N.get("fmq1", "");
                        N.set("fmq1", e + (e ? "," : "") + t),
                            N.set("fmq2", "")
                    }
                }

                canRun() {
                    return this.api && !this.inProgress && this.onBeforeRun()
                }

                onBeforeRun() {
                    return !0
                }

                runImmediately() {
                    if (!this.canRun())
                        return;
                    if (this.merge(),
                    window.navigator && !window.navigator.onLine)
                        return;
                    const t = N.get("fmq1", "");
                    if (t) {
                        this.inProgress = !0;
                        let e = !1
                            , r = B(t);
                        if (!r.length)
                            return;
                        if (r.length > this.batchSize) {
                            e = !0;
                            const t = JSON.stringify(r.slice(this.batchSize));
                            N.set("fmq2", t.slice(1, -1)),
                                r = r.slice(0, this.batchSize);
                            const n = JSON.stringify(r);
                            N.set("fmq1", n.slice(1, -1))
                        }
                        if (r = r.filter((t => !!t)),
                            !r.length)
                            return;
                        this.abortController = new AbortController,
                            function (t) {
                                const e = {
                                    headers: {
                                        accept: "application/json",
                                        "content-type": "application/json; charset=utf-8"
                                    },
                                    ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                                };
                                return e.body && "string" != typeof e.body && (e.body = JSON.stringify(e.body)),
                                    fetch(t, e).then((t => {
                                            if (!t.ok)
                                                throw t;
                                            return M(t)
                                        }
                                    )).catch((t => M(t).then((t => {
                                            throw t
                                        }
                                    ))))
                            }(this.api, {
                                method: "POST",
                                credentials: "include",
                                signal: this.abortController.signal,
                                body: r
                            }).then((t => {
                                    N.set("fmq1", ""),
                                        this.inProgress = !1,
                                        this.errorBackoff = this.defaultErrorBackoff,
                                    e && this.run(),
                                        this.successHandlers.forEach((e => e(r, t)))
                                }
                            )).catch((t => {
                                    if (this.abortController.signal.aborted)
                                        return void (this.inProgress = !1);
                                    const e = B(N.get("fmq1", ""));
                                    this.errorBackoff >= 2 * this.defaultErrorBackoff * 2 && 500 === t.status && (e.shift(),
                                        N.set("fmq1", JSON.stringify(e).slice(1, -1))),
                                        setTimeout(this.run, this.errorBackoff),
                                        this.errorBackoff = 2 * this.errorBackoff,
                                        this.inProgress = !1,
                                        this.errorHandlers.forEach((r => r(e, t)))
                                }
                            ))
                    }
                }
            }

            function B(t) {
                try {
                    return JSON.parse("[" + t + "]")
                } catch (t) {
                    return N.set("fmq1", ""),
                        []
                }
            }

            D.levels = {
                SYSTEM: 1,
                USER: 2
            },
                D.sources = {
                    SITE: 1,
                    PLAYER: 2
                },
                D.types = {
                    COURSE: 1,
                    LESSON: 2
                },
                D.store = N,
                D.parse = B;
            var q = r(2694);
            const F = new D({
                api: "https://api.frontendmasters.com/v1/kabuki/events/batch",
                defaultLevel: D.levels.SYSTEM,
                defaultSource: D.sources.SITE,
                defaultType: D.types.COURSE
            });
            F.onBeforeRun = function () {
                return window._bs && window._bs.isLoggedIn
            }
                ,
                F.registerErrorHandler(((t, e) => {
                        const {parsedBody: r, status: n} = e;
                        if (401 === n || 403 === n) {
                            const e = t[t.length - 1];
                            if (e.command.includes("bookmark") && e.timestamp > Date.now() - 2e3) {
                                sessionStorage.fmnotify = "Please login to access our course content.";
                                const t = "/login/?return=" + encodeURIComponent(window.location.pathname);
                                return void (window.location.href = t)
                            }
                        }
                        if (F.errorBackoff === 2 * F.defaultErrorBackoff * 2) {
                            let t = "Unknown events API error";
                            r?.message && (t = r.message.charAt(0).toUpperCase() + r.message.slice(1).trim() + "."),
                                (0,
                                    q.t)(`sync ${n || 0} - ${t}`)
                        }
                    }
                ));
            var H = F
        },
        8050: function (t) {
            t.exports = function () {
                "use strict";
                var t = {
                    d: function (e, r) {
                        for (var n in r)
                            t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: r[n]
                            })
                    }
                };
                t.g = function () {
                    if ("object" == typeof globalThis)
                        return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (t) {
                        if ("object" == typeof window)
                            return window
                    }
                }(),
                    t.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }
                    ,
                    t.r = function (t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }),
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            })
                    }
                ;
                var e = {};
                t.r(e),
                    t.d(e, {
                        RM: function () {
                            return ut
                        }
                    });
                var r = 0
                    , n = {
                    token: "empty token",
                    errorCount: 0,
                    tjsToken: "8de4c78a3ec64020ab2ad15dea1ae9ff",
                    tjsApp: "rmagent",
                    tjsVersion: "3.6.0",
                    getErrorUrl: function () {
                        return "https://capture.trackjs.com/capture?token=" + n.tjsToken + "&v=" + n.tjsVersion + "&source=rm"
                    },
                    error: function (t, e) {
                        if (void 0 === e && (e = null),
                            !(r >= 2)) {
                            var i = t || {}
                                , o = i.message || "empty"
                                , s = i.stack || (new Error).stack;
                            n.errorCount++;
                            var a = (self.location || "").toString()
                                , l = {
                                agentPlatform: "browser",
                                console: [{
                                    message: JSON.stringify(t),
                                    severity: "log",
                                    timestamp: (new Date).toISOString()
                                }],
                                customer: {
                                    token: n.tjsToken,
                                    application: n.tjsApp,
                                    userId: n.token,
                                    version: "1.13.1"
                                },
                                entry: "catch",
                                environment: {
                                    originalUrl: a,
                                    userAgent: navigator.userAgent
                                },
                                message: o,
                                url: a,
                                stack: s,
                                timestamp: (new Date).toISOString(),
                                version: n.tjsVersion
                            };
                            null != e && l.console.push({
                                message: e,
                                severity: "log",
                                timestamp: (new Date).toISOString()
                            });
                            var c = new XMLHttpRequest;
                            c.open("POST", n.getErrorUrl()),
                                c.send(JSON.stringify(l)),
                                r++
                        }
                    }
                };

                function i() {
                    return "undefined" == typeof document
                }

                function o(t) {
                    return (t = t || "").indexOf("?") >= 0 && (t = t.split("?")[0]),
                    t.length >= 1e3 && (t = t.substr(0, 1e3)),
                        t
                }

                function s(t, e) {
                    if ((t = "" + t).length <= e)
                        return t;
                    var r = t.length - e;
                    return t.substr(0, e) + "...{" + r + "}"
                }

                function a(t, e) {
                    return void 0 === e && (e = 0),
                        parseFloat(t.toFixed(e))
                }

                var l = ["com", "net", "gov", "edu", "org"];

                function c(t, e, r) {
                    var n = t[e] || u;
                    t[e] = r(n)
                }

                function u() {
                }

                function d() {
                    return Math.floor(1e3 * (Date.now() + Math.random()))
                }

                function h(t, e) {
                    try {
                        for (var r = e.split("."), n = t, i = 0; i < r.length; i++) {
                            if (!n[r[i]])
                                return !1;
                            n = n[r[i]]
                        }
                        return !0
                    } catch (t) {
                        return !1
                    }
                }

                function f(t) {
                    return t = t || {},
                        Object.keys(t).forEach((function (e, r) {
                                r > 25 ? delete t[e] : t[e] = s(t[e], 100)
                            }
                        )),
                        t
                }

                function p(t) {
                    return Object.prototype.toString.call(t)
                }

                function v(t) {
                    return g(t) && 1 === t.nodeType
                }

                function m(t) {
                    return "number" == typeof t || g(t) && "[object Number]" === p(t)
                }

                function g(t) {
                    return !(!t || "object" != typeof t)
                }

                function y(t) {
                    return "string" == typeof t || !function (t) {
                        return "[object Array]" === p(t)
                    }(t) && g(t) && "[object String]" === p(t)
                }

                function w(t) {
                    if (!g(t))
                        return !1;
                    var e = p(t);
                    return "[object Error]" === e || "[object DOMException]" === e || y(t.name) && y(t.message)
                }

                function _(t) {
                    function e(t) {
                        for (var e = "<" + t.tagName.toLowerCase(), r = t.attributes || [], n = 0; n < r.length; n++)
                            e += " " + r[n].name + '="' + r[n].value + '"';
                        return e + ">"
                    }

                    var r, n = "undefined";
                    if ("" === t)
                        return "Empty String";
                    if (void 0 === t)
                        return n;
                    if (y(t) || m(t) || function (t) {
                        return "boolean" == typeof t || g(t) && "[object Boolean]" === p(t)
                    }(t) || function (t) {
                        return !(!t || "function" != typeof t)
                    }(t))
                        return "" + t;
                    if (v(t))
                        return e(t);
                    if ("symbol" == typeof t)
                        return Symbol.prototype.toString.call(t);
                    try {
                        r = JSON.stringify(t, (function (t, r) {
                                return void 0 === r ? n : m(r) && isNaN(r) ? "NaN" : w(r) ? {
                                    name: r.name,
                                    message: r.message,
                                    stack: r.stack
                                } : v(r) ? e(r) : r
                            }
                        ))
                    } catch (e) {
                        var i = "";
                        for (var o in t)
                            if (t.hasOwnProperty(o))
                                try {
                                    i += ',"' + o + '":"' + t[o] + '"'
                                } catch (t) {
                                }
                        r = i ? "{" + i.replace(",", "") + "}" : "Unserializable Object"
                    }
                    return r.replace(/"undefined"/g, n).replace(/"NaN"/g, "NaN")
                }

                function b(t) {
                    if (!t)
                        return "";
                    if ((t = t.toString()).startsWith("http") || i())
                        return t;
                    try {
                        return new URL(t, document.baseURI).toString()
                    } catch (e) {
                        return t
                    }
                }

                var S, E, k, $, T = new (function () {
                    function e() {
                        var t = this;
                        this.apiEntries = [],
                            this.addEntry = function (e) {
                                e.url && 0 === e.url.indexOf("http") && (t.options.monitorSelfCalls || 0 !== e.url.indexOf(t.options.ingestUrl)) && t.apiEntries.push(e)
                            }
                    }

                    return e.prototype.install = function (t) {
                        this.options = t,
                            this.wrapFetch(),
                            this.wrapXhr()
                    }
                        ,
                        e.prototype.getApis = function (t) {
                            if (void 0 === t && (t = !1),
                            t || this.apiEntries.length >= 10) {
                                var e = this.apiEntries;
                                return this.apiEntries = [],
                                    e
                            }
                            return []
                        }
                        ,
                        e.prototype.wrapFetch = function () {
                            var e = this;
                            c(t.g, "fetch", (function (r) {
                                    return function (n, s) {
                                        var l = n instanceof Request ? n.url : n
                                            , c = n instanceof Request ? n.method : (s || {}).method || "GET"
                                            , u = r.apply(t.g, arguments);
                                        return u.__rm_state__ = {
                                            source: i() ? "worker" : "fetch",
                                            startedOn: a(performance.now()),
                                            method: c,
                                            requestUrl: b(l),
                                            pageUrl: o(self.location.toString())
                                        },
                                            u.then((function (t) {
                                                    var r = u.__rm_state__;
                                                    if (r) {
                                                        var n = performance.now()
                                                            , i = {
                                                            source: r.source,
                                                            method: r.method,
                                                            startedOn: r.startedOn,
                                                            pageUrl: r.pageUrl,
                                                            duration: a(n) - r.startedOn,
                                                            statusCode: t.status,
                                                            contentLength: t.headers.get("content-length"),
                                                            contentType: t.headers.get("content-type"),
                                                            url: t.url || r.requestUrl
                                                        };
                                                        e.addEntry(i)
                                                    }
                                                    return t
                                                }
                                            )).catch((function (t) {
                                                    var r = u.__rm_state__;
                                                    if (r) {
                                                        var n = performance.now()
                                                            , i = {
                                                            source: r.source,
                                                            method: r.method,
                                                            startedOn: r.startedOn,
                                                            pageUrl: r.pageUrl,
                                                            duration: a(n) - r.startedOn,
                                                            statusCode: 0,
                                                            contentLength: null,
                                                            contentType: null,
                                                            url: r.requestUrl
                                                        };
                                                        e.addEntry(i)
                                                    }
                                                    throw t
                                                }
                                            ))
                                    }
                                }
                            ))
                        }
                        ,
                        e.prototype.wrapXhr = function () {
                            if (!i()) {
                                var t = this;
                                c(XMLHttpRequest.prototype, "open", (function (t) {
                                        return function (e, r) {
                                            var n = this;
                                            return n.__rm_state__ = {
                                                source: "xhr",
                                                method: e,
                                                requestUrl: b((r || "").toString())
                                            },
                                                t.apply(n, arguments)
                                        }
                                    }
                                )),
                                    c(XMLHttpRequest.prototype, "send", (function (e) {
                                            return function () {
                                                var r = this
                                                    , n = r.__rm_state__;
                                                return n ? (r.__rm_state__ = Object.assign(n, {
                                                    startedOn: a(performance.now()),
                                                    pageUrl: o(self.location.toString())
                                                }),
                                                    r.addEventListener("readystatechange", (function () {
                                                            if (4 === r.readyState) {
                                                                var e = r.__rm_state__
                                                                    , n = performance.now()
                                                                    , i = {
                                                                    source: e.source,
                                                                    method: e.method,
                                                                    startedOn: e.startedOn,
                                                                    pageUrl: e.pageUrl,
                                                                    duration: a(n) - e.startedOn,
                                                                    statusCode: r.status,
                                                                    url: r.responseURL || e.requestUrl,
                                                                    contentLength: r.getResponseHeader("content-length"),
                                                                    contentType: r.getResponseHeader("content-type")
                                                                };
                                                                t.addEntry(i)
                                                            }
                                                        }
                                                    ), !0),
                                                    e.apply(r, arguments)) : e.apply(r, arguments)
                                            }
                                        }
                                    ))
                            }
                        }
                        ,
                        e
                }()), A = new (function () {
                    function t() {
                        this.errorEntries = []
                    }

                    return t.prototype.install = function (t) {
                        this.options = t,
                            this.watchGlobal(),
                            this.watchPromise(),
                            this.wrapConsole()
                    }
                        ,
                        t.prototype.getErrors = function (t) {
                            if (void 0 === t && (t = !1),
                            t || this.errorEntries.length >= 1) {
                                var e = this.errorEntries;
                                return this.errorEntries = [],
                                    e
                            }
                            return []
                        }
                        ,
                        t.prototype.addError = function (t) {
                            null != t.message && 0 !== t.message.toString().indexOf("Script error") && this.errorEntries.push(t)
                        }
                        ,
                        t.prototype.watchGlobal = function () {
                            self.addEventListener("error", (function (t) {
                                    try {
                                        if (!t || !t.error)
                                            return;
                                        A.addError({
                                            name: t.error.name,
                                            message: t.error.message,
                                            stack: t.error.stack,
                                            cause: t.error.cause ? _(t.error.cause) : void 0,
                                            time: a(performance.now()),
                                            entry: "global",
                                            pageUrl: self.location.toString()
                                        })
                                    } catch (t) {
                                        n.error(t, "global error handler")
                                    }
                                }
                            ))
                        }
                        ,
                        t.prototype.watchPromise = function () {
                            self.addEventListener("unhandledrejection", (function (t) {
                                    try {
                                        if (!t)
                                            return;
                                        var e = t.reason;
                                        if (null == e)
                                            return;
                                        w(e) || (e = new Error(_(e))),
                                            A.addError({
                                                name: e.name,
                                                message: e.message,
                                                stack: e.stack,
                                                cause: e.cause ? _(e.cause) : void 0,
                                                time: a(performance.now()),
                                                entry: "promise",
                                                pageUrl: self.location.toString()
                                            })
                                    } catch (t) {
                                        n.error(t, "promise error handler")
                                    }
                                }
                            ))
                        }
                        ,
                        t.prototype.wrapConsole = function () {
                            c(self.console, "error", (function (t) {
                                    return function () {
                                        try {
                                            var e, r = Array.prototype.slice.call(arguments);
                                            e = 1 === r.length && w(r[0]) ? r[0] : new Error(1 === r.length ? _(r[0]) : _(r)),
                                                A.addError({
                                                    name: e.name,
                                                    message: e.message,
                                                    stack: e.stack,
                                                    cause: e.cause ? _(e.cause) : void 0,
                                                    time: a(performance.now()),
                                                    entry: "console",
                                                    pageUrl: self.location.toString()
                                                })
                                        } catch (t) {
                                            n.error(t, "console error handler")
                                        }
                                        return t.apply(this, arguments)
                                    }
                                }
                            ))
                        }
                        ,
                        t
                }()), L = "__rm_sid__", C = "__rm_sid_ts__", P = {
                    _sessionId: 0,
                    _storageDisabled: !1,
                    getSessionId: function () {
                        if (!self.performance)
                            return 0;
                        var t = Date.now()
                            , e = 0;
                        if (this._storageDisabled && this._sessionId)
                            return this._sessionId;
                        try {
                            this._sessionId = parseInt(localStorage.getItem(L), 10),
                                e = parseInt(localStorage.getItem(C), 10)
                        } catch (t) {
                            this._storageDisabled = !0
                        }
                        if (!this._sessionId || this.isSessionExpired(t, e)) {
                            this._sessionId = d(),
                                O.addEvent({
                                    name: "session_start",
                                    time: a(performance.now()),
                                    pageUrl: self.location.toString(),
                                    referrer: i() ? "" : document.referrer
                                });
                            try {
                                localStorage.setItem(L, this._sessionId.toString()),
                                    this.refreshSession()
                            } catch (t) {
                                this._storageDisabled = !0
                            }
                        }
                        return this._sessionId
                    },
                    refreshSession: function () {
                        try {
                            localStorage.setItem(C, Date.now().toString())
                        } catch (t) {
                        }
                    },
                    isSessionExpired: function (t, e) {
                        return !e || e + 18e5 < t
                    }
                }, O = new (function () {
                    function t() {
                        var t = this;
                        this.eventEntries = [],
                            this.onDocumentClicked = function (e) {
                                try {
                                    var r = t.getElementFromEvent(e);
                                    if (!r || !r.tagName)
                                        return;
                                    var i = t.getDescribedElement(r, "a") || t.getDescribedElement(r, "button") || t.getDescribedElement(r, "input", ["button", "submit"])
                                        , o = t.getDescribedElement(r, "input", ["checkbox", "radio"]);
                                    i ? t.writeActivityEvent(i, "click") : o && t.writeActivityEvent(o, "input", o.value, o.checked)
                                } catch (t) {
                                    n.error(t, "On Document Clicked Error")
                                }
                            }
                            ,
                            this.onInputChanged = function (e) {
                                try {
                                    var r = t.getElementFromEvent(e);
                                    if (!r || !r.tagName)
                                        return;
                                    var i = t.getDescribedElement(r, "textarea")
                                        , o = t.getDescribedElement(r, "select")
                                        , s = t.getDescribedElement(r, "input")
                                        ,
                                        a = t.getDescribedElement(r, "input", ["button", "submit", "hidden", "checkbox", "radio"]);
                                    i ? t.writeActivityEvent(i, "input", i.value) : o && o.options && o.options.length ? t.onSelectInputChanged(o) : s && !a && t.writeActivityEvent(s, "input", s.value)
                                } catch (t) {
                                    n.error(t, "On Input Changed Error")
                                }
                            }
                            ,
                            this.onFirstScroll = function () {
                                document.removeEventListener("scroll", t.onFirstScroll),
                                    t.addEvent({
                                        name: "first_scroll",
                                        time: a(performance.now()),
                                        pageUrl: self.location.toString()
                                    })
                            }
                    }

                    return t.prototype.install = function (t) {
                        this.options = t,
                            this.wrapHistory(),
                            this.wrapActivity(),
                            this.addEvent({
                                name: i() ? "worker_init" : "page_view",
                                time: a(performance.now()),
                                pageUrl: self.location.toString()
                            })
                    }
                        ,
                        t.prototype.getEvents = function (t) {
                            if (void 0 === t && (t = !1),
                            t || this.eventEntries.length >= 1) {
                                var e = this.eventEntries;
                                return this.eventEntries = [],
                                    e
                            }
                            return []
                        }
                        ,
                        t.prototype.addEvent = function (t) {
                            P.refreshSession(),
                                this.eventEntries.push(t)
                        }
                        ,
                        t.prototype.wrapActivity = function () {
                            i() || (document.addEventListener("click", this.onDocumentClicked, !0),
                                document.addEventListener("blur", this.onInputChanged, !0),
                                document.addEventListener("scroll", this.onFirstScroll, {
                                    once: !0,
                                    capture: !0,
                                    passive: !0
                                }))
                        }
                        ,
                        t.prototype.wrapHistory = function () {
                            var t = this;
                            if (this.isCompatible()) {
                                var e = this;
                                self.addEventListener("popstate", (function () {
                                        t.addEvent({
                                            name: "popstate",
                                            time: a(performance.now()),
                                            pageUrl: self.location.toString()
                                        })
                                    }
                                ), !0),
                                    c(history, "pushState", (function (t) {
                                            return function () {
                                                var r = t.apply(this, arguments);
                                                return e.addEvent({
                                                    name: "pushState",
                                                    time: a(performance.now()),
                                                    pageUrl: self.location.toString()
                                                }),
                                                    r
                                            }
                                        }
                                    ))
                            }
                        }
                        ,
                        t.prototype.isCompatible = function () {
                            return !i() && !h(self, "chrome.app.runtime") && h(self, "addEventListener") && h(self, "history.pushState")
                        }
                        ,
                        t.prototype.onSelectInputChanged = function (t) {
                            if (t.multiple)
                                for (var e = 0; e < t.options.length; e++)
                                    t.options[e].selected && this.writeActivityEvent(t, "input", t.options[e].value);
                            else
                                t.selectedIndex >= 0 && t.options[t.selectedIndex] && this.writeActivityEvent(t, "input", t.options[t.selectedIndex].value)
                        }
                        ,
                        t.prototype.writeActivityEvent = function (t, e, r, n) {
                            "password" === this.getElementType(t) && (r = void 0),
                                this.addEvent({
                                    name: e,
                                    time: a(performance.now()),
                                    pageUrl: self.location.toString(),
                                    element: {
                                        tag: t.tagName.toLowerCase(),
                                        attributes: this.getElementAttributes(t),
                                        value: this.getMetaValue(r, n),
                                        text: t.innerText ? s(t.innerText, 100) : ""
                                    }
                                })
                        }
                        ,
                        t.prototype.getElementFromEvent = function (t) {
                            return t.target || document.elementFromPoint(t.clientX, t.clientY)
                        }
                        ,
                        t.prototype.getDescribedElement = function (t, e, r) {
                            if (t.closest) {
                                if (!(t = t.closest(e)))
                                    return null
                            } else if (t.tagName.toLowerCase() !== e.toLowerCase())
                                return null;
                            if (!r)
                                return t;
                            for (var n = this.getElementType(t), i = 0; i < r.length; i++)
                                if (r[i] === n)
                                    return t;
                            return null
                        }
                        ,
                        t.prototype.getElementType = function (t) {
                            return (t.getAttribute("type") || "").toLowerCase()
                        }
                        ,
                        t.prototype.getElementAttributes = function (t) {
                            for (var e = {}, r = Math.min(t.attributes.length, 10), n = 0; n < r; n++) {
                                var i = t.attributes[n]
                                    , o = i.name;
                                "data-value" != o.toLowerCase() && "value" != o.toLowerCase() && (e[i.name] = s(i.value, 50))
                            }
                            return e
                        }
                        ,
                        t.prototype.getMetaValue = function (t, e) {
                            return void 0 === t ? void 0 : {
                                length: t.length,
                                pattern: this.matchInputPattern(t),
                                checked: e
                            }
                        }
                        ,
                        t.prototype.matchInputPattern = function (t) {
                            return "" === t ? "empty" : /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(t) ? "email" : /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(t) || /^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(t) ? "date" : /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(t) ? "usphone" : /^\s*$/.test(t) ? "whitespace" : /^\d*$/.test(t) ? "numeric" : /^[a-zA-Z]*$/.test(t) ? "alpha" : /^[a-zA-Z0-9]*$/.test(t) ? "alphanumeric" : "characters"
                        }
                        ,
                        t
                }()), x = ["safeframe.googlesyndication.com", "chrome-extension:", "moz-extension:"], R = function () {
                    function t() {
                        this.hasSent = !1,
                            this.thirdPartyCache = {}
                    }

                    return t.prototype.cacheResources = function () {
                        this.hasSent || (t.cachedResourceTimings = t.getAllResources())
                    }
                        ,
                        t.prototype.getResources = function () {
                            var t = this;
                            if (this.hasSent)
                                return null;
                            var e = this.getResourcesByOrigin();
                            return Object.keys(e).map((function (r) {
                                    return t.getResourceEntryByOrigin(r, e[r])
                                }
                            ))
                        }
                        ,
                        t.prototype.getPageResourceTimelines = function () {
                            var e = t.getAllResources()
                                , r = this.binResources(e)
                                , n = r.allImages
                                , i = r.allScripts
                                , o = r.allXhr
                                , s = r.allCss
                                , a = r.allFonts
                                , l = r.allOther;
                            return {
                                imgTimeline: this.getTimeRangesForResources(n).join(","),
                                xhrTimeline: this.getTimeRangesForResources(o).join(","),
                                jsTimeline: this.getTimeRangesForResources(i).join(","),
                                cssTimeline: this.getTimeRangesForResources(s).join(","),
                                fontTimeline: this.getTimeRangesForResources(a).join(","),
                                otherTimeline: this.getTimeRangesForResources(l).join(",")
                            }
                        }
                        ,
                        t.prototype.getResourcesByOrigin = function () {
                            var e = this
                                , r = t.getAllResources()
                                , n = {};
                            return r.forEach((function (t) {
                                    try {
                                        var r = e.getOriginFromResource(t);
                                        n[r] || (n[r] = []),
                                            n[r].push(t)
                                    } catch (t) {
                                    }
                                }
                            )),
                                n.__total = r,
                                n
                        }
                        ,
                        t.prototype.getOriginFromResource = function (t) {
                            var e = new URL(t.name).origin;
                            return e.startsWith("https://www.google.") && (e = "https://www.google.com"),
                                e
                        }
                        ,
                        t.prototype.getResourceEntryByOrigin = function (t, e) {
                            var r = this.binResources(e)
                                , n = r.allImages
                                , i = r.allScripts
                                , o = r.allXhr
                                , s = r.allCss
                                , a = r.allFonts
                                , l = r.allOther;
                            return {
                                origin: t,
                                cssCount: s.length,
                                cssTime: this.getWallClockTimeForResources(s),
                                cssTimeline: this.getTimeRangesForResources(s).join(","),
                                fontCount: a.length,
                                fontTime: this.getWallClockTimeForResources(a),
                                fontTimeline: this.getTimeRangesForResources(a).join(","),
                                imgCount: n.length,
                                imgTime: this.getWallClockTimeForResources(n),
                                imgTimeline: this.getTimeRangesForResources(n).join(","),
                                jsCount: i.length,
                                jsTime: this.getWallClockTimeForResources(i),
                                jsTimeline: this.getTimeRangesForResources(i).join(","),
                                xhrCount: o.length,
                                xhrTime: this.getWallClockTimeForResources(o),
                                xhrTimeline: this.getTimeRangesForResources(o).join(","),
                                otherCount: l.length,
                                otherTime: this.getWallClockTimeForResources(l),
                                otherTimeline: this.getTimeRangesForResources(l).join(","),
                                totalCount: e.length,
                                totalTime: this.getWallClockTimeForResources(e),
                                totalTimeline: this.getTimeRangesForResources(e).join(",")
                            }
                        }
                        ,
                        t.getAllResources = function () {
                            var e = (t.cachedResourceTimings || []).concat(performance.getEntriesByType("resource"))
                                , r = {};
                            return e.filter((function (e) {
                                    if (!e || t.shouldIgnore(e))
                                        return !1;
                                    var n = e.name + e.startTime;
                                    return !r[n] && (r[n] = !0,
                                        !0)
                                }
                            ))
                        }
                        ,
                        t.prototype.getAllThirdPartyJs = function () {
                            var e = this;
                            return (t.cachedResourceTimings || []).concat(performance.getEntriesByType("resource")).filter((function (t) {
                                    if (!t || !e.isScript(t))
                                        return !1;
                                    if (!e.isThirdParty(t.name))
                                        return !1;
                                    var r = t.name;
                                    return !e.thirdPartyCache[r] && (e.thirdPartyCache[r] = !0,
                                        !0)
                                }
                            )).map((function (t) {
                                    return {
                                        url: t.name,
                                        startedOn: a(t.startTime),
                                        duration: a(t.duration)
                                    }
                                }
                            ))
                        }
                        ,
                        t.shouldIgnore = function (t) {
                            return x.some((function (e) {
                                    return t.name.toLowerCase().indexOf(e) >= 0
                                }
                            ))
                        }
                        ,
                        t.prototype.binResources = function (t) {
                            var e = this
                                , r = []
                                , n = []
                                , i = []
                                , o = []
                                , s = []
                                , a = [];
                            return t.forEach((function (t) {
                                    e.isImage(t) ? r.push(t) : e.isScript(t) ? n.push(t) : e.isXhr(t) ? i.push(t) : e.isCss(t) ? o.push(t) : e.isFont(t) ? s.push(t) : a.push(t)
                                }
                            )),
                                {
                                    allImages: r,
                                    allScripts: n,
                                    allXhr: i,
                                    allCss: o,
                                    allFonts: s,
                                    allOther: a
                                }
                        }
                        ,
                        t.prototype.isImage = function (t) {
                            if ("img" === t.initiatorType)
                                return !0;
                            try {
                                if ("css" === t.initiatorType || "link" === t.initiatorType) {
                                    var e = new URL(t.name).pathname.toLowerCase();
                                    return [".jpg", ".jpeg", ".png", ".gif", ".svg", ".raw", ".webp", ".heif", ".avif"].some((function (t) {
                                            return e.endsWith(t)
                                        }
                                    ))
                                }
                            } catch (t) {
                            }
                            return !1
                        }
                        ,
                        t.prototype.isScript = function (t) {
                            if ("script" === t.initiatorType)
                                return !0;
                            try {
                                if ("link" === t.initiatorType || "other" === t.initiatorType)
                                    return new URL(t.name).pathname.toLowerCase().endsWith(".js")
                            } catch (t) {
                            }
                            return !1
                        }
                        ,
                        t.prototype.isXhr = function (t) {
                            return "fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType
                        }
                        ,
                        t.prototype.isCss = function (t) {
                            if ("link" !== t.initiatorType && "css" !== t.initiatorType)
                                return !1;
                            try {
                                return new URL(t.name).pathname.toLowerCase().endsWith("css")
                            } catch (t) {
                            }
                            return !1
                        }
                        ,
                        t.prototype.isFont = function (t) {
                            if ("link" !== t.initiatorType && "css" !== t.initiatorType && "other" !== t.initiatorType)
                                return !1;
                            try {
                                var e = new URL(t.name).pathname.toLowerCase();
                                return [".woff", ".woff2", ".ttf", ".eot", ".otf"].some((function (t) {
                                        return e.endsWith(t)
                                    }
                                ))
                            } catch (t) {
                            }
                            return !1
                        }
                        ,
                        t.prototype.isThirdParty = function (t) {
                            try {
                                return new URL(t).origin !== self.location.origin
                            } catch (t) {
                            }
                            return !1
                        }
                        ,
                        t.prototype.getWallClockTimeForResources = function (t) {
                            return a(this.getTimeRangesForResources(t).reduce((function (t, e) {
                                    return t + e.duration
                                }
                            ), 0))
                        }
                        ,
                        t.prototype.getTimeRangesForResources = function (t) {
                            t = t.sort((function (t, e) {
                                    return t.startTime - e.startTime
                                }
                            ));
                            var e = [];
                            return t.forEach((function (t) {
                                    var r = e[e.length - 1];
                                    r && r.isWithinRange(t) ? r.applyTiming(t) : e.push(new I(t))
                                }
                            )),
                                e
                        }
                        ,
                        t.prototype.sentResources = function () {
                            this.hasSent = !0,
                                t.cachedResourceTimings = null
                        }
                        ,
                        t.cachedResourceTimings = null,
                        t
                }(), I = function () {
                    function t(t) {
                        this.start = t.startTime,
                            this.end = t.responseEnd
                    }

                    return Object.defineProperty(t.prototype, "duration", {
                        get: function () {
                            return this.end - this.start
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        t.prototype.isWithinRange = function (t) {
                            return t.startTime <= this.end
                        }
                        ,
                        t.prototype.applyTiming = function (t) {
                            this.end < t.responseEnd && (this.end = t.responseEnd)
                        }
                        ,
                        t.prototype.toString = function () {
                            return "".concat(a(this.start), "-").concat(a(this.end))
                        }
                        ,
                        t
                }(), j = function () {
                    return (j = Object.assign || function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var i in e = arguments[r])
                                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t
                        }
                    ).apply(this, arguments)
                }, N = function () {
                    function t() {
                        this.hasSentPage = !1
                    }

                    return t.prototype.getPageUrl = function () {
                        return this.pageUrl || o(self.location.toString())
                    }
                        ,
                        t.prototype.getPageEntry = function () {
                            if (i())
                                return null;
                            if (this.hasSentPage)
                                return null;
                            var t = performance.getEntriesByType("navigation")[0]
                                , e = null;
                            if (t)
                                e = {
                                    url: o(0 === t.name.indexOf("http") ? t.name : self.location.toString()),
                                    tempFullUrl: 0 === t.name.indexOf("http") ? t.name : self.location.toString(),
                                    referrer: i() ? "" : document.referrer,
                                    start: a(t.startTime),
                                    duration: a(t.duration),
                                    domInteractive: a(t.domInteractive),
                                    dnsTime: a(t.domainLookupEnd - t.domainLookupStart),
                                    sslTime: a(t.connectEnd - t.connectStart),
                                    serverTime: a(t.responseEnd - t.requestStart),
                                    blockingAssetLoadTime: a(t.domInteractive - t.responseEnd),
                                    firstByteTime: a(t.responseStart),
                                    pageSize: t.transferSize
                                };
                            else {
                                var r = performance.timing;
                                e = {
                                    url: o(self.location.toString()),
                                    tempFullUrl: self.location.toString(),
                                    referrer: i() ? "" : document.referrer,
                                    start: 0,
                                    duration: a(r.domComplete - r.navigationStart),
                                    domInteractive: a(r.domInteractive - r.navigationStart),
                                    dnsTime: a(r.domainLookupEnd - r.domainLookupStart),
                                    sslTime: a(r.connectEnd - r.connectStart),
                                    serverTime: a(r.responseEnd - r.requestStart),
                                    blockingAssetLoadTime: a(r.domInteractive - r.responseEnd),
                                    firstByteTime: a(r.responseStart - r.navigationStart)
                                }
                            }
                            this.pageUrl = e.url;
                            var n = (new R).getPageResourceTimelines();
                            return j(j({}, e), n)
                        }
                        ,
                        t.prototype.sentPage = function () {
                            this.hasSentPage = !0
                        }
                        ,
                        t
                }(), M = -1, U = function (t) {
                    addEventListener("pageshow", (function (e) {
                            e.persisted && (M = e.timeStamp,
                                t(e))
                        }
                    ), !0)
                }, D = function () {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                }, B = function () {
                    var t = D();
                    return t && t.activationStart || 0
                }, q = function (t, e) {
                    var r = D()
                        , n = "navigate";
                    return M >= 0 ? n = "back-forward-cache" : r && (n = document.prerendering || B() > 0 ? "prerender" : r.type.replace(/_/g, "-")),
                        {
                            name: t,
                            value: void 0 === e ? -1 : e,
                            rating: "good",
                            delta: 0,
                            entries: [],
                            id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                            navigationType: n
                        }
                }, F = function (t, e, r) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            var n = new PerformanceObserver((function (t) {
                                    e(t.getEntries())
                                }
                            ));
                            return n.observe(Object.assign({
                                type: t,
                                buffered: !0
                            }, r || {})),
                                n
                        }
                    } catch (t) {
                    }
                }, H = function (t, e) {
                    var r = function r(n) {
                        "pagehide" !== n.type && "hidden" !== document.visibilityState || (t(n),
                        e && (removeEventListener("visibilitychange", r, !0),
                            removeEventListener("pagehide", r, !0)))
                    };
                    addEventListener("visibilitychange", r, !0),
                        addEventListener("pagehide", r, !0)
                }, z = function (t, e, r, n) {
                    var i, o;
                    return function (s) {
                        e.value >= 0 && (s || n) && ((o = e.value - (i || 0)) || void 0 === i) && (i = e.value,
                            e.delta = o,
                            e.rating = function (t, e) {
                                return t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good"
                            }(e.value, r),
                            t(e))
                    }
                }, V = -1, W = function () {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                }, J = function () {
                    H((function (t) {
                            var e = t.timeStamp;
                            V = e
                        }
                    ), !0)
                }, X = function () {
                    return V < 0 && (V = W(),
                        J(),
                        U((function () {
                                setTimeout((function () {
                                        V = W(),
                                            J()
                                    }
                                ), 0)
                            }
                        ))),
                        {
                            get firstHiddenTime() {
                                return V
                            }
                        }
                }, G = function (t, e) {
                    e = e || {};
                    var r, n = [1800, 3e3], i = X(), o = q("FCP"), s = function (t) {
                            t.forEach((function (t) {
                                    "first-contentful-paint" === t.name && (l && l.disconnect(),
                                    t.startTime < i.firstHiddenTime && (o.value = Math.max(t.startTime - B(), 0),
                                        o.entries.push(t),
                                        r(!0)))
                                }
                            ))
                        },
                        a = window.performance && window.performance.getEntriesByName && window.performance.getEntriesByName("first-contentful-paint")[0],
                        l = a ? null : F("paint", s);
                    (a || l) && (r = z(t, o, n, e.reportAllChanges),
                    a && s([a]),
                        U((function (i) {
                                o = q("FCP"),
                                    r = z(t, o, n, e.reportAllChanges),
                                    requestAnimationFrame((function () {
                                            requestAnimationFrame((function () {
                                                    o.value = performance.now() - i.timeStamp,
                                                        r(!0)
                                                }
                                            ))
                                        }
                                    ))
                            }
                        )))
                }, Y = !1, Q = -1, K = {
                    passive: !0,
                    capture: !0
                }, Z = new Date, tt = function (t, e) {
                    S || (S = e,
                        E = t,
                        k = new Date,
                        nt(removeEventListener),
                        et())
                }, et = function () {
                    if (E >= 0 && E < k - Z) {
                        var t = {
                            entryType: "first-input",
                            name: S.type,
                            target: S.target,
                            cancelable: S.cancelable,
                            startTime: S.timeStamp,
                            processingStart: S.timeStamp + E
                        };
                        $.forEach((function (e) {
                                e(t)
                            }
                        )),
                            $ = []
                    }
                }, rt = function (t) {
                    if (t.cancelable) {
                        var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                        "pointerdown" == t.type ? function (t, e) {
                            var r = function () {
                                tt(t, e),
                                    i()
                            }
                                , n = function () {
                                i()
                            }
                                , i = function () {
                                removeEventListener("pointerup", r, K),
                                    removeEventListener("pointercancel", n, K)
                            };
                            addEventListener("pointerup", r, K),
                                addEventListener("pointercancel", n, K)
                        }(e, t) : tt(e, t)
                    }
                }, nt = function (t) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function (e) {
                            return t(e, rt, K)
                        }
                    ))
                }, it = {}, ot = function () {
                    function t() {
                        var t = this;
                        this.vitalsSent = !1,
                            this.metricQueue = new Set,
                            this.addToQueue = function (e) {
                                t.metricQueue.add(e)
                            }
                            ,
                        i() || (function (t, e) {
                            e = e || {};
                            var r = [.1, .25];
                            Y || (G((function (t) {
                                    Q = t.value
                                }
                            )),
                                Y = !0);
                            var n, i = function (e) {
                                Q > -1 && t(e)
                            }, o = q("CLS", 0), s = 0, a = [], l = function (t) {
                                t.forEach((function (t) {
                                        if (!t.hadRecentInput) {
                                            var e = a[0]
                                                , r = a[a.length - 1];
                                            s && t.startTime - r.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (s += t.value,
                                                a.push(t)) : (s = t.value,
                                                a = [t]),
                                            s > o.value && (o.value = s,
                                                o.entries = a,
                                                n())
                                        }
                                    }
                                ))
                            }, c = F("layout-shift", l);
                            c && (n = z(i, o, r, e.reportAllChanges),
                                H((function () {
                                        l(c.takeRecords()),
                                            n(!0)
                                    }
                                )),
                                U((function () {
                                        s = 0,
                                            Q = -1,
                                            o = q("CLS", 0),
                                            n = z(i, o, r, e.reportAllChanges)
                                    }
                                )))
                        }(this.addToQueue, {
                            reportAllChanges: !0
                        }),
                            function (t, e) {
                                e = e || {};
                                var r, n = [100, 300], i = X(), o = q("FID"), s = function (t) {
                                    t.startTime < i.firstHiddenTime && (o.value = t.processingStart - t.startTime,
                                        o.entries.push(t),
                                        r(!0))
                                }, a = function (t) {
                                    t.forEach(s)
                                }, l = F("first-input", a);
                                r = z(t, o, n, e.reportAllChanges),
                                l && H((function () {
                                        a(l.takeRecords()),
                                            l.disconnect()
                                    }
                                ), !0),
                                l && U((function () {
                                        var i;
                                        o = q("FID"),
                                            r = z(t, o, n, e.reportAllChanges),
                                            $ = [],
                                            E = -1,
                                            S = null,
                                            nt(addEventListener),
                                            i = s,
                                            $.push(i),
                                            et()
                                    }
                                ))
                            }(this.addToQueue, {
                                reportAllChanges: !0
                            }),
                            G(this.addToQueue, {
                                reportAllChanges: !0
                            }),
                            function (t, e) {
                                e = e || {};
                                var r, n = [2500, 4e3], i = X(), o = q("LCP"), s = function (t) {
                                    var e = t[t.length - 1];
                                    if (e) {
                                        var n = Math.max(e.startTime - B(), 0);
                                        n < i.firstHiddenTime && (o.value = n,
                                            o.entries = [e],
                                            r())
                                    }
                                }, a = F("largest-contentful-paint", s);
                                if (a) {
                                    r = z(t, o, n, e.reportAllChanges);
                                    var l = function () {
                                        it[o.id] || (s(a.takeRecords()),
                                            a.disconnect(),
                                            it[o.id] = !0,
                                            r(!0))
                                    };
                                    ["keydown", "click"].forEach((function (t) {
                                            addEventListener(t, l, {
                                                once: !0,
                                                capture: !0
                                            })
                                        }
                                    )),
                                        H(l, !0),
                                        U((function (i) {
                                                o = q("LCP"),
                                                    r = z(t, o, n, e.reportAllChanges),
                                                    requestAnimationFrame((function () {
                                                            requestAnimationFrame((function () {
                                                                    o.value = performance.now() - i.timeStamp,
                                                                        it[o.id] = !0,
                                                                        r(!0)
                                                                }
                                                            ))
                                                        }
                                                    ))
                                            }
                                        ))
                                }
                            }(this.addToQueue, {
                                reportAllChanges: !0
                            }))
                    }

                    return t.prototype.getVitals = function (t) {
                        if (this.vitalsSent)
                            return null;
                        if (0 === this.metricQueue.size)
                            return null;
                        var e = {
                            url: t
                        };
                        return this.metricQueue.forEach((function (t) {
                                "FCP" === t.name && (e.fcp = a(t.value)),
                                "LCP" === t.name && (e.lcp = a(t.value)),
                                "CLS" === t.name && (e.cls = a(t.value, 5)),
                                "FID" === t.name && (e.fid = a(t.value, 1))
                            }
                        )),
                        e.lcp && !e.cls && (e.cls = 0),
                            e
                    }
                        ,
                        t.prototype.sentVitals = function () {
                            this.vitalsSent = !0
                        }
                        ,
                        t
                }(), st = function () {
                    return (st = Object.assign || function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++)
                                for (var i in e = arguments[r])
                                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t
                        }
                    ).apply(this, arguments)
                }, at = function (t, e, r) {
                    if (r || 2 === arguments.length)
                        for (var n, i = 0, o = e.length; i < o; i++)
                            !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)),
                                n[i] = e[i]);
                    return t.concat(n || Array.prototype.slice.call(e))
                }, lt = function () {
                    function t(e) {
                        var r = this;
                        if (this.timeOrigin = null,
                            this.entryHash = {},
                            this.endpoints = [],
                            this.pageService = new N,
                            this.resourceService = new R,
                            this.shutdownSend = !1,
                            this.sendCount = 0,
                            this.pageViewId = d(),
                            this.sessionId = P.getSessionId(),
                            this.user = null,
                            this.metadata = {},
                            this.getIngestUrl = function () {
                                return "".concat(r.options.ingestUrl, "?token=").concat(r.options.token, "&v=").concat("1.13.1")
                            }
                            ,
                            this.sendBeacon = function () {
                                try {
                                    var t = r.getPayload(!0);
                                    if (t.source = "beacon",
                                    navigator.sendBeacon && r.payloadHasData(t)) {
                                        r.clearPayloadAfterSend(t);
                                        var e = r.getIngestUrl()
                                            , i = JSON.stringify(t);
                                        try {
                                            navigator.sendBeacon(e, i)
                                        } catch (t) {
                                        }
                                    }
                                } catch (t) {
                                    n.error(t)
                                }
                            }
                            ,
                        self.performance && self.performance.getEntriesByType && self.URL && self.URL.prototype && "hostname" in self.URL.prototype) {
                            var o, s = performance.getEntriesByType("navigation") || [];
                            (i() || s.length || performance.timing) && (this.options = Object.keys(t.defaults).reduce((function (r, n) {
                                    return r[n] = e[n] || t.defaults[n],
                                        r
                                }
                            ), {}),
                                this.timeOrigin = performance.timeOrigin || (performance.timing || {}).navigationStart || (new Date).getTime(),
                                T.install(this.options),
                                O.install(this.options),
                                A.install(this.options),
                                this.manageResourceBuffer(),
                                o = function () {
                                    try {
                                        r.webVitalsObserver = new ot,
                                            P.refreshSession(),
                                            setTimeout((function () {
                                                    return r.checkAndSend()
                                                }
                                            ), 1e4),
                                            setInterval((function () {
                                                    return r.checkAndSend()
                                                }
                                            ), 6e4),
                                            self.addEventListener("pagehide", (function () {
                                                    O.addEvent({
                                                        name: "page_leave",
                                                        time: a(performance.now()),
                                                        pageUrl: self.location.toString()
                                                    }),
                                                        r.sendBeacon()
                                                }
                                            )),
                                            self.addEventListener("visibilitychange", (function () {
                                                    i() || "hidden" !== document.visibilityState ? i() || "visible" !== document.visibilityState || (r.sessionId = P.getSessionId()) : r.sendBeacon()
                                                }
                                            ))
                                    } catch (t) {
                                        n.error(t)
                                    }
                                }
                                ,
                                i() || "complete" === document.readyState ? o() : document.addEventListener("readystatechange", (function (t) {
                                        "complete" === document.readyState && o()
                                    }
                                )))
                        }
                    }

                    return t.prototype.identify = function (t, e) {
                        e = f(e),
                            this.user = st({
                                userId: t
                            }, e)
                    }
                        ,
                        t.prototype.sendEvent = function (t, e, r) {
                            void 0 === r && (r = null),
                                e = f(e),
                                O.addEvent({
                                    name: "custom",
                                    customName: t,
                                    time: a(r || performance.now()),
                                    pageUrl: self.location.toString(),
                                    metadata: e
                                })
                        }
                        ,
                        t.prototype.track = function (t, e, r) {
                            void 0 === r && (r = null),
                                e = f(e),
                                A.addError({
                                    name: t.name,
                                    message: t.message,
                                    stack: t.stack,
                                    cause: t.cause ? _(t.cause) : void 0,
                                    time: a(r || performance.now()),
                                    entry: "direct",
                                    pageUrl: self.location.toString(),
                                    metadata: e
                                })
                        }
                        ,
                        t.prototype.addMetadata = function (t) {
                            this.metadata = Object.assign(this.metadata, t),
                                this.metadata = f(this.metadata)
                        }
                        ,
                        t.prototype.getEndpointEntries = function () {
                            var t = this
                                , e = [];
                            return R.getAllResources().forEach((function (r) {
                                    if (!(Object.keys(t.entryHash).length >= 50 || r.duration <= 0 || "xmlhttprequest" !== r.initiatorType && "fetch" !== r.initiatorType)) {
                                        var i = o(r.name);
                                        if (function (t, e) {
                                            var r = function (t) {
                                                try {
                                                    if (!t || 0 !== t.indexOf("http"))
                                                        return null;
                                                    var e = new URL(t).hostname;
                                                    if (!e)
                                                        return null;
                                                    var r = e.split(".")
                                                        , i = r.pop();
                                                    if ("localhost" === i)
                                                        return i;
                                                    if ("127.0.0.1" === e)
                                                        return e;
                                                    var o = r.pop();
                                                    return 2 === o.length && (o = r.pop()),
                                                    l.indexOf(o) >= 0 && (o = r.pop()),
                                                        "".concat(o, ".")
                                                } catch (e) {
                                                    return n.error(e, "Page Url: ".concat(t)),
                                                        null
                                                }
                                            }(self.location.toString());
                                            if (!r)
                                                return !1;
                                            try {
                                                var i = new URL(t).hostname;
                                                return !!i && i.indexOf(r) >= 0
                                            } catch (e) {
                                                return n.error(e, "Problem parsing first party url: ".concat(t)),
                                                    !1
                                            }
                                        }(i, 0)) {
                                            var s = i + r.startTime;
                                            t.entryHash[s] || (t.options.monitorSelfCalls || 0 !== t.getIngestUrl().indexOf(i)) && (n.errorCount > 0 && 0 === n.getErrorUrl().indexOf(i) || (t.entryHash[s] = !0,
                                                e.push({
                                                    url: i,
                                                    start: a(r.startTime),
                                                    duration: a(r.duration)
                                                })))
                                        }
                                    }
                                }
                            )),
                                e
                        }
                        ,
                        t.prototype.getDevice = function () {
                            try {
                                if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                                    return "mobile"
                            } catch (t) {
                            }
                            return "desktop"
                        }
                        ,
                        t.prototype.getNetworkType = function () {
                            try {
                                var t = null === navigator || void 0 === navigator ? void 0 : navigator.connection;
                                return t ? "".concat(t.effectiveType, ":").concat(t.downlink, ":").concat(t.rtt) : null
                            } catch (t) {
                                return null
                            }
                        }
                        ,
                        t.prototype.getPayload = function (t) {
                            var e;
                            return void 0 === t && (t = !1),
                                this.endpoints = this.endpoints.concat(this.getEndpointEntries()),
                                {
                                    token: this.options.token,
                                    timeOrigin: new Date(this.timeOrigin).toISOString(),
                                    timeSent: (new Date).toISOString(),
                                    device: this.getDevice(),
                                    pageViewId: this.pageViewId,
                                    sessionId: this.sessionId,
                                    page: this.pageService.getPageEntry(),
                                    endpoints: at([], this.endpoints, !0),
                                    vitals: null === (e = this.webVitalsObserver) || void 0 === e ? void 0 : e.getVitals(this.pageService.getPageUrl()),
                                    resources: this.resourceService.getResources(),
                                    tags: this.options.tags,
                                    metadata: this.metadata,
                                    networkType: this.getNetworkType(),
                                    api: T.getApis(t),
                                    events: O.getEvents(t),
                                    errors: A.getErrors(t),
                                    js: this.resourceService.getAllThirdPartyJs(),
                                    env: {
                                        lang: navigator.language,
                                        width: i() ? null : null === screen || void 0 === screen ? void 0 : screen.width,
                                        height: i() ? null : null === screen || void 0 === screen ? void 0 : screen.height,
                                        dpr: i() ? null : null === window || void 0 === window ? void 0 : window.devicePixelRatio
                                    },
                                    user: this.user
                                }
                        }
                        ,
                        t.prototype.payloadHasData = function (t) {
                            return !(this.shutdownSend || this.sendCount >= 60 || !t || !(t.page || t.endpoints.length || t.vitals || t.resources || t.api.length || t.events.length || t.errors.length || t.js.length))
                        }
                        ,
                        t.prototype.shouldSendInterval = function (t) {
                            return !!this.payloadHasData(t) && !!(t.page || t.vitals || t.resources || i() || t.endpoints.length >= 10 || t.api.length > 0 || t.events.length > 0 || t.errors.length > 0 || t.js.length > 0)
                        }
                        ,
                        t.prototype.checkAndSend = function () {
                            var t = this;
                            try {
                                var e = this.getPayload();
                                if (e.source = "polling",
                                    !this.shouldSendInterval(e))
                                    return;
                                this.clearPayloadAfterSend(e);
                                var r = new XMLHttpRequest;
                                r.open("POST", this.getIngestUrl()),
                                    r.setRequestHeader("Content-Type", "application/json"),
                                    r.addEventListener("load", (function () {
                                            r.status >= 400 && (t.shutdownSend = !0)
                                        }
                                    )),
                                    r.send(JSON.stringify(e))
                            } catch (t) {
                                n.error(t)
                            }
                        }
                        ,
                        t.prototype.clearPayloadAfterSend = function (t) {
                            var e;
                            this.sendCount++,
                                this.endpoints.length = 0,
                            t.page && this.pageService.sentPage(),
                            t.vitals && (null === (e = this.webVitalsObserver) || void 0 === e || e.sentVitals()),
                            t.resources && this.resourceService.sentResources()
                        }
                        ,
                        t.prototype.manageResourceBuffer = function () {
                            var t = this;
                            performance.setResourceTimingBufferSize && performance.setResourceTimingBufferSize(1e3);
                            var e = function (e) {
                                t.resourceService.cacheResources(),
                                    performance.clearResourceTimings()
                            };
                            if (performance.addEventListener)
                                try {
                                    performance.addEventListener("resourcetimingbufferfull", e)
                                } catch (t) {
                                }
                            else
                                performance.onresourcetimingbufferfull = e
                        }
                        ,
                        t.defaults = {
                            token: null,
                            ingestUrl: "https://in.requestmetrics.com/v1",
                            monitorSelfCalls: !1,
                            tags: []
                        },
                        t
                }(), ct = {
                    __agent: null,
                    version: "1.13.1",
                    install: function (t) {
                        try {
                            if (ct.__agent)
                                return void console.warn("Request Metrics is already installed.");
                            if ("undefined" == typeof self)
                                return void console.warn("Request Metrics does not operate in this environment.");
                            if (!t || !t.token)
                                return void console.error("You must provide a token to install Request Metrics.");
                            n.token = t.token,
                                ct.__agent = new lt(t)
                        } catch (t) {
                            n.error(t)
                        }
                    },
                    identify: function (t, e) {
                        try {
                            return ct.__agent ? t ? ct.__agent.identify(t, e) : void console.warn("You must provide a userId.") : void console.warn("Request Metrics isn't installed.")
                        } catch (t) {
                            n.error(t)
                        }
                    },
                    sendEvent: function (t, e, r) {
                        void 0 === r && (r = null);
                        try {
                            return ct.__agent ? t ? ct.__agent.sendEvent(t, e, r) : void console.warn("You must provide an event name.") : void console.warn("Request Metrics isn't installed.")
                        } catch (t) {
                            n.error(t)
                        }
                    },
                    track: function (t, e, r) {
                        void 0 === r && (r = null);
                        try {
                            return ct.__agent ? w(t) ? ct.__agent.track(t, e, r) : void console.warn("You must provide an instance of Error") : void console.warn("Request Metrics isn't installed.")
                        } catch (t) {
                            n.error(t)
                        }
                    },
                    addMetadata: function (t) {
                        try {
                            if (!ct.__agent)
                                return void console.warn("Request Metrics isn't installed.");
                            if (!t)
                                return;
                            return ct.__agent.addMetadata(t)
                        } catch (t) {
                            n.error(t)
                        }
                    }
                }, ut = ct;
                return function () {
                    try {
                        if (i())
                            return;
                        if (!document.querySelector)
                            return;
                        if (self.RM && self.RM._options)
                            return ct.install(self.RM._options),
                            self.RM._userId && ct.identify(self.RM._userId, self.RM._identifyOptions),
                            self.RM._events && self.RM._events.forEach((function (t) {
                                    ct.sendEvent(t.eventName, t.metadata, t.time)
                                }
                            )),
                            self.RM._errors && self.RM._errors.forEach((function (t) {
                                    ct.track(t.error, t.metadata, t.time)
                                }
                            )),
                                void (self.RM._metadata && ct.addMetadata(self.RM._metadata));
                        var t = document.querySelector("[data-rm-token]");
                        if (!t)
                            return;
                        var e = t.getAttribute("data-rm-token");
                        if (!e)
                            return;
                        var r = (t.getAttribute("data-rm-tags") || "").split(",").filter((function (t) {
                                return t
                            }
                        ));
                        n.token = e,
                            ct.install({
                                token: e,
                                ingestUrl: t.getAttribute("data-rm-ingest"),
                                monitorSelfCalls: !!t.getAttribute("data-rm-monitor-self"),
                                tags: r
                            });
                        var o = t.getAttribute("data-rm-userId");
                        o && ct.identify(o)
                    } catch (t) {
                        n.error(t)
                    }
                }(),
                    e
            }()
        },
        24: function (t, e, r) {
            var n = r(3115).Symbol;
            t.exports = n
        },
        4504: function (t, e, r) {
            var n = r(24)
                , i = r(3149)
                , o = r(8592)
                , s = n ? n.toStringTag : void 0;
            t.exports = function (t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? i(t) : o(t)
            }
        },
        1321: function (t, e, r) {
            var n = r(2206)
                , i = /^\s+/;
            t.exports = function (t) {
                return t ? t.slice(0, n(t) + 1).replace(i, "") : t
            }
        },
        2850: function (t, e, r) {
            var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            t.exports = n
        },
        3149: function (t, e, r) {
            var n = r(24)
                , i = Object.prototype
                , o = i.hasOwnProperty
                , s = i.toString
                , a = n ? n.toStringTag : void 0;
            t.exports = function (t) {
                var e = o.call(t, a)
                    , r = t[a];
                try {
                    t[a] = void 0;
                    var n = !0
                } catch (t) {
                }
                var i = s.call(t);
                return n && (e ? t[a] = r : delete t[a]),
                    i
            }
        },
        8592: function (t) {
            var e = Object.prototype.toString;
            t.exports = function (t) {
                return e.call(t)
            }
        },
        3115: function (t, e, r) {
            var n = r(2850)
                , i = "object" == typeof self && self && self.Object === Object && self
                , o = n || i || Function("return this")();
            t.exports = o
        },
        2206: function (t) {
            var e = /\s/;
            t.exports = function (t) {
                for (var r = t.length; r-- && e.test(t.charAt(r));)
                    ;
                return r
            }
        },
        9853: function (t, e, r) {
            var n = r(8197)
                , i = r(3148)
                , o = r(4793)
                , s = Math.max
                , a = Math.min;
            t.exports = function (t, e, r) {
                var l, c, u, d, h, f, p = 0, v = !1, m = !1, g = !0;
                if ("function" != typeof t)
                    throw new TypeError("Expected a function");

                function y(e) {
                    var r = l
                        , n = c;
                    return l = c = void 0,
                        p = e,
                        d = t.apply(n, r)
                }

                function w(t) {
                    var r = t - f;
                    return void 0 === f || r >= e || r < 0 || m && t - p >= u
                }

                function _() {
                    var t = i();
                    if (w(t))
                        return b(t);
                    h = setTimeout(_, function (t) {
                        var r = e - (t - f);
                        return m ? a(r, u - (t - p)) : r
                    }(t))
                }

                function b(t) {
                    return h = void 0,
                        g && l ? y(t) : (l = c = void 0,
                            d)
                }

                function S() {
                    var t = i()
                        , r = w(t);
                    if (l = arguments,
                        c = this,
                        f = t,
                        r) {
                        if (void 0 === h)
                            return function (t) {
                                return p = t,
                                    h = setTimeout(_, e),
                                    v ? y(t) : d
                            }(f);
                        if (m)
                            return clearTimeout(h),
                                h = setTimeout(_, e),
                                y(f)
                    }
                    return void 0 === h && (h = setTimeout(_, e)),
                        d
                }

                return e = o(e) || 0,
                n(r) && (v = !!r.leading,
                    u = (m = "maxWait" in r) ? s(o(r.maxWait) || 0, e) : u,
                    g = "trailing" in r ? !!r.trailing : g),
                    S.cancel = function () {
                        void 0 !== h && clearTimeout(h),
                            p = 0,
                            l = f = c = h = void 0
                    }
                    ,
                    S.flush = function () {
                        return void 0 === h ? d : b(i())
                    }
                    ,
                    S
            }
        },
        8197: function (t) {
            t.exports = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        9749: function (t) {
            t.exports = function (t) {
                return null != t && "object" == typeof t
            }
        },
        8650: function (t, e, r) {
            var n = r(4504)
                , i = r(9749);
            t.exports = function (t) {
                return "symbol" == typeof t || i(t) && "[object Symbol]" == n(t)
            }
        },
        3148: function (t, e, r) {
            var n = r(3115);
            t.exports = function () {
                return n.Date.now()
            }
        },
        4793: function (t, e, r) {
            var n = r(1321)
                , i = r(8197)
                , o = r(8650)
                , s = /^[-+]0x[0-9a-f]+$/i
                , a = /^0b[01]+$/i
                , l = /^0o[0-7]+$/i
                , c = parseInt;
            t.exports = function (t) {
                if ("number" == typeof t)
                    return t;
                if (o(t))
                    return NaN;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t)
                    return 0 === t ? t : +t;
                t = n(t);
                var r = a.test(t);
                return r || l.test(t) ? c(t.slice(2), r ? 2 : 8) : s.test(t) ? NaN : +t
            }
        },
        2172: function (t) {
            !function () {
                "use strict";
                t.exports = {
                    polyfill: function () {
                        var t = window
                            , e = document;
                        if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                            var r, n = t.HTMLElement || t.Element, i = 468, o = {
                                    scroll: t.scroll || t.scrollTo,
                                    scrollBy: t.scrollBy,
                                    elementScroll: n.prototype.scroll || l,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                a = (r = t.navigator.userAgent,
                                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(r) ? 1 : 0);
                            t.scroll = t.scrollTo = function () {
                                void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? p.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : o.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                            }
                                ,
                                t.scrollBy = function () {
                                    void 0 !== arguments[0] && (c(arguments[0]) ? o.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                                }
                                ,
                                n.prototype.scroll = n.prototype.scrollTo = function () {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== c(arguments[0])) {
                                            var t = arguments[0].left
                                                , e = arguments[0].top;
                                            p.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                                throw new SyntaxError("Value could not be converted");
                                            o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }
                                ,
                                n.prototype.scrollBy = function () {
                                    void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : o.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }
                                ,
                                n.prototype.scrollIntoView = function () {
                                    if (!0 !== c(arguments[0])) {
                                        var r = function (t) {
                                            for (; t !== e.body && !1 === h(t);)
                                                t = t.parentNode || t.host;
                                            return t
                                        }(this)
                                            , n = r.getBoundingClientRect()
                                            , i = this.getBoundingClientRect();
                                        r !== e.body ? (p.call(this, r, r.scrollLeft + i.left - n.left, r.scrollTop + i.top - n.top),
                                        "fixed" !== t.getComputedStyle(r).position && t.scrollBy({
                                            left: n.left,
                                            top: n.top,
                                            behavior: "smooth"
                                        })) : t.scrollBy({
                                            left: i.left,
                                            top: i.top,
                                            behavior: "smooth"
                                        })
                                    } else
                                        o.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                        }

                        function l(t, e) {
                            this.scrollLeft = t,
                                this.scrollTop = e
                        }

                        function c(t) {
                            if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                                return !0;
                            if ("object" == typeof t && "smooth" === t.behavior)
                                return !1;
                            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function u(t, e) {
                            return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0
                        }

                        function d(e, r) {
                            var n = t.getComputedStyle(e, null)["overflow" + r];
                            return "auto" === n || "scroll" === n
                        }

                        function h(t) {
                            var e = u(t, "Y") && d(t, "Y")
                                , r = u(t, "X") && d(t, "X");
                            return e || r
                        }

                        function f(e) {
                            var r, n, o, a, l = (s() - e.startTime) / i;
                            a = l = l > 1 ? 1 : l,
                                r = .5 * (1 - Math.cos(Math.PI * a)),
                                n = e.startX + (e.x - e.startX) * r,
                                o = e.startY + (e.y - e.startY) * r,
                                e.method.call(e.scrollable, n, o),
                            n === e.x && o === e.y || t.requestAnimationFrame(f.bind(t, e))
                        }

                        function p(r, n, i) {
                            var a, c, u, d, h = s();
                            r === e.body ? (a = t,
                                c = t.scrollX || t.pageXOffset,
                                u = t.scrollY || t.pageYOffset,
                                d = o.scroll) : (a = r,
                                c = r.scrollLeft,
                                u = r.scrollTop,
                                d = l),
                                f({
                                    scrollable: a,
                                    method: d,
                                    startTime: h,
                                    startX: c,
                                    startY: u,
                                    x: n,
                                    y: i
                                })
                        }
                    }
                }
            }()
        },
        2899: function (t, e, r) {
            var n = r(6501)
                , i = [r(9059), r(8241), r(8108), r(966)];
            t.exports = n.createStore(i, [])
        },
        6501: function (t, e, r) {
            var n = r(586)
                , i = n.slice
                , o = n.pluck
                , s = n.each
                , a = n.bind
                , l = n.create
                , c = n.isList
                , u = n.isFunction
                , d = n.isObject;
            t.exports = {
                createStore: f
            };
            var h = {
                version: "2.0.12",
                enabled: !1,
                get: function (t, e) {
                    var r = this.storage.read(this._namespacePrefix + t);
                    return this._deserialize(r, e)
                },
                set: function (t, e) {
                    return void 0 === e ? this.remove(t) : (this.storage.write(this._namespacePrefix + t, this._serialize(e)),
                        e)
                },
                remove: function (t) {
                    this.storage.remove(this._namespacePrefix + t)
                },
                each: function (t) {
                    var e = this;
                    this.storage.each((function (r, n) {
                            t.call(e, e._deserialize(r), (n || "").replace(e._namespaceRegexp, ""))
                        }
                    ))
                },
                clearAll: function () {
                    this.storage.clearAll()
                },
                hasNamespace: function (t) {
                    return this._namespacePrefix == "__storejs_" + t + "_"
                },
                createStore: function () {
                    return f.apply(this, arguments)
                },
                addPlugin: function (t) {
                    this._addPlugin(t)
                },
                namespace: function (t) {
                    return f(this.storage, this.plugins, t)
                }
            };

            function f(t, e, r) {
                r || (r = ""),
                t && !c(t) && (t = [t]),
                e && !c(e) && (e = [e]);
                var n = r ? "__storejs_" + r + "_" : ""
                    , f = r ? new RegExp("^" + n) : null;
                if (!/^[a-zA-Z0-9_\-]*$/.test(r))
                    throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
                var p = {
                    _namespacePrefix: n,
                    _namespaceRegexp: f,
                    _testStorage: function (t) {
                        try {
                            var e = "__storejs__test__";
                            t.write(e, e);
                            var r = t.read(e) === e;
                            return t.remove(e),
                                r
                        } catch (t) {
                            return !1
                        }
                    },
                    _assignPluginFnProp: function (t, e) {
                        var r = this[e];
                        this[e] = function () {
                            var e = i(arguments, 0)
                                , n = this;
                            var o = [function () {
                                if (r)
                                    return s(arguments, (function (t, r) {
                                            e[r] = t
                                        }
                                    )),
                                        r.apply(n, e)
                            }
                            ].concat(e);
                            return t.apply(n, o)
                        }
                    },
                    _serialize: function (t) {
                        return JSON.stringify(t)
                    },
                    _deserialize: function (t, e) {
                        if (!t)
                            return e;
                        var r = "";
                        try {
                            r = JSON.parse(t)
                        } catch (e) {
                            r = t
                        }
                        return void 0 !== r ? r : e
                    },
                    _addStorage: function (t) {
                        this.enabled || this._testStorage(t) && (this.storage = t,
                            this.enabled = !0)
                    },
                    _addPlugin: function (t) {
                        var e = this;
                        if (c(t))
                            s(t, (function (t) {
                                    e._addPlugin(t)
                                }
                            ));
                        else if (!o(this.plugins, (function (e) {
                                return t === e
                            }
                        ))) {
                            if (this.plugins.push(t),
                                !u(t))
                                throw new Error("Plugins must be function values that return objects");
                            var r = t.call(this);
                            if (!d(r))
                                throw new Error("Plugins must return an object of function properties");
                            s(r, (function (r, n) {
                                    if (!u(r))
                                        throw new Error("Bad plugin property: " + n + " from plugin " + t.name + ". Plugins should only return functions.");
                                    e._assignPluginFnProp(r, n)
                                }
                            ))
                        }
                    },
                    addStorage: function (t) {
                        !function () {
                            var t = "undefined" == typeof console ? null : console;
                            t && (t.warn ? t.warn : t.log).apply(t, arguments)
                        }("store.addStorage(storage) is deprecated. Use createStore([storages])"),
                            this._addStorage(t)
                    }
                }
                    , v = l(p, h, {
                    plugins: []
                });
                return v.raw = {},
                    s(v, (function (t, e) {
                            u(t) && (v.raw[e] = a(v, t))
                        }
                    )),
                    s(t, (function (t) {
                            v._addStorage(t)
                        }
                    )),
                    s(e, (function (t) {
                            v._addPlugin(t)
                        }
                    )),
                    v
            }
        },
        586: function (t, e, r) {
            var n = Object.assign ? Object.assign : function (t, e, r, n) {
                for (var i = 1; i < arguments.length; i++)
                    l(Object(arguments[i]), (function (e, r) {
                            t[r] = e
                        }
                    ));
                return t
            }
                , i = function () {
                if (Object.create)
                    return function (t, e, r, i) {
                        var o = a(arguments, 1);
                        return n.apply(this, [Object.create(t)].concat(o))
                    }
                        ;
                {
                    function t() {
                    }

                    return function (e, r, i, o) {
                        var s = a(arguments, 1);
                        return t.prototype = e,
                            n.apply(this, [new t].concat(s))
                    }
                }
            }()
                , o = String.prototype.trim ? function (t) {
                    return String.prototype.trim.call(t)
                }
                : function (t) {
                    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
                , s = "undefined" != typeof window ? window : r.g;

            function a(t, e) {
                return Array.prototype.slice.call(t, e || 0)
            }

            function l(t, e) {
                c(t, (function (t, r) {
                        return e(t, r),
                            !1
                    }
                ))
            }

            function c(t, e) {
                if (u(t)) {
                    for (var r = 0; r < t.length; r++)
                        if (e(t[r], r))
                            return t[r]
                } else
                    for (var n in t)
                        if (t.hasOwnProperty(n) && e(t[n], n))
                            return t[n]
            }

            function u(t) {
                return null != t && "function" != typeof t && "number" == typeof t.length
            }

            t.exports = {
                assign: n,
                create: i,
                trim: o,
                bind: function (t, e) {
                    return function () {
                        return e.apply(t, Array.prototype.slice.call(arguments, 0))
                    }
                },
                slice: a,
                each: l,
                map: function (t, e) {
                    var r = u(t) ? [] : {};
                    return c(t, (function (t, n) {
                            return r[n] = e(t, n),
                                !1
                        }
                    )),
                        r
                },
                pluck: c,
                isList: u,
                isFunction: function (t) {
                    return t && "[object Function]" === {}.toString.call(t)
                },
                isObject: function (t) {
                    return t && "[object Object]" === {}.toString.call(t)
                },
                Global: s
            }
        },
        8108: function (t, e, r) {
            var n = r(586)
                , i = n.Global
                , o = n.trim;
            t.exports = {
                name: "cookieStorage",
                read: function (t) {
                    if (!t || !c(t))
                        return null;
                    var e = "(?:^|.*;\\s*)" + escape(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
                    return unescape(s.cookie.replace(new RegExp(e), "$1"))
                },
                write: function (t, e) {
                    if (!t)
                        return;
                    s.cookie = escape(t) + "=" + escape(e) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
                },
                each: a,
                remove: l,
                clearAll: function () {
                    a((function (t, e) {
                            l(e)
                        }
                    ))
                }
            };
            var s = i.document;

            function a(t) {
                for (var e = s.cookie.split(/; ?/g), r = e.length - 1; r >= 0; r--)
                    if (o(e[r])) {
                        var n = e[r].split("=")
                            , i = unescape(n[0]);
                        t(unescape(n[1]), i)
                    }
            }

            function l(t) {
                t && c(t) && (s.cookie = escape(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
            }

            function c(t) {
                return new RegExp("(?:^|;\\s*)" + escape(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(s.cookie)
            }
        },
        9059: function (t, e, r) {
            var n = r(586).Global;

            function i() {
                return n.localStorage
            }

            function o(t) {
                return i().getItem(t)
            }

            t.exports = {
                name: "localStorage",
                read: o,
                write: function (t, e) {
                    return i().setItem(t, e)
                },
                each: function (t) {
                    for (var e = i().length - 1; e >= 0; e--) {
                        var r = i().key(e);
                        t(o(r), r)
                    }
                },
                remove: function (t) {
                    return i().removeItem(t)
                },
                clearAll: function () {
                    return i().clear()
                }
            }
        },
        966: function (t) {
            t.exports = {
                name: "memoryStorage",
                read: function (t) {
                    return e[t]
                },
                write: function (t, r) {
                    e[t] = r
                },
                each: function (t) {
                    for (var r in e)
                        e.hasOwnProperty(r) && t(e[r], r)
                },
                remove: function (t) {
                    delete e[t]
                },
                clearAll: function (t) {
                    e = {}
                }
            };
            var e = {}
        },
        8241: function (t, e, r) {
            var n = r(586).Global;

            function i() {
                return n.sessionStorage
            }

            function o(t) {
                return i().getItem(t)
            }

            t.exports = {
                name: "sessionStorage",
                read: o,
                write: function (t, e) {
                    return i().setItem(t, e)
                },
                each: function (t) {
                    for (var e = i().length - 1; e >= 0; e--) {
                        var r = i().key(e);
                        t(o(r), r)
                    }
                },
                remove: function (t) {
                    return i().removeItem(t)
                },
                clearAll: function () {
                    return i().clear()
                }
            }
        },
        100: function (t, e, r) {
            "use strict";
            var n = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const i = r(415)
                , o = r(8014)
                , s = r(4080)
                , a = r(6533)
                , l = r(375)
                , c = n(r(2467))
                , u = r(6120);

            class d {
                constructor(t) {
                    this._showModal = !1,
                        this.inputRef = (0,
                            o.createRef)(),
                        this._el = t,
                        this._debouncedInput = (0,
                            c.default)(this._handleInput, 200),
                        this._sortOrder = u.defaultSort,
                        window.addEventListener("online", (() => {
                                this._reload()
                            }
                        ));
                    const e = document.querySelector("[data-global-search]");
                    if (e) {
                        let t = "cmd + k";
                        ((0,
                            u.isLinux)() || (0,
                            u.isWindows)()) && (t = "ctrl + k"),
                            e.setAttribute("title", `Press ${t} to search`),
                            e.addEventListener("click", (t => {
                                    t.preventDefault(),
                                        window.dispatchEvent(new CustomEvent("fm-global-search-open"))
                                }
                            ))
                    }
                    this._el.addEventListener("mousedown", (t => {
                            t.target.classList.contains("global-search") && (t.preventDefault(),
                                this._handleClose(void 0, !0))
                        }
                    )),
                        window.addEventListener("fm-global-search", (t => {
                                var e, r, n, i, o, s, a, l, c, d, h, p, v, m, g, y, w, _, b, S, E;
                                const k = new URL(window.location.href)
                                    , $ = f("c");
                                switch (t.detail.eventName) {
                                    case "initial-search": {
                                        const i = t.detail.q
                                            , o = this.inputRef.value;
                                        o && (o.value = i),
                                        null === (e = this._primaryView) || void 0 === e || e.clear(),
                                        null === (r = this._secondaryView) || void 0 === r || r.clear(),
                                            k.searchParams.set("q", i),
                                            k.searchParams.delete("c"),
                                        window._bs.isPlayer || k.searchParams.delete("pid"),
                                            t.detail.replace ? history.replaceState({}, "", k) : history.pushState({}, "", k),
                                        null === (n = this._primaryView) || void 0 === n || n.search();
                                        break
                                    }
                                    case "sort": {
                                        const e = t.detail.value
                                            , r = this._sortOrder !== e;
                                        e && r && (this._sortOrder = e,
                                            e !== u.defaultSort ? k.searchParams.set("so", e) : k.searchParams.delete("so")),
                                            $ ? (r && history.replaceState({}, "", k),
                                            null === (i = this._secondaryView) || void 0 === i || i.search(r)) : (r && history.pushState({}, "", k),
                                            null === (o = this._secondaryView) || void 0 === o || o.setData({
                                                results: []
                                            }),
                                            null === (s = this._primaryView) || void 0 === s || s.search(r));
                                        break
                                    }
                                    case "see-more":
                                        null === (a = this._primaryView) || void 0 === a || a.clear(),
                                            k.searchParams.set("c", t.detail.type || ""),
                                            history.pushState({}, "", k),
                                        null === (l = this._el.querySelector("input")) || void 0 === l || l.focus(),
                                        null === (c = this._secondaryView) || void 0 === c || c.search();
                                        break;
                                    case "course-lessons":
                                        null === (d = this._primaryView) || void 0 === d || d.clear(),
                                        null === (h = this._secondaryView) || void 0 === h || h.search(),
                                            k.searchParams.set("c", "lessons"),
                                            k.searchParams.set("pid", t.detail.course.id || ""),
                                            history.pushState({}, "", k),
                                        null === (p = this._el.querySelector("input")) || void 0 === p || p.focus(),
                                        null === (v = this._secondaryView) || void 0 === v || v.search();
                                        break;
                                    case "lesson-transcript":
                                        null === (m = this._primaryView) || void 0 === m || m.clear(),
                                            k.searchParams.set("c", "lessons"),
                                            history.pushState({
                                                scrollTo: t.detail.lesson.id
                                            }, "", k),
                                        null === (g = this._secondaryView) || void 0 === g || g.search();
                                        break;
                                    case "course-player":
                                        if (null === (y = this._primaryView) || void 0 === y || y.clear(),
                                        null === (w = this._secondaryView) || void 0 === w || w.clear(),
                                            (null === (b = null === (_ = t.detail) || void 0 === _ ? void 0 : _.course) || void 0 === b ? void 0 : b.id) ? k.searchParams.set("pid", t.detail.course.id) : k.searchParams.delete("pid"),
                                        void 0 !== t.detail.q && k.searchParams.set("q", t.detail.q),
                                        null === (S = this._el.querySelector("input")) || void 0 === S || S.focus(),
                                            t.detail.replace ? history.replaceState({}, "", k) : history.pushState({}, "", k),
                                            k.searchParams.has("q")) {
                                            const t = !0;
                                            null === (E = this._primaryView) || void 0 === E || E.search(t)
                                        }
                                }
                                this._render()
                            }
                        )),
                        document.addEventListener("keydown", (t => {
                                new URL(window.location.href);
                                if (this._isSearchModalTrigger(t) && !this._showModal) {
                                    let e;
                                    t.preventDefault(),
                                    window._bs.isPlayer && (e = {
                                        detail: {
                                            eventName: "course-player",
                                            course: {
                                                id: window._bs.courseHash
                                            }
                                        }
                                    }),
                                        window.dispatchEvent(new CustomEvent("fm-global-search-open", e))
                                } else
                                    "Escape" === t.code && this._showModal && this._handleClose()
                            }
                        )),
                        window.addEventListener("fm-global-search-open", (t => {
                                var e;
                                if (this._handleLoginSearch())
                                    return;
                                let r = new URL(window.location.href);
                                this._showModal = !0,
                                    this._lastSearchUrl ? (r = new URL(this._lastSearchUrl),
                                        this._sortOrder = r.searchParams.get("so") || u.defaultSort,
                                        history.back(),
                                        history.replaceState({}, "", r),
                                        this._reload(),
                                        delete this._lastSearchUrl) : (r.searchParams.set("q", ""),
                                    this._sortOrder && this._showModal && this._sortOrder !== u.defaultSort && r.searchParams.set("so", this._sortOrder),
                                        history.pushState({}, "", r)),
                                    this._render(),
                                (null === (e = t.detail) || void 0 === e ? void 0 : e.eventName) && ("course-player" === t.detail.eventName && (t.detail.replace = !0),
                                    window.dispatchEvent(new CustomEvent("fm-global-search", {
                                        detail: t.detail
                                    })))
                            }
                        )),
                        window.addEventListener("popstate", (() => {
                                this._reload()
                            }
                        )),
                        this._reload()
                }

                _isSearchModalTrigger(t) {
                    return (0,
                        u.isMac)() ? "KeyK" === t.code && t.metaKey : !(!(0,
                        u.isWindows)() && !(0,
                        u.isLinux)()) && ("KeyK" === t.code && t.ctrlKey)
                }

                _reload() {
                    var t, e, r, n, i;
                    const o = new URL(window.location.href)
                        , s = o.searchParams.get("so") !== this._sortOrder
                        , a = window._bs.isPlayer && o.searchParams.get("pid") === window._bs.courseHash
                        , l = s || a
                        , c = this.inputRef.value;
                    c && (c.value = f("q")),
                        o.searchParams.has("c") ? (this._showModal = !0,
                            this._render(),
                        null === (t = this._primaryView) || void 0 === t || t.clear(),
                        null === (e = this._secondaryView) || void 0 === e || e.search(l)) : o.searchParams.has("q") ? (this._showModal = !0,
                            this._render(),
                        null === (r = this._primaryView) || void 0 === r || r.clear(),
                        null === (n = this._secondaryView) || void 0 === n || n.clear(),
                        null === (i = this._primaryView) || void 0 === i || i.search(l)) : (this._showModal = !1,
                            delete this._primaryView,
                            delete this._secondaryView,
                            this._render())
                }

                _template() {
                    const t = f("q")
                        , e = document.querySelector("html");
                    if (e && this._showModal ? e.classList.add("noscroll") : e && e.classList.remove("noscroll"),
                        !this._showModal)
                        return i.nothing;
                    const r = f("pid")
                        , n = r && r === window._bs.courseHash
                        , a = {
                        "global-search": !0,
                        "global-search-modal": !window._bs.isPlayer,
                        "global-search-sidebar": window._bs.isPlayer,
                        "global-search-sidebar-full": window._bs.isPlayer && !n
                    }
                        , l = {
                        "global-search-inner": !0,
                        "full-height": f("q") || window._bs.isPlayer
                    };
                    return i.html`
      <div class="${(0,
                        s.classMap)(a)}">
        <div class="${(0,
                        s.classMap)(l)}">
          <div class="global-search-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click=${t => {
                        const e = this.inputRef.value;
                        null == e || e.focus()
                    }
                    }
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              ${(0,
                        o.ref)(this.inputRef)}
              @input=${this._debouncedInput}
              type="search"
              value=${t}
              spellcheck="false"
              .autofocus
              placeholder="Search"
              maxlength="50"
            />
            <a
              class="clear"
              href="#"
              @click=${t => this._handleClearSearch(t)}
              >✕</a
            >
            <a class="close" href="#" @click=${this._handleClose.bind(this)}
              >ESC</a
            >
          </div>
          <div id="global-search-primary" class="global-search-body flex"></div>
          <div
            id="global-search-secondary"
            class="global-search-body flex"
          ></div>
        </div>
      </div>
    `
                }

                _render() {
                    if (f("so") !== this._sortOrder && this._sortOrder && this._showModal) {
                        const t = new URL(window.location.href);
                        this._sortOrder === u.defaultSort ? t.searchParams.has("so") && t.searchParams.delete("so") : t.searchParams.set("so", this._sortOrder),
                            history.replaceState({}, "", t)
                    }
                    (0,
                        i.render)(this._template(), this._el);
                    const t = this.inputRef.value;
                    t && t.focus();
                    const e = this._el.querySelector("#global-search-primary")
                        , r = this._el.querySelector("#global-search-secondary");
                    e && !this._primaryView && (this._primaryView = new a.GlobalSearchPrimary(e)),
                    r && !this._secondaryView && (this._secondaryView = new l.GlobalSearchSecondary(r))
                }

                _handleInput(t) {
                    t.preventDefault();
                    new URL(window.location.href);
                    const {value: e} = t.target;
                    window.dispatchEvent(new CustomEvent("fm-global-search", {
                        detail: {
                            eventName: "initial-search",
                            q: e,
                            replace: !0
                        }
                    }))
                }

                _handleClearSearch(t) {
                    var e, r;
                    t.preventDefault();
                    const n = this.inputRef.value;
                    n && (n.value = "");
                    const i = new URL(window.location.href);
                    i.searchParams.set("q", ""),
                        i.searchParams.delete("c"),
                    window._bs.isPlayer || i.searchParams.delete("pid"),
                        history.pushState({}, "", i),
                    null === (e = this._secondaryView) || void 0 === e || e.clear(),
                    null === (r = this._primaryView) || void 0 === r || r.search(),
                        this._render()
                }

                _handleClose(t, e) {
                    const r = new URL(window.location.href);
                    null == t || t.preventDefault(),
                        this._showModal = !1,
                    e && (this._lastSearchUrl = window.location.href),
                        r.searchParams.delete("q"),
                        r.searchParams.delete("c"),
                        r.searchParams.delete("pid"),
                        r.searchParams.delete("so");
                    new URL(r);
                    history.pushState({}, "", r),
                        delete this._primaryView,
                        delete this._secondaryView,
                        delete this._sortOrder,
                        this._render()
                }

                _handleLoginSearch() {
                    if (window.location.href.includes("login")) {
                        const t = new URL(window.location.origin);
                        return t.searchParams.set("q", ""),
                            window.location.href = t.toString(),
                            !0
                    }
                    return !1
                }
            }

            const h = document.getElementById("global-search-container");

            function f(t) {
                return new URL(window.location.href).searchParams.get(t) || ""
            }

            h && new d(h)
        },
        1596: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.nav = e.registerNavScrollObserver = e.handleNavClick = void 0;
            const n = r(415)
                , i = r(8694);

            function o(t) {
                t.preventDefault(),
                    t.stopPropagation();
                const {href: e} = t.target
                    , r = new URL(e).hash
                    , n = document.querySelector(r);
                n && n.scrollIntoView({
                    behavior: "smooth"
                })
            }

            e.handleNavClick = o,
                e.registerNavScrollObserver = function (t) {
                    var e, r;
                    const n = document.querySelectorAll("a[href*=search-]");
                    n && n.length > 0 && (null === (e = n[0].parentElement) || void 0 === e || e.classList.add("active"));
                    const i = document.querySelector(".results-list");
                    if (i) {
                        const e = null === (r = i.children[0].querySelector("a")) || void 0 === r ? void 0 : r.id;
                        let n;
                        t._el.dataset.activeNav = e,
                            i.addEventListener("scroll", (e => {
                                    var r, o;
                                    e.preventDefault(),
                                        e.stopPropagation();
                                    const s = i.offsetTop
                                        , a = i.querySelectorAll("a[id*=search-]")
                                        , l = i.scrollTop;
                                    for (var c = 0; c < a.length; c++) {
                                        const t = a[c].getAttribute("id")
                                            , e = document.querySelector(`.global-search-body nav ul li a[href*=${t}]`);
                                        e && (null === (r = e.parentElement) || void 0 === r || r.classList.remove("active"))
                                    }
                                    for (c = a.length - 1; c >= 0; c--)
                                        if (l >= a[c].offsetTop - s) {
                                            const e = a[c].getAttribute("id")
                                                ,
                                                r = document.querySelector(`.global-search-body nav ul li a[href*=${e}]`);
                                            if (r) {
                                                null === (o = r.parentElement) || void 0 === o || o.classList.add("active"),
                                                e && e !== t._store._activeNavID && (t._store._activeNavID = e,
                                                    t._el.dataset.activeNav = e),
                                                    clearTimeout(n),
                                                    n = setTimeout((() => {
                                                            r.scrollIntoView({
                                                                behavior: "smooth",
                                                                block: "center",
                                                                inline: "center"
                                                            })
                                                        }
                                                    ), 150);
                                                break
                                            }
                                        }
                                }
                            ))
                    }
                }
                ,
                e.nav = function (t) {
                    return n.html`
    <nav>
      <div
        class="left"
        @click=${t => {
                        null == t || t.preventDefault();
                        const e = document.querySelector(".global-search-body nav ul");
                        e && e.scrollBy({
                            top: 0,
                            left: -e.clientWidth / 2,
                            behavior: "smooth"
                        })
                    }
                    }
      >
        ◀
      </div>
      <ul>
        ${(0,
                        i.map)(t, (t => n.html`<li>
            <a href="#search-${t.type}" @click=${o}
              >${t.title} (${t.totalCount})
            </a>
          </li>`))}
      </ul>
      <div
        class="right"
        @click=${t => {
                        null == t || t.preventDefault();
                        const e = document.querySelector(".global-search-body nav ul");
                        e && e.scrollBy({
                            top: 0,
                            left: e.clientWidth / 2,
                            behavior: "smooth"
                        })
                    }
                    }
      >
        ▶
      </div>
    </nav>
  `
                }
        },
        6533: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.GlobalSearchPrimary = void 0;
            const n = r(415)
                , i = r(405)
                , o = r(3096)
                , s = r(8797)
                , a = r(763)
                , l = r(5337)
                , c = r(1596)
                , u = r(8111)
                , d = r(6120)
                , h = r(8983)
                , f = r(2505)
                , p = r(4158);
            e.GlobalSearchPrimary = class {
                constructor(t) {
                    this._store = new s.Store,
                        this._el = t,
                        this._store.addEventListener("save", (t => {
                                var e;
                                this._render(),
                                (null === (e = t.detail) || void 0 === e ? void 0 : e.fetched) && (0,
                                    d.keyboardNav)()
                            }
                        )),
                        this._render(),
                        window.addEventListener("resize", (() => {
                                const {isLoading: t} = this._store.getData();
                                t || (this._lastItemScrollMargin(),
                                    this._navHelpers())
                            }
                        ))
                }

                _primaryView() {
                    const {searchTerm: t, data: e, isLoading: r} = this._store.getData();
                    let s = "empty";
                    return r ? s = "isLoading" : t && e.results.length > 0 ? s = "results" : t && !e.results.length && (s = "no-results"),
                        n.html`
      <div class="context-links">
        ${(0,
                            o.when)("results" === s, p.playerContextToggle)}
      </div>
      <div class="input-context">${(0,
                            o.when)("results" === s, f.sortOptions)}</div>
      ${(0,
                            i.choose)(s, [["empty", l.emptyState], ["isLoading", this._loadingIndicator], ["results", () => n.html`${(0,
                            c.nav)(e.results)}${(0,
                            u.searchResultsList)(e.results)}`], ["no-results", a.noResults]])}
    `
                }

                _loadingIndicator() {
                    return n.html`<div class="global-search-loading"></div>`
                }

                _template() {
                    return this._primaryView()
                }

                _render() {
                    (0,
                        n.render)(this._template(), this._el);
                    const t = this._el.querySelectorAll(".Button.bookmark");
                    (0,
                        h.initBookmarkButtons)(t),
                        (0,
                            c.registerNavScrollObserver)(this);
                    const e = this._el.querySelector(".results-list");
                    e && (e.scrollTop = 0),
                        (0,
                            d.addEllipsisEventListeners)(this._el, ".subtitle", (() => this._lastItemScrollMargin())),
                        this._lastItemScrollMargin(),
                        this._navHelpers()
                }

                clear() {
                    this._store._siteAbortController.abort(),
                        this._store._userAbortController.abort(),
                        (0,
                            n.render)(n.nothing, this._el)
                }

                search(t) {
                    this._store.search(t)
                }

                _lastItemScrollMargin() {
                    const t = this._el.querySelector(".results-list:not(.secondary-results-list)");
                    if (t) {
                        const e = t.querySelector("section:last-of-type")
                            , r = document.getElementById("results-padding");
                        e && r && (r.style.height = t.clientHeight - e.clientHeight - 20 + "px")
                    }
                }

                _navHelpers() {
                    const t = this._el.querySelector("nav")
                        , e = this._el.querySelector("nav ul");
                    t && e && (t.classList.remove("nav-helpers"),
                    e.clientWidth < e.scrollWidth && t.classList.add("nav-helpers"))
                }
            }
        },
        8797: function (t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function (t, e, r, n) {
                    return new (r || (r = Promise))((function (i, o) {
                            function s(t) {
                                try {
                                    l(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    l(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value,
                                    e instanceof r ? e : new r((function (t) {
                                            t(e)
                                        }
                                    ))).then(s, a)
                            }

                            l((n = n.apply(t, e || [])).next())
                        }
                    ))
                }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.Store = void 0;
            const i = r(4781)
                , o = r(6120);

            class s extends EventTarget {
                constructor() {
                    super(),
                        this._searchTerm = "",
                        this._showModal = !1,
                        this._data = {
                            results: []
                        },
                        this._siteAbortController = new AbortController,
                        this._userAbortController = new AbortController,
                        this._isLoading = !1,
                        this._isSiteLoading = !1,
                        this._isUserLoading = !1,
                        this._activeNavID = ""
                }

                _fetchSite(t, e) {
                    return n(this, void 0, void 0, (function* () {
                            let r = []
                                , n = [];
                            try {
                                r = (yield(0,
                                    o.retry)((() => (this._isSiteLoading = !0,
                                    this._siteAbortController.abort(),
                                    this._siteAbortController = new AbortController,
                                    (0,
                                        i.jsonFetch)(t, Object.assign({
                                        signal: this._siteAbortController.signal,
                                        method: "GET"
                                    }, e || {})))), o.exponentialDelay)).parsedBody.results || []
                            } catch (t) {
                                "AbortError" === t.name && n.push(t)
                            }
                            return this._isSiteLoading = n.length > 0,
                                {
                                    results: r,
                                    errors: n
                                }
                        }
                    ))
                }

                _fetchUser(t, e) {
                    return n(this, void 0, void 0, (function* () {
                            let r = []
                                , n = [];
                            try {
                                r = (yield(0,
                                    o.retry)((() => (this._isUserLoading = !0,
                                    this._userAbortController.abort(),
                                    this._userAbortController = new AbortController,
                                    (0,
                                        i.jsonFetch)(t, Object.assign({
                                        signal: this._userAbortController.signal,
                                        method: "GET"
                                    }, e || {})))), o.exponentialDelay)).parsedBody.results || []
                            } catch (t) {
                                "AbortError" === t.name && n.push(t)
                            }
                            return this._isUserLoading = n.length > 0,
                                {
                                    results: r,
                                    errors: n
                                }
                        }
                    ))
                }

                _fetchSiteData() {
                    return n(this, void 0, void 0, (function* () {
                            const t = a("https://search.api.frontendmasters.com/site")
                                , e = yield this._fetchSite(t)
                                , r = !!(e.errors && e.errors.length > 0);
                            r || (!e.results || this._isSiteLoading && !this._isUserLoading ? this._data.results.unshift(...e.results) : this._data.results = e.results);
                            this._isLoading = this._isUserLoading || this._isSiteLoading || r && "" !== (0,
                                o.getSearchParam)("q") && window.navigator.onLine,
                            this._data.results.length > 0 && (this._isLoading = !1),
                                this._save({
                                    fetched: !0
                                })
                        }
                    ))
                }

                _fetchUserData() {
                    return n(this, void 0, void 0, (function* () {
                            const t = a("https://search.api.frontendmasters.com/user")
                                , e = yield this._fetchUser(t, {
                                credentials: "include"
                            })
                                , r = !!(e.errors && e.errors.length > 0);
                            r || (e.results && this._isSiteLoading ? (this._data = e,
                                this._data.results = e.results) : this._data.results.push(...e.results));
                            this._isLoading = this._isUserLoading || this._isSiteLoading || r && "" !== (0,
                                o.getSearchParam)("q") && window.navigator.onLine,
                            this._data.results.length > 0 && (this._isLoading = !1),
                                this._save({
                                    fetched: !0
                                })
                        }
                    ))
                }

                _save(t) {
                    return n(this, void 0, void 0, (function* () {
                            let e;
                            t && (e = {
                                detail: t
                            }),
                                this.dispatchEvent(new CustomEvent("save", e))
                        }
                    ))
                }

                search(t) {
                    if (this._searchTerm === (0,
                        o.getSearchParam)("q") && this._data.results.length && !t)
                        return void this._save();
                    const e = (0,
                        o.getSearchParam)("q");
                    e ? (this._searchTerm = e,
                        this._isLoading = !0,
                        this._data.results = [],
                        this._save(),
                        this._fetchSiteData(),
                    window._bs.isLoggedIn && window._bs.isPaid && this._fetchUserData()) : (this._siteAbortController.abort(),
                        this._userAbortController.abort(),
                        this._save())
                }

                getData() {
                    return {
                        searchTerm: (0,
                            o.getSearchParam)("q"),
                        showModal: this._showModal,
                        data: this._data,
                        isLoading: this._isLoading
                    }
                }

                openModal() {
                    this._showModal = !0,
                        this._save()
                }

                closeModal() {
                    this._showModal = !1,
                        this._save()
                }
            }

            function a(t) {
                const e = new URL(window.location.href);
                return window._bs.isPlayer && e.searchParams.has("pid") && e.searchParams.set("s", "8"),
                    new URL(`${t}?${e.searchParams}`)
            }

            e.Store = s
        },
        2004: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.blog = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3313);
            e.blog = function (t, e) {
                return n.html`
    <section>
      <a id="search-blog"></a>
      <div class="category-header">
        <h3>Blog</h3>
        ${(0,
                    o.seeMoreResults)(e, (t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "see-more",
                                    type: "blog"
                                }
                            }))
                    }
                ))}
      </div>
      <ul>
        ${(0,
                    i.map)(t, (t => n.html`<li>
            <div>
              <h4>
                <a href="${t.data.url}">${t.data.title}</a>
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>
            </div>
          </li> `))}
      </ul>
    </section>
  `
            }
        },
        2457: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.courses = void 0;
            const n = r(415)
                , i = r(4080)
                , o = r(8694)
                , s = r(3096)
                , a = r(3313);
            e.courses = function (t, e) {
                return n.html`
    <section>
      <a id="search-courses"></a>
      <div class="category-header">
        <h3>Courses</h3>
        ${(0,
                    a.seeMoreResults)(e, (t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "see-more",
                                    type: "courses"
                                }
                            }))
                    }
                ), !0)}
      </div>
      <ul>
        ${(0,
                    o.map)(t, (t => {
                        var e, r;
                        const a = !!(null === (e = window._bs.bookmarks) || void 0 === e ? void 0 : e[t.data.id])
                            , l = {
                            ButtonGray: !a,
                            ButtonYellow: a,
                            bookmarked: a
                        };
                        return n.html`<li>
            <a href="${t.data.url}">
              <img src="${t.data.iconURL}" height="24" width="24" />
            </a>
            <div>
              <h4>
                <a href="${t.data.url}">${t.data.title}</a>
                ${(0,
                            s.when)(null === (r = window._bs) || void 0 === r ? void 0 : r.bookmarks, (() => n.html`
                    <a
                      class="Button ButtonIcon hide-text bookmark ${(0,
                            i.classMap)(l)}"
                      href="#"
                      data-bookmark="${t.data.slug}"
                      data-bookmark-id="${t.data.id}"
                    >
                      Bookmark
                    </a>
                  `))}
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>
              ${(0,
                            s.when)(t.data.children, (() => n.html`
                  <div class="drawer">
                    <div class="meta">
                      ${(0,
                            o.map)(t.data.children, (e => n.html`
                          <a
                            href="#"
                            @click=${e => {
                            e.preventDefault(),
                                window.dispatchEvent(new CustomEvent("fm-global-search", {
                                    detail: {
                                        eventName: "course-lessons",
                                        course: t.data
                                    }
                                }))
                        }
                        }
                            >${e.title} (${e.totalCount})</a
                          >
                        `))}
                    </div>
                  </div>
                `))}
            </div>
          </li> `
                    }
                ))}
      </ul>
    </section>
  `
            }
        },
        5337: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.emptyState = void 0;
            const n = r(415)
                , i = r(8694)
                , o = ["JavaScript", "TypeScript", "CSS", "HTML"]
                , s = ["React", "Node", "Redux", "hooks"];
            e.emptyState = function () {
                return window._bs.isPlayer ? n.nothing : n.html`<div class="recommended-searches">
    <div>
      <section>
        <h4>Popular Languages</h4>
        <ul>
          ${(0,
                    i.map)(o, (t => n.html`
              <li>
                <a
                  href="#"
                  @click=${e => {
                    e.preventDefault(),
                        window.dispatchEvent(new CustomEvent("fm-global-search", {
                            detail: {
                                eventName: "initial-search",
                                q: t
                            }
                        }))
                }
                }
                  >${t}</a
                >
              </li>
            `))}
        </ul>
      </section>
      <section>
        <h4>Popular Terms</h4>
        <ul>
          ${(0,
                    i.map)(s, (t => n.html`
              <li>
                <a
                  href="#"
                  @click=${e => {
                    e.preventDefault(),
                        window.dispatchEvent(new CustomEvent("fm-global-search", {
                            detail: {
                                eventName: "initial-search",
                                q: t
                            }
                        }))
                }
                }
                  >${t}</a
                >
              </li>
            `))}
        </ul>
      </section>
    </div>
  </div>`
            }
        },
        9249: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.learningPaths = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3313)
                , s = r(6120);
            e.learningPaths = function (t, e) {
                return n.html`
    <section>
      <a id="search-paths"></a>
      <div class="category-header">
        <h3>Learning Paths</h3>
        ${(0,
                    o.seeMoreResults)(e, (t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "see-more",
                                    type: "paths"
                                }
                            }))
                    }
                ))}
      </div>
      <ul>
        ${(0,
                    i.map)(t, (t => {
                        return n.html`<li>
            <a href="${t.data.url}">
              <img src="${e = t.data.slug,
                            (0,
                                s.getImagePath)(`learn/${e}.svg`)}" />
            </a>
            <div>
              <h4>
                <a href="${t.data.url}">${t.data.title}</a>
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>
            </div>
          </li> `;
                        var e
                    }
                ))}
      </ul>
    </section>
  `
            }
        },
        3719: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.lessons = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3313)
                , s = r(3096)
                , a = r(6120)
                , l = {
                transcripts: {
                    title: "Matches",
                    eventName: "lesson-transcript"
                }
            };

            function c(t, e) {
                const r = new URL(t, window.location.href);
                return e && "" != e && r.searchParams.set("w", e),
                    r
            }

            e.lessons = function (t, e) {
                const r = new URL(window.location.href).searchParams.get("q");
                return n.html`
    <section>
      <a id="search-lessons"></a>
      <div class="category-header">
        <h3>Lessons</h3>
        ${(0,
                    o.seeMoreResults)(e, (t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "see-more",
                                    type: "lessons"
                                }
                            }))
                    }
                ), !0)}
      </div>
      <ul>
        ${(0,
                    i.map)(t, (t => {
                        var e, o, u;
                        return n.html`<li>
            <a
              href="${c(t.data.url, r)}"
              @click=${a.usePushStateIfPlayer}
            >
              <img src="${t.data.iconURL}" height="24" width="24" />
            </a>
            <div>
              <h4>
                <a
                  href="${c(t.data.url, r)}"
                  @click=${a.usePushStateIfPlayer}
                  >${t.data.title}</a
                >
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>

              ${(0,
                            s.when)(null === (o = null === (e = t.data) || void 0 === e ? void 0 : e.highlight) || void 0 === o ? void 0 : o.lessonTranscript, (() => n.html`
                  <div class="drawer">
                    <div class="meta">
                      <a
                        href="#"
                        @click=${e => {
                            e.preventDefault(),
                                window.dispatchEvent(new CustomEvent("fm-global-search", {
                                    detail: {
                                        eventName: "lesson-transcript",
                                        lesson: t.data
                                    }
                                }))
                        }
                        }
                        >Matches
                        (${t.data.highlight.lessonTranscript.length})</a
                      >
                    </div>
                  </div>
                `))}
              ${(0,
                            s.when)(null === (u = t.data) || void 0 === u ? void 0 : u.children, (() => {
                                var e;
                                return n.html`
                  <div class="drawer">
                    <div class="meta">
                      ${(0,
                                    i.map)(null === (e = t.data) || void 0 === e ? void 0 : e.children, (e => n.html` <a
                            href="#"
                            @click=${r => {
                                    r.preventDefault(),
                                        window.dispatchEvent(new CustomEvent("fm-global-search", {
                                            detail: {
                                                eventName: l[e.type].eventName,
                                                lesson: t.data
                                            }
                                        }))
                                }
                                }
                            >${l[e.type].title}
                            (${e.totalCount})</a
                          >`))}
                    </div>
                  </div>
                `
                            }
                        ))}
            </div>
          </li> `
                    }
                ))}
      </ul>
    </section>
  `
            }
        },
        763: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.noResults = void 0;
            const n = r(415)
                , i = r(3096);
            e.noResults = function () {
                let t = n.html`<p>Modify your search term and try again.</p>`;
                if (window._bs.isPlayer) {
                    new URLSearchParams(window.location.search).has("pid") && (t = n.html`
        <p>
          <a
            href="#"
            @click=${t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "course-player"
                                }
                            }))
                    }
                    }
            >Search our full catalog instead?</a
          >
        </p>
      `)
                }
                return n.html`<div class="no-results">
    ${(0,
                    i.when)(window.navigator.onLine, (() => n.html`
        <h3>No Results</h3>
        <hr />
        <section>${t}</section>
      `), (() => n.html`
        <h3>No Internet</h3>
        <hr />
        <section><p>Check your connection and try again.</p></section>
      `))}
  </div>`
            }
        },
        7260: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.notes = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3313);
            e.notes = function (t, e) {
                return n.html`
    <section>
      <a id="search-user-notes"></a>
      <div class="category-header">
        <h3>Notes</h3>
        ${(0,
                    o.seeMoreResults)(e, (t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "see-more",
                                    type: "user-notes"
                                }
                            }))
                    }
                ))}
      </div>
      <ul>
        ${(0,
                    i.map)(t, (t => n.html`<li>
            <div>
              <h4>
                <a href="${t.data.url}">${t.data.title}</a>
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>
            </div>
          </li> `))}
      </ul>
    </section>
  `
            }
        },
        8657: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.paginatedBlog = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3096);
            e.paginatedBlog = function (t, e) {
                const r = t.items;
                return r ? n.html`
    <div class="results-list secondary-results-list">
      <section>
        <div class="secondary-results-title">
          <h3>Blog</h3>
        </div>
        <ul>
          ${(0,
                    i.map)(r, (t => n.html`<li>
              <div>
                <h4>
                  <a href="${t.data.url}">${t.data.title}</a>
                </h4>
                <div class="subtitle">${t.data.subtitle}</div>
              </div>
            </li> `))}
          ${(0,
                    o.when)(e, (() => n.html`<li class="scroll-loader">loading more...</li>`))}
        </ul>
      </section>
      <div id="results-padding"></div>
    </div>
  ` : n.nothing
            }
        },
        6508: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.paginatedCourses = void 0;
            const n = r(415)
                , i = r(4080)
                , o = r(8694)
                , s = r(3096);
            e.paginatedCourses = function (t, e) {
                const r = t.items;
                return r ? n.html`
    <div class="results-list secondary-results-list">
      <section>
        <div class="secondary-results-title">
          <h3>Courses</h3>
        </div>
        <ul>
          ${(0,
                    o.map)(r, (t => {
                        var e, r;
                        const a = !!(null === (e = window._bs.bookmarks) || void 0 === e ? void 0 : e[t.data.id])
                            , l = {
                            ButtonGray: !a,
                            ButtonYellow: a,
                            bookmarked: a
                        };
                        return n.html`<li>
              <a href="${t.data.url}">
                <img src="${t.data.iconURL}" height="24" width="24" />
              </a>
              <div>
                <h4>
                  <a href="${t.data.url}">${t.data.title}</a>
                  ${(0,
                            s.when)(null === (r = window._bs) || void 0 === r ? void 0 : r.bookmarks, (() => n.html`
                      <a
                        class="Button ButtonIcon hide-text bookmark ${(0,
                            i.classMap)(l)}"
                        href="#"
                        data-bookmark="${t.data.slug}"
                        data-bookmark-id="${t.data.id}"
                      >
                        Bookmark
                      </a>
                    `))}
                </h4>
                <div class="subtitle">${t.data.subtitle}</div>
                ${(0,
                            o.map)(t.data.children, (e => n.html`
                    <div class="drawer">
                      <div class="meta">
                        <a
                          href="#"
                          @click=${e => {
                            e.preventDefault(),
                                window.dispatchEvent(new CustomEvent("fm-global-search", {
                                    detail: {
                                        eventName: "course-lessons",
                                        course: t.data
                                    }
                                }))
                        }
                        }
                          >${e.title} (${e.totalCount})</a
                        >
                      </div>
                    </div>
                  `))}
              </div>
            </li> `
                    }
                ))}
          ${(0,
                    s.when)(e, (() => n.html`<li class="scroll-loader">loading more...</li>`))}
        </ul>
      </section>
      <div id="results-padding"></div>
    </div>
  ` : n.nothing
            }
        },
        1821: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.paginatedLearningPaths = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3096)
                , s = r(6120);
            e.paginatedLearningPaths = function (t, e) {
                const r = t.items;
                return r ? n.html`
    <div class="results-list secondary-results-list">
      <section>
        <div class="category-header">
          <h3>Learning Paths</h3>
        </div>
        <ul>
          ${(0,
                    i.map)(r, (t => {
                        return n.html`<li>
              <a href="${t.data.url}">
                <img src="${e = t.data.slug,
                            (0,
                                s.getImagePath)(`learn/${e}.svg`)}" />
              </a>
              <div>
                <h4>
                  <a href="${t.data.url}">${t.data.title}</a>
                </h4>
                <div class="subtitle">${t.data.subtitle}</div>
              </div>
            </li> `;
                        var e
                    }
                ))}
          ${(0,
                    o.when)(e, (() => n.html`<li class="scroll-loader">loading more...</li>`))}
        </ul>
      </section>
      <div id="results-padding"></div>
    </div>
  ` : n.nothing
            }
        },
        337: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.paginatedLessons = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3096)
                , s = r(7720)
                , a = r(6120);
            e.paginatedLessons = function (t, e) {
                const r = t.items;
                if (!r)
                    return n.nothing;
                const l = new URL(window.location.href).searchParams.get("q");
                return n.html`
    <div class="results-list secondary-results-list">
      <section>
        <div class="secondary-results-title">
          ${(0,
                    o.when)(t.parent, (() => n.html`
              <a href="${t.parent.url}" @click=${a.usePushStateIfPlayer}>
                <img src="${t.parent.iconURL}" height="40" width="40" />
                <div>
                  <h3>${t.parent.title}</h3>
                  <div>
                    ${t.parent.authors.map((t => t.name)).join(", ")}
                  </div>
                </div>
              </a>
            `), (() => n.html`<h3>Lessons</h3>`))}
        </div>
        <ul>
          ${(0,
                    i.map)(r, (e => {
                        var r, c;
                        return n.html`<li>
              <div>
                <div class="cell-header">
                  ${(0,
                            o.when)(!t.parent, (() => n.html`
                      <a
                        id="${e.data.id}"
                        href="${e.parent.url}"
                        @click=${a.usePushStateIfPlayer}
                      >
                        <img
                          src="${e.data.iconURL}"
                          title="${e.parent.title}"
                        />
                      </a>
                    `))}
                  <div>
                    <h4>
                      <a
                        id="${e.data.id}"
                        href="${function (t, e) {
                            const r = new URL(t, window.location.href);
                            e && "" != e && r.searchParams.set("w", e);
                            return r
                        }(e.data.url, l)}"
                        @click=${a.usePushStateIfPlayer}
                        >${e.data.title}</a
                      >
                    </h4>
                    ${(0,
                            o.when)(!t.parent, (() => n.html`<div>
                        ${e.parent.title} &bull;
                        ${e.parent.authors.map((t => t.name)).join(",")}
                      </div>`))}
                  </div>
                </div>

                <div class="cell-content">
                  <div>${e.data.subtitle}</div>
                  ${(0,
                            o.when)(null === (c = null === (r = e.data) || void 0 === r ? void 0 : r.highlight) || void 0 === c ? void 0 : c.lessonTranscript, (() => n.html`<div class="search-transcript">
                        ${(0,
                            i.map)(e.data.highlight.lessonTranscript, (t => n.html`<blockquote @click=${a.usePushStateIfPlayer}>${function (t, e) {
                            return t = t.replace(/<em data-timestamp="(.+?)">(.+?)<\/em>/g, `<a href="${e}?w=$2&t=$1&x=1"><em>$2</em></a>`),
                                (0,
                                    s.unsafeHTML)(t)
                        }(t, e.data.url)}</block>`))}
                      </div>`))}
                </div>
              </div>
            </li> `
                    }
                ))}
          ${(0,
                    o.when)(e, (() => n.html`<li class="scroll-loader">loading more...</li>`))}
        </ul>
      </section>
      <div id="results-padding"></div>
    </div>
  `
            }
        },
        3451: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.paginatedNotes = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3096)
                , s = r(6120);
            e.paginatedNotes = function (t, e) {
                const r = t.items;
                return r ? n.html`
    <div class="results-list secondary-results-list">
      <section>
        <div class="secondary-results-title">
          <h3>Notes</h3>
        </div>
        <ul>
          ${(0,
                    i.map)(r, (t => n.html`<li>
              <div>
                <h4>
                  <a href="${t.data.url}" @click=${s.usePushStateIfPlayer}
                    >${t.data.title}</a
                  >
                </h4>
                <div class="subtitle">${t.data.subtitle}</div>
              </div>
            </li> `))}
          ${(0,
                    o.when)(e, (() => n.html`<li class="scroll-loader">loading more...</li>`))}
        </ul>
      </section>
      <div id="results-padding"></div>
    </div>
  ` : n.nothing
            }
        },
        2109: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.paginatedTags = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3096)
                , s = r(6120);
            e.paginatedTags = function (t, e) {
                const r = t.items;
                return r ? n.html`
    <div class="results-list secondary-results-list">
      <section>
        <div class="secondary-results-title">
          <h3>Topics</h3>
        </div>
        <ul>
          ${(0,
                    i.map)(r, (t => {
                        return n.html`<li>
              <a href="${t.data.url}">
                <img src="${e = t.data.slug,
                            (0,
                                s.getImagePath)(`topics/${e}.svg`)}" />
              </a>
              <div>
                <h4>
                  <a href="${t.data.url}">${t.data.title}</a>
                </h4>
                <div class="subtitle">${t.data.subtitle}</div>
              </div>
            </li> `;
                        var e
                    }
                ))}
          ${(0,
                    o.when)(e, (() => n.html`<li class="scroll-loader">loading more...</li>`))}
        </ul>
      </section>
      <div id="results-padding"></div>
    </div>
  ` : n.nothing
            }
        },
        1494: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.paginatedWorkshops = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3096)
                , s = r(6120)
                , a = "/static-assets/workshops/default-thumbnail.png";
            e.paginatedWorkshops = function (t, e) {
                const r = t.items;
                return r ? n.html`
    <div class="results-list secondary-results-list">
      <section>
        <div class="secondary-results-title">
          <h3>Workshops</h3>
        </div>
        <ul>
          ${(0,
                    i.map)(r, (t => n.html`<li>
              <a href="${t.data.url}">
                <img
                  src="${t.data.iconURL}"
                  onerror="if (this.src != '${a}') this.src = '${a}'"
                />
              </a>
              <div>
                <h4>
                  <a href="${t.data.url}">${t.data.title}</a>
                  <span> &bull; ${(0,
                    s.formatTimestamp)(t.data.timestamp)}</span>
                  ${function (t, e) {
                    const r = (0,
                        s.isWithinInterval)(t)
                        , i = (0,
                        s.isPast)(t);
                    let o = r ? "current" : "future";
                    "future" === o && i && (o = "past");
                    return "future" === o ? n.nothing : n.html` <span
    >&bull;
    <a href="${e}#player"
      >${"current" === o ? "Watch" : "Replay"}</a
    ></span
  >`
                }(t.data.timestamp, t.data.url)}
                </h4>
                <div class="subtitle">${t.data.subtitle}</div>
              </div>
            </li> `))}
          ${(0,
                    o.when)(e, (() => n.html`<li class="scroll-loader">loading more...</li>`))}
        </ul>
      </section>
      <div id="results-padding"></div>
    </div>
  ` : n.nothing
            }
        },
        4158: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.playerContextToggle = void 0;
            const n = r(415);
            e.playerContextToggle = function () {
                if (!window._bs.isPlayer)
                    return n.nothing;
                const t = new URLSearchParams(window.location.search).has("pid")
                    , e = t ? "Search full catalog" : "Search current course";
                return n.html`<a href="#" @click=${() => {
                    window.dispatchEvent(new CustomEvent("fm-global-search", {
                        detail: {
                            eventName: "course-player",
                            course: t ? void 0 : {
                                id: window._bs.courseHash
                            }
                        }
                    }))
                }
                }>${e}</a>`
            }
        },
        8111: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.searchResultsList = void 0;
            const n = r(415)
                , i = r(405)
                , o = r(8694)
                , s = r(2457)
                , a = r(3719)
                , l = r(7701)
                , c = r(832)
                , u = r(2070)
                , d = r(2004)
                , h = r(9249)
                , f = r(7260);
            e.searchResultsList = function (t) {
                return n.html` <div class="results-list">
    ${(0,
                    o.map)(t, (t => n.html`
        ${(0,
                    i.choose)(t.type, [["courses", () => (0,
                    s.courses)(t.items, t.totalCount)], ["instructors", () => (0,
                    l.teachers)(t.items, t.totalCount)], ["lessons", () => (0,
                    a.lessons)(t.items, t.totalCount)], ["workshops", () => (0,
                    c.workshops)(t.items, t.totalCount)], ["blog", () => (0,
                    d.blog)(t.items, t.totalCount)], ["tags", () => (0,
                    u.tags)(t.items, t.totalCount)], ["paths", () => (0,
                    h.learningPaths)(t.items, t.totalCount)], ["user-notes", () => (0,
                    f.notes)(t.items, t.totalCount)]])}
      `))}
    <div id="results-padding"></div>
  </div>`
            }
        },
        3313: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.seeMoreResults = void 0;
            const n = r(415)
                , i = r(3096);
            e.seeMoreResults = function (t, e, r) {
                return n.html`
    ${(0,
                    i.when)(t > 4, (() => n.html`<a
        class="see-more"
        href="#"
        @click="${t => e(t)}"
        ><span>See all ${t} results</span> ▶</a
      >`))}
    ${(0,
                    i.when)(t > 0 && t <= 4 && r, (() => n.html`<a
        class="see-more"
        href="#"
        @click="${t => e(t)}"
        ><span>See more</span> ▶</a
      >`))}
  `
            }
        },
        2505: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.sortOptions = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(6120)
                , s = [{
                label: "Sort by Relevance",
                value: "relevance"
            }, {
                label: "Sort by Date",
                value: "date"
            }, {
                label: "Sort by Popularity",
                value: "popularity"
            }];

            function a(t) {
                window.dispatchEvent(new CustomEvent("fm-global-search", {
                    detail: {
                        eventName: "sort",
                        value: t.target.value
                    }
                }))
            }

            e.sortOptions = function () {
                if (new URLSearchParams(window.location.search).has("pid"))
                    return n.nothing;
                const t = (0,
                    o.getSearchParam)("so");
                return n.html`
    <select class="SortOptions" value="date" @change=${a}>
      ${(0,
                    i.map)(s, (({label: e, value: r}) => n.html`
          <option value="${r}" ?selected=${t === r}>
            ${e}
          </option>
        `))}
    </select>
  `
            }
        },
        2070: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.tags = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3313)
                , s = r(6120);
            e.tags = function (t, e) {
                return n.html`
    <section>
      <a id="search-tags"></a>
      <div class="category-header">
        <h3>Topics</h3>
        ${(0,
                    o.seeMoreResults)(e, (t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "see-more",
                                    type: "tags"
                                }
                            }))
                    }
                ))}
      </div>
      <ul>
        ${(0,
                    i.map)(t, (t => {
                        return n.html`<li>
            <a href="${t.data.url}">
              <img src="${e = t.data.slug,
                            (0,
                                s.getImagePath)(`topics/${e}.svg`)}" />
            </a>
            <div>
              <h4>
                <a href="${t.data.url}">${t.data.title}</a>
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>
            </div>
          </li> `;
                        var e
                    }
                ))}
      </ul>
    </section>
  `
            }
        },
        7701: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.teachers = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3313);
            e.teachers = function (t, e) {
                return n.html`
    <section>
      <a id="search-instructors"></a>
      <div class="category-header">
        <h3>Teachers</h3>
        ${(0,
                    o.seeMoreResults)(e, (() => {
                    }
                ))}
      </div>
      <ul>
        ${(0,
                    i.map)(t, (t => n.html`<li>
            <div>
              <h4>
                <a href="${t.data.url}">${t.data.title}</a>
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>
            </div>
          </li> `))}
      </ul>
    </section>
  `
            }
        },
        832: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.workshops = void 0;
            const n = r(415)
                , i = r(8694)
                , o = r(3313)
                , s = r(6120)
                , a = "/static-assets/workshops/default-thumbnail.png";
            e.workshops = function (t, e) {
                return n.html`
    <section>
      <a id="search-workshops"></a>
      <div class="category-header">
        <h3>Workshops</h3>
        ${(0,
                    o.seeMoreResults)(e, (t => {
                        t.preventDefault(),
                            window.dispatchEvent(new CustomEvent("fm-global-search", {
                                detail: {
                                    eventName: "see-more",
                                    type: "workshops"
                                }
                            }))
                    }
                ))}
      </div>
      <ul>
        ${(0,
                    i.map)(t, (t => n.html`<li>
            <a href="${t.data.url}">
              <img
                src="${t.data.iconURL}"
                onerror="if (this.src != '${a}') this.src = '${a}'"
              />
            </a>
            <div>
              <h4>
                <a href="${t.data.url}">${t.data.title}</a>
                <span> &bull; ${(0,
                    s.formatTimestamp)(t.data.timestamp)}</span
                >${function (t, e) {
                    const r = (0,
                        s.isWithinInterval)(t)
                        , i = (0,
                        s.isPast)(t);
                    let o = r ? "current" : "future";
                    "future" === o && i && (o = "past");
                    return "future" === o ? n.nothing : n.html` <span
    >&bull;
    <a href="${e}#player"
      >${"current" === o ? "Watch" : "Replay"}</a
    ></span
  >`
                }(t.data.timestamp, t.data.url)}
              </h4>
              <div class="subtitle">${t.data.subtitle}</div>
            </div>
          </li> `))}
      </ul>
    </section>
  `
            }
        },
        375: function (t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.GlobalSearchSecondary = void 0;
            const n = r(415)
                , i = r(405)
                , o = r(3096)
                , s = r(4162)
                , a = r(6508)
                , l = r(337)
                , c = r(1494)
                , u = r(8657)
                , d = r(2109)
                , h = r(1821)
                , f = r(6120)
                , p = r(8983)
                , v = r(3451)
                , m = r(2505)
                , g = r(763)
                , y = {
                courses: "Course",
                lessons: "Lesson",
                paths: "Learning Path",
                workshops: "Workshop",
                tags: "Topic",
                instructors: "Teacher",
                blog: "Blog"
            }
                , w = ["courses", "lessons"];
            e.GlobalSearchSecondary = class {
                constructor(t) {
                    this._store = new s.Store,
                        this._el = t,
                        this._store.addEventListener("save", (t => {
                                var e;
                                this._render(),
                                (null === (e = t.detail) || void 0 === e ? void 0 : e.fetched) && (0,
                                    f.keyboardNav)()
                            }
                        )),
                        window.addEventListener("resize", (() => {
                                this._lastItemScrollMargin()
                            }
                        ))
                }

                _secondaryView() {
                    var t, e;
                    const {data: r, fetchingPage: s} = this._store.getData()
                        , f = null == r ? void 0 : r.results[0]
                        , p = (null == f ? void 0 : f.type) || "";
                    return n.html`
      <div class="input-context">
        ${(0,
                        o.when)((null === (t = null == f ? void 0 : f.items) || void 0 === t ? void 0 : t.length) && w.includes(p), m.sortOptions)}
      </div>
      ${(0,
                        o.when)((null === (e = null == f ? void 0 : f.items) || void 0 === e ? void 0 : e.length) > 0, (() => n.html`
          ${(0,
                        i.choose)(null == f ? void 0 : f.type, [["courses", () => (0,
                        a.paginatedCourses)(f, s)], ["lessons", () => (0,
                        l.paginatedLessons)(f, s)], ["workshops", () => (0,
                        c.paginatedWorkshops)(f, s)], ["blog", () => (0,
                        u.paginatedBlog)(f, s)], ["tags", () => (0,
                        d.paginatedTags)(f, s)], ["paths", () => (0,
                        h.paginatedLearningPaths)(f, s)], ["user-notes", () => (0,
                        v.paginatedNotes)(f, s)]])}
        `), (() => n.html`
          ${(0,
                        g.noResults)()}
          <div id="results-padding"></div>
        `))}
    `
                }

                _template() {
                    const {initialLoad: t} = this._store.getData();
                    return n.html`
      ${this._contextLinks()}
      ${(0,
                        o.when)(t, this._loadingIndicator.bind(this), this._secondaryView.bind(this))}
    `
                }

                _contextLinks() {
                    var t, e, r, i, s;
                    const {data: a, searchTerm: l} = this._store.getData();
                    if (!l || !(null === (t = null == a ? void 0 : a.results) || void 0 === t ? void 0 : t[0]))
                        return n.nothing;
                    const c = (0,
                        f.getSearchParam)("c") || (null === (r = null === (e = null == a ? void 0 : a.results) || void 0 === e ? void 0 : e[0]) || void 0 === r ? void 0 : r.type);
                    return n.html`
      <div class="context-links">
        <a
          href="#"
          class="back"
          @click="${t => {
                        t.preventDefault(),
                            history.back()
                    }
                    }"
          >◀ Back</a
        >
        ${(0,
                        o.when)(null === (s = null === (i = a.results[0]) || void 0 === i ? void 0 : i.items) || void 0 === s ? void 0 : s.length, (() => n.html`<span
      class="${"courses" === c || "lessons" === c ? "with-sort" : ""}"
      >${y[c] || "Search"} results for '${l}'</span
    >`))}
      </div>
    `
                }

                _loadingIndicator() {
                    return n.html`<div class="global-search-loading"></div>`
                }

                _render() {
                    var t, e;
                    (0,
                        n.render)(this._template(), this._el),
                        this._setScrollTopPadding(),
                        this._lastItemScrollMargin();
                    const r = this._el.querySelectorAll(".Button.bookmark");
                    if ((0,
                        p.initBookmarkButtons)(r),
                        null === (t = history.state) || void 0 === t ? void 0 : t.scrollTo) {
                        const t = document.getElementById(null === (e = history.state) || void 0 === e ? void 0 : e.scrollTo);
                        null == t || t.scrollIntoView({
                            behavior: "smooth"
                        })
                    }
                    this._scrollObserver(),
                        (0,
                            f.addEllipsisEventListeners)(this._el, ".subtitle", (() => this._lastItemScrollMargin()))
                }

                clear() {
                    this._store._controller.abort(),
                        (0,
                            n.render)(n.nothing, this._el)
                }

                search(t) {
                    this._store.search(t || this.shouldRefetch())
                }

                shouldRefetch() {
                    var t;
                    const {data: e} = this._store.getData();
                    return !!(null === (t = null == e ? void 0 : e.results[0]) || void 0 === t ? void 0 : t.parent)
                }

                setData(t) {
                    this._store.setData(t)
                }

                _scrollObserver() {
                    const {fetchingPage: t} = this._store.getData()
                        , e = {
                        root: document.querySelector(".results-list"),
                        threshold: .2
                    }
                        , r = new IntersectionObserver((e => {
                            e.forEach((e => {
                                    e.isIntersecting && !t && this._store.nextPage()
                                }
                            ))
                        }
                    ), e)
                        , n = document.querySelectorAll(".results-list li")
                        , i = n[n.length - 1];
                    i && (r.observe(i),
                        this._lastItemScrollMargin())
                }

                _lastItemScrollMargin() {
                    const t = document.querySelector(".secondary-results-list")
                        , e = this._el.querySelector(".secondary-results-title");
                    if (t && e) {
                        const r = t.querySelector("section ul li:last-of-type")
                            , n = document.getElementById("results-padding");
                        r && n && (n.style.height = t.clientHeight - r.clientHeight - e.clientHeight - 26 + "px")
                    }
                }

                _setScrollTopPadding() {
                    const t = this._el.querySelector(".results-list.secondary-results-list")
                        , e = this._el.querySelector(".secondary-results-title");
                    t && e && (t.style.scrollPaddingTop = `${e.clientHeight + 10}px`)
                }
            }
        },
        4162: function (t, e, r) {
            "use strict";
            var n = this && this.__awaiter || function (t, e, r, n) {
                    return new (r || (r = Promise))((function (i, o) {
                            function s(t) {
                                try {
                                    l(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    l(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value,
                                    e instanceof r ? e : new r((function (t) {
                                            t(e)
                                        }
                                    ))).then(s, a)
                            }

                            l((n = n.apply(t, e || [])).next())
                        }
                    ))
                }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.Store = void 0;
            const i = r(4781)
                , o = r(6120)
                , s = "https://search.api.frontendmasters.com/site"
                , a = "https://search.api.frontendmasters.com/user";

            class l extends EventTarget {
                constructor() {
                    super(),
                        this._searchTerm = "",
                        this._context = "",
                        this._data = {
                            results: []
                        },
                        this._controller = new AbortController,
                        this._fetchingPage = !1,
                        this._initialLoad = !0
                }

                _fetch(t, e) {
                    return n(this, void 0, void 0, (function* () {
                            let r = []
                                , n = [];
                            t = t || new URL(window.location.href);
                            try {
                                r = (yield(0,
                                    o.retry)((() => (this._controller.abort(),
                                    this._controller = new AbortController,
                                    (0,
                                        i.jsonFetch)(t, Object.assign({
                                        signal: this._controller.signal,
                                        method: "GET"
                                    }, e || {})))), o.exponentialDelay)).parsedBody.results
                            } catch (t) {
                                "AbortError" === t.name && n.push(new Error(t))
                            }
                            return {
                                results: r,
                                errors: n
                            }
                        }
                    ))
                }

                _fetchData(t, e) {
                    return n(this, void 0, void 0, (function* () {
                            this._initialLoad = !0,
                                this._save();
                            const r = yield this._fetch(t, e)
                                , n = !!(r.errors && r.errors.length > 0);
                            this._data.results = r.results;
                            this._initialLoad = n && "" !== (0,
                                o.getSearchParam)("q") && window.navigator.onLine,
                                this._save({
                                    fetched: !0
                                })
                        }
                    ))
                }

                _save(t) {
                    return n(this, void 0, void 0, (function* () {
                            let e;
                            t && (e = {
                                detail: t
                            }),
                                this.dispatchEvent(new CustomEvent("save", e))
                        }
                    ))
                }

                getData() {
                    return {
                        searchTerm: (0,
                            o.getSearchParam)("q"),
                        data: this._data,
                        fetchingPage: this._fetchingPage,
                        initialLoad: this._initialLoad
                    }
                }

                setData(t) {
                    this._data = t,
                        this._save()
                }

                search(t) {
                    if (this._searchTerm === (0,
                        o.getSearchParam)("q") && this._context === (0,
                        o.getSearchParam)("c") && this._data.results.length && !t)
                        return void this._save();
                    this._searchTerm = (0,
                        o.getSearchParam)("q"),
                        this._context = (0,
                            o.getSearchParam)("c");
                    const e = {};
                    let r = c(s);
                    "user-notes" === this._context && (e.credentials = "include",
                        r = c(a)),
                        this._fetchData(r, e)
                }

                nextPage() {
                    return n(this, void 0, void 0, (function* () {
                            const t = (0,
                                o.getSearchParam)("c");
                            if (this._data.results[0].items.length >= this._data.results[0].totalCount)
                                return;
                            this._fetchingPage = !0,
                                this._save();
                            const e = {};
                            let r = c(s, {
                                f: (this._data.results[0].page * this._data.results[0].size).toString(),
                                s: this._data.results[0].size.toString()
                            });
                            "user-notes" === t && (e.credentials = "include",
                                r = c(a, {
                                    f: (this._data.results[0].page * this._data.results[0].size).toString(),
                                    s: this._data.results[0].size.toString()
                                }));
                            const n = yield this._fetch(r, e);
                            this._fetchingPage = !1,
                            n.results && (n.results[0].items = [...this._data.results[0].items, ...n.results[0].items],
                                this._data = n,
                                this._save())
                        }
                    ))
                }
            }

            function c(t, e) {
                const r = (null == e ? void 0 : e.f) || "0"
                    , n = (null == e ? void 0 : e.s) || "8"
                    , i = new URL(window.location.href);
                return i.searchParams.set("f", r),
                    i.searchParams.set("s", n),
                    new URL(`${t}?${i.searchParams}`)
            }

            e.Store = l
        },
        6120: function (t, e) {
            "use strict";
            var r = this && this.__awaiter || function (t, e, r, n) {
                    return new (r || (r = Promise))((function (i, o) {
                            function s(t) {
                                try {
                                    l(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    l(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value,
                                    e instanceof r ? e : new r((function (t) {
                                            t(e)
                                        }
                                    ))).then(s, a)
                            }

                            l((n = n.apply(t, e || [])).next())
                        }
                    ))
                }
            ;

            function n(t) {
                var e, r, n, i, o, s, a, l;
                const c = document.querySelector(".global-search");
                if (!c)
                    return;
                const u = c.querySelector(".results-list")
                    , d = null == u ? void 0 : u.querySelectorAll("li");
                if (d)
                    if ("ArrowDown" === t.code && window._bs.globalSearchKbNavIdx < d.length - 1) {
                        null === (e = document.querySelector("#global-search-container input")) || void 0 === e || e.focus();
                        null === (r = d[window._bs.globalSearchKbNavIdx]) || void 0 === r || r.removeAttribute("data-selected"),
                            window._bs.globalSearchKbNavIdx++,
                        null === (n = d[window._bs.globalSearchKbNavIdx]) || void 0 === n || n.setAttribute("data-selected", "selected"),
                        null === (i = d[window._bs.globalSearchKbNavIdx]) || void 0 === i || i.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        })
                    } else if ("ArrowUp" === t.code && window._bs.globalSearchKbNavIdx > 0)
                        null === (o = d[window._bs.globalSearchKbNavIdx]) || void 0 === o || o.removeAttribute("data-selected"),
                            window._bs.globalSearchKbNavIdx--,
                        null === (s = d[window._bs.globalSearchKbNavIdx]) || void 0 === s || s.setAttribute("data-selected", "selected"),
                        null === (a = d[window._bs.globalSearchKbNavIdx]) || void 0 === a || a.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    else if ("Enter" === t.code) {
                        const t = document.querySelector("[data-selected='selected']")
                            , e = null == t ? void 0 : t.querySelector("h4 a")
                            , r = null == e ? void 0 : e.href;
                        r && (window.location.href = r)
                    } else
                        "Tab" === t.code && (null === (l = d[window._bs.globalSearchKbNavIdx]) || void 0 === l || l.removeAttribute("data-selected"),
                            window._bs.globalSearchKbNavIdx = -1)
            }

            function i(t) {
                return t.offsetWidth < t.scrollWidth
            }

            function o(t) {
                return String(t).includes("AbortError") || !window.navigator.onLine
            }

            function s(t) {
                return new Promise(((e, r) => setTimeout(e, t)))
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
                e.delay = e.shouldThrowError = e.exponentialDelay = e.retry = e.isMac = e.isLinux = e.isWindows = e.getImagePath = e.usePushStateIfPlayer = e.addEllipsisEventListeners = e.isEllipsisActive = e.getSearchParam = e.isPast = e.isWithinInterval = e.formatTimestamp = e.keyboardNav = e.defaultSort = void 0,
                e.defaultSort = "relevance",
                e.keyboardNav = function () {
                    window._bs.globalSearchKbNavIdx = -1;
                    const t = document.querySelector("#global-search-container");
                    null == t || t.removeEventListener("keydown", n);
                    const e = document.querySelector(".results-list")
                        , r = null == e ? void 0 : e.querySelectorAll("li");
                    r && (r.forEach((t => {
                            t.removeAttribute("data-selected")
                        }
                    )),
                    null == t || t.addEventListener("keydown", n))
                }
                ,
                e.formatTimestamp = function (t) {
                    return new Date(1e3 * t).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })
                }
                ,
                e.isWithinInterval = function (t, e) {
                    const r = new Date
                        , n = new Date(1e3 * t);
                    let i = new Date(1e3 * t);
                    return e ? i = new Date(1e3 * e) : i.setHours(24, 59, 59),
                    n < r && r < i
                }
                ,
                e.isPast = function (t) {
                    const e = new Date
                        , r = new Date(1e3 * t);
                    return r.setHours(23, 59, 59),
                    e > r
                }
                ,
                e.getSearchParam = function (t) {
                    return new URL(window.location.href).searchParams.get(t) || ""
                }
                ,
                e.isEllipsisActive = i,
                e.addEllipsisEventListeners = function (t, e, r) {
                    const n = t.querySelectorAll(e);
                    Array.from(n).filter((t => i(t))).forEach((t => {
                            t.addEventListener("click", (e => {
                                    t.classList.toggle("expanded"),
                                    r && r()
                                }
                            ))
                        }
                    ))
                }
                ,
                e.usePushStateIfPlayer = function (t) {
                    if (!window._bs.isPlayer)
                        return;
                    const e = t.target.closest("a");
                    if (!e)
                        return;
                    if (!e.href.includes(`/${window._bs.courseSlug}/`))
                        return;
                    t.preventDefault();
                    const r = new URL(e.href)
                        , n = new URLSearchParams(window.location.search);
                    for (const [t, e] of n)
                        r.searchParams.set(t, e);
                    const i = r.pathname + r.search + r.hash;
                    window.history.pushState({}, "", i),
                        window.dispatchEvent(new CustomEvent("fmplayer-refresh-route", {
                            detail: {
                                route: i
                            }
                        }))
                }
                ,
                e.getImagePath = function (t) {
                    return `https://static.frontendmasters.com/assets/fm/med/${t}`
                }
                ,
                e.isWindows = function () {
                    return window.navigator.userAgent.toLowerCase().includes("windows")
                }
                ,
                e.isLinux = function () {
                    return window.navigator.userAgent.toLowerCase().includes("linux")
                }
                ,
                e.isMac = function () {
                    return window.navigator.userAgent.toLowerCase().includes("mac")
                }
                ,
                e.retry = function (t, e, n = 5, i = 1e3) {
                    return r(this, void 0, void 0, (function* () {
                            if (!window.navigator.onLine)
                                throw new Error("You are currently offline");
                            for (let r = 1; r <= n; r++)
                                try {
                                    return yield t()
                                } catch (t) {
                                    if (o(t) || r === n)
                                        throw t;
                                    yield s(e(r, i))
                                }
                        }
                    ))
                }
                ,
                e.exponentialDelay = function (t, e) {
                    return Math.pow(t, 2) * e
                }
                ,
                e.shouldThrowError = o,
                e.delay = s
        },
        3027: function (t, e, r) {
            "use strict";
            r.d(e, {
                OR: function () {
                    return o
                },
                _Y: function () {
                    return a
                },
                fk: function () {
                    return l
                },
                hl: function () {
                    return u
                },
                i9: function () {
                    return d
                },
                ws: function () {
                    return h
                }
            });
            var n = r(415);
            const {I: i} = n._$LH
                , o = t => void 0 === t.strings
                , s = () => document.createComment("")
                , a = (t, e, r) => {
                var n;
                const o = t._$AA.parentNode
                    , a = void 0 === e ? t._$AB : e._$AA;
                if (void 0 === r) {
                    const e = o.insertBefore(s(), a)
                        , n = o.insertBefore(s(), a);
                    r = new i(e, n, t, t.options)
                } else {
                    const e = r._$AB.nextSibling
                        , i = r._$AM
                        , s = i !== t;
                    if (s) {
                        let e;
                        null === (n = r._$AQ) || void 0 === n || n.call(r, t),
                            r._$AM = t,
                        void 0 !== r._$AP && (e = t._$AU) !== i._$AU && r._$AP(e)
                    }
                    if (e !== a || s) {
                        let t = r._$AA;
                        for (; t !== e;) {
                            const e = t.nextSibling;
                            o.insertBefore(t, a),
                                t = e
                        }
                    }
                }
                return r
            }
                , l = (t, e, r = t) => (t._$AI(e, r),
                t)
                , c = {}
                , u = (t, e = c) => t._$AH = e
                , d = t => t._$AH
                , h = t => {
                var e;
                null === (e = t._$AP) || void 0 === e || e.call(t, !1, !0);
                let r = t._$AA;
                const n = t._$AB.nextSibling;
                for (; r !== n;) {
                    const t = r.nextSibling;
                    r.remove(),
                        r = t
                }
            }
        },
        8773: function (t, e, r) {
            "use strict";
            r.d(e, {
                XM: function () {
                    return i
                },
                Xe: function () {
                    return o
                },
                pX: function () {
                    return n
                }
            });
            const n = {
                ATTRIBUTE: 1,
                CHILD: 2,
                PROPERTY: 3,
                BOOLEAN_ATTRIBUTE: 4,
                EVENT: 5,
                ELEMENT: 6
            }
                , i = t => (...e) => ({
                _$litDirective$: t,
                values: e
            });

            class o {
                constructor(t) {
                }

                get _$AU() {
                    return this._$AM._$AU
                }

                _$AT(t, e, r) {
                    this._$Ct = t,
                        this._$AM = e,
                        this._$Ci = r
                }

                _$AS(t, e) {
                    return this.update(t, e)
                }

                update(t, e) {
                    return this.render(...e)
                }
            }
        },
        405: function (t, e, r) {
            "use strict";
            r.r(e),
                r.d(e, {
                    choose: function () {
                        return n
                    }
                });
            const n = (t, e, r) => {
                for (const r of e)
                    if (r[0] === t)
                        return (0,
                            r[1])();
                return null == r ? void 0 : r()
            }
        },
        4080: function (t, e, r) {
            "use strict";
            r.r(e),
                r.d(e, {
                    classMap: function () {
                        return o
                    }
                });
            var n = r(415)
                , i = r(8773);
            const o = (0,
                i.XM)(class extends i.Xe {
                    constructor(t) {
                        var e;
                        if (super(t),
                        t.type !== i.pX.ATTRIBUTE || "class" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2)
                            throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                    }

                    render(t) {
                        return " " + Object.keys(t).filter((e => t[e])).join(" ") + " "
                    }

                    update(t, [e]) {
                        var r, i;
                        if (void 0 === this.it) {
                            this.it = new Set,
                            void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((t => "" !== t))));
                            for (const t in e)
                                e[t] && !(null === (r = this.nt) || void 0 === r ? void 0 : r.has(t)) && this.it.add(t);
                            return this.render(e)
                        }
                        const o = t.element.classList;
                        this.it.forEach((t => {
                                t in e || (o.remove(t),
                                    this.it.delete(t))
                            }
                        ));
                        for (const t in e) {
                            const r = !!e[t];
                            r === this.it.has(t) || (null === (i = this.nt) || void 0 === i ? void 0 : i.has(t)) || (r ? (o.add(t),
                                this.it.add(t)) : (o.remove(t),
                                this.it.delete(t)))
                        }
                        return n.noChange
                    }
                }
            )
        },
        8694: function (t, e, r) {
            "use strict";

            function* n(t, e) {
                if (void 0 !== t) {
                    let r = 0;
                    for (const n of t)
                        yield e(n, r++)
                }
            }

            r.r(e),
                r.d(e, {
                    map: function () {
                        return n
                    }
                })
        },
        8014: function (t, e, r) {
            "use strict";
            r.r(e),
                r.d(e, {
                    createRef: function () {
                        return f
                    },
                    ref: function () {
                        return m
                    }
                });
            var n = r(415)
                , i = r(3027)
                , o = r(8773);
            const s = (t, e) => {
                    var r, n;
                    const i = t._$AN;
                    if (void 0 === i)
                        return !1;
                    for (const t of i)
                        null === (n = (r = t)._$AO) || void 0 === n || n.call(r, e, !1),
                            s(t, e);
                    return !0
                }
                , a = t => {
                    let e, r;
                    do {
                        if (void 0 === (e = t._$AM))
                            break;
                        r = e._$AN,
                            r.delete(t),
                            t = e
                    } while (0 === (null == r ? void 0 : r.size))
                }
                , l = t => {
                    for (let e; e = t._$AM; t = e) {
                        let r = e._$AN;
                        if (void 0 === r)
                            e._$AN = r = new Set;
                        else if (r.has(t))
                            break;
                        r.add(t),
                            d(e)
                    }
                }
            ;

            function c(t) {
                void 0 !== this._$AN ? (a(this),
                    this._$AM = t,
                    l(this)) : this._$AM = t
            }

            function u(t, e = !1, r = 0) {
                const n = this._$AH
                    , i = this._$AN;
                if (void 0 !== i && 0 !== i.size)
                    if (e)
                        if (Array.isArray(n))
                            for (let t = r; t < n.length; t++)
                                s(n[t], !1),
                                    a(n[t]);
                        else
                            null != n && (s(n, !1),
                                a(n));
                    else
                        s(this, t)
            }

            const d = t => {
                    var e, r, n, i;
                    t.type == o.pX.CHILD && (null !== (e = (n = t)._$AP) && void 0 !== e || (n._$AP = u),
                    null !== (r = (i = t)._$AQ) && void 0 !== r || (i._$AQ = c))
                }
            ;

            class h extends o.Xe {
                constructor() {
                    super(...arguments),
                        this._$AN = void 0
                }

                _$AT(t, e, r) {
                    super._$AT(t, e, r),
                        l(this),
                        this.isConnected = t._$AU
                }

                _$AO(t, e = !0) {
                    var r, n;
                    t !== this.isConnected && (this.isConnected = t,
                        t ? null === (r = this.reconnected) || void 0 === r || r.call(this) : null === (n = this.disconnected) || void 0 === n || n.call(this)),
                    e && (s(this, t),
                        a(this))
                }

                setValue(t) {
                    if ((0,
                        i.OR)(this._$Ct))
                        this._$Ct._$AI(t, this);
                    else {
                        const e = [...this._$Ct._$AH];
                        e[this._$Ci] = t,
                            this._$Ct._$AI(e, this, 0)
                    }
                }

                disconnected() {
                }

                reconnected() {
                }
            }

            const f = () => new p;

            class p {
            }

            const v = new WeakMap
                , m = (0,
                o.XM)(class extends h {
                    render(t) {
                        return n.nothing
                    }

                    update(t, [e]) {
                        var r;
                        const i = e !== this.G;
                        return i && void 0 !== this.G && this.ot(void 0),
                        (i || this.rt !== this.lt) && (this.G = e,
                            this.dt = null === (r = t.options) || void 0 === r ? void 0 : r.host,
                            this.ot(this.lt = t.element)),
                            n.nothing
                    }

                    ot(t) {
                        var e;
                        if ("function" == typeof this.G) {
                            const r = null !== (e = this.dt) && void 0 !== e ? e : globalThis;
                            let n = v.get(r);
                            void 0 === n && (n = new WeakMap,
                                v.set(r, n)),
                            void 0 !== n.get(this.G) && this.G.call(this.dt, void 0),
                                n.set(this.G, t),
                            void 0 !== t && this.G.call(this.dt, t)
                        } else
                            this.G.value = t
                    }

                    get rt() {
                        var t, e, r;
                        return "function" == typeof this.G ? null === (e = v.get(null !== (t = this.dt) && void 0 !== t ? t : globalThis)) || void 0 === e ? void 0 : e.get(this.G) : null === (r = this.G) || void 0 === r ? void 0 : r.value
                    }

                    disconnected() {
                        this.rt === this.lt && this.ot(void 0)
                    }

                    reconnected() {
                        this.ot(this.lt)
                    }
                }
            )
        },
        7720: function (t, e, r) {
            "use strict";
            r.r(e),
                r.d(e, {
                    UnsafeHTMLDirective: function () {
                        return o
                    },
                    unsafeHTML: function () {
                        return s
                    }
                });
            var n = r(415)
                , i = r(8773);

            class o extends i.Xe {
                constructor(t) {
                    if (super(t),
                        this.et = n.nothing,
                    t.type !== i.pX.CHILD)
                        throw Error(this.constructor.directiveName + "() can only be used in child bindings")
                }

                render(t) {
                    if (t === n.nothing || null == t)
                        return this.ft = void 0,
                            this.et = t;
                    if (t === n.noChange)
                        return t;
                    if ("string" != typeof t)
                        throw Error(this.constructor.directiveName + "() called with a non-string value");
                    if (t === this.et)
                        return this.ft;
                    this.et = t;
                    const e = [t];
                    return e.raw = e,
                        this.ft = {
                            _$litType$: this.constructor.resultType,
                            strings: e,
                            values: []
                        }
                }
            }

            o.directiveName = "unsafeHTML",
                o.resultType = 1;
            const s = (0,
                i.XM)(o)
        },
        3096: function (t, e, r) {
            "use strict";

            function n(t, e, r) {
                return t ? e() : null == r ? void 0 : r()
            }

            r.r(e),
                r.d(e, {
                    when: function () {
                        return n
                    }
                })
        },
        415: function (t, e, r) {
            "use strict";
            var n;
            r.r(e),
                r.d(e, {
                    _$LH: function () {
                        return H
                    },
                    html: function () {
                        return $
                    },
                    noChange: function () {
                        return A
                    },
                    nothing: function () {
                        return L
                    },
                    render: function () {
                        return V
                    },
                    svg: function () {
                        return T
                    }
                });
            const i = window
                , o = i.trustedTypes
                , s = o ? o.createPolicy("lit-html", {
                createHTML: t => t
            }) : void 0
                , a = "$lit$"
                , l = `lit$ ${(Math.random() + "").slice(9)}$`
                , c = "?" + l
                , u = `<${c}>`
                , d = document
                , h = () => d.createComment("")
                , f = t => null === t || "object" != typeof t && "function" != typeof t
                , p = Array.isArray
                , v = t => p(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator])
                , m = "[ \t\n\f\r]"
                , g = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
                , y = /-->/g
                , w = />/g
                , _ = RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g")
                , b = /'/g
                , S = /"/g
                , E = /^(?:script|style|textarea|title)$/i
                , k = t => (e, ...r) => ({
                _$litType$: t,
                strings: e,
                values: r
            })
                , $ = k(1)
                , T = k(2)
                , A = Symbol.for("lit-noChange")
                , L = Symbol.for("lit-nothing")
                , C = new WeakMap
                , P = d.createTreeWalker(d, 129, null, !1);

            function O(t, e) {
                if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
                    throw Error("invalid template strings array");
                return void 0 !== s ? s.createHTML(e) : e
            }

            const x = (t, e) => {
                    const r = t.length - 1
                        , n = [];
                    let i, o = 2 === e ? "<svg>" : "", s = g;
                    for (let e = 0; e < r; e++) {
                        const r = t[e];
                        let c, d, h = -1, f = 0;
                        for (; f < r.length && (s.lastIndex = f,
                            d = s.exec(r),
                        null !== d);)
                            f = s.lastIndex,
                                s === g ? "!--" === d[1] ? s = y : void 0 !== d[1] ? s = w : void 0 !== d[2] ? (E.test(d[2]) && (i = RegExp("</" + d[2], "g")),
                                    s = _) : void 0 !== d[3] && (s = _) : s === _ ? ">" === d[0] ? (s = null != i ? i : g,
                                    h = -1) : void 0 === d[1] ? h = -2 : (h = s.lastIndex - d[2].length,
                                    c = d[1],
                                    s = void 0 === d[3] ? _ : '"' === d[3] ? S : b) : s === S || s === b ? s = _ : s === y || s === w ? s = g : (s = _,
                                    i = void 0);
                        const p = s === _ && t[e + 1].startsWith("/>") ? " " : "";
                        o += s === g ? r + u : h >= 0 ? (n.push(c),
                        r.slice(0, h) + a + r.slice(h) + l + p) : r + l + (-2 === h ? (n.push(void 0),
                            e) : p)
                    }
                    return [O(t, o + (t[r] || "<?>") + (2 === e ? "</svg>" : "")), n]
                }
            ;

            class R {
                constructor({strings: t, _$litType$: e}, r) {
                    let n;
                    this.parts = [];
                    let i = 0
                        , s = 0;
                    const u = t.length - 1
                        , d = this.parts
                        , [f, p] = x(t, e);
                    if (this.el = R.createElement(f, r),
                        P.currentNode = this.el.content,
                    2 === e) {
                        const t = this.el.content
                            , e = t.firstChild;
                        e.remove(),
                            t.append(...e.childNodes)
                    }
                    for (; null !== (n = P.nextNode()) && d.length < u;) {
                        if (1 === n.nodeType) {
                            if (n.hasAttributes()) {
                                const t = [];
                                for (const e of n.getAttributeNames())
                                    if (e.endsWith(a) || e.startsWith(l)) {
                                        const r = p[s++];
                                        if (t.push(e),
                                        void 0 !== r) {
                                            const t = n.getAttribute(r.toLowerCase() + a).split(l)
                                                , e = /([.?@])?(.*)/.exec(r);
                                            d.push({
                                                type: 1,
                                                index: i,
                                                name: e[2],
                                                strings: t,
                                                ctor: "." === e[1] ? U : "?" === e[1] ? B : "@" === e[1] ? q : M
                                            })
                                        } else
                                            d.push({
                                                type: 6,
                                                index: i
                                            })
                                    }
                                for (const e of t)
                                    n.removeAttribute(e)
                            }
                            if (E.test(n.tagName)) {
                                const t = n.textContent.split(l)
                                    , e = t.length - 1;
                                if (e > 0) {
                                    n.textContent = o ? o.emptyScript : "";
                                    for (let r = 0; r < e; r++)
                                        n.append(t[r], h()),
                                            P.nextNode(),
                                            d.push({
                                                type: 2,
                                                index: ++i
                                            });
                                    n.append(t[e], h())
                                }
                            }
                        } else if (8 === n.nodeType)
                            if (n.data === c)
                                d.push({
                                    type: 2,
                                    index: i
                                });
                            else {
                                let t = -1;
                                for (; -1 !== (t = n.data.indexOf(l, t + 1));)
                                    d.push({
                                        type: 7,
                                        index: i
                                    }),
                                        t += l.length - 1
                            }
                        i++
                    }
                }

                static createElement(t, e) {
                    const r = d.createElement("template");
                    return r.innerHTML = t,
                        r
                }
            }

            function I(t, e, r = t, n) {
                var i, o, s, a;
                if (e === A)
                    return e;
                let l = void 0 !== n ? null === (i = r._$Co) || void 0 === i ? void 0 : i[n] : r._$Cl;
                const c = f(e) ? void 0 : e._$litDirective$;
                return (null == l ? void 0 : l.constructor) !== c && (null === (o = null == l ? void 0 : l._$AO) || void 0 === o || o.call(l, !1),
                    void 0 === c ? l = void 0 : (l = new c(t),
                        l._$AT(t, r, n)),
                    void 0 !== n ? (null !== (s = (a = r)._$Co) && void 0 !== s ? s : a._$Co = [])[n] = l : r._$Cl = l),
                void 0 !== l && (e = I(t, l._$AS(t, e.values), l, n)),
                    e
            }

            class j {
                constructor(t, e) {
                    this._$AV = [],
                        this._$AN = void 0,
                        this._$AD = t,
                        this._$AM = e
                }

                get parentNode() {
                    return this._$AM.parentNode
                }

                get _$AU() {
                    return this._$AM._$AU
                }

                u(t) {
                    var e;
                    const {el: {content: r}, parts: n} = this._$AD
                        ,
                        i = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : d).importNode(r, !0);
                    P.currentNode = i;
                    let o = P.nextNode()
                        , s = 0
                        , a = 0
                        , l = n[0];
                    for (; void 0 !== l;) {
                        if (s === l.index) {
                            let e;
                            2 === l.type ? e = new N(o, o.nextSibling, this, t) : 1 === l.type ? e = new l.ctor(o, l.name, l.strings, this, t) : 6 === l.type && (e = new F(o, this, t)),
                                this._$AV.push(e),
                                l = n[++a]
                        }
                        s !== (null == l ? void 0 : l.index) && (o = P.nextNode(),
                            s++)
                    }
                    return P.currentNode = d,
                        i
                }

                v(t) {
                    let e = 0;
                    for (const r of this._$AV)
                        void 0 !== r && (void 0 !== r.strings ? (r._$AI(t, r, e),
                            e += r.strings.length - 2) : r._$AI(t[e])),
                            e++
                }
            }

            class N {
                constructor(t, e, r, n) {
                    var i;
                    this.type = 2,
                        this._$AH = L,
                        this._$AN = void 0,
                        this._$AA = t,
                        this._$AB = e,
                        this._$AM = r,
                        this.options = n,
                        this._$Cp = null === (i = null == n ? void 0 : n.isConnected) || void 0 === i || i
                }

                get _$AU() {
                    var t, e;
                    return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
                }

                get parentNode() {
                    let t = this._$AA.parentNode;
                    const e = this._$AM;
                    return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode),
                        t
                }

                get startNode() {
                    return this._$AA
                }

                get endNode() {
                    return this._$AB
                }

                _$AI(t, e = this) {
                    t = I(this, t, e),
                        f(t) ? t === L || null == t || "" === t ? (this._$AH !== L && this._$AR(),
                            this._$AH = L) : t !== this._$AH && t !== A && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t)
                }

                k(t) {
                    return this._$AA.parentNode.insertBefore(t, this._$AB)
                }

                $(t) {
                    this._$AH !== t && (this._$AR(),
                        this._$AH = this.k(t))
                }

                _(t) {
                    this._$AH !== L && f(this._$AH) ? this._$AA.nextSibling.data = t : this.$(d.createTextNode(t)),
                        this._$AH = t
                }

                g(t) {
                    var e;
                    const {values: r, _$litType$: n} = t
                        ,
                        i = "number" == typeof n ? this._$AC(t) : (void 0 === n.el && (n.el = R.createElement(O(n.h, n.h[0]), this.options)),
                            n);
                    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i)
                        this._$AH.v(r);
                    else {
                        const t = new j(i, this)
                            , e = t.u(this.options);
                        t.v(r),
                            this.$(e),
                            this._$AH = t
                    }
                }

                _$AC(t) {
                    let e = C.get(t.strings);
                    return void 0 === e && C.set(t.strings, e = new R(t)),
                        e
                }

                T(t) {
                    p(this._$AH) || (this._$AH = [],
                        this._$AR());
                    const e = this._$AH;
                    let r, n = 0;
                    for (const i of t)
                        n === e.length ? e.push(r = new N(this.k(h()), this.k(h()), this, this.options)) : r = e[n],
                            r._$AI(i),
                            n++;
                    n < e.length && (this._$AR(r && r._$AB.nextSibling, n),
                        e.length = n)
                }

                _$AR(t = this._$AA.nextSibling, e) {
                    var r;
                    for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, e); t && t !== this._$AB;) {
                        const e = t.nextSibling;
                        t.remove(),
                            t = e
                    }
                }

                setConnected(t) {
                    var e;
                    void 0 === this._$AM && (this._$Cp = t,
                    null === (e = this._$AP) || void 0 === e || e.call(this, t))
                }
            }

            class M {
                constructor(t, e, r, n, i) {
                    this.type = 1,
                        this._$AH = L,
                        this._$AN = void 0,
                        this.element = t,
                        this.name = e,
                        this._$AM = n,
                        this.options = i,
                        r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String),
                            this.strings = r) : this._$AH = L
                }

                get tagName() {
                    return this.element.tagName
                }

                get _$AU() {
                    return this._$AM._$AU
                }

                _$AI(t, e = this, r, n) {
                    const i = this.strings;
                    let o = !1;
                    if (void 0 === i)
                        t = I(this, t, e, 0),
                            o = !f(t) || t !== this._$AH && t !== A,
                        o && (this._$AH = t);
                    else {
                        const n = t;
                        let s, a;
                        for (t = i[0],
                                 s = 0; s < i.length - 1; s++)
                            a = I(this, n[r + s], e, s),
                            a === A && (a = this._$AH[s]),
                            o || (o = !f(a) || a !== this._$AH[s]),
                                a === L ? t = L : t !== L && (t += (null != a ? a : "") + i[s + 1]),
                                this._$AH[s] = a
                    }
                    o && !n && this.j(t)
                }

                j(t) {
                    t === L ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
                }
            }

            class U extends M {
                constructor() {
                    super(...arguments),
                        this.type = 3
                }

                j(t) {
                    this.element[this.name] = t === L ? void 0 : t
                }
            }

            const D = o ? o.emptyScript : "";

            class B extends M {
                constructor() {
                    super(...arguments),
                        this.type = 4
                }

                j(t) {
                    t && t !== L ? this.element.setAttribute(this.name, D) : this.element.removeAttribute(this.name)
                }
            }

            class q extends M {
                constructor(t, e, r, n, i) {
                    super(t, e, r, n, i),
                        this.type = 5
                }

                _$AI(t, e = this) {
                    var r;
                    if ((t = null !== (r = I(this, t, e, 0)) && void 0 !== r ? r : L) === A)
                        return;
                    const n = this._$AH
                        ,
                        i = t === L && n !== L || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive
                        , o = t !== L && (n === L || i);
                    i && this.element.removeEventListener(this.name, this, n),
                    o && this.element.addEventListener(this.name, this, t),
                        this._$AH = t
                }

                handleEvent(t) {
                    var e, r;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== r ? r : this.element, t) : this._$AH.handleEvent(t)
                }
            }

            class F {
                constructor(t, e, r) {
                    this.element = t,
                        this.type = 6,
                        this._$AN = void 0,
                        this._$AM = e,
                        this.options = r
                }

                get _$AU() {
                    return this._$AM._$AU
                }

                _$AI(t) {
                    I(this, t)
                }
            }

            const H = {
                O: a,
                P: l,
                A: c,
                C: 1,
                M: x,
                L: j,
                R: v,
                D: I,
                I: N,
                V: M,
                H: B,
                N: q,
                U: U,
                F: F
            }
                , z = i.litHtmlPolyfillSupport;
            null == z || z(R, N),
                (null !== (n = i.litHtmlVersions) && void 0 !== n ? n : i.litHtmlVersions = []).push("2.8.0");
            const V = (t, e, r) => {
                var n, i;
                const o = null !== (n = null == r ? void 0 : r.renderBefore) && void 0 !== n ? n : e;
                let s = o._$litPart$;
                if (void 0 === s) {
                    const t = null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i ? i : null;
                    o._$litPart$ = s = new N(e.insertBefore(h(), t), t, void 0, null != r ? r : {})
                }
                return s._$AI(t),
                    s
            }
        }
    }, cache = {};

    function require(id) {
        let module = cache[id]
        if (undefined !== module) {
            return module.exports
        }

        module = cache[id] = {
            id: id,
            loaded: false,
            exports: {}
        };
        mods[id].call(module.exports, module, module.exports, require)
        module.loaded = true
        return module.exports
    }

    require.m = mods
    require.O = function (e, r, n, o) {
        if (!r) {
            var s = Infinity;
            for (u = 0; u < t.length; u++) {
                r = t[u][0]
                n = t[u][1]
                o = t[u][2]
                for (var a = !0, l = 0; l < r.length; l++)
                    (!1 & o || s >= o) && Object.keys(require.O).every((function (t) {
                        return require.O[t](r[l])
                    })) ? r.splice(l--, 1) : (a = !1, o < s && (s = o));
                if (a) {
                    t.splice(u--, 1);
                    var c = n();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        o = o || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > o; u--) {
            t[u] = t[u - 1]
        }
        t[u] = [r, n, o]
    }
    require.F = {}
    require.E = function (t) {
        Object.keys(require.F).map(key => {
            require.F[key](t)
        })
    }
    require.n = function (module) {
        const exports = module && module.__esModule ? function () {
                return module.default
            }
            : function () {
                return module
            }

        require.d(exports, {
            a: exports
        })
        return exports
    }
    require.d = function (exports, modules) {
        for (let id in modules) {
            if (require.o(modules, id) && !require.o(exports, id)) {
                Object.defineProperty(exports, id, {
                    enumerable: true,
                    get: modules[id]
                })
            }
        }
    }
    require.f = {}
    require.e = function (t) {
        return Promise.all(Object.keys(require.f).reduce((function (arr, key) {
            require.f[key](t, arr)
            return arr
        }), []))
    }
    require.u = function (chunkId) {
        const chunkMap = {
            542: "fmplayer-promo",
            2759: "fmplayer-course",
            3351: "fmplayer-workshop",
            4709: "fm-classroom",
            7829: "fm-classroom-student",
            8419: "workshop-player-chat"
        }
        return (chunkMap[chunkId] || chunkId) + "." + require.h() + ".js"
    }
    require.h = function () {
        return "0c34bb1fb7c0a4f6bac7"
    }
    require.g = function () {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }()
    require.o = function (obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key)
    }
    require.l = function (src, r, n, o) {
        if (e[src]) {
            e[src].push(r)
        } else {
            let target, a;
            if (undefined !== n) {
                const scripts = document.getElementsByTagName("script")
                for (let i = 0; i < scripts.length; i++) {
                    const scriptElement = scripts[i];
                    if (scriptElement.getAttribute("src") === src) {
                        target = scriptElement
                        break
                    }
                }
            }
            if (!target) {
                a = true
                ;(target = document.createElement("script")).charset = "utf-8"
                target.timeout = 120
                require.nc && target.setAttribute("nonce", require.nc)
                target.src = src
            }
            e[src] = [r];
            const d = function (r, n) {
                target.onerror = target.onload = null
                clearTimeout(h)
                const fns = e[src]
                delete e[src]
                target.parentNode && target.parentNode.removeChild(target)
                fns && fns.forEach(fn => {
                    return fn(n)
                })
                if (r) {
                    return r(n)
                }
            }
            const h = setTimeout(d.bind(null, undefined, {
                type: "timeout",
                target: target
            }), 120_000)
            target.onerror = d.bind(null, target.onerror)
            target.onload = d.bind(null, target.onload)
            a && document.head.appendChild(target)
        }
    }
    require.r = function (exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        })
        Object.defineProperty(exports, "__esModule", {
            value: true
        })
    }
    require.nmd = function (t) {
        t.paths = []
        t.children || (t.children = [])
        return t
    }
    require.p = "https://static.frontendmasters.com/assets/fm/js/"
    ;(function () {
        var t = {
            1321: 0
        };
        require.f.j = function (e, r) {
            var n = require.o(t, e) ? t[e] : void 0;
            if (0 !== n)
                if (n)
                    r.push(n[2]);
                else {
                    var o = new Promise((function (r, i) {
                            n = t[e] = [r, i]
                        }
                    ));
                    r.push(n[2] = o);
                    var s = require.p + require.u(e)
                        , a = new Error;
                    require.l(s, (function (r) {
                            if (require.o(t, e) && (0 !== (n = t[e]) && (t[e] = void 0),
                                n)) {
                                var o = r && ("load" === r.type ? "missing" : r.type)
                                    , s = r && r.target && r.target.src;
                                a.message = "Loading chunk " + e + " failed.\n(" + o + ": " + s + ")",
                                    a.name = "ChunkLoadError",
                                    a.type = o,
                                    a.request = s,
                                    n[1](a)
                            }
                        }
                    ), "chunk-" + e, e)
                }
        }
        require.F.j = function (e) {
            if (!require.o(t, e) || void 0 === t[e]) {
                t[e] = null;
                var r = document.createElement("link");
                require.nc && r.setAttribute("nonce", require.nc),
                    r.rel = "prefetch",
                    r.as = "script",
                    r.href = require.p + require.u(e),
                    document.head.appendChild(r)
            }
        }
        require.O.j = function (e) {
            return 0 === t[e]
        }

        var e = function (e, r) {
                var n, o, s = r[0], a = r[1], l = r[2], c = 0;
                if (s.some((function (e) {
                        return 0 !== t[e]
                    }
                ))) {
                    for (n in a)
                        require.o(a, n) && (require.m[n] = a[n]);
                    if (l)
                        var u = l(require)
                }
                for (e && e(r); c < s.length; c++)
                    o = s[c],
                    require.o(t, o) && t[o] && t[o][0](),
                        t[o] = 0;
                return require.O(u)
            },
            r = self.webpackChunk = self.webpackChunk || [];
        r.forEach(e.bind(null, 0))
        r.push = e.bind(null, r.push.bind(r))
    })()
    var o = {};
    !function () {
        "use strict";
        var t = require(8050);
        if ("frontendmasters.com" === location.host) {
            t.RM.install({
                token: "b4dw8ec:b9ht8wy",
                ingestUrl: "https://pathway.frontendmasters.com/v1"
            })
            window._bs?.currentUser?.id && t.RM.identify(window._bs.currentUser.id, {
                name: window._bs.currentUser.name,
                email: window._bs.currentUser.email,
                isLoggedIn: window._bs.isLoggedIn,
                isPaid: window._bs.isPaid,
                isFree: window._bs.isFree
            })
        }
        require(2694);
        var e = require(2172);
        require.n(e)().polyfill();
        require(100)
        require(805)
        var r = require(2899),
            n = require.n(r);
        const o = window._bs.banners ? window._bs.banners.slice() : [],
            s = document.getElementById("before-layout");
        if (window._bs.alertBarData && window._bs.alertBarData.type) {
            const {type: t, canDismiss: e} = window._bs.alertBarData,
                r = {
                    key: t,
                    canClose: e,
                    priority: 10
                };
            "confirmEmail" === t
                ? (r.message = "Action required: To help protect your account, click here to confirm your email.",
                    r.ctaLink = "/my-account/settings/")
                : "banned" === t && (r.message = "Attention: You are BANNED!")
            o.push(r)
        }
        !function () {
            const t = c()
                , e = o.map((t => t.key))
                , r = t.filter((t => e.includes(t)));
            n().set("closedBanners", r)
        }();
        const a = c(),
            l = o.filter((t => {
                const e = !t.startTime || t.startTime <= Date.now()
                    , r = !t.endTime || Date.now() <= t.endTime
                    , n = !a.includes(t.key)
                    , i = !t.onlyShowWhenElementExists || document.querySelector(t.onlyShowWhenElementExists);
                return e && r && n && i
            }));

        function c() {
            return n().get("closedBanners", [])
        }

        l.sort(((t, e) => (e.priority || 0) - (t.priority - 0)))
        l.length && s && function t(e) {
            const r = e[0];
            let i = s.querySelector(".SiteBanner");
            if (!r) {
                return void (i && i.parentElement.removeChild(i))
            }

            i = i || document.createElement("div")
            i.className = `SiteBanner SiteBanner-${r.key}`
            i.style.backgroundColor = r.backgroundColor
            i.style.color = r.color
            if (e.length > 1) {
                const t = document.createElement("div");
                t.className = "number"
                t.textContent = e.length
                i.appendChild(t)
            }
            const o = document.createElement("div");

            o.className = "message"
            i.appendChild(o)
            if (r.ctaLink) {
                o.innerHTML = "<a target='_blank' rel='nofollow noopener'></a>";
                const t = o.firstElementChild;
                t.href = r.ctaLink
                t.textContent = r.message
            } else {
                o.textContent = r.message
            }
            if (r.canClose) {
                const o = document.createElement("a");
                o.href = "#"
                o.className = "close"
                o.textContent = "×"
                i.appendChild(o)
                o.addEventListener("click", (function i(o) {
                    o.target.removeEventListener("click", i)
                    o.preventDefault()
                    !function (t) {
                        const e = c();
                        e.push(t)
                        n().set("closedBanners", e)
                    }(r.key)
                    e.shift()
                    t(e)
                }))
            }
            s.appendChild(i)
            i.scrollIntoView({
                behavior: "smooth"
            })
        }(l);
        require(6774)
        require(9448)
    }()
    o = require.O(o)
}()
