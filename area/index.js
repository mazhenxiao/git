/**
 *  面积管理 index
 */

import React, {Component} from 'react';
import {Spin, Tabs, Row, Col, Button, Select} from 'antd';
import {AreaConstants} from '../../Content/constants';
import ComBlock from './com-block';
import ComBlockFilter from './com-block-filter';
import ComBuilding from './com-building';
import ComBuildingFilter from './com-building-filter';
import ComFormat from './com-format';
import ComFormatFilter from './com-format-filter';
import PlanQuota from './plan-quota';
import BlockFormatEdit from './block-format-edit';
import BlockFormatAdjust from './block-format-adjust';
import BuildingAreaAdjust from './building-area-adjust';
import BuildingFormatEdit from './building-format-edit';
import FormatAreaAdjust from './format-area-adjust';
import SaveVersion from "./com-save-version";
import {AreaService} from '../services';
import "babel-polyfill";  //兼容ie
require("../../Content/css/tools-processBar.less");
require("../../Content/css/button.less");
require("../../Content/area/areaCss/areaManage.less");
const TabPane = Tabs.TabPane;
const {AreaManageStep, Legend} = AreaConstants;

const {Option} = Select;

class Index extends Component {
    /**
     * 建议显示值
     */
    state = {  //绑定数据
        loading: false,
        stepData: [],
        versionId: "",//版本id
        step: {}, /*当前阶段*/
        dataKey: this.props.location.query.dataKey, /*项目id或分期版本id*/
        mode: this.props.location.query.isProOrStage,//显示模式，项目或者分期
        //方案指标数据，面积数据
        areaData: {},
        //面积数据里的查询
        searchKey: {},
        //版本数据
        versionData: [],
        //生成业态的条件数据
        conditionData: {},

        modalKey: "",
        record: null,//面积调整时，点击的那一行数据

        toggleTab: 3, /* 默认打开的tap*/
        localSearch: "", /*地址栏参数*/
        showTap: false,//默认无阶段不显示按钮
        // activeTapKey: "com-block", /*选中状态tap的key*/
    };

    /**
     *  规划方案指标更新数据
     */
    planQuotaUpdateData = [];

    /**
     * 在组件接收到一个新的prop时被调用,这个方法在初始化render时不会被调用
     * param nextProps 下一阶段的props
     */
    componentWillReceiveProps(nextProps) {
        const {dataKey, mode} = this.state;
        const {location} = nextProps;
        if (dataKey != location.query.dataKey.trim()
            || mode != location.query.isProOrStage.trim()) {
            //设置新的dataKey和mode
            this.setState({
                    dataKey: location.query.dataKey.trim(),
                    mode: location.query.isProOrStage.trim(),
                }
            );
        }
    }

    componentDidMount() {
        this.loadStep();
    }

    /**
     * 加载步骤
     */
    loadStep = () => {
        const {dataKey, mode} = this.state;
        //临时存储当前的step
        let step = undefined;
        let versionId = undefined;
        this.setState({
            loading: true,
        });

        /**
         * 先获取阶段数据 => 然后根据阶段获取版本数据 => 最后获取 规划方案指标和面积数据
         */
        AreaService.getStep(dataKey, mode)
            .then(stepData => {
                step = stepData[0];
                this.setState({
                    stepData,
                    step: step,
                });

                if (step) {
                    return AreaService.getVersion(step, dataKey, mode);
                }
                return Promise.reject("未获取到阶段数据！");
            })
            .then(versionData => {
                versionId = this.getDefaultVersionId(versionData);
                this.setState({
                    versionData,
                    versionId,
                });
                this.loadData(true, step, mode, dataKey, versionId);
            })
            .catch(error => {
                console.log("发生错误", error);
            })
    };

    /**
     *  加载数据
     */
    loadData = (isInit, step, mode, dataKey, versionId) => {
        var versionId = versionId||this.props.location.query["dataKey"];
        var dataKey = versionId;
        this.setState({
            loading: true,
        });

        const allPromise = [];
        //获取规划方案指标数据
        const planQuotaPromise = AreaService.getAreaPlanQuota(step, versionId);
        //获取地块·面积数据
        const blockPromise = AreaService.getAreaList(step, mode, versionId);

        allPromise.push(planQuotaPromise);
        allPromise.push(blockPromise);


        if (isInit) {
            //获取生成业态数据的筛选条件
            const getCreateConditionPromise = AreaService.getCreateCondition(step, dataKey, mode);
            allPromise.push(getCreateConditionPromise);
        }

        Promise.all(allPromise)
            .then(([planData, blockData, conditionData]) => {
                this.setState({
                    loading: false,
                    areaData: {
                        planData,
                        blockData,
                    }
                });
                if (conditionData) {
                    this.setState({
                        conditionData
                    });
                }
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
                console.error("发生错误", error);
            });
    };

