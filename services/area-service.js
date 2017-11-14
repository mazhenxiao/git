import iss from '../js/iss';

/**
 * 获取步骤
 */
const getStep = (dataKey, mode) => {
    return iss.fetch({
        url: "http://192.168.10.164:8000/Common/IGetStept",
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
        url: "http://192.168.10.164:8000/AreaInfo/IGetAreaListInfo",
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
 * @param stepInfo
 * @param versionId
 * @param dataType
 * @returns {*}
 */
const getAreaPlanQuota = (step, versionId, dataType = "Area") => {
    return iss.fetch({
            url: "http://192.168.10.164:8000/AreaInfo/IGetAreaPlanInfo",
            type: "get",
            data: {
                step: step.code,
                versionId,
                dataType
            },
        }
    );
};

//创建版本
const createVersion = (stepInfo, dataKey, mode) => {
    return null;
};

//获取版本
const getVersion = (stepInfo, dataKey, mode) => {
    return iss.fetch({
        url: "http://192.168.10.164:8000/Common/IGetVersionListByBusinessId",
        type: "get",
        data: {
            ProjectStageId: dataKey,
            step: stepInfo.code,
            projectLevel: mode,
            dataType: "Area",
        },
    });
};

const saveVersion = () => {
    return null;
};


export {
    getStep,
    getAreaList,
    getAreaPlanQuota,
    createVersion,
    getVersion,
    saveVersion,
};