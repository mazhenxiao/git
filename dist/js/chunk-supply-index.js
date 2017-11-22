webpackJsonp([2],{

/***/ 1512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(58);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _services = __webpack_require__(1541);

var _utils = __webpack_require__(1526);

var _table = __webpack_require__(1627);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //兼容ie


//表格
//import EsayuiTable from "./EsayuiTable";//esayui表格
__webpack_require__(645);
__webpack_require__(1551);
__webpack_require__(1623);
var TabPane = _antd.Tabs.TabPane;
var Option = _antd.Select.Option;

var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false,
            dataSource: [], //表格数据
            columns: [], //表头数据
            versionData: [{ text: "2017", id: "0" }, { text: "2018", id: "1" }, { text: "2019", id: "2" }], //版本数据
            versionDefault: "", //默认版本value值
            currentYear: new Date().getFullYear() //设置显示年
        }, _this.EVENT_CLICK_Edit = function (arg) {}, _this.GET_TitleEditBtn = function (arg) {

            var Options = function Options(arg) {
                return _this.state.versionData.map(function (arg) {
                    return _react2.default.createElement(
                        Option,
                        { key: arg.id, value: arg.id },
                        arg.text
                    );
                });
            };
            return _react2.default.createElement(
                "div",
                { className: "RT mgB10" },
                _react2.default.createElement(
                    "button",
                    { className: "jh_btn jh_btn22 jh_btn_repertory" },
                    "\u5E93\u5B58"
                ),
                _react2.default.createElement(
                    "button",
                    { className: "jh_btn jh_btn22 jh_btn_edit", onClick: _this.EVENT_CLICK_Edit },
                    "\u7F16\u8F91\u4F9B\u8D27"
                ),
                _react2.default.createElement(
                    "label",
                    null,
                    "\u7248\u672C\uFF1A",
                    _react2.default.createElement(
                        _antd.Select,
                        { defaultValue: _this.state.versionData.length ? _this.state.versionData[0]["id"] : "", className: "ipt120" },
                        Options()
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps, nextState) {}
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps.planData, nextState.planData);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
        /**
         * 编辑供货
         */

        /**
         * 表格库存编辑版本设置
         */

    }, {
        key: "render",
        value: function render() {
            var operations = _react2.default.createElement(
                "button",
                null,
                "fdsafa"
            );
            return _react2.default.createElement(
                _antd.Spin,
                { size: "large", spinning: this.state.loading },
                _react2.default.createElement(
                    "article",
                    null,
                    _react2.default.createElement(
                        _antd.Tabs,
                        { defaultActiveKey: "1" },
                        _react2.default.createElement(
                            TabPane,
                            { tab: "\u4F9B\u8D27", key: "1", tabBarExtraContent: this.GET_Compent },
                            _react2.default.createElement(
                                "header",
                                null,
                                _react2.default.createElement(
                                    _antd.Row,
                                    null,
                                    _react2.default.createElement(
                                        _antd.Col,
                                        { span: 12 },
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "\u8BA1\u5212\u7248\uFF08\u9762\u79EF\uFF1A\u5E73\u65B9\u7C73\uFF0C\u8D27\u503C\uFF1A\u4E07\u5143\uFF09"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Col,
                                        { span: 12 },
                                        this.GET_TitleEditBtn()
                                    )
                                )
                            ),
                            _react2.default.createElement(_table2.default, { dataSource: this.state.dataSource, columns: this.state.columns, year: this.state.currentYear })
                        )
                    )
                )
            );
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shallowCompare = __webpack_require__(1536);

Object.defineProperty(exports, "shallowCompare", {
  enumerable: true,
  get: function get() {
    return _shallowCompare.shallowCompare;
  }
});

var _knife = __webpack_require__(1537);

Object.defineProperty(exports, "knife", {
  enumerable: true,
  get: function get() {
    return _knife.knife;
  }
});

/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AreaConstants = undefined;

var _area = __webpack_require__(1545);

var AreaConstants = _interopRequireWildcard(_area);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.AreaConstants = AreaConstants;

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

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by ZhangRuiTao on 2017/4/26.
 */

/**
 * 自定义浅比较
 */
var shallowCompare = function shallowCompare(instance, nextProps, nextState) {
	return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
};

var shallowEqual = function shallowEqual(objA, objB) {
	if (is(objA, objB)) {
		return true;
	}

	if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
		return false;
	}

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	// Test for A's keys different from B.
	for (var i = 0; i < keysA.length; i++) {
		if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
			return false;
		}
	}

	return true;
};

var is = function is(x, y) {
	/**
     * 类型为函数时 比较函数的字符串
     */
	if (typeof x === "function" && typeof y === "function") {
		return x.toString() === y.toString();
	}

	if (x === y) {
		return x !== 0 || y !== 0 || 1 / x === 1 / y;
	} else {
		return x !== x && y !== y;
	}
};

exports.shallowCompare = shallowCompare;

/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.knife = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 数据校验
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
//兼容ie


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

__webpack_require__(58);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//公共类
__webpack_require__(645);

var $knife = function () {
    function $knife() {
        var _this = this;

        _classCallCheck(this, $knife);

        this.checked = true;

        this.messageBox = function (arg) {
            _antd.Modal.error({
                title: '提示',
                content: _react2.default.createElement(
                    'article',
                    null,
                    arg
                ),
                okText: "确定"
            });
        };

        this.count = function (arg) {};

        this.recursion = function (arg, num) {
            var ii = num;
            for (var i = 0; i < arg.length; i++) {
                if (arg[i]["children"] && arg[i]["children"].length) {
                    ii = _this.recursion(arg[i]["children"], ii);
                } else {
                    ii += parseInt(arg[i].width);
                }
            }
            return ii;
        };
    }

    _createClass($knife, [{
        key: 'valid',
        //默认校验数据为真
        /**
        *  数据校验 
        * knife.valid([接口定义好的Filed内容])  
        * 参数                返回值
        * 接口Filed内容        true/false
        */
        value: function valid(arg) {
            var _this2 = this;

            this.checked = true;
            var arr = Array.isArray(arg);
            var msg = [];
            if (arr) {
                arg.forEach(function (el, ind) {
                    var str = "",
                        reg = el.regExp && eval("(" + el.regExp + ")");
                    if (el["edit"].indexOf("+m") >= 0 && (!el["val"] || el["val"].length <= 0)) {
                        str += "内容不能为空-";
                        _this2.checked = false;
                        msg.push(_react2.default.createElement(
                            'p',
                            { key: ind },
                            _react2.default.createElement(
                                'b',
                                null,
                                el.label,
                                '\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                str
                            )
                        ));
                    } else if (reg) {
                        //范围限制带添加
                        var max = parseFloat(reg["max"]);
                        var min = parseFloat(reg["min"]);
                        var val = reg["type"].indexOf("string") >= 0 ? (el.val || "").length : parseFloat(el.val || 0);

                        if (!Number.isNaN(max) && val > max) {
                            _this2.checked = false;
                            str += '\u503C\u4E0D\u5E94\u5927\u4E8E' + max + (el.unit || "") + '-';
                            msg.push(_react2.default.createElement(
                                'p',
                                { key: ind },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    el.label,
                                    '\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    str
                                )
                            ));
                        } else if (!Number.isNaN(min) && val < min) {
                            _this2.checked = false;
                            str += '\u503C\u4E0D\u5E94\u5C0F\u4E8E' + min + (el.unit || "");
                            msg.push(_react2.default.createElement(
                                'p',
                                { key: ind },
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    el.label,
                                    '\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    str
                                )
                            ));
                        }
                    }
                });
            } else {
                console.log("validate", "校验数据不合法");
            }
            if (!this.checked) {
                this.messageBox(msg);
            }
            return this.checked;
        }
        /**
         * 弹出提示
         */

        /**
         * 统计公式计算
         * knife.count()
         * 参数                   返回值
         */

        /**
         * 递归计算用于处理包含children递归
         */

    }, {
        key: 'SET_CountExec',

        /**
         * 
         * @param {Array} list  全部数据    
         * @param {Object} d    当前数据
         * 第一种计算
         *  let newList = knife.SET_CountExec(list); //通用计算传入json 修改json后返回json
            th.setState({
               "DynamicData": newList
            });
            //第二种计算
            knife.SET_CountExec({a:1,b:2,c:0},"{a}+{b}");//返回当前计算结果
         */
        value: function SET_CountExec(list, d) {
            //地块计算
            var da = {};
            if (Array.isArray(list)) {
                // 既定json
                var data = list.forEach(function (el, ind) {
                    //   debugger
                    var numreg = /number\((\d+)\)/.exec(el.regExp || "");
                    var fixed = numreg ? numreg[1] : "";
                    if (el.exec) {
                        var exec = el.exec;
                        var reg = /{.*?}/ig;
                        var arr = exec.match(reg) || [];
                        arr.forEach(function (ee, ii) {
                            var regs = new RegExp('' + ee, "ig");
                            list.forEach(function (ref) {
                                var _id = ee.replace(/[{}]/ig, "");
                                if (ref["id"] == _id) {
                                    exec = exec.replace(regs, parseFloat(ref.val || 0));
                                }
                            });
                        });
                        if (arr && arr.length) {
                            var _exec = eval(exec) || 0;
                            el["val"] = Number.isFinite(_exec) ? _exec : 0;
                        }
                    }
                });
                return list;
            } else if (typeof d == "string") {
                //第二种计算
                var exec = d;
                var reg = /{.*?}/ig;
                var arr = exec.match(reg) || [];
                arr.forEach(function (ee, ind) {
                    var _id = ee.replace(/[{}]/ig, "");
                    var regs = new RegExp('\\{' + _id + '\\}', "ig");
                    for (var me in list) {
                        if (me == _id) {
                            exec = exec.replace(regs, parseFloat(list[me] || 0));
                        }
                    }
                });
                var _exec = eval(exec) || 0;
                return _exec;
            }
        }
        /**
         * 数据有效性检测
         * @param {*} da   当前数据
         * {"pid":"","id":"","label":"","text":"","val":"","type":"input","unit":"万元","edit":"+w","exec":null,"regExp":"{\r\n  \"type\": \"number(2)\",\r\n  \"max\": \"1000\",\r\n  \"min\": \"0\"\r\n}","colspan":0,"data":null,"valuetype":"number","valueId":null,"test":null}
         * @param {*} val  input输入值
         */

    }, {
        key: 'CHECK_InputValue',
        value: function CHECK_InputValue(da, val) {
            //检测数据
            var reg = eval('(' + da.regExp + ')');
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
    }]);

    return $knife;
}();

var knife = new $knife();

exports.knife = knife;

/***/ }),

