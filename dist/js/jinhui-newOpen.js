webpackJsonp([23],{

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(44);

var _iss = __webpack_require__(43);

var _iss2 = _interopRequireDefault(_iss);

var _router = __webpack_require__(698);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * 新入口文件
                                                                                                                                                           */
//兼容ie
//公共类


//路由 
var Openmain = function Openmain(arg) {
  /// console.log("aa");

  _classCallCheck(this, Openmain);
};

new Openmain();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(195);

__webpack_require__(44);

var _iss = __webpack_require__(43);

var _iss2 = _interopRequireDefault(_iss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//公共类
_iss2.default.use({ Router: _reactRouter.Router, Route: _reactRouter.Route, hashHistory: _reactRouter.hashHistory }); //兼容ie

var rootRout = {
  path: "/",
  childRoutes: [{
    path: "/peripheral",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(13).then((function (require) {
        var peripheral = __webpack_require__(721); //============================首页
        callback(null, peripheral.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }]
};
_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory, routes: rootRout }), document.querySelector("#JH-Router"));
exports.default = rootRout;

/***/ })

},[697]);