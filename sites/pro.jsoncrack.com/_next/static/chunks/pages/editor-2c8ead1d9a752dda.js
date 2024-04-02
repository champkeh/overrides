
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4154], {
  91022: function(e, n, i) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/editor", function() {
      return i(35599)
    }
    ])
  },
  35599: function(e, n, i) {
    "use strict";
    i.r(n),
    i.d(n, {
      StyledEditorWrapper: function() {
        return L
      },
      StyledPageWrapper: function() {
        return G
      },
      default: function() {
        return q
      }
    });
    var t = i(11527)
      , r = i(50959)
      , s = i(14711)
      , a = i.n(s)
      , l = i(34673)
      , o = i.n(l)
      , d = i(68129)
      , c = i(56105);
    i(79927);
    var u = i(1777);
    i(78927);
    var h = i(94311)
      , x = i(63983)
      , f = i(22478)
      , p = i(25838)
      , m = i(96930)
      , g = i(12453)
      , j = i(50350)
      , w = i(5621)
      , b = i(96973)
      , v = i(83058)
      , C = i(52470)
      , k = i(4453)
      , _ = i(39986)
      , y = i(9349)
      , E = i(66127);
    let S = u.ZP.div.withConfig({
      componentId: "sc-9ac5fbd7-0"
    })(["position:relative;display:flex;align-items:center;justify-content:space-between;border-top:1px solid ", ";background:", ";max-height:27px;height:27px;z-index:35;padding-right:6px;@media screen and (max-width:320px){display:none;}"], e=>{
      let {theme: n} = e;
      return n.BACKGROUND_MODIFIER_ACCENT
    }
    , e=>{
      let {theme: n} = e;
      return n.TOOLBAR_BG
    }
    )
      , T = u.ZP.div.withConfig({
      componentId: "sc-9ac5fbd7-1"
    })(["display:flex;align-items:center;justify-content:left;gap:4px;padding-left:8px;@media screen and (max-width:480px){display:none;}"])
      , Z = u.ZP.div.withConfig({
      componentId: "sc-9ac5fbd7-2"
    })(["display:flex;align-items:center;justify-content:right;gap:4px;"])
      , O = u.ZP.button.withConfig({
      componentId: "sc-9ac5fbd7-3"
    })(["display:flex;align-items:center;gap:4px;width:fit-content;margin:0;height:28px;padding:4px;font-size:12px;font-weight:400;color:", ";background:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;&:hover:not(&:disabled){background-image:linear-gradient(rgba(0,0,0,0.1) 0 0);color:", ";}&:disabled{opacity:0.6;cursor:default;}"], e=>{
      let {theme: n} = e;
      return n.INTERACTIVE_NORMAL
    }
    , e=>{
      let {$bg: n} = e;
      return n
    }
    , e=>{
      let {theme: n} = e;
      return n.INTERACTIVE_HOVER
    }
    )
      , P = ()=>{
      let {replace: e} = (0,
      d.useRouter)()
        , n = (0,
      E.Z)(e=>e.user)
        , i = (0,
      y.x)(e=>e.getCurrentTab())
        , s = (0,
      y.x)(e=>e.setFullscreen)
        , a = (0,
      y.x)(e=>e.fullscreen)
        , l = (0,
      y.x)(e=>e.updateTab)
        , o = (0,
      k.Z)(e=>e.toggleLiveTransform)
        , c = (0,
      k.Z)(e=>e.liveTransformEnabled)
        , u = (0,
      _.Z)(e=>e.setVisible)
        , P = (0,
      y.x)(e=>e.setHasChanges)
        , I = (0,
      C.$)(e=>e.nodeCount)
        , [N,R] = r.useState(!1)
        , z = r.useCallback(async()=>{
        if (!n)
          return u("login")(!0);
        if (i.has_changes && !i.error)
          try {
            R(!0),
            h.default.loading("Saving document...", {
              id: "fileSave"
            });
            let {data: n, error: t} = await v.F.upsert({
              ...i.created_at && {
                id: i.id
              },
              contents: i.content,
              format: i.format
            });
            if (t)
              throw t;
            n && e({
              query: {
                json: n
              }
            }),
            i.created_at || l({
              ...i,
              id: n
            }),
            h.default.success("Document saved to cloud.", {
              id: "fileSave"
            }),
            P(!1)
          } catch (e) {
            h.default.error(e.message, {
              id: "fileSave"
            })
          } finally {
            R(!1)
          }
      }
      , [i, e, P, u, l, n]);
      return (0,
      t.jsxs)(S, {
        children: [(0,
        t.jsxs)(T, {
          children: [(0,
          t.jsx)(O, {
            onClick: ()=>s(!a),
            children: (0,
            t.jsx)(g.KOt, {})
          }), (null == i ? void 0 : i.name) && (0,
          t.jsxs)(O, {
            onClick: ()=>u("cloud")(!0),
            children: [(0,
            t.jsx)(b.oFx, {}), i.name]
          }), (0,
          t.jsx)(O, {
            children: i.error ? (0,
            t.jsx)(x.u, {
              fz: "xs",
              label: i.error,
              position: "top",
              multiline: !0,
              withArrow: !0,
              maw: 400,
              style: {
                whiteSpace: "pre-wrap"
              },
              children: (0,
              t.jsxs)(f.k, {
                align: "center",
                gap: 2,
                children: [(0,
                t.jsx)(b.$Vt, {
                  color: "red",
                  size: 16
                }), (0,
                t.jsx)(p.x, {
                  c: "red",
                  fw: 500,
                  fz: "xs",
                  children: "Invalid"
                })]
              })
            }) : (0,
            t.jsxs)(f.k, {
              align: "center",
              gap: 2,
              children: [(0,
              t.jsx)(j.S5G, {}), (0,
              t.jsx)(p.x, {
                size: "xs",
                children: "Valid"
              })]
            })
          }), ((null == i ? void 0 : i.owner_email) === (null == n ? void 0 : n.email) || !i.owner_email && n) && (0,
          t.jsxs)(O, {
            onClick: z,
            disabled: N || !!i.error,
            children: [i.has_changes ? (0,
            t.jsx)(m.IEK, {}) : (0,
            t.jsx)(m.U8$, {}), i.has_changes ? i.created_at ? "Unsaved Changes" : "Save to Cloud" : "Saved"]
          }), c ? (0,
          t.jsxs)(O, {
            disabled: !0,
            onClick: ()=>o(!1),
            children: [(0,
            t.jsx)(b.LSP, {}), (0,
            t.jsx)(p.x, {
              fz: "xs",
              children: "Live Transform"
            })]
          }) : (0,
          t.jsxs)(O, {
            onClick: ()=>o(!0),
            children: [(0,
            t.jsx)(b.tnZ, {}), (0,
            t.jsx)(p.x, {
              fz: "xs",
              children: "Manual Transform"
            })]
          }), !c && (0,
          t.jsxs)(O, {
            disabled: !0,
            children: [(0,
            t.jsx)(w.lTV, {}), "Transform"]
          })]
        }), (0,
        t.jsxs)(Z, {
          children: [(0,
          t.jsxs)(O, {
            children: ["Nodes: ", I]
          }), (0,
          t.jsxs)(O, {
            onClick: ()=>u("review")(!0),
            children: [(0,
            t.jsx)(b.xJq, {}), "Feedback"]
          })]
        })]
      })
    }
    ;
    var I = i(4052)
      , N = i(27655)
      , R = i(97066)
      , z = i(14890);
    let A = a()(()=>Promise.resolve().then(i.bind(i, 94311)).then(e=>e.Toaster), {
      loadableGenerated: {
        webpack: ()=>[null]
      }
    })
      , V = a()(()=>Promise.all([i.e(8503), i.e(8621), i.e(5730), i.e(9806), i.e(4055), i.e(9201), i.e(6142), i.e(3862), i.e(1432), i.e(9605), i.e(9667), i.e(4939), i.e(6696)]).then(i.bind(i, 36696)), {
      loadableGenerated: {
        webpack: ()=>[36696]
      }
    })
      , B = new N.S({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: !1,
          retry: !1
        }
      }
    })
      , D = e=>{
      let {children: n} = e
        , i = (0,
      k.Z)(e=>e.darkmodeEnabled);
      return (0,
      t.jsxs)(u.f6, {
        theme: i ? z.$_ : z.Wb,
        children: [(0,
        t.jsx)(A, {
          position: "bottom-right",
          containerStyle: {
            bottom: 34,
            right: 8,
            fontSize: 14
          },
          toastOptions: {
            style: {
              background: "#4D4D4D",
              color: "#B9BBBE",
              borderRadius: 4
            }
          }
        }), (0,
        t.jsx)(I.M, {
          forceColorScheme: i ? "dark" : "light",
          children: (0,
          t.jsxs)(R.aH, {
            client: B,
            children: [(0,
            t.jsx)(V, {}), n]
          })
        })]
      })
    }
      , F = a()(()=>Promise.all([i.e(2446), i.e(5228), i.e(3157), i.e(4055), i.e(8500), i.e(9201), i.e(1432), i.e(214), i.e(8256)]).then(i.bind(i, 85241)), {
      loadableGenerated: {
        webpack: ()=>[85241]
      }
    })
      , G = u.ZP.div.withConfig({
      componentId: "sc-fd07322b-0"
    })(["height:calc(100vh - 27px);width:100%;@media only screen and (max-width:320px){height:100vh;}"])
      , L = u.ZP.div.withConfig({
      componentId: "sc-fd07322b-1"
    })(["width:100%;height:100%;overflow:hidden;"]);
    var q = ()=>{
      let {query: e, isReady: n, push: i} = (0,
      d.useRouter)()
        , s = (0,
      y.x)(e=>e.fetchUrl)
        , a = (0,
      E.Z)(e=>e.premium)
        , l = (0,
      E.Z)(e=>e.isAuthenticated)
        , u = (0,
      E.Z)(e=>e.sessionLoading)
        , x = r.useMemo(()=>Object.keys(e).length > 0, [e]);
      return (r.useEffect(()=>{
        u || a && l || (i("/pricing"),
        h.default.error("JSON Crack Pro requires premium plan"))
      }
      , [l, a, i, u]),
      r.useEffect(()=>{
        n && s(null == e ? void 0 : e.json)
      }
      , [s, n, null == e ? void 0 : e.json]),
      a) ? (0,
      t.jsx)(D, {
        children: (0,
        t.jsxs)(L, {
          children: [(0,
          t.jsxs)(o(), {
            children: [(0,
            t.jsx)("title", {
              children: "Editor | JSON Crack"
            }), (0,
            t.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
            }), x && (0,
            t.jsx)("meta", {
              name: "robots",
              content: "noindex,nofollow"
            })]
          }), (0,
          t.jsx)(G, {
            children: (0,
            t.jsx)(L, {
              children: (0,
              t.jsx)(F, {})
            })
          }), (0,
          t.jsx)(P, {})]
        })
      }) : (0,
      t.jsx)(c.f, {
        visible: !0
      })
    }
  },
  39986: function(e, n, i) {
    "use strict";
    var t = i(42109)
      , r = i(9259)
      , s = i(66127);
    let a = {
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
      , l = ["cloud", "account"]
      , o = []
      , d = (0,
    t.Ue)()(e=>({
      ...a,
      setVisible: n=>i=>{
        let t = s.Z.getState();
        return l.includes(n) && !t.isAuthenticated ? e({
          login: !0
        }) : o.includes(n) && !t.premium ? e({
          premium: !0
        }) : void (i && (0,
        r.j)("modal", "open ".concat(n)),
        e({
          [n]: i
        }))
      }
    }));
    n.Z = d
  }
}, function(e) {
  e.O(0, [7432, 3129, 5903, 9035, 946, 1040, 7691, 1626, 1385, 4124, 2888, 9774, 179], function() {
    return e(e.s = 91022)
  }),
  _N_E = e.O()
}
]);
