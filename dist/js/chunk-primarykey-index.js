webpackJsonp([1],{

/***/ 1511:
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

var _common = __webpack_require__(1534);

var _tableBlock = __webpack_require__(1621);

var _tableBlock2 = _interopRequireDefault(_tableBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //兼容ie


__webpack_require__(645);

__webpack_require__(645);
__webpack_require__(1524);
__webpack_require__(1551);
__webpack_require__(1564);

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
            editstatus: false
        }, _this.handleBindEdit = function () {
            _this.setState({
                editstatus: true
            });
        }, _this.handleBindCancel = function () {
            _this.setState({
                editstatus: false
            });
        }, _this.handleBindSave = function () {
            _this.setState({
                editstatus: false
            });
        }, _this.renderButtonList = function () {
            var editstatus = _this.state.editstatus;
            //判断是否是编辑状态  编辑状态
            if (!editstatus) {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "boxGroupTit" },
                        _react2.default.createElement(
                            "p",
                            null,
                            _react2.default.createElement(
                                "span",
                                null,
                                "\u5173\u952E\u6307\u6807"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "div",
                                { className: "areaTopbtn jhBtn-wrap" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "areaVeSel" },
                                    _react2.default.createElement(_common.WrapperSelect, { labelText: "\u5E74",
                                        style: { width: "100px" }
                                    })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "areaVeSel" },
                                    _react2.default.createElement(_common.WrapperSelect, { labelText: "\u5B63\u5EA6",
                                        style: { width: "100px" }
                                    })
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { type: "button", style: { marginLeft: "30px" }, onClick: _this.handleBindEdit, className: "jh_btn jh_btn22 jh_btn_add" },
                                    "\u7F16\u8F91"
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { type: "button", className: "jh_btn jh_btn22 jh_btn_apro" },
                                    "\u53D1\u8D77\u5BA1\u6279"
                                )
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "boxGroupTit" },
                        _react2.default.createElement(
                            "p",
                            null,
                            _react2.default.createElement(
                                "span",
                                null,
                                "\u5173\u952E\u6307\u6807"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "div",
                                { className: "areaTopbtn jhBtn-wrap" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "areaVeSel" },
                                    _react2.default.createElement(_common.WrapperSelect, { labelText: "\u5E74",
                                        style: { width: "100px" }
                                    })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "areaVeSel" },
                                    _react2.default.createElement(_common.WrapperSelect, { labelText: "\u5B63\u5EA6",
                                        style: { width: "100px" }
                                    })
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { type: "button", style: { marginLeft: "30px" }, onClick: _this.handleBindSave, className: "jh_btn jh_btn22 jh_btn_add" },
                                    "\u4FDD\u5B58"
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { type: "button", onClick: _this.handleBindCancel, className: "jh_btn jh_btn22 jh_btn_add" },
                                    "\u53D6\u6D88"
                                ),
                                _react2.default.createElement(
                                    "button",
                                    { type: "button", className: "jh_btn jh_btn22 jh_btn_apro" },
                                    "\u53D1\u8D77\u5BA1\u6279"
                                )
                            )
                        )
                    )
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: "componentWillReceiveProps",
        //绑定数据
        value: function componentWillReceiveProps() {}
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
        //点击编辑


        //点击取消


        //点击保存


        /*渲染button*/

    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "processBar" },
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 24 },
                        _react2.default.createElement(
                            "article",
                            null,
                            this.renderButtonList()
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 24 },
                        _react2.default.createElement(
                            "article",
                            null,
                            _react2.default.createElement(_tableBlock2.default, { editstatus: this.state.editstatus })
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

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1525);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./tools-processBar.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./tools-processBar.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, ".processBar .processBar-header li {\n  display: inline-block;\n  margin-right: 20px;\n  height: 25px;\n  line-height: 25px;\n  color: #333;\n}\n.processBar .processBar-header li:before {\n  width: 15px;\n  height: 15px;\n  border: #ccc solid 1px;\n  content: \"\";\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: top;\n  margin-top: 5px;\n  margin-right: 5px;\n}\n.processBar .processBar-header li.legend-white:before {\n  background: #fff;\n}\n.processBar .processBar-header li.legend-blue:before {\n  background: #2979ff;\n}\n.processBar .processBar-header li.legend-green:before {\n  background: #00e676;\n}\n.processBar .processBar-header li.legend-red:before {\n  background: #e53935;\n}\n.processBar .processBar-List {\n  margin-top: 10px;\n}\n.processBar .processBar-List li {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  margin-left: 5px;\n  color: #333;\n  margin-right: 0;\n  height: 30px;\n  min-width: 95px;\n  text-align: left;\n  padding-left: 20px;\n  padding-right: 10px;\n  line-height: 30px;\n  color: #fff;\n  font-size: 12px;\n  background: #4c72a4;\n}\n.processBar .processBar-List li:first-child {\n  padding-left: 10px;\n  margin-left: 0;\n}\n.processBar .processBar-List li:nth-child(n+2):before {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  z-index: 20;\n  content: \"\";\n  border-left: #fff solid 15px;\n  border-bottom: transparent solid 15px;\n  border-top: transparent solid 15px;\n}\n.processBar .processBar-List li:nth-child(n):after {\n  position: absolute;\n  top: 0;\n  right: -14px;\n  z-index: 20;\n  content: \"\";\n  border-left: #4c72a4 solid 15px;\n  border-bottom: transparent solid 15px;\n  border-top: transparent solid 15px;\n}\n.processBar .processBar-List li span {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: #ccc solid 1px;\n  border-radius: 50%;\n  margin-right: 5px;\n  vertical-align: middle;\n  margin-top: -4px;\n}\n.processBar .processBar-List li span.legend-white {\n  background: #fff;\n}\n.processBar .processBar-List li span.legend-blue {\n  background: #2979ff;\n}\n.processBar .processBar-List li span.legend-green {\n  background: #00e676;\n}\n.processBar .processBar-List li span.legend-red {\n  background: #e53935;\n}\n.processBar .processBar-List li:hover,\n.processBar .processBar-List li.active {\n  background: #f1a118;\n  cursor: pointer;\n}\n.processBar .processBar-List li:hover::after,\n.processBar .processBar-List li.active::after {\n  border-left-color: #f1a118;\n}\n.PosRight {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n", ""]);

