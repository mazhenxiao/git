webpackJsonp([27],{702:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(10),c=n(i);a(43),a(42);var u=a(836),f=n(u),d=a(837),p=n(d),m=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.url="/MyTodo/IGetmySubmition?page=1&size=10",a.state={dataList:[]},a}return o(t,e),s(t,[{key:"componentWillMount",value:function(){this.getAjax()}},{key:"EventClickCell",value:function(e,t,a){var n=event.target||event.srcElement;window.screen.availWidth,window.screen.availHeight;"type"==t&&"a"==n.nodeName.toLocaleLowerCase()&&iss.hashHistory.push({pathname:"/ProcessApprover",state:iss.id.id})}},{key:"EVENT_CLICK_PROJECTNAME",value:function(e){var t="",a="";if("Rejected"==e.runstate){switch(e.entiid){case iss.getEVal("intallmentStatus"):a="intallment";break;case iss.getEVal("newProjectStatus"):a="newProject"}iss.hashHistory.push({pathname:"/"+a,search:"?status=edit&dataKey="+e.runtrecordid+"&e="+e.entiid}),$(".JH-Content").removeClass("CLASS_AGENTY")}else{switch(e.entiid){case iss.getEVal("newProjectStatus"):case iss.getEVal("intallmentStatus"):t="?e="+e.entiid+"&dataKey="+e.runtrecordid+"&current=ProcessApprover";break;default:t=""}if(""==t)return iss.popover({content:"此条数据异常，请联系后台工作人员！"}),!1;iss.hashHistory.push({pathname:"/ProcessApprover",search:t})}}},{key:"getAjax",value:function(e){var t=this,a=1;e&&(a=e),iss.ajax({url:this.url,data:{page:a,size:10},success:function(e){t.setState({pageTotal:e.rows.TotalPages,pageCount:e.rows.TotalItems,dataList:e.rows.Items})},error:function(){}})}},{key:"Bind_Click_Page",value:function(e){this.getAjax(e)}},{key:"agentyTabel",value:function(){var e=this;return this.state.dataList.map(function(t,a){var n="";return t.runstatetext.indexOf("审批中")>=0?n="type1":t.runstatetext.indexOf("通过")>=0?n="type2":t.runstatetext.indexOf("驳回")>=0&&(n="type3"),c.default.createElement("tr",{key:a},c.default.createElement("td",{className:"center"},a+1),c.default.createElement("td",{className:"left"},t.entiname),c.default.createElement("td",{className:"left"},c.default.createElement("a",{href:"javascript:;",onClick:e.EVENT_CLICK_PROJECTNAME.bind(e,t)},t.workflowtitle)),c.default.createElement("td",{className:"center"},t.submitdatetime.replace("T"," ")),c.default.createElement("td",{className:"left"},c.default.createElement("span",{className:"pseudo"},c.default.createElement("i",{className:n}),t.runstatetext)),c.default.createElement("td",{className:"center"},t.currentflowname),c.default.createElement("td",{className:"center"},t.approvername))})}},{key:"render",value:function(){return c.default.createElement("article",null,c.default.createElement(f.default,{parent:this.props}),c.default.createElement("section",{className:"agentyBox mgT20"},c.default.createElement("table",{id:"agentyBoxTabel",className:"table2"},c.default.createElement("colgroup",null,c.default.createElement("col",{width:"40"}),c.default.createElement("col",{width:"120"}),c.default.createElement("col",null),c.default.createElement("col",{width:"90"}),c.default.createElement("col",{width:"90"}),c.default.createElement("col",{width:"90"}),c.default.createElement("col",{width:"90"})),c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",{className:"center"},"序号"),c.default.createElement("th",{className:"center"},"审批类型"),c.default.createElement("th",{className:"center"},"审批内容"),c.default.createElement("th",{className:"center"},"提交时间"),c.default.createElement("th",{className:"center"},"审批状态"),c.default.createElement("th",{className:"center"},"当前节点"),c.default.createElement("th",{className:"center"},"当前审批人"))),c.default.createElement("tbody",null,this.agentyTabel()))),c.default.createElement(p.default,{total:this.state.pageTotal,count:this.state.pageCount,callback:this.Bind_Click_Page.bind(this)}))}}]),t}(c.default.Component);t.default=m},836:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(10),c=n(i),u=a(33);n(u);a(43),a(42);var f=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.bindLeftBart(),a.state={data:[{guid:"1",text:"我的待审",tap:"agenty"},{guid:"2",text:"我的申请",tap:"apply"},{guid:"3",text:"我的草稿",tap:"draft"},{guid:"4",text:"审批历史",tap:"approalHistory"}]},a}return o(t,e),s(t,[{key:"bindLeftBart",value:function(){$(".JH-Content").addClass("CLASS_AGENTY"),setTimeout(function(e){$(window).trigger("EVENT_CLOSELEFTBAR")},1e3)}},{key:"Event_click",value:function(e,t){var a=$(t.target);switch(a.parent().find("li").removeClass("active"),setTimeout(function(){a.addClass("active")}),e){case"agenty":iss.hashHistory.push("agenty");break;case"apply":iss.hashHistory.push("apply");break;case"draft":iss.hashHistory.push("draft");break;case"approalHistory":iss.hashHistory.push("approalHistory")}}},{key:"render",value:function(){var e,e=this,t=this.props.parent.location.pathname,a=this.state.data.map(function(a,n){return t.indexOf(a.tap)>=0?c.default.createElement("li",{key:n,className:"J-List active",onClick:e.Event_click.bind(e,a.tap)},a.text):c.default.createElement("li",{key:n,className:"J-List",onClick:e.Event_click.bind(e,a.tap)},a.text)});return c.default.createElement("header",{className:"JH-HeadTab"},c.default.createElement("ul",{className:"JH-HeadList"},a),c.default.createElement("div",{className:"JH-RightFlot"},c.default.createElement("a",{className:"btn-refish",href:"javascript:;"},"刷新")))}}]),t}(c.default.Component);t.default=f},837:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(10),i=function(e){return e&&e.__esModule?e:{default:e}}(s),c=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={current:1},a}return l(t,e),o(t,[{key:"Bind_click_list",value:function(e){var t=this.props.callback||function(){};this.setState({current:e},function(a){t(e)})}},{key:"render",value:function(){for(var e=[],t=this.props.total||0,a=this.props.count||0,n=1;n<=t;n++)e.push(i.default.createElement("li",{key:n,className:n==this.state.current?"active":"",onClick:this.Bind_click_list.bind(this,n)},i.default.createElement("a",{href:"javascript:;"},n)));return i.default.createElement("nav",{"aria-label":"Page navigation"},i.default.createElement("span",{className:"pageTotal"},a?"共"+a+"条":""),i.default.createElement("ul",{className:"pagination"},e))}}]),t}(i.default.Component);t.default=c}});