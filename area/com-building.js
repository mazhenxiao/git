/**
 *  产品构成--按楼栋 com-building（3~9）
 */

import React, {Component} from 'react';
import {Button, Table, Row} from 'antd';
import {shallowCompare} from '../utils/index';
import {WrapperGroupTable} from '../common';

class ComBuilding extends Component {

    static propTypes = {
        headerData: React.PropTypes.array,
        dataSource: React.PropTypes.array,
    };

    static defaultProps = {
        headerData: [],
        dataSource: []
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    handleBuildingClick = (text, record) => {
        return () => {
            console.log("parent record", record);
        };
    };
    handleFormatClick = (text, record) => {
        return () => {
            console.log("child record", record);
        };
    };

    columnRender = {
        name: (text, record) => {
            if (record["level"] === 1)
                return <a onClick={this.handleBuildingClick(text, record)}>{text}</a>;
            return <a onClick={this.handleFormatClick(text, record)}>{text}</a>;
        }
    };

    render() {
        const {headerData, dataSource} = this.props;
        return (
            <div>
                <WrapperGroupTable
                    headerData={headerData}
                    dataSource={dataSource}
                    rowKey="key"
                    columnRender={this.columnRender}
                />
            </div>
        );
    };
}

export default ComBuilding;