/***/ 1541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrimaryKey = exports.Supply = exports.Payment = exports.AreaService = undefined;

var _areaService = __webpack_require__(1547);

var AreaService = _interopRequireWildcard(_areaService);

var _paymentService = __webpack_require__(1548);

var Payment = _interopRequireWildcard(_paymentService);

var _supplyService = __webpack_require__(1549);

var Supply = _interopRequireWildcard(_supplyService);

var _primaryKeyService = __webpack_require__(1550);

var PrimaryKey = _interopRequireWildcard(_primaryKeyService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.AreaService = AreaService;
exports.Payment = Payment;
exports.Supply = Supply;
exports.PrimaryKey = PrimaryKey;

/***/ }),

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 阶段
 */
var AreaManageStep = [{ "guid": "1", "name": "投决会", "code": "Vote", "className": "legend-blue" }, { "guid": "2", "name": "产品定位会", "code": "ProductPosition", "className": "legend-green" }, { "guid": "3", "name": "项目定位会", "code": "ProjectPosition", "className": "legend-white" }, { "guid": "4", "name": "启动会", "code": "Startup", "className": "legend-green" }, { "guid": "5", "name": "工规证", "code": "Rules", "className": "legend-blue" }, { "guid": "6", "name": "决策书", "code": "Decision", "className": "legend-red" }, { "guid": "7", "name": "预售证", "code": "PreSale", "className": "legend-white" }, { "guid": "8", "name": "签约", "code": "Sign", "className": "legend-white" }, { "guid": "9", "name": "交付", "code": "Deliver", "className": "legend-white" }];

