/**
 *  楼栋面积调整 building-area-adjust
 */

import React, {Component} from 'react';
import {Tabs, Row, Col, Button} from 'antd';
import {shallowCompare} from '../utils';

class BuildingAreaAdjust extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <div>
                楼栋面积调整
            </div>
        );
    };
}

export default BuildingAreaAdjust;