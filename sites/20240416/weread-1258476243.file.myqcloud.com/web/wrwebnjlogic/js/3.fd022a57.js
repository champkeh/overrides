var strings_3 = [
    "refReviewId",
    "FETCH_BOOK_INFO",
    "dispatch",
    "catch",
    "function *\\( *\\)",
    "indexOf",
    "string",
    "INSERT_BOOKMARK_INTO_LIST",
    "append",
    "UPDATE_BOOKMARK_IN_LIST",
    "newRatingLevel",
    "then",
    "init",
    "gger",
    "defineProperty",
    "reviewListType",
    "ReviewListTypeBookFriendTop",
    "UPDATE_BOOK_BOOKMARK_LIST_FETCHING",
    "length",
    "reviewSingle",
    "review",
    "ADD_BOOKMARK",
    "count",
    "isEnvClient",
    "logError",
    "logInfo",
    "reviewSingle err = ",
    "get",
    "isPrivate",
    "FETCH_BOOK_REVIEW_ADD",
    "push",
    "chapterUid",
    "noteReviews",
    "listType",
    "/web/review/delete",
    "bookId",
    "debu",
    "UPDATE_BOOK_BOOKMARK_LIST",
    "commit",
    "default",
    "newRatingIconSelector",
    "bookInfo",
    "FETCH_BEST_BOOK_MARKS",
    "REMOVE_BOOKMARK",
    "bookmarkId",
    "__esModule",
    "isFetching",
    "/web/book/removeBookmark",
    "bookmarkList",
    "succ",
    "type",
    "envConfig"
]

var _0x9720 = function (idx) {
    idx = idx - 0x0;
    return strings_3[idx];
};

