(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{574:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),i=(r(0),r(787)),p={id:"wireguard",title:"WireGuard"},o={unversionedId:"ops/network/private/wireguard",id:"ops/network/private/wireguard",isDocsHomePage:!1,title:"WireGuard",description:"Tips",source:"@site/notes/ops/network/private/wireguard.md",slug:"/ops/network/private/wireguard",permalink:"/notes/ops/network/private/wireguard",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/private/wireguard.md",version:"current",sidebar:"docs",previous:{title:"tinyproxy",permalink:"/notes/ops/network/private/tinyproxy"},next:{title:"Zerotier",permalink:"/notes/ops/network/private/zerotier"}},c=[{value:"Tips",id:"tips",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u6865\u63a5\u6216DHCP",id:"\u6865\u63a5\u6216dhcp",children:[]}]}],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.wireguard.com/performance"},"\u6027\u80fd\u5bf9\u6bd4")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/k4yt3x/wireguard-mesh-configurator"},"WireGuard Mesh Configurator"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mesh \u914d\u7f6e\u5de5\u5177 - \u6279\u91cf\u751f\u6210\u914d\u7f6e"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u81ea\u52a8\u53d1\u73b0 - \u9700\u8981\u989d\u5916\u914d\u7f6e"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/WireGuard/wg-dynamic"},"wg-dynamic"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Wireguard Dynamic IP Configuration Tool"),Object(i.b)("li",{parentName:"ul"},"\u672a\u5b8c\u6210 - \u65e0\u7ef4\u62a4"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/gsliepen/tinc/issues/179"},"gsliepen/tinc#178")," - tinc: Wireguard backend"),Object(i.b)("li",{parentName:"ul"},"\u5e38\u89c1\u7aef\u53e3 51820"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.wireguard.com/known-limitations/"},"\u9650\u5236"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u5bf9\u5305\u505a\u6df7\u6dc6"),Object(i.b)("li",{parentName:"ul"},"\u901a\u9053\u4f7f\u7528 UDP - TCP over UDP"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 ChaCha20Poly1305 \u52a0\u5bc6\uff0c\u76ee\u524d\u57fa\u672c\u4e0d\u652f\u6301\u786c\u4ef6\u52a0\u901f"),Object(i.b)("li",{parentName:"ul"},"Roaming Mischief - \u6f2b\u6e38\u573a\u666f\u4e0d\u592a\u53cb\u597d"),Object(i.b)("li",{parentName:"ul"},"Identity Hiding Forward Secrecy"),Object(i.b)("li",{parentName:"ul"},"Post-Quantum Secrecy - \u52a0\u5bc6\u65b9\u5f0f\u4e0d\u662f\u540e\u91cf\u5b50\u65f6\u4ee3\u5b89\u5168\u7684"),Object(i.b)("li",{parentName:"ul"},"Denial of Service"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://restoreprivacy.com/wireguard"},"WireGuard VPN: What You Need to Know"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5185\u6838\u6a21\u5757\napk add wireguard-$(uname -r | sed -r 's/.*?-(.*)$/\\1/')\n# \u7528\u6237\u7a7a\u95f4\u5de5\u5177\napk add wireguard-tools\n\n# \u914d\u7f6e A \u7aef\n# ==========\n# \u751f\u6210\u5bc6\u94a5\u548c\u516c\u94a5\nwg genkey | tee wg0.pri | wg pubkey > wg0.pub\n# \u914d\u7f6e\u7f51\u5361\nip link add wg0 type wireguard\nip addr add 10.0.0.1/24 dev wg0\nwg set wg0 listen-port 51820 private-key wg0.pri\nip link set wg0 up\n\n# \u914d\u7f6e B \u7aef\n# ==========\n# \u751f\u6210\u5bc6\u94a5\u548c\u516c\u94a5\nwg genkey | tee wg0.pri | wg pubkey > wg0.pub\n# \u914d\u7f6e\u7f51\u5361\nip link add wg0 type wireguard\nip addr add 10.0.0.2/24 dev wg0\nwg set wg0 listen-port 51820 private-key wg0.pri\nip link set wg0 up\n\n# A -> B\n# ==========\n# \u5728 B \u6267\u884c - \u5c06\u8f93\u51fa\u7ed3\u679c\u5728 A \u6267\u884c\n# \u5982\u679c B \u6ca1\u6709 A \u80fd\u76f4\u63a5\u8bbf\u95ee\u7684\u5730\u5740 - \u5219\u5ffd\u7565 endpoint\necho wg set wg0 peer $(cat wg0.pub) persistent-keepalive 25 allowed-ips 10.0.0.2/32 endpoint <\u4e3b\u673aB\u5730\u5740>:51820\n\n# B -> A\n# ==========\n# \u5728 A \u6267\u884c - \u5c06\u8f93\u51fa\u7ed3\u679c\u5728 B \u6267\u884c\n# \u5982\u679c A \u6ca1\u6709 B \u80fd\u76f4\u63a5\u8bbf\u95ee\u7684\u5730\u5740 - \u5219\u5ffd\u7565 endpoint\necho wg set wg0 peer $(cat wg0.pub) persistent-keepalive 25 allowed-ips 10.0.0.1/32 endpoint <\u4e3b\u673aA\u5730\u5740>:51820\n\n# \u5728 B \u80fd\u8bbf\u95ee A\nping 10.0.0.1\n")),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"\u6865\u63a5\u6216dhcp"},"\u6865\u63a5\u6216DHCP"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"wg \u53ea\u652f\u6301 L3 - TCP/IP",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"DHCP \u9700\u8981 L2 \u5c42 MAC"))),Object(i.b)("li",{parentName:"ul"},"\u6865\u63a5\u7684\u7f51\u8def\u53ef\u4ee5\u8003\u8651\u901a\u8fc7\u8def\u7531\u5b9e\u73b0 - ",Object(i.b)("a",{parentName:"li",href:"https://lists.zx2c4.com/pipermail/wireguard/2018-January/002341.html"},"\u4f8b\u5982")),Object(i.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u6865\u63a5\u53ef\u4ee5\u8003\u8651 tinc \u7684 switch \u6a21\u5f0f\u6216\u8005 ",Object(i.b)("a",{parentName:"li",href:"https://remote-lab.net/linux-l2tp-ethernet-pseudowires"},"l2tp"))))}u.isMDXComponent=!0},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(p,".").concat(d)]||b[d]||s[d]||i;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);