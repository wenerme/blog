(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{688:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(787)),c={id:"servlet",title:"Servlet"},i={unversionedId:"java/spec/servlet",id:"java/spec/servlet",isDocsHomePage:!1,title:"Servlet",description:"Tips",source:"@site/notes/java/spec/servlet.md",slug:"/java/spec/servlet",permalink:"/notes/java/spec/servlet",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/spec/servlet.md",version:"current",sidebar:"docs",previous:{title:"Apache Wicket",permalink:"/notes/java/apache/wicket"},next:{title:"Java\u7248\u672c",permalink:"/notes/java/version/version"}},p=[{value:"Tips",id:"tips",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Good old tech",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u7528\u4e60\u60ef\u4e86 Spring \u7684\u5f00\u53d1\u8005\u8bf4\u4e0d\u5b9a\u90fd\u4e0d\u61c2 Servlet\uff0c\u56e0\u4e3a\u6ca1\u5fc5\u8981")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5e38\u7528\u7684\u7ed3\u6784")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"my-web\n  src\n    main\n      java\n      resources\n        webapp - \u9759\u6001 - \u542f\u52a8\u65f6\u5019\u9700\u8981\u914d\u7f6e\u8def\u5f84\n          WEB-INF\n            web.xml - servlet \u914d\u7f6e\n            index.html\n")))}s.isMDXComponent=!0},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);