(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{820:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(8),i=(r(0),r(879)),o={id:"intro",title:"Storage"},c={unversionedId:"ops/storage/intro",id:"ops/storage/intro",isDocsHomePage:!1,title:"Storage",description:"Tips",source:"@site/notes/ops/storage/README.md",slug:"/ops/storage/intro",permalink:"/notes/ops/storage/intro",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/storage/README.md",version:"current",sidebar:"docs",previous:{title:"SIP Awesome",permalink:"/notes/ops/network/telecom/sip/sip-awesome"},next:{title:"LUKS",permalink:"/notes/ops/storage/encryption/luks"}},l=[{value:"Tips",id:"tips",children:[]},{value:"Transfer",id:"transfer",children:[]},{value:"Disk",id:"disk",children:[]}],b={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/restic/restic"},"restic/restic"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://restic.github.io/"},"restic")),Object(i.b)("li",{parentName:"ul"},"Fast, secure, efficient backup program"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://rclone.org/"},"Rclone"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ncw/rclone"},"ncw/rclone")),Object(i.b)("li",{parentName:"ul"},"Rclone is a command line program to sync files and directories to and from"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mountainduck.io/"},"Mountain Duck"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mount server and cloud storage as a local disk"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mountainduck.io/comparison/"},"comparison")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cyberduck.io/"},"Cyberduck"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/iterate-ch/cyberduck"},"iterate-ch/cyberduck")),Object(i.b)("li",{parentName:"ul"},"Cyberduck is a libre FTP, SFTP, WebDAV, Amazon S3, OpenStack Swift, Backblaze B2, Microsoft Azure & OneDrive, Google Drive and Dropbox browser for Mac and Windows."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cryptomator.org/"},"Cryptomator"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/cryptomator/cryptomator"},"cryptomator/cryptomator")),Object(i.b)("li",{parentName:"ul"},"Free client-side encryption for your cloud files. Open source software: No backdoors, no registration."),Object(i.b)("li",{parentName:"ul"},"Transparent encryption"),Object(i.b)("li",{parentName:"ul"},"Files get encrypted individually"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/cryptomator/cryptofs"},"cryptomator/cryptofs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java Filesystem Provider with integrated encryption"))))),Object(i.b)("li",{parentName:"ul"},"Java",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/lookfirst/sardine"},"lookfirst/sardine"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"an easy to use webdav client for java"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/dCache/nfs4j"},"dCache/nfs4j"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Pure Java NFSv3 and NFSv4.1 implementation"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hierynomus/sshj"},"ssh, scp and sftp for java")))),Object(i.b)("li",{parentName:"ul"},"Golang",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/spf13/afero"},"spf13/afero")))),Object(i.b)("li",{parentName:"ul"},"S3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse/s3fs-fuse"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9650\u5236",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u968f\u673a\u5199\u6216 append \u4f1a\u91cd\u5199\u6574\u4e2a\u6587\u4ef6"),Object(i.b)("li",{parentName:"ul"},"list \u6574\u4e2a\u76ee\u5f55\u7684\u6027\u80fd\u8f83\u5dee, \u53d6\u51b3\u4e8e\u7f51\u7edc\u5ef6\u8fdf"),Object(i.b)("li",{parentName:"ul"},"\u6700\u7ec8\u4e00\u81f4\u6027\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8bfb\u53d6\u8fc7\u671f\u6570\u636e"),Object(i.b)("li",{parentName:"ul"},"\u91cd\u547d\u540d\u4e0d\u662f\u539f\u5b50\u6027\u7684"),Object(i.b)("li",{parentName:"ul"},"\u591a\u4e2a\u7aef\u6302\u8f7d\u4e0d\u4f1a\u8fdb\u884c\u534f\u8c03"),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u786c\u8fde\u63a5"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/kahing/goofys"},"kahing/goofys"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Goofys is a high-performance, POSIX-ish Amazon S3 file system written in Go"))))),Object(i.b)("li",{parentName:"ul"},"B2 Cloud Storage",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.backblaze.com/b2/cloud-storage-pricing.html"},"Pricing")),Object(i.b)("li",{parentName:"ul"},"\u975e\u5e38\u4fbf\u5b9c\u7684\u4e91\u5b58\u50a8"),Object(i.b)("li",{parentName:"ul"},"\u5b58\u50a8 0.005$/GB/Month"),Object(i.b)("li",{parentName:"ul"},"\u4e0b\u8f7d 0.02$/GB"))),Object(i.b)("li",{parentName:"ul"},"FS",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/kahing/catfs"},"kahing/catfs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Catfs is a caching filesystem written in Rust"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.snia.org/sites/default/files/SDC/2016/presentations/erasure_coding/DrorGoldenberg_Optimize_Storage_Efficiency-v2.pdf"},"Optimize Storage Efficiency")),Object(i.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528\u7684\u6587\u4ef6\u540d",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Windows ",Object(i.b)("inlineCode",{parentName:"li"},'\\/:*?"<>|')),Object(i.b)("li",{parentName:"ul"},"Linux, macOS ",Object(i.b)("inlineCode",{parentName:"li"},"null")," \u6216 ",Object(i.b)("inlineCode",{parentName:"li"},"/"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew install s3fs\n\nbrew install goofys\n\nexport AWS_ACCESS_KEY_ID=${ID}\nexport AWS_SECRET_ACCESS_KEY=${KEY}\n# goofys <bucket> <mountpoint>\n# goofys <bucket:prefix> <mountpoint>\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'find dir/ -name "offender1" -mtime -1 -print0 | du --files0-from=- -hc | tail -n1\n')),Object(i.b)("h2",{id:"transfer"},"Transfer"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e24\u4e2a\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u8f93\u5927\u91cf\u5c0f\u6587\u4ef6\u65f6\u975e\u5e38\u5feb\n# \u89c9\u5f97 gzip \u6162\u53ef\u4ee5\u4f7f\u7528 pigz\ntar c some/dir/ | gzip - | ssh host2 tar xz -C /other/dir/\n# \u5168\u91cf\u540c\u6b65\u540e\u518d\u8fdb\u884c\u589e\u91cf\u540c\u6b65\nrsync -azv some/dir/ user@host:/other/dir/\n\n")),Object(i.b)("h2",{id:"disk"},"Disk"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Disk_cloning"},"Disk cloning"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'#\nlsblk --output NAME,SIZE,VENDOR,FSTYPE,LABEL,UUID,MODE\n\n# \u514b\u9686\u5355\u4e2a\u78c1\u76d8\ndd if=/dev/sda1 of=/dev/sdb1 bs=64K conv=noerror,sync status=progress\n# \u514b\u9686\u6574\u4e2a\u78c1\u76d8\ndd if=/dev/sdX of=/dev/sdY bs=64K conv=noerror,sync status=progress\n\n# \u5907\u4efd\n# \u5907\u4efd\u6574\u4e2a\u7cfb\u7edf\nrsync -aAXv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n# \u4f7f\u7528 --info=progress2 \u663e\u793a\u603b\u4f53\u7684\u8fdb\u5ea6, \u800c\u4e0d\u662f\u6bcf\u4e2a\u6587\u4ef6\nrsync -aAX --info=progress2 --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder\n\n# \u5907\u4efd\u542f\u52a8\u5206\u533a\n# https://wiki.archlinux.org/index.php/disk_cloning\ndd if=/dev/sda1 of=/mnt/dst/bios-boot bs=64K conv=noerror,sync status=progress\n\n# \u5907\u4efd\u5206\u533a\nsfdisk -d /dev/sda > part_table\n# \u6062\u590d\u5206\u533a\nsfdisk /dev/sda < part_table\n# wipefs \u4e5f\u53ef\u4ee5\n')))}p.isMDXComponent=!0},879:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return r?n.a.createElement(f,c(c({ref:t},b),{},{components:r})):n.a.createElement(f,c({ref:t},b))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);