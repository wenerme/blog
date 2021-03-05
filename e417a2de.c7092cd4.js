(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{719:function(e,n,s){"use strict";s.r(n),s.d(n,"frontMatter",(function(){return a})),s.d(n,"metadata",(function(){return c})),s.d(n,"toc",(function(){return p})),s.d(n,"default",(function(){return o}));var t=s(3),i=s(8),r=(s(0),s(787)),a={id:"net-snmp",title:"NetSNMP"},c={unversionedId:"ops/service/net-snmp",id:"ops/service/net-snmp",isDocsHomePage:!1,title:"NetSNMP",description:"Tips",source:"@site/notes/ops/service/net-snmp.md",slug:"/ops/service/net-snmp",permalink:"/notes/ops/service/net-snmp",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/net-snmp.md",version:"current",sidebar:"docs",previous:{title:"Matomo",permalink:"/notes/ops/service/matomo"},next:{title:"\u8fdc\u7a0b\u684c\u9762",permalink:"/notes/ops/service/remote-desktop"}},p=[{value:"Tips",id:"tips",children:[]},{value:"EdgeOS system",id:"edgeos-system",children:[]},{value:"unifi system",id:"unifi-system",children:[]}],m={toc:p};function o(e){var n=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},m,s,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://www.net-snmp.org"},"net-snmp"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"wikipedia ",Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Net-SNMP"},"net-snmp")," "),Object(r.b)("li",{parentName:"ul"},"alpine ",Object(r.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/package/edge/main/x86_64/net-snmp"},"net-snmp")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://wiki.archlinux.org/index.php/Snmpd"},"snmpd")))),Object(r.b)("li",{parentName:"ul"},"\u7248\u672c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"1",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"getnext"))),Object(r.b)("li",{parentName:"ul"},"2c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"buildget"))),Object(r.b)("li",{parentName:"ul"},"3 - \u52a0\u5bc6\u901a\u4fe1\u3001\u8ba4\u8bc1"))),Object(r.b)("li",{parentName:"ul"},"/usr/share/snmp/mibs"),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"unifi \u63a7\u5236\u5668\u542f\u7528 snmp \u662f\u542f\u7528 AP \u7684 snmp \u4e0d\u662f\u81ea\u5df1\u7684")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u626b\u63cf\u6709 SNMP \u7684\u8bbe\u5907\nsudo apk add nmap nmap-scripts\nsudo nmap -sU -p 161 --script default,snmp-sysdescr 192.169.1.0/24\n\napk add net-snmp net-snmp-tools\n\n# snmpv1 \u904d\u5386\u7cfb\u7edf\u4fe1\u606f\nsnmpwalk -Os -c public -v 1 192.168.1.1 system\n\n# ipv6\nsnmpwalk -v2c -c public udp6:[2001:0db8:85a3:0:0:8a2e:0370:99]:161 system\n\n# snmpv3\nsnmpwalk -v 3 -u joe -l authNoPriv -A joe12 sys1 system\n\n# \nsnmpget -c public sys1 system.sysDescr.0\n# ICMP object (OID=56.1.1.1.1)\nsnmpget -c public -v 2c sys1 .1.3.6.1.2.1.56.1.1.1.1\n\n#\nsnmpbulkget -v2c -Cn1 -Cr3 -Os -c public sys1 system ifTable\n# IPv6 object (OID=55.1)\nsnmpbulkget -c public -v 2c 192.0.2.19 .1.3.6.1.2.1.55.1\n\n#\nsnmpbulkwalk -v2c -Os -c public sys1 system\n# udp tcp uptime interface\nsnmpbulkwalk -v2c -c public  192.0.2.19 udp\n\n# \u5f00\u53d1\napk add net-snmp-dev\n# \u53c2\u6570\nnet-snmp-config --agent-libs\n")),Object(r.b)("h2",{id:"edgeos-system"},"EdgeOS system"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ snmpwalk -Os -c public -v 1 192.168.1.1 system\nsysDescr.0 = STRING: EdgeOS v2.0.1.5174690.190312.1614\nsysObjectID.0 = OID: enterprises.41112.1.5\nsysUpTimeInstance = Timeticks: (3210) 0:00:32.10\nsysContact.0 = STRING: root\nsysName.0 = STRING: ubnt\nsysLocation.0 = STRING: Unknown\nsysServices.0 = INTEGER: 14\nsysORLastChange.0 = Timeticks: (14) 0:00:00.14\nsysORID.1 = OID: snmpMPDCompliance\nsysORID.2 = OID: usmMIBCompliance\nsysORID.3 = OID: snmpFrameworkMIBCompliance\nsysORID.4 = OID: snmpMIB\nsysORID.5 = OID: vacmBasicGroup\nsysORID.6 = OID: tcpMIB\nsysORID.7 = OID: ip\nsysORID.8 = OID: udpMIB\nsysORID.9 = OID: snmpNotifyFullCompliance\nsysORID.10 = OID: notificationLogMIB\nsysORDescr.1 = STRING: The MIB for Message Processing and Dispatching.\nsysORDescr.2 = STRING: The management information definitions for the SNMP User-based Security Model.\nsysORDescr.3 = STRING: The SNMP Management Architecture MIB.\nsysORDescr.4 = STRING: The MIB module for SNMPv2 entities\nsysORDescr.5 = STRING: View-based Access Control Model for SNMP.\nsysORDescr.6 = STRING: The MIB module for managing TCP implementations\nsysORDescr.7 = STRING: The MIB module for managing IP and ICMP implementations\nsysORDescr.8 = STRING: The MIB module for managing UDP implementations\nsysORDescr.9 = STRING: The MIB modules for managing SNMP Notification, plus filtering.\nsysORDescr.10 = STRING: The MIB module for logging SNMP Notifications.\nsysORUpTime.1 = Timeticks: (11) 0:00:00.11\nsysORUpTime.2 = Timeticks: (11) 0:00:00.11\nsysORUpTime.3 = Timeticks: (11) 0:00:00.11\nsysORUpTime.4 = Timeticks: (13) 0:00:00.13\nsysORUpTime.5 = Timeticks: (13) 0:00:00.13\nsysORUpTime.6 = Timeticks: (13) 0:00:00.13\nsysORUpTime.7 = Timeticks: (13) 0:00:00.13\nsysORUpTime.8 = Timeticks: (13) 0:00:00.13\nsysORUpTime.9 = Timeticks: (14) 0:00:00.14\nsysORUpTime.10 = Timeticks: (14) 0:00:00.14\n")),Object(r.b)("h2",{id:"unifi-system"},"unifi system"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"sysDescr.0 = STRING: UAP-AC-Lite 4.3.20.11298\nsysObjectID.0 = OID: netSnmpAgentOIDs.10\nsysUpTimeInstance = Timeticks: (35927661) 4 days, 3:47:56.61\nsysContact.0 = STRING: root@localhost\nsysName.0 = STRING: D\nsysLocation.0 = STRING: Unknown\nsysServices.0 = INTEGER: 79\nsysORLastChange.0 = Timeticks: (67) 0:00:00.67\nsysORID.1 = OID: ip\nsysORID.2 = OID: snmpMIB\nsysORID.3 = OID: udpMIB\nsysORID.4 = OID: vacmBasicGroup\nsysORID.5 = OID: snmpFrameworkMIBCompliance\nsysORID.6 = OID: snmpMPDCompliance\nsysORID.7 = OID: usmMIBCompliance\nsysORID.8 = OID: transmission.131\nsysORDescr.1 = STRING: The MIB module for managing IP and ICMP implementations\nsysORDescr.2 = STRING: The MIB module for SNMPv2 entities\nsysORDescr.3 = STRING: The MIB module for managing UDP implementations\nsysORDescr.4 = STRING: View-based Access Control Model for SNMP.\nsysORDescr.5 = STRING: The SNMP Management Architecture MIB.\nsysORDescr.6 = STRING: The MIB for Message Processing and Dispatching.\nsysORDescr.7 = STRING: The management information definitions for the SNMP User-based Security Model.\nsysORDescr.8 = STRING: RFC 2667 TUNNEL-MIB implementation for Linux 2.2.x kernels.\nsysORUpTime.1 = Timeticks: (35) 0:00:00.35\nsysORUpTime.2 = Timeticks: (35) 0:00:00.35\nsysORUpTime.3 = Timeticks: (35) 0:00:00.35\nsysORUpTime.4 = Timeticks: (35) 0:00:00.35\nsysORUpTime.5 = Timeticks: (35) 0:00:00.35\nsysORUpTime.6 = Timeticks: (35) 0:00:00.35\nsysORUpTime.7 = Timeticks: (36) 0:00:00.36\nsysORUpTime.8 = Timeticks: (67) 0:00:00.67\n")))}o.isMDXComponent=!0},787:function(e,n,s){"use strict";s.d(n,"a",(function(){return l})),s.d(n,"b",(function(){return y}));var t=s(0),i=s.n(t);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function c(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function p(e,n){if(null==e)return{};var s,t,i=function(e,n){if(null==e)return{};var s,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var m=i.a.createContext({}),o=function(e){var n=i.a.useContext(m),s=n;return e&&(s="function"==typeof e?e(n):c(c({},n),e)),s},l=function(e){var n=o(e.components);return i.a.createElement(m.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var s=e.components,t=e.mdxType,r=e.originalType,a=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=o(s),u=t,y=l["".concat(a,".").concat(u)]||l[u]||O[u]||r;return s?i.a.createElement(y,c(c({ref:n},m),{},{components:s})):i.a.createElement(y,c({ref:n},m))}));function y(e,n){var s=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=s.length,a=new Array(r);a[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var m=2;m<r;m++)a[m]=s[m];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,s)}u.displayName="MDXCreateElement"}}]);