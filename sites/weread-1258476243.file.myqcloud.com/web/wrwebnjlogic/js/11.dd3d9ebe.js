var strings_11 = [
    "Web_Shelf_DownloadExp",
    "call",
    "accountDetail",
    "dispatch",
    "isArchive",
    "is missing",
    "javascript:;",
    "bookId",
    "0.4",
    "shelf",
    "shelfBook",
    "剩余 ",
    "user",
    "prev",
    "UPDATE_SHOW_NAV_BAR",
    "isTrial",
    "infoString",
    "cover",
    "book",
    "thisArchiveHasMore",
    "FETCH_SHELF_UPDATED_BOOKS",
    "indexOf",
    "ArchiveId: ",
    "div",
    "handleClick",
    "Web_Shelf_EnterFromMe",
    "checkMissingBook done",
    "archive",
    "Index_Shelf",
    "filter",
    "role",
    "handleElementScrollEvent",
    "next",
    "booksAndArchives",
    "inDevelopment",
    "books",
    "updateEmptyViewState",
    "reportClientBusiness",
    "secret",
    "#app",
    "$store",
    "params",
    "isAudio",
    "default",
    "$toast",
    "length",
    "FETCH_SHELF_ARCHIVE_LOAD_MORE",
    "shelf_title",
    "log",
    "currentArchive",
    "info",
    "$showDownloadAppDialog",
    "我的书架",
    "会员卡",
    "balanceAndroid",
    "shelf_debugger",
    "Web_Shelf_EnterFromGlobalTabBar",
    "__esModule",
    "includes",
    "span",
    "isCopyRightForbiddenRead",
    "expiredTime",
    "currentArchiveId",
    "loaded",
    "allBooks",
    "$createElement",
    "get",
    "shelf-book",
    "registerModule",
    "add",
    "end",
    "mapState",
    "vid",
    "commit",
    "name",
    "Web_Shelf_EnterFromHome",
    "检查书架缺失书籍",
    " · ",
    "classList",
    "网页版暂不支持公众号",
    "hasMore",
    "archiveId"
]

