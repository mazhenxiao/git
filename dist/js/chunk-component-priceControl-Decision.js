webpackJsonp([17,21],{699:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(10),c=a(l),u=n(33);a(u);n(43),n(42);var d=n(750),f=a(d),p=n(751),h=a(p),m=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.bindTab(),n.state={actionUrl:{GetDataGridTitle:"/Common/GetDataGridTitle",GetPriceList:"/Price/GetPriceList",GetVersions:"/Common/GetVersionListByBusinessId",CreatePriceVersion:"/Price/CreatePriceVersion"},title:{frozenColumns:[],columns:[]},gridData:[],version:[],step:-2,stepName:"",curVersion:""},n}return s(t,e),o(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.initDataParamers("GetVersions"),e.icon=$(".icon-bar"),window.onresize=function(t){e.icon.trigger("EVENT_TOGGLEBAR")}}},{key:"setVersionStatus",value:function(e){var t=0==e?"编制中":1==e?"审批中":"已审批";$("#statusText").html(t)}},{key:"initDataParamers",value:function(e){var t="",n=this;switch(e){case"GetDataGridTitle":t=n.state.actionUrl.GetDataGridTitle,n.loadData(t,{columns:"PriceTitleColumns",frozenColumns:"PriceTitleFrozenColumns"},function(e){n.state.title.frozenColumns=e.frozenColumns,n.state.title.columns=e.columns,n.initDataParamers("GetPriceList")});break;case"GetPriceList":t=n.state.actionUrl.GetPriceList,n.loadData(t,{stageversionid:n.state.curVersion,step:n.state.step},function(e){n.state.gridData=e,setTimeout(function(e){n.bind_table()},500)});break;case"GetVersions":t=n.state.actionUrl.GetVersions,n.loadData(t,{versionId:iss.id.id,projectlevel:2,step:n.state.step,dataType:3},function(e){var t=[],a=e,r=0;if(null!=a&&a.length>0){$(".haveversion,.price-editsave").show(),$(".noversion").hide(),r=a.length;for(var i=0;i<r;i++){var s={guid:i,value:a[i].ID,text:"V"+(99==a[i].STATUS?a[i].VERSIONCODE+" "+new Date(a[i].APPROVETIME).Format("yyyy-MM-dd"):a[i].VERSIONCODE),status:a[i].STATUS};t.push(s)}n.state.curVersion=a[0].ID,99!=a[0].STATUS?$(".price-createpriceversion").hide():$(".price-createpriceversion").show(),n.setVersionStatus(a[0].STATUS),n.initDataParamers("GetDataGridTitle")}else t=[],$(".haveversion,.price-editsave").hide(),$(".noversion").show(),n.initDataParamers("GetDataGridTitle");n.setState({version:t})})}}},{key:"loadData",value:function(e,t,n){$.ajax({url:e,type:"POST",dataType:"JSON",data:t,success:function(e){200!=e.errorcode?iss.Alert({title:"提示",content:e.message,width:300}):"function"==typeof n&&n(e.rows)}})}},{key:"bind_table",value:function(){(this.table_ys=$("#table-ys")).datagrid({width:"auto",nowrap:!0,fitColumns:!0,singleSelect:!0,frozenColumns:this.state.title.frozenColumns,columns:this.state.title.columns,data:this.state.gridData})}},{key:"createNewPriceVersion",value:function(){var e=this;$.ajax({url:this.state.actionUrl.CreatePriceVersion,type:"POST",dataType:"JSON",data:{versionId:iss.id.id,projectlevel:2,step:this.state.step},success:function(t){200!=t.errorcode?iss.Alert({title:"提示",content:t.message,width:300}):e.initDataParamers("GetVersions")}})}},{key:"changeVersion",value:function(e,t){this.state.curVersion=e.target.value,$("#statusText").html(this.setVersionStatus($("#version option:selected").attr("data-status"))),this.initDataParamers("GetPriceList")}},{key:"bindTab",value:function(e){$(".JH-Content").removeClass("CLASS_AGENTY")}},{key:"BIND_CALLBACK2",value:function(e){}},{key:"BIND_CALLBACK",value:function(e,t){this.state.step=e.guid,this.state.stepName=e.text,$(".priceTapTitle").html(e.text+"价格"),this.initDataParamers("GetVersions")}},{key:"render",value:function(){var e=this.state.version.map(function(e,t){return c.default.createElement("option",{key:t,value:e.value,"data-status":e.status},e.text)});return c.default.createElement("article",null,c.default.createElement("section",null,c.default.createElement("header",{className:"price"},c.default.createElement(f.default,{edit:"true",callback:this.BIND_CALLBACK.bind(this)}),c.default.createElement("div",{className:"price-right"},c.default.createElement("i",{className:"addIcon"})),c.default.createElement("i",{className:"clearboth"}))),c.default.createElement("section",null,c.default.createElement("React-tools-tab",{className:"React-tools-tab",id:"React-tools-tab"}),c.default.createElement("article",{className:"index-supply mgT20 clearboth"},c.default.createElement("section",{className:"supply-ys"},c.default.createElement("header",{className:"HeaderBar"},c.default.createElement("h5",null,c.default.createElement("span",{className:"price-left priceTapTitle"},"投决会价格"),c.default.createElement("ul",{className:"price-right opers"},c.default.createElement("li",{className:"jh-icons ahover price-createpriceversion"},c.default.createElement("a",{className:"btn-refish",href:"javascript:;",onClick:this.createNewPriceVersion.bind(this)},"生成新版本")),c.default.createElement("li",{className:"jh-icons jh-vtop price-editsave"},c.default.createElement(h.default,{"data-unique":"price",edit:"true",callback:this.BIND_CALLBACK2.bind(this)})),c.default.createElement("li",{className:"haveversion"},c.default.createElement("span",null,"当前版本："),c.default.createElement("select",{id:"version",onChange:this.changeVersion.bind(this)},e)),c.default.createElement("li",{className:"haveversion uncursor"},c.default.createElement("span",null,"状态："),c.default.createElement("span",{id:"statusText"},"编制中")),c.default.createElement("li",{className:"noversion uncursor"},c.default.createElement("span",null,"暂无版本"))))),c.default.createElement("table",{className:"formTable",id:"table-ys",width:"100%"})))))}}]),t}(c.default.Component);t.default=m},725:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(10),c=a(l);n(42);var u=n(699),d=a(u),f=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return iss.hashHistory.listen(function(e){}),n.state={actionUrl:{GetDataGridTitle:"/Common/GetDataGridTitle",GetPriceList:"/Price/GetPriceList",GetVersions:"/Common/GetVersionListByBusinessId"},title:{frozenColumns:[],columns:[]},gridData:[],version:[],curVersion:""},n}return s(t,e),o(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.initDataParamers("GetVersions"),e.icon=$(".icon-bar"),window.onresize=function(t){e.icon.trigger("EVENT_TOGGLEBAR")}}},{key:"Event_Change_Version",value:function(e,t){}},{key:"addTodo",value:function(e){}},{key:"setVersionStatus",value:function(e){var t=1==e?"编制中":2==e?"审批中":"已审批";$("#statusText").html(t)}},{key:"initDataParamers",value:function(e){var t="",n=this;switch(e){case"GetDataGridTitle":t=n.state.actionUrl.GetDataGridTitle,n.loadData(t,{columns:"PriceTitleColumns",frozenColumns:"PriceTitleFrozenColumns"},function(e){n.state.title.frozenColumns=e.frozenColumns,n.state.title.columns=e.columns,n.initDataParamers("GetPriceList")});break;case"GetPriceList":t=n.state.actionUrl.GetPriceList,n.loadData(t,{stageversionid:n.state.curVersion,step:1},function(e){n.state.gridData=e,setTimeout(function(e){n.bind_table()},500)});break;case"GetVersions":t=n.state.actionUrl.GetVersions,n.loadData(t,{versionId:"111F08DBE35B4B90A9288CFC7FBEB924",dataType:sessionStorage.pricestep},function(e){var t=[],a=e,r=0;if(null!=a&&a.length>1){r=a.length;for(var i=0;i<r;i++){var s={guid:i,value:a[i].ID,text:3==a[i].STATUS?a[i].VERSIONCODE+" "+new Date(a[i].APPROVETIME).Format("yyyy-MM-dd"):a[i].VERSIONCODE,status:a[i].STATUS};t.push(s)}n.state.curVersion=a[0].ID,n.setState({version:t}),n.setVersionStatus(a[0].STATUS),n.initDataParamers("GetDataGridTitle")}})}}},{key:"loadData",value:function(e,t,n){$.ajax({url:e,type:"POST",dataType:"JSON",data:t,success:function(e){200!=e.errorcode?iss.Alert({title:"取数失败",content:e.message,width:300}):"function"==typeof n&&n(e.rows)}})}},{key:"bind_table",value:function(){(this.table_ys=$("#table-ys")).datagrid({width:"auto",nowrap:!0,fitColumns:!0,rownumbers:!0,singleSelect:!0,frozenColumns:this.state.title.frozenColumns,columns:this.state.title.columns,data:this.state.gridData})}},{key:"changeVersion",value:function(e,t){this.state.curVersion=e.target.value,$("#statusText").html(this.setVersionStatus($("#version option:selected").attr("data-status"))),this.initDataParamers("GetPriceList")}},{key:"render",value:function(){var e=this.state.version.map(function(e,t){return c.default.createElement("option",{key:t,value:e.value,"data-status":e.status},e.text)});return c.default.createElement("div",null,c.default.createElement("React-tools-tab",{className:"React-tools-tab",id:"React-tools-tab"}),c.default.createElement(d.default,{parent:this.props}),c.default.createElement("article",{className:"index-supply mgT20 clearboth"},c.default.createElement("section",{className:"supply-ys"},c.default.createElement("header",{className:"HeaderBar"},c.default.createElement("h5",null,c.default.createElement("span",{className:"price-left"},"投决会价格"),c.default.createElement("ul",{className:"price-right opers"},c.default.createElement("li",{className:"jh-icons"},c.default.createElement("a",{className:"btn-refish",href:"javascript:;"},"生成新版本")),c.default.createElement("li",{className:"jh-icons"},c.default.createElement("i",{className:"jh-icon jh-icons-edit"}),c.default.createElement("span",null,"编辑")),c.default.createElement("li",null,c.default.createElement("span",null,"当前版本："),c.default.createElement("select",{id:"version",onChange:this.changeVersion.bind(this)},e)),c.default.createElement("li",null,c.default.createElement("span",null,"状态："),c.default.createElement("span",{id:"statusText"},"编制中"))))),c.default.createElement("table",{className:"formTable",id:"table-ys",width:"100%"}))))}}]),t}(c.default.Component);t.default=f},732:function(e,t,n){var a=n(740);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(305)(a,r);a.locals&&(e.exports=a.locals)},740:function(e,t,n){t=e.exports=n(304)(void 0),t.push([e.i,'.processBar .processBar-header li {\n  display: inline-block;\n  margin-right: 20px;\n  height: 25px;\n  line-height: 25px;\n  color: #333;\n}\n.processBar .processBar-header li:before {\n  width: 15px;\n  height: 15px;\n  border: #ccc solid 1px;\n  content: "";\n  display: inline-block;\n  border-radius: 50%;\n  vertical-align: top;\n  margin-top: 5px;\n  margin-right: 5px;\n}\n.processBar .processBar-header li.legend-white:before {\n  background: #fff;\n}\n.processBar .processBar-header li.legend-blue:before {\n  background: #2979ff;\n}\n.processBar .processBar-header li.legend-green:before {\n  background: #00e676;\n}\n.processBar .processBar-header li.legend-red:before {\n  background: #e53935;\n}\n.processBar .processBar-List {\n  margin-top: 10px;\n}\n.processBar .processBar-List li {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  margin-left: 5px;\n  color: #333;\n  margin-right: 0;\n  height: 30px;\n  min-width: 95px;\n  text-align: left;\n  padding-left: 20px;\n  padding-right: 10px;\n  line-height: 30px;\n  color: #fff;\n  font-size: 12px;\n  background: #4c72a4;\n}\n.processBar .processBar-List li:first-child {\n  padding-left: 10px;\n  margin-left: 0;\n}\n.processBar .processBar-List li:nth-child(n+2):before {\n  position: absolute;\n  top: 0;\n  left: 0px;\n  z-index: 20;\n  content: "";\n  border-left: #fff solid 15px;\n  border-bottom: transparent solid 15px;\n  border-top: transparent solid 15px;\n}\n.processBar .processBar-List li:nth-child(n):after {\n  position: absolute;\n  top: 0;\n  right: -14px;\n  z-index: 20;\n  content: "";\n  border-left: #4c72a4 solid 15px;\n  border-bottom: transparent solid 15px;\n  border-top: transparent solid 15px;\n}\n.processBar .processBar-List li span {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: #ccc solid 1px;\n  border-radius: 50%;\n  margin-right: 5px;\n  vertical-align: middle;\n  margin-top: -4px;\n}\n.processBar .processBar-List li span.legend-white {\n  background: #fff;\n}\n.processBar .processBar-List li span.legend-blue {\n  background: #2979ff;\n}\n.processBar .processBar-List li span.legend-green {\n  background: #00e676;\n}\n.processBar .processBar-List li span.legend-red {\n  background: #e53935;\n}\n.processBar .processBar-List li:hover,\n.processBar .processBar-List li.active {\n  background: #f1a118;\n  cursor: pointer;\n}\n.processBar .processBar-List li:hover::after,\n.processBar .processBar-List li.active::after {\n  border-left-color: #f1a118;\n}\n.PosRight {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n',""])},750:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(10),l=function(e){return e&&e.__esModule?e:{default:e}}(o);n(43),n(42),n(732);var c=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={legend:[{guid:"l1",text:"未编制",class:"legend-white"},{guid:"l2",text:"编制中",class:"legend-blue"},{guid:"l3",text:"审批通过",class:"legend-green"},{guid:"l4",text:"审批驳回",class:"legend-red"}],stage:[]},n}return i(t,e),s(t,[{key:"BIND_HEADER",value:function(){return this.state.legend.map(function(e,t){return l.default.createElement("li",{key:t,"data-guid":e.guid,className:e.class},e.text)})}},{key:"EVENT_CLICK_LIST",value:function(e,t){this.props.callback&&this.props.callback(e)}},{key:"BIND_LIST",value:function(){var e=this,t=this,n=t.props.data,a=t.props.activeGuid;n||alert("去对属性设置data去,存放步骤的数组,卡哇一一");var r=n.length;return n.map(function(t,n){return l.default.createElement("li",{style:{zIndex:r-n},className:t.guid==a?"active":"",onClick:e.EVENT_CLICK_LIST.bind(e,t),key:n,"data-guid":t.guid,"data-tap":t.tap},l.default.createElement("span",{className:t.className}),t.text)})}},{key:"render",value:function(){return l.default.createElement("div",{className:"processBar"},l.default.createElement("ul",{className:"processBar-header"},this.BIND_HEADER()),l.default.createElement("ul",{className:"processBar-List"},this.BIND_LIST()))}}]),t}(l.default.Component);t.default=c},751:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(10),l=function(e){return e&&e.__esModule?e:{default:e}}(o);n(43),n(42),n(732);var c=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={btns:[{guid:"0",text:"编辑",class:"jh-icon jh-icons-edit",operType:"edit"},{guid:"1",text:"保存",class:"jh-icon jh-icons-save",operType:"save"}],id:n.props["data-unique"]+"changebtn"},n}return i(t,e),s(t,[{key:"EVENT_CLICK_LIST",value:function(e,t){$("#"+this.state.id).children("li").hide();var n="0"==e.guid?"1":"0";$("#"+this.state.id).children("li").eq(parseInt(n)).show(),this.props.callback&&this.props.callback(e)}},{key:"componentDidMount",value:function(){$("#"+this.state.id).children("li").hide(),$("#"+this.state.id).children("li").eq(0).show()}},{key:"render",value:function(){var e=this,t=this.state.btns.map(function(t,n){return l.default.createElement("li",{key:t.guid,onClick:e.EVENT_CLICK_LIST.bind(e,t),"data-oper":t.operType},l.default.createElement("i",{className:t.class}),l.default.createElement("span",null,t.text))});return l.default.createElement("ul",{className:"opers btn-change jh-icons",id:this.state.id},t)}}]),t}(l.default.Component);t.default=c}});