(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{165:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return s}));var t=r(2),o=r(7),a=(r(0),r(556)),l={id:"collabora",title:"Collabora Online"},c={unversionedId:"service/office/collabora",id:"service/office/collabora",isDocsHomePage:!1,title:"Collabora Online",description:"Collabora Online",source:"@site/contents/tricks/service/office/collabora.md",slug:"/service/office/collabora",permalink:"/notes/service/office/collabora",version:"current",sidebar:"docs",previous:{title:"\u529e\u516c\u5957\u4ef6",permalink:"/notes/service/office/office"},next:{title:"ONLYOFFICE",permalink:"/notes/service/office/onlyoffice"}},i=[],b={rightToc:i};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"collabora-online"},"Collabora Online"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u8fd0\u884c Libreoffice"),Object(a.b)("li",{parentName:"ul"},"\u754c\u9762\u6e32\u67d3\u5230\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef"),Object(a.b)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5904\u7406\u83dc\u5355\u3001\u5149\u6807\u3001\u6587\u672c\u9009\u62e9\u7b49"),Object(a.b)("li",{parentName:"ul"},"\u5f39\u51fa\u83dc\u5355\u548c\u4fa7\u8fb9\u680f\u4e5f\u662f\u7531\u670d\u52a1\u7aef\u6e32\u67d3"),Object(a.b)("li",{parentName:"ul"},"Collabora Online CODE \u5b9e\u73b0\u57fa\u4e8e LibreOffice Online LOOL (LOOLWSD)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"20 \u4eba\u9650\u5236\uff0c\u53ef\u81ea\u5df1\u7f16\u8bd1\u53d6\u6d88\u9650\u5236"),Object(a.b)("li",{parentName:"ul"},"\u4e24\u8005\u533a\u522b\u5e76\u4e0d\u5927"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://hub.docker.com/r/libreoffice/online"}),"libreoffice/online")," \u955c\u50cf")))),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'# https://www.collaboraoffice.com/code/docker/\n# \u7ba1\u7406\n# http://collabora.localhost/loleaflet/dist/admin/admin.html\n# -v $PWD/loolwsd.xml:/etc/loolwsd/loolwsd.xml \n# -e "extra_params=--o:ssl.enable=false" \u4e0d\u542f\u7528 ssl\n# \u652f\u6301\u591a\u4e2a\u57df\u540d \'domain=collaboradomain\\\\.tld|nextclouddomain\\\\.tld\'\n# \u57df\u540d\u4e3a nextcloud \u7684\u57df\u540d - \u8bbf\u95ee\u8005\u7684\u57df\u540d\n# \u542f\u52a8\u6bd4\u8f83\u6162 - \u4f1a link \u5f88\u591a\u8d44\u6e90\ndocker run --rm -it \\\n  -p 9980:9980 \\\n  -e "domain=collabora.localhost" \\\n  -e "username=admin" -e "password=S3cRet" \\\n  -e "extra_params=--o:ssl.enable=false --o:allowed_languages=zh_CN" \\\n  --cap-add MKNO \\\n  -e \'dictionaries=zh en\' \\\n  --name collabora collabora/code\n\n# \u62f7\u8d1d\u914d\u7f6e\ndocker cp collabora:/etc/loolwsd/loolwsd.xml loolwsd.xml\n')))}s.isMDXComponent=!0},556:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),s=function(e){var n=o.a.useContext(b),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=t,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?o.a.createElement(m,c(c({ref:n},b),{},{components:r})):o.a.createElement(m,c({ref:n},b))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var b=2;b<a;b++)l[b]=r[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);