/**
 * 阶段简介
 */
var Legend = [{ "guid": "l1", "text": "未编制", "class": "legend-white" }, { "guid": "l2", "text": "编制中", "class": "legend-blue" }, { "guid": "l3", "text": "审批通过", "class": "legend-green" }, { "guid": "l4", "text": "审批驳回", "class": "legend-red" }];

/**
 * 产权属性
 */
var RightsProperty = [{ id: "1", name: "仅包含有产权" }, { id: "2", name: "仅包含无产权" }, { id: "3", name: "包含有产权及无产权" }];

/**
 * 精装属性
 */
var HardcoverProperty = [{ id: "1", name: "全部精装" }, { id: "2", name: "全部毛坯" }, { id: "3", name: "部分精装部分毛坯" }];

/**
 * 层高属性
 */
var LayerProperty = [{ id: "1", name: "平层" }, { id: "2", name: "跃层" }, { id: "3", name: "LOFT" }];

exports.AreaManageStep = AreaManageStep;
exports.Legend = Legend;
exports.RightsProperty = RightsProperty;
exports.HardcoverProperty = HardcoverProperty;
exports.LayerProperty = LayerProperty;

/***/ }),

/***/ 1547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.adjustFormatData = exports.saveFormatData = exports.createFormatData = exports.getSearchData = exports.getCreateCondition = exports.getVersion = exports.createVersion = exports.getAreaPlanQuota = exports.getAreaEditData = exports.getAreaList = exports.getStep = undefined;

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _constants = __webpack_require__(1529);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AreaManageStep = _constants.AreaConstants.AreaManageStep;

//const website = "http://192.168.10.164:8066";
//const website = "http://192.168.14.119:65162";

var website = "";

/**
 * 获取步骤
 */
