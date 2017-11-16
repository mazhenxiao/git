webpackJsonp([0],{

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _constants = __webpack_require__(1538);

var _comBlock = __webpack_require__(1582);

var _comBlock2 = _interopRequireDefault(_comBlock);

var _comBlockFilter = __webpack_require__(1587);

var _comBlockFilter2 = _interopRequireDefault(_comBlockFilter);

var _comBuilding = __webpack_require__(1588);

var _comBuilding2 = _interopRequireDefault(_comBuilding);

var _comBuildingFilter = __webpack_require__(1589);

var _comBuildingFilter2 = _interopRequireDefault(_comBuildingFilter);

var _comFormat = __webpack_require__(1590);

var _comFormat2 = _interopRequireDefault(_comFormat);

var _comFormatFilter = __webpack_require__(1591);

var _comFormatFilter2 = _interopRequireDefault(_comFormatFilter);

var _planQuota = __webpack_require__(1592);

var _planQuota2 = _interopRequireDefault(_planQuota);

var _blockFormatEdit = __webpack_require__(1593);

var _blockFormatEdit2 = _interopRequireDefault(_blockFormatEdit);

var _blockFormatAdjust = __webpack_require__(1595);

var _blockFormatAdjust2 = _interopRequireDefault(_blockFormatAdjust);

var _buildingAreaAdjust = __webpack_require__(1596);

var _buildingAreaAdjust2 = _interopRequireDefault(_buildingAreaAdjust);

var _buildingFormatEdit = __webpack_require__(1597);

var _buildingFormatEdit2 = _interopRequireDefault(_buildingFormatEdit);

var _formatAreaAdjust = __webpack_require__(1598);

var _formatAreaAdjust2 = _interopRequireDefault(_formatAreaAdjust);

var _comSaveVersion = __webpack_require__(1599);

var _comSaveVersion2 = _interopRequireDefault(_comSaveVersion);

var _services = __webpack_require__(1558);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  面积管理 index
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//兼容ie
__webpack_require__(645);
__webpack_require__(1521);
__webpack_require__(1602);
__webpack_require__(1606);
var TabPane = _antd.Tabs.TabPane;
var AreaManageStep = _constants.AreaConstants.AreaManageStep,
    Legend = _constants.AreaConstants.Legend;
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = { //绑定数据
            loading: false,
            stepData: [],
            versionId: "", //版本id
            step: {}, /*当前阶段*/
            dataKey: _this.props.location.query.dataKey, /*项目id或分期版本id*/
            mode: _this.props.location.query.isProOrStage, //显示模式，项目或者分期
            //方案指标数据，面积数据
            areaData: {},
            //面积数据里的查询
            searchKey: {},
            //版本数据
            versionData: [],
            //生成业态的条件数据
            conditionData: {},

            modalKey: "",
            modalParam: null,

            toggleTab: 3, /* 默认打开的tap*/
            localSearch: "", /*地址栏参数*/
            showTap: false //默认无阶段不显示按钮
            // activeTapKey: "com-block", /*选中状态tap的key*/
        }, _this.loadStep = function () {
            var _this$state = _this.state,
                dataKey = _this$state.dataKey,
                mode = _this$state.mode;

            _this.setState({
                loading: true
            });

            _services.AreaService.getStep(dataKey, mode).then(function (stepData) {
                var step = stepData[0];
                _this.setState({
                    stepData: stepData,
                    step: step
                });

                if (step) {
                    _this.loadData(step);
                }
            }).catch(function (err) {
                console.log("发生错误", err);
            });
        }, _this.loadData = function (step, mode, versionId, dataKey) {
            _this.setState({
                loading: true
            });
            step = step || _this.state.step;
            mode = mode || _this.state.mode;
            versionId = versionId || _this.state.versionId;
            dataKey = dataKey || _this.state.dataKey;

            //获取地块·面积数据
            var blockPromise = _services.AreaService.getAreaList(step, mode, versionId).then(function (data) {
                return data.rows;
            });
            //获取规划方案指标数据
            var planQuotaPromise = _services.AreaService.getAreaPlanQuota(step, versionId).then(function (data) {
                return data.rows;
            });
            //获取版本数据
            var versionPromise = _services.AreaService.getVersion(step, dataKey, mode).then(function (data) {
                return data.rows;
            });
            //获取生成业态数据的筛选条件
            var getCreateConditionPromise = _services.AreaService.getCreateCondition(step, dataKey, mode);

            Promise.all([blockPromise, planQuotaPromise, versionPromise, getCreateConditionPromise]).then(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 4),
                    blockData = _ref3[0],
                    planData = _ref3[1],
                    versionData = _ref3[2],
                    conditionData = _ref3[3];

                _this.setState({
                    loading: false,
                    areaData: {
                        planData: planData,
                        blockData: blockData
                    },
                    versionData: versionData,
                    conditionData: conditionData
                });
            }).catch(function (err) {
                _this.setState({
                    loading: false
                });
                console.error("发生错误", err);
            });
        }, _this.handleStepClick = function (step) {
            return function () {
                console.log("当前选中", step.name);
                _this.setState({
                    step: step
                });
                _this.loadData(step);
            };
        }, _this.renderStepList = function () {
            //阶段
            var _this$state2 = _this.state,
                step = _this$state2.step,
                stepData = _this$state2.stepData;

            var len = stepData.length;
            return stepData.map(function (item, ind) {
                return _react2.default.createElement(
                    'li',
                    { key: item.guid, style: { zIndex: len - ind }, className: item.guid == step.guid ? "active" : "",
                        onClick: _this.handleStepClick(item) },
                    _react2.default.createElement('span', { className: item.className }),
                    item.name
                );
            });
        }, _this.handleModalClick = function (modalKey, modalParam) {
            return function () {
                _this.setState({
                    modalKey: modalKey,
                    modalParam: modalParam
                });
            };
        }, _this.renderButtonList = function () {
            var step = _this.state.step;

            if (step.guid < 3) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'areaTopbtn jhBtn-wrap' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'jh_btn jh_btn22 jh_btn_add' },
                            '\u751F\u6210\u65B0\u7248\u672C'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'jh_btn jh_btn22 jh_btn_save',
                                onClick: _this.handleModalClick("block-format-edit") },
                            '\u4E1A\u6001\u7EF4\u62A4'
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'jh_btn jh_btn22 jh_btn_apro' },
                            '\u53D1\u8D77\u5BA1\u6279'
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'areaTopbtn jhBtn-wrap' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'jh_btn jh_btn22 jh_btn_add' },
                        '\u751F\u6210\u65B0\u7248\u672C'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'jh_btn jh_btn22 jh_btn_save',
                            onClick: _this.handleModalClick("building-format-edit") },
                        '\u4E1A\u6001/\u697C\u680B\u7EF4\u62A4'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'jh_btn jh_btn22 jh_btn_apro' },
                        '\u53D1\u8D77\u5BA1\u6279'
                    )
                )
            );
        }, _this.handleTabChange = function (activeTapKey) {
            _this.setState({ activeTapKey: activeTapKey });
        }, _this.handleComBlockSearch = function (formatKey) {
            //TODO 根据关键字 调用接口 筛选数据
            console.log("根据关键词搜索：", formatKey);
        }, _this.handleComBuildingSearch = function (formatKey) {
            //TODO 根据关键字 调用接口 筛选数据
            console.log("根据关键词搜索：", formatKey);
        }, _this.handleComFormatSearch = function (formatKey, buildingKey) {
            //TODO 根据关键字 调用接口 筛选数据
            console.log("根据关键词搜索：", formatKey, buildingKey);
        }, _this.renderTabList = function () {
            var _this$state3 = _this.state,
                step = _this$state3.step,
                areaData = _this$state3.areaData,
                searchKey = _this$state3.searchKey;

            var panelArray = [];
            var planData = areaData["planData"] || [];

            panelArray.push(_react2.default.createElement(
                TabPane,
                { tab: '\u89C4\u5212\u65B9\u6848\u6307\u6807', key: 'plan-quota' },
                _react2.default.createElement(_planQuota2.default, { planData: planData })
            ));

            if (parseInt(step.guid) < 3) {
                var blockData = areaData["blockData"] || {};
                panelArray.push(_react2.default.createElement(
                    TabPane,
                    { tab: '\u4EA7\u54C1\u6784\u6210--\u6309\u5730\u5757', key: 'com-block' },
                    _react2.default.createElement(_comBlockFilter2.default, { onSearch: _this.handleComBlockSearch, key: new Date().getTime() }),
                    _react2.default.createElement(_comBlock2.default, { dataSource: blockData["areadataInfo"], headerData: blockData["titleInfo"] })
                ));
            } else {
                panelArray.push(_react2.default.createElement(
                    TabPane,
                    { tab: '\u4EA7\u54C1\u6784\u6210--\u6309\u697C\u680B', key: 'com-building' },
                    _react2.default.createElement(_comBuildingFilter2.default, { onSearch: _this.handleComBuildingSearch, key: new Date().getTime() }),
                    _react2.default.createElement(_comBuilding2.default, null)
                ));
                panelArray.push(_react2.default.createElement(
                    TabPane,
                    { tab: '\u4EA7\u54C1\u6784\u6210--\u6309\u4E1A\u6001', key: 'com-format' },
                    _react2.default.createElement(_comFormatFilter2.default, { onSearch: _this.handleComFormatSearch, key: new Date().getTime() }),
                    _react2.default.createElement(_comFormat2.default, null)
                ));
            }
            return _react2.default.createElement(
                _antd.Tabs,
                { defaultActiveKey: 'plan-quota', animated: false, onChange: _this.handleTabChange },
                panelArray
            );
        }, _this.handleHideModal = function () {
            _this.setState({
                modalKey: ""
            });
        }, _this.renderStepLend = function () {
            return Legend.map(function (el, ind) {
                return _react2.default.createElement(
                    'li',
                    { key: ind, 'data-guid': el.guid, className: el.class },
                    el.text
                );
            });
        }, _this.renderEditOrAdjust = function () {
            var _this$state4 = _this.state,
                modalKey = _this$state4.modalKey,
                modalParam = _this$state4.modalParam,
                conditionData = _this$state4.conditionData,
                step = _this$state4.step,
                mode = _this$state4.mode,
                versionId = _this$state4.versionId;

            switch (modalKey) {
                case "block-format-edit":
                    return _react2.default.createElement(_blockFormatEdit2.default, {
                        onHideModal: _this.handleHideModal,
                        conditionData: conditionData,
                        step: step,
                        mode: mode,
                        versionId: versionId,
                        blockDataSource: conditionData.land });
                case "building-format-edit":
                    return _react2.default.createElement(_buildingFormatEdit2.default, null);
                default:
                    return null;
            }
        }, _this.saveVersionCallback = function (arg) {//版本切换保存

        }, _this.renderEmpty = function () {
            var loading = _this.state.loading;

            return _react2.default.createElement(
                'div',
                { className: 'processBar' },
                _react2.default.createElement(
                    _antd.Spin,
                    { size: 'large', spinning: loading },
                    '\u6682\u65E0\u6570\u636E'
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    /**
     * 建议显示值
     */


    _createClass(Index, [{
        key: 'componentWillReceiveProps',


        /**
         * 在组件接收到一个新的prop时被调用,这个方法在初始化render时不会被调用
         * param nextProps 下一阶段的props
         */
        value: function componentWillReceiveProps(nextProps) {
            var _state = this.state,
                dataKey = _state.dataKey,
                mode = _state.mode;
            var location = nextProps.location;

            if (dataKey != location.query.dataKey.trim() || mode != location.query.isProOrStage.trim()) {
                //设置新的dataKey和mode
                this.setState({
                    dataKey: location.query.dataKey.trim(),
                    mode: location.query.isProOrStage.trim()
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadStep();
        }

        /**
         * 加载步骤
         */

        /*渲染button*/

        /*渲染步骤的颜色状态*/


        // FETCH_SelectVersionData = arg => {  //获取下拉数据
        //     /**
        //      * Common/IGetVersionListByBusinessId?ProjectStageId=56EF7587243E4B9EB05029800BFC1F81&step=1&projectLevel=1&dataType=2
        //      * ProjectStageId  =>项目id或分期版本id
        //      * step            =>当前阶段
        //      * projectLevel    =>项目只有一个传1 分期前两个2  三个以后3
        //      * dataType        =>面积默认值2，价格传3
        //      */
        //     let opt = {
        //         url: "Common/IGetVersionListByBusinessId",
        //         type: "GET",
        //         data: {}
        //     }
        //     iss.fetch(...opt)
        //         .then(arg => {
        //
        //         })
        //         .catch(error => {
        //
        //         });
        // }


        /**
         *  返回空页面
         */

    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                loading = _state2.loading,
                stepData = _state2.stepData,
                versionData = _state2.versionData;

            if (stepData.length === 0) {
                return this.renderEmpty();
            }
            return _react2.default.createElement(
                'div',
                { className: 'processBar' },
                _react2.default.createElement(
                    _antd.Spin,
                    { size: 'large', spinning: loading },
                    _react2.default.createElement(
                        _antd.Row,
                        null,
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                'ul',
                                { className: 'processBar-header' },
                                this.renderStepLend()
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            this.renderButtonList()
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Row,
                        { gutter: 0 },
                        _react2.default.createElement(
                            _antd.Col,
                            null,
                            _react2.default.createElement(
                                'ul',
                                { className: 'processBar-List' },
                                this.renderStepList()
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Row,
                        { gutter: 0 },
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 24 },
                            this.renderTabList(),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_comSaveVersion2.default, { versionData: versionData, callback: this.saveVersionCallback })
                            )
                        )
                    ),
                    this.renderEditOrAdjust()
                )
            );
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;

/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1522);
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

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, ".processBar .processBar-header li {\n  display: inline-block;\n  margin-right: 20px;\n  height: 25px;\n  line-height: 25px;\n  color: #333;\n}\n.processBar .processBar-header li:before {\n  width: 15px;\n  height: 15px;\n  border: #ccc solid 1px;\n  content: \"\";\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: top;\n  margin-top: 5px;\n  margin-right: 5px;\n}\n.processBar .processBar-header li.legend-white:before {\n  background: #fff;\n}\n.processBar .processBar-header li.legend-blue:before {\n  background: #2979ff;\n}\n.processBar .processBar-header li.legend-green:before {\n  background: #00e676;\n}\n.processBar .processBar-header li.legend-red:before {\n  background: #e53935;\n}\n.processBar .processBar-List {\n  margin-top: 10px;\n}\n.processBar .processBar-List li {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  margin-left: 5px;\n  color: #333;\n  margin-right: 0;\n  height: 30px;\n  min-width: 95px;\n  text-align: left;\n  padding-left: 20px;\n  padding-right: 10px;\n  line-height: 30px;\n  color: #fff;\n  font-size: 12px;\n  background: #4c72a4;\n}\n.processBar .processBar-List li:first-child {\n  padding-left: 10px;\n  margin-left: 0;\n}\n.processBar .processBar-List li:nth-child(n+2):before {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  z-index: 20;\n  content: \"\";\n  border-left: #fff solid 15px;\n  border-bottom: transparent solid 15px;\n  border-top: transparent solid 15px;\n}\n.processBar .processBar-List li:nth-child(n):after {\n  position: absolute;\n  top: 0;\n  right: -14px;\n  z-index: 20;\n  content: \"\";\n  border-left: #4c72a4 solid 15px;\n  border-bottom: transparent solid 15px;\n  border-top: transparent solid 15px;\n}\n.processBar .processBar-List li span {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: #ccc solid 1px;\n  border-radius: 50%;\n  margin-right: 5px;\n  vertical-align: middle;\n  margin-top: -4px;\n}\n.processBar .processBar-List li span.legend-white {\n  background: #fff;\n}\n.processBar .processBar-List li span.legend-blue {\n  background: #2979ff;\n}\n.processBar .processBar-List li span.legend-green {\n  background: #00e676;\n}\n.processBar .processBar-List li span.legend-red {\n  background: #e53935;\n}\n.processBar .processBar-List li:hover,\n.processBar .processBar-List li.active {\n  background: #f1a118;\n  cursor: pointer;\n}\n.processBar .processBar-List li:hover::after,\n.processBar .processBar-List li.active::after {\n  border-left-color: #f1a118;\n}\n.PosRight {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shallowCompare = __webpack_require__(1583);

Object.defineProperty(exports, 'shallowCompare', {
  enumerable: true,
  get: function get() {
    return _shallowCompare.shallowCompare;
  }
});

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

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapperInput = __webpack_require__(1584);

Object.defineProperty(exports, 'WrapperInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperInput).default;
  }
});

var _wrapperGroupTable = __webpack_require__(1585);

Object.defineProperty(exports, 'WrapperGroupTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperGroupTable).default;
  }
});

var _wrapperSelect = __webpack_require__(1557);

Object.defineProperty(exports, 'WrapperSelect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperSelect).default;
  }
});

