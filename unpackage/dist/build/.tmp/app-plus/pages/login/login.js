(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"2b5f":function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t("2f62");function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){s(n,e,t[e])})}return n}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var r=function(){return t.e("components/m-input").then(t.bind(null,"9246"))},c={components:{mInput:r},data:function(){return{hasProvider:!0,showLogin:!1,account:"",password:"",positionTop:0,type:"",name:"",cardID:""}},computed:(0,i.mapState)(["forcedLogin","userInfo"]),onLoad:function(n){var e=this,t=1;this.second=t+"s",this.time=setInterval(function(){0==t?(clearInterval(e.time),e.showLogin=!0):(t--,e.second=t+"s")},1e3)},onShow:function(){},onReady:function(){this.initPosition()},methods:a({},(0,i.mapMutations)(["login"]),{initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100,console.log(o(this.positionTop,"44"," at pages\\login\\login.vue:92"))},onCertifica:function(){var e=/(^[0-9]{15}$)|(^[0-9]{18}$)|(^[0-9]{17}([0-9]|X|x)$)/;""!=this.name&&""!=this.cardID?e.test(this.cardID)?n.showToast({title:"提交成功",success:function(e){n.navigateBack({delta:1})}}):n.showToast({title:"身份证号填写有误",icon:"none"}):n.showToast({title:"信息不能为空",icon:"none"})},bindLogin:function(){var e=this;this.$util.post("/wechatUser/login?userName="+this.account+"&userPsd="+this.password).then(function(t){0==t.data.code?(e.$store.state.userInfo=t.data.data,n.switchTab({url:"/pages/index/index"})):n.showToast({title:t.data.msg,icon:"none"})})},oauth:function(e){n.login({provider:e,success:function(t){console.log(o(t," at pages\\login\\login.vue:170")),n.getUserInfo({provider:e,success:function(n){if(console.log(o("infoRes",n.userInfo," at pages\\login\\login.vue:180")),n.userInfo){var e={headurl:n.userInfo.avatarUrl,name:n.userInfo.nickName,area:n.userInfo.province,openId:n.userInfo.openId,gender:n.userInfo.gender||2==n.userInfo.gender?"女":"男",access_token:t.access_token};console.log(o("this.userInfo",e," at pages\\login\\login.vue:191"))}}})},fail:function(n){console.error(o("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:208"))}})}})};e.default=c}).call(this,t("6e42")["default"],t("0de9")["default"])},3041:function(n,e,t){},"566c":function(n,e,t){"use strict";var o,i=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",function(){return i}),t.d(e,"c",function(){return a}),t.d(e,"a",function(){return o})},"6b21":function(n,e,t){"use strict";t.r(e);var o=t("2b5f"),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=i.a},ca33:function(n,e,t){"use strict";var o=t("3041"),i=t.n(o);i.a},e80b:function(n,e,t){"use strict";t.r(e);var o=t("566c"),i=t("6b21");for(var a in i)"default"!==a&&function(n){t.d(e,n,function(){return i[n]})}(a);t("ca33");var s,r=t("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=c.exports},f55e:function(n,e,t){"use strict";(function(n){t("7a31"),t("921b");o(t("66fd"));var e=o(t("e80b"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])}},[["f55e","common/runtime","common/vendor"]]]);