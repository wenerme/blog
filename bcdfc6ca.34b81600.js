(window.webpackJsonp=window.webpackJsonp||[]).push([[779],{1096:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),s=n,d=u["".concat(b,".").concat(s)]||u[s]||m[s]||l;return a?r.a.createElement(d,c(c({ref:t},p),{},{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},852:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),l=(a(0),a(1096)),b={id:"db-schema",title:"Tenant DB Schema"},c={unversionedId:"devops/xaas/db-schema",id:"devops/xaas/db-schema",isDocsHomePage:!1,title:"Tenant DB Schema",description:"Database Schema for multi-tendency",source:"@site/notes/devops/xaas/db-schema.md",slug:"/devops/xaas/db-schema",permalink:"/notes/devops/xaas/db-schema",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/xaas/db-schema.md",version:"current",sidebar:"docs",previous:{title:"Tyk",permalink:"/notes/devops/web/tyk"},next:{title:"Dokku",permalink:"/notes/devops/xaas/paas/dokku"}},i=[{value:"FAQ",id:"faq",children:[{value:"Tenant Schema vs Shared Table vs Tenant View",id:"tenant-schema-vs-shared-table-vs-tenant-view",children:[]}]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"database-schema-for-multi-tendency"},"Database Schema for multi-tendency"),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"tenant-schema-vs-shared-table-vs-tenant-view"},"Tenant Schema vs Shared Table vs Tenant View"),Object(l.b)("p",null,"\u79df\u6237\u6570\u636e\u5e93\u8bbe\u8ba1\u4e0e\u79df\u6237\u573a\u666f\u5173\u7cfb"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u5e94\u7528\u573a\u666f"),Object(l.b)("th",{parentName:"tr",align:null},"Tenant Schema",Object(l.b)("br",null),"\u79df\u6237\u5e93"),Object(l.b)("th",{parentName:"tr",align:null},"Shared Table",Object(l.b)("br",null),"\u5171\u4eab\u8868"),Object(l.b)("th",{parentName:"tr",align:null},"Tenant View",Object(l.b)("br",null),"\u79df\u6237\u89c6\u56fe"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u79df\u6237\u591a\u5c11"),Object(l.b)("td",{parentName:"tr",align:null},"\u5c11"),Object(l.b)("td",{parentName:"tr",align:null},"\u591a"),Object(l.b)("td",{parentName:"tr",align:null},"\u591a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u79df\u6237\u5927\u5c0f"),Object(l.b)("td",{parentName:"tr",align:null},"\u5927"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e2d"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e2d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u79df\u6237\u5b9a\u5236"),Object(l.b)("td",{parentName:"tr",align:null},"\u9ad8"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f4e"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f4e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u7ef4\u62a4\u6210\u672c"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e2d"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f4e"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e2d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u6210\u672c"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f4e"),Object(l.b)("td",{parentName:"tr",align:null},"\u9ad8"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f4e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u5b89\u5168\u9694\u79bb"),Object(l.b)("td",{parentName:"tr",align:null},"\u9ad8"),Object(l.b)("td",{parentName:"tr",align:null},"\u4f4e"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e2d")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Tenant Schema"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bf9\u5f00\u53d1\u53cb\u597d\uff0c\u9002\u7528\u4e8e\u5927\u578b\u5f3a\u4e1a\u52a1\u79df\u6237"),Object(l.b)("li",{parentName:"ul"},"\u79df\u6237\u591a\u65f6 Schema \u5347\u7ea7\u96be"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Shared Table"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u79df\u6237\u5185\u5bb9\u76f8\u5bf9\u7b80\u5355\uff0c\u4f46\u79df\u6237\u91cf\u7279\u522b\u591a\u7684\u573a\u666f"),Object(l.b)("li",{parentName:"ul"},"\u5355\u4e00 Schema\uff0c\u7ed3\u6784\u7ef4\u62a4\u7b80\u5355\uff0c\u4f46\u53ea\u80fd\u4f7f\u7528\u540c\u4e00\u7248\u672c\u7ed3\u6784\uff0c\u4e0d\u80fd\u5b9a\u5236\u8868\u5217"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Tenant View"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f9d\u8d56 DB \u7279\u6027\uff0c\u4f8b\u5982 PG \u7684\u53ef\u5199\u89c6\u56fe\uff0cMySQL \u4e0d\u652f\u6301\u8fd9\u79cd\u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u4e24\u8005\u7684\u4e00\u4e2a\u7efc\u5408\uff0c\u96c6\u6210\u4e86\u4e24\u8005\u4e0d\u597d\u7684\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u4f46\u5bf9\u5f00\u53d1\u76f8\u5bf9\u53cb\u597d\u4e00\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u5b9a\u5236\u5316\u53ef\u901a\u8fc7\u8868\u7684 JSON \u5b57\u6bb5\uff0c\u5728 \u79df\u6237\u89c6\u56fe \u4e2d\u4f5c\u4e3a\u5217\uff0c\u4f46\u65e0\u6cd5\u66f4\u65b0 - \u5b9e\u73b0\u66f4\u65b0\u53ef\u4ee5\u4f7f\u7528 trigger\u6216rule\uff0c\u4f46\u76f8\u5bf9\u9ebb\u70e6"),Object(l.b)("li",{parentName:"ul"},"\u5b9a\u5236\u5316\u4e5f\u53ef\u4ee5\u901a\u8fc7 JOIN \u5916\u90e8\u8868\u5b9e\u73b0"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/44524364"},"PostgreSQL's schemas for multi-tenant applications")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.citusdata.com/en/latest/articles/designing_saas.html"},"Designing your SaaS Database for Scale with Postgres"))))))}o.isMDXComponent=!0}}]);