webpackJsonp([29],{

/***/ 1463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(305);

__webpack_require__(58);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//公共类
_iss2.default.use({ Router: _reactRouter.Router, Route: _reactRouter.Route, hashHistory: _reactRouter.hashHistory });
/* 路由 */
//兼容ie
var rootRout = {
  path: "/",
  childRoutes: [{
    path: "/index",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(19).then((function (require) {
        var app = __webpack_require__(1493); //============================首页
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: "/draft",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(22).then((function (require) {
        var app = __webpack_require__(1494); //============================我的草稿
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: "/apply",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(24).then((function (require) {
        var app = __webpack_require__(1495); //============================我的申请
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: "/approalHistory",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(23).then((function (require) {
        var app = __webpack_require__(1496); //============================我的历史
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: "/identity",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(20).then((function (require) {
        var app = __webpack_require__(1497); //============================项目身份
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: "/supply",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(26).then((function (require) {
        var app = __webpack_require__(1498); //============================生日祝福
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: "/projectList",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(28).then((function (require) {
        var app = __webpack_require__(1499); //============================生日祝福
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, //代办
  {
    path: "/agenty",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(25).then((function (require) {
        var app = __webpack_require__(1500); //============================生日祝福
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, //弹出层
  {
    path: "/todo",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(27).then((function (require) {
        var app = __webpack_require__(1501); //============================生日祝福
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //分期
    path: "/intallment",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(1).then((function (require) {
        var app = __webpack_require__(1502); //============================分期
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //项目
    path: "/newProject",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(2).then((function (require) {
        var app = __webpack_require__(1503); //============================分期
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理 
    path: "/priceControl",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(18).then((function (require) {
        var app = __webpack_require__(1492); //============================价格管理
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-投决会
    path: "/component-priceControl-Investment",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(12).then((function (require) {
        var app = __webpack_require__(1504); //============================价格管理-投决会
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-产品定位会
    path: "/component-priceControl-Productlocat",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(9).then((function (require) {
        var app = __webpack_require__(1505); //============================价格管理-产品定位会
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-项目定位会
    path: "/component-priceControl-Projectlocat",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(8).then((function (require) {
        var app = __webpack_require__(1506); //============================价格管理-项目定位会
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-启动会
    path: "/component-priceControl-Startup",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(7).then((function (require) {
        var app = __webpack_require__(1507); //============================价格管理-项目定位会
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-工规证
    path: "/component-priceControl-Certificate",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(16).then((function (require) {
        var app = __webpack_require__(1508); //============================价格管理-工规证
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-决策书
    path: "/component-priceControl-Decision",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(14).then((function (require) {
        var app = __webpack_require__(1509); //============================价格管理-决策书
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-预售证
    path: "/component-priceControl-Presell",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(10).then((function (require) {
        var app = __webpack_require__(1510); //============================价格管理-预售证
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-签约
    path: "/component-priceControl-Contract",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(15).then((function (require) {
        var app = __webpack_require__(1511); //============================价格管理-签约
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-交付
    path: "/component-priceControl-Deliver",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(13).then((function (require) {
        var app = __webpack_require__(1512); //============================价格管理-交付
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //价格管理-表格页
    path: "/component-priceControl-Management",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(11).then((function (require) {
        var app = __webpack_require__(1513); //============================价格管理-表格页
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //面积
    path: "/areaManagement",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(17).then((function (require) {
        var app = __webpack_require__(1514); //============================价格管理-交付
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }

  }, { //发起审批 提交人
    path: "/ProcessApproval",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(6).then((function (require) {
        var app = __webpack_require__(1515); //============================价格管理-交付
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //发起审批 审批人
    path: "/ProcessApprover",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(5).then((function (require) {
        var app = __webpack_require__(1516); //============================价格管理-交付
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, { //发起审批项目
    path: "/newProjectApproval",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(3).then((function (require) {
        var app = __webpack_require__(1517); //============================价格管理-交付
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }

  }, { //发起审批分期
    path: "/newProjectStage",
    getComponent: function getComponent(next, callback) {
      __webpack_require__.e/* require.ensure */(4).then((function (require) {
        var app = __webpack_require__(1518); //============================价格管理-交付
        callback(null, app.default);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }]
};
_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory, routes: rootRout }), document.querySelector("#JH-Router"));
exports.default = rootRout;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(52);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 总头部 */


//兼容ie
var ToolsList = function (_React$Component) {
    _inherits(ToolsList, _React$Component);

    function ToolsList(arg) {
        _classCallCheck(this, ToolsList);

        var _this = _possibleConstructorReturn(this, (ToolsList.__proto__ || Object.getPrototypeOf(ToolsList)).call(this, arg));

        _this.state = {
            userInfo: "",
            myApprovalHistCount: 0, /*审批历史*/
            mySubmitionCount: 0, /*我的申请*/
            myMytaskDraftCount: 0, /*我的草稿*/
            myTodoCount: 0 /*我的待审*/
        };
        return _this;
    }
    /*菜单跳转
     *pageClass 页面分类，例如项目列表，面积管理，具有单独的index页面
     *routerArr 页面分类下对应的路由
     * */


    _createClass(ToolsList, [{
        key: 'EVENT_CLICK',
        value: function EVENT_CLICK(pageClass, routerArr) {
            var th = this;
            var pageUrl = "";
            if (!pageClass && !routerArr) {
                alert("缺少页面分类和路由地址，去传递去，坑爹玩意");
            }
            if (pageClass == "Home") {
                /*项目列表*/
                pageUrl = "/Home/Index/#/";
            } else if (pageClass == "AreaInfo") {
                /*面积管理*/
                pageUrl = "/AreaInfo/Index/#/";
            }
            /*switch(str){
                case "index":iss.hashHistory.push("index");break;
                case "agenty":iss.hashHistory.push("agenty");break;
                case "apply":iss.hashHistory.push("apply");break;
                case "draft":iss.hashHistory.push("draft");break;
                case "approalHistory":iss.hashHistory.push("approalHistory");break;
                case "priceControl":iss.hashHistory.push({
                    pathname:"priceControl"
                });break;
            }*/
            window.location.href = pageUrl + routerArr;
        }
        /*退出*/

    }, {
        key: 'EVENT_ILogout',
        value: function EVENT_ILogout() {
            iss.ajax({
                type: "post",
                url: "/Account/ILogout",
                success: function success(res) {
                    if (res.message == "成功") {
                        sessionStorage.removeItem("userInfo"); //清除登陆数据
                        sessionStorage.removeItem("treeId");
                        window.location.href = "/Account/Login";
                    }
                },
                error: function error(e) {}
            });
        }
        /*基础设置*/

    }, {
        key: 'EVENT_CLICKSETUP',
        value: function EVENT_CLICKSETUP() {
            iss.ajax({
                type: "post",
                url: "/Common/ILoginEncryp",
                success: function success(res) {
                    if (res.message == "成功") {
                        var tempwindow = window.open('_blank'); //打开一个窗口，然后用
                        tempwindow.location = res.rows; //使这个窗口跳转到百度，这样就会呈现弹出百度窗口的效果了。
                    }
                },
                error: function error(e) {}
            });
        }
        /*获取我的里面的数量*/

    }, {
        key: 'evGetMyCount',
        value: function evGetMyCount() {
            var th = this;

            iss.ajax({
                type: "get",
                url: "/MyTodo/ImyTodoCount",
                success: function success(res) {

                    if (res.message == "成功") {
                        var results = res.rows[0];
                        th.setState({
                            myApprovalHistCount: results.MYAPPROVALHISTCOUNT,
                            mySubmitionCount: results.MYSUBMITIONCOUNT,
                            myMytaskDraftCount: results.MYTASKDRAFTCOUNT,
                            myTodoCount: results.MYTODOCOUNT
                        });
                    }
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var th = this;
            th.evGetMyCount();
            var userInforInter = setInterval(function () {
                if (iss.userInfo) {
                    clearInterval(userInforInter);
                    th.setState({
                        userInfo: iss.userInfo
                    });
                }
            }, 500);
            /*jquery ready*/
            $(function () {
                /*审批通过,驳回,已阅以后,重新查询我的数量*/
                $(document).off("reloadMyCount").on("reloadMyCount", function (e) {
                    th.evGetMyCount();
                }).off("evPageClass").on("evPageClass", function (e, pageClass) {
                    /*通过接受的pageClass,对菜单增加active状态*/
                    if (pageClass == "Home") {
                        $("#projectList").addClass("active");
                    } else if (pageClass == "AreaInfo") {
                        $("#areaInfo").addClass("active");
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var th = this;
            /*className="redFont"*/
            return _react2.default.createElement(
                'article',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'userLogin' },
                    _react2.default.createElement(
                        'b',
                        { className: th.state.myTodoCount > 0 ? "userName doing" : "userName" },
                        th.state.userInfo.empName
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'userTancen boxSizing' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'userPending', href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "Home", "agenty") },
                                '\u6211\u7684\u5F85\u5BA1'
                            ),
                            _react2.default.createElement(
                                'i',
                                null,
                                '(',
                                th.state.myTodoCount,
                                ')'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'userApply', href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "Home", "apply") },
                                '\u6211\u7684\u7533\u8BF7'
                            ),
                            _react2.default.createElement(
                                'i',
                                null,
                                '(',
                                th.state.mySubmitionCount,
                                ')'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'userDraft', href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "Home", "draft") },
                                '\u6211\u7684\u8349\u7A3F'
                            ),
                            _react2.default.createElement(
                                'i',
                                null,
                                '(',
                                th.state.myMytaskDraftCount,
                                ')'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'userHistory', href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "Home", "approalHistory") },
                                '\u5BA1\u6279\u5386\u53F2'
                            ),
                            _react2.default.createElement(
                                'i',
                                null,
                                '(',
                                th.state.myApprovalHistCount,
                                ')'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'userExit', href: 'javascript:void(0);', onClick: this.EVENT_ILogout.bind(this) },
                                '\u9000\u51FA'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'h1',
                    { className: 'xtName' },
                    '\u91D1\u8F89\u96C6\u56E2\u8FD0\u8425\u7BA1\u7406\u5E73\u53F0'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            { id: 'projectList', href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "Home", "index") },
                            '\u9879\u76EE\u5217\u8868'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:void(0);', onClick: this.EVENT_CLICKSETUP.bind(this) },
                            '\u57FA\u7840\u8BBE\u7F6E'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            { id: 'areaInfo', href: 'javascript:void(0);' /* onClick={this.EVENT_CLICK.bind(this,"AreaInfo","index")} */ },
                            '\u4FE1\u606F\u586B\u62A5'
                        ),
                        _react2.default.createElement(
                            'ol',
                            { className: 'subMenu' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "AreaInfo", "manage") },
                                    '\u9762\u79EF\u7BA1\u7406'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);' },
                                    '\u4EF7\u683C\u7BA1\u7406'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "AreaInfo", "supply") },
                                    '\u4F9B\u8D27'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "AreaInfo", "payment") },
                                    '\u7B7E\u7EA6\u4E0E\u56DE\u6B3E'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);' },
                                    '\u91CD\u70B9\u4E8B\u9879'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);', onClick: this.EVENT_CLICK.bind(this, "AreaInfo", "primarykey") },
                                    '\u5173\u952E\u6307\u6807'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            '\u62A5\u8868\u7BA1\u7406'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            '\u697C\u680B\u5339\u914D'
                        )
                    )
                )
            );
        }
    }]);

    return ToolsList;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(ToolsList, null), document.querySelector("#JH-Header"));

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(58);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _toolsTree = __webpack_require__(316);

var _toolsTree2 = _interopRequireDefault(_toolsTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //兼容ie
//公共类


//树控件
var ToolsTree = function (_React$Component) {
    _inherits(ToolsTree, _React$Component);

    function ToolsTree(arg) {
        _classCallCheck(this, ToolsTree);

        var _this = _possibleConstructorReturn(this, (ToolsTree.__proto__ || Object.getPrototypeOf(ToolsTree)).call(this, arg));

        _this.state = {
            data: "",
            changeCurrent: "",
            search: "",
            changeState: "", /*用来控制左侧树右上方的按钮,例如项目列表，点选项目时，会出现新建分期，编辑项目，删除项目的按钮*/
            pageClass: "Home" /*页面分类，如项目列表，面积管理等需要重新定位入口的分类,默认是项目*/
        };
        _this.setTime = "";
        return _this;
    }

    _createClass(ToolsTree, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var th = this;
            var pathClass = location.pathname;

            if (pathClass == "/Home/Index/") {
                /*项目列表*/
                th.setState({
                    pageClass: "Home",
                    changeState: _iss2.default.getQuert("intallment") ? "intallment" : _iss2.default.getQuert("newProject") ? "newProject" : ""
                });
            } else if (pathClass == "/AreaInfo/Index/") {
                /*面积管理*/
                th.setState({
                    pageClass: "AreaInfo",
                    changeState: ""
                });
            }
            console.log("地址栏地址");
            console.log(pathClass);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var th = this;
            var pathClass = th.state.pageClass;
            th.notIndexChange(); //判断是否刷新了也没
            /*告诉头部，当前处于哪个页面分类，方便给menu添加active状态*/
            $(function () {
                $(document).triggerHandler("evPageClass", [pathClass]);
            });
            _toolsTree2.default.bindTree("#tree", function (arg) {
                _iss2.default.id = arg;
                sessionStorage.setItem("treeId", JSON.stringify(arg));

                var id = void 0,
                    current = void 0;
                if (pathClass == "Home") {
                    switch (arg["level_id"]) {
                        case "1": //集团汇总
                        case "2":
                            _iss2.default.hashHistory.replace({ pathname: "index", state: arg });break; //总部
                        case "3":
                            _iss2.default.hashHistory.replace({ pathname: "index", state: arg });id = "newProject";break; //项目
                        case "4":
                            _iss2.default.hashHistory.replace({ pathname: "index", state: arg, query: { status: "show" } });id = "intallment";current = "newProject";break; //分公司
                        case "5":
                            "";_iss2.default.hashHistory.replace({ pathname: "index", state: arg, query: { status: "show" } });current = "intallment";id = "intallmentDetail";break; //分区;
                    }
                } else if (pathClass == "AreaInfo") {

                    switch (arg["level_id"]) {
                        case "1":
                        case "2":
                        case "3":
                            _iss2.default.hashHistory.push({
                                pathname: "index",
                                state: arg
                            });
                            break;
                        case "4":
                            /*项目*/
                            _iss2.default.hashHistory.push({
                                pathname: "manage",
                                state: arg,
                                search: "?isProOrStage=" + 1 + "&dataKey=" + _iss2.default.id.id
                            });
                            break;
                        case "5":
                            /*分期*/
                            _iss2.default.hashHistory.push({
                                pathname: "manage",
                                state: arg,
                                search: "?isProOrStage=" + 2 + "&dataKey=" + _iss2.default.id.id
                            });
                            break;
                    }
                }

                th.setState({
                    changeState: id,
                    changeCurrent: current,
                    data: arg,
                    status: arg["status"]
                });
            });
        }
    }, {
        key: 'notIndexChange',
        value: function notIndexChange() {
            //非首页跳转
            if (_iss2.default.getQuert("dataKey")) {
                return;
                // iss.id=
            } else {
                _iss2.default.id = sessionStorage.getItem("treeId") ? JSON.parse(sessionStorage.getItem("treeId")) : "";
            }

            if (_iss2.default.id == "" && !_iss2.default.getQuert("login")) {
                //iss.id=localStorage.getItem("treeId");
                _iss2.default.hashHistory.replace("/index");
            }
        }
    }, {
        key: 'addTodo',
        value: function addTodo() {
            var th = this;
            if (th.state.changeState == "newProject") {
                _iss2.default.hashHistory.replace({
                    pathname: '/' + th.state.changeState,
                    state: this.state.data,
                    query: {
                        status: "add"
                    }

                });
            };
            if (th.state.changeState == "intallment") {
                if (_iss2.default.id.initdata == 1) {
                    _iss2.default.hashHistory.replace({
                        pathname: '/' + th.state.changeState,
                        state: this.state.data,
                        query: {
                            status: "add"
                        }
                    });
                } else if (_iss2.default.id.initdata == 0) {
                    if (th.state.status == 99) {
                        _iss2.default.hashHistory.replace({
                            pathname: '/' + th.state.changeState,
                            state: this.state.data,
                            query: {
                                status: "add"
                            }

                        });
                    } else if (th.state.status == 0) {
                        //iss.popover({ content: "该项目未审批无法新增分期" });
                        _iss2.default.hashHistory.replace({
                            pathname: '/' + th.state.changeState,
                            state: this.state.data,
                            query: {
                                status: "add"
                            }

                        });
                    } else {
                        //iss.popover({ content: "该项目审批中无法新增分期"});
                        _iss2.default.hashHistory.replace({
                            pathname: '/' + th.state.changeState,
                            state: this.state.data,
                            query: {
                                status: "add"
                            }

                        });
                    }
                }
            }
        }
    }, {
        key: 'editTodo',
        value: function editTodo(arg) {
            var th = this;
            if (th.state.changeCurrent == "intallment") {
                if (th.state.status == 0 || th.state.status == -1) {
                    _iss2.default.hashHistory.replace({
                        pathname: '/' + th.state.changeCurrent,
                        query: {
                            status: "edit"
                        }
                    });
                } else if (th.state.status == 99) {
                    _iss2.default.hashHistory.replace({
                        pathname: '/' + th.state.changeCurrent,
                        query: {
                            status: "upgrade"
                        }
                    });
                } else {
                    _iss2.default.popover({ content: "该分期审批中无法编辑" });
                }
            }
            if (th.state.changeCurrent == "newProject") {
                if (_iss2.default.id.initdata == 1) {
                    _iss2.default.hashHistory.replace({
                        pathname: '/' + th.state.changeCurrent,
                        query: {
                            status: "upgrade"
                        }
                    });
                } else if (_iss2.default.id.initdata == 0) {
                    if (th.state.status == 99) {
                        _iss2.default.hashHistory.replace({
                            pathname: '/' + th.state.changeCurrent,
                            query: {
                                status: "upgrade"
                            }
                        });
                    } else if (th.state.status == 0) {
                        _iss2.default.hashHistory.replace({
                            pathname: '/' + th.state.changeCurrent,
                            query: {
                                status: "edit"
                            }
                        });
                    } else {
                        _iss2.default.popover({ content: "该项目审批中无法编辑" });
                    }
                }
            }
        }
    }, {
        key: 'deleteTodo_1',
        value: function deleteTodo_1(arg) {
            var th = this;
            if (_iss2.default.id.initdata == 0) {
                if (th.state.status == 0 || th.state.status == -1) {
                    _iss2.default.Alert({
                        title: "提示",
                        width: 300,
                        height: 90,
                        content: '<div class="Alert">\u786E\u8BA4\u8981\u5220\u9664\u5206\u671F\u5417\uFF1F</div>',
                        ok: function ok() {
                            _iss2.default.ajax({ //获取数据
                                type: "post",
                                url: "/Stage/IDelete",
                                data: {
                                    id: _iss2.default.id.id
                                },
                                success: function success(res) {

                                    if (res.rows == true) {
                                        _iss2.default.popover({ content: "删除成功！", type: 2 });
                                        _iss2.default.hashHistory.replace("/index");
                                        $(window).trigger("treeLoad");
                                    } else {
                                        _iss2.default.popover({ content: "删除失败！" });
                                    }
                                },
                                error: function error(e) {}
                            });
                        }
                    });
                } else if (th.state.status == 99) {
                    _iss2.default.popover({ content: "分期已审批通过无法删除" });
                } else {
                    _iss2.default.popover({ content: "分期审批中无法删除" });
                }
            } else if (_iss2.default.id.initdata == 1) {
                _iss2.default.popover({ content: "历史分期只允许编辑，不可删除" });
            }
        } //删除分期

    }, {
        key: 'deleteTodo_2',
        value: function deleteTodo_2(arg) {
            var th = this;
            if (_iss2.default.id.initdata == 0) {
                if (th.state.status == 0 || th.state.status == -1) {
                    _iss2.default.Alert({
                        title: "提示",
                        width: 300,
                        height: 90,
                        content: '<div class="Alert">\u786E\u8BA4\u8981\u5220\u9664\u9879\u76EE\u5417\uFF1F</div>',
                        ok: function ok() {
                            _iss2.default.ajax({ //获取数据
                                type: "post",
                                url: "/Project/IDelete",
                                data: {
                                    projectId: _iss2.default.id.id
                                },
                                success: function success(res) {

                                    if (res.errorcode == 200) {
                                        _iss2.default.popover({ content: "删除成功！", type: 2 });
                                        _iss2.default.hashHistory.replace("/index");
                                        $(window).trigger("treeLoad");
                                    } else {
                                        _iss2.default.popover({ content: "删除失败！" });
                                    }
                                }
                            });
                        }
                    });
                } else if (th.state.status == 99) {
                    _iss2.default.popover({ content: "项目已审批通过无法删除" });
                } else {
                    _iss2.default.popover({ content: "项目审批中无法删除" });
                }
            } else if (_iss2.default.id.initdata == 1) {
                _iss2.default.popover({ content: "历史项目只允许编辑，不可删除" });
            }
        } //删除项目

    }, {
        key: 'EVENT_CHANGE_SEARCH',
        value: function EVENT_CHANGE_SEARCH(ev) {
            var th = this,
                me = ev.target.value;
            th.setSate({
                search: me
            });
            clearTimeout(th.setTime);
            th.setTime = setTimeout(function (arg) {}, 3000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var th = this;
            var setBar = function setBar(arg) {
                if (th.state.changeState == "" || th.state.changeState == undefined) {
                    return "";
                } else if (th.state.changeState == "newProject") {
                    return _react2.default.createElement(
                        'div',
                        { className: '' },
                        _react2.default.createElement('a', { href: 'javascript:;', onClick: _this2.addTodo.bind(_this2), className: 'iconBoxJin projectAdd', title: '\u521B\u5EFA\u9879\u76EE' })
                    );
                } else if (th.state.changeState == "intallmentDetail") {
                    return _react2.default.createElement(
                        'div',
                        { className: 'deleteBox' },
                        _react2.default.createElement('a', { href: 'javascript:;', onClick: _this2.deleteTodo_1.bind(_this2), className: 'iconBoxJin projectDelete', title: '\u5220\u9664\u5206\u671F' }),
                        _react2.default.createElement('a', { href: 'javascript:;', onClick: _this2.editTodo.bind(_this2), className: 'iconBoxJin projectBian', title: '\u7F16\u8F91\u5206\u671F' })
                    );
                } else {
                    return _react2.default.createElement(
                        'div',
                        { className: '' },
                        _react2.default.createElement('a', { href: 'javascript:;', onClick: _this2.deleteTodo_2.bind(_this2), className: 'iconBoxJin projectDelete', title: '\u5220\u9664\u9879\u76EE' }),
                        _react2.default.createElement('a', { href: 'javascript:;', onClick: _this2.editTodo.bind(_this2), className: 'iconBoxJin projectBian', title: '\u7F16\u8F91\u9879\u76EE' }),
                        _react2.default.createElement('a', { href: 'javascript:;', onClick: _this2.addTodo.bind(_this2), className: 'iconBoxJin projectAdd', title: '\u521B\u5EFA\u5206\u671F' })
                    );
                }
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'stateSelect' },
                        setBar()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'JH-LeftNav' },
                    _react2.default.createElement(
                        'div',
                        { className: 'treeBox' },
                        _react2.default.createElement('ul', { id: 'tree' })
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'icon-bar', target: '.JH-Nav' },
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-menu-right' })
                )
            );
        }
    }]);

    return ToolsTree;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(ToolsTree, null), document.querySelector("#JH-Nav"));

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     import ReactDOM from 'react-dom'; */


var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $tree = function () {
    function $tree(ele) {
        _classCallCheck(this, $tree);

        this.state = {
            url: "/Home/GetTreeInfo",
            treeDate: []
        };
        this.getAjax();
    }

    _createClass($tree, [{
        key: "getAjax",
        value: function getAjax() {
            var th = this;

            _iss2.default.ajax({
                type: "post",
                url: th.state.url,
                success: function success(da) {

                    th.ele.tree("loadData", da);
                },
                error: function error(e) {}
            });
        }
    }, {
        key: "togo",
        value: function togo(node) {//跳转


        }
    }, {
        key: "bindTree",
        value: function bindTree(ele, callback) {
            //绑定数据后回调
            var th = this;
            th.ele = $(ele);
            var trees = th.ele.tree({
                parentField: "pid",
                idFiled: "id",
                textFiled: "text",
                data: th.data,
                formatter: function formatter(node) {

                    var txt = node.text || "error projectName";
                    var txtFormat = "";
                    if (txt.length > 11) {
                        txtFormat = txt.slice(0, 11) + "...";
                    } else {
                        txtFormat = txt;
                    }
                    return txtFormat;
                },
                onClick: function onClick(node) {
                    callback(node);
                },

                onLoadSuccess: function onLoadSuccess(node, data) {

                    $(".tree-node").each(function (index, element) {
                        var me = element;
                        var node = th.ele.tree("getNode", me);
                        $(me).attr("title", node.text || "");
                    });
                }
            });
            setTimeout(function (arg) {
                th.bindScroll();
            });

            $(window).on("treeLoad", function (arg) {
                th.getAjax();
            });
        }
    }, {
        key: "bindScroll",
        value: function bindScroll() {
            var th = this;
            var pa = this.ele.parent(),
                id = pa.attr("id") || "tree-" + new Date().getTime();
            pa.attr("id", id);
            pa.mCustomScrollbar({
                autoDraggerLength: true,
                scrollButtons: { enable: true }
            });
        }
    }]);

    return $tree;
}();

var tree = new $tree();
exports.default = tree;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //兼容ie
//公共类
//路由
//头部


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(58);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _router = __webpack_require__(1463);

var _router2 = _interopRequireDefault(_router);

var _toolsList = __webpack_require__(314);

var _toolsList2 = _interopRequireDefault(_toolsList);

var _toolsLeftTree = __webpack_require__(315);

var _toolsLeftTree2 = _interopRequireDefault(_toolsLeftTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//左侧树形
/* 公共页面js */
var main = function () {
  function main() {
    _classCallCheck(this, main);

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

  _createClass(main, [{
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
          //  if(JHNav.hasClass("active")) return false;
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
        //if(pa.hasClass("fixed")) return false;

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

  return main;
}();

new main();

/***/ })

},[646]);