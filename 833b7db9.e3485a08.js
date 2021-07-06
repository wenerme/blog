(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},610:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(1114)),l={title:"Go XML"},c={unversionedId:"languages/go/go-xml",id:"languages/go/go-xml",isDocsHomePage:!1,title:"Go XML",description:"- xmllint",source:"@site/notes/languages/go/go-xml.md",slug:"/languages/go/go-xml",permalink:"/notes/languages/go/go-xml",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-xml.md",version:"current",sidebar:"docs",previous:{title:"Golang Windows",permalink:"/notes/languages/go/go-windows"},next:{title:"Go2",permalink:"/notes/languages/go/go2"}},i=[],s={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://xmlsoft.org/xmllint.html"},"xmllint"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u683c\u5f0f\u5316\u3001\u79fb\u9664\u5f15\u7528")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-go"},'type Content struct {\n  Useful  struct {\n    Attrs []xml.Attr `xml:",any,attr"`\n    Data  string     `xml:",innerxml"`\n  } `xml:"Useful"`\n}\n\n// \u5b8c\u6574\u8282\u70b9\u5185\u5bb9\u5305\u542b tag\ntype rawxml string\nfunc (r *rawxml) UnmarshalXML(d *xml.Decoder, start xml.StartElement) error {\n    var s struct {\n        Inner string `xml:",innerxml"`\n    }\n    if err := d.DecodeElement(&s, &start); err != nil {\n        return err\n    }\n    var attrs string\n    for _, a := range start.Attr {\n        attrs += fmt.Sprintf(` %s=%q`, a.Name.Local, a.Value)\n    }\n    name := start.Name.Local\n    *r = rawxml(fmt.Sprintf(`<%s%s>%s</%s>`, name, attrs, s.Inner, name))\n    return nil\n}\n\n')))}u.isMDXComponent=!0}}]);