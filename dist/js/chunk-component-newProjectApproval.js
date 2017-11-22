webpackJsonp([7],{

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(52);

__webpack_require__(58);

var _componentProcessApprovalTab = __webpack_require__(1544);

var _componentProcessApprovalTab2 = _interopRequireDefault(_componentProcessApprovalTab);

var _toolsDynamicTable = __webpack_require__(1535);

var _toolsDynamicTable2 = _interopRequireDefault(_toolsDynamicTable);

var _componentNewProjectCountView = __webpack_require__(1599);

var _componentNewProjectCountView2 = _interopRequireDefault(_componentNewProjectCountView);

__webpack_require__(1538);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*审批信息*/

/**
 * 首页导航条
 * index  identity  supply  所需
 */
//兼容ie
//导航信息
//地块
//项目基本信息


//专用css  
var ApprovalControl = function (_React$Component) {
    _inherits(ApprovalControl, _React$Component);

    function ApprovalControl(arg) {
        _classCallCheck(this, ApprovalControl);

        var _this = _possibleConstructorReturn(this, (ApprovalControl.__proto__ || Object.getPrototypeOf(ApprovalControl)).call(this, arg));

        _this.state = {
            CountData: [], //地块统计数据
            pid: _this.props.location.query["dataKey"], //地块id
            propsDATA: [], //地块数据
            allSearchArg: _this.props.location.query /*地址栏所有参数*/
        };
        return _this;
    }

    _createClass(ApprovalControl, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.BIIND_FIST_LAND();
        }
    }, {
        key: 'BIIND_FIST_LAND',
        value: function BIIND_FIST_LAND() {
            //获取已有地块
            var THIS = this;
            var id = this.props.location.query["dataKey"]; //iss.id.id;
            iss.ajax({ //获取已有地块
                url: "/Project/IProjectLandsInfo",
                data: { projectId: id },
                success: function success(d) {
                    if (d.rows) {
                        var da = {};
                        d.rows.forEach(function (el, ind) {
                            if (ind == 0) {
                                //初次加载地块

                                THIS.setState({
                                    propsDATA: el["FieldList"]
                                });
                            }
                            da[el.LandId] = el;
                        });

                        THIS.setState({
                            DynamicData: da
                        });
                    }
                }
            });
            //Project/ILandsStatistics  土地动态统计
            iss.ajax({
                url: "/Project/ILandsStatistics",
                success: function success(a) {

                    if (a["rows"]) {
                        THIS.setState({
                            CountData: a["rows"]
                        }, function (arg) {
                            setTimeout(function (arg) {

                                THIS.BIND_COUNT_GETMAP();
                            }, 2000);
                        });
                    }
                }
            });
        }
    }, {
        key: 'BIND_COUNT_GETMAP',
        value: function BIND_COUNT_GETMAP() {
            //地块统计
            var da = this.state.CountData,
                th = this;
            //   var t = new Date().getTime();
            da.forEach(function (el, ind) {
                var reg = /\{.*?\}[\+\-\*\/]/,
                    regcount = /\{.*?\}/ig,
                    arr = regcount.exec(el.exec || ""),
                    list = th.state.DynamicData;
                var reg2 = /\<.*?\>[\+\-\*\/]/,
                    regcount2 = /\<.*?\>/ig,
                    arr2 = el.exec.match(regcount2),
                    list2 = th.state.CountData;
                if (el.exec && !reg.exec(el.exec)) {
                    if (arr && arr[0]) {
                        var _ret = function () {
                            var _id = arr[0].replace(/[{}]/ig, ""),
                                _str = [];
                            for (var v in list) {
                                list[v]["FieldList"].forEach(function (ee, ii) {
                                    if (ee["id"] == _id) {
                                        _str.push(~~ee["val"]);
                                        return;
                                    }
                                });
                            }
                            var n_n = eval(_str.join("+"));
                            el.val = n_n == Infinity ? 0 : n_n;
                            return {
                                v: void 0
                            };
                        }();

                        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
                    } else if (el.exec && reg2.exec(el.exec)) {
                        var str = el.exec,
                            nums = 0;
                        arr2.forEach(function (ee, ii) {
                            var _id_ = ee.replace(/[\<\>]/ig, "");
                            list2.forEach(function (eee, iii) {
                                if (eee.id == _id_) {
                                    str = str.replace(ee, ~~eee.val);
                                }
                            });
                        });
                        var _n_n_ = eval(str);
                        el.val = _n_n_ == Infinity || !_n_n_ ? 0 : _n_n_;
                        return;
                    }
                }
            });

            th.setState({
                CountData: da
            });
        }
    }, {
        key: 'BIND_COUNT_DATACALLBACK',
        value: function BIND_COUNT_DATACALLBACK() {//地块统计完成回掉

        }
    }, {
        key: 'EVENT_CLICK_LANDBTN',
        value: function EVENT_CLICK_LANDBTN(id, e) {
            var self = $(e.target),
                pa = self.parent();
            pa.find("li").removeClass("active");
            self.addClass("active");
            this.setState({
                pid: id,
                propsDATA: this.state.DynamicData[id]["FieldList"]
            });
        }
    }, {
        key: 'BIND_CALLBACK',
        value: function BIND_CALLBACK() {} //地块变更回掉

    }, {
        key: 'BIND_LAND_BTN',
        value: function BIND_LAND_BTN() {
            var map = [],
                li = this.state.DynamicData,
                name = "新增地块",
                g = 0;
            for (var i in li) {
                g += 1;
                for (var f = 0; f < li[i].FieldList.length; f++) {
                    if (li[i].FieldList[f]["label"] == "地块名称") {
                        name = li[i].FieldList[f]["val"] || '\u672A\u547D\u540D\u5730\u5757' + g;
                        break;
                    }
                }
                map.push(_react2.default.createElement(
                    'li',
                    { onClick: this.EVENT_CLICK_LANDBTN.bind(this, li[i].LandId), key: g, 'data-id': li[i].LandId },
                    name
                ));
            }
            return map;
        }
    }, {
        key: 'render',
        value: function render() {
            var th = this;
            var stateData = th.state;
            return _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(_componentProcessApprovalTab2.default, { current: 'newProjectApproval', allSearchArg: stateData.allSearchArg }),
                _react2.default.createElement(_componentNewProjectCountView2.default, { all: this.props.location }),
                _react2.default.createElement(
                    'section',
                    null,
                    _react2.default.createElement(
                        'h3',
                        { className: 'boxGroupTit' },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5730\u5757\u4FE1\u606F'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_toolsDynamicTable2.default, { pid: 'DynamicTabl1', DynamicData: this.state.CountData, CallBack: this.BIND_COUNT_DATACALLBACK.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'ul',
                            { className: 'BIND_LAND_BTN' },
                            this.BIND_LAND_BTN()
                        ),
                        _react2.default.createElement(_toolsDynamicTable2.default, { readOnly: 'true', pid: this.state.pid, DynamicData: this.state.propsDATA, CallBack: this.BIND_CALLBACK.bind(this) })
                    )
                )
            );
        }
    }]);

    return ApprovalControl;
}(_react2.default.Component);

