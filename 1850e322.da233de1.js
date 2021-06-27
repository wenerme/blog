(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1096:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return g}));var r=n(0),a=n.n(r);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},b=Object.keys(t);for(r=0;r<b.length;r++)n=b[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)n=b[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=a.a.createContext({}),o=function(t){var e=a.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},s=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,b=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=o(n),s=r,g=m["".concat(c,".").concat(s)]||m[s]||d[s]||b;return n?a.a.createElement(g,i(i({ref:e},p),{},{components:n})):a.a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=n.length,c=new Array(b);c[0]=s;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var p=2;p<b;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},167:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return o}));var r=n(3),a=n(8),b=(n(0),n(1096)),c={title:"\u5ef6\u8fdf\u6570"},i={unversionedId:"devops/concept/latency",id:"devops/concept/latency",isDocsHomePage:!1,title:"\u5ef6\u8fdf\u6570",description:"- VoIP \u53ef\u63a5\u53d7 150ms - 300ms",source:"@site/notes/devops/concept/latency.md",slug:"/devops/concept/latency",permalink:"/notes/devops/concept/latency",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/concept/latency.md",version:"current"},l=[{value:"Latency Comparison Numbers ~ 2012",id:"latency-comparison-numbers--2012",children:[]},{value:"Notes",id:"notes",children:[]}],p={toc:l};function o(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"VoIP \u53ef\u63a5\u53d7 150ms - 300ms")),Object(b.b)("h2",{id:"latency-comparison-numbers--2012"},"Latency Comparison Numbers ~ 2012"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Interactive ",Object(b.b)("a",{parentName:"li",href:"https://colin-scott.github.io/personal_website/research/interactive_latency.html"},"Latency Numbers Every Programmer Should Know")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=13530820"},"HN")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://gist.github.com/jboner/2841832"},"Gist")," ",Object(b.b)("a",{parentName:"li",href:"https://gist.github.com/GLMeece/b00c9c97a06a957af7426b1be5bc8be6"},"Neo")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=JEpsKnWZrJ8"},"Grace Hopper explains Nanoseconds")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wondernetwork.com/pings/"},"Global Ping"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"operation"),Object(b.b)("th",{parentName:"tr",align:"right"},"nano seconds"),Object(b.b)("th",{parentName:"tr",align:"right"},"micro seconds"),Object(b.b)("th",{parentName:"tr",align:"right"},"milliseconds"),Object(b.b)("th",{parentName:"tr",align:null},"relative"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"L1 cache reference"),Object(b.b)("td",{parentName:"tr",align:"right"},"0.5 ns"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Branch mispredict"),Object(b.b)("td",{parentName:"tr",align:"right"},"5.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"L2 cache reference"),Object(b.b)("td",{parentName:"tr",align:"right"},"7.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null},"14x L1 cache")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Mutex lock/unlock"),Object(b.b)("td",{parentName:"tr",align:"right"},"25.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Main memory reference"),Object(b.b)("td",{parentName:"tr",align:"right"},"100.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null},"20x L2 cache, 200x L1 cache")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Compress 1K bytes with Zippy"),Object(b.b)("td",{parentName:"tr",align:"right"},"3,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"3 us"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Send 1K bytes over 1 Gbps network"),Object(b.b)("td",{parentName:"tr",align:"right"},"10,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"10 us"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Read 4K randomly from SSD"),Object(b.b)("td",{parentName:"tr",align:"right"},"150,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"150 us"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null},"~1GB/sec SSD")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Read 1 MB sequentially from memory"),Object(b.b)("td",{parentName:"tr",align:"right"},"250,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"250 us"),Object(b.b)("td",{parentName:"tr",align:"right"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Round trip within same datacenter"),Object(b.b)("td",{parentName:"tr",align:"right"},"500,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"500 us"),Object(b.b)("td",{parentName:"tr",align:"right"},"0.5 ms"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Read 1 MB sequentially from SSD"),Object(b.b)("td",{parentName:"tr",align:"right"},"1,000,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"1,000 us"),Object(b.b)("td",{parentName:"tr",align:"right"},"1 ms"),Object(b.b)("td",{parentName:"tr",align:null},"~1GB/sec SSD, 4X memory")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Disk seek"),Object(b.b)("td",{parentName:"tr",align:"right"},"10,000,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"10,000 us"),Object(b.b)("td",{parentName:"tr",align:"right"},"10 ms"),Object(b.b)("td",{parentName:"tr",align:null},"20x datacenter roundtrip")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Read 1 MB sequentially from disk"),Object(b.b)("td",{parentName:"tr",align:"right"},"20,000,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"20,000 us"),Object(b.b)("td",{parentName:"tr",align:"right"},"20 ms"),Object(b.b)("td",{parentName:"tr",align:null},"80x memory, 20X SSD")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Send packet CA->Netherlands->CA"),Object(b.b)("td",{parentName:"tr",align:"right"},"150,000,000.0 ns"),Object(b.b)("td",{parentName:"tr",align:"right"},"150,000 us"),Object(b.b)("td",{parentName:"tr",align:"right"},"150 ms"),Object(b.b)("td",{parentName:"tr",align:null})))),Object(b.b)("h2",{id:"notes"},"Notes"),Object(b.b)("p",null,"1 ns = 10^-9 seconds\n1 us = 10^-6 seconds = 1,000 ns\n1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns"))}o.isMDXComponent=!0}}]);