var getStep = function getStep(dataKey, mode) {
    return _iss2.default.fetch({
        url: website.concat("/Common/IGetStept"),
        type: "get",
        data: {
            ProjectStageId: dataKey,
            projectOrStage: mode,
            dataType: "Area"
        }
    }).then(function (data) {
        return data.rows;
    }).then(function (serverSteps) {
        var stepData = [];
        AreaManageStep.forEach(function (localStep) {
            var matchStep = serverSteps.filter(function (serverStep) {
                return serverStep.code === localStep.code;
            })[0];
            if (matchStep) {
                localStep.name = matchStep.name;
                stepData.push(localStep);
            }
        });
        return stepData;
    });
};

/**
 *  获取面积列表信息
 *  参数信息
 *  step:阶段                 1~9 阶段，参考常量 AreaManageStep
 *  projectLevel:Project     Project 项目  Stage 分期
 *  descType:Building        Building 楼栋，ProductType 业态
 *  versionId:1c52cb5b-674b-4a8c-8a49-bec93681e690  版本
 */
var getAreaList = function getAreaList(step, mode, versionId) {
    var descType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Building";

    // //TODO 测试数据
    // versionId = "1c52cb5b-674b-4a8c-8a49-bec93681e690";
    // step = {code: "Vote"};
    // mode = "Project";
    // descType = "Building";

    return _iss2.default.fetch({
        url: website.concat("/AreaInfo/IGetAreaListInfo"),
        type: "get",
        data: {
            step: step.code,
            projectLevel: mode,
            versionId: versionId,
            descType: descType
        }
    }).then(function (res) {
        return res.rows;
    });
};

/**
 * 获取面积编辑页面的数据
 * @param step
 * @param mode
 * @param versionId
 * @param productTypeId  点击的业态id
 */
var getAreaEditData = function getAreaEditData(step, mode, versionId, productTypeId) {
    return _iss2.default.fetch({
        url: website.concat("/AreaInfo/IGetAreaEditData"),
        type: "get",
        data: {
            step: step.code,
            projectLevel: mode,
            versionId: versionId,
            productTypeId: productTypeId
        }
    }).then(function (res) {
        return res.rows;
    });
};

/**
 * 获取面积的规划方案指标
 */
var getAreaPlanQuota = function getAreaPlanQuota(step, versionId) {
    var dataType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Area";

    return _iss2.default.fetch({
        url: website.concat("/AreaInfo/IGetAreaPlanInfo"),
        type: "get",
        data: {
            step: step.code,
            versionId: versionId,
            dataType: dataType
        }
    }).then(function (res) {
        return res.rows;
    });
};

/**
 * 创建版本
 */
var createVersion = function createVersion(stepInfo, dataKey, mode) {
    return _iss2.default.fetch({
        url: website.concat("/AreaInfo/CreateAreaVersion"),
        type: "post",
        data: {
            step: stepInfo.code,
            psVersionId: dataKey,
            projectLevel: mode
        }
    }).then(function (res) {
        return res.rows;
    });
};

/**
 * 获取版本
 */
var getVersion = function getVersion(stepInfo, dataKey, mode) {
    // //TODO 测试数据
    // stepInfo = {code: "Vote"};
    // dataKey = "56EF7587243E4B9EB05029800BFC1F81";
    // mode = "Project";

    return _iss2.default.fetch({
        //  url: website.concat("/Common/IGetVersionListByBusinessId"),
        url: "/Common/IGetVersionListByBusinessId",
        type: "get",
        data: {
            ProjectStageId: dataKey,
            step: stepInfo.code,
            projectLevel: mode,
            dataType: "Area"
        }
    }).then(function (res) {
        return res.rows;
    }).then(function (rows) {
        return rows.map(function (item) {
            return {
                id: item["id"],
                name: item["versioncode"],
                statusName: item["statusname"]
            };
        });
    }).catch(function (error) {
        console.log(error);
    });
};

/**
 * 获取生成业态的条件
 */
var getCreateCondition = function getCreateCondition(stepInfo, dataKey, mode) {
    return _iss2.default.fetch({
        url: website.concat("/AreaInfo/IGetSerchInfo"),
        type: "get",
        data: {
            projectLevel: mode,
            ProjectStageId: dataKey,
            step: stepInfo.code
        }
    }).then(function (res) {
        return res.rows;
    }).then(function (_ref) {
        var serchList = _ref.serchList;

        var result = {
            land: [], //地块
            residence: [], //住宅
            commercial: [], //商办
            business: [], //商业
            parkAndSupport: [] //车位以及配套
        };

        var land = serchList.filter(function (item) {
            return item.typeCode === "land";
        })[0];
        var residence = serchList.filter(function (item) {
            return item.typeCode === "residence";
        })[0];
        var commercial = serchList.filter(function (item) {
            return item.typeCode === "commercial";
        })[0];
        var business = serchList.filter(function (item) {
            return item.typeCode === "business";
        })[0];
        var parkAndSupport = serchList.filter(function (item) {
            return item.typeCode === "parkandsupport";
        })[0];
        if (land && Array.isArray(land.typelist)) {
            result.land = land.typelist.map(function (item) {
                return {
                    id: item["val"],
                    name: item["lable"]
                };
            });
        }
        if (residence && Array.isArray(residence.typelist)) {
            result.residence = convertConditionData(residence.typelist);
        }
        if (commercial && Array.isArray(commercial.typelist)) {
            result.commercial = convertConditionData(commercial.typelist);
        }
        if (business && Array.isArray(business.typelist)) {
            result.business = convertConditionData(business.typelist);
        }
        if (parkAndSupport && Array.isArray(parkAndSupport.typelist)) {
            result.parkAndSupport = convertConditionData(parkAndSupport.typelist);
        }

        return result;
    });
};

