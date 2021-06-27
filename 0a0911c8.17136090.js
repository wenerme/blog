(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1096:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,O=u["".concat(i,".").concat(s)]||u[s]||p[s]||l;return a?n.a.createElement(O,o(o({ref:t},c),{},{components:a})):n.a.createElement(O,o({ref:t},c))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(8),l=(a(0),a(1096)),i={title:"Golang GORM \u89e3\u6790"},o={unversionedId:"languages/go/lib/gorm",id:"languages/go/lib/gorm",isDocsHomePage:!1,title:"Golang GORM \u89e3\u6790",description:"gorm",source:"@site/notes/languages/go/lib/gorm.md",slug:"/languages/go/lib/gorm",permalink:"/notes/languages/go/lib/gorm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/gorm.md",version:"current",sidebar:"docs",previous:{title:"Golang \u5e93\u5e38\u89c1\u95ee\u9898",permalink:"/notes/languages/go/lib/go-lib-faq"},next:{title:"gqlgen",permalink:"/notes/languages/go/lib/gqlgen"}},b=[{value:"gorm",id:"gorm",children:[]}],c={toc:b};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"gorm"},"gorm"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Golang \u7684 ORM \u5b9e\u73b0\n\u57fa\u4e8e Entity \u6a21\u578b")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/go-gorm/gorm"},"go-gorm/gorm")),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c\u8fc7\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa Statement \u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},"\u67e5\u8be2 - \u6267\u884c query \u56de\u8c03"))),Object(l.b)("li",{parentName:"ul"},"\u51e0\u4e4e\u6240\u6709\u5b9e\u9645\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7 callback \u4e32\u8054\u8d77\u6765\u7684"),Object(l.b)("li",{parentName:"ul"},"callbacks \u7ba1\u7406 processor \u7ec4"),Object(l.b)("li",{parentName:"ul"},"processor \u4e0b\u6709\u5b9e\u9645\u56de\u8c03\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"\u56de\u8c03 \u64cd\u4f5c Statement \u4e0a\u5173\u8054\u7684\u503c\u5bf9\u8c61\u8fdb\u884c\u67e5\u8be2\u4fee\u6539",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"func(db *gorm.DB)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"db.Statement.ReflectValue")," - \u7ed3\u679c\u6570\u636e"))),Object(l.b)("li",{parentName:"ul"},"\u5165\u53e3 processor - \u8c03\u7528\u540e\u5f00\u59cb\u5b9e\u9645\u6267\u884c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"create",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"gorm:begin_transaction"),Object(l.b)("li",{parentName:"ul"},"gorm:before_create"),Object(l.b)("li",{parentName:"ul"},"gorm:save_before_associations"),Object(l.b)("li",{parentName:"ul"},"gorm:create"),Object(l.b)("li",{parentName:"ul"},"gorm:save_after_associations"),Object(l.b)("li",{parentName:"ul"},"gorm:after_create"),Object(l.b)("li",{parentName:"ul"},"gorm:commit_or_rollback_transaction"))),Object(l.b)("li",{parentName:"ul"},"query",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"gorm:query"),Object(l.b)("li",{parentName:"ul"},"gorm:preload"),Object(l.b)("li",{parentName:"ul"},"gorm:after_query"))),Object(l.b)("li",{parentName:"ul"},"update",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0e create \u7c7b\u4f3c"),Object(l.b)("li",{parentName:"ul"},"gorm:setup_reflect_value - \u5728 begin_transaction \u540e"))),Object(l.b)("li",{parentName:"ul"},"delete",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"gorm:begin_transaction"),Object(l.b)("li",{parentName:"ul"},"gorm:before_delete"),Object(l.b)("li",{parentName:"ul"},"gorm:delete_before_associations"),Object(l.b)("li",{parentName:"ul"},"gorm:delete"),Object(l.b)("li",{parentName:"ul"},"gorm:after_delete"),Object(l.b)("li",{parentName:"ul"},"gorm:commit_or_rollback_transaction"))),Object(l.b)("li",{parentName:"ul"},"row",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"gorm:row"))),Object(l.b)("li",{parentName:"ul"},"raw",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"gorm:raw"))))),Object(l.b)("li",{parentName:"ul"},"RegisterDefaultCallbacks - \u9ed8\u8ba4 callback \u6ce8\u518c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u80fd\u770b\u5f97\u51fa\u6765\u6267\u884c\u8fc7\u7a0b"))),Object(l.b)("li",{parentName:"ul"},"\u5173\u7cfb - Relationship",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u5173\u8054"),Object(l.b)("li",{parentName:"ul"},"\u5176\u4ed6\u64cd\u4f5c\u53ef\u9009 - ",Object(l.b)("inlineCode",{parentName:"li"},"Select(clause.Associations)")," ",Object(l.b)("inlineCode",{parentName:"li"},'Select("Profile")')),Object(l.b)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u9488\u5bf9\u5173\u8054\u8fdb\u884c\u64cd\u4f5c - ",Object(l.b)("inlineCode",{parentName:"li"},'Association("Profile")')),Object(l.b)("li",{parentName:"ul"},"\u5173\u7cfb\u5904\u7406\u65b9\u5f0f\u5206\u4e3a JoinTable \u548c Reference"))),Object(l.b)("li",{parentName:"ul"},"gorm:preload",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u591a\u5c42\u7ea7 Preload \u4f1a\u6309\u5e8f - \u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},'Preload("Profile.Address")')," \u4f1a\u5206\u6210 ",Object(l.b)("inlineCode",{parentName:"li"},"Profile")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"Profile.Address")," \u4e24\u6b21\u5b8c\u6210"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u5173\u7cfb\u4e0d\u5b58\u5728\uff0c\u627e\u4e0d\u5230 Relationship \u76ee\u524d\u4f1a NPE"))),Object(l.b)("li",{parentName:"ul"},"\u8bed\u53e5\u6784\u5efa",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clause.Expression{ Build(Builder) }")," - \u8868\u793a\u4efb\u610f\u8bed\u53e5"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clause.Builder")," - WriteString, AddVar, WriteQuoted - \u6784\u5efa\u4e0a\u4e0b\u6587"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clause.Interface")," - \u5e26 Name \u7684 \u8868\u8fbe\u5f0f - \u53ef\u4ee5\u88ab\u5408\u5e76\u548c\u66ff\u6362 - \u4f8b\u5982 LIMIT, SELECT"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clause.Table"),", ",Object(l.b)("inlineCode",{parentName:"li"},"clause.Column")))),Object(l.b)("li",{parentName:"ul"},"Relationship \u5173\u8054\u7684 Schema \u53ef\u80fd\u548c\u5b9e\u9645 Schema \u4e0d\u540c - \u5bfc\u81f4\u65e0\u6cd5 Preload"),Object(l.b)("li",{parentName:"ul"},"Embed Struct \u4e5f\u662f\u5f53\u4f5c embedded \u6765\u5904\u7406\u7684\uff0c\u53ea\u4e0d\u8fc7\u6ca1\u6709\u524d\u7f00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u73b0\u5728\u5d4c\u5957\u591a\u5c42\u89e3\u6790\u7684 schema \u4f1a\u6709\u95ee\u9898 - ",Object(l.b)("a",{parentName:"li",href:"https://github.com/go-gorm/gorm/issues/3964"},"#3964"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},'// \u76f4\u63a5\u8c03\u7528 processor\nfunc TestPreloadOnly(t *testing.T){\n  // \u6a21\u578b\u53ea\u5305\u542b\u4e3b\u952e\n  var m models.User\n  m.ID = 1\n  // \u901a\u5e38\u903b\u8f91 - \u4f46\u6784\u9020\u51fa\u6765\u7684 stmt \u5305\u542b\u57fa\u7840\u4fe1\u606f\n  stmt := db.Model(&m).Preload("Profile")\n  // \u586b\u5145\u9700\u8981\u7684\u4fe1\u606f - \u6b63\u5e38\u903b\u8f91\u8fd9\u4e9b\u5b57\u6bb5\u4f1a\u88ab\u586b\u5145\n  stmt.Statement.Dest = stmt.Statement.Model\n  stmt.Statement.ReflectValue = reflect.ValueOf(stmt.Statement.Dest).Elem()\n  assert.NoError(t, stmt.Statement.Parse(stmt.Statement.Model))\n\n  // \u76f4\u63a5\u8c03\u7528 preload\n  callbacks.Preload(stmt)\n  assert.NoError(t, stmt.Error)\n\n  // \u5b57\u6bb5\u88ab\u6210\u529f preload\n  fmt.Println(m.Profile)\n}\n')))}m.isMDXComponent=!0}}]);