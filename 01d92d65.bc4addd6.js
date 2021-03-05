(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(787)),i={title:"Java with GraphQL",slug:"jraphql",date:new Date("2018-05-21T00:00:00.000Z"),tags:["\u9879\u76ee","Java","GraphQL"],baseUrl:"https://github.com/wenerme/jraphql/tree/master/"},c={permalink:"/story/jraphql",editUrl:"https://github.com/wenerme/wener/edit/master/story/project/jraphql.md",source:"@site/story/project/jraphql.md",description:"JraphQL",date:"2018-05-21T00:00:00.000Z",tags:[{label:"\u9879\u76ee",permalink:"/story/tags/\u9879\u76ee"},{label:"Java",permalink:"/story/tags/java"},{label:"GraphQL",permalink:"/story/tags/graph-ql"}],title:"Java with GraphQL",readingTime:2.46,truncated:!1,prevItem:{title:"\u5982\u4f55\u4ece0\u52301\u5b9e\u73b0\u4e00\u95e8\u8bed\u8a00",permalink:"/story/get-started-with-dsl"},nextItem:{title:"Ubuntu \u5bb6\u7528",permalink:"/story/ubuntu-home"}},p=[{value:"Get Started",id:"get-started",children:[]},{value:"Features",id:"features",children:[{value:"Language representation",id:"language-representation",children:[]},{value:"Syntax Extension",id:"syntax-extension",children:[]},{value:"Runtime Extension",id:"runtime-extension",children:[]},{value:"Embeddable Schema",id:"embeddable-schema",children:[]}]},{value:"Example",id:"example",children:[{value:"StarWar",id:"starwar",children:[]}]},{value:"Work with GoaphQL",id:"work-with-goaphql",children:[]}],b={toc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"jraphql"},"JraphQL"),Object(l.b)("p",null,"Java with GraphQL"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Module"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jraphql-lang"),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL language representation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jraphql-runtime"),Object(l.b)("td",{parentName:"tr",align:null},"GraphQL execution engine")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jraphql-parser-antlr"),Object(l.b)("td",{parentName:"tr",align:null},"Parser written in Antlr4 parse to jraphql-lang")))),Object(l.b)("h2",{id:"get-started"},"Get Started"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Maven ",Object(l.b)("a",{parentName:"li",href:"https://search.maven.org/#search%7Cga%7C1%7Cg%3A%22me.wener.jraphql%22"},"me.wener.jraphql"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<dependency>\n  <groupId>me.wener.jraphql</groupId>\n  <artifactId>jraphql-runtimer</artifactId>\n  <version>0.0.6</version>\n</dependency>\n<dependency>\n  <groupId>me.wener.jraphql</groupId>\n  <artifactId>jraphql-parser-antlr</artifactId>\n  <version>0.0.6</version>\n</dependency>\n")),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("h3",{id:"language-representation"},"Language representation"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Feature"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Serializable")),Object(l.b)("td",{parentName:"tr",align:null},"can parse or stringify to or from JSON")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Immutable")),Object(l.b)("td",{parentName:"tr",align:null},"friendly to cache or precompile")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Buildable")),Object(l.b)("td",{parentName:"tr",align:null},"every type has a builder for it generated by lombok.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Pluggable")),Object(l.b)("td",{parentName:"tr",align:null},"language representation is not related to parser impl")))),Object(l.b)("h3",{id:"syntax-extension"},"Syntax Extension"),Object(l.b)("h4",{id:"add-extend-by-name-syntax-for-object-and-interface"},"Add ",Object(l.b)("inlineCode",{parentName:"h4"},"extend by name")," syntax for object and interface"),Object(l.b)("h4",{id:"weave-multi-schemas"},"Weave multi schemas"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"# common.graphqls\nscalar Version\n\n# crm.graphqls\ntype CrmQuery {\n  customer(id:ID!):Customer\n  crmVersion: Version!\n}\ntype CrmUser {\n  customers: [Customer]\n}\nextend type Query by CrmQuery\nextend type User by CrmUser\n\n# erp.graphqls\ntype ErpQuery {\n  product(id:ID!):Product\n}\nextend type Query by ErpQuery\n")),Object(l.b)("h4",{id:"conditional-schema"},"Conditional schema"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},'# Only admin can see and use these methods\ntype AdminMutation {\n  changePassword(id:ID,password:String): ChangePasswordPayload\n}\nextend type Mutation by AdminMutation @Role(role:"admin")\n')),Object(l.b)("h4",{id:"allowed-directives-on-directive-definition-add-directive-location"},"Allowed directives on directive definition, add DIRECTIVE location"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},'directive @JavaType(type:String) on DIRECTIVE\ndirective @Auth(value:String) @JavaType(type:"Auth") on FIELD_DEFINITION;\n')),Object(l.b)("h4",{id:"allowed-schema-has-optional-name"},"Allowed schema has optional name"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"schema Test {\n  query: MyQuery\n}\n")),Object(l.b)("h3",{id:"runtime-extension"},"Runtime Extension"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Type implements interface don't need to write the fields again.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"interface Node {\n    id: ID!\n}\n\ntype User implements Node {\n    # id: ID! # This is optional\n}\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Can disable introspection",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"new MetaResolver().setDisableIntrospection(true)"))))),Object(l.b)("h3",{id:"embeddable-schema"},"Embeddable Schema"),Object(l.b)("p",null,"JraphQL Runtime contain a embedded schema ",Object(l.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/wenerme/jraphql/master/jraphql-runtime/src/main/java/me/wener/jraphql/schema/MetaSchema.java"},"MetaSchema"),", generated by ",Object(l.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/wenerme/jraphql/master/jraphql-runtime/src/test/java/me/wener/jraphql/example/EmbededSchema.java"},"EmbededSchema"),".   "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Parse Schema"),Object(l.b)("li",{parentName:"ul"},"Serialize to JSON"),Object(l.b)("li",{parentName:"ul"},"Best compress GZip"),Object(l.b)("li",{parentName:"ul"},"Encode use mime base64"),Object(l.b)("li",{parentName:"ul"},"Original JSON 32631 byte -> Encoded Base64 5352 byte")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("h3",{id:"starwar"},"StarWar"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/wenerme/jraphql/master/jraphql-runtime/src/test/java/me/wener/jraphql/example/StarWarApplication.java"},"StarWarApplication"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"SpringBoot WebFlux based"),Object(l.b)("li",{parentName:"ul"},"start and visite http://localhost:8080"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/wenerme/jraphql/master/jraphql-runtime/src/test/java/me/wener/jraphql/example/StarWarResolverV1.java"},"StarWarResolver"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"resolve the StarWar schema. ")))),Object(l.b)("p",null,"Queries you can try"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},'mutation addRev {\n  createReview(episode: EMPIRE, review: {stars: 4, commentary: "Ok Good"}) {\n    stars\n    commentary\n  }\n}\n\nquery rev($e:Episode = EMPIRE) {\n  hero(episode: $e) {\n    id\n    name\n    appearsIn\n  }\n  reviews(episode: $e) {\n    stars\n    commentary\n  }\n}\n\nquery search {\n  search(text: "o") {\n    __typename\n    ... on Human {\n      id\n      name\n    }\n    ... on Droid {\n      primaryFunction\n    }\n    ... on Starship {\n      length\n    }\n  }\n}\n\nquery baseQuery {\n  starship(id: "3000") {\n    id\n    name\n    length(unit: FOOT)\n  }\n  character(id: "2000") {\n    id\n    ... on Human {\n      mass\n      starships {\n        name\n      }\n    }\n    ... on Droid {\n      name\n      appearsIn\n    }\n  }\n  human(id: "1003") {\n    friendsConnection(after: "1002") {\n      friends {\n        name\n      }\n      pageInfo {\n        hasNextPage\n        startCursor\n        endCursor\n      }\n    }\n    friends {\n      name\n    }\n  }\n}\n')),Object(l.b)("h2",{id:"work-with-goaphql"},"Work with GoaphQL"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/wenerme/goaphql"},"GoaphQL")," can generate code from schema that depends on jrapgql-api, can directly run on jraphql-graphql-java-adapter.  "),Object(l.b)("p",null,"The generated code is static type and full featured, everything is an interface."))}o.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.a.createElement(u,c(c({ref:t},b),{},{components:n})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);