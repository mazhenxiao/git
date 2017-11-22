webpackJsonp([4],{

/***/ 1502:
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

var _componentStagingInformation = __webpack_require__(1586);

var _componentStagingInformation2 = _interopRequireDefault(_componentStagingInformation);

var _componentIndicators = __webpack_require__(1590);

var _componentIndicators2 = _interopRequireDefault(_componentIndicators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*分期  */
//兼容ie


__webpack_require__(1560);

var Intallment = function (_React$Component) {
    _inherits(Intallment, _React$Component);

    function Intallment(arg) {
        _classCallCheck(this, Intallment);

        var _this = _possibleConstructorReturn(this, (Intallment.__proto__ || Object.getPrototypeOf(Intallment)).call(this, arg));

        var STAGEID_guid = iss.guid().toString(),
            ID_guid = iss.guid().toString();

        _this.state = {
            StagingInformationDATA: {}, /*分期信息*/
            landList: [], /*分期占用土地*/
            equityRatio: "", /*权益比例*/
            status: "show",
            versionId: "", //版本id
            versionOldId: "", /*老版本ID*/
            versionNewId: iss.guid().toString(), /*如果是升级，就会生成一个新的versionId,用于暂存和发起审批*/
            projectId: "", /*项目iD*/
            STAGEID_guid: STAGEID_guid,
            ID_guid: ID_guid,
            landCode: "", /*地块编码*/
            projectCode: "", /*项目编码*/
            maxCode: "", /*最大编码*/
            pCodeAndLXCode: "" /*分期编码*/
        };

        iss.hashHistory.listen(function (local, next) {});
        return _this;
    }

    _createClass(Intallment, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var th = this;
            var location = th.props.location;
            var status = location.query["status"];
            /*项目id*/
            var projectId = "";
            /*老版本id*/
            var versionOldId = location.query["versionOldId"];
            /*版本id*/
            var dataKey = location.query["dataKey"];

            /*如果没有传递分期版本id,dataKey是分期版本id*/
            if (!dataKey) {
                dataKey = status == "edit" || status == "upgrade" ? iss.id.id : iss.guid().toString();
                versionOldId = status == "upgrade" ? iss.id.id : "";
            }
            /*如果是新建分期*/
            if (status == "add") {
                projectId = iss.id.id;
            }
            th.setState({
                status: status,
                versionId: dataKey,
                versionOldId: versionOldId,
                projectId: projectId
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
        /*获取基本信息后，再执行其他ajax操作*/

    }, {
        key: "getBasicInforTodo",
        value: function getBasicInforTodo(basicInfor) {
            var th = this;
            var projectId = basicInfor.PROJECTID;
            var stageCode = basicInfor.STAGECODE;

            th.setState({
                projectId: projectId
            });
            $(document).triggerHandler("landFirstLoad", [projectId]);
            th.getPjcodeAMCode(projectId, stageCode);
        }
    }, {
        key: "BIND_StagingInformationDATA",
        value: function BIND_StagingInformationDATA(data) {

            this.setState({
                StagingInformationDATA: data
            }, function () {});
        }
        /*分期占用土地==数据*/

    }, {
        key: "evLandList",
        value: function evLandList(landArr) {

            var th = this;
            var equityTxt = "";
            var landFirstCode = "";
            var landArrLen = landArr.length - 1;
            landArr.forEach(function (obj, index) {
                if (landArrLen == index) {
                    equityTxt = equityTxt + obj.Name + "：" + (obj.EQUITYRATIO || 0) + "%";
                } else {
                    equityTxt = equityTxt + obj.Name + "：" + (obj.EQUITYRATIO || 0) + "%,";
                }

                if (index == 0) {
                    landFirstCode = obj["FieldList"][1]['val'];
                }

                /*        obj["FieldList"].forEach((el,ind)=>{ //数据计算
                           let reg = /\{.*?\}/ig;
                           let str = el.exec;
                           if(str){
                               str.match(reg).forEach((_e,_i)=>{
                                   obj["FieldList"].forEach((__e,__i)=>{
                                       if(_e.replace(/[{}]/ig,"")==__e.id){
                                           str=str.replace("{"+__e.id+"}",__e.val);
                                       }
                                   })
                               })
                               el.val=eval(str); 
                               el.text=eval(str);    
                           }
                                    
                       }) */
            });

            th.setState({
                landList: landArr,
                equityRatio: equityTxt,
                landCode: landFirstCode,
                pCodeAndLXCode: th.state.projectCode + "-" + landFirstCode + "-" + th.state.maxCode
            });

            /*只有新增，才会生成code*/
            /*if(landFirstCode!=""){
             th.setState({
                 landCode:landFirstCode,
                 pCodeAndLXCode:th.state.projectCode+"-"+landFirstCode+"-"+th.state.maxCode
             });
            }*/
        }
        /*发起审批*/

    }, {
        key: "EVENT_CLICK_POSTAPP",
        value: function EVENT_CLICK_POSTAPP() {
            var isvalide = $("#stageInforForm").form("validate");

            if (!isvalide) return false;
            var th = this;
            var status = th.state.status;
            var maxCode = th.state.maxCode;
            maxCode = maxCode ? maxCode : "";

            var SumbitType;
            var dta = th.state.StagingInformationDATA;

            var versionId = th.state.versionId; /*版本id*/
            var projectId = dta.PROJECTID; /*项目id*/
            var areaId = dta.AREAID; /*区域id*/
            var areaName = dta.AREANAME; /*区域名字*/
            var final_versionId = versionId; /*最后发起审批 需要传递的id*/

            var intallmentStatus = iss.getEVal("intallmentStatus");
            dta.LandList = th.state.landList;
            if (dta.LandList.length == 0) {
                iss.popover({ content: "请选择分期占用土地" });
                return false;
            }
            if (status == "edit") {
                SumbitType = "Edit";
            } else if (status == "add") {
                SumbitType = "Add";
                dta.STAGEVERSIONID = versionId; //版本id
                dta.STAGEID = this.state.STAGEID_guid; //分期id
                dta.ID = this.state.ID_guid; //表单id
                dta.STAGECODE = th.state.pCodeAndLXCode;
                dta.SEQNUM = Number(maxCode.replace("Q", "")) * 10;
            } else if (status == "upgrade") {
                SumbitType = "Upgrade";
                dta.STAGEVERSIONIDOLD = versionId;
                dta.STAGEVERSIONID = th.state.versionNewId;
                dta.STAGEID = this.state.STAGEID_guid;
                dta.ID = this.state.ID_guid;
                final_versionId = th.state.versionNewId;
            }
            iss.ajax({
                type: "POST",
                url: "/Stage/IToCreate",
                data: {
                    data: JSON.stringify(dta),
                    SumbitType: SumbitType,
                    EditType: "Submit"
                },
                success: function success(data) {
                    iss.hashHistory.push({
                        pathname: "/ProcessApproval",
                        search: '?e=' + intallmentStatus + '&dataKey=' + final_versionId + '&current=ProcessApproval&areaId=' + areaId + '&areaName=' + areaName
                    });
                }
            });
        }
        /*暂存*/

    }, {
        key: "EVENT_CLICK_SAVE",
        value: function EVENT_CLICK_SAVE(callback) {

            var th = this;
            var status = th.state.status;
            var SumbitType;
            var dta = th.state.StagingInformationDATA;
            var maxCode = th.state.maxCode;
            var versionId = th.state.versionId;
            var projectId = th.state.projectId;
            maxCode = maxCode ? maxCode : "";
            dta.LandList = th.state.landList;

            if (status == "edit") {
                //发起审批为编辑状态时
                SumbitType = "Edit";
            } else if (status == "add") {
                //新增时
                SumbitType = "Add";
                dta.STAGEVERSIONID = versionId; //版本id直接生成
                dta.STAGEID = this.state.STAGEID_guid; //分期id
                dta.ID = this.state.ID_guid; //表单id
                dta.STAGECODE = th.state.pCodeAndLXCode; //分期编码
                dta.SEQNUM = Number(maxCode.replace("Q", "")) * 10;
            } else if (status == "upgrade") {
                //升级版本是
                SumbitType = "Upgrade";
                dta.STAGEVERSIONIDOLD = versionId;
                dta.STAGEVERSIONID = th.state.versionNewId;;
                dta.STAGEID = this.state.STAGEID_guid;
                dta.ID = this.state.ID_guid;
            }

            if ($.trim(th.state.StagingInformationDATA.STAGENAME)) {
                //if (!th.state.StagingInformationDATA.checkName) { iss.popover({ content: "分期名称已存在请重新填写！" }); return }
                iss.ajax({
                    type: "POST",
                    url: "/Stage/IToCreate",
                    data: {
                        data: JSON.stringify(dta),
                        SumbitType: SumbitType,
                        EditType: "Save"
                    },
                    success: function success(data) {
                        if (typeof callback == "function") {
                            callback();
                        };
                        var results = data;
                        if (results.message == "成功") {
                            if (status == "add") {
                                var localUrl = window.location.href;
                                var urlPath = localUrl.replace("status=add", "status=edit");
                                if (urlPath.indexOf("dataKey") < 0) {
                                    urlPath = urlPath + "&dataKey=" + versionId;
                                }
                                window.location.href = urlPath;
                                th.setState({
                                    "status": "edit"
                                });
                            }
                            iss.popover({ content: "保存成功", type: 2 });
                            $(window).trigger("treeLoad");
                        } else {
                            iss.popover({ content: "保存失败" });
                        }
                    }
                });
            } else {
                iss.popover({
                    content: "请输入分期名称！"
                });
            }
        }

        /*
         *
         * 根据项目，获取项目编码和最大编码
         * @param id 项目id
         *@param code 分期编码
         */

    }, {
        key: "getPjcodeAMCode",
        value: function getPjcodeAMCode(id, code) {
            var th = this;
            var status = th.state.status;
            var landCode = th.state.landCode;
            var ISINITDATA = th.state.StagingInformationDATA.ISINITDATA;

            iss.ajax({
                type: "post",
                url: "/Stage/IGetStageCodeInfo",
                data: {
                    projectid: id
                },
                success: function success(res) {
                    var result = res.rows;
                    var projectcode = result.projectcode || "";
                    var maxCode = result.MaxCode + "Q";

                    if (code) {
                        maxCode = code.slice(-3);
                        landCode = code.slice(0, -4).replace(projectcode + "-", "");
                    }
                    th.setState({
                        projectCode: projectcode,
                        maxCode: maxCode,
                        pCodeAndLXCode: projectcode + "-" + landCode + "-" + maxCode
                    });
                },
                error: function error(e) {}
            });
        }
    }, {
        key: "render",
        value: function render() {
            var th = this;
            return _react2.default.createElement(
                "article",
                null,
                _react2.default.createElement(
                    "div",
                    null,
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
                            ),
                            _react2.default.createElement(
                                "i",
                                null,
                                "\uFF08",
                                _react2.default.createElement("i", { className: "redFont" }),
                                "\u4E3A\u5FC5\u586B\u9879\uFF09"
                            )
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "functionButton" },
                            _react2.default.createElement(
                                "a",
                                { className: "saveIcon", onClick: this.EVENT_CLICK_SAVE.bind(this), href: "javascript:void(0);" },
                                "\u6682\u5B58"
                            ),
                            _react2.default.createElement(
                                "a",
                                { className: "approvalIcon", onClick: this.EVENT_CLICK_POSTAPP.bind(this), href: "javascript:void(0);" },
                                "\u53D1\u8D77\u5BA1\u6279"
                            )
                        )
                    )
                ),
                _react2.default.createElement(_componentStagingInformation2.default, { location: th.props.location, versionId: th.state.versionId, versionOldId: th.state.versionOldId, projectId: th.state.projectId, status: th.state.status, pCodeAndLXCode: th.state.pCodeAndLXCode, equityTxt: th.state.equityRatio, save: th.EVENT_CLICK_SAVE.bind(th), baseCallBack: th.getBasicInforTodo.bind(th), StagingInformationDATA: th.BIND_StagingInformationDATA.bind(th) }),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "h3",
                        { className: "boxGroupTit" },
                        _react2.default.createElement(
                            "p",
                            null,
                            _react2.default.createElement(
                                "span",
                                null,
                                "\u5206\u671F\u89C4\u5212\u6761\u4EF6\u6307\u6807"
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_componentIndicators2.default, { local: this.props, location: th.props.location, versionId: th.state.versionId, versionOldId: th.state.versionOldId, status: this.state.status, callback: th.evLandList.bind(th) })
                )
            );
        }
    }]);

    return Intallment;
}(_react2.default.Component);

