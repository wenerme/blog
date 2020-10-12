(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{495:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),c=(r(0),r(556)),l={id:"kv",title:"Key Value"},i={unversionedId:"db/kv/kv",id:"db/kv/kv",isDocsHomePage:!1,title:"Key Value",description:"Key Value",source:"@site/contents/tricks/db/kv/README.md",slug:"/db/kv/kv",permalink:"/notes/db/kv/kv",version:"current",sidebar:"docs",previous:{title:"CouchDB",permalink:"/notes/db/document/couchdb"},next:{title:"Redis",permalink:"/notes/db/kv/redis"}},o=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"RocksDB vs LevelDB",id:"rocksdb-vs-leveldb",children:[]}]}],b={rightToc:o};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"key-value"},"Key Value"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.influxdata.com/blog/benchmarking-leveldb-vs-rocksdb-vs-hyperleveldb-vs-lmdb-performance-for-influxdb/"}),"Benchmarking LevelDB vs. RocksDB vs. HyperLevelDB vs. LMDB Performance for InfluxDB")," - 2014-06-04",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5927\u90e8\u573a\u666f LevelDB \u548c RocksDB \u662f\u66f4\u597d\u7684\u9009\u62e9"),Object(c.b)("li",{parentName:"ul"},"LevelDB \u6709\u66f4\u597d\u7684\u78c1\u76d8\u5229\u7528\u7387\uff0cRocksDB \u7684\u8bfb\u5199\u6027\u80fd\u66f4\u52a0\u4f18\u5f02"),Object(c.b)("li",{parentName:"ul"},"\u786c\u76d8\u548c\u5b58\u50a8\u914d\u7f6e\u5bf9\u6027\u80fd\u5f71\u54cd\u975e\u5e38\u660e\u663e")))))),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"rocksdb-vs-leveldb"},"RocksDB vs LevelDB"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"RocksDB"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e8e 2012 Fork LevelDB - \u63d0\u5347\u5728\u670d\u52a1\u7aef\u7684\u6027\u80fd"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u822c\u4f5c\u4e3a\u5176\u4ed6\u6570\u636e\u7684\u5f15\u64ce\uff0c\u529f\u80fd\u8f83\u591a\u4e14\u590d\u6742"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\uff1aArangoDB\u3001TiDB\u3001Apache Flink\u3001CockroachDB"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"LevelDB"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u57fa\u7840\u6982\u5ff5\u6765\u6e90\u4e8e Google Bigtable \u5b9e\u73b0"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301\u5168\u5e73\u53f0 - \u6d4f\u89c8\u5668\u3001\u79fb\u52a8\u8bbe\u5907\u3001\u5d4c\u5165\u5f0f\u8bbe\u5907"),Object(c.b)("li",{parentName:"ul"},"\u529f\u80fd\u7b80\u5355\uff0c\u4e00\u822c\u76f4\u63a5\u4f7f\u7528"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\uff1aIndexedDB\u3001Bitcoin Core\u3001go-ethereum"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/rocksdb/wiki/Features-Not-in-LevelDB"}),"RocksDB Features that are not in LevelDB")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5217\u7c07"),Object(c.b)("li",{parentName:"ul"},"\u4e8b\u52a1"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://db-engines.com/en/system/LevelDB%3BRocksDB"}),"LevelDB vs. RocksDB")," - DB Engines"))))}u.isMDXComponent=!0},556:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||c;return r?a.a.createElement(d,i(i({ref:t},b),{},{components:r})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<c;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);