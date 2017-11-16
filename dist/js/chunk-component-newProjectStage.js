webpackJsonp([4],{

/***/ 1518:
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

var _componentStageInforView = __webpack_require__(1577);

var _componentStageInforView2 = _interopRequireDefault(_componentStageInforView);

var _componentStageMasView = __webpack_require__(1578);

var _componentStageMasView2 = _interopRequireDefault(_componentStageMasView);

var _componentProcessApprovalTab = __webpack_require__(1537);

var _componentProcessApprovalTab2 = _interopRequireDefault(_componentProcessApprovalTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 分期审核=只读基本信息*/
//兼容ie
/*分期信息*/
/*分期规划条件指标和分期占用土地*/


//导航信息


var StageControl = function (_React$Component) {
    _inherits(StageControl, _React$Component);

    function StageControl(arg) {
        _classCallCheck(this, StageControl);

        var _this = _possibleConstructorReturn(this, (StageControl.__proto__ || Object.getPrototypeOf(StageControl)).call(this, arg));

        _this.state = {
            allSearchArg: _this.props.location.query, /*地址栏所有参数*/
            versionId: _this.props.location.query["dataKey"], /*版本id*/
            projectid: "", /*项目id*/
            status: "edit", /*请求类型*/
            equityTxt: "", /*权益比例*/
            landList: [] /*地块信息*/
        };
        return _this;
    }

    _createClass(StageControl, [{
        key: "getLandlist",
        value: function getLandlist(da) {
            var th = this;
            var equityTxt = "";
            var landFirstCode = "";
            var landArrLen = da.length - 1;
            da.forEach(function (obj, index) {
                if (landArrLen == index) {
                    equityTxt = equityTxt + obj.Name + "-" + (obj.EQUITYRATIO || 0) + "%";
                } else {
                    equityTxt = equityTxt + obj.Name + "-" + (obj.EQUITYRATIO || 0) + "%,";
                }
            });
            th.setState({
                equityTxt: equityTxt
            });
        }
        /*获取基本信息*/

    }, {
        key: "getBasicInfor",
        value: function getBasicInfor(basicInfor) {
            var th = this;
            var projectId = basicInfor.PROJECTID;
            th.setState({
                projectId: projectId
            });
            $(document).triggerHandler("landFirstLoad", [projectId]);
        }
    }, {
        key: "render",
        value: function render() {
            var th = this;
            var stateData = th.state;
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_componentProcessApprovalTab2.default, { current: "newProjectStage", allSearchArg: stateData.allSearchArg }),
                _react2.default.createElement(_componentStageInforView2.default, { versionId: stateData.versionId, status: stateData.status, equityTxt: stateData.equityTxt, basicCallBack: th.getBasicInfor.bind(th) }),
                _react2.default.createElement(_componentStageMasView2.default, { versionId: stateData.versionId, callback: th.getLandlist.bind(th) })
            );
        }
    }]);

    return StageControl;
}(_react2.default.Component);

exports.default = StageControl;

/***/ }),

