(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{297:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),c=(r(0),r(787)),l={id:"container-faq",title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",hide_title:!0},i={unversionedId:"devops/container/container-faq",id:"devops/container/container-faq",isDocsHomePage:!1,title:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",description:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898",source:"@site/notes/devops/container/container-faq.md",slug:"/devops/container/container-faq",permalink:"/notes/devops/container/container-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/container/container-faq.md",version:"current",sidebar:"docs",previous:{title:"CNI",permalink:"/notes/devops/container/cni"},next:{title:"juju",permalink:"/notes/devops/container/juju"}},o=[{value:"docker vs containerd",id:"docker-vs-containerd",children:[]},{value:"LXC vs LXD vs Docker",id:"lxc-vs-lxd-vs-docker",children:[]}],b={toc:o};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898"},"\u5bb9\u5668\u5e38\u89c1\u95ee\u9898"),Object(c.b)("h2",{id:"docker-vs-containerd"},"docker vs containerd"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"docker",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5e95\u5c42\u4f7f\u7528 containerd"),Object(c.b)("li",{parentName:"ul"},"\u7ba1\u7406 volume\u3001\u7f51\u7edc\u3001swarm\u3001service \u7b49"))),Object(c.b)("li",{parentName:"ul"},"containerd",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u66b4\u9732\u4e3a unix socket"),Object(c.b)("li",{parentName:"ul"},"grpc \u63a5\u53e3"),Object(c.b)("li",{parentName:"ul"},"\u5c01\u88c5\u5bb9\u5668\u8fd0\u884c\u65f6\u4e3a\u7edf\u4e00\u63a5\u53e3"),Object(c.b)("li",{parentName:"ul"},"Linux \u5e95\u5c42\u4f7f\u7528 runc"))),Object(c.b)("li",{parentName:"ul"},"containerd-shim",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"docker \u542f\u52a8\u7684\u6bcf\u4e2a\u5bb9\u5668\u7684\u7236\u8fdb\u7a0b"),Object(c.b)("li",{parentName:"ul"},"\u4e0d\u5bf9 docker \u76f4\u63a5\u4f9d\u8d56\uff0c\u5141\u8bb8\u5347\u7ea7 docker \u5b88\u62a4\u8fdb\u7a0b"),Object(c.b)("li",{parentName:"ul"},"\u7ef4\u62a4 STDIO \u548c fds"))),Object(c.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u56e0\u4e3a docker \u7edf\u4e00\u7ba1\u7406\uff0c\u9000\u51fa\u548c\u6e05\u7406\u90fd\u6bd4\u8f83\u65b9\u4fbf"),Object(c.b)("li",{parentName:"ul"},"conatinerd \u53ef\u80fd\u9700\u8981\u624b\u52a8\u6e05\u7406\u6b8b\u4f59\u7684 shim")))),Object(c.b)("h2",{id:"lxc-vs-lxd-vs-docker"},"LXC vs LXD vs Docker"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Docker",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e00\u822c\u7528\u4e8e\u9694\u79bb\u8fd0\u884c\u5355\u8fdb\u7a0b\u65e0\u72b6\u6001\u5e94\u7528"),Object(c.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u8003\u8651 init, supervisor, syslog, cron \u7b49\u573a\u666f"),Object(c.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86\u7279\u522b\u591a\u7684\u7ba1\u7406\u529f\u80fd",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6253\u5305"),Object(c.b)("li",{parentName:"ul"},"\u6784\u5efa"),Object(c.b)("li",{parentName:"ul"},"\u7f51\u7edc\u63d2\u4ef6"),Object(c.b)("li",{parentName:"ul"},"\u5b58\u50a8\u63d2\u4ef6"))),Object(c.b)("li",{parentName:"ul"},"\u6709\u6700\u5b8c\u6574\u7684\u751f\u6001"),Object(c.b)("li",{parentName:"ul"},"\u955c\u50cf\u901a\u5e38\u56f4\u7ed5\u5e94\u7528\uff0c\u751a\u81f3\u53ef\u80fd\u53ea\u662f\u5355\u5e94\u7528\u53ef\u6267\u884c\u6587\u4ef6"),Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8fd0\u884c\u5e94\u7528"))),Object(c.b)("li",{parentName:"ul"},"LXD",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e Docker \u901a\u8fc7 Daemon/\u5b88\u62a4\u8fdb\u7a0b \u57fa\u4e8e liblxc \u66b4\u9732 REST \u63a5\u53e3\u63d0\u4f9b\u7ba1\u7406\u5bb9\u5668\u529f\u80fd"),Object(c.b)("li",{parentName:"ul"},"\u5728 liblxc \u4e4b\u4e0a\u63d0\u4f9b\u4e00\u4e9b\u989d\u5916\u80fd\u529b"),Object(c.b)("li",{parentName:"ul"},"\u4e0e VMWare, KVM \u6280\u672f\u7ade\u4e89 - \u4f5c\u4e3a Hypervisor"))),Object(c.b)("li",{parentName:"ul"},"LXC",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5185\u6838\u66b4\u9732\u5230\u7528\u6237\u7a7a\u95f4\u7684\u63a5\u53e3"),Object(c.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5bb9\u5668\u6240\u9700\u7279\u6027\u548c\u80fd\u529b"),Object(c.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u7b80\u5355\u7684\u5de5\u5177\u6765\u521b\u5efa\u548c\u7ba1\u7406\u7cfb\u7edf\u5e94\u7528\u5bb9\u5668"),Object(c.b)("li",{parentName:"ul"},"VE - Virtual Environment - \u865a\u62df\u73af\u5883 - \u4e00\u4e2a\u9694\u79bb\u7684 OS \u5bb9\u5668"),Object(c.b)("li",{parentName:"ul"},"\u901a\u8fc7\u767b\u9646\u8fdb\u5165"),Object(c.b)("li",{parentName:"ul"},"\u6709\u6b63\u5e38\u7684 init, supervisor, syslog, cron"),Object(c.b)("li",{parentName:"ul"},"\u66f4\u7c7b\u4f3c\u4e8e chroot \u5c42\u7684\u6280\u672f",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u72ec\u7acb\u7684\u8fdb\u7a0b\u548c\u7f51\u7edc\u7a7a\u95f4"))),Object(c.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u66f4\u5e95\u5c42\uff0c\u6240\u4ee5\u914d\u7f6e\u548c\u4f7f\u7528\u4f1a\u66f4\u96be"),Object(c.b)("li",{parentName:"ul"},"\u955c\u50cf\u901a\u5e38\u662f\u4e00\u4e2a OS"),Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8fd0\u884c ",Object(c.b)("inlineCode",{parentName:"li"},"/sbin/init")))),Object(c.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://archives.flockport.com/lxc-vs-docker"},"lxc-vs-docker")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://linuxhint.com/lxd-vs-docker"},"lxd-vs-docker")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.inovex.de/blog/containers-docker-containerd-nabla-kata-firecracker/"},"Docker vs. containerd vs. Nabla vs. Kata vs. Firecracker"))))))}u.isMDXComponent=!0},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(r),s=n,O=p["".concat(l,".").concat(s)]||p[s]||m[s]||c;return r?a.a.createElement(O,i(i({ref:t},b),{},{components:r})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<c;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);