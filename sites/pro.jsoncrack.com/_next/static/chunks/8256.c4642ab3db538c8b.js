"use strict";
self.webpackChunk_N_E = self.webpackChunk_N_E || []
self.webpackChunk_N_E.push([
    [8256],
    {
        85241: function (module, exports, require) {
            require.r(exports)
            require.d(exports, {
                StyledEditor: function () {
                    return V
                },
                default: function () {
                    return Y
                }
            })

            var r = require(11527)
                , t = require(50959)
                , i = require(14711)
                , s = require.n(i)
                , o = require(20364)
                , a = require(89201)
                , c = require(45096)
                , d = require(94900)
                , x = require(4730)
                , h = require(22478)
                , j = require(91101)
                , u = require(49989)
                , m = require(1777)
                , v = require(83240)
                , p = require(10915)
                , g = require(96973)
                , f = require(9349)
                , C = require(54476)
                , b = require(39986)
                , k = require(64055)
                , w = require(14496)
                , I = require(9259);
            let z = () => {
                let e = b.Z(e => e.setVisible)
                let n = f.x(e => e.getCurrentTab)
                return r.jsxs(k.v, {
                    shadow: "md",
                    withArrow: true,
                    children: [
                        r.jsx(k.v.Target, {
                            children: r.jsx(E, {
                                title: "File",
                                children: r.jsxs(h.k, {
                                    align: "center",
                                    gap: 3,
                                    children: ["File", r.jsx(w.YgJ, {})]
                                })
                            })
                        }),
                        r.jsxs(k.v.Dropdown, {
                            children: [
                                r.jsx(k.v.Item, {
                                    fz: 12,
                                    onClick: () => e("import")(true),
                                    children: "Import"
                                }),
                                r.jsx(k.v.Item, {
                                    fz: 12,
                                    onClick: () => {
                                        let e = document.createElement("a")
                                        let l = new Blob([n().content], {
                                            type: "text/plain"
                                        });
                                        e.href = window.URL.createObjectURL(l)
                                        e.download = "jsoncrack.".concat(n().format)
                                        e.click()
                                        I.j("download", "file download")
                                    },
                                    children: "Export"
                                })
                            ]
                        })
                    ]
                })
            }

            var S = require(69845);
            let T = [
                {
                    value: S.d.JSON,
                    label: "JSON"
                },
                {
                    value: S.d.YAML,
                    label: "YAML"
                },
                {
                    value: S.d.XML,
                    label: "XML"
                },
                {
                    value: S.d.TOML,
                    label: "TOML"
                },
                {
                    value: S.d.CSV,
                    label: "CSV"
                }
            ]
            let y = () => {
                let e = f.x(e => e.getCurrentTab().format)
                let n = f.x(e => e.setFormat);
                return r.jsxs(k.v, {
                    shadow: "md",
                    withArrow: true,
                    children: [
                        r.jsx(k.v.Target, {
                            children: r.jsx(E, {
                                onClick: () => I.j("click", "tools menu"),
                                children: r.jsxs(h.k, {
                                    align: "center",
                                    gap: 3,
                                    children: ["Format: ", e.toUpperCase(), " ", r.jsx(w.YgJ, {})]
                                })
                            })
                        }),
                        r.jsx(k.v.Dropdown, {
                            children: T.map(e => r.jsx(k.v.Item, {
                                fz: 12,
                                onClick: () => n(e.value),
                                children: e.label
                            }, e.value))
                        })
                    ]
                })
            }

            var A = require(26104)
                , O = require(50350)
                , N = require(17427);
            let D = () => {
                let e = b.Z(e => e.setVisible);
                return r.jsxs(k.v, {
                    shadow: "md",
                    withArrow: true,
                    children: [
                        r.jsx(k.v.Target, {
                            children: r.jsx(E, {
                                onClick: () => I.j("click", "tools menu"),
                                children: r.jsx(A.z, {
                                    size: 6,
                                    processing: true,
                                    children: r.jsxs(h.k, {
                                        align: "center",
                                        gap: 3,
                                        children: ["Tools ", r.jsx(w.YgJ, {})]
                                    })
                                })
                            })
                        }),
                        r.jsxs(k.v.Dropdown, {
                            children: [
                                r.jsx(k.v.Item, {
                                    fz: 12,
                                    leftSection: r.jsx(O.QA0, {}),
                                    onClick: () => e("compare")(true),
                                    children: r.jsx(A.z, {
                                        size: 6,
                                        processing: !0,
                                        children: "Compare Data"
                                    })
                                }),
                                r.jsx(k.v.Item, {
                                    fz: 12,
                                    leftSection: r.jsx(g.lFM, {}),
                                    onClick: () => e("jq")(true),
                                    children: "JSON Query (jq)"
                                }),
                                r.jsx(k.v.Item, {
                                    fz: 12,
                                    leftSection: r.jsx(g.gkd, {}),
                                    onClick: () => e("schema")(true),
                                    children: "JSON Schema"
                                }),
                                r.jsx(k.v.Item, {
                                    fz: 12,
                                    leftSection: r.jsx(N.HIx, {}),
                                    onClick: () => e("jwt")(true),
                                    children: "Decode JWT"
                                }),
                                r.jsx(k.v.Item, {
                                    fz: 12,
                                    leftSection: r.jsx(g.Coj, {}),
                                    onClick: () => e("type")(true),
                                    children: "Generate Type"
                                })
                            ]
                        })
                    ]
                })
            }
            let E = m.ZP.button.withConfig({
                componentId: "sc-5ced69d5-0"
            })([
                    "display:",
                    ";place-content:center;font-size:12px;background:none;color:",
                    ";padding:6px;border-radius:3px;white-space:nowrap;&:disabled,&:disabled:hover{color:",
                    ";background:none;cursor:default;}&:hover{background-image:linear-gradient(rgba(0,0,0,0.1) 0 0);}&:hover{color:",
                    ";opacity:1;box-shadow:none;}"
                ],
                e => {
                    let {$hide: n} = e;
                    return n ? "none" : "grid"
                }
                , e => {
                    let {theme} = e;
                    return theme.INTERACTIVE_NORMAL
                }
                , e => {
                    let {theme} = e;
                    return theme.BACKGROUND_MODIFIER_ACCENT
                }
                , e => {
                    let {theme} = e;
                    return theme.INTERACTIVE_HOVER
                }
            )
            let M = () => {
                let e = m.Fg()
                let n = b.Z(e => e.setVisible);
                return r.jsxs(h.k, {
                    pl: "16",
                    pr: "8",
                    align: "center",
                    gap: "sm",
                    h: 36,
                    style: {
                        borderBottom: "2px solid ".concat(e.BACKGROUND_MODIFIER_ACCENT)
                    },
                    children: [
                        r.jsx(C.p, {
                            text: "JC"
                        }),
                        r.jsx(z, {}),
                        r.jsx(y, {}),
                        r.jsx(D, {}),
                        r.jsx(E, {
                            onClick: () => n("cloud")(true),
                            children: "Cloud"
                        })
                    ]
                })
            }

            var R = require(23700)
                , _ = require.n(R)
                , L = require(25838)
                , Z = require(19758)
                , F = require(4453)
                , J = require(66127);

            let P = e => {
                let {children} = e
                let user_metadata = J.Z(state => {
                    var user = state.user
                    return null === user || void 0 === user ? void 0 : user.user_metadata
                })
                let user_email = J.Z(state => {
                    let user = state.user
                    return null === user || undefined === user ? undefined : user.email
                })
                let logout = J.Z(state => state.logout)
                let s = b.Z(e => e.setVisible)
                let user_name = (null == user_metadata ? undefined : user_metadata.full_name) || (null == user_metadata ? undefined : user_metadata.display_name) || (null == user_metadata ? undefined : user_metadata.name)
                let a = F.Z(e => e.toggleDarkMode)
                let c = F.Z(e => e.darkmodeEnabled)
                let d = F.Z(e => e.toggleAI)
                let x = F.Z(e => e.aiEnabled)

                return r.jsxs(k.v, {
                    shadow: "md",
                    trigger: "click",
                    closeOnItemClick: false,
                    withArrow: true,
                    children: [
                        r.jsx(k.v.Target, {
                            children: children
                        }),
                        r.jsxs(k.v.Dropdown, {
                            children: [
                                user_metadata
                                    ? r.jsxs(k.v.Item, {
                                        onClick: () => s("account")(true),
                                        closeMenuOnClick: true,
                                        children: [
                                            r.jsx(L.x, {
                                                fw: 500,
                                                fz: "xs",
                                                c: "gray",
                                                children: null != user_name ? user_name : "Account"
                                            }),
                                            r.jsx(L.x, {
                                                fz: "xs",
                                                c: "dimmed",
                                                children: user_email
                                            })
                                        ]
                                    })
                                    : r.jsx(_(), {
                                        href: "/sign-in",
                                        children: r.jsx(k.v.Item, {
                                            leftSection: r.jsx(g.aju, {}),
                                            children: r.jsx(L.x, {
                                                size: "xs",
                                                children: "Sign in"
                                            })
                                        })
                                    }),
                                user_metadata && r.jsxs(r.Fragment, {
                                    children: [
                                        r.jsx(k.v.Divider, {}),
                                        r.jsx(k.v.Label, {
                                            children: "Preferences"
                                        }),
                                        r.jsx(k.v.Item, {
                                            leftSection: r.jsx(Z.IPg, {
                                                opacity: c ? 100 : 0
                                            }),
                                            onClick: () => a(!c),
                                            children: r.jsx(L.x, {
                                                size: "xs",
                                                children: "Dark Mode"
                                            })
                                        }),
                                        r.jsx(k.v.Item, {
                                            leftSection: r.jsx(Z.IPg, {
                                                opacity: x ? 100 : 0
                                            }),
                                            onClick: () => d(!x),
                                            children: r.jsx(L.x, {
                                                size: "xs",
                                                children: "Show JSON Crack AI"
                                            })
                                        }),
                                        r.jsx(k.v.Divider, {}),
                                        r.jsx(k.v.Item, {
                                            leftSection: r.jsx(g.xJq, {}),
                                            onClick: () => s("review")(true),
                                            closeMenuOnClick: true,
                                            children: r.jsx(L.x, {
                                                size: "xs",
                                                children: "Feedback"
                                            })
                                        }),
                                        r.jsx(k.v.Item, {
                                            leftSection: r.jsx(g.TdI, {}),
                                            onClick: () => logout(),
                                            closeMenuOnClick: true,
                                            children: r.jsx(L.x, {
                                                size: "xs",
                                                children: "Log out"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }
            let V = m.ZP(v.oL).withConfig({
                componentId: "sc-334375b3-0"
            })(["position:relative !important;display:flex;background:", ";height:calc(100vh - 27px);@media only screen and (max-width:320px){height:100vh;}"], e => {
                let {theme: n} = e;
                return n.BACKGROUND_SECONDARY
            })
            let B = s()(() => Promise.all([require.e(5598), require.e(9568), require.e(6276)]).then(require.bind(require, 76276)), {
                loadableGenerated: {
                    webpack: () => [76276]
                },
                ssr: !1
            })
            let G = s()(() => Promise.all([require.e(8621), require.e(2286), require.e(7106), require.e(5278), require.e(4861), require.e(4139)]).then(require.bind(require, 1040)), {
                loadableGenerated: {
                    webpack: () => [1040]
                },
                ssr: !1
            })
            let U = Math.floor(1e6 * Math.random()).toString()
            var Y = () => {
                let e = m.Fg()
                let n = f.x(e => e.fullscreen)
                let l = f.x(e => e.tabs)
                let i = f.x(e => e.activeTabId)
                let s = f.x(e => e.setTabName)
                let C = f.x(e => e.setActiveTabId)
                let b = f.x(e => e.closeTab)
                let k = f.x(e => e.openTab)
                let [w, I] = t.useState("")
                let [z, S] = t.useState("")
                return r.jsxs(V, {
                    proportionalLayout: false,
                    children: [
                        r.jsxs(v.oL.Pane, {
                            preferredSize: 450,
                            minSize: n ? 0 : 420,
                            maxSize: 800,
                            visible: !n,
                            children: [
                                r.jsx(M, {}),
                                r.jsx(B, {})
                            ]
                        }),
                        r.jsxs(v.oL.Pane, {
                            minSize: 0,
                            children: [
                                r.jsxs(o.u, {
                                    title: "Rename Tab",
                                    opened: !!w,
                                    onClose: () => I(""),
                                    centered: true,
                                    children: [
                                        r.jsx(a.o, {
                                            value: z,
                                            onChange: e => S(e.currentTarget.value),
                                            placeholder: "Tab Name",
                                            description: "This doesn't affect the file name, only the tab name."
                                        }),
                                        r.jsxs(c.Z, {
                                            mt: "sm",
                                            justify: "right",
                                            children: [
                                                r.jsx(d.z, {
                                                    variant: "outline",
                                                    onClick: () => I(""),
                                                    children: "Cancel"
                                                }),
                                                r.jsx(d.z, {
                                                    onClick: () => {
                                                        s(w, z)
                                                        S("")
                                                        I("")
                                                    },
                                                    children: "Save"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                r.jsxs(x.m, {
                                    fz: "xs",
                                    value: i,
                                    defaultValue: U,
                                    radius: 0,
                                    onChange: e => {
                                        "add-tab" !== e && e && C(e)
                                    },
                                    style: {
                                        "--tab-border-color": "transparent"
                                    },
                                    children: [
                                        r.jsxs(h.k, {
                                            h: 36,
                                            style: {
                                                borderBottom: "2px solid ".concat(e.BACKGROUND_MODIFIER_ACCENT)
                                            },
                                            children: [
                                                r.jsxs(x.m.List, {
                                                    w: "100%",
                                                    children: [
                                                        l.map((e, n) => {
                                                            var t;
                                                            return r.jsx(x.m.Tab, {
                                                                onContextMenuCapture: n => {
                                                                    var l;
                                                                    n.preventDefault()
                                                                    I(e.id)
                                                                    S(null !== (l = e.name) && void 0 !== l ? l : "")
                                                                },
                                                                fz: "xs",
                                                                value: e.id,
                                                                h: 36,
                                                                rightSection: l.length > 1 && r.jsx(j.P, {
                                                                    component: "span",
                                                                    size: "xs",
                                                                    variant: "transparent",
                                                                    color: "gray",
                                                                    ml: "xs",
                                                                    onClick: n => {
                                                                        n.stopPropagation()
                                                                        b(e.id)
                                                                    }
                                                                }),
                                                                children: null !== (t = e.name) && void 0 !== t ? t : "Tab ".concat(n + 1)
                                                            }, e.id)
                                                        }),
                                                        r.jsx(x.m.Tab, {
                                                            value: "add-tab",
                                                            size: "xs",
                                                            color: "gray",
                                                            h: 36,
                                                            fz: "sm",
                                                            fw: "normal",
                                                            leftSection: r.jsx(p.gyF, {
                                                                size: "20"
                                                            }),
                                                            onClick: () => k(),
                                                            children: 0 === l.length && "Add tab"
                                                        })
                                                    ]
                                                }),
                                                r.jsx(P, {
                                                    children: r.jsx(u.A, {
                                                        title: "Account",
                                                        color: "gray",
                                                        size: 36,
                                                        variant: "transparent",
                                                        radius: 0,
                                                        mr: "md",
                                                        children: r.jsx(g.Nhi, {})
                                                    })
                                                })
                                            ]
                                        }),
                                        r.jsx(G, {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }
        },
        54476: function (e, n, l) {
            l.d(n, {
                p: function () {
                    return d
                }
            });
            var r = l(11527);
            l(50959);
            var t = l(23700)
                , i = l.n(t)
                , s = l(1777)
                , o = l(15112)
                , a = l.n(o);
            let c = s.ZP.div.withConfig({
                componentId: "sc-247283bf-0"
            })(["display:inline-flex;align-items:center;gap:6px;font-weight:700;margin:0;font-family:", ";font-size:", ";white-space:nowrap;z-index:10;color:", ";vertical-align:middle;"], a().style.fontFamily, e => {
                    let {fontSize: n} = e;
                    return n
                }
                , e => {
                    let {theme: n} = e;
                    return n.SIDEBAR_ICONS
                }
            )
                , d = e => {
                let {fontSize: n = "1rem", text: l = "JSON CRACK+", ...t} = e;
                return (0,
                    r.jsx)(c, {
                    as: i(),
                    fontSize: n,
                    href: "/",
                    prefetch: !1,
                    ...t,
                    children: l
                })
            }
        }
    }
])
