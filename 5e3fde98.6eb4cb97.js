(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{250:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(7),c=(r(0),r(561)),o={title:"Guava \u7b80\u4ecb",slug:"guava-intro",date:new Date("2015-10-02T00:00:00.000Z")},l={permalink:"/blog/guava-intro",source:"@site/contents/story/2015/2015-10-02-guava-intro.md",description:"Overviews - Five Ws",date:"2015-10-02T00:00:00.000Z",tags:[],title:"Guava \u7b80\u4ecb",readingTime:.95,truncated:!0,prevItem:{title:"BBVM - BeBasic Virtual Machine",permalink:"/blog/bbvm"},nextItem:{title:"\u4e00\u81f4\u6027Hash\u7b97\u6cd5",permalink:"/blog/ketama-consistence-hash"}},i=[{value:"Overviews - Five Ws",id:"overviews---five-ws",children:[]}],b={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overviews---five-ws"},"Overviews - Five Ws"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u95ee\u9898"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7b54\u6848"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u4ec0\u4e48"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e00\u5957\u5f00\u6e90\u7684 Java \u516c\u5171\u7ec4\u4ef6")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8c01\u5f00\u53d1\u7684"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e3b\u8981\u7531 Google \u5de5\u7a0b\u5e08\u5f00\u53d1\u7ef4\u62a4")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u54ea\u91cc\u7528"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6240\u6709\u4f7f\u7528 Java \u7684\u5730\u65b9")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4ec0\u4e48\u65f6\u5019\u51fa\u73b0\u7684"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2008\u5e74\u4e5d\u6708 \u7b2c\u4e00\u4e2aGoogle Collection\u7248\u672c\u51fa\u73b0\u5728 ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"http://mvnrepository.com/artifact/com.google.collections/google-collections"}),"maven \u4ed3\u5e93"),";",Object(c.b)("br",null),"2010\u5e74\u56db\u6708\u7b2c\u4e00\u4e2aGuava\u7248\u672c\u51fa\u73b0\u5728",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"http://mvnrepository.com/artifact/com.google.guava/guava"}),"maven \u4ed3\u5e93"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4ec0\u4e48\u4f7f\u7528"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528 ?")))))}p.isMDXComponent=!0},561:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,s=u["".concat(o,".").concat(m)]||u[m]||O[m]||c;return r?a.a.createElement(s,l(l({ref:t},b),{},{components:r})):a.a.createElement(s,l({ref:t},b))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);