/**
 *  转换条件数据
 */
var convertConditionData = function convertConditionData(originalData) {
    return originalData.map(function (item) {
        var obj = {
            id: item["val"],
            name: item["lable"],
            children: []
        };
        loadChildren(obj, item["children"]);
        return obj;
    });
};

/**
 * 加载子集
 */
var loadChildren = function loadChildren(obj, children) {
    children.forEach(function (child) {
        obj.children.push({
            id: child["val"],
            name: child["lable"]
        });
    });
};

/**
 * 获取地块业态数据 (获取业态维护页面的数据)
 */
var getSearchData = function getSearchData(stepInfo, mode, versionId) {
    return _iss2.default.fetch({
        url: website.concat("/areaInfo/IGetSearchData"),
        type: "get",
        data: {
            step: stepInfo.code,
            projectLevel: mode,
            versionId: versionId
        }
    }).then(function (res) {
        return res.rows;
    });
};
/**
 * 生成地块业态数据
 */
var createFormatData = function createFormatData(paramsValue) {
    return _iss2.default.fetch({
        url: website.concat("/areainfo/ICreateProductType"),
        type: "post",
        data: paramsValue
    }).then(function (res) {
        return res.rows;
    });
};

/**
 * 保存地块业态数据
 */
var saveFormatData = function saveFormatData(paramsValue) {
    return _iss2.default.fetch({
        url: website.concat("/areainfo/ISaveProductType"),
        type: "post",
        data: paramsValue
    }).then(function (res) {
        return res.rows;
    });
};

/**
 * 调整数据
 */
var adjustFormatData = function adjustFormatData(paramsValue) {
    return _iss2.default.fetch({
        url: website.concat("/AreaInfo/ISaveAreaEditData"),
        type: "post",
        data: paramsValue
    }).then(function (res) {
        return res.rows;
    });
};

exports.getStep = getStep;
exports.getAreaList = getAreaList;
exports.getAreaEditData = getAreaEditData;
exports.getAreaPlanQuota = getAreaPlanQuota;
exports.createVersion = createVersion;
exports.getVersion = getVersion;
exports.getCreateCondition = getCreateCondition;
exports.getSearchData = getSearchData;
exports.createFormatData = createFormatData;
exports.saveFormatData = saveFormatData;
exports.adjustFormatData = adjustFormatData;

/***/ }),

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main(arg) {};
exports.main = main;

/***/ }),

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main(arg) {};
exports.main = main;

/***/ }),

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main(arg) {};
exports.main = main;

/***/ }),

