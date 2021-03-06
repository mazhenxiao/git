/**
 *  产品构成--按地块 com-block（1~2）
 */

import React, {Component} from 'react';
import {shallowCompare} from '../utils/index';
import {Button, Row, Col} from 'antd';
import {WrapperGroupTable, WrapperInput} from '../common';


class ComBlock extends Component {

    static propTypes = {
        headerData: React.PropTypes.array,
        dataSource: React.PropTypes.array,
        onBlockFormatClick: React.PropTypes.func,
    };

    static defaultProps = {
        headerData: [],
        dataSource: [],
        onBlockFormatClick: () => {
        },
    };

    state = {
        formatKey: "",
    };

    filterFormatKey = "";

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.step.code !== nextProps.step.code
            || this.props.dataKey !== nextProps.dataKey
            || this.props.versionId !== nextProps.versionId) {
            this.filterFormatKey = "";
            this.setState({
                formatKey: "",
            });
        }
    }

    /**
     *  处理文本框change事件
     */
    handleInputChange = (key) => (e) => {
        this.setState({
            [key]: e.target.value,
        });
    };

    handleClick = (text, record) => {
        return () => {
            this.props.onBlockFormatClick && this.props.onBlockFormatClick(record);
        };
    };

    columnRender = {
        PRODUCTNAME: (text, record) => {
            if (record["LevelId"] === 1)
                return <span className="format-tree-parent">{text}</span>;
            return <a className="format-tree-child" onClick={this.handleClick(text, record)}>{text}</a>;
        }
    };

    /**
     * 处理本地搜索
     */
    handleLocalSearch = () => {
        const {formatKey} = this.state;
        this.filterFormatKey = formatKey;
        this.forceUpdate();
    };
    /**
     * 获取帅选后的数据
     * 一级楼栋，二级业态
     */
    getFilterDataSource = () => {
        const {dataSource} = this.props;
        const {formatKey} = this.state;
        if (this.filterFormatKey == "") {
            return dataSource;
        }
        //匹配的二级业态
        const matchFormatData = dataSource.filter(item => {
            if (item["LevelId"] != 2) {
                return false;
            }
            if (this.filterFormatKey == "") {
                return true;
            }
            if (item["PRODUCTNAME"].indexOf(this.filterFormatKey) > -1) {
                return true;
            }
            return false;
        });

        //匹配的二级业态进行筛选
        let filterDataSource = dataSource.filter(item => {
            return matchFormatData.some(filterItem => {
                if (item["LevelId"] == 1) {
                    return item.KEY === filterItem.PARENTID;
                } else {
                    return item.KEY === filterItem.KEY;
                }
            });
        });

        return filterDataSource;

    };

    render() {

        const {headerData} = this.props;
        const {formatKey} = this.state;

        let filterDataSource = this.getFilterDataSource();

        return (
            <div>
                <Row>
                    <Col span={5}>
                        <WrapperInput labelText="按业态：" labelSpan={8} inputSpan={16} value={formatKey}
                                      onChange={this.handleInputChange("formatKey")}/>
                    </Col>
                    <Col span={5} style={{textAlign: "left", paddingLeft: "10px"}}>
                        <Button onClick={this.handleLocalSearch}>查询</Button>
                    </Col>
                </Row>
                <WrapperGroupTable
                    key="com-block-group-table"
                    headerData={headerData}
                    dataSource={filterDataSource}
                    rowKey="KEY"
                    columnRender={this.columnRender}
                    fixedAble={true}
                />
            </div>
        );
    };
}

export default ComBlock;