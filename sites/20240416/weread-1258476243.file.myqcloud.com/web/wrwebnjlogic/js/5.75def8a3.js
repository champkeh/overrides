var strings_5 = [
    "allBooks[0].lectureReadUpdateTime",
    "FETCH_SHELF",
    "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "FETCH_SHELF_UPLOAD_COUNT",
    "/web/shelf/syncBook",
    "format",
    "updatedBooks",
    "bookProgress",
    "UPDATE_SHELF_UPLOAD_COUNT",
    "Error in fetchShelfArchiveLoadMore",
    "ios_html",
    "author",
    "Error in fetchShelfMemberCard",
    "data",
    "return",
    "lectureReadUpdateTime",
    "map",
    "UPDATE_SHELF_PAGE_FALLBACK_MODE",
    "booksAndArchives",
    "call",
    "apply",
    "count",
    "UPDATE_SHELF_LOADING_MORE",
    "loaded",
    "uniq",
    "payType",
    "state",
    "idx",
    "allBooks",
    "shelfIndexes",
    "errCode",
    "length",
    "commit",
    "progress",
    "isPDFBookType",
    "isTrialReadBook",
    " not found",
    "readUpdateTime",
    "balanceAndroid",
    "UPDATE_SHELF_LOADING_MORE_ERROR",
    "sort",
    "currentArchiveId",
    "bookId",
    "UPDATE_SHELF",
    "findIndex",
    "finishReading",
    "UPDATE_HOME_PAGE_FALLBACK_MODE",
    "findLastIndex",
    "isSupportedBookType",
    "get",
    "DELETE_SHELF_INDEX",
    "soldout",
    "books",
    "push",
    "setValue",
    "/web/shelf/sync",
    "UPDATE_SHELF_MEMBER_CARD",
    "test",
    "FETCH_SHELF_ARCHIVE_LOAD_MORE",
    "bookInfos",
    "input",
    "filter",
    "concat",
    "next",
    "type",
    "archive",
    "all",
    "default",
    "slice",
    "bookIds",
    "loadingMoreError"
]

