(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1114:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},393:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(1114)),c={title:"JavaScript Awesome"},i={unversionedId:"web/js/js-awesome",id:"web/js/js-awesome",isDocsHomePage:!1,title:"JavaScript Awesome",description:"Tricks",source:"@site/notes/web/js/js-awesome.md",slug:"/web/js/js-awesome",permalink:"/notes/web/js/js-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/js/js-awesome.md",version:"current",sidebar:"docs",previous:{title:"Slate",permalink:"/notes/web/editor/slate"},next:{title:"JSON Schema",permalink:"/notes/web/script/jsonschema"}},l=[{value:"Tricks",id:"tricks",children:[]},{value:"UI",id:"ui",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tricks"},"Tricks"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://bannedit.github.io/Virtual-Machine-Detection-In-The-Browser.html"},"Virtual Machine Detection In The Browser"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"var canvas = document.createElement('canvas');\nvar gl = canvas.getContext('webgl');\n\nvar debugInfo = gl.getExtension('WEBGL_debug_renderer_info');\nvar vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);\nvar renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);\n\nconsole.log(vendor);\nconsole.log(renderer);\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/enkimute/ganja.js"},"enkimute/ganja.js")," - \u51e0\u4f55\u4ee3\u6570")),Object(o.b)("h2",{id:"ui"},"UI"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"react like",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"preact"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ryansolid/solid"},"ryansolid/solid"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5feb\u3001\u5c0f\u3001\u7c7b React"),Object(o.b)("li",{parentName:"ul"},"jsx \u76f4\u63a5\u9884\u5148\u751f\u6210 dom \u6a21\u677f\uff0c\u5c5e\u6027\u53d8\u5316\u52a8\u6001\u63d2\u5165\u5230 dom \u91cc - \u6ca1\u6709 react \u7684 vdom \u6bd4\u8f83\u5408\u5e76"))))),Object(o.b)("li",{parentName:"ul"},"tiny",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/jorgebucaran/hyperapp"},"jorgebucaran/hyperapp"))))))}s.isMDXComponent=!0}}]);