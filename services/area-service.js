import iss from '../../Content/js/iss';

const website = "http://192.168.10.164:8000";

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
                result.land = convertConditionData(land.typelist);
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
 * 获取地块业态数据
 */
const getFormatData = () => {

};
/**
 * 生成地块业态数据
 */
const createFormatData = () => {

};

/**
 * 保存地块业态数据
 */
const saveFormatData = () => {

};


export {
    getStep,
    getAreaList,
    getAreaPlanQuota,
    createVersion,
    getVersion,
    saveVersion,
    getCreateCondition,

    getFormatData,
    createFormatData,
    saveFormatData,
};