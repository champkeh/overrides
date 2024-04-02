self.webpackChunk_N_E = self.webpackChunk_N_E || []
self.webpackChunk_N_E.push([
    [2888],
    {
        88787: function (e, t, r) {
            "use strict";
            r.d(t, {
                MF: function () {
                    return a
                },
                QQ: function () {
                    return i
                },
                iF: function () {
                    return s
                }
            });

            class n extends Error {
                constructor(e, t = "FunctionsError", r) {
                    super(e),
                        this.name = t,
                        this.context = r
                }
            }

            class i extends n {
                constructor(e) {
                    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
                }
            }

            class s extends n {
                constructor(e) {
                    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
                }
            }

            class a extends n {
                constructor(e) {
                    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
                }
            }
        },
        17018: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, {
                    Headers: function () {
                        return s
                    },
                    Request: function () {
                        return a
                    },
                    Response: function () {
                        return o
                    },
                    fetch: function () {
                        return i
                    }
                });
            var n = function () {
                if ("undefined" != typeof self)
                    return self;
                if ("undefined" != typeof window)
                    return window;
                if (void 0 !== r.g)
                    return r.g;
                throw Error("unable to locate global object")
            }();
            let i = n.fetch;
            t.default = n.fetch.bind(n);
            let s = n.Headers
                , a = n.Request
                , o = n.Response
        },
        6779: function (e, t, r) {
            "use strict";
            var n, i;
            e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(60194)
        },

        // 入口
        11978: function (module, exports, require) {
            window.__NEXT_P = window.__NEXT_P || []
            window.__NEXT_P.push([
                "/_app",
                function () {
                    return require(13476)
                }
            ])
        },
        // 主题配置
        14890: function (module, exports, require) {
            "use strict";
            require.d(exports, {
                $_: function () {
                    return a
                },
                Wb: function () {
                    return o
                }
            });
            let n = {
                CRIMSON: "#DC143C",
                BLURPLE: "#5865F2",
                PURPLE: "#9036AF",
                FULL_WHITE: "#FFFFFF",
                BLACK: "#202225",
                BLACK_DARK: "#2C2F33",
                BLACK_LIGHT: "#2F3136",
                BLACK_PRIMARY: "#36393f",
                DARK_SALMON: "#E9967A",
                DANGER: "hsl(359,calc(var(--saturation-factor, 1)*66.7%),54.1%)",
                LIGHTGREEN: "#90EE90",
                SEAGREEN: "#11883B",
                ORANGE: "#FAA81A",
                SILVER: "#B9BBBE",
                PRIMARY: "#4D4D4D",
                TEXT_DANGER: "#db662e"
            }
            let i = {
                dark: {
                    PROMPT_BG: "#072719",
                    PROMPT_PLACEHOLDER_COLOR: "#15593A",
                    PROMPT_TEXT_COLOR: "#3DCF8E",
                    PROMPT_BORDER_COLOR: "#0C3924"
                },
                light: {
                    PROMPT_BG: "#d3ede1",
                    PROMPT_PLACEHOLDER_COLOR: "#77c2a1",
                    PROMPT_TEXT_COLOR: "#289b67",
                    PROMPT_BORDER_COLOR: "#8ad7b3"
                }
            }
            let s = {
                dark: {
                    NODE_COLORS: {
                        TEXT: "#DCE5E7",
                        NODE_KEY: "#59b8ff",
                        NODE_VALUE: "#DCE5E7",
                        INTEGER: "#e8c479",
                        NULL: "#939598",
                        BOOL: {
                            FALSE: "#F85C50",
                            TRUE: "#00DC7D"
                        },
                        PARENT_ARR: "#FC9A40",
                        PARENT_OBJ: "#59b8ff",
                        CHILD_COUNT: "white"
                    }
                },
                light: {
                    NODE_COLORS: {
                        TEXT: "#000",
                        NODE_KEY: "#761CEA",
                        NODE_VALUE: "#535353",
                        INTEGER: "#FD0079",
                        NULL: "#afafaf",
                        BOOL: {
                            FALSE: "#FF0000",
                            TRUE: "#748700"
                        },
                        PARENT_ARR: "#FF6B00",
                        PARENT_OBJ: "#761CEA",
                        CHILD_COUNT: "#535353"
                    }
                }
            }
            let a = {
                ...n,
                ...s.dark,
                ...i.dark,
                BLACK_SECONDARY: "#23272A",
                SILVER_DARK: "#4D4D4D",
                NODE_KEY: "#FAA81A",
                OBJECT_KEY: "#59b8ff",
                SIDEBAR_ICONS: "#8B8E90",
                INTERACTIVE_NORMAL: "#b9bbbe",
                INTERACTIVE_HOVER: "#dcddde",
                INTERACTIVE_ACTIVE: "#fff",
                BACKGROUND_NODE: "#2B2C3E",
                BACKGROUND_TERTIARY: "#202225",
                BACKGROUND_SECONDARY: "#2f3136",
                TOOLBAR_BG: "#262626",
                BACKGROUND_PRIMARY: "#36393f",
                BACKGROUND_MODIFIER_ACCENT: "rgba(79,84,92,0.48)",
                MODAL_BACKGROUND: "#36393E",
                TEXT_NORMAL: "#dcddde",
                TEXT_POSITIVE: "hsl(139,calc(var(--saturation-factor, 1)*51.6%),52.2%)",
                GRID_BG_COLOR: "#141413",
                GRID_COLOR_PRIMARY: "#222222"
            }
            let o = {
                ...n,
                ...s.light,
                ...i.light,
                BLACK_SECONDARY: "#F2F2F2",
                SILVER_DARK: "#CCCCCC",
                NODE_KEY: "#DC3790",
                OBJECT_KEY: "#0260E8",
                SIDEBAR_ICONS: "#6D6E70",
                INTERACTIVE_NORMAL: "#4f5660",
                INTERACTIVE_HOVER: "#2e3338",
                INTERACTIVE_ACTIVE: "#060607",
                BACKGROUND_NODE: "#F6F8FA",
                BACKGROUND_TERTIARY: "#e3e5e8",
                BACKGROUND_SECONDARY: "#f2f3f5",
                TOOLBAR_BG: "#ECECEC",
                BACKGROUND_PRIMARY: "#FFFFFF",
                BACKGROUND_MODIFIER_ACCENT: "rgba(106,116,128,0.24)",
                MODAL_BACKGROUND: "#FFFFFF",
                TEXT_NORMAL: "#2e3338",
                TEXT_POSITIVE: "#008736",
                GRID_BG_COLOR: "#f7f7f7",
                GRID_COLOR_PRIMARY: "#E6E7E8"
            };
        },

        // https://pro.jsoncrack.com/editor#access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6Ild6bEY1d3YzRjM0bjMxSFciLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExOTczMzYyLCJpYXQiOjE3MTE5Njk3NjIsImlzcyI6Imh0dHBzOi8vYnhrZ3F1cndxam12cnFla2Nid3Muc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImE0N2YyMzEzLTU1ODYtNDgxNC1hOGU0LTVhMWVkNTdiYjhlMyIsImVtYWlsIjoiZmluZHNvdXJjZUBwcm90b24ubWUiLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImdpdGh1YiIsInByb3ZpZGVycyI6WyJnaXRodWIiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xNTY1MDU1NTI_dj00IiwiZW1haWwiOiJmaW5kc291cmNlQHByb3Rvbi5tZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJKb2NrIiwiaXNzIjoiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbSIsIm5hbWUiOiJKb2NrIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJqb29vb29jayIsInByb3ZpZGVyX2lkIjoiMTU2NTA1NTUyIiwic3ViIjoiMTU2NTA1NTUyIiwidXNlcl9uYW1lIjoiam9vb29vY2sifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvYXV0aCIsInRpbWVzdGFtcCI6MTcxMTk2OTc2Mn1dLCJzZXNzaW9uX2lkIjoiNDc0YzZlY2YtNzA4Ny00ODllLThmOWEtMDJhMGE0NzBiMTU4In0.CNknxwGKNW-MGg8v2nGoc-p9m8gGt9t5PNUZbt1J-xE&expires_at=1711973362&expires_in=3600&provider_token=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&refresh_token=GhM8VZwvYlVLyX0WP_D3dg&token_type=bearer
        23511: function (module, exports, require) {
            "use strict";
            require.d(exports, {
                O: function () {
                    return t_
                }
            })
            let n = e => {
                let t;
                return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(require.bind(require, 17018)).then(({default: t}) => t(...e)) : fetch),
                    (...e) => t(...e)
            }
            var i, s, a, o, l, c, u, h, d, f, p, g, m, v, y, b, w, _, k, S = require(88787);

            class E {
                constructor(e, {headers: t = {}, customFetch: r} = {}) {
                    this.url = e,
                        this.headers = t,
                        this.fetch = n(r)
                }

                setAuth(e) {
                    this.headers.Authorization = `Bearer ${e}`
                }

                invoke(e, t = {}) {
                    var r, n, i, s, a;
                    return n = this,
                        i = void 0,
                        s = void 0,
                        a = function* () {
                            try {
                                let n;
                                let {headers: i, method: s, body: a} = t
                                    , o = {};
                                a && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) && ("undefined" != typeof Blob && a instanceof Blob || a instanceof ArrayBuffer ? (o["Content-Type"] = "application/octet-stream",
                                    n = a) : "string" == typeof a ? (o["Content-Type"] = "text/plain",
                                    n = a) : "undefined" != typeof FormData && a instanceof FormData ? n = a : (o["Content-Type"] = "application/json",
                                    n = JSON.stringify(a)));
                                let l = yield this.fetch(`${this.url}/${e}`, {
                                    method: s || "POST",
                                    headers: Object.assign(Object.assign(Object.assign({}, o), this.headers), i),
                                    body: n
                                }).catch(e => {
                                        throw new S.QQ(e)
                                    }
                                )
                                    , c = l.headers.get("x-relay-error");
                                if (c && "true" === c)
                                    throw new S.iF(l);
                                if (!l.ok)
                                    throw new S.MF(l);
                                let u = (null !== (r = l.headers.get("Content-Type")) && void 0 !== r ? r : "text/plain").split(";")[0].trim();
                                return {
                                    data: "application/json" === u ? yield l.json() : "application/octet-stream" === u ? yield l.blob() : "multipart/form-data" === u ? yield l.formData() : yield l.text(),
                                    error: null
                                }
                            } catch (e) {
                                return {
                                    data: null,
                                    error: e
                                }
                            }
                        }
                        ,
                        new (s || (s = Promise))(function (e, t) {
                                function r(e) {
                                    try {
                                        l(a.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function o(e) {
                                    try {
                                        l(a.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function l(t) {
                                    var n;
                                    t.done ? e(t.value) : ((n = t.value) instanceof s ? n : new s(function (e) {
                                            e(n)
                                        }
                                    )).then(r, o)
                                }

                                l((a = a.apply(n, i || [])).next())
                            }
                        )
                }
            }

            var $ = require(17018);

            class PostgrestError extends Error {
                constructor(e) {
                    super(e.message)
                    this.name = "PostgrestError"
                    this.details = e.details
                    this.hint = e.hint
                    this.code = e.code
                }
            }

            class T {
                constructor(options) {
                    this.shouldThrowOnError = false
                    this.method = options.method
                    this.url = options.url
                    this.headers = options.headers
                    this.schema = options.schema
                    this.body = options.body
                    this.shouldThrowOnError = options.shouldThrowOnError
                    this.signal = options.signal
                    this.isMaybeSingle = options.isMaybeSingle
                    options.fetch
                        ? this.fetch = options.fetch
                        : "undefined" == typeof fetch
                            ? this.fetch = $.default
                            : this.fetch = fetch
                }

                throwOnError() {
                    this.shouldThrowOnError = true
                    return this
                }

                then(e, t) {
                    if (undefined !== this.schema) {
                        ["GET", "HEAD"].includes(this.method)
                            ? this.headers["Accept-Profile"] = this.schema
                            : this.headers["Content-Profile"] = this.schema
                    }
                    if ("GET" !== this.method && "HEAD" !== this.method) {
                        this.headers["Content-Type"] = "application/json"
                    }
                    let r = this.fetch(this.url.toString(), {
                        method: this.method,
                        headers: this.headers,
                        body: JSON.stringify(this.body),
                        signal: this.signal
                    }).then(async response => {
                        var t, r, n;
                        let i = null
                            , s = null
                            , a = null
                            , o = response.status
                            , l = response.statusText;
                        if (response.ok) {
                            if ("HEAD" !== this.method) {
                                let t = await response.text();
                                "" === t || (s = "text/csv" === this.headers.Accept ? t : this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? t : JSON.parse(t))
                            }
                            let n = null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.match(/count=(exact|planned|estimated)/)
                                ,
                                c = null === (r = response.headers.get("content-range")) || void 0 === r ? void 0 : r.split("/");
                            n && c && c.length > 1 && (a = parseInt(c[1])),
                            this.isMaybeSingle && "GET" === this.method && Array.isArray(s) && (s.length > 1 ? (i = {
                                code: "PGRST116",
                                details: `Results contain ${s.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                                hint: null,
                                message: "JSON object requested, multiple (or no) rows returned"
                            },
                                s = null,
                                a = null,
                                o = 406,
                                l = "Not Acceptable") : s = 1 === s.length ? s[0] : null)
                        } else {
                            let t = await response.text();
                            try {
                                i = JSON.parse(t),
                                Array.isArray(i) && 404 === response.status && (s = [],
                                    i = null,
                                    o = 200,
                                    l = "OK")
                            } catch (r) {
                                404 === response.status && "" === t ? (o = 204,
                                    l = "No Content") : i = {
                                    message: t
                                }
                            }
                            if (i && this.isMaybeSingle && (null === (n = null == i ? void 0 : i.details) || void 0 === n ? void 0 : n.includes("0 rows")) && (i = null,
                                o = 200,
                                l = "OK"),
                            i && this.shouldThrowOnError)
                                throw new PostgrestError(i)
                        }
                        return {
                            error: i,
                            data: s,
                            count: a,
                            status: o,
                            statusText: l
                        }
                    })
                    if (!this.shouldThrowOnError) {
                        r = r.catch(e => {
                            var t, r, n;
                            return {
                                error: {
                                    message: `${null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "FetchError"}: ${null == e ? void 0 : e.message}`,
                                    details: `${null !== (r = null == e ? void 0 : e.stack) && void 0 !== r ? r : ""}`,
                                    hint: "",
                                    code: `${null !== (n = null == e ? void 0 : e.code) && void 0 !== n ? n : ""}`
                                },
                                data: null,
                                count: null,
                                status: 0,
                                statusText: ""
                            }
                        })
                    }
                    return r.then(e, t)
                }
            }

            class C extends T {
                select(e) {
                    let t = !1
                        , r = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t),
                        e)).join("");
                    return this.url.searchParams.set("select", r),
                    this.headers.Prefer && (this.headers.Prefer += ","),
                        this.headers.Prefer += "return=representation",
                        this
                }

                order(e, {ascending: t = !0, nullsFirst: r, foreignTable: n, referencedTable: i = n} = {}) {
                    let s = i ? `${i}.order` : "order"
                        , a = this.url.searchParams.get(s);
                    return this.url.searchParams.set(s, `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"}`),
                        this
                }

                limit(e, {foreignTable: t, referencedTable: r = t} = {}) {
                    let n = void 0 === r ? "limit" : `${r}.limit`;
                    return this.url.searchParams.set(n, `${e}`),
                        this
                }

                range(e, t, {foreignTable: r, referencedTable: n = r} = {}) {
                    let i = void 0 === n ? "offset" : `${n}.offset`
                        , s = void 0 === n ? "limit" : `${n}.limit`;
                    return this.url.searchParams.set(i, `${e}`),
                        this.url.searchParams.set(s, `${t - e + 1}`),
                        this
                }

                abortSignal(e) {
                    return this.signal = e,
                        this
                }

                single() {
                    return this.headers.Accept = "application/vnd.pgrst.object+json",
                        this
                }

                maybeSingle() {
                    return "GET" === this.method ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json",
                        this.isMaybeSingle = !0,
                        this
                }

                csv() {
                    return this.headers.Accept = "text/csv",
                        this
                }

                geojson() {
                    return this.headers.Accept = "application/geo+json",
                        this
                }

                explain({
                            analyze: e = !1,
                            verbose: t = !1,
                            settings: r = !1,
                            buffers: n = !1,
                            wal: i = !1,
                            format: s = "text"
                        } = {}) {
                    var a;
                    let o = [e ? "analyze" : null, t ? "verbose" : null, r ? "settings" : null, n ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|")
                        , l = null !== (a = this.headers.Accept) && void 0 !== a ? a : "application/json";
                    return this.headers.Accept = `application/vnd.pgrst.plan+${s}; for="${l}"; options=${o};`,
                        this
                }

                rollback() {
                    var e;
                    return (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback",
                        this
                }

                returns() {
                    return this
                }
            }

            class A extends C {
                eq(e, t) {
                    return this.url.searchParams.append(e, `eq.${t}`),
                        this
                }

                neq(e, t) {
                    return this.url.searchParams.append(e, `neq.${t}`),
                        this
                }

                gt(e, t) {
                    return this.url.searchParams.append(e, `gt.${t}`),
                        this
                }

                gte(e, t) {
                    return this.url.searchParams.append(e, `gte.${t}`),
                        this
                }

                lt(e, t) {
                    return this.url.searchParams.append(e, `lt.${t}`),
                        this
                }

                lte(e, t) {
                    return this.url.searchParams.append(e, `lte.${t}`),
                        this
                }

                like(e, t) {
                    return this.url.searchParams.append(e, `like.${t}`),
                        this
                }

                likeAllOf(e, t) {
                    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
                        this
                }

                likeAnyOf(e, t) {
                    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
                        this
                }

                ilike(e, t) {
                    return this.url.searchParams.append(e, `ilike.${t}`),
                        this
                }

                ilikeAllOf(e, t) {
                    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
                        this
                }

                ilikeAnyOf(e, t) {
                    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
                        this
                }

                is(e, t) {
                    return this.url.searchParams.append(e, `is.${t}`),
                        this
                }

                in(e, t) {
                    let r = t.map(e => "string" == typeof e && RegExp("[,()]").test(e) ? `"${e}"` : `${e}`).join(",");
                    return this.url.searchParams.append(e, `in.(${r})`),
                        this
                }

                contains(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
                        this
                }

                containedBy(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
                        this
                }

                rangeGt(e, t) {
                    return this.url.searchParams.append(e, `sr.${t}`),
                        this
                }

                rangeGte(e, t) {
                    return this.url.searchParams.append(e, `nxl.${t}`),
                        this
                }

                rangeLt(e, t) {
                    return this.url.searchParams.append(e, `sl.${t}`),
                        this
                }

                rangeLte(e, t) {
                    return this.url.searchParams.append(e, `nxr.${t}`),
                        this
                }

                rangeAdjacent(e, t) {
                    return this.url.searchParams.append(e, `adj.${t}`),
                        this
                }

                overlaps(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
                        this
                }

                textSearch(e, t, {config: r, type: n} = {}) {
                    let i = "";
                    "plain" === n ? i = "pl" : "phrase" === n ? i = "ph" : "websearch" === n && (i = "w");
                    let s = void 0 === r ? "" : `(${r})`;
                    return this.url.searchParams.append(e, `${i}fts ${s}.${t}`),
                        this
                }

                match(e) {
                    return Object.entries(e).forEach(([e, t]) => {
                            this.url.searchParams.append(e, `eq.${t}`)
                        }
                    ),
                        this
                }

                not(e, t, r) {
                    return this.url.searchParams.append(e, `not.${t}.${r}`),
                        this
                }

                or(e, {foreignTable: t, referencedTable: r = t} = {}) {
                    let n = r ? `${r}.or` : "or";
                    return this.url.searchParams.append(n, `(${e})`),
                        this
                }

                filter(e, t, r) {
                    return this.url.searchParams.append(e, `${t}.${r}`),
                        this
                }
            }

            class j {
                constructor(e, {headers: t = {}, schema: r, fetch: n}) {
                    this.url = e,
                        this.headers = t,
                        this.schema = r,
                        this.fetch = n
                }

                select(e, {head: t = !1, count: r} = {}) {
                    let n = !1
                        , i = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !n ? "" : ('"' === e && (n = !n),
                        e)).join("");
                    return this.url.searchParams.set("select", i),
                    r && (this.headers.Prefer = `count=${r}`),
                        new A({
                            method: t ? "HEAD" : "GET",
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            fetch: this.fetch,
                            allowEmpty: !1
                        })
                }

                insert(e, {count: t, defaultToNull: r = !0} = {}) {
                    let n = [];
                    if (this.headers.Prefer && n.push(this.headers.Prefer),
                    t && n.push(`count=${t}`),
                    r || n.push("missing=default"),
                        this.headers.Prefer = n.join(","),
                        Array.isArray(e)) {
                        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                        if (t.length > 0) {
                            let e = [...new Set(t)].map(e => `"${e}"`);
                            this.url.searchParams.set("columns", e.join(","))
                        }
                    }
                    return new A({
                        method: "POST",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }

                upsert(e, {onConflict: t, ignoreDuplicates: r = !1, count: n, defaultToNull: i = !0} = {}) {
                    let s = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
                    if (void 0 !== t && this.url.searchParams.set("on_conflict", t),
                    this.headers.Prefer && s.push(this.headers.Prefer),
                    n && s.push(`count=${n}`),
                    i || s.push("missing=default"),
                        this.headers.Prefer = s.join(","),
                        Array.isArray(e)) {
                        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                        if (t.length > 0) {
                            let e = [...new Set(t)].map(e => `"${e}"`);
                            this.url.searchParams.set("columns", e.join(","))
                        }
                    }
                    return new A({
                        method: "POST",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }

                update(e, {count: t} = {}) {
                    let r = [];
                    return this.headers.Prefer && r.push(this.headers.Prefer),
                    t && r.push(`count=${t}`),
                        this.headers.Prefer = r.join(","),
                        new A({
                            method: "PATCH",
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            body: e,
                            fetch: this.fetch,
                            allowEmpty: !1
                        })
                }

                delete({count: e} = {}) {
                    let t = [];
                    return e && t.push(`count=${e}`),
                    this.headers.Prefer && t.unshift(this.headers.Prefer),
                        this.headers.Prefer = t.join(","),
                        new A({
                            method: "DELETE",
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            fetch: this.fetch,
                            allowEmpty: !1
                        })
                }
            }

            let P = {
                "X-Client-Info": "postgrest-js/1.9.2"
            };

            class x {
                constructor(e, {headers: t = {}, schema: r, fetch: n} = {}) {
                    this.url = e,
                        this.headers = Object.assign(Object.assign({}, P), t),
                        this.schemaName = r,
                        this.fetch = n
                }

                from(e) {
                    return new j(new URL(`${this.url}/${e}`), {
                        headers: Object.assign({}, this.headers),
                        schema: this.schemaName,
                        fetch: this.fetch
                    })
                }

                schema(e) {
                    return new x(this.url, {
                        headers: this.headers,
                        schema: e,
                        fetch: this.fetch
                    })
                }

                rpc(e, t = {}, {head: r = !1, count: n} = {}) {
                    let i, s;
                    let a = new URL(`${this.url}/rpc/${e}`);
                    r ? (i = "HEAD",
                        Object.entries(t).forEach(([e, t]) => {
                                a.searchParams.append(e, `${t}`)
                            }
                        )) : (i = "POST",
                        s = t);
                    let o = Object.assign({}, this.headers);
                    return n && (o.Prefer = `count=${n}`),
                        new A({
                            method: i,
                            url: a,
                            headers: o,
                            schema: this.schemaName,
                            body: s,
                            fetch: this.fetch,
                            allowEmpty: !1
                        })
                }
            }

            let R = {
                "X-Client-Info": "realtime-js/2.9.3"
            };
            i = f || (f = {})
            i[i.connecting = 0] = "connecting"
            i[i.open = 1] = "open"
            i[i.closing = 2] = "closing"
            i[i.closed = 3] = "closed"

            s = p || (p = {})
            s.closed = "closed"
            s.errored = "errored"
            s.joined = "joined"
            s.joining = "joining"
            s.leaving = "leaving"

            a = g || (g = {})
            a.close = "phx_close"
            a.error = "phx_error"
            a.join = "phx_join"
            a.reply = "phx_reply"
            a.leave = "phx_leave"
            a.access_token = "access_token"

            m || (m = {})
            m.websocket = "websocket"

            o = v || (v = {})
            o.Connecting = "connecting"
            o.Open = "open"
            o.Closing = "closing"
            o.Closed = "closed"

            class I {
                constructor(e, t) {
                    this.callback = e,
                        this.timerCalc = t,
                        this.timer = void 0,
                        this.tries = 0,
                        this.callback = e,
                        this.timerCalc = t
                }

                reset() {
                    this.tries = 0,
                        clearTimeout(this.timer)
                }

                scheduleTimeout() {
                    clearTimeout(this.timer),
                        this.timer = setTimeout(() => {
                                this.tries = this.tries + 1,
                                    this.callback()
                            }
                            , this.timerCalc(this.tries + 1))
                }
            }

            class L {
                constructor() {
                    this.HEADER_LENGTH = 1
                }

                decode(e, t) {
                    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : "string" == typeof e ? t(JSON.parse(e)) : t({})
                }

                _binaryDecode(e) {
                    let t = new DataView(e)
                        , r = new TextDecoder;
                    return this._decodeBroadcast(e, t, r)
                }

                _decodeBroadcast(e, t, r) {
                    let n = t.getUint8(1)
                        , i = t.getUint8(2)
                        , s = this.HEADER_LENGTH + 2
                        , a = r.decode(e.slice(s, s + n));
                    s += n;
                    let o = r.decode(e.slice(s, s + i));
                    return s += i,
                        {
                            ref: null,
                            topic: a,
                            event: o,
                            payload: JSON.parse(r.decode(e.slice(s, e.byteLength)))
                        }
                }
            }

            class N {
                constructor(e, t, r = {}, n = 1e4) {
                    this.channel = e,
                        this.event = t,
                        this.payload = r,
                        this.timeout = n,
                        this.sent = !1,
                        this.timeoutTimer = void 0,
                        this.ref = "",
                        this.receivedResp = null,
                        this.recHooks = [],
                        this.refEvent = null
                }

                resend(e) {
                    this.timeout = e,
                        this._cancelRefEvent(),
                        this.ref = "",
                        this.refEvent = null,
                        this.receivedResp = null,
                        this.sent = !1,
                        this.send()
                }

                send() {
                    this._hasReceived("timeout") || (this.startTimeout(),
                        this.sent = !0,
                        this.channel.socket.push({
                            topic: this.channel.topic,
                            event: this.event,
                            payload: this.payload,
                            ref: this.ref,
                            join_ref: this.channel._joinRef()
                        }))
                }

                updatePayload(e) {
                    this.payload = Object.assign(Object.assign({}, this.payload), e)
                }

                receive(e, t) {
                    var r;
                    return this._hasReceived(e) && t(null === (r = this.receivedResp) || void 0 === r ? void 0 : r.response),
                        this.recHooks.push({
                            status: e,
                            callback: t
                        }),
                        this
                }

                startTimeout() {
                    this.timeoutTimer || (this.ref = this.channel.socket._makeRef(),
                        this.refEvent = this.channel._replyEventName(this.ref),
                        this.channel._on(this.refEvent, {}, e => {
                                this._cancelRefEvent(),
                                    this._cancelTimeout(),
                                    this.receivedResp = e,
                                    this._matchReceive(e)
                            }
                        ),
                        this.timeoutTimer = setTimeout(() => {
                                this.trigger("timeout", {})
                            }
                            , this.timeout))
                }

                trigger(e, t) {
                    this.refEvent && this.channel._trigger(this.refEvent, {
                        status: e,
                        response: t
                    })
                }

                destroy() {
                    this._cancelRefEvent(),
                        this._cancelTimeout()
                }

                _cancelRefEvent() {
                    this.refEvent && this.channel._off(this.refEvent, {})
                }

                _cancelTimeout() {
                    clearTimeout(this.timeoutTimer),
                        this.timeoutTimer = void 0
                }

                _matchReceive({status: e, response: t}) {
                    this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t))
                }

                _hasReceived(e) {
                    return this.receivedResp && this.receivedResp.status === e
                }
            }

            l = y || (y = {})
            l.SYNC = "sync"
            l.JOIN = "join"
            l.LEAVE = "leave"

            class D {
                constructor(e, t) {
                    this.channel = e,
                        this.state = {},
                        this.pendingDiffs = [],
                        this.joinRef = null,
                        this.caller = {
                            onJoin: () => {
                            }
                            ,
                            onLeave: () => {
                            }
                            ,
                            onSync: () => {
                            }
                        };
                    let r = (null == t ? void 0 : t.events) || {
                        state: "presence_state",
                        diff: "presence_diff"
                    };
                    this.channel._on(r.state, {}, e => {
                            let {onJoin: t, onLeave: r, onSync: n} = this.caller;
                            this.joinRef = this.channel._joinRef(),
                                this.state = D.syncState(this.state, e, t, r),
                                this.pendingDiffs.forEach(e => {
                                        this.state = D.syncDiff(this.state, e, t, r)
                                    }
                                ),
                                this.pendingDiffs = [],
                                n()
                        }
                    ),
                        this.channel._on(r.diff, {}, e => {
                                let {onJoin: t, onLeave: r, onSync: n} = this.caller;
                                this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = D.syncDiff(this.state, e, t, r),
                                    n())
                            }
                        ),
                        this.onJoin((e, t, r) => {
                                this.channel._trigger("presence", {
                                    event: "join",
                                    key: e,
                                    currentPresences: t,
                                    newPresences: r
                                })
                            }
                        ),
                        this.onLeave((e, t, r) => {
                                this.channel._trigger("presence", {
                                    event: "leave",
                                    key: e,
                                    currentPresences: t,
                                    leftPresences: r
                                })
                            }
                        ),
                        this.onSync(() => {
                                this.channel._trigger("presence", {
                                    event: "sync"
                                })
                            }
                        )
                }

                static syncState(e, t, r, n) {
                    let i = this.cloneDeep(e)
                        , s = this.transformState(t)
                        , a = {}
                        , o = {};
                    return this.map(i, (e, t) => {
                            s[e] || (o[e] = t)
                        }
                    ),
                        this.map(s, (e, t) => {
                                let r = i[e];
                                if (r) {
                                    let n = t.map(e => e.presence_ref)
                                        , i = r.map(e => e.presence_ref)
                                        , s = t.filter(e => 0 > i.indexOf(e.presence_ref))
                                        , l = r.filter(e => 0 > n.indexOf(e.presence_ref));
                                    s.length > 0 && (a[e] = s),
                                    l.length > 0 && (o[e] = l)
                                } else
                                    a[e] = t
                            }
                        ),
                        this.syncDiff(i, {
                            joins: a,
                            leaves: o
                        }, r, n)
                }

                static syncDiff(e, t, r, n) {
                    let {joins: i, leaves: s} = {
                        joins: this.transformState(t.joins),
                        leaves: this.transformState(t.leaves)
                    };
                    return r || (r = () => {
                        }
                    ),
                    n || (n = () => {
                        }
                    ),
                        this.map(i, (t, n) => {
                                var i;
                                let s = null !== (i = e[t]) && void 0 !== i ? i : [];
                                if (e[t] = this.cloneDeep(n),
                                s.length > 0) {
                                    let r = e[t].map(e => e.presence_ref)
                                        , n = s.filter(e => 0 > r.indexOf(e.presence_ref));
                                    e[t].unshift(...n)
                                }
                                r(t, s, n)
                            }
                        ),
                        this.map(s, (t, r) => {
                                let i = e[t];
                                if (!i)
                                    return;
                                let s = r.map(e => e.presence_ref);
                                i = i.filter(e => 0 > s.indexOf(e.presence_ref)),
                                    e[t] = i,
                                    n(t, i, r),
                                0 === i.length && delete e[t]
                            }
                        ),
                        e
                }

                static map(e, t) {
                    return Object.getOwnPropertyNames(e).map(r => t(r, e[r]))
                }

                static transformState(e) {
                    return Object.getOwnPropertyNames(e = this.cloneDeep(e)).reduce((t, r) => {
                            let n = e[r];
                            return "metas" in n ? t[r] = n.metas.map(e => (e.presence_ref = e.phx_ref,
                                delete e.phx_ref,
                                delete e.phx_ref_prev,
                                e)) : t[r] = n,
                                t
                        }
                        , {})
                }

                static cloneDeep(e) {
                    return JSON.parse(JSON.stringify(e))
                }

                onJoin(e) {
                    this.caller.onJoin = e
                }

                onLeave(e) {
                    this.caller.onLeave = e
                }

                onSync(e) {
                    this.caller.onSync = e
                }

                inPendingSyncState() {
                    return !this.joinRef || this.joinRef !== this.channel._joinRef()
                }
            }

            c = b || (b = {})
            c.abstime = "abstime"
            c.bool = "bool"
            c.date = "date"
            c.daterange = "daterange"
            c.float4 = "float4"
            c.float8 = "float8"
            c.int2 = "int2"
            c.int4 = "int4"
            c.int4range = "int4range"
            c.int8 = "int8"
            c.int8range = "int8range"
            c.json = "json"
            c.jsonb = "jsonb"
            c.money = "money"
            c.numeric = "numeric"
            c.oid = "oid"
            c.reltime = "reltime"
            c.text = "text"
            c.time = "time"
            c.timestamp = "timestamp"
            c.timestamptz = "timestamptz"
            c.timetz = "timetz"
            c.tsrange = "tsrange"
            c.tstzrange = "tstzrange"

            let U = (e, t, r = {}) => {
                var n;
                let i = null !== (n = r.skipTypes) && void 0 !== n ? n : [];
                return Object.keys(t).reduce((r, n) => (r[n] = F(n, e, t, i),
                    r), {})
            }
                , F = (e, t, r, n) => {
                let i = t.find(t => t.name === e)
                    , s = null == i ? void 0 : i.type
                    , a = r[e];
                return s && !n.includes(s) ? M(s, a) : G(a)
            }
                , M = (e, t) => {
                if ("_" === e.charAt(0))
                    return K(t, e.slice(1, e.length));
                switch (e) {
                    case b.bool:
                        return z(t);
                    case b.float4:
                    case b.float8:
                    case b.int2:
                    case b.int4:
                    case b.int8:
                    case b.numeric:
                    case b.oid:
                        return B(t);
                    case b.json:
                    case b.jsonb:
                        return q(t);
                    case b.timestamp:
                        return J(t);
                    case b.abstime:
                    case b.date:
                    case b.daterange:
                    case b.int4range:
                    case b.int8range:
                    case b.money:
                    case b.reltime:
                    case b.text:
                    case b.time:
                    case b.timestamptz:
                    case b.timetz:
                    case b.tsrange:
                    case b.tstzrange:
                    default:
                        return G(t)
                }
            }
                , G = e => e
                , z = e => {
                switch (e) {
                    case "t":
                        return !0;
                    case "f":
                        return !1;
                    default:
                        return e
                }
            }
                , B = e => {
                if ("string" == typeof e) {
                    let t = parseFloat(e);
                    if (!Number.isNaN(t))
                        return t
                }
                return e
            }
                , q = e => {
                if ("string" == typeof e)
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        console.log(`JSON parse error: ${e}`)
                    }
                return e
            }
                , K = (e, t) => {
                if ("string" != typeof e)
                    return e;
                let r = e.length - 1
                    , n = e[r];
                if ("{" === e[0] && "}" === n) {
                    let n;
                    let i = e.slice(1, r);
                    try {
                        n = JSON.parse("[" + i + "]")
                    } catch (e) {
                        n = i ? i.split(",") : []
                    }
                    return n.map(e => M(t, e))
                }
                return e
            }
                , J = e => "string" == typeof e ? e.replace(" ", "T") : e;
            u = w || (w = {})
            u.ALL = "*"
            u.INSERT = "INSERT"
            u.UPDATE = "UPDATE"
            u.DELETE = "DELETE"

            h = _ || (_ = {})
            h.BROADCAST = "broadcast"
            h.PRESENCE = "presence"
            h.POSTGRES_CHANGES = "postgres_changes"

            d = k || (k = {})
            d.SUBSCRIBED = "SUBSCRIBED"
            d.TIMED_OUT = "TIMED_OUT"
            d.CLOSED = "CLOSED"
            d.CHANNEL_ERROR = "CHANNEL_ERROR"

            class H {
                constructor(e, t = {
                    config: {}
                }, r) {
                    this.topic = e,
                        this.params = t,
                        this.socket = r,
                        this.bindings = {},
                        this.state = p.closed,
                        this.joinedOnce = !1,
                        this.pushBuffer = [],
                        this.subTopic = e.replace(/^realtime:/i, ""),
                        this.params.config = Object.assign({
                            broadcast: {
                                ack: !1,
                                self: !1
                            },
                            presence: {
                                key: ""
                            }
                        }, t.config),
                        this.timeout = this.socket.timeout,
                        this.joinPush = new N(this, g.join, this.params, this.timeout),
                        this.rejoinTimer = new I(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs),
                        this.joinPush.receive("ok", () => {
                                this.state = p.joined,
                                    this.rejoinTimer.reset(),
                                    this.pushBuffer.forEach(e => e.send()),
                                    this.pushBuffer = []
                            }
                        ),
                        this._onClose(() => {
                                this.rejoinTimer.reset(),
                                    this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
                                    this.state = p.closed,
                                    this.socket._remove(this)
                            }
                        ),
                        this._onError(e => {
                                this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e),
                                    this.state = p.errored,
                                    this.rejoinTimer.scheduleTimeout())
                            }
                        ),
                        this.joinPush.receive("timeout", () => {
                                this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
                                    this.state = p.errored,
                                    this.rejoinTimer.scheduleTimeout())
                            }
                        ),
                        this._on(g.reply, {}, (e, t) => {
                                this._trigger(this._replyEventName(t), e)
                            }
                        ),
                        this.presence = new D(this),
                        this.broadcastEndpointURL = this._broadcastEndpointURL()
                }

                subscribe(e, t = this.timeout) {
                    var r, n;
                    if (this.socket.isConnected() || this.socket.connect(),
                        this.joinedOnce)
                        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
                    {
                        let {config: {broadcast: i, presence: s}} = this.params;
                        this._onError(t => e && e("CHANNEL_ERROR", t)),
                            this._onClose(() => e && e("CLOSED"));
                        let a = {}
                            , o = {
                            broadcast: i,
                            presence: s,
                            postgres_changes: null !== (n = null === (r = this.bindings.postgres_changes) || void 0 === r ? void 0 : r.map(e => e.filter)) && void 0 !== n ? n : []
                        };
                        this.socket.accessToken && (a.access_token = this.socket.accessToken),
                            this.updateJoinPayload(Object.assign({
                                config: o
                            }, a)),
                            this.joinedOnce = !0,
                            this._rejoin(t),
                            this.joinPush.receive("ok", ({postgres_changes: t}) => {
                                    var r;
                                    if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken),
                                    void 0 === t) {
                                        e && e("SUBSCRIBED");
                                        return
                                    }
                                    {
                                        let n = this.bindings.postgres_changes
                                            , i = null !== (r = null == n ? void 0 : n.length) && void 0 !== r ? r : 0
                                            , s = [];
                                        for (let r = 0; r < i; r++) {
                                            let i = n[r]
                                                , {filter: {event: a, schema: o, table: l, filter: c}} = i
                                                , u = t && t[r];
                                            if (u && u.event === a && u.schema === o && u.table === l && u.filter === c)
                                                s.push(Object.assign(Object.assign({}, i), {
                                                    id: u.id
                                                }));
                                            else {
                                                this.unsubscribe(),
                                                e && e("CHANNEL_ERROR", Error("mismatch between server and client bindings for postgres changes"));
                                                return
                                            }
                                        }
                                        this.bindings.postgres_changes = s,
                                        e && e("SUBSCRIBED");
                                        return
                                    }
                                }
                            ).receive("error", t => {
                                    e && e("CHANNEL_ERROR", Error(JSON.stringify(Object.values(t).join(", ") || "error")))
                                }
                            ).receive("timeout", () => {
                                    e && e("TIMED_OUT")
                                }
                            )
                    }
                    return this
                }

                presenceState() {
                    return this.presence.state
                }

                async track(e, t = {}) {
                    return await this.send({
                        type: "presence",
                        event: "track",
                        payload: e
                    }, t.timeout || this.timeout)
                }

                async untrack(e = {}) {
                    return await this.send({
                        type: "presence",
                        event: "untrack"
                    }, e)
                }

                on(e, t, r) {
                    return this._on(e, t, r)
                }

                async send(e, t = {}) {
                    var r, n;
                    if (this._canPush() || "broadcast" !== e.type)
                        return new Promise(r => {
                                var n, i, s;
                                let a = this._push(e.type, e, t.timeout || this.timeout);
                                "broadcast" !== e.type || (null === (s = null === (i = null === (n = this.params) || void 0 === n ? void 0 : n.config) || void 0 === i ? void 0 : i.broadcast) || void 0 === s ? void 0 : s.ack) || r("ok"),
                                    a.receive("ok", () => r("ok")),
                                    a.receive("timeout", () => r("timed out"))
                            }
                        );
                    {
                        let {event: i, payload: s} = e
                            , a = {
                            method: "POST",
                            headers: {
                                apikey: null !== (r = this.socket.apiKey) && void 0 !== r ? r : "",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                messages: [{
                                    topic: this.subTopic,
                                    event: i,
                                    payload: s
                                }]
                            })
                        };
                        try {
                            if ((await this._fetchWithTimeout(this.broadcastEndpointURL, a, null !== (n = t.timeout) && void 0 !== n ? n : this.timeout)).ok)
                                return "ok";
                            return "error"
                        } catch (e) {
                            if ("AbortError" === e.name)
                                return "timed out";
                            return "error"
                        }
                    }
                }

                updateJoinPayload(e) {
                    this.joinPush.updatePayload(e)
                }

                unsubscribe(e = this.timeout) {
                    this.state = p.leaving;
                    let t = () => {
                            this.socket.log("channel", `leave ${this.topic}`),
                                this._trigger(g.close, "leave", this._joinRef())
                        }
                    ;
                    return this.rejoinTimer.reset(),
                        this.joinPush.destroy(),
                        new Promise(r => {
                                let n = new N(this, g.leave, {}, e);
                                n.receive("ok", () => {
                                        t(),
                                            r("ok")
                                    }
                                ).receive("timeout", () => {
                                        t(),
                                            r("timed out")
                                    }
                                ).receive("error", () => {
                                        r("error")
                                    }
                                ),
                                    n.send(),
                                this._canPush() || n.trigger("ok", {})
                            }
                        )
                }

                _broadcastEndpointURL() {
                    let e = this.socket.endPoint;
                    return (e = (e = e.replace(/^ws/i, "http")).replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")).replace(/\/+$/, "") + "/api/broadcast"
                }

                async _fetchWithTimeout(e, t, r) {
                    let n = new AbortController
                        , i = setTimeout(() => n.abort(), r)
                        , s = await this.socket.fetch(e, Object.assign(Object.assign({}, t), {
                        signal: n.signal
                    }));
                    return clearTimeout(i),
                        s
                }

                _push(e, t, r = this.timeout) {
                    if (!this.joinedOnce)
                        throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
                    let n = new N(this, e, t, r);
                    return this._canPush() ? n.send() : (n.startTimeout(),
                        this.pushBuffer.push(n)),
                        n
                }

                _onMessage(e, t, r) {
                    return t
                }

                _isMember(e) {
                    return this.topic === e
                }

                _joinRef() {
                    return this.joinPush.ref
                }

                _trigger(e, t, r) {
                    var n, i;
                    let s = e.toLocaleLowerCase()
                        , {close: a, error: o, leave: l, join: c} = g;
                    if (r && [a, o, l, c].indexOf(s) >= 0 && r !== this._joinRef())
                        return;
                    let u = this._onMessage(s, t, r);
                    if (t && !u)
                        throw "channel onMessage callbacks must return the payload, modified or unmodified";
                    ["insert", "update", "delete"].includes(s) ? null === (n = this.bindings.postgres_changes) || void 0 === n || n.filter(e => {
                            var t, r, n;
                            return (null === (t = e.filter) || void 0 === t ? void 0 : t.event) === "*" || (null === (n = null === (r = e.filter) || void 0 === r ? void 0 : r.event) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === s
                        }
                    ).map(e => e.callback(u, r)) : null === (i = this.bindings[s]) || void 0 === i || i.filter(e => {
                            var r, n, i, a, o, l;
                            if (!["broadcast", "presence", "postgres_changes"].includes(s))
                                return e.type.toLocaleLowerCase() === s;
                            if ("id" in e) {
                                let s = e.id
                                    , a = null === (r = e.filter) || void 0 === r ? void 0 : r.event;
                                return s && (null === (n = t.ids) || void 0 === n ? void 0 : n.includes(s)) && ("*" === a || (null == a ? void 0 : a.toLocaleLowerCase()) === (null === (i = t.data) || void 0 === i ? void 0 : i.type.toLocaleLowerCase()))
                            }
                            {
                                let r = null === (o = null === (a = null == e ? void 0 : e.filter) || void 0 === a ? void 0 : a.event) || void 0 === o ? void 0 : o.toLocaleLowerCase();
                                return "*" === r || r === (null === (l = null == t ? void 0 : t.event) || void 0 === l ? void 0 : l.toLocaleLowerCase())
                            }
                        }
                    ).map(e => {
                            if ("object" == typeof u && "ids" in u) {
                                let e = u.data
                                    , {schema: t, table: r, commit_timestamp: n, type: i, errors: s} = e;
                                u = Object.assign(Object.assign({}, {
                                    schema: t,
                                    table: r,
                                    commit_timestamp: n,
                                    eventType: i,
                                    new: {},
                                    old: {},
                                    errors: s
                                }), this._getPayloadRecords(e))
                            }
                            e.callback(u, r)
                        }
                    )
                }

                _isClosed() {
                    return this.state === p.closed
                }

                _isJoined() {
                    return this.state === p.joined
                }

                _isJoining() {
                    return this.state === p.joining
                }

                _isLeaving() {
                    return this.state === p.leaving
                }

                _replyEventName(e) {
                    return `chan_reply_ ${e}`
                }

                _on(e, t, r) {
                    let n = e.toLocaleLowerCase()
                        , i = {
                        type: n,
                        filter: t,
                        callback: r
                    };
                    return this.bindings[n] ? this.bindings[n].push(i) : this.bindings[n] = [i],
                        this
                }

                _off(e, t) {
                    let r = e.toLocaleLowerCase();
                    return this.bindings[r] = this.bindings[r].filter(e => {
                            var n;
                            return !((null === (n = e.type) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === r && H.isEqual(e.filter, t))
                        }
                    ),
                        this
                }

                static isEqual(e, t) {
                    if (Object.keys(e).length !== Object.keys(t).length)
                        return !1;
                    for (let r in e)
                        if (e[r] !== t[r])
                            return !1;
                    return !0
                }

                _rejoinUntilConnected() {
                    this.rejoinTimer.scheduleTimeout(),
                    this.socket.isConnected() && this._rejoin()
                }

                _onClose(e) {
                    this._on(g.close, {}, e)
                }

                _onError(e) {
                    this._on(g.error, {}, t => e(t))
                }

                _canPush() {
                    return this.socket.isConnected() && this._isJoined()
                }

                _rejoin(e = this.timeout) {
                    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
                        this.state = p.joining,
                        this.joinPush.resend(e))
                }

                _getPayloadRecords(e) {
                    let t = {
                        new: {},
                        old: {}
                    };
                    return ("INSERT" === e.type || "UPDATE" === e.type) && (t.new = U(e.columns, e.record)),
                    ("UPDATE" === e.type || "DELETE" === e.type) && (t.old = U(e.columns, e.old_record)),
                        t
                }
            }

            let V = () => {
            }
                , W = "undefined" != typeof WebSocket;

            class Y {
                constructor(e, t) {
                    var n;
                    this.accessToken = null,
                        this.apiKey = null,
                        this.channels = [],
                        this.endPoint = "",
                        this.headers = R,
                        this.params = {},
                        this.timeout = 1e4,
                        this.heartbeatIntervalMs = 3e4,
                        this.heartbeatTimer = void 0,
                        this.pendingHeartbeatRef = null,
                        this.ref = 0,
                        this.logger = V,
                        this.conn = null,
                        this.sendBuffer = [],
                        this.serializer = new L,
                        this.stateChangeCallbacks = {
                            open: [],
                            close: [],
                            error: [],
                            message: []
                        },
                        this._resolveFetch = e => {
                            let t;
                            return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(require.bind(require, 17018)).then(({default: t}) => t(...e)) : fetch),
                                (...e) => t(...e)
                        }
                        ,
                        this.endPoint = `${e}/${m.websocket}`,
                        (null == t ? void 0 : t.transport) ? this.transport = t.transport : this.transport = null,
                    (null == t ? void 0 : t.params) && (this.params = t.params),
                    (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)),
                    (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
                    (null == t ? void 0 : t.logger) && (this.logger = t.logger),
                    (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
                    let i = null === (n = null == t ? void 0 : t.params) || void 0 === n ? void 0 : n.apikey;
                    i && (this.accessToken = i,
                        this.apiKey = i),
                        this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4,
                        this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)),
                        this.decode = (null == t ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer),
                        this.reconnectTimer = new I(async () => {
                                this.disconnect(),
                                    this.connect()
                            }
                            , this.reconnectAfterMs),
                        this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch)
                }

                connect() {
                    if (!this.conn) {
                        if (this.transport) {
                            this.conn = new this.transport(this._endPointURL(), void 0, {
                                headers: this.headers
                            });
                            return
                        }
                        if (W) {
                            this.conn = new WebSocket(this._endPointURL()),
                                this.setupConnection();
                            return
                        }
                        this.conn = new X(this._endPointURL(), void 0, {
                            close: () => {
                                this.conn = null
                            }
                        }),
                            require.e(5580).then(require.t.bind(require, 85580, 23)).then(({default: e}) => {
                                    this.conn = new e(this._endPointURL(), void 0, {
                                        headers: this.headers
                                    }),
                                        this.setupConnection()
                                }
                            )
                    }
                }

                disconnect(e, t) {
                    this.conn && (this.conn.onclose = function () {
                    }
                        ,
                        e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
                        this.conn = null,
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                        this.reconnectTimer.reset())
                }

                getChannels() {
                    return this.channels
                }

                async removeChannel(e) {
                    let t = await e.unsubscribe();
                    return 0 === this.channels.length && this.disconnect(),
                        t
                }

                async removeAllChannels() {
                    let e = await Promise.all(this.channels.map(e => e.unsubscribe()));
                    return this.disconnect(),
                        e
                }

                log(e, t, r) {
                    this.logger(e, t, r)
                }

                connectionState() {
                    switch (this.conn && this.conn.readyState) {
                        case f.connecting:
                            return v.Connecting;
                        case f.open:
                            return v.Open;
                        case f.closing:
                            return v.Closing;
                        default:
                            return v.Closed
                    }
                }

                isConnected() {
                    return this.connectionState() === v.Open
                }

                channel(e, t = {
                    config: {}
                }) {
                    let r = new H(`realtime:${e}`, t, this);
                    return this.channels.push(r),
                        r
                }

                push(e) {
                    let {topic: t, event: r, payload: n, ref: i} = e
                        , s = () => {
                            this.encode(e, e => {
                                    var t;
                                    null === (t = this.conn) || void 0 === t || t.send(e)
                                }
                            )
                        }
                    ;
                    this.log("push", `${t} ${r} (${i})`, n),
                        this.isConnected() ? s() : this.sendBuffer.push(s)
                }

                setAuth(e) {
                    this.accessToken = e,
                        this.channels.forEach(t => {
                                e && t.updateJoinPayload({
                                    access_token: e
                                }),
                                t.joinedOnce && t._isJoined() && t._push(g.access_token, {
                                    access_token: e
                                })
                            }
                        )
                }

                _makeRef() {
                    let e = this.ref + 1;
                    return e === this.ref ? this.ref = 0 : this.ref = e,
                        this.ref.toString()
                }

                _leaveOpenTopic(e) {
                    let t = this.channels.find(t => t.topic === e && (t._isJoined() || t._isJoining()));
                    t && (this.log("transport", `leaving duplicate topic "${e}"`),
                        t.unsubscribe())
                }

                _remove(e) {
                    this.channels = this.channels.filter(t => t._joinRef() !== e._joinRef())
                }

                setupConnection() {
                    this.conn && (this.conn.binaryType = "arraybuffer",
                        this.conn.onopen = () => this._onConnOpen(),
                        this.conn.onerror = e => this._onConnError(e),
                        this.conn.onmessage = e => this._onConnMessage(e),
                        this.conn.onclose = e => this._onConnClose(e))
                }

                _endPointURL() {
                    return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                        vsn: "1.0.0"
                    }))
                }

                _onConnMessage(e) {
                    this.decode(e.data, e => {
                            let {topic: t, event: r, payload: n, ref: i} = e;
                            (i && i === this.pendingHeartbeatRef || r === (null == n ? void 0 : n.type)) && (this.pendingHeartbeatRef = null),
                                this.log("receive", `${n.status || ""} ${t} ${r} ${i && "(" + i + ")" || ""}`, n),
                                this.channels.filter(e => e._isMember(t)).forEach(e => e._trigger(r, n, i)),
                                this.stateChangeCallbacks.message.forEach(t => t(e))
                        }
                    )
                }

                _onConnOpen() {
                    this.log("transport", `connected to ${this._endPointURL()}`),
                        this._flushSendBuffer(),
                        this.reconnectTimer.reset(),
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                        this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs),
                        this.stateChangeCallbacks.open.forEach(e => e())
                }

                _onConnClose(e) {
                    this.log("transport", "close", e),
                        this._triggerChanError(),
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                        this.reconnectTimer.scheduleTimeout(),
                        this.stateChangeCallbacks.close.forEach(t => t(e))
                }

                _onConnError(e) {
                    this.log("transport", e.message),
                        this._triggerChanError(),
                        this.stateChangeCallbacks.error.forEach(t => t(e))
                }

                _triggerChanError() {
                    this.channels.forEach(e => e._trigger(g.error))
                }

                _appendParams(e, t) {
                    if (0 === Object.keys(t).length)
                        return e;
                    let r = e.match(/\?/) ? "&" : "?"
                        , n = new URLSearchParams(t);
                    return `${e}${r}${n}`
                }

                _flushSendBuffer() {
                    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),
                        this.sendBuffer = [])
                }

                _sendHeartbeat() {
                    var e;
                    if (this.isConnected()) {
                        if (this.pendingHeartbeatRef) {
                            this.pendingHeartbeatRef = null,
                                this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
                            null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout");
                            return
                        }
                        this.pendingHeartbeatRef = this._makeRef(),
                            this.push({
                                topic: "phoenix",
                                event: "heartbeat",
                                payload: {},
                                ref: this.pendingHeartbeatRef
                            }),
                            this.setAuth(this.accessToken)
                    }
                }
            }

            class X {
                constructor(e, t, r) {
                    this.binaryType = "arraybuffer",
                        this.onclose = () => {
                        }
                        ,
                        this.onerror = () => {
                        }
                        ,
                        this.onmessage = () => {
                        }
                        ,
                        this.onopen = () => {
                        }
                        ,
                        this.readyState = f.connecting,
                        this.send = () => {
                        }
                        ,
                        this.url = null,
                        this.url = e,
                        this.close = r.close
                }
            }

            class Z extends Error {
                constructor(e) {
                    super(e),
                        this.__isStorageError = !0,
                        this.name = "StorageError"
                }
            }

            function Q(e) {
                return "object" == typeof e && null !== e && "__isStorageError" in e
            }

            class ee extends Z {
                constructor(e, t) {
                    super(e),
                        this.name = "StorageApiError",
                        this.status = t
                }

                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status
                    }
                }
            }

            class et extends Z {
                constructor(e, t) {
                    super(e),
                        this.name = "StorageUnknownError",
                        this.originalError = t
                }
            }

            let er = e => {
                    let t;
                    return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(require.bind(require, 17018)).then(({default: t}) => t(...e)) : fetch),
                        (...e) => t(...e)
                }
                , en = () => {
                    var e, t, n, i;
                    return e = void 0,
                        t = void 0,
                        n = void 0,
                        i = function* () {
                            return "undefined" == typeof Response ? (yield Promise.resolve().then(require.bind(require, 17018))).Response : Response
                        }
                        ,
                        new (n || (n = Promise))(function (r, s) {
                                function a(e) {
                                    try {
                                        l(i.next(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function o(e) {
                                    try {
                                        l(i.throw(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function l(e) {
                                    var t;
                                    e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                                            e(t)
                                        }
                                    )).then(a, o)
                                }

                                l((i = i.apply(e, t || [])).next())
                            }
                        )
                }
            ;
            var ei = function (e, t, r, n) {
                return new (r || (r = Promise))(function (i, s) {
                        function a(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                                    e(t)
                                }
                            )).then(a, o)
                        }

                        l((n = n.apply(e, t || [])).next())
                    }
                )
            };
            let es = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
                , ea = (e, t) => ei(void 0, void 0, void 0, function* () {
                    e instanceof (yield en()) ? e.json().then(r => {
                            t(new ee(es(r), e.status || 500))
                        }
                    ).catch(e => {
                            t(new et(es(e), e))
                        }
                    ) : t(new et(es(e), e))
                })
                , eo = (e, t, r, n) => {
                    let i = {
                        method: e,
                        headers: (null == t ? void 0 : t.headers) || {}
                    };
                    return "GET" === e ? i : (i.headers = Object.assign({
                        "Content-Type": "application/json"
                    }, null == t ? void 0 : t.headers),
                        i.body = JSON.stringify(n),
                        Object.assign(Object.assign({}, i), r))
                }
            ;

            function el(e, t, r, n, i, s) {
                return ei(this, void 0, void 0, function* () {
                    return new Promise((a, o) => {
                            e(r, eo(t, n, i, s)).then(e => {
                                    if (!e.ok)
                                        throw e;
                                    return (null == n ? void 0 : n.noResolveJson) ? e : e.json()
                                }
                            ).then(e => a(e)).catch(e => ea(e, o))
                        }
                    )
                })
            }

            function ec(e, t, r, n) {
                return ei(this, void 0, void 0, function* () {
                    return el(e, "GET", t, r, n)
                })
            }

            function eu(e, t, r, n, i) {
                return ei(this, void 0, void 0, function* () {
                    return el(e, "POST", t, n, i, r)
                })
            }

            function eh(e, t, r, n, i) {
                return ei(this, void 0, void 0, function* () {
                    return el(e, "DELETE", t, n, i, r)
                })
            }

            var ed = function (e, t, r, n) {
                return new (r || (r = Promise))(function (i, s) {
                        function a(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                                    e(t)
                                }
                            )).then(a, o)
                        }

                        l((n = n.apply(e, t || [])).next())
                    }
                )
            };
            let ef = {
                limit: 100,
                offset: 0,
                sortBy: {
                    column: "name",
                    order: "asc"
                }
            }
                , ep = {
                cacheControl: "3600",
                contentType: "text/plain;charset=UTF-8",
                upsert: !1
            };

            class eg {
                constructor(e, t = {}, r, n) {
                    this.url = e,
                        this.headers = t,
                        this.bucketId = r,
                        this.fetch = er(n)
                }

                uploadOrUpdate(e, t, r, n) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            let i;
                            let s = Object.assign(Object.assign({}, ep), n)
                                , a = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                                "x-upsert": String(s.upsert)
                            });
                            "undefined" != typeof Blob && r instanceof Blob ? ((i = new FormData).append("cacheControl", s.cacheControl),
                                i.append("", r)) : "undefined" != typeof FormData && r instanceof FormData ? (i = r).append("cacheControl", s.cacheControl) : (i = r,
                                a["cache-control"] = `max-age=${s.cacheControl}`,
                                a["content-type"] = s.contentType);
                            let o = this._removeEmptyFolders(t)
                                , l = this._getFinalPath(o)
                                , c = yield this.fetch(`${this.url}/object/${l}`, Object.assign({
                                method: e,
                                body: i,
                                headers: a
                            }, (null == s ? void 0 : s.duplex) ? {
                                duplex: s.duplex
                            } : {}))
                                , u = yield c.json();
                            if (c.ok)
                                return {
                                    data: {
                                        path: o,
                                        id: u.Id,
                                        fullPath: u.Key
                                    },
                                    error: null
                                };
                            return {
                                data: null,
                                error: u
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                upload(e, t, r) {
                    return ed(this, void 0, void 0, function* () {
                        return this.uploadOrUpdate("POST", e, t, r)
                    })
                }

                uploadToSignedUrl(e, t, r, n) {
                    return ed(this, void 0, void 0, function* () {
                        let i = this._removeEmptyFolders(e)
                            , s = this._getFinalPath(i)
                            , a = new URL(this.url + `/object/upload/sign/${s}`);
                        a.searchParams.set("token", t);
                        try {
                            let e;
                            let t = Object.assign({
                                upsert: ep.upsert
                            }, n)
                                , s = Object.assign(Object.assign({}, this.headers), {
                                "x-upsert": String(t.upsert)
                            });
                            "undefined" != typeof Blob && r instanceof Blob ? ((e = new FormData).append("cacheControl", t.cacheControl),
                                e.append("", r)) : "undefined" != typeof FormData && r instanceof FormData ? (e = r).append("cacheControl", t.cacheControl) : (e = r,
                                s["cache-control"] = `max-age=${t.cacheControl}`,
                                s["content-type"] = t.contentType);
                            let o = yield this.fetch(a.toString(), {
                                method: "PUT",
                                body: e,
                                headers: s
                            })
                                , l = yield o.json();
                            if (o.ok)
                                return {
                                    data: {
                                        path: i,
                                        fullPath: l.Key
                                    },
                                    error: null
                                };
                            return {
                                data: null,
                                error: l
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                createSignedUploadUrl(e) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            let t = this._getFinalPath(e)
                                , r = yield eu(this.fetch, `${this.url}/object/upload/sign/${t}`, {}, {
                                headers: this.headers
                            })
                                , n = new URL(this.url + r.url)
                                , i = n.searchParams.get("token");
                            if (!i)
                                throw new Z("No token returned by API");
                            return {
                                data: {
                                    signedUrl: n.toString(),
                                    path: e,
                                    token: i
                                },
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                update(e, t, r) {
                    return ed(this, void 0, void 0, function* () {
                        return this.uploadOrUpdate("PUT", e, t, r)
                    })
                }

                move(e, t) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield eu(this.fetch, `${this.url}/object/move`, {
                                    bucketId: this.bucketId,
                                    sourceKey: e,
                                    destinationKey: t
                                }, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                copy(e, t) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: {
                                    path: (yield eu(this.fetch, `${this.url}/object/copy`, {
                                        bucketId: this.bucketId,
                                        sourceKey: e,
                                        destinationKey: t
                                    }, {
                                        headers: this.headers
                                    })).Key
                                },
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                createSignedUrl(e, t, r) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            let n = this._getFinalPath(e)
                                , i = yield eu(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({
                                    expiresIn: t
                                }, (null == r ? void 0 : r.transform) ? {
                                    transform: r.transform
                                } : {}), {
                                    headers: this.headers
                                })
                                ,
                                s = (null == r ? void 0 : r.download) ? `&download=${!0 === r.download ? "" : r.download}` : "";
                            return {
                                data: i = {
                                    signedUrl: encodeURI(`${this.url}${i.signedURL}${s}`)
                                },
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                createSignedUrls(e, t, r) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            let n = yield eu(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                                    expiresIn: t,
                                    paths: e
                                }, {
                                    headers: this.headers
                                })
                                ,
                                i = (null == r ? void 0 : r.download) ? `&download=${!0 === r.download ? "" : r.download}` : "";
                            return {
                                data: n.map(e => Object.assign(Object.assign({}, e), {
                                    signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${i}`) : null
                                })),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                download(e, t) {
                    return ed(this, void 0, void 0, function* () {
                        let r = void 0 !== (null == t ? void 0 : t.transform)
                            , n = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {})
                            , i = n ? `?${n}` : "";
                        try {
                            let t = this._getFinalPath(e)
                                ,
                                n = yield ec(this.fetch, `${this.url}/${r ? "render/image/authenticated" : "object"}/${t}${i}`, {
                                    headers: this.headers,
                                    noResolveJson: !0
                                });
                            return {
                                data: yield n.blob(),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                getPublicUrl(e, t) {
                    let r = this._getFinalPath(e)
                        , n = []
                        ,
                        i = (null == t ? void 0 : t.download) ? `download=${!0 === t.download ? "" : t.download}` : "";
                    "" !== i && n.push(i);
                    let s = void 0 !== (null == t ? void 0 : t.transform)
                        , a = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {});
                    "" !== a && n.push(a);
                    let o = n.join("&");
                    return "" !== o && (o = `?${o}`),
                        {
                            data: {
                                publicUrl: encodeURI(`${this.url}/${s ? "render/image" : "object"}/public/${r}${o}`)
                            }
                        }
                }

                remove(e) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield eh(this.fetch, `${this.url}/object/${this.bucketId}`, {
                                    prefixes: e
                                }, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                list(e, t, r) {
                    return ed(this, void 0, void 0, function* () {
                        try {
                            let n = Object.assign(Object.assign(Object.assign({}, ef), t), {
                                prefix: e || ""
                            });
                            return {
                                data: yield eu(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, {
                                    headers: this.headers
                                }, r),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                _getFinalPath(e) {
                    return `${this.bucketId}/${e}`
                }

                _removeEmptyFolders(e) {
                    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
                }

                transformOptsToQueryString(e) {
                    let t = [];
                    return e.width && t.push(`width=${e.width}`),
                    e.height && t.push(`height=${e.height}`),
                    e.resize && t.push(`resize=${e.resize}`),
                    e.format && t.push(`format=${e.format}`),
                    e.quality && t.push(`quality=${e.quality}`),
                        t.join("&")
                }
            }

            let em = {
                "X-Client-Info": "storage-js/2.5.5"
            };
            var ev = function (e, t, r, n) {
                return new (r || (r = Promise))(function (i, s) {
                        function a(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                s(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                                    e(t)
                                }
                            )).then(a, o)
                        }

                        l((n = n.apply(e, t || [])).next())
                    }
                )
            };

            class ey {
                constructor(e, t = {}, r) {
                    this.url = e,
                        this.headers = Object.assign(Object.assign({}, em), t),
                        this.fetch = er(r)
                }

                listBuckets() {
                    return ev(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield ec(this.fetch, `${this.url}/bucket`, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                getBucket(e) {
                    return ev(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield ec(this.fetch, `${this.url}/bucket/${e}`, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                createBucket(e, t = {
                    public: !1
                }) {
                    return ev(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield eu(this.fetch, `${this.url}/bucket`, {
                                    id: e,
                                    name: e,
                                    public: t.public,
                                    file_size_limit: t.fileSizeLimit,
                                    allowed_mime_types: t.allowedMimeTypes
                                }, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                updateBucket(e, t) {
                    return ev(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield function (e, t, r, n, i) {
                                    return ei(this, void 0, void 0, function* () {
                                        return el(e, "PUT", t, n, void 0, r)
                                    })
                                }(this.fetch, `${this.url}/bucket/${e}`, {
                                    id: e,
                                    name: e,
                                    public: t.public,
                                    file_size_limit: t.fileSizeLimit,
                                    allowed_mime_types: t.allowedMimeTypes
                                }, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                emptyBucket(e) {
                    return ev(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield eu(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }

                deleteBucket(e) {
                    return ev(this, void 0, void 0, function* () {
                        try {
                            return {
                                data: yield eh(this.fetch, `${this.url}/bucket/${e}`, {}, {
                                    headers: this.headers
                                }),
                                error: null
                            }
                        } catch (e) {
                            if (Q(e))
                                return {
                                    data: null,
                                    error: e
                                };
                            throw e
                        }
                    })
                }
            }

            class eb extends ey {
                constructor(e, t = {}, r) {
                    super(e, t, r)
                }

                from(e) {
                    return new eg(this.url, this.headers, e, this.fetch)
                }
            }

            let platform = "";
            platform = "undefined" != typeof Deno
                ? "deno"
                : "undefined" != typeof document
                    ? "web"
                    : "undefined" != typeof navigator && "ReactNative" === navigator.product
                        ? "react-native"
                        : "node";
            let global_global = {
                headers: {
                    "X-Client-Info": `supabase-js-${platform}/2.39.8`
                }
            }
            let global_db = {
                schema: "public"
            }
            let eS = {
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: true,
                flowType: "implicit"
            }
            let global_realtime = {}
            let e$ = e => {
                let t;
                return t = e || ("undefined" == typeof fetch ? $.default : fetch),
                    (...e) => t(...e)
            }
            let eO = () => "undefined" == typeof Headers ? $.Headers : Headers
            let eT = (e, t, r) => {
                let n = e$(r)
                    , i = eO();
                return (r, s) => {
                    var a, o, l, c;
                    return a = void 0,
                        o = void 0,
                        l = void 0,
                        c = function* () {
                            var a;
                            let o = null !== (a = yield t()) && void 0 !== a ? a : e
                                , l = new i(null == s ? void 0 : s.headers);
                            return l.has("apikey") || l.set("apikey", e),
                            l.has("Authorization") || l.set("Authorization", `Bearer ${o}`),
                                n(r, Object.assign(Object.assign({}, s), {
                                    headers: l
                                }))
                        }
                        ,
                        new (l || (l = Promise))(function (e, t) {
                                function r(e) {
                                    try {
                                        i(c.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function n(e) {
                                    try {
                                        i(c.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function i(t) {
                                    var i;
                                    t.done ? e(t.value) : ((i = t.value) instanceof l ? i : new l(function (e) {
                                            e(i)
                                        }
                                    )).then(r, n)
                                }

                                i((c = c.apply(a, o || [])).next())
                            }
                        )
                }
            }
            let eC = () => "undefined" != typeof document
            let eA = {
                tested: !1,
                writable: !1
            }
            let ej = () => {
                if (!eC())
                    return !1;
                try {
                    if ("object" != typeof globalThis.localStorage)
                        return !1
                } catch (e) {
                    return !1
                }
                if (eA.tested)
                    return eA.writable;
                let e = `lswt-${Math.random()}${Math.random()}`;
                try {
                    globalThis.localStorage.setItem(e, e),
                        globalThis.localStorage.removeItem(e),
                        eA.tested = !0,
                        eA.writable = !0
                } catch (e) {
                    eA.tested = !0,
                        eA.writable = !1
                }
                return eA.writable
            }


            function eP(e) {
                let t = {}
                    , r = new URL(e);
                if (r.hash && "#" === r.hash[0])
                    try {
                        new URLSearchParams(r.hash.substring(1)).forEach((e, r) => {
                                t[r] = e
                            }
                        )
                    } catch (e) {
                    }
                return r.searchParams.forEach((e, r) => {
                        t[r] = e
                    }
                ),
                    t
            }

            let ex = e => {
                let t;
                return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(require.bind(require, 17018)).then(({default: t}) => t(...e)) : fetch),
                    (...e) => t(...e)
            }
            let eR = e => "object" == typeof e && null !== e && "status" in e && "ok" in e && "json" in e && "function" == typeof e.json
            let eI = async (e, t, r) => {
                await e.setItem(t, JSON.stringify(r))
            }
            let eL = async (storage, key) => {
                let value = await storage.getItem(key);
                if (!value) {
                    return null;
                }
                try {
                    return JSON.parse(value)
                } catch (e) {
                    return value
                }
            }
            let eN = async (e, t) => {
                await e.removeItem(t)
            }


            class eD {
                constructor() {
                    this.promise = new eD.promiseConstructor((e, t) => {
                            this.resolve = e,
                                this.reject = t
                        }
                    )
                }
            }

            function eU(e) {
                let t = e.split(".");
                if (3 !== t.length)
                    throw Error("JWT is not valid: not a JWT structure");
                if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1]))
                    throw Error("JWT is not valid: payload is not in base64url format");
                return JSON.parse(function (e) {
                    let t, r, n, i, s, a, o;
                    let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        , c = ""
                        , u = 0;
                    for (e = e.replace("-", "+").replace("_", "/"); u < e.length;)
                        i = l.indexOf(e.charAt(u++)),
                            s = l.indexOf(e.charAt(u++)),
                            a = l.indexOf(e.charAt(u++)),
                            o = l.indexOf(e.charAt(u++)),
                            t = i << 2 | s >> 4,
                            r = (15 & s) << 4 | a >> 2,
                            n = (3 & a) << 6 | o,
                            c += String.fromCharCode(t),
                        64 != a && 0 != r && (c += String.fromCharCode(r)),
                        64 != o && 0 != n && (c += String.fromCharCode(n));
                    return c
                }(t[1]))
            }

            async function eF(e) {
                return await new Promise(t => {
                        setTimeout(() => t(null), e)
                    }
                )
            }

            function eM(e) {
                return ("0" + e.toString(16)).substr(-2)
            }

            function eG() {
                let e = new Uint32Array(56);
                if ("undefined" == typeof crypto) {
                    let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
                        , t = e.length
                        , r = "";
                    for (let n = 0; n < 56; n++)
                        r += e.charAt(Math.floor(Math.random() * t));
                    return r
                }
                return crypto.getRandomValues(e),
                    Array.from(e, eM).join("")
            }

            async function ez(e) {
                let t = new TextEncoder().encode(e)
                    , r = await crypto.subtle.digest("SHA-256", t);
                return Array.from(new Uint8Array(r)).map(e => String.fromCharCode(e)).join("")
            }

            async function eB(e) {
                return "undefined" != typeof crypto && void 0 !== crypto.subtle && "undefined" != typeof TextEncoder ? btoa(await ez(e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : (console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
                    e)
            }

            eD.promiseConstructor = Promise;

            class eq extends Error {
                constructor(e, t) {
                    super(e),
                        this.__isAuthError = !0,
                        this.name = "AuthError",
                        this.status = t
                }
            }

            function eK(e) {
                return "object" == typeof e && null !== e && "__isAuthError" in e
            }

            class eJ extends eq {
                constructor(e, t) {
                    super(e, t),
                        this.name = "AuthApiError",
                        this.status = t
                }

                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status
                    }
                }
            }

            class eH extends eq {
                constructor(e, t) {
                    super(e),
                        this.name = "AuthUnknownError",
                        this.originalError = t
                }
            }

            class eV extends eq {
                constructor(e, t, r) {
                    super(e),
                        this.name = t,
                        this.status = r
                }

                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status
                    }
                }
            }

            class eW extends eV {
                constructor() {
                    super("Auth session missing!", "AuthSessionMissingError", 400)
                }
            }

            class eY extends eV {
                constructor() {
                    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500)
                }
            }

            class eX extends eV {
                constructor(e) {
                    super(e, "AuthInvalidCredentialsError", 400)
                }
            }

            class eZ extends eV {
                constructor(e, t = null) {
                    super(e, "AuthImplicitGrantRedirectError", 500),
                        this.details = null,
                        this.details = t
                }

                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details
                    }
                }
            }

            class eQ extends eV {
                constructor(e, t = null) {
                    super(e, "AuthPKCEGrantCodeExchangeError", 500),
                        this.details = null,
                        this.details = t
                }

                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details
                    }
                }
            }

            class e0 extends eV {
                constructor(e, t) {
                    super(e, "AuthRetryableFetchError", t)
                }
            }

            function e1(e) {
                return eK(e) && "AuthRetryableFetchError" === e.name
            }

            class e2 extends eV {
                constructor(e, t, r) {
                    super(e, "AuthWeakPasswordError", t),
                        this.reasons = r
                }
            }

            var e5 = function (e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            };
            let e3 = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
            let e4 = [502, 503, 504];

            async function e9(e) {
                let t;
                if (!eR(e))
                    throw new e0(e3(e), 0);
                if (e4.includes(e.status))
                    throw new e0(e3(e), e.status);
                try {
                    t = await e.json()
                } catch (e) {
                    throw new eH(e3(e), e)
                }
                if ("object" == typeof t && t && "object" == typeof t.weak_password && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((e, t) => e && "string" == typeof t, !0))
                    throw new e2(e3(t), e.status, t.weak_password.reasons);
                throw new eJ(e3(t), e.status || 500)
            }

            let e6 = (e, t, r, n) => {
                let i = {
                    method: e,
                    headers: (null == t ? void 0 : t.headers) || {}
                };
                return "GET" === e ? i : (i.headers = Object.assign({
                    "Content-Type": "application/json;charset=UTF-8"
                }, null == t ? void 0 : t.headers),
                    i.body = JSON.stringify(n),
                    Object.assign(Object.assign({}, i), r))
            }

            async function e8(e, t, r, n) {
                var i;
                let s = Object.assign({}, null == n ? void 0 : n.headers);
                (null == n ? void 0 : n.jwt) && (s.Authorization = `Bearer ${n.jwt}`);
                let a = null !== (i = null == n ? void 0 : n.query) && void 0 !== i ? i : {};
                (null == n ? void 0 : n.redirectTo) && (a.redirect_to = n.redirectTo);
                let o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : ""
                    , l = await e7(e, t, r + o, {
                    headers: s,
                    noResolveJson: null == n ? void 0 : n.noResolveJson
                }, {}, null == n ? void 0 : n.body);
                return (null == n ? void 0 : n.xform) ? null == n ? void 0 : n.xform(l) : {
                    data: Object.assign({}, l),
                    error: null
                }
            }

            async function e7(e, t, r, n, i, s) {
                let a;
                let o = e6(t, n, i, s);
                try {
                    a = await e(r, o)
                } catch (e) {
                    throw console.error(e),
                        new e0(e3(e), 0)
                }
                if (a.ok || await e9(a),
                    null == n ? void 0 : n.noResolveJson)
                    return a;
                try {
                    return await a.json()
                } catch (e) {
                    await e9(e)
                }
            }

            function te(e) {
                var t, r;
                let n = null;
                return e.access_token && e.refresh_token && e.expires_in && (n = Object.assign({}, e),
                    !e.expires_at) && (n.expires_at = (r = e.expires_in,
                Math.round(Date.now() / 1e3) + r)),
                    {
                        data: {
                            session: n,
                            user: null !== (t = e.user) && void 0 !== t ? t : e
                        },
                        error: null
                    }
            }

            function tt(e) {
                let t = te(e);
                return !t.error && e.weak_password && "object" == typeof e.weak_password && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && "string" == typeof e.weak_password.message && e.weak_password.reasons.reduce((e, t) => e && "string" == typeof t, !0) && (t.data.weak_password = e.weak_password),
                    t
            }

            function tr(e) {
                var t;
                return {
                    data: {
                        user: null !== (t = e.user) && void 0 !== t ? t : e
                    },
                    error: null
                }
            }

            function tn(e) {
                return {
                    data: e,
                    error: null
                }
            }

            function ti(e) {
                let {action_link: t, email_otp: r, hashed_token: n, redirect_to: i, verification_type: s} = e;
                return {
                    data: {
                        properties: {
                            action_link: t,
                            email_otp: r,
                            hashed_token: n,
                            redirect_to: i,
                            verification_type: s
                        },
                        user: Object.assign({}, e5(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]))
                    },
                    error: null
                }
            }

            function ts(e) {
                return e
            }

            var ta = function (e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            class to {
                constructor({url: e = "", headers: t = {}, fetch: r}) {
                    this.url = e,
                        this.headers = t,
                        this.fetch = ex(r),
                        this.mfa = {
                            listFactors: this._listFactors.bind(this),
                            deleteFactor: this._deleteFactor.bind(this)
                        }
                }

                async signOut(e, t = "global") {
                    try {
                        return await e8(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                            headers: this.headers,
                            jwt: e,
                            noResolveJson: !0
                        }),
                            {
                                data: null,
                                error: null
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async inviteUserByEmail(e, t = {}) {
                    try {
                        return await e8(this.fetch, "POST", `${this.url}/invite`, {
                            body: {
                                email: e,
                                data: t.data
                            },
                            headers: this.headers,
                            redirectTo: t.redirectTo,
                            xform: tr
                        })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async generateLink(e) {
                    try {
                        let {options: t} = e
                            , r = ta(e, ["options"])
                            , n = Object.assign(Object.assign({}, r), t);
                        return "newEmail" in r && (n.new_email = null == r ? void 0 : r.newEmail,
                            delete n.newEmail),
                            await e8(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                                body: n,
                                headers: this.headers,
                                xform: ti,
                                redirectTo: null == t ? void 0 : t.redirectTo
                            })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    properties: null,
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async createUser(e) {
                    try {
                        return await e8(this.fetch, "POST", `${this.url}/admin/users`, {
                            body: e,
                            headers: this.headers,
                            xform: tr
                        })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async listUsers(e) {
                    var t, r, n, i, s, a, o;
                    try {
                        let l = {
                            nextPage: null,
                            lastPage: 0,
                            total: 0
                        }
                            , c = await e8(this.fetch, "GET", `${this.url}/admin/users`, {
                            headers: this.headers,
                            noResolveJson: !0,
                            query: {
                                page: null !== (r = null === (t = null == e ? void 0 : e.page) || void 0 === t ? void 0 : t.toString()) && void 0 !== r ? r : "",
                                per_page: null !== (i = null === (n = null == e ? void 0 : e.perPage) || void 0 === n ? void 0 : n.toString()) && void 0 !== i ? i : ""
                            },
                            xform: ts
                        });
                        if (c.error)
                            throw c.error;
                        let u = await c.json()
                            , h = null !== (s = c.headers.get("x-total-count")) && void 0 !== s ? s : 0
                            ,
                            d = null !== (o = null === (a = c.headers.get("link")) || void 0 === a ? void 0 : a.split(",")) && void 0 !== o ? o : [];
                        return d.length > 0 && (d.forEach(e => {
                                let t = parseInt(e.split(";")[0].split("=")[1].substring(0, 1))
                                    , r = JSON.parse(e.split(";")[1].split("=")[1]);
                                l[`${r}Page`] = t
                            }
                        ),
                            l.total = parseInt(h)),
                            {
                                data: Object.assign(Object.assign({}, u), l),
                                error: null
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    users: []
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async getUserById(e) {
                    try {
                        return await e8(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                            headers: this.headers,
                            xform: tr
                        })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async updateUserById(e, t) {
                    try {
                        return await e8(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                            body: t,
                            headers: this.headers,
                            xform: tr
                        })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async deleteUser(e, t = !1) {
                    try {
                        return await e8(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                            headers: this.headers,
                            body: {
                                should_soft_delete: t
                            },
                            xform: tr
                        })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async _listFactors(e) {
                    try {
                        let {
                            data: t,
                            error: r
                        } = await e8(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                            headers: this.headers,
                            xform: e => ({
                                data: {
                                    factors: e
                                },
                                error: null
                            })
                        });
                        return {
                            data: t,
                            error: r
                        }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async _deleteFactor(e) {
                    try {
                        return {
                            data: await e8(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                                headers: this.headers
                            }),
                            error: null
                        }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }
            }

            let tl = "0.0.0"
            let tc = {
                "X-Client-Info": `gotrue-js/${tl}`
            }
            let tu = {
                getItem: e => ej() ? globalThis.localStorage.getItem(e) : null,
                setItem: (e, t) => {
                    ej() && globalThis.localStorage.setItem(e, t)
                },
                removeItem: e => {
                    ej() && globalThis.localStorage.removeItem(e)
                }
            }

            function th(e = {}) {
                return {
                    getItem: t => e[t] || null,
                    setItem: (t, r) => {
                        e[t] = r
                    }
                    ,
                    removeItem: t => {
                        delete e[t]
                    }
                }
            }

            let td = {
                debug: !!(globalThis && ej() && globalThis.localStorage && "true" === globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))
            }

            class tf extends Error {
                constructor(e) {
                    super(e),
                        this.isAcquireTimeout = !0
                }
            }

            class tp extends tf {
            }

            async function tg(e, t, r) {
                td.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
                let n = new globalThis.AbortController;
                return t > 0 && setTimeout(() => {
                        n.abort(),
                        td.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
                    }
                    , t),
                    await globalThis.navigator.locks.request(e, 0 === t ? {
                            mode: "exclusive",
                            ifAvailable: !0
                        } : {
                            mode: "exclusive",
                            signal: n.signal
                        }, async n => {
                            if (n) {
                                td.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, n.name);
                                try {
                                    return await r()
                                } finally {
                                    td.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, n.name)
                                }
                            } else {
                                if (0 === t)
                                    throw td.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                                        new tp(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
                                if (td.debug)
                                    try {
                                        let e = await globalThis.navigator.locks.query();
                                        console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "))
                                    } catch (e) {
                                        console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e)
                                    }
                                return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
                                    await r()
                            }
                        }
                    )
            }

            !function () {
                if ("object" != typeof globalThis) {
                    try {
                        Object.defineProperty(Object.prototype, "__magic__", {
                            get: function () {
                                return this
                            },
                            configurable: true
                        })
                        __magic__.globalThis = __magic__
                        delete Object.prototype.__magic__
                    } catch (e) {
                        "undefined" != typeof self && (self.globalThis = self)
                    }
                }
            }()
            let tm = {
                url: "http://localhost:9999",
                storageKey: "supabase.auth.token",
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: true,
                headers: tc,
                flowType: "implicit",
                debug: false
            };

            async function tv(e, t, r) {
                return await r()
            }

            class Client {
                constructor(options) {
                    var t, r;
                    this.memoryStorage = null
                    this.stateChangeEmitters = new Map()
                    this.autoRefreshTicker = null
                    this.visibilityChangedCallback = null
                    this.refreshingDeferred = null
                    this.initializePromise = null
                    this.detectSessionInUrl = true
                    this.lockAcquired = false
                    this.pendingInLock = []
                    this.broadcastChannel = null
                    this.logger = console.log
                    this.instanceID = Client.nextInstanceID
                    Client.nextInstanceID += 1
                    if (this.instanceID > 0 && eC()) {
                        console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.")
                    }

                    let n = Object.assign(Object.assign({}, tm), options)

                    this.logDebugMessages = !!n.debug
                    "function" == typeof n.debug && (this.logger = n.debug)
                    this.persistSession = n.persistSession
                    this.storageKey = n.storageKey
                    this.autoRefreshToken = n.autoRefreshToken
                    this.admin = new to({
                        url: n.url,
                        headers: n.headers,
                        fetch: n.fetch
                    })
                    this.url = n.url
                    this.headers = n.headers
                    this.fetch = ex(n.fetch)
                    this.lock = n.lock || tv
                    this.detectSessionInUrl = n.detectSessionInUrl
                    this.flowType = n.flowType
                    n.lock
                        ? this.lock = n.lock
                        : eC() && (null === (t = null == globalThis ? void 0 : globalThis.navigator) || void 0 === t ? void 0 : t.locks)
                            ? this.lock = tg
                            : this.lock = tv
                    this.mfa = {
                        verify: this._verify.bind(this),
                        enroll: this._enroll.bind(this),
                        unenroll: this._unenroll.bind(this),
                        challenge: this._challenge.bind(this),
                        listFactors: this._listFactors.bind(this),
                        challengeAndVerify: this._challengeAndVerify.bind(this),
                        getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
                    }
                    this.persistSession
                        ? n.storage
                            ? this.storage = n.storage
                            : ej()
                                ? this.storage = tu
                                : (this.memoryStorage = {},
                                    this.storage = th(this.memoryStorage))
                        : (this.memoryStorage = {},
                            this.storage = th(this.memoryStorage))
                    if (eC() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                        try {
                            this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                        } catch (e) {
                            console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e)
                        }
                        r = this.broadcastChannel
                        null === r || undefined === r || r.addEventListener("message", async evt => {
                            this._debug("received broadcast notification from other tab or client", evt)
                            await this._notifyAllSubscribers(evt.data.event, evt.data.session, false)
                        })
                    }
                    this.initialize()
                }

                _debug(...e) {
                    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${tl}) ${new Date().toISOString()}`, ...e),
                        this
                }

                async initialize() {
                    if (!this.initializePromise) {
                        this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))()
                    }
                    return await this.initializePromise
                }

                async _initialize() {
                    try {
                        let e = !!eC() && await this._isPKCEFlow();
                        if (this._debug("#_initialize()", "begin", "is PKCE flow", e),
                        e || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                            let {data: t, error: r} = await this._getSessionFromURL(e);
                            if (r) {
                                if (this._debug("#_initialize()", "error detecting session from URL", r),
                                (null == r ? void 0 : r.message) === "Identity is already linked" || (null == r ? void 0 : r.message) === "Identity is already linked to another user")
                                    return {
                                        error: r
                                    };
                                return await this._removeSession(),
                                    {
                                        error: r
                                    }
                            }
                            let {session: n, redirectType: i} = t;
                            return this._debug("#_initialize()", "detected session in URL", n, "redirect type", i),
                                await this._saveSession(n),
                                setTimeout(async () => {
                                        "recovery" === i ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", n) : await this._notifyAllSubscribers("SIGNED_IN", n)
                                    }
                                    , 0),
                                {
                                    error: null
                                }
                        }
                        return await this._recoverAndRefresh(),
                            {
                                error: null
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                error: e
                            };
                        return {
                            error: new eH("Unexpected error during initialization", e)
                        }
                    } finally {
                        await this._handleVisibilityChange()
                        this._debug("#_initialize()", "end")
                    }
                }

                async signUp(e) {
                    var t, r, n;
                    try {
                        let i;
                        if (await this._removeSession(),
                        "email" in e) {
                            let {email: r, password: n, options: s} = e
                                , a = null
                                , o = null;
                            if ("pkce" === this.flowType) {
                                let e = eG();
                                await eI(this.storage, `${this.storageKey}-code-verifier`, e),
                                    a = await eB(e),
                                    o = e === a ? "plain" : "s256"
                            }
                            i = await e8(this.fetch, "POST", `${this.url}/signup`, {
                                headers: this.headers,
                                redirectTo: null == s ? void 0 : s.emailRedirectTo,
                                body: {
                                    email: r,
                                    password: n,
                                    data: null !== (t = null == s ? void 0 : s.data) && void 0 !== t ? t : {},
                                    gotrue_meta_security: {
                                        captcha_token: null == s ? void 0 : s.captchaToken
                                    },
                                    code_challenge: a,
                                    code_challenge_method: o
                                },
                                xform: te
                            })
                        } else if ("phone" in e) {
                            let {phone: t, password: s, options: a} = e;
                            i = await e8(this.fetch, "POST", `${this.url}/signup`, {
                                headers: this.headers,
                                body: {
                                    phone: t,
                                    password: s,
                                    data: null !== (r = null == a ? void 0 : a.data) && void 0 !== r ? r : {},
                                    channel: null !== (n = null == a ? void 0 : a.channel) && void 0 !== n ? n : "sms",
                                    gotrue_meta_security: {
                                        captcha_token: null == a ? void 0 : a.captchaToken
                                    }
                                },
                                xform: te
                            })
                        } else
                            throw new eX("You must provide either an email or phone number and a password");
                        let {data: s, error: a} = i;
                        if (a || !s)
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: a
                            };
                        let o = s.session
                            , l = s.user;
                        return s.session && (await this._saveSession(s.session),
                            await this._notifyAllSubscribers("SIGNED_IN", o)),
                            {
                                data: {
                                    user: l,
                                    session: o
                                },
                                error: null
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async signInWithPassword(e) {
                    try {
                        let t;
                        if (await this._removeSession(),
                        "email" in e) {
                            let {email: r, password: n, options: i} = e;
                            t = await e8(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                                headers: this.headers,
                                body: {
                                    email: r,
                                    password: n,
                                    gotrue_meta_security: {
                                        captcha_token: null == i ? void 0 : i.captchaToken
                                    }
                                },
                                xform: tt
                            })
                        } else if ("phone" in e) {
                            let {phone: r, password: n, options: i} = e;
                            t = await e8(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                                headers: this.headers,
                                body: {
                                    phone: r,
                                    password: n,
                                    gotrue_meta_security: {
                                        captcha_token: null == i ? void 0 : i.captchaToken
                                    }
                                },
                                xform: tt
                            })
                        } else
                            throw new eX("You must provide either an email or phone number and a password");
                        let {data: r, error: n} = t;
                        if (n)
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: n
                            };
                        if (!r || !r.session || !r.user)
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: new eY
                            };
                        return r.session && (await this._saveSession(r.session),
                            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
                            {
                                data: Object.assign({
                                    user: r.user,
                                    session: r.session
                                }, r.weak_password ? {
                                    weakPassword: r.weak_password
                                } : null),
                                error: n
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async signInWithOAuth(e) {
                    var t, r, n, i;
                    return await this._removeSession(),
                        await this._handleProviderSignIn(e.provider, {
                            redirectTo: null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                            scopes: null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
                            queryParams: null === (n = e.options) || void 0 === n ? void 0 : n.queryParams,
                            skipBrowserRedirect: null === (i = e.options) || void 0 === i ? void 0 : i.skipBrowserRedirect
                        })
                }

                async exchangeCodeForSession(e) {
                    return await this.initializePromise,
                        this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
                }

                async _exchangeCodeForSession(e) {
                    let t = await eL(this.storage, `${this.storageKey}-code-verifier`)
                        , [r, n] = (null != t ? t : "").split("/")
                        , {data: i, error: s} = await e8(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                        headers: this.headers,
                        body: {
                            auth_code: e,
                            code_verifier: r
                        },
                        xform: te
                    });
                    return (await eN(this.storage, `${this.storageKey}-code-verifier`),
                        s) ? {
                        data: {
                            user: null,
                            session: null,
                            redirectType: null
                        },
                        error: s
                    } : i && i.session && i.user ? (i.session && (await this._saveSession(i.session),
                        await this._notifyAllSubscribers("SIGNED_IN", i.session)),
                        {
                            data: Object.assign(Object.assign({}, i), {
                                redirectType: null != n ? n : null
                            }),
                            error: s
                        }) : {
                        data: {
                            user: null,
                            session: null,
                            redirectType: null
                        },
                        error: new eY
                    }
                }

                async signInWithIdToken(e) {
                    await this._removeSession();
                    try {
                        let {options: t, provider: r, token: n, access_token: i, nonce: s} = e
                            , {
                            data: a,
                            error: o
                        } = await e8(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                            headers: this.headers,
                            body: {
                                provider: r,
                                id_token: n,
                                access_token: i,
                                nonce: s,
                                gotrue_meta_security: {
                                    captcha_token: null == t ? void 0 : t.captchaToken
                                }
                            },
                            xform: te
                        });
                        if (o)
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: o
                            };
                        if (!a || !a.session || !a.user)
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: new eY
                            };
                        return a.session && (await this._saveSession(a.session),
                            await this._notifyAllSubscribers("SIGNED_IN", a.session)),
                            {
                                data: a,
                                error: o
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async signInWithOtp(e) {
                    var t, r, n, i, s;
                    try {
                        if (await this._removeSession(),
                        "email" in e) {
                            let {email: n, options: i} = e
                                , s = null
                                , a = null;
                            if ("pkce" === this.flowType) {
                                let e = eG();
                                await eI(this.storage, `${this.storageKey}-code-verifier`, e),
                                    s = await eB(e),
                                    a = e === s ? "plain" : "s256"
                            }
                            let {error: o} = await e8(this.fetch, "POST", `${this.url}/otp`, {
                                headers: this.headers,
                                body: {
                                    email: n,
                                    data: null !== (t = null == i ? void 0 : i.data) && void 0 !== t ? t : {},
                                    create_user: null === (r = null == i ? void 0 : i.shouldCreateUser) || void 0 === r || r,
                                    gotrue_meta_security: {
                                        captcha_token: null == i ? void 0 : i.captchaToken
                                    },
                                    code_challenge: s,
                                    code_challenge_method: a
                                },
                                redirectTo: null == i ? void 0 : i.emailRedirectTo
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: o
                            }
                        }
                        if ("phone" in e) {
                            let {phone: t, options: r} = e
                                , {data: a, error: o} = await e8(this.fetch, "POST", `${this.url}/otp`, {
                                headers: this.headers,
                                body: {
                                    phone: t,
                                    data: null !== (n = null == r ? void 0 : r.data) && void 0 !== n ? n : {},
                                    create_user: null === (i = null == r ? void 0 : r.shouldCreateUser) || void 0 === i || i,
                                    gotrue_meta_security: {
                                        captcha_token: null == r ? void 0 : r.captchaToken
                                    },
                                    channel: null !== (s = null == r ? void 0 : r.channel) && void 0 !== s ? s : "sms"
                                }
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null,
                                    messageId: null == a ? void 0 : a.message_id
                                },
                                error: o
                            }
                        }
                        throw new eX("You must provide either an email or phone number.")
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async verifyOtp(e) {
                    var t, r;
                    try {
                        let n, i;
                        "email_change" !== e.type && "phone_change" !== e.type && await this._removeSession(),
                        "options" in e && (n = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                            i = null === (r = e.options) || void 0 === r ? void 0 : r.captchaToken);
                        let {data: s, error: a} = await e8(this.fetch, "POST", `${this.url}/verify`, {
                            headers: this.headers,
                            body: Object.assign(Object.assign({}, e), {
                                gotrue_meta_security: {
                                    captcha_token: i
                                }
                            }),
                            redirectTo: n,
                            xform: te
                        });
                        if (a)
                            throw a;
                        if (!s)
                            throw Error("An error occurred on token verification.");
                        let o = s.session
                            , l = s.user;
                        return (null == o ? void 0 : o.access_token) && (await this._saveSession(o),
                            await this._notifyAllSubscribers("recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN", o)),
                            {
                                data: {
                                    user: l,
                                    session: o
                                },
                                error: null
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async signInWithSSO(e) {
                    var t, r, n;
                    try {
                        await this._removeSession();
                        let i = null
                            , s = null;
                        if ("pkce" === this.flowType) {
                            let e = eG();
                            await eI(this.storage, `${this.storageKey}-code-verifier`, e),
                                i = await eB(e),
                                s = e === i ? "plain" : "s256"
                        }
                        return await e8(this.fetch, "POST", `${this.url}/sso`, {
                            body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
                                provider_id: e.providerId
                            } : null), "domain" in e ? {
                                domain: e.domain
                            } : null), {
                                redirect_to: null !== (r = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo) && void 0 !== r ? r : void 0
                            }), (null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.captchaToken) ? {
                                gotrue_meta_security: {
                                    captcha_token: e.options.captchaToken
                                }
                            } : null), {
                                skip_http_redirect: !0,
                                code_challenge: i,
                                code_challenge_method: s
                            }),
                            headers: this.headers,
                            xform: tn
                        })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async reauthenticate() {
                    await this.initializePromise
                    return await this._acquireLock(-1, async () => await this._reauthenticate())
                }

                async _reauthenticate() {
                    try {
                        return await this._useSession(async e => {
                                let {data: {session: t}, error: r} = e;
                                if (r)
                                    throw r;
                                if (!t)
                                    throw new eW;
                                let {error: n} = await e8(this.fetch, "GET", `${this.url}/reauthenticate`, {
                                    headers: this.headers,
                                    jwt: t.access_token
                                });
                                return {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: n
                                }
                            }
                        )
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async resend(e) {
                    try {
                        "email_change" != e.type && "phone_change" != e.type && await this._removeSession();
                        let t = `${this.url}/resend`;
                        if ("email" in e) {
                            let {email: r, type: n, options: i} = e
                                , {error: s} = await e8(this.fetch, "POST", t, {
                                headers: this.headers,
                                body: {
                                    email: r,
                                    type: n,
                                    gotrue_meta_security: {
                                        captcha_token: null == i ? void 0 : i.captchaToken
                                    }
                                },
                                redirectTo: null == i ? void 0 : i.emailRedirectTo
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: s
                            }
                        }
                        if ("phone" in e) {
                            let {phone: r, type: n, options: i} = e
                                , {data: s, error: a} = await e8(this.fetch, "POST", t, {
                                headers: this.headers,
                                body: {
                                    phone: r,
                                    type: n,
                                    gotrue_meta_security: {
                                        captcha_token: null == i ? void 0 : i.captchaToken
                                    }
                                }
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null,
                                    messageId: null == s ? void 0 : s.message_id
                                },
                                error: a
                            }
                        }
                        throw new eX("You must provide either an email or phone number and a type")
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async getSession() {
                    await this.initializePromise
                    return this._acquireLock(-1, async () => this._useSession(async e => e))
                }

                async _acquireLock(e, t) {
                    this._debug("#_acquireLock", "begin", e);
                    try {
                        if (this.lockAcquired) {
                            let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                                , r = (async () => (await e,
                                await t()))();
                            return this.pendingInLock.push((async () => {
                                    try {
                                        await r
                                    } catch (e) {
                                    }
                                }
                            )()),
                                r
                        }
                        return await this.lock(`lock:${this.storageKey}`, e, async () => {
                            this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                            try {
                                this.lockAcquired = !0;
                                let e = t();
                                for (this.pendingInLock.push((async () => {
                                        try {
                                            await e
                                        } catch (e) {
                                        }
                                    }
                                )()),
                                         await e; this.pendingInLock.length;) {
                                    let e = [...this.pendingInLock];
                                    await Promise.all(e),
                                        this.pendingInLock.splice(0, e.length)
                                }
                                return await e
                            } finally {
                                this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                                    this.lockAcquired = !1
                            }
                        })
                    } finally {
                        this._debug("#_acquireLock", "end")
                    }
                }

                async _useSession(cb) {
                    this._debug("#_useSession", "begin");
                    try {
                        let session = await this.__loadSession();
                        return await cb(session)
                    } finally {
                        this._debug("#_useSession", "end")
                    }
                }

                async __loadSession() {
                    debugger

                    this._debug("#__loadSession()", "begin")
                    if (!this.lockAcquired) {
                        this._debug("#__loadSession()", "used outside of an acquired lock!", Error().stack)
                    }
                    try {
                        let e = null
                        let storageValue = await eL(this.storage, this.storageKey);
                        this._debug("#getSession()", "session from storage", storageValue)
                        if (null !== storageValue) {
                            this._isValidSession(storageValue)
                                ? e = storageValue
                                : (this._debug("#getSession()", "session from storage is not valid"),
                                    await this._removeSession())
                        }
                        if (!e) {
                            return {
                                data: {
                                    session: null
                                },
                                error: null
                            }
                        }
                        let isExpired = !!e.expires_at && e.expires_at <= Date.now() / 1000;
                        this._debug("#__loadSession()", `session has ${isExpired ? "" : " not"} expired`, "expires_at", e.expires_at)
                        if (!isExpired) {
                            return {
                                data: {
                                    session: e
                                },
                                error: null
                            };
                        }
                        let {session, error} = await this._callRefreshToken(e.refresh_token);
                        if (error) {
                            return {
                                data: {
                                    session: null
                                },
                                error: error
                            };
                        }
                        return {
                            data: {
                                session: session
                            },
                            error: null
                        }
                    } finally {
                        this._debug("#__loadSession()", "end")
                    }
                }

                async getUser(e) {
                    return e ? await this._getUser(e) : (await this.initializePromise,
                        this._acquireLock(-1, async () => await this._getUser()))
                }

                async _getUser(e) {
                    try {
                        if (e)
                            return await e8(this.fetch, "GET", `${this.url}/user`, {
                                headers: this.headers,
                                jwt: e,
                                xform: tr
                            });
                        return await this._useSession(async e => {
                                var t, r;
                                let {data: n, error: i} = e;
                                if (i)
                                    throw i;
                                return await e8(this.fetch, "GET", `${this.url}/user`, {
                                    headers: this.headers,
                                    jwt: null !== (r = null === (t = n.session) || void 0 === t ? void 0 : t.access_token) && void 0 !== r ? r : void 0,
                                    xform: tr
                                })
                            }
                        )
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async updateUser(e, t = {}) {
                    return await this.initializePromise,
                        await this._acquireLock(-1, async () => await this._updateUser(e, t))
                }

                async _updateUser(e, t = {}) {
                    try {
                        return await this._useSession(async r => {
                                let {data: n, error: i} = r;
                                if (i)
                                    throw i;
                                if (!n.session)
                                    throw new eW;
                                let s = n.session
                                    , a = null
                                    , o = null;
                                if ("pkce" === this.flowType && null != e.email) {
                                    let e = eG();
                                    await eI(this.storage, `${this.storageKey}-code-verifier`, e),
                                        a = await eB(e),
                                        o = e === a ? "plain" : "s256"
                                }
                                let {data: l, error: c} = await e8(this.fetch, "PUT", `${this.url}/user`, {
                                    headers: this.headers,
                                    redirectTo: null == t ? void 0 : t.emailRedirectTo,
                                    body: Object.assign(Object.assign({}, e), {
                                        code_challenge: a,
                                        code_challenge_method: o
                                    }),
                                    jwt: s.access_token,
                                    xform: tr
                                });
                                if (c)
                                    throw c;
                                return s.user = l.user,
                                    await this._saveSession(s),
                                    await this._notifyAllSubscribers("USER_UPDATED", s),
                                    {
                                        data: {
                                            user: s.user
                                        },
                                        error: null
                                    }
                            }
                        )
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                _decodeJWT(e) {
                    return eU(e)
                }

                async setSession(e) {
                    return await this.initializePromise,
                        await this._acquireLock(-1, async () => await this._setSession(e))
                }

                async _setSession(e) {
                    try {
                        if (!e.access_token || !e.refresh_token)
                            throw new eW;
                        let t = Date.now() / 1e3
                            , r = t
                            , n = !0
                            , i = null
                            , s = eU(e.access_token);
                        if (s.exp && (n = (r = s.exp) <= t),
                            n) {
                            let {session: t, error: r} = await this._callRefreshToken(e.refresh_token);
                            if (r)
                                return {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: r
                                };
                            if (!t)
                                return {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: null
                                };
                            i = t
                        } else {
                            let {data: n, error: s} = await this._getUser(e.access_token);
                            if (s)
                                throw s;
                            i = {
                                access_token: e.access_token,
                                refresh_token: e.refresh_token,
                                user: n.user,
                                token_type: "bearer",
                                expires_in: r - t,
                                expires_at: r
                            },
                                await this._saveSession(i),
                                await this._notifyAllSubscribers("SIGNED_IN", i)
                        }
                        return {
                            data: {
                                user: i.user,
                                session: i
                            },
                            error: null
                        }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    session: null,
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async refreshSession(e) {
                    return await this.initializePromise,
                        await this._acquireLock(-1, async () => await this._refreshSession(e))
                }

                async _refreshSession(e) {
                    try {
                        return await this._useSession(async t => {
                                var r;
                                if (!e) {
                                    let {data: n, error: i} = t;
                                    if (i)
                                        throw i;
                                    e = null !== (r = n.session) && void 0 !== r ? r : void 0
                                }
                                if (!(null == e ? void 0 : e.refresh_token))
                                    throw new eW;
                                let {session: n, error: i} = await this._callRefreshToken(e.refresh_token);
                                return i ? {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: i
                                } : n ? {
                                    data: {
                                        user: n.user,
                                        session: n
                                    },
                                    error: null
                                } : {
                                    data: {
                                        user: null,
                                        session: null
                                    },
                                    error: null
                                }
                            }
                        )
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                async _getSessionFromURL(e) {
                    try {
                        if (!eC())
                            throw new eZ("No browser detected.");
                        if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
                            if ("pkce" == this.flowType && !e)
                                throw new eQ("Not a valid PKCE flow url.")
                        } else
                            throw new eZ("Not a valid implicit grant flow url.");
                        let t = eP(window.location.href);
                        if (e) {
                            if (!t.code)
                                throw new eQ("No code detected.");
                            let {data: e, error: r} = await this._exchangeCodeForSession(t.code);
                            if (r)
                                throw r;
                            let n = new URL(window.location.href);
                            return n.searchParams.delete("code"),
                                window.history.replaceState(window.history.state, "", n.toString()),
                                {
                                    data: {
                                        session: e.session,
                                        redirectType: null
                                    },
                                    error: null
                                }
                        }
                        if (t.error || t.error_description || t.error_code)
                            throw new eZ(t.error_description || "Error in URL with unspecified error_description", {
                                error: t.error || "unspecified_error",
                                code: t.error_code || "unspecified_code"
                            });
                        let {
                            provider_token: r,
                            provider_refresh_token: n,
                            access_token: i,
                            refresh_token: s,
                            expires_in: a,
                            expires_at: o,
                            token_type: l
                        } = t;
                        if (!i || !a || !s || !l)
                            throw new eZ("No session defined in URL");
                        let c = Math.round(Date.now() / 1e3)
                            , u = parseInt(a)
                            , h = c + u;
                        o && (h = parseInt(o));
                        let d = h - c;
                        1e3 * d <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${u}s`);
                        let f = h - u;
                        c - f >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", f, h, c) : c - f < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", f, h, c);
                        let {data: p, error: g} = await this._getUser(i);
                        if (g)
                            throw g;
                        let m = {
                            provider_token: r,
                            provider_refresh_token: n,
                            access_token: i,
                            expires_in: u,
                            expires_at: h,
                            refresh_token: s,
                            token_type: l,
                            user: p.user
                        };
                        return window.location.hash = "",
                            this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
                            {
                                data: {
                                    session: m,
                                    redirectType: t.type
                                },
                                error: null
                            }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: {
                                    session: null,
                                    redirectType: null
                                },
                                error: e
                            };
                        throw e
                    }
                }

                _isImplicitGrantFlow() {
                    let e = eP(window.location.href);
                    return !!(eC() && (e.access_token || e.error_description))
                }

                async _isPKCEFlow() {
                    let e = eP(window.location.href)
                        , t = await eL(this.storage, `${this.storageKey}-code-verifier`);
                    return !!(e.code && t)
                }

                async signOut(e = {
                    scope: "global"
                }) {
                    return await this.initializePromise,
                        await this._acquireLock(-1, async () => await this._signOut(e))
                }

                async _signOut({scope: e} = {
                    scope: "global"
                }) {
                    return await this._useSession(async t => {
                            var r;
                            let {data: n, error: i} = t;
                            if (i)
                                return {
                                    error: i
                                };
                            let s = null === (r = n.session) || void 0 === r ? void 0 : r.access_token;
                            if (s) {
                                let {error: t} = await this.admin.signOut(s, e);
                                if (t && !(eK(t) && "AuthApiError" === t.name && (404 === t.status || 401 === t.status)))
                                    return {
                                        error: t
                                    }
                            }
                            return "others" !== e && (await this._removeSession(),
                                await eN(this.storage, `${this.storageKey}-code-verifier`),
                                await this._notifyAllSubscribers("SIGNED_OUT", null)),
                                {
                                    error: null
                                }
                        }
                    )
                }

                onAuthStateChange(e) {
                    let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                        let t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    })
                        , r = {
                        id: t,
                        callback: e,
                        unsubscribe: () => {
                            this._debug("#unsubscribe()", "state change callback with id removed", t),
                                this.stateChangeEmitters.delete(t)
                        }
                    };
                    return this._debug("#onAuthStateChange()", "registered callback with id", t),
                        this.stateChangeEmitters.set(t, r),
                        (async () => {
                                await this.initializePromise,
                                    await this._acquireLock(-1, async () => {
                                            this._emitInitialSession(t)
                                        }
                                    )
                            }
                        )(),
                        {
                            data: {
                                subscription: r
                            }
                        }
                }

                async _emitInitialSession(e) {
                    return await this._useSession(async t => {
                            var r, n;
                            try {
                                let {data: {session: n}, error: i} = t;
                                if (i)
                                    throw i;
                                await (null === (r = this.stateChangeEmitters.get(e)) || void 0 === r ? void 0 : r.callback("INITIAL_SESSION", n)),
                                    this._debug("INITIAL_SESSION", "callback id", e, "session", n)
                            } catch (t) {
                                await (null === (n = this.stateChangeEmitters.get(e)) || void 0 === n ? void 0 : n.callback("INITIAL_SESSION", null)),
                                    this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                                    console.error(t)
                            }
                        }
                    )
                }

                async resetPasswordForEmail(e, t = {}) {
                    let r = null
                        , n = null;
                    if ("pkce" === this.flowType) {
                        let e = eG();
                        await eI(this.storage, `${this.storageKey}-code-verifier`, `${e}/PASSWORD_RECOVERY`),
                            r = await eB(e),
                            n = e === r ? "plain" : "s256"
                    }
                    try {
                        return await e8(this.fetch, "POST", `${this.url}/recover`, {
                            body: {
                                email: e,
                                code_challenge: r,
                                code_challenge_method: n,
                                gotrue_meta_security: {
                                    captcha_token: t.captchaToken
                                }
                            },
                            headers: this.headers,
                            redirectTo: t.redirectTo
                        })
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async getUserIdentities() {
                    var e;
                    try {
                        let {data: t, error: r} = await this.getUser();
                        if (r)
                            throw r;
                        return {
                            data: {
                                identities: null !== (e = t.user.identities) && void 0 !== e ? e : []
                            },
                            error: null
                        }
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async linkIdentity(e) {
                    var t;
                    try {
                        let {data: r, error: n} = await this._useSession(async t => {
                                var r, n, i, s, a;
                                let {data: o, error: l} = t;
                                if (l)
                                    throw l;
                                let c = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                                    redirectTo: null === (r = e.options) || void 0 === r ? void 0 : r.redirectTo,
                                    scopes: null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
                                    queryParams: null === (i = e.options) || void 0 === i ? void 0 : i.queryParams,
                                    skipBrowserRedirect: !0
                                });
                                return await e8(this.fetch, "GET", c, {
                                    headers: this.headers,
                                    jwt: null !== (a = null === (s = o.session) || void 0 === s ? void 0 : s.access_token) && void 0 !== a ? a : void 0
                                })
                            }
                        );
                        if (n)
                            throw n;
                        return !eC() || (null === (t = e.options) || void 0 === t ? void 0 : t.skipBrowserRedirect) || window.location.assign(null == r ? void 0 : r.url),
                            {
                                data: {
                                    provider: e.provider,
                                    url: null == r ? void 0 : r.url
                                },
                                error: null
                            }
                    } catch (t) {
                        if (eK(t))
                            return {
                                data: {
                                    provider: e.provider,
                                    url: null
                                },
                                error: t
                            };
                        throw t
                    }
                }

                async unlinkIdentity(e) {
                    try {
                        return await this._useSession(async t => {
                                var r, n;
                                let {data: i, error: s} = t;
                                if (s)
                                    throw s;
                                return await e8(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                                    headers: this.headers,
                                    jwt: null !== (n = null === (r = i.session) || void 0 === r ? void 0 : r.access_token) && void 0 !== n ? n : void 0
                                })
                            }
                        )
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async _refreshAccessToken(e) {
                    let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
                    this._debug(t, "begin");
                    try {
                        var r, n;
                        let i = Date.now();
                        return await (r = async r => (await eF(200 * r),
                            this._debug(t, "refreshing attempt", r),
                            await e8(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                                body: {
                                    refresh_token: e
                                },
                                headers: this.headers,
                                xform: te
                            })),
                            n = (e, t, r) => r && r.error && e1(r.error) && Date.now() + (e + 1) * 200 - i < 3e4,
                            new Promise((e, t) => {
                                    (async () => {
                                            for (let i = 0; i < 1 / 0; i++)
                                                try {
                                                    let t = await r(i);
                                                    if (!n(i, null, t)) {
                                                        e(t);
                                                        return
                                                    }
                                                } catch (e) {
                                                    if (!n(i, e)) {
                                                        t(e);
                                                        return
                                                    }
                                                }
                                        }
                                    )()
                                }
                            ))
                    } catch (e) {
                        if (this._debug(t, "error", e),
                            eK(e))
                            return {
                                data: {
                                    session: null,
                                    user: null
                                },
                                error: e
                            };
                        throw e
                    } finally {
                        this._debug(t, "end")
                    }
                }

                // sb-bxkgqurwqjmvrqekcbws-auth-token
                // {"access_token": "", "refresh_token": "", "expires_at": 0}
                _isValidSession(session) {
                    return "object" == typeof session && null !== session && "access_token" in session && "refresh_token" in session && "expires_at" in session
                }

                async _handleProviderSignIn(e, t) {
                    let r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
                        redirectTo: t.redirectTo,
                        scopes: t.scopes,
                        queryParams: t.queryParams
                    });
                    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r),
                    eC() && !t.skipBrowserRedirect && window.location.assign(r),
                        {
                            data: {
                                provider: e,
                                url: r
                            },
                            error: null
                        }
                }

                async _recoverAndRefresh() {
                    var e;
                    let t = "#_recoverAndRefresh()";
                    this._debug(t, "begin");
                    try {
                        let r = await eL(this.storage, this.storageKey);
                        if (this._debug(t, "session from storage", r),
                            !this._isValidSession(r)) {
                            this._debug(t, "session is not valid"),
                            null !== r && await this._removeSession();
                            return
                        }
                        let n = Math.round(Date.now() / 1e3)
                            , i = (null !== (e = r.expires_at) && void 0 !== e ? e : 1 / 0) < n + 10;
                        if (this._debug(t, `session has ${i ? "" : " not"} expired with margin of 10s`),
                            i) {
                            if (this.autoRefreshToken && r.refresh_token) {
                                let {error: e} = await this._callRefreshToken(r.refresh_token);
                                e && (console.error(e),
                                e1(e) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", e),
                                    await this._removeSession()))
                            }
                        } else
                            await this._notifyAllSubscribers("SIGNED_IN", r)
                    } catch (e) {
                        this._debug(t, "error", e),
                            console.error(e);
                        return
                    } finally {
                        this._debug(t, "end")
                    }
                }

                async _callRefreshToken(e) {
                    var t, r;
                    if (!e)
                        throw new eW;
                    if (this.refreshingDeferred)
                        return this.refreshingDeferred.promise;
                    let n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
                    this._debug(n, "begin");
                    try {
                        this.refreshingDeferred = new eD;
                        let {data: t, error: r} = await this._refreshAccessToken(e);
                        if (r)
                            throw r;
                        if (!t.session)
                            throw new eW;
                        await this._saveSession(t.session),
                            await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
                        let n = {
                            session: t.session,
                            error: null
                        };
                        return this.refreshingDeferred.resolve(n),
                            n
                    } catch (e) {
                        if (this._debug(n, "error", e),
                            eK(e)) {
                            let r = {
                                session: null,
                                error: e
                            };
                            return e1(e) || (await this._removeSession(),
                                await this._notifyAllSubscribers("SIGNED_OUT", null)),
                            null === (t = this.refreshingDeferred) || void 0 === t || t.resolve(r),
                                r
                        }
                        throw null === (r = this.refreshingDeferred) || void 0 === r || r.reject(e),
                            e
                    } finally {
                        this.refreshingDeferred = null,
                            this._debug(n, "end")
                    }
                }

                async _notifyAllSubscribers(e, t, r = !0) {
                    let n = `#_notifyAllSubscribers(${e})`;
                    this._debug(n, "begin", t, `broadcast = ${r}`);
                    try {
                        this.broadcastChannel && r && this.broadcastChannel.postMessage({
                            event: e,
                            session: t
                        });
                        let n = []
                            , i = Array.from(this.stateChangeEmitters.values()).map(async r => {
                                try {
                                    await r.callback(e, t)
                                } catch (e) {
                                    n.push(e)
                                }
                            }
                        );
                        if (await Promise.all(i),
                        n.length > 0) {
                            for (let e = 0; e < n.length; e += 1)
                                console.error(n[e]);
                            throw n[0]
                        }
                    } finally {
                        this._debug(n, "end")
                    }
                }

                async _saveSession(e) {
                    this._debug("#_saveSession()", e),
                        await eI(this.storage, this.storageKey, e)
                }

                async _removeSession() {
                    this._debug("#_removeSession()"),
                        await eN(this.storage, this.storageKey)
                }

                _removeVisibilityChangedCallback() {
                    this._debug("#_removeVisibilityChangedCallback()");
                    let e = this.visibilityChangedCallback;
                    this.visibilityChangedCallback = null;
                    try {
                        e && eC() && (null == window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e)
                    } catch (e) {
                        console.error("removing visibilitychange callback failed", e)
                    }
                }

                async _startAutoRefresh() {
                    await this._stopAutoRefresh(),
                        this._debug("#_startAutoRefresh()");
                    let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
                    this.autoRefreshTicker = e,
                        e && "object" == typeof e && "function" == typeof e.unref ? e.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e),
                        setTimeout(async () => {
                                await this.initializePromise,
                                    await this._autoRefreshTokenTick()
                            }
                            , 0)
                }

                async _stopAutoRefresh() {
                    this._debug("#_stopAutoRefresh()");
                    let e = this.autoRefreshTicker;
                    this.autoRefreshTicker = null,
                    e && clearInterval(e)
                }

                async startAutoRefresh() {
                    this._removeVisibilityChangedCallback(),
                        await this._startAutoRefresh()
                }

                async stopAutoRefresh() {
                    this._removeVisibilityChangedCallback(),
                        await this._stopAutoRefresh()
                }

                async _autoRefreshTokenTick() {
                    this._debug("#_autoRefreshTokenTick()", "begin");
                    try {
                        await this._acquireLock(0, async () => {
                                try {
                                    let e = Date.now();
                                    try {
                                        return await this._useSession(async t => {
                                                let {data: {session: r}} = t;
                                                if (!r || !r.refresh_token || !r.expires_at) {
                                                    this._debug("#_autoRefreshTokenTick()", "no session");
                                                    return
                                                }
                                                let n = Math.floor((1e3 * r.expires_at - e) / 3e4);
                                                this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`),
                                                n <= 3 && await this._callRefreshToken(r.refresh_token)
                                            }
                                        )
                                    } catch (e) {
                                        console.error("Auto refresh tick failed with error. This is likely a transient error.", e)
                                    }
                                } finally {
                                    this._debug("#_autoRefreshTokenTick()", "end")
                                }
                            }
                        )
                    } catch (e) {
                        if (e.isAcquireTimeout || e instanceof tf)
                            this._debug("auto refresh token tick lock not available");
                        else
                            throw e
                    }
                }

                async _handleVisibilityChange() {
                    if (this._debug("#_handleVisibilityChange()"),
                    !eC() || !(null == window ? void 0 : window.addEventListener))
                        return this.autoRefreshToken && this.startAutoRefresh(),
                            !1;
                    try {
                        this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
                        null == window || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
                            await this._onVisibilityChanged(!0)
                    } catch (e) {
                        console.error("_handleVisibilityChange", e)
                    }
                }

                async _onVisibilityChanged(e) {
                    let t = `#_onVisibilityChanged(${e})`;
                    this._debug(t, "visibilityState", document.visibilityState),
                        "visible" === document.visibilityState ? (this.autoRefreshToken && this._startAutoRefresh(),
                        e || (await this.initializePromise,
                            await this._acquireLock(-1, async () => {
                                    if ("visible" !== document.visibilityState) {
                                        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                                        return
                                    }
                                    await this._recoverAndRefresh()
                                }
                            ))) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh()
                }

                async _getUrlForProvider(e, t, r) {
                    let n = [`provider=${encodeURIComponent(t)}`];
                    if ((null == r ? void 0 : r.redirectTo) && n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
                    (null == r ? void 0 : r.scopes) && n.push(`scopes=${encodeURIComponent(r.scopes)}`),
                    "pkce" === this.flowType) {
                        let e = eG();
                        await eI(this.storage, `${this.storageKey}-code-verifier`, e);
                        let t = await eB(e)
                            , r = e === t ? "plain" : "s256";
                        this._debug("PKCE", "code verifier", `${e.substring(0, 5)}...`, "code challenge", t, "method", r);
                        let i = new URLSearchParams({
                            code_challenge: `${encodeURIComponent(t)}`,
                            code_challenge_method: `${encodeURIComponent(r)}`
                        });
                        n.push(i.toString())
                    }
                    if (null == r ? void 0 : r.queryParams) {
                        let e = new URLSearchParams(r.queryParams);
                        n.push(e.toString())
                    }
                    return (null == r ? void 0 : r.skipBrowserRedirect) && n.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
                        `${e}?${n.join("&")}`
                }

                async _unenroll(e) {
                    try {
                        return await this._useSession(async t => {
                                var r;
                                let {data: n, error: i} = t;
                                return i ? {
                                    data: null,
                                    error: i
                                } : await e8(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                                    headers: this.headers,
                                    jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                                })
                            }
                        )
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async _enroll(e) {
                    try {
                        return await this._useSession(async t => {
                                var r, n;
                                let {data: i, error: s} = t;
                                if (s)
                                    return {
                                        data: null,
                                        error: s
                                    };
                                let {data: a, error: o} = await e8(this.fetch, "POST", `${this.url}/factors`, {
                                    body: {
                                        friendly_name: e.friendlyName,
                                        factor_type: e.factorType,
                                        issuer: e.issuer
                                    },
                                    headers: this.headers,
                                    jwt: null === (r = null == i ? void 0 : i.session) || void 0 === r ? void 0 : r.access_token
                                });
                                return o ? {
                                    data: null,
                                    error: o
                                } : ((null === (n = null == a ? void 0 : a.totp) || void 0 === n ? void 0 : n.qr_code) && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                                    {
                                        data: a,
                                        error: null
                                    })
                            }
                        )
                    } catch (e) {
                        if (eK(e))
                            return {
                                data: null,
                                error: e
                            };
                        throw e
                    }
                }

                async _verify(e) {
                    return this._acquireLock(-1, async () => {
                            try {
                                return await this._useSession(async t => {
                                        var r;
                                        let {data: n, error: i} = t;
                                        if (i)
                                            return {
                                                data: null,
                                                error: i
                                            };
                                        let {
                                            data: s,
                                            error: a
                                        } = await e8(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                                            body: {
                                                code: e.code,
                                                challenge_id: e.challengeId
                                            },
                                            headers: this.headers,
                                            jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                                        });
                                        return a ? {
                                            data: null,
                                            error: a
                                        } : (await this._saveSession(Object.assign({
                                            expires_at: Math.round(Date.now() / 1e3) + s.expires_in
                                        }, s)),
                                            await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s),
                                            {
                                                data: s,
                                                error: a
                                            })
                                    }
                                )
                            } catch (e) {
                                if (eK(e))
                                    return {
                                        data: null,
                                        error: e
                                    };
                                throw e
                            }
                        }
                    )
                }

                async _challenge(e) {
                    return this._acquireLock(-1, async () => {
                            try {
                                return await this._useSession(async t => {
                                        var r;
                                        let {data: n, error: i} = t;
                                        return i ? {
                                            data: null,
                                            error: i
                                        } : await e8(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                                            headers: this.headers,
                                            jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                                        })
                                    }
                                )
                            } catch (e) {
                                if (eK(e))
                                    return {
                                        data: null,
                                        error: e
                                    };
                                throw e
                            }
                        }
                    )
                }

                async _challengeAndVerify(e) {
                    let {data: t, error: r} = await this._challenge({
                        factorId: e.factorId
                    });
                    return r ? {
                        data: null,
                        error: r
                    } : await this._verify({
                        factorId: e.factorId,
                        challengeId: t.id,
                        code: e.code
                    })
                }

                async _listFactors() {
                    let {data: {user: e}, error: t} = await this.getUser();
                    if (t)
                        return {
                            data: null,
                            error: t
                        };
                    let r = (null == e ? void 0 : e.factors) || []
                        , n = r.filter(e => "totp" === e.factor_type && "verified" === e.status);
                    return {
                        data: {
                            all: r,
                            totp: n
                        },
                        error: null
                    }
                }

                async _getAuthenticatorAssuranceLevel() {
                    return this._acquireLock(-1, async () => await this._useSession(async e => {
                            var t, r;
                            let {data: {session: n}, error: i} = e;
                            if (i)
                                return {
                                    data: null,
                                    error: i
                                };
                            if (!n)
                                return {
                                    data: {
                                        currentLevel: null,
                                        nextLevel: null,
                                        currentAuthenticationMethods: []
                                    },
                                    error: null
                                };
                            let s = this._decodeJWT(n.access_token)
                                , a = null;
                            s.aal && (a = s.aal);
                            let o = a;
                            return (null !== (r = null === (t = n.user.factors) || void 0 === t ? void 0 : t.filter(e => "verified" === e.status)) && void 0 !== r ? r : []).length > 0 && (o = "aal2"),
                                {
                                    data: {
                                        currentLevel: a,
                                        nextLevel: o,
                                        currentAuthenticationMethods: s.amr || []
                                    },
                                    error: null
                                }
                        }
                    ))
                }
            }

            Client.nextInstanceID = 0;

            class AuthClient extends Client {
                constructor(options) {
                    super(options)
                }
            }

            class tw {
                constructor(supabaseUrl, supabaseKey, config) {
                    let __auth, storageKey, __global, headers, o, l, c, u;
                    this.supabaseUrl = supabaseUrl
                    this.supabaseKey = supabaseKey
                    if (!supabaseUrl) {
                        throw Error("supabaseUrl is required.")
                    }
                    if (!supabaseKey) {
                        throw Error("supabaseKey is required.")
                    }

                    let baseurl = supabaseUrl.replace(/\/$/, "")
                    this.realtimeUrl = `${baseurl}/realtime/v1`.replace(/^http/i, "ws")
                    this.authUrl = `${baseurl}/auth/v1`
                    this.storageUrl = `${baseurl}/storage/v1`
                    this.functionsUrl = `${baseurl}/functions/v1`

                    let d = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`
                    let mergedConfig = function (local, global) {
                        let {db: local_db, auth: local_auth, realtime: local_realtime, global: local_global} = local
                        let {
                            db: global_db,
                            auth: global_auth,
                            realtime: global_realtime,
                            global: global_global
                        } = global
                        return {
                            db: Object.assign(Object.assign({}, global_db), local_db),
                            auth: Object.assign(Object.assign({}, global_auth), local_auth),
                            realtime: Object.assign(Object.assign({}, global_realtime), local_realtime),
                            global: Object.assign(Object.assign({}, global_global), local_global)
                        }
                    }(null != config ? config : {}, {
                        db: global_db,
                        realtime: global_realtime,
                        auth: Object.assign(Object.assign({}, eS), {
                            storageKey: d
                        }),
                        global: global_global
                    })

                    __auth = mergedConfig.auth
                    storageKey = null === __auth || undefined === __auth ? undefined : __auth.storageKey
                    this.storageKey = null !== storageKey && undefined !== storageKey ? storageKey : ""

                    __global = mergedConfig.global
                    headers = null === __global || undefined === __global ? undefined : __global.headers
                    this.headers = null !== headers && undefined !== headers ? headers : {}

                    o = mergedConfig.auth
                    l = mergedConfig.global
                    this.auth = this._initSupabaseAuthClient(null !== o && undefined !== o ? o : {}, this.headers, null === l || undefined === l ? undefined : l.fetch)
                    c = mergedConfig.global
                    this.fetch = eT(supabaseKey, this._getAccessToken.bind(this), null === c || undefined === c ? undefined : c.fetch)
                    this.realtime = this._initRealtimeClient(Object.assign({
                        headers: this.headers
                    }, mergedConfig.realtime))

                    u = mergedConfig.db
                    this.rest = new x(`${baseurl}/rest/v1`, {
                        headers: this.headers,
                        schema: null === u || undefined === u ? undefined : u.schema,
                        fetch: this.fetch
                    })
                    this._listenForAuthEvents()
                }

                get functions() {
                    return new E(this.functionsUrl, {
                        headers: this.headers,
                        customFetch: this.fetch
                    })
                }

                get storage() {
                    return new eb(this.storageUrl, this.headers, this.fetch)
                }

                from(e) {
                    return this.rest.from(e)
                }

                schema(e) {
                    return this.rest.schema(e)
                }

                rpc(e, t = {}, r = {}) {
                    return this.rest.rpc(e, t, r)
                }

                channel(e, t = {
                    config: {}
                }) {
                    return this.realtime.channel(e, t)
                }

                getChannels() {
                    return this.realtime.getChannels()
                }

                removeChannel(e) {
                    return this.realtime.removeChannel(e)
                }

                removeAllChannels() {
                    return this.realtime.removeAllChannels()
                }

                _getAccessToken() {
                    var e, t, r, n, i, s;
                    return r = this,
                        n = void 0,
                        i = void 0,
                        s = function* () {
                            let {data: r} = yield this.auth.getSession();
                            return null !== (t = null === (e = r.session) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : null
                        }
                        ,
                        new (i || (i = Promise))(function (e, t) {
                                function a(e) {
                                    try {
                                        l(s.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function o(e) {
                                    try {
                                        l(s.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }

                                function l(t) {
                                    var r;
                                    t.done ? e(t.value) : ((r = t.value) instanceof i ? r : new i(function (e) {
                                            e(r)
                                        }
                                    )).then(a, o)
                                }

                                l((s = s.apply(r, n || [])).next())
                            }
                        )
                }

                _initSupabaseAuthClient({
                                            autoRefreshToken,
                                            persistSession,
                                            detectSessionInUrl,
                                            storage,
                                            storageKey,
                                            flowType,
                                            debug
                                        }, headers, fetch) {
                    let _headers = {
                        Authorization: `Bearer ${this.supabaseKey}`,
                        apikey: `${this.supabaseKey}`
                    };
                    return new AuthClient({
                        url: this.authUrl,
                        headers: Object.assign(Object.assign({}, _headers), headers),
                        storageKey: storageKey,
                        autoRefreshToken: autoRefreshToken,
                        persistSession: persistSession,
                        detectSessionInUrl: detectSessionInUrl,
                        storage: storage,
                        flowType: flowType,
                        debug: debug,
                        fetch: fetch
                    })
                }

                _initRealtimeClient(e) {
                    return new Y(this.realtimeUrl, Object.assign(Object.assign({}, e), {
                        params: Object.assign({
                            apikey: this.supabaseKey
                        }, null == e ? void 0 : e.params)
                    }))
                }

                _listenForAuthEvents() {
                    return this.auth.onAuthStateChange((e, t) => {
                            this._handleTokenChanged(e, "CLIENT", null == t ? void 0 : t.access_token)
                        }
                    )
                }

                _handleTokenChanged(e, t, r) {
                    ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) && this.changedAccessToken !== r ? (this.realtime.setAuth(null != r ? r : null),
                        this.changedAccessToken = r) : "SIGNED_OUT" === e && (this.realtime.setAuth(this.supabaseKey),
                    "STORAGE" == t && this.auth.signOut(),
                        this.changedAccessToken = void 0)
                }
            }

            let t_ = new tw(
                "https://bxkgqurwqjmvrqekcbws.supabase.co",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4a2dxdXJ3cWptdnJxZWtjYndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2NDU0MjUsImV4cCI6MjAwNjIyMTQyNX0.3nZ0yhuFjnI3yHbAL8S9UtK-Ny-6F5AylNHgo1tymTU", undefined)
        },
        9259: function (e, t, r) {
            "use strict";
            r.d(t, {
                j: function () {
                    return i
                }
            });
            var n = r(97688);
            let i = (e, t, r) => {
                n.ZP.event({
                    category: e,
                    action: t,
                    label: r
                })
            }
        },

        // /_app.js
        13476: function (module, exports, require) {
            "use strict";
            require.r(exports)
            require.d(exports, {
                default: function () {
                    return MyApp
                }
            })

            var n = require(11527)
                , i = require(50959)
                , s = require(34673)
                , a = require.n(s)
                , o = require(68129)
                , l = require(4052);
            require(48106);
            var c = require(1777)
                , u = require(97688);

            let h = c.vJ(["html,body{background:#000;overscroll-behavior:none;-webkit-font-smoothing:subpixel-antialiased !important;}*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;scroll-behavior:smooth !important;-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:never;}.hide{display:none;}svg{vertical-align:text-top;}a{color:unset;text-decoration:none;}button{border:none;outline:none;background:transparent;width:fit-content;margin:0;padding:0;cursor:pointer;}canvas{image-rendering:pixelated;image-rendering:-moz-crisp-edges;}"])

            var themeConfig = require(14890)
                , f = require(23511)
                , p = require(66127);
            let theme = {
                primaryShade: 8
            }
            u.ZP.initialize("G-D2V35MQ7M4", {
                testMode: false
            });
            var MyApp = function ({Component, pageProps}) {
                debugger
                let router = o.useRouter()
                let setSession = p.Z(state => state.setSession)
                i.useEffect(() => {
                    f.O.auth.getSession().then(resp => {
                        debugger
                        let {data} = resp
                        setSession(data.session)
                    })
                }, [setSession])

                // 页面访问统计
                i.useEffect(() => {
                    let onRouteChangeComplete = page => {
                        u.ZP.send({
                            hitType: "pageview",
                            page: page
                        })
                    }

                    router.events.on("routeChangeComplete", onRouteChangeComplete)
                    return () => {
                        router.events.off("routeChangeComplete", onRouteChangeComplete)
                    }
                }, [router.events])

                return n.jsxs(n.Fragment, {
                    children: [
                        n.jsx(a(), {
                            children: n.jsx("title", {
                                children: "JSON Crack+ | More Than a JSON Editor"
                            })
                        }),
                        n.jsx(l.M, {
                            theme: theme,
                            children: n.jsxs(c.f6, {
                                theme: themeConfig.Wb,
                                children: [
                                    n.jsx(h, {}),
                                    n.jsx(Component, {
                                        ...pageProps
                                    })
                                ]
                            })
                        })
                    ]
                })
            }
        },

        // store
        66127: function (module, exports, require) {
            "use strict";
            var n = require(94311)
                , i = require(42109)
                , s = require(23511)
                , a = require(9259);
            let state = {
                session: null,
                sessionLoading: true,
                user: null,
                isAuthenticated: false,
                premium: false,
                premiumCancelled: false,
                organization: false,
                orgAdmin: false
            }
            exports.Z = i.Ue()(set => ({
                ...state,
                setSession: async session => {
                    debugger
                    if (session) {
                        await s.O.rpc("get_subscription_details").then(async resp => {
                                let {data, error} = resp
                                if (error || !data) {
                                    s.O.auth.signOut()
                                    set(state)
                                } else if (data.premium) {
                                    set({
                                        premium: data.premium,
                                        organization: data.orgPremium,
                                        premiumCancelled: !!data.cancelled,
                                        orgAdmin: data.orgAdmin
                                    })
                                    a.j("login", "user login")
                                    set({
                                        session: session,
                                        user: session.user,
                                        isAuthenticated: true
                                    })
                                }
                            }
                        )
                    }
                    set({
                        sessionLoading: false
                    })
                },
                logout: async () => {
                    debugger
                    n.default.loading("Logging out...", {
                        id: "logout"
                    })
                    await s.O.auth.signOut()
                    set({
                        ...state,
                        sessionLoading: false
                    })
                    n.default.success("Logged out.", {
                        id: "logout"
                    })
                },
                setSessionLoading: sessionLoading => set({
                    sessionLoading: sessionLoading
                })
            }))
        },
        48106: function () {
        },
        60194: function (e) {
            !function () {
                var t = {
                    229: function (e) {
                        var t, r, n, i = e.exports = {};

                        function s() {
                            throw Error("setTimeout has not been defined")
                        }

                        function a() {
                            throw Error("clearTimeout has not been defined")
                        }

                        function o(e) {
                            if (t === setTimeout)
                                return setTimeout(e, 0);
                            if ((t === s || !t) && setTimeout)
                                return t = setTimeout,
                                    setTimeout(e, 0);
                            try {
                                return t(e, 0)
                            } catch (r) {
                                try {
                                    return t.call(null, e, 0)
                                } catch (r) {
                                    return t.call(this, e, 0)
                                }
                            }
                        }

                        !function () {
                            try {
                                t = "function" == typeof setTimeout ? setTimeout : s
                            } catch (e) {
                                t = s
                            }
                            try {
                                r = "function" == typeof clearTimeout ? clearTimeout : a
                            } catch (e) {
                                r = a
                            }
                        }();
                        var l = []
                            , c = !1
                            , u = -1;

                        function h() {
                            c && n && (c = !1,
                                n.length ? l = n.concat(l) : u = -1,
                            l.length && d())
                        }

                        function d() {
                            if (!c) {
                                var e = o(h);
                                c = !0;
                                for (var t = l.length; t;) {
                                    for (n = l,
                                             l = []; ++u < t;)
                                        n && n[u].run();
                                    u = -1,
                                        t = l.length
                                }
                                n = null,
                                    c = !1,
                                    function (e) {
                                        if (r === clearTimeout)
                                            return clearTimeout(e);
                                        if ((r === a || !r) && clearTimeout)
                                            return r = clearTimeout,
                                                clearTimeout(e);
                                        try {
                                            r(e)
                                        } catch (t) {
                                            try {
                                                return r.call(null, e)
                                            } catch (t) {
                                                return r.call(this, e)
                                            }
                                        }
                                    }(e)
                            }
                        }

                        function f(e, t) {
                            this.fun = e,
                                this.array = t
                        }

                        function p() {
                        }

                        i.nextTick = function (e) {
                            var t = Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var r = 1; r < arguments.length; r++)
                                    t[r - 1] = arguments[r];
                            l.push(new f(e, t)),
                            1 !== l.length || c || o(d)
                        }
                            ,
                            f.prototype.run = function () {
                                this.fun.apply(null, this.array)
                            }
                            ,
                            i.title = "browser",
                            i.browser = !0,
                            i.env = {},
                            i.argv = [],
                            i.version = "",
                            i.versions = {},
                            i.on = p,
                            i.addListener = p,
                            i.once = p,
                            i.off = p,
                            i.removeListener = p,
                            i.removeAllListeners = p,
                            i.emit = p,
                            i.prependListener = p,
                            i.prependOnceListener = p,
                            i.listeners = function (e) {
                                return []
                            }
                            ,
                            i.binding = function (e) {
                                throw Error("process.binding is not supported")
                            }
                            ,
                            i.cwd = function () {
                                return "/"
                            }
                            ,
                            i.chdir = function (e) {
                                throw Error("process.chdir is not supported")
                            }
                            ,
                            i.umask = function () {
                                return 0
                            }
                    }
                }
                    , r = {};

                function n(e) {
                    var i = r[e];
                    if (void 0 !== i)
                        return i.exports;
                    var s = r[e] = {
                        exports: {}
                    }
                        , a = !0;
                    try {
                        t[e](s, s.exports, n),
                            a = !1
                    } finally {
                        a && delete r[e]
                    }
                    return s.exports
                }

                n.ab = "//";
                var i = n(229);
                e.exports = i
            }()
        },
        34673: function (e, t, r) {
            e.exports = r(7074)
        },
        68129: function (e, t, r) {
            e.exports = r(21270)
        },
        84793: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = function () {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], a = n || "";
                    return i && (a = n.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (e, t, n) {
                        return t > 0 && t + e.length !== n.length && e.search(r) > -1 && ":" !== n.charAt(t - 2) && ("-" !== n.charAt(t + e.length) || "-" === n.charAt(t - 1)) && 0 > n.charAt(t - 1).search(/[^\s-]/) ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
                    })),
                    s && (a = "string" == typeof (t = e = a) && -1 !== t.indexOf("@") ? (console.warn("This arg looks like an email address, redacting."),
                        "REDACTED (Potential Email Address)") : e),
                        a
                }
            ;
            var r = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i
        },
        91909: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = t.GA4 = void 0;
            var n = l(r(57815))
                , i = l(r(84793))
                , s = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"]
                , a = ["title", "location"]
                , o = ["page", "hitType"];

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e, t) {
                if (null == e)
                    return {};
                var r, n, i = function (e, t) {
                    if (null == e)
                        return {};
                    var r, n, i = {}, s = Object.keys(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < s.length; n++)
                        r = s[n],
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                        : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }

            function h(e) {
                return function (e) {
                    if (Array.isArray(e))
                        return g(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || p(e) || function () {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })),
                        r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach(function (t) {
                        v(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function p(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return g(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return g(e, t)
                }
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }

            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, y(n.key), n)
                }
            }

            function v(e, t, r) {
                return (t = y(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                    e
            }

            function y(e) {
                var t = function (e, t) {
                    if ("object" !== u(e) || null === e)
                        return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" !== u(n))
                            return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === u(t) ? t : String(t)
            }

            var b = function () {
                var e, t;

                function r() {
                    var e = this;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw TypeError("Cannot call a class as a function")
                    }(this, r),
                        v(this, "reset", function () {
                            e.isInitialized = !1,
                                e._testMode = !1,
                                e._currentMeasurementId,
                                e._hasLoadedGA = !1,
                                e._isQueuing = !1,
                                e._queueGtag = []
                        }),
                        v(this, "_gtag", function () {
                            for (var t = arguments.length, r = Array(t), i = 0; i < t; i++)
                                r[i] = arguments[i];
                            e._testMode ? e._queueGtag.push(r) : e._isQueuing ? e._queueGtag.push(r) : n.default.apply(void 0, r)
                        }),
                        v(this, "_loadGA", function (t, r) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
                            if ("undefined" != typeof window && "undefined" != typeof document && !e._hasLoadedGA) {
                                var i = document.createElement("script");
                                i.async = !0,
                                    i.src = "".concat(n, "?id=").concat(t),
                                r && i.setAttribute("nonce", r),
                                    document.body.appendChild(i),
                                    window.dataLayer = window.dataLayer || [],
                                    window.gtag = function () {
                                        window.dataLayer.push(arguments)
                                    }
                                    ,
                                    e._hasLoadedGA = !0
                            }
                        }),
                        v(this, "_toGtagOptions", function (e) {
                            if (e) {
                                var t = {
                                    cookieUpdate: "cookie_update",
                                    cookieExpires: "cookie_expires",
                                    cookieDomain: "cookie_domain",
                                    cookieFlags: "cookie_flags",
                                    userId: "user_id",
                                    clientId: "client_id",
                                    anonymizeIp: "anonymize_ip",
                                    contentGroup1: "content_group1",
                                    contentGroup2: "content_group2",
                                    contentGroup3: "content_group3",
                                    contentGroup4: "content_group4",
                                    contentGroup5: "content_group5",
                                    allowAdFeatures: "allow_google_signals",
                                    allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                                    nonInteraction: "non_interaction",
                                    page: "page_path",
                                    hitCallback: "event_callback"
                                };
                                return Object.entries(e).reduce(function (e, r) {
                                    var n = function (e) {
                                        if (Array.isArray(e))
                                            return e
                                    }(r) || function (e, t) {
                                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var n, i, s, a, o = [], l = !0, c = !1;
                                            try {
                                                if (s = (r = r.call(e)).next,
                                                0 === t) {
                                                    if (Object(r) !== r)
                                                        return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (n = s.call(r)).done) && (o.push(n.value),
                                                    o.length !== t); l = !0)
                                                        ;
                                            } catch (e) {
                                                c = !0,
                                                    i = e
                                            } finally {
                                                try {
                                                    if (!l && null != r.return && (a = r.return(),
                                                    Object(a) !== a))
                                                        return
                                                } finally {
                                                    if (c)
                                                        throw i
                                                }
                                            }
                                            return o
                                        }
                                    }(r, 2) || p(r, 2) || function () {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                        , i = n[0]
                                        , s = n[1];
                                    return t[i] ? e[t[i]] = s : e[i] = s,
                                        e
                                }, {})
                            }
                        }),
                        v(this, "initialize", function (t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!t)
                                throw Error("Require GA_MEASUREMENT_ID");
                            var n = "string" == typeof t ? [{
                                trackingId: t
                            }] : t;
                            e._currentMeasurementId = n[0].trackingId;
                            var i = r.gaOptions
                                , s = r.gtagOptions
                                , a = r.nonce
                                , o = r.testMode
                                , l = void 0 !== o && o
                                , c = r.gtagUrl;
                            if (e._testMode = l,
                            l || e._loadGA(e._currentMeasurementId, a, c),
                            e.isInitialized || (e._gtag("js", new Date),
                                n.forEach(function (t) {
                                    var r = f(f(f({}, e._toGtagOptions(f(f({}, i), t.gaOptions))), s), t.gtagOptions);
                                    Object.keys(r).length ? e._gtag("config", t.trackingId, r) : e._gtag("config", t.trackingId)
                                })),
                                e.isInitialized = !0,
                                !l) {
                                var u = h(e._queueGtag);
                                for (e._queueGtag = [],
                                         e._isQueuing = !1; u.length;) {
                                    var d = u.shift();
                                    e._gtag.apply(e, h(d)),
                                    "get" === d[0] && (e._isQueuing = !0)
                                }
                            }
                        }),
                        v(this, "set", function (t) {
                            if (!t) {
                                console.warn("`fieldsObject` is required in .set()");
                                return
                            }
                            if ("object" !== u(t)) {
                                console.warn("Expected `fieldsObject` arg to be an Object");
                                return
                            }
                            0 === Object.keys(t).length && console.warn("empty `fieldsObject` given to .set()"),
                                e._gaCommand("set", t)
                        }),
                        v(this, "_gaCommandSendEvent", function (t, r, n, i, s) {
                            e._gtag("event", r, f(f({
                                event_category: t,
                                event_label: n,
                                value: i
                            }, s && {
                                non_interaction: s.nonInteraction
                            }), e._toGtagOptions(s)))
                        }),
                        v(this, "_gaCommandSendEventParameters", function () {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                                r[n] = arguments[n];
                            if ("string" == typeof r[0])
                                e._gaCommandSendEvent.apply(e, h(r.slice(1)));
                            else {
                                var i = r[0]
                                    , a = i.eventCategory
                                    , o = i.eventAction
                                    , l = i.eventLabel
                                    , u = i.eventValue
                                    , d = (i.hitType,
                                    c(i, s));
                                e._gaCommandSendEvent(a, o, l, u, d)
                            }
                        }),
                        v(this, "_gaCommandSendTiming", function (t, r, n, i) {
                            e._gtag("event", "timing_complete", {
                                name: r,
                                value: n,
                                event_category: t,
                                event_label: i
                            })
                        }),
                        v(this, "_gaCommandSendPageview", function (t, r) {
                            if (r && Object.keys(r).length) {
                                var n = e._toGtagOptions(r)
                                    , i = n.title
                                    , s = n.location
                                    , o = c(n, a);
                                e._gtag("event", "page_view", f(f(f(f({}, t && {
                                    page_path: t
                                }), i && {
                                    page_title: i
                                }), s && {
                                    page_location: s
                                }), o))
                            } else
                                t ? e._gtag("event", "page_view", {
                                    page_path: t
                                }) : e._gtag("event", "page_view")
                        }),
                        v(this, "_gaCommandSendPageviewParameters", function () {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                                r[n] = arguments[n];
                            if ("string" == typeof r[0])
                                e._gaCommandSendPageview.apply(e, h(r.slice(1)));
                            else {
                                var i = r[0]
                                    , s = i.page
                                    , a = (i.hitType,
                                    c(i, o));
                                e._gaCommandSendPageview(s, a)
                            }
                        }),
                        v(this, "_gaCommandSend", function () {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                                r[n] = arguments[n];
                            var i = "string" == typeof r[0] ? r[0] : r[0].hitType;
                            switch (i) {
                                case "event":
                                    e._gaCommandSendEventParameters.apply(e, r);
                                    break;
                                case "pageview":
                                    e._gaCommandSendPageviewParameters.apply(e, r);
                                    break;
                                case "timing":
                                    e._gaCommandSendTiming.apply(e, h(r.slice(1)));
                                    break;
                                case "screenview":
                                case "transaction":
                                case "item":
                                case "social":
                                case "exception":
                                    console.warn("Unsupported send command: ".concat(i));
                                    break;
                                default:
                                    console.warn("Send command doesn't exist: ".concat(i))
                            }
                        }),
                        v(this, "_gaCommandSet", function () {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                                r[n] = arguments[n];
                            "string" == typeof r[0] && (r[0] = v({}, r[0], r[1])),
                                e._gtag("set", e._toGtagOptions(r[0]))
                        }),
                        v(this, "_gaCommand", function (t) {
                            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                                n[i - 1] = arguments[i];
                            switch (t) {
                                case "send":
                                    e._gaCommandSend.apply(e, n);
                                    break;
                                case "set":
                                    e._gaCommandSet.apply(e, n);
                                    break;
                                default:
                                    console.warn("Command doesn't exist: ".concat(t))
                            }
                        }),
                        v(this, "ga", function () {
                            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                                r[n] = arguments[n];
                            if ("string" == typeof r[0])
                                e._gaCommand.apply(e, r);
                            else {
                                var i = r[0];
                                e._gtag("get", e._currentMeasurementId, "client_id", function (t) {
                                    e._isQueuing = !1;
                                    var r = e._queueGtag;
                                    for (i({
                                        get: function (r) {
                                            return "clientId" === r ? t : "trackingId" === r ? e._currentMeasurementId : "apiVersion" === r ? "1" : void 0
                                        }
                                    }); r.length;) {
                                        var n = r.shift();
                                        e._gtag.apply(e, h(n))
                                    }
                                }),
                                    e._isQueuing = !0
                            }
                            return e.ga
                        }),
                        v(this, "event", function (t, r) {
                            if ("string" == typeof t)
                                e._gtag("event", t, e._toGtagOptions(r));
                            else {
                                var n = t.action
                                    , s = t.category
                                    , a = t.label
                                    , o = t.value
                                    , l = t.nonInteraction
                                    , c = t.transport;
                                if (!s || !n) {
                                    console.warn("args.category AND args.action are required in event()");
                                    return
                                }
                                var u = {
                                    hitType: "event",
                                    eventCategory: (0,
                                        i.default)(s),
                                    eventAction: (0,
                                        i.default)(n)
                                };
                                a && (u.eventLabel = (0,
                                    i.default)(a)),
                                void 0 !== o && ("number" != typeof o ? console.warn("Expected `args.value` arg to be a Number.") : u.eventValue = o),
                                void 0 !== l && ("boolean" != typeof l ? console.warn("`args.nonInteraction` must be a boolean.") : u.nonInteraction = l),
                                void 0 !== c && ("string" != typeof c ? console.warn("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(c) && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),
                                    u.transport = c)),
                                    e._gaCommand("send", u)
                            }
                        }),
                        v(this, "send", function (t) {
                            e._gaCommand("send", t)
                        }),
                        this.reset()
                }

                return e = [{
                    key: "gtag",
                    value: function () {
                        this._gtag.apply(this, arguments)
                    }
                }],
                    m(r.prototype, e),
                t && m(r, t),
                    Object.defineProperty(r, "prototype", {
                        writable: !1
                    }),
                    r
            }();
            t.GA4 = b;
            var w = new b;
            t.default = w
        },
        57815: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = void 0,
                t.default = function () {
                    for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    "undefined" != typeof window && (void 0 === window.gtag && (window.dataLayer = window.dataLayer || [],
                            window.gtag = function () {
                                window.dataLayer.push(arguments)
                            }
                    ),
                        (e = window).gtag.apply(e, r))
                }
        },
        97688: function (e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                        : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                )(e)
            }

            t.ZP = void 0;
            var i = function (e, t) {
                if (!t && e && e.__esModule)
                    return e;
                if (null === e || "object" !== n(e) && "function" != typeof e)
                    return {
                        default: e
                    };
                var r = s(t);
                if (r && r.has(e))
                    return r.get(e);
                var i = {}
                    , a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        l && (l.get || l.set) ? Object.defineProperty(i, o, l) : i[o] = e[o]
                    }
                return i.default = e,
                r && r.set(e, i),
                    i
            }(r(91909));

            function s(e) {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap
                    , r = new WeakMap;
                return (s = function (e) {
                        return e ? r : t
                    }
                )(e)
            }

            i.GA4;
            var a = i.default;
            t.ZP = a
        },
        50631: function (e) {
            e.exports = function (e, t, r, n) {
                var i = r ? r.call(n, e, t) : void 0;
                if (void 0 !== i)
                    return !!i;
                if (e === t)
                    return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t)
                    return !1;
                var s = Object.keys(e)
                    , a = Object.keys(t);
                if (s.length !== a.length)
                    return !1;
                for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < s.length; l++) {
                    var c = s[l];
                    if (!o(c))
                        return !1;
                    var u = e[c]
                        , h = t[c];
                    if (!1 === (i = r ? r.call(n, u, h, c) : void 0) || void 0 === i && u !== h)
                        return !1
                }
                return !0
            }
        },
        1777: function (e, t, r) {
            "use strict";
            r.d(t, {
                f6: function () {
                    return tl
                },
                vJ: function () {
                    return tv
                },
                ZP: function () {
                    return tg
                },
                F4: function () {
                    return ty
                },
                zo: function () {
                    return tg
                },
                Fg: function () {
                    return to
                }
            });
            var n = function () {
                return (n = Object.assign || function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in t = arguments[r])
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }
                ).apply(this, arguments)
            };

            function i(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, s = t.length; i < s; i++)
                        !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)),
                            n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            var s = r(50959)
                , a = r(50631)
                , o = r.n(a)
                , l = "-ms-"
                , c = "-moz-"
                , u = "-webkit-"
                , h = "comm"
                , d = "rule"
                , f = "decl"
                , p = "@keyframes"
                , g = Math.abs
                , m = String.fromCharCode
                , v = Object.assign;

            function y(e, t) {
                return (e = t.exec(e)) ? e[0] : e
            }

            function b(e, t, r) {
                return e.replace(t, r)
            }

            function w(e, t, r) {
                return e.indexOf(t, r)
            }

            function _(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function k(e, t, r) {
                return e.slice(t, r)
            }

            function S(e) {
                return e.length
            }

            function E(e, t) {
                return t.push(e),
                    e
            }

            function $(e, t) {
                return e.filter(function (e) {
                    return !y(e, t)
                })
            }

            var O = 1
                , T = 1
                , C = 0
                , A = 0
                , j = 0
                , P = "";

            function x(e, t, r, n, i, s, a, o) {
                return {
                    value: e,
                    root: t,
                    parent: r,
                    type: n,
                    props: i,
                    children: s,
                    line: O,
                    column: T,
                    length: a,
                    return: "",
                    siblings: o
                }
            }

            function R(e, t) {
                return v(x("", null, null, "", null, null, 0, e.siblings), e, {
                    length: -e.length
                }, t)
            }

            function I(e) {
                for (; e.root;)
                    e = R(e.root, {
                        children: [e]
                    });
                E(e, e.siblings)
            }

            function L() {
                return j = A < C ? _(P, A++) : 0,
                    T++,
                10 === j && (T = 1,
                    O++),
                    j
            }

            function N() {
                return _(P, A)
            }

            function D(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function U(e) {
                var t, r;
                return (t = A - 1,
                    r = function e(t) {
                        for (; L();)
                            switch (j) {
                                case t:
                                    return A;
                                case 34:
                                case 39:
                                    34 !== t && 39 !== t && e(j);
                                    break;
                                case 40:
                                    41 === t && e(t);
                                    break;
                                case 92:
                                    L()
                            }
                        return A
                    }(91 === e ? e + 2 : 40 === e ? e + 1 : e),
                    k(P, t, r)).trim()
            }

            function F(e, t) {
                for (var r = "", n = 0; n < e.length; n++)
                    r += t(e[n], n, e, t) || "";
                return r
            }

            function M(e, t, r, n) {
                switch (e.type) {
                    case "@layer":
                        if (e.children.length)
                            break;
                    case "@import":
                    case f:
                        return e.return = e.return || e.value;
                    case h:
                        return "";
                    case p:
                        return e.return = e.value + "{" + F(e.children, n) + "}";
                    case d:
                        if (!S(e.value = e.props.join(",")))
                            return ""
                }
                return S(r = F(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
            }

            function G(e, t, r, n) {
                if (e.length > -1 && !e.return)
                    switch (e.type) {
                        case f:
                            e.return = function e(t, r, n) {
                                var i;
                                switch (i = r,
                                    45 ^ _(t, 0) ? (((i << 2 ^ _(t, 0)) << 2 ^ _(t, 1)) << 2 ^ _(t, 2)) << 2 ^ _(t, 3) : 0) {
                                    case 5103:
                                        return u + "print-" + t + t;
                                    case 5737:
                                    case 4201:
                                    case 3177:
                                    case 3433:
                                    case 1641:
                                    case 4457:
                                    case 2921:
                                    case 5572:
                                    case 6356:
                                    case 5844:
                                    case 3191:
                                    case 6645:
                                    case 3005:
                                    case 6391:
                                    case 5879:
                                    case 5623:
                                    case 6135:
                                    case 4599:
                                    case 4855:
                                    case 4215:
                                    case 6389:
                                    case 5109:
                                    case 5365:
                                    case 5621:
                                    case 3829:
                                        return u + t + t;
                                    case 4789:
                                        return c + t + t;
                                    case 5349:
                                    case 4246:
                                    case 4810:
                                    case 6968:
                                    case 2756:
                                        return u + t + c + t + l + t + t;
                                    case 5936:
                                        switch (_(t, r + 11)) {
                                            case 114:
                                                return u + t + l + b(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                            case 108:
                                                return u + t + l + b(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                            case 45:
                                                return u + t + l + b(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                                        }
                                    case 6828:
                                    case 4268:
                                    case 2903:
                                        return u + t + l + t + t;
                                    case 6165:
                                        return u + t + l + "flex-" + t + t;
                                    case 5187:
                                        return u + t + b(t, /(\w+).+(:[^]+)/, u + "box-$1$2" + l + "flex-$1$2") + t;
                                    case 5443:
                                        return u + t + l + "flex-item-" + b(t, /flex-|-self/g, "") + (y(t, /flex-|baseline/) ? "" : l + "grid-row-" + b(t, /flex-|-self/g, "")) + t;
                                    case 4675:
                                        return u + t + l + "flex-line-pack" + b(t, /align-content|flex-|-self/g, "") + t;
                                    case 5548:
                                        return u + t + l + b(t, "shrink", "negative") + t;
                                    case 5292:
                                        return u + t + l + b(t, "basis", "preferred-size") + t;
                                    case 6060:
                                        return u + "box-" + b(t, "-grow", "") + u + t + l + b(t, "grow", "positive") + t;
                                    case 4554:
                                        return u + b(t, /([^-])(transform)/g, "$1" + u + "$2") + t;
                                    case 6187:
                                        return b(b(b(t, /(zoom-|grab)/, u + "$1"), /(image-set)/, u + "$1"), t, "") + t;
                                    case 5495:
                                    case 3959:
                                        return b(t, /(image-set\([^]*)/, u + "$1$`$1");
                                    case 4968:
                                        return b(b(t, /(.+:)(flex-)?(.*)/, u + "box-pack:$3" + l + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + u + t + t;
                                    case 4200:
                                        if (!y(t, /flex-|baseline/))
                                            return l + "grid-column-align" + k(t, r) + t;
                                        break;
                                    case 2592:
                                    case 3360:
                                        return l + b(t, "template-", "") + t;
                                    case 4384:
                                    case 3616:
                                        if (n && n.some(function (e, t) {
                                            return r = t,
                                                y(e.props, /grid-\w+-end/)
                                        }))
                                            return ~w(t + (n = n[r].value), "span", 0) ? t : l + b(t, "-start", "") + t + l + "grid-row-span:" + (~w(n, "span", 0) ? y(n, /\d+/) : +y(n, /\d+/) - +y(t, /\d+/)) + ";";
                                        return l + b(t, "-start", "") + t;
                                    case 4896:
                                    case 4128:
                                        return n && n.some(function (e) {
                                            return y(e.props, /grid-\w+-start/)
                                        }) ? t : l + b(b(t, "-end", "-span"), "span ", "") + t;
                                    case 4095:
                                    case 3583:
                                    case 4068:
                                    case 2532:
                                        return b(t, /(.+)-inline(.+)/, u + "$1$2") + t;
                                    case 8116:
                                    case 7059:
                                    case 5753:
                                    case 5535:
                                    case 5445:
                                    case 5701:
                                    case 4933:
                                    case 4677:
                                    case 5533:
                                    case 5789:
                                    case 5021:
                                    case 4765:
                                        if (S(t) - 1 - r > 6)
                                            switch (_(t, r + 1)) {
                                                case 109:
                                                    if (45 !== _(t, r + 4))
                                                        break;
                                                case 102:
                                                    return b(t, /(.+:)(.+)-([^]+)/, "$1" + u + "$2-$3$1" + c + (108 == _(t, r + 3) ? "$3" : "$2-$3")) + t;
                                                case 115:
                                                    return ~w(t, "stretch", 0) ? e(b(t, "stretch", "fill-available"), r, n) + t : t
                                            }
                                        break;
                                    case 5152:
                                    case 5920:
                                        return b(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (e, r, n, i, s, a, o) {
                                            return l + r + ":" + n + o + (i ? l + r + "-span:" + (s ? a : +a - +n) + o : "") + t
                                        });
                                    case 4949:
                                        if (121 === _(t, r + 6))
                                            return b(t, ":", ":" + u) + t;
                                        break;
                                    case 6444:
                                        switch (_(t, 45 === _(t, 14) ? 18 : 11)) {
                                            case 120:
                                                return b(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + u + (45 === _(t, 14) ? "inline-" : "") + "box$3$1" + u + "$2$3$1" + l + "$2box$3") + t;
                                            case 100:
                                                return b(t, ":", ":" + l) + t
                                        }
                                        break;
                                    case 5719:
                                    case 2647:
                                    case 2135:
                                    case 3927:
                                    case 2391:
                                        return b(t, "scroll-", "scroll-snap-") + t
                                }
                                return t
                            }(e.value, e.length, r);
                            return;
                        case p:
                            return F([R(e, {
                                value: b(e.value, "@", "@" + u)
                            })], n);
                        case d:
                            if (e.length)
                                return (r = e.props).map(function (t) {
                                    switch (y(t, n = /(::plac\w+|:read-\w+)/)) {
                                        case ":read-only":
                                        case ":read-write":
                                            I(R(e, {
                                                props: [b(t, /:(read-\w+)/, ":" + c + "$1")]
                                            })),
                                                I(R(e, {
                                                    props: [t]
                                                })),
                                                v(e, {
                                                    props: $(r, n)
                                                });
                                            break;
                                        case "::placeholder":
                                            I(R(e, {
                                                props: [b(t, /:(plac\w+)/, ":" + u + "input-$1")]
                                            })),
                                                I(R(e, {
                                                    props: [b(t, /:(plac\w+)/, ":" + c + "$1")]
                                                })),
                                                I(R(e, {
                                                    props: [b(t, /:(plac\w+)/, l + "input-$1")]
                                                })),
                                                I(R(e, {
                                                    props: [t]
                                                })),
                                                v(e, {
                                                    props: $(r, n)
                                                })
                                    }
                                    return ""
                                }).join("")
                    }
            }

            function z(e, t, r, n, i, s, a, o, l, c, u, h) {
                for (var f = i - 1, p = 0 === i ? s : [""], m = p.length, v = 0, y = 0, w = 0; v < n; ++v)
                    for (var _ = 0, S = k(e, f + 1, f = g(y = a[v])), E = e; _ < m; ++_)
                        (E = (y > 0 ? p[_] + " " + S : b(S, /&\f/g, p[_])).trim()) && (l[w++] = E);
                return x(e, t, r, 0 === i ? d : o, l, c, u, h)
            }

            function B(e, t, r, n, i) {
                return x(e, t, r, f, k(e, 0, n), k(e, n + 1, -1), n, i)
            }

            var q = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                }
                , K = r(6779)
                , J = void 0 !== K && void 0 !== K.env && (K.env.REACT_APP_SC_ATTR || K.env.SC_ATTR) || "data-styled"
                , H = "active"
                , V = "data-styled-version"
                , W = "6.1.8"
                , Y = "/*!sc*/\n"
                , X = "undefined" != typeof window && "HTMLElement" in window
                ,
                Z = !!("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : void 0 !== K && void 0 !== K.env && void 0 !== K.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== K.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== K.env.REACT_APP_SC_DISABLE_SPEEDY && K.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== K && void 0 !== K.env && void 0 !== K.env.SC_DISABLE_SPEEDY && "" !== K.env.SC_DISABLE_SPEEDY && "false" !== K.env.SC_DISABLE_SPEEDY && K.env.SC_DISABLE_SPEEDY)
                , Q = {}
                , ee = Object.freeze([])
                , et = Object.freeze({});

            function er(e, t, r) {
                return void 0 === r && (r = et),
                e.theme !== r.theme && e.theme || t || r.theme
            }

            var en = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"])
                , ei = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
                , es = /(^-|-$)/g;

            function ea(e) {
                return e.replace(ei, "-").replace(es, "")
            }

            var eo = /(a)(d)/gi
                , el = function (e) {
                return String.fromCharCode(e + (e > 25 ? 39 : 97))
            };

            function ec(e) {
                var t, r = "";
                for (t = Math.abs(e); t > 52; t = t / 52 | 0)
                    r = el(t % 52) + r;
                return (el(t % 52) + r).replace(eo, "$1-$2")
            }

            var eu, eh = function (e, t) {
                for (var r = t.length; r;)
                    e = 33 * e ^ t.charCodeAt(--r);
                return e
            }, ed = function (e) {
                return eh(5381, e)
            };

            function ef(e) {
                return ec(ed(e) >>> 0)
            }

            function ep(e) {
                return "string" == typeof e
            }

            var eg = "function" == typeof Symbol && Symbol.for
                , em = eg ? Symbol.for("react.memo") : 60115
                , ev = eg ? Symbol.for("react.forward_ref") : 60112
                , ey = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
                , eb = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
                , ew = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
                , e_ = ((eu = {})[ev] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            },
                eu[em] = ew,
                eu);

            function ek(e) {
                return ("type" in e && e.type.$$typeof) === em ? ew : "$$typeof" in e ? e_[e.$$typeof] : ey
            }

            var eS = Object.defineProperty
                , eE = Object.getOwnPropertyNames
                , e$ = Object.getOwnPropertySymbols
                , eO = Object.getOwnPropertyDescriptor
                , eT = Object.getPrototypeOf
                , eC = Object.prototype;

            function eA(e) {
                return "function" == typeof e
            }

            function ej(e) {
                return "object" == typeof e && "styledComponentId" in e
            }

            function eP(e, t) {
                return e && t ? "".concat(e, " ").concat(t) : e || t || ""
            }

            function ex(e, t) {
                if (0 === e.length)
                    return "";
                for (var r = e[0], n = 1; n < e.length; n++)
                    r += t ? t + e[n] : e[n];
                return r
            }

            function eR(e) {
                return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
            }

            function eI(e, t) {
                Object.defineProperty(e, "toString", {
                    value: t
                })
            }

            function eL(e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
            }

            var eN = function () {
                function e(e) {
                    this.groupSizes = new Uint32Array(512),
                        this.length = 512,
                        this.tag = e
                }

                return e.prototype.indexOfGroup = function (e) {
                    for (var t = 0, r = 0; r < e; r++)
                        t += this.groupSizes[r];
                    return t
                }
                    ,
                    e.prototype.insertRules = function (e, t) {
                        if (e >= this.groupSizes.length) {
                            for (var r = this.groupSizes, n = r.length, i = n; e >= i;)
                                if ((i <<= 1) < 0)
                                    throw eL(16, "".concat(e));
                            this.groupSizes = new Uint32Array(i),
                                this.groupSizes.set(r),
                                this.length = i;
                            for (var s = n; s < i; s++)
                                this.groupSizes[s] = 0
                        }
                        for (var a = this.indexOfGroup(e + 1), o = (s = 0,
                            t.length); s < o; s++)
                            this.tag.insertRule(a, t[s]) && (this.groupSizes[e]++,
                                a++)
                    }
                    ,
                    e.prototype.clearGroup = function (e) {
                        if (e < this.length) {
                            var t = this.groupSizes[e]
                                , r = this.indexOfGroup(e)
                                , n = r + t;
                            this.groupSizes[e] = 0;
                            for (var i = r; i < n; i++)
                                this.tag.deleteRule(r)
                        }
                    }
                    ,
                    e.prototype.getGroup = function (e) {
                        var t = "";
                        if (e >= this.length || 0 === this.groupSizes[e])
                            return t;
                        for (var r = this.groupSizes[e], n = this.indexOfGroup(e), i = n + r, s = n; s < i; s++)
                            t += "".concat(this.tag.getRule(s)).concat(Y);
                        return t
                    }
                    ,
                    e
            }()
                , eD = new Map
                , eU = new Map
                , eF = 1
                , eM = function (e) {
                if (eD.has(e))
                    return eD.get(e);
                for (; eU.has(eF);)
                    eF++;
                var t = eF++;
                return eD.set(e, t),
                    eU.set(t, e),
                    t
            }
                , eG = function (e, t) {
                eF = t + 1,
                    eD.set(e, t),
                    eU.set(t, e)
            }
                , ez = "style[".concat(J, "][").concat(V, '="').concat(W, '"]')
                , eB = new RegExp("^".concat(J, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'))
                , eq = function (e, t, r) {
                for (var n, i = r.split(","), s = 0, a = i.length; s < a; s++)
                    (n = i[s]) && e.registerName(t, n)
            }
                , eK = function (e, t) {
                for (var r, n = (null !== (r = t.textContent) && void 0 !== r ? r : "").split(Y), i = [], s = 0, a = n.length; s < a; s++) {
                    var o = n[s].trim();
                    if (o) {
                        var l = o.match(eB);
                        if (l) {
                            var c = 0 | parseInt(l[1], 10)
                                , u = l[2];
                            0 !== c && (eG(u, c),
                                eq(e, u, l[3]),
                                e.getTag().insertRules(c, i)),
                                i.length = 0
                        } else
                            i.push(o)
                    }
                }
            }
                , eJ = function (e) {
                var t, n = document.head, i = e || n, s = document.createElement("style"),
                    a = (t = Array.from(i.querySelectorAll("style[".concat(J, "]"))))[t.length - 1],
                    o = void 0 !== a ? a.nextSibling : null;
                s.setAttribute(J, H),
                    s.setAttribute(V, W);
                var l = r.nc;
                return l && s.setAttribute("nonce", l),
                    i.insertBefore(s, o),
                    s
            }
                , eH = function () {
                function e(e) {
                    this.element = eJ(e),
                        this.element.appendChild(document.createTextNode("")),
                        this.sheet = function (e) {
                            if (e.sheet)
                                return e.sheet;
                            for (var t = document.styleSheets, r = 0, n = t.length; r < n; r++) {
                                var i = t[r];
                                if (i.ownerNode === e)
                                    return i
                            }
                            throw eL(17)
                        }(this.element),
                        this.length = 0
                }

                return e.prototype.insertRule = function (e, t) {
                    try {
                        return this.sheet.insertRule(t, e),
                            this.length++,
                            !0
                    } catch (e) {
                        return !1
                    }
                }
                    ,
                    e.prototype.deleteRule = function (e) {
                        this.sheet.deleteRule(e),
                            this.length--
                    }
                    ,
                    e.prototype.getRule = function (e) {
                        var t = this.sheet.cssRules[e];
                        return t && t.cssText ? t.cssText : ""
                    }
                    ,
                    e
            }()
                , eV = function () {
                function e(e) {
                    this.element = eJ(e),
                        this.nodes = this.element.childNodes,
                        this.length = 0
                }

                return e.prototype.insertRule = function (e, t) {
                    if (e <= this.length && e >= 0) {
                        var r = document.createTextNode(t);
                        return this.element.insertBefore(r, this.nodes[e] || null),
                            this.length++,
                            !0
                    }
                    return !1
                }
                    ,
                    e.prototype.deleteRule = function (e) {
                        this.element.removeChild(this.nodes[e]),
                            this.length--
                    }
                    ,
                    e.prototype.getRule = function (e) {
                        return e < this.length ? this.nodes[e].textContent : ""
                    }
                    ,
                    e
            }()
                , eW = function () {
                function e(e) {
                    this.rules = [],
                        this.length = 0
                }

                return e.prototype.insertRule = function (e, t) {
                    return e <= this.length && (this.rules.splice(e, 0, t),
                        this.length++,
                        !0)
                }
                    ,
                    e.prototype.deleteRule = function (e) {
                        this.rules.splice(e, 1),
                            this.length--
                    }
                    ,
                    e.prototype.getRule = function (e) {
                        return e < this.length ? this.rules[e] : ""
                    }
                    ,
                    e
            }()
                , eY = X
                , eX = {
                isServer: !X,
                useCSSOMInjection: !Z
            }
                , eZ = function () {
                function e(e, t, r) {
                    void 0 === e && (e = et),
                    void 0 === t && (t = {});
                    var i = this;
                    this.options = n(n({}, eX), e),
                        this.gs = t,
                        this.names = new Map(r),
                        this.server = !!e.isServer,
                    !this.server && X && eY && (eY = !1,
                        function (e) {
                            for (var t = document.querySelectorAll(ez), r = 0, n = t.length; r < n; r++) {
                                var i = t[r];
                                i && i.getAttribute(J) !== H && (eK(e, i),
                                i.parentNode && i.parentNode.removeChild(i))
                            }
                        }(this)),
                        eI(this, function () {
                            return function (e) {
                                for (var t = e.getTag(), r = t.length, n = "", i = 0; i < r; i++)
                                    (function (r) {
                                            var i = eU.get(r);
                                            if (void 0 !== i) {
                                                var s = e.names.get(i)
                                                    , a = t.getGroup(r);
                                                if (void 0 !== s && 0 !== a.length) {
                                                    var o = "".concat(J, ".g").concat(r, '[id="').concat(i, '"]')
                                                        , l = "";
                                                    void 0 !== s && s.forEach(function (e) {
                                                        e.length > 0 && (l += "".concat(e, ","))
                                                    }),
                                                        n += "".concat(a).concat(o, '{content:"').concat(l, '"}').concat(Y)
                                                }
                                            }
                                        }
                                    )(i);
                                return n
                            }(i)
                        })
                }

                return e.registerId = function (e) {
                    return eM(e)
                }
                    ,
                    e.prototype.reconstructWithOptions = function (t, r) {
                        return void 0 === r && (r = !0),
                            new e(n(n({}, this.options), t), this.gs, r && this.names || void 0)
                    }
                    ,
                    e.prototype.allocateGSInstance = function (e) {
                        return this.gs[e] = (this.gs[e] || 0) + 1
                    }
                    ,
                    e.prototype.getTag = function () {
                        var e, t, r;
                        return this.tag || (this.tag = (t = (e = this.options).useCSSOMInjection,
                            r = e.target,
                            new eN(e.isServer ? new eW(r) : t ? new eH(r) : new eV(r))))
                    }
                    ,
                    e.prototype.hasNameForId = function (e, t) {
                        return this.names.has(e) && this.names.get(e).has(t)
                    }
                    ,
                    e.prototype.registerName = function (e, t) {
                        if (eM(e),
                            this.names.has(e))
                            this.names.get(e).add(t);
                        else {
                            var r = new Set;
                            r.add(t),
                                this.names.set(e, r)
                        }
                    }
                    ,
                    e.prototype.insertRules = function (e, t, r) {
                        this.registerName(e, t),
                            this.getTag().insertRules(eM(e), r)
                    }
                    ,
                    e.prototype.clearNames = function (e) {
                        this.names.has(e) && this.names.get(e).clear()
                    }
                    ,
                    e.prototype.clearRules = function (e) {
                        this.getTag().clearGroup(eM(e)),
                            this.clearNames(e)
                    }
                    ,
                    e.prototype.clearTag = function () {
                        this.tag = void 0
                    }
                    ,
                    e
            }()
                , eQ = /&/g
                , e0 = /^\s*\/\/.*$/gm;

            function e1(e) {
                var t, r, n, i = void 0 === e ? et : e, s = i.options, a = void 0 === s ? et : s, o = i.plugins,
                    l = void 0 === o ? ee : o, c = function (e, n, i) {
                        return i.startsWith(r) && i.endsWith(r) && i.replaceAll(r, "").length > 0 ? ".".concat(t) : e
                    }, u = l.slice();
                u.push(function (e) {
                    e.type === d && e.value.includes("&") && (e.props[0] = e.props[0].replace(eQ, r).replace(n, c))
                }),
                a.prefix && u.push(G),
                    u.push(M);
                var f = function (e, i, s, o) {
                    void 0 === i && (i = ""),
                    void 0 === s && (s = ""),
                    void 0 === o && (o = "&"),
                        t = o,
                        r = i,
                        n = RegExp("\\".concat(r, "\\b"), "g");
                    var l, c, d, f, p, v = e.replace(e0, ""), y = (p = function e(t, r, n, i, s, a, o, l, c) {
                        for (var u, d = 0, f = 0, p = o, v = 0, y = 0, $ = 0, C = 1, R = 1, I = 1, F = 0, M = "", G = s, q = a, K = i, J = M; R;)
                            switch ($ = F,
                                F = L()) {
                                case 40:
                                    if (108 != $ && 58 == _(J, p - 1)) {
                                        -1 != w(J += b(U(F), "&", "&\f"), "&\f", g(d ? l[d - 1] : 0)) && (I = -1);
                                        break
                                    }
                                case 34:
                                case 39:
                                case 91:
                                    J += U(F);
                                    break;
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    J += function (e) {
                                        for (; j = N();)
                                            if (j < 33)
                                                L();
                                            else
                                                break;
                                        return D(e) > 2 || D(j) > 3 ? "" : " "
                                    }($);
                                    break;
                                case 92:
                                    J += function (e, t) {
                                        for (var r; --t && L() && !(j < 48) && !(j > 102) && (!(j > 57) || !(j < 65)) && (!(j > 70) || !(j < 97));)
                                            ;
                                        return r = A + (t < 6 && 32 == N() && 32 == L()),
                                            k(P, e, r)
                                    }(A - 1, 7);
                                    continue;
                                case 47:
                                    switch (N()) {
                                        case 42:
                                        case 47:
                                            E(x(u = function (e, t) {
                                                for (; L();)
                                                    if (e + j === 57)
                                                        break;
                                                    else if (e + j === 84 && 47 === N())
                                                        break;
                                                return "/*" + k(P, t, A - 1) + "*" + m(47 === e ? e : L())
                                            }(L(), A), r, n, h, m(j), k(u, 2, -2), 0, c), c);
                                            break;
                                        default:
                                            J += "/"
                                    }
                                    break;
                                case 123 * C:
                                    l[d++] = S(J) * I;
                                case 125 * C:
                                case 59:
                                case 0:
                                    switch (F) {
                                        case 0:
                                        case 125:
                                            R = 0;
                                        case 59 + f:
                                            -1 == I && (J = b(J, /\f/g, "")),
                                            y > 0 && S(J) - p && E(y > 32 ? B(J + ";", i, n, p - 1, c) : B(b(J, " ", "") + ";", i, n, p - 2, c), c);
                                            break;
                                        case 59:
                                            J += ";";
                                        default:
                                            if (E(K = z(J, r, n, d, f, s, l, M, G = [], q = [], p, a), a),
                                            123 === F) {
                                                if (0 === f)
                                                    e(J, r, K, K, G, a, p, l, q);
                                                else
                                                    switch (99 === v && 110 === _(J, 3) ? 100 : v) {
                                                        case 100:
                                                        case 108:
                                                        case 109:
                                                        case 115:
                                                            e(t, K, K, i && E(z(t, K, K, 0, 0, s, l, M, s, G = [], p, q), q), s, q, p, l, i ? G : q);
                                                            break;
                                                        default:
                                                            e(J, K, K, K, [""], q, 0, l, q)
                                                    }
                                            }
                                    }
                                    d = f = y = 0,
                                        C = I = 1,
                                        M = J = "",
                                        p = o;
                                    break;
                                case 58:
                                    p = 1 + S(J),
                                        y = $;
                                default:
                                    if (C < 1) {
                                        if (123 == F)
                                            --C;
                                        else if (125 == F && 0 == C++ && 125 == (j = A > 0 ? _(P, --A) : 0,
                                            T--,
                                        10 === j && (T = 1,
                                            O--),
                                            j))
                                            continue
                                    }
                                    switch (J += m(F),
                                    F * C) {
                                        case 38:
                                            I = f > 0 ? 1 : (J += "\f",
                                                -1);
                                            break;
                                        case 44:
                                            l[d++] = (S(J) - 1) * I,
                                                I = 1;
                                            break;
                                        case 64:
                                            45 === N() && (J += U(L())),
                                                v = N(),
                                                f = p = S(M = J += function (e) {
                                                    for (; !D(N());)
                                                        L();
                                                    return k(P, e, A)
                                                }(A)),
                                                F++;
                                            break;
                                        case 45:
                                            45 === $ && 2 == S(J) && (C = 0)
                                    }
                            }
                        return a
                    }("", null, null, null, [""], (f = d = s || i ? "".concat(s, " ").concat(i, " { ").concat(v, " }") : v,
                        O = T = 1,
                        C = S(P = f),
                        A = 0,
                        d = []), 0, [0], d),
                        P = "",
                        p);
                    a.namespace && (y = function e(t, r) {
                        return t.map(function (t) {
                            return "rule" === t.type && (t.value = "".concat(r, " ").concat(t.value),
                                t.value = t.value.replaceAll(",", ",".concat(r, " ")),
                                t.props = t.props.map(function (e) {
                                    return "".concat(r, " ").concat(e)
                                })),
                            Array.isArray(t.children) && "@keyframes" !== t.type && (t.children = e(t.children, r)),
                                t
                        })
                    }(y, a.namespace));
                    var $ = [];
                    return F(y, (c = (l = u.concat(function (e) {
                            var t;
                            !e.root && (e = e.return) && (t = e,
                                $.push(t))
                        })).length,
                            function (e, t, r, n) {
                                for (var i = "", s = 0; s < c; s++)
                                    i += l[s](e, t, r, n) || "";
                                return i
                            }
                    )),
                        $
                };
                return f.hash = l.length ? l.reduce(function (e, t) {
                    return t.name || eL(15),
                        eh(e, t.name)
                }, 5381).toString() : "",
                    f
            }

            var e2 = new eZ
                , e5 = e1()
                , e3 = s.createContext({
                shouldForwardProp: void 0,
                styleSheet: e2,
                stylis: e5
            })
                , e4 = (e3.Consumer,
                s.createContext(void 0));

            function e9() {
                return (0,
                    s.useContext)(e3)
            }

            function e6(e) {
                var t = (0,
                    s.useState)(e.stylisPlugins)
                    , r = t[0]
                    , n = t[1]
                    , i = e9().styleSheet
                    , a = (0,
                    s.useMemo)(function () {
                    var t = i;
                    return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                        target: e.target
                    }, !1)),
                    e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                        useCSSOMInjection: !1
                    })),
                        t
                }, [e.disableCSSOMInjection, e.sheet, e.target, i])
                    , l = (0,
                    s.useMemo)(function () {
                    return e1({
                        options: {
                            namespace: e.namespace,
                            prefix: e.enableVendorPrefixes
                        },
                        plugins: r
                    })
                }, [e.enableVendorPrefixes, e.namespace, r]);
                (0,
                    s.useEffect)(function () {
                    o()(r, e.stylisPlugins) || n(e.stylisPlugins)
                }, [e.stylisPlugins]);
                var c = (0,
                    s.useMemo)(function () {
                    return {
                        shouldForwardProp: e.shouldForwardProp,
                        styleSheet: a,
                        stylis: l
                    }
                }, [e.shouldForwardProp, a, l]);
                return s.createElement(e3.Provider, {
                    value: c
                }, s.createElement(e4.Provider, {
                    value: l
                }, e.children))
            }

            var e8 = function () {
                function e(e, t) {
                    var r = this;
                    this.inject = function (e, t) {
                        void 0 === t && (t = e5);
                        var n = r.name + t.hash;
                        e.hasNameForId(r.id, n) || e.insertRules(r.id, n, t(r.rules, n, "@keyframes"))
                    }
                        ,
                        this.name = e,
                        this.id = "sc-keyframes-".concat(e),
                        this.rules = t,
                        eI(this, function () {
                            throw eL(12, String(r.name))
                        })
                }

                return e.prototype.getName = function (e) {
                    return void 0 === e && (e = e5),
                    this.name + e.hash
                }
                    ,
                    e
            }();

            function e7(e) {
                for (var t = "", r = 0; r < e.length; r++) {
                    var n = e[r];
                    if (1 === r && "-" === n && "-" === e[0])
                        return e;
                    n >= "A" && n <= "Z" ? t += "-" + n.toLowerCase() : t += n
                }
                return t.startsWith("ms-") ? "-" + t : t
            }

            var te = function (e) {
                return null == e || !1 === e || "" === e
            }
                , tt = function (e) {
                var t = [];
                for (var r in e) {
                    var n = e[r];
                    e.hasOwnProperty(r) && !te(n) && (Array.isArray(n) && n.isCss || eA(n) ? t.push("".concat(e7(r), ":"), n, ";") : eR(n) ? t.push.apply(t, i(i(["".concat(r, " {")], tt(n), !1), ["}"], !1)) : t.push("".concat(e7(r), ": ").concat(null == n || "boolean" == typeof n || "" === n ? "" : "number" != typeof n || 0 === n || r in q || r.startsWith("--") ? String(n).trim() : "".concat(n, "px"), ";")))
                }
                return t
            };

            function tr(e, t, r, n) {
                return te(e) ? [] : ej(e) ? [".".concat(e.styledComponentId)] : eA(e) ? !eA(e) || e.prototype && e.prototype.isReactComponent || !t ? [e] : tr(e(t), t, r, n) : e instanceof e8 ? r ? (e.inject(r, n),
                    [e.getName(n)]) : [e] : eR(e) ? tt(e) : Array.isArray(e) ? Array.prototype.concat.apply(ee, e.map(function (e) {
                    return tr(e, t, r, n)
                })) : [e.toString()]
            }

            function tn(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var r = e[t];
                    if (eA(r) && !ej(r))
                        return !1
                }
                return !0
            }

            var ti = ed(W)
                , ts = function () {
                function e(e, t, r) {
                    this.rules = e,
                        this.staticRulesId = "",
                        this.isStatic = (void 0 === r || r.isStatic) && tn(e),
                        this.componentId = t,
                        this.baseHash = eh(ti, t),
                        this.baseStyle = r,
                        eZ.registerId(t)
                }

                return e.prototype.generateAndInjectStyles = function (e, t, r) {
                    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, r) : "";
                    if (this.isStatic && !r.hash) {
                        if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
                            n = eP(n, this.staticRulesId);
                        else {
                            var i = ex(tr(this.rules, e, t, r))
                                , s = ec(eh(this.baseHash, i) >>> 0);
                            if (!t.hasNameForId(this.componentId, s)) {
                                var a = r(i, ".".concat(s), void 0, this.componentId);
                                t.insertRules(this.componentId, s, a)
                            }
                            n = eP(n, s),
                                this.staticRulesId = s
                        }
                    } else {
                        for (var o = eh(this.baseHash, r.hash), l = "", c = 0; c < this.rules.length; c++) {
                            var u = this.rules[c];
                            if ("string" == typeof u)
                                l += u;
                            else if (u) {
                                var h = ex(tr(u, e, t, r));
                                o = eh(o, h + c),
                                    l += h
                            }
                        }
                        if (l) {
                            var d = ec(o >>> 0);
                            t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, r(l, ".".concat(d), void 0, this.componentId)),
                                n = eP(n, d)
                        }
                    }
                    return n
                }
                    ,
                    e
            }()
                , ta = s.createContext(void 0);

            function to() {
                var e = (0,
                    s.useContext)(ta);
                if (!e)
                    throw eL(18);
                return e
            }

            function tl(e) {
                var t = s.useContext(ta)
                    , r = (0,
                    s.useMemo)(function () {
                    return function (e, t) {
                        if (!e)
                            throw eL(14);
                        if (eA(e))
                            return e(t);
                        if (Array.isArray(e) || "object" != typeof e)
                            throw eL(8);
                        return t ? n(n({}, t), e) : e
                    }(e.theme, t)
                }, [e.theme, t]);
                return e.children ? s.createElement(ta.Provider, {
                    value: r
                }, e.children) : null
            }

            ta.Consumer;
            var tc = {};

            function tu(e, t, r) {
                var i, a, o, l, c = ej(e), u = !ep(e), h = t.attrs, d = void 0 === h ? ee : h, f = t.componentId,
                    p = void 0 === f ? (i = t.displayName,
                        a = t.parentComponentId,
                        tc[o = "string" != typeof i ? "sc" : ea(i)] = (tc[o] || 0) + 1,
                        l = "".concat(o, "-").concat(ef(W + o + tc[o])),
                        a ? "".concat(a, "-").concat(l) : l) : f, g = t.displayName,
                    m = void 0 === g ? ep(e) ? "styled.".concat(e) : "Styled(".concat(e.displayName || e.name || "Component", ")") : g,
                    v = t.displayName && t.componentId ? "".concat(ea(t.displayName), "-").concat(t.componentId) : t.componentId || p,
                    y = c && e.attrs ? e.attrs.concat(d).filter(Boolean) : d, b = t.shouldForwardProp;
                if (c && e.shouldForwardProp) {
                    var w = e.shouldForwardProp;
                    if (t.shouldForwardProp) {
                        var _ = t.shouldForwardProp;
                        b = function (e, t) {
                            return w(e, t) && _(e, t)
                        }
                    } else
                        b = w
                }
                var k = new ts(r, v, c ? e.componentStyle : void 0);

                function S(e, t) {
                    return function (e, t, r) {
                        var i, a = e.attrs, o = e.componentStyle, l = e.defaultProps, c = e.foldedComponentIds,
                            u = e.styledComponentId, h = e.target, d = s.useContext(ta), f = e9(),
                            p = e.shouldForwardProp || f.shouldForwardProp, g = er(t, d, l) || et,
                            m = function (e, t, r) {
                                for (var i, s = n(n({}, t), {
                                    className: void 0,
                                    theme: r
                                }), a = 0; a < e.length; a += 1) {
                                    var o = eA(i = e[a]) ? i(s) : i;
                                    for (var l in o)
                                        s[l] = "className" === l ? eP(s[l], o[l]) : "style" === l ? n(n({}, s[l]), o[l]) : o[l]
                                }
                                return t.className && (s.className = eP(s.className, t.className)),
                                    s
                            }(a, t, g), v = m.as || h, y = {};
                        for (var b in m)
                            void 0 === m[b] || "$" === b[0] || "as" === b || "theme" === b && m.theme === g || ("forwardedAs" === b ? y.as = m.forwardedAs : p && !p(b, v) || (y[b] = m[b]));
                        var w = (i = e9(),
                            o.generateAndInjectStyles(m, i.styleSheet, i.stylis))
                            , _ = eP(c, u);
                        return w && (_ += " " + w),
                        m.className && (_ += " " + m.className),
                            y[ep(v) && !en.has(v) ? "class" : "className"] = _,
                            y.ref = r,
                            (0,
                                s.createElement)(v, y)
                    }(E, e, t)
                }

                S.displayName = m;
                var E = s.forwardRef(S);
                return E.attrs = y,
                    E.componentStyle = k,
                    E.displayName = m,
                    E.shouldForwardProp = b,
                    E.foldedComponentIds = c ? eP(e.foldedComponentIds, e.styledComponentId) : "",
                    E.styledComponentId = v,
                    E.target = c ? e.target : e,
                    Object.defineProperty(E, "defaultProps", {
                        get: function () {
                            return this._foldedDefaultProps
                        },
                        set: function (t) {
                            this._foldedDefaultProps = c ? function (e) {
                                for (var t = [], r = 1; r < arguments.length; r++)
                                    t[r - 1] = arguments[r];
                                for (var n = 0; n < t.length; n++)
                                    (function e(t, r, n) {
                                            if (void 0 === n && (n = !1),
                                            !n && !eR(t) && !Array.isArray(t))
                                                return r;
                                            if (Array.isArray(r))
                                                for (var i = 0; i < r.length; i++)
                                                    t[i] = e(t[i], r[i]);
                                            else if (eR(r))
                                                for (var i in r)
                                                    t[i] = e(t[i], r[i]);
                                            return t
                                        }
                                    )(e, t[n], !0);
                                return e
                            }({}, e.defaultProps, t) : t
                        }
                    }),
                    eI(E, function () {
                        return ".".concat(E.styledComponentId)
                    }),
                u && function e(t, r, n) {
                    if ("string" != typeof r) {
                        if (eC) {
                            var i = eT(r);
                            i && i !== eC && e(t, i, n)
                        }
                        var s = eE(r);
                        e$ && (s = s.concat(e$(r)));
                        for (var a = ek(t), o = ek(r), l = 0; l < s.length; ++l) {
                            var c = s[l];
                            if (!(c in eb || n && n[c] || o && c in o || a && c in a)) {
                                var u = eO(r, c);
                                try {
                                    eS(t, c, u)
                                } catch (e) {
                                }
                            }
                        }
                    }
                    return t
                }(E, e, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0
                }),
                    E
            }

            function th(e, t) {
                for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
                    r.push(t[n], e[n + 1]);
                return r
            }

            var td = function (e) {
                return Object.assign(e, {
                    isCss: !0
                })
            };

            function tf(e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                return eA(e) || eR(e) ? td(tr(th(ee, i([e], t, !0)))) : 0 === t.length && 1 === e.length && "string" == typeof e[0] ? tr(e) : td(tr(th(e, t)))
            }

            var tp = function (e) {
                return function e(t, r, s) {
                    if (void 0 === s && (s = et),
                        !r)
                        throw eL(1, r);
                    var a = function (e) {
                        for (var n = [], a = 1; a < arguments.length; a++)
                            n[a - 1] = arguments[a];
                        return t(r, s, tf.apply(void 0, i([e], n, !1)))
                    };
                    return a.attrs = function (i) {
                        return e(t, r, n(n({}, s), {
                            attrs: Array.prototype.concat(s.attrs, i).filter(Boolean)
                        }))
                    }
                        ,
                        a.withConfig = function (i) {
                            return e(t, r, n(n({}, s), i))
                        }
                        ,
                        a
                }(tu, e)
            }
                , tg = tp;
            en.forEach(function (e) {
                tg[e] = tp(e)
            });
            var tm = function () {
                function e(e, t) {
                    this.rules = e,
                        this.componentId = t,
                        this.isStatic = tn(e),
                        eZ.registerId(this.componentId + 1)
                }

                return e.prototype.createStyles = function (e, t, r, n) {
                    var i = n(ex(tr(this.rules, t, r, n)), "")
                        , s = this.componentId + e;
                    r.insertRules(s, s, i)
                }
                    ,
                    e.prototype.removeStyles = function (e, t) {
                        t.clearRules(this.componentId + e)
                    }
                    ,
                    e.prototype.renderStyles = function (e, t, r, n) {
                        e > 2 && eZ.registerId(this.componentId + e),
                            this.removeStyles(e, r),
                            this.createStyles(e, t, r, n)
                    }
                    ,
                    e
            }();

            function tv(e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                var a = tf.apply(void 0, i([e], t, !1))
                    , o = "sc-global-".concat(ef(JSON.stringify(a)))
                    , l = new tm(a, o)
                    , c = function (e) {
                    var t = e9()
                        , r = s.useContext(ta)
                        , n = s.useRef(t.styleSheet.allocateGSInstance(o)).current;
                    return t.styleSheet.server && u(n, e, t.styleSheet, r, t.stylis),
                        s.useLayoutEffect(function () {
                            if (!t.styleSheet.server)
                                return u(n, e, t.styleSheet, r, t.stylis),
                                    function () {
                                        return l.removeStyles(n, t.styleSheet)
                                    }
                        }, [n, e, t.styleSheet, r, t.stylis]),
                        null
                };

                function u(e, t, r, i, s) {
                    if (l.isStatic)
                        l.renderStyles(e, Q, r, s);
                    else {
                        var a = n(n({}, t), {
                            theme: er(t, i, c.defaultProps)
                        });
                        l.renderStyles(e, a, r, s)
                    }
                }

                return s.memo(c)
            }

            function ty(e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                var n = ex(tf.apply(void 0, i([e], t, !1)));
                return new e8(ef(n), n)
            }

            !function () {
                function e() {
                    var e = this;
                    this._emitSheetCSS = function () {
                        var t = e.instance.toString()
                            , n = r.nc
                            ,
                            i = ex([n && 'nonce="'.concat(n, '"'), "".concat(J, '="true"'), "".concat(V, '="').concat(W, '"')].filter(Boolean), " ");
                        return "<style ".concat(i, ">").concat(t, "</style>")
                    }
                        ,
                        this.getStyleTags = function () {
                            if (e.sealed)
                                throw eL(2);
                            return e._emitSheetCSS()
                        }
                        ,
                        this.getStyleElement = function () {
                            if (e.sealed)
                                throw eL(2);
                            var t, i = ((t = {})[J] = "",
                                t[V] = W,
                                t.dangerouslySetInnerHTML = {
                                    __html: e.instance.toString()
                                },
                                t), a = r.nc;
                            return a && (i.nonce = a),
                                [s.createElement("style", n({}, i, {
                                    key: "sc-0-0"
                                }))]
                        }
                        ,
                        this.seal = function () {
                            e.sealed = !0
                        }
                        ,
                        this.instance = new eZ({
                            isServer: !0
                        }),
                        this.sealed = !1
                }

                e.prototype.collectStyles = function (e) {
                    if (this.sealed)
                        throw eL(2);
                    return s.createElement(e6, {
                        sheet: this.instance
                    }, e)
                }
                    ,
                    e.prototype.interleaveWithNodeStream = function (e) {
                        throw eL(3)
                    }
            }()
        },
        12415: function (e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(50959)
                , i = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
                , s = n.useState
                , a = n.useEffect
                , o = n.useLayoutEffect
                , l = n.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !i(e, r)
                } catch (e) {
                    return !0
                }
            }

            var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
                        return t()
                    }
                    : function (e, t) {
                        var r = t()
                            , n = s({
                            inst: {
                                value: r,
                                getSnapshot: t
                            }
                        })
                            , i = n[0].inst
                            , u = n[1];
                        return o(function () {
                            i.value = r,
                                i.getSnapshot = t,
                            c(i) && u({
                                inst: i
                            })
                        }, [e, r, t]),
                            a(function () {
                                return c(i) && u({
                                    inst: i
                                }),
                                    e(function () {
                                        c(i) && u({
                                            inst: i
                                        })
                                    })
                            }, [e]),
                            l(r),
                            r
                    }
            ;
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u
        },
        2179: function (e, t, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(50959)
                , i = r(4322)
                , s = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
                , a = i.useSyncExternalStore
                , o = n.useRef
                , l = n.useEffect
                , c = n.useMemo
                , u = n.useDebugValue;
            t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
                var h = o(null);
                if (null === h.current) {
                    var d = {
                        hasValue: !1,
                        value: null
                    };
                    h.current = d
                } else
                    d = h.current;
                var f = a(e, (h = c(function () {
                    function e(e) {
                        if (!l) {
                            if (l = !0,
                                a = e,
                                e = n(e),
                            void 0 !== i && d.hasValue) {
                                var t = d.value;
                                if (i(t, e))
                                    return o = t
                            }
                            return o = e
                        }
                        if (t = o,
                            s(a, e))
                            return t;
                        var r = n(e);
                        return void 0 !== i && i(t, r) ? t : (a = e,
                            o = r)
                    }

                    var a, o, l = !1, c = void 0 === r ? null : r;
                    return [function () {
                        return e(t())
                    }
                        , null === c ? void 0 : function () {
                            return e(c())
                        }
                    ]
                }, [t, r, n, i]))[0], h[1]);
                return l(function () {
                    d.hasValue = !0,
                        d.value = f
                }, [f]),
                    u(f),
                    f
            }
        },
        4322: function (e, t, r) {
            "use strict";
            e.exports = r(12415)
        },
        7231: function (e, t, r) {
            "use strict";
            e.exports = r(2179)
        },
        94902: function (e, t, r) {
            "use strict";
            r.d(t, {
                DE: function () {
                    return u
                },
                Nu: function () {
                    return c
                },
                R7: function () {
                    return l
                },
                Sm: function () {
                    return a
                },
                XD: function () {
                    return i
                },
                uK: function () {
                    return o
                }
            });
            var n = r(50959);
            let i = (0,
                n.createContext)(null);

            function s() {
                let e = (0,
                    n.useContext)(i);
                if (!e)
                    throw Error("[@mantine/core] MantineProvider was not found in tree");
                return e
            }

            function a() {
                return s().cssVariablesResolver
            }

            function o() {
                return s().classNamesPrefix
            }

            function l() {
                return s().getStyleNonce
            }

            function c() {
                return s().withStaticClasses
            }

            function u() {
                return s().headless
            }
        },
        4052: function (e, t, r) {
            "use strict";
            r.d(t, {
                M: function () {
                    return k
                }
            });
            var n = r(50959);

            function i(e) {
                return "auto" === e || "dark" === e || "light" === e
            }

            var s = r(94902)
                , a = r(95584)
                , o = r(29676)
                , l = r(55148);

            function c() {
                let e = (0,
                    l.rZ)()
                    , t = (0,
                    s.R7)()
                    , r = (0,
                    a.X)(e.breakpoints).reduce((t, r) => {
                        let n = e.breakpoints[r].includes("px")
                            , i = function (e) {
                            let t = "string" == typeof e && e.includes("var(--mantine-scale)") ? e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim() : e;
                            return "number" == typeof t ? t : "string" == typeof t ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? 16 * Number(t.replace("rem", "")) : t.includes("em") ? 16 * Number(t.replace("em", "")) : Number(t) : NaN
                        }(e.breakpoints[r])
                            , s = n ? `${i - .1}px` : (0,
                            o.em)(i - .1)
                            , a = n ? `${i}px` : (0,
                            o.em)(i);
                        return `${t}@media (max-width: ${s}) {.mantine-visible-from-${r} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${r} {display: none !important;}}`
                    }
                    , "");
                return n.createElement("style", {
                    "data-mantine-styles": "classes",
                    nonce: t?.(),
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                })
            }

            function u(e) {
                return Object.entries(e).map(([e, t]) => `${e}: ${t};`).join("")
            }

            function h(e, t) {
                return (Array.isArray(e) ? e : [e]).reduce((e, t) => `${t}{${e}}`, t)
            }

            var d = r(48846)
                , f = r(61618)
                , p = r(63370)
                , g = r(27869);

            function m(e, t, r) {
                (0,
                    a.X)(t).forEach(n => Object.assign(e, {
                    [`--mantine-${r}-${n}`]: t[n]
                }))
            }

            let v = e => {
                let t = (0,
                    f.j)(e, "dark")
                    , r = (0,
                    f.j)(e, "light")
                    , n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : (0,
                    o.h)(e.defaultRadius)
                    , i = {
                    variables: {
                        "--mantine-scale": e.scale.toString(),
                        "--mantine-cursor-type": e.cursorType,
                        "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
                        "--mantine-color-scheme": "light dark",
                        "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
                        "--mantine-color-white": e.white,
                        "--mantine-color-black": e.black,
                        "--mantine-line-height": e.lineHeights.md,
                        "--mantine-font-family": e.fontFamily,
                        "--mantine-font-family-monospace": e.fontFamilyMonospace,
                        "--mantine-font-family-headings": e.headings.fontFamily,
                        "--mantine-heading-font-weight": e.headings.fontWeight,
                        "--mantine-heading-text-wrap": e.headings.textWrap,
                        "--mantine-radius-default": n,
                        "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
                        "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
                        "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
                        "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
                        "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
                    },
                    light: {
                        "--mantine-primary-color-contrast": (0,
                            g.a)(e, "light"),
                        "--mantine-color-bright": "var(--mantine-color-black)",
                        "--mantine-color-text": e.black,
                        "--mantine-color-body": e.white,
                        "--mantine-color-error": "var(--mantine-color-red-6)",
                        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
                        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${r})`,
                        "--mantine-color-default": "var(--mantine-color-white)",
                        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
                        "--mantine-color-default-color": "var(--mantine-color-black)",
                        "--mantine-color-default-border": "var(--mantine-color-gray-4)"
                    },
                    dark: {
                        "--mantine-primary-color-contrast": (0,
                            g.a)(e, "dark"),
                        "--mantine-color-bright": "var(--mantine-color-white)",
                        "--mantine-color-text": "var(--mantine-color-dark-0)",
                        "--mantine-color-body": "var(--mantine-color-dark-7)",
                        "--mantine-color-error": "var(--mantine-color-red-8)",
                        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
                        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
                        "--mantine-color-default": "var(--mantine-color-dark-6)",
                        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
                        "--mantine-color-default-color": "var(--mantine-color-white)",
                        "--mantine-color-default-border": "var(--mantine-color-dark-4)"
                    }
                };
                m(i.variables, e.breakpoints, "breakpoint"),
                    m(i.variables, e.spacing, "spacing"),
                    m(i.variables, e.fontSizes, "font-size"),
                    m(i.variables, e.lineHeights, "line-height"),
                    m(i.variables, e.shadows, "shadow"),
                    m(i.variables, e.radius, "radius"),
                    e.colors[e.primaryColor].forEach((t, r) => {
                            i.variables[`--mantine-primary-color-${r}`] = `var(--mantine-color-${e.primaryColor}-${r})`
                        }
                    ),
                    (0,
                        a.X)(e.colors).forEach(n => {
                            e.colors[n].forEach((e, t) => {
                                    i.variables[`--mantine-color-${n}-${t}`] = e
                                }
                            );
                            let s = `var(--mantine-color-${n}-${9 === r ? 8 : r + 1})`
                                , a = `var(--mantine-color-${n}-${9 === t ? 8 : t + 1})`;
                            i.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)",
                                i.light[`--mantine-color-${n}-text`] = `var(--mantine-color-${n}-filled)`,
                                i.light[`--mantine-color-${n}-filled`] = `var(--mantine-color-${n}-${r})`,
                                i.light[`--mantine-color-${n}-filled-hover`] = s,
                                i.light[`--mantine-color-${n}-light`] = (0,
                                    p.m)(e.colors[n][r], .1),
                                i.light[`--mantine-color-${n}-light-hover`] = (0,
                                    p.m)(e.colors[n][r], .12),
                                i.light[`--mantine-color-${n}-light-color`] = `var(--mantine-color-${n}-${r})`,
                                i.light[`--mantine-color-${n}-outline`] = `var(--mantine-color-${n}-${r})`,
                                i.light[`--mantine-color-${n}-outline-hover`] = (0,
                                    p.m)(e.colors[n][r], .05),
                                i.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)",
                                i.dark[`--mantine-color-${n}-text`] = `var(--mantine-color-${n}-4)`,
                                i.dark[`--mantine-color-${n}-filled`] = `var(--mantine-color-${n}-${t})`,
                                i.dark[`--mantine-color-${n}-filled-hover`] = a,
                                i.dark[`--mantine-color-${n}-light`] = (0,
                                    p.m)(e.colors[n][Math.max(0, t - 2)], .15),
                                i.dark[`--mantine-color-${n}-light-hover`] = (0,
                                    p.m)(e.colors[n][Math.max(0, t - 2)], .2),
                                i.dark[`--mantine-color-${n}-light-color`] = `var(--mantine-color-${n}-${Math.max(t - 5, 0)})`,
                                i.dark[`--mantine-color-${n}-outline`] = `var(--mantine-color-${n}-${Math.max(t - 4, 0)})`,
                                i.dark[`--mantine-color-${n}-outline-hover`] = (0,
                                    p.m)(e.colors[n][Math.max(t - 4, 0)], .05)
                        }
                    );
                let s = e.headings.sizes;
                return (0,
                    a.X)(s).forEach(t => {
                        i.variables[`--mantine-${t}-font-size`] = s[t].fontSize,
                            i.variables[`--mantine-${t}-line-height`] = s[t].lineHeight,
                            i.variables[`--mantine-${t}-font-weight`] = s[t].fontWeight || e.headings.fontWeight
                    }
                ),
                    i
            }
                , y = v(r(12027).t);

            function b({cssVariablesSelector: e, deduplicateCssVariables: t}) {
                let r = (0,
                    l.rZ)()
                    , i = (0,
                    s.R7)()
                    , o = function ({theme: e, generator: t}) {
                    let r = v(e)
                        , n = t?.(e);
                    return n ? (0,
                        d.R)(r, n) : r
                }({
                    theme: r,
                    generator: (0,
                        s.Sm)()
                })
                    , c = ":root" === e && t
                    , f = function (e, t) {
                    let r = u(e.variables)
                        , n = r ? h(t, r) : ""
                        , i = u(e.dark)
                        , s = i ? h(`${t}[data-mantine-color-scheme="dark"]`, i) : ""
                        , a = u(e.light)
                        , o = a ? h(`${t}[data-mantine-color-scheme="light"]`, a) : "";
                    return `${n}${s}${o}`
                }(c ? function (e) {
                    let t = {
                        variables: {},
                        light: {},
                        dark: {}
                    };
                    return (0,
                        a.X)(e.variables).forEach(r => {
                            y.variables[r] !== e.variables[r] && (t.variables[r] = e.variables[r])
                        }
                    ),
                        (0,
                            a.X)(e.light).forEach(r => {
                                y.light[r] !== e.light[r] && (t.light[r] = e.light[r])
                            }
                        ),
                        (0,
                            a.X)(e.dark).forEach(r => {
                                y.dark[r] !== e.dark[r] && (t.dark[r] = e.dark[r])
                            }
                        ),
                        t
                }(o) : o, e);
                return f ? n.createElement("style", {
                    "data-mantine-styles": !0,
                    nonce: i?.(),
                    dangerouslySetInnerHTML: {
                        __html: `${f}${c ? "" : `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}`
                    }
                }) : null
            }

            b.displayName = "@mantine/CssVariables";
            var w = r(42046);

            function _(e, t) {
                let r = "auto" !== e ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                t()?.setAttribute("data-mantine-color-scheme", r)
            }

            function k({
                           theme: e,
                           children: t,
                           getStyleNonce: r,
                           withStaticClasses: a = !0,
                           withGlobalClasses: o = !0,
                           deduplicateCssVariables: u = !0,
                           withCssVariables: h = !0,
                           cssVariablesSelector: d = ":root",
                           classNamesPrefix: f = "mantine",
                           colorSchemeManager: p = function ({key: e = "mantine-color-scheme-value"} = {}) {
                               let t;
                               return {
                                   get: t => {
                                       if ("undefined" == typeof window)
                                           return t;
                                       try {
                                           let r = window.localStorage.getItem(e);
                                           return i(r) ? r : t
                                       } catch {
                                           return t
                                       }
                                   }
                                   ,
                                   set: t => {
                                       try {
                                           window.localStorage.setItem(e, t)
                                       } catch (e) {
                                           console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.", e)
                                       }
                                   }
                                   ,
                                   subscribe: r => {
                                       t = t => {
                                           t.storageArea === window.localStorage && t.key === e && i(t.newValue) && r(t.newValue)
                                       }
                                           ,
                                           window.addEventListener("storage", t)
                                   }
                                   ,
                                   unsubscribe: () => {
                                       window.removeEventListener("storage", t)
                                   }
                                   ,
                                   clear: () => {
                                       window.localStorage.removeItem(e)
                                   }
                               }
                           }(),
                           defaultColorScheme: g = "light",
                           getRootElement: m = () => document.documentElement,
                           cssVariablesResolver: v,
                           forceColorScheme: y
                       }) {
                let {colorScheme: k, setColorScheme: S, clearColorScheme: E} = function ({
                                                                                             manager: e,
                                                                                             defaultColorScheme: t,
                                                                                             getRootElement: r,
                                                                                             forceColorScheme: i
                                                                                         }) {
                    let s = (0,
                        n.useRef)()
                        , [a, o] = (0,
                        n.useState)(() => e.get(t))
                        , l = i || a
                        , c = (0,
                        n.useCallback)(t => {
                            i || (_(t, r),
                                o(t),
                                e.set(t))
                        }
                        , [e.set, l, i])
                        , u = (0,
                        n.useCallback)(() => {
                            o(t),
                                _(t, r),
                                e.clear()
                        }
                        , [e.clear, t]);
                    return (0,
                        n.useEffect)(() => (e.subscribe(c),
                        e.unsubscribe), [e.subscribe, e.unsubscribe]),
                        (0,
                            w.Y)(() => {
                                _(e.get(t), r)
                            }
                            , []),
                        (0,
                            n.useEffect)(() => {
                                if (i)
                                    return _(i, r),
                                        () => {
                                        }
                                        ;
                                void 0 === i && _(a, r),
                                    s.current = window.matchMedia("(prefers-color-scheme: dark)");
                                let e = e => {
                                        "auto" === a && _(e.matches ? "dark" : "light", r)
                                    }
                                ;
                                return s.current?.addEventListener("change", e),
                                    () => s.current?.removeEventListener("change", e)
                            }
                            , [a, i]),
                        {
                            colorScheme: l,
                            setColorScheme: c,
                            clearColorScheme: u
                        }
                }({
                    defaultColorScheme: g,
                    forceColorScheme: y,
                    manager: p,
                    getRootElement: m
                });
                return !function ({respectReducedMotion: e, getRootElement: t}) {
                    (0,
                        w.Y)(() => {
                            e && t()?.setAttribute("data-respect-reduced-motion", "true")
                        }
                        , [e])
                }({
                    respectReducedMotion: e?.respectReducedMotion || !1,
                    getRootElement: m
                }),
                    n.createElement(s.XD.Provider, {
                        value: {
                            colorScheme: k,
                            setColorScheme: S,
                            clearColorScheme: E,
                            getRootElement: m,
                            classNamesPrefix: f,
                            getStyleNonce: r,
                            cssVariablesResolver: v,
                            cssVariablesSelector: d,
                            withStaticClasses: a
                        }
                    }, n.createElement(l.M2, {
                        theme: e
                    }, h && n.createElement(b, {
                        cssVariablesSelector: d,
                        deduplicateCssVariables: u
                    }), o && n.createElement(c, null), t))
            }

            !function () {
                let e = console.error;
                console.error = (...t) => {
                    t.length > 1 && "string" == typeof t[0] && t[0].toLowerCase().includes("extra attributes from the server") && "string" == typeof t[1] && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t)
                }
            }(),
                k.displayName = "@mantine/core/MantineProvider"
        },
        55148: function (e, t, r) {
            "use strict";
            r.d(t, {
                M2: function () {
                    return h
                },
                rZ: function () {
                    return u
                }
            });
            var n = r(50959)
                , i = r(12027)
                , s = r(48846);

            function a(e) {
                return !(e < 0) && !(e > 9) && parseInt(e.toString(), 10) === e
            }

            function o(e) {
                if (!(e.primaryColor in e.colors))
                    throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");
                if ("object" == typeof e.primaryShade && (!a(e.primaryShade.dark) || !a(e.primaryShade.light)) || "number" == typeof e.primaryShade && !a(e.primaryShade))
                    throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")
            }

            let l = (0,
                n.createContext)(null)
                , c = () => (0,
                n.useContext)(l) || i.t;

            function u() {
                let e = (0,
                    n.useContext)(l);
                if (!e)
                    throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");
                return e
            }

            function h({theme: e, children: t, inherit: r = !0}) {
                let a = c()
                    , u = (0,
                    n.useMemo)(() => (function (e, t) {
                        if (!t)
                            return o(e),
                                e;
                        let r = (0,
                            s.R)(e, t);
                        return t.fontFamily && !t.headings?.fontFamily && (r.headings.fontFamily = t.fontFamily),
                            o(r),
                            r
                    }
                )(r ? a : i.t, e), [e, a, r]);
                return n.createElement(l.Provider, {
                    value: u
                }, t)
            }

            h.displayName = "@mantine/core/MantineThemeProvider"
        },
        27869: function (e, t, r) {
            "use strict";
            r.d(t, {
                R: function () {
                    return s
                },
                a: function () {
                    return a
                }
            });
            var n = r(61618)
                , i = r(84802);

            function s({color: e, theme: t, autoContrast: r}) {
                return ("boolean" == typeof r ? r : t.autoContrast) && (0,
                    i.E)({
                    color: e || t.primaryColor,
                    theme: t
                }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)"
            }

            function a(e, t) {
                return s({
                    color: e.colors[e.primaryColor][(0,
                        n.j)(e, t)],
                    theme: e,
                    autoContrast: null
                })
            }
        },
        84181: function (e, t, r) {
            "use strict";
            r.d(t, {
                u: function () {
                    return i
                }
            });
            var n = r(18818);

            function i(e, t) {
                let r = {
                    from: e?.from || t.defaultGradient.from,
                    to: e?.to || t.defaultGradient.to,
                    deg: e?.deg || t.defaultGradient.deg || 0
                }
                    , i = (0,
                    n.p)(r.from, t)
                    , s = (0,
                    n.p)(r.to, t);
                return `linear-gradient(${r.deg}deg, ${i} 0%, ${s} 100%)`
            }
        },
        61618: function (e, t, r) {
            "use strict";

            function n(e, t) {
                return "number" == typeof e.primaryShade ? e.primaryShade : "dark" === t ? e.primaryShade.dark : e.primaryShade.light
            }

            r.d(t, {
                j: function () {
                    return n
                }
            })
        },
        18818: function (e, t, r) {
            "use strict";
            r.d(t, {
                p: function () {
                    return i
                }
            });
            var n = r(84802);

            function i(e, t) {
                let r = (0,
                    n.E)({
                    color: e || t.primaryColor,
                    theme: t
                });
                return r.variable ? `var(${r.variable})` : e
            }
        },
        84802: function (e, t, r) {
            "use strict";
            r.d(t, {
                E: function () {
                    return o
                }
            });
            var n = r(61618)
                , i = r(1017);

            function s(e) {
                return e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
            }

            function a(e, t = .179) {
                return !e.startsWith("var(") && function (e) {
                    if (e.startsWith("oklch("))
                        return (function (e) {
                            let t = e.match(/oklch\((.*?)%\s/);
                            return t ? parseFloat(t[1]) : null
                        }(e) || 0) / 100;
                    let {r: t, g: r, b: n} = (0,
                        i.c)(e);
                    return .2126 * s(t / 255) + .7152 * s(r / 255) + .0722 * s(n / 255)
                }(e) > t
            }

            function o({color: e, theme: t, colorScheme: r}) {
                if ("string" != typeof e)
                    throw Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);
                if ("bright" === e)
                    return {
                        color: e,
                        value: "dark" === r ? t.white : t.black,
                        shade: void 0,
                        isThemeColor: !1,
                        isLight: a("dark" === r ? t.white : t.black, t.luminanceThreshold),
                        variable: "--mantine-color-bright"
                    };
                if ("dimmed" === e)
                    return {
                        color: e,
                        value: "dark" === r ? t.colors.dark[2] : t.colors.gray[7],
                        shade: void 0,
                        isThemeColor: !1,
                        isLight: a("dark" === r ? t.colors.dark[2] : t.colors.gray[6], t.luminanceThreshold),
                        variable: "--mantine-color-dimmed"
                    };
                if ("white" === e || "black" === e)
                    return {
                        color: e,
                        value: "white" === e ? t.white : t.black,
                        shade: void 0,
                        isThemeColor: !1,
                        isLight: a("white" === e ? t.white : t.black, t.luminanceThreshold),
                        variable: `--mantine-color-${e}`
                    };
                let [i, s] = e.split(".")
                    , o = s ? Number(s) : void 0
                    , l = i in t.colors;
                if (l) {
                    let e = void 0 !== o ? t.colors[i][o] : t.colors[i][(0,
                        n.j)(t, r || "light")];
                    return {
                        color: i,
                        value: e,
                        shade: o,
                        isThemeColor: l,
                        isLight: a(e, t.luminanceThreshold),
                        variable: s ? `--mantine-color-${i}-${o}` : `--mantine-color-${i}-filled`
                    }
                }
                return {
                    color: e,
                    value: e,
                    isThemeColor: l,
                    isLight: a(e, t.luminanceThreshold),
                    shade: o,
                    variable: void 0
                }
            }
        },
        63370: function (e, t, r) {
            "use strict";
            r.d(t, {
                m: function () {
                    return i
                }
            });
            var n = r(1017);

            function i(e, t) {
                if ("string" != typeof e || t > 1 || t < 0)
                    return "rgba(0, 0, 0, 1)";
                if (e.startsWith("var("))
                    return `color-mix(in srgb, ${e}, transparent ${(1 - t) * 100}%)`;
                if (e.startsWith("oklch"))
                    return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
                let {r, g: i, b: s} = (0,
                    n.c)(e);
                return `rgba(${r}, ${i}, ${s}, ${t})`
            }
        },
        1017: function (e, t, r) {
            "use strict";

            function n(e) {
                return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e) ? function (e) {
                    let t = e.replace("#", "");
                    if (3 === t.length) {
                        let e = t.split("");
                        t = [e[0], e[0], e[1], e[1], e[2], e[2]].join("")
                    }
                    if (8 === t.length) {
                        let e = parseInt(t.slice(6, 8), 16) / 255;
                        return {
                            r: parseInt(t.slice(0, 2), 16),
                            g: parseInt(t.slice(2, 4), 16),
                            b: parseInt(t.slice(4, 6), 16),
                            a: e
                        }
                    }
                    let r = parseInt(t, 16);
                    return {
                        r: r >> 16 & 255,
                        g: r >> 8 & 255,
                        b: 255 & r,
                        a: 1
                    }
                }(e) : e.startsWith("rgb") ? function (e) {
                    let [t, r, n, i] = e.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
                    return {
                        r: t,
                        g: r,
                        b: n,
                        a: i || 1
                    }
                }(e) : e.startsWith("hsl") ? function (e) {
                    let t, r, n;
                    let i = e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);
                    if (!i)
                        return {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 1
                        };
                    let s = parseInt(i[1], 10)
                        , a = parseInt(i[2], 10) / 100
                        , o = parseInt(i[3], 10) / 100
                        , l = i[5] ? parseFloat(i[5]) : void 0
                        , c = (1 - Math.abs(2 * o - 1)) * a
                        , u = s / 60
                        , h = c * (1 - Math.abs(u % 2 - 1))
                        , d = o - c / 2;
                    return u >= 0 && u < 1 ? (t = c,
                        r = h,
                        n = 0) : u >= 1 && u < 2 ? (t = h,
                        r = c,
                        n = 0) : u >= 2 && u < 3 ? (t = 0,
                        r = c,
                        n = h) : u >= 3 && u < 4 ? (t = 0,
                        r = h,
                        n = c) : u >= 4 && u < 5 ? (t = h,
                        r = 0,
                        n = c) : (t = c,
                        r = 0,
                        n = h),
                        {
                            r: Math.round((t + d) * 255),
                            g: Math.round((r + d) * 255),
                            b: Math.round((n + d) * 255),
                            a: l || 1
                        }
                }(e) : {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                }
            }

            r.d(t, {
                c: function () {
                    return n
                }
            })
        },
        12027: function (e, t, r) {
            "use strict";
            r.d(t, {
                t: function () {
                    return u
                }
            });
            var n = r(29676);
            r(50959);
            var i = r(1017);

            function s(e, t) {
                if (e.startsWith("var("))
                    return `color-mix(in srgb, ${e}, black ${100 * t}%)`;
                let {r, g: n, b: s, a} = (0,
                    i.c)(e)
                    , o = 1 - t
                    , l = e => Math.round(e * o);
                return `rgba(${l(r)}, ${l(n)}, ${l(s)}, ${a})`
            }

            var a = r(84181)
                , o = r(84802)
                , l = r(63370);
            let c = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji"
                , u = {
                scale: 1,
                fontSmoothing: !0,
                focusRing: "auto",
                white: "#fff",
                black: "#000",
                colors: {
                    dark: ["#C9C9C9", "#b8b8b8", "#828282", "#696969", "#424242", "#3b3b3b", "#2e2e2e", "#242424", "#1f1f1f", "#141414"],
                    gray: ["#f8f9fa", "#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#868e96", "#495057", "#343a40", "#212529"],
                    red: ["#fff5f5", "#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787", "#ff6b6b", "#fa5252", "#f03e3e", "#e03131", "#c92a2a"],
                    pink: ["#fff0f6", "#ffdeeb", "#fcc2d7", "#faa2c1", "#f783ac", "#f06595", "#e64980", "#d6336c", "#c2255c", "#a61e4d"],
                    grape: ["#f8f0fc", "#f3d9fa", "#eebefa", "#e599f7", "#da77f2", "#cc5de8", "#be4bdb", "#ae3ec9", "#9c36b5", "#862e9c"],
                    violet: ["#f3f0ff", "#e5dbff", "#d0bfff", "#b197fc", "#9775fa", "#845ef7", "#7950f2", "#7048e8", "#6741d9", "#5f3dc4"],
                    indigo: ["#edf2ff", "#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc", "#5c7cfa", "#4c6ef5", "#4263eb", "#3b5bdb", "#364fc7"],
                    blue: ["#e7f5ff", "#d0ebff", "#a5d8ff", "#74c0fc", "#4dabf7", "#339af0", "#228be6", "#1c7ed6", "#1971c2", "#1864ab"],
                    cyan: ["#e3fafc", "#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db", "#22b8cf", "#15aabf", "#1098ad", "#0c8599", "#0b7285"],
                    teal: ["#e6fcf5", "#c3fae8", "#96f2d7", "#63e6be", "#38d9a9", "#20c997", "#12b886", "#0ca678", "#099268", "#087f5b"],
                    green: ["#ebfbee", "#d3f9d8", "#b2f2bb", "#8ce99a", "#69db7c", "#51cf66", "#40c057", "#37b24d", "#2f9e44", "#2b8a3e"],
                    lime: ["#f4fce3", "#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b", "#94d82d", "#82c91e", "#74b816", "#66a80f", "#5c940d"],
                    yellow: ["#fff9db", "#fff3bf", "#ffec99", "#ffe066", "#ffd43b", "#fcc419", "#fab005", "#f59f00", "#f08c00", "#e67700"],
                    orange: ["#fff4e6", "#ffe8cc", "#ffd8a8", "#ffc078", "#ffa94d", "#ff922b", "#fd7e14", "#f76707", "#e8590c", "#d9480f"]
                },
                primaryShade: {
                    light: 6,
                    dark: 8
                },
                primaryColor: "blue",
                variantColorResolver: ({color: e, theme: t, variant: r, gradient: i, autoContrast: c}) => {
                    let u = (0,
                        o.E)({
                        color: e,
                        theme: t
                    })
                        , h = "boolean" == typeof c ? c : t.autoContrast;
                    if ("filled" === r) {
                        let t = h && u.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
                        return u.isThemeColor ? void 0 === u.shade ? {
                            background: `var(--mantine-color-${e}-filled)`,
                            hover: `var(--mantine-color-${e}-filled-hover)`,
                            color: t,
                            border: `${(0,
                                n.h)(1)} solid transparent`
                        } : {
                            background: `var(--mantine-color-${u.color}-${u.shade})`,
                            hover: `var(--mantine-color-${u.color}-${9 === u.shade ? 8 : u.shade + 1})`,
                            color: t,
                            border: `${(0,
                                n.h)(1)} solid transparent`
                        } : {
                            background: e,
                            hover: s(e, .1),
                            color: t,
                            border: `${(0,
                                n.h)(1)} solid transparent`
                        }
                    }
                    if ("light" === r) {
                        if (u.isThemeColor) {
                            if (void 0 === u.shade)
                                return {
                                    background: `var(--mantine-color-${e}-light)`,
                                    hover: `var(--mantine-color-${e}-light-hover)`,
                                    color: `var(--mantine-color-${e}-light-color)`,
                                    border: `${(0,
                                        n.h)(1)} solid transparent`
                                };
                            let r = t.colors[u.color][u.shade];
                            return {
                                background: (0,
                                    l.m)(r, .1),
                                hover: (0,
                                    l.m)(r, .12),
                                color: `var(--mantine-color-${u.color}-${Math.min(u.shade, 6)})`,
                                border: `${(0,
                                    n.h)(1)} solid transparent`
                            }
                        }
                        return {
                            background: (0,
                                l.m)(e, .1),
                            hover: (0,
                                l.m)(e, .12),
                            color: e,
                            border: `${(0,
                                n.h)(1)} solid transparent`
                        }
                    }
                    if ("outline" === r)
                        return u.isThemeColor ? void 0 === u.shade ? {
                            background: "transparent",
                            hover: `var(--mantine-color-${e}-outline-hover)`,
                            color: `var(--mantine-color-${e}-outline)`,
                            border: `${(0,
                                n.h)(1)} solid var(--mantine-color-${e}-outline)`
                        } : {
                            background: "transparent",
                            hover: (0,
                                l.m)(t.colors[u.color][u.shade], .05),
                            color: `var(--mantine-color-${u.color}-${u.shade})`,
                            border: `${(0,
                                n.h)(1)} solid var(--mantine-color-${u.color}-${u.shade})`
                        } : {
                            background: "transparent",
                            hover: (0,
                                l.m)(e, .05),
                            color: e,
                            border: `${(0,
                                n.h)(1)} solid ${e}`
                        };
                    if ("subtle" === r) {
                        if (u.isThemeColor) {
                            if (void 0 === u.shade)
                                return {
                                    background: "transparent",
                                    hover: `var(--mantine-color-${e}-light-hover)`,
                                    color: `var(--mantine-color-${e}-light-color)`,
                                    border: `${(0,
                                        n.h)(1)} solid transparent`
                                };
                            let r = t.colors[u.color][u.shade];
                            return {
                                background: "transparent",
                                hover: (0,
                                    l.m)(r, .12),
                                color: `var(--mantine-color-${u.color}-${Math.min(u.shade, 6)})`,
                                border: `${(0,
                                    n.h)(1)} solid transparent`
                            }
                        }
                        return {
                            background: "transparent",
                            hover: (0,
                                l.m)(e, .12),
                            color: e,
                            border: `${(0,
                                n.h)(1)} solid transparent`
                        }
                    }
                    return "transparent" === r ? u.isThemeColor ? void 0 === u.shade ? {
                        background: "transparent",
                        hover: "transparent",
                        color: `var(--mantine-color-${e}-light-color)`,
                        border: `${(0,
                            n.h)(1)} solid transparent`
                    } : {
                        background: "transparent",
                        hover: "transparent",
                        color: `var(--mantine-color-${u.color}-${Math.min(u.shade, 6)})`,
                        border: `${(0,
                            n.h)(1)} solid transparent`
                    } : {
                        background: "transparent",
                        hover: "transparent",
                        color: e,
                        border: `${(0,
                            n.h)(1)} solid transparent`
                    } : "white" === r ? u.isThemeColor ? void 0 === u.shade ? {
                        background: "var(--mantine-color-white)",
                        hover: s(t.white, .01),
                        color: `var(--mantine-color-${e}-filled)`,
                        border: `${(0,
                            n.h)(1)} solid transparent`
                    } : {
                        background: "var(--mantine-color-white)",
                        hover: s(t.white, .01),
                        color: `var(--mantine-color-${u.color}-${u.shade})`,
                        border: `${(0,
                            n.h)(1)} solid transparent`
                    } : {
                        background: "var(--mantine-color-white)",
                        hover: s(t.white, .01),
                        color: e,
                        border: `${(0,
                            n.h)(1)} solid transparent`
                    } : "gradient" === r ? {
                        background: (0,
                            a.u)(i, t),
                        hover: (0,
                            a.u)(i, t),
                        color: "var(--mantine-color-white)",
                        border: "none"
                    } : "default" === r ? {
                        background: "var(--mantine-color-default)",
                        hover: "var(--mantine-color-default-hover)",
                        color: "var(--mantine-color-default-color)",
                        border: `${(0,
                            n.h)(1)} solid var(--mantine-color-default-border)`
                    } : {}
                }
                ,
                autoContrast: !1,
                luminanceThreshold: .3,
                fontFamily: c,
                fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
                respectReducedMotion: !1,
                cursorType: "default",
                defaultGradient: {
                    from: "blue",
                    to: "cyan",
                    deg: 45
                },
                defaultRadius: "sm",
                activeClassName: "mantine-active",
                focusClassName: "",
                headings: {
                    fontFamily: c,
                    fontWeight: "700",
                    textWrap: "wrap",
                    sizes: {
                        h1: {
                            fontSize: (0,
                                n.h)(34),
                            lineHeight: "1.3"
                        },
                        h2: {
                            fontSize: (0,
                                n.h)(26),
                            lineHeight: "1.35"
                        },
                        h3: {
                            fontSize: (0,
                                n.h)(22),
                            lineHeight: "1.4"
                        },
                        h4: {
                            fontSize: (0,
                                n.h)(18),
                            lineHeight: "1.45"
                        },
                        h5: {
                            fontSize: (0,
                                n.h)(16),
                            lineHeight: "1.5"
                        },
                        h6: {
                            fontSize: (0,
                                n.h)(14),
                            lineHeight: "1.5"
                        }
                    }
                },
                fontSizes: {
                    xs: (0,
                        n.h)(12),
                    sm: (0,
                        n.h)(14),
                    md: (0,
                        n.h)(16),
                    lg: (0,
                        n.h)(18),
                    xl: (0,
                        n.h)(20)
                },
                lineHeights: {
                    xs: "1.4",
                    sm: "1.45",
                    md: "1.55",
                    lg: "1.6",
                    xl: "1.65"
                },
                radius: {
                    xs: (0,
                        n.h)(2),
                    sm: (0,
                        n.h)(4),
                    md: (0,
                        n.h)(8),
                    lg: (0,
                        n.h)(16),
                    xl: (0,
                        n.h)(32)
                },
                spacing: {
                    xs: (0,
                        n.h)(10),
                    sm: (0,
                        n.h)(12),
                    md: (0,
                        n.h)(16),
                    lg: (0,
                        n.h)(20),
                    xl: (0,
                        n.h)(32)
                },
                breakpoints: {
                    xs: "36em",
                    sm: "48em",
                    md: "62em",
                    lg: "75em",
                    xl: "88em"
                },
                shadows: {
                    xs: `0 ${(0,
                        n.h)(1)} ${(0,
                        n.h)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,
                        n.h)(1)} ${(0,
                        n.h)(2)} rgba(0, 0, 0, 0.1)`,
                    sm: `0 ${(0,
                        n.h)(1)} ${(0,
                        n.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,
                        n.h)(10)} ${(0,
                        n.h)(15)} ${(0,
                        n.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,
                        n.h)(7)} ${(0,
                        n.h)(7)} ${(0,
                        n.h)(-5)}`,
                    md: `0 ${(0,
                        n.h)(1)} ${(0,
                        n.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,
                        n.h)(20)} ${(0,
                        n.h)(25)} ${(0,
                        n.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,
                        n.h)(10)} ${(0,
                        n.h)(10)} ${(0,
                        n.h)(-5)}`,
                    lg: `0 ${(0,
                        n.h)(1)} ${(0,
                        n.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,
                        n.h)(28)} ${(0,
                        n.h)(23)} ${(0,
                        n.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,
                        n.h)(12)} ${(0,
                        n.h)(12)} ${(0,
                        n.h)(-7)}`,
                    xl: `0 ${(0,
                        n.h)(1)} ${(0,
                        n.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,
                        n.h)(36)} ${(0,
                        n.h)(28)} ${(0,
                        n.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,
                        n.h)(17)} ${(0,
                        n.h)(17)} ${(0,
                        n.h)(-7)}`
                },
                other: {},
                components: {}
            }
        },
        48846: function (e, t, r) {
            "use strict";

            function n(e) {
                return e && "object" == typeof e && !Array.isArray(e)
            }

            r.d(t, {
                R: function () {
                    return function e(t, r) {
                        let i = {
                            ...t
                        };
                        return n(t) && n(r) && Object.keys(r).forEach(s => {
                                n(r[s]) && s in t ? i[s] = e(i[s], r[s]) : i[s] = r[s]
                            }
                        ),
                            i
                    }
                }
            })
        },
        95584: function (e, t, r) {
            "use strict";

            function n(e) {
                return Object.keys(e)
            }

            r.d(t, {
                X: function () {
                    return n
                }
            })
        },
        29676: function (e, t, r) {
            "use strict";

            function n(e) {
                return `calc(${e} * var(--mantine-scale))`
            }

            function i(e, {shouldScale: t = !1} = {}) {
                return function r(i) {
                    if (0 === i || "0" === i)
                        return `0 ${e}`;
                    if ("number" == typeof i) {
                        let r = `${i / 16}${e}`;
                        return t ? n(r) : r
                    }
                    if ("string" == typeof i) {
                        if (i.startsWith("calc(") || i.startsWith("var(") || i.startsWith("clamp("))
                            return i;
                        if (i.includes(" "))
                            return i.split(" ").map(e => r(e)).join(" ");
                        if (i.includes(e))
                            return t ? n(i) : i;
                        let s = i.replace("px", "");
                        if (!Number.isNaN(Number(s))) {
                            let r = `${Number(s) / 16}${e}`;
                            return t ? n(r) : r
                        }
                    }
                    return i
                }
            }

            r.d(t, {
                em: function () {
                    return a
                },
                h: function () {
                    return s
                }
            });
            let s = i("rem", {
                shouldScale: !0
            })
                , a = i("em")
        },
        42046: function (e, t, r) {
            "use strict";
            r.d(t, {
                Y: function () {
                    return i
                }
            });
            var n = r(50959);
            let i = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect
        },
        94311: function (e, t, r) {
            "use strict";
            let n, i;
            r.r(t),
                r.d(t, {
                    CheckmarkIcon: function () {
                        return Y
                    },
                    ErrorIcon: function () {
                        return K
                    },
                    LoaderIcon: function () {
                        return H
                    },
                    ToastBar: function () {
                        return eo
                    },
                    ToastIcon: function () {
                        return et
                    },
                    Toaster: function () {
                        return eh
                    },
                    default: function () {
                        return ed
                    },
                    resolveValue: function () {
                        return E
                    },
                    toast: function () {
                        return U
                    },
                    useToaster: function () {
                        return G
                    },
                    useToasterStore: function () {
                        return L
                    }
                });
            var s, a = r(50959);
            let o = {
                    data: ""
                }
                ,
                l = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
                    innerHTML: " ",
                    id: "_goober"
                })).firstChild : e || o
                , c = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
                , u = /\/\*[^]*?\*\/|  +/g
                , h = /\n+/g
                , d = (e, t) => {
                    let r = ""
                        , n = ""
                        , i = "";
                    for (let s in e) {
                        let a = e[s];
                        "@" == s[0] ? "i" == s[1] ? r = s + " " + a + ";" : n += "f" == s[1] ? d(a, s) : s + "{" + d(a, "k" == s[1] ? "" : t) + "}" : "object" == typeof a ? n += d(a, t ? t.replace(/([^,])+/g, e => s.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : s) : null != a && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(),
                            i += d.p ? d.p(s, a) : s + ":" + a + ";")
                    }
                    return r + (t && i ? t + "{" + i + "}" : i) + n
                }
                , f = {}
                , p = e => {
                    if ("object" == typeof e) {
                        let t = "";
                        for (let r in e)
                            t += r + p(e[r]);
                        return t
                    }
                    return e
                }
                , g = (e, t, r, n, i) => {
                    var s;
                    let a = p(e)
                        , o = f[a] || (f[a] = (e => {
                            let t = 0
                                , r = 11;
                            for (; t < e.length;)
                                r = 101 * r + e.charCodeAt(t++) >>> 0;
                            return "go" + r
                        }
                    )(a));
                    if (!f[o]) {
                        let t = a !== e ? e : (e => {
                                let t, r, n = [{}];
                                for (; t = c.exec(e.replace(u, ""));)
                                    t[4] ? n.shift() : t[3] ? (r = t[3].replace(h, " ").trim(),
                                        n.unshift(n[0][r] = n[0][r] || {})) : n[0][t[1]] = t[2].replace(h, " ").trim();
                                return n[0]
                            }
                        )(e);
                        f[o] = d(i ? {
                            ["@keyframes " + o]: t
                        } : t, r ? "" : "." + o)
                    }
                    let l = r && f.g ? f.g : null;
                    return r && (f.g = f[o]),
                        s = f[o],
                        l ? t.data = t.data.replace(l, s) : -1 === t.data.indexOf(s) && (t.data = n ? s + t.data : t.data + s),
                        o
                }
                , m = (e, t, r) => e.reduce((e, n, i) => {
                        let s = t[i];
                        if (s && s.call) {
                            let e = s(r)
                                , t = e && e.props && e.props.className || /^go/.test(e) && e;
                            s = t ? "." + t : e && "object" == typeof e ? e.props ? "" : d(e, "") : !1 === e ? "" : e
                        }
                        return e + n + (null == s ? "" : s)
                    }
                    , "");

            function v(e) {
                let t = this || {}
                    , r = e.call ? e(t.p) : e;
                return g(r.unshift ? r.raw ? m(r, [].slice.call(arguments, 1), t.p) : r.reduce((e, r) => Object.assign(e, r && r.call ? r(t.p) : r), {}) : r, l(t.target), t.g, t.o, t.k)
            }

            v.bind({
                g: 1
            });
            let y, b, w, _ = v.bind({
                k: 1
            });

            function k(e, t) {
                let r = this || {};
                return function () {
                    let n = arguments;

                    function i(s, a) {
                        let o = Object.assign({}, s)
                            , l = o.className || i.className;
                        r.p = Object.assign({
                            theme: b && b()
                        }, o),
                            r.o = / *go\d+/.test(l),
                            o.className = v.apply(r, n) + (l ? " " + l : ""),
                        t && (o.ref = a);
                        let c = e;
                        return e[0] && (c = o.as || e,
                            delete o.as),
                        w && c[0] && w(o),
                            y(c, o)
                    }

                    return t ? t(i) : i
                }
            }

            var S = e => "function" == typeof e
                , E = (e, t) => S(e) ? e(t) : e
                , $ = (n = 0,
                () => (++n).toString())
                , O = () => {
                if (void 0 === i && "u" > typeof window) {
                    let e = matchMedia("(prefers-reduced-motion: reduce)");
                    i = !e || e.matches
                }
                return i
            }
                , T = new Map
                , C = e => {
                if (T.has(e))
                    return;
                let t = setTimeout(() => {
                        T.delete(e),
                            R({
                                type: 4,
                                toastId: e
                            })
                    }
                    , 1e3);
                T.set(e, t)
            }
                , A = e => {
                let t = T.get(e);
                t && clearTimeout(t)
            }
                , j = (e, t) => {
                switch (t.type) {
                    case 0:
                        return {
                            ...e,
                            toasts: [t.toast, ...e.toasts].slice(0, 20)
                        };
                    case 1:
                        return t.toast.id && A(t.toast.id),
                            {
                                ...e,
                                toasts: e.toasts.map(e => e.id === t.toast.id ? {
                                    ...e,
                                    ...t.toast
                                } : e)
                            };
                    case 2:
                        let {toast: r} = t;
                        return e.toasts.find(e => e.id === r.id) ? j(e, {
                            type: 1,
                            toast: r
                        }) : j(e, {
                            type: 0,
                            toast: r
                        });
                    case 3:
                        let {toastId: n} = t;
                        return n ? C(n) : e.toasts.forEach(e => {
                                C(e.id)
                            }
                        ),
                            {
                                ...e,
                                toasts: e.toasts.map(e => e.id === n || void 0 === n ? {
                                    ...e,
                                    visible: !1
                                } : e)
                            };
                    case 4:
                        return void 0 === t.toastId ? {
                            ...e,
                            toasts: []
                        } : {
                            ...e,
                            toasts: e.toasts.filter(e => e.id !== t.toastId)
                        };
                    case 5:
                        return {
                            ...e,
                            pausedAt: t.time
                        };
                    case 6:
                        let i = t.time - (e.pausedAt || 0);
                        return {
                            ...e,
                            pausedAt: void 0,
                            toasts: e.toasts.map(e => ({
                                ...e,
                                pauseDuration: e.pauseDuration + i
                            }))
                        }
                }
            }
                , P = []
                , x = {
                toasts: [],
                pausedAt: void 0
            }
                , R = e => {
                x = j(x, e),
                    P.forEach(e => {
                            e(x)
                        }
                    )
            }
                , I = {
                blank: 4e3,
                error: 4e3,
                success: 2e3,
                loading: 1 / 0,
                custom: 4e3
            }
                , L = (e = {}) => {
                let [t, r] = (0,
                    a.useState)(x);
                (0,
                    a.useEffect)(() => (P.push(r),
                        () => {
                            let e = P.indexOf(r);
                            e > -1 && P.splice(e, 1)
                        }
                ), [t]);
                let n = t.toasts.map(t => {
                        var r, n;
                        return {
                            ...e,
                            ...e[t.type],
                            ...t,
                            duration: t.duration || (null == (r = e[t.type]) ? void 0 : r.duration) || (null == e ? void 0 : e.duration) || I[t.type],
                            style: {
                                ...e.style,
                                ...null == (n = e[t.type]) ? void 0 : n.style,
                                ...t.style
                            }
                        }
                    }
                );
                return {
                    ...t,
                    toasts: n
                }
            }
                , N = (e, t = "blank", r) => ({
                createdAt: Date.now(),
                visible: !0,
                type: t,
                ariaProps: {
                    role: "status",
                    "aria-live": "polite"
                },
                message: e,
                pauseDuration: 0,
                ...r,
                id: (null == r ? void 0 : r.id) || $()
            })
                , D = e => (t, r) => {
                let n = N(t, e, r);
                return R({
                    type: 2,
                    toast: n
                }),
                    n.id
            }
                , U = (e, t) => D("blank")(e, t);
            U.error = D("error"),
                U.success = D("success"),
                U.loading = D("loading"),
                U.custom = D("custom"),
                U.dismiss = e => {
                    R({
                        type: 3,
                        toastId: e
                    })
                }
                ,
                U.remove = e => R({
                    type: 4,
                    toastId: e
                }),
                U.promise = (e, t, r) => {
                    let n = U.loading(t.loading, {
                        ...r,
                        ...null == r ? void 0 : r.loading
                    });
                    return e.then(e => (U.success(E(t.success, e), {
                        id: n,
                        ...r,
                        ...null == r ? void 0 : r.success
                    }),
                        e)).catch(e => {
                            U.error(E(t.error, e), {
                                id: n,
                                ...r,
                                ...null == r ? void 0 : r.error
                            })
                        }
                    ),
                        e
                }
            ;
            var F = (e, t) => {
                R({
                    type: 1,
                    toast: {
                        id: e,
                        height: t
                    }
                })
            }
                , M = () => {
                R({
                    type: 5,
                    time: Date.now()
                })
            }
                , G = e => {
                let {toasts: t, pausedAt: r} = L(e);
                (0,
                    a.useEffect)(() => {
                        if (r)
                            return;
                        let e = Date.now()
                            , n = t.map(t => {
                                if (t.duration === 1 / 0)
                                    return;
                                let r = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                                if (r < 0) {
                                    t.visible && U.dismiss(t.id);
                                    return
                                }
                                return setTimeout(() => U.dismiss(t.id), r)
                            }
                        );
                        return () => {
                            n.forEach(e => e && clearTimeout(e))
                        }
                    }
                    , [t, r]);
                let n = (0,
                    a.useCallback)(() => {
                        r && R({
                            type: 6,
                            time: Date.now()
                        })
                    }
                    , [r])
                    , i = (0,
                    a.useCallback)((e, r) => {
                        let {reverseOrder: n = !1, gutter: i = 8, defaultPosition: s} = r || {}
                            , a = t.filter(t => (t.position || s) === (e.position || s) && t.height)
                            , o = a.findIndex(t => t.id === e.id)
                            , l = a.filter((e, t) => t < o && e.visible).length;
                        return a.filter(e => e.visible).slice(...n ? [l + 1] : [0, l]).reduce((e, t) => e + (t.height || 0) + i, 0)
                    }
                    , [t]);
                return {
                    toasts: t,
                    handlers: {
                        updateHeight: F,
                        startPause: M,
                        endPause: n,
                        calculateOffset: i
                    }
                }
            }
                , z = _`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
                , B = _`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
                , q = _`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
                , K = k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
                , J = _`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
                , H = k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${J} 1s linear infinite;
`
                , V = _`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
                , W = _`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
                , Y = k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
                , X = k("div")`
  position: absolute;
`
                , Z = k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
                , Q = _`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
                , ee = k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
                , et = ({toast: e}) => {
                let {icon: t, type: r, iconTheme: n} = e;
                return void 0 !== t ? "string" == typeof t ? a.createElement(ee, null, t) : t : "blank" === r ? null : a.createElement(Z, null, a.createElement(H, {
                    ...n
                }), "loading" !== r && a.createElement(X, null, "error" === r ? a.createElement(K, {
                    ...n
                }) : a.createElement(Y, {
                    ...n
                })))
            }
                , er = e => `
0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`
                , en = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}
`
                , ei = k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
                , es = k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
                , ea = (e, t) => {
                let r = e.includes("top") ? 1 : -1
                    , [n, i] = O() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [er(r), en(r)];
                return {
                    animation: t ? `${_(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${_(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
                }
            }
                , eo = a.memo(({toast: e, position: t, style: r, children: n}) => {
                    let i = e.height ? ea(e.position || t || "top-center", e.visible) : {
                        opacity: 0
                    }
                        , s = a.createElement(et, {
                        toast: e
                    })
                        , o = a.createElement(es, {
                        ...e.ariaProps
                    }, E(e.message, e));
                    return a.createElement(ei, {
                        className: e.className,
                        style: {
                            ...i,
                            ...r,
                            ...e.style
                        }
                    }, "function" == typeof n ? n({
                        icon: s,
                        message: o
                    }) : a.createElement(a.Fragment, null, s, o))
                }
            );
            s = a.createElement,
                d.p = void 0,
                y = s,
                b = void 0,
                w = void 0;
            var el = ({id: e, className: t, style: r, onHeightUpdate: n, children: i}) => {
                let s = a.useCallback(t => {
                        if (t) {
                            let r = () => {
                                    n(e, t.getBoundingClientRect().height)
                                }
                            ;
                            r(),
                                new MutationObserver(r).observe(t, {
                                    subtree: !0,
                                    childList: !0,
                                    characterData: !0
                                })
                        }
                    }
                    , [e, n]);
                return a.createElement("div", {
                    ref: s,
                    className: t,
                    style: r
                }, i)
            }
                , ec = (e, t) => {
                let r = e.includes("top")
                    , n = e.includes("center") ? {
                    justifyContent: "center"
                } : e.includes("right") ? {
                    justifyContent: "flex-end"
                } : {};
                return {
                    left: 0,
                    right: 0,
                    display: "flex",
                    position: "absolute",
                    transition: O() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
                    transform: `translateY(${t * (r ? 1 : -1)}px)`,
                    ...r ? {
                        top: 0
                    } : {
                        bottom: 0
                    },
                    ...n
                }
            }
                , eu = v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
                , eh = ({
                            reverseOrder: e,
                            position: t = "top-center",
                            toastOptions: r,
                            gutter: n,
                            children: i,
                            containerStyle: s,
                            containerClassName: o
                        }) => {
                let {toasts: l, handlers: c} = G(r);
                return a.createElement("div", {
                    style: {
                        position: "fixed",
                        zIndex: 9999,
                        top: 16,
                        left: 16,
                        right: 16,
                        bottom: 16,
                        pointerEvents: "none",
                        ...s
                    },
                    className: o,
                    onMouseEnter: c.startPause,
                    onMouseLeave: c.endPause
                }, l.map(r => {
                        let s = r.position || t
                            , o = ec(s, c.calculateOffset(r, {
                            reverseOrder: e,
                            gutter: n,
                            defaultPosition: t
                        }));
                        return a.createElement(el, {
                            id: r.id,
                            key: r.id,
                            onHeightUpdate: c.updateHeight,
                            className: r.visible ? eu : "",
                            style: o
                        }, "custom" === r.type ? E(r.message, r) : i ? i(r) : a.createElement(eo, {
                            toast: r,
                            position: s
                        }))
                    }
                ))
            }
                , ed = U
        },
        42109: function (module, exports, require) {
            "use strict";
            require.d(exports, {
                Ue: function () {
                    return d
                }
            });
            let n = e => {
                let state;
                let r = new Set()
                let setState = (e, n) => {
                    let i = "function" == typeof e ? e(state) : e;
                    if (!Object.is(i, state)) {
                        let e = state;
                        state = (null != n ? n : "object" != typeof i || null === i) ? i : Object.assign({}, state, i),
                            r.forEach(r => r(state, e))
                    }
                }
                let getState = () => state
                let store = {
                    setState: setState,
                    getState: getState,
                    getInitialState: () => a,
                    subscribe: cb => {
                        r.add(cb)
                        return () => r.delete(cb)
                    },
                    destroy: () => {
                        console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.")
                        r.clear()
                    }
                }
                let a = state = e(setState, getState, store);
                return store
            }
            let i = e => e ? n(e) : n
            var s = require(50959)
                , a = require(7231);
            let {useDebugValue} = s
            let {useSyncExternalStoreWithSelector} = a
            let c = false
            let u = e => e
            let h = fn => {
                if ("function" != typeof fn) {
                    console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.")
                }
                let store = "function" == typeof fn ? i(fn) : fn
                let r = (e = u, r) => {
                    // debugger

                    if (r && !c) {
                        console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937")
                        c = true
                    }
                    let n = useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getServerState || store.getInitialState, e, r);
                    useDebugValue(n)
                    return n
                }
                Object.assign(r, store)
                return r
            }
            let d = e => e
                ? h(e)
                : h
        }
    },
    function (require) {
        const t = function (id) {
            return require(require.s = id)
        };
        require.O(0, [9774, 179], function () {
            t(11978)
            return t(21270)
        })
        _N_E = require.O()
    }
])
