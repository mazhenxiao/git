/**
 *  产品构成--按楼栋 com-building（3~9）
 */

import React, {Component} from 'react';
import {shallowCompare} from '../utils/index';
import {WrapperGroupTable} from '../common';
import ComBuildingFilter from './com-building-filter';

class ComBuilding extends Component {

    static propTypes = {
        headerData: React.PropTypes.array,
        dataSource: React.PropTypes.array,
        onBuildingClick: React.PropTypes.func,
    };

    static defaultProps = {
        headerData: [],
        dataSource: [],
        onBuildingClick: () => {
        },
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return shallowCompare(this, nextProps, nextState);
    // }

    handleClick = (text, record) => {
        return () => {
            //楼栋 Building
            //业态 ProductType
            record.descType = "Building";//ProductType
            this.props.onBuildingClick && this.props.onBuildingClick(record);
        };
    };

    columnRender = {
        PRODUCTNAME: (text, record) => {
            return <a onClick={this.handleClick(text, record)}>{text}</a>;
        }
    };

    render() {
        const {headerData, dataSource} = this.props;
        return (
            <div>
                <ComBuildingFilter/>
                <WrapperGroupTable
                    headerData={headerData}
                    dataSource={dataSource}
                    rowKey="KEY"
                    columnRender={this.columnRender}
                    fixedAble={true}
                />
            </div>
        );
    };
}

export default ComBuilding;