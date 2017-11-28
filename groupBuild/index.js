import React,{Component} from 'react';
import "babel-polyfill";  //兼容ie
require("../css/groupBuild.css");
require("../css/button.less");
require("../area/areaCss/areaManage.less");
export default class Index extends Component{
    /*渲染button*/
    constructor(props){
        super(props);
        this.state={

        }
    }
    handChooseTo(da){
        let th=this;
        let peopleJson={};
    
        iss.chooseTo({
            url:"/Common/IGetOrganizationalUsers",
            title:"选择人员<i class='fontRed'>（双击选择人员）</i>",
            pepole:peopleJson,  //已选人员名单
            multiple:true,
            callback(da){
                console.log(da);
            }
        })
    }
    renderHeader = () => {
        return (
            <div>
                <h3 className="boxGroupTit">
                    <p> <span className='title'>项目团队维护</span>
                        <span className='notes'>（<i className='redFont'></i>为必填项）</span>
                    </p>
                    <div>
                        <div className="areaTopbtn jhBtn-wrap">
                            <button type="button" className="jh_btn jh_btn22 jh_btn_add">暂存</button>
                            <button type="button" className="jh_btn jh_btn22 jh_btn_add">发起审批</button>
                        </div>
                    </div>
                </h3>
            </div> 
        );  
    };
    render(){
        return <article>
            <div>
                {this.renderHeader()}
            </div>
            <form id="stageInforForm">
                <table className="table-header" width="100%">
                    <tbody>
                        <tr>
                            <th><label className="">所属区域</label></th>
                            <td>
                                <input readOnly="true" id="PROJECTNAME" value='' className="inputTextBox" type="text" />
                            </td>
                            <th><label className="">所属城市</label></th>
                            <td>
                                <input readOnly="true" id="PROJECTNAME" value='' className="inputTextBox" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th><label className="">项目名称</label></th>
                            <td>
                                <input readOnly="true" id="PROJECTNAME" value='' className="inputTextBox" type="text" />
                            </td>
                            <th><label className="">分期名称</label></th>
                            <td>
                                <input readOnly="true" id="PROJECTNAME" value='' className="inputTextBox" type="text" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="formTable" width="92%">
                    <tbody>
                        <tr>
                            <th>
                                <label className="redFont">项目负责人</label>
                            </th>
                            <td>
                                <input onClick={this.handChooseTo.bind(this)} value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="redFont">精装负责人</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="redFont">运营员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label className="">精装员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="redFont">报建负责人</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="redFont">工程负责人</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label className="">报建员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">工程师</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="redFont">客服负责人</label>
                            </th>
                            <td>
                                <input value=''  className="inputTextBox stage-validatebox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label className="">文员</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">客服员工</label>
                            </th>
                            <td>   
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>	
                            <th>
                                <label className="redFont">营销负责人</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td> 
                        </tr>	  
                        <tr>
                            <th>
                                <label className="redFont">成本负责人</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>	
                            <th>
                                <label className="">策划专业员工</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">成本员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label className=" redFont">综合事务专业员工</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="redFont">研发负责人</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">置业顾问</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label className="">结构员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="redFont">财务负责人</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">机电员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label className="">会计员工</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">建筑员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className=" redFont">按揭员工</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label className="redFont">景观负责人</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">收银员工</label>
                            </th>
                            <td>
                            <input value='' className="inputTextBox boxSizing stage-validatebox" type="text" maxLength="20" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                            <th>
                                <label className="">景观员工</label>
                            </th>
                            <td>
                                <input value='' className="inputTextBox" type="text" />
                                <img className="symbol headIcon" src="../img/head-icon.png" />
                            </td>
                        </tr>
                    </tbody>
                </table>   
            </form>
        </article>
    }
}