// exports


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

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapperInput = __webpack_require__(1577);

Object.defineProperty(exports, 'WrapperInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperInput).default;
  }
});

var _wrapperGroupTable = __webpack_require__(1578);

Object.defineProperty(exports, 'WrapperGroupTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperGroupTable).default;
  }
});

var _wrapperSelect = __webpack_require__(1546);

Object.defineProperty(exports, 'WrapperSelect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperSelect).default;
  }
});

var _wrapperModalSelect = __webpack_require__(1579);

Object.defineProperty(exports, 'WrapperModalSelect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperModalSelect).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1526);

var _wrapperSelect = __webpack_require__(1546);

var _wrapperSelect2 = _interopRequireDefault(_wrapperSelect);

var _constants = __webpack_require__(1529);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Option = _antd.Select.Option,
    OptGroup = _antd.Select.OptGroup;


var rowStyle = {
    height: 28,
    lineHeight: "28px",
    marginBottom: "10px"
};

var labelStyle = {
    textAlign: "right",
    paddingRight: "5px"
};

var WrapperModalSelect = function (_Component) {
    _inherits(WrapperModalSelect, _Component);

    function WrapperModalSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WrapperModalSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrapperModalSelect.__proto__ || Object.getPrototypeOf(WrapperModalSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedValue: [], //已经选择的值
            visible: false, //详细属性弹窗是否显示
            filterData: {}, //存储选择的信息，key为主选择框选中的值，value为属性选中的值
            addingValue: "", //当前正在添加的值
            propertyData: {}
        }, _this.handlePropertyChange = function (key) {
            return function (value) {
                _this.setState({
                    propertyData: _extends({}, _this.state.propertyData, _defineProperty({}, key, value))
                });
            };
        }, _this.checkPropertyValue = function (key) {
            var propertyData = _this.state.propertyData;

            return !propertyData[key];
        }, _this.handleChange = function (value) {
            var multiple = _this.props.multiple;
            var _this$state = _this.state,
                selectedValue = _this$state.selectedValue,
                filterData = _this$state.filterData;


            if (multiple) {
                var selectingValue = [].concat(_toConsumableArray(value));
                if (selectingValue.length > selectedValue.length) {
                    //当选中某一项时, 记录当前选择的项， 打开属性选择窗口 选择属性， 最后点击确认按钮， 这个才是选中某一项目的的整个操作
                    var addingValue = selectingValue[selectingValue.length - 1];

                    _this.setState({
                        visible: true,
                        addingValue: addingValue,
                        propertyData: {}
                    });
                } else {
                    //当取消选择项时
                    var newSelectedValue = selectingValue;
                    var newFilterData = filterData;
                    var validFilterData = _this.getValidConditionData(newSelectedValue, newFilterData);

                    //触发回调函数
                    _this.props.onSelectChange && _this.props.onSelectChange(validFilterData);

                    _this.setState({
                        selectedValue: newSelectedValue,
                        propertyData: {}
                    });
                }
            } else {
                var newState = {
                    selectedValue: [],
                    addingValue: value,
                    propertyData: {},
                    visible: false
                };
                if (value) {
                    newState.visible = true;
                } else {
                    //触发回调函数
                    _this.props.onSelectChange && _this.props.onSelectChange([]);
                }
                _this.setState(newState);
            }
        }, _this.renderGroupOption = function () {
            var _this$props = _this.props,
                dataSource = _this$props.dataSource,
                showDefault = _this$props.showDefault;

            var optArray = [];
            var defaultOption = _react2.default.createElement(
                Option,
                { key: '-1', value: '' },
                '\u8BF7\u9009\u62E9'
            );
            if (showDefault) {
                optArray.push(defaultOption);
            }
            dataSource && dataSource.forEach(function (item) {
                optArray.push(_react2.default.createElement(
                    OptGroup,
                    { key: item.id, label: item.name },
                    item.children.map(function (child) {
                        return _react2.default.createElement(
                            Option,
                            { key: child.id, value: child.id },
                            child.name
                        );
                    })
                ));
            });

            return optArray;
        }, _this.handleOk = function () {

            if (_this.checkPropertyValue("ishaveproperty") //产权属性
            || _this.checkPropertyValue("isdecoration") //精装属性
            || _this.checkPropertyValue("storeyheight")) //层高属性
                {
                    return;
                }

            var _this$state2 = _this.state,
                selectedValue = _this$state2.selectedValue,
                filterData = _this$state2.filterData,
                addingValue = _this$state2.addingValue,
                propertyData = _this$state2.propertyData;

            var newSelectedValue = [].concat(_toConsumableArray(selectedValue), [addingValue]);
            var newFilterData = _extends({}, filterData, _defineProperty({}, addingValue, propertyData));
            var validFilterData = _this.getValidConditionData(newSelectedValue, newFilterData);
            //触发回调函数
            _this.props.onSelectChange && _this.props.onSelectChange(validFilterData);

            _this.setState({
                selectedValue: newSelectedValue,
                filterData: newFilterData,
                visible: false
            });
        }, _this.handleCancel = function () {
            _this.setState({ visible: false, addingValue: "" });
        }, _this.getValidConditionData = function (newSelectedValue, newFilterData) {
            var validConditionData = [];
            var keys = Object.keys(newFilterData);
            keys.forEach(function (key) {
                if (newSelectedValue.includes(key)) {
                    var validCondition = {
                        id: key,
                        isdecoration: newFilterData[key]["isdecoration"],
                        storeyheight: newFilterData[key]["storeyheight"],
                        ishaveproperty: newFilterData[key]["ishaveproperty"]
                    };
                    validConditionData.push(validCondition);
                }
            });
            return validConditionData;
        }, _this.renderPropertyModal = function () {
            var visible = _this.state.visible;

            if (!visible) {
                return null;
            }

            return _react2.default.createElement(
                _antd.Modal,
                {
                    title: '\u5C5E\u6027\u9009\u62E9',
                    visible: true,
                    onOk: _this.handleOk,
                    onCancel: _this.handleCancel,
                    maskClosable: false,
                    width: '360px'
                },
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_wrapperSelect2.default, { labelText: '\u4EA7\u6743\u5C5E\u6027\uFF1A', dataSource: _constants.AreaConstants.RightsProperty,
                        showRequired: _this.checkPropertyValue("ishaveproperty"),
                        onChange: _this.handlePropertyChange("ishaveproperty") })
                ),
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_wrapperSelect2.default, { labelText: '\u7CBE\u88C5\u5C5E\u6027\uFF1A', dataSource: _constants.AreaConstants.HardcoverProperty,
                        showRequired: _this.checkPropertyValue("isdecoration"),
                        onChange: _this.handlePropertyChange("isdecoration") })
                ),
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_wrapperSelect2.default, { labelText: '\u5C42\u9AD8\u5C5E\u6027\uFF1A', dataSource: _constants.AreaConstants.LayerProperty,
                        showRequired: _this.checkPropertyValue("storeyheight"),
                        onChange: _this.handlePropertyChange("storeyheight") })
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //处理属性选择框 change


    /**
     * 检查属性值
     */


    /**
     * 获取有效的筛选条件 []
     */


    _createClass(WrapperModalSelect, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                labelText = _props.labelText,
                labelSpan = _props.labelSpan,
                InputSpan = _props.InputSpan,
                multiple = _props.multiple;
            var _state = this.state,
                selectedValue = _state.selectedValue,
                addingValue = _state.addingValue;

            if (!multiple) {
                selectedValue = addingValue;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Row,
                    { style: rowStyle },
                    _react2.default.createElement(
                        _antd.Col,
                        { span: labelSpan, style: labelStyle },
                        labelText
                    ),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: InputSpan },
                        _react2.default.createElement(
                            _antd.Select,
                            {
                                mode: !!multiple ? "multiple" : "-",
                                value: selectedValue,
                                style: { width: "65%" },
                                onChange: this.handleChange,
                                placeholder: '\u8BF7\u9009\u62E9'
                            },
                            this.renderGroupOption()
                        )
                    )
                ),
                this.renderPropertyModal()
            );
        }
    }]);

    return WrapperModalSelect;
}(_react.Component);

