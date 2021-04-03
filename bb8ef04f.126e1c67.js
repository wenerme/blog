(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{686:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),l=(n(0),n(879)),i={title:"graphql"},o={unversionedId:"languages/go/lib/graphql",id:"languages/go/lib/graphql",isDocsHomePage:!1,title:"graphql",description:"graphql-go/graphql",source:"@site/notes/languages/go/lib/graphql.md",slug:"/languages/go/lib/graphql",permalink:"/notes/languages/go/lib/graphql",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/lib/graphql.md",version:"current",sidebar:"docs",previous:{title:"gqlgen",permalink:"/notes/languages/go/lib/gqlgen"},next:{title:"ccache",permalink:"/notes/dev/build/ccache"}},c=[{value:"graphql-go/graphql",id:"graphql-gographql",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"graphql-gographql"},"graphql-go/graphql"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/graphql-go/graphql"},"graphql-go/graphql")," \u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Golang GraphQL \u89e3\u6790\u3001\u6267\u884c\u5e93"),Object(l.b)("li",{parentName:"ul"},"Code First - \u5148 Go \u4ee3\u7801\uff0c\u7136\u540e\u751f\u6210 GraphQL"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 struct \u6784\u5efa\u5185\u5bb9\u751f\u6210 graphql schema"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 struct \u6784\u5efa resolver \u548c\u7c7b\u578b\u5b57\u6bb5\u5904\u7406"),Object(l.b)("li",{parentName:"ul"},"\u6784\u5efa\u8fc7\u7a0b\u548c\u6267\u884c\u8fc7\u7a0b\u53ef\u4ee5\u4f7f\u7528 thunk \u6a21\u5f0f - \u8fd4\u56de\u51fd\u6570\uff0c\u7528\u5230\u7684\u65f6\u5019\u518d\u6267\u884c"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u5b58\u5728\u5faa\u73af\u4f9d\u8d56\uff0c\u5ef6\u8fdf\u6267\u884c\u4e5f\u80fd\u8fdb\u884c\u5176\u4ed6\u4f18\u5316"))),Object(l.b)("li",{parentName:"ul"},"resolve - ",Object(l.b)("inlineCode",{parentName:"li"},"func(p ResolveParams) (interface{}, error)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"DefaultResolveFn - field \u9ed8\u8ba4 resolve",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 map \u548c struct - \u4e0d\u652f\u6301 Embed struct"),Object(l.b)("li",{parentName:"ul"},"\u5b57\u6bb5\u6bd4\u8f83\u5ffd\u7565\u5927\u5c0f\u5199"))),Object(l.b)("li",{parentName:"ul"},"source \u4e5f\u53ef\u4ee5\u5b9e\u73b0 FieldResolver - \u8fd9\u6837\u53ef\u4ee5\u4ea4\u7531\u8fd4\u56de\u7ed3\u679c\u5224\u65ad\u5982\u4f55 resolve"),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c\u8fc7\u7a0b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6536\u96c6\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"resolve \u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u503c - \u5904\u7406 promise\u3001\u5e8f\u5217\u5316 scalars\u3001\u6267\u884c\u4e0b\u7ea7\u5b57\u6bb5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"thunk \u5ef6\u8fdf"),Object(l.b)("li",{parentName:"ul"},"null \u68c0\u67e5"),Object(l.b)("li",{parentName:"ul"},"list \u5c55\u5f00"),Object(l.b)("li",{parentName:"ul"},"union \u548c interface \u5b9e\u9645\u7c7b\u578b\u68c0\u6d4b"),Object(l.b)("li",{parentName:"ul"},"object \u5c55\u5f00 - \u5411\u4e0b\u6c42\u503c"))))))),Object(l.b)("li",{parentName:"ul"},"\u6269\u5c55",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ParseDidStart(context.Context) (context.Context, ParseFinishFunc)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ValidationDidStart(context.Context) (context.Context, ValidationFinishFunc)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ExecutionDidStart(context.Context) (context.Context, ExecutionFinishFunc)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ResolveFieldDidStart(context.Context, *ResolveInfo) (context.Context, ResolveFieldFinishFunc)"))))))}u.isMDXComponent=!0},879:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,g=b["".concat(i,".").concat(m)]||b[m]||s[m]||l;return n?a.a.createElement(g,o(o({ref:t},p),{},{components:n})):a.a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);