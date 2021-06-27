(window.webpackJsonp=window.webpackJsonp||[]).push([[816],{1096:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(a),j=r,m=s["".concat(o,".").concat(j)]||s[j]||u[j]||i;return a?n.a.createElement(m,c(c({ref:t},p),{},{components:a})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},890:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(8),i=(a(0),a(1096)),o={id:"productive",title:"\u751f\u4ea7\u529b"},c={unversionedId:"java/library/productive",id:"java/library/productive",isDocsHomePage:!1,title:"\u751f\u4ea7\u529b",description:"\u589e\u52a0 Java \u751f\u4ea7\u529b\u7684\u76f8\u5173\u5de5\u5177\u548c\u5e93",source:"@site/notes/java/library/productive.md",slug:"/java/library/productive",permalink:"/notes/java/library/productive",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/library/productive.md",version:"current",sidebar:"docs",previous:{title:"Hibernate",permalink:"/notes/java/library/hibernate-orm"},next:{title:"Quarkus",permalink:"/notes/java/library/quarkus"}},l=[{value:"Tips",id:"tips",children:[]},{value:"APT",id:"apt",children:[]}],p={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u589e\u52a0-java-\u751f\u4ea7\u529b\u7684\u76f8\u5173\u5de5\u5177\u548c\u5e93"},"\u589e\u52a0 Java \u751f\u4ea7\u529b\u7684\u76f8\u5173\u5de5\u5177\u548c\u5e93"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.jsonschema2pojo.org/"},"http://www.jsonschema2pojo.org/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/javaparser/javaparser"},"javaparser/javaparser"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://javaparser.org"},"javaparser.org")),Object(i.b)("li",{parentName:"ul"},"Java 9 Parser and Abstract Syntax Tree for Java")))),Object(i.b)("h2",{id:"apt"},"APT"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://jcp.org/en/jsr/detail?id=269"},"JSR 269"),": Pluggable Annotation Processing API"),Object(i.b)("li",{parentName:"ul"},"Java 8 ",Object(i.b)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/index.html?javax/annotation/processing/package-summary.html"},"javax.annotation.processing")),Object(i.b)("li",{parentName:"ul"},"Java 9 ",Object(i.b)("a",{parentName:"li",href:"https://docs.oracle.com/javase/9/docs/api/index.html?javax/annotation/processing/package-summary.html"},"javax.annotation.processing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.jianshu.com/p/d294bf008bec"},"http://www.jianshu.com/p/d294bf008bec")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/119"},"JEP 119"),": javax.lang.model Implementation Backed by Core Reflection"),Object(i.b)("li",{parentName:"ul"},"javax.annotation.processing.Processor"),Object(i.b)("li",{parentName:"ul"},"javax.annotation.processing.AbstractProcessor"),Object(i.b)("li",{parentName:"ul"},"javax.annotation.processing"),Object(i.b)("li",{parentName:"ul"},"javax.lang.model"),Object(i.b)("li",{parentName:"ul"},"javax.annotation.processing.SupportedAnnotationTypes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6ce8\u89e3\u7c7b\u578b"))),Object(i.b)("li",{parentName:"ul"},"javax.annotation.processing.SupportedSourceVersion",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6e90\u7801\u7248\u672c"))),Object(i.b)("li",{parentName:"ul"},"javax.annotation.processing.SupportedOptions",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u7684\u53c2\u6570, \u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u4f20\u5165"))),Object(i.b)("li",{parentName:"ul"},"javac",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-Akey[=value]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u53c2\u6570\u4f20\u9012"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-proc:{none|only}"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u542f\u7528\u6216\u53ea\u8fdb\u884c\u6ce8\u89e3\u5904\u7406"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-processorpath path")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-s dir"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u751f\u6210\u6e90\u7801\u76ee\u5f55"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-processor class1[,class2,class3\u2026]"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6307\u5b9a\u6ce8\u89e3\u5904\u7406\u5668")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'@SupportedAnnotationTypes("org.mapstruct.Mapper")\n@SupportedOptions({\n    "ABC"\n})\npublic class MyProcessor extends AbstractProcessor {\n\n}\n')))}b.isMDXComponent=!0}}]);