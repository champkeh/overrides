var strings_12 = [
    "INSERT_BOOKMARK_INTO_LIST",
    "default",
    "apply",
    "commit",
    "ADD_BOOKMARK",
    "wr_ratingLevelBar_icon",
    "FETCH_BEST_BOOK_MARKS",
    "userVid",
    "listMode",
    "UPDATE_BOOK_REVIEW_BOOK_INFO",
    "filter",
    "FETCH_BOOK_REVIEW_LIST",
    "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "ReviewListTypeBookTop",
    "listType",
    "envConfig",
    "chapters",
    "abstract",
    "UPDATE_BOOK_BOOKMARK_LIST_FETCHING",
    "add review no bookId",
    "data",
    "get",
    "constructor",
    "catch",
    "review",
    "UPDATE_BOOK_REVIEW_LIST",
    "then",
    "ReviewListTypeBookFriendTop",
    "isEnvClient",
    "poor",
    "bookmarks",
    "noteReviews",
    "webpackJsonp",
    "call",
    "review list no bookId",
    "bestBookMarks",
    "bestBookMarks fail: ",
    "style",
    "type",
    "mine",
    "/web/book/bestbookmarks",
    "isFetching",
    "__esModule",
    "bookmarkList",
    "htmlContent",
    "newRatingLevel",
    "length",
    "append",
    "totalCount",
    "add review no content"
]