WrapperModalSelect.propTypes = {
    labelSpan: _react2.default.PropTypes.number,
    inputSpan: _react2.default.PropTypes.number,
    labelText: _react2.default.PropTypes.string.isRequired,
    multiple: _react2.default.PropTypes.bool,
    promiseLoader: _react2.default.PropTypes.func, //支持promise
    dataSource: _react2.default.PropTypes.array, //同步情况下的数据源
    onSelectChange: _react2.default.PropTypes.func, //选择项发生改变时
    showRequired: _react2.default.PropTypes.bool, //显示必填 *
    showDefault: _react2.default.PropTypes.bool //是否显示默认
};
WrapperModalSelect.defaultProps = {
    multiple: true,
    showDefault: true,
    labelSpan: 6,
    inputSpan: 18,
    defaultValue: "",
    showRequired: true,
    promiseLoader: function promiseLoader() {
        return Promise.resolve([]);
    }
};
exports.default = WrapperModalSelect;

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

/***/ 1564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1565);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./areaManage.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./areaManage.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*面积管理样式*/\n.areaManage {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.areaTopbtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 300;\n}\n.areaStatus {\n  display: inline-block;\n}\n.areaVeSel {\n  float: left;\n  padding-right: 30px;\n}\n.areaStatus {\n  float: left;\n  line-height: 28px;\n  font-size: 12px;\n  color: #999;\n}\n.areaUnit {\n  display: inline-block;\n  line-height: 28px;\n  font-size: 12px;\n  padding-right: 30px;\n}\n.areaSession {\n  clear: both;\n}\n.areaSession20 {\n  padding-top: 20px;\n}\n.areaSession16 {\n  padding-top: 16px;\n}\n.areaManage .JH-HeadTab .JH-HeadList li {\n  padding: 7px 8px;\n}\n.PosRight {\n  top: 6px;\n}\n.PosRight .jh_btn_save {\n  padding-right: 6px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1526);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rowStyle = {
    height: 28,
    lineHeight: "28px",
    marginBottom: "10px"
};

