/**
 *  楼栋面积调整 com-building-adjust
 */

import React, {Component} from 'react';
import {Modal, Spin, Row, Col, Button, Checkbox, Input} from 'antd';
import {shallowCompare} from '../utils';
import {AreaService} from '../services';
import {WrapperInput, WrapperGroupTable} from '../common';
import iss from '../js/iss';

const CheckboxGroup = Checkbox.Group;

class ComBuildingAdjust extends Component {

    static propTypes = {
        record: React.PropTypes.object,//点击的面积数据
        onHideModal: React.PropTypes.func,//对外接口 操作完成时 关闭模态窗口
    };

    static defaultProps = {
        record: {},
        onHideModal: () => {
        },
    };

    /**
     * 是否通过点击楼栋跳转过来的
     * @type {boolean}
     */
    isFromBuilding = this.props.record["LevelId"] == "1";

    state = {
        enableBuildingData: [],//可选择的楼栋数据
        disableBuildingData: [],//不可选择的楼栋数据
        buildingHeaderData: [],//楼栋面积表头
        buildingDataSource: [],//楼栋面积数据
        formatHeaderData: [],//业态面积表头
        formatDataSource: [],//业态面积数据
        singleFormatData: {},//单业态指标
        loading: false,
        showSelect: false,//是否显示楼栋选择
        selectBuilding: [],
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return shallowCompare(this, nextProps, nextState);
    // }

    componentDidMount() {
        this.loadData();
    };

    /**
     * 改变的数据
     */
    buildingChangeDataArray = [];

    /**
     * 改变的数据
     */
    formatChangeDataArray = [];

    /**
     * 加载数据
     */
    loadData = () => {
        this.setState({
            loading: true,
        });
        const {record, step, mode, versionId} = this.props;

        const allPromise = [];
        const buildingDataPromise = AreaService.getBuildingData(versionId, record);
        allPromise.push(buildingDataPromise);

        if (this.isFromBuilding) {
            const buildingAreaDataPromise = AreaService.getBuildingAreaData(versionId, record);
            allPromise.push(buildingAreaDataPromise);
        } else {
            allPromise.push(Promise.resolve({titleInfo: [], areadataInfo: []}));
        }

        const formatAreaDataPromise = AreaService.getFormatAreaData(versionId, record);
        allPromise.push(formatAreaDataPromise);

        if (this.isFromBuilding) {
            allPromise.push(Promise.resolve({}));
        } else {
            const singleFormatDataPromise = AreaService.getSingleFormatData(versionId, record);
            allPromise.push(singleFormatDataPromise);
        }

        Promise.all(allPromise)
            .then(([buildingData, buildingAreaData, formatAreaData, singleFormatData]) => {
                this.setState({
                    loading: false,
                    enableBuildingData: buildingData.enableList,
                    disableBuildingData: buildingData.disableList,
                    buildingHeaderData: buildingAreaData.titleInfo,
                    buildingDataSource: buildingAreaData.areadataInfo,
                    formatHeaderData: formatAreaData.titleInfo,
                    formatDataSource: formatAreaData.areadataInfo,
                    singleFormatData: singleFormatData
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
                console.error("发生错误", error);
                iss.error(error);
            });
    };

    handleSave = () => {
        const {record} = this.props;
        const {selectBuilding, enableBuildingData, singleFormatData} = this.state;
        this.setState({
            loading: true,
        });
        const currentBuild = enableBuildingData.filter(item => !!item["isCurrentBuild"])[0];
        const buildIds = [...selectBuilding];
        if (currentBuild) {
            buildIds.push(currentBuild.value);
        }
        AreaService.adjustBuildingAreaData(record, buildIds, this.buildingChangeDataArray, this.formatChangeDataArray, singleFormatData)
            .then(result => {
                if (result === "success") {
                    console.log("保存成功");
                    iss.info("保存成功");
                    this.props.onHideModal && this.props.onHideModal("reload");
                } else {
                    return Promise.reject("保存失败");
                }
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
                console.error("发生错误", error);
                iss.error(error);
            });
    };

    handleCancel = () => {
        this.props.onHideModal && this.props.onHideModal();
    };

    handleSelectSave = () => {
        this.setState({
            showSelect: false,
        });
    };

    handleSelectCancel = () => {
        this.setState({
            showSelect: false,
        });
    };

    /**
     * 处理数据修改
     */
    handleBuildingDataChange = (id, key, value) => {
        const changeData = this.buildingChangeDataArray.filter(item => item.id === id && item.quotaId === key)[0];
        if (changeData) {
            changeData.quotaValue = value;
        }
        else {
            this.buildingChangeDataArray.push({
                id,
                versionId: this.props.versionId,
                quotaId: key,
                quotaValue: value,
            });
        }
    };

    handleFormatDataChange = (id, key, value) => {
        const changeData = this.formatChangeDataArray.filter(item => item.id === id && item.quotaId === key)[0];
        if (changeData) {
            changeData.quotaValue = value;
        }
        else {
            this.formatChangeDataArray.push({
                id,
                versionId: this.props.versionId,
                quotaId: key,
                quotaValue: value,
            });
        }
    };

    handleSelectClick = () => {
        this.setState({
            showSelect: true
        });
    };

    handleSelectChange = (selectBuilding) => {
        this.setState({
            selectBuilding
        });
    };

    handleAllSelectChange = (e) => {
        const {enableBuildingData} = this.state;
        if (e.target.checked) {
            this.setState({
                selectBuilding: enableBuildingData.filter(opt => !opt.disabled).map(opt => opt.value),
            });
        } else {
            this.setState({
                selectBuilding: [],
            });
        }
    };

    handleInputChange = (e) => {
        this.setState({
            singleFormatData: {
                ...this.state.singleFormatData,
                singleProductTypeValue: e.target.value,
            }
        });
        console.log("e.target.value", e.target.value);
    };

    /**
     * 批量选择楼栋
     * @returns {*}
     */
    renderSelect = () => {
        const {showSelect, selectBuilding, enableBuildingData, disableBuildingData} = this.state;
        if (!showSelect) {
            return null;
        }

        let allChecked = false;
        if (enableBuildingData.length > 0 && enableBuildingData.filter(item => item.disabled).length === selectBuilding.length) {
            allChecked = true;
        }

        return (
            <Modal
                title={"批量选择楼栋"}
                visible={true}
                onCancel={this.handleSelectCancel}
                maskClosable={false}
                width="500px"
                footer={[
                    <Button key="save" type="primary" size="large" onClick={this.handleSelectSave}>
                        关闭
                    </Button>
                ]}>
                <div>
                    <Row gutter={16}>
                        <Col span={4}>
                            楼栋列表
                        </Col>
                        <Col span={6}>
                            <Checkbox onChange={this.handleAllSelectChange} checked={allChecked}>全部选择</Checkbox>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <CheckboxGroup options={enableBuildingData} value={selectBuilding}
                                       onChange={this.handleSelectChange}/>
                    </Row>
                    <Row gutter={16}>
                        <CheckboxGroup options={disableBuildingData} disabled={true}/>
                    </Row>
                </div>
            </Modal>
        );
    };

    /**
     * 显示楼栋或者单业态指标
     * @returns {XML}
     */
    renderBuildingOrFormat = () => {
        const {buildingHeaderData, buildingDataSource, singleFormatData} = this.state;
        const {record} = this.props;
        if (this.isFromBuilding) {
            return (
                <div>
                    <Row gutter={16}>
                        <Col span={6}>
                            单栋指标
                        </Col>
                    </Row>
                    <WrapperGroupTable
                        key="building-area-table"
                        headerData={buildingHeaderData}
                        dataSource={buildingDataSource}
                        rowKey="KEY"
                        editAble={true}
                        // fixedAble={true}
                        onDataChange={this.handleBuildingDataChange}
                    />
                </div>
            );
        }
        return (
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        单业态指标
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={4}>
                        业态名称
                    </Col>
                    <Col span={6}>
                        各产品形态用地面积
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={4}>
                        联排别墅
                    </Col>
                    <Col span={6}>
                        <Input onChange={this.handleInputChange} value={singleFormatData.singleProductTypeValue}/>
                    </Col>
                </Row>
            </div>
        );
    };

    columnRender = {
        producttypename: (text, record) => {
            if (record["LevelId"] === 1)
                return <span className="format-tree-parent">{text}</span>;
            return <span className="format-tree-child">{text}</span>;
        }
    };

    /**
     * 显示内容
     * @returns {XML}
     */
    renderContent = () => {
        const {loading, buildingHeaderData, buildingDataSource, formatHeaderData, formatDataSource, enableBuildingData, selectBuilding} = this.state;
        const displayBuilding = enableBuildingData.filter(item => selectBuilding.some(selectValue => selectValue == item.value)).map(item => item.label).join();

        return (
            <Spin size="large" spinning={loading}>
                <div className="building-adjust">
                    <Row gutter={16}>
                        <Col span={6}>
                            基本信息
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <WrapperInput labelText="楼栋名称："
                                          disabled={true}
                                          labelSpan={9}
                                          inputSpan={15}
                                          value={displayBuilding}></WrapperInput>
                        </Col>
                        <Col>
                            <Button onClick={this.handleSelectClick}>批量选择楼栋</Button>
                        </Col>
                    </Row>
                    {this.renderBuildingOrFormat()}
                    <Row gutter={16}>
                        <Col span={6}>
                            单栋业态指标
                        </Col>
                    </Row>
                </div>
                <WrapperGroupTable
                    key="format-area-table"
                    headerData={formatHeaderData}
                    dataSource={formatDataSource}
                    rowKey="KEY"
                    editAble={true}
                    // fixedAble={true}
                    onDataChange={this.handleFormatDataChange}
                    columnRender={this.columnRender}
                />
            </Spin>
        );
    };

    render() {
        // return this.renderContent();
        return (
            <Modal
                title={"楼栋·业态面积调整"}
                visible={true}
                onCancel={this.handleCancel}
                maskClosable={false}
                width="90%"
                footer={[
                    <Button key="save" type="primary" size="large" onClick={this.handleSave}>
                        保存
                    </Button>,
                    <Button key="cancel" type="primary" size="large" onClick={this.handleCancel}>
                        取消
                    </Button>,
                ]}>
                <div>
                    {this.renderContent()}
                    {this.renderSelect()}
                </div>
            </Modal>
        );
    };
}

export default ComBuildingAdjust;