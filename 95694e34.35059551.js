(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{351:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(7),a=(r(0),r(556)),i={id:"k8s-api",title:"Kubernates \u63a5\u53e3"},c={unversionedId:"devops/kubernetes/k8s-api",id:"devops/kubernetes/k8s-api",isDocsHomePage:!1,title:"Kubernates \u63a5\u53e3",description:"Kubernates \u63a5\u53e3",source:"@site/contents/tricks/devops/kubernetes/k8s-api.md",slug:"/devops/kubernetes/k8s-api",permalink:"/notes/devops/kubernetes/k8s-api",version:"current"},s=[{value:"Tips",id:"tips",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"kubernates-\u63a5\u53e3"},"Kubernates \u63a5\u53e3"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/"}),"\u5b9a\u4e49\u6587\u6863"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u6240\u6709\u5bf9\u8c61\u7684\u5b57\u6bb5\u8bf4\u660e\u548c\u5b9a\u4e49"))),Object(a.b)("li",{parentName:"ul"},"\u5206\u7c7b",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Workloads are objects you use to manage and run your containers on the cluster."),Object(a.b)("li",{parentName:"ul"},'Discovery & LB resources are objects you use to "stitch" your workloads together into an externally accessible, load-balanced Service.'),Object(a.b)("li",{parentName:"ul"},"Config & Storage resources are objects you use to inject initialization data into your applications, and to persist data that is external to your container."),Object(a.b)("li",{parentName:"ul"},"Cluster resources objects define how the cluster itself is configured; these are typically used only by cluster operators."),Object(a.b)("li",{parentName:"ul"},"Metadata resources are objects you use to configure the behavior of other resources within the cluster, such as HorizontalPodAutoscaler for scaling workloads.")))))}l.isMDXComponent=!0},556:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);