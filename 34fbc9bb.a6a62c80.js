(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1096:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,y=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return r?o.a.createElement(y,c(c({ref:t},s),{},{components:r})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),a=(r(0),r(1096)),i={title:"Storybook"},c={unversionedId:"web/ui/storybook",id:"web/ui/storybook",isDocsHomePage:!1,title:"Storybook",description:"Tips",source:"@site/notes/web/ui/storybook.md",slug:"/web/ui/storybook",permalink:"/notes/web/ui/storybook",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/ui/storybook.md",version:"current",sidebar:"docs",previous:{title:"Playroom",permalink:"/notes/web/ui/playroom"},next:{title:"UI Awesome",permalink:"/notes/web/ui/ui-awesome"}},b=[{value:"Tips",id:"tips",children:[]}],s={toc:b};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/zeit/next.js/tree/canary/examples/with-storybook"},"nextjs/examples/with-storybook")),Object(a.b)("li",{parentName:"ul"},"\u63d2\u4ef6 - ",Object(a.b)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/tree/next/addons"},"addons"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"actions - \u7eaa\u5f55\u4e8b\u4ef6"),Object(a.b)("li",{parentName:"ul"},"links - \u5185\u90e8\u8df3\u8f6c"),Object(a.b)("li",{parentName:"ul"},"storysource - \u67e5\u770b\u6e90\u7801"),Object(a.b)("li",{parentName:"ul"},"viewport - \u4e0d\u540c\u8bbe\u5907\u89c6\u56fe"),Object(a.b)("li",{parentName:"ul"},"toolbars - \u5de5\u5177\u680f\u3001\u4e0a\u4e0b\u6587\u53c2\u6570"))),Object(a.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"bundle \u8fc7\u5927 - ",Object(a.b)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/issues/6391#issuecomment-530262331"},"#6391"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"webpack \u62c6\u5206"))),Object(a.b)("li",{parentName:"ul"},"npm 7+react 17 \u517c\u5bb9\u95ee\u9898 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/issues/14065"},"#14065"))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316\nnpx sb init\n\n# \u624b\u52a8\u5b89\u88c5\nyarn add --dev @storybook/{react,addons}\nyarn add --dev @storybook/addon-{actions,links,knob}\n")))}l.isMDXComponent=!0}}]);