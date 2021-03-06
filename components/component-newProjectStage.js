/* 分期审核=只读基本信息*/
import React from 'react';
import "../js/iss.js";
import "babel-polyfill";  //兼容ie
import StageInforView from "./component-stageInfor-view.js";  /*分期信息*/
import StageMasView from "./component-stageMas-view.js";  /*分期规划条件指标和分期占用土地*/
import ProcessApprovalTab from "./component-ProcessApproval-Tab.js"; //导航信息


class StageControl extends React.Component {
    constructor(arg) {
        super(arg);
        this.state={
            allSearchArg:this.props.location.query,/*地址栏所有参数*/
            versionId:this.props.location.query["dataKey"],/*版本id*/
            projectid:"",/*项目id*/
            status:"edit",/*请求类型*/
            equityTxt:"",/*权益比例*/
            landList:[],/*地块信息*/
        }
    }
    getLandlist(da){
    	var th=this;
        var equityTxt="";
        var landFirstCode="";
        var landArrLen=da.length-1;
        da.forEach((obj,index)=>{
            if(landArrLen==index){
                equityTxt=equityTxt+obj.Name+"-"+(obj.EQUITYRATIO||0)+"%";
            }else{
                equityTxt=equityTxt+obj.Name+"-"+(obj.EQUITYRATIO||0)+"%,";
            }
        });
        th.setState({
            equityTxt:equityTxt
        });
    }
    /*获取基本信息*/
    getBasicInfor(basicInfor){
    	let th=this;
    	var projectId=basicInfor.PROJECTID;   	
    	th.setState({
        	projectId:projectId
        });
        $(document).triggerHandler("landFirstLoad",[projectId]);
    }
    render() {
        let th=this;
        let stateData=th.state;
        return (<div>
            <ProcessApprovalTab current="newProjectStage" allSearchArg={stateData.allSearchArg} />
            <StageInforView versionId={stateData.versionId} status={stateData.status} equityTxt={stateData.equityTxt} basicCallBack={th.getBasicInfor.bind(th)}/>
            <StageMasView versionId={stateData.versionId} callback={th.getLandlist.bind(th)}/>
        </div>);
    }
}

export default StageControl;