webpackJsonp([24],{

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(42);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _toolsStateNode = __webpack_require__(963);

var _toolsStateNode2 = _interopRequireDefault(_toolsStateNode);

var _toolsIndexTab = __webpack_require__(922);

var _toolsIndexTab2 = _interopRequireDefault(_toolsIndexTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 项目概览 首页 */
//兼容ie


//标签
var index = function (_React$Component) {
    _inherits(index, _React$Component);

    function index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.echarts = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var th = this;
            __webpack_require__.e/* require.ensure */(35).then((function (require) {
                //异步加载js
                th.echarts = __webpack_require__(964); //============================首页
                th.bind_echars();
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            // this.bind_echars();
            this.bind_table();
        }
    }, {
        key: 'addTodo',
        value: function addTodo(text) {}
    }, {
        key: 'Event_fullMap',
        value: function Event_fullMap() {
            //项目总图
            this.bind_bigmap();
        }
    }, {
        key: 'Event_fullMapPartition',
        value: function Event_fullMapPartition() {
            //分区总图
            this.bind_bigmap();
        }
    }, {
        key: 'Event_fullMapPlate',
        value: function Event_fullMapPlate() {
            //推盘图
            this.bind_bigmap();
        }
    }, {
        key: 'bind_bigmap',
        value: function bind_bigmap() {
            var fee = this.refs.iframe,
                w = window.screen.availWidth,
                h = window.screen.availHeight,
                src = fee.src;
            /* fee.style.width = w+"px";
            fee.style.height = h+"px";
            fee.style.position="fixed";
            fee.style.left=0;
            fee.style.top=0;
            fee.style.zIndex=200; */
            window.open(src + "?fullScreen=true", "newWindow", 'height=' + h + ',width=' + w + ',status=no,toolbar=no,menubar=no,location=no,left=0,top=0');
        }
    }, {
        key: 'bind_table',
        value: function bind_table() {
            //绑定项目指标
            var _data = [{ area: "建设用地面积", number: "-", count: "", group: "" }, { area: "建设用地面积", number: "-", count: "", group: "" }, { area: "建设用地面积", number: "-", count: "", group: "" }, { area: "建设用地面积", number: "-", count: "", group: "" }];
            var table = $("#areas");
            table.datagrid({
                width: "auto",
                nowrap: true,
                fitColumns: true,
                // rownumbers:true,
                singleSelect: true,
                columns: [[{ field: 'area', align: "center", title: '面积指标', rowspan: 1, width: 350, fixed: true }, { field: 'number', align: "center", title: '面积指标', rowspan: 1, width: 120, fixed: true }, { field: 'count', align: "center", title: '面积指标', rowspan: 1, width: 120, fixed: true }, { field: 'group', align: "center", title: '面积指标', rowspan: 1, width: 90 }]],
                data: _data
            });
            $(".icon-bar").on("EVENT_TOGGLEBAR", function (ev) {
                if (iss.getQuert("index")) {
                    setTimeout(function () {
                        table.datagrid("resize");
                    }, 500);
                }
                // myChart.setOption(option);
            });
        }
    }, {
        key: 'bind_echars',
        value: function bind_echars() {
            //绑定图标
            var myChart = this.echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    bottom: 0
                },
                grid: {
                    left: '0',
                    right: '0',
                    bottom: 0,
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['', '', ''],
                    right: 0
                },
                xAxis: {
                    type: 'category',
                    data: ["", "", "", ""]
                },
                yAxis: {

                    type: 'value',
                    interval: 10
                },
                splitArea: 0,
                color: ["#2979ff", "#ff9100", "#e53935", "#673ab7", "#00e676"],
                series: [{
                    name: '销量',
                    type: 'bar',
                    barWidth: 15,
                    data: [5, 20, 36, 10, 10, 20]
                }, {
                    name: '销量2',
                    type: 'bar',
                    barWidth: 15,
                    data: [15, 25, 15, 3, 18, 15]
                }, {
                    name: '销量3',
                    type: 'bar',
                    barWidth: 15,
                    data: [15, 25, 15, 3, 18, 15]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

            $(".icon-bar").on("EVENT_TOGGLEBAR", function (ev) {
                setTimeout(function () {
                    myChart.resize();
                }, 500);
                // myChart.setOption(option);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(_toolsIndexTab2.default, { parent: this.props }),
                _react2.default.createElement(_toolsStateNode2.default, { location: this.props.location, title: '\u5173\u952E\u8282\u70B9' }),
                _react2.default.createElement(
                    'article',
                    { className: 'index-iframe mgT20' },
                    _react2.default.createElement(
                        'section',
                        { className: 'index-left' },
                        _react2.default.createElement(
                            'header',
                            { className: 'HeaderBar' },
                            _react2.default.createElement(
                                'h5',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '\u9879\u76EE\u603B\u56FE'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    _react2.default.createElement(
                                        'li',
                                        { onClick: this.Event_fullMap.bind(this) },
                                        '\u9879\u76EE\u603B\u56FE'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { onClick: this.Event_fullMapPartition.bind(this) },
                                        '\u5206\u533A\u603B\u56FE'
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { onClick: this.Event_fullMapPlate.bind(this) },
                                        '\u63A8\u76D8\u56FE'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('iframe', { ref: 'iframe', id: 'iframe', src: '/Content/Components/map.html', frameBorder: 'no', width: '400', height: '300' })
                        )
                    ),
                    _react2.default.createElement(
                        'section',
                        { className: 'index-right' },
                        _react2.default.createElement(
                            'header',
                            { className: 'HeaderBar' },
                            _react2.default.createElement(
                                'h5',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '\u5173\u952E\u6027\u6307\u6807'
                                )
                            )
                        ),
                        _react2.default.createElement('div', { id: 'main', className: 'echarBox' })
                    )
                ),
                _react2.default.createElement(
                    'article',
                    { className: 'mgT20' },
                    _react2.default.createElement(
                        'section',
                        null,
                        _react2.default.createElement(
                            'header',
                            { className: 'HeaderBar' },
                            _react2.default.createElement(
                                'h5',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '\u9879\u76EE\u9762\u79EF\u6307\u6807\uFF08\u5355\u4F4D\uFF1A\u5E73\u65B9\u7C73\uFF09'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('table', { id: 'areas' })
                        )
                    )
                )
            );
        }
    }]);

    return index;
}(_react2.default.Component);

exports.default = index;

/***/ }),

/***/ 922:
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * 首页导航条
 * index  identity  supply  所需
 */


//兼容ie

var IndexTab = function (_React$Component) {
    _inherits(IndexTab, _React$Component);

    function IndexTab(arg) {
        _classCallCheck(this, IndexTab);

        var _this = _possibleConstructorReturn(this, (IndexTab.__proto__ || Object.getPrototypeOf(IndexTab)).call(this, arg));

        _this.bindTab();
        _this.state = {
            data: [{ "guid": "1", "text": "项目概览", "tap": "index" }]
        };
        return _this;
    }

    _createClass(IndexTab, [{
        key: 'bindTab',
        value: function bindTab(prop) {
            $(".JH-Content").removeClass("CLASS_AGENTY");
            // ReactDOM.render(<ToolsTtab parent={prop}/>,document.querySelector("#React-tools-tab"));
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
                case "index":
                    iss.hashHistory.push("index", { "state": "001" });break;
                case "identity":
                    iss.hashHistory.push("identity", { "state": "002" });break;
                case "supply":
                    iss.hashHistory.push("supply", { "state": "002" });break;
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

    return IndexTab;
}(_react2.default.Component);

exports.default = IndexTab;

/***/ }),

/***/ 963:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolsStateNode = function (_React$Component) {
    _inherits(ToolsStateNode, _React$Component);

    function ToolsStateNode(arg) {
        _classCallCheck(this, ToolsStateNode);

        var _this = _possibleConstructorReturn(this, (ToolsStateNode.__proto__ || Object.getPrototypeOf(ToolsStateNode)).call(this, arg));

        _this.state = {
            list: [{ "id": "1", "text": "1月", "content": "fdsfafsdsa", "state": 0 }, { "id": "1", "text": "2月", "content": "fdsfafsdsa", "state": 1 }, { "id": "1", "text": "3月", "content": "fdsfafsdsa", "state": 2 }, { "id": "1", "text": "4月", "content": "fdsfafsdsa", "state": 3 }, { "id": "1", "text": "5月", "content": "fdsfafsdsa", "state": 4 }, { "id": "1", "text": "6月", "content": "fdsfafsdsa", "state": 5 }, { "id": "1", "text": "7月", "content": "fdsfafsdsa", "state": 6 }, { "id": "1", "text": "8月", "content": "fdsfafsdsa", "state": 7 }, { "id": "1", "text": "9月", "content": "fdsfafsdsa", "state": 8 }, { "id": "1", "text": "10月", "content": "fdsfafsdsa", "state": 9 }, { "id": "1", "text": "11月", "content": "fdsfafsdsa", "state": 10 }, { "id": "1", "text": "12月", "content": "fdsfafsdsa", "state": 11 }]
        };
        return _this;
    }

    _createClass(ToolsStateNode, [{
        key: 'bindToolTip',
        value: function bindToolTip() {
            $('[data-toggle="tooltip"]').tooltip();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.bindToolTip();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.bindToolTip();
        }
    }, {
        key: 'render',
        value: function render() {

            var list = this.state.list.map(function (da, ind) {
                return _react2.default.createElement(
                    'li',
                    { key: ind, 'data-toggle': 'tooltip', className: "col-md-1 col-xs-1 col-lg-1 Tap Tap" + da.state, 'data-placement': 'bottom', title: da.content },
                    da.text
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'stateNodeBox mgT20' },
                _react2.default.createElement(
                    'header',
                    { className: 'HeaderBar' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u9879\u76EE\u5173\u952E\u8282\u70B9'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'BlockBox' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'row' },
                        list
                    )
                )
            );
        }
    }]);

    return ToolsStateNode;
}(_react2.default.Component);

exports.default = ToolsStateNode;

/***/ })

});