var _0x2f31 = function (idx) {
    return strings_12[Number(idx)]
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push(
    [
        [12],
        {
            723: function (_0x9e9ff6, _0x43c2c3, _0x462a3c) {
                'use strict';
                _0x462a3c['r'](_0x43c2c3);
                var _0x2a1e57 = _0x462a3c(0x2d4)
                    , _0x4a0ba5 = _0x462a3c['n'](_0x2a1e57);
                for (var _0x3bac36 in _0x2a1e57)
                    'default' !== _0x3bac36 && function (_0x59139f) {
                        _0x462a3c['d'](_0x43c2c3, _0x59139f, function () {
                            return _0x2a1e57[_0x59139f];
                        });
                    }(_0x3bac36);
                _0x43c2c3['default'] = _0x4a0ba5['a'];
            },
            724: function (_0x1722a8, _0x33540e, _0x14b675) {
                'use strict';
                Object['defineProperty'](_0x33540e, '__esModule', {
                    'value': !0x0
                }),
                    _0x33540e['default'] = {
                        'name': 'RatingLevelBar',
                        'props': {
                            'review': {
                                'type': Object,
                                'require': !0x0
                            },
                            'customSelector': String
                        },
                        'computed': {
                            'newRatingLevel': function () {
                                return this['review'] && this[_0x2f31('0x18')]['newRatingLevel'] ? this['review']['newRatingLevel'] : 0x0;
                            },
                            'newRatingLevelToText': function () {
                                return this[_0x2f31('0x2d')] > 0x0 ? ['推荐', '认为一般', '认为不行'][this['newRatingLevel'] - 0x1] : '';
                            },
                            'newRatingIconSelector': function () {
                                var _0x166269 = ['good', 'fair', _0x2f31('0x1d')][this['newRatingLevel'] - 0x1];
                                return 'good' === _0x166269 ? 'wr_ratingLevelBar_Good' : 'fair' === _0x166269 ? 'wr_ratingLevelBar_Fair' : 'poor' === _0x166269 ? 'wr_ratingLevelBar_Poor' : '';
                            }
                        }
                    };
            },
            725: function (_0x2437cd, _0x235eea, _0x26fa3b) {
            },
            745: function (_0x9f34ce, _0x3586dc, _0x4a0f1f) {
                'use strict';
                Object['defineProperty'](_0x3586dc, '__esModule', {
                    'value': !0x0
                });
                var _0xf668c0 = _0x4a291d(_0x4a0f1f(0x2e7))
                    , _0x3dd08a = _0x4a291d(_0x4a0f1f(0xc1))
                    , _0x3503ed = _0x4a291d(_0x4a0f1f(0x33));
                _0x3586dc['default'] = function () {
                    var _0x9f3a8c, _0x316fec;
                    return {
                        'state': {
                            'bookInfo': {},
                            'reviewSingle': {},
                            'topReviews': {
                                'reviewListType': _0xe87e45['ReviewListTypeBookTop'],
                                'synckey': 0x0,
                                'reviewList': [],
                                'totalCount': 0x0,
                                'isFetching': !0x1,
                                'hasMore': !0x1
                            },
                            'topFriendReviews': {
                                'reviewListType': _0xe87e45['ReviewListTypeBookFriendTop'],
                                'synckey': 0x0,
                                'reviewList': [],
                                'totalCount': 0x0,
                                'isFetching': !0x1,
                                'hasMore': !0x1
                            },
                            'noteReviews': {
                                'reviewListType': _0xe87e45['ReviewListTypeNote'],
                                'synckey': 0x0,
                                'reviewList': [],
                                'totalCount': 0x0,
                                'isFetching': !0x1,
                                'hasMore': !0x1
                            },
                            'bookmarks': {
                                'bookmarkList': [],
                                'isFetching': !0x1
                            },
                            'bestBookMarks': {
                                'synckey': 0x0,
                                'items': [],
                                'totalCount': 0x0
                            }
                        },
                        'getters': {
                            'notes': function (_0x401d99) {
                                var _0x32ff2f = _0x401d99 && _0x401d99['bookmarks'] || {
                                        'bookmarkList': [],
                                        'isFetching': !0x1
                                    }
                                    , _0xefc98 = _0x401d99 && _0x401d99['noteReviews'] || {}
                                    ,
                                    _0x2f8e8b = _0xe120d5['Note']['sortedNoteList'](_0x32ff2f[_0x2f31('0x2b')], _0xefc98['reviewList']);
                                return {
                                    'isFetching': _0x32ff2f['isFetching'] || _0xefc98['isFetching'],
                                    'noteList': _0x2f8e8b,
                                    'reviewSynckey': _0xefc98['synckey']
                                };
                            }
                        },
                        'mutations': (_0x9f3a8c = {},
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb[_0x2f31('0x9')], function (_0x5be33c, _0x52177b) {
                                _0x5be33c['bookInfo'] = _0x52177b;
                            }),
                            (0x0,
                                _0x3dd08a[_0x2f31('0x1')])(_0x9f3a8c, _0x2dbdfb['UPDATE_BOOK_REVIEW_SINGLE'], function (_0x18f472, _0x300392) {
                                _0x18f472['reviewSingle'] = _0x300392;
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb[_0x2f31('0x19')], function (_0x4ea7a5, _0x373bdd) {
                                var _0x54fa43 = _0x373bdd['reviewListType']
                                    , _0x5a7c2a = _0x373bdd['reviewList']
                                    , _0xfc7bb2 = _0x373bdd['removed']
                                    , _0x2fe1f4 = _0x373bdd[_0x2f31('0x30')]
                                    , _0x28ec4a = _0x373bdd['hasMore']
                                    , _0x21de8c = _0x373bdd[_0x2f31('0x2f')]
                                    , _0x214a25 = _0xf953b(_0x54fa43);
                                if (_0x214a25 && _0x4ea7a5[_0x214a25]) {
                                    _0x54fa43 !== _0xe87e45[_0x2f31('0xd')] && _0x54fa43 !== _0xe87e45[_0x2f31('0x1b')] || (_0x5a7c2a = _0x5a7c2a[_0x2f31('0xa')](function (_0x880415) {
                                        return void 0x0 !== _0x880415['review'] && _0x880415['review'][_0x2f31('0x26')] === _0x41aed3['ReviewTypeRecommend'];
                                    }));
                                    var _0x2ee359 = _0x21de8c ? _0x4ea7a5[_0x214a25]['reviewList'] : [];
                                    0x0 !== _0xfc7bb2[_0x2f31('0x2e')] && (_0x2ee359 = _0x2ee359['filter'](function (_0x530684) {
                                        return -0x1 === _0xfc7bb2['indexOf'](_0x530684['reviewId']);
                                    })),
                                        _0x5a7c2a['forEach'](function (_0x29fc87) {
                                            void 0x0 !== _0x29fc87['review'] && _0x2ee359['push'](_0x29fc87);
                                        }),
                                        _0x4ea7a5[_0x214a25] = (0x0,
                                            _0x3503ed['default'])({}, _0x4ea7a5[_0x214a25], {
                                            'reviewList': _0x2ee359,
                                            'totalCount': _0x2fe1f4,
                                            'hasMore': _0x28ec4a
                                        });
                                }
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb['UPDATE_BOOK_REVIEW_LIST_SYNC_KEY'], function (_0x909fbf, _0x237c64) {
                                var _0x1142cd = _0x237c64[_0x2f31('0xe')]
                                    , _0x544fa6 = _0x237c64['synckey']
                                    , _0xd99331 = _0xf953b(_0x1142cd);
                                _0xd99331 && _0x909fbf[_0xd99331] && (_0x909fbf[_0xd99331] = (0x0,
                                    _0x3503ed['default'])({}, _0x909fbf[_0xd99331], {
                                    'synckey': _0x544fa6
                                }));
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb['UPDATE_BOOK_REVIEW_FETCHING'], function (_0x251fe6, _0x93a37e) {
                                var _0x27f921 = _0x93a37e['listType']
                                    , _0x126598 = _0x93a37e['isFetching']
                                    , _0x1cd6b8 = _0xf953b(_0x27f921);
                                _0x1cd6b8 && _0x251fe6[_0x1cd6b8] && (_0x251fe6[_0x1cd6b8] = (0x0,
                                    _0x3503ed['default'])({}, _0x251fe6[_0x1cd6b8], {
                                    'isFetching': _0x126598
                                }));
                            }),
                            (0x0,
                                _0x3dd08a[_0x2f31('0x1')])(_0x9f3a8c, _0x2dbdfb['UPDATE_BOOK_BOOKMARK_LIST'], function (_0x359eca, _0x41cba8) {
                                var _0x2766c4 = _0x41cba8[_0x2f31('0x2b')]
                                    , _0x3abc72 = _0x41cba8['chapters']
                                    , _0x62c16d = _0x41cba8['isPdf']
                                    , _0x41812a = {};
                                _0x3abc72['forEach'](function (_0xb83a32) {
                                    _0x41812a[_0xb83a32['chapterUid']] = _0xb83a32;
                                }),
                                    _0x2766c4['forEach'](function (_0x4f16c3) {
                                        var _0x491091 = _0x41812a[_0x4f16c3['chapterUid']];
                                        _0x4f16c3['chapterIdx'] = _0x491091 ? _0x491091['chapterIdx'] : _0x62c16d ? _0x4f16c3['chapterUid'] : -0x1;
                                    }),
                                    _0x359eca['bookmarks'] = (0x0,
                                        _0x3503ed['default'])({}, _0x359eca[_0x2f31('0x1e')], {
                                        'bookmarkList': _0x2766c4
                                    });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb[_0x2f31('0x12')], function (_0xe15a6d, _0x101125) {
                                var _0x261cd5 = _0x101125[_0x2f31('0x29')];
                                _0xe15a6d['bookmarks'] = (0x0,
                                    _0x3503ed[_0x2f31('0x1')])({}, _0xe15a6d['bookmarks'], {
                                    'isFetching': _0x261cd5
                                });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb['INSERT_BOOKMARK_INTO_LIST'], function (_0x4061f2, _0x10f55a) {
                                var _0x5d96bb = _0x4061f2[_0x2f31('0x1e')][_0x2f31('0x2b')];
                                _0x5d96bb['push'](_0x10f55a),
                                    _0x4061f2['bookmarks'] = (0x0,
                                        _0x3503ed['default'])({}, _0x4061f2['bookmarks'], {
                                        'bookmarkList': _0x5d96bb
                                    });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb['REMOVE_BOOKMARK_FROM_LIST'], function (_0x5745e0, _0x2c6810) {
                                for (var _0x499253 = _0x5745e0['bookmarks']['bookmarkList'], _0x1fbdb9 = -0x1, _0xcccc2e = 0x0, _0xbff151 = _0x499253['length']; _0xcccc2e < _0xbff151; _0xcccc2e++)
                                    _0x499253[_0xcccc2e]['bookmarkId'] === _0x2c6810 && (_0x1fbdb9 = _0xcccc2e);
                                -0x1 !== _0x1fbdb9 && _0x499253['splice'](_0x1fbdb9, 0x1),
                                    _0x5745e0['bookmarks'] = (0x0,
                                        _0x3503ed['default'])({}, _0x5745e0['bookmarks'], {
                                        'bookmarkList': _0x499253
                                    });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x9f3a8c, _0x2dbdfb['UPDATE_BOOKMARK_IN_LIST'], function (_0x149426, _0x464ee2) {
                                for (var _0x1fb7e6 = _0x464ee2['bookmarkId'], _0x278978 = _0x464ee2[_0x2f31('0x25')], _0x30ba74 = _0x464ee2['colorStyle'], _0x5798e7 = _0x149426['bookmarks']['bookmarkList'], _0x10ca8b = 0x0, _0x10d0b0 = _0x5798e7[_0x2f31('0x2e')]; _0x10ca8b < _0x10d0b0; _0x10ca8b++) {
                                    var _0x39f243 = _0x5798e7[_0x10ca8b];
                                    if (_0x39f243['bookmarkId'] === _0x1fb7e6) {
                                        _0x39f243['style'] = _0x278978,
                                            _0x39f243['colorStyle'] = _0x30ba74;
                                        break;
                                    }
                                }
                                _0x149426[_0x2f31('0x1e')] = (0x0,
                                    _0x3503ed[_0x2f31('0x1')])({}, _0x149426['bookmarks'], {
                                    'bookmarkList': _0x5798e7
                                });
                            }),
                            (0x0,
                                _0x3dd08a[_0x2f31('0x1')])(_0x9f3a8c, _0x2dbdfb['UPDATE_BEST_BOOK_MARKS'], function (_0xc059de, _0x370c15) {
                                var _0x49bb16 = _0x370c15['items']
                                    , _0x29210e = _0x370c15['totalCount']
                                    , _0x191052 = _0x370c15['synckey'];
                                _0xc059de['bestBookMarks'] = {
                                    'items': _0x49bb16 || [],
                                    'totalCount': _0x29210e || 0x0,
                                    'synckey': _0x191052
                                };
                            }),
                            _0x9f3a8c),
                        'actions': (_0x316fec = {},
                            (0x0,
                                _0x3dd08a['default'])(_0x316fec, _0x363d4e['FETCH_BOOK_REVIEW_BOOK_INFO'], function (_0x3be7bc, _0x165bbb) {
                                var _0x1b7e97 = this
                                    , _0xd3d0b2 = _0x3be7bc['commit']
                                    , _0x505b75 = _0x3be7bc['dispatch']
                                    , _0xc354eb = _0x165bbb['bookId']
                                    , _0xa221a = _0x165bbb['envConfig'] || {}
                                    , _0x3a7de4 = _0x165bbb['isLogin'] || !0x1;
                                return (!_0xc354eb || _0xc354eb['length'] <= 0x0) && (this['logInfo']('bookInfo\x20no\x20bookId'),
                                _0x2802af[_0x2f31('0x1c')] && _0x2802af['inDevelopment']() && alert('bookInfo\x20no\x20bookId')),
                                    _0x505b75(_0x363d4e['FETCH_BOOK_INFO'], {
                                        'bookId': _0xc354eb,
                                        'isLogin': _0x3a7de4,
                                        'envConfig': _0xa221a
                                    })[_0x2f31('0x1a')](function (_0x4a8966) {
                                        var _0x6481df = _0x4a8966 || {};
                                        _0xd3d0b2(_0x2dbdfb['UPDATE_BOOK_REVIEW_BOOK_INFO'], _0x6481df);
                                    })['catch'](function (_0x59b424) {
                                        _0x1b7e97['logInfo']('bookInfo\x20err\x20=\x20' + _0x59b424);
                                    });
                            }),
                            (0x0,
                                _0x3dd08a[_0x2f31('0x1')])(_0x316fec, _0x363d4e[_0x2f31('0xb')], function (_0x23004a, _0x285f15) {
                                var _0xd324c6 = this
                                    , _0x227a02 = _0x23004a['commit']
                                    , _0xf0891b = _0x285f15['bookId']
                                    , _0x221604 = _0x285f15[_0x2f31('0xf')] || {}
                                    , _0x31ed48 = _0x285f15[_0x2f31('0x2f')] || !0x1;
                                _0xf0891b || (this['logInfo'](_0x2f31('0x22')),
                                _0x2802af['isEnvClient'] && _0x2802af['inDevelopment']() && alert('review\x20lsit\x20no\x20bookId'));
                                var _0xcfa79d = {
                                    'bookId': _0xf0891b
                                };
                                return _0xcfa79d['listType'] = _0x1fe2be[_0x2f31('0x15')](_0x285f15, 'listType', _0xe87e45['ReviewListTypeBookTop']),
                                    _0xcfa79d['maxIdx'] = _0x1fe2be['get'](_0x285f15, 'maxIdx', 0x0),
                                    _0xcfa79d['count'] = _0x1fe2be['get'](_0x285f15, 'count', 0x14),
                                    _0xcfa79d[_0x2f31('0x8')] = 0x2,
                                    _0xcfa79d['synckey'] = _0x1fe2be['get'](_0x285f15, 'synckey', 0x0),
                                void 0x0 !== _0x285f15[_0x2f31('0x7')] && (_0xcfa79d['userVid'] = _0x285f15['userVid']),
                                void 0x0 !== _0x285f15['mine'] && (_0xcfa79d['mine'] = _0x285f15[_0x2f31('0x27')]),
                                    _0x227a02(_0x2dbdfb['UPDATE_BOOK_REVIEW_FETCHING'], {
                                        'listType': _0xcfa79d['listType'],
                                        'isFetching': !0x0
                                    }),
                                    (0x0,
                                        _0x23a054['default'])('/web/review/list', (0x0,
                                        _0x3503ed[_0x2f31('0x1')])({}, _0xcfa79d, _0x221604))['then'](function (_0x227c9f) {
                                        var _0x4a2e79 = _0x227c9f['data']
                                            , _0x5ad7b2 = _0x1fe2be['get'](_0x4a2e79, 'reviews', [])
                                            , _0x5ead71 = _0x1fe2be['get'](_0x4a2e79, 'removed', [])
                                            , _0x566fa4 = _0x1fe2be['get'](_0x4a2e79, 'totalCount', 0x0)
                                            , _0x42cd13 = _0x5ad7b2['length'] >= _0xcfa79d['count']
                                            , _0x314f72 = _0x1fe2be['get'](_0x4a2e79, 'synckey', 0x0);
                                        return _0x227a02(_0x2dbdfb[_0x2f31('0x19')], {
                                            'reviewListType': _0xcfa79d['listType'],
                                            'reviewList': _0x5ad7b2,
                                            'removed': _0x5ead71,
                                            'totalCount': _0x566fa4,
                                            'hasMore': _0x42cd13,
                                            'append': _0x31ed48
                                        }),
                                            _0x227a02(_0x2dbdfb['UPDATE_BOOK_REVIEW_FETCHING'], {
                                                'listType': _0xcfa79d['listType'],
                                                'isFetching': !0x1
                                            }),
                                            _0x227a02(_0x2dbdfb['UPDATE_BOOK_REVIEW_LIST_SYNC_KEY'], {
                                                'listType': _0xcfa79d['listType'],
                                                'synckey': _0x314f72
                                            }),
                                            _0x227c9f;
                                    })['catch'](function (_0x3f67b8) {
                                        return _0x227a02(_0x2dbdfb['UPDATE_BOOK_REVIEW_FETCHING'], {
                                            'listType': _0xcfa79d['listType'],
                                            'isFetching': !0x1
                                        }),
                                            _0xd324c6['logInfo']('review\x20list\x20err\x20=\x20' + _0x3f67b8),
                                            _0x3f67b8;
                                    });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x316fec, _0x363d4e['FETCH_BOOK_REVIEW_SINGLE'], function (_0x297a35, _0x395275) {
                                var _0xc49668 = this
                                    , _0x46b78c = _0x297a35['commit']
                                    , _0x1cb039 = _0x395275['reviewId']
                                    , _0x3028c6 = _0x395275[_0x2f31('0xf')] || {};
                                return _0x1cb039 || (this['logInfo']('reviewSingle\x20no\x20reviewId'),
                                _0x2802af['isEnvClient'] && _0x2802af['inDevelopment']() && alert('reviewSingle\x20no\x20reviewId')),
                                    (0x0,
                                        _0x23a054[_0x2f31('0x1')])('/web/review/single', (0x0,
                                        _0x3503ed['default'])({
                                        'reviewId': _0x1cb039
                                    }, _0x3028c6))['then'](function (_0x2df93d) {
                                        var _0x27cdb0 = _0x1fe2be[_0x2f31('0x15')](_0x2df93d, 'data', {});
                                        return _0x46b78c(_0x2dbdfb['UPDATE_BOOK_REVIEW_SINGLE'], _0x27cdb0),
                                            _0x2df93d;
                                    })['catch'](function (_0x426165) {
                                        return _0xc49668['logInfo']('reviewSingle\x20err\x20=\x20' + _0x426165),
                                            _0x426165;
                                    });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x316fec, _0x363d4e['FETCH_BOOK_REVIEW_ADD'], function (_0x287ee2, _0x52760a) {
                                (0x0,
                                    _0xf668c0['default'])(_0x287ee2);
                                var _0x2f34d8 = {
                                    'type': _0x52760a[_0x2f31('0x26')] || _0x41aed3['ReviewTypeRecommend'],
                                    'bookId': '',
                                    'chapterUid': 0x0,
                                    'content': '',
                                    'bookVersion': 0x0
                                }
                                    , _0xce93a = _0x52760a['bookId']
                                    , _0x3a10be = _0x52760a['content']
                                    , _0x11d24e = _0x52760a[_0x2f31('0x2c')]
                                    , _0x3e57cc = _0x52760a[_0x2f31('0x2d')]
                                    , _0x1f2efa = _0x52760a['chapterUid']
                                    , _0x52c1ca = _0x52760a['isPrivate']
                                    , _0xc3236e = _0x52760a[_0x2f31('0x11')]
                                    , _0x5b7842 = _0x52760a['refReviewId']
                                    , _0x31c779 = _0x52760a['range']
                                    , _0x48bb99 = _0x52760a['isLike'];
                                return !_0xce93a || _0xce93a[_0x2f31('0x2e')] <= 0x0 ? (this['logInfo'](_0x2f31('0x13')),
                                _0x2802af['isEnvClient'] && _0x2802af['inDevelopment']() && alert('add\x20review\x20no\x20bookId')) : _0x2f34d8['bookId'] = _0xce93a,
                                _0x3e57cc || _0x3a10be && !(_0x3a10be['length'] <= 0x0) || _0x11d24e || (this['logInfo']('add\x20review\x20content'),
                                _0x2802af['isEnvClient'] && _0x2802af['inDevelopment']() && alert(_0x2f31('0x31'))),
                                _0x3a10be && (_0x2f34d8['content'] = _0x3a10be),
                                _0x11d24e && (_0x2f34d8[_0x2f31('0x2c')] = _0x11d24e,
                                    _0x2f34d8['topicRanges'] = ['0-0']),
                                _0x1f2efa && (_0x2f34d8['chapterUid'] = _0x1f2efa),
                                _0x3e57cc && (_0x2f34d8['newRatingLevel'] = _0x3e57cc),
                                0x1 === _0x52c1ca && (_0x2f34d8['friendship'] = 0x1),
                                0x2 === _0x52c1ca && (_0x2f34d8['isPrivate'] = 0x1),
                                _0xc3236e && (_0x2f34d8[_0x2f31('0x11')] = _0xc3236e),
                                _0x48bb99 && (_0x2f34d8['isLike'] = _0x48bb99),
                                _0x5b7842 && (_0x2f34d8['refReviewId'] = _0x5b7842),
                                _0x31c779 && (_0x2f34d8['range'] = _0x31c779),
                                    (0x0,
                                        _0x479fc8[_0x2f31('0x1')])('/web/review/add', _0x2f34d8)[_0x2f31('0x1a')](function (_0x3758ff) {
                                        return _0x3758ff;
                                    })['catch'](function (_0x46722c) {
                                        return _0x46722c;
                                    });
                            }),
                            (0x0,
                                _0x3dd08a[_0x2f31('0x1')])(_0x316fec, _0x363d4e['FETCH_BOOK_REVIEW_DELETE'], function (_0x183b0e, _0x11e6c5) {
                                (0x0,
                                    _0xf668c0['default'])(_0x183b0e);
                                var _0x886e02 = _0x11e6c5['reviewId'];
                                return _0x886e02 || (this['logInfo']('reviewDelete\x20no\x20reviewId'),
                                _0x2802af['isEnvClient'] && _0x2802af['inDevelopment']() && alert('reviewSingle\x20no\x20reviewId')),
                                    (0x0,
                                        _0x479fc8['default'])('/web/review/delete', {
                                        'reviewId': _0x886e02
                                    })[_0x2f31('0x1a')](function (_0x4bab32) {
                                        return _0x4bab32;
                                    })['catch'](function (_0x513248) {
                                        return _0x513248;
                                    });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x316fec, _0x363d4e['FETCH_BOOK_BOOKMARK_LIST'], function (_0x2a866b, _0x5ea532) {
                                var _0xfeafff = _0x2a866b['commit']
                                    , _0x1ac09a = _0x5ea532['bookId'];
                                if (_0x1ac09a) {
                                    var _0x13710f = {
                                        'bookId': _0x1ac09a
                                    };
                                    return _0x5ea532['type'] && (_0x13710f['type'] = _0x5ea532['type']),
                                        _0xfeafff(_0x2dbdfb['UPDATE_BOOK_BOOKMARK_LIST_FETCHING'], {
                                            'isFetching': !0x0
                                        }),
                                        (0x0,
                                            _0x23a054[_0x2f31('0x1')])('/web/book/bookmarklist', _0x13710f)['then'](function (_0x57822d) {
                                            var _0x1279ff = _0x1fe2be['get'](_0x57822d['data'], 'updated', [])
                                                ,
                                                _0x451292 = _0x1fe2be['get'](_0x57822d[_0x2f31('0x14')], _0x2f31('0x10'), []);
                                            return _0xfeafff(_0x2dbdfb['UPDATE_BOOK_BOOKMARK_LIST'], {
                                                'bookmarkList': _0x1279ff,
                                                'chapters': _0x451292,
                                                'isPdf': _0x5ea532['isPdf']
                                            }),
                                                _0xfeafff(_0x2dbdfb['UPDATE_BOOK_BOOKMARK_LIST_FETCHING'], {
                                                    'isFetching': !0x1
                                                }),
                                                _0x57822d;
                                        })['catch'](function (_0x535bf6) {
                                            return _0xfeafff(_0x2dbdfb['UPDATE_BOOK_BOOKMARK_LIST_FETCHING'], {
                                                'isFetching': !0x1
                                            }),
                                                _0x535bf6;
                                        });
                                }
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x316fec, _0x363d4e[_0x2f31('0x4')], function (_0x193139, _0x5a6d72) {
                                var _0x265175 = this
                                    , _0x237f8f = _0x193139[_0x2f31('0x3')];
                                return (0x0,
                                    _0x479fc8['default'])('/web/book/addBookmark', _0x5a6d72)['then'](function (_0x322050) {
                                    var _0x30a866 = _0x322050['data'];
                                    console['log']('fetchAddBookmark\x20succ:\x20', _0x5a6d72, _0x30a866);
                                    var _0x4ea8a5 = _0x1fe2be['get'](_0x30a866, 'bookmarkId')
                                        , _0x49364f = _0x4ea8a5 && _0x4ea8a5['length'] > 0x0;
                                    if (_0x49364f) {
                                        var _0x581838 = (0x0,
                                            _0x3503ed['default'])({}, _0x5a6d72, {
                                            'bookmarkId': _0x4ea8a5
                                        });
                                        _0x237f8f(_0x2dbdfb[_0x2f31('0x0')], _0x581838);
                                    }
                                    return {
                                        'succ': _0x49364f ? 0x1 : 0x0,
                                        'bookmarkId': _0x4ea8a5
                                    };
                                })[_0x2f31('0x17')](function (_0x1376ba) {
                                    return _0x265175['logError']('fetchAddBookmark\x20fail:\x20', _0x5a6d72, _0x1376ba),
                                        {
                                            'succ': 0x0
                                        };
                                });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x316fec, _0x363d4e['REMOVE_BOOKMARK'], function (_0x39b0b0, _0x32f4d3) {
                                var _0x15aac3 = this
                                    , _0x4ea017 = _0x39b0b0['commit'];
                                return (0x0,
                                    _0x479fc8['default'])('/web/book/removeBookmark', _0x32f4d3)['then'](function (_0x32772f) {
                                    var _0x586233 = 0x1 === _0x32772f['data']['succ'];
                                    return _0x586233 && _0x4ea017(_0x2dbdfb['REMOVE_BOOKMARK_FROM_LIST'], _0x32f4d3['bookmarkId']),
                                        {
                                            'succ': _0x586233 ? 0x1 : 0x0
                                        };
                                })['catch'](function (_0x51db3a) {
                                    return _0x15aac3['logError']('removeBookmark\x20fail:\x20', _0x32f4d3, _0x51db3a),
                                        {
                                            'succ': 0x0
                                        };
                                });
                            }),
                            (0x0,
                                _0x3dd08a[_0x2f31('0x1')])(_0x316fec, _0x363d4e['UPDATE_BOOKMARK'], function (_0x1e9d30, _0x24b310) {
                                var _0x313947 = this
                                    , _0x115b78 = _0x1e9d30[_0x2f31('0x3')];
                                return (0x0,
                                    _0x479fc8[_0x2f31('0x1')])('/web/book/updateBookmark', _0x24b310)[_0x2f31('0x1a')](function (_0x4810ae) {
                                    var _0x56dd72 = 0x1 === _0x4810ae['data']['succ'];
                                    return _0x56dd72 && _0x115b78(_0x2dbdfb['UPDATE_BOOKMARK_IN_LIST'], _0x24b310),
                                        {
                                            'succ': _0x56dd72 ? 0x1 : 0x0
                                        };
                                })['catch'](function (_0x14b986) {
                                    return _0x313947['logError']('updateBookmark\x20fail:\x20', _0x24b310, _0x14b986),
                                        {
                                            'succ': 0x0
                                        };
                                });
                            }),
                            (0x0,
                                _0x3dd08a['default'])(_0x316fec, _0x363d4e[_0x2f31('0x6')], function (_0x2999b7, _0x1397d0) {
                                var _0x418a70 = this
                                    , _0x4fac72 = _0x2999b7['commit'];
                                return (0x0,
                                    _0x23a054['default'])(_0x2f31('0x28'), _0x1397d0)['then'](function (_0x59f7ab) {
                                    var _0x5b7d12 = _0x59f7ab['data']
                                        , _0x22502a = _0x5b7d12['bestBookMarks'] && _0x5b7d12['bestBookMarks']['items']
                                        , _0xc44b10 = _0x1fe2be['get'](_0x5b7d12, _0x2f31('0x23'));
                                    return _0x22502a && _0x4fac72(_0x2dbdfb['UPDATE_BEST_BOOK_MARKS'], _0xc44b10),
                                        {
                                            'succ': _0x22502a ? 0x1 : 0x0
                                        };
                                })['catch'](function (_0x331cc1) {
                                    return _0x418a70['logError'](_0x2f31('0x24'), _0x1397d0, _0x331cc1),
                                        {
                                            'succ': 0x0
                                        };
                                });
                            }),
                            _0x316fec)
                    };
                }
                ;
                var _0x2dbdfb = _0x4b2682(_0x4a0f1f(0x46))
                    , _0x363d4e = _0x4b2682(_0x4a0f1f(0x34))
                    , _0xe87e45 = _0x4b2682(_0x4a0f1f(0x2f3))
                    , _0x41aed3 = _0x4b2682(_0x4a0f1f(0x2ea))
                    , _0xe120d5 = _0x4a0f1f(0x2f4)
                    , _0x23a054 = _0x4a291d(_0x4a0f1f(0x5c))
                    , _0x479fc8 = _0x4a291d(_0x4a0f1f(0x35));

                function _0x4b2682(_0xdfab45) {
                    if (_0xdfab45 && _0xdfab45['__esModule'])
                        return _0xdfab45;
                    var _0x128bb3 = {};
                    if (null != _0xdfab45)
                        for (var _0x1e21bd in _0xdfab45)
                            Object['prototype']['hasOwnProperty']['call'](_0xdfab45, _0x1e21bd) && (_0x128bb3[_0x1e21bd] = _0xdfab45[_0x1e21bd]);
                    return _0x128bb3['default'] = _0xdfab45,
                        _0x128bb3;
                }

                function _0x4a291d(_0x286f24) {
                    return _0x286f24 && _0x286f24[_0x2f31('0x2a')] ? _0x286f24 : {
                        'default': _0x286f24
                    };
                }

                var _0x2802af = _0x4a0f1f(0x8)
                    , _0x1fe2be = _0x4a0f1f(0x1f);

                function _0xf953b(_0x30be23) {
                    var _0x27f60e = '';
                    switch (_0x30be23) {
                        case _0xe87e45[_0x2f31('0xd')]:
                            _0x27f60e = 'topReviews';
                            break;
                        case _0xe87e45[_0x2f31('0x1b')]:
                            _0x27f60e = 'topFriendReviews';
                            break;
                        case _0xe87e45['ReviewListTypeNote']:
                            _0x27f60e = _0x2f31('0x1f');
                    }
                    return _0x27f60e;
                }
            },
            839: function (_0x45b2ab, _0x1b7efd, _0x4160c7) {
                'use strict';
                _0x4160c7['r'](_0x1b7efd);
                var _0x59b6b5 = _0x4160c7(0x3fe)
                    , _0x54cbdb = _0x4160c7(0x2d3);
                for (var _0xc88e91 in _0x54cbdb)
                    'default' !== _0xc88e91 && function (_0x5842ca) {
                        _0x4160c7['d'](_0x1b7efd, _0x5842ca, function () {
                            return _0x54cbdb[_0x5842ca];
                        });
                    }(_0xc88e91);
                _0x4160c7(0x3f2);
                var _0x5497a3 = _0x4160c7(0x1)
                    ,
                    _0x20675c = Object(_0x5497a3['a'])(_0x54cbdb['default'], _0x59b6b5['a'], _0x59b6b5['b'], !0x1, null, null, null);
                _0x1b7efd['default'] = _0x20675c['exports'];
            },
            1010: function (_0x1c812c, _0x40b4d1, _0xb86c79) {
                'use strict';
                var _0x3eb7e8 = _0xb86c79(0x2d5);
                _0xb86c79['n'](_0x3eb7e8)['a'];
            },
            1022: function (_0x3349e9, _0x3b381c, _0x2babd0) {
                'use strict';
                var _0x3a1ab9 = function () {
                    var _0x522622 = this
                        , _0x2617c9 = _0x522622['$createElement']
                        , _0x2ad60a = _0x522622['_self']['_c'] || _0x2617c9;
                    return _0x2ad60a('div', {
                        'class': ['wr_ratingLevelBar', _0x522622['newRatingIconSelector']]
                    }, [_0x2ad60a('div', {
                        'staticClass': _0x2f31('0x5')
                    }), _0x2ad60a('div', {
                        'staticClass': 'wr_ratingLevelBar_text'
                    }, [_0x522622['_v'](_0x522622['_s'](_0x522622['newRatingLevelToText']))])]);
                }
                    , _0x13d156 = [];
                _0x2babd0['d'](_0x3b381c, 'a', function () {
                    return _0x3a1ab9;
                }),
                    _0x2babd0['d'](_0x3b381c, 'b', function () {
                        return _0x13d156;
                    });
            },
        }
    ]
);
