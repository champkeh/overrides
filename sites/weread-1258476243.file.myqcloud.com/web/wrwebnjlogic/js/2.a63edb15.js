var strings_2 = [
    "fromBits",
    "err",
    "sid",
    "service",
    "wr_note_action_click_output",
    "tencent",
    "clienttime: integer|Long expected",
    "scene",
    "appversion: string expected",
    "isString",
    "toObject",
    "call",
    "code",
    "test",
    "wr_note_scene_note_reader_detail",
    "utm",
    "wr_note_action_click_read_report",
    "filesize: integer|Long expected",
    "extra",
    "com",
    "LongBits",
    "unsigned",
    "object",
    "action",
    "Writer",
    "prototype",
    "toString",
    "decodeDelimited",
    "module",
    "commFieldThree",
    "wr_note_action_click_search",
    "clienttime",
    "BaseMsg",
    "filename",
    "bookmarkid",
    "decode",
    "WrBookUploadErrorReport",
    "int32",
    "fromValue",
    "toJSONOptions",
    "type",
    "fromObject",
    "webpackJsonp",
    "ldelim",
    "default",
    "bookid",
    ".com.tencent.wrbus.pb.WrBookUploadErrorReport.baseLog: object expected",
    "function *\\( *\\)",
    "longs",
    "commonValue1",
    "backend",
    "high",
    "err_parse_failed",
    "object expected",
    "vid: integer|Long expected",
    "filesize",
    "wr_note_action_output_pdf",
    "wr_note_action_click_book_detail",
    "err_upload_shelf_full",
    "undefined",
    "wr_note_action_filter",
    "encode",
    "int64",
    "html",
    "err_unknown_unknown",
    "isInteger",
    "miniprogram",
    "low",
    "index",
    "wr_note_scene_note_list",
    "uint32",
    "enums",
    "hints",
    "fork",
    "roots",
    "__esModule",
    "Reader",
    "baseLog",
    "function",
    "len",
    "wrbus",
    "requestId",
    "errMsg",
    "reviewid",
    "vid",
    "uint64",
    "itemid",
    "exports",
    "actionContext",
    "code: string expected",
    "commFieldTwo",
    "Long",
    "commonValue2",
    "counter",
    "value",
    "hasOwnProperty",
    "action: string expected",
    "create",
    "string",
    "toNumber",
    "stage",
    "App",
    "filetype",
    "defaults",
    "toJSON",
    "bookmarkid: string expected",
    "util",
    "err_upload_limited",
    "action: enum value expected",
    "cosKey",
    "WrNoteActionReport",
    "app: enum value expected",
    "skipType",
    "sid: integer|Long expected",
    "app_invalid",
    "constructor",
    "app",
    "commFieldOne",
    "err_filecheck_oversize",
    "native_app",
    "WrCommonFatalReport",
    "pos",
    "number",
    "verify",
    "encodeDelimited",
    "filename: string expected",
    "message",
    "appversion",
    "commonValue2: string expected"
]

var _0x21cc = function (idx) {
    return strings_2[Number(idx)]
};


