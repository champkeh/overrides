var strings_5 = [
    "lastChapterIdx",
    "get",
    "archive",
    "bookId",
    "commit",
    "map",
    "Error in fetchMiniShelf",
    "UPDATE_SHELF_LOADING_MORE",
    "default",
    "done",
    "sort",
    "archiveId",
    "UPDATE_SHELF_UPLOAD_COUNT",
    "isPDFBookType",
    "findIndex",
    "exist",
    "isMPBookType",
    "gger",
    "items",
    "shelfIndexPayloadHelper",
    "readUpdateTime",
    "loaded",
    "count",
    "setValue",
    "balanceAndroid",
    "value",
    "archiveLoadMorePayloadHelper",
    "stateObject",
    "FETCH_SHELF",
    "length",
    "isSupportedBookType",
    "slice",
    "return",
    "apply",
    "/web/pay/memberCardSummary",
    "/web/shelf/sync",
    "prototype",
    "next",
    "Error in fetchShelfIndex",
    "data",
    "push",
    "inDevelopment",
    "/web/shelf/syncBook",
    "Error in fetchShelfBalance",
    "call",
    "allBooks",
    "forEach",
    "type",
    "UPDATE_SHELF_MEMBER_CARD",
    "soldout",
    "shelfLoadMorePayloadHelper",
    "shelfIndexes",
    "isTrialReadBook",
    "first4Books",
    "Error in fetchShelfArchiveLoadMore: archiveId=",
    "DELETE_SHELF_INDEX",
    "bookInfos"
]

