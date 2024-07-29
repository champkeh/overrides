var strings_31 = [
    "buildScheme",
    "appVersion",
    "createElement",
    "match",
    "keys",
    "generateIntent",
    "generateScheme",
    "join",
    "failure",
    "options",
    "fallToFbUrl",
    "style",
    "concat",
    "iframe",
    "host",
    "pagehide",
    "init",
    ";end;",
    "prototype",
    "fallback",
    "writable",
    "length",
    "indexOf",
    "key",
    "pathKey",
    "msHidden",
    "param",
    "intent",
    "test",
    "href",
    "logFunc",
    "outChain",
    "exports",
    "input",
    "call",
    "fallToAppStore",
    "apply",
    "replace"
]

var _0x5533 = function (idx) {
    idx = idx - 0x0;
    return strings_31[idx];
};

window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push([
    [0x1f],
    {
        811: function (_0x1c6680, _0x5a3cd4, _0x4f1890) {
            _0x1c6680[_0x5533('0x20')] = function () {
                'use strict';

                function _0x2efe9f(_0x502011, _0xfd51ed) {
                    if (!(_0x502011 instanceof _0xfd51ed))
                        throw new TypeError('Cannot\x20call\x20a\x20class\x20as\x20a\x20function');
                }

                function _0x13c0db(_0x36e7fb, _0x1cef7a) {
                    for (var _0x50cef0 = 0x0; _0x50cef0 < _0x1cef7a['length']; _0x50cef0++) {
                        var _0x39a412 = _0x1cef7a[_0x50cef0];
                        _0x39a412['enumerable'] = _0x39a412['enumerable'] || !0x1,
                            _0x39a412['configurable'] = !0x0,
                        'value' in _0x39a412 && (_0x39a412[_0x5533('0x14')] = !0x0),
                            Object['defineProperty'](_0x36e7fb, _0x39a412[_0x5533('0x17')], _0x39a412);
                    }
                }

                function _0x43e715(_0x4ad858, _0x3a5695, _0x1f937b) {
                    return _0x3a5695 && _0x13c0db(_0x4ad858[_0x5533('0x12')], _0x3a5695),
                    _0x1f937b && _0x13c0db(_0x4ad858, _0x1f937b),
                        _0x4ad858;
                }

                function _0x5d44bf(_0x56a246, _0x1fb377, _0x2ab073) {
                    return _0x1fb377 in _0x56a246 ? Object['defineProperty'](_0x56a246, _0x1fb377, {
                        'value': _0x2ab073,
                        'enumerable': !0x0,
                        'configurable': !0x0,
                        'writable': !0x0
                    }) : _0x56a246[_0x1fb377] = _0x2ab073,
                        _0x56a246;
                }

                function _0x498e1a() {
                    return (_0x498e1a = Object['assign'] || function (_0x376d88) {
                            for (var _0x5e98eb = 0x1; _0x5e98eb < arguments[_0x5533('0x15')]; _0x5e98eb++) {
                                var _0x1d2123 = arguments[_0x5e98eb];
                                for (var _0x2d53c5 in _0x1d2123)
                                    Object['prototype']['hasOwnProperty'][_0x5533('0x22')](_0x1d2123, _0x2d53c5) && (_0x376d88[_0x2d53c5] = _0x1d2123[_0x2d53c5]);
                            }
                            return _0x376d88;
                        }
                    )['apply'](this, arguments);
                }

                var _0x1ac6a4, _0x47472d, _0x4487a2, _0x1fa896 = navigator['userAgent'] || '',
                    _0x33c26d = function (_0x3a568f, _0x4ba0e2) {
                        for (var _0x1c860a = window['isNaN'], _0x148929 = _0x3a568f['split']('.'), _0x56f0dc = _0x4ba0e2['split']('.'), _0x2fa2f0 = 0x0; _0x2fa2f0 < 0x3; _0x2fa2f0++) {
                            var _0x49d0c2 = Number(_0x148929[_0x2fa2f0])
                                , _0x29c259 = Number(_0x56f0dc[_0x2fa2f0]);
                            if (_0x49d0c2 > _0x29c259)
                                return 0x1;
                            if (_0x29c259 > _0x49d0c2)
                                return -0x1;
                            if (!_0x1c860a(_0x49d0c2) && _0x1c860a(_0x29c259))
                                return 0x1;
                            if (_0x1c860a(_0x49d0c2) && !_0x1c860a(_0x29c259))
                                return -0x1;
                        }
                        return 0x0;
                    }, _0x46698a = function () {
                        var _0x1549da = navigator[_0x5533('0x1')]['match'](/OS (\d+)_(\d+)_?(\d+)?/);
                        return Number['parseInt'](_0x1549da[0x1], 0xa);
                    }, _0x2471fe = function () {
                        return navigator['appVersion'][_0x5533('0x3')](/micromessenger\/(\d+\.\d+\.\d+)/i)[0x1];
                    }, _0xbcc8e0 = /android/i['test'](_0x1fa896),
                    _0x55b909 = /iphone|ipad|ipod/i[_0x5533('0x1c')](_0x1fa896),
                    _0x5eefa9 = /micromessenger\/([\d.]+)/i['test'](_0x1fa896),
                    _0x176c82 = /(weibo).*weibo__([\d.]+)/i['test'](_0x1fa896),
                    _0x2b6eb9 = /(baiduboxapp)\/([\d.]+)/i['test'](_0x1fa896),
                    _0x209851 = /qq\/([\d.]+)/i['test'](_0x1fa896),
                    _0x16673e = /(qqbrowser)\/([\d.]+)/i['test'](_0x1fa896),
                    _0x2cd954 = /qzone\/.*_qz_([\d.]+)/i['test'](_0x1fa896),
                    _0x564cb3 = /chrome\/[\d.]+ mobile safari\/[\d.]+/i['test'](_0x1fa896) && _0xbcc8e0 && _0x1fa896[_0x5533('0x16')]('Version') < 0x0;

                function _0x28e550(_0x47fa42) {
                    var _0x2937a1 = void 0x0 !== _0x47fa42 ? Object[_0x5533('0x4')](_0x47fa42)['map'](function (_0x2f77b1) {
                        return ''['concat'](_0x2f77b1, '=')['concat'](_0x47fa42[_0x2f77b1]);
                    })['join']('&') : '';
                    return _0x2937a1 ? '?'['concat'](_0x2937a1) : '';
                }

                function _0x591b46(_0x822f55, _0x20f921) {
                    var _0x12cb90 = _0x822f55['path']
                        , _0x41d28d = _0x822f55[_0x5533('0x1a')]
                        , _0x3f8607 = _0x20f921['scheme']
                        , _0x3a4768 = _0x20f921[_0x5533('0x0')];
                    if (void 0x0 !== _0x3a4768)
                        return _0x3a4768(_0x822f55, _0x20f921);
                    var _0x4c5429 = _0x3f8607[_0x5533('0xe')]
                        , _0x91fe2b = _0x3f8607['port']
                        , _0x2f1919 = _0x3f8607['protocol']
                        , _0x5d771f = _0x91fe2b ? ':'['concat'](_0x91fe2b) : ''
                        , _0xf74f34 = _0x4c5429 ? ''['concat'](_0x4c5429)[_0x5533('0xc')](_0x5d771f, '/') : ''
                        , _0xb0e358 = _0x28e550(_0x41d28d);
                    return ''['concat'](_0x2f1919, '://')['concat'](_0xf74f34)['concat'](_0x12cb90)['concat'](_0xb0e358);
                }

                function _0x1666bb(_0x131e15, _0x5e3420) {
                    var _0x25f8ac = _0x5e3420[_0x5533('0x1f')]
                        , _0x5442b8 = _0x591b46(_0x131e15, _0x5e3420);
                    if (void 0x0 !== _0x25f8ac && _0x25f8ac) {
                        var _0x4d8dea = _0x25f8ac['protocol']
                            , _0x319a7b = _0x25f8ac['path']
                            , _0x68c62d = _0x25f8ac[_0x5533('0x17')];
                        _0x5442b8 = ''['concat'](_0x4d8dea, '://')['concat'](_0x319a7b, '?')['concat'](_0x68c62d, '=')[_0x5533('0xc')](encodeURIComponent(_0x5442b8));
                    }
                    return _0x5442b8;
                }

                function _0x5c5d80(_0x48fe88, _0x12f297) {
                    var _0x1293fd = _0x12f297['outChain']
                        , _0x6cc95f = _0x12f297[_0x5533('0x1b')]
                        , _0x191235 = _0x12f297[_0x5533('0x13')];
                    if (void 0x0 === _0x6cc95f)
                        return '';
                    var _0x31d88d = Object['keys'](_0x6cc95f)['map'](function (_0x4b9609) {
                            return ''['concat'](_0x4b9609, '=')['concat'](_0x6cc95f[_0x4b9609], ';');
                        })[_0x5533('0x7')]('')
                        ,
                        _0x85f2f7 = '#Intent;'['concat'](_0x31d88d, 'S.browser_fallback_url=')['concat'](encodeURIComponent(_0x191235), _0x5533('0x11'))
                        , _0x38447f = _0x591b46(_0x48fe88, _0x12f297);
                    if (void 0x0 !== _0x1293fd && _0x1293fd) {
                        var _0x28f0e8 = _0x1293fd['path']
                            , _0x731d69 = _0x1293fd['key'];
                        return 'intent://'['concat'](_0x28f0e8, '?')['concat'](_0x731d69, '=')[_0x5533('0xc')](encodeURIComponent(_0x38447f))[_0x5533('0xc')](_0x85f2f7);
                    }
                    return _0x38447f = _0x38447f['slice'](_0x38447f['indexOf']('//') + 0x2),
                        'intent://'['concat'](_0x38447f)[_0x5533('0xc')](_0x85f2f7);
                }

                function _0x1426e3(_0x40c4aa, _0x470059) {
                    var _0x49ac58 = _0x470059['universal'];
                    if (void 0x0 === _0x49ac58)
                        return '';
                    var _0x38c772 = _0x49ac58[_0x5533('0xe')]
                        , _0x257647 = _0x49ac58[_0x5533('0x18')]
                        , _0x1c6348 = _0x40c4aa['path']
                        , _0x8d743a = _0x28e550(_0x40c4aa[_0x5533('0x1a')])
                        ,
                        _0x19f26f = 'https://'[_0x5533('0xc')](_0x38c772, '/')[_0x5533('0xc')](_0x1c6348)['concat'](_0x8d743a)
                        ,
                        _0x1d5026 = 'https://'['concat'](_0x38c772, '?')[_0x5533('0xc')](_0x257647, '=')['concat'](_0x1c6348)['concat'](_0x8d743a[_0x5533('0x25')]('?', '&'));
                    return _0x257647 ? _0x1d5026 : _0x19f26f;
                }

                function _0x43cb5a(_0x3a7e31, _0x398728) {
                    var _0x1295eb = _0x1666bb(_0x3a7e31, _0x398728);
                    return ''['concat'](_0x398728['yingyongbao'], '&android_schema=')['concat'](encodeURIComponent(_0x1295eb));
                }

                function _0x3b390c() {
                    'undefined' != typeof document && (void 0x0 !== document['hidden'] ? (_0x1ac6a4 = 'hidden',
                        _0x47472d = 'visibilitychange') : void 0x0 !== document['msHidden'] ? (_0x1ac6a4 = _0x5533('0x19'),
                        _0x47472d = 'msvisibilitychange') : void 0x0 !== document['webkitHidden'] && (_0x1ac6a4 = 'webkitHidden',
                        _0x47472d = 'webkitvisibilitychange'));
                }

                function _0x44af2c() {
                    return void 0x0 !== _0x1ac6a4 && document[_0x1ac6a4];
                }

                function _0x1bd868(_0x4acdda) {
                    window['top']['location'][_0x5533('0x1d')] = _0x4acdda;
                }

                function _0x38cfeb(_0x3c09aa) {
                    var _0x175b14 = document[_0x5533('0x2')]('a');
                    _0x175b14['setAttribute']('href', _0x3c09aa),
                        _0x175b14[_0x5533('0xb')]['display'] = 'none',
                        document['body']['appendChild'](_0x175b14),
                        _0x175b14['click']();
                }

                function _0x29c1b9(_0x4e8c24) {
                    _0x4487a2 || ((_0x4487a2 = document['createElement'](_0x5533('0xd')))['style']['cssText'] = 'display:none;border:0;width:0;height:0;',
                        document['body']['appendChild'](_0x4487a2)),
                        _0x4487a2['src'] = _0x4e8c24;
                }

                function _0x4cc3b9(_0x2cfae1, _0x370185) {
                    var _0xc89e92 = setTimeout(function () {
                        _0x44af2c() || _0x2cfae1();
                    }, _0x370185);
                    void 0x0 !== _0x47472d ? document['addEventListener'](_0x47472d, function () {
                        clearTimeout(_0xc89e92);
                    }) : window['addEventListener'](_0x5533('0xf'), function () {
                        clearTimeout(_0xc89e92);
                    });
                }

                return _0x3b390c(),
                    function () {
                        function _0x18687c(_0x51a798) {
                            _0x2efe9f(this, _0x18687c),
                                _0x5d44bf(this, 'options', void 0x0);
                            var _0x2c5dd2 = {
                                'timeout': 0x7d0
                            };
                            this['options'] = _0x498e1a(_0x2c5dd2, _0x51a798);
                        }

                        return _0x43e715(_0x18687c, [{
                            'key': 'generateScheme',
                            'value': function (_0x160dce) {
                                return _0x1666bb(_0x160dce, this['options']);
                            }
                        }, {
                            'key': _0x5533('0x5'),
                            'value': function (_0x38a752) {
                                return _0x5c5d80(_0x38a752, this['options']);
                            }
                        }, {
                            'key': 'generateUniversalLink',
                            'value': function (_0x2ea415) {
                                return _0x1426e3(_0x2ea415, this['options']);
                            }
                        }, {
                            'key': 'generateYingYongBao',
                            'value': function (_0x2eba5f) {
                                return _0x43cb5a(_0x2eba5f, this[_0x5533('0x9')]);
                            }
                        }, {
                            'key': 'checkOpen',
                            'value': function (_0x845644) {
                                var _0x56f394 = this['options']
                                    , _0x8066e9 = _0x56f394['logFunc'];
                                return _0x4cc3b9(function () {
                                    void 0x0 !== _0x8066e9 && _0x8066e9(_0x5533('0x8')),
                                        _0x845644();
                                }, _0x56f394['timeout']);
                            }
                        }, {
                            'key': 'fallToAppStore',
                            'value': function () {
                                var _0x224efa = this;
                                this['checkOpen'](function () {
                                    _0x1bd868(_0x224efa[_0x5533('0x9')]['appstore']);
                                });
                            }
                        }, {
                            'key': 'fallToFbUrl',
                            'value': function () {
                                var _0x396997 = this;
                                this['checkOpen'](function () {
                                    _0x1bd868(_0x396997[_0x5533('0x9')]['fallback']);
                                });
                            }
                        }, {
                            'key': 'fallToCustomCb',
                            'value': function (_0x12e83f) {
                                this['checkOpen'](function () {
                                    _0x12e83f();
                                });
                            }
                        }, {
                            'key': 'open',
                            'value': function (_0x5b33f6) {
                                var _0xc89c15, _0x44755a = this['options'], _0x1c9d55 = _0x44755a['universal'],
                                    _0x3f22c5 = _0x44755a['appstore'], _0x3cca9e = _0x44755a[_0x5533('0x1e')],
                                    _0x2f233a = _0x44755a['intent'], _0x43137f = _0x5b33f6['callback'],
                                    _0x3a46b4 = void 0x0 !== _0x1c9d55, _0x1e78c1 = this[_0x5533('0x6')](_0x5b33f6);
                                void 0x0 !== _0x3cca9e && _0x3cca9e('pending');
                                var _0x155dff = !!this['options']['isSupportWeibo'];
                                _0x55b909 ? _0x5eefa9 && -0x1 === _0x33c26d(_0x2471fe(), '7.0.5') || _0x176c82 && !_0x155dff ? _0x1bd868(_0x3f22c5) : _0x46698a() < 0x9 ? (_0x29c1b9(_0x1e78c1),
                                    _0xc89c15 = this[_0x5533('0x23')]) : !_0x3a46b4 || _0x209851 || _0x16673e || _0x2cd954 ? (_0x38cfeb(_0x1e78c1),
                                    _0xc89c15 = this['fallToAppStore']) : _0x1bd868(this['generateUniversalLink'](_0x5b33f6)) : _0x5eefa9 && void 0x0 !== this[_0x5533('0x9')]['yingyongbao'] ? _0x1bd868(this['generateYingYongBao'](_0x5b33f6)) : _0x564cb3 ? void 0x0 !== _0x2f233a ? _0x1bd868(this['generateIntent'](_0x5b33f6)) : (_0x1bd868(_0x1e78c1),
                                    _0xc89c15 = this[_0x5533('0xa')]) : _0x5eefa9 || _0x2b6eb9 || _0x176c82 && !_0x155dff || _0x2cd954 ? _0x1bd868(this['options']['fallback']) : (_0x29c1b9(_0x1e78c1),
                                    _0xc89c15 = this['fallToFbUrl']),
                                    void 0x0 === _0x43137f ? _0xc89c15 && _0xc89c15['call'](this) : this['fallToCustomCb'](_0x43137f);
                            }
                        }]),
                            _0x18687c;
                    }();
            }();
        }
    }
]);
