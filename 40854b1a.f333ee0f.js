(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{250:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),l=(r(0),r(787)),i={title:"Slate"},o={unversionedId:"web/editor/slate",id:"web/editor/slate",isDocsHomePage:!1,title:"Slate",description:"Tips",source:"@site/notes/web/editor/slate.md",slug:"/web/editor/slate",permalink:"/notes/web/editor/slate",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/editor/slate.md",version:"current",sidebar:"docs",previous:{title:"Single SPA",permalink:"/notes/web/arch/single-spa"},next:{title:"JavaScript Awesome",permalink:"/notes/web/js/js-awesome"}},c=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 onDOMBeforeInput",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-ondombeforeinput",children:[]}]}],b={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Slatejs",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.slatejs.org/"},"\u6587\u6863")))),Object(l.b)("li",{parentName:"ul"},"\u7279\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u539f\u751f react"),Object(l.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49 render"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u56fa\u5b9a\u7684\u6587\u6863\u6a21\u578b - \u57fa\u4e8e\u63a5\u53e3 - POJO - \u53ef\u4ee5\u76f4\u63a5\u5e8f\u5217\u5316",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u4e0d\u540c\u7c7b\u578b\u4e4b\u95f4\u8fdb\u884c\u8f6c\u6362"))),Object(l.b)("li",{parentName:"ul"},"\u63d2\u4ef6\u5c31\u662f\u76f4\u63a5\u4fee\u6539 Editor \u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u8ba1\u4e0a\u5c3d\u53ef\u80fd\u6620\u5c04 DOM \u6a21\u578b - Mirroring the DOM as much as possible is one of Slate's principles",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Block\u3001Inline\u3001Leaf\u3001Void \u7b49\u5143\u7d20\u6982\u5ff5"))),Object(l.b)("li",{parentName:"ul"},"Text properties are for non-contiguous, character-level formatting."),Object(l.b)("li",{parentName:"ul"},"Element properties are for contiguous, semantic elements in the document."),Object(l.b)("li",{parentName:"ul"},"\u53ea\u8bfb\u6a21\u5f0f\u53ef\u4ee5\u5c06 Slate \u4f5c\u4e3a\u6e32\u67d3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ea\u4f1a\u589e\u52a0 4k \u5de6\u53f3\u4f9d\u8d56 - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/ianstormtaylor/slate/issues/2554"},"ianstormtaylor/slate#2554")))),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u9ed8\u8ba4\u7684\u5b8c\u5584\u6e32\u67d3\u7ec4\u4ef6 - \u6ca1\u6709\u89c6\u56fe\u5c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4fbf\u4e8e\u5229\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),Object(l.b)("li",{parentName:"ul"},"renderElement = DefaultElement - inline \u6e32\u67d3 span\uff0cblock \u6e32\u67d3 div"),Object(l.b)("li",{parentName:"ul"},"renderLeaf = DefaultLeaf - \u6e32\u67d3 span"))),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u5185\u5efa\u7684\u6837\u5f0f\u5b9a\u4e49 - \u4f46\u5f88\u5bb9\u6613\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u53ea\u662f\u7528\u6765\u4f5c\u4e3a\u5bcc\u6587\u672c\u7f16\u8f91",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u6765\u505a CMS\u3001\u7ec4\u4ef6\u7f16\u8f91"))),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7\u9012\u5f52\u6e32\u67d3 + contentEditbale \u5b9e\u73b0\u7f16\u8f91"))),Object(l.b)("li",{parentName:"ul"},"\u5c01\u88c5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/accordproject/markdown-editor"},"accordproject/markdown-editor"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://accordproject-markdown-editor.netlify.com/"},"demo")),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/accordproject/markdown-transform"},"accordproject/markdown-transform")," \u5b9e\u73b0 dom \u548c markdown \u4e92\u8f6c"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/outline/rich-markdown-editor"},"outline/rich-markdown-editor")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/Canner/canner-slate-editor"},"Canner/canner-slate-editor"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://canner.github.io/canner-slate-editor"},"demo")),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e slate \u7684 markdown \u683c\u5f0f cms \u7f16\u8f91\u5668"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u5728\u7ef4\u62a4")))))),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-ondombeforeinput"},"\u4e3a\u4ec0\u4e48\u9700\u8981 onDOMBeforeInput"),Object(l.b)("p",null,"\u5904\u7406 ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event"},"beforeinput")," \u4e8b\u4ef6\uff0c\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/ianstormtaylor/slate/issues/3302"},"#3302")," - What is the purpose of onDOMBeforeInput?"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/facebook/react/issues/11211"},"facebook/react#11211")," React \u4e0d\u652f\u6301 beforeinput \u4e8b\u4ef6")))}p.isMDXComponent=!0},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,O=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return r?a.a.createElement(O,o(o({ref:t},b),{},{components:r})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);