var _wrapperModalSelect = __webpack_require__(1586);

Object.defineProperty(exports, 'WrapperModalSelect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapperModalSelect).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1533:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHxJREFUeNpinDlzJgM5gAlKewLxMyD+TwA/g6qFa5wLxGFAzAjlM6JhmFgYVC1coyQQH8Hiov9o/CNQtXCNZPsRGTwHYhsk51kD8Qt0RSxYNKYA8WogloDynwJxMjEat8H8QapTyfbjINeIHAX4ADxqWHBEAS4AjxqAAAMASR4bIq9a4swAAAAASUVORK5CYII="

/***/ }),

/***/ 1534:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJFJREFUeNpi/P//PwM5gAVEePnleAKpuUAsSUD9cyBO3rZpynYGkI2evtnPgNgGyv4PopExTAykBqQWxGaCmiQJNOUIuvFAl6D4A6oG7ComBjIBNo3PgTbZQG1gBLKtgcwXWAMHDaQA8WqgBgko/ykoQAhqBNqyjYjQpa4fB7lGeBTgA8hRw4IjCnABeNQABBgANs1HTp7NXyoAAAAASUVORK5CYII="

/***/ }),

/***/ 1535:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABVklEQVQ4T6WTzXHCQAyFn/bAcAsdxCW4BHcQSogvaH0jHZAOuBlxASoIqSDuAHcQ0gE5cmCVkcdmjDFkMtnbrqRPTz9L+OehvngRmarqExHFqlqq6muWZUWf7xVARGYAosFgME3T9LBcLuMQwpqIZsy87UIuAKvVanQ8Hgvvfdx2zPM8cs4VzBzdBeR5nhDR2Hs/7TqKiDLzleKLB8tERNsbCkpmHt1VYMbFYrElok9mfrF7Lf8NwIaZ578CrGmq+gFgpKp7IopU9d17P24Bd6q6sVIvSqgn8AxgHkIom2zD4bBsJnI6nWLnXAIgsaaeASKytoBmfF2pbWUhhBRAkWXZvgJY951zNmcjX512MIBvIkomk0mlsALUjVv3Lcq94DNARPZ9S2IOZgPw2M3cyKwU3FqSOvsOwJctWCO7XWMDOAB4aBts62wH7M2adevT9v7Gv/zwH4PhtBGvNQeUAAAAAElFTkSuQmCC"

