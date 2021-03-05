(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{705:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return m}));var n=t(3),l=t(8),r=(t(0),t(787)),b={title:"Apache Cassandra"},c={unversionedId:"db/column/cassandra",id:"db/column/cassandra",isDocsHomePage:!1,title:"Apache Cassandra",description:"Cassandra",source:"@site/notes/db/column/cassandra.md",slug:"/db/column/cassandra",permalink:"/notes/db/column/cassandra",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/column/cassandra.md",version:"current",sidebar:"docs",previous:{title:"Redis",permalink:"/notes/db/kv/redis"},next:{title:"OLAP",permalink:"/notes/db/olap/olap"}},i=[{value:"Tips",id:"tips",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Doc Notes",id:"doc-notes",children:[]}],p={toc:i};function m(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"cassandra"},"Cassandra"),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://cassandra.apache.org/"},"http://cassandra.apache.org/")),Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6 ",Object(r.b)("a",{parentName:"li",href:"http://cassandra.apache.org/doc/latest/configuration/cassandra_config_file.html"},"http://cassandra.apache.org/doc/latest/configuration/cassandra_config_file.html")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://www.scylladb.com/"},"scylladb"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u662f C++ \u5b9e\u73b0\u7684 Cassandra"),Object(r.b)("li",{parentName:"ul"},"\u4e0e Cassandra \u534f\u8bae\u517c\u5bb9"),Object(r.b)("li",{parentName:"ul"},"\u7f51\u7edc\u7ebf\u7a0b\u6a21\u578b\u548c Cassandra \u4e0d\u540c"),Object(r.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(r.b)("a",{parentName:"li",href:"https://github.com/scylladb/seastar"},"seastar")," \u6846\u67b6"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://projects.spring.io/spring-data-cassandra/"},"http://projects.spring.io/spring-data-cassandra/"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://docs.spring.io/spring-data/cassandra/docs/1.5.4.RELEASE/reference/html/"},"http://docs.spring.io/spring-data/cassandra/docs/1.5.4.RELEASE/reference/html/")))),Object(r.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/17523595/1870054"},"https://stackoverflow.com/a/17523595/1870054")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/serge-rider/dbeaver"},"https://github.com/serge-rider/dbeaver")),Object(r.b)("li",{parentName:"ul"},"JDBC ",Object(r.b)("a",{parentName:"li",href:"https://github.com/datastax/java-driver/tree/3.x/manual/shaded_jar"},"https://github.com/datastax/java-driver/tree/3.x/manual/shaded_jar")))),Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u6a21\u578b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://docs.datastax.com/en/cql/3.3/cql/ddl/dataModelingApproach.html"},"Data modeling concepts")))),Object(r.b)("li",{parentName:"ul"},"\u786c\u4ef6\u8981\u6c42 - \u751f\u4ea7\u6700\u4f4e 2\u68388G\uff0c\u63a8\u8350 8\u6838 32G")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u7528\u4e8e\u6d4b\u8bd5\u7684\u670d\u52a1\n# \u66b4\u9732 JMX \u548c CQL \u7aef\u53e3\n# \u4f7f\u7528\u4e86 mmap, \u5728 mac \u4e0b\u4e0d\u80fd\u6620\u5c04 volume\ndocker run -it --rm -p 9042:9042 -p 7199:7199 -v /data/cassandra/dev:/var/lib/cassandra cassandra\n\n# \u672c\u5730\u8fde\u63a5 docker \u4e2d\u7684\u670d\u52a1\u5668\ncqlsh `docker-machine ip`\n\n# \u53ef\u4ece\u5bb9\u5668\u4e2d\u5c06\u914d\u7f6e\u62f7\u8d1d\u51fa\u6765\ndocker cp cassandra:/etc/cassandra config\n\n# \u81ea\u5b9a\u4e49 yaml \u914d\u7f6e\nJVM_OPTS="$JVM_OPTS -Dcassandra.config=file://$PWD/config/cassandra.yaml" cassandra -f\n\n# \u9ed8\u8ba4\u914d\u7f6e\u76ee\u5f55 /usr/local/etc/cassandra/\n# \u9ed8\u8ba4\u6570\u636e\u76ee\u5f55 /usr/local/var/lib/cassandra/\nbrew install cassandra\n\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"\n-- \u521b\u5efa\u7a7a\u95f4\nCREATE KEYSPACE Excelsior\nWITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};\nUSE Excelsior;\n-- \u521b\u5efa\u4e00\u4e2a\u6700\u5c0f\u8868\nCREATE TABLE t (k text PRIMARY KEY);\n-- \u63d2\u5165\u548c\u67e5\u8be2\nINSERT INTO t(k) values('Hello');\nSELECT * FROM t;\n\n-- http://docs.datastax.com/en/cql/3.3/cql/cql_reference/cqlshDescribe.html\n-- \u663e\u793a\u6240\u6709\u8868\nDESCRIBE TABLES;\n\n")),Object(r.b)("h2",{id:"notes"},"Notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"org.apache.cassandra.config.YamlConfigurationLoader"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u52a0\u8f7d YAML \u914d\u7f6e"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"org.apache.cassandra.config.Config"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7c7b"))),Object(r.b)("li",{parentName:"ul"},"\u4e3b\u952e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7c7b\u578b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5206\u7247"),Object(r.b)("li",{parentName:"ul"},"\u96c6\u7fa4")))))),Object(r.b)("h2",{id:"doc-notes"},"Doc Notes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"7000 \u96c6\u7fa4\u901a\u4fe1"),Object(r.b)("li",{parentName:"ul"},"7001 \u96c6\u7fa4\u901a\u4fe1 SSL"),Object(r.b)("li",{parentName:"ul"},"9042 \u5ba2\u6237\u7aef"),Object(r.b)("li",{parentName:"ul"},"7199 JMX"))),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 BLOB \u6700\u5927 16M",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"max_mutation_size_in_kb"),Object(r.b)("li",{parentName:"ul"},"commitlog_segment_size_in_mb \u7684\u4e00\u534a"))),Object(r.b)("li",{parentName:"ul"},"BLOB \u6ca1\u6709\u505a\u7279\u6b8a\u4f18\u5316, \u5efa\u8bae <10MB \u5355\u4e2a\u503c, \u66f4\u5927\u7684 BLOB \u5efa\u8bae\u5e94\u7528\u5206\u5757"),Object(r.b)("li",{parentName:"ul"},"\u5206\u7247\u952e\u76f8\u540c\u7684\u884c\u5728\u540c\u4e00\u4e2a\u5206\u7247"),Object(r.b)("li",{parentName:"ul"},"STATIC \u5217\u7531\u540c\u4e00\u4e2a\u5206\u7247\u5171\u4eab",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e0e COMPACT STORAGE \u51b2\u7a81"))),Object(r.b)("li",{parentName:"ul"},"\u4e3b\u952e\u7531\u4e24\u90e8\u5206\u7ec4\u6210",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5206\u7247\u952e, Partition Key"),Object(r.b)("li",{parentName:"ul"},"\u65cf\u7fa4\u5217, Clustering Columns"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PRIMARY KEY (a)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5206\u7247\u952e a"),Object(r.b)("li",{parentName:"ul"},"\u6ca1\u6709\u65cf\u7fa4\u5217"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PRIMARY KEY (a, b, c)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5206\u7247\u952e a"),Object(r.b)("li",{parentName:"ul"},"\u65cf\u7fa4\u5217 b, c"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PRIMARY KEY ((a, b), c)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7ec4\u5408\u5206\u7247\u952e a,b"),Object(r.b)("li",{parentName:"ul"},"\u65cf\u7fa4\u5217"))))),Object(r.b)("li",{parentName:"ul"},"COMPACT STORAGE",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u540e\u4e0d\u53ef\u4fee\u6539"),Object(r.b)("li",{parentName:"ul"},"4.0 \u540e\u5df2\u7ecf\u79fb\u9664, \u4e0d\u5efa\u8bae\u4f7f\u7528"),Object(r.b)("li",{parentName:"ul"},"\u9650\u5236",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u96c6\u5408\u548c STATIC \u5217"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a compact table \u6709\u81f3\u5c11\u4e00\u5217 clustering column,\u90a3\u4e48\u5728\u4e3b\u952e\u4e4b\u5916\u53ea\u80fd\u6709\u4e00\u5217"),Object(r.b)("li",{parentName:"ul"},"\u4e5f\u5c31\u610f\u5473\u7740\u5728\u521b\u5efa\u540e\u4e0d\u80fd\u4fee\u6539\u5217\u5b9a\u4e49"),Object(r.b)("li",{parentName:"ul"},"compact table \u53ea\u9650\u5236\u4e86\u521b\u5efa\u7684\u7d22\u5f15, \u800c materialized view \u662f\u4e0d\u53d7\u9650\u5236\u7684"))))),Object(r.b)("li",{parentName:"ul"},"CLUSTERING ORDER",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u540e\u4e0d\u53ef\u4fee\u6539"),Object(r.b)("li",{parentName:"ul"},"\u7528\u4e8e\u4fee\u6539\u65cf\u7fa4\u5217\u7684\u987a\u5e8f"),Object(r.b)("li",{parentName:"ul"},"\u9650\u5236",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f1a\u5f71\u54cd SELECT \u80fd\u591f\u4f7f\u7528\u7684 order \u987a\u5e8f"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c ",Object(r.b)("inlineCode",{parentName:"li"},"WITH CLUSTERING ORDER (a DESC, b ASC)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"ORDER BY (a DESC, b ASC)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ORDER BY (a ASC, b DESC)")),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"li"},"ORDER BY (a ASC, b ASC)"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ORDER BY (a DESC, b DESC)")))),Object(r.b)("li",{parentName:"ul"},"\u4f1a\u4fee\u6539\u9ed8\u8ba4\u987a\u5e8f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5206\u7247\u5185\u4f1a\u4ee5\u5b9a\u4e49\u7684\u987a\u5e8f\u8fd4\u56de"))),Object(r.b)("li",{parentName:"ul"},"\u5728\u67d0\u4e9b\u67e5\u8be2\u4e2d,\u53cd\u5e8f\u67e5\u8be2\u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u5f71\u54cd"))))),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u8868\u65f6\u7684 WITH ",Object(r.b)("a",{parentName:"li",href:"http://cassandra.apache.org/doc/latest/cql/ddl.html#other-table-options"},"\u9009\u9879")),Object(r.b)("li",{parentName:"ul"},"Materialized View",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SELECT \u8bed\u53e5"),Object(r.b)("li",{parentName:"ul"},"\u4e3b\u952e",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5fc5\u987b\u5305\u542b\u6240\u6709\u57fa\u7840\u8868\u7684\u4e3b\u952e"),Object(r.b)("li",{parentName:"ul"},"\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u989d\u5916\u5217\u4f5c\u4e3a\u4e3b\u952e"))),Object(r.b)("li",{parentName:"ul"},"\u9009\u9879"))))),Object(r.b)("li",{parentName:"ul"},"\u5b89\u5168",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u89d2\u8272",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6709\u5bc6\u7801"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u63a7\u5236\u662f\u5426\u5141\u8bb8\u767b\u9646"))),Object(r.b)("li",{parentName:"ul"},"\u6743\u9650",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7c7b\u578b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"CREATE"),Object(r.b)("li",{parentName:"ul"},"ALTER"),Object(r.b)("li",{parentName:"ul"},"DROP"),Object(r.b)("li",{parentName:"ul"},"SELECT"),Object(r.b)("li",{parentName:"ul"},"MODIFY"),Object(r.b)("li",{parentName:"ul"},"AUTHORIZE"),Object(r.b)("li",{parentName:"ul"},"DESCRIBE"),Object(r.b)("li",{parentName:"ul"},"EXECUTE"))),Object(r.b)("li",{parentName:"ul"},"\u8d44\u6e90",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ALL KEYSPACES -> KEYSPACE -> TABLE"),Object(r.b)("li",{parentName:"ul"},"ALL FUNCTIONS -> KEYSPACE -> FUNCTION"),Object(r.b)("li",{parentName:"ul"},"ALL ROLES -> ROLE"),Object(r.b)("li",{parentName:"ul"},"ALL MBEANS -> MBEAN"))))),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u517c\u5bb9"),Object(r.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u65b0\u7248\u672c\u4e2d\u7684\u89d2\u8272"))))),Object(r.b)("li",{parentName:"ul"},"\u51fd\u6570",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6807\u91cf\u51fd\u6570"),Object(r.b)("li",{parentName:"ul"},"\u805a\u5408\u51fd\u6570"),Object(r.b)("li",{parentName:"ul"},"\u5904\u4e8e\u5b89\u5168\u8003\u8651, \u7528\u6237\u5b9a\u4e49\u51fd\u6570\u9ed8\u8ba4\u662f\u5173\u95ed\u7684, ",Object(r.b)("inlineCode",{parentName:"li"},"enable_user_defined_functions")),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u5b9a\u4e49\u51fd\u6570\u4f1a\u8fd0\u884c\u5728\u6c99\u7bb1\u4e2d"),Object(r.b)("li",{parentName:"ul"},"\u5167\u5efa\u51fd\u6570",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cast")," \u7c7b\u578b\u8f6c\u6362 ",Object(r.b)("inlineCode",{parentName:"li"},"SELECT avg(cast(count as double)) FROM myTable")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"token")," \u8ba1\u7b97\u5206\u7247\u952e"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uuid")," \u751f\u6210 UUID"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"now")," \u751f\u6210 timeuuid"))),Object(r.b)("li",{parentName:"ul"},"\u7528\u6237\u5b9a\u4e49\u51fd\u6570",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f7f\u7528 Java \u7f16\u5199"),Object(r.b)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u4e3a ",Object(r.b)("inlineCode",{parentName:"li"},"org.apache.cassandra.cql3.functions.UDFContext")))))),Object(r.b)("li",{parentName:"ul"},"JSON",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f9d\u7136\u662f\u5f3a\u7c7b\u578b\u7684"),Object(r.b)("li",{parentName:"ul"},"\u53ea\u662f\u7b80\u5316\u57fa\u4e8e JSON \u7684\u64cd\u4f5c"),Object(r.b)("li",{parentName:"ul"},"\u63d0\u4f9b fromJSON \u548c toJSON \u51fd\u6570"))),Object(r.b)("li",{parentName:"ul"},"\u89e6\u53d1\u5668",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u89e6\u53d1\u5668\u9700\u8981\u5236\u5b9a\u5bf9\u5e94\u7684 Java \u7c7b"),Object(r.b)("li",{parentName:"ul"},"\u5c06 Java \u7c7b\u653e\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"lib/triggers"))))))}m.isMDXComponent=!0},787:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return s}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=l.a.createContext({}),m=function(e){var a=l.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=m(e.components);return l.a.createElement(p.Provider,{value:a},e.children)},O={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},o=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(t),o=n,s=u["".concat(b,".").concat(o)]||u[o]||O[o]||r;return t?l.a.createElement(s,c(c({ref:a},p),{},{components:t})):l.a.createElement(s,c({ref:a},p))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,b=new Array(r);b[0]=o;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<r;p++)b[p]=t[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"}}]);