/***/ 1551:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1552);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./button.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./button.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*公共button*/\nbutton,\nlabel {\n  border: none;\n  outline: none;\n  font-weight: normal;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  color: #999;\n}\n.jhBtn-wrap .jh_btn:last-child {\n  padding-right: 0;\n}\n.jh_btn {\n  display: inline-block;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  background-color: transparent;\n}\n.jh_btn:hover {\n  color: #666;\n}\n.jh_btn40 {\n  height: 40px;\n  line-height: 40px;\n}\n.jh_btn33 {\n  height: 33px;\n  line-height: 33px;\n}\n.jh_btn28 {\n  height: 28px;\n  line-height: 28px;\n}\n.jh_btn22 {\n  height: 22px;\n  line-height: 22px;\n}\n/*发起审批*/\n.jh_btn_apro {\n  background-image: url(" + __webpack_require__(1532) + ");\n}\n.jh_btn_apro:hover {\n  background-image: url(" + __webpack_require__(1533) + ");\n}\n/*添加*/\n.jh_btn_edit {\n  background-image: url(" + __webpack_require__(1553) + ");\n}\n.jh_btn_edit:hover {\n  background-image: url(" + __webpack_require__(1554) + ");\n}\n/*库存*/\n.jh_btn_repertory {\n  background-image: url(" + __webpack_require__(1555) + ");\n}\n.jh_btn_repertory:hover {\n  background-image: url(" + __webpack_require__(1556) + ");\n}\n/*编辑*/\n.jh_btn_add {\n  background-image: url(" + __webpack_require__(1557) + ");\n}\n.jh_btn_add:hover {\n  background-image: url(" + __webpack_require__(1558) + ");\n}\n/*保存*/\n.jh_btn_save {\n  background-image: url(" + __webpack_require__(1530) + ");\n}\n.jh_btn_save:hover {\n  background-image: url(" + __webpack_require__(1531) + ");\n}\n.ipt120 {\n  width: 120px;\n}\n.CM {\n  text-align: center !important;\n  vertical-align: middle !important;\n}\n.LM {\n  text-align: left !important;\n  vertical-align: middle !important;\n}\n.RM {\n  text-align: right !important;\n  vertical-align: middle !important;\n}\n.BM {\n  text-align: bottom !important;\n  vertical-align: middle !important;\n}\n.CT {\n  text-align: center !important;\n  vertical-align: top !important;\n}\n.LT {\n  text-align: left !important;\n  vertical-align: top !important;\n}\n.RT {\n  text-align: right !important;\n  vertical-align: top !important;\n}\n.BT {\n  text-align: bottom !important;\n  vertical-align: top !important;\n}\n.CB {\n  text-align: center !important;\n  vertical-align: bottom !important;\n}\n.LB {\n  text-align: left !important;\n  vertical-align: bottom !important;\n}\n.RB {\n  text-align: right !important;\n  vertical-align: bottom !important;\n}\n.BB {\n  text-align: bottom !important;\n  vertical-align: bottom !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1553:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABM0lEQVQ4T6VTwW3DMAwUKRjwMxs0G9TZwKPUHwn6dYNmBP8k++OMkA2abpBOkHaD9GtAVEFBCpomrg2UH1kmeTrySBDJrLW1lDLk+9Tpvf80xnxkP/CHc+4IAOe5ZPaHEFYAsNdab/kOfd9XIYRWa10vARiGYTWOIwPEeGDqiLjlH9batZTyYQqoKIr3pmnOXdcdpgCeEHE9BUBEO66fWTDQDYMlJfyOWVRCpp6TJxlYa++WwF1XSh0ZIDWRZTxprTdXDOZKYMW89xXHIWJLRNVigCT3qxBiRURNWZZ7buQVgHOuBYD4AluW6meyEOILAOpc0iyDv5IXyZjG/DEGA2zyy5dd4OlDxIMQ4gUA4pIopd74TL4T0yaiZ2PM7mYOUiCP82UX8qIw/QQYJbxncRv/Y9+P6bn2P8pR1wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1554:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVQ4T6VTS07DMBB9Q4rUZW5Ab4CzQAq7HAOhVCo34Ab0CDlCpFSoy9yAdtVILDAnaLlBWYFE0kHj2FH5mKbCm8T2zPi9eW8Idqk4TYiI3d73Zf540dV84+5JfqI41QzaHkqWewKHDJS6mk3NXl1cKwRBpqsi6VNAqUmIYVO6eBLoAE3lQMVXI6LTMy/8t+BZ63yr4vHCU2A8AXjkR1Lnwl9QSKGWwh6CPhS+x/SiwBZ6p5gPgYo9FJpdqR/vtRQQ+DSsN0xY69UsOoqCVUxZOTNGrXoXMMmD4IGAkBk3eA9KaeTXHlymGZjMC7KcVPvJYH7lZpc4SgcR/JXcS0axOYjOJZjrJnIvd7PQum+wYOY7ohMzJE+rYmk63jpzbWCDbnVV5D980AaKndHNghsUA196YSX8zWhmGv+zPgGZq73xHJsviwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1555:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVQ4T7WTzVHDQAyFn+SLjymBDnAHJBUAFcDJ9t5CBSQVwM0/J1wBdAB0YDpICXD2WGLksT2ZxGY2w0QnHbSfnt5KhH8G2fs8z58BXJ7I+krTdN0BiqL4APAmIrUPhJkjADdJkixHgIhsnHMG6qIsy0hEnixn5oc4jkd4lmVLZt78CeiL3g0gIqt9+CwgDMO6aZrBix9Vve4BlXNuN6ibBfRyu64AtgAeT1IQBMG3qtqPmOwXZr63nIjWXh4YYDBOVSsiujPAfm6Gtm27mDRxboTDcfq6418AsGPmrquIfDLz1UReAbg4j4I5Ew8NnfRAVV+Z2WuVRSQiottxE+2YiMj22ztUtR6PyfvVROEvLdLpES2jeUwAAAAASUVORK5CYII="

/***/ }),