/***/ }),

/***/ 1536:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaklEQVQ4T6WTzU3DQBCF3+BF4oY7wCVsDpHsmzsgxyhypNBB6MB0kBIc2ULcCBXg21ri4O2A0EG4RSJk0Do/bJwlCOGbtTPfvJl5Q/jnR658GQ3HYL4GkQSzBnCnq6J0xR4BZJikAAIsxVjrbCG7A0neWcaEVKti1oYcAKQc+XSxKuuqkHagDPsBkShrVQSnAWESg9DTqhi3AzvRkGuVHyk+VGAqQcycCiB0XRX+SQXmUUZD0+erVvlt8x/2A5B4BGiqVT75HdAdSAjvmQCfGXMiBAw8aZX3voHnNcBT02qrhSQlwohBk+36NgWXQu82As+TAMdEiM1Q9wAZJtk2uFlfW6pZp6XsBvgodfUwbwDSTB+U6iqPncayksH8zp/rWL/cG4NhA2gGx5nLKHbldvIe0ImSucskJsC8AXTlSrYAbpM0Nhaemfgbr9a9nWy7zaaFTpgsQHRpPxjXNR4AYIb109E6r/EvF/4FXk6sEdl++K0AAAAASUVORK5CYII="

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AreaConstants = undefined;

var _area = __webpack_require__(1581);

var AreaConstants = _interopRequireWildcard(_area);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.AreaConstants = AreaConstants;

/***/ }),

/***/ 1557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1525);

var _antd = __webpack_require__(644);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;

var rowStyle = {
    height: 28,
    lineHeight: "28px"
};

var labelStyle = {
    textAlign: "right",
    paddingRight: "5px",
    color: "#999"
};

