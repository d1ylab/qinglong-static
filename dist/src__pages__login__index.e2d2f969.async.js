(self.webpackChunk=self.webpackChunk||[]).push([[9939],{5697:function(a,r,e){"use strict";e.r(r),e.d(r,{default:function(){return q}});var l=e(57213),s=e.n(l),n=e(54306),c=e.n(n),i=e(63313),o=e(67393),B=e(89065),F=e(43848),x=e(22159),v=e(24378),C=e(59873),d=e(90717),E=e(40440),u={container:"container___ldtvs",top:"top___D7yFW",header:"header___j_Z_f",logo:"logo___Cf9cM",title:"title___zhtS2",desc:"desc___gUnVR",main:"main___sAFzH",icon:"icon___CBYA8",other:"other___ldu__",register:"register___e1aGB",prefixIcon:"prefixIcon___CnW6Q",extra:"extra___e62Gt"},m=e(35911),h=e(74445),p=e(14797),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},M=D,T=e(46420),b=function(P,Z){return i.createElement(T.Z,(0,p.Z)((0,p.Z)({},P),{},{ref:Z,icon:M}))};b.displayName="MobileOutlined";var j=i.forwardRef(b),t=e(11527),y=o.Z.Item,O=B.Z.Countdown,I=window.__ENV__DeployEnv==="demo",X=function(){var P=(0,E.useOutletContext)(),Z=P.reloadUser,te=(0,i.useState)(!1),w=c()(te,2),ae=w[0],L=w[1],ne=(0,i.useState)(),K=c()(ne,2),N=K[0],R=K[1],oe=(0,h.F)(),re=oe.theme,se=(0,i.useState)(!1),V=c()(se,2),W=V[0],z=V[1],ue=(0,i.useState)(!1),G=c()(ue,2),ie=G[0],U=G[1],le=(0,i.useState)(),H=c()(le,2),de=H[0],ce=H[1],fe=function(_){L(!0),z(!1),R(null),m.W.post("".concat(d.Z.apiPrefix,"user/login"),{data:{username:"admin",password:"admin"}}).then(function(f){$(f,_),L(!1)}).catch(function(f){console.log(f),L(!1)})},k=function(_){U(!0),m.W.put("".concat(d.Z.apiPrefix,"user/two-factor/login"),{data:s()(s()({},de),{},{code:_.code})}).then(function(f){$(f),U(!1)}).catch(function(f){console.log(f),U(!1)})},$=function(_,f){var S=_.code,g=_.data,ge=_.message;if(S===200){var ve=g.token,he=g.lastip,pe=g.lastaddr,Q=g.lastlogon,Y=g.retries,J=Y===void 0?0:Y,_e=g.platform;localStorage.setItem(d.Z.authKey,ve),F.Z.success({message:"\u767B\u5F55\u6210\u529F\uFF01",description:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:["\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A",Q?new Date(Q).toLocaleString():"-"]}),(0,t.jsxs)("div",{children:["\u4E0A\u6B21\u767B\u5F55\u5730\u70B9\uFF1A",pe||"-"]}),(0,t.jsxs)("div",{children:["\u4E0A\u6B21\u767B\u5F55IP\uFF1A",he||"-"]}),(0,t.jsxs)("div",{children:["\u4E0A\u6B21\u767B\u5F55\u8BBE\u5907\uFF1A",_e||"-"]}),(0,t.jsxs)("div",{children:["\u4E0A\u6B21\u767B\u5F55\u72B6\u6001\uFF1A",J>0?"\u5931\u8D25".concat(J,"\u6B21"):"\u6210\u529F"]})]})}),Z(!0),E.history.push("/crontab")}else S===410?R(g):S===420&&(ce({username:f.username,password:f.password}),z(!0))},me=function(_){var f=_.target,S=f.value,g=/^[0-9]{6}$/;g.test(S)&&k({code:S})};return(0,i.useEffect)(function(){var A=localStorage.getItem(d.Z.authKey);A&&E.history.push("/crontab")},[]),(0,t.jsxs)("div",{className:u.container,children:[(0,t.jsx)("div",{className:u.top,children:(0,t.jsxs)("div",{className:u.header,children:[(0,t.jsx)("img",{alt:"logo",className:u.logo,src:"https://qn.whyour.cn/logo.png"}),(0,t.jsx)("span",{className:u.title,children:W?"\u4E24\u6B65\u9A8C\u8BC1":d.Z.siteName})]})}),(0,t.jsx)("div",{className:u.main,children:W?(0,t.jsxs)(o.Z,{layout:"vertical",onFinish:k,children:[(0,t.jsx)(y,{name:"code",label:"\u9A8C\u8BC1\u7801",rules:[{pattern:/^[0-9]{6}$/,message:"\u9A8C\u8BC1\u7801\u4E3A6\u4F4D\u6570\u5B57"}],validateTrigger:"onBlur",children:(0,t.jsx)(x.Z,{placeholder:"6\u4F4D\u6570\u5B57",onChange:me,autoFocus:!0,autoComplete:"off"})}),(0,t.jsx)(v.Z,{type:"primary",htmlType:"submit",style:{width:"100%"},loading:ie,children:"\u9A8C\u8BC1"})]}):(0,t.jsxs)(o.Z,{layout:"vertical",onFinish:fe,children:[(0,t.jsx)(y,{name:"username",label:"\u7528\u6237\u540D",hasFeedback:!0,children:(0,t.jsx)(x.Z,{placeholder:"\u7528\u6237\u540D".concat(I?": admin":""),defaultValue:"admin",disabled:!0})}),(0,t.jsx)(y,{name:"password",label:"\u5BC6\u7801",hasFeedback:!0,children:(0,t.jsx)(x.Z,{type:"password",placeholder:"\u5BC6\u7801".concat(I?": 123":""),defaultValue:"admin",disabled:!0})}),(0,t.jsx)(C.Z,{children:N?(0,t.jsxs)(v.Z,{type:"primary",style:{width:"100%"},disabled:!0,children:["\u8BF7",(0,t.jsx)(O,{valueStyle:{color:re==="vs"?"rgba(0,0,0,.25)":"rgba(232, 230, 227, 0.25)"},className:"inline-countdown",onFinish:function(){return R(null)},format:"ss",value:Date.now()+1e3*N}),"\u79D2\u540E\u91CD\u8BD5"]}):(0,t.jsx)(v.Z,{type:"primary",htmlType:"submit",style:{width:"100%"},loading:ae,children:"\u767B\u5F55"})})]})}),(0,t.jsx)("div",{className:u.extra,children:W?(0,t.jsxs)("div",{style:{paddingLeft:20,position:"relative"},children:[(0,t.jsx)(j,{style:{position:"absolute",left:0,top:4}}),"\u5728\u60A8\u7684\u8BBE\u5907\u4E0A\u6253\u5F00\u4E24\u6B65\u9A8C\u8BC1\u5E94\u7528\u7A0B\u5E8F\u4EE5\u67E5\u770B\u60A8\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u4EE3\u7801\u5E76\u9A8C\u8BC1\u60A8\u7684\u8EAB\u4EFD\u3002"]}):""})]})},q=X},74445:function(a,r,e){"use strict";e.d(r,{F:function(){return B},e:function(){return o}});var l=e(54306),s=e.n(l),n=e(63313),c=e.n(n),i=e(60001),o=function(){var x=(0,n.useState)("100%"),v=s()(x,2),C=v[0],d=v[1],E=(0,n.useState)(0),u=s()(E,2),m=u[0],h=u[1],p=(0,n.useState)(-48),D=s()(p,2),M=D[0],T=D[1],b=(0,n.useState)(!1),j=s()(b,2),t=j[0],y=j[1],O=(0,n.useMemo)(function(){return(0,i.ZP)()},[]),I=O.platform;return(0,n.useEffect)(function(){I==="mobile"&&document.body.offsetWidth<768?(d("auto"),h(0),T(0),y(!0),document.body.setAttribute("data-mode","phone")):(d("100%"),h(0),T(-48),y(!1),document.body.setAttribute("data-mode","desktop"))},[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:M,width:C,marginLeft:m},isPhone:t}},B=function(){var x=(0,n.useState)(),v=s()(x,2),C=v[0],d=v[1],E=function(){var m=window.matchMedia("(prefers-color-scheme: dark)"),h=localStorage.getItem("qinglong_dark_theme"),p=m.matches&&h!=="light"||h==="dark";d(p?"vs-dark":"vs")};return(0,n.useEffect)(function(){var u=window.matchMedia("(prefers-color-scheme: dark)"),m=localStorage.getItem("qinglong_dark_theme"),h=u.matches&&m!=="light"||m==="dark";d(h?"vs-dark":"vs");var p=function(M){(m==="auto"||!m)&&(M.matches?d("vs-dark"):d("vs"))};typeof u.addEventListener=="function"?u.addEventListener("change",p):typeof u.addListener=="function"&&u.addListener(p)},[]),{theme:C,reloadTheme:E}}},92235:function(a,r,e){"use strict";e.d(r,{Z:function(){return c}});var l=e(17079),s=e(63313),n=e.n(s);function c(){var i=s.useReducer(function(F){return F+1},0),o=(0,l.Z)(i,2),B=o[1];return B}},68098:function(a,r,e){"use strict";e.d(r,{fk:function(){return c},jD:function(){return s}});var l=e(65021),s=function(){return(0,l.Z)()&&window.document.documentElement},n,c=function(){if(!s())return!1;if(n!==void 0)return n;var o=document.createElement("div");return o.style.display="flex",o.style.flexDirection="column",o.style.rowGap="1px",o.appendChild(document.createElement("div")),o.appendChild(document.createElement("div")),document.body.appendChild(o),n=o.scrollHeight===1,document.body.removeChild(o),n}},59873:function(a,r,e){"use strict";var l=e(19698);r.Z=l.Z},24669:function(a){var r=Array.isArray;a.exports=r},30006:function(a,r,e){var l=e(25705);function s(n){if(Array.isArray(n))return l(n)}a.exports=s,a.exports.__esModule=!0,a.exports.default=a.exports},16660:function(a){function r(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},95848:function(a){function r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},93525:function(a,r,e){var l=e(30006),s=e(16660),n=e(41442),c=e(95848);function i(o){return l(o)||s(o)||n(o)||c()}a.exports=i,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