/***/ 1556:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABG0lEQVQ4T7WTPU7DQBBGv8/rho4j5AZsg2QqzAmAFhnBEZITEE5AjoBFFNHBDQgVlmiWG+QI0FF4PSjrjX8gRrYQrtbSzJuZtzvEHz+u8/VBMoNgbxCLeDMv83EJiM6XIB4hYnpBSA3Bicnu4hoAmZpsvtwA9P6Zhgpu3L8tJuZ1UcF1lMQAp78DoiQm+bTOF5GjFrwLgM/QcMc6F5LbD6jguOwoT012v6q66wQAaFS9Jnk1rANbvEOpma90C+CydGDHvRzAAbw4MAXkooQ1zraYQAW7WyW60Fpcc4TWOB768xaAfAWEviqeARz6cRrnPAXC0T910CURaAnd7kDkgQF7PWUpRIM8rV+iWybqXnuwCaKYapkGJX4L/gIg2MgRlRilWwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1557:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIRJREFUeNpi/P//PwMlgAVEzJo1i2wDmJDYnkD8DIj/E4GfQdWjGDAXiMOAmJEIHAZVj2KAJBAfIdLlR6DqUQzABf4TGwYUByL50UiEs5H5jMQYwIimmXHwhgExBjASa8BzILYh0mJrIH6BHogpQLwaiCWIMOApECejG7ANljxJAQABBgCrtx13rV+pPwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1558:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJNJREFUeNpi/P//PwMlgImBQsACY3j55XgCqblALEmEvudAnLxt05TtLEiCIM1hQMEjhHQDLbMBUquAWIoBFAYg7Omb/R/GJgbD1DMRYdt/mgYi9WIBn7OR+cBAZiRoALIikGZ0TYMrDAgagM/56AY8h6YwBiLShjWQeoEeiClAvBooKUGEGU9BeQHEYKQ0OwMEGAD16Fdvy+R6IQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1623:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1624);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./supply.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./supply.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(58);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _services = __webpack_require__(1541);

var _utils = __webpack_require__(1526);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //兼容ie


__webpack_require__(645);

