(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{1114:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,O=u["".concat(l,".").concat(s)]||u[s]||m[s]||c;return r?a.a.createElement(O,o(o({ref:t},b),{},{components:r})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<c;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},650:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),c=(r(0),r(1114)),l={title:"\u6e38\u620f\u52a0\u901f\u5668"},o={unversionedId:"evolve/network-accel-design",id:"evolve/network-accel-design",isDocsHomePage:!1,title:"\u6e38\u620f\u52a0\u901f\u5668",description:"* DNS \u670d\u52a1",source:"@site/notes/evolve/network-accel-design.md",slug:"/evolve/network-accel-design",permalink:"/notes/evolve/network-accel-design",editUrl:"https://github.com/wenerme/wener/edit/master/notes/evolve/network-accel-design.md",version:"current"},i=[],b={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"DNS \u670d\u52a1"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DNS \u83b7\u53d6\u5230 IP \u548c\u57df\u540d\u6620\u5c04"),Object(c.b)("li",{parentName:"ul"},"DNS \u4e0a\u6e38\u5c3d\u91cf\u4f7f\u7528 dnscrypt"),Object(c.b)("li",{parentName:"ul"},"\u5c3d\u91cf\u5f00\u542f DNSSEC"),Object(c.b)("li",{parentName:"ul"},"\u6700\u597d\u80fd\u9884\u5224 IP \u662f\u5426\u901a",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u51cf\u6162 DNS \u89e3\u6790"))),Object(c.b)("li",{parentName:"ul"},"SQLite \u8bb0\u5f55\u67e5\u8be2 - \u65b9\u4fbf\u8ddf\u8e2a\u6392\u67e5\u548c\u751f\u6210\u8def\u7531"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8def\u7531\u6a21\u5f0f\u63a5\u5165"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u8def\u7531\u4ee3\u7406/\u900f\u660e\u4ee3\u7406 - \u4f7f\u7528\u65b9\u4fbf"),Object(c.b)("li",{parentName:"ul"},"\u5b9e\u65f6\u751f\u6210 ip ro \u8def\u7531"),Object(c.b)("li",{parentName:"ul"},"\u8282\u70b9\u4f5c\u4e3a AP"),Object(c.b)("li",{parentName:"ul"},"\u9700\u8981\u5f00\u542f DHCP"),Object(c.b)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u63a5\u6536\u8f6c\u53d1\u7684\u8282\u70b9 - \u4f8b\u5982 tinc \u7ec4\u7f51"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u670d\u52a1\u6a21\u5f0f\u63a5\u5165"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u9700\u8981\u914d\u7f6e\u8282\u70b9\u548c\u8282\u70b9\u652f\u6301\u534f\u8bae"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u52a0\u7075\u6d3b\u7ec4\u7f51"),Object(c.b)("li",{parentName:"ul"},"HTTP Proxy \u6700\u901a\u7528",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u76f4\u63a5\u77e5\u9053\u4ee3\u7406\u57df\u540d"),Object(c.b)("li",{parentName:"ul"},"\u53ef\u6309\u9700\u8f6c\u53d1"),Object(c.b)("li",{parentName:"ul"},"TCP \u534f\u8bae"))),Object(c.b)("li",{parentName:"ul"},"SOCKS \u53ef\u5b9e\u65f6\u5224\u65ad IP \u51b3\u5b9a\u662f\u5426\u8def\u7531",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u8def\u7531 icmp \u548c udp"))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"DNS \u53c2\u8003"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/AdguardTeam/dnsproxy"},"https://github.com/AdguardTeam/dnsproxy")," - DoH, DoT, DoQ, DNSCrypt"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ameshkov/dnslookup"},"https://github.com/ameshkov/dnslookup")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/d2g/dnsforwarder/blob/master/server.go"},"https://github.com/d2g/dnsforwarder/blob/master/server.go"))))))}p.isMDXComponent=!0}}]);