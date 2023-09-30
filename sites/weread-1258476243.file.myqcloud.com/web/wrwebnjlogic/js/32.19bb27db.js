const strings_32 = [
    "slice",
    "key",
    "iframe",
    "href",
    "universal",
    "display",
    "function *\\( *\\)",
    "debu",
    "prototype",
    "createElement",
    "fallToCustomCb",
    "fallToAppStore",
    "click",
    "concat",
    "path",
    "appVersion",
    "options",
    "buildScheme",
    "top",
    "isSupportWeibo",
    "addEventListener",
    "protocol",
    "yingyongbao",
    "param",
    "string",
    "counter",
    "pathKey",
    "msHidden",
    "test",
    "generateScheme",
    "webkitHidden",
    "length",
    "none",
    "msvisibilitychange",
    "logFunc",
    "cssText"
]

const _0x151b = function (idx) {
    return strings_32[Number(idx)]
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push([
    [32],
    {
        680: function (module, exports, require) {
            function instanceOf(_0x536e52, _0x36382e) {
                if (!(_0x536e52 instanceof _0x36382e))
                    throw new TypeError('Cannot call a class as a function')
            }

            function defineProperties(obj, descriptors) {
                for (let i = 0; i < descriptors.length; i++) {
                    const descriptor = descriptors[i]
                    descriptor.enumerable = descriptor.enumerable || false
                    descriptor.configurable = true
                    'value' in descriptor && (descriptor.writable = true)
                    Object.defineProperty(obj, descriptor.key, descriptor)
                }
            }

            function drive(obj, proto, instance) {
                proto && defineProperties(obj.prototype, proto)
                instance && defineProperties(obj, instance)
                return obj
            }

            function _0x56a2d4(obj, key, val) {
                key in obj
                    ? Object.defineProperty(obj, key, {
                        'value': val,
                        'enumerable': true,
                        'configurable': true,
                        'writable': true
                    })
                    : obj[key] = val
                return obj
            }

            function assign() {
                return (assign = Object.assign || function (_0x869978) {
                        for (let i = 1; i < arguments.length; i++) {
                            const arg = arguments[i];
                            for (const key in arg) {
                                if (Object.prototype.hasOwnProperty.call(arg, key)) {
                                    _0x869978[key] = arg[key]
                                }
                            }
                        }
                        return _0x869978;
                    }
                ).apply(this, arguments)
            }

            let _0x45fd86,
                _0x22531e,
                _0xf0303d,
                ua = navigator.userAgent || '',
                _0x5214cc = function (_0x47322b, _0x1f3acc) {
                    for (var _0x4258f4 = window['isNaN'], _0x222572 = _0x47322b['split']('.'), _0xa37018 = _0x1f3acc['split']('.'), _0x1844c0 = 0x0; _0x1844c0 < 0x3; _0x1844c0++) {
                        var _0x1f7050 = Number(_0x222572[_0x1844c0])
                            , _0x4b5ba8 = Number(_0xa37018[_0x1844c0]);
                        if (_0x1f7050 > _0x4b5ba8)
                            return 0x1;
                        if (_0x4b5ba8 > _0x1f7050)
                            return -0x1;
                        if (!_0x4258f4(_0x1f7050) && _0x4258f4(_0x4b5ba8))
                            return 0x1;
                        if (_0x4258f4(_0x1f7050) && !_0x4258f4(_0x4b5ba8))
                            return -0x1;
                    }
                    return 0x0;
                },
                _0x27a676 = function () {
                    var _0x862479 = navigator[_0x151b('0xf')]['match'](/OS (\d+)_(\d+)_?(\d+)?/);
                    return Number['parseInt'](_0x862479[0x1], 0xa);
                },
                _0x5ae6f9 = function () {
                    return navigator['appVersion']['match'](/micromessenger\/(\d+\.\d+\.\d+)/i)[0x1];
                },
                isAndroid = /android/i.test(ua),
                isIOS = /iphone|ipad|ipod/i.test(ua),
                isWeiXin = /micromessenger\/([\d.]+)/i.test(ua),
                isWeiBo = /(weibo).*weibo__([\d.]+)/i.test(ua),
                isBaiduBoxApp = /(baiduboxapp)\/([\d.]+)/i.test(ua),
                isQQ = /qq\/([\d.]+)/i.test(ua),
                isQQBrowser = /(qqbrowser)\/([\d.]+)/i.test(ua),
                isQZone = /qzone\/.*_qz_([\d.]+)/i.test(ua),
                isChrome = /chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(ua) && isAndroid && ua.indexOf('Version') < 0;

            function _0x3ee675(_0x4ccef7) {
                var _0x25a9f5 = void 0x0 !== _0x4ccef7 ? Object['keys'](_0x4ccef7)['map'](function (_0x4e14b0) {
                    return ''['concat'](_0x4e14b0, '=')['concat'](_0x4ccef7[_0x4e14b0]);
                })['join']('&') : '';
                return _0x25a9f5 ? '?'[_0x151b('0xd')](_0x25a9f5) : '';
            }

            function _0x30244c(_0x540fd8, _0x521139) {
                var _0xcd7007 = _0x540fd8['path']
                    , _0x5b75a6 = _0x540fd8['param']
                    , _0x2aad26 = _0x521139['scheme']
                    , _0x6b1c00 = _0x521139[_0x151b('0x11')];
                if (void 0x0 !== _0x6b1c00)
                    return _0x6b1c00(_0x540fd8, _0x521139);
                var _0x55ebc9 = _0x2aad26['host']
                    , _0x3fd342 = _0x2aad26['port']
                    , _0xe8e04c = _0x2aad26['protocol']
                    , _0x241aec = _0x3fd342 ? ':'['concat'](_0x3fd342) : ''
                    , _0xe74723 = _0x55ebc9 ? ''['concat'](_0x55ebc9)['concat'](_0x241aec, '/') : ''
                    , _0x20abbc = _0x3ee675(_0x5b75a6);
                return ''['concat'](_0xe8e04c, '://')['concat'](_0xe74723)['concat'](_0xcd7007)['concat'](_0x20abbc);
            }

            function _0x50ab76(_0x1631d9, _0x113800) {
                var _0xdd5d48 = _0x113800['outChain']
                    , _0x37ad5a = _0x30244c(_0x1631d9, _0x113800);
                if (void 0x0 !== _0xdd5d48 && _0xdd5d48) {
                    var _0x4a9cc4 = _0xdd5d48[_0x151b('0x15')]
                        , _0x2a2a00 = _0xdd5d48[_0x151b('0xe')]
                        , _0x96d88b = _0xdd5d48['key'];
                    _0x37ad5a = ''['concat'](_0x4a9cc4, '://')[_0x151b('0xd')](_0x2a2a00, '?')['concat'](_0x96d88b, '=')['concat'](encodeURIComponent(_0x37ad5a));
                }
                return _0x37ad5a;
            }

            function _0x3e0bef(_0x549cc2, _0x42ac36) {
                var _0x11b6dd = _0x42ac36['outChain']
                    , _0x4ce13f = _0x42ac36['intent']
                    , _0x57285d = _0x42ac36['fallback'];
                if (void 0x0 === _0x4ce13f)
                    return '';
                var _0x4edb54 = Object['keys'](_0x4ce13f)['map'](function (_0x1d28cc) {
                        return ''['concat'](_0x1d28cc, '=')['concat'](_0x4ce13f[_0x1d28cc], ';');
                    })['join']('')
                    ,
                    _0x5a6ca2 = '#Intent;'['concat'](_0x4edb54, 'S.browser_fallback_url=')['concat'](encodeURIComponent(_0x57285d), ';end;')
                    , _0x2ce299 = _0x30244c(_0x549cc2, _0x42ac36);
                if (void 0x0 !== _0x11b6dd && _0x11b6dd) {
                    var _0x483560 = _0x11b6dd['path']
                        , _0x2fc551 = _0x11b6dd[_0x151b('0x1')];
                    return 'intent://'['concat'](_0x483560, '?')['concat'](_0x2fc551, '=')[_0x151b('0xd')](encodeURIComponent(_0x2ce299))['concat'](_0x5a6ca2);
                }
                return _0x2ce299 = _0x2ce299[_0x151b('0x0')](_0x2ce299['indexOf']('//') + 0x2),
                    'intent://'[_0x151b('0xd')](_0x2ce299)[_0x151b('0xd')](_0x5a6ca2);
            }

            function _0x157854(_0x3d957f, _0x3ae082) {
                var _0x200d80 = _0x3ae082['universal'];
                if (void 0x0 === _0x200d80)
                    return '';
                var _0xc2602f = _0x200d80['host']
                    , _0x53f54a = _0x200d80[_0x151b('0x1a')]
                    , _0x2e5825 = _0x3d957f['path']
                    , _0x5caaa0 = _0x3ee675(_0x3d957f[_0x151b('0x17')])
                    ,
                    _0x5a5dbb = 'https://'[_0x151b('0xd')](_0xc2602f, '/')['concat'](_0x2e5825)['concat'](_0x5caaa0)
                    ,
                    _0x3708e8 = 'https://'[_0x151b('0xd')](_0xc2602f, '?')['concat'](_0x53f54a, '=')['concat'](_0x2e5825)['concat'](_0x5caaa0['replace']('?', '&'));
                return _0x53f54a ? _0x3708e8 : _0x5a5dbb;
            }

            function _0x57e45b(_0x63fa57, _0x2ae7ad) {
                var _0x1d6406 = _0x50ab76(_0x63fa57, _0x2ae7ad);
                return ''['concat'](_0x2ae7ad['yingyongbao'], '&android_schema=')[_0x151b('0xd')](encodeURIComponent(_0x1d6406));
            }

            function _0x15e651() {
                'undefined' != typeof document && (void 0x0 !== document['hidden'] ? (_0x45fd86 = 'hidden',
                    _0x22531e = 'visibilitychange') : void 0x0 !== document[_0x151b('0x1b')] ? (_0x45fd86 = 'msHidden',
                    _0x22531e = _0x151b('0x21')) : void 0x0 !== document[_0x151b('0x1e')] && (_0x45fd86 = 'webkitHidden',
                    _0x22531e = 'webkitvisibilitychange'));
            }

            function _0x357a71() {
                return void 0x0 !== _0x45fd86 && document[_0x45fd86];
            }

            function _0x42e8e6(_0x25d6c9) {
                window[_0x151b('0x12')]['location']['href'] = _0x25d6c9;
            }

            function _0x53dc4f(_0x108798) {
                var _0x3b096f = document['createElement']('a');
                _0x3b096f['setAttribute'](_0x151b('0x3'), _0x108798),
                    _0x3b096f['style'][_0x151b('0x5')] = _0x151b('0x20'),
                    document['body']['appendChild'](_0x3b096f),
                    _0x3b096f[_0x151b('0xc')]();
            }

            function _0x5d065b(_0x22918f) {
                _0xf0303d || ((_0xf0303d = document[_0x151b('0x9')](_0x151b('0x2')))['style'][_0x151b('0x23')] = 'display:none;border:0;width:0;height:0;',
                    document['body']['appendChild'](_0xf0303d)),
                    _0xf0303d['src'] = _0x22918f;
            }

            function _0x4c865c(_0x2503e8, _0x245e77) {
                var _0x31a624 = setTimeout(function () {
                    _0x357a71() || _0x2503e8();
                }, _0x245e77);
                void 0x0 !== _0x22531e ? document[_0x151b('0x14')](_0x22531e, function () {
                    clearTimeout(_0x31a624);
                }) : window[_0x151b('0x14')]('pagehide', function () {
                    clearTimeout(_0x31a624);
                });
            }

            function Foo(opts) {
                instanceOf(this, Foo)
                _0x56a2d4(this, 'options', undefined)
                const options = {
                    'timeout': 2000
                }
                this.options = assign(options, opts)
            }

            _0x15e651()
            drive(Foo, [
                {
                    'key': 'generateScheme',
                    'value': function (_0x37c43c) {
                        return _0x50ab76(_0x37c43c, this.options)
                    }
                },
                {
                    'key': 'generateIntent',
                    'value': function (_0x58758d) {
                        return _0x3e0bef(_0x58758d, this['options']);
                    }
                },
                {
                    'key': 'generateUniversalLink',
                    'value': function (_0x58f363) {
                        return _0x157854(_0x58f363, this['options']);
                    }
                },
                {
                    'key': 'generateYingYongBao',
                    'value': function (_0x33f6f6) {
                        return _0x57e45b(_0x33f6f6, this['options']);
                    }
                },
                {
                    'key': 'checkOpen',
                    'value': function (_0x523905) {
                        var _0x5a925f = this[_0x151b('0x10')]
                            , _0x545541 = _0x5a925f[_0x151b('0x22')];
                        return _0x4c865c(function () {
                            void 0x0 !== _0x545541 && _0x545541('failure'),
                                _0x523905();
                        }, _0x5a925f['timeout']);
                    }
                },
                {
                    'key': _0x151b('0xb'),
                    'value': function () {
                        var _0x3f950c = this;
                        this['checkOpen'](function () {
                            _0x42e8e6(_0x3f950c['options']['appstore']);
                        });
                    }
                },
                {
                    'key': 'fallToFbUrl',
                    'value': function () {
                        var _0x429a96 = this;
                        this['checkOpen'](function () {
                            _0x42e8e6(_0x429a96['options']['fallback']);
                        });
                    }
                },
                {
                    'key': 'fallToCustomCb',
                    'value': function (_0xc03ce5) {
                        this['checkOpen'](function () {
                            _0xc03ce5();
                        });
                    }
                },
                {
                    'key': 'open',
                    'value': function (_0x9d60eb) {
                        let _0x55727b,
                            _0x363476 = this.options,
                            _0x334030 = _0x363476.universal,
                            _0x1cc56e = _0x363476.appstore,
                            _0x207635 = _0x363476.logFunc,
                            _0x56d12a = _0x363476.intent,
                            _0xd8986c = _0x9d60eb.callback,
                            _0x1d62a1 = undefined !== _0x334030,
                            _0x4909a2 = this.generateScheme(_0x9d60eb);

                        void 0x0 !== _0x207635 && _0x207635('pending');
                        var _0x42da48 = !!this.options.isSupportWeibo;
                        isIOS ?
                            isWeiXin && -1 === _0x5214cc(_0x5ae6f9(), '7.0.5') || isWeiBo && !_0x42da48
                                ? _0x42e8e6(_0x1cc56e)
                                : _0x27a676() < 9
                                    ? (_0x5d065b(_0x4909a2),
                                        _0x55727b = this.fallToAppStore)
                                    : !_0x1d62a1 || isQQ || isQQBrowser || isQZone
                                        ? (_0x53dc4f(_0x4909a2),
                                            _0x55727b = this.fallToAppStore)
                                        : _0x42e8e6(this.generateUniversalLink(_0x9d60eb))
                            : isWeiXin && undefined !== this.options.yingyongbao
                                ? _0x42e8e6(this.generateYingYongBao(_0x9d60eb))
                                : isChrome
                                    ? undefined !== _0x56d12a
                                        ? _0x42e8e6(this.generateIntent(_0x9d60eb))
                                        : (_0x42e8e6(_0x4909a2),
                                            _0x55727b = this.fallToFbUrl)
                                    : isWeiXin || isBaiduBoxApp || isWeiBo && !_0x42da48 || isQZone
                                        ? _0x42e8e6(this.options.fallback)
                                        : (_0x5d065b(_0x4909a2),
                                            _0x55727b = this.fallToFbUrl)
                        undefined === _0xd8986c
                            ? _0x55727b && _0x55727b.call(this)
                            : this.fallToCustomCb(_0xd8986c)
                    }
                },
            ])

            module.exports = Foo
        },
    },
]);
