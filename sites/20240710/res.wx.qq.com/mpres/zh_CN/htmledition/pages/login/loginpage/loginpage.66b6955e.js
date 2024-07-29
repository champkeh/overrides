(function (A) {
        function z(d) {
            var m = d[0];
            var v = d[1];
            var o = d[2];
            var u, b, L = 0, h = [];
            for (; L < m.length; L++) {
                b = m[L];
                if (Object.prototype.hasOwnProperty.call(C, b) && C[b]) {
                    h.push(C[b][0])
                }
                C[b] = 0
            }
            for (u in v) {
                if (Object.prototype.hasOwnProperty.call(v, u)) {
                    A[u] = v[u]
                }
            }
            if (S)
                S(d);
            while (h.length) {
                h.shift()()
            }
            F.push.apply(F, o || []);
            return k()
        }

        function k() {
            var d;
            for (var m = 0; m < F.length; m++) {
                var v = F[m];
                var o = true;
                for (var u = 1; u < v.length; u++) {
                    var b = v[u];
                    if (C[b] !== 0)
                        o = false
                }
                if (o) {
                    F.splice(m--, 1);
                    d = g(g.s = v[0])
                }
            }
            return d
        }

        var j = {};
        var C = {
            "login/loginpage/loginpage": 0
        };
        var F = [];

        function g(d) {
            if (j[d]) {
                return j[d].exports
            }
            var m = j[d] = {
                i: d,
                l: false,
                exports: {}
            };
            A[d].call(m.exports, m, m.exports, g);
            m.l = true;
            return m.exports
        }

        g.m = A
        g.c = j
        g.d = function (d, m, v) {
            if (!g.o(d, m)) {
                Object.defineProperty(d, m, {
                    enumerable: true,
                    get: v
                })
            }
        }
        g.r = function (d) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(d, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(d, "__esModule", {
                value: true
            })
        }
        g.t = function (d, m) {
            if (m & 1)
                d = g(d);
            if (m & 8)
                return d;
            if (m & 4 && typeof d === "object" && d && d.__esModule)
                return d;
            var v = Object.create(null);
            g.r(v);
            Object.defineProperty(v, "default", {
                enumerable: true,
                value: d
            });
            if (m & 2 && typeof d != "string")
                for (var o in d)
                    g.d(v, o, function (u) {
                        return d[u]
                    }
                        .bind(null, o));
            return v
        }
        g.n = function (d) {
            var m = d && d.__esModule ? function v() {
                        return d["default"]
                    }
                    : function v() {
                        return d
                    }
            ;
            g.d(m, "a", m);
            return m
        }
        g.o = function (d, m) {
            return Object.prototype.hasOwnProperty.call(d, m)
        }
        g.p = "/mpres/zh_CN/htmledition/";
        var _ = window["webpackJsonp"] = window["webpackJsonp"] || [];
        var D = _.push.bind(_);
        _.push = z;
        _ = _.slice();
        for (var R = 0; R < _.length; R++)
            z(_[R]);
        var S = D;
        F.push([39, "pages/modules~advanced/menusetting/menusetting~advanced/menusetting4Web1~album/edit/edit~album/list/list~b~modules", "pages/vendors~advanced/menusetting/menusetting~advanced/menusetting4Web1~album/edit/edit~album/list/list~b~vendors", "pages/threerd~advanced/menusetting/menusetting~advanced/menusetting4Web1~album/edit/edit~album/list/list~b~threerd"]);
        return k()
    }
)({
    "../../packages/mmbizweb-web2-common/biz_common/utils/comm_report.js": function (A, z, k) {
        var j;
        !(j = function () {
            var C = {
                web: {
                    report: "/cgi-bin/webreport"
                },
                wap: {
                    report: "/mp/wapcommreport"
                }
            };
            var F = function d(m, v) {
                v = JSON.parse(JSON.stringify(v));
                v.log_id = m;
                return JSON.stringify(v)
            };
            var g = function d(m, v, o) {
                return function (u) {
                    if (u && u.err_code !== 0) {
                        console.warn("[comm_report] report " + m + " fail: ", u.err_msg, v)
                    }
                    if (typeof o.success === "function") {
                        o.success(u)
                    }
                }
            };
            var _ = function d(m, v, o) {
                return function (u, b) {
                    console.error("[comm_report] report " + m + " error: ", b, v);
                    if (typeof o.error === "function") {
                        o.error(u, b)
                    }
                }
            };
            var D = false;
            var R = [];
            var S = {
                web: {
                    report: function d(m, v, o, u) {
                        u = u || {};
                        m.post({
                            url: C.web.report,
                            data: {
                                reportjson: F(v, o)
                            },
                            async: u.async,
                            success: g(v, o, u),
                            error: _(v, o, u)
                        })
                    },
                    leaveReport: function d(m, v, o) {
                        R.push([m, v, o]);
                        if (!D) {
                            D = true;
                            var u = false;
                            var b = function L() {
                                if (u)
                                    return;
                                u = true;
                                R.forEach(function (h) {
                                    S.web.report(h[0], h[1], h[2])
                                })
                            };
                            window.addEventListener("beforeunload", b, false);
                            window.addEventListener("unload", b, false)
                        }
                    }
                },
                wap: {
                    report: function d(m, v, o, u) {
                        u = u || {};
                        m({
                            type: "POST",
                            dataType: "json",
                            url: C.wap.report,
                            data: {
                                reportjson: F(v, o)
                            },
                            async: u.async,
                            success: g(v, o, u),
                            error: _(v, o, u)
                        })
                    }
                }
            };
            return {
                report: function d(m, v, o, u, b) {
                    S[m].report(v, o, u, b)
                },
                leaveReport: function d(m, v, o, u) {
                    S[m].leaveReport(v, o, u)
                },
                getUrl: function d(m, v) {
                    return C[m][v]
                },
                getData: function d(m, v, o) {
                    var u = F(m, v);
                    o && (u = encodeURIComponent(u));
                    return "reportjson=" + u
                }
            }
        }
            .call(z, k, z, A),
        j !== void 0 && (A.exports = j))
    },
    "../../packages/mmbizweb-web2-common/modules/utils/cgi.js": function (A, z, k) {
        var j = k("../../packages/web-webapp-common/js/ajax.js");
        var C = k("../../packages/mmbizweb-web2-common/modules/utils/str_util.js");
        var F = k("../../packages/mmbizweb-web2-common/modules/utils/object.js");
        var g = k("../../packages/mmbizweb-web2-common/modules/utils/url.js");
        var _ = window.wx.commonData ? window.wx.commonData.data : window.wx.data;
        var D = {
            token: _.t,
            lang: _.lang,
            f: "json",
            ajax: "1"
        };
        var R = {
            0: "\u606D\u559C\u4F60\uFF0C\u64CD\u4F5C\u6210\u529F\uFF01",
            "-1": "\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u5C1D\u8BD5\u3002",
            200002: "\u53C2\u6570\u9519\u8BEF\uFF0C\u8BF7\u6838\u5BF9\u53C2\u6570\u540E\u91CD\u8BD5\u3002",
            200003: "\u767B\u5F55\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002",
            200004: "\u8BF7\u6C42\u9875\u9762\u7684\u57DF\u540D\u6CA1\u6709\u6388\u6743\u3002",
            200005: "\u8BF7\u6C42\u65B9\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u786E\u8BA4\u8BF7\u6C42\u65B9\u5F0F\u540E\u91CD\u8BD5\u3002",
            200006: "\u8868\u5355\u540D\u79F0\u9A8C\u8BC1\u51FA\u9519\uFF0C\u8BF7\u6838\u5BF9\u8868\u5355\u540D\u79F0\u540E\u91CD\u8BD5\u3002",
            200007: "\u767B\u5F55\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002",
            200040: "\u767B\u5F55\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002"
        };
        var S = function o(u) {
            var b = u || {};
            var L = Object.keys(D);
            for (var h = 0; h < L.length; h++) {
                b[L[h]] = D[L[h]]
            }
            return b
        };
        var d = function o(u, b) {
            var L = location.href.indexOf("/cgi-bin/home") !== -1 && (b.url.indexOf("/misc/safeassistant") !== -1 || b.url.indexOf("/safe/safeuuid") !== -1);
            var h = 11;
            switch (u) {
                case "timeout":
                    h = 7;
                    break;
                case "error":
                    h = 8;
                    break;
                case "notmodified":
                    h = 9;
                    break;
                case "parsererror":
                    h = 10;
                    break;
                default:
                    h = 11;
                    break
            }
            var y = ["lang", "random", "f", "ajax", "token"];
            for (var E = 0; E < y.length; ++E) {
                var I = y[E];
                if (b.data && b.data[I]) {
                    delete b.data[I]
                }
            }
            h += L ? 100 : 0;
            var P = "";
            if (/selfcheck/.test(b.url)) {
                P = b.data && b.data.AppMsgId
            } else {
                P = JSON.stringify(b.data).substr(0, 50)
            }
            j({
                url: "/misc/jslog?1=1",
                data: {
                    content: C.format("[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}]", {
                        uin: _.uin,
                        useragent: window.navigator.userAgent,
                        page: location.href,
                        url: b.url,
                        param: P,
                        info: u
                    }),
                    id: h,
                    level: "error"
                },
                type: "POST"
            });
            j({
                url: "/misc/jslog?1=1",
                data: {
                    content: C.format("[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}]", {
                        uin: _.uin,
                        useragent: window.navigator.userAgent,
                        page: location.href,
                        url: b.url,
                        param: P,
                        info: u
                    }),
                    id: 6 + (L ? 100 : 0),
                    level: "error"
                },
                type: "POST"
            });
            if (u === "timeout" && !b.notShowTimeoutErr) {
                Vue.prototype.$tipsErr("\u4F60\u7684\u7F51\u7EDC\u73AF\u5883\u8F83\u5DEE\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")
            }
        };
        var m = function o(u, b) {
            var L = u;
            if (typeof L !== "function") {
                L = function h() {
                }
            }
            u = function h(y) {
                try {
                    var E = L.toString();
                    var I = {
                        uin: _.uin || "0",
                        id: "64430",
                        key: "0",
                        url: "",
                        location: encodeURIComponent(window.location.href) || "",
                        ret: y && y.base_resp ? y.base_resp.ret || "undefined" : "undefined"
                    };
                    if (y && y.base_resp && y.base_resp.ret !== 0) {
                        if (E.indexOf("handleRet") < 0) {
                            if (E.indexOf(y.base_resp.ret) < 0) {
                                new Image().src = C.format("https://badjs.weixinbridge.com/badjs?level=4&uin={uin}&id={id}&msg={msg}&from={url}", {
                                    uin: I.uin,
                                    url: I.url || I.location,
                                    id: 138,
                                    msg: encodeURIComponent("ret=" + I.ret + "|idkey=" + I.id + ":" + I.key)
                                })
                            }
                        }
                        if (typeof window.WX_BJ_REPORT !== "undefined" && window.WX_BJ_REPORT.BadJs) {
                            var P = "";
                            if (b.indexOf("?") !== -1) {
                                P = b.substr(0, b.indexOf("?"));
                                var B = g.parseQuery(b);
                                if (B.action) {
                                    P += "?action=".concat(B.action)
                                }
                            } else {
                                P = b
                            }
                            window.WX_BJ_REPORT.BadJs.report(P, "ret=".concat(y.base_resp.ret), {
                                mid: window.PAGE_MID,
                                view: "web_retcode"
                            })
                        }
                    }
                } catch (l) {
                    console.error(l)
                }
                L(y)
            }
            ;
            return u
        };
        var v = {};
        v.updateCommonPostData = function () {
            D = {
                token: _.data.t,
                lang: _.lang,
                f: "json",
                ajax: "1"
            }
        }
        ;
        v.get = function (o, u, b, L) {
            if (o.usePb) {
                o.type = "POST";
                if (o.data) {
                    o.data = {
                        data: JSON.stringify(o.data)
                    }
                }
            }
            o.data = S(o.data);
            o.success = o.success || u;
            o.complete = o.complete || L;
            o.timeout = o.timeout || 5e3;
            b = o.error || b;
            o.error = function (h, y) {
                d(y, o);
                b && b(h, y)
            }
            ;
            o.dataType = "json";
            o.success = m(o.success, o.url);
            j(o)
        }
        ;
        v.post = function (o, u, b, L) {
            o.type = "POST";
            if (o.usePb) {
                o.type = "POST";
                if (o.data) {
                    o.data = {
                        data: JSON.stringify(o.data)
                    }
                }
            }
            o.data = S(o.data);
            o.timeout = o.timeout || 5e3;
            o.success = o.success || u;
            o.complete = o.complete || L;
            b = o.error || b;
            o.error = function (h, y) {
                d(y, o);
                b && b(h, y)
            }
            ;
            o.dataType = "json";
            o.success = m(o.success, o.url);
            j(o)
        }
        ;
        v.handleRet = function (o, u) {
            var b = {
                msg: u.msg || "\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u5C1D\u8BD5"
            };
            if (o && o.base_resp && o.base_resp.ret) {
                u = F.clone(u, true);
                u = Object.assign({
                    uin: _.uin || "0",
                    id: "64430",
                    key: "0",
                    url: "",
                    location: encodeURIComponent(window.location.href) || "",
                    ret: o.base_resp.ret,
                    showMsg: true,
                    msg: "\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u5C1D\u8BD5"
                }, u);
                u.url = encodeURIComponent(u.url);
                var L = R[u.ret];
                if (!L) {
                    new Image().src = C.format("/mp/unknow_ret_report?uin={uin}&id={id}&key={key}&url={url}&location={location}&ret={ret}&method=get&action=report", u);
                    u.showMsg && Vue.prototype.$tipsErr(u.msg);
                    new Image().src = C.format("/mp/unknow_ret_report?uin={uin}&id=64430&key=126&url={url}&location={location}&ret={ret}&method=get&action=report", u);
                    new Image().src = C.format("https://badjs.weixinbridge.com/badjs?level=4&uin={uin}&id={id}&msg={msg}&from={url}", {
                        uin: u.uin,
                        url: u.url || u.location,
                        id: 138,
                        msg: encodeURIComponent("ret=" + u.ret + "|idkey=" + u.id + ":" + u.key)
                    })
                } else {
                    u.showMsg && Vue.prototype.$tipsErr(L);
                    b.msg = L
                }
            }
            return b
        }
        ;
        A.exports = v
    },
    "../../packages/mmbizweb-web2-common/modules/utils/contributions.js": function (A, z, k) {
        var j = k("../../packages/mmbizweb-web2-common/modules/utils/contributors.js");
        var C = j.sort(function (g, _) {
            return g.localeCompare(_)
        }).join(", ");
        if (true) {
            if (window.PAGE_MID && window.PAGE_MID.indexOf("loginpage") < 0 && !window.thanksToContributor) {
                var F = window["console"];
                F["info"]("%c \u611F\u8C22\u5927\u5BB6\u4E3A\u5FAE\u4FE1\u516C\u4F17\u53F7\u505A\u51FA\u7684\u5353\u8D8A\u8D21\u732E", "padding: 10px 0px; font-family: helvetica; font-size: 24px; line-height: 12px; color: #20b659;");
                F["info"]("%c Contributors: ".concat(C), "font-family: consolas; font-size: 12px;");
                F["info"]("%c \u613F\u5927\u5BB6\u51FA\u8D70\u534A\u751F\uFF0C\u5F52\u6765\u4ECD\u662F\u5C11\u5E74", "font-family: helvetica; font-size: 12px; text-align: right;");
                window.thanksToContributor = true
            }
        }
    },
    "../../packages/mmbizweb-web2-common/modules/utils/contributors.js": function (A, z) {
        var k = ["dididong", "yinshen", "semineli", "fangzhan", "starszhou", "hongfenglin", "coenwang", "tommyjqliu", "wowowang", "joyduan", "conanjiang", "haocongxu"];
        A.exports = k
    },
    "../../packages/mmbizweb-web2-common/modules/utils/object.js": function (A, z) {
        var k = "[object Boolean]";
        var j = "[object Number]";
        var C = "[object String]";
        var F = "[object Array]";
        var g = "[object Object]";
        var _ = "[object Date]";
        var D = "[object RegExp]";
        var R = Object.prototype.toString;
        var S = Object.prototype.hasOwnProperty;

        function d(f, T) {
            return S.call(f, T)
        }

        function m(f, T) {
            for (var O in T) {
                if (d(T, O)) {
                    f[O] = T[O]
                }
            }
            return f
        }

        function v(f) {
            return !!(this && f.nodeType === 1)
        }

        function o(f) {
            return R.call(f) === g
        }

        function u(f) {
            return R.call(f) === F
        }

        function b(f) {
            return typeof f === "function"
        }

        function L(f) {
            return R.call(f) === C
        }

        function h(f) {
            return R.call(f) === k
        }

        function y(f) {
            return R.call(f) === j
        }

        function E(f) {
            return R.call(f) === _
        }

        function I(f) {
            return typeof f === "undefined"
        }

        function P(f) {
            return R.call(f) === D
        }

        var B = null;
        if (typeof Number.isFinite === "function") {
            B = Number.isFinite.bind(Number)
        } else if (typeof window.isFinite === "function") {
            B = window.isFinite
        } else {
            B = function f() {
                return true
            }
        }

        function l(f, T) {
            var O;
            if (T === true) {
                if (u(f)) {
                    O = [];
                    for (var $ in f) {
                        if (d(f, $)) {
                            if (o(f[$])) {
                                O.push(l(f[$], true))
                            } else {
                                O.push(f[$])
                            }
                        }
                    }
                } else {
                    O = {};
                    for (var s in f) {
                        if (d(f, s)) {
                            if (o(f[s])) {
                                O[s] = l(f[s], true)
                            } else {
                                O[s] = f[s]
                            }
                        }
                    }
                }
                return O
            }
            return m({}, f)
        }

        function t(f, T) {
            var O = [];
            for (var $ in f) {
                if (d(f, $)) {
                    if (T === true) {
                        O.push([encodeURIComponent($), "=", encodeURIComponent(f[$]), "&"].join(""))
                    } else {
                        O.push([$, "=", f[$], "&"].join(""))
                    }
                }
            }
            return O.join("").slice(0, -1)
        }

        function i(f, T) {
            if (typeof T === "undefined") {
                return
            }
            for (var O in f) {
                if (d(f, O)) {
                    if (T(f[O], O) === false) {
                        break
                    }
                }
            }
        }

        var r = null;
        if (typeof Object.assign === "function") {
            r = Object.assign
        } else {
            r = function f() {
                if ((arguments.length <= 0 ? void 0 : arguments[0]) == null) {
                    throw new TypeError("Cannot convert undefined or null to object")
                }
                var T = Object(arguments.length <= 0 ? void 0 : arguments[0]);
                for (var O = 1; O < arguments.length; O++) {
                    var $ = O < 0 || arguments.length <= O ? void 0 : arguments[O];
                    if ($ != null) {
                        for (var s in $) {
                            if (d($, s)) {
                                T[s] = $[s]
                            }
                        }
                    }
                }
                return T
            }
        }
        A.exports = {
            assign: r,
            extend: m,
            clone: l,
            isObject: o,
            isElement: v,
            isArray: u,
            isFunction: b,
            isString: L,
            isBoolean: h,
            isNumber: y,
            isDate: E,
            isUndefined: I,
            isRepExp: P,
            isFinite: B,
            param: t,
            each: i,
            hasOwn: d
        }
    },
    "../../packages/mmbizweb-web2-common/modules/utils/str_util.js": function (A, z) {
        var k = function L(h, y) {
            return h.replace(/\{(\w+)\}/g, function (E, I) {
                return y[I] !== void 0 ? y[I] : E
            })
        };
        var j = function L(h) {
            return h.replace(/[^\x00-\xff]/g, "**").length
        };
        var C = function L(h, y, E) {
            var I = y || 30;
            var P = Object.isUndefined(E) ? "..." : E;
            return h.length > I ? h.slice(0, I - P.length) + P : String(h)
        };
        var F = function L(h, y) {
            if (y === true) {
                return h.replace(/^\s+/, "")
            }
            if (y === false) {
                return h.replace(/\s+$/, "")
            }
            return h.replace(/^\s+/, "").replace(/\s+$/, "")
        };
        var g = function L(h, y) {
            var E = ["&", "&amp;", "<", "&lt;", ">", "&gt;", " ", "&nbsp;", '"', "&quot;", "'", "&#39;"];
            var I = ["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&"];
            var P;
            if (y === false) {
                P = I
            } else {
                P = E
            }
            var B = h;
            for (var l = 0; l < P.length; l += 2) {
                B = B.replace(new RegExp(P[l], "g"), P[1 + l])
            }
            return B
        };
        var _ = function L(h, y) {
            return h.indexOf(y) > -1
        };
        var D = function L(h, y) {
            return h.lastIndexOf(y, 0) === 0
        };
        var R = function L(h, y) {
            var E = h.length - y.length;
            return E >= 0 && h.indexOf(y, E) === E
        };
        var S = function L(h) {
            return h === ""
        };
        var d = function L(h) {
            return h.replace(/<\/?[^>]*\/?>/g, "")
        };
        var m = function L(h) {
            return /^\s*$/.test(h)
        };
        var v = function L() {
            var h;
            for (var y = arguments.length, E = new Array(y), I = 0; I < y; I++) {
                E[I] = arguments[I]
            }
            var P = E[0] || "";
            var B;
            var l;
            var t = E.length - 1;
            if (t < 1) {
                return P
            }
            h = 1;
            while (h < t + 1) {
                P = P.replace(/%s/, "{#" + h + "#}");
                h++
            }
            P.replace("%s", "");
            h = 1;
            while (true) {
                B = E[h];
                if (B === void 0) {
                    break
                }
                l = new RegExp("{#" + h + "#}", "g");
                P = P.replace(l, B);
                h++
            }
            return P
        };
        var o = function L(h) {
            var y = 0;
            var E;
            var I = 0;
            var P = true;
            while (P) {
                E = h.charAt(y++);
                if (!E) {
                    break
                }
                I += E.charCodeAt().toString(16).length / 2
            }
            return I
        };
        var u = function L(h, y, E) {
            if (typeof h.split === "function") {
                var I = h.split(E || "&");
                var P = {};
                I.each(function (B) {
                    var l = B.split("=");
                    if (l.length === 2 && l[0] && l[1]) {
                        if (y === true) {
                            P[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
                        } else {
                            P[l[0]] = l[1]
                        }
                    }
                });
                return P
            }
            return null
        };
        var b = function L(h) {
            var y = {
                "lt": "<",
                "gt": ">",
                "nbsp": " ",
                "amp": "&",
                "quot": '"'
            };
            return h.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (E, I) {
                return y[I]
            })
        };
        A.exports = {
            escape2Html: b,
            format: k,
            sprintf: v,
            text: d,
            len: j,
            truncate: C,
            trim: String.prototype.trim || F,
            html: g,
            has: _,
            startsWith: D,
            endsWith: R,
            param: u,
            empty: S,
            blank: m,
            bytes: o
        }
    },
    "../../packages/mmbizweb-web2-common/modules/utils/url.js": function (A, z, k) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        z.addBaseParm = C;
        z.fullUrl = j;
        z.parseQuery = F;

        function j(g) {
            if (!g) {
                return ""
            }
            if (g.indexOf("javasript:") === 0) {
                return g
            }
            var _ = wx.commonData.data.param;
            return g.indexOf("?") !== -1 ? g + _ : g + "?1=1" + _
        }

        function C(g) {
            if (!g) {
                return ""
            }
            if (g.indexOf("javasript:") === 0) {
                return g
            }
            var _ = window.wx.commonData.data;
            var D = g.charAt(g.length - 1);
            if (D !== "?") {
                if (g.indexOf("?") === -1)
                    g += "?";
                else if (D !== "&")
                    g += "&"
            }
            return g + "token=" + _.t + "&lang=" + _.lang
        }

        function F(g) {
            var _ = {};
            var D = /[?&]([^=&#]+)=([^&#]*)/g;
            var R = g.match(D);
            if (R) {
                for (var S in R) {
                    if (Object.prototype.hasOwnProperty.call(R, S)) {
                        var d = R[S].split("=");
                        var m = d[0].substr(1);
                        var v = d[1];
                        _[m] ? _[m] = [].concat(_[m], v) : _[m] = v
                    }
                }
            }
            return _
        }
    },
    "../../packages/mmbizweb-web2-common/utils/comm_report.js": function (A, z, k) {
        function j(l) {
            "@babel/helpers - typeof";
            return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                j(l)
        }

        function C(l, t) {
            var i = "undefined" != typeof Symbol && l[Symbol.iterator] || l["@@iterator"];
            if (!i) {
                if (Array.isArray(l) || (i = F(l)) || t && l && "number" == typeof l.length) {
                    i && (l = i);
                    var r = 0
                        , f = function s() {
                    };
                    return {
                        s: f,
                        n: function s() {
                            return r >= l.length ? {
                                done: true
                            } : {
                                done: false,
                                value: l[r++]
                            }
                        },
                        e: function s(c) {
                            throw c
                        },
                        f
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var T, O = true, $ = false;
            return {
                s: function s() {
                    i = i.call(l)
                },
                n: function s() {
                    var c = i.next();
                    return O = c.done,
                        c
                },
                e: function s(c) {
                    $ = true,
                        T = c
                },
                f: function s() {
                    try {
                        O || null == i.return || i.return()
                    } finally {
                        if ($)
                            throw T
                    }
                }
            }
        }

        function F(l, t) {
            if (l) {
                if ("string" == typeof l)
                    return g(l, t);
                var i = {}.toString.call(l).slice(8, -1);
                return "Object" === i && l.constructor && (i = l.constructor.name),
                    "Map" === i || "Set" === i ? Array.from(l) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(l, t) : void 0
            }
        }

        function g(l, t) {
            (null == t || t > l.length) && (t = l.length);
            for (var i = 0, r = Array(t); i < t; i++)
                r[i] = l[i];
            return r
        }

        function _(l, t) {
            var i = Object.keys(l);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(l);
                t && (r = r.filter(function (f) {
                    return Object.getOwnPropertyDescriptor(l, f).enumerable
                })),
                    i.push.apply(i, r)
            }
            return i
        }

        function D(l) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _(Object(i), true).forEach(function (r) {
                    R(l, r, i[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : _(Object(i)).forEach(function (r) {
                    Object.defineProperty(l, r, Object.getOwnPropertyDescriptor(i, r))
                })
            }
            return l
        }

        function R(l, t, i) {
            return (t = v(t)) in l ? Object.defineProperty(l, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
            }) : l[t] = i,
                l
        }

        function S(l, t) {
            if (!(l instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }

        function d(l, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || false,
                    r.configurable = true,
                "value" in r && (r.writable = true),
                    Object.defineProperty(l, v(r.key), r)
            }
        }

        function m(l, t, i) {
            return t && d(l.prototype, t),
            i && d(l, i),
                Object.defineProperty(l, "prototype", {
                    writable: false
                }),
                l
        }

        function v(l) {
            var t = o(l, "string");
            return "symbol" == j(t) ? t : t + ""
        }

        function o(l, t) {
            if ("object" != j(l) || !l)
                return l;
            var i = l[Symbol.toPrimitive];
            if (void 0 !== i) {
                var r = i.call(l, t || "default");
                if ("object" != j(r))
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(l)
        }

        var u = k("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");
        var b = k("../../packages/mmbizweb-web2-common/biz_common/utils/comm_report.js");
        var L = {
            report: function l(t, i, r) {
                b.report("web", u, t, i, r)
            },
            leaveReport: function l(t, i) {
                b.leaveReport("web", u, t, i)
            }
        };
        var h = "badjs";
        var y = "mmdata";
        var E = "data-mp-report-";

        function I(l) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
            if (l === h) {
                if (!(window.WX_BJ_REPORT && window.WX_BJ_REPORT.BadJs && typeof window.WX_BJ_REPORT.BadJs.report === "function")) {
                    console.error("cant find badjs on window");
                    return
                }
                if (!t.name || !t.key || !t.mid || !t.view) {
                    console.warn("invalide report params");
                    return
                }
                window.WX_BJ_REPORT.BadJs.report(t.name, t.key, t.info ? {
                    mid: t.mid,
                    view: t.view,
                    info: t.info
                } : {
                    mid: t.mid,
                    view: t.view
                })
            } else if (l === y) {
                if (r) {
                    L.leaveReport(i, t)
                } else {
                    L.report(i, t)
                }
            }
        }

        var P = function () {
            "use strict";

            function l(t) {
                var i = t.containerSelector
                    , r = t.commonData
                    , f = t.eventType
                    , T = f === void 0 ? "click" : f
                    , O = t.reportType
                    , $ = O === void 0 ? h : O
                    , s = t.logId
                    , c = s === void 0 ? 0 : s
                    , p = t.nameProp
                    , n = p === void 0 ? "" : p
                    , e = t.reportLeave
                    , a = e === void 0 ? false : e;
                S(this, l);
                this.containerEl = document.querySelector(i);
                this.commonData = r;
                this.eventType = T;
                this.logId = c;
                this.reportType = $;
                this.nameProp = n;
                this.reportLeave = a;
                this.observeMap = new Map;
                this._init()
            }

            return m(l, [{
                key: "_init",
                value: function t() {
                    var i = this;
                    if (!this.containerEl) {
                        console.error("cant find respoding container");
                        return
                    }
                    this.containerEl.addEventListener(this.eventType, function (r) {
                        var f = r.target;
                        var T = i.observeMap.get(f);
                        while (!T && f.parentNode) {
                            f = f.parentNode;
                            T = i.observeMap.get(f)
                        }
                        if (!T)
                            return;
                        var O = i.reportType === h ? D(D({}, T), {}, {
                            mid: i.commonData.mid,
                            view: i.commonData.view
                        }) : D(D({}, T), i.commonData);
                        I(i.reportType, O, i.logId, i.reportLeave)
                    })
                }
            }, {
                key: "observe",
                value: function t(i, r) {
                    if (!this.containerEl) {
                        console.error("cant find respoding container");
                        return
                    }
                    var f = this.containerEl.querySelectorAll(i);
                    if (!f || f.length === 0)
                        return;
                    if (typeof r === "undefined") {
                        var T = C(f), O;
                        try {
                            for (T.s(); !(O = T.n()).done;) {
                                var $ = O.value;
                                var s = {};
                                var c = $.dataset;
                                for (var p in c) {
                                    if (p.indexOf(E) === 0) {
                                        var n = p.slice(E.length);
                                        s[n] = c[p]
                                    }
                                }
                                this.observeMap.set($, s)
                            }
                        } catch (M) {
                            T.e(M)
                        } finally {
                            T.f()
                        }
                    } else if (typeof r === "string") {
                        var e = C(f), a;
                        try {
                            for (e.s(); !(a = e.n()).done;) {
                                var w = a.value;
                                var x = r === i ? w : w.querySelector(r);
                                var q = x && x.innerText && x.innerText.trim();
                                if (!q)
                                    continue;
                                this.observeMap.set(w, this.reportType === h ? {
                                    name: q,
                                    key: this.eventType
                                } : R({}, this.nameProp, q))
                            }
                        } catch (M) {
                            e.e(M)
                        } finally {
                            e.f()
                        }
                    } else if (Array.isArray(r)) {
                        var U = r;
                        if (U.length !== f.length)
                            return;
                        for (var Q = 0; Q < U.length; Q++) {
                            this.observeMap.set(f[Q], U[Q])
                        }
                    } else {
                        console.error("second argument invalide")
                    }
                }
            }])
        }();

        function B() {
            var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var t = l.reportType
                , i = t === void 0 ? h : t
                , r = l.commonData
                , f = l.logId
                , T = l.reportLeave;
            var O = {
                mpreport: {
                    bind: function $(s, c) {
                        var p = c.value
                            , n = c.arg;
                        s.addEventListener(n, function () {
                            I(i, D(D({}, r), p), f, T)
                        })
                    }
                }
            };
            return O
        }

        A.exports = {
            Reporter: P,
            getReportDirectives: B
        }
    },
    "../../packages/web-webapp-common/js/ajax.js": function (A, z) {
        function k(F) {
            "@babel/helpers - typeof";
            return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (g) {
                    return typeof g
                }
                : function (g) {
                    return g && "function" == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g
                }
                ,
                k(F)
        }

        var j = function F() {
        };
        var C = function F(g) {
            var _ = (g.type || "GET").toUpperCase();
            var D = g.url;
            var R = typeof g.async === "undefined" ? true : g.async;
            var S = new XMLHttpRequest;
            S.donotHock = !!g.donotHock;
            S.withCredentials = true;
            if (g.responseType) {
                S.responseType = g.responseType
            }
            var d = null;
            var m = null;
            var v = j;
            var o = j;
            var u = j;
            if (g.success) {
                v = function h(y) {
                    try {
                        g.success(y)
                    } catch (E) {
                        throw E
                    }
                }
            }
            if (g.error) {
                o = function h(y, E) {
                    try {
                        g.error(y, E)
                    } catch (I) {
                        throw I
                    }
                }
            }
            if (g.complete) {
                u = function h() {
                    try {
                        g.complete()
                    } catch (y) {
                        throw y
                    }
                }
            }
            if (k(g.data) === "object") {
                var b = g.data;
                m = [];
                for (var L in b) {
                    if (Object.prototype.hasOwnProperty.call(b, L)) {
                        m.push(L + "=" + encodeURIComponent(b[L]))
                    }
                }
                m = m.join("&")
            } else {
                m = typeof g.data === "string" ? g.data : null
            }
            if (_ === "GET" && m) {
                D += (D.indexOf("?") >= 0 ? "&" : "?") + m
            }
            S.open(_, D, R);
            S.onerror = function () {
                o(S, "error");
                if (d) {
                    clearTimeout(d)
                }
                u()
            }
            ;
            S.onreadystatechange = function () {
                if (S.readyState === 3) {
                    if (g.received) {
                        g.received(S)
                    }
                }
                if (S.readyState === 4) {
                    S.onreadystatechange = null;
                    var h = S.status;
                    if (h >= 200 && h < 400) {
                        try {
                            var y;
                            if (g.responseType === "blob") {
                                y = S.response
                            } else {
                                var E = S.responseText;
                                y = E;
                                if (g.dataType === "json") {
                                    try {
                                        y = JSON.parse(y)
                                    } catch (I) {
                                        o(S, "parsererror");
                                        return
                                    }
                                }
                            }
                            v(y)
                        } catch (I) {
                            throw I
                        }
                    } else {
                        o(S, "error")
                    }
                    if (d) {
                        clearTimeout(d)
                    }
                    u();
                    u = j
                }
            }
            ;
            if (_ === "POST") {
                S.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
            }
            !g.crossDomain && S.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (typeof g.timeout !== "undefined") {
                d = setTimeout(function () {
                    S.abort("timeout");
                    u();
                    u = j
                }, g.timeout)
            }
            try {
                S.send(m)
            } catch (h) {
                o(S, "timeout")
            }
        };
        A.exports = C
    },
    "./src/3rd/cookie/cookie.js": function (A, z, k) {
        var j;
        /*!
     * jQuery Cookie Plugin v1.3.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
        ;!(j = function (C, F, g) {
            var _ = /\+/g;

            function D(o) {
                return o
            }

            function R(o) {
                var u;
                try {
                    u = S(decodeURIComponent(o.replace(_, " ")))
                } catch (b) {
                    u = ""
                }
                return u
            }

            function S(o) {
                if (o.indexOf('"') === 0) {
                    o = o.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
                }
                return o
            }

            function d(o) {
                return v.json ? JSON.parse(o) : o
            }

            var m = {};
            var v = m.cookie = function (o, u, b) {
                    if (u !== void 0) {
                        b = function (r) {
                            for (var f = 1, T = arguments.length; f < T; f++) {
                                for (var O in arguments[f]) {
                                    r[O] = arguments[f][O]
                                }
                            }
                            return r
                        }({}, v.defaults, b);
                        if (u === null) {
                            b.expires = -1
                        }
                        if (typeof b.expires === "number") {
                            var L = b.expires
                                , h = b.expires = new Date;
                            h.setDate(h.getDate() + L)
                        }
                        u = v.json ? JSON.stringify(u) : String(u);
                        return document.cookie = [encodeURIComponent(o), "=", v.raw ? u : encodeURIComponent(u), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path : "", b.domain ? "; domain=" + b.domain : "", b.secure ? "; secure" : ""].join("")
                    }
                    var y = v.raw ? D : R;
                    var E = document.cookie.split("; ");
                    var I = o ? null : {};
                    for (var P = 0, B = E.length; P < B; P++) {
                        var l = E[P].split("=");
                        var t = y(l.shift());
                        var i = y(l.join("="));
                        if (o && o === t) {
                            I = d(i);
                            break
                        }
                        if (!o) {
                            I[t] = d(i)
                        }
                    }
                    return I
                }
            ;
            v.defaults = {};
            m.remove = function (o, u) {
                if (this.cookie(o) !== null) {
                    this.cookie(o, null, u);
                    return true
                }
                return false
            }
            ;
            g.exports = m
        }
            .call(z, k, z, A),
        j !== void 0 && (A.exports = j))
    },
    "./src/3rd/md5/md5.js": function (A, z, k) {
        "use strict";
        var j;
        ;!(j = function (C, F, g) {
            function _(t, i) {
                var r = (t & 65535) + (i & 65535)
                    , f = (t >> 16) + (i >> 16) + (r >> 16);
                return f << 16 | r & 65535
            }

            function D(t, i) {
                return t << i | t >>> 32 - i
            }

            function R(t, i, r, f, T, O) {
                return _(D(_(_(i, t), _(f, O)), T), r)
            }

            function S(t, i, r, f, T, O, $) {
                return R(i & r | ~i & f, t, i, T, O, $)
            }

            function d(t, i, r, f, T, O, $) {
                return R(i & f | r & ~f, t, i, T, O, $)
            }

            function m(t, i, r, f, T, O, $) {
                return R(i ^ r ^ f, t, i, T, O, $)
            }

            function v(t, i, r, f, T, O, $) {
                return R(r ^ (i | ~f), t, i, T, O, $)
            }

            function o(t, i) {
                t[i >> 5] |= 128 << i % 32;
                t[(i + 64 >>> 9 << 4) + 14] = i;
                var r, f, T, O, $, s = 1732584193, c = -271733879, p = -1732584194, n = 271733878;
                for (r = 0; r < t.length; r += 16) {
                    f = s;
                    T = c;
                    O = p;
                    $ = n;
                    s = S(s, c, p, n, t[r], 7, -680876936);
                    n = S(n, s, c, p, t[r + 1], 12, -389564586);
                    p = S(p, n, s, c, t[r + 2], 17, 606105819);
                    c = S(c, p, n, s, t[r + 3], 22, -1044525330);
                    s = S(s, c, p, n, t[r + 4], 7, -176418897);
                    n = S(n, s, c, p, t[r + 5], 12, 1200080426);
                    p = S(p, n, s, c, t[r + 6], 17, -1473231341);
                    c = S(c, p, n, s, t[r + 7], 22, -45705983);
                    s = S(s, c, p, n, t[r + 8], 7, 1770035416);
                    n = S(n, s, c, p, t[r + 9], 12, -1958414417);
                    p = S(p, n, s, c, t[r + 10], 17, -42063);
                    c = S(c, p, n, s, t[r + 11], 22, -1990404162);
                    s = S(s, c, p, n, t[r + 12], 7, 1804603682);
                    n = S(n, s, c, p, t[r + 13], 12, -40341101);
                    p = S(p, n, s, c, t[r + 14], 17, -1502002290);
                    c = S(c, p, n, s, t[r + 15], 22, 1236535329);
                    s = d(s, c, p, n, t[r + 1], 5, -165796510);
                    n = d(n, s, c, p, t[r + 6], 9, -1069501632);
                    p = d(p, n, s, c, t[r + 11], 14, 643717713);
                    c = d(c, p, n, s, t[r], 20, -373897302);
                    s = d(s, c, p, n, t[r + 5], 5, -701558691);
                    n = d(n, s, c, p, t[r + 10], 9, 38016083);
                    p = d(p, n, s, c, t[r + 15], 14, -660478335);
                    c = d(c, p, n, s, t[r + 4], 20, -405537848);
                    s = d(s, c, p, n, t[r + 9], 5, 568446438);
                    n = d(n, s, c, p, t[r + 14], 9, -1019803690);
                    p = d(p, n, s, c, t[r + 3], 14, -187363961);
                    c = d(c, p, n, s, t[r + 8], 20, 1163531501);
                    s = d(s, c, p, n, t[r + 13], 5, -1444681467);
                    n = d(n, s, c, p, t[r + 2], 9, -51403784);
                    p = d(p, n, s, c, t[r + 7], 14, 1735328473);
                    c = d(c, p, n, s, t[r + 12], 20, -1926607734);
                    s = m(s, c, p, n, t[r + 5], 4, -378558);
                    n = m(n, s, c, p, t[r + 8], 11, -2022574463);
                    p = m(p, n, s, c, t[r + 11], 16, 1839030562);
                    c = m(c, p, n, s, t[r + 14], 23, -35309556);
                    s = m(s, c, p, n, t[r + 1], 4, -1530992060);
                    n = m(n, s, c, p, t[r + 4], 11, 1272893353);
                    p = m(p, n, s, c, t[r + 7], 16, -155497632);
                    c = m(c, p, n, s, t[r + 10], 23, -1094730640);
                    s = m(s, c, p, n, t[r + 13], 4, 681279174);
                    n = m(n, s, c, p, t[r], 11, -358537222);
                    p = m(p, n, s, c, t[r + 3], 16, -722521979);
                    c = m(c, p, n, s, t[r + 6], 23, 76029189);
                    s = m(s, c, p, n, t[r + 9], 4, -640364487);
                    n = m(n, s, c, p, t[r + 12], 11, -421815835);
                    p = m(p, n, s, c, t[r + 15], 16, 530742520);
                    c = m(c, p, n, s, t[r + 2], 23, -995338651);
                    s = v(s, c, p, n, t[r], 6, -198630844);
                    n = v(n, s, c, p, t[r + 7], 10, 1126891415);
                    p = v(p, n, s, c, t[r + 14], 15, -1416354905);
                    c = v(c, p, n, s, t[r + 5], 21, -57434055);
                    s = v(s, c, p, n, t[r + 12], 6, 1700485571);
                    n = v(n, s, c, p, t[r + 3], 10, -1894986606);
                    p = v(p, n, s, c, t[r + 10], 15, -1051523);
                    c = v(c, p, n, s, t[r + 1], 21, -2054922799);
                    s = v(s, c, p, n, t[r + 8], 6, 1873313359);
                    n = v(n, s, c, p, t[r + 15], 10, -30611744);
                    p = v(p, n, s, c, t[r + 6], 15, -1560198380);
                    c = v(c, p, n, s, t[r + 13], 21, 1309151649);
                    s = v(s, c, p, n, t[r + 4], 6, -145523070);
                    n = v(n, s, c, p, t[r + 11], 10, -1120210379);
                    p = v(p, n, s, c, t[r + 2], 15, 718787259);
                    c = v(c, p, n, s, t[r + 9], 21, -343485551);
                    s = _(s, f);
                    c = _(c, T);
                    p = _(p, O);
                    n = _(n, $)
                }
                return [s, c, p, n]
            }

            function u(t) {
                var i, r = "";
                for (i = 0; i < t.length * 32; i += 8) {
                    r += String.fromCharCode(t[i >> 5] >>> i % 32 & 255)
                }
                return r
            }

            function b(t) {
                var i, r = [];
                r[(t.length >> 2) - 1] = void 0;
                for (i = 0; i < r.length; i += 1) {
                    r[i] = 0
                }
                for (i = 0; i < t.length * 8; i += 8) {
                    r[i >> 5] |= (t.charCodeAt(i / 8) & 255) << i % 32
                }
                return r
            }

            function L(t) {
                return u(o(b(t), t.length * 8))
            }

            function h(t, i) {
                var r, f = b(t), T = [], O = [], $;
                T[15] = O[15] = void 0;
                if (f.length > 16) {
                    f = o(f, t.length * 8)
                }
                for (r = 0; r < 16; r += 1) {
                    T[r] = f[r] ^ 909522486;
                    O[r] = f[r] ^ 1549556828
                }
                $ = o(T.concat(b(i)), 512 + i.length * 8);
                return u(o(O.concat($), 512 + 128))
            }

            function y(t) {
                var i = "0123456789abcdef", r = "", f, T;
                for (T = 0; T < t.length; T += 1) {
                    f = t.charCodeAt(T);
                    r += i.charAt(f >>> 4 & 15) + i.charAt(f & 15)
                }
                return r
            }

            function E(t) {
                return unescape(encodeURIComponent(t))
            }

            function I(t) {
                return L(E(t))
            }

            function P(t) {
                return y(I(t))
            }

            function B(t, i) {
                return h(E(t), E(i))
            }

            function l(t, i) {
                return y(B(t, i))
            }

            g.exports = function (t, i, r) {
                if (!i) {
                    if (!r) {
                        return P(t)
                    } else {
                        return I(t)
                    }
                }
                if (!r) {
                    return l(i, t)
                } else {
                    return B(i, t)
                }
            }
        }
            .call(z, k, z, A),
        j !== void 0 && (A.exports = j))
    },
    "./src/pages/login/loginpage/loginpage.js": function (A, z, k) {
        function j(n) {
            "@babel/helpers - typeof";
            return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                j(n)
        }

        function C(n, e) {
            var a = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var w = Object.getOwnPropertySymbols(n);
                e && (w = w.filter(function (x) {
                    return Object.getOwnPropertyDescriptor(n, x).enumerable
                })),
                    a.push.apply(a, w)
            }
            return a
        }

        function F(n) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? C(Object(a), true).forEach(function (w) {
                    g(n, w, a[w])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : C(Object(a)).forEach(function (w) {
                    Object.defineProperty(n, w, Object.getOwnPropertyDescriptor(a, w))
                })
            }
            return n
        }

        function g(n, e, a) {
            return (e = _(e)) in n ? Object.defineProperty(n, e, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
            }) : n[e] = a,
                n
        }

        function _(n) {
            var e = D(n, "string");
            return "symbol" == j(e) ? e : e + ""
        }

        function D(n, e) {
            if ("object" != j(n) || !n)
                return n;
            var a = n[Symbol.toPrimitive];
            if (void 0 !== a) {
                var w = a.call(n, e || "default");
                if ("object" != j(w))
                    return w;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(n)
        }

        var R = k("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");
        var S = k("./src/pages/modules/utils/get_cgi_data.js");
        var d = k("./src/pages/modules/utils/get_custom_service.js");
        var m = k("./src/pages/modules/utils/string.js").htmlDecode;
        var v = k("./src/3rd/md5/md5.js");
        var _cookie = k("./src/3rd/cookie/cookie.js");
        var u = k("../../node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js");
        var b = k("./src/3rd/utils/comm_report.js");
        var L = k("./src/3rd/editor/common/monitor.js");
        var h = k("./src/pages/modules/faq/faq_hover/faq_hover.js");
        var y = k("./src/3rd/wxgspeedsdk/wxgspeedsdk.js");
        var E = k("./src/pages/modules/utils/object.js")
            , I = E.assign;
        var P = k("./src/pages/modules/utils/report.js")
            , B = P.idkey;
        var l = k("./src/pages/modules/base/base.js");
        k("./src/pages/login/loginpage/style/loginpage.less");
        k("./src/pages/login/loginpage/style/loginpage.en_US.less");
        sessionStorage.removeItem("menu_info_key");
        var t = k("./src/pages/modules/safe_input/safe_input.js");
        var i = S("pages/login/loginpage");
        var _loginMode = "loginMode";
        var f = 0;
        var T = 0;
        if (navigator && !navigator.cookieEnabled) {
            f = 1
        }
        if (window.localStorage && !window.localStorage.getItem(_loginMode)) {
            T = 1
        }
        var O = 0;

        function $() {
            var n = document.createElement("script");
            n.onload = function () {
                O = 1;
                document.body.removeChild(n)
            }
            ;
            n.src = "chrome-extension://kjmjndilfndibkgdfkekhnbnmiifcpjk/resource/jsencrypt.min.js";
            document.body.appendChild(n)
        }

        try {
            setTimeout(function () {
                $()
            }, 200)
        } catch (n) {
        }
        var s = function n(e) {
            if (e <= 3) {
                return 1500
            } else if (e > 3 && e <= 30) {
                return 1000
            } else if (e > 30 && e <= 50) {
                return 1500
            }
            return 2000
        };
        var app = null;
        var store = new u.Store({
            modules: {
                main: {
                    state: {
                        step: 0,
                        mode: window.wx.cgiData.defaultScanlogin ? 1 : (localStorage.getItem(_loginMode) || 1) * 1,
                        qrcodeSrc: "",
                        scanLoginType: 0,
                        bizList: [],
                        wxList: [],
                        activeBizIndex: 0,
                        activeWxIndex: -1,
                        state: "state_waiting",
                        rejectWxList: [],
                        currentLang: i.currentLang === "" ? "zh_CN" : i.currentLang,
                        err: "",
                        verifyImg: "",
                        isNeedVerify: false,
                        account: "",
                        rememberCheck: false,
                        pwd: "",
                        verify: ""
                    },
                    mutations: {
                        _sucGetIngorePassList: function n(state, payload) {
                            state.bizList = payload.ignor_passwd_list;
                            state.bizList.forEach(function (w, x) {
                                state.rejectWxList.push([]);
                                state.bizList[x].userlist.forEach(function () {
                                    state.rejectWxList[x].push(false)
                                })
                            });
                            state.step = 1;
                            app.report19015({
                                optype: 1,
                                page_state: 2
                            })
                        },
                        _setLanguage: function n(state, payload) {
                            function w() {
                                var W = window.location.search.substring(1).split("&");
                                var X = {};
                                var H;
                                var N;
                                for (N in W) {
                                    if (W[N] === "")
                                        continue;
                                    if (!W[N].split)
                                        continue;
                                    H = W[N].split("=");
                                    X[decodeURIComponent(H[0])] = decodeURIComponent(H[1])
                                }
                                return X
                            }

                            var host = window.location.host;
                            var protocol = window.location.protocol;
                            var pathname = window.location.pathname;
                            var hash = window.location.hash;
                            var query = w();
                            var G = [];
                            query.lang = payload.currentLang;
                            for (var J in query) {
                                if (!query[J]) {
                                    continue
                                }
                                G.push([encodeURIComponent(J), encodeURIComponent(query[J])].join("="))
                            }
                            var url = protocol + "//" + host + pathname + "?" + G.join("&") + hash;
                            _cookie.cookie("mm_lang", payload.currentLang, {
                                expires: 30,
                                path: "/"
                            });
                            state.currentLang = payload.currentLang;
                            window.openUrl(url)
                        },
                        _loginCallback: function n(state, payload) {
                            var w = payload.json;
                            var x = "";
                            switch (w.base_resp.ret) {
                                case 0:
                                    localStorage.setItem(_loginMode, state.mode);
                                    _cookie.cookie("noticeLoginFlag", 1, {
                                        expires: 30
                                    });
                                    if (state.rememberCheck) {
                                        _cookie.cookie("remember_acct", state.account, {
                                            expires: 30
                                        })
                                    } else {
                                        _cookie.remove("remember_acct")
                                    }
                                    if (/\/cgi-bin\/home\?/.test(w.redirect_url)) {
                                        if (window.location.href.indexOf("toUrl=ad") > -1) {
                                            var q = w.redirect_url.match(/token=(\d*)/);
                                            if (q && q[1]) {
                                                w.redirect_url = "/promotion/advertiser_index?lang=zh_CN&token=" + q[1] + "&aSource=" + (window.aSource || "")
                                            }
                                        }
                                    } else if (/\/cgi-bin\/readtemplate\?t=user\/validate_wx_tmpl/.test(w.redirect_url)) {
                                        if (window.location.href.indexOf("toUrl=ad") > -1) {
                                            w.redirect_url += "&toUrl=ad&aSource=" + (window.aSource || "")
                                        }
                                    }
                                    window.openUrl(w.redirect_url);
                                    break;
                                case -1:
                                    x = "\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5\u3002";
                                    break;
                                case 200002:
                                    x = "\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF\u3002";
                                    break;
                                case 200007:
                                    x = "\u60A8\u76EE\u524D\u5904\u4E8E\u8BBF\u95EE\u53D7\u9650\u72B6\u6001\u3002";
                                    break;
                                case 200008:
                                    state.isNeedVerify = true;
                                    x = "\u8BF7\u8F93\u5165\u56FE\u4E2D\u7684\u9A8C\u8BC1\u7801\u3002";
                                    break;
                                case 200021:
                                    x = "\u4E0D\u5B58\u5728\u8BE5\u8D26\u6237\u3002";
                                    break;
                                case 200023:
                                    x = "\u60A8\u8F93\u5165\u7684\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u3002";
                                    break;
                                case 200025:
                                    x = '\u6D77\u5916\u8D26\u53F7\u8BF7\u5728\u516C\u4F17\u5E73\u53F0\u6D77\u5916\u7248\u767B\u5F55\uFF0C<a href="http://admin.wechat.com/">\u70B9\u51FB\u767B\u5F55</a>';
                                    break;
                                case 200026:
                                    x = "\u8BE5\u516C\u4F17\u4F1A\u8BAE\u53F7\u5DF2\u7ECF\u8FC7\u671F\uFF0C\u65E0\u6CD5\u518D\u767B\u5F55\u4F7F\u7528\u3002";
                                    break;
                                case 200027:
                                    x = "\u60A8\u8F93\u5165\u7684\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u3002";
                                    break;
                                case 200121:
                                    x = '\u8BE5\u8D26\u53F7\u5C5E\u4E8E\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\uFF0C\u8BF7<a href="https://open.weixin.qq.com/">\u70B9\u51FB\u6B64\u5904</a>\u767B\u5F55';
                                    break;
                                case 200122:
                                    x = '\u8FD9\u662F\u4F01\u4E1A\u53F7\u8D26\u53F7\uFF0C\u73B0\u5DF2\u5347\u7EA7\u4E3A\u4F01\u4E1A\u5FAE\u4FE1\uFF0C\u8BF7<a href="https://work.weixin.qq.com/wework_admin/loginpage_wx?from=mp">\u70B9\u51FB\u6B64\u5904</a>\u767B\u5F55';
                                    break;
                                case 250002:
                                    x = "\u8BE5\u8D26\u53F7\u5DF2\u88AB\u6CE8\u9500\u3002";
                                    break;
                                case 250003:
                                    x = '\u7531\u4E8E\u957F\u65F6\u95F4\u672A\u4F7F\u7528\uFF0C\u8BE5\u8D26\u53F7\u5DF2\u88AB\u7CFB\u7EDF\u51BB\u7ED3\uFF0C\u82E5\u9700\u8981\u6062\u590D\uFF0C\u4F60\u53EF\u4EE5\u70B9\u51FB<a href="'.concat(w.findacct_url, '">\u8D26\u53F7\u627E\u56DE</a>\u8FDB\u884C\u6062\u590D');
                                    break;
                                case 780001:
                                    x = '\u516C\u4F17\u5E73\u53F0\u5C06\u4E0D\u518D\u652F\u6301QQ\u8D26\u53F7\u767B\u5F55\uFF0C\u8BF7\u4EE5\u90AE\u7BB1\u8D26\u53F7\u767B\u5F55\u3002<br/><a href="/cgi-bin/bizunbindqq?action=page&qq='.concat(w.binduin, '">\u524D\u5F80\u7ED1\u5B9A\u90AE\u7BB1</a>');
                                    break;
                                default:
                                    x = "\u672A\u77E5\u7684\u8FD4\u56DE\u3002";
                                    new Image().src = "/mp/unknow_ret_report?uin=0&id=64462&key=0&url=" + encodeURIComponent("/cgi-bin/login") + "&location=" + encodeURIComponent(window.location.href) + "&ret=" + w.base_resp.ret + "&method=get&action=report";
                                    break
                            }
                            if (x !== "") {
                                state.err = x
                            }
                        },
                        quickLogin1: function n(state) {
                            var a;
                            var w;
                            state.wxList = state.bizList[state.activeBizIndex].userlist;
                            if (state.wxList.length === 1) {
                                w = 0;
                                a = "state_chosen"
                            } else {
                                w = 0;
                                a = "state_chosen"
                            }
                            state.activeWxIndex = w;
                            state.step = 2;
                            state.state = a
                        },
                        updateReject: function n(state) {
                            state.state = "state_reject";
                            state.rejectWxList[state.activeBizIndex][state.activeWxIndex] = true;
                            state.activeWxIndex = -1;
                            state.step = 2
                        },
                        switchMode: function n(state, payload) {
                            state.mode = payload.mode
                        },
                        switchScanLoginType: function n(state, payload) {
                            state.scanLoginType = payload.scanLoginType
                        },
                        refreshQrcode: function n(state) {
                            if (app.hasStartLogin === false) {
                                app.getQrcode()
                            } else {
                                if (app.hasStartLogin === false) {
                                    L.setSum(125091, 0, 1);
                                    L.send()
                                }
                                state.qrcodeSrc = "/cgi-bin/scanloginqrcode?action=getqrcode&random=".concat(new Date * 1);
                                app.qrcodeRefreshTimes++;
                                app.startCheckQrcode()
                            }
                        },
                        __set_state: function n(state, payload) {
                            for (var w in payload) {
                                state[w] = payload[w]
                            }
                        }
                    },
                    actions: {
                        getIngorePassList: function n(context) {
                            var _this = this;
                            R.post({
                                url: "/cgi-bin/bizlogin",
                                data: {
                                    action: "prelogin"
                                }
                            }, function (w) {
                                _this.bizList = w.ignor_passwd_list;
                                if (w.base_resp.ret === 0 && w.eignor_passwd_result === 1 && _this.bizList.length > 0) {
                                    context.rootState.main.mode === 1 && app.stopCheckQrcode();
                                    context.commit("_sucGetIngorePassList", w)
                                } else {
                                    app.report19015({
                                        optype: 1,
                                        page_state: context.rootState.main.mode === 1 ? 3 : 1
                                    })
                                }
                            })
                        },
                        setLanguage: function n(context, language) {
                            context.commit("_setLanguage", language)
                        },
                        login: function n(context, params) {
                            context.dispatch("_loginPost", Object.assign({
                                isOld: false,
                                url: "/cgi-bin/bizlogin?action=startlogin"
                            }, params))
                        },
                        verifyImgRefresh: function n(context, data) {
                            if (context.rootState.main.isNeedVerify) {
                                context.commit("__set_state", {
                                    verifyImg: "/cgi-bin/verifycode?username=" + data.account + "&r=" + data.rand
                                })
                            }
                        },
                        _loginPost: function n(context, params) {
                            R.post({
                                    url: params.url,
                                    data: {
                                        username: params.account,
                                        pwd: v(params.pwd.substr(0, 16)),
                                        imgcode: params.verify,
                                        f: "json",
                                        userlang: params.currentLang,
                                        redirect_url: m(i.redirectUrl)
                                    }
                                }, params.isOld
                                    ? function (w) {
                                        context.commit("_loginCallback", Object.assign({
                                            json: w
                                        }, params));
                                        if (w.base_resp.ret !== 0) {
                                            context.dispatch("verifyImgRefresh", {
                                                account: params.account,
                                                rand: params.rand
                                            })
                                        }
                                    }
                                    : function (w) {
                                        if (w.grey === 0) {
                                            new Image().src = "/mp/jsmonitor?idkey=66811_4_1";
                                            context.dispatch("_loginPost", Object.assign({
                                                isOld: true,
                                                url: "/cgi-bin/login?loginhook=4"
                                            }, params))
                                        } else {
                                            context.commit("_loginCallback", Object.assign({
                                                json: w
                                            }, params));
                                            if (w.base_resp.ret !== 0) {
                                                context.dispatch("verifyImgRefresh", {
                                                    account: params.account,
                                                    rand: params.rand
                                                })
                                            }
                                        }
                                    }
                            )
                        },
                        quickLogin1: function n(context) {
                            var a = [];
                            context.commit("quickLogin1");
                            context.state.wxList.forEach(function (w) {
                                a.push(w.openid)
                            });
                            context.dispatch("quickLoginReport", {
                                openidPost: a
                            })
                        },
                        quickLoginReport: function n(e, a) {
                            R.post({
                                url: "/cgi-bin/bizlogin",
                                data: {
                                    action: "report",
                                    openid: a.openidPost.join("|")
                                }
                            })
                        },
                        quickLogin2: function n(e, a) {
                            e.commit("__set_state", {
                                state: "state_login",
                                step: 3
                            });
                            e.dispatch("startLogin", {
                                openid: e.state.wxList[e.state.activeWxIndex].openid,
                                currentLang: a.currentLang
                            })
                        },
                        startLogin: function n(context, params) {
                            R.post({
                                url: "/cgi-bin/bizlogin?action=startlogin",
                                data: {
                                    openid: params.openid,
                                    userlang: params.currentLang
                                }
                            }, function (w) {
                                params.inlTimes = 1;
                                if (w && w.base_resp && w.base_resp.ret === 0) {
                                    context.dispatch("polledLoginAuth", params)
                                } else if (w && w.eignor_passwd_result >= 3) {
                                    context.commit("updateReject")
                                } else {
                                    context.commit("__set_state", {
                                        state: "state_failed",
                                        step: 2
                                    })
                                }
                            })
                        },
                        bizLogin: function n(context, params) {
                            debugger

                            var w = {
                                userlang: params.currentLang,
                                redirect_url: m(i.redirectUrl),
                                cookie_forbidden: f,
                                cookie_cleaned: T,
                                plugin_used: O
                            };
                            params.loginType && (w.login_type = params.loginType);
                            R.post({
                                url: "/cgi-bin/bizlogin?action=login",
                                data: w
                            }, function (x) {
                                debugger
                                if (x && x.redirect_url) {
                                    localStorage.setItem(_loginMode, context.state.mode);
                                    if (window.location.href.indexOf("toUrl=ad") > -1) {
                                        var q = x.redirect_url.match(/token=(\d*)/);
                                        if (q && q[1]) {
                                            x.redirect_url = "/promotion/advertiser_index?lang=zh_CN&token=" + q[1] + "&aSource=" + (window.aSource || "")
                                        }
                                    }
                                    new Image().src = "/misc/jslog?id=100&content=loginSuccess&level=error";
                                    window.openUrl(x.redirect_url)
                                } else {
                                    app.$tipsErr("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
                                    new Image().src = "/misc/jslog?id=99&content=loginError&level=error"
                                }
                            })
                        },
                        polledLoginAuth: function n(context, a) {
                            var w = function x() {
                                if (context.rootState.main.state !== "state_login")
                                    return;
                                setTimeout(function () {
                                    a.inlTimes++;
                                    context.dispatch("polledLoginAuth", a)
                                }, s(a.inlTimes))
                            };
                            R.get({
                                url: "/cgi-bin/loginauth?action=ask",
                                timeout: 5e3
                            }, function (x) {
                                if (x.status === 1) {
                                    context.commit("__set_state", {
                                        state: "state_confirmed"
                                    });
                                    context.dispatch("bizLogin", a)
                                } else if (x.status === 2) {
                                    context.commit("__set_state", {
                                        state: "state_cancel",
                                        step: 2
                                    })
                                } else if (x.status === 3) {
                                    context.commit("__set_state", {
                                        state: "state_timeout",
                                        step: 2
                                    })
                                } else if (x.status === 4) {
                                    w()
                                } else if (x.status === 0) {
                                    w()
                                } else if (x.status !== 0) {
                                    context.commit("__set_state", {
                                        state: "state_failed",
                                        step: 2
                                    })
                                }
                            }, function () {
                                w()
                            })
                        },
                        __set_state: function n(context, data) {
                            context.commit("__set_state", data)
                        }
                    }
                }
            }
        });

        app = new l({
            el: "#app",
            store: store,
            components: {
                "mp-faq-hover": h
            },
            data: function n() {
                var ua = navigator.userAgent;
                var showMpAppGuide = false;
                if (/(iPhone|iPod|iOS)/i.test(ua) || /(Android)/i.test(ua)) {
                    showMpAppGuide = true;
                    B(284042, 0)
                }
                var data = {
                    supportLang: [{
                        name: "\u7B80\u4F53\u4E2D\u6587",
                        value: "zh_CN"
                    }, {
                        name: "English",
                        value: "en_US"
                    }],
                    CgiData: i,
                    accountDom: null,
                    pwdDom: null,
                    verifyDom: null,
                    supportSafeInput: false,
                    isShowQrcode: false,
                    newKf: false,
                    qqBindMailUrl: "",
                    showMpAppGuide: showMpAppGuide
                };
                return data
            },
            created: function n() {
                this.isStopQrcodeTimer = false;
                this.qrcodeRefreshTimes = 0;
                this.qrcodeTimer = null;
                this.checkQrcodeTimes = 1;
                this.sessionid = new Date * 1 + "" + Math.floor(Math.random() * 100);
                this.prepageState = null;
                this.hasStartLogin = false
            },
            mounted: function n() {
                var _this = this;
                d().then(function (a) {
                    _this.newKf = a
                });
                this.accountDom = this.$refs.accountInput.$refs.field;
                this.verifyDom = this.$refs.verifyInput.$refs.field;
                if (this.supportSafeInput) {
                    this.pwdDom = t.domMap.password;
                    this.pwdDom.addEventListener("input", function () {
                        _this.$store.dispatch("__set_state", {
                            pwd: _this.pwdDom.value.trim()
                        })
                    });
                    this.pwdDom.addEventListener("keydown", function (a) {
                        if (a.keyCode === 13) {
                            _this.login()
                        }
                    });
                    _cookie.remove("password_leak", {
                        path: "/"
                    });
                    this.$refs.fakePwdInput.addEventListener("input", function () {
                        _cookie.cookie("password_leak", location.href, {
                            path: "/"
                        })
                    })
                } else {
                    this.pwdDom = this.$refs.pwdInput.$refs.field
                }
                if (_cookie.cookie("remember_acct")) {
                    this.$store.commit("__set_state", {
                        rememberCheck: true,
                        account: _cookie.cookie("remember_acct")
                    })
                }
                if (this.$store.state.main.rememberCheck)
                    this.pwdDom.focus();
                else
                    this.accountDom.focus();
                // this.$store.dispatch("getIngorePassList");

                debugger

                this.mode === 1 && this.getQrcode();

                if (localStorage.getItem("loginWithQrcode")) {
                    this.switchMode(1);
                    localStorage.removeItem("loginWithQrcode")
                }
            },
            computed: F({
                account: {
                    get: function n() {
                        return this.$store.state.main.account
                    },
                    set: function n(e) {
                        this.$store.dispatch("__set_state", {
                            account: e
                        })
                    }
                },
                pwd: {
                    get: function n() {
                        return this.$store.state.main.pwd
                    },
                    set: function n(e) {
                        this.$store.dispatch("__set_state", {
                            pwd: e
                        })
                    }
                },
                verify: {
                    get: function n() {
                        return this.$store.state.main.verify
                    },
                    set: function n(e) {
                        this.$store.dispatch("__set_state", {
                            verify: e
                        })
                    }
                },
                currentLang: {
                    get: function n() {
                        return this.$store.state.main.currentLang
                    },
                    set: function n(e) {
                        this.$store.dispatch("setLanguage", {
                            currentLang: e
                        })
                    }
                }
            }, u.mapState({
                step: function n(e) {
                    return e.main.step
                },
                mode: function n(e) {
                    return e.main.mode
                },
                qrcodeSrc: function n(e) {
                    return e.main.qrcodeSrc
                },
                scanLoginType: function n(e) {
                    return e.main.scanLoginType
                },
                err: function n(e) {
                    return e.main.err
                },
                activeBizIndex: function n(e) {
                    return e.main.activeBizIndex
                },
                verifyImg: function n(e) {
                    return e.main.verifyImg
                },
                isNeedVerify: function n(e) {
                    return e.main.isNeedVerify
                },
                rememberCheck: function n(e) {
                    return e.main.rememberCheck
                },
                bizList: function n(e) {
                    return e.main.bizList
                },
                state: function n(e) {
                    return e.main.state
                },
                wxList: function n(e) {
                    return e.main.wxList
                },
                activeWxIndex: function n(e) {
                    return e.main.activeWxIndex
                },
                rejectWxList: function n(e) {
                    return e.main.rejectWxList
                },
                currentLangDesc: function n() {
                    var e = "\u7B80\u4F53\u4E2D\u6587";
                    var a;
                    for (a = 0; a < this.supportLang.length; a++) {
                        if (this.supportLang[a].value === this.currentLang) {
                            e = this.supportLang[a].name
                        }
                    }
                    return e
                }
            })),
            watch: {
                account: function n(e) {
                    if (e !== "") {
                        this.$store.dispatch("__set_state", {
                            err: ""
                        })
                    }
                },
                pwd: function n(e) {
                    if (e !== "") {
                        this.$store.dispatch("__set_state", {
                            err: ""
                        })
                    }
                },
                verify: function n(e) {
                    if (this.$store.state.main.isNeedVerify === true && e !== "") {
                        this.$store.dispatch("__set_state", {
                            err: ""
                        })
                    }
                },
                step: function n(e) {
                    if (e === 0) {
                        this.report19015({
                            optype: 1,
                            page_state: this.mode === 1 ? 3 : 1
                        });
                        if (this.mode === 1) {
                            this.getQrcode()
                        }
                    }
                },
                mode: function n(value) {
                    this.report19015({
                        optype: 1,
                        page_state: value === 1 ? 3 : 1
                    })
                }
            },
            methods: {
                report19015: function n(e) {
                    if (e.optype === 1) {
                        this.prepageState !== null && (e.prepage_state = this.prepageState);
                        this.prepageState = e.page_state
                    }
                    b.report(19015, I({
                        devicetype: 1,
                        newsessionid: this.sessionid
                    }, e))
                },
                toggleQrcodeShow: function n() {
                    this.isShowQrcode = true
                },
                toggleQrcodeHide: function n() {
                    this.isShowQrcode = false
                },
                setLanguage: function n(e) {
                    var a = this;
                    a.$store.dispatch("setLanguage", {
                        currentLang: e
                    })
                },
                switchMode: function n(e) {
                    this.$store.commit("switchMode", {
                        mode: e
                    });
                    if (e === 1) {
                        this.report19015({
                            optype: 2,
                            buttonid: 1
                        });
                        this.getQrcode()
                    } else {
                        this.report19015({
                            optype: 2,
                            buttonid: 2
                        });
                        this.refreshQrcode();
                        this.stopCheckQrcode();
                        this.hasStartLogin = false
                    }
                },
                switchScanLoginType: function n(e) {
                    this.$store.commit("switchScanLoginType", {
                        scanLoginType: e
                    })
                },
                getQrcode: function n() {
                    var _this = this;
                    this.isStopQrcodeTimer = false;
                    R.post({
                        url: "/cgi-bin/bizlogin?action=startlogin",
                        data: {
                            userlang: this.currentLang,
                            redirect_url: m(i.redirectUrl),
                            login_type: 3,
                            sessionid: '172067410731027',//this.sessionid
                        }
                    }, function (a) {
                        if (a && a.base_resp && a.base_resp.ret === 0) {
                            _this.hasStartLogin = true;
                            !_this.isStopQrcodeTimer && _this.refreshQrcode()
                        } else {
                            L.setSum(125091, 0, 2);
                            L.send();
                            _this.switchScanLoginType(6)
                        }
                    }, function (a, w) {
                        L.setSum(125091, 0, 3);
                        L.send();
                        _this.switchScanLoginType(6)
                    })
                },
                qrcodeError: function n(e) {
                    if (e.target.src === location.href)
                        return;
                    L.setSum(125091, 1, 1);
                    L.send();
                    this.stopCheckQrcode();
                    this.switchScanLoginType(6)
                },
                refreshQrcode: function n(e) {
                    if (j(e) === "object" || !e) {
                        this.qrcodeRefreshTimes = 0
                    }
                    this.stopCheckQrcode();
                    if (this.qrcodeRefreshTimes >= 5) {
                        this.switchScanLoginType(5)
                    } else {
                        this.switchScanLoginType(0);
                        this.$store.commit("refreshQrcode")
                    }
                },
                startCheckQrcode: function n(e) {
                    !e && (this.checkQrcodeTimes = 1);
                    this.qrcodeTimer = setTimeout(this.checkQrcode, s(this.checkQrcodeTimes))
                },
                stopCheckQrcode: function n() {
                    this.isStopQrcodeTimer = true;
                    if (this.qrcodeTimer) {
                        clearTimeout(this.qrcodeTimer);
                        this.qrcodeTimer = null
                    }
                },
                checkQrcode: function n() {
                    var _this = this;
                    R.get({
                        url: "/cgi-bin/scanloginqrcode?action=ask"
                    }, function (a) {
                        if (a && a.base_resp && a.base_resp.ret === 0) {
                            switch (a.status) {
                                case 1:
                                    _this.$store.dispatch("bizLogin", {
                                        currentLang: _this.currentLang,
                                        loginType: 3
                                    });
                                    break;
                                case 2:
                                    _this.refreshQrcode();
                                    break;
                                case 3:
                                    _this.refreshQrcode(true);
                                    break;
                                case 4:
                                case 6:
                                    if (a.acct_size === 1) {
                                        _this.switchScanLoginType(1)
                                    } else if (a.acct_size > 1) {
                                        _this.switchScanLoginType(2)
                                    } else {
                                        _this.switchScanLoginType(3)
                                    }
                                    _this.startCheckQrcode(true);
                                    break;
                                case 5:
                                    if (a.binduin) {
                                        _this.qqBindMailUrl = "/cgi-bin/bizunbindqq?action=page&qq=".concat(a.binduin);
                                        _this.switchScanLoginType(7)
                                    } else {
                                        _this.switchScanLoginType(4)
                                    }
                                    break;
                                default:
                                    _this.startCheckQrcode(true)
                            }
                        } else {
                            _this.switchScanLoginType(6)
                        }
                    }, function (a, w) {
                        _this.startCheckQrcode(true)
                    })
                },
                goRegist: function n(e) {
                    this.report19015({
                        optype: 2,
                        buttonid: 3
                    });
                    location.href = e.target.dataset.href
                },
                goRegistImmediately: function n(e) {
                    this.report19015({
                        optype: 2,
                        buttonid: 6
                    });
                    location.href = e.target.dataset.href
                },
                login: function n() {
                    var e = this.$store.state.main.account;
                    var a = this.$store.state.main.pwd;
                    var w = this.$store.state.main.verify;
                    var x = this.$store.state.main.isNeedVerify;
                    var q = this.$store.state.main.currentLang;
                    var U = +new Date;
                    if (e === "") {
                        this.$store.dispatch("__set_state", {
                            err: "\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u8D26\u53F7\uFF01"
                        });
                        this.accountDom.focus()
                    } else if (a === "") {
                        this.$store.dispatch("__set_state", {
                            err: "\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u5BC6\u7801\uFF01"
                        });
                        this.pwdDom.focus()
                    } else if (x === true && w === "") {
                        this.$store.dispatch("__set_state", {
                            err: "\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"
                        });
                        this.verifyDom.focus()
                    } else {
                        if (this.step !== 0 || this.mode !== 0) {
                            L.setSum(125091, 4, 1);
                            L.send()
                        }
                        this.$store.dispatch("login", {
                            account: e,
                            pwd: a,
                            verify: w,
                            currentLang: q,
                            rand: U
                        })
                    }
                },
                verifyImgRefresh: function n() {
                    var e = +new Date;
                    var a = this.$store.state.main.account;
                    this.$store.dispatch("verifyImgRefresh", {
                        account: a,
                        rand: e
                    })
                },
                selectBiz: function n(e) {
                    this.$store.dispatch("__set_state", {
                        activeBizIndex: e
                    })
                },
                quickLogin1: function n() {
                    this.$store.dispatch("quickLogin1")
                },
                changeToInputLogin: function n() {
                    this.$store.dispatch("__set_state", {
                        step: 0
                    })
                },
                selectWx: function n(e) {
                    if (this.$store.state.main.state !== "state_login" && this.$store.state.main.state !== "state_confirmed" && !this.$store.state.main.rejectWxList[this.$store.state.main.activeBizIndex][e]) {
                        if (this.$store.state.main.wxList.length > 1 && this.$store.state.main.activeWxIndex === e) {
                            this.$store.dispatch("__set_state", {
                                activeWxIndex: -1,
                                state: "state_waiting"
                            })
                        } else {
                            this.$store.dispatch("__set_state", {
                                activeWxIndex: e,
                                state: "state_chosen"
                            })
                        }
                    }
                },
                quickLogin2: function n() {
                    var e = this;
                    if (this.$store.state.main.state !== "state_login" && this.$store.state.main.state !== "state_confirmed" && this.$store.state.main.state !== "state_reject" && !this.$store.state.main.rejectWxList[this.$store.state.main.activeBizIndex][this.$store.state.main.activeWxIndex]) {
                        this.$store.dispatch("quickLogin2", {
                            currentLang: e.currentLang
                        })
                    }
                },
                backToQuickLogin: function n() {
                    if (this.$store.state.main.state === "state_login") {
                        this.$store.dispatch("__set_state", {
                            state: "state_chosen"
                        })
                    }
                    this.$store.dispatch("__set_state", {
                        step: this.$store.state.main.step - 1
                    })
                },
                changeRemember: function n() {
                    this.$store.dispatch("__set_state", {
                        rememberCheck: !this.$store.state.main.rememberCheck
                    })
                },
                jump2DownloadMpApp: function n() {
                    B(284042, 1);
                    var e = navigator.userAgent;
                    var a = /(iPhone|iPod|iOS)/i.test(e);
                    location.href = a ? "https://itunes.apple.com/cn/app/\u8BA2\u9605\u53F7\u52A9\u624B/id1116013197?mt=8" : "https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mp"
                }
            }
        });
        y.setBasicTime({
            pid: 30
        });
        y.send();
        window.vm = app;
        A.exports = app
    },
    "./src/pages/login/loginpage/style/loginpage.en_US.less": function (A, z, k) {
        "use strict";
        k.r(z)
    },
    "./src/pages/login/loginpage/style/loginpage.less": function (A, z, k) {
        "use strict";
        k.r(z)
    },
    "./src/pages/modules/safe_input/safe_input.js": function (A, z) {
        var k = "\nlet id = 0;\nconst domMap = {};\nconst map = new WeakMap();\ncustomElements.define('mp-safe-input', class extends HTMLElement {\n  constructor() {\n    super();\n    map.set(this, {\n      id: id++,\n      root: this.attachShadow({ mode: 'closed' })\n    });\n  }\n  connectedCallback() {\n    const style = document.createElement('style');\n    const input = document.createElement('input');\n    const attrs = this.attributes;\n    for (let i = 0; i < attrs.length; i++) {\n      if (attrs[i].name === 'input-style') {\n        style.innerHTML += 'input{' + attrs[i].value + '}';\n      } else if (attrs[i].name === 'placeholder-style') {\n        style.innerHTML += 'input::placeholder{' + attrs[i].value + '}';\n      } else if (['class', 'style'].indexOf(attrs[i].name) === -1) {\n        input.setAttribute(attrs[i].name, attrs[i].value);\n      }\n    }\n    const inst = map.get(this);\n    inst.root.appendChild(style);\n    inst.root.appendChild(input);\n    const name = this.getAttribute('name') || inst.id;\n    domMap[name] = input;\n  }\n});\nreturn {\n  domMap: domMap,\n  support: true\n};\n";
        var j = .005;
        var C;
        try {
            var F = new Function(k);
            C = F()
        } catch (g) {
            if (Math.random() < j && window.WX_BJ_REPORT && window.WX_BJ_REPORT.BadJs && typeof window.WX_BJ_REPORT.BadJs.onError === "function") {
                g.name = "SafeInput:" + g.name;
                window.WX_BJ_REPORT.BadJs.onError(g)
            }
            C = {
                domMap: {},
                support: false
            }
        }
        A.exports = C
    },
    "./src/pages/modules/utils/get_cgi_data.js": function (A, z) {
        A.exports = function (k) {
            return window.CGI_DATA[k]
        }
    },
    "./src/pages/modules/utils/report.js": function (A, z, k) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        z.idkey = z.badjs = void 0;
        var j = function _(D) {
            navigator.sendBeacon(D)
        };
        var C = function _(D) {
            var R = new Image;
            R.src = D
        };
        var F = z.idkey = function _(D, R) {
                var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
                if (!D) {
                    return
                }
                if (R === null || R === void 0) {
                    return
                }
                var d = "/mp/jsmonitor?idkey=".concat(D, "_").concat(R, "_").concat(S, "&_ts=").concat(Date.now());
                navigator.sendBeacon ? j(d) : C(d)
            }
        ;
        var g = z.badjs = function _() {
        }
    },
    "./src/pages/modules/utils/string.js": function (A, z) {
        function k(j, C) {
            var F = ["&", "&amp;", "<", "&lt;", ">", "&gt;", " ", "&nbsp;", '"', "&quot;", "'", "&#39;"];
            var g = ["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&#60;", "<", "&#62;", ">"];
            var _;
            if (C === false) {
                _ = g
            } else {
                _ = F
            }
            var D = j;
            for (var R = 0; R < _.length; R += 2) {
                D = D.replace(new RegExp(_[R], "g"), _[1 + R])
            }
            return D
        }

        A.exports = {
            https2http: function j(C) {
                return C.replace(/https:\/\/mmbiz\.qlogo\.cn\//g, "http://mmbiz.qpic.cn/")
            },
            http2https: function j(C) {
                return C.replace(/http:\/\/mmbiz\.qpic\.cn\//g, "https://mmbiz.qpic.cn/").replace(/http(s)?:\/\/mmbiz\.qlogo\.cn\//g, "https://mmbiz.qpic.cn/")
            },
            nogif: function j(C) {
                return C.indexOf("wx_fmt=gif") > -1 || C.indexOf("/mmbiz_gif/") > -1 ? C.replace("/0?", "/s640?").replace("wx_fmt=gif", "") : C.toString()
            },
            htmlEncode: function j(C) {
                return k(C, true)
            },
            htmlDecode: function j(C) {
                return k(C, false)
            },
            capitalize: function j(C) {
                return C.charAt(0).toUpperCase() + C.slice(1)
            }
        }
    },
    39: function (A, z, k) {
        A.exports = k("./src/pages/login/loginpage/loginpage.js")
    }
});