/***/ 1526:
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
            _this.props.CallBack(da, el);
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
                        var children = el.data.map(function (_d, _i) {
                            return _react2.default.createElement(
                                Option,
                                { key: _i },
                                _d.label
                            );
                        });
                        return _react2.default.createElement(
                            _antd.Select,
                            { mode: "tags", name: el.id, tokenSeparators: [','], className: el.edit.indexOf("+m") >= 0 && !el.val ? "required selects" : "selects", onChange: _this2.EVENT_CHANGE_ANTD_SELECTS.bind(_this2, el), defaultValue: el.val || [] },
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

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1528);
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

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*\ntools-dynamicTable.less\n*/\n.tools-dynamicTable {\n  margin-top: 10px;\n}\n.tools-dynamicTable ul li {\n  height: 40px;\n  overflow: hidden;\n}\n.tools-dynamicTable ul li label {\n  font-size: 12px;\n  color: #333;\n  font-weight: normal;\n  width: 110px;\n  text-align: right;\n  padding-top: 5px;\n  float: left;\n}\n.tools-dynamicTable ul li .dynamicTableDIV {\n  display: block;\n  margin: 0 65px 0 115px;\n}\n.tools-dynamicTable ul li .dynamicTableDIV input {\n  width: 100%;\n  padding: 3px;\n  border: #ddd solid 1px;\n}\n.tools-dynamicTable ul li .dynamicTableDIV input[readonly] {\n  background: #fbfbfb;\n}\n.tools-dynamicTable ul li .dynamicTableDIV input.required {\n  background: #fff3f3;\n}\n.tools-dynamicTable ul li .dynamicTableDIV select {\n  width: 100%;\n  height: 25px;\n  border: #ddd solid 1px;\n}\n.tools-dynamicTable ul li .dynamicTableDIV select.required {\n  background: #fff3f3;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .selects {\n  width: 100%;\n  height: 25px;\n  overflow: hidden;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .selects .ant-select-selection--multiple {\n  min-height: 25px;\n  border-radius: 0;\n  padding-bottom: 0;\n  height: 25px;\n  overflow: hidden;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .ant-select-search__field {\n  border: none;\n  padding: 0;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .ant-select-selection__choice {\n  margin-top: 2px;\n  padding: 0 15px 0 0;\n  float: none;\n  display: inline-block;\n}\n.tools-dynamicTable ul li .dynamicTableDIV .ant-select-selection__choice__remove {\n  right: 0;\n}\n.tools-dynamicTable ul li i {\n  font-style: normal;\n  width: 60px;\n  float: right;\n  padding-top: 3px;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.tools-dynamicTable ul li i b {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.7);\n  color: #c00;\n  font-weight: normal;\n  font-size: 12px;\n}\n.tools-dynamicTable ul li i.date {\n  display: inline-block;\n  height: 30px;\n  background: url(" + __webpack_require__(1529) + ") no-repeat 3px 50%;\n}\n.BIND_LAND_BTN {\n  padding: 10px;\n}\n.BIND_LAND_BTN li {\n  display: inline-block;\n  padding: 5px 10px;\n  border: #ddd solid 1px;\n  cursor: pointer;\n  margin: 10px;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.BIND_LAND_BTN li.active {\n  background: #e4e4e4;\n}\n.BIND_LAND_BTN li .icon-delete {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  display: none;\n}\n.BIND_LAND_BTN li:hover .icon-delete {\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 1529:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACPSURBVHja3JPdDYMwDIS/RFkirBIYgDnoMFmCbcIo/GxBH5pKFnKBUJ44ydLJztm+RDExxhbogQpY+cAIjpIzwAR0Nos95fBA74Q45M5fvoVW904cSAcT1brlT8gGdV7xTDRag6FgcNqzsIrn+sXvuwOn5MwJzkMthILBQW4w5/+QLjhYLPAClgviEejeAwCBmx7bk07M9gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1537:
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

/***/ 1545:
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

__webpack_require__(1546);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*选择地块-弹框*/
//兼容ie


var Winopen = function (_React$Component) {
    _inherits(Winopen, _React$Component);

    function Winopen(arg) {
        _classCallCheck(this, Winopen);

        var _this = _possibleConstructorReturn(this, (Winopen.__proto__ || Object.getPrototypeOf(Winopen)).call(this, arg));

        _this.state = {
            listArr: _this.props.selArr, /*地块信息*/
            selectId: _this.props.selId, /*选择过的地块*/
            status: _this.props.status /*选择select地块或编辑edit地块或查看view地块*/
        };

        return _this;
    }

    _createClass(Winopen, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var th = this;
            th.getAjax();
        }
        /*绑定html*/

    }, {
        key: "BIND_BLOCK",
        value: function BIND_BLOCK() {
            var th = this;
            var list = th.state.listArr;
            var status = th.state.status;
            return list.map(function (obj, index) {
                return _react2.default.createElement(
                    "div",
                    { key: obj.ID, className: "aBuiltSection", id: "section" + obj.ID },
                    _react2.default.createElement(
                        "h3",
                        { className: "aBuilt_Title" },
                        _react2.default.createElement(
                            "span",
                            null,
                            obj.Name
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "radioSpan" },
                            _react2.default.createElement("input", { type: "radio", name: 'radio' + obj.ID, checked: obj.IsAllDevel == 2, disabled: status == "view", defaultValue: "2", onChange: th.evAllOrParDev.bind(th, obj.ID) }),
                            "\u90E8\u5206\u5F00\u53D1"
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "radioSpan" },
                            _react2.default.createElement("input", { type: "radio", name: 'radio' + obj.ID, checked: obj.IsAllDevel == 1, disabled: status == "view", defaultValue: "1", onChange: th.evAllOrParDev.bind(th, obj.ID) }),
                            "\u5168\u90E8\u5F00\u53D1"
                        )
                    ),
                    _react2.default.createElement(
                        "table",
                        { className: obj.IsAllDevel == 0 ? "table builtAlertTable hide" : "table builtAlertTable" },
                        _react2.default.createElement(
                            "tbody",
                            null,
                            _react2.default.createElement(
                                "tr",
                                null,
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        obj.FieldList[0].label
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[0].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[0].edit == "+r", value: obj.FieldList[0].val == null ? "" : obj.FieldList[0].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[0].id) })
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        obj.FieldList[1].label
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[1].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[1].edit == "+r", value: obj.FieldList[1].val == null ? "" : obj.FieldList[1].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[1].id) })
                                ),
                                _react2.default.createElement("td", { colSpan: "2" })
                            ),
                            _react2.default.createElement(
                                "tr",
                                null,
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        obj.FieldList[2].label,
                                        "\uFF08\u33A1\uFF09"
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[2].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[2].edit == "+r", value: obj.FieldList[2].val == null ? "" : obj.FieldList[2].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[2].id) })
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            { className: "red" },
                                            "*"
                                        ),
                                        obj.FieldList[3].label,
                                        "\uFF08\u33A1\uFF09"
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[3].regExp, autoComplete: "off", id: obj.FieldList[3].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[3].edit == "+r", value: obj.FieldList[3].val == null ? "" : obj.FieldList[3].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[3].id) })
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            { className: "red" },
                                            "*"
                                        ),
                                        obj.FieldList[4].label,
                                        "\uFF08\u33A1\uFF09"
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[4].regExp, autoComplete: "off", id: obj.FieldList[4].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[4].edit == "+r", value: obj.FieldList[4].val == null ? "" : obj.FieldList[4].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[4].id) })
                                )
                            ),
                            _react2.default.createElement(
                                "tr",
                                null,
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            { className: "red" },
                                            "*"
                                        ),
                                        obj.FieldList[5].label,
                                        "\uFF08\u33A1\uFF09"
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[5].regExp, autoComplete: "off", id: obj.FieldList[5].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[5].edit == "+r", value: obj.FieldList[5].val == null ? "" : obj.FieldList[5].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[5].id) })
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            { className: "red" },
                                            "*"
                                        ),
                                        obj.FieldList[6].label,
                                        "\uFF08\u4E07\u5143\uFF09"
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[6].regExp, autoComplete: "off", id: obj.FieldList[6].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[6].edit == "+r", value: obj.FieldList[6].val == null ? "" : obj.FieldList[6].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[6].id) })
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement(
                                        "label",
                                        null,
                                        obj.FieldList[7].label,
                                        "\uFF08\u5143/\u33A1\uFF09"
                                    )
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[7].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[7].edit == "+r", value: obj.FieldList[7].val == null ? "" : obj.FieldList[7].val, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[7].id) })
                                )
                            )
                        )
                    )
                );
            });
        }
        /*input 校验*/

    }, {
        key: "evValiteInputbox",
        value: function evValiteInputbox() {
            setTimeout(function () {
                $(".comp-validatebox").each(function (index, ele) {
                    var eleDom = $(ele);
                    var isReadAt = eleDom.attr("readonly");

                    var regInforObj = JSON.parse(eleDom.attr("data-regExp"));

                    var allKeys = Object.keys(regInforObj);
                    var validTypeRule = [];
                    var valideRule = {
                        required: true
                    };

                    allKeys.forEach(function (vType) {
                        if (vType == "max") {
                            validTypeRule.push('number', 'max[' + regInforObj[vType] + ']');
                        }
                    });
                    if (validTypeRule.length > 0) {
                        valideRule.validType = validTypeRule;
                    }
                    eleDom.validatebox(valideRule);
                });
            }, 600);
        }
        /*input change*/

    }, {
        key: "evInputChange",
        value: function evInputChange(listId, fieldId, event) {
            var th = this;
            var list = th.state.listArr;
            var newList = [];
            var val = event.target.value;
            list.forEach(function (obj, index) {
                if (obj.ID == listId) {
                    obj.FieldList.forEach(function (feildObj, fIndex) {
                        if (feildObj.id == fieldId) {
                            feildObj.text = val;
                            feildObj.val = val;
                        }
                    });
                    /*计算*/
                    obj.FieldList.forEach(function (feildObj, fIndex) {
                        if (feildObj.exec) {
                            var newVal = th.evCalcContent(feildObj.exec, obj.FieldList);
                            var newCalArr = newVal.toString().split(".");
                            var decVal = "";
                            if (newCalArr.length == 2) {
                                decVal = '.' + newCalArr[1].slice(0, 6);
                            }
                            feildObj.text = newCalArr[0] + decVal;
                            feildObj.val = newCalArr[0] + decVal;
                        }
                    });
                }
                newList.push(obj);
            });
            th.setState({
                listArr: newList
            });
        }
        /*计算值，返回计算后的数组*/

    }, {
        key: "evCalBackArr",
        value: function evCalBackArr(filterArr) {
            var newArr = [];
            var th = this;

            /*计算*/
            filterArr.forEach(function (obj, index) {
                obj.FieldList.forEach(function (feildObj, fIndex) {
                    if (feildObj.exec) {
                        var newVal = th.evCalcContent(feildObj.exec, obj.FieldList);
                        var newCalArr = newVal.toString().split(".");
                        var decVal = "";
                        if (newCalArr.length == 2) {
                            decVal = '.' + newCalArr[1].slice(0, 6);
                        }
                        feildObj.text = newCalArr[0] + decVal;
                        feildObj.val = newCalArr[0] + decVal;
                    }
                });
                newArr.push(obj);
            });
            return newArr;
        }
        /*计算表达式*/

    }, {
        key: "evCalcContent",
        value: function evCalcContent(execStr, obj) {
            var val = "";
            obj.forEach(function (item, index) {
                var regStr = new RegExp("{" + item.id + "}", "ig");
                execStr = execStr.replace(regStr, Number(item.val));
            });
            var calVal = eval(execStr);
            return calVal == Infinity || isNaN(calVal) ? 0 : calVal;
        }
        /*点击全部开发或部分开发*/

    }, {
        key: "evAllOrParDev",
        value: function evAllOrParDev(listId, event) {
            var th = this;
            var list = th.state.listArr;
            var newList = [];
            var val = event.target.value;

            if (!$("#form_aBuiltLand").form("validate")) {
                $("#errorTip").html("输入的数据有错误,请改正后再切换全部开发");
                return false;
            } else {
                $("#errorTip").html("");
            }

            list.forEach(function (obj, index) {
                if (obj.ID == listId) {
                    obj.IsAllDevel = val;
                    if (val == 1) {
                        obj.FieldList.forEach(function (fObj, fIndex) {
                            var maxVal = iss.getRegExpkVal(fObj.regExp, "max");
                            var editS = fObj.edit;
                            if (editS == "+w" && maxVal != "") {
                                fObj.val = maxVal;
                                fObj.text = maxVal;
                            }
                        });
                    }
                    if (val == 0 || val == 1) {
                        $("#section" + obj.ID + " .comp-validatebox").validatebox("disableValidation");
                    } else {
                        $("#section" + obj.ID + " .comp-validatebox").validatebox("enableValidation");
                    }
                }
                newList.push(obj);
            });

            th.setState({
                listArr: th.evCalBackArr(newList)
            });

            th.props.callback(newList);
        }
    }, {
        key: "getAjax",
        value: function getAjax() {
            var th = this;
            /*如果是编辑，则不请求数据*/
            var status = th.state.status;
            var listArr = th.state.listArr;

            th.setState({
                "listArr": th.evCalBackArr(listArr)
            });
            th.evValiteInputbox();
        }
    }, {
        key: "render",
        value: function render() {
            var th = this;

            return _react2.default.createElement(
                "div",
                { className: "aBuiltMain" },
                _react2.default.createElement(
                    "form",
                    { id: "form_aBuiltLand" },
                    this.BIND_BLOCK()
                )
            );
        }
    }]);

    return Winopen;
}(_react2.default.Component);

