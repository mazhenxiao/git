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
        pid:1,//项目id或当前版本id
        DynamicData:[]//获取
    }
    staticData={
        number:0
    }
    /**
     * 发送数据给
     */
    postData={

    }
    componentWillReceiveProps(nextProps,nextState){
        let data = nextProps.planData.map(arg=>{
            
                arg["valueId"]=iss.guid();
                arg["edit"]="+w";
              //  console.log(arg);
                return arg;
            });
            data.unshift({
                "pid": "",
                "id": "GETTYPE",
                "label": "获取方式",
                "text": null,
                "val":  ["4", "5", "6"],
                "type": "selects",
                "unit": null,
                "edit": "+m",
                "exec": "select ''  val,'请选择'  label ,0 ordernum  from dual union all select to_char(Dicvalue)  , to_char(dicName) ,SEQNUM from BT_SYSDICTIONARY where DICCATEGORYID=3 and DICLEVEL=2 and ISDEL=0 and ISENABLE=1\norder by ordernum",
                "regExp": "{type:\"number\"}",
                "colspan": 4,
                "data": [
                  {
                    "val": null,
                    "label": "请选择"
                  },
                  {
                    "val": "1",
                    "label": "拍卖"
                  },
                  {
                    "val": "2",
                    "label": "划拨"
                  },
                  {
                    "val": "3",
                    "label": "招标"
                  },
                  {
                    "val": "4",
                    "label": "并购"
                  },
                  {
                    "val": "5",
                    "label": "挂牌"
                  },
                  {
                    "val": "6",
                    "label": "协议出让"
                  },
                  {
                    "val": "7",
                    "label": "在建工程转让"
                  }
                ],
                "valuetype": null,
                "valueId": "59593EBE335547228BF73D1467CFD92F",
                "test": {
                  "check": false,
                  "val": null
                }
              }
        )
            this.setState({
                "DynamicData":data
               });
    }
     shouldComponentUpdate(nextProps, nextState){
        return shallowCompare(this, nextProps.planData, nextState.planData);
    } 

    componentWillMount() {
      //  console.log("haha-will",this.props.planData)
    }
    componentDidMount() {
      //  console.log("haha-did",this.props.planData)
        
    }   
    BIND_CALLBACK=(da, e)=>{ //子页面返回callback
        // if(this.time){ clearTimeout(this.time) }
        var th = this;
        var el = (e&&e["target"]) ? e.target.value : da.val, list = this.state.DynamicData;
        list.forEach((d, i) => {
            if (da.id == d.id) {
                d["val"] = el; 
                d["test"]=da["test"]; 
                return
            }

        });
        th.setState({
           "DynamicData": list
        });

        this.postData=list.filter(arg=>{
            if(arg["val"]){
                return arg
            }
        });
        console.log("postData",this.postData)
       // this.props.CallBack(this.postData)

    }
    render() {
      
        return (
            <article>
                 <DynamicTable pid={this.state.pid} DynamicData={this.state.DynamicData} CallBack={this.BIND_CALLBACK} />
            </article>
        );
    };
}

export default PlanQuota;
