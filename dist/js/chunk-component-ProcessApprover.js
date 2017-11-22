webpackJsonp([8],{

/***/ 1506:
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

var _componentProcessApprovalTab = __webpack_require__(1544);

var _componentProcessApprovalTab2 = _interopRequireDefault(_componentProcessApprovalTab);

var _componentNewProjectApproverNode = __webpack_require__(1598);

var _componentNewProjectApproverNode2 = _interopRequireDefault(_componentNewProjectApproverNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*审批信息*/

/**
 * 审批人   
 * 
 */
//兼容ie
//导航信息


//审批信息
__webpack_require__(1573);

var ProcessApproval = function (_React$Component) {
    _inherits(ProcessApproval, _React$Component);

    function ProcessApproval(arg) {
        _classCallCheck(this, ProcessApproval);

        var _this = _possibleConstructorReturn(this, (ProcessApproval.__proto__ || Object.getPrototypeOf(ProcessApproval)).call(this, arg));

        _this.state = {
            remarkTxt: "", //备注内容
            type: "readonly", //edit自己readonly审批人
            allSearchArg: _this.props.location.query, /*地址栏所有参数*/
            guid: _this.props.location.query.dataKey //页面传入表单guid    
        };

        return _this;
    }

    /*从子组件获取输入框的信息*/


    _createClass(ProcessApproval, [{
        key: "evSetRemarkTxt",
        value: function evSetRemarkTxt(val) {
            var th = this;
            var allSearchArg = th.state.allSearchArg;
            allSearchArg["remarkTxt"] = val;
            th.setState({
                allSearchArg: allSearchArg
            });
        }
    }, {
        key: "render",
        value: function render() {
            var th = this;
            return _react2.default.createElement(
                "section",
                { className: "ProcessApproval" },
                _react2.default.createElement(_componentProcessApprovalTab2.default, { id: th.props.location.query["e"], current: "ProcessApprover", allSearchArg: th.state.allSearchArg }),
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
                        "div",
                        { className: "mgT10" },
                        _react2.default.createElement(_componentNewProjectApproverNode2.default, { guid: th.state.guid, allSearchArg: th.state.allSearchArg, callback: th.evSetRemarkTxt.bind(th) })
                    )
                )
            );
        }
    }]);

    return ProcessApproval;
}(_react2.default.Component);

exports.default = ProcessApproval;

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

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1571);
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

