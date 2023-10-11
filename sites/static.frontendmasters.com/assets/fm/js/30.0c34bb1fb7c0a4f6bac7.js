/*! For license information please see 30.0c34bb1fb7c0a4f6bac7.js.LICENSE.txt */
/*!
     * cookie
     * Copyright(c) 2012-2014 Roman Shtylman
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */

self.webpackChunk = self.webpackChunk || []
self.webpackChunk.push(
    [
        [30],
        {
            30: function (e, t, o) {
                "use strict";
                o.r(t),
                    o.d(t, {
                        default: function () {
                            return ss
                        }
                    });
                var s = o(9458)
                    , n = o.n(s)
                    , i = o(9853)
                    , a = o.n(i)
                    , r = o(5185)
                    , l = o(4443)
                    , c = o.n(l)
                    , d = o(6830)
                    , p = o.n(d)
                    , u = o(2910)
                    , v = o.n(u)
                    , h = o(8178)
                    , m = o.n(h);

                function f(e, t) {
                    void 0 === t && (t = {});
                    var o = t.insertAt;
                    if (e && "undefined" != typeof document) {
                        var s = document.head || document.getElementsByTagName("head")[0]
                            , n = document.createElement("style");
                        n.type = "text/css",
                            "top" === o && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n),
                            n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
                    }
                }

                function g(e) {
                    e.trackError = function (e) {
                        window.TrackJS && window.TrackJS.isInstalled() && ("[object Object]" === e.message && e.response && e.response.message && (e.message = e.response.message),
                            e.message = "FMP: " + e.message,
                            window.TrackJS.track(e))
                    }
                        ,
                        e.addErrorMetadata = function (e, t) {
                            window.TrackJS && window.TrackJS.isInstalled() && window.TrackJS.addMetadata(e, t)
                        }
                        ,
                        e.addErrorMetadata("playerVersion", "0.15.3"),
                        e.addErrorMetadata("playerType", e.playerType)
                }

                function y() {
                    this.previousValue = null,
                        this.value = null,
                        this.subscribers = []
                }

                f('.vjs-svg-icon{fill:#fff;background-position:50%;background-repeat:no-repeat;display:inline-block;height:1.5em;width:1.5em}.vjs-svg-icon:before{content:none!important}.vjs-control:focus .vjs-svg-icon,.vjs-svg-icon:hover{filter:drop-shadow(0 0 .25em #fff)}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-modal-dialog,.vjs-button>.vjs-icon-placeholder:before,.vjs-modal-dialog .vjs-modal-dialog-content{height:100%;left:0;position:absolute;top:0;width:100%}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.vjs-button>.vjs-icon-placeholder:before{text-align:center}@font-face{font-family:VideoJS;font-style:normal;font-weight:400;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABUgAAsAAAAAItAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAPgAAAFZRiV33Y21hcAAAAYQAAAEJAAAD5p42+VxnbHlmAAACkAAADwwAABdk9R/WHmhlYWQAABGcAAAAKwAAADYn8kSnaGhlYQAAEcgAAAAdAAAAJA+RCL1obXR4AAAR6AAAABMAAAC8Q44AAGxvY2EAABH8AAAAYAAAAGB7SIHGbWF4cAAAElwAAAAfAAAAIAFAAI9uYW1lAAASfAAAASUAAAIK1cf1oHBvc3QAABOkAAABfAAAAnXdFqh1eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGR7xDiBgZWBgaWQ5RkDA8MvCM0cwxDOeI6BgYmBlZkBKwhIc01hcPjI+FGPHcRdyA4RZgQRADbZCycAAHic7dPXbcMwAEXRK1vuvffem749XAbKV3bjBA6fXsaIgMMLEWoQJaAEFKNnlELyQ4K27zib5PNF6vl8yld+TKr5kH0+cUw0xv00Hwvx2DResUyFKrV4XoMmLdp06NKjz4AhI8ZMmDJjzoIlK9Zs2LJjz4EjJ85cuHLjziPe/0UWL17mf2tqKLz/9jK9f8tXpGCoRdPKhtS0RqFkWvVQNtSKoVYNtWaoddPXEBqG2jQ9XWgZattQO4baNdSeofYNdWCoQ0MdGerYUCeGOjXUmaHODXVhqEtDXRnq2lA3hro11J2h7g31YKhHQz0Z6tlQL4Z6NdSbod4N9WGoT9MfHF6GmhnZLxyDcRMAAAB4nJ1YC1gUV5auc6urCmxEGrq6VRD6ATQP5dHPKK8GRIyoKApoEBUDAiGzGmdUfKNRM4qLZrUZdGKcGN/GZJKd0SyOWTbfbmZ2NxqzM5IxRtNZd78vwYlJdtREoO7sudVNq6PmmxmKqrqPU+eee173P80Bh39Cu9DOEY4DHZBK3i20D/QRLcfxbE5sEVtwLpZzclw4ibFIkSCJUcZ4MBpMnnzwuKNsGWBL5i3qy6kO2dVpvUpKbkAP9fq62rdeGJ+TM/7C1nbIutfuWrWk5ci4zMxxR1qW/N+9JsmCGXj9VKWhFx/6tr/nz78INDm2C9yPF/fDcxLuyKxLBZ1ZBz2QTi+RSkiH5RrDQJ/GgGQadX9m0YSURs7GpSG905Zsk41uj14yul1OtieZ7QUk5GRG/YiS7PYYPSAZNRed9sq3+bOpz00rKb7pe/ZEZvbALxZAHT3AFoH8GXP3rt67QFn40kt8W13FjLTDb48c+fSi5/7h0P4dL5yz7DPtbmgmYxfQA9RL2+EOfTcvdp+1vmuBpvOll1As1S6ak0IvJzC7sKWJFtJgBd2uWcg+0Zyg7dzQfhcjXRgXGZRf5/a4A58IDU777Nl252AUk4m2ByRRjqTNqIDCEJeAnU3iCFwrkrNwXEzg4yFevBwypzxkcX+AIfk3VEKl3XmWbT8788SzvpvFJaiOezL6QyuSr9VNf97csNu0z3LuhR0wATUxZAfVBwVOy+nQFhxYdWaXlXe4HC4zWGWzzsrLDtmhI9pOWOHv7PTT7XybH1Z0+v2d5Abd3kmG+TsH23CS/KwTxx/JkzEwx6jcQOUc42LLwHJ/J93uZ9ygh3HuZGwqsY9dWDHQ58dxNqyqKRQTYdxwTubiOSs3FiMDkq0WSZQgCT0GBDOg2lxOAd1FlPVGs4AKBAcYHHaP2wPkHaivmLF5zYqnIZrvcHx5gN4k/6tchNW1DtdgNL2KrxEkS/kfnIHoVnp1VjmjpTf5r0lTzLj0mdS28tX+XGorU364eMPmnWVl8J36nlKGw3CZhjEiuMw8h8mKvhGD+4/lElBWjAhLJMg6fTw4zPZ8cOmcGQBm2Qxml1nAm13CpYGq1JKUlJJUzQn1PTAO0mgv6VMMpA/DuRfSWEu4lDIxdbAtdWIKvnn2Vk766CWfz9fpY0sH/UpdP50rfszaVpdVRmvIejEdLMk45s4Bu0EWHjeOySmFyZSiMahvZdNSn29peoI/YexYfKQTLeurTXXwEVLeSfInTWHkkMaeUx7sBvOCSTSj3AlcKjfueyS36tCrXDlgRtF0etFq9jhc1kfKuBT/OwMr0F4UUTTh1AN0g20+H/ScPcsIEsYu9d/zN5PmjprPtNwI1ZZcDK6iC97Mcjp2y2aX36f+QbpGHrgRuHlXJ+Zf6PFRL2uQSp8vxHeF2IoRb8Rd2rhMzsNxSRmEuKK4JFnkojhMcx6jzqHzGMGFcW+MhBj0bhf6cowN+45I4LHvwT6fteu7M42wGRI/pxcg6/MZdEvt1U1XaulHFXuLmqov/MukvRVL35/b3ODM1+4aPjtzeK7zmUkV2h3DN54HaQ9GzJvxHRb6Ks2gB81fwqraT+A7GvZJrRLRofU6G0urNL+zFw3v0FaVDFxsKEZW56F31r6ip6vOL+FCObBPuIMRiXld9RaMdLzRIOGhPey2T9vA/35DmZPK9IWaT9d/WgOGMieYqJ/dzjLIhZU118gbysxrNUGefxD6UO/hyNNllpFTOIbx32kSFQctnweV5PxTMHLjRqiAN+fQE9gL+Xy5WB6MOS4GJJuYbDUHhcKDhHGRbLzOpjsjdM1+iwAZLGeieehACX2hhI7SjK/ZUTNrvVje31TxJiFBGYViWFkCn9PMeX9fS6qVbzfCj4fOCTzDnuWy2c4xA7mdNkA3RS9FH2VeqzdCBlixxbzXjvkHU1I8BOYFb1pZvPIHSSIj4svT8xpzcxtXN+ZKyjdDvbz08niiF3PqV9Tn5NST8vg48MTaY8E5xqSSIsWoWHo+LtAzxdH/GDUyp37CBEYfso04F/NlMTcDJUTpECLY0HFGQHImE8xsEUdgnrQlixIvGhJA1BvxpDHGxEMBYFeNOHcBJlSjwe2JcSfbBEsGOPPBHg/6SBBOCsLLw0SpUxod0Z1bFMfLkbQ3UiZxEyd0Dx8t+SRBu18Q9msFbI4e3p1THEfkSEh7kEJ5orR10qTWDvbgPWn5aWvCYyOAjwgXyjJi34uMjo58L25cmRAeQZWI2PA1QQLsPESAH8WGFwZZ4SPoR73BHPzIPMJj9AreBzKUmrH4todT18ANvi1oc3YGjUT/0j+ExUwq8PI9BLaCQIpvewwYu2evAG/Vo/5avPdY7o+BemLLXw3y+AdkzP9bpIxB1wm5EYq8fesHbPEPtm6HrHvtx4jcGPR8fDDpkZBefIjB46QnlUNRltv4Z/pO/J6dxEjhYAtmoMeq+GozvUVvNYOW3m6GCIhoprcfr97B8AcIQYsfD8ljUvGNjvkrpj0ETA48ZMIxCeqsRIsQALE0gi2GB+glSOfbOjW3GSBM9yPq8/rpJXrJDz0BPxV6xdN4uiCGDQed3WhgFkBUZEFsmeyyBpzXrm7UGTBZG8Lh5aubFufk5eUsbrrFGr7McYdbltxa0nKYqRKbQjvikXYkTGM0f2xuyM3Ly21oXnWfvf6I1BmZwfh7EWWIYsg2nHhsDhOnczhJcmI6eBAmy3jZ3RiJmKQR/JA99FcwsfaVbNDDyi1rL9NPj9hfo61wjM6BjzOLijLpeTgk/pL+ip6tfYWupzeOgPny2tcUu9J/9mhxJlgyi985NFRbvCVewXUNXLJaW0RxZqtRYtnfYdcYomXQWdnJHQA3jiEEkeTQWcWxdDP9IvvVWvo2TK553XEMEq+s69/QDU1Q7p0zxwsm9qS379whr8NI2PJqLUyGyfNeX3eFfnJU2U+uHR9cVV1IqgurqwuV44XVp0h2qN55X5XJwtk59yP0IZuHrqBOBIuIYhkcoT6Kx79Pu2HS/IPZIMOqLWs/pteOOk4NPgEb6QAIdAPsyZk5Mwd+wVaHMexJv719W7xCu2l37UG6lvYdBcvHa08p89741zd63phTRGqL5ggo6SlvdbWXzCqsPq78NnSu7wnKy2HNZbVoRCI7UJEOyRj+sPE002tOOY7Qa5fXboFWkLNeqYUSZRocp9XwSUZxcQZ9Hw6LV2pOoVmvHQEDbGIENEG5i6bLgMSM4n8+FNLTtAds99DaWEvgcf4o5SyYe9x+kF6/tGoTPAdRmS/XQIEy//QxKC2oqioAI3tS5auvxCtzT6y6RK8fhChYcwCJaMJhxc0vqSxQ/qmgsrKAlBZUHlauheTpvd9uj5DnLzJct6qfq5fXbYHVIGcfrIVJihbaVLu1wW7Vbs8zK0A8e9Jvb91S9cVMjPrazD6gpfeZTXzYbCFMcppVRsGMpp55OWgx1/3JeAxW1Y7AORgM/m3rWrsdLkQVmEVSU16cX/e7uvkvpqRiQsG06XJ0t64Tf+l0nG1dt025gyOIZlvq5u9KSU1N2TW/rsWnnMRPyTDkctbhvIcNvYIXWyLzdwYLoYesUbaQG4iK2cWO2gdpeUYLqDD0MUTOPhDIGnZEs58yArR86FznuWEsU4YDi2x26dA4klkn8Qa6vhk2QUfX4Jxm/ngX9r7ogn1dmlmwqZmuhxtdg9XN/DEcUgqb+9hMyNansfaQET2mcROCmGEMVqxm5u+h6kN2MOwgqykV2wH9yQG9DvVFU38Pogaf4FVuE62KI/oJ02RDdWW2w5dqQwU/8+N1q1DlvsL863u61KLE7x/o8w0VJQM/Y/SQ3unIrqxueEa1BqT5VFNsO7p39/UC771a77RowpaKe9nvJQIT1Pog5LGx8XblBKmCNGTf3xMogAQvPnz9PYKX/08sVDTG1OKUlOLUgS/UaZtm1NAaYTsl7i9ZQ+L6O4Rl0OGa577LuWvc+C+x96/vYh0lLBuM+7XwI/dTLtdT7v4d6rRTWDnku0IBrqFnZ5bVIqKP8lasJlithWnaLhTsr8qFJBulF/70p4undou36HeTJ5+jv1fCybeQ8nH3+Xv6aENczmOFlab+hqMDg1rLOt12A+tiUFrYDwQ6c3RUJp601nzegTNX6WlYAI2zSUV945F6zU56ZmZVQaWspWcIADxJ9GmljQUnL2p2Dpr5T8H+5KJFu+vqBq8qvyHRzStLHPEO5SPYCV9nZe0yZT2RcH0oHvegSzNEJ0oGWU8iQWM12dgPEugngVceGIwZgPFp0BiT1a0a3R5Rcot7ihfA1J/20v96jX7zmTX9s583H0kwx6WnLd09cXrR9LGroOa9sHNbdyz8wcKk5lqhaVFJZNwmqtw884MXNdvJujpBa3xzuSaZH9sxa06Z7x+HJSduPbdYHv/DgmEhfbehvlmGN7JUkcG78GDM12CeyFFTPNqVeNxC1gzjz+c2nVo63Xxs8rKJWXoBJM0tmEbfGm4qzpoOH3xpzQfyxLzW1gnE9NHo6tol1eMEic4ZVPrjnVi0kqAe2sQ2bgqupScaq8WGlUWgWHI51SKJl/UYT6zccNsCSkBtiVZLsiefuFSDYT3Fi8Zk7EUnmjTRYtsFeuDDJS05MW79M3mr3mla+d8dzac31KTPmBYfFiYSUef48PhPjm9ryZsSGZZkdNvzq0Y9rdNcwDq5Dg5C3QW+7UN64IKptvS3tvHbvu5c9pv1Exau21rc9LIpwpQwUjTq8576yeVDz5+4WZ1nXT43wV60rPLJbDp/UksNrP3iQ2SA63Pst058gOYDbhRnRUw8l/sRt4HbxPzO4WYpInCpuVgSbVh6JXuwnnJngKTTCwaPWmG5Xbhpm1U0Yt3FyBGpGYemPM77p2TD904JjgJ2QFpFLeYpGx8X15Qx1Zk31p5ki9ZLUuXE0lmuJlcakJMVLeFS1iIvrB8drY0aloilakqCZwzwRORtxlgwxS4IThggJd4TDxoiaAIT80fFPGrCPPru+puFn504P/ybr4ihA/6dKASLshEJic7xE8tmzu3KzA7TABBe8y5fNbWo3ilQn/SuFKM16b2l5bOeayqfGhYmhIulU+fVNDdWVv4NMzX10MBHyPR5uhWUu8D9P1VnIMt4nGNgZGBgAOJ/1bf64vltvjJwszOAwAOlmqvINEc/WJyDgQlEAQA+dgnjAHicY2BkYGBnAAGOPgaG//85+hkYGVCBPgBGJwNkAAAAeJxjYGBgYB/EmKMPtxwAhg4B0gAAAAAAAA4AaAB+AMwA4AECAUIBbAGYAe4CLgKKAtAC/ANiA4wDqAPgBDAEsATaBQgFWgXABggGLgZwBqwG9gdOB4oH0ggqCHAIhgicCMgJJAlWCYgJrAnyCkAKdgrkC7J4nGNgZGBg0GdoZmBnAAEmIOYCQgaG/2A+AwAaqwHQAHicXZBNaoNAGIZfE5PQCKFQ2lUps2oXBfOzzAESyDKBQJdGR2NQR3QSSE/QE/QEPUUPUHqsvsrXjTMw83zPvPMNCuAWP3DQDAejdm1GjzwS7pMmwi75XngAD4/CQ/oX4TFe4Qt7uMMbOzjuDc0EmXCP/C7cJ38Iu+RP4QEe8CU8pP8WHmOPX2EPz87TPo202ey2OjlnQSXV/6arOjWFmvszMWtd6CqwOlKHq6ovycLaWMWVydXKFFZnmVFlZU46tP7R2nI5ncbi/dDkfDtFBA2DDXbYkhKc+V0Bqs5Zt9JM1HQGBRTm/EezTmZNKtpcAMs9Yu6AK9caF76zoLWIWcfMGOSkVduvSWechqZsz040Ib2PY3urxBJTzriT95lipz+TN1fmAAAAeJxtkXlT2zAQxf1C4thJAwRajt4HRy8VMwwfSJHXsQZZcnUQ+PYoTtwpM+wf2t9brWZ2n5JBsol58nJcYYAdDDFCijEy5JhgileYYRd72MccBzjEa7zBEY5xglO8xTu8xwd8xCd8xhd8xTec4RwXuMR3/MBP/MJvMPzBFYpk2Cr+OF0fTEgrFI1aHhxN740KDbEmeJpsWZlVj40s+45aLuv9KijlhCXSjLQnu/d/4UH6sWul1mRzFxZeekUuE7z10mg3qMtM1FGQddPSrLQyvJR6OaukItYXDp6pCJrmz0umqkau5pZ2hFmm7m+ImG5W2t0kZoJXUtPhVnYTbbdOBdeCVGqpJe7XKTqSbRK7zbdwXfR0U+SVsStuS3Y76em6+Ic3xYiHUppc04Nn0lMzay3dSxNcp8auDlWlaCi48yetFD7Y9USsx87G45cuop1ZxQUtjLnL4j53FO0a+5X08UXqQ7NQNo92R0XOz7sxWEnxN2TneJI8Acttu4Q=) format("woff")}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder,.vjs-icon-play{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder:before,.vjs-icon-play:before{content:"\\f101"}.vjs-icon-play-circle{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-play-circle:before{content:"\\f102"}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder,.vjs-icon-pause{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before,.vjs-icon-pause:before{content:"\\f103"}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder,.vjs-icon-volume-mute{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,.vjs-icon-volume-mute:before{content:"\\f104"}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder,.vjs-icon-volume-low{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before,.vjs-icon-volume-low:before{content:"\\f105"}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder,.vjs-icon-volume-mid{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before,.vjs-icon-volume-mid:before{content:"\\f106"}.video-js .vjs-mute-control .vjs-icon-placeholder,.vjs-icon-volume-high{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-mute-control .vjs-icon-placeholder:before,.vjs-icon-volume-high:before{content:"\\f107"}.video-js .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-enter{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-enter:before{content:"\\f108"}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-exit{font-family:VideoJS;font-style:normal;font-weight:400}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-exit:before{content:"\\f109"}.vjs-icon-spinner{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-spinner:before{content:"\\f10a"}.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subtitles-button .vjs-icon-placeholder,.vjs-icon-subtitles{font-family:VideoJS;font-style:normal;font-weight:400}.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subtitles-button .vjs-icon-placeholder:before,.vjs-icon-subtitles:before{content:"\\f10b"}.video-js .vjs-captions-button .vjs-icon-placeholder,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder,.vjs-icon-captions{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-captions-button .vjs-icon-placeholder:before,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,.vjs-icon-captions:before{content:"\\f10c"}.vjs-icon-hd{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-hd:before{content:"\\f10d"}.video-js .vjs-chapters-button .vjs-icon-placeholder,.vjs-icon-chapters{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-chapters-button .vjs-icon-placeholder:before,.vjs-icon-chapters:before{content:"\\f10e"}.vjs-icon-downloading{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-downloading:before{content:"\\f10f"}.vjs-icon-file-download{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-file-download:before{content:"\\f110"}.vjs-icon-file-download-done{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-file-download-done:before{content:"\\f111"}.vjs-icon-file-download-off{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-file-download-off:before{content:"\\f112"}.vjs-icon-share{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-share:before{content:"\\f113"}.vjs-icon-cog{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-cog:before{content:"\\f114"}.vjs-icon-square{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-square:before{content:"\\f115"}.video-js .vjs-play-progress,.video-js .vjs-volume-level,.vjs-icon-circle,.vjs-seek-to-live-control .vjs-icon-placeholder{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before,.vjs-icon-circle:before,.vjs-seek-to-live-control .vjs-icon-placeholder:before{content:"\\f116"}.vjs-icon-circle-outline{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-circle-outline:before{content:"\\f117"}.vjs-icon-circle-inner-circle{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-circle-inner-circle:before{content:"\\f118"}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder,.vjs-icon-cancel{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{content:"\\f119"}.vjs-icon-repeat{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-repeat:before{content:"\\f11a"}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder,.vjs-icon-replay{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before,.vjs-icon-replay:before{content:"\\f11b"}.video-js .vjs-skip-backward-5 .vjs-icon-placeholder,.vjs-icon-replay-5{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-skip-backward-5 .vjs-icon-placeholder:before,.vjs-icon-replay-5:before{content:"\\f11c"}.video-js .vjs-skip-backward-10 .vjs-icon-placeholder,.vjs-icon-replay-10{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-skip-backward-10 .vjs-icon-placeholder:before,.vjs-icon-replay-10:before{content:"\\f11d"}.video-js .vjs-skip-backward-30 .vjs-icon-placeholder,.vjs-icon-replay-30{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-skip-backward-30 .vjs-icon-placeholder:before,.vjs-icon-replay-30:before{content:"\\f11e"}.video-js .vjs-skip-forward-5 .vjs-icon-placeholder,.vjs-icon-forward-5{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-skip-forward-5 .vjs-icon-placeholder:before,.vjs-icon-forward-5:before{content:"\\f11f"}.video-js .vjs-skip-forward-10 .vjs-icon-placeholder,.vjs-icon-forward-10{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-skip-forward-10 .vjs-icon-placeholder:before,.vjs-icon-forward-10:before{content:"\\f120"}.video-js .vjs-skip-forward-30 .vjs-icon-placeholder,.vjs-icon-forward-30{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-skip-forward-30 .vjs-icon-placeholder:before,.vjs-icon-forward-30:before{content:"\\f121"}.video-js .vjs-audio-button .vjs-icon-placeholder,.vjs-icon-audio{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-audio-button .vjs-icon-placeholder:before,.vjs-icon-audio:before{content:"\\f122"}.vjs-icon-next-item{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-next-item:before{content:"\\f123"}.vjs-icon-previous-item{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-previous-item:before{content:"\\f124"}.vjs-icon-shuffle{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-shuffle:before{content:"\\f125"}.vjs-icon-cast{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-cast:before{content:"\\f126"}.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-enter{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-enter:before{content:"\\f127"}.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-exit{font-family:VideoJS;font-style:normal;font-weight:400}.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-exit:before{content:"\\f128"}.vjs-icon-facebook{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-facebook:before{content:"\\f129"}.vjs-icon-linkedin{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-linkedin:before{content:"\\f12a"}.vjs-icon-twitter{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-twitter:before{content:"\\f12b"}.vjs-icon-tumblr{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-tumblr:before{content:"\\f12c"}.vjs-icon-pinterest{font-family:VideoJS;font-style:normal;font-weight:400}.vjs-icon-pinterest:before{content:"\\f12d"}.video-js .vjs-descriptions-button .vjs-icon-placeholder,.vjs-icon-audio-description{font-family:VideoJS;font-style:normal;font-weight:400}.video-js .vjs-descriptions-button .vjs-icon-placeholder:before,.vjs-icon-audio-description:before{content:"\\f12e"}.video-js{background-color:#000;box-sizing:border-box;color:#fff;display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-style:normal;font-weight:400;line-height:1;padding:0;position:relative;vertical-align:top;word-break:normal}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{height:100%!important;width:100%!important}.video-js[tabindex="-1"]{outline:none}.video-js *,.video-js :after,.video-js :before{box-sizing:inherit}.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;list-style-position:outside;margin:0}.video-js.vjs-1-1,.video-js.vjs-4-3,.video-js.vjs-9-16,.video-js.vjs-16-9,.video-js.vjs-fluid{max-width:100%;width:100%}.video-js.vjs-1-1:not(.vjs-audio-only-mode),.video-js.vjs-4-3:not(.vjs-audio-only-mode),.video-js.vjs-9-16:not(.vjs-audio-only-mode),.video-js.vjs-16-9:not(.vjs-audio-only-mode),.video-js.vjs-fluid:not(.vjs-audio-only-mode){height:0}.video-js.vjs-16-9:not(.vjs-audio-only-mode){padding-top:56.25%}.video-js.vjs-4-3:not(.vjs-audio-only-mode){padding-top:75%}.video-js.vjs-9-16:not(.vjs-audio-only-mode){padding-top:177.7777777778%}.video-js.vjs-1-1:not(.vjs-audio-only-mode){padding-top:100%}.video-js.vjs-fill:not(.vjs-audio-only-mode),.video-js .vjs-tech{height:100%;width:100%}.video-js .vjs-tech{left:0;position:absolute;top:0}.video-js.vjs-audio-only-mode .vjs-tech{display:none}body.vjs-full-window,body.vjs-pip-window{height:100%;margin:0;padding:0}.vjs-full-window .video-js.vjs-fullscreen,body.vjs-pip-window .video-js{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;z-index:1000}.video-js.vjs-fullscreen:not(.vjs-ios-native-fs),body.vjs-pip-window .video-js{display:block;height:100%!important;padding-top:0!important;width:100%!important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-pip-container .vjs-pip-text{background-color:rgba(0,0,0,.7);bottom:10%;font-size:2em;padding:.5em;position:absolute;text-align:center;width:100%}.vjs-layout-small.vjs-pip-container .vjs-pip-text,.vjs-layout-tiny.vjs-pip-container .vjs-pip-text,.vjs-layout-x-small.vjs-pip-container .vjs-pip-text{bottom:0;font-size:1.4em}.vjs-hidden{display:none!important}.vjs-disabled{cursor:default;opacity:.5}.video-js .vjs-offscreen{height:1px;left:-9999px;position:absolute;top:0;width:1px}.vjs-lock-showing{display:block!important;opacity:1!important;visibility:visible!important}.vjs-no-js{background-color:#000;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:18px;height:150px;margin:0 auto;padding:20px;text-align:center;width:300px}.vjs-no-js a,.vjs-no-js a:visited{color:#66a8cc}.video-js .vjs-big-play-button{background-color:#2b333f;background-color:rgba(43,51,63,.7);border:.06666em solid #fff;border-radius:.3em;cursor:pointer;display:block;font-size:3em;height:1.63332em;left:50%;line-height:1.5em;margin-left:-1.5em;margin-top:-.81666em;opacity:1;padding:0;position:absolute;top:50%;transition:all .4s;width:3em}.vjs-big-play-button .vjs-svg-icon{height:.75em;width:.75em}.video-js .vjs-big-play-button:focus,.video-js:hover .vjs-big-play-button{background-color:#73859f;background-color:rgba(115,133,159,.5);border-color:#fff;transition:all 0s}.vjs-controls-disabled .vjs-big-play-button,.vjs-error .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button{display:none}.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button{display:block}.video-js button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;color:inherit;display:inline-block;font-size:inherit;line-height:inherit;text-decoration:none;text-transform:none;transition:none}.vjs-control .vjs-button{height:100%;width:100%}.video-js .vjs-control.vjs-close-button{cursor:pointer;height:3em;position:absolute;right:0;top:.5em;z-index:2}.video-js .vjs-modal-dialog{background:rgba(0,0,0,.8);background:linear-gradient(180deg,rgba(0,0,0,.8),hsla(0,0%,100%,0));overflow:auto}.video-js .vjs-modal-dialog>*{box-sizing:border-box}.vjs-modal-dialog .vjs-modal-dialog-content{font-size:1.2em;line-height:1.5;padding:20px 24px;z-index:1}.vjs-menu-button{cursor:pointer}.vjs-menu-button.vjs-disabled{cursor:default}.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu{display:none}.vjs-menu .vjs-menu-content{display:block;font-family:Arial,Helvetica,sans-serif;margin:0;overflow:auto;padding:0}.vjs-menu .vjs-menu-content>*{box-sizing:border-box}.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu{display:none}.vjs-menu li{display:flex;font-size:1.2em;justify-content:center;line-height:1.4em;list-style:none;margin:0;padding:.2em 0;text-align:center;text-transform:lowercase}.js-focus-visible .vjs-menu li.vjs-menu-item:hover,.vjs-menu li.vjs-menu-item:focus,.vjs-menu li.vjs-menu-item:hover{background-color:#73859f;background-color:rgba(115,133,159,.5)}.js-focus-visible .vjs-menu li.vjs-selected:hover,.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover{background-color:#fff;color:#2b333f}.js-focus-visible .vjs-menu li.vjs-selected:hover .vjs-svg-icon,.vjs-menu li.vjs-selected .vjs-svg-icon,.vjs-menu li.vjs-selected:focus .vjs-svg-icon,.vjs-menu li.vjs-selected:hover .vjs-svg-icon{fill:#000}.js-focus-visible .vjs-menu :not(.vjs-selected):focus:not(.focus-visible),.video-js .vjs-menu :not(.vjs-selected):focus:not(:focus-visible){background:none}.vjs-menu li.vjs-menu-title{cursor:default;font-size:1em;font-weight:700;line-height:2em;margin:0 0 .3em;padding:0;text-align:center;text-transform:uppercase}.vjs-menu-button-popup .vjs-menu{border-top-color:rgba(43,51,63,.7);bottom:0;display:none;height:0;left:-3em;margin-bottom:1.5em;position:absolute;width:10em}.vjs-pip-window .vjs-menu-button-popup .vjs-menu{left:unset;right:1em}.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:#2b333f;background-color:rgba(43,51,63,.7);bottom:1.5em;max-height:15em;position:absolute;width:100%}.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:5em}.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:10em}.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:14em}.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:25em}.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu{display:block}.video-js .vjs-menu-button-inline{overflow:hidden;transition:all .4s}.video-js .vjs-menu-button-inline:before{width:2.222222222em}.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover{width:12em}.vjs-menu-button-inline .vjs-menu{height:100%;left:4em;margin:0;opacity:0;padding:0;position:absolute;top:0;transition:all .4s;width:auto}.vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline:hover .vjs-menu{display:block;opacity:1}.vjs-menu-button-inline .vjs-menu-content{height:100%;margin:0;overflow:hidden;width:auto}.video-js .vjs-control-bar{background-color:#2b333f;background-color:rgba(43,51,63,.7);bottom:0;display:none;height:3em;left:0;position:absolute;right:0;width:100%}.vjs-audio-only-mode .vjs-control-bar,.vjs-has-started .vjs-control-bar{display:flex;opacity:1;transition:visibility .1s,opacity .1s;visibility:visible}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:0;pointer-events:none;transition:visibility 1s,opacity 1s;visibility:visible}.vjs-controls-disabled .vjs-control-bar,.vjs-error .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar{display:none!important}.vjs-audio-only-mode.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar,.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;pointer-events:auto;visibility:visible}.video-js .vjs-control{flex:none;height:100%;margin:0;padding:0;position:relative;text-align:center;width:4em}.video-js .vjs-control.vjs-visible-text{padding-left:1em;padding-right:1em;width:auto}.vjs-button>.vjs-icon-placeholder:before{font-size:1.8em;line-height:1.67}.vjs-button>.vjs-icon-placeholder{display:block}.vjs-button>.vjs-svg-icon{display:inline-block}.video-js .vjs-control:focus,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before{text-shadow:0 0 1em #fff}.video-js :not(.vjs-visible-text)>.vjs-control-text{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.video-js .vjs-custom-control-spacer{display:none}.video-js .vjs-progress-control{align-items:center;cursor:pointer;display:flex;flex:auto;min-width:4em;touch-action:none}.video-js .vjs-progress-control.disabled{cursor:default}.vjs-live .vjs-progress-control{display:none}.vjs-liveui .vjs-progress-control{align-items:center;display:flex}.video-js .vjs-progress-holder{flex:auto;height:.3em;transition:all .2s}.video-js .vjs-progress-control .vjs-progress-holder{margin:0 10px}.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.6666666667em}.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled{font-size:1em}.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div,.video-js .vjs-progress-holder .vjs-play-progress{display:block;height:100%;margin:0;padding:0;position:absolute;width:0}.video-js .vjs-play-progress{background-color:#fff}.video-js .vjs-play-progress:before{font-size:.9em;line-height:.35em;position:absolute;right:-.5em;z-index:1}.vjs-svg-icons-enabled .vjs-play-progress:before{content:none!important}.vjs-play-progress .vjs-svg-icon{height:1em;line-height:.15em;pointer-events:none;position:absolute;right:-.4em;top:-.35em;width:1em;z-index:1}.video-js .vjs-load-progress{background:rgba(115,133,159,.5)}.video-js .vjs-load-progress div{background:rgba(115,133,159,.75)}.video-js .vjs-time-tooltip{background-color:#fff;background-color:hsla(0,0%,100%,.8);border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px;pointer-events:none;position:absolute;top:-3.4em;visibility:hidden;z-index:1}.vjs-progress-control:hover .vjs-progress-holder .vjs-play-progress .vjs-svg-icon{height:.8em;line-height:.35em;right:-.5em;top:-.25em;width:.8em}.video-js .vjs-progress-holder:focus .vjs-time-tooltip{display:none}.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip,.video-js .vjs-progress-control:hover .vjs-time-tooltip{display:block;font-size:.6em;visibility:visible}.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip{font-size:1em}.video-js .vjs-progress-control .vjs-mouse-display{background-color:#000;display:none;height:100%;position:absolute;width:1px;z-index:1}.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display{opacity:0;transition:visibility 1s,opacity 1s;visibility:hidden}.vjs-mouse-display .vjs-time-tooltip{background-color:#000;background-color:rgba(0,0,0,.8);color:#fff}.video-js .vjs-slider{-webkit-touch-callout:none;background-color:#73859f;background-color:rgba(115,133,159,.5);cursor:pointer;margin:0 .45em;padding:0;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.video-js .vjs-slider.disabled{cursor:default}.video-js .vjs-slider:focus{box-shadow:0 0 1em #fff;text-shadow:0 0 1em #fff}.video-js .vjs-mute-control{cursor:pointer;flex:none}.video-js .vjs-volume-control{cursor:pointer;display:flex;margin-right:1em}.video-js .vjs-volume-control.vjs-volume-horizontal{width:5em}.video-js .vjs-volume-panel .vjs-volume-control{height:1px;margin-left:-1px;opacity:0;visibility:visible;width:1px}.video-js .vjs-volume-panel{transition:width 1s}.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,.video-js .vjs-volume-panel .vjs-volume-control:active,.video-js .vjs-volume-panel:active .vjs-volume-control,.video-js .vjs-volume-panel:focus .vjs-volume-control{opacity:1;position:relative;transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0s,top 0s;visibility:visible}.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal{height:3em;margin-right:0;width:5em}.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical{left:-3.5em;transition:left 0s}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active{transition:width .1s;width:10em}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only{width:4em}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{height:8em;left:-3000em;transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s;width:3em}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s}.video-js .vjs-volume-panel{display:flex}.video-js .vjs-volume-bar{margin:1.35em .45em}.vjs-volume-bar.vjs-slider-horizontal{height:.3em;width:5em}.vjs-volume-bar.vjs-slider-vertical{height:5em;margin:1.35em auto;width:.3em}.video-js .vjs-volume-level{background-color:#fff;bottom:0;left:0;position:absolute}.video-js .vjs-volume-level:before{font-size:.9em;position:absolute;z-index:1}.vjs-slider-vertical .vjs-volume-level{width:.3em}.vjs-slider-vertical .vjs-volume-level:before{left:-.3em;top:-.5em;z-index:1}.vjs-svg-icons-enabled .vjs-volume-level:before{content:none}.vjs-volume-level .vjs-svg-icon{height:.6em;pointer-events:none;position:absolute;top:-.55em;width:.6em}.vjs-mute-control .vjs-svg-icon{height:1.75em;width:1.75em}.vjs-slider-horizontal .vjs-volume-level{height:.3em}.vjs-slider-horizontal .vjs-volume-level:before{line-height:.35em;right:-.5em}.vjs-slider-horizontal .vjs-volume-level .vjs-svg-icon{line-height:.05em;right:-.3em;top:-.15em}.vjs-slider-vertical .vjs-volume-level .vjs-svg-icon{right:-.15em;top:-.9em}.video-js .vjs-volume-panel.vjs-volume-panel-vertical{width:4em}.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}.video-js .vjs-volume-vertical{background-color:#2b333f;background-color:rgba(43,51,63,.7);bottom:8em;height:8em;width:3em}.video-js .vjs-volume-horizontal .vjs-menu{left:-2em}.video-js .vjs-volume-tooltip{background-color:#fff;background-color:hsla(0,0%,100%,.8);border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px;pointer-events:none;position:absolute;top:-3.4em;visibility:hidden;z-index:1}.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip,.video-js .vjs-volume-control:hover .vjs-volume-tooltip{display:block;font-size:1em;visibility:visible}.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip,.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip{left:1em;top:-12px}.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip{font-size:1em}.video-js .vjs-volume-control .vjs-mouse-display{background-color:#000;display:none;height:1px;position:absolute;width:100%;z-index:1}.video-js .vjs-volume-horizontal .vjs-mouse-display{height:100%;width:1px}.video-js .vjs-volume-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display{opacity:0;transition:visibility 1s,opacity 1s;visibility:hidden}.vjs-mouse-display .vjs-volume-tooltip{background-color:#000;background-color:rgba(0,0,0,.8);color:#fff}.vjs-poster{bottom:0;cursor:pointer;display:inline-block;height:100%;left:0;margin:0;padding:0;position:absolute;right:0;top:0;vertical-align:middle}.vjs-has-started .vjs-poster,.vjs-using-native-controls .vjs-poster{display:none}.vjs-audio.vjs-has-started .vjs-poster,.vjs-has-started.vjs-audio-poster-mode .vjs-poster,.vjs-pip-container.vjs-has-started .vjs-poster{display:block}.vjs-poster img{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}.video-js .vjs-live-control{align-items:flex-start;display:flex;flex:auto;font-size:1em;line-height:3em}.video-js.vjs-liveui .vjs-live-control,.video-js:not(.vjs-live) .vjs-live-control{display:none}.video-js .vjs-seek-to-live-control{align-items:center;cursor:pointer;display:inline-flex;flex:none;font-size:1em;height:100%;line-height:3em;min-width:4em;padding-left:.5em;padding-right:.5em;width:auto}.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,.video-js:not(.vjs-live) .vjs-seek-to-live-control{display:none}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge{cursor:auto}.vjs-seek-to-live-control .vjs-icon-placeholder{color:#888;margin-right:.5em}.vjs-svg-icons-enabled .vjs-seek-to-live-control{line-height:0}.vjs-seek-to-live-control .vjs-svg-icon{fill:#888;height:1em;pointer-events:none;width:1em}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder{color:red}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-svg-icon{fill:red}.video-js .vjs-time-control{flex:none;font-size:1em;line-height:3em;min-width:2em;padding-left:1em;padding-right:1em;width:auto}.video-js .vjs-current-time,.video-js .vjs-duration,.vjs-live .vjs-time-control,.vjs-live .vjs-time-divider{display:none}.vjs-time-divider{display:none;line-height:3em}.video-js .vjs-play-control{cursor:pointer}.video-js .vjs-play-control .vjs-icon-placeholder{flex:none}.vjs-text-track-display{bottom:3em;left:0;pointer-events:none;position:absolute;right:0;top:0}.video-js.vjs-controls-disabled .vjs-text-track-display,.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}.video-js .vjs-text-track{font-size:1.4em;margin-bottom:.1em;text-align:center}.vjs-subtitles{color:#fff}.vjs-captions{color:#fc6}.vjs-tt-cue{display:block}video::-webkit-media-text-track-display{transform:translateY(-3em)}.video-js.vjs-controls-disabled video::-webkit-media-text-track-display,.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{transform:translateY(-1.5em)}.video-js .vjs-picture-in-picture-control{cursor:pointer;flex:none}.video-js.vjs-audio-only-mode .vjs-picture-in-picture-control,.vjs-pip-window .vjs-picture-in-picture-control{display:none}.video-js .vjs-fullscreen-control{cursor:pointer;flex:none}.video-js.vjs-audio-only-mode .vjs-fullscreen-control,.vjs-pip-window .vjs-fullscreen-control{display:none}.vjs-playback-rate .vjs-playback-rate-value,.vjs-playback-rate>.vjs-menu-button{height:100%;left:0;position:absolute;top:0;width:100%}.vjs-playback-rate .vjs-playback-rate-value{font-size:1.5em;line-height:2;pointer-events:none;text-align:center}.vjs-playback-rate .vjs-menu{left:0;width:4em}.vjs-error .vjs-error-display .vjs-modal-dialog-content{font-size:1.4em;text-align:center}.vjs-error .vjs-error-display:before{color:#fff;content:"X";font-family:Arial,Helvetica,sans-serif;font-size:4em;left:0;line-height:1;margin-top:-.5em;position:absolute;text-align:center;text-shadow:.05em .05em .1em #000;top:50%;vertical-align:middle;width:100%}.vjs-loading-spinner{background-clip:padding-box;border:.6em solid rgba(43,51,63,.7);border-radius:50%;box-sizing:border-box;display:none;height:5em;left:50%;opacity:.85;position:absolute;text-align:left;top:50%;transform:translate(-50%,-50%);visibility:hidden;width:5em}.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{animation:vjs-spinner-show 0s linear .3s forwards;display:block}.vjs-loading-spinner:after,.vjs-loading-spinner:before{border:inherit;border-color:#fff transparent transparent;border-radius:inherit;box-sizing:inherit;content:"";height:inherit;margin:-.6em;opacity:1;position:absolute;width:inherit}.vjs-seeking .vjs-loading-spinner:after,.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before{animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite}.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{animation-delay:.44s;border-top-color:#fff}@keyframes vjs-spinner-show{to{visibility:visible}}@keyframes vjs-spinner-spin{to{transform:rotate(1turn)}}@keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}to{border-top-color:#73859f}}.video-js.vjs-audio-only-mode .vjs-captions-button{display:none}.vjs-chapters-button .vjs-menu ul{width:24em}.video-js.vjs-audio-only-mode .vjs-descriptions-button{display:none}.vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-svg-icon{margin-left:.3em}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder{display:inline-block;margin-bottom:-.1em;vertical-align:middle}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{content:"\\f10c";font-family:VideoJS;font-size:1.5em;line-height:inherit}.video-js.vjs-audio-only-mode .vjs-subs-caps-button{display:none}.video-js .vjs-audio-button+.vjs-menu .vjs-description-menu-item .vjs-menu-item-text .vjs-icon-placeholder,.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder{display:inline-block;margin-bottom:-.1em;vertical-align:middle}.video-js .vjs-audio-button+.vjs-menu .vjs-description-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before,.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{content:" \\f12e";font-family:VideoJS;font-size:1.5em;line-height:inherit}.video-js.vjs-layout-small .vjs-current-time,.video-js.vjs-layout-small .vjs-duration,.video-js.vjs-layout-small .vjs-playback-rate,.video-js.vjs-layout-small .vjs-remaining-time,.video-js.vjs-layout-small .vjs-time-divider,.video-js.vjs-layout-small .vjs-volume-control,.video-js.vjs-layout-tiny .vjs-current-time,.video-js.vjs-layout-tiny .vjs-duration,.video-js.vjs-layout-tiny .vjs-playback-rate,.video-js.vjs-layout-tiny .vjs-remaining-time,.video-js.vjs-layout-tiny .vjs-time-divider,.video-js.vjs-layout-tiny .vjs-volume-control,.video-js.vjs-layout-x-small .vjs-current-time,.video-js.vjs-layout-x-small .vjs-duration,.video-js.vjs-layout-x-small .vjs-playback-rate,.video-js.vjs-layout-x-small .vjs-remaining-time,.video-js.vjs-layout-x-small .vjs-time-divider,.video-js.vjs-layout-x-small .vjs-volume-control{display:none}.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover{width:auto}.video-js.vjs-layout-tiny .vjs-progress-control,.video-js.vjs-layout-x-small .vjs-progress-control{display:none}.video-js.vjs-layout-x-small .vjs-custom-control-spacer{display:block;flex:auto}.vjs-modal-dialog.vjs-text-track-settings{background-color:#2b333f;background-color:rgba(43,51,63,.75);color:#fff;height:70%}.vjs-text-track-settings .vjs-modal-dialog-content{display:table}.vjs-text-track-settings .vjs-track-settings-colors,.vjs-text-track-settings .vjs-track-settings-controls,.vjs-text-track-settings .vjs-track-settings-font{display:table-cell}.vjs-text-track-settings .vjs-track-settings-controls{text-align:right;vertical-align:bottom}@supports (display:grid){.vjs-text-track-settings .vjs-modal-dialog-content{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;padding:20px 24px 0}.vjs-track-settings-controls .vjs-default-button{margin-bottom:20px}.vjs-text-track-settings .vjs-track-settings-controls{grid-column:1/-1}.vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content{grid-template-columns:1fr}}.vjs-text-track-settings select{font-size:inherit}.vjs-track-setting>select{margin-bottom:.5em;margin-right:1em}.vjs-text-track-settings fieldset{border:none;margin:10px}.vjs-text-track-settings fieldset span{display:inline-block;padding:0 .6em .8em}.vjs-text-track-settings fieldset span>select{max-width:7.3em}.vjs-text-track-settings legend{color:#fff;font-size:1.2em;font-weight:700}.vjs-text-track-settings .vjs-label{margin:0 .5em .5em 0}.vjs-track-settings-controls button:active,.vjs-track-settings-controls button:focus{background-image:linear-gradient(0deg,#fff 88%,#73859f);outline-style:solid;outline-width:medium}.vjs-track-settings-controls button:hover{color:rgba(43,51,63,.75)}.vjs-track-settings-controls button{background-color:#fff;background-image:linear-gradient(-180deg,#fff 88%,#73859f);border-radius:2px;color:#2b333f;cursor:pointer}.vjs-track-settings-controls .vjs-default-button{margin-right:1em}.vjs-title-bar{background:rgba(0,0,0,.9);background:linear-gradient(180deg,rgba(0,0,0,.9),rgba(0,0,0,.7) 60%,transparent);font-size:1.2em;line-height:1.5;padding:.666em 1.333em 4em;pointer-events:none;position:absolute;top:0;transition:opacity .1s;width:100%}.vjs-title-bar-description,.vjs-title-bar-title{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vjs-title-bar-title{font-weight:700;margin-bottom:.333em}.vjs-playing.vjs-user-inactive .vjs-title-bar{opacity:0;transition:opacity 1s}.video-js .vjs-skip-backward-5,.video-js .vjs-skip-backward-10,.video-js .vjs-skip-backward-30,.video-js .vjs-skip-forward-5,.video-js .vjs-skip-forward-10,.video-js .vjs-skip-forward-30{cursor:pointer}@media print{.video-js>:not(.vjs-tech):not(.vjs-poster){visibility:hidden}}.vjs-resize-manager{border:none;height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1000}.js-focus-visible .video-js :focus:not(.focus-visible){outline:none}.video-js :focus:not(:focus-visible){outline:none}'),
                    f('@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@media only screen and (min-width:568px){.video-js{font-size:12px}}@media only screen and (min-width:768px){.video-js{font-size:14px}}.vjs-playback-rate .vjs-playback-rate-value{align-items:center;display:flex;font-size:1.35em;justify-content:center;line-height:1}.video-js .vjs-control-bar{align-content:flex-end;background:transparent linear-gradient(transparent,rgba(0,0,0,.7) 90%);column-gap:.5em;flex-wrap:wrap;height:18em;max-height:100%;padding:10px 1.5em}.video-js .vjs-control{height:3em;order:1;width:3em;z-index:3}.video-js .vjs-progress-control{height:2em;order:-1;width:100%;z-index:2}.video-js .vjs-progress-control .vjs-progress-holder{margin:0}.video-js .vjs-load-progress div,.video-js .vjs-slider{background:rgba(255,255,255,.3)}.video-js .vjs-spacer{display:block;flex:1;order:2}.video-js .vjs-spacer~.vjs-control,.video-js .vjs-volume-panel{order:3}.video-js .vjs-volume-panel.vjs-volume-panel-vertical{width:3em}.video-js .vjs-volume-control.vjs-volume-vertical{margin:0}.video-js .vjs-time-control{padding-left:.5em;padding-right:.5em;width:auto}@media only screen and (max-width:399px){.video-js .vjs-remaining-time{display:none}}.vjs-live .vjs-control-bar{height:12em;padding-top:0}.vjs-live .vjs-playback-rate{display:none}.vjs-menu li.vjs-menu-item:hover{background:rgba(100,100,100,.75)}.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:hover{background:#fff;color:#222}.vjs-control.vjs-button{border-radius:8px;transition:background .1s ease-in}.vjs-control.vjs-button:focus,.vjs-control.vjs-button:hover{background:rgba(50,50,50,.85);text-shadow:none}.video-js .vjs-skip-backward-10 .vjs-icon-placeholder:before,.video-js .vjs-skip-forward-10 .vjs-icon-placeholder:before{content:"\\f11b";transform:rotate(-45deg)}.video-js .vjs-skip-forward-10 .vjs-icon-placeholder:before{transform:rotate(-135deg) scaleY(-1)}.vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-volume-control.vjs-volume-vertical{background:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.65))}.video-js .vjs-volume-panel.vjs-volume-panel-vertical .vjs-volume-control.vjs-volume-vertical,.vjs-menu-button-popup .vjs-menu{display:block;left:-3.5em;opacity:0;transform:translateY(-1em);transition:opacity .3s,transform .3s,visibility .3s;visibility:hidden;z-index:4}.vjs-playback-rate .vjs-menu{left:-.5em}.video-js .vjs-volume-panel.vjs-volume-panel-vertical.vjs-hover .vjs-volume-control.vjs-volume-vertical,.vjs-menu-button-popup.vjs-hover .vjs-menu{opacity:1;transform:translateY(0);visibility:visible}.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,.vjs-menu-button-popup .vjs-menu-content{transition:opacity .3s,transform .3s,visibility .3s}.video-js .vjs-volume-panel.vjs-volume-panel-vertical.vjs-hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-volume-panel-vertical .vjs-volume-control.vjs-volume-vertical{left:-100%}.FMPlayer .FMPlayerClose,.FMPlayerRoot .FMPlayerClose{color:#fff;display:inline-block;float:right;font-size:150%;line-height:1;margin-bottom:20px;margin-left:20px;opacity:.25;text-decoration:none}.FMPlayer .FMPlayerClose:hover,.FMPlayerRoot .FMPlayerClose:hover{color:#fff;opacity:1}.FMPlayer.video-js{user-select:none;-moz-user-select:none}.FMPlayer.video-js .vjs-big-play-button{background:none;border:0;color:#fff;cursor:pointer;display:block;font-size:6em;height:1.2em;left:50%;line-height:1.2em;margin:-.6em 0 0 -.6em;opacity:.5;position:absolute;top:50%;transition:opacity .3s,transform .3s,visibility .3s,font-size .3s;visibility:visible;width:1.2em;z-index:1}.FMPlayer.video-js .vjs-big-play-button:active,.FMPlayer.video-js .vjs-big-play-button:hover{opacity:1}@media only screen and (min-width:1024px){.FMPlayer.video-js .vjs-big-play-button{font-size:10em}}.FMPlayer.video-js .vjs-big-play-button .vjs-icon-placeholder{display:block;text-shadow:0 0 1em #000,0 0 .25em #000;transition:text-shadow .3s}.FMPlayer.video-js .vjs-big-play-button:active .vjs-icon-placeholder{text-shadow:0 0 1.5em #000,0 0 .5em #fff}.FMPlayer.video-js.vjs-has-started .vjs-big-play-button{opacity:0;transform:scale(1.5);visibility:hidden}.FMPlayer.video-js .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:inherit}.FMPlayer.video-js .vjs-audio-button{display:none}.FMPlayer.video-js .vjs-text-track-display{bottom:100px;z-index:1}.FMPlayer.video-js .video-js.vjs-controls-disabled .vjs-text-track-display,.FMPlayer.video-js .video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:2em}.FMPlayer.video-js .vjs-text-track-cue{font-size:inherit!important;height:auto!important;top:auto!important}.FMPlayer.video-js .vjs-text-track-cue>div{border-radius:10px;display:inline-block!important;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:inherit;line-height:1.5;padding-left:10px;padding-right:10px}.FMPlayer.video-js .vjs-poster{background-size:contain}'),
                    y._computeActive = !1,
                    y._computeChildren = [],
                    y.prototype.accessor = function (e) {
                        if (!arguments.length)
                            return y._computeActive && -1 === y._computeChildren.indexOf(this) && y._computeChildren.push(this),
                                this.value;
                        if (e !== this.value)
                            if ("function" != typeof e)
                                this.previousValue = this.value,
                                    this.value = e,
                                    this.publish();
                            else {
                                const t = [];
                                for (let e = 1; e < arguments.length; e++) {
                                    const o = arguments[e];
                                    t.push(o)
                                }
                                this.valueFunction = e,
                                    this.valueFunctionArgs = t,
                                    y._computeActive = !0,
                                    this.compute(),
                                    y._computeActive = !1,
                                    y._computeChildren.forEach((e => {
                                            e.subscribe((() => this.compute()))
                                        }
                                    )),
                                    y._computeChildren.length = 0
                            }
                    }
                    ,
                    y.prototype.publish = function () {
                        this.subscribers.slice().forEach((e => {
                                e && e.call(this, this.value, this.previousValue)
                            }
                        ))
                    }
                    ,
                    y.prototype.subscribe = function (e, t) {
                        this.subscribers.push(e),
                        t && e.call(this, this.value, this.previousValue)
                    }
                    ,
                    y.prototype.unsubscribe = function (e) {
                        const t = this.subscribers.indexOf(e);
                        this.subscribers.splice(t, 1)
                    }
                    ,
                    y.prototype.compute = function () {
                        const e = this.valueFunction.apply(this, this.valueFunctionArgs);
                        void 0 !== e && ("function" == typeof e.then ? e.then((e => this(e))) : this(e))
                    }
                ;
                const b = r.Z.browser.IS_SAFARI || r.Z.browser.IS_IOS
                    , j = {
                    autoSetup: !1,
                    autoplay: !1,
                    controls: !0,
                    fluid: !0,
                    errorDisplay: !1,
                    inactivityTimeout: 1500,
                    preload: "metadata",
                    textTrackSettings: !1,
                    html5: {
                        vhs: {
                            overrideNative: !b,
                            useDevicePixelRatio: !0,
                            GOAL_BUFFER_LENGTH: 180,
                            MAX_GOAL_BUFFER_LENGTH: 360,
                            experimentalBufferBasedABR: !0
                        },
                        nativeAudioTracks: !1,
                        nativeTextTracks: b,
                        nativeVideoTracks: b
                    },
                    controlBar: {
                        skipButtons: {
                            forward: 10,
                            backward: 10
                        },
                        subsCapsButton: !1,
                        volumePanel: {
                            inline: !1,
                            volumeControl: {
                                volumeBar: {
                                    mouseVolumeLevelDisplay: !1
                                }
                            }
                        }
                    }
                };
                r.Z.log.level("off");
                const k = r.Z.getComponent("Button");

                function x(e, t) {
                    e.classList.add("FMPlayer"),
                        e.classList.add("video-js");
                    const o = n()({}, j, t);
                    o.playbackRates || (o.playbackRates = [.8, .9, 1, 1.1, 1.2, 1.4, 1.6, 1.8, 2]);
                    const s = (0,
                        r.Z)(e, o);
                    s.on("contextmenu", (e => e.preventDefault()));
                    const i = s.getChild("ControlBar").el();
                    return i.addEventListener("click", (e => {
                            e.target === i && (s.paused() ? s.play() : s.pause())
                        }
                    )),
                        s.one("play", (() => s.autoplay(!0))),
                        s
                }

                k.prototype.handleKeyDown = Object.getPrototypeOf(Object.getPrototypeOf(k)).handleKeyDown,
                    r.Z.getComponent("PlaybackRateMenuButton").prototype.handleClick = function () {
                        const e = this.player().playbackRate()
                            , t = this.playbackRates()
                            , o = (t.indexOf(e) + 1) % t.length;
                        this.player().playbackRate(t[o])
                    }
                    ,
                    f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.vjs-messages-area{left:100px;position:absolute;right:10px;top:10px;user-select:text;z-index:99}@media only screen and (min-width:768px){.vjs-messages-area{left:120px}}.vjs-messages-area .hide{animation-duration:.3s;animation-name:pop-hide;opacity:0}.vjs-message{animation-duration:.3s;animation-name:pop;background:rgba(0,0,0,.8);border-radius:5px;box-shadow:0 25px 10px -15px rgba(0,0,0,.05);clear:both;color:#fff;display:inline-block;float:right;font-size:14px;line-height:2;margin-bottom:5px;max-width:100%;min-width:200px;outline:none;padding:10px 40px 10px 10px;position:relative}.vjs-message.warning{background:rgba(216,85,25,.8)}.vjs-message.warning .FMPlayerClose{opacity:.4}.vjs-message.warning .FMPlayerClose:hover{opacity:1}.vjs-message .FMPlayerClose{font-size:150%;line-height:1.5;margin:0;position:absolute;right:10px;top:10px}.vjs-message .vjs-message-content{display:block}.vjs-message .vjs-message-content a{border-bottom-style:solid;border-bottom-width:1px;color:#fff;font-weight:700;text-decoration:none}.vjs-message .vjs-message-content a:hover{border-bottom-color:#fff;color:rgba(255,255,255,.8)}@-moz-keyframes pop{0%{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}to{opacity:1;transform:translateZ(0) scaleX(1)}}@-webkit-keyframes pop{0%{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}to{opacity:1;transform:translateZ(0) scaleX(1)}}@-o-keyframes pop{0%{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}to{opacity:1;transform:translateZ(0) scaleX(1)}}@keyframes pop{0%{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}to{opacity:1;transform:translateZ(0) scaleX(1)}}@-moz-keyframes pop-hide{0%{opacity:1;transform:translateZ(0) scaleX(1)}to{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}}@-webkit-keyframes pop-hide{0%{opacity:1;transform:translateZ(0) scaleX(1)}to{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}}@-o-keyframes pop-hide{0%{opacity:1;transform:translateZ(0) scaleX(1)}to{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}}@keyframes pop-hide{0%{opacity:1;transform:translateZ(0) scaleX(1)}to{opacity:0;transform:translate3d(0,-25px,0) scale3d(.1,.6,1)}}");
                const w = r.Z.getComponent("Component")
                    , M = r.Z.getComponent("ClickableComponent");

                class P extends w {
                    constructor(e) {
                        super(e)
                    }

                    createEl() {
                        return super.createEl("div", {
                            className: "vjs-messages-area"
                        })
                    }
                }

                let F = class extends M {
                        constructor(e, t) {
                            super(e),
                                this.message = t.message,
                                this.content = this.el().children[1],
                            t.id && (this.id = t.id),
                            t.type && this.addClass(t.type),
                                this.applyMessage()
                        }

                        createEl() {
                            return super.createEl("div", {
                                className: "vjs-message",
                                innerHTML: '<a href="#" class="FMPlayerClose vjs-icon-cancel"></a><div class="vjs-message-content"></div>'
                            })
                        }

                        applyMessage() {
                            this.content.textContent = this.message
                        }

                        handleClick(e) {
                            e.target && e.target.classList.contains("FMPlayerClose") && (e.preventDefault(),
                                this.dispose())
                        }

                        dispose() {
                            this.addClass("hide"),
                                setTimeout((() => {
                                        super.dispose()
                                    }
                                ), 300)
                        }
                    }
                ;

                function A(e) {
                    const t = new P(e.video);
                    e.video.addChild(t),
                        e.messages = {
                            DEFAULT_ERROR: 'Uh oh, something\'s not right here. If this problem continues, press the "Support" button to get in touch with our team.',
                            el: () => t.el(),
                            add(o) {
                                if (o.id && o.message) {
                                    const e = t.children().find((e => e.id === o.id));
                                    if (e)
                                        return e.message = o.message,
                                            void e.applyMessage()
                                }
                                let s;
                                if ("string" == typeof o)
                                    s = new F(e.video, {
                                        message: o
                                    });
                                else {
                                    const {message: t, type: n, id: i} = o;
                                    s = new F(e.video, {
                                        message: t,
                                        type: n,
                                        id: i
                                    })
                                }
                                t.addChild(s)
                            },
                            addCustomMessage(e) {
                                t.addChild(e)
                            }
                        }
                }

                r.Z.registerComponent("MessagesArea", P),
                    r.Z.registerComponent("Message", F);
                let S = 0;
                const z = 3;

                function L(e) {
                    e.addProp("mediaError", null),
                        e.video.on("error", (() => {
                                const t = e.video.error();
                                if (t)
                                    if (1 === t.code)
                                        e.video.error(null);
                                    else if (2 === t.code || 3 === t.code || 5 === t.code)
                                        if (S < z)
                                            e.video.error(null),
                                                e.video.pause(),
                                                e.setResumeTime(),
                                                e.video.autoplay(!0),
                                                e.video.one("playing", (() => {
                                                        S = 0
                                                    }
                                                )),
                                                setTimeout((() => e.videoSrc.publish()), 1e3);
                                        else {
                                            S = 0,
                                                e.video.pause();
                                            const o = 2 === t.code ? "downloading" : "playing";
                                            e.messages.add({
                                                id: "mediaError",
                                                type: "warning",
                                                message: `We're having trouble ${o} this video. If this problem continues, press the "Support" button to get in touch with our team.`
                                            }),
                                                e.trackError(`MediaError ${t.code} - ${t.message}`)
                                        }
                                    else
                                        e.mediaError(t);
                                else
                                    e.mediaError.value = null
                            }
                        )),
                        e.mediaError.subscribe((t => {
                                t || e.video.error(null)
                            }
                        ))
                }

                function E(e) {
                    e.play = function () {
                        if (e.video.src())
                            return e.video.play().catch((e => {
                                    if (!e || "NotAllowedError" !== e.name && "AbortError" !== e.name)
                                        throw e
                                }
                            ))
                    }
                }

                function C(e) {
                    e.searchParams = function () {
                        const e = new URLSearchParams(window.location.search);
                        return new Proxy(e, {
                            get: (t, o) => "function" == typeof t[o] ? "set" === o || "delete" === o ? function () {
                                    for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++)
                                        n[i] = arguments[i];
                                    t[o].apply(t, n);
                                    let a = e.toString();
                                    a && (a = "?" + a);
                                    const r = `${window.location.pathname}${a}`;
                                    window.history.replaceState(null, "", r)
                                }
                                : t[o].bind(t) : t[o]
                        })
                    }
                }

                function T(e) {
                    e.addProp("videoSrc", e.video.src()),
                        e.addProp("posterSrc", e.video.poster()),
                        e.posterSrc.subscribe((t => e.video.poster(t))),
                        e.videoSrc.subscribe(((t, o) => {
                                if ("string" == typeof t && (t = {
                                    src: t
                                },
                                    e.videoSrc.value = t),
                                o && function (e) {
                                    e.video.pause(),
                                        e.video.poster(null),
                                        e.video.one("loadstart", (() => e.video.hasStarted(!0)))
                                }(e),
                                    t ? e.video.addClass("fmp-has-source") : e.video.removeClass("fmp-has-source"),
                                    !t.type) {
                                    const e = t.src.match(/\.(mp4|webm|m3u8)(\?.*)?$/i);
                                    e && "m3u8" === e[1] ? t.type = "application/x-mpegURL" : e || (t.type = "video/mp4")
                                }
                                e._userInitiatedRatechange = !1,
                                    e.video.src(t)
                            }
                        ))
                }

                var R = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== o.g ? o.g : "undefined" != typeof self ? self : {};

                function N(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
                }

                var B = {}
                    , I = {}
                    , q = {}
                    , _ = {
                    parse: function (e, t) {
                        if ("string" != typeof e)
                            throw new TypeError("argument str must be a string");
                        for (var o = {}, s = t || {}, n = e.split($), i = s.decode || O, a = 0; a < n.length; a++) {
                            var r = n[a]
                                , l = r.indexOf("=");
                            if (!(l < 0)) {
                                var c = r.substr(0, l).trim()
                                    , d = r.substr(++l, r.length).trim();
                                '"' == d[0] && (d = d.slice(1, -1)),
                                null == o[c] && (o[c] = U(d, i))
                            }
                        }
                        return o
                    },
                    serialize: function (e, t, o) {
                        var s = o || {}
                            , n = s.encode || H;
                        if ("function" != typeof n)
                            throw new TypeError("option encode is invalid");
                        if (!D.test(e))
                            throw new TypeError("argument name is invalid");
                        var i = n(t);
                        if (i && !D.test(i))
                            throw new TypeError("argument val is invalid");
                        var a = e + "=" + i;
                        if (null != s.maxAge) {
                            var r = s.maxAge - 0;
                            if (isNaN(r))
                                throw new Error("maxAge should be a Number");
                            a += "; Max-Age=" + Math.floor(r)
                        }
                        if (s.domain) {
                            if (!D.test(s.domain))
                                throw new TypeError("option domain is invalid");
                            a += "; Domain=" + s.domain
                        }
                        if (s.path) {
                            if (!D.test(s.path))
                                throw new TypeError("option path is invalid");
                            a += "; Path=" + s.path
                        }
                        if (s.expires) {
                            if ("function" != typeof s.expires.toUTCString)
                                throw new TypeError("option expires is invalid");
                            a += "; Expires=" + s.expires.toUTCString()
                        }
                        if (s.httpOnly && (a += "; HttpOnly"),
                        s.secure && (a += "; Secure"),
                            s.sameSite)
                            switch ("string" == typeof s.sameSite ? s.sameSite.toLowerCase() : s.sameSite) {
                                case !0:
                                    a += "; SameSite=Strict";
                                    break;
                                case "lax":
                                    a += "; SameSite=Lax";
                                    break;
                                case "strict":
                                    a += "; SameSite=Strict";
                                    break;
                                default:
                                    throw new TypeError("option sameSite is invalid")
                            }
                        return a
                    }
                }
                    , O = decodeURIComponent
                    , H = encodeURIComponent
                    , $ = /; */
                    , D = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

                function U(e, t) {
                    try {
                        return t(e)
                    } catch (t) {
                        return e
                    }
                }

                Object.defineProperty(q, "__esModule", {
                    value: !0
                });
                var Q = function () {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var s = t[o];
                            s.enumerable = s.enumerable || !1,
                                s.configurable = !0,
                            "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s)
                        }
                    }

                    return function (t, o, s) {
                        return o && e(t.prototype, o),
                        s && e(t, s),
                            t
                    }
                }();
                q.hasCookies = function () {
                    var e = new X;
                    try {
                        var t = "__test";
                        e.setItem(t, "1");
                        var o = e.getItem(t);
                        return e.removeItem(t),
                        "1" === o
                    } catch (e) {
                        return !1
                    }
                }
                ;
                var J, V = (J = _) && J.__esModule ? J : {
                    default: J
                }, Z = "lS_", X = function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                            this.cookieOptions = Object.assign({
                                path: "/"
                            }, t),
                            Z = void 0 === t.prefix ? Z : t.prefix
                    }

                    return Q(e, [{
                        key: "getItem",
                        value: function (e) {
                            var t = V.default.parse(document.cookie);
                            return t && t.hasOwnProperty(Z + e) ? t[Z + e] : null
                        }
                    }, {
                        key: "setItem",
                        value: function (e, t) {
                            return document.cookie = V.default.serialize(Z + e, t, this.cookieOptions),
                                t
                        }
                    }, {
                        key: "removeItem",
                        value: function (e) {
                            var t = Object.assign({}, this.cookieOptions, {
                                maxAge: -1
                            });
                            return document.cookie = V.default.serialize(Z + e, "", t),
                                null
                        }
                    }, {
                        key: "clear",
                        value: function () {
                            var e = V.default.parse(document.cookie);
                            for (var t in e)
                                0 === t.indexOf(Z) && this.removeItem(t.substr(Z.length));
                            return null
                        }
                    }]),
                        e
                }();
                q.default = X,
                    Object.defineProperty(I, "__esModule", {
                        value: !0
                    }),
                    I.default = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "localStorage"
                            , t = String(e).replace(/storage$/i, "").toLowerCase();
                        if ("local" === t)
                            return G("localStorage");
                        if ("session" === t)
                            return G("sessionStorage");
                        if ("cookie" === t)
                            return (0,
                                Y.hasCookies)();
                        if ("memory" === t)
                            return !0;
                        throw new Error("Storage method `" + e + "` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage.")
                    }
                ;
                var Y = q
                    , W = "__test";

                function G(e) {
                    try {
                        var t = window[e];
                        return t.setItem(W, "1"),
                            t.removeItem(W),
                            !0
                    } catch (e) {
                        return !1
                    }
                }

                var K = {};
                Object.defineProperty(K, "__esModule", {
                    value: !0
                });
                var ee = function () {
                    function e(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var s = t[o];
                            s.enumerable = s.enumerable || !1,
                                s.configurable = !0,
                            "value" in s && (s.writable = !0),
                                Object.defineProperty(e, s.key, s)
                        }
                    }

                    return function (t, o, s) {
                        return o && e(t.prototype, o),
                        s && e(t, s),
                            t
                    }
                }()
                    , te = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                            this._data = {}
                    }

                    return ee(e, [{
                        key: "getItem",
                        value: function (e) {
                            return this._data.hasOwnProperty(e) ? this._data[e] : null
                        }
                    }, {
                        key: "setItem",
                        value: function (e, t) {
                            return this._data[e] = String(t)
                        }
                    }, {
                        key: "removeItem",
                        value: function (e) {
                            return delete this._data[e]
                        }
                    }, {
                        key: "clear",
                        value: function () {
                            return this._data = {}
                        }
                    }]),
                        e
                }();
                K.default = te,
                    Object.defineProperty(B, "__esModule", {
                        value: !0
                    }),
                    B.MemoryStorage = B.CookieStorage = B.isSupported = B.storage = void 0;
                var oe = ie(I)
                    , se = ie(q)
                    , ne = ie(K);

                function ie(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                var ae = null;
                (0,
                    oe.default)("localStorage") ? B.storage = ae = window.localStorage : (0,
                    oe.default)("sessionStorage") ? B.storage = ae = window.sessionStorage : (0,
                    oe.default)("cookieStorage") ? B.storage = ae = new se.default : B.storage = ae = new ne.default;
                var re = B.default = ae;
                B.storage = ae,
                    B.isSupported = oe.default,
                    B.CookieStorage = se.default,
                    B.MemoryStorage = ne.default;
                var le = {
                    set(e, t) {
                        const o = JSON.stringify(t);
                        re.setItem(e, o)
                    },
                    get(e, t) {
                        const o = re.getItem(e);
                        if (null === o)
                            return t;
                        try {
                            return JSON.parse(o)
                        } catch (e) {
                            return o
                        }
                    },
                    remove(e) {
                        re.removeItem(e)
                    }
                };

                function ce(e) {
                    e.addProp("playbackRate", de(le.get("fmp.video.playbackRate", 1))),
                        e.addProp("volume", le.get("fmp.video.volume", 1)),
                        e._userInitiatedRatechange = !0,
                        e.video.on("loadstart", (() => {
                                e.video.playbackRate(e.playbackRate()),
                                    e._userInitiatedRatechange = !0
                            }
                        )),
                        e.video.ready((() => {
                                e.video.volume(e.volume()),
                                    e.video.playbackRate(e.playbackRate())
                            }
                        )),
                        e.volume.subscribe((t => e.video.volume(t))),
                        e.video.on("volumechange", (() => {
                                const t = e.video.muted() ? 0 : e.video.volume();
                                e.volume(t),
                                    le.set("fmp.video.volume", t)
                            }
                        )),
                        e.playbackRate.subscribe((t => e.video.playbackRate(t))),
                        e.video.on("ratechange", (() => {
                                const t = de(e.video.playbackRate());
                                e._userInitiatedRatechange ? (e.playbackRate(t),
                                    le.set("fmp.video.playbackRate", t)) : t !== e.playbackRate() && (e._userInitiatedRatechange = !1,
                                    e.video.playbackRate(e.playbackRate()),
                                    e._userInitiatedRatechange = !0)
                            }
                        ))
                }

                function de(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return e % 1 != 0 ? parseFloat(e.toFixed(t)) : parseInt(e, 10)
                }

                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayer.video-js .vjs-fmp-settings{cursor:pointer}.FMPlayer.video-js .vjs-fmp-captions,.FMPlayer.video-js .vjs-fmp-resolutions,.FMPlayer.video-js .vjs-playback-rate{margin-right:-.5em;opacity:0;transform:translateX(50%);transition:opacity .3s,transform .3s,visibility .3s;visibility:hidden;width:0}.FMPlayer.video-js .vjs-fullscreen-control,.FMPlayer.video-js .vjs-picture-in-picture-control,.FMPlayer.video-js .vjs-volume-panel{margin-right:0;opacity:1;transform:translateX(0);transition:opacity .3s,transform .3s,visibility .3s;visibility:visible;width:3em}.FMPlayer.video-js.vjs-fmp-settings-active .vjs-fmp-settings{background:rgba(50,50,50,.85)}.FMPlayer.video-js.vjs-fmp-settings-active .vjs-fmp-captions,.FMPlayer.video-js.vjs-fmp-settings-active .vjs-fmp-resolutions,.FMPlayer.video-js.vjs-fmp-settings-active .vjs-playback-rate{margin-right:0;opacity:1;transform:translateX(0);visibility:visible;width:3em}.FMPlayer.video-js.vjs-fmp-settings-active .vjs-fullscreen-control,.FMPlayer.video-js.vjs-fmp-settings-active .vjs-picture-in-picture-control,.FMPlayer.video-js.vjs-fmp-settings-active .vjs-volume-panel{margin-right:-.5em;opacity:0;transform:translateX(50%);visibility:hidden;width:0}");
                const pe = r.Z.getComponent("Button");

                function ue(e) {
                    e.video.getChild("controlBar").addChild("settingsButton")
                }

                r.Z.registerComponent("settingsButton", class extends pe {
                        constructor(e, t) {
                            super(e, t),
                                this.addClass("vjs-fmp-settings"),
                                this.controlText("More Video Settings"),
                                this.el().querySelector(".vjs-icon-placeholder").classList.add("vjs-icon-cog"),
                                e.on("userinactive", (() => {
                                        e.removeClass("vjs-fmp-settings-active")
                                    }
                                ))
                        }

                        handleClick() {
                            this.player().toggleClass("vjs-fmp-settings-active"),
                                this.blur()
                        }
                    }
                );
                const ve = r.Z.getComponent("MenuButton")
                    , he = r.Z.getComponent("MenuItem");

                class me extends he {
                    constructor(e, t) {
                        super(e, {}),
                            this.fmp = t.fmp,
                            this.label = t.label,
                            this.size = t.size,
                            this.el().textContent = this.label
                    }

                    handleClick() {
                        super.handleClick(),
                            this.fmp.captionsDisplay(this.size)
                    }
                }

                class fe extends ve {
                    constructor(e, t) {
                        super(e),
                            this.fmp = t.fmp,
                            this.addClass("vjs-fmp-captions"),
                            this.controlText("Captions"),
                            this.el().querySelector("button").querySelector(".vjs-icon-placeholder").classList.add("vjs-icon-captions"),
                            this.fmp.captionsSrc.subscribe((e => {
                                    e ? (this.toggleCaptions(this.fmp.captionsDisplay()),
                                        this.show()) : this.hide()
                                }
                            )),
                            this.fmp.captionsDisplay.subscribe((e => {
                                    this.toggleCaptions(e)
                                }
                            )),
                            this.update(),
                            this.hide()
                    }

                    createItems() {
                        if (this.fmp && !this.fmp.isSafari)
                            return Object.keys(this.fmp._captionsSizes).map((e => {
                                    const t = this.fmp._captionsSizes[e];
                                    return new me(this.fmp.video, {
                                        fmp: this.fmp,
                                        label: e,
                                        size: t
                                    })
                                }
                            ))
                    }

                    handleClick() {
                        this.fmp.toggleCaptions()
                    }

                    toggleCaptions(e) {
                        e ? this.addClass("vjs-selected") : this.removeClass("vjs-selected"),
                            this.menu.children().forEach((t => {
                                    t.size === e ? t.addClass("vjs-selected") : t.removeClass("vjs-selected")
                                }
                            ))
                    }
                }

                function ge(e) {
                    e.addProp("captionsSrc", ""),
                        e.addProp("captionsDisplay", 0),
                        e._captionsSizes = {
                            large: 28,
                            medium: 24,
                            small: 20,
                            "-none-": 0
                        },
                        e.toggleCaptions = function () {
                            if (e.isSafari)
                                e.captionsDisplay() ? e.captionsDisplay(0) : e.captionsDisplay(20);
                            else {
                                const t = Object.keys(e._captionsSizes).map((t => e._captionsSizes[t]))
                                    , o = t.indexOf(e.captionsDisplay()) - 1
                                    , s = o < 0 ? t[t.length - 1] : t[o];
                                e.captionsDisplay(s)
                            }
                        }
                    ;
                    const t = new fe(e.video, {
                        fmp: e
                    })
                        , o = e.video.getChild("ControlBar");

                    function s() {
                        const t = e.captionsSrc()
                            , o = e.captionsDisplay()
                            , n = e.video.remoteTextTracks();
                        let i;
                        for (let s = 0; s < n.length; s++) {
                            const a = n[s];
                            "captions" === a.kind && (o && t === a.src ? i = a : e.video.removeRemoteTextTrack(a))
                        }
                        !i && t && o && e.video.ready((() => function (t) {
                            const o = e.video.addRemoteTextTrack({
                                src: t,
                                default: !0,
                                mode: "showing",
                                kind: "captions",
                                label: "Captions",
                                language: "en"
                            }, !1)
                                , n = o.addEventListener("load", (() => {
                                    o.removeEventListener("load", n),
                                        ye(o.src) === ye(e.captionsSrc()) ? o.track.mode = "showing" : s()
                                }
                            ))
                        }(t)))
                    }

                    o.addChild(t, {}, o.children().length - 1),
                        e.captionsDisplay.subscribe((t => {
                                le.set("fmp.video.captionsDisplay", t),
                                    s(),
                                t && (e.video.el().querySelector(".vjs-text-track-display").style.fontSize = t + "px")
                            }
                        )),
                        e.captionsDisplay(le.get("fmp.video.captionsDisplay", 0)),
                        e.captionsSrc.subscribe(s)
                }

                function ye(e) {
                    return ("/" === e[0] || "http" === e.slice(0, 4) ? new URL(e) : new URL(e, window.location.origin)).href
                }

                let be;
                const je = {
                    space: "togglePlay",
                    arrowright: "seekForward",
                    arrowleft: "seekBackward",
                    arrowup: "volumeUp",
                    arrowdown: "volumeDown",
                    m: "toggleMute",
                    f: "toggleFullScreen",
                    c: "toggleCaptions",
                    s: "speed"
                }
                    , ke = {
                    togglePlay: (e, t) => {
                        t.preventDefault(),
                            e.video.paused() ? e.play() : e.video.pause()
                    }
                    ,
                    seekForward: e => {
                        const t = e.video.currentTime() + 10;
                        e.video.currentTime(t)
                    }
                    ,
                    seekBackward: e => {
                        const t = e.video.currentTime() - 10;
                        e.video.currentTime(t)
                    }
                    ,
                    volumeUp: (e, t) => {
                        t.preventDefault(),
                            e.video.volume(e.video.volume() + .1)
                    }
                    ,
                    volumeDown: (e, t) => {
                        t.preventDefault(),
                            e.video.volume(e.video.volume() - .1)
                    }
                    ,
                    toggleMute: e => {
                        const t = e.video.volume()
                            , o = e.video.lastVolume_();
                        if (0 === t) {
                            const t = o < .1 ? .1 : o;
                            e.video.volume(t),
                                e.video.muted(!1)
                        } else
                            e.video.muted(!e.video.muted())
                    }
                    ,
                    toggleFullScreen: e => {
                        e.video.isFullscreen() ? e.video.exitFullscreen() : e.video.requestFullscreen()
                    }
                    ,
                    toggleCaptions: e => {
                        e.toggleCaptions()
                    }
                    ,
                    speed: e => {
                        const t = e.playbackRate()
                            , o = e.video.getChild("ControlBar").getChild("PlaybackRateMenuButton").playbackRates()
                            , s = o[o.indexOf(t) + 1];
                        e.playbackRate(s || o[0])
                    }
                };

                function xe(e) {
                    be || (window.addEventListener("keydown", (function (e) {
                            if (!e.key)
                                return;
                            let t = e.key.toLowerCase();
                            " " === t && (t = "space"),
                            e.shiftKey && "shift" !== t && (t += "+shift"),
                            e.ctrlKey && "control" !== t && (t += "+control"),
                            e.metaKey && "meta" !== t && (t += "+meta");
                            const o = e.target || e.srcElement
                                , s = o.tagName.toLowerCase();
                            if (o.isContentEditable || ("input" === s || "textarea" === s || "select" === s) && !o.dataset.allowShortcut && !o.readOnly)
                                return;
                            let n;
                            if (document.fullscreenElement && document.fullscreenElement.classList.contains("FMPlayer"))
                                n = document.fullscreenElement.id;
                            else {
                                const e = r.Z.getPlayers();
                                n = Object.keys(e).find((t => {
                                        const o = e[t].el().getBoundingClientRect()
                                            , s = o.height > 0 && o.width > 0
                                            ,
                                            n = o.top + o.height >= 0 && o.bottom - o.height <= (window.innerHeight || document.documentElement.clientHeight);
                                        return s && n
                                    }
                                ))
                            }
                            const i = r.Z.getPlayer(n)
                                , a = i && i.fmp;
                            if (!a)
                                return;
                            let l = (a._shortcuts[n] || {})[t];
                            "string" == typeof l && (l = ke[l]),
                            "function" == typeof l && (l(a, e),
                                i.userActive(!0),
                                e.preventDefault())
                        }
                    )),
                        be = !0),
                        e._shortcuts = {},
                        e._shortcuts[e.video.id()] = Object.assign({}, je),
                        e.addShortcut = function (t, o, s) {
                            void 0 === s ? e._shortcuts[e.video.id()][t] = o : (e._shortcuts[s] = e._shortcuts[s] || {},
                                e._shortcuts[s][t] = o)
                        }
                }

                function we(e) {
                    e._resumeTime = null,
                        e._resumePercent = null,
                        e.setResumeTime = function (t) {
                            e._resumeTime = "number" == typeof t ? t : e.video.duration() !== 1 / 0 && e.video.currentTime() || 0
                        }
                        ,
                        e.video.on("loadedmetadata", (() => {
                                if (null !== e._resumeTime)
                                    e.video.currentTime(e._resumeTime);
                                else if (null !== e._resumePercent) {
                                    const t = e.video.duration()
                                        , o = Math.floor(e._resumePercent * t);
                                    e.video.currentTime(o)
                                }
                                e._resumeTime = null,
                                    e._resumePercent = null
                            }
                        ))
                }

                function Me(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const o = t.playerType || "core";
                    delete t.playerType;
                    const s = {
                        playerType: o,
                        video: x(e, t),
                        addProp() {
                            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                                t[o] = arguments[o];
                            const n = "string" == typeof t[0] ? s : t.shift()
                                , i = t.shift();
                            return Object.prototype.hasOwnProperty.call(n, i) ? n[i](...t) : (n[i] = function () {
                                const e = new y;

                                function t() {
                                    for (var o = arguments.length, s = new Array(o), n = 0; n < o; n++)
                                        s[n] = arguments[n];
                                    return e.accessor.apply(t, s)
                                }

                                for (const o in e)
                                    "function" == typeof e[o] ? t[o] = e[o] : Object.defineProperty(t, o, {
                                        get: () => e[o],
                                        set: t => {
                                            e[o] = t
                                        }
                                    });
                                return t(...arguments),
                                    t
                            }(...t),
                                n[i].propName = i),
                                s
                        },
                        addPlugin: (e, t) => (e && "function" == typeof e && (e(s, t),
                            s.video.trigger("fmp:pluginloaded")),
                            s)
                    }
                        , n = a()((() => {
                            s.video.off("fmp:pluginloaded", n),
                                s.video.trigger("fmp:allpluginsloaded")
                        }
                    ), 100, {
                        leading: !1
                    });
                    return s.video.on("fmp:pluginloaded", n),
                        s.video.fmp = s,
                        s.isSafari = r.Z.browser.IS_SAFARI || r.Z.browser.IS_IOS,
                        s.addPlugin(g).addPlugin(A).addPlugin(L).addPlugin(E).addPlugin(C).addPlugin(T).addPlugin(ce).addPlugin(ue).addPlugin(ge).addPlugin(xe).addPlugin(we),
                        s
                }

                Me.initAll = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Array.prototype.slice.call(document.querySelectorAll("video[data-fmp]")).map((t => new Me(t, e)))
                }
                ;
                const Pe = r.Z.getComponent("MenuButton")
                    , Fe = r.Z.getComponent("MenuItem");

                class Ae extends Fe {
                    constructor(e, t) {
                        super(e, {}),
                            this.res = t.res,
                            this.videoRes = t.videoRes,
                            this.videoQualityLevel = t.videoQualityLevel,
                            this.el().textContent = ze(this.res, this.videoRes(), this.videoQualityLevel())
                    }

                    handleClick() {
                        super.handleClick(),
                            this.videoRes(this.res)
                    }
                }

                class Se extends Pe {
                    constructor(e, t) {
                        super(e),
                            this.fmp = t.fmp,
                            this.addClass("vjs-fmp-resolutions"),
                            this.fmp.videoResList.subscribe((() => {
                                    this.update(),
                                        this.updateRes()
                                }
                            )),
                            this.fmp.videoRes.subscribe((() => {
                                    this.updateRes()
                                }
                            )),
                            this.fmp.videoQualityLevel.subscribe((() => {
                                    this.updateRes()
                                }
                            )),
                            this.update(),
                            this.updateRes()
                    }

                    createItems() {
                        if (!this.fmp)
                            return;
                        const e = this.fmp.videoResList().slice();
                        return e.sort(((e, t) => parseInt(t, 10) - parseInt(e, 10))),
                            e.map((e => new Ae(this.fmp.video, {
                                res: e,
                                videoRes: this.fmp.videoRes,
                                videoQualityLevel: this.fmp.videoQualityLevel
                            })))
                    }

                    updateRes() {
                        const e = this.fmp.videoRes();
                        this.el().querySelector(".vjs-icon-placeholder").textContent = e,
                            this.menu.children().forEach((t => {
                                    t.res === e ? t.addClass("vjs-selected") : t.removeClass("vjs-selected"),
                                        t.el().textContent = ze(t.res, this.fmp.videoRes(), this.fmp.videoQualityLevel())
                                }
                            ))
                    }

                    handleClick() {
                        const e = this.fmp.videoResList();
                        if (e.length) {
                            const t = e.indexOf(this.fmp.videoRes()) + 1
                                , o = t === e.length ? e[0] : e[t];
                            this.fmp.videoRes(o)
                        }
                    }
                }

                function ze(e, t, o) {
                    return "auto" === e && "auto" === t ? `${e} (${o})` : e
                }

                const Le = "fmp.video.videoRes";

                function Ee(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.addProp("assetRoot", ""),
                        e.addProp("posterResList", []),
                        e.addProp("posterRes", 0),
                        e.addProp("videoResList", []),
                        e.addProp("videoRes", le.get(Le, 0)),
                        e.addProp("videoExtList", []),
                        e.addProp("videoExt", ""),
                        e.addProp("videoQualityLevel", "");
                    const o = Math.round(document.documentElement.clientWidth);
                    e.assetRoot.subscribe((t => {
                            "/" !== t.slice(-1) && (e.assetRoot.value = t + "/")
                        }
                    )),
                        e.posterResList.subscribe((t => {
                                e.posterResList.value = t.map((e => parseInt(e, 10))),
                                e.posterRes() || e.posterRes(Ce(o, e.posterResList()))
                            }
                        )),
                        e.videoExtList.subscribe((t => {
                                e.videoExt(t.find((t => "m3u8" === t ? e.video.canPlayType("application/x-mpegURL") : e.video.canPlayType("video/" + t))))
                            }
                        ));
                    let s = !0;
                    if (e.videoResList.subscribe((t => {
                            e.videoResList.value = t.map((e => {
                                    const t = parseInt(e);
                                    return Number.isNaN(t) ? e : t
                                }
                            )),
                            e.videoRes() && e.videoResList().includes(e.videoRes()) || (s = !1,
                                "m3u8" === e.videoExt() ? e.videoRes("auto") : e.videoRes(Ce(o, e.videoResList())),
                                s = !0)
                        }
                    )),
                        e.videoRes.subscribe((t => {
                                if ("string" == typeof t) {
                                    const o = parseInt(t, 10);
                                    Number.isNaN(o) || (t = o,
                                        e.videoRes.value = o)
                                }
                                s && ("m3u8" === e.videoExt() ? le.set(Le + "Hls", t) : le.set(Le, t),
                                    e.setResumeTime())
                            }
                        )),
                        e.videoExt.subscribe((t => {
                                s = !1,
                                    "m3u8" === t ? e.videoRes(le.get(Le + "Hls", "auto")) : e.videoRes(le.get(Le, 720)),
                                    s = !0
                            }
                        )),
                        !e.isSafari) {
                        const t = new Se(e.video, {
                            fmp: e
                        })
                            , o = e.video.getChild("ControlBar");
                        o.addChild(t, {}, o.children().length - 3)
                    }
                    e.addShortcut("q", (e => {
                            const t = e.videoRes()
                                , o = e.videoResList()
                                , s = o[o.indexOf(t) + 1];
                            e.videoRes(s || o[0])
                        }
                    )),
                    t.assetRoot && e.assetRoot(t.assetRoot),
                    t.posterResList && e.posterResList(t.posterResList),
                    t.videoResList && e.videoResList(t.videoResList),
                    t.videoExtList && e.videoExtList(t.videoExtList)
                }

                function Ce(e, t) {
                    let o = t[0];
                    return t.length > 1 && (o = t.reduce(((t, o) => Math.abs(o - e) < Math.abs(t - e) ? o : t))),
                        o
                }

                function Te(e) {
                    e.videoExt.subscribe((t => {
                            "m3u8" === t && (e.videoResList.value = ["auto"],
                                function () {
                                    const t = e.video.qualityLevels();
                                    t.on("change", (function () {
                                            const t = e.video.qualityLevels()
                                                , o = ["auto"];
                                            t.levels_.forEach((t => {
                                                    t.enabled = "auto" === e.videoRes() || e.videoRes() === t.height,
                                                        o.push(t.height)
                                                }
                                            )),
                                                e.videoResList(o);
                                            const s = t[t.selectedIndex].height;
                                            e.videoQualityLevel(s)
                                        }
                                    )),
                                        e.videoRes.subscribe((e => {
                                                if ("auto" === e)
                                                    for (let e = 0; e < t.length; e++)
                                                        t[e].enabled = !0;
                                                else
                                                    for (let o = 0; o < t.length; o++) {
                                                        const s = t[o];
                                                        s.enabled = s.height === e
                                                    }
                                            }
                                        ))
                                }())
                        }
                    ))
                }

                function Re(e) {
                    let t, o;
                    e.addProp("isOnline", !0),
                        window.addEventListener("offline", (() => e.isOnline(!1))),
                        window.addEventListener("online", (() => e.isOnline(!0)));
                    const s = 5e3;
                    let n, i = e.isOnline(), a = 0;

                    function r() {
                        const o = t + s / 2 / 1e3 * e.video.playbackRate();
                        l(),
                        e.video.currentTime() <= o && (e.isOnline() || i ? a < 5 ? (a++,
                            e.setResumeTime(),
                            setTimeout((() => {
                                    e.videoSrc.publish()
                                }
                            ), 1e3),
                            c()) : function () {
                            e.messages.add({
                                id: "networkError",
                                type: "warning",
                                message: "We're having trouble playing this stream. Check your connection and refresh this page to retry."
                            });
                            let t = "";
                            const o = e.mediaError();
                            o && void 0 !== o.code && (t = ` (MediaError ${o.code} - ${o.message})`),
                                e.video.duration() === 1 / 0 ? e.trackError("HLS - disabled livestream, unable to continue" + t) : e.trackError("HLS - disabled player, unable to continue" + t),
                                d()
                        }() : (e.messages.add({
                            id: "networkError",
                            type: "warning",
                            message: "You appear to be offline. Check your connection and press play to retry."
                        }),
                            e.video.duration() === 1 / 0 ? e.trackError("HLS - disabled livestream, poor connection") : e.trackError("HLS - disabled player, poor connection"),
                            d()))
                    }

                    function l() {
                        clearTimeout(o),
                            t = 0,
                            o = null,
                            e.video.off("pause", l)
                    }

                    function c() {
                        n && clearTimeout(n);
                        const e = a;
                        n = setTimeout((() => {
                                e === a && a > 0 && (a--,
                                a > 0 && c())
                            }
                        ), 2 * s)
                    }

                    function d() {
                        e.video.pause(),
                            e.video.removeClass("vjs-waiting"),
                            e.video.removeClass("vjs-seeking")
                    }

                    e.video.ready((() => {
                            e.video.tech().on("retryplaylist", (() => {
                                    e.trackError("HLS - retryplaylist")
                                }
                            )),
                                e.video.tech().on("playliststuck", (() => {
                                        e.trackError("HLS - playliststuck")
                                    }
                                ))
                        }
                    )),
                        e.video.on("waiting", (function () {
                                o || (i = e.isOnline(),
                                    t = e.video.currentTime(),
                                    o = setTimeout(r, s),
                                    e.video.one("pause", (() => {
                                            e.video.one("pause", l)
                                        }
                                    )))
                            }
                        )),
                        e.video.on("playing", l)
                }

                !function (e) {
                    var t = function (e) {
                        return e && "object" == typeof e && "default" in e ? e : {
                            default: e
                        }
                    }(e);

                    class o {
                        constructor(e) {
                            let t = this;
                            return t.id = e.id,
                                t.label = t.id,
                                t.width = e.width,
                                t.height = e.height,
                                t.bitrate = e.bandwidth,
                                t.frameRate = e.frameRate,
                                t.enabled_ = e.enabled,
                                Object.defineProperty(t, "enabled", {
                                    get: () => t.enabled_(),
                                    set(e) {
                                        t.enabled_(e)
                                    }
                                }),
                                t
                        }
                    }

                    class s extends t.default.EventTarget {
                        constructor() {
                            super();
                            let e = this;
                            return e.levels_ = [],
                                e.selectedIndex_ = -1,
                                Object.defineProperty(e, "selectedIndex", {
                                    get: () => e.selectedIndex_
                                }),
                                Object.defineProperty(e, "length", {
                                    get: () => e.levels_.length
                                }),
                                e[Symbol.iterator] = () => e.levels_.values(),
                                e
                        }

                        addQualityLevel(e) {
                            let t = this.getQualityLevelById(e.id);
                            if (t)
                                return t;
                            const s = this.levels_.length;
                            return t = new o(e),
                            "" + s in this || Object.defineProperty(this, s, {
                                get() {
                                    return this.levels_[s]
                                }
                            }),
                                this.levels_.push(t),
                                this.trigger({
                                    qualityLevel: t,
                                    type: "addqualitylevel"
                                }),
                                t
                        }

                        removeQualityLevel(e) {
                            let t = null;
                            for (let o = 0, s = this.length; o < s; o++)
                                if (this[o] === e) {
                                    t = this.levels_.splice(o, 1)[0],
                                        this.selectedIndex_ === o ? this.selectedIndex_ = -1 : this.selectedIndex_ > o && this.selectedIndex_--;
                                    break
                                }
                            return t && this.trigger({
                                qualityLevel: e,
                                type: "removequalitylevel"
                            }),
                                t
                        }

                        getQualityLevelById(e) {
                            for (let t = 0, o = this.length; t < o; t++) {
                                const o = this[t];
                                if (o.id === e)
                                    return o
                            }
                            return null
                        }

                        dispose() {
                            this.selectedIndex_ = -1,
                                this.levels_.length = 0
                        }
                    }

                    s.prototype.allowedEvents_ = {
                        change: "change",
                        addqualitylevel: "addqualitylevel",
                        removequalitylevel: "removequalitylevel"
                    };
                    for (const e in s.prototype.allowedEvents_)
                        s.prototype["on" + e] = null;
                    var n = "4.0.0";
                    const i = function (e) {
                        return function (e, t) {
                            const o = e.qualityLevels
                                , i = new s
                                , a = function () {
                                i.dispose(),
                                    e.qualityLevels = o,
                                    e.off("dispose", a)
                            };
                            return e.on("dispose", a),
                                e.qualityLevels = () => i,
                                e.qualityLevels.VERSION = n,
                                i
                        }(this, t.default.obj.merge({}, e))
                    };
                    t.default.registerPlugin("qualityLevels", i),
                        i.VERSION = n
                }(r.Z);
                const Ne = "https://frontendmasters.com";

                function Be(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

                    function o(e) {
                        e.startsWith("/") || (e = "/" + e);
                        const t = new URL(Ne + e);
                        t.pathname.endsWith("/") || (t.pathname = t.pathname + "/"),
                            this.value = t.pathname + t.search
                    }

                    e.addProp("playlist", {}),
                        e.addProp("lesson", {}),
                        e._playlistLessonLoading = !1,
                        e.addProp("route", ""),
                        e.addProp("routeRoot"),
                        e.route.subscribe(o),
                        e.route.subscribe((function (t) {
                                const o = e.searchParams()
                                    , s = new URL(Ne + t);
                                let n = o.toString();
                                n && (n = "?" + n),
                                    this.value = s.pathname + n
                            }
                        )),
                        e.routeRoot.subscribe(o),
                        e.routeRoot(t.routeRoot || "/"),
                        e.route.subscribe((() => Ie(e))),
                        e.playlist.subscribe((() => Ie(e))),
                        e.lesson.subscribe((() => {
                                e._playlistLessonLoading = !0,
                                    e.video.one("loadedmetadata", (() => {
                                            e._playlistLessonLoading = !1
                                        }
                                    ))
                            }
                        )),
                        e.video.on("ended", a()((function () {
                                const t = e.lesson().index + 1
                                    , o = e.playlist().lessonSlugs[t]
                                    , s = e.playlist().lessonHashes[t]
                                    , n = e.playlist().lessonData[s];
                                o && n && !n.disabled ? e.route(`${e.routeRoot()}${o}/`) : t === e.playlist().lessonSlugs.length && e.video.trigger("fmp:playlistended")
                            }
                        ), 500))
                }

                async function Ie(e) {
                    const t = e.playlist();
                    if (!t.lessonSlugs)
                        return;
                    const o = new URL(Ne + e.route()).pathname.split("/").filter((e => !!e))
                        , s = decodeURI(o.pop()) || ""
                        , n = t.lessonSlugs.indexOf(s);
                    if (n < 0)
                        return void e.route(`${e.routeRoot()}${t.lessonSlugs[0]}/`);
                    if ("function" == typeof e.lesson.onBeforeChange && !await e.lesson.onBeforeChange(e, s))
                        return void e.route(`${e.routeRoot()}${e.lesson().slug || ""}/`);
                    if (e.lesson().slug === s)
                        return void (null !== e._resumeTime && (e.video.currentTime(e._resumeTime),
                            e._resumeTime = null));
                    t.hasIntroLoop && e.video.one("canplay", (() => {
                            e.video.currentTime(4)
                        }
                    ));
                    const i = t.lessonHashes[n]
                        , a = t.lessonData[i];
                    e.lesson(a)
                }

                function qe(e) {
                    const t = document.createElement("div");
                    c().route.prefix = "",
                        c().route(t, e.routeRoot(), {
                            "/:pathname...": {
                                onmatch(t) {
                                    e.route(t.pathname)
                                }
                            }
                        }),
                        e.route.subscribe(((e, t) => {
                                t && window.history.replaceState({}, null, e)
                            }
                        ))
                }

                function _e(e) {
                    const t = {
                        headers: {
                            accept: "application/json",
                            "content-type": "application/json; charset=utf-8"
                        },
                        ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    };
                    return t.body && "string" != typeof t.body && (t.body = JSON.stringify(t.body)),
                        fetch(e, t).then((e => {
                                if (!e.ok)
                                    throw e;
                                return Oe(e)
                            }
                        )).catch((e => Oe(e).then((e => {
                                throw e
                            }
                        ))))
                }

                function Oe(e) {
                    return "function" != typeof e.text ? Promise.resolve(e) : e.text().then((t => {
                            try {
                                return e.parsedBody = JSON.parse(t),
                                    e
                            } catch (t) {
                                return e
                            }
                        }
                    ))
                }

                function He(e) {
                    e.request = function (t) {
                        return _e(t.url, t).then((e => e.parsedBody)).catch((o => {
                                !function (t, o) {
                                    if ("AbortError" === t.name)
                                        return;
                                    const s = t.status || 0;
                                    if (401 === s) {
                                        sessionStorage.fmnotify = "Please login to access our course content.";
                                        const e = "/login/?return=" + encodeURIComponent(window.location.pathname);
                                        window.location.href = e
                                    } else if (403 === s) {
                                        const t = "You are not authorized to access this content. Sometimes this is a result of browser plugins. Please check and try again.";
                                        e.messages.add({
                                            message: t,
                                            id: "apiError",
                                            type: "warning"
                                        }),
                                            e.trackError(`json-fetch ${s} - ${t}`)
                                    } else if (!o.passthroughErrors)
                                        if (o.retries = o.retries || 0,
                                        o.retries < 3)
                                            o.retries += 1,
                                                setTimeout((() => {
                                                        e.request(o)
                                                    }
                                                ), 2e3);
                                        else {
                                            let o = "We're having trouble contacting our servers. Check your network and try again?";
                                            t?.parsedBody?.message && (o = t?.parsedBody?.message.charAt(0).toUpperCase() + t?.parsedBody?.message.slice(1).trim() + "."),
                                                e.messages.add({
                                                    message: o,
                                                    id: "apiError",
                                                    type: "warning"
                                                }),
                                                e.trackError(`json-fetch ${s} - ${o}`)
                                        }
                                }(o, t)
                            }
                        ))
                    }
                }

                function $e(e) {
                    function t() {
                        const t = e.assetRoot()
                            , o = e.lesson()
                            , s = e.videoRes()
                            , n = e.videoExt();
                        if (t && o.hash && s && n) {
                            e._courseApiRequestController && e._courseApiRequestController.abort();
                            const i = new AbortController
                                , a = i.signal;
                            e._courseApiRequestController = i;
                            const r = `${t}video/${o.hash}/source?f=${n}${function (e, t) {
                                return "m3u8" === e ? "" : `&r=${t}`
                            }(n, s)}`;
                            return e.request({
                                signal: a,
                                url: r,
                                credentials: "include"
                            }).then((t => {
                                    if (!t || !t.url)
                                        return "";
                                    e._courseApiRequestController = null;
                                    const o = t.url;
                                    return o.startsWith("https://stream.frontendmasters.com/") ? {
                                        src: o,
                                        withCredentials: !0
                                    } : {
                                        src: o
                                    }
                                }
                            ))
                        }
                        return e.videoSrc.value
                    }

                    e._courseApiRequestController = null,
                        e.initCourse = function (o) {
                            return e.request({
                                url: e.assetRoot() + "courses/" + o,
                                credentials: "include"
                            }).then((o => {
                                    o && (e.playlist(o),
                                        o.hasHLS ? e.videoExtList(["m3u8"]) : (e.videoResList([360, 720, 1080]),
                                            e.videoExtList(["webm", "mp4"])),
                                        e.videoSrc(t))
                                }
                            ))
                        }
                        ,
                        e.videoSrc.subscribe((t => {
                                const o = e.lesson()
                                    , s = e.playlist();
                                let n = "";
                                t && s.hasWebVTT && s.datePublished && s.slug && o.hash && o.slug && (n = `https://captions.frontendmasters.com/assets/courses/${s.datePublished}-${s.slug}/${o.index}-${o.slug}.vtt`),
                                    e.captionsSrc(""),
                                    e.captionsSrc(n)
                            }
                        ));
                    let o = 0;
                    e.mediaError.subscribe((t => {
                            t && De(e) && (o < 3 ? (o += 1,
                                function (e) {
                                    e.video.pause(),
                                        e.video.one("canplay", e.play),
                                        e.setResumeTime(),
                                        e._userInitiatedRatechange = !1,
                                        e.videoSrc.compute()
                                }(e),
                                e.mediaError(null)) : (e.messages.add({
                                id: "cloudfrontExpired",
                                type: "warning",
                                message: e.messages.DEFAULT_ERROR
                            }),
                                e.trackError("course-api - Too many cloudfront retries")))
                        }
                    )),
                        e.videoSrc.subscribe((() => {
                                o > 0 && !De(e) && (o -= 1)
                            }
                        ))
                }

                function De(e) {
                    const t = e.videoSrc().src;
                    if (t && t.includes("Expires=")) {
                        let e = t.slice(t.indexOf("Expires=") + 8);
                        return e = e.slice(0, e.indexOf("&")),
                            e = 1e3 * parseInt(e, 10),
                        Date.now() >= e
                    }
                    return !1
                }

                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.vjs-quiz-range{background:#f09e14;bottom:-2px;position:absolute;top:-2px;transform:translate(-1px);width:2px;z-index:2}"),
                    f("code[class*=language-],pre[class*=language-]{word-wrap:normal;background:0 0;color:#ccc;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;text-align:left;white-space:pre;word-break:normal;word-spacing:normal}pre[class*=language-]{margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{border-radius:.3em;padding:.1em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}"),
                    f('@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerModalQuiz-fadeout{animation:fade-in .2s reverse}.FMPlayerModalQuiz-fadein{animation:fade-in .2s}.FMPlayerModalQuiz .vjs-modal-dialog-content{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:0}.FMPlayerModalQuiz .modal-quiz{background:rgba(0,0,0,.9);display:flex;flex-direction:column;max-width:1000px;min-height:60%;width:100%;z-index:20}.FMPlayerModalQuiz .modal-quiz.submitting .FMPlayerButton{opacity:.75}.FMPlayerModalQuiz .modal-quiz-header{font-size:125%;padding:20px;position:relative}.FMPlayerModalQuiz .modal-quiz-header:before{background:#f09e14;content:"";display:block;height:1.5em;left:-5px;position:absolute;width:10px}@media only screen and (min-width:1024px){.FMPlayerModalQuiz .modal-quiz-header{font-size:150%;padding:20px 30px}}.FMPlayerModalQuiz .modal-quiz-body{border:none;flex:1;margin:0;min-width:0;overflow:auto;padding:10px 20px 20px}.FMPlayerModalQuiz .modal-quiz-body.error{animation:error-flash .75s}.FMPlayerModalQuiz .modal-quiz-body>div{margin-top:20px}.FMPlayerModalQuiz .modal-quiz-body>div:first-child{margin-top:0}@media only screen and (min-width:1024px){.FMPlayerModalQuiz .modal-quiz-body{padding:10px 30px 20px}}.FMPlayerModalQuiz .modal-quiz-footer{align-items:center;background:#222;display:flex;gap:20px;justify-content:space-between;padding:10px 20px}.FMPlayerModalQuiz .modal-quiz-footer .spacer{flex:1}.FMPlayerModalQuiz .modal-quiz-footer .skip{color:#8a8a8a;font-size:14px;text-decoration:none}.FMPlayerModalQuiz .modal-quiz-footer .skip:hover{color:#aaa}.FMPlayerModalQuiz .modal-quiz-footer .error-message{color:#f09e14}@media only screen and (min-width:1024px){.FMPlayerModalQuiz .modal-quiz-footer{padding:20px 30px}}.FMPlayerModalQuiz .modal-quiz-answer-button input{display:none}.FMPlayerModalQuiz .modal-quiz-answer-button label{background:#3e3e3e;border-radius:4px;cursor:pointer;display:inline-block;min-width:150px;padding:10px 20px;position:relative;transition:background .2s;word-break:break-word}.FMPlayerModalQuiz .modal-quiz-answer-button label:hover{background:#5baec0}.FMPlayerModalQuiz .modal-quiz-answer-button input:checked+label{background:#327483}.FMPlayerModalQuiz .modal-quiz-answer-button.correct label:after,.FMPlayerModalQuiz .modal-quiz-answer-button.incorrect label:after{background:red;border-radius:1.5em;color:#fff;display:inline-block;font-size:1em;height:1.5em;line-height:1.5em;margin-left:10px;position:absolute;right:-.5em;text-align:center;top:-.5em;width:1.5em}.FMPlayerModalQuiz .modal-quiz-answer-button.correct label:after{background:green}.FMPlayerModalQuiz .modal-quiz-answer-button.check label:after{content:"✓"}.FMPlayerModalQuiz .modal-quiz-answer-button.ex label:after{content:"✕"}.FMPlayerModalQuiz .modal-quiz-answer-button.number label:after{content:attr(data-order)}.FMPlayerModalQuiz .modal-quiz-body[disabled] .modal-quiz-answer-button label:hover{background:#3e3e3e;cursor:default}.FMPlayerModalQuiz .modal-quiz-body[disabled] .modal-quiz-answer-button input:checked+label{background:#327483}.FMPlayerModalQuiz .modal-quiz-answer-columns{column-count:2}.FMPlayerModalQuiz .modal-quiz-answer-columns .modal-quiz-answer-button{margin-bottom:20px}.FMPlayerModalQuiz .modal-quiz-codeblock{background:#0d1e26;margin:0;overflow-x:auto}.FMPlayerModalQuiz .modal-quiz-codeblock code{display:block;margin:10px 20px}.FMPlayerModalQuiz .modal-quiz-sorted-items,.FMPlayerModalQuiz .modal-quiz-unsorted-items{display:flex;flex-wrap:wrap;gap:20px}.FMPlayerModalQuiz .modal-quiz-matched-items,.FMPlayerModalQuiz .modal-quiz-unmatched-items{column-gap:30px;display:grid;grid-template-columns:max-content 1fr;row-gap:20px}.FMPlayerModalQuiz .modal-quiz-matched-items,.FMPlayerModalQuiz .modal-quiz-sorted-items{border-bottom:1px solid #3e3e3e;padding-bottom:20px}.FMPlayerModalQuiz .modal-quiz-matched-items:empty,.FMPlayerModalQuiz .modal-quiz-sorted-items:empty{border-bottom:none;padding-bottom:0}.FMPlayerModalQuiz .modal-quiz-matched-items .modal-quiz-answer-match{z-index:2}.FMPlayerModalQuiz .modal-quiz-matched-items .modal-quiz-answer-match-left label{position:relative}.FMPlayerModalQuiz .modal-quiz-matched-items .modal-quiz-answer-match-left label:before{background:#fff;content:"";display:block;height:1px;left:100%;opacity:1;position:absolute;top:50%;transition:opacity .2s;width:150px;z-index:1}.FMPlayerModalQuiz .modal-quiz-matched-items .modal-quiz-answer-match-left.correct label:before{background:green}.FMPlayerModalQuiz .modal-quiz-matched-items .modal-quiz-answer-match-left.incorrect label:before{background:red}.FMPlayerModalQuiz .modal-quiz-matched-items .FMPlayerModalQuiz-fadein.modal-quiz-answer-match-left label:before,.FMPlayerModalQuiz .modal-quiz-matched-items .FMPlayerModalQuiz-fadeout.modal-quiz-answer-match-left label:before{opacity:0}@-moz-keyframes error-flash{0%{opacity:1}20%{opacity:.5}40%{opacity:1}60%{opacity:.5}80%{opacity:1}}@-webkit-keyframes error-flash{0%{opacity:1}20%{opacity:.5}40%{opacity:1}60%{opacity:.5}80%{opacity:1}}@-o-keyframes error-flash{0%{opacity:1}20%{opacity:.5}40%{opacity:1}60%{opacity:.5}80%{opacity:1}}@keyframes error-flash{0%{opacity:1}20%{opacity:.5}40%{opacity:1}60%{opacity:.5}80%{opacity:1}}');
                var Ue, Qe, Je = {
                    exports: {}
                };
                Ue = Je,
                    Qe = function (e) {
                        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i
                            , o = 0
                            , s = {}
                            , n = {
                            manual: e.Prism && e.Prism.manual,
                            disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                            util: {
                                encode: function e(t) {
                                    return t instanceof i ? new i(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                                },
                                type: function (e) {
                                    return Object.prototype.toString.call(e).slice(8, -1)
                                },
                                objId: function (e) {
                                    return e.__id || Object.defineProperty(e, "__id", {
                                        value: ++o
                                    }),
                                        e.__id
                                },
                                clone: function e(t, o) {
                                    var s, i;
                                    switch (o = o || {},
                                        n.util.type(t)) {
                                        case "Object":
                                            if (i = n.util.objId(t),
                                                o[i])
                                                return o[i];
                                            for (var a in s = {},
                                                o[i] = s,
                                                t)
                                                t.hasOwnProperty(a) && (s[a] = e(t[a], o));
                                            return s;
                                        case "Array":
                                            return i = n.util.objId(t),
                                                o[i] ? o[i] : (s = [],
                                                    o[i] = s,
                                                    t.forEach((function (t, n) {
                                                            s[n] = e(t, o)
                                                        }
                                                    )),
                                                    s);
                                        default:
                                            return t
                                    }
                                },
                                getLanguage: function (e) {
                                    for (; e;) {
                                        var o = t.exec(e.className);
                                        if (o)
                                            return o[1].toLowerCase();
                                        e = e.parentElement
                                    }
                                    return "none"
                                },
                                setLanguage: function (e, o) {
                                    e.className = e.className.replace(RegExp(t, "gi"), ""),
                                        e.classList.add("language-" + o)
                                },
                                currentScript: function () {
                                    if ("undefined" == typeof document)
                                        return null;
                                    if ("currentScript" in document)
                                        return document.currentScript;
                                    try {
                                        throw new Error
                                    } catch (s) {
                                        var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack) || [])[1];
                                        if (e) {
                                            var t = document.getElementsByTagName("script");
                                            for (var o in t)
                                                if (t[o].src == e)
                                                    return t[o]
                                        }
                                        return null
                                    }
                                },
                                isActive: function (e, t, o) {
                                    for (var s = "no-" + t; e;) {
                                        var n = e.classList;
                                        if (n.contains(t))
                                            return !0;
                                        if (n.contains(s))
                                            return !1;
                                        e = e.parentElement
                                    }
                                    return !!o
                                }
                            },
                            languages: {
                                plain: s,
                                plaintext: s,
                                text: s,
                                txt: s,
                                extend: function (e, t) {
                                    var o = n.util.clone(n.languages[e]);
                                    for (var s in t)
                                        o[s] = t[s];
                                    return o
                                },
                                insertBefore: function (e, t, o, s) {
                                    var i = (s = s || n.languages)[e]
                                        , a = {};
                                    for (var r in i)
                                        if (i.hasOwnProperty(r)) {
                                            if (r == t)
                                                for (var l in o)
                                                    o.hasOwnProperty(l) && (a[l] = o[l]);
                                            o.hasOwnProperty(r) || (a[r] = i[r])
                                        }
                                    var c = s[e];
                                    return s[e] = a,
                                        n.languages.DFS(n.languages, (function (t, o) {
                                                o === c && t != e && (this[t] = a)
                                            }
                                        )),
                                        a
                                },
                                DFS: function e(t, o, s, i) {
                                    i = i || {};
                                    var a = n.util.objId;
                                    for (var r in t)
                                        if (t.hasOwnProperty(r)) {
                                            o.call(t, r, t[r], s || r);
                                            var l = t[r]
                                                , c = n.util.type(l);
                                            "Object" !== c || i[a(l)] ? "Array" !== c || i[a(l)] || (i[a(l)] = !0,
                                                e(l, o, r, i)) : (i[a(l)] = !0,
                                                e(l, o, null, i))
                                        }
                                }
                            },
                            plugins: {},
                            highlightAll: function (e, t) {
                                n.highlightAllUnder(document, e, t)
                            },
                            highlightAllUnder: function (e, t, o) {
                                var s = {
                                    callback: o,
                                    container: e,
                                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                                };
                                n.hooks.run("before-highlightall", s),
                                    s.elements = Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),
                                    n.hooks.run("before-all-elements-highlight", s);
                                for (var i, a = 0; i = s.elements[a++];)
                                    n.highlightElement(i, !0 === t, s.callback)
                            },
                            highlightElement: function (t, o, s) {
                                var i = n.util.getLanguage(t)
                                    , a = n.languages[i];
                                n.util.setLanguage(t, i);
                                var r = t.parentElement;
                                r && "pre" === r.nodeName.toLowerCase() && n.util.setLanguage(r, i);
                                var l = {
                                    element: t,
                                    language: i,
                                    grammar: a,
                                    code: t.textContent
                                };

                                function c(e) {
                                    l.highlightedCode = e,
                                        n.hooks.run("before-insert", l),
                                        l.element.innerHTML = l.highlightedCode,
                                        n.hooks.run("after-highlight", l),
                                        n.hooks.run("complete", l),
                                    s && s.call(l.element)
                                }

                                if (n.hooks.run("before-sanity-check", l),
                                (r = l.element.parentElement) && "pre" === r.nodeName.toLowerCase() && !r.hasAttribute("tabindex") && r.setAttribute("tabindex", "0"),
                                    !l.code)
                                    return n.hooks.run("complete", l),
                                        void (s && s.call(l.element));
                                if (n.hooks.run("before-highlight", l),
                                    l.grammar)
                                    if (o && e.Worker) {
                                        var d = new Worker(n.filename);
                                        d.onmessage = function (e) {
                                            c(e.data)
                                        }
                                            ,
                                            d.postMessage(JSON.stringify({
                                                language: l.language,
                                                code: l.code,
                                                immediateClose: !0
                                            }))
                                    } else
                                        c(n.highlight(l.code, l.grammar, l.language));
                                else
                                    c(n.util.encode(l.code))
                            },
                            highlight: function (e, t, o) {
                                var s = {
                                    code: e,
                                    grammar: t,
                                    language: o
                                };
                                if (n.hooks.run("before-tokenize", s),
                                    !s.grammar)
                                    throw new Error('The language "' + s.language + '" has no grammar.');
                                return s.tokens = n.tokenize(s.code, s.grammar),
                                    n.hooks.run("after-tokenize", s),
                                    i.stringify(n.util.encode(s.tokens), s.language)
                            },
                            tokenize: function (e, t) {
                                var o = t.rest;
                                if (o) {
                                    for (var s in o)
                                        t[s] = o[s];
                                    delete t.rest
                                }
                                var n = new l;
                                return c(n, n.head, e),
                                    r(e, n, t, n.head, 0),
                                    function (e) {
                                        for (var t = [], o = e.head.next; o !== e.tail;)
                                            t.push(o.value),
                                                o = o.next;
                                        return t
                                    }(n)
                            },
                            hooks: {
                                all: {},
                                add: function (e, t) {
                                    var o = n.hooks.all;
                                    o[e] = o[e] || [],
                                        o[e].push(t)
                                },
                                run: function (e, t) {
                                    var o = n.hooks.all[e];
                                    if (o && o.length)
                                        for (var s, i = 0; s = o[i++];)
                                            s(t)
                                }
                            },
                            Token: i
                        };

                        function i(e, t, o, s) {
                            this.type = e,
                                this.content = t,
                                this.alias = o,
                                this.length = 0 | (s || "").length
                        }

                        function a(e, t, o, s) {
                            e.lastIndex = t;
                            var n = e.exec(o);
                            if (n && s && n[1]) {
                                var i = n[1].length;
                                n.index += i,
                                    n[0] = n[0].slice(i)
                            }
                            return n
                        }

                        function r(e, t, o, s, l, p) {
                            for (var u in o)
                                if (o.hasOwnProperty(u) && o[u]) {
                                    var v = o[u];
                                    v = Array.isArray(v) ? v : [v];
                                    for (var h = 0; h < v.length; ++h) {
                                        if (p && p.cause == u + "," + h)
                                            return;
                                        var m = v[h]
                                            , f = m.inside
                                            , g = !!m.lookbehind
                                            , y = !!m.greedy
                                            , b = m.alias;
                                        if (y && !m.pattern.global) {
                                            var j = m.pattern.toString().match(/[imsuy]*$/)[0];
                                            m.pattern = RegExp(m.pattern.source, j + "g")
                                        }
                                        for (var k = m.pattern || m, x = s.next, w = l; x !== t.tail && !(p && w >= p.reach); w += x.value.length,
                                            x = x.next) {
                                            var M = x.value;
                                            if (t.length > e.length)
                                                return;
                                            if (!(M instanceof i)) {
                                                var P, F = 1;
                                                if (y) {
                                                    if (!(P = a(k, w, e, g)) || P.index >= e.length)
                                                        break;
                                                    var A = P.index
                                                        , S = P.index + P[0].length
                                                        , z = w;
                                                    for (z += x.value.length; A >= z;)
                                                        z += (x = x.next).value.length;
                                                    if (w = z -= x.value.length,
                                                    x.value instanceof i)
                                                        continue;
                                                    for (var L = x; L !== t.tail && (z < S || "string" == typeof L.value); L = L.next)
                                                        F++,
                                                            z += L.value.length;
                                                    F--,
                                                        M = e.slice(w, z),
                                                        P.index -= w
                                                } else if (!(P = a(k, 0, M, g)))
                                                    continue;
                                                A = P.index;
                                                var E = P[0]
                                                    , C = M.slice(0, A)
                                                    , T = M.slice(A + E.length)
                                                    , R = w + M.length;
                                                p && R > p.reach && (p.reach = R);
                                                var N = x.prev;
                                                if (C && (N = c(t, N, C),
                                                    w += C.length),
                                                    d(t, N, F),
                                                    x = c(t, N, new i(u, f ? n.tokenize(E, f) : E, b, E)),
                                                T && c(t, x, T),
                                                F > 1) {
                                                    var B = {
                                                        cause: u + "," + h,
                                                        reach: R
                                                    };
                                                    r(e, t, o, x.prev, w, B),
                                                    p && B.reach > p.reach && (p.reach = B.reach)
                                                }
                                            }
                                        }
                                    }
                                }
                        }

                        function l() {
                            var e = {
                                value: null,
                                prev: null,
                                next: null
                            }
                                , t = {
                                value: null,
                                prev: e,
                                next: null
                            };
                            e.next = t,
                                this.head = e,
                                this.tail = t,
                                this.length = 0
                        }

                        function c(e, t, o) {
                            var s = t.next
                                , n = {
                                value: o,
                                prev: t,
                                next: s
                            };
                            return t.next = n,
                                s.prev = n,
                                e.length++,
                                n
                        }

                        function d(e, t, o) {
                            for (var s = t.next, n = 0; n < o && s !== e.tail; n++)
                                s = s.next;
                            t.next = s,
                                s.prev = t,
                                e.length -= n
                        }

                        if (e.Prism = n,
                            i.stringify = function e(t, o) {
                                if ("string" == typeof t)
                                    return t;
                                if (Array.isArray(t)) {
                                    var s = "";
                                    return t.forEach((function (t) {
                                            s += e(t, o)
                                        }
                                    )),
                                        s
                                }
                                var i = {
                                    type: t.type,
                                    content: e(t.content, o),
                                    tag: "span",
                                    classes: ["token", t.type],
                                    attributes: {},
                                    language: o
                                }
                                    , a = t.alias;
                                a && (Array.isArray(a) ? Array.prototype.push.apply(i.classes, a) : i.classes.push(a)),
                                    n.hooks.run("wrap", i);
                                var r = "";
                                for (var l in i.attributes)
                                    r += " " + l + '="' + (i.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                                return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + r + ">" + i.content + "</" + i.tag + ">"
                            }
                            ,
                            !e.document)
                            return e.addEventListener ? (n.disableWorkerMessageHandler || e.addEventListener("message", (function (t) {
                                    var o = JSON.parse(t.data)
                                        , s = o.language
                                        , i = o.code
                                        , a = o.immediateClose;
                                    e.postMessage(n.highlight(i, n.languages[s], s)),
                                    a && e.close()
                                }
                            ), !1),
                                n) : n;
                        var p = n.util.currentScript();

                        function u() {
                            n.manual || n.highlightAll()
                        }

                        if (p && (n.filename = p.src,
                        p.hasAttribute("data-manual") && (n.manual = !0)),
                            !n.manual) {
                            var v = document.readyState;
                            "loading" === v || "interactive" === v && p && p.defer ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16)
                        }
                        return n
                    }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}),
                Ue.exports && (Ue.exports = Qe),
                void 0 !== R && (R.Prism = Qe);
                var Ve = N(Je.exports);

                function Ze(e, t) {
                    return o => {
                        let s = o.target;
                        for (; s !== o.currentTarget;) {
                            if (s.matches(e)) {
                                t(o, s);
                                break
                            }
                            s = s.parentNode
                        }
                    }
                }

                function Xe(e) {
                    let t = parseInt(e);
                    if (isNaN(t))
                        return "00:00";
                    const o = Math.floor(t / 60);
                    return t = Math.floor(t) % 60,
                    ("0" + o).slice(-2) + ":" + ("0" + t).slice(-2)
                }

                function Ye(e, t, o) {
                    Array.isArray(t) && (o = t,
                        t = null);
                    const s = document.createElement(e);
                    return t && Object.keys(t).forEach((e => {
                            "for" === e ? s.setAttribute(e, t[e]) : "dataset" === e ? Object.keys(t.dataset).forEach((e => {
                                    s.dataset[e] = t.dataset[e]
                                }
                            )) : s[e] = t[e]
                        }
                    )),
                    o && o.forEach((e => {
                            e.nodeName || (e = document.createTextNode(e.toString())),
                                s.appendChild(e)
                        }
                    )),
                        s
                }

                Prism.languages.clike = {
                    comment: [{
                        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                        lookbehind: !0,
                        greedy: !0
                    }, {
                        pattern: /(^|[^\\:])\/\/.*/,
                        lookbehind: !0,
                        greedy: !0
                    }],
                    string: {
                        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                        greedy: !0
                    },
                    "class-name": {
                        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: {
                            punctuation: /[.\\]/
                        }
                    },
                    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                    boolean: /\b(?:false|true)\b/,
                    function: /\b\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/
                },
                    Prism.languages.markup = {
                        comment: {
                            pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                            greedy: !0
                        },
                        prolog: {
                            pattern: /<\?[\s\S]+?\?>/,
                            greedy: !0
                        },
                        doctype: {
                            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                            greedy: !0,
                            inside: {
                                "internal-subset": {
                                    pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                                    lookbehind: !0,
                                    greedy: !0,
                                    inside: null
                                },
                                string: {
                                    pattern: /"[^"]*"|'[^']*'/,
                                    greedy: !0
                                },
                                punctuation: /^<!|>$|[[\]]/,
                                "doctype-tag": /^DOCTYPE/i,
                                name: /[^\s<>'"]+/
                            }
                        },
                        cdata: {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            greedy: !0
                        },
                        tag: {
                            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                            greedy: !0,
                            inside: {
                                tag: {
                                    pattern: /^<\/?[^\s>\/]+/,
                                    inside: {
                                        punctuation: /^<\/?/,
                                        namespace: /^[^\s>\/:]+:/
                                    }
                                },
                                "special-attr": [],
                                "attr-value": {
                                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                    inside: {
                                        punctuation: [{
                                            pattern: /^=/,
                                            alias: "attr-equals"
                                        }, {
                                            pattern: /^(\s*)["']|["']$/,
                                            lookbehind: !0
                                        }]
                                    }
                                },
                                punctuation: /\/?>/,
                                "attr-name": {
                                    pattern: /[^\s>\/]+/,
                                    inside: {
                                        namespace: /^[^\s>\/:]+:/
                                    }
                                }
                            }
                        },
                        entity: [{
                            pattern: /&[\da-z]{1,8};/i,
                            alias: "named-entity"
                        }, /&#x?[\da-f]{1,8};/i]
                    },
                    Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
                    Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup,
                    Prism.hooks.add("wrap", (function (e) {
                            "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
                        }
                    )),
                    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
                        value: function (e, t) {
                            var o = {};
                            o["language-" + t] = {
                                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                                lookbehind: !0,
                                inside: Prism.languages[t]
                            },
                                o.cdata = /^<!\[CDATA\[|\]\]>$/i;
                            var s = {
                                "included-cdata": {
                                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                                    inside: o
                                }
                            };
                            s["language-" + t] = {
                                pattern: /[\s\S]+/,
                                inside: Prism.languages[t]
                            };
                            var n = {};
                            n[e] = {
                                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function () {
                                        return e
                                    }
                                )), "i"),
                                lookbehind: !0,
                                greedy: !0,
                                inside: s
                            },
                                Prism.languages.insertBefore("markup", "cdata", n)
                        }
                    }),
                    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
                        value: function (e, t) {
                            Prism.languages.markup.tag.inside["special-attr"].push({
                                pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                                lookbehind: !0,
                                inside: {
                                    "attr-name": /^[^\s=]+/,
                                    "attr-value": {
                                        pattern: /=[\s\S]+/,
                                        inside: {
                                            value: {
                                                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                                lookbehind: !0,
                                                alias: [t, "language-" + t],
                                                inside: Prism.languages[t]
                                            },
                                            punctuation: [{
                                                pattern: /^=/,
                                                alias: "attr-equals"
                                            }, /"|'/]
                                        }
                                    }
                                }
                            })
                        }
                    }),
                    Prism.languages.html = Prism.languages.markup,
                    Prism.languages.mathml = Prism.languages.markup,
                    Prism.languages.svg = Prism.languages.markup,
                    Prism.languages.xml = Prism.languages.extend("markup", {}),
                    Prism.languages.ssml = Prism.languages.xml,
                    Prism.languages.atom = Prism.languages.xml,
                    Prism.languages.rss = Prism.languages.xml,
                    Prism.languages.javascript = Prism.languages.extend("clike", {
                        "class-name": [Prism.languages.clike["class-name"], {
                            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                            lookbehind: !0
                        }],
                        keyword: [{
                            pattern: /((?:^|\})\s*)catch\b/,
                            lookbehind: !0
                        }, {
                            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                            lookbehind: !0
                        }],
                        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                        number: {
                            pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                            lookbehind: !0
                        },
                        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
                    }),
                    Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,
                    Prism.languages.insertBefore("javascript", "keyword", {
                        regex: {
                            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                            lookbehind: !0,
                            greedy: !0,
                            inside: {
                                "regex-source": {
                                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                    lookbehind: !0,
                                    alias: "language-regex",
                                    inside: Prism.languages.regex
                                },
                                "regex-delimiter": /^\/|\/$/,
                                "regex-flags": /^[a-z]+$/
                            }
                        },
                        "function-variable": {
                            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                            alias: "function"
                        },
                        parameter: [{
                            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                            lookbehind: !0,
                            inside: Prism.languages.javascript
                        }, {
                            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                            lookbehind: !0,
                            inside: Prism.languages.javascript
                        }, {
                            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                            lookbehind: !0,
                            inside: Prism.languages.javascript
                        }, {
                            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                            lookbehind: !0,
                            inside: Prism.languages.javascript
                        }],
                        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
                    }),
                    Prism.languages.insertBefore("javascript", "string", {
                        hashbang: {
                            pattern: /^#!.*/,
                            greedy: !0,
                            alias: "comment"
                        },
                        "template-string": {
                            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                            greedy: !0,
                            inside: {
                                "template-punctuation": {
                                    pattern: /^`|`$/,
                                    alias: "string"
                                },
                                interpolation: {
                                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                                    lookbehind: !0,
                                    inside: {
                                        "interpolation-punctuation": {
                                            pattern: /^\$\{|\}$/,
                                            alias: "punctuation"
                                        },
                                        rest: Prism.languages.javascript
                                    }
                                },
                                string: /[\s\S]+/
                            }
                        },
                        "string-property": {
                            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                            lookbehind: !0,
                            greedy: !0,
                            alias: "property"
                        }
                    }),
                    Prism.languages.insertBefore("javascript", "operator", {
                        "literal-property": {
                            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                            lookbehind: !0,
                            alias: "property"
                        }
                    }),
                Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"),
                    Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")),
                    Prism.languages.js = Prism.languages.javascript,
                    function (e) {
                        var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                        e.languages.css = {
                            comment: /\/\*[\s\S]*?\*\//,
                            atrule: {
                                pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                                inside: {
                                    rule: /^@[\w-]+/,
                                    "selector-function-argument": {
                                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                        lookbehind: !0,
                                        alias: "selector"
                                    },
                                    keyword: {
                                        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                        lookbehind: !0
                                    }
                                }
                            },
                            url: {
                                pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                                greedy: !0,
                                inside: {
                                    function: /^url/i,
                                    punctuation: /^\(|\)$/,
                                    string: {
                                        pattern: RegExp("^" + t.source + "$"),
                                        alias: "url"
                                    }
                                }
                            },
                            selector: {
                                pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                                lookbehind: !0
                            },
                            string: {
                                pattern: t,
                                greedy: !0
                            },
                            property: {
                                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                                lookbehind: !0
                            },
                            important: /!important\b/i,
                            function: {
                                pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                                lookbehind: !0
                            },
                            punctuation: /[(){};:,]/
                        },
                            e.languages.css.atrule.inside.rest = e.languages.css;
                        var o = e.languages.markup;
                        o && (o.tag.addInlined("style", "css"),
                            o.tag.addAttribute("style", "css"))
                    }(Prism),
                    Ve.manual = !0;

                class We {
                    constructor(e, t) {
                        this.fmp = e,
                            this.$ = {},
                            this.questions = t.questions.length ? t.questions : [t.questions],
                            this.question = null,
                            this.id = t.id,
                            this.canClose = !!t.canClose,
                            this.isComplete = !1,
                            this.isShowingAnswer = !1,
                            this.postAnswer = "function" == typeof t.postAnswer ? t.postAnswer : e => e,
                            this.getAnswer = "function" == typeof t.getAnswer ? t.getAnswer : () => null,
                            this.renderBase(),
                            this.render(),
                            this.bindEvents(),
                            this.configurePlayer()
                    }

                    renderBase() {
                        this.$.form = Ye("form", {
                            className: "modal-quiz"
                        }),
                            this.$.header = Ye("div", {
                                className: "modal-quiz-header"
                            }),
                            this.$.body = Ye("fieldset", {
                                className: "modal-quiz-body"
                            }),
                            this.$.footer = Ye("div", {
                                className: "modal-quiz-footer"
                            }),
                            this.$.form.appendChild(this.$.header),
                            this.$.form.appendChild(this.$.body),
                            this.$.form.appendChild(this.$.footer),
                            this.className = "FMPlayerModalQuiz",
                            this.content = this.$.form
                    }

                    bindEvents() {
                        this._submit = e => this.submit(e),
                            this._input = e => this.input(e),
                            this.$.form.addEventListener("submit", this._submit),
                            this.$.form.addEventListener("input", this._input)
                    }

                    configurePlayer() {
                        this.fmp.video.disablePictureInPicture(!0),
                        this.fmp.video.isFullscreen() && this.fmp.video.exitFullscreen()
                    }

                    onUnmount() {
                        this.fmp.video.disablePictureInPicture(!1),
                            this.$.form.removeEventListener("submit", this._submit),
                            this.$.form.removeEventListener("input", this._input)
                    }

                    async render() {
                        switch (this.question || (this.question = this.questions[0]),
                            this.$.header.innerHTML = "",
                            this.$.header.textContent = this.question.prompt,
                            this.$.body.innerHTML = "",
                            this.$.body.disabled = !1,
                            this.$.body.className = `modal-quiz-body modal-quiz-${this.question.type}`,
                        this.question?.codeblocks && this.question.codeblocks.forEach((e => {
                                const t = Ye("code", {
                                    className: `language-${e.language}`
                                })
                                    , o = Ye("pre", {
                                    className: "modal-quiz-codeblock"
                                }, [t]);
                                t.innerHTML = Ve.highlight(e.code.join("\n").replace(/''/g, '"'), Ve.languages[e.language], e.language),
                                    this.$.body.appendChild(o)
                            }
                        )),
                            this.question.type) {
                            case "single":
                            case "multi":
                                this.renderButtons();
                                break;
                            case "sort":
                                this.renderSort();
                                break;
                            case "match":
                                this.renderMatch()
                        }
                        if (this.question.selected) {
                            await this.showAnswer({
                                forceCorrectOrder: !0
                            });
                            const e = this.questions.indexOf(this.question);
                            this.questions[e + 1] || (this.isComplete = !0)
                        }
                        this.renderFooter()
                    }

                    renderButtons() {
                        const e = this.question.answers.map((e => {
                                let {id: t, value: o} = e;
                                return o = o.replace(/''/g, '"'),
                                    Ye("div", {
                                        className: "modal-quiz-answer modal-quiz-answer-button"
                                    }, [Ye("input", {
                                        type: "checkbox",
                                        id: t,
                                        name: t,
                                        value: t
                                    }), Ye("label", {
                                        for: t
                                    }, [o])])
                            }
                        ));
                        if (this.question.answers.length > 4) {
                            const t = Ye("div", {
                                className: "modal-quiz-answer-columns"
                            }, e);
                            this.$.body.appendChild(t)
                        } else
                            e.forEach((e => {
                                    this.$.body.appendChild(e)
                                }
                            ))
                    }

                    renderSort() {
                        this.$.sortedItems = Ye("div", {
                            className: "modal-quiz-sorted-items"
                        }),
                            this.$.unsortedItems = Ye("div", {
                                className: "modal-quiz-unsorted-items"
                            }),
                            this.$.body.appendChild(this.$.sortedItems),
                            this.$.body.appendChild(this.$.unsortedItems);
                        const e = this.$.unsortedItems;
                        this.question.answers.forEach(((t, o) => {
                                let {id: s, value: n} = t;
                                n = n.replace(/''/g, '"'),
                                    e.appendChild(Ye("div", {
                                        className: "modal-quiz-answer modal-quiz-answer-button modal-quiz-answer-sort",
                                        dataset: {
                                            order: o
                                        }
                                    }, [Ye("input", {
                                        type: "checkbox",
                                        id: s,
                                        name: "sort",
                                        value: s
                                    }), Ye("label", {
                                        for: s
                                    }, [n])]))
                            }
                        ))
                    }

                    renderMatch() {
                        this.$.matchedItems = Ye("div", {
                            className: "modal-quiz-matched-items"
                        }),
                            this.$.unmatchedItems = Ye("div", {
                                className: "modal-quiz-unmatched-items"
                            });
                        const e = "modal-quiz-answer modal-quiz-answer-button modal-quiz-answer-match"
                            , t = this.$.unmatchedItems
                            , o = this.question.answers
                            , s = this.question.matching;
                        o.forEach(((o, n) => {
                                let {id: i, value: a} = o;
                                a = a.replace(/''/g, '"'),
                                    t.appendChild(Ye("div", {
                                        className: `${e} modal-quiz-answer-match-left`
                                    }, [Ye("input", {
                                        type: "checkbox",
                                        id: i,
                                        name: "match",
                                        value: i
                                    }), Ye("label", {
                                        for: i
                                    }, [a])]));
                                const r = s[n]
                                    , l = r.value.replace(/''/g, '"');
                                t.appendChild(Ye("div", {
                                    className: `${e} modal-quiz-answer-match-right`
                                }, [Ye("input", {
                                    type: "checkbox",
                                    id: r.id,
                                    name: "match",
                                    value: r.id
                                }), Ye("label", {
                                    for: r.id
                                }, [l])]))
                            }
                        )),
                            this.$.body.appendChild(this.$.matchedItems),
                            this.$.body.appendChild(this.$.unmatchedItems)
                    }

                    renderFooter() {
                        if (this.$.footer.innerHTML = "",
                            this.$.footer.appendChild(Ye("div", {
                                className: "modal-quiz-message"
                            })),
                            this.$.footer.appendChild(Ye("div", {
                                className: "spacer"
                            })),
                        this.isComplete && !this.canClose)
                            return;
                        const e = this.isComplete ? "Continue Watching" : "Submit";
                        this.$.footer.appendChild(Ye("button", {
                            type: "submit",
                            className: "FMPlayerButton primary" + (this.isComplete ? " FMPlayerCloseModal" : "")
                        }, [e])),
                        !this.isComplete && this.canClose && this.$.footer.appendChild(Ye("a", {
                            href: "#",
                            className: "skip FMPlayerCloseModal"
                        }, ["Skip"]))
                    }

                    input(e) {
                        const t = e.target
                            , o = e.target.parentElement;
                        "single" === this.question.type ? this.$.form.querySelectorAll("input:checked").forEach((e => {
                                e !== t && (e.checked = !1)
                            }
                        )) : o.classList.contains("modal-quiz-answer-sort") ? t.checked ? this.animatedMove(o, this.$.sortedItems) : this.animatedMove(o, this.$.unsortedItems, !0) : o.classList.contains("modal-quiz-answer-match") && this.onInputMatching(t, o)
                    }

                    async onInputMatching(e, t) {
                        const o = t.classList.contains("modal-quiz-answer-match-left") ? "left" : "right";
                        if (t.closest(".modal-quiz-matched-items")) {
                            const e = "left" === o ? t.nextElementSibling : t.previousElementSibling;
                            e.querySelector("input").checked = !1;
                            const s = "left" === o ? t : e
                                , n = "left" === o ? e : t;
                            this.animatedMove([s, n], this.$.unmatchedItems)
                        } else {
                            const s = [...t.parentElement.querySelectorAll("input:checked")].find((t => t !== e));
                            if (!s)
                                return;
                            const n = s.closest(".modal-quiz-answer-match");
                            if (n.className === t.className)
                                return void (e.checked = !1);
                            const i = "left" === o ? t : n
                                , a = "left" === o ? n : t;
                            await this.animatedMove([i, a], this.$.matchedItems);
                            const r = Array.from(this.$.unmatchedItems.querySelectorAll(".modal-quiz-answer-match-left"))
                                ,
                                l = Array.from(this.$.unmatchedItems.querySelectorAll(".modal-quiz-answer-match-right"));
                            r.forEach(((e, t) => {
                                    this.$.unmatchedItems.appendChild(e),
                                        this.$.unmatchedItems.appendChild(l[t])
                                }
                            ))
                        }
                    }

                    async submit(e) {
                        e.preventDefault();
                        const t = this.questions.indexOf(this.question)
                            , o = this.questions[t + 1];
                        if (this.isShowingAnswer)
                            this.isShowingAnswer = !1,
                                this.question = o,
                                this.render();
                        else {
                            const e = this.validateData();
                            if (e.error)
                                return this.showError(e.error);
                            this.$.form.classList.add("submitting"),
                                await this.postAnswer(e),
                                this.$.form.classList.remove("submitting"),
                                await this.showAnswer(),
                            o || (this.isComplete = !0),
                                this.renderFooter()
                        }
                    }

                    validateData() {
                        const e = new FormData(this.$.form);
                        let t = {};
                        for (const o of e.keys())
                            t[o] = e.getAll(o);
                        const o = Object.keys(t);
                        if (!o.length)
                            return {
                                error: "multi" === this.question.type ? "Select one or more answers to continue." : "Select an answer to continue."
                            };
                        if (("sort" === this.question.type || "match" === this.question.type) && [...this.$.body.querySelectorAll("input")].filter((e => !e.checked)).length)
                            return {
                                error: "sort" === this.question.type ? "Sort all options to continue." : "Match all options to continue."
                            };
                        switch (this.question.type) {
                            case "single":
                                t = o[0];
                                break;
                            case "multi":
                                t = o;
                                break;
                            case "sort":
                                t = t.sort;
                                break;
                            case "match":
                                t = t.match.reduce(((e, t, o) => (o % 2 == 0 ? e.push([t]) : e[e.length - 1].push(t),
                                    e)), [])
                        }
                        return t
                    }

                    animatedMove(e, t, o) {
                        return e = e.length ? e : [e],
                            new Promise((s => {
                                    const n = e => {
                                            const t = e.target;
                                            t.removeEventListener("animationend", n),
                                                t.classList.remove("FMPlayerModalQuiz-fadein")
                                        }
                                        , i = a => {
                                            const r = a.target;
                                            r.removeEventListener("animationend", i),
                                                r.classList.remove("FMPlayerModalQuiz-fadeout"),
                                            e.some((e => e.classList.contains("FMPlayerModalQuiz-fadeout"))) || (e.forEach((e => {
                                                    if (e.addEventListener("animationend", n),
                                                        e.classList.add("FMPlayerModalQuiz-fadein"),
                                                    o && void 0 !== e.dataset.order) {
                                                        const o = parseInt(e.dataset.order, 10)
                                                            ,
                                                            s = Array.from(t.children).find((e => parseInt(e.dataset.order, 10) > o));
                                                        if (s)
                                                            return t.insertBefore(e, s)
                                                    }
                                                    t.appendChild(e)
                                                }
                                            )),
                                                s())
                                        }
                                    ;
                                    e.forEach((e => {
                                            e.addEventListener("animationend", i),
                                                e.classList.add("FMPlayerModalQuiz-fadeout")
                                        }
                                    ))
                                }
                            ))
                    }

                    async showAnswer() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const t = await this.getAnswer();
                        this.isShowingAnswer = !0,
                            this.$.body.disabled = !0;
                        const o = [...this.$.body.querySelectorAll("input")];
                        switch (this.question.type) {
                            case "single":
                            case "multi": {
                                const e = Array.isArray(t) ? t : [t];
                                o.forEach((t => {
                                        e.includes(t.id) ? (t.parentElement.classList.add("correct"),
                                            t.parentElement.classList.add("check")) : t.checked && (t.parentElement.classList.add("incorrect"),
                                            t.parentElement.classList.add("ex"))
                                    }
                                ))
                            }
                                break;
                            case "sort":
                                t.forEach(((t, s) => {
                                        const n = o.find((e => e.id === t));
                                        e.forceCorrectOrder ? (n.parentElement.parentElement.previousElementSibling.appendChild(n.parentElement),
                                            n.parentElement.classList.add("correct")) : o.indexOf(n) === s ? n.parentElement.classList.add("correct") : n.parentElement.classList.add("incorrect"),
                                            n.parentElement.classList.add("number"),
                                            n.nextElementSibling.dataset.order = s + 1
                                    }
                                ));
                                break;
                            case "match":
                                t.forEach(((t, s) => {
                                        const n = o.find((e => e.id === t[0]));
                                        let i;
                                        if (t.length > 2) {
                                            const e = n.parentElement.nextElementSibling.firstElementChild
                                                , s = t.slice(1);
                                            i = s.includes(e.id) ? e : o.find((e => s.includes(e.id)))
                                        } else
                                            i = o.find((e => e.id === t[1]));
                                        const a = o.indexOf(n)
                                            , r = o.indexOf(i);
                                        if (n.parentElement.classList.add("number"),
                                            n.nextElementSibling.dataset.order = s + 1,
                                            i.parentElement.classList.add("number"),
                                            i.nextElementSibling.dataset.order = s + 1,
                                            e.forceCorrectOrder) {
                                            const e = n.parentElement.parentElement.previousElementSibling;
                                            e.appendChild(n.parentElement),
                                                e.appendChild(i.parentElement),
                                                n.parentElement.classList.add("correct"),
                                                i.parentElement.classList.add("correct")
                                        } else
                                            a + 1 === r ? (n.parentElement.classList.add("correct"),
                                                i.parentElement.classList.add("correct")) : (n.parentElement.classList.add("incorrect"),
                                                i.parentElement.classList.add("incorrect"));
                                        o.splice(a, 1),
                                            o.splice(o.indexOf(i), 1)
                                    }
                                ))
                        }
                    }

                    showError(e) {
                        const t = this.$.footer.querySelector(".modal-quiz-message");
                        t.classList.add("error-message"),
                            t.textContent = e,
                            this.$.body.classList.add("error"),
                            setTimeout((() => this.$.body.classList.remove("error")), 1e3)
                    }
                }

                const Ge = r.Z.getComponent("Component");

                class Ke extends Ge {
                    constructor(e, t) {
                        super(e),
                            this.addClass("vjs-quiz-range");
                        const o = e.duration()
                            , s = t.quiz.seconds / o * 100;
                        this.el().style.left = s + "%"
                    }
                }

                function et(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const o = []
                        , s = e.video.getChild("ControlBar").getChild("ProgressControl").getChild("SeekBar");

                    function n() {
                        e.lesson().quizzes.forEach((t => {
                                const n = new Ke(e.video, {
                                    quiz: t
                                });
                                o.push(n),
                                    s.addChild(n)
                            }
                        ))
                    }

                    e.lesson.subscribe((async s => {
                            for (; o.length > 0;)
                                o.pop().dispose();
                            "function" == typeof t.getLessonQuizzes && (s.quizzes = await t.getLessonQuizzes({
                                fmp: e,
                                lesson: s
                            })),
                            s?.quizzes?.length && (0 === e.video.readyState() || e._playlistLessonLoading ? (e.video.off("loadedmetadata", n),
                                e.video.one("loadedmetadata", n)) : n())
                        }
                    )),
                        e.lesson.onBeforeChange = () => new Promise((t => {
                                e._quizModal && !e._quizModal.skipWarningShown ? (e._quizModal.controller.showError("Are you sure you want to leave? Navigate again to skip this quiz."),
                                    e._quizModal.skipWarningShown = !0,
                                    t(!1)) : t(!0)
                            }
                        )),
                        e.video.on("timeupdate", p()((function () {
                                if (!e.video.paused() && e.lesson()?.quizzes?.length) {
                                    const o = Math.round(e.video.currentTime())
                                        , s = e.lesson()
                                        , n = s.quizzes.findIndex((e => o >= e.seconds && o <= e.seconds + 3))
                                        , i = s.quizzes[n];
                                    i && (!i.lastOpened || i.lastOpened < Date.now() - 4e3) && (e._quizModal = e.showModal(We, {
                                        hideClose: !0,
                                        hideControls: !0,
                                        canClose: !0,
                                        questions: i.question,
                                        onMount() {
                                            i.lastOpened = Date.now()
                                        },
                                        async postAnswer(o) {
                                            if ("function" == typeof t.postAnswer)
                                                return t.postAnswer({
                                                    fmp: e,
                                                    lesson: s,
                                                    index: n,
                                                    answer: o
                                                })
                                        },
                                        getAnswer: () => i.correct,
                                        onUnmount() {
                                            i.lastOpened = Date.now(),
                                                e._quizModal = null
                                        }
                                    }))
                                }
                            }
                        ), 1e3))
                }

                let tt;
                const ot = new Uint8Array(16);

                function st() {
                    if (!tt && (tt = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
                        !tt))
                        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return tt(ot)
                }

                const nt = [];
                for (let e = 0; e < 256; ++e)
                    nt.push((e + 256).toString(16).slice(1));
                var it = {
                    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
                };

                function at(e, t, o) {
                    if (it.randomUUID && !t && !e)
                        return it.randomUUID();
                    const s = (e = e || {}).random || (e.rng || st)();
                    if (s[6] = 15 & s[6] | 64,
                        s[8] = 63 & s[8] | 128,
                        t) {
                        o = o || 0;
                        for (let e = 0; e < 16; ++e)
                            t[o + e] = s[e];
                        return t
                    }
                    return function (e, t = 0) {
                        return nt[e[t + 0]] + nt[e[t + 1]] + nt[e[t + 2]] + nt[e[t + 3]] + "-" + nt[e[t + 4]] + nt[e[t + 5]] + "-" + nt[e[t + 6]] + nt[e[t + 7]] + "-" + nt[e[t + 8]] + nt[e[t + 9]] + "-" + nt[e[t + 10]] + nt[e[t + 11]] + nt[e[t + 12]] + nt[e[t + 13]] + nt[e[t + 14]] + nt[e[t + 15]]
                    }(s)
                }

                const rt = {
                    api: "",
                    batchSize: 10,
                    errorBackoff: 2e3,
                    skipInitial: !1
                };

                class lt {
                    constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const t = Object.assign({}, rt, e);
                        if (this.api = t.api,
                            this.batchSize = t.batchSize,
                            this.defaultErrorBackoff = t.errorBackoff,
                            this.defaultLevel = t.defaultLevel,
                            this.defaultSource = t.defaultSource,
                            this.defaultType = t.defaultType,
                        !this.defaultSource || !this.defaultType || !this.defaultLevel)
                            throw new Error("FMPlayer: EventsSync missing required options");
                        this.levels = lt.levels,
                            this.types = lt.types,
                            this.sources = lt.sources,
                            this.inProgress = !1,
                            this.abortController = null,
                            this.successHandlers = [],
                            this.errorHandlers = [],
                            this.errorBackoff = this.defaultErrorBackoff,
                            this.run = a()((() => this.runImmediately()), 1e3, {
                                maxWait: 5e3
                            }),
                        t.skipInitial || this.run()
                    }

                    registerSuccessHandler(e) {
                        this.successHandlers.push(e)
                    }

                    registerErrorHandler(e) {
                        this.errorHandlers.push(e)
                    }

                    add(e) {
                        if (!e.command)
                            return;
                        e.source = e.source || this.defaultSource,
                            e.eventType = e.eventType || this.defaultType,
                            e.level = e.level || this.defaultLevel,
                            e.timestamp = Date.now(),
                            e.nonce = e.nonce || at();
                        const t = JSON.stringify(e);
                        if (this.inProgress) {
                            const e = le.get("fmq2", "");
                            le.set("fmq2", e + (e ? "," : "") + t)
                        } else {
                            const e = le.get("fmq1", "");
                            le.set("fmq1", e + (e ? "," : "") + t)
                        }
                        return this.run(),
                            e.nonce
                    }

                    remove() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.inProgress && (this.abortController.abort(),
                            this.inProgress = !1),
                            this.merge();
                        const o = Object.keys(e)
                            , s = Object.keys(t);
                        if (!o.length && !s.length)
                            return;
                        let n = ct(le.get("fmq1", ""));
                        n.length && (n = n.filter((n => {
                                let i = 0
                                    , a = 0;
                                return o.forEach((o => {
                                        n[o] === e[o] && (i++,
                                            s.forEach((e => {
                                                    n.data[e] === t[e] && a++
                                                }
                                            )))
                                    }
                                )),
                                i !== o.length || a !== s.length
                            }
                        )),
                            n = JSON.stringify(n),
                            le.set("fmq1", n.slice(1, -1)),
                        this.abortController?.signal.aborted && this.run())
                    }

                    merge() {
                        const e = le.get("fmq2", "");
                        if (e) {
                            const t = le.get("fmq1", "");
                            le.set("fmq1", t + (t ? "," : "") + e),
                                le.set("fmq2", "")
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
                        const e = le.get("fmq1", "");
                        if (e) {
                            this.inProgress = !0;
                            let t = !1
                                , o = ct(e);
                            if (!o.length)
                                return;
                            if (o.length > this.batchSize) {
                                t = !0;
                                const e = JSON.stringify(o.slice(this.batchSize));
                                le.set("fmq2", e.slice(1, -1)),
                                    o = o.slice(0, this.batchSize);
                                const s = JSON.stringify(o);
                                le.set("fmq1", s.slice(1, -1))
                            }
                            if (o = o.filter((e => !!e)),
                                !o.length)
                                return;
                            this.abortController = new AbortController,
                                _e(this.api, {
                                    method: "POST",
                                    credentials: "include",
                                    signal: this.abortController.signal,
                                    body: o
                                }).then((e => {
                                        le.set("fmq1", ""),
                                            this.inProgress = !1,
                                            this.errorBackoff = this.defaultErrorBackoff,
                                        t && this.run(),
                                            this.successHandlers.forEach((t => t(o, e)))
                                    }
                                )).catch((e => {
                                        if (this.abortController.signal.aborted)
                                            return void (this.inProgress = !1);
                                        const t = ct(le.get("fmq1", ""));
                                        this.errorBackoff >= 2 * this.defaultErrorBackoff * 2 && 500 === e.status && (t.shift(),
                                            le.set("fmq1", JSON.stringify(t).slice(1, -1))),
                                            setTimeout(this.run, this.errorBackoff),
                                            this.errorBackoff = 2 * this.errorBackoff,
                                            this.inProgress = !1,
                                            this.errorHandlers.forEach((o => o(t, e)))
                                    }
                                ))
                        }
                    }
                }

                function ct(e) {
                    try {
                        return JSON.parse("[" + e + "]")
                    } catch (e) {
                        return le.set("fmq1", ""),
                            []
                    }
                }

                function dt(e) {
                    e.addProp("bookmarked"),
                        e.bookmarked.subscribe((t => {
                                const o = t ? "bookmark" : "unbookmark";
                                e.sync.add({
                                    command: o,
                                    level: e.sync.levels.USER,
                                    eventType: e.sync.types.COURSE,
                                    data: {
                                        courseSlug: e.playlist().slug
                                    }
                                })
                            }
                        ))
                }

                function pt(e) {
                    e.addProp("notes", {}),
                        e.notes.subscribe(((t, o) => {
                                if (Array.isArray(t)) {
                                    t.sort(((e, t) => e.lessonSeconds - t.lessonSeconds));
                                    const e = {};
                                    t.forEach((t => {
                                            e[t.lessonHash] = e[t.lessonHash] || [],
                                                e[t.lessonHash].push(t)
                                        }
                                    )),
                                        t = e
                                }
                                e.notes.value = v()(o, t, ut)
                            }
                        )),
                        e.playlist.subscribe((t => {
                                t && t.slug && function (e) {
                                    const t = le.get("fmq1", "")
                                        , o = le.get("fmq2", "");
                                    let s = t;
                                    o && (s && (s += ","),
                                        s += o);
                                    try {
                                        return JSON.parse("[" + s + "]").filter((t => t.command && "save-note" === t.command && t.data && t.data.courseSlug === e)).map((e => {
                                                const t = e.data;
                                                return t.id = "_" + e.nonce,
                                                    t.pendingSave = !0,
                                                    t.body = t.text,
                                                    t
                                            }
                                        ))
                                    } catch (e) {
                                        return []
                                    }
                                }(t.slug).forEach((t => {
                                        e.notes()[t.lessonHash] = e.notes()[t.lessonHash] || [],
                                            e.notes()[t.lessonHash].push(t),
                                        e.notes()[t.lessonHash].length > 1 && e.notes()[t.lessonHash].sort(((e, t) => e.lessonSeconds - t.lessonSeconds))
                                    }
                                ))
                            }
                        ), !0),
                        e.notes.add = function (t) {
                            const o = e.sync.add({
                                level: e.sync.levels.USER,
                                command: "save-note",
                                data: {
                                    courseSlug: e.playlist().slug,
                                    lessonHash: t.lessonHash,
                                    lessonSeconds: t.lessonSeconds,
                                    text: t.body,
                                    vsId: e.vsId()
                                }
                            });
                            t.id = "_" + o,
                                t.pendingSave = !0,
                                e.notes()[t.lessonHash] = e.notes()[t.lessonHash] || [],
                                e.notes()[t.lessonHash].push(t),
                                e.notes()[t.lessonHash].sort(((e, t) => e.lessonSeconds - t.lessonSeconds))
                        }
                        ,
                        e.notes.edit = function (t) {
                            const o = e.notes()[t.lessonHash];
                            "_" !== t.id[0] || o.map((e => e.id)).includes(t.id.slice(1)) ? ("_" === t.id[0] && (t.id = t.id.slice(1)),
                                e.sync.add({
                                    level: e.sync.levels.USER,
                                    command: "save-note",
                                    data: {
                                        courseSlug: e.playlist().slug,
                                        lessonHash: t.lessonHash,
                                        lessonSeconds: t.lessonSeconds,
                                        noteId: t.id,
                                        text: t.body,
                                        vsId: e.vsId()
                                    }
                                })) : (e.notes.remove(t),
                                e.notes.add(t));
                            const s = o.find((e => e.id === t.id));
                            s.body = t.body,
                                s.pendingSave = !0
                        }
                        ,
                        e.notes.remove = function (t) {
                            "_" === t.id[0] ? e.sync.remove({
                                command: "save-note",
                                nonce: t.id.slice(1)
                            }) : e.sync.add({
                                level: e.sync.levels.USER,
                                command: "delete-note",
                                data: {
                                    courseSlug: e.playlist().slug,
                                    lessonHash: t.lessonHash,
                                    noteId: t.id,
                                    vsId: e.vsId()
                                }
                            });
                            const o = e.notes()[t.lessonHash]
                                , s = o.indexOf(t);
                            s > -1 && o.splice(s, 1)
                        }
                        ,
                        e.sync.registerSuccessHandler((t => function (e, t) {
                            const o = e.playlist().slug;
                            if (!o)
                                return;
                            let s;
                            t.forEach((t => {
                                    if (t.data.courseSlug === o && "save-note" === t.command) {
                                        const o = e.notes()[t.data.lessonHash] || []
                                            , n = t.data && t.data.noteId || t.nonce
                                            , i = o.find((e => ("_" === e.id[0] ? e.id.slice(1) : e.id) === n));
                                        i && (s = !0,
                                            i.id = "_" === i.id[0] ? t.nonce : i.id,
                                            i.pendingSave = !1)
                                    }
                                }
                            )),
                            s && c().redraw()
                        }(e, t)))
                }

                function ut(e, t) {
                    if (Array.isArray(e))
                        return e.concat(t)
                }

                function vt(e) {
                    e.addProp("progress", {}),
                        e.progress.playlistCompleted = function () {
                            const t = e.playlist()
                                , o = e.progress()
                                , s = t.lessonHashes.length;
                            let n = 0;
                            for (const e of Object.keys(o)) {
                                const t = o[e];
                                t && ("completed" === t._status || t.lastPercent >= .8) && n++
                            }
                            return n / s
                        }
                        ,
                        e.progress.subscribe(o),
                        e.playlist.subscribe(o),
                        e.progress.subscribe(s),
                        e.playlist.subscribe(s),
                        e.lesson.subscribe(((t, o) => {
                                const s = e.progress()
                                    , i = s[t.hash]
                                    , a = s[o.hash];
                                i && "function" == typeof i.status && "completed" !== i.status() && i.status("started"),
                                a && n(a)
                            }
                        )),
                        e.video.on("pause", (() => {
                                const t = e.lesson()
                                    , o = e.progress();
                                t.hash && o[t.hash] && n(o[t.hash])
                            }
                        ));
                    const t = {
                        _start: null,
                        _end: null,
                        _playbackRate: null,
                        _lessonHash: null,
                        start() {
                            null === t._start && e.lesson().hash && (t._lessonHash = e.lesson().hash,
                                t._start = Math.floor(e.video.currentTime()),
                                t._end = t._start,
                                t._playbackRate = e.video.playbackRate())
                        },
                        end() {
                            if (null === t._start || !t._lessonHash || !e.vsId())
                                return;
                            const o = t._end - t._start;
                            o > 1 && e.sync.add({
                                command: "progress",
                                data: {
                                    lessonHash: t._lessonHash,
                                    percentViewed: o / e.video.duration(),
                                    rangeViewed: [t._start, t._end],
                                    rate: t._playbackRate,
                                    vsId: e.vsId()
                                }
                            }),
                                t._start = null
                        },
                        reset() {
                            t.end(),
                                t.start()
                        }
                    };

                    function o() {
                        const t = e.progress()
                            , s = e.playlist();
                        if (Object.keys(t).length && s.lessonHashes && s.lessonHashes.length) {
                            e.progress.unsubscribe(o),
                                e.playlist.unsubscribe(o);
                            const s = t[e.lesson().hash];
                            s && s.lastPercent <= .95 && (e._resumePercent = s.lastPercent)
                        }
                    }

                    function s() {
                        const t = e.progress()
                            , o = e.playlist();
                        if (o.lessonHashes && o.lessonHashes.length) {
                            const s = {};
                            o.lessonHashes.forEach((o => {
                                    s[o] = {
                                        lessonHash: o,
                                        lastPercent: 0,
                                        _status: "",
                                        status(t, o) {
                                            if (void 0 === t || t === this._status)
                                                return this._status;
                                            "completed" !== t && "completed" !== this._status || function (t, o) {
                                                if (!e.vsId())
                                                    return;
                                                const s = "completed" === t._status ? "undocomplete" : "complete";
                                                e.sync.add({
                                                    level: o ? e.sync.levels.USER : e.sync.levels.SYSTEM,
                                                    command: s,
                                                    data: {
                                                        lessonHash: t.lessonHash,
                                                        vsId: e.vsId()
                                                    }
                                                })
                                            }(this, o),
                                                this._status = t
                                        }
                                    },
                                    t[o] && (void 0 !== t[o].userCompleted && (s[o]._status = t[o].userCompleted ? "completed" : "started"),
                                    t[o].lastPercent && (s[o].lastPercent = t[o].lastPercent))
                                }
                            )),
                                e.progress.value = s,
                                c().redraw()
                        }
                    }

                    function n(t) {
                        const o = e.video.currentTime() / e.video.duration();
                        Number.isNaN(o) || (o > .95 ? t.status("completed") : "completed" !== t.status() && t.status("started"),
                            t.lastPercent = parseFloat(o.toFixed(4)),
                            c().redraw())
                    }

                    e.video.on("timeupdate", (() => {
                            e.video.paused() || (t._end = Math.floor(e.video.currentTime()))
                        }
                    )),
                        e.lesson.subscribe(((e, o) => {
                                o && o.hash === t._lessonHash && t.end()
                            }
                        )),
                        e.video.on("play", t.start),
                        e.video.on("pause", t.end),
                        e.video.on("abort", t.end),
                        e.playbackRate.subscribe((() => {
                                e._userInitiatedRatechange && t.reset()
                            }
                        )),
                        window.addEventListener("beforeunload", t.end)
                }

                function ht(e) {
                    e.sync = new lt({
                        api: e.assetRoot() + "events/batch",
                        defaultLevel: lt.levels.SYSTEM,
                        defaultSource: lt.sources.PLAYER,
                        defaultType: lt.types.LESSON
                    }),
                        e.sync.registerErrorHandler(((t, o) => {
                                const {status: s, parsedBody: n} = o;
                                if (401 === s || 403 === s) {
                                    sessionStorage.fmnotify = "Please login to access our course content.";
                                    const e = "/login/?return=" + encodeURIComponent(window.location.pathname);
                                    return void (window.location.href = e)
                                }
                                let i = "";
                                if (t.some((e => e.command.includes("-note"))) && (i += "note"),
                                t.some((e => e.command.includes("bookmark"))) && (i && (i += " and "),
                                    i += "bookmark"),
                                i && e.messages.add({
                                    id: "syncError",
                                    type: "warning",
                                    message: `We couldn't save your ${i} changes at this time. They'll be stored locally until we can save them.`
                                }),
                                e.sync.errorBackoff === 2 * e.sync.defaultErrorBackoff * 2) {
                                    let t = "We're having trouble contacting our servers. Check your network and try again?";
                                    const o = s || 0;
                                    n?.message && (t = n?.message.charAt(0).toUpperCase() + n?.message.slice(1).trim() + "."),
                                        e.messages.add({
                                            message: t,
                                            id: "apiError",
                                            type: "warning"
                                        }),
                                        e.trackError(`session-api ${o} - ${t}`)
                                }
                            }
                        )),
                        e.assetRoot.subscribe((t => {
                                e.sync.api = t + "events/batch"
                            }
                        )),
                        e.addProp("vsId"),
                        e.addPlugin(dt).addPlugin(pt).addPlugin(vt),
                        e.initSession = function (t) {
                            return e.request({
                                url: e.assetRoot() + "session/" + t,
                                credentials: "include"
                            }).then((t => {
                                    t && (t.notes && e.notes(t.notes),
                                    t.progress && e.progress(t.progress),
                                    t.bookmarked && (e.bookmarked.value = t.bookmarked),
                                    t.id && (e.vsId.value = t.id))
                                }
                            ))
                        }
                }

                lt.levels = {
                    SYSTEM: 1,
                    USER: 2
                },
                    lt.sources = {
                        SITE: 1,
                        PLAYER: 2
                    },
                    lt.types = {
                        COURSE: 1,
                        LESSON: 2
                    },
                    lt.store = le,
                    lt.parse = ct;
                const mt = 4;

                function ft(e) {
                    const t = e.searchParams().has("x", "1") || le.get("fmp.video.showTranscript", !1);

                    function o() {
                        e.showTranscript() && e.captionsSrc() && !e.transcript().length && fetch(e.captionsSrc()).then((e => e.text())).then((t => {
                                e.transcript(function (e) {
                                    const t = e.split(/\n{2}\d+\n/)
                                        , o = [];
                                    let s, n;
                                    for (const e of t) {
                                        const t = e.split("\n")
                                            , [i, ...a] = t;
                                        if (!i.includes("--\x3e"))
                                            continue;
                                        const r = Math.floor(gt(i.trim()))
                                            , l = a.join("\n").trim();
                                        let c = !1;
                                        s && (c = r - s >= mt && n.match(/[.!?[\]]/)),
                                            s = r,
                                            n = l.slice(-1),
                                            o.push({
                                                start: r,
                                                newLine: c,
                                                cue: l
                                            })
                                    }
                                    return o
                                }(t))
                            }
                        ))
                    }

                    e.addProp("showTranscript", t),
                        e.addProp("transcript", []),
                        e.addProp("transcriptIndex", -1),
                        e.lesson.subscribe((() => {
                                e.transcript([]),
                                    e.transcriptIndex(-1)
                            }
                        )),
                        e.captionsSrc.subscribe(o),
                        e.showTranscript.subscribe((e => {
                                le.set("fmp.video.showTranscript", e),
                                    o()
                            }
                        )),
                        e.video.on("timeupdate", p()((function () {
                                if (!e.transcript().length)
                                    return;
                                const t = e.video.currentTime()
                                    , o = e.transcript().findIndex((e => t <= e.start)) - 1;
                                e.transcriptIndex(o)
                            }
                        ), 500))
                }

                function gt(e) {
                    const t = e.split(":");
                    return 3600 * parseInt(t[0]) + 60 * parseInt(t[1]) + parseFloat(t[2])
                }

                f('.vjs-message .vjs-message-content ul{list-style:none;list-style-image:none;padding-left:0}@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.tooltip:after,.tooltip:before,[data-tooltip]:after,[data-tooltip]:before{opacity:0;pointer-events:none;position:absolute;transform:translateZ(0);transition:opacity .2s ease-in-out,visibility .2s ease-in-out,transform .2s cubic-bezier(.71,1.7,.77,1.24);visibility:hidden;z-index:9999}.tooltip:focus:after,.tooltip:focus:before,.tooltip:hover:after,.tooltip:hover:before,[data-tooltip]:focus:after,[data-tooltip]:focus:before,[data-tooltip]:hover:after,[data-tooltip]:hover:before{opacity:1;visibility:visible}.tooltip:before,[data-tooltip]:before{background:transparent;border:6px solid transparent;content:"";z-index:1001}.tooltip:after,[data-tooltip]:after{background-color:#fff;background-color:rgba(255,255,255,.9);border-radius:4px;color:#000;content:attr(data-tooltip);font-size:14px;line-height:1.2;padding:8px 12px;width:auto;z-index:1000}.tooltip-top:after,.tooltip-top:before,.tooltip:after,.tooltip:before,[data-tooltip]:after,[data-tooltip]:before{bottom:100%;left:50%}.tooltip-top:before,.tooltip:before,[data-tooltip]:before{border-top-color:#fff;border-top-color:rgba(255,255,255,.9);margin-bottom:-12px;margin-left:-6px}.tooltip-top:after,.tooltip:after,[data-tooltip]:after{margin-left:-80px}.tooltip-top:focus:after,.tooltip-top:focus:before,.tooltip-top:hover:after,.tooltip-top:hover:before,.tooltip:focus:after,.tooltip:focus:before,.tooltip:hover:after,.tooltip:hover:before,[data-tooltip]:focus:after,[data-tooltip]:focus:before,[data-tooltip]:hover:after,[data-tooltip]:hover:before{transform:translateY(-12px)}.tooltip-left:after,.tooltip-left:before{bottom:50%;left:auto;right:100%}.tooltip-left:before{border-left-color:#fff;border-top-color:transparent;margin-bottom:0;margin-left:0;margin-right:-12px}.tooltip-left:focus:after,.tooltip-left:focus:before,.tooltip-left:hover:after,.tooltip-left:hover:before{transform:translateX(-12px)}.tooltip-bottom:after,.tooltip-bottom:before{bottom:auto;left:50%;top:100%}.tooltip-bottom:before{border-bottom-color:#fff;border-bottom-color:rgba(255,255,255,.9);border-top-color:transparent;margin-bottom:0;margin-top:-12px}.tooltip-bottom:focus:after,.tooltip-bottom:focus:before,.tooltip-bottom:hover:after,.tooltip-bottom:hover:before{transform:translateY(12px)}.tooltip-right:after,.tooltip-right:before{bottom:50%;left:100%}.tooltip-right:before{border-right-color:#000;border-right-color:rgba(51,51,51,.9);border-top-color:transparent;margin-bottom:0;margin-left:-12px}.tooltip-right:focus:after,.tooltip-right:focus:before,.tooltip-right:hover:after,.tooltip-right:hover:before{transform:translateX(12px)}.tooltip-left:before,.tooltip-right:before{top:3px}.tooltip-left:after,.tooltip-right:after{margin-bottom:-16px;margin-left:0}.vjs-annotation-range{background:#4bc9da;bottom:0;position:absolute;top:0}.vjs-message .vjs-message-content pre{background:#3e3e3e;border-radius:4px;display:inline-block;margin:0 4px;padding:0 8px;white-space:pre-wrap}.vjs-message .vjs-message-content pre:first-child{margin-left:0}.vjs-message .vjs-message-content li{margin:10px 0}.vjs-message .vjs-message-content .clipboard-target{cursor:pointer;display:inline-block;margin-left:8px;position:relative;white-space:pre}.vjs-message .vjs-message-content .clipboard-target svg{fill:#8a8a8a;height:14px;position:relative;top:-1px;vertical-align:middle}.vjs-message .vjs-message-content .clipboard-target:hover svg{fill:#aaa}.vjs-message .vjs-message-content .clipboard-target:active svg{fill:#fff}');
                let yt = {
                    async: !1,
                    breaks: !1,
                    extensions: null,
                    gfm: !0,
                    hooks: null,
                    pedantic: !1,
                    renderer: null,
                    silent: !1,
                    tokenizer: null,
                    walkTokens: null
                };

                function bt(e) {
                    yt = e
                }

                const jt = /[&<>"']/
                    , kt = new RegExp(jt.source, "g")
                    , xt = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/
                    , wt = new RegExp(xt.source, "g")
                    , Mt = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                }
                    , Pt = e => Mt[e];

                function Ft(e, t) {
                    if (t) {
                        if (jt.test(e))
                            return e.replace(kt, Pt)
                    } else if (xt.test(e))
                        return e.replace(wt, Pt);
                    return e
                }

                const At = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
                    , St = /(^|[^\[])\^/g;

                function zt(e, t) {
                    e = "string" == typeof e ? e : e.source,
                        t = t || "";
                    const o = {
                        replace: (t, s) => (s = (s = "object" == typeof s && "source" in s ? s.source : s).replace(St, "$1"),
                            e = e.replace(t, s),
                            o),
                        getRegex: () => new RegExp(e, t)
                    };
                    return o
                }

                function Lt(e) {
                    try {
                        e = encodeURI(e).replace(/%25/g, "%")
                    } catch (e) {
                        return null
                    }
                    return e
                }

                const Et = {
                    exec: () => null
                };

                function Ct(e, t) {
                    const o = e.replace(/\|/g, ((e, t, o) => {
                            let s = !1
                                , n = t;
                            for (; --n >= 0 && "\\" === o[n];)
                                s = !s;
                            return s ? "|" : " |"
                        }
                    )).split(/ \|/);
                    let s = 0;
                    if (o[0].trim() || o.shift(),
                    o.length > 0 && !o[o.length - 1].trim() && o.pop(),
                        t)
                        if (o.length > t)
                            o.splice(t);
                        else
                            for (; o.length < t;)
                                o.push("");
                    for (; s < o.length; s++)
                        o[s] = o[s].trim().replace(/\\\|/g, "|");
                    return o
                }

                function Tt(e, t, o) {
                    const s = e.length;
                    if (0 === s)
                        return "";
                    let n = 0;
                    for (; n < s;) {
                        const i = e.charAt(s - n - 1);
                        if (i !== t || o) {
                            if (i === t || !o)
                                break;
                            n++
                        } else
                            n++
                    }
                    return e.slice(0, s - n)
                }

                function Rt(e, t, o, s) {
                    const n = t.href
                        , i = t.title ? Ft(t.title) : null
                        , a = e[1].replace(/\\([\[\]])/g, "$1");
                    if ("!" !== e[0].charAt(0)) {
                        s.state.inLink = !0;
                        const e = {
                            type: "link",
                            raw: o,
                            href: n,
                            title: i,
                            text: a,
                            tokens: s.inlineTokens(a)
                        };
                        return s.state.inLink = !1,
                            e
                    }
                    return {
                        type: "image",
                        raw: o,
                        href: n,
                        title: i,
                        text: Ft(a)
                    }
                }

                class Nt {
                    options;
                    rules;
                    lexer;

                    constructor(e) {
                        this.options = e || yt
                    }

                    space(e) {
                        const t = this.rules.block.newline.exec(e);
                        if (t && t[0].length > 0)
                            return {
                                type: "space",
                                raw: t[0]
                            }
                    }

                    code(e) {
                        const t = this.rules.block.code.exec(e);
                        if (t) {
                            const e = t[0].replace(/^ {1,4}/gm, "");
                            return {
                                type: "code",
                                raw: t[0],
                                codeBlockStyle: "indented",
                                text: this.options.pedantic ? e : Tt(e, "\n")
                            }
                        }
                    }

                    fences(e) {
                        const t = this.rules.block.fences.exec(e);
                        if (t) {
                            const e = t[0]
                                , o = function (e, t) {
                                const o = e.match(/^(\s+)(?:```)/);
                                if (null === o)
                                    return t;
                                const s = o[1];
                                return t.split("\n").map((e => {
                                        const t = e.match(/^\s+/);
                                        if (null === t)
                                            return e;
                                        const [o] = t;
                                        return o.length >= s.length ? e.slice(s.length) : e
                                    }
                                )).join("\n")
                            }(e, t[3] || "");
                            return {
                                type: "code",
                                raw: e,
                                lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
                                text: o
                            }
                        }
                    }

                    heading(e) {
                        const t = this.rules.block.heading.exec(e);
                        if (t) {
                            let e = t[2].trim();
                            if (/#$/.test(e)) {
                                const t = Tt(e, "#");
                                this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim())
                            }
                            return {
                                type: "heading",
                                raw: t[0],
                                depth: t[1].length,
                                text: e,
                                tokens: this.lexer.inline(e)
                            }
                        }
                    }

                    hr(e) {
                        const t = this.rules.block.hr.exec(e);
                        if (t)
                            return {
                                type: "hr",
                                raw: t[0]
                            }
                    }

                    blockquote(e) {
                        const t = this.rules.block.blockquote.exec(e);
                        if (t) {
                            const e = t[0].replace(/^ *>[ \t]?/gm, "")
                                , o = this.lexer.state.top;
                            this.lexer.state.top = !0;
                            const s = this.lexer.blockTokens(e);
                            return this.lexer.state.top = o,
                                {
                                    type: "blockquote",
                                    raw: t[0],
                                    tokens: s,
                                    text: e
                                }
                        }
                    }

                    list(e) {
                        let t = this.rules.block.list.exec(e);
                        if (t) {
                            let o = t[1].trim();
                            const s = o.length > 1
                                , n = {
                                type: "list",
                                raw: "",
                                ordered: s,
                                start: s ? +o.slice(0, -1) : "",
                                loose: !1,
                                items: []
                            };
                            o = s ? `\\d{1,9}\\${o.slice(-1)}` : `\\${o}`,
                            this.options.pedantic && (o = s ? o : "[*+-]");
                            const i = new RegExp(`^( {0,3}${o})((?:[\t ][^\\n]*)?(?:\\n|$))`);
                            let a = ""
                                , r = ""
                                , l = !1;
                            for (; e;) {
                                let o = !1;
                                if (!(t = i.exec(e)))
                                    break;
                                if (this.rules.block.hr.test(e))
                                    break;
                                a = t[0],
                                    e = e.substring(a.length);
                                let s = t[2].split("\n", 1)[0].replace(/^\t+/, (e => " ".repeat(3 * e.length)))
                                    , c = e.split("\n", 1)[0]
                                    , d = 0;
                                this.options.pedantic ? (d = 2,
                                    r = s.trimStart()) : (d = t[2].search(/[^ ]/),
                                    d = d > 4 ? 1 : d,
                                    r = s.slice(d),
                                    d += t[1].length);
                                let p = !1;
                                if (!s && /^ *$/.test(c) && (a += c + "\n",
                                    e = e.substring(c.length + 1),
                                    o = !0),
                                    !o) {
                                    const t = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`)
                                        ,
                                        o = new RegExp(`^ {0,${Math.min(3, d - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)
                                        , n = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`)
                                        , i = new RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
                                    for (; e;) {
                                        const l = e.split("\n", 1)[0];
                                        if (c = l,
                                        this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                                            n.test(c))
                                            break;
                                        if (i.test(c))
                                            break;
                                        if (t.test(c))
                                            break;
                                        if (o.test(e))
                                            break;
                                        if (c.search(/[^ ]/) >= d || !c.trim())
                                            r += "\n" + c.slice(d);
                                        else {
                                            if (p)
                                                break;
                                            if (s.search(/[^ ]/) >= 4)
                                                break;
                                            if (n.test(s))
                                                break;
                                            if (i.test(s))
                                                break;
                                            if (o.test(s))
                                                break;
                                            r += "\n" + c
                                        }
                                        p || c.trim() || (p = !0),
                                            a += l + "\n",
                                            e = e.substring(l.length + 1),
                                            s = c.slice(d)
                                    }
                                }
                                n.loose || (l ? n.loose = !0 : /\n *\n *$/.test(a) && (l = !0));
                                let u, v = null;
                                this.options.gfm && (v = /^\[[ xX]\] /.exec(r),
                                v && (u = "[ ] " !== v[0],
                                    r = r.replace(/^\[[ xX]\] +/, ""))),
                                    n.items.push({
                                        type: "list_item",
                                        raw: a,
                                        task: !!v,
                                        checked: u,
                                        loose: !1,
                                        text: r,
                                        tokens: []
                                    }),
                                    n.raw += a
                            }
                            n.items[n.items.length - 1].raw = a.trimEnd(),
                                n.items[n.items.length - 1].text = r.trimEnd(),
                                n.raw = n.raw.trimEnd();
                            for (let e = 0; e < n.items.length; e++)
                                if (this.lexer.state.top = !1,
                                    n.items[e].tokens = this.lexer.blockTokens(n.items[e].text, []),
                                    !n.loose) {
                                    const t = n.items[e].tokens.filter((e => "space" === e.type))
                                        , o = t.length > 0 && t.some((e => /\n.*\n/.test(e.raw)));
                                    n.loose = o
                                }
                            if (n.loose)
                                for (let e = 0; e < n.items.length; e++)
                                    n.items[e].loose = !0;
                            return n
                        }
                    }

                    html(e) {
                        const t = this.rules.block.html.exec(e);
                        if (t)
                            return {
                                type: "html",
                                block: !0,
                                raw: t[0],
                                pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                                text: t[0]
                            }
                    }

                    def(e) {
                        const t = this.rules.block.def.exec(e);
                        if (t) {
                            const e = t[1].toLowerCase().replace(/\s+/g, " ")
                                ,
                                o = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : ""
                                ,
                                s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
                            return {
                                type: "def",
                                tag: e,
                                raw: t[0],
                                href: o,
                                title: s
                            }
                        }
                    }

                    table(e) {
                        const t = this.rules.block.table.exec(e);
                        if (t) {
                            const e = {
                                type: "table",
                                raw: t[0],
                                header: Ct(t[1]).map((e => ({
                                    text: e,
                                    tokens: []
                                }))),
                                align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                            };
                            if (e.header.length === e.align.length) {
                                let t, o, s, n, i = e.align.length;
                                for (t = 0; t < i; t++) {
                                    const o = e.align[t];
                                    o && (/^ *-+: *$/.test(o) ? e.align[t] = "right" : /^ *:-+: *$/.test(o) ? e.align[t] = "center" : /^ *:-+ *$/.test(o) ? e.align[t] = "left" : e.align[t] = null)
                                }
                                for (i = e.rows.length,
                                         t = 0; t < i; t++)
                                    e.rows[t] = Ct(e.rows[t], e.header.length).map((e => ({
                                        text: e,
                                        tokens: []
                                    })));
                                for (i = e.header.length,
                                         o = 0; o < i; o++)
                                    e.header[o].tokens = this.lexer.inline(e.header[o].text);
                                for (i = e.rows.length,
                                         o = 0; o < i; o++)
                                    for (n = e.rows[o],
                                             s = 0; s < n.length; s++)
                                        n[s].tokens = this.lexer.inline(n[s].text);
                                return e
                            }
                        }
                    }

                    lheading(e) {
                        const t = this.rules.block.lheading.exec(e);
                        if (t)
                            return {
                                type: "heading",
                                raw: t[0],
                                depth: "=" === t[2].charAt(0) ? 1 : 2,
                                text: t[1],
                                tokens: this.lexer.inline(t[1])
                            }
                    }

                    paragraph(e) {
                        const t = this.rules.block.paragraph.exec(e);
                        if (t) {
                            const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                            return {
                                type: "paragraph",
                                raw: t[0],
                                text: e,
                                tokens: this.lexer.inline(e)
                            }
                        }
                    }

                    text(e) {
                        const t = this.rules.block.text.exec(e);
                        if (t)
                            return {
                                type: "text",
                                raw: t[0],
                                text: t[0],
                                tokens: this.lexer.inline(t[0])
                            }
                    }

                    escape(e) {
                        const t = this.rules.inline.escape.exec(e);
                        if (t)
                            return {
                                type: "escape",
                                raw: t[0],
                                text: Ft(t[1])
                            }
                    }

                    tag(e) {
                        const t = this.rules.inline.tag.exec(e);
                        if (t)
                            return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
                                !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1),
                                {
                                    type: "html",
                                    raw: t[0],
                                    inLink: this.lexer.state.inLink,
                                    inRawBlock: this.lexer.state.inRawBlock,
                                    block: !1,
                                    text: t[0]
                                }
                    }

                    link(e) {
                        const t = this.rules.inline.link.exec(e);
                        if (t) {
                            const e = t[2].trim();
                            if (!this.options.pedantic && /^</.test(e)) {
                                if (!/>$/.test(e))
                                    return;
                                const t = Tt(e.slice(0, -1), "\\");
                                if ((e.length - t.length) % 2 == 0)
                                    return
                            } else {
                                const e = function (e, t) {
                                    if (-1 === e.indexOf(t[1]))
                                        return -1;
                                    let o = 0;
                                    for (let s = 0; s < e.length; s++)
                                        if ("\\" === e[s])
                                            s++;
                                        else if (e[s] === t[0])
                                            o++;
                                        else if (e[s] === t[1] && (o--,
                                        o < 0))
                                            return s;
                                    return -1
                                }(t[2], "()");
                                if (e > -1) {
                                    const o = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                                    t[2] = t[2].substring(0, e),
                                        t[0] = t[0].substring(0, o).trim(),
                                        t[3] = ""
                                }
                            }
                            let o = t[2]
                                , s = "";
                            if (this.options.pedantic) {
                                const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
                                e && (o = e[1],
                                    s = e[3])
                            } else
                                s = t[3] ? t[3].slice(1, -1) : "";
                            return o = o.trim(),
                            /^</.test(o) && (o = this.options.pedantic && !/>$/.test(e) ? o.slice(1) : o.slice(1, -1)),
                                Rt(t, {
                                    href: o ? o.replace(this.rules.inline._escapes, "$1") : o,
                                    title: s ? s.replace(this.rules.inline._escapes, "$1") : s
                                }, t[0], this.lexer)
                        }
                    }

                    reflink(e, t) {
                        let o;
                        if ((o = this.rules.inline.reflink.exec(e)) || (o = this.rules.inline.nolink.exec(e))) {
                            let e = (o[2] || o[1]).replace(/\s+/g, " ");
                            if (e = t[e.toLowerCase()],
                                !e) {
                                const e = o[0].charAt(0);
                                return {
                                    type: "text",
                                    raw: e,
                                    text: e
                                }
                            }
                            return Rt(o, e, o[0], this.lexer)
                        }
                    }

                    emStrong(e, t, o = "") {
                        let s = this.rules.inline.emStrong.lDelim.exec(e);
                        if (s && (!s[3] || !o.match(/[\p{L}\p{N}]/u)) && (!s[1] && !s[2] || !o || this.rules.inline.punctuation.exec(o))) {
                            const o = [...s[0]].length - 1;
                            let n, i, a = o, r = 0;
                            const l = "*" === s[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                            for (l.lastIndex = 0,
                                     t = t.slice(-1 * e.length + o); null != (s = l.exec(t));) {
                                if (n = s[1] || s[2] || s[3] || s[4] || s[5] || s[6],
                                    !n)
                                    continue;
                                if (i = [...n].length,
                                s[3] || s[4]) {
                                    a += i;
                                    continue
                                }
                                if ((s[5] || s[6]) && o % 3 && !((o + i) % 3)) {
                                    r += i;
                                    continue
                                }
                                if (a -= i,
                                a > 0)
                                    continue;
                                i = Math.min(i, i + a + r);
                                const t = [...e].slice(0, o + s.index + i + 1).join("");
                                if (Math.min(o, i) % 2) {
                                    const e = t.slice(1, -1);
                                    return {
                                        type: "em",
                                        raw: t,
                                        text: e,
                                        tokens: this.lexer.inlineTokens(e)
                                    }
                                }
                                const l = t.slice(2, -2);
                                return {
                                    type: "strong",
                                    raw: t,
                                    text: l,
                                    tokens: this.lexer.inlineTokens(l)
                                }
                            }
                        }
                    }

                    codespan(e) {
                        const t = this.rules.inline.code.exec(e);
                        if (t) {
                            let e = t[2].replace(/\n/g, " ");
                            const o = /[^ ]/.test(e)
                                , s = /^ /.test(e) && / $/.test(e);
                            return o && s && (e = e.substring(1, e.length - 1)),
                                e = Ft(e, !0),
                                {
                                    type: "codespan",
                                    raw: t[0],
                                    text: e
                                }
                        }
                    }

                    br(e) {
                        const t = this.rules.inline.br.exec(e);
                        if (t)
                            return {
                                type: "br",
                                raw: t[0]
                            }
                    }

                    del(e) {
                        const t = this.rules.inline.del.exec(e);
                        if (t)
                            return {
                                type: "del",
                                raw: t[0],
                                text: t[2],
                                tokens: this.lexer.inlineTokens(t[2])
                            }
                    }

                    autolink(e) {
                        const t = this.rules.inline.autolink.exec(e);
                        if (t) {
                            let e, o;
                            return "@" === t[2] ? (e = Ft(t[1]),
                                o = "mailto:" + e) : (e = Ft(t[1]),
                                o = e),
                                {
                                    type: "link",
                                    raw: t[0],
                                    text: e,
                                    href: o,
                                    tokens: [{
                                        type: "text",
                                        raw: e,
                                        text: e
                                    }]
                                }
                        }
                    }

                    url(e) {
                        let t;
                        if (t = this.rules.inline.url.exec(e)) {
                            let e, o;
                            if ("@" === t[2])
                                e = Ft(t[0]),
                                    o = "mailto:" + e;
                            else {
                                let s;
                                do {
                                    s = t[0],
                                        t[0] = this.rules.inline._backpedal.exec(t[0])[0]
                                } while (s !== t[0]);
                                e = Ft(t[0]),
                                    o = "www." === t[1] ? "http://" + t[0] : t[0]
                            }
                            return {
                                type: "link",
                                raw: t[0],
                                text: e,
                                href: o,
                                tokens: [{
                                    type: "text",
                                    raw: e,
                                    text: e
                                }]
                            }
                        }
                    }

                    inlineText(e) {
                        const t = this.rules.inline.text.exec(e);
                        if (t) {
                            let e;
                            return e = this.lexer.state.inRawBlock ? t[0] : Ft(t[0]),
                                {
                                    type: "text",
                                    raw: t[0],
                                    text: e
                                }
                        }
                    }
                }

                const Bt = {
                    newline: /^(?: *(?:\n|$))+/,
                    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
                    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
                    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
                    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
                    table: Et,
                    lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
                    text: /^[^\n]+/,
                    _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
                    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
                };
                Bt.def = zt(Bt.def).replace("label", Bt._label).replace("title", Bt._title).getRegex(),
                    Bt.bullet = /(?:[*+-]|\d{1,9}[.)])/,
                    Bt.listItemStart = zt(/^( *)(bull) */).replace("bull", Bt.bullet).getRegex(),
                    Bt.list = zt(Bt.list).replace(/bull/g, Bt.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Bt.def.source + ")").getRegex(),
                    Bt._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
                    Bt._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/,
                    Bt.html = zt(Bt.html, "i").replace("comment", Bt._comment).replace("tag", Bt._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
                    Bt.lheading = zt(Bt.lheading).replace(/bull/g, Bt.bullet).getRegex(),
                    Bt.paragraph = zt(Bt._paragraph).replace("hr", Bt.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bt._tag).getRegex(),
                    Bt.blockquote = zt(Bt.blockquote).replace("paragraph", Bt.paragraph).getRegex(),
                    Bt.normal = {
                        ...Bt
                    },
                    Bt.gfm = {
                        ...Bt.normal,
                        table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
                    },
                    Bt.gfm.table = zt(Bt.gfm.table).replace("hr", Bt.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bt._tag).getRegex(),
                    Bt.gfm.paragraph = zt(Bt._paragraph).replace("hr", Bt.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", Bt.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bt._tag).getRegex(),
                    Bt.pedantic = {
                        ...Bt.normal,
                        html: zt("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Bt._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                        heading: /^(#{1,6})(.*)(?:\n+|$)/,
                        fences: Et,
                        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                        paragraph: zt(Bt.normal._paragraph).replace("hr", Bt.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Bt.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
                    };
                const It = {
                    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: Et,
                    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                    reflink: /^!?\[(label)\]\[(ref)\]/,
                    nolink: /^!?\[(ref)\](?:\[\])?/,
                    reflinkSearch: "reflink|nolink(?!\\()",
                    emStrong: {
                        lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
                        rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
                        rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
                    },
                    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                    br: /^( {2,}|\\)\n(?!\s*$)/,
                    del: Et,
                    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                    punctuation: /^((?![*_])[\spunctuation])/,
                    _punctuation: "\\p{P}$+<=>`^|~"
                };
                It.punctuation = zt(It.punctuation, "u").replace(/punctuation/g, It._punctuation).getRegex(),
                    It.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
                    It.anyPunctuation = /\\[punct]/g,
                    It._escapes = /\\([punct])/g,
                    It._comment = zt(Bt._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
                    It.emStrong.lDelim = zt(It.emStrong.lDelim, "u").replace(/punct/g, It._punctuation).getRegex(),
                    It.emStrong.rDelimAst = zt(It.emStrong.rDelimAst, "gu").replace(/punct/g, It._punctuation).getRegex(),
                    It.emStrong.rDelimUnd = zt(It.emStrong.rDelimUnd, "gu").replace(/punct/g, It._punctuation).getRegex(),
                    It.anyPunctuation = zt(It.anyPunctuation, "gu").replace(/punct/g, It._punctuation).getRegex(),
                    It._escapes = zt(It._escapes, "gu").replace(/punct/g, It._punctuation).getRegex(),
                    It._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
                    It._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
                    It.autolink = zt(It.autolink).replace("scheme", It._scheme).replace("email", It._email).getRegex(),
                    It._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
                    It.tag = zt(It.tag).replace("comment", It._comment).replace("attribute", It._attribute).getRegex(),
                    It._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
                    It._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,
                    It._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
                    It.link = zt(It.link).replace("label", It._label).replace("href", It._href).replace("title", It._title).getRegex(),
                    It.reflink = zt(It.reflink).replace("label", It._label).replace("ref", Bt._label).getRegex(),
                    It.nolink = zt(It.nolink).replace("ref", Bt._label).getRegex(),
                    It.reflinkSearch = zt(It.reflinkSearch, "g").replace("reflink", It.reflink).replace("nolink", It.nolink).getRegex(),
                    It.normal = {
                        ...It
                    },
                    It.pedantic = {
                        ...It.normal,
                        strong: {
                            start: /^__|\*\*/,
                            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                            endAst: /\*\*(?!\*)/g,
                            endUnd: /__(?!_)/g
                        },
                        em: {
                            start: /^_|\*/,
                            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                            endAst: /\*(?!\*)/g,
                            endUnd: /_(?!_)/g
                        },
                        link: zt(/^!?\[(label)\]\((.*?)\)/).replace("label", It._label).getRegex(),
                        reflink: zt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", It._label).getRegex()
                    },
                    It.gfm = {
                        ...It.normal,
                        escape: zt(It.escape).replace("])", "~|])").getRegex(),
                        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
                    },
                    It.gfm.url = zt(It.gfm.url, "i").replace("email", It.gfm._extended_email).getRegex(),
                    It.breaks = {
                        ...It.gfm,
                        br: zt(It.br).replace("{2,}", "*").getRegex(),
                        text: zt(It.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
                    };

                class qt {
                    tokens;
                    options;
                    state;
                    tokenizer;
                    inlineQueue;

                    constructor(e) {
                        this.tokens = [],
                            this.tokens.links = Object.create(null),
                            this.options = e || yt,
                            this.options.tokenizer = this.options.tokenizer || new Nt,
                            this.tokenizer = this.options.tokenizer,
                            this.tokenizer.options = this.options,
                            this.tokenizer.lexer = this,
                            this.inlineQueue = [],
                            this.state = {
                                inLink: !1,
                                inRawBlock: !1,
                                top: !0
                            };
                        const t = {
                            block: Bt.normal,
                            inline: It.normal
                        };
                        this.options.pedantic ? (t.block = Bt.pedantic,
                            t.inline = It.pedantic) : this.options.gfm && (t.block = Bt.gfm,
                            this.options.breaks ? t.inline = It.breaks : t.inline = It.gfm),
                            this.tokenizer.rules = t
                    }

                    static get rules() {
                        return {
                            block: Bt,
                            inline: It
                        }
                    }

                    static lex(e, t) {
                        return new qt(t).lex(e)
                    }

                    static lexInline(e, t) {
                        return new qt(t).inlineTokens(e)
                    }

                    lex(e) {
                        let t;
                        for (e = e.replace(/\r\n|\r/g, "\n"),
                                 this.blockTokens(e, this.tokens); t = this.inlineQueue.shift();)
                            this.inlineTokens(t.src, t.tokens);
                        return this.tokens
                    }

                    blockTokens(e, t = []) {
                        let o, s, n, i;
                        for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, ((e, t, o) => t + "    ".repeat(o.length))); e;)
                            if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s => !!(o = s.call({
                                lexer: this
                            }, e, t)) && (e = e.substring(o.raw.length),
                                t.push(o),
                                !0)))))
                                if (o = this.tokenizer.space(e))
                                    e = e.substring(o.raw.length),
                                        1 === o.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(o);
                                else if (o = this.tokenizer.code(e))
                                    e = e.substring(o.raw.length),
                                        s = t[t.length - 1],
                                        !s || "paragraph" !== s.type && "text" !== s.type ? t.push(o) : (s.raw += "\n" + o.raw,
                                            s.text += "\n" + o.text,
                                            this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
                                else if (o = this.tokenizer.fences(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.heading(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.hr(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.blockquote(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.list(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.html(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.def(e))
                                    e = e.substring(o.raw.length),
                                        s = t[t.length - 1],
                                        !s || "paragraph" !== s.type && "text" !== s.type ? this.tokens.links[o.tag] || (this.tokens.links[o.tag] = {
                                            href: o.href,
                                            title: o.title
                                        }) : (s.raw += "\n" + o.raw,
                                            s.text += "\n" + o.raw,
                                            this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
                                else if (o = this.tokenizer.table(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.lheading(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else {
                                    if (n = e,
                                    this.options.extensions && this.options.extensions.startBlock) {
                                        let t = 1 / 0;
                                        const o = e.slice(1);
                                        let s;
                                        this.options.extensions.startBlock.forEach((e => {
                                                s = e.call({
                                                    lexer: this
                                                }, o),
                                                "number" == typeof s && s >= 0 && (t = Math.min(t, s))
                                            }
                                        )),
                                        t < 1 / 0 && t >= 0 && (n = e.substring(0, t + 1))
                                    }
                                    if (this.state.top && (o = this.tokenizer.paragraph(n)))
                                        s = t[t.length - 1],
                                            i && "paragraph" === s.type ? (s.raw += "\n" + o.raw,
                                                s.text += "\n" + o.text,
                                                this.inlineQueue.pop(),
                                                this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(o),
                                            i = n.length !== e.length,
                                            e = e.substring(o.raw.length);
                                    else if (o = this.tokenizer.text(e))
                                        e = e.substring(o.raw.length),
                                            s = t[t.length - 1],
                                            s && "text" === s.type ? (s.raw += "\n" + o.raw,
                                                s.text += "\n" + o.text,
                                                this.inlineQueue.pop(),
                                                this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(o);
                                    else if (e) {
                                        const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                        if (this.options.silent) {
                                            console.error(t);
                                            break
                                        }
                                        throw new Error(t)
                                    }
                                }
                        return this.state.top = !0,
                            t
                    }

                    inline(e, t = []) {
                        return this.inlineQueue.push({
                            src: e,
                            tokens: t
                        }),
                            t
                    }

                    inlineTokens(e, t = []) {
                        let o, s, n, i, a, r, l = e;
                        if (this.tokens.links) {
                            const e = Object.keys(this.tokens.links);
                            if (e.length > 0)
                                for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(l));)
                                    e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                        }
                        for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(l));)
                            l = l.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                        for (; null != (i = this.tokenizer.rules.inline.anyPunctuation.exec(l));)
                            l = l.slice(0, i.index) + "++" + l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                        for (; e;)
                            if (a || (r = ""),
                                a = !1,
                                !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((s => !!(o = s.call({
                                    lexer: this
                                }, e, t)) && (e = e.substring(o.raw.length),
                                    t.push(o),
                                    !0)))))
                                if (o = this.tokenizer.escape(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.tag(e))
                                    e = e.substring(o.raw.length),
                                        s = t[t.length - 1],
                                        s && "text" === o.type && "text" === s.type ? (s.raw += o.raw,
                                            s.text += o.text) : t.push(o);
                                else if (o = this.tokenizer.link(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.reflink(e, this.tokens.links))
                                    e = e.substring(o.raw.length),
                                        s = t[t.length - 1],
                                        s && "text" === o.type && "text" === s.type ? (s.raw += o.raw,
                                            s.text += o.text) : t.push(o);
                                else if (o = this.tokenizer.emStrong(e, l, r))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.codespan(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.br(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.del(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (o = this.tokenizer.autolink(e))
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                                else if (this.state.inLink || !(o = this.tokenizer.url(e))) {
                                    if (n = e,
                                    this.options.extensions && this.options.extensions.startInline) {
                                        let t = 1 / 0;
                                        const o = e.slice(1);
                                        let s;
                                        this.options.extensions.startInline.forEach((e => {
                                                s = e.call({
                                                    lexer: this
                                                }, o),
                                                "number" == typeof s && s >= 0 && (t = Math.min(t, s))
                                            }
                                        )),
                                        t < 1 / 0 && t >= 0 && (n = e.substring(0, t + 1))
                                    }
                                    if (o = this.tokenizer.inlineText(n))
                                        e = e.substring(o.raw.length),
                                        "_" !== o.raw.slice(-1) && (r = o.raw.slice(-1)),
                                            a = !0,
                                            s = t[t.length - 1],
                                            s && "text" === s.type ? (s.raw += o.raw,
                                                s.text += o.text) : t.push(o);
                                    else if (e) {
                                        const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                        if (this.options.silent) {
                                            console.error(t);
                                            break
                                        }
                                        throw new Error(t)
                                    }
                                } else
                                    e = e.substring(o.raw.length),
                                        t.push(o);
                        return t
                    }
                }

                class _t {
                    options;

                    constructor(e) {
                        this.options = e || yt
                    }

                    code(e, t, o) {
                        const s = (t || "").match(/^\S*/)?.[0];
                        return e = e.replace(/\n$/, "") + "\n",
                            s ? '<pre><code class="language-' + Ft(s) + '">' + (o ? e : Ft(e, !0)) + "</code></pre>\n" : "<pre><code>" + (o ? e : Ft(e, !0)) + "</code></pre>\n"
                    }

                    blockquote(e) {
                        return `<blockquote>\n ${e}</blockquote>\n`
                    }

                    html(e, t) {
                        return e
                    }

                    heading(e, t, o) {
                        return `<h ${t}>${e}</h ${t}>\n`
                    }

                    hr() {
                        return "<hr>\n"
                    }

                    list(e, t, o) {
                        const s = t ? "ol" : "ul";
                        return "<" + s + (t && 1 !== o ? ' start="' + o + '"' : "") + ">\n" + e + "</" + s + ">\n"
                    }

                    listitem(e, t, o) {
                        return `<li>${e}</li>\n`
                    }

                    checkbox(e) {
                        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
                    }

                    paragraph(e) {
                        return `<p>${e}</p>\n`
                    }

                    table(e, t) {
                        return t && (t = `<tbody>${t}</tbody>`),
                        "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                    }

                    tablerow(e) {
                        return `<tr>\n ${e}</tr>\n`
                    }

                    tablecell(e, t) {
                        const o = t.header ? "th" : "td";
                        return (t.align ? `<${o} align="${t.align}">` : `<${o}>`) + e + `</${o}>\n`
                    }

                    strong(e) {
                        return `<strong>${e}</strong>`
                    }

                    em(e) {
                        return `<em>${e}</em>`
                    }

                    codespan(e) {
                        return `<code>${e}</code>`
                    }

                    br() {
                        return "<br>"
                    }

                    del(e) {
                        return `<del>${e}</del>`
                    }

                    link(e, t, o) {
                        const s = Lt(e);
                        if (null === s)
                            return o;
                        let n = '<a href="' + (e = s) + '"';
                        return t && (n += ' title="' + t + '"'),
                            n += ">" + o + "</a>",
                            n
                    }

                    image(e, t, o) {
                        const s = Lt(e);
                        if (null === s)
                            return o;
                        let n = `<img src="${e = s}" alt="${o}"`;
                        return t && (n += ` title="${t}"`),
                            n += ">",
                            n
                    }

                    text(e) {
                        return e
                    }
                }

                class Ot {
                    strong(e) {
                        return e
                    }

                    em(e) {
                        return e
                    }

                    codespan(e) {
                        return e
                    }

                    del(e) {
                        return e
                    }

                    html(e) {
                        return e
                    }

                    text(e) {
                        return e
                    }

                    link(e, t, o) {
                        return "" + o
                    }

                    image(e, t, o) {
                        return "" + o
                    }

                    br() {
                        return ""
                    }
                }

                class Ht {
                    options;
                    renderer;
                    textRenderer;

                    constructor(e) {
                        this.options = e || yt,
                            this.options.renderer = this.options.renderer || new _t,
                            this.renderer = this.options.renderer,
                            this.renderer.options = this.options,
                            this.textRenderer = new Ot
                    }

                    static parse(e, t) {
                        return new Ht(t).parse(e)
                    }

                    static parseInline(e, t) {
                        return new Ht(t).parseInline(e)
                    }

                    parse(e, t = !0) {
                        let o = "";
                        for (let s = 0; s < e.length; s++) {
                            const n = e[s];
                            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type]) {
                                const e = n
                                    , t = this.options.extensions.renderers[e.type].call({
                                    parser: this
                                }, e);
                                if (!1 !== t || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(e.type)) {
                                    o += t || "";
                                    continue
                                }
                            }
                            switch (n.type) {
                                case "space":
                                    continue;
                                case "hr":
                                    o += this.renderer.hr();
                                    continue;
                                case "heading": {
                                    const e = n;
                                    o += this.renderer.heading(this.parseInline(e.tokens), e.depth, this.parseInline(e.tokens, this.textRenderer).replace(At, ((e, t) => "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "")));
                                    continue
                                }
                                case "code": {
                                    const e = n;
                                    o += this.renderer.code(e.text, e.lang, !!e.escaped);
                                    continue
                                }
                                case "table": {
                                    const e = n;
                                    let t = ""
                                        , s = "";
                                    for (let t = 0; t < e.header.length; t++)
                                        s += this.renderer.tablecell(this.parseInline(e.header[t].tokens), {
                                            header: !0,
                                            align: e.align[t]
                                        });
                                    t += this.renderer.tablerow(s);
                                    let i = "";
                                    for (let t = 0; t < e.rows.length; t++) {
                                        const o = e.rows[t];
                                        s = "";
                                        for (let t = 0; t < o.length; t++)
                                            s += this.renderer.tablecell(this.parseInline(o[t].tokens), {
                                                header: !1,
                                                align: e.align[t]
                                            });
                                        i += this.renderer.tablerow(s)
                                    }
                                    o += this.renderer.table(t, i);
                                    continue
                                }
                                case "blockquote": {
                                    const e = n
                                        , t = this.parse(e.tokens);
                                    o += this.renderer.blockquote(t);
                                    continue
                                }
                                case "list": {
                                    const e = n
                                        , t = e.ordered
                                        , s = e.start
                                        , i = e.loose;
                                    let a = "";
                                    for (let t = 0; t < e.items.length; t++) {
                                        const o = e.items[t]
                                            , s = o.checked
                                            , n = o.task;
                                        let r = "";
                                        if (o.task) {
                                            const e = this.renderer.checkbox(!!s);
                                            i ? o.tokens.length > 0 && "paragraph" === o.tokens[0].type ? (o.tokens[0].text = e + " " + o.tokens[0].text,
                                            o.tokens[0].tokens && o.tokens[0].tokens.length > 0 && "text" === o.tokens[0].tokens[0].type && (o.tokens[0].tokens[0].text = e + " " + o.tokens[0].tokens[0].text)) : o.tokens.unshift({
                                                type: "text",
                                                text: e + " "
                                            }) : r += e + " "
                                        }
                                        r += this.parse(o.tokens, i),
                                            a += this.renderer.listitem(r, n, !!s)
                                    }
                                    o += this.renderer.list(a, t, s);
                                    continue
                                }
                                case "html": {
                                    const e = n;
                                    o += this.renderer.html(e.text, e.block);
                                    continue
                                }
                                case "paragraph": {
                                    const e = n;
                                    o += this.renderer.paragraph(this.parseInline(e.tokens));
                                    continue
                                }
                                case "text": {
                                    let i = n
                                        , a = i.tokens ? this.parseInline(i.tokens) : i.text;
                                    for (; s + 1 < e.length && "text" === e[s + 1].type;)
                                        i = e[++s],
                                            a += "\n" + (i.tokens ? this.parseInline(i.tokens) : i.text);
                                    o += t ? this.renderer.paragraph(a) : a;
                                    continue
                                }
                                default: {
                                    const e = 'Token with "' + n.type + '" type was not found.';
                                    if (this.options.silent)
                                        return console.error(e),
                                            "";
                                    throw new Error(e)
                                }
                            }
                        }
                        return o
                    }

                    parseInline(e, t) {
                        t = t || this.renderer;
                        let o = "";
                        for (let s = 0; s < e.length; s++) {
                            const n = e[s];
                            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type]) {
                                const e = this.options.extensions.renderers[n.type].call({
                                    parser: this
                                }, n);
                                if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)) {
                                    o += e || "";
                                    continue
                                }
                            }
                            switch (n.type) {
                                case "escape": {
                                    const e = n;
                                    o += t.text(e.text);
                                    break
                                }
                                case "html": {
                                    const e = n;
                                    o += t.html(e.text);
                                    break
                                }
                                case "link": {
                                    const e = n;
                                    o += t.link(e.href, e.title, this.parseInline(e.tokens, t));
                                    break
                                }
                                case "image": {
                                    const e = n;
                                    o += t.image(e.href, e.title, e.text);
                                    break
                                }
                                case "strong": {
                                    const e = n;
                                    o += t.strong(this.parseInline(e.tokens, t));
                                    break
                                }
                                case "em": {
                                    const e = n;
                                    o += t.em(this.parseInline(e.tokens, t));
                                    break
                                }
                                case "codespan": {
                                    const e = n;
                                    o += t.codespan(e.text);
                                    break
                                }
                                case "br":
                                    o += t.br();
                                    break;
                                case "del": {
                                    const e = n;
                                    o += t.del(this.parseInline(e.tokens, t));
                                    break
                                }
                                case "text": {
                                    const e = n;
                                    o += t.text(e.text);
                                    break
                                }
                                default: {
                                    const e = 'Token with "' + n.type + '" type was not found.';
                                    if (this.options.silent)
                                        return console.error(e),
                                            "";
                                    throw new Error(e)
                                }
                            }
                        }
                        return o
                    }
                }

                class $t {
                    options;

                    constructor(e) {
                        this.options = e || yt
                    }

                    static passThroughHooks = new Set(["preprocess", "postprocess"]);

                    preprocess(e) {
                        return e
                    }

                    postprocess(e) {
                        return e
                    }
                }

                const Dt = new class {
                        defaults = {
                            async: !1,
                            breaks: !1,
                            extensions: null,
                            gfm: !0,
                            hooks: null,
                            pedantic: !1,
                            renderer: null,
                            silent: !1,
                            tokenizer: null,
                            walkTokens: null
                        };
                        options = this.setOptions;
                        parse = this.#e(qt.lex, Ht.parse);
                        parseInline = this.#e(qt.lexInline, Ht.parseInline);
                        Parser = Ht;
                        parser = Ht.parse;
                        Renderer = _t;
                        TextRenderer = Ot;
                        Lexer = qt;
                        lexer = qt.lex;
                        Tokenizer = Nt;
                        Hooks = $t;

                        constructor(...e) {
                            this.use(...e)
                        }

                        walkTokens(e, t) {
                            let o = [];
                            for (const s of e)
                                switch (o = o.concat(t.call(this, s)),
                                    s.type) {
                                    case "table": {
                                        const e = s;
                                        for (const s of e.header)
                                            o = o.concat(this.walkTokens(s.tokens, t));
                                        for (const s of e.rows)
                                            for (const e of s)
                                                o = o.concat(this.walkTokens(e.tokens, t));
                                        break
                                    }
                                    case "list": {
                                        const e = s;
                                        o = o.concat(this.walkTokens(e.items, t));
                                        break
                                    }
                                    default: {
                                        const e = s;
                                        this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((s => {
                                                o = o.concat(this.walkTokens(e[s], t))
                                            }
                                        )) : e.tokens && (o = o.concat(this.walkTokens(e.tokens, t)))
                                    }
                                }
                            return o
                        }

                        use(...e) {
                            const t = this.defaults.extensions || {
                                renderers: {},
                                childTokens: {}
                            };
                            return e.forEach((e => {
                                    const o = {
                                        ...e
                                    };
                                    if (o.async = this.defaults.async || o.async || !1,
                                    e.extensions && (e.extensions.forEach((e => {
                                            if (!e.name)
                                                throw new Error("extension name required");
                                            if ("renderer" in e) {
                                                const o = t.renderers[e.name];
                                                t.renderers[e.name] = o ? function (...t) {
                                                        let s = e.renderer.apply(this, t);
                                                        return !1 === s && (s = o.apply(this, t)),
                                                            s
                                                    }
                                                    : e.renderer
                                            }
                                            if ("tokenizer" in e) {
                                                if (!e.level || "block" !== e.level && "inline" !== e.level)
                                                    throw new Error("extension level must be 'block' or 'inline'");
                                                const o = t[e.level];
                                                o ? o.unshift(e.tokenizer) : t[e.level] = [e.tokenizer],
                                                e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                                            }
                                            "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
                                        }
                                    )),
                                        o.extensions = t),
                                        e.renderer) {
                                        const t = this.defaults.renderer || new _t(this.defaults);
                                        for (const o in e.renderer) {
                                            const s = e.renderer[o]
                                                , n = o
                                                , i = t[n];
                                            t[n] = (...e) => {
                                                let o = s.apply(t, e);
                                                return !1 === o && (o = i.apply(t, e)),
                                                o || ""
                                            }
                                        }
                                        o.renderer = t
                                    }
                                    if (e.tokenizer) {
                                        const t = this.defaults.tokenizer || new Nt(this.defaults);
                                        for (const o in e.tokenizer) {
                                            const s = e.tokenizer[o]
                                                , n = o
                                                , i = t[n];
                                            t[n] = (...e) => {
                                                let o = s.apply(t, e);
                                                return !1 === o && (o = i.apply(t, e)),
                                                    o
                                            }
                                        }
                                        o.tokenizer = t
                                    }
                                    if (e.hooks) {
                                        const t = this.defaults.hooks || new $t;
                                        for (const o in e.hooks) {
                                            const s = e.hooks[o]
                                                , n = o
                                                , i = t[n];
                                            $t.passThroughHooks.has(o) ? t[n] = e => {
                                                    if (this.defaults.async)
                                                        return Promise.resolve(s.call(t, e)).then((e => i.call(t, e)));
                                                    const o = s.call(t, e);
                                                    return i.call(t, o)
                                                }
                                                : t[n] = (...e) => {
                                                    let o = s.apply(t, e);
                                                    return !1 === o && (o = i.apply(t, e)),
                                                        o
                                                }
                                        }
                                        o.hooks = t
                                    }
                                    if (e.walkTokens) {
                                        const t = this.defaults.walkTokens
                                            , s = e.walkTokens;
                                        o.walkTokens = function (e) {
                                            let o = [];
                                            return o.push(s.call(this, e)),
                                            t && (o = o.concat(t.call(this, e))),
                                                o
                                        }
                                    }
                                    this.defaults = {
                                        ...this.defaults,
                                        ...o
                                    }
                                }
                            )),
                                this
                        }

                        setOptions(e) {
                            return this.defaults = {
                                ...this.defaults,
                                ...e
                            },
                                this
                        }

                        #e(e, t) {
                            return (o, s) => {
                                const n = {
                                    ...s
                                }
                                    , i = {
                                    ...this.defaults,
                                    ...n
                                };
                                !0 === this.defaults.async && !1 === n.async && (i.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),
                                    i.async = !0);
                                const a = this.#t(!!i.silent, !!i.async);
                                if (null == o)
                                    return a(new Error("marked(): input parameter is undefined or null"));
                                if ("string" != typeof o)
                                    return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(o) + ", string expected"));
                                if (i.hooks && (i.hooks.options = i),
                                    i.async)
                                    return Promise.resolve(i.hooks ? i.hooks.preprocess(o) : o).then((t => e(t, i))).then((e => i.walkTokens ? Promise.all(this.walkTokens(e, i.walkTokens)).then((() => e)) : e)).then((e => t(e, i))).then((e => i.hooks ? i.hooks.postprocess(e) : e)).catch(a);
                                try {
                                    i.hooks && (o = i.hooks.preprocess(o));
                                    const s = e(o, i);
                                    i.walkTokens && this.walkTokens(s, i.walkTokens);
                                    let n = t(s, i);
                                    return i.hooks && (n = i.hooks.postprocess(n)),
                                        n
                                } catch (e) {
                                    return a(e)
                                }
                            }
                        }

                        #t(e, t) {
                            return o => {
                                if (o.message += "\nPlease report this to https://github.com/markedjs/marked.",
                                    e) {
                                    const e = "<p>An error occurred:</p><pre>" + Ft(o.message + "", !0) + "</pre>";
                                    return t ? Promise.resolve(e) : e
                                }
                                if (t)
                                    return Promise.reject(o);
                                throw o
                            }
                        }
                    }
                ;

                function Ut(e, t) {
                    return Dt.parse(e, t)
                }

                Ut.options = Ut.setOptions = function (e) {
                    return Dt.setOptions(e),
                        Ut.defaults = Dt.defaults,
                        bt(Ut.defaults),
                        Ut
                }
                    ,
                    Ut.getDefaults = function () {
                        return {
                            async: !1,
                            breaks: !1,
                            extensions: null,
                            gfm: !0,
                            hooks: null,
                            pedantic: !1,
                            renderer: null,
                            silent: !1,
                            tokenizer: null,
                            walkTokens: null
                        }
                    }
                    ,
                    Ut.defaults = yt,
                    Ut.use = function (...e) {
                        return Dt.use(...e),
                            Ut.defaults = Dt.defaults,
                            bt(Ut.defaults),
                            Ut
                    }
                    ,
                    Ut.walkTokens = function (e, t) {
                        return Dt.walkTokens(e, t)
                    }
                    ,
                    Ut.parseInline = Dt.parseInline,
                    Ut.Parser = Ht,
                    Ut.parser = Ht.parse,
                    Ut.Renderer = _t,
                    Ut.TextRenderer = Ot,
                    Ut.Lexer = qt,
                    Ut.lexer = qt.lex,
                    Ut.Tokenizer = Nt,
                    Ut.Hooks = $t,
                    Ut.parse = Ut,
                    Ut.options,
                    Ut.setOptions,
                    Ut.use,
                    Ut.walkTokens,
                    Ut.parseInline;
                const Qt = {
                    paragraph: e => e,
                    link() {
                        return Ut.Renderer.prototype.link.apply(this, arguments).replace(/^<a/, '<a target="_blank"')
                    }
                };
                Ut.use({
                    renderer: Qt
                });
                const Jt = r.Z.getComponent("Message");

                class Vt extends Jt {
                    constructor(e, t) {
                        super(e, {
                            message: t.message
                        }),
                            this.message = t.message,
                            this.fmp = t.fmp
                    }

                    applyMessage() {
                        const e = Ut(this.message).replace(/<code>/g, "<pre><code>").replace(/<\/code>/g, '</code><span class="tooltip tooltip-bottom clipboard clipboard-target" data-tooltip="Copy Code"><svg \n  class="clipboard" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 384 512">\n  <path class="clipboard"\n    d="M384 112v352a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V112a48 48 0 0 1 \n    48-48h80a64 64 0 0 1 128 0h80a48 48 0 0 1 48 48zM192 40a24 24 0 1 0 0 \n    48 24 24 0 0 0 0-48m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 \n    0 0 0 6 6h180a6 6 0 0 0 6-6z"/></svg></span></pre>');
                        this.content.innerHTML = e
                    }

                    handleClick(e) {
                        super.handleClick(e),
                            function (e, t) {
                                let o = e.target;
                                if (o && o.classList.contains("clipboard"))
                                    for (; o.parentNode;)
                                        o = o.parentNode,
                                        "pre" == o.nodeName.toLowerCase() && (navigator.clipboard.writeText(o.textContent).catch((() => {
                                                t.messages.add({
                                                    id: "clipboardError",
                                                    type: "warning",
                                                    message: "We couldn't paste this snippet into your clipboard. Please check your browser permissions."
                                                })
                                            }
                                        )),
                                            Zt(t))
                            }(e, this.fmp)
                    }
                }

                function Zt(e) {
                    e.sync && e.vsId && e.sync.add({
                        level: e.sync.levels.USER,
                        command: "annotation-copy",
                        data: {
                            courseSlug: e.playlist().slug,
                            lessonHash: e.lesson().hash,
                            vsId: e.vsId(),
                            lessonSeconds: Math.floor(e.video.currentTime())
                        }
                    })
                }

                const Xt = r.Z.getComponent("Component");

                class Yt extends Xt {
                    constructor(e, t) {
                        super(e),
                            this.addClass("vjs-annotation-range"),
                            this.shown = !1,
                            this.fmp = t.fmp,
                            this.range = t.annotation.range,
                            this.text = t.annotation.message;
                        const o = this.el()
                            , s = e.duration();
                        o.style.left = Math.round(this.range[0] / s * 100) + "%",
                            o.style.right = 100 - Math.round(this.range[1] / s * 100) + "%"
                    }

                    showMessage() {
                        this.fmp.showAnnotations() && (this.message = new Vt(this.player(), {
                            message: this.text,
                            fmp: this.fmp
                        }),
                            this.fmp.messages.addCustomMessage(this.message),
                            this.shown = !0)
                    }

                    hideMessage() {
                        this.message && this.message.el() && this.message.dispose(),
                            delete this.message,
                            this.shown = !1
                    }

                    dispose() {
                        this.hideMessage(),
                            super.dispose()
                    }
                }

                function Wt(e) {
                    e.addProp("showAnnotations", le.get("fmp.video.annotations", !0)),
                        e.showAnnotations.subscribe((e => {
                                le.set("fmp.video.annotations", e)
                            }
                        ));
                    const t = []
                        , o = e.video.getChild("ControlBar").getChild("ProgressControl").getChild("SeekBar");
                    e.lesson.subscribe((s => {
                            for (; t.length > 0;)
                                t.pop().dispose();
                            s.annotations && e.video.one("loadedmetadata", (() => {
                                    s.annotations.forEach((s => {
                                            const n = new Yt(e.video, {
                                                fmp: e,
                                                annotation: s
                                            });
                                            t.push(n),
                                                o.addChild(n)
                                        }
                                    ))
                                }
                            ))
                        }
                    )),
                        e.video.on("timeupdate", p()((function () {
                                t.forEach((t => {
                                        t.range[0] < e.video.currentTime() && e.video.currentTime() < t.range[1] ? t.shown || t.showMessage() : t.shown && t.hideMessage()
                                    }
                                ))
                            }
                        ), 1e3))
                }

                function Gt(e) {
                    e.setCachedResumeTime = function (t, o) {
                        t = t || window.location.pathname,
                            o = o || Math.floor(e.video.currentTime()),
                            le.set("fmp.resume." + t, o)
                    }
                        ,
                        e.resumeFromSearchParams = function () {
                            const t = e.searchParams()
                                , o = parseInt(t.get("t"));
                            Number.isNaN(o) || (e.setResumeTime(o),
                                t.delete("t"))
                        }
                    ;
                    const t = "fmp.resume." + window.location.pathname
                        , o = parseInt(le.get(t));
                    Number.isNaN(o) || (e.setResumeTime(o),
                        le.remove(t)),
                        e.resumeFromSearchParams()
                }

                function Kt(e) {
                    const t = ["ver", "dri", "web"];
                    return window.navigator[t.pop() + t.pop() + t.pop()] && (e.videoSrc = () => "",
                    e.sync && (e.sync.run = () => {
                        }
                            ,
                            e.sync.runImmediately = () => {
                            }
                    )),
                        e
                }

                function eo(e) {
                    e.showModal = function (t) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.video.addClass("vjs-modal-open");
                        const s = new t(e, o)
                            , n = "function" == typeof s.content ? s.content() : s.content
                            , i = e.video.createModal(n, {
                            pauseOnOpen: !o.skipPause,
                            uncloseable: !0
                        });
                        i.controller = s,
                            i.el().className += " FMPlayerModal";
                        const a = o.className || s.className;
                        a && (i.el().className += " " + a),
                        o.hideControls || e.video.controls(!0),
                        (void 0 !== o.hideClose ? o.hideClose : s.hideClose) && (i.el().className += " hide-close");
                        const r = Ze(".FMPlayerCloseModal", (e => {
                                e.preventDefault(),
                                    i.close()
                            }
                        ));

                        function l() {
                            i.close()
                        }

                        return i.on("click", r),
                            e.video.on("play", l),
                            e.video.on("seeked", l),
                            e.videoSrc.subscribe(l),
                        "function" == typeof s.onMount && s.onMount(e, o),
                        "function" == typeof o.onMount && o.onMount(e, o),
                            i.one("modalclose", (() => {
                                    i.off("click", r),
                                        e.video.off("play", l),
                                        e.video.off("seeked", l),
                                        e.videoSrc.unsubscribe(l),
                                        e.video.removeClass("vjs-modal-open"),
                                    "function" == typeof s.onUnmount && s.onUnmount(e, o),
                                    "function" == typeof o.onUnmount && o.onUnmount(e, o)
                                }
                            )),
                            i
                    }
                }

                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerModal .vjs-modal-dialog-content{z-index:auto}.FMPlayerModal .modal-content{z-index:2}.FMPlayer.video-js .FMPlayerModal{animation:fade-in .3s ease-in;background:linear-gradient(200deg,rgba(0,0,0,.6) 60%,rgba(192,45,40,.7)),linear-gradient(160deg,rgba(0,0,0,.6) 60%,rgba(230,98,37,.8))}.FMPlayerRoot .FMPlayer.video-js .FMPlayerModal{background:linear-gradient(200deg,rgba(0,0,0,.6) 65%,rgba(173,234,242,.6)),linear-gradient(160deg,rgba(0,0,0,.6) 60%,rgba(91,174,192,.9))}.FMPlayerModal.hide-close .vjs-control.vjs-close-button{display:none}.FMPlayerModal .vjs-control.vjs-close-button{background:none;font-size:150%;opacity:.5;text-shadow:none}.FMPlayerModal .vjs-control.vjs-close-button:hover{opacity:1}.FMPlayerModal .modal-content{background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.35);left:50%;line-height:1.4;max-width:600px;padding:20px 30px;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);width:90%}.FMPlayerModal .modal-emoji{display:none}.FMPlayerModal .modal-title{font-size:18px;font-weight:700;margin:0}.FMPlayerModal .modal-tagline{color:#ccc;font-size:14px}.FMPlayerModal .modal-buttons{margin-top:10px}.FMPlayerModal .modal-button{background:#3e3e3e;border-radius:100px;color:#fff;display:inline-block;font-size:14px;line-height:1;margin:6px;padding:10px 20px;text-decoration:none;vertical-align:middle}.FMPlayerModal .modal-button .icon{vertical-align:middle}.FMPlayerModal .modal-button:hover{box-shadow:inset 0 0 20px rgba(255,255,255,.35);color:#fff}.FMPlayerModal .modal-button-red{background:#c02d28}@media only screen and (min-width:768px){.FMPlayerModal .modal-content{padding:30px 40px}.FMPlayerModal .modal-emoji{display:block;font-size:50px;line-height:1;margin-bottom:10px}.FMPlayerModal .modal-title{font-size:27px}.FMPlayerModal .modal-tagline{font-size:16px}.FMPlayerModal .modal-buttons{margin-top:20px}.FMPlayerModal .modal-button{font-size:16px}}"),
                    f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerModalSocial .vjs-icon-facebook{background:#3b5998}.FMPlayerModalSocial .vjs-icon-twitter{background:#00aced}.FMPlayerModalSocial .vjs-icon-twitter:hover{box-shadow:inset 0 0 20px rgba(255,255,255,.65)}.FMPlayerModalSocial .vjs-icon-linkedin{background:#0077b5}.FMPlayerModalSocial .vjs-icon-replay{font-size:120%;margin-right:5px}.FMPlayerModalSocial .modal-buttons{margin-top:0}@media only screen and (min-width:768px){.FMPlayerModalSocial .social-back{margin-top:20px}}");

                class to {
                    constructor(e, t) {
                        this.className = "FMPlayerModalSocial",
                            this.fmp = e,
                            this.backLink = t.backLink,
                            this.url = t.url
                    }

                    content() {
                        const e = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            const o = t.emoji
                                , s = t.title
                                , n = t.tagline
                                , i = t.tagline2
                                , a = Ye("div", {
                                className: "modal-content"
                            });
                            return o && a.appendChild(Ye("div", {
                                className: "modal-emoji",
                                textContent: o
                            })),
                            s && a.appendChild(Ye("h2", {
                                className: "modal-title",
                                textContent: s
                            })),
                            n && a.appendChild(Ye("div", {
                                className: "modal-tagline",
                                textContent: n
                            })),
                            i && a.appendChild(Ye("div", {
                                className: "modal-tagline",
                                textContent: i
                            })),
                                a
                        }(this.fmp, {
                            emoji: "🙌",
                            title: "Nice Work!",
                            tagline: `You just completed ${this.fmp.playlist().title}.`,
                            tagline2: "Share your accomplishment:"
                        })
                            , t = this.createSocialLinks();
                        return e.appendChild(t),
                        this.backLink && e.appendChild(Ye("a", {
                            className: "modal-button social-back",
                            href: this.backLink.url || "https://frontendmasters.com/courses/"
                        }, [Ye("span", {
                            className: "icon vjs-icon-replay"
                        }), this.backLink.text || "Back to Courses"])),
                            e
                    }

                    createSocialLinks() {
                        const e = this.url || "https://frontendmasters.com" + this.fmp.routeRoot();
                        let t = ""
                            , o = "";
                        const s = this.fmp.playlist().instructors && this.fmp.playlist().instructors[0];
                        s && (s.name && (t = " by " + s.name),
                        s.socialSettings && s.socialSettings.twitter && (o = " by " + s.socialSettings.twitter));
                        const n = this.fmp.playlist().title
                            , i = `I just completed "${n}"${t} on FrontendMasters!`
                            , a = `I just completed "${n}"${o} on @FrontendMasters!`
                            , r = function (e) {
                            const t = Ye("div", {
                                className: "modal-buttons"
                            });
                            return e.forEach((e => {
                                    const o = Ye("a", {
                                        className: "modal-button " + e.className,
                                        href: e.href || "#"
                                    });
                                    e.textContent && (o.textContent = e.textContent),
                                        t.appendChild(o)
                                }
                            )),
                                t
                        }([{
                            className: "social-open icon vjs-icon-twitter",
                            href: "https://twitter.com/intent/tweet?" + this.encode({
                                url: e,
                                text: a || i
                            })
                        }, {
                            className: "social-open icon vjs-icon-facebook",
                            href: "https://www.facebook.com/sharer/sharer.php?" + this.encode({
                                u: e,
                                t: i
                            })
                        }, {
                            className: "social-open icon vjs-icon-linkedin",
                            href: "https://www.linkedin.com/sharing/share-offsite/?" + this.encode({
                                url: e
                            })
                        }]);
                        return r.addEventListener("click", (e => {
                                e.target.classList.contains("social-open") && (e.preventDefault(),
                                    window.open(e.target.href, "_blank", "toolbar=0,location=0,menubar=0,left=100,top=100,width=600,height=500"))
                            }
                        )),
                            r
                    }

                    encode(e) {
                        return Object.keys(e).filter((t => void 0 !== e[t] && "" !== e[t])).map((t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
                    }
                }

                f('.FMPlayerRoot .FMPlayerField{zoom:1}.FMPlayerRoot .FMPlayerField:after,.FMPlayerRoot .FMPlayerField:before{content:" ";display:table}.FMPlayerRoot .FMPlayerField:after{clear:both}@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerRoot{background:#000;bottom:0;box-sizing:border-box;color:#ccc;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:16px;left:0;line-height:1.5;position:absolute;right:0;top:0}.FMPlayerRoot *,.FMPlayerRoot :after,.FMPlayerRoot :before{box-sizing:inherit}.FMPlayerRoot a{color:#5baec0}.FMPlayerRoot a:hover{color:#9dced9}.FMPlayerRoot img{max-width:100%}.FMPlayerComponent.hidden{display:none!important}@media only screen and (min-width:768px){.FMPlayerBody .FMPlayerComponent .FMPlayerClose{opacity:0}.FMPlayerBody .FMPlayerComponent:hover .FMPlayerClose{opacity:.25}.FMPlayerBody .FMPlayerComponent:hover .FMPlayerClose:hover{opacity:1}}.FMPlayerSidebar{background:#222}.FMPlayerScrolling{overflow-y:auto;position:relative}.FMPlayerHeader{background:#151515;display:flex;gap:20px;padding-left:10px}.FMPlayerHeader .FMPlayerClose,.FMPlayerHeader .title{margin:0}.FMPlayerHeader .title{align-items:center;color:#8a8a8a;display:flex;flex:1;font-size:14px;font-weight:400}.FMPlayerHeader .FMPlayerClose{order:100;padding:10px}.FMPlayerClose{transition:opacity .1s ease-in}.FMPlayerBody,.FMPlayerCenter,.FMPlayerRoot,.FMPlayerVideo{display:flex;flex-direction:column;justify-content:center}.FMPlayerContentTray,.FMPlayerSidebar{display:flex;flex:1;flex-direction:column;height:0}.FMPlayerBody,.FMPlayerCenter,.FMPlayerVideo{flex:1}.FMPlayerBody{overflow:hidden}.FMPlayerCenter{max-height:100%;order:-1}@media only screen and (min-width:768px){.FMPlayerBody{flex-direction:row}.FMPlayerCenter,.FMPlayerVideo{flex:3}.FMPlayerCenter{order:0}.FMPlayerSidebar{flex:2;height:auto;max-width:300px}.FMPlayerContentTray{flex:none;flex-basis:300px;height:auto;max-height:300px}}.FMPlayerContentTray,.FMPlayerSidebar{animation:fade-in-bottom .3s ease-in}@media only screen and (min-width:768px){.FMPlayerSidebar{animation:fade-in-right .3s ease-in}.FMPlayerSidebar:first-child{animation:fade-in-left .3s ease-in}}@-moz-keyframes fade-in-bottom{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes fade-in-bottom{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}@-o-keyframes fade-in-bottom{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-bottom{0%{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}@-moz-keyframes fade-in-left{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in-left{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@-o-keyframes fade-in-left{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-left{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@-moz-keyframes fade-in-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fade-in-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}@-o-keyframes fade-in-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}.FMPlayerRoot .FMPlayerField{clear:both;margin:10px 0}.FMPlayerRoot .FMPlayerField label{cursor:pointer;font-size:14px;line-height:20px}.FMPlayerRoot .FMPlayerField input,.FMPlayerRoot .FMPlayerField select{cursor:pointer;float:right}.FMPlayerRoot .FMPlayerField input[type=checkbox]{-webkit-appearance:none;-mox-appearance:none;appearance:none;background:#fff;border-radius:3px;box-shadow:inset 0 0 2px #222;height:20px;margin:0;position:relative;width:20px}.FMPlayerRoot .FMPlayerField input[type=checkbox]:checked{background:#0072f9 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAH+C9bUKZa7tVmgAAAHJJREFUeNrt0bsOgCAQRFH2/f9/bGLGxiizFFpxGygOIbBj90MpPWelLZlVkNS1pBeBiy7WXAVx0nU6c2Jyc/7oQksFJ+Def8POLVzOXpkThxLXXRsbbxkAFv4lfCDCHQrukPPBoYTjGQbCUzia+Nh92gGj9AUFuzeolQAAAABJRU5ErkJggg==") no-repeat;background-size:contain}.FMPlayerRoot .FMPlayerField select{font-size:14px}.FMPlayerRoot .FMPlayerButton{background:#ccc;border:0;border-radius:30px;color:#3e3e3e;cursor:pointer;display:inline-block;font-size:14px;padding:10px 20px;text-decoration:none}.FMPlayerRoot .FMPlayerButton:hover{background:#d1d1d1;color:#515151}.FMPlayerRoot .FMPlayerButton.primary{background:#3b8999;color:#fff}.FMPlayerRoot .FMPlayerButton.primary:hover{background:#51a9bc}.FMPlayerRoot .FMPlayerButton.submit{margin-top:10px}.FMPlayerRoot .FMPlayerButton[disabled],.FMPlayerRoot .FMPlayerButton[disabled]:hover{background:#8a8a8a;color:#3e3e3e;cursor:not-allowed}.FMPlayerVideo{position:relative}');
                var oo = N({
                    exports: {}
                }.exports = {
                    polyfill: function () {
                        var e = window
                            , t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                            var o, s = e.HTMLElement || e.Element, n = 468, i = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: s.prototype.scroll || l,
                                    scrollIntoView: s.prototype.scrollIntoView
                                },
                                a = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                r = (o = e.navigator.userAgent,
                                    new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o) ? 1 : 0);
                            e.scroll = e.scrollTo = function () {
                                void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? h.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }
                                ,
                                e.scrollBy = function () {
                                    void 0 !== arguments[0] && (c(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                                }
                                ,
                                s.prototype.scroll = s.prototype.scrollTo = function () {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== c(arguments[0])) {
                                            var e = arguments[0].left
                                                , t = arguments[0].top;
                                            h.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                                throw new SyntaxError("Value could not be converted");
                                            i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }
                                ,
                                s.prototype.scrollBy = function () {
                                    void 0 !== arguments[0] && (!0 !== c(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }
                                ,
                                s.prototype.scrollIntoView = function () {
                                    if (!0 !== c(arguments[0])) {
                                        var o = function (e) {
                                            for (; e !== t.body && !1 === u(e);)
                                                e = e.parentNode || e.host;
                                            return e
                                        }(this)
                                            , s = o.getBoundingClientRect()
                                            , n = this.getBoundingClientRect();
                                        o !== t.body ? (h.call(this, o, o.scrollLeft + n.left - s.left, o.scrollTop + n.top - s.top),
                                        "fixed" !== e.getComputedStyle(o).position && e.scrollBy({
                                            left: s.left,
                                            top: s.top,
                                            behavior: "smooth"
                                        })) : e.scrollBy({
                                            left: n.left,
                                            top: n.top,
                                            behavior: "smooth"
                                        })
                                    } else
                                        i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                        }

                        function l(e, t) {
                            this.scrollLeft = e,
                                this.scrollTop = t
                        }

                        function c(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior)
                                return !0;
                            if ("object" == typeof e && "smooth" === e.behavior)
                                return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function d(e, t) {
                            return "Y" === t ? e.clientHeight + r < e.scrollHeight : "X" === t ? e.clientWidth + r < e.scrollWidth : void 0
                        }

                        function p(t, o) {
                            var s = e.getComputedStyle(t, null)["overflow" + o];
                            return "auto" === s || "scroll" === s
                        }

                        function u(e) {
                            var t = d(e, "Y") && p(e, "Y")
                                , o = d(e, "X") && p(e, "X");
                            return t || o
                        }

                        function v(t) {
                            var o, s, i, r, l = (a() - t.startTime) / n;
                            r = l = l > 1 ? 1 : l,
                                o = .5 * (1 - Math.cos(Math.PI * r)),
                                s = t.startX + (t.x - t.startX) * o,
                                i = t.startY + (t.y - t.startY) * o,
                                t.method.call(t.scrollable, s, i),
                            s === t.x && i === t.y || e.requestAnimationFrame(v.bind(e, t))
                        }

                        function h(o, s, n) {
                            var r, c, d, p, u = a();
                            o === t.body ? (r = e,
                                c = e.scrollX || e.pageXOffset,
                                d = e.scrollY || e.pageYOffset,
                                p = i.scroll) : (r = o,
                                c = o.scrollLeft,
                                d = o.scrollTop,
                                p = l),
                                v({
                                    scrollable: r,
                                    method: p,
                                    startTime: u,
                                    startX: c,
                                    startY: d,
                                    x: s,
                                    y: n
                                })
                        }
                    }
                });

                function so(e) {
                    function t() {
                        const t = o();
                        if ("mobile" === t || "tablet" === t) {
                            let o = !0
                                , s = !1;
                            Object.values(e.ui).forEach((e => {
                                    e.constraints && e.constraints[t] && e.visible() && (o ? o = !1 : (e.visible(!1),
                                        s = !0))
                                }
                            )),
                            s && c().redraw()
                        }
                    }

                    function o() {
                        const e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                        return e <= 768 ? "mobile" : e <= 1024 ? "tablet" : "desktop"
                    }

                    window.addEventListener("resize", a()(t, 200)),
                        e.video.one("fmp:allpluginsloaded", (() => {
                                t(),
                                    e.uiRedraw()
                            }
                        )),
                        e.uiSelect = function (t, s) {
                            const n = o();
                            if (s && ("mobile" === n || "tablet" === n)) {
                                const o = e.ui[t];
                                o.constraints && o.constraints[n] && Object.keys(e.ui).forEach((t => {
                                        const o = e.ui[t];
                                        o.constraints && o.constraints[n] && o.visible(!1)
                                    }
                                ))
                            }
                            e.ui[t].visible(s),
                                c().redraw()
                        }
                        ,
                        e.uiViewportSize = o
                }

                function no(e, t) {
                    const o = {};
                    ["root", "body", "center", "video"].forEach((e => {
                            o[e] = t[e] || document.createElement("div"),
                                o[e].classList.add("FMPlayer" + e.charAt(0).toUpperCase() + e.slice(1))
                        }
                    )),
                        o.root.appendChild(o.body),
                        o.body.appendChild(o.center),
                        o.center.appendChild(o.video);
                    const s = e.video.el();
                    s.parentNode.insertBefore(o.root, s),
                        o.video.appendChild(s),
                        o.video.addEventListener("click", (t => {
                                t.target === e.uiTargets.video && (e.video.paused() ? e.play() : e.video.pause())
                            }
                        )),
                        e.uiTargets = o
                }

                function io(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    oo.polyfill(),
                        e.video.fill(!0),
                        e.video.preload("metadata"),
                        e.ui = {},
                        e.uiRedraw = c().redraw,
                        e.addPlugin(no, t).addPlugin(so),
                        e.addUI = function (t, o, s) {
                            const n = t.ui || {};
                            if (!n.id)
                                throw new Error("FMPlayer: component.ui.id is required");
                            e.ui[n.id] = n;
                            const i = document.createElement(n.mountTag || "div");
                            return i.dataset.id = n.id,
                                i.className = n.mountClass || "",
                                i.classList.add("FMPlayerComponent"),
                                n.mountEl = i,
                            n.settings && (e.ui[n.id] = n,
                                e.addProp(n, "visible", null),
                                n.visible.subscribe((e => {
                                        e ? i.classList.remove("hidden") : i.classList.add("hidden")
                                    }
                                )),
                                n.visible(!!le.get("fmp.ui." + n.id, !0)),
                                n.visible.subscribe((e => {
                                        le.set("fmp.ui." + n.id, e),
                                            c().redraw()
                                    }
                                ))),
                            "function" == typeof n.onBeforeMount && n.onBeforeMount(e),
                                e.uiTargets[o].insertAdjacentElement(s ? "afterbegin" : "beforeend", i),
                                c().mount(i, {
                                    view: () => {
                                        if (!n.settings || n.visible())
                                            return c()(t, {
                                                fmp: e,
                                                config: n
                                            })
                                    }
                                }),
                                e.video.trigger("fmp:pluginloaded"),
                                e
                        }
                }

                function ao(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.logoLink = t.logoLink || "/",
                        e.uiNavActive = "",
                        e.uiTargets.root.addEventListener("click", (t => {
                                if (!e.uiNavActive || "navHelpOverlay" === e.uiNavActive || "navHelpFeedback" === e.uiNavActive || "navHelpIntercom" === e.uiNavActive)
                                    return;
                                const o = t.target.closest(".FMPlayerNavButton");
                                o && e.uiNavActive.startsWith(o.dataset.id) || (e.uiNavActive = "",
                                    c().redraw())
                            }
                        )),
                        e.uiTargets.nav = document.createElement("div"),
                        e.uiTargets.nav.classList.add("FMPlayerNav"),
                        e.uiTargets.navleft = document.createElement("div"),
                        e.uiTargets.navleft.classList.add("FMPlayerNavleft"),
                        e.uiTargets.navright = document.createElement("div"),
                        e.uiTargets.navright.classList.add("FMPlayerNavright"),
                        e.uiTargets.navbutton = document.createElement("a"),
                        e.uiTargets.navbutton.href = "#",
                        e.uiTargets.navbutton.className = "FMPlayerNavButton FMPlayerNavrightMobile",
                        e.uiTargets.navbutton.textContent = "≡",
                        e.uiTargets.navbutton.addEventListener("click", (t => {
                                t.preventDefault(),
                                    e.uiTargets.navbutton.classList.toggle("active")
                            }
                        )),
                        e.uiTargets.nav.appendChild(e.uiTargets.navbutton),
                        e.uiTargets.nav.appendChild(e.uiTargets.navleft),
                        e.uiTargets.nav.appendChild(e.uiTargets.navright),
                        e.uiTargets.root.insertBefore(e.uiTargets.nav, e.uiTargets.root.children[0])
                }

                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNav{background:#222;line-height:20px}.FMPlayerNavrightMobile.FMPlayerNavButton{float:right;font-size:32px;padding:8px 8px 12px;text-decoration:none}.FMPlayerNavrightMobile.FMPlayerNavButton.active,.FMPlayerNavrightMobile.FMPlayerNavButton:hover{color:#fff}.FMPlayerNavrightMobile.FMPlayerNavButton.active~.FMPlayerNavright{display:block}.FMPlayerNavright{animation:nav-top .1s ease-in;background:#222;display:none}@media only screen and (min-width:568px){.FMPlayerNavright{animation:none}}.FMPlayerNavButton{display:block;vertical-align:top}.FMPlayerNavButton .button{display:block;font-size:14px;height:40px;padding:10px 8px;text-decoration:none;transition:color .1s ease-in}.FMPlayerNavButton .button .icon{display:inline-block;font-size:20px;line-height:0;vertical-align:middle}.FMPlayerNavButton .button svg{height:20px;transition:fill .1s ease-in}.FMPlayerNavButton .button.active,.FMPlayerNavButton .button:hover{color:#fff}.FMPlayerNavButton .button .text{display:inline;margin-left:5px}.FMPlayerNavTray{animation:nav-top .1s ease-in;background:linear-gradient(rgba(34,34,34,.95),rgba(10,10,10,.95));border:1px solid #3e3e3e;box-shadow:0 10px 10px rgba(0,0,0,.3);color:#fff;padding:20px;width:100%;z-index:100}.FMPlayerNavTray .title{line-height:1.35;margin-top:0;padding-top:0}.FMPlayerNavTray .group{margin-bottom:30px}.FMPlayerNavTray .group:last-child{margin-bottom:0}.FMPlayerNavTray .FMPlayerClose{display:none;opacity:.4}.FMPlayerNavTray .FMPlayerClose:hover{opacity:1}@media only screen and (min-width:568px){.FMPlayerNavButton.FMPlayerNavrightMobile{display:none}.FMPlayerNav{display:flex}.FMPlayerNavleft{flex:1;overflow:hidden}.FMPlayerNavright{display:block;text-align:right}.FMPlayerNavButton{animation:nav-right .1s ease-in;display:inline-block;position:relative}.FMPlayerNavButton .button .text{display:none}.FMPlayerNavTray{min-width:350px;position:absolute;right:0;text-align:left;top:100%;width:auto}.FMPlayerNavTray .FMPlayerClose{display:inline}}@media only screen and (min-width:1024px){.FMPlayerNavButton .button .text{display:inline}}@-moz-keyframes nav-top{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes nav-top{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@-o-keyframes nav-top{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes nav-top{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@-moz-keyframes nav-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes nav-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}@-o-keyframes nav-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}@keyframes nav-right{0%{opacity:0;transform:translateX(5px)}to{opacity:1;transform:translateX(0)}}"),
                    f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerShortcutIcons .shortcut-item{margin:10px}.FMPlayerShortcutIcons .shortcut-key{background:#3e3e3e;border-radius:3px;color:#fff;display:inline-block;height:24px;line-height:24px;margin:5px;text-align:center;width:24px}.FMPlayerShortcutIcons .shortcut-key-space{padding:0 10px;width:auto}.FMPlayerShortcutIcons .shortcut-label{font-size:14px}"),
                    f('@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNavBreadcrumb{display:flex}.FMPlayerNavBreadcrumb .breadcrumb{animation:breadcrumb .3s ease-in;font-size:14px;max-width:40%}.FMPlayerNavBreadcrumb .breadcrumb:first-child{max-width:none;position:relative;z-index:1}.FMPlayerNavBreadcrumb .logo{fill:#adeaf2;background:#327483;display:block;height:40px;padding:12px 10px 8px;transition:fill .1s ease-in}.FMPlayerNavBreadcrumb .logo:hover{fill:#fff}.FMPlayerNavBreadcrumb .text{overflow:hidden;padding:10px 5px 10px 20px;text-overflow:ellipsis;transition:color .1s ease-in;white-space:nowrap}.FMPlayerNavBreadcrumb .link{display:block;position:relative;text-decoration:none}.FMPlayerNavBreadcrumb .arrow .text{background:#327483;color:#adeaf2;padding-left:10px}.FMPlayerNavBreadcrumb .arrow:after{border:20px solid transparent;border-left:10px solid #327483;border-right:0;content:"";height:0;left:100%;position:absolute;top:0;width:0;z-index:1}.FMPlayerNavBreadcrumb .breadcrumb+.breadcrumb .arrow .text{background:#23515b;color:#9bd2d9;padding-left:20px}.FMPlayerNavBreadcrumb .breadcrumb+.breadcrumb .arrow:after{border-left:10px solid #23515b;z-index:2}.FMPlayerNavBreadcrumb .breadcrumb .link:hover .text{color:#fff}@-moz-keyframes breadcrumb{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes breadcrumb{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@-o-keyframes breadcrumb{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}@keyframes breadcrumb{0%{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:translateX(0)}}');
                const ro = c()('svg.logo[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 206.7 145.8"]', [c()('path[d="M182.6 20c1.7-1.8 4.2-2.7 7.7-2.7 2.5 0 5 .4 7.4 1.1 3.2 1 6.2 2.3 9 4a335.5 335.5 0 0 0-14.8 49.7 357 357 0 0 0-4.6 24c-1 6.3-1.6 12.8-1.7 19.3 0 2.2.3 4.5 1 6.6a8 8 0 0 0 2.7 4.2 16.1 16.1 0 0 1-7.1 5.2 23.5 23.5 0 0 1-8.7 1.7c-4 .1-7.7-1.2-10.6-3.8-3-2.5-4.4-6.8-4.4-13 0-3 .4-6 .8-9.1a492 492 0 0 1 10.8-47.4l-1.3.1c-.4.2-.7.5-1 .9l-40.6 62a40.8 40.8 0 0 1-13 2.5c-2.4 0-4.8-.5-7-1.5a9.1 9.1 0 0 1-4.3-5.4 273.5 273.5 0 0 0 1.8-21.5 949 949 0 0 0 1.4-29.6v-5.9c0-.6-.2-1.1-.4-1.6a1.3 1.3 0 0 0-1.1-.4c-9 16.2-16.7 29.8-23.3 40.8a307.2 307.2 0 0 1-17.8 27A69 69 0 0 1 50 141.2c-4.1 3-8.1 4.5-12 4.4-4.2.1-8.2-1.6-11-4.7-3-3.1-5-7.4-6-12.8.7.2 1.4.3 2.2.3 4.7 0 9.3-2 13.7-6 5.1-4.5 9.7-9.7 13.7-15.3 4.7-6.4 9.5-13.7 14.4-21.8C69.9 77.3 75 69 80.7 60.6c2-3.4 4.6-6.6 7.5-9.4 2.2-2 5-3.1 8-3 2 0 4 .3 5.9.8 1.1.1 2.1-.7 2.1-1.9-.7-9-3.4-15.8-8-20.6-4.7-4.7-11.3-7-19.8-7-6.9-.1-13.6 1.6-19.6 4.8-6.1 3.3-11.5 7.7-15.9 13a64 64 0 0 0-14.5 40.5c0 5.1 1.6 8.5 4.7 10a20.6 20.6 0 0 1-6.9 6 17.5 17.5 0 0 1-8.4 2.2c-4.2.1-8.2-1.4-11.2-4.3S0 84.2 0 77.9c0-7 1.1-13.8 3.4-20.4A79.4 79.4 0 0 1 26.6 23a96.9 96.9 0 0 1 36-20.3C69.2 1 75.7 0 82.5 0c16.2 0 28.5 5 36.6 15.1 8.2 10 12.3 25.8 12.3 47.1a308.6 308.6 0 0 1-1 26.3c.5 0 1 0 1.4-.2.4-.2.7-.5.8-.8l15-21.9h-.1c5.1-7.2 23.7-34.6 28.8-41.9.2-.4 1.6-2.8 3.2-3.2h.4l1.2-.1h.2a5.8 5.8 0 0 0 1.4-.3z"]')]);
                var lo = {
                    ui: {
                        id: "navBreadcrumb",
                        mountClass: "FMPlayerNavBreadcrumb",
                        help: !0,
                        helpTitle: "Course Navigation",
                        helpDescription: "Jump between the player and the course Table of Contents."
                    },
                    view(e) {
                        const t = e.attrs.fmp;
                        return [c()(".breadcrumb", [c()(`a.link.arrow[href=${t.logoLink}]`, ro)]), t.playlist().slug ? c()(".breadcrumb", [c()(`a.link.arrow[href=${t.routeRoot()}]`, c()(".text", t.playlist().title))]) : null, t.lesson().slug ? c()(".breadcrumb", [c()("a.link[href=#]", {
                            onclick: e => {
                                e.preventDefault(),
                                    t.ui.lessonList && t.ui.lessonList.visible() ? t.lesson.scrollToCurrent() : t.uiSelect("lessonList", !0)
                            }
                        }, c()(".text", t.lesson().title))]) : null]
                    }
                };
                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNav .button.resources+.FMPlayerNavTray .resource{margin-bottom:10px}");
                const co = {
                    id: "navResourcesButton",
                    mountClass: "FMPlayerNavButton",
                    help: !0,
                    helpTitle: "Resources",
                    helpDescription: "Here you can find all the course resources and downloads that you'll need to get started."
                }
                    , po = {
                    oninit() {
                        this.notes = !0,
                            this.annotations = !0,
                            this.fileType = "html",
                            this.fileTypes = ["html", "txt", "yaml", "json"]
                    },
                    view(e) {
                        const t = e.attrs.fmp;
                        return c()(".group", [c()("h3.title", "Export Notes"), c()(".FMPlayerField", [c()("label", ["Include Notes", c()("input[type=checkbox]", {
                            checked: this.notes,
                            onchange: () => this.notes = !this.notes
                        })])]), c()(".FMPlayerField", [c()("label", ["Include Annotations", c()("input[type=checkbox]", {
                            checked: this.annotations,
                            onchange: () => this.annotations = !this.annotations
                        })])]), c()(".FMPlayerField", [c()("label", ["Format", c()("select", {
                            onchange: e => this.fileType = e.target.value
                        }, this.fileTypes.map((e => c()("option", {
                            value: e,
                            selected: this.fileType === e
                        }, "." + e))))])]), c()(`form[method=post][target=_blank][action="${t.assetRoot()}courses/${t.playlist().slug}/data"]`, [c()("input[type=hidden][name=notes]", {
                            value: this.notes
                        }), c()("input[type=hidden][name=annotations]", {
                            value: this.annotations
                        }), c()("input[type=hidden][name=fileType]", {
                            value: this.fileType
                        }), c()("button.FMPlayerButton.primary.submit[type=submit]", "Export")])])
                    }
                }
                    , uo = {
                    view(e) {
                        const t = e.attrs.resources;
                        return c()(".group", [c()("h3.title", "Course Resources"), t.map((e => c()(".resource", c()("a[target=_blank]", {
                            href: e.url
                        }, e.label))))])
                    }
                };
                var vo = {
                    ui: co,
                    onbeforeupdate(e) {
                        const t = e.attrs.fmp
                            , o = t.playlist();
                        this.resources = o.resources ? o.resources.slice() : [],
                            this.notes = Object.keys(t.notes()),
                        o.hasTranscript && this.resources.push({
                            label: "Course Transcript (.zip)",
                            url: `https://static.frontendmasters.com/assets/courses/${o.datePublished}-${o.slug}/transcripts.zip`
                        }),
                            this.isReady = this.resources.length || this.notes.length,
                            e.attrs.config.helpExcluded = !this.isReady
                    },
                    view(e) {
                        if (!this.isReady)
                            return;
                        const t = e.attrs.fmp
                            , o = t.uiNavActive === co.id;
                        return [c()("a.button.resources[href=#]", {
                            class: o ? "active" : "",
                            onclick: e => {
                                e.preventDefault(),
                                    t.uiNavActive = o ? "" : co.id
                            }
                        }, [c()('svg.icon[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 100 100"][fill="currentColor"]', [c()('path[d="M95 37H69.3V0H30.7v37H5l45 43 45-43zM5 90v10h90V90H5z"]')]), c()("span.text", "Resources")]), o ? c()(".FMPlayerNavTray", [this.resources.length ? c()(uo, {
                            resources: this.resources
                        }) : null, this.notes.length ? c()(po, {
                            fmp: t
                        }) : null]) : null]
                    }
                };
                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNav .bookmark svg{fill:#222;stroke:#5baec0;stroke-width:2px}.FMPlayerNav .bookmark.active{color:#f09e14}.FMPlayerNav .bookmark.active svg{fill:#f09e14;stroke:#f09e14}.FMPlayerNav .bookmark.active:hover svg,.FMPlayerNav .bookmark:hover svg{stroke:#fff}");
                var ho = {
                    ui: {
                        id: "navBookmarkButton",
                        mountClass: "FMPlayerNavButton",
                        help: !0,
                        helpTitle: "Bookmarks",
                        helpDescription: "Bookmark this course to easily find it later in our course catalog."
                    },
                    onbeforeupdate(e) {
                        const t = e.attrs.fmp;
                        this.isReady = t.playlist() && t.playlist().slug,
                            e.attrs.config.helpExcluded = !this.isReady
                    },
                    view(e) {
                        if (!this.isReady)
                            return;
                        const t = e.attrs.fmp;
                        return c()("a.button.bookmark[href=#]", {
                            class: t.bookmarked() ? "active" : "",
                            onclick(e) {
                                e.preventDefault(),
                                    t.bookmarked(!t.bookmarked())
                            }
                        }, [c()('svg.icon[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 24 24"]', [c()('path[d="M18 24l-6-5.3L6 24V0h12v24z"]')]), c()("span.text", t.bookmarked() ? "Bookmarked" : "Bookmark")])
                    }
                };
                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNav .button.settings svg{fill:none;height:22px;width:22px}.FMPlayerNav .button.settings:hover svg{fill:rgba(255,255,255,.5)}.FMPlayerFeatures{height:200px;position:relative}.FMPlayerFeatures input{display:none}.FMPlayerFeatures label{align-items:center;background:rgba(255,255,255,0);border:1px dashed rgba(255,255,255,.25);border-radius:4px;cursor:pointer;display:flex;flex-direction:column;font-size:14px;height:100%;justify-content:center;padding:10px;text-align:center;transition:background .1s ease-in,border .1s ease-in;width:100%}.FMPlayerFeatures label:hover{background:rgba(255,255,255,.05)}.FMPlayerFeatures .shortcut-item{align-items:center;display:flex;flex-wrap:wrap;font-size:13px;justify-content:center;margin-left:0;margin-right:0}.FMPlayerFeatures .shortcut-key{background:#555}.FMPlayerFeatures input:checked+label{background:rgba(255,255,255,.1);border:1px solid #4bc9da}.FMPlayerFeatures input:checked+label:hover{background:rgba(255,255,255,.05)}.FMPlayerFeatures .lessonList,.FMPlayerFeatures .notes{bottom:0;left:0;position:absolute;top:0;width:28%}.FMPlayerFeatures .notes{left:auto;right:0}.FMPlayerFeatures .lessonSummary{bottom:0;left:30%;position:absolute;right:30%}");
                const mo = {
                    id: "navSettingsButton",
                    mountClass: "FMPlayerNavButton",
                    help: !0,
                    helpTitle: "Player Layout",
                    helpDescription: "Configure your player experience – toggle controls, adjust speed, resolution, captions, and more."
                }
                    , fo = {
                    view(e) {
                        const t = e.attrs.fmp
                            , o = Object.values(t.ui).filter((e => e.settings));
                        return [o.length ? c()(".group", [c()("h3.title", "Player Layout"), c()(".FMPlayerFeatures.FMPlayerShortcutIcons", [o.map((e => c()(`.${e.id}`, [c()(`input#${e.id}[type=checkbox]`, {
                            checked: e.visible(),
                            onchange: () => {
                                t.uiSelect(e.id, !e.visible())
                            }
                        }), c()(`label[for=${e.id}]`, [e.settingsTitle, c()(".shortcut-item", [c()(".shortcut-key.shortcut-key-space", "shift"), c()(".shortcut-key", e.shortcut)])])])))])]) : null, t.showAnnotations ? c()(".FMPlayerField", [c()("label", ["Annotations", c()("input[type=checkbox]", {
                            checked: t.showAnnotations(),
                            onchange: () => t.showAnnotations(!t.showAnnotations())
                        })])]) : null, "function" == typeof t.enableFeedback ? c()(".FMPlayerField", [c()("label", ["Feedback Prompt", c()("input[type=checkbox]", {
                            checked: t.enableFeedback(),
                            onchange: () => t.enableFeedback(!t.enableFeedback())
                        })])]) : null]
                    }
                };
                var go = {
                    ui: mo,
                    view(e) {
                        const t = e.attrs.fmp
                            , o = t.uiNavActive === mo.id;
                        return [c()("a.button.settings[href=#]", {
                            class: o ? "active" : "",
                            onclick: e => {
                                e.preventDefault(),
                                    t.uiNavActive = o ? "" : mo.id
                            }
                        }, [c()("svg.icon[xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 24 24'][stroke='currentColor'][stroke-width='2'][stroke-linecap='round'][stroke-linejoin='round']", [c()("rect[x='3'][y='3'][width='18'][height='18'][rx='2']"), c()("path[d='M3 9h18M9 21V9']")]), c()("span.text", "Layout")]), o ? c()(".FMPlayerNavTray", [c()(fo, {
                            fmp: t
                        })]) : null]
                    }
                };
                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNavHelpMenu .FMPlayerNavTray{min-width:280px;padding:0}.FMPlayerNavHelpMenu .FMPlayerNavTray ul{list-style:none;margin:0;padding:0}.FMPlayerNavHelpMenu .FMPlayerNavTray a{display:block;padding:10px 20px;text-decoration:none}.FMPlayerNavHelpMenu .FMPlayerNavTray a:hover{background:#5baec0;color:#fff}");
                const yo = {
                    id: "navHelp",
                    mountClass: "FMPlayerNavButton FMPlayerNavHelpMenu",
                    menuItems: []
                };
                var bo = {
                    ui: yo,
                    view(e) {
                        if (!yo.menuItems.length)
                            return;
                        const t = e.attrs.fmp
                            , o = t.uiNavActive === yo.id;
                        return [c()("a.button[href=#]", {
                            onclick(e) {
                                if (e.preventDefault(),
                                1 === yo.menuItems.length) {
                                    const e = yo.menuItems[0].ui.id;
                                    t.uiNavActive = t.uiNavActive === e ? "" : e
                                } else
                                    t.uiNavActive = o ? "" : yo.id
                            }
                        }, [c()('svg.icon[xmlns="http://www.w3.org/2000/svg"][viewBox="0 0 100 100"][fill="currentColor"]', [c()('path[d="M54.3 61.5H44c0-3.8.5-6.8 1.4-9 .9-2.2 2.6-4.4 5-6.6 2.4-2.2 4-4 4.9-5.3a8.3 8.3 0 0 0 1.2-4.3c0-4.5-2.1-6.8-6.3-6.8-2 0-3.6.6-4.8 1.9a7.2 7.2 0 0 0-1.9 5H31.8c0-5.1 1.7-9.1 5-12 3.3-3 7.7-4.4 13.4-4.4s10.1 1.4 13.2 4.1c3.2 2.8 4.8 6.7 4.8 11.7 0 2.3-.5 4.5-1.6 6.5-1 2-2.8 4.3-5.3 6.7L58 52.1a11 11 0 0 0-3.5 7zM42.8 73.9a6 6 0 0 1 1.9-4.5 6.5 6.5 0 0 1 4.7-1.7c1.9 0 3.4.5 4.7 1.7a6 6 0 0 1 1.8 4.5c0 1.7-.6 3.2-1.8 4.4a6.5 6.5 0 0 1-4.7 1.7c-2 0-3.6-.6-4.8-1.7a5.8 5.8 0 0 1-1.8-4.4zM50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0z"]')]), c()("span.text", "Help")]), o ? c()(".FMPlayerNavTray", [c()("ul", yo.menuItems.map((e => c()("li", [c()(`a.${e.ui.id}[href=#]`, {
                            onclick(o) {
                                o.preventDefault(),
                                    t.uiNavActive = e.ui.id
                            }
                        }, e.ui.title)]))))]) : null]
                    }
                };
                f('@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerComponent.help-active,.FMPlayerComponent .help-active,.FMPlayerComponent.help-hovered,.FMPlayerComponent .help-hovered{position:relative}.FMPlayerComponent.help-active:after,.FMPlayerComponent .help-active:after,.FMPlayerComponent.help-hovered:after,.FMPlayerComponent .help-hovered:after{bottom:0;box-shadow:inset 0 0 2px 2px #4bc9da;content:"";left:0;position:absolute;right:0;top:0;z-index:1001}.FMPlayerComponent.help-active:after,.FMPlayerComponent .help-active:after{box-shadow:inset 0 0 2px 2px #f09e14}.FMPlayerHelpOverlay,.FMPlayerHelpOverlayBody{animation:fade-in .3s ease-in;background:rgba(0,0,0,.6);bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:1000}.FMPlayerHelpOverlayBody{background:none;display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:10px;z-index:1002}.FMPlayerHelpOverlayBody .hotspot,.FMPlayerHelpOverlayBody .pulse{background:#e6e6e6;border-radius:50%;cursor:pointer;height:20px;position:absolute;width:20px}.FMPlayerHelpOverlayBody .pulse{animation:pulse-fade 2s ease-out infinite;background:none;border:3px solid #e6e6e6}.FMPlayerHelpOverlayBody .hotspot.hover{background:#5baec0}.FMPlayerHelpOverlayBody .hotspot.hover .pulse{border-color:#5baec0}.FMPlayerHelpOverlayBody .hotspot.active{background:#f09e14}.FMPlayerHelpOverlayBody .hotspot.active .pulse{border-color:#f09e14}.FMPlayerHelpOverlayBody .details-body,.FMPlayerHelpOverlayBody .details-top{margin:0 auto;max-width:500px;overflow:hidden;position:relative;width:100%;z-index:1}.FMPlayerHelpOverlayBody .next,.FMPlayerHelpOverlayBody .previous{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;text-align:center;text-decoration:none;top:0;width:50px}.FMPlayerHelpOverlayBody .next:before,.FMPlayerHelpOverlayBody .previous:before{border-color:transparent #fff transparent transparent;border-style:solid;border-width:40px 12px 40px 0;content:"";height:0;opacity:.2;width:0}.FMPlayerHelpOverlayBody .next:hover:before,.FMPlayerHelpOverlayBody .previous:hover:before{opacity:.5}.FMPlayerHelpOverlayBody .next{left:auto;right:0}.FMPlayerHelpOverlayBody .next:before{border-color:transparent transparent transparent #fff;border-width:40px 0 40px 12px}.FMPlayerHelpOverlayBody .FMPlayerClose{font-size:200%;margin-bottom:5px}.FMPlayerHelpOverlayBody .details-body{background:rgba(0,0,0,.9);border:1px solid #3e3e3e;height:100%;line-height:1.5;max-height:500px;overflow-y:auto;padding:30px;text-align:center}.FMPlayerHelpOverlayBody .details-image,.FMPlayerHelpOverlayBody .details-shortcuts{display:flex;margin:0 auto;max-width:80%}.FMPlayerHelpOverlayBody .details-shortcuts{flex-wrap:wrap;justify-content:space-between;justify-content:space-evenly;min-height:250px}.FMPlayerHelpOverlayBody .details-image{flex-direction:column;height:200px;overflow:hidden;position:relative}@media only screen and (min-width:768px){.FMPlayerHelpOverlayBody .details-image{height:250px}}.FMPlayerHelpOverlayBody .details-image img{margin:auto;width:auto}.FMPlayerHelpOverlayBody .details-image:after{background:linear-gradient(transparent,#000);bottom:-1px;content:"";height:33%;left:0;position:absolute;width:100%}.FMPlayerHelpOverlayBody .details-title{color:#fff;font-weight:400;margin-bottom:10px}.FMPlayerHelpOverlayBody .details-description{min-height:72px}.FMPlayerHelpOverlayBody .details-hotspots{margin-top:20px;padding-left:20px;padding-right:20px}.FMPlayerHelpOverlayBody .details-hotspots .hotspot{display:inline-block;margin:0 5px;position:static}@-moz-keyframes pulse-fade{0%{opacity:1;transform:scale(1)}60%{opacity:0;transform:scale(2)}to{opacity:0;transform:scale(2)}}@-webkit-keyframes pulse-fade{0%{opacity:1;transform:scale(1)}60%{opacity:0;transform:scale(2)}to{opacity:0;transform:scale(2)}}@-o-keyframes pulse-fade{0%{opacity:1;transform:scale(1)}60%{opacity:0;transform:scale(2)}to{opacity:0;transform:scale(2)}}@keyframes pulse-fade{0%{opacity:1;transform:scale(1)}60%{opacity:0;transform:scale(2)}to{opacity:0;transform:scale(2)}}');
                var jo = {
                    view: () => c()(".FMPlayerShortcutIcons.details-shortcuts", [c()(".shortcut-item", [c()(".shortcut-key", "←"), c()(".shortcut-key", "→"), c()(".shortcut-label", "Seek")]), c()(".shortcut-item", [c()(".shortcut-key", "↑"), c()(".shortcut-key", "↓"), c()(".shortcut-label", "Volume")]), c()(".shortcut-item", [c()(".shortcut-key", "M"), c()(".shortcut-label", "Mute")]), c()(".shortcut-item", [c()(".shortcut-key", "Q"), c()(".shortcut-label", "Quality")]), c()(".shortcut-item", [c()(".shortcut-key", "S"), c()(".shortcut-label", "Speed")]), c()(".shortcut-item", [c()(".shortcut-key", "F"), c()(".shortcut-label", "Fullscreen")]), c()(".shortcut-item", [c()(".shortcut-key", "C"), c()(".shortcut-label", "Captions")]), c()(".shortcut-item", [c()(".shortcut-key", "H"), c()(".shortcut-label", "Help")]), c()(".shortcut-item", [c()(".shortcut-key.shortcut-key-space", "shift"), "+", c()(".shortcut-key", "←"), c()(".shortcut-key", "↓"), c()(".shortcut-key", "→"), c()(".shortcut-label", "Toggle Player UI")]), c()(".shortcut-item", [c()(".shortcut-key.shortcut-key-space", "space"), c()(".shortcut-label", "Play / pause")])])
                }
                    , ko = {
                    view: e => c()("a.FMPlayerClose.vjs-icon-cancel[href=#]", {
                        onclick(t) {
                            t.preventDefault(),
                            "function" == typeof e.attrs.handler && e.attrs.handler(t)
                        }
                    })
                }
                    , xo = {
                    oninit(e) {
                        const t = e.attrs.fmp;
                        this.parent = e.attrs.parent,
                            this.parent.components.shortcuts.helpExcluded = "mobile" === t.uiViewportSize();
                        const o = Object.keys(this.parent.components).filter((e => !this.parent.components[e].helpExcluded));
                        this.components = o.map((e => this.parent.components[e])),
                            this.active = this.components[0],
                            this.hover = null,
                            this.highlightActive = () => {
                                this.components.forEach((e => {
                                        e.helpEl && (e === this.active ? (e.helpEl.classList.add("help-active"),
                                        "function" != typeof e.visible || e.visible() || t.uiSelect(e.id, !0)) : e.helpEl.classList.remove("help-active"))
                                    }
                                ))
                            }
                            ,
                            this.highlightActive(),
                            wo(this.active),
                            this.components.forEach(wo),
                            t.uiTargets.nav.querySelector(".FMPlayerNavrightMobile").classList.add("active")
                    },
                    oncreate(e) {
                        this.swipeArea = function (e, t) {
                            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            o.distanceMin = o.distanceMin || 50,
                                o.durationMin = o.durationMin || 100,
                                o.durationMax = o.durationMax || 1e3,
                                e.addEventListener("touchstart", a, {
                                    passive: !0
                                }),
                                e.addEventListener("touchend", r);
                            let s = null
                                , n = null
                                , i = null;

                            function a(e) {
                                s = Date.now(),
                                    n = e.touches[0].clientX,
                                    i = e.touches[0].clientY
                            }

                            function r(e) {
                                const a = n - e.changedTouches[0].clientX
                                    , r = i - e.changedTouches[0].clientY
                                    , l = Math.abs(a)
                                    , c = Math.abs(r)
                                    , d = Date.now() - s
                                    , p = o.durationMin > d || d > o.durationMax;
                                let u, v;
                                s = n = i = null,
                                p || Math.max(l, c) < o.distanceMin || (l > c ? (u = a > 0 ? "left" : "right",
                                    v = l) : (u = r > 0 ? "up" : "down",
                                    v = c),
                                    "function" == typeof t[u] ? t[u](e, v) : "function" == typeof t && t(e, u, v))
                            }

                            return {
                                destroy: function () {
                                    e.removeEventListener("touchstart", a, {
                                        passive: !0
                                    }),
                                        e.removeEventListener("touchend", r)
                                }
                            }
                        }(e.dom, {
                            left: () => {
                                const e = this.components.indexOf(this.active);
                                this.active = this.components[e - 1] || this.components[this.components.length - 1],
                                    this.highlightActive(),
                                    c().redraw()
                            }
                            ,
                            right: () => {
                                const e = this.components.indexOf(this.active);
                                this.active = this.components[e + 1] || this.components[0],
                                    this.highlightActive(),
                                    c().redraw()
                            }
                        })
                    },
                    onremove(e) {
                        e.attrs.fmp.uiTargets.nav.querySelector(".FMPlayerNavrightMobile").classList.remove("active"),
                            this.active = {},
                            this.components.forEach((e => {
                                    e.helpEl && (e.helpEl.classList.remove("help-active"),
                                        e.helpEl.classList.remove("help-hovered"))
                                }
                            )),
                            this.swipeArea.destroy()
                    },
                    view(e) {
                        const t = e.attrs.fmp
                            , o = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                            , s = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                            , n = Ze(".hotspot", ((e, t) => {
                                const o = this.components.map((e => e.id)).indexOf(t.dataset.component);
                                this.hover = this.components[o],
                                this.hover.helpEl && this.hover.helpEl.classList.add("help-hovered")
                            }
                        ))
                            , i = Ze(".hotspot", (() => {
                                this.hover.helpEl && this.hover.helpEl.classList.remove("help-hovered"),
                                    this.hover = null
                            }
                        ));
                        return c()(".FMPlayerHelpOverlayBody", {
                            onclick: Ze(".hotspot", ((e, t) => {
                                    e.preventDefault();
                                    const o = this.components.map((e => e.id)).indexOf(t.dataset.component);
                                    this.active = this.components[o],
                                        this.highlightActive()
                                }
                            )),
                            onmouseover: e => {
                                e.redraw = !1,
                                    n(e)
                            }
                            ,
                            onmouseout: e => {
                                e.redraw = !1,
                                    i(e)
                            }
                        }, [c()(".details-top", [c()(ko, {
                            handler: () => t.uiNavActive = ""
                        })]), c()(".details-body", [this.active.helpView ? c()(this.active.helpView) : this.active.helpImage ? c()(".details-image", [c()("img", {
                            src: this.active.helpImage
                        })]) : null, c()("h2.details-title", this.active.helpTitle), c()(".details-description", this.active.helpDescription), this.active === this.components[0] ? null : c()("a.previous[href=#]", {
                            onclick: () => {
                                const e = this.components.indexOf(this.active);
                                this.active = this.components[e - 1] || this.components[this.components.length - 1],
                                    this.highlightActive()
                            }
                        }), this.active === this.components[this.components.length - 1] ? null : c()("a.next[href=#]", {
                            onclick: () => {
                                const e = this.components.indexOf(this.active);
                                this.active = this.components[e + 1] || this.components[0],
                                    this.highlightActive()
                            }
                        }), c()(".details-hotspots", this.components.map((e => {
                                const t = [];
                                return this.active === e ? t.push("active") : this.hover === e && t.push("hover"),
                                    c()("a.hotspot[href=#]", {
                                        class: t.join(" "),
                                        "data-component": e.id
                                    })
                            }
                        )))]), this.components.map((e => {
                                const t = e.helpEl;
                                if (!t)
                                    return;
                                const n = t.getBoundingClientRect();
                                if (!n.width && !n.height)
                                    return;
                                const i = (n.left + n.right - 20) / 2
                                    , a = (n.top + n.bottom - 20) / 2
                                    , r = `left:${Math.round(i / o * 100)}%`
                                    , l = `top:${Math.round(a / s * 100)}%`;
                                return [c()("a.hotspot[href=#]", {
                                    style: `${r};${l}`,
                                    class: this.active === e ? "active" : this.hover === e ? "hover" : "",
                                    "data-component": e.id
                                }, [c()(".pulse")])]
                            }
                        ))])
                    }
                };

                function wo(e) {
                    e && e.helpImage && !e.helpImagePreloaded && ((new Image).src = e.helpImage,
                        e.helpImagePreloaded = !0)
                }

                const Mo = {
                    id: "navHelpOverlay",
                    title: "Tour player features"
                }
                    , Po = {
                    ui: Mo,
                    oninit(e) {
                        const t = e.attrs.fmp;
                        t.ui.navHelp.menuItems.push(Po),
                            this.components = {
                                shortcuts: {
                                    id: "shortcuts",
                                    helpView: jo,
                                    helpTitle: "Keyboard Shortcuts",
                                    helpDescription: "Control the video player from the comfort of the keyboard."
                                }
                            },
                            t.video.one("fmp:allpluginsloaded", (() => {
                                    Object.keys(t.ui).forEach((e => {
                                            const o = t.ui[e];
                                            o.help && (o.helpEl = o.helpSelector && o.mountEl.querySelector(o.helpSelector),
                                            t.playerAssets[o.id] && (o.helpImage = t.playerAssets[o.id]),
                                                o.helpEl = o.helpEl || o.mountEl,
                                                this.components[e] = o)
                                        }
                                    )),
                                    "function" == typeof t.showAnnotations && (this.components.annotations = {
                                        id: "annotations",
                                        helpImage: t.playerAssets.annotations,
                                        helpTitle: "Video Annotations",
                                        helpDescription: "Helpful, inline messages with additional information, links, and copyable code snippets."
                                    })
                                }
                            )),
                            t.addShortcut("h", (e => {
                                    e.uiNavActive = e.uiNavActive === Mo.id ? "" : Mo.id,
                                        c().redraw()
                                }
                            ))
                    },
                    view(e) {
                        const t = e.attrs.fmp;
                        if (t.uiNavActive === Mo.id)
                            return [c()(".FMPlayerHelpOverlay"), c()(xo, {
                                fmp: t,
                                parent: this
                            })]
                    }
                };
                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNavHelpMenu .navHelpFeedback{position:relative}.FMPlayerNavHelpMenu .navHelpFeedback:after{color:#f09e14;content:\"beta\";font-size:12px;margin-left:3px;vertical-align:super}.FMPlayerNavHelpMenu .navHelpFeedback:hover:after{color:#fff}.FMPlayerNavFeedback{top:40px}.FMPlayerNavFeedback .title{font-size:14px;margin-bottom:20px}.FMPlayerNavFeedback .lesson{font-weight:700}.FMPlayerNavFeedback .time{font-size:14px}.FMPlayerNavFeedback textarea{border:0;border-radius:5px;color:#3e3e3e;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;line-height:1.4;margin-top:20px;padding:10px;resize:vertical;width:100%}.FMPlayerNavFeedback .form-meta{color:#8a8a8a;display:flex;font-size:13px;justify-content:space-between;margin-bottom:10px}.FMPlayerNavFeedback .exceeded{color:#c02d28}.FMPlayerNavFeedback .instead{display:inline-block;float:right;font-size:14px;margin-top:20px;text-decoration:none}.FMPlayerNavFeedback .hidden{display:none}.FMPlayerFloatingWrap{align-items:center;display:table;height:100%;max-height:100%;pointer-events:none;position:absolute;right:0;width:100%}.FMPlayerFloatingCentering{display:table-cell;vertical-align:middle}.FMPlayerFloatingAspectRatio{aspect-ratio:16/9;max-height:100%;max-width:100%;position:relative}.FMPlayerFloatingMenu{pointer-events:auto;position:absolute;right:20px;top:20px;z-index:11}.FMPlayerFloatingButton{align-items:center;background:transparent;border-radius:8px;color:#ddd!important;display:flex;opacity:0;text-decoration:none;transition:background 1s,opacity 1s}.FMPlayerFloatingButton.disabled{display:none}.FMPlayerFloatingButton .icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255,255,255)' viewBox='0 0 32 32'%3E%3Cpath d='M26 6v2L6 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2l2 1v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1l6 1v2h2V6Zm-8 18h-8v-3l8 1ZM6 18v-4l20-4v12Z'/%3E%3Cpath style='fill:none' d='M0 0h32v32H0z'/%3E%3C/svg%3E\") no-repeat 50%,radial-gradient(rgba(0,0,0,.3),transparent 70%) no-repeat 50%;background-size:65%,contain;height:40px;width:40px}.FMPlayerFloatingButton .label{font-size:14px;opacity:0;overflow:hidden;text-align:right;white-space:nowrap;width:0}.vjs-user-active .FMPlayerFloatingButton{opacity:.5;transition:background .3s,opacity .3s}.vjs-user-active .FMPlayerFloatingButton .label{transition:opacity .5s,width .1s .25s}.FMPlayerFloatingButton:hover{background:rgba(50,50,50,.85);opacity:1;transition:background .1s,opacity .1s}.FMPlayerFloatingButton:hover .label{opacity:1;transition:opacity .1s .1s,width .1s;width:115px}.vjs-modal-open .FMPlayerFloatingButton{display:none}");
                const Fo = {
                    id: "navHelpFeedback",
                    mountClass: "FMPlayerNavButton",
                    title: "Give feedback about lesson"
                }
                    , Ao = {
                    ui: Fo,
                    oninit(e) {
                        const t = e.attrs.fmp;
                        t.ui.navHelp.menuItems.push(Ao),
                        "function" != typeof t.enableFeedback && (t.addProp("enableFeedback", le.get("fmp.video.feedback", !0)),
                            t.enableFeedback.subscribe((e => {
                                    le.set("fmp.video.feedback", e)
                                }
                            ))),
                            function (e) {
                                const t = document.createElement("div");
                                t.className = "FMPlayerFloatingWrap",
                                    t.insertAdjacentHTML("afterbegin", `\n<div class="FMPlayerFloatingCentering">\n  <div class="FMPlayerFloatingAspectRatio">\n    <div class="FMPlayerFloatingMenu">\n      <a href="#" class="FMPlayerFloatingButton ${e.enableFeedback() ? "" : " disabled"}">\n        <div class='label'>Leave Feedback</div> <div class='icon'></div>\n      </a>\n    </div>\n  </div>\n</div>\n`);
                                const o = t.querySelector(".FMPlayerFloatingButton");
                                o.addEventListener("click", (() => function (e) {
                                    e.enableFeedback() && (e.video.isFullscreen() && e.video.exitFullscreen(),
                                        e.video.pause(),
                                        e.uiNavActive = "navHelpFeedback",
                                        e.uiTargets.navbutton.classList.add("active"),
                                        c().redraw())
                                }(e))),
                                    e.enableFeedback.subscribe((e => {
                                            e ? o.classList.remove("disabled") : o.classList.add("disabled")
                                        }
                                    )),
                                    e.video.el().appendChild(t)
                            }(t)
                    },
                    view(e) {
                        const {fmp: t} = e.attrs;
                        if (t.uiNavActive === Fo.id)
                            return c()(".FMPlayerNavTray.FMPlayerNavFeedback", [c()(ko, {
                                handler: () => t.uiNavActive = ""
                            }), c()(So, {
                                fmp: t
                            })])
                    }
                };

                function So(e) {
                    const {fmp: t} = e.attrs;
                    let o, s = !0;
                    const n = 1e3;
                    let i = 0
                        , a = 0;
                    const r = p()((() => {
                            a = Math.floor(t.video.currentTime()),
                                c().redraw()
                        }
                    ), 1e3);
                    return r(),
                        {
                            oncreate() {
                                t.video.pause(),
                                    t.video.on("timeupdate", r)
                            },
                            onremove() {
                                t.video.off("timeupdate", r)
                            },
                            view() {
                                const e = t.lesson().title;
                                return [c()("form", {
                                    class: s ? "" : "hidden",
                                    onsubmit(e) {
                                        e.preventDefault();
                                        const i = new FormData(e.target).get("message");
                                        i && i.length <= n && (t.sync.add({
                                            level: t.sync.levels.USER,
                                            command: "save-feedback",
                                            data: {
                                                courseSlug: t.playlist().slug,
                                                lessonHash: t.lesson().hash,
                                                lessonSeconds: a,
                                                body: i,
                                                vsId: t.vsId()
                                            }
                                        }),
                                            s = !1,
                                            o = "Thanks for your message! We'll forward you any responses by email.")
                                    }
                                }, [c()(".title", "Post a question or feedback about:"), c()(".lesson", e), c()(".time", ["Current time: ", Xe(a)]), c()("textarea[rows=6][name='message'][placeholder='Basic markdown is supported: **bold** _em_ [link](url)']", {
                                    oninput(e) {
                                        i = e.target.value.length
                                    }
                                }), c()(".form-meta", [c()(".remaining", {
                                    class: i > n ? "exceeded" : ""
                                }, n - i + " characters remaining")]), c()(".bottom", [c()("button.FMPlayerButton.primary.submit[type=submit]", {
                                    disabled: i > n
                                }, "Send"), window.Intercom ? c()("a.instead[href=#]", {
                                    onclick(e) {
                                        e.preventDefault(),
                                            t.uiNavActive = "navHelpIntercom"
                                    }
                                }, "Ask an account question instead") : null])]), c()(".form-message", {
                                    class: o ? "" : "hidden"
                                }, o)]
                            }
                        }
                }

                window.intercomSettings = window.intercomSettings || {},
                    window.intercomSettings.hide_default_launcher = !0;
                const zo = window.intercomSettings.app_id ? window.intercomSettings.app_id + "@intercom-mail.com" : "support@frontendmasters.com"
                    , Lo = {
                    id: "navHelpIntercom",
                    title: "Contact support"
                };
                let Eo = "";
                const Co = {
                    ui: Lo,
                    oninit(e) {
                        e.attrs.fmp.ui.navHelp.menuItems.push(Co)
                    },
                    view(e) {
                        const {fmp: t} = e.attrs
                            , o = t.uiNavActive === Eo;
                        Eo = t.uiNavActive,
                        t.uiNavActive !== Lo.id || o || (window.Intercom ? Intercom("show") : window.location.href = `mailto:${zo}`)
                    }
                };
                f("@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@media only screen and (min-width:568px){.FMPlayerNavSearch form{align-items:center;display:flex}}.FMPlayerNavSearch input{background:none;border:none;color:#fff;display:block;flex:1;font-size:16px;outline:none;padding-left:10px;padding-right:10px}.FMPlayerNavSearch .clear{cursor:pointer;height:20px;opacity:.5;padding-left:10px;padding-right:10px;transition:opacity .3s,visibility .3s}.FMPlayerNavSearch .clear:hover{opacity:.75}.FMPlayerNavSearch input:placeholder-shown+.clear{opacity:0;visibility:hidden}.FMPlayerNavSearch .FMPlayerClose{margin-bottom:0;margin-left:10px;margin-right:10px}.FMPlayerNav.search-active form{align-items:center;display:flex}.FMPlayerNav.search-active .FMPlayerNavButton,.FMPlayerNav.search-active .FMPlayerNavleft{display:none}.FMPlayerNav.search-active .FMPlayerNavright{display:block;width:100%}.FMPlayerNav.search-active .FMPlayerNavSearch{display:block}@media only screen and (min-width:768px){.FMPlayerNav.search-active .FMPlayerNavleft{display:block}.FMPlayerNav.search-active .FMPlayerNavright{max-width:600px}}");
                var To = {
                    ui: {
                        id: "navSearch",
                        mountClass: "FMPlayerNavButton FMPlayerNavSearch"
                    },
                    view(e) {
                        const t = e.attrs.fmp;
                        return c()("a.button.search[href=#]", {
                            onclick(e) {
                                e.preventDefault(),
                                    t.searchHandler(t)
                            }
                        }, [c()('svg.icon[xmlns="http://www.w3.org/2000/svg"][viewBox="2 2 22 22"][stroke-width="2"][fill="none"][stroke="currentColor"]', [c()('path[stroke-linecap="round"][stroke-linejoin="round"][d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"]')]), c()("span.text", "Search")])
                    }
                };

                function Ro(e, t) {
                    if (e.searchHandler = t.handler,
                    "function" != typeof e.searchHandler)
                        throw new Error("FMPlayer: Search handler must be defined");
                    e.addUI(To, "navright")
                }

                f('.FMPlayerLessonList .lesson{zoom:1}.FMPlayerLessonList .lesson:after,.FMPlayerLessonList .lesson:before{content:" ";display:table}.FMPlayerLessonList .lesson:after{clear:both}.FMPlayerLessonList ul{list-style:none;list-style-image:none;padding-left:0}@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerLessonList ul{flex:1;font-size:13px;margin:0;padding:0}.FMPlayerLessonList li{position:relative}.FMPlayerLessonList .lesson-group{background:#333;margin:5px 0;padding:10px}.FMPlayerLessonList .thumbnail{background:#111;float:left;height:45px;margin-right:10px;width:80px}.FMPlayerLessonList .thumbnail img{opacity:0}.FMPlayerLessonList .thumbnail .lazyloaded{opacity:.5;transition:opacity .3s ease-in}.FMPlayerLessonList .text{overflow:hidden}.FMPlayerLessonList .timestamp{opacity:.6}.FMPlayerLessonList .lesson{color:#ccc;display:block;padding:5px 10px;text-decoration:none;transition:color .1s ease-in}.FMPlayerLessonList .lesson.active,.FMPlayerLessonList .lesson:hover{color:#fff}.FMPlayerLessonList .lesson.active .lazyloaded,.FMPlayerLessonList .lesson:hover .lazyloaded{opacity:1}.FMPlayerLessonList .lesson.active{background:#327483}.FMPlayerLessonList .lesson.disabled{color:#8a8a8a;font-style:italic}.FMPlayerLessonList .progress{background:#111;bottom:0;left:0;position:absolute;top:0;transition:width .1s ease-in;width:2px}.FMPlayerLessonList .lesson:hover .progress{width:4px}.FMPlayerLessonList .started .progress{background:#327483}.FMPlayerLessonList .completed .progress{background:#adeaf2}.FMPlayerLessonList .progress-bar{background:#adeaf2;height:0;width:100%}.FMPlayerLessonList .active .progress,.FMPlayerLessonList .active .progress-bar{background:#fff;width:4px}.FMPlayerLessonList .disk{background:rgba(0,0,0,.3);border-radius:12px;color:#ddd;cursor:pointer;height:24px;line-height:24px;position:absolute;text-align:center;top:10px;width:24px}.FMPlayerLessonList .disk:hover{background:rgba(0,0,0,.6);color:#fff}.FMPlayerLessonList .lesson.active .disk,.FMPlayerLessonList .lesson:hover .disk{background:rgba(0,0,0,.5)}.FMPlayerLessonList .lesson.active .disk:hover,.FMPlayerLessonList .lesson:hover .disk:hover{background:rgba(0,0,0,.8)}.FMPlayerLessonList .mark{left:15px}.FMPlayerLessonList .mark:before{border-bottom:2px solid #ccc;border-right:2px solid #ccc;content:"";display:block;height:12px;margin:5px auto 0;transform:rotate(45deg);width:7px}.FMPlayerLessonList .mark:hover:before{border-color:#fff}.FMPlayerLessonList .completed .mark{opacity:1;visibility:visible}.FMPlayerLessonList .completed .mark:before{border-color:#4bc9da}.FMPlayerLessonList .hint{background:rgba(0,0,0,.8);border-radius:5px;color:#aaa;font-size:13px;left:15px;line-height:1.5;opacity:0;padding:5px;position:absolute;top:40px;transition:opacity .1s ease-in,visibility .1s ease-in;visibility:none;z-index:20}.FMPlayerLessonList .disk:hover+.hint{opacity:1;visibility:visible}@media only screen and (min-width:568px){.FMPlayerLessonList .disk{opacity:0;transition:opacity .1s ease-in,visibility .1s ease-in;visibility:none}.FMPlayerLessonList li:hover .disk{visiblility:visible;opacity:1}}');
                const No = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                var Bo = {
                    view(e) {
                        const t = e.attrs.fmp
                            , o = e.attrs.item
                            , s = t.playlist()
                            , n = s.lessonHashes[o]
                            , i = s.lessonData[n]
                            , a = t.progress && t.progress()[n]
                            , r = a && "function" == typeof a.status;
                        if (i.disabled)
                            return c()(`li.item-${i.slug}`, [c()(".lesson.disabled", [i.thumbnail ? c()(".thumbnail", [c()("img.lazyload", {
                                "data-src": i.thumbnail,
                                src: No
                            })]) : null, c()(".text", [c()(".title", i.title), c()(".timestamp", i.timestamp)])])]);
                        {
                            let e = i.slug === t.lesson().slug ? "active" : "";
                            return r && a.status() && (e += " " + a.status()),
                                c()(`li.item-${i.slug}`, [c()(`a.lesson[href=${t.routeRoot()}${i.slug}/]`, {
                                    class: e,
                                    onclick(e) {
                                        e.preventDefault(),
                                            t.route(`${t.routeRoot()}${i.slug}/`)
                                    }
                                }, [i.thumbnail ? c()(".thumbnail", [c()("img.lazyload", {
                                    "data-src": i.thumbnail,
                                    src: No
                                })]) : null, c()(".text", [c()(".title", i.title), c()(".timestamp", i.timestamp)]), r ? [c()("a.disk.mark[href=#]", {
                                    onclick(e) {
                                        e.preventDefault(),
                                            e.stopPropagation(),
                                            "completed" !== a.status() ? a.status("completed", !0) : a.lastPercent ? a.status("started", !0) : a.status("", !0)
                                    }
                                }), c()(".hint", "Mark as " + ("completed" === a.status() ? "new" : "done")), c()(".progress", [c()(".progress-bar", {
                                    style: a.lastPercent ? `height: ${Math.ceil(100 * a.lastPercent)}%;` : ""
                                })])] : null])])
                        }
                    }
                };
                let Io, qo, _o = {};
                const Oo = {
                    oninit(e) {
                        e.attrs.fmp.lesson.subscribe(c().redraw)
                    },
                    oncreate(e) {
                        const t = e.attrs.fmp
                            , o = e.dom;
                        t.lesson.subscribe((() => Uo({
                            el: o,
                            fmp: t
                        }))),
                            t.lesson.scrollToCurrent = () => Uo({
                                el: o,
                                fmp: t
                            }),
                            qo = a()((() => Uo({
                                el: o,
                                fmp: t
                            })), 200, {
                                maxWait: 2e3
                            }),
                            Io = a()((() => function (e) {
                                let {el: t, fmp: o} = e;
                                _o = o.playerAssets || {};
                                const s = Array.prototype.slice.call(t.querySelectorAll(".lazyload"))
                                    , n = t.scrollTop
                                    , i = n + t.clientHeight;
                                s.some((e => {
                                        const t = e && e.offsetParent;
                                        if (t)
                                            return t.offsetTop >= n && e.dataset.src && (e.addEventListener("load", $o),
                                                e.addEventListener("error", Do),
                                                e.src = e.dataset.src,
                                                delete e.dataset.src,
                                                e.classList.remove("lazyload")),
                                            t.offsetTop >= i || void 0
                                    }
                                ))
                            }({
                                el: o,
                                fmp: t
                            })), 200, {
                                maxWait: 2e3
                            }),
                            o.addEventListener("scroll", Io)
                    },
                    view(e) {
                        const t = e.attrs.fmp;
                        let o = [];
                        return t.playlist().lessonElements && (o = t.playlist().lessonElements.map((e => "string" == typeof e ? c()("li.lesson-group", {
                            key: e
                        }, e) : c()(Bo, {
                            fmp: t,
                            item: e,
                            key: e,
                            oncreate() {
                                Io(),
                                    qo()
                            }
                        })))),
                            c()("ul.FMPlayerScrolling[data-fmplayer-searchable]", o)
                    }
                };
                var Ho = {
                    ui: {
                        id: "lessonList",
                        mountTag: "nav",
                        mountClass: "FMPlayerLessonList FMPlayerSidebar",
                        onBeforeMount(e) {
                            e.addShortcut("arrowleft+shift", (e => {
                                    e.uiSelect("lessonList", !e.ui.lessonList.visible())
                                }
                            ))
                        },
                        constraints: {
                            mobile: 1,
                            tablet: 1
                        },
                        settings: !0,
                        settingsTitle: "Table of Contents",
                        shortcut: "←",
                        help: !0,
                        helpTitle: "Table of Contents",
                        helpDescription: "View your progress, navigate between lessons, and get a high-level overview of course topics."
                    },
                    view(e) {
                        const t = e.attrs.fmp;
                        return [c()("header.FMPlayerHeader", [c()(ko, {
                            handler() {
                                t.uiSelect("lessonList", !1)
                            }
                        }), c()("h2.title", "Lessons")]), c()(Oo, {
                            fmp: t
                        })]
                    }
                };

                function $o(e) {
                    const t = e.target;
                    t.classList.add("lazyloaded"),
                        t.removeEventListener("load", $o),
                        t.removeEventListener("error", Do)
                }

                function Do(e) {
                    _o.defaultThumbnail && (e.target.src = _o.defaultThumbnail),
                        e.target.removeEventListener("error", Do)
                }

                function Uo(e) {
                    let {el: t, fmp: o} = e
                        , s = t.querySelector(`.item-${o.lesson().slug}`);
                    if (s) {
                        const e = s.previousElementSibling;
                        e && e.classList.contains("lesson-group") && (s = e);
                        const o = s.offsetTop;
                        t.scrollTo({
                            top: o,
                            left: 0,
                            behavior: "smooth"
                        })
                    }
                }

                f(".FMPlayerNotes ul{list-style:none;list-style-image:none;padding-left:0}@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerNotes .FMPlayerHeader{border-left:2px solid transparent}.FMPlayerNotes ul{flex:1;margin:0;padding-bottom:100px}.FMPlayerNotes ul li:last-child{margin-bottom:200px}.FMPlayerNotes form{height:110px;padding:5px 10px 10px}.FMPlayerNotes textarea{background:#3e3e3e;border:none;color:#aaa;font-size:13px;height:80px;margin:0;padding:5px;resize:none;width:80%}.FMPlayerNotes textarea:focus{background:#e6e6e6;color:#222}.FMPlayerNotes button{background:#8a8a8a;border:none;cursor:pointer;float:right;font-size:13px;height:80px;margin:0;padding:0;width:20%}.FMPlayerNotes button:hover{background:#5baec0}.FMPlayerNotes .remainingChars{color:rgba(255,255,255,.5);font-size:13px;height:20px;width:100%}.FMPlayerNotes form.editing{background:rgba(91,174,192,.2)}.FMPlayerNotes form.editing textarea{background:#e6e6e6;color:#222}.FMPlayerNotes form[disabled] textarea{box-shadow:inset 0 0 8px 3px #c02d28}.FMPlayerNotes form[disabled] button:hover{background:#8a8a8a;cursor:not-allowed}.FMPlayerNotes form[disabled] .remainingChars span{color:#c02d28}.FMPlayerNote{background:rgba(255,255,255,0);border-left:2px solid transparent;display:block;font-size:13px;line-height:1.35;padding:5px 10px;position:relative;text-decoration:none;transition:background-color 2s ease-out}.FMPlayerNote.current{border-left-color:#5baec0}.FMPlayerNote.deleting,.FMPlayerNote.editing,.FMPlayerNote.pending-save{background:rgba(255,255,255,.1);font-style:italic;transition:background-color .3s}.FMPlayerNote.editing{background:rgba(91,174,192,.2)}.FMPlayerNote.deleting{background:rgba(192,45,40,.2)}.FMPlayerNote .meta{color:rgba(255,255,255,.35)}.FMPlayerNote .lesson{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.FMPlayerNote .timestamp{float:right}.FMPlayerNote .body{word-wrap:break-word;color:rgba(255,255,255,.65);hyphens:auto;overflow-wrap:break-word;white-space:pre-wrap}.FMPlayerNote .menu{display:none;float:right;line-height:1}.FMPlayerNote .menu a{display:inline-block;padding:0 5px;text-decoration:none;vertical-align:middle}.FMPlayerNote .menu .icon{font-size:24px;line-height:13px;margin-top:-2px}.FMPlayerNote .menu .destroy{color:#f09e14}.FMPlayerNote .menu .destroy:hover{color:#ab6f0b}.FMPlayerNote.deleting .timestamp,.FMPlayerNote.editing .timestamp,.FMPlayerNote:hover .timestamp{display:none}.FMPlayerNote.deleting .menu,.FMPlayerNote.editing .menu,.FMPlayerNote:hover .menu{display:block}.FMPlayerNote:hover .lesson{color:#aaa}.FMPlayerNote:hover .body{color:#e6e6e6}");
                let Qo, Jo, Vo = {
                    disabled: !1,
                    mode: "save",
                    body: "",
                    lessonHash: "",
                    lessonSeconds: 0
                }, Zo = null, Xo = !1;
                const Yo = {
                    view(e) {
                        const t = e.attrs.fmp
                            , o = e.attrs.note
                            , s = e.attrs.lesson
                            , n = e.attrs.index
                            , i = t.lesson().hash === o.lessonHash;
                        let a = i ? "current" : "";
                        o.pendingSave && (a += " pending-save"),
                        o.editing && (a += " editing"),
                        o.deleting && (a += " deleting");
                        const r = [];
                        return o.editing ? r.push(c()("a.edit[href=#", {
                            onclick: e => {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    o.editing = !1,
                                    Vo = m()(Zo),
                                    Zo = null
                            }
                        }, "cancel")) : o.deleting ? (r.push(c()("a.destroy[href=#]", {
                            onclick: e => {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    t.notes.remove(o)
                            }
                        }, "delete")),
                            r.push(c()("a[href=#]", {
                                onclick: e => {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        o.deleting = !1
                                }
                            }, "cancel"))) : (Zo || r.push(c()("a[href=#]", {
                            onclick: e => {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    o.editing = !0,
                                    Zo = m()(Vo),
                                    Vo = m()(o)
                            }
                        }, "edit")),
                            r.push(c()("a.icon[href=#]", {
                                onclick: e => {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        o.deleting = !0
                                }
                            }, "×"))),
                            c()("li", {
                                oncreate(e) {
                                    e.dom.dataset.lessonSlug = s.slug,
                                    (o.justAdded || 0 === n && i) && es(e.dom)
                                }
                            }, [c()(`a.FMPlayerNote[href='${t.routeRoot()}${s.slug}/?t=${o.lessonSeconds}']`, {
                                class: a,
                                onclick(e) {
                                    e.preventDefault(),
                                        t.setResumeTime(o.lessonSeconds),
                                        t.route(`${t.routeRoot()}${s.slug}/?t=${o.lessonSeconds}`)
                                }
                            }, [c()(".meta", [c()(".menu", r), c()(".timestamp", Xe(o.lessonSeconds)), c()(".lesson", s.title + (o.editing ? " (editing)" : ""))]), c()(".body", void 0 !== o.body ? o.body : c()("span.bookmark"))])])
                    }
                }
                    , Wo = {
                    oninit(e) {
                        const t = e.attrs.fmp;
                        e.state.showError = p()((function () {
                                t.messages.add({
                                    id: "notesWarning",
                                    type: "warning",
                                    message: "Please keep notes to under 800 characters."
                                })
                            }
                        ), 2e3)
                    },
                    oncreate(e) {
                        if (e.attrs.fmp,
                            Xo) {
                            Xo = !1;
                            const t = e.dom.querySelector("textarea");
                            t.focus(),
                                Jo = e => {
                                    const o = e.key.toLowerCase();
                                    e.shiftKey && o.startsWith("arrow") && !t.value ? t.dataset.allowShortcut = "yes" : delete t.dataset.allowShortcut
                                }
                                ,
                                t.addEventListener("keydown", Jo)
                        }
                    },
                    onremove(e) {
                        e.dom.querySelector("textarea").removeEventListener("keydown", Jo)
                    },
                    view(e) {
                        const t = e.attrs.fmp
                            , o = e.state.showError
                            , s = (t.notes()[Vo.lessonHash] || []).some((e => e.editing));
                        return c()("form", {
                            disabled: Vo.disabled,
                            class: s ? "editing" : "",
                            onsubmit(e) {
                                e.preventDefault(),
                                    Ko(t)
                            }
                        }, [c()("textarea", {
                            placeholder: "Type a note",
                            value: Vo.body,
                            onkeypress(e) {
                                e.redraw = !1,
                                13 !== e.which || e.shiftKey || (e.preventDefault(),
                                    Ko(t))
                            },
                            oninput(e) {
                                const s = e.target.value;
                                s.length > 800 ? (o(),
                                    Vo.disabled = !0) : Vo.disabled = !1,
                                    Vo.body = s,
                                    s ? (Vo.lessonSeconds = Vo.lessonSeconds || Math.floor(t.video.currentTime()),
                                        Vo.lessonHash = Vo.lessonHash || t.lesson().hash) : (Vo.curentLesson = "",
                                        Vo.lessonSeconds = 0)
                            }
                        }), c()("button[type=submit]", "↵"), c()("div.remainingChars", "characters remaining: ", c()("span", 800 - Vo.body.length))])
                    }
                };
                var Go = {
                    ui: {
                        id: "notes",
                        mountTag: "section",
                        mountClass: "FMPlayerNotes FMPlayerSidebar",
                        onBeforeMount(e) {
                            e.addShortcut("arrowright+shift", (e => {
                                    const t = e.ui.notes.visible();
                                    t || (Xo = !0),
                                        e.uiSelect("notes", !t)
                                }
                            ))
                        },
                        constraints: {
                            mobile: 1,
                            tablet: 1
                        },
                        settings: !0,
                        settingsTitle: "Notes",
                        shortcut: "→",
                        help: !0,
                        helpTitle: "Take Notes",
                        helpDescription: "Save ideas and questions for future reference. Click a note to jump back to the original lesson."
                    },
                    oncreate(e) {
                        const t = e.attrs.fmp;
                        Qo = t => {
                            const o = e.dom.nextElementSibling;
                            if (!o)
                                return;
                            const s = Array.prototype.find.call(o.childNodes, (e => e.dataset.lessonSlug === t.slug));
                            s && es(s)
                        }
                            ,
                            t.lesson.subscribe(Qo)
                    },
                    onremove(e) {
                        e.attrs.fmp.lesson.unsubscribe(Qo)
                    },
                    view(e) {
                        const t = e.attrs.fmp;
                        return [c()("header.FMPlayerHeader", [c()(ko, {
                            handler() {
                                t.uiSelect("notes", !1)
                            }
                        }), c()("h2.title", "Notes")]), c()("ul.FMPlayerScrolling[data-fmplayer-searchable]", t.playlist().lessonHashes && t.playlist().lessonHashes.map((e => {
                                const o = t.notes()[e];
                                if (o && o.length) {
                                    const s = t.playlist().lessonData[e];
                                    return o.map(((e, o) => c()(Yo, {
                                        key: e.id,
                                        fmp: t,
                                        note: e,
                                        lesson: s,
                                        index: o
                                    })))
                                }
                            }
                        ))), c()(Wo, {
                            fmp: t
                        })]
                    }
                };

                function Ko(e) {
                    if (Vo.body = Vo.body.trim(),
                    Vo.body && !Vo.disabled) {
                        if (Vo.editing) {
                            const t = e.notes()[Vo.lessonHash].find((e => e.id === Vo.id));
                            t.editing = !1,
                                t.body = Vo.body,
                                e.notes.edit(t),
                                Vo = m()(Zo),
                                Zo = null
                        } else
                            e.notes.add({
                                lessonHash: Vo.lessonHash,
                                lessonSeconds: Vo.lessonSeconds || 0,
                                body: Vo.body,
                                justAdded: !0
                            }),
                                Vo.body = "",
                                Vo.lessonHash = "",
                                Vo.lessonSeconds = 0;
                        c().redraw()
                    }
                }

                function es(e) {
                    const t = e.offsetTop;
                    e.parentElement.scrollTo({
                        top: t,
                        left: 0,
                        behavior: "smooth"
                    })
                }

                f('.FMPlayerLessonSummary .FMPlayerScrolling ul{list-style:none;list-style-image:none;padding-left:0}@-moz-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.FMPlayerLessonSummary.expanded{flex:5 1 80%;max-height:80%}.FMPlayerLessonSummary .FMPlayerHeader{display:flex;padding-left:10px}.FMPlayerLessonSummary .title{align-items:stretch}.FMPlayerLessonSummary .toggle{align-items:center;border:1px solid transparent;display:flex;padding:0 10px;text-decoration:none}.FMPlayerLessonSummary .toggle.active{background:#000;border-left-color:#222;border-right-color:#222;border-top-color:#222;color:#fff}.FMPlayerLessonSummary .link{align-items:center;display:flex;font-size:13px;text-decoration:none}.FMPlayerLessonSummary .FMPlayerScrolling{font-size:14px;padding:20px;word-break:break-word}.FMPlayerLessonSummary .FMPlayerScrolling li{margin:10px 0}.FMPlayerLessonSummary .text{margin:0 auto;max-width:800px}.FMPlayerLessonSummary .line{color:#ccc;margin-right:5px;text-decoration:none}.FMPlayerLessonSummary .line.active{background:#002837;color:#adeaf2}.FMPlayerLessonSummary .break:before{content:"";display:block;margin-bottom:10px;margin-top:10px}');
                var ts = {
                    ui: {
                        id: "lessonSummary",
                        mountTag: "section",
                        mountClass: "FMPlayerLessonSummary FMPlayerContentTray",
                        onBeforeMount(e) {
                            e.searchParams().has("x", "1") && e.uiSelect("lessonSummary", !0),
                                e.addShortcut("arrowdown+shift", (e => {
                                        e.uiSelect("lessonSummary", !e.ui.lessonSummary.visible())
                                    }
                                ))
                        },
                        constraints: {
                            mobile: 1
                        },
                        settings: !0,
                        settingsTitle: "Lesson Summary",
                        shortcut: "↓",
                        help: !0,
                        helpTitle: "Lesson Summary and Links",
                        helpDescription: "Easily reference lesson contents and links to resources."
                    },
                    oninit(e) {
                        const t = e.attrs.fmp;
                        e.state.isExpanded = t.searchParams().has("x", "1")
                    },
                    oncreate(e) {
                        const t = e.attrs.fmp
                            , o = e.dom.nextElementSibling;
                        e.state.$drawer = e.dom.closest(".FMPlayerContentTray"),
                            e.state._redraw = () => c().redraw(),
                            e.state._scrollTo = (e, t) => {
                                c().redraw();
                                const s = -1 === t;
                                if (e >= 0) {
                                    const t = o.querySelector(".text");
                                    if (!t)
                                        return;
                                    const n = t.children[e];
                                    if (s || function (e, t) {
                                        if (!e || !t)
                                            return;
                                        const o = e.getBoundingClientRect()
                                            , s = t.getBoundingClientRect();
                                        return o.top >= s.top && o.bottom <= s.bottom
                                    }(n, o)) {
                                        let e = n.offsetTop - 10;
                                        n.classList.contains("break") && (e += 30),
                                            o.scrollTo({
                                                top: e,
                                                left: 0,
                                                behavior: "smooth"
                                            })
                                    }
                                }
                            }
                            ,
                            t.transcript.subscribe(e.state._redraw),
                            t.transcriptIndex.subscribe(e.state._scrollTo),
                            e.state.$drawer.classList.contains("expanded") ? (e.state.isExpanded = !0,
                                c().redraw()) : e.state.isExpanded && e.state.$drawer.classList.add("expanded")
                    },
                    onremove(e) {
                        const t = e.attrs.fmp;
                        t.transcript.unsubscribe(e.state._redraw),
                            t.transcriptIndex.unsubscribe(e.state._scrollTo)
                    },
                    view(e) {
                        const t = e.attrs.fmp
                            , o = t.lesson().description
                            , s = t.transcript();
                        return [c()("header.FMPlayerHeader", [c()(ko, {
                            handler() {
                                t.uiSelect("lessonSummary", !1)
                            }
                        }), c()("h2.title", t.showTranscript() ? [c()("a.toggle[href='#']", {
                            onclick(e) {
                                e.preventDefault(),
                                    t.showTranscript(!1)
                            }
                        }, "Lesson Summary"), c()("span.toggle.active", "Full Transcript")] : [c()("span.toggle.active", "Lesson Summary"), c()("a.toggle[href='#']", {
                            onclick(e) {
                                e.preventDefault(),
                                    t.showTranscript(!0)
                            }
                        }, "Full Transcript")]), c()("a[href='#'].link", {
                            onclick(o) {
                                o.preventDefault(),
                                    e.state.isExpanded = !e.state.isExpanded,
                                    e.state.isExpanded ? (t.searchParams().set("x", "1"),
                                        e.state.$drawer.classList.add("expanded")) : (t.searchParams().delete("x"),
                                        e.state.$drawer.classList.remove("expanded"))
                            }
                        }, [e.state.isExpanded ? "Collapse" : "Expand"])]), c()(".FMPlayerScrolling", [t.showTranscript() ? s.length ? c()(".text[data-fmplayer-searchable]", s.map(((e, o) => {
                                const s = `${t.routeRoot()}${t.lesson().slug}/?t=${e.start}`;
                                let n = e.newLine ? ".break" : "";
                                return n += o === t.transcriptIndex() ? ".active" : "",
                                    c()(`a.line ${n}[href='${s}']`, {
                                        onclick(o) {
                                            o.preventDefault(),
                                                t.setResumeTime(e.start),
                                                t.route(s)
                                        }
                                    }, c().trust(e.cue))
                            }
                        ))) : null : o ? c().trust(Ut(o)) : null])]
                    }
                };
                const os = {
                    video: {
                        playerType: "course",
                        autoplay: !0
                    },
                    playerAssets: {
                        defaultThumbnail: "",
                        annotations: "",
                        lessonList: "",
                        lessonSummary: "",
                        navBookmarkButton: "",
                        navBreadcrumb: "",
                        navFeedbackButton: "",
                        navResourcesButton: "",
                        navSettingsButton: "",
                        notes: ""
                    }
                };

                function ss(e) {
                    const t = n()({}, os, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                        , o = new Me(e, t.video);
                    return o.playerAssets = t.playerAssets,
                        o.addPlugin(Ee, t.assets).addPlugin(Te).addPlugin(Re).addPlugin(Be, t.playlist).addPlugin(qe).addPlugin(He).addPlugin($e).addPlugin(ht).addPlugin(ft).addPlugin(Wt).addPlugin(Gt).addPlugin(Kt).addPlugin(eo).addPlugin(et, t.courseQuiz).addPlugin(io, t.ui).addPlugin(ao, t.ui).addPlugin(Ro, t.search).addUI(lo, "navleft").addUI(vo, "navright").addUI(ho, "navright").addUI(go, "navright").addUI(bo, "navright").addUI(Po, "body").addUI(Ho, "body", !0).addUI(Go, "body").addUI(ts, "center"),
                    t.ui && t.ui.showFeedback && o.addUI(Ao, "navright"),
                    "function" == typeof window.Intercom && o.addUI(Co, "body"),
                        o.lesson.subscribe((e => {
                                const t = o.playlist() && o.playlist().title
                                    , s = e && e.title;
                                t && s && (document.title = `${s} - ${t}`)
                            }
                        )),
                        o.video.on("fmp:playlistended", (() => {
                                o.progress.playlistCompleted() > .8 && o.showModal(to, t.socialCTA)
                            }
                        )),
                        o
                }
            },
            5187: function (e, t, o) {
                var s = o(6396)(o(3115), "DataView");
                e.exports = s
            },
            1523: function (e, t, o) {
                var s = o(6396)(o(3115), "Promise");
                e.exports = s
            },
            5449: function (e, t, o) {
                var s = o(6396)(o(3115), "Set");
                e.exports = s
            },
            811: function (e, t, o) {
                var s = o(6396)(o(3115), "WeakMap");
                e.exports = s
            },
            1290: function (e) {
                e.exports = function (e, t) {
                    for (var o = -1, s = null == e ? 0 : e.length; ++o < s && !1 !== t(e[o], o, e);)
                        ;
                    return e
                }
            },
            5692: function (e) {
                e.exports = function (e, t) {
                    for (var o = -1, s = null == e ? 0 : e.length, n = 0, i = []; ++o < s;) {
                        var a = e[o];
                        t(a, o, e) && (i[n++] = a)
                    }
                    return i
                }
            },
            3136: function (e) {
                e.exports = function (e, t) {
                    for (var o = -1, s = t.length, n = e.length; ++o < s;)
                        e[n + o] = t[o];
                    return e
                }
            },
            2536: function (e, t, o) {
                var s = o(8984)
                    , n = o(5072);
                e.exports = function (e, t) {
                    return e && s(t, n(t), e)
                }
            },
            7168: function (e, t, o) {
                var s = o(8984)
                    , n = o(4234);
                e.exports = function (e, t) {
                    return e && s(t, n(t), e)
                }
            },
            4575: function (e, t, o) {
                var s = o(3423)
                    , n = o(1290)
                    , i = o(5952)
                    , a = o(2536)
                    , r = o(7168)
                    , l = o(4886)
                    , c = o(1082)
                    , d = o(5084)
                    , p = o(9402)
                    , u = o(351)
                    , v = o(3647)
                    , h = o(125)
                    , m = o(8026)
                    , f = o(7209)
                    , g = o(9147)
                    , y = o(9497)
                    , b = o(4039)
                    , j = o(9766)
                    , k = o(8197)
                    , x = o(5795)
                    , w = o(5072)
                    , M = o(4234)
                    , P = "[object Arguments]"
                    , F = "[object Function]"
                    , A = "[object Object]"
                    , S = {};
                S[P] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S[A] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0,
                    S["[object Error]"] = S[F] = S["[object WeakMap]"] = !1,
                    e.exports = function e(t, o, z, L, E, C) {
                        var T, R = 1 & o, N = 2 & o, B = 4 & o;
                        if (z && (T = E ? z(t, L, E, C) : z(t)),
                        void 0 !== T)
                            return T;
                        if (!k(t))
                            return t;
                        var I = y(t);
                        if (I) {
                            if (T = m(t),
                                !R)
                                return c(t, T)
                        } else {
                            var q = h(t)
                                , _ = q == F || "[object GeneratorFunction]" == q;
                            if (b(t))
                                return l(t, R);
                            if (q == A || q == P || _ && !E) {
                                if (T = N || _ ? {} : g(t),
                                    !R)
                                    return N ? p(t, r(T, t)) : d(t, a(T, t))
                            } else {
                                if (!S[q])
                                    return E ? t : {};
                                T = f(t, q, R)
                            }
                        }
                        C || (C = new s);
                        var O = C.get(t);
                        if (O)
                            return O;
                        C.set(t, T),
                            x(t) ? t.forEach((function (s) {
                                    T.add(e(s, o, z, s, t, C))
                                }
                            )) : j(t) && t.forEach((function (s, n) {
                                    T.set(n, e(s, o, z, n, t, C))
                                }
                            ));
                        var H = I ? void 0 : (B ? N ? v : u : N ? M : w)(t);
                        return n(H || t, (function (s, n) {
                                H && (s = t[n = s]),
                                    i(T, n, e(s, o, z, n, t, C))
                            }
                        )),
                            T
                    }
            },
            3297: function (e, t, o) {
                var s = o(3136)
                    , n = o(9497);
                e.exports = function (e, t, o) {
                    var i = t(e);
                    return n(e) ? i : s(i, o(e))
                }
            },
            2049: function (e, t, o) {
                var s = o(125)
                    , n = o(9749);
                e.exports = function (e) {
                    return n(e) && "[object Map]" == s(e)
                }
            },
            467: function (e, t, o) {
                var s = o(125)
                    , n = o(9749);
                e.exports = function (e) {
                    return n(e) && "[object Set]" == s(e)
                }
            },
            2645: function (e, t, o) {
                var s = o(1031)
                    , n = o(2750)
                    , i = Object.prototype.hasOwnProperty;
                e.exports = function (e) {
                    if (!s(e))
                        return n(e);
                    var t = [];
                    for (var o in Object(e))
                        i.call(e, o) && "constructor" != o && t.push(o);
                    return t
                }
            },
            1343: function (e, t, o) {
                var s = o(5847);
                e.exports = function (e, t) {
                    var o = t ? s(e.buffer) : e.buffer;
                    return new e.constructor(o, e.byteOffset, e.byteLength)
                }
            },
            1464: function (e) {
                var t = /\w*$/;
                e.exports = function (e) {
                    var o = new e.constructor(e.source, t.exec(e));
                    return o.lastIndex = e.lastIndex,
                        o
                }
            },
            6580: function (e, t, o) {
                var s = o(24)
                    , n = s ? s.prototype : void 0
                    , i = n ? n.valueOf : void 0;
                e.exports = function (e) {
                    return i ? Object(i.call(e)) : {}
                }
            },
            5084: function (e, t, o) {
                var s = o(8984)
                    , n = o(4222);
                e.exports = function (e, t) {
                    return s(e, n(e), t)
                }
            },
            9402: function (e, t, o) {
                var s = o(8984)
                    , n = o(5807);
                e.exports = function (e, t) {
                    return s(e, n(e), t)
                }
            },
            351: function (e, t, o) {
                var s = o(3297)
                    , n = o(4222)
                    , i = o(5072);
                e.exports = function (e) {
                    return s(e, i, n)
                }
            },
            3647: function (e, t, o) {
                var s = o(3297)
                    , n = o(5807)
                    , i = o(4234);
                e.exports = function (e) {
                    return s(e, i, n)
                }
            },
            4222: function (e, t, o) {
                var s = o(5692)
                    , n = o(9443)
                    , i = Object.prototype.propertyIsEnumerable
                    , a = Object.getOwnPropertySymbols
                    , r = a ? function (e) {
                        return null == e ? [] : (e = Object(e),
                            s(a(e), (function (t) {
                                    return i.call(e, t)
                                }
                            )))
                    }
                    : n;
                e.exports = r
            },
            5807: function (e, t, o) {
                var s = o(3136)
                    , n = o(1922)
                    , i = o(4222)
                    , a = o(9443)
                    , r = Object.getOwnPropertySymbols ? function (e) {
                        for (var t = []; e;)
                            s(t, i(e)),
                                e = n(e);
                        return t
                    }
                    : a;
                e.exports = r
            },
            125: function (e, t, o) {
                var s = o(5187)
                    , n = o(4775)
                    , i = o(1523)
                    , a = o(5449)
                    , r = o(811)
                    , l = o(4504)
                    , c = o(11)
                    , d = "[object Map]"
                    , p = "[object Promise]"
                    , u = "[object Set]"
                    , v = "[object WeakMap]"
                    , h = "[object DataView]"
                    , m = c(s)
                    , f = c(n)
                    , g = c(i)
                    , y = c(a)
                    , b = c(r)
                    , j = l;
                (s && j(new s(new ArrayBuffer(1))) != h || n && j(new n) != d || i && j(i.resolve()) != p || a && j(new a) != u || r && j(new r) != v) && (j = function (e) {
                        var t = l(e)
                            , o = "[object Object]" == t ? e.constructor : void 0
                            , s = o ? c(o) : "";
                        if (s)
                            switch (s) {
                                case m:
                                    return h;
                                case f:
                                    return d;
                                case g:
                                    return p;
                                case y:
                                    return u;
                                case b:
                                    return v
                            }
                        return t
                    }
                ),
                    e.exports = j
            },
            8026: function (e) {
                var t = Object.prototype.hasOwnProperty;
                e.exports = function (e) {
                    var o = e.length
                        , s = new e.constructor(o);
                    return o && "string" == typeof e[0] && t.call(e, "index") && (s.index = e.index,
                        s.input = e.input),
                        s
                }
            },
            7209: function (e, t, o) {
                var s = o(5847)
                    , n = o(1343)
                    , i = o(1464)
                    , a = o(6580)
                    , r = o(4118);
                e.exports = function (e, t, o) {
                    var l = e.constructor;
                    switch (t) {
                        case "[object ArrayBuffer]":
                            return s(e);
                        case "[object Boolean]":
                        case "[object Date]":
                            return new l(+e);
                        case "[object DataView]":
                            return n(e, o);
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return r(e, o);
                        case "[object Map]":
                        case "[object Set]":
                            return new l;
                        case "[object Number]":
                        case "[object String]":
                            return new l(e);
                        case "[object RegExp]":
                            return i(e);
                        case "[object Symbol]":
                            return a(e)
                    }
                }
            },
            2750: function (e, t, o) {
                var s = o(6916)(Object.keys, Object);
                e.exports = s
            },
            8178: function (e, t, o) {
                var s = o(4575);
                e.exports = function (e) {
                    return s(e, 4)
                }
            },
            9766: function (e, t, o) {
                var s = o(2049)
                    , n = o(1559)
                    , i = o(7862)
                    , a = i && i.isMap
                    , r = a ? n(a) : s;
                e.exports = r
            },
            5795: function (e, t, o) {
                var s = o(467)
                    , n = o(1559)
                    , i = o(7862)
                    , a = i && i.isSet
                    , r = a ? n(a) : s;
                e.exports = r
            },
            5072: function (e, t, o) {
                var s = o(2836)
                    , n = o(2645)
                    , i = o(3386);
                e.exports = function (e) {
                    return i(e) ? s(e) : n(e)
                }
            },
            2910: function (e, t, o) {
                var s = o(1383)
                    , n = o(955)((function (e, t, o, n) {
                        s(e, t, o, n)
                    }
                ));
                e.exports = n
            },
            9443: function (e) {
                e.exports = function () {
                    return []
                }
            },
            6830: function (e, t, o) {
                var s = o(9853)
                    , n = o(8197);
                e.exports = function (e, t, o) {
                    var i = !0
                        , a = !0;
                    if ("function" != typeof e)
                        throw new TypeError("Expected a function");
                    return n(o) && (i = "leading" in o ? !!o.leading : i,
                        a = "trailing" in o ? !!o.trailing : a),
                        s(e, t, {
                            leading: i,
                            maxWait: t,
                            trailing: a
                        })
                }
            }
        }
    ]
);