{/* <div className="aBuiltSection">
       <div className="aBuilt_Title">
           <span>世界城-A地块</span>
           <span className="radioSpan"><input type="radio" name="lang" defaultValue="01"/>全部开发</span>
           <span className="radioSpan"><input type="radio" name="lang" defaultValue="02"/>部分开发</span>
       </div>
       <ul className="aBuilt_Con">
           <li><label htmlFor="">地块名称</label><input type="text" id="" defaultValue="地块一"/></li>
           <li><label>地块编码</label><input type="text" defaultValue="地块一"/></li>
           <li><label>地块名称</label><input type="text" defaultValue="地块一"/></li>
           <li><label>地块编码</label><input type="text" defaultValue="地块一"/></li>
           <li><label>地块编码</label><input type="text" defaultValue="地块一"/></li>
       </ul>
       <ul className={obj.IsAllDevel==0? "aBuilt_Con hide":"aBuilt_Con"}>
           {
               obj.FieldList.map((fieldObj,fIndex)=>{
                   return <li key={fieldObj.id}>
                               <label><span className={fieldObj.regExp.length>3&&!fieldObj.exec?"red":"hide"}>*</span>{fieldObj.label}</label>
                               <input type="text" className={fieldObj.regExp.length>3&&!fieldObj.exec?"comp-validatebox":""} id={fieldObj.id+'_'+obj.ID} data-regExp={fieldObj.regExp} autoComplete="off" readOnly={obj.IsAllDevel==0||obj.IsAllDevel==1||obj.IsAllDevel==2&&fieldObj.edit=="+r"} value={fieldObj.val==null?"":fieldObj.val} onChange={th.evInputChange.bind(th,obj.ID,fieldObj.id)}/>
                               <span className="unitSpan">{fieldObj.unit?fieldObj.unit:""}</span>
                           </li>
               })
           }
       </ul>
    </div> */}

