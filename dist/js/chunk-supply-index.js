webpackJsonp([36],{

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

/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.main = undefined;

__webpack_require__(58);

var _iss = __webpack_require__(52);

var _iss2 = _interopRequireDefault(_iss);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(644);

var _services = __webpack_require__(1558);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//兼容ie
__webpack_require__(645);

var main = function main(arg) {};
exports.main = main;

/***/ })

});