var WrapperSelect = function (_React$Component) {
    _inherits(WrapperSelect, _React$Component);

    function WrapperSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WrapperSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrapperSelect.__proto__ || Object.getPrototypeOf(WrapperSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data: []
        }, _this.initData = function () {
            var promiseLoader = _this.props.promiseLoader;


            if (!promiseLoader || typeof promiseLoader !== "function") {
                return;
            }
            promiseLoader().then(function (res) {
                _this.setState({ data: res });
            }).catch(function (error) {
                console.log("获取数据失败", error);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WrapperSelect, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initData();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                labelText = _props.labelText,
                labelSpan = _props.labelSpan,
                inputSpan = _props.inputSpan,
                dataSource = _props.dataSource,
                showDefault = _props.showDefault,
                showRequired = _props.showRequired,
                selectProps = _objectWithoutProperties(_props, ['labelText', 'labelSpan', 'inputSpan', 'dataSource', 'showDefault', 'showRequired']);

            var options = [];
            var defaultOption = _react2.default.createElement(
                Option,
                { key: '1', value: '' },
                '\u8BF7\u9009\u62E9'
            );
            if (showDefault) options.push(defaultOption);

            var data = this.state.data;

            if (dataSource) {
                data = dataSource;
            }
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(function (item, index) {
                    options.push(_react2.default.createElement(
                        Option,
                        { key: item.id, value: item.id },
                        item.name
                    ));
                });
            }

            if (labelText) {
                return _react2.default.createElement(
                    _antd.Row,
                    { style: rowStyle },
                    _react2.default.createElement(
                        _antd.Col,
                        { span: labelSpan, style: labelStyle },
                        showRequired ? _react2.default.createElement(
                            'span',
                            { style: { color: "red" } },
                            '*'
                        ) : null,
                        labelText
                    ),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: inputSpan },
                        _react2.default.createElement(
                            _antd.Select,
                            _extends({ style: { width: '100%' } }, selectProps),
                            options
                        )
                    )
                );
            }

            return _react2.default.createElement(
                _antd.Row,
                { style: rowStyle },
                _react2.default.createElement(
                    _antd.Select,
                    _extends({}, selectProps, { style: { width: '100%' } }),
                    options
                )
            );
        }
    }]);

    return WrapperSelect;
}(_react2.default.Component);

WrapperSelect.propTypes = {
    labelText: _react2.default.PropTypes.string,
    promiseLoader: _react2.default.PropTypes.func, //支持promise
    dataSource: _react2.default.PropTypes.array, //同步情况下的数据源
    showRequired: _react2.default.PropTypes.bool, //显示必填 *
    showDefault: _react2.default.PropTypes.bool //是否显示默认项 请选择
};
WrapperSelect.defaultProps = _defineProperty({
    showDefault: true,
    labelSpan: 12,
    inputSpan: 12,
    defaultValue: "",
    promiseLoader: function promiseLoader() {
        return Promise.resolve([]);
    },
    showRequired: false
}, 'showDefault', true);
exports.default = WrapperSelect;

/***/ }),

/***/ 1558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrimaryKey = exports.Supply = exports.Payment = exports.AreaService = undefined;

var _areaService = __webpack_require__(1594);

var AreaService = _interopRequireWildcard(_areaService);

var _paymentService = __webpack_require__(1610);

var Payment = _interopRequireWildcard(_paymentService);

var _supplyService = __webpack_require__(1611);

var Supply = _interopRequireWildcard(_supplyService);

var _primaryKeyService = __webpack_require__(1612);

var PrimaryKey = _interopRequireWildcard(_primaryKeyService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.AreaService = AreaService;
exports.Payment = Payment;
exports.Supply = Supply;
exports.PrimaryKey = PrimaryKey;

/***/ }),

/***/ 1581:
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

/***/ 1582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1525);

var _common = __webpack_require__(1530);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  产品构成--按地块 com-block（1~2）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ComBlock = function (_Component) {
    _inherits(ComBlock, _Component);

    function ComBlock() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComBlock);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComBlock.__proto__ || Object.getPrototypeOf(ComBlock)).call.apply(_ref, [this].concat(args))), _this), _this.handleBuildingClick = function (text, record) {
            return function () {
                console.log("parent record", record);
            };
        }, _this.handleFormatClick = function (text, record) {
            return function () {
                console.log("child record", record);
            };
        }, _this.columnRender = {
            name: function name(text, record) {
                if (record["level"] === 1) return _react2.default.createElement(
                    'a',
                    { onClick: _this.handleBuildingClick(text, record) },
                    text
                );
                return _react2.default.createElement(
                    'a',
                    { onClick: _this.handleFormatClick(text, record) },
                    text
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ComBlock, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _index.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                headerData = _props.headerData,
                dataSource = _props.dataSource;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_common.WrapperGroupTable, {
                    headerData: headerData,
                    dataSource: dataSource,
                    rowKey: 'key',
                    columnRender: this.columnRender
                })
            );
        }
    }]);

    return ComBlock;
}(_react.Component);

ComBlock.propTypes = {
    headerData: _react2.default.PropTypes.array,
    dataSource: _react2.default.PropTypes.array
};
ComBlock.defaultProps = {
    headerData: [],
    dataSource: []
};
exports.default = ComBlock;

/***/ }),

/***/ 1583:
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

/***/ 1584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1525);

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

/***/ 1585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1525);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WrapperGroupTable.__proto__ || Object.getPrototypeOf(WrapperGroupTable)).call.apply(_ref, [this].concat(args))), _this), _this.getColumns = function (headerData) {
            var columnRender = _this.props.columnRender;

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
                    column.fixed = "left";
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

                    //fixed
                    if (item.fixed) {
                        column.fixed = item.fixed;
                    }
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
    columnRender: _react2.default.PropTypes.object //自定义render
};
WrapperGroupTable.defaultProps = {
    headerData: [],
    dataSource: [],
    rowKey: "id",
    defaultHeight: 400,
    columnRender: null
};
exports.default = WrapperGroupTable;

/***/ }),

/***/ 1586:
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

var _utils = __webpack_require__(1525);

var _wrapperSelect = __webpack_require__(1557);

var _wrapperSelect2 = _interopRequireDefault(_wrapperSelect);

var _constants = __webpack_require__(1538);

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

/***/ 1587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1525);

var _common = __webpack_require__(1530);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComBlockFilter = function (_Component) {
    _inherits(ComBlockFilter, _Component);

    function ComBlockFilter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComBlockFilter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComBlockFilter.__proto__ || Object.getPrototypeOf(ComBlockFilter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            formatKey: ""
        }, _this.handleInputChange = function (key) {
            return function (e) {
                _this.setState(_defineProperty({}, key, e.target.value));
            };
        }, _this.handleClick = function () {
            var formatKey = _this.state.formatKey;

            _this.props.onSearch && _this.props.onSearch(formatKey);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     *  处理文本框change事件
     */


    _createClass(ComBlockFilter, [{
        key: 'render',
        value: function render() {
            var formatKey = this.state.formatKey;


            return _react2.default.createElement(
                _antd.Row,
                null,
                _react2.default.createElement(
                    _antd.Col,
                    { span: 5 },
                    _react2.default.createElement(_common.WrapperInput, { labelText: '\u6309\u4E1A\u6001\uFF1A', labelSpan: 8, inputSpan: 16, value: formatKey,
                        onChange: this.handleInputChange("formatKey") })
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { span: 5, style: { textAlign: "left", paddingLeft: "10px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: this.handleClick },
                        '\u67E5\u8BE2'
                    )
                )
            );
        }
    }]);

    return ComBlockFilter;
}(_react.Component);

ComBlockFilter.propTypes = {
    onSearch: _react2.default.PropTypes.func
};
ComBlockFilter.defaultProps = {
    onSearch: function onSearch() {}
};
exports.default = ComBlockFilter;

/***/ }),

/***/ 1588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1525);