exports.default = ApprovalControl;

/***/ }),

/***/ 1530:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHxJREFUeNpinDlzJgM5gAlKewLxMyD+TwA/g6qFa5wLxGFAzAjlM6JhmFgYVC1coyQQH8Hiov9o/CNQtXCNZPsRGTwHYhsk51kD8Qt0RSxYNKYA8WogloDynwJxMjEat8H8QapTyfbjINeIHAX4ADxqWHBEAS4AjxqAAAMASR4bIq9a4swAAAAASUVORK5CYII="

/***/ }),

/***/ 1531:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJFJREFUeNpi/P//PwM5gAVEePnleAKpuUAsSUD9cyBO3rZpynYGkI2evtnPgNgGyv4PopExTAykBqQWxGaCmiQJNOUIuvFAl6D4A6oG7ComBjIBNo3PgTbZQG1gBLKtgcwXWAMHDaQA8WqgBgko/ykoQAhqBNqyjYjQpa4fB7lGeBTgA8hRw4IjCnABeNQABBgANs1HTp7NXyoAAAAASUVORK5CYII="

/***/ }),

/***/ 1532:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVklEQVQ4T6WTzXHCQAyFn/bAcAsdxCW4BHcQSogvaH0jHZAOuBlxASoIqSDuAHcQ0gE5cmCVkcdmjDFkMtnbrqRPTz9L+OehvngRmarqExHFqlqq6muWZUWf7xVARGYAosFgME3T9LBcLuMQwpqIZsy87UIuAKvVanQ8Hgvvfdx2zPM8cs4VzBzdBeR5nhDR2Hs/7TqKiDLzleKLB8tERNsbCkpmHt1VYMbFYrElok9mfrF7Lf8NwIaZ578CrGmq+gFgpKp7IopU9d17P24Bd6q6sVIvSqgn8AxgHkIom2zD4bBsJnI6nWLnXAIgsaaeASKytoBmfF2pbWUhhBRAkWXZvgJY951zNmcjX512MIBvIkomk0mlsALUjVv3Lcq94DNARPZ9S2IOZgPw2M3cyKwU3FqSOvsOwJctWCO7XWMDOAB4aBts62wH7M2adevT9v7Gv/zwH4PhtBGvNQeUAAAAAElFTkSuQmCC"

/***/ }),

/***/ 1533:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaklEQVQ4T6WTzU3DQBCF3+BF4oY7wCVsDpHsmzsgxyhypNBB6MB0kBIc2ULcCBXg21ri4O2A0EG4RSJk0Do/bJwlCOGbtTPfvJl5Q/jnR658GQ3HYL4GkQSzBnCnq6J0xR4BZJikAAIsxVjrbCG7A0neWcaEVKti1oYcAKQc+XSxKuuqkHagDPsBkShrVQSnAWESg9DTqhi3AzvRkGuVHyk+VGAqQcycCiB0XRX+SQXmUUZD0+erVvlt8x/2A5B4BGiqVT75HdAdSAjvmQCfGXMiBAw8aZX3voHnNcBT02qrhSQlwohBk+36NgWXQu82As+TAMdEiM1Q9wAZJtk2uFlfW6pZp6XsBvgodfUwbwDSTB+U6iqPncayksH8zp/rWL/cG4NhA2gGx5nLKHbldvIe0ImSucskJsC8AXTlSrYAbpM0Nhaemfgbr9a9nWy7zaaFTpgsQHRpPxjXNR4AYIb109E6r/EvF/4FXk6sEdl++K0AAAAASUVORK5CYII="

