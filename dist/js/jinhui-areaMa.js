webpackJsonp([25],{

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //兼容ie
//公共类
//路由
//头部


var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(44);

var _iss = __webpack_require__(43);

var _iss2 = _interopRequireDefault(_iss);

var _routerArea = __webpack_require__(696);

var _routerArea2 = _interopRequireDefault(_routerArea);

var _toolsList = __webpack_require__(302);

var _toolsList2 = _interopRequireDefault(_toolsList);

var _toolsLeftTree = __webpack_require__(303);

var _toolsLeftTree2 = _interopRequireDefault(_toolsLeftTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//左侧树形
/* 公共页面js */
var AreaMa = function () {
  function AreaMa() {
    _classCallCheck(this, AreaMa);

    var th = this;
    !_iss2.default.userInfo && this.getUser(); //如果用户从没登陆过则ajax获取用户信息
    this.TransHeight();
    this.bindScroll();
    this.bingBar();
    //document.addEventListener("fullscreenchange",th.TransHeight,false);
    // document.addEventListener("mozfullscreenchange",th.TransHeight,false);
    // document.addEventListener("msfullscreenchange",th.TransHeight,false);
    window.onresize = this.TransHeight;
  }

  _createClass(AreaMa, [{
    key: 'getUser',
    value: function getUser() {
      //获取登陆信息

      _iss2.default.ajax({
        url: "/Account/IGetUserInfo",
        success: function success(da) {
          _iss2.default.userInfo = da; //获取数据
          sessionStorage.setItem("userInfo", JSON.stringify(da)); //存入session
        }
      });
    }
  }, {
    key: 'TransHeight',
    value: function TransHeight() {
      var JH_Nav = document.querySelector(".JH-Nav"),
          JH_Content = document.querySelector(".JH-Content"),
          h = 640;
      var rh = JH_Content.offsetHeight,
          lh = JH_Nav.offsetHeight,
          $wh = Math.max(document.body.clientHeight, document.documentElement.clientHeight) - 60;
      var $h = Math.max(rh, lh, $wh, 640);
      JH_Nav.style.minHeight = $h + "px";
      JH_Content.style.minHeight = $h - 10 + "px";
    }
  }, {
    key: 'bindScroll',
    value: function bindScroll() {
      var JHNav = $(".JH-Nav"),
          win = $(window),
          bs = $(".icon-bar");
      window.onscroll = function (ev) {
        var top = win.scrollTop(),
            left = win.scrollLeft(),
            icons = $(".icon-bar");

        if (top >= 60) {
          /*如果左侧树，处于隐藏状态，则不固定*/
          if (JHNav.hasClass("active")) return false;
          JHNav.addClass("fixed");
        } else {
          JHNav.removeClass("fixed");
        }
      };
    }
  }, {
    key: 'bingBar',
    value: function bingBar() {
      var cont = $(".JH-RightBox"),
          icons = $(".icon-bar");
      icons.bind("click.bar", function (e) {
        var el = $(e.currentTarget),
            pa = $(el.attr("target"));
        if (pa.hasClass("fixed")) return false;

        if (pa.hasClass("active")) {
          pa.removeClass("active");
          cont.removeClass("active");
        } else {
          pa.addClass("active");
          cont.addClass("active");
        }

        icons.trigger("EVENT_TOGGLEBAR");
      });
    }
  }]);

  return AreaMa;
}();

new AreaMa();

/***/ }),

/***/ 696:
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
_iss2.default.use({ Router: _reactRouter.Router, Route: _reactRouter.Route, hashHistory: _reactRouter.hashHistory });
/* 路由 */
/*     {
      path: "/index",
      getComponent: function (next, callback) {
        require.ensure([], function (require) {
          var app = require('../area');//============================首页
          callback(null, app.default);
        }, "area-index");
      }
    }, */
//兼容ie
var rootRout = {
  path: "/",
  childRoutes: [{ //面积管理
    path: "/index",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(0).then((function (require) {
        var app = __webpack_require__(715);
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //签约回款*/
    path: "/payment",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(4).then((function (require) {
        var app = __webpack_require__(716);
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { /*关键指标*/
    path: "/primarykey",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(2).then((function (require) {
        var app = __webpack_require__(717);
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }

  }, { //*供货*/
    path: "/supply",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(1).then((function (require) {
        var app = __webpack_require__(718);
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }

  }, { //项目团队维护 
    path: "/groupbuild",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(20).then((function (require) {
        var app = __webpack_require__(719); //============================价格管理
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理 
    path: "/priceControl",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(3).then((function (require) {
        var app = __webpack_require__(720); //============================价格管理
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }]
};
_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory, routes: rootRout }), document.querySelector("#JH-Router"));
exports.default = rootRout;

/***/ })

},[695]);