exports.default = Intallment;

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACPSURBVHja3JPdDYMwDIS/RFkirBIYgDnoMFmCbcIo/GxBH5pKFnKBUJ44ydLJztm+RDExxhbogQpY+cAIjpIzwAR0Nos95fBA74Q45M5fvoVW904cSAcT1brlT8gGdV7xTDRag6FgcNqzsIrn+sXvuwOn5MwJzkMthILBQW4w5/+QLjhYLPAClgviEejeAwCBmx7bk07M9gAAAABJRU5ErkJggg=="

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

/***/ 1566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.extend($.fn.validatebox.defaults, {
	missingMessage: "必填项"
});
$.extend($.fn.validatebox.defaults.rules, {

	max: {
		validator: function validator(value, param) {
			var maxVal = param[0];
			return value <= maxVal;
		},
		message: '输入的值不能大于{0}'
	},
	number: {
		validator: function validator(value, param) {
			return (/^(0*|[1-9][0-9]*)(.[0-9]{1,6})?$/.test(value)
			);
		},
		message: '只能输入数字且小数不能多于6位'
	},
	selected: {
		validator: function validator(value) {
			return value != "请选择";
		},
		message: '该项为必选项'
	}

});

/***/ }),

/***/ 1567:
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

__webpack_require__(1568);

var _utils = __webpack_require__(1526);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*选择地块-弹框*/
//兼容ie


