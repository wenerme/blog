(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{481:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(787)),o={id:"http",title:"HTTP"},c={unversionedId:"ops/network/application/http",id:"ops/network/application/http",isDocsHomePage:!1,title:"HTTP",description:"Tips",source:"@site/notes/ops/network/application/http.md",slug:"/ops/network/application/http",permalink:"/notes/ops/network/application/http",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/application/http.md",version:"current",sidebar:"docs",previous:{title:"DNS",permalink:"/notes/ops/network/application/dns"},next:{title:"SSL",permalink:"/notes/ops/network/application/ssl"}},l=[{value:"Tips",id:"tips",children:[]},{value:"CORS",id:"cors",children:[]},{value:"HTTP2",id:"http2",children:[]},{value:"QUIC",id:"quic",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"301 vs 302",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"301 Moved Permanently"),Object(i.b)("li",{parentName:"ul"},"302 Found / Moved Temporarily")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# \u5355\u4f4d\u4e3a\u79d2\nCache-Control: public, max-age=3600\nExpires: Thu, 01 Dec 2014 16:00:00 GMT\n")),Object(i.b)("h2",{id:"cors"},"CORS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5141\u8bb8\u5934",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Cache-Control"),Object(i.b)("li",{parentName:"ul"},"Content-Language"),Object(i.b)("li",{parentName:"ul"},"Content-Type"),Object(i.b)("li",{parentName:"ul"},"Expires"),Object(i.b)("li",{parentName:"ul"},"Last-Modified"),Object(i.b)("li",{parentName:"ul"},"Pragma"))),Object(i.b)("li",{parentName:"ul"},"access-control-expose-headers - \u63a7\u5236\u66b4\u9732\u5934")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# \u8bf7\u6c42\nAccess-Control-Request-Headers: authorization\nAccess-Control-Request-Method: GET\n\n# \u54cd\u5e94\nAccess-Control-Allow-Headers: authorization\nAccess-Control-Allow-Methods: POST,GET\nAccess-Control-Allow-Origin: http://127.0.0.1:3000\n")),Object(i.b)("h2",{id:"http2"},"HTTP2"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/http2-and-spdy-indicator/mpbpobfflnpcgagjijhmgnchggcjblin"},"HTTP/2 and SPDY indicator")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"chrome://net-internals/#http2"},"chrome://net-internals/#http2"))),Object(i.b)("h2",{id:"quic"},"QUIC"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Quick UDP Internet Connections"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/FelisCatus/SwitchyOmega/issues/706"},"SwitchyOmega#706")," - Support QUIC proxies"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"chrome://net-internals/#quic"},"chrome://net-internals/#quic")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/QUIC"},"https://en.wikipedia.org/wiki/QUIC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/curl/curl/wiki/QUIC"},"https://github.com/curl/curl/wiki/QUIC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.chromium.org/quic"},"https://www.chromium.org/quic")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/mholt/caddy/wiki/QUIC"},"https://github.com/mholt/caddy/wiki/QUIC")),Object(i.b)("li",{parentName:"ul"},"QUIC \u5e0c\u671b\u80fd\u591f\u63d0\u4f9b\u7b49\u540c\u4e8e SSL/TLS \u5c42\u7ea7\u7684\u7f51\u7edc\u5b89\u5168\u4fdd\u62a4\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u53ca\u521b\u5efa\u8fde\u63a5\u65f6\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u53cc\u5411\u63a7\u5236\u5e26\u5bbd\uff0c\u4ee5\u907f\u514d\u7f51\u7edc\u62e5\u585e\u3002")))}u.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,O=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(O,c(c({ref:t},p),{},{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);