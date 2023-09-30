var strings_3 = [
    "bookData",
    "wr_readingCount",
    "[store/book-fetchBookInShelf] err:",
    "700",
    "call",
    "6102",
    "__esModule",
    "categoryId",
    "push",
    "_self",
    "newRating",
    "searchIdx",
    "FETCH_IN_SHELF",
    "constructor",
    "book-rating-item-label",
    "showAddShelfButton",
    "newRatingDetail",
    "stateObject",
    "wr_bookList_item_cover",
    "data.succ",
    "counter",
    "\n                        推荐值 ",
    "\n    待评分\n",
    "bookIds",
    "bookId",
    "trim",
    "bookDetailURL",
    "isAudioCategory",
    "wr_bookList_item_reading",
    "bookAuthor",
    "402",
    "6200",
    "toFixed",
    "900",
    "typeSelector",
    "bookInfo",
    "readingCountText",
    "wr_readingCount_icon",
    "lectureInfo",
    "number",
    "canClickAuthor",
    "default",
    "div",
    "$createElement",
    "starScore",
    "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "wr_bookList_item_index",
    "shouldShowNewRatingLabel",
    "envConfig",
    "评分不足",
    "unit",
    "imageSvgUrl",
    "暂无简介",
    "exports",
    "wr_bookList_item_readingText",
    "intro",
    "待评分",
    "book_rating_item_label_ListItem",
    "hasOwnProperty",
    "handleBookClick",
    "title",
    "data"
]