//工具集
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[0].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[0].edit == "+r", value: obj.FieldList[0].text == null ? "" : obj.FieldList[0].text, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[0].id) })
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[1].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[1].edit == "+r", value: obj.FieldList[1].text == null ? "" : obj.FieldList[1].text, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[1].id) })
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[2].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[2].edit == "+r", value: obj.FieldList[2].text == null ? "" : obj.FieldList[2].text, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[2].id) })
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[3].regExp, autoComplete: "off", id: obj.FieldList[3].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[3].edit == "+r", value: obj.FieldList[3].text == null ? "" : obj.FieldList[3].text, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[3].id) })
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[4].regExp, autoComplete: "off", id: obj.FieldList[4].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[4].edit == "+r", value: obj.FieldList[4].text == null ? "" : obj.FieldList[4].text, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[4].id) })
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[5].regExp, autoComplete: "off", id: obj.FieldList[5].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[5].edit == "+r", value: obj.FieldList[5].text == null ? "" : obj.FieldList[5].text, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[5].id) })
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", className: "comp-validatebox", "data-regExp": obj.FieldList[6].regExp, autoComplete: "off", id: obj.FieldList[6].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[6].edit == "+r", value: obj.FieldList[6].text == null ? "" : obj.FieldList[6].text, onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[6].id) })
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
                                    _react2.default.createElement("input", { type: "text", disabled: status == "view", id: obj.FieldList[7].id + '_' + obj.ID, readOnly: obj.IsAllDevel == 0 || obj.IsAllDevel == 1 || obj.IsAllDevel == 2 && obj.FieldList[7].edit == "+r", value: obj.FieldList[7].val == null ? "" : parseFloat(obj.FieldList[7].text).toFixed(0), onChange: th.evInputChange.bind(th, obj.ID, obj.FieldList[7].id) })
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
            var num = parseFloat(val);
            if (!Number.isNaN(num) && num < 0) {
                return;
            }
            list.forEach(function (obj, index) {
                if (obj.ID == listId) {
                    obj.FieldList.forEach(function (feildObj, fIndex) {
                        var numreg = /number\((\d+)\)/.exec(feildObj.regExp || "");
                        var fixed = numreg ? numreg[1] : "";
                        if (feildObj.id == fieldId) {
                            var _num = val;
                            if (!_utils.knife.CHECK_InputValue(feildObj, val)) {
                                return;
                            }
                            feildObj.text = _num;
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
            var num = parseFloat(val);
            if (!Number.isNaN(num) && num < 0) {
                return;
            }
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

/***/ 1568:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1569);
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

/***/ 1569:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*aBuilt.less文件*/\n.modal-title {\n  font-size: 16px;\n}\n.aBuiltMain {\n  padding: 0 20px 20px;\n  font-size: 12px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  height: 400px;\n}\n.aBuiltMain .aBuilt_Title {\n  width: 100%;\n  font-size: 14px;\n  margin: 12px 0 2px;\n  line-height: 40px;\n  border-bottom: 1px solid #c9c9c9;\n}\n.aBuiltMain .aBuilt_Title span {\n  display: inline-block;\n}\n.aBuiltMain .aBuilt_Title span:first-child {\n  line-height: 38px;\n  margin-right: 16px;\n  padding-right: 10px;\n  border-bottom: 2px solid #31395d;\n}\n.aBuiltMain .aBuilt_Title span.radioSpan {\n  float: right;\n  margin-left: 16px;\n}\n.aBuiltMain .aBuilt_Title span.radioSpan input[type=radio] {\n  margin: 0;\n  vertical-align: middle;\n}\n.aBuiltMain .aBuilt_Con {\n  height: auto;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.aBuiltMain .aBuilt_Con li {\n  position: relative;\n  float: left;\n  width: 33.33%;\n  min-height: 30px;\n  line-height: 30px;\n  margin-top: 5px;\n  padding-left: 110px;\n  padding-right: 5px;\n}\n.aBuiltMain .aBuilt_Con li label {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 110px;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  font-weight: normal;\n  margin-bottom: 0px;\n  padding-right: 6px;\n  text-align: right;\n}\n.aBuiltMain .aBuilt_Con li input {\n  border: #ddd solid 1px;\n  width: 100%;\n  max-width: 160px;\n  height: 28px;\n}\n.aBuiltMain .aBuilt_Con li input[readonly] {\n  background: #ddd;\n}\n.aBuiltMain .aBuilt_Con li .unitSpan {\n  position: relative;\n  right: 0;\n  top: 50%;\n  padding-left: 3px;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  text-align: left;\n}\n.aBuiltMain .aBuilt_Con li:nth-child(2) {\n  width: 66.67%;\n}\n.aBuiltMain .aBuilt_Con.hide {\n  display: none;\n}\n.aBuiltMain .builtAlertTable {\n  margin-top: 10px;\n  margin-bottom: 0;\n  font-size: 12px;\n}\n.aBuiltMain .builtAlertTable tr {\n  background: #fff;\n}\n.aBuiltMain .builtAlertTable td {\n  border: none;\n  vertical-align: middle;\n  text-align: left;\n  padding: 0;\n}\n.aBuiltMain .builtAlertTable thead tr {\n  border-top: 1px solid #ccc;\n  background: #f5f5f5;\n}\n.aBuiltMain .builtAlertTable tbody label {\n  font-weight: normal;\n  margin-bottom: 0px;\n  padding-right: 6px;\n  text-align: right;\n  width: 100%;\n}\n.aBuiltMain .builtAlertTable tbody input {\n  border: none;\n  height: 28px;\n  width: auto;\n  width: -moz-calc(96%);\n  width: -webkit-calc(96%);\n  width: calc(96%);\n  margin: 2px;\n  border: 1px solid #ddd;\n}\n.aBuiltMain .builtAlertTable tbody input[readonly] {\n  background: #eee;\n}\n.aBuiltMain .builtAlertTable.hide {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1588);
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
		module.hot.accept("!!../node_modules/css-loader/index.js!./component-stagingInformation-groupIframe.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./component-stagingInformation-groupIframe.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1586:
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

var _componentStagingInformationGroupIframe = __webpack_require__(1587);

var _componentStagingInformationGroupIframe2 = _interopRequireDefault(_componentStagingInformationGroupIframe);

var _componentStagingInformationPlateIframe = __webpack_require__(1589);

var _componentStagingInformationPlateIframe2 = _interopRequireDefault(_componentStagingInformationPlateIframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*分期信息栏 */
//兼容ie


// import Abc from "xxx.js";

var StagingInformation = function (_React$Component) {
    _inherits(StagingInformation, _React$Component);

    function StagingInformation(arg) {
        _classCallCheck(this, StagingInformation);

        var _this = _possibleConstructorReturn(this, (StagingInformation.__proto__ || Object.getPrototypeOf(StagingInformation)).call(this, arg));

        _this.state = {
            "SEQNUM": 0,
            "CASENAME": "",
            "STAGENAME": "",
            "PROJECTCOMPANYNAME": "", //项目公司名称id
            "PROJECTCOMPANYEMPNAME": "", //项目公司名称
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
            "PUSHPLATENUMBER": "",
            "STAGECREATEDATE": "1900-01-01T00:00:00",
            "STAGEUPDATEDATE": "1900-01-01T00:00:00",
            "STARTDATE": "1900-01-01T00:00:00",
            "mapUrl": iss.mapEUrl,
            "iframeURL1": "", /*分期总图*/
            "iframeURL2": "", /*推盘图*/
            "checkName": false, //分期名称冲突
            "PROJECTID": _this.props.projectId, /*项目id*/
            "STAGEVERSIONID": _this.props.versionId, /*版本id*/
            "STAGEVERSIONIDOLD": _this.props.versionOldId, //老版本id
            "CITYID": "", /*城市id*/
            "CITYNAME": "", /*城市name*/
            "AREAID": "", /*区域id*/
            "AREANAME": "" /*区域name*/
        };

        _this.tiem = "";
        _this.grupInfo = []; //组团数据  
        _this.plateInfo = []; //推盘数据
        return _this;
    }
    /*获取分期信息*/


    _createClass(StagingInformation, [{
        key: 'getAjax',
        value: function getAjax(callback) {
            var th = this;
            var status = th.props.status;
            var versionId = th.state.STAGEVERSIONID;
            var versionOldId = th.state.STAGEVERSIONIDOLD;
            var reqtype;
            var json = {};
            if (status == "edit") {
                json.Id = versionId;
                json.reqtype = "Edit";
            } else if (status == "add") {
                json.projectId = th.state.PROJECTID;
                json.reqtype = "Add";
            } else if (status == "upgrade") {
                json.versionId = versionOldId || versionId;
                json.reqtype = "Upgrade";
            }
            iss.ajax({
                type: "post",
                url: "/Stage/IGetInitInfo",
                data: json,
                success: function success(res) {
                    //console.log(res.rows);  
                    if (!res.rows) {
                        //console.log("基本信息请求有问题");
                        return false;
                    }
                    var baseformInfo = res.rows.BaseFormInfo;
                    /*获取到基本信息后，返回*/
                    th.props.baseCallBack(baseformInfo);
                    th.setState({
                        "SEQNUM": baseformInfo.SEQNUM, /*分期排序字段*/
                        "CASENAME": baseformInfo.CASENAME || "",
                        "STAGENAME": baseformInfo.STAGENAME,
                        "PROJECTID": baseformInfo.PROJECTID, /*项目id*/
                        "PROJECTCOMPANYNAME": baseformInfo.PROJECTCOMPANYNAME, //项目公司名称id
                        "PROJECTCOMPANYEMPNAME": baseformInfo.PROJECTCOMPANYEMPNAME, //项目公司名称
                        "STAGEID": baseformInfo.STAGEID,
                        "STAGECREATEDATE": baseformInfo.STAGECREATEDATE,
                        "STAGEUPDATEDATE": baseformInfo.STAGEUPDATEDATE,
                        "STARTDATE": baseformInfo.STARTDATE,
                        "STAGECODE": baseformInfo.STAGECODE || "",
                        "STATUS": baseformInfo.STATUS,
                        "ISELFPRODUCTTYPE": baseformInfo.ISELFPRODUCTTYPE,
                        "TRADERMODE": baseformInfo.TRADERMODE,
                        "MERGEWAY": baseformInfo.MERGEWAY,
                        "PROJECTTYPE": baseformInfo.PROJECTTYPE,
                        "TAXINGWAY": baseformInfo.TAXINGWAY,
                        "PLANSTAGE": baseformInfo.PLANSTAGE,
                        "PROJECTNAME": baseformInfo.PROJECTNAME,
                        "ID": baseformInfo.ID,
                        "PRINCIPALNAME": baseformInfo.PRINCIPALNAME,
                        "PRINCIPAL": baseformInfo.PRINCIPAL,
                        "GROUPNUMBER": baseformInfo.GROUPNUMBER || 0,
                        "PUSHPLATENUMBER": baseformInfo.PUSHPLATENUMBER || 0,
                        "STAGESELFPRODUCTS": baseformInfo.STAGESELFPRODUCTS,
                        "CITYID": baseformInfo.CITYID, /*城市id*/
                        "CITYNAME": baseformInfo.CITYNAME, /*城市name*/
                        "AREAID": baseformInfo.AREAID, /*区域id*/
                        "AREANAME": baseformInfo.AREANAME, /*区域name*/
                        "ISINITDATA": baseformInfo.ISINITDATA /*判断否是历史分期 返回1 为历史项目*/

                    }, function (arg) {
                        //console.log(th.state)
                        th.bind_combobox(res);
                        if (callback) {
                            callback();
                        };
                        if ($("#STAGECREATEDATE").val() != "") {
                            $("#STAGENAME").attr("readonly", "readonly");
                            $("#STAGENAME").addClass("inputGray");
                            $("#GROUPNUMBER").attr("readonly", "readonly");
                            $("#GROUPNUMBER").addClass("inputGray");
                        }; //审批通过()升级本部的分期不可修改
                    });
                },
                error: function error(e) {}
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var th = this;
            var id = th.state.STAGEVERSIONID;
            if (id == "1E1CB1E95A864AFA961392C3E3644642" || !id) {
                iss.hashHistory.replace({ pathname: "index" });
            } else {
                $(function () {
                    th.getAjax(function (arg) {
                        th.BIND_ONLOAD();
                        th.evValidInput();
                    });
                });
            }
            //  toolsTab.bindTab(this.props);//绑定头部标签
        }
        //推盘划分

    }, {
        key: 'BIND_OPENPlateIframe',
        value: function BIND_OPENPlateIframe() {
            var th = this,
                data = this.plateInfo;
            var status = th.props.status;
            if (status == "add") {
                iss.popover({ content: "请先暂存分期信息" });
                return false;
            }
            iss.Alert(_defineProperty({
                title: "推盘划分",
                width: 500,
                height: 250,
                content: '<div id="PlateIframeBox"></div>',
                okVal: "保存",
                cancel: "取消",
                ok: function ok(da) {
                    //console.log(th.plateInfo.state.dataList)
                    var stageversionid = th.state.STAGEVERSIONID,
                        newPushPlate = [],
                        buildingPushPlateMapping = [],
                        valueNumber = [],
                        deletePushPlate = [],
                        newPushPlateNumber = [];
                    th.plateInfo.state.dataList.map(function (el, ind) {
                        if (el.delete == 'del') {
                            if (deletePushPlate.indexOf(el.pushPlateId) == -1 && el.pushPlateId != null) {
                                deletePushPlate.push(el.pushPlateId);
                                el.pushPlateId = null;
                            }
                        }
                        if (el.pushPlateId != null && el.pushPlateNumber != 0) {
                            var nGn = {
                                "key": el.pushPlateId,
                                "value": el.pushPlateNumber
                            };
                            newPushPlateNumber.push(nGn);
                        }

                        if (el.delete == null) {
                            var oldG = {
                                "key": el.buildingId,
                                "value": el.pushPlateId
                            };
                            buildingPushPlateMapping.push(oldG);
                        }

                        if (valueNumber.indexOf(el.pushPlateNumber) == -1) {
                            valueNumber.push(el.pushPlateNumber);
                            if (el.current == "new" && el.pushPlateNumber != 0) {
                                var newG = {
                                    "key": el.pushPlateId,
                                    "value": el.pushPlateNumber
                                };
                                newPushPlate.push(newG);
                            }
                        }
                    });
                    var json = {
                        "stageversionid": stageversionid,
                        "newPushPlate": newPushPlate,
                        "buildingPushPlateMapping": buildingPushPlateMapping,
                        "deletePushPlate": deletePushPlate,
                        "newPushPlateNumber": newPushPlateNumber
                    };
                    iss.ajax({
                        url: "/Stage/ISavePushPlateMapping",
                        data: json,
                        success: function success(data) {
                            th.setState({
                                "PUSHPLATENUMBER": Math.max.apply(null, valueNumber)
                            });
                        },
                        error: function error() {
                            console.log('失败');
                        }
                    });
                }
            }, 'cancel', function cancel() {}));
            _reactDom2.default.render(_react2.default.createElement(_componentStagingInformationPlateIframe2.default, { data: data, callback: th.PlateIframeCallback.bind(this), versionId: th.state.STAGEVERSIONID }), document.querySelector("#PlateIframeBox"));
        }

        //组团划分

    }, {
        key: 'BIND_OPENGroupIframe',
        value: function BIND_OPENGroupIframe() {
            var th = this,
                data = this.grupInfo;
            var status = th.props.status;
            if (status == "add") {
                iss.popover({ content: "请先暂存分期信息" });
                return false;
            }
            iss.Alert(_defineProperty({
                title: "组团划分",
                width: 500,
                height: 250,
                content: '<div id="GroupIframeBox"></div>',
                okVal: "保存",
                cancel: "取消",
                ok: function ok(da) {
                    var stageversionid = th.state.STAGEVERSIONID,
                        newGroup = [],
                        buildingGroupMapping = [],
                        valueNumber = [],
                        deleteGroup = [],
                        newGroupNumber = [];
                    th.grupInfo.state.dataList.map(function (el, ind) {
                        if (el.delete == 'del') {
                            if (deleteGroup.indexOf(el.groupId) == -1) {
                                deleteGroup.push(el.groupId);
                                el.groupId = null;
                            }
                        }
                        if (el.groupId != null && el.groupnumber != 0) {
                            var nGn = {
                                "key": el.groupId,
                                "value": el.groupnumber
                            };
                            newGroupNumber.push(nGn);
                        }

                        if (el.current == "new") {
                            var newG = {
                                "key": el.groupId,
                                "value": el.groupnumber
                            };
                            newGroup.push(newG);
                        }
                        var oldG = {
                            "key": el.buildingId,
                            "value": el.groupId
                        };
                        buildingGroupMapping.push(oldG);
                        if (valueNumber.indexOf(el.groupnumber) == -1) {
                            valueNumber.push(el.groupnumber);
                        }
                    });
                    var json = {
                        "stageversionid": stageversionid,
                        "newGroup": newGroup,
                        "buildingGroupMapping": buildingGroupMapping,
                        "deleteGroup": deleteGroup,
                        "newGroupNumber": newGroupNumber
                        //console.log(json)
                    };iss.ajax({
                        url: "/Stage/ISaveGroupBuildingMapping",
                        data: json,
                        success: function success(data) {
                            th.setState({
                                "GROUPNUMBER": Math.max.apply(null, valueNumber)
                            });
                        },
                        error: function error() {
                            console.log('失败');
                        }
                    });
                }
            }, 'cancel', function cancel() {}));
            _reactDom2.default.render(_react2.default.createElement(_componentStagingInformationGroupIframe2.default, { data: data, callback: th.GroupIframeCallback.bind(this), versionId: th.state.STAGEVERSIONID }), document.querySelector("#GroupIframeBox"));
        }
    }, {
        key: 'GroupIframeCallback',
        value: function GroupIframeCallback(da) {
            this.grupInfo = da;
        }
    }, {
        key: 'PlateIframeCallback',
        value: function PlateIframeCallback(da) {
            this.plateInfo = da;
        }
    }, {
        key: 'BIND_CHECK_INPUT',
        value: function BIND_CHECK_INPUT(name) {
            //检查非法查询
            var reg = /[^\u4e00-\u9fa5\w\d\_\-]/ig;
            return name == "" ? false : reg.test(name);
        }
    }, {
        key: 'onUpload',
        value: function onUpload() {
            iss.upload({
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                },
                server: 'http://2betop.net/fileupload.php',
                fileNumLimit: 300,
                fileSizeLimit: 5 * 1024 * 1024, // 200 M
                fileSingleSizeLimit: 1 * 1024 * 1024 // 50 M
            });
        }
    }, {
        key: 'BIND_CHANGE_DATA',
        value: function BIND_CHANGE_DATA(data) {
            this.props.StagingInformationDATA(data);
        }
    }, {
        key: 'BIND_ONLOAD',
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
        }

        /* */

    }, {
        key: 'handChooseTo',
        value: function handChooseTo(da) {
            var th = this;
            var peopleJson = {};
            var PrincipalId = {
                "id": th.state.PRINCIPAL,
                "text": th.state.PRINCIPALNAME
            };
            if (th.state.PRINCIPAL) {
                peopleJson['PrincipalId'] = PrincipalId;
            }

            iss.chooseTo({
                url: "/Common/IGetOrganizationalUsers",
                title: "选择人员<i class='fontRed'>（双击选择人员）</i>",
                pepole: peopleJson, //已选人员名单
                callback: function callback(da) {
                    //console.log(da);
                    if (Object.keys(da).length == 0 || !da) {
                        th.setState({
                            "PRINCIPAL": "",
                            "PRINCIPALNAME": ""
                        });
                    } else {
                        for (var key in da) {
                            //console.log(da[key]);
                            th.setState({
                                "PRINCIPAL": da[key].id,
                                "PRINCIPALNAME": da[key].text
                            });
                            th.BIND_CHANGE_DATA(th.state);
                        }
                    }
                    th.evValidForm();
                }
            });
        }
    }, {
        key: 'handChooseToProjectName',
        value: function handChooseToProjectName(da) {
            //弹层选择项目公司名称
            var th = this;
            var peopleJson = {};
            var PrincipalId = {
                "id": th.state.PROJECTCOMPANYNAME,
                "text": th.state.PROJECTCOMPANYEMPNAME
            };
            if (th.state.PROJECTCOMPANYNAME) {
                peopleJson['PrincipalId'] = PrincipalId;
            }
            iss.chooseTo({
                url: "/Stage/IGetSelectUserViewList",
                title: "选择项目公司名称<i class='fontRed'>（双击选择项目公司）</i>",
                pepole: peopleJson, //已选项目公司名称
                searchURL: "/Stage/IGetSelectUserViewList",
                callback: function callback(da) {

                    if (Object.keys(da).length == 0 || !da) {
                        th.setState({
                            "PROJECTCOMPANYNAME": "",
                            "PROJECTCOMPANYEMPNAME": ""
                        });
                    } else {
                        for (var key in da) {
                            //console.log(da[key]);
                            th.setState({
                                "PROJECTCOMPANYNAME": da[key].id,
                                "PROJECTCOMPANYEMPNAME": da[key].text
                            });
                            th.BIND_CHANGE_DATA(th.state);
                        }
                    }
                    th.evValidForm();
                }
            });
        }
    }, {
        key: 'handleInputTextChange',
        value: function handleInputTextChange(e) {
            var _this2 = this;

            var th = this;
            var target = e.target.id;
            //console.log(len);
            /*   if(this.BIND_CHECK_INPUT(e.target.value)){ //检查特殊字符
                  return
              } */
            if (e.target.getAttribute("data-type") && e.target.getAttribute("data-type").indexOf("number") >= 0) {
                var max = e.target.getAttribute("data-max") || "",
                    min = e.target.getAttribute("data-max") || "",
                    numreg = /^[1-9]\d*$/ig;
                if (!numreg.test(e.target.value) && e.target.value != "") {
                    return;
                } else if (max) {
                    if (parseFloat(e.target.value) > parseFloat(max)) {
                        return;
                    }
                } else if (min) {
                    if (parseFloat(e.target.value) < parseFloat(min)) {
                        return;
                    }
                }
            }
            this.setState(_defineProperty({}, target, target == "GROUPNUMBER" ? e.target.value.trim() || 0 : e.target.value.trim()), function () {
                //console.log(th.state[target]) 
                th.BIND_CHANGE_DATA(_this2.state);
            });

            // console.log(e.target.id);
            //console.log(e.target.value);

        }
    }, {
        key: 'handleSelectTextChange',
        value: function handleSelectTextChange(e, b, c) {
            var _this3 = this;

            var th = this;
            this.setState(_defineProperty({}, e, b), function () {
                //console.log(th.state[target]) 
                th.BIND_CHANGE_DATA(_this3.state);
            });
            // console.log(this.state);
        }
    }, {
        key: 'bind_combobox',
        value: function bind_combobox(arg) {
            //console.log(arg.rows.SelectOptions.STATUS);
            var th = this;
            var installmentState = $("#STATUS"); //分期状态
            installmentState.combobox({
                valueField: "val",
                textField: "label",
                editable: false,
                readonly: false,
                required: true,
                panelHeight: "auto",
                onChange: th.handleSelectTextChange.bind(th, "STATUS"),
                data: arg.rows.SelectOptions.STATUS
            });
            if (arg.rows.BaseFormInfo.STATUS == 0 || arg.rows.BaseFormInfo.STATUS == null) {
                installmentState.combobox("select", 0);
            } else {
                installmentState.combobox("select", arg.rows.BaseFormInfo.STATUS);
            }

            var selfSustaining = $("#STAGESELFPRODUCTS"); //自持业态
            selfSustaining.combobox({
                valueField: "val",
                textField: "label",
                editable: false,
                readonly: false,
                required: true,
                multiple: true,
                panelHeight: "auto",
                onChange: th.handleSelectTextChange.bind(th, "STAGESELFPRODUCTS"),
                data: arg.rows.SelectOptions.ISELFPRODUCTTYPE,
                onSelect: function onSelect(e) {
                    //console.log(e.val);
                    var val = e.val;
                    if (val == 0) {
                        setTimeout(function (arg) {
                            selfSustaining.combobox("setValues", [0]);
                        });
                    } else if (val != 0) {
                        setTimeout(function (arg) {
                            var STAG_num = th.state.STAGESELFPRODUCTS;
                            var new_arr = [];
                            new_arr = STAG_num.filter(function (obj) {
                                return obj != 0;
                            });
                            selfSustaining.combobox("setValues", new_arr);
                            //selfSustaining.combobox("setValues",[0]);
                        });
                    }
                }
            });
            if (arg.rows.BaseFormInfo.STAGESELFPRODUCTS == 0 || arg.rows.BaseFormInfo.STAGESELFPRODUCTS == null) {
                selfSustaining.combobox("setValues", [""]);
            } else {
                selfSustaining.combobox("setValues", arg.rows.BaseFormInfo.STAGESELFPRODUCTS);
            }
            var tradersWay = $("#TRADERMODE"); //操盘方式
            tradersWay.combobox({
                valueField: "val",
                textField: "label",
                editable: false,
                required: true,
                readonly: false,
                panelHeight: "auto",
                onChange: th.handleSelectTextChange.bind(th, "TRADERMODE"),
                data: arg.rows.SelectOptions.TRADERMODE
            });
            if (arg.rows.BaseFormInfo.TRADERMODE == 0 || arg.rows.BaseFormInfo.TRADERMODE == null) {
                tradersWay.combobox("select", "");
            } else {
                tradersWay.combobox("select", arg.rows.BaseFormInfo.TRADERMODE);
            }

            var tableManner = $("#MERGEWAY"); //并表方式
            tableManner.combobox({
                valueField: "val",
                textField: "label",
                editable: false,
                required: true,
                readonly: false,
                panelHeight: "auto",
                onChange: th.handleSelectTextChange.bind(th, "MERGEWAY"),
                data: arg.rows.SelectOptions.MERGEWAY
            });
            if (arg.rows.BaseFormInfo.MERGEWAY == 0 || arg.rows.BaseFormInfo.MERGEWAY == null) {
                tableManner.combobox("select", "");
            } else {
                tableManner.combobox("select", arg.rows.BaseFormInfo.MERGEWAY);
            }

            var projectType = $("#PROJECTTYPE"); //项目类型
            projectType.combobox({
                valueField: "val",
                textField: "label",
                editable: false,
                readonly: false,
                required: true,
                panelHeight: "auto",
                onChange: th.handleSelectTextChange.bind(th, "PROJECTTYPE"),
                data: arg.rows.SelectOptions.PROJECTTYPE
            });
            if (arg.rows.BaseFormInfo.PROJECTTYPE == 0 || arg.rows.BaseFormInfo.PROJECTTYPE == null) {
                projectType.combobox("select", "");
            } else {
                projectType.combobox("select", arg.rows.BaseFormInfo.PROJECTTYPE);
            }

            var taxManner = $("#TAXINGWAY"); //项目计税方式
            taxManner.combobox({
                valueField: "val",
                textField: "label",
                editable: false,
                readonly: false,
                required: true,
                panelHeight: "auto",
                onChange: th.handleSelectTextChange.bind(th, "TAXINGWAY"),
                data: arg.rows.SelectOptions.TAXINGWAY
            });
            if (arg.rows.BaseFormInfo.TAXINGWAY == 0 || arg.rows.BaseFormInfo.TAXINGWAY == null) {
                taxManner.combobox("select", "");
            } else {
                taxManner.combobox("select", arg.rows.BaseFormInfo.TAXINGWAY);
            }

            var controlStage = $("#PLANSTAGE"); //计划管控阶段
            controlStage.combobox({
                valueField: "val",
                textField: "label",
                editable: false,
                readonly: false,
                panelHeight: "auto",
                onChange: th.handleSelectTextChange.bind(th, "PLANSTAGE"),
                data: arg.rows.SelectOptions.PLANSTAGE
            });
            if (arg.rows.BaseFormInfo.PLANSTAGE == 0 || arg.rows.BaseFormInfo.PLANSTAGE == null) {
                controlStage.combobox("select", "");
            } else {
                controlStage.combobox("select", arg.rows.BaseFormInfo.PLANSTAGE);
            }
        }
    }, {
        key: 'BIND_CHECKPROJECTNAME',
        value: function BIND_CHECKPROJECTNAME(ev) {
            //检查姓名名称是否冲突
            var th = this;
            var projectid = th.state.PROJECTID;
            var name = ev.target.value;
            if (this.BIND_CHECK_INPUT(name)) {
                //检查特殊字符
                return;
            }
            th.setState({
                STAGENAME: name
            });
            //clearTimeout(th.time);
            //th.time = setTimeout(arg=>{
            iss.ajax({
                type: "POST",
                url: "/Stage/ICheckStageName",
                data: {
                    projectid: projectid,
                    name: name
                },
                success: function success(data) {
                    if (data["rows"] == false) {
                        th.setState({
                            STAGENAME: ""
                        });
                        iss.popover({ content: "该分期名称已存在，请重新输入" });
                    }
                    th.BIND_CHANGE_DATA(th.state);
                },
                error: function error(e) {}
            });
            //},500);
        }
    }, {
        key: 'xmViewError',
        value: function xmViewError(event) {
            // this.attr("src","../img/xmViewError.png")
            $(event.target).attr("src", "../../Content/img/xmViewError.png");
        }
    }, {
        key: 'BIND_EditStage',
        value: function BIND_EditStage() {
            var th = this;
            var status = th.props.status;
            var projectId = th.state.PROJECTID; /*项目id*/
            var versionId = th.state.STAGEVERSIONID; /*版本id*/
            if (status == "add") {
                iss.popover({ content: "请先暂存分期信息" });
                return false;
            }
            var mapSrc = iss.mapEUrl + "/Admin/EditStage?stage_id=" + versionId + "&stage_map_id=stage" + versionId;
            iss.evRereshMapCookie(th, mapSrc, "stage");
            /*if($.trim(th.state.STAGENAME)) {
                iss.Alert({
                    title: "提示",
                    width: 300,
                    height: 90,
                    content: `<div class="Alert">确认保存项目信息数据并上传编辑分期总图?</div>`,
                    ok() {
                        th.props.save(arg => {
                            if (status == "add") {
                                window.open(th.state.mapUrl+"/Admin/EditStage?stage_id="+th.state.STAGEVERSIONID+"&stage_map_id=stage"+th.state.STAGEVERSIONID);
                            } else {
                                window.open(th.state.mapUrl+"/Admin/EditStage?stage_id="+th.state.STAGEVERSIONID+"&stage_map_id=stage"+th.state.STAGEVERSIONID);
                            }
                        })
                                
                    }
                })
                            
            } else {
                iss.popover({ content: "请输入分期名称" });
            }*/
        } //上传编辑分期总图

    }, {
        key: 'BIND_EditPushPlate',
        value: function BIND_EditPushPlate() {
            var th = this;
            var status = th.props.status;
            var projectId = th.state.PROJECTID; /*项目id*/
            var versionId = th.state.STAGEVERSIONID; /*版本id*/
            if (status == "add") {
                iss.popover({ content: "请先暂存分期信息" });
                return false;
            }
            var mapSrc = iss.mapEUrl + "/Admin/EditPushPlate?stage_id=" + versionId + "&stage_map_id=stage" + versionId;
            iss.evRereshMapCookie(th, mapSrc, "stage");
            /*if ($.trim(th.state.STAGENAME)) {
                iss.Alert({
                    title: "提示",
                    width: 300,
                    height: 90,
                    content: `<div class="Alert">确认保存项目信息数据并上传编辑推盘图?</div>`,
                    ok() {
                        th.props.save(arg => {
                            if (status == "add") {
                                window.open(th.state.mapUrl+"/Admin/EditPushPlate?stage_id="+th.state.STAGEVERSIONID+"&stage_map_id=stage"+th.state.STAGEVERSIONID);
                            } else {
                                window.open(th.state.mapUrl+"/Admin/EditPushPlate?stage_id="+th.state.STAGEVERSIONID+"&stage_map_id=stage"+th.state.STAGEVERSIONID);
                            }
                        })
                                
                    }
                })
                            
            } else {
                iss.popover({ content: "请输入分期名称" });
            }*/
        } //上传编辑推盘图

    }, {
        key: 'BIND_mapsStage',
        value: function BIND_mapsStage() {
            window.open(iss.mapEUrl + "/Map/Stage?stage_id=" + this.state.STAGEVERSIONID + "&stage_map_id=stage" + this.state.STAGEVERSIONID);
        } //点击分期总图预览

    }, {
        key: 'BIND_mapsTp',
        value: function BIND_mapsTp() {
            window.open(iss.mapEUrl + "/Map/PUSHPLATE?stage_id=" + this.state.STAGEVERSIONID + "&stage_map_id=stage" + this.state.STAGEVERSIONID);
        } //点击推盘图预览
        /*验证input*/

    }, {
        key: 'evValidInput',
        value: function evValidInput() {
            $(".stage-validatebox").each(function (index, ele) {
                var eleDom = $(ele);
                var valideRule = {
                    required: true
                };
                eleDom.validatebox(valideRule);
            });
        }
        /*验证form*/

    }, {
        key: 'evValidForm',
        value: function evValidForm() {
            var isValid = $("#stageInforForm").form("validate");
            //console.log(isValid);
            return isValid;
        }
    }, {
        key: 'render',
        value: function render() {
            var th = this;
            var STAGECREATEDATE = th.state.STAGECREATEDATE == "1900-01-01T00:00:00" ? "" : this.state.STAGECREATEDATE.split("T")[0];
            var STAGEUPDATEDATE = th.state.STAGEUPDATEDATE == "1900-01-01T00:00:00" ? "" : this.state.STAGEUPDATEDATE.split("T")[0];
            var STARTDATE = th.state.STARTDATE == "1900-01-01T00:00:00" ? "" : this.state.STARTDATE.split("T")[0];
            return _react2.default.createElement(
                'article',
                { className: 'staging-box' },
                _react2.default.createElement(
                    'section',
                    { className: 'staging-left boxSizing projectinFormation' },
                    _react2.default.createElement(
                        'form',
                        { id: 'stageInforForm' },
                        _react2.default.createElement(
                            'table',
                            { className: 'formTable', width: '100%' },
                            _react2.default.createElement(
                                'tbody',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u9879\u76EE\u540D\u79F0'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { readOnly: 'true', id: 'PROJECTNAME', value: this.state.PROJECTNAME || "", className: 'inputTextBox inputGray boxSizing', type: 'text' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u5206\u671F\u540D\u79F0'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { onBlur: this.BIND_CHECKPROJECTNAME.bind(this), onChange: this.handleInputTextChange.bind(this), id: 'STAGENAME', value: this.state.STAGENAME || "", className: 'inputTextBox boxSizing stage-validatebox', type: 'text', maxLength: '20' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u5206\u671F\u6848\u540D'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { onChange: this.handleInputTextChange.bind(this), id: 'CASENAME', value: this.state.CASENAME || "", className: 'inputTextBox boxSizing stage-validatebox', type: 'text', maxLength: '20' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u5206\u671F\u7F16\u7801'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { readOnly: 'true', id: 'STAGECODE', value: this.state.ISINITDATA == 1 ? th.state.STAGECODE : th.props.pCodeAndLXCode, className: 'inputTextBox inputGray boxSizing', type: 'text' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u5206\u671F\u72B6\u6001'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', id: 'STATUS', className: 'easyui-combobox easyui-validatebox', 'data-options': 'validType:\'selected\'' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u81EA\u6301\u4E1A\u6001'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', id: 'STAGESELFPRODUCTS', className: 'easyui-combobox easyui-validatebox', 'data-options': 'validType:\'selected\'' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u64CD\u76D8\u65B9\u5F0F'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', id: 'TRADERMODE', className: 'easyui-combobox easyui-validatebox', 'data-options': 'validType:\'selected\'' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u9879\u76EE\u516C\u53F8\u540D\u79F0'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { readOnly: 'true', onClick: this.handChooseToProjectName.bind(this), id: 'PROJECTCOMPANYNAME', value: this.state.PROJECTCOMPANYEMPNAME || "", className: 'inputTextBox boxSizing stage-validatebox', type: 'text' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u9879\u76EE\u8D1F\u8D23\u4EBA'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { readOnly: 'true', onClick: this.handChooseTo.bind(this), id: 'PRINCIPALNAME', value: this.state.PRINCIPALNAME || "", className: 'inputTextBox boxSizing stage-validatebox', type: 'text' }),
                                        _react2.default.createElement('img', { className: 'symbol headIcon', src: '../../Content/img/head-icon.png' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u6743\u76CA\u6BD4\u4F8B'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { readOnly: 'true', id: 'equityTxt', value: this.props.equityTxt, className: 'inputTextBox inputGray boxSizing', type: 'text' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u5E76\u8868\u65B9\u5F0F'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', id: 'MERGEWAY', className: 'easyui-combobox easyui-validatebox', 'data-options': 'validType:\'selected\'' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u9879\u76EE\u7C7B\u578B'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', id: 'PROJECTTYPE', className: 'easyui-combobox easyui-validatebox', 'data-options': 'validType:\'selected\'' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u9879\u76EE\u8BA1\u7A0E\u65B9\u5F0F'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', id: 'TAXINGWAY', className: 'easyui-combobox easyui-validatebox', 'data-options': 'validType:\'selected\'' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u5206\u671F\u521B\u5EFA\u65E5\u671F'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { readOnly: 'true', id: 'STAGECREATEDATE', value: STAGECREATEDATE, className: 'inputTextBox inputGray boxSizing', type: 'text' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u5206\u671F\u66F4\u65B0\u65E5\u671F'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { readOnly: 'true', id: 'STAGEUPDATEDATE', value: STAGEUPDATEDATE, className: 'inputTextBox inputGray boxSizing', type: 'text' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u5206\u671F\u603B\u56FE'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(
                                            'button',
                                            { type: 'button', onClick: this.BIND_EditStage.bind(this), className: 'btn btnStyle uploadIconBtn' },
                                            '\u4E0A\u4F20/\u6807\u8BB0\u7EC4\u56E2\u3001\u697C\u680B'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        { style: { "display": "none" } },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u8BA1\u5212\u7BA1\u63A7\u9636\u6BB5'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        { style: { "display": "none" } },
                                        _react2.default.createElement('input', { readOnly: 'true', type: 'text', id: 'PLANSTAGE' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        { style: { "display": "none" } },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u542F\u52A8\u5F00\u53D1\u65F6\u95F4'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        { style: { "display": "none" } },
                                        _react2.default.createElement('input', { readOnly: 'true', id: 'STARTDATE', value: STARTDATE, className: 'inputTextBox inputGray boxSizing', type: 'text' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u7EC4\u56E2\u6570\u91CF'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { 'data-type': 'number', readOnly: 'true', disabled: 'disabled', 'data-max': '10', 'data-min': '1', id: 'GROUPNUMBER', value: this.state.GROUPNUMBER || 1, className: 'inputTextBox boxSizing stage-validatebox', type: 'text', maxLength: '4' }),
                                        _react2.default.createElement('input', { onClick: this.BIND_OPENGroupIframe.bind(this), className: 'btn btnStyle uploadIconBtn', value: '\u7EC4\u56E2\u5212\u5206', type: 'button' })
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing' },
                                            '\u63A8\u76D8\u56FE'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(
                                            'button',
                                            { type: 'button', onClick: this.BIND_EditPushPlate.bind(this), className: 'btn btnStyle uploadIconBtn' },
                                            '\u6807\u8BB0\u63A8\u76D8\u6279\u6B21'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'formTableLabel boxSizing redFont' },
                                            '\u63A8\u76D8\u6279\u6B21'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement('input', { 'data-type': 'number', readOnly: 'true', disabled: 'disabled', 'data-max': '10', 'data-min': '1', id: 'PUSHPLATENUMBER', value: this.state.PUSHPLATENUMBER || 1, className: 'inputTextBox boxSizing stage-validatebox', type: 'text', maxLength: '4' }),
                                        _react2.default.createElement('input', { onClick: this.BIND_OPENPlateIframe.bind(this), className: 'btn btnStyle uploadIconBtn', value: '\u63A8\u76D8\u5212\u5206', type: 'button' })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'staging-right boxSizing fieldLocation fl' },
                    _react2.default.createElement(
                        'div',
                        { id: 'myCarousel', className: 'carousel slide carouselStyle' },
                        _react2.default.createElement(
                            'div',
                            { className: 'carousel-inner' },
                            _react2.default.createElement(
                                'div',
                                { className: 'item active' },
                                _react2.default.createElement('img', { className: 'fullScreenIcon', src: '../../Content/img/fullScreen.png', onClick: this.BIND_mapsStage.bind(this), title: '\u5168\u5C4F' }),
                                _react2.default.createElement('iframe', { ref: 'iframe1', id: 'iframe1', src: this.state.iframeURL1, onError: this.xmViewError.bind(this), frameBorder: '0', marginHeight: '0', marginWidth: '0', scrolling: 'no', width: '100%', height: '291' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'item' },
                                _react2.default.createElement('img', { className: 'fullScreenIcon', src: '../../Content/img/fullScreen.png', onClick: this.BIND_mapsTp.bind(this), title: '\u5168\u5C4F' }),
                                _react2.default.createElement('iframe', { ref: 'iframe2', id: 'iframe2', src: this.state.iframeURL2, onError: this.xmViewError.bind(this), frameBorder: '0', marginHeight: '0', marginWidth: '0', scrolling: 'no', width: '100%', height: '291' })
                            )
                        ),
                        _react2.default.createElement('a', { className: 'carousel-control left glyphicon glyphicon-menu-left', href: '#myCarousel',
                            'data-slide': 'prev' }),
                        _react2.default.createElement('a', { className: 'carousel-control right glyphicon glyphicon-menu-right', href: '#myCarousel',
                            'data-slide': 'next' })
                    )
                ),
                _react2.default.createElement('div', { className: 'clear' })
            );
        }
    }]);

    return StagingInformation;
}(_react2.default.Component);

exports.default = StagingInformation;

/***/ }),

/***/ 1587:
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

__webpack_require__(1580);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*分期信息栏 */
//兼容ie


//专用css
var GroupIframe = function (_React$Component) {
    _inherits(GroupIframe, _React$Component);

    function GroupIframe(arg) {
        _classCallCheck(this, GroupIframe);

        var _this = _possibleConstructorReturn(this, (GroupIframe.__proto__ || Object.getPrototypeOf(GroupIframe)).call(this, arg));

        _this.url = "/Stage/IGetGroupBuilding";
        _this.state = {
            dataList: [], //总数据
            versionId: _this.props.versionId,
            index: 0, //当前组团
            _group: [],
            checked: ''
        }, _this.index = 0;
        _this.nameList = [];
        _this._group = [];
        _this._nData = [];
        return _this;
    }
    //?stageversionid=2a8ff0cd-5718-725e-aa85-3c577cd9f22f


    _createClass(GroupIframe, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getAjax();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            $(".groupListScroll").mCustomScrollbar({
                autoDraggerLength: true,
                scrollButtons: { enable: true }
            });
        }
    }, {
        key: "getAjax",
        value: function getAjax(arg) {
            var th = this;
            th.state.checked = th.props.versionId;
            //th.state.checked = "2a8ff0cd-5718-725e-aa85-3c577cd9f22f"
            iss.ajax({
                url: this.url + "?stageversionid=" + th.state.checked,
                data: {
                    //stageversionid: th.state.versionId
                },
                success: function success(data) {
                    if (null != data.rows && data.rows.length > 0) {
                        var arr = [];
                        data.rows.forEach(function (el, ind) {
                            arr.push(el.groupnumber);
                        });

                        if (arr.indexOf(1) == -1) {

                            var newId = iss.guid();
                            var addObj = {
                                "groupId": newId,
                                "groupName": "组团",
                                "groupnumber": 1,
                                "buildingId": null,
                                "buildingName": null,
                                "current": "new"
                            };
                            data.rows.push(addObj);
                        }
                        th.setState({
                            dataList: data.rows,
                            index: data.rows[0]["groupnumber"],
                            _group: th._group
                        });
                    }
                    th.props.callback(th);
                },
                error: function error() {
                    console.log('失败');
                }
            });
        }
        //删除组团

    }, {
        key: "delGroup",
        value: function delGroup(da, ev) {
            var target = ev.currentTarget;
            var th = this,
                arr = [];
            var delAr = th.state.dataList;
            th.setState({
                index: da
            });
            delAr.forEach(function (el, ind) {
                if (arr.indexOf(el.groupnumber) == -1) {
                    arr.push(el.groupnumber);
                }
            });
            delAr.forEach(function (el, ind) {
                if (Math.max.apply(null, arr) != 1) {
                    if (el.groupnumber == da) {
                        el.groupName = "nomapping";
                        el.groupnumber = 0;
                        el.delete = "del";
                    }
                }

                if (el.groupnumber > da) {
                    el.groupnumber = el.groupnumber - 1;
                }
            });

            th.setState({
                dataList: delAr
            });
        }
        // 组团名称

    }, {
        key: "groupName",
        value: function groupName() {
            var _this2 = this;

            var th = this,
                arr = [];
            var _len = th.state.dataList.length;
            th._group = [];
            th._nData = [];
            for (var i = 0; i < _len; i++) {
                if (th._group.indexOf(th.state.dataList[i].groupnumber) == -1) {
                    th._group.push(th.state.dataList[i].groupnumber);
                }
                if (th._group.indexOf(th.state.dataList[i].groupId) == -1) {
                    var obj = {
                        "groupId": th.state.dataList[i].groupId,
                        "groupnumber": th.state.dataList[i].groupnumber
                    };
                    th._nData.push(obj);
                }
            }
            th._group.sort(function sortNumber(a, b) {
                return a - b;
            });
            return th._group.map(function (el, ind) {
                if (el != 0 && el != 1) {
                    return _react2.default.createElement(
                        "li",
                        { key: ind, className: _this2.state.index == el ? "active" : "", onClick: _this2.EVENT_CLICK_LI.bind(_this2, el) },
                        el + "组团",
                        _react2.default.createElement("span", { onClick: _this2.delGroup.bind(_this2, el) })
                    );
                }
            });
        }
    }, {
        key: "EVENT_CLICK_LI",
        value: function EVENT_CLICK_LI(da, ev) {
            var th = this;
            th.setState({
                index: da
            });
        }

        //复选框

    }, {
        key: "inputChange",
        value: function inputChange(ind, el, ev) {

            var target = ev.target;
            var th = this,
                domType = target.type === 'checkbox' ? target.checked : target.value,
                text = el.buildingName,
                //target.parentNode.innerText,
            brr = th.state.dataList,
                newBr = [];
            var n = th.state.index,
                idN = 0;
            th._nData.forEach(function (el, ind) {
                if (n == el.groupnumber) {
                    idN = el.groupId;
                }
            });
            if (domType) {
                brr.forEach(function (el, ind) {
                    if (el.buildingName == text) {
                        el.groupName = "组团", el.groupnumber = n, el.groupId = idN;
                    }
                });
                brr.forEach(function (el, ind) {
                    newBr.push(el.groupnumber);
                });
                if (newBr.indexOf(0) == -1) {
                    var BrObj = {
                        "groupId": null,
                        "groupName": "nomapping",
                        "groupnumber": 0,
                        "buildingId": null,
                        "buildingName": null
                    };
                    brr.push(BrObj);
                }
                th.setState({
                    dataList: brr
                });
            } else {
                brr.forEach(function (el, ind) {
                    if (el.buildingName == text) {
                        var n = th.state.index;
                        el.groupName = "nomapping", el.groupnumber = 0, el.groupId = null;
                    }
                });
                brr.forEach(function (el, ind) {
                    newBr.push(el.groupnumber);
                });
                if (newBr.indexOf(n) == -1) {
                    var BrObj = {
                        "groupId": th._nData[n],
                        "groupName": "组团",
                        "groupnumber": n,
                        "buildingId": null,
                        "buildingName": null
                    };
                    brr.push(BrObj);
                }
                th.setState({
                    dataList: brr
                });
            }
        }
        //楼栋

    }, {
        key: "groupFloor",
        value: function groupFloor() {
            var _this3 = this;

            var th = this;
            if (th.state.dataList.length != 0) {
                return th.state.dataList.map(function (el, ind) {
                    var id = el.groupnumber;
                    if (id == th.state.index && null != el.buildingName && id != 0) {

                        return _react2.default.createElement(
                            "li",
                            { key: ind, className: "toggle-checkbox" },
                            _react2.default.createElement("input", { type: "checkbox", checked: true, id: "check" + ind, onChange: _this3.inputChange.bind(_this3, ind, el) }),
                            _react2.default.createElement(
                                "label",
                                { className: "track", htmlFor: "check" + ind },
                                _react2.default.createElement(
                                    "span",
                                    { className: "buildingName" },
                                    el.buildingName
                                ),
                                _react2.default.createElement("span", { className: "icon" })
                            )
                        );
                    } else if (id == 0 && null != el.buildingName) {

                        if (th.state.index == 0) {
                            return _react2.default.createElement(
                                "li",
                                { key: ind },
                                _react2.default.createElement(
                                    "span",
                                    { className: "buildingName" },
                                    el.buildingName
                                )
                            );
                        } else {
                            return _react2.default.createElement(
                                "li",
                                { key: ind, className: "toggle-checkbox" },
                                _react2.default.createElement("input", { type: "checkbox", id: "check" + ind, checked: false, onChange: _this3.inputChange.bind(_this3, ind, el) }),
                                _react2.default.createElement(
                                    "label",
                                    { className: "track", htmlFor: "check" + ind },
                                    _react2.default.createElement("span", { className: "icon" }),
                                    _react2.default.createElement(
                                        "span",
                                        { className: "buildingName" },
                                        el.buildingName
                                    )
                                )
                            );
                        }
                    }
                });
            }
        }

        //增加组团

    }, {
        key: "addGroup",
        value: function addGroup() {
            var th = this;
            var crr = th.state.dataList;
            var addObj = {},
                len = 1,
                _len = crr.length,
                newAr = [],
                newId = iss.guid();
            for (var i = 0; i < _len; i++) {
                if (newAr.indexOf(this.state.dataList[i].groupnumber) == -1) {
                    newAr.push(this.state.dataList[i].groupnumber);
                }
            }
            if (newAr.length > 0) {
                len = Math.max.apply(null, newAr) + 1;
            }

            addObj = {
                "groupId": newId,
                "groupName": "组团",
                "groupnumber": len,
                "buildingId": null,
                "buildingName": null,
                "current": "new"
            };
            crr.push(addObj);
            th.setState({
                dataList: crr
            });
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "article",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "addGroup" },
                    _react2.default.createElement("input", { type: "button", value: "\u589E\u52A0\u7EC4\u56E2", onClick: this.addGroup.bind(this) })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "groupList" },
                    _react2.default.createElement(
                        "div",
                        { className: "groupName groupListScroll" },
                        _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "li",
                                { className: this.state.index == 0 ? "active" : "", onClick: this.EVENT_CLICK_LI.bind(this, 0) },
                                "\u672A\u5206\u914D\u697C\u680B"
                            ),
                            _react2.default.createElement(
                                "li",
                                { className: this.state.index == 1 ? "active" : "", onClick: this.EVENT_CLICK_LI.bind(this, 1) },
                                "1\u7EC4\u56E2",
                                _react2.default.createElement("span", { onClick: this.delGroup.bind(this, 1) })
                            ),
                            this.groupName()
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "groupFloor" },
                        _react2.default.createElement(
                            "ul",
                            null,
                            this.groupFloor(this.index)
                        )
                    ),
                    _react2.default.createElement("div", { className: "clear" })
                )
            );
        }
    }]);

    return GroupIframe;
}(_react2.default.Component);

exports.default = GroupIframe;

/***/ }),

/***/ 1588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, ".addGroup {\n  padding: 5px;\n  border-bottom: 1px #eee solid;\n}\n.addGroup input {\n  background: #0b4082;\n  border-radius: 5px;\n  padding: 2px 3px;\n  border: #204d74 1px solid;\n  color: #fff;\n}\n.addGroup input:nth-child(1) {\n  margin-right: 10px;\n}\n.groupList {\n  height: 214px;\n}\n.plateName ul li span {\n  position: absolute;\n  right: -9px;\n  top: 0px;\n}\n.groupName {\n  width: 20%;\n  float: left;\n  border-right: solid 1px #eee;\n  height: 214px;\n  overflow: hidden;\n}\n.groupName .mCSB_container {\n  margin-right: 0;\n}\n.groupName ul {\n  padding-top: 5px;\n  width: 100%;\n}\n.groupName li:hover span {\n  display: block;\n}\n.groupName li {\n  line-height: 30px;\n  border-bottom: 1px #eee solid;\n  font-size: 12px;\n  position: relative;\n  text-align: center;\n}\n.groupName li span {\n  width: 16px;\n  height: 16px;\n  border-radius: 25px;\n  margin: 7px 10px;\n  background: #fd0021;\n  display: inline-block;\n  display: none;\n  position: absolute;\n  right: 2px;\n  top: 0px;\n  transform: rotate(45deg);\n  z-index: 99;\n  cursor: pointer;\n}\n.groupName li span:before,\n.groupName li span:after {\n  content: '';\n  pointer-events: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: inset 0 0 0 1em #fff;\n}\n.groupName li span:before {\n  height: 10px;\n  width: 2px;\n}\n.groupName li span:after {\n  width: 10px;\n  height: 2px;\n}\n.groupName .active {\n  background: skyblue;\n}\n.groupFloor {\n  width: 80%;\n  height: 100%;\n  float: left;\n}\n.groupFloor li {\n  float: left;\n  width: 15%;\n  position: relative;\n  height: 30px;\n  margin-top: 8px;\n  margin-left: 15px;\n  border: #eee 1px solid;\n}\n.groupFloor li .buildingName {\n  z-index: 999;\n  position: absolute;\n  top: 3px;\n  left: 28%;\n  font-size: 14px;\n  font-weight: normal;\n}\n.clear {\n  clear: both;\n}\n.toggle-checkbox input[type=checkbox]:checked + .track .icon {\n  display: block;\n}\n.toggle-checkbox input[type=checkbox] {\n  display: none;\n}\n.toggle-checkbox .track .icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  background: #b1f77f;\n  z-index: 2;\n}\n.toggle-checkbox .track {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.Promptinfo {\n  padding-left: 30px;\n  padding-right: 50px;\n  font-size: 16px;\n}\n.Promptinfo:nth-child(1) {\n  padding-top: 100px;\n}\n.Promptinfo:nth-child(2) {\n  padding-left: 110px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1589:
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

__webpack_require__(1580);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*分期信息栏 */
//兼容ie


//专用css
var PlateIframe = function (_React$Component) {
    _inherits(PlateIframe, _React$Component);

    function PlateIframe(arg) {
        _classCallCheck(this, PlateIframe);

        var _this = _possibleConstructorReturn(this, (PlateIframe.__proto__ || Object.getPrototypeOf(PlateIframe)).call(this, arg));

        _this.url = "/Stage/IGetPushPlate";
        _this.url2 = "/Stage/IReferenceGroupDivision";
        _this.state = {
            dataList: [], //总数据
            versionId: _this.props.versionId,
            index: 0, //当前推盘
            _group: [],
            checked: ''
        }, _this.index = 0;
        _this.nameList = [];
        _this._group = [];
        _this._nData = [];
        return _this;
    }
    //?stageversionid=2dd2fa0b-9f45-16a8-463b-a973a5aa5ab1


    _createClass(PlateIframe, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.getAjax();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            $(".groupListScroll").mCustomScrollbar({
                autoDraggerLength: true,
                scrollButtons: { enable: true }
            });
        }
    }, {
        key: "getAjax",
        value: function getAjax(arg) {
            var th = this;
            th.state.checked = th.props.versionId;

            //th.state.checked = "2dd2fa0b-9f45-16a8-463b-a973a5aa5ab1"
            iss.ajax({
                url: this.url + "?stageversionid=" + th.state.checked,
                data: {
                    //stageversionid: th.state.versionId
                },
                success: function success(data) {
                    if (null != data.rows && data.rows.length > 0) {
                        var arr = [];
                        data.rows.forEach(function (el, ind) {
                            arr.push(el.pushPlateNumber);
                        });

                        if (arr.indexOf(1) == -1) {

                            var newId = iss.guid();
                            var addObj = {
                                "pushPlateId": newId,
                                "pushPlateName": "推盘",
                                "pushPlateNumber": 1,
                                "buildingId": null,
                                "buildingName": null,
                                "current": "new"
                            };
                            data.rows.push(addObj);
                        }
                        th.setState({
                            dataList: data.rows,
                            index: data.rows[0]["pushPlateNumber"],
                            _group: th._group
                        });
                    }
                    th.props.callback(th);
                },
                error: function error() {
                    console.log('失败');
                }
            });
        }
        //删除推盘

    }, {
        key: "delGroup",
        value: function delGroup(da, ev) {

            var target = ev.currentTarget;
            var th = this,
                arr = [];
            var delAr = th.state.dataList;
            th.setState({
                index: da
            });
            delAr.forEach(function (el, ind) {
                if (arr.indexOf(el.pushPlateNumber) == -1) {
                    arr.push(el.pushPlateNumber);
                }
            });
            delAr.forEach(function (el, ind) {
                if (Math.max.apply(null, arr) != 1) {
                    if (el.pushPlateNumber == da) {
                        el.pushPlateName = "nomapping";
                        el.pushPlateNumber = 0;
                        el.delete = "del";
                        el.Mdel = "Mdel";
                    }
                }

                if (el.pushPlateNumber > da) {
                    el.pushPlateNumber = el.pushPlateNumber - 1;
                }
            });
            th.setState({
                dataList: delAr
            });
        }
        // 推盘名称

    }, {
        key: "pushPlateName",
        value: function pushPlateName() {
            var _this2 = this;

            var th = this,
                arr = [];
            var _len = th.state.dataList.length;
            th._group = [];
            th._nData = [];
            for (var i = 0; i < _len; i++) {
                if (th._group.indexOf(th.state.dataList[i].pushPlateNumber) == -1) {
                    th._group.push(th.state.dataList[i].pushPlateNumber);
                }
                if (th._group.indexOf(th.state.dataList[i].pushPlateId) == -1) {
                    var obj = {
                        "pushPlateId": th.state.dataList[i].pushPlateId,
                        "pushPlateNumber": th.state.dataList[i].pushPlateNumber
                    };
                    th._nData.push(obj);
                }
            }
            th._group.sort(function sortNumber(a, b) {
                return a - b;
            });
            return th._group.map(function (el, ind) {
                if (el != 0 && el != 1) {
                    return _react2.default.createElement(
                        "li",
                        { key: ind, className: _this2.state.index == el ? "active" : "", onClick: _this2.EVENT_CLICK_LI.bind(_this2, el) },
                        "第 " + el + " 批推盘",
                        _react2.default.createElement("span", { onClick: _this2.delGroup.bind(_this2, el) })
                    );
                }
            });
        }
    }, {
        key: "EVENT_CLICK_LI",
        value: function EVENT_CLICK_LI(da, ev) {
            var th = this;
            th.setState({
                index: da
            });
        }

        //复选框

    }, {
        key: "inputChange",
        value: function inputChange(ind, el, ev) {
            var target = ev.target;
            var th = this,
                domType = target.type === 'checkbox' ? target.checked : target.value,
                text = el.buildingName,
                brr = th.state.dataList,
                newBr = [];
            var n = th.state.index,
                idN = 0;
            th._nData.forEach(function (el, ind) {
                if (n == el.pushPlateNumber) {
                    idN = el.pushPlateId;
                }
            });
            if (domType) {
                brr.forEach(function (el, ind) {
                    if (el.buildingName == text) {
                        el.pushPlateName = "推盘", el.pushPlateNumber = n, el.pushPlateId = idN;
                    }
                });
                brr.forEach(function (el, ind) {
                    newBr.push(el.pushPlateNumber);
                });
                if (newBr.indexOf(0) == -1) {
                    var BrObj = {
                        "pushPlateId": null,
                        "pushPlateName": "nomapping",
                        "pushPlateNumber": 0,
                        "buildingId": null,
                        "buildingName": null
                    };
                    brr.push(BrObj);
                }
                th.setState({
                    dataList: brr
                });
            } else {
                brr.forEach(function (el, ind) {
                    if (el.buildingName == text) {
                        var n = th.state.index;
                        el.pushPlateName = "nomapping", el.pushPlateNumber = 0, el.pushPlateId = null;
                    }
                });
                brr.forEach(function (el, ind) {
                    newBr.push(el.pushPlateNumber);
                });
                if (newBr.indexOf(n) == -1) {
                    var BrObj = {
                        "pushPlateId": th._nData[n],
                        "pushPlateName": "推盘",
                        "pushPlateNumber": n,
                        "buildingId": null,
                        "buildingName": null
                    };
                    brr.push(BrObj);
                }
                th.setState({
                    dataList: brr
                });
            }
        }
        //楼栋

    }, {
        key: "groupFloor",
        value: function groupFloor() {
            var _this3 = this;

            var th = this;
            if (th.state.dataList.length != 0) {
                return th.state.dataList.map(function (el, ind) {
                    var id = el.pushPlateNumber;
                    if (el.delete == null || el.Mdel == "Mdel") {
                        if (id == th.state.index && null != el.buildingName && id != 0) {

                            return _react2.default.createElement(
                                "li",
                                { key: ind, className: "toggle-checkbox" },
                                _react2.default.createElement("input", { type: "checkbox", checked: true, id: "check" + ind, onChange: _this3.inputChange.bind(_this3, ind, el) }),
                                _react2.default.createElement(
                                    "label",
                                    { className: "track", htmlFor: "check" + ind },
                                    _react2.default.createElement("span", { className: "icon" }),
                                    _react2.default.createElement(
                                        "span",
                                        { className: "buildingName" },
                                        el.buildingName
                                    )
                                )
                            );
                        } else if (id == 0 && null != el.buildingName) {

                            if (th.state.index == 0) {
                                return _react2.default.createElement(
                                    "li",
                                    { key: ind },
                                    _react2.default.createElement(
                                        "span",
                                        { className: "buildingName" },
                                        el.buildingName
                                    )
                                );
                            } else {
                                return _react2.default.createElement(
                                    "li",
                                    { key: ind, className: "toggle-checkbox" },
                                    _react2.default.createElement("input", { type: "checkbox", id: "check" + ind, checked: false, onChange: _this3.inputChange.bind(_this3, ind, el) }),
                                    _react2.default.createElement(
                                        "label",
                                        { className: "track", htmlFor: "check" + ind },
                                        _react2.default.createElement("span", { className: "icon" }),
                                        _react2.default.createElement(
                                            "span",
                                            { className: "buildingName" },
                                            el.buildingName
                                        )
                                    )
                                );
                            }
                        }
                    }
                });
            }
        }

        //增加推盘

    }, {
        key: "addGroup",
        value: function addGroup() {
            var th = this;
            var crr = th.state.dataList;
            var addObj = {},
                len = 1,
                _len = crr.length,
                newAr = [],
                newId = iss.guid();
            for (var i = 0; i < _len; i++) {
                if (newAr.indexOf(this.state.dataList[i].pushPlateNumber) == -1) {
                    newAr.push(this.state.dataList[i].pushPlateNumber);
                }
            }
            if (newAr.length > 0) {
                len = Math.max.apply(null, newAr) + 1;
            }

            addObj = {
                "pushPlateId": newId,
                "pushPlateName": "推盘",
                "pushPlateNumber": len,
                "buildingId": null,
                "buildingName": null,
                "current": "new"
            };
            crr.push(addObj);
            th.setState({
                dataList: crr
            });
        }
    }, {
        key: "GroupDivide",
        value: function GroupDivide() {
            var th = this,
                delArr = th.state.dataList;
            th.state.checked = th.props.versionId;
            delArr.forEach(function (el, ind) {
                el.delete = "del", el.pushPlateName = "nomapping";
                el.pushPlateNumber = 0;
            });
            iss.ajax({
                url: this.url2 + "?stageversionid=" + th.state.checked,
                data: {
                    //stageversionid: th.state.versionId
                },
                success: function success(data) {
                    if (null != data.rows && data.rows.length > 0) {
                        var arr = [],
                            FinalArr = [];
                        data.rows.forEach(function (el, ind) {
                            arr.push(el.pushPlateNumber);
                            el.current = "new";
                        });
                        if (arr.indexOf(1) == -1) {

                            var newId = iss.guid();
                            var addObj = {
                                "pushPlateId": newId,
                                "pushPlateName": "推盘",
                                "pushPlateNumber": 1,
                                "buildingId": null,
                                "buildingName": null,
                                "current": "new"
                            };
                            data.rows.push(addObj);
                        }
                        FinalArr = data.rows.concat(delArr);
                        th.setState({
                            dataList: FinalArr,
                            index: data.rows[0]["pushPlateNumber"],
                            _group: th._group
                        });
                    }
                    th.props.callback(th);
                },
                error: function error() {
                    console.log('失败');
                }
            });
        }
        //引用组团划分

    }, {
        key: "quoteGroup",
        value: function quoteGroup() {
            var th = this;
            iss.Alert(_defineProperty({
                title: "",
                width: 500,
                height: 250,
                content: "<p class='Promptinfo'>\u6E29\u99A8\u63D0\u793A\uFF1A\u5F15\u7528\u7EC4\u56E2\u5212\u5206\u6570\u636E\u4F1A\u8986\u76D6\u5F53\u524D\u5DF2\u6709\u63A8\u76D8\u6570\u636E\uFF0C</p><p class='Promptinfo'>\u786E\u5B9A\u5F15\u7528\u7EC4\u56E2\u5212\u5206\u6570\u636E\u5417\uFF1F</p>",
                okVal: "确定",
                cancel: "取消",
                ok: function ok(da) {
                    th.GroupDivide();
                }
            }, "cancel", function cancel(da) {}));
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "article",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "addGroup" },
                    _react2.default.createElement("input", { type: "button", value: "\u589E\u52A0\u63A8\u76D8\u6279\u6B21", onClick: this.addGroup.bind(this) }),
                    _react2.default.createElement("input", { type: "button", value: "\u5F15\u7528\u7EC4\u56E2\u5212\u5206", onClick: this.quoteGroup.bind(this) })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "groupList" },
                    _react2.default.createElement(
                        "div",
                        { className: "groupName groupListScroll plateName" },
                        _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "li",
                                { className: this.state.index == 0 ? "active" : "", onClick: this.EVENT_CLICK_LI.bind(this, 0) },
                                "\u672A\u5206\u914D\u697C\u680B"
                            ),
                            _react2.default.createElement(
                                "li",
                                { className: this.state.index == 1 ? "active" : "", onClick: this.EVENT_CLICK_LI.bind(this, 1) },
                                "\u7B2C 1 \u6279\u63A8\u76D8",
                                _react2.default.createElement("span", { onClick: this.delGroup.bind(this, 1) })
                            ),
                            this.pushPlateName()
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "groupFloor" },
                        _react2.default.createElement(
                            "ul",
                            null,
                            this.groupFloor(this.index)
                        )
                    ),
                    _react2.default.createElement("div", { className: "clear" })
                )
            );
        }
    }]);

    return PlateIframe;
}(_react2.default.Component);

