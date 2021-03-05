(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),o=(n(0),n(787)),a={id:"ignite"},c={unversionedId:"os/virt/ignite",id:"os/virt/ignite",isDocsHomePage:!1,title:"ignite",description:"ignite",source:"@site/notes/os/virt/ignite.md",slug:"/os/virt/ignite",permalink:"/notes/os/virt/ignite",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/ignite.md",version:"current",sidebar:"docs",previous:{title:"HyperV",permalink:"/notes/os/virt/hyperv"},next:{title:"KSM",permalink:"/notes/os/virt/ksm"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ignite"},"ignite"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u50cf Docker \u7ba1\u7406\u5bb9\u5668\u4e00\u6837\u7ba1\u7406 Firecracker MicroVM"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 OCI \u955c\u50cf/Docker\u955c\u50cf"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/weaveworks/ignite"},"weaveworks/ignite")),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 CNI \u7ba1\u7406\u7f51\u7edc"),Object(o.b)("li",{parentName:"ul"},"\u76ee\u524d\u4f7f\u7528\u9700\u8981 root\uff0cfirecracker \u662f\u4e0d\u9700\u8981\u7684")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"latest=$(basename $(curl -fsSLI -o /dev/null -w  %{url_effective} https://github.com/weaveworks/ignite/releases/latest))\n# amd64\ncurl --remote-name-all -LC- https://github.com/weaveworks/ignite/releases/download/${latest}/{ignite,ignited}-amd64\nmv ignite-amd64 ignite\nmv ignited-amd64 ignited\nchmod +x ignite ignited\n")))}s.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||m[b]||o;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);