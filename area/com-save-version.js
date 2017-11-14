import React, {Component} from 'react';
import {Spin, Tabs, Row, Col, Button, Select} from 'antd';
import iss from "../../Content/js/iss";//公共类
import {AreaConstants} from '../../Content/constants';
import {WrapperSelect} from '../../Content/common';
import "babel-polyfill";  //兼容ie
require("./areaCss/com-SaveVersion.less");
const {AreaManageStep, Legend, SelectVertionData} = AreaConstants;
const {Option} = Select;

class SaveVersion extends Component {

    static propTypes = {
        versionData: React.PropTypes.array,
        currentVersion: React.PropTypes.object,//所属地块数据源
        onVersionChange: React.PropTypes.func,
    };

    static defaultProps = {
        versionData: [],
        currentVersion: {},
        onVersionChange: () => {
        },
    };

    handleChange = (value) => {
        this.props.onVersionChange && this.props.onVersionChange(value);
    };

    render() {
        const {versionData, currentVersion} = this.props;
        return <div className="PosRight">
            <button type="button" className="jh_btn jh_btn33 jh_btn_save Left">保存</button>
            <div className="areaVeSel">
                <WrapperSelect dataSource={versionData} labelText="当前版本" showDefault={false}
                               style={{width: "100px"}}
                               onChange={this.handleChange}/>
            </div>
            <span className="areaStatus">状态:{currentVersion["statusname"]}</span>
        </div>

    }

}

export default SaveVersion;