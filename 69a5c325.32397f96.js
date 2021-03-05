(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{364:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(787)),c={title:"Libvirt \u7f51\u7edc"},l={unversionedId:"os/virt/libvirt-net",id:"os/virt/libvirt-net",isDocsHomePage:!1,title:"Libvirt \u7f51\u7edc",description:"* Networking",source:"@site/notes/os/virt/libvirt-net.md",slug:"/os/virt/libvirt-net",permalink:"/notes/os/virt/libvirt-net",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/libvirt-net.md",version:"current",sidebar:"docs",previous:{title:"Libvirt\u5e38\u89c1\u95ee\u9898",permalink:"/notes/os/virt/libvirt-faq"},next:{title:"Virsh",permalink:"/notes/os/virt/virsh"}},o=[{value:"NAT",id:"nat",children:[]},{value:"\u6865\u63a5",id:"\u6865\u63a5",children:[{value:"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5",id:"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5",children:[]},{value:"Libvirt \u5b9a\u4e49\u6865\u63a5",id:"libvirt-\u5b9a\u4e49\u6865\u63a5",children:[]},{value:"\u4f7f\u7528\u6865\u63a5",id:"\u4f7f\u7528\u6865\u63a5",children:[]},{value:"QEMU \u6865\u63a5",id:"qemu-\u6865\u63a5",children:[]}]},{value:"\u900f\u4f20",id:"\u900f\u4f20",children:[]}],b={toc:o};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.libvirt.org/page/Networking"},"Networking"))),Object(a.b)("h2",{id:"nat"},"NAT"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7f51\u7edc"),Object(a.b)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"),Object(a.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\uff0c\u591a\u4e00\u5c42 NAT \u8f6c\u6362")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u6ca1\u6709\u53ef\u4ee5\u914d\u7f6e\nvirsh net-define /usr/share/libvirt/networks/default.xml\nvirsh net-autostart default\nvirsh net-start default\n")),Object(a.b)("h2",{id:"\u6865\u63a5"},"\u6865\u63a5"),Object(a.b)("h3",{id:"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5"},"\u7cfb\u7edf\u521b\u5efa\u6865\u63a5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://wiki.libvirt.org/page/Net.bridge.bridge-nf-call_and_sysctl.conf"},"net.bridge.bridge-nf-call"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# alpine 3.13 \u8fd8\u9700\u8981\u5b89\u88c5 bridge \u5305 - \u867d\u7136 ifupdown-ng \u652f\u6301\napk add bridge\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"auto eth0\niface eth0 inet manual\n\nauto vmbr0\niface vmbr0 inet dhcp\n        bridge-ports eth0\n        bridge-stp on\n        post-up iptables -I FORWARD -m physdev --physdev-is-bridged -j ACCEPT\n        pre-down iptables -D FORWARD -m physdev --physdev-is-bridged -j ACCEPT\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"echo br_netfilter >> /etc/modules-load.d/kvm.conf\nmodprobe br_netfilter\n\ncat <<CONF >> /etc/sysctl.d/kvm.conf\nnet.bridge.bridge-nf-call-ip6tables = 0\nnet.bridge.bridge-nf-call-iptables = 0\nnet.bridge.bridge-nf-call-arptables = 0\nCONF\nsysctl -p /etc/sysctl.d/kvm.conf\n")),Object(a.b)("p",null,"veth \u53ef\u672c\u5730\u521b\u5efa\u591a\u4e2a\u865a\u62df\u7f51\u5361\u6765\u63a5\u5165\u6865\u63a5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"auto veth0\niface veth0 inet manual\n    pre-up ip tuntap add dev $IFACE mode tap\n    post-down ip tuntap del dev $IFACE mode tap\n")),Object(a.b)("h3",{id:"libvirt-\u5b9a\u4e49\u6865\u63a5"},"Libvirt \u5b9a\u4e49\u6865\u63a5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<network>\n  <name>br10</name>\n  <forward mode='nat'>\n    <nat>\n      <port start='1024' end='65535'/>\n    </nat>\n  </forward>\n  <bridge name='br10' stp='on' delay='0'/>\n  <ip address='192.168.30.1' netmask='255.255.255.0'>\n    <dhcp>\n      <range start='192.168.30.50' end='192.168.30.200'/>\n    </dhcp>\n  </ip>\n</network>\n")),Object(a.b)("h3",{id:"\u4f7f\u7528\u6865\u63a5"},"\u4f7f\u7528\u6865\u63a5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<interface type='bridge'>\n  <source bridge='vmbr0'/>\n  <mac address='00:16:3e:1a:b3:4a'/>\n  <model type='virtio'/>\n</interface>\n")),Object(a.b)("h3",{id:"qemu-\u6865\u63a5"},"QEMU \u6865\u63a5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'# /etc/qemu/bridge.conf root:qemu 0640\necho allow vmbr0 >> /etc/qemu/bridge.conf\n\n# /usr/lib/qemu/qemu-bridge-helper\n# qemu linux.img -netdev bridge,id=hn0 -device virtio-net-pci,netdev=hn0,id=nic1\n# qemu linux.img -netdev tap,helper=/usr/local/libexec/qemu-bridge-helper,id=hn0 -device virtio-net-pci,netdev=hn0,id=nic1\n\nqemu-system-x86_64 -accel kvm -m 4G -smp 2 base.qcow2  -vnc :1 -serial stdio \\\n  -device virtio-net-pci,netdev=n1 -netdev tap,id=n1,"helper=/usr/lib/qemu/qemu-bridge-helper"\n\n# -netdev bridge,br=vmbr0,id=n1 -device virtio-net,netdev=n1\n')),Object(a.b)("h2",{id:"\u900f\u4f20"},"\u900f\u4f20"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u76f4\u63a5\u8bbf\u95ee\u8bbe\u5907")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<devices>\n  <interface type='hostdev' managed='yes'>\n    <source>\n      <address type='pci' domain='0x0' bus='0x00' slot='0x07' function='0x0'/>\n    </source>\n    <mac address='52:54:00:6d:90:02'>\n    <virtualport type='802.1Qbh'>\n      <parameters profileid='finance'/>\n    </virtualport>\n  </interface>\n</devices>\n")))}d.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(c,".").concat(s)]||p[s]||u[s]||a;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<a;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);