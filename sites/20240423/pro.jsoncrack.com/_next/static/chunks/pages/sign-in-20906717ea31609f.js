self.webpackChunk_N_E = self.webpackChunk_N_E || []
self.webpackChunk_N_E.push([
    [1312],
    {
        56218: function (module, exports, require) {
            window.__NEXT_P = window.__NEXT_P || []
            window.__NEXT_P.push(
                [
                    "/sign-in",
                    function () {
                        return require(39055)
                    }
                ]
            )
        },
        87577: function (module, exports, require) {
            "use strict";

            function t() {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            }

            require.d(exports, {
                c: function () {
                    return t
                }
            })
        },
        39055: function (module, exports, require) {
            "use strict";
            require.r(exports)
            require.d(exports, {
                AuthenticationForm: function () {
                    return __AuthenticationForm
                }
            });
            var t = require(11527)
                , r = require(50959)
                , s = require(34673)
                , o = require.n(s)
                , a = require(23700)
                , l = require.n(a)
                , c = require(68129)
                , d = require(50549)
                , u = require(25838)
                , h = require(94900)
                , m = require(6360)
                , g = require(89201)
                , w = require(9326)
                , x = require(48567)
                , f = require(97076)
                , j = require(51120)
                , p = require(94311)
                , k = require(96930)
                , b = require(38695)
                , y = require(23511)
                , _ = require(87577)
                , S = require(72195);

            function __AuthenticationForm(e) {
                let {push} = c.useRouter()
                    , setSession = S.Z(e => e.setSession)
                    , setSessionLoading = S.Z(e => e.setSessionLoading)
                    , sessionLoading = S.Z(e => e.sessionLoading)
                    , isAuthenticated = S.Z(e => e.isAuthenticated)
                    , [j, b] = r.useState({
                        name: "",
                        email: "",
                        password: ""
                    })
                    , _ = async evt => {
                        evt.preventDefault()
                        setSessionLoading(true)
                        let {data, error} = await y.O.auth.signInWithPassword({
                            email: j.email,
                            password: j.password
                        });
                        if (error) {
                            setSessionLoading(false)
                            return p.toast.error(error.message);
                        }
                        await setSession(data.session)
                        push("/editor")
                        setSessionLoading(false)
                    }
                    , v = async e => {
                        setSessionLoading(!0),
                            await y.O.auth.signInWithOAuth({
                                provider: e,
                                options: {
                                    redirectTo: "".concat(window.location.origin, "/editor")
                                }
                            }),
                            setSessionLoading(!1)
                    }
                ;
                return isAuthenticated || false
                    ? t.jsxs(d.X, {
                        p: "lg",
                        maw: 400,
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            t.jsx(u.x, {
                                fz: "sm",
                                c: "dark",
                                children: "You are already signed in. Click the button below to go to the editor."
                            }),
                            t.jsx(l(), {
                                href: "/editor",
                                children: t.jsx(h.z, {
                                    mt: "lg",
                                    color: "dark",
                                    size: "lg",
                                    children: "GO TO EDITOR"
                                })
                            })
                        ]
                    })
                    : t.jsxs(d.X, {
                        ...e,
                        style: {
                            textAlign: "left"
                        },
                        children: [
                            t.jsx("form", {
                                onSubmit: _,
                                children: t.jsxs(m.K, {
                                    children: [
                                        t.jsx(g.o, {
                                            name: "email",
                                            required: !0,
                                            label: "Email",
                                            placeholder: "hello@jsoncrack.com",
                                            value: j.email,
                                            onChange: e => b(n => ({
                                                ...n,
                                                email: e.target.value
                                            })),
                                            radius: "sm",
                                            style: {
                                                color: "black"
                                            }
                                        }),
                                        t.jsx(w.W, {
                                            name: "password",
                                            required: !0,
                                            label: "Password",
                                            placeholder: "∗∗∗∗∗∗∗∗∗∗∗",
                                            value: j.password,
                                            onChange: e => b(n => ({
                                                ...n,
                                                password: e.target.value
                                            })),
                                            radius: "sm",
                                            style: {
                                                color: "black"
                                            }
                                        }),
                                        t.jsx(h.z, {
                                            color: "dark",
                                            type: "submit",
                                            radius: "sm",
                                            loading: sessionLoading,
                                            children: "Sign in"
                                        }),
                                        t.jsx(m.K, {
                                            gap: "sm",
                                            mx: "auto",
                                            align: "center",
                                            children: t.jsx(x.e, {
                                                component: l(),
                                                prefetch: !1,
                                                href: "/forgot-password",
                                                c: "dark",
                                                size: "xs",
                                                children: "Forgot your password?"
                                            })
                                        })
                                    ]
                                })
                            }),
                            t.jsx(f.i, {
                                my: "lg"
                            }),
                            t.jsxs(m.K, {
                                mb: "md",
                                mt: "md",
                                children: [
                                    t.jsx(h.z, {
                                        radius: "sm",
                                        leftSection: t.jsx(k.P_r, {
                                            size: "20"
                                        }),
                                        onClick: () => v("google"),
                                        color: "red",
                                        variant: "outline",
                                        children: "Sign in with Google"
                                    }),
                                    t.jsx(h.z, {
                                        radius: "sm",
                                        leftSection: t.jsx(k.idJ, {
                                            size: "20"
                                        }),
                                        onClick: () => v("github"),
                                        color: "dark",
                                        variant: "outline",
                                        children: "Sign in with GitHub"
                                    })
                                ]
                            })
                        ]
                    })
            }

            exports.default = () => {
                let {push} = c.useRouter();
                r.useEffect(() => {
                    _.c() && push("/")
                }, [push])

                return t.jsxs(b.Z, {
                    children: [
                        t.jsx(o(), {
                            children: t.jsx("title", {
                                children: "Sign In - JSON Crack"
                            })
                        }),
                        t.jsx(d.X, {
                            mt: 100,
                            mx: "auto",
                            maw: 400,
                            p: "lg",
                            withBorder: !0,
                            children: t.jsx(__AuthenticationForm, {})
                        }),
                        t.jsx(j.M, {
                            my: "xl",
                            children: t.jsx(x.e, {
                                component: l(),
                                prefetch: !1,
                                href: "/sign-up",
                                c: "gray",
                                fw: "bold",
                                children: "Don't have an account?"
                            })
                        })
                    ]
                })
            }
        }
    },
    function (e) {
        e.O(0, [7432, 3129, 1702, 1198, 8223, 305, 8695, 2888, 9774, 179], function () {
            return e(e.s = 56218)
        })
        _N_E = e.O()
    }
]);