/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

__webpack_require__(58);

var _antd = __webpack_require__(644);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 用来处理动态生成表格
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

//兼容ie


__webpack_require__(645);
var Option = _antd.Select.Option;

var DynamicTable = function (_React$Component) {
    _inherits(DynamicTable, _React$Component);

    function DynamicTable(arg) {
        _classCallCheck(this, DynamicTable);

        var _this = _possibleConstructorReturn(this, (DynamicTable.__proto__ || Object.getPrototypeOf(DynamicTable)).call(this, arg));

        _this.EVENT_CHANGE_ANTD_SELECTS = function (da, el) {

            _this.props.CallBack(da, Array.isArray(el) ? el.join(",") : el);
        };

        _this.count = 0; //初始化记录
        _this.rule = {}; //验证
        _this.id = "DynamicTable-" + iss.guid;
        _this.state = { //数据层
            url: "",
            data: _this.props.DynamicData || [], //数据
            selected: {},
            readOnly: _this.props["readOnly"]
        };

        return _this;
    }

    _createClass(DynamicTable, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            var th = this;
            //this.setState({data:this.props.DynamicData})

            /*   if (this.count == 0) {
                  this.count = 1;
                  this.BIND_INPUT_STATE();
              } */
        }
    }, {
        key: "BIND_INPUT_STATE",
        value: function BIND_INPUT_STATE() {
            var $da = this.state.data;
            $da.forEach(function (da, ind) {});
        }
    }, {
        key: "EVENT_CHANGE_DYNAMIC",
        value: function EVENT_CHANGE_DYNAMIC(d, e) {
            //自定义input事件
            if (d == null) {
                return "";
            } else {
                return d;
            }
        }
    }, {
        key: "getPost",
        value: function getPost() {
            var th = this;
            iss.ajax({
                type: "POST",
                url: th.props.url,
                sucess: function sucess(da) {
                    var data = typeof da.data == "string" ? JSON.parse(da.data) : da.data;
                    th.setState({
                        data: da.rows
                    });
                },
                error: function error(e) {}
            });
        }
    }, {
        key: "setEventDate",
        value: function setEventDate(el, ev) {

            var th = this;
            var de = new Date().Format("yyyy-MM-dd");
            var event = ev.target;
            iss.calendar(de, function (arg) {
                el.val = arg;

                if (el.val && el.test) {
                    el.test.check = true;
                    event.className = event.className.replace("required", "");
                } else if (el.test && el.edit.indexOf("+m") >= 0) {
                    event.className += " required";
                    el.test.check = false;
                }
                th.props.CallBack.call(th, el);
            });
        }
    }, {
        key: "EVENT_CHANGE_INPUT",
        value: function EVENT_CHANGE_INPUT(da, ev) {
            //input修改
            var th = this;

            if (th.Bind_checked(da, ev.target.value)) {

                th.props.CallBack(da, ev);
            }

            if (da.val) {
                ev.target.className = ev.target.className.replace("required", "");
            } else if (da.edit.indexOf("+m") >= 0) {
                ev.target.className += " required";
            }
        }
    }, {
        key: "EVENT_CHANGE_SELECT",
        value: function EVENT_CHANGE_SELECT(da, ev) {

            // el.test.check=false;
            if (da.test && ev.target.value == "请选择") {
                da.test.check = false;
            } else {
                da.test && (da.test.check = true);
            }
            this.props.CallBack(da, ev);
        }
        /**
         * antd多选
         */

    }, {
        key: "Bind_checked",
        value: function Bind_checked(da, val) {
            //检测数据
            var reg = eval("(" + da.regExp + ")");
            if (reg && reg.type.indexOf("number") >= 0) {
                var regs = /\d/,
                    num = /\d+/.exec(reg.type);
                var numreg = /[^(\d+\.?\d+)|^\.\d+]/ig;

                if (num) {
                    var _reg = new RegExp("^\\d+(\.\\d{0," + num[0] + "})?$");
                    var _reg2 = /(?:\d{1}|\.{1})$/;
                    var tested = _reg.test(val) && _reg2.test(val);
                    return val == "" ? true : tested;
                }
                return val == "" ? true : !numreg.test(val);
            }
            return true;
        }
    }, {
        key: "EVENT_BLUR_INPUT",
        value: function EVENT_BLUR_INPUT(el, ev) {
            //失去焦点

            var reg = el.regExp ? eval("(" + el.regExp + ")") : {};
            if (!el.regExp) {
                return;
            }
            var th = this;
            if (reg) {
                //范围限制带添加
                var max = parseFloat(reg["max"] || 0);
                var min = parseFloat(reg["min"] || 0);
                var val = reg["type"].indexOf("string") >= 0 ? (el.val || "").length : parseFloat(el.val || 0);

                if (max && val > max && el.test) {
                    el.test.check = false;
                    el.test.val = "值不应大于" + max + (el.unit || "");
                    th.props.CallBack(el, ev);
                    return;
                } else if (min && val < min && el.test) {
                    el.test.check = false;
                    el.test.val = "值不应小于" + min + (el.unit || "");
                    th.props.CallBack(el, ev);
                    return;
                } else {
                    el.test && (el.test.check = true);
                    el.test && (el.test.val = "");
                    th.props.CallBack(el, ev);
                }
            }
        }
    }, {
        key: "setList",
        value: function setList(da) {
            var _this2 = this;

            var typeBox = function typeBox(el) {
                var numreg = /number\((\d+)\)/.exec(el.regExp || "");
                var fixed = numreg ? numreg[1] : "";
                // fixed=2;
                if (_this2.state.readOnly) {
                    if (el.type == "select") {
                        var list = el.data.map(function (_d, _i) {
                            return _react2.default.createElement(
                                "option",
                                { key: _i, value: _d.val },
                                _d.label
                            );
                        });
                        return _react2.default.createElement(
                            "select",
                            { readOnly: "true", disabled: "disabled", name: el.id, className: el.edit.indexOf("+m") >= 0 && !el.val ? "required" : "", onChange: _this2.EVENT_CHANGE_SELECT.bind(_this2, el), value: el.val || "" },
                            list
                        );
                    }

                    if (fixed || fixed == "0") {
                        return _react2.default.createElement("input", { className: "", type: "text", readOnly: "true", value: el.val ? parseFloat(el.val).toFixed(fixed) : "" });
                    } else {
                        return _react2.default.createElement("input", { className: "", type: "text", readOnly: "true", value: el.val || "" });
                    }
                } else {
                    if (el.type == "select") {
                        //单选
                        if (!Array.isArray(el.data)) {
                            return;
                        }
                        var _list = el.data.map(function (_d, _i) {
                            return _react2.default.createElement(
                                "option",
                                { key: _i, value: _d.val },
                                _d.label
                            );
                        });
                        return _react2.default.createElement(
                            "select",
                            { name: el.id, className: el.edit.indexOf("+m") >= 0 && !el.val ? "required" : "", onChange: _this2.EVENT_CHANGE_SELECT.bind(_this2, el), value: el.val || "" },
                            _list
                        );
                    } else if (el.type == "date") {
                        //日期
                        return _react2.default.createElement("input", { name: el.id, className: el.edit.indexOf("+m") >= 0 && !el.val ? "esayuiDate required" : "esayuiDate", id: el.id, "data-pid": el.pid, value: el.val || "", placeholder: el.edit.indexOf("+m") >= 0 ? "" : "", type: "text", onClick: _this2.setEventDate.bind(_this2, el), readOnly: "true" });
                    } else if (el.type == "selects") {
                        //多选
                        if (!Array.isArray(el.data)) {
                            return;
                        }
                        var children = el.data.map(function (_d, _i) {
                            return _react2.default.createElement(
                                Option,
                                { key: _i },
                                _d.label
                            );
                        });
                        return _react2.default.createElement(
                            _antd.Select,
                            { mode: "tags", name: el.id, tokenSeparators: [','], className: el.edit.indexOf("+m") >= 0 && !el.val ? "required selects" : "selects", onChange: _this2.EVENT_CHANGE_ANTD_SELECTS.bind(_this2, el), defaultValue: Array.isArray(el.val) ? el.val : el.val ? el.val.split(",") : [] },
                            children
                        );
                    } else {
                        if (el.edit.indexOf("+r") >= 0 && (fixed == "0" || fixed)) {
                            return _react2.default.createElement("input", { name: el.id, id: el.id, className: el.edit.indexOf("+m") >= 0 && !el.val ? " required" : "", "data-pid": el.pid, value: el.val ? parseFloat(el.val).toFixed(fixed) : "", placeholder: el.edit.indexOf("+m") >= 0 ? "" : "", type: "text", onBlur: _this2.EVENT_BLUR_INPUT.bind(_this2, el), onChange: _this2.EVENT_CHANGE_INPUT.bind(_this2, el), readOnly: el.edit.indexOf("+r") >= 0 });
                        } else {
                            return _react2.default.createElement("input", { name: el.id, id: el.id, className: el.edit.indexOf("+m") >= 0 && !el.val ? " required" : "", "data-pid": el.pid, value: el.val || "", placeholder: el.edit.indexOf("+m") >= 0 ? "" : "", type: "text", onBlur: _this2.EVENT_BLUR_INPUT.bind(_this2, el), onChange: _this2.EVENT_CHANGE_INPUT.bind(_this2, el), readOnly: el.edit.indexOf("+r") >= 0 });
                        }
                    }
                }
            };

            return da.map(function (el, ind) {

                if (el.exec) {
                    var reg = /\{.*?\}/ig;
                    var arr = el.exec.match(reg);

                    if (arr) {
                        var child = {};
                        arr.forEach(function (ee, ii) {
                            var gid = ee.replace(/[{}]/ig, "");
                            for (var eee = 0; eee < da.length; eee++) {

                                if (da[eee]["id"] == gid) {
                                    da[eee]["parent"] = da[eee]["parent"] || {};
                                    da[eee]["parent"][el.id] = el.id;
                                    child[gid] = child[gid] || {};
                                    child[gid] = da[eee];
                                    break;
                                }
                            }
                        });
                        el["child"] = child;
                    }
                }
                var classNames = el["colspan"] ? "col-sm-" + el["colspan"] + " col-md-" + el["colspan"] + " col-lg-" + el["colspan"] : "col-sm-4 col-md-4 col-lg-4";

                return _react2.default.createElement(
                    "li",
                    { key: ind, className: classNames },
                    _react2.default.createElement(
                        "label",
                        { className: el.edit.indexOf("+m") >= 0 && !el.val ? "require" : "" },
                        el.label
                    ),
                    el.type == "date" ? _react2.default.createElement(
                        "i",
                        { className: "date" },
                        _react2.default.createElement(
                            "b",
                            null,
                            el["test"] && (el["test"]["val"] || "")
                        )
                    ) : _react2.default.createElement(
                        "i",
                        null,
                        el.unit,
                        _react2.default.createElement(
                            "b",
                            null,
                            el["test"] && (el["test"]["val"] || "")
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "dynamicTableDIV" },
                        typeBox(el)
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            var th = this,
                _d = this.props.DynamicData;
            return _react2.default.createElement(
                "article",
                { className: "tools-dynamicTable" },
                _react2.default.createElement(
                    "ul",
                    { className: "row" },
                    th.setList(_d)
                )
            );
        }
    }]);

    return DynamicTable;
}(_react2.default.Component);

exports.default = DynamicTable;

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1539);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(643)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./tools-dynamicTable.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./tools-dynamicTable.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*\ntools-dynamicTable.less\n*/\n.tools-dynamicTable {\n  margin-top: 10px;\n}\n.tools-dynamicTable ul li {\n  height: 40px;\n  overflow: hidden;\n}\n.tools-dynamicTable ul li label {\n  font-size: 12px;\n  color: #333;\n  font-weight: normal;\n  width: 110px;\n  text-align: right;\n  padding-top: 5px;\n  float: left;\n}\n.tools-dynamicTable ul li .dynamicTableDIV {\n  display: block;\n  margin: 0 65px 0 115px;\n}\n.tools-dynamicTable ul li .dynamicTableDIV input {\n  width: 100%;\n  padding: 3px;\n  border: #ddd solid 1px;\n}\n.tools-dynamicTable ul li .dynamicTableDIV input[readonly] {\n  background: #fbfbfb;\n}\n.tools-dynamicTable ul li .dynamicTableDIV input.required {\n  background: #fff3f3;\n}\n.tools-dynamicTable ul li .dynamicTableDIV select {\n  width: 100%;\n  height: 25px;\n  border: #ddd solid 1px;\n}\n.tools-dynamicTable ul li .dynamicTableDIV select.required {\n  background: #fff3f3;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .selects {\n  width: 100%;\n  height: 25px;\n  overflow: hidden;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .selects .ant-select-selection--multiple {\n  min-height: 25px;\n  border-radius: 0;\n  padding-bottom: 0;\n  height: 25px;\n  overflow: hidden;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .ant-select-search__field {\n  border: none;\n  padding: 0;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .ant-select-selection__choice {\n  margin-top: 2px;\n  padding: 0 15px 0 0;\n  float: none;\n  display: inline-block;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .ant-select-selection__choice__remove {\n  right: 0;\n}\n.tools-dynamicTable ul li i {\n  font-style: normal;\n  width: 60px;\n  float: right;\n  padding-top: 3px;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.tools-dynamicTable ul li i b {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.7);\n  color: #c00;\n  font-weight: normal;\n  font-size: 12px;\n}\n.tools-dynamicTable ul li i.date {\n  display: inline-block;\n  height: 30px;\n  background: url(" + __webpack_require__(1540) + ") no-repeat 3px 50%;\n}\n.BIND_LAND_BTN {\n  padding: 10px;\n}\n.BIND_LAND_BTN li {\n  display: inline-block;\n  padding: 5px 10px;\n  border: #ddd solid 1px;\n  cursor: pointer;\n  margin: 10px;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.BIND_LAND_BTN li.active {\n  background: #e4e4e4;\n}\n.BIND_LAND_BTN li .icon-delete {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  display: none;\n}\n.BIND_LAND_BTN li:hover .icon-delete {\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 1540:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*审批信息*/

/**
 * 首页导航条
 * index  identity  supply  所需
 */


//兼容ie

var ProcessApprovalTab = function (_React$Component) {
    _inherits(ProcessApprovalTab, _React$Component);

    function ProcessApprovalTab(arg) {
        _classCallCheck(this, ProcessApprovalTab);

        var _this = _possibleConstructorReturn(this, (ProcessApprovalTab.__proto__ || Object.getPrototypeOf(ProcessApprovalTab)).call(this, arg));

        _this.state = {
            TapList: [],
            allSearchArg: _this.props.allSearchArg /*地址栏的参数*/
        };

        return _this;
    }

    _createClass(ProcessApprovalTab, [{
        key: "getQueryTab",
        value: function getQueryTab() {
            //页面显示连接设置
            var th = this;
            var url = th.props.allSearchArg["current"];
            var list = [{ id: "" + url, url: "/" + url }, //审批
            { id: "newProjectApproval", url: "/newProjectApproval" }, //项目
            { id: "newProjectStage", url: "/newProjectStage" //分期
            }],
                id = th.state.allSearchArg['e'];
            switch (id) {
                case iss.getEVal("newProjectStatus"):
                    this.setState({ // 项目审批
                        TapList: [list[0], list[1]]
                    });break;
                case iss.getEVal("intallmentStatus"):
                    this.setState({ // 分期审批
                        TapList: [list[0], list[2]]
                    });break;
            }
        }
    }, {
        key: "setTapList",
        value: function setTapList() {
            var _this2 = this;

            //设置导航条

            return this.state.TapList.map(function (el, id) {
                var str = "";
                switch (el.id) {
                    case "ProcessApproval":
                    case "ProcessApprover":
                        str = "流程审批";break;
                    case "newProjectApproval":
                        str = "项目信息";break;
                    case "newProjectStage":
                        str = "分期信息";break;
                }
                return _react2.default.createElement(
                    "li",
                    { className: _this2.props.current == el.id ? "active" : "", key: id, onClick: _this2.EVENT_CLICK_LINK.bind(_this2, el.url, el.id) },
                    str
                );
            });
        }
    }, {
        key: "EVENT_CLICK_LINK",
        value: function EVENT_CLICK_LINK(url, id, ev) {
            var th = this;
            var allSearchArg = th.state.allSearchArg;
            var keyArr = [];
            for (var key in allSearchArg) {
                keyArr.push(key + "=" + allSearchArg[key]);
            }
            iss.hashHistory.push({
                pathname: url,
                search: "?" + keyArr.join("&")
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getQueryTab();
        }
    }, {
        key: "render",
        value: function render() {
            var th = this;
            return _react2.default.createElement(
                "section",
                null,
                _react2.default.createElement(
                    "header",
                    { className: "JH-HeadTab" },
                    _react2.default.createElement(
                        "ul",
                        { className: "JH-HeadList" },
                        this.setTapList()
                    )
                )
            );
        }
    }]);

    return ProcessApprovalTab;
}(_react2.default.Component);

exports.default = ProcessApprovalTab;

/***/ }),

/***/ 1560:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1561);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(643)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./intallment.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./intallment.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*identity.less*/\n.clear {\n  clear: both;\n}\n.boxGroupTit {\n  height: 40px;\n  margin-bottom: 5px ;\n  position: relative;\n  margin-top: 0;\n}\n.boxGroupTit p {\n  height: 40px;\n  line-height: 40px;\n  color: #333333;\n  font-size: 14px;\n  border-bottom: 1px solid #c9c9c9;\n}\n.boxGroupTit p span {\n  display: inline-block;\n  line-height: 40px;\n  border-bottom: 2px solid #31395d;\n}\n.boxGroupTit p i {\n  font-style: normal;\n}\n.boxGroupTit span.functionButton {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n  text-align: right;\n}\n.boxGroupTit span.functionButton a {\n  font-size: 12px;\n  height: 40px;\n  line-height: 40px;\n  display: inline-block;\n  padding-left: 20px;\n  padding-right: 20px;\n  color: #999999 !important;\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.boxGroupTit span.functionButton a:hover {\n  color: #31395d;\n}\n.boxGroupTit span.functionButton .refresh-icon {\n  background-image: url(" + __webpack_require__(1562) + ");\n}\n.boxGroupTit span.functionButton .refresh-icon:hover {\n  background-image: url(" + __webpack_require__(1563) + ");\n}\n.boxGroupTit span.functionButton .saveIcon {\n  background-image: url(" + __webpack_require__(1530) + ");\n}\n.boxGroupTit span.functionButton .saveIcon:hover {\n  background-image: url(" + __webpack_require__(1531) + ");\n}\n.boxGroupTit span.functionButton .approvalIcon {\n  background-image: url(" + __webpack_require__(1532) + ");\n}\n.boxGroupTit span.functionButton .approvalIcon:hover {\n  background-image: url(" + __webpack_require__(1533) + ");\n}\n.staging-left,\n.staging-right {\n  float: left;\n}\n.projectinFormation {\n  width: 66.6%;\n  height: auto;\n  margin-top: 10px;\n  padding-right: 20px;\n}\n.fieldLocation {\n  margin-top: 10px;\n  width: 33.3%;\n  height: 295px;\n  border: 1px solid #dddddd;\n}\n.carouselStyle .left,\n.carouselStyle .right {\n  background: none;\n}\n.carouselStyle .carousel-control {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  top: 50%;\n  margin-top: -15px;\n  background: #F1A118;\n}\n.carouselStyle .carousel-control:hover {\n  opacity: 0.8;\n}\n/*地图位置标记*/\n.geogrMarker_body {\n  position: relative;\n  overflow: hidden;\n}\n.geogrMarker_body .geogrMarker {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 999997;\n}\n", ""]);

// exports


/***/ }),

