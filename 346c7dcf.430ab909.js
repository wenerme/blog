(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return _}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,_=d["".concat(l,".").concat(m)]||d[m]||b[m]||i;return n?a.a.createElement(_,o(o({ref:t},s),{},{components:n})):a.a.createElement(_,o({ref:t},s))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1114)),l={id:"dracut"},o={unversionedId:"os/linux/boot/dracut",id:"os/linux/boot/dracut",isDocsHomePage:!1,title:"dracut",description:"dracut",source:"@site/notes/os/linux/boot/dracut.md",slug:"/os/linux/boot/dracut",permalink:"/notes/os/linux/boot/dracut",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/dracut.md",version:"current",sidebar:"docs",previous:{title:"Linux Releases",permalink:"/notes/os/linux/linux-version"},next:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"}},c=[{value:"modules",id:"modules",children:[]},{value:"cmdline",id:"cmdline",children:[]},{value:"\u542f\u52a8\u6d41\u7a0b",id:"\u542f\u52a8\u6d41\u7a0b",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"dracut"},"dracut"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6784\u5efa initramfs"),Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4f4d\u548c\u6302\u8f7d rootfs"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 btrfs, DM RAID, MD RAID, LVM2, device mapper multipath I/O, dm-crypt, cifs, FCoE, iSCSI, NBD, NFS"),Object(i.b)("li",{parentName:"ul"},"\u6e90\u81ea Redhat - \u56e0\u6b64 CentOS\u3001Fedora\u3001RHEL \u90fd\u662f"),Object(i.b)("li",{parentName:"ul"},"\u9664\u4e86 Redhat \u4e4b\u5916\u9ed8\u8ba4\u4f7f\u7528\u7684 - openSUSE\u3001SLES"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dracutdevs/dracut"},"dracutdevs/dracut")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://dracut.wiki.kernel.org"},"dracut.wiki.kernel.org")),Object(i.b)("li",{parentName:"ul"},"\u6a21\u5757\u4f4d\u4e8e /usr/lib/dracut/modules.d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dracutdevs/dracut/tree/master/modules.d"},"modules.d")),Object(i.b)("li",{parentName:"ul"},"rngd",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u865a\u62df\u673a\u73af\u5883\u6700\u597d\u542f\u52a8 rngd/haveged \u5426\u5219\u542f\u52a8\u975e\u5e38\u6162 200s+"))),Object(i.b)("li",{parentName:"ul"},"fs-lib",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ext4"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dracutdevs/dracut/blob/master/modules.d/90qemu/module-setup.sh"},"qemu"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5305\u542b virtio"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dracutdevs/dracut/tree/master/modules.d/98dracut-systemd"},"dracut-systemd"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u5b9e\u9645\u542f\u52a8\u811a\u672c\u903b\u8f91"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mirrors.edge.kernel.org/pub/linux/utils/boot/dracut/dracut.html"},"\u6587\u6863")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://wiki.centos.org/TipsAndTricks/CreateNewInitrd"},"Creating a New Initial RAM Disk")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rd.luks=0 rd.lvm=0 rd.md=0 rd.dm=0")," - \u4e0d\u626b\u63cf\u4e0d\u5fc5\u8981\u7684\u8bbe\u5907\u53ef\u4ee5\u52a0\u901f\u542f\u52a8")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# \u57fa\u7840\u5305\nyum install -y rng-tools nano\nsystemctl enable rngd\n\nlsinitrd /boot/initrd.img-4.6.0-1-amd64\nmodprobe --show-depends dm-raid|grep crc\n\n\n# --hostonly \u4ec5\u5b89\u88c5\u4e3b\u673a\u9700\u8981\u6a21\u5757\n# --add-drivers \u6dfb\u52a0\u5185\u6838\u6a21\u5757\ndracut --kver 4.18.0-193.19.1.el8_2.x86_64 --no-hostonly --add fs-lib initramfs\nlsinitrd initramfs\n\n# rootfs \u53ea\u5b89\u88c5 kernel-core \u7528\u4e8e\u6784\u5efa initrd\nyum install -y yum-utils\nrpm -Uvh --nodeps $(repoquery --location kernel-core)\n\n# \u67e5\u770b\u6240\u6709\u6a21\u5757\ndracut --kver 4.18.0-193.19.1.el8_2.x86_64 --no-hostonly --list-modules\n\ndracut -m "nfs network base" --no-hostonly initramfs-nfs-only.img\n\nyum install -y rng-tools\n# dracut-systemd systemd-initrd\n# virtio_mmio\ndracut initramfs --kver 4.18.0-193.19.1.el8_2.x86_64 \\\n  -f --no-hostonly -v \\\n  -m "base bash systemd dracut-systemd systemd-initrd qemu qemu-net fs-lib rngd busybox"  \\\n  --kernel-cmdline "rd.debug rd.shell rd.udev.debug rd.driver.pre=ext4 rd.driver.pre=virtio_mmio rd.break=cmdline rd.luks=0 rd.lvm=0 rd.md=0"\n\n')),Object(i.b)("h2",{id:"modules"},"modules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"05-bash - \u5b89\u88c5 bash \u4f5c\u4e3a /bin/sh"),Object(i.b)("li",{parentName:"ul"},"05-systemd - \u5b89\u88c5 systemd \u548c\u57fa\u7840\u670d\u52a1"),Object(i.b)("li",{parentName:"ul"},"05-busybox - \u5b89\u88c5 /usr/bin/busybox"),Object(i.b)("li",{parentName:"ul"},"06-rngd")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# busybox\ncurl -o /usr/bin/busybox https://busybox.net/downloads/binaries/1.31.0-defconfig-multiarch-musl/busybox-x86_64\nchmod +x /usr/bin/busybox\n\n# rngd\nyum install rng-tools -y\n")),Object(i.b)("h2",{id:"cmdline"},"cmdline"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"debug",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"rd.info \u65e5\u5fd7\u7ea7\u522b"),Object(i.b)("li",{parentName:"ul"},"rd.debug Shell \u6267\u884c\u4f1a set -x"),Object(i.b)("li",{parentName:"ul"},"rd.shell root \u6302\u8f7d\u5931\u8d25\u8fdb\u5165 shell"),Object(i.b)("li",{parentName:"ul"},"rd.break={cmdline|pre-udev|pre-trigger|initqueue|pre-mount|mount|pre-pivot|cleanup} \u8fdb\u5165 shell"),Object(i.b)("li",{parentName:"ul"},"rd.udev.info"),Object(i.b)("li",{parentName:"ul"},"rd.udev.debug")))),Object(i.b)("p",null,"rd.emergency=","[reboot|poweroff|halt]","\nspecify, what action to execute in case of a critical failure. rd.shell=0 also be specified.\nrd.driver.blacklist=",Object(i.b)("inlineCode",{parentName:"p"},"<drivername>[,<drivername>,\u2026]"),"\ndo not load kernel module ",Object(i.b)("inlineCode",{parentName:"p"},"<drivername>"),". This parameter can be specified multiple times.\nrd.driver.pre=",Object(i.b)("inlineCode",{parentName:"p"},"<drivername>[,<drivername>,\u2026]"),"\nforce loading kernel module ",Object(i.b)("inlineCode",{parentName:"p"},"<drivername>"),". This parameter can be specified multiple times.\nrd.driver.post=",Object(i.b)("inlineCode",{parentName:"p"},"<drivername>[,<drivername>,\u2026]"),"\nforce loading kernel module ",Object(i.b)("inlineCode",{parentName:"p"},"<drivername>")," after all automatic loading modules have been loaded. This parameter can be specified multiple times.\nrd.retry=",Object(i.b)("inlineCode",{parentName:"p"},"<seconds>"),"\nspecify how long dracut should retry the initqueue to configure devices. The default is 30 seconds. After 2/3 of the time, degraded raids are force started. If you have hardware, which takes a very long time to announce its drives, you might want to extend this value.\nrd.timeout=",Object(i.b)("inlineCode",{parentName:"p"},"<seconds>"),"\nspecify how long dracut should wait for devices to appear. The default is 0, which means forever. Note that this timeout should be longer than rd.retry to allow for proper configuration.\nrd.noverifyssl\naccept self-signed certificates for ssl downloads.\nrd.ctty=",Object(i.b)("inlineCode",{parentName:"p"},"<terminal device>"),'\nspecify the controlling terminal for the console. This is useful, if you have multiple "console=" arguments.'),Object(i.b)("p",null,"cp -r usr/lib/modules/4.18.0-193.19.1.el8_2.x86_64 lib/modules/"),Object(i.b)("h2",{id:"\u542f\u52a8\u6d41\u7a0b"},"\u542f\u52a8\u6d41\u7a0b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mirrors.edge.kernel.org/pub/linux/utils/boot/dracut/dracut.html#dracutbootup7"},"dracut.bootup"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                                    systemd-journal.socket\n                                               |\n                                               v\n                                    dracut-cmdline.service\n                                               |\n                                               v\n                                    dracut-pre-udev.service\n                                               |\n                                               v\n                                     systemd-udevd.service\n                                               |\n                                               v\nlocal-fs-pre.target                dracut-pre-trigger.service\n         |                                     |\n         v                                     v\n (various mounts)                systemd-udev-trigger.service\n         |        (swap devices)               |             (various low-level   (various low-level\n         |               |                     |             services: seed,       API VFS mounts:\n         v               v                     v             tmpfiles, random     mqueue, configfs,\n  local-fs.target   swap.target     dracut-initqueue.service    sysctl, ...)        debugfs, ...)\n         |               |                     |                    |                    |\n         \\_______________|____________________ | ___________________|____________________/\n                                              \\|/\n                                               v\n                                        sysinit.target\n                                               |\n                             _________________/|\\___________________\n                            /                  |                    \\\n                            |                  |                    |\n                            v                  |                    v\n                        (various               |              rescue.service\n                       sockets...)             |                    |\n                            |                  |                    v\n                            v                  |              rescue.target\n                     sockets.target            |\n                            |                  |\n                            \\_________________ |                                 emergency.service\n                                              \\|                                         |\n                                               v                                         v\n                                         basic.target                             emergency.target\n                                               |\n                        ______________________/|\n                       /                       |\n                       |                       v\n                       |            dracut-pre-mount.service\n                       |                       |\n                       |                       v\n                       |                  sysroot.mount\n                       |                       |\n                       |                       v\n                       |             initrd-root-fs.target\n           (custom initrd services)            |\n                       |                       v\n                       |             dracut-mount.service\n                       |                       |\n                       |                       v\n                       |            initrd-parse-etc.service\n                       |                       |\n                       |                       v\n                       |            (sysroot-usr.mount and\n                       |             various mounts marked\n                       |               with fstab option\n                       |                x-initrd.mount)\n                       |                       |\n                       |                       v\n                       |                initrd-fs.target\n                       \\______________________ |\n                                              \\|\n                                               v\n                                          initrd.target\n                                               |\n                                               v\n                                    dracut-pre-pivot.service\n                                               |\n                                               v\n                                     initrd-cleanup.service\n                                          isolates to\n                                    initrd-switch-root.target\n                                               |\n                                               v\n                        ______________________/|\n                       /                       |\n                       |        initrd-udevadm-cleanup-db.service\n                       |                       |\n           (custom initrd services)            |\n                       |                       |\n                       \\______________________ |\n                                              \\|\n                                               v\n                                   initrd-switch-root.target\n                                               |\n                                               v\n                                   initrd-switch-root.service\n                                               |\n                                               v\n                                          switch-root\n")))}u.isMDXComponent=!0}}]);