exports.default = Winopen;

/***/ }),

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1547);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./aBuilt.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./aBuilt.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*aBuilt.less文件*/\n.modal-title {\n  font-size: 16px;\n}\n.aBuiltMain {\n  padding: 0 20px 20px;\n  font-size: 12px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  height: 400px;\n}\n.aBuiltMain .aBuilt_Title {\n  width: 100%;\n  font-size: 14px;\n  margin: 12px 0 2px;\n  line-height: 40px;\n  border-bottom: 1px solid #c9c9c9;\n}\n.aBuiltMain .aBuilt_Title span {\n  display: inline-block;\n}\n.aBuiltMain .aBuilt_Title span:first-child {\n  line-height: 38px;\n  margin-right: 16px;\n  padding-right: 10px;\n  border-bottom: 2px solid #31395d;\n}\n.aBuiltMain .aBuilt_Title span.radioSpan {\n  float: right;\n  margin-left: 16px;\n}\n.aBuiltMain .aBuilt_Title span.radioSpan input[type=radio] {\n  margin: 0;\n  vertical-align: middle;\n}\n.aBuiltMain .aBuilt_Con {\n  height: auto;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.aBuiltMain .aBuilt_Con li {\n  position: relative;\n  float: left;\n  width: 33.33%;\n  min-height: 30px;\n  line-height: 30px;\n  margin-top: 5px;\n  padding-left: 110px;\n  padding-right: 5px;\n}\n.aBuiltMain .aBuilt_Con li label {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 110px;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  font-weight: normal;\n  margin-bottom: 0px;\n  padding-right: 6px;\n  text-align: right;\n}\n.aBuiltMain .aBuilt_Con li input {\n  border: #ddd solid 1px;\n  width: 100%;\n  max-width: 160px;\n  height: 28px;\n}\n.aBuiltMain .aBuilt_Con li input[readonly] {\n  background: #ddd;\n}\n.aBuiltMain .aBuilt_Con li .unitSpan {\n  position: relative;\n  right: 0;\n  top: 50%;\n  padding-left: 3px;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  text-align: left;\n}\n.aBuiltMain .aBuilt_Con li:nth-child(2) {\n  width: 66.67%;\n}\n.aBuiltMain .aBuilt_Con.hide {\n  display: none;\n}\n.aBuiltMain .builtAlertTable {\n  margin-top: 10px;\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.aBuiltMain .builtAlertTable tr {\n  background: #fff;\n}\n.aBuiltMain .builtAlertTable td {\n  border: none;\n  vertical-align: middle;\n  text-align: left;\n  padding: 0;\n}\n.aBuiltMain .builtAlertTable thead tr {\n  border-top: 1px solid #ccc;\n  background: #f5f5f5;\n}\n.aBuiltMain .builtAlertTable tbody label {\n  font-weight: normal;\n  margin-bottom: 0px;\n  padding-right: 6px;\n  text-align: right;\n  width: 100%;\n}\n.aBuiltMain .builtAlertTable tbody input {\n  border: none;\n  height: 28px;\n  width: auto;\n  width: -moz-calc(96%);\n  width: -webkit-calc(96%);\n  width: calc(96%);\n  margin: 2px;\n  border: 1px solid #ddd;\n}\n.aBuiltMain .builtAlertTable tbody input[readonly] {\n  background: #eee;\n}\n.aBuiltMain .builtAlertTable.hide {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1553:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1554);
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

/***/ 1554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*stageView.less*/\n.stageVWrap {\n  height: auto;\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n.stageVWrap .stageVLeft {\n  float: left;\n  width: 66.6%;\n  margin-top: 10px;\n  padding-right: 20px;\n}\n.stageVWrap .stageVLeft .stageVTable {\n  width: 100%;\n  font-size: 12px;\n  text-align: center;\n}\n.stageVWrap .stageVLeft .stageVTable td {\n  border: 1px solid #ddd;\n  padding: 6px;\n}\n.stageVWrap .stageVLeft .stageVTable .stageViewTitle {\n  color: #064a8b;\n}\n.stageVWrap .stageVLeft .stageVTable .stageViewCon {\n  color: #333;\n}\n.stageVWrap .stageVRight {\n  float: right;\n  margin-top: 10px;\n  width: 33.3%;\n  height: 295px;\n  border: 1px solid #dddddd;\n}\n", ""]);

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

__webpack_require__(52);

__webpack_require__(58);

__webpack_require__(1553);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 分期信息*/
//兼容ie


var StageInforView = function (_React$Component) {
    _inherits(StageInforView, _React$Component);

    function StageInforView(arg) {
        _classCallCheck(this, StageInforView);

        var _this = _possibleConstructorReturn(this, (StageInforView.__proto__ || Object.getPrototypeOf(StageInforView)).call(this, arg));

        _this.state = {
            "STAGEVERSIONID": _this.props.versionId,
            "PROJECTID": "",
            "CASENAME": "",
            "STAGENAME": "",
            "PROJECTCOMPANYNAME": "",
            "STAGECODE": "",
            "STAGEID": "",
            "STATUS": "",
            "ISELFPRODUCTTYPE": "",
            "TRADERMODE": "",
            "MERGEWAY": "",
            "PROJECTTYPE": "",
            "TAXINGWAY": "",
            "PLANSTAGE": "",
            "PROJECTNAME": "",
            "PRINCIPALNAME": "",
            "PRINCIPAL": "",
            "ID": "",
            "GROUPNUMBER": "",
            "STAGECREATEDATE": "1900-01-01T00:00:00",
            "STAGEUPDATEDATE": "1900-01-01T00:00:00",
            "STARTDATE": "1900-01-01T00:00:00",
            "mapUrl": iss.mapEUrl,
            "iframeURL1": "", /*分期总图*/
            "iframeURL2": "" /*推盘图*/
        };
        return _this;
    }

    _createClass(StageInforView, [{
        key: "getAjax",
        value: function getAjax(callback) {
            var th = this;
            var status = th.props.status;
            var versionId = th.state.STAGEVERSIONID;
            var json = {};
            if (status == "edit") {
                json.Id = versionId;
                json.reqtype = "Edit";
            } else if (status == "upgrade") {
                json.versionId = versionOldId;
                json.reqtype = "Upgrade";
            }
            iss.ajax({ //获取数据
                type: "post",
                url: "/Stage/IGetInitInfo",
                data: json,
                success: function success(res) {
                    var basicFormInfo = res.rows.BaseFormInfo;
                    th.props.basicCallBack(basicFormInfo);

                    var STAGESELFPRODUCTS = basicFormInfo.STAGESELFPRODUCTS,
                        ISELFPRODUCTTYPE = res.rows.SelectOptions.ISELFPRODUCTTYPE,
                        str = STAGESELFPRODUCTS.join(",");
                    var valFilter = [];
                    ISELFPRODUCTTYPE.forEach(function (obj) {
                        if (obj.val != "" && str.indexOf(obj.val) > -1) {
                            valFilter.push(obj.label);
                        } else if (obj.val == "") {
                            valFilter = ["无"];
                        }
                    });
                    var MERGEWAY = res.rows.SelectOptions.MERGEWAY,
                        MERGEWAYSTR = basicFormInfo.MERGEWAY || "",
                        MERGEWAYVAL = "";
                    MERGEWAY.forEach(function (obj) {
                        if (MERGEWAYSTR.indexOf(obj.val) > -1) {
                            MERGEWAYVAL = obj.label;
                        }
                    });

                    var PLANSTAGE = res.rows.SelectOptions.PLANSTAGE,
                        PLANSTAGESTR = basicFormInfo.PLANSTAGE || "",
                        PLANSTAGEVAL = "";
                    PLANSTAGE.forEach(function (obj) {
                        if (PLANSTAGESTR.indexOf(obj.val) > -1) {
                            if (obj.label == "请选择") {
                                PLANSTAGEVAL = "";
                            } else {
                                PLANSTAGEVAL = obj.label;
                            }
                        }
                    });

                    var STATUS = "";
                    if (basicFormInfo.STATUS == "" || basicFormInfo.STATUS == null) {
                        STATUS = "";
                    } else {
                        //STATUS=res.rows.SelectOptions.STATUS[basicFormInfo.STATUS].label;
                        res.rows.SelectOptions.STATUS.forEach(function (obj, index) {
                            if (basicFormInfo.STATUS == obj.val) {
                                STATUS = obj.label;
                                return false;
                            }
                        });
                    }

                    var TRADERMODE = "";
                    if (basicFormInfo.TRADERMODE == "" || basicFormInfo.TRADERMODE == null) {
                        TRADERMODE = "";
                    } else {
                        TRADERMODE = res.rows.SelectOptions.TRADERMODE[basicFormInfo.TRADERMODE].label;
                    }

                    var PROJECTTYPE = "";
                    if (basicFormInfo.PROJECTTYPE == "" || basicFormInfo.PROJECTTYPE == null) {
                        PROJECTTYPE = "";
                    } else {
                        PROJECTTYPE = res.rows.SelectOptions.PROJECTTYPE[basicFormInfo.PROJECTTYPE].label;
                    }

                    var TAXINGWAY = "";
                    if (basicFormInfo.TAXINGWAY == "" || basicFormInfo.TAXINGWAY == null) {
                        TAXINGWAY = "";
                    } else {
                        TAXINGWAY = res.rows.SelectOptions.TAXINGWAY[basicFormInfo.TAXINGWAY].label;
                    }

                    th.setState({
                        "CASENAME": basicFormInfo.CASENAME, //分期案名
                        "STAGENAME": basicFormInfo.STAGENAME, //分期名称
                        "PROJECTCOMPANYNAME": basicFormInfo.PROJECTCOMPANYNAME, //项目公司名称id
                        "PROJECTCOMPANYEMPNAME": basicFormInfo.PROJECTCOMPANYEMPNAME, //项目公司名称
                        "STAGEID": basicFormInfo.STAGEID,
                        "STAGECREATEDATE": basicFormInfo.STAGECREATEDATE, //分期创建日期
                        "STAGEUPDATEDATE": basicFormInfo.STAGEUPDATEDATE, //分期更新日期
                        "STARTDATE": basicFormInfo.STARTDATE, //启动开发时间
                        "STAGECODE": basicFormInfo.STAGECODE, //分期编码
                        "STATUS": STATUS, //分期状态
                        "ISELFPRODUCTTYPE": basicFormInfo.ISELFPRODUCTTYPE,
                        "TRADERMODE": TRADERMODE, //操盘方式
                        "MERGEWAY": MERGEWAYVAL, //并表方式
                        "PROJECTTYPE": PROJECTTYPE, //项目类型
                        "TAXINGWAY": TAXINGWAY, //项目计税方式
                        "PLANSTAGE": PLANSTAGEVAL, //计划管控阶段
                        "PROJECTID": basicFormInfo.PROJECTID,
                        "PROJECTNAME": basicFormInfo.PROJECTNAME, //项目名称
                        "ID": basicFormInfo.ID,
                        "PRINCIPALNAME": basicFormInfo.PRINCIPALNAME,
                        "PRINCIPAL": basicFormInfo.PRINCIPAL,
                        "GROUPNUMBER": basicFormInfo.GROUPNUMBER, //组团数量
                        "STAGESELFPRODUCTS": valFilter.join(",") //自持业态

                        //"TRADERMODE":res.rows.SelectOptions.TRADERMODE[basicFormInfo.Project.TRADERMODE].label,//操盘方式                    
                    }, function (arg) {
                        if (callback) {
                            callback();
                        }
                    });
                },
                error: function error(e) {}
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var th = this;
            $(function () {
                th.getAjax(function (arg) {
                    th.BIND_ONLOAD(); //加载分期总图，推盘图
                });
            });
        }
    }, {
        key: "BIND_ONLOAD",
        value: function BIND_ONLOAD(event) {
            var th = this;
            iss.ajax({ //获取数据 判断有无分期总图、推盘图
                type: "post",
                url: "/Common/IsHaveXMView",
                data: {
                    typeinfo: "2",
                    strId: th.state.STAGEVERSIONID
                },
                success: function success(res) {
                    var src_one = "";
                    var src_two = "";
                    if (res["rows"] == 0) {
                        src_one = "../../Content/img/xmViewError.png";
                        src_two = "../../Content/img/xmViewError.png";
                    } else {
                        src_one = iss.mapEUrl + "/MAP/SHOWSTAGE?stage_id=" + th.state.STAGEVERSIONID + "&stage_map_id=stage" + th.state.STAGEVERSIONID;
                        src_two = iss.mapEUrl + "/Map/PUSHPLATE?stage_id=" + th.state.STAGEVERSIONID + "&stage_map_id=stage" + th.state.STAGEVERSIONID;
                        iss.evCarouselActive(th, src_two);
                    }
                    th.setState({
                        iframeURL1: src_one,
                        iframeURL2: src_two
                    });
                },
                error: function error(e) {}
            });
        } //加载iframe url 分期总图，推盘图

    }, {
        key: "xmViewError",
        value: function xmViewError(event) {
            // this.attr("src","../img/xmViewError.png")
            $(event.target).attr("src", "../../Content/img/xmViewError.png");
        }
    }, {
        key: "BIND_mapsStage",
        value: function BIND_mapsStage() {
            window.open(iss.mapEUrl + "/Map/Stage?stage_id=" + this.state.STAGEVERSIONID + "&stage_map_id=stage" + this.state.STAGEVERSIONID);
        } //点击分期总图预览

    }, {
        key: "BIND_mapsTp",
        value: function BIND_mapsTp() {
            window.open(iss.mapEUrl + "/Map/PUSHPLATE?stage_id=" + this.state.STAGEVERSIONID + "&stage_map_id=stage" + this.state.STAGEVERSIONID);
        } //点击推盘图预览

    }, {
        key: "render",
        value: function render() {
            var me = this;
            var th = this.state;
            var STAGECREATEDATE = th.STAGECREATEDATE == "1900-01-01T00:00:00" ? "" : this.state.STAGECREATEDATE.split("T")[0];
            var STAGEUPDATEDATE = th.STAGEUPDATEDATE == "1900-01-01T00:00:00" ? "" : this.state.STAGEUPDATEDATE.split("T")[0];
            var STARTDATE = th.STARTDATE == "1900-01-01T00:00:00" ? "" : this.state.STARTDATE.split("T")[0];
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
                            "\u5206\u671F\u4FE1\u606F"
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
                                    _react2.default.createElement("img", { className: "fullScreenIcon", src: "../../Content/img/fullScreen.png", onClick: this.BIND_mapsStage.bind(this), title: "\u5168\u5C4F" }),
                                    _react2.default.createElement("iframe", { ref: "iframe1", id: "iframe1", src: this.state.iframeURL1, onError: this.xmViewError.bind(this), frameBorder: "0", marginHeight: "0", marginWidth: "0", scrolling: "no", width: "100%", height: "291" })
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "item" },
                                    _react2.default.createElement("img", { className: "fullScreenIcon", src: "../../Content/img/fullScreen.png", onClick: this.BIND_mapsTp.bind(this), title: "\u5168\u5C4F" }),
                                    _react2.default.createElement("iframe", { ref: "iframe2", id: "iframe2", src: this.state.iframeURL2, onError: this.xmViewError.bind(this), frameBorder: "0", marginHeight: "0", marginWidth: "0", scrolling: "no", width: "100%", height: "291" })
                                )
                            ),
                            _react2.default.createElement("a", { className: "carousel-control left glyphicon glyphicon-menu-left", href: "#myCarousel",
                                "data-slide": "prev" }),
                            _react2.default.createElement("a", { className: "carousel-control right glyphicon glyphicon-menu-right", href: "#myCarousel",
                                "data-slide": "next" })
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
                                        "\u5206\u671F\u540D\u79F0"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.STAGENAME
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u5206\u671F\u6848\u540D"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.CASENAME
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u5206\u671F\u7F16\u7801"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.STAGECODE
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u5206\u671F\u72B6\u6001"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.STATUS
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u81EA\u6301\u4E1A\u6001"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.STAGESELFPRODUCTS
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
                                        "\u9879\u76EE\u516C\u53F8\u540D\u79F0"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.PROJECTCOMPANYEMPNAME
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u8D1F\u8D23\u4EBA"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.PRINCIPALNAME
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u6743\u76CA\u6BD4\u4F8B"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        me.props.equityTxt
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u5E76\u8868\u65B9\u5F0F"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.MERGEWAY
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u7C7B\u578B"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.PROJECTTYPE
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u9879\u76EE\u8BA1\u7A0E\u65B9\u5F0F"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.TAXINGWAY
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u5206\u671F\u521B\u5EFA\u65E5\u671F"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        STAGECREATEDATE
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u5206\u671F\u66F4\u65B0\u65E5\u671F"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        STAGEUPDATEDATE
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u8BA1\u5212\u7BA1\u63A7\u9636\u6BB5"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.PLANSTAGE
                                    )
                                ),
                                _react2.default.createElement(
                                    "tr",
                                    null,
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u542F\u52A8\u5F00\u53D1\u65F6\u95F4"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        STARTDATE
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewTitle" },
                                        "\u7EC4\u56E2\u6570\u91CF"
                                    ),
                                    _react2.default.createElement(
                                        "td",
                                        { className: "stageViewCon" },
                                        th.GROUPNUMBER
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return StageInforView;
}(_react2.default.Component);

exports.default = StageInforView;

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

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(52);

__webpack_require__(58);

__webpack_require__(1579);

__webpack_require__(1527);

var _toolsDynamicTable = __webpack_require__(1526);

var _toolsDynamicTable2 = _interopRequireDefault(_toolsDynamicTable);

var _componentIndicatorsWinopen = __webpack_require__(1545);

var _componentIndicatorsWinopen2 = _interopRequireDefault(_componentIndicatorsWinopen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 分期规划条件指标和分期占用土地*/
//兼容ie
/*表格*/
//分期规划条件指标


//弹出选择地块

var StageMasView = function (_React$Component) {
    _inherits(StageMasView, _React$Component);

    function StageMasView(arg) {
        _classCallCheck(this, StageMasView);

        var _this = _possibleConstructorReturn(this, (StageMasView.__proto__ || Object.getPrototypeOf(StageMasView)).call(this, arg));

        _this.state = {
            versionId: _this.props.versionId, /*版本id*/
            landList: [], /*地块信息*/
            landStageObj: {}, /*相关分期*/
            sumLandData: [] /*汇总信息*/
        };
        return _this;
    }
    /*查看地块信息*/


    _createClass(StageMasView, [{
        key: 'evViewLandInfor',
        value: function evViewLandInfor(obj) {
            var th = this;
            var selArr = [obj];
            iss.Alert({
                title: "查看分期占用土地",
                width: 1000,
                height: 400,
                content: '<div id="alertBuiltBlock"></div>'
            });

            _reactDom2.default.render(_react2.default.createElement(_componentIndicatorsWinopen2.default, { guid: '', selId: '', selArr: selArr, status: 'view', callback: th.evCallBackLand.bind(th) }), document.querySelector("#alertBuiltBlock"));
        }
        /*地块查看回调函数*/

    }, {
        key: 'evCallBackLand',
        value: function evCallBackLand() {}
        /*汇总地块信息*/

    }, {
        key: 'evSunLand',
        value: function evSunLand(listData) {
            var th = this;
            iss.ajax({
                url: "/Stage/IRetLandDynaticFieldSum",
                type: "post",
                data: {
                    data: JSON.stringify(listData)
                },
                success: function success(d) {
                    th.setState({
                        sumLandData: d.rows
                    });
                }
            });
        }
        /*加载地块信息*/

    }, {
        key: 'evLoadLand',
        value: function evLoadLand(projectId) {
            var th = this;
            iss.ajax({
                url: "/Stage/IGetLandQuotaByVersionId",
                type: "get",
                data: {
                    versionId: th.state.versionId,
                    projectid: projectId
                },
                success: function success(d) {
                    var landArr = d.rows;
                    th.setState({
                        landList: landArr
                    });
                    th.evSunLand(landArr);
                    th.props.callback(landArr);
                }
            });
        }
        /*加载地块相关分期*/

    }, {
        key: 'evIGetLandStageShow',
        value: function evIGetLandStageShow(projectId) {
            var th = this;
            iss.ajax({
                url: "/Stage/IGetLandStageShow",
                type: "get",
                data: {
                    projectid: projectId
                },
                success: function success(d) {
                    th.setState({
                        landStageObj: d.rows
                    });
                }
            });
        }
        /*渲染地块信息*/

    }, {
        key: 'loadLandHtml',
        value: function loadLandHtml() {
            var th = this;
            var landList = th.state.landList;
            var landStageObj = th.state.landStageObj;

            return landList.map(function (obj, index) {
                return _react2.default.createElement(
                    'tr',
                    { id: obj.ID, key: obj.ID },
                    _react2.default.createElement(
                        'td',
                        null,
                        index + 1
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        obj.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        obj.FieldList[1].val
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        obj.IsAllDevel == 1 ? "是" : "否"
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        obj.FieldList[2].val
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        obj.FieldList[5].val
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        landStageObj[obj.ID]
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'funCla funCla_view', onClick: th.evViewLandInfor.bind(th, obj) },
                            '\u67E5\u770B'
                        )
                    )
                );
            });
        }
        /*dom渲染完成*/

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var th = this;
            $(function () {
                $(document).off("landFirstLoad").on("landFirstLoad", function (e, projectId) {
                    th.setState({
                        projectId: projectId
                    });
                    th.evLoadLand(projectId);
                    th.evIGetLandStageShow(projectId);
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var th = this;
            return _react2.default.createElement(
                'div',
                { id: 'stageMasView' },
                _react2.default.createElement(
                    'h3',
                    { className: 'boxGroupTit' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u5206\u671F\u89C4\u5212\u6761\u4EF6\u6307\u6807'
                        )
                    )
                ),
                _react2.default.createElement(_toolsDynamicTable2.default, { pid: iss.guid(), DynamicData: th.state.sumLandData, CallBack: '' }),
                _react2.default.createElement(
                    'h3',
                    { className: 'boxGroupTit' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u5206\u671F\u5360\u7528\u571F\u5730'
                        )
                    )
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table builtTable' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5E8F\u53F7'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5730\u5757\u540D\u79F0'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5730\u5757\u7F16\u53F7'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u5168\u90E8\u5F00\u53D1'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u603B\u7528\u5730\u9762\u79EF\uFF08\u33A1\uFF09'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u8BA1\u5BB9\u5EFA\u7B51\u9762\u79EF\uFF08\u33A1\uFF09'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u76F8\u5173\u5206\u671F'
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        th.loadLandHtml(th)
                    )
                )
            );
        }
    }]);

    return StageMasView;
}(_react2.default.Component);

exports.default = StageMasView;

/***/ }),

/***/ 1579:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1580);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./table.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./table.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*table.less文件*/\n.builtTable {\n  margin-top: 10px;\n  font-size: 12px;\n  /*功能按钮*/\n  /*编辑*/\n  /*删除*/\n  /*查看*/\n}\n.builtTable thead tr td,\n.builtTable tbody tr td {\n  border: #ddd 1px solid;\n  vertical-align: middle;\n  text-align: center;\n}\n.builtTable thead tr {\n  border-top: 1px solid #ddd;\n  background: #f5f5f5;\n}\n.builtTable tbody tr {\n  background: #fff;\n}\n.builtTable tbody tr td {\n  padding: 4px;\n}\n.builtTable .funCla {\n  margin: 0 4px;\n}\n.builtTable .funCla_edit {\n  padding: 1px 2px;\n}\n.builtTable .funCla_edit {\n  padding: 1px 2px;\n}\n.builtTable .funCla_view {\n  padding: 1px 2px;\n}\n", ""]);

// exports


/***/ })

});