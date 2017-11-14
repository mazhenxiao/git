import React, {Component} from 'react';
import {Button, Table} from 'antd';
import {shallowCompare} from '../utils/index';

/**
 * 列默认宽度
 * @type {number}
 */
const defaultWidth = 105;

// /**
//  * 默认筛选级别
//  * @type {string}
//  */
// const DEFAULT_FILTER_LEVEL = "DEFAULT_FILTER_LEVEL";

/**
 * 分组表格
 * @param headerData 表头数据
 * @param dataSource 数据源
 * @param rowKey 主键
 * @param defaultHeight 默认表格宽度
 * @returns {XML}
 */

export default class WrapperGroupTable extends Component {

    static propTypes = {
        headerData: React.PropTypes.array,//表头数据
        dataSource: React.PropTypes.array,//表格数据源
        rowKey: React.PropTypes.string,//主键
        defaultHeight: React.PropTypes.number,//表格自定义高度
        columnRender: React.PropTypes.object,//自定义render
    };

    static defaultProps = {
        headerData: [],
        dataSource: [],
        rowKey: "id",
        defaultHeight: 400,
        columnRender: null,
    };

    // state = {
    //     filterInfo: null,
    // };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    // handleFilterChange = (pagination, filters) => {
    //     this.setState({
    //         filterInfo: filters,
    //     });
    // };

    getColumns = (headerData) => {
        const {columnRender} = this.props;
        let columns = [];
        columns.scrollX = 0;

        headerData.forEach((item, index) => {
            let column = {
                title: item.name || "汇总名称",
                dataIndex: item.field,
                key: item.field,
            };

            //render
            if (columnRender && columnRender[item.field]) {
                column.render = columnRender[item.field];
            }

            //默认固定第一列
            if (index === 0) {
                column.fixed = "left";
            }
            if (item.children && Array.isArray(item.children) && item.children.length > 0) {
                this.getChildColumns(columns, column, item);
            }
            else {
                if (item.width && item.width > 0) {
                    column.width = item.width;
                } else {
                    column.width = defaultWidth;
                }
                columns.scrollX += column.width;

                //fixed
                if (item.fixed) {
                    column.fixed = item.fixed;
                }
            }
            columns.push(column);
        });
        return columns;
    };

    getChildColumns = (columns, column, item) => {

        column.children = [];
        item.children.forEach(childItem => {
            let childColumn = {
                title: childItem.name,
                dataIndex: childItem.field,
                key: childItem.field,
                width: defaultWidth,
            };

            if (childItem.width && childItem.width > 0) {
                childColumn.width = childItem.width;
            }
            columns.scrollX += childColumn.width;
            column.children.push(childColumn);
        });
    };

    render() {
        // let {filterInfo} = this.state;
        // filterInfo = filterInfo || {};

        const {headerData, dataSource, rowKey, defaultHeight} = this.props;
        const tableColumns = this.getColumns(headerData);

        // const filters = [
        //     {text: '1#', value: '1#'},
        //     {text: '2#', value: '2#'},
        // ];
        // //可筛选的列信息
        // const mainColumn = tableColumns[0];
        // if (mainColumn) {
        //     console.log("filterInfo.name", filterInfo.name);
        //     mainColumn.filters = filters;
        //     mainColumn.filteredValue = filterInfo.name || [DEFAULT_FILTER_LEVEL];
        //     mainColumn.onFilter = (value, record) => {
        //
        //         if (value === DEFAULT_FILTER_LEVEL) {
        //             return record.level === 1;
        //         }
        //         return record.level === 1 || record.path.includes(value)
        //     };
        // }

        return (
            <Table
                rowKey={rowKey}
                columns={tableColumns}
                dataSource={dataSource}
                bordered={true}
                size="middle"
                scroll={{x: tableColumns.scrollX, y: defaultHeight}}
                pagination={false}
            />
        );
    }
}