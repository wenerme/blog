(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},607:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(1114)),o={title:"QEMU FAQ"},c={unversionedId:"os/virt/qemu-faq",id:"os/virt/qemu-faq",isDocsHomePage:!1,title:"QEMU FAQ",description:"- 7 ways we harden our KVM hypervisor at Google Cloud: security in plaintext",source:"@site/notes/os/virt/qemu-faq.md",slug:"/os/virt/qemu-faq",permalink:"/notes/os/virt/qemu-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/virt/qemu-faq.md",version:"current",sidebar:"docs",previous:{title:"QEMU \u6587\u6863",permalink:"/notes/os/virt/qemu-doc"},next:{title:"Qemu Image",permalink:"/notes/os/virt/qemu-img"}},u=[{value:"RNG",id:"rng",children:[]},{value:"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf",id:"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf",children:[]},{value:"qemu: uncaught target signal 4 (Illegal instruction) - core dumped",id:"qemu-uncaught-target-signal-4-illegal-instruction---core-dumped",children:[]},{value:"qemu-s390x: warning: &#39;msa5-base&#39; requires &#39;klmd-sha-512&#39;",id:"qemu-s390x-warning-msa5-base-requires-klmd-sha-512",children:[]},{value:"virtfs",id:"virtfs",children:[]},{value:"convert \u540e\u65e0\u6cd5\u542f\u52a8",id:"convert-\u540e\u65e0\u6cd5\u542f\u52a8",children:[]},{value:"Overhead",id:"overhead",children:[]},{value:"USB",id:"usb",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloudplatform.googleblog.com/2017/01/7-ways-we-harden-our-KVM-hypervisor-at-Google-Cloud-security-in-plaintext.html"},"7 ways we harden our KVM hypervisor at Google Cloud: security in plaintext"))),Object(i.b)("h2",{id:"rng"},"RNG"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"qemu-system-x86_64 -object rng-random,filename=/dev/urandom,id=rng0 -device virtio-rng-pci,rng=rng0,bus=pci.0,addr=0x7\n")),Object(i.b)("h2",{id:"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf"},"\u8bbf\u95ee\u8fdc\u7a0b\u955c\u50cf"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# apk add qemu-block-ssh\nqemu -drive file=ssh://host/path/to/file,if=virtio,cache=none\n")),Object(i.b)("h2",{id:"qemu-uncaught-target-signal-4-illegal-instruction---core-dumped"},"qemu: uncaught target signal 4 (Illegal instruction) - core dumped"),Object(i.b)("p",null,"ppc64le \u5f02\u5e38"),Object(i.b)("h2",{id:"qemu-s390x-warning-msa5-base-requires-klmd-sha-512"},"qemu-s390x: warning: 'msa5-base' requires 'klmd-sha-512'"),Object(i.b)("p",null,"s390x \u5f02\u5e38"),Object(i.b)("h2",{id:"virtfs"},"virtfs"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://wiki.qemu.org/Documentation/9psetup"},"https://wiki.qemu.org/Documentation/9psetup")),Object(i.b)("p",null,"ProjectZero\nQEMU: virtfs permits guest to access entire host filesystem\n",Object(i.b)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=13753950"},"https://news.ycombinator.com/item?id=13753950")),Object(i.b)("h2",{id:"convert-\u540e\u65e0\u6cd5\u542f\u52a8"},"convert \u540e\u65e0\u6cd5\u542f\u52a8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728 macOS \u4e0b\u4ece qcow2 \u8f6c\u6362\u4e3a raw \u540e\u5206\u533a\u4fe1\u606f\u4e22\u5931"),Object(i.b)("li",{parentName:"ul"},"Linux \u672a\u9047\u5230\u8fd9\u6837\u7684\u95ee\u9898"),Object(i.b)("li",{parentName:"ul"},"\u8f6c\u6362\u540e\u53ef\u4f7f\u7528 fdisk \u68c0\u67e5\u5206\u533a\u4fe1\u606f")),Object(i.b)("h2",{id:"overhead"},"Overhead"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://www.brightcomputing.com/blog/containerization-vs.-virtualization-more-on-overhead"},"Containerization vs. Virtualization \u2013 More on Overhead")),Object(i.b)("h2",{id:"usb"},"USB"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/qemu/qemu/blob/master/docs/usb2.txt"},"https://github.com/qemu/qemu/blob/master/docs/usb2.txt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/251406/47774"},"https://unix.stackexchange.com/a/251406/47774"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"qemu-system-x86_64 \\\n    -enable-kvm \\\n    -M q35 \\\n    -m 2G \\\n    -usb -usbdevice host:16b2:1001 \\\n    -usb -usbdevice host:0529:0001 \\\n    -usbdevice tablet \\\n    -net nic \\\n    -net bridge,br=br0 \\\n    -vga qxl \\\n    -spice port=5930,disable-ticketing \\\n    -device virtio-serial-pci \\\n    -device virtserialport,chardev=spicechannel0,name=com.redhat.spice.0 \\\n    -chardev spicevmc,id=spicechannel0,name=vdagent \\\n    -drive file=/mnt/data/win-patch.img,if=virtio\n")))}s.isMDXComponent=!0}}]);