/***/ 1562:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABO0lEQVQ4T6VSsXHDMAwkWLBOJohG8AbRBrE3sBrxWNnZQNlAHUk1zgbWBlEmiD1Bkg3USgWQg45y7Fgn5s4sCeDx/3gQNz6Ymt/tdnd932+IaA0ASehpiagmohdjzNc4dwVQVdWCiN6I6J2ISmNMw838j4gMuEHEzBjzyv8XANbaREr5gYjPY8NfhmEBg6611vUFgPeeC43WupizxlqbSilrpVRyAgjbP5VS91mWtTFvnXMHlngOwKiF1jqNDXPdez+whKDpiYh4MAEANufI+uaAAkA6MAjaH8PAt1JqEZPhnCsBoB0A+O5d1zV8cwBI8zw/xGSwBwBQnDwIUpIY9cB4K4TYaq1/rxDbONa990smjYgrDtlklKfCg4gPQoglAKzGEF0lcYpF2LgnoiMAcHjKc4P/xWBO3s0AP2hInl/EMUEDAAAAAElFTkSuQmCC"

/***/ }),

/***/ 1563:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA7ElEQVQ4T6WTgQ0BQRBFnw6ogBJ0QAfogArQAR3ogA7oABWgAnRwJcjb7CbncmcvMcnmkt2ZN//P7nX4MzoN9V1gCcyBQcwpgBOwBV6prg4wBM7AFdgBl5jsvkDBC+DgfhVgtxuwTgk1CgUJFXaqAjxwbTKjGUc7gzLA7k+gB+g3F3ctlgFS7ey3TQSVAvQ0iYWqcDiPKPEXKDRLCvQ9itnvCM3Z8IaKBPDehahAC/rLhTmb8gy0IsDHkosV4Pq6hVxROp8Ce2Cm6qanXIWprg9YbGF4RHUvsU6FRcfSzYTh/foX2loJeW0tNEI/qngqkZ/g9CsAAAAASUVORK5CYII="