var labelStyle = {
    textAlign: "right",
    paddingRight: "5px"
};

var WrapperInput = function (_React$Component) {
    _inherits(WrapperInput, _React$Component);

    function WrapperInput() {
        _classCallCheck(this, WrapperInput);

        return _possibleConstructorReturn(this, (WrapperInput.__proto__ || Object.getPrototypeOf(WrapperInput)).apply(this, arguments));
    }

    _createClass(WrapperInput, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                labelText = _props.labelText,
                labelSpan = _props.labelSpan,
                inputSpan = _props.inputSpan,
                inputProps = _objectWithoutProperties(_props, ['labelText', 'labelSpan', 'inputSpan']);

            return _react2.default.createElement(
                _antd.Row,
                { style: rowStyle },
                _react2.default.createElement(
                    _antd.Col,
                    { span: labelSpan, style: labelStyle },
                    labelText
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { span: inputSpan },
                    _react2.default.createElement(_antd.Input, inputProps)
                )
            );
        }
    }]);

    return WrapperInput;
}(_react2.default.Component);

WrapperInput.propTypes = {
    labelText: _react2.default.PropTypes.string.isRequired,
    labelSpan: _react2.default.PropTypes.number,
    inputSpan: _react2.default.PropTypes.number
};
WrapperInput.defaultProps = {
    labelSpan: 12,
    inputSpan: 12
};
exports.default = WrapperInput;

/***/ }),

/***/ 1578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1526);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 列默认宽度
 * @type {number}
 */
var defaultWidth = 105;

// /**
//  * 默认筛选级别
//  * @type {string}
//  */
// const DEFAULT_FILTER_LEVEL = "DEFAULT_FILTER_LEVEL";

/**
 * 分组表格
 * @param headerData 表头数据
 * @param dataSource 数据源
 * @param rowKey 主键
 * @param defaultHeight 默认表格宽度
 * @returns {XML}
 */

