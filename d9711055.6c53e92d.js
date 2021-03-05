(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{691:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),i=(n(0),n(787)),a={title:"ifupdown"},c={unversionedId:"os/busybox/ifupdown",id:"os/busybox/ifupdown",isDocsHomePage:!1,title:"ifupdown",description:"Tips",source:"@site/notes/os/busybox/ifupdown.md",slug:"/os/busybox/ifupdown",permalink:"/notes/os/busybox/ifupdown",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/ifupdown.md",version:"current",sidebar:"docs",previous:{title:"centos-version",permalink:"/notes/os/centos/centos-version"},next:{title:"udhcpc",permalink:"/notes/os/busybox/udhcpc"}},u=[{value:"Tips",id:"tips",children:[]}],p={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://sourcegraph.com/github.com/mirror/busybox/-/blob/networking/ifupdown.c"},"networking/ifupdown.c")),Object(i.b)("li",{parentName:"ul"},"\u5904\u7406 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/network/interfaces")),Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b ifup \u548c ifdown"),Object(i.b)("li",{parentName:"ul"},"\u53ea\u5904\u7406 auto"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/var/run/ifstate")," \u8bb0\u5f55\u72b6\u6001 - \u6709\u53ef\u80fd\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/network/run/ifstate")),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u65b9\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"inet - manual wvdial ppp static bootp dhcp loopback"),Object(i.b)("li",{parentName:"ul"},"inet6 - static manual loopback v4tunnel"))),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 ip \u6216 ifconfig \u8fdb\u884c\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"dhcp \u5ba2\u6237\u7aef\u652f\u6301 - dhcpcd dhclient pump udhcpc"),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 hotplug")))))}l.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,m=b["".concat(a,".").concat(f)]||b[f]||s[f]||i;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);