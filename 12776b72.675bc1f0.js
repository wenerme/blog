(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),j=r,d=s["".concat(u,".").concat(j)]||s[j]||b[j]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var l=2;l<o;l++)u[l]=n[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1096)),u={title:"juju"},c={unversionedId:"devops/container/juju",id:"devops/container/juju",isDocsHomePage:!1,title:"juju",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/container/juju.md",slug:"/devops/container/juju",permalink:"/notes/devops/container/juju",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/juju.md",version:"current",sidebar:"docs",previous:{title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/container/container-faq"},next:{title:"Kaniko",permalink:"/notes/devops/container/kaniko"}},i=[{value:"Install",id:"install",children:[]},{value:"Tips",id:"tips",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Operator Lifecycle Manager (OLM) that provides model-driven application management and next-generation infrastructure-as-code"),Object(o.b)("li",{parentName:"ul"},"\u7531 Canonical \u5f00\u53d1"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://jujucharms.com/docs/stable/"},"Document"))),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# Ubuntu 16\napt update\napt install juju zfsutils-linux\n\n# Other\nadd-apt-repository ppa:juju/devel\napt update\napt install juju\n")),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"juju \u4e2d\u4f7f\u7528\u5230\u7684\u8def\u5f84 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/juju/juju/blob/master/juju/paths/paths.go"},"juju/paths/paths.go"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\n# \u53ef\u4f7f\u7528 --show-log \u548c --debug \u67e5\u770b\u65e5\u5fd7\njuju bootstrap testcloud manual/10.25.30.1\n# \u6dfb\u52a0\u5176\u4ed6\u673a\u5668\njuju add-machine ssh:root@10.25.30.2\n\n")))}p.isMDXComponent=!0}}]);