var _0x2335 = function (idx) {
    return strings_3[Number(idx)]
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push(
    [
        [3],
        {
            700: function (module, exports, require) {
                require['r'](exports);

                var _0x888cef = require(0x2bd),
                    _0x41747d = require['n'](_0x888cef);

                for (const key in _0x888cef) {
                    if ('default' !== key) {
                        require['d'](exports, key, function () {
                            return _0x888cef[key]
                        })
                    }
                }

                exports.default = _0x41747d['a']
            },

            // mixin
            701: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                const RatingMap = {
                    '烂书一本': '0',
                    '不值一读': '400',
                    '褒贬不一': '600',
                    '值得一读': '700',
                    '脍炙人口': '800',
                    '好评如潮': '850',
                    '神作潜力': '870',
                    '神作': '900'
                };

                exports.default = {
                    'props': {
                        'title': {
                            'type': String,
                            'required': true
                        },
                        'rating': {
                            'type': String,
                            'required': true
                        },
                        'type': {
                            'type': String,
                            'default': 'default',
                            'validator': function (val) {
                                return ['default', 'listItem'].indexOf(val) > -1;
                            }
                        },
                        'height': {
                            'type': Number
                        }
                    },
                    'computed': {
                        'imageSvgUrl': function () {
                            const val = RatingMap[this.title]
                            return val ? 'https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_' + val + '.png' : '';
                        },
                        'typeSelector': function () {
                            return 'listItem' === this.type ? 'book_rating_item_label_ListItem' : '';
                        }
                    }
                }
            },
            702: function (module, exports, require) {
            },

            // store
            703: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                const _0x175414 = _0x4ee252(require(0xc1)),
                    _0x484b89 = _0x4ee252(require(0x33)),
                    _0x4ecc6 = _0x4ee252(require(0x47)),
                    _0x823594 = _0x51c856(require(0x34)),
                    _0x26c801 = _0x51c856(require(0x46)),
                    _0x3db7b1 = _0x4ee252(require(0x5c)),
                    _0x6862a9 = _0x4ee252(require(0x35)),
                    _0x3c43c2 = _0x4ee252(require(0x48)),
                    _0x1202fe = require(0x1f);

                function _0x51c856(_0x2251c7) {
                    if (_0x2251c7 && _0x2251c7['__esModule'])
                        return _0x2251c7;
                    var _0x545908 = {};
                    if (null != _0x2251c7)
                        for (var _0x2a42ed in _0x2251c7)
                            Object['prototype'][_0x2335('0x3a')][_0x2335('0x4')](_0x2251c7, _0x2a42ed) && (_0x545908[_0x2a42ed] = _0x2251c7[_0x2a42ed]);
                    return _0x545908[_0x2335('0x29')] = _0x2251c7,
                        _0x545908;
                }
                function _0x4ee252(_0xc1cf4e) {
                    return _0xc1cf4e && _0xc1cf4e['__esModule'] ? _0xc1cf4e : {
                        'default': _0xc1cf4e
                    };
                }


                exports.default = function () {
                    const actions = {}

                    _0x175414.default(actions, _0x823594['FETCH_BOOK_INFO'], function (context, payload) {
                        const envConfig = payload.envConfig,
                            bookId = payload.bookId,
                            isLogin = payload.isLogin;

                        return new _0x4ecc6.default((resolve, reject) => {
                            if (bookId) {
                                if (isLogin) {
                                    _0x3db7b1.default('/web/book/info', _0x484b89.default({
                                        'bookId': bookId
                                    }, envConfig), resp => {
                                        const respData = resp.data || {}

                                        if (respData.intro) {
                                            respData.intro = _0x3c43c2.default.replaceBlankToSpace(respData.intro).trim()
                                        }
                                        resolve(respData)
                                    }, err => {
                                        reject(err)
                                    })
                                } else {
                                    _0x6862a9.default('/web/book/publicinfos', _0x484b89.default({
                                        'bookIds': [bookId]
                                    }, envConfig), resp => {
                                        const respData = _0x1202fe.get(resp, 'data.data', []),
                                            _0x297ed9 = respData.length > 0 ? respData[0] : {};

                                        if (_0x297ed9.intro) {
                                            _0x297ed9.intro = _0x3c43c2.default.replaceBlankToSpace(_0x297ed9.intro).trim()
                                        }
                                        resolve(_0x297ed9)
                                    }, err => {
                                        reject(err)
                                    })
                                }
                            }
                        })
                    })
                    _0x175414.default(actions, _0x823594['FETCH_IN_SHELF'], function (context, payload) {
                        const envConfig = payload.envConfig,
                            bookIds = payload.bookIds;

                        return new _0x4ecc6.default((resolve, reject) => {
                            if (bookIds) {
                                _0x3db7b1.default('/web/shelf/bookIds', _0x484b89.default({
                                    'bookIds': bookIds
                                }, envConfig), resp => {
                                    const respData = _0x1202fe.get(resp, 'data.data', [])
                                    resolve(respData)
                                }, err => {
                                    reject(new Error('[store/book-fetchBookInShelf] err:' + err))
                                })
                            } else {
                                reject(new Error('[store/book-fetchBookInShelf] bookIds is required'))
                            }
                        })
                    })
                    _0x175414.default(actions, _0x823594['FETCH_ADD_SHELF'], function (context, payload) {
                        const envConfig = payload.envConfig,
                            bookIds = payload.bookIds;

                        return new _0x4ecc6.default((resolve, reject) => {
                            if (_0x1202fe.isArray(bookIds)) {
                                return _0x6862a9.default('/mp/shelf/addToShelf', _0x484b89.default({
                                    'bookIds': bookIds
                                }, envConfig), resp => {
                                    const isSucc = _0x1202fe.get(resp, 'data.succ', 0)
                                    resolve(1 === isSucc)
                                }, err => {
                                    if (-2001 === err.errCode) {
                                        context.commit(_0x26c801['UPDATE_SHELF_FULL_SHOWN'], true)
                                        resolve(false)
                                    } else {
                                        reject(new Error('[store/book-fetchBookInShelf] err:' + err))
                                    }
                                })
                            }
                            reject(new Error('[store/book-fetchBookInShelf] bookIds as Array is required'))
                        })
                    })
                    _0x175414.default(actions, _0x823594['FETCH_ADD_SHELF_FORCE'], function (context, payload) {
                        const envConfig = payload.envConfig,
                            bookIds = payload.bookIds;

                        return new _0x4ecc6.default((resolve, reject) => {
                            if (_0x1202fe.isArray(bookIds)) {
                                return _0x6862a9.default('/web/shelf/add', _0x484b89.default({
                                    'bookIds': bookIds
                                }, envConfig), resp => {
                                    const isSucc = _0x1202fe.get(resp, 'data.succ', 0)
                                    resolve(1 === isSucc)
                                }, err => {
                                    reject(new Error('[store/book-fetchBookInShelf] err:' + err))
                                })
                            }
                            reject(new Error('[store/book-fetchBookInShelfForce] bookIds as Array is required'))
                        })
                    })

                    return {
                        'actions': actions
                    }
                }
            },
            742: function (module, exports, require) {
                require['r'](exports)

                const _0x52a199 = require(0x34f),
                    _0x5061a0 = require(0x2bc);

                for (const key in _0x5061a0) {
                    if ('default' !== key) {
                        require['d'](exports, key, function () {
                            return _0x5061a0[key]
                        })
                    }
                }
                require(0x2ef);

                const _0x22d7b2 = require(0x1),
                    _0x50c75c = Object(_0x22d7b2['a'])(_0x5061a0.default, _0x52a199['a'], _0x52a199['b'], false, null, null, null)

                exports.default = _0x50c75c.exports
            },
            751: function (module, exports, require) {
                const _0x4f11b9 = require(0x2be);
                require['n'](_0x4f11b9)['a']
            },
            847: function (module, exports, require) {
                const a = function () {
                        const _this = this,
                            _0x18c804 = _this.$createElement,
                            h = _this._self['_c'] || _0x18c804;

                        return '待评分' === _this.title
                            ? h('span', {
                                'class': ['book_rating_item_label_text', _this.typeSelector]
                            }, [_this._v('\n    待评分\n')])
                            : '评分不足' === _this.title
                                ? h('span', {
                                    'class': ['book_rating_item_label_text', _this.typeSelector]
                                }, [_this._v('\n    评分不足\n')])
                                : '' === _this.title
                                    ? h('span', {
                                        'class': ['book_rating_item_label_number', _this.typeSelector]
                                    }, [
                                        _this._v('\n    ' + _this._s(_this.rating)),
                                        h('span', {
                                            'staticClass': 'book_rating_item_label_number_suffix'
                                        }, [_this._v('%')])
                                    ])
                                    : h('img', {
                                        'class': ['book_rating_item_label_number_image', _this.typeSelector],
                                        'style': {
                                            'height': _this.height + 'px'
                                        },
                                        'attrs': {
                                            'src': _this.imageSvgUrl
                                        }
                                    })
                    },
                    b = [];

                require['d'](exports, 'a', function () {
                    return a
                })
                require['d'](exports, 'b', function () {
                    return b
                })
            },
            1079: function (module, exports, require) {
                require['r'](exports);

                const _0x26ce8e = require(0x438),
                    _0x287109 = require['n'](_0x26ce8e);

                for (const key in _0x26ce8e) {
                    if ('default' !== key) {
                        require['d'](exports, key, function () {
                            return _0x26ce8e[key];
                        })
                    }
                }

                exports.default = _0x287109['a']
            },
            // BookListItem.vue
            1080: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                const _0x3455f6 = _0x4677d7(require(0x110)),
                    _0x5d0264 = _0x4677d7(require(0x48)),
                    _0x337c4d = _0x4677d7(require(0x2e6)),
                    _0x2ad61b = _0x4677d7(require(0x52d)),
                    _0x2b0d19 = _0x4677d7(require(0x38)),
                    _0x29e69d = _0x4677d7(require(0x39)),
                    _0x47e1c4 = _0x4677d7(require(0x3a)),
                    _0x1bc8f7 = _0x4677d7(require(0x3b)),
                    _0x3468b2 = _0x4677d7(require(0x10e)),
                    _0x50e5a2 = require(0x5f);

                function _0x4677d7(_0x823001) {
                    return _0x823001 && _0x823001['__esModule'] ? _0x823001 : {
                        'default': _0x823001
                    };
                }


                exports.default = {
                    'name': 'BookListItem.vue',
                    'components': {
                        'BookCover': _0x3455f6.default,
                        'BookRatingItemLabel': _0x337c4d.default,
                        'ReadingCount': _0x2ad61b.default
                    },
                    'props': {
                        'fromWhere': '',
                        'extraData': {},
                        'showIndex': false,
                        'showAddShelfButton': false,
                        'bookIndex': Number,
                        'bookData': Object,
                        'bookInShelfObj': {
                            'type': Object,
                            'default': {}
                        },
                        'canClickAuthor': {
                            'type': Boolean,
                            'default': true
                        }
                    },
                    'data': function () {
                        return {}
                    },
                    'computed': {
                        'maxIndex': function () {
                            return this.bookData.searchIdx || 0
                        },
                        'bookTitle': function () {
                            return this.bookData.bookInfo.title.trim()
                        },
                        'bookAuthor': function () {
                            return this.bookData.bookInfo.author.trim()
                        },
                        'bookIntro': function () {
                            return this.bookData.bestMark && this.bookData.bestMark.length > 0
                                ? this.bookData.bestMark.trim()
                                : this.bookData.bookInfo.intro.trim()
                        },
                        'newRating': function () {
                            return this.bookData.bookInfo.newRating && 0 !== this.bookData.bookInfo.newRating
                                ? (this.bookData.bookInfo.newRating / 10).toFixed(1)
                                : 0
                        },
                        'newRatingDetail': function () {
                            return this.bookData.bookInfo && this.bookData.bookInfo.newRatingDetail
                                ? this.bookData.bookInfo.newRatingDetail
                                : {}
                        },
                        'title': function () {
                            return this.newRatingDetail && this.newRatingDetail.title
                                ? this.newRatingDetail.title
                                : ''
                        },
                        'shouldShowNewRatingLabel': function () {
                            return this.title && '待评分' !== this.title && '评分不足' !== this.title
                        },
                        'starScore': function () {
                            return this.bookData.bookInfo.star || 0
                        },
                        'isAudioBook': function () {
                            return this.isAudioCategory || this.hasLectureInfo
                        },
                        'isAudioCategory': function () {
                            return this.extraData && -1 !== [
                                'audio',
                                'audio_rising',
                                'audio_update',
                                '402',
                                '6100',
                                '6102',
                                '6103',
                                '6104',
                                '6105',
                                '6106',
                                '6107',
                                '6108',
                                '6200',
                                '6302',
                                '6303',
                                '6304',
                                '6305',
                                '6306',
                                '6307'
                            ].indexOf(this.extraData.categoryId)
                        },
                        'hasLectureInfo': function () {
                            return undefined !== this.bookData.lectureInfo
                        },
                        'readingCountText': function () {
                            const bookData = this.bookData,
                                hasLectureInfo = this.hasLectureInfo,
                                count = hasLectureInfo ? bookData.listenCount : bookData.readingCount

                            if (count) {
                                const _0x292ab9 = _0x5d0264.default.formatNumber(count)
                                return '<span class="wr_bookList_item_reading_number">' + _0x292ab9.number + '</span>' + _0x292ab9.unit + (hasLectureInfo ? '人今日收听' : '人今日阅读')
                            }
                            return ''
                        },
                        'isSupportBook': function () {
                            return _0x3468b2.default.isSupportedBookType(this.bookData.bookInfo.type)
                        },
                        'bookId': function () {
                            return this.bookData && this.bookData.bookInfo && this.bookData.bookInfo.bookId
                                ? this.bookData.bookInfo.bookId
                                : ''
                        },
                        'authorURL': function () {
                            if (!this.bookAuthor) {
                                return ''
                            }

                            let url = '/web/search/books?author=' + encodeURIComponent(this.bookAuthor)
                            if (this.bookId) {
                                url += '&ii=' + _0x50e5a2['e'](this.bookId)
                            }
                            return url
                        }
                    },
                    'methods': {
                        'handleAddShelfButtonClick': function (_0x437c62) {
                            this.$emit('handleBookListItemAddShelfEvent', _0x437c62)
                        },
                        'handleBookClick': function () {
                            if ('category' === this.fromWhere) {
                                this.saveReportInfo('CategoryBook_Enter_Reader', {
                                    'category': this.extraData ? this.extraData.categoryId : ''
                                })
                            }
                            if (this.isAudioBook) {
                                _0x2b0d19.default((_0x419bdb) => {
                                    _0x419bdb
                                        ? _0x47e1c4.default({
                                            'openUrl': _0x1bc8f7.default('reading', {
                                                'bId': this.bookData.bookInfo.bookId,
                                                'chapterUid': 1
                                            })
                                        })
                                        : _0x29e69d.default()
                                })
                            }
                        }
                    }
                }
            },
            1081: function (module, exports, require) {
                require['r'](exports);

                const _0x1a7585 = require(0x43a),
                    _0x1f1c3f = require['n'](_0x1a7585);

                for (const key in _0x1a7585) {
                    if ('default' !== key) {
                        require['d'](exports, key, function () {
                            return _0x1a7585[key];
                        })
                    }
                }

                exports.default = _0x1f1c3f['a']
            },
            // ReadingCount.vue
            1082: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                let _0x45713e,
                    _0x4d27b4 = require(0x5a4),
                    _0x48ad9d = (_0x45713e = _0x4d27b4) && _0x45713e.__esModule ? _0x45713e : {
                        'default': _0x45713e
                    };

                exports.default = {
                    'name': 'ReadingCount',
                    'props': {
                        'readingCount': {
                            'type': Number,
                            'default': 0
                        },
                        'listenCount': {
                            'type': Number,
                            'default': 0
                        },
                        'customSelector': {
                            'type': String
                        }
                    },
                    'computed': {
                        'displayCount': function () {
                            if (this.listenCount) {
                                const _0x5b566c = _0x48ad9d.default(this.listenCount)
                                return '' + _0x5b566c.number + _0x5b566c.unit;
                            }
                            if (this.readingCount) {
                                const _0xf0292 = _0x48ad9d.default(this.readingCount)
                                return '' + _0xf0292.number + _0xf0292.unit
                            }
                            return '';
                        }
                    }
                };
            },
            1083: function (module, exports, require) {
            },
            1084: function (module, exports, require) {
            },
            1324: function (module, exports, require) {
                require['r'](exports);

                const _0x3eeaaf = require(0x7b2),
                    _0x3d811b = require(0x437);

                for (const key in _0x3d811b) {
                    if ('default' !== key) {
                        require['d'](exports, key, function () {
                            return _0x3d811b[key];
                        })
                    }
                }

                require(0x5a6);

                const _0x30ea58 = require(0x1),
                    _0x53f449 = Object(_0x30ea58['a'])(_0x3d811b.default, _0x3eeaaf['a'], _0x3eeaaf['b'], false, null, null, null)

                exports.default = _0x53f449.exports
            },
            1325: function (module, exports, require) {
                require['r'](exports)

                const _0x7a22de = require(0x7c9),
                    _0x5e3047 = require(0x439);

                for (const key in _0x5e3047) {
                    if ('default' !== key) {
                        require['d'](exports, key, function () {
                            return _0x5e3047[key];
                        })
                    }
                }

                require(0x5a5);

                const _0x6df749 = require(0x1),
                    _0x2d41bf = Object(_0x6df749['a'])(_0x5e3047.default, _0x7a22de['a'], _0x7a22de['b'], false, null, null, null)

                exports.default = _0x2d41bf.exports
            },
            1445: function (module, exports, require) {
                const _0x95bb01 = require(0x43b);

                require['n'](_0x95bb01)['a'];
            },
            1446: function (module, exports, require) {
                const _0xefbfb8 = require(0x43c);

                require['n'](_0xefbfb8)['a'];
            },
            1970: function (module, exports, require) {
                const a = function () {
                        const _this = this,
                            _0x1b39c2 = _this['$createElement'],
                            h = _this['_self']['_c'] || _0x1b39c2;

                        return h('li', {
                            'staticClass': 'wr_bookList_item'
                        }, [
                            h('a', {
                                'staticClass': 'wr_bookList_item_link',
                                'attrs': {
                                    'href': _this.isAudioBook ? 'javascript:' : _this.bookDetailURL(_this.bookId)
                                },
                                'on': {
                                    'click': _this.handleBookClick
                                }
                            }),
                            h('div', {
                                'staticClass': 'wr_bookList_item_container'
                            }, [
                                _this.showIndex
                                    ? h('p', {
                                        'staticClass': 'wr_bookList_item_index'
                                    }, [_this._v(_this._s(_this.bookIndex + 1))])
                                    : _this._e(),
                                h('BookCover', {
                                    'attrs': {
                                        'custom-selector': 'wr_bookList_item_cover',
                                        'is-audio': _this.isAudioBook,
                                        'src': _this.bookData.bookInfo.cover,
                                        'needGradientDecor': true
                                    }
                                }),
                                h('div', {
                                    'staticClass': 'wr_bookList_item_info'
                                }, [
                                    h('p', {
                                        'staticClass': 'wr_bookList_item_title'
                                    }, [_this._v(_this._s(_this.bookTitle))]),
                                    _this.canClickAuthor && _this.isSupportBook
                                        ? h('p', {
                                            'staticClass': 'wr_bookList_item_author'
                                        }, [
                                            h('a', {
                                                'attrs': {
                                                    'href': _this.authorURL
                                                }
                                            }, [_this._v(_this._s(_this.bookAuthor))])
                                        ])
                                        : h('p', {
                                            'staticClass': 'wr_bookList_item_author'
                                        }, [_this._v(_this._s(_this.bookAuthor))]),
                                    _this.bookData.readingCount > 0 || _this.starScore > 0
                                        ? h('p', {
                                            'staticClass': 'wr_bookList_item_reading'
                                        }, [
                                            _this.isAudioCategory
                                                ? _this._e()
                                                : h('span', {
                                                    'staticClass': 'wr_bookList_item_readingText wr_bookList_item_readingCountText',
                                                    'domProps': {
                                                        'innerHTML': _this._s(_this.readingCountText)
                                                    }
                                                }),
                                            !_this.isAudioCategory && _this.readingCountText && _this.newRating
                                                ? h('span', {
                                                    'staticClass': 'wr_bookList_item_reading_dep'
                                                })
                                                : _this._e(),
                                            _this.newRating
                                                ? h('span', {
                                                    'staticClass': 'wr_bookList_item_readingText'
                                                }, [
                                                    _this._v('\n                        推荐值 '),
                                                    h('span', {
                                                        'staticClass': 'wr_bookList_item_reading_percent'
                                                    }, [_this._v(_this._s(_this.newRating) + '%')])
                                                ])
                                                : _this._e(),
                                            _this.shouldShowNewRatingLabel
                                                ? h('book-rating-item-label', {
                                                    'attrs': {
                                                        'title': _this.title,
                                                        'rating': _this.newRating,
                                                        'type': 'listItem'
                                                    }
                                                })
                                                : _this._e()
                                        ], 1)
                                        : _this._e(),
                                    h('p', {
                                        'staticClass': 'wr_bookList_item_desc'
                                    }, [_this._v(_this._s(_this.bookIntro || '暂无简介'))])
                                ]),
                                _this.bookData.listenCount || _this.bookData.readingCount
                                    ? h('reading-count', {
                                        'attrs': {
                                            'listen-count': _this.bookData.listenCount,
                                            'reading-count': _this.bookData.readingCount
                                        }
                                    })
                                    : _this._e()
                            ], 1),
                            _this.showAddShelfButton ? h('div') : _this._e()
                        ])
                    },
                    b = [];

                require['d'](exports, 'a', function () {
                    return a;
                })
                require['d'](exports, 'b', function () {
                    return b;
                })
            },
            1993: function (module, exports, require) {
                const a = function () {
                        const _this = this,
                            _0x2ef46b = _this.$createElement,
                            h = _this['_self']['_c'] || _0x2ef46b;

                        return _this.displayCount
                            ? h('div', {
                                'class': ['wr_readingCount', _this.customSelector]
                            }, [
                                h('div', {
                                    'staticClass': 'wr_readingCount_icon'
                                }),
                                _this._v('\n    ' + _this._s(_this.displayCount) + '\n')
                            ])
                            : _this._e()
                    },
                    b = [];

                require['d'](exports, 'a', function () {
                    return a;
                })
                require['d'](exports, 'b', function () {
                    return b;
                })
            },
        }
    ]
)
