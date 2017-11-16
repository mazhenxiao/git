import iss from '../js/iss';
import {AreaConstants} from '../constants';

const {AreaManageStep} = AreaConstants;

const website = "http://192.168.10.164:8066";
// const website = "http://192.168.14.119:65162";

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
                const matchStep = serverSteps.filter(serverStep => serverStep.code === localStep.code)[0]
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
    return iss.fetch({
        url: website.concat("/AreaInfo/IGetAreaListInfo"),
        type: "get",
        data: {
            step: step.code,
            projectLevel: mode,
            versionId,
            descType: descType,
        },
    });
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
    );
};

/**
 * 创建版本
 */
const createVersion = (stepInfo, dataKey, mode) => {
    return null;
};

/**
 * 获取版本
 */
const getVersion = (stepInfo, dataKey, mode) => {
    return iss.fetch({
        url: website.concat("/Common/IGetVersionListByBusinessId"),
        type: "get",
        data: {
            ProjectStageId: dataKey,
            step: stepInfo.code,
            projectLevel: mode,
            dataType: "Area",
        },
    });
};

/**
 * 保存版本
 */
const saveVersion = () => {
    return null;
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
const getSearchData = (stepInfo, mode, versionId = "1c52cb5b-674b-4a8c-8a49-bec93681e690") => {
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


export {
    getStep,
    getAreaList,
    getAreaPlanQuota,
    createVersion,
    getVersion,
    saveVersion,
    getCreateCondition,

    getSearchData,
    createFormatData,
    saveFormatData,
};