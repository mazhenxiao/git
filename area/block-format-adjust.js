/**
 *  地块·业态面积调整 block-format-adjust
 */
import React, {Component} from 'react';
import {Tabs, Row, Col, Button} from 'antd';
import {shallowCompare} from '../utils';

class BlockFormatAdjust extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <div>
                地块·业态面积调整
            </div>
        );
    };
}

export default BlockFormatAdjust;