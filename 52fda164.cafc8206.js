(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),i=(a(0),a(787)),b={id:"redis",title:"Redis"},l={unversionedId:"db/kv/redis",id:"db/kv/redis",isDocsHomePage:!1,title:"Redis",description:"Tips",source:"@site/notes/db/kv/redis.md",slug:"/db/kv/redis",permalink:"/notes/db/kv/redis",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/kv/redis.md",version:"current",sidebar:"docs",previous:{title:"LMDB",permalink:"/notes/db/kv/lmdb"},next:{title:"Apache Cassandra",permalink:"/notes/db/column/cassandra"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Stream",id:"stream",children:[]},{value:"Module",id:"module",children:[]},{value:"CHANGELOG",id:"changelog",children:[{value:"5.0",id:"50",children:[]},{value:"4.0",id:"40",children:[]},{value:"3.2.0",id:"320",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled.",id:"misconf-redis-is-configured-to-save-rdb-snapshots-but-is-currently-not-able-to-persist-on-disk-commands-that-may-modify-the-data-set-are-disabled",children:[]},{value:"RESP3",id:"resp3",children:[]}]}],s={toc:c};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://download.redis.io/redis-stable/redis.conf"},"redis.conf")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redislabs.com/blog/5-key-takeaways-for-developing-with-redis"},"5 Key Takeaways for Developing with Redis"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Keep Track of Your Keys"),Object(i.b)("li",{parentName:"ol"},"Keep Track of the Length of Your Key Names"),Object(i.b)("li",{parentName:"ol"},"Use the Right Data Structures"),Object(i.b)("li",{parentName:"ol"},"Use SCAN, Never Use KEYS"),Object(i.b)("li",{parentName:"ol"},"Use Server-Side Lua Scripts"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://scaleyourcode.com/blog/article/15"},"Redis configuration for production"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=X01gn5a2WQ0"},"YouTube")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/RedisLabsModules/redis-graph/"},"RedisGraph"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A graph database as a Redis module")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\nwget http://download.redis.io/redis-stable/redis.conf\nredis-server redis.conf\n# macOS \u5b89\u88c5\nbrew install redis\n# \u901a\u8fc7 docker \u542f\u52a8\n# \u6570\u636e\u5b58\u50a8\u4e8e ~/data/redis\ndocker run --rm -it -v ~/data/redis:/data -p 6379:6379 --name my-redis redis redis-server --appendonly ye\n\nredis-server --bind=0.0.0.0\n")),Object(i.b)("h2",{id:"stream"},"Stream"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"redis ",Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/antirez/4e7049ce4fce4aa61bf0cfbc3672e64d"},"api")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/antirez/68e67f3251d10f026861be2d0fe0d2f4"},"Redis Streams: consumer groups v2 specification document")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://antirez.com/news/116"},"An update on Redis Streams development"))))),Object(i.b)("h2",{id:"module"},"Module"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://redislabs.com/blog/writing-redis-modules"},"\u5199 Redis \u6a21\u5757\u7684\u6559\u7a0b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://redismodules.com/"},"Redis \u6a21\u5757\u4ed3\u5e93")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://antirez.com/news/106"},"Antirez \u5173\u4e8e Redis \u6a21\u5757\u7684\u535a\u5ba2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wenerme/go-rm"},"wenerme/go-rm"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 Golang \u5199 Redis \u6a21\u5757")))),Object(i.b)("h2",{id:"changelog"},"CHANGELOG"),Object(i.b)("h3",{id:"50"},"5.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e stream \u7c7b\u578b")),Object(i.b)("h3",{id:"40"},"4.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u53d8\u66f4",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"\u6a21\u5757"),Object(i.b)("li",{parentName:"ol"},"\u65b0\u7684\u540c\u6b65\u65b9\u5f0f")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A -> B -> C -> D")),Object(i.b)("ol",{parentName:"li",start:3},Object(i.b)("li",{parentName:"ol"},"\u5931\u6548\u673a\u5236")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"LFU")),Object(i.b)("ol",{parentName:"li",start:4},Object(i.b)("li",{parentName:"ol"},"\u975e\u963b\u585e DEL \u548c FLUSHALL/FLUSHDB."),Object(i.b)("li",{parentName:"ol"},"RDB-AOF \u6df7\u5408\u6301\u4e45\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ol"},"\u65b0\u7684 MEMORY \u8bed\u53e5"),Object(i.b)("li",{parentName:"ol"},"Redis Cluster \u73b0\u5728\u517c\u5bb9 NAT/Docker"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.antirez.com/news/110"},"The first release candidate of Redis 4.0 is out")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/antirez/redis/4.0/00-RELEASENOTES"},"RELEASENOTES"))))),Object(i.b)("h3",{id:"320"},"3.2.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://antirez.com/news/104"},"Redis 3.2.0 is out!")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://redis.io/commands/#geo"},"GEO")," API")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://redis.io/commands/bitfield"},"BITFIELD")," command")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"script effects replication\n\u96c6\u7fa4\u4e0b\u53ea\u540c\u6b65\u88ab\u811a\u672c\u4fee\u6539\u7684\u5185\u5bb9,\u800c\u4e0d\u662f\u5206\u53d1\u811a\u672c\u5230\u6240\u6709\u8282\u70b9\u6267\u884c")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Lua scripts debugger\nVIDEO: ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IMvRfStaoyM"},"New Redis Lua scripts debugger: a short intro"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"slaves and masters are in agreement about what keys are expired during read operations.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SPOP now accepts an optional count argument")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"RDB AUX fields")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Sentinel can now scale monitoring many masters"))),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"misconf-redis-is-configured-to-save-rdb-snapshots-but-is-currently-not-able-to-persist-on-disk-commands-that-may-modify-the-data-set-are-disabled"},"MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/kapkaev/4619127"},"https://gist.github.com/kapkaev/4619127"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"redis-cli\n# config set stop-writes-on-bgsave-error no\n")),Object(i.b)("h3",{id:"resp3"},"RESP3"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c"},"https://gist.github.com/antirez/2bc68a9e9e45395e297d288453d5d54c")),Object(i.b)("p",null,"\u76ee\u524d\u7684 RESP \u662f QA \u6a21\u5f0f\uff0c\u6027\u80fd\u548c\u5904\u7406\u80fd\u529b\u4e0a\u6709\u9650"))}o.isMDXComponent=!0},787:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),o=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=o(a),m=r,u=p["".concat(b,".").concat(m)]||p[m]||d[m]||i;return a?n.a.createElement(u,l(l({ref:t},s),{},{components:a})):n.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var s=2;s<i;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);