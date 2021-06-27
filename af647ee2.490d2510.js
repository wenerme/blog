(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||l;return n?a.a.createElement(O,o(o({ref:t},u),{},{components:n})):a.a.createElement(O,o({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},784:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),l=(n(0),n(1096)),i={title:"MTU"},o={unversionedId:"os/linux/network/mtu",id:"os/linux/network/mtu",isDocsHomePage:!1,title:"MTU",description:"- MTU - Maximum transmission unit",source:"@site/notes/os/linux/network/mtu.md",slug:"/os/linux/network/mtu",permalink:"/notes/os/linux/network/mtu",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/mtu.md",version:"current",sidebar:"docs",previous:{title:"MitmProxy",permalink:"/notes/os/linux/network/mitmproxy"},next:{title:"\u7f51\u7edc\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/linux/network/network-faq"}},c=[{value:"PMTU",id:"pmtu",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MTU - ",Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Maximum_transmission_unit"},"Maximum transmission unit"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6700\u5927\u4f20\u8f93\u5355\u5143"),Object(l.b)("li",{parentName:"ul"},"\u8d85\u8fc7 MTU \u4ea7\u751f \u788e\u7247/fragment",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e DF don't fragment"))))),Object(l.b)("li",{parentName:"ul"},"Tinc \u9ed8\u8ba4 PMTU 1431"),Object(l.b)("li",{parentName:"ul"},"Ping \u5934 28 = 20 IP + 8 ICMP")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Transport"),Object(l.b)("th",{parentName:"tr",align:null},"MTU"),Object(l.b)("th",{parentName:"tr",align:null},"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Ethvernet v2"),Object(l.b)("td",{parentName:"tr",align:null},"1500"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Ethvernet jumbo frames"),Object(l.b)("td",{parentName:"tr",align:null},"1501-9202+"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"PPPoE v2"),Object(l.b)("td",{parentName:"tr",align:null},"1492"),Object(l.b)("td",{parentName:"tr",align:null},"PPPoE+8")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"IEEE 802.11/Wi-Fi"),Object(l.b)("td",{parentName:"tr",align:null},"2304"),Object(l.b)("td",{parentName:"tr",align:null},"WEP+8,WPA-TKIP+20,WPA2-CCMP+16")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e00\u822c\u6700\u5927 1464\n# 1500=1464+20+8+8 = Body+IP+ICMP+PPoE\nping -s 1464 baidu.com\n\n# \u4f46\u6709\u4e9b\u652f\u6301\u66f4\u5927\u7684 MTU\nping -s 2000 wener.me\n")),Object(l.b)("h2",{id:"pmtu"},"PMTU"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PMTUD - Path MTU Discovery - \u81ea\u52a8\u53d1\u73b0\u94fe\u8def MTU",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"IPv4 \u53ef\u9009, IPv6 \u5f3a\u5236"))),Object(l.b)("li",{parentName:"ul"},"socket \u9009\u9879 IP_MTU_DISCOVER - \u9ed8\u8ba4\u5f00\u542f"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c\u65e0\u8fde\u63a5\uff0c\u4e0d\u7a33\u5b9a\u8fde\u63a5\u4e0d\u4f1a\u5f00\u542f PMTUD")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e3a 0 \u8868\u793a\u5f00\u542f pmtu\ncat /proc/sys/net/ipv4/ip_no_pmtu_disc\n\nsudo apk add iputils\n# \u53d1\u4fe1\u606f/probe mtu\ntracepath -n 114.114.114.114\n\n# \u8fd4\u56de\u5f53\u524d\u7684\u8def\u7531\u7f13\u5b58\u548c MTU\nip route get 114.114.114.114\n")))}b.isMDXComponent=!0}}]);