/***/ 1571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: lighter;\n}\ntextarea,\ntextarea:hover {\n  outline: none;\n}\n.boxGroupDetail {\n  padding: 0 0px;\n  font-size: 1rem;\n}\n.boxGroupDetail .textareaText {\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  resize: none;\n  border: 1px solid #dddddd;\n}\n.boxGroupDetail .boxGroupTitBig {\n  height: 40px;\n  line-height: 40px;\n  background: #0b4082;\n  color: #ffffff ;\n  padding: 0 20px 0 40px;\n  background-image: url(" + __webpack_require__(1572) + ");\n  background-repeat: no-repeat;\n  background-position: 15px;\n}\n.boxGroupDetail .formTable2 tr td {\n  width: 202px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(3) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(5) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td {\n  width: 202px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(3) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(5) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable3 tr:nth-of-type(1) th {\n  background: #f5f5f5;\n  text-align: center;\n}\n.boxGroupDetail .formTable3 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  text-align: right;\n}\n.boxGroupDetail .formTable3 tr td .inputTextBox {\n  width: 100%;\n}\n.boxGroupDetail .formTableLabel {\n  width: 100%;\n  text-align: right;\n}\n.boxGroupDetail table > tbody > tr > td,\n.boxGroupDetail .table > tbody > tr > th,\n.boxGroupDetail .table > tfoot > tr > td,\n.boxGroupDetail .table > tfoot > tr > th,\n.boxGroupDetail .table > thead > tr > td,\n.boxGroupDetail .table > thead > tr > th {\n  padding: 2px !important;\n  border: 1px solid #dddddd;\n}\n.boxGroupDetail .tableProject {\n  margin-top: 20px;\n}\n.boxGroupDetail .btnBox {\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n}\n.boxGroupDetail .btnBox a {\n  display: inline-block;\n  padding: 0 12px;\n  height: 26px;\n  line-height: 26px;\n  background: #0b4082;\n  color: #ffffff ;\n  margin: 0 10px;\n}\n.boxGroupDetail .btnBox a:hover {\n  background: #f1a118;\n}\n.boxGroupDetail .approvalProcess tr th {\n  text-align: center;\n  background: #f5f5f5;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(1) {\n  width: 150px;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(3) {\n  width: 150px;\n  text-align: center;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(4) {\n  width: 150px;\n  text-align: center;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(5) {\n  width: 150px;\n  text-align: center;\n}\n.ApplyFlow li {\n  display: inline-block;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.ApplyFlow li::after {\n  display: inline-block;\n  content: \"->\";\n  margin-left: 3px;\n}\n.ApplyFlow li:last-child::after {\n  display: none;\n}\n.ApplyFlow li label {\n  font-weight: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ 1572:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuUlEQVQ4T+2TXQ3CQBCE53MADnAADkBCJVQCEooDJFQCEiqhOKiEOhiyTSFtc3AlvLLJPd3Otz83h34MpnrbzRe8HiheANtnSUdJ1wzkDvRRDDgNANutpDhdRryRVEg6SLpNAQPNdhW8JQS42C6BesyJUasU4JTqAGhsH4D2HaAfR1izw52kMtnBGvXHEf4Akk+43Mu4xL2k7cyJQLgrG7bD6h0wWP5p5VpSUMMPuYjKr2Kz35hTpu4fyuOCEY3r4pUAAAAASUVORK5CYII="

/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1574);
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

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "textarea:-moz-placeholder {\n  color: #999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #999;\n}\ntextarea:-ms-input-placeholder {\n  color: #999;\n}\n.ProcessApproval .PATextarea th,\n.ProcessApproval .PATextarea td {\n  border: #ddd solid 1px;\n  padding: 10px;\n}\n.ProcessApproval .PATextarea th {\n  width: 150px;\n  text-align: left;\n  vertical-align: middle;\n  font-size: 14px;\n  font-weight: normal;\n  background: #f5f5f5;\n}\n.ProcessApproval .PATextarea td textarea {\n  width: 100%;\n  resize: none;\n  height: 80px;\n  border: #ddd solid 1px;\n  padding: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1598:
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

__webpack_require__(1570);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 审批人
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * type:edit 编辑页面没有按钮和信息 流程可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * type:submit 包含通过、驳回 流程不可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * type:read   只有已阅  流程不可选
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/*审批信息*/
//兼容ie


