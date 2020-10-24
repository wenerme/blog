(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{566:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(7),c=(n(0),n(625)),a={id:"centos"},i={unversionedId:"os/centos/centos",id:"os/centos/centos",isDocsHomePage:!1,title:"centos",description:"CentOS",source:"@site/notes/os/centos/README.md",slug:"/os/centos/centos",permalink:"/notes/os/centos/centos",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/centos/README.md",version:"current"},s=[{value:"rootfs",id:"rootfs",children:[]},{value:"install",id:"install",children:[]},{value:"kernel",id:"kernel",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"centos"},"CentOS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e0b\u8f7d",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.centos.org/centos"}),"cloud.centos.org/centos")))),Object(c.b)("li",{parentName:"ul"},"kernel-core - \u5b89\u88c5\u540e 70MB",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5305\u542b\u5185\u6838\uff0c\u4f9d\u8d56 linux-firmware",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"linux-firmware \u5b89\u88c5\u540e 350MB")))))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yum module list virt\n")),Object(c.b)("h2",{id:"rootfs"},"rootfs"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# rootfs - \u8fd9\u4e2a rootfs \u662f\u7528\u4e8e docker \u7684\ncurl -LOC- https://github.com/CentOS/sig-cloud-instance-images/raw/CentOS-8-x86_64/docker/centos-8-x86_64.tar.xz\n\nqemu-img create -f raw centos.rootfs.ext4 1G\nmkfs.ext4 centos.rootfs.ext4\nmkdir -p /tmp/rootfs\nsudo mount centos.rootfs.ext4 /tmp/rootfs\nsudo tar xvf centos-8-x86_64.tar.xz -C /tmp/rootfs/\nsudo cp /etc/resolv.conf /tmp/rootfs/etc/resolv.conf\nsudo chroot /tmp/rootfs /bin/bash\n\nyum update -y\n\n# \u83b7\u53d6\u5230 kernel\nyum install -y yum-utils\nrpm -Uvh --nodeps $(repoquery --location kernel-core)\n\nexit\n\n")),Object(c.b)("h2",{id:"install"},"install"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.centos.org/en-US/8-docs/advanced-install/assembly_kickstart-and-advanced-boot-options/"}),"Boot options")),Object(c.b)("li",{parentName:"ul"},"minimal \u5b89\u88c5\u5b8c 1.7 G"),Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 lvm")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -OC- http://mirrors.aliyun.com/centos/8.2.2004/isos/x86_64/CentOS-8.2.2004-x86_64-minimal.iso\nqemu-img create -f qcow2 centos.qcow2 10G\n\nqemu-system-x86_64 -accel kvm -m 4G -smp 2 -net nic -nic user,hostfwd=tcp::2222-:22 -drive file=centos.qcow2,if=virtio -serial stdio -vnc :10\n")),Object(c.b)("h2",{id:"kernel"},"kernel"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/managing_monitoring_and_updating_the_kernel/index"}),"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/managing_monitoring_and_updating_the_kernel/index"))))}u.isMDXComponent=!0},625:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||m[b]||c;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);