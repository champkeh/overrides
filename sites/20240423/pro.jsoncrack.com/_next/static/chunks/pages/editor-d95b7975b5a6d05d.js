self.webpackChunk_N_E = self.webpackChunk_N_E || []
self.webpackChunk_N_E.push([
    [4154],
    {
        91022: function (e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(
                [
                    "/editor",
                    function () {
                        return t(55283)
                    }
                ]
            )
        },
        91721: function (e, n, t) {
            "use strict";
            var i, l;
            t.d(n, {
                w: function () {
                    return i
                }
            }),
                (l = i || (i = {})).Graph = "graph",
                l.Tree = "tree"
        },
        55283: function (module, exports, require) {
            "use strict";
            require.r(exports)
            require.d(exports, {
                StyledEditorWrapper: function () {
                    return ev
                },
                StyledPageWrapper: function () {
                    return ef
                },
                default: function () {
                    return ew
                }
            })
            var i = require(11527)
                , l = require(50959)
                , r = require(34673)
                , o = require.n(r)
                , s = require(68129)
                , a = require(56105);
            require(79927);
            var d = require(1777);
            require(78927);
            var c = require(63983)
                , x = require(22478)
                , h = require(25838)
                , u = require(94311)
                , j = require(96930)
                , m = require(12453)
                , g = require(50350)
                , p = require(96973)
                , f = require(83058)
                , v = require(52470)
                , w = require(39986)
                , b = require(9349)
                , C = require(72195);

            let k = d.ZP.div.withConfig({
                    componentId: "sc-5a99df3a-0"
                })(["position:relative;display:flex;align-items:center;justify-content:space-between;border-top:1px solid ", ";background:", ";max-height:27px;height:27px;z-index:35;padding-right:6px;@media screen and (max-width:320px){display:none;}"], e => {
                        let {theme: n} = e;
                        return n.BACKGROUND_MODIFIER_ACCENT
                    }
                    , e => {
                        let {theme: n} = e;
                        return n.TOOLBAR_BG
                    }
                )
                , I = d.ZP.div.withConfig({
                    componentId: "sc-5a99df3a-1"
                })(["display:flex;align-items:center;justify-content:left;gap:4px;padding-left:8px;@media screen and (max-width:480px){display:none;}"])
                , S = d.ZP.div.withConfig({
                    componentId: "sc-5a99df3a-2"
                })(["display:flex;align-items:center;justify-content:right;gap:4px;"])
                , T = d.ZP.button.withConfig({
                    componentId: "sc-5a99df3a-3"
                })(["display:flex;align-items:center;gap:4px;width:fit-content;margin:0;height:28px;padding:4px;font-size:12px;font-weight:400;color:", ";background:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;&:hover:not(&:disabled){background-image:linear-gradient(rgba(0,0,0,0.1) 0 0);color:", ";}&:disabled{opacity:0.6;cursor:default;}"], e => {
                        let {theme: n} = e;
                        return n.INTERACTIVE_NORMAL
                    }
                    , e => {
                        let {$bg: n} = e;
                        return n
                    }
                    , e => {
                        let {theme: n} = e;
                        return n.INTERACTIVE_HOVER
                    }
                )
                , y = () => {
                    let {replace: e} = (0,
                        s.useRouter)()
                        , n = (0,
                        C.Z)(e => e.user)
                        , t = (0,
                        b.x)(e => e.getCurrentTab())
                        , r = (0,
                        b.x)(e => e.setFullscreen)
                        , o = (0,
                        b.x)(e => e.fullscreen)
                        , a = (0,
                        b.x)(e => e.updateTab)
                        , d = (0,
                        b.x)(e => !!e.getCurrentTab().jsonSchema)
                        , y = (0,
                        w.Z)(e => e.setVisible)
                        , z = (0,
                        b.x)(e => e.setHasChanges)
                        , E = (0,
                        v.$)(e => e.nodeCount)
                        , [_, O] = l.useState(!1)
                        , A = l.useCallback(async () => {
                            if (!n)
                                return y("login")(!0);
                            if (t.has_changes && !t.error)
                                try {
                                    O(!0),
                                        u.default.loading("Saving document...", {
                                            id: "fileSave"
                                        });
                                    let {data: n, error: i} = await f.F.upsert({
                                        ...t.created_at && {
                                            id: t.id
                                        },
                                        contents: t.content,
                                        format: t.format
                                    });
                                    if (i)
                                        throw i;
                                    n && e({
                                        query: {
                                            json: n
                                        }
                                    }),
                                    t.created_at || a({
                                        ...t,
                                        id: n
                                    }),
                                        u.default.success("Document saved to cloud.", {
                                            id: "fileSave"
                                        }),
                                        z(!1)
                                } catch (e) {
                                    u.default.error(e.message, {
                                        id: "fileSave"
                                    })
                                } finally {
                                    O(!1)
                                }
                        }
                        , [t, e, z, y, a, n]);
                    return (0,
                        i.jsxs)(k, {
                        children: [(0,
                            i.jsxs)(I, {
                            children: [(0,
                                i.jsx)(T, {
                                onClick: () => r(!o),
                                children: (0,
                                    i.jsx)(m.KOt, {})
                            }), (null == t ? void 0 : t.created_at) && (0,
                                i.jsxs)(T, {
                                onClick: () => y("cloud")(!0),
                                children: [(0,
                                    i.jsx)(p.oFx, {}), t.name]
                            }), (0,
                                i.jsx)(T, {
                                children: t.error ? (0,
                                    i.jsx)(c.u, {
                                    fz: "xs",
                                    label: t.error,
                                    position: "top",
                                    multiline: !0,
                                    withArrow: !0,
                                    maw: 400,
                                    style: {
                                        whiteSpace: "pre-wrap"
                                    },
                                    children: (0,
                                        i.jsxs)(x.k, {
                                        align: "center",
                                        gap: 2,
                                        children: [(0,
                                            i.jsx)(p.$Vt, {
                                            color: "red",
                                            size: 16
                                        }), (0,
                                            i.jsx)(h.x, {
                                            c: "red",
                                            fw: 500,
                                            fz: "xs",
                                            children: "Invalid"
                                        })]
                                    })
                                }) : (0,
                                    i.jsxs)(x.k, {
                                    align: "center",
                                    gap: 2,
                                    children: [(0,
                                        i.jsx)(g.S5G, {}), (0,
                                        i.jsx)(h.x, {
                                        size: "xs",
                                        children: "Valid"
                                    })]
                                })
                            }), ((null == t ? void 0 : t.owner_email) === (null == n ? void 0 : n.email) || !t.owner_email && n) && (0,
                                i.jsxs)(T, {
                                onClick: A,
                                disabled: _ || !!t.error,
                                children: [t.has_changes ? (0,
                                    i.jsx)(j.IEK, {}) : (0,
                                    i.jsx)(j.U8$, {}), t.has_changes ? t.created_at ? "Unsaved Changes" : "Save to Cloud" : "Saved"]
                            }), d && (0,
                                i.jsxs)(T, {
                                onClick: () => y("schema")(!0),
                                children: [(0,
                                    i.jsx)(p.gkd, {}), (0,
                                    i.jsx)(h.x, {
                                    size: "xs",
                                    children: "Schema Enabled"
                                })]
                            })]
                        }), (0,
                            i.jsxs)(S, {
                            children: [(0,
                                i.jsxs)(T, {
                                children: ["Nodes: ", E]
                            }), (0,
                                i.jsxs)(T, {
                                onClick: () => y("review")(!0),
                                children: [(0,
                                    i.jsx)(p.xJq, {}), "Request a Feature"]
                            })]
                        })]
                    })
                }
            ;
            var z = require(14711)
                , E = require.n(z)
                , _ = require(83240)
                , O = require(64055)
                , A = require(14496)
                , Z = require(9259);
            let N = () => {
                    let e = (0,
                        w.Z)(e => e.setVisible)
                        , n = (0,
                        b.x)(e => e.getCurrentTab);
                    return (0,
                        i.jsxs)(O.v, {
                        shadow: "md",
                        withArrow: !0,
                        children: [(0,
                            i.jsx)(O.v.Target, {
                            children: (0,
                                i.jsx)(V, {
                                title: "File",
                                children: (0,
                                    i.jsxs)(x.k, {
                                    align: "center",
                                    gap: 3,
                                    children: ["File", (0,
                                        i.jsx)(A.YgJ, {})]
                                })
                            })
                        }), (0,
                            i.jsxs)(O.v.Dropdown, {
                            children: [(0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                onClick: () => e("import")(!0),
                                children: "Import"
                            }), (0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                onClick: () => {
                                    let e = document.createElement("a")
                                        , t = new Blob([n().content], {
                                        type: "text/plain"
                                    });
                                    e.href = window.URL.createObjectURL(t),
                                        e.download = "jsoncrack.".concat(n().format),
                                        e.click(),
                                        (0,
                                            Z.j)("download", "file download")
                                }
                                ,
                                children: "Export"
                            })]
                        })]
                    })
                }
            ;
            var M = require(69845);
            let P = [{
                    value: M.d.JSON,
                    label: "JSON"
                }, {
                    value: M.d.YAML,
                    label: "YAML"
                }, {
                    value: M.d.XML,
                    label: "XML"
                }, {
                    value: M.d.TOML,
                    label: "TOML"
                }, {
                    value: M.d.CSV,
                    label: "CSV"
                }]
                , R = () => {
                    let e = (0,
                        b.x)(e => e.getCurrentTab().format)
                        , n = (0,
                        b.x)(e => e.setFormat);
                    return (0,
                        i.jsxs)(O.v, {
                        shadow: "md",
                        withArrow: !0,
                        children: [(0,
                            i.jsx)(O.v.Target, {
                            children: (0,
                                i.jsx)(V, {
                                onClick: () => (0,
                                    Z.j)("click", "tools menu"),
                                children: (0,
                                    i.jsxs)(x.k, {
                                    align: "center",
                                    gap: 3,
                                    children: ["Format: ", e.toUpperCase(), " ", (0,
                                        i.jsx)(A.YgJ, {})]
                                })
                            })
                        }), (0,
                            i.jsx)(O.v.Dropdown, {
                            children: P.map(e => (0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                onClick: () => n(e.value),
                                children: e.label
                            }, e.value))
                        })]
                    })
                }
            ;
            var D = require(17427);
            let L = () => {
                    let e = (0,
                        w.Z)(e => e.setVisible);
                    return (0,
                        i.jsxs)(O.v, {
                        shadow: "md",
                        withArrow: !0,
                        children: [(0,
                            i.jsx)(O.v.Target, {
                            children: (0,
                                i.jsx)(V, {
                                onClick: () => (0,
                                    Z.j)("click", "tools menu"),
                                children: (0,
                                    i.jsxs)(x.k, {
                                    align: "center",
                                    gap: 3,
                                    children: ["Tools ", (0,
                                        i.jsx)(A.YgJ, {})]
                                })
                            })
                        }), (0,
                            i.jsxs)(O.v.Dropdown, {
                            children: [(0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                leftSection: (0,
                                    i.jsx)(g.QA0, {}),
                                onClick: () => e("compare")(!0),
                                children: "Compare Data"
                            }), (0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                leftSection: (0,
                                    i.jsx)(p.lFM, {}),
                                onClick: () => e("jq")(!0),
                                children: "JSON Query (jq)"
                            }), (0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                leftSection: (0,
                                    i.jsx)(p.gkd, {}),
                                onClick: () => e("schema")(!0),
                                children: "JSON Schema"
                            }), (0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                leftSection: (0,
                                    i.jsx)(D.HIx, {}),
                                onClick: () => e("jwt")(!0),
                                children: "Decode JWT"
                            }), (0,
                                i.jsx)(O.v.Item, {
                                fz: 12,
                                leftSection: (0,
                                    i.jsx)(p.Coj, {}),
                                onClick: () => e("type")(!0),
                                children: "Generate Type"
                            })]
                        })]
                    })
                }
                , V = d.ZP.button.withConfig({
                    componentId: "sc-1a0d7711-0"
                })(["display:", ";place-content:center;font-size:12px;background:none;color:", ";padding:6px;border-radius:3px;white-space:nowrap;&:disabled,&:disabled:hover{color:", ";background:none;cursor:default;}&:hover{background-image:linear-gradient(rgba(0,0,0,0.1) 0 0);}&:hover{color:", ";opacity:1;box-shadow:none;}"], e => {
                        let {$hide: n} = e;
                        return n ? "none" : "grid"
                    }
                    , e => {
                        let {theme: n} = e;
                        return n.INTERACTIVE_NORMAL
                    }
                    , e => {
                        let {theme: n} = e;
                        return n.BACKGROUND_MODIFIER_ACCENT
                    }
                    , e => {
                        let {theme: n} = e;
                        return n.INTERACTIVE_HOVER
                    }
                )
                , F = () => {
                    let e = (0,
                        d.Fg)()
                        , n = (0,
                        w.Z)(e => e.setVisible);
                    return (0,
                        i.jsxs)(x.k, {
                        px: 8,
                        align: "center",
                        gap: "sm",
                        h: 36,
                        style: {
                            borderBottom: "2px solid ".concat(e.BACKGROUND_MODIFIER_ACCENT)
                        },
                        children: [(0,
                            i.jsx)(N, {}), (0,
                            i.jsx)(R, {}), (0,
                            i.jsx)(L, {}), (0,
                            i.jsx)(V, {
                            onClick: () => n("cloud")(!0),
                            children: "Cloud"
                        })]
                    })
                }
            ;
            var J = require(55148)
                , G = require(24435)
                , U = require(4730)
                , B = require(91101)
                , q = require(51399)
                , K = require(49989)
                , Y = require(10915)
                , H = require(23700)
                , W = require.n(H)
                , X = require(19758)
                , $ = require(4453);
            let Q = e => {
                    let {children: n} = e
                        , t = (0,
                            C.Z)(e => {
                                var n;
                                return null === (n = e.user) || void 0 === n ? void 0 : n.user_metadata
                            }
                        )
                        , l = (0,
                            C.Z)(e => {
                                var n;
                                return null === (n = e.user) || void 0 === n ? void 0 : n.email
                            }
                        )
                        , r = (0,
                            C.Z)(e => e.logout)
                        , o = (0,
                            w.Z)(e => e.setVisible)
                        ,
                        s = (null == t ? void 0 : t.full_name) || (null == t ? void 0 : t.display_name) || (null == t ? void 0 : t.name)
                        , a = (0,
                            $.Z)(e => e.toggleDarkMode)
                        , d = (0,
                            $.Z)(e => e.darkmodeEnabled)
                        , c = (0,
                            $.Z)(e => e.toggleAI)
                        , x = (0,
                            $.Z)(e => e.aiEnabled);
                    return (0,
                        i.jsxs)(O.v, {
                        shadow: "md",
                        trigger: "click",
                        closeOnItemClick: !1,
                        withArrow: !0,
                        children: [(0,
                            i.jsx)(O.v.Target, {
                            children: n
                        }), (0,
                            i.jsxs)(O.v.Dropdown, {
                            children: [t ? (0,
                                i.jsxs)(O.v.Item, {
                                onClick: () => o("account")(!0),
                                closeMenuOnClick: !0,
                                children: [(0,
                                    i.jsx)(h.x, {
                                    fw: 500,
                                    fz: "xs",
                                    c: "gray",
                                    children: null != s ? s : "Account"
                                }), (0,
                                    i.jsx)(h.x, {
                                    fz: "xs",
                                    c: "dimmed",
                                    children: l
                                })]
                            }) : (0,
                                i.jsx)(W(), {
                                href: "/sign-in",
                                children: (0,
                                    i.jsx)(O.v.Item, {
                                    leftSection: (0,
                                        i.jsx)(p.aju, {}),
                                    children: (0,
                                        i.jsx)(h.x, {
                                        size: "xs",
                                        children: "Sign in"
                                    })
                                })
                            }), t && (0,
                                i.jsxs)(i.Fragment, {
                                children: [(0,
                                    i.jsx)(O.v.Divider, {}), (0,
                                    i.jsx)(O.v.Label, {
                                    children: "Preferences"
                                }), (0,
                                    i.jsx)(O.v.Item, {
                                    leftSection: (0,
                                        i.jsx)(X.IPg, {
                                        opacity: d ? 100 : 0
                                    }),
                                    onClick: () => a(!d),
                                    children: (0,
                                        i.jsx)(h.x, {
                                        size: "xs",
                                        children: "Dark Mode"
                                    })
                                }), (0,
                                    i.jsx)(O.v.Item, {
                                    leftSection: (0,
                                        i.jsx)(X.IPg, {
                                        opacity: x ? 100 : 0
                                    }),
                                    onClick: () => c(!x),
                                    children: (0,
                                        i.jsx)(h.x, {
                                        size: "xs",
                                        children: "Show JSON Crack AI"
                                    })
                                }), (0,
                                    i.jsx)(O.v.Divider, {}), (0,
                                    i.jsx)(O.v.Item, {
                                    leftSection: (0,
                                        i.jsx)(p.xJq, {}),
                                    onClick: () => o("review")(!0),
                                    closeMenuOnClick: !0,
                                    children: (0,
                                        i.jsx)(h.x, {
                                        size: "xs",
                                        children: "Feedback"
                                    })
                                }), (0,
                                    i.jsx)(O.v.Item, {
                                    leftSection: (0,
                                        i.jsx)(p.TdI, {}),
                                    onClick: () => r(),
                                    closeMenuOnClick: !0,
                                    children: (0,
                                        i.jsx)(h.x, {
                                        size: "xs",
                                        children: "Log out"
                                    })
                                })]
                            })]
                        })]
                    })
                }
            ;
            var ee = require(89201)
                , en = require(45096)
                , et = require(94900)
                , ei = require(20364);
            let el = e => {
                    let {contextTabId: n, opened: t, onClose: r} = e
                        , o = (0,
                        b.x)(e => e.tabs.find(e => e.id === n))
                        , s = (0,
                        b.x)(e => e.setTabName)
                        , [a, d] = l.useState((null == o ? void 0 : o.name) || "")
                        , [c, x] = l.useState(n);
                    return l.useEffect(() => {
                            o && (x(n),
                                d(o.name || ""))
                        }
                        , [o, n]),
                        (0,
                            i.jsxs)(ei.u, {
                            title: "Rename Tab",
                            opened: t,
                            onClose: r,
                            centered: !0,
                            children: [(0,
                                i.jsx)(ee.o, {
                                value: a,
                                onChange: e => d(e.currentTarget.value),
                                placeholder: "Tab Name"
                            }), (0,
                                i.jsxs)(en.Z, {
                                mt: "sm",
                                justify: "right",
                                children: [(0,
                                    i.jsx)(et.z, {
                                    variant: "outline",
                                    onClick: r,
                                    children: "Cancel"
                                }), (0,
                                    i.jsx)(et.z, {
                                    onClick: () => {
                                        s(c, a),
                                            d(""),
                                            r()
                                    }
                                    ,
                                    children: "Save"
                                })]
                            })]
                        })
                }
                , er = Math.floor(1e6 * Math.random()).toString()
                , eo = e => {
                    let {children: n} = e
                        , t = (0,
                        J.rZ)()
                        , {colorScheme: r} = (0,
                        G.X)()
                        , o = (0,
                        b.x)(e => e.tabs)
                        , s = (0,
                        b.x)(e => e.activeTabId)
                        , a = (0,
                        b.x)(e => e.setActiveTabId)
                        , d = (0,
                        b.x)(e => e.closeTab)
                        , c = (0,
                        b.x)(e => e.openTab)
                        , [u, j] = l.useState("")
                        , [m, g] = l.useState(!1);
                    return (0,
                        i.jsxs)(U.m, {
                        fz: "xs",
                        value: s,
                        defaultValue: er,
                        radius: 0,
                        onChange: e => {
                            "add-tab" !== e && e && a(e)
                        }
                        ,
                        children: [(0,
                            i.jsxs)(x.k, {
                            h: 36,
                            children: [(0,
                                i.jsx)(el, {
                                contextTabId: u,
                                opened: m,
                                onClose: () => {
                                    g(!1),
                                        j("")
                                }
                            }), (0,
                                i.jsxs)(U.m.List, {
                                w: "100%",
                                children: [o.map((e, n) => (0,
                                    i.jsxs)(O.v, {
                                    opened: e.id === u,
                                    onClose: () => j(""),
                                    closeOnClickOutside: !0,
                                    withArrow: !0,
                                    children: [(0,
                                        i.jsx)(O.v.Target, {
                                        children: (0,
                                            i.jsx)(U.m.Tab, {
                                            onContextMenuCapture: n => {
                                                n.preventDefault(),
                                                    j(e.id)
                                            }
                                            ,
                                            fz: "xs",
                                            value: e.id,
                                            h: 36,
                                            rightSection: o.length > 1 && (0,
                                                i.jsx)(B.P, {
                                                component: "span",
                                                size: "xs",
                                                variant: "transparent",
                                                color: "gray",
                                                ml: "xs",
                                                onClick: n => {
                                                    n.stopPropagation(),
                                                        d(e.id)
                                                }
                                            }),
                                            children: (0,
                                                i.jsx)(h.x, {
                                                maw: 80,
                                                fz: "xs",
                                                truncate: "end",
                                                children: e.name
                                            })
                                        })
                                    }), (0,
                                        i.jsxs)(O.v.Dropdown, {
                                        children: [(0,
                                            i.jsx)(O.v.Item, {
                                            fz: "xs",
                                            onClick: () => g(!0),
                                            children: "Rename"
                                        }), (0,
                                            i.jsx)(O.v.Item, {
                                            fz: "xs",
                                            onClick: () => d(e.id),
                                            disabled: 1 === o.length,
                                            children: "Close"
                                        })]
                                    })]
                                }, e.id)), (0,
                                    i.jsx)(U.m.Tab, {
                                    value: "add-tab",
                                    size: "xs",
                                    color: "gray",
                                    h: 36,
                                    fz: "sm",
                                    fw: "normal",
                                    leftSection: (0,
                                        i.jsx)(Y.gyF, {
                                        size: "20"
                                    }),
                                    onClick: () => c(),
                                    children: 0 === o.length && "Add tab"
                                })]
                            }), (0,
                                i.jsx)(q.x, {
                                style: {
                                    borderBottom: "2px solid ".concat("dark" === r ? t.colors.dark[4] : t.colors.gray[3])
                                },
                                children: (0,
                                    i.jsx)(Q, {
                                    children: (0,
                                        i.jsx)(K.A, {
                                        title: "Account",
                                        color: "gray",
                                        size: 36,
                                        variant: "transparent",
                                        radius: 0,
                                        mr: "md",
                                        children: (0,
                                            i.jsx)(p.Nhi, {})
                                    })
                                })
                            })]
                        }), n]
                    })
                }
                , es = (0,
                    d.ZP)(_.oL).withConfig({
                    componentId: "sc-131a98c3-0"
                })(["position:relative !important;display:flex;background:", ";height:calc(100vh - 27px);@media only screen and (max-width:320px){height:100vh;}"], e => {
                        let {theme: n} = e;
                        return n.BACKGROUND_SECONDARY
                    }
                )
                ,
                ea = E()(() => Promise.all([require.e(5598), require.e(9568), require.e(6403)]).then(require.bind(require, 56403)), {
                    loadableGenerated: {
                        webpack: () => [56403]
                    },
                    ssr: !1
                })
                ,
                ed = E()(() => Promise.all([require.e(8621), require.e(7106), require.e(9319), require.e(4139)]).then(require.bind(require, 1040)), {
                    loadableGenerated: {
                        webpack: () => [1040]
                    },
                    ssr: !1
                });
            var ec = () => {
                let e = (0,
                    b.x)(e => e.fullscreen);
                return (0,
                    i.jsxs)(es, {
                    proportionalLayout: !1,
                    children: [(0,
                        i.jsxs)(_.oL.Pane, {
                        preferredSize: 450,
                        minSize: e ? 0 : 420,
                        maxSize: 800,
                        visible: !e,
                        children: [(0,
                            i.jsx)(F, {}), (0,
                            i.jsx)(ea, {})]
                    }), (0,
                        i.jsx)(_.oL.Pane, {
                        minSize: 0,
                        children: (0,
                            i.jsx)(eo, {
                            children: (0,
                                i.jsx)(ed, {})
                        })
                    })]
                })
            }
                , ex = require(55085)
                , eh = require(27655)
                , eu = require(97066)
                , ej = require(14890);
            let em = E()(() => Promise.all([require.e(8621), require.e(9806), require.e(5730), require.e(7106), require.e(5520), require.e(9605), require.e(9568), require.e(2409), require.e(6696)]).then(require.bind(require, 36696)), {
                loadableGenerated: {
                    webpack: () => [36696]
                }
            })
                , eg = new eh.S({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: !1,
                        retry: !1
                    }
                }
            })
                , ep = e => {
                let {children: n} = e
                    , t = (0,
                    $.Z)(e => e.darkmodeEnabled);
                return (0,
                    i.jsx)(d.f6, {
                    theme: t ? ej.$_ : ej.Wb,
                    children: (0,
                        i.jsx)(ex.M, {
                        forceColorScheme: t ? "dark" : "light",
                        children: (0,
                            i.jsxs)(eu.aH, {
                            client: eg,
                            children: [(0,
                                i.jsx)(em, {}), n]
                        })
                    })
                })
            }
                , ef = d.ZP.div.withConfig({
                componentId: "sc-5f928f49-0"
            })(["height:calc(100vh - 27px);width:100%;@media only screen and (max-width:320px){height:100vh;}"])
                , ev = d.ZP.div.withConfig({
                componentId: "sc-5f928f49-1"
            })(["width:100%;height:100%;overflow:hidden;"]);
            var ew = () => {
                let {query: e, isReady: n, push: t} = (0,
                    s.useRouter)()
                    , r = (0,
                    b.x)(e => e.fetchUrl)
                    , d = (0,
                    C.Z)(e => e.premium)
                    , c = (0,
                    C.Z)(e => e.isAuthenticated)
                    , x = (0,
                    C.Z)(e => e.sessionLoading)
                    , h = (0,
                    C.Z)(e => e.logout)
                    , u = l.useMemo(() => Object.keys(e).length > 0, [e]);
                return (l.useEffect(() => {
                        n && r(null == e ? void 0 : e.json);
                        let i = () => {
                                h()
                            }
                        ;
                        return d || x || t("/pricing"),
                        "pro.jsoncrack.com" !== window.location.hostname && t("/"),
                            window.addEventListener("offline", i),
                            () => window.removeEventListener("offline", i)
                    }
                    , [r, n, h, d, t, null == e ? void 0 : e.json, x]),
                d && !x && c) ? (0,
                    i.jsx)(ep, {
                    children: (0,
                        i.jsxs)(ev, {
                        children: [(0,
                            i.jsxs)(o(), {
                            children: [(0,
                                i.jsx)("title", {
                                children: "Editor | JSON Crack"
                            }), (0,
                                i.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
                            }), u && (0,
                                i.jsx)("meta", {
                                name: "robots",
                                content: "noindex,nofollow"
                            })]
                        }), (0,
                            i.jsx)(ef, {
                            children: (0,
                                i.jsx)(ev, {
                                children: (0,
                                    i.jsx)(ec, {})
                            })
                        }), (0,
                            i.jsx)(y, {})]
                    })
                }) : (0,
                    i.jsx)(a.f, {
                    visible: !0
                })
            }
        },
        4453: function (e, n, t) {
            "use strict";
            var i = t(42109)
                , l = t(18574);
            let r = {
                darkmodeEnabled: !1,
                collapseButtonVisible: !1,
                childrenCountVisible: !1,
                imagePreviewEnabled: !1,
                liveTransformEnabled: !0,
                viewMode: t(91721).w.Graph,
                aiEnabled: !0,
                scrollToZoom: !1
            }
                , o = (0,
                i.Ue)((0,
                l.tJ)(e => ({
                ...r,
                toggleScrollToZoom: n => e({
                    scrollToZoom: n
                }),
                toggleAI: n => e({
                    aiEnabled: n
                }),
                toggleLiveTransform: n => e({
                    liveTransformEnabled: n
                }),
                toggleDarkMode: n => e({
                    darkmodeEnabled: n
                }),
                toggleCollapseButton: n => e({
                    collapseButtonVisible: n
                }),
                toggleChildrenCount: n => e({
                    childrenCountVisible: n
                }),
                toggleImagePreview: n => {
                    e({
                        imagePreviewEnabled: n
                    })
                }
                ,
                setViewMode: n => e({
                    viewMode: n
                })
            }), {
                name: "config",
                version: 1
            }));
            n.Z = o
        },
        39986: function (e, n, t) {
            "use strict";
            var i = t(42109)
                , l = t(9259)
                , r = t(72195);
            let o = {
                cloud: !1,
                download: !1,
                import: !1,
                account: !1,
                node: !1,
                share: !1,
                login: !1,
                premium: !1,
                jwt: !1,
                schema: !1,
                cancelPremium: !1,
                review: !1,
                jq: !1,
                type: !1,
                compare: !1
            }
                , s = ["cloud", "account"]
                , a = []
                , d = (0,
                i.Ue)()(e => ({
                ...o,
                setVisible: n => t => {
                    let i = r.Z.getState();
                    return s.includes(n) && !i.isAuthenticated ? e({
                        login: !0
                    }) : a.includes(n) && !i.premium ? e({
                        premium: !0
                    }) : void (t && (0,
                        l.j)("modal", "open ".concat(n)),
                        e({
                            [n]: t
                        }))
                }
            }));
            n.Z = d
        }
    },
    function (e) {
        e.O(
            0,
            [7432, 3129, 5903, 9035, 8503, 2446, 5228, 3157, 1702, 1198, 8223, 2287, 6166, 6895, 603, 4124, 2888, 9774, 179],
            function () {
                return e(e.s = 91022)
            })
        _N_E = e.O()
    }
])
