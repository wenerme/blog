(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(7),o=(r(0),r(625)),i={id:"k8s-version"},c={unversionedId:"devops/kubernetes/k8s-version",id:"devops/kubernetes/k8s-version",isDocsHomePage:!1,title:"k8s-version",description:"Kubernetes \u7248\u672c",source:"@site/notes/devops/kubernetes/k8s-version.md",slug:"/devops/kubernetes/k8s-version",permalink:"/notes/devops/kubernetes/k8s-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-version.md",version:"current"},u=[{value:"1.19",id:"119",children:[]}],s={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"kubernetes-\u7248\u672c"},"Kubernetes \u7248\u672c"),Object(o.b)("h2",{id:"119"},"1.19"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.19.md"}),"CHANGELOG-1.19")),Object(o.b)("li",{parentName:"ul"},"EndpointSlices \u9ed8\u8ba4\u542f\u7528"),Object(o.b)("li",{parentName:"ul"},"Ingress GA"),Object(o.b)("li",{parentName:"ul"},"seccomp GA"),Object(o.b)("li",{parentName:"ul"},"KubeSchedulerConfiguration Beta"),Object(o.b)("li",{parentName:"ul"},"\u5b58\u50a8\u5bb9\u91cf\u8ddf\u8e2a - Alpha",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e4b\u524d\u8c03\u5ea6\u65f6\u90fd\u4e0d\u4f1a\u8003\u8651\u8282\u70b9\u5b58\u50a8\u5bb9\u91cf"))),Object(o.b)("li",{parentName:"ul"},"\u901a\u7528\u4e34\u65f6\u5b58\u50a8\u5377"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u53ef\u53d8\u7684 Secrets \u548c ConfigMaps - Beta"),Object(o.b)("li",{parentName:"ul"},"kubernetes/dashboard v2"),Object(o.b)("li",{parentName:"ul"},"\u901a\u7528 ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/"}),"ephemeral volumes"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\u4e0e pod \u7ed1\u5b9a"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u4f7f\u7528\u52a8\u6001 provisioning \u5b58\u50a8\u4f5c\u4e3a\u4e34\u65f6\u5377 - ALPHA")))))}l.isMDXComponent=!0},625:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);