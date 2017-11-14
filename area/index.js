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
require("../../Content/css/antd.min.css");
require("../../Content/css/tools-processBar.less");
require("../../Content/css/button.less");
require("../../Content/areaMa/areaCss/areaManage.less");
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
        step: {}, /*返回具有最新数据的step,由后台返回,现在初始设置为投决会*/
        dataKey: this.props.location.query.dataKey, /*项目id或分期版本id*/
        mode: this.props.location.query.isProOrStage,//显示模式，项目或者分期
        //方案指标数据，面积数据
        areaData: {},
        //面积数据里的查询
        searchKey: {},
        //版本数据
        versionData: [],

        modalKey: "",
        modalParam: null,

        toggleTab: 3, /* 默认打开的tap*/
        localSearch: "", /*地址栏参数*/
        showTap: false,//默认无阶段不显示按钮
        // activeTapKey: "com-block", /*选中状态tap的key*/
    };

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
        // const {step, mode, versionId} = this.state;
        // this.loadData(step, mode, versionId);
        this.loadStep();
    }

    /**
     * 加载步骤
     */
    loadStep = () => {
        const {dataKey, mode} = this.state;
        this.setState({
            loading: true,
        });
        AreaService.getStep(dataKey, mode)
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
                const step = stepData[0];
                this.setState({
                    stepData,
                    step,
                });

                if (step) {
                    this.loadData(step);
                }
            })
            .catch(err => {
                console.log("发生错误", err);
            })
    };

    loadData = (step, mode, versionId, dataKey) => {
        this.setState({
            loading: true,
        });
        step = step || this.state.step;
        mode = mode || this.state.mode;
        versionId = versionId || this.state.versionId;
        dataKey = dataKey || this.state.dataKey;

        const blockPromise = AreaService.getAreaList(step, mode, versionId).then(data => data.rows);
        const planQuotaPromise = AreaService.getAreaPlanQuota(step, versionId).then(data => data.rows);
        const versionPromise = AreaService.getVersion(step, dataKey, mode);
        Promise.all([blockPromise, planQuotaPromise, versionPromise])
            .then(([blockData, planData, versionData]) => {
                this.setState({
                    loading: false,
                    areaData: {
                        planData,
                        blockData,
                        versionData: versionData,
                    }
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                });
                console.log("发生错误", err);
            });
    };

    handleStepClick = (step) => {
        return () => {
            console.log("当前选中", step.name);
            this.setState({
                step: step,
            });
            this.loadData(step);
        };
    };

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

    handleModalClick = (modalKey, modalParam) => {
        return () => {
            this.setState({
                modalKey,
                modalParam
            });
        };
    };
    /*渲染button*/
    renderButtonList = () => {
        const {step} = this.state;
        if (step.guid < 3) {
            return (
                <div>
                    <div className="areaTopbtn jhBtn-wrap">
                        <button type="button" className="jh_btn jh_btn22 jh_btn_add">生成新版本</button>
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

    handleTabChange = (activeTapKey) => {
        this.setState({activeTapKey});
    };

    handleComBlockSearch = (formatKey) => {
        //TODO 根据关键字 调用接口 筛选数据
        console.log("根据关键词搜索：", formatKey);
    };

    handleComBuildingSearch = (formatKey) => {
        //TODO 根据关键字 调用接口 筛选数据
        console.log("根据关键词搜索：", formatKey);
    };

    handleComFormatSearch = (formatKey, buildingKey) => {
        //TODO 根据关键字 调用接口 筛选数据
        console.log("根据关键词搜索：", formatKey, buildingKey);
    };

    renderTabList = () => {
        const {step, areaData, searchKey} = this.state;
        const panelArray = [];
        const planData = areaData["planData"] || [];

        panelArray.push(<TabPane tab="规划方案指标" key="plan-quota"><PlanQuota planData={planData}/></TabPane>);

        if (parseInt(step.guid) < 3) {
            const blockData = areaData["blockData"] || {};
            panelArray.push(
                <TabPane tab="产品构成--按地块" key="com-block">
                    <ComBlockFilter onSearch={this.handleComBlockSearch} key={new Date().getTime()}/>
                    <ComBlock dataSource={blockData["areadataInfo"]} headerData={blockData["titleInfo"]}/>
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

    handleHideModal = () => {
        this.setState({
            modalKey: "",
        });
    };
    /*渲染步骤的颜色状态*/
    renderStepLend = () => {
        return Legend.map((el, ind) => {
            return (
                <li key={ind} data-guid={el.guid} className={el.class}>{el.text}</li>
            );
        });
    };
    renderEditOrAdjust = () => {
        const {modalKey, modalParam} = this.state;
        switch (modalKey) {
            case "block-format-edit":
                return <BlockFormatEdit onHideModal={this.handleHideModal}/>;
            case "building-format-edit":
                return <BuildingFormatEdit/>;
            default:
                return null;
        }
    };

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


    saveVersionCallback = arg => { //版本切换保存

    };

    /**
     *  返回空页面
     */
    renderEmpty = () => {
        const {loading} = this.state;
        console.log("返回空视图");
        return (
            <div className="processBar">
                <Spin size="large" spinning={loading}>
                    暂无数据
                </Spin>
            </div>
        );
    };

    render() {
        const {loading, stepData, versionData} = this.state;
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
                                <SaveVersion versionData={versionData} callback={this.saveVersionCallback}/>
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