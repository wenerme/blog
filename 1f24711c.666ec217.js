(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1114:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=i.a.createContext({}),m=function(e){var t=i.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=m(r),s=a,O=p["".concat(l,".").concat(s)]||p[s]||u[s]||n;return r?i.a.createElement(O,c(c({ref:t},o),{},{components:r})):i.a.createElement(O,c({ref:t},o))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<n;o++)l[o]=r[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return m}));var a=r(3),i=r(8),n=(r(0),r(1114)),l={title:"IM Awesome"},c={unversionedId:"service/im/im-awesome",id:"service/im/im-awesome",isDocsHomePage:!1,title:"IM Awesome",description:"Server",source:"@site/notes/service/im/im-awesome.md",slug:"/service/im/im-awesome",permalink:"/notes/service/im/im-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/im/im-awesome.md",version:"current",sidebar:"docs",previous:{title:"Gitea",permalink:"/notes/service/forge/gitea"},next:{title:"zulip",permalink:"/notes/service/im/zulip"}},b=[{value:"Server",id:"server",children:[{value:"Inactive",id:"inactive",children:[]}]},{value:"Client",id:"client",children:[]},{value:"UI",id:"ui",children:[]},{value:"Protocol",id:"protocol",children:[]}],o={toc:b};function m(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"server"},"Server"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/signalapp"},"Signal"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Server AGPL-3.0, Java"),Object(n.b)("li",{parentName:"ul"},"Client GPL-3.0 iOS/Android, AGPL-3.0 Web"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/wireapp/wire"},"Wire"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Server AGPL-3.0, Haskell"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/jitsi/jitsi"},"jitsi/jitsi"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Apache-2.0, Java"),Object(n.b)("li",{parentName:"ul"},"SIP, XMPP/Jabber, IRC"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/mattermost/mattermost-server"},"mattermost/mattermost-server"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"AGPL-3.0, \u5b98\u65b9\u4e8c\u8fdb\u5236 MIT, Go+Postgre"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/zulip/zulip"},"zulip/zulip"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Apache-2.0, Python+Postgre"),Object(n.b)("li",{parentName:"ul"},"team chat"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/igniterealtime/Openfire"},"igniterealtime/Openfire"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Apache-2.0, XMPP,Java"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/tinode/chat"},"tinode/chat"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Server GPL 3.0, Go+gRPC+RethinkDB/MySQL/MongoDB"),Object(n.b)("li",{parentName:"ul"},"Client Apache 2.0, iOS/Swift+Android/Java")))),Object(n.b)("h3",{id:"inactive"},"Inactive"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/GoBelieveIO/im_service"},"GoBelieveIO/im_service"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"GPL-2.0, Go"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/sdelements/lets-chat"},"sdelements/lets-chat"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"MIT, Nodejs+MongoDB+Metor"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/starrtc/starrtc-server"},"starrtc/starrtc-server"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"C"),Object(n.b)("li",{parentName:"ul"},"\u4e0d\u518d\u7ef4\u62a4"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://gitee.com/starRTC/starrtc-server"},"gitee")," \u4ee3\u7801\u4f3c\u4e4e\u8981\u65b0\u4e00\u70b9")))),Object(n.b)("h2",{id:"client"},"Client"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/RocketChat/Rocket.Chat"},"RocketChat/Rocket.Chat"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"MIT+EE, Nodejs+MongoDB"),Object(n.b)("li",{parentName:"ul"},"WebChat"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/coyim/coyim"},"coyim/coyim"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"GPL-3.0, Go+XMPP"),Object(n.b)("li",{parentName:"ul"},"GUI")))),Object(n.b)("h2",{id:"ui"},"UI"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/jpush/aurora-imui"},"jpush/aurora-imui"),"\n\u901a\u7528\u804a\u5929\u7ec4\u4ef6, Android, iOS, ReactNative")),Object(n.b)("h2",{id:"protocol"},"Protocol"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/matrix-org"},"matrix-org"),"\ninteroperable, decentralised real-time communication"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.aliyun.com/article/68390"},"\u5229\u7528\u6d88\u606f\u961f\u5217MQTT\uff0c\u6253\u9020\u4e00\u6b3e\u5c5e\u4e8e\u81ea\u5df1\u7684IM\u793e\u4ea4\u8f6f\u4ef6"))))}m.isMDXComponent=!0}}]);