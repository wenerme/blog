(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{1114:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,O=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return r?a.a.createElement(O,i(i({ref:t},o),{},{components:r})):a.a.createElement(O,i({ref:t},o))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},601:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),l=(r(0),r(1114)),c={id:"vault-secret",title:"Vault \u5bc6\u94a5\u5f15\u64ce"},i={unversionedId:"ops/service/vault-secret",id:"ops/service/vault-secret",isDocsHomePage:!1,title:"Vault \u5bc6\u94a5\u5f15\u64ce",description:"* ad - Active Directory",source:"@site/notes/ops/service/vault-secret.md",slug:"/ops/service/vault-secret",permalink:"/notes/ops/service/vault-secret",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/vault-secret.md",version:"current",sidebar:"docs",previous:{title:"Vault on Kubernetes",permalink:"/notes/ops/service/vault-k8s"},next:{title:"Vault",permalink:"/notes/ops/service/vault"}},u=[{value:"consul",id:"consul",children:[]}],o={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ad - Active Directory",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"password rotation"),Object(l.b)("li",{parentName:"ul"},"service account check-out"))),Object(l.b)("li",{parentName:"ul"},"alicloud - \u963f\u91cc\u4e91",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e RAM \u7b56\u7565\u751f\u6210 token",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f1a\u6709\u65f6\u95f4\u9650\u5236\uff0c\u81ea\u52a8 revoke"))),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e RAM \u89d2\u8272\u751f\u6210 STS \u6388\u6743\u4fe1\u606f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u77ed\u671f\u3001\u4e0d\u53ef\u5237\u65b0"))))),Object(l.b)("li",{parentName:"ul"},"cubbyhole - token \u72ec\u7acb\u7a7a\u95f4 - \u7c7b\u4f3c\u4e8e session/cookie"),Object(l.b)("li",{parentName:"ul"},"consul",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u7b56\u7565\u751f\u6210 Token"))),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93 - ",Object(l.b)("inlineCode",{parentName:"li"},"<type>-database-plugin")," - \u57fa\u4e8e\u914d\u7f6e\u7684\u89d2\u8272\u52a8\u6001\u751f\u6210\u6388\u6743",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cassandra"),Object(l.b)("li",{parentName:"ul"},"elasticsearch"),Object(l.b)("li",{parentName:"ul"},"mysql",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"mysql-database-plugin"),Object(l.b)("li",{parentName:"ul"},"mysql-aurora-database-plugin"),Object(l.b)("li",{parentName:"ul"},"mysql-rds-database-plugin"),Object(l.b)("li",{parentName:"ul"},"mysql-legacy-database-plugin"))),Object(l.b)("li",{parentName:"ul"},"postgresql"))),Object(l.b)("li",{parentName:"ul"},"kv"),Object(l.b)("li",{parentName:"ul"},"identity - Vault \u81ea\u8eab\u6388\u6743"),Object(l.b)("li",{parentName:"ul"},"nomad"),Object(l.b)("li",{parentName:"ul"},"openldap - LDAP v3"),Object(l.b)("li",{parentName:"ul"},"pki - \u52a8\u6001\u751f\u6210 X.509 \u8bc1\u4e66",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u51cf\u5c11\u8bc1\u4e66\u65f6\u9650\uff0c\u6bcf\u4e2a\u5e94\u7528\u53ef\u7528\u72ec\u7acb\u8bc1\u4e66\uff0c\u907f\u514d\u8bc1\u4e66\u5171\u4eab\u4ea4\u6362"))),Object(l.b)("li",{parentName:"ul"},"rabbitmq"),Object(l.b)("li",{parentName:"ul"},"ssh - SSH \u6388\u6743\u8ba4\u8bc1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bc1\u4e66\u7b7e\u53d1"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u5bc6\u7801"),Object(l.b)("li",{parentName:"ul"},"~\u52a8\u6001 Key~ - \u5e9f\u5f03"))),Object(l.b)("li",{parentName:"ul"},"totp"),Object(l.b)("li",{parentName:"ul"},"transit - \u63d0\u4f9b\u52a0\u5bc6\u89e3\u5bc6\u529f\u80fd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"cryptography as a service / encryption as a service")))),Object(l.b)("h2",{id:"consul"},"consul"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"vault secrets enable consul\n\nvault write consul/config/access \\\n    address=127.0.0.1:8500 \\\n    token=E2A500CD-0599-409E-949B-E321135FAAD5\n")))}b.isMDXComponent=!0}}]);