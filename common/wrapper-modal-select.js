/**
 *
 */
import React, {Component} from 'react'
import {Input, Row, Col, Select, Modal, Button} from 'antd'
import {shallowCompare} from '../utils';
import WrapperSelect from './wrapper-select';
import {AreaConstants} from '../constants';

const {Option, OptGroup} = Select;

const rowStyle = {
    height: 28,
    lineHeight: "28px",
    marginBottom: "10px",
};

const labelStyle = {
    textAlign: "right",
    paddingRight: "5px",
};

class WrapperModalSelect extends Component {

    static propTypes = {
        labelSpan: React.PropTypes.number,
        inputSpan: React.PropTypes.number,
        labelText: React.PropTypes.string.isRequired,
        multiple: React.PropTypes.bool,
        promiseLoader: React.PropTypes.func,//支持promise
        dataSource: React.PropTypes.array,//同步情况下的数据源
        onSelectChange: React.PropTypes.func,//选择项发生改变时
        showRequired: React.PropTypes.bool,//显示必填 *
    };

    static defaultProps = {
        multiple: true,
        showDefault: true,
        labelSpan: 6,
        inputSpan: 18,
        defaultValue: "",
        showRequired: true,
        promiseLoader: () => {
            return Promise.resolve([]);
        },
        dataSource: [
            {id: "100", name: "独立商业", children: [{id: "101", name: "单层"}]},
            {id: "200", name: "底商商铺", children: [{id: "201", name: "双层"}]},
            {id: "300", name: "酒店", children: [{id: "301", name: "超高层"}]}
        ],
    };

    state = {
        selectedValue: [],//已经选择的值
        visible: false,//详细属性弹窗是否显示
        filterData: {},//存储选择的信息，key为主选择框选中的值，value为属性选中的值
        addingValue: "",//当前正在添加的值
        propertyData: {},
    };

    //处理属性选择框 change
    handlePropertyChange = (key) => {
        return (value) => {
            this.setState({
                propertyData: {
                    ...this.state.propertyData,
                    [key]: value
                },
            });
        };
    };

    /**
     * 检查属性值
     */
    checkPropertyValue = (key) => {
        const {propertyData} = this.state;
        return !propertyData[key];
    };

    handleChange = (value) => {
        const {selectedValue, filterData} = this.state;
        const selectingValue = [...value];
        // console.log(`handleChange > value`, value);

        if (selectingValue.length > selectedValue.length) {
            //当选中某一项时, 记录当前选择的项， 打开属性选择窗口 选择属性， 最后点击确认按钮， 这个才是选中某一项目的的整个操作
            const addingValue = selectingValue[selectingValue.length - 1];

            this.setState({
                visible: true,
                addingValue,
                propertyData: {},
            });
        }
        else {
            //当取消选择项时
            const newSelectedValue = selectingValue;
            const newFilterData = filterData;
            const validFilterData = this.getValidFilterData(newSelectedValue, newFilterData);
            //触发回调函数
            this.props.onSelectChange && this.props.onSelectChange(validFilterData);

            this.setState({
                selectedValue: newSelectedValue,
                propertyData: {},
            });
        }

    };

    renderGroupOption = () => {
        const {dataSource} = this.props;
        const optArray = [];
        dataSource.forEach(item => {
            optArray.push(
                <OptGroup key={item.id} label={item.name}>
                    {item.children.map(child => {
                        return (
                            <Option key={child.id} value={child.id}>{child.name}</Option>
                        );
                    })}
                </OptGroup>
            );
        });

        return optArray;
    };

    handleOk = () => {

        if (this.checkPropertyValue("rights")
            || this.checkPropertyValue("hardcover")
            || this.checkPropertyValue("layer")) {
            return;
        }

        const {selectedValue, filterData, addingValue, propertyData} = this.state;
        const newSelectedValue = [...selectedValue, addingValue];
        const newFilterData = {
            ...filterData,
            [addingValue]: propertyData,
        };
        const validFilterData = this.getValidFilterData(newSelectedValue, newFilterData);
        //触发回调函数
        this.props.onSelectChange && this.props.onSelectChange(validFilterData);

        this.setState({
            selectedValue: newSelectedValue,
            filterData: newFilterData,
            visible: false,
        })
        ;
    };

    handleCancel = () => {
        this.setState({visible: false, addingValue: ""});
    };

    /**
     * 获取有效的筛选条件
     * @returns {{}}
     */
    getValidFilterData = (newSelectedValue, newFilterData) => {
        const validFilterData = {};
        const keys = Object.keys(newFilterData);
        keys.forEach(key => {
            if (newSelectedValue.includes(key)) {
                validFilterData[key] = newFilterData[key];
            }
        });
        return validFilterData;
    };

    renderPropertyModal = () => {
        const {visible} = this.state;
        if (!visible) {
            return null;
        }

        return (
            <Modal
                title="属性选择"
                visible={true}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                maskClosable={false}
                width="300px"
            >
                <Row>
                    <WrapperSelect labelText="产权属性：" dataSource={AreaConstants.RightsProperty}
                                   showRequired={this.checkPropertyValue("rights")}
                                   onChange={this.handlePropertyChange("rights")}/>
                </Row>
                <Row>
                    <WrapperSelect labelText="精装属性：" dataSource={AreaConstants.HardcoverProperty}
                                   showRequired={this.checkPropertyValue("hardcover")}
                                   onChange={this.handlePropertyChange("hardcover")}/>
                </Row>
                <Row>
                    <WrapperSelect labelText="层高属性：" dataSource={AreaConstants.LayerProperty}
                                   showRequired={this.checkPropertyValue("layer")}
                                   onChange={this.handlePropertyChange("layer")}/>
                </Row>
            </Modal>
        );
    };

    render() {

        const {
            labelText, labelSpan, InputSpan, dataSource, showDefault,
            multiple
        } = this.props;

        let options = [];
        let defaultOption = <Option key="1" value="">请选择</Option>;
        if (showDefault) options.push(defaultOption);

        if (Array.isArray(dataSource) && dataSource.length > 0) {
            dataSource.forEach((item, index) => {
                options.push(<Option key={item.id} value={item.id}>{item.name}</Option>);
            });
        }

        const {selectedValue} = this.state;

        return (
            <div>
                <Row style={rowStyle}>
                    <Col span={labelSpan} style={labelStyle}>{labelText}</Col>
                    <Col span={InputSpan}>
                        <Select
                            mode={!!multiple ? "multiple" : "-"}
                            value={selectedValue}
                            style={{width: "200px"}}
                            onChange={this.handleChange}
                            placeholder="请选择"
                        >
                            {this.renderGroupOption()}
                        </Select>
                    </Col>
                </Row>
                {this.renderPropertyModal()}
            </div>
        );
    };
}

export default WrapperModalSelect;