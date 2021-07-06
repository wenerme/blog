(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(g,i(i({ref:t},b),{},{components:n})):a.a.createElement(g,i({ref:t},b))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},371:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),l=(n(0),n(1114)),o={title:"CGO"},i={unversionedId:"languages/go/go-cgo",id:"languages/go/go-cgo",isDocsHomePage:!1,title:"CGO",description:"- \u907f\u514d CGO",source:"@site/notes/languages/go/go-cgo.md",slug:"/languages/go/go-cgo",permalink:"/notes/languages/go/go-cgo",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-cgo.md",version:"current",sidebar:"docs",previous:{title:"Go Build",permalink:"/notes/languages/go/go-build"},next:{title:"Go FAQ",permalink:"/notes/languages/go/go-faq"}},c=[{value:"dlopen",id:"dlopen",children:[]},{value:"sqlite",id:"sqlite",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u907f\u514d CGO",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/notti/nocgo"},"notti/nocgo")," - dlopen without cgo",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"dlopen, dlclose, dlerror, dlsym"),Object(l.b)("li",{parentName:"ul"},"ffi \u6c47\u7f16, \u652f\u6301 386 \u548c amd64"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/rainycape/dl"},"rainycape/dl")," - dlopen / dlsym"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/golang/go/issues/18296"},"golang/go#18296")," - runtime: dlopen/dlsym without CGo")))),Object(l.b)("h2",{id:"dlopen"},"dlopen"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b so symbol\n# \u6ca1\u6709\u5730\u5740\u7684 symbol \u662f\u52a8\u6001\u7684\nnm -gDC /usr/lib/libsqlite3.so\nobjdump -TC libz.so\nreadelf -Ws libz.so\n# \u53ea\u770b symbol\nreadelf -Ws /usr/lib/libsqlite3.so | awk '{print $8}';\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-go"},'// +build !cgo\n\npackage dlopen\n\n// we have to use the 3 argument format here :( - 2 argument format is only allowed from inside cgo\n\n//go:cgo_import_dynamic libc_dlopen_x dlopen "libdl.so.2"\n//go:cgo_import_dynamic libc_dlclose_x dlclose "libdl.so.2"\n//go:cgo_import_dynamic libc_dlsym_x dlsym "libdl.so.2"\n//go:cgo_import_dynamic libc_dlerror_x dlerror "libdl.so.2"\n\n// on amd64 we don\'t need the following line - on 386 we do...\n// anyway - with those lines the output is better (but doesn\'t matter) - without it on amd64 we get multiple DT_NEEDED with "libc.so.6" etc\n\n//go:cgo_import_dynamic _ _ "libdl.so.2"\n')),Object(l.b)("h2",{id:"sqlite"},"sqlite"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/mattn/go-sqlite3"},"mattn/go-sqlite3"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-tags libsqlite3")," \u53ef link libsqlite3.so"))),Object(l.b)("li",{parentName:"ul"},"No CGO",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/iamacarpet/go-sqlite3-win64"},"iamacarpet/go-sqlite3-win64"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sqlite3.dll wrapper"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/cvilsmeier/sqinn-go"},"cvilsmeier/sqinn-go"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e sqlite \u547d\u4ee4\u884c\u8fdb\u884c IO \u64cd\u4f5c"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/alicebob/sqlittle"},"alicebob/sqlittle"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u76f4\u63a5\u8bfb\u53d6\u6587\u4ef6 - \u4e0d\u652f\u6301 SQL"),Object(l.b)("li",{parentName:"ul"},"\u53ea\u8bfb"),Object(l.b)("li",{parentName:"ul"},"incompatible database version",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8981\u6c42 journal mode"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 WAL"),Object(l.b)("li",{parentName:"ul"},"schema format > 1"),Object(l.b)("li",{parentName:"ul"},"UTF8 encoding")))))))))}p.isMDXComponent=!0}}]);