var _common = __webpack_require__(1530);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  产品构成--按楼栋 com-building（3~9）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ComBuilding = function (_Component) {
    _inherits(ComBuilding, _Component);

    function ComBuilding() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComBuilding);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComBuilding.__proto__ || Object.getPrototypeOf(ComBuilding)).call.apply(_ref, [this].concat(args))), _this), _this.handleBuildingClick = function (text, record) {
            return function () {
                console.log("parent record", record);
            };
        }, _this.handleFormatClick = function (text, record) {
            return function () {
                console.log("child record", record);
            };
        }, _this.columnRender = {
            name: function name(text, record) {
                if (record["level"] === 1) return _react2.default.createElement(
                    'a',
                    { onClick: _this.handleBuildingClick(text, record) },
                    text
                );
                return _react2.default.createElement(
                    'a',
                    { onClick: _this.handleFormatClick(text, record) },
                    text
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ComBuilding, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _index.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                headerData = _props.headerData,
                dataSource = _props.dataSource;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_common.WrapperGroupTable, {
                    headerData: headerData,
                    dataSource: dataSource,
                    rowKey: 'key',
                    columnRender: this.columnRender
                })
            );
        }
    }]);

    return ComBuilding;
}(_react.Component);

ComBuilding.propTypes = {
    headerData: _react2.default.PropTypes.array,
    dataSource: _react2.default.PropTypes.array
};
ComBuilding.defaultProps = {
    headerData: [],
    dataSource: []
};
exports.default = ComBuilding;

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

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1525);

var _common = __webpack_require__(1530);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComBuildingFilter = function (_Component) {
    _inherits(ComBuildingFilter, _Component);

    function ComBuildingFilter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComBuildingFilter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComBuildingFilter.__proto__ || Object.getPrototypeOf(ComBuildingFilter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            formatKey: ""
        }, _this.handleInputChange = function (key) {
            return function (e) {
                _this.setState(_defineProperty({}, key, e.target.value));
            };
        }, _this.handleClick = function () {
            var formatKey = _this.state.formatKey;

            _this.props.onSearch && _this.props.onSearch(formatKey);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     *  处理文本框change事件
     */


    _createClass(ComBuildingFilter, [{
        key: 'render',
        value: function render() {
            var formatKey = this.state.formatKey;


            return _react2.default.createElement(
                _antd.Row,
                null,
                _react2.default.createElement(
                    _antd.Col,
                    { span: 5 },
                    _react2.default.createElement(_common.WrapperInput, { labelText: '\u6309\u4E1A\u6001\uFF1A', labelSpan: 8, inputSpan: 16, value: formatKey,
                        onChange: this.handleInputChange("formatKey") })
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { span: 5, style: { textAlign: "left", paddingLeft: "10px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: this.handleClick },
                        '\u67E5\u8BE2'
                    )
                )
            );
        }
    }]);

    return ComBuildingFilter;
}(_react.Component);

ComBuildingFilter.propTypes = {
    onSearch: _react2.default.PropTypes.func
};
ComBuildingFilter.defaultProps = {
    onSearch: function onSearch() {}
};
exports.default = ComBuildingFilter;

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

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1525);

var _common = __webpack_require__(1530);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  产品构成--按业态 com-format（3~9）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ComFormat = function (_Component) {
    _inherits(ComFormat, _Component);

    function ComFormat() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComFormat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComFormat.__proto__ || Object.getPrototypeOf(ComFormat)).call.apply(_ref, [this].concat(args))), _this), _this.handleBuildingClick = function (text, record) {
            return function () {
                console.log("parent record", record);
            };
        }, _this.handleFormatClick = function (text, record) {
            return function () {
                console.log("child record", record);
            };
        }, _this.columnRender = {
            name: function name(text, record) {
                if (record["level"] === 1) return _react2.default.createElement(
                    'a',
                    { onClick: _this.handleBuildingClick(text, record) },
                    text
                );
                return _react2.default.createElement(
                    'a',
                    { onClick: _this.handleFormatClick(text, record) },
                    text
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ComFormat, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _index.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                headerData = _props.headerData,
                dataSource = _props.dataSource;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_common.WrapperGroupTable, {
                    headerData: headerData,
                    dataSource: dataSource,
                    rowKey: 'key',
                    columnRender: this.columnRender
                })
            );
        }
    }]);

    return ComFormat;
}(_react.Component);

ComFormat.propTypes = {
    headerData: _react2.default.PropTypes.array,
    dataSource: _react2.default.PropTypes.array
};
ComFormat.defaultProps = {
    headerData: [],
    dataSource: []
};
exports.default = ComFormat;

/***/ }),

/***/ 1591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _index = __webpack_require__(1525);

var _common = __webpack_require__(1530);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComFormatFilter = function (_Component) {
    _inherits(ComFormatFilter, _Component);

    function ComFormatFilter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComFormatFilter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComFormatFilter.__proto__ || Object.getPrototypeOf(ComFormatFilter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            formatKey: "",
            buildingKey: ""
        }, _this.handleInputChange = function (key) {
            return function (e) {
                _this.setState(_defineProperty({}, key, e.target.value));
            };
        }, _this.handleClick = function () {
            var _this$state = _this.state,
                formatKey = _this$state.formatKey,
                buildingKey = _this$state.buildingKey;

            _this.props.onSearch && _this.props.onSearch(formatKey, buildingKey);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     *  处理文本框change事件
     */


    _createClass(ComFormatFilter, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                formatKey = _state.formatKey,
                buildingKey = _state.buildingKey;


            return _react2.default.createElement(
                _antd.Row,
                null,
                _react2.default.createElement(
                    _antd.Col,
                    { span: 5 },
                    _react2.default.createElement(_common.WrapperInput, { labelText: '\u6309\u4E1A\u6001\uFF1A', labelSpan: 8, inputSpan: 16, value: formatKey,
                        onChange: this.handleInputChange("formatKey") })
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { span: 5 },
                    _react2.default.createElement(_common.WrapperInput, { labelText: '\u6309\u697C\u680B\uFF1A', labelSpan: 8, inputSpan: 16, value: buildingKey,
                        onChange: this.handleInputChange("buildingKey") })
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { span: 5, style: { textAlign: "left", paddingLeft: "10px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: this.handleClick },
                        '\u67E5\u8BE2'
                    )
                )
            );
        }
    }]);

    return ComFormatFilter;
}(_react.Component);

ComFormatFilter.propTypes = {
    onSearch: _react2.default.PropTypes.func
};
ComFormatFilter.defaultProps = {
    onSearch: function onSearch() {}
};
exports.default = ComFormatFilter;

/***/ }),

/***/ 1592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1525);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _constants = __webpack_require__(1538);

var _toolsDynamicTable = __webpack_require__(1526);

