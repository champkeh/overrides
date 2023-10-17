(() => {
        var t, e, a, o, n = {
            4102: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => _
                });
                var o = a(9713)
                    , n = a.n(o)
                    , r = a(6479)
                    , i = a.n(r)
                    , s = a(3663)
                    , c = a(7619)
                    , l = a(8083);

                function d(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e && (o = o.filter((function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }
                        ))),
                            a.push.apply(a, o)
                    }
                    return a
                }

                function h(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(a), !0).forEach((function (e) {
                                n()(t, e, a[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            }
                        ))
                    }
                    return t
                }

                var p = a(7113)
                    , u = a.n(p);

                function g(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e && (o = o.filter((function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }
                        ))),
                            a.push.apply(a, o)
                    }
                    return a
                }

                function f(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? g(Object(a), !0).forEach((function (e) {
                                n()(t, e, a[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : g(Object(a)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            }
                        ))
                    }
                    return t
                }

                var m = {
                    successTitle: null,
                    title: null,
                    content: null,
                    bt: {
                        text: "OK"
                    },
                    onClass: "_on",
                    className: "",
                    hideTime: 300,
                    onClose: function () {
                    }
                };

                function v(t) {
                    u().extend(this, m, t, !0),
                        this.$body = u()("body"),
                        this.init()
                }

                v.prototype.creatDom = function () {
                    var t, e, a = this, o = {}, n = {};
                    if (null !== (t = a.btGhost) && void 0 !== t && t.text) {
                        var r = a.btGhost
                            , d = r.text
                            , p = r.url;
                        r.callback,
                            o = f({
                                children: d,
                                href: p
                            }, i()(r, ["text", "url", "callback"]))
                    }
                    if (null !== (e = a.bt) && void 0 !== e && e.text) {
                        var g = a.bt
                            , m = g.text
                            , v = g.url;
                        g.callback,
                            n = f({
                                children: m,
                                href: v
                            }, i()(g, ["text", "url", "callback"]))
                    }
                    var _ = (0,
                        s.ZP)(function (t) {
                        var e = t.className
                            , a = void 0 === e ? "" : e
                            , o = t.title
                            , n = void 0 === o ? "" : o
                            , r = t.content
                            , i = void 0 === r ? "" : r
                            , s = t.successTitle
                            , d = void 0 === s ? "" : s
                            , p = t.btGhostProps
                            , u = void 0 === p ? {} : p
                            , g = t.btProps
                            , f = void 0 === g ? {} : g
                            , m = u.children && f.children ? "" : "_block";
                        return (0,
                            l.tZ)(c.nP, {
                            className: a,
                            children: (0,
                                l.BX)(c.Es, {
                                className: "_small g_mod_confirm",
                                children: [(0,
                                    l.tZ)(c.A3, {}), d ? (0,
                                    l.BX)("div", {
                                    className: "g_confirm_hd _success",
                                    children: [(0,
                                        l.tZ)("svg", {
                                        className: "i_success",
                                        dangerouslySetInnerHTML: {
                                            __html: '<use xlink:href="#i-right"></use>'
                                        }
                                    }), d]
                                }) : null, !d && n ? (0,
                                    l.tZ)("div", {
                                    className: "g_confirm_hd",
                                    dangerouslySetInnerHTML: {
                                        __html: n
                                    }
                                }) : null, i && Array.isArray(i) ? (0,
                                    l.tZ)(c.fe, {
                                    children: i.map((function (t) {
                                            return (0,
                                                l.tZ)("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: t
                                                }
                                            })
                                        }
                                    ))
                                }) : null, i && !Array.isArray(i) ? (0,
                                    l.tZ)(c.fe, {
                                    dangerouslySetInnerHTML: {
                                        __html: i
                                    }
                                }) : null, (0,
                                    l.BX)("div", {
                                    className: "g_mod_ft",
                                    children: [u.children ? (0,
                                        l.tZ)("a", h(h({}, u), {}, {
                                        href: u.href || "###",
                                        title: u.children,
                                        rel: "_blank" === u.target && "noopener noreferrer",
                                        className: "bt _ghost j_confirmBtGhost ".concat(m, " ").concat(u.className || "")
                                    })) : null, (0,
                                        l.tZ)("a", h(h({}, f), {}, {
                                        title: f.children,
                                        href: f.href || "###",
                                        rel: "_blank" === f.target && "noopener noreferrer",
                                        className: "bt j_confirmBtDefault ".concat(m, " ").concat(f.className || "")
                                    }))]
                                })]
                            })
                        })
                    }({
                        className: a.className,
                        successTitle: a.successTitle,
                        title: a.title,
                        content: a.content,
                        btGhostProps: o,
                        btProps: n
                    }))
                        , b = this.$it = u()(_);
                    return this.$body.append(b),
                        b
                }
                    ,
                    v.prototype.show = function () {
                        var t = this;
                        setTimeout((function () {
                                t.$it.addClass(t.onClass)
                            }
                        ), 17)
                    }
                    ,
                    v.prototype.hide = function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                            , e = this
                            , a = e.$it;
                        a.removeClass(e.onClass),
                            e.onClose(t),
                            setTimeout((function () {
                                    a.remove()
                                }
                            ), e.hideTime)
                    }
                    ,
                    v.prototype.init = function () {
                        var t = this
                            , e = t.creatDom();
                        t.show(),
                            e.on("click", ".j_close", (function (e) {
                                    e.preventDefault(),
                                        t.hide()
                                }
                            )),
                        t.btGhost && e.on("click", ".j_confirmBtGhost", (function (e) {
                                t.btGhost.url || e.preventDefault(),
                                    t.hide(),
                                "function" == typeof t.btGhost.callback && t.btGhost.callback(this, t)
                            }
                        )),
                        t.bt && e.on("click", ".j_confirmBtDefault", (function (e) {
                                t.bt.url || e.preventDefault(),
                                    "function" == typeof t.bt.callback ? !1 !== t.bt.callback(this, t) && t.hide(!0) : t.hide(!0)
                            }
                        ))
                    }
                ;
                const _ = v
            }
            ,
            3153: (t, e, a) => {
                "use strict";
                a.r(e),
                    a.d(e, {
                        default: () => p
                    });
                var o = a(7113)
                    , n = a.n(o)
                    , r = a(1170)
                    , i = a(2271)
                    , s = a(9981)
                    , c = a.n(s)
                    , l = +c().get("bookCitysex") || 1
                    , d = {
                    selWrap: "#downAppModWrap",
                    selMod: "#downAppMod",
                    selTrigger: ".j_getApp"
                };

                function h() {
                    n().extend(!0, this, d, {
                        html: '<div id="downAppModWrap" class="m_down_app_wrap" data-report-pid="downloadpop" data-report-l1="1"> <div class="m_down_app_mask dn pf t0 l0 w100% h100%"></div> <form id="downAppMod" class="m_down_app bc_fff pf b0 r0 br16 mr24 mb24 tac pt20 pb20 pl20 pr20 o0 vh" action="/go/pcm/mail/SendAppLink" novalidate="novalidate"> <i class="g_logo g_wn_logo pa t0 l50% tt50%"></i> <h5 id="downAppModTitle" class="mb16 fw400 fs12 lh16">Download Webnovel APP</h5> <input id="downAppSwitch" type="checkbox" class="dn"/> <div class="_checked_off"> <label for="downAppSwitch" class="pr bt _m _icon _block mb12" title="via Email" data-report-uiname="visemail" data-report-eid="qi_A_downloadpop_viaemail"> <svg class="fs16 pa t50% tty50% l0 ml16"> <use xlink:href="#i-mail"></use> </svg> <span>Via Email</span> </label> <a class="ios_app_store pr bt _m _icon _block mb12" href="https://itunes.apple.com/us/app/qidian-the-best-webnovels-reading-app/id1234939196?ls=1&amp;mt=8" target="_blank" rel="noopener noreferrer" title="App Store" data-report-uiname="viaappstore" data-report-eid="qi_A_downloadpop_viaappstore"> <svg class="fs16 pa t50% tty50% l0 ml16"> <use xlink:href="#i-app-apple"></use> </svg> <span>Via App Store</span> </a> <a class="android_app_store pr bt _m _icon _block" href="https://play.google.com/store/apps/details?id=com.qidian.Int.reader" target="_blank" rel="noopener noreferrer" title="Google Play" data-report-uiname="viagoogleplay" data-report-eid="qi_A_downloadpop_viagoogleplay"> <svg class="fs16 pa t50% tty50% l0 ml16"> <use xlink:href="#i-app-gp"></use> </svg> <span>Via Google play</span> </a> </div> <div class="_checked_on"> <input class="_input j_input w100% bsbb vat fs14 lh24 pt8 pb8 pl16 pr16 tac c_s" name="addr" pattern="^[a-z0-9._%-]+@([a-z0-9-]+\\.)+[a-z]{2,4}$" type="Email" placeholder="Input your Email"> <div class="_error_tip pa l0 w100% tac c_danger fs12 lh1"></div> <button class="bt _m _icon _block mb12 mt12" type="submit" data-report-uiname="send" data-report-eid="qi_A_downloadpop_send">Send</button> <div class="df"> <a class="ios_app_store pr f1 bt _m _secondary mr8" href="https://itunes.apple.com/us/app/qidian-the-best-webnovels-reading-app/id1234939196?ls=1&amp;mt=8" target="_blank" rel="noopener noreferrer" title="App Store"> <svg class="fs16 pa t50% l50% tt50%"> <use xlink:href="#i-app-apple"></use> </svg> </a> <a class="android_app_store pr f1 bt _m _secondary" href="https://play.google.com/store/apps/details?id=com.qidian.Int.reader" target="_blank" rel="noopener noreferrer" title="Google Play"> <svg class="fs16 pa t50% l50% tt50%"> <use xlink:href="#i-app-gp"></use> </svg> </a> </div> </div> <a href="###" title="close" class="_close pa t0 r0 mt12 mr12 pt4 pb4 pr4 pl4"> <svg class="fs16 db"> <use xlink:href="#i-times"></use> </svg> </a> </form> </div> '
                    }),
                        this.init()
                }

                h.prototype.init = function () {
                    !this.renderDom() && this.bindEvent()
                }
                    ,
                    h.prototype.showMod = function (t, e) {
                        var a = this;
                        this.$modWrap["mod" === t ? "addClass" : "removeClass"]("_mod").removeClass("_on"),
                            setTimeout((function () {
                                    a.$modWrap.addClass("_on")
                                }
                            ), 16),
                            n()(this.selWrap).attr({
                                "data-report-pdid": g_data.bookId || g_data.comicId,
                                "data-report-blocktitle": g_data.currChapId
                            }),
                            i.Z.send({}, {
                                l1: 1,
                                ltype: "C",
                                eid: "qi_C_downloadpop",
                                pid: "downloadpop",
                                uiname: "downloadpop",
                                pdid: g_data.bookId || g_data.comicId,
                                blocktitle: g_data.currChapId
                            }),
                            document.querySelector("#downAppSwitch").checked = !1
                    }
                    ,
                    h.prototype.hideMod = function () {
                        this.$modWrap.removeClass("_on"),
                            this.$form[0].reset();
                        try {
                            localStorage && localStorage.setItem("appDownloadClosed", (new Date).getTime())
                        } catch (t) {
                            console.log(t.message)
                        }
                    }
                    ,
                    h.prototype.renderDom = function () {
                        var t = n()(this.selWrap)
                            , e = t.length;
                        return e || (t = n()(this.html),
                        2 === l && (t.find("#downAppModTitle").text("Download Chereads APP"),
                            t.find(".ios_app_store").attr("href", "https://apps.apple.com/US/app/id1595743071?mt=8"),
                            t.find(".android_app_store").attr("href", "https://play.google.com/store/apps/details?id=com.chereads.reader")),
                            n()("body").append(t)),
                            this.$modWrap = t,
                            this.$mod = n()(this.selMod),
                            e
                    }
                    ,
                    h.prototype.valiSuccess = function () {
                        var t = this
                            , e = t.$form;
                        t.isSending || (t.isSending = !0,
                            n().ajax({
                                type: "POST",
                                url: e.attr("action") + "?_csrfToken=" + c().get("_csrfToken") + "&sex=" + l,
                                data: e.serializeArray(),
                                success: function () {
                                    t.isSending = !1
                                }
                            }),
                            setTimeout((function () {
                                    e[0].reset(),
                                        t.hideMod(),
                                        (new r.Z).success('<span class="db">The app is on the way！</span>Please check your email.')
                                }
                            ), 500))
                    }
                    ,
                    h.prototype.bindEvent = function () {
                        var t = this;
                        t.$modWrap.on("click", "._close", (function (e) {
                                e.preventDefault(),
                                    t.hideMod()
                            }
                        ));
                        var e = t.$modWrap.find('button[type="submit"]').prop("disabled", !0)
                            , a = t.$modWrap.find("form");
                        this.$form = a;
                        var o = a.find(".j_input")
                            , r = a.find("._error_tip").text("")
                            , i = o.attr("pattern");
                        o.on("input.post propertychange.post", (function () {
                                r.text(""),
                                    e.prop("disabled", !this.value)
                            }
                        )),
                            a.on("submit", (function (e) {
                                    e.preventDefault();
                                    var a = o.val();
                                    new RegExp(i).test(a) ? t.valiSuccess() : r.text("Invalid email")
                                }
                            )).on("reset", (function () {
                                    r.text("")
                                }
                            )),
                            n()("body").on("click", t.selTrigger, (function (e) {
                                    e.preventDefault(),
                                        t.showMod(n()(this).attr("data-type") || "mod")
                                }
                            ))
                    }
                ;
                const p = h
            }
            ,
            7657: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => i
                });
                var o = a(7113)
                    , n = a.n(o);

                function r() {
                }

                r.prototype.getDataAndSetData = function (t, e) {
                    var a = this;
                    n().ajax({
                        method: "GET",
                        url: "/go/pcm/emoji/getEmoji",
                        success: function (e) {
                            e && 0 === e.code && e.data && (a.data = e.data,
                            window.g_data && (window.g_data.dataEmoji = a.data),
                            "function" == typeof t && t(a.data))
                        },
                        error: function () {
                            "function" == typeof e && e()
                        }
                    })
                }
                    ,
                    r.prototype.getAllEmoji = function () {
                        var t = window.g_data && window.g_data.dataEmoji;
                        if (!t)
                            return [];
                        var e = [];
                        return n().each(t, (function (t, a) {
                                var o = '<img cross-origin="anonymous" class="m-emoji" src="' + a + '" width="12" height="12" alt="' + t + '">';
                                e.push(o)
                            }
                        )),
                            e
                    }
                    ,
                    r.prototype.format = function (t) {
                        var e = window.g_data && window.g_data.dataEmoji;
                        return e ? t.replace(/\[[^\[\]]+\]/g, (function (t) {
                                var a = e[t];
                                return a ? '<img cross-origin="anonymous" class="m-emoji" src="' + a + '" width="12" height="12" alt="' + t + '">' : t
                            }
                        )) : t
                    }
                ;
                const i = r
            }
            ,
            8833: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => c
                });
                var o = a(6336)
                    , n = a(7113)
                    , r = a.n(n)
                    , i = {
                    $wrapper: r()("body"),
                    $scroller: r()(window),
                    supportScrollPrev: !1,
                    mustDoneOnScroll: null,
                    onChapterScroll: null,
                    onLoadingNext: null,
                    onLoadingPrev: null,
                    isLoading: !1,
                    jumpToChapter: null,
                    ratio: .5,
                    listSize: 30,
                    listUnit: "li"
                };

                function s(t) {
                    r().extend(!0, this, i, t),
                        this.init()
                }

                s.prototype.init = function () {
                    var t = this
                        , e = this.$scroller
                        , a = this.$wrapper.height()
                        , n = 0
                        , r = 0
                        , i = 0;
                    "function" == typeof t.onLoadingPrev && e.on("mousewheel", (0,
                        o.Z)((function (a) {
                            void 0 !== a && ((n = a.originalEvent && a.originalEvent.wheelDelta && (a.originalEvent.wheelDelta > 0 ? 1 : -1) || a.originalEvent && a.originalEvent.detail && (a.originalEvent.detail > 0 ? -1 : 1)) > 0 && 0 == e.scrollTop() && 1 != +g_data.firstChap.idx && (a.preventDefault(),
                            "function" == typeof t.onLoadingPrev && t.onLoadingPrev()),
                                n > 0 ? "function" == typeof t.onChapterScroll && t.onChapterScroll("bottomToTop") : "function" == typeof t.onChapterScroll && t.onChapterScroll("topToBottom"))
                        }
                    ), 100, 160)),
                        e.on("scroll", (0,
                            o.Z)((function () {
                                if ("function" == typeof t.mustDoneOnScroll)
                                    try {
                                        t.mustDoneOnScroll()
                                    } catch (t) {
                                        console.log("mustDoneOnScroll", t)
                                    }
                                "function" == typeof t.onChapterScroll && t.onChapterScroll();
                                var o = e.scrollTop();
                                i = o,
                                t.$wrapper.get(0).scrollHeight - o - a < t.ratio * a && "function" == typeof t.onLoadingNext && t.onLoadingNext(),
                                i < r && o < t.ratio * a && "function" == typeof t.onLoadingPrev && t.onLoadingPrev(),
                                    r = i
                            }
                        ), 100, 160))
                }
                ;
                const c = s
            }
            ,
            955: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => n
                }),
                    a(1964),
                    $.fn.drop = function (t, e) {
                        return $(this).each((function () {
                                $(this).data("drop") || $(this).data("drop", new o($(this), t, e))
                            }
                        ))
                    }
                ;
                var o = function (t, e, a) {
                    var o = {
                        eventType: "null",
                        selector: "",
                        offsets: {
                            x: 0,
                            y: 0
                        },
                        edgeAdjust: !0,
                        position: "7-5",
                        onShow: $.noop,
                        onHide: $.noop
                    }
                        , n = $.extend({}, o, a || {})
                        , r = e.attr("id");
                    r || (r = ("id_" + Math.random()).replace("0.", ""),
                        e.attr("id", r)),
                    "" == n.selector && t.attr({
                        "data-target": r,
                        "aria-expanded": "false"
                    }),
                        this.el = {
                            trigger: t,
                            target: e
                        },
                        this.offsets = n.offsets,
                        this.callback = {
                            show: n.onShow,
                            hide: n.onHide
                        },
                        this.position = n.position,
                        this.edgeAdjust = n.edgeAdjust,
                        this.display = !1;
                    var i = this;
                    switch (n.eventType) {
                        case "null":
                            this.show();
                            break;
                        case "hover":
                            var s, c;
                            t.delegate(n.selector, "mouseenter", (function () {
                                    n.selector && (i.el.trigger = $(this).attr({
                                        "data-target": r,
                                        "aria-expanded": "false"
                                    })),
                                        s = setTimeout((function () {
                                                i.show()
                                            }
                                        ), 150),
                                        clearTimeout(c)
                                }
                            )),
                                t.delegate(n.selector, "mouseleave", (function () {
                                        clearTimeout(s),
                                            c = setTimeout((function () {
                                                    i.hide()
                                                }
                                            ), 200)
                                    }
                                )),
                            e.data("dropHover") || (e.hover((function () {
                                    clearTimeout(c)
                                }
                            ), (function () {
                                    c = setTimeout((function () {
                                            i.hide()
                                        }
                                    ), 100)
                                }
                            )),
                                e.data("dropHover", !0)),
                                t.delegate(n.selector, "click", (function (t) {
                                        window.isKeyEvent && (n.selector && (i.el.trigger = $(this).attr({
                                            "data-target": r,
                                            "aria-expanded": "false"
                                        })),
                                            0 == i.display ? i.show() : i.hide(),
                                            t.preventDefault())
                                    }
                                ));
                            break;
                        case "click":
                        case "contextmenu":
                            t.delegate(n.selector, n.eventType, (function (t) {
                                    if (t.preventDefault(),
                                    n.selector && (i.el.trigger = $(this).attr({
                                        "data-target": r,
                                        "aria-expanded": "false"
                                    })),
                                    "contextmenu" == n.eventType)
                                        return i.position = [t.pageX, t.pageY],
                                            void i.show();
                                    0 == i.display ? i.show() : i.hide()
                                }
                            ))
                    }
                    return $(document).click((function (t) {
                            var e = t && t.target;
                            if (e && i && 1 == i.display) {
                                var a = i.el.trigger.get(0)
                                    , o = i.el.target.get(0);
                                a && o && e != a && e != o && 0 == a.contains(e) && 0 == o.contains(e) && i.hide()
                            }
                        }
                    )),
                        $(window).resize((function () {
                                i.follow()
                            }
                        )),
                        i
                };
                o.prototype.follow = function () {
                    var t = this.el.target
                        , e = this.el.trigger;
                    return 1 == this.display && "none" != e.css("display") && t.follow(e, {
                        offsets: this.offsets,
                        position: this.position,
                        edgeAdjust: this.edgeAdjust
                    }),
                        this
                }
                    ,
                    o.prototype.show = function () {
                        var t = this.el.target
                            , e = this.el.trigger;
                        return t && 0 == $.contains(document.body, t.get(0)) && $("body").append(t),
                            this.display = !0,
                            t.css({
                                position: "absolute",
                                display: "inline"
                            }).addClass("ESC"),
                            e.attr({
                                "aria-expanded": "true"
                            }),
                            this.follow(),
                        $.isFunction(this.callback.show) && this.callback.show.call(this, e, t),
                            this
                    }
                    ,
                    o.prototype.hide = function () {
                        var t = this.el.target
                            , e = this.el.trigger;
                        return t.hide().removeClass("ESC"),
                            e.attr({
                                "aria-expanded": "false"
                            }),
                        window.isKeyEvent && e.focus(),
                            this.display = !1,
                        $.isFunction(this.callback.hide) && this.callback.hide.call(this, e, t),
                            this
                    }
                ;
                const n = o
            }
            ,
            1964: () => {
                "use strict";
                $.fn.follow = function (t, e) {
                    var a = {
                        offsets: {
                            x: 0,
                            y: 0
                        },
                        position: "4-1",
                        edgeAdjust: !0
                    }
                        , o = $.extend({}, a, e || {});
                    return $(this).each((function () {
                            var e = $(this);
                            if (0 != t.length) {
                                var n, r, i, s, c, l, d, h = e.data("height"), p = e.data("width"),
                                    u = $(window).scrollTop(), g = $(window).scrollLeft(),
                                    f = parseInt(o.offsets.x, 10) || 0, m = parseInt(o.offsets.y, 10) || 0;
                                this.cacheData,
                                h || (h = e.outerHeight()),
                                p || (p = e.outerWidth()),
                                    n = t.offset(),
                                    r = t.outerHeight(),
                                    i = t.outerWidth(),
                                    s = n.left,
                                    c = n.top;
                                var v, _ = o.position, b = !1;
                                $.each(["4-1", "1-4", "5-7", "2-3", "2-1", "6-8", "3-4", "4-3", "8-6", "1-2", "7-5", "3-2"], (function (t, e) {
                                        e === _ && (b = !0)
                                    }
                                )),
                                b || (_ = a.position);
                                var y = function (t) {
                                    var e = "bottom";
                                    switch (t) {
                                        case "1-4":
                                        case "5-7":
                                        case "2-3":
                                            e = "top";
                                            break;
                                        case "2-1":
                                        case "6-8":
                                        case "3-4":
                                            e = "right";
                                            break;
                                        case "1-2":
                                        case "8-6":
                                        case "4-3":
                                            e = "left";
                                            break;
                                        case "4-1":
                                        case "7-5":
                                        case "3-2":
                                            e = "bottom"
                                    }
                                    return e
                                }
                                    , C = function (t) {
                                    return "5-7" === t || "6-8" === t || "8-6" === t || "7-5" === t
                                }
                                    , I = function (t) {
                                    if ("right" === t) {
                                        if (s + i + p + f > $(window).width())
                                            return !1
                                    } else if ("bottom" === t) {
                                        if (c + r + h + m > u + $(window).height())
                                            return !1
                                    } else if ("top" === t) {
                                        if (h + m > c - u)
                                            return !1
                                    } else if ("left" === t && p + f > s)
                                        return !1;
                                    return !0
                                };
                                v = y(_),
                                o.edgeAdjust && (I(v) ? function () {
                                    if (!C(_)) {
                                        var t, e = {
                                            top: {
                                                right: "2-3",
                                                left: "1-4"
                                            },
                                            right: {
                                                top: "2-1",
                                                bottom: "3-4"
                                            },
                                            bottom: {
                                                right: "3-2",
                                                left: "4-1"
                                            },
                                            left: {
                                                top: "1-2",
                                                bottom: "4-3"
                                            }
                                        }[v];
                                        if (e)
                                            for (t in e)
                                                I(t) || (_ = e[t])
                                    }
                                }() : function () {
                                    if (C(_))
                                        _ = {
                                            "5-7": "7-5",
                                            "7-5": "5-7",
                                            "6-8": "8-6",
                                            "8-6": "6-8"
                                        }[_];
                                    else {
                                        var t = {
                                            top: {
                                                left: "3-2",
                                                right: "4-1"
                                            },
                                            right: {
                                                bottom: "1-2",
                                                top: "4-3"
                                            },
                                            bottom: {
                                                left: "2-3",
                                                right: "1-4"
                                            },
                                            left: {
                                                bottom: "2-1",
                                                top: "3-4"
                                            }
                                        }[v]
                                            , e = [];
                                        for (name in t)
                                            e.push(name);
                                        _ = I(e[0]) || !I(e[1]) ? t[e[0]] : t[e[1]]
                                    }
                                }());
                                var w = y(_)
                                    , k = _.split("-")[0];
                                switch (w) {
                                    case "top":
                                        d = c - h,
                                            l = "1" == k ? s : "5" === k ? s - (p - i) / 2 : s - (p - i);
                                        break;
                                    case "right":
                                        l = s + i,
                                            d = "2" == k ? c : "6" === k ? c - (h - r) / 2 : c - (h - r);
                                        break;
                                    case "bottom":
                                        d = c + r,
                                            l = "4" == k ? s : "7" === k ? s - (p - i) / 2 : s - (p - i);
                                        break;
                                    case "left":
                                        l = s - p,
                                            d = "2" == k ? c : "6" === k ? c - (p - i) / 2 : c - (h - r)
                                }
                                if (o.edgeAdjust && C(_)) {
                                    var P = $(window).width()
                                        , S = $(window).height();
                                    "7-5" == _ || "5-7" == _ ? l - g < .5 * P ? l - g < 0 && (l = g) : l - g + p > P && (l = P + g - p) : d - u < .5 * S ? d - u < 0 && (d = u) : d - u + h > S && (d = S + u - h)
                                }
                                "top" == w || "left" == w ? (l -= f,
                                    d -= m) : (l += f,
                                    d += m),
                                    e.css({
                                        position: "absolute",
                                        left: Math.round(l),
                                        top: Math.round(d)
                                    }).attr("data-align", _);
                                var A = 1 * e.css("zIndex") || 19
                                    , T = A;
                                $("body").children().each((function () {
                                        var t, a = $(this);
                                        this !== e[0] && "none" !== a.css("display") && (t = 1 * a.css("zIndex")) && (T = Math.max(t, T))
                                    }
                                )),
                                A < T && e.css("zIndex", T + 1)
                            }
                        }
                    ))
                }
            }
            ,
            1880: (t, e, a) => {
                var o = a(6401);
                t.exports = function (t) {
                    return {
                        0: o.NOVEL,
                        100: o.COMIC,
                        200: o.PBOOK,
                        1: o.FANFIC
                    }[t] || o.NOVEL
                }
            }
            ,
            6401: t => {
                t.exports = {
                    NOVEL: 1,
                    COMIC: 2,
                    PBOOK: 3,
                    FANFIC: 4,
                    ALL: 0
                }
            }
            ,
            7408: t => {
                t.exports = function (t) {
                    if (void 0 !== t && null != t)
                        return (t = (t += "").replace(/\</g, "&lt;")).replace(/\>/g, "&gt;")
                }
            }
            ,
            6737: (t, e, a) => {
                var o = a(6401)
                    , n = a(4879)
                    , r = (n.getCategoryURLByData,
                    n.getCategoryURLById);
                t.exports = function (t, e, a, n) {
                    var i = "###"
                        , s = e.categoryId
                        , c = e.orderBy
                        , l = e.bookType
                        , d = e.gender
                        , h = e.pageIndex
                        , p = e.bookStatus
                        , u = [];
                    return a = a || o.NOVEL,
                    void 0 === s && (s = "0"),
                    s || (s = "0"),
                    void 0 === h && (h = "1"),
                    h || (h = "1"),
                        i = r(s, h),
                    n || (+a === o.NOVEL && null != d && u.push("gender=" + d),
                    null != c && u.push("orderBy=" + c),
                    null != l && u.push("bookType=" + l),
                    null != p && u.push("bookStatus=" + p),
                        i += u.join("&") ? "".concat(-1 !== i.indexOf("?") ? "&" : "?") + u.join("&") : ""),
                        i
                }
            }
            ,
            5142: (t, e, a) => {
                var o = a(2165)
                    , n = a(1558);
                t.exports = function (t, e, a, r, i) {
                    return n(t, e, a, r, i, o.COMIC)
                }
            }
            ,
            6605: t => {
                t.exports = function () {
                    return '<span class="_tag_sub">Comics</span>'
                }
            }
            ,
            1940: (t, e, a) => {
                var o = a(5389);
                t.exports = function (t, e, a) {
                    var n = e && (e.bookId || e.comicId)
                        , r = e && (e.bookName || e.comicName);
                    return o(t, n, r, a)
                }
            }
            ,
            4879: t => {
                var e = function (t, e, a) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                        , n = {
                        novel: {
                            all: "/stories/novel",
                            male: {
                                all: "/stories/novel?gender=1".concat(o > 1 ? "&pageIndex=".concat(o) : ""),
                                urban: "/stories/novel-urban-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                eastern: "/stories/novel-eastern-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                games: "/stories/novel-games-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                fantasy: "/stories/novel-fantasy-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                "sci-fi": "/stories/novel-scifi-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                horror: "/stories/novel-horror-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                sports: "/stories/novel-sports-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                action: "/stories/novel-action-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                war: "/stories/novel-war-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                realistic: "/stories/novel-realistic-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                history: "/stories/novel-history-male".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                acg: "/stories/novel-acg-male".concat(o > 1 ? "?pageIndex=".concat(o) : "")
                            },
                            female: {
                                all: "/stories/novel?gender=2".concat(o > 1 ? "&pageIndex=".concat(o) : ""),
                                urban: "/stories/novel-urban-female".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                fantasy: "/stories/novel-fantasy-female".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                history: "/stories/novel-history-female".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                teen: "/stories/novel-teen-female".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                lgbt: "/stories/novel-lgbt-female".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                "sci-fi": "/stories/novel-scifi-female".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                                general: "/stories/novel-general-female".concat(o > 1 ? "?pageIndex=".concat(o) : "")
                            }
                        },
                        comic: {
                            all: "/stories/comic".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            romance: "/stories/comic-romance".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            action: "/stories/comic-action".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            lgbt: "/stories/comic-lgbt".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            fantasy: "/stories/comic-fantasy".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            urban: "/stories/comic-urban".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            harem: "/stories/comic-harem".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            transmigration: "/stories/comic-transmigration".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            magic: "/stories/comic-magic".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            school: "/stories/comic-school".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            eastern: "/stories/comic-eastern".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            adventure: "/stories/comic-adventure".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            "sci-fi": "/stories/comic-scifi".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            history: "/stories/comic-history".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            sports: "/stories/comic-sports".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            horror: "/stories/comic-horror".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            inspiring: "/stories/comic-inspiring".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            wuxia: "/stories/comic-wuxia".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            comedy: "/stories/comic-comedy".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            "slice-of-life": "/stories/comic-slice-of-life".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            drama: "/stories/comic-drama".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            cooking: "/stories/comic-cooking".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            mystery: "/stories/comic-mystery".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            diabolical: "/stories/comic-diabolical".concat(o > 1 ? "?pageIndex=".concat(o) : "")
                        },
                        fanfic: {
                            all: "/stories/fanfic".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            "anime & comics": "/stories/fanfic-anime-comics".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            "video games": "/stories/fanfic-video-games".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            celebrities: "/stories/fanfic-celebrities".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            "music & bands": "/stories/fanfic-music-bands".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            movies: "/stories/fanfic-movies".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            "book & literature": "/stories/fanfic-book-literature".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            tv: "/stories/fanfic-tv".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            theater: "/stories/fanfic-theater".concat(o > 1 ? "?pageIndex=".concat(o) : ""),
                            others: "/stories/fanfic-others".concat(o > 1 ? "?pageIndex=".concat(o) : "")
                        }
                    };
                    return a ? n[t][a][e] : n[t][e]
                };
                t.exports = {
                    getGenderByCategoryId: function (t) {
                        return [70001, 70002, 70003, 70004, 70006, 70007, 70008, 70009, 70010, 70011, 70012, 70013].includes(t) ? "male" : [70005, 70014, 70015, 70016, 70017, 70018, 70019].includes(t) ? "female" : ""
                    },
                    getCategoryURLByData: e,
                    getCategoryURLById: function (t) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                            , o = {
                            "0-novel": e("novel", "all", null, a),
                            "0-novel-male": e("novel", "all", "male", a),
                            70001: e("novel", "urban", "male", a),
                            70002: e("novel", "fantasy", "male", a),
                            70003: e("novel", "history", "male", a),
                            70004: e("novel", "horror", "male", a),
                            70006: e("novel", "sci-fi", "male", a),
                            70007: e("novel", "sports", "male", a),
                            70008: e("novel", "games", "male", a),
                            70009: e("novel", "eastern", "male", a),
                            70010: e("novel", "realistic", "male", a),
                            70011: e("novel", "acg", "male", a),
                            70012: e("novel", "action", "male", a),
                            70013: e("novel", "war", "male", a),
                            "0-novel-female": e("novel", "all", "female", a),
                            70005: e("novel", "general", "female", a),
                            70014: e("novel", "urban", "female", a),
                            70015: e("novel", "history", "female", a),
                            70016: e("novel", "fantasy", "female", a),
                            70017: e("novel", "sci-fi", "female", a),
                            70018: e("novel", "teen", "female", a),
                            70019: e("novel", "lgbt", "female", a),
                            "0-comic": e("comic", "all", null, a),
                            60002: e("comic", "action", null, a),
                            60003: e("comic", "romance", null, a),
                            60004: e("comic", "sci-fi", null, a),
                            60005: e("comic", "urban", null, a),
                            60006: e("comic", "eastern", null, a),
                            60007: e("comic", "school", null, a),
                            60008: e("comic", "mystery", null, a),
                            60009: e("comic", "cooking", null, a),
                            60010: e("comic", "wuxia", null, a),
                            60011: e("comic", "comedy", null, a),
                            60012: e("comic", "transmigration", null, a),
                            60013: e("comic", "inspiring", null, a),
                            60014: e("comic", "adventure", null, a),
                            60015: e("comic", "horror", null, a),
                            60016: e("comic", "magic", null, a),
                            60017: e("comic", "harem", null, a),
                            60018: e("comic", "history", null, a),
                            60019: e("comic", "slice-of-life", null, a),
                            60022: e("comic", "fantasy", null, a),
                            60023: e("comic", "sports", null, a),
                            60024: e("comic", "drama", null, a),
                            60027: e("comic", "diabolical", null, a),
                            60029: e("comic", "lgbt", null, a),
                            "0-fanfic": e("fanfic", "all", null, a),
                            81001: e("fanfic", "book & literature", null, a),
                            81002: e("fanfic", "celebrities", null, a),
                            81003: e("fanfic", "music & bands", null, a),
                            81004: e("fanfic", "theater", null, a),
                            81005: e("fanfic", "video games", null, a),
                            81006: e("fanfic", "anime & comics", null, a),
                            81007: e("fanfic", "movies", null, a),
                            81008: e("fanfic", "tv", null, a),
                            81009: e("fanfic", "others", null, a)
                        };
                        return o[t]
                    },
                    pathToCategoryId: function (t) {
                        return {
                            novel: 0,
                            "novel-urban-male": 70001,
                            "novel-fantasy-male": 70002,
                            "novel-history-male": 70003,
                            "novel-horror-male": 70004,
                            "novel-scifi-male": 70006,
                            "novel-sports-male": 70007,
                            "novel-games-male": 70008,
                            "novel-eastern-male": 70009,
                            "novel-realistic-male": 70010,
                            "novel-acg-male": 70011,
                            "novel-action-male": 70012,
                            "novel-war-male": 70013,
                            "novel-general-female": 70005,
                            "novel-urban-female": 70014,
                            "novel-history-female": 70015,
                            "novel-fantasy-female": 70016,
                            "novel-scifi-female": 70017,
                            "novel-teen-female": 70018,
                            "novel-lgbt-female": 70019,
                            comic: 0,
                            "comic-action": 60002,
                            "comic-romance": 60003,
                            "comic-scifi": 60004,
                            "comic-urban": 60005,
                            "comic-eastern": 60006,
                            "comic-school": 60007,
                            "comic-mystery": 60008,
                            "comic-cooking": 60009,
                            "comic-wuxia": 60010,
                            "comic-comedy": 60011,
                            "comic-transmigration": 60012,
                            "comic-inspiring": 60013,
                            "comic-adventure": 60014,
                            "comic-horror": 60015,
                            "comic-magic": 60016,
                            "comic-harem": 60017,
                            "comic-history": 60018,
                            "comic-slice-of-life": 60019,
                            "comic-fantasy": 60022,
                            "comic-sports": 60023,
                            "comic-drama": 60024,
                            "comic-diabolical": 60027,
                            "comic-lgbt": 60029,
                            fanfic: 0,
                            "fanfic-book-literature": 81001,
                            "fanfic-celebrities": 81002,
                            "fanfic-music-bands": 81003,
                            "fanfic-theater": 81004,
                            "fanfic-video-games": 81005,
                            "fanfic-anime-comics": 81006,
                            "fanfic-movies": 81007,
                            "fanfic-tv": 81008,
                            "fanfic-others": 81009
                        }[t]
                    },
                    getCategoryFemaleNameById: function (t) {
                        return [70014].includes(t) ? {
                            name: "Urban",
                            description: "Urban fiction is a subgenre set in a city landscape. The tone for urban fiction is usually modern, focusing on the city living."
                        } : [70016].includes(t) ? {
                            name: "Fantasy",
                            description: "Fantasy fiction is a subgenre of speculative novel involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore."
                        } : [70015].includes(t) ? {
                            name: "History",
                            description: "History fiction it is set in the past and pays attention to the manners, social conditions and other details of the depicted period."
                        } : [70018].includes(t) ? {
                            name: "Teen",
                            description: "Teen fiction is a subgenre of webnovel that is written for or marketed to young adults. Heroines are mostly students and the story is happened on campus. "
                        } : [70019].includes(t) ? {
                            name: "LGBT+",
                            description: "LGBT+ fiction is a subgenre of webnovel and plots the story of LGBT+. The most popular plots include boys' love and girls' love. "
                        } : [70017].includes(t) ? {
                            name: "Sci-fi",
                            description: "Sci-fi  is a subgenre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science, space exploration, time travel, parallel universes etc."
                        } : [70005].includes(t) ? {
                            name: "General",
                            description: "General fiction is the catch all term for novels and other literature that don't fit into a particular genre."
                        } : {
                            name: "",
                            description: ""
                        }
                    },
                    getCategoryMaleNameById: function (t) {
                        return [70001].includes(t) ? {
                            name: "Urban",
                            description: "Urban novel is a specific genre of webnovel that characters live in cities. The story usually sets in modern cities and takes the love between men and women as the center."
                        } : [70009].includes(t) ? {
                            name: "Eastern",
                            description: "Eastern novel is a subgenre of fantasy novel that has elements of Asian culture as the foundation, such as cultivation, xuanhuan, wuxia, or xianxia. It usually contains the Daoist culture as the elementary core."
                        } : [70008].includes(t) ? {
                            name: "Games",
                            description: "Game novel is a subgenre of webnovel that set in a game. The core of the story is based on the game and it also involves fantasy elements. A main plot is that heroines play a game immersively with a helmet and the storyline is spread in the game."
                        } : [70002].includes(t) ? {
                            name: "Fantasy",
                            description: "Fantasy fiction is a genre that involves magic and supernatural elements. The background is set in a fictional universe or unpredictable world and characters use magic to fight against powerful supernaturel enemies such as dragon. Compared with Eastern Fantasy, Fantasy refers to Western fantasy and is inspired by mythology and folklore. Fantasy is also distinguished from science fiction and horror though there is an overlap between the three."
                        } : [70006].includes(t) ? {
                            name: "Sci-fi",
                            description: "Science Fiction (sometimes shortened to Sci-Fi or SF) is a genre of speculative fiction which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, extraterrestrial life, sentient artificial intelligence, cybernetics, certain forms of immortality (like mind uploading), and the singularity."
                        } : [70004].includes(t) ? {
                            name: "Horror",
                            description: "Horror is a genre of fiction which is intended to frighten, scare, or disgust. Horror is often divided into the sub-genres of psychological horror and supernatural horror,. Horror intends to create an eerie and frightening atmosphere for the reader. "
                        } : [70007].includes(t) ? {
                            name: "Sports",
                            description: "Sports novel is a literary genre that focuses on the theme of sports. Characters are athletics or love sports. The main plot usually involves various competitions."
                        } : [70012].includes(t) ? {
                            name: "Action",
                            description: 'Action fiction is the literary genre that includes spy novels, adventure stories, tales of terror and intrigue ("cloak and dagger") and mysteries. This kind of story utilizes suspense, the tension that is built up when the reader wishes to know how the conflict between the protagonist and antagonist is going to be resolved or what the solution to the puzzle of a thriller is.'
                        } : [70013].includes(t) ? {
                            name: "War",
                            description: "A war novel or military fiction is a novel about war. It is a novel in which the primary action takes place on a battlefield, or in a civilian setting (or home front), where the characters are preoccupied with the preparations for, suffering the effects of, or recovering from war. Many war novels are historical novels."
                        } : [70010].includes(t) ? {
                            name: "Realistic",
                            description: "Realistic fiction typically involves a story whose basic setting (time and location in the world) is real and whose events could feasibly happen in a real-world setting."
                        } : [70003].includes(t) ? {
                            name: "History",
                            description: "Historical fiction is a literary genre in which the plot takes place in a setting related to the past events, but is fictional.An essential element of historical fiction is that it is set in the past and pays attention to the manners, social conditions and other details of the depicted period."
                        } : [70011].includes(t) ? {
                            name: "ACG",
                            description: 'ACG ("Animation, Comics, and Games") is a term used in some subcultures of Greater China and Southeast Asia. Because a strong economic and cultural connection exists between anime, manga and games in the Japanese market, ACG is used to describe this phenomenon in relative fields. The term refers in particular to Japanese anime, manga and video games.'
                        } : [81006].includes(t) ? {
                            name: "Anime & Comics",
                            description: "Fanfiction whose original work is animation or comic, such as naruto and one piece."
                        } : [81005].includes(t) ? {
                            name: "Video Games",
                            description: "Fanfiction whose original work is video game, such as Pokemon and Zelda."
                        } : [81002].includes(t) ? {
                            name: "Celebrities",
                            description: "Fanfiction whose original work is celebrity, such as BTS."
                        } : [81003].includes(t) ? {
                            name: "Music & Bands",
                            description: "Fanfiction whose original work is music or band, such as Justin Biber."
                        } : [81007].includes(t) ? {
                            name: "Movies",
                            description: "Fanfiction whose original work is movie, such as Star War, Marvel."
                        } : [81001].includes(t) ? {
                            name: "Book&Literature",
                            description: "Fanfiction whose original work is published literature, such as Harry Potter, Pride and Prejudice."
                        } : [81008].includes(t) ? {
                            name: "TV",
                            description: "Fanfiction whose original work is drama or TV show, such as Chicago PD, the Walking Dead."
                        } : [81004].includes(t) ? {
                            name: "Theater",
                            description: "Fanfiction whose original work is theater, such as Shakespeare."
                        } : [81009].includes(t) ? {
                            name: "Others",
                            description: "Fan fiction or fanfiction is fictional writing written in an amateur capacity by fans, unauthorized by, but based on an existing work of fiction. The author uses copyrighted characters, settings, or other intellectual properties from the original creator as a basis for their writing."
                        } : {
                            name: "",
                            description: ""
                        }
                    }
                }
            }
            ,
            4459: t => {
                t.exports = function (t) {
                    var e = "";
                    return t && 2 === t && (e = '<span class="pa t0 r0 fs12 _tag">original</span>'),
                        e
                }
            }
            ,
            7696: t => {
                t.exports = function (t, e) {
                    var a = 0
                        , o = 0
                        , n = [];
                    return t && e && (n = t[e] || []) && n.length && (o = Math.random() * n.length,
                        a = Math.floor(o)),
                    n[a] || n[n.length - 1]
                }
            }
            ,
            4728: t => {
                t.exports = function (t) {
                    return t && "" != t ? t.split(/\n+/) : []
                }
            }
            ,
            99: t => {
                t.exports = function (t) {
                    if (t && t.length) {
                        for (var e = [], a = 0; a < t.length; a++)
                            e[a] = t[a].name;
                        return e.length ? e.join(", ") : "- -"
                    }
                    return "- -"
                }
            }
            ,
            2708: t => {
                t.exports = function (t, e) {
                    var a = "###";
                    return t && (a = "/profile/" + t + (e ? "?appId=" + e : "")),
                        a
                }
            }
            ,
            8855: t => {
                t.exports = function (t, e, a) {
                    return e
                }
            }
            ,
            443: t => {
                t.exports = function (t) {
                    return (t + "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/=/g, "&#61;").replace(/`/g, "&#96;")
                }
            }
            ,
            518: t => {
                t.exports = function (t) {
                    var e, a = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = (new Date).getFullYear();

                    function r(t) {
                        return +t < 10 ? "0".concat(t) : t
                    }

                    if (t) {
                        var i = (e = new Date(+t)).getFullYear()
                            , s = a[e.getMonth()]
                            , c = e.getDate();
                        return i !== n || o ? "".concat(s, " ").concat(c, ", ").concat(i) : "".concat(s, " ").concat(c, ", ").concat(r(e.getHours()), ":").concat(r(e.getMinutes()))
                    }
                    return "-"
                }
            }
            ,
            6708: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => l
                });
                var o = a(7113)
                    , n = a.n(o)
                    , r = a(9209)
                    , i = a.n(r)
                    , s = (a(955),
                    {
                        sel: ".j_drop",
                        $drop: null,
                        apiDrop: null,
                        removeOnHide: !0,
                        parentScroll: null,
                        onItemClick: function (t, e) {
                        }
                    });

                function c(t) {
                    n().extend(!0, this, s, t),
                        this.init()
                }

                c.prototype.getDropDom = function (t) {
                    var e = t.data("ejs") || {}
                        , a = t.attr("href")
                        , o = i().render(a, n().extend(!0, {}, {
                        data: e
                    }))
                        , r = n()(n().trim(o));
                    return n()("body").append(r),
                        r
                }
                    ,
                    c.prototype.onShow = function (t) {
                        var e = this;
                        e.parentScroll && ("window" !== e.parentScroll && n()(window).one("scroll", (function () {
                                t.hide()
                            }
                        )),
                            n()(e.parentScroll).one("scroll", (function () {
                                    t.hide()
                                }
                            )))
                    }
                    ,
                    c.prototype.init = function () {
                        var t = this;
                        n()(document).on("click", t.sel, (function (e) {
                                e.preventDefault();
                                var a = n()(this)
                                    , o = a.data("drop");
                                if (o)
                                    o.show();
                                else {
                                    var r = t.getDropDom(a)
                                        , i = a.drop(r, {
                                        eventType: "click",
                                        position: "3-2",
                                        offsets: {
                                            x: 8,
                                            y: 6
                                        },
                                        onShow: function (e, o) {
                                            var r = this;
                                            t.onShow(r),
                                                o.off("click.drop").on("click.drop", "a", (function () {
                                                        r.hide(),
                                                            t.onItemClick(n()(this), a)
                                                    }
                                                ))
                                        },
                                        onHide: function () {
                                            this.el.target.remove()
                                        }
                                    });
                                    i.data("drop").show(),
                                        t.apiDrop = i
                                }
                            }
                        ))
                    }
                ;
                const l = c
            }
            ,
            9427: (t, e, a) => {
                "use strict";
                a(9205);
                var o = a(319)
                    , n = a.n(o)
                    , r = a(7757)
                    , i = a.n(r)
                    , s = a(3038)
                    , c = a.n(s)
                    , l = a(9713)
                    , d = a.n(l)
                    , h = a(8926)
                    , p = a.n(h)
                    , u = a(9981)
                    , g = a.n(u)
                    , f = {
                    THEME_CLASS_MAP: {
                        1: "",
                        2: ""
                    },
                    THEME_TITLE_MAP: {
                        1: "Webnovel",
                        2: "Webnovel"
                    },
                    THEME_LOGO_MAP: {
                        1: "https://webbanner.webnovel.com/utils/1660807929_495218.png",
                        2: "https://webbanner.webnovel.com/utils/1660807929_495218.png"
                    },
                    THEME_IOS_STORE_MAP: {
                        1: "https://itunes.apple.com/us/app/qidian-the-best-webnovels-reading-app/id1234939196?ls=1&mt=8",
                        2: "https://itunes.apple.com/us/app/qidian-the-best-webnovels-reading-app/id1234939196?ls=1&mt=8"
                    },
                    THEME_ANDROID_STORE_MAP: {
                        1: "https://play.google.com/store/apps/details?id=com.qidian.Int.reader",
                        2: "https://play.google.com/store/apps/details?id=com.qidian.Int.reader"
                    }
                }
                    , m = {
                    1: a(6409),
                    2: a(6409)
                };
                var v = a(4400)
                    , _ = a.n(v)
                    , b = a(8764)
                    , y = (a(6542),
                    null)
                    , C = 0
                    , I = {
                    0: 6,
                    100: 3
                }
                    , w = function () {
                    var t, e, a;
                    if (0 != +C && y) {
                        var o, n = (new Date).getTime(), r = {
                            TimeZone: (o = (new Date).getTimezoneOffset() / -60,
                                0 === o ? "GMT" : "GMT".concat(o > 0 ? "+" + o : o)),
                            StatParams: "",
                            BookType: y.bookType,
                            ScrollType: I[y.bookType],
                            BookId: y.bookId,
                            ChapterId: y.chapterId,
                            EndTime: n,
                            ReadingDuration: n - C,
                            StartTime: C,
                            GUID: (null === (t = g_data) || void 0 === t || null === (e = t.login) || void 0 === e || null === (a = e.user) || void 0 === a ? void 0 : a.userId) || "0"
                        };
                        !function (t, e) {
                            if (navigator.sendBeacon)
                                navigator.sendBeacon(t, void 0);
                            else {
                                var a = new Image;
                                a.onload = a.onerror = function () {
                                    a = null
                                }
                                    ,
                                    a.src = t
                            }
                        }("/go/pcm/reading/report?_csrfToken=".concat(g().get("_csrfToken") || "", "&readingInfos=").concat(JSON.stringify([r]))),
                            C = 0
                    }
                }
                    , k = function () {
                    var t = document.visibilityState;
                    "hidden" === t && w(),
                    "visible" === t && 0 === C && (C = (new Date).getTime())
                }
                    , P = function t() {
                    0 !== C && w(),
                        document.removeEventListener("visibilitychange", k),
                        window.removeEventListener("beforeunload", t)
                };
                const S = function (t) {
                    w(),
                        C = (new Date).getTime(),
                        y = t
                };
                var A = a(2271)
                    , T = a(7113)
                    , x = a.n(T);
                var O = a(6336)
                    , j = a(9209)
                    , D = a.n(j)
                    , L = a(7398)
                    , M = a(2249)
                    , E = a(1170)
                    , B = a(518)
                    , N = a.n(B)
                    , R = {
                    containerSel: "body",
                    sel: null,
                    $it: !1,
                    events: "mousewheel.doubleScroll DOMMouseScroll.doubleScroll"
                };

                function U(t) {
                    x().extend(!0, this, R, t),
                        this.init()
                }

                U.prototype.run = function (t, e) {
                    var a = e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1) || e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1);
                    a > 0 && 0 == t.scrollTop && e.preventDefault(),
                    a < 0 && !(t.scrollHeight > t.scrollTop + t.offsetHeight) && e.preventDefault()
                }
                    ,
                    U.prototype.init = function () {
                        var t = this
                            , e = t.$it;
                        e.length ? e.off(t.events).on(t.events, (function (e) {
                                t.run(this, e)
                            }
                        )) : x()(t.containerSel).off(t.events).on(t.events, t.sel, (function (e) {
                                t.run(this, e)
                            }
                        ))
                    }
                ;
                const H = U;
                var V = a(2516)
                    , Z = a(6798)
                    , q = a(1956)
                    , F = a.n(q)
                    , W = (a(4340),
                    a(9515),
                    a(955),
                    a(1964),
                    "ui-tips")
                    , G = W + "-";
                $.fn.tips = function (t) {
                    return $(this).each((function () {
                            $(this).data("tips") || $(this).data("tips", new z($(this), t))
                        }
                    ))
                }
                ;
                var z = function (t, e) {
                    var a, o, n = {
                        attribute: "title",
                        eventType: "hover",
                        content: "",
                        align: "center",
                        delay: 100,
                        onShow: $.noop,
                        onHide: $.noop
                    }, r = $.extend({}, n, e || {}), i = t;
                    if (i.hasClass(W)) {
                        var s = i.attr("title") || i.attr("data-title");
                        return s && i.attr("data-title", s).removeAttr("title"),
                        window.addEventListener || (a = $('<span class="ui-tips-before"></span>').html(s),
                            o = $('<i class="ui-tips-after"></i>'),
                            i.prepend(a),
                            i.append(o),
                            a.css("margin-left", -.5 * a.outerWidth()),
                            o.css("margin-left", -.5 * o.outerWidth())),
                            void i.data("tips", !0)
                    }
                    var c, l = this, d = function () {
                        var t = r.content;
                        return t || (t = i.attr(r.attribute),
                        "title" == r.attribute && ((t = t || i.data("title")) && i.data("title", t),
                            i.removeAttr("title"))),
                            t
                    };
                    return this.el = {
                        trigger: i,
                        tips: void 0
                    },
                        this.callback = {
                            show: r.onShow,
                            hide: r.onHide
                        },
                        this.align = r.align,
                        this.position = r.position,
                        "hover" == r.eventType ? i.hover((function () {
                                var t = d();
                                c = setTimeout((function () {
                                        l.show(t)
                                    }
                                ), r.delay)
                            }
                        ), (function () {
                                clearTimeout(c),
                                    l.hide()
                            }
                        )) : "click" == r.eventType ? (i.click((function () {
                                l.show(d())
                            }
                        )),
                            $(document).mouseup((function (t) {
                                    var e = t.target
                                        , a = i.get(0);
                                    1 == l.display && a != e && 0 == a.contains(e) && 0 == l.el.tips.get(0).contains(e) && l.hide()
                                }
                            ))) : this.show(d()),
                        this
                };
                z.prototype.show = function (t) {
                    if (!t)
                        return this;
                    var e, a, o = this.el.trigger, n = this.el.tips;
                    n ? (n.show(),
                        e = n.find("span").html(t),
                        a = n.find("i")) : (n = $("<div></div>").addClass("ui-tips-x"),
                        e = $('<span class="ui-tips-before"></span>').html(t),
                        a = $('<i class="ui-tips-after"></i>'),
                        $(document.body).append(n.append(e).append(a)));
                    var r = 0
                        , i = "5-7";
                    return "left" == this.align ? r = -.5 * e.width() + parseInt(e.css("padding-left")) || 0 : "right" == this.align ? r = .5 * e.width() - parseInt(e.css("padding-right")) || 0 : "rotate" == this.align ? i = "6-8" : "number" == typeof this.align && (r = this.align),
                    this.position && (i = this.position),
                        n.addClass(G + this.align),
                    "rotate" != this.align && a.css({
                        left: r
                    }),
                        n.follow(o, {
                            offsets: {
                                x: r,
                                y: 0
                            },
                            position: i,
                            edgeAdjust: !1
                        }),
                        this.callback.show.call(o, n),
                        this.el.tips = n,
                        this.display = !0,
                        this
                }
                    ,
                    z.prototype.hide = function () {
                        return this.el.tips && (this.el.tips.hide(),
                            this.callback.hide.call(this.el.trigger, this.el.tips)),
                            this.display = !1,
                            this
                    }
                    ,
                    z.prototype.init = function () {
                        return window.addEventListener,
                            $("." + W).tips(),
                            $(document).mouseover((function (t) {
                                    var e = t && t.target;
                                    e && $(e).hasClass(W) && !$(e).data("tips") && $(e).tips()
                                }
                            )),
                            this
                    }
                ;
                const Q = L.Z.inherit({
                    el: "body",
                    events: {},
                    elements: {},
                    render: function () {
                        return this.setElement(this.el),
                            this.init(),
                            this
                    },
                    init: function () {
                        this.chaModal(),
                            this.easeScroll(),
                            x()(".ui-tips").tips(),
                            x()(".g_chat_reply textarea").autoTextarea(),
                            x()(".cha-modal-bd").on("scroll", (function () {
                                    x()(this)[this.scrollTop ? "addClass" : "removeClass"]("_scrolling")
                                }
                            ))
                    },
                    initCostMod: function () {
                        var t = x()("#stoneMod")
                            , e = !1;
                        x()(document).on("click", ".j_tone_cost", (function (a) {
                                a.preventDefault(),
                                    e ? e.load() : e = t.overlay({
                                        load: !0
                                    }).data("overlay")
                            }
                        ))
                    },
                    chaModal: function () {
                        var t = x()("html");
                        x()(".j_modal").overlay({
                            effect: "onOffNormal",
                            oneInstance: !0,
                            mask: !1,
                            triggerActive: "_on",
                            onBeforeLoad: function () {
                                t.addClass("_sd_on")
                            },
                            onClose: function () {
                                t.removeClass("_sd_on")
                            }
                        })
                    },
                    easeScroll: function () {
                        var t = x()(document)
                            , e = x()(window)
                            , a = x()("body,html");
                        x()("#goTop").on("click", (function (o) {
                                o.preventDefault(),
                                    a.stop(!0).animate({
                                        scrollTop: t.scrollTop() - e.height() + 120
                                    }, 300)
                            }
                        )),
                            x()("#goBottom").on("click", (function (o) {
                                    o.preventDefault(),
                                        a.stop(!0).animate({
                                            scrollTop: t.scrollTop() + e.height() - 120
                                        }, 300)
                                }
                            ))
                    }
                });

                function K() {
                    this.init()
                }

                x().anno27 = x().anno27 || {},
                    x().anno27.$on = null,
                    K.prototype.getTitle = function (t) {
                        return t.attr("data-title")
                    }
                    ,
                    K.prototype.getTxt = function (t) {
                        var e = t.attr("data-annotation-id");
                        return t.parents(".cha-words").find('.tinymce-annotation-container [data-annotation-id="' + e + '"]').html()
                    }
                    ,
                    K.prototype.getDom = function (t, e) {
                        var a = '<span class="anno-drop"><span class="anno-drop-arrow"></span><span class="anno-drop-hd">' + t + '</span><span class="anno-drop-bd">' + e + "</span></span>";
                        return x()(a)
                    }
                    ,
                    K.prototype.setDirection = function (t, e) {
                        var a = this.$win.height()
                            , o = this.$win.width()
                            , n = 2 * e.clientX > o ? "_l" : "_r"
                            , r = 2 * e.clientY > a ? "_t" : "_b";
                        t.removeClass("_l" === n ? "_r" : "_l"),
                            t.removeClass("_t" === r ? "_b" : "_t"),
                            t.addClass(n + " " + r)
                    }
                    ,
                    K.prototype.setDom = function (t) {
                        var e = this
                            , a = t.parent("anno")
                            , o = e.getTitle(a);
                        if (o) {
                            var n = e.getTxt(a)
                                , r = e.getDom(o, n);
                            t.append(r),
                                a.removeAttr("data-title"),
                                e.$pop = r
                        }
                    }
                    ,
                    K.prototype.show = function (t, e) {
                        x().anno27.$on && x().anno27.$on.length && x().anno27.$on.removeClass("_on"),
                            this.setDirection(t, e),
                            x().anno27.$on = t,
                            setTimeout((function () {
                                    t.addClass("_on")
                                }
                            ), 100)
                    }
                    ,
                    K.prototype.hide = function () {
                        x().anno27.$on && x().anno27.$on.length && (x().anno27.$on.removeClass("_on"),
                            x().anno27.$on = !1)
                    }
                    ,
                    K.prototype.init = function () {
                        var t = this;
                        t.$win = x()(window),
                            t.$body = x()("body").on("mouseenter", "anno sup", (function (e) {
                                    e.preventDefault(),
                                        t.setDom(x()(this))
                                }
                            )).on("click", "anno sup", (function (e) {
                                    e.preventDefault();
                                    var a = x()(this).parents("anno");
                                    a.hasClass("_on") || t.show(a, e)
                                }
                            )).on("click", (function (e) {
                                    var a = e.target;
                                    if (x().anno27.$on && x().anno27.$on.length) {
                                        var o = x().anno27.$on[0];
                                        a && o && a != o && 0 == o.contains(a) && t.hide()
                                    }
                                }
                            ));
                        var e = !1;
                        t.$win.on("resize", (function () {
                                !e && t.hide(),
                                    e = !0,
                                    setTimeout((function () {
                                            e = !1
                                        }
                                    ), 500)
                            }
                        ))
                    }
                ;
                const X = K;

                function J(t) {
                    x().extend(this, t, !0),
                        this.init()
                }

                J.prototype.set = function (t, e) {
                    var a = this.$target;
                    t.each((function () {
                            a.removeClass(this.value)
                        }
                    )),
                        a.addClass(e)
                }
                    ,
                    J.prototype.upDn = function () {
                        var t = this.$box
                            , e = this.upDnOpt;
                        t.find(e.boxSel).each((function (t, a) {
                                for (var o = x()(this), n = o.find("input").attr("type", "text"), r = o.find(e.dnSel), i = o.find(e.upSel), s = n.attr("data-step").split(","), c = s.length, l = parseInt(n.attr("data-default")), d = !1, h = 0, p = s.length; h < p; h++)
                                    if (l == parseInt(s[h])) {
                                        d = h;
                                        break
                                    }
                                d || (d = 0),
                                    i.on("click", (function () {
                                            var t = parseInt(n.val());
                                            ++d >= c && (d = c - 1);
                                            var e = s[d];
                                            e !== t && n.val(e).trigger("change")
                                        }
                                    )),
                                    r.on("click", (function () {
                                            var t = parseInt(n.val());
                                            --d <= 0 && (d = 0);
                                            var e = s[d];
                                            e !== t && n.val(e).trigger("change")
                                        }
                                    ))
                            }
                        ))
                    }
                    ,
                    J.prototype.bindEvent = function () {
                        var t = this
                            , e = t.$box;
                        x().each(t.changeRule, (function (a, o) {
                                var n = '[name="' + a + '"]'
                                    , r = e.find(n);
                                e.on("change", n, (function () {
                                        var e = x()(this)
                                            , a = e.val();
                                        if ("string" == typeof o && t.set(r, a),
                                        "function" == typeof o)
                                            return o(t, r, e, a),
                                                !1
                                    }
                                ))
                            }
                        ))
                    }
                    ,
                    J.prototype.init = function () {
                        var t = this;
                        t.bindEvent(),
                        t.upDnOpt && t.upDn()
                    }
                ;
                const Y = J;
                var tt = a(8833);

                function et(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e && (o = o.filter((function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }
                        ))),
                            a.push.apply(a, o)
                    }
                    return a
                }

                function at(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? et(Object(a), !0).forEach((function (e) {
                                d()(t, e, a[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : et(Object(a)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            }
                        ))
                    }
                    return t
                }

                var ot = {
                    chapters: {},
                    bookId: null
                };

                function nt(t) {
                    x().extend(!0, this, ot, t)
                }

                nt.prototype.setChapterInfo = function (t, e) {
                    this.chapters[t] = e
                }
                    ,
                    nt.prototype.updateChapterInfo = function (t, e) {
                        this.chapters[t] = at(at({}, this.chapters[t]), e)
                    }
                    ,
                    nt.prototype.getChapterInfo = function (t) {
                        return this.chapters[t]
                    }
                    ,
                    nt.prototype.reset = function () {
                        this.chapters = {}
                    }
                ;
                const rt = nt;
                a(2988);
                const it = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                        , e = {
                        placeholder: "data:image/gif;base64,R0lGODlhCgAKAIAAAP///wAAACH5BAEAAAAALAAAAAAKAAoAAAIIhI+py+0PYysAOw==",
                        threshold: 280,
                        data_attribute: "original",
                        failure_limit: 10
                    };
                    t ? t.find("[data-original]").lazyload(e) : x()("[data-original]").lazyload(e)
                };
                var st = {
                    selector: ".j_show_img"
                };

                function ct(t, e) {
                    this.selector = t,
                        x().extend(!0, this, st, e),
                        this.init()
                }

                ct.prototype.get$modal = function (t) {
                    var e = t.attr("data-src")
                        , a = t.find("img")
                        , o = "img"
                        , n = null
                        , r = null
                        , i = null;
                    a && a.length && (i = a.attr("src"),
                        n = a.attr("width"),
                        r = a.attr("height"),
                        o = a.attr("alt"));
                    var s = (n ? 'width="' + n + '" ' : "") + (r ? 'height="' + r + '" ' : "") + 'alt="' + o + '"'
                        , c = ""
                        , l = i && n && r;
                    if (l) {
                        var d = "";
                        +n > +document.body.clientWidth ? d = 'style="width:100%;height:auto;"' : +r > +document.body.clientHeight && (d = 'style="height:100%;width:auto;"'),
                            c = '<img cross-origin="anonymous" class="j_thumb" src="' + i + '" ' + s + " " + d + " />"
                    }
                    var h = '<div class="g_mod_wrap g_mod_img">' + (l ? c : '<div class="g_loading _auto _on"><i></i></div>') + '<img cross-origin="anonymous" class="_img" src="' + e + '" ' + s + ' /><a title="close" href="###" class="j_close _close pa t0 r0 mt16 mr16"><svg><use xlink:href="#i-times"></use></svg></a></div> '
                        , p = x()(x().trim(h));
                    return x()("body").append(p),
                    l && x()(window).one("resize", (function () {
                            p.find(".j_thumb").remove()
                        }
                    )),
                        p
                }
                    ,
                    ct.prototype.show = function (t) {
                        var e = t.overlay().data("overlay");
                        e.load(),
                            t.on("click", ".j_close", (function (a) {
                                    a.preventDefault(),
                                        e.close(),
                                        setTimeout((function () {
                                                t.remove()
                                            }
                                        ), 500)
                                }
                            ))
                    }
                    ,
                    ct.prototype.init = function () {
                        var t = this;
                        x()(document).on("click", this.selector, (function (e) {
                                e.preventDefault();
                                var a = x()(this)
                                    , o = t.get$modal(a);
                                setTimeout((function () {
                                        t.show(o)
                                    }
                                ), 16)
                            }
                        )).on("mouseenter", this.selector, (function () {
                                var t = x()(this);
                                if (!t.data("img-init")) {
                                    var e = t.attr("data-src");
                                    e && ((new Image).src = e,
                                        t.data("img-init", !0))
                                }
                            }
                        ))
                    }
                ;
                const lt = ct;
                var dt = {
                    bookId: -1,
                    dropSel: ".j_para_drop_bar",
                    tplSel: "#tplParaOperationDrop",
                    canShowMtl: !1,
                    canShowPara: !1
                };

                function ht(t) {
                    x().extend(this, dt, t, !0),
                        this.init()
                }

                ht.prototype.togglePara = function (t) {
                    this.canShowPara = 1 == +t
                }
                    ,
                    ht.prototype.toggleMtl = function (t) {
                        this.canShowMtl = 1 == +t
                    }
                    ,
                    ht.prototype.getDropDom = function (t, e, a, o) {
                        var n = t.find(this.dropSel);
                        n.length && n.remove();
                        var r = e.data("ejs") || {};
                        r.hasCount = a,
                            r.hasMtlEdit = o,
                            r.bookId = this.bookId,
                            r.userId = g_data.login.user.userId || -1,
                            r.originalUserId = r.originalUserId || -1;
                        var i = D().render(this.tplSel, {
                            data: r
                        });
                        return n = x()(x().trim(i)),
                            t.append(n),
                            n
                    }
                    ,
                    ht.prototype.isInScreenTop = function (t) {
                        return t[0].getBoundingClientRect().top < 100
                    }
                    ,
                    ht.prototype.init = function () {
                        var t = this
                            , e = null
                            , a = null;
                        x()(document).on("mouseenter", ".j_paragraph", (function (o) {
                                if (o.preventDefault(),
                                t.canShowMtl || t.canShowPara) {
                                    var n = x()(this)
                                        , r = n.find(".j_paragraph_content")
                                        , i = r.length > 0 ? "para" : "title"
                                        , s = 1 === g_data.isWhiteUser && 1 === g_data.isTranslateMode && "title" !== i
                                        , c = n.parents(".para-comment-allowed").length > 0;
                                    (c || s) && (e = setTimeout((function () {
                                            t.getDropDom(n, r, c, s)[t.isInScreenTop(n) ? "addClass" : "removeClass"]("_reverse"),
                                                a = setTimeout((function () {
                                                        n.addClass("_show_tip")
                                                    }
                                                ), 0)
                                        }
                                    ), 300),
                                        A.Z.send({
                                            target: null
                                        }, {
                                            l1: "1",
                                            eid: "qi_A_paragraph",
                                            pdid: t.bookId,
                                            uiname: "paragraph",
                                            dt: n.find(".para-comment-num").length
                                        }))
                                }
                            }
                        )).on("mouseleave", ".j_paragraph", (function () {
                                clearTimeout(e),
                                    clearTimeout(a),
                                    x()(this).removeClass("_show_tip")
                            }
                        ))
                    }
                ;
                const pt = ht;
                var ut = a(1469)
                    , gt = a(3309)
                    , ft = a(9168)
                    , mt = a(3353)
                    , vt = a(4748)
                    , _t = a(7408)
                    , bt = a.n(_t)
                    , yt = a(2708)
                    , Ct = a.n(yt)
                    , It = a(8855)
                    , wt = a.n(It)
                    , kt = a(3229)
                    , Pt = a.n(kt);

                function St(t, e) {
                    this.globalParams = {
                        chapterId: e.id,
                        bookId: t,
                        orderType: 1
                    },
                        this.ChapterCommentStore = new mt.Z,
                    e.comNum && this.setChapterCommentNum(e.id, +e.comNum),
                        this.$headCount = x()(".j_comment_title i"),
                        this.isMainLast = 0,
                        this.onceInited = !1,
                        this.open = !1,
                        this.init(),
                        this.$tab = x()(".j_tab_chat"),
                        this.apiTab = new ft.Z(this.$tab)
                }

                a(6524),
                    a(2043),
                    a(4527),
                    St.prototype.init = function () {
                        var t = this;
                        new gt.Z({
                            parentScroll: ".j_comment_chat",
                            delAction: function (e) {
                                var a = e.data("ejs");
                                if (a.reviewId) {
                                    var o = x()(".j_review_del_" + a.reviewId)
                                        , n = o.closest(".j_chapter_comment_main").data("ejs").reviewId;
                                    n === a.reviewId && (n = null),
                                        t.ChapterCommentStore.deleteComment(t.globalParams.chapterId, a.reviewId, n, (function (e) {
                                                n && t.refreshReplyBtn(n),
                                                    o.remove(),
                                                    t.syncHeaderCount(),
                                                    (new E.Z).success(e.msg)
                                            }
                                        ), (function (t) {
                                                (new E.Z).error(t.msg || "error")
                                            }
                                        ))
                                }
                            }
                        }),
                            x()(document).on("click", ".j_tab_chat>a", (function (e) {
                                    var a = e.target.getAttribute("data-order");
                                    t.checkoutCommentType(a),
                                        t.getComments()
                                }
                            )).on("click", ".j_comment_good", (function (t) {
                                    (0,
                                        ut.Z)(t)
                                }
                            )).on("click", ".j_bottom_comments", (function (e) {
                                    e.preventDefault(),
                                        t.onceInit();
                                    var a = x()(e.target).closest(".chapter_content").data("cid");
                                    t.open = !0,
                                        t.ChapterCommentStore.stop(),
                                        t.scrollToCorrectChapter(e),
                                        t.checkoutCommentType(1),
                                        t.checkoutCommentByChapterId(a)
                                }
                            )).on("click", ".j_comments", (function (e) {
                                    e.preventDefault();
                                    var a = x()(this);
                                    a.hasClass("_on") || (a.addClass("_on"),
                                        t.onceInit(),
                                        t.open = !0,
                                        t.ChapterCommentStore.stop(),
                                        t.checkoutCommentType(1),
                                        t.getComments())
                                }
                            )).on("click", ".j_get_more_replies", (function (e) {
                                    var a = x()(this).closest(".j_comment_wrap");
                                    t.getReplysByReivewDom(a)
                                }
                            )).on("click", ".j_comment_review", (function (e) {
                                    if (e.preventDefault(),
                                    0 == +g_data.login.statusCode) {
                                        var o = x()(this);
                                        if (o.hasClass("_disabled"))
                                            return;
                                        o.addClass("_disabled"),
                                            Promise.all([a.e(8256), a.e(639)]).then(a.bind(a, 8928)).then((function (e) {
                                                    var a = e.default;
                                                    o.removeClass("_disabled"),
                                                        new a({
                                                            title: "Add a Chapter Comment",
                                                            url: t.ChapterCommentStore.getAddUrl(),
                                                            params: {
                                                                bookId: t.globalParams.bookId,
                                                                chapterId: t.globalParams.chapterId
                                                            },
                                                            onSuccess: function (e) {
                                                                t.ChapterCommentStore.addComment(t.globalParams.bookId, t.globalParams.chapterId),
                                                                    t.ChapterCommentStore.resetCommentByChapterId(t.globalParams.chapterId),
                                                                    t.checkoutCommentType(2),
                                                                    t.getComments(),
                                                                    t.syncHeaderCount(),
                                                                    (new E.Z).success(e.msg || "success")
                                                            }
                                                        })
                                                }
                                            ))
                                    }
                                }
                            )).on("click", ".j_chapter_reply", (function (e) {
                                    e.preventDefault();
                                    var o = x()(this).closest(".j_comment_wrap")
                                        , n = x()(this).closest(".j_chapter_comment_main")
                                        , r = n.data("ejs") || {}
                                        , i = o.data("ejs") || {}
                                        , s = null;
                                    if (i && (s = i.reviewId),
                                        s) {
                                        var c = x()(this);
                                        c.hasClass("_disabled") || (c.addClass("_disabled"),
                                            Promise.all([a.e(8256), a.e(639)]).then(a.bind(a, 8928)).then((function (e) {
                                                    var a = e.default;
                                                    c.removeClass("_disabled"),
                                                        new a({
                                                            title: "Reply to a comment",
                                                            quote: D().render(' <%\nvar  originalImageURL = "";\nif(item.imageItems && item.imageItems.length>0){\noriginalImageURL = item.imageItems[0].imageUrl;\n}\n%> <% if(item.userName){ %> <span class="fw700"><%= item.userName %>:</span> <% } %> <% if(item.content){ %> <span><%- formatCommentContent(item.content) %></span> <% }else if(originalImageURL){ %> <span> <svg> <use xlink:href="#i-img"></use> </svg> image</span> <% } %> ', {
                                                                item: t.ChapterCommentStore.getReviewByReviewId(s),
                                                                formatCommentContent: bt()
                                                            }),
                                                            url: t.ChapterCommentStore.getAddUrl(),
                                                            params: {
                                                                bookId: t.globalParams.bookId,
                                                                chapterId: t.globalParams.chapterId,
                                                                reviewId: s
                                                            },
                                                            onSuccess: function (e) {
                                                                t.ChapterCommentStore.addComment(t.globalParams.bookId, t.globalParams.chapterId, r.reviewId),
                                                                    t.ChapterCommentStore.resetReviewByReviewId(r.reviewId),
                                                                    t.getReplysByReivewDom(n),
                                                                    t.syncHeaderCount(),
                                                                    (new E.Z).success(e.msg || "success")
                                                            }
                                                        })
                                                }
                                            )))
                                    }
                                }
                            ))
                    }
                    ,
                    St.prototype.onceInit = function () {
                        if (!this.onceInited) {
                            this.onceInited = !0;
                            var t = this
                                , e = x()("html")
                                , a = x()(".cha-tools .j_comments")
                                , o = x()("#modalReview");
                            t.$modalChat = o,
                                t.$modalBody = o.find(".j_reply_block"),
                                t.apiModalLoading = o.find(".j_comment_loader").loadingBox().data("loadingBox"),
                                o.overlay({
                                    effect: "onOffNormal",
                                    oneInstance: !0,
                                    mask: !1,
                                    triggerActive: "_on",
                                    onBeforeLoad: function () {
                                        a.addClass("_on"),
                                            e.addClass("_sd_on")
                                    },
                                    onLoad: function () {
                                        A.Z.send({
                                            target: null
                                        }, {
                                            l1: "1",
                                            ltype: "P",
                                            pdt: "chaptercommentlist",
                                            eid: "qi_P_commentlist",
                                            pdid: t.globalParams.bookId,
                                            cid: t.globalParams.chapterId
                                        })
                                    },
                                    onClose: function () {
                                        x()(".j_comments").removeClass("_on"),
                                            e.removeClass("_sd_on"),
                                            t.open = !1,
                                            t.reset()
                                    }
                                }),
                                t.chatModalApi = o.data("overlay"),
                                t.initCommentScroll()
                        }
                    }
                    ,
                    St.prototype.syncHeaderCount = function () {
                        var t = this
                            , e = t.ChapterCommentStore.getCommentNum(t.globalParams.chapterId);
                        t.$headCount.html(e > 0 ? e : "")
                    }
                    ,
                    St.prototype.getReplysByReivewDom = function (t) {
                        var e = this
                            , a = (t.data("ejs") || {}).reviewId;
                        if (a) {
                            var o = t.find(".j_more_replies_body")
                                , n = x()('<span class="g_loading _on"><i></i></span>')
                                , r = t.find(".j_get_more_replies")
                                , i = e.ChapterCommentStore.getLastTimeByReviewId(a);
                            0 === i ? o.html(n) : o.append(n),
                                e.ChapterCommentStore.requestChapterCommentReplys(e.globalParams.bookId, e.globalParams.chapterId, a, i, (function (t) {
                                        1 === t.isLast ? r.addClass("dn") : r.hasClass("dn") && r.removeClass("dn"),
                                            e.refreshReplyBtn(a, r),
                                            e.renderDom(i, a, o)
                                    }
                                ), (function () {
                                    }
                                ), (function () {
                                        n.remove()
                                    }
                                ))
                        }
                    }
                    ,
                    St.prototype.checkoutCommentType = function (t) {
                        var e = this
                            , a = t ? 2 == +t ? 2 : 1 : this.globalParams.orderType
                            , o = e.$tab.find('[data-order="' + a + '"]').addClass("_on");
                        o.siblings("._on").removeClass("_on"),
                            e.apiTab.moveTo(o),
                            e.globalParams.orderType = a,
                            e.reset()
                    }
                    ,
                    St.prototype.setChapterCommentNum = function (t, e) {
                        this.ChapterCommentStore.setChapterCommentNum(t, e)
                    }
                    ,
                    St.prototype.checkoutCommentByChapterId = function (t, e) {
                        var a = this;
                        if (e && e.comNum >= 0) {
                            var o = +e.comNum;
                            x()(".cha-tools .j_comments i").html(o > 99 ? "99+" : o || ""),
                                a.setChapterCommentNum(t, o)
                        }
                        t && a.setCurChapId(t),
                        a.open && a.getComments()
                    }
                    ,
                    St.prototype.getComments = function () {
                        var t = this;
                        if (t.open) {
                            t.chatModalApi && t.chatModalApi.load();
                            var e = t.ChapterCommentStore.getLastTimeByChapterId(t.globalParams.chapterId);
                            t.apiModalLoading.loading(),
                            0 === e && t.$modalBody.html(""),
                                t.ChapterCommentStore.requestChapterCommentList(t.globalParams.bookId, t.globalParams.chapterId, "", e, t.globalParams.orderType, (function (a) {
                                        t.isMainLast = a.isLast,
                                            t.renderDom(e),
                                            t.syncHeaderCount()
                                    }
                                ), (function (t) {
                                    }
                                ), (function () {
                                        1 == t.isMainLast && t.apiModalLoading.unloading()
                                    }
                                ))
                        }
                    }
                    ,
                    St.prototype.initCommentScroll = function () {
                        var t = this
                            , e = x()(".j_comment_chat");
                        new tt.Z({
                            $wrapper: e,
                            $scroller: e,
                            onLoadingNext: function () {
                                var e = t.ChapterCommentStore.getLastTimeByChapterId(t.globalParams.chapterId);
                                1 !== t.isMainLast && 0 !== e && t.getComments()
                            },
                            onLoadingPrev: function () {
                            }
                        })
                    }
                    ,
                    St.prototype.setCurChapId = function (t) {
                        this.reset(),
                            this.globalParams.chapterId = t,
                        this.$modalChat && this.$modalChat.attr("data-report-cid", t)
                    }
                    ,
                    St.prototype.refreshReplyBtn = function (t, e) {
                        if (t) {
                            e || (e = x()(".j_review_del_" + t + " .j_get_more_replies"));
                            var a = this.ChapterCommentStore.getReviewByReviewId(t)
                                , o = 0;
                            a && (o = a.replyAmount || 0);
                            var n = o - this.ChapterCommentStore.getShowedReviewsNumByReviewId(t);
                            n <= 0 ? e.addClass("dn") : e.find("strong").removeClass("dn").html("view " + n + " replies")
                        }
                    }
                    ,
                    St.prototype.renderDom = function (t, e, a) {
                        var o = this;
                        a = a || o.$modalBody;
                        var n = [];
                        e ? (n = o.ChapterCommentStore.getReplyQueueByReviewId(e),
                            o.ChapterCommentStore.clearReplyQueueByReviewId(e)) : (n = o.ChapterCommentStore.getCommentQueueByChapterId(o.globalParams.chapterId),
                            o.ChapterCommentStore.clearCommentQueueByChapterId(o.globalParams.chapterId));
                        var r = n.map((function (t) {
                                return o.ChapterCommentStore.getReviewByReviewId(t)
                            }
                        ))
                            , i = D().render(vt.Z, {
                            data: {
                                items: r,
                                chapterId: o.globalParams.chapterId,
                                bookId: o.globalParams.bookId
                            },
                            statusCode: g_data.login.statusCode,
                            user: g_data.login.user,
                            isAuthor: o.ChapterCommentStore.getIsAuthor(),
                            env: g_data.env,
                            staticPath: g_data.staticPath,
                            lastTime: t,
                            from: e ? "review" : "",
                            formatCommentContent: bt(),
                            getUserHomeUrl: Ct(),
                            getUserName: wt(),
                            getUserAvatar: Pt()
                        });
                        a.append(i).find(".g_txt_over").rowsEll()
                    }
                    ,
                    St.prototype.reset = function () {
                        this.$headCount.html(""),
                            this.ChapterCommentStore.stop(),
                            this.isMainLast = 0
                    }
                    ,
                    St.prototype.scrollToCorrectChapter = function (t) {
                        var e = x()(t.currentTarget);
                        if (!e.hasClass("cha-tools-reviews") && !e.hasClass("j_comment_link_" + this.globalParams.chapterId))
                            try {
                                var a, o;
                                void 0 !== e.get(0) && (o = x()(e.get(0)).offset().top - x()(window).scrollTop()),
                                    a = parseInt(x()(window).scrollTop() - x()(window).height() / 2 + o - 70),
                                    x()("html,body").animate({
                                        scrollTop: a
                                    }, 300)
                            } catch (t) {
                            }
                    }
                ;
                const At = St;

                function Tt() {
                    this.init()
                }

                Tt.prototype.init = function () {
                    var t = this;
                    t.mtlShowPos = -1,
                        t.mtlHasShow = -1,
                        t.paraHasShow = -1,
                        t.paraClosed = -1,
                        t.mtlClosed = -1,
                        t.isChapterLocked = !1,
                        t.$win = x()(window),
                        t.getFirstChapter(),
                        t.getFirstChapterParas(),
                    t.isChapterLocked || (t.initParaTips(),
                        t.initMtlTip())
                }
                    ,
                    Tt.prototype.getFirstChapter = function () {
                        this.firstChapter = x()(".j_chapter_" + g_data.firstChap.id + " .cha-content"),
                            this.isChapterLocked = this.firstChapter.hasClass("_lock")
                    }
                    ,
                    Tt.prototype.getFirstChapterParas = function () {
                        this.firstChapterParas = x()(".j_chapter_" + g_data.firstChap.id + " .j_paragraph"),
                            this.mtlPara = this.firstChapterParas.eq(0)
                    }
                    ,
                    Tt.prototype.refresh = function (t) {
                        var e = this;
                        e.curChapterId = t,
                        -1 === e.paraClosed && (e.getFirstChapter(),
                            0 === e.firstChapter.length ? (e.paraClosed = 1,
                                x()(".j_para_comment_tip").remove()) : this.refrshPosition()),
                        -1 === e.mtlClosed && (e.getFirstChapter(),
                            0 === e.firstChapter.length ? (e.mtlClosed = 1,
                                x()(".j_edition_tip").remove()) : this.refrshMtlPosition())
                    }
                    ,
                    Tt.prototype.initParaTips = function () {
                        var t = this;
                        if (1 != +g().get("para-comment-tip-show")) {
                            if (x()(".j_para_comment_tip").remove(),
                            t.firstChapter.length > 0) {
                                var e = D().render('<div class="pt12 pb12 pl16 pr16 chapter-pop-tip j_para_comment_tip" style="top:<%=top%>px"> <p class="fs16 lh20 mb12 chapter-pop-tip-tit"> <img cross-origin="anonymous" class="vat" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAMAAAChHKjRAAAAtFBMVEUAAAD/iyj+jCDuZQ/pXRD/jCn/jSn1chjzdBr5gSL+iibzcRfvZhHkTwPtZRHkTgL/jSn3eh3+iyfkTQL4eh7qXAvoVwn9iSb4ex7rXAjrXQvxbhXwaxPmUQTpWgrvZxH5giH2dhzpVwf6giLnVQb2dhvvZxLpWwvrYAznUAD/jSnybhbwahPvZhH2dhrtYg7rXgz5fyD0chjpWgn7giL3eh3mUQT9hiXoVgf4eh3zchjoVQZkTQGiAAAAKnRSTlMAgBCfEM+gn0Ag79/fgEDv39+/v4CAcG9vIP7v7+7fz6+vr5+fj49fQCCE3zSzAAAA/UlEQVQ4y+WP13LCMBBFr0rsGBtTQk3vxRASSDDt//8LyyDJGmQNMwwPDOdFo92jvSscD5Ik5IQkQmwS8RzPddUzrsoyixfUYgVv4WD4wPoFx7TqFK3paDkYfv/8tgFPO9qqB3gZL0aTXPp7zSzlaCjI/3gqpVVHVHYJZkJabqT5HYeNbiapuHlahY2mKV2ZK+cAlWLcKq2pjiDJyc5cmkgpVR0tqUkyriY7RlxTSMZOKk5D9vkdrRiTvmClW5xURQmPWnpGGbQhf3ffRym97U7XHyiHXmbEcfzJ4aDn+z5jrAMXrU1cGwcTNMIwiiIOJ08ijsEN929u3znOiTVJozXlBncD0gAAAABJRU5ErkJggg==" width="18" height="20" alt="tip"> Paragraph comment </p> <p class="fs16 lh20 mb4 chapter-pop-tip-des"> Paragraph comment feature is now on the Web! Move mouse over any paragraph and click the icon to add your comment. </p> <p class="fs16 lh20 mb12 chapter-pop-tip-des"> Also, you can always turn it off/on in Settings. </p> <a class="bt _s j_para_comment_close" title="GOT IT">GOT IT</a> </div> ', {
                                    staticConf: {
                                        staticPath: g_data.staticPath,
                                        domainPrefix: g_data.env
                                    },
                                    top: t.firstChapter.offset().top
                                });
                                x()("body").append(e),
                                    x()(".j_para_comment_close").bind("click", (function (e) {
                                            t.closeParaTips(e)
                                        }
                                    ))
                            }
                        } else
                            t.closeParaTips = 1
                    }
                    ,
                    Tt.prototype.refrshPosition = function () {
                        x()(".j_para_comment_tip").css({
                            top: this.firstChapter.offset().top
                        })
                    }
                    ,
                    Tt.prototype.closeParaTips = function (t) {
                        t.preventDefault(),
                            g().set("para-comment-tip-show", 1, ".webnovel.com", "/", 31536e6),
                            this.paraClosed = 1,
                            x()(".j_para_comment_tip").remove()
                    }
                    ,
                    Tt.prototype.initMtlTip = function () {
                        var t = this;
                        if (0 != +g_data.isTranslateMode) {
                            if (1 != +g().get("mtl-edition-tip-show") && t.firstChapter.length > 0) {
                                var e = 1
                                    , a = ""
                                    , o = 0;
                                if (1 === g_data.isWhiteUser)
                                    e = 1;
                                else if (1 === t.firstChapterParas.length)
                                    e = 0;
                                else
                                    for (var n = 1; n < t.firstChapterParas.length; n++)
                                        if (t.firstChapterParas.eq(n).has(".j_edition_count").length > 0) {
                                            e = n;
                                            break
                                        }
                                if (e >= 1 && t.firstChapterParas.length > e) {
                                    this.mtlPara = t.firstChapterParas.eq(e);
                                    var r = this.mtlPara;
                                    o = r.offset().top,
                                        o = this.checkMtlPosition(o);
                                    var i = r.data("ejs") || {};
                                    a = D().render('<div class="pt12 pb12 pl16 pr16 chapter-pop-tip j_edition_tip" style="top:<%=top%>px" data-paragraphid="<%=paragraphId%>"> <p class="fs16 lh20 mb12 chapter-pop-tip-tit"> <img cross-origin="anonymous" class="vat" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAMAAAChHKjRAAAAtFBMVEUAAAD/iyj+jCDuZQ/pXRD/jCn/jSn1chjzdBr5gSL+iibzcRfvZhHkTwPtZRHkTgL/jSn3eh3+iyfkTQL4eh7qXAvoVwn9iSb4ex7rXAjrXQvxbhXwaxPmUQTpWgrvZxH5giH2dhzpVwf6giLnVQb2dhvvZxLpWwvrYAznUAD/jSnybhbwahPvZhH2dhrtYg7rXgz5fyD0chjpWgn7giL3eh3mUQT9hiXoVgf4eh3zchjoVQZkTQGiAAAAKnRSTlMAgBCfEM+gn0Ag79/fgEDv39+/v4CAcG9vIP7v7+7fz6+vr5+fj49fQCCE3zSzAAAA/UlEQVQ4y+WP13LCMBBFr0rsGBtTQk3vxRASSDDt//8LyyDJGmQNMwwPDOdFo92jvSscD5Ik5IQkQmwS8RzPddUzrsoyixfUYgVv4WD4wPoFx7TqFK3paDkYfv/8tgFPO9qqB3gZL0aTXPp7zSzlaCjI/3gqpVVHVHYJZkJabqT5HYeNbiapuHlahY2mKV2ZK+cAlWLcKq2pjiDJyc5cmkgpVR0tqUkyriY7RlxTSMZOKk5D9vkdrRiTvmClW5xURQmPWnpGGbQhf3ffRym97U7XHyiHXmbEcfzJ4aDn+z5jrAMXrU1cGwcTNMIwiiIOJ08ijsEN929u3znOiTVJozXlBncD0gAAAABJRU5ErkJggg==" width="18" height="20" alt="tip"> TIP </p> <p class="fs16 lh20 mb12 chapter-pop-tip-des"> <% if(+isWhiteUser===1){ %> This work is machine translated. <br/>Click on the paragraph and you can modify the lacking parts. <br/>Your version will be seen by other users, and might become the official version. <br/>Give it a try! <% }else{ %> This paragraph has been edited! <br/>Click the small bubble to check the other versions of the paragraph, and give the one you like best a Like! <% } %> </p> <a class="bt _s j_edition_tip_close" title="GOT IT">GOT IT</a> </div> ', {
                                        statusCode: g_data.login.statusCode,
                                        staticConf: {
                                            staticPath: g_data.staticPath,
                                            domainPrefix: g_data.env
                                        },
                                        env: g_data.env,
                                        isWhiteUser: g_data.isWhiteUser,
                                        top: o,
                                        paragraphId: i.paragraphId
                                    }),
                                        x()("body").append(a),
                                        x()(".j_edition_tip_close").bind("click", (function (e) {
                                                t.closeMtlTip(e)
                                            }
                                        ))
                                } else
                                    t.mtlClosed = 1
                            }
                        } else
                            t.mtlClosed = 1
                    }
                    ,
                    Tt.prototype.closeMtlTip = function (t) {
                        t.preventDefault(),
                            g().set("mtl-edition-tip-show", 1, ".webnovel.com", "/", 31536e6),
                            this.mtlClosed = 1,
                            x()(".j_edition_tip").remove()
                    }
                    ,
                    Tt.prototype.checkMtlPosition = function (t) {
                        if (x()(".j_para_comment_tip").length > 0) {
                            var e = x()(".j_para_comment_tip").offset().top + 250;
                            t = t > e ? t : e
                        }
                        return t
                    }
                    ,
                    Tt.prototype.refrshMtlPosition = function () {
                        try {
                            var t = this.mtlPara.offset().top;
                            t = this.checkMtlPosition(t),
                                x()(".j_edition_tip").css("top", t)
                        } catch (t) {
                        }
                    }
                ;
                const xt = Tt;
                var Ot = a(7657)
                    , jt = a(5142)
                    , Dt = a.n(jt)
                    , Lt = a(1558)
                    , Mt = a.n(Lt)
                    , Et = {
                    bookId: -1,
                    batchModalSelector: ".j_unlock_batch_modal",
                    batchFormSelector: ".j_unlock_batch_gear_wrap",
                    batchRadio: ".j_unlock_batch_gear_wrap input[name=unlock_batch_gear]",
                    batchCostSelector: ".j_batch_cost",
                    batchSuccessCallback: function () {
                    }
                }
                    , Bt = -1;

                function Nt(t) {
                    var e = t.pid
                        , a = t.pdid
                        , o = t.blocktitle;
                    return t.balance < t.price && 1 !== Bt ? (Bt = 1,
                        void A.Z.send({}, {
                            l1: 1,
                            ltype: "C",
                            pid: e,
                            pdid: a,
                            blocktitle: o,
                            eid: "qi_C_batchsubscribe_buycoins",
                            uiname: "buycoins"
                        })) : t.balance >= t.price && 2 !== Bt ? (Bt = 2,
                        void A.Z.send({}, {
                            l1: 1,
                            ltype: "C",
                            pid: e,
                            pdid: a,
                            blocktitle: o,
                            eid: "qi_C_batchsubscribe_unlock",
                            uiname: "unlock"
                        })) : void 0
                }

                function Rt(t) {
                    var e = this;
                    x().extend(this, Et, t, !0),
                        e.$modalAPI = null,
                        e.getGearAjax = null,
                        e.$batchForm = x()(e.batchFormSelector),
                        e.$modalDom = x()(e.batchModalSelector),
                        e.submitBatchAjax = null,
                        e.init()
                }

                Rt.prototype.init = function () {
                    var t = this;
                    x()(document).on("click", ".j_batch_unlock_chapters", (function (e) {
                            var a = x()(e.currentTarget).data("unlock-params");
                            a && (t.getBatchGear(a),
                                t.$batchForm.attr({
                                    "data-report-blocktitle": a.chapterId
                                }),
                                t.$modalAPI ? t.$modalAPI.load() : t.initModal((function () {
                                        t.$modalAPI.load()
                                    }
                                )))
                        }
                    )).on("click", ".j_batch_unlock_submit", (function (e) {
                            var a = M.Z.getFormParams(t.$batchForm.serializeArray())
                                , o = x()(e.currentTarget);
                            o.addClass("_loading"),
                                t.submitBatchChapters({
                                    info: a,
                                    callback: function () {
                                        o.removeClass("_loading")
                                    }
                                })
                        }
                    ))
                }
                    ,
                    Rt.prototype.submitBatchChapters = function (t) {
                        var e = t.info
                            , a = t.callback || function () {
                        }
                            , o = e.bookId
                            , n = +e.bookType
                            , r = e.chapterId
                            , i = e.bookName
                            , s = e.chapterName
                            , c = 100 === n ? "cbatchsubscribetoast" : "batchsubscribetoast";
                        try {
                            var l = JSON.parse(e ? e.unlock_batch_gear : "{}")
                        } catch (t) {
                        }

                        function d(t, e) {
                            2 === t && (new E.Z).error(e || "Coins deduction failed, try again later."),
                            1 === t && (new E.Z).success("Batch unlock chapters successfully."),
                                A.Z.send({}, {
                                    l1: 1,
                                    ltype: "C",
                                    pid: c,
                                    pdid: o,
                                    blocktitle: r,
                                    eid: "qi_C_batchsubscribetoast",
                                    dt: t
                                })
                        }

                        this.submitBatchAjax = x().ajax({
                            method: "POST",
                            url: "/go/pcm/book/unlockBatchChapters",
                            data: {
                                bookId: o,
                                novelType: n,
                                chapterId: r,
                                chapterCount: l.chapterCount,
                                price: l.price,
                                statParam: ""
                            },
                            success: function (t) {
                                if (0 === t.code) {
                                    var e, c = t.data && t.data.unlockResult || {};
                                    if (0 != c.refreshPage)
                                        return d(2, "The chapter info has changed. Please refresh the page"),
                                            a(),
                                            !1;
                                    if (0 != c.noBalance)
                                        return d(2, "Sorry, you are out of balance."),
                                            a(),
                                            !1;
                                    if (0 == c.unlocked)
                                        return d(2),
                                            a(),
                                            !1;
                                    if (d(1),
                                        e = 100 === n ? Dt()(null, o, r, i, s) : Mt()(null, o, r, i, s))
                                        return void setTimeout((function () {
                                                window.location.href = e
                                            }
                                        ), 1e3)
                                }
                                d(2),
                                    a()
                            },
                            error: function () {
                                a(),
                                    d(2, "network error")
                            }
                        })
                    }
                    ,
                    Rt.prototype.getBatchGear = function (t) {
                        var e = this
                            , a = t.bookId
                            , o = +t.bookType
                            , n = t.chapterId
                            , r = t.chapterName
                            , i = t.bookName
                            , s = 100 === o ? "cbatchsubscribe" : "batchsubscribe";
                        a && o >= 0 && n && (e.getGearAjax = x().ajax({
                            method: "GET",
                            url: "/go/pcm/book/getBatchSubscribeGrade",
                            data: {
                                bookId: a,
                                novelType: o,
                                chapterId: n
                            },
                            success: function (t) {
                                if (0 === t.code) {
                                    var c = t.data.balance
                                        , l = t.data.batchSubscribeGradeList[0] || {};
                                    e.$batchForm.html(D().render("#tplUnlockBatchGear", x().extend(!0, {}, t, {
                                        staticConf: {
                                            staticPath: g_data.staticPath
                                        },
                                        data: {
                                            bookId: a,
                                            bookType: o,
                                            chapterId: n,
                                            chapterName: r,
                                            bookName: i
                                        },
                                        firstBatch: l
                                    }))),
                                        e.$batchCost = x()(e.batchCostSelector),
                                        x()(e.batchRadio).bind("change", (function (t) {
                                                try {
                                                    var o = JSON.parse(x()(t.target).val());
                                                    e.$batchCost.html(D().render("#tplBatchCost", x().extend(!0, {}, o, {
                                                        balance: c
                                                    }))),
                                                        Nt({
                                                            balance: c,
                                                            price: o.optimalPrice || o.originalPrice,
                                                            pid: s,
                                                            pdid: a,
                                                            blocktitle: n
                                                        })
                                                } catch (t) {
                                                    console.log(t)
                                                }
                                            }
                                        )),
                                        Nt({
                                            balance: c,
                                            price: l.optimalPrice || l.originalPrice,
                                            pid: s,
                                            pdid: a,
                                            blocktitle: n
                                        })
                                }
                            }
                        }))
                    }
                    ,
                    Rt.prototype.initModal = function (t) {
                        var e = this;
                        e.$modalAPI || (e.$modalAPI = e.$modalDom.overlay({
                            onLoad: function () {
                                A.Z.send({
                                    target: e.$modalDom[0]
                                }, {
                                    eid: "qi_P_batchsubscribe",
                                    ltype: "P"
                                })
                            },
                            onClose: function () {
                                e.getGearAjax && e.getGearAjax.abort && e.getGearAjax.abort(),
                                    e.$batchForm.html('<div class="g_loading _on"><i></i></div>')
                            }
                        }).data("overlay"),
                        "function" == typeof t && t())
                    }
                ;
                const Ut = Rt;
                var Ht = {
                    isResponseValidate: function (t) {
                        return t && 0 === t.code
                    }
                }
                    , $t = {
                    timeout: 2e4,
                    method: "GET"
                };

                function Vt(t, e, a) {
                    e && e.url && (x().extend(!0, this, Ht, a || {}),
                        this.init(x().extend(!0, {}, $t, e)))
                }

                function Zt(t, e) {
                    return new Vt("GET", t, e)
                }

                Vt.prototype.init = function (t) {
                    var e = this.removeSuccessError(t)
                        , a = this.getParams(e);
                    x().ajax(a)
                }
                    ,
                    Vt.prototype.removeSuccessError = function (t) {
                        var e = {}
                            , a = null
                            , o = null;
                        return x().each(t, (function (t, n) {
                                "success" === t ? a = n : "error" === t ? o = n : e[t] = n
                            }
                        )),
                            {
                                params: e,
                                success: a,
                                error: o
                            }
                    }
                    ,
                    Vt.prototype.getParams = function (t) {
                        var e = this
                            , a = t.params || {}
                            , o = t.success || function () {
                            }
                            , n = t.error || function () {
                            }
                        ;
                        return a.success = function (t) {
                            e.isResponseValidate(t) ? o(t.data, t) : n(t.msg, t)
                        }
                            ,
                        "function" == typeof t.error && (a.error = function (t) {
                                n(t.msg || "Something went wrong!", t)
                            }
                        ),
                            a
                    }
                    ,
                    Zt.get = function (t, e) {
                        return new Vt("GET", t, e)
                    }
                    ,
                    Zt.post = function (t, e) {
                        return new Vt("POST", t, e)
                    }
                ;
                const qt = Zt
                    , Ft = function (t) {
                    if (!t || !t.length)
                        return null;
                    var e = "mousewheel";
                    void 0 !== document.mozHidden && (e = "DOMMouseScroll"),
                        t.on(e, (function (t) {
                                var e = this.scrollTop
                                    , a = this.scrollHeight
                                    , o = this.clientHeight
                                    ,
                                    n = t.originalEvent.wheelDelta ? t.originalEvent.wheelDelta : -(t.originalEvent.detail || 0);
                                (n > 0 && e <= n || n < 0 && a - o - e <= -1 * n) && (this.scrollTop = n > 0 ? 0 : a,
                                    t.preventDefault())
                            }
                        ))
                };
                var Wt = "&&",
                    Gt = {
                        default: "Merriweather",
                        _font2: "Merriweather",
                        _font1: "Nunito-Sans",
                        Merriweather: "_font2",
                        "Nunito-Sans": "_font1"
                    },
                    zt = null,
                    Qt = function () {
                        if ("undefined" != typeof window) {
                            if (undefined === window.Fock) {
                                if (!zt) {
                                    zt = new Promise((resolve, reject) => {
                                            let a = document.createElement("script");
                                            a.src = g_data.fockPath
                                            a.async = true
                                            a.onload = function () {
                                                let e = window.Fock;
                                                e.initialize()
                                                e.setupUserKey(g().get("uid") || "antipirate")
                                                resolve(e)
                                            }
                                            document.querySelector("body").appendChild(a)
                                        }
                                    )
                                }
                            }
                            return zt
                        }
                    },
                    Kt = _()({
                        storeAsString: !0
                    }),
                    Xt = function (resp) {
                        const bookId = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (!resp) {
                            return {};
                        }

                        let {content, encryptKeyPool, encryptVersion, encryptType, actualEncryptType} = resp

                        return 1 === (encryptType || actualEncryptType)
                            ? new Promise((resolve, reject) => {
                                    Qt().then(Fock => {
                                            debugger
                                            Fock.addKeypool(encryptKeyPool, encryptVersion.toString())
                                            if (content) {
                                                Fock.unlock(content, bookId, (success, data) => {
                                                        debugger
                                                        if (0 === success) {
                                                            var o = Kt.parse(data);
                                                            resolve(o)
                                                        } else {
                                                            resolve({})
                                                        }
                                                    }
                                                )
                                            } else {
                                                resolve({})
                                            }
                                        }
                                    )
                                }
                            )
                            : {}
                    };
                const Jt = Qt
                    , Yt = Qt;

                function te(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e && (o = o.filter((function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }
                        ))),
                            a.push.apply(a, o)
                    }
                    return a
                }

                function ee(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? te(Object(a), !0).forEach((function (e) {
                                d()(t, e, a[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : te(Object(a)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            }
                        ))
                    }
                    return t
                }

                function ae(t) {
                    t = t || {},
                        this.pagination = {
                            pageSizeMin: 100,
                            pageNumMax: 10,
                            pageSize: 100,
                            currentPage: 0,
                            pageNum: 1,
                            ignore: 0
                        },
                        this.isPreload = t.isPreload || !1,
                        this.selTrigger = ".j_catalog",
                        this.selScroller = ".j_catalog_modal_body",
                        this.$scroller = null,
                        this.currentChapterId = null,
                        this.getChapterId = t.getChapterId || function () {
                        }
                        ,
                        this.onChapterChange = t.onChapterChange || function () {
                        }
                        ,
                        this.isPaginationFirst = !0,
                        this.init()
                }

                ae.prototype.init = function () {
                    var t = this
                        , e = x()("body");
                    t.isPreload && setTimeout((function () {
                            t.loadData()
                        }
                    ), 200),
                        x().each(["mouseenter", "focus"], (function (a, o) {
                                e.on(o, t.selTrigger, (function () {
                                        t.loadData()
                                    }
                                ))
                            }
                        )),
                        new Ft(t.get$scroller()),
                        e.on("click", t.selTrigger, (function (e) {
                                e.preventDefault(),
                                t.getIsModalShow() && (A.Z.send({}, {
                                    l1: 1,
                                    eid: "qi_C_reader_content",
                                    ltype: "C",
                                    uiname: "content",
                                    pdid: g_data.bookId,
                                    blocktitle: g_data.currChapId
                                }),
                                    t.loaded ? t.showCatalogContent() : t.get$scroller().html(' <span class="g_loading db _auto _on"><i></i></span> '))
                            }
                        )),
                        e.on("click", ".j_pagination a", (function (e) {
                                e.preventDefault();
                                var a = x()(this);
                                if (!a.hasClass("_on")) {
                                    var o = x()(this).data("index");
                                    a.addClass("_on").siblings("._on").removeClass("_on"),
                                        t.pagination.currentPage = o,
                                        t.render()
                                }
                            }
                        )),
                        e.on("click", t.selScroller + " a", (function (e) {
                                e.preventDefault();
                                var a = x()(this);
                                if (!a.hasClass("_on")) {
                                    a.addClass("_on").siblings("._on").removeClass("_on");
                                    var o = a.data("index")
                                        , n = t.data.chapters[o];
                                    t.currentChapterId = n.chapterId,
                                        t.onChapterChange({
                                            chapterId: n.chapterId,
                                            chapterName: n.chapterName
                                        }),
                                        A.Z.send({}, {
                                            l1: 1,
                                            eid: "qi_A_reader_content",
                                            uiname: "content",
                                            pdid: g_data.bookId,
                                            blocktitle: g_data.currChapId,
                                            did: t.currentChapterId
                                        })
                                }
                            }
                        ))
                }
                    ,
                    ae.prototype.getIsModalShow = function () {
                        return x()("#modalCatalog").hasClass("_on")
                    }
                    ,
                    ae.prototype.updateData = function (t) {
                        if (this.data && this.data.chapter && this.data.chapter.length) {
                            var e = t(this.data);
                            e && (this.data = e)
                        }
                    }
                    ,
                    ae.prototype.showCatalogContent = function () {
                        var t = this
                            , e = t.getChapterId();
                        if (e !== t.currentChapterId) {
                            this.currentChapterId = e;
                            var a = t.getNewPage(e);
                            (t.isPaginationFirst || a !== t.pagination.currentPage) && (t.pagination.currentPage = a,
                                t.renderPagination()),
                                t.render(),
                                t.scrollIntoView()
                        } else
                            t.scrollIntoView()
                    }
                    ,
                    ae.prototype.changeCurrentId = function (t) {
                        var e = this;
                        if (e.loaded && e.getIsModalShow())
                            if (t !== e.currentChapterId) {
                                e.currentChapterId = t;
                                var a = e.getNewPage(t);
                                if (a !== e.pagination.currentPage)
                                    return e.pagination.currentPage = a,
                                        e.renderPagination(),
                                        e.render(),
                                        void e.scrollIntoView();
                                e.get$scroller().find('a[data-cid="' + t + '"]').addClass("_on").siblings("._on").removeClass("_on"),
                                    e.scrollIntoView()
                            } else
                                e.scrollIntoView()
                    }
                    ,
                    ae.prototype.scrollIntoView = function () {
                        var t = this.get$scroller()
                            , e = t.find("a._on");
                        if (e.length) {
                            var a = parseInt(e[0].offsetTop - parseInt(t.height() / 2));
                            t.animate({
                                scrollTop: a
                            }, 300)
                        }
                    }
                    ,
                    ae.prototype.get$scroller = function () {
                        return this.$scroller || x()(this.selScroller)
                    }
                    ,
                    ae.prototype.render = function () {
                        var t = this
                            , e = t.data.chapters
                            , a = t.pagination
                            , o = a.currentPage * a.pageSize
                            , n = (a.currentPage + 1) * a.pageSize;
                        n > e.length && (n = e.length);
                        var r = {
                                currentChapterId: t.currentChapterId,
                                bookInfo: t.data.bookInfo,
                                chapterStartIndex: o,
                                isLastPage: a.currentPage === a.pageNum - 1,
                                chapters: e.slice(o, n)
                            }
                            ,
                            i = D().render('<%\nvar bookInfo = data.bookInfo;\nvar chapters = data.chapters;\n%> <% if(chapters.length){ %> <% for(var i = 0; i < chapters.length; i++) { %> <% var chapter = chapters[i]; %> <% if(i === 0 || chapters[i].volumeInfo.chapterIndex !== chapters[i - 1].volumeInfo.chapterIndex){ %> <h4 class="fw400 fs16 lh24 c_s mt16"><%= chapter.volumeInfo.title %></h4> <% } %> <%\n            var icon = \'\';\n            if (chapter.source == \'GT\') {\n                icon = \'gt\'\n            } else if (chapter.isVip == 1) {\n                icon = \'bonus\'\n            } else if (chapter.isVip == 2 && !chapter.isAuth) {\n                icon = \'lock\'\n            }\n        %> <a href="###" title="<%= chapter.chapterName %>" class="db pr g_hr clearfix fs16 lh24 pt12 pb12 <%= data.currentChapterId === chapter.chapterId ? \'_on\' : \'\' %>" data-cid="<%= chapter.chapterId %>" data-index="<%= i + data.chapterStartIndex %>" data-report-cid="<%= chapter.chapterId %>"> <% if(icon){ %> <svg class="fr ml12 c_xs w16 h16 mt4 j_tag"> <use xlink:href="#i-<%= icon %>"></use> </svg> <% } %> <% if(chapter.chapterIndex > 0){ %> <i class="_num fl mr16"><%= chapter.chapterIndex %></i> <% } %> <strong class="db oh ell"><%= chapter.chapterName %></strong> </a> <% } %> <% if(bookInfo.hasPrivilege && data.isLastPage){ %> <div class="privileged-bar-wrap privileged-bar-wrap-card"> <div class="privileged-bar pl16 pr16 pb16 pt16 tac"> <p class="c_warning fs16 fw600 lh24 mb8">More Privileged Chapters</p> <p class="c_s lh20 fs14">Download the app and become a a privileged reader today! Come take a sneak peek at our author\'s stockpiled chapters!</p> <span class="bt bt_cap _m _warning j_getApp" title="Download App" href="#getAppMod" data-report-l1="1" data-report-eid="qi_A_downloadapp">Download App</span> </div> </div> <% } %> <% } %> ', {
                                data: r
                            });
                        t.get$scroller().html(i)
                    }
                    ,
                    ae.prototype.renderPagination = function () {
                        var t = D().render('<% var pagination = data.pagination; %> <% if(pagination.pageNum>1){ %> <div class="m-catalog-pagination j_pagination pa b0 w100% bsbb tac pt24 pl24 pr24"> <div class="m-pagination fs0 br8 wsn pl16 pr16"> <% for(var i=0; i< pagination.pageNum; i++){ %> <%\n        var start = i * pagination.pageSize - pagination.ignore;\n        var end = (i+1) * pagination.pageSize - pagination.ignore;\n        if(start<0){\n          start=0;\n        }\n        if(end > pagination.total){\n          end= pagination.total - pagination.ignore;\n        }\n        var text = start + 1 + \'-\' + end;\n        var className = (i === pagination.currentPage) ? \'_on\':\'\';\n      %> <a data-index="<%= i %>" href="###" class="<%= className %> dib fs16 pt16 pb16 vat tdn lh1 ml8 mr8 td200 pr c_m" title="<%= text %>"> <%= text %> </a> <% } %> </div> </div> <% } %> ', {
                            data: {
                                pagination: this.pagination
                            }
                        })
                            , e = x().trim(t);
                        if (e) {
                            var a = x()(".j_catalog_modal")
                                , o = a.find(".j_pagination");
                            o.length && o.remove(),
                                o = x()(e),
                                a.prepend(o);
                            var n = o.find(".m-pagination")
                                , r = n.find("._on")
                                , i = parseInt(n.width() / 2)
                                , s = parseInt(r[0].offsetLeft - i);
                            s > 0 && n.scrollLeft(s),
                                this.isPaginationFirst = !1
                        }
                    }
                    ,
                    ae.prototype.getChapters = function (t) {
                        for (var e = [], a = 0, o = 0; o < t.length; o++)
                            for (var n = t[o], r = n.chapterItems || [], i = 0; i < r.length; i++) {
                                var s = r[i];
                                (0 === s.chapterLevel || s.canUnlock) && (s.volumeInfo = {
                                    index: n.volumeId,
                                    title: "Volume " + (n.volumeId >= 0 ? n.volumeId : "") + (n.volumeName ? ":" + n.volumeName : "")
                                },
                                s.index < 1 && a++,
                                    e.push(s))
                            }
                        return {
                            chapters: e,
                            ignoreChapters: a
                        }
                    }
                    ,
                    ae.prototype.getNewPage = function (t) {
                        for (var e = this.data.chapters, a = 0, o = 0; o < e.length; o++)
                            if (e[o].id === t) {
                                a = o;
                                break
                            }
                        return parseInt(a / this.pagination.pageSize)
                    }
                    ,
                    ae.prototype.loadData = function () {
                        var t, e = this;
                        if (!(e.loading || e.loaded)) {
                            e.loading = true
                            qt.get({
                                url: "/go/pcm/chapter/get-chapter-list",
                                cache: false,
                                data: {
                                    bookId: g_data.bookId,
                                    pageIndex: 0,
                                    encryptType: 1
                                },
                                success: (t = p()(i().mark((function t(resp) {
                                        let o, n, r, s, c, l, d;
                                        return i().wrap((function (t) {
                                                for (; ;) {
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            t.next = 2
                                                            return Xt(resp, g_data.bookId);
                                                        case 2:
                                                            o = t.sent
                                                            n = ee(ee({}, resp), o)
                                                            r = e.getChapters(n.volumeItems || [])
                                                            s = r.chapters
                                                            e.data = {
                                                                bookInfo: n.bookInfo,
                                                                chapters: s
                                                            }
                                                            c = e.pagination
                                                            if ((l = Math.ceil(s.length / c.pageNumMax)) < c.pageSizeMin) {
                                                                l = c.pageSizeMin
                                                            }
                                                            e.pagination.pageSize = l
                                                            e.pagination.total = s.length
                                                            e.pagination.pageNum = Math.ceil(s.length / l)
                                                            e.pagination.ignore = r.ignoreChapters
                                                            if (e.getIsModalShow()) {
                                                                d = e.getChapterId()
                                                                e.currentChapterId = d
                                                                e.pagination.currentPage = e.getNewPage(d)
                                                                e.renderPagination()
                                                                e.render()
                                                                e.scrollIntoView()
                                                            }
                                                            if (n.bookInfo.hasPrivilege) {
                                                                x()(".j_privilege_bar_wrap").data("show", 1)
                                                                if (1 === x()(".j_privilege_bar_wrap").data("end")) {
                                                                    x()(".j_privilege_bar_wrap").removeClass("dn")
                                                                }
                                                            }
                                                        case 16:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }
                                            }
                                        ), t)
                                    }))),
                                        function (e) {
                                            return t.apply(this, arguments)
                                        }
                                ),
                                complete: function () {
                                    e.loading = false
                                    e.loaded = true
                                }
                            })
                        }
                    }
                ;
                const oe = ae;
                var ne = a(7677)
                    , re = a(9507)
                    , ie = a(4575)
                    , se = a.n(ie)
                    , ce = a(3913)
                    , le = a.n(ce)
                    , de = "scroll"
                    , he = !1;
                const pe = function () {
                    function t(e, a, o) {
                        se()(this, t),
                            this.isMousewheel = !1,
                            this.isKeydown = !1,
                            this.isScrollBar = !1,
                            this.onTrustChange = e,
                            this.onSafe = a,
                            this.onUnsafe = o,
                            this.funScroll = this._funScroll.bind(this),
                            this.init()
                    }

                    return le()(t, [{
                        key: "_funScroll",
                        value: function (t) {
                            this.isMousewheel || this.isKeydown || this.isScrollBar ? this.onTrustChange(!0) : (this.onTrustChange(!1),
                                t.preventDefault()),
                            t.isTrusted && !1 !== this.isSafeDevice.i && this.onSafe(),
                            !1 === this.isSafeDevice.i && this.handleUnSafe()
                        }
                    }, {
                        key: "handleUnSafe",
                        value: function () {
                            he || (console.log("safe is not defined"),
                                this.onUnsafe(),
                            "undefined" != typeof Raven && Raven && Raven.captureException(new Error("safe is not defined")),
                                he = !0)
                        }
                    }, {
                        key: "isSafeDevice",
                        value: function () {
                            var t = window
                                , e = t.innerHeight
                                , a = t.outerHeight
                                , o = t.innerWidth
                                , n = t.outerWidth
                                , r = n / a;
                            if (a > 1024 || n > 1024) {
                                var i = 200
                                    , s = 150;
                                r < 1 && (i = 150,
                                    s = 200),
                                (r * e - o > i || o / r - e > s) && console.log("warning: user open develop tool")
                            }
                            var c = .75 * e < screen.height;
                            return c || console.log("innerHeight:".concat(e, ", screenHeight: ").concat(screen.height, "}")),
                            e > 5200 && (console.log("screen is too height: ".concat(e)),
                                c = !1),
                            !1 === c && !1 !== this.isSafeDevice.i && (console.log("不安全"),
                                this.handleUnSafe(),
                                Object.defineProperty(this.isSafeDevice, "i", {
                                    value: !1,
                                    writable: !1
                                })),
                                !1 === this.isSafeDevice.i ? (console.log("异常"),
                                    window.removeEventListener(de, this.funScroll),
                                    !1) : c
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.detectScroll(),
                                this.detectMouseWheel(),
                                this.detectKeyboard(),
                                addEventListener("resize", (function (e) {
                                        return t.isSafeDevice(e)
                                    }
                                )),
                            !matchMedia("(pointer:none)").matches && this.isSafeDevice() && (window.addEventListener(de, this.funScroll),
                            document.currentScript && document.currentScript.remove())
                        }
                    }, {
                        key: "detectScroll",
                        value: function () {
                            var t = this
                                , e = 0
                                , a = []
                                , o = function () {
                                a.length > 5 && a.shift(),
                                5 === a.length && Math.max.apply(null, a) - Math.min.apply(null, a) < 50 && (console.log("大概率机器", a.join()),
                                    t.isSafeDevice.i = !1)
                            };
                            if ("ontouchstart" in document == 0)
                                document.addEventListener("mousedown", (function (n) {
                                        var r = Math.round(n.timeStamp - e);
                                        console.log("间隔时间：" + r),
                                        n.isTrusted && innerWidth - n.clientX < 20 && r > 200 && (t.isScrollBar = !0),
                                        r > 200 && a.push(r),
                                            o(),
                                            e = n.timeStamp
                                    }
                                )),
                                    document.addEventListener("mouseup", (function (e) {
                                            t.isScrollBar = !1
                                        }
                                    ));
                            else {
                                var n = !1
                                    , r = 0
                                    , i = 0;
                                document.addEventListener("touchstart", (function (t) {
                                        if (t.isTrusted && t.touches && t.touches.length) {
                                            var s = t.touches[0].clientX
                                                , c = t.touches[0].clientY;
                                            r !== s && c !== i && (n = !0),
                                                r = s,
                                                i = c
                                        }
                                        var l = Math.round(t.timeStamp - e);
                                        console.log("间隔时间：" + l),
                                            a.push(l),
                                            o(),
                                            e = t.timeStamp
                                    }
                                )),
                                    document.addEventListener("touchmove", (function () {
                                            n && (t.isScrollBar = !0)
                                        }
                                    )),
                                    document.addEventListener("touchend", (function () {
                                            n = !1
                                        }
                                    ))
                            }
                            var s = null;
                            document.addEventListener("scroll", (function () {
                                    clearTimeout(s),
                                        s = setTimeout((function () {
                                                console.log("scrollend"),
                                                    this.isScrollBar = !1
                                            }
                                        ), 100)
                                }
                            ))
                        }
                    }, {
                        key: "detectMouseWheel",
                        value: function () {
                            var t = this
                                , e = void 0 !== document.mozFullScreen ? "DOMMouseScroll" : "mousewheel"
                                , a = Date.now()
                                , o = pageYOffset
                                , n = [];
                            window.addEventListener(e, (function (e) {
                                    var r = Date.now();
                                    if (r - a < 20)
                                        return console.log("unsupport wheel"),
                                            t.isMousewheel = !1,
                                            void e.preventDefault();
                                    if (pageYOffset - o != 0 && n.push({
                                        t: r - a,
                                        d: pageYOffset - o
                                    }),
                                    n.length > 5 && n.shift(),
                                    5 === n.length) {
                                        var i = n.map((function (t) {
                                                return t.t
                                            }
                                        ))
                                            , s = n.map((function (t) {
                                                return t.d
                                            }
                                        ));
                                        Math.max.apply(null, i) - Math.min.apply(null, i) < 35 && Math.max.apply(null, s) - Math.min.apply(null, s) < 10 && Math.max.apply(null, s) > 60 && (console.log("机器:" + i.join() + "|" + s.join()),
                                            t.isSafeDevice.i = !1)
                                    }
                                    o = pageYOffset,
                                        a = r,
                                    e.isTrusted && (t.isMousewheel = !0)
                                }
                            ), {
                                passive: !1
                            })
                        }
                    }, {
                        key: "detectKeyboard",
                        value: function () {
                            var t = this
                                , e = null;
                            window.addEventListener("keydown", (function (a) {
                                    a.isTrusted && /(?:Tab|Space|Page|Home|End|Arrow)/i.test(a.code || a.key) && (t.isKeydown = !0,
                                        clearTimeout(e),
                                        e = setTimeout((function () {
                                                t.isKeydown = !1
                                            }
                                        ), 200))
                                }
                            ))
                        }
                    }]),
                        t
                }();
                var ue = a(5362)
                    , ge = a(7091)
                    , fe = a.n(ge)
                    , me = a(6409)
                    , ve = a(7312)
                    , _e = fe()(me)
                    , be = fe()(ve);
                const ye = '<% var bookList = data.recommendListItems; %> <% if(bookList && bookList.length){ %> <div class="clearfix mb16"> <h3 class="g_h2 fs24 lh32 fw700 pl1 ell fl">You may also Like</h3> <div class="fr pt8"> <a href="/alsolike/list/<%= bookId; %>?type=2" class="lh16 fs16" title="more">More</a> </div> </div> <ul class="clearfix"> <% for(var i = 0, len = Math.min(bookList.length, 6); i < len; i++){ %> <li class="g_col _2"> <% var data = bookList[i]; %> <% data.size = \'sm\'; %> <% data.renderStright = false; %> <%\nvar className;\nswitch(data.size) {\n\tcase \'sm\': className = \'g_thumb _sm\';break;\n\tcase \'bg\': className = \'g_thumb _lg\';break;\n\tcase \'mi\': className = \'g_thumb _xs\';break;\n\tdefault: className = \'g_thumb\';break;\n}\n%> <% if( data.placeholder ) { %> <div class="m-book _ph"> <div class="g_thumb mb8"> <% if(staticConf && staticConf.imgPh ){ %> <img cross-origin="anonymous" src="<%= staticConf.imgPh %>" width="140" height="186" alt="book cover"> <% } else { %> <img cross-origin="anonymous" class="_primary_theme_item" src="' + _e + '" width="140" height="186" alt="book cover"> <img cross-origin="anonymous" class="_chereads_theme_item" src="' + be + '" width="140" height="186" alt="book cover"> <% } %> </div> <div class="_ph _ph1 mb8"></div> <div class="_ph _ph2 mb8"></div> <div class="_ph _ph3 mb8"></div> </div> <% } else { %> <% var propBookEid = data.bookEid ? \'data-report-eid="\'+ data.bookEid + \'"\':\'\';  %> <% var propCategoryEid = data.categoryEid ? \'data-report-eid="\'+ data.categoryEid + \'"\':\'\';  %> <% var novelType = +data.novelType || 0; %> <div class="m-book"> <a class="m-book-title c_000 db" href="<%= getCommonBookUrl(staticConf.domainPrefix, data, novelType) %>" title="<%= data.bookName %>" <%= propBookEid %> data-report-bid="<%=  data.bookId %> "> <i class="<%= className%> mb8"> <% if( data.renderStright ){ %> <img cross-origin="anonymous" src="<%= getBookImgUrl(staticConf.domainPrefix, data, 140) %>" width="140" height="186" alt="<%= data.bookName %>"> <% } else if(staticConf && staticConf.imgPh ){ %> <img cross-origin="anonymous" src="<%= staticConf.imgPh %>" data-original="<%= getBookImgUrl(staticConf.domainPrefix, data, 140) %>" width="140" height="186" alt="<%= data.bookName %>"> <% } else { %> <img cross-origin="anonymous" class="_primary_theme_item" src="' + _e + '" data-original="<%= getBookImgUrl(staticConf.domainPrefix, data, 140) %>" width="140" height="186" alt="<%= data.bookName %>"> <img cross-origin="anonymous" class="_chereads_theme_item" src="' + be + '" data-original="<%= getBookImgUrl(staticConf.domainPrefix, data, 140) %>" width="140" height="186" alt="<%= data.bookName %>"> <% } %> <% if( novelType === 100 ){ %> <%- getComicTag();%> <% } %> <%- getOriginalTag(data.type)%> <% if( data.rankNum ){ %> <span class="fw700 pa t0 l0 _num _num<%= data.rankNum %>"><%= data.rankNum %></span> <% } %> <% var sameFlag = data.sameFlag; %> <% if( sameFlag && sameFlag != \'category\' ) { %> <span class="pa l0 b0 _flag fs14 ell">Same <%= sameFlag %></span> <% } %> </i> <h3 class="fw700 pl1 fs16 lh20 ells _2"><%= data.bookName %></h3> </a> <% if(data.categoryName) { %> <a href="<%= getCategoryUrl(staticConf.domainPrefix, { categoryId: data.categoryId }, bookTypeToCategoryType(novelType)) %>" class="_type db ell c_s ttc ell" <%= propCategoryEid %> data-report-genreid="<%= data.categoryName%>" title="<%= data.categoryName%>"><%= data.categoryName%></a> <% } %> <% if( typeof data.totalScore !== \'undefined\' && data.totalScore != null ){ %> <div class="g_star_num fs16" title="<%= data.totalScore %>"><%- getStarHtml(data.totalScore) %><% if(data.totalScore){ %><small><%= data.totalScore %></small><% } %></div> <% } %> <% if( data.powerStoneNum ){ %> <strong class="fs14 db"><i class="i_stone _power"></i><%= data.powerStoneNum %></strong> <% } %> </div> <% } %> </li> <% } %> </ul> <% } %> ';
                var Ce = a(8220)
                    , Ie = a(2165)
                    , we = a.n(Ie)
                    , ke = (a(7696),
                    a(1180))
                    , Pe = a.n(ke)
                    , Se = a(1940)
                    , Ae = a.n(Se)
                    , Te = a(2268)
                    , xe = a.n(Te)
                    , Oe = a(6605)
                    , je = a.n(Oe)
                    , De = a(4459)
                    , Le = a.n(De)
                    , Me = a(6737)
                    , Ee = a.n(Me)
                    , Be = a(1880)
                    , Ne = a.n(Be)
                    , Re = a(295)
                    , Ue = a.n(Re)
                    , He = a(99)
                    , $e = a.n(He)
                    , Ve = a(4728)
                    , Ze = a.n(Ve)
                    , qe = a(443)
                    , Fe = a.n(qe)
                    , We = a(4602)
                    , Ge = a.n(We);

                function ze(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e && (o = o.filter((function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }
                        ))),
                            a.push.apply(a, o)
                    }
                    return a
                }

                function Qe(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? ze(Object(a), !0).forEach((function (e) {
                                d()(t, e, a[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ze(Object(a)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            }
                        ))
                    }
                    return t
                }

                a(4879);
                var Ke = {
                    "-1": 1,
                    15: 1,
                    18: 1,
                    20: 1,
                    25: 1,
                    35: 1,
                    30: 0,
                    40: 0,
                    45: 0,
                    50: 0
                }
                    , Xe = function () {
                    return +g().get("bookCitysex") || 1
                }
                    , Je = {
                    1: "https://webbanner.webnovel.com/utils/1661410666_648714.png",
                    2: "https://webbanner.webnovel.com/utils/1661410666_648714.png"
                }
                    , Ye = {
                    1: "go.onelink.me/A7Gk",
                    2: "go.onelink.me/A7Gk"
                }
                    , ta = {
                    1: "QDHWReader",
                    2: "QDHWReader"
                };

                function ea(t, e, a, o) {
                    return e + a.split("").sort((function () {
                            return Math.random() - .5
                        }
                    )).join("") + o
                }

                var aa = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        , a = t.replace(/(<y[\w][\w\W]*?>)([^<]+)(<\/y[\w]+>)/g, ea);
                    return e && (a = a.replace("_cfcmp", "_cfcmp _mix")),
                        a
                };

                function oa(t) {
                    var e, a, o, n, r, i, s, c, l = document.querySelector(".qrcode_".concat(t));
                    if (l) {
                        if (!l.getElementsByTagName("canvas").length) {
                            var d = l.search
                                , h = new URLSearchParams(d);
                            new (Ge())(l, (e = h.get("af_ad"),
                                a = h.get("af_sub1"),
                                o = "/book/".concat(e, "/").concat(a),
                                n = encodeURIComponent(JSON.stringify({
                                    url: o
                                })),
                                r = "/open?query=".concat(n),
                                i = "".concat(ta[Xe()], "://app").concat(r),
                                s = g().get("webnovel_uuid") || "",
                                c = g().get("uid") || "",
                                {
                                    text: "https://".concat(Ye[Xe()], "?pid=ref_pcsitepageref&af_web_dp=https%3A%2F%2Fwww.webnovel.com%2F&is_retargeting=true&af_force_deeplink=true&af_c_id=bookChapter&af_ad=").concat(e, "&af_sub1=").concat(a, "&af_adset=DownLoadNow&af_dp=").concat(encodeURIComponent(i), "&af_sub4=").concat(encodeURIComponent("uuid=".concat(s, "&guid=").concat(c, "&platform=pc"))),
                                    width: 178,
                                    height: 178,
                                    colorDark: "#000000",
                                    colorLight: "#ffffff",
                                    logo: Je[Xe()],
                                    logoBackgroundColor: "#000",
                                    logoHeight: 40,
                                    logoWidth: 40
                                }))
                        }
                    } else
                        console.log("testttttt", t)
                }

                var na, ra = _()({
                    storeAsString: !0
                });
                const ia = L.Z.inherit({
                    el: "body",
                    events: {
                        "click .theme-set-color input": "setColor",
                        "click .theme-set-font input": "setFont",
                        "click .theme-set-paragraph-switch input": "setParagraphSwitch",
                        "click.update .cha-modal ._close": "closePanel",
                        "click.update .cha-fly .j_modal": "updateChapPosition",
                        "click .g_bt_add_lib": V.Z,
                        "click .j_retry": "retryGetContent",
                        "click .j_unlockChapter": "skipAdByStone",
                        "click .j_unlock_fp": "skipAdByStone",
                        "mouseenter .stone-drop": "reportOnWhat",
                        "click .j_vote_power": "postVotePS",
                        "click #checked_off_toApp": "toApp"
                    },
                    elements: {},
                    render: function () {
                        return this.setElement(this.el),
                            this.init(),
                            this
                    },
                    init: function () {
                        var t = this;
                        Yt(),
                            this.initSSRHTML().then((function () {
                                    var e;
                                    (new Ot.Z).getDataAndSetData(),
                                        new lt,
                                        new Q,
                                        new Ut,
                                        new X,
                                        t.ChapterStore = new rt({
                                            bookId: g_data.bookId
                                        }),
                                    g_data.chapInfo && g_data.chapInfo.chapterInfo && g_data.chapInfo.chapterInfo.chapterId && t.ChapterStore.setChapterInfo(g_data.chapInfo.chapterInfo.chapterId, g_data.chapInfo.chapterInfo),
                                        t.globalParams = {
                                            _isTrust: !0,
                                            _fsae: 0,
                                            nextChapterId: g_data.nextcId,
                                            prevChapterId: g_data.precId,
                                            doc$: x()(document),
                                            win$: x()(window),
                                            chapIdx$: x()(".j_chapIdx"),
                                            chapName$: x()(".j_chapName"),
                                            curProgress$: x()(".j_progress"),
                                            curChap$: x()(".j_curChap"),
                                            currChapId: g_data.firstChap.id,
                                            currChapIdxInArr: 0,
                                            chapterLevel: g_data.firstChap.chapterLevel,
                                            stillLoadChap: !1,
                                            vipAds: [],
                                            videoTimer: [],
                                            ss: parseInt(x()(".j_ss_stone").data("ss"))
                                        },
                                        t.initSafeDetector(),
                                        g_data.currChapId = t.globalParams.currChapId,
                                        t.adSlotArr = {},
                                    "undefined" != typeof adSlot && (t.adSlotArr["chapter-ad-" + g_data.firstChap.id] = adSlot),
                                        t.getChapterInfoAjaxCache = [],
                                        t.initPageResize(),
                                    -1 != t.globalParams.nextChapterId && t.getChapterInfo(t.globalParams.nextChapterId, x()(".j_chapterLoading"), (function (e) {
                                            t.getNextChapterSucc(e);
                                            var a = e.data.chapterInfo;
                                            a.font && t.appendFontStyle(a.chapterId, a.font)
                                        }
                                    )),
                                    -1 != t.globalParams.prevChapterId && t.getChapterInfo(t.globalParams.prevChapterId, x()(".j_loading_top"), (function (e) {
                                            t.getPrevChapterSucc(e);
                                            var a = e.data.chapterInfo;
                                            a.font && t.appendFontStyle(a.chapterId, a.font)
                                        }
                                    )),
                                    -1 == t.globalParams.prevChapterId && -1 == t.globalParams.nextChapterId || t.initChapterScroll(),
                                    -1 == t.globalParams.nextChapterId && x()(".j_privilege_bar_wrap").data("end", 1),
                                        setTimeout((function () {
                                                t.getNewList()
                                            }
                                        ), 0),
                                        x()(".j_theme_setting")[0].reset(),
                                        new Y({
                                            $box: x()(".theme-set"),
                                            $target: x()("html"),
                                            $sizeTarget: x()(".j_contentWrap"),
                                            upDnOpt: {
                                                boxSel: ".theme-set-upDown",
                                                upSel: "._add",
                                                dnSel: "._red"
                                            },
                                            changeRule: {
                                                tc: "_color",
                                                tf: "_font",
                                                paragraphSwitch: 1,
                                                ts: function (e, a, o, n) {
                                                    e.$sizeTarget.css("font-size", n + "px"),
                                                        t.updateChapPosition(o),
                                                        t.setFontSize(n)
                                                }
                                            }
                                        }),
                                        t.forbidCopy(),
                                        t.initFirstChapInfo(),
                                        t.initRev(),
                                        t.ChapterCommentApi = new At(g_data.bookId, g_data.firstChap),
                                        t.loginConfig(),
                                        new H({
                                            sel: ".cha-modal-bd"
                                        }),
                                        t.setReadingProgress(g_data.bookId, g_data.firstChap.id),
                                    0 == g_data.login.statusCode && (e = x()(".g_bt_add_lib"),
                                        x().ajax({
                                            type: "POST",
                                            url: "/go/pcm/library/checkInLibraryAjax",
                                            data: {
                                                bookId: e.data("bookid"),
                                                novelType: e.data("ntype")
                                            },
                                            success: function (t) {
                                                if (0 === t.code)
                                                    if (e.attr("disabled", !1),
                                                        t.data.inLibrary) {
                                                        var a = 100 == e.data("ntype") ? "qi_CC04" : "qi_C03";
                                                        e.addClass("_inLib").attr("data-report-eid", a)
                                                    } else {
                                                        var o = 100 == e.data("ntype") ? "qi_CC04" : "qi_C02";
                                                        e.removeClass("_inLib").attr("data-report-eid", o)
                                                    }
                                            }
                                        })),
                                        t.initKeyboardSupport(),
                                        t.initAntiOCR();
                                    var o = +g_data.checkLevel
                                        , n = +g_data.actionStatus;
                                    o && o >= 15 && !Ke[n] && t.initPowerVote(),
                                        t.handleChargeClose(),
                                        t.apiCatalog = new oe({
                                            isPreload: "" + t.globalParams.nextChapterId == "-1",
                                            getChapterId: function () {
                                                return t.globalParams.currChapId
                                            },
                                            onChapterChange: function (e) {
                                                t.goToChapter(e)
                                            }
                                        }),
                                        t.ParaOperationGroupAPI = new pt({
                                            bookId: g_data.bookId
                                        }),
                                        t.ParaOperationGroupAPI.togglePara(+g_data.paragraphSwitch),
                                    1 == +g_data.paragraphSwitch && a.e(2492).then(a.bind(a, 6224)).then((function (e) {
                                            var a = e.default;
                                            t.ParaCommentAPI = new a(g_data.bookId),
                                                t.ParaCommentAPI.setStatus(g_data.paragraphSwitch),
                                                t.ParaCommentAPI.initChapterParaComment(t.globalParams.currChapId)
                                        }
                                    )),
                                    g_data.isTranslateMode && Promise.all([a.e(939), a.e(8325)]).then(a.bind(a, 6780)).then((function (e) {
                                            var a = e.default;
                                            t.MachineEditAPI = new a,
                                                t.ParaOperationGroupAPI.toggleMtl(1 == +g_data.isWhiteUser && 1 == +g_data.isTranslateMode)
                                        }
                                    )),
                                        t.PopTipsAPI = new xt,
                                        window.qdReportUtm = t.qdReportUtm = function (t) {
                                            for (var e = t ? t.split("&") : [], a = {}, o = 0; o < e.length; o++) {
                                                var n = e[o].substring(0, e[o].indexOf("="));
                                                if (-1 != n.indexOf("utm")) {
                                                    var r = e[o].substring(e[o].indexOf("=") + 1);
                                                    a[n] = r
                                                }
                                            }
                                            return a
                                        }(g().get("QDReport_utm")),
                                        t.scrolledChapters = 0,
                                        t.initGift();
                                    try {
                                        (0,
                                            re.Fj)((function () {
                                                fbq("track", "ViewContent", {
                                                    value: 0,
                                                    currency: "USD",
                                                    content_ids: [g_data.bookId],
                                                    content_type: "product"
                                                })
                                            }
                                        )),
                                            (0,
                                                re.hL)((function () {
                                                    ga("send", {
                                                        hitType: "event",
                                                        eventCategory: "Read Novel",
                                                        eventAction: "Click",
                                                        eventLabel: "Read Novel"
                                                    })
                                                }
                                            ))
                                    } catch (t) {
                                    }
                                    try {
                                        "facebook" !== t.qdReportUtm.utm_source && "google" !== t.qdReportUtm.utm_source || setTimeout((function () {
                                                A.Z.send({
                                                    target: null
                                                }, {
                                                    ltype: "A",
                                                    eid: "qi_A_readChapters",
                                                    extend: JSON.stringify({
                                                        chapters: 1
                                                    })
                                                }, !0)
                                            }
                                        ), 1e3)
                                    } catch (t) {
                                    }
                                    new ne.Z,
                                        A.Z.send({
                                            target: null
                                        }, {
                                            ltype: "P",
                                            l1: 1,
                                            eid: "qi_P_reader",
                                            pdt: "reader",
                                            pdid: g_data.bookId,
                                            blocktitle: g_data.currChapId
                                        }),
                                        document.addEventListener("visibilitychange", k),
                                        window.addEventListener("beforeunload", P),
                                        S({
                                            bookType: 0,
                                            bookId: g_data.bookId,
                                            chapterId: g_data.currChapId
                                        })
                                }
                            ))
                    },
                    initAntiOCR: function () {
                        var t = setInterval((function () {
                                var e = g_data.chapInfo.chapterInfo.chapterId
                                    , a = document.querySelectorAll(".j_chapter_".concat(e, " .cha-paragraph"));
                                if (a.length > 0 && a[0].offsetWidth > 1500) {
                                    for (var o = a.length - 1, n = parseInt(a.length / 2, 10); o >= n; o--) {
                                        if (o === a.length - 1) {
                                            var r = document.createElement("div");
                                            r.innerText = " Ｗｅｂｎｏｖｅｌ Copyright, Please visit www.ｗｅｂｎｏｖｅｌ.com to support our authors and translators. ",
                                                a[o].parentNode.insertBefore(r, a[o])
                                        }
                                        a[o].replaceWith(a[a.length - 1 - o].cloneNode(!0))
                                    }
                                    clearInterval(t)
                                }
                            }
                        ), 100)
                    },
                    initSafeDetector: function () {
                        var t = this;
                        t.globalParams._safeDetector = new pe((function (e) {
                                t.globalParams._isTrust = e
                            }
                        ), (function () {
                                t.setViewer()
                            }
                        ), (function () {
                                var e = (new Date).getTime();
                                t.globalParams._fsae = e,
                                    g().set("_fsae", e, ".webnovel.com", "/", 2592e6)
                            }
                        ))
                    },
                    initSSRHTML: (na = p()(i().mark((function t() {
                                var e, a, o, n;
                                return i().wrap((function (t) {
                                        for (; ;)
                                            switch (t.prev = t.next) {
                                                case 0:
                                                    return e = this,
                                                        a = function () {
                                                            var t = x()(".j_contentWrap")
                                                                , a = D().render("#chapter-content.html", Qe(Qe(Qe({
                                                                csrRender: !0
                                                            }, g_data.chapInfo), {}, {
                                                                chapterInfo: Qe(Qe({}, g_data.chapInfo.chapterInfo), {}, {
                                                                    contents: g_data.chapInfo.chapterInfo.contents.map((function (t) {
                                                                            return Qe(Qe({}, t), {}, {
                                                                                content: aa(t.content, !0)
                                                                            })
                                                                        }
                                                                    ))
                                                                }),
                                                                isOriginal: g_data.isOriginal,
                                                                staticPath: g_data.staticPath,
                                                                env: g_data.env,
                                                                statusCode: g_data.login.statusCode,
                                                                showTopSplit: !1,
                                                                showBottomSplit: !1,
                                                                adId: e.getChapterAdId(102),
                                                                isTranslateMode: g_data.isTranslateMode,
                                                                isWhiteUser: g_data.isWhiteUser,
                                                                user: g_data.login.user,
                                                                data: {
                                                                    statusCode: g_data.login.statusCode,
                                                                    user: g_data.login.user,
                                                                    membershipStatus: g_data.membershipStatus,
                                                                    waitpayStatus: g_data.waitpayStatus
                                                                },
                                                                gender: Xe()
                                                            }, f), {}, {
                                                                getBookImgUrl: xe(),
                                                                getOriginalTag: Le(),
                                                                getUserHomeUrl: Ct(),
                                                                getTranslatorStr: $e(),
                                                                getUserAvatar: Pt(),
                                                                getUserName: wt(),
                                                                getSplitContent: Ze(),
                                                                htmlEncode: Fe(),
                                                                toLocalTime: N(),
                                                                Buffer: b.lW
                                                            }));
                                                            t.prepend(a);
                                                            var o = g_data.chapInfo.chapterInfo;
                                                            o.font && e.appendFontStyle(o.chapterId, o.font),
                                                                oa(o.chapterId)
                                                        }
                                                        ,
                                                        o = g_data.chapInfo.chapterInfo,
                                                        t.next = 5,
                                                        Xt(o.nextChapterEncrypt, o.chapterId);
                                                case 5:
                                                    if ((n = t.sent).nextChapterId && (o.nextChapterId = n.nextChapterId,
                                                        o.nextChapterName = n.nextChapterName,
                                                        g_data.nextcId = n.nextChapterId,
                                                        g_data.firstChap.nextcId = n.nextChapterId),
                                                    0 !== o.encryptType) {
                                                        t.next = 9;
                                                        break
                                                    }
                                                    return t.abrupt("return", new Promise((function (t) {
                                                            a(),
                                                                t()
                                                        }
                                                    )));
                                                case 9:
                                                    return t.abrupt("return", Jt().then((function (t) {
                                                            t.addKeypool(o.encryptKeyPool, o.encryptVersion + "");
                                                            var n = c()(o.contents, 1)[0]
                                                                , r = o.chapterId
                                                                , i = o.encryptType;
                                                            n && n.content && t.unlock(n.content.split(Wt)[1].replace("</p>", ""), r, (function (t, n) {
                                                                    if (0 === t) {
                                                                        if (1 === i)
                                                                            o.contents = ra.parse(n);
                                                                        else if (3 === i) {
                                                                            o.isRichFormat = 1;
                                                                            var s = ra.parse(n).data
                                                                                , c = s.contents
                                                                                , l = s.css
                                                                                , d = s.font;
                                                                            o.contents = c,
                                                                                o.css = l,
                                                                                o.font = d
                                                                        }
                                                                        a(),
                                                                            setTimeout((function () {
                                                                                    e.setViewer(r)
                                                                                }
                                                                            ), 300)
                                                                    }
                                                                }
                                                            ))
                                                        }
                                                    )));
                                                case 10:
                                                case "end":
                                                    return t.stop()
                                            }
                                    }
                                ), t, this)
                            }
                        ))),
                            function () {
                                return na.apply(this, arguments)
                            }
                    ),
                    handleChargeClose: function () {
                        x()(document).on("click", ".chargeForm .j_close, .chargeForm .j_confirmBtDefault, .chargeForm .j_confirmBtGhost", (function () {
                                location.reload()
                            }
                        ))
                    },
                    appendFontStyle: function (t, e) {
                        for (var a = new ArrayBuffer(e.length), o = new Uint8Array(a), n = 0; n < e.length; ++n)
                            o[n] = e[n];
                        var r = new Blob([o], {
                                type: "font/ttf"
                            })
                            , i = URL.createObjectURL(r)
                            ,
                            s = "<style>@font-face { font-family: Genuine_".concat(t, "; src:url(").concat(i, ') format("truetype"); }</style>');
                        x()("head").append(x()(s))
                    },
                    initPowerVote: function () {
                        var t = this;
                        this.initPowerVoteModal();
                        var e = x()(".j_power_rank_wrap")
                            , a = x()("#powerVoteModal");
                        this.powerStoneApi = new Z.Z({
                            $powerRankWrap: e,
                            bookId: g_data.bookId,
                            bookName: g_data.bookName,
                            novelType: 0,
                            getRankInfoSucc: function (o) {
                                if (o.data) {
                                    var n = {
                                        powerRankInfo: o.data,
                                        staticConf: {
                                            domainPrefix: g_data.env,
                                            staticPath: g_data.staticPath
                                        },
                                        data: {
                                            user: g_data.login.user
                                        },
                                        bookId: g_data.bookId,
                                        bookType: +g_data.bookType,
                                        bookName: g_data.bookName,
                                        chapterId: t.globalParams.currChapId
                                    };
                                    e.html(D().render(ue.Z, n)),
                                        a.html(D().render('<%\nvar srcRank="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAJFBMVEX////1Mmb2MWX2N231MWX1MWX/////wtL8nbf+9vj+vM38mLS/meY4AAAABXRSTlMB5qYc7ekm068AAABrSURBVDjLYyADMCuGYgAhA6CESSgW4AyUUMUmEQSUEMUmEQiUCMUKqC8xLQ0JZCJJpKEAKkoQtBwD0FlieTkUVKFJlMMBbSQwLR8sQbKjAwi6sUh0gAHtJBCW09vnODMnzuyMswDAXWSQDgDUBFQyX50DMwAAAABJRU5ErkJggg==";\nvar srcStone="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEU8ZvX1+P9vj/vC0P8/afVoi/o/aPU+a/pFbv9LeP9Gb/Y8ZvU8Z/U8aPddgvg7ZvVRePe5yv+uwf+Kpv2asv59mvxYfPh3lflaffZMc/mkuP5nifmXrftfg/fPnuCZAAAAHnRSTlPmAebm5uZkQSUR5tbChOal5ubm5ubm5t2viubLy8rr6OWiAAABEElEQVRIx+2Wy7KCMBBE+5LwVCPi4/r8/99UI+U4aRxw4c7ewilOV5GZ4G841XlfDT4YBuqFd259qKcCxQxwzq3+i0lAOQcAd093KkeBaokY98gmrQKShwKoCkheA1QFJK8BqgIlzwBVgZJngKqA5GOasF4lRF8FIi/xu+yWjUvSXcoeSGzaPIvZHpNvBN8D2ia+3iPda4sGYMCHTOVZpQuAANpGIlW2HgpgG+V1bIEhIHsX4DMAP+AHfAuwf++8IcA6QHkLyYQjGjwMQLzERscaM2Ij8eYg23kkmZfGqAypDWaFOYzJZlHzuDeyrMyFwvL2ymJ5eymyvL12SX58sZP8+NWB5McvJ1qeAa4S5TlXHPcQ906aF1YAAAAASUVORK5CYII=";\n%> <% if(typeof powerRankInfo != \'undefined\' && powerRankInfo){ %> <div class="g_mod _small" data-report-l1="13"> <a href="###" class="_close" title="close"><svg><use xlink:href="#i-times"></use></svg></a> <div class="g_mod_hd">Vote with Power Stone</div> <div class="g_mod_bd tac"> <div class="_pr dib vam fs0 mr24"> <img cross-origin="anonymous" width="24" height="24" class="db mb8 mla mra vam w24 h24" src="<%= srcRank %>" alt="Rank"> <strong class="db vam fs32 lh32 fw700"> <% if(powerRankInfo.rank != undefined && powerRankInfo.rank > 0){ %> <%= powerRankInfo.rank < 200 ? "NO."+powerRankInfo.rank :"200+" %> <% }else{ %> N/A <% } %> </strong> <small class="db vam fs14 lh24 c_s">Power Ranking</small> </div> <div class="_ps dib vam fs0"> <img cross-origin="anonymous" width="24" height="24" class="div mb8 mla mra vam w24 h24" src="<%= srcStone %>" alt="Stone"> <strong class="db vam fs32 lh32 fw700 j_total_power" data-total="<%= powerRankInfo.powerNums || 0%>"><%= typeof powerRankInfo.powerNums != \'undefined\' && powerRankInfo.powerNums != null ? (powerRankInfo.powerNums).toLocaleString(): \'--\'%></strong> <small class="db vam fs14 lh24 c_s">Power Stone</small> </div> </div> <div class="g_mod_ft"> <div class="j_power_btn_area"> <% var showLoginBtn = \'\'; %> <% var showVoteBtn = \'\'; %> <% var showDisVoteBtn = \'\'; %> <% var eid = \'\'; %> <% if(typeof data != \'undefined\' && data.user && data.user.status == 0){ %> <% if(data.user && data.user.PS == 0){ %> <% showDisVoteBtn = \'_on\'; %> <% eid = \'qi_J25\'; %> <% }else{ %> <% showVoteBtn = \'_on\'; %> <% showDisVoteBtn = \'\'; %> <% eid = \'qi_C10\'; %> <% } %> <% }else{ %> <% eid = \'qi_C10\'; %> <% showLoginBtn = \'_on\'; %> <% } %>  <% if(typeof isRankVote !== \'undefined\' && isRankVote){ %> <a href="###" title="Vote Power Stone" class="bt _warning _vote j_vote_power <%= showVoteBtn; %>" data-bookid="<%= bookId; %>" data-bookname="<%= bookName; %>" <%= typeof novelType !== \'undefined\' ? \'data-novelType=\' + novelType : \'\'; %> data-report-eid="<%= eid; %>" data-report-bid="<%= bookId; %>" data-report-cid="<%= typeof chapterId != \'undefined\' ? chapterId : \'\'; %>"> <strong>Vote Power Stone (<small class="j_ps_num"><%= data.user.PS; %></small>)</strong> </a> <% }else{ %> <a href="###" title="Vote Power Stone" class="bt _warning _2row _vote j_vote_power <%= showVoteBtn; %>" data-bookid="<%= bookId; %>" data-bookname="<%= bookName; %>" <%= typeof novelType !== \'undefined\' ? \'data-novelType=\' + novelType : \'\'; %> data-report-eid="<%= eid; %>" data-report-bid="<%= bookId; %>" data-report-cid="<%= typeof chapterId != \'undefined\' ? chapterId : \'\'; %>"> <strong>Vote</strong> <small class="j_ps_num">(<%= data.user.PS; %> stone<% if(data.user.PS > 1){ %>s<% } %> left)</small> </a> <% } %>  <% if(typeof isRankVote !== \'undefined\' && isRankVote){ %> <a href="###" title="Vote Power Stone" class="bt _warning _2row _dis_vote <%= showDisVoteBtn; %>" disabled="disabled" data-bookid="<%= bookId; %>" data-bookname="<%= bookName; %>" <%= typeof novelType !== \'undefined\' ? \'data-novelType=\' + novelType : \'\'; %> data-report-eid="<%= eid; %>" data-report-bid="<%= bookId; %>" data-report-cid="<%= typeof chapterId != \'undefined\' ? chapterId : \'\'; %>"> <strong>Vote Power Stone (0)</strong> </a> <% }else{ %> <a href="###" title="Vote Power Stone" class="bt _warning _2row _dis_vote <%= showDisVoteBtn; %>" disabled="disabled" data-bookid="<%= bookId; %>" data-bookname="<%= bookName; %>" <%= typeof novelType !== \'undefined\' ? \'data-novelType=\' + novelType : \'\'; %> data-report-eid="<%= eid; %>" data-report-bid="<%= bookId; %>" data-report-cid="<%= typeof chapterId != \'undefined\' ? chapterId : \'\'; %>"> <strong>Vote</strong> <small class="j_ps_num">(0 stone left)</small> </a> <% } %> <a href="###" title="Vote Power Stone" class="bt _login _warning j_login <%= showLoginBtn; %>" data-report-cid="<%= typeof chapterId != \'undefined\' ? chapterId : \'\'; %>" data-report-eid="<%= eid; %>" data-report-bid="<%= bookId; %>"> <strong> Vote </strong> </a> </div> <div class="tac fs16 lh24 mt16"> <a href="/ranking/powervote/<%= bookId%>" title="See Who Voted">See Who Voted</a> </div> </div> </div> <% }else{ %> <div class="g_mod _small"> <a href="###" class="_close" title="close"><svg><use xlink:href="#i-times"></use></svg></a> <div class="g_mod_hd">Vote with Power Stone</div> <div class="g_mod_bd tac"> <div class="_pr dib vam fs0 mr24"> <img cross-origin="anonymous" width="24" height="24" class="db mb8 mla mra vam w24 h24" src="<%= srcRank %>" alt="Rank"> <strong class="db vam fs32 lh32 fw700">NO.--</strong> <small class="db vam fs14 lh24 c_s">Power Ranking</small> </div> <div class="_ps dib vam fs0"> <img cross-origin="anonymous" width="24" height="24" class="div mb8 mla mra vam w24 h24" src="<%= srcStone %>" alt="Stone"> <strong class="db vam fs32 lh32 fw700">--</strong> <small class="db vam fs14 lh24 c_s">Power Stone</small> </div> </div> <div class="g_mod_ft"> <a href="###" class="bt _warning _block" title="Vote with power stone"> <strong>Vote</strong> </a> <div class="tac fs16 lh24 mt16"> <a href="/ranking/powervote/<%= bookId%>" title="See Who Voted">See Who Voted</a> </div> </div> </div> <% } %> ', n))
                                }
                            }
                        }),
                            this.powerStoneApi.getRankInfo()
                    },
                    initGift: function () {
                        var t = this;
                        new Ce.Z({
                            selTrigger: ".j_btn_gift",
                            importApi: function () {
                                return a.e(7158).then(a.bind(a, 9306))
                            },
                            returnInstance: function (t) {
                                return new t({
                                    bookId: g_data.bookId,
                                    novelType: 0
                                })
                            }
                        }),
                        -1 != +g_data.giftNum && -1 == t.globalParams.nextChapterId && (a.e(7294).then(a.bind(a, 4353)).then((function (e) {
                                var a = e.default;
                                t.giftBarApi = new a({
                                    bookId: g_data.bookId,
                                    novelType: 0
                                })
                            }
                        )),
                            a.e(6620).then(a.bind(a, 7734)).then((function (t) {
                                    new (0,
                                        t.default)
                                }
                            )))
                    },
                    initPowerVoteModal: function () {
                        var t = this;
                        t._powerModApi = !1,
                            x()(document).on("click", ".j_trigger_power_modal", (function (e) {
                                    e.preventDefault(),
                                        t.$powerVoteTrigger = x()(this),
                                        t._powerModApi ? t._powerModApi.load() : t._powerModApi = x()("#powerVoteModal").overlay({
                                            load: !0
                                        }).data("overlay")
                                }
                            ))
                    },
                    initKeyboardSupport: function () {
                        var t = this;
                        F().bind("right", (function () {
                                var e, a = 0;
                                x()(".chapter_content").each((function (e, o) {
                                        x()(o).hasClass("j_chapter_" + t.globalParams.currChapId) && (a = e)
                                    }
                                )),
                                t.chapInfoArr[a] && (e = t.chapInfoArr[a].nextId,
                                    t.switchChapter(e))
                            }
                        )),
                            F().bind("left", (function () {
                                    var e, a = 0;
                                    x()(".chapter_content").each((function (e, o) {
                                            x()(o).hasClass("j_chapter_" + t.globalParams.currChapId) && (a = e)
                                        }
                                    )),
                                    t.chapInfoArr[a] && (e = t.chapInfoArr[a].prevId,
                                        t.switchChapter(e))
                                }
                            ))
                    },
                    switchChapter: function (t) {
                        var e, a, o = this;
                        if (t && -1 != t) {
                            (e = this.chapInfoArr.filter((function (e) {
                                    return e.id == t
                                }
                            ))) && e.length ? (a = e[0].name + "",
                                x()(window).scrollTop(e[0].start || 0)) : (x()(".j_loading_top").addClass("_loading"),
                                this.clearAliveChapterAjax(),
                                this.getChapterInfo(t, x()(".j_loading_top"), (function (t) {
                                        o.renderNewChapter(t),
                                            oa(t.data.chapterInfo.chapterId);
                                        var e = t.data.chapterInfo;
                                        e.font && o.appendFontStyle(e.chapterId, e.font)
                                    }
                                )));
                            var n = Mt()(null, g_data.bookId, t, g_data.bookName, a, we().NOVEL);
                            history.replaceState ? history.replaceState(null, null, n) : location.href = n
                        }
                    },
                    initgdata: function () {
                        var t = g_data.chapInfo.chapterInfo
                            , e = g_data.chapInfo.bookInfo;
                        g_data.nextcId = t.nextChapterId,
                            g_data.firstChapterIndex = t.firstChapterIndex,
                            g_data.precId = t.preChapterId,
                            g_data.bookId = e.bookId,
                            g_data.bookName = e.bookName,
                            g_data.tChapCnt = e.totalChapterNum,
                            g_data.firstChap = {
                                id: t.chapterId,
                                idx: t.chapterIndex,
                                name: t.chapterName,
                                comNum: t.reviewTotal,
                                vip: t.isVip,
                                auth: t.isAuth,
                                chapterLevel: t.chapterLevel
                            },
                            g_data.adId = e.adId,
                            g_data.bookInfo = e
                    },
                    loginConfig: function () {
                        var t = this
                            , e = x()(document)
                            , o = e.data("ApiLogin");
                        o.success = function (e) {
                            a.e(3868).then(a.bind(a, 1873)).then((function (a) {
                                    (0,
                                        a.default)(e, (function () {
                                            t.loginSuccess()
                                        }
                                    ))
                                }
                            ))
                        }
                            ,
                            o.autoSuccess = function () {
                                t.loginSuccess()
                            }
                            ,
                            e.data("ApiLogin", o)
                    },
                    loginSuccess: function () {
                        location.reload()
                    },
                    initFirstChapInfo: function () {
                        g_data.firstChap.start = 0,
                            g_data.firstChap.end = this.globalParams.doc$.height(),
                            this.chapInfoArr = [],
                            this.recordChapInfo(g_data.firstChap)
                    },
                    initRev: function () {
                        var t = this;
                        new Ce.Z({
                            selTrigger: ".j_review",
                            importApi: function () {
                                return Promise.all([a.e(8256), a.e(213)]).then(a.bind(a, 402))
                            },
                            returnInstance: function (e) {
                                return new e({
                                    modalSel: "#reviewModal",
                                    onBeforeShow: function () {
                                        x()("#reviewModal #j_read_status").html("Reading Status: C" + t.globalParams.chapIdx)
                                    },
                                    revSuccess: function (t, e) {
                                        e.addClass("_success")[0].reset()
                                    },
                                    onClose: function (t) {
                                        t.getOverlay().removeClass("_success")
                                    }
                                })
                            },
                            onBeforeTrigger: function () {
                                if (0 != g_data.login.statusCode)
                                    return x()(document).data("ApiLogin").showLogin(),
                                        !1
                            },
                            onTrigger: function (t) {
                                t.showReviewModal()
                            }
                        })
                    },
                    resetTheme: function () {
                        if (g().get("tc")) {
                            switch (g().get("tc")) {
                                case "_color1":
                                    x()("._default").find("input").prop("checked", !0);
                                    break;
                                case "_color2":
                                    x()("._yellow").find("input").prop("checked", !0);
                                    break;
                                case "_color3":
                                    x()("._dark").find("input").prop("checked", !0)
                            }
                            x()("html").addClass(g().get("tc"))
                        }
                        if (g().get("tf")) {
                            switch (g().get("tf")) {
                                case "_font1":
                                    x()("._ari").find("input").prop("checked", !0);
                                    break;
                                case "_font2":
                                    x()("._mer").find("input").prop("checked", !0)
                            }
                            x()("html").addClass(g().get("tf"))
                        }
                        g().get("ts") && (x()("#j_size").val(g().get("ts")),
                            x()(".j_contentWrap").css("font-size", g().get("ts") + "px"))
                    },
                    setColor: function (t) {
                        var e = x()(t.currentTarget);
                        g().set("tc", e.val(), ".webnovel.com", "/", 31536e6),
                            this.setSettingOnServer()
                    },
                    setFont: function (t) {
                        var e = x()(t.currentTarget);
                        g().set("tf", e.val(), ".webnovel.com", "/", 31536e6),
                            this.setSettingOnServer((function () {
                                    window.location.reload()
                                }
                            ))
                    },
                    setFontSize: function (t) {
                        g().set("ts", t, ".webnovel.com", "/", 31536e6),
                            this.setSettingOnServer()
                    },
                    setParagraphSwitch: function (t) {
                        var e = this
                            , o = t.currentTarget.checked ? 1 : 0;
                        e.ParaCommentAPI ? (e.ParaCommentAPI.setStatus(o),
                            e.ParaCommentAPI.initChapterParaComment(e.globalParams.currChapId),
                            e.ParaOperationGroupAPI.togglePara(o)) : a.e(2492).then(a.bind(a, 6224)).then((function (t) {
                                var a = t.default;
                                e.ParaCommentAPI = new a(g_data.bookId),
                                    e.ParaCommentAPI.setStatus(o),
                                    e.ParaCommentAPI.initChapterParaComment(e.globalParams.currChapId),
                                    e.ParaOperationGroupAPI.togglePara(o)
                            }
                        )),
                            g().set("paragraphSwitch", o, ".webnovel.com", "/", 31536e6),
                            this.setSettingOnServer()
                    },
                    setSettingOnServer: function (t) {
                        if (0 == g_data.login.statusCode) {
                            var e = x()(".j_theme_setting")
                                , a = M.Z.getFormParams(e.serializeArray());
                            void 0 === a.paragraphSwitch && (a.paragraphSwitch = 0),
                                x().ajax({
                                    method: "POST",
                                    url: "/go/pcm/book/setReadingSettings",
                                    data: a,
                                    success: function (e) {
                                        t && t(e)
                                    }
                                })
                        }
                    },
                    closePanel: function () {
                        this.updateChapPosition()
                    },
                    getNewList: function () {
                        var t = x()(".j_update_list");
                        x().ajax({
                            type: "GET",
                            url: "/go/pcm/recommend/getRecommendList",
                            cache: !1,
                            data: {
                                type: 2,
                                bookId: g_data.bookId
                            },
                            success: function (e) {
                                var a;
                                0 === e.code && (t.html(D().render(ye, Qe(Qe({}, e), {}, {
                                    env: g_data.env,
                                    staticConf: {
                                        staticPath: g_data.staticPath,
                                        domainPrefix: g_data.env,
                                        imgPh: (a = +g().get("bookCitysex") || 1,
                                            m[a])
                                    },
                                    renderStright: !1,
                                    bookId: g_data.bookId,
                                    userId: g_data.login.user.userId,
                                    getCommonBookUrl: Ae(),
                                    getBookImgUrl: xe(),
                                    getComicTag: je(),
                                    getOriginalTag: Le(),
                                    getCategoryUrl: Ee(),
                                    bookTypeToCategoryType: Ne(),
                                    getStarHtml: Ue()
                                }))),
                                    it())
                            }
                        })
                    },
                    addNextChapter: function () {
                        var t, e, o = x()(".j_contentWrap"), n = x()(".j_bottom"), r = this,
                            i = x()(".chapter_content:last");
                        t = i.length ? i.offset().top + i.height() : 0,
                            o.append(this.globalParams.chapTpl),
                            oa(this.globalParams.currChapId),
                            x()(".j_fp_stone").html(g_data.login.user.fastPass),
                        this.globalParams.chapBotTpl && (n.append(this.globalParams.chapBotTpl),
                            this.globalParams.chapBotTpl = null,
                            x()(".j_chapter_end").removeClass("dn"),
                        -1 == +g_data.giftNum || r.giftBarApi || (a.e(7294).then(a.bind(a, 4353)).then((function (t) {
                                var e = t.default;
                                r.giftBarApi = new e({
                                    bookId: g_data.bookId,
                                    novelType: 0
                                })
                            }
                        )),
                            a.e(6620).then(a.bind(a, 7734)).then((function (t) {
                                    new (0,
                                        t.default)
                                }
                            ))),
                            it(),
                            x()(".gift-bar-in-chapter .j_btn_gift").attr("data-report-cid", this.globalParams.chapId).attr("data-cid", this.globalParams.chapId)),
                            e = (i = x()(".chapter_content:last")).offset().top + i.height(),
                            this.recordChapInfo({
                                id: this.globalParams.chapId,
                                name: this.globalParams.chapName,
                                idx: this.globalParams.chapIdx,
                                order: this.globalParams.chapOrderIdx,
                                comNum: this.globalParams.comNum,
                                auth: this.globalParams.auth,
                                vip: this.globalParams.vip,
                                start: t,
                                end: e,
                                nextId: this.globalParams.currNextId,
                                prevId: this.globalParams.currPrevId,
                                chapterLevel: this.globalParams.chapterLevel
                            }),
                            this.globalParams.lastChapId = this.globalParams.chapId;
                        var s = this.getChapterAdId(102);
                        s && this.addAdvertise("chapter-ad-" + this.globalParams.chapId, s, [728, 90])
                    },
                    clearAliveChapterAjax: function () {
                        for (var t = this.getChapterInfoAjaxCache.length, e = 0; e < t; e++)
                            try {
                                4 !== this.getChapterInfoAjaxCache[e].readyState && this.getChapterInfoAjaxCache[e].abort()
                            } catch (t) {
                            }
                        this.getChapterInfoAjaxCache = []
                    },
                    getChapterInfo: function (t, e, a, o) {
                        if (!(t <= 0)) {
                            var n = this;
                            n.globalParams.stillLoadChap = !0;
                            var r, s = x().ajax({
                                method: "GET",
                                url: "/go/pcm/chapter/getContent",
                                cache: !1,
                                data: {
                                    _fsae: n.globalParams._fsae,
                                    bookId: g_data.bookId,
                                    chapterId: t,
                                    encryptType: 3,
                                    font: Gt[g().get("tf")] || Gt.default
                                },
                                success: (r = p()(i().mark((function r(s) {
                                            var l, d, h, p, u, g, f, m, v, _;
                                            return i().wrap((function (r) {
                                                    for (; ;)
                                                        switch (r.prev = r.next) {
                                                            case 0:
                                                                if (0 !== s.code) {
                                                                    r.next = 11;
                                                                    break
                                                                }
                                                                return d = null === (l = s.data.chapterInfo) || void 0 === l ? void 0 : l.nextChapterEncrypt,
                                                                    r.next = 4,
                                                                    Xt(d, t);
                                                            case 4:
                                                                h = r.sent,
                                                                    s.data.chapterInfo = Qe(Qe({}, s.data.chapterInfo), h),
                                                                    p = function (t) {
                                                                        n.globalParams.stillLoadChap = !1,
                                                                            e.removeClass("_loading"),
                                                                        t.data && t.data.chapterInfo && -1 == t.data.chapterInfo.nextChapterId && A.Z.send({
                                                                            target: null
                                                                        }, {
                                                                            eid: "qi_D22"
                                                                        }, !0),
                                                                            g_data.membershipStatus = t.data.membershipStatus,
                                                                            g_data.waitpayStatus = t.data.waitpayStatus,
                                                                        t.data.chapterInfo && t.data.chapterInfo.chapterId && n.ChapterStore.setChapterInfo(t.data.chapterInfo.chapterId, t.data.chapterInfo),
                                                                            a(t)
                                                                    }
                                                                    ,
                                                                    u = s.data.chapterInfo,
                                                                    g = u.encryptType,
                                                                    f = u.encryptKeyPool,
                                                                    m = u.encryptVersion,
                                                                    v = c()(u.contents, 1),
                                                                    _ = v[0],
                                                                    3 === g || 1 === g ? (3 === g && (s.data.chapterInfo.isRichFormat = 1),
                                                                        Jt().then((function (e) {
                                                                                e.addKeypool(f, m + ""),
                                                                                _ && _.content && e.unlock(_.content.split(Wt)[1].replace("</p>", ""), t, (function (t, e) {
                                                                                        if (0 === t) {
                                                                                            if (1 === g)
                                                                                                s.data.chapterInfo.contents = ra.parse(e);
                                                                                            else if (3 === g) {
                                                                                                var a = ra.parse(e).data
                                                                                                    , o = a.contents
                                                                                                    , n = a.css
                                                                                                    , r = a.font;
                                                                                                s.data.chapterInfo.contents = o,
                                                                                                    s.data.chapterInfo.css = n,
                                                                                                    s.data.chapterInfo.font = r
                                                                                            }
                                                                                            p(s)
                                                                                        } else
                                                                                            p(s)
                                                                                    }
                                                                                ))
                                                                            }
                                                                        ))) : p(s),
                                                                    r.next = 12;
                                                                break;
                                                            case 11:
                                                                "function" == typeof o ? o(s) : e.removeClass("_loading").addClass("_failed");
                                                            case 12:
                                                            case "end":
                                                                return r.stop()
                                                        }
                                                }
                                            ), r)
                                        }
                                    ))),
                                        function (t) {
                                            return r.apply(this, arguments)
                                        }
                                ),
                                error: function (t) {
                                    console.log("error", t),
                                        e.removeClass("_loading").addClass("_failed")
                                }
                            });
                            n.getChapterInfoAjaxCache.push(s)
                        }
                    },
                    retryGetContent: function (t) {
                        var e = x()(t.currentTarget)
                            , a = this;
                        e.parents(".j_chapterLoading").removeClass("_failed"),
                            this.getChapterInfo(this.globalParams.nextChapterId, x()(".j_chapterLoading"), (function (t) {
                                    a.getNextChapterSucc(t);
                                    var e = t.data.chapterInfo;
                                    e.font && a.appendFontStyle(e.chapterId, e.font)
                                }
                            ))
                    },
                    getNextChapterSucc: function (t) {
                        this.globalParams.chapId = t.data.chapterInfo.chapterId,
                            this.globalParams.chapName = t.data.chapterInfo.chapterName,
                            this.globalParams.chapIdx = t.data.chapterInfo.chapterIndex,
                            this.globalParams.chapOrderIdx = t.data.chapterInfo.orderIndex,
                            this.globalParams.comNum = t.data.chapterInfo.reviewTotal,
                            this.globalParams.auth = t.data.chapterInfo.isAuth,
                            this.globalParams.vip = t.data.chapterInfo.isVip,
                            this.globalParams.lastChapId = null,
                            this.globalParams.currNextId = t.data.chapterInfo.nextChapterId,
                            this.globalParams.currPrevId = t.data.chapterInfo.preChapterId,
                            this.globalParams.actionStatus = t.data.bookInfo.actionStatus,
                            this.globalParams.nextChapterId = t.data.chapterInfo.nextChapterId,
                            this.globalParams.chapterLevel = t.data.chapterInfo.chapterLevel,
                            this.globalParams.chapTpl = D().render("#chapter-content.html", Qe(Qe(Qe({
                                csrRender: !0
                            }, t.data), {}, {
                                chapterInfo: Qe(Qe({}, t.data.chapterInfo), {}, {
                                    contents: t.data.chapterInfo.contents.map((function (t) {
                                            return Qe(Qe({}, t), {}, {
                                                content: aa(t.content, !0)
                                            })
                                        }
                                    ))
                                }),
                                isOriginal: g_data.isOriginal,
                                staticPath: g_data.staticPath,
                                env: g_data.env,
                                statusCode: g_data.login.statusCode,
                                showTopSplit: !0,
                                showBottomSplit: !1,
                                adId: this.getChapterAdId(102),
                                isTranslateMode: g_data.isTranslateMode,
                                isWhiteUser: g_data.isWhiteUser,
                                user: g_data.login.user,
                                data: {
                                    statusCode: g_data.login.statusCode,
                                    user: g_data.login.user,
                                    membershipStatus: g_data.membershipStatus,
                                    waitpayStatus: g_data.waitpayStatus
                                },
                                gender: Xe()
                            }, f), {}, {
                                getBookImgUrl: xe(),
                                getOriginalTag: Le(),
                                getUserHomeUrl: Ct(),
                                getTranslatorStr: $e(),
                                getUserAvatar: Pt(),
                                getUserName: wt(),
                                getSplitContent: Ze(),
                                htmlEncode: Fe(),
                                toLocalTime: N(),
                                Buffer: b.lW
                            })),
                        -1 == this.globalParams.nextChapterId && (this.globalParams.chapBotTpl = D().render("#content-bottom.html", x().extend(t.data, {
                            env: g_data.env,
                            staticPath: g_data.staticPath,
                            statusCode: g_data.login.statusCode
                        })),
                            this.addNextChapter()),
                            x()(window).trigger("scroll")
                    },
                    getPrevChapterSucc: function (t) {
                        this.globalParams.pChapId = t.data.chapterInfo.chapterId,
                            this.globalParams.pChapName = t.data.chapterInfo.chapterName,
                            this.globalParams.pChapIdx = t.data.chapterInfo.chapterIndex,
                            this.globalParams.pChapOrderIdex = t.data.chapterInfo.orderIndex,
                            this.globalParams.pComNum = t.data.chapterInfo.reviewTotal,
                            this.globalParams.pAuth = t.data.chapterInfo.isAuth,
                            this.globalParams.pVip = t.data.chapterInfo.isVip,
                            this.globalParams.pLastChapId = null,
                            this.globalParams.pCurrNextId = t.data.chapterInfo.nextChapterId,
                            this.globalParams.pCurrPrevId = t.data.chapterInfo.preChapterId,
                            this.globalParams.prevChapterId = t.data.chapterInfo.preChapterId,
                            this.globalParams.prevChapTpl = D().render("#chapter-content.html", Qe(Qe(Qe({
                                csrRender: !0
                            }, t.data), {}, {
                                chapterInfo: Qe(Qe({}, t.data.chapterInfo), {}, {
                                    contents: t.data.chapterInfo.contents.map((function (t) {
                                            return Qe(Qe({}, t), {}, {
                                                content: aa(t.content, !0)
                                            })
                                        }
                                    ))
                                }),
                                isOriginal: g_data.isOriginal,
                                staticPath: g_data.staticPath,
                                env: g_data.env,
                                statusCode: g_data.login.statusCode,
                                showTopSplit: !1,
                                showBottomSplit: !0,
                                adId: this.getChapterAdId(102),
                                isTranslateMode: g_data.isTranslateMode,
                                isWhiteUser: g_data.isWhiteUser,
                                user: g_data.login.user,
                                data: {
                                    statusCode: g_data.login.statusCode,
                                    user: g_data.login.user,
                                    membershipStatus: g_data.membershipStatus,
                                    waitpayStatus: g_data.waitpayStatus
                                },
                                gender: Xe()
                            }, f), {}, {
                                getBookImgUrl: xe(),
                                getOriginalTag: Le(),
                                getUserHomeUrl: Ct(),
                                getTranslatorStr: $e(),
                                getUserAvatar: Pt(),
                                getUserName: wt(),
                                getSplitContent: Ze(),
                                htmlEncode: Fe(),
                                toLocalTime: N(),
                                Buffer: b.lW
                            }))
                    },
                    addPrevChapter: function () {
                        var t, e, a = x()(".j_contentWrap"), o = x()(window), n = o.scrollTop(),
                            r = x()(".chapter_content:last");
                        t = r.offset().top + r.height(),
                            a.prepend(this.globalParams.prevChapTpl),
                            oa(this.globalParams.currChapId),
                            this.globalParams.prevChapTpl = null,
                            e = (r = x()(".chapter_content:last")).offset().top + r.height(),
                            o.scrollTop(n + e - t),
                            this.recordChapInfo({
                                id: this.globalParams.pChapId,
                                name: this.globalParams.pChapName,
                                idx: this.globalParams.pChapIdx,
                                order: this.globalParams.pChapOrderIdex,
                                comNum: this.globalParams.pComNum,
                                auth: this.globalParams.pAuth,
                                vip: this.globalParams.pVip,
                                start: 0,
                                end: e - t,
                                nextId: this.globalParams.pCurrNextId,
                                prevId: this.globalParams.pCurrPrevId,
                                chapterLevel: this.globalParams.chapterLevel
                            }, !0),
                            this.updateChapPosition(),
                            this.globalParams.pLastChapId = this.globalParams.pChapId;
                        var i = this.getChapterAdId(102);
                        i && this.addAdvertise("chapter-ad-" + this.globalParams.pChapId, i, [728, 90]),
                            this.PopTipsAPI.refresh()
                    },
                    initPageResize: function () {
                        var t = this;
                        x()(window).on("resize", (0,
                            O.Z)((function (e) {
                                t.updateChapPosition()
                            }
                        ), 100, 100))
                    },
                    isInitChapterScroll: !1,
                    initChapterScroll: function () {
                        var t = this;
                        t.isInitChapterScroll || (t.isInitChapterScroll = !0,
                            new tt.Z({
                                supportScrollPrev: !0,
                                mustDoneOnScroll: function () {
                                    t.updateWhenScroll(t.globalParams.win$.scrollTop() + t.globalParams.win$.height() / 2.5)
                                },
                                onLoadingNext: function () {
                                    -1 != t.globalParams.nextChapterId && (t.globalParams.stillLoadChap ? x()(".j_chapterLoading").addClass("_loading") : t.globalParams.lastChapId != t.globalParams.chapId ? (t.addNextChapter(),
                                        t.getChapterInfo(t.globalParams.nextChapterId, x()(".j_chapterLoading"), (function (e) {
                                                a.e(6620).then(a.bind(a, 7734)).then((function (t) {
                                                        new (0,
                                                            t.default)
                                                    }
                                                )),
                                                    t.getNextChapterSucc(e),
                                                    oa(e.data.chapterInfo.chapterId);
                                                var o = e.data.chapterInfo;
                                                o.font && t.appendFontStyle(o.chapterId, o.font)
                                            }
                                        ))) : console.log("loading the same next chapter.."))
                                },
                                onLoadingPrev: function () {
                                    -1 != t.globalParams.prevChapterId ? t.globalParams.stillLoadChap ? x()(".j_loading_top").addClass("_loading") : t.globalParams.pLastChapId != t.globalParams.pChapId && (t.addPrevChapter(),
                                        t.getChapterInfo(t.globalParams.prevChapterId, x()(".j_loading_top"), (function (e) {
                                                a.e(6620).then(a.bind(a, 7734)).then((function (t) {
                                                        new (0,
                                                            t.default)
                                                    }
                                                )),
                                                    t.getPrevChapterSucc(e),
                                                    oa(e.data.chapterInfo.chapterId);
                                                var o = e.data.chapterInfo;
                                                o.font && t.appendFontStyle(o.chapterId, o.font)
                                            }
                                        ))) : t.globalParams.prevChapTpl && t.addPrevChapter()
                                }
                            }))
                    },
                    recordChapInfo: function (t, e) {
                        this.chapInfoArr && this.chapInfoArr.length || (this.chapInfoArr = []),
                            e ? this.chapInfoArr.unshift(t) : this.chapInfoArr.push(t)
                    },
                    forbidCopy: function () {
                        x()(".cha-page").on("copy contextmenu", (function () {
                                return !1
                            }
                        ))
                    },
                    updateWhenScroll: function (t) {
                        for (var e = this, a = 0; a < this.chapInfoArr.length; a++)
                            if (this.chapInfoArr[a].start <= t && t <= this.chapInfoArr[a].end) {
                                if (this.chapInfoArr[a].id == this.globalParams.currChapId)
                                    break;
                                if ("local" != g_data.env && this.updateCurrUrl(this.chapInfoArr[a].id, this.chapInfoArr[a].name),
                                    setTimeout((function () {
                                            A.Z.send({
                                                target: null
                                            }, {
                                                ltype: "A",
                                                eid: "qi_R99",
                                                bid: g_data.bookId,
                                                cid: e.chapInfoArr[a].id
                                            }, !0)
                                        }
                                    ), 200),
                                    this.updateLockChapContent(this.chapInfoArr[a].id, a),
                                    oa(this.chapInfoArr[a].id),
                                    this.updateHeaderInfo(a),
                                this.apiCatalog && "function" == typeof this.apiCatalog.changeCurrentId && this.apiCatalog.changeCurrentId(this.chapInfoArr[a].id),
                                    this.setReadingProgress(g_data.bookId, this.chapInfoArr[a].id),
                                    this.globalParams.currChapId = this.chapInfoArr[a].id,
                                    this.globalParams.currChapIdxInArr = a,
                                    g_data.currChapId = this.globalParams.currChapId,
                                    A.Z.send({
                                        target: null
                                    }, {
                                        ltype: "P",
                                        l1: 1,
                                        eid: "qi_P_reader",
                                        pdt: "reader",
                                        pdid: g_data.bookId,
                                        blocktitle: g_data.currChapId
                                    }),
                                    S({
                                        bookType: 0,
                                        bookId: g_data.bookId,
                                        chapterId: g_data.currChapId
                                    }),
                                this.ParaCommentAPI && this.ParaCommentAPI.initChapterParaComment(this.globalParams.currChapId),
                                    this.ChapterCommentApi.checkoutCommentByChapterId(this.globalParams.currChapId, this.chapInfoArr[a]),
                                3 === this.chapInfoArr.length)
                                    try {
                                        "facebook" === this.qdReportUtm.utm_source && (0,
                                            re.Fj)((function () {
                                                fbq("track", "StartTrial")
                                            }
                                        )),
                                            (0,
                                                re.hL)((function () {
                                                    ga("send", {
                                                        hitType: "event",
                                                        eventCategory: "Read 3 Chapters",
                                                        eventAction: "Click",
                                                        eventLabel: "Read 3 Chapters"
                                                    })
                                                }
                                            ))
                                    } catch (t) {
                                    }
                                try {
                                    "facebook" !== this.qdReportUtm.utm_source && "google" !== this.qdReportUtm.utm_source || setTimeout((function () {
                                            A.Z.send({
                                                target: null
                                            }, {
                                                ltype: "A",
                                                eid: "qi_A_readChapters",
                                                extend: JSON.stringify({
                                                    chapters: e.chapInfoArr.length
                                                })
                                            }, !0)
                                        }
                                    ), 1e3)
                                } catch (t) {
                                }
                                break
                            }
                    },
                    updateCurrUrl: function (t, e) {
                        var a;
                        history.replaceState && (a = Mt()(null, g_data.bookId, t, g_data.bookName, e, we().NOVEL),
                            history.replaceState(null, null, a))
                    },
                    updateLockChapContent: function (t, e) {
                        var a, o = this, n = x()(".j_lock_chap_" + t);
                        n.length && n.find(".cha-content").hasClass("_lock") ? this.chapInfoArr[e].auth = 0 : this.chapInfoArr[e].auth = 1,
                        0 != this.chapInfoArr[e].vip && 0 == this.chapInfoArr[e].auth && (A.Z.send({
                            target: null
                        }, {
                            ltype: "H",
                            pid: "qi_p_AD",
                            bid: g_data.bookId,
                            cid: this.globalParams.currChapId
                        }, {}),
                        0 == g_data.login.statusCode && x().ajax({
                            method: "GET",
                            url: "/go/pcm/chapter/getContent",
                            cache: !1,
                            data: {
                                _fsae: o.globalParams._fsae,
                                bookId: g_data.bookId,
                                chapterId: o.chapInfoArr[e].id,
                                encryptType: 3,
                                font: Gt[g().get("tf")] || Gt.default
                            },
                            success: (a = p()(i().mark((function t(e) {
                                        var a, r, s, l, d, h, p, u, g, f;
                                        return i().wrap((function (t) {
                                                for (; ;)
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            if (0 !== e.code || !e.data.chapterInfo.isAuth && 0 != e.data.chapterInfo.price) {
                                                                t.next = 11;
                                                                break
                                                            }
                                                            return r = null === (a = e.data.chapterInfo) || void 0 === a ? void 0 : a.nextChapterEncrypt,
                                                                t.next = 4,
                                                                Xt(r, chapterId);
                                                        case 4:
                                                            s = t.sent,
                                                                e.data.chapterInfo = Qe(Qe({}, e.data.chapterInfo), s),
                                                                l = function (t) {
                                                                    t.data.chapterInfo && t.data.chapterInfo.chapterId && o.ChapterStore.setChapterInfo(t.data.chapterInfo.chapterId, t.data.chapterInfo),
                                                                        n.find(".j_locked_chap").addClass("_loading"),
                                                                        setTimeout((function () {
                                                                                o.replaceAuthChapter(t.data.chapterInfo.chapterId, t.data.chapterInfo)
                                                                            }
                                                                        ), 500);
                                                                    var e = t.data.chapterInfo;
                                                                    e.font && o.appendFontStyle(e.chapterId, e.font)
                                                                }
                                                                ,
                                                                d = e.data.chapterInfo,
                                                                h = d.encryptType,
                                                                p = d.encryptKeyPool,
                                                                u = d.encryptVersion,
                                                                g = c()(d.contents, 1),
                                                                f = g[0],
                                                                3 === h || 1 === h ? (3 === h && (e.data.chapterInfo.isRichFormat = 1),
                                                                    Jt().then((function (t) {
                                                                            t.addKeypool(p, u + ""),
                                                                            f && f.content && t.unlock(f.content.split(Wt)[1].replace("</p>", ""), chapterId, (function (t, a) {
                                                                                    if (0 === t) {
                                                                                        if (1 === h)
                                                                                            e.data.chapterInfo.contents = ra.parse(a);
                                                                                        else if (3 === h) {
                                                                                            var o = ra.parse(a).data
                                                                                                , n = o.contents
                                                                                                , r = o.css
                                                                                                , i = o.font;
                                                                                            e.data.chapterInfo.contents = n,
                                                                                                e.data.chapterInfo.css = r,
                                                                                                e.data.chapterInfo.font = i
                                                                                        }
                                                                                        l(e)
                                                                                    } else
                                                                                        l(e)
                                                                                }
                                                                            ))
                                                                        }
                                                                    ))) : l(e),
                                                                t.next = 11;
                                                            break;
                                                        case 11:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                            }
                                        ), t)
                                    }
                                ))),
                                    function (t) {
                                        return a.apply(this, arguments)
                                    }
                            )
                        }))
                    },
                    updateHeaderInfo: function (t) {
                        0 == this.chapInfoArr[t].chapterLevel && (this.chapInfoArr[t].idx >= 0 ? this.globalParams.chapIdx$.html("Chapter " + this.chapInfoArr[t].idx + ":") : this.globalParams.chapIdx$.html(""),
                            this.globalParams.curProgress$.html(Math.floor(this.chapInfoArr[t].order / g_data.tChapCnt * 1e4) / 100 + "%"),
                            this.globalParams.chapName$.html(this.chapInfoArr[t].name))
                    },
                    setReadingProgress: function (t, e) {
                        if (0 == g_data.login.statusCode) {
                            var a = this.chapInfoArr.filter((function (t) {
                                    return t.id == e
                                }
                            ))
                                , o = 0;
                            if (a && a.length && (o = a[0].chapterLevel),
                            0 != +o)
                                return;
                            x().ajax({
                                type: "POST",
                                url: "/go/pcm/library/setReadingProgressAjax",
                                data: {
                                    bookId: t,
                                    chapterId: e,
                                    novelType: 0
                                },
                                success: function (t) {
                                }
                            })
                        }
                    },
                    updateCommentsReport: function (t) {
                        x()(".cha-fly").find(".j_comments").data("cid", t)
                    },
                    goPrevChap: function () {
                        this.globalParams.win$.scrollTop()
                    },
                    updateChapPosition: function (t) {
                        var e = x()(".j_splitLine")
                            , a = this;
                        setTimeout((function () {
                                0 != e.length ? (x().each(e, (function (t, o) {
                                        a.chapInfoArr[t].end = x()(o).offset().top,
                                        t + 1 == e.length && (a.chapInfoArr[t + 1].end = a.globalParams.doc$.height()),
                                            a.chapInfoArr[t + 1].start = a.chapInfoArr[t].end
                                    }
                                )),
                                    x()(window).trigger("scroll")) : a.chapInfoArr[0].end = a.globalParams.doc$.height()
                            }
                        ), 1e3)
                    },
                    getChapterAdId: function (t) {
                        return 0
                    },
                    addAdvertise: function (t, e, a) {
                        var o = this;
                        o.adSlotArr = o.adSlotArr || [],
                            e = e || o.getChapterAdId(102),
                            a = a || [728, 90];
                        try {
                            googletag && googletag.cmd && x()("#" + t).length && googletag.cmd.push((function () {
                                    if (!o.adSlotArr[t]) {
                                        var n = googletag.defineSlot(e, a, t);
                                        n && (o.adSlotArr[t] = n,
                                            n.addService(googletag.pubads()),
                                            googletag.cmd.push((function () {
                                                    googletag.display(t)
                                                }
                                            )))
                                    }
                                }
                            ))
                        } catch (t) {
                            console.error(t.toString())
                        }
                    },
                    adsControlWhenScroll: function (t) {
                        var e, a, o = this, n = x()(".j_ads"), r = [], i = 0;
                        n.each((function (a, o) {
                                (e = x()(o).attr("id")) === t && (i = a),
                                    r.push(e)
                            }
                        ));
                        var s = [];
                        if (r.length > 0) {
                            for (var c = 0; c < r.length; c++)
                                a = o.adSlotArr[r[c]],
                                    c > i + 1 || c < i - 1 ? (s.push(a),
                                        delete o.adSlotArr[r[c]]) : o.addAdvertise(r[c]);
                            s.length && googletag.destroySlots(s)
                        }
                    },
                    goToChapter: function (t) {
                        var e = this
                            , a = t.chapterId
                            , o = t.chapterName
                            , n = Mt()(null, g_data.bookId, a, g_data.bookName, o, we().NOVEL);
                        if (history.replaceState) {
                            history.replaceState(null, null, n);
                            for (var r = this.chapInfoArr.length, i = 0; i < r && a != this.chapInfoArr[i].id; i++)
                                ;
                            i == r ? (x()(".j_loading_top").addClass("_loading"),
                                x()(".j_chapter_end").addClass("dn"),
                                this.clearAliveChapterAjax(),
                                this.getChapterInfo(a, x()(".j_loading_top"), (function (t) {
                                        e.renderNewChapter(t);
                                        var a = t.data.chapterInfo;
                                        a.font && e.appendFontStyle(a.chapterId, a.font)
                                    }
                                ))) : x()(window).scrollTop(this.chapInfoArr[i].start)
                        } else
                            location.href = n
                    },
                    renderNewChapter: function (t) {
                        var e = this
                            , a = x()(".j_contentWrap")
                            , o = x()(".j_bottom");
                        a.html(""),
                            o.html(""),
                            this.globalParams.nextChapterId = t.data.chapterInfo.nextChapterId,
                            this.globalParams.prevChapterId = t.data.chapterInfo.preChapterId,
                            this.globalParams.chapId = t.data.chapterInfo.chapterId,
                            this.globalParams.chapName = t.data.chapterInfo.chapterName,
                            this.globalParams.chapIdx = t.data.chapterInfo.chapterIndex,
                            this.globalParams.chapOrderIdx = t.data.chapterInfo.orderIndex,
                            this.globalParams.comNum = t.data.chapterInfo.reviewTotal,
                            this.globalParams.currNextId = t.data.chapterInfo.nextChapterId,
                            this.globalParams.currPrevId = t.data.chapterInfo.preChapterId,
                            this.globalParams.chapterLevel = t.data.chapterInfo.chapterLevel,
                            this.globalParams.chapTpl = D().render("#chapter-content.html", Qe(Qe(Qe({
                                csrRender: !0
                            }, t.data), {}, {
                                chapterInfo: Qe(Qe({}, t.data.chapterInfo), {}, {
                                    contents: t.data.chapterInfo.contents.map((function (t) {
                                            return Qe(Qe({}, t), {}, {
                                                content: aa(t.content, !0)
                                            })
                                        }
                                    ))
                                }),
                                isOriginal: g_data.isOriginal,
                                staticPath: g_data.staticPath,
                                env: g_data.env,
                                statusCode: g_data.login.statusCode,
                                showTopSplit: !1,
                                showBottomSplit: !1,
                                adId: e.getChapterAdId(102),
                                isTranslateMode: g_data.isTranslateMode,
                                isWhiteUser: g_data.isWhiteUser,
                                user: g_data.login.user,
                                data: {
                                    statusCode: g_data.login.statusCode,
                                    user: g_data.login.user,
                                    membershipStatus: g_data.membershipStatus,
                                    waitpayStatus: g_data.waitpayStatus
                                },
                                gender: Xe()
                            }, f), {}, {
                                getBookImgUrl: xe(),
                                getOriginalTag: Le(),
                                getUserHomeUrl: Ct(),
                                getTranslatorStr: $e(),
                                getUserAvatar: Pt(),
                                getUserName: wt(),
                                getSplitContent: Ze(),
                                htmlEncode: Fe(),
                                toLocalTime: N(),
                                Buffer: b.lW
                            })),
                            -1 == this.globalParams.nextChapterId ? this.globalParams.chapBotTpl = D().render("#content-bottom.html", x().extend(t.data, {
                                env: g_data.env,
                                staticPath: g_data.staticPath,
                                statusCode: g_data.login.statusCode
                            })) : x()(".j_chapter_end").addClass("dn"),
                            this.chapInfoArr = [],
                            this.addNextChapter(),
                            x()(window).scrollTop(0),
                            this.setViewer(t.data.chapterInfo.chapterId),
                        -1 != this.globalParams.nextChapterId && this.getChapterInfo(this.globalParams.nextChapterId, x()(".j_chapterLoading"), (function (t) {
                                e.getNextChapterSucc(t);
                                var a = t.data.chapterInfo;
                                a.font && e.appendFontStyle(a.chapterId, a.font)
                            }
                        )),
                            -1 != this.globalParams.prevChapterId ? this.getChapterInfo(this.globalParams.prevChapterId, x()(".j_loading_top"), (function (t) {
                                    e.getPrevChapterSucc(t);
                                    var a = t.data.chapterInfo;
                                    a.font && e.appendFontStyle(a.chapterId, a.font)
                                }
                            )) : this.globalParams.prevChapTpl = null,
                        -1 == this.globalParams.prevChapterId && -1 == this.globalParams.nextChapterId || this.initChapterScroll(),
                        g_data.isTranslateMode && this.MachineEditAPI && this.MachineEditAPI.editionModalApi.close(),
                        this.ParaCommentAPI && this.ParaCommentAPI.close(),
                            this.ChapterCommentApi.checkoutCommentByChapterId(this.globalParams.currChapId),
                            this.PopTipsAPI.refresh()
                    },
                    videoShowError: function (t, e) {
                        t.removeClass("_loading").removeClass("_success"),
                            (new E.Z).error(e)
                    },
                    skipAdByStone: function (t) {
                        var e = this
                            , a = x()(t.currentTarget)
                            , o = a.data("unlock-params")
                            , n = g_data.login.user.SS
                            , r = (g_data.login.user.fastPass,
                            a.data("unlock-type"))
                            , i = x()(".j_locked_chap")
                            , s = i.data("vtype")
                            , c = a.closest(".chapter_content");
                        if (0 == g_data.login.statusCode)
                            if (void 0 !== n) {
                                a.addClass("_loading"),
                                    c.addClass("_disabled");
                                var l = x()(".j_lock_chap_" + o.chapterId);
                                this.payBySS({
                                    bookId: g_data.bookId,
                                    chapterId: o.chapterId,
                                    price: o.chapterPrice,
                                    unlockType: r
                                }, (function (t) {
                                        var n = t.data;
                                        if (n.font && e.appendFontStyle(o.chapterId, n.font),
                                            oa(o.chapterId),
                                            e.unlockChapSucc(a, l, o, t, r, s),
                                        2 == s) {
                                            e.removeLockSignInCatalog(o.chapterId);
                                            try {
                                                this.qdReportUtm.utm_source,
                                                    (0,
                                                        re.hL)((function () {
                                                            ga("send", {
                                                                hitType: "event",
                                                                eventCategory: "Unlock Chapters",
                                                                eventAction: "Unlock",
                                                                eventLabel: "Unlock Chapters",
                                                                eventValue: 6
                                                            })
                                                        }
                                                    ))
                                            } catch (t) {
                                            }
                                        }
                                        c.removeClass("_disabled");
                                        try {
                                            (0,
                                                re.zI)((function () {
                                                    _tfa.push({
                                                        notify: "event",
                                                        name: "make_purchase",
                                                        id: 1432404,
                                                        quantity: 5 == +r ? 0 : o.chapterPrice,
                                                        revenue: 5 == +r ? 0 : o.chapterPrice / 50
                                                    })
                                                }
                                            ))
                                        } catch (t) {
                                        }
                                    }
                                ), (function (t) {
                                        1 == s && (3019 == t.code ? (a.data("eid", "qi_H_ss"),
                                            i.data("l1", 7),
                                            e.showNotEnoughSS(t.data && t.data.costCoins, t.data && t.data.balanceCoins),
                                            e.videoShowError(a, t.msg)) : 3020 == t.code ? ((new E.Z).error(t.msg),
                                            setTimeout((function () {
                                                    location.reload()
                                                }
                                            ), 1e3)) : e.videoShowError(a, t.msg)),
                                        2 == s && e.unlockVip2Error(t, o.chapterId, r, a),
                                            a.removeClass("_loading").removeClass("_success"),
                                            c.removeClass("_disabled")
                                    }
                                )).error((function () {
                                        (new E.Z).error("network error"),
                                            setTimeout((function () {
                                                    a.removeClass("_loading").removeClass("_success"),
                                                        c.removeClass("_disabled")
                                                }
                                            ), 1e3)
                                    }
                                ));
                                try {
                                    (0,
                                        re.hL)((function () {
                                            ga("send", {
                                                hitType: "event",
                                                eventCategory: "Click Unlock Button",
                                                eventAction: "Click",
                                                eventLabel: "Click Unlock Button"
                                            })
                                        }
                                    ))
                                } catch (t) {
                                }
                            } else
                                e.videoShowError(a, "something is wrong");
                        else
                            x()(document).data("ApiLogin").showLogin()
                    },
                    unlockVip2Error: function (t, e, a, o) {
                        var n = x()(".j_lock_chap_" + e)
                            , r = n.find(".j_locked_chap")
                            , i = n.data("chaptername")
                            , s = n.data("batchunlockstatus");
                        if (3019 == t.code) {
                            var c = this.ChapterStore.getChapterInfo(e);
                            c.chapterId || (c = {
                                chapterId: e,
                                isVip: 2,
                                price: t.data.costCoins,
                                chapterName: i,
                                batchUnlockStatus: s
                            }),
                                (new E.Z).error(t.msg),
                                r.html(D().render("#unlockDom", {
                                    chapterInfo: c,
                                    bookInfo: Qe(Qe({}, g_data.chapInfo.bookInfo), {}, {
                                        bookId: g_data.bookId
                                    }),
                                    data: {
                                        statusCode: g_data.login.statusCode,
                                        user: g_data.login.user,
                                        membershipStatus: g_data.membershipStatus,
                                        waitpayStatus: g_data.waitpayStatus
                                    }
                                }))
                        } else
                            4001 == t.code ? ((new E.Z).error(t.msg),
                            o && o.attr && o.attr("disabled", !0)) : 3020 == t.code ? location.reload() : (new E.Z).error(t.msg)
                    },
                    payBySS: function (t, e, a) {
                        return x().ajax({
                            type: "POST",
                            url: "/go/pcm/book/unlockChapter",
                            data: Qe(Qe({}, t), {}, {
                                font: Gt[g().get("tf")] || Gt.default,
                                _fsae: this.globalParams._fsae
                            }),
                            success: function (o) {
                                if (0 == +o.code) {
                                    if ("function" == typeof e) {
                                        var n = o.data
                                            , r = n.encryptType
                                            , i = n.encryptKeyPool
                                            , s = n.encryptVersion
                                            , l = c()(n.content, 1)[0];
                                        3 === r || 1 === r ? (3 === r && (o.data.isRichFormat = 1),
                                            Jt().then((function (a) {
                                                    a.addKeypool(i, s + ""),
                                                    l && l.content && a.unlock(l.content.split(Wt)[1].replace("</p>", ""), t.chapterId, (function (t, a) {
                                                            if (0 === t) {
                                                                if (1 === r)
                                                                    o.data.content = ra.parse(a);
                                                                else if (3 === r) {
                                                                    var n = ra.parse(a).data
                                                                        , i = n.contents
                                                                        , s = n.css
                                                                        , c = n.font;
                                                                    o.data.content = i,
                                                                        o.data.css = s,
                                                                        o.data.font = c
                                                                }
                                                                e(o)
                                                            } else
                                                                e(o)
                                                        }
                                                    ))
                                                }
                                            ))) : e(o)
                                    }
                                } else
                                    "function" == typeof a && a(o)
                            }
                        })
                    },
                    unlockChapSucc: function (t, e, a, o, n, r) {
                        var i = this;
                        if (t.addClass("_success"),
                            e.find(".j_locked_chap").addClass("_loading"),
                            i.ChapterStore.updateChapterInfo(a.chapterId, Qe(Qe({}, o.data), {}, {
                                contents: o.data.contents || o.data.content
                            })),
                            setTimeout((function () {
                                    i.replaceAuthChapter(a.chapterId, Qe(Qe({}, o.data), {}, {
                                        contents: o.data.contents || o.data.content
                                    }))
                                }
                            ), 500),
                        3 == +n) {
                            var s = Math.max(0, +g_data.login.user.SS - parseInt(a.chapterPrice));
                            (c = x()(".j_ss_stone")).html(Pe()(s)),
                                c.data("ss", s),
                                g_data.login.user.SS = s,
                                i.updateLockedDom(r)
                        } else if (2 == +n)
                            s = Math.max(0, +g_data.login.user.SS - parseInt(a.chapterPrice)),
                                (c = x()(".j_ss_stone")).html(Pe()(s)),
                                c.data("ss", s),
                                g_data.login.user.SS = s,
                                i.updateLockedDom(r);
                        else if (5 == +n) {
                            var c, l = Math.max(0, +g_data.login.user.fastPass - parseInt(a.chapterPrice));
                            (c = x()(".j_fp_stone")).html(Pe()(l)),
                                c.data("fp", l),
                                g_data.login.user.fastPass = l,
                                i.updateLockedDom(r)
                        }
                    },
                    mixContent: function (t) {
                        t.className.includes("_mix") || (console.log(t.className, " mix"),
                            t.innerHTML = aa(t.innerHTML, !1),
                            t.classList.add("_mix"))
                    },
                    recoverContent: function (t, e) {
                        if (t.className.includes("_mix")) {
                            console.log(e, t.className, " recover");
                            var a = t.children[t.children.length - 1]
                                , o = this.ChapterStore.getChapterInfo(e)
                                , n = +t.className.match(/_p_(\d+)/)[1]
                                , r = document.createElement("p");
                            r.innerHTML = D().render("#chaWords.html", {
                                isTranslateMode: g_data.isTranslateMode,
                                isWhiteUser: g_data.isWhiteUser,
                                isLock: 0,
                                data: {
                                    user: g_data.login.user
                                },
                                chapterInfo: Qe(Qe({}, o), {}, {
                                    contents: [o.contents[n]]
                                }),
                                bookInfo: Qe(Qe({}, g_data.chapInfo.bookInfo), {}, {
                                    languageName: g_data.languageName
                                }),
                                getBookImgUrl: xe(),
                                getOriginalTag: Le(),
                                getUserHomeUrl: Ct(),
                                getTranslatorStr: $e(),
                                getUserAvatar: Pt(),
                                getUserName: wt(),
                                getSplitContent: Ze(),
                                htmlEncode: Fe(),
                                Buffer: b.lW
                            }),
                            r.getElementsByClassName("_cfcmp")[0] && (t.innerHTML = r.getElementsByClassName("_cfcmp")[0].innerHTML,
                                t.classList.remove("_mix"),
                            a && a.innerHTML.includes("j_open_para_comment") && t.insertAdjacentElement("beforeend", a))
                        }
                    },
                    setViewer: function (t) {
                        var e = this
                            , a = window.innerHeight
                            , o = function (t) {
                            var e = t.getBoundingClientRect()
                                , o = e.top;
                            return e.bottom < -150 || o > a + 150
                        };
                        n()(document.querySelectorAll(".cha-words")).filter((function (t) {
                                return !o(t)
                            }
                        )).forEach((function (a) {
                                var r = a.className.match(/_font_(\d+)/)[1]
                                    , i = a.querySelectorAll(".j_paragraph ._cfcmp");
                                n()(i).forEach((function (a) {
                                        o(a) ? e.mixContent(a) : e.globalParams._safeDetector.isSafeDevice() && (e.globalParams._isTrust || t) && e.recoverContent(a, r)
                                    }
                                ))
                            }
                        ))
                    },
                    updateLockedDom: function (t) {
                        var e = this
                            , a = 1 == t ? "#unlockVideoDom" : "#unlockDom"
                            , o = x()('.chapter_content[data-islock="1"]')
                            , n = document.createElement("div");

                        function r(o) {
                            var n = x()(o).find(".chapter_content")
                                , r = n.length > 0 ? n : x()(o)
                                , i = r.data("cid")
                                , s = r.data("price")
                                , c = r.data("chaptername")
                                , l = r.data("batchunlockstatus")
                                , d = e.ChapterStore.getChapterInfo(i);
                            return d.chapterId || (d = Qe(Qe({}, d), {}, {
                                chapterId: i,
                                isVip: t,
                                price: s,
                                chapterName: c,
                                batchUnlockStatus: l
                            })),
                                console.log(i, "updateLockedDom", "render"),
                                r.find(".j_locked_chap").html(D().render(a, {
                                    chapterInfo: d,
                                    bookInfo: Qe(Qe({}, g_data.chapInfo.bookInfo), {}, {
                                        bookId: g_data.bookId
                                    }),
                                    data: {
                                        statusCode: g_data.login.statusCode,
                                        user: g_data.login.user,
                                        membershipStatus: g_data.membershipStatus,
                                        waitpayStatus: g_data.waitpayStatus
                                    }
                                })),
                                x()(o).html()
                        }

                        n.innerHTML = e.globalParams.chapTpl,
                            e.globalParams.chapTpl = r(n),
                            o.each((function (t, e) {
                                    r(e)
                                }
                            ))
                    },
                    showNotEnoughSS: function (t, e) {
                        A.Z.send({
                            target: null
                        }, {
                            ltype: "P",
                            eid: "qi_D24",
                            l1: 11
                        }),
                            this._modApi ? this._modApi.load() : this._modApi = x()("#unlockMod").overlay({
                                load: !0,
                                onBeforeLoad: function (a) {
                                    var o = D().render("#unlockDom.html", {
                                        price: t,
                                        balance: e
                                    });
                                    x()("#unlockMod").find(".g_mod_bd").html(o)
                                }
                            }).data("overlay")
                    },
                    replaceAuthChapter: function (t, e) {
                        e.chapterId = t;
                        var a = x()(".j_lock_chap_" + t);
                        a.find(".j_locked_chap").remove(),
                            a.find(".cha-words").html(D().render("#chaWords.html", {
                                isTranslateMode: g_data.isTranslateMode,
                                isWhiteUser: g_data.isWhiteUser,
                                isLock: 0,
                                data: {
                                    user: g_data.login.user
                                },
                                chapterInfo: Qe(Qe({}, e), {}, {
                                    contents: e.contents.map((function (t) {
                                            return Qe(Qe({}, t), {}, {
                                                content: aa(t.content, !0)
                                            })
                                        }
                                    ))
                                }),
                                bookInfo: Qe(Qe({}, g_data.chapInfo.bookInfo), {}, {
                                    languageName: g_data.languageName
                                }),
                                getBookImgUrl: xe(),
                                getOriginalTag: Le(),
                                getUserHomeUrl: Ct(),
                                getTranslatorStr: $e(),
                                getUserAvatar: Pt(),
                                getUserName: wt(),
                                getSplitContent: Ze(),
                                htmlEncode: Fe(),
                                Buffer: b.lW
                            })),
                            this.setViewer(t),
                            a.find(".cha-content").removeClass("_lock"),
                        this.ParaCommentAPI && this.ParaCommentAPI.initChapterParaComment(t),
                            this.updateChapPosition()
                    },
                    removeLockSignInCatalog: function (t) {
                        x()('.j_catalog_modal_body a[data-cid="' + t + '"] .j_tag').remove(),
                        this.apiCatalog && this.apiCatalog.updateData((function (e) {
                                for (var a = e.chapters, o = a.length - 1; o--;)
                                    if (a[o].chapterId === t)
                                        return a[o].isVip = 0,
                                            {
                                                bookInfo: e.bookInfo,
                                                chapters: a
                                            };
                                return e
                            }
                        ))
                    },
                    reportOnWhat: function (t) {
                        A.Z.send(t, {
                            ltype: "H",
                            eid: "qi_H_what"
                        })
                    },
                    postVotePS: function (t) {
                        this.powerStoneApi.postPowerVote(t)
                    },
                    toApp: function (t) {
                        var e = !1
                            , a = setInterval((function () {
                                e && clearInterval(a),
                                document.querySelector("#downAppSwitch") && (document.querySelector("#downAppSwitch").checked = !0,
                                    e = !0)
                            }
                        ), 200)
                    }
                });
                a(3153),
                    x()((function () {
                            new ia
                        }
                    ))
            }
            ,
            7619: (t, e, a) => {
                "use strict";
                a.d(e, {
                    fe: () => g,
                    A3: () => f,
                    Es: () => p,
                    nP: () => h
                });
                var o = a(9713)
                    , n = a.n(o)
                    , r = a(6479)
                    , i = a.n(r)
                    , s = a(8083);
                const c = function () {
                    return (0,
                        s.tZ)("a", {
                        href: "###",
                        title: "close",
                        className: "_close j_close",
                        children: (0,
                            s.tZ)("svg", {
                            dangerouslySetInnerHTML: {
                                __html: '<use xlink:href="#i-times"></use>'
                            }
                        })
                    })
                };

                function l(t, e) {
                    var a = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        e && (o = o.filter((function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }
                        ))),
                            a.push.apply(a, o)
                    }
                    return a
                }

                function d(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? l(Object(a), !0).forEach((function (e) {
                                n()(t, e, a[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            }
                        ))
                    }
                    return t
                }

                var h = function (t) {
                    var e = t.className
                        , a = void 0 === e ? "" : e
                        , o = i()(t, ["className"]);
                    return (0,
                        s.tZ)("div", d({
                        className: "g_mod_wrap ".concat(a)
                    }, o))
                }
                    , p = function (t) {
                    var e = t.className
                        , a = void 0 === e ? "" : e
                        , o = t.isClose
                        , n = void 0 === o || o
                        , r = t.title
                        , i = t.children;
                    return (0,
                        s.BX)("div", {
                        className: "g_mod ".concat(a),
                        children: [n ? (0,
                            s.tZ)(c, {}) : null, r ? (0,
                            s.tZ)(u, {
                            children: r
                        }) : null, i]
                    })
                }
                    , u = function (t) {
                    var e = t.className
                        , a = void 0 === e ? "" : e
                        , o = i()(t, ["className"]);
                    return (0,
                        s.tZ)("div", d({
                        className: "g_mod_hd ".concat(a)
                    }, o))
                }
                    , g = function (t) {
                    var e = t.className
                        , a = void 0 === e ? "" : e
                        , o = i()(t, ["className"]);
                    return (0,
                        s.tZ)("div", d({
                        className: "g_mod_bd ".concat(a)
                    }, o))
                }
                    , f = c
            }
            ,
            1956: (t, e, a) => {
                var o;
                void 0 === (o = function () {
                    var n = {};
                    return function (r, i, s) {
                        if (r) {
                            for (var c, l = {
                                8: "backspace",
                                9: "tab",
                                13: "enter",
                                16: "shift",
                                17: "ctrl",
                                18: "alt",
                                20: "capslock",
                                27: "esc",
                                32: "space",
                                33: "pageup",
                                34: "pagedown",
                                35: "end",
                                36: "home",
                                37: "left",
                                38: "up",
                                39: "right",
                                40: "down",
                                45: "ins",
                                46: "del",
                                91: "meta",
                                93: "meta",
                                224: "meta"
                            }, d = {
                                106: "*",
                                107: "+",
                                109: "-",
                                110: ".",
                                111: "/",
                                186: ";",
                                187: "=",
                                188: ",",
                                189: "-",
                                190: ".",
                                191: "/",
                                192: "`",
                                219: "[",
                                220: "\\",
                                221: "]",
                                222: "'"
                            }, h = {
                                "~": "`",
                                "!": "1",
                                "@": "2",
                                "#": "3",
                                $: "4",
                                "%": "5",
                                "^": "6",
                                "&": "7",
                                "*": "8",
                                "(": "9",
                                ")": "0",
                                _: "-",
                                "+": "=",
                                ":": ";",
                                '"': "'",
                                "<": ",",
                                ">": ".",
                                "?": "/",
                                "|": "\\"
                            }, p = {
                                option: "alt",
                                command: "meta",
                                return: "enter",
                                escape: "esc",
                                plus: "+",
                                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                            }, u = 1; u < 20; ++u)
                                l[111 + u] = "f" + u;
                            for (u = 0; u <= 9; ++u)
                                l[u + 96] = u.toString();
                            y.prototype.bind = function (t, e, a) {
                                var o = this;
                                return t = t instanceof Array ? t : [t],
                                    o._bindMultiple.call(o, t, e, a),
                                    o
                            }
                                ,
                                y.prototype.unbind = function (t, e) {
                                    return this.bind.call(this, t, (function () {
                                        }
                                    ), e)
                                }
                                ,
                                y.prototype.trigger = function (t, e) {
                                    var a = this;
                                    return a._directMap[t + ":" + e] && a._directMap[t + ":" + e]({}, t),
                                        a
                                }
                                ,
                                y.prototype.reset = function () {
                                    var t = this;
                                    return t._callbacks = {},
                                        t._directMap = {},
                                        t
                                }
                                ,
                                y.prototype.stopCallback = function (t, e) {
                                    return !((" " + e.className + " ").indexOf(" mousetrap ") > -1) && !b(e, this.target) && ("INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable)
                                }
                                ,
                                y.prototype.handleKey = function () {
                                    var t = this;
                                    return t._handleKey.apply(t, arguments)
                                }
                                ,
                                y.addKeycodes = function (t) {
                                    for (var e in t)
                                        t.hasOwnProperty(e) && (l[e] = t[e]);
                                    c = null
                                }
                                ,
                                y.init = function () {
                                    var t = y(i);
                                    for (var e in t)
                                        "_" !== e.charAt(0) && (y[e] = function (e) {
                                            return function () {
                                                return t[e].apply(t, arguments)
                                            }
                                        }(e))
                                }
                                ,
                                y.init(),
                                r.Mousetrap = y,
                                n = y,
                            t.exports && (t.exports = y),
                            void 0 === (o = function () {
                                return y
                            }
                                .call(e, a, e, t)) || (t.exports = o)
                        }

                        function g(t, e, a) {
                            t.addEventListener ? t.addEventListener(e, a, !1) : t.attachEvent("on" + e, a)
                        }

                        function f(t) {
                            if ("keypress" == t.type) {
                                var e = String.fromCharCode(t.which);
                                return t.shiftKey || (e = e.toLowerCase()),
                                    e
                            }
                            return l[t.which] ? l[t.which] : d[t.which] ? d[t.which] : String.fromCharCode(t.which).toLowerCase()
                        }

                        function m(t) {
                            return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
                        }

                        function v(t, e, a) {
                            return a || (a = function () {
                                if (!c)
                                    for (var t in c = {},
                                        l)
                                        t > 95 && t < 112 || l.hasOwnProperty(t) && (c[l[t]] = t);
                                return c
                            }()[t] ? "keydown" : "keypress"),
                            "keypress" == a && e.length && (a = "keydown"),
                                a
                        }

                        function _(t, e) {
                            var a, o, n, r = [];
                            for (a = function (t) {
                                return "+" === t ? ["+"] : (t = t.replace(/\+{2}/g, "+plus")).split("+")
                            }(t),
                                     n = 0; n < a.length; ++n)
                                o = a[n],
                                p[o] && (o = p[o]),
                                e && "keypress" != e && h[o] && (o = h[o],
                                    r.push("shift")),
                                m(o) && r.push(o);
                            return {
                                key: o,
                                modifiers: r,
                                action: e = v(o, r, e)
                            }
                        }

                        function b(t, e) {
                            return null !== t && t !== i && (t === e || b(t.parentNode, e))
                        }

                        function y(t) {
                            var e = this;
                            if (t = t || i,
                                !(e instanceof y))
                                return new y(t);
                            e.target = t,
                                e._callbacks = {},
                                e._directMap = {};
                            var a, o = {}, n = !1, r = !1, s = !1;

                            function c(t) {
                                t = t || {};
                                var e, a = !1;
                                for (e in o)
                                    t[e] ? a = !0 : o[e] = 0;
                                a || (s = !1)
                            }

                            function l(t, a, n, r, i, s) {
                                var c, l, d, h, p = [], u = n.type;
                                if (!e._callbacks[t])
                                    return [];
                                for ("keyup" == u && m(t) && (a = [t]),
                                         c = 0; c < e._callbacks[t].length; ++c)
                                    if (l = e._callbacks[t][c],
                                    (r || !l.seq || o[l.seq] == l.level) && u == l.action && ("keypress" == u && !n.metaKey && !n.ctrlKey || (d = a,
                                        h = l.modifiers,
                                    d.sort().join(",") === h.sort().join(",")))) {
                                        var g = !r && l.combo == i
                                            , f = r && l.seq == r && l.level == s;
                                        (g || f) && e._callbacks[t].splice(c, 1),
                                            p.push(l)
                                    }
                                return p
                            }

                            function d(t, a, o, n) {
                                e.stopCallback(a, a.target || a.srcElement, o, n) || !1 === t(a, o) && (function (t) {
                                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                                }(a),
                                    function (t) {
                                        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                                    }(a))
                            }

                            function h(t) {
                                "number" != typeof t.which && (t.which = t.keyCode);
                                var a = f(t);
                                a && ("keyup" != t.type || n !== a ? e.handleKey(a, function (t) {
                                    var e = [];
                                    return t.shiftKey && e.push("shift"),
                                    t.altKey && e.push("alt"),
                                    t.ctrlKey && e.push("ctrl"),
                                    t.metaKey && e.push("meta"),
                                        e
                                }(t), t) : n = !1)
                            }

                            function p(t, r, i, h, u) {
                                e._directMap[t + ":" + i] = r;
                                var g, m = (t = t.replace(/\s+/g, " ")).split(" ");
                                m.length > 1 ? function (t, e, r, i) {
                                    function l(e) {
                                        return function () {
                                            s = e,
                                                ++o[t],
                                                clearTimeout(a),
                                                a = setTimeout(c, 1e3)
                                        }
                                    }

                                    function h(e) {
                                        d(r, e, t),
                                        "keyup" !== i && (n = f(e)),
                                            setTimeout(c, 10)
                                    }

                                    o[t] = 0;
                                    for (var u = 0; u < e.length; ++u) {
                                        var g = u + 1 === e.length ? h : l(i || _(e[u + 1]).action);
                                        p(e[u], g, i, t, u)
                                    }
                                }(t, m, r, i) : (g = _(t, i),
                                    e._callbacks[g.key] = e._callbacks[g.key] || [],
                                    l(g.key, g.modifiers, {
                                        type: g.action
                                    }, h, t, u),
                                    e._callbacks[g.key][h ? "unshift" : "push"]({
                                        callback: r,
                                        modifiers: g.modifiers,
                                        action: g.action,
                                        seq: h,
                                        level: u,
                                        combo: t
                                    }))
                            }

                            e._handleKey = function (t, e, a) {
                                var o, n = l(t, e, a), i = {}, h = 0, p = !1;
                                for (o = 0; o < n.length; ++o)
                                    n[o].seq && (h = Math.max(h, n[o].level));
                                for (o = 0; o < n.length; ++o)
                                    if (n[o].seq) {
                                        if (n[o].level != h)
                                            continue;
                                        p = !0,
                                            i[n[o].seq] = 1,
                                            d(n[o].callback, a, n[o].combo, n[o].seq)
                                    } else
                                        p || d(n[o].callback, a, n[o].combo);
                                var u = "keypress" == a.type && r;
                                a.type != s || m(t) || u || c(i),
                                    r = p && "keydown" == a.type
                            }
                                ,
                                e._bindMultiple = function (t, e, a) {
                                    for (var o = 0; o < t.length; ++o)
                                        p(t[o], e, a)
                                }
                                ,
                                g(t, "keypress", h),
                                g(t, "keydown", h),
                                g(t, "keyup", h)
                        }
                    }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null),
                        n
                }
                    .call(e, a, e, t)) || (t.exports = o)
            }
            ,
            7312: (t, e, a) => {
                "use strict";
                t.exports = a.p + "en/images/imgPh.0615ec90.png"
            }
            ,
            6409: (t, e, a) => {
                "use strict";
                t.exports = a.p + "en/images/imgPh.4f7f9b3b.png"
            }
            ,
            4602: function (t, e, a) {
                var o;
                t = a.nmd(t),
                    function () {
                        "use strict";
                        var n, r, i = "object" == typeof a.g && a.g && a.g.Object === Object && a.g,
                            s = "object" == typeof self && self && self.Object === Object && self,
                            c = i || s || Function("return this")(), l = (e && !e.nodeType && e && t && t.nodeType,
                                c.QRCode);

                        function d(t, e, a) {
                            this.mode = p.MODE_8BIT_BYTE,
                                this.data = t,
                                this.parsedData = [];
                            for (var o = 0, n = this.data.length; o < n; o++) {
                                var r = []
                                    , i = this.data.charCodeAt(o);
                                e ? r[0] = i : i > 65536 ? (r[0] = 240 | (1835008 & i) >>> 18,
                                    r[1] = 128 | (258048 & i) >>> 12,
                                    r[2] = 128 | (4032 & i) >>> 6,
                                    r[3] = 128 | 63 & i) : i > 2048 ? (r[0] = 224 | (61440 & i) >>> 12,
                                    r[1] = 128 | (4032 & i) >>> 6,
                                    r[2] = 128 | 63 & i) : i > 128 ? (r[0] = 192 | (1984 & i) >>> 6,
                                    r[1] = 128 | 63 & i) : r[0] = i,
                                    this.parsedData.push(r)
                            }
                            this.parsedData = Array.prototype.concat.apply([], this.parsedData),
                            a || this.parsedData.length == this.data.length || (this.parsedData.unshift(191),
                                this.parsedData.unshift(187),
                                this.parsedData.unshift(239))
                        }

                        function h(t, e) {
                            this.typeNumber = t,
                                this.errorCorrectLevel = e,
                                this.modules = null,
                                this.moduleCount = 0,
                                this.dataCache = null,
                                this.dataList = []
                        }

                        d.prototype = {
                            getLength: function (t) {
                                return this.parsedData.length
                            },
                            write: function (t) {
                                for (var e = 0, a = this.parsedData.length; e < a; e++)
                                    t.put(this.parsedData[e], 8)
                            }
                        },
                            h.prototype = {
                                addData: function (t, e, a) {
                                    var o = new d(t, e, a);
                                    this.dataList.push(o),
                                        this.dataCache = null
                                },
                                isDark: function (t, e) {
                                    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                                        throw new Error(t + "," + e);
                                    return this.modules[t][e][0]
                                },
                                getEye: function (t, e) {
                                    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                                        throw new Error(t + "," + e);
                                    var a = this.modules[t][e];
                                    if (a[1]) {
                                        var o = "P" + a[1] + "_" + a[2];
                                        return "A" == a[2] && (o = "A" + a[1]),
                                            {
                                                isDark: a[0],
                                                type: o
                                            }
                                    }
                                    return null
                                },
                                getModuleCount: function () {
                                    return this.moduleCount
                                },
                                make: function () {
                                    this.makeImpl(!1, this.getBestMaskPattern())
                                },
                                makeImpl: function (t, e) {
                                    this.moduleCount = 4 * this.typeNumber + 17,
                                        this.modules = new Array(this.moduleCount);
                                    for (var a = 0; a < this.moduleCount; a++) {
                                        this.modules[a] = new Array(this.moduleCount);
                                        for (var o = 0; o < this.moduleCount; o++)
                                            this.modules[a][o] = []
                                    }
                                    this.setupPositionProbePattern(0, 0, "TL"),
                                        this.setupPositionProbePattern(this.moduleCount - 7, 0, "BL"),
                                        this.setupPositionProbePattern(0, this.moduleCount - 7, "TR"),
                                        this.setupPositionAdjustPattern("A"),
                                        this.setupTimingPattern(),
                                        this.setupTypeInfo(t, e),
                                    this.typeNumber >= 7 && this.setupTypeNumber(t),
                                    null == this.dataCache && (this.dataCache = h.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                                        this.mapData(this.dataCache, e)
                                },
                                setupPositionProbePattern: function (t, e, a) {
                                    for (var o = -1; o <= 7; o++)
                                        if (!(t + o <= -1 || this.moduleCount <= t + o))
                                            for (var n = -1; n <= 7; n++)
                                                e + n <= -1 || this.moduleCount <= e + n || (0 <= o && o <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == o || 6 == o) || 2 <= o && o <= 4 && 2 <= n && n <= 4 ? (this.modules[t + o][e + n][0] = !0,
                                                    this.modules[t + o][e + n][2] = a,
                                                    this.modules[t + o][e + n][1] = -0 == o || -0 == n || 6 == o || 6 == n ? "O" : "I") : this.modules[t + o][e + n][0] = !1)
                                },
                                getBestMaskPattern: function () {
                                    for (var t = 0, e = 0, a = 0; a < 8; a++) {
                                        this.makeImpl(!0, a);
                                        var o = g.getLostPoint(this);
                                        (0 == a || t > o) && (t = o,
                                            e = a)
                                    }
                                    return e
                                },
                                createMovieClip: function (t, e, a) {
                                    var o = t.createEmptyMovieClip(e, a);
                                    this.make();
                                    for (var n = 0; n < this.modules.length; n++)
                                        for (var r = 1 * n, i = 0; i < this.modules[n].length; i++) {
                                            var s = 1 * i;
                                            this.modules[n][i][0] && (o.beginFill(0, 100),
                                                o.moveTo(s, r),
                                                o.lineTo(s + 1, r),
                                                o.lineTo(s + 1, r + 1),
                                                o.lineTo(s, r + 1),
                                                o.endFill())
                                        }
                                    return o
                                },
                                setupTimingPattern: function () {
                                    for (var t = 8; t < this.moduleCount - 8; t++)
                                        null == this.modules[t][6][0] && (this.modules[t][6][0] = t % 2 == 0);
                                    for (var e = 8; e < this.moduleCount - 8; e++)
                                        null == this.modules[6][e][0] && (this.modules[6][e][0] = e % 2 == 0)
                                },
                                setupPositionAdjustPattern: function (t) {
                                    for (var e = g.getPatternPosition(this.typeNumber), a = 0; a < e.length; a++)
                                        for (var o = 0; o < e.length; o++) {
                                            var n = e[a]
                                                , r = e[o];
                                            if (null == this.modules[n][r][0])
                                                for (var i = -2; i <= 2; i++)
                                                    for (var s = -2; s <= 2; s++)
                                                        -2 == i || 2 == i || -2 == s || 2 == s || 0 == i && 0 == s ? (this.modules[n + i][r + s][0] = !0,
                                                            this.modules[n + i][r + s][2] = t,
                                                            this.modules[n + i][r + s][1] = -2 == i || -2 == s || 2 == i || 2 == s ? "O" : "I") : this.modules[n + i][r + s][0] = !1
                                        }
                                },
                                setupTypeNumber: function (t) {
                                    for (var e = g.getBCHTypeNumber(this.typeNumber), a = 0; a < 18; a++) {
                                        var o = !t && 1 == (e >> a & 1);
                                        this.modules[Math.floor(a / 3)][a % 3 + this.moduleCount - 8 - 3][0] = o
                                    }
                                    for (a = 0; a < 18; a++)
                                        o = !t && 1 == (e >> a & 1),
                                            this.modules[a % 3 + this.moduleCount - 8 - 3][Math.floor(a / 3)][0] = o
                                },
                                setupTypeInfo: function (t, e) {
                                    for (var a = this.errorCorrectLevel << 3 | e, o = g.getBCHTypeInfo(a), n = 0; n < 15; n++) {
                                        var r = !t && 1 == (o >> n & 1);
                                        n < 6 ? this.modules[n][8][0] = r : n < 8 ? this.modules[n + 1][8][0] = r : this.modules[this.moduleCount - 15 + n][8][0] = r
                                    }
                                    for (n = 0; n < 15; n++)
                                        r = !t && 1 == (o >> n & 1),
                                            n < 8 ? this.modules[8][this.moduleCount - n - 1][0] = r : n < 9 ? this.modules[8][15 - n - 1 + 1][0] = r : this.modules[8][15 - n - 1][0] = r;
                                    this.modules[this.moduleCount - 8][8][0] = !t
                                },
                                mapData: function (t, e) {
                                    for (var a = -1, o = this.moduleCount - 1, n = 7, r = 0, i = this.moduleCount - 1; i > 0; i -= 2)
                                        for (6 == i && i--; ;) {
                                            for (var s = 0; s < 2; s++)
                                                if (null == this.modules[o][i - s][0]) {
                                                    var c = !1;
                                                    r < t.length && (c = 1 == (t[r] >>> n & 1)),
                                                    g.getMask(e, o, i - s) && (c = !c),
                                                        this.modules[o][i - s][0] = c,
                                                    -1 == --n && (r++,
                                                        n = 7)
                                                }
                                            if ((o += a) < 0 || this.moduleCount <= o) {
                                                o -= a,
                                                    a = -a;
                                                break
                                            }
                                        }
                                }
                            },
                            h.PAD0 = 236,
                            h.PAD1 = 17,
                            h.createData = function (t, e, a) {
                                for (var o = _.getRSBlocks(t, e), n = new b, r = 0; r < a.length; r++) {
                                    var i = a[r];
                                    n.put(i.mode, 4),
                                        n.put(i.getLength(), g.getLengthInBits(i.mode, t)),
                                        i.write(n)
                                }
                                var s = 0;
                                for (r = 0; r < o.length; r++)
                                    s += o[r].dataCount;
                                if (n.getLengthInBits() > 8 * s)
                                    throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * s + ")");
                                for (n.getLengthInBits() + 4 <= 8 * s && n.put(0, 4); n.getLengthInBits() % 8 != 0;)
                                    n.putBit(!1);
                                for (; !(n.getLengthInBits() >= 8 * s || (n.put(h.PAD0, 8),
                                n.getLengthInBits() >= 8 * s));)
                                    n.put(h.PAD1, 8);
                                return h.createBytes(n, o)
                            }
                            ,
                            h.createBytes = function (t, e) {
                                for (var a = 0, o = 0, n = 0, r = new Array(e.length), i = new Array(e.length), s = 0; s < e.length; s++) {
                                    var c = e[s].dataCount
                                        , l = e[s].totalCount - c;
                                    o = Math.max(o, c),
                                        n = Math.max(n, l),
                                        r[s] = new Array(c);
                                    for (var d = 0; d < r[s].length; d++)
                                        r[s][d] = 255 & t.buffer[d + a];
                                    a += c;
                                    var h = g.getErrorCorrectPolynomial(l)
                                        , p = new v(r[s], h.getLength() - 1).mod(h);
                                    for (i[s] = new Array(h.getLength() - 1),
                                             d = 0; d < i[s].length; d++) {
                                        var u = d + p.getLength() - i[s].length;
                                        i[s][d] = u >= 0 ? p.get(u) : 0
                                    }
                                }
                                var f = 0;
                                for (d = 0; d < e.length; d++)
                                    f += e[d].totalCount;
                                var m = new Array(f)
                                    , _ = 0;
                                for (d = 0; d < o; d++)
                                    for (s = 0; s < e.length; s++)
                                        d < r[s].length && (m[_++] = r[s][d]);
                                for (d = 0; d < n; d++)
                                    for (s = 0; s < e.length; s++)
                                        d < i[s].length && (m[_++] = i[s][d]);
                                return m
                            }
                        ;
                        for (var p = {
                            MODE_NUMBER: 1,
                            MODE_ALPHA_NUM: 2,
                            MODE_8BIT_BYTE: 4,
                            MODE_KANJI: 8
                        }, u = {
                            L: 1,
                            M: 0,
                            Q: 3,
                            H: 2
                        }, g = {
                            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                            G15: 1335,
                            G18: 7973,
                            G15_MASK: 21522,
                            getBCHTypeInfo: function (t) {
                                for (var e = t << 10; g.getBCHDigit(e) - g.getBCHDigit(g.G15) >= 0;)
                                    e ^= g.G15 << g.getBCHDigit(e) - g.getBCHDigit(g.G15);
                                return (t << 10 | e) ^ g.G15_MASK
                            },
                            getBCHTypeNumber: function (t) {
                                for (var e = t << 12; g.getBCHDigit(e) - g.getBCHDigit(g.G18) >= 0;)
                                    e ^= g.G18 << g.getBCHDigit(e) - g.getBCHDigit(g.G18);
                                return t << 12 | e
                            },
                            getBCHDigit: function (t) {
                                for (var e = 0; 0 != t;)
                                    e++,
                                        t >>>= 1;
                                return e
                            },
                            getPatternPosition: function (t) {
                                return g.PATTERN_POSITION_TABLE[t - 1]
                            },
                            getMask: function (t, e, a) {
                                switch (t) {
                                    case 0:
                                        return (e + a) % 2 == 0;
                                    case 1:
                                        return e % 2 == 0;
                                    case 2:
                                        return a % 3 == 0;
                                    case 3:
                                        return (e + a) % 3 == 0;
                                    case 4:
                                        return (Math.floor(e / 2) + Math.floor(a / 3)) % 2 == 0;
                                    case 5:
                                        return e * a % 2 + e * a % 3 == 0;
                                    case 6:
                                        return (e * a % 2 + e * a % 3) % 2 == 0;
                                    case 7:
                                        return (e * a % 3 + (e + a) % 2) % 2 == 0;
                                    default:
                                        throw new Error("bad maskPattern:" + t)
                                }
                            },
                            getErrorCorrectPolynomial: function (t) {
                                for (var e = new v([1], 0), a = 0; a < t; a++)
                                    e = e.multiply(new v([1, f.gexp(a)], 0));
                                return e
                            },
                            getLengthInBits: function (t, e) {
                                if (1 <= e && e < 10)
                                    switch (t) {
                                        case p.MODE_NUMBER:
                                            return 10;
                                        case p.MODE_ALPHA_NUM:
                                            return 9;
                                        case p.MODE_8BIT_BYTE:
                                        case p.MODE_KANJI:
                                            return 8;
                                        default:
                                            throw new Error("mode:" + t)
                                    }
                                else if (e < 27)
                                    switch (t) {
                                        case p.MODE_NUMBER:
                                            return 12;
                                        case p.MODE_ALPHA_NUM:
                                            return 11;
                                        case p.MODE_8BIT_BYTE:
                                            return 16;
                                        case p.MODE_KANJI:
                                            return 10;
                                        default:
                                            throw new Error("mode:" + t)
                                    }
                                else {
                                    if (!(e < 41))
                                        throw new Error("type:" + e);
                                    switch (t) {
                                        case p.MODE_NUMBER:
                                            return 14;
                                        case p.MODE_ALPHA_NUM:
                                            return 13;
                                        case p.MODE_8BIT_BYTE:
                                            return 16;
                                        case p.MODE_KANJI:
                                            return 12;
                                        default:
                                            throw new Error("mode:" + t)
                                    }
                                }
                            },
                            getLostPoint: function (t) {
                                for (var e = t.getModuleCount(), a = 0, o = 0; o < e; o++)
                                    for (var n = 0; n < e; n++) {
                                        for (var r = 0, i = t.isDark(o, n), s = -1; s <= 1; s++)
                                            if (!(o + s < 0 || e <= o + s))
                                                for (var c = -1; c <= 1; c++)
                                                    n + c < 0 || e <= n + c || 0 == s && 0 == c || i == t.isDark(o + s, n + c) && r++;
                                        r > 5 && (a += 3 + r - 5)
                                    }
                                for (o = 0; o < e - 1; o++)
                                    for (n = 0; n < e - 1; n++) {
                                        var l = 0;
                                        t.isDark(o, n) && l++,
                                        t.isDark(o + 1, n) && l++,
                                        t.isDark(o, n + 1) && l++,
                                        t.isDark(o + 1, n + 1) && l++,
                                        0 != l && 4 != l || (a += 3)
                                    }
                                for (o = 0; o < e; o++)
                                    for (n = 0; n < e - 6; n++)
                                        t.isDark(o, n) && !t.isDark(o, n + 1) && t.isDark(o, n + 2) && t.isDark(o, n + 3) && t.isDark(o, n + 4) && !t.isDark(o, n + 5) && t.isDark(o, n + 6) && (a += 40);
                                for (n = 0; n < e; n++)
                                    for (o = 0; o < e - 6; o++)
                                        t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (a += 40);
                                var d = 0;
                                for (n = 0; n < e; n++)
                                    for (o = 0; o < e; o++)
                                        t.isDark(o, n) && d++;
                                return a + Math.abs(100 * d / e / e - 50) / 5 * 10
                            }
                        }, f = {
                            glog: function (t) {
                                if (t < 1)
                                    throw new Error("glog(" + t + ")");
                                return f.LOG_TABLE[t]
                            },
                            gexp: function (t) {
                                for (; t < 0;)
                                    t += 255;
                                for (; t >= 256;)
                                    t -= 255;
                                return f.EXP_TABLE[t]
                            },
                            EXP_TABLE: new Array(256),
                            LOG_TABLE: new Array(256)
                        }, m = 0; m < 8; m++)
                            f.EXP_TABLE[m] = 1 << m;
                        for (m = 8; m < 256; m++)
                            f.EXP_TABLE[m] = f.EXP_TABLE[m - 4] ^ f.EXP_TABLE[m - 5] ^ f.EXP_TABLE[m - 6] ^ f.EXP_TABLE[m - 8];
                        for (m = 0; m < 255; m++)
                            f.LOG_TABLE[f.EXP_TABLE[m]] = m;

                        function v(t, e) {
                            if (t.length == n)
                                throw new Error(t.length + "/" + e);
                            for (var a = 0; a < t.length && 0 == t[a];)
                                a++;
                            this.num = new Array(t.length - a + e);
                            for (var o = 0; o < t.length - a; o++)
                                this.num[o] = t[o + a]
                        }

                        function _(t, e) {
                            this.totalCount = t,
                                this.dataCount = e
                        }

                        function b() {
                            this.buffer = [],
                                this.length = 0
                        }

                        v.prototype = {
                            get: function (t) {
                                return this.num[t]
                            },
                            getLength: function () {
                                return this.num.length
                            },
                            multiply: function (t) {
                                for (var e = new Array(this.getLength() + t.getLength() - 1), a = 0; a < this.getLength(); a++)
                                    for (var o = 0; o < t.getLength(); o++)
                                        e[a + o] ^= f.gexp(f.glog(this.get(a)) + f.glog(t.get(o)));
                                return new v(e, 0)
                            },
                            mod: function (t) {
                                if (this.getLength() - t.getLength() < 0)
                                    return this;
                                for (var e = f.glog(this.get(0)) - f.glog(t.get(0)), a = new Array(this.getLength()), o = 0; o < this.getLength(); o++)
                                    a[o] = this.get(o);
                                for (o = 0; o < t.getLength(); o++)
                                    a[o] ^= f.gexp(f.glog(t.get(o)) + e);
                                return new v(a, 0).mod(t)
                            }
                        },
                            _.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                            _.getRSBlocks = function (t, e) {
                                var a = _.getRsBlockTable(t, e);
                                if (a == n)
                                    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                                for (var o = a.length / 3, r = [], i = 0; i < o; i++)
                                    for (var s = a[3 * i + 0], c = a[3 * i + 1], l = a[3 * i + 2], d = 0; d < s; d++)
                                        r.push(new _(c, l));
                                return r
                            }
                            ,
                            _.getRsBlockTable = function (t, e) {
                                switch (e) {
                                    case u.L:
                                        return _.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                                    case u.M:
                                        return _.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                                    case u.Q:
                                        return _.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                                    case u.H:
                                        return _.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                                    default:
                                        return n
                                }
                            }
                            ,
                            b.prototype = {
                                get: function (t) {
                                    var e = Math.floor(t / 8);
                                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                                },
                                put: function (t, e) {
                                    for (var a = 0; a < e; a++)
                                        this.putBit(1 == (t >>> e - a - 1 & 1))
                                },
                                getLengthInBits: function () {
                                    return this.length
                                },
                                putBit: function (t) {
                                    var e = Math.floor(this.length / 8);
                                    this.buffer.length <= e && this.buffer.push(0),
                                    t && (this.buffer[e] |= 128 >>> this.length % 8),
                                        this.length++
                                }
                            };
                        var y = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];

                        function C() {
                            var t = !1
                                , e = navigator.userAgent;
                            if (/android/i.test(e)) {
                                t = !0;
                                var a = e.toString().match(/android ([0-9]\.[0-9])/i);
                                a && a[1] && (t = parseFloat(a[1]))
                            }
                            return t
                        }

                        var I = "undefined" == typeof CanvasRenderingContext2D ? function () {
                            var t = function (t, e) {
                                this._el = t,
                                    this._htOption = e
                            };
                            return t.prototype.draw = function (t) {
                                var e = this._htOption
                                    , a = this._el
                                    , o = t.getModuleCount()
                                    , n = Math.round(e.width / o)
                                    , r = Math.round((e.height - e.titleHeight) / o);
                                n <= 1 && (n = 1),
                                r <= 1 && (r = 1),
                                    this._htOption.width = n * o,
                                    this._htOption.height = r * o + e.titleHeight,
                                    this._htOption.quietZone = Math.round(this._htOption.quietZone);
                                var i = []
                                    , s = ""
                                    , c = Math.round(n * e.dotScale)
                                    , l = Math.round(r * e.dotScale);
                                c < 4 && (c = 4,
                                    l = 4);
                                var d = e.colorDark
                                    , h = e.colorLight;
                                if (e.backgroundImage) {
                                    e.autoColor ? (e.colorDark = "rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');",
                                        e.colorLight = "rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');") : e.colorLight = "rgba(0,0,0,0)";
                                    var p = '<div style="display:inline-block; z-index:-10;position:absolute;"><img src="' + e.backgroundImage + '" widht="' + (e.width + 2 * e.quietZone) + '" height="' + (e.height + 2 * e.quietZone) + '" style="opacity:' + e.backgroundImageAlpha + ";filter:alpha(opacity=" + 100 * e.backgroundImageAlpha + '); "/></div>';
                                    i.push(p)
                                }
                                if (e.quietZone && (s = "display:inline-block; width:" + (e.width + 2 * e.quietZone) + "px; height:" + (e.width + 2 * e.quietZone) + "px;background:" + e.quietZoneColor + "; text-align:center;"),
                                    i.push('<div style="font-size:0;' + s + '">'),
                                    i.push('<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:' + e.quietZone + 'px;" border="0" cellspacing="0" cellspadding="0" align="center" valign="middle">'),
                                    i.push('<tr height="' + e.titleHeight + '" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="' + o + '">'),
                                    e.title) {
                                    var u = e.titleColor
                                        , g = e.titleFont;
                                    i.push('<div style="width:100%;margin-top:' + e.titleTop + "px;color:" + u + ";font:" + g + ";background:" + e.titleBackgroundColor + '">' + e.title + "</div>")
                                }
                                e.subTitle && i.push('<div style="width:100%;margin-top:' + (e.subTitleTop - e.titleTop) + "px;color:" + e.subTitleColor + "; font:" + e.subTitleFont + '">' + e.subTitle + "</div>"),
                                    i.push("</td></tr>");
                                for (var f = 0; f < o; f++) {
                                    i.push('<tr style="border:0; padding:0; margin:0;" height="7">');
                                    for (var m = 0; m < o; m++) {
                                        var v = t.isDark(f, m)
                                            , _ = t.getEye(f, m);
                                        if (_) {
                                            v = _.isDark;
                                            var b = _.type
                                                , y = e[b] || e[b.substring(0, 2)] || d;
                                            i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + r + 'px;"><span style="width:' + n + "px;height:" + r + "px;background-color:" + (v ? y : h) + ';display:inline-block"></span></td>')
                                        } else {
                                            var C = e.colorDark;
                                            6 == f ? (C = e.timing_H || e.timing || d,
                                                i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + r + "px;background-color:" + (v ? C : h) + ';"></td>')) : 6 == m ? (C = e.timing_V || e.timing || d,
                                                i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + r + "px;background-color:" + (v ? C : h) + ';"></td>')) : i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + n + "px;height:" + r + 'px;"><div style="display:inline-block;width:' + c + "px;height:" + l + "px;background-color:" + (v ? C : e.colorLight) + ';"></div></td>')
                                        }
                                    }
                                    i.push("</tr>")
                                }
                                if (i.push("</table>"),
                                    i.push("</div>"),
                                    e.logo) {
                                    var I = new Image;
                                    null != e.crossOrigin && (I.crossOrigin = e.crossOrigin),
                                        I.src = e.logo;
                                    var w = e.width / 3.5
                                        , k = e.height / 3.5;
                                    w != k && (w = k),
                                    e.logoWidth && (w = e.logoWidth),
                                    e.logoHeight && (k = e.logoHeight);
                                    var P = "position:relative; z-index:1;display:table-cell;top:-" + ((e.height - e.titleHeight) / 2 + k / 2 + e.quietZone) + "px;text-align:center; width:" + w + "px; height:" + k + "px;line-height:" + w + "px; vertical-align: middle;";
                                    e.logoBackgroundTransparent || (P += "background:" + e.logoBackgroundColor),
                                        i.push('<div style="' + P + '"><img  src="' + e.logo + '"  style="max-width: ' + w + "px; max-height: " + k + 'px;" /> <div style=" display: none; width:1px;margin-left: -1px;"></div></div>')
                                }
                                e.onRenderingStart && e.onRenderingStart(e),
                                    a.innerHTML = i.join("");
                                var S = a.childNodes[0]
                                    , A = (e.width - S.offsetWidth) / 2
                                    , T = (e.height - S.offsetHeight) / 2;
                                A > 0 && T > 0 && (S.style.margin = T + "px " + A + "px"),
                                this._htOption.onRenderingEnd && this._htOption.onRenderingEnd(this._htOption, null)
                            }
                                ,
                                t.prototype.clear = function () {
                                    this._el.innerHTML = ""
                                }
                                ,
                                t
                        }() : function () {
                            function t() {
                                if ("svg" == this._htOption.drawer) {
                                    var t = this._oContext.getSerializedSvg(!0);
                                    this.dataURL = t,
                                        this._el.innerHTML = t
                                } else
                                    try {
                                        var e = this._elCanvas.toDataURL("image/png");
                                        this.dataURL = e
                                    } catch (t) {
                                        console.error(t)
                                    }
                                this._htOption.onRenderingEnd && (this.dataURL || console.error("Can not get base64 data, please check: 1. Published the page and image to the server 2. The image request support CORS 3. Configured `crossOrigin:'anonymous'` option"),
                                    this._htOption.onRenderingEnd(this._htOption, this.dataURL))
                            }

                            if (c._android && c._android <= 2.1) {
                                var e = 1 / window.devicePixelRatio
                                    , a = CanvasRenderingContext2D.prototype.drawImage;
                                CanvasRenderingContext2D.prototype.drawImage = function (t, o, n, r, i, s, c, l, d) {
                                    if ("nodeName" in t && /img/i.test(t.nodeName))
                                        for (var h = arguments.length - 1; h >= 1; h--)
                                            arguments[h] = arguments[h] * e;
                                    else
                                        void 0 === l && (arguments[1] *= e,
                                            arguments[2] *= e,
                                            arguments[3] *= e,
                                            arguments[4] *= e);
                                    a.apply(this, arguments)
                                }
                            }

                            function o(t, e) {
                                var a = this;
                                if (a._fFail = e,
                                    a._fSuccess = t,
                                null === a._bSupportDataURI) {
                                    var o = document.createElement("img")
                                        , n = function () {
                                        a._bSupportDataURI = !1,
                                        a._fFail && a._fFail.call(a)
                                    };
                                    return o.onabort = n,
                                        o.onerror = n,
                                        o.onload = function () {
                                            a._bSupportDataURI = !0,
                                            a._fSuccess && a._fSuccess.call(a)
                                        }
                                        ,
                                        void (o.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                                }
                                !0 === a._bSupportDataURI && a._fSuccess ? a._fSuccess.call(a) : !1 === a._bSupportDataURI && a._fFail && a._fFail.call(a)
                            }

                            var n = function (t, e) {
                                this._bIsPainted = !1,
                                    this._android = C(),
                                    this._el = t,
                                    this._htOption = e,
                                    "svg" == this._htOption.drawer ? (this._oContext = {},
                                        this._elCanvas = {}) : (this._elCanvas = document.createElement("canvas"),
                                        this._el.appendChild(this._elCanvas),
                                        this._oContext = this._elCanvas.getContext("2d")),
                                    this._bSupportDataURI = null,
                                    this.dataURL = null
                            };
                            return n.prototype.draw = function (t) {
                                var e = this._htOption
                                    , a = t.getModuleCount()
                                    , o = Math.round(e.width / a)
                                    , n = Math.round((e.height - e.titleHeight) / a);
                                o <= 1 && (o = 1),
                                n <= 1 && (n = 1),
                                    e.width = o * a,
                                    e.height = n * a + e.titleHeight,
                                    e.quietZone = Math.round(e.quietZone),
                                    this._elCanvas.width = e.width + 2 * e.quietZone,
                                    this._elCanvas.height = e.height + 2 * e.quietZone,
                                "canvas" != this._htOption.drawer && (this._oContext = new C2S(this._elCanvas.width, this._elCanvas.height)),
                                    this.clear();
                                var r = this._oContext;
                                r.lineWidth = 0,
                                    r.fillStyle = e.colorLight,
                                    r.fillRect(0, 0, this._elCanvas.width, this._elCanvas.height);
                                var i = this;

                                function s() {
                                    e.quietZone > 0 && e.quietZoneColor && (r.lineWidth = 0,
                                        r.fillStyle = e.quietZoneColor,
                                        r.fillRect(0, 0, i._elCanvas.width, e.quietZone),
                                        r.fillRect(0, e.quietZone, e.quietZone, i._elCanvas.height - 2 * e.quietZone),
                                        r.fillRect(i._elCanvas.width - e.quietZone, e.quietZone, e.quietZone, i._elCanvas.height - 2 * e.quietZone),
                                        r.fillRect(0, i._elCanvas.height - e.quietZone, i._elCanvas.width, e.quietZone))
                                }

                                if (e.backgroundImage) {
                                    var c = new Image;
                                    c.onload = function () {
                                        r.globalAlpha = 1,
                                            r.globalAlpha = e.backgroundImageAlpha;
                                        var a = r.imageSmoothingQuality
                                            , o = r.imageSmoothingEnabled;
                                        r.imageSmoothingEnabled = !0,
                                            r.imageSmoothingQuality = "high",
                                            r.drawImage(c, 0, e.titleHeight, e.width + 2 * e.quietZone, e.height + 2 * e.quietZone - e.titleHeight),
                                            r.imageSmoothingEnabled = o,
                                            r.imageSmoothingQuality = a,
                                            r.globalAlpha = 1,
                                            l.call(i, t)
                                    }
                                        ,
                                    null != e.crossOrigin && (c.crossOrigin = e.crossOrigin),
                                        c.originalSrc = e.backgroundImage,
                                        c.src = e.backgroundImage
                                } else
                                    l.call(i, t);

                                function l(t) {
                                    e.onRenderingStart && e.onRenderingStart(e);
                                    for (var i = 0; i < a; i++)
                                        for (var c = 0; c < a; c++) {
                                            var l, d, h = c * o + e.quietZone, p = i * n + e.quietZone,
                                                u = t.isDark(i, c), g = t.getEye(i, c), f = e.dotScale;
                                            r.lineWidth = 0,
                                                g ? (l = e[g.type] || e[g.type.substring(0, 2)] || e.colorDark,
                                                    d = e.colorLight) : e.backgroundImage ? (d = "rgba(0,0,0,0)",
                                                    6 == i ? e.autoColor ? (l = e.timing_H || e.timing || e.autoColorDark,
                                                        d = e.autoColorLight) : l = e.timing_H || e.timing || e.colorDark : 6 == c ? e.autoColor ? (l = e.timing_V || e.timing || e.autoColorDark,
                                                        d = e.autoColorLight) : l = e.timing_V || e.timing || e.colorDark : e.autoColor ? (l = e.autoColorDark,
                                                        d = e.autoColorLight) : l = e.colorDark) : (l = 6 == i ? e.timing_H || e.timing || e.colorDark : 6 == c && (e.timing_V || e.timing) || e.colorDark,
                                                    d = e.colorLight),
                                                r.strokeStyle = u ? l : d,
                                                r.fillStyle = u ? l : d,
                                                g ? (f = "AO" == g.type ? e.dotScaleAO : "AI" == g.type ? e.dotScaleAI : 1,
                                                    e.backgroundImage && e.autoColor ? (l = ("AO" == g.type ? e.AI : e.AO) || e.autoColorDark,
                                                        d = e.autoColorLight) : l = ("AO" == g.type ? e.AI : e.AO) || l,
                                                    u = g.isDark,
                                                    r.fillRect(h + o * (1 - f) / 2, e.titleHeight + p + n * (1 - f) / 2, o * f, n * f)) : 6 == i ? (f = e.dotScaleTiming_H,
                                                    r.fillRect(h + o * (1 - f) / 2, e.titleHeight + p + n * (1 - f) / 2, o * f, n * f)) : 6 == c ? (f = e.dotScaleTiming_V,
                                                    r.fillRect(h + o * (1 - f) / 2, e.titleHeight + p + n * (1 - f) / 2, o * f, n * f)) : (e.backgroundImage,
                                                    r.fillRect(h + o * (1 - f) / 2, e.titleHeight + p + n * (1 - f) / 2, o * f, n * f)),
                                            1 == e.dotScale || g || (r.strokeStyle = e.colorLight)
                                        }
                                    if (e.title && (r.fillStyle = e.titleBackgroundColor,
                                        r.fillRect(0, 0, this._elCanvas.width, e.titleHeight + e.quietZone),
                                        r.font = e.titleFont,
                                        r.fillStyle = e.titleColor,
                                        r.textAlign = "center",
                                        r.fillText(e.title, this._elCanvas.width / 2, +e.quietZone + e.titleTop)),
                                    e.subTitle && (r.font = e.subTitleFont,
                                        r.fillStyle = e.subTitleColor,
                                        r.fillText(e.subTitle, this._elCanvas.width / 2, +e.quietZone + e.subTitleTop)),
                                        e.logo) {
                                        var m = new Image
                                            , v = this;
                                        m.onload = function () {
                                            !function (t) {
                                                var a, o, n = Math.round(e.width / 3.5), i = Math.round(e.height / 3.5);
                                                n !== i && (n = i),
                                                    e.logoMaxWidth ? n = Math.round(e.logoMaxWidth) : e.logoWidth && (n = Math.round(e.logoWidth)),
                                                    e.logoMaxHeight ? i = Math.round(e.logoMaxHeight) : e.logoHeight && (i = Math.round(e.logoHeight)),
                                                    void 0 === t.naturalWidth ? (a = t.width,
                                                        o = t.height) : (a = t.naturalWidth,
                                                        o = t.naturalHeight),
                                                (e.logoMaxWidth || e.logoMaxHeight) && (e.logoMaxWidth && a <= n && (n = a),
                                                e.logoMaxHeight && o <= i && (i = o),
                                                a <= n && o <= i && (n = a,
                                                    i = o));
                                                var c = (e.width + 2 * e.quietZone - n) / 2
                                                    , l = (e.height + e.titleHeight + 2 * e.quietZone - i) / 2
                                                    , d = Math.min(n / a, i / o)
                                                    , h = a * d
                                                    , p = o * d;
                                                (e.logoMaxWidth || e.logoMaxHeight) && (n = h,
                                                    i = p,
                                                    c = (e.width + 2 * e.quietZone - n) / 2,
                                                    l = (e.height + e.titleHeight + 2 * e.quietZone - i) / 2),
                                                e.logoBackgroundTransparent || (r.fillStyle = e.logoBackgroundColor,
                                                    r.fillRect(c, l, n, i));
                                                var u = r.imageSmoothingQuality
                                                    , g = r.imageSmoothingEnabled;
                                                r.imageSmoothingEnabled = !0,
                                                    r.imageSmoothingQuality = "high",
                                                    r.drawImage(t, c + (n - h) / 2, l + (i - p) / 2, h, p),
                                                    r.imageSmoothingEnabled = g,
                                                    r.imageSmoothingQuality = u,
                                                    s(),
                                                    v._bIsPainted = !0,
                                                    v.makeImage()
                                            }(m)
                                        }
                                            ,
                                            m.onerror = function (t) {
                                                console.error(t)
                                            }
                                            ,
                                        null != e.crossOrigin && (m.crossOrigin = e.crossOrigin),
                                            m.originalSrc = e.logo,
                                            m.src = e.logo
                                    } else
                                        s(),
                                            this._bIsPainted = !0,
                                            this.makeImage()
                                }
                            }
                                ,
                                n.prototype.makeImage = function () {
                                    this._bIsPainted && o.call(this, t)
                                }
                                ,
                                n.prototype.isPainted = function () {
                                    return this._bIsPainted
                                }
                                ,
                                n.prototype.clear = function () {
                                    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                                        this._bIsPainted = !1
                                }
                                ,
                                n.prototype.remove = function () {
                                    this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                                        this._bIsPainted = !1,
                                        this._el.innerHTML = ""
                                }
                                ,
                                n.prototype.round = function (t) {
                                    return t ? Math.floor(1e3 * t) / 1e3 : t
                                }
                                ,
                                n
                        }();
                        (r = function (t, e) {
                                if (this._htOption = {
                                    width: 256,
                                    height: 256,
                                    typeNumber: 4,
                                    colorDark: "#000000",
                                    colorLight: "#ffffff",
                                    correctLevel: u.H,
                                    dotScale: 1,
                                    dotScaleTiming: 1,
                                    dotScaleTiming_H: n,
                                    dotScaleTiming_V: n,
                                    dotScaleA: 1,
                                    dotScaleAO: n,
                                    dotScaleAI: n,
                                    quietZone: 0,
                                    quietZoneColor: "rgba(0,0,0,0)",
                                    title: "",
                                    titleFont: "normal normal bold 16px Arial",
                                    titleColor: "#000000",
                                    titleBackgroundColor: "#ffffff",
                                    titleHeight: 0,
                                    titleTop: 30,
                                    subTitle: "",
                                    subTitleFont: "normal normal normal 14px Arial",
                                    subTitleColor: "#4F4F4F",
                                    subTitleTop: 60,
                                    logo: n,
                                    logoWidth: n,
                                    logoHeight: n,
                                    logoMaxWidth: n,
                                    logoMaxHeight: n,
                                    logoBackgroundColor: "#ffffff",
                                    logoBackgroundTransparent: !1,
                                    PO: n,
                                    PI: n,
                                    PO_TL: n,
                                    PI_TL: n,
                                    PO_TR: n,
                                    PI_TR: n,
                                    PO_BL: n,
                                    PI_BL: n,
                                    AO: n,
                                    AI: n,
                                    timing: n,
                                    timing_H: n,
                                    timing_V: n,
                                    backgroundImage: n,
                                    backgroundImageAlpha: 1,
                                    autoColor: !1,
                                    autoColorDark: "rgba(0, 0, 0, .6)",
                                    autoColorLight: "rgba(255, 255, 255, .7)",
                                    onRenderingStart: n,
                                    onRenderingEnd: n,
                                    version: 0,
                                    tooltip: !1,
                                    binary: !1,
                                    drawer: "canvas",
                                    crossOrigin: null,
                                    utf8WithoutBOM: !0
                                },
                                "string" == typeof e && (e = {
                                    text: e
                                }),
                                    e)
                                    for (var a in e)
                                        this._htOption[a] = e[a];
                                this._htOption.title || this._htOption.subTitle || (this._htOption.titleHeight = 0),
                                (this._htOption.version < 0 || this._htOption.version > 40) && (console.warn("QR Code version '" + this._htOption.version + "' is invalidate, reset to 0"),
                                    this._htOption.version = 0),
                                (this._htOption.dotScale < 0 || this._htOption.dotScale > 1) && (console.warn(this._htOption.dotScale + " , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "),
                                    this._htOption.dotScale = 1),
                                (this._htOption.dotScaleTiming < 0 || this._htOption.dotScaleTiming > 1) && (console.warn(this._htOption.dotScaleTiming + " , is invalidate, dotScaleTiming must greater than 0, less than or equal to 1, now reset to 1. "),
                                    this._htOption.dotScaleTiming = 1),
                                    this._htOption.dotScaleTiming_H ? (this._htOption.dotScaleTiming_H < 0 || this._htOption.dotScaleTiming_H > 1) && (console.warn(this._htOption.dotScaleTiming_H + " , is invalidate, dotScaleTiming_H must greater than 0, less than or equal to 1, now reset to 1. "),
                                        this._htOption.dotScaleTiming_H = 1) : this._htOption.dotScaleTiming_H = this._htOption.dotScaleTiming,
                                    this._htOption.dotScaleTiming_V ? (this._htOption.dotScaleTiming_V < 0 || this._htOption.dotScaleTiming_V > 1) && (console.warn(this._htOption.dotScaleTiming_V + " , is invalidate, dotScaleTiming_V must greater than 0, less than or equal to 1, now reset to 1. "),
                                        this._htOption.dotScaleTiming_V = 1) : this._htOption.dotScaleTiming_V = this._htOption.dotScaleTiming,
                                (this._htOption.dotScaleA < 0 || this._htOption.dotScaleA > 1) && (console.warn(this._htOption.dotScaleA + " , is invalidate, dotScaleA must greater than 0, less than or equal to 1, now reset to 1. "),
                                    this._htOption.dotScaleA = 1),
                                    this._htOption.dotScaleAO ? (this._htOption.dotScaleAO < 0 || this._htOption.dotScaleAO > 1) && (console.warn(this._htOption.dotScaleAO + " , is invalidate, dotScaleAO must greater than 0, less than or equal to 1, now reset to 1. "),
                                        this._htOption.dotScaleAO = 1) : this._htOption.dotScaleAO = this._htOption.dotScaleA,
                                    this._htOption.dotScaleAI ? (this._htOption.dotScaleAI < 0 || this._htOption.dotScaleAI > 1) && (console.warn(this._htOption.dotScaleAI + " , is invalidate, dotScaleAI must greater than 0, less than or equal to 1, now reset to 1. "),
                                        this._htOption.dotScaleAI = 1) : this._htOption.dotScaleAI = this._htOption.dotScaleA,
                                (this._htOption.backgroundImageAlpha < 0 || this._htOption.backgroundImageAlpha > 1) && (console.warn(this._htOption.backgroundImageAlpha + " , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "),
                                    this._htOption.backgroundImageAlpha = 1),
                                    this._htOption.height = this._htOption.height + this._htOption.titleHeight,
                                "string" == typeof t && (t = document.getElementById(t)),
                                (!this._htOption.drawer || "svg" != this._htOption.drawer && "canvas" != this._htOption.drawer) && (this._htOption.drawer = "canvas"),
                                    this._android = C(),
                                    this._el = t,
                                    this._oQRCode = null,
                                    this._htOption._element = t;
                                var o = {};
                                for (var a in this._htOption)
                                    o[a] = this._htOption[a];
                                this._oDrawing = new I(this._el, o),
                                this._htOption.text && this.makeCode(this._htOption.text)
                            }
                        ).prototype.makeCode = function (t) {
                            this._oQRCode = new h(function (t, e) {
                                for (var a = e.correctLevel, o = 1, n = function (t) {
                                    var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                                    return e.length + (e.length != t.length ? 3 : 0)
                                }(t), r = 0, i = y.length; r < i; r++) {
                                    var s = 0;
                                    switch (a) {
                                        case u.L:
                                            s = y[r][0];
                                            break;
                                        case u.M:
                                            s = y[r][1];
                                            break;
                                        case u.Q:
                                            s = y[r][2];
                                            break;
                                        case u.H:
                                            s = y[r][3]
                                    }
                                    if (n <= s)
                                        break;
                                    o++
                                }
                                if (o > y.length)
                                    throw new Error("Too long data. the CorrectLevel." + ["M", "L", "H", "Q"][a] + " limit length is " + s);
                                return 0 != e.version && (o <= e.version ? (o = e.version,
                                    e.runVersion = o) : (console.warn("QR Code version " + e.version + " too small, run version use " + o),
                                    e.runVersion = o)),
                                    o
                            }(t, this._htOption), this._htOption.correctLevel),
                                this._oQRCode.addData(t, this._htOption.binary, this._htOption.utf8WithoutBOM),
                                this._oQRCode.make(),
                            this._htOption.tooltip && (this._el.title = t),
                                this._oDrawing.draw(this._oQRCode)
                        }
                            ,
                            r.prototype.makeImage = function () {
                                "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
                            }
                            ,
                            r.prototype.clear = function () {
                                this._oDrawing.remove()
                            }
                            ,
                            r.prototype.resize = function (t, e) {
                                this._oDrawing._htOption.width = t,
                                    this._oDrawing._htOption.height = e,
                                    this._oDrawing.draw(this._oQRCode)
                            }
                            ,
                            r.prototype.noConflict = function () {
                                return c.QRCode === this && (c.QRCode = l),
                                    r
                            }
                            ,
                            r.CorrectLevel = u,
                        (o = function () {
                            return r
                        }
                            .apply(e, [])) === n || (t.exports = o)
                    }
                        .call(this)
            }
        }, r = {};

        function i(t) {
            if (r[t])
                return r[t].exports;
            var e = r[t] = {
                id: t,
                loaded: !1,
                exports: {}
            };
            return n[t].call(e.exports, e, e.exports, i),
                e.loaded = !0,
                e.exports
        }

        i.m = n,
            i.n = t => {
                var e = t && t.__esModule ? () => t.default : () => t;
                return i.d(e, {
                    a: e
                }),
                    e
            }
            ,
            i.d = (t, e) => {
                for (var a in e)
                    i.o(e, a) && !i.o(t, a) && Object.defineProperty(t, a, {
                        enumerable: !0,
                        get: e[a]
                    })
            }
            ,
            i.f = {},
            i.e = t => Promise.all(Object.keys(i.f).reduce(((e, a) => (i.f[a](t, e),
                e)), [])),
            i.u = t => "en/js/" + t + "." + {
                213: "b6e30737",
                639: "42d45e3f",
                662: "9f4937db",
                939: "6c06b248",
                1719: "25338c89",
                1873: "b9b4a2e5",
                2492: "e0659c29",
                2587: "d238e433",
                3595: "c6d746bb",
                3868: "b5b8f6fc",
                5579: "c1cbc05a",
                5950: "8bceca66",
                6219: "a43f70ea",
                6620: "90be722a",
                6937: "af8dfdfb",
                7158: "cc413c66",
                7294: "454c0e3e",
                7405: "f25a6acb",
                7458: "a41ca026",
                7531: "64ced471",
                8256: "57254d7a",
                8272: "0efc66fc",
                8325: "d052103c"
            }[t] + ".js",
            i.miniCssF = t => 8592 === t ? "en/css/common.31d6cfe0.css" : 8204 === t ? "en/css/global_css.0e5e8512.css" : 4400 === t ? "en/css/4400.31d6cfe0.css" : 4130 === t ? "en/css/4130.31d6cfe0.css" : 1998 === t ? "en/css/1998.31d6cfe0.css" : 1847 === t ? "en/css/1847.31d6cfe0.css" : 2703 === t ? "en/css/chapter/index.undefined.css" : 8256 === t ? "en/css/8256.31d6cfe0.css" : "en/chunk/" + t + "." + {
                213: "2ff085ff",
                639: "c9bd0b00",
                662: "082a03f3",
                939: "31d6cfe0",
                1719: "7057da3f",
                1873: "31d6cfe0",
                2492: "9d883e5f",
                2587: "31d6cfe0",
                3595: "b9dfae99",
                3868: "31d6cfe0",
                5579: "7ba5116b",
                5950: "31d6cfe0",
                6219: "5dfa35e3",
                6620: "12deec70",
                6937: "31d6cfe0",
                7158: "9edee5e6",
                7294: "d667ac9b",
                7405: "7095998c",
                7458: "31d6cfe0",
                7531: "a34365d7",
                8272: "1eaaee69",
                8325: "31d6cfe0"
            }[t] + ".css",
            i.g = function () {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
            t = {},
            e = "webnovel-pc:",
            i.l = (a, o, n) => {
                if (t[a])
                    t[a].push(o);
                else {
                    var r, s;
                    if (void 0 !== n)
                        for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                            var d = c[l];
                            if (d.getAttribute("src") == a || d.getAttribute("data-webpack") == e + n) {
                                r = d;
                                break
                            }
                        }
                    r || (s = !0,
                        (r = document.createElement("script")).charset = "utf-8",
                        r.timeout = 120,
                    i.nc && r.setAttribute("nonce", i.nc),
                        r.setAttribute("data-webpack", e + n),
                        r.src = a),
                        t[a] = [o];
                    var h = (e, o) => {
                        r.onerror = r.onload = null,
                            clearTimeout(p);
                        var n = t[a];
                        if (delete t[a],
                        r.parentNode && r.parentNode.removeChild(r),
                        n && n.forEach((t => t(o))),
                            e)
                            return e(o)
                    }
                        , p = setTimeout(h.bind(null, void 0, {
                        type: "timeout",
                        target: r
                    }), 12e4);
                    r.onerror = h.bind(null, r.onerror),
                        r.onload = h.bind(null, r.onload),
                    s && document.head.appendChild(r)
                }
            }
            ,
            i.r = t => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
            ,
            i.nmd = t => (t.paths = [],
            t.children || (t.children = []),
                t),
            i.j = 2703,
            i.p = "//www.yueimg.com/",
            a = t => new Promise(((e, a) => {
                    var o = i.miniCssF(t)
                        , n = i.p + o;
                    if (((t, e) => {
                            for (var a = document.getElementsByTagName("link"), o = 0; o < a.length; o++) {
                                var n = (i = a[o]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (n === t || n === e))
                                    return i
                            }
                            var r = document.getElementsByTagName("style");
                            for (o = 0; o < r.length; o++) {
                                var i;
                                if ((n = (i = r[o]).getAttribute("data-href")) === t || n === e)
                                    return i
                            }
                        }
                    )(o, n))
                        return e();
                    ((t, e, a, o) => {
                            var n = document.createElement("link");
                            n.rel = "stylesheet",
                                n.type = "text/css",
                                n.onerror = n.onload = r => {
                                    if (n.onerror = n.onload = null,
                                    "load" === r.type)
                                        a();
                                    else {
                                        var i = r && ("load" === r.type ? "missing" : r.type)
                                            , s = r && r.target && r.target.href || e
                                            , c = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")");
                                        c.code = "CSS_CHUNK_LOAD_FAILED",
                                            c.type = i,
                                            c.request = s,
                                            n.parentNode.removeChild(n),
                                            o(c)
                                    }
                                }
                                ,
                                n.href = e,
                                document.head.appendChild(n)
                        }
                    )(t, n, e, a)
                }
            )),
            o = {
                2703: 0,
                3595: 0,
                699: 0
            },
            i.f.miniCss = (t, e) => {
                o[t] ? e.push(o[t]) : 0 !== o[t] && {
                    213: 1,
                    639: 1,
                    662: 1,
                    1719: 1,
                    2492: 1,
                    3595: 1,
                    5579: 1,
                    6219: 1,
                    6620: 1,
                    7158: 1,
                    7294: 1,
                    7405: 1,
                    7531: 1,
                    8272: 1
                }[t] && e.push(o[t] = a(t).then((() => {
                        o[t] = 0
                    }
                ), (e => {
                        throw delete o[t],
                            e
                    }
                )))
            }
            ,
            (() => {
                    var t = {
                        2703: 0,
                        3595: 0,
                        699: 0
                    }
                        , e = [[9427, 8592, 4400, 4130, 1998, 1847]];
                    i.f.j = (e, a) => {
                        var o = i.o(t, e) ? t[e] : void 0;
                        if (0 !== o)
                            if (o)
                                a.push(o[2]);
                            else if (8204 != e) {
                                var n = new Promise(((a, n) => {
                                        o = t[e] = [a, n]
                                    }
                                ));
                                a.push(o[2] = n);
                                var r = i.p + i.u(e)
                                    , s = new Error;
                                i.l(r, (a => {
                                        if (i.o(t, e) && (0 !== (o = t[e]) && (t[e] = void 0),
                                            o)) {
                                            var n = a && ("load" === a.type ? "missing" : a.type)
                                                , r = a && a.target && a.target.src;
                                            s.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")",
                                                s.name = "ChunkLoadError",
                                                s.type = n,
                                                s.request = r,
                                                o[1](s)
                                        }
                                    }
                                ), "chunk-" + e)
                            } else
                                t[e] = 0
                    }
                    ;
                    var a = () => {
                        }
                    ;

                    function o() {
                        for (var a, o = 0; o < e.length; o++) {
                            for (var n = e[o], r = !0, s = 1; s < n.length; s++) {
                                var c = n[s];
                                0 !== t[c] && (r = !1)
                            }
                            r && (e.splice(o--, 1),
                                a = i(i.s = n[0]))
                        }
                        return 0 === e.length && (i.x(),
                                i.x = () => {
                                }
                        ),
                            a
                    }

                    i.x = () => {
                        i.x = () => {
                        }
                            ,
                            r = r.slice();
                        for (var t = 0; t < r.length; t++)
                            n(r[t]);
                        return (a = o)()
                    }
                    ;
                    var n = o => {
                        for (var n, r, [c, l, d, h] = o, p = 0, u = []; p < c.length; p++)
                            r = c[p],
                            i.o(t, r) && t[r] && u.push(t[r][0]),
                                t[r] = 0;
                        for (n in l)
                            i.o(l, n) && (i.m[n] = l[n]);
                        for (d && d(i),
                                 s(o); u.length;)
                            u.shift()();
                        return h && e.push.apply(e, h),
                            a()
                    }
                        , r = self.webpackChunkwebnovel_pc = self.webpackChunkwebnovel_pc || []
                        , s = r.push.bind(r);
                    r.push = n
                }
            )(),
            i.x()
    }
)();
