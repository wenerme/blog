(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),c=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(t),g=r,m=b["".concat(o,".").concat(g)]||b[g]||u[g]||i;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},363:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(8),i=(t(0),t(1114)),o={title:"PostGraphile"},l={unversionedId:"db/relational/postgresql/postgraphile",id:"db/relational/postgresql/postgraphile",isDocsHomePage:!1,title:"PostGraphile",description:"* graphile/postgraphile \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/db/relational/postgresql/postgraphile.md",slug:"/db/relational/postgresql/postgraphile",permalink:"/notes/db/relational/postgresql/postgraphile",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgraphile.md",version:"current",sidebar:"docs",previous:{title:"PgBouncer",permalink:"/notes/db/relational/postgresql/pgbouncer"},next:{title:"PostgreSQL Awesome",permalink:"/notes/db/relational/postgresql/postgresql-awesome"}},p=[{value:"embded",id:"embded",children:[]},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[]},{value:"Schema",id:"schema",children:[]}],s={toc:p};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/graphile/postgraphile"},"graphile/postgraphile")," \u662f\u4ec0\u4e48\uff1f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"GraphQL over PostgreSQL"),Object(i.b)("li",{parentName:"ul"},"\u5f3a\u8c03 DB \u8bbe\u8ba1 - \u5148 DB \u540e GraphQL"),Object(i.b)("li",{parentName:"ul"},"TypeScript+NodeJS \u5b9e\u73b0"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u72ec\u7acb\u4f7f\u7528\u4e5f\u53ef\u4ee5\u5d4c\u5165\u5230 NodeJS \u4f7f\u7528",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b98\u65b9\u63a8\u8350\u4f5c\u4e3a\u5e93\u4f7f\u7528\uff0c\u56e0\u4e3a\u65b9\u4fbf\u81ea\u5b9a\u4e49\u548c\u52a0\u63d2\u4ef6")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# https://www.graphile.org/postgraphile/usage-cli/\n\n# \u5f00\u53d1\u73af\u5883\u53c2\u6570\npostgraphile \\\n  --subscriptions \\\n  --watch \\\n  --dynamic-json \\\n  --no-setof-functions-contain-nulls \\\n  --no-ignore-rbac \\\n  --no-ignore-indexes \\\n  --show-error-stack=json \\\n  --extended-errors hint,detail,errcode \\\n  --append-plugins @graphile-contrib/pg-simplify-inflector \\\n  --export-schema-graphql schema.graphql \\\n  --graphiql "/" \\\n  --enhance-graphiql \\\n  --allow-explain \\\n  --enable-query-batching \\\n  --legacy-relations omit \\\n  --connection $DATABASE_URL \\\n  --schema app_public\n\n# \u751f\u4ea7\u73af\u5883\npostgraphile \\\n  --subscriptions \\\n  --retry-on-init-fail \\\n  --dynamic-json \\\n  --no-setof-functions-contain-nulls \\\n  --no-ignore-rbac \\\n  --no-ignore-indexes \\\n  --extended-errors errcode \\\n  --append-plugins @graphile-contrib/pg-simplify-inflector \\\n  --disable-graphiql \\\n  --enable-query-batching \\\n  --disable-query-log \\ # our default logging has performance issues, but do make sure you have a logging system in place!\n  --legacy-relations omit \\\n  --connection $DATABASE_URL \\\n  --schema app_public\n')),Object(i.b)("h2",{id:"embded"},"embded"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const express = require("express");\nconst { postgraphile } = require("postgraphile");\n\nconst app = express();\n\n/* Example middleware you might want to put in front of PostGraphile */\n// app.use(require(\'morgan\')(...));\n// app.use(require(\'compression\')({...}));\n// app.use(require(\'helmet\')({...}));\n\napp.use(postgraphile(process.env.DATABASE_URL || "postgres:///","public", {\n  // ...\n  pgSettings: {\n    statement_timeout: "3000",\n  },\n}));\n\napp.listen(process.env.PORT || 3000);\n')),Object(i.b)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5916\u952e\u6dfb\u52a0\u7d22\u5f15"),Object(i.b)("li",{parentName:"ul"},"RLS (Row Level Security) \u5982\u679c\u8981\u7528\u5efa\u8bae\u6bcf\u4e2a\u8868\u90fd\u542f\u7528"),Object(i.b)("li",{parentName:"ul"},"\u8868\u6388\u6743 SELECT/DELETE\uff0c\u5217\u6388\u6743 INSERT/UPDATE",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5217\u6388\u6743 SELECT \u4f1a\u5bfc\u81f4\u65e0\u6cd5\u4f18\u5316\uff0c\u4e0d\u80fd ",Object(i.b)("inlineCode",{parentName:"li"},"SELECT *"),", ",Object(i.b)("inlineCode",{parentName:"li"},"RETURNING *"),", \u4e0d\u80fd\u5c06\u884c\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570"))),Object(i.b)("li",{parentName:"ul"},"\u5c3d\u91cf ",Object(i.b)("inlineCode",{parentName:"li"},"LANGUAGE sql"),"\uff0c \u907f\u514d ",Object(i.b)("inlineCode",{parentName:"li"},"LANGUAGE plpgsql")),Object(i.b)("li",{parentName:"ul"},"Trigger \u6dfb\u52a0\u6570\u5b57\u524d\u7f00\uff0c\u56e0\u4e3a\u662f\u6309\u5e8f\u6267\u884c\u7684",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"_200_do_a_thing")," / ",Object(i.b)("inlineCode",{parentName:"li"},"_800_do_something_else"))))),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.graphile.org/postgraphile/postgresql-schema-design/"},"https://www.graphile.org/postgraphile/postgresql-schema-design/"))))}c.isMDXComponent=!0}}]);