var _toolsDynamicTable2 = _interopRequireDefault(_toolsDynamicTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  规划方案指标 plan-quota （1~9）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//公共类


__webpack_require__(645);
__webpack_require__(1527); //专用css

var PlanQuota = function (_Component) {
  _inherits(PlanQuota, _Component);

  function PlanQuota() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PlanQuota);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlanQuota.__proto__ || Object.getPrototypeOf(PlanQuota)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pid: 1, //项目id或当前版本id
      DynamicData: [] //获取
    }, _this.staticData = {
      number: 0
      /**
       * 发送数据给
       */
    }, _this.postData = {}, _this.BIND_CALLBACK = function (da, e) {
      //子页面返回callback
      // if(this.time){ clearTimeout(this.time) }
      var th = _this;
      var el = e && e["target"] ? e.target.value : da.val,
          list = _this.state.DynamicData;
      list.forEach(function (d, i) {
        if (da.id == d.id) {
          d["val"] = el;
          d["test"] = da["test"];
          return;
        }
      });
      th.setState({
        "DynamicData": list
      });

      _this.postData = list.filter(function (arg) {
        if (arg["val"]) {
          return arg;
        }
      });
      console.log("postData", _this.postData);
      // this.props.CallBack(this.postData)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PlanQuota, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextState) {
      var data = nextProps.planData.map(function (arg) {

        arg["valueId"] = _iss2.default.guid();
        arg["edit"] = "+m";
        //  console.log(arg);
        return arg;
      });
      data.unshift({
        "pid": "",
        "id": "GETTYPE",
        "label": "获取方式",
        "text": null,
        "val": ["4", "5", "6"],
        "type": "selects",
        "unit": null,
        "edit": "+m",
        "exec": "select ''  val,'请选择'  label ,0 ordernum  from dual union all select to_char(Dicvalue)  , to_char(dicName) ,SEQNUM from BT_SYSDICTIONARY where DICCATEGORYID=3 and DICLEVEL=2 and ISDEL=0 and ISENABLE=1\norder by ordernum",
        "regExp": "{type:\"number\"}",
        "colspan": 4,
        "data": [{
          "val": null,
          "label": "请选择"
        }, {
          "val": "1",
          "label": "拍卖"
        }, {
          "val": "2",
          "label": "划拨"
        }, {
          "val": "3",
          "label": "招标"
        }, {
          "val": "4",
          "label": "并购"
        }, {
          "val": "5",
          "label": "挂牌"
        }, {
          "val": "6",
          "label": "协议出让"
        }, {
          "val": "7",
          "label": "在建工程转让"
        }],
        "valuetype": null,
        "valueId": "59593EBE335547228BF73D1467CFD92F",
        "test": {
          "check": false,
          "val": null
        }
      });
      this.setState({
        "DynamicData": data
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _utils.shallowCompare)(this, nextProps.planData, nextState.planData);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      //  console.log("haha-will",this.props.planData)
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  console.log("haha-did",this.props.planData)

    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'article',
        null,
        _react2.default.createElement(_toolsDynamicTable2.default, { pid: this.state.pid, DynamicData: this.state.DynamicData, CallBack: this.BIND_CALLBACK })
      );
    }
  }]);

  return PlanQuota;
}(_react.Component);

exports.default = PlanQuota;

/***/ }),

/***/ 1593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1525);

var _common = __webpack_require__(1530);

var _constants = __webpack_require__(1538);

var _services = __webpack_require__(1558);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  地块·业态维护 block-format-edit (1~2)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Option = _antd.Select.Option,
    OptGroup = _antd.Select.OptGroup;

var BlockFormatEdit = function (_Component) {
    _inherits(BlockFormatEdit, _Component);

    function BlockFormatEdit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BlockFormatEdit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockFormatEdit.__proto__ || Object.getPrototypeOf(BlockFormatEdit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            dataSource: [],
            loading: false,
            land: "", //地块
            residence: [], //住宅
            commercial: [], //商办
            business: [], //商业
            parkAndSupport: [] //车位以及配套
        }, _this.loadData = function () {
            _this.setState({
                loading: true
            });
            var _this$props = _this.props,
                step = _this$props.step,
                mode = _this$props.mode,
                versionId = _this$props.versionId;
            //TODO 使用参数 versionId

            _services.AreaService.getSearchData(step, mode).then(function (rows) {
                _this.setState({
                    dataSource: [].concat(_toConsumableArray(rows)),
                    loading: false
                });
            }).catch(function (error) {
                _this.setState({
                    loading: false
                });
                console.error("发生错误", error);
            });
        }, _this.columns = [{
            title: '业态',
            dataIndex: 'producttypename',
            key: 'producttypename',
            width: 200
        }, {
            title: '所属地块',
            dataIndex: 'landid',
            key: 'landid',
            width: 200,
            render: function render(text, record) {
                return _react2.default.createElement(_common.WrapperSelect, { dataSource: _this.props.conditionData.land, value: text, showDefault: false,
                    onChange: _this.handleChangeProperty(record, "land") });
            }
        }, {
            title: '产权属性',
            dataIndex: 'ishaveproperty',
            key: 'ishaveproperty',
            width: 200,
            render: function render(text, record) {
                var matchProperty = _constants.AreaConstants.RightsProperty.filter(function (item) {
                    return item.id === text;
                })[0];
                if (matchProperty) {
                    return matchProperty.name;
                }
                return "";
            }
        }, {
            title: '精装属性',
            dataIndex: 'isdecoration',
            key: 'isdecoration',
            width: 200,
            render: function render(text, record) {
                var matchProperty = _constants.AreaConstants.HardcoverProperty.filter(function (item) {
                    return item.id === text;
                })[0];
                if (matchProperty) {
                    return matchProperty.name;
                }
                return "";
            }
        }, {
            title: '层高属性',
            dataIndex: 'storeyheight',
            key: 'storeyheight',
            width: 200,
            render: function render(text, record) {
                var matchProperty = _constants.AreaConstants.LayerProperty.filter(function (item) {
                    return item.id === text;
                })[0];
                if (matchProperty) {
                    return matchProperty.name;
                }
                return "";
            }
        }], _this.handleChangeProperty = function (record, key) {
            return function (value) {
                record[key] = value;
                _this.forceUpdate();
            };
        }, _this.handleSave = function () {
            var dataSource = _this.state.dataSource;

            _this.setState({
                loading: true
            });
            var paramsValue = dataSource.map(function (item) {
                return {
                    id: item.id,
                    landid: item.landid,
                    producttypeid: item.producttypeid,
                    ishaveproperty: item.ishaveproperty,
                    isdecoration: item.isdecoration,
                    storeyheight: item.storeyheight
                };
            });
            _services.AreaService.saveFormatData(paramsValue).then(function (result) {
                if (result === "sucess") {
                    console.log("保存成功");
                    //TODO message.info("保存成功");
                    _this.props.onHideModal && _this.props.onHideModal();
                } else {}
            }).catch(function (error) {
                console.error("发生错误", error);
            });
        }, _this.handleCancel = function () {
            _this.props.onHideModal && _this.props.onHideModal();
        }, _this.handleSelectChange = function (key) {
            return function (value) {
                _this.setState(_defineProperty({}, key, value));
            };
        }, _this.handleModalSelectChange = function (key) {
            return function (value) {
                console.log("接收到的数据", key, value);
                _this.setState(_defineProperty({}, key, value));
            };
        }, _this.handleCreateFormat = function () {
            var _this$state = _this.state,
                land = _this$state.land,
                residence = _this$state.residence,
                commercial = _this$state.commercial,
                business = _this$state.business,
                parkAndSupport = _this$state.parkAndSupport,
                dataSource = _this$state.dataSource;
            //TODO 校验

            if (!land) {
                console.error("所属地块必填！");
                return;
            }

            if (residence.length == 0 && commercial.length == 0 && business.length == 0 && parkAndSupport.length == 0) {
                console.error("生成属性至少选择一个！");
                return;
            }

            _this.setState({
                loading: true
            });

            var paramsValue = {
                landId: land,
                conditionData: [].concat(_toConsumableArray(residence), _toConsumableArray(commercial), _toConsumableArray(business), _toConsumableArray(parkAndSupport)),
                productTypeList: dataSource.map(function (item) {
                    return {
                        id: item.id,
                        landid: item.landid,
                        producttypeid: item.producttypeid,
                        ishaveproperty: item.ishaveproperty,
                        isdecoration: item.isdecoration,
                        storeyheight: item.storeyheight
                    };
                })
            };

            _services.AreaService.createFormatData(paramsValue).then(function (dataSource) {
                _this.setState({
                    dataSource: [].concat(_toConsumableArray(dataSource)),
                    loading: false
                });
            }).catch(function (err) {
                console.error("发生错误", err);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BlockFormatEdit, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
        }

        /**
         * 加载数据
         */


        /**
         *  处理下拉框change事件
         */


        /**
         * 生成业态
         */

    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                loading = _state.loading,
                land = _state.land,
                dataSource = _state.dataSource;
            var conditionData = this.props.conditionData;


            return _react2.default.createElement(
                _antd.Modal,
                {
                    title: "地块·业态维护",
                    visible: true,
                    onCancel: this.handleCancel,
                    maskClosable: false,
                    width: '90%',
                    footer: [_react2.default.createElement(
                        _antd.Button,
                        { key: 'save', type: 'primary', size: 'large', onClick: this.handleSave },
                        '\u786E\u8BA4'
                    ), _react2.default.createElement(
                        _antd.Button,
                        { key: 'cancel', type: 'primary', size: 'large', onClick: this.handleCancel },
                        '\u53D6\u6D88'
                    )] },
                _react2.default.createElement(
                    _antd.Spin,
                    { size: 'large', spinning: loading },
                    _react2.default.createElement(
                        _antd.Row,
                        { gutter: 16 },
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 6 },
                            _react2.default.createElement(_common.WrapperSelect, { labelText: '\u6240\u5C5E\u5730\u5757\uFF1A', dataSource: conditionData.land,
                                showRequired: !land,
                                onChange: this.handleSelectChange("land") })
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 18, style: { textAlign: "right" } },
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', onClick: this.handleCreateFormat },
                                '\u751F\u6210\u4E1A\u6001'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Row,
                        null,
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 6 },
                            _react2.default.createElement(_common.WrapperModalSelect, { labelText: '\u4F4F\u5B85\uFF1A', multiple: false, dataSource: conditionData.residence,
                                onSelectChange: this.handleModalSelectChange("residence") })
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 6 },
                            _react2.default.createElement(_common.WrapperModalSelect, { labelText: '\u5546\u529E\uFF1A', multiple: false, dataSource: conditionData.commercial,
                                onSelectChange: this.handleModalSelectChange("commercial") })
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 6 },
                            _react2.default.createElement(_common.WrapperModalSelect, { labelText: '\u5546\u4E1A\uFF1A', dataSource: conditionData.business,
                                onSelectChange: this.handleModalSelectChange("business") })
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 6 },
                            _react2.default.createElement(_common.WrapperModalSelect, { labelText: '\u8F66\u4F4D\u53CA\u914D\u5957\uFF1A', dataSource: conditionData.parkAndSupport,
                                onSelectChange: this.handleModalSelectChange("parkAndSupport") })
                        )
                    ),
                    _react2.default.createElement(_antd.Table, { dataSource: dataSource, rowKey: 'id', size: "middle", pagination: false, bordered: true,
                        columns: this.columns })
                )
            );
        }
    }]);

    return BlockFormatEdit;
}(_react.Component);

