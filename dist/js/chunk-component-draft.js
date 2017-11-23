webpackJsonp([25],{

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

__webpack_require__(42);

var _toolsAgentyTab = __webpack_require__(836);

var _toolsAgentyTab2 = _interopRequireDefault(_toolsAgentyTab);

var _toolsPage = __webpack_require__(837);

var _toolsPage2 = _interopRequireDefault(_toolsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 我的草稿 */ /* 我的申请 */
//兼容ie
//引入头部


//基于bootstrap分页组件
var Draft = function (_React$Component) {
    _inherits(Draft, _React$Component);

    function Draft(arg) {
        _classCallCheck(this, Draft);

        var _this = _possibleConstructorReturn(this, (Draft.__proto__ || Object.getPrototypeOf(Draft)).call(this, arg));

        _this.url = "/MyTodo/IGetmytask_draft";
        _this.state = {
            dataList: [],
            pageTotal: 0, //页数
            pageCount: 0 //总数
        };
        return _this;
    }

    _createClass(Draft, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getAjax();
        }
    }, {
        key: "EVENT_CLICK_PROJECTNAME",
        value: function EVENT_CLICK_PROJECTNAME(da) {

            /*  let search = ""
              switch (da.ENTIID) {
                  case "10005": search = `?e=${da.ENTIID}&dataKey=${da.id}&current=ProcessApproval`; break; //项目
                  case "10004": search = `?e=${da.ENTIID}&dataKey=${da.id}&projectId=${da.PROJECTID}&current=ProcessApproval`; break; //分歧
              }*/
            //sessionStorage.clear("treeId");
            window.location.href = da.url;
            $(".JH-Content").removeClass("CLASS_AGENTY");
            /*var reg=/\#\/.*?\?/;
            iss.hashHistory.push({ 
                pathname:reg.exec(da.url)[0].replace(/[#\?]/ig,""), 
                search: da.url.split("?")[1]
            });*/
        }
    }, {
        key: "getAjax",
        value: function getAjax(arg) {
            var th = this,
                page = 1,
                size = 10;
            if (arg) {
                page = arg;
            }
            iss.ajax({
                url: this.url,
                data: {
                    page: page,
                    size: size
                },
                success: function success(da) {
                    th.setState({
                        pageTotal: da.rows.TotalPages,
                        pageCount: da.rows.TotalItems,
                        dataList: da.rows.Items
                    });
                },
                error: function error() {}
            });
        }
    }, {
        key: "Bind_Click_Page",
        value: function Bind_Click_Page(arg) {
            // 分页回调
            this.getAjax(arg); //分页完成后重新获取
        }
    }, {
        key: "agentyTabel",
        value: function agentyTabel() {
            var th = this;
            return th.state.dataList.map(function (el, ind) {
                return _react2.default.createElement(
                    "tr",
                    { key: ind },
                    _react2.default.createElement(
                        "td",
                        { className: "center" },
                        ind + 1
                    ),
                    _react2.default.createElement(
                        "td",
                        { className: "left" },
                        el.drafttype
                    ),
                    _react2.default.createElement(
                        "td",
                        { className: "left" },
                        _react2.default.createElement(
                            "a",
                            { href: "javascript:;", onClick: th.EVENT_CLICK_PROJECTNAME.bind(th, el) },
                            el.draftname
                        )
                    ),
                    _react2.default.createElement(
                        "td",
                        { className: "center" },
                        el.updatetime
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "article",
                null,
                _react2.default.createElement(_toolsAgentyTab2.default, { parent: this.props }),
                _react2.default.createElement(
                    "section",
                    { className: "agentyBox mgT20" },
                    _react2.default.createElement(
                        "table",
                        { id: "agentyBoxTabel", className: "table2" },
                        _react2.default.createElement(
                            "colgroup",
                            null,
                            _react2.default.createElement("col", { width: "40" }),
                            _react2.default.createElement("col", { width: "250" }),
                            _react2.default.createElement("col", null),
                            _react2.default.createElement("col", { width: "120" }),
                            _react2.default.createElement("col", { width: "120" })
                        ),
                        _react2.default.createElement(
                            "thead",
                            null,
                            _react2.default.createElement(
                                "tr",
                                null,
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    "\u5E8F\u53F7"
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    "\u8349\u7A3F\u7C7B\u578B"
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    "\u8349\u7A3F\u5185\u5BB9"
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    "\u4FDD\u5B58\u65F6\u95F4"
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "tbody",
                            null,
                            this.agentyTabel()
                        )
                    )
                ),
                _react2.default.createElement(_toolsPage2.default, { total: this.state.pageTotal, count: this.state.pageCount, callback: this.Bind_Click_Page.bind(this) })
            );
        }
    }]);

    return Draft;
}(_react2.default.Component);

exports.default = Draft;

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(43);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 代办头部 */


//兼容ie

var ToolsTtab = function (_React$Component) {
    _inherits(ToolsTtab, _React$Component);

    function ToolsTtab(arg) {
        _classCallCheck(this, ToolsTtab);

        var _this = _possibleConstructorReturn(this, (ToolsTtab.__proto__ || Object.getPrototypeOf(ToolsTtab)).call(this, arg));

        _this.bindLeftBart();
        _this.state = {
            data: [{ "guid": "1", "text": "我的待审", "tap": "agenty" }, { "guid": "2", "text": "我的申请", "tap": "apply" }, { "guid": "3", "text": "我的草稿", "tap": "draft" }, { "guid": "4", "text": "审批历史", "tap": "approalHistory" }]
        };
        return _this;
    }

    _createClass(ToolsTtab, [{
        key: 'bindLeftBart',
        value: function bindLeftBart() {
            $(".JH-Content").addClass("CLASS_AGENTY");
            setTimeout(function (a) {
                $(window).trigger("EVENT_CLOSELEFTBAR");
            }, 1000);
        }
        /* 事件 */

    }, {
        key: 'Event_click',
        value: function Event_click(data, ev) {
            var el = $(ev.target);
            el.parent().find("li").removeClass("active");
            setTimeout(function () {
                el.addClass("active");
            });
            switch (data) {
                case "agenty":
                    iss.hashHistory.push("agenty");break;
                case "apply":
                    iss.hashHistory.push("apply");break;
                case "draft":
                    iss.hashHistory.push("draft");break;
                case "approalHistory":
                    iss.hashHistory.push("approalHistory");break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var th = this,
                current = this.props.parent.location.pathname;
            var th;
            var list = this.state.data.map(function (da, ind) {

                if (current.indexOf(da.tap) >= 0) {
                    return _react2.default.createElement(
                        'li',
                        { key: ind, className: 'J-List active', onClick: th.Event_click.bind(th, da.tap) },
                        da.text
                    );
                } else {
                    return _react2.default.createElement(
                        'li',
                        { key: ind, className: 'J-List', onClick: th.Event_click.bind(th, da.tap) },
                        da.text
                    );
                }
            });
            return _react2.default.createElement(
                'header',
                { className: 'JH-HeadTab' },
                _react2.default.createElement(
                    'ul',
                    { className: 'JH-HeadList' },
                    list
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'JH-RightFlot' },
                    _react2.default.createElement(
                        'a',
                        { className: 'btn-refish', href: 'javascript:;' },
                        '\u5237\u65B0'
                    )
                )
            );
        }
    }]);

    return ToolsTtab;
}(_react2.default.Component);

exports.default = ToolsTtab;

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  <Page total={this.state.pageTotal} count={this.state.pageCount} callback={ this.Bind_Click_Page.bind(this) } />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  total:页数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * count：总条数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * callback：点击回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(arg) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, arg));

        _this.state = {
            current: 1

        };
        return _this;
    }

    _createClass(Page, [{
        key: "Bind_click_list",
        value: function Bind_click_list(arg) {
            var callback = this.props.callback || function () {};
            this.setState({
                current: arg
            }, function (ev) {
                callback(arg);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var arr = [],
                total = this.props["total"] || 0,
                count = this.props["count"] || 0;
            for (var i = 1; i <= total; i++) {
                arr.push(_react2.default.createElement(
                    "li",
                    { key: i, className: i == this.state.current ? "active" : "", onClick: this.Bind_click_list.bind(this, i) },
                    _react2.default.createElement(
                        "a",
                        { href: "javascript:;" },
                        i
                    )
                ));
            }
            return _react2.default.createElement(
                "nav",
                { "aria-label": "Page navigation" },
                _react2.default.createElement(
                    "span",
                    { className: "pageTotal" },
                    count ? "共" + count + "条" : ""
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "pagination" },
                    arr
                )
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ })

});