var _0x2bf0 = function (idx) {
    return strings_11[Number(idx)]
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push(
    [
        [11],
        {
            402: function (_0x4503e4, _0x279c2c, _0x4c7727) {
                'use strict';
                _0x4c7727['r'](_0x279c2c);
                var _0x19bfe8 = _0x4c7727(0x79d)
                    , _0x484608 = _0x4c7727(0x42c);
                for (var _0x446ea0 in _0x484608)
                    'default' !== _0x446ea0 && function (_0x269b5f) {
                        _0x4c7727['d'](_0x279c2c, _0x269b5f, function () {
                            return _0x484608[_0x269b5f];
                        });
                    }(_0x446ea0);
                _0x4c7727(0x5a2);
                var _0x28dfe7 = _0x4c7727(0x1)
                    ,
                    _0x103ba6 = Object(_0x28dfe7['a'])(_0x484608['default'], _0x19bfe8['a'], _0x19bfe8['b'], !0x1, null, null, null);
                _0x279c2c['default'] = _0x103ba6['exports'];
            },
            1068: function (_0x35d006, _0xef744c, _0x444375) {
                'use strict';
                _0x444375['r'](_0xef744c);
                var _0x131847 = _0x444375(0x42d)
                    , _0xcacecd = _0x444375['n'](_0x131847);
                for (var _0xe20a9a in _0x131847)
                    'default' !== _0xe20a9a && function (_0x4c1aca) {
                        _0x444375['d'](_0xef744c, _0x4c1aca, function () {
                            return _0x131847[_0x4c1aca];
                        });
                    }(_0xe20a9a);
                _0xef744c[_0x2bf0('0x2b')] = _0xcacecd['a'];
            },

            // shelf.vue
            1069: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {
                    'value': !0x0
                })

                let _0x49ec = _0x5c0362(require(0x16d)),
                    _0x23110c = _0x5c0362(require(0x16e)),
                    _0x427849 = _0x5c0362(require(0x16c)),
                    _0x11ad95 = _0x5c0362(require(0x33)),
                    _0x1025a1 = _0x5c0362(require(0x59e)),
                    _0x5d2cc9 = _0x5c0362(require(0x5a0)),
                    _0x39571e = _0x5c0362(require(0x408)),
                    _0x39eac0 = _0x5c7334(require(0x34)),
                    _0x44a219 = _0x5c0362(require(0x16)),
                    _0x2b42f4 = _0x5c7334(require(0x46)),
                    _0x57ba73 = require(0x36),
                    _0x3e35aa = _0x5c0362(require(0x5d)),
                    _0x4c0539 = _0x5c0362(require(0x48));

                function _0x5c7334(_0xa2f01f) {
                    if (_0xa2f01f && _0xa2f01f['__esModule'])
                        return _0xa2f01f;
                    var _0x2a8844 = {};
                    if (null != _0xa2f01f)
                        for (var _0x4a4634 in _0xa2f01f)
                            Object['prototype']['hasOwnProperty']['call'](_0xa2f01f, _0x4a4634) && (_0x2a8844[_0x4a4634] = _0xa2f01f[_0x4a4634]);
                    return _0x2a8844['default'] = _0xa2f01f,
                        _0x2a8844;
                }

                function _0x5c0362(_0x1ad63d) {
                    return _0x1ad63d && _0x1ad63d['__esModule'] ? _0x1ad63d : {
                        'default': _0x1ad63d
                    };
                }

                let _0x5f5b06,
                    _0x5db573 = require(0x8),
                    _0x78032d = require(0x1f);

                exports.default = {
                    'name': 'shelf',
                    'components': {
                        'ShelfArchive': _0x5d2cc9.default,
                        'ShelfBook': _0x1025a1.default,
                        'Loading': _0x3e35aa.default
                    },
                    'data': function () {
                        return {};
                    },
                    'watch': {
                        'books': function () {
                            this.updateEmptyViewState()
                        },
                        'isArchive': function () {
                            if (!this.isArchive) {
                                this.$store.dispatch(_0x39eac0['FETCH_SHELF_LOAD_MORE'], {
                                    'count': 50,
                                    'isArchive': this.isArchive
                                })
                            }
                        },
                        'currentArchiveId': function () {
                            if (this.currentArchiveId) {
                                console.log('currentArchiveId', this.currentArchiveId)

                                if (this.currentArchive && this.currentArchive.loaded.length < this.currentArchive.allBooks.length) {
                                    this.$store.dispatch(_0x39eac0['FETCH_SHELF_ARCHIVE_LOAD_MORE'], {
                                        'count': 50,
                                        'isArchive': this.isArchive,
                                        'currentArchiveId': this.currentArchiveId
                                    })
                                }
                            }
                        }
                    },
                    'computed': _0x11ad95.default({},
                        _0x57ba73.mapState({
                            'books': function (state) {
                                return state.shelf && state.shelf.books || []
                            },
                            'archives': function (state) {
                                return state.shelf.archive || []
                            },
                            'booksAndArchives': function (state) {
                                return state.shelf && state.shelf.booksAndArchives || []
                            },
                            'balanceIOS': function (state) {
                                return state.shelf.balanceIOS
                            },
                            'balanceAndroid': function (state) {
                                return state.shelf.balanceAndroid
                            },
                            'memberCardSummary': function (state) {
                                return state.shelf.memberCardSummary
                            }
                        }),
                        _0x57ba73.mapGetters(['hasMore']), {
                            'archiveList': function () {
                                return this.archives.map(_ => _.archiveId)
                            },
                            'currentArchiveId': function () {
                                return Number(this.$route.params.archiveId) || null
                            },
                            'isArchive': function () {
                                return this.currentArchiveId && this.archiveList.includes(this.currentArchiveId)
                            },
                            'currentArchive': function () {
                                var _this = this,
                                    _0x5060a6 = this.archives.filter(archive => {
                                        return 'archive' === archive.role && archive.archiveId === _this.currentArchiveId
                                    })
                                return _0x5060a6.length ? _0x5060a6[0] : null
                            },
                            'shelfTitle': function () {
                                return this.isArchive && this.user && this.user.name
                                    ? this.user.name + ' - ' + this.currentArchive.name
                                    : this.user && this.user.name
                                        ? this.user.name
                                        : '我的书架'
                            },
                            'accountDetail': function () {
                                return [this.balanceString, this.memberShipString].filter(_0x13961e => _0x13961e).join(' · ')
                            },
                            'balanceString': function () {
                                const balanceIOS = this.balanceIOS,
                                    balanceAndroid = this.balanceAndroid,
                                    balance = Math.max(balanceIOS, balanceAndroid);

                                return balance > 0 ? '余额 ' + balance + ' 书币' : ''
                            },
                            'memberShipString': function () {
                                const memberCardSummary = this.memberCardSummary
                                if (1 === memberCardSummary.permanent) {
                                    return '终身会员卡'
                                }

                                const isPay = memberCardSummary.isPaying || 0,
                                    cardType = isPay ? '会员卡' : '体验卡',
                                    remainTime = isPay ? memberCardSummary.payingRemainTime : memberCardSummary.remainTime,
                                    remainDays = Math.floor(remainTime / 86400);

                                return isNaN(remainDays) || remainDays < 0 || 0 === remainTime
                                    ? ''
                                    : 0 === remainDays
                                        ? cardType + '今日到期'
                                        : cardType + '剩余 ' + remainDays + ' 天'
                            },
                            'haveThisArchive': function () {
                                return !!this.isArchive && this.currentArchive
                            },
                            'thisArchiveHasMore': function () {
                                if (!this.isArchive)
                                    return false
                                if (!this.currentArchive)
                                    return false
                                const loaded = _0x78032d.get(this.currentArchive, 'loaded', []),
                                    allBooks = _0x78032d.get(this.currentArchive, 'allBooks', []);
                                return loaded.length < allBooks.length
                            },
                            'thisArchiveLoaded': function () {
                                return !!this.isArchive && (!!this.currentArchive && (this.currentArchive.loaded || []))
                            },
                            'showDevPanel': function () {
                                return _0x5db573.isEnvClient
                                    ? _0x5db573.inDevelopment() || window.secretDevPanel3721
                                    : _0x5db573.inDevelopment()
                            }
                        }),
                    'methods': {
                        'handleLogin': function () {
                            this.$showLoginDialog()
                        },
                        'handleDownloadApp': function () {
                            this.reportClientBusiness({
                                'itemName': 'Web_Shelf_DownloadClk'
                            })
                            this.reportClientBusiness({
                                'itemName': 'Web_Download_ShelfExp'
                            })
                            this.$showDownloadAppDialog()
                            this.$downloadAppComponent.beginToLoadQrCode({
                                'schemeName': 'shelf',
                                'subTitle': '在手机上管理我的书架',
                                'from': 'ShelfDownload'
                            })
                        },
                        'updateEmptyViewState': function () {
                            if (_0x5db573.isEnvClient) {
                                const appEl = document.querySelector('#app')
                                if (appEl) {
                                    this.books.length > 0
                                        ? appEl.classList.remove('app_fullHeight')
                                        : appEl.classList.add('app_fullHeight')
                                }
                            }
                        },
                        'checkMissingBook': function () {
                            let _this = this,
                                shelfIndexes = this.$store.state.shelf.shelfIndexes,
                                _0x144c81 = function (_0x2c3872) {
                                    return _0x2c3872.archiveId
                                        ? (_this.booksAndArchives.find(function (_0x1497e1) {
                                            return _0x1497e1['archiveId'] === _0x2c3872['archiveId'];
                                        }) || console.log('archiveId', _0x2c3872.archiveId, 'is missing', _0x2c3872),
                                            'continue')
                                        : _0x2c3872.bookId
                                            ? (_this.booksAndArchives.find(function (_0xd47274) {
                                                return _0xd47274[_0x2bf0('0x7')] === _0x2c3872['indexId'];
                                            }) || console[_0x2bf0('0x30')]('bookId', _0x2c3872.bookId, 'is missing'),
                                                'continue')
                                            : void console[_0x2bf0('0x30')]('shelfIndexItem', _0x2c3872);
                                },
                                _0x288549 = true,
                                hasError = false,
                                errObj = undefined;

                            try {
                                for (var _0x3f6ce1, _0x902c1f = _0x427849.default(shelfIndexes); !(_0x288549 = (_0x3f6ce1 = _0x902c1f.next()).done); _0x288549 = true) {
                                    _0x144c81(_0x3f6ce1.value)
                                }
                            } catch (err) {
                                hasError = true
                                errObj = err
                            } finally {
                                try {
                                    !_0x288549 && _0x902c1f['return'] && _0x902c1f['return']();
                                } finally {
                                    if (hasError)
                                        throw errObj;
                                }
                            }
                            console.log('checkMissingBook done')
                        }
                    },
                    'asyncData': (_0x5f5b06 = _0x23110c.default(_0x49ec.default.mark(function _0x434282(_0x1605c7) {
                            let archiveId,
                                hasArchiveId,
                                store = _0x1605c7['store'],
                                user = _0x1605c7['user'],
                                envConfig = _0x1605c7['envConfig'],
                                route = _0x1605c7['route'];

                            return _0x49ec.default.wrap(function (_0x395cdf) {
                                for (; ;)
                                    switch (_0x395cdf.prev = _0x395cdf.next) {
                                        case 0x0:
                                            store.registerModule('shelf', _0x39571e.default())
                                            if (envConfig && new _0x44a219.default().isPhone(envConfig.userAgent)) {
                                                store.commit(_0x2b42f4['UPDATE_SHOW_NAV_BAR'], false)
                                            }
                                            archiveId = Number(route.params.archiveId) || 0
                                            hasArchiveId = Boolean(archiveId)
                                            if (!_0x5db573.hasLogin(user)) {
                                                _0x395cdf.next = 0xe
                                                break
                                            }
                                            _0x395cdf.next = 0x7
                                            return store.dispatch(_0x39eac0['FETCH_SHELF_INDEX'], _0x11ad95.default({}, envConfig))

                                        case 0x7:
                                            if (!hasArchiveId) {
                                                _0x395cdf.next = 0xc
                                                break
                                            }
                                            _0x395cdf.next = 0xa
                                            return store.dispatch(_0x39eac0['FETCH_SHELF_ARCHIVE_LOAD_MORE'], _0x11ad95.default({}, envConfig, {
                                                'count': 50,
                                                'currentArchiveId': archiveId
                                            }))
                                        case 0xa:
                                            _0x395cdf.next = 0xe
                                            break
                                        case 0xc:
                                            _0x395cdf.next = 0xe
                                            return store.dispatch(_0x39eac0['FETCH_SHELF_LOAD_MORE'], _0x11ad95.default({}, envConfig, {
                                                'count': 50,
                                                'isArchive': hasArchiveId,
                                                'currentArchiveId': archiveId
                                            }))
                                        case 0xe:
                                        case 'end':
                                            return _0x395cdf.stop()
                                    }
                            }, _0x434282, this)
                        })),
                            function (_0x46a2af) {
                                return _0x5f5b06.apply(this, arguments)
                            }
                    ),
                    'created': function () {
                        _0x5db573.isEnvClient && this.$store.registerModule('shelf', _0x39571e.default(), {
                            'preserveState': true
                        })
                    },
                    'mounted': function () {
                        const _this = this
                        if (this.hasLogin) {
                            this.$store.dispatch(_0x39eac0['FETCH_SHELF_UPDATED_BOOKS'], _0x78032d.get(this.user, 'vid'))
                            this.$store.dispatch(_0x39eac0['FETCH_SHELF_ACCOUNT'])
                        }
                        if (_0x5db573.isEnvClient) {
                            this.haveReportInfo('Index_Shelf') && this.reportClientBusiness({
                                'itemName': 'Web_Shelf_EnterFromHome'
                            }, 'Index_Shelf')
                            this.haveReportInfo('Nav_Shelf') && this.reportClientBusiness({
                                'itemName': 'Web_Shelf_EnterFromMe'
                            }, 'Nav_Shelf')
                            this.haveReportInfo('Reader_NavBar') && this.reportClientBusiness({
                                'itemName': 'Web_Shelf_EnterFromReaderNavBar'
                            }, 'Reader_NavBar')
                            this.haveReportInfo('Reader_BottomBar') && this.reportClientBusiness({
                                'itemName': 'Web_Shelf_EnterFromReaderBottomBar'
                            }, 'Reader_BottomBar')
                            this.haveReportInfo('Global_TabBar') && this.reportClientBusiness({
                                'itemName': 'Web_Shelf_EnterFromGlobalTabBar'
                            }, 'Global_TabBar')
                            this.reportClientBusiness({
                                'itemName': 'Web_Shelf_DownloadExp'
                            })
                            this.reportClientBusiness({
                                'itemName': 'Web_Shelf_DownloadExp'
                            })
                            _0x4c0539.default.handleElementScrollEvent(window, function () {
                                if (_this.isArchive) {
                                    if (_this.thisArchiveHasMore) {
                                        _this.$store.dispatch(_0x39eac0['FETCH_SHELF_ARCHIVE_LOAD_MORE'], {
                                            'count': 100,
                                            'isArchive': _this.isArchive,
                                            'currentArchiveId': _this.currentArchiveId
                                        }).then(() => {
                                            _this.$store.dispatch(_0x39eac0['FETCH_SHELF_UPDATED_BOOKS'], _0x78032d.get(_this.user, 'vid'))
                                        })
                                    }
                                } else {
                                    if (_this.hasMore) {
                                        _this.$store.dispatch(_0x39eac0['FETCH_SHELF_LOAD_MORE'], {
                                            'count': 100,
                                            'isArchive': _this.isArchive,
                                            'currentArchiveId': _this.currentArchiveId
                                        }).then(() => {
                                            _this.$store.dispatch(_0x39eac0['FETCH_SHELF_UPDATED_BOOKS'], _0x78032d.get(_this.user, 'vid'))
                                        })
                                    }
                                }
                            })
                        }
                        this.updateEmptyViewState()
                    },
                    'destroyed': function () {
                        this.$store.unregisterModule('shelf')
                    }
                }
            },
            1070: function (_0x59070, _0x1ec4d7, _0x3707d2) {
                'use strict';
                _0x3707d2['r'](_0x1ec4d7);
                var _0x35362f = _0x3707d2(0x42f)
                    , _0x3d01fd = _0x3707d2['n'](_0x35362f);
                for (var _0x59ca90 in _0x35362f)
                    'default' !== _0x59ca90 && function (_0x2ff5f6) {
                        _0x3707d2['d'](_0x1ec4d7, _0x2ff5f6, function () {
                            return _0x35362f[_0x2ff5f6];
                        });
                    }(_0x59ca90);
                _0x1ec4d7['default'] = _0x3d01fd['a'];
            },

            // ShelfBook.vue
            1071: function (_0x4b572e, _0xf49e07, _0x50c836) {
                'use strict';
                Object['defineProperty'](_0xf49e07, '__esModule', {
                    'value': !0x0
                });
                var _0x484f11 = _0x4e756(_0x50c836(0x110))
                    , _0x43c0df = _0x50c836(0x10e)
                    , _0x3d00b8 = _0x4e756(_0x43c0df)
                    , _0x3ccc5d = _0x4e756(_0x50c836(0x8));

                function _0x4e756(_0x18f68a) {
                    return _0x18f68a && _0x18f68a['__esModule'] ? _0x18f68a : {
                        'default': _0x18f68a
                    };
                }

                _0xf49e07[_0x2bf0('0x2b')] = {
                    'name': 'ShelfBook',
                    'components': {
                        'BookCover': _0x484f11['default']
                    },
                    'props': {
                        'book': {
                            'type': Object
                        }
                    },
                    'computed': {
                        'infoString': function () {
                            return '';
                        },
                        'isCopyRightForbiddenRead': function () {
                            return _0x3d00b8['default']['isCopyRightForbiddenRead'](this['book']);
                        },
                        'bookReaderUrl': function () {
                            return this[_0x2bf0('0x3c')] || this['book'][_0x2bf0('0x2a')] ? _0x2bf0('0x6') : this['readerURL'](this['book']['bookId']);
                        },
                        'isUpdated': function () {
                            return this[_0x2bf0('0x28')]['state']['shelf']['updatedBooks']['indexOf'](this['book']['bookId']) > -0x1;
                        },
                        'isDev': function () {
                            return _0x3ccc5d['default']['inDevelopment']();
                        }
                    },
                    'methods': {
                        'handleClick': function (_0x418ec7) {
                            return this['book']['bookType'] === _0x43c0df['BOOK_TYPE_MP_ARTICLE'] ? (this['$toast'](_0x2bf0('0x4f')),
                                _0x418ec7['preventDefault'](),
                                !0x1) : this['book']['isAudio'] ? (this[_0x2bf0('0x2c')]('网页版暂不支持收听'),
                                _0x418ec7['preventDefault'](),
                                !0x1) : void (this['isCopyRightForbiddenRead'] ? (this['$toast'](_0x3d00b8['default']['copyRightForbiddenReadToast'], 0xfa0),
                                this['reportClientBusiness']({
                                    'itemName': 'Web_Reader_Forbidden'
                                })) : this['saveReportInfo']('Shelf_Enter_Reader'));
                        }
                    }
                };
            },
            1072: function (_0x43ba7a, _0x23a440, _0x103c8b) {
            },
            1073: function (_0x8bb3dc, _0x23537e, _0x48b4bc) {
                'use strict';
                _0x48b4bc['r'](_0x23537e);
                var _0xe01d90 = _0x48b4bc(0x432)
                    , _0x1cbdf7 = _0x48b4bc['n'](_0xe01d90);
                for (var _0x123f50 in _0xe01d90)
                    'default' !== _0x123f50 && function (_0x58f71b) {
                        _0x48b4bc['d'](_0x23537e, _0x58f71b, function () {
                            return _0xe01d90[_0x58f71b];
                        });
                    }(_0x123f50);
                _0x23537e['default'] = _0x1cbdf7['a'];
            },

            // ShelfArchive.vue
            1074: function (_0x45362a, _0x4b2099, _0x2274a9) {
                'use strict';
                Object['defineProperty'](_0x4b2099, '__esModule', {
                    'value': !0x0
                });
                var _0x1e9905 = _0x186b04(_0x2274a9(0x172))
                    , _0x4a66bb = _0x186b04(_0x2274a9(0x110))
                    , _0x581008 = _0x186b04(_0x2274a9(0x8));

                function _0x186b04(_0x88789d) {
                    return _0x88789d && _0x88789d[_0x2bf0('0x39')] ? _0x88789d : {
                        'default': _0x88789d
                    };
                }

                _0x4b2099['default'] = {
                    'name': 'ShelfArchive',
                    'components': {
                        'BookCover': _0x4a66bb[_0x2bf0('0x2b')]
                    },
                    'props': {
                        'archive': {
                            'type': Object
                        }
                    },
                    'computed': {
                        'name': function () {
                            return (0x0,
                                _0x1e9905['default'])(this['archive'], _0x2bf0('0x4a'), '');
                        },
                        'infoString': function () {
                            return '';
                        },
                        'topFourBooks': function () {
                            return (0x0,
                                _0x1e9905['default'])(this['archive'], 'first4Books', []);
                        },
                        'loadedBooks': function () {
                            return (0x0,
                                _0x1e9905[_0x2bf0('0x2b')])(this['archive'], 'loaded', []);
                        },
                        'isDev': function () {
                            return _0x581008[_0x2bf0('0x2b')][_0x2bf0('0x22')]();
                        }
                    },
                    'methods': {
                        'handleClick': function () {
                            if (this['archive'][_0x2bf0('0x51')])
                                return this['$router']['push']('/web/shelf/archive/' + this['archive']['archiveId']);
                        },
                        'checkBookUpdated': function (_0x375b30) {
                            return this['$store']['state']['shelf']['updatedBooks'][_0x2bf0('0x15')](_0x375b30) > -0x1;
                        }
                    }
                };
            },
            1075: function (_0x5f0d7f, _0x41c8bb, _0x1bff8f) {
            },
            1076: function (_0x3468c7, _0x8530da, _0x808579) {
            },
            1438: function (_0xf3c83a, _0x319432, _0x169147) {
                'use strict';
                _0x169147['r'](_0x319432);
                var _0xcee377 = _0x169147(0x7b0)
                    , _0x24b00c = _0x169147(0x42e);
                for (var _0x22f133 in _0x24b00c)
                    'default' !== _0x22f133 && function (_0x236cb1) {
                        _0x169147['d'](_0x319432, _0x236cb1, function () {
                            return _0x24b00c[_0x236cb1];
                        });
                    }(_0x22f133);
                _0x169147(0x59f);
                var _0x4d1370 = _0x169147(0x1)
                    ,
                    _0x38f3a8 = Object(_0x4d1370['a'])(_0x24b00c['default'], _0xcee377['a'], _0xcee377['b'], !0x1, null, null, null);
                _0x319432['default'] = _0x38f3a8['exports'];
            },
            1439: function (_0x5468dd, _0xada5fa, _0x4c9693) {
                'use strict';
                var _0x56b40e = _0x4c9693(0x430);
                _0x4c9693['n'](_0x56b40e)['a'];
            },
            1440: function (_0x335581, _0x5ab53d, _0x3ac169) {
                'use strict';
                _0x3ac169['r'](_0x5ab53d);
                var _0x1f8d16 = _0x3ac169(0x7b1)
                    , _0x4b4f8b = _0x3ac169(0x431);
                for (var _0x510712 in _0x4b4f8b)
                    _0x2bf0('0x2b') !== _0x510712 && function (_0x36092a) {
                        _0x3ac169['d'](_0x5ab53d, _0x36092a, function () {
                            return _0x4b4f8b[_0x36092a];
                        });
                    }(_0x510712);
                _0x3ac169(0x5a1);
                var _0x5c9b3b = _0x3ac169(0x1)
                    ,
                    _0x4a17c2 = Object(_0x5c9b3b['a'])(_0x4b4f8b['default'], _0x1f8d16['a'], _0x1f8d16['b'], !0x1, null, null, null);
                _0x5ab53d['default'] = _0x4a17c2['exports'];
            },
            1441: function (_0xa8176d, _0x3d5cab, _0x4f705b) {
                'use strict';
                var _0xbf9581 = _0x4f705b(0x433);
                _0x4f705b['n'](_0xbf9581)['a'];
            },
            1442: function (_0x39b276, _0x5e7c5b, _0xa7b802) {
                'use strict';
                var _0x473f10 = _0xa7b802(0x434);
                _0xa7b802['n'](_0x473f10)['a'];
            },
            1949: function (_0x56c246, _0x65981c, _0x4dde70) {
                'use strict';
                var _0x24097a = function () {
                    var _0x30cf8d = this
                        , _0x5bea18 = _0x30cf8d['$createElement']
                        , _0x1b97b1 = _0x30cf8d['_self']['_c'] || _0x5bea18;
                    return _0x1b97b1('div', {
                        'staticClass': 'app_content\x20shelf_container'
                    }, [_0x30cf8d['hasLogin'] && (_0x30cf8d['booksAndArchives']['length'] > 0x0 || _0x30cf8d['haveThisArchive']) ? _0x1b97b1('div', {
                        'staticClass': 'shelf_header'
                    }, [_0x1b97b1('h2', {
                        'staticClass': _0x2bf0('0x2f')
                    }, [_0x30cf8d['_v'](_0x30cf8d['_s'](_0x30cf8d['shelfTitle']))]), _0x30cf8d['accountDetail'] && _0x30cf8d[_0x2bf0('0x2')]['length'] > 0x0 ? _0x1b97b1('div', {
                        'staticClass': 'shelf_accountDetail'
                    }, [_0x30cf8d['_v'](_0x30cf8d['_s'](_0x30cf8d['accountDetail']))]) : _0x30cf8d['_e'](), _0x1b97b1('div', {
                        'staticClass': 'shelf_download_app'
                    }, [_0x1b97b1('div', {
                        'staticClass': 'shelf_download_app_link',
                        'on': {
                            'click': _0x30cf8d['handleDownloadApp']
                        }
                    }, [_0x1b97b1(_0x2bf0('0x3b'), {
                        'staticClass': 'shelf_download_app_text'
                    }, [_0x30cf8d['_v']('下载微信读书\x20App\x20管理书架')]), _0x1b97b1(_0x2bf0('0x3b'), {
                        'staticClass': 'shelf_download_app_icon'
                    })])])]) : _0x30cf8d['_e'](), _0x30cf8d['isArchive'] ? [_0x30cf8d['hasLogin'] && _0x30cf8d['haveThisArchive'] ? _0x1b97b1('div', {
                        'staticClass': 'shelf_list'
                    }, [_0x30cf8d['_l'](_0x30cf8d['thisArchiveLoaded'], function (_0x2b0374) {
                        return _0x1b97b1('shelf-book', {
                            'directives': [{
                                'name': 'show',
                                'rawName': 'v-show',
                                'value': !_0x2b0374['hide'],
                                'expression': '!book.hide'
                            }],
                            'key': _0x2b0374['bookId'],
                            'attrs': {
                                'book': _0x2b0374
                            }
                        });
                    }), _0x30cf8d['_m'](0x0), _0x30cf8d['_l'](0x7, function (_0x386b50) {
                        return _0x1b97b1('span', {
                            'key': _0x386b50,
                            'staticClass': 'shelfBook_placeholder'
                        });
                    })], 0x2) : _0x30cf8d['_e'](), _0x1b97b1('div', {
                        'directives': [{
                            'name': 'show',
                            'rawName': 'v-show',
                            'value': _0x30cf8d['thisArchiveHasMore'],
                            'expression': _0x2bf0('0x13')
                        }],
                        'staticClass': 'shelfBook_loadingView'
                    }, [_0x1b97b1('Loading', {
                        'attrs': {
                            'zoom': '0.4'
                        }
                    })], 0x1)] : [_0x30cf8d['hasLogin'] && _0x30cf8d[_0x2bf0('0x21')]['length'] > 0x0 ? _0x1b97b1('div', {
                        'staticClass': 'shelf_list'
                    }, [_0x30cf8d['_l'](_0x30cf8d['booksAndArchives'], function (_0x47d34b) {
                        return ['archive' === _0x47d34b['role'] ? _0x1b97b1('shelf-archive', {
                            'attrs': {
                                'archive': _0x47d34b
                            }
                        }) : _0x47d34b['hide'] ? _0x1b97b1('span') : _0x1b97b1(_0x2bf0('0x43'), {
                            'attrs': {
                                'book': _0x47d34b
                            }
                        })];
                    }), _0x30cf8d['hasMore'] ? _0x30cf8d['_e']() : _0x1b97b1('a', {
                        'staticClass': 'shelfBook\x20shelfBook_add',
                        'attrs': {
                            'href': '/web/category'
                        }
                    }, [_0x1b97b1('div', {
                        'staticClass': 'shelfBook_add_cover'
                    })]), _0x30cf8d['_l'](0x7, function (_0x47a498) {
                        return _0x1b97b1(_0x2bf0('0x3b'), {
                            'key': _0x47a498,
                            'staticClass': 'shelfBook_placeholder'
                        });
                    })], 0x2) : _0x30cf8d['_e'](), _0x1b97b1(_0x2bf0('0x17'), {
                        'directives': [{
                            'name': 'show',
                            'rawName': 'v-show',
                            'value': _0x30cf8d['hasMore'],
                            'expression': 'hasMore'
                        }],
                        'staticClass': 'shelfBook_loadingView'
                    }, [_0x1b97b1('Loading', {
                        'attrs': {
                            'zoom': _0x2bf0('0x8')
                        }
                    })], 0x1)], _0x30cf8d['showDevPanel'] ? _0x1b97b1('div', {
                        'staticClass': _0x2bf0('0x37')
                    }, [_0x1b97b1('div', [_0x1b97b1(_0x2bf0('0x3b'), [_0x30cf8d['_v'](_0x2bf0('0x4c'))]), _0x30cf8d['_v']('：\x20'), _0x1b97b1('a', {
                        'on': {
                            'click': _0x30cf8d['checkMissingBook']
                        }
                    }, [_0x30cf8d['_v']('RUN')])])]) : _0x30cf8d['_e']()], 0x2);
                }
                    , _0x19427f = [function () {
                    var _0x5856e2 = this['$createElement']
                        , _0x4c8596 = this['_self']['_c'] || _0x5856e2;
                    return _0x4c8596('a', {
                        'staticClass': 'shelfBook\x20shelfBook_add',
                        'attrs': {
                            'href': '/web/category'
                        }
                    }, [_0x4c8596('div', {
                        'staticClass': 'shelfBook_add_cover'
                    })]);
                }
                ];
                _0x4dde70['d'](_0x65981c, 'a', function () {
                    return _0x24097a;
                }),
                    _0x4dde70['d'](_0x65981c, 'b', function () {
                        return _0x19427f;
                    });
            },
            1968: function (_0x16aaa0, _0x2212bc, _0xe4c19c) {
                'use strict';
                var _0x402734 = function () {
                    var _0x5c78a9 = this
                        , _0x4cf734 = _0x5c78a9[_0x2bf0('0x41')]
                        , _0x3264ae = _0x5c78a9['_self']['_c'] || _0x4cf734;
                    return _0x3264ae('a', {
                        'staticClass': _0x2bf0('0xa'),
                        'attrs': {
                            'href': _0x5c78a9['bookReaderUrl']
                        },
                        'on': {
                            'click': _0x5c78a9['handleClick']
                        }
                    }, [_0x3264ae('book-cover', {
                        'attrs': {
                            'custom-selector': 'cover',
                            'src': _0x5c78a9['book']['cover'],
                            'is-secret': 0x1 === _0x5c78a9['book']['secret'],
                            'is-updated': _0x5c78a9['isUpdated'],
                            'is-trial': _0x5c78a9['book'][_0x2bf0('0xf')],
                            'is-audio': _0x5c78a9['book']['isAudio'],
                            'needGradientDecor': !0x0
                        }
                    }), _0x3264ae('div', {
                        'staticClass': 'title'
                    }, [_0x5c78a9['_v'](_0x5c78a9['_s'](_0x5c78a9['book']['title']))]), _0x5c78a9['infoString']['length'] > 0x0 ? _0x3264ae('div', {
                        'staticClass': _0x2bf0('0x32')
                    }, [_0x5c78a9['_v'](_0x5c78a9['_s'](_0x5c78a9[_0x2bf0('0x10')]))]) : _0x5c78a9['_e'](), _0x5c78a9['isDev'] ? _0x3264ae('div', {
                        'staticClass': 'shelfBook_dev'
                    }, [_0x3264ae('div', [_0x5c78a9['_v']('BookId:\x20' + _0x5c78a9['_s'](_0x5c78a9[_0x2bf0('0x12')]['bookId']))])]) : _0x5c78a9['_e']()], 0x1);
                }
                    , _0x1fe595 = [];
                _0xe4c19c['d'](_0x2212bc, 'a', function () {
                    return _0x402734;
                }),
                    _0xe4c19c['d'](_0x2212bc, 'b', function () {
                        return _0x1fe595;
                    });
            },
            1969: function (_0x3280eb, _0x379ae4, _0x307e47) {
                'use strict';
                var _0x15c002 = function () {
                    var _0x296382 = this
                        , _0x672035 = _0x296382['$createElement']
                        , _0x441baf = _0x296382['_self']['_c'] || _0x672035;
                    return _0x441baf('a', {
                        'staticClass': 'shelfArchive',
                        'on': {
                            'click': _0x296382[_0x2bf0('0x18')]
                        }
                    }, [_0x441baf('div', {
                        'staticClass': _0x2bf0('0x11')
                    }, _0x296382['_l'](_0x296382['topFourBooks'], function (_0x223291) {
                        return _0x441baf('book-cover', {
                            'attrs': {
                                'custom-selector': 'miniCover',
                                'src': _0x223291['cover'],
                                'is-secret': 0x1 === _0x223291[_0x2bf0('0x26')],
                                'is-updated': _0x296382['checkBookUpdated'](_0x223291['bookId']),
                                'is-trial': _0x223291['isTrial']
                            }
                        });
                    }), 0x1), _0x441baf('div', {
                        'staticClass': 'title'
                    }, [_0x296382['_v'](_0x296382['_s'](_0x296382[_0x2bf0('0x4a')]))]), _0x296382['infoString']['length'] > 0x0 ? _0x441baf('div', {
                        'staticClass': 'info'
                    }, [_0x296382['_v'](_0x296382['_s'](_0x296382['infoString']))]) : _0x296382['_e'](), _0x296382['isDev'] ? _0x441baf(_0x2bf0('0x17'), {
                        'staticClass': 'shelfArchive_dev'
                    }, [_0x441baf('div', [_0x296382['_v'](_0x2bf0('0x16') + _0x296382['_s'](_0x296382['archive'][_0x2bf0('0x51')]))])]) : _0x296382['_e']()]);
                }
                    , _0x4f4d84 = [];
                _0x307e47['d'](_0x379ae4, 'a', function () {
                    return _0x15c002;
                }),
                    _0x307e47['d'](_0x379ae4, 'b', function () {
                        return _0x4f4d84;
                    });
            },
        }
    ]
);
