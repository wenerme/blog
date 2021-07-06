(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1114:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=a.a.createContext({}),p=function(n){var e=a.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return a.a.createElement(l.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(f,i(i({ref:e},l),{},{components:t})):a.a.createElement(f,i({ref:e},l))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},718:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return i})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(1114)),c={title:"strongSwan \u914d\u7f6e"},i={unversionedId:"service/network/strongswan-conf",id:"service/network/strongswan-conf",isDocsHomePage:!1,title:"strongSwan \u914d\u7f6e",description:"* ConfigurationFiles",source:"@site/notes/service/network/strongswan-conf.md",slug:"/service/network/strongswan-conf",permalink:"/notes/service/network/strongswan-conf",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/strongswan-conf.md",version:"current",sidebar:"docs",previous:{title:"sshuttle",permalink:"/notes/service/network/sshuttle"},next:{title:"strongSwan Cookbook",permalink:"/notes/service/network/strongswan-cookbook"}},s=[{value:"strongswan.conf",id:"strongswanconf",children:[{value:"strongswan.d",id:"strongswand",children:[]}]},{value:"swanctl.conf",id:"swanctlconf",children:[]},{value:"ipsec.conf",id:"ipsecconf",children:[]},{value:"\u81ea\u52a8\u91cd\u8fde",id:"\u81ea\u52a8\u91cd\u8fde",children:[]},{value:"ipsec.conf to swanctl.conf",id:"ipsecconf-to-swanctlconf",children:[]}],l={toc:s};function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/ConfigurationFiles"},"ConfigurationFiles"))),Object(o.b)("h2",{id:"strongswanconf"},"strongswan.conf"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/StrongswanConf"},"strongswan.conf"))),Object(o.b)("p",null,"Daemon \u914d\u7f6e, \u9ed8\u8ba4\u662f stroke \u63d2\u4ef6, starter \u542f\u52a8 ipsec.conf"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"${sysconfdir} - ${prefix}/etc"),Object(o.b)("li",{parentName:"ul"},"${piddir} - /var/run")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u57fa\u7840\u914d\u7f6e")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"charon {\n    load_modular = yes\n    plugins {\n        include strongswan.d/charon/*.conf\n    }\n}\n\ninclude strongswan.d/*.conf\n")),Object(o.b)("h3",{id:"strongswand"},"strongswan.d"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"charon/ - \u63d2\u4ef6\u914d\u7f6e\u76ee\u5f55"),Object(o.b)("li",{parentName:"ul"},"charon-logging.conf"),Object(o.b)("li",{parentName:"ul"},"charon.conf"),Object(o.b)("li",{parentName:"ul"},"pki.conf"),Object(o.b)("li",{parentName:"ul"},"pool.conf"),Object(o.b)("li",{parentName:"ul"},"scepclient.conf"),Object(o.b)("li",{parentName:"ul"},"starter.conf"),Object(o.b)("li",{parentName:"ul"},"swanctl.conf")),Object(o.b)("h2",{id:"swanctlconf"},"swanctl.conf"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/Swanctlconf"},"swanctl.conf")),Object(o.b)("li",{parentName:"ul"},"/etc/swanctl/swanctl.conf")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"connections {\n  connection-name {\n    # 0 - \u54cd\u5e94 IKEv1, IKEv2; \u4f7f\u7528 IKEv2\n    # 1 - IKEv1/ISAKMP\n    # 2 - IKEv2\n    version=0\n\n    # XFRM\n    if_id_in=0\n    if_id_out=0\n\n    # ipsec left\n    # \u6dfb\u52a0\u540e\u7f00\u6307\u5b9a\u591a\u4e2a local-2, local-3\n    local {\n    }\n    # ipsec right\n    remote {\n    }\n    children {\n      child-name {\n      }\n    }\n  }\n}\n# \u865a\u62df\u5730\u5740\n# ipsec rightsourceip, rightdns\npools {\n}\n# \u7c7b\u4f3c ipsec.secrets\nsecrets {\n}\n# ipsec.conf ca\nauthorities {\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"connections.<conn>.remote<suffix>.auth")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"connections.<conn>.children.<child>.local_ts"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# connections\nswanctl --load-conns\n# pools\nswanctl --load-pools\n# secrets\nswanctl --load-creds\n# authorities\nswanctl --load-authorities\n")),Object(o.b)("h2",{id:"ipsecconf"},"ipsec.conf"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/IKEv2CipherSuites"},"IKEv2 Cipher Suites")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/IpsecConf"},"ipsec.conf")),Object(o.b)("li",{parentName:"ul"},"/etc/ipsec.conf")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"# \u901a\u7528\u914d\u7f6e\nconfig setup\n# \u53ef\u5305\u542b\u5916\u90e8\u914d\u7f6e\n# include ipsec.*.conf\n\n  cachecrls=no\n  # dmn, mgr, ike, chd, job, cfg, knl, net, asn, enc, lib, esp, tls, tnc, imc, imv, pts\n  # -1,0,1,2,3,4\n  # charondebug=dmn 3, ike 1, net -1\n  # IKE charon daemon\n  charonstart=yes\n  # yes | ifuri | no\n  strictcrlpolicy=no\n  # yes | no | never | replace | keep\n  uniqueids = yes\n\n  # 5.0.0 \u4e4b\u524d IKEv1 pluto daemon \u6709\u5176\u4ed6\u914d\u7f6e\u9879\u76ee\n\n# \u5b9a\u4e49\u8fde\u63a5\n# conn <name>\n# \u9ed8\u8ba4\u8fde\u63a5\u914d\u7f6e\nconn %default\n\n# \u5b9a\u4e49 CA\n# ca <name>\n# \u9ed8\u8ba4 CA \u914d\u7f6e\nca %default\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"conn")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"# IKEv2 EAP auth \u65f6 AAA \u540e\u7aef\u6807\u8bc6\u7b26\n# aaa_identity = <id>\n\n# \u4e0e esp \u914d\u7f6e\u4e92\u65a5 - \u9ed8\u8ba4 esp\n# ah = <cipher suites>\n\n# IKEv1 Aggressive or Main Mode\naggressive=no\n\n# \u5305\u542b\u5176\u4ed6 section \u914d\u7f6e\n# also = <name>\n\n# pubkey | rsasig | ecdsasig | psk | secret | xauthrsasig | xauthpsk | never\nauthby = pubkey\n\n# ignore | add | route | start\n# add - \u52a0\u8f7d\u4e0d\u542f\u52a8, route - \u52a0\u8f7d\u5b89\u88c5 trap \u5982\u679c\u5339\u914d leftsubnet rightsubnet \u5219\u542f\u52a8, start - \u52a0\u8f7d\u542f\u52a8,\nauto = ignore\n\n# \u8fdc\u7a0b\u610f\u5916\u5173\u95ed\u8fde\u63a5\u65f6\u89e6\u53d1\u52a8\u4f5c\n# none | clear | hold | restart\ncloseaction = none\n\n# IPComp \u5185\u5bb9\u538b\u7f29 - \u5728\u52a0\u5bc6\u524d\ncompress = no\n\n# Dead Peer Detection\n# none | clear | hold | restart\n# hold - \u5b89\u88c5 trap \u5339\u914d\u7684\u65f6\u5019\u518d\u91cd\u65b0\u534f\u5546\u8fde\u63a5\ndpdaction = none\ndpddelay = 30s\ndpdtimeout = 150s\n\n# \u4e0d\u6d3b\u8dc3\u8d85\u65f6\u540e\u5173\u95ed\u8fde\u63a5\n# inactivity = <time>\n\n# %identity - EAP Identity method\n# eap_identity = <id>\nesp = aes128-sha256\n\n# \u5f3a\u5236 udp \u5c01\u88c5 esp \u5305 - \u5373\u4fbf\u6ca1\u6709\u68c0\u6d4b\u5230 NAT\nforceencaps = no\n# yes | accept | force | no\nfragmentation = yes\n\nike = aes128-sha256-modp3072\nikedscp = 000000\n# keying channel \u8fde\u63a5 (ISAKMP , IKE SA) \u751f\u547d\u5468\u671f - \u5230\u671f\u4ece\u65b0\u534f\u5546\nikelifetime = 3h\ninstallpolicy = yes\n# ike | ikev1 | ikev2\n# ike \u53d1\u8d77 ikev2 \u4f46\u4e5f\u63a5\u53d7 ikev1\nkeyexchange = ike\n# \u534f\u5546\u91cd\u8bd5\u6b21\u6570\nkeyingtries = 3 # %forever\n\n# lifebytes = <number>\n# lifepackets = <number>\nlifetime = 1h\n\n# marginbytes = <number>\n# marginpackets = <number>\nmargintime = 9m\n\n# xfrm \u8fde\u63a5 mark\n# mark = <value>[/<mask>]\n# mark_in = <value>[/<mask>]\n# mark_our = <value>[/<mask>]\n\nmobike = yes\n\n# push | pull\nmodeconfig = pull\n\nreauth = yes\nrekey = yes\nrekeyfuzz = 100%\nreplay_window = -1\n\n# reqid = <number>\nsha256_96 = no\n# tfc = <value>\n\n# tunnel | transport | transport_proxy | passthrough | drop\n# tunnel - host-to-host, host-to-subnet, subnet-to-subnet\n# transport - host-to-host\n# transport_proxy - Mobile IPv6 transport proxy\n# passthrough - \u65e0 ipsec \u5904\u7406\ntype = tunnel\n\n# client | server\nxauth = client\n# xauth_identity = <id>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"left|right")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 left \u4e3a\u672c\u5730")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"# <ip address> | <fqdn> | %any | %any4 | %any6 | range | subnet\n# %any - \u534f\u5546\u65f6\u81ea\u52a8\u586b\u5145\n# %defaultroute - 5.0 \u4e4b\u524d\u7684 %any\n# % \u524d\u7f00\u9690\u542b rightallowany=yes\nright=%any\nrightallowany=no\n\n# rightauth = <auth method>\n# rightauth2 = <auth method>\n# rightca = <issuer dn> | %same\n# rightca2 = <issuer dn> | %same\n# rightcert = <path>\n# rightcert2 = <path>\n# rightcertpolicy = <OIDs>\n# rightdns = <servers>\nrightfirewall = no\n# rightgroups = <group list>\n# rightgroups2 = <group list>\nrighthostaccess = no\n# rightid = <id>\n# rightid2 = <id>\nrightikeport = <port>\nrightprotoport = <protocol>/<port>\nrightrsasigkey = <raw rsa public key> | <path to public key>\nrightsigkey = <raw public key> | <path to public key>\n# never | no | ifasked | always | yes\nrightsendcert = ifasked\n\n# \u865a\u62df IP\n# 5.0.1 \u4e4b\u540e\u652f\u6301 \u9017\u53f7 \u5206\u5272\u591a\u4e2a\u503c - \u591a\u4e2a IP\n# %config, %cfg, %modeconfig, %modecfg\n# leftsourceip = %config4 | %config6 | <ip address>\n\n# rightsourceip = %config | <network>/<netmask> | <from>-<to> | %poolname\n\n# \u9ed8\u8ba4 left/32|128\n# \u9650\u5b9a\u534f\u8bae\u548c\u7aef\u53e3 - 10.0.0.1[tcp/http],fec1::1[udp],10.0.0.0/16[/53]\n# 5.1.0 - \u5ffd\u7565\u7684\u503c\u53ef\u4f7f\u7528 %any - fec1::1[udp/%any],10.0.0.0/16[%any/53]\n# %opaque RFC 4301 OPAQUE \u534f\u8bae\u9009\u62e9\n# %dynamic \u7b49\u540c\u4e8e\u5ffd\u7565\u8be5\u914d\u7f6e\n# rightsubnet = <ip subnet>[[<proto/port>]][,...]\n# \u811a\u672c\u76ee\u5f55\n# rightupdown = <path>\n\n# Mediation Extension\nmediation = no\n# mediated_by = <name>\n# me_peerid = <id>\n")),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"\u81ea\u52a8\u91cd\u8fde"},"\u81ea\u52a8\u91cd\u8fde"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},"# \u5982\u679c\u6ca1\u7528\u5230 virtual ip\nauto=route\n\n# vip - \u91cd\u5efa SAs\ndpdaction=restart\ncloseaction=restart\nkeyingtries=%forever\nauto=start\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u53c2\u8003 ",Object(o.b)("a",{parentName:"p",href:"https://serverfault.com/a/970035/190601"},"https://serverfault.com/a/970035/190601"))),Object(o.b)("h2",{id:"ipsecconf-to-swanctlconf"},"ipsec.conf to swanctl.conf"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.strongswan.org/projects/strongswan/wiki/Fromipsecconf"},"Migration from ipsec.conf to swanctl.conf"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gitlab.com/Thermi/ipsec2swanctl"},"Thermi/ipsec2swanctl"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://gitlab.com/Thermi/ipsec2swanctl/-/raw/master/ipsec2swanctl.py\n\npython3 ipsec2swanctl.py --ipsecconf /etc/ipsec.conf -o swanctl.conf -d -w\n\nswanctl --load-conns --file swanctl.conf\n")))}p.isMDXComponent=!0}}]);