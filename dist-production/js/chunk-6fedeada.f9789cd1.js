(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fedeada"],{a55b:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("div",{staticClass:"c-app flex-row align-items-center"},[n("CContainer",[n("CRow",{staticClass:"justify-content-center"},[n("CCol",{attrs:{md:"8"}},[n("CCardGroup",[n("CCard",{staticClass:"p-4"},[n("CCardBody",[n("CForm",[n("h1",[e._v("傳送人員登入")]),n("div",{staticClass:"col-md-5 bind",staticStyle:{display:"none"}},[n("button",{staticClass:"btn btn-warning",attrs:{type:"button",id:"unbind"},on:{click:function(o){return e.unbind()}}},[e._v("解除綁定")])]),n("CInput",{attrs:{placeholder:"帳號",autocomplete:"username"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[n("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.username,callback:function(o){e.username=o},expression:"username"}}),n("input",{attrs:{id:"device_id",type:"hidden"}}),n("CInput",{attrs:{placeholder:"密碼",type:"password",autocomplete:"curent-password"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[n("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:e.password,callback:function(o){e.password=o},expression:"password"}}),n("CRow",[n("CCol",{staticClass:"text-left",attrs:{col:"6"}},[n("CButton",{staticClass:"px-4",attrs:{color:"primary",id:"bind",size:"lg"},on:{click:function(o){return e.registeFCM(e.username,e.password)}}},[e._v("登入")]),n("p"),n("button",{on:{click:e.unbind}},[e._v("Unbind")])],1),n("CCol",{staticClass:"text-right",attrs:{col:"6"}},[n("CButton",{staticClass:"px-0",attrs:{color:"link",size:"lg"},on:{click:function(o){e.darkModal=!0}}},[e._v("忘記密碼?")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),n("div",[n("CModal",{staticStyle:{"font-size":"28px"},attrs:{show:e.darkModal,"no-close-on-backdrop":!0,centered:!0,title:"Modal title 2",size:"lg",color:"dark"},on:{"update:show":function(o){e.darkModal=o}},scopedSlots:e._u([{key:"header",fn:function(){return[n("h5",{staticClass:"modal-title"},[e._v("派單通知")]),n("CButtonClose",{staticClass:"text-white",on:{click:function(o){e.darkModal=!1}}})]},proxy:!0},{key:"footer",fn:function(){return[n("CButton",{attrs:{color:"success",size:"lg"},on:{click:function(o){e.darkModal=!1}}},[e._v("接收")])]},proxy:!0}])},[e._v(" 您目前接獲一個指定傳送工作,請在此單完成後，執行指定派單"),n("br"),e._v(" 查看傳送內容 ")])],1)])},s=[],a=(n("8071"),n("1b4a"),n("869c")),r=(n("3452"),{name:"Login",data:function(){return{username:"",password:"",darkModal:!1}},mounted:function(){console.log("hello"),this.initFCM()},methods:{initFCM:function(){var e=this;console.log("initFCM"),this.$messaging.onTokenRefresh((function(){e.$messaging.getToken().then((function(o){console.log("Token refreshed."),e.setTokenSentToServer(!1),e.sendTokenToServer(o)}))}))},registeFCM:function(e,o){var n=this;console.log("data",e,o);var t={user:e,password:a["a"].Encrypt(o)};console.log("dataArr",t),this.$messaging.requestPermission().then((function(){console.log("Notification permission granted."),n.getToken(t)})).catch((function(e){console.log("Unable to get permission to notify.",e)}))},getToken:function(e){var o=this;this.$messaging.getToken(e).then((function(n){console.log("getToken",e),n?(o.sendTokenToServer(n,e),console.log("send")):(console.log("No Instance ID token available. Request permission to generate one."),console.log("false"),o.setTokenSentToServer(!1))})).catch((function(e){console.log("An error occurred while retrieving token. ",e),o.setTokenSentToServer(!1)}))},sendTokenToServer:function(e,o){console.log("Sending token to server..."),console.log("token",e,o),$.post("https://porter-alpha.dynacloud.co/ajax.php",{username:this.username,device_id:e,action:"bind"},(function(o){1==o.status?(sessionStorage.setItem("token",e),window.location.reload()):alert(o.message)}),"json"),this.$store.dispatch("userLogin",o)},setTokenSentToServer:function(e){},unbind:function(){console.log("456"),this.$messaging.getToken().then((function(e){console.log("currentToken1",e),$.post("https://porter-alpha.dynacloud.co/ajax.php",{device_id:e,action:"unbind"},(function(e){console.log(e),1==e.status?(alert(e.message),sessionStorage.removeItem("token"),window.location.reload()):alert(e.message)}),"json")})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))}}}),i=r,c=(n("d6db"),n("2877")),l=Object(c["a"])(i,t,s,!1,null,null,null);o["default"]=l.exports},d6db:function(e,o,n){"use strict";n("e67a")},e67a:function(e,o,n){}}]);
//# sourceMappingURL=chunk-6fedeada.f9789cd1.js.map