var WrapperGroupTable = function (_Component) {
    _inherits(WrapperGroupTable, _Component);

    function WrapperGroupTable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WrapperGroupTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrapperGroupTable.__proto__ || Object.getPrototypeOf(WrapperGroupTable)).call.apply(_ref, [this].concat(args))), _this), _this.handleInputChange = function (record, key) {
            return function (e) {
                // const oldValue = record[key];
                var value = e.target.value;
                record[key] = value;
                _this.forceUpdate();
                _this.props.onDataChange && _this.props.onDataChange(record.KEY, key, value);
            };
        }, _this.getColumns = function (headerData) {
            var _this$props = _this.props,
                columnRender = _this$props.columnRender,
                editable = _this$props.editable;

            var columns = [];
            columns.scrollX = 0;

            headerData.forEach(function (item, index) {
                var column = {
                    title: item.name || "汇总名称",
                    dataIndex: item.field,
                    key: item.field
                };

                //render
                if (columnRender && columnRender[item.field]) {
                    column.render = columnRender[item.field];
                }

                //默认固定第一列
                if (index === 0) {
                    // column.fixed = "left";
                } else {
                    if (editable) {
                        column.render = function (text, record) {
                            if (item.edit !== "+w") {
                                return text;
                            }

                            return _react2.default.createElement(_antd.Input, { onChange: _this.handleInputChange(record, item.field), value: text });
                        };
                    }
                }
                if (item.children && Array.isArray(item.children) && item.children.length > 0) {
                    _this.getChildColumns(columns, column, item);
                } else {
                    if (item.width && item.width > 0) {
                        column.width = item.width;
                    } else {
                        column.width = defaultWidth;
                    }
                    columns.scrollX += column.width;

                    // //fixed
                    // if (item.fixed) {
                    //     column.fixed = item.fixed;
                    // }
                }
                columns.push(column);
            });
            return columns;
        }, _this.getChildColumns = function (columns, column, item) {

            column.children = [];
            item.children.forEach(function (childItem) {
                var childColumn = {
                    title: childItem.name,
                    dataIndex: childItem.field,
                    key: childItem.field,
                    width: defaultWidth
                };

                if (childItem.width && childItem.width > 0) {
                    childColumn.width = childItem.width;
                }
                columns.scrollX += childColumn.width;
                column.children.push(childColumn);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WrapperGroupTable, [{
        key: 'shouldComponentUpdate',


        // state = {
        //     filterInfo: null,
        // };

        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _index.shallowCompare)(this, nextProps, nextState);
        }

        // handleFilterChange = (pagination, filters) => {
        //     this.setState({
        //         filterInfo: filters,
        //     });
        // };

    }, {
        key: 'render',
        value: function render() {
            // let {filterInfo} = this.state;
            // filterInfo = filterInfo || {};

            var _props = this.props,
                headerData = _props.headerData,
                dataSource = _props.dataSource,
                rowKey = _props.rowKey,
                defaultHeight = _props.defaultHeight;

            var tableColumns = this.getColumns(headerData);

            // const filters = [
            //     {text: '1#', value: '1#'},
            //     {text: '2#', value: '2#'},
            // ];
            // //可筛选的列信息
            // const mainColumn = tableColumns[0];
            // if (mainColumn) {
            //     console.log("filterInfo.name", filterInfo.name);
            //     mainColumn.filters = filters;
            //     mainColumn.filteredValue = filterInfo.name || [DEFAULT_FILTER_LEVEL];
            //     mainColumn.onFilter = (value, record) => {
            //
            //         if (value === DEFAULT_FILTER_LEVEL) {
            //             return record.level === 1;
            //         }
            //         return record.level === 1 || record.path.includes(value)
            //     };
            // }

            return _react2.default.createElement(_antd.Table, {
                rowKey: rowKey,
                columns: tableColumns,
                dataSource: dataSource,
                bordered: true,
                size: 'middle',
                scroll: { x: tableColumns.scrollX, y: defaultHeight },
                pagination: false
            });
        }
    }]);

    return WrapperGroupTable;
}(_react.Component);

WrapperGroupTable.propTypes = {
    headerData: _react2.default.PropTypes.array, //表头数据
    dataSource: _react2.default.PropTypes.array, //表格数据源
    rowKey: _react2.default.PropTypes.string, //主键
    defaultHeight: _react2.default.PropTypes.number, //表格自定义高度
    columnRender: _react2.default.PropTypes.object, //自定义render
    editable: _react2.default.PropTypes.bool, //单元格是否可编辑
    onDataChange: _react2.default.PropTypes.func //文本框数据修改
};
WrapperGroupTable.defaultProps = {
    headerData: [],
    dataSource: [],
    rowKey: "id",
    defaultHeight: 400,
    columnRender: null,
    editable: false
};
exports.default = WrapperGroupTable;

/***/ }),

/***/ 1579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1526);

var _wrapperSelect = __webpack_require__(1546);

var _wrapperSelect2 = _interopRequireDefault(_wrapperSelect);

var _constants = __webpack_require__(1529);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Option = _antd.Select.Option,
    OptGroup = _antd.Select.OptGroup;


