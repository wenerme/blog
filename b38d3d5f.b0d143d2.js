(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{1114:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?a.a.createElement(g,b(b({ref:t},o),{},{components:r})):a.a.createElement(g,b({ref:t},o))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<l;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},823:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),l=(r(0),r(1114)),c={title:"Jaeger"},b={unversionedId:"service/observability/tracing/jaeger",id:"service/observability/tracing/jaeger",isDocsHomePage:!1,title:"Jaeger",description:"- jaegertracing/jaeger",source:"@site/notes/service/observability/tracing/jaeger.md",slug:"/service/observability/tracing/jaeger",permalink:"/notes/service/observability/tracing/jaeger",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/tracing/jaeger.md",version:"current",sidebar:"docs",previous:{title:"statsd_exporter",permalink:"/notes/service/observability/metrics/prometheus/statsd_exporter"},next:{title:"OpenTelemetry",permalink:"/notes/service/observability/tracing/opentelemetry"}},i=[],o={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/jaegertracing/jaeger"},"jaegertracing/jaeger"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"from Uber"))),Object(l.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5185\u5b58\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"badger - \u672c\u5730\u6587\u4ef6\u5b58\u50a8"),Object(l.b)("li",{parentName:"ul"},"cassandra - \u517c\u5bb9 scyllab"),Object(l.b)("li",{parentName:"ul"},"elasticsearch"),Object(l.b)("li",{parentName:"ul"},"kafka")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# badger \u6301\u4e45\u5b58\u50a8\ndocker run -it --rm \\\n  -v $PWD/data:/badger \\\n  -e SPAN_STORAGE_TYPE=badger \\\n  -e BADGER_EPHEMERAL=false \\\n  -e BADGER_DIRECTORY_VALUE=/badger/data \\\n  -e BADGER_DIRECTORY_KEY=/badger/key \\\n  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \\\n  -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \\\n  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 \\\n  jaegertracing/all-in-one:latest\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Port"),Object(l.b)("th",{parentName:"tr",align:null},"Protocol"),Object(l.b)("th",{parentName:"tr",align:null},"Component"),Object(l.b)("th",{parentName:"tr",align:null},"Function"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"5775"),Object(l.b)("td",{parentName:"tr",align:null},"UDP"),Object(l.b)("td",{parentName:"tr",align:null},"agent"),Object(l.b)("td",{parentName:"tr",align:null},"accept\xa0zipkin.thrift\xa0over compact thrift protocol (deprecated, legacy clients)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"6831"),Object(l.b)("td",{parentName:"tr",align:null},"UDP"),Object(l.b)("td",{parentName:"tr",align:null},"agent"),Object(l.b)("td",{parentName:"tr",align:null},"accept\xa0jaeger.thrift\xa0over compact thrift protocol")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"6832"),Object(l.b)("td",{parentName:"tr",align:null},"UDP"),Object(l.b)("td",{parentName:"tr",align:null},"agent"),Object(l.b)("td",{parentName:"tr",align:null},"accept\xa0jaeger.thrift\xa0over binary thrift protocol")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"5778"),Object(l.b)("td",{parentName:"tr",align:null},"HTTP"),Object(l.b)("td",{parentName:"tr",align:null},"agent"),Object(l.b)("td",{parentName:"tr",align:null},"serve configs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"16686"),Object(l.b)("td",{parentName:"tr",align:null},"HTTP"),Object(l.b)("td",{parentName:"tr",align:null},"query"),Object(l.b)("td",{parentName:"tr",align:null},"serve frontend")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"14268"),Object(l.b)("td",{parentName:"tr",align:null},"HTTP"),Object(l.b)("td",{parentName:"tr",align:null},"collector"),Object(l.b)("td",{parentName:"tr",align:null},"accept\xa0jaeger.thrift\xa0directly from clients")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"14250"),Object(l.b)("td",{parentName:"tr",align:null},"HTTP"),Object(l.b)("td",{parentName:"tr",align:null},"collector"),Object(l.b)("td",{parentName:"tr",align:null},"accept\xa0model.proto")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"9411"),Object(l.b)("td",{parentName:"tr",align:null},"HTTP"),Object(l.b)("td",{parentName:"tr",align:null},"collector"),Object(l.b)("td",{parentName:"tr",align:null},"Zipkin compatible endpoint (optional)")))))}p.isMDXComponent=!0}}]);