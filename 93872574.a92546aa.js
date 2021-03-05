(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{471:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return o}));var a=r(3),n=r(8),l=(r(0),r(787)),i={title:"Kratos"},c={unversionedId:"service/auth/kratos",id:"service/auth/kratos",isDocsHomePage:!1,title:"Kratos",description:"- API first \u7528\u6237\u7ba1\u7406",source:"@site/notes/service/auth/kratos.md",slug:"/service/auth/kratos",permalink:"/notes/service/auth/kratos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/kratos.md",version:"current",sidebar:"docs",previous:{title:"Keycloak",permalink:"/notes/service/auth/keycloak"},next:{title:"LDIF",permalink:"/notes/service/auth/ldif"}},b=[{value:"Flow",id:"flow",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"SDK",id:"sdk",children:[]},{value:"Serve",id:"serve",children:[]},{value:"Get Started",id:"get-started",children:[]}],s={toc:b};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"API first \u7528\u6237\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"Identity Infrastructure Service",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bf9\u6bd4 Identity and Access Management (IAM), Identity Management (IdM), Identity Provider (IP/IdP), Identity as a Service (IDaaS)"))),Object(l.b)("li",{parentName:"ul"},"Username + Password -> Cookie, Token"),Object(l.b)("li",{parentName:"ul"},"Email + Password -> Cookie, Token"),Object(l.b)("li",{parentName:"ul"},"Passwordless login -> Cookie, Token"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u5f53\u4f5c\u5e93\u6765\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u8981\u89e3\u51b3\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u51ed\u8bc1\u7ba1\u7406 - \u5bc6\u7801\u3001\u6062\u590d\u90ae\u7bb1\u3001\u5b89\u5168\u95ee\u9898"),Object(l.b)("li",{parentName:"ul"},"\u8ba4\u8bc1 - \u5b89\u5168\u767b\u5f55\u3001\u4f1a\u8bdd\u3001\u8bbe\u5907"),Object(l.b)("li",{parentName:"ul"},"\u8d26\u53f7\u4fe1\u606f\u7ba1\u7406 - profile\u3001\u90ae\u7bb1\u3001\u5bc6\u7801"),Object(l.b)("li",{parentName:"ul"},"\u8d26\u53f7\u7ba1\u7406 - CRUD"),Object(l.b)("li",{parentName:"ul"},"\u8eab\u4efd\u4fe1\u606f\u7ba1\u7406 - \u540d\u5b57\u3001\u7167\u7247\u3001\u751f\u65e5"))),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u573a\u666f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u6d89\u53ca\u7b2c\u4e09\u65b9\u767b\u9646\uff0c\u5e0c\u671b\u767b\u9646\u540e\u62ff\u5230 Token")))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u6d4f\u89c8\u5668\u4f7f\u7528 API flow - \u4f7f\u7528 HTML ",Object(l.b)("strong",{parentName:"li"},"form")),Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d\u4e0d\u652f\u6301 MFA - \u591a\u56e0\u7d20\u9a8c\u8bc1 - \u4e0d\u652f\u6301\u77ed\u4fe1"),Object(l.b)("li",{parentName:"ul"},"\u524d\u7aef\u9700\u8981\u81ea\u884c\u5b9e\u73b0\uff0c\u4f46\u76f8\u5bf9\u5bb9\u6613")))),Object(l.b)("h2",{id:"flow"},"Flow"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6ce8\u518c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/self-service/registration/browser"))),Object(l.b)("li",{parentName:"ul"},"\u767b\u9646",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/self-service/login/browser"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u9500"),Object(l.b)("li",{parentName:"ul"},"\u9a8c\u8bc1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/self-service/verification/methods/link?token=${TOKEN}")),Object(l.b)("li",{parentName:"ul"},"User Settings"),Object(l.b)("li",{parentName:"ul"},"Account Recovery"),Object(l.b)("li",{parentName:"ul"},"Address Verification"),Object(l.b)("li",{parentName:"ul"},"User-Facing Error"),Object(l.b)("li",{parentName:"ul"},"2FA / MFA")),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5bc6\u7801\u53c2\u6570\nkratos hashers argon2 calibrate 1s\n")),Object(l.b)("h2",{id:"sdk"},"SDK"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.ory.sh/kratos/docs/reference/api/"},"REST API")),Object(l.b)("li",{parentName:"ul"},"Go ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ory/kratos-client-go"},"client")),Object(l.b)("li",{parentName:"ul"},"Admin",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u4fe1\u606f\u63a5\u53e3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/health/alive"),Object(l.b)("li",{parentName:"ul"},"/health/ready"),Object(l.b)("li",{parentName:"ul"},"/metrics/prometheus"))),Object(l.b)("li",{parentName:"ul"},"\u4e1a\u52a1\u63a5\u53e3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/identities"),Object(l.b)("li",{parentName:"ul"},"/recovery/link"))))),Object(l.b)("li",{parentName:"ul"},"Public",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/schemas/{id}"),Object(l.b)("li",{parentName:"ul"},"/self-service/browser/flows/logout"),Object(l.b)("li",{parentName:"ul"},"/self-service/browser/flows/registration/strategies/oidc/settings/connections"),Object(l.b)("li",{parentName:"ul"},"/self-service/errors?error=string"),Object(l.b)("li",{parentName:"ul"},"/version"),Object(l.b)("li",{parentName:"ul"},"\u767b\u9646/login \u6d41\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/self-service/login/browser - \u521d\u59cb\u5316\u6d4f\u89c8\u5668\u767b\u9646\u6d41\u7a0b"),Object(l.b)("li",{parentName:"ul"},"/self-service/login/api - \u521d\u59cb\u5316 API \u767b\u9646\u6d41\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u6d4f\u89c8\u5668\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e \u79fb\u52a8\u8bbe\u5907\uff0c\u667a\u80fd\u7535\u89c6 \u7b49"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/self-service/login/flows?flow=string")," - \u83b7\u53d6\u6ce8\u518c\u6d41\u7a0b\u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/self-service/login/methods/password?flow=string")," - \u5b8c\u6210\u5bc6\u7801\u767b\u9646\u6d41\u7a0b"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u518c/registration \u6d41\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/self-service/registration/browser"),Object(l.b)("li",{parentName:"ul"},"/self-service/registration/api"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/self-service/registration/flows?flow=string")),Object(l.b)("li",{parentName:"ul"},"/self-service/registration/methods/password"))),Object(l.b)("li",{parentName:"ul"},"\u6062\u590d/recovery \u6d41\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/self-service/recovery/browser"),Object(l.b)("li",{parentName:"ul"},"/self-service/recovery/api"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/self-service/recovery/flows?id=string")),Object(l.b)("li",{parentName:"ul"},"/self-service/recovery/methods/link"))),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e/setting",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/self-service/settings/api"),Object(l.b)("li",{parentName:"ul"},"/self-service/settings/browser/flows"),Object(l.b)("li",{parentName:"ul"},"/self-service/settings/flows?id=string"),Object(l.b)("li",{parentName:"ul"},"/self-service/settings/methods/password - \u4fee\u6539\u5bc6\u7801"),Object(l.b)("li",{parentName:"ul"},"/self-service/settings/methods/profile - \u4fee\u6539\u4fe1\u606f"))),Object(l.b)("li",{parentName:"ul"},"\u9a8c\u8bc1/verification",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/self-service/verification/api"),Object(l.b)("li",{parentName:"ul"},"/self-service/verification/browser"),Object(l.b)("li",{parentName:"ul"},"/self-service/verification/flows?id=string"),Object(l.b)("li",{parentName:"ul"},"/self-service/verification/methods/link"))),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u8bdd\u7ba1\u7406",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"DELETE /sessions - ",Object(l.b)("inlineCode",{parentName:"li"},'{"session_token": "string"}')),Object(l.b)("li",{parentName:"ul"},"GET /sessions/whoami")))))),Object(l.b)("h2",{id:"serve"},"Serve"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"export DSN=sqlite:///tmp/kratos.sqlite?_fk=true\n./kratos -c ./contrib/quickstart/kratos/email-password migrate sql -e --yes\nLOG_LEVEL=trace ./kratos serve -c /etc/config/kratos/kratos.yml --dev\n")),Object(l.b)("h2",{id:"get-started"},"Get Started"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ory/kratos.git\ncd kratos\n# \u5207\u6362\u5230\u6700\u65b0\u7248\u672c\ngit checkout v0.5.4-alpha.1\n\ndocker pull oryd/kratos:latest-sqlite\ndocker pull oryd/kratos-selfservice-ui-node:latest\n# 4455 - http://github.com/ory/kratos-selfservice-ui-node\n# 4433 - Kratos Public API\n# 4434 - Kratos Admin API\n# 4436 - https://github.com/mailslurper - \u5f00\u53d1\u7528\u7684 SMTP \u670d\u52a1\u5668\n# \u5165\u53e3 http://127.0.0.1:4455/dashboard\ndocker-compose -f quickstart.yml -f quickstart-standalone.yml up --build --force-recreate\n\n# \u6e05\u7406\ndocker-compose -f quickstart.yml down -v\ndocker-compose -f quickstart.yml rm -fsv\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"/dashboard -> /auth/login",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u672a\u767b\u5f55\u91cd\u5b9a\u5411"))),Object(l.b)("li",{parentName:"ul"},"/auth/login -> ",Object(l.b)("a",{parentName:"li",href:"http://127.0.0.1:4433/self-service/login/browser"},"http://127.0.0.1:4433/self-service/login/browser"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e0 flowid \u91cd\u5b9a\u5411"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e cookie csrf_token"))),Object(l.b)("li",{parentName:"ul"},"-> ",Object(l.b)("inlineCode",{parentName:"li"},"/auth/login?flow=<flow_id>"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u663e\u793a\u767b\u9646"))),Object(l.b)("li",{parentName:"ul"},"-> ",Object(l.b)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/login/flows?id=<flow_id>"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8868\u5355\u63d0\u4ea4")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u767b\u9646\u4fe1\u606f\ncurl -s "http://127.0.0.1:4434/self-service/login/flows?id=<flow_id>" | jq\n\n# \u6ce8\u518c\u4fe1\u606f\ncurl -s "http://127.0.0.1:4434/self-service/registration/flows?id=<flow_id>" | jq\n')))}o.isMDXComponent=!0},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),o=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=o(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,O=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return r?n.a.createElement(O,c(c({ref:t},s),{},{components:r})):n.a.createElement(O,c({ref:t},s))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);