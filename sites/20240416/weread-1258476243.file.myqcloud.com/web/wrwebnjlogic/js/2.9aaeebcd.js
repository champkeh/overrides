var strings_2 = [
    "push",
    "newRating",
    "javascript:",
    "\n    ",
    "reading-count",
    "<span class=\"wr_bookList_item_reading_number\">",
    "span",
    "__esModule",
    "/web/book/publicinfos",
    "trim",
    "wr_readingCount",
    "default",
    "bookData",
    "commit",
    "data.succ",
    "type",
    "bookId",
    "customSelector",
    "bookInfo",
    "6106",
    "wr_bookList_item_readingText wr_bookList_item_readingCountText",
    "6103",
    "exports",
    "wr_bookList_item_title",
    "replaceBlankToSpace",
    "$createElement",
    "待评分",
    "unit",
    "div",
    "lectureInfo",
    "intro",
    "6307",
    "envConfig",
    "length",
    "canClickAuthor",
    "6102",
    "height",
    "fromWhere",
    "_self",
    "defineProperty",
    "title",
    "test",
    "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "book_rating_item_label_number",
    "[store/book-fetchBookInShelfForce] bookIds as Array is required",
    "saveReportInfo",
    "newRatingDetail",
    "bookAuthor",
    "wr_readingCount_icon",
    "readingCountText"
]

