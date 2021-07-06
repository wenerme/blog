(window.webpackJsonp=window.webpackJsonp||[]).push([[929],{1002:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),l=(n(0),n(1114)),i={title:"NFTables"},o={unversionedId:"os/linux/network/nftables",id:"os/linux/network/nftables",isDocsHomePage:!1,title:"NFTables",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/os/linux/network/nftables.md",slug:"/os/linux/network/nftables",permalink:"/notes/os/linux/network/nftables",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/nftables.md",version:"current",sidebar:"docs",previous:{title:"nftables \u89c4\u5219",permalink:"/notes/os/linux/network/nftables-rule"},next:{title:"ngrep",permalink:"/notes/os/linux/network/ngrep"}},c=[{value:"Error: Could not process rule: File exists",id:"error-could-not-process-rule-file-exists",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"iptables \u540e\u7ee7"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://jlk.fjfi.cvut.cz/arch/manpages/man/nft.8"},"nft.8")),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u89c4\u5219\u4f1a\u5305\u542b\u76ee\u5f55\u5185\u914d\u7f6e - ",Object(l.b)("inlineCode",{parentName:"li"},'include "/etc/nftables.d/*.nft"'),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"save \u540e\u4e0d\u4f1a\u6709\u8be5 include \u8bed\u53e5 - \u4e0d\u8981 save"),Object(l.b)("li",{parentName:"ul"},"\u5c3d\u91cf\u4f7f\u7528 reload"))),Object(l.b)("li",{parentName:"ul"},"inet \u53ea\u80fd\u7528\u4e8e filter \u4e0d\u80fd\u7528\u4e8e nat"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://wiki.nftables.org/wiki-nftables/index.php/Quick_reference-nftables_in_10_minutes"},"Quick reference-nftables in 10 minutes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developers.redhat.com/blog/2017/01/10/migrating-my-iptables-setup-to-nftables/"},"Migrating my iptables setup to nftables")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developers.redhat.com/blog/2016/10/28/what-comes-after-iptables-its-successor-of-course-nftables/"},"What comes after 'iptables'? Its successor, of course: ",Object(l.b)("inlineCode",{parentName:"a"},"nftables"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developers.redhat.com/blog/2017/04/11/benchmarking-nftables/"},"Benchmarking nftables")))),Object(l.b)("li",{parentName:"ul"},"\u5f00\u53d1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/google/nftables"},"google/nftables")," - Golang")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u6240\u6709\u89c4\u5219\nnft list ruleset\n# \u5bfc\u51fa\u4e3a JSON\nnft -j list ruleset\n\n# \u6e05\u9664\u89c4\u5219\nnft flush ruleset\n\n# \u6e05\u9664\u5355\u4e2a famliy \u89c4\u5219\nnft flush ruleset arp\nnft flush ruleset ip\nnft flush ruleset ip6\nnft flush ruleset bridge\nnft flush ruleset inet\n\n# \u5e94\u7528\u89c4\u5219\nnft -f rule.nft\n\n# \u8f6c\u4e49\n# nft add rule ip filter INPUT tcp dport 22 ct state new counter accept\niptables-translate -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -j ACCEPT\n\n# \u5355\u4e2a\u89c4\u5219\u53ea\u80fd\u4f7f\u7528\u53e5\u67c4\u5220\u9664\n# \u67e5\u770b\nnft --handle --numeric list chain inet filter input\n# \u5220\u9664\nnft delete rule inet fltrTable input handle 10\n\n# \u6e05\u7a7a\u8868\nnft flush table foo\n# \u6e05\u7a7a\u94fe\nnft flush chain foo bar\nnft delete rule ip6 foo bar\n\nnft describe tcp flags\nnft describe ct_state\nnft describe icmp_type\n")),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"error-could-not-process-rule-file-exists"},"Error: Could not process rule: File exists"))}u.isMDXComponent=!0},1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,m=b["".concat(i,".").concat(f)]||b[f]||p[f]||l;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);