var rowStyle = {
    height: 28,
    lineHeight: "28px",
    marginBottom: "10px"
};

var labelStyle = {
    textAlign: "right",
    paddingRight: "5px"
};

var WrapperModalSelect = function (_Component) {
    _inherits(WrapperModalSelect, _Component);

    function WrapperModalSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WrapperModalSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrapperModalSelect.__proto__ || Object.getPrototypeOf(WrapperModalSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedValue: [], //已经选择的值
            visible: false, //详细属性弹窗是否显示
            filterData: {}, //存储选择的信息，key为主选择框选中的值，value为属性选中的值
            addingValue: "", //当前正在添加的值
            propertyData: {}
        }, _this.handlePropertyChange = function (key) {
            return function (value) {
                _this.setState({
                    propertyData: _extends({}, _this.state.propertyData, _defineProperty({}, key, value))
                });
            };
        }, _this.checkPropertyValue = function (key) {
            var propertyData = _this.state.propertyData;

            return !propertyData[key];
        }, _this.handleChange = function (value) {
            var multiple = _this.props.multiple;
            var _this$state = _this.state,
                selectedValue = _this$state.selectedValue,
                filterData = _this$state.filterData;


            if (multiple) {
                var selectingValue = [].concat(_toConsumableArray(value));
                if (selectingValue.length > selectedValue.length) {
                    //当选中某一项时, 记录当前选择的项， 打开属性选择窗口 选择属性， 最后点击确认按钮， 这个才是选中某一项目的的整个操作
                    var addingValue = selectingValue[selectingValue.length - 1];

                    _this.setState({
                        visible: true,
                        addingValue: addingValue,
                        propertyData: {}
                    });
                } else {
                    //当取消选择项时
                    var newSelectedValue = selectingValue;
                    var newFilterData = filterData;
                    var validFilterData = _this.getValidConditionData(newSelectedValue, newFilterData);
                    //触发回调函数
                    _this.props.onSelectChange && _this.props.onSelectChange(validFilterData);

                    _this.setState({
                        selectedValue: newSelectedValue,
                        propertyData: {}
                    });
                }
            } else {
                _this.setState({
                    visible: true,
                    addingValue: value,
                    propertyData: {}
                });
            }
        }, _this.renderGroupOption = function () {
            var dataSource = _this.props.dataSource;

            var optArray = [];
            dataSource && dataSource.forEach(function (item) {
                optArray.push(_react2.default.createElement(
                    OptGroup,
                    { key: item.id, label: item.name },
                    item.children.map(function (child) {
                        return _react2.default.createElement(
                            Option,
                            { key: child.id, value: child.id },
                            child.name
                        );
                    })
                ));
            });

            return optArray;
        }, _this.handleOk = function () {

            if (_this.checkPropertyValue("ishaveproperty") //产权属性
            || _this.checkPropertyValue("isdecoration") //精装属性
            || _this.checkPropertyValue("storeyheight")) //层高属性
                {
                    return;
                }

            var _this$state2 = _this.state,
                selectedValue = _this$state2.selectedValue,
                filterData = _this$state2.filterData,
                addingValue = _this$state2.addingValue,
                propertyData = _this$state2.propertyData;

            var newSelectedValue = [].concat(_toConsumableArray(selectedValue), [addingValue]);
            var newFilterData = _extends({}, filterData, _defineProperty({}, addingValue, propertyData));
            var validFilterData = _this.getValidConditionData(newSelectedValue, newFilterData);
            //触发回调函数
            _this.props.onSelectChange && _this.props.onSelectChange(validFilterData);

            _this.setState({
                selectedValue: newSelectedValue,
                filterData: newFilterData,
                visible: false
            });
        }, _this.handleCancel = function () {
            _this.setState({ visible: false, addingValue: "" });
        }, _this.getValidConditionData = function (newSelectedValue, newFilterData) {
            var validConditionData = [];
            var keys = Object.keys(newFilterData);
            keys.forEach(function (key) {
                if (newSelectedValue.includes(key)) {
                    var validCondition = {
                        id: key,
                        isdecoration: newFilterData[key]["isdecoration"],
                        storeyheight: newFilterData[key]["storeyheight"],
                        ishaveproperty: newFilterData[key]["ishaveproperty"]
                    };
                    validConditionData.push(validCondition);
                }
            });
            return validConditionData;
        }, _this.renderPropertyModal = function () {
            var visible = _this.state.visible;

            if (!visible) {
                return null;
            }

            return _react2.default.createElement(
                _antd.Modal,
                {
                    title: '\u5C5E\u6027\u9009\u62E9',
                    visible: true,
                    onOk: _this.handleOk,
                    onCancel: _this.handleCancel,
                    maskClosable: false,
                    width: '360px'
                },
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_wrapperSelect2.default, { labelText: '\u4EA7\u6743\u5C5E\u6027\uFF1A', dataSource: _constants.AreaConstants.RightsProperty,
                        showRequired: _this.checkPropertyValue("ishaveproperty"),
                        onChange: _this.handlePropertyChange("ishaveproperty") })
                ),
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_wrapperSelect2.default, { labelText: '\u7CBE\u88C5\u5C5E\u6027\uFF1A', dataSource: _constants.AreaConstants.HardcoverProperty,
                        showRequired: _this.checkPropertyValue("isdecoration"),
                        onChange: _this.handlePropertyChange("isdecoration") })
                ),
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_wrapperSelect2.default, { labelText: '\u5C42\u9AD8\u5C5E\u6027\uFF1A', dataSource: _constants.AreaConstants.LayerProperty,
                        showRequired: _this.checkPropertyValue("storeyheight"),
                        onChange: _this.handlePropertyChange("storeyheight") })
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    //处理属性选择框 change


    /**
     * 检查属性值
     */


    /**
     * 获取有效的筛选条件 []
     */


    _createClass(WrapperModalSelect, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                labelText = _props.labelText,
                labelSpan = _props.labelSpan,
                InputSpan = _props.InputSpan,
                dataSource = _props.dataSource,
                showDefault = _props.showDefault,
                multiple = _props.multiple;


            var options = [];
            var defaultOption = _react2.default.createElement(
                Option,
                { key: '1', value: '' },
                '\u8BF7\u9009\u62E9'
            );
            if (showDefault) options.push(defaultOption);

            if (Array.isArray(dataSource) && dataSource.length > 0) {
                dataSource.forEach(function (item, index) {
                    options.push(_react2.default.createElement(
                        Option,
                        { key: item.id, value: item.id },
                        item.name
                    ));
                });
            }

            var _state = this.state,
                selectedValue = _state.selectedValue,
                addingValue = _state.addingValue;

            if (!multiple) {
                selectedValue = addingValue;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Row,
                    { style: rowStyle },
                    _react2.default.createElement(
                        _antd.Col,
                        { span: labelSpan, style: labelStyle },
                        labelText
                    ),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: InputSpan },
                        _react2.default.createElement(
                            _antd.Select,
                            {
                                mode: !!multiple ? "multiple" : "-",
                                value: selectedValue,
                                style: { width: "65%" },
                                onChange: this.handleChange,
                                placeholder: '\u8BF7\u9009\u62E9'
                            },
                            this.renderGroupOption()
                        )
                    )
                ),
                this.renderPropertyModal()
            );
        }
    }]);

    return WrapperModalSelect;
}(_react.Component);