var _0x5c43 = function (idx) {
    return strings_2[idx - 0x0];
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push([
    [0x2],
    {
        1188: function (_0x2777fa, _0x48680e, _0x5ac148) {
            'use strict';
            _0x5ac148['r'](_0x48680e);
            var _0x1254a1 = _0x5ac148(0x4a5)
                , _0x481038 = _0x5ac148['n'](_0x1254a1);
            for (var _0x20178a in _0x1254a1)
                'default' !== _0x20178a && function (_0x1442eb) {
                    _0x5ac148['d'](_0x48680e, _0x1442eb, function () {
                        return _0x1254a1[_0x1442eb];
                    });
                }(_0x20178a);
            _0x48680e['default'] = _0x481038['a'];
        },
        1189: function (_0x2bbab0, _0x2de2a3, _0x52947b) {
            'use strict';
            Object[_0x5c43('0x27')](_0x2de2a3, '__esModule', {
                'value': !0x0
            });
            var _0xa9f1ad = _0x5a80c9(_0x52947b(0x13c))
                , _0x29883b = _0x5a80c9(_0x52947b(0x58))
                , _0x58d171 = _0x5a80c9(_0x52947b(0x360))
                , _0x2c4894 = _0x5a80c9(_0x52947b(0x59c))
                , _0x5b0549 = _0x5a80c9(_0x52947b(0x46))
                , _0x13a310 = _0x5a80c9(_0x52947b(0x47))
                , _0xefaa5a = _0x5a80c9(_0x52947b(0x48))
                , _0x8dd6a = _0x5a80c9(_0x52947b(0x49))
                , _0x79735f = _0x5a80c9(_0x52947b(0x13a));

            function _0x5a80c9(_0x38bcee) {
                return _0x38bcee && _0x38bcee['__esModule'] ? _0x38bcee : {
                    'default': _0x38bcee
                };
            }

            var _0x492808 = _0x52947b(0x75);
            _0x2de2a3['default'] = {
                'name': 'BookListItem.vue',
                'components': {
                    'BookCover': _0xa9f1ad['default'],
                    'BookRatingItemLabel': _0x58d171[_0x5c43('0xb')],
                    'ReadingCount': _0x2c4894[_0x5c43('0xb')]
                },
                'props': {
                    'fromWhere': '',
                    'extraData': {},
                    'showIndex': !0x1,
                    'showAddShelfButton': !0x1,
                    'bookIndex': Number,
                    'bookData': Object,
                    'bookInShelfObj': {
                        'type': Object,
                        'default': {}
                    },
                    'canClickAuthor': {
                        'type': Boolean,
                        'default': !0x0
                    }
                },
                'data': function () {
                    return {};
                },
                'computed': {
                    'maxIndex': function () {
                        return this['bookData']['searchIdx'] || 0x0;
                    },
                    'bookTitle': function () {
                        return this['bookData']['bookInfo'][_0x5c43('0x28')]['trim']();
                    },
                    'bookAuthor': function () {
                        return this['bookData']['bookInfo']['author'][_0x5c43('0x9')]();
                    },
                    'bookIntro': function () {
                        return this['bookData']['bestMark'] && this['bookData']['bestMark'][_0x5c43('0x21')] > 0x0 ? this['bookData']['bestMark'][_0x5c43('0x9')]() : this[_0x5c43('0xc')]['bookInfo'][_0x5c43('0x1e')]['trim']();
                    },
                    'newRating': function () {
                        return this['bookData']['bookInfo']['newRating'] && 0x0 !== this['bookData']['bookInfo'][_0x5c43('0x1')] ? (this['bookData']['bookInfo']['newRating'] / 0xa)['toFixed'](0x1) : 0x0;
                    },
                    'newRatingDetail': function () {
                        return this['bookData'][_0x5c43('0x12')] && this['bookData']['bookInfo']['newRatingDetail'] ? this['bookData']['bookInfo']['newRatingDetail'] : {};
                    },
                    'title': function () {
                        return this['newRatingDetail'] && this['newRatingDetail']['title'] ? this[_0x5c43('0x2e')]['title'] : '';
                    },
                    'shouldShowNewRatingLabel': function () {
                        return this['title'] && '待评分' !== this['title'] && '评分不足' !== this['title'];
                    },
                    'starScore': function () {
                        return this['bookData']['bookInfo']['star'] || 0x0;
                    },
                    'isAudioBook': function () {
                        return this['isAudioCategory'] || this['hasLectureInfo'];
                    },
                    'isAudioCategory': function () {
                        return this['extraData'] && -0x1 !== ['audio', 'audio_rising', 'audio_update', '402', '6100', _0x5c43('0x23'), _0x5c43('0x15'), '6104', '6105', _0x5c43('0x13'), '6107', '6108', '6200', '6302', '6303', '6304', '6305', '6306', _0x5c43('0x1f')]['indexOf'](this['extraData']['categoryId']);
                    },
                    'hasLectureInfo': function () {
                        return void 0x0 !== this['bookData'][_0x5c43('0x1d')];
                    },
                    'readingCountText': function () {
                        var _0x5488c4 = this['bookData']
                            , _0x59eddb = this['hasLectureInfo']
                            , _0x596790 = _0x59eddb ? _0x5488c4['listenCount'] : _0x5488c4['readingCount'];
                        if (_0x596790) {
                            var _0x16fae0 = _0x29883b['default']['formatNumber'](_0x596790);
                            return _0x5c43('0x5') + _0x16fae0['number'] + '</span>' + _0x16fae0['unit'] + (_0x59eddb ? '人今日收听' : '人今日阅读');
                        }
                        return '';
                    },
                    'isSupportBook': function () {
                        return _0x79735f['default']['isSupportedBookType'](this['bookData']['bookInfo'][_0x5c43('0xf')]);
                    },
                    'bookId': function () {
                        return this['bookData'] && this['bookData']['bookInfo'] && this['bookData']['bookInfo']['bookId'] ? this['bookData']['bookInfo'][_0x5c43('0x10')] : '';
                    },
                    'authorURL': function () {
                        if (!this[_0x5c43('0x2f')])
                            return '';
                        var _0x39d26b = '/web/search/books?author=' + encodeURIComponent(this['bookAuthor']);
                        return this['bookId'] && (_0x39d26b += '&ii=' + _0x492808['e'](this['bookId'])),
                            _0x39d26b;
                    }
                },
                'methods': {
                    'handleAddShelfButtonClick': function (_0x261ea1) {
                        this['$emit']('handleBookListItemAddShelfEvent', _0x261ea1);
                    },
                    'handleBookClick': function () {
                        'category' === this[_0x5c43('0x25')] && this[_0x5c43('0x2d')]('CategoryBook_Enter_Reader', {
                            'category': this['extraData'] ? this['extraData']['categoryId'] : ''
                        });
                        var _0x4fe7ae = this;
                        this['isAudioBook'] && (0x0,
                            _0x5b0549['default'])(function (_0x347eaa) {
                            _0x347eaa ? (0x0,
                                _0xefaa5a['default'])({
                                'openUrl': (0x0,
                                    _0x8dd6a['default'])('reading', {
                                    'bId': _0x4fe7ae['bookData']['bookInfo']['bookId'],
                                    'chapterUid': 0x1
                                })
                            }) : (0x0,
                                _0x13a310['default'])();
                        });
                    }
                }
            };
        },
        1190: function (_0x20d242, _0x58e871, _0xcb9600) {
            'use strict';
            _0xcb9600['r'](_0x58e871);
            var _0x40e7ae = _0xcb9600(0x4a7)
                , _0x2eb34a = _0xcb9600['n'](_0x40e7ae);
            for (var _0x2840ac in _0x40e7ae)
                'default' !== _0x2840ac && function (_0x5ac574) {
                    _0xcb9600['d'](_0x58e871, _0x5ac574, function () {
                        return _0x40e7ae[_0x5ac574];
                    });
                }(_0x2840ac);
            _0x58e871[_0x5c43('0xb')] = _0x2eb34a['a'];
        },
        1191: function (_0x1f163c, _0x4c3aef, _0x15900b) {
            'use strict';
            Object['defineProperty'](_0x4c3aef, _0x5c43('0x7'), {
                'value': !0x0
            });
            var _0x58428d, _0x9b662e = _0x15900b(0x605),
                _0x3b29bc = (_0x58428d = _0x9b662e) && _0x58428d['__esModule'] ? _0x58428d : {
                    'default': _0x58428d
                };
            _0x4c3aef['default'] = {
                'name': 'ReadingCount',
                'props': {
                    'readingCount': {
                        'type': Number,
                        'default': 0x0
                    },
                    'listenCount': {
                        'type': Number,
                        'default': 0x0
                    },
                    'customSelector': {
                        'type': String
                    }
                },
                'computed': {
                    'displayCount': function () {
                        if (this['listenCount']) {
                            var _0x13cf6b = (0x0,
                                _0x3b29bc['default'])(this['listenCount']);
                            return '' + _0x13cf6b['number'] + _0x13cf6b[_0x5c43('0x1b')];
                        }
                        if (this['readingCount']) {
                            var _0x12a0e4 = (0x0,
                                _0x3b29bc['default'])(this['readingCount']);
                            return '' + _0x12a0e4['number'] + _0x12a0e4['unit'];
                        }
                        return '';
                    }
                }
            };
        },
        1192: function (_0x2674f5, _0x4b379a, _0x223d7e) {
        },
        1193: function (_0x1cb2ab, _0xc8163d, _0x3bdc19) {
        },
        1435: function (_0x1b38c2, _0x1522b4, _0x1f2b28) {
            'use strict';
            _0x1f2b28['r'](_0x1522b4);
            var _0x5c3a08 = _0x1f2b28(0x7df)
                , _0x51bfa7 = _0x1f2b28(0x4a4);
            for (var _0x1b51ea in _0x51bfa7)
                'default' !== _0x1b51ea && function (_0x7d6e79) {
                    _0x1f2b28['d'](_0x1522b4, _0x7d6e79, function () {
                        return _0x51bfa7[_0x7d6e79];
                    });
                }(_0x1b51ea);
            _0x1f2b28(0x607);
            var _0x3431da = _0x1f2b28(0x1)
                ,
                _0x194bce = Object(_0x3431da['a'])(_0x51bfa7['default'], _0x5c3a08['a'], _0x5c3a08['b'], !0x1, null, null, null);
            _0x1522b4['default'] = _0x194bce['exports'];
        },
        1436: function (_0xffc19c, _0x2b4f63, _0x4ea7c3) {
            'use strict';
            _0x4ea7c3['r'](_0x2b4f63);
            var _0x550df0 = _0x4ea7c3(0x7fa)
                , _0x3598a5 = _0x4ea7c3(0x4a6);
            for (var _0x6ccfd2 in _0x3598a5)
                _0x5c43('0xb') !== _0x6ccfd2 && function (_0x378f8f) {
                    _0x4ea7c3['d'](_0x2b4f63, _0x378f8f, function () {
                        return _0x3598a5[_0x378f8f];
                    });
                }(_0x6ccfd2);
            _0x4ea7c3(0x606);
            var _0x3c7a96 = _0x4ea7c3(0x1)
                ,
                _0x501b3c = Object(_0x3c7a96['a'])(_0x3598a5['default'], _0x550df0['a'], _0x550df0['b'], !0x1, null, null, null);
            _0x2b4f63[_0x5c43('0xb')] = _0x501b3c[_0x5c43('0x16')];
        },
        1542: function (_0x5d6b83, _0x541d56, _0x40bc2a) {
            'use strict';
            var _0x28dc81 = _0x40bc2a(0x4a8);
            _0x40bc2a['n'](_0x28dc81)['a'];
        },
        1543: function (_0x6d61ea, _0x5a64ab, _0x115c31) {
            'use strict';
            var _0x469dc4 = _0x115c31(0x4a9);
            _0x115c31['n'](_0x469dc4)['a'];
        },
        2015: function (_0x3d5cf1, _0xea4b27, _0x54a59d) {
            'use strict';
            var _0x46213e = function () {
                var _0x3f6b9f = this
                    , _0x62aa14 = _0x3f6b9f['$createElement']
                    , _0x4b7828 = _0x3f6b9f['_self']['_c'] || _0x62aa14;
                return _0x4b7828('li', {
                    'staticClass': 'wr_bookList_item'
                }, [_0x4b7828('a', {
                    'staticClass': 'wr_bookList_item_link',
                    'attrs': {
                        'href': _0x3f6b9f['isAudioBook'] ? _0x5c43('0x2') : _0x3f6b9f['bookDetailURL'](_0x3f6b9f['bookId'])
                    },
                    'on': {
                        'click': _0x3f6b9f['handleBookClick']
                    }
                }), _0x4b7828('div', {
                    'staticClass': 'wr_bookList_item_container'
                }, [_0x3f6b9f['showIndex'] ? _0x4b7828('p', {
                    'staticClass': 'wr_bookList_item_index'
                }, [_0x3f6b9f['_v'](_0x3f6b9f['_s'](_0x3f6b9f['bookIndex'] + 0x1))]) : _0x3f6b9f['_e'](), _0x4b7828('BookCover', {
                    'attrs': {
                        'custom-selector': 'wr_bookList_item_cover',
                        'is-audio': _0x3f6b9f['isAudioBook'],
                        'src': _0x3f6b9f['bookData']['bookInfo']['cover'],
                        'needGradientDecor': !0x0
                    }
                }), _0x4b7828(_0x5c43('0x1c'), {
                    'staticClass': 'wr_bookList_item_info'
                }, [_0x4b7828('p', {
                    'staticClass': _0x5c43('0x17')
                }, [_0x3f6b9f['_v'](_0x3f6b9f['_s'](_0x3f6b9f['bookTitle']))]), _0x3f6b9f[_0x5c43('0x22')] && _0x3f6b9f['isSupportBook'] ? _0x4b7828('p', {
                    'staticClass': 'wr_bookList_item_author'
                }, [_0x4b7828('a', {
                    'attrs': {
                        'href': _0x3f6b9f['authorURL']
                    }
                }, [_0x3f6b9f['_v'](_0x3f6b9f['_s'](_0x3f6b9f['bookAuthor']))])]) : _0x4b7828('p', {
                    'staticClass': 'wr_bookList_item_author'
                }, [_0x3f6b9f['_v'](_0x3f6b9f['_s'](_0x3f6b9f['bookAuthor']))]), _0x3f6b9f['bookData']['readingCount'] > 0x0 || _0x3f6b9f['starScore'] > 0x0 ? _0x4b7828('p', {
                    'staticClass': 'wr_bookList_item_reading'
                }, [_0x3f6b9f['isAudioCategory'] ? _0x3f6b9f['_e']() : _0x4b7828(_0x5c43('0x6'), {
                    'staticClass': _0x5c43('0x14'),
                    'domProps': {
                        'innerHTML': _0x3f6b9f['_s'](_0x3f6b9f['readingCountText'])
                    }
                }), !_0x3f6b9f['isAudioCategory'] && _0x3f6b9f[_0x5c43('0x31')] && _0x3f6b9f['newRating'] ? _0x4b7828('span', {
                    'staticClass': 'wr_bookList_item_reading_dep'
                }) : _0x3f6b9f['_e'](), _0x3f6b9f['newRating'] ? _0x4b7828('span', {
                    'staticClass': 'wr_bookList_item_readingText'
                }, [_0x3f6b9f['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20推荐值\u00a0'), _0x4b7828('span', {
                    'staticClass': 'wr_bookList_item_reading_percent'
                }, [_0x3f6b9f['_v'](_0x3f6b9f['_s'](_0x3f6b9f['newRating']) + '%')])]) : _0x3f6b9f['_e'](), _0x3f6b9f['shouldShowNewRatingLabel'] ? _0x4b7828('book-rating-item-label', {
                    'attrs': {
                        'title': _0x3f6b9f['title'],
                        'rating': _0x3f6b9f['newRating'],
                        'type': 'listItem'
                    }
                }) : _0x3f6b9f['_e']()], 0x1) : _0x3f6b9f['_e'](), _0x4b7828('p', {
                    'staticClass': 'wr_bookList_item_desc'
                }, [_0x3f6b9f['_v'](_0x3f6b9f['_s'](_0x3f6b9f['bookIntro'] || '暂无简介'))])]), _0x3f6b9f['bookData']['listenCount'] || _0x3f6b9f['bookData']['readingCount'] ? _0x4b7828(_0x5c43('0x4'), {
                    'attrs': {
                        'listen-count': _0x3f6b9f['bookData']['listenCount'],
                        'reading-count': _0x3f6b9f['bookData']['readingCount']
                    }
                }) : _0x3f6b9f['_e']()], 0x1), _0x3f6b9f['showAddShelfButton'] ? _0x4b7828(_0x5c43('0x1c')) : _0x3f6b9f['_e']()]);
            }
                , _0x354b1f = [];
            _0x54a59d['d'](_0xea4b27, 'a', function () {
                return _0x46213e;
            }),
                _0x54a59d['d'](_0xea4b27, 'b', function () {
                    return _0x354b1f;
                });
        },
        2042: function (_0x1bd19e, _0x263dbe, _0x5dba94) {
            'use strict';
            var _0x5d3b5b = function () {
                var _0x231c9b = this
                    , _0x1a95c = _0x231c9b['$createElement']
                    , _0x3b6e8b = _0x231c9b[_0x5c43('0x26')]['_c'] || _0x1a95c;
                return _0x231c9b['displayCount'] ? _0x3b6e8b(_0x5c43('0x1c'), {
                    'class': [_0x5c43('0xa'), _0x231c9b[_0x5c43('0x11')]]
                }, [_0x3b6e8b('div', {
                    'staticClass': _0x5c43('0x30')
                }), _0x231c9b['_v']('\x0a\x20\x20\x20\x20' + _0x231c9b['_s'](_0x231c9b['displayCount']) + '\x0a')]) : _0x231c9b['_e']();
            }
                , _0x58c635 = [];
            _0x5dba94['d'](_0x263dbe, 'a', function () {
                return _0x5d3b5b;
            }),
                _0x5dba94['d'](_0x263dbe, 'b', function () {
                    return _0x58c635;
                });
        },
        827: function (_0x109949, _0x18a016, _0x16044b) {
            'use strict';
            _0x16044b['r'](_0x18a016);
            var _0x3563a6 = _0x16044b(0x33c)
                , _0x265885 = _0x16044b['n'](_0x3563a6);
            for (var _0x1d6a6a in _0x3563a6)
                'default' !== _0x1d6a6a && function (_0x1db356) {
                    _0x16044b['d'](_0x18a016, _0x1db356, function () {
                        return _0x3563a6[_0x1db356];
                    });
                }(_0x1d6a6a);
            _0x18a016['default'] = _0x265885['a'];
        },
        828: function (_0x5f4ca0, _0x20a774, _0x3d83a0) {
            'use strict';
            Object['defineProperty'](_0x20a774, '__esModule', {
                'value': !0x0
            });
            var _0x1d8b23 = {
                '烂书一本': '0',
                '不值一读': '400',
                '褒贬不一': '600',
                '值得一读': '700',
                '脍炙人口': '800',
                '好评如潮': '850',
                '神作潜力': '870',
                '神作': '900'
            };
            _0x20a774['default'] = {
                'props': {
                    'title': {
                        'type': String,
                        'required': !0x0
                    },
                    'rating': {
                        'type': String,
                        'required': !0x0
                    },
                    'type': {
                        'type': String,
                        'default': 'default',
                        'validator': function (_0x4ee370) {
                            return ['default', 'listItem']['indexOf'](_0x4ee370) > -0x1;
                        }
                    },
                    'height': {
                        'type': Number
                    }
                },
                'computed': {
                    'imageSvgUrl': function () {
                        var _0x4bf164 = _0x1d8b23[this['title']];
                        return _0x4bf164 ? 'https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_' + _0x4bf164 + '.png' : '';
                    },
                    'typeSelector': function () {
                        return 'listItem' === this['type'] ? 'book_rating_item_label_ListItem' : '';
                    }
                }
            };
        },
        829: function (_0x217e5, _0x1babef, _0xaaf153) {
        },
        830: function (_0x3b8c02, _0x4a0c1a, _0x4289f0) {
            'use strict';
            Object['defineProperty'](_0x4a0c1a, '__esModule', {
                'value': !0x0
            });
            var _0x4ca033 = _0x52001c(_0x4289f0(0x59))
                , _0x93f9b3 = _0x52001c(_0x4289f0(0x30))
                , _0x106a72 = _0x52001c(_0x4289f0(0x57));
            _0x4a0c1a['default'] = function () {
                var _0x3f3c1e;
                return {
                    'actions': (_0x3f3c1e = {},
                        (0x0,
                            _0x4ca033['default'])(_0x3f3c1e, _0x4cdc50['FETCH_BOOK_INFO'], function (_0x76f377, _0x11e35d) {
                            var _0x44441f = _0x11e35d['envConfig']
                                , _0x5d8ed7 = _0x11e35d['bookId']
                                , _0x17e68b = _0x11e35d['isLogin'];
                            return new _0x106a72['default'](function (_0x3e0f7b, _0xa74c46) {
                                    _0x5d8ed7 && (_0x17e68b ? (0x0,
                                        _0x3cba81[_0x5c43('0xb')])('/web/book/info', (0x0,
                                        _0x93f9b3['default'])({
                                        'bookId': _0x5d8ed7
                                    }, _0x44441f), function (_0x18f764) {
                                        var _0x35f42b = _0x18f764['data'] || {};
                                        _0x35f42b['intro'] && (_0x35f42b[_0x5c43('0x1e')] = _0xd763e[_0x5c43('0xb')]['replaceBlankToSpace'](_0x35f42b[_0x5c43('0x1e')])[_0x5c43('0x9')]()),
                                            _0x3e0f7b(_0x35f42b);
                                    }, function (_0x1d42b3) {
                                        _0xa74c46(_0x1d42b3);
                                    }) : (0x0,
                                        _0x3c522a[_0x5c43('0xb')])(_0x5c43('0x8'), (0x0,
                                        _0x93f9b3['default'])({
                                        'bookIds': [_0x5d8ed7]
                                    }, _0x44441f), function (_0x403189) {
                                        var _0x301837 = _0x1da4ad['get'](_0x403189, 'data.data', [])
                                            , _0x28a208 = _0x301837['length'] > 0x0 ? _0x301837[0x0] : {};
                                        _0x28a208['intro'] && (_0x28a208['intro'] = _0xd763e['default'][_0x5c43('0x18')](_0x28a208['intro'])[_0x5c43('0x9')]()),
                                            _0x3e0f7b(_0x28a208);
                                    }, function (_0x2cfce7) {
                                        _0xa74c46(_0x2cfce7);
                                    }));
                                }
                            );
                        }),
                        (0x0,
                            _0x4ca033['default'])(_0x3f3c1e, _0x4cdc50['FETCH_IN_SHELF'], function (_0x21469e, _0x19cb58) {
                            var _0x4d962e = _0x19cb58[_0x5c43('0x20')]
                                , _0x77b5f2 = _0x19cb58['bookIds'];
                            return new _0x106a72['default'](function (_0x24ab7f, _0x1decc6) {
                                    _0x77b5f2 ? (0x0,
                                        _0x3cba81['default'])('/web/shelf/bookIds', (0x0,
                                        _0x93f9b3['default'])({
                                        'bookIds': _0x77b5f2
                                    }, _0x4d962e), function (_0x4dea60) {
                                        var _0x3ff683 = _0x1da4ad['get'](_0x4dea60, 'data.data', []);
                                        _0x24ab7f(_0x3ff683);
                                    }, function (_0x578d6b) {
                                        _0x1decc6(new Error('[store/book-fetchBookInShelf]\x20err:' + _0x578d6b));
                                    }) : _0x1decc6(new Error('[store/book-fetchBookInShelf]\x20bookIds\x20is\x20required'));
                                }
                            );
                        }),
                        (0x0,
                            _0x4ca033['default'])(_0x3f3c1e, _0x4cdc50['FETCH_ADD_SHELF'], function (_0xbc81a6, _0x32e9cb) {
                            var _0x13f4d4 = _0x32e9cb[_0x5c43('0x20')]
                                , _0x14b3b1 = _0x32e9cb['bookIds'];
                            return new _0x106a72['default'](function (_0x414849, _0x1f943a) {
                                    if (_0x1da4ad['isArray'](_0x14b3b1))
                                        return (0x0,
                                            _0x3c522a['default'])('/mp/shelf/addToShelf', (0x0,
                                            _0x93f9b3['default'])({
                                            'bookIds': _0x14b3b1
                                        }, _0x13f4d4), function (_0x3142e2) {
                                            var _0x16d53e = _0x1da4ad['get'](_0x3142e2, 'data.succ', 0x0);
                                            _0x414849(0x1 === _0x16d53e);
                                        }, function (_0x171ef0) {
                                            -0x7d1 === _0x171ef0['errCode'] ? (_0xbc81a6[_0x5c43('0xd')](_0x542e53['UPDATE_SHELF_FULL_SHOWN'], !0x0),
                                                _0x414849(!0x1)) : _0x1f943a(new Error('[store/book-fetchBookInShelf]\x20err:' + _0x171ef0));
                                        });
                                    _0x1f943a(new Error('[store/book-fetchBookInShelf]\x20bookIds\x20as\x20Array\x20is\x20required'));
                                }
                            );
                        }),
                        (0x0,
                            _0x4ca033['default'])(_0x3f3c1e, _0x4cdc50['FETCH_ADD_SHELF_FORCE'], function (_0x53d887, _0x3d4f71) {
                            var _0x2535f5 = _0x3d4f71['bookIds'];
                            return new _0x106a72['default'](function (_0x37f16c, _0xba0036) {
                                    if (_0x1da4ad['isArray'](_0x2535f5))
                                        return (0x0,
                                            _0x3c522a['default'])('/web/shelf/add', {
                                            'bookIds': _0x2535f5
                                        }, function (_0x4d5b15) {
                                            var _0x2585fc = _0x1da4ad['get'](_0x4d5b15, _0x5c43('0xe'), 0x0);
                                            _0x37f16c(0x1 === _0x2585fc);
                                        }, function (_0xdc598b) {
                                            _0xba0036(new Error('[store/book-fetchBookInShelf]\x20err:' + _0xdc598b));
                                        });
                                    _0xba0036(new Error(_0x5c43('0x2c')));
                                }
                            );
                        }),
                        _0x3f3c1e)
                };
            }
            ;
            var _0x4cdc50 = _0x1143c9(_0x4289f0(0x43))
                , _0x542e53 = _0x1143c9(_0x4289f0(0x56))
                , _0x3cba81 = _0x52001c(_0x4289f0(0x72))
                , _0x3c522a = _0x52001c(_0x4289f0(0x45))
                , _0xd763e = _0x52001c(_0x4289f0(0x58));

            function _0x1143c9(_0x58e323) {
                if (_0x58e323 && _0x58e323['__esModule'])
                    return _0x58e323;
                var _0x37e5ea = {};
                if (null != _0x58e323)
                    for (var _0x109d02 in _0x58e323)
                        Object['prototype']['hasOwnProperty']['call'](_0x58e323, _0x109d02) && (_0x37e5ea[_0x109d02] = _0x58e323[_0x109d02]);
                return _0x37e5ea[_0x5c43('0xb')] = _0x58e323,
                    _0x37e5ea;
            }

            function _0x52001c(_0xb3768e) {
                return _0xb3768e && _0xb3768e['__esModule'] ? _0xb3768e : {
                    'default': _0xb3768e
                };
            }

            var _0x1da4ad = _0x4289f0(0x27);
        },
        864: function (_0x386232, _0xfddc08, _0x36486c) {
            'use strict';
            _0x36486c['r'](_0xfddc08);
            var _0x2a4aa8 = _0x36486c(0x3c0)
                , _0x13fc71 = _0x36486c(0x33b);
            for (var _0x1978f5 in _0x13fc71)
                'default' !== _0x1978f5 && function (_0x178092) {
                    _0x36486c['d'](_0xfddc08, _0x178092, function () {
                        return _0x13fc71[_0x178092];
                    });
                }(_0x1978f5);
            _0x36486c(0x366);
            var _0x2c5666 = _0x36486c(0x1)
                ,
                _0x2b4cea = Object(_0x2c5666['a'])(_0x13fc71['default'], _0x2a4aa8['a'], _0x2a4aa8['b'], !0x1, null, null, null);
            _0xfddc08[_0x5c43('0xb')] = _0x2b4cea['exports'];
        },
        870: function (_0x2f338c, _0x16c65a, _0x53a6bf) {
            'use strict';
            var _0x5ad407 = _0x53a6bf(0x33d);
            _0x53a6bf['n'](_0x5ad407)['a'];
        },
        960: function (_0x4a8e1a, _0x4964b3, _0x4a4b1d) {
            'use strict';
            var _0x390178 = function () {
                var _0x27a48b = this
                    , _0x33212b = _0x27a48b[_0x5c43('0x19')]
                    , _0x1ac880 = _0x27a48b['_self']['_c'] || _0x33212b;
                return _0x5c43('0x1a') === _0x27a48b['title'] ? _0x1ac880('span', {
                    'class': ['book_rating_item_label_text', _0x27a48b['typeSelector']]
                }, [_0x27a48b['_v']('\x0a\x20\x20\x20\x20待评分\x0a')]) : '评分不足' === _0x27a48b['title'] ? _0x1ac880('span', {
                    'class': ['book_rating_item_label_text', _0x27a48b['typeSelector']]
                }, [_0x27a48b['_v']('\x0a\x20\x20\x20\x20评分不足\x0a')]) : '' === _0x27a48b[_0x5c43('0x28')] ? _0x1ac880(_0x5c43('0x6'), {
                    'class': [_0x5c43('0x2b'), _0x27a48b['typeSelector']]
                }, [_0x27a48b['_v'](_0x5c43('0x3') + _0x27a48b['_s'](_0x27a48b['rating'])), _0x1ac880('span', {
                    'staticClass': 'book_rating_item_label_number_suffix'
                }, [_0x27a48b['_v']('%')])]) : _0x1ac880('img', {
                    'class': ['book_rating_item_label_number_image', _0x27a48b['typeSelector']],
                    'style': {
                        'height': _0x27a48b[_0x5c43('0x24')] + 'px'
                    },
                    'attrs': {
                        'src': _0x27a48b['imageSvgUrl']
                    }
                });
            }
                , _0x4f2396 = [];
            _0x4a4b1d['d'](_0x4964b3, 'a', function () {
                return _0x390178;
            }),
                _0x4a4b1d['d'](_0x4964b3, 'b', function () {
                    return _0x4f2396;
                });
        }
    }
])
