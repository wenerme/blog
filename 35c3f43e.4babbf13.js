(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),l=(a(0),a(787)),i={id:"mysql-gtid",title:"MySQL GTID"},b={unversionedId:"db/relational/mysql-gtid",id:"db/relational/mysql-gtid",isDocsHomePage:!1,title:"MySQL GTID",description:"GTID",source:"@site/notes/db/relational/mysql-gtid.md",slug:"/db/relational/mysql-gtid",permalink:"/notes/db/relational/mysql-gtid",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/mysql-gtid.md",version:"current",sidebar:"docs",previous:{title:"TimeScale",permalink:"/notes/db/relational/postgresql/timescale"},next:{title:"MySQL",permalink:"/notes/db/relational/mysql"}},c=[{value:"MySQL vs MariaDB",id:"mysql-vs-mariadb",children:[]},{value:"Reference",id:"reference",children:[]}],o={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"gtid"},"GTID"),Object(l.b)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u7b80\u5355\u63cf\u8ff0\u4e0b\u5b9e\u73b0 GTID \u9047\u5230\u7684\u95ee\u9898"),Object(l.b)("h2",{id:"mysql-vs-mariadb"},"MySQL vs MariaDB"),Object(l.b)("p",null,"MariaDB 10.0.2 \u5f00\u59cb\u652f\u6301 GTID, MySQL 5.6 \u5f00\u59cb\u652f\u6301GTID,\u56e0\u4e3a MariaDB \u662f\u57fa\u4e8e MySQL 5.5.5, \u56e0\u6b64 MariaDB \u7684 GTID \u4e0e MySQL \u7684 GTID \u59ff\u52bf\u5e76\u4e0d\u4e00\u6837."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"GTID \u683c\u5f0f\u4e0d\u4e00\u6837",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MySQL:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"UUID SET",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"3E11FA47-71CA-11E1-9E33-C80AA9429562:23")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"server_uuid:interval")))),Object(l.b)("li",{parentName:"ul"},"GTID SET",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"uuid_set[, uuid_set] ... | ''")))))),Object(l.b)("li",{parentName:"ul"},"MariaDB",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"0-3306-123")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DomainID-ServerID-Sequence")))))),Object(l.b)("li",{parentName:"ul"},"\u5f00\u59cb GTID \u590d\u5236\u7684\u6d41\u7a0b\u4e0d\u4e00\u6837",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MySQL",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528  ",Object(l.b)("a",{parentName:"li",href:"http://dev.mysql.com/doc/internals/en/com-binlog-dump-gtid.html"},"COM_BINLOG_DUMP_GTID")," \u5f00\u59cb\u590d\u5236\u6d41\u7a0b,\u5728\u5305\u4e2d\u6307\u5b9a GTID SET"),Object(l.b)("li",{parentName:"ul"},"COM_BINLOG_DUMP_GTID \u662f 5.6 \u652f\u6301\u7684\u534f\u8bae"))),Object(l.b)("li",{parentName:"ul"},"MariaDB")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"-- \u5bf9\u4e8e\u4e0d\u540c\u7684\u590d\u5236\u9700\u6c42,\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u4e2d\u7684\u53d8\u91cf\u6307\u5b9a\n-- \u53ef\u901a\u8fc7\u6293\u5305\u770b\u5230 MaraDB \u5f00\u59cb\u590d\u5236\u7684\u6d41\u7a0b\n-- \u4e3b\u8981\u4e0e GTID \u76f8\u5173\u7684\u53d8\u91cf\nSET @mariadb_slave_capability = 4;-- \u8868\u660e\u80fd\u63a5\u53d7 GTID\nSET @slave_connect_state = '0-3311-90';-- \u6307\u5b9a GTID\n-- \u7136\u540e\u53d1\u9001 REGISTER_SLAVE\n-- MySQL \u662f\u53d1\u9001 BINLOG_DUMP.REGISTER_SLAVE \u662f\u53ef\u9009\u7684\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MariaDB \u7684 GTID \u4e8b\u4ef6\u5305\u4e0e MySQL \u7684\u4e0d\u540c,\u76ee\u524d\u53ea\u6709\u901a\u8fc7\u6293\u5305\u5206\u6790."),Object(l.b)("li",{parentName:"ul"},"MySQL \u7684\u534f\u8bae\u6709\u76f8\u5bf9\u5b8c\u5584\u7684\u6587\u6863, MariaDB \u4ec0\u4e48\u7684\u534f\u8bae,\u6587\u6863\u6ef4\u6ca1\u6709",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"MariaDB \u5927\u90e8\u5206\u534f\u8bae\u4e0e MySQL \u76f8\u540c, \u4f46\u662f\u8fd9\u90e8\u5206\u4e0d\u540c")))),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/wenerme/mysql-binlog-connector-java"},"wenerme/mysql-binlog-connector-java"),"\n\u652f\u6301 Mariadb GTID \u7684\u5b9e\u73b0"),Object(l.b)("li",{parentName:"ul"},"MySQL",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.6/en/replication-gtids.html"},"Replication with Global Transaction Identifiers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://dev.mysql.com/doc/internals/en/com-binlog-dump-gtid.html"},"COM_BINLOG_DUMP_GTID")))),Object(l.b)("li",{parentName:"ul"},"MariaDB",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://mariadb.com/kb/en/mariadb/global-transaction-id/"},"Global Transaction ID")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://mariadb.com/blog/mariadb-10-gtid-explained"},"MariaDB 1- GTID explain")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://mariadb.com/blog/enabling-gtids-server-replication-mariadb-100"},"Enabling GTIDs for server replication in MariaDB 10.0"))))))}m.isMDXComponent=!0},787:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=m(a),s=n,d=p["".concat(i,".").concat(s)]||p[s]||u[s]||l;return a?r.a.createElement(d,b(b({ref:t},o),{},{components:a})):r.a.createElement(d,b({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);