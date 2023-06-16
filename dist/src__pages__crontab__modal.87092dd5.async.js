(self.webpackChunk=self.webpackChunk||[]).push([[8393],{26839:function(l,y,e){"use strict";e.d(y,{Z:function(){return z}});var g=e(14797),c=e(63313),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},N=S,H=e(46420),C=function(f,u){return c.createElement(H.Z,(0,g.Z)((0,g.Z)({},f),{},{ref:u,icon:N}))};C.displayName="PlusOutlined";var z=c.forwardRef(C)},13515:function(l,y,e){"use strict";e.r(y),e.d(y,{CronLabelModal:function(){return W},default:function(){return V}});var g=e(25359),c=e.n(g),S=e(57213),N=e.n(S),H=e(49811),C=e.n(H),z=e(54306),r=e.n(z),f=e(63313),u=e(67393),J=e(9835),ee=e(84163),R=e(22159),Q=e(24378),te=e(35911),F=e(90717),v=e(11186),Z=e.n(v),B=e(93525),w=e.n(B),o=e(51704),n=e(8297),a=e(26839),t=e(11527),m=function(d){var p=d.value,h=d.onChange,P=(0,f.useState)(""),K=r()(P,2),b=K[0],x=K[1],Y=(0,f.useState)(!1),$=r()(Y,2),U=$[0],j=$[1],_=(0,f.useState)([]),I=r()(_,2),i=I[0],E=I[1],T=(0,f.useRef)(),k=function(A){var G=i.filter(function(X){return X!==A});E(G),h==null||h(G)},D=function(){j(!0)},M=function(A){x(A.target.value)},L=function(){b&&!i.includes(b)&&(E([].concat(w()(i),[b])),h==null||h([].concat(w()(i),[b]))),j(!1),x("")},re=i.map(function(s){var A=(0,t.jsx)(o.Z,{closable:!0,onClose:function(X){X.preventDefault(),k(s)},children:s});return(0,t.jsx)("span",{style:{display:"inline-block",marginBottom:8},children:A},s)});return(0,f.useEffect)(function(){U&&T&&T.current.focus()},[U]),(0,f.useEffect)(function(){p&&E(p)},[p]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Z,{enter:{scale:.8,opacity:0,type:"from",duration:100},leave:{opacity:0,width:0,scale:0,duration:200},appear:!1,children:re}),U&&(0,t.jsx)(R.Z,{ref:T,type:"text",size:"small",style:{width:78},value:b,onChange:M,onBlur:L,onPressEnter:L}),!U&&(0,t.jsxs)(o.Z,{onClick:D,style:{borderStyle:"dashed",cursor:"pointer"},children:[(0,t.jsx)(a.Z,{})," \u65B0\u5EFA"]})]})},q=m,V=function(d){var p=d.cron,h=d.handleCancel,P=d.visible,K=u.Z.useForm(),b=r()(K,1),x=b[0],Y=(0,f.useState)(!1),$=r()(Y,2),U=$[0],j=$[1],_=function(){var I=C()(c()().mark(function i(E){var T,k,D,M,L;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return j(!0),T=p?"put":"post",k=N()({},E),p&&(k.id=p.id),s.prev=4,s.next=7,te.W[T]("".concat(F.Z.apiPrefix,"crons"),{data:k});case 7:D=s.sent,M=D.code,L=D.data,M===200&&(J.ZP.success(p?"\u66F4\u65B0Cron\u6210\u529F":"\u65B0\u5EFACron\u6210\u529F"),h(L)),j(!1),s.next=17;break;case 14:s.prev=14,s.t0=s.catch(4),j(!1);case 17:case"end":return s.stop()}},i,null,[[4,14]])}));return function(E){return I.apply(this,arguments)}}();return(0,f.useEffect)(function(){x.resetFields()},[p,P]),(0,t.jsx)(ee.Z,{title:p?"\u7F16\u8F91\u4EFB\u52A1":"\u65B0\u5EFA\u4EFB\u52A1",open:P,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){x.validateFields().then(function(i){_(i)}).catch(function(i){console.log("Validate Failed:",i)})},onCancel:function(){return h()},confirmLoading:U,children:(0,t.jsxs)(u.Z,{form:x,layout:"vertical",name:"form_in_modal",initialValues:p,children:[(0,t.jsx)(u.Z.Item,{name:"name",label:"\u540D\u79F0",children:(0,t.jsx)(R.Z,{placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"})}),(0,t.jsx)(u.Z.Item,{name:"command",label:"\u547D\u4EE4/\u811A\u672C",rules:[{required:!0,whitespace:!0}],children:(0,t.jsx)(R.Z.TextArea,{rows:4,autoSize:!0,placeholder:"\u652F\u6301\u8F93\u5165\u811A\u672C\u8DEF\u5F84/\u4EFB\u610F\u7CFB\u7EDF\u53EF\u6267\u884C\u547D\u4EE4/task \u811A\u672C\u8DEF\u5F84"})}),(0,t.jsx)(u.Z.Item,{name:"schedule",label:"\u5B9A\u65F6\u89C4\u5219",rules:[{required:!0},{validator:function(i,E){return!E||Z().parseExpression(E).hasNext()?Promise.resolve():Promise.reject("Cron\u8868\u8FBE\u5F0F\u683C\u5F0F\u6709\u8BEF")}}],children:(0,t.jsx)(R.Z,{placeholder:"\u79D2(\u53EF\u9009) \u5206 \u65F6 \u5929 \u6708 \u5468"})}),(0,t.jsx)(u.Z.Item,{name:"labels",label:"\u6807\u7B7E",children:(0,t.jsx)(q,{})})]})})},W=function(d){var p=d.ids,h=d.handleCancel,P=d.visible,K=u.Z.useForm(),b=r()(K,1),x=b[0],Y=(0,f.useState)(!1),$=r()(Y,2),U=$[0],j=$[1],_=function(){var i=C()(c()().mark(function E(T){return c()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:x.validateFields().then(function(){var M=C()(c()().mark(function L(re){var s,A,G,X;return c()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return j(!0),s={ids:p,labels:re.labels},O.prev=2,O.next=5,te.W[T]("".concat(F.Z.apiPrefix,"crons/labels"),{data:s});case 5:A=O.sent,G=A.code,X=A.data,G===200&&(J.ZP.success(T==="post"?"\u6DFB\u52A0Labels\u6210\u529F":"\u5220\u9664Labels\u6210\u529F"),h(!0)),j(!1),O.next=15;break;case 12:O.prev=12,O.t0=O.catch(2),j(!1);case 15:case"end":return O.stop()}},L,null,[[2,12]])}));return function(L){return M.apply(this,arguments)}}()).catch(function(M){console.log("Validate Failed:",M)});case 1:case"end":return D.stop()}},E)}));return function(T){return i.apply(this,arguments)}}();(0,f.useEffect)(function(){x.resetFields()},[p,P]);var I=[(0,t.jsx)(Q.Z,{onClick:function(){return h(!1)},children:"\u53D6\u6D88"}),(0,t.jsx)(Q.Z,{type:"primary",danger:!0,onClick:function(){return _("delete")},children:"\u5220\u9664"}),(0,t.jsx)(Q.Z,{type:"primary",onClick:function(){return _("post")},children:"\u6DFB\u52A0"})];return(0,t.jsx)(ee.Z,{title:"\u6279\u91CF\u4FEE\u6539\u6807\u7B7E",open:P,footer:I,centered:!0,maskClosable:!1,forceRender:!0,onCancel:function(){return h(!1)},confirmLoading:U,children:(0,t.jsx)(u.Z,{form:x,layout:"vertical",name:"form_in_label_modal",children:(0,t.jsx)(u.Z.Item,{name:"labels",label:"\u6807\u7B7E",children:(0,t.jsx)(q,{})})})})}},90717:function(l,y){"use strict";var e=window.__ENV__QlBaseUrl||"/";y.Z={siteName:"\u9752\u9F99",apiPrefix:"".concat(e,"api/"),authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u65E5\u5FD7\u7BA1\u7406",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u65E5\u5FD7\u7BA1\u7406",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"aibotk",label:"\u667A\u80FD\u5FAE\u79D8\u4E66"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u6656chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"lark",label:"\u98DE\u4E66\u673A\u5668\u4EBA"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0},{label:"pushDeerUrl",tip:"PushDeer\u7684\u81EA\u67B6API endpoint\uFF0C\u9ED8\u8BA4\u662F https://api2.pushdeer.com/message/push"}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0},{label:"weWorkOrigin",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u4EE3\u7406\u5730\u5740"}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0},{label:"weWorkOrigin",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u4EE3\u7406\u5730\u5740"}],aibotk:[{label:"aibotkKey",tip:"\u5BC6\u94A5key,\u667A\u80FD\u5FAE\u79D8\u4E66\u4E2A\u4EBA\u4E2D\u5FC3\u83B7\u53D6apikey\uFF0C\u7533\u8BF7\u5730\u5740\uFF1Ahttps://wechat.aibotk.com/signup?from=ql",required:!0},{label:"aibotkType",tip:"\u53D1\u9001\u7684\u76EE\u6807\uFF0C\u7FA4\u7EC4\u6216\u8005\u597D\u53CB",required:!0,placeholder:"\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u76EE\u6807",items:[{value:"room",label:"\u7FA4\u804A"},{value:"contact",label:"\u597D\u53CB"}]},{label:"aibotkName",tip:"\u8981\u53D1\u9001\u7684\u7528\u6237\u6635\u79F0\u6216\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u7FA4\uFF0C\u9700\u8981\u586B\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u597D\u53CB\uFF0C\u9700\u8981\u586B\u597D\u53CB\u6635\u79F0",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],lark:[{label:"larkKey",tip:"\u98DE\u4E66\u7FA4\u7EC4\u673A\u5668\u4EBA\uFF1Ahttps://www.feishu.cn/hc/zh-CN/articles/360024984973",required:!0}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/crontab":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u65E5\u5FD7\u7BA1\u7406","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7","/dependence":"\u4F9D\u8D56\u7BA1\u7406"},dependenceTypes:["nodejs","python3","linux"]}},35911:function(l,y,e){"use strict";e.d(y,{W:function(){return te}});var g=e(25359),c=e.n(g),S=e(49811),N=e.n(S),H=e(57213),C=e.n(H),z=e(50659),r=e(9835),f=e(90717),u=e(40440);r.ZP.config({duration:2});var J=Date.now(),ee=function(v){if(v.response){var Z=v.data?v.data.message||v.message||v.data:v.response.statusText,B=v.response.status;[502,504].includes(B)?u.history.push("/error"):B===401?u.history.location.pathname!=="/login"&&(r.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(f.Z.authKey),u.history.push("/login")):r.ZP.error({content:Z,style:{maxWidth:500,margin:"0 auto"}})}else console.log(v.message);throw v},R=(0,z.l7)({timeout:6e4,params:{t:J},errorHandler:ee}),Q=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];R.interceptors.request.use(function(F,v){var Z=localStorage.getItem(f.Z.authKey);if(Z&&!Q.includes(F)){var B={Authorization:"Bearer ".concat(Z)};return{url:F,options:C()(C()({},v),{},{headers:B})}}return{url:F,options:v}}),R.interceptors.response.use(function(){var F=N()(c()().mark(function v(Z){var B,w,o;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(B=Z.status,![502,504].includes(B)){a.next=5;break}u.history.push("/error"),a.next=14;break;case 5:if(B!==401){a.next=9;break}u.history.location.pathname!=="/login"&&(localStorage.removeItem(f.Z.authKey),u.history.push("/login")),a.next=14;break;case 9:return a.next=11,Z.clone().json();case 11:return w=a.sent,w.code!==200&&(o=w.message||w.data,o&&r.ZP.error({content:o,style:{maxWidth:500,margin:"0 auto"}})),a.abrupt("return",w);case 14:return a.abrupt("return",Z);case 15:case"end":return a.stop()}},v)}));return function(v){return F.apply(this,arguments)}}());var te=R},51704:function(l,y,e){"use strict";e.d(y,{Z:function(){return w}});var g=e(87807),c=e(60795),S=e(17079),N=e(5132),H=e(84875),C=e.n(H),z=e(92976),r=e(63313),f=e(82259),u=e(31124),J=e(1570),ee=function(o,n){var a={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(a[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,t=Object.getOwnPropertySymbols(o);m<t.length;m++)n.indexOf(t[m])<0&&Object.prototype.propertyIsEnumerable.call(o,t[m])&&(a[t[m]]=o[t[m]]);return a},R=function(n){var a,t=n.prefixCls,m=n.className,q=n.checked,V=n.onChange,W=n.onClick,ae=ee(n,["prefixCls","className","checked","onChange","onClick"]),d=r.useContext(f.E_),p=d.getPrefixCls,h=function(x){V==null||V(!q),W==null||W(x)},P=p("tag",t),K=C()(P,(a={},(0,g.Z)(a,"".concat(P,"-checkable"),!0),(0,g.Z)(a,"".concat(P,"-checkable-checked"),q),a),m);return r.createElement("span",(0,c.Z)({},ae,{className:K,onClick:h}))},Q=R,te=function(o,n){var a={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(a[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,t=Object.getOwnPropertySymbols(o);m<t.length;m++)n.indexOf(t[m])<0&&Object.prototype.propertyIsEnumerable.call(o,t[m])&&(a[t[m]]=o[t[m]]);return a},F=new RegExp("^(".concat(u.Y.join("|"),")(-inverse)?$")),v=new RegExp("^(".concat(u.E.join("|"),")$")),Z=function(n,a){var t,m=n.prefixCls,q=n.className,V=n.style,W=n.children,ae=n.icon,d=n.color,p=n.onClose,h=n.closeIcon,P=n.closable,K=P===void 0?!1:P,b=te(n,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),x=r.useContext(f.E_),Y=x.getPrefixCls,$=x.direction,U=r.useState(!0),j=(0,S.Z)(U,2),_=j[0],I=j[1];r.useEffect(function(){"visible"in b&&I(b.visible)},[b.visible]);var i=function(){return d?F.test(d)||v.test(d):!1},E=(0,c.Z)({backgroundColor:d&&!i()?d:void 0},V),T=i(),k=Y("tag",m),D=C()(k,(t={},(0,g.Z)(t,"".concat(k,"-").concat(d),T),(0,g.Z)(t,"".concat(k,"-has-color"),d&&!T),(0,g.Z)(t,"".concat(k,"-hidden"),!_),(0,g.Z)(t,"".concat(k,"-rtl"),$==="rtl"),t),q),M=function(O){O.stopPropagation(),p==null||p(O),!O.defaultPrevented&&("visible"in b||I(!1))},L=function(){return K?h?r.createElement("span",{className:"".concat(k,"-close-icon"),onClick:M},h):r.createElement(N.Z,{className:"".concat(k,"-close-icon"),onClick:M}):null},re="onClick"in b||W&&W.type==="a",s=(0,z.Z)(b,["visible"]),A=ae||null,G=A?r.createElement(r.Fragment,null,A,r.createElement("span",null,W)):W,X=r.createElement("span",(0,c.Z)({},s,{ref:a,className:D,style:E}),G,L());return re?r.createElement(J.Z,null,X):X},B=r.forwardRef(Z);B.CheckableTag=Q;var w=B},38433:function(){},57002:function(){},30006:function(l,y,e){var g=e(25705);function c(S){if(Array.isArray(S))return g(S)}l.exports=c,l.exports.__esModule=!0,l.exports.default=l.exports},16660:function(l){function y(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}l.exports=y,l.exports.__esModule=!0,l.exports.default=l.exports},95848:function(l){function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l.exports=y,l.exports.__esModule=!0,l.exports.default=l.exports},93525:function(l,y,e){var g=e(30006),c=e(16660),S=e(41442),N=e(95848);function H(C){return g(C)||c(C)||S(C)||N()}l.exports=H,l.exports.__esModule=!0,l.exports.default=l.exports}}]);