window.webpackJsonp = window.webpackJsonp || []
window.webpackJsonp.push(
    [
        [2],
        {
            1458: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                exports.default = exports.com = undefined

                var _0x704192 = _0x110bf8(require(74)),
                    _0x51625f = _0x110bf8(require(91)),
                    _0x51036b = _0x110bf8(require(374)),
                    _0x3fb8a2 = function (_exports) {
                        if (_exports && _exports.__esModule) {
                            return _exports
                        }
                        const _0x17ddc9 = {};
                        if (null != _exports) {
                            for (const key in _exports) {
                                Object.prototype.hasOwnProperty.call(_exports, key) && (_0x17ddc9[key] = _exports[key])
                            }
                        }
                        _0x17ddc9.default = _exports
                        return _0x17ddc9
                    }(require(1033))

                function _0x110bf8(_0x2b56c5) {
                    return _0x2b56c5 && _0x2b56c5['__esModule'] ? _0x2b56c5 : {
                        'default': _0x2b56c5
                    };
                }

                var _0x2594e0 = _0x3fb8a2.Reader,
                    _0xca25f3 = _0x3fb8a2.Writer,
                    _0x34e90a = _0x3fb8a2.util,
                    _0x57df74 = _0x3fb8a2.roots.default || (_0x3fb8a2.roots.default = {})

                exports.com = _0x57df74.com = function () {
                    var _0x7aef8c,
                        _app,
                        _pb = {},
                        _wrbus = {},
                        _tencent = {},
                        _com = {};

                    _0x7aef8c = {}
                    _app = _0x51036b.default(_0x7aef8c)
                    _app[_0x7aef8c[0] = 'app_invalid'] = 0
                    _app[_0x7aef8c[1] = 'native_app'] = 1
                    _app[_0x7aef8c[2] = 'html'] = 2
                    _app[_0x7aef8c[3] = 'rn'] = 3
                    _app[_0x7aef8c[4] = 'miniprogram'] = 4
                    _app[_0x7aef8c[5] = 'backend'] = 5
                    _pb.App = _app
                    _pb['BaseMsg'] = function () {
                        function _0x3e30fe(_0x1f7d55) {
                            if (_0x1f7d55) {
                                var _0x538636 = _0x51625f.default(_0x1f7d55)
                                for (let i = 0; i < _0x538636.length; ++i) {
                                    null != _0x1f7d55[_0x538636[i]] && (this[_0x538636[i]] = _0x1f7d55[_0x538636[i]])
                                }
                            }
                        }

                        _0x3e30fe.prototype.id = ''
                        _0x3e30fe.prototype.clienttime = _0x34e90a.Long ? _0x34e90a.Long.fromBits(0, 0, false) : 0
                        _0x3e30fe.prototype.appversion = ''
                        _0x3e30fe.prototype.vid = _0x34e90a.Long ? _0x34e90a.Long.fromBits(0, 0, true) : 0
                        _0x3e30fe.prototype.app = 0
                        _0x3e30fe.create = function (_0x2ec686) {
                            return new _0x3e30fe(_0x2ec686);
                        }
                        _0x3e30fe.encode = function (_0x198ef1, _0x129b82) {
                            return _0x129b82 || (_0x129b82 = _0xca25f3['create']()),
                            null != _0x198ef1['id'] && Object['hasOwnProperty']['call'](_0x198ef1, 'id') && _0x129b82[_0x21cc('0x46')](0xa)['string'](_0x198ef1['id']),
                            null != _0x198ef1['clienttime'] && Object['hasOwnProperty']['call'](_0x198ef1, 'clienttime') && _0x129b82[_0x21cc('0x46')](0x10)['int64'](_0x198ef1['clienttime']),
                            null != _0x198ef1['appversion'] && Object['hasOwnProperty']['call'](_0x198ef1, 'appversion') && _0x129b82[_0x21cc('0x46')](0x1a)['string'](_0x198ef1[_0x21cc('0x7f')]),
                            null != _0x198ef1[_0x21cc('0x54')] && Object[_0x21cc('0x5f')]['call'](_0x198ef1, _0x21cc('0x54')) && _0x129b82['uint32'](0x20)[_0x21cc('0x55')](_0x198ef1['vid']),
                            null != _0x198ef1['app'] && Object['hasOwnProperty']['call'](_0x198ef1, 'app') && _0x129b82['uint32'](0x28)['int32'](_0x198ef1[_0x21cc('0x74')]),
                                _0x129b82;
                        }
                        _0x3e30fe.encodeDelimited = function (_0x78f33, _0x406a8e) {
                            return this[_0x21cc('0x3d')](_0x78f33, _0x406a8e)[_0x21cc('0x2b')]();
                        }
                        _0x3e30fe.decode = function (_0x4174e9, _0x17a9c6) {
                            _0x4174e9 instanceof _0x2594e0 || (_0x4174e9 = _0x2594e0['create'](_0x4174e9));
                            for (var _0x5d7446 = void 0x0 === _0x17a9c6 ? _0x4174e9['len'] : _0x4174e9['pos'] + _0x17a9c6, _0x2f4d98 = new _0x57df74[(_0x21cc('0x13'))]['tencent']['wrbus']['pb']['BaseMsg'](); _0x4174e9[_0x21cc('0x79')] < _0x5d7446;) {
                                var _0x204fb9 = _0x4174e9['uint32']();
                                switch (_0x204fb9 >>> 0x3) {
                                    case 0x1:
                                        _0x2f4d98['id'] = _0x4174e9[_0x21cc('0x62')]();
                                        break;
                                    case 0x2:
                                        _0x2f4d98['clienttime'] = _0x4174e9['int64']();
                                        break;
                                    case 0x3:
                                        _0x2f4d98['appversion'] = _0x4174e9['string']();
                                        break;
                                    case 0x4:
                                        _0x2f4d98['vid'] = _0x4174e9['uint64']();
                                        break;
                                    case 0x5:
                                        _0x2f4d98['app'] = _0x4174e9['int32']();
                                        break;
                                    default:
                                        _0x4174e9['skipType'](0x7 & _0x204fb9);
                                }
                            }
                            return _0x2f4d98;
                        }
                        _0x3e30fe.decodeDelimited = function (_0x42d9f5) {
                            return _0x42d9f5 instanceof _0x2594e0 || (_0x42d9f5 = new _0x2594e0(_0x42d9f5)),
                                this['decode'](_0x42d9f5, _0x42d9f5['uint32']());
                        }
                        _0x3e30fe.verify = function (_0x5188be) {
                            if (_0x21cc('0x16') !== (void 0x0 === _0x5188be ? _0x21cc('0x3b') : (0x0,
                                _0x704192['default'])(_0x5188be)) || null === _0x5188be)
                                return 'object\x20expected';
                            if (null != _0x5188be['id'] && _0x5188be['hasOwnProperty']('id') && !_0x34e90a['isString'](_0x5188be['id']))
                                return 'id:\x20string\x20expected';
                            if (null != _0x5188be['clienttime'] && _0x5188be['hasOwnProperty']('clienttime') && !(_0x34e90a['isInteger'](_0x5188be[_0x21cc('0x1f')]) || _0x5188be['clienttime'] && _0x34e90a['isInteger'](_0x5188be['clienttime']['low']) && _0x34e90a[_0x21cc('0x41')](_0x5188be['clienttime']['high'])))
                                return 'clienttime:\x20integer|Long\x20expected';
                            if (null != _0x5188be['appversion'] && _0x5188be['hasOwnProperty']('appversion') && !_0x34e90a['isString'](_0x5188be['appversion']))
                                return 'appversion:\x20string\x20expected';
                            if (null != _0x5188be['vid'] && _0x5188be['hasOwnProperty']('vid') && !(_0x34e90a['isInteger'](_0x5188be[_0x21cc('0x54')]) || _0x5188be[_0x21cc('0x54')] && _0x34e90a['isInteger'](_0x5188be['vid']['low']) && _0x34e90a[_0x21cc('0x41')](_0x5188be['vid']['high'])))
                                return 'vid:\x20integer|Long\x20expected';
                            if (null != _0x5188be['app'] && _0x5188be['hasOwnProperty']('app'))
                                switch (_0x5188be['app']) {
                                    default:
                                        return 'app:\x20enum\x20value\x20expected';
                                    case 0x0:
                                    case 0x1:
                                    case 0x2:
                                    case 0x3:
                                    case 0x4:
                                    case 0x5:
                                }
                            return null;
                        }
                        _0x3e30fe.fromObject = function (_0x7e14e2) {
                            if (_0x7e14e2 instanceof _0x57df74['com']['tencent']['wrbus']['pb']['BaseMsg'])
                                return _0x7e14e2;
                            var _0xa9678d = new _0x57df74['com']['tencent']['wrbus']['pb']['BaseMsg']();
                            switch (null != _0x7e14e2['id'] && (_0xa9678d['id'] = String(_0x7e14e2['id'])),
                            null != _0x7e14e2['clienttime'] && (_0x34e90a[_0x21cc('0x5b')] ? (_0xa9678d['clienttime'] = _0x34e90a['Long']['fromValue'](_0x7e14e2['clienttime']))['unsigned'] = !0x1 : 'string' == typeof _0x7e14e2['clienttime'] ? _0xa9678d['clienttime'] = parseInt(_0x7e14e2['clienttime'], 0xa) : 'number' == typeof _0x7e14e2['clienttime'] ? _0xa9678d['clienttime'] = _0x7e14e2['clienttime'] : 'object' === (0x0,
                                _0x704192['default'])(_0x7e14e2['clienttime']) && (_0xa9678d[_0x21cc('0x1f')] = new _0x34e90a['LongBits'](_0x7e14e2['clienttime'][_0x21cc('0x43')] >>> 0x0, _0x7e14e2['clienttime'][_0x21cc('0x33')] >>> 0x0)['toNumber']())),
                            null != _0x7e14e2['appversion'] && (_0xa9678d[_0x21cc('0x7f')] = String(_0x7e14e2['appversion'])),
                            null != _0x7e14e2['vid'] && (_0x34e90a['Long'] ? (_0xa9678d['vid'] = _0x34e90a['Long']['fromValue'](_0x7e14e2['vid']))[_0x21cc('0x15')] = !0x0 : _0x21cc('0x62') == typeof _0x7e14e2[_0x21cc('0x54')] ? _0xa9678d['vid'] = parseInt(_0x7e14e2['vid'], 0xa) : 'number' == typeof _0x7e14e2[_0x21cc('0x54')] ? _0xa9678d['vid'] = _0x7e14e2[_0x21cc('0x54')] : _0x21cc('0x16') === (0x0,
                                _0x704192['default'])(_0x7e14e2['vid']) && (_0xa9678d['vid'] = new _0x34e90a[(_0x21cc('0x14'))](_0x7e14e2['vid']['low'] >>> 0x0, _0x7e14e2[_0x21cc('0x54')]['high'] >>> 0x0)[_0x21cc('0x63')](!0x0))),
                                _0x7e14e2[_0x21cc('0x74')]) {
                                case _0x21cc('0x72'):
                                case 0x0:
                                    _0xa9678d['app'] = 0x0;
                                    break;
                                case 'native_app':
                                case 0x1:
                                    _0xa9678d['app'] = 0x1;
                                    break;
                                case 'html':
                                case 0x2:
                                    _0xa9678d[_0x21cc('0x74')] = 0x2;
                                    break;
                                case 'rn':
                                case 0x3:
                                    _0xa9678d['app'] = 0x3;
                                    break;
                                case 'miniprogram':
                                case 0x4:
                                    _0xa9678d['app'] = 0x4;
                                    break;
                                case 'backend':
                                case 0x5:
                                    _0xa9678d['app'] = 0x5;
                            }
                            return _0xa9678d;
                        }
                        _0x3e30fe.toObject = function (_0x4b0dfe, _0x87bb8d) {
                            _0x87bb8d || (_0x87bb8d = {});
                            var _0x30fdf6 = {};
                            if (_0x87bb8d['defaults']) {
                                if (_0x30fdf6['id'] = '',
                                    _0x34e90a[_0x21cc('0x5b')]) {
                                    var _0x32b590 = new _0x34e90a['Long'](0x0, 0x0, !0x1);
                                    _0x30fdf6['clienttime'] = _0x87bb8d['longs'] === String ? _0x32b590['toString']() : _0x87bb8d['longs'] === Number ? _0x32b590['toNumber']() : _0x32b590;
                                } else
                                    _0x30fdf6['clienttime'] = _0x87bb8d['longs'] === String ? '0' : 0x0;
                                if (_0x30fdf6['appversion'] = '',
                                    _0x34e90a['Long']) {
                                    var _0x27c1cc = new _0x34e90a['Long'](0x0, 0x0, !0x0);
                                    _0x30fdf6[_0x21cc('0x54')] = _0x87bb8d['longs'] === String ? _0x27c1cc[_0x21cc('0x1a')]() : _0x87bb8d['longs'] === Number ? _0x27c1cc['toNumber']() : _0x27c1cc;
                                } else
                                    _0x30fdf6['vid'] = _0x87bb8d['longs'] === String ? '0' : 0x0;
                                _0x30fdf6['app'] = _0x87bb8d[_0x21cc('0x47')] === String ? 'app_invalid' : 0x0;
                            }
                            return null != _0x4b0dfe['id'] && _0x4b0dfe[_0x21cc('0x5f')]('id') && (_0x30fdf6['id'] = _0x4b0dfe['id']),
                            null != _0x4b0dfe['clienttime'] && _0x4b0dfe['hasOwnProperty']('clienttime') && ('number' == typeof _0x4b0dfe['clienttime'] ? _0x30fdf6[_0x21cc('0x1f')] = _0x87bb8d['longs'] === String ? String(_0x4b0dfe['clienttime']) : _0x4b0dfe['clienttime'] : _0x30fdf6['clienttime'] = _0x87bb8d['longs'] === String ? _0x34e90a['Long']['prototype']['toString']['call'](_0x4b0dfe['clienttime']) : _0x87bb8d['longs'] === Number ? new _0x34e90a[(_0x21cc('0x14'))](_0x4b0dfe['clienttime']['low'] >>> 0x0, _0x4b0dfe['clienttime']['high'] >>> 0x0)['toNumber']() : _0x4b0dfe['clienttime']),
                            null != _0x4b0dfe['appversion'] && _0x4b0dfe[_0x21cc('0x5f')]('appversion') && (_0x30fdf6['appversion'] = _0x4b0dfe['appversion']),
                            null != _0x4b0dfe['vid'] && _0x4b0dfe[_0x21cc('0x5f')]('vid') && ('number' == typeof _0x4b0dfe['vid'] ? _0x30fdf6['vid'] = _0x87bb8d['longs'] === String ? String(_0x4b0dfe['vid']) : _0x4b0dfe['vid'] : _0x30fdf6['vid'] = _0x87bb8d[_0x21cc('0x30')] === String ? _0x34e90a['Long']['prototype']['toString']['call'](_0x4b0dfe['vid']) : _0x87bb8d['longs'] === Number ? new _0x34e90a['LongBits'](_0x4b0dfe['vid']['low'] >>> 0x0, _0x4b0dfe['vid']['high'] >>> 0x0)[_0x21cc('0x63')](!0x0) : _0x4b0dfe['vid']),
                            null != _0x4b0dfe['app'] && _0x4b0dfe['hasOwnProperty']('app') && (_0x30fdf6['app'] = _0x87bb8d['enums'] === String ? _0x57df74['com']['tencent']['wrbus']['pb']['App'][_0x4b0dfe[_0x21cc('0x74')]] : _0x4b0dfe[_0x21cc('0x74')]),
                                _0x30fdf6;
                        }
                        _0x3e30fe.prototype.toJSON = function () {
                            return this['constructor'][_0x21cc('0xa')](this, _0x3fb8a2[_0x21cc('0x6a')]['toJSONOptions']);
                        }

                        return _0x3e30fe;
                    }()
                    _pb['WrBookUploadErrorReport'] = function () {
                        function _0x39a5ce(_0x228ba0) {
                            if (_0x228ba0)
                                for (var _0x4f6806 = (0x0,
                                    _0x51625f['default'])(_0x228ba0), _0x3c7d48 = 0x0; _0x3c7d48 < _0x4f6806['length']; ++_0x3c7d48)
                                    null != _0x228ba0[_0x4f6806[_0x3c7d48]] && (this[_0x4f6806[_0x3c7d48]] = _0x228ba0[_0x4f6806[_0x3c7d48]]);
                        }

                        _0x39a5ce.prototype[_0x21cc('0x4d')] = null
                        _0x39a5ce.prototype.requestId = ''
                        _0x39a5ce[_0x21cc('0x19')]['filename'] = ''
                        _0x39a5ce[_0x21cc('0x19')][_0x21cc('0x66')] = ''
                        _0x39a5ce['prototype']['filesize'] = _0x34e90a['Long'] ? _0x34e90a['Long']['fromBits'](0x0, 0x0, !0x1) : 0x0
                        _0x39a5ce['prototype']['stage'] = ''
                        _0x39a5ce['prototype'][_0x21cc('0x52')] = ''
                        _0x39a5ce['prototype'][_0x21cc('0x6d')] = ''
                        _0x39a5ce['prototype']['err'] = 0x0
                        _0x39a5ce['prototype']['extra'] = ''
                        _0x39a5ce['create'] = function (_0x2b0c68) {
                            return new _0x39a5ce(_0x2b0c68);
                        }
                        _0x39a5ce['encode'] = function (_0x416bba, _0x19b5b0) {
                            return _0x19b5b0 || (_0x19b5b0 = _0xca25f3['create']()),
                            null != _0x416bba['baseLog'] && Object['hasOwnProperty']['call'](_0x416bba, 'baseLog') && _0x57df74['com']['tencent']['wrbus']['pb']['BaseMsg'][_0x21cc('0x3d')](_0x416bba['baseLog'], _0x19b5b0['uint32'](0xa)[_0x21cc('0x49')]())['ldelim'](),
                            null != _0x416bba['requestId'] && Object[_0x21cc('0x5f')]['call'](_0x416bba, 'requestId') && _0x19b5b0['uint32'](0x12)['string'](_0x416bba['requestId']),
                            null != _0x416bba[_0x21cc('0x21')] && Object['hasOwnProperty']['call'](_0x416bba, 'filename') && _0x19b5b0[_0x21cc('0x46')](0x1a)['string'](_0x416bba['filename']),
                            null != _0x416bba[_0x21cc('0x66')] && Object['hasOwnProperty']['call'](_0x416bba, 'filetype') && _0x19b5b0['uint32'](0x22)['string'](_0x416bba['filetype']),
                            null != _0x416bba['filesize'] && Object['hasOwnProperty']['call'](_0x416bba, 'filesize') && _0x19b5b0[_0x21cc('0x46')](0x28)['int64'](_0x416bba['filesize']),
                            null != _0x416bba[_0x21cc('0x64')] && Object['hasOwnProperty']['call'](_0x416bba, 'stage') && _0x19b5b0['uint32'](0x32)['string'](_0x416bba['stage']),
                            null != _0x416bba['errMsg'] && Object['hasOwnProperty']['call'](_0x416bba, 'errMsg') && _0x19b5b0['uint32'](0x3a)['string'](_0x416bba['errMsg']),
                            null != _0x416bba[_0x21cc('0x6d')] && Object[_0x21cc('0x5f')]['call'](_0x416bba, _0x21cc('0x6d')) && _0x19b5b0[_0x21cc('0x46')](0x42)['string'](_0x416bba['cosKey']),
                            null != _0x416bba[_0x21cc('0x1')] && Object['hasOwnProperty']['call'](_0x416bba, 'err') && _0x19b5b0['uint32'](0x48)['int32'](_0x416bba['err']),
                            null != _0x416bba['extra'] && Object['hasOwnProperty']['call'](_0x416bba, 'extra') && _0x19b5b0['uint32'](0x52)['string'](_0x416bba['extra']),
                                _0x19b5b0;
                        }
                        _0x39a5ce['encodeDelimited'] = function (_0x830dc, _0x3b72ad) {
                            return this['encode'](_0x830dc, _0x3b72ad)['ldelim']();
                        }
                        _0x39a5ce['decode'] = function (_0x2a8eb1, _0x27604e) {
                            _0x2a8eb1 instanceof _0x2594e0 || (_0x2a8eb1 = _0x2594e0['create'](_0x2a8eb1));
                            for (var _0x5c6d3c = void 0x0 === _0x27604e ? _0x2a8eb1['len'] : _0x2a8eb1['pos'] + _0x27604e, _0x552899 = new _0x57df74[(_0x21cc('0x13'))]['tencent']['wrbus']['pb'][(_0x21cc('0x24'))](); _0x2a8eb1['pos'] < _0x5c6d3c;) {
                                var _0x377ea2 = _0x2a8eb1['uint32']();
                                switch (_0x377ea2 >>> 0x3) {
                                    case 0x1:
                                        _0x552899['baseLog'] = _0x57df74['com']['tencent']['wrbus']['pb']['BaseMsg']['decode'](_0x2a8eb1, _0x2a8eb1['uint32']());
                                        break;
                                    case 0x2:
                                        _0x552899['requestId'] = _0x2a8eb1['string']();
                                        break;
                                    case 0x3:
                                        _0x552899['filename'] = _0x2a8eb1['string']();
                                        break;
                                    case 0x4:
                                        _0x552899['filetype'] = _0x2a8eb1['string']();
                                        break;
                                    case 0x5:
                                        _0x552899['filesize'] = _0x2a8eb1['int64']();
                                        break;
                                    case 0x6:
                                        _0x552899['stage'] = _0x2a8eb1['string']();
                                        break;
                                    case 0x7:
                                        _0x552899['errMsg'] = _0x2a8eb1[_0x21cc('0x62')]();
                                        break;
                                    case 0x8:
                                        _0x552899['cosKey'] = _0x2a8eb1['string']();
                                        break;
                                    case 0x9:
                                        _0x552899[_0x21cc('0x1')] = _0x2a8eb1['int32']();
                                        break;
                                    case 0xa:
                                        _0x552899[_0x21cc('0x12')] = _0x2a8eb1['string']();
                                        break;
                                    default:
                                        _0x2a8eb1['skipType'](0x7 & _0x377ea2);
                                }
                            }
                            return _0x552899;
                        }
                        _0x39a5ce['decodeDelimited'] = function (_0x4315ce) {
                            return _0x4315ce instanceof _0x2594e0 || (_0x4315ce = new _0x2594e0(_0x4315ce)),
                                this['decode'](_0x4315ce, _0x4315ce[_0x21cc('0x46')]());
                        }
                        _0x39a5ce['verify'] = function (_0x73885b) {
                            if ('object' !== (void 0x0 === _0x73885b ? 'undefined' : (0x0,
                                _0x704192[_0x21cc('0x2c')])(_0x73885b)) || null === _0x73885b)
                                return 'object\x20expected';
                            if (null != _0x73885b['baseLog'] && _0x73885b['hasOwnProperty']('baseLog')) {
                                var _0x2ee6e1 = _0x57df74['com'][_0x21cc('0x5')]['wrbus']['pb']['BaseMsg']['verify'](_0x73885b['baseLog']);
                                if (_0x2ee6e1)
                                    return 'baseLog.' + _0x2ee6e1;
                            }
                            if (null != _0x73885b['requestId'] && _0x73885b['hasOwnProperty'](_0x21cc('0x51')) && !_0x34e90a['isString'](_0x73885b['requestId']))
                                return 'requestId:\x20string\x20expected';
                            if (null != _0x73885b['filename'] && _0x73885b['hasOwnProperty']('filename') && !_0x34e90a[_0x21cc('0x9')](_0x73885b[_0x21cc('0x21')]))
                                return _0x21cc('0x7d');
                            if (null != _0x73885b['filetype'] && _0x73885b['hasOwnProperty'](_0x21cc('0x66')) && !_0x34e90a['isString'](_0x73885b['filetype']))
                                return 'filetype:\x20string\x20expected';
                            if (null != _0x73885b['filesize'] && _0x73885b['hasOwnProperty']('filesize') && !(_0x34e90a['isInteger'](_0x73885b[_0x21cc('0x37')]) || _0x73885b['filesize'] && _0x34e90a['isInteger'](_0x73885b['filesize']['low']) && _0x34e90a['isInteger'](_0x73885b['filesize']['high'])))
                                return _0x21cc('0x11');
                            if (null != _0x73885b['stage'] && _0x73885b['hasOwnProperty']('stage') && !_0x34e90a['isString'](_0x73885b[_0x21cc('0x64')]))
                                return 'stage:\x20string\x20expected';
                            if (null != _0x73885b['errMsg'] && _0x73885b['hasOwnProperty']('errMsg') && !_0x34e90a['isString'](_0x73885b[_0x21cc('0x52')]))
                                return 'errMsg:\x20string\x20expected';
                            if (null != _0x73885b[_0x21cc('0x6d')] && _0x73885b['hasOwnProperty']('cosKey') && !_0x34e90a['isString'](_0x73885b['cosKey']))
                                return 'cosKey:\x20string\x20expected';
                            if (null != _0x73885b['err'] && _0x73885b[_0x21cc('0x5f')]('err'))
                                switch (_0x73885b['err']) {
                                    default:
                                        return 'err:\x20enum\x20value\x20expected';
                                    case 0x0:
                                    case 0x1:
                                    case 0x2:
                                    case 0x3:
                                    case 0x4:
                                    case 0x5:
                                    case 0x6:
                                    case 0x7:
                                    case 0x8:
                                    case 0x9:
                                    case 0xa:
                                    case 0xb:
                                    case 0xc:
                                }
                            return null != _0x73885b['extra'] && _0x73885b['hasOwnProperty'](_0x21cc('0x12')) && !_0x34e90a['isString'](_0x73885b['extra']) ? 'extra:\x20string\x20expected' : null;
                        }
                        _0x39a5ce[_0x21cc('0x29')] = function (_0x544218) {
                            if (_0x544218 instanceof _0x57df74['com']['tencent']['wrbus']['pb']['WrBookUploadErrorReport'])
                                return _0x544218;
                            var _0x46e7b2 = new _0x57df74['com']['tencent']['wrbus']['pb'][(_0x21cc('0x24'))]();
                            if (null != _0x544218['baseLog']) {
                                if ('object' !== (0x0,
                                    _0x704192['default'])(_0x544218[_0x21cc('0x4d')]))
                                    throw TypeError(_0x21cc('0x2e'));
                                _0x46e7b2['baseLog'] = _0x57df74['com']['tencent']['wrbus']['pb']['BaseMsg']['fromObject'](_0x544218['baseLog']);
                            }
                            switch (null != _0x544218[_0x21cc('0x51')] && (_0x46e7b2['requestId'] = String(_0x544218['requestId'])),
                            null != _0x544218[_0x21cc('0x21')] && (_0x46e7b2['filename'] = String(_0x544218['filename'])),
                            null != _0x544218[_0x21cc('0x66')] && (_0x46e7b2['filetype'] = String(_0x544218['filetype'])),
                            null != _0x544218[_0x21cc('0x37')] && (_0x34e90a['Long'] ? (_0x46e7b2['filesize'] = _0x34e90a[_0x21cc('0x5b')]['fromValue'](_0x544218['filesize']))['unsigned'] = !0x1 : 'string' == typeof _0x544218[_0x21cc('0x37')] ? _0x46e7b2[_0x21cc('0x37')] = parseInt(_0x544218['filesize'], 0xa) : 'number' == typeof _0x544218[_0x21cc('0x37')] ? _0x46e7b2['filesize'] = _0x544218['filesize'] : 'object' === (0x0,
                                _0x704192['default'])(_0x544218['filesize']) && (_0x46e7b2['filesize'] = new _0x34e90a['LongBits'](_0x544218['filesize']['low'] >>> 0x0, _0x544218[_0x21cc('0x37')]['high'] >>> 0x0)[_0x21cc('0x63')]())),
                            null != _0x544218['stage'] && (_0x46e7b2['stage'] = String(_0x544218['stage'])),
                            null != _0x544218['errMsg'] && (_0x46e7b2['errMsg'] = String(_0x544218['errMsg'])),
                            null != _0x544218['cosKey'] && (_0x46e7b2['cosKey'] = String(_0x544218['cosKey'])),
                                _0x544218['err']) {
                                case 'err_unknown_unknown':
                                case 0x0:
                                    _0x46e7b2[_0x21cc('0x1')] = 0x0;
                                    break;
                                case 'err_get_credentials':
                                case 0x1:
                                    _0x46e7b2[_0x21cc('0x1')] = 0x1;
                                    break;
                                case 'err_filecheck_oversize':
                                case 0x2:
                                    _0x46e7b2['err'] = 0x2;
                                    break;
                                case 'err_filecheck_unsupported':
                                case 0x3:
                                    _0x46e7b2['err'] = 0x3;
                                    break;
                                case 'err_filecheck_empty':
                                case 0x4:
                                    _0x46e7b2['err'] = 0x4;
                                    break;
                                case 'err_upload_actively_timeout':
                                case 0x5:
                                    _0x46e7b2['err'] = 0x5;
                                    break;
                                case _0x21cc('0x3a'):
                                case 0x6:
                                    _0x46e7b2[_0x21cc('0x1')] = 0x6;
                                    break;
                                case 'err_upload_limited':
                                case 0x7:
                                    _0x46e7b2[_0x21cc('0x1')] = 0x7;
                                    break;
                                case 'err_upload_bad_network':
                                case 0x8:
                                    _0x46e7b2[_0x21cc('0x1')] = 0x8;
                                    break;
                                case 'err_upload_cos_error':
                                case 0x9:
                                    _0x46e7b2[_0x21cc('0x1')] = 0x9;
                                    break;
                                case 'err_parse_failed':
                                case 0xa:
                                    _0x46e7b2['err'] = 0xa;
                                    break;
                                case 'err_parse_bad_network':
                                case 0xb:
                                    _0x46e7b2[_0x21cc('0x1')] = 0xb;
                                    break;
                                case 'err_parse_actively_timeout':
                                case 0xc:
                                    _0x46e7b2['err'] = 0xc;
                            }
                            return null != _0x544218['extra'] && (_0x46e7b2['extra'] = String(_0x544218[_0x21cc('0x12')])),
                                _0x46e7b2;
                        }
                        _0x39a5ce['toObject'] = function (_0x43207e, _0x3b89b8) {
                            _0x3b89b8 || (_0x3b89b8 = {});
                            var _0x1bbe24 = {};
                            if (_0x3b89b8['defaults']) {
                                if (_0x1bbe24['baseLog'] = null,
                                    _0x1bbe24['requestId'] = '',
                                    _0x1bbe24['filename'] = '',
                                    _0x1bbe24['filetype'] = '',
                                    _0x34e90a['Long']) {
                                    var _0x23a534 = new _0x34e90a['Long'](0x0, 0x0, !0x1);
                                    _0x1bbe24[_0x21cc('0x37')] = _0x3b89b8[_0x21cc('0x30')] === String ? _0x23a534['toString']() : _0x3b89b8[_0x21cc('0x30')] === Number ? _0x23a534['toNumber']() : _0x23a534;
                                } else
                                    _0x1bbe24['filesize'] = _0x3b89b8['longs'] === String ? '0' : 0x0;
                                _0x1bbe24[_0x21cc('0x64')] = '',
                                    _0x1bbe24['errMsg'] = '',
                                    _0x1bbe24['cosKey'] = '',
                                    _0x1bbe24[_0x21cc('0x1')] = _0x3b89b8['enums'] === String ? _0x21cc('0x40') : 0x0,
                                    _0x1bbe24['extra'] = '';
                            }
                            return null != _0x43207e[_0x21cc('0x4d')] && _0x43207e['hasOwnProperty']('baseLog') && (_0x1bbe24['baseLog'] = _0x57df74['com']['tencent']['wrbus']['pb']['BaseMsg'][_0x21cc('0xa')](_0x43207e[_0x21cc('0x4d')], _0x3b89b8)),
                            null != _0x43207e['requestId'] && _0x43207e['hasOwnProperty']('requestId') && (_0x1bbe24['requestId'] = _0x43207e[_0x21cc('0x51')]),
                            null != _0x43207e[_0x21cc('0x21')] && _0x43207e['hasOwnProperty']('filename') && (_0x1bbe24['filename'] = _0x43207e['filename']),
                            null != _0x43207e['filetype'] && _0x43207e[_0x21cc('0x5f')]('filetype') && (_0x1bbe24['filetype'] = _0x43207e['filetype']),
                            null != _0x43207e['filesize'] && _0x43207e['hasOwnProperty']('filesize') && (_0x21cc('0x7a') == typeof _0x43207e['filesize'] ? _0x1bbe24['filesize'] = _0x3b89b8['longs'] === String ? String(_0x43207e['filesize']) : _0x43207e['filesize'] : _0x1bbe24['filesize'] = _0x3b89b8['longs'] === String ? _0x34e90a['Long']['prototype']['toString']['call'](_0x43207e['filesize']) : _0x3b89b8['longs'] === Number ? new _0x34e90a['LongBits'](_0x43207e['filesize'][_0x21cc('0x43')] >>> 0x0, _0x43207e['filesize']['high'] >>> 0x0)['toNumber']() : _0x43207e['filesize']),
                            null != _0x43207e['stage'] && _0x43207e['hasOwnProperty']('stage') && (_0x1bbe24[_0x21cc('0x64')] = _0x43207e[_0x21cc('0x64')]),
                            null != _0x43207e['errMsg'] && _0x43207e['hasOwnProperty']('errMsg') && (_0x1bbe24['errMsg'] = _0x43207e['errMsg']),
                            null != _0x43207e['cosKey'] && _0x43207e['hasOwnProperty']('cosKey') && (_0x1bbe24['cosKey'] = _0x43207e['cosKey']),
                            null != _0x43207e['err'] && _0x43207e['hasOwnProperty']('err') && (_0x1bbe24[_0x21cc('0x1')] = _0x3b89b8['enums'] === String ? _0x57df74[_0x21cc('0x13')]['tencent']['wrbus']['pb']['WrBookUploadErrorType'][_0x43207e['err']] : _0x43207e['err']),
                            null != _0x43207e['extra'] && _0x43207e['hasOwnProperty']('extra') && (_0x1bbe24['extra'] = _0x43207e['extra']),
                                _0x1bbe24;
                        }
                        _0x39a5ce['prototype']['toJSON'] = function () {
                            return this[_0x21cc('0x73')]['toObject'](this, _0x3fb8a2['util']['toJSONOptions']);
                        }

                        return _0x39a5ce;
                    }()
                    _pb['WrBookUploadErrorType'] = function () {
                        var _0x5c0a22 = {}
                            , _0x56524c = (0x0,
                            _0x51036b['default'])(_0x5c0a22);
                        return _0x56524c[_0x5c0a22[0x0] = 'err_unknown_unknown'] = 0x0,
                            _0x56524c[_0x5c0a22[0x1] = 'err_get_credentials'] = 0x1,
                            _0x56524c[_0x5c0a22[0x2] = _0x21cc('0x76')] = 0x2,
                            _0x56524c[_0x5c0a22[0x3] = 'err_filecheck_unsupported'] = 0x3,
                            _0x56524c[_0x5c0a22[0x4] = 'err_filecheck_empty'] = 0x4,
                            _0x56524c[_0x5c0a22[0x5] = 'err_upload_actively_timeout'] = 0x5,
                            _0x56524c[_0x5c0a22[0x6] = 'err_upload_shelf_full'] = 0x6,
                            _0x56524c[_0x5c0a22[0x7] = _0x21cc('0x6b')] = 0x7,
                            _0x56524c[_0x5c0a22[0x8] = 'err_upload_bad_network'] = 0x8,
                            _0x56524c[_0x5c0a22[0x9] = 'err_upload_cos_error'] = 0x9,
                            _0x56524c[_0x5c0a22[0xa] = _0x21cc('0x34')] = 0xa,
                            _0x56524c[_0x5c0a22[0xb] = 'err_parse_bad_network'] = 0xb,
                            _0x56524c[_0x5c0a22[0xc] = 'err_parse_actively_timeout'] = 0xc,
                            _0x56524c;
                    }()
                    _wrbus.pb = _pb
                    _tencent.wrbus = _wrbus
                    _com.tencent = _tencent

                    return _com
                }()
                exports.default = _0x57df74
            },
            1468: function (module, exports, require) {
                const _0x11e24e = _0x123366(require(74)),
                    _0x2d9633 = _0x123366(require(91)),
                    _0x290a4f = _0x123366(require(374));

                function _0x123366(_0x259d08) {
                    return _0x259d08 && _0x259d08[_0x21cc('0x4b')] ? _0x259d08 : {
                        'default': _0x259d08
                    };
                }

                var _0x25ffcf,
                    _app,
                    _pb = {},
                    _wrbus = {},
                    _tencent = {},
                    _com = {},
                    _0x592919 = require(1033),
                    _0x1a73b0 = _0x592919.Reader,
                    _0x24c4e1 = _0x592919.Writer,
                    _0x39aa95 = _0x592919.util,
                    _0x51e4c2 = _0x592919.roots.default || (_0x592919.roots.default = {});

                _0x25ffcf = {}
                _app = _0x290a4f.default(_0x25ffcf)
                _app[_0x25ffcf[0] = 'app_invalid'] = 0
                _app[_0x25ffcf[1] = 'native_app'] = 1
                _app[_0x25ffcf[2] = 'html'] = 2
                _app[_0x25ffcf[3] = 'rn'] = 3
                _app[_0x25ffcf[4] = 'miniprogram'] = 4
                _app[_0x25ffcf[5] = 'backend'] = 5
                _app[_0x25ffcf[6] = 'h5'] = 6
                _pb.App = _app
                _pb.BaseMsg = function () {
                    function BaseMsg(_0x59bc66) {
                        if (_0x59bc66) {
                            const _0x1092e6 = _0x2d9633.default(_0x59bc66)
                            for (let i = 0; i < _0x1092e6.length; ++i) {
                                if (null != _0x59bc66[_0x1092e6[i]]) {
                                    this[_0x1092e6[i]] = _0x59bc66[_0x1092e6[i]]
                                }
                            }
                        }
                    }

                    BaseMsg.prototype.id = ''
                    BaseMsg.prototype.clienttime = _0x39aa95.Long ? _0x39aa95.Long.fromBits(0, 0, false) : 0
                    BaseMsg.prototype.appversion = ''
                    BaseMsg.prototype.vid = _0x39aa95.Long ? _0x39aa95.Long.fromBits(0, 0, true) : 0
                    BaseMsg.prototype.app = 0
                    BaseMsg.create = function (_0x39c6b0) {
                        return new BaseMsg(_0x39c6b0);
                    }
                    BaseMsg.encode = function (_0x38e73a, _0x284c1f) {
                        return _0x284c1f || (_0x284c1f = _0x24c4e1['create']()),
                        null != _0x38e73a['id'] && Object['hasOwnProperty']['call'](_0x38e73a, 'id') && _0x284c1f['uint32'](0xa)[_0x21cc('0x62')](_0x38e73a['id']),
                        null != _0x38e73a['clienttime'] && Object['hasOwnProperty']['call'](_0x38e73a, 'clienttime') && _0x284c1f[_0x21cc('0x46')](0x10)['int64'](_0x38e73a[_0x21cc('0x1f')]),
                        null != _0x38e73a['appversion'] && Object['hasOwnProperty']['call'](_0x38e73a, _0x21cc('0x7f')) && _0x284c1f['uint32'](0x1a)['string'](_0x38e73a[_0x21cc('0x7f')]),
                        null != _0x38e73a['vid'] && Object['hasOwnProperty']['call'](_0x38e73a, 'vid') && _0x284c1f['uint32'](0x20)['uint64'](_0x38e73a['vid']),
                        null != _0x38e73a['app'] && Object['hasOwnProperty']['call'](_0x38e73a, 'app') && _0x284c1f['uint32'](0x28)['int32'](_0x38e73a[_0x21cc('0x74')]),
                            _0x284c1f;
                    }
                    BaseMsg.encodeDelimited = function (_0x43c024, _0x52d604) {
                        return this[_0x21cc('0x3d')](_0x43c024, _0x52d604)['ldelim']();
                    }
                    BaseMsg.decode = function (_0x6187d5, _0x3dac48) {
                        _0x6187d5 instanceof _0x1a73b0 || (_0x6187d5 = _0x1a73b0['create'](_0x6187d5));
                        for (var _0x5a1ac2 = void 0x0 === _0x3dac48 ? _0x6187d5['len'] : _0x6187d5['pos'] + _0x3dac48, _0x14ba14 = new _0x51e4c2['com'][(_0x21cc('0x5'))]['wrbus']['pb']['BaseMsg'](); _0x6187d5['pos'] < _0x5a1ac2;) {
                            var _0x136768 = _0x6187d5['uint32']();
                            switch (_0x136768 >>> 0x3) {
                                case 0x1:
                                    _0x14ba14['id'] = _0x6187d5['string']();
                                    break;
                                case 0x2:
                                    _0x14ba14[_0x21cc('0x1f')] = _0x6187d5['int64']();
                                    break;
                                case 0x3:
                                    _0x14ba14['appversion'] = _0x6187d5['string']();
                                    break;
                                case 0x4:
                                    _0x14ba14['vid'] = _0x6187d5[_0x21cc('0x55')]();
                                    break;
                                case 0x5:
                                    _0x14ba14['app'] = _0x6187d5['int32']();
                                    break;
                                default:
                                    _0x6187d5[_0x21cc('0x70')](0x7 & _0x136768);
                            }
                        }
                        return _0x14ba14;
                    }
                    BaseMsg.decodeDelimited = function (_0x5c29de) {
                        return _0x5c29de instanceof _0x1a73b0 || (_0x5c29de = new _0x1a73b0(_0x5c29de)),
                            this['decode'](_0x5c29de, _0x5c29de['uint32']());
                    }
                    BaseMsg.verify = function (_0x3d92f0) {
                        if (_0x21cc('0x16') !== (void 0x0 === _0x3d92f0 ? 'undefined' : (0x0,
                            _0x11e24e['default'])(_0x3d92f0)) || null === _0x3d92f0)
                            return 'object\x20expected';
                        if (null != _0x3d92f0['id'] && _0x3d92f0[_0x21cc('0x5f')]('id') && !_0x39aa95['isString'](_0x3d92f0['id']))
                            return 'id:\x20string\x20expected';
                        if (null != _0x3d92f0['clienttime'] && _0x3d92f0['hasOwnProperty']('clienttime') && !(_0x39aa95['isInteger'](_0x3d92f0[_0x21cc('0x1f')]) || _0x3d92f0[_0x21cc('0x1f')] && _0x39aa95['isInteger'](_0x3d92f0['clienttime']['low']) && _0x39aa95['isInteger'](_0x3d92f0['clienttime']['high'])))
                            return 'clienttime:\x20integer|Long\x20expected';
                        if (null != _0x3d92f0['appversion'] && _0x3d92f0['hasOwnProperty']('appversion') && !_0x39aa95['isString'](_0x3d92f0[_0x21cc('0x7f')]))
                            return 'appversion:\x20string\x20expected';
                        if (null != _0x3d92f0['vid'] && _0x3d92f0['hasOwnProperty'](_0x21cc('0x54')) && !(_0x39aa95['isInteger'](_0x3d92f0['vid']) || _0x3d92f0['vid'] && _0x39aa95[_0x21cc('0x41')](_0x3d92f0['vid'][_0x21cc('0x43')]) && _0x39aa95[_0x21cc('0x41')](_0x3d92f0['vid']['high'])))
                            return 'vid:\x20integer|Long\x20expected';
                        if (null != _0x3d92f0['app'] && _0x3d92f0[_0x21cc('0x5f')]('app'))
                            switch (_0x3d92f0['app']) {
                                default:
                                    return 'app:\x20enum\x20value\x20expected';
                                case 0x0:
                                case 0x1:
                                case 0x2:
                                case 0x3:
                                case 0x4:
                                case 0x5:
                                case 0x6:
                            }
                        return null;
                    }
                    BaseMsg.fromObject = function (_0x25f818) {
                        if (_0x25f818 instanceof _0x51e4c2[_0x21cc('0x13')]['tencent'][_0x21cc('0x50')]['pb']['BaseMsg'])
                            return _0x25f818;
                        var _0x4fb938 = new _0x51e4c2['com'][(_0x21cc('0x5'))]['wrbus']['pb'][(_0x21cc('0x20'))]();
                        switch (null != _0x25f818['id'] && (_0x4fb938['id'] = String(_0x25f818['id'])),
                        null != _0x25f818['clienttime'] && (_0x39aa95['Long'] ? (_0x4fb938['clienttime'] = _0x39aa95['Long']['fromValue'](_0x25f818[_0x21cc('0x1f')]))['unsigned'] = !0x1 : _0x21cc('0x62') == typeof _0x25f818['clienttime'] ? _0x4fb938['clienttime'] = parseInt(_0x25f818[_0x21cc('0x1f')], 0xa) : 'number' == typeof _0x25f818['clienttime'] ? _0x4fb938['clienttime'] = _0x25f818[_0x21cc('0x1f')] : 'object' === (0x0,
                            _0x11e24e['default'])(_0x25f818['clienttime']) && (_0x4fb938['clienttime'] = new _0x39aa95['LongBits'](_0x25f818['clienttime'][_0x21cc('0x43')] >>> 0x0, _0x25f818['clienttime']['high'] >>> 0x0)['toNumber']())),
                        null != _0x25f818['appversion'] && (_0x4fb938['appversion'] = String(_0x25f818['appversion'])),
                        null != _0x25f818['vid'] && (_0x39aa95[_0x21cc('0x5b')] ? (_0x4fb938['vid'] = _0x39aa95['Long']['fromValue'](_0x25f818['vid']))['unsigned'] = !0x0 : 'string' == typeof _0x25f818['vid'] ? _0x4fb938['vid'] = parseInt(_0x25f818['vid'], 0xa) : 'number' == typeof _0x25f818['vid'] ? _0x4fb938['vid'] = _0x25f818['vid'] : 'object' === (0x0,
                            _0x11e24e['default'])(_0x25f818[_0x21cc('0x54')]) && (_0x4fb938['vid'] = new _0x39aa95['LongBits'](_0x25f818['vid']['low'] >>> 0x0, _0x25f818['vid']['high'] >>> 0x0)['toNumber'](!0x0))),
                            _0x25f818['app']) {
                            case 'app_invalid':
                            case 0x0:
                                _0x4fb938['app'] = 0x0;
                                break;
                            case 'native_app':
                            case 0x1:
                                _0x4fb938['app'] = 0x1;
                                break;
                            case 'html':
                            case 0x2:
                                _0x4fb938['app'] = 0x2;
                                break;
                            case 'rn':
                            case 0x3:
                                _0x4fb938['app'] = 0x3;
                                break;
                            case 'miniprogram':
                            case 0x4:
                                _0x4fb938['app'] = 0x4;
                                break;
                            case 'backend':
                            case 0x5:
                                _0x4fb938[_0x21cc('0x74')] = 0x5;
                                break;
                            case 'h5':
                            case 0x6:
                                _0x4fb938['app'] = 0x6;
                        }
                        return _0x4fb938;
                    }
                    BaseMsg.toObject = function (_0x1f041d, _0x542787) {
                        _0x542787 || (_0x542787 = {});
                        var _0x2d2549 = {};
                        if (_0x542787['defaults']) {
                            if (_0x2d2549['id'] = '',
                                _0x39aa95[_0x21cc('0x5b')]) {
                                var _0x4f0cab = new _0x39aa95['Long'](0x0, 0x0, !0x1);
                                _0x2d2549['clienttime'] = _0x542787['longs'] === String ? _0x4f0cab['toString']() : _0x542787['longs'] === Number ? _0x4f0cab['toNumber']() : _0x4f0cab;
                            } else
                                _0x2d2549['clienttime'] = _0x542787['longs'] === String ? '0' : 0x0;
                            _0x2d2549['appversion'] = '',
                                _0x39aa95['Long'] ? (_0x4f0cab = new _0x39aa95['Long'](0x0, 0x0, !0x0),
                                    _0x2d2549[_0x21cc('0x54')] = _0x542787['longs'] === String ? _0x4f0cab['toString']() : _0x542787[_0x21cc('0x30')] === Number ? _0x4f0cab['toNumber']() : _0x4f0cab) : _0x2d2549['vid'] = _0x542787['longs'] === String ? '0' : 0x0,
                                _0x2d2549[_0x21cc('0x74')] = _0x542787[_0x21cc('0x47')] === String ? _0x21cc('0x72') : 0x0;
                        }
                        return null != _0x1f041d['id'] && _0x1f041d['hasOwnProperty']('id') && (_0x2d2549['id'] = _0x1f041d['id']),
                        null != _0x1f041d['clienttime'] && _0x1f041d['hasOwnProperty']('clienttime') && ('number' == typeof _0x1f041d['clienttime'] ? _0x2d2549['clienttime'] = _0x542787['longs'] === String ? String(_0x1f041d['clienttime']) : _0x1f041d['clienttime'] : _0x2d2549[_0x21cc('0x1f')] = _0x542787['longs'] === String ? _0x39aa95[_0x21cc('0x5b')]['prototype']['toString'][_0x21cc('0xb')](_0x1f041d['clienttime']) : _0x542787['longs'] === Number ? new _0x39aa95['LongBits'](_0x1f041d['clienttime']['low'] >>> 0x0, _0x1f041d['clienttime']['high'] >>> 0x0)['toNumber']() : _0x1f041d['clienttime']),
                        null != _0x1f041d['appversion'] && _0x1f041d['hasOwnProperty']('appversion') && (_0x2d2549['appversion'] = _0x1f041d['appversion']),
                        null != _0x1f041d['vid'] && _0x1f041d['hasOwnProperty']('vid') && ('number' == typeof _0x1f041d['vid'] ? _0x2d2549['vid'] = _0x542787['longs'] === String ? String(_0x1f041d['vid']) : _0x1f041d['vid'] : _0x2d2549[_0x21cc('0x54')] = _0x542787['longs'] === String ? _0x39aa95['Long']['prototype']['toString']['call'](_0x1f041d['vid']) : _0x542787[_0x21cc('0x30')] === Number ? new _0x39aa95['LongBits'](_0x1f041d['vid']['low'] >>> 0x0, _0x1f041d['vid']['high'] >>> 0x0)['toNumber'](!0x0) : _0x1f041d[_0x21cc('0x54')]),
                        null != _0x1f041d['app'] && _0x1f041d['hasOwnProperty'](_0x21cc('0x74')) && (_0x2d2549['app'] = _0x542787['enums'] === String ? _0x51e4c2['com'][_0x21cc('0x5')]['wrbus']['pb']['App'][_0x1f041d['app']] : _0x1f041d['app']),
                            _0x2d2549;
                    }
                    BaseMsg.prototype.toJSON = function () {
                        return this['constructor']['toObject'](this, _0x592919['util']['toJSONOptions']);
                    }

                    return BaseMsg
                }()
                _pb.WrCommonFatalReport = function () {
                    function _0x200149(_0x779194) {
                        if (_0x779194)
                            for (var _0x1388cd = (0x0,
                                _0x2d9633[_0x21cc('0x2c')])(_0x779194), _0x1313a9 = 0x0; _0x1313a9 < _0x1388cd['length']; ++_0x1313a9)
                                null != _0x779194[_0x1388cd[_0x1313a9]] && (this[_0x1388cd[_0x1313a9]] = _0x779194[_0x1388cd[_0x1313a9]]);
                    }

                    return _0x200149['prototype'][_0x21cc('0x4d')] = null,
                        _0x200149['prototype']['service'] = '',
                        _0x200149['prototype'][_0x21cc('0x4e')] = '',
                        _0x200149['prototype']['code'] = '',
                        _0x200149['prototype'][_0x21cc('0x7e')] = '',
                        _0x200149['prototype']['commonValue1'] = '',
                        _0x200149['prototype']['commonValue2'] = '',
                        _0x200149['create'] = function (_0x4406ca) {
                            return new _0x200149(_0x4406ca);
                        }
                        ,
                        _0x200149[_0x21cc('0x3d')] = function (_0x5df980, _0x31f4cb) {
                            return _0x31f4cb || (_0x31f4cb = _0x24c4e1['create']()),
                            null != _0x5df980['baseLog'] && Object['hasOwnProperty']['call'](_0x5df980, 'baseLog') && _0x51e4c2[_0x21cc('0x13')]['tencent'][_0x21cc('0x50')]['pb']['BaseMsg']['encode'](_0x5df980[_0x21cc('0x4d')], _0x31f4cb['uint32'](0xa)['fork']())['ldelim'](),
                            null != _0x5df980[_0x21cc('0x3')] && Object['hasOwnProperty']['call'](_0x5df980, 'service') && _0x31f4cb['uint32'](0x12)['string'](_0x5df980['service']),
                            null != _0x5df980['function'] && Object['hasOwnProperty']['call'](_0x5df980, 'function') && _0x31f4cb['uint32'](0x1a)[_0x21cc('0x62')](_0x5df980['function']),
                            null != _0x5df980['code'] && Object['hasOwnProperty']['call'](_0x5df980, _0x21cc('0xc')) && _0x31f4cb['uint32'](0x22)['string'](_0x5df980[_0x21cc('0xc')]),
                            null != _0x5df980['message'] && Object['hasOwnProperty']['call'](_0x5df980, 'message') && _0x31f4cb['uint32'](0x2a)['string'](_0x5df980['message']),
                            null != _0x5df980['commonValue1'] && Object['hasOwnProperty']['call'](_0x5df980, _0x21cc('0x31')) && _0x31f4cb['uint32'](0x32)['string'](_0x5df980['commonValue1']),
                            null != _0x5df980[_0x21cc('0x5c')] && Object['hasOwnProperty']['call'](_0x5df980, 'commonValue2') && _0x31f4cb['uint32'](0x3a)['string'](_0x5df980['commonValue2']),
                                _0x31f4cb;
                        }
                        ,
                        _0x200149[_0x21cc('0x7c')] = function (_0x4bc952, _0x44244a) {
                            return this[_0x21cc('0x3d')](_0x4bc952, _0x44244a)['ldelim']();
                        }
                        ,
                        _0x200149['decode'] = function (_0xa6e0b9, _0x2deb64) {
                            _0xa6e0b9 instanceof _0x1a73b0 || (_0xa6e0b9 = _0x1a73b0['create'](_0xa6e0b9));
                            for (var _0x52e823 = void 0x0 === _0x2deb64 ? _0xa6e0b9['len'] : _0xa6e0b9['pos'] + _0x2deb64, _0x385524 = new _0x51e4c2[(_0x21cc('0x13'))]['tencent']['wrbus']['pb'][(_0x21cc('0x78'))](); _0xa6e0b9['pos'] < _0x52e823;) {
                                var _0x956a9 = _0xa6e0b9[_0x21cc('0x46')]();
                                switch (_0x956a9 >>> 0x3) {
                                    case 0x1:
                                        _0x385524[_0x21cc('0x4d')] = _0x51e4c2['com']['tencent']['wrbus']['pb']['BaseMsg']['decode'](_0xa6e0b9, _0xa6e0b9['uint32']());
                                        break;
                                    case 0x2:
                                        _0x385524['service'] = _0xa6e0b9[_0x21cc('0x62')]();
                                        break;
                                    case 0x3:
                                        _0x385524['function'] = _0xa6e0b9['string']();
                                        break;
                                    case 0x4:
                                        _0x385524['code'] = _0xa6e0b9['string']();
                                        break;
                                    case 0x5:
                                        _0x385524['message'] = _0xa6e0b9[_0x21cc('0x62')]();
                                        break;
                                    case 0x6:
                                        _0x385524['commonValue1'] = _0xa6e0b9['string']();
                                        break;
                                    case 0x7:
                                        _0x385524['commonValue2'] = _0xa6e0b9['string']();
                                        break;
                                    default:
                                        _0xa6e0b9['skipType'](0x7 & _0x956a9);
                                }
                            }
                            return _0x385524;
                        }
                        ,
                        _0x200149['decodeDelimited'] = function (_0x34f43f) {
                            return _0x34f43f instanceof _0x1a73b0 || (_0x34f43f = new _0x1a73b0(_0x34f43f)),
                                this['decode'](_0x34f43f, _0x34f43f['uint32']());
                        }
                        ,
                        _0x200149['verify'] = function (_0x596160) {
                            if (_0x21cc('0x16') !== (void 0x0 === _0x596160 ? _0x21cc('0x3b') : (0x0,
                                _0x11e24e['default'])(_0x596160)) || null === _0x596160)
                                return 'object\x20expected';
                            if (null != _0x596160['baseLog'] && _0x596160['hasOwnProperty']('baseLog')) {
                                var _0x2cee70 = _0x51e4c2['com']['tencent']['wrbus']['pb']['BaseMsg']['verify'](_0x596160[_0x21cc('0x4d')]);
                                if (_0x2cee70)
                                    return 'baseLog.' + _0x2cee70;
                            }
                            return null != _0x596160['service'] && _0x596160['hasOwnProperty']('service') && !_0x39aa95['isString'](_0x596160['service']) ? 'service:\x20string\x20expected' : null != _0x596160['function'] && _0x596160['hasOwnProperty']('function') && !_0x39aa95['isString'](_0x596160['function']) ? 'function:\x20string\x20expected' : null != _0x596160['code'] && _0x596160[_0x21cc('0x5f')]('code') && !_0x39aa95[_0x21cc('0x9')](_0x596160['code']) ? _0x21cc('0x59') : null != _0x596160['message'] && _0x596160[_0x21cc('0x5f')]('message') && !_0x39aa95[_0x21cc('0x9')](_0x596160['message']) ? 'message:\x20string\x20expected' : null != _0x596160[_0x21cc('0x31')] && _0x596160['hasOwnProperty']('commonValue1') && !_0x39aa95['isString'](_0x596160['commonValue1']) ? 'commonValue1:\x20string\x20expected' : null != _0x596160['commonValue2'] && _0x596160['hasOwnProperty']('commonValue2') && !_0x39aa95['isString'](_0x596160['commonValue2']) ? _0x21cc('0x80') : null;
                        }
                        ,
                        _0x200149['fromObject'] = function (_0x445d41) {
                            if (_0x445d41 instanceof _0x51e4c2['com'][_0x21cc('0x5')][_0x21cc('0x50')]['pb']['WrCommonFatalReport'])
                                return _0x445d41;
                            var _0x53b2f7 = new _0x51e4c2['com']['tencent']['wrbus']['pb']['WrCommonFatalReport']();
                            if (null != _0x445d41['baseLog']) {
                                if ('object' !== (0x0,
                                    _0x11e24e['default'])(_0x445d41['baseLog']))
                                    throw TypeError('.com.tencent.wrbus.pb.WrCommonFatalReport.baseLog:\x20object\x20expected');
                                _0x53b2f7[_0x21cc('0x4d')] = _0x51e4c2['com'][_0x21cc('0x5')]['wrbus']['pb']['BaseMsg']['fromObject'](_0x445d41['baseLog']);
                            }
                            return null != _0x445d41['service'] && (_0x53b2f7[_0x21cc('0x3')] = String(_0x445d41['service'])),
                            null != _0x445d41['function'] && (_0x53b2f7['function'] = String(_0x445d41['function'])),
                            null != _0x445d41['code'] && (_0x53b2f7[_0x21cc('0xc')] = String(_0x445d41[_0x21cc('0xc')])),
                            null != _0x445d41['message'] && (_0x53b2f7['message'] = String(_0x445d41['message'])),
                            null != _0x445d41['commonValue1'] && (_0x53b2f7[_0x21cc('0x31')] = String(_0x445d41['commonValue1'])),
                            null != _0x445d41['commonValue2'] && (_0x53b2f7['commonValue2'] = String(_0x445d41['commonValue2'])),
                                _0x53b2f7;
                        }
                        ,
                        _0x200149[_0x21cc('0xa')] = function (_0x337e18, _0x496d65) {
                            _0x496d65 || (_0x496d65 = {});
                            var _0x2dd405 = {};
                            return _0x496d65['defaults'] && (_0x2dd405[_0x21cc('0x4d')] = null,
                                _0x2dd405['service'] = '',
                                _0x2dd405['function'] = '',
                                _0x2dd405['code'] = '',
                                _0x2dd405['message'] = '',
                                _0x2dd405['commonValue1'] = '',
                                _0x2dd405[_0x21cc('0x5c')] = ''),
                            null != _0x337e18['baseLog'] && _0x337e18['hasOwnProperty'](_0x21cc('0x4d')) && (_0x2dd405['baseLog'] = _0x51e4c2['com']['tencent'][_0x21cc('0x50')]['pb']['BaseMsg'][_0x21cc('0xa')](_0x337e18[_0x21cc('0x4d')], _0x496d65)),
                            null != _0x337e18['service'] && _0x337e18['hasOwnProperty']('service') && (_0x2dd405[_0x21cc('0x3')] = _0x337e18['service']),
                            null != _0x337e18['function'] && _0x337e18['hasOwnProperty']('function') && (_0x2dd405['function'] = _0x337e18['function']),
                            null != _0x337e18[_0x21cc('0xc')] && _0x337e18['hasOwnProperty']('code') && (_0x2dd405['code'] = _0x337e18['code']),
                            null != _0x337e18['message'] && _0x337e18['hasOwnProperty']('message') && (_0x2dd405['message'] = _0x337e18['message']),
                            null != _0x337e18['commonValue1'] && _0x337e18['hasOwnProperty']('commonValue1') && (_0x2dd405['commonValue1'] = _0x337e18['commonValue1']),
                            null != _0x337e18['commonValue2'] && _0x337e18['hasOwnProperty']('commonValue2') && (_0x2dd405[_0x21cc('0x5c')] = _0x337e18['commonValue2']),
                                _0x2dd405;
                        }
                        ,
                        _0x200149['prototype']['toJSON'] = function () {
                            return this['constructor']['toObject'](this, _0x592919['util'][_0x21cc('0x27')]);
                        }
                        ,
                        _0x200149;
                }()
                _wrbus.pb = _pb
                _tencent.wrbus = _wrbus
                _com.tencent = _tencent
                _0x51e4c2.com = _com
                module.exports = _0x51e4c2;
            },
            1469: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                exports.default = exports.com = undefined;

                var _0x14b762 = _0x2f5eb4(require(74)),
                    _0x10fe76 = _0x2f5eb4(require(91)),
                    _0x3da30b = _0x2f5eb4(require(374)),
                    _0x3d62c2 = function (_exports) {
                        if (_exports && _exports.__esModule) {
                            return _exports
                        }

                        const _0x649ee5 = {};
                        if (null != _exports) {
                            for (const key in _exports) {
                                if (Object.prototype.hasOwnProperty.call(_exports, key)) {
                                    _0x649ee5[key] = _exports[key]
                                }
                            }
                        }
                        _0x649ee5.default = _exports
                        return _0x649ee5;
                    }(require(1033))

                function _0x2f5eb4(_exports) {
                    return _exports && _exports.__esModule ? _exports : {
                        'default': _exports
                    };
                }

                var _0x2fee8a = _0x3d62c2.Reader,
                    _0x2f5dbe = _0x3d62c2.Writer,
                    _0x3e1a83 = _0x3d62c2.util,
                    _0x179489 = _0x3d62c2.roots.default || (_0x3d62c2.roots.default = {});

                exports.com = _0x179489.com = function () {
                    var _0x1c6162,
                        _app,
                        _pb = {},
                        _wrbus = {},
                        _tencent = {},
                        _0x3b095e = {};

                    _0x1c6162 = {}
                    _app = _0x3da30b.default(_0x1c6162)
                    _app[_0x1c6162[0] = 'app_invalid'] = 0
                    _app[_0x1c6162[1] = 'native_app'] = 1
                    _app[_0x1c6162[2] = 'html'] = 2
                    _app[_0x1c6162[3] = 'rn'] = 3
                    _app[_0x1c6162[4] = 'miniprogram'] = 4
                    _app[_0x1c6162[5] = 'backend'] = 5

                    _pb.App = _app
                    _pb.BaseMsg = function () {
                        function BaseMsg(_0x198d87) {
                            if (_0x198d87) {
                                const _0x3709f4 = _0x10fe76.default(_0x198d87)
                                for (let i = 0; i < _0x3709f4.length; ++i) {
                                    if (null != _0x198d87[_0x3709f4[i]]) {
                                        this[_0x3709f4[i]] = _0x198d87[_0x3709f4[i]]
                                    }
                                }
                            }
                        }

                        BaseMsg.prototype.id = ''
                        BaseMsg.prototype.clienttime = _0x3e1a83.Long ? _0x3e1a83.Long.fromBits(0, 0, false) : 0
                        BaseMsg.prototype.appversion = ''
                        BaseMsg.prototype.vid = _0x3e1a83.Long ? _0x3e1a83.Long.fromBits(0, 0, true) : 0
                        BaseMsg.prototype.app = 0
                        BaseMsg.create = function (_0x5aaad6) {
                            return new BaseMsg(_0x5aaad6);
                        }
                        BaseMsg.encode = function (_0x3d9d5a, _0x1f8232) {
                            return _0x1f8232 || (_0x1f8232 = _0x2f5dbe['create']()),
                            null != _0x3d9d5a['id'] && Object['hasOwnProperty']['call'](_0x3d9d5a, 'id') && _0x1f8232['uint32'](0xa)['string'](_0x3d9d5a['id']),
                            null != _0x3d9d5a['clienttime'] && Object['hasOwnProperty']['call'](_0x3d9d5a, 'clienttime') && _0x1f8232['uint32'](0x10)[_0x21cc('0x3e')](_0x3d9d5a[_0x21cc('0x1f')]),
                            null != _0x3d9d5a['appversion'] && Object['hasOwnProperty']['call'](_0x3d9d5a, 'appversion') && _0x1f8232['uint32'](0x1a)['string'](_0x3d9d5a['appversion']),
                            null != _0x3d9d5a['vid'] && Object['hasOwnProperty']['call'](_0x3d9d5a, 'vid') && _0x1f8232['uint32'](0x20)['uint64'](_0x3d9d5a['vid']),
                            null != _0x3d9d5a['app'] && Object['hasOwnProperty'][_0x21cc('0xb')](_0x3d9d5a, 'app') && _0x1f8232[_0x21cc('0x46')](0x28)['int32'](_0x3d9d5a['app']),
                                _0x1f8232;
                        }
                        BaseMsg.encodeDelimited = function (_0x51a286, _0x2d6f58) {
                            return this['encode'](_0x51a286, _0x2d6f58)['ldelim']();
                        }
                        BaseMsg.decode = function (_0x4e5a87, _0x337cc1) {
                            _0x4e5a87 instanceof _0x2fee8a || (_0x4e5a87 = _0x2fee8a['create'](_0x4e5a87));
                            for (var _0x452be4 = void 0x0 === _0x337cc1 ? _0x4e5a87[_0x21cc('0x4f')] : _0x4e5a87['pos'] + _0x337cc1, _0x258054 = new _0x179489['com']['tencent'][(_0x21cc('0x50'))]['pb']['BaseMsg'](); _0x4e5a87['pos'] < _0x452be4;) {
                                var _0x2189e9 = _0x4e5a87['uint32']();
                                switch (_0x2189e9 >>> 0x3) {
                                    case 0x1:
                                        _0x258054['id'] = _0x4e5a87[_0x21cc('0x62')]();
                                        break;
                                    case 0x2:
                                        _0x258054[_0x21cc('0x1f')] = _0x4e5a87['int64']();
                                        break;
                                    case 0x3:
                                        _0x258054[_0x21cc('0x7f')] = _0x4e5a87['string']();
                                        break;
                                    case 0x4:
                                        _0x258054[_0x21cc('0x54')] = _0x4e5a87[_0x21cc('0x55')]();
                                        break;
                                    case 0x5:
                                        _0x258054['app'] = _0x4e5a87['int32']();
                                        break;
                                    default:
                                        _0x4e5a87[_0x21cc('0x70')](0x7 & _0x2189e9);
                                }
                            }
                            return _0x258054;
                        }
                        BaseMsg.decodeDelimited = function (_0x49eb00) {
                            return _0x49eb00 instanceof _0x2fee8a || (_0x49eb00 = new _0x2fee8a(_0x49eb00)),
                                this[_0x21cc('0x23')](_0x49eb00, _0x49eb00['uint32']());
                        }
                        BaseMsg.verify = function (_0xa86df0) {
                            if ('object' !== (void 0x0 === _0xa86df0 ? _0x21cc('0x3b') : (0x0,
                                _0x14b762['default'])(_0xa86df0)) || null === _0xa86df0)
                                return 'object\x20expected';
                            if (null != _0xa86df0['id'] && _0xa86df0['hasOwnProperty']('id') && !_0x3e1a83[_0x21cc('0x9')](_0xa86df0['id']))
                                return 'id:\x20string\x20expected';
                            if (null != _0xa86df0['clienttime'] && _0xa86df0['hasOwnProperty']('clienttime') && !(_0x3e1a83['isInteger'](_0xa86df0[_0x21cc('0x1f')]) || _0xa86df0['clienttime'] && _0x3e1a83['isInteger'](_0xa86df0['clienttime'][_0x21cc('0x43')]) && _0x3e1a83['isInteger'](_0xa86df0['clienttime']['high'])))
                                return 'clienttime:\x20integer|Long\x20expected';
                            if (null != _0xa86df0['appversion'] && _0xa86df0['hasOwnProperty']('appversion') && !_0x3e1a83[_0x21cc('0x9')](_0xa86df0['appversion']))
                                return 'appversion:\x20string\x20expected';
                            if (null != _0xa86df0[_0x21cc('0x54')] && _0xa86df0[_0x21cc('0x5f')]('vid') && !(_0x3e1a83['isInteger'](_0xa86df0['vid']) || _0xa86df0['vid'] && _0x3e1a83['isInteger'](_0xa86df0[_0x21cc('0x54')]['low']) && _0x3e1a83[_0x21cc('0x41')](_0xa86df0['vid']['high'])))
                                return _0x21cc('0x36');
                            if (null != _0xa86df0['app'] && _0xa86df0['hasOwnProperty']('app'))
                                switch (_0xa86df0['app']) {
                                    default:
                                        return 'app:\x20enum\x20value\x20expected';
                                    case 0x0:
                                    case 0x1:
                                    case 0x2:
                                    case 0x3:
                                    case 0x4:
                                    case 0x5:
                                }
                            return null;
                        }
                        BaseMsg.fromObject = function (_0x19b27e) {
                            if (_0x19b27e instanceof _0x179489['com']['tencent']['wrbus']['pb']['BaseMsg'])
                                return _0x19b27e;
                            var _0x375974 = new _0x179489[(_0x21cc('0x13'))]['tencent']['wrbus']['pb']['BaseMsg']();
                            switch (null != _0x19b27e['id'] && (_0x375974['id'] = String(_0x19b27e['id'])),
                            null != _0x19b27e['clienttime'] && (_0x3e1a83['Long'] ? (_0x375974[_0x21cc('0x1f')] = _0x3e1a83[_0x21cc('0x5b')]['fromValue'](_0x19b27e['clienttime']))['unsigned'] = !0x1 : 'string' == typeof _0x19b27e['clienttime'] ? _0x375974['clienttime'] = parseInt(_0x19b27e['clienttime'], 0xa) : 'number' == typeof _0x19b27e['clienttime'] ? _0x375974['clienttime'] = _0x19b27e['clienttime'] : 'object' === (0x0,
                                _0x14b762[_0x21cc('0x2c')])(_0x19b27e['clienttime']) && (_0x375974['clienttime'] = new _0x3e1a83['LongBits'](_0x19b27e['clienttime']['low'] >>> 0x0, _0x19b27e[_0x21cc('0x1f')]['high'] >>> 0x0)['toNumber']())),
                            null != _0x19b27e['appversion'] && (_0x375974['appversion'] = String(_0x19b27e['appversion'])),
                            null != _0x19b27e['vid'] && (_0x3e1a83['Long'] ? (_0x375974['vid'] = _0x3e1a83['Long']['fromValue'](_0x19b27e[_0x21cc('0x54')]))[_0x21cc('0x15')] = !0x0 : 'string' == typeof _0x19b27e['vid'] ? _0x375974['vid'] = parseInt(_0x19b27e['vid'], 0xa) : 'number' == typeof _0x19b27e['vid'] ? _0x375974['vid'] = _0x19b27e['vid'] : 'object' === (0x0,
                                _0x14b762[_0x21cc('0x2c')])(_0x19b27e['vid']) && (_0x375974[_0x21cc('0x54')] = new _0x3e1a83['LongBits'](_0x19b27e['vid'][_0x21cc('0x43')] >>> 0x0, _0x19b27e['vid']['high'] >>> 0x0)[_0x21cc('0x63')](!0x0))),
                                _0x19b27e['app']) {
                                case 'app_invalid':
                                case 0x0:
                                    _0x375974['app'] = 0x0;
                                    break;
                                case _0x21cc('0x77'):
                                case 0x1:
                                    _0x375974['app'] = 0x1;
                                    break;
                                case 'html':
                                case 0x2:
                                    _0x375974['app'] = 0x2;
                                    break;
                                case 'rn':
                                case 0x3:
                                    _0x375974['app'] = 0x3;
                                    break;
                                case 'miniprogram':
                                case 0x4:
                                    _0x375974['app'] = 0x4;
                                    break;
                                case 'backend':
                                case 0x5:
                                    _0x375974['app'] = 0x5;
                            }
                            return _0x375974;
                        }
                        BaseMsg.toObject = function (_0x35e39, _0x645213) {
                            _0x645213 || (_0x645213 = {});
                            var _0x3dd320 = {};
                            if (_0x645213[_0x21cc('0x67')]) {
                                if (_0x3dd320['id'] = '',
                                    _0x3e1a83['Long']) {
                                    var _0xfb2080 = new _0x3e1a83['Long'](0x0, 0x0, !0x1);
                                    _0x3dd320[_0x21cc('0x1f')] = _0x645213['longs'] === String ? _0xfb2080['toString']() : _0x645213['longs'] === Number ? _0xfb2080['toNumber']() : _0xfb2080;
                                } else
                                    _0x3dd320['clienttime'] = _0x645213['longs'] === String ? '0' : 0x0;
                                if (_0x3dd320['appversion'] = '',
                                    _0x3e1a83[_0x21cc('0x5b')]) {
                                    var _0x3fc74a = new _0x3e1a83['Long'](0x0, 0x0, !0x0);
                                    _0x3dd320['vid'] = _0x645213['longs'] === String ? _0x3fc74a['toString']() : _0x645213['longs'] === Number ? _0x3fc74a[_0x21cc('0x63')]() : _0x3fc74a;
                                } else
                                    _0x3dd320['vid'] = _0x645213[_0x21cc('0x30')] === String ? '0' : 0x0;
                                _0x3dd320['app'] = _0x645213['enums'] === String ? _0x21cc('0x72') : 0x0;
                            }
                            return null != _0x35e39['id'] && _0x35e39['hasOwnProperty']('id') && (_0x3dd320['id'] = _0x35e39['id']),
                            null != _0x35e39['clienttime'] && _0x35e39['hasOwnProperty']('clienttime') && ('number' == typeof _0x35e39['clienttime'] ? _0x3dd320['clienttime'] = _0x645213[_0x21cc('0x30')] === String ? String(_0x35e39['clienttime']) : _0x35e39[_0x21cc('0x1f')] : _0x3dd320['clienttime'] = _0x645213[_0x21cc('0x30')] === String ? _0x3e1a83['Long']['prototype'][_0x21cc('0x1a')]['call'](_0x35e39['clienttime']) : _0x645213['longs'] === Number ? new _0x3e1a83['LongBits'](_0x35e39['clienttime']['low'] >>> 0x0, _0x35e39['clienttime']['high'] >>> 0x0)['toNumber']() : _0x35e39['clienttime']),
                            null != _0x35e39['appversion'] && _0x35e39['hasOwnProperty']('appversion') && (_0x3dd320['appversion'] = _0x35e39[_0x21cc('0x7f')]),
                            null != _0x35e39[_0x21cc('0x54')] && _0x35e39['hasOwnProperty'](_0x21cc('0x54')) && ('number' == typeof _0x35e39['vid'] ? _0x3dd320['vid'] = _0x645213['longs'] === String ? String(_0x35e39['vid']) : _0x35e39['vid'] : _0x3dd320['vid'] = _0x645213['longs'] === String ? _0x3e1a83['Long']['prototype']['toString']['call'](_0x35e39['vid']) : _0x645213['longs'] === Number ? new _0x3e1a83['LongBits'](_0x35e39['vid']['low'] >>> 0x0, _0x35e39['vid']['high'] >>> 0x0)[_0x21cc('0x63')](!0x0) : _0x35e39['vid']),
                            null != _0x35e39['app'] && _0x35e39['hasOwnProperty']('app') && (_0x3dd320[_0x21cc('0x74')] = _0x645213['enums'] === String ? _0x179489[_0x21cc('0x13')][_0x21cc('0x5')][_0x21cc('0x50')]['pb']['App'][_0x35e39[_0x21cc('0x74')]] : _0x35e39[_0x21cc('0x74')]),
                                _0x3dd320;
                        }
                        BaseMsg.prototype.toJSON = function () {
                            return this['constructor']['toObject'](this, _0x3d62c2['util']['toJSONOptions']);
                        }

                        return BaseMsg
                    }()
                    _pb.WrNoteAction = function () {
                        var _0x57a7c6 = {}
                            , _0x397a8d = (0x0,
                            _0x3da30b['default'])(_0x57a7c6);
                        return _0x397a8d[_0x57a7c6[0x0] = 'wr_note_action_invalid'] = 0x0,
                            _0x397a8d[_0x57a7c6[0x1] = _0x21cc('0x1e')] = 0x1,
                            _0x397a8d[_0x57a7c6[0x2] = 'wr_note_action_exposure_item'] = 0x2,
                            _0x397a8d[_0x57a7c6[0x3] = 'wr_note_action_click_item'] = 0x3,
                            _0x397a8d[_0x57a7c6[0x4] = 'wr_note_action_click_digest_mode'] = 0x4,
                            _0x397a8d[_0x57a7c6[0x5] = 'wr_note_action_click_output'] = 0x5,
                            _0x397a8d[_0x57a7c6[0x6] = 'wr_note_action_click_book_detail'] = 0x6,
                            _0x397a8d[_0x57a7c6[0x7] = _0x21cc('0x10')] = 0x7,
                            _0x397a8d[_0x57a7c6[0x8] = 'wr_note_action_filter'] = 0x8,
                            _0x397a8d[_0x57a7c6[0x9] = 'wr_note_action_delete'] = 0x9,
                            _0x397a8d[_0x57a7c6[0xa] = 'wr_note_action_click_digest'] = 0xa,
                            _0x397a8d[_0x57a7c6[0xb] = 'wr_note_action_share'] = 0xb,
                            _0x397a8d[_0x57a7c6[0xc] = 'wr_note_action_switch_type'] = 0xc,
                            _0x397a8d[_0x57a7c6[0xd] = 'wr_note_action_dowload'] = 0xd,
                            _0x397a8d[_0x57a7c6[0xe] = 'wr_note_action_move_to_next_book'] = 0xe,
                            _0x397a8d[_0x57a7c6[0xf] = 'wr_note_action_copy'] = 0xf,
                            _0x397a8d[_0x57a7c6[0x10] = _0x21cc('0x38')] = 0x10,
                            _0x397a8d[_0x57a7c6[0x11] = 'wr_note_action_output_pc'] = 0x11,
                            _0x397a8d;
                    }()
                    _pb.WrNoteActionReport = function () {
                        function _0x3e1fdd(_0x556db3) {
                            if (_0x556db3)
                                for (var _0x740841 = (0x0,
                                    _0x10fe76['default'])(_0x556db3), _0x5da9c4 = 0x0; _0x5da9c4 < _0x740841['length']; ++_0x5da9c4)
                                    null != _0x556db3[_0x740841[_0x5da9c4]] && (this[_0x740841[_0x5da9c4]] = _0x556db3[_0x740841[_0x5da9c4]]);
                        }

                        return _0x3e1fdd['prototype']['baseLog'] = null,
                            _0x3e1fdd['prototype'][_0x21cc('0x7')] = 0x0,
                            _0x3e1fdd['prototype']['action'] = 0x0,
                            _0x3e1fdd['prototype']['bookid'] = '',
                            _0x3e1fdd['prototype']['reviewid'] = '',
                            _0x3e1fdd['prototype']['actionContext'] = '',
                            _0x3e1fdd['prototype'][_0x21cc('0x22')] = '',
                            _0x3e1fdd[_0x21cc('0x61')] = function (_0x3e8bdf) {
                                return new _0x3e1fdd(_0x3e8bdf);
                            }
                            ,
                            _0x3e1fdd['encode'] = function (_0xf39c11, _0x24872a) {
                                return _0x24872a || (_0x24872a = _0x2f5dbe['create']()),
                                null != _0xf39c11['baseLog'] && Object[_0x21cc('0x5f')]['call'](_0xf39c11, 'baseLog') && _0x179489['com']['tencent']['wrbus']['pb'][_0x21cc('0x20')]['encode'](_0xf39c11[_0x21cc('0x4d')], _0x24872a[_0x21cc('0x46')](0xa)['fork']())['ldelim'](),
                                null != _0xf39c11['scene'] && Object['hasOwnProperty']['call'](_0xf39c11, _0x21cc('0x7')) && _0x24872a[_0x21cc('0x46')](0x10)['int32'](_0xf39c11['scene']),
                                null != _0xf39c11['action'] && Object[_0x21cc('0x5f')]['call'](_0xf39c11, 'action') && _0x24872a['uint32'](0x18)['int32'](_0xf39c11[_0x21cc('0x17')]),
                                null != _0xf39c11[_0x21cc('0x2d')] && Object['hasOwnProperty']['call'](_0xf39c11, 'bookid') && _0x24872a['uint32'](0x22)['string'](_0xf39c11['bookid']),
                                null != _0xf39c11['reviewid'] && Object['hasOwnProperty']['call'](_0xf39c11, 'reviewid') && _0x24872a['uint32'](0x2a)['string'](_0xf39c11['reviewid']),
                                null != _0xf39c11['actionContext'] && Object[_0x21cc('0x5f')][_0x21cc('0xb')](_0xf39c11, 'actionContext') && _0x24872a['uint32'](0x32)[_0x21cc('0x62')](_0xf39c11[_0x21cc('0x58')]),
                                null != _0xf39c11['bookmarkid'] && Object['hasOwnProperty']['call'](_0xf39c11, _0x21cc('0x22')) && _0x24872a['uint32'](0x3a)['string'](_0xf39c11['bookmarkid']),
                                    _0x24872a;
                            }
                            ,
                            _0x3e1fdd[_0x21cc('0x7c')] = function (_0x485c0f, _0x1b4748) {
                                return this['encode'](_0x485c0f, _0x1b4748)[_0x21cc('0x2b')]();
                            }
                            ,
                            _0x3e1fdd['decode'] = function (_0xbfe068, _0x135a0c) {
                                _0xbfe068 instanceof _0x2fee8a || (_0xbfe068 = _0x2fee8a['create'](_0xbfe068));
                                for (var _0x108f23 = void 0x0 === _0x135a0c ? _0xbfe068['len'] : _0xbfe068['pos'] + _0x135a0c, _0x8c74b5 = new _0x179489['com']['tencent']['wrbus']['pb']['WrNoteActionReport'](); _0xbfe068['pos'] < _0x108f23;) {
                                    var _0x3979d9 = _0xbfe068['uint32']();
                                    switch (_0x3979d9 >>> 0x3) {
                                        case 0x1:
                                            _0x8c74b5['baseLog'] = _0x179489['com']['tencent']['wrbus']['pb']['BaseMsg']['decode'](_0xbfe068, _0xbfe068['uint32']());
                                            break;
                                        case 0x2:
                                            _0x8c74b5['scene'] = _0xbfe068['int32']();
                                            break;
                                        case 0x3:
                                            _0x8c74b5['action'] = _0xbfe068['int32']();
                                            break;
                                        case 0x4:
                                            _0x8c74b5['bookid'] = _0xbfe068['string']();
                                            break;
                                        case 0x5:
                                            _0x8c74b5['reviewid'] = _0xbfe068['string']();
                                            break;
                                        case 0x6:
                                            _0x8c74b5['actionContext'] = _0xbfe068['string']();
                                            break;
                                        case 0x7:
                                            _0x8c74b5['bookmarkid'] = _0xbfe068['string']();
                                            break;
                                        default:
                                            _0xbfe068[_0x21cc('0x70')](0x7 & _0x3979d9);
                                    }
                                }
                                return _0x8c74b5;
                            }
                            ,
                            _0x3e1fdd[_0x21cc('0x1b')] = function (_0x67431d) {
                                return _0x67431d instanceof _0x2fee8a || (_0x67431d = new _0x2fee8a(_0x67431d)),
                                    this['decode'](_0x67431d, _0x67431d['uint32']());
                            }
                            ,
                            _0x3e1fdd['verify'] = function (_0x14c512) {
                                if (_0x21cc('0x16') !== (void 0x0 === _0x14c512 ? 'undefined' : (0x0,
                                    _0x14b762[_0x21cc('0x2c')])(_0x14c512)) || null === _0x14c512)
                                    return _0x21cc('0x35');
                                if (null != _0x14c512['baseLog'] && _0x14c512['hasOwnProperty']('baseLog')) {
                                    var _0x4392e7 = _0x179489['com']['tencent']['wrbus']['pb']['BaseMsg'][_0x21cc('0x7b')](_0x14c512['baseLog']);
                                    if (_0x4392e7)
                                        return 'baseLog.' + _0x4392e7;
                                }
                                if (null != _0x14c512['scene'] && _0x14c512['hasOwnProperty']('scene'))
                                    switch (_0x14c512['scene']) {
                                        default:
                                            return 'scene:\x20enum\x20value\x20expected';
                                        case 0x0:
                                        case 0x1:
                                        case 0x2:
                                        case 0x3:
                                        case 0x4:
                                        case 0x5:
                                    }
                                if (null != _0x14c512['action'] && _0x14c512[_0x21cc('0x5f')]('action'))
                                    switch (_0x14c512['action']) {
                                        default:
                                            return _0x21cc('0x6c');
                                        case 0x0:
                                        case 0x1:
                                        case 0x2:
                                        case 0x3:
                                        case 0x4:
                                        case 0x5:
                                        case 0x6:
                                        case 0x7:
                                        case 0x8:
                                        case 0x9:
                                        case 0xa:
                                        case 0xb:
                                        case 0xc:
                                        case 0xd:
                                        case 0xe:
                                        case 0xf:
                                        case 0x10:
                                        case 0x11:
                                    }
                                return null != _0x14c512['bookid'] && _0x14c512['hasOwnProperty'](_0x21cc('0x2d')) && !_0x3e1a83['isString'](_0x14c512['bookid']) ? 'bookid:\x20string\x20expected' : null != _0x14c512[_0x21cc('0x53')] && _0x14c512['hasOwnProperty']('reviewid') && !_0x3e1a83['isString'](_0x14c512['reviewid']) ? 'reviewid:\x20string\x20expected' : null != _0x14c512[_0x21cc('0x58')] && _0x14c512['hasOwnProperty'](_0x21cc('0x58')) && !_0x3e1a83['isString'](_0x14c512['actionContext']) ? 'actionContext:\x20string\x20expected' : null != _0x14c512['bookmarkid'] && _0x14c512[_0x21cc('0x5f')](_0x21cc('0x22')) && !_0x3e1a83['isString'](_0x14c512['bookmarkid']) ? _0x21cc('0x69') : null;
                            }
                            ,
                            _0x3e1fdd['fromObject'] = function (_0xf39855) {
                                if (_0xf39855 instanceof _0x179489['com']['tencent']['wrbus']['pb']['WrNoteActionReport'])
                                    return _0xf39855;
                                var _0x3c62dc = new _0x179489['com']['tencent'][(_0x21cc('0x50'))]['pb']['WrNoteActionReport']();
                                if (null != _0xf39855['baseLog']) {
                                    if ('object' !== (0x0,
                                        _0x14b762[_0x21cc('0x2c')])(_0xf39855[_0x21cc('0x4d')]))
                                        throw TypeError('.com.tencent.wrbus.pb.WrNoteActionReport.baseLog:\x20object\x20expected');
                                    _0x3c62dc[_0x21cc('0x4d')] = _0x179489['com']['tencent']['wrbus']['pb']['BaseMsg']['fromObject'](_0xf39855['baseLog']);
                                }
                                switch (_0xf39855['scene']) {
                                    case 'wr_note_scene_invalid':
                                    case 0x0:
                                        _0x3c62dc['scene'] = 0x0;
                                        break;
                                    case 'wr_note_scene_note_list':
                                    case 0x1:
                                        _0x3c62dc['scene'] = 0x1;
                                        break;
                                    case 'wr_note_scene_note_detail':
                                    case 0x2:
                                        _0x3c62dc['scene'] = 0x2;
                                        break;
                                    case 'wr_note_scene_note_digest':
                                    case 0x3:
                                        _0x3c62dc[_0x21cc('0x7')] = 0x3;
                                        break;
                                    case 'wr_note_scene_note_reader_detail':
                                    case 0x4:
                                        _0x3c62dc['scene'] = 0x4;
                                        break;
                                    case 'wr_note_scene_note_web_page':
                                    case 0x5:
                                        _0x3c62dc['scene'] = 0x5;
                                }
                                switch (_0xf39855['action']) {
                                    case 'wr_note_action_invalid':
                                    case 0x0:
                                        _0x3c62dc['action'] = 0x0;
                                        break;
                                    case _0x21cc('0x1e'):
                                    case 0x1:
                                        _0x3c62dc['action'] = 0x1;
                                        break;
                                    case 'wr_note_action_exposure_item':
                                    case 0x2:
                                        _0x3c62dc['action'] = 0x2;
                                        break;
                                    case 'wr_note_action_click_item':
                                    case 0x3:
                                        _0x3c62dc['action'] = 0x3;
                                        break;
                                    case 'wr_note_action_click_digest_mode':
                                    case 0x4:
                                        _0x3c62dc['action'] = 0x4;
                                        break;
                                    case _0x21cc('0x4'):
                                    case 0x5:
                                        _0x3c62dc[_0x21cc('0x17')] = 0x5;
                                        break;
                                    case _0x21cc('0x39'):
                                    case 0x6:
                                        _0x3c62dc['action'] = 0x6;
                                        break;
                                    case 'wr_note_action_click_read_report':
                                    case 0x7:
                                        _0x3c62dc['action'] = 0x7;
                                        break;
                                    case _0x21cc('0x3c'):
                                    case 0x8:
                                        _0x3c62dc['action'] = 0x8;
                                        break;
                                    case 'wr_note_action_delete':
                                    case 0x9:
                                        _0x3c62dc['action'] = 0x9;
                                        break;
                                    case 'wr_note_action_click_digest':
                                    case 0xa:
                                        _0x3c62dc['action'] = 0xa;
                                        break;
                                    case 'wr_note_action_share':
                                    case 0xb:
                                        _0x3c62dc[_0x21cc('0x17')] = 0xb;
                                        break;
                                    case 'wr_note_action_switch_type':
                                    case 0xc:
                                        _0x3c62dc['action'] = 0xc;
                                        break;
                                    case 'wr_note_action_dowload':
                                    case 0xd:
                                        _0x3c62dc['action'] = 0xd;
                                        break;
                                    case 'wr_note_action_move_to_next_book':
                                    case 0xe:
                                        _0x3c62dc[_0x21cc('0x17')] = 0xe;
                                        break;
                                    case 'wr_note_action_copy':
                                    case 0xf:
                                        _0x3c62dc['action'] = 0xf;
                                        break;
                                    case 'wr_note_action_output_pdf':
                                    case 0x10:
                                        _0x3c62dc['action'] = 0x10;
                                        break;
                                    case 'wr_note_action_output_pc':
                                    case 0x11:
                                        _0x3c62dc['action'] = 0x11;
                                }
                                return null != _0xf39855['bookid'] && (_0x3c62dc[_0x21cc('0x2d')] = String(_0xf39855['bookid'])),
                                null != _0xf39855['reviewid'] && (_0x3c62dc[_0x21cc('0x53')] = String(_0xf39855['reviewid'])),
                                null != _0xf39855['actionContext'] && (_0x3c62dc[_0x21cc('0x58')] = String(_0xf39855['actionContext'])),
                                null != _0xf39855[_0x21cc('0x22')] && (_0x3c62dc['bookmarkid'] = String(_0xf39855['bookmarkid'])),
                                    _0x3c62dc;
                            }
                            ,
                            _0x3e1fdd['toObject'] = function (_0x473940, _0x1b65e0) {
                                _0x1b65e0 || (_0x1b65e0 = {});
                                var _0x377812 = {};
                                return _0x1b65e0['defaults'] && (_0x377812[_0x21cc('0x4d')] = null,
                                    _0x377812['scene'] = _0x1b65e0['enums'] === String ? 'wr_note_scene_invalid' : 0x0,
                                    _0x377812[_0x21cc('0x17')] = _0x1b65e0['enums'] === String ? 'wr_note_action_invalid' : 0x0,
                                    _0x377812[_0x21cc('0x2d')] = '',
                                    _0x377812['reviewid'] = '',
                                    _0x377812[_0x21cc('0x58')] = '',
                                    _0x377812[_0x21cc('0x22')] = ''),
                                null != _0x473940['baseLog'] && _0x473940['hasOwnProperty']('baseLog') && (_0x377812['baseLog'] = _0x179489['com']['tencent']['wrbus']['pb']['BaseMsg']['toObject'](_0x473940['baseLog'], _0x1b65e0)),
                                null != _0x473940[_0x21cc('0x7')] && _0x473940['hasOwnProperty'](_0x21cc('0x7')) && (_0x377812['scene'] = _0x1b65e0['enums'] === String ? _0x179489['com']['tencent']['wrbus']['pb']['WrNoteScene'][_0x473940['scene']] : _0x473940[_0x21cc('0x7')]),
                                null != _0x473940['action'] && _0x473940[_0x21cc('0x5f')]('action') && (_0x377812['action'] = _0x1b65e0['enums'] === String ? _0x179489[_0x21cc('0x13')]['tencent']['wrbus']['pb']['WrNoteAction'][_0x473940['action']] : _0x473940['action']),
                                null != _0x473940['bookid'] && _0x473940['hasOwnProperty'](_0x21cc('0x2d')) && (_0x377812['bookid'] = _0x473940['bookid']),
                                null != _0x473940['reviewid'] && _0x473940['hasOwnProperty']('reviewid') && (_0x377812['reviewid'] = _0x473940['reviewid']),
                                null != _0x473940['actionContext'] && _0x473940['hasOwnProperty']('actionContext') && (_0x377812['actionContext'] = _0x473940[_0x21cc('0x58')]),
                                null != _0x473940['bookmarkid'] && _0x473940['hasOwnProperty']('bookmarkid') && (_0x377812['bookmarkid'] = _0x473940['bookmarkid']),
                                    _0x377812;
                            }
                            ,
                            _0x3e1fdd['prototype']['toJSON'] = function () {
                                return this['constructor']['toObject'](this, _0x3d62c2[_0x21cc('0x6a')]['toJSONOptions']);
                            }
                            ,
                            _0x3e1fdd;
                    }()
                    _pb.WrNoteScene = function () {
                        var _0x26db44 = {}
                            , _0x11e8de = (0x0,
                            _0x3da30b['default'])(_0x26db44);
                        return _0x11e8de[_0x26db44[0x0] = 'wr_note_scene_invalid'] = 0x0,
                            _0x11e8de[_0x26db44[0x1] = _0x21cc('0x45')] = 0x1,
                            _0x11e8de[_0x26db44[0x2] = 'wr_note_scene_note_detail'] = 0x2,
                            _0x11e8de[_0x26db44[0x3] = 'wr_note_scene_note_digest'] = 0x3,
                            _0x11e8de[_0x26db44[0x4] = _0x21cc('0xe')] = 0x4,
                            _0x11e8de[_0x26db44[0x5] = 'wr_note_scene_note_web_page'] = 0x5,
                            _0x11e8de;
                    }()
                    _wrbus.pb = _pb
                    _tencent.wrbus = _wrbus
                    _0x3b095e.tencent = _tencent
                    return _0x3b095e
                }()
                exports.default = _0x179489
            },
            1470: function (module, exports, require) {
                Object.defineProperty(exports, '__esModule', {value: true})

                exports.default = exports.com = undefined

                var _0x4fc257 = _0x39b5ce(require(74)),
                    _0x11ae3d = _0x39b5ce(require(91)),
                    _0x4dc9ca = _0x39b5ce(require(374)),
                    _0x525c76 = function (_exports) {
                        if (_exports && _exports.__esModule) {
                            return _exports
                        }

                        const _0x5a86c9 = {};
                        if (null != _exports) {
                            for (const key in _exports) {
                                if (Object.prototype.hasOwnProperty.call(_exports, key)) {
                                    _0x5a86c9[key] = _exports[key]
                                }
                            }
                        }
                        _0x5a86c9.default = _exports
                        return _0x5a86c9
                    }(require(1033))

                function _0x39b5ce(_exports) {
                    return _exports && _exports.__esModule ? _exports : {
                        'default': _exports
                    }
                }

                var _0x2c16fe = _0x525c76.Reader,
                    _0x4d4cab = _0x525c76.Writer,
                    _0x38b92f = _0x525c76.util,
                    _0x1f3e92 = _0x525c76.roots.default || (_0x525c76.roots.default = {})

                exports.com = _0x1f3e92.com = function () {
                    var _0x17c85d,
                        _app,
                        _0x3fb74a = {},
                        _wrbus = {},
                        _tencent = {},
                        _0x47c7f3 = {};

                    _0x17c85d = {}
                    _app = _0x4dc9ca.default(_0x17c85d)
                    _app[_0x17c85d[0] = 'app_invalid'] = 0
                    _app[_0x17c85d[1] = 'native_app'] = 1
                    _app[_0x17c85d[2] = 'html'] = 2
                    _app[_0x17c85d[3] = 'rn'] = 3
                    _app[_0x17c85d[4] = 'miniprogram'] = 4
                    _app[_0x17c85d[5] = 'backend'] = 5
                    _app[_0x17c85d[6] = 'h5'] = 6
                    _0x3fb74a.App = _app
                    _0x3fb74a.BaseMsg = function () {
                        function BaseMsg(_0x210362) {
                            if (_0x210362)
                                for (var _0x349db3 = (0x0,
                                    _0x11ae3d['default'])(_0x210362), _0x44a127 = 0x0; _0x44a127 < _0x349db3['length']; ++_0x44a127)
                                    null != _0x210362[_0x349db3[_0x44a127]] && (this[_0x349db3[_0x44a127]] = _0x210362[_0x349db3[_0x44a127]]);
                        }

                        BaseMsg.prototype.id = ''
                        BaseMsg.prototype.clienttime = _0x38b92f.Long ? _0x38b92f.Long.fromBits(0, 0, false) : 0
                        BaseMsg.prototype.appversion = ''
                        BaseMsg.prototype.vid = _0x38b92f.Long ? _0x38b92f.Long.fromBits(0, 0, true) : 0
                        BaseMsg.prototype.app = 0
                        BaseMsg.create = function (_0xf51337) {
                            return new BaseMsg(_0xf51337);
                        }
                        BaseMsg.encode = function (_0x55a46c, _0x3b5d1c) {
                            return _0x3b5d1c || (_0x3b5d1c = _0x4d4cab['create']()),
                            null != _0x55a46c['id'] && Object['hasOwnProperty'][_0x21cc('0xb')](_0x55a46c, 'id') && _0x3b5d1c['uint32'](0xa)[_0x21cc('0x62')](_0x55a46c['id']),
                            null != _0x55a46c['clienttime'] && Object['hasOwnProperty']['call'](_0x55a46c, 'clienttime') && _0x3b5d1c['uint32'](0x10)['int64'](_0x55a46c['clienttime']),
                            null != _0x55a46c['appversion'] && Object[_0x21cc('0x5f')]['call'](_0x55a46c, 'appversion') && _0x3b5d1c['uint32'](0x1a)[_0x21cc('0x62')](_0x55a46c[_0x21cc('0x7f')]),
                            null != _0x55a46c['vid'] && Object['hasOwnProperty'][_0x21cc('0xb')](_0x55a46c, 'vid') && _0x3b5d1c['uint32'](0x20)[_0x21cc('0x55')](_0x55a46c['vid']),
                            null != _0x55a46c['app'] && Object['hasOwnProperty']['call'](_0x55a46c, 'app') && _0x3b5d1c['uint32'](0x28)['int32'](_0x55a46c[_0x21cc('0x74')]),
                                _0x3b5d1c;
                        }
                        BaseMsg.encodeDelimited = function (_0x5bb624, _0x399b25) {
                            return this['encode'](_0x5bb624, _0x399b25)['ldelim']();
                        }
                        BaseMsg.decode = function (_0x5e65e1, _0x5eade4) {
                            _0x5e65e1 instanceof _0x2c16fe || (_0x5e65e1 = _0x2c16fe['create'](_0x5e65e1));
                            for (var _0x1030d1 = void 0x0 === _0x5eade4 ? _0x5e65e1[_0x21cc('0x4f')] : _0x5e65e1['pos'] + _0x5eade4, _0x144d2c = new _0x1f3e92[(_0x21cc('0x13'))]['tencent']['wrbus']['pb']['BaseMsg'](); _0x5e65e1['pos'] < _0x1030d1;) {
                                var _0xbd6d08 = _0x5e65e1[_0x21cc('0x46')]();
                                switch (_0xbd6d08 >>> 0x3) {
                                    case 0x1:
                                        _0x144d2c['id'] = _0x5e65e1['string']();
                                        break;
                                    case 0x2:
                                        _0x144d2c['clienttime'] = _0x5e65e1[_0x21cc('0x3e')]();
                                        break;
                                    case 0x3:
                                        _0x144d2c['appversion'] = _0x5e65e1[_0x21cc('0x62')]();
                                        break;
                                    case 0x4:
                                        _0x144d2c['vid'] = _0x5e65e1['uint64']();
                                        break;
                                    case 0x5:
                                        _0x144d2c['app'] = _0x5e65e1[_0x21cc('0x25')]();
                                        break;
                                    default:
                                        _0x5e65e1['skipType'](0x7 & _0xbd6d08);
                                }
                            }
                            return _0x144d2c;
                        }
                        BaseMsg.decodeDelimited = function (_0x164bdf) {
                            return _0x164bdf instanceof _0x2c16fe || (_0x164bdf = new _0x2c16fe(_0x164bdf)),
                                this['decode'](_0x164bdf, _0x164bdf['uint32']());
                        }
                        BaseMsg.verify = function (_0x59d3b6) {
                            if ('object' !== (void 0x0 === _0x59d3b6 ? 'undefined' : (0x0,
                                _0x4fc257['default'])(_0x59d3b6)) || null === _0x59d3b6)
                                return 'object\x20expected';
                            if (null != _0x59d3b6['id'] && _0x59d3b6['hasOwnProperty']('id') && !_0x38b92f[_0x21cc('0x9')](_0x59d3b6['id']))
                                return 'id:\x20string\x20expected';
                            if (null != _0x59d3b6['clienttime'] && _0x59d3b6['hasOwnProperty'](_0x21cc('0x1f')) && !(_0x38b92f['isInteger'](_0x59d3b6[_0x21cc('0x1f')]) || _0x59d3b6['clienttime'] && _0x38b92f['isInteger'](_0x59d3b6[_0x21cc('0x1f')][_0x21cc('0x43')]) && _0x38b92f['isInteger'](_0x59d3b6['clienttime']['high'])))
                                return _0x21cc('0x6');
                            if (null != _0x59d3b6['appversion'] && _0x59d3b6['hasOwnProperty'](_0x21cc('0x7f')) && !_0x38b92f['isString'](_0x59d3b6['appversion']))
                                return _0x21cc('0x8');
                            if (null != _0x59d3b6['vid'] && _0x59d3b6['hasOwnProperty']('vid') && !(_0x38b92f['isInteger'](_0x59d3b6['vid']) || _0x59d3b6[_0x21cc('0x54')] && _0x38b92f[_0x21cc('0x41')](_0x59d3b6['vid']['low']) && _0x38b92f[_0x21cc('0x41')](_0x59d3b6['vid']['high'])))
                                return 'vid:\x20integer|Long\x20expected';
                            if (null != _0x59d3b6['app'] && _0x59d3b6['hasOwnProperty']('app'))
                                switch (_0x59d3b6[_0x21cc('0x74')]) {
                                    default:
                                        return _0x21cc('0x6f');
                                    case 0x0:
                                    case 0x1:
                                    case 0x2:
                                    case 0x3:
                                    case 0x4:
                                    case 0x5:
                                    case 0x6:
                                }
                            return null;
                        }
                        BaseMsg.fromObject = function (_0x35a54d) {
                            if (_0x35a54d instanceof _0x1f3e92['com']['tencent']['wrbus']['pb']['BaseMsg'])
                                return _0x35a54d;
                            var _0x4886f2 = new _0x1f3e92['com']['tencent']['wrbus']['pb']['BaseMsg']();
                            switch (null != _0x35a54d['id'] && (_0x4886f2['id'] = String(_0x35a54d['id'])),
                            null != _0x35a54d['clienttime'] && (_0x38b92f[_0x21cc('0x5b')] ? (_0x4886f2['clienttime'] = _0x38b92f['Long']['fromValue'](_0x35a54d['clienttime']))['unsigned'] = !0x1 : 'string' == typeof _0x35a54d['clienttime'] ? _0x4886f2['clienttime'] = parseInt(_0x35a54d['clienttime'], 0xa) : 'number' == typeof _0x35a54d['clienttime'] ? _0x4886f2['clienttime'] = _0x35a54d['clienttime'] : 'object' === (0x0,
                                _0x4fc257[_0x21cc('0x2c')])(_0x35a54d['clienttime']) && (_0x4886f2['clienttime'] = new _0x38b92f['LongBits'](_0x35a54d[_0x21cc('0x1f')][_0x21cc('0x43')] >>> 0x0, _0x35a54d['clienttime']['high'] >>> 0x0)[_0x21cc('0x63')]())),
                            null != _0x35a54d['appversion'] && (_0x4886f2['appversion'] = String(_0x35a54d['appversion'])),
                            null != _0x35a54d[_0x21cc('0x54')] && (_0x38b92f['Long'] ? (_0x4886f2['vid'] = _0x38b92f['Long'][_0x21cc('0x26')](_0x35a54d['vid']))['unsigned'] = !0x0 : _0x21cc('0x62') == typeof _0x35a54d['vid'] ? _0x4886f2[_0x21cc('0x54')] = parseInt(_0x35a54d['vid'], 0xa) : 'number' == typeof _0x35a54d['vid'] ? _0x4886f2['vid'] = _0x35a54d['vid'] : _0x21cc('0x16') === (0x0,
                                _0x4fc257['default'])(_0x35a54d['vid']) && (_0x4886f2[_0x21cc('0x54')] = new _0x38b92f['LongBits'](_0x35a54d['vid'][_0x21cc('0x43')] >>> 0x0, _0x35a54d['vid']['high'] >>> 0x0)[_0x21cc('0x63')](!0x0))),
                                _0x35a54d['app']) {
                                case 'app_invalid':
                                case 0x0:
                                    _0x4886f2['app'] = 0x0;
                                    break;
                                case 'native_app':
                                case 0x1:
                                    _0x4886f2['app'] = 0x1;
                                    break;
                                case 'html':
                                case 0x2:
                                    _0x4886f2['app'] = 0x2;
                                    break;
                                case 'rn':
                                case 0x3:
                                    _0x4886f2['app'] = 0x3;
                                    break;
                                case 'miniprogram':
                                case 0x4:
                                    _0x4886f2['app'] = 0x4;
                                    break;
                                case 'backend':
                                case 0x5:
                                    _0x4886f2[_0x21cc('0x74')] = 0x5;
                                    break;
                                case 'h5':
                                case 0x6:
                                    _0x4886f2['app'] = 0x6;
                            }
                            return _0x4886f2;
                        }
                        BaseMsg.toObject = function (_0x3f2c5a, _0x36aee3) {
                            _0x36aee3 || (_0x36aee3 = {});
                            var _0x453e50 = {};
                            if (_0x36aee3['defaults']) {
                                if (_0x453e50['id'] = '',
                                    _0x38b92f['Long']) {
                                    var _0x6d040d = new _0x38b92f[(_0x21cc('0x5b'))](0x0, 0x0, !0x1);
                                    _0x453e50['clienttime'] = _0x36aee3['longs'] === String ? _0x6d040d['toString']() : _0x36aee3['longs'] === Number ? _0x6d040d['toNumber']() : _0x6d040d;
                                } else
                                    _0x453e50['clienttime'] = _0x36aee3['longs'] === String ? '0' : 0x0;
                                if (_0x453e50['appversion'] = '',
                                    _0x38b92f[_0x21cc('0x5b')]) {
                                    var _0x1d160f = new _0x38b92f['Long'](0x0, 0x0, !0x0);
                                    _0x453e50['vid'] = _0x36aee3['longs'] === String ? _0x1d160f['toString']() : _0x36aee3['longs'] === Number ? _0x1d160f['toNumber']() : _0x1d160f;
                                } else
                                    _0x453e50['vid'] = _0x36aee3['longs'] === String ? '0' : 0x0;
                                _0x453e50['app'] = _0x36aee3[_0x21cc('0x47')] === String ? _0x21cc('0x72') : 0x0;
                            }
                            return null != _0x3f2c5a['id'] && _0x3f2c5a['hasOwnProperty']('id') && (_0x453e50['id'] = _0x3f2c5a['id']),
                            null != _0x3f2c5a['clienttime'] && _0x3f2c5a['hasOwnProperty']('clienttime') && ('number' == typeof _0x3f2c5a[_0x21cc('0x1f')] ? _0x453e50['clienttime'] = _0x36aee3[_0x21cc('0x30')] === String ? String(_0x3f2c5a['clienttime']) : _0x3f2c5a['clienttime'] : _0x453e50['clienttime'] = _0x36aee3['longs'] === String ? _0x38b92f[_0x21cc('0x5b')]['prototype'][_0x21cc('0x1a')][_0x21cc('0xb')](_0x3f2c5a['clienttime']) : _0x36aee3['longs'] === Number ? new _0x38b92f[(_0x21cc('0x14'))](_0x3f2c5a['clienttime']['low'] >>> 0x0, _0x3f2c5a['clienttime']['high'] >>> 0x0)['toNumber']() : _0x3f2c5a['clienttime']),
                            null != _0x3f2c5a['appversion'] && _0x3f2c5a['hasOwnProperty']('appversion') && (_0x453e50['appversion'] = _0x3f2c5a['appversion']),
                            null != _0x3f2c5a['vid'] && _0x3f2c5a['hasOwnProperty'](_0x21cc('0x54')) && ('number' == typeof _0x3f2c5a['vid'] ? _0x453e50['vid'] = _0x36aee3['longs'] === String ? String(_0x3f2c5a['vid']) : _0x3f2c5a['vid'] : _0x453e50['vid'] = _0x36aee3['longs'] === String ? _0x38b92f['Long']['prototype'][_0x21cc('0x1a')]['call'](_0x3f2c5a['vid']) : _0x36aee3['longs'] === Number ? new _0x38b92f['LongBits'](_0x3f2c5a[_0x21cc('0x54')][_0x21cc('0x43')] >>> 0x0, _0x3f2c5a['vid']['high'] >>> 0x0)['toNumber'](!0x0) : _0x3f2c5a[_0x21cc('0x54')]),
                            null != _0x3f2c5a['app'] && _0x3f2c5a[_0x21cc('0x5f')]('app') && (_0x453e50['app'] = _0x36aee3['enums'] === String ? _0x1f3e92['com']['tencent']['wrbus']['pb']['App'][_0x3f2c5a['app']] : _0x3f2c5a['app']),
                                _0x453e50;
                        }
                        BaseMsg.prototype.toJSON = function () {
                            return this['constructor']['toObject'](this, _0x525c76['util']['toJSONOptions']);
                        }

                        return BaseMsg
                    }()
                    _0x3fb74a.WrCommonReport = function () {
                        function WrCommonReport(_0x47e2a4) {
                            if (_0x47e2a4)
                                for (var _0x32fd5a = (0x0,
                                    _0x11ae3d['default'])(_0x47e2a4), _0x56ceb2 = 0x0; _0x56ceb2 < _0x32fd5a['length']; ++_0x56ceb2)
                                    null != _0x47e2a4[_0x32fd5a[_0x56ceb2]] && (this[_0x32fd5a[_0x56ceb2]] = _0x47e2a4[_0x32fd5a[_0x56ceb2]]);
                        }

                        WrCommonReport.prototype.baseLog = null
                        WrCommonReport.prototype.sid = _0x38b92f.Long ? _0x38b92f.Long.fromBits(0, 0, false) : 0
                        WrCommonReport.prototype.itemid = ''
                        WrCommonReport.prototype.type = ''
                        WrCommonReport.prototype.action = ''
                        WrCommonReport.prototype.index = _0x38b92f.Long ? _0x38b92f.Long[_0x21cc('0x0')](0x0, 0x0, !0x1) : 0x0
                        WrCommonReport.prototype.scene = ''
                        WrCommonReport.prototype.hints = ''
                        WrCommonReport.prototype.utm = ''
                        WrCommonReport.prototype.value = ''
                        WrCommonReport.prototype.commFieldOne = ''
                        WrCommonReport.prototype.commFieldTwo = ''
                        WrCommonReport.prototype.commFieldThree = ''
                        WrCommonReport.prototype.module = ''
                        WrCommonReport.create = function (_0x2e3c77) {
                            return new WrCommonReport(_0x2e3c77);
                        }
                        WrCommonReport.encode = function (_0x431053, _0x55f994) {
                            return _0x55f994 || (_0x55f994 = _0x4d4cab['create']()),
                            null != _0x431053['baseLog'] && Object[_0x21cc('0x5f')]['call'](_0x431053, 'baseLog') && _0x1f3e92['com']['tencent']['wrbus']['pb']['BaseMsg']['encode'](_0x431053['baseLog'], _0x55f994[_0x21cc('0x46')](0xa)['fork']())[_0x21cc('0x2b')](),
                            null != _0x431053['sid'] && Object[_0x21cc('0x5f')]['call'](_0x431053, 'sid') && _0x55f994['uint32'](0x10)['int64'](_0x431053['sid']),
                            null != _0x431053['itemid'] && Object['hasOwnProperty'][_0x21cc('0xb')](_0x431053, 'itemid') && _0x55f994['uint32'](0x1a)['string'](_0x431053['itemid']),
                            null != _0x431053[_0x21cc('0x28')] && Object['hasOwnProperty']['call'](_0x431053, 'type') && _0x55f994['uint32'](0x22)['string'](_0x431053['type']),
                            null != _0x431053['action'] && Object['hasOwnProperty']['call'](_0x431053, 'action') && _0x55f994['uint32'](0x2a)['string'](_0x431053['action']),
                            null != _0x431053['index'] && Object['hasOwnProperty']['call'](_0x431053, 'index') && _0x55f994['uint32'](0x30)['int64'](_0x431053['index']),
                            null != _0x431053['scene'] && Object['hasOwnProperty']['call'](_0x431053, 'scene') && _0x55f994['uint32'](0x3a)['string'](_0x431053['scene']),
                            null != _0x431053['hints'] && Object['hasOwnProperty']['call'](_0x431053, 'hints') && _0x55f994['uint32'](0x42)['string'](_0x431053['hints']),
                            null != _0x431053['utm'] && Object['hasOwnProperty']['call'](_0x431053, 'utm') && _0x55f994['uint32'](0x4a)[_0x21cc('0x62')](_0x431053['utm']),
                            null != _0x431053['value'] && Object['hasOwnProperty']['call'](_0x431053, _0x21cc('0x5e')) && _0x55f994['uint32'](0x52)['string'](_0x431053[_0x21cc('0x5e')]),
                            null != _0x431053['commFieldOne'] && Object['hasOwnProperty']['call'](_0x431053, 'commFieldOne') && _0x55f994['uint32'](0x5a)['string'](_0x431053['commFieldOne']),
                            null != _0x431053['commFieldTwo'] && Object[_0x21cc('0x5f')][_0x21cc('0xb')](_0x431053, 'commFieldTwo') && _0x55f994['uint32'](0x62)['string'](_0x431053['commFieldTwo']),
                            null != _0x431053[_0x21cc('0x1d')] && Object['hasOwnProperty'][_0x21cc('0xb')](_0x431053, 'commFieldThree') && _0x55f994[_0x21cc('0x46')](0x6a)['string'](_0x431053[_0x21cc('0x1d')]),
                            null != _0x431053[_0x21cc('0x1c')] && Object['hasOwnProperty'][_0x21cc('0xb')](_0x431053, 'module') && _0x55f994['uint32'](0x72)['string'](_0x431053[_0x21cc('0x1c')]),
                                _0x55f994;
                        }
                        WrCommonReport.encodeDelimited = function (_0x168374, _0x30d5f6) {
                            return this['encode'](_0x168374, _0x30d5f6)['ldelim']();
                        }
                        WrCommonReport.decode = function (_0xa3f5b4, _0x476c89) {
                            _0xa3f5b4 instanceof _0x2c16fe || (_0xa3f5b4 = _0x2c16fe['create'](_0xa3f5b4));
                            for (var _0x23a62e = void 0x0 === _0x476c89 ? _0xa3f5b4[_0x21cc('0x4f')] : _0xa3f5b4['pos'] + _0x476c89, _0x529fd5 = new _0x1f3e92['com'][(_0x21cc('0x5'))]['wrbus']['pb']['WrCommonReport'](); _0xa3f5b4['pos'] < _0x23a62e;) {
                                var _0x2cdf81 = _0xa3f5b4['uint32']();
                                switch (_0x2cdf81 >>> 0x3) {
                                    case 0x1:
                                        _0x529fd5['baseLog'] = _0x1f3e92['com']['tencent']['wrbus']['pb']['BaseMsg']['decode'](_0xa3f5b4, _0xa3f5b4['uint32']());
                                        break;
                                    case 0x2:
                                        _0x529fd5['sid'] = _0xa3f5b4['int64']();
                                        break;
                                    case 0x3:
                                        _0x529fd5[_0x21cc('0x56')] = _0xa3f5b4[_0x21cc('0x62')]();
                                        break;
                                    case 0x4:
                                        _0x529fd5['type'] = _0xa3f5b4['string']();
                                        break;
                                    case 0x5:
                                        _0x529fd5['action'] = _0xa3f5b4['string']();
                                        break;
                                    case 0x6:
                                        _0x529fd5[_0x21cc('0x44')] = _0xa3f5b4['int64']();
                                        break;
                                    case 0x7:
                                        _0x529fd5['scene'] = _0xa3f5b4[_0x21cc('0x62')]();
                                        break;
                                    case 0x8:
                                        _0x529fd5['hints'] = _0xa3f5b4['string']();
                                        break;
                                    case 0x9:
                                        _0x529fd5[_0x21cc('0xf')] = _0xa3f5b4['string']();
                                        break;
                                    case 0xa:
                                        _0x529fd5['value'] = _0xa3f5b4['string']();
                                        break;
                                    case 0xb:
                                        _0x529fd5['commFieldOne'] = _0xa3f5b4['string']();
                                        break;
                                    case 0xc:
                                        _0x529fd5['commFieldTwo'] = _0xa3f5b4['string']();
                                        break;
                                    case 0xd:
                                        _0x529fd5['commFieldThree'] = _0xa3f5b4[_0x21cc('0x62')]();
                                        break;
                                    case 0xe:
                                        _0x529fd5['module'] = _0xa3f5b4['string']();
                                        break;
                                    default:
                                        _0xa3f5b4['skipType'](0x7 & _0x2cdf81);
                                }
                            }
                            return _0x529fd5;
                        }
                        WrCommonReport.decodeDelimited = function (_0x191337) {
                            return _0x191337 instanceof _0x2c16fe || (_0x191337 = new _0x2c16fe(_0x191337)),
                                this[_0x21cc('0x23')](_0x191337, _0x191337['uint32']());
                        }
                        WrCommonReport.verify = function (_0x4b41c8) {
                            if ('object' !== (void 0x0 === _0x4b41c8 ? 'undefined' : (0x0,
                                _0x4fc257[_0x21cc('0x2c')])(_0x4b41c8)) || null === _0x4b41c8)
                                return 'object\x20expected';
                            if (null != _0x4b41c8['baseLog'] && _0x4b41c8['hasOwnProperty']('baseLog')) {
                                var _0x371790 = _0x1f3e92['com'][_0x21cc('0x5')][_0x21cc('0x50')]['pb']['BaseMsg']['verify'](_0x4b41c8[_0x21cc('0x4d')]);
                                if (_0x371790)
                                    return 'baseLog.' + _0x371790;
                            }
                            return null != _0x4b41c8['sid'] && _0x4b41c8['hasOwnProperty'](_0x21cc('0x2')) && !(_0x38b92f['isInteger'](_0x4b41c8[_0x21cc('0x2')]) || _0x4b41c8['sid'] && _0x38b92f['isInteger'](_0x4b41c8['sid']['low']) && _0x38b92f['isInteger'](_0x4b41c8[_0x21cc('0x2')]['high'])) ? _0x21cc('0x71') : null != _0x4b41c8['itemid'] && _0x4b41c8[_0x21cc('0x5f')]('itemid') && !_0x38b92f[_0x21cc('0x9')](_0x4b41c8['itemid']) ? 'itemid:\x20string\x20expected' : null != _0x4b41c8[_0x21cc('0x28')] && _0x4b41c8['hasOwnProperty']('type') && !_0x38b92f['isString'](_0x4b41c8['type']) ? 'type:\x20string\x20expected' : null != _0x4b41c8['action'] && _0x4b41c8[_0x21cc('0x5f')]('action') && !_0x38b92f[_0x21cc('0x9')](_0x4b41c8['action']) ? _0x21cc('0x60') : null != _0x4b41c8['index'] && _0x4b41c8['hasOwnProperty']('index') && !(_0x38b92f['isInteger'](_0x4b41c8[_0x21cc('0x44')]) || _0x4b41c8['index'] && _0x38b92f['isInteger'](_0x4b41c8['index']['low']) && _0x38b92f['isInteger'](_0x4b41c8['index']['high'])) ? 'index:\x20integer|Long\x20expected' : null != _0x4b41c8['scene'] && _0x4b41c8['hasOwnProperty']('scene') && !_0x38b92f['isString'](_0x4b41c8[_0x21cc('0x7')]) ? 'scene:\x20string\x20expected' : null != _0x4b41c8['hints'] && _0x4b41c8['hasOwnProperty'](_0x21cc('0x48')) && !_0x38b92f['isString'](_0x4b41c8[_0x21cc('0x48')]) ? 'hints:\x20string\x20expected' : null != _0x4b41c8[_0x21cc('0xf')] && _0x4b41c8['hasOwnProperty']('utm') && !_0x38b92f['isString'](_0x4b41c8['utm']) ? 'utm:\x20string\x20expected' : null != _0x4b41c8[_0x21cc('0x5e')] && _0x4b41c8['hasOwnProperty'](_0x21cc('0x5e')) && !_0x38b92f['isString'](_0x4b41c8[_0x21cc('0x5e')]) ? 'value:\x20string\x20expected' : null != _0x4b41c8['commFieldOne'] && _0x4b41c8['hasOwnProperty'](_0x21cc('0x75')) && !_0x38b92f['isString'](_0x4b41c8['commFieldOne']) ? 'commFieldOne:\x20string\x20expected' : null != _0x4b41c8['commFieldTwo'] && _0x4b41c8['hasOwnProperty']('commFieldTwo') && !_0x38b92f[_0x21cc('0x9')](_0x4b41c8['commFieldTwo']) ? 'commFieldTwo:\x20string\x20expected' : null != _0x4b41c8[_0x21cc('0x1d')] && _0x4b41c8[_0x21cc('0x5f')]('commFieldThree') && !_0x38b92f[_0x21cc('0x9')](_0x4b41c8[_0x21cc('0x1d')]) ? 'commFieldThree:\x20string\x20expected' : null != _0x4b41c8['module'] && _0x4b41c8[_0x21cc('0x5f')](_0x21cc('0x1c')) && !_0x38b92f['isString'](_0x4b41c8[_0x21cc('0x1c')]) ? 'module:\x20string\x20expected' : null;
                        }
                        WrCommonReport.fromObject = function (_0x5e3aea) {
                            if (_0x5e3aea instanceof _0x1f3e92['com']['tencent']['wrbus']['pb']['WrCommonReport'])
                                return _0x5e3aea;
                            var _0x1b95cd = new _0x1f3e92[(_0x21cc('0x13'))]['tencent']['wrbus']['pb']['WrCommonReport']();
                            if (null != _0x5e3aea['baseLog']) {
                                if ('object' !== (0x0,
                                    _0x4fc257['default'])(_0x5e3aea['baseLog']))
                                    throw TypeError('.com.tencent.wrbus.pb.WrCommonReport.baseLog:\x20object\x20expected');
                                _0x1b95cd['baseLog'] = _0x1f3e92['com']['tencent']['wrbus']['pb']['BaseMsg']['fromObject'](_0x5e3aea['baseLog']);
                            }
                            return null != _0x5e3aea['sid'] && (_0x38b92f['Long'] ? (_0x1b95cd['sid'] = _0x38b92f['Long'][_0x21cc('0x26')](_0x5e3aea['sid']))['unsigned'] = !0x1 : 'string' == typeof _0x5e3aea['sid'] ? _0x1b95cd['sid'] = parseInt(_0x5e3aea['sid'], 0xa) : _0x21cc('0x7a') == typeof _0x5e3aea[_0x21cc('0x2')] ? _0x1b95cd[_0x21cc('0x2')] = _0x5e3aea['sid'] : 'object' === (0x0,
                                _0x4fc257['default'])(_0x5e3aea[_0x21cc('0x2')]) && (_0x1b95cd['sid'] = new _0x38b92f['LongBits'](_0x5e3aea['sid']['low'] >>> 0x0, _0x5e3aea['sid']['high'] >>> 0x0)['toNumber']())),
                            null != _0x5e3aea['itemid'] && (_0x1b95cd['itemid'] = String(_0x5e3aea['itemid'])),
                            null != _0x5e3aea['type'] && (_0x1b95cd['type'] = String(_0x5e3aea[_0x21cc('0x28')])),
                            null != _0x5e3aea['action'] && (_0x1b95cd['action'] = String(_0x5e3aea['action'])),
                            null != _0x5e3aea['index'] && (_0x38b92f[_0x21cc('0x5b')] ? (_0x1b95cd[_0x21cc('0x44')] = _0x38b92f['Long'][_0x21cc('0x26')](_0x5e3aea['index']))['unsigned'] = !0x1 : 'string' == typeof _0x5e3aea['index'] ? _0x1b95cd['index'] = parseInt(_0x5e3aea['index'], 0xa) : 'number' == typeof _0x5e3aea['index'] ? _0x1b95cd['index'] = _0x5e3aea['index'] : 'object' === (0x0,
                                _0x4fc257['default'])(_0x5e3aea['index']) && (_0x1b95cd['index'] = new _0x38b92f['LongBits'](_0x5e3aea['index']['low'] >>> 0x0, _0x5e3aea['index']['high'] >>> 0x0)['toNumber']())),
                            null != _0x5e3aea['scene'] && (_0x1b95cd[_0x21cc('0x7')] = String(_0x5e3aea['scene'])),
                            null != _0x5e3aea['hints'] && (_0x1b95cd['hints'] = String(_0x5e3aea['hints'])),
                            null != _0x5e3aea['utm'] && (_0x1b95cd['utm'] = String(_0x5e3aea['utm'])),
                            null != _0x5e3aea['value'] && (_0x1b95cd[_0x21cc('0x5e')] = String(_0x5e3aea['value'])),
                            null != _0x5e3aea[_0x21cc('0x75')] && (_0x1b95cd['commFieldOne'] = String(_0x5e3aea['commFieldOne'])),
                            null != _0x5e3aea[_0x21cc('0x5a')] && (_0x1b95cd[_0x21cc('0x5a')] = String(_0x5e3aea['commFieldTwo'])),
                            null != _0x5e3aea['commFieldThree'] && (_0x1b95cd['commFieldThree'] = String(_0x5e3aea['commFieldThree'])),
                            null != _0x5e3aea[_0x21cc('0x1c')] && (_0x1b95cd['module'] = String(_0x5e3aea['module'])),
                                _0x1b95cd;
                        }
                        WrCommonReport.toObject = function (_0x159b9d, _0x20b41a) {
                            _0x20b41a || (_0x20b41a = {});
                            var _0x35f6b6 = {};
                            if (_0x20b41a['defaults']) {
                                if (_0x35f6b6['baseLog'] = null,
                                    _0x38b92f['Long']) {
                                    var _0x417866 = new _0x38b92f['Long'](0x0, 0x0, !0x1);
                                    _0x35f6b6['sid'] = _0x20b41a['longs'] === String ? _0x417866['toString']() : _0x20b41a['longs'] === Number ? _0x417866[_0x21cc('0x63')]() : _0x417866;
                                } else
                                    _0x35f6b6['sid'] = _0x20b41a[_0x21cc('0x30')] === String ? '0' : 0x0;
                                if (_0x35f6b6['itemid'] = '',
                                    _0x35f6b6['type'] = '',
                                    _0x35f6b6[_0x21cc('0x17')] = '',
                                    _0x38b92f[_0x21cc('0x5b')]) {
                                    var _0x2d3073 = new _0x38b92f['Long'](0x0, 0x0, !0x1);
                                    _0x35f6b6['index'] = _0x20b41a[_0x21cc('0x30')] === String ? _0x2d3073[_0x21cc('0x1a')]() : _0x20b41a['longs'] === Number ? _0x2d3073[_0x21cc('0x63')]() : _0x2d3073;
                                } else
                                    _0x35f6b6['index'] = _0x20b41a['longs'] === String ? '0' : 0x0;
                                _0x35f6b6['scene'] = '',
                                    _0x35f6b6['hints'] = '',
                                    _0x35f6b6['utm'] = '',
                                    _0x35f6b6['value'] = '',
                                    _0x35f6b6[_0x21cc('0x75')] = '',
                                    _0x35f6b6[_0x21cc('0x5a')] = '',
                                    _0x35f6b6[_0x21cc('0x1d')] = '',
                                    _0x35f6b6['module'] = '';
                            }
                            return null != _0x159b9d['baseLog'] && _0x159b9d[_0x21cc('0x5f')]('baseLog') && (_0x35f6b6['baseLog'] = _0x1f3e92['com']['tencent']['wrbus']['pb']['BaseMsg']['toObject'](_0x159b9d['baseLog'], _0x20b41a)),
                            null != _0x159b9d['sid'] && _0x159b9d['hasOwnProperty']('sid') && ('number' == typeof _0x159b9d['sid'] ? _0x35f6b6[_0x21cc('0x2')] = _0x20b41a[_0x21cc('0x30')] === String ? String(_0x159b9d['sid']) : _0x159b9d['sid'] : _0x35f6b6['sid'] = _0x20b41a['longs'] === String ? _0x38b92f[_0x21cc('0x5b')]['prototype']['toString']['call'](_0x159b9d['sid']) : _0x20b41a['longs'] === Number ? new _0x38b92f['LongBits'](_0x159b9d['sid']['low'] >>> 0x0, _0x159b9d['sid'][_0x21cc('0x33')] >>> 0x0)['toNumber']() : _0x159b9d[_0x21cc('0x2')]),
                            null != _0x159b9d[_0x21cc('0x56')] && _0x159b9d[_0x21cc('0x5f')]('itemid') && (_0x35f6b6[_0x21cc('0x56')] = _0x159b9d[_0x21cc('0x56')]),
                            null != _0x159b9d[_0x21cc('0x28')] && _0x159b9d['hasOwnProperty']('type') && (_0x35f6b6['type'] = _0x159b9d[_0x21cc('0x28')]),
                            null != _0x159b9d['action'] && _0x159b9d['hasOwnProperty']('action') && (_0x35f6b6['action'] = _0x159b9d['action']),
                            null != _0x159b9d['index'] && _0x159b9d[_0x21cc('0x5f')]('index') && ('number' == typeof _0x159b9d['index'] ? _0x35f6b6['index'] = _0x20b41a[_0x21cc('0x30')] === String ? String(_0x159b9d['index']) : _0x159b9d['index'] : _0x35f6b6['index'] = _0x20b41a['longs'] === String ? _0x38b92f[_0x21cc('0x5b')]['prototype']['toString']['call'](_0x159b9d['index']) : _0x20b41a['longs'] === Number ? new _0x38b92f[(_0x21cc('0x14'))](_0x159b9d['index']['low'] >>> 0x0, _0x159b9d['index']['high'] >>> 0x0)[_0x21cc('0x63')]() : _0x159b9d['index']),
                            null != _0x159b9d['scene'] && _0x159b9d['hasOwnProperty']('scene') && (_0x35f6b6['scene'] = _0x159b9d['scene']),
                            null != _0x159b9d['hints'] && _0x159b9d['hasOwnProperty']('hints') && (_0x35f6b6['hints'] = _0x159b9d['hints']),
                            null != _0x159b9d['utm'] && _0x159b9d['hasOwnProperty']('utm') && (_0x35f6b6['utm'] = _0x159b9d['utm']),
                            null != _0x159b9d['value'] && _0x159b9d['hasOwnProperty']('value') && (_0x35f6b6['value'] = _0x159b9d['value']),
                            null != _0x159b9d['commFieldOne'] && _0x159b9d['hasOwnProperty']('commFieldOne') && (_0x35f6b6['commFieldOne'] = _0x159b9d['commFieldOne']),
                            null != _0x159b9d['commFieldTwo'] && _0x159b9d['hasOwnProperty']('commFieldTwo') && (_0x35f6b6[_0x21cc('0x5a')] = _0x159b9d['commFieldTwo']),
                            null != _0x159b9d['commFieldThree'] && _0x159b9d['hasOwnProperty']('commFieldThree') && (_0x35f6b6['commFieldThree'] = _0x159b9d[_0x21cc('0x1d')]),
                            null != _0x159b9d['module'] && _0x159b9d['hasOwnProperty']('module') && (_0x35f6b6['module'] = _0x159b9d['module']),
                                _0x35f6b6;
                        }
                        WrCommonReport.prototype.toJSON = function () {
                            return this['constructor']['toObject'](this, _0x525c76['util']['toJSONOptions']);
                        }

                        return WrCommonReport
                    }()
                    _wrbus.pb = _0x3fb74a
                    _tencent.wrbus = _wrbus
                    _0x47c7f3.tencent = _tencent

                    return _0x47c7f3
                }()
                exports.default = _0x1f3e92
            },
        }
    ]
);