WrapperModalSelect.propTypes = {
    labelSpan: _react2.default.PropTypes.number,
    inputSpan: _react2.default.PropTypes.number,
    labelText: _react2.default.PropTypes.string.isRequired,
    multiple: _react2.default.PropTypes.bool,
    promiseLoader: _react2.default.PropTypes.func, //支持promise
    dataSource: _react2.default.PropTypes.array, //同步情况下的数据源
    onSelectChange: _react2.default.PropTypes.func, //选择项发生改变时
    showRequired: _react2.default.PropTypes.bool, //显示必填 *
    showDefault: _react2.default.PropTypes.bool //是否显示默认
};
WrapperModalSelect.defaultProps = {
    multiple: true,
    showDefault: true,
    labelSpan: 6,
    inputSpan: 18,
    defaultValue: "",
    showRequired: true,
    promiseLoader: function promiseLoader() {
        return Promise.resolve([]);
    }
};
exports.default = WrapperModalSelect;

/***/ }),

/***/ 1621:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //兼容ie


// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

var TableBlock = function (_Component) {
  _inherits(TableBlock, _Component);

  function TableBlock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableBlock.__proto__ || Object.getPrototypeOf(TableBlock)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: false,
      editstatus: ""

    }, _this.renderContent = function (value, row, index) {
      var obj = {
        children: value,
        props: {}
      };
      return obj;
    }, _this.renderContentInput = function (value, row, index) {
      var editstatus = _this.state.editstatus;
      var inputID = "inputId" + _iss2.default.guid().toString();
      //判断是否是编辑状态
      if (editstatus) {
        //编辑状态下生成input框
        var obj1 = _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_antd.Input, { id: inputID, style: { margin: '-5px 0' }, value: value, onChange: _this.onChangeInput.bind(_this, value, row, index) })
        );
        return obj1;
      } else {
        //非编辑框下显示数据
        var obj2 = {
          children: value,
          props: {}
        };
        return obj2;
      }
    }, _this.onChangeInput = function (value, row, index, ev) {
      var th = _this;
      var target = ev.target.id;
      _this.setState(_defineProperty({}, target, ev.target.value));
      $("#" + target).value(ev.target.value);
    }, _this.renderContentTable = function (value, row, index) {
      //根据数据合并行
      var obj = {
        children: value,
        props: {}
      };
      if (index === 1) {
        obj.props.rowSpan = 2; //跨两行
      };
      if (index === 2) {
        obj.props.rowSpan = 0;
      };
      if (index === 4) {
        obj.props.rowSpan = 6;
      };
      if (index === 5 || index === 6 || index === 7 || index === 8 || index === 9) {
        obj.props.rowSpan = 0;
      };
      if (index === 10) {
        obj.props.rowSpan = 3;
      };
      if (index === 11 || index === 12) {
        obj.props.rowSpan = 0;
      };
      return obj;
    }, _this.getColumns = function () {
      //表格头部数据
      var columns = [{
        title: '序号',
        colSpan: 1,
        dataIndex: 'order',
        render: _this.renderContent
      }, {
        title: '指标名称',
        colSpan: 2, //跨两列
        dataIndex: 'indexName1',
        render: _this.renderContentTable //合并列
      }, {
        title: '指标名称',
        colSpan: 0,
        dataIndex: 'indexName2',
        render: _this.renderContent
      }, {
        title: '计划',
        colSpan: 1,
        dataIndex: 'plan',
        render: _this.renderContent
      }, {
        title: '2017年一季度',
        colSpan: 1,
        dataIndex: 'quarter1',
        //render: this.renderContent,
        render: _this.renderContentInput
      }, {
        title: '2017年二季度',
        colSpan: 1,
        dataIndex: 'quarter2',
        render: _this.renderContentInput
      }, {
        title: '2017年三季度',
        colSpan: 1,
        dataIndex: 'quarter3',
        render: _this.renderContentInput
      }, {
        title: '2017年四季度',
        colSpan: 1,
        dataIndex: 'quarter4',
        render: _this.renderContentInput
      }];
      return columns;
    }, _this.getData = function () {
      //表格内容数据
      /*const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i.toString(),
          name: `Edrward ${i}`,
          age: 32,
          address: `London Park no. ${i}`,
          key: '1',
          order: '1',
          indexName1: '面积指标',
          indexName2: '总建面',
          plan: '计划',
          quarter1: '一季度',
          quarter2: '二季度',
          quarter3: '三季度',
          quarter4: '四季度',
        });
      } */

      var data = [{
        key: '1',
        order: '1',
        indexName1: '面积指标',
        indexName2: '总建面',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '2',
        order: '2',
        indexName1: '销售指标',
        indexName2: '销售总货值',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '3',
        order: '3',
        indexName1: '销售指标',
        indexName2: '17年签约指标',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '4',
        order: '4',
        indexName1: '成本指标',
        indexName2: '成本支出',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '5',
        order: '5',
        indexName1: '财务类指标',
        indexName2: '销售净利润',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '6',
        order: '6',
        indexName1: '财务类指标',
        indexName2: '销售净利润率',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '7',
        order: '7',
        indexName1: '财务类指标',
        indexName2: 'IRR（含融资）',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '8',
        order: '8',
        indexName1: '财务类指标',
        indexName2: 'IRR（不含融资）',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '9',
        order: '9',
        indexName1: '财务类指标',
        indexName2: '现金流回正时间（含融资）',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      },, {
        key: '10',
        order: '10',
        indexName1: '财务类指标',
        indexName2: '现金流回正时间（不含融资）',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '11',
        order: '11',
        indexName1: '计划类指标',
        indexName2: '主项计划达成率',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '12',
        order: '12',
        indexName1: '计划类指标',
        indexName2: '拿地到首开周期',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }, {
        key: '13',
        order: '13',
        indexName1: '计划类指标',
        indexName2: '拿地到交付周期',
        plan: '计划',
        quarter1: '一季度',
        quarter2: '二季度',
        quarter3: '三季度',
        quarter4: '四季度'
      }];
      return data;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableBlock, [{
    key: "componentWillReceiveProps",
    //绑定数据

    value: function componentWillReceiveProps(nextProps) {
      //console.log(nextProps)
      this.setState({
        editstatus: nextProps.editstatus
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        data: this.getData()
      });
    }

    //只展示使用 this.renderContent


    //带有编辑功能的使用 this.renderContentInput

  }, {
    key: "render",
    value: function render() {
      // pagination 是否分页，columns头部标题数据，dataSource表内容数据
      return _react2.default.createElement(_antd.Table, { columns: this.getColumns(), pagination: false, dataSource: this.getData(), bordered: true });
    }
  }]);

  return TableBlock;
}(_react.Component);

exports.default = TableBlock;

/***/ })

});