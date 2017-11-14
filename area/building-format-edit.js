/**
 *  楼栋·业态维护 building-format-edit (3~9)
 */

import React, {Component} from 'react';
import {Tabs, Row, Col, Button} from 'antd';
import {shallowCompare} from '../utils';

class BuildingFormatEdit extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <div>
                楼栋·业态维护
            </div>
        );
    };
}

export default BuildingFormatEdit;