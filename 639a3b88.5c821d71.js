(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{346:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(8),a=(n(0),n(787)),c={slug:"fix-init-script",title:"\u8bb0\u5f55\u4e00\u6b21\u4fee\u590d init \u811a\u672c\u7684\u7ecf\u5386",tags:["AlpineLinux","\u8fd0\u7ef4"]},l={permalink:"/story/fix-init-script",editUrl:"https://github.com/wenerme/wener/edit/master/story/2021/2021-02-27-fix-init-script.md",source:"@site/story/2021/2021-02-27-fix-init-script.md",description:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b",date:"2021-02-27T00:00:00.000Z",tags:[{label:"AlpineLinux",permalink:"/story/tags/alpine-linux"},{label:"\u8fd0\u7ef4",permalink:"/story/tags/\u8fd0\u7ef4"}],title:"\u8bb0\u5f55\u4e00\u6b21\u4fee\u590d init \u811a\u672c\u7684\u7ecf\u5386",readingTime:1.395,truncated:!0,nextItem:{title:"AlpineLinux \u5b89\u88c5 Xfce \u684c\u9762",permalink:"/story/alpinelinux-setup-xfce"}},b=[{value:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b",id:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b",children:[]},{value:"\u96be\u70b9",id:"\u96be\u70b9",children:[]},{value:"\u64cd\u4f5c\u8fc7\u7a0b",id:"\u64cd\u4f5c\u8fc7\u7a0b",children:[{value:"\u51c6\u5907\u865a\u62df\u673a\u548c\u73af\u5883",id:"\u51c6\u5907\u865a\u62df\u673a\u548c\u73af\u5883",children:[]},{value:"\u542f\u52a8\u7cfb\u7edf",id:"\u542f\u52a8\u7cfb\u7edf",children:[]},{value:"\u4fee\u590d init \u811a\u672c",id:"\u4fee\u590d-init-\u811a\u672c",children:[]},{value:"\u907f\u514d\u518d\u6b21\u51fa\u73b0\u95ee\u9898",id:"\u907f\u514d\u518d\u6b21\u51fa\u73b0\u95ee\u9898",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b"},"\u95ee\u9898\u4ea7\u751f\u8fc7\u7a0b"),Object(a.b)("p",null,"\u7531\u4e8e\u5b9a\u5236\u5316\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/share/mkinitfs/initramfs-init")," \u811a\u672c\uff0c\u5728\u5347\u7ea7\u5927\u7248\u672c\u540e\uff0c\u8be5\u6587\u4ef6\u88ab\u8986\u76d6\uff0c\u5bfc\u81f4\u751f\u6210\u7684 initramfs \u65e0\u6cd5\u542f\u52a8\u7cfb\u7edf\u3002"),Object(a.b)("p",null,"\u6b63\u5e38\u60c5\u51b5\u5347\u7ea7 ",Object(a.b)("inlineCode",{parentName:"p"},"/etc")," \u4e0b\u4f1a\u4ea7\u751f ",Object(a.b)("inlineCode",{parentName:"p"},".apk-new")," \u540e\u7f00\u6587\u4ef6\u907f\u514d\u5347\u7ea7\u8986\u76d6\uff0c\u4f46\u7531\u4e8e\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/share")," \u4e0b\u6587\u4ef6\uff0c\u56e0\u6b64\u5bfc\u81f4\u8986\u76d6\u3002"),Object(a.b)("h2",{id:"\u96be\u70b9"},"\u96be\u70b9"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u4f7f\u7528\u9759\u6001 IP",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u9700\u8981\u63d0\u4f9b\u76f8\u540c IP \u6bb5\u5730\u5740\u624d\u80fd\u8fdb\u884c SSH"),Object(a.b)("li",{parentName:"ul"},"\u5047\u8bbeIP\u4e3a 192.168.66.99/22"))),Object(a.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u5728\u786c\u76d8\u4e0a - M2",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u76f4\u63a5\u5728\u5176\u4ed6\u7cfb\u7edf\u4e0a\u8fdb\u884c\u4fee\u590d"),Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7\u63d0\u4f9b U\u76d8 \u7cfb\u7edf\u5728\u539f\u5730\u6062\u590d"))),Object(a.b)("li",{parentName:"ul"},"root \u76d8\u6709 luks \u52a0\u5bc6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f9d\u8d56\u786c\u4ef6\u73af\u5883"),Object(a.b)("li",{parentName:"ul"},"QEMU \u542f\u52a8\u65e0\u6cd5\u6a21\u62df\u76f8\u540c\u73af\u5883"),Object(a.b)("li",{parentName:"ul"},"\u9700\u8981\u624b\u52a8\u8f93\u5165\u5bc6\u94a5\u8fdb\u884c\u6302\u8f7d"))),Object(a.b)("li",{parentName:"ul"},"root \u5bc6\u7801\u4e3a UUID",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u6781\u5176\u96be\u8f93\u5165"),Object(a.b)("li",{parentName:"ul"},"\u4e14\u9700\u8981\u8f93\u5165\u591a\u6b21\uff0c\u56e0\u6b64\u9009\u62e9\u7f51\u7edc\u6253\u901a\u901a\u8fc7 SSH \u767b\u9646")))),Object(a.b)("h2",{id:"\u64cd\u4f5c\u8fc7\u7a0b"},"\u64cd\u4f5c\u8fc7\u7a0b"),Object(a.b)("h3",{id:"\u51c6\u5907\u865a\u62df\u673a\u548c\u73af\u5883"},"\u51c6\u5907\u865a\u62df\u673a\u548c\u73af\u5883"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# QEMU \u865a\u62df\u673a\napk add qemu-system-x86_64\n\n# \u6865\u63a5\u6a21\u62df\u7f51\u7edc\u73af\u5883 - \u4f7f\u7528\u76f8\u540c IP \u6bb5\u8bbf\u95ee\nip li add vmbr0 type bridge\nip li set vmbr0 up\n# \u6865\u63a5\u4ee5\u4fbf\u4e8e\u8bbf\u95ee 192.168.66.99/22\nip addr add 192.168.66.1/22 dev vmbr0\n\n# \u5141\u8bb8 qemu \u6865\u63a5\u7f51\u5361\necho 'allow vmbr0' >> /etc/qemu/bridge.conf\n")),Object(a.b)("h3",{id:"\u542f\u52a8\u7cfb\u7edf"},"\u542f\u52a8\u7cfb\u7edf"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u63d0\u4f9b vnc \u65b9\u4fbf\u67e5\u770b\n# -curses \u65b9\u4fbf\u8f93\u5165 luks \u5bc6\u94a5\n# \u6865\u63a5 vmbr0\nqemu-system-x86_64 -accel kvm -m 2G \\\n  -vnc 0.0.0.0:1 /dev/sda \\\n  -netdev bridge,br=vmbr0,id=n1 -device virtio-net,netdev=n1 \\\n  -curses\n")),Object(a.b)("p",null,"\u542f\u52a8\u540e\u65e0\u6cd5\u8fdb\u5165\u7cfb\u7edf\uff0c/sysroot \u6302\u8f7d\u5931\u8d25\uff0c\u51fa\u73b0\u4fee\u590d shell"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"mount: mounting /dev/sda2 on /sysroot failed: Invalid argument\nMounting root failed.\ninitramfs emergency recovery shell launched. Type 'exit' to continue boot\nsh: can't access tty; job control turned off\n/ #\n")),Object(a.b)("p",null,"\u6b64\u65f6\u624b\u52a8\u6302\u8f7d /sysroot"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"cryptsetup open /dev/sda2 cryptroot\n# \u7c98\u8d34\u5bc6\u94a5\n\n# \u6302\u8f7d sysroot\nmount /dev/mapper/cryptroot /sysroot\n\n# \u9000\u51fa shell \u6b63\u5e38\u8fdb\u5165\u7cfb\u7edf\nexit\n")),Object(a.b)("h3",{id:"\u4fee\u590d-init-\u811a\u672c"},"\u4fee\u590d init \u811a\u672c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u51c6\u5907\u597d\u7684 init \u811a\u672c\u76f4\u63a5\u8986\u76d6\nrsync --rsync-path='sudo rsync' --no-owner initramfs-init admin@192.168.66.99:/usr/share/mkinitfs/initramfs-init\n\n# \u8fdb\u5165\u865a\u62df\u673a\nssh admin@192.168.66.99\n\n# \u4ece\u65b0\u751f\u6210 initramfs\nmkinitfs\n\n# \u4e3a\u5b89\u5168\u8d77\u89c1\uff0c\u9a8c\u8bc1\u811a\u672c\u6b63\u786e\nmkdir -p /tmp/init\ncd /tmp/init\n# \u89e3\u538b\u5230\u5f53\u524d\u76ee\u5f55\nzcat < /boot/initramfs-lts | cpio -idmv\n# \u786e\u4fdd\u662f\u6b63\u786e\u7684\u811a\u672c\ncat init\n")),Object(a.b)("h3",{id:"\u907f\u514d\u518d\u6b21\u51fa\u73b0\u95ee\u9898"},"\u907f\u514d\u518d\u6b21\u51fa\u73b0\u95ee\u9898"),Object(a.b)("p",null,"/etc \u4e0b\u914d\u7f6e\u4e0d\u4f1a\u88ab\u8986\u76d6\uff0clbu \u8fd8\u80fd\u5907\u4efd\uff0c\u56e0\u6b64\u5c06 init \u811a\u672c\u653e\u5230 etc\uff0c\u4fee\u6539 mkinitfs \u914d\u7f6e\u6307\u5411\u671f\u671b\u7684\u811a\u672c\u3002"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/alpinelinux/mkinitfs/blob/master/mkinitfs.in"},"mkinitfs")," \u7684\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/mkinitfs/mkinitfs.conf"),", \u9ed8\u8ba4\u914d\u7f6e features, \u8be5\u6587\u4ef6\u4f1a\u88ab\u811a\u672c\u76f4\u63a5 source (",Object(a.b)("a",{parentName:"p",href:"https://github.com/alpinelinux/mkinitfs/blob/a4d6120aa949cdb6d18eb8241c4706f96685a359/mkinitfs.in#L237"},"mkinitfs.in#L237"),"), \u4ece\u811a\u672c\u53ef\u770b\u51fa\u914d\u7f6e\u53d8\u91cf\u4e3a init."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'cp /usr/share/mkinitfs/initramfs-init /etc/mkinitfs/initramfs-init\necho "init=/etc/mkinitfs/initramfs-init" >> /etc/mkinitfs/mkinitfs.conf\n')),Object(a.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(a.b)("p",null,"\u4e0d\u8981\u4fee\u6539 ",Object(a.b)("inlineCode",{parentName:"p"},"/usr/share")," \u4e0b\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5c06\u914d\u7f6e\u653e\u5230 ",Object(a.b)("inlineCode",{parentName:"p"},"/etc")," \u4e0b\uff0c\u5b89\u5168\u53ef\u9760\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 lbu \u5907\u4efd\u3002"))}p.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.a.createElement(d,l(l({ref:t},o),{},{components:n})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);