    /**
     * 处理版本切换
     */
    handleVersionChange = (versionId) => {
        var versionId = versionId||this.props.location.query["dataKey"]
        this.setState({
            loading: true,
            versionId,
        });
        const {step, mode} = this.state;

        const allPromise = [];
        //获取地块·面积数据
        const blockPromise = AreaService.getAreaList(step, mode, versionId);
        //获取规划方案指标数据
        const planQuotaPromise = AreaService.getAreaPlanQuota(step, versionId);
        allPromise.push(blockPromise);
        allPromise.push(planQuotaPromise);

        Promise.all(allPromise)
            .then(([blockData, planData]) => {
                this.setState({
                    loading: false,
                    areaData: {
                        planData,
                        blockData,
                    },
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
                console.error("发生错误", error);
            });
    };

    /**
     * 创建新版本
     */
    handleCreateVersion = () => {
        this.setState({
            loading: true,
        });
        const {step, mode, dataKey} = this.state;
        AreaService.createVersion(step, dataKey, mode)
            .then(result => {
                if (result === "success") {
                    console.log("版本创建成功");
                } else {
                    return Promise.reject("版本创建失败");
                }
            })
            .then(() => {
                return AreaService.getVersion(step, dataKey, mode);
            })
            .then(versionData => {
                this.setState({
                    loading: false,
                    versionData,
                    versionId: this.getDefaultVersionId(versionData)
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
                console.error("error", error);
            })
    };

    /**
     * 获取默认显示的版本Id
     * @param versionData
     * @returns {*}
     */
    getDefaultVersionId = (versionData) => {
        if (!versionData || !Array.isArray(versionData) || versionData.length === 0) {
            return "";
        }

        return versionData[0]["id"];
    };

    /**
     *  保存当前版本的规划方案指标数据
     */
    handleSaveVersionData = () => {
        //TODO 保存当前版本的规划方案指标数据，需要保存贞晓写的规划方案指标组件里的更新数据
        console.log("TODO 保存当前版本的规划方案指标数据，需要保存贞晓写的规划方案指标组件里的更新数据");
    };

    /**
     * 处理步骤切换
     * 根据阶段获取版本数据 => 再获取 规划方案指标和面积数据
     */
    handleStepClick = (newStep) => {
        return () => {
            console.log("当前选中", newStep.name);
            const {step, dataKey, mode} = this.state;
            if (newStep.code === step.code) return;

            let versionId = undefined;

            this.setState({
                loading: true,
                step: newStep,
            });

            AreaService.getVersion(newStep, dataKey, mode)
                .then(versionData => {
                    versionId = this.getDefaultVersionId(versionData);
                    this.setState({
                        versionData,
                        versionId
                    });

                    this.loadData(false, newStep, mode, dataKey, versionId);
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                    });
                    console.error("发生错误", error);
                })

        };
    };

    /**
     * 处理弹窗
     */
    handleModalClick = (modalKey) => {
        return (record) => {
            this.setState({
                modalKey,
                record
            });
        };
    };

    /**
     * 隐藏弹窗
     */
    handleHideModal = (param) => {
        const {step, mode, dataKey, versionId} = this.state;
        this.setState({
            modalKey: "",
        });
        if (param == "reload") {
            this.loadData(false, step, mode, dataKey, versionId);
        }
    };

    /**
     * 处理Tab切换
     */
    handleTabChange = (activeTapKey) => {
        this.setState({activeTapKey});
    };

    /**
     * 处理规划方案指标 数据改变事件
     */
    handlePlanQuotaDataChange = (postData) => {
        this.planQuotaUpdateData = postData || [];
    };

    handleComBlockSearch = (formatKey) => {
        //TODO 根据关键字 调用接口 筛选数据
        console.log("TODO 根据关键字 调用接口 筛选数据：", formatKey);
    };

    handleComBuildingSearch = (formatKey) => {
        //TODO 根据关键字 调用接口 筛选数据
        console.log("TODO 根据关键字 调用接口 筛选数据：", formatKey);
    };

    handleComFormatSearch = (formatKey, buildingKey) => {
        //TODO 根据关键字 调用接口 筛选数据
        console.log("TODO 根据关键字 调用接口 筛选数据：", formatKey, buildingKey);
    };

    /**
     * 渲染步骤UI
     */
    renderStepList = () => { //阶段
        let {step, stepData} = this.state;
        let len = stepData.length;
        return stepData.map((item, ind) => {
            return (
                <li key={item.guid} style={{zIndex: len - ind}} className={item.guid == step.guid ? "active" : ""}
                    onClick={this.handleStepClick(item)}><span className={item.className}></span>{item.name}</li>
            );
        });
    };

    /**
     * 渲染button
     */
    renderButtonList = () => {
        const {step} = this.state;
        if (step.guid < 3) {
            return (
                <div>
                    <div className="areaTopbtn jhBtn-wrap">
                        <button type="button" className="jh_btn jh_btn22 jh_btn_add" onClick={this.handleCreateVersion}>
                            生成新版本
                        </button>
                        <button type="button" className="jh_btn jh_btn22 jh_btn_save"
                                onClick={this.handleModalClick("block-format-edit")}>业态维护
                        </button>
                        <button type="button" className="jh_btn jh_btn22 jh_btn_apro">发起审批</button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className="areaTopbtn jhBtn-wrap">
                    <button type="button" className="jh_btn jh_btn22 jh_btn_add">生成新版本</button>
                    <button type="button" className="jh_btn jh_btn22 jh_btn_save"
                            onClick={this.handleModalClick("building-format-edit")}>业态/楼栋维护
                    </button>
                    <button type="button" className="jh_btn jh_btn22 jh_btn_apro">发起审批</button>
                </div>
            </div>
        );
    };

    /**
     * 渲染Tab
     */
    renderTabList = () => {
        const {step, areaData, searchKey} = this.state;
        const panelArray = [];
        const planData = areaData["planData"] || [];

        panelArray.push(
            <TabPane tab="规划方案指标" key="plan-quota">
                <PlanQuota planData={planData}
                           onPlanQuotaDataChange={this.handlePlanQuotaDataChange}/>
            </TabPane>);

        if (parseInt(step.guid) < 3) {
            const blockData = areaData["blockData"] || {};
            panelArray.push(
                <TabPane tab="产品构成--按地块" key="com-block">
                    <ComBlockFilter onSearch={this.handleComBlockSearch} key={new Date().getTime()}/>
                    <ComBlock dataSource={blockData["areadataInfo"]}
                              onBlockFormatClick={this.handleModalClick("block-format-adjust")}
                              headerData={blockData["titleInfo"]}/>
                </TabPane>);
        } else {
            panelArray.push(
                <TabPane tab="产品构成--按楼栋" key="com-building">
                    <ComBuildingFilter onSearch={this.handleComBuildingSearch} key={new Date().getTime()}/>
                    <ComBuilding/>
                </TabPane>);
            panelArray.push(
                <TabPane tab="产品构成--按业态" key="com-format">
                    <ComFormatFilter onSearch={this.handleComFormatSearch} key={new Date().getTime()}/>
                    <ComFormat/>
                </TabPane>);
        }
        return (
            <Tabs defaultActiveKey="plan-quota" animated={false} onChange={this.handleTabChange}>
                {panelArray}
            </Tabs>
        );
    };

    /**
     * 渲染步骤的颜色状态
     */
    renderStepLend = () => {
        return Legend.map((el, ind) => {
            return (
                <li key={ind} data-guid={el.guid} className={el.class}>{el.text}</li>
            );
        });
    };

    /**
     * 渲染维护或修改弹窗
     * @returns {*}
     */
    renderEditOrAdjust = () => {
        const {modalKey, record, conditionData, step, mode, versionId, dataKey} = this.state;
        switch (modalKey) {
            case "block-format-edit":
                return (
                    <BlockFormatEdit
                        onHideModal={this.handleHideModal}
                        conditionData={conditionData}
                        step={step}
                        mode={mode}
                        versionId={versionId}
                        dataKey={dataKey}
                        blockDataSource={conditionData.land}/>
                );
            case "block-format-adjust":
                return (
                    <BlockFormatAdjust
                        onHideModal={this.handleHideModal}
                        record={record}
                        step={step}
                        mode={mode}
                        versionId={versionId}
                    />
                );
            case "building-format-edit":
                return <BuildingFormatEdit/>;
            default:
                return null;
        }
    };

    /**
     *  渲染空页面
     */
    renderEmpty = () => {
        const {loading} = this.state;
        return (
            <div className="processBar">
                <Spin size="large" spinning={loading}>
                    暂无数据
                </Spin>
            </div>
        );
    };

    render() {
        const {loading, stepData, versionId, versionData} = this.state;
        if (stepData.length === 0) {
            return this.renderEmpty();
        }
        return (
            <div className="processBar">
                <Spin size="large" spinning={loading}>
                    <Row>
                        <Col span={12}>
                            <ul className="processBar-header">
                                {this.renderStepLend()}
                            </ul>
                        </Col>
                        <Col span={12}>
                            {this.renderButtonList()}
                        </Col>
                    </Row>
                    <Row gutter={0}>
                        <Col>
                            <ul className="processBar-List">
                                {this.renderStepList()}
                            </ul>
                        </Col>

                    </Row>
                    <Row gutter={0}>
                        <Col span={24}>
                            {this.renderTabList()}
                            <div>
                                <SaveVersion versionId={versionId} versionData={versionData}
                                             onSaveVersionData={this.handleSaveVersionData}
                                             onVersionChange={this.handleVersionChange}/>
                            </div>
                        </Col>
                    </Row>
                    {this.renderEditOrAdjust()}
                </Spin>
            </div>
        );
    }
}

export default Index;