(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{513:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),c=(n(0),n(556)),i={id:"objc",title:"Object C"},o={unversionedId:"languages/objc",id:"languages/objc",isDocsHomePage:!1,title:"Object C",description:"Object C",source:"@site/contents/tricks/languages/objc.md",slug:"/languages/objc",permalink:"/notes/languages/objc",version:"current"},l=[{value:"Tips",id:"tips",children:[]},{value:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef",id:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef",children:[]},{value:"OpenCV",id:"opencv",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"object-c"},"Object C"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("h2",{id:"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef"},"\u8bf7\u6c42\u65b9\u6cd5\u9519\u8bef"),Object(c.b)("p",null,"URL Connection \u5904\u7406\u91cd\u5b9a\u5411\u65f6, \u8bf7\u6c42\u65b9\u6cd5\u53ef\u80fd\u4f1a\u4e0d\u6b63\u786e "),Object(c.b)("h2",{id:"opencv"},"OpenCV"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://docs.opencv.org/2.4/doc/tutorials/ios/video_processing/video_processing.html"}),"http://docs.opencv.org/2.4/doc/tutorials/ios/video_processing/video_processing.html"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u4f9d\u8d56\u7684\u6846\u67b6"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Accelerate"),Object(c.b)("li",{parentName:"ul"},"AssetsLibrary"),Object(c.b)("li",{parentName:"ul"},"AVFoundation"),Object(c.b)("li",{parentName:"ul"},"CoreGraphics"),Object(c.b)("li",{parentName:"ul"},"CoreImage"),Object(c.b)("li",{parentName:"ul"},"CoreMedia"),Object(c.b)("li",{parentName:"ul"},"CoreVideo"),Object(c.b)("li",{parentName:"ul"},"QuartzCore"),Object(c.b)("li",{parentName:"ul"},"UIKit"),Object(c.b)("li",{parentName:"ul"},"Foundation"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u9700\u8981\u6dfb\u52a0\u7684 PCH"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'#import <Availability.h>\n\n#ifndef __IPHONE_4_0\n#warning "This project uses features only available in iOS SDK 4.0 and later."\n#endif\n\n#ifdef __cplusplus\n#import <opencv2/opencv.hpp>\n#endif\n\n#ifdef __OBJC__\n        #import <UIKit/UIKit.h>\n        #import <Foundation/Foundation.h>\n#endif\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5e38\u89c1\u95ee\u9898",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u627e\u4e0d\u5230 'opencv2/opencv.hpp'",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u6846\u67b6\u641c\u7d22\u4f4d\u7f6e\u4e0d\u5bf9,\u53ef\u4ee5\u5c1d\u8bd5\u624b\u52a8\u6dfb\u52a0\u6846\u67b6\u641c\u7d22\u8def\u5f84"))),Object(c.b)("li",{parentName:"ul"},"Swift \u5982\u4f55\u8c03\u7528",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e00\u4e2a Bridging-Header, \u7136\u540e\u5199\u597d\u54cd\u5e94\u7684 '.mm' \u5305\u88c5\u65b9\u6cd5 \u63d0\u4f9b\u7ed9 Swift \u8c03\u7528")))))))}b.isMDXComponent=!0},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),O=r,m=u["".concat(i,".").concat(O)]||u[O]||s[O]||c;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);