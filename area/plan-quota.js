/**
 *  规划方案指标 plan-quota （1~9）
 */

import React, {Component} from 'react';
import {Button,Select} from 'antd';
import {shallowCompare} from '../utils';
import iss from "../../Content/js/iss.js";//公共类
import { AreaConstants } from '../constants'; 
require("../../Content/css/antd.min.css");
require("../../Content/css/tools-dynamicTable.less");//专用css
import DynamicTable from "../../Content/components/tools-dynamicTable.js"
class PlanQuota extends Component {
    state={
        propsDATA:[],//动态数据
        pid:1//项目id或当前版本id
    }
    staticData={
        number:0
    }
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    componentWillReceiveProps(nextProps) {
        //if(this.staticData.number==0){ return}
        this.GET_AJAX();//拉去数据
    }
    componentWillMount() {
        
         
    }
    componentDidMount() {
        this.GET_AJAX();//拉去数据
    }
    GET_AJAX=arg=>{ //获取数据
        this.setState({
            propsDATA:this.props.planData
        })
      //  console.log("props",this.props.planData)
      /*   var th = this;
        let opt = {
            url:iss.url("/AreaInfo/IGetAreaPlanInfo"),
            type:"GET",
            data:{
                versionId:"1c52cb5b-674b-4a8c-8a49-bec93681e690", //版本id或项目id
                step:"Vote",//当前阶段guid
                DataType:"2",//显示面积2 价格3
                time:new Date().getTime()
            }
        }
      
      iss.fetch(opt).then(arg=>{
         console.log("arg",arg);
      }).catch(err=>{
          console.log("error",err);
      }) */
    }
    BIND_CALLBACK=arg=>{
        
    }
    render() {
        return (
            <article>
                 <DynamicTable pid={this.state.pid} DynamicData={this.state.propsDATA} CallBack={this.BIND_CALLBACK} />
            </article>
        );
    };
}

export default PlanQuota;
