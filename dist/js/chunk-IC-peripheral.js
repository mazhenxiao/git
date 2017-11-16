webpackJsonp([21],{

/***/ 1520:
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 外设条件 适用于非当前模块逻辑
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//兼容ie
__webpack_require__(1608);

var ICPeripheral = function (_React$Component) {
    _inherits(ICPeripheral, _React$Component);

    function ICPeripheral(arg) {
        _classCallCheck(this, ICPeripheral);

        var _this = _possibleConstructorReturn(this, (ICPeripheral.__proto__ || Object.getPrototypeOf(ICPeripheral)).call(this, arg));

        _this.state = {
            listData: [], //显示数据
            current: []
        };
        _this.dataKey = ""; //dataKey
        _this.id = ""; //地块id
        _this.dataBaseInfo = []; //基础数据
        _this.dataGetInfo = []; //获取数据，新数据并入
        window["iframeCallback"] = _this.iframeCallback.bind(_this); //与父页面数据通信
        return _this;
    }

    _createClass(ICPeripheral, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.dataKey = this.props.location.query["dataKey"];
            this.id = this.props.location.query["currentID"];
            this.GET_ExternalAjaxFirst(); //ajax获取数据
        }
    }, {
        key: "iframeCallback",
        value: function iframeCallback(da, $ele) {
            //父页面点击ok回掉
            var url = "/Project/ISaveExternal"; //保存数据url
            var th = this,
                data = th.state.listData;
            data.forEach(function (ee, ii) {
                if (!ee["LandId"]) {
                    ee["LandId"] = th.id;
                }

                ee["FieldList"].forEach(function (eee, iii) {
                    //过滤数据
                    delete eee["regExp"];
                });
            });

            var json = JSON.stringify([{
                "LandId": th.id,
                "ExternalData": data
            }]);

            iss.ajax({
                type: "POST",
                url: url,
                dataType: "JSON",
                data: {
                    "projectId": th.dataKey,
                    "externalInfoJson": json
                },
                success: function success(da) {
                    top.iss.popover({ content: "保存成功", type: 2 });
                    $ele.modal("hide");
                },
                error: function error(E) {
                    top.iss.popover({ content: "保存失败", type: 1 });
                    $ele.modal("hide");
                }
            });
        }
    }, {
        key: "CHECK_APPRAL",
        value: function CHECK_APPRAL() {
            //查询地块是否存在不存在则给新的
            var th = this;
            var data = this.dataGetInfo.filter(function (el, ind) {
                if (el["LandId"] == th.id) {
                    return el;
                }
            });

            if (!data.length) {
                var _data = JSON.parse(th.dataBaseInfo);
                this.dataGetInfo.push({ "LandId": th.id, "ExternalData": _data });
                this.setState({
                    listData: _data,
                    current: _data[0],
                    activeID: _data[0]["QuotaGroup"] //当前激活
                });
            } else {
                this.setState({
                    listData: data[0]["ExternalData"],
                    current: data[0]["ExternalData"][0],
                    activeID: data[0]["ExternalData"][0]["QuotaGroup"] //当前激活
                });
            }
        }
    }, {
        key: "GET_ExternalAjaxFirst",
        value: function GET_ExternalAjaxFirst() {
            //获取空数据用于新增地块时
            var url = "/Project/INewLandExternalInfo"; //空数据
            var url2 = "/Project/ILandsExternalInfo"; //存在数据

            var th = this;
            var projectId = this.dataKey;
            //判断是否内存有数据
            var static_data = top.sessionStorage.getItem("$$dataKey-" + projectId + "-static");
            // let dynamic_data = top.sessionStorage.getItem(`$$dataKey-${projectId}-dynamic`);
            if (static_data) {
                //判断如果获取过数据则不再获取
                th.dataBaseInfo = top.sessionStorage.getItem("$$dataKey-" + projectId + "-static");
                //th.dataGetInfo = JSON.parse(top.sessionStorage.getItem(`$$dataKey-${projectId}-dynamic`));
                // th.CHECK_APPRAL();
                //  return
            }
            var static_promise = new Promise(function (resolve, reject) {
                if (static_data) {
                    resolve();
                    return;
                }
                iss.ajax({
                    url: url,
                    data: { projectId: projectId },
                    success: function success(da) {
                        var str = da["rows"] ? JSON.stringify(da["rows"]) : "";
                        th.dataBaseInfo = str.replace(/"LandId"\:""/ig, '"LandId":"' + th.id + '"');
                        top.sessionStorage.setItem("$$dataKey-" + projectId + "-static", str); //获取过数据存入内存
                        resolve();
                    },
                    error: function error() {
                        reject();
                    }
                });
            });
            var dynamic_promise = new Promise(function (resolve, reject) {
                iss.ajax({ //已有外设条件
                    url: url2,
                    data: { projectId: projectId },
                    success: function success(da) {
                        if (da["rows"] && da["rows"].length) {

                            th.dataGetInfo = da["rows"];
                            //top.sessionStorage.setItem(`$$dataKey-${projectId}-dynamic`, JSON.stringify(th.dataGetInfo));//获取过数据存入内存
                        }
                        resolve();
                    },
                    error: function error() {
                        reject();
                    }
                });
            });

            Promise.all([static_promise, dynamic_promise]).then(function (arg) {
                th.CHECK_APPRAL();
            }, function (arg) {
                console.log(arg);
            });
        }
    }, {
        key: "EVENT_CLICK_UPDATE",
        value: function EVENT_CLICK_UPDATE(da) {
            //上传
            var url = "../../Project/UpLoadFile"; //上传
            var url2 = "../../Project/IGetAttachmentsByItemId"; //获取已上传
            var promise1 = new Promise(function (resolve, reject) {
                iss.ajax({
                    url: url2,
                    data: { "itemId": da.valueId },
                    success: function success(da) {
                        if (da && da["rows"]) {
                            resolve(da["rows"]);
                        }
                        resolve("");
                    },
                    error: function error(e) {
                        reject();
                    }
                });
            });
            promise1.then(function (arg) {

                top.iss.upload({
                    server: url,
                    content: arg,
                    fileVal: "FileData",
                    formData: {
                        fileId: da.valueId
                    },
                    onReady: function onReady($el) {},
                    onUploadSucess: function onUploadSucess(f, render, opt) {
                        iss.ajax({
                            url: url2,
                            data: { "itemId": da.valueId },
                            success: function success(da) {
                                render(da["rows"] || []);
                            },
                            error: function error(e) {}
                        });
                    },
                    onRemove: function onRemove(pa, id) {

                        iss.ajax({
                            url: "../../Project/IDeleteAttachment",
                            data: { "attachmentId": id },
                            success: function success(da) {
                                pa.remove();
                            },
                            error: function error(e) {
                                console.log(e);
                            }
                        });
                    }
                });
            });
        }
    }, {
        key: "EVENT_CHANGE_TEXTAREA",
        value: function EVENT_CHANGE_TEXTAREA(da, ev) {
            //INPUT
            //  console.log(da);
            var list = this.state.current["FieldList"]; //所有地块
            list.forEach(function (ee, ind) {
                if (ee.valueId == da.valueId) {
                    ee.val = ev.target.value;
                    return;
                }
            });
            this.setState({
                current: this.state.current
            });
        }
    }, {
        key: "EVENT_CLICK_TAP",
        value: function EVENT_CLICK_TAP(da, ev) {
            //tab绑定事件
            this.setState({
                current: da,
                activeID: da["QuotaGroup"]
            });
        }
    }, {
        key: "Bind_data_tap",
        value: function Bind_data_tap() {
            var _this2 = this;

            var list = this.state.listData; //所有地块
            return list.map(function (el, ind) {
                return _react2.default.createElement(
                    "li",
                    { key: ind, className: el["QuotaGroup"] == _this2.state.activeID ? "active" : "", onClick: _this2.EVENT_CLICK_TAP.bind(_this2, el) },
                    el.QuotaName
                );
            });
        }
    }, {
        key: "Bind_List_Peripher",
        value: function Bind_List_Peripher() {
            var _this3 = this;

            //筛选数据
            var id = this.id,
                //地块id
            list = this.state.current; //所有地块

            if (list && list["FieldList"] && list["FieldList"].length) {
                return list["FieldList"].map(function (el, ind) {
                    return _react2.default.createElement(
                        "tr",
                        { key: ind },
                        _react2.default.createElement(
                            "td",
                            { className: "right", width: "300" },
                            el.label
                        ),
                        _react2.default.createElement(
                            "td",
                            { className: "left" },
                            el.type.toString().toLocaleUpperCase() == "TEXTAREA" ? _react2.default.createElement("textarea", { value: el.val || "", onChange: _this3.EVENT_CHANGE_TEXTAREA.bind(_this3, el), readOnly: el.edit.indexOf("+r") >= 0 }) : _react2.default.createElement("input", { type: "text", onChange: _this3.EVENT_CHANGE_TEXTAREA.bind(_this3, el), readOnly: el.edit.indexOf("+r") >= 0 })
                        ),
                        _react2.default.createElement(
                            "td",
                            { className: "center", width: "80" },
                            _react2.default.createElement(
                                "button",
                                { className: "btn btn-primary", onClick: _this3.EVENT_CLICK_UPDATE.bind(_this3, el) },
                                "\u4E0A\u4F20"
                            )
                        )
                    );
                });
            }
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "article",
                { className: "peripheral" },
                _react2.default.createElement(
                    "div",
                    { className: "peripheralList" },
                    _react2.default.createElement(
                        "ul",
                        null,
                        this.Bind_data_tap()
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "peripheralBox" },
                        _react2.default.createElement(
                            "table",
                            { className: "row", width: "100%" },
                            _react2.default.createElement(
                                "tbody",
                                null,
                                this.Bind_List_Peripher()
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ICPeripheral;
}(_react2.default.Component);

exports.default = ICPeripheral;

/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1609);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./IC_peripheral.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./IC_peripheral.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, ".peripheral {\n  position: relative;\n  top: 0;\n  left: 0;\n  color: #5b5b5b;\n  padding: 10px;\n}\n.peripheral .peripheralList ul {\n  height: 40px;\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 11;\n}\n.peripheral .peripheralList ul li {\n  position: relative;\n  color: #fff;\n  display: inline-block;\n  height: 40px;\n  cursor: pointer;\n  line-height: 40px;\n  border-left: none;\n  padding-left: 25px;\n  background: #337ab7;\n  border-bottom-color: transparent;\n}\n.peripheral .peripheralList ul li.active {\n  height: 40px;\n  background: skyblue;\n  font-size: 14px;\n}\n.peripheral .peripheralList ul li.active:after {\n  border-color: transparent transparent transparent skyblue;\n}\n.peripheral .peripheralList ul li:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 20px solid #fff;\n  border-color: transparent transparent transparent #fff ;\n}\n.peripheral .peripheralList ul li:after {\n  content: '';\n  position: absolute;\n  right: -40px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border: 20px solid #337ab7;\n  border-color: transparent transparent transparent #337ab7;\n  z-index: 9;\n}\n.peripheral .peripheralList .peripheralBox {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  border: #ccc solid 1px;\n  padding: 10px;\n  min-height: 300px;\n  background: #fdfdfd;\n}\n.peripheral .peripheralList .peripheralBox table tr td {\n  color: #5b5b5b;\n  padding: 5px 4.8px;\n  position: relative;\n  border: #ccc solid 1px;\n}\n.peripheral .peripheralList .peripheralBox table tr td:nth-child(1),\n.peripheral .peripheralList .peripheralBox table tr td:nth-child(2) {\n  border-right: none;\n}\n.peripheral .peripheralList .peripheralBox table tr td textarea {\n  width: 100%;\n  outline: none;\n  border: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 44px;\n}\n", ""]);

// exports


/***/ })

});