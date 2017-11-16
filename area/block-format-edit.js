/**
 *  地块·业态维护 block-format-edit (1~2)
 */

import React, {Component} from 'react';
import {Modal, Spin, Table, Row, Col, Button, Select} from 'antd';
import {shallowCompare} from '../utils';
import {WrapperSelect, WrapperInput, WrapperModalSelect} from '../common';
import {AreaConstants} from '../constants';
import {AreaService} from '../services';

const {Option, OptGroup} = Select;

class BlockFormatEdit extends Component {

    static propTypes = {
        onHideModal: React.PropTypes.func,//对外接口 操作完成时 关闭模态窗口
        conditionData: React.PropTypes.object,
    };

    static defaultProps = {
        onHideModal: () => {
        },
        conditionData: {},
    };

    state = {
        dataSource: [],
        loading: false,
        land: "",//地块
        residence: [],//住宅
        commercial: [],//商办
        business: [],//商业
        parkAndSupport: [],//车位以及配套
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    componentDidMount() {
        this.loadData();
    };

    /**
     * 加载数据
     */
    loadData = () => {
        this.setState({
            loading: true,
        });
        const {step, mode, versionId} = this.props;
        //TODO 使用参数 versionId
        AreaService.getSearchData(step, mode)
            .then(rows => {
                this.setState({
                        dataSource: [...rows],
                        loading: false,
                    }
                );
            })
            .catch(error => {
                this.setState({
                    loading: false,
                });
                console.error("发生错误", error);
            })
    };

    columns = [
        {
            title: '业态',
            dataIndex: 'producttypename',
            key: 'producttypename',
            width: 200,
        },
        {
            title: '所属地块',
            dataIndex: 'landid',
            key: 'landid',
            width: 200,
            render: (text, record) => {
                return <WrapperSelect dataSource={this.props.conditionData.land} value={text} showDefault={false}
                                      onChange={this.handleChangeProperty(record, "land")}/>
            },
        },
        {
            title: '产权属性',
            dataIndex: 'ishaveproperty',
            key: 'ishaveproperty',
            width: 200,
            render: (text, record) => {
                const matchProperty = AreaConstants.RightsProperty.filter(item => item.id === text)[0];
                if (matchProperty) {
                    return matchProperty.name;
                }
                return "";
            },
        },
        {
            title: '精装属性',
            dataIndex: 'isdecoration',
            key: 'isdecoration',
            width: 200,
            render: (text, record) => {
                const matchProperty = AreaConstants.HardcoverProperty.filter(item => item.id === text)[0];
                if (matchProperty) {
                    return matchProperty.name;
                }
                return "";
            },
        },
        {
            title: '层高属性',
            dataIndex: 'storeyheight',
            key: 'storeyheight',
            width: 200,
            render: (text, record) => {
                const matchProperty = AreaConstants.LayerProperty.filter(item => item.id === text)[0];
                if (matchProperty) {
                    return matchProperty.name;
                }
                return "";
            },
        }
    ];

    handleChangeProperty = (record, key) => {
        return (value) => {
            record[key] = value;
            this.forceUpdate();
        };
    };

    handleSave = () => {
        const {dataSource} = this.state;
        this.setState({
            loading: true,
        });
        const paramsValue = dataSource.map(item => {
            return {
                id: item.id,
                landid: item.landid,
                producttypeid: item.producttypeid,
                ishaveproperty: item.ishaveproperty,
                isdecoration: item.isdecoration,
                storeyheight: item.storeyheight,
            };
        });
        AreaService.saveFormatData(paramsValue)
            .then(result => {
                if (result === "sucess") {
                    console.log("保存成功");
                    //TODO message.info("保存成功");
                    this.props.onHideModal && this.props.onHideModal();
                }
                else {

                }
            })
            .catch(error => {
                console.error("发生错误", error)
            })
    };
    handleCancel = () => {
        this.props.onHideModal && this.props.onHideModal();
    };

    /**
     *  处理下拉框change事件
     */
    handleSelectChange = (key) => (value) => {
        this.setState(
            {
                [key]: value
            }
        );
    };

    handleModalSelectChange = (key) => {
        return (value) => {
            console.log("接收到的数据", key, value);
            this.setState({
                [key]: value,
            });
        };
    };

    /**
     * 生成业态
     */
    handleCreateFormat = () => {
        const {land, residence, commercial, business, parkAndSupport, dataSource} = this.state;
        //TODO 校验
        if (!land) {
            console.error("所属地块必填！");
            return;
        }

        if (residence.length == 0
            && commercial.length == 0
            && business.length == 0
            && parkAndSupport.length == 0) {
            console.error("生成属性至少选择一个！");
            return;
        }

        this.setState({
            loading: true,
        });

        const paramsValue = {
            landId: land,
            conditionData: [
                ...residence,
                ...commercial,
                ...business,
                ...parkAndSupport,
            ],
            productTypeList: dataSource.map(item => {
                return {
                    id: item.id,
                    landid: item.landid,
                    producttypeid: item.producttypeid,
                    ishaveproperty: item.ishaveproperty,
                    isdecoration: item.isdecoration,
                    storeyheight: item.storeyheight,
                };
            }),
        };

        AreaService.createFormatData(paramsValue)
            .then(dataSource => {
                this.setState({
                    dataSource: [...dataSource],
                    loading: false,
                })
            })
            .catch(err => {
                console.error("发生错误", err);
            })

    };

    render() {
        const {loading, land, dataSource} = this.state;
        const {conditionData} = this.props;

        return (
            <Modal
                title={"地块·业态维护"}
                visible={true}
                onCancel={this.handleCancel}
                maskClosable={false}
                width="90%"
                footer={[
                    <Button key="save" type="primary" size="large" onClick={this.handleSave}>
                        确认
                    </Button>,
                    <Button key="cancel" type="primary" size="large" onClick={this.handleCancel}>
                        取消
                    </Button>,
                ]}>
                <Spin size="large" spinning={loading}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <WrapperSelect labelText="所属地块：" dataSource={conditionData.land}
                                           showRequired={!land}
                                           onChange={this.handleSelectChange("land")}/>
                        </Col>
                        <Col span={18} style={{textAlign: "right"}}>
                            <Button type="primary" onClick={this.handleCreateFormat}>生成业态</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <WrapperModalSelect labelText="住宅：" multiple={false} dataSource={conditionData.residence}
                                                onSelectChange={this.handleModalSelectChange("residence")}/>
                        </Col>
                        <Col span={6}>
                            <WrapperModalSelect labelText="商办：" multiple={false} dataSource={conditionData.commercial}
                                                onSelectChange={this.handleModalSelectChange("commercial")}/>
                        </Col>
                        <Col span={6}>
                            <WrapperModalSelect labelText="商业：" dataSource={conditionData.business}
                                                onSelectChange={this.handleModalSelectChange("business")}/>
                        </Col>
                        <Col span={6}>
                            <WrapperModalSelect labelText="车位及配套：" dataSource={conditionData.parkAndSupport}
                                                onSelectChange={this.handleModalSelectChange("parkAndSupport")}/>
                        </Col>
                    </Row>
                    <Table dataSource={dataSource} rowKey="id" size={"middle"} pagination={false} bordered={true}
                           columns={this.columns}/>
                </Spin>
            </Modal>
        );
    };
}

export default BlockFormatEdit;