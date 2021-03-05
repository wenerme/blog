(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{489:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),l=(n(0),n(787)),i={title:"k0s"},b={unversionedId:"devops/kubernetes/distro/k0s",id:"devops/kubernetes/distro/k0s",isDocsHomePage:!1,title:"k0s",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/kubernetes/distro/k0s.md",slug:"/devops/kubernetes/distro/k0s",permalink:"/notes/devops/kubernetes/distro/k0s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k0s.md",version:"current",sidebar:"docs",previous:{title:"Kubernetes \u5f00\u53d1",permalink:"/notes/devops/kubernetes/dev/README"},next:{title:"K3S in Docker",permalink:"/notes/devops/kubernetes/distro/k3d"}},c=[{value:"k0s vs k3s",id:"k0s-vs-k3s",children:[]}],o={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c k3s \u7684\u7cbe\u7b80 k8s"),Object(l.b)("li",{parentName:"ul"},"\u7f51\u7edc\u9ed8\u8ba4 calico"),Object(l.b)("li",{parentName:"ul"},"etcd \u5c42\u4f7f\u7528 k3s \u7684 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/k3s-io/kine"},"k3s-io/kine")),Object(l.b)("li",{parentName:"ul"},"\u80cc\u540e\u7531 Mirants \u516c\u53f8\u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"bin \u5305\u542b\u4e86 containerd"),Object(l.b)("li",{parentName:"ul"},"\u81ea 2020 \u5e74 - \u76f8\u6bd4 k3s \u8981\u5e74\u8f7b\u5f88\u591a")))),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"k0s-vs-k3s"},"k0s vs k3s"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"k0s",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CIS security benchmark"),Object(l.b)("li",{parentName:"ul"},"FIPS 140-2"))),Object(l.b)("li",{parentName:"ul"},"k3s",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CNCF \u9879\u76ee - \u8131\u79bb\u4e86 rancher"),Object(l.b)("li",{parentName:"ul"},"\u989d\u5916\u9ed8\u8ba4\u7ec4\u4ef6",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"helm-controller - \u652f\u6301\u90e8\u7f72 helm chart, CDR \u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"traefik v1 - \u63d0\u4f9b ingress \u80fd\u529b - \u901a\u8fc7 helm \u90e8\u7f72"),Object(l.b)("li",{parentName:"ul"},"local-path-provisioner - \u63d0\u4f9b\u57fa\u4e8e\u672c\u5730\u76ee\u5f55\u7684\u5b58\u50a8\u7c7b"),Object(l.b)("li",{parentName:"ul"},"klipper-lb - \u57fa\u4e8e iptable \u8f6c\u53d1\u7684\u8d1f\u8f7d\u5747\u8861")))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"vs."),Object(l.b)("th",{parentName:"tr",align:null},"k0s"),Object(l.b)("th",{parentName:"tr",align:null},"k3s"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Version"),Object(l.b)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u7248\u672c \u4f8b\u5982 v1.0.0"),Object(l.b)("td",{parentName:"tr",align:null},"\u7248\u672c\u57fa\u4e8e k8s - \u4f8b\u5982 1.19.1+k3s1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Default CNi"),Object(l.b)("td",{parentName:"tr",align:null},"calico"),Object(l.b)("td",{parentName:"tr",align:null},"flannel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u5546\u4e1a\u516c\u53f8"),Object(l.b)("td",{parentName:"tr",align:null},"Mirants"),Object(l.b)("td",{parentName:"tr",align:null},"Rancher/SUSE")))))}u.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||s[m]||l;return n?a.a.createElement(d,b(b({ref:t},o),{},{components:n})):a.a.createElement(d,b({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);