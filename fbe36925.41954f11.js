(window.webpackJsonp=window.webpackJsonp||[]).push([[972],{1045:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),i=(r(0),r(1065)),l={title:"Build Asterisk"},s={unversionedId:"voip/asterisk/asterisk-build",id:"voip/asterisk/asterisk-build",isDocsHomePage:!1,title:"Build Asterisk",description:"- debian \u80fd\u5b89\u88c5 16",source:"@site/notes/voip/asterisk/asterisk-build.md",slug:"/voip/asterisk/asterisk-build",permalink:"/notes/voip/asterisk/asterisk-build",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-build.md",version:"current",sidebar:"docs",previous:{title:"Asterisk Awesome",permalink:"/notes/voip/asterisk/asterisk-awesome"},next:{title:"Asterisk \u901a\u9053",permalink:"/notes/voip/asterisk/channel"}},c=[{value:"Asterisk Crash",id:"asterisk-crash",children:[]}],o={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"debian \u80fd\u5b89\u88c5 16",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709 codec_ilbc, app_meetme",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ilbc -> opus"),Object(i.b)("li",{parentName:"ul"},"meetme -> ConfBridge"))))),Object(i.b)("li",{parentName:"ul"},"alpine \u80fd\u5b89\u88c5 18 - \u6700\u65b0 \b lts \u7248 - \u4f46\u6709\u4e9b\u573a\u666f\u53ef\u80fd crash",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8003\u8651\u57fa\u4e8e frolvlad/alpine-glibc \u4ece\u65b0\u6784\u5efa"),Object(i.b)("li",{parentName:"ul"},"\u6ca1\u6709 codec_opus_open_source"))),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981 certificated asterisk \u7248\u672c\u53ea\u80fd\u81ea\u5df1\u6784\u5efa"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"aports ",Object(i.b)("a",{parentName:"li",href:"https://github.com/alpinelinux/aports/blob/master/main/asterisk/APKBUILD"},"main/asterisk/APKBUILD")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/andrius/asterisk"},"andrius/asterisk"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"debian, centos \u6784\u5efa\u4e2a\u4e2a\u7248\u672c asterisk"))))),Object(i.b)("li",{parentName:"ul"},"debian",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5171\u4eab\u8d44\u6e90\u4f4d\u4e8e /usr/share/asterisk")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u6784\u5efa doc xml\n# \u53ef\u7528\u4e8e\u751f\u6210\u4ee3\u7801\u6216\u6587\u6863\n# core \u505a\u4e86 html escape, full \u6ca1\u6709 - \u4e24\u4e2a\u533a\u522b\u4e0d\u5927\nmake doc/core-en_US.xml\nmake doc/full-en_US.xml\n\n# \u6a21\u5757\u652f\u6301\u72b6\u6001\ngrep -rP '^\\t<support_level>' $(find . -name '*.c') | sed -re 's#</?support_level>##g' | sort\n")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"asterisk-crash"},"Asterisk Crash"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dial \u65f6 WebSocket \u53d1\u9001 DTMF",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Debian 16.16 crash"))),Object(i.b)("li",{parentName:"ul"},"Echo \u5e94\u7528\u6309\u4efb\u610f\u952e"),Object(i.b)("li",{parentName:"ul"},"Asterisk crashes during call transfer ",Object(i.b)("a",{parentName:"li",href:"https://issues.asterisk.org/jira/browse/ASTERISK-29168"},"ASTERISK-29168"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"pbx_realtime diaplans")))))}b.isMDXComponent=!0},1065:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?a.a.createElement(d,s(s({ref:t},o),{},{components:r})):a.a.createElement(d,s({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);