window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push([
    [0x3],
    {
        1098: function (_0x2c779f, _0x2db6d7, _0xea738c) {
            'use strict';
            Object[_0x9720('0xe')](_0x2db6d7, '__esModule', {
                'value': !0x0
            });
            var _0x323006 = _0x40ff56(_0xea738c(0x3c1))
                , _0x2e9dd6 = _0x40ff56(_0xea738c(0x59))
                , _0x1a8dc3 = _0x40ff56(_0xea738c(0x30));
            _0x2db6d7['default'] = function () {
                var _0x1c42f3, _0x2ec47d;
                return {
                    'state': {
                        'bookInfo': {},
                        'reviewSingle': {},
                        'topReviews': {
                            'reviewListType': _0x59aacc['ReviewListTypeBookTop'],
                            'synckey': 0x0,
                            'reviewList': [],
                            'totalCount': 0x0,
                            'isFetching': !0x1,
                            'hasMore': !0x1
                        },
                        'topFriendReviews': {
                            'reviewListType': _0x59aacc['ReviewListTypeBookFriendTop'],
                            'synckey': 0x0,
                            'reviewList': [],
                            'totalCount': 0x0,
                            'isFetching': !0x1,
                            'hasMore': !0x1
                        },
                        'noteReviews': {
                            'reviewListType': _0x59aacc['ReviewListTypeNote'],
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
                        'notes': function (_0x454bc7) {
                            var _0x16e523 = _0x454bc7 && _0x454bc7['bookmarks'] || {
                                    'bookmarkList': [],
                                    'isFetching': !0x1
                                }
                                , _0x55c45b = _0x454bc7 && _0x454bc7['noteReviews'] || {}
                                ,
                                _0xdc7cc1 = _0x306c01['Note']['sortedNoteList'](_0x16e523[_0x9720('0x30')], _0x55c45b['reviewList']);
                            return {
                                'isFetching': _0x16e523['isFetching'] || _0x55c45b[_0x9720('0x2e')],
                                'noteList': _0xdc7cc1,
                                'reviewSynckey': _0x55c45b['synckey']
                            };
                        }
                    },
                    'mutations': (_0x1c42f3 = {},
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9['UPDATE_BOOK_REVIEW_BOOK_INFO'], function (_0x5cf757, _0x474368) {
                            _0x5cf757[_0x9720('0x29')] = _0x474368;
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9['UPDATE_BOOK_REVIEW_SINGLE'], function (_0x29b605, _0x3ab56e) {
                            _0x29b605[_0x9720('0x13')] = _0x3ab56e;
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9['UPDATE_BOOK_REVIEW_LIST'], function (_0x2733b1, _0x27192f) {
                            var _0x38a0ac = _0x27192f[_0x9720('0xf')]
                                , _0x309e11 = _0x27192f['reviewList']
                                , _0x2597ec = _0x27192f['removed']
                                , _0x1832d8 = _0x27192f['totalCount']
                                , _0x45c077 = _0x27192f['hasMore']
                                , _0x2c44ac = _0x27192f[_0x9720('0x8')]
                                , _0x18c515 = _0x4f755c(_0x38a0ac);
                            if (_0x18c515 && _0x2733b1[_0x18c515]) {
                                _0x38a0ac !== _0x59aacc['ReviewListTypeBookTop'] && _0x38a0ac !== _0x59aacc['ReviewListTypeBookFriendTop'] || (_0x309e11 = _0x309e11['filter'](function (_0x33d941) {
                                    return void 0x0 !== _0x33d941['review'] && _0x33d941['review'][_0x9720('0x32')] === _0x1896d8['ReviewTypeRecommend'];
                                }));
                                var _0x5bffaf = _0x2c44ac ? _0x2733b1[_0x18c515]['reviewList'] : [];
                                0x0 !== _0x2597ec[_0x9720('0x12')] && (_0x5bffaf = _0x5bffaf['filter'](function (_0x3a41d8) {
                                    return -0x1 === _0x2597ec[_0x9720('0x5')](_0x3a41d8['reviewId']);
                                })),
                                    _0x309e11['forEach'](function (_0x3e3429) {
                                        void 0x0 !== _0x3e3429[_0x9720('0x14')] && _0x5bffaf['push'](_0x3e3429);
                                    }),
                                    _0x2733b1[_0x18c515] = (0x0,
                                        _0x1a8dc3['default'])({}, _0x2733b1[_0x18c515], {
                                        'reviewList': _0x5bffaf,
                                        'totalCount': _0x1832d8,
                                        'hasMore': _0x45c077
                                    });
                            }
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9['UPDATE_BOOK_REVIEW_LIST_SYNC_KEY'], function (_0x703f5e, _0xec15a4) {
                            var _0x388b63 = _0xec15a4[_0x9720('0x21')]
                                , _0x7b8ec3 = _0xec15a4['synckey']
                                , _0x587e22 = _0x4f755c(_0x388b63);
                            _0x587e22 && _0x703f5e[_0x587e22] && (_0x703f5e[_0x587e22] = (0x0,
                                _0x1a8dc3['default'])({}, _0x703f5e[_0x587e22], {
                                'synckey': _0x7b8ec3
                            }));
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9['UPDATE_BOOK_REVIEW_FETCHING'], function (_0x5c5ebb, _0x23414e) {
                            var _0x133fd2 = _0x23414e['listType']
                                , _0x383d0a = _0x23414e['isFetching']
                                , _0x400a1b = _0x4f755c(_0x133fd2);
                            _0x400a1b && _0x5c5ebb[_0x400a1b] && (_0x5c5ebb[_0x400a1b] = (0x0,
                                _0x1a8dc3['default'])({}, _0x5c5ebb[_0x400a1b], {
                                'isFetching': _0x383d0a
                            }));
                        }),
                        (0x0,
                            _0x2e9dd6[_0x9720('0x27')])(_0x1c42f3, _0x2abec9['UPDATE_BOOK_BOOKMARK_LIST'], function (_0x30b350, _0x422833) {
                            var _0x26031c = _0x422833['bookmarkList']
                                , _0x7187e2 = _0x422833['chapters']
                                , _0x46240e = _0x422833['isPdf']
                                , _0x4330a2 = {};
                            _0x7187e2['forEach'](function (_0x4cb3) {
                                _0x4330a2[_0x4cb3[_0x9720('0x1f')]] = _0x4cb3;
                            }),
                                _0x26031c['forEach'](function (_0x41a110) {
                                    var _0x4ab88d = _0x4330a2[_0x41a110['chapterUid']];
                                    _0x41a110['chapterIdx'] = _0x4ab88d ? _0x4ab88d['chapterIdx'] : _0x46240e ? _0x41a110['chapterUid'] : -0x1;
                                }),
                                _0x30b350['bookmarks'] = (0x0,
                                    _0x1a8dc3['default'])({}, _0x30b350['bookmarks'], {
                                    'bookmarkList': _0x26031c
                                });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9['UPDATE_BOOK_BOOKMARK_LIST_FETCHING'], function (_0x28096c, _0x2b705b) {
                            var _0x34b9a4 = _0x2b705b['isFetching'];
                            _0x28096c['bookmarks'] = (0x0,
                                _0x1a8dc3['default'])({}, _0x28096c['bookmarks'], {
                                'isFetching': _0x34b9a4
                            });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9[_0x9720('0x7')], function (_0x4d4a87, _0xc01578) {
                            var _0x385412 = _0x4d4a87['bookmarks']['bookmarkList'];
                            _0x385412[_0x9720('0x1e')](_0xc01578),
                                _0x4d4a87['bookmarks'] = (0x0,
                                    _0x1a8dc3[_0x9720('0x27')])({}, _0x4d4a87['bookmarks'], {
                                    'bookmarkList': _0x385412
                                });
                        }),
                        (0x0,
                            _0x2e9dd6[_0x9720('0x27')])(_0x1c42f3, _0x2abec9['REMOVE_BOOKMARK_FROM_LIST'], function (_0x26a1aa, _0x474c8b) {
                            for (var _0x1ecdd2 = _0x26a1aa['bookmarks']['bookmarkList'], _0x2a9087 = -0x1, _0x2c20ca = 0x0, _0x5cfd7f = _0x1ecdd2[_0x9720('0x12')]; _0x2c20ca < _0x5cfd7f; _0x2c20ca++)
                                _0x1ecdd2[_0x2c20ca][_0x9720('0x2c')] === _0x474c8b && (_0x2a9087 = _0x2c20ca);
                            -0x1 !== _0x2a9087 && _0x1ecdd2['splice'](_0x2a9087, 0x1),
                                _0x26a1aa['bookmarks'] = (0x0,
                                    _0x1a8dc3[_0x9720('0x27')])({}, _0x26a1aa['bookmarks'], {
                                    'bookmarkList': _0x1ecdd2
                                });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9[_0x9720('0x9')], function (_0x1fce37, _0x309388) {
                            for (var _0x5d5812 = _0x309388['bookmarkId'], _0x5e1408 = _0x309388['style'], _0x28de48 = _0x309388['colorStyle'], _0x33df9b = _0x1fce37['bookmarks']['bookmarkList'], _0x241783 = 0x0, _0x4dda61 = _0x33df9b['length']; _0x241783 < _0x4dda61; _0x241783++) {
                                var _0x56ee44 = _0x33df9b[_0x241783];
                                if (_0x56ee44['bookmarkId'] === _0x5d5812) {
                                    _0x56ee44['style'] = _0x5e1408,
                                        _0x56ee44['colorStyle'] = _0x28de48;
                                    break;
                                }
                            }
                            _0x1fce37['bookmarks'] = (0x0,
                                _0x1a8dc3[_0x9720('0x27')])({}, _0x1fce37['bookmarks'], {
                                'bookmarkList': _0x33df9b
                            });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x1c42f3, _0x2abec9['UPDATE_BEST_BOOK_MARKS'], function (_0x938f9c, _0x18ab25) {
                            var _0x190d3b = _0x18ab25['items']
                                , _0x54a192 = _0x18ab25['totalCount']
                                , _0x12e436 = _0x18ab25['synckey'];
                            _0x938f9c['bestBookMarks'] = {
                                'items': _0x190d3b || [],
                                'totalCount': _0x54a192 || 0x0,
                                'synckey': _0x12e436
                            };
                        }),
                        _0x1c42f3),
                    'actions': (_0x2ec47d = {},
                        (0x0,
                            _0x2e9dd6['default'])(_0x2ec47d, _0x68e54c['FETCH_BOOK_REVIEW_BOOK_INFO'], function (_0x4b0b73, _0x11942f) {
                            var _0x5a308e = this
                                , _0x320f32 = _0x4b0b73['commit']
                                , _0x540612 = _0x4b0b73[_0x9720('0x2')]
                                , _0x991ee6 = _0x11942f['bookId']
                                , _0x2c80d3 = _0x11942f['envConfig'] || {}
                                , _0x4e85cf = _0x11942f['isLogin'] || !0x1;
                            return (!_0x991ee6 || _0x991ee6['length'] <= 0x0) && (this['logInfo']('bookInfo\x20no\x20bookId'),
                            _0x23044e[_0x9720('0x17')] && _0x23044e['inDevelopment']() && alert('bookInfo\x20no\x20bookId')),
                                _0x540612(_0x68e54c[_0x9720('0x1')], {
                                    'bookId': _0x991ee6,
                                    'isLogin': _0x4e85cf,
                                    'envConfig': _0x2c80d3
                                })['then'](function (_0x30ef23) {
                                    var _0x112ca2 = _0x30ef23 || {};
                                    _0x320f32(_0x2abec9['UPDATE_BOOK_REVIEW_BOOK_INFO'], _0x112ca2);
                                })['catch'](function (_0x9a9cc5) {
                                    _0x5a308e['logInfo']('bookInfo\x20err\x20=\x20' + _0x9a9cc5);
                                });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x2ec47d, _0x68e54c['FETCH_BOOK_REVIEW_LIST'], function (_0x4bdbad, _0x4e760c) {
                            var _0x386f2b = this
                                , _0x43f47a = _0x4bdbad['commit']
                                , _0x3cda25 = _0x4e760c['bookId']
                                , _0x3171db = _0x4e760c['envConfig'] || {}
                                , _0x17194a = _0x4e760c['append'] || !0x1;
                            _0x3cda25 || (this['logInfo']('review\x20list\x20no\x20bookId'),
                            _0x23044e['isEnvClient'] && _0x23044e['inDevelopment']() && alert('review\x20lsit\x20no\x20bookId'));
                            var _0x420d4d = {
                                'bookId': _0x3cda25
                            };
                            return _0x420d4d['listType'] = _0x502e9f[_0x9720('0x1b')](_0x4e760c, 'listType', _0x59aacc['ReviewListTypeBookTop']),
                                _0x420d4d['maxIdx'] = _0x502e9f['get'](_0x4e760c, 'maxIdx', 0x0),
                                _0x420d4d[_0x9720('0x16')] = _0x502e9f['get'](_0x4e760c, _0x9720('0x16'), 0x14),
                                _0x420d4d['listMode'] = 0x2,
                                _0x420d4d['synckey'] = _0x502e9f['get'](_0x4e760c, 'synckey', 0x0),
                            void 0x0 !== _0x4e760c['userVid'] && (_0x420d4d['userVid'] = _0x4e760c['userVid']),
                            void 0x0 !== _0x4e760c['mine'] && (_0x420d4d['mine'] = _0x4e760c['mine']),
                                _0x43f47a(_0x2abec9['UPDATE_BOOK_REVIEW_FETCHING'], {
                                    'listType': _0x420d4d['listType'],
                                    'isFetching': !0x0
                                }),
                                (0x0,
                                    _0x6981ee['default'])('/web/review/list', (0x0,
                                    _0x1a8dc3['default'])({}, _0x420d4d, _0x3171db))[_0x9720('0xb')](function (_0x453c16) {
                                    var _0x4addf1 = _0x453c16['data']
                                        , _0x94a58d = _0x502e9f[_0x9720('0x1b')](_0x4addf1, 'reviews', [])
                                        , _0x11dd83 = _0x502e9f['get'](_0x4addf1, 'removed', [])
                                        , _0xc4020 = _0x502e9f['get'](_0x4addf1, 'totalCount', 0x0)
                                        , _0x2a8bc7 = _0x94a58d['length'] >= _0x420d4d['count']
                                        , _0x464951 = _0x502e9f['get'](_0x4addf1, 'synckey', 0x0);
                                    return _0x43f47a(_0x2abec9['UPDATE_BOOK_REVIEW_LIST'], {
                                        'reviewListType': _0x420d4d['listType'],
                                        'reviewList': _0x94a58d,
                                        'removed': _0x11dd83,
                                        'totalCount': _0xc4020,
                                        'hasMore': _0x2a8bc7,
                                        'append': _0x17194a
                                    }),
                                        _0x43f47a(_0x2abec9['UPDATE_BOOK_REVIEW_FETCHING'], {
                                            'listType': _0x420d4d['listType'],
                                            'isFetching': !0x1
                                        }),
                                        _0x43f47a(_0x2abec9['UPDATE_BOOK_REVIEW_LIST_SYNC_KEY'], {
                                            'listType': _0x420d4d['listType'],
                                            'synckey': _0x464951
                                        }),
                                        _0x453c16;
                                })['catch'](function (_0x4d4fda) {
                                    return _0x43f47a(_0x2abec9['UPDATE_BOOK_REVIEW_FETCHING'], {
                                        'listType': _0x420d4d[_0x9720('0x21')],
                                        'isFetching': !0x1
                                    }),
                                        _0x386f2b['logInfo']('review\x20list\x20err\x20=\x20' + _0x4d4fda),
                                        _0x4d4fda;
                                });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x2ec47d, _0x68e54c['FETCH_BOOK_REVIEW_SINGLE'], function (_0x300223, _0x5b3d07) {
                            var _0x46d65d = this
                                , _0x8e99a9 = _0x300223['commit']
                                , _0x4e92b0 = _0x5b3d07['reviewId']
                                , _0x4a47c5 = _0x5b3d07[_0x9720('0x33')] || {};
                            return _0x4e92b0 || (this['logInfo']('reviewSingle\x20no\x20reviewId'),
                            _0x23044e['isEnvClient'] && _0x23044e['inDevelopment']() && alert('reviewSingle\x20no\x20reviewId')),
                                (0x0,
                                    _0x6981ee[_0x9720('0x27')])('/web/review/single', (0x0,
                                    _0x1a8dc3[_0x9720('0x27')])({
                                    'reviewId': _0x4e92b0
                                }, _0x4a47c5))['then'](function (_0x4f13ec) {
                                    var _0x16a50e = _0x502e9f['get'](_0x4f13ec, 'data', {});
                                    return _0x8e99a9(_0x2abec9['UPDATE_BOOK_REVIEW_SINGLE'], _0x16a50e),
                                        _0x4f13ec;
                                })['catch'](function (_0x1cf62a) {
                                    return _0x46d65d['logInfo'](_0x9720('0x1a') + _0x1cf62a),
                                        _0x1cf62a;
                                });
                        }),
                        (0x0,
                            _0x2e9dd6[_0x9720('0x27')])(_0x2ec47d, _0x68e54c[_0x9720('0x1d')], function (_0x11a1b8, _0x43aa72) {
                            (0x0,
                                _0x323006['default'])(_0x11a1b8);
                            var _0x3b242c = {
                                'type': _0x43aa72['type'] || _0x1896d8['ReviewTypeRecommend'],
                                'bookId': '',
                                'chapterUid': 0x0,
                                'content': '',
                                'bookVersion': 0x0
                            }
                                , _0x2ac463 = _0x43aa72['bookId']
                                , _0x3ff6b7 = _0x43aa72['content']
                                , _0x259426 = _0x43aa72['htmlContent']
                                , _0x81f729 = _0x43aa72['newRatingLevel']
                                , _0x5669b = _0x43aa72['chapterUid']
                                , _0x55bc32 = _0x43aa72['isPrivate']
                                , _0x16d373 = _0x43aa72['abstract']
                                , _0xac0aa4 = _0x43aa72['refReviewId']
                                , _0x587e84 = _0x43aa72['range']
                                , _0x155a1e = _0x43aa72['isLike']
                                , _0xf2d39c = _0x43aa72['bookVersion'];
                            return !_0x2ac463 || _0x2ac463['length'] <= 0x0 ? (this['logInfo']('add\x20review\x20no\x20bookId'),
                            _0x23044e[_0x9720('0x17')] && _0x23044e['inDevelopment']() && alert('add\x20review\x20no\x20bookId')) : _0x3b242c[_0x9720('0x23')] = _0x2ac463,
                            _0x81f729 || _0x3ff6b7 && !(_0x3ff6b7['length'] <= 0x0) || _0x259426 || (this['logInfo']('add\x20review\x20content'),
                            _0x23044e['isEnvClient'] && _0x23044e['inDevelopment']() && alert('add\x20review\x20no\x20content')),
                            _0x3ff6b7 && (_0x3b242c['content'] = _0x3ff6b7),
                            _0x259426 && (_0x3b242c['htmlContent'] = _0x259426,
                                _0x3b242c['topicRanges'] = ['0-0']),
                            _0x5669b && (_0x3b242c['chapterUid'] = _0x5669b),
                            _0xf2d39c && (_0x3b242c['bookVersion'] = _0xf2d39c),
                            _0x81f729 && (_0x3b242c[_0x9720('0xa')] = _0x81f729),
                            0x1 === _0x55bc32 && (_0x3b242c['friendship'] = 0x1),
                            0x2 === _0x55bc32 && (_0x3b242c[_0x9720('0x1c')] = 0x1),
                            _0x16d373 && (_0x3b242c['abstract'] = _0x16d373),
                            _0x155a1e && (_0x3b242c['isLike'] = _0x155a1e),
                            _0xac0aa4 && (_0x3b242c[_0x9720('0x0')] = _0xac0aa4),
                            _0x587e84 && (_0x3b242c['range'] = _0x587e84),
                                (0x0,
                                    _0x8bedd2[_0x9720('0x27')])('/web/review/add', _0x3b242c)['then'](function (_0x338973) {
                                    return _0x338973;
                                })['catch'](function (_0x5061e2) {
                                    return _0x5061e2;
                                });
                        }),
                        (0x0,
                            _0x2e9dd6[_0x9720('0x27')])(_0x2ec47d, _0x68e54c['FETCH_BOOK_REVIEW_DELETE'], function (_0x3ac7f7, _0x2ad730) {
                            (0x0,
                                _0x323006[_0x9720('0x27')])(_0x3ac7f7);
                            var _0x125761 = _0x2ad730['reviewId'];
                            return _0x125761 || (this[_0x9720('0x19')]('reviewDelete\x20no\x20reviewId'),
                            _0x23044e['isEnvClient'] && _0x23044e['inDevelopment']() && alert('reviewSingle\x20no\x20reviewId')),
                                (0x0,
                                    _0x8bedd2['default'])(_0x9720('0x22'), {
                                    'reviewId': _0x125761
                                })[_0x9720('0xb')](function (_0x4aceeb) {
                                    return _0x4aceeb;
                                })['catch'](function (_0x13df87) {
                                    return _0x13df87;
                                });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x2ec47d, _0x68e54c['FETCH_BOOK_BOOKMARK_LIST'], function (_0x4d2991, _0x38ffdb) {
                            var _0x3a8873 = _0x4d2991[_0x9720('0x26')]
                                , _0x35aff2 = _0x38ffdb['bookId'];
                            if (_0x35aff2) {
                                var _0x2b04fb = {
                                    'bookId': _0x35aff2
                                };
                                return _0x38ffdb['type'] && (_0x2b04fb['type'] = _0x38ffdb['type']),
                                    _0x3a8873(_0x2abec9['UPDATE_BOOK_BOOKMARK_LIST_FETCHING'], {
                                        'isFetching': !0x0
                                    }),
                                    (0x0,
                                        _0x6981ee['default'])('/web/book/bookmarklist', _0x2b04fb)[_0x9720('0xb')](function (_0x53ddb1) {
                                        var _0x4d8f80 = _0x502e9f[_0x9720('0x1b')](_0x53ddb1['data'], 'updated', [])
                                            , _0x54e753 = _0x502e9f['get'](_0x53ddb1['data'], 'chapters', []);
                                        return _0x3a8873(_0x2abec9[_0x9720('0x25')], {
                                            'bookmarkList': _0x4d8f80,
                                            'chapters': _0x54e753,
                                            'isPdf': _0x38ffdb['isPdf']
                                        }),
                                            _0x3a8873(_0x2abec9[_0x9720('0x11')], {
                                                'isFetching': !0x1
                                            }),
                                            _0x53ddb1;
                                    })[_0x9720('0x3')](function (_0x79a543) {
                                        return _0x3a8873(_0x2abec9['UPDATE_BOOK_BOOKMARK_LIST_FETCHING'], {
                                            'isFetching': !0x1
                                        }),
                                            _0x79a543;
                                    });
                            }
                        }),
                        (0x0,
                            _0x2e9dd6[_0x9720('0x27')])(_0x2ec47d, _0x68e54c[_0x9720('0x15')], function (_0x4fc7c7, _0x1908ac) {
                            var _0x260d09 = this
                                , _0x21f864 = _0x4fc7c7['commit'];
                            return (0x0,
                                _0x8bedd2['default'])('/web/book/addBookmark', _0x1908ac)['then'](function (_0x4061a7) {
                                var _0x188b2a = _0x4061a7['data']
                                    , _0x362fa8 = _0x502e9f['get'](_0x188b2a, _0x9720('0x2c'))
                                    , _0x33f230 = _0x362fa8 && _0x362fa8['length'] > 0x0;
                                if (_0x33f230) {
                                    var _0x8a0f0 = (0x0,
                                        _0x1a8dc3['default'])({}, _0x1908ac, {
                                        'bookmarkId': _0x362fa8
                                    });
                                    _0x21f864(_0x2abec9['INSERT_BOOKMARK_INTO_LIST'], _0x8a0f0);
                                }
                                return {
                                    'succ': _0x33f230 ? 0x1 : 0x0,
                                    'bookmarkId': _0x362fa8
                                };
                            })['catch'](function (_0x9ce1d1) {
                                return _0x260d09['logError']('fetchAddBookmark\x20fail:\x20', _0x1908ac, _0x9ce1d1),
                                    {
                                        'succ': 0x0
                                    };
                            });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x2ec47d, _0x68e54c[_0x9720('0x2b')], function (_0x193ee3, _0x339bad) {
                            var _0x45d933 = this
                                , _0x3e6d83 = _0x193ee3['commit'];
                            return (0x0,
                                _0x8bedd2['default'])(_0x9720('0x2f'), _0x339bad)['then'](function (_0xdb45a6) {
                                var _0x26bdbc = 0x1 === _0xdb45a6['data'][_0x9720('0x31')];
                                return _0x26bdbc && _0x3e6d83(_0x2abec9['REMOVE_BOOKMARK_FROM_LIST'], _0x339bad['bookmarkId']),
                                    {
                                        'succ': _0x26bdbc ? 0x1 : 0x0
                                    };
                            })['catch'](function (_0x5f019a) {
                                return _0x45d933['logError']('removeBookmark\x20fail:\x20', _0x339bad, _0x5f019a),
                                    {
                                        'succ': 0x0
                                    };
                            });
                        }),
                        (0x0,
                            _0x2e9dd6['default'])(_0x2ec47d, _0x68e54c['UPDATE_BOOKMARK'], function (_0xd33b30, _0x2f2bff) {
                            var _0x4e712e = this
                                , _0x4ffa41 = _0xd33b30['commit'];
                            return (0x0,
                                _0x8bedd2['default'])('/web/book/updateBookmark', _0x2f2bff)[_0x9720('0xb')](function (_0x2f5d6d) {
                                var _0x1aa7c2 = 0x1 === _0x2f5d6d['data']['succ'];
                                return _0x1aa7c2 && _0x4ffa41(_0x2abec9['UPDATE_BOOKMARK_IN_LIST'], _0x2f2bff),
                                    {
                                        'succ': _0x1aa7c2 ? 0x1 : 0x0
                                    };
                            })['catch'](function (_0x50b1e4) {
                                return _0x4e712e['logError']('updateBookmark\x20fail:\x20', _0x2f2bff, _0x50b1e4),
                                    {
                                        'succ': 0x0
                                    };
                            });
                        }),
                        (0x0,
                            _0x2e9dd6[_0x9720('0x27')])(_0x2ec47d, _0x68e54c[_0x9720('0x2a')], function (_0x2cb409, _0x46885a) {
                            var _0xed69ec = this
                                , _0x7b187a = _0x2cb409[_0x9720('0x26')];
                            return (0x0,
                                _0x6981ee['default'])('/web/book/bestbookmarks', _0x46885a)['then'](function (_0x4130b9) {
                                var _0x3c1f56 = _0x4130b9['data']
                                    , _0x314e57 = _0x3c1f56['bestBookMarks'] && _0x3c1f56['bestBookMarks']['items']
                                    , _0xd15982 = _0x502e9f['get'](_0x3c1f56, 'bestBookMarks');
                                return _0x314e57 && _0x7b187a(_0x2abec9['UPDATE_BEST_BOOK_MARKS'], _0xd15982),
                                    {
                                        'succ': _0x314e57 ? 0x1 : 0x0
                                    };
                            })['catch'](function (_0x339c86) {
                                return _0xed69ec[_0x9720('0x18')]('bestBookMarks\x20fail:\x20', _0x46885a, _0x339c86),
                                    {
                                        'succ': 0x0
                                    };
                            });
                        }),
                        _0x2ec47d)
                };
            }
            ;
            var _0x2abec9 = _0x4bb682(_0xea738c(0x56))
                , _0x68e54c = _0x4bb682(_0xea738c(0x43))
                , _0x59aacc = _0x4bb682(_0xea738c(0x456))
                , _0x1896d8 = _0x4bb682(_0xea738c(0x44b))
                , _0x306c01 = _0xea738c(0x457)
                , _0x6981ee = _0x40ff56(_0xea738c(0x72))
                , _0x8bedd2 = _0x40ff56(_0xea738c(0x45));

            function _0x4bb682(_0x245fe9) {
                if (_0x245fe9 && _0x245fe9['__esModule'])
                    return _0x245fe9;
                var _0x645963 = {};
                if (null != _0x245fe9)
                    for (var _0x5943ab in _0x245fe9)
                        Object['prototype']['hasOwnProperty']['call'](_0x245fe9, _0x5943ab) && (_0x645963[_0x5943ab] = _0x245fe9[_0x5943ab]);
                return _0x645963['default'] = _0x245fe9,
                    _0x645963;
            }

            function _0x40ff56(_0x5dead5) {
                return _0x5dead5 && _0x5dead5[_0x9720('0x2d')] ? _0x5dead5 : {
                    'default': _0x5dead5
                };
            }

            var _0x23044e = _0xea738c(0x9)
                , _0x502e9f = _0xea738c(0x27);

            function _0x4f755c(_0x128fc5) {
                var _0x3039b1 = '';
                switch (_0x128fc5) {
                    case _0x59aacc['ReviewListTypeBookTop']:
                        _0x3039b1 = 'topReviews';
                        break;
                    case _0x59aacc[_0x9720('0x10')]:
                        _0x3039b1 = 'topFriendReviews';
                        break;
                    case _0x59aacc['ReviewListTypeNote']:
                        _0x3039b1 = _0x9720('0x20');
                }
                return _0x3039b1;
            }
        },
        1124: function (_0x5ddfae, _0x4376f6, _0xf216c1) {
            'use strict';
            _0xf216c1['r'](_0x4376f6);
            var _0x577481 = _0xf216c1(0x7e7)
                , _0x1eec42 = _0xf216c1(0x50e);
            for (var _0x532a3e in _0x1eec42)
                'default' !== _0x532a3e && function (_0xbed867) {
                    _0xf216c1['d'](_0x4376f6, _0xbed867, function () {
                        return _0x1eec42[_0xbed867];
                    });
                }(_0x532a3e);
            _0xf216c1(0x67e);
            var _0x1a2376 = _0xf216c1(0x1)
                ,
                _0x33dce3 = Object(_0x1a2376['a'])(_0x1eec42[_0x9720('0x27')], _0x577481['a'], _0x577481['b'], !0x1, null, null, null);
            _0x4376f6['default'] = _0x33dce3['exports'];
        },
        1294: function (_0x51ac85, _0x3ebc0c, _0x1f4943) {
            'use strict';
            _0x1f4943['r'](_0x3ebc0c);
            var _0x5726f7 = _0x1f4943(0x50f)
                , _0x554aca = _0x1f4943['n'](_0x5726f7);
            for (var _0x406b11 in _0x5726f7)
                'default' !== _0x406b11 && function (_0x47b38c) {
                    _0x1f4943['d'](_0x3ebc0c, _0x47b38c, function () {
                        return _0x5726f7[_0x47b38c];
                    });
                }(_0x406b11);
            _0x3ebc0c[_0x9720('0x27')] = _0x554aca['a'];
        },
        1295: function (_0xd6a8be, _0xafc382, _0xb4b91d) {
            'use strict';
            Object['defineProperty'](_0xafc382, '__esModule', {
                'value': !0x0
            }),
                _0xafc382['default'] = {
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
                            return this[_0x9720('0x14')] && this['review']['newRatingLevel'] ? this['review']['newRatingLevel'] : 0x0;
                        },
                        'newRatingLevelToText': function () {
                            return this['newRatingLevel'] > 0x0 ? ['推荐', '认为一般', '认为不行'][this['newRatingLevel'] - 0x1] : '';
                        },
                        'newRatingIconSelector': function () {
                            var _0x7e5274 = ['good', 'fair', 'poor'][this[_0x9720('0xa')] - 0x1];
                            return 'good' === _0x7e5274 ? 'wr_ratingLevelBar_Good' : 'fair' === _0x7e5274 ? 'wr_ratingLevelBar_Fair' : 'poor' === _0x7e5274 ? 'wr_ratingLevelBar_Poor' : '';
                        }
                    }
                };
        },
        1296: function (_0x1c259a, _0x4bd707, _0x9e3c61) {
        },
        1662: function (_0x3656db, _0x29a67f, _0x3a9755) {
            'use strict';
            var _0x4d0374 = _0x3a9755(0x510);
            _0x3a9755['n'](_0x4d0374)['a'];
        },
        2023: function (_0x2c987d, _0x441335, _0x146f99) {
            'use strict';
            var _0x3ea84b = function () {
                var _0x37df5d = this
                    , _0x4c9a4d = _0x37df5d['$createElement']
                    , _0x48ddfc = _0x37df5d['_self']['_c'] || _0x4c9a4d;
                return _0x48ddfc('div', {
                    'class': ['wr_ratingLevelBar', _0x37df5d[_0x9720('0x28')]]
                }, [_0x48ddfc('div', {
                    'staticClass': 'wr_ratingLevelBar_icon'
                }), _0x48ddfc('div', {
                    'staticClass': 'wr_ratingLevelBar_text'
                }, [_0x37df5d['_v'](_0x37df5d['_s'](_0x37df5d['newRatingLevelToText']))])]);
            }
                , _0x366c78 = [];
            _0x146f99['d'](_0x441335, 'a', function () {
                return _0x3ea84b;
            }),
                _0x146f99['d'](_0x441335, 'b', function () {
                    return _0x366c78;
                });
        }
    }
]);