var _0x441f = function (idx) {
    idx = idx - 0x0;
    return strings_5[idx];
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push([
    [0x5],
    {
        1175: function (_0xd4c611, _0x738229, _0x45730a) {
            'use strict';
            Object['defineProperty'](_0x738229, '__esModule', {
                'value': !0x0
            });
            var _0x71267d = _0x3721c2(_0x45730a(0x22))
                , _0x4971ef = _0x3721c2(_0x45730a(0x57))
                , _0xacffef = _0x3721c2(_0x45730a(0xdf))
                , _0x2fc5fe = _0x3721c2(_0x45730a(0x30))
                , _0x26e47e = _0x3721c2(_0x45730a(0x59))
                , _0x3a8ead = _0x3721c2(_0x45730a(0x1a9))
                , _0x2fc439 = _0x3721c2(_0x45730a(0x13b));
            _0x738229['default'] = function () {
                var _0x494854, _0x3b133b;
                return {
                    'state': {
                        'miniShelf': [],
                        'archive': [],
                        'books': [],
                        'uploadCount': 0x0,
                        'bookProgress': [],
                        'balanceIOS': 0x0,
                        'balanceAndroid': 0x0,
                        'memberCardSummary': {},
                        'booksAndArchives': [],
                        'rawBooks': [],
                        'loadingMore': !0x1,
                        'loadingMoreError': !0x1,
                        'rawIndexes': [],
                        'shelfIndexes': [],
                        'updatedBooks': [],
                        'needFallBack': !0x1
                    },
                    'getters': {
                        'isLoading': function (_0x3c477d) {
                            return _0x3c477d['loadingMore'];
                        },
                        'hasMore': function (_0x45aff9) {
                            return _0x45aff9['booksAndArchives']['length'] < _0x45aff9[_0x441f('0x1d')]['length'];
                        }
                    },
                    'mutations': (_0x494854 = {},
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_SHELF_PAGE_FALLBACK_MODE'], function (_0x48b984, _0x23bed0) {
                            _0x48b984['needFallBack'] = _0x23bed0;
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_SHELF'], function (_0x502ccf, _0x5a8b01) {
                            var _0x3312f0;
                            (_0x3312f0 = _0x502ccf['rawBooks'])['push']['apply'](_0x3312f0, (0x0,
                                _0x2fc439['default'])(_0x5a8b01));
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_MINI_SHELF'], function (_0x3c02a1, _0x2c289e) {
                            _0x3c02a1['miniShelf'] = _0x2c289e;
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x494854, _0x139087['UPDATE_SHELF_BALANCE'], function (_0x2eecad, _0x575859) {
                            _0x2eecad['balanceIOS'] = _0x366ecd['get'](_0x575859, 'balance', 0x0),
                                _0x2eecad[_0x441f('0x26')] = _0x366ecd['get'](_0x575859, 'peerBalance', 0x0);
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087[_0x441f('0x38')], function (_0x13748a, _0x535451) {
                            _0x13748a['memberCardSummary'] = _0x535451['memberCardSummary'];
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_SHELF_UPDATED_BOOKS'], function (_0x314cba, _0x33984c) {
                            _0x4fd291('UPDATE_SHELF_UPDATED_BOOKS', _0x33984c),
                                _0x314cba[_0x441f('0x6')] = _0x366ecd[_0x441f('0x18')]([][_0x441f('0x3e')]((0x0,
                                    _0x2fc439['default'])(_0x314cba['updatedBooks']), (0x0,
                                    _0x2fc439['default'])(_0x33984c)));
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_SHELF_INDEX'], function (_0x4d35cc, _0x128dc0) {
                            _0x4d35cc['shelfIndexes'] = _0x128dc0;
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x494854, _0x139087[_0x441f('0x8')], function (_0x57a15f, _0x90d5cc) {
                            _0x57a15f['uploadCount'] = _0x90d5cc;
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_RAW_INDEX'], function (_0x2418c0, _0x224af5) {
                            _0x2418c0['rawIndexes'] = _0x224af5;
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_SHELF_LOADING_MORE'], function (_0x3a357b, _0x1cf07a) {
                            _0x3a357b['loadingMore'] = _0x1cf07a;
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x494854, _0x139087['UPDATE_SHELF_LOADING_MORE_ERROR'], function (_0x27762e, _0x4444ed) {
                            _0x27762e[_0x441f('0x46')] = _0x4444ed;
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_SHELF_LOAD_MORE'], function (_0x4f0f03, _0xb836f3) {
                            var _0x59ce0b, _0x4f7995 = _0xb836f3['booksAndArchives'], _0x2f945e = _0xb836f3['archives'];
                            (_0x59ce0b = _0x4f0f03['booksAndArchives'])[_0x441f('0x35')]['apply'](_0x59ce0b, (0x0,
                                _0x2fc439['default'])(_0x4f7995));
                            var _0x6a7fb7 = function (_0x53bed5) {
                                var _0x3f4e7a = _0x366ecd['findIndex'](_0x4f0f03['archive'], function (_0x544653) {
                                        return _0x544653['archiveId'] === _0x53bed5['archiveId'];
                                    })
                                    ,
                                    _0x5dbb56 = _0x366ecd['findIndex'](_0x4f0f03['booksAndArchives'], function (_0x39b40e) {
                                        return _0x39b40e['archiveId'] === _0x53bed5['archiveId'];
                                    });
                                if (_0x3f4e7a > -0x1) {
                                    var _0x10f948 = _0x4f0f03[_0x441f('0x41')][_0x3f4e7a];
                                    _0x4f0f03['archive'][_0x3f4e7a] = _0x366ecd['merge'](_0x10f948, _0x53bed5);
                                } else
                                    _0x4f0f03['archive']['push'](_0x53bed5);
                                if (_0x5dbb56 > -0x1) {
                                    var _0x2ad9ac = _0x4f0f03['booksAndArchives'][_0x5dbb56];
                                    _0x4f0f03[_0x441f('0x12')][_0x5dbb56] = _0x366ecd['merge'](_0x2ad9ac, _0x53bed5);
                                }
                            }
                                , _0x529bb1 = !0x0
                                , _0x38070b = !0x1
                                , _0x52d832 = void 0x0;
                            try {
                                for (var _0x3075e5, _0x32e405 = (0x0,
                                    _0x3a8ead['default'])(_0x2f945e); !(_0x529bb1 = (_0x3075e5 = _0x32e405['next']())['done']); _0x529bb1 = !0x0) {
                                    _0x6a7fb7(_0x3075e5['value']);
                                }
                            } catch (_0x41a92a) {
                                _0x38070b = !0x0,
                                    _0x52d832 = _0x41a92a;
                            } finally {
                                try {
                                    !_0x529bb1 && _0x32e405['return'] && _0x32e405['return']();
                                } finally {
                                    if (_0x38070b)
                                        throw _0x52d832;
                                }
                            }
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x494854, _0x139087['DELETE_SHELF_INDEX'], function (_0xe3a196, _0x29f8cd) {
                            var _0x389f27 = _0x366ecd['findIndex'](_0xe3a196[_0x441f('0x1d')], function (_0x38bdef) {
                                return _0x38bdef[_0x441f('0x1b')] === _0x29f8cd;
                            });
                            _0x389f27 > -0x1 && _0xe3a196['shelfIndexes']['splice'](_0x389f27, 0x1);
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x494854, _0x139087['UPDATE_SHELF_ARCHIVE_LOAD_MORE'], function (_0x5c3b1a, _0x1f5f9b) {
                            var _0x3419d4 = _0x366ecd['findIndex'](_0x5c3b1a['archive'], function (_0x44b161) {
                                return _0x44b161['archiveId'] === _0x1f5f9b['archiveId'];
                            });
                            _0x1f5f9b['first4Books'] = _0x1f5f9b['loaded'][_0x441f('0x44')](0x0, 0x4),
                                _0x3419d4 > -0x1 ? (_0x4fd291('archiveIndex', _0x3419d4),
                                    _0x5c3b1a['archive'][_0x3419d4]['loaded'] = _0x1f5f9b['loaded'],
                                    _0x5c3b1a[_0x441f('0x41')][_0x3419d4]['first4Books'] = _0x1f5f9b['loaded']['slice'](0x0, 0x4)) : _0x5c3b1a['archive']['push'](_0x1f5f9b);
                            var _0x50aaae = _0x366ecd[_0x441f('0x2c')](_0x5c3b1a['shelfIndexes'], function (_0x289d45) {
                                return _0x289d45['archiveId'] === _0x1f5f9b['archiveId'];
                            });
                            _0x50aaae > -0x1 && (_0x4fd291('archiveInShelfIndexes', _0x50aaae),
                                _0x5c3b1a[_0x441f('0x1d')][_0x50aaae][_0x441f('0x17')] = _0x1f5f9b['loaded'],
                                _0x5c3b1a['shelfIndexes'][_0x50aaae]['first4Books'] = _0x1f5f9b['loaded']['slice'](0x0, 0x4));
                        }),
                        _0x494854),
                    'actions': (_0x3b133b = {},
                        (0x0,
                            _0x26e47e['default'])(_0x3b133b, _0x181a2e[_0x441f('0x1')], function (_0xfe25f9, _0x1e262b) {
                            var _0x10a6a0 = _0xfe25f9['commit'];
                            return _0x4fd291(_0x1e262b),
                                (0x0,
                                    _0x32b998['default'])('/web/shelf/sync', (0x0,
                                    _0x2fc5fe[_0x441f('0x43')])({}, _0x1e262b), function (_0x1acb22) {
                                    var _0x1a21a9 = _0x1acb22['data']
                                        , _0xe60b0a = _0x366ecd['get'](_0x1a21a9, 'archive', [])
                                        , _0x2005a2 = _0x366ecd['get'](_0x1a21a9, _0x441f('0x34'), [])
                                        , _0x808d97 = _0x2005a2['filter'](function (_0x254e4b) {
                                        return _0x254e4b['bookId'];
                                    })
                                        , _0x24c9fa = _0x366ecd[_0x441f('0x31')](_0x1a21a9, 'lectureBooks', [])
                                        , _0x25a79e = _0x366ecd['get'](_0x1a21a9, _0x441f('0x7'), [])
                                        , _0x24b7b9 = [];
                                    if (_0xe60b0a['length'] > 0x0) {
                                        var _0x25fff2 = !0x0
                                            , _0x46baf3 = !0x1
                                            , _0x4e85fd = void 0x0;
                                        try {
                                            for (var _0x1a0cd3, _0x27474a = (0x0,
                                                _0x3a8ead['default'])(_0xe60b0a); !(_0x25fff2 = (_0x1a0cd3 = _0x27474a['next']())['done']); _0x25fff2 = !0x0) {
                                                var _0x39a174 = _0x1a0cd3['value']
                                                    , _0x4a3fe0 = []
                                                    , _0x246616 = []
                                                    , _0x3fbdb4 = function (_0x2bb2c7) {
                                                    var _0x33c474 = _0x366ecd['findLastIndex'](_0x2005a2, function (_0x5c27a6) {
                                                        return _0x5c27a6[_0x441f('0x2a')] === _0x2bb2c7;
                                                    });
                                                    -0x1 !== _0x33c474 && _0x4a3fe0['push'](_0x2005a2['splice'](_0x33c474, 0x1)[0x0]);
                                                }
                                                    , _0xfd7949 = !0x0
                                                    , _0x57fb7e = !0x1
                                                    , _0x1fc88a = void 0x0;
                                                try {
                                                    for (var _0x5d6fa3, _0x2dad07 = (0x0,
                                                        _0x3a8ead['default'])(_0x39a174['bookIds']); !(_0xfd7949 = (_0x5d6fa3 = _0x2dad07[_0x441f('0x3f')]())['done']); _0xfd7949 = !0x0) {
                                                        _0x3fbdb4(_0x5d6fa3['value']);
                                                    }
                                                } catch (_0x57b79a) {
                                                    _0x57fb7e = !0x0,
                                                        _0x1fc88a = _0x57b79a;
                                                } finally {
                                                    try {
                                                        !_0xfd7949 && _0x2dad07[_0x441f('0xe')] && _0x2dad07['return']();
                                                    } finally {
                                                        if (_0x57fb7e)
                                                            throw _0x1fc88a;
                                                    }
                                                }
                                                var _0x5d340e = function (_0x468a05) {
                                                    var _0x4abcb1 = _0x366ecd[_0x441f('0x2f')](_0x24c9fa, function (_0x4297f2) {
                                                        return _0x4297f2['bookId'] === _0x468a05;
                                                    });
                                                    if (-0x1 !== _0x4abcb1) {
                                                        var _0x4f610a = _0x24c9fa['splice'](_0x4abcb1, 0x1)[0x0];
                                                        _0x4f610a['readUpdateTime'] = _0x4f610a[_0x441f('0xf')],
                                                            _0x4f610a['isAudio'] = !0x0,
                                                            _0x246616['push']((0x0,
                                                                _0x2fc5fe['default'])({}, _0x4f610a));
                                                    }
                                                }
                                                    , _0x53f6c9 = !0x0
                                                    , _0x1d7069 = !0x1
                                                    , _0x261722 = void 0x0;
                                                try {
                                                    for (var _0x5333e7, _0x2eba19 = (0x0,
                                                        _0x3a8ead['default'])(_0x39a174['lectureBookIds']); !(_0x53f6c9 = (_0x5333e7 = _0x2eba19['next']())['done']); _0x53f6c9 = !0x0) {
                                                        _0x5d340e(_0x5333e7['value']);
                                                    }
                                                } catch (_0x294609) {
                                                    _0x1d7069 = !0x0,
                                                        _0x261722 = _0x294609;
                                                } finally {
                                                    try {
                                                        !_0x53f6c9 && _0x2eba19['return'] && _0x2eba19[_0x441f('0xe')]();
                                                    } finally {
                                                        if (_0x1d7069)
                                                            throw _0x261722;
                                                    }
                                                }
                                                _0x39a174[_0x441f('0x3b')] = _0x4a3fe0[_0x441f('0x3d')](function (_0x5e0070) {
                                                    return _0x245a4a['default'][_0x441f('0x30')](_0x5e0070['type']) || _0x245a4a['default']['isPDFBookType'](_0x5e0070['type']) || _0x245a4a['default']['isMPBookType'](_0x5e0070[_0x441f('0x40')]);
                                                })[_0x441f('0x28')](function (_0x35b528, _0x515841) {
                                                    return _0x515841[_0x441f('0x25')] - _0x35b528['readUpdateTime'];
                                                })['map'](function (_0x2aea02) {
                                                    var _0x423c8d = _0x366ecd['findIndex'](_0x25a79e, function (_0x226131) {
                                                            return _0x2aea02['bookId'] === _0x226131['bookId'];
                                                        })
                                                        ,
                                                        _0x54851f = _0x423c8d > -0x1 ? _0x25a79e[_0x423c8d][_0x441f('0x21')] : 0x0;
                                                    return (0x0,
                                                        _0xacffef['default'])(_0x366ecd['pick'](_0x2aea02, [_0x441f('0x2a'), 'title', 'author', 'cover', 'secret', _0x441f('0x5'), _0x441f('0x33'), _0x441f('0x19'), 'finished', 'finishReading', 'lastChapterIdx', _0x441f('0x25'), 'updateTime']), {
                                                        'progress': _0x54851f,
                                                        'updated': 0x0,
                                                        'isTrial': _0x245a4a[_0x441f('0x43')][_0x441f('0x23')](_0x2aea02)
                                                    });
                                                }),
                                                    _0x39a174['lectureBookInfos'] = _0x246616,
                                                    _0x39a174[_0x441f('0x1c')] = []['concat']((0x0,
                                                        _0x2fc439['default'])(_0x39a174[_0x441f('0x3b')]), (0x0,
                                                        _0x2fc439[_0x441f('0x43')])(_0x39a174['lectureBookInfos']))['sort'](function (_0x1a79a8, _0x3b7dc6) {
                                                        return _0x3b7dc6['readUpdateTime'] - _0x1a79a8['readUpdateTime'];
                                                    }),
                                                    _0x39a174['type'] = 'archive',
                                                    _0x39a174['readUpdateTime'] = Math['max'](_0x366ecd[_0x441f('0x31')](_0x39a174, 'allBooks[0].readUpdateTime', 0x0), _0x366ecd['get'](_0x39a174, _0x441f('0x0'), 0x0));
                                            }
                                        } catch (_0x2b1324) {
                                            _0x46baf3 = !0x0,
                                                _0x4e85fd = _0x2b1324;
                                        } finally {
                                            try {
                                                !_0x25fff2 && _0x27474a['return'] && _0x27474a[_0x441f('0xe')]();
                                            } finally {
                                                if (_0x46baf3)
                                                    throw _0x4e85fd;
                                            }
                                        }
                                    }
                                    _0x2005a2['length'] > 0x0 && (_0x2005a2 = _0x2005a2['filter'](function (_0x36d680) {
                                        return _0x245a4a['default'][_0x441f('0x30')](_0x36d680['type']) || _0x245a4a['default'][_0x441f('0x22')](_0x36d680['type']) || _0x245a4a['default']['isMPBookType'](_0x36d680['type']);
                                    })['sort'](function (_0x5c9503, _0x4c72a5) {
                                        return _0x4c72a5[_0x441f('0x25')] - _0x5c9503['readUpdateTime'];
                                    })['map'](function (_0xc38f44) {
                                        var _0x114343 = _0x366ecd['findIndex'](_0x25a79e, function (_0x100d14) {
                                                return _0xc38f44['bookId'] === _0x100d14[_0x441f('0x2a')];
                                            })
                                            ,
                                            _0x204525 = _0x114343 > -0x1 ? _0x25a79e[_0x114343][_0x441f('0x21')] : 0x0;
                                        return (0x0,
                                            _0xacffef['default'])(_0x366ecd['pick'](_0xc38f44, [_0x441f('0x2a'), 'title', _0x441f('0xb'), 'cover', 'secret', 'format', 'soldout', _0x441f('0x19'), 'finished', _0x441f('0x2d'), 'lastChapterIdx', _0x441f('0x25'), 'updateTime']), {
                                            'bookType': _0xc38f44['type'],
                                            'progress': _0x204525,
                                            'updated': 0x0,
                                            'isTrial': _0x245a4a['default']['isTrialReadBook'](_0xc38f44)
                                        });
                                    }));
                                    var _0x2926e1 = !0x0
                                        , _0x40ad87 = !0x1
                                        , _0x59c021 = void 0x0;
                                    try {
                                        for (var _0x56919c, _0x383a1d = (0x0,
                                            _0x3a8ead['default'])(_0x2005a2); !(_0x2926e1 = (_0x56919c = _0x383a1d['next']())['done']); _0x2926e1 = !0x0) {
                                            var _0x1afa91 = _0x56919c['value'];
                                            _0x24b7b9['push']((0x0,
                                                _0x2fc5fe['default'])({}, _0x1afa91, {
                                                'type': 'book'
                                            }));
                                        }
                                    } catch (_0x2fbd0b) {
                                        _0x40ad87 = !0x0,
                                            _0x59c021 = _0x2fbd0b;
                                    } finally {
                                        try {
                                            !_0x2926e1 && _0x383a1d['return'] && _0x383a1d['return']();
                                        } finally {
                                            if (_0x40ad87)
                                                throw _0x59c021;
                                        }
                                    }
                                    var _0x1ddb35 = !0x0
                                        , _0x30dba6 = !0x1
                                        , _0x64a12d = void 0x0;
                                    try {
                                        for (var _0x45294c, _0x61beb1 = (0x0,
                                            _0x3a8ead['default'])(_0x24c9fa); !(_0x1ddb35 = (_0x45294c = _0x61beb1['next']())['done']); _0x1ddb35 = !0x0) {
                                            var _0x3bbe1d = _0x45294c['value'];
                                            _0x24b7b9['push']((0x0,
                                                _0x2fc5fe['default'])({}, _0x3bbe1d, {
                                                'readUpdateTime': _0x3bbe1d['lectureReadUpdateTime'],
                                                'type': 'book',
                                                'isAudio': !0x0
                                            }));
                                        }
                                    } catch (_0x5d8f2c) {
                                        _0x30dba6 = !0x0,
                                            _0x64a12d = _0x5d8f2c;
                                    } finally {
                                        try {
                                            !_0x1ddb35 && _0x61beb1['return'] && _0x61beb1[_0x441f('0xe')]();
                                        } finally {
                                            if (_0x30dba6)
                                                throw _0x64a12d;
                                        }
                                    }
                                    _0x24b7b9 = []['concat']((0x0,
                                        _0x2fc439['default'])(_0x24b7b9), (0x0,
                                        _0x2fc439['default'])(_0xe60b0a))['sort'](function (_0x1df4cd, _0x5a73a4) {
                                        return _0x5a73a4['readUpdateTime'] - _0x1df4cd['readUpdateTime'];
                                    }),
                                        _0x808d97 = _0x808d97['sort'](function (_0x1cd98a, _0x35f488) {
                                            return _0x35f488['readUpdateTime'] - _0x1cd98a['readUpdateTime'];
                                        }),
                                        _0x10a6a0(_0x139087[_0x441f('0x2b')], {
                                            'books': _0x2005a2,
                                            'bookProgress': _0x25a79e,
                                            'archive': _0xe60b0a,
                                            'booksAndArchives': _0x24b7b9,
                                            'rawBooks': _0x808d97
                                        });
                                }, function (_0x146d7b) {
                                    _0x4fd291('Error\x20in\x20fetchShelf', _0x146d7b);
                                });
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x3b133b, _0x181a2e['FETCH_SHELF_INDEX'], function (_0x181dd9, _0x484359) {
                            var _0x257399 = _0x181dd9[_0x441f('0x20')]
                                , _0x24f85f = _0x366ecd['get'](_0x484359, _0x441f('0x29'), 0x0);
                            return (0x0,
                                _0x32b998['default'])('/web/shelf/sync', (0x0,
                                _0x2fc5fe['default'])({}, _0x484359, {
                                'onlyBookid': 0x1
                            }), function (_0x10adcd) {
                                var _0x480282 = _0x10adcd[_0x441f('0xd')];
                                _0x257399(_0x139087['UPDATE_RAW_INDEX'], []['concat']((0x0,
                                    _0x2fc439['default'])(_0x480282[_0x441f('0x45')])));
                                var _0x8c40ea = _0x410204['default']['shelfIndexPayloadHelper'](_0x480282, _0x24f85f);
                                _0x4fd291('parsedData', _0x8c40ea['length']),
                                    _0x257399(_0x139087['UPDATE_SHELF_INDEX'], _0x8c40ea);
                            }, function (_0x1499f9) {
                                _0x4fd291('Error\x20in\x20fetchShelfIndex', _0x1499f9);
                                var _0x40a805 = (0x0,
                                    _0x3860fa['default'])(_0x1499f9);
                                _0x40a805 && _0x40a805['errCode'] && -0x2774 === _0x40a805['errCode'] && _0x257399(_0x139087[_0x441f('0x11')], !0x0);
                            });
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x3b133b, _0x181a2e[_0x441f('0x3')], function (_0x19b4f3, _0x2cae0c) {
                            var _0x4bdc2a = _0x19b4f3['commit'];
                            return (0x0,
                                _0x32b998['default'])('/web/shelf/sync', (0x0,
                                _0x2fc5fe['default'])({}, _0x2cae0c, {
                                'cbcount': 0x1
                            }), function (_0x184c52) {
                                var _0x4b67cb = _0x184c52['data'];
                                _0x4bdc2a(_0x139087['UPDATE_SHELF_UPLOAD_COUNT'], _0x4b67cb['cbcount']);
                            }, function (_0x377ff8) {
                                _0x4fd291('Error\x20in\x20fetchShelfUploadCount', _0x377ff8);
                            });
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x3b133b, _0x181a2e['FETCH_MINI_SHELF'], function (_0x1acb3d, _0x1a36ba) {
                            var _0x11cdb4 = _0x1acb3d['commit']
                                , _0x4b7f9a = _0x366ecd['get'](_0x1a36ba, 'count', 0x4);
                            return new _0x4971ef[(_0x441f('0x43'))](function (_0xcbd3fb, _0x4118f6) {
                                    (0x0,
                                        _0x32b998['default'])(_0x441f('0x37'), (0x0,
                                        _0x2fc5fe['default'])({}, _0x1a36ba, {
                                        'onlyBookid': 0x1,
                                        'count': 0xa
                                    }), function (_0x969daf) {
                                        var _0xd4e970 = _0x366ecd['get'](_0x969daf, 'data.bookIds', []);
                                        if (0x0 !== _0xd4e970['length']) {
                                            var _0x100b2b = _0xd4e970['filter'](function (_0x33b529) {
                                                return 0x0 === _0x33b529['type'] && _0x33b529['bookId'];
                                            })['slice'](0x0, 0xa);
                                            if (_0x4fd291('booksNeedFetch', _0x100b2b),
                                            0x0 !== _0x100b2b['length']) {
                                                var _0x5dc8e4 = _0x100b2b['map'](function (_0x4617d8) {
                                                    return _0x4617d8['bookId'];
                                                });
                                                return (0x0,
                                                    _0x1f6882[_0x441f('0x43')])(_0x441f('0x4'), (0x0,
                                                    _0x2fc5fe[_0x441f('0x43')])({}, _0x1a36ba, {
                                                    'bookIds': _0x5dc8e4
                                                }), function (_0x1e2a90) {
                                                    var _0x264ba4 = _0x366ecd[_0x441f('0x31')](_0x1e2a90, 'data.books', []);
                                                    _0x11cdb4(_0x139087['UPDATE_MINI_SHELF'], _0x264ba4['slice'](0x0, _0x4b7f9a)),
                                                        _0xcbd3fb(_0x1e2a90['data']);
                                                }, function (_0x2efe63) {
                                                    _0x4fd291('Error\x20in\x20fetchMiniShelf', _0x2efe63),
                                                        _0x4118f6(_0x2efe63);
                                                });
                                            }
                                            _0xcbd3fb([]);
                                        } else
                                            _0xcbd3fb([]);
                                    }, function (_0x399f3d) {
                                        _0x4fd291('Error\x20in\x20fetchMiniShelf', _0x399f3d);
                                        var _0x3d1c54 = (0x0,
                                            _0x3860fa['default'])(_0x399f3d);
                                        _0x3d1c54 && _0x3d1c54[_0x441f('0x1e')] && -0x2774 === _0x3d1c54['errCode'] && _0x11cdb4(_0x139087[_0x441f('0x2e')], !0x0),
                                            _0x4118f6(_0x399f3d);
                                    });
                                }
                            );
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x3b133b, _0x181a2e['FETCH_SHELF_ACCOUNT'], function (_0x246560) {
                            var _0x161094 = _0x246560['dispatch'];
                            return _0x4971ef[_0x441f('0x43')][_0x441f('0x42')]([_0x161094(_0x181a2e['FETCH_SHELF_BALANCE'], {
                                'pf': _0x441f('0xa')
                            }), _0x161094(_0x181a2e['FETCH_SHELF_MEMBER_CARD'], {
                                'pf': 'ios'
                            })]);
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x3b133b, _0x181a2e['FETCH_SHELF_BALANCE'], function (_0x42fafe, _0x3a4b54) {
                            var _0x235c51 = _0x42fafe[_0x441f('0x20')]
                                , _0x4b629b = _0x3a4b54['pf'];
                            return (0x0,
                                _0x1f6882['default'])('/web/pay/balance', {
                                'pf': _0x4b629b
                            }, function (_0x4253b2) {
                                _0x235c51(_0x139087['UPDATE_SHELF_BALANCE'], _0x4253b2['data']);
                            }, function (_0x3feb2f) {
                                _0x4fd291('Error\x20in\x20fetchShelfBalance', _0x3feb2f);
                            });
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x3b133b, _0x181a2e['FETCH_SHELF_MEMBER_CARD'], function (_0x289bc4, _0x3d978e) {
                            var _0x5d90f1 = _0x289bc4[_0x441f('0x20')]
                                , _0x2dab5b = _0x3d978e['pf'];
                            return (0x0,
                                _0x32b998['default'])('/web/pay/memberCardSummary', {
                                'pf': _0x2dab5b
                            }, function (_0x4c64cb) {
                                _0x5d90f1(_0x139087['UPDATE_SHELF_MEMBER_CARD'], {
                                    'memberCardSummary': _0x4c64cb['data']
                                });
                            }, function (_0x36ec4a) {
                                _0x4fd291(_0x441f('0xc'), _0x36ec4a);
                            });
                        }),
                        (0x0,
                            _0x26e47e[_0x441f('0x43')])(_0x3b133b, _0x181a2e['FETCH_SHELF_MEMBER_CARD_SVR'], function (_0x12c5ad, _0x41aa17) {
                            var _0x35c687 = _0x12c5ad['commit'];
                            return (0x0,
                                _0x32b998['default'])('/web/pay/memberCardSummary', _0x41aa17, function (_0x39dc07) {
                                _0x35c687(_0x139087[_0x441f('0x38')], {
                                    'memberCardSummary': _0x39dc07[_0x441f('0xd')]
                                });
                            }, function (_0x49fe95) {
                                _0x4fd291('Error\x20in\x20fetchShelfMemberCard', _0x49fe95);
                            });
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x3b133b, _0x181a2e['FETCH_SHELF_UPDATED_BOOKS'], function (_0x2b8070, _0x498557) {
                            var _0x4e9e92 = _0x2b8070['commit']
                                , _0x2e1cbd = _0x2b8070['state']
                                , _0x94ff0c = _0x289241['default']['getBookLastChaptersOperator'](_0x498557)
                                , _0xdef372 = _0x94ff0c['exist']
                                , _0xae79f2 = _0x94ff0c['value']
                                , _0x567905 = {}
                                , _0x16317e = [];
                            _0x2e1cbd['rawBooks']['filter'](function (_0x146bdf) {
                                return _0x245a4a['default']['isSupportedBookType'](_0x146bdf['type']) || _0x245a4a['default'][_0x441f('0x22')](_0x146bdf['type']) || _0x245a4a['default']['isMPBookType'](_0x146bdf[_0x441f('0x40')]);
                            })['forEach'](function (_0x5e8b58) {
                                var _0x5854e9 = _0x366ecd['get'](_0x5e8b58, 'lastChapterIdx', 0x0)
                                    , _0x5175ca = _0x366ecd['get'](_0xae79f2, _0x5e8b58['bookId'], '');
                                _0x5175ca ? (_0x5854e9 && _0x5854e9 > _0x5175ca && 0x0 === _0x366ecd[_0x441f('0x31')](_0x5e8b58, 'finished') && _0x366ecd['get'](_0x5e8b58, 'updateTime', 0x0) > _0x366ecd['get'](_0x5e8b58, 'readUpdateTime', 0x0) && _0x16317e['push'](_0x5e8b58[_0x441f('0x2a')]),
                                    _0x567905[_0x5e8b58[_0x441f('0x2a')]] = _0x5175ca) : _0x567905[_0x5e8b58['bookId']] = _0x5854e9;
                            }),
                                _0x4e9e92(_0x139087['UPDATE_SHELF_UPDATED_BOOKS'], _0x16317e),
                                (0x0,
                                    _0x71267d['default'])(_0x567905)['length'] > 0x0 ? (_0x94ff0c[_0x441f('0x36')](_0x567905),
                                    _0x94ff0c['save']()) : _0xdef372 && (_0x94ff0c['clearValue'](),
                                    _0x94ff0c['save']());
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x3b133b, _0x181a2e['FETCH_SHELF_LOAD_MORE'], function (_0x130742, _0x3e9a93) {
                            var _0x254a7b = _0x130742['commit']
                                , _0x4ced99 = _0x130742['state'];
                            if (!(_0x4ced99['loadingMore'] || _0x4ced99['booksAndArchives']['length'] >= _0x4ced99['shelfIndexes'][_0x441f('0x1f')])) {
                                _0x254a7b(_0x139087['UPDATE_SHELF_LOADING_MORE'], !0x0),
                                    _0x254a7b(_0x139087['UPDATE_SHELF_LOADING_MORE_ERROR'], !0x1);
                                var _0x1ec0cd = _0x366ecd[_0x441f('0x31')](_0x3e9a93, 'currentArchiveId', 0x0)
                                    ,
                                    _0x53e638 = _0x410204['default']['shelfLoadMorePayloadHelper'](_0x4ced99['shelfIndexes'], _0x4ced99['booksAndArchives']['length'], _0x3e9a93[_0x441f('0x15')], _0x1ec0cd)
                                    , _0x528771 = _0x53e638['items']
                                    , _0x40f6a5 = _0x53e638['bookIds'];
                                return _0x4fd291('fetchShelfLoadMore', _0x528771['length']),
                                    (0x0,
                                        _0x1f6882[_0x441f('0x43')])('/web/shelf/syncBook', (0x0,
                                        _0x2fc5fe['default'])({
                                        'bookIds': _0x40f6a5
                                    }, _0x3e9a93), function (_0x3c1b39) {
                                        var _0x432f85 = _0x366ecd['get'](_0x3c1b39, 'data.books', [])
                                            ,
                                            _0x160ccd = _0x366ecd['get'](_0x3c1b39, 'data.emptyInfoIds', [])[_0x441f('0x10')](function (_0x54683b) {
                                                return _0x54683b['bookId'];
                                            });
                                        _0x4fd291('emptyInfoIds', _0x160ccd),
                                            _0x254a7b(_0x139087[_0x441f('0x2b')], _0x432f85);
                                        var _0x2cba43 = _0x410204['default']['shelfLoadMoreMergeHelper'](_0x528771, _0x432f85, _0x160ccd)
                                            , _0x56e5ec = _0x2cba43['archives']
                                            , _0x57f958 = _0x2cba43['result']
                                            , _0x299bf3 = _0x2cba43['idxDeleted'];
                                        if (_0x299bf3['length']) {
                                            var _0x445e08 = !0x0
                                                , _0x16ac6c = !0x1
                                                , _0x4cc8b9 = void 0x0;
                                            try {
                                                for (var _0x593d36, _0x2475ee = (0x0,
                                                    _0x3a8ead['default'])(_0x299bf3); !(_0x445e08 = (_0x593d36 = _0x2475ee[_0x441f('0x3f')]())['done']); _0x445e08 = !0x0) {
                                                    var _0x530766 = _0x593d36['value'];
                                                    _0x254a7b(_0x139087[_0x441f('0x32')], _0x530766);
                                                }
                                            } catch (_0x45c824) {
                                                _0x16ac6c = !0x0,
                                                    _0x4cc8b9 = _0x45c824;
                                            } finally {
                                                try {
                                                    !_0x445e08 && _0x2475ee['return'] && _0x2475ee['return']();
                                                } finally {
                                                    if (_0x16ac6c)
                                                        throw _0x4cc8b9;
                                                }
                                            }
                                        }
                                        _0x4fd291('fetchShelfLoadMore', _0x57f958['length']),
                                            _0x254a7b(_0x139087['UPDATE_SHELF_LOAD_MORE'], {
                                                'booksAndArchives': _0x57f958,
                                                'archives': _0x56e5ec
                                            }),
                                            _0x254a7b(_0x139087['UPDATE_SHELF_LOADING_MORE'], !0x1),
                                            _0x254a7b(_0x139087['UPDATE_SHELF_LOADING_MORE_ERROR'], !0x1);
                                    }, function (_0x530b76) {
                                        _0x4fd291('Error\x20in\x20fetchShelfLoadMore', _0x530b76),
                                            _0x254a7b(_0x139087['UPDATE_SHELF_LOADING_MORE'], !0x1);
                                        var _0x5bfbc5 = (0x0,
                                            _0x3860fa[_0x441f('0x43')])(_0x530b76);
                                        _0x5bfbc5 && _0x5bfbc5['errCode'] && -0x2774 === _0x5bfbc5['errCode'] && _0x254a7b(_0x139087['UPDATE_SHELF_PAGE_FALLBACK_MODE'], !0x0),
                                        _0x3e9a93['loadMore'] && _0x254a7b(_0x139087['UPDATE_SHELF_LOADING_MORE_ERROR'], !0x0);
                                    });
                            }
                        }),
                        (0x0,
                            _0x26e47e['default'])(_0x3b133b, _0x181a2e[_0x441f('0x3a')], function (_0x2af99c, _0x377bf7) {
                            var _0x532775 = _0x2af99c[_0x441f('0x20')]
                                , _0x39dff1 = _0x2af99c[_0x441f('0x1a')]
                                , _0x374591 = _0x366ecd['get'](_0x377bf7, 'currentArchiveId', 0x0)
                                , _0x3bb5fd = _0x366ecd['get'](_0x377bf7, 'count', 0x0)
                                , _0x1a12ab = _0x366ecd['find'](_0x39dff1['shelfIndexes'], {
                                'archiveId': _0x374591
                            });
                            if (_0x1a12ab) {
                                var _0x59aba = _0x410204['default']['archiveLoadMorePayloadHelper'](_0x1a12ab, _0x3bb5fd);
                                if (0x0 !== _0x59aba['length'])
                                    return _0x532775(_0x139087[_0x441f('0x16')], !0x0),
                                        _0x532775(_0x139087['UPDATE_SHELF_LOADING_MORE_ERROR'], !0x1),
                                        (0x0,
                                            _0x1f6882['default'])('/web/shelf/syncBook', (0x0,
                                            _0x2fc5fe['default'])({
                                            'bookIds': _0x59aba
                                        }, _0x377bf7), function (_0x4588a1) {
                                            var _0x11ba19 = _0x366ecd[_0x441f('0x31')](_0x4588a1, 'data.books', [])
                                                ,
                                                _0x7b0350 = _0x366ecd['get'](_0x4588a1, 'data.emptyInfoIds', [])['map'](function (_0x2178a1) {
                                                    return _0x2178a1['bookId'];
                                                });
                                            _0x4fd291('emptyInfoIds', _0x7b0350),
                                                _0x532775(_0x139087['UPDATE_SHELF'], _0x11ba19);
                                            var _0x4e3f70 = _0x410204['default']['archiveLoadMoreMergeHelper'](_0x1a12ab, _0x11ba19, _0x7b0350);
                                            _0x532775(_0x139087['UPDATE_SHELF_ARCHIVE_LOAD_MORE'], _0x4e3f70),
                                                _0x532775(_0x139087['UPDATE_SHELF_LOADING_MORE'], !0x1),
                                                _0x532775(_0x139087[_0x441f('0x27')], !0x1);
                                        }, function (_0x32db95) {
                                            _0x4fd291(_0x441f('0x9'), _0x32db95),
                                                _0x532775(_0x139087['UPDATE_SHELF_LOADING_MORE'], !0x1);
                                            var _0x29501e = (0x0,
                                                _0x3860fa['default'])(_0x32db95);
                                            _0x29501e && _0x29501e['errCode'] && -0x2774 === _0x29501e['errCode'] && _0x532775(_0x139087['UPDATE_SHELF_PAGE_FALLBACK_MODE'], !0x0),
                                            _0x377bf7['loadMore'] && _0x532775(_0x139087['UPDATE_SHELF_LOADING_MORE_ERROR'], !0x0);
                                        });
                                _0x4fd291('Error\x20in\x20fetchShelfArchiveLoadMore:\x20bookIdsToFetch.length=0');
                            } else
                                _0x4fd291('Error\x20in\x20fetchShelfArchiveLoadMore:\x20archiveId=' + _0x374591 + _0x441f('0x24'));
                        }),
                        _0x3b133b)
                };
            }
            ;
            var _0x32b998 = _0x3721c2(_0x45730a(0x72))
                , _0x1f6882 = _0x3721c2(_0x45730a(0x45))
                , _0x181a2e = _0x4ef8d8(_0x45730a(0x43))
                , _0x139087 = _0x4ef8d8(_0x45730a(0x56))
                , _0x245a4a = _0x3721c2(_0x45730a(0x13a))
                , _0x410204 = _0x3721c2(_0x45730a(0x59a))
                , _0x289241 = _0x3721c2(_0x45730a(0x74))
                , _0x3860fa = _0x3721c2(_0x45730a(0x13f));

            function _0x4ef8d8(_0x2f4fd9) {
                if (_0x2f4fd9 && _0x2f4fd9['__esModule'])
                    return _0x2f4fd9;
                var _0x24b219 = {};
                if (null != _0x2f4fd9)
                    for (var _0x3ac59a in _0x2f4fd9)
                        Object['prototype']['hasOwnProperty']['call'](_0x2f4fd9, _0x3ac59a) && (_0x24b219[_0x3ac59a] = _0x2f4fd9[_0x3ac59a]);
                return _0x24b219[_0x441f('0x43')] = _0x2f4fd9,
                    _0x24b219;
            }

            function _0x3721c2(_0x2f4896) {
                return _0x2f4896 && _0x2f4896['__esModule'] ? _0x2f4896 : {
                    'default': _0x2f4896
                };
            }

            var _0x46f4fd = _0x45730a(0x9)
                , _0x366ecd = _0x45730a(0x27);

            function _0x4fd291() {
                var _0x492424, _0xdde591 = _0x46f4fd['inDevelopment']();
                _0xdde591 && (_0x492424 = console)['log'][_0x441f('0x14')](_0x492424, ['shelf']['concat'](Array['prototype']['slice'][_0x441f('0x13')](arguments)));
            }
        }
    }
]);
