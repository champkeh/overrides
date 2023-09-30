var strings_26 = [
    "reviewSingle",
    "section",
    "default",
    "prototype",
    "push",
    "reviewDetailPage_header_back",
    "forEach",
    "_self",
    "bookReviewListStoreModule",
    "__esModule",
    "想法已删除",
    "debu",
    "div",
    "route",
    "review",
    "author",
    "gger",
    "htmlContent",
    "reviewDetailPage_header_username"
]

var _0x2497 = function (idx) {
    return strings_26[Number(idx)]
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push(
    [
        [26],
        {
            693: function (_0xf84a15, _0x3494c8, _0x30c0a8) {
                'use strict';
                _0x30c0a8['r'](_0x3494c8);
                var _0x8577b8 = _0x30c0a8(0x7ac)
                    , _0x2470c3 = _0x30c0a8(0x507);
                for (var _0x4af9d0 in _0x2470c3)
                    'default' !== _0x4af9d0 && function (_0x36c40e) {
                        _0x30c0a8['d'](_0x3494c8, _0x36c40e, function () {
                            return _0x2470c3[_0x36c40e];
                        });
                    }(_0x4af9d0);
                _0x30c0a8(0x6d7);
                var _0x141f79 = _0x30c0a8(0x1)
                    ,
                    _0x1de813 = Object(_0x141f79['a'])(_0x2470c3[_0x2497('0x2')], _0x8577b8['a'], _0x8577b8['b'], !0x1, null, null, null);
                _0x3494c8['default'] = _0x1de813['exports'];
            },
            1287: function (_0x5efbfd, _0x2983a3, _0x4a8a52) {
                'use strict';
                _0x4a8a52['r'](_0x2983a3);
                var _0x202794 = _0x4a8a52(0x508)
                    , _0x5900ee = _0x4a8a52['n'](_0x202794);
                for (var _0x1588bb in _0x202794)
                    'default' !== _0x1588bb && function (_0x82b2de) {
                        _0x4a8a52['d'](_0x2983a3, _0x82b2de, function () {
                            return _0x202794[_0x82b2de];
                        });
                    }(_0x1588bb);
                _0x2983a3['default'] = _0x5900ee['a'];
            },
            1288: function (_0x382c94, _0x555cc4, _0x199b16) {
                'use strict';
                Object['defineProperty'](_0x555cc4, _0x2497('0x9'), {
                    'value': !0x0
                });
                var _0x602942 = _0x4d021a(_0x199b16(0x33))
                    , _0xf49061 = _0x199b16(0x36)
                    , _0x35b816 = function (_0x868517) {
                    if (_0x868517 && _0x868517['__esModule'])
                        return _0x868517;
                    var _0x5283ba = {};
                    if (null != _0x868517)
                        for (var _0x2cd4b7 in _0x868517)
                            Object[_0x2497('0x3')]['hasOwnProperty']['call'](_0x868517, _0x2cd4b7) && (_0x5283ba[_0x2cd4b7] = _0x868517[_0x2cd4b7]);
                    return _0x5283ba['default'] = _0x868517,
                        _0x5283ba;
                }(_0x199b16(0x34))
                    , _0x17f4c7 = _0x4d021a(_0x199b16(0x170))
                    , _0x35fd9d = _0x4d021a(_0x199b16(0x2e9))
                    , _0x2bcc37 = _0x4d021a(_0x199b16(0x16f))
                    , _0x3a8481 = _0x4d021a(_0x199b16(0x49))
                    , _0x1934ea = _0x4d021a(_0x199b16(0x6d6))
                    , _0x3186f4 = _0x4d021a(_0x199b16(0x347));

                function _0x4d021a(_0x1b9bb9) {
                    return _0x1b9bb9 && _0x1b9bb9['__esModule'] ? _0x1b9bb9 : {
                        'default': _0x1b9bb9
                    };
                }

                var _0x20d1e9 = _0x199b16(0x8)
                    , _0x260fbc = _0x199b16(0x37)
                    , _0x621a3f = _0x2497('0x8')
                    , _0x2c2ace = ['/web/reader/', '/web/bookDetail/', '/web/bookReview/list'];
                _0x555cc4['default'] = {
                    'name': 'ReviewDetailPage',
                    'components': {
                        'RatingLevelBar': _0x3186f4[_0x2497('0x2')],
                        'Avatar': _0x17f4c7['default']
                    },
                    'data': function () {
                        return {};
                    },
                    'computed': (0x0,
                        _0x602942['default'])({}, (0x0,
                        _0xf49061['mapState'])({
                        'reviewSingle': function (_0x1494f8) {
                            return _0x1494f8[_0x621a3f] && _0x1494f8[_0x621a3f][_0x2497('0x0')] ? _0x1494f8[_0x621a3f]['reviewSingle'] : '';
                        }
                    }), {
                        'displayContent': function () {
                            if (this['reviewSingle'] && this[_0x2497('0x0')][_0x2497('0x11')]) {
                                var _0x2d3cde = this['reviewSingle']['htmlContent'];
                                return _0x1934ea['default']['sanitize'](_0x2d3cde, {
                                    'ALLOWED_TAGS': ['span', 'p', 'h1', 'h2', 'b', 'strong', 'blockquote', 'ul', 'li'],
                                    'ALLOWED_ATTR': []
                                });
                            }
                            return this['reviewSingle'] && this[_0x2497('0x0')][_0x2497('0xe')] && this['reviewSingle'][_0x2497('0xe')]['content'] ? this['reviewSingle']['review']['content'] : '';
                        },
                        'author': function () {
                            return this['reviewSingle'] && this['reviewSingle']['review'] && this[_0x2497('0x0')]['review'][_0x2497('0xf')] ? this['reviewSingle'][_0x2497('0xe')]['author'] : null;
                        }
                    }),
                    'methods': {
                        'handleBack': function () {
                            var _0x4551ab;
                            (_0x4551ab = !0x1,
                            document['referrer'] && _0x2c2ace[_0x2497('0x6')](function (_0x49ba1b) {
                                document['referrer']['includes'](_0x49ba1b) && (_0x4551ab = !0x0);
                            }),
                                _0x4551ab) ? window['history']['go'](-0x1) : this[_0x2497('0x0')][_0x2497('0xe')] && this['reviewSingle']['review']['bookId'] ? (0x0,
                                _0x3a8481['default'])(_0x260fbc['bookDetailURL'](this['reviewSingle']['review']['bookId'])) : (0x0,
                                _0x3a8481['default'])('/');
                        }
                    },
                    'asyncData': function (_0x411b2c) {
                        var _0x19aa9c = _0x411b2c['store']
                            , _0x341b85 = _0x411b2c['envConfig'];
                        if (!_0x20d1e9['isEnvClient']) {
                            _0x19aa9c['registerModule'](_0x621a3f, (0x0,
                                _0x35fd9d['default'])());
                            var _0x8650a7 = _0x19aa9c['state'][_0x2497('0xd')]['params']['reviewId'];
                            return _0x19aa9c['dispatch'](_0x35b816['FETCH_BOOK_REVIEW_SINGLE'], {
                                'envConfig': _0x341b85,
                                'reviewId': _0x8650a7
                            });
                        }
                    },
                    'created': function () {
                        _0x20d1e9['isEnvClient'] && (this['$store']['registerModule'](_0x621a3f, (0x0,
                            _0x35fd9d['default'])(), {
                            'preserveState': !0x0
                        }),
                            (0x0,
                                _0x2bcc37['default'])());
                    },
                    'mounted': function () {
                    },
                    'destroyed': function () {
                    }
                };
            },
            1289: function (_0x205be9, _0x5aa94a, _0x5b3e93) {
            },
            1751: function (_0x811f84, _0x598e41, _0x39f980) {
                'use strict';
                var _0x1282c5 = _0x39f980(0x509);
                _0x39f980['n'](_0x1282c5)['a'];
            },
            1964: function (_0x4d447a, _0x2c5a8f, _0x57da17) {
                'use strict';
                var _0x897ae = function () {
                    var _0xb5903e = this
                        , _0x1c24ff = _0xb5903e['$createElement']
                        , _0xb746bf = _0xb5903e[_0x2497('0x7')]['_c'] || _0x1c24ff;
                    return _0xb746bf(_0x2497('0xc'), {
                        'staticClass': 'review_detail_container'
                    }, [_0xb746bf('div', {
                        'staticClass': 'app_content'
                    }, [_0xb746bf('header', {
                        'staticClass': 'reviewDetailPage_header'
                    }, [_0xb5903e['isElectron'] ? _0xb5903e['_e']() : _0xb746bf('button', {
                        'staticClass': _0x2497('0x5'),
                        'on': {
                            'click': _0xb5903e['handleBack']
                        }
                    }), _0xb5903e['author'] ? _0xb746bf('div', {
                        'staticClass': 'reviewDetailPage_header_info'
                    }, [_0xb746bf('avatar', {
                        'attrs': {
                            'clickable': !0x1,
                            'src': _0xb5903e['author']['avatar'],
                            'custom-selector': 'reviewDetailPage_header_avatar'
                        }
                    }), _0xb746bf('div', {
                        'staticClass': _0x2497('0x12')
                    }, [_0xb5903e['_v'](_0xb5903e['_s'](_0xb5903e['author']['name']))]), _0xb5903e['reviewSingle'] ? _0xb746bf('rating-level-bar', {
                        'attrs': {
                            'review': _0xb5903e['reviewSingle']['review']
                        }
                    }) : _0xb5903e['_e']()], 0x1) : _0xb5903e['_e']()]), _0xb5903e['reviewSingle'] && _0xb5903e['reviewSingle']['reviewId'] ? _0xb746bf('section', {
                        'staticClass': 'reviewDetailPage_content',
                        'domProps': {
                            'innerHTML': _0xb5903e['_s'](_0xb5903e['displayContent'])
                        }
                    }) : _0xb746bf(_0x2497('0x1'), {
                        'staticClass': 'reviewDetailPage_empty'
                    }, [_0xb746bf('p', [_0xb5903e['_v'](_0x2497('0xa'))])])])]);
                }
                    , _0x21b9c2 = [];
                _0x57da17['d'](_0x2c5a8f, 'a', function () {
                    return _0x897ae;
                }),
                    _0x57da17['d'](_0x2c5a8f, 'b', function () {
                        return _0x21b9c2;
                    });
            },
        }
    ]
);
