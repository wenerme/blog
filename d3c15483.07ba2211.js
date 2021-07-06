(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{1114:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return s}));var r=n(0),a=n.n(r);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},b=Object.keys(t);for(r=0;r<b.length;r++)n=b[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)n=b[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createContext({}),p=function(t){var e=a.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=p(t.components);return a.a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,b=t.originalType,l=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,s=d["".concat(l,".").concat(m)]||d[m]||u[m]||b;return n?a.a.createElement(s,c(c({ref:e},i),{},{components:n})):a.a.createElement(s,c({ref:e},i))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=n.length,l=new Array(b);l[0]=m;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var i=2;i<b;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},949:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return o})),n.d(e,"default",(function(){return p}));var r=n(3),a=n(8),b=(n(0),n(1114)),l={title:"udhcpc"},c={unversionedId:"os/busybox/udhcpc",id:"os/busybox/udhcpc",isDocsHomePage:!1,title:"udhcpc",description:"Tips",source:"@site/notes/os/busybox/udhcpc.md",slug:"/os/busybox/udhcpc",permalink:"/notes/os/busybox/udhcpc",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/busybox/udhcpc.md",version:"current",sidebar:"docs",previous:{title:"toybox",permalink:"/notes/os/busybox/toybox"},next:{title:"EdgeOS",permalink:"/notes/os/network/edgeos"}},o=[{value:"Tips",id:"tips",children:[]}],i={toc:o};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://udhcp.busybox.net/README.udhcpc"},"https://udhcp.busybox.net/README.udhcpc")),Object(b.b)("li",{parentName:"ul"},"/usr/share/udhcpc/default.script"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wiki.alpinelinux.org/wiki/Udhcpc"},"https://wiki.alpinelinux.org/wiki/Udhcpc")),Object(b.b)("li",{parentName:"ul"},"signals",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"SIGUSR1 - \u5237\u65b0\u72b6\u6001\uff0c\u4f1a\u4ece\u65b0\u83b7\u53d6 IP"),Object(b.b)("li",{parentName:"ul"},"SIGUSR2 - \u91ca\u653e\u5f53\u524d\u79df\u7ea6\uff0c\u8fdb\u5165\u4e0d\u6d3b\u8dc3\u72b6\u6001\uff0c\u53d1\u9001 SIGUSR1 \u4fe1\u53f7\u53ef\u6fc0\u6d3b")))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"udhcpc -i eth1 -q\n")),Object(b.b)("p",null,"\u811a\u672c\u53d8\u91cf"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"env"),Object(b.b)("th",{parentName:"tr",align:null},"desc"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"$HOME")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"$HOME"),' \u53d8\u91cf\u6216 "/"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"$PATH")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"$PATH"),' \u53d8\u91cf\u6216 "/bin:/usr/bin:/sbin:/usr/sbin"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"$1")),Object(b.b)("td",{parentName:"tr",align:null},"action")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"interface"),Object(b.b)("td",{parentName:"tr",align:null},"interface")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ip"),Object(b.b)("td",{parentName:"tr",align:null},"ip")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"siaddr"),Object(b.b)("td",{parentName:"tr",align:null},"bootp next server option")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sname"),Object(b.b)("td",{parentName:"tr",align:null},"bootp server name option")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boot_file"),Object(b.b)("td",{parentName:"tr",align:null},"bootp boot file option")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"subnet"),Object(b.b)("td",{parentName:"tr",align:null},"subnet mask")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"timezone"),Object(b.b)("td",{parentName:"tr",align:null},"Offset in seconds from UTC")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"router"),Object(b.b)("td",{parentName:"tr",align:null},"A list of routers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"timesvr"),Object(b.b)("td",{parentName:"tr",align:null},"A list of time servers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"namesvr"),Object(b.b)("td",{parentName:"tr",align:null},"A list of IEN 116 name servers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"dns"),Object(b.b)("td",{parentName:"tr",align:null},"A list of DNS server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"logsvr"),Object(b.b)("td",{parentName:"tr",align:null},"A list of MIT LCS UDP log servers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"cookiesvr"),Object(b.b)("td",{parentName:"tr",align:null},"A list of RFC 865 cookie servers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"lprsvr"),Object(b.b)("td",{parentName:"tr",align:null},"A list of LPR servers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"hostname"),Object(b.b)("td",{parentName:"tr",align:null},"The assigned hostname")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bootsize"),Object(b.b)("td",{parentName:"tr",align:null},"The length in 512 octect blocks of the bootfile")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"domain"),Object(b.b)("td",{parentName:"tr",align:null},"The domain name of the network")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"swapsvr"),Object(b.b)("td",{parentName:"tr",align:null},"The IP address of the client's swap server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"rootpath"),Object(b.b)("td",{parentName:"tr",align:null},"The path name of the client's root disk")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ipttl"),Object(b.b)("td",{parentName:"tr",align:null},"The TTL to use for this network")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"mtu"),Object(b.b)("td",{parentName:"tr",align:null},"The MTU to use for this network")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"broadcast"),Object(b.b)("td",{parentName:"tr",align:null},"The broadcast address for this network")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ntpsrv"),Object(b.b)("td",{parentName:"tr",align:null},"A list of NTP servers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"wins"),Object(b.b)("td",{parentName:"tr",align:null},"A list of WINS servers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"lease"),Object(b.b)("td",{parentName:"tr",align:null},"The lease time, in seconds")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"dhcptype"),Object(b.b)("td",{parentName:"tr",align:null},"DHCP message type (safely ignored)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"serverid"),Object(b.b)("td",{parentName:"tr",align:null},"The IP of the server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"message"),Object(b.b)("td",{parentName:"tr",align:null},"Reason for a DHCPNAK")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"tftp"),Object(b.b)("td",{parentName:"tr",align:null},"The TFTP server name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bootfile"),Object(b.b)("td",{parentName:"tr",align:null},"The bootfile name")))))}p.isMDXComponent=!0}}]);