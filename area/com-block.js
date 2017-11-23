/**
 *  产品构成--按地块 com-block（1~2）
 */

import React, {Component} from 'react';
import {shallowCompare} from '../utils/index';
import {WrapperGroupTable} from '../common';
import ComBlockFilter from './com-block-filter';


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

    // shouldComponentUpdate(nextProps, nextState) {
    //     return shallowCompare(this, nextProps, nextState);
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({
            formatKey: ""
        });
    }

    handleClick = (text, record) => {
        return () => {
            this.props.onBlockFormatClick && this.props.onBlockFormatClick(record);
        };
    };

    columnRender = {
        PRODUCTNAME: (text, record) => {
            if (record["LevelId"] === 1)
                return text;
            return <a onClick={this.handleClick(text, record)}>{text}</a>;
        }
    };

    /**
     * 处理本地搜索
     */
    handleLocalSearch = (formatKey) => {
        this.setState({
            formatKey
        });
    };

    render() {

        const {headerData, dataSource} = this.props;
        const {formatKey} = this.state;

        let filterDataSource = [...dataSource];
        if (formatKey) {
            filterDataSource = dataSource.filter(item => {
                return item["PRODUCTNAME"].indexOf(formatKey) > -1;
            });
        }

        return (
            <div>
                <ComBlockFilter onSearch={this.handleLocalSearch}/>
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