BlockFormatEdit.propTypes = {
    onHideModal: _react2.default.PropTypes.func, //对外接口 操作完成时 关闭模态窗口
    conditionData: _react2.default.PropTypes.object
};
BlockFormatEdit.defaultProps = {
    onHideModal: function onHideModal() {},
    conditionData: {}
};
exports.default = BlockFormatEdit;

/***/ }),

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveFormatData = exports.createFormatData = exports.getSearchData = exports.getCreateCondition = exports.saveVersion = exports.getVersion = exports.createVersion = exports.getAreaPlanQuota = exports.getAreaList = exports.getStep = undefined;

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _constants = __webpack_require__(1538);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AreaManageStep = _constants.AreaConstants.AreaManageStep;


var website = "http://192.168.10.164:8066";
// const website = "http://192.168.14.119:65162";

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

    return _iss2.default.fetch({
        url: website.concat("/AreaInfo/IGetAreaListInfo"),
        type: "get",
        data: {
            step: step.code,
            projectLevel: mode,
            versionId: versionId,
            descType: descType
        }
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
    });
};

/**
 * 创建版本
 */
var createVersion = function createVersion(stepInfo, dataKey, mode) {
    return null;
};

/**
 * 获取版本
 */
var getVersion = function getVersion(stepInfo, dataKey, mode) {
    return _iss2.default.fetch({
        url: website.concat("/Common/IGetVersionListByBusinessId"),
        type: "get",
        data: {
            ProjectStageId: dataKey,
            step: stepInfo.code,
            projectLevel: mode,
            dataType: "Area"
        }
    });
};

/**
 * 保存版本
 */
var saveVersion = function saveVersion() {
    return null;
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
var getSearchData = function getSearchData(stepInfo, mode) {
    var versionId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "1c52cb5b-674b-4a8c-8a49-bec93681e690";

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

exports.getStep = getStep;
exports.getAreaList = getAreaList;
exports.getAreaPlanQuota = getAreaPlanQuota;
exports.createVersion = createVersion;
exports.getVersion = getVersion;
exports.saveVersion = saveVersion;
exports.getCreateCondition = getCreateCondition;
exports.getSearchData = getSearchData;
exports.createFormatData = createFormatData;
exports.saveFormatData = saveFormatData;

/***/ }),

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1525);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  地块·业态面积调整 block-format-adjust
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BlockFormatAdjust = function (_Component) {
    _inherits(BlockFormatAdjust, _Component);

    function BlockFormatAdjust() {
        _classCallCheck(this, BlockFormatAdjust);

        return _possibleConstructorReturn(this, (BlockFormatAdjust.__proto__ || Object.getPrototypeOf(BlockFormatAdjust)).apply(this, arguments));
    }

    _createClass(BlockFormatAdjust, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u5730\u5757\xB7\u4E1A\u6001\u9762\u79EF\u8C03\u6574'
            );
        }
    }]);

    return BlockFormatAdjust;
}(_react.Component);

exports.default = BlockFormatAdjust;

/***/ }),

/***/ 1596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1525);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  楼栋面积调整 building-area-adjust
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BuildingAreaAdjust = function (_Component) {
    _inherits(BuildingAreaAdjust, _Component);

    function BuildingAreaAdjust() {
        _classCallCheck(this, BuildingAreaAdjust);

        return _possibleConstructorReturn(this, (BuildingAreaAdjust.__proto__ || Object.getPrototypeOf(BuildingAreaAdjust)).apply(this, arguments));
    }

    _createClass(BuildingAreaAdjust, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u697C\u680B\u9762\u79EF\u8C03\u6574'
            );
        }
    }]);

    return BuildingAreaAdjust;
}(_react.Component);

exports.default = BuildingAreaAdjust;

