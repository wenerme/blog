(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1096:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},326:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(1096)),c={title:"Auth Awesome"},i={unversionedId:"service/auth/auth-awesome",id:"service/auth/auth-awesome",isDocsHomePage:!1,title:"Auth Awesome",description:"* IAM - Identity and Access Management",source:"@site/notes/service/auth/auth-awesome.md",slug:"/service/auth/auth-awesome",permalink:"/notes/service/auth/auth-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/auth-awesome.md",version:"current",sidebar:"docs",previous:{title:"Apache Directory",permalink:"/notes/service/auth/apacheds"},next:{title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/auth/auth-faq"}},l=[{value:"Authorization",id:"authorization",children:[]},{value:"IAM",id:"iam",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"IAM - Identity and Access Management"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/kdeldycke/awesome-iam"},"kdeldycke/awesome-iam"))),Object(o.b)("h2",{id:"authorization"},"Authorization"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Google Cloud",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/policies"},"Policies")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/permissions-reference"},"IAM permissions reference")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.google.com/apis/design/resource_names"},"\u8d44\u6e90\u540d\u79f0"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"//{api}/{collection-id}/{resource-id}(/{collection-id}/{resource-id})*")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"//mail.googleapis.com/users/name@example.com/settings/customFrom")),Object(o.b)("li",{parentName:"ul"},"\u65e0\u4f20\u8f93\u534f\u8bae")))))),Object(o.b)("h2",{id:"iam"},"IAM"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gist.github.com/bmaupin/6878fae9abcb63ef43f8ac9b9de8fafd"},"compare open-source-sso")),Object(o.b)("li",{parentName:"ul"},"OpenIAM"),Object(o.b)("li",{parentName:"ul"},"Apache Syncope"),Object(o.b)("li",{parentName:"ul"},"FreeIPA"),Object(o.b)("li",{parentName:"ul"},"WSO2"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/keycloak/keycloak"},"keycloak/keycloak")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/apereo/cas"},"apereo/cas")," - Central Authentication Service")),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Google ",Object(o.b)("a",{parentName:"li",href:"https://support.google.com/gsa/answer/6329233"},"Authentication/Authorization for Enterprise SPI Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://itnext.io/7c054a009c52"},"How to Design a Permissions Framework"))))}p.isMDXComponent=!0}}]);