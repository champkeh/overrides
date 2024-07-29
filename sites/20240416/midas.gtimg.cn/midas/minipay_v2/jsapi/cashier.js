!function(e) {
  function a(n) {
    if (i[n])
      return i[n].exports;
    var t = i[n] = {
      "exports": {},
      "id": n,
      "loaded": !1
    };
    return e[n].call(t.exports, t, t.exports, a),
    t.loaded = !0,
    t.exports
  }
  var i = {};
  return a.m = e,
  a.c = i,
  a.p = "//midas.gtimg.cn/midas/minipay_v2/",
  a(0)
}([function(module, exports, __webpack_require__) {
  !function() {
    function _fixedLengthWithPrefix(e, a, i) {
      a = a || 2,
      i = i || "0";
      var n = [];
      return n[a] = e,
      n.join(i).slice(-a)
    }
    function _firstLetterUpper(e) {
      return e += "",
      e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase()
    }
    function _jsonFilter(e) {
      var a = Object.prototype.toString.call(e);
      if (null === e || e instanceof String || e instanceof Number || e instanceof Boolean || e instanceof Date || {
        "[object String]": 1,
        "[object Number]": 1,
        "[object Boolean]": 1,
        "[object Date]": 1
      }[a])
        return e;
      if (void 0 !== e) {
        if (e === window)
          return "[object DOMWindow]";
        if (e === document)
          return "[object HTMLDocument]";
        if ("function" != typeof e.constructor)
          return e && "string" == typeof e.tagName ? "[object HTML" + _firstLetterUpper(e.tagName) + "Element]" : void 0;
        if (!{
          "[object Object]": 1,
          "[object Array]": 1
        }[a])
          return a;
        if (_jsonHash[e.__CASHIER_JSON_HASH] !== e) {
          for (var i = LIB.getIntRandom(); _jsonHash[i]; )
            i = LIB.getIntRandom();
          return _jsonHash[e.__CASHIER_JSON_HASH = i] = e,
          e
        }
      }
    }
    function _jsonQuote(e) {
      return _jsonEscapable.lastIndex = 0,
      '"' + (_jsonEscapable.test(e) ? e.replace(_jsonEscapable, function(e) {
        var a = _jsonMetaChar[e];
        return "string" == typeof a ? a : "\\u" + _fixedLengthWithPrefix(e.charCodeAt(0).toString(16), 4)
      }) : e) + '"'
    }
    function _jsonGetString(e) {
      e = _jsonFilter(e);
      var a, i, n, t = Object.prototype.toString.call(e);
      if (void 0 !== e) {
        if (null === e || e instanceof Boolean || "[object Boolean]" === t)
          return String(e);
        if (e instanceof String || "[object String]" === t)
          return _jsonQuote(e);
        if (e instanceof Number || "[object Number]" === t)
          return isFinite(e) ? String(e) : "null";
        if (e instanceof Date || "[object Date]" === t)
          return isFinite(e.valueOf()) ? _jsonQuote(e.getUTCFullYear() + "-" + _fixedLengthWithPrefix(e.getUTCMonth() + 1) + "-" + _fixedLengthWithPrefix(e.getUTCDate()) + "T" + _fixedLengthWithPrefix(e.getUTCHours()) + ":" + _fixedLengthWithPrefix(e.getUTCMinutes()) + ":" + _fixedLengthWithPrefix(e.getUTCSeconds()) + "." + _fixedLengthWithPrefix(e.getUTCMilliseconds(), 3) + "Z") : "null";
        if (e instanceof Array || "[object Array]" === t) {
          a = [];
          for (var o = 0, g = e.length; o < g; o++)
            a[o] = _jsonGetString(e[o]) || "null";
          return delete _jsonHash[e.__CASHIER_JSON_HASH],
          delete e.__CASHIER_JSON_HASH,
          "[" + a.join(",") + "]"
        }
        if (e) {
          a = [],
          n = Object.hasOwnProperty;
          for (var d in e)
            "__CASHIER_JSON_HASH" != d && n.call(e, d) && (i = _jsonGetString(e[d])) && a.push(_jsonQuote(d) + ":" + i);
          return delete _jsonHash[e.__CASHIER_JSON_HASH],
          delete e.__CASHIER_JSON_HASH,
          "{" + a.join(",") + "}"
        }
        return "null"
      }
    }
    function _fireUnloadEvent() {
      LIB.unload.notify()
    }
    function _mergeDuration(e, a) {
      return e._total = e._total || e.duration * (e.rate - 1) || 0,
      e._total += a.duration || 0,
      e.duration = Math.max(Math.round(e._total / e.rate), 1),
      e
    }
    function _xsDispatch(e, a) {
      if ("string" == typeof e && 0 == e.indexOf(_XS_TAG)) {
        e = e.substring(_XS_TAG.length);
        var i, n = JSON.parse(e), t = n.port;
        (i = _xsInstance[t]) && i._handle(n, a, e)
      }
    }
    function _dialogHandler(e, a) {
      var i = _dialogInstance[a];
      i && DLG._handle(i._stream, e) && i._handleRemote(e.key, e.args)
    }
    window.midas || (window.midas = {});
    var thisAPI = window.midas.minipay = {}
      , LIB = thisAPI.LIB = {}
      , VER = thisAPI.VER = {
      "dialog": 1,
      "api": 1
    };
    LIB.err = function() {
      window.debug && (window.console && console.error && Function.prototype.apply.call(console.error, console, Array.prototype.slice.call(arguments, 0)),
      "string" == typeof arguments[0] && alert(arguments[0]))
    }
    ,
    LIB.warn = function() {
      window.debug && window.console && console.warn && Function.prototype.apply.call(console.warn, console, Array.prototype.slice.call(arguments, 0))
    }
    ,
    LIB.log = function() {
      window.debug && window.console && console.log && Function.prototype.apply.call(console.log, console, Array.prototype.slice.call(arguments, 0))
    }
    ,
    LIB.getIntRandom = function() {
      return Math.round(Math.random() * (new Date).getTime()) % 9e9 + 1e9
    }
    ,
    LIB.emptyFn = function() {}
    ,
    LIB.serializeParam = function(e) {
      if (!e)
        return "";
      var a = [];
      for (var i in e)
        "undefined" == typeof e[i] && null == e[i] || a.push(i + "=" + encodeURIComponent(e[i]));
      return a.join("&")
    }
    ,
    LIB.serializeCgiExtend = function(e) {
      var a = [];
      return LIB.each(e, function(e, i) {
        var n = "string" == typeof i ? i : LIB.serializeParam(i);
        a.push(e + ":" + n)
      }),
      encodeURIComponent(a.join(";"))
    }
    ;
    var JSON = thisAPI.JSON = {}
      , _jsonHash = {}
      , _jsonEscapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
      , _jsonMetaChar = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    }
      , _jsonInvisibleChar = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    JSON.stringify = function(e) {
      var a = _jsonGetString(e);
      return a
    }
    ,
    JSON.parse = function(text) {
      if (text = String(text),
      text && (_jsonInvisibleChar.lastIndex = 0,
      _jsonInvisibleChar.test(text) && (text = text.replace(_jsonInvisibleChar, function(e) {
        return "\\u" + _fixedLengthWithPrefix(e.charCodeAt(0).toString(16), 4)
      })),
      /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))))
        try {
          return new Function("return " + text)()
        } catch (_) {
          return eval("(" + text + ")")
        }
      throw new SyntaxError("JSON.parse")
    }
    ,
    LIB.setTimeout = function(e, a, i, n) {
      return setTimeout(function() {
        e.apply(i, n || [])
      }, a)
    }
    ,
    LIB.ua = function() {
      var e, a = {}, i = navigator.userAgent;
      return window.ActiveXObject ? (a.ie = 6,
      (window.XMLHttpRequest || i.indexOf("MSIE 7.0") >= 0) && (a.ie = 7),
      (window.XDomainRequest || i.indexOf("Trident/4.0") >= 0) && (a.ie = 8),
      i.indexOf("Trident/5.0") >= 0 && (a.ie = 9),
      i.indexOf("Trident/6.0") >= 0 && (a.ie = 10)) : document.getBoxObjectFor || "undefined" != typeof window.mozInnerScreenX ? (e = /(?:Firefox|GranParadiso|Iceweasel|Minefield).(\d+\.\d+)/i.exec(i),
      a.firefox = e ? parseFloat(e[1], 10) : 3.3) : navigator.taintEnabled ? window.opera && (a.opera = parseFloat(window.opera.version(), 10)) : (e = /AppleWebKit.(\d+\.\d+)/i.exec(i),
      a.webkit = e ? parseFloat(e[1], 10) : document.evaluate ? document.querySelector ? 525 : 420 : 419,
      (e = /Chrome.(\d+\.\d+)/i.exec(i)) || window.chrome ? a.chrome = e ? parseFloat(e[1], 10) : 2 : ((e = /Version.(\d+\.\d+)/i.exec(i)) || window.safariHandler) && (a.safari = e ? parseFloat(e[1], 10) : 3.3)),
      e = /CPU.+?OS (\d+(?:_\d+)?).+?like Mac OS X/i.exec(i),
      i.indexOf("iPod") >= 0 ? a.iPod = e ? parseFloat(e[1].replace(/_/g, "."), 10) : 1 : i.indexOf("iPhone") >= 0 ? a.iPhone = e ? parseFloat(e[1].replace(/_/g, "."), 10) : 1 : i.indexOf("iPad") >= 0 ? a.iPad = e ? parseFloat(e[1].replace(/_/g, "."), 10) : 1 : i.indexOf("Macintosh") >= 0 || i.indexOf("OS X") >= 0 ? (e = /(?:Mac )?OS X (\d+(?:_\d+)?)/i.exec(i),
      a.mac = e ? parseFloat(e[1].replace(/_/g, "."), 10) : 1) : i.indexOf("Window") >= 0 ? (e = /Windows NT (\d+(?:\.\d+)?)/i.exec(i),
      a.windows = e ? parseFloat(e[1], 10) : 1) : i.indexOf("Android") >= 0 ? (e = /Android (\d+(?:\.\d+)?)/i.exec(i),
      a.android = e ? parseFloat(e[1], 10) : 1) : i.indexOf("Linux") >= 0 && (a.linux = 1),
      a
    }();
    var Observer = LIB.Observer = function(e, a) {
      this._sender = e,
      this._timeout = +a || 0,
      this._subscriber = [],
      this._timer = 0
    }
    ;
    Observer.prototype.subscribe = function(e, a, i) {
      return "function" == typeof e && (this._subscriber.push({
        "fn": e,
        "self": a,
        "context": i
      }),
      !0)
    }
    ,
    Observer.prototype.unsubscribe = function(e) {
      if ("function" != typeof e)
        return !1;
      for (var a, i = this._subscriber, n = !1, t = 0; a = i[t]; t++)
        if (a.fn == e) {
          n = !0,
          i = i.slice(0, t).concat(i.slice(t + 1));
          break
        }
      return !!n && (this._subscriber = i,
      !0)
    }
    ,
    Observer.prototype.notify = function(e) {
      var a = function() {
        this._timer = 0;
        for (var a, i = this._subscriber, n = 0; a = i[n]; n++)
          a.fn.call(a.self, e, this._sender, a.context)
      };
      this._timeout ? (this._timer && clearTimeout(this._timer),
      this._timer = LIB.setTimeout(a, this._timeout, this)) : a.call(this)
    }
    ;
    var ReadyCall = LIB.ReadyCall = function() {
      this.isReady = !1,
      this._onReady = new Observer(this),
      this._first = !0,
      this._onFirst = new Observer(this)
    }
    ;
    ReadyCall.prototype.onReady = function(e) {
      this.isReady ? e() : this._onReady.subscribe(e),
      this._first && (this._onFirst.notify(),
      this._first = !1)
    }
    ,
    ReadyCall.prototype.ready = function() {
      this.isReady || (this.isReady = !0,
      this._onReady.notify())
    }
    ,
    ReadyCall.prototype.onFirst = function(e) {
      this._onFirst.subscribe(e)
    }
    ;
    var _eventList = [];
    LIB.attachEvent = function(e, a, i, n) {
      if (e && a && "function" == typeof i) {
        n = n || {},
        n.win = n.win || window;
        var t = function(e) {
          i.apply(n.self, [e || n.win.event].concat(n.args || []))
        };
        _eventList.push({
          "el": e,
          "type": a,
          "cfn": t,
          "fn": i
        }),
        e.attachEvent ? e.attachEvent("on" + a, t) : e.addEventListener && e.addEventListener(a, t, !1)
      }
    }
    ;
    var _crossEventList = {};
    LIB.fireCrossEvent = function(e, a) {
      var i;
      return !!_crossEventList[a] && ((i = _crossEventList[a]).fn.apply(i.opt.self, [e].concat(i.opt.args || [])),
      !0)
    }
    ,
    LIB.attachCrossEvent = function(e, a, i, n, t) {
      if (e && a && "function" == typeof i && n) {
        if (n == window)
          return LIB.attachEvent(e, a, i, t);
        t = t || {};
        for (var o = LIB.getIntRandom(); _crossEventList[o]; )
          o = LIB.getIntRandom();
        _crossEventList[o] = {
          "fn": i,
          "opt": t
        },
        n["_CASHIER_CROSS_EVENT_HANDLER_" + o] = window,
        n["_CASHIER_CROSS_EVENT_TARGET_" + o] = e;
        var g = new n.Function("evt","var win=window._CASHIER_CROSS_EVENT_HANDLER_" + o + ",ret=false,el=window._CASHIER_CROSS_EVENT_TARGET_" + o + ";if(win&&win.parent&&win.parent!=win&&win.cashier){try{ret=win.cashier.LIB.fireCrossEvent(evt||window.event," + o + ");}catch(_){}}if(!ret){el&&(el.removeEventListener?el.removeEventListener('" + a + "',arguments.callee,false):el.detachEvent&&el.detachEvent('on" + a + "',arguments.callee));try{delete window._CASHIER_CROSS_EVENT_HANDLER_" + o + ";delete window._CASHIER_CROSS_EVENT_TARGET_" + o + ";}catch(_){window._CASHIER_CROSS_EVENT_HANDLER_" + o + "=void 0;window._CASHIER_CROSS_EVENT_TARGET_" + o + "=void 0;}}");
        _eventList.push({
          "el": e,
          "type": a,
          "cfn": g,
          "fn": i,
          "win": n,
          "id": o
        }),
        e.attachEvent ? e.attachEvent("on" + a, g) : e.addEventListener && e.addEventListener(a, g, !1)
      }
    }
    ,
    LIB.detachEvent = function(e, a, i) {
      for (var n, t = [], o = 0; n = _eventList[o]; o++)
        if (e && n.el != e || a && n.type != a || "function" == typeof i && n.fn != i)
          t.push(n);
        else if (n.el.detachEvent ? n.el.detachEvent("on" + n.type, n.cfn) : n.el.removeEventListener && n.el.removeEventListener(n.type, n.cfn, !1),
        n.win && n.id)
          try {
            delete n.win["_CASHIER_CROSS_EVENT_HANDLER_" + n.id],
            delete n.win["_CASHIER_CROSS_EVENT_TARGET_" + n.id]
          } catch (g) {
            n.win["_CASHIER_CROSS_EVENT_HANDLER_" + n.id] = void 0,
            n.win["_CASHIER_CROSS_EVENT_TARGET_" + n.id] = void 0
          }
      _eventList = t
    }
    ,
    LIB.getEvent = function() {
      var e, a = window.event, i = 0;
      if (!a)
        try {
          for (e = arguments.callee; e && i < 10 && !((a = e.arguments) && (a = a[0]) && "object" == typeof a && "type"in a && "button"in a && "ctrlKey"in a && "altKey"in a && "shiftKey"in a); )
            a = null,
            e = e.caller,
            i++
        } catch (n) {
          return null
        }
      return a
    }
    ,
    LIB.unload = new Observer,
    LIB.unload.subscribe(function() {
      LIB.detachEvent()
    });
    var _unloadEventName = LIB.ua.chrome || LIB.ua.opera ? "beforeunload" : "unload";
    window.attachEvent ? window.attachEvent("on" + _unloadEventName, _fireUnloadEvent) : window.addEventListener && window.addEventListener(_unloadEventName, _fireUnloadEvent, !1),
    LIB.unload.subscribe(function() {
      thisAPI && (thisAPI = window.midas.minipay = void 0),
      window.detachEvent ? window.detachEvent("on" + _unloadEventName, _fireUnloadEvent) : window.removeEventListener && window.removeEventListener(_unloadEventName, _fireUnloadEvent, !1)
    }),
    LIB.encodeURI = function(e) {
      return e ? (e + "").replace(/\%/g, "%25").replace(/\+/g, "%2B").replace(/ /g, "%20").replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/&/g, "%26").replace(/=/g, "%3D").replace(/"/g, "%22") : ""
    }
    ;
    var _psIdx = 0
      , _psPool = LIB._psPool = {};
    LIB.pingSender = function(e, a) {
      if (e) {
        var i = "cashierPingSender_" + _psIdx++
          , n = _psPool[i] = new Image;
        n.id = i,
        n.onload = n.onerror = function() {
          this.onload = this.onerror = null;
          try {
            delete _psPool[this.id]
          } catch (e) {}
        }
        ,
        a = a || 500,
        a < 0 ? n.src = e : LIB.setTimeout(function() {
          n.src = e
        }, a)
      }
    }
    ;
    var BatchReporter = function(e, a, i, n) {
      this.key = e,
      this.query = a,
      this.merge = i,
      this.url = n,
      this.count = 0,
      this.store = {},
      this.timer = 0,
      this._url = ""
    };
    BatchReporter.MAX_LEN = 1e3,
    BatchReporter.tmpl = function(e, a) {
      return (e + "").replace(/\{(\w+)\}/g, function(e, i) {
        return a[i]
      })
    }
    ,
    BatchReporter.prototype.add = function(e) {
      var a, i;
      if (this.key ? (i = BatchReporter.tmpl(this.key, e),
      (a = this.store[i]) && (a.rate++,
      a = this.merge(a, e))) : i = this.count,
      !a) {
        this.count++,
        a = this.store[i] = {},
        a.rate = 1;
        for (var n in e)
          a[n] = e[n]
      }
      this.report()
    }
    ,
    BatchReporter.prototype.report = function(e) {
      var a, i = [], n = 1;
      if ("function" == typeof this.query)
        for (var t in this.store)
          a = this.store[t],
          i.push(this.query(n++, a));
      else {
        for (var o = 0, g = this.query.length; o < g; o++)
          i.push([]);
        for (var t in this.store) {
          a = this.store[t];
          for (var o = 0, g = this.query.length; o < g; o++)
            i[o].push(this.query[o](n, a));
          n++
        }
        for (var o = 0, g = i.length; o < g; o++)
          i[o] = i[o].join("")
      }
      this._url = BatchReporter.tmpl(this.url, {
        "random": LIB.getIntRandom(),
        "count": this.count,
        "query": i.join("")
      }),
      this._url.length >= BatchReporter.MAX_LEN || e ? this._doReport() : !this.timer && (this.timer = LIB.setTimeout(this._doReport, 3e5, this))
    }
    ,
    BatchReporter.prototype.reportImmediate = function() {
      this.count > 0 && (this.report(!0),
      setTimeout(LIB.emptyFn, 1e3))
    }
    ,
    BatchReporter.prototype._doReport = function() {
      clearTimeout(this.timer),
      this.timer = 0,
      0 != this.count && (this.count = 0,
      this.store = {},
      LIB.pingSender(this._url, -1))
    }
    ,
    LIB.timeStat = function(e, a, i, n) {
      if (i = Math.max(+i, 1) || 1,
      !(i > 1 && Math.random() * i >= 1)) {
        var t = {
          "f1": e[0],
          "f2": e[1],
          "f3": e[2],
          "keepZero": n
        };
        if ("[object Array]" == Object.prototype.toString.call(a))
          for (var o = 1, g = a.length; o < g; o++)
            a[o] && (t[o] = a[o] - a[0]);
        else
          e[3] && (t[e[3]] = a)
      }
    }
    ,
    LIB.valueStat = function(e, a, i, n, t) {
      t = Math.max(+t, 1) || 1,
      t > 1 && Math.random() * t >= 1
    }
    ;
    var _valueStatReporterAppId = 0
      , _valueStat2Reporter = new BatchReporter("{statId},{type},{ret}",function(e, a) {
      var i = ["&", e, "_1=", a.id, "&", e, "_2=", a.type, "&", e, "_3=", a.code, "&", e, "_4=", +a.duration || 1, "&", e, "_5=", a.rate];
      return i.join("")
    }
    ,_mergeDuration);
    LIB.unload.subscribe(_valueStat2Reporter.reportImmediate, _valueStat2Reporter),
    LIB.valueStat2 = function(e, a, i, n, t) {
      if (!_valueStatReporterAppId) {
        if (!(_valueStatReporterAppId = cashier.INFO ? cashier.INFO.appid : cashier.appid))
          return void (LIB.valueStat2 = LIB.emptyFn);
        _valueStat2Reporter.url = "//cloudspeed.qq.com/speedcode.cgi?appid=" + _valueStatReporterAppId + "&key=id,type,code,time,rate&fysn={random}{query}"
      }
      t = Math.max(+t, 1) || 1,
      t > 1 && Math.random() * t >= 1 || _valueStat2Reporter.add({
        "id": e,
        "type": a,
        "code": i,
        "duration": n,
        "rate": t
      })
    }
    ,
    LIB.performanceTimeStat = function(e, a) {
      LIB.setTimeout(function() {
        var i = window.performance || window.webkitPerformance || window.msPerformance;
        if (i) {
          if (0 == i.timing.loadEventEnd)
            return void LIB.setTimeout(arguments.callee, 5e3);
          var n = [i.timing.navigationStart, i.timing.unloadEventStart, i.timing.unloadEventEnd, i.timing.redirectStart, i.timing.redirectEnd, i.timing.fetchStart, i.timing.domainLookupStart, i.timing.domainLookupEnd, i.timing.connectStart, i.timing.connectEnd, i.timing.requestStart, i.timing.responseStart, i.timing.responseEnd, i.timing.domLoading, i.timing.domInteractive, i.timing.domContentLoadedEventStart, i.timing.domContentLoadedEventEnd, i.timing.domComplete, i.timing.loadEventStart, i.timing.loadEventEnd];
          LIB.timeStat(e, n, a, !0)
        }
      }, 5e3)
    }
    ,
    LIB.resourceTimeStat = function(e, a, i, n) {
      LIB.setTimeout(function() {
        var t = window.performance || window.webkitPerformance || window.msPerformance;
        if (t && (t.getEntriesByName || t.webkitGetEntriesByName)) {
          if (0 == t.timing.loadEventEnd)
            return void LIB.setTimeout(arguments.callee, 5e3);
          var o;
          try {
            o = (t.getEntriesByName || t.webkitGetEntriesByName).call(t, a)[0]
          } catch (g) {
            return
          }
          if (!o)
            return void LIB.valueStat(n, 1, 11);
          if (0 == o.responseEnd)
            return void LIB.setTimeout(arguments.callee, 5e3);
          var d = [o.startTime, 0, o.startTime + o.startTime, o.redirectStart, o.redirectEnd, o.fetchStart, o.domainLookupStart, o.domainLookupEnd, o.connectStart, o.connectEnd, o.requestStart, o.responseStart, o.responseEnd, 0, 0, 0, 0, o.startTime + o.duration];
          LIB.timeStat(e, d, i, !0),
          LIB.valueStat(n, 1, 12)
        }
      }, 5e3)
    }
    ,
    LIB.report = function() {
      return function(e, a, i, n) {
        if (i || a) {
          var t = {}
            , o = []
            , g = ~~n.sandbox;
          n && delete n.sandbox,
          LIB.extend(t, n || {}, {
            "3": e || "default",
            "21": "client." + a + "." + i,
            "24": n.appid || "",
            "31": "minipayv2",
            "22": navigator.userAgent,
            "36": encodeURIComponent(location.href)
          }),
          LIB.each(t, function(e, a) {
            o.push(e + "=" + encodeURIComponent(a))
          }),
          (new Image).src = "//" + (g ? "sandbox." : "") + "api.unipay.qq.com/v1/900/15499/log_data?num=1&record0=" + o.join("|") + "&rr=" + Math.random()
        }
      }
    }();
    var _supportPostMessage = function() {
      if (window.postMessage)
        try {
          if (window.postMessage.toString().indexOf("[native code]") >= 0)
            return !0
        } catch (e) {
          return !0
        }
      return !1
    }()
      , _xsInstance = {}
      , _XS_TAG = "__CashXStream_";
    _supportPostMessage && LIB.attachEvent(window, "message", function(e) {
      _xsDispatch(e.data, e.source)
    });
    var XStream = LIB.XStream = function(e, a, i) {
      var n;
      return (n = _xsInstance[a]) ? n : (_xsInstance[a] = this,
      this.handler = e,
      this.targetPort = a,
      this.target = i,
      this.closed = !1,
      this.onInit = new Observer(this),
      this._pool = [],
      void (!_supportPostMessage && !navigator[_XS_TAG + XStream.channel + XStream.localPort] && (navigator[_XS_TAG + XStream.channel + XStream.localPort] = _xsDispatch)))
    }
    ;
    XStream.channel = 0,
    XStream.localPort = "",
    XStream.prototype._sendRaw = function(e) {
      var a;
      try {
        _supportPostMessage ? this.target.postMessage(e, "*") : "function" == typeof (a = navigator[_XS_TAG + XStream.channel + this.targetPort]) && a(e, window)
      } catch (i) {}
    }
    ,
    XStream.prototype._handle = function(e, a, i) {
      if (e.init)
        for (this.target = a,
        this.closed = !1,
        this.onInit.notify(); this._pool.length; )
          this._sendRaw(this._pool.shift());
      else
        !this.closed && "function" == typeof this.handler && this.handler.call(this, e.data, this.targetPort)
    }
    ,
    XStream.prototype.init = function() {
      if (this.target) {
        var e = {
          "port": XStream.localPort,
          "init": 1
        }
          , a = JSON.stringify(e);
        a = _XS_TAG + a,
        this._sendRaw(a),
        this.onInit.notify()
      }
    }
    ,
    XStream.prototype.send = function(e) {
      if (!this.closed && e) {
        var a = {
          "port": XStream.localPort,
          "data": e
        }
          , i = JSON.stringify(a);
        i = _XS_TAG + i,
        this.target ? this._sendRaw(i) : this._pool.push(i)
      }
    }
    ,
    XStream.prototype.close = function() {
      this.closed = !0,
      delete _xsInstance[this.targetPort]
    }
    ;
    var OnceCall = LIB.OnceCall = function(e, a, i) {
      this._timeout = e,
      this._timer = 0,
      a = a || {},
      this.onConsume = a.onConsume,
      this.onReject = a.onReject,
      this.onTimeout = a.onTimeout,
      this.hasCalled = !1,
      i && this.start()
    }
    ;
    OnceCall.prototype._call = function(e) {
      this.hasCalled || (this.hasCalled = !0,
      this._timer && clearTimeout(this._timer),
      this._timer = 0,
      "function" == typeof e && e.call(this))
    }
    ,
    OnceCall.prototype.start = function() {
      this._timeout >= 0 && (this._timer = LIB.setTimeout(this.timeout, this._timeout, this))
    }
    ,
    OnceCall.prototype.consume = function() {
      this._call(this.onConsume)
    }
    ,
    OnceCall.prototype.reject = function() {
      this._call(this.onReject)
    }
    ,
    OnceCall.prototype.timeout = function() {
      this._timer = 0,
      this._call(this.onTimeout)
    }
    ,
    LIB.getClientWidth = function(e) {
      var a = e || document
        , i = a.documentElement
        , n = a.body;
      return "BackCompat" != a.compatMode ? i.clientWidth : LIB.ua.ie ? Math.min(n.clientWidth, i.clientWidth) || n.clientWidth : n.clientWidth
    }
    ,
    LIB.getClientHeight = function(e) {
      var a = e || document
        , i = a.documentElement
        , n = a.body;
      return "BackCompat" != a.compatMode ? i.clientHeight : LIB.ua.ie ? Math.min(n.clientHeight, i.clientHeight) || n.clientHeight : n.clientHeight
    }
    ,
    LIB.isMinDevice = function() {
      return window.availHeight <= 768
    }
    ,
    LIB.getScrollWidth = function(e) {
      var a = e || document
        , i = LIB.ua.ie ? a.body : a.documentElement
        , n = i.getBoundingClientRect();
      return "width"in n ? n.width : n.right - n.left
    }
    ,
    LIB.getScrollHeight = function(e) {
      var a = e || document
        , i = LIB.ua.ie ? a.body : a.documentElement
        , n = i.getBoundingClientRect();
      return "height"in n ? n.height : n.bottom - n.top
    }
    ,
    LIB.getScrollLeft = function(e) {
      var a = e || document
        , i = LIB.ua.ie ? a.body : a.documentElement
        , n = i.getBoundingClientRect();
      return -n.left
    }
    ,
    LIB.getScrollTop = function(e) {
      var a = e || document
        , i = LIB.ua.ie ? a.body : a.documentElement
        , n = i.getBoundingClientRect();
      return -n.top
    }
    ,
    LIB.setScrollLeft = function(e, a) {
      var i = a || document
        , n = i.documentElement
        , t = i.body;
      ("CSS1Compat" != i.compatMode || LIB.ua.webkit ? t : n).scrollLeft = +e || 0
    }
    ,
    LIB.setScrollTop = function(e, a) {
      var i = a || document
        , n = i.documentElement
        , t = i.body;
      ("CSS1Compat" != i.compatMode || LIB.ua.webkit ? t : n).scrollTop = +e || 0
    }
    ;
    var _clientId = LIB.getIntRandom()
      , _domReadys = {};
    LIB.domReady = function(e, a) {
      a = a || window;
      var i, n, t = a.document;
      if ("complete" == t.readyState || "interactive" == t.readyState)
        return void (t.body ? "function" == typeof e && e() : LIB.setTimeout(LIB.domReady, 0, LIB, [e, a]));
      !(i = t["_CASHIER_DOM_READY_CLIENT_" + _clientId]) && (i = t["_CASHIER_DOM_READY_CLIENT_" + _clientId] = LIB.getIntRandom());
      var o, g;
      if (!(n = _domReadys[i])) {
        if (n = _domReadys[i] = new ReadyCall,
        o = function() {
          ("complete" == t.readyState || "interactive" == t.readyState) && (t.body ? n.ready() : LIB.setTimeout(o, 0))
        }
        ,
        t.attachEvent) {
          t.attachEvent("onreadystatechange", o),
          a.attachEvent("onload", o),
          g = function() {
            t.detachEvent("onreadystatechange", o),
            a.detachEvent("onload", o)
          }
          ,
          n.onReady(g),
          LIB.unload.subscribe(g);
          var d = !1;
          try {
            d = null == a.frameElement
          } catch (s) {}
          t.documentElement.doScroll && d && function() {
            if (!n.isReady) {
              try {
                t.documentElement.doScroll("left")
              } catch (e) {
                return void LIB.setTimeout(arguments.callee, 0)
              }
              o()
            }
          }()
        } else
          t.addEventListener && (t.addEventListener("DOMContentLoaded", o, !1),
          a.addEventListener("load", o, !1),
          g = function() {
            t.removeEventListener("DOMContentLoaded", o, !1),
            a.removeEventListener("load", o, !1)
          }
          ,
          n.onReady(g),
          LIB.unload.subscribe(g));
        n.onReady(function() {
          delete _domReadys[i];
          try {
            delete t["_CASHIER_DOM_READY_CLIENT_" + _clientId]
          } catch (e) {
            t["_CASHIER_DOM_READY_CLIENT_" + _clientId] = void 0
          }
        })
      }
      n.onReady(e)
    }
    ,
    LIB.xssFilter = function(e) {
      for (; e != unescape(e); )
        e = unescape(e);
      for (var a = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], i = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], n = 0; n < a.length; n++)
        e = e.replace(new RegExp(a[n],"gi"), i[n]);
      return e
    }
    ,
    LIB.fontFamily = LIB.ua.mac ? '"Helvetica Neue",Helvetica,"Hiragino Sans GB",Arial,sans-serif' : LIB.ua.windows && LIB.ua.windows >= 6 ? '"Microsoft Yahei",Tohama' : "Tahoma",
    LIB.cookie = {
      "get": function(e) {
        var a = document.cookie.match(new RegExp("(?:^|;\\s)" + e + "=(.*?)(?:;\\s|$)"));
        return a ? unescape(a[1]) : ""
      },
      "set": function(e, a, i) {
        var n = new Date
          , t = i.domain || "pay.qq.com"
          , o = i.path || "/"
          , g = i.time || 31536e7;
        n.setTime(n.getTime() + g),
        document.cookie = e + "=" + escape(a) + "; path=" + o + "; domain=" + t + "; expires=" + n.toUTCString()
      },
      "del": function(e, a) {
        a.time = -new Date,
        LIB.cookie.set(e, "", a)
      }
    };
    var DLG = LIB.DLG = {}
      , _dlgInstance = {}
      , _dlgIndex = 1;
    DLG._handle = function(e, a) {
      var i, n = a.idx;
      a.key;
      return !a.key && (i = _dlgInstance[n]) ? (i.platform.consume(),
      delete _dlgInstance[n],
      !1) : (e.send({
        "idx": n
      }),
      !0)
    }
    ,
    DLG._call = function(e, a, i) {
      i = i || {};
      var n = i.timestamp = i.timestamp || (new Date).getTime()
        , t = _dlgIndex++;
      _dlgInstance[t] = {
        "timestamp": n,
        "platform": new OnceCall(1e4,{
          "onConsume": function() {
            LIB.valueStat(350303, 1, 20, (new Date).getTime() - n)
          },
          "onTimeout": function() {
            !e.closed && LIB.valueStat(350303, 2, 19, (new Date).getTime() - n)
          }
        },(!0))
      };
      e.send({
        "key": a,
        "args": i,
        "idx": t
      })
    }
    ,
    LIB.insertStyle = function(e, a) {
      a = a || document;
      var i = a.createElement("style");
      i.type = "text/css",
      a.getElementsByTagName("head")[0].appendChild(i),
      i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(a.createTextNode(e))
    }
    ;
    var STYLES = {}
      , _isQuirks = LIB.ua.ie && "BackCompat" == document.compatMode
      , _styleSheet = ["body{margin:0;_height:100%;}"];
    _styleSheet.push(".midas_minipay_dialog_mask{position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;z-index:4000;background-color:#000;-moz-opacity:0.3;opacity:0.3;filter:alpha(opacity=30);}"),
    _styleSheet.push(".midas_minipay_dialog_wrap{position:absolute;-moz-border-radius:5px;border-radius:5px;font-size:12px;color:#313131;font-family:", LIB.fontFamily, ";-o-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-ms-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-moz-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-webkit-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;}"),
    _styleSheet.push(".midas_minipay_dialog_border{position:absolute;z-index:1;top:0;left:0;-moz-border-radius:5px;border-radius:5px;background:rgba(187,187,187,0.9);filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0 startColorstr=#5abbbbbb,endColorstr=#5abbbbbb);-o-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-ms-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-moz-transition:left .6s ease-out,top .6s ease-out,width .6s midas_minipay_dialog_backframeease-out;-webkit-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border .midas_minipay_dialog_border{display:none}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_no_position .midas_minipay_dialog_border{display:none}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_noani .midas_minipay_dialog_border{display:none}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border{position:absolute;color:#313131;background-color:#fff;font-size:12px;font-family:", LIB.fontFamily, ";-o-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-ms-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-moz-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-webkit-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_no_position{position:relative;color:#313131;background-color:#fff;font-size:12px;font-family:", LIB.fontFamily, ";-o-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-ms-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-moz-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;-webkit-transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;transition:left .6s ease-out,top .6s ease-out,width .6s ease-out;}"),
    _styleSheet.push(".midas_minipay_dialog_mask_noani{position:absolute;z-index:4000;-moz-opacity:1;opacity:1;filter:alpha(opacity=1);-o-transition:width .6s ease-out,height .6s ease-out;-ms-transition:width .6s ease-out,height .6s ease-out;-moz-transition:width .6s ease-out,height .6s ease-out;-webkit-transition:width .6s ease-out,height .6s ease-out;transition:width .6s ease-out,height .6s ease-out;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_noani{position:absolute;-moz-border-radius:5px;border-radius:5px;font-size:12px;color:#313131;font-family:", LIB.fontFamily, ";-o-transition:width .6s ease-out;-ms-transition:width .6s ease-out;-moz-transition:width .6s ease-out;-webkit-transition:width .6s ease-out;transition:width .6s ease-out;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_noani{position:absolute;color:#313131;background-color:#fff;font-size:12px;font-family:", LIB.fontFamily, ";-o-transition:width .6s ease-out;-ms-transition:width .6s ease-out;-moz-transition:width .6s ease-out;-webkit-transition:width .6s ease-out;transition:width .6s ease-out;}");
    var isMinDevice = LIB.isMinDevice()
      , headerH = isMinDevice ? 31 : 39;
    _styleSheet.push(".midas_minipay_dialog_header{margin-left:10px;margin-right:10px;height:" + headerH + "px;position:relative;z-index:2;border-bottom:1px solid #d8d8d8;background:#fafafa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fafafa',endColorstr='#ededed',GradientType=0);background:-o-linear-gradient(top,#fafafa 0%,#ededed 100%);background:-moz-linear-gradient(top,#fafafa 0%,#ededed 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#fafafa),color-stop(100%,#ededed));background:-webkit-linear-gradient(top,#fafafa 0%,#ededed 100%);background:linear-gradient(top,#fafafa 0%,#ededed 100%);}"),
    _styleSheet.push(".midas_minipay_dialog_header .cp-header-title{line-height:" + headerH + "px;font-size:16px;overflow:hidden; text-align:center; margin:0;padding-left:10px;font-weight:normal;}"),
    _styleSheet.push(".midas_minipay_dialog_header [class^='icon-']{display: inline-block;*display: inline;*zoom: 1;font-size: 0;background-repeat: no-repeat;}"),
    _styleSheet.push(".midas_minipay_dialog_header .checkbox-box{font-size: 12px;cursor: pointer;margin-right: 10px;}"),
    _styleSheet.push(".midas_minipay_dialog_header .checkbox-box input{display: none;}"),
    _styleSheet.push(".midas_minipay_dialog_header .service a{color: #969696;text-decoration: underline;font-size: 12px;}"),
    _styleSheet.push(".midas_minipay_dialog_header .icon-checkbox{background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites.png"] + ");background-position: 0px -45px;width: 12px;height: 12px;cursor: pointer;}"),
    _styleSheet.push("@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { .midas_minipay_dialog_header .icon-checkbox{background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites@2x.png"] + ");background-size: 12px 57px;}}"),
    _styleSheet.push(".midas_minipay_dialog_header .prop-custom-title span{margin: 0 5px;font-size: 16px;}"),
    _styleSheet.push(".midas_minipay_dialog_header .prop-custom-title .service{display: inline;} .midas_minipay_dialog_header .form-group label{width:auto;}"),
    _styleSheet.push(".midas_minipay_dialog_header .prop-custom-title img{width: 27px;height: 27px;margin-top: -3px;vertical-align: middle;display: inline;*display: inline;*zoom: 1}"),
    _styleSheet.push(".midas_minipay_dialog_header .checkbox-box .icon-checkbox{vertical-align: -2px;*position: relative; *left: -3px;top: -2px;}"),
    _styleSheet.push(".midas_minipay_dialog_header .checkbox-box.checked .icon-checkbox{background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites.png"] + ");background-position: 0px -29px;;width: 12px;height: 12px;}"),
    _styleSheet.push("@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { .midas_minipay_dialog_header .checkbox-box.checked .icon-checkbox{background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites@2x.png"] + ");background-size: 12px 57px;}}"),
    _styleSheet.push(".midas_minipay_dialog_header .checkbox-box input[type=checkbox]{display: none;outline: 0;}"),
    _styleSheet.push(".midas_minipay_dialog_header .header-icon-first, .midas_minipay_dialog_header .header-icon-last {  position: absolute;  width: 20px;  height: 20px;  top: 50%;  margin-top: -10px;  text-align: center;  line-height: 20px;  cursor: pointer;}"),
    _styleSheet.push(".midas_minipay_dialog_header .header-icon-first i,.midas_minipay_dialog_header .header-icon-last i {  *position: relative;  *top: 5px; }"),
    _styleSheet.push(".midas_minipay_dialog_header .header-icon-first {  left: 20px; } .midas_minipay_dialog_header .header-icon-last {  right: 11px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon{display: inline-block;*display: inline;*zoom: 1;font-size: 0;background-repeat: no-repeat;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_i { _display: inline; _zoom: 1; _font-size: 0; _background-repeat: no-repeat; }"),
    _styleSheet.push(".midas_minipay_dialog_icon_back {  background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites.png"] + "); background-position: 0px -14px; width: 7px; height: 11px;}"),
    _styleSheet.push("@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { .midas_minipay_dialog_icon_back {  background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites@2x.png"] + "); background-size: 12px 57px;}}"),
    _styleSheet.push(".midas_minipay_dialog_icon_clear {background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites.png"] + "); background-position: 0px 1px; width: 10px; height: 10px; }"),
    _styleSheet.push("@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { .midas_minipay_dialog_icon_clear {background-image: url(//midas.gtimg.cn/midas/minipay_v2/" + {
      "images/QB.png": "images/QB.046c6f365b9796e36ed2f96b4924b4b4.png",
      "images/bank_ico.png": "images/bank_ico.a40d39d1c3ad47a76d4a2c9e09db95a9.png",
      "images/bank_ico_disabled.png": "images/bank_ico_disabled.8a7a286a51ad88d29a757039efea7f7c.png",
      "images/bg-freeze.png": "images/bg-freeze.3e6351cd9f13bc83e00b8feeb2032c73.png",
      "images/bg-freeze@2x.png": "images/bg-freeze@2x.591c20bc893f97fff2765ef9c6f40d80.png",
      "images/btn-loading.gif": "images/btn-loading.8feee980ad8fd43b991217d3dfb9e687.gif",
      "images/business.png": "images/business.e07149b49789269906b89301ce226937.png",
      "images/diamond.png": "images/diamond.954744fed159ef6429a20c398577f82b.png",
      "images/disabledSprites.png": "images/disabledSprites.adeac1e5a6c4b702af79e961192dffe0.png",
      "images/disabledSprites@2x.png": "images/disabledSprites@2x.21f2f764c05367bab017964d369809c7.png",
      "images/dnf-code.png": "images/dnf-code.7aa2494d0edbba7b0fcdc078c63d5f06.png",
      "images/hd-logo.png": "images/hd-logo.e1e8194358ccf6ec227c29cc89de07d7.png",
      "images/headerSprites.png": "images/headerSprites.02b55a0447b7b1dad0c4877f628d09b2.png",
      "images/headerSprites@2x.png": "images/headerSprites@2x.96d3e4193f4542347e1df88b5a79a952.png",
      "images/icon-arrow.png": "images/icon-arrow.33131a0d46a8de5968ded4e71c88fd73.png",
      "images/icon-arrow@2x.png": "images/icon-arrow@2x.36f307dc4cac2a5142f301bb3706d823.png",
      "images/icon-super-vip.png": "images/icon-super-vip.d8b5f3dc2ed96a3f24033cf008f03161.png",
      "images/icon-unactive.png": "images/icon-unactive.1e5aea7a46826cfdd3228339b74207e4.png",
      "images/icon-unactive@2x.png": "images/icon-unactive@2x.b264111d8f3e6bae4dce36ded1757270.png",
      "images/icon-year-vip.png": "images/icon-year-vip.20053bc768d6cf167f4d8ad1e002101f.png",
      "images/ie6sprite.png": "images/ie6sprite.62af561189af0d2d7130543b69091eb8.png",
      "images/iframedemo.png": "images/iframedemo.35dc2749315268d65bed983044c959e8.png",
      "images/kjzf.jpg": "images/kjzf.02d56ee8f7ad1d92d38738f8b000b581.jpg",
      "images/li_square.png": "images/li_square.afe4283bb9da445e8ebcacf4a08e5089.png",
      "images/loading.gif": "images/loading.745836985d1bb3f878b75069d665c865.gif",
      "images/loading@2x.gif": "images/loading@2x.e1fc478bed27d875ac688ce01ee0530b.gif",
      "images/logo-cjclub.png": "images/logo-cjclub.f2af1de653b8885728cc04c7dd8cd492.png",
      "images/logo-ltmclub.png": "images/logo-ltmclub.6cd05f04dc73637c41d7b9addbba1354.png",
      "images/logo_l.png": "images/logo_l.b495b3ccc969735499d165efe090894c.png",
      "images/lolSprites.png": "images/lolSprites.63e7decd484e940069a81596f7ef7490.png",
      "images/lolSprites@2x.png": "images/lolSprites@2x.d2c5465c7dde8a0982887e27d42c9913.png",
      "images/paySprite.png": "images/paySprite.4d6a9ca97b68160d957c19332921687e.png",
      "images/paySprite@2x.png": "images/paySprite@2x.6b8cb3e3bf0e2b5e2c49803262fe17f6.png",
      "images/prop130130.jpg": "images/prop130130.de2908a42968837672971b1a8d2c215e.jpg",
      "images/prop130136.jpg": "images/prop130136.a21ae6f79b4d711694d0f6d54412fb04.jpg",
      "images/prop15090.jpg": "images/prop15090.038c369b2c57d94448786eb950cd053c.jpg",
      "images/prop8060.jpg": "images/prop8060.a088890c86cf64941e64b89fbaa40a46.jpg",
      "images/prop9090.jpg": "images/prop9090.32b9b9cb81814783fc0b58a93d7b94e7.jpg",
      "images/qq-login.png": "images/qq-login.0b2c3d42230f4231c06e37ce4697f8b2.png",
      "images/qqcjhy.png": "images/qqcjhy.97827b1468642b40b7abe774467c623d.png",
      "images/qqhy.png": "images/qqhy.49d4db99c62068ee201cb0a1868d08e9.png",
      "images/qr-code.jpg": "images/qr-code.003a7e689398041636d833cfde797503.jpg",
      "images/qr-code.png": "images/qr-code.6cd5915a7c9d4d747c64d08ac0744eb2.png",
      "images/qr-loading.gif": "images/qr-loading.e6df036d9ecdfee901d2ad5f8ffecbdf.gif",
      "images/sprite.png": "images/sprite.5e2f61e2dedbc68b8b5c81275ba25d71.png",
      "images/sprite@2x.png": "images/sprite@2x.c6e1a4965de7a4069e10e6f1bb463a8c.png",
      "images/tooltip.png": "images/tooltip.a33bc45a3a2f9f1d1bc82e7da4556446.png",
      "images/tpage-left.png": "images/tpage-left.528507587363213c439b0b52baf76604.png",
      "images/tpage-right.png": "images/tpage-right.2c52d7e4dd27111cf4e383fcd3d0972d.png",
      "images/translucent-bg.png": "images/translucent-bg.ab518231f1e2ebbbf22914b9f3dc2735.png",
      "images/verify-code.jpg": "images/verify-code.914eaf818e50a7213757f4dbd1d6a748.jpg",
      "images/waiting.gif": "images/waiting.eb1ed90dcd39edf99d1fc73ccb8089ec.gif",
      "images/webloading.gif": "images/webloading.6aa85f8ba65fd1fae3b9a9c0b127a4e2.gif",
      "images/wx-login.png": "images/wx-login.97feabdd5bc670566116134c28886f11.png",
      "images/clock/apple-ligth.png": "images/clock/apple-ligth.1e80b86e0f63be4e71eed0bc596da46d.png",
      "images/clock/clock-bg.png": "images/clock/clock-bg.03e2b940a24612a3f2b436fdb5b2937d.png",
      "images/clock/clock.png": "images/clock/clock.e52c52857e4844ddb9c879036db03bca.png",
      "images/clock/footer-left.png": "images/clock/footer-left.52b5e9cca4a6529bec0ecc9cec86b9d9.png",
      "images/clock/footer-right.png": "images/clock/footer-right.01cb75a64ebf3b90bad391582a4e3358.png",
      "images/clock/hand-left.png": "images/clock/hand-left.8ba3d6bf45fd8d406dcd77a3613daafe.png",
      "images/clock/hand-right.png": "images/clock/hand-right.2d42711942d0647a008377d53606235e.png",
      "images/clock/phone.png": "images/clock/phone.4ae62d4f39d21dd600f1c33ae362ec2b.png",
      "images/header/icon-back.png": "images/header/icon-back.2f1709df43b526b92ea68fe1c98dbf47.png",
      "images/header/icon-back@2x.png": "images/header/icon-back@2x.b22db59448bba6f1b862f22a6d105684.png",
      "images/header/icon-checkbox-checked-2.png": "images/header/icon-checkbox-checked-2.b33d76facb2e978e7624a6cfb752e64f.png",
      "images/header/icon-checkbox-checked-2@2x.png": "images/header/icon-checkbox-checked-2@2x.74f1f31bf0b4b73e3e34565ca1984fd0.png",
      "images/header/icon-checkbox.png": "images/header/icon-checkbox.e35f493b67f0d3693f71c737ed891e9d.png",
      "images/header/icon-checkbox@2x.png": "images/header/icon-checkbox@2x.66b9580835384f8efcdf49b8988e767f.png",
      "images/header/icon-clear.png": "images/header/icon-clear.13fb5e158c7d442d92ee4881aead2399.png",
      "images/header/icon-clear@2x.png": "images/header/icon-clear@2x.ddc6a8d06ea6c9bba85ed09df261ebe9.png",
      "images/header/icon-info.png": "images/header/icon-info.e4787b0c1d704bada2fa28750fea11e4.png",
      "images/header/icon-info@2x.png": "images/header/icon-info@2x.2a9dd2cdb2113184c4757ff9af06432c.png",
      "images/lol/QB.png": "images/lol/QB.dd05309099f3013cd41454d040014177.png",
      "images/lol/btn-default-active.png": "images/lol/btn-default-active.e9d11e9bc22b370177ff018b2b257782.png",
      "images/lol/btn-default-hover.png": "images/lol/btn-default-hover.c9816edfd2083cb32369fc4fefd65d91.png",
      "images/lol/btn-default.png": "images/lol/btn-default.a018ef30b0653d035700c9baa3f51541.png",
      "images/lol/btn-primary-active.png": "images/lol/btn-primary-active.ff5df362b08a2b89bb09e9d83b163eb9.png",
      "images/lol/btn-primary-hover.png": "images/lol/btn-primary-hover.ae273696c612bf79bf038a6e1167c38a.png",
      "images/lol/btn-primary.png": "images/lol/btn-primary.eb328c97ac018e429bef618274a94408.png",
      "images/lol/btnbg_channel.png": "images/lol/btnbg_channel.fb3ab8335aab684c09f7046dfe2a8123.png",
      "images/lol/diamond-lol.png": "images/lol/diamond-lol.9035640a41a8dbf190c65ce20400904a.png",
      "images/lol/icon-marketing-l.png": "images/lol/icon-marketing-l.30707f3ada2b9f89c879c703dcc2d8bb.png",
      "images/lol/icon-marketing-r.png": "images/lol/icon-marketing-r.ab1b4f70477b8bff13aff6489b4bdf32.png",
      "images/lol/lol-background.jpg": "images/lol/lol-background.6638765318894a9f424dc3b63c22865b.jpg",
      "images/lol/lolSprites.png": "images/lol/lolSprites.2029b18a335497f29c073fa9b4b75435.png",
      "images/lol/lolSprites@2x.png": "images/lol/lolSprites@2x.0f9bce92fb6f102a20bf06f282193161.png",
      "images/lol/webloading.gif": "images/lol/webloading.05a9dc49392193d8ad757da5ab6d27f2.gif",
      "images/logo/cf/90.png": "images/logo/cf/90.e7f4ff8119a1dd352b29abb14428c158.png",
      "images/logo/qsj/90.png": "images/logo/qsj/90.72d3b83af1d36557ff2fec537bae4e19.png",
      "images/logo/nz/90.png": "images/logo/nz/90.11b4039786c28f6ea00232c677e7a7f7.png"
    }["images/headerSprites@2x.png"] + "); background-size: 12px 57px; }}"),
    _styleSheet.push(".midas_minipay_dialog_content{margin-bottom:10px;margin-left:10px;margin-right:10px;color:#5f5f5f;background-color:#fff;overflow:hidden;position:relative;z-index:2;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border .midas_minipay_dialog_content{margin:0;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_no_position .midas_minipay_dialog_content{margin:0;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border .midas_minipay_dialog_header{margin:0;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_no_position .midas_minipay_dialog_header{margin:0;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_noani .midas_minipay_dialog_content{margin:0;}"),
    _styleSheet.push(".midas_minipay_dialog_wrap_no_border_noani .midas_minipay_dialog_header{margin:0;}"),
    _styleSheet.push(".midas_minipay_dialog_content_mask{position:absolute;width:100%;height:100%;left:0;top:0;background:#fff;filter:alpha(opacity=0);opacity:0;}"),
    _styleSheet.push(".midas_minipay_dialog_content a:link,.midas_minipay_dialog_content a:visited{color:#5181b4;text-decoration:none;}"),
    _styleSheet.push(".midas_minipay_dialog_content a:hover{text-decoration:underline;}"),
    _styleSheet.push(".midas_minipay_dialog_footer{background-color:#f3f3f3;text-align:right;clear:both;padding:6px 6px 0 0;height:", _isQuirks ? 35 : 29, "px;}"),
    _styleSheet.push(".midas_minipay_dialog_btn_n:link,.midas_minipay_dialog_btn_sb:link,.midas_minipay_dialog_btn_sb_disabled:link,.cash_dialog_button_disabled:link,.midas_minipay_dialog_btn_n:visited,.midas_minipay_dialog_btn_sb:visited,.midas_minipay_dialog_btn_sb_disabled:visited,.cash_dialog_button_disabled:visited,.midas_minipay_dialog_btn_n:hover,.midas_minipay_dialog_btn_sb:hover,.midas_minipay_dialog_btn_sb_disabled:hover,.cash_dialog_button_disabled:hover,.midas_minipay_dialog_btn_n:active,.midas_minipay_dialog_btn_sb:active,.midas_minipay_dialog_btn_sb_disabled:active,.cash_dialog_button_disabled:active{border-radius:3px;color:#333;line-height:22px;height:22px;display:inline-block;margin-left:4px;padding:0 10px;text-decoration:none;font-size:12px;}"),
    _styleSheet.push(".midas_minipay_dialog_btn_n:link,.midas_minipay_dialog_btn_n:visited,.midas_minipay_dialog_btn_n:hover,.midas_minipay_dialog_btn_n:active{border:1px solid #b4b4b4;background:#f4f3f4;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f4f3f4',endColorstr='#dfdede',GradientType=0);background:-o-linear-gradient(top,#f4f3f4 0%,#dfdede 100%);background:-moz-linear-gradient(top,#f4f3f4 0%,#dfdede 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#f4f3f4),color-stop(100%,#dfdede));background:-webkit-linear-gradient(top,#f4f3f4 0%,#dfdede 100%);background:linear-gradient(top,#f4f3f4 0%,#dfdede 100%);}"),
    _styleSheet.push(".midas_minipay_dialog_btn_n:hover,.midas_minipay_dialog_btn_n:active{background:#fafafa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fafafa',endColorstr='#dfdede',GradientType=0);background:-o-linear-gradient(top,#fafafa 0%,#dfdede 100%);background:-moz-linear-gradient(top,#fafafa 0%,#dfdede 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#fafafa),color-stop(100%,#dfdede));background:-webkit-linear-gradient(top,#fafafa 0%,#dfdede 100%);background:linear-gradient(top,#fafafa 0%,#dfdede 100%);}"),
    _styleSheet.push(".midas_minipay_dialog_btn_sb:link,.midas_minipay_dialog_btn_sb:visited,.midas_minipay_dialog_btn_sb:hover,.midas_minipay_dialog_btn_sb:active{color:#fff;border:1px solid #4c92c8;background:#56bdf4;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#56bdf4',endColorstr='#46a3d7',GradientType=0);background:-o-linear-gradient(top,#56bdf4 0%,#46a3d7 100%);background:-moz-linear-gradient(top,#56bdf4 0%,#46a3d7 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#56bdf4),color-stop(100%,#46a3d7));background:-webkit-linear-gradient(top,#56bdf4 0%,#46a3d7 100%);background:linear-gradient(top,#56bdf4 0%,#46a3d7 100%);}"),
    _styleSheet.push(".midas_minipay_dialog_btn_sb:hover,.midas_minipay_dialog_btn_sb:active{background:#56bdf4;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#56bdf4',endColorstr='#57addd',GradientType=0);background:-o-linear-gradient(top,#56bdf4 0%,#57addd 100%);background:-moz-linear-gradient(top,#56bdf4 0%,#57addd 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#56bdf4),color-stop(100%,#57addd));background:-webkit-linear-gradient(top,#56bdf4 0%,#57addd 100%);background:linear-gradient(top,#56bdf4 0%,#57addd 100%);}"),
    _styleSheet.push(".cash_dialog_button_disabled:link,.cash_dialog_button_disabled:visited,.cash_dialog_button_disabled:hover,.cash_dialog_button_disabled:active{color:#bbb;background-color:#f9f9f9;border:1px solid #dcdcdc;cursor:no-drop;}"),
    _styleSheet.push(".midas_minipay_dialog_btn_sb_disabled:link,.midas_minipay_dialog_btn_sb_disabled:visited,.midas_minipay_dialog_btn_sb_disabled:hover,.midas_minipay_dialog_btn_sb_disabled:active{color:#fff;border:1px solid #60a7dd;background:#9cd7f7;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#9cd7f7',endColorstr='#83bede',GradientType=0);background:-o-linear-gradient(top,#9cd7f7 0%,#83bede 100%);background:-moz-linear-gradient(top,#9cd7f7 0%,#83bede 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#9cd7f7),color-stop(100%,#83bede));background:-webkit-linear-gradient(top,#9cd7f7 0%,#83bede 100%);background:linear-gradient(top,#9cd7f7 0%,#83bede 100%);cursor:no-drop;}"),
    _styleSheet.push(".midas_minipay_dialog_c_c{margin:40px auto;position:relative;width:260px;}"),
    _styleSheet.push(".midas_minipay_dialog_c_c h3{padding-left:35px;font-size:14px;margin:0 0 10px 0;line-height:130%;font-weight:bold;}"),
    _styleSheet.push(".midas_minipay_dialog_c_c_p{padding-left:35px;margin-bottom:6px;line-height:130%;font-size:12px;}"),
    _styleSheet.push(".midas_minipay_dialog_confirm_icon{background-image:url('//qzonestyle.gtimg.cn/open/fusion/img/sprite.png?max_age=31104000&v=3');background-repeat:no-repeat;width:25px;height:24px;font-size:0;line-height:100px;overflow:hidden;left:0;top:-2px;position:absolute;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_req{background-position:left -260px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_error{background-position:left -284px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_warn{background-position:left -308px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_ok{background-position:left -332px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_alt{width:18px;height:10px;font-size:0;line-height:0;position:relative;display:inline-block;*display:inline;*zoom:1;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_alt i{background-image:url('//qzonestyle.gtimg.cn/open/fusion/img/sprite.png?max_age=31104000&v=3');background-repeat:no-repeat;width:15px;height:15px;display:block;position:absolute;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_alt_error i{background-position:left -356px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_alt_warn i{background-position:left -371px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_alt_ok i{background-position:-15px -356px;}"),
    _styleSheet.push(".midas_minipay_dialog_icon_alt_none{display:none;}"),
    STYLES.DIALOG = _styleSheet.join(""),
    STYLES.insertDialog = function() {
      LIB.insertStyle(STYLES.DIALOG),
      STYLES.insertDialog = LIB.emptyFn
    }
    ;
    var CANVAS = LIB.CAV = {};
    CANVAS._dom = [],
    CANVAS._pos = [],
    CANVAS._hasTop = !1,
    CANVAS._onPropertyChanged = new Observer(CANVAS);
    var _canvasInited = !1;
    CANVAS._handle = function(e, a, i) {
      var n;
      0 == a ? LIB.domReady(function() {
        !i && CANVAS._onPropertyChanged.notify()
      }) : CANVAS._dom[a] && (n = CANVAS._dom[a].win,
      LIB.domReady(function() {
        var e, t = n.document, o = function() {
          var e, a = 0;
          try {
            (e = t.getElementById("QZ_Toolbar_Container")) ? a += e.offsetHeight : (e = t.getElementById("page3rdApp")) && (a += e.offsetTop),
            (e = n.QZFL.element.get(".fixed_topbar").elements[0]) && (a += e.offsetHeight)
          } catch (i) {}
          return a
        }(), g = CANVAS._pos[a] = "hidden" == t.documentElement.style.overflow ? {
          "sl": 0,
          "st": 0,
          "sw": LIB.getClientWidth(t),
          "sh": LIB.getClientHeight(t) - o,
          "cw": LIB.getClientWidth(t),
          "ch": LIB.getClientHeight(t) - o
        } : {
          "sl": LIB.getScrollLeft(t),
          "st": LIB.getScrollTop(t),
          "sw": LIB.getScrollWidth(t),
          "sh": LIB.getScrollHeight(t) - o,
          "cw": LIB.getClientWidth(t),
          "ch": LIB.getClientHeight(t) - o
        };
        try {
          CANVAS._dom[a].frame && (e = CANVAS._dom[a].frame.getBoundingClientRect(),
          g.l = e.left,
          g.t = e.top - o,
          g.r = e.right,
          g.b = e.bottom - o)
        } catch (d) {}
        !i && CANVAS._onPropertyChanged.notify()
      }, n))
    }
    ,
    CANVAS._init = function(e) {
      if (!_canvasInited) {
        _canvasInited = !0;
        var a, i, n, t, o, g, d = 0, s = e || window;
        try {
          for (; s; ) {
            a = !1;
            try {
              s.document && s.document.domain == document.domain && (a = !0)
            } catch (c) {}
            if (CANVAS._dom[d] = i = {
              "win": s
            },
            CANVAS._pos[d] = void 0,
            a && (LIB.attachCrossEvent(s, "scroll", CANVAS._handle, s, {
              "args": [d]
            }),
            LIB.attachCrossEvent(s, "resize", CANVAS._handle, s, {
              "args": [d]
            }),
            s == top && (CANVAS._hasTop = !0),
            d > 0 && (n = CANVAS._dom[d - 1]))) {
              try {
                t = Array.prototype.slice.call(s.document.getElementsByTagName("iframe"), 0).concat(Array.prototype.slice.call(s.document.getElementsByTagName("frame"), 0))
              } catch (c) {
                t = [],
                g = s.document.getElementsByTagName("iframe");
                for (var p, r = 0; p = g[r]; r++)
                  t.push(p);
                g = s.document.getElementsByTagName("frame");
                for (var p, r = 0; p = g[r]; r++)
                  t.push(p)
              }
              o = t.length;
              for (var r = 0; r < o; r++)
                if (t[r].contentWindow == n.win) {
                  i.frame = t[r];
                  break
                }
              CANVAS._handle(null, d, !0)
            }
            if (s == top)
              break;
            d++,
            s = s.parent
          }
        } catch (c) {}
        CANVAS._onPropertyChanged.notify()
      }
    }
    ,
    CANVAS._ready = new ReadyCall,
    CANVAS._xReady = !1,
    CANVAS._onClientRectChanged = new Observer;
    var _cavClientRect = null;
    CANVAS._getClientRect = function() {
      var e, a, i, n;
      return _cavClientRect ? _cavClientRect : (e = LIB.getScrollLeft(),
      a = LIB.getScrollTop(),
      i = Math.max(LIB.getScrollWidth(), LIB.getClientWidth()),
      n = Math.max(LIB.getScrollHeight(), LIB.getClientHeight()),
      {
        "left": e,
        "top": a,
        "right": i + e,
        "bottom": n + a,
        "clientLeft": 0,
        "clientTop": 0,
        "clientRight": i,
        "clientBottom": n
      })
    }
    ,
    LIB.domReady(function() {
      var e, a, i, n, t, o, g;
      _cavClientRect || (e = window == top,
      a = LIB.getScrollLeft(),
      i = LIB.getScrollTop(),
      n = LIB.getClientWidth(),
      t = LIB.getClientHeight(),
      o = Math.min(n, e ? 1 / 0 : screen.availWidth - 30),
      g = Math.min(t, e ? 1 / 0 : screen.availHeight - 100),
      _cavClientRect = {
        "left": a,
        "top": i,
        "right": o + a,
        "bottom": g + i,
        "clientLeft": 0,
        "clientTop": 0,
        "clientRight": o,
        "clientBottom": g
      })
    }),
    CANVAS._updatePos = function(e, a) {
      for (var i = e.pos, n = 1, t = i.length; n < t; n++)
        i[n] && ((CANVAS._pos[n] = i[n]).x = !0);
      CANVAS._hasTop = CANVAS._hasTop || e.hasTop,
      CANVAS._xReady = !0,
      CANVAS._onPropertyChanged.notify()
    }
    ,
    CANVAS._onPropertyChanged.subscribe(function() {
      CANVAS._xReady && LIB.domReady(function() {
        var e, a, i = LIB.getScrollLeft(), n = LIB.getScrollTop(), t = LIB.getClientWidth(), o = LIB.getClientHeight(), g = CANVAS._hasTop, d = CANVAS._pos.length, s = CANVAS._pos[d - 1] || {
          "cw": Math.min(t, g ? 1 / 0 : screen.availWidth - 30),
          "ch": Math.min(o, g ? 1 / 0 : screen.availHeight - 100)
        };
        if (e = {
          "left": 0,
          "top": 0,
          "right": s.cw,
          "bottom": s.ch
        },
        d > 0) {
          a = {
            "l": e.left,
            "t": e.top,
            "r": e.right,
            "b": e.bottom
          };
          for (var c, p = d - 1; p > 0; p--)
            c = CANVAS._pos[p] || {},
            !("l"in c) && (c.l = 0),
            !("t"in c) && (c.t = 20),
            !("r"in c) && (c.r = a.r),
            !("b"in c) && (c.b = a.b - 20),
            e.left -= c.l,
            e.top -= c.t,
            e.right -= c.l,
            e.bottom -= c.t,
            a.l = Math.max(a.l, c.l) - c.l,
            a.t = Math.max(a.t, c.t) - c.t,
            a.r = Math.min(a.r, c.r) - c.l,
            a.b = Math.min(a.b, c.b) - c.t;
          e.left = Math.max(a.l, e.left),
          e.top = Math.max(a.t, e.top),
          e.right = Math.min(a.r, e.right, e.left + t),
          e.bottom = Math.min(a.b, e.bottom, e.top + o)
        }
        if (e.clientLeft = e.left,
        e.clientTop = e.top,
        e.clientRight = e.right,
        e.clientBottom = e.bottom,
        e.left += i,
        e.top += n,
        e.right += i,
        e.bottom += n,
        _cavClientRect) {
          for (var r in e)
            if (e[r] != _cavClientRect[r]) {
              _cavClientRect = e,
              CANVAS._onClientRectChanged.notify(e);
              break
            }
        } else
          _cavClientRect = e,
          CANVAS._onClientRectChanged.notify(e);
        CANVAS._ready.ready()
      })
    }),
    CANVAS._setScroll = function(e, a) {
      e && CANVAS._ready.onReady(function() {
        var a = NaN
          , i = NaN;
        "left"in e && (a = +e.left || 0),
        "top"in e && (i = +e.top || 0);
        var n = CANVAS._pos.length;
        if (!isNaN(a) || !isNaN(i)) {
          var t = LIB.getScrollWidth()
            , o = LIB.getScrollHeight()
            , g = LIB.getClientWidth()
            , d = LIB.getClientHeight();
          if (0 == n)
            return !isNaN(a) && LIB.setScrollLeft(Math.min(t - g, a)),
            void (!isNaN(i) && LIB.setScrollTop(Math.min(o - d, i)));
          for (var s, c, p, r, l = 0, m = 0, f = LIB.getScrollLeft(), b = LIB.getScrollTop(), h = [], u = 0; u < n; u++)
            if (r = 0 == u ? {
              "l": -f,
              "t": -b,
              "sl": f,
              "st": b,
              "sw": t,
              "sh": o,
              "cw": g,
              "ch": d
            } : CANVAS._pos[u]) {
              if (l -= r.l,
              (s = Math.min(r.sl, l - a)) > 0 || (s = Math.max(r.sl + r.cw - r.sw, l - a)) < 0) {
                if (0 != u && CANVAS._pos[u].x)
                  h.push({
                    "i": u,
                    "l": s
                  });
                else
                  try {
                    p = CANVAS._dom[u].win.document,
                    LIB.setScrollLeft(LIB.getScrollLeft(p) - s, p)
                  } catch (_) {}
                l -= s
              }
              if (m -= r.t,
              (c = Math.min(r.st, m - i)) > 0 || (c = Math.max(r.st + r.ch - r.sh, m - i)) < 0) {
                if (0 != u && CANVAS._pos[u].x)
                  h.push({
                    "i": u,
                    "t": c
                  });
                else
                  try {
                    p = CANVAS._dom[u].win.document,
                    LIB.setScrollTop(LIB.getScrollTop(p) - c, p)
                  } catch (_) {}
                m -= c
              }
            }
        }
      })
    }
    ,
    CANVAS.refresh = function() {
      CANVAS._onPropertyChanged.notify()
    }
    ;
    var _dialogInstance = {}
      , _dialogIndex = 1
      , _currentDialogZIndex = 5e3
      , _dialogLevel = []
      , Dialog = LIB.Dialog = function(e) {
      this._messageHandler = {},
      this.opt = e = e || {};
      var a = (this.timestamp = e.timestamp || (new Date).getTime(),
      this.id = "dialog_" + +new Date);
      _dialogInstance[a] = this,
      _dialogLevel.unshift(this);
      var i = this.type = e.confirm ? "confirm" : e.src ? "frame" : "normal"
        , n = this.size = e.size || {};
      n.w = n.w || ("confirm" == this.type ? 300 : 400),
      n.h = n.h || ("confirm" == this.type ? 140 : 300);
      var t = (this.sizeDialog = Dialog.getDialogSizeByContentSize(n, e),
      this.pos = e.pos || {},
      this.quiet = !!e.quiet);
      this._submitted = !1,
      this._loaded = !1,
      this._context = e.context;
      var o = this.targetNode = e.targetNode
        , g = this.dialogBody = document.createElement("div");
      g.className = e.hideBorder ? t ? "midas_minipay_dialog_wrap_no_border_noani" : o ? "midas_minipay_dialog_wrap_no_border_no_position" : "midas_minipay_dialog_wrap_no_border" : t ? "midas_minipay_dialog_wrap_noani" : "midas_minipay_dialog_wrap",
      this.zIndex = e.zIndex || _currentDialogZIndex++,
      LIB.attachEvent(g, "mousedown", this.setForeground, {
        "self": this
      });
      var d = this;
      if (this._messageHandler.getNickname = function() {
        d._send("getNickname", e.nickname)
      }
      ,
      !e.hideHeader) {
        var s = this.dialogHeader = document.createElement("div");
        s.className = "midas_minipay_dialog_header",
        e.preventDragging || (s.style.cursor = "move",
        this._dragInfo = null,
        LIB.attachEvent(s, "mousedown", this._dragStart, {
          "self": this
        })),
        e.targetNode && (s.style.width = n.w + "px");
        var c = s;
        if ("BackCompat" == document.compatMode && LIB.ua.ie <= 8) {
          var p = document.createElement("div");
          p.style.cssText = "position:absolute;width:100%;height:100%;left:0;top:0;",
          s.appendChild(p),
          c = p
        }
        var r = this.backBtn = document.createElement("div");
        r.style.display = "none",
        r.className = "header-icon-first",
        r.innerHTML = '<i class="midas_minipay_dialog_icon midas_minipay_dialog_icon_i midas_minipay_dialog_icon_back"></i>&nbsp;',
        c.appendChild(r);
        var l = this.dialogTitle = document.createElement("div");
        if (l.className = "cp-header-title",
        l.innerHTML = e.title || "",
        c.appendChild(l),
        LIB.attachEvent(r, "mousedown", function(e) {
          e.stopPropagation && e.stopPropagation(),
          e.cancelBubble = !0,
          this.goBack()
        }, {
          "self": this
        }),
        !e.hideCloseButton) {
          var m = this.dialogCloseButton = document.createElement("div");
          m.title = "关闭",
          m.className = "header-icon-last",
          m.innerHTML = '<i class="midas_minipay_dialog_icon midas_minipay_dialog_icon_i midas_minipay_dialog_icon_clear"></i>&nbsp;',
          c.appendChild(m),
          LIB.attachEvent(m, "click", function() {
            var e = this;
            e._loaded ? (this._messageHandler["confirmClose"] = function(e) {
              e = e || {},
              delete this._messageHandler["confirmClose"],
              e.canClose !== !1 && this.close()
            }
            ,
            this._send("confirmClose")) : this.close()
          }, {
            "self": this
          })
        }
        g.appendChild(s)
      }
      var f = this.dialogContent = document.createElement("div");
      if (f.className = "midas_minipay_dialog_content",
      f.style.height = n.h + "px",
      "confirm" == i) {
        var b = e.confirm;
        f.innerHTML = ['<div class="midas_minipay_dialog_c_c"><i class="midas_minipay_dialog_confirm_icon ', {
          "1": "midas_minipay_dialog_icon_req",
          "2": "midas_minipay_dialog_icon_error",
          "3": "midas_minipay_dialog_icon_warn",
          "4": "midas_minipay_dialog_icon_ok"
        }[b.icon] || "midas_minipay_dialog_icon_req", '"></i><h3>', b.content || "", '</h3><div class="midas_minipay_dialog_c_c_p">', b.desc || "", '</div><div class="midas_minipay_dialog_c_c_p"><i class="midas_minipay_dialog_icon_alt ', {
          "1": "midas_minipay_dialog_icon_alt_error",
          "2": "midas_minipay_dialog_icon_alt_warn",
          "3": "midas_minipay_dialog_icon_alt_ok"
        }[b.iconAlt] || "midas_minipay_dialog_icon_alt_none", '"><i></i></i>', b.contentAlt || "", "</div></div>"].join("")
      } else if ("frame" == i) {
        var h = e.wrapper || ""
          , u = ["v=", VER.dialog, "&_fd_id=", a, "&_fd_c=", XStream.channel, "&_fd_size=", n.w, "|", n.h, "&_fd_w=", h];
        if (t && u.push("&quiet=1"),
        e.methods) {
          var _, y = this.methods = e.methods, x = [];
          for (var v in y)
            v in this || (_ = y[v],
            _ && "function" != typeof _ || (_ = y[v] = {
              "method": _
            }),
            x.push(v),
            this[v] = function(e, a) {
              return function(i) {
                "function" == typeof a.method && a.method.call(this, i),
                this._send(e, i);
                var n = a.ret;
                n && this._flag && LIB.valueStat(this._flag, n >= 0 ? 1 : 2, Math.abs(n), {
                  "rate": LIB.timeBasedRate(a.rate || 0)
                })
              }
            }(v, _));
          u.push("&_fd_ms=", x.join("|"))
        }
        var k = e.src;
        k = [k, k.indexOf("?") >= 0 ? "&" : "?", "cash_param=", encodeURIComponent(u.join(""))].join("");
        var S = this.dialogFrame = document.createElement("iframe");
        S.className = "cash_dialog_frame",
        S.style.cssText = ["width:", n.w, "px;height:", n.h, "px;", "background:transparent;", "overflow-x:hidden;"].join(""),
        S.frameBorder = "no",
        S.scrolling = "auto",
        S.allowTransparency = "true",
        S.src = "about:blank",
        k = k + "&t=" + (new Date).getTime(),
        this._dialogSrc = k,
        f.appendChild(S),
        this._stream = new XStream(_dialogHandler,a)
      } else
        f.innerHTML = e.content || "";
      g.appendChild(f),
      this.dialogBorder = document.createElement("div"),
      this.dialogBorder.className = "midas_minipay_dialog_border",
      g.appendChild(this.dialogBorder);
      var w = this.dialogMask = document.createElement("div");
      w.className = t ? "midas_minipay_dialog_mask_noani" : "midas_minipay_dialog_mask",
      e.hideMask && (w.style.display = "none");
      var B = this.dialogBackFrame = document.createElement("iframe");
      B.className = t ? "midas_minipay_dialog_backframe_noani" : "midas_minipay_dialog_backframe",
      B.style.height = n.h + "px",
      B.frameBorder = 0,
      B.scrolling = "no";
      this.dialogWrapper = document.createElement("div");
      this._render()
    }
    ;
    Dialog.construct = function(e, a) {
      e = e || {};
      for (var i, n = "timestamp,pos,size,zIndex,quiet,context,onLoad,onFrameLoad,onShown,onSubmit,onNotify,onSuccess,onError,onCancel,onClose".split(","), t = 0; i = n[t]; t++)
        a[i] = e[i] || a[i];
      return new Dialog(a)
    }
    ,
    Dialog.ICON_TYPE = {
      "REQUEST": 1,
      "ERROR": 2,
      "WARN": 3,
      "OK": 4
    },
    Dialog.ICON_ALT_TYPE = {
      "ERROR": 1,
      "WARN": 2,
      "OK": 3
    },
    Dialog.getDialogSizeByContentSize = function(e, a) {
      return e = e || {},
      a = a || {},
      {
        "w": e.w + (a.hideBorder ? 0 : 20),
        "h": e.h + (a.hideBorder ? 0 : 20) + (a.hideHeader ? 0 : 40)
      }
    }
    ,
    Dialog.fitPos = function(e, a, i) {
      var n = CANVAS._getClientRect();
      !e.x && (e.x = Math.round((n.right + n.left - a.w) / 2)),
      !e.y && (e.y = Math.round((n.bottom + n.top - a.h) / 2)),
      i || (e.x = Math.min(n.right - a.w - 5, Math.max(n.left - a.w + 60, e.x)) + 4,
      e.y = Math.max(n.top + 5, Math.min(n.bottom - 30, e.y)) - 5)
    }
    ,
    Dialog.prototype._render = function() {
      var e = this;
      CANVAS._ready.onReady(function() {
        STYLES.insertDialog();
        var a = e.pos
          , i = e.sizeDialog
          , n = e.dialogBody
          , t = e.dialogBackFrame
          , o = e.dialogMask
          , g = e.dialogBorder
          , d = e.targetNode;
        "undefined" == typeof a.x && "undefined" == typeof a.y && Dialog.fitPos(a, i),
        e.quiet ? (n.style.cssText = ["visibility:hidden;left:-1000px;top:-1000px;width:", i.w, "px;z-index:", e.zIndex, ";"].join(""),
        o.style.cssText = ["visibility:hidden;left:-1000px;top:-1000px;width:", i.w, "px;height:", i.h, "px;"].join(""),
        g.style.cssText = ["visibility:hidden;left:0px;top:0px;width:", i.w, "px;height:", i.h, "px;"].join("")) : (n.style.cssText = d ? "" : ["left:", a.x, "px;top:", a.y, "px;width:", i.w, "px;z-index:", e.zIndex, ";"].join(""),
        g.style.cssText = ["left:0", "px;top:0", "px;width:", i.w, "px;height:", i.h, "px;"].join(""),
        t.style.cssText = ["left:", a.x + "px;", "top:", a.y + "px;", "width:" + i.w + "px;", "height:", i.h + "px;", "position:absolute;border:none;z-index:4500;"].join("")),
        d ? (d.insertBefore(n, d.firstChild),
        d.insertBefore(o, n),
        o.style.cssText = ["visibility:hidden;left:-1000px;top:-1000px;width:", i.w, "px;height:", i.h, "px;"].join("")) : (document.body.appendChild(e.dialogWrapper),
        e.dialogWrapper.appendChild(o),
        e.dialogWrapper.appendChild(t),
        e.dialogWrapper.appendChild(n)),
        e.dialogFrame.setAttribute("src", e._dialogSrc);
        try {
          "function" == typeof e.opt.onLoad && e.opt.onLoad.call(e, {
            "context": e.opt.context
          })
        } catch (s) {}
      })
    }
    ,
    Dialog.prototype.showBackBtn = function() {
      "function" == typeof this.opt.onBackButton && this.opt.onBackButton.call(this, {
        "visible": !0
      }),
      this.backBtn && (this.backBtn.style.display = "block")
    }
    ,
    Dialog.prototype.hideBackBtn = function() {
      "function" == typeof this.opt.onBackButton && this.opt.onBackButton.call(this, {
        "visible": !1
      }),
      this.backBtn && (this.backBtn.style.display = "none")
    }
    ,
    Dialog.prototype.resetTitle = function() {
      var e = this.opt;
      this.dialogTitle && (this.dialogTitle.innerHTML = e.title || "")
    }
    ,
    Dialog.prototype.messageCallback = function(e) {
      e = e || {};
      var a = e.key;
      a && "function" == typeof this._messageHandler[a] && this._messageHandler[a].call(this, e)
    }
    ,
    Dialog.prototype.goBack = function() {
      this._send("goback")
    }
    ,
    Dialog.prototype.resize = function(e, a) {
      if (e) {
        e.w = +e.w,
        e.h = +e.h,
        e.x = +e.x,
        e.y = +e.y;
        var i = this.size
          , n = this.pos;
        n.x = e.x ? e.x : e.w ? n.x + Math.round((i.w - e.w) / 2) : n.x,
        n.y = e.y ? e.y : e.h ? n.y + Math.round((i.h - e.h) / 2) : n.y,
        i.w = e.w || i.w,
        i.h = e.h || i.h;
        var t = this.sizeDialog = Dialog.getDialogSizeByContentSize(i, this.opt);
        Dialog.fitPos(n, t, a);
        var o = this.dialogBody
          , g = (this.dialogMask,
        this.targetNode);
        if (g || (o.style.width = t.w + "px"),
        this.dialogContent && (this.dialogContent.style.height = i.h + "px"),
        this.dialogFrame && (this.dialogFrame.style.cssText = ["width:", i.w, "px;height:", i.h, "px;"].join(""),
        this.dialogBackFrame)) {
          var d = LIB.isMinDevice() ? 31 : 39;
          this.dialogBackFrame.style.height = ~~this.dialogContent.style.height.replace("px", "") + d + "px"
        }
        this.dialogBorder && (this.dialogBorder.style.width = t.w + "px",
        this.dialogBorder.style.height = t.h + "px");
        try {
          "function" == typeof this.opt.onResize && this.opt.onResize.call(this, i)
        } catch (s) {}
      }
    }
    ,
    Dialog.prototype.enableSubmit = function() {}
    ,
    Dialog.prototype.disableSubmit = function() {}
    ,
    Dialog.prototype.submit = function() {
      if (!this.quiet)
        if (this.disableSubmit(),
        "function" == typeof this.opt.onSubmit) {
          var e;
          try {
            e = this.opt.onSubmit.call(this, {
              "context": this.opt.context
            })
          } catch (a) {}
          e !== !1 && ("frame" == this.type ? this._send("submit") : this.succeed())
        } else
          "frame" == this.type ? this._send("submit") : this.succeed()
    }
    ,
    Dialog.prototype.succeed = function(e) {
      e = e || {};
      var a = e.timestamp ? (new Date).getTime() - e.timestamp : 0;
      e.context = this.opt.context,
      this._submitted = !0;
      try {
        "function" == typeof this.opt.onSuccess && this.opt.onSuccess.call(this, e)
      } catch (i) {}
      this.quiet ? this.quit() : "confirm" == this.type ? this.close() : this.enableSubmit(),
      this._flag && LIB.valueStat(this._flag, 1, 21, {
        "rate": LIB.timeBasedRate(this._rates.succeed || 0),
        "duration": a
      })
    }
    ,
    Dialog.prototype.show = function(e) {
      e = e || {};
      e.timestamp ? (new Date).getTime() - e.timestamp : 0;
      if (this.quiet) {
        this.resize(e);
        var a = this.dialogBody
          , i = this.dialogMask
          , n = this.opt.hideBorder;
        a.style.visibility = "visible",
        i.style.visibility = "visible",
        LIB.setTimeout(function() {
          a.className = n ? "midas_minipay_dialog_wrap_no_border" : "midas_minipay_dialog_wrap",
          i.className = "midas_minipay_dialog_mask"
        }, 0, this),
        this.quiet = !1;
        try {
          "function" == typeof this.opt.onShown && this.opt.onShown.call(this, {
            "context": this.opt.context
          })
        } catch (t) {}
      }
    }
    ,
    Dialog.prototype.error = function(e) {
      e = e || {};
      e.timestamp ? (new Date).getTime() - e.timestamp : 0;
      if (e.context = this.opt.context,
      this.quiet) {
        try {
          "function" == typeof this.opt.onError ? this.opt.onError.call(this, e) : e.msg && aw.show(3, e.msg, 3e3)
        } catch (a) {}
        this.quit()
      } else {
        this.enableSubmit();
        try {
          "function" == typeof this.opt.onError && this.opt.onError.call(this, e)
        } catch (a) {}
      }
    }
    ,
    Dialog.prototype.close = function(e) {
      !e && this._send("close"),
      e = e || {};
      e.timestamp ? (new Date).getTime() - e.timestamp : 0;
      if (e.context = this.opt.context,
      this.quiet)
        this.quit();
      else {
        try {
          !this._submitted && "function" == typeof this.opt.onCancel && this.opt.onCancel.call(this, e)
        } catch (a) {}
        try {
          "function" == typeof this.opt.onClose && this.opt.onClose.call(this, e)
        } catch (a) {}
        this.quit()
      }
    }
    ,
    Dialog.prototype.setForeground = function() {
      if (_dialogLevel[0] != this && _dialogInstance[this.id]) {
        for (var e, a = [this], i = 0; e = _dialogLevel[i]; i++)
          e != this && a.push(e);
        if (_dialogLevel = a,
        _currentDialogZIndex >= 8e3) {
          _currentDialogZIndex = 5e3;
          for (var i = _dialogLevel.length - 1; i >= 0; i--)
            _dialogLevel[i].zIndex = _currentDialogZIndex++,
            _dialogLevel[i].dialogBody.style.zIndex = _dialogLevel[i].zIndex
        } else
          this.zIndex = _currentDialogZIndex++,
          this.dialogBody.style.zIndex = this.zIndex
      }
    }
    ,
    Dialog.prototype.quit = function() {
      LIB.detachEvent(this.dialogBody, "click"),
      this.dialogHeader && LIB.detachEvent(this.dialogHeader, "mousedown"),
      this.dialogCloseButton && LIB.detachEvent(this.dialogCloseButton, "click"),
      this.dialogFooter && LIB.detachEvent(this.dialogFooter, "click"),
      this.dialogBody.className = this.opt.hideBorder ? "midas_minipay_dialog_wrap_no_border_noani" : "midas_minipay_dialog_wrap_noani",
      this.dialogBody.style.visibility = "hidden",
      this.dialogBody.style.left = "-1000px",
      this.dialogBody.style.top = "-1000px";
      try {
        this.dialogMask.parentNode.removeChild(this.dialogMask)
      } catch (e) {}
      for (var a, i = [], n = 0; a = _dialogLevel[n]; n++)
        a != this && i.push(a);
      _dialogLevel = i,
      0 == i.length && (_currentDialogZIndex = 5e3),
      delete _dialogInstance[this.id],
      this._stream && this._stream.close(),
      LIB.setTimeout(function() {
        try {
          this.dialogFrame.src = "about:blank",
          this.dialogFrame.parentNode.removeChild(this.dialogFrame),
          this.dialogFrame = null,
          this.dialogContent.innerHTML = "",
          this.dialogContent = null,
          this.dialogBody && this.dialogBody.parentNode && this.dialogBody.parentNode.removeChild(this.dialogBody),
          this.dialogWrapper.parentNode.removeChild(this.dialogWrapper)
        } catch (e) {}
      }, 2e3, this);
      try {
        this.dialogBackFrame && (this.dialogBackFrame.src = "about:blank",
        this.dialogBackFrame.parentNode.removeChild(this.dialogBackFrame),
        this.dialogBackFrame = null)
      } catch (e) {}
    }
    ,
    Dialog.prototype._dragStart = function(e) {
      var a = e.target || e.srcElement;
      if (a != this.dialogCloseButton && !this._dragInfo) {
        this.dialogBody.className = this.opt.hideBorder ? "midas_minipay_dialog_wrap_no_border_noani" : "midas_minipay_dialog_wrap_noani",
        this.dialogMask.className = "midas_minipay_dialog_mask_noani";
        var i = document.createElement("div");
        this.dialogContent && this.dialogContent.appendChild(i),
        i.className = "midas_minipay_dialog_content_mask",
        this._dragInfo = {
          "x": this.pos.x - e.clientX,
          "y": this.pos.y - e.clientY,
          "mask": i
        },
        this.dialogHeader && this.dialogHeader.setCapture ? this.dialogHeader.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP),
        LIB.attachEvent(document.documentElement, "mousemove", this._drag, {
          "self": this
        }),
        LIB.attachEvent(document.documentElement, "mouseup", this._dragEnd, {
          "self": this
        }),
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
      }
    }
    ,
    Dialog.prototype._drag = function(e) {
      if (this._dragInfo) {
        var a = CANVAS._getClientRect()
          , i = LIB.getScrollLeft()
          , n = LIB.getScrollTop();
        this.resize({
          "x": this._dragInfo.x + Math.min(a.right - i, Math.max(a.left - i, e.clientX)),
          "y": this._dragInfo.y + Math.min(a.bottom - n, Math.max(a.top - n, e.clientY))
        }, !0),
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
      }
    }
    ,
    Dialog.prototype._dragEnd = function(e) {
      this._dragInfo && (LIB.detachEvent(document.documentElement, "mousemove", this._drag),
      LIB.detachEvent(document.documentElement, "mouseup", this._dragEnd),
      this.dialogHeader && this.dialogHeader.releaseCapture ? this.dialogHeader.releaseCapture() : window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP),
      this.dialogContent && this.dialogContent.removeChild(this._dragInfo.mask),
      this._dragInfo = null,
      this.dialogBody.className = this.opt.hideBorder ? "midas_minipay_dialog_wrap_no_border" : "midas_minipay_dialog_wrap",
      this.dialogMask.className = "midas_minipay_dialog_mask",
      e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }
    ,
    Dialog.prototype._send = function(e, a) {
      this._stream && DLG._call(this._stream, e, a)
    }
    ,
    Dialog.prototype.visible = function(e) {
      this.dialogBody.style.visibility = e === !0 ? "visible" : "hidden"
    }
    ,
    Dialog.prototype._handleRemote = function(e, a) {
      var i, n = ((new Date).getTime() - a.timestamp,
      this.opt);
      switch (e) {
      case "load":
        a && (this.quiet = a.quiet);
        try {
          "function" == typeof n.onFrameLoad && n.onFrameLoad.call(this, {
            "context": n.context
          })
        } catch (t) {}
        this._loaded = !0;
        break;
      case "newdialog":
        newdialog(a, this);
        break;
      case "openwindow":
        try {
          "function" == typeof n.onOpenWindow && n.onOpenWindow.call(this, a)
        } catch (t) {}
        break;
      case "notify":
        try {
          "function" == typeof n.onNotify && n.onNotify.call(this, a)
        } catch (t) {}
        break;
      case "succeed":
      case "error":
      case "show":
      case "close":
      case "resize":
      case "enableSubmit":
      case "disableSubmit":
      case "showBackBtn":
      case "hideBackBtn":
      case "resetTitle":
      case "messageCallback":
      case "setForeground":
        this[e].call(this, a);
        break;
      default:
        return void (n.methods && (i = n.methods[e]) && "function" == typeof i.method && i.method.call(this, a))
      }
    }
    ,
    LIB.attachEvent(window, "resize", function() {
      var e, a, i = Math.max(LIB.getClientWidth(), LIB.getScrollWidth()), n = Math.max(LIB.getClientHeight(), LIB.getScrollHeight());
      for (var t in _dialogInstance) {
        var o = _dialogInstance[t];
        o.quiet || (e = {},
        a = !1,
        o.pos.x >= i - 5 && (e.x = i - o.size.w - 5,
        a = !0),
        o.pos.y >= n - 5 && (e.y = n - o.size.h - 5,
        a = !0),
        a && o.resize(e))
      }
    }),
    CANVAS._init(),
    CANVAS._updatePos({
      "hasTop": CANVAS._hasTop,
      "pos": CANVAS._pos
    }),
    XStream.channel = LIB.getIntRandom(),
    XStream.localPort = "lib",
    LIB.extend = function(e) {
      for (var a = 1; a <= arguments.length; a++)
        for (var i in arguments[a])
          e[i] = arguments[a][i];
      return e
    }
    ,
    LIB.each = function(e, a) {
      if (e instanceof Array)
        for (var i = 0, n = e.length; i < n; i++)
          a(i, e[i]);
      else if (e instanceof Object)
        for (var i in e)
          a(i, e[i])
    }
    ,
    LIB.loadJs = function(e, a, i) {
      try {
        e = e instanceof Array ? e : [e];
        var n = []
          , t = [];
        LIB.each(e, function(e, a) {
          if ("string" != typeof a)
            throw "Input parameter src invalid!";
          a.match(/script/i) ? t.push(a.match(/<script[^>]*>(.*)?<\/script>/i)[1]) : n.push(a)
        });
        var o = function(e, a, n) {
          var t = e
            , o = a
            , g = document.getElementsByTagName("head")[0]
            , d = document.createElement("script");
          if (d.type = "text/javascript",
          d.charset = "UTF-8",
          t ? d.src = t : 0,
          o ? d.text = o : 0,
          n) {
            var s = function() {
              "complete" != d.readyState && "loaded" != d.readyState || (n(),
              d.onload = d.onreadystatechange = new Function,
              clearTimeout(p))
            }
              , c = function() {
              d.readyState = "complete",
              s()
            }
              , p = setTimeout(function() {
              "complete" != d.readyState && i && i()
            }, 5e3);
            d.onreadystatechange = s,
            d.onload = c
          }
          g.appendChild(d)
        }
          , g = function() {
          --s,
          s < 1 && (c < 1 ? a ? a() : 0 : LIB.each(t, function(e, a) {
            o(null, a, d)
          }))
        }
          , d = function() {
          --c,
          c < 1 && (a ? a() : 0)
        }
          , s = n.length
          , c = t.length;
        s ? LIB.each(n, function(e, a) {
          o(a, null, g)
        }) : LIB.each(t, function(e, a) {
          o(null, a, d)
        })
      } catch (p) {
        setTimeout(function() {
          throw p
        }, 1)
      }
    }
    ;
    var CacheData = function() {
      this.data = []
    };
    CacheData.prototype = {
      "push": function(e) {
        e && this.data.push(e)
      },
      "lastest": function() {
        return this.data[this.data.length - 1]
      },
      "pop": function() {
        return this.data.pop()
      },
      "popAll": function(e) {
        for (var a = null; this.data.length > 0; )
          a = this.pop(),
          a && e(a)
      },
      "remove": function(e) {
        if (e)
          for (var a = this.data.length - 1; a > -1; a--)
            this.data[a] == e && this.data.slice(a, 1)
      }
    };
    var checkLoginType = function(e) {
      return "undefined" != typeof e && (!!(e.openid && e.openkey && e.session_id && e.session_type) || (e.cookie_wx_id && LIB.cookie.get(e.cookie_wx_id) && e.cookie_wx_token && LIB.cookie.get(e.cookie_wx_token) ? (e.openid = LIB.cookie.get(e.cookie_wx_id),
      e.openkey = LIB.cookie.get(e.cookie_wx_token),
      e.session_id = "hy_gameid",
      e.session_type = "wc_actoken",
      delete e.cookie_wx_id,
      delete e.cookie_wx_token) : (e.session_id = "uin",
      e.session_type = "skey"),
      !0))
    }
      , Dialog_Cache = new CacheData
      , API = null
      , dialogTypeInstanceMap = {
      "subType": []
    }
      , newdialog = function(e, a) {
      var i;
      a.visible(!1);
      var n = a.dialogHeader
        , t = null;
      e.buyType && dialogTypeInstanceMap["subType"].push(e.buyType),
      "qb" === e.buyType ? (API = thisAPI.recharge,
      t = {
        "title": "Q币充值",
        "size": {
          "w": a.opt.size.w,
          "h": 580
        },
        "hideHeader": !n,
        "onClose": function() {
          a.opt.onSubClose && a.opt.onSubClose.call(this, {
            "type": e.buyType
          }),
          a.visible(!0),
          a._send("qbchargeclose")
        },
        "methods": {
          "onSuccess": function() {
            a._send("qbchargesuccess"),
            i.close()
          },
          "onResize": function(e) {
            a._send("qbchargeresize", e)
          }
        }
      }) : "service" === e.buyType && (API = thisAPI.service,
      t = {
        "title": "开通" + e.vipName,
        "hideHeader": !n,
        "size": {
          "w": a.opt.size.w,
          "h": 580
        },
        "onClose": function() {
          a.opt.onSubClose && a.opt.onSubClose.call(this, {
            "type": e.buyType
          }),
          a.visible(!0),
          a._send("openServiceClose")
        },
        "methods": {
          "onSuccess": function() {
            a._send("openServiceSuccess"),
            i.close()
          },
          "onResize": function(e) {
            a._send("openServiceResize", e)
          }
        }
      }),
      t && (t.forceHttps = a.opt.forceHttps),
      a.opt.onOpenWindow && (t.onOpenWindow = a.opt.onOpenWindow),
      a.opt.targetNode && (t.targetNode = a.opt.relatedNode[e.buyType]),
      "function" == typeof a.opt.onSubResize && (t.onResize = function(i) {
        i.type = e.buyType,
        a.opt.onSubResize.call(this, i)
      }
      ),
      "function" == typeof a.opt.onSubResize && (t.onResize = function(i) {
        i.type = e.buyType,
        a.opt.onSubResize.call(this, i)
      }
      ),
      "function" == typeof a.opt.onSubBackButton && (t.onBackButton = function(i) {
        i.type = e.buyType,
        a.opt.onSubBackButton.call(this, i)
      }
      ),
      "function" == typeof a.opt.onSubHeaderDataReady && (t.onHeaderDataReady = function(i) {
        i.type = e.buyType,
        a.opt.onSubHeaderDataReady.call(this, i)
      }
      );
      try {
        "function" == typeof a.opt.onSubOpen && a.opt.onSubOpen.call(this, {
          "type": e.buyType
        })
      } catch (o) {}
      i = API(t, e)
    }
      , ENUM_ERR = {
      "INVALIDLOGIN": {
        "code": -1e3,
        "msg": "请先登录"
      }
    }
      , BaseHeader = function(e) {
      this.opener = e
    };
    BaseHeader.prototype = {
      "setTitle": function(e) {
        this.opener.dialogHeader && (this.opener.dialogTitle.innerHTML = e.title)
      }
    };
    var _create = function(e, a, i) {
      if (!checkLoginType(i))
        return void (a.onError && a.onError(ENUM_ERR.INVALIDLOGIN.code, ENUM_ERR.INVALIDLOGIN.msg));
      var n = {
        "game": {
          "sandbox": "//sandbox.pay.qq.com/midas/minipay_v2/views/cpay/game.shtml",
          "production": "//pay.qq.com/midas/minipay_v2/views/cpay/game.shtml"
        },
        "goods": {
          "sandbox": "//sandbox.pay.qq.com/midas/minipay_v2/views/cpay/goods.shtml",
          "production": "//pay.qq.com/midas/minipay_v2/views/cpay/goods.shtml"
        },
        "qb": {
          "sandbox": "//sandbox.pay.qq.com/midas/minipay_v2/views/minipay/qb.shtml",
          "production": "//pay.qq.com/midas/minipay_v2/views/minipay/qb.shtml"
        },
        "month": {
          "sandbox": "//sandbox.pay.qq.com/midas/minipay_v2/views/minipay/month.shtml",
          "production": "//pay.qq.com/midas/minipay_v2/views/minipay/month.shtml"
        }
      };
      e = e || "game",
      a = a || {},
      a.src = ~~i.sandbox ? n[e].sandbox : n[e].production,
      a.forceHttps && (a.src = "https:" + a.src);
      var t = []
        , o = [];
      if ("game" === e && "duanyou" != i.game_type && (o = ["buy_quantity"]),
      checkNeccessaryArguments(i, o)) {
        (a.methods.onOpenWindow || a.onOpenWindow) && (i.inApp = 1);
        for (var g in i)
          "undefined" != typeof i[g] && null != i[g] && t.push(g + "=" + i[g]);
        t.push("supportCloseConfirm=1"),
        a.nickname && t.push("canGetNick=1"),
        a.src += "?" + t.join("&"),
        a.preventDragging = "undefined" == typeof a.preventDragging || a.preventDragging,
        a.hideBorder = !0,
        LIB.extend(a, a.methods || {}, a);
        var d = a.onClose || a.methods.onClose;
        if (a.onClose = function() {
          Dialog_Cache.remove(this),
          delete dialogTypeInstanceMap[e],
          d.apply(this, Array.prototype.slice.call(arguments, 0))
        }
        ,
        a.buyType = e,
        !a.enableMutiDialog) {
          if (dialogTypeInstanceMap[e])
            try {
              dialogTypeInstanceMap[e].close(),
              delete dialogTypeInstanceMap[e]
            } catch (s) {}
          for (var c = null, p = dialogTypeInstanceMap.subType.length - 1; p >= 0; p--)
            if (c = dialogTypeInstanceMap.subType[p],
            dialogTypeInstanceMap[c])
              try {
                dialogTypeInstanceMap.subType.splice(p, 1),
                dialogTypeInstanceMap[c].close(),
                delete dialogTypeInstanceMap[c]
              } catch (s) {}
        }
        var r = new Dialog(a);
        return a.enableMutiDialog || (dialogTypeInstanceMap[e] = r),
        Dialog_Cache.push(r),
        r
      }
    };
    thisAPI.buyGoods = function(e, a) {
      var i;
      e = e || {};
      var n = LIB.extend({}, e || {});
      n.size = n.size || {
        "w": 690,
        "h": 550
      },
      n.methods = LIB.extend({}, n.methods || {}),
      a = a || {},
      e.hideHeader && (a.show_header = 1),
      a.methods = a.methods || {},
      a.goodstokenurl = encodeURIComponent(a.goodstokenurl || a.param),
      delete a.param;
      try {
        a.appid = decodeURIComponent(a.goodstokenurl || "").split("/")[3]
      } catch (t) {}
      for (var o = ["onSuccess"], g = 0, d = o.length; g < d; ++g)
        a[o[g]] && (n.methods[o[g]] = a[o[g]],
        delete a[o[g]]);
      if (delete a.methods,
      n.methods.onHeaderDataReady = function(a) {
        if (a.title) {
          this.dialogTitle && (this.dialogTitle.innerHTML = a.title);
          try {
            "function" == typeof e.onHeaderDataReady && e.onHeaderDataReady.call(this, a)
          } catch (i) {}
        }
      }
      ,
      !checkLoginType(a))
        return void (n.onError && n.onError(ENUM_ERR.INVALIDLOGIN.code, ENUM_ERR.INVALIDLOGIN.msg));
      var s = _create("goods", n, a);
      return i = new BaseHeader(s),
      LIB.report(a.openid, "goods", "pv", {
        "sandbox": ~~a.sandbox,
        "appid": a.appid
      }),
      s
    }
    ,
    thisAPI.buyGame = function(e, a) {
      var i = {
        "size": {
          "w": 690,
          "h": "true" === a.showRecommend || a.showRecommend === !0 ? 700 : 530
        },
        "methods": {
          "onHeaderDataReady": function(a) {
            a.title && this.dialogTitle && (this.dialogTitle.innerHTML = a.title);
            try {
              "function" == typeof e.onHeaderDataReady && e.onHeaderDataReady.call(this, a)
            } catch (i) {}
          }
        },
        "title": "充值游戏币"
      }
        , n = i.methods;
      LIB.extend(i, e),
      i.methods = LIB.extend(n, e.methods),
      a = a || {},
      e.hideHeader && (a.show_header = 1),
      i.title = i.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      var t = _create("game", i, a);
      return LIB.report(a.openid, "game", "pv", {
        "sandbox": ~~a.sandbox,
        "appid": a.appid
      }),
      t
    }
    ;
    var checkNeccessaryArguments = function(e, a) {
      var i = ["appid", "pf", "session_id", "session_type"].concat(a)
        , n = !0;
      return LIB.each(i, function(a, i) {
        if (!e[i])
          throw new Error(i + "参数缺失,请参考使用文档")
      }),
      n
    };
    thisAPI.recharge = function(e, a) {
      var i, n, t = {
        "title": "充值Q币",
        "size": {
          "w": 690,
          "h": 580
        },
        "methods": {
          "onHeaderDataReady": function(a) {
            a.title ? n.setTitle(a) : n.update(a);
            try {
              "function" == typeof e.onHeaderDataReady && e.onHeaderDataReady.call(this, a)
            } catch (i) {}
          }
        }
      }, o = t.methods;
      return LIB.extend(t, e),
      t.methods = LIB.extend(o, e.methods),
      a = a || {},
      e.hideHeader && (a.show_header = 1),
      t.title = t.title.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      i = _create("qb", t, a),
      n = new HeaderWithRule(i,"qb"),
      LIB.report(a.openid, "qb", "pv", {
        "sandbox": ~~a.sandbox,
        "appid": a.appid
      }),
      i
    }
    ;
    var HeaderWithRule = function(e, a) {
      BaseHeader.call(this, e),
      this.ruleButton = null,
      this.agreeButton = null,
      this.opener = e,
      this.ruleUrl = null,
      this.checked = !0,
      this.type = a
    };
    HeaderWithRule.prototype = LIB.extend({}, BaseHeader.prototype, {
      "_genMonthHeaderHtml": function(e) {
        return '<div class="prop-custom-title" style="user-select:none"><img src="' + e.logo + '"><span>' + LIB.xssFilter(e.name) + '</span><div id="month-agreewrap" class="form-group checkbox-box service checked"><label for="vip1"><input type="checkbox" name="vip"><i id="month-agree" class="icon-checkbox"></i> 同意《<a id="month-rule" href="javascript:void(0);">服务条款</a>》</label></div></div>'
      },
      "_genQbHeaderHtml": function(e) {
        return '<div class="prop-custom-title" style="user-select:none"><img src="' + e.logo + '"><span>' + LIB.xssFilter(e.name) + '</span><div id="qb-agreewrap" class="form-group checkbox-box service checked"><label for="vip1"><input type="checkbox" name="vip"><i id="qb-agree" class="icon-checkbox"></i> 同意《<a id="qb-rule" href="javascript:void(0);">服务条款</a>》</label></div></div>'
      },
      "update": function(e) {
        if (this.opener.dialogHeader) {
          if (this.ruleButton && LIB.detachEvent(this.ruleButton, "click"),
          this.agreeButton && LIB.detachEvent(this.agreeButton, "click"),
          "service" === this.type)
            this.opener.dialogTitle.innerHTML = this._genMonthHeaderHtml(e),
            this.agreeButton = document.getElementById("month-agree"),
            this.ruleButton = document.getElementById("month-rule"),
            this.agreeWrapButton = document.getElementById("month-agreewrap");
          else {
            if ("qb" !== this.type)
              return;
            this.opener.dialogTitle.innerHTML = this._genQbHeaderHtml(e),
            this.agreeButton = document.getElementById("qb-agree"),
            this.ruleButton = document.getElementById("qb-rule"),
            this.agreeWrapButton = document.getElementById("qb-agreewrap")
          }
          this.ruleUrl = e.ruleUrl,
          LIB.attachEvent(this.agreeButton, "click", function(e) {
            this.checked = !this.checked,
            this.agreeWrapButton.className = this.checked ? "form-group checkbox-box service checked" : "form-group checkbox-box service",
            this.opener._send("agree", {
              "checked": this.checked,
              "left": this.agreeButton.getBoundingClientRect().left - this.opener.dialogTitle.getBoundingClientRect().left
            })
          }, {
            "self": this
          }),
          LIB.attachEvent(this.ruleButton, "click", function(e) {
            this.opener.opt.onOpenWindow ? this.opener.opt.onOpenWindow(this.ruleUrl) : this.opener._send("rule")
          }, {
            "self": this
          })
        }
      }
    }),
    thisAPI.service = function(e, a) {
      var i, n, t = {
        "title": "开通包月",
        "size": {
          "w": 690,
          "h": 580
        },
        "methods": {
          "onHeaderDataReady": function(a) {
            a.title ? n.setTitle(a) : n.update(a);
            try {
              "function" == typeof e.onHeaderDataReady && e.onHeaderDataReady.call(this, a)
            } catch (i) {}
          },
          "onMonthChange": function(a) {
            try {
              "function" == typeof e.onMonthChange && e.onMonthChange.call(this, a)
            } catch (i) {}
          }
        }
      }, o = t.methods;
      return LIB.extend(t, e),
      t.methods = LIB.extend(o, e.methods),
      a = a || {},
      e.hideHeader && (a.show_header = 1),
      a.screen_type = LIB.isMinDevice() ? "min" : "normal",
      t.title = t.title.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      i = _create("month", t, a),
      n = new HeaderWithRule(i,"service"),
      LIB.report(a.openid, "month", "pv", {
        "sandbox": ~~a.sandbox,
        "appid": a.appid
      }),
      i
    }
    ,
    thisAPI.back = function() {
      var e = Dialog_Cache.lastest();
      e.goBack()
    }
    ,
    thisAPI.close = function() {
      Dialog_Cache.popAll(function(e) {
        e.close()
      })
    }
  }()
}
]);
