/**
 *  产品构成--按业态 com-format（3~9）
 */

import React, {Component} from 'react';
import {shallowCompare} from '../utils/index';
import {WrapperGroupTable} from '../common';
import ComFormatFilter from './com-format-filter';

class ComFormat extends Component {

    static propTypes = {
        headerData: React.PropTypes.array,
        dataSource: React.PropTypes.array,
        onFormatClick: React.PropTypes.func,
    };

    static defaultProps = {
        headerData: [],
        dataSource: [],
        onFormatClick: () => {
        },
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return shallowCompare(this, nextProps, nextState);
    // }

    handleClick = (text, record) => {
        return () => {
            this.props.onFormatClick && this.props.onFormatClick(record);
        };
    };

    render() {
        const {headerData, dataSource} = this.props;
        return (
            <div>
                <ComFormatFilter/>
                <WrapperGroupTable
                    headerData={headerData}
                    dataSource={dataSource}
                    rowKey="KEY"
                    fixedAble={true}
                />
            </div>
        );
    };
}

export default ComFormat;