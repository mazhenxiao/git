webpackJsonp([10],{

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

__webpack_require__(44);

var _componentProcessApprovalTab = __webpack_require__(911);

var _componentProcessApprovalTab2 = _interopRequireDefault(_componentProcessApprovalTab);

var _componentNewProjectApprovalNode = __webpack_require__(969);

var _componentNewProjectApprovalNode2 = _interopRequireDefault(_componentNewProjectApprovalNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*审批信息*/

/**
 * 提交人    
 * 
 */
//兼容ie
//导航信息


//审批信息
__webpack_require__(944);

var ProcessApproval = function (_React$Component) {
    _inherits(ProcessApproval, _React$Component);

    function ProcessApproval(arg) {
        _classCallCheck(this, ProcessApproval);

        var _this = _possibleConstructorReturn(this, (ProcessApproval.__proto__ || Object.getPrototypeOf(ProcessApproval)).call(this, arg));

        _this.state = {
            remarkTxt: _this.props.location.query.remarkTxt || sessionStorage.getItem("currentApprovalText") || "", //备注内容
            textarea2: "", //审批人意见
            type: "readonly", //edit自己readonly审批人
            allSearchArg: _this.props.location.query, /*地址栏所有参数*/
            guid: _this.props.location.query.dataKey //页面传入表单guid
        };
        _this.AppState = { //临时存储
            text: "",
            approval: []
        };

        _this.currentApproval = {
            list: [], //切换记录
            comment: "" //textarea
            //暂存流程数据

        };return _this;
    }

    _createClass(ProcessApproval, [{
        key: "EVENT_CHANGE_TEXTAREA",
        value: function EVENT_CHANGE_TEXTAREA(ev) {
            var th = this;
            var txt = ev.target.value;
            var allSearchArg = th.state.allSearchArg;

            if (txt.length > 1000) {
                txt = txt.slice(0, 1000);
            }

            allSearchArg["remarkTxt"] = txt;
            th.setState({
                remarkTxt: txt,
                allSearchArg: allSearchArg
            });
            sessionStorage.setItem("currentApprovalText", txt);
        }
    }, {
        key: "render",
        value: function render() {
            var th = this;
            return _react2.default.createElement(
                "section",
                { className: "ProcessApproval" },
                _react2.default.createElement(_componentProcessApprovalTab2.default, { allSearchArg: th.state.allSearchArg, current: "ProcessApproval" }),
                _react2.default.createElement(
                    "h3",
                    { className: "boxGroupTit" },
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(
                            "span",
                            null,
                            "\u5BA1\u6279\u6D41\u7A0B"
                        )
                    )
                ),
                _react2.default.createElement(
                    "article",
                    null,
                    _react2.default.createElement(
                        "table",
                        { className: "table PATextarea", width: "100%" },
                        _react2.default.createElement(
                            "tbody",
                            null,
                            _react2.default.createElement(
                                "tr",
                                null,
                                _react2.default.createElement(
                                    "th",
                                    null,
                                    "\u5907\u6CE8"
                                ),
                                _react2.default.createElement(
                                    "td",
                                    null,
                                    _react2.default.createElement("textarea", { value: this.state.remarkTxt, onChange: this.EVENT_CHANGE_TEXTAREA.bind(this), placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u5185\u5BB9" })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "mgT10" },
                        _react2.default.createElement(_componentNewProjectApprovalNode2.default, { AppState: this.AppState, guid: this.state.guid, data: this.state.remarkTxt, allSearchArg: this.state.allSearchArg })
                    )
                )
            );
        }
    }]);

    return ProcessApproval;
}(_react2.default.Component);

exports.default = ProcessApproval;

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

__webpack_require__(44);

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

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(942);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(305)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./newProjectApproval.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./newProjectApproval.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(304)(undefined);
// imports


// module
exports.push([module.i, "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: lighter;\n}\ntextarea,\ntextarea:hover {\n  outline: none;\n}\n.boxGroupDetail {\n  padding: 0 0px;\n  font-size: 1rem;\n}\n.boxGroupDetail .textareaText {\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  resize: none;\n  border: 1px solid #dddddd;\n}\n.boxGroupDetail .boxGroupTitBig {\n  height: 40px;\n  line-height: 40px;\n  background: #0b4082;\n  color: #ffffff ;\n  padding: 0 20px 0 40px;\n  background-image: url(" + __webpack_require__(943) + ");\n  background-repeat: no-repeat;\n  background-position: 15px;\n}\n.boxGroupDetail .formTable2 tr td {\n  width: 202px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(3) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(5) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td {\n  width: 202px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(3) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(5) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable3 tr:nth-of-type(1) th {\n  background: #f5f5f5;\n  text-align: center;\n}\n.boxGroupDetail .formTable3 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  text-align: right;\n}\n.boxGroupDetail .formTable3 tr td .inputTextBox {\n  width: 100%;\n}\n.boxGroupDetail .formTableLabel {\n  width: 100%;\n  text-align: right;\n}\n.boxGroupDetail table > tbody > tr > td,\n.boxGroupDetail .table > tbody > tr > th,\n.boxGroupDetail .table > tfoot > tr > td,\n.boxGroupDetail .table > tfoot > tr > th,\n.boxGroupDetail .table > thead > tr > td,\n.boxGroupDetail .table > thead > tr > th {\n  padding: 2px !important;\n  border: 1px solid #dddddd;\n}\n.boxGroupDetail .tableProject {\n  margin-top: 20px;\n}\n.boxGroupDetail .btnBox {\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n}\n.boxGroupDetail .btnBox a {\n  display: inline-block;\n  padding: 0 12px;\n  height: 26px;\n  line-height: 26px;\n  background: #0b4082;\n  color: #ffffff ;\n  margin: 0 10px;\n}\n.boxGroupDetail .btnBox a:hover {\n  background: #f1a118;\n}\n.boxGroupDetail .approvalProcess tr th {\n  text-align: center;\n  background: #f5f5f5;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(1) {\n  width: 150px;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(3) {\n  width: 150px;\n  text-align: center;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(4) {\n  width: 150px;\n  text-align: center;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(5) {\n  width: 150px;\n  text-align: center;\n}\n.ApplyFlow li {\n  display: inline-block;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.ApplyFlow li::after {\n  display: inline-block;\n  content: \"->\";\n  margin-left: 3px;\n}\n.ApplyFlow li:last-child::after {\n  display: none;\n}\n.ApplyFlow li label {\n  font-weight: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ 943:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuUlEQVQ4T+2TXQ3CQBCE53MADnAADkBCJVQCEooDJFQCEiqhOKiEOhiyTSFtc3AlvLLJPd3Otz83h34MpnrbzRe8HiheANtnSUdJ1wzkDvRRDDgNANutpDhdRryRVEg6SLpNAQPNdhW8JQS42C6BesyJUasU4JTqAGhsH4D2HaAfR1izw52kMtnBGvXHEf4Akk+43Mu4xL2k7cyJQLgrG7bD6h0wWP5p5VpSUMMPuYjKr2Kz35hTpu4fyuOCEY3r4pUAAAAASUVORK5CYII="

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(945);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(305)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./processApproval.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./processApproval.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(304)(undefined);
// imports


// module
exports.push([module.i, "textarea:-moz-placeholder {\n  color: #999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #999;\n}\ntextarea:-ms-input-placeholder {\n  color: #999;\n}\n.ProcessApproval .PATextarea th,\n.ProcessApproval .PATextarea td {\n  border: #ddd solid 1px;\n  padding: 10px;\n}\n.ProcessApproval .PATextarea th {\n  width: 150px;\n  text-align: left;\n  vertical-align: middle;\n  font-size: 14px;\n  font-weight: normal;\n  background: #f5f5f5;\n}\n.ProcessApproval .PATextarea td textarea {\n  width: 100%;\n  resize: none;\n  height: 80px;\n  border: #ddd solid 1px;\n  padding: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(941);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * type:edit 编辑页面没有按钮和信息 流程可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * type:submit 包含通过、驳回 流程不可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * type:read   只有已阅  流程不可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/*审批信息*/
//兼容ie

var ApprovalControlNode = function (_React$Component) {
    _inherits(ApprovalControlNode, _React$Component);

    function ApprovalControlNode(arg) {
        _classCallCheck(this, ApprovalControlNode);

        var _this = _possibleConstructorReturn(this, (ApprovalControlNode.__proto__ || Object.getPrototypeOf(ApprovalControlNode)).call(this, arg));

        _this.state = {
            aOpinions: "审核意见",
            aList: [],
            InfoData: [], //流程信息
            allSearchArg: _this.props.allSearchArg,
            history: [] //历史纪录
        };
        _this.type = "edit"; //this.props["type"] || "edit"; //以防外部没有设置type类型

        _this.selectedFlows = []; //选人数据 
        _this.currentApprovalList = sessionStorage.getItem("currentApprovalList") ? JSON.parse(sessionStorage.getItem("currentApprovalList")) : [];
        return _this;
    }

    _createClass(ApprovalControlNode, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (this.props.callback) {
                this.props.callback(this);
            }
            this.GetAjax();
        }
        /*监听审核意见*/

    }, {
        key: "changeAOinions",
        value: function changeAOinions(event) {
            this.setState({ aOpinions: event.target.value });
        }
    }, {
        key: "GetAjax",
        value: function GetAjax() {
            var th = this;
            var allSearchArg = th.state.allSearchArg;
            var getInfo = {
                entiId: allSearchArg['e'],
                dataKey: allSearchArg['dataKey'],
                userId: iss.userInfo.ID,
                comanyId: allSearchArg["areaId"],
                comanyName: allSearchArg["areaName"]
            };
            iss.ajax({ //流程导航
                url: "/iWorkflow/Workflow/api/WFServices.asmx/GetSubmitWorkflows",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(getInfo),
                success: function success(result) {

                    th.setState({
                        InfoData: JSON.parse(result.d.Data)
                    });
                },
                error: function error(e) {}
            });
            var url = "/iWorkflow/Workflow/api/WFServices.asmx/GetFlowLog"; //获取历史纪录
            iss.ajax({
                url: url,
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(getInfo),
                success: function success(da) {
                    if (da.d.Data) {
                        th.setState({
                            history: JSON.parse(da.d.Data)["Rows"]
                        });
                    }
                }
            });
        }
    }, {
        key: "EVENT_CHANGE_LIST",
        value: function EVENT_CHANGE_LIST(da, ev) {
            //修改
            var th = this,
                _data = this.state.InfoData[0]["Flows"];
            var id = ev.target.value;
            for (var i = 0; i < this.selectedFlows.length; i++) {
                if (this.selectedFlows[i]["ContextGuid"] == da.Id) {
                    this.selectedFlows[i]["Participants"] = id;
                }
            }
            sessionStorage.setItem("currentApprovalList", JSON.stringify(this.selectedFlows));
        }
    }, {
        key: "EVENT_CHANGE_CHECKBOX",
        value: function EVENT_CHANGE_CHECKBOX(da, ev) {
            //input
            var ta = ev.target;
            this.selectedFlows.forEach(function (el, ind) {
                if (el.ContextGuid == da.Id) {
                    //el.Participants=
                    var str = el.Participants.join(",");
                    if (!ta.checked) {

                        var regs = new RegExp(ta.value + ",*", "ig");
                        var ar = str.replace(regs, "").replace(/\,$/ig, ""); //.split(",");
                        el.Participants = ar.length <= 0 ? [] : ar.split(",");
                    } else {
                        if (str.indexOf(ta.value) < 0) {
                            el.Participants.push(ta.value);
                        }
                    }

                    return;
                }
            });
            sessionStorage.setItem("currentApprovalList", JSON.stringify(this.selectedFlows));
        }
        //========提交、返回=========================================

    }, {
        key: "evConfirmSubmitTo",
        value: function evConfirmSubmitTo() {
            var th = this;
            iss.checkLogin(function (arg) {
                iss.evConfirmAlert("是否确认提交", th.EVENT_CLICK_SUBMIT.bind(th));
            });
        }
    }, {
        key: "EVENT_CLICK_SUBMIT",
        value: function EVENT_CLICK_SUBMIT() {
            //当前填报人提交
            var th = this;
            th.BIND_CHECKED(); //检查数据
        }
    }, {
        key: "BIND_CHECKED",
        value: function BIND_CHECKED() {
            //第一次ajax提交检查数据
            var th = this;
            var allSearchArg = th.state.allSearchArg;

            var dto = {
                "runtimeUnique": {
                    EntiId: allSearchArg['e'], // 实体ID
                    DataKey: allSearchArg['dataKey'] // 业务ID
                }
            };
            var turnOut = true;

            iss.ajax({
                url: "/iWorkflow/Workflow/api/WFServices.asmx/IsSubmitted",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(dto),
                success: function success(result) {
                    if (result.d["Data"] == "false" && result.d["Success"] == true) {
                        th.BIND_CHECKEDSUCESS(); //二次提交
                    } else {
                        iss.popover({ content: result.d.Message });
                        $(window).trigger("treeLoad");
                    }
                }
            });
        }
    }, {
        key: "BIND_CHECKEDSUCESS",
        value: function BIND_CHECKEDSUCESS() {
            //当前填报人第二次ajax提交提交流程
            var th = this;
            var allSearchArg = th.state.allSearchArg;
            var basicInfor = {
                DataKey: allSearchArg['dataKey'], // 业务ID,
                EntiId: allSearchArg["e"],
                EventUserId: iss.userInfo.ID, //当前登陆人
                Files: [], //附件
                ProcessComment: this.props["data"] || ""
            };

            var sbarr2 = this.selectedFlows.map(function (el, ind) {
                if (typeof el.Participants == "string") {
                    el.Participants = [el.Participants.toString()];
                }
                return el;
            });

            var submitdata = JSON.stringify({
                submitData: basicInfor,
                selectedFlows: sbarr2
            });
            iss.ajax({
                url: "/iWorkflow/Workflow/api/WFServices.asmx/SubmitWorkflow",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: submitdata,
                success: function success(result) {
                    var rt = result.d;
                    // turnOut = rt.Success;
                    if (rt.Success == true) {
                        iss.popover({ content: "提交成功！", type: 2 });
                        sessionStorage.removeItem("currentApprovalText"); //清楚临时历史数据存储，解决路由切换不能记录用户输入内容问题
                        sessionStorage.removeItem("currentApprovalList"); //清楚临时历史数据存储，解决路由切换不能记录用户选择内容问题
                        $(window).trigger("treeLoad");
                        iss.hashHistory.push({ pathname: "agenty" });
                    } else {
                        iss.popover({ content: rt.Message });
                    }
                }
            });
        }
    }, {
        key: "setInfoDataList",
        value: function setInfoDataList() {
            var _this2 = this;

            var th = this;
            if (!th.state.InfoData.length) {
                return;
            }
            var list = th.state.InfoData[0]["Flows"];
            th.selectedFlows = th.currentApprovalList.length ? th.currentApprovalList : [];
            return list.map(function (el, ind) {
                var submit = { //提交数据
                    ContextGuid: el.Id, //自己id
                    FlowName: el.Text, //Text 节点名称
                    FlowType: el.Type, //流程类型
                    FlowType2: el.FlowType2, //加嵌
                    ParentContextGuid: el.PId, //父id
                    Participants: [], //用户
                    RunFlowId: "0" //流程节点
                },
                    userArra = [];
                !th.currentApprovalList.length && th.selectedFlows.push(submit); //按地址引用先push后修改
                var _id = _this2.currentApprovalList.length ? _this2.currentApprovalList[ind]["Participants"] : "";
                if (el.Type == "Approve" && th.type == "edit" && el.Users.length >= 2) {
                    var arr1 = el.Users.filter(function (v1, i1) {
                        return v1;
                    });
                    return _react2.default.createElement(
                        "li",
                        { key: ind },
                        _react2.default.createElement(
                            "span",
                            null,
                            el.Text
                        ),
                        _react2.default.createElement(
                            "select",
                            { ref: "select", defaultValue: _id, onChange: th.EVENT_CHANGE_LIST.bind(th, el) },
                            arr1.map(function (ee, ii) {

                                if (ii == 0) {
                                    userArra.push(ee.UId);
                                    submit.Participants = userArra;
                                }
                                return _react2.default.createElement(
                                    "option",
                                    { key: ii, value: ee.UId },
                                    ee.Name
                                );
                            })
                        )
                    );
                } else if (el.Type == "AutoInform" && th.type == "edit") {
                    var arr2 = el.Users.filter(function (v2, i2) {
                        return v2;
                    });
                    _id = typeof _id != "string" ? _id.join(",") : "";
                    return _react2.default.createElement(
                        "li",
                        { key: ind },
                        _react2.default.createElement(
                            "span",
                            null,
                            el.Text,
                            "\u3010",
                            arr2.map(function (h, l) {

                                userArra.push(h.UId);
                                submit.Participants = userArra;
                                return _react2.default.createElement(
                                    "label",
                                    { key: l },
                                    _react2.default.createElement("input", { key: l, type: "checkbox", defaultChecked: _id ? _d.indexOf(h.UId) >= 0 : "true", value: h.UId, onChange: th.EVENT_CHANGE_CHECKBOX.bind(th, el) }),
                                    h.Name + (l == el.Users.length - 1 ? "" : ",")
                                );
                            }),
                            "\u3011"
                        )
                    );
                } else {
                    var arr3 = el.Users.filter(function (v3, i3) {
                        return v3;
                    });
                    var str = arr3.map(function (vv, jj) {

                        for (var i = 0; i < userArra.length; i++) {
                            //  if(userArra[i]["Id"])
                        }
                        userArra.push(vv.UId);
                        return vv.Name + (jj == el.Users.length - 1 ? "" : ",");
                    });
                    submit.Participants = userArra;
                    // th.selectedFlows.push(submit);
                    return _react2.default.createElement(
                        "li",
                        { key: ind },
                        _react2.default.createElement(
                            "span",
                            null,
                            el.Text
                        ),
                        _react2.default.createElement(
                            "span",
                            null,
                            "\u3010",
                            str,
                            "\u3011"
                        )
                    );
                }
            }, this);
        }
        //========通过、驳回===========================================

    }, {
        key: "EVENT_CLICK_PASS",
        value: function EVENT_CLICK_PASS() {}
    }, {
        key: "Event_click_cancel",
        value: function Event_click_cancel() {
            //取消
            var url = "";
            switch (this.props.allSearchArg.e) {
                case iss.getEVal("intallmentStatus"):
                    url = "intallment";break; //分期
                case iss.getEVal("newProjectStatus"):
                    url = "newProject";break; //项目
            }
            sessionStorage.removeItem("currentApprovalText"); //清楚临时历史数据存储，解决路由切换不能记录用户输入内容问题
            sessionStorage.removeItem("currentApprovalList"); //清楚临时历史数据存储，解决路由切换不能记录用户选择内容问题
            iss.hashHistory.replace({
                pathname: "/" + url,
                search: "?status=edit&dataKey=" + this.props.allSearchArg.dataKey + "&e=" + this.props.allSearchArg.e
            });
        }
    }, {
        key: "BIND_CHECKEDIT",
        value: function BIND_CHECKEDIT() {
            if (this.type != "edit") {
                return _react2.default.createElement(
                    "p",
                    { className: "btnBox" },
                    _react2.default.createElement(
                        "a",
                        { className: "btn", href: "javascript:;", onClick: this.EVENT_CLICK_PASS.bind(this) },
                        "\u901A\u8FC7"
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: "btn", href: "javascript:;" },
                        "\u9A73\u56DE"
                    )
                );
            } else {
                return _react2.default.createElement(
                    "p",
                    { className: "btnBox" },
                    _react2.default.createElement(
                        "a",
                        { className: "btn", href: "javascript:;", "data-disable": "false", onClick: this.evConfirmSubmitTo.bind(this) },
                        "\u63D0\u4EA4"
                    ),
                    _react2.default.createElement(
                        "a",
                        { className: "btn", href: "javascript:;", onClick: this.Event_click_cancel.bind(this) },
                        "\u53D6\u6D88"
                    )
                );
            }
        }
    }, {
        key: "BIND_HISTORY",
        value: function BIND_HISTORY() {
            return this.state.history.map(function (el, ind) {
                return _react2.default.createElement(
                    "tr",
                    { key: ind },
                    _react2.default.createElement(
                        "td",
                        null,
                        el.FLOWNAME
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        el.PROCESSCOMMENT
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        el.EVENTUSERNAME
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        el.EVENTDATE
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        el.TRACKINGEVENTTEXT
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {

            var re_aOpinions = this.state.aOpinions;
            return _react2.default.createElement(
                "div",
                { className: "boxGroupDetail" },
                _react2.default.createElement(
                    "table",
                    { className: "table tableProject" },
                    _react2.default.createElement(
                        "tbody",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "td",
                                { width: "100" },
                                "\u5BA1\u6279\u6D41\u7A0B"
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement(
                                    "ul",
                                    { className: "ApplyFlow" },
                                    _react2.default.createElement(
                                        "li",
                                        { className: "Running" },
                                        "\u53D1\u8D77\u4EBA\u3010",
                                        iss.userInfo.empName,
                                        "\u3011"
                                    ),
                                    this.setInfoDataList()
                                )
                            )
                        ),
                        this.type != "edit" && _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement("td", null),
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement("textarea", { className: "textareaText", value: re_aOpinions, onChange: this.changeAOinions.bind(this) })
                            )
                        )
                    )
                ),
                this.BIND_CHECKEDIT(),
                _react2.default.createElement(
                    "table",
                    { className: "table tableProject approvalProcess" },
                    _react2.default.createElement(
                        "tbody",
                        null,
                        _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u8282\u70B9"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u610F\u89C1"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u64CD\u4F5C\u4EBA"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u64CD\u4F5C\u65F6\u95F4"
                            ),
                            _react2.default.createElement(
                                "th",
                                null,
                                "\u64CD\u4F5C"
                            )
                        ),
                        this.BIND_HISTORY()
                    )
                )
            );
        }
    }]);

    return ApprovalControlNode;
}(_react2.default.Component);

exports.default = ApprovalControlNode;

/***/ })

});