/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1525);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  楼栋·业态维护 building-format-edit (3~9)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BuildingFormatEdit = function (_Component) {
    _inherits(BuildingFormatEdit, _Component);

    function BuildingFormatEdit() {
        _classCallCheck(this, BuildingFormatEdit);

        return _possibleConstructorReturn(this, (BuildingFormatEdit.__proto__ || Object.getPrototypeOf(BuildingFormatEdit)).apply(this, arguments));
    }

    _createClass(BuildingFormatEdit, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u697C\u680B\xB7\u4E1A\u6001\u7EF4\u62A4'
            );
        }
    }]);

    return BuildingFormatEdit;
}(_react.Component);

exports.default = BuildingFormatEdit;

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

var _antd = __webpack_require__(644);

var _utils = __webpack_require__(1525);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  业态面积调整 format-area-adjust
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FormatAreaAdjust = function (_Component) {
    _inherits(FormatAreaAdjust, _Component);

    function FormatAreaAdjust() {
        _classCallCheck(this, FormatAreaAdjust);

        return _possibleConstructorReturn(this, (FormatAreaAdjust.__proto__ || Object.getPrototypeOf(FormatAreaAdjust)).apply(this, arguments));
    }

    _createClass(FormatAreaAdjust, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _utils.shallowCompare)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u4E1A\u6001\u9762\u79EF\u8C03\u6574'
            );
        }
    }]);

    return FormatAreaAdjust;
}(_react.Component);

exports.default = FormatAreaAdjust;

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

var _antd = __webpack_require__(644);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _constants = __webpack_require__(1538);

var _common = __webpack_require__(1530);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //公共类


//兼容ie
__webpack_require__(1600);
var AreaManageStep = _constants.AreaConstants.AreaManageStep,
    Legend = _constants.AreaConstants.Legend,
    SelectVertionData = _constants.AreaConstants.SelectVertionData;
var Option = _antd.Select.Option;

var SaveVersion = function (_Component) {
    _inherits(SaveVersion, _Component);

    function SaveVersion() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SaveVersion);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SaveVersion.__proto__ || Object.getPrototypeOf(SaveVersion)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (value) {
            _this.props.onVersionChange && _this.props.onVersionChange(value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SaveVersion, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                versionData = _props.versionData,
                currentVersion = _props.currentVersion;

            return _react2.default.createElement(
                'div',
                { className: 'PosRight' },
                _react2.default.createElement(
                    'span',
                    { className: 'areaUnit Left' },
                    '\uFF08\u9762\u79EF\u5355\u4F4D\uFF1A\u33A1\uFF0C\u8F66\u4F4D\u5355\u4F4D\uFF1A\u4E2A\uFF0C\u9650\u9AD8\u5355\u4F4D\uFF1A\u7C73\uFF09'
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'jh_btn jh_btn28 jh_btn_save Left' },
                    '\u4FDD\u5B58'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'areaVeSel' },
                    _react2.default.createElement(_common.WrapperSelect, { dataSource: versionData, labelText: '\u5F53\u524D\u7248\u672C', showDefault: false,
                        style: { width: "100px" },
                        onChange: this.handleChange })
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'areaStatus' },
                    '\u72B6\u6001:',
                    currentVersion["statusname"]
                )
            );
        }
    }]);

    return SaveVersion;
}(_react.Component);

SaveVersion.propTypes = {
    versionData: _react2.default.PropTypes.array,
    currentVersion: _react2.default.PropTypes.object, //所属地块数据源
    onVersionChange: _react2.default.PropTypes.func
};
SaveVersion.defaultProps = {
    versionData: [],
    currentVersion: {},
    onVersionChange: function onVersionChange() {}
};
exports.default = SaveVersion;

/***/ }),

/***/ 1600:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1601);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./com-SaveVersion.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./com-SaveVersion.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1603);
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

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*公共button*/\nbutton,\nlabel {\n  border: none;\n  outline: none;\n  font-weight: normal;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  color: #999;\n}\n.jhBtn-wrap .jh_btn:last-child {\n  padding-right: 0;\n}\n.jh_btn {\n  display: inline-block;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-repeat: no-repeat;\n  background-position: left center;\n  background-color: transparent;\n}\n.jh_btn:hover {\n  color: #666;\n}\n.jh_btn40 {\n  height: 40px;\n  line-height: 40px;\n}\n.jh_btn33 {\n  height: 33px;\n  line-height: 33px;\n}\n.jh_btn28 {\n  height: 28px;\n  line-height: 28px;\n}\n.jh_btn22 {\n  height: 22px;\n  line-height: 22px;\n}\n/*发起审批*/\n.jh_btn_apro {\n  background-image: url(" + __webpack_require__(1535) + ");\n}\n.jh_btn_apro:hover {\n  background-image: url(" + __webpack_require__(1536) + ");\n}\n/*添加*/\n.jh_btn_add {\n  background-image: url(" + __webpack_require__(1604) + ");\n}\n.jh_btn_add:hover {\n  background-image: url(" + __webpack_require__(1605) + ");\n}\n/*保存*/\n.jh_btn_save {\n  background-image: url(" + __webpack_require__(1533) + ");\n}\n.jh_btn_save:hover {\n  background-image: url(" + __webpack_require__(1534) + ");\n}\n", ""]);

// exports


/***/ }),

/***/ 1604:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIRJREFUeNpi/P//PwMlgAVEzJo1i2wDmJDYnkD8DIj/E4GfQdWjGDAXiMOAmJEIHAZVj2KAJBAfIdLlR6DqUQzABf4TGwYUByL50UiEs5H5jMQYwIimmXHwhgExBjASa8BzILYh0mJrIH6BHogpQLwaiCWIMOApECejG7ANljxJAQABBgCrtx13rV+pPwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1605:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJNJREFUeNpi/P//PwMlgImBQsACY3j55XgCqblALEmEvudAnLxt05TtLEiCIM1hQMEjhHQDLbMBUquAWIoBFAYg7Omb/R/GJgbD1DMRYdt/mgYi9WIBn7OR+cBAZiRoALIikGZ0TYMrDAgagM/56AY8h6YwBiLShjWQeoEeiClAvBooKUGEGU9BeQHEYKQ0OwMEGAD16Fdvy+R6IQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1607);
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

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(642)(undefined);
// imports


// module
exports.push([module.i, "/*面积管理样式*/\n.areaManage {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.areaTopbtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 300;\n}\n.areaStatus {\n  display: inline-block;\n}\n.areaVeSel {\n  float: left;\n  padding-right: 30px;\n}\n.areaStatus {\n  float: left;\n  line-height: 28px;\n  font-size: 12px;\n  color: #999;\n}\n.areaUnit {\n  display: inline-block;\n  line-height: 28px;\n  font-size: 12px;\n  padding-right: 30px;\n}\n.areaSession {\n  clear: both;\n}\n.areaSession20 {\n  padding-top: 20px;\n}\n.areaSession16 {\n  padding-top: 16px;\n}\n.areaManage .JH-HeadTab .JH-HeadList li {\n  padding: 7px 8px;\n}\n.PosRight {\n  top: 6px;\n}\n.PosRight .jh_btn_save {\n  padding-right: 6px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main(arg) {};
exports.main = main;

/***/ }),

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main(arg) {};
exports.main = main;

/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main(arg) {};
exports.main = main;

/***/ })

});