var _0x17dc = function (idx) {
    return strings_5[Number(idx)]
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push(
    [
        [5],
        {
            // store: shelf
            1032: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                let _0x36e60d = _0x270b5f(require(0x5b)),
                    _0x29c9e9 = _0x270b5f(require(0x47)),
                    _0x3e278c = _0x270b5f(require(0xc3)),
                    _0x430d19 = _0x270b5f(require(0x33)),
                    _0x1fda8e = _0x270b5f(require(0xc1)),
                    _0x3d31e6 = _0x270b5f(require(0x16c)),
                    _0x446d0e = _0x270b5f(require(0x10f));

                let _0x2aafa8 = _0x270b5f(require(0x5c)),
                    _0x3941cf = _0x270b5f(require(0x35)),
                    _0x1794ad = _0x322378(require(0x34)),
                    _0x4d9371 = _0x322378(require(70)),
                    _0x499da1 = _0x270b5f(require(0x10e)),
                    _0x226f29 = _0x270b5f(require(0x52b)),
                    _0x5e6578 = _0x270b5f(require(0x5e));

                function _0x322378(_exports) {
                    if (_exports && _exports.__esModule) {
                        return _exports
                    }
                    var _module = {};
                    if (null != _exports) {
                        for (const key in _exports) {
                            if (Object.prototype.hasOwnProperty.call(_exports, key)) {
                                _module[key] = _exports[key]
                            }
                        }
                    }
                    _module.default = _exports
                    return _module;
                }

                function _0x270b5f(_exports) {
                    return _exports && _exports['__esModule'] ? _exports : {
                        'default': _exports
                    };
                }

                let _0x20d6c1 = require(0x8),
                    _0x143d12 = require(0x1f);

                function _0x3fa3be() {
                    if (_0x20d6c1.inDevelopment()) {
                        console.log.apply(console, ['shelf'].concat(Array.prototype.slice.call(arguments)))
                    }
                }

                exports.default = function () {
                    const mutations = {}
                    _0x1fda8e.default(mutations, 'updateShelf', function (state, payload) {
                        const _0x4a8e60 = state.rawBooks
                        _0x4a8e60.push.apply(_0x4a8e60, _0x446d0e.default(payload))
                    })
                    _0x1fda8e.default(mutations, 'updateMiniShelf', function (state, payload) {
                        state.miniShelf = payload
                    })
                    _0x1fda8e.default(mutations, 'updateShelfBalance', function (state, payload) {
                        state.balanceIOS = _0x143d12.get(payload, 'balance', 0)
                        state.balanceAndroid = _0x143d12.get(payload, 'peerBalance', 0)
                    })
                    _0x1fda8e.default(mutations, 'updateShelfMemberCard', function (state, payload) {
                        state.memberCardSummary = payload.memberCardSummary
                    })
                    _0x1fda8e.default(mutations, 'updateShelfUpdatedBooks', function (state, payload) {
                        _0x3fa3be('UPDATE_SHELF_UPDATED_BOOKS', payload)
                        state.updatedBooks = _0x143d12.uniq([].concat(_0x446d0e.default(state.updatedBooks), _0x446d0e.default(payload)))
                    })
                    _0x1fda8e.default(mutations, 'updateShelfIndex', function (state, payload) {
                        state.shelfIndexes = payload
                    })
                    _0x1fda8e.default(mutations, 'updateShelfUploadCount', function (state, payload) {
                        state.uploadCount = payload
                    })
                    _0x1fda8e.default(mutations, 'updateRawIndex', function (state, payload) {
                        state.rawIndexes = payload
                    })
                    _0x1fda8e.default(mutations, 'updateShelfLoadingMore', function (state, payload) {
                        state.loadingMore = payload
                    })
                    _0x1fda8e.default(mutations, 'updateShelfLoadMore', function (state, payload) {
                        let _0x248155,
                            booksAndArchives = payload.booksAndArchives,
                            archives = payload.archives;

                        _0x248155 = state.booksAndArchives
                        _0x248155.push.apply(_0x248155, _0x446d0e.default(booksAndArchives))

                        let _0x34e395 = function (item) {
                                let idx = _0x143d12.findIndex(state.archive, (_) => _.archiveId === item.archiveId),
                                    idx2 = _0x143d12.findIndex(state.booksAndArchives, (_) => _.archiveId === item.archiveId);

                                if (idx > -1) {
                                    const _0x20e74a = state.archive[idx];
                                    state.archive[idx] = _0x143d12.merge(_0x20e74a, item)
                                } else {
                                    state.archive.push(item)
                                }
                                if (idx2 > -1) {
                                    const _0x556527 = state.booksAndArchives[idx2]
                                    state.booksAndArchives[idx2] = _0x143d12.merge(_0x556527, item)
                                }
                            },
                            _0x408bb1 = true,
                            hasError = false,
                            errObj = undefined;

                        try {
                            for (let _0x118daf, _0x4d8f70 = _0x3d31e6.default(archives); !(_0x408bb1 = (_0x118daf = _0x4d8f70.next()).done); _0x408bb1 = true) {
                                _0x34e395(_0x118daf.value)
                            }
                        } catch (err) {
                            hasError = true
                            errObj = err
                        } finally {
                            try {
                                !_0x408bb1 && _0x4d8f70[_0x17dc('0x20')] && _0x4d8f70['return']();
                            } finally {
                                if (hasError)
                                    throw errObj;
                            }
                        }
                    })
                    _0x1fda8e.default(mutations, 'deleteShelfIndex', function (state, payload) {
                        const idx = _0x143d12.findIndex(state.shelfIndexes, (_) => _.idx === payload)
                        idx > -1 && state.shelfIndexes.splice(idx, 1)
                    })
                    _0x1fda8e.default(mutations, 'updateShelfArchiveLoadMore', function (state, payload) {
                        const idx = _0x143d12.findIndex(state.archive, (_) => _.archiveId === payload.archiveId)

                        payload.first4Books = payload.loaded.slice(0, 4)
                        if (idx > -1) {
                            _0x3fa3be('archiveIndex', idx)
                            state.archive[idx].loaded = payload.loaded
                            state.archive[idx].first4Books = payload.loaded.slice(0, 4)
                        } else {
                            state.archive.push(payload)
                        }
                        const idx2 = _0x143d12.findIndex(state.shelfIndexes, (_) => _.archiveId === payload.archiveId)
                        if (idx2 > -1) {
                            _0x3fa3be('archiveInShelfIndexes', idx2)
                            state.shelfIndexes[idx2].loaded = payload.loaded
                            state.shelfIndexes[idx2].first4Books = payload.loaded.slice(0, 4)
                        }
                    })

                    const actions = {}
                    _0x1fda8e.default(actions, _0x1794ad['FETCH_SHELF'], function (context, payload) {
                        let _commit = context['commit']

                        _0x3fa3be(payload)
                        return _0x2aafa8.default('/web/shelf/sync', _0x430d19.default({}, payload), resp => {
                            let respData = resp.data,
                                archive = _0x143d12.get(respData, 'archive', []),
                                books = _0x143d12.get(respData, 'books', []),
                                bookIds = books.filter((_) => _['bookId']),
                                lectureBooks = _0x143d12.get(respData, 'lectureBooks', []),
                                bookProgress = _0x143d12.get(respData, 'bookProgress', []),
                                booksAndArchives = [];

                            if (archive.length > 0) {
                                let _0x3d6960 = true,
                                    hasError = false,
                                    errObj = undefined;

                                try {
                                    for (let _0x1e543f, _0x28850c = _0x3d31e6.default(archive); !(_0x3d6960 = (_0x1e543f = _0x28850c.next()).done); _0x3d6960 = true) {
                                        let _0x50dfb4 = _0x1e543f['value'],
                                            _0x26d50e = [],
                                            _0x16ac83 = [],
                                            _0x4d1a3a = function (bookId) {
                                                const idx = _0x143d12.findLastIndex(books, (_) => _.bookId === bookId)
                                                    - 1 !== idx && _0x26d50e.push(books.splice(idx, 1)[0])
                                            },
                                            _0x11e712 = true,
                                            hasError = false,
                                            errObj = undefined;

                                        try {
                                            for (var _0x2d5afa, _0xe8ba7e = _0x3d31e6.default(_0x50dfb4.bookIds); !(_0x11e712 = (_0x2d5afa = _0xe8ba7e.next()).done); _0x11e712 = true) {
                                                _0x4d1a3a(_0x2d5afa['value'])
                                            }
                                        } catch (err) {
                                            hasError = true
                                            errObj = err
                                        } finally {
                                            try {
                                                !_0x11e712 && _0xe8ba7e['return'] && _0xe8ba7e['return']();
                                            } finally {
                                                if (hasError)
                                                    throw errObj;
                                            }
                                        }

                                        let _0x4dbe87 = function (bookId) {
                                                const idx = _0x143d12.findLastIndex(lectureBooks, (_) => _.bookId === bookId)
                                                if (-1 !== idx) {
                                                    const book = lectureBooks.splice(idx, 1)[0]
                                                    book.readUpdateTime = book.lectureReadUpdateTime
                                                    book.isAudio = true
                                                    _0x16ac83.push(_0x430d19.default({}, book))
                                                }
                                            },
                                            _0x2203f2 = true,
                                            _0x27b353 = false,
                                            _0xebf762 = undefined;
                                        try {
                                            for (var _0x544e1e, _0x125447 = _0x3d31e6.default(_0x50dfb4.lectureBookIds); !(_0x2203f2 = (_0x544e1e = _0x125447.next()).done); _0x2203f2 = true) {
                                                _0x4dbe87(_0x544e1e.value)
                                            }
                                        } catch (err) {
                                            _0x27b353 = true
                                            _0xebf762 = err
                                        } finally {
                                            try {
                                                !_0x2203f2 && _0x125447['return'] && _0x125447[_0x17dc('0x20')]();
                                            } finally {
                                                if (_0x27b353)
                                                    throw _0xebf762;
                                            }
                                        }

                                        _0x50dfb4.bookInfos = _0x26d50e.filter(function (_0x233952) {
                                            return _0x499da1[_0x17dc('0x8')]['isSupportedBookType'](_0x233952[_0x17dc('0x2f')]) || _0x499da1['default'][_0x17dc('0xd')](_0x233952['type']) || _0x499da1['default'][_0x17dc('0x10')](_0x233952['type']);
                                        }).sort(function (_0x4ec09d, _0x1cdf9c) {
                                            return _0x1cdf9c['readUpdateTime'] - _0x4ec09d['readUpdateTime'];
                                        })['map'](function (_0x21ca21) {
                                            var _0x231c6a = _0x143d12['findIndex'](bookProgress, function (_0x591b3b) {
                                                    return _0x21ca21['bookId'] === _0x591b3b['bookId'];
                                                })
                                                ,
                                                _0x58d3c4 = _0x231c6a > -0x1 ? bookProgress[_0x231c6a]['progress'] : 0x0;
                                            return (0x0,
                                                _0x3e278c['default'])(_0x143d12['pick'](_0x21ca21, ['bookId', 'title', 'author', 'cover', 'secret', 'format', _0x17dc('0x31'), 'payType', 'finished', 'finishReading', 'lastChapterIdx', 'readUpdateTime', 'updateTime']), {
                                                'progress': _0x58d3c4,
                                                'updated': 0x0,
                                                'isTrial': _0x499da1['default']['isTrialReadBook'](_0x21ca21)
                                            });
                                        }),
                                            _0x50dfb4['lectureBookInfos'] = _0x16ac83,
                                            _0x50dfb4[_0x17dc('0x2d')] = []['concat']((0x0,
                                                _0x446d0e[_0x17dc('0x8')])(_0x50dfb4['bookInfos']), (0x0,
                                                _0x446d0e['default'])(_0x50dfb4['lectureBookInfos']))[_0x17dc('0xa')](function (_0x5cf36d, _0x3cd9d6) {
                                                return _0x3cd9d6['readUpdateTime'] - _0x5cf36d[_0x17dc('0x14')];
                                            }),
                                            _0x50dfb4['type'] = 'archive',
                                            _0x50dfb4['readUpdateTime'] = Math['max'](_0x143d12['get'](_0x50dfb4, 'allBooks[0].readUpdateTime', 0x0), _0x143d12['get'](_0x50dfb4, 'allBooks[0].lectureReadUpdateTime', 0x0));
                                    }
                                } catch (err) {
                                    hasError = true
                                    errObj = err
                                } finally {
                                    try {
                                        !_0x3d6960 && _0x28850c['return'] && _0x28850c['return']();
                                    } finally {
                                        if (hasError)
                                            throw errObj;
                                    }
                                }
                            }

                            if (books.length > 0) {
                                books = books
                                    .filter((book) => {
                                        return _0x499da1.default.isSupportedBookType(book.type) || _0x499da1.default.isPDFBookType(book.type) || _0x499da1.default.isMPBookType(book.type)
                                    })
                                    .sort((a, b) => b.readUpdateTime - a.readUpdateTime)
                                    .map(book => {
                                        const idx = _0x143d12.findIndex(bookProgress, (_) => book.bookId === _.bookId),
                                            progress = idx > -1 ? bookProgress[idx].progress : 0;

                                        return _0x3e278c.default(_0x143d12.pick(book, [
                                            'bookId',
                                            'title',
                                            'author',
                                            'cover',
                                            'secret',
                                            'format',
                                            'soldout',
                                            'payType',
                                            'finished',
                                            'finishReading',
                                            'lastChapterIdx',
                                            'readUpdateTime',
                                            'updateTime',
                                        ]), {
                                            'bookType': book.type,
                                            'progress': progress,
                                            'updated': 0,
                                            'isTrial': _0x499da1.default.isTrialReadBook(book),
                                        })
                                    })
                            }


                            let _0x8e0630 = true,
                                hasError = false,
                                errObj = undefined;
                            try {
                                for (var _0x275788, _0x2f05a5 = _0x3d31e6.default(books); !(_0x8e0630 = (_0x275788 = _0x2f05a5.next())['done']); _0x8e0630 = !0x0) {
                                    const book = _0x275788['value']
                                    booksAndArchives.push(_0x430d19.default({}, book, {
                                        'type': 'book'
                                    }))
                                }
                            } catch (err) {
                                hasError = true
                                errObj = err
                            } finally {
                                try {
                                    !_0x8e0630 && _0x2f05a5['return'] && _0x2f05a5['return']();
                                } finally {
                                    if (hasError)
                                        throw errObj;
                                }
                            }


                            let _0xbdff68 = !0x0,
                                _0x4762e8 = !0x1,
                                _0x2769a4 = void 0x0;
                            try {
                                for (let _0x4f33c6, _0x588c70 = _0x3d31e6.default(lectureBooks); !(_0xbdff68 = (_0x4f33c6 = _0x588c70['next']())['done']); _0xbdff68 = !0x0) {
                                    const lectureBook = _0x4f33c6.value
                                    booksAndArchives.push(_0x430d19.default({}, lectureBook, {
                                        'readUpdateTime': lectureBook.lectureReadUpdateTime,
                                        'type': 'book',
                                        'isAudio': true
                                    }))
                                }
                            } catch (err) {
                                _0x4762e8 = true
                                _0x2769a4 = err
                            } finally {
                                try {
                                    !_0xbdff68 && _0x588c70['return'] && _0x588c70['return']();
                                } finally {
                                    if (_0x4762e8)
                                        throw _0x2769a4;
                                }
                            }


                            booksAndArchives = [].concat(_0x446d0e.default(booksAndArchives), _0x446d0e.default(archive)).sort((a, b) => b.readUpdateTime - a.readUpdateTime)
                            bookIds = bookIds.sort((a, b) => b.readUpdateTime - a.readUpdateTime)
                            _commit(_0x4d9371['UPDATE_SHELF'], {
                                'books': books,
                                'bookProgress': bookProgress,
                                'archive': archive,
                                'booksAndArchives': booksAndArchives,
                                'rawBooks': bookIds
                            })
                        }, err => {
                            _0x3fa3be('Error in fetchShelf', err)
                        })
                    })
                    _0x1fda8e.default(actions, 'fetchShelfIndex', function (context, payload) {
                        let _commit = context['commit'],
                            currentArchiveId = _0x143d12.get(payload, 'currentArchiveId', 0);

                        return _0x2aafa8.default('/web/shelf/sync', _0x430d19.default({}, payload, {
                            'onlyBookid': 1
                        }), (resp) => {
                            const respData = resp.data
                            _commit(_0x4d9371['UPDATE_RAW_INDEX'], [].concat(_0x446d0e.default(respData.bookIds)))
                            const _0x106680 = _0x226f29.default.shelfIndexPayloadHelper(respData, currentArchiveId)
                            _0x3fa3be('parsedData', _0x106680.length)
                            _commit(_0x4d9371['UPDATE_SHELF_INDEX'], _0x106680)
                        }, (err) => {
                            _0x3fa3be('Error in fetchShelfIndex', err)
                        })
                    })
                    _0x1fda8e.default(actions, 'fetchShelfUploadCount', function (context, payload) {
                        const _commit = context['commit'];

                        return _0x2aafa8.default('/web/shelf/sync', _0x430d19.default({}, payload, {
                            'cbcount': 1
                        }), (resp) => {
                            const respData = resp.data
                            _commit(_0x4d9371['UPDATE_SHELF_UPLOAD_COUNT'], respData.cbcount)
                        }, (err) => {
                            _0x3fa3be('Error in fetchShelfUploadCount', err)
                        })
                    })
                    _0x1fda8e.default(actions, 'fetchMiniShelf', function (context, payload) {
                        let _commit = context['commit'],
                            _0x3edf90 = _0x143d12.get(payload, 'count', 4);

                        return new _0x29c9e9.default(function (_0x378bbe, _0x4f076f) {
                            _0x2aafa8.default('/web/shelf/sync', _0x430d19.default({}, payload, {
                                'onlyBookid': 1,
                                'count': 10
                            }), (resp) => {
                                const bookIds = _0x143d12.get(resp, 'data.bookIds', []);
                                if (0 !== bookIds.length) {
                                    const _0x270082 = bookIds.filter(bookId => 0 === bookId.type && bookId.bookId).slice(0, 10);
                                    _0x3fa3be('booksNeedFetch', _0x270082)
                                    if (0 !== _0x270082.length) {
                                        const _0x253819 = _0x270082.map((_) => _.bookId)
                                        return _0x3941cf.default('/web/shelf/syncBook', _0x430d19.default({}, payload, {
                                            'bookIds': _0x253819
                                        }), (resp) => {
                                            var _0x362c57 = _0x143d12.get(resp, 'data.books', [])
                                            _commit(_0x4d9371['UPDATE_MINI_SHELF'], _0x362c57.slice(0, _0x3edf90))
                                            _0x378bbe(resp.data)
                                        }, (err) => {
                                            _0x3fa3be('Error in fetchMiniShelf', err)
                                            _0x4f076f(err)
                                        })
                                    }
                                    _0x378bbe([]);
                                } else
                                    _0x378bbe([]);
                            }, (err) => {
                                _0x3fa3be('Error in fetchMiniShelf', err)
                                _0x4f076f(err)
                            });
                        })
                    })
                    _0x1fda8e.default(actions, 'fetchShelfAccount', function (context) {
                        const _dispatch = context['dispatch'];

                        return _0x29c9e9.default.all([
                            _dispatch(_0x1794ad['FETCH_SHELF_BALANCE'], {
                                'pf': 'ios_html'
                            }),
                            _dispatch(_0x1794ad['FETCH_SHELF_MEMBER_CARD'], {
                                'pf': 'ios'
                            }),
                        ])
                    })
                    _0x1fda8e.default(actions, 'fetchShelfBalance', function (context, payload) {
                        const _commit = context['commit'],
                            pf = payload['pf'];

                        return _0x3941cf.default('/web/pay/balance', {
                            'pf': pf
                        }, (resp) => {
                            _commit(_0x4d9371['UPDATE_SHELF_BALANCE'], resp.data)
                        }, (err) => {
                            _0x3fa3be('Error in fetchShelfBalance', err)
                        })
                    })
                    _0x1fda8e.default(actions, 'fetchShelfMemberCard', function (context, payload) {
                        const _commit = context['commit'],
                            pf = payload['pf'];

                        return _0x2aafa8.default('/web/pay/memberCardSummary', {
                            'pf': pf
                        }, (resp) => {
                            _commit(_0x4d9371['UPDATE_SHELF_MEMBER_CARD'], {
                                'memberCardSummary': resp.data
                            })
                        }, (err) => {
                            _0x3fa3be('Error in fetchShelfMemberCard', err)
                        })
                    })
                    _0x1fda8e.default(actions, 'fetchShelfMemberCardSvr', function (context, payload) {
                        const _commit = context['commit'];

                        return _0x2aafa8.default('/web/pay/memberCardSummary', payload, function (resp) {
                            _commit(_0x4d9371['UPDATE_SHELF_MEMBER_CARD'], {
                                'memberCardSummary': resp.data
                            })
                        }, (err) => {
                            _0x3fa3be('Error in fetchShelfMemberCard', err);
                        })
                    })
                    _0x1fda8e.default(actions, 'fetchShelfUpdatedBooks', function (context, payload) {
                        let _commit = context['commit'],
                            _state = context['state'],
                            _0x38fa8a = _0x5e6578.default.getBookLastChaptersOperator(payload),
                            _0xde1a69 = _0x38fa8a['exist'],
                            _0x329259 = _0x38fa8a['value'],
                            _0x17025a = {},
                            updatedBooks = [];

                        _state.rawBooks.filter((_) =>
                            _0x499da1.default.isSupportedBookType(_.type) ||
                            _0x499da1.default.isPDFBookType(_.type) ||
                            _0x499da1.default.isMPBookType(_.type)
                        ).forEach((_) => {
                            let lastChapterIdx = _0x143d12.get(_, 'lastChapterIdx', 0),
                                _0x51fb4e = _0x143d12.get(_0x329259, _.bookId, '');
                            if (_0x51fb4e) {
                                lastChapterIdx && lastChapterIdx > _0x51fb4e && 0 === _0x143d12.get(_, 'finished') && _0x143d12.get(_, 'updateTime', 0) > _0x143d12.get(_, 'readUpdateTime', 0) && updatedBooks.push(_.bookId)
                                _0x17025a[_.bookId] = _0x51fb4e
                            } else {
                                _0x17025a[_.bookId] = lastChapterIdx
                            }
                        })
                        _commit(_0x4d9371['UPDATE_SHELF_UPDATED_BOOKS'], updatedBooks)
                        if (_0x36e60d.default(_0x17025a).length > 0) {
                            _0x38fa8a.setValue(_0x17025a)
                            _0x38fa8a.save()
                        } else {
                            if (_0xde1a69) {
                                _0x38fa8a.clearValue()
                                _0x38fa8a.save()
                            }
                        }
                    })
                    _0x1fda8e.default(actions, 'fetchShelfLoadMore', function (context, payload) {
                        let _commit = context['commit'],
                            _state = context['state'];

                        if ((!_state.loadingMore && _state.booksAndArchives.length < _state.shelfIndexes.length)) {
                            _commit(_0x4d9371['UPDATE_SHELF_LOADING_MORE'], true)

                            let currentArchiveId = _0x143d12.get(payload, 'currentArchiveId', 0),
                                _0x518e73 = _0x226f29.default.shelfLoadMorePayloadHelper(_state.shelfIndexes, _state.booksAndArchives.length, payload.count, currentArchiveId),
                                items = _0x518e73.items,
                                bookIds = _0x518e73.bookIds;

                            _0x3fa3be('fetchShelfLoadMore', items.length)
                            return _0x3941cf.default('/web/shelf/syncBook', _0x430d19.default({
                                'bookIds': bookIds
                            }, payload), (resp) => {
                                let books = _0x143d12.get(resp, 'data.books', []),
                                    emptyInfoIds = _0x143d12.get(resp, 'data.emptyInfoIds', []).map((_) => _.bookId);

                                _0x3fa3be('emptyInfoIds', emptyInfoIds)
                                _commit(_0x4d9371['UPDATE_SHELF'], books)

                                var _0x10acd5 = _0x226f29.default.shelfLoadMoreMergeHelper(items, books, emptyInfoIds),
                                    archives = _0x10acd5['archives'],
                                    booksAndArchives = _0x10acd5['result'],
                                    idxDeleted = _0x10acd5['idxDeleted'];
                                if (idxDeleted.length) {
                                    let _0x416f9c = !0x0,
                                        hasError = !0x1,
                                        errObj = void 0x0;
                                    try {
                                        for (var _0x5f188c, _0x2d74e1 = _0x3d31e6.default(idxDeleted); !(_0x416f9c = (_0x5f188c = _0x2d74e1['next']())['done']); _0x416f9c = !0x0) {
                                            var _0x56b995 = _0x5f188c['value'];
                                            _commit(_0x4d9371['DELETE_SHELF_INDEX'], _0x56b995);
                                        }
                                    } catch (err) {
                                        hasError = true
                                        errObj = err;
                                    } finally {
                                        try {
                                            !_0x416f9c && _0x2d74e1['return'] && _0x2d74e1['return']();
                                        } finally {
                                            if (hasError)
                                                throw errObj;
                                        }
                                    }
                                }
                                _0x3fa3be('fetchShelfLoadMore', booksAndArchives.length)
                                _commit(_0x4d9371['UPDATE_SHELF_LOAD_MORE'], {
                                    'booksAndArchives': booksAndArchives,
                                    'archives': archives
                                })
                                _commit(_0x4d9371['UPDATE_SHELF_LOADING_MORE'], false)
                            }, (err) => {
                                _0x3fa3be('Error in fetchShelfLoadMore', err)
                                _commit(_0x4d9371['UPDATE_SHELF_LOADING_MORE'], false)
                            })
                        }
                    })
                    _0x1fda8e.default(actions, 'fetchShelfArchiveLoadMore', function (context, payload) {
                        let _commit = context['commit'],
                            _state = context['state'],
                            currentArchiveId = _0x143d12.get(payload, 'currentArchiveId', 0),
                            count = _0x143d12.get(payload, 'count', 0),
                            _0x17dd79 = _0x143d12.find(_state.shelfIndexes, {
                                'archiveId': currentArchiveId
                            });

                        if (_0x17dd79) {
                            const bookIds = _0x226f29.default.archiveLoadMorePayloadHelper(_0x17dd79, count);
                            if (0 !== bookIds.length) {
                                _commit(_0x4d9371['UPDATE_SHELF_LOADING_MORE'], true)
                                return _0x3941cf.default('/web/shelf/syncBook', _0x430d19.default({
                                    'bookIds': bookIds
                                }, payload), (resp) => {
                                    let books = _0x143d12.get(resp, 'data.books', []),
                                        emptyInfoIds = _0x143d12.get(resp, 'data.emptyInfoIds', []).map((_) => _.bookId);

                                    _0x3fa3be('emptyInfoIds', emptyInfoIds)
                                    _commit(_0x4d9371['UPDATE_SHELF'], books)

                                    let _0x868193 = _0x226f29.default.archiveLoadMoreMergeHelper(_0x17dd79, books, emptyInfoIds);
                                    _commit(_0x4d9371['UPDATE_SHELF_ARCHIVE_LOAD_MORE'], _0x868193)
                                    _commit(_0x4d9371['UPDATE_SHELF_LOADING_MORE'], false)
                                }, (err) => {
                                    _0x3fa3be('Error in fetchShelfArchiveLoadMore', err)
                                    _commit(_0x4d9371['UPDATE_SHELF_LOADING_MORE'], false)
                                })
                            }
                            _0x3fa3be('Error in fetchShelfArchiveLoadMore: bookIdsToFetch.length=0')
                        } else {
                            _0x3fa3be('Error in fetchShelfArchiveLoadMore: archiveId=' + currentArchiveId + ' not found')
                        }
                    })

                    return {
                        'state': {
                            'miniShelf': [],
                            'archive': [],
                            'books': [],
                            'uploadCount': 0,
                            'bookProgress': [],
                            'balanceIOS': 0,
                            'balanceAndroid': 0,
                            'memberCardSummary': {},
                            'booksAndArchives': [],
                            'rawBooks': [],
                            'loadingMore': false,
                            'rawIndexes': [],
                            'shelfIndexes': [],
                            'updatedBooks': []
                        },
                        'getters': {
                            'isLoading': function (state) {
                                return state.loadingMore
                            },
                            'hasMore': function (state) {
                                return state.booksAndArchives.length < state.shelfIndexes.length
                            }
                        },
                        'mutations': mutations,
                        'actions': actions,
                    };
                }
            },
        }
    ]
);
