import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from "react-router";
import "babel-polyfill";  //兼容ie
import iss from "./iss.js";//公共类
iss.use({ Router, Route, hashHistory })
/* 路由 */
var rootRout = {
  path: "/",
  childRoutes: [
/*     {
      path: "/index",
      getComponent: function (next, callback) {
        require.ensure([], function (require) {
          var app = require('../area');//============================首页
          callback(null, app.default);
        }, "area-index");
      }
    }, */
    {
      path: "/manage",
      getComponent: function (next, callback) {
        require.ensure([], function (require) {
          var app = require('../area/index.js');/*面积管理*/
          callback(null, app.default);
        }, "area-manage");
      }
    },
    {
      path: "/payment",
      getComponent: function (next, callback) {
        require.ensure([], function (require) {
          var app = require('../payment/index.js');/*签约回款*/
          callback(null, app.default);
        }, "payment-index");
      }
    },
    {
      path: "/primarykey",
      getComponent: function (next, callback) {
        require.ensure([], function (require) {
          var app = require('../primaryKey/index.js');/*关键指标*/
          callback(null, app.default);
        }, "primaryKey-index");
      }
      
    },
    {
      path: "/supply",
      getComponent: function (next, callback) {
        require.ensure([], function (require) {
          var app = require('../supply/index.js');/*供货*/
          callback(null, app.default);
        }, "supply-index");
      }
      
    }
     
  ] 
}
ReactDOM.render(<Router history={hashHistory} routes={rootRout}></Router>, document.querySelector("#JH-Router"));
export default rootRout;