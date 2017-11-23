import iss from '../js/iss';
import {AreaConstants} from '../constants';

const {AreaManageStep} = AreaConstants;

const website = "http://192.168.10.164:8066";
// const website = "http://192.168.14.119:65162";
//const website = "http://localhost:5000";

/**
 * 获取步骤
 */
const getStep = (dataKey, mode) => {
    return iss.fetch({
        url: website.concat("/Common/IGetStept"),
        type: "get",
        data: {
            ProjectStageId: dataKey,
            projectOrStage: mode,
            dataType: "Area",
        },
    })
        .then(data => data.rows)
.then(serverSteps => {
        const stepData = [];
    AreaManageStep.forEach(localStep => {
        const matchStep = serverSteps.filter(serverStep => serverStep.code === localStep.code)[0];
    if (matchStep) {
        localStep.name = matchStep.name;
        stepData.push(localStep);
    }
});
    return stepData;
})
};

/**
 *  获取面积列表信息
 *  参数信息
 *  step:阶段                 1~9 阶段，参考常量 AreaManageStep
 *  projectLevel:Project     Project 项目  Stage 分期
 *  descType:Building        Building 楼栋，ProductType 业态
 *  versionId:1c52cb5b-674b-4a8c-8a49-bec93681e690  版本
 */
const getAreaList = (step, mode, versionId, descType = "Building") => {
    // //TODO 测试数据
    // versionId = "1c52cb5b-674b-4a8c-8a49-bec93681e690";
    // step = {code: "Vote"};
    // mode = "Project";
    // descType = "Building";

    return iss.fetch({
        url: website.concat("/AreaInfo/IGetAreaListInfo"),
        type: "get",
        data: {
            step: step.code,
            projectLevel: mode,
            versionId,
            descType: descType,
        },
    }).then(res => res.rows);
};

/**
 * 获取面积编辑页面的数据
 * @param step
 * @param mode
 * @param versionId
 * @param productTypeId  点击的业态id
 */
const getAreaEditData = (step, mode, versionId, productTypeId) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/IGetAreaEditData"),
        type: "get",
        data: {
            step: step.code,
            projectLevel: mode,
            versionId,
            productTypeId: productTypeId,
        },
    }).then(res => res.rows);
};

/**
 * 获取面积的规划方案指标
 */
const getAreaPlanQuota = (step, versionId, dataType = "Area") => {
    return iss.fetch({
            url: website.concat("/AreaInfo/IGetAreaPlanInfo"),
            type: "get",
            data: {
                step: step.code,
                versionId,
                dataType
            },
        }
    ).then(res => res.rows);
};

/**
 * 创建版本
 */
const createVersion = (stepInfo, dataKey, mode) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/CreateAreaVersion"),
        type: "post",
        data: {
            step: stepInfo.code,
            psVersionId: dataKey,
            projectLevel: mode,
        },
    });
};

/**
 * 获取版本
 */
const getVersion = (stepInfo, dataKey, mode) => {
    // //TODO 测试数据
    // stepInfo = {code: "Vote"};
    // dataKey = "56EF7587243E4B9EB05029800BFC1F81";
    // mode = "Project";

    return iss.fetch({
        url: website.concat("/Common/IGetVersionListByBusinessId"),
        type: "get",
        data: {
            ProjectStageId: dataKey,
            step: stepInfo.code,
            projectLevel: mode,
            dataType: "Area",
        },
    })
        .then(res => res.rows)
.then(rows => {
        return rows.map(item => {
            return {
                id: item["id"],
                name: item["versioncode"],
                statusName: item["statusname"]
            };
});
});
};

/**
 * 获取生成业态的条件
 */
const getCreateCondition = (stepInfo, dataKey, mode) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/IGetSerchInfo"),
        type: "get",
        data: {
            projectLevel: mode,
            ProjectStageId: dataKey,
            step: stepInfo.code,
        },
    })
        .then(res => res.rows)