exports.default = PlateIframe;

/***/ }),

/***/ 1590:
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

__webpack_require__(1566);

var _toolsDynamicTable = __webpack_require__(1535);

var _toolsDynamicTable2 = _interopRequireDefault(_toolsDynamicTable);

var _componentIndicatorsWinopen = __webpack_require__(1567);

var _componentIndicatorsWinopen2 = _interopRequireDefault(_componentIndicatorsWinopen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 分期经济指标（投决会版）
//兼容ie


__webpack_require__(1538); //专用css

//弹出选择地块
var Indicators = function (_React$Component) {
    _inherits(Indicators, _React$Component);

    function Indicators(arg) {
        _classCallCheck(this, Indicators);

        var _this = _possibleConstructorReturn(this, (Indicators.__proto__ || Object.getPrototypeOf(Indicators)).call(this, arg));

        _this.state = {
            newDynamicData: {}, //空数据
            DynamicData: {}, //已存在数据
            propsDATA: [], //显示数据
            loadLandData: [], /*所有地块信息*/
            pid: "",
            versionId: _this.props.versionId, /*版本id*/
            projectId: "", /*项目id*/
            states: false,
            AcountData: [], /*分期规划条件指标-汇总数据*/
            winAllBuiltData: [], /*分期占用土地table*/
            winopenDATA: [], /*alert中选择地块信息(这个里面不包括已经选择过的地块)或者编辑选中的地块*/
            winopenSelId: "", /*alert中保存选择过的地块Id,逗号分隔*/
            landStageArr: {} /*分期占用土地=相关分期*/
        };
        return _this;
    }

    /*编辑分期，初次获取分期占用土地数据，并汇总数据*/


    _createClass(Indicators, [{
        key: 'evGetLandData',
        value: function evGetLandData(projectId) {
            var th = this;
            var status = th.props.status;
            var allListArr = [];
            var selIDs = [];

            /*新建分期则不用请求*/
            if (status != "add") {
                iss.ajax({
                    url: "/Stage/IGetLandQuotaByVersionId",
                    type: "get",
                    data: {
                        versionId: th.state.versionId,
                        projectid: projectId
                    },
                    success: function success(d) {

                        allListArr = d.rows;
                        if (!allListArr) {
                            return false;
                        }
                        allListArr.forEach(function (obj, index) {
                            selIDs.push(obj.ID);
                        });
                        th.setState({
                            winopenSelId: selIDs.join(","),
                            winAllBuiltData: allListArr,
                            winopenDATA: []
                        });
                        th.evGetLandFieldSum(allListArr);
                        th.props.callback(allListArr);
                    }
                });
            }
        }

        /*分期占用土地=获取相关分期*/

    }, {
        key: 'evIGetLandStageShow',
        value: function evIGetLandStageShow(projectId) {
            var th = this;
            var status = th.props.status;
            iss.ajax({
                url: "/Stage/IGetLandStageShow",
                type: "get",
                data: {
                    projectid: projectId
                },
                success: function success(d) {
                    th.setState({
                        landStageArr: d.rows
                    });
                }
            });
        }
        /*编辑：初次汇总分期规划条件指标*/

    }, {
        key: 'evGetLandFieldSum',
        value: function evGetLandFieldSum(listArrs) {
            var th = this;
            th.ev_saveBuiltInfor("del", listArrs);
        }

        /*编辑地块事件*/

    }, {
        key: 'evBuiltEditTr',
        value: function evBuiltEditTr(selObj, event) {
            var th = this;
            var selArr = [];
            var newObj = iss.clone(selObj);
            selArr.push(newObj);
            th.BIND_WINOPEN(selArr);
            th.EVENT_SELECTMISSIF('edit', selArr);
        }
        /*删除地块*/

    }, {
        key: 'evBuiltDelTr',
        value: function evBuiltDelTr(selObj, event) {
            var th = this;
            var id = selObj.ID;
            var selAllArrs = th.state.winAllBuiltData;
            var loadLandList = th.state.loadLandData;
            var newLoadLandarr = [];
            var isAddObj = false; /*是否把删除的地块添加到loadLandList中*/
            iss.Alert({
                title: "提示",
                width: 300,
                content: '<div class="Alert">\u662F\u5426\u5220\u9664\u5730\u5757</div>',
                ok: function ok() {

                    var newSelAllArrs = selAllArrs.filter(function (obj, index) {
                        return obj.ID != id;
                    });
                    /*重新计算删除的地块*/
                    selObj.FieldList.forEach(function (fObj, fIndex) {
                        var maxVal = iss.getRegExpkVal(fObj.regExp, "max");
                        var editS = fObj.edit;
                        if (editS == "+w" && maxVal != "") {
                            fObj.val = maxVal;
                            fObj.text = maxVal;
                        }
                    });

                    loadLandList.forEach(function (obj, index) {
                        if (obj.ID == id) {
                            isAddObj = true;
                            newLoadLandarr.push(selObj);
                        } else {
                            newLoadLandarr.push(obj);
                        }
                    });
                    if (!isAddObj) {
                        newLoadLandarr.push(selObj);
                    }

                    th.setState({
                        loadLandData: newLoadLandarr
                    });
                    th.ev_saveBuiltInfor("del", newSelAllArrs);
                },
                cancel: function cancel() {}
            });
        }
        /*分期占用土地=渲染table*/

    }, {
        key: 'BIND_CreateTable',
        value: function BIND_CreateTable() {
            var th = this;
            var list = th.state.winAllBuiltData;
            var landStageArr = th.state.landStageArr;

            return list.map(function (obj, index) {
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
                        landStageArr[obj.ID]
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'funCla funCla_edit', onClick: th.evBuiltEditTr.bind(th, obj) },
                            '\u7F16\u8F91'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'funCla funCla_del', onClick: th.evBuiltDelTr.bind(th, obj) },
                            '\u5220\u9664'
                        )
                    )
                );
            });
        }
    }, {
        key: 'BIND_CALLBACK',
        value: function BIND_CALLBACK(da) {}
        /*alert==实时获取地块的信息*/

    }, {
        key: 'BIND_WINOPEN',
        value: function BIND_WINOPEN(da) {
            var th = this;
            th.setState({
                winopenDATA: da
            });
        }
        /*根据地块变化=汇总数据
        @param operaStatus判断是编辑地块,选择地块,删除地块
        */

    }, {
        key: 'ev_saveBuiltInfor',
        value: function ev_saveBuiltInfor(operaStatus, newArr) {
            var th = this;
            var listArr = th.state.winopenDATA;
            var filterListArr = []; /*如果是选择地块：过滤选择过的地块；*/
            var allListArr = th.state.winAllBuiltData;

            if (operaStatus == "edit") {
                allListArr.forEach(function (obj, index) {
                    if (obj.ID == listArr[0]["ID"]) {
                        filterListArr.push(listArr[0]);
                    } else {
                        filterListArr.push(obj);
                    }
                });
                allListArr = filterListArr;
            } else if (operaStatus == "del") {
                allListArr = newArr;
            } else if (operaStatus == "select") {
                listArr.forEach(function (obj, index) {
                    if (obj.IsAllDevel != 0) {
                        filterListArr.push(obj);
                    }
                });
                allListArr = allListArr.concat(filterListArr);
            }

            var selIDs = []; /*保存选择过的地块id*/
            iss.ajax({
                url: "/Stage/IRetLandDynaticFieldSum",
                type: "post",
                data: {
                    data: JSON.stringify(allListArr)
                },
                success: function success(d) {
                    /*存储选择过的地块*/
                    allListArr.forEach(function (obj, index) {
                        selIDs.push(obj.ID);
                    });
                    var countData = th.setCount(d.rows);
                    th.setState({
                        winopenSelId: selIDs.join(","),
                        winAllBuiltData: allListArr,
                        winopenDATA: [],
                        AcountData: countData
                    });
                    th.props.callback(allListArr);
                }
            });
        }
    }, {
        key: 'setCount',
        value: function setCount(da) {
            return da.map(function (el, ind) {
                //数据计算
                var reg = /\{.*?\}/ig;
                var str = el.exec;

                if (str) {
                    str.match(reg).forEach(function (_e, _i) {
                        da.forEach(function (__e, __i) {
                            if (_e.replace(/[{}]/ig, "") == __e.id) {
                                str = str.replace("{" + __e.id + "}", __e.val);
                            }
                        });
                    });
                    try {
                        el.val = eval(str);
                        el.text = eval(str);
                    } catch (e) {}
                }
                return el;
            });
        }
        /*选择地块事件*/

    }, {
        key: 'evSelectLandlist',
        value: function evSelectLandlist(editOrSel) {
            var th = this;
            var allData = iss.clone(th.state.loadLandData);
            var selectIds = th.state.winopenSelId;
            var filterArr = allData.filter(function (obj, index) {
                return !new RegExp(obj.ID, "ig").test(selectIds);
            });
            th.BIND_WINOPEN(filterArr);
            th.EVENT_SELECTMISSIF("select", filterArr);
        }
        /*
        @editOrSel 判断是编辑(edit)/选择(select) 地块
        */

    }, {
        key: 'EVENT_SELECTMISSIF',
        value: function EVENT_SELECTMISSIF(editOrSel, selArr) {
            var th = this;
            var status = th.props.status;
            //let id=th.state.projectId;
            var title = "";

            /*判断是编辑地块还是选择地块*/
            if (editOrSel == "select") {
                title = "选择分期占用土地<span class='red'>（*为必填项）</span><span id='errorTip' class='red'></span>";
            } else if (editOrSel == "edit") {
                title = "编辑分期占用土地<span class='red'>（*为必填项）</span><span id='errorTip' class='red'></span>";
            }
            iss.Alert({
                title: title,
                width: 1000,
                height: 400,
                content: '<div id="alertBuiltBlock"></div>',
                ok: function ok() {
                    var isValid = $("#form_aBuiltLand").form("validate");

                    if (isValid) {
                        th.ev_saveBuiltInfor(editOrSel);
                    } else {
                        return false;
                    }
                }
            });

            _reactDom2.default.render(_react2.default.createElement(_componentIndicatorsWinopen2.default, { selId: th.state.winopenSelId, selArr: selArr, status: editOrSel, callback: this.BIND_WINOPEN.bind(this) }), document.querySelector("#alertBuiltBlock"));
        }
        /*加载所有地块信息*/

    }, {
        key: 'evLoadLandData',
        value: function evLoadLandData(projectId) {
            var th = this;
            var status = th.props.status;

            iss.ajax({
                url: "/Stage/IGetLandQuotaByProId",
                type: "get",
                data: { projectId: projectId },
                success: function success(d) {
                    th.setState({
                        loadLandData: d.rows
                    });
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var th = this;
            $(function () {
                $(document).off("landFirstLoad").on("landFirstLoad", function (e, projectId) {
                    th.setState({
                        projectId: projectId
                    });
                    th.evGetLandData(projectId); /*编辑分期时，初次获取分期占用土地数据*/
                    th.evIGetLandStageShow(projectId); /*分期占用土地=获取相关分期*/
                    th.evLoadLandData(projectId); /*加载所有地块信息*/
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var selArr = [];
            return _react2.default.createElement(
                'article',
                { className: 'staging-box' },
                _react2.default.createElement(
                    'section',
                    { className: 'boxSizing' },
                    _react2.default.createElement(_toolsDynamicTable2.default, { pid: iss.guid(), DynamicData: this.state.AcountData, CallBack: this.BIND_CALLBACK.bind(this) })
                ),
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
                                '\u5206\u671F\u5360\u7528\u571F\u5730'
                            ),
                            _react2.default.createElement('i', null)
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'functionButton' },
                            _react2.default.createElement(
                                'a',
                                { className: 'refresh-icon addIcon ClickThePopUp1', onClick: this.evSelectLandlist.bind(this, 'select'), href: 'javascript:;' },
                                '\u9009\u62E9\u5730\u5757'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
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
                                this.BIND_CreateTable(this)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Indicators;
}(_react2.default.Component);

exports.default = Indicators;

/***/ })

});