(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{729:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),o=(n(0),n(787)),l={title:"OpenEBS"},b={unversionedId:"devops/kubernetes/storage/openebs",id:"devops/kubernetes/storage/openebs",isDocsHomePage:!1,title:"OpenEBS",description:"- openebs.io",source:"@site/notes/devops/kubernetes/storage/openebs.md",slug:"/devops/kubernetes/storage/openebs",permalink:"/notes/devops/kubernetes/storage/openebs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/openebs.md",version:"current",sidebar:"docs",previous:{title:"Longhorn",permalink:"/notes/devops/kubernetes/storage/longhorn"},next:{title:"Rook",permalink:"/notes/devops/kubernetes/storage/rook"}},p=[],i={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.openebs.io"},"openebs.io"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/openebs/openebs"},"openebs/openebs")))),Object(o.b)("li",{parentName:"ul"},"\u6e90\u4e8e longhorn ",Object(o.b)("a",{parentName:"li",href:"https://github.com/openebs/longhorn"},"fork"),"\uff0c\u5728\u4e00\u4e9b\u5b9e\u73b0\u4e0a\u6709\u5206\u6b67",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Control Plane functionality"),Object(o.b)("li",{parentName:"ul"},"iSCSI Target implementation"),Object(o.b)("li",{parentName:"ul"},"Quorum"),Object(o.b)("li",{parentName:"ul"},"Backup / Restore"),Object(o.b)("li",{parentName:"ul"},"UI")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5b58\u50a8\u7c7b\u578b")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Volume"),Object(o.b)("th",{parentName:"tr",align:null},"Storage"),Object(o.b)("th",{parentName:"tr",align:null},"Requirement"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"OpenEBS Mayastor"),Object(o.b)("td",{parentName:"tr",align:null},"SSDs/Cloud Volumes"),Object(o.b)("td",{parentName:"tr",align:null},"\u4f4e\u5ef6\u65f6, HA, \u540c\u6b65\u526f\u672c, \u5feb\u7167, \u514b\u9686, Thin provisioning")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"OpenEBS cStor"),Object(o.b)("td",{parentName:"tr",align:null},"Disks/SSDs/Cloud Volumes"),Object(o.b)("td",{parentName:"tr",align:null},"\u4fdd\u62a4\u8282\u70b9\u5f02\u5e38, \u540c\u6b65\u526f\u672c, \u5feb\u7167, \u514b\u9686, Thin provisioning")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"OpenEBS Jiva"),Object(o.b)("td",{parentName:"tr",align:null},"hostpath, \u5916\u90e8\u6302\u8f7d"),Object(o.b)("td",{parentName:"tr",align:null},"\u4fdd\u62a4\u8282\u70b9\u5f02\u5e38, \u540c\u6b65\u526f\u672c, Thin provisioning")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Local PV - Hostpath"),Object(o.b)("td",{parentName:"tr",align:null},"hostpath, \u5916\u90e8\u6302\u8f7d"),Object(o.b)("td",{parentName:"tr",align:null},"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Local PV - Device"),Object(o.b)("td",{parentName:"tr",align:null},"Disks/SSDs/Cloud Volumes"),Object(o.b)("td",{parentName:"tr",align:null},"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Local PV - ZFS"),Object(o.b)("td",{parentName:"tr",align:null},"Disks/SSDs/Cloud Volumes"),Object(o.b)("td",{parentName:"tr",align:null},"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377, \u5feb\u7167, \u514b\u9686")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Local PV - Rawfile"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"\u4f4e\u5ef6\u65f6, \u672c\u5730\u6301\u4e45\u5377")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u9700\u8981\u5148\u5b89\u88c5 iscsi\n# https://docs.openebs.io/docs/next/prerequisites.html\n\nhelm repo add openebs https://openebs.github.io/charts\nhelm repo update\nhelm install --namespace openebs --name openebs openebs/openebs\n\n# \u76f4\u63a5\u5b89\u88c5\nkubectl apply -f https://openebs.github.io/charts/openebs-operator.yaml\n")))}c.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,O=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(O,b(b({ref:t},i),{},{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);