var ApprovalControlNode2 = function (_React$Component) {
    _inherits(ApprovalControlNode2, _React$Component);

    function ApprovalControlNode2(arg) {
        _classCallCheck(this, ApprovalControlNode2);

        var _this = _possibleConstructorReturn(this, (ApprovalControlNode2.__proto__ || Object.getPrototypeOf(ApprovalControlNode2)).call(this, arg));

        _this.state = {
            aOpinions: _this.props.allSearchArg.remarkTxt || "", //textarea
            type: false, //默认无权限
            InfoData: [], //流程信息
            mainData: "", //通过驳回权限
            history: [], //历史纪录
            fromArg: _this.props.allSearchArg.from || ""
        };

        _this.getInfo = { //从页面获取
            "entiId": _this.props.allSearchArg.e, //项目还是分期
            "dataKey": _this.props.allSearchArg.dataKey, //项目id或分期id
            "checkedUserId": "", //用户id
            "currentRuntFlowId": "", //当前节点ID,在流程里获取
            "backToRuntFlowId": "0", //
            "eventUserId": "", //用户id
            "userId": "", //用户id
            "delegateUserId": "0",
            "comment": "", //审批意见
            "files": []
        };
        _this.selectedFlows = []; //选人数据     
        return _this;
    }

    _createClass(ApprovalControlNode2, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var th = this;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var th = this;
            var setT = setInterval(function (arg) {
                if (iss.userInfo) {
                    th.getInfo.userId = th.getInfo.eventUserId = iss.userInfo.ID; //给用户赋值
                    th.getInfo.checkedUserId = iss.userInfo.ID;
                    th.GetJurisdiction(function (arg) {
                        var da = arg.d;
                        if (da.Success) {
                            th.setState({
                                type: true,
                                mainData: da.Data
                            });

                            th.GetAjax();
                        } else {
                            th.setState({
                                type: false
                            });
                        }
                    });
                }
                clearInterval(setT);
            }, 1000);
        }
    }, {
        key: "changeAOinions",
        value: function changeAOinions(event) {
            var _this2 = this;

            var th = this;
            var aVal = event.target.value;
            if (aVal.length > 1000) {
                aVal = aVal.slice(0, 1000);
            }
            th.props.callback(aVal);
            this.setState({ aOpinions: aVal }, function (arg) {
                th.getInfo.comment = _this2.state.aOpinions;
            });
        }
    }, {
        key: "GetJurisdiction",
        value: function GetJurisdiction(callback) {
            //获取权限
            var dto = this.getInfo;
            //获取权限
            iss.ajax({
                url: "/iWorkflow/Workflow/api/WFServices.asmx/GetUserRights",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(dto),
                success: function success(result) {
                    if (callback) {
                        callback(result);
                    }
                }

            });
        }
    }, {
        key: "GetAjax",
        value: function GetAjax() {
            var th = this;
            iss.ajax({ //流程导航
                url: "/iWorkflow/Workflow/api/WFServices.asmx/LoadNodes",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(th.getInfo),
                success: function success(result) {
                    var data = result.d;
                    data.forEach(function (el, ind) {
                        if (el["FlowStatus"] == "Running") {
                            th.getInfo.currentRuntFlowId = el.FlowId;
                            return;
                        }
                    });
                    th.setState({
                        InfoData: data
                    });
                },
                error: function error(e) {}
            });

            var url = "/iWorkflow/Workflow/api/WFServices.asmx/GetFlowLog"; //获取历史纪录
            iss.ajax({
                url: url,
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(this.getInfo),
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
        key: "setInfoDataList",
        value: function setInfoDataList() {
            //数据绑定
            var th = this;
            if (!this.state.InfoData.length) {
                return;
            }
            var list = this.state.InfoData;

            return list.map(function (el, ind) {
                // th.selectedFlows.push(submit);
                return _react2.default.createElement(
                    "li",
                    { key: ind, className: el.FlowStatus },
                    _react2.default.createElement(
                        "span",
                        null,
                        el.FlowName
                    ),
                    _react2.default.createElement(
                        "span",
                        null,
                        "\u3010",
                        el.Participants,
                        "\u3011"
                    )
                );
            }, this);
        }

        //========通过、驳回===========================================
        /*是否确认驳回*/

    }, {
        key: "evConfirmBackTo",
        value: function evConfirmBackTo() {
            var th = this;
            iss.checkLogin(function (arg) {
                iss.evConfirmAlert("是否确认驳回", th.EVENT_CLICK_SUBMIT.bind(th));
            });
        }
    }, {
        key: "EVENT_CLICK_SUBMIT",
        value: function EVENT_CLICK_SUBMIT() {
            //驳回
            var serverurl = "/iWorkflow/Workflow/api/WFServices.asmx/BackToFlow";
            var dto = this.getInfo;
            var comment = this.getInfo.comment;
            if (comment == "") {
                dto.comment = "驳回";
            }
            iss.ajax({
                url: serverurl,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(dto),
                success: function success(result) {
                    var rt = result.d;

                    if (rt.Success) {
                        //显示消息，关闭窗口，刷新父页面的节点信息    
                        /*window.parent.opener.location.reload();
                        alert("驳回成功！");*/
                        iss.popover({ content: "驳回成功！", type: 2 });
                        iss.hashHistory.push({ "pathname": "/agenty" });
                        /*审批通过一条数据,触发一次我的里面的数量查询*/
                        $(document).triggerHandler("reloadMyCount");
                    } else {
                        iss.popover({ content: rt.Message });
                    }
                },
                error: function error(result) {
                    var err = eval("(" + result.responseText + ")");
                    alert(err.Message);
                    return;
                }
            });
        }
        /*是否确认通过*/

    }, {
        key: "evConfirmRunWork",
        value: function evConfirmRunWork() {
            var th = this;
            iss.checkLogin(function (arg) {
                iss.evConfirmAlert("是否确认通过", th.EVENT_CLICK_PASS.bind(th));
            });
        }
    }, {
        key: "EVENT_CLICK_PASS",
        value: function EVENT_CLICK_PASS() {
            //通过

            var dto = this.getInfo;
            var comment = this.getInfo.comment;
            if (comment == "") {
                dto.comment = "通过";
            }
            iss.ajax({
                url: "/iWorkflow/Workflow/api/WFServices.asmx/RunWorkflow2",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(dto),

                success: function success(result) {

                    var rt = result.d;
                    if (rt.Success) {
                        /*window.parent.opener.location.reload();
                        alert("审批成功！");*/
                        iss.popover({ content: "通过成功！", type: 2 });
                        iss.hashHistory.push({ "pathname": "/agenty" });
                        /*审批通过一条数据,触发一次我的里面的数量查询*/
                        $(document).triggerHandler("reloadMyCount");
                    } else {
                        iss.popover({ content: rt.Message });
                    }
                },
                error: function error(result) {
                    var err = eval("(" + result.responseText + ")");
                    alert(err.Message);
                }
            });
        }
        /*删除已阅*/

    }, {
        key: "evDeleteReaded",
        value: function evDeleteReaded() {
            var th = this;
            var dto = th.getInfo;
            var jsonArg = {
                entiId: dto.entiId,
                dataKey: dto.dataKey,
                userId: dto.userId
            };
            iss.ajax({
                url: "/iWorkflow/Workflow/api/WFServices.asmx/HaveRead",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(jsonArg),
                success: function success(result) {
                    var rt = result.d;
                    if (rt.Success) {
                        iss.popover({ content: "操作成功！", type: 2 });
                        $(window).trigger("treeLoad"); //刷新左侧树
                        iss.hashHistory.push({ "pathname": "/agenty" });

                        $(document).triggerHandler("reloadMyCount");
                    } else {
                        iss.popover({ content: rt.Message });
                    }
                }
            });
        }
    }, {
        key: "BIND_CHECKEDIT",
        value: function BIND_CHECKEDIT() {
            var th = this;
            var fromArg = th.state.fromArg;
            if (fromArg == "inform") {
                return _react2.default.createElement(
                    "p",
                    { className: "btnBox" },
                    _react2.default.createElement(
                        "a",
                        { className: "btn", href: "javascript:void(0);", onClick: th.evDeleteReaded.bind(th) },
                        "\u5DF2\u9605"
                    )
                );
            } else if (th.state.type) {
                return _react2.default.createElement(
                    "p",
                    { className: "btnBox" },
                    th.state.mainData.indexOf("Approve") >= 0 && _react2.default.createElement(
                        "a",
                        { className: "btn", href: "javascript:;", onClick: th.evConfirmRunWork.bind(th) },
                        "\u901A\u8FC7"
                    ),
                    th.state.mainData.indexOf("Return") >= 0 && _react2.default.createElement(
                        "a",
                        { className: "btn", href: "javascript:;", onClick: th.evConfirmBackTo.bind(th) },
                        "\u9A73\u56DE"
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
                                "  ",
                                _react2.default.createElement(
                                    "ul",
                                    { className: "ApplyFlow" },
                                    this.setInfoDataList()
                                )
                            )
                        ),
                        this.state.type && _react2.default.createElement(
                            "tr",
                            null,
                            _react2.default.createElement(
                                "td",
                                { width: "100" },
                                "\u5907\u6CE8"
                            ),
                            _react2.default.createElement(
                                "td",
                                null,
                                _react2.default.createElement("textarea", { className: "textareaText", value: re_aOpinions, onChange: this.changeAOinions.bind(this), placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u5185\u5BB9" })
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

    return ApprovalControlNode2;
}(_react2.default.Component);

exports.default = ApprovalControlNode2;

/***/ })

});