var TableBar = function (_Component) {
    _inherits(TableBar, _Component);

    function TableBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TableBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableBar.__proto__ || Object.getPrototypeOf(TableBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false,
            dataSource: _this.props.dataSource || [], //表格数据
            columns: _this.props.columns || [], //表头数据
            columnsWidth: 0, //默认表格滚动宽度
            currentYear: _this.props.year || new Date().getFullYear() //设置显示年
        }, _this.GET_Columns = function (arg) {
            var columns = [{
                title: '供货',
                dataIndex: 'Name',
                width: 250,
                className: "CM",
                fixed: "left"
            }, {
                title: '全盘',
                className: "CM",
                children: [{
                    title: '总建筑面积',
                    dataIndex: 'TotalArea',
                    width: 80,
                    className: "CM"
                }, {
                    title: '总可售面积',
                    dataIndex: 'TotalSaleArea',
                    width: 80,
                    className: "CM"
                }, {
                    title: '总货值',
                    dataIndex: 'TotalMonery',
                    width: 80,
                    className: "CM"
                }]
            }, {
                title: '截止当月1日零点期初库存',
                className: "CM",
                children: [{
                    title: '总建筑面积',
                    dataIndex: 'TotalBuildingArea',
                    width: 80,
                    className: "CM"
                }, {
                    title: '已供货',
                    className: "CM",
                    children: [{
                        title: '可售面积',
                        dataIndex: 'SuppliedSaleArea',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '金额',
                        dataIndex: 'SuppliedMonery',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '套数',
                        dataIndex: 'SuppliedNumber',
                        width: 80,
                        className: "CM"

                    }]
                }, {
                    title: '存货',
                    className: "CM",
                    children: [{
                        title: '期初存货可售面积',
                        dataIndex: 'StockInitInvSaleaArea',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '期初存货货值',
                        dataIndex: 'StockInitInvMonery',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '18个月以上可售面积',
                        dataIndex: 'Stock18MonthSaleArea',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '18个月以上货值',
                        dataIndex: 'Stock18MonthMonery',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '12-18个月可售面积',
                        dataIndex: 'Stock12MonthSaleArea',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '12-18个月货值',
                        dataIndex: 'Stock12MonthMonery',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '6-12个月可售面积',
                        dataIndex: 'Stock6MonthSaleArea',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '6-12个月货值',
                        dataIndex: 'Stock6MonthMonery',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '0-6个月可售面积',
                        dataIndex: 'StockMonthSaleArea',
                        width: 80,
                        className: "CM"
                    }, {
                        title: '0-6个月货值',
                        dataIndex: 'StockMonthMonery',
                        width: 80,
                        className: "CM"
                    }]
                }]
            }];
            var year = parseInt(_this.state.currentYear),
                yearArray = [];
            var First = "FirstYearM1SaleArea:\u53EF\u552E\u9762\u79EF,FirstYearM1Monery:\u91D1\u989D,FirstYearM1Number:\u5957\u6570",
                //按规律 12个月
            Second = "SecondYearM1SaleArea:\u53EF\u552E\u9762\u79EF,SecondYearM1Monery:\u91D1\u989D,SecondYearM1Number:\u5957\u6570",
                //12个月
            Third = "ThirdYearQ1SaleArea:\u53EF\u552E\u9762\u79EF,ThirdYearQ1Monery:\u91D1\u989D,ThirdYearQ1Number:\u5957\u6570",
                //季度
            Fourth = "FourthSaleArea:\u53EF\u552E\u9762\u79EF,FourthMonery:\u91D1\u989D,FourthNumber:\u5957\u6570"; //三个内容

            for (var i = 0; i < 4; i++) {
                var opt = {};
                if (i < 2) {
                    //头两年显示到月
                    for (var j = 1; j <= 12; j++) {
                        opt = {
                            title: year + i + "\u5E74" + j + "\u6708",
                            dataIndex: "",
                            className: "CM",
                            children: [{
                                title: "供货",
                                children: [{ dataIndex: i == 0 ? "FirstYearM" + j + "SaleArea" : "SecondYearM" + j + "SaleArea", title: "可售面积", width: 80, className: "CM" }, { dataIndex: i == 0 ? "FirstYearM" + j + "Monery" : "SecondYearM" + j + "Monery", title: "金额", width: 80, className: "CM" }, { dataIndex: i == 0 ? "FirstYearM" + j + "Number" : "SecondYearM" + j + "Number", title: "套数", width: 80, className: "CM" }]
                            }]
                        };
                        columns.push(JSON.parse(JSON.stringify(opt)));
                    }
                } else if (i == 2) {
                    //第三年显示到季度
                    for (var jj = 1; jj <= 4; jj++) {
                        opt = {
                            title: year + i + "\u5E74\u7B2C" + jj + "\u5B63\u5EA6",
                            dataIndex: "",
                            className: "CM",
                            children: [{
                                title: "供货",
                                children: [{ dataIndex: "ThirdYearQ" + jj + "SaleArea", title: "可售面积", width: 80, className: "CM" }, { dataIndex: "ThirdYearQ" + jj + "Monery", title: "金额", width: 80, className: "CM" }, { dataIndex: "ThirdYearQ" + jj + "Number", title: "套数", width: 80, className: "CM" }]
                            }]
                        };
                        columns.push(JSON.parse(JSON.stringify(opt)));
                    }
                } else {
                    //第四年显示
                    opt = {
                        title: year + i + "\u5E74\u53CA\u4EE5\u540E",
                        dataIndex: "",
                        className: "CM",
                        children: [{
                            title: "供货",
                            children: [{ dataIndex: "FourthSaleArea", title: "可售面积", width: 80, className: "CM" }, { dataIndex: "FourthMonery", title: "金额", width: 80, className: "CM" }, { dataIndex: "FourthNumber", title: "套数", width: 80, className: "CM" }]
                        }]
                    };
                    columns.push(JSON.parse(JSON.stringify(opt)));
                }
            }

            var width = _utils.knife.recursion(columns, 0); //this.COUNT_Width(columns,0);

            _this.setState({
                columns: columns,
                columnsWidth: width
            });
        }, _this.CET_DataSource = function (arg) {
            var data = {
                "Name": 10,
                "TotalArea": 80,
                "TotalSaleArea": 80,
                "TotalMonery": 90,
                "TotalBuildingArea": 20,
                "SuppliedSaleArea": 30,
                "SuppliedMonery": 30,
                "SuppliedNumber": 30,
                "StockInitInvSaleaArea": 30,
                "StockInitInvMonery": 30,
                "Stock18MonthSaleArea": 30,
                "Stock18MonthMonery": 30,
                "Stock12MonthSaleArea": 30,
                "Stock12MonthMonery": 30,
                "Stock6MonthSaleArea": 30,
                "Stock6MonthMonery": 30,
                "StockMonthSaleArea": 30,
                "StockMonthMonery": 30
            };

            var _da = [];
            for (var i = 0; i < 100; i++) {
                var json = JSON.parse(JSON.stringify(data));
                json["key"] = i;
                _da.push(json);
            }
            _this.setState({
                dataSource: _da
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TableBar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps, nextState) {}
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps.planData, nextState.planData);
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.GET_Columns(); //获取头部
            this.CET_DataSource(); //数据
        }
        /**
        * 设置表格头部
        */

    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_antd.Table, { pagination: false, scroll: { y: 300, x: this.state.columnsWidth }, bordered: true, dataSource: this.state.dataSource, columns: this.state.columns });
        }
    }]);

    return TableBar;
}(_react.Component);

exports.default = TableBar;

/***/ })

});