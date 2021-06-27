(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1096:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||l;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),l=(n(0),n(1096)),o={id:"iptables-rule",title:"iptables \u89c4\u5219"},i={unversionedId:"os/linux/network/iptables-rule",id:"os/linux/network/iptables-rule",isDocsHomePage:!1,title:"iptables \u89c4\u5219",description:"* \u53c2\u8003",source:"@site/notes/os/linux/network/iptables-rule.md",slug:"/os/linux/network/iptables-rule",permalink:"/notes/os/linux/network/iptables-rule",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iptables-rule.md",version:"current",sidebar:"docs",previous:{title:"iptables \u53c2\u8003",permalink:"/notes/os/linux/network/iptables-ref"},next:{title:"IPTables",permalink:"/notes/os/linux/network/iptables"}},s=[{value:"Multi WAN",id:"multi-wan",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://making.pusher.com/per-ip-rate-limiting-with-iptables/"},"Per-IP rate limiting with iptables"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# %50 \u5305\u4e22\u5f03\n-A INPUT -i eth0 -m statistic --mode random --probability 0.5000 -j DROP\n\n# DOCKER\n# https://docs.docker.com/network/iptables/\n# \u4e0d\u5141\u8bb8 eth0 \u6d41\u91cf\u8bbf\u95ee docker \u66b4\u9732\u7684 443\n-I DOCKER-USER -i eth0 -p tcp -m tcp --dport 443 -j DROP\n# \u53ea\u5141\u8bb8 443 \u548c 80\n-I DOCKER-USER 1 -i eth0 -p tcp -m state --state NEW -m multiport ! --dports 443,80 -j DROP;\n\n# syn \u9650\u6d41\n-A INPUT -p tcp  --syn -m limit --limit 30/s --limit-burst 30 -j ACCEPT\n# \u4f7f\u7528 hashlimit \u4f1a\u66f4\u5408\u7406 - \u6bcf\u4e2a ip 15/s\n-A INPUT -p tcp --syn -m hashlimit --hashlimit 15/s --hashlimit-burst 30 --hashlimit-mode srcip --hashlimit-srcmask 32 --hashlimit-name synattack -j ACCEPT\n# \u9ed8\u8ba4\u4e22\u5f03\n-A INPUT -p tcp --syn -j DROP\n\n# \u7acb\u5373 REJECT \u800c\u4e0d\u662f\u7b49\u5f85\u8d85\u65f6\n-A INPUT -p tcp -s 192.168.1.0/24 --dport 443 -j REJECT --reject-with tcp-reset\n\n# \u5982\u679c\u60f3\u8981\u9650\u5b9a forward \u89c4\u5219\uff0c\u53ef\u4ee5\u5728\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a accept \u6765\u5224\u65ad\u662f\u5426\u8fd8\u6709\u672a\u5141\u8bb8\u7684\n-A FORWARD  -j ACCEPT\n")),Object(l.b)("h2",{id:"multi-wan"},"Multi WAN"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/87999/47774"},"https://unix.stackexchange.com/a/87999/47774")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/71834/47774"},"https://unix.stackexchange.com/a/71834/47774"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# reset\niptables -t mangle -F\niptables -t mangle -X\n\n# fwmark\niptables -t mangle -A PREROUTING -j CONNMARK --restore-mark\n# \u5982\u679c\u672a\u8bbe\u7f6e\niptables -t mangle -A PREROUTING -m mark ! --mark 0 -j RETURN\niptables -t mangle -A PREROUTING -i wan      -j MARK --set-mark $MARK_CAVTEL\niptables -t mangle -A PREROUTING -i comcast  -j MARK --set-mark $MARK_COMCAST\niptables -t mangle -A PREROUTING -i vz-dsl   -j MARK --set-mark $MARK_VZDSL\n\niptables -t mangle -A POSTROUTING -o wan     -j MARK --set-mark $MARK_CAVTEL\niptables -t mangle -A POSTROUTING -o comcast -j MARK --set-mark $MARK_COMCAST\niptables -t mangle -A POSTROUTING -o vz-dsl  -j MARK --set-mark $MARK_VZDSL\niptables -t mangle -A POSTROUTING -j CONNMARK --save-mark\n\n##### NAT ######\niptables -t nat -F\niptables -t nat -X\nfor local in \xablist of internal IP/netmask combos\xbb; do\n    iptables -t nat -A POSTROUTING -s $local -o wan     -j SNAT --to-source \xabIP\xbb\n    iptables -t nat -A POSTROUTING -s $local -o comcast -j SNAT --to-source \xabIP\xbb\n    iptables -t nat -A POSTROUTING -s $local -o vz-dsl  -j SNAT --to-source \xabIP\xbb\ndone\n\n# this is an example of what the incoming traffic rules look like\nfor extip in \xablist of external IPs\xbb; do\n    iptables -t nat -A PREROUTING   -p tcp -d $extip --dport \xabport\xbb -j DNAT --to-destination \xabinternal-IP\xbb:443\ndone\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"ip rule flush\nip rule add from all               pref 1000  lookup main \nip rule add from A.B.C.D/29        pref 1500  lookup comcast # these IPs are the external ranges (we have multiple IPs on each connection)\nip rule add from E.F.G.H/29        pref 1501  lookup cavtel\nip rule add from I.J.K.L/31        pref 1502  lookup vzdsl\nip rule add from M.N.O.P/31        pref 1502  lookup vzdsl # yes, you can have multiple ranges\nip rule add fwmark $MARK_COMCAST   pref 2000  lookup comcast\nip rule add fwmark $MARK_CAVTEL    pref 2001  lookup cavtel\nip rule add fwmark $MARK_VZDSL     pref 2002  lookup vzdsl\nip rule add                        pref 2500  lookup comcast # the pref order here determines the default\u2014we default to Comcast.\nip rule add                        pref 2501  lookup cavtel\nip rule add                        pref 2502  lookup vzdsl\nip rule add                        pref 32767 lookup default\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"/etc/networking/interfaces")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"iface comcast inet static\n    address A.B.C.Q\n    netmask 255.255.255.248\n    up ip route add table comcast default via A.B.C.R dev comcast\n    down ip route flush table comcast\n")))}c.isMDXComponent=!0}}]);