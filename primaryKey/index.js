import "babel-polyfill";  //兼容ie
import iss from "../js/iss.js";
import React, { Component } from 'react';
import { Spin, Tabs, Row, Col, Button, Select,Input, Popconfirm  } from 'antd';
import { AreaService } from '../services';
import {WrapperSelect} from '../../Content/common';
import TableBlock from './table-block';

require("../css/antd.min.css");

require("../../Content/css/antd.min.css");
require("../../Content/css/tools-processBar.less");
require("../../Content/css/button.less");
require("../../Content/area/areaCss/areaManage.less");
class Index extends Component {
    state = {
        loading: false,
        editstatus:false,
    };//绑定数据
    componentWillReceiveProps(){

    };
    componentDidMount(){

    };
    //点击编辑
    handleBindEdit = () =>{
        this.setState({
            editstatus:true,
        });
    };

    //点击取消
    handleBindCancel = () =>{
        this.setState({
            editstatus:false,
        });
    }

    //点击保存
    handleBindSave = () =>{
        this.setState({
            editstatus:false,
        });
    }

    /*渲染button*/
    renderButtonList = () => {
        const editstatus = this.state.editstatus;
        //判断是否是编辑状态  编辑状态
        if(!editstatus){
            return (
                <div>
                <div className="boxGroupTit">
                        <p><span>关键指标</span></p>
                        <div>
                            <div className="areaTopbtn jhBtn-wrap">
                                <div className="areaVeSel">
                                    <WrapperSelect labelText="年"
                                        style={{width: "100px"}}
                                     />
                                </div>
                                <div className="areaVeSel">
                                    <WrapperSelect labelText="季度"
                                        style={{width: "100px"}}
                                     />
                                </div>
                                <button type="button" style={{marginLeft:"30px"}} onClick={this.handleBindEdit} className="jh_btn jh_btn22 jh_btn_add">编辑</button>
                                <button type="button" className="jh_btn jh_btn22 jh_btn_apro">发起审批</button>
                            </div>
                        </div>
                </div>
            </div> 
                
            );
        }else{
            return (
                <div>
                <div className="boxGroupTit">
                        <p><span>关键指标</span></p>
                        <div>
                            <div className="areaTopbtn jhBtn-wrap">
                                <div className="areaVeSel">
                                    <WrapperSelect labelText="年"
                                        style={{width: "100px"}}
                                     />
                                </div>
                                <div className="areaVeSel">
                                    <WrapperSelect labelText="季度"
                                        style={{width: "100px"}}
                                     />
                                </div>
                                <button type="button" style={{marginLeft:"30px"}} onClick={this.handleBindSave} className="jh_btn jh_btn22 jh_btn_add">保存</button>
                                <button type="button" onClick={this.handleBindCancel} className="jh_btn jh_btn22 jh_btn_add">取消</button>
                                <button type="button" className="jh_btn jh_btn22 jh_btn_apro">发起审批</button>
                            </div>
                        </div>
                </div>
            </div> 
                
            );
        }

        
        
    };

    render() {
        return (
            <div className="processBar">
                    <Row>
                        <Col span={24}>
                            <article> 
                                {this.renderButtonList()}
                            </article>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <article>
                                <TableBlock editstatus={this.state.editstatus} />
                            </article>
                        </Col>
                    </Row>
            </div>
        );
    }
}
export default Index;