(window.webpackJsonp=window.webpackJsonp||[]).push([[1002],{1075:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),i=(t(0),t(1114)),a={slug:"hello-cgo",title:"Hello CGO",tags:["\u5f00\u53d1","Golang"]},l={permalink:"/story/hello-cgo",editUrl:"https://github.com/wenerme/wener/edit/master/story/2020/2020-05-28-hello-cgo.md",source:"@site/story/2020/2020-05-28-hello-cgo.md",description:"Tips",date:"2020-05-28T00:00:00.000Z",tags:[{label:"\u5f00\u53d1",permalink:"/story/tags/\u5f00\u53d1"},{label:"Golang",permalink:"/story/tags/golang"}],title:"Hello CGO",readingTime:1.21,truncated:!1,prevItem:{title:"\u4e00\u5468 K3S \u5b66\u4e60\u5fc3\u5f97",permalink:"/story/k3s-one-week"},nextItem:{title:"Wener's APIs",permalink:"/story/wener-apis"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u521d\u8bd5",id:"\u521d\u8bd5",children:[]}],m={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/zchee/b9c99695463d8902cd33"},"\u7c7b\u578b\u8f6c\u6362"))),Object(i.b)("h2",{id:"\u521d\u8bd5"},"\u521d\u8bd5"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# \u751f\u6210 libdemo.so libdemo.h\ngo build -buildmode=c-shared -o libdemo.so ./demo.go\n# \u7f16\u8bd1 main\ngo build main.go\n./main\n\n# macos - \u67e5\u770b\u5185\u5bb9\nnm libdemo.so | grep hello -i\n# linux\nnm libdemo.so\n# windows\ndumpbin /EXPORTS libdemo.dll\n\n# windows \u4ea4\u53c9\u7f16\u8bd1 - \u9700\u8981\u5b89\u88c5 mingw\nbrew install mingw-w64\n\n# 32 \u4f4d \u4ea4\u53c9\u7f16\u8bd1\nGOOS=windows GOARCH=386 CGO_ENABLED=1 CC=i686-w64-mingw32-gcc go build -buildmode=c-shared -o libdemo.dll ./demo.go\nGOOS=windows GOARCH=386 CGO_ENABLED=1 CC=i686-w64-mingw32-gcc go build main.go\n\n# macos wine \u4e0d\u652f\u6301 32 \u4f4d - mingw \u7248\u672c\u4f4e\u4e0d\u652f\u6301 64 \u4f4d\n# mac \u4f1a\u51fa\u73b0\u5f02\u5e38 cc1: sorry, unimplemented: 64-bit mode not compiled in\n# \u901a\u8fc7 docker \u7f16\u8bd1\ndocker run --rm -v $HOME/go:/root/go -v $PWD:/host -w /host wener/go:win sh\n\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CC=x86_64-w64-mingw32-gcc go build -buildmode=c-shared -o libdemo.dll ./demo.go\nGOOS=windows GOARCH=amd64 CGO_ENABLED=1 CC=x86_64-w64-mingw32-gcc go build main.go\n\n# \u56de\u5230 mac \u4f7f\u7528 wine \u6267\u884c\n# wine \u65e0\u6cd5\u5728 macos \u4e0a\u7f16\u8bd1\u5b89\u88c5 - \u7cfb\u7edf\u7248\u672c\u95ee\u9898 - \u9700\u8981\u4f7f\u7528 cask \u5b89\u88c5\nbrew cask install wine-stable\nwine64 main.exe\n\n# wine 4.0 \u521d\u59cb\u5316 dll \u5931\u8d25\n# 0010:fixme:winsock:set_dont_fragment IP_DONTFRAGMENT for IPv4 not supported in this platform\n# 0009:err:module:attach_dlls "libdemo.dll" failed to initialize, aborting\n# 0009:err:module:attach_dlls Initializing dlls for L"Z:\\\\Users\\\\wener\\\\demo\\\\main.exe" failed, status c0000005\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"demo.go")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "C"\n\n//export Version\nfunc Version() int32 {\n    return 123\n}\n\n//export Hello\nfunc Hello(name *C.char) *C.char {\n    return C.CString("Hello "+C.GoString(name)+"!")\n}\n\nfunc main() {}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"main.go")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\n/*\n#cgo CFLAGS: -I.\n#cgo LDFLAGS: -L. -ldemo\n#include "libdemo.h"\n*/\nimport "C"\n\nfunc main() {\n    fmt.Printf("Int %v String %v\\n",C.Version(), C.GoString(C.Hello(C.CString("Wener"))))\n}\n')))}s.isMDXComponent=!0},1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),s=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,b=d["".concat(a,".").concat(u)]||d[u]||p[u]||i;return t?o.a.createElement(b,l(l({ref:n},m),{},{components:t})):o.a.createElement(b,l({ref:n},m))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=t[m];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);