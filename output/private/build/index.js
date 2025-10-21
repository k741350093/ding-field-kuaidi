"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dingtalkDocsCoolApp = require("dingtalk-docs-cool-app");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var t = _dingtalkDocsCoolApp.fieldDecoratorKit.t;
var ip = 'bigbrain.work/kuaidi_api';

// 通过addDomainList添加请求接口的域名
_dingtalkDocsCoolApp.fieldDecoratorKit.setDomainList(['bigbrain.work']);
_dingtalkDocsCoolApp.fieldDecoratorKit.setDecorator({
  name: '物流查询助手',
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
      'trackingNumber': '物流单号',
      'carrier': '快递公司'
    },
    'en-US': {
      'trackingNumber': 'Tracking Number',
      'carrier': 'Carrier'
    },
    'ja-JP': {
      'trackingNumber': '追跡番号',
      'carrier': '宅配会社'
    }
  },
  // 定义捷径的入参
  formItems: [{
    key: 'trackingNumber',
    label: t('trackingNumber'),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      mode: 'single',
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Text]
    },
    validator: {
      required: true
    }
  }, {
    key: 'carrier',
    label: t('carrier'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入快递公司',
      enableFieldReference: true
    },
    validator: {
      required: false
    }
  }],
  // 定义捷径的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Object,
    extra: {
      properties: [{
        key: 'latestStatus',
        title: '最新状态',
        type: _dingtalkDocsCoolApp.FieldType.Text,
        primary: true,
        defaultSelected: true
      }, {
        key: 'latestStatusDesc',
        title: '状态描述',
        type: _dingtalkDocsCoolApp.FieldType.Text,
        defaultSelected: true
      }, {
        key: 'latestTime',
        title: '快递更新时间',
        type: _dingtalkDocsCoolApp.FieldType.Text,
        defaultSelected: true
      }, {
        key: 'carrier',
        title: '快递公司',
        type: _dingtalkDocsCoolApp.FieldType.Text,
        defaultSelected: true
      }, {
        key: 'trackDetails',
        title: '物流详情',
        type: _dingtalkDocsCoolApp.FieldType.Text,
        defaultSelected: true
      }, {
        key: 'dataUpdateTime',
        title: '数据写入时间',
        type: _dingtalkDocsCoolApp.FieldType.Text,
        defaultSelected: true
      }]
    }
  },
  authorizations: {
    type: _dingtalkDocsCoolApp.AuthorizationType.MultiHeaderToken,
    params: [{
      key: "shiliuAIApiKey",
      placeholder: "请输入API Key"
    }],
    id: 'shiliu_ai',
    platform: 'shiliu_ai',
    instructionsUrl: 'https://bigbrain.work/shiliuai/',
    required: true,
    label: '石榴AI',
    icon: {
      light: '',
      dark: ''
    },
    tooltips: '石榴AI API Key'
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context, formData) {
      var trackingNumber, carrier, res, trackDetails, trackDetailsText, _iterator, _step, item, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            trackingNumber = formData.trackingNumber, carrier = formData.carrier;
            _context.p = 1;
            if (trackingNumber) {
              _context.n = 2;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              message: '物流单号是空的'
            });
          case 2:
            _context.n = 3;
            return context.fetch("https://".concat(ip, "/logistics/track"), {
              // 已经在addDomainList中添加为白名单的请求
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                number: trackingNumber,
                carrier: carrier
              })
            }, 'shiliu_ai').then(function (res) {
              return res.json();
            });
          case 3:
            res = _context.v;
            if (!(res.code !== 200)) {
              _context.n = 4;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              message: res.message || '查询失败'
            });
          case 4:
            trackDetails = res.data.trackDetails;
            trackDetailsText = '';
            _iterator = _createForOfIteratorHelper(trackDetails);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                item = _step.value;
                trackDetailsText += "".concat(item.time, " ").concat(item.status, " ").concat(item.desc);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              data: _objectSpread(_objectSpread({}, res.data), {}, {
                trackDetails: trackDetailsText
              })
            });
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.log('====error', String(_t));
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              message: '查询物流信息失败'
            });
        }
      }, _callee, null, [[1, 5]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;