.then(({serchList}) => {
        const result = {
            land: [],//地块
            residence: [],//住宅
            commercial: [],//商办
            business: [],//商业
            parkAndSupport: [],//车位以及配套
        };

    const land = serchList.filter(item => item.typeCode === "land")[0];
    const residence = serchList.filter(item => item.typeCode === "residence")[0];
    const commercial = serchList.filter(item => item.typeCode === "commercial")[0];
    const business = serchList.filter(item => item.typeCode === "business")[0];
    const parkAndSupport = serchList.filter(item => item.typeCode === "parkandsupport")[0];
    if (land && Array.isArray(land.typelist)) {
        result.land = land.typelist.map(item => {
            return {
                id: item["val"],
                name: item["lable"],
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
const convertConditionData = (originalData) => {
    return originalData.map(item => {
        const obj = {
            id: item["val"],
            name: item["lable"],
            children: [],
        };
    loadChildren(obj, item["children"]);
    return obj;
});
};

/**
 * 加载子集
 */
const loadChildren = (obj, children) => {
    children.forEach(child => {
        obj.children.push({
        id: child["val"],
        name: child["lable"],
    });
});
};


/**
 * 获取地块业态数据 (获取业态维护页面的数据)
 */
const getSearchData = (stepInfo, mode, versionId) => {
    return iss.fetch({
        url: website.concat("/areaInfo/IGetSearchData"),
        type: "get",
        data: {
            step: stepInfo.code,
            projectLevel: mode,
            versionId: versionId,
        },
    }).then(res => res.rows);
};
/**
 * 生成地块业态数据
 */
const createFormatData = (paramsValue) => {
    return iss.fetch({
        url: website.concat("/areainfo/ICreateProductType"),
        type: "post",
        data: paramsValue,
    }).then(res => res.rows);
};

/**
 * 保存地块业态数据
 */
const saveFormatData = (paramsValue) => {
    return iss.fetch({
        url: website.concat("/areainfo/ISaveProductType"),
        type: "post",
        data: paramsValue,
    }).then(res => res.rows)
};

/**
 * 调整地块业态数据
 */
const adjustFormatData = (paramsValue) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/ISaveAreaEditData"),
        type: "post",
        data: paramsValue,
    }).then(res => res.rows)
};

/**
 *  获取楼栋数据，包括可选择和不可选择的楼栋
 */
const getBuildingData = (versionId, record) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/IGetAreaEditBuildSelectList"),
        type: "get",
        data: {
            versionId,
            productTypeId: record["PRODUCTTYPEID"] || "",
            buildId: record["BUILDID"],
            descType: record["descType"],
        },
    }).then(res => res.rows).then(rows => {
        const buildData = {
            enableList: rows.enableList.map(item => {
                return {
                    label: item["buildName"],
                    value: item["key"],
                    //disabled: item["buildName"] == "1#" ? true : false,//TODO
                    disabled: item["isCurrentBuild"] ? true : false,
                    isCurrentBuild: item.isCurrentBuild
                };
}),
    disableList: rows.disableList.map(item => {
        return {
            label: item["buildName"],
            value: item["key"]
        };
})
};

    return buildData;
})
};

/**
 *  获取楼栋面积数据
 */
const getBuildingAreaData = (versionId, record) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/IGetAreaEditBuildList"),
        type: "get",
        data: {
            versionId,
            productTypeId: record["PRODUCTTYPEID"] || "",
            buildId: record["BUILDID"],
            descType: record["descType"],
            levelId: record["LevelId"]
        },
    }).then(res => res.rows);
};

/**
 *  获取业态面积数据
 */
const getFormatAreaData = (versionId, record) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/IGetAreaEditProdutTypeList"),
        type: "get",
        data: {
            versionId,
            productTypeId: record["PRODUCTTYPEID"] || "",
            buildId: record["BUILDID"],
            descType: record["descType"],
        },
    }).then(res => res.rows);
};

/**
 * 获取单业态指标
 */
const getSingleFormatData = (versionId, record) => {
    return iss.fetch({
        url: website.concat("/AreaInfo/IGetAreaEditSingleProductType"),
        type: "get",
        data: {
            versionId,
            ProductTypeId: record["PRODUCTTYPEID"] || "",
            buildId: record["BUILDID"],
        },
    }).then(res => res.rows);
};

/**
 *  调整楼栋面积数据
 */
const adjustBuildingAreaData = (record, buildIds, buildingChangeDataArray, formatChangeDataArray, singleFormatData) => {
    const paramsValue = {
            buildIds,
            singleProductType: {...singleFormatData},
        levelId: record["LevelId"],
        buildData: buildingChangeDataArray,
        productTypeData: formatChangeDataArray
};

    return iss.fetch({
        url: website.concat("/AreaInfo/ISaveEditBuild"),
        type: "post",
        data: paramsValue,
    }).then(res => res.rows).then(obj => {
        return obj;
})
};

/**
 * 调整业态面积数据
 */
const adjustFormatAreaData = (record, selectBuilding, buildingChangeDataArray, formatChangeDataArray) => {
    const paramsValue = {
        buildIds: selectBuilding,
        levelId: record["LevelId"],
        buildData: buildingChangeDataArray,
        productTypeData: formatChangeDataArray
    };

    return iss.fetch({
        url: website.concat("/AreaInfo/ISaveEditBuild"),
        type: "post",
        data: paramsValue,
    }).then(res => res.rows);
};

export {
    getStep,
    getAreaList,
    getAreaEditData,
    getAreaPlanQuota,
    createVersion,
    getVersion,
    getCreateCondition,

    getSearchData,
    createFormatData,
    saveFormatData,
    adjustFormatData,

    //按楼栋/按业态 面积调整数据获取
    getBuildingData,
    getBuildingAreaData,
    getFormatAreaData,
    getSingleFormatData,

    //按楼栋/按业态 面积调整数据保存
    adjustBuildingAreaData,
    adjustFormatAreaData,
};