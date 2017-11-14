/*const AreaManageStep = [
    {id: 1, code: "Vote", name: "投决会"},
    {id: 2, code: "ProductPosition", name: "产品定位会"},
    {id: 3, code: "ProjectPosition", name: "项目定位会"},
    {id: 4, code: "Startup", name: "启动会"},
    {id: 5, code: "Rules", name: "工规证"},
    {id: 6, code: "Decision", name: "决策书"},
    {id: 7, code: "PreSale", name: "预售证"},
    {id: 8, code: "Sign", name: "签约"},
    {id: 9, code: "Deliver", name: "交付"},
];*/
/**
 * 阶段
 */
const AreaManageStep = [
    { "guid": "1", "name": "投决会", "code": "Vote", "className": "legend-blue" },
    { "guid": "2", "name": "产品定位会", "code": "ProductPosition", "className": "legend-green" },
    { "guid": "3", "name": "项目定位会", "code": "ProjectPosition", "className": "legend-white" },
    { "guid": "4", "name": "启动会", "code": "Startup", "className": "legend-green" },
    { "guid": "5", "name": "工规证", "code": "Rules", "className": "legend-blue" },
    { "guid": "6", "name": "决策书", "code": "Decision", "className": "legend-red" },
    { "guid": "7", "name": "预售证", "code": "PreSale", "className": "legend-white" },
    { "guid": "8", "name": "签约", "code": "Sign", "className": "legend-white" },
    { "guid": "9", "name": "交付", "code": "Deliver", "className": "legend-white" }
];
/**
 * 阶段简介
 */
const Legend=[
    { "guid": "l1", "text": "未编制", "class": "legend-white" },
    { "guid": "l2", "text": "编制中", "class": "legend-blue" },
    { "guid": "l3", "text": "审批通过", "class": "legend-green" },
    { "guid": "l4", "text": "审批驳回", "class": "legend-red" }
]
/**
 * 选取版本默认传参约定
 */
const SelectVertionData = [
    {
        "id":"",//id
        "versioncode":"请选择",//版本
        "step":"",//阶段
        "parentid":"",//父级id
        "status":"",//状态码
        "statusname":""  //状态文本
    }
]
/**
 * 产权属性
 */
const RightsProperty = [
    {id: "仅包含有产权", name: "仅包含有产权"},
    {id: "仅包含无产权", name: "仅包含无产权"},
    {id: "包含有产权及无产权", name: "包含有产权及无产权"}
];

/**
 * 精装属性
 */
const HardcoverProperty = [
    {id: "全部精装", name: "全部精装"},
    {id: "全部毛坯", name: "全部毛坯"},
    {id: "部分精装部分毛坯", name: "部分精装部分毛坯"}
];

/**
 * 层高属性
 */
const LayerProperty = [
    {id: "平层", name: "平层"},
    {id: "跃层", name: "跃层"},
    {id: "LOFT", name: "LOFT"}
];

export {
    AreaManageStep,
    Legend,
    SelectVertionData,
    RightsProperty,
    HardcoverProperty,
    LayerProperty

}

