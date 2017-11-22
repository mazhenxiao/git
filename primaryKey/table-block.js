import "babel-polyfill";  //兼容ie
import iss from "../js/iss.js";
import React, { Component } from 'react';
import { Table,Input, Popconfirm } from 'antd';
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

class TableBlock extends Component {
    state = {
        loading: false,
        editstatus:"",
        
    };//绑定数据

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps)
        this.setState({
            editstatus:nextProps.editstatus,
        })
    }

    componentDidMount() {
        this.setState({
            data:this.getData(),
        })
    }
    
    //只展示使用 this.renderContent
    renderContent = (value, row, index) => {
            const obj = {
                children: value,
                props: {},
            };
            return obj;
      };
    

    //带有编辑功能的使用 this.renderContentInput
    renderContentInput = (value, row, index) => {
        const editstatus=this.state.editstatus;
        const inputID="inputId"+iss.guid().toString();
        //判断是否是编辑状态
        if(editstatus){
            //编辑状态下生成input框
            const obj1=<div>
                {<Input id={inputID} style={{ margin: '-5px 0' }} value={value} onChange={this.onChangeInput.bind(this,value, row, index)} />}
            </div>
            return obj1;
        }else{
            //非编辑框下显示数据
            const obj2 = {
                children: value,
                props: {},
            };
            return obj2;
            
        }
       
    };
    onChangeInput=(value, row, index,ev)=>{
        var th = this;
        let target = ev.target.id;
        this.setState({
            [target]: ev.target.value // 将表单元素的值的变化映射到state中
        });
        $("#"+target).value(ev.target.value);
    }
    renderContentTable=(value, row, index) => {
        //根据数据合并行
        const obj = {
            children: value,
            props: {},
          };
          if (index === 1) {
            obj.props.rowSpan = 2;//跨两行
          };
          if (index === 2) {
            obj.props.rowSpan = 0;
          };
          if (index === 4) {
            obj.props.rowSpan = 6;
          };
          if (index === 5||index === 6||index === 7||index === 8||index === 9) {
            obj.props.rowSpan = 0;
          };
          if (index === 10) {
            obj.props.rowSpan = 3;
          };
          if (index === 11||index === 12) {
            obj.props.rowSpan = 0;
          };
          return obj;
    }
   
   
    getColumns =()=>{
        //表格头部数据
        const columns = [{
            title: '序号',
            colSpan: 1,
            dataIndex: 'order',
            render: this.renderContent,
          }, {
            title: '指标名称',
            colSpan: 2,//跨两列
            dataIndex: 'indexName1',
            render: this.renderContentTable,//合并列
          } ,{
            title: '指标名称',
            colSpan: 0,
            dataIndex: 'indexName2',
            render: this.renderContent,
          },{
            title: '计划',
            colSpan: 1,
            dataIndex: 'plan',
            render: this.renderContent,
          },{
            title: '2017年一季度',
            colSpan: 1,
            dataIndex: 'quarter1',
            //render: this.renderContent,
            render: this.renderContentInput,
          },{
            title: '2017年二季度',
            colSpan: 1,
            dataIndex: 'quarter2',
            render: this.renderContentInput,
          },{
            title: '2017年三季度',
            colSpan: 1,
            dataIndex: 'quarter3',
            render: this.renderContentInput,
          },{
            title: '2017年四季度',
            colSpan: 1,
            dataIndex: 'quarter4',
            render: this.renderContentInput,
          }]; 
          return columns
    }

    
    getData =()=>{ //表格内容数据
        /*const data = [];
        for (let i = 0; i < 100; i++) {
          data.push({
            key: i.toString(),
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
            key: '1',
            order: '1',
            indexName1: '面积指标',
            indexName2: '总建面',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          });
        } */
        
          const data = [{
            key: '1',
            order: '1',
            indexName1: '面积指标',
            indexName2: '总建面',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          }, {
            key: '2',
            order: '2',
            indexName1: '销售指标',
            indexName2: '销售总货值',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          },{
            key: '3',
            order: '3',
            indexName1: '销售指标',
            indexName2: '17年签约指标',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          }, {
            key: '4',
            order: '4',
            indexName1: '成本指标',
            indexName2: '成本支出',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          }, {
            key: '5',
            order: '5',
            indexName1: '财务类指标',
            indexName2: '销售净利润',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          }, {
            key: '6',
            order: '6',
            indexName1: '财务类指标',
            indexName2: '销售净利润率',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          },{
            key: '7',
            order: '7',
            indexName1: '财务类指标',
            indexName2: 'IRR（含融资）',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          },{
            key: '8',
            order: '8',
            indexName1: '财务类指标',
            indexName2: 'IRR（不含融资）',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          }, {
            key: '9',
            order: '9',
            indexName1: '财务类指标',
            indexName2: '现金流回正时间（含融资）',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          },, {
            key: '10',
            order: '10',
            indexName1: '财务类指标',
            indexName2: '现金流回正时间（不含融资）',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          },{
            key: '11',
            order: '11',
            indexName1: '计划类指标',
            indexName2: '主项计划达成率',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          },{
            key: '12',
            order: '12',
            indexName1: '计划类指标',
            indexName2: '拿地到首开周期',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          },{
            key: '13',
            order: '13',
            indexName1: '计划类指标',
            indexName2: '拿地到交付周期',
            plan: '计划',
            quarter1: '一季度',
            quarter2: '二季度',
            quarter3: '三季度',
            quarter4: '四季度',
          }];
          return data

          
    }

    
    render() {
        // pagination 是否分页，columns头部标题数据，dataSource表内容数据
        return (
            <Table columns={this.getColumns()} pagination={false} dataSource={this.getData()} bordered />
        );
       
    }
}
export default TableBlock;