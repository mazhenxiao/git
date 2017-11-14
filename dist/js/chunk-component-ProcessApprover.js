webpackJsonp([5],{

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

__webpack_require__(30);

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

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1549);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(642)(content, options);
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

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(641)(undefined);
// imports


// module
exports.push([module.i, "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: lighter;\n}\ntextarea,\ntextarea:hover {\n  outline: none;\n}\n.boxGroupDetail {\n  padding: 0 0px;\n  font-size: 1rem;\n}\n.boxGroupDetail .textareaText {\n  width: 100%;\n  height: 80px;\n  padding: 10px;\n  resize: none;\n  border: 1px solid #dddddd;\n}\n.boxGroupDetail .boxGroupTitBig {\n  height: 40px;\n  line-height: 40px;\n  background: #0b4082;\n  color: #ffffff ;\n  padding: 0 20px 0 40px;\n  background-image: url(" + __webpack_require__(1550) + ");\n  background-repeat: no-repeat;\n  background-position: 15px;\n}\n.boxGroupDetail .formTable2 tr td {\n  width: 202px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(3) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable2 tr td:nth-of-type(5) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td {\n  width: 202px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(3) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable1 tr td:nth-of-type(5) {\n  background: #f5f5f5;\n  width: 160px;\n}\n.boxGroupDetail .formTable3 tr:nth-of-type(1) th {\n  background: #f5f5f5;\n  text-align: center;\n}\n.boxGroupDetail .formTable3 tr td:nth-of-type(1) {\n  background: #f5f5f5;\n  text-align: right;\n}\n.boxGroupDetail .formTable3 tr td .inputTextBox {\n  width: 100%;\n}\n.boxGroupDetail .formTableLabel {\n  width: 100%;\n  text-align: right;\n}\n.boxGroupDetail table > tbody > tr > td,\n.boxGroupDetail .table > tbody > tr > th,\n.boxGroupDetail .table > tfoot > tr > td,\n.boxGroupDetail .table > tfoot > tr > th,\n.boxGroupDetail .table > thead > tr > td,\n.boxGroupDetail .table > thead > tr > th {\n  padding: 2px !important;\n  border: 1px solid #dddddd;\n}\n.boxGroupDetail .tableProject {\n  margin-top: 20px;\n}\n.boxGroupDetail .btnBox {\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n}\n.boxGroupDetail .btnBox a {\n  display: inline-block;\n  padding: 0 12px;\n  height: 26px;\n  line-height: 26px;\n  background: #0b4082;\n  color: #ffffff ;\n  margin: 0 10px;\n}\n.boxGroupDetail .btnBox a:hover {\n  background: #f1a118;\n}\n.boxGroupDetail .approvalProcess tr th {\n  text-align: center;\n  background: #f5f5f5;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(1) {\n  width: 150px;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(3) {\n  width: 150px;\n  text-align: center;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(4) {\n  width: 150px;\n  text-align: center;\n}\n.boxGroupDetail .approvalProcess tr td:nth-of-type(5) {\n  width: 150px;\n  text-align: center;\n}\n.ApplyFlow li {\n  display: inline-block;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.ApplyFlow li::after {\n  display: inline-block;\n  content: \"->\";\n  margin-left: 3px;\n}\n.ApplyFlow li:last-child::after {\n  display: none;\n}\n.ApplyFlow li label {\n  font-weight: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ 1550:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuUlEQVQ4T+2TXQ3CQBCE53MADnAADkBCJVQCEooDJFQCEiqhOKiEOhiyTSFtc3AlvLLJPd3Otz83h34MpnrbzRe8HiheANtnSUdJ1wzkDvRRDDgNANutpDhdRryRVEg6SLpNAQPNdhW8JQS42C6BesyJUasU4JTqAGhsH4D2HaAfR1izw52kMtnBGvXHEf4Akk+43Mu4xL2k7cyJQLgrG7bD6h0wWP5p5VpSUMMPuYjKr2Kz35hTpu4fyuOCEY3r4pUAAAAASUVORK5CYII="

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
var update = __webpack_require__(642)(content, options);
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

/***/ 1552:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(641)(undefined);
// imports


// module
exports.push([module.i, "textarea:-moz-placeholder {\n  color: #999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #999;\n}\ntextarea:-ms-input-placeholder {\n  color: #999;\n}\n.ProcessApproval .PATextarea th,\n.ProcessApproval .PATextarea td {\n  border: #ddd solid 1px;\n  padding: 10px;\n}\n.ProcessApproval .PATextarea th {\n  width: 150px;\n  text-align: left;\n  vertical-align: middle;\n  font-size: 14px;\n  font-weight: normal;\n  background: #f5f5f5;\n}\n.ProcessApproval .PATextarea td textarea {\n  width: 100%;\n  resize: none;\n  height: 80px;\n  border: #ddd solid 1px;\n  padding: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

__webpack_require__(30);

__webpack_require__(1548);

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

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(25);

__webpack_require__(30);

var _componentProcessApprovalTab = __webpack_require__(1536);

var _componentProcessApprovalTab2 = _interopRequireDefault(_componentProcessApprovalTab);

var _componentNewProjectApproverNode = __webpack_require__(1573);

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
__webpack_require__(1551);

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
                    null,
                    "\u5BA1\u6279\u6D41\u7A0B"
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

/***/ 641:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(654);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 654:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

});