/***/ }),

/***/ 1575:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1576);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(643)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./view.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./view.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*stageView.less*/\n.stageVWrap {\n  height: auto;\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n.stageVWrap .stageVLeft {\n  float: left;\n  width: 66.6%;\n  margin-top: 10px;\n  padding-right: 20px;\n}\n.stageVWrap .stageVLeft .stageVTable {\n  width: 100%;\n  font-size: 12px;\n  text-align: center;\n}\n.stageVWrap .stageVLeft .stageVTable td {\n  border: 1px solid #ddd;\n  padding: 6px;\n}\n.stageVWrap .stageVLeft .stageVTable .stageViewTitle {\n  color: #064a8b;\n}\n.stageVWrap .stageVLeft .stageVTable .stageViewCon {\n  color: #333;\n}\n.stageVWrap .stageVRight {\n  float: right;\n  margin-top: 10px;\n  width: 33.3%;\n  height: 295px;\n  border: 1px solid #dddddd;\n}\n", ""]);

// exports


/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

__webpack_require__(58);

__webpack_require__(1575);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//兼容ie

__webpack_require__(1560);

var NewProjectCountView = function (_React$Component) {
    _inherits(NewProjectCountView, _React$Component);

    function NewProjectCountView(arg) {
        _classCallCheck(this, NewProjectCountView);

        var _this = _possibleConstructorReturn(this, (NewProjectCountView.__proto__ || Object.getPrototypeOf(NewProjectCountView)).call(this, arg));

        _this.state = {
            "CompanyAreaName": "",
            "CompanyCityName": "", //选城市
            "PROJECTNAME": "", //项目名称
            "CASENAME": "",
            "PROJECTADDRESS": "",
            "TRADERMODE": "",
            "TRADERMODEALL": "",
            "PROJECTTYPE": "",
            "EQUITYRATIO": "",
            "PROJECTCODE": "", //案号
            "PRINCIPALNAME": "",
            "PRINCIPAL": "",
            "ID": "",
            "CITY": "",
            "mapUrl": iss.mapEUrl,
            "iframeURL1": "", /*地理位置*/
            "iframeURL2": "", /*项目总图*/
            "checkName": false //项目名称冲突
            // "cityCompany":iss.id.text,
        };
        return _this;
    }

    _createClass(NewProjectCountView, [{
        key: "getAjax",
        value: function getAjax(callback) {
            var th = this;
            iss.ajax({ //获取数据
                type: "post",
                url: "/Project/IProjectInfo",
                data: {
                    projectId: th.props.all.query["dataKey"] //iss.id.id,
                },
                success: function success(res) {
                    th.setState({
                        "PROJECTNAME": res.rows.BaseFormInfo.Project.PROJECTNAME,
                        "CASENAME": res.rows.BaseFormInfo.Project.CASENAME,
                        "EQUITYRATIO": res.rows.BaseFormInfo.Project.EQUITYRATIO,
                        "PROJECTCODE": res.rows.BaseFormInfo.Project.PROJECTCODE,
                        "PRINCIPALNAME": res.rows.BaseFormInfo.PRINCIPALNAME,
                        "PRINCIPAL": res.rows.BaseFormInfo.Project.PRINCIPAL,
                        "PROJECTADDRESS": res.rows.BaseFormInfo.Project.PROJECTADDRESS,
                        //"PROJECTTYPE":res.rows.BaseFormInfo.Project.PROJECTTYPE,
                        // "TRADERMODE": res.rows.BaseFormInfo.Project.TRADERMODE,
                        "ObtainStatusName": res.rows.BaseFormInfo.ObtainStatusName,
                        "CompanyAreaName": res.rows.BaseFormInfo.CompanyAreaName,
                        "CompanyCityName": res.rows.BaseFormInfo.CompanyCityName,
                        "ID": res.rows.BaseFormInfo.Project.ID,
                        "PARENTID": res.rows.BaseFormInfo.Project.PARENTID,
                        "CITY": res.rows.BaseFormInfo.Project.CITY,

                        "TRADERMODE": res.rows.SelectOptions.TRADERMODE[res.rows.BaseFormInfo.Project.TRADERMODE].label //操盘方式                    
                    }, function (arg) {
                        if (callback) {
                            callback();
                        }
                    });
                }
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var th = this;
            $(function () {
                th.getAjax(function (arg) {
                    th.BIND_ONLOAD();
                });
            });
        }
    }, {
        key: "BIND_ONLOAD",
        value: function BIND_ONLOAD() {
            var th = this;
            iss.ajax({ //获取数据
                type: "post",
                url: "/Common/IsHaveXMView",
                data: {
                    typeinfo: "1",
                    strId: th.state.ID
                },
                success: function success(res) {
                    var src_one = iss.mapEUrl + "/map/mapmark?project_id=" + th.state.ID;
                    var src_two = "";
                    if (res["rows"] == 0) {
                        src_two = "../../Content/img/xmViewError.png";
                    } else {
                        src_two = iss.mapEUrl + "/Map/Project?project_id=" + th.state.ID + "&project_map_id=project" + th.state.ID;
                        iss.evCarouselActive(th, src_two);
                    }
                    th.setState({
                        iframeURL1: src_one,
                        iframeURL2: src_two
                    });
                }
            });
        }
    }, {
        key: "xmViewError",
        value: function xmViewError(event) {
            //this.attr("src","../img/xmViewError.png")
            $(event.target).attr("src", "../../Content/img/xmViewError.png");
        } //加载暂无

    }, {
        key: "BIND_maps",
        value: function BIND_maps() {
            window.open(iss.mapEUrl + "/Map/Project?project_id=" + this.state.ID + "&project_map_id=project" + this.state.ID);
        } //点击预览项目总图

    }, {
        key: "BIND_mapmark",
        value: function BIND_mapmark() {
            window.open(iss.mapEUrl + "/map/mapmark?project_id=" + this.state.ID + "&cityname=" + this.state.CITY);
        } //点击预览地理位置

    }, {
        key: "render",
        value: function render() {
            var th = this.state;
            return _react2.default.createElement(
                "div",
                { id: "stageInforView" },
                _react2.default.createElement(
                    "h3",
                    { className: "boxGroupTit" },
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "span",
                            null,
                            "\u9879\u76EE\u4FE1\u606F"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "stageVWrap" },
                    _react2.default.createElement(
                        "div",
                        { className: "stageVRight" },
                        _react2.default.createElement(
                            "div",
                            { id: "myCarousel", className: "carousel slide carouselStyle" },
                            _react2.default.createElement(
                                "div",
                                { className: "carousel-inner" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "item active" },
                                    _react2.default.createElement("img", { className: "fullScreenIcon", src: "../../Content/img/fullScreen.png", onClick: this.BIND_mapmark.bind(this), title: "\u5168\u5C4F" }),
                                    _react2.default.createElement("iframe", { ref: "iframe1", id: "iframe1", src: this.state.iframeURL1, onError: this.xmViewError.bind(this), frameBorder: "0", marginHeight: "0", marginWidth: "0", scrolling: "no", width: "100%", height: "291" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "item" },
                                    _react2.default.createElement("img", { className: "fullScreenIcon", src: "../../Content/img/fullScreen.png", onClick: this.BIND_maps.bind(this), title: "\u5168\u5C4F" }),
                                    _react2.default.createElement("iframe", { ref: "iframe2", id: "iframe2", src: this.state.iframeURL2, onError: this.xmViewError.bind(this), frameBorder: "0", marginHeight: "0", marginWidth: "0", scrolling: "no", width: "100%", height: "291" })
                                )
                            ),
                            _react2.default.createElement(
                                "a",
                                { className: "carousel-control left", href: "#myCarousel",
                                    "data-slide": "prev" },
                                "\u2039"
                            ),
                            _react2.default.createElement(
                                "a",
                                { className: "carousel-control right", href: "#myCarousel",
                                    "data-slide": "next" },
                                "\u203A"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "stageVLeft" },
                        _react2.default.createElement(
                            "table",
                            { className: "stageVTable" },
                            _react2.default.createElement(
                                "tbody",
                                null,
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u6240\u5C5E\u533A\u57DF"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon", id: "CompanyAreaName" },
                                        th.CompanyAreaName
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u57CE\u5E02\u516C\u53F8"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.CompanyCityName
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u6240\u5728\u57CE\u5E02"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.CITY
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u83B7\u53D6\u72B6\u6001"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.ObtainStatusName
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u540D\u79F0"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.PROJECTNAME
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u6848\u540D"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.CASENAME
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u6743\u76CA\u6BD4\u4F8B"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.EQUITYRATIO
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u7F16\u53F7"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.PROJECTCODE
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u64CD\u76D8\u65B9\u5F0F"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.TRADERMODE
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u8D1F\u8D23\u4EBA"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.PRINCIPALNAME
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u5730\u5740"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon", colSpan: "3" },
                                        th.PROJECTADDRESS
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NewProjectCountView;
}(_react2.default.Component);

exports.default = NewProjectCountView;

/***/ })

});