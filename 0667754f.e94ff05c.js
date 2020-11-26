(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{68:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(2),o=n(7),a=(n(0),n(682)),c={title:"Nano Server"},i={unversionedId:"os/windows/nano-server",id:"os/windows/nano-server",isDocsHomePage:!1,title:"Nano Server",description:"Nano Server",source:"@site/notes/os/windows/nano-server.md",slug:"/os/windows/nano-server",permalink:"/notes/os/windows/nano-server",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/nano-server.md",version:"current"},l=[],u={rightToc:l};function s(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"nano-server"},"Nano Server"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Windows Server \u5bb9\u5668\u955c\u50cf"),Object(a.b)("li",{parentName:"ul"},"\u65e0\u754c\u9762\uff0c\u65e0\u8fdc\u7a0b\u684c\u9762\uff0c\u4e13\u95e8\u7528\u4e8e\u865a\u62df\u5316\u548c\u4e91\u73af\u5883"),Object(a.b)("li",{parentName:"ul"},"\u79fb\u9664 WoW64 - \u4e0d\u652f\u6301 32 \u4f4d"),Object(a.b)("li",{parentName:"ul"},"\u79fb\u9664 Windows Installer"),Object(a.b)("li",{parentName:"ul"},"\u53ea\u80fd\u5728\u5bb9\u5668\u4e3b\u673a\u4e2d\u5b89\u88c5"),Object(a.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e .NET Core \u5e94\u7528"))),Object(a.b)("li",{parentName:"ul"},"Windows Server \u7248\u672c\u9700\u8981\u5339\u914d\u955c\u50cf\u7248\u672c")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# \u57fa\u7840\u955c\u50cf\n# https://hub.docker.com/_/microsoft-windows-nanoserver\ndocker pull mcr.microsoft.com/windows/nanoserver\n")))}s.isMDXComponent=!0},682:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=t,f=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(f,i(i({ref:r},u),{},{components:n})):o.a.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);