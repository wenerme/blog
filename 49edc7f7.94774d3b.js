(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(787)),c={id:"docker-network",title:"Docker \u7f51\u7edc"},i={unversionedId:"devops/docker/docker-network",id:"devops/docker/docker-network",isDocsHomePage:!1,title:"Docker \u7f51\u7edc",description:"Docker Network",source:"@site/notes/devops/docker/docker-network.md",slug:"/devops/docker/docker-network",permalink:"/notes/devops/docker/docker-network",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/docker/docker-network.md",version:"current",sidebar:"docs",previous:{title:"Docker FAQ",permalink:"/notes/devops/docker/docker-faq"},next:{title:"Docker \u4ed3\u5e93",permalink:"/notes/devops/docker/docker-registry"}},l=[],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"docker-network"},"Docker Network"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u521b\u5efa\u7684\u7f51\u7edc\u5185\u90e8\u90fd\u4f1a\u542f\u52a8 DHCP \u65e0\u6cd5\u4f7f\u7528\u5916\u90e8 DHCP",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gist.github.com/nerdalert/3d2b891d41e0fa8d688c"},"Experimental Docker Libnetwork DHCP Driver")))),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5916\u90e8 DHCP \u9700\u8981\u5b9e\u73b0 IPAM - \u76ee\u524d\u7248\u672c\u6ca1\u6709 DHCP \u7684 IPAM"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981\u521b\u5efa interface \u5219\u9700\u8981 NET_ADMIN \u7136\u540e\u6620\u5c04\u8bbe\u5907 - \u4f8b\u5982 /dev/net/tun"))),Object(o.b)("li",{parentName:"ul"},"\u7f51\u7edc\u6a21\u5f0f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"host - \u4f7f\u7528\u4e3b\u673a\u7f51\u7edc"),Object(o.b)("li",{parentName:"ul"},"macvlan - \u4f7f\u7528\u4e3b\u673a\u7684\u4e00\u5f20\u7f51\u5361\u505a macvlan",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u989d\u5916\u7684 bridge"),Object(o.b)("li",{parentName:"ul"},"\u4f46\u4e3b\u673a\u4e0e\u5bb9\u5668\u65e0\u6cd5\u4f7f\u7528\u8be5\u7f51\u5361\u4e92\u901a"))),Object(o.b)("li",{parentName:"ul"},"bridge - \u6865\u63a5 - \u9ed8\u8ba4\u6a21\u5f0f"),Object(o.b)("li",{parentName:"ul"},"overlay - \u4e00\u822c\u7528\u4e8e\u8de8\u4e3b\u673a\u7f51\u7edc"),Object(o.b)("li",{parentName:"ul"},"none - \u4e0d\u9700\u8981\u7f51\u7edc"))),Object(o.b)("li",{parentName:"ul"},"IPAM",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u76ee\u524d\u5185\u5efa\u7684 IPAM \u9a71\u52a8 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/docker/libnetwork/tree/master/ipams"},"docker/libnetwork/ipams"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"default - \u9ed8\u8ba4\u6309\u987a\u5e8f\u83b7\u53d6 IP"),Object(o.b)("li",{parentName:"ul"},"null - \u7f51\u7edc\u4e3a none \u65f6\u4f7f\u7528"),Object(o.b)("li",{parentName:"ul"},"remote - \u6307\u5b9a\u4e0d\u5b58\u5728\u7684\u5219\u4f1a\u5c1d\u8bd5\u4f5c\u4e3a IPAM \u63d2\u4ef6\u8fdb\u884c\u521d\u59cb\u5316"))))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pc.nanog.org/static/published/meetings/NANOG72/1552/20180219_Greenberg_Docker_Libnetwork_Drivers__v1.pdf"},"Docker LibNetwork Plugins - Explorer\u2019s Tale"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e0d\u6307\u5b9a subnet \u5219\u662f\u4ece 172.17 \u7ee7\u7eed\u5f80\u540e\u589e\u52a0\ndocker network create appnet -o 'com.docker.network.bridge.name=appnet'\n# \u6dfb\u52a0 slave \u7f51\u5361\u4ee5\u4fbf\u4e92\u901a\n# ip li set dev mynet master appnet\n\n# \u4f7f\u7528 eth1 \u4f5c\u4e3a\u4e0a\u7ea7 - \u65e0\u6cd5\u901a\u8fc7 eth1 \u4e92\u901a - \u5982\u679c\u6709 host \u6709\u4e24\u4e2a\u7f51\u53e3\u5219\u53ef\u4ee5\n# \u53ef\u4ee5\u4e0e\u4e3b\u673a\u4e92\u901a\u7684\u5bb9\u5668\u7f51\u7edc\uff0c\u4f46\u4f1a\u81ea\u884c\u8bbe\u7f6e ip \u800c\u4e0d\u662f\u4f7f\u7528 dhcp\ndocker network create -d macvlan --subnet=192.168.1.0/24 --gateway=192.168.1.1 -o parent=eth1 appnet\n\n# \u67e5\u770b\u5bb9\u5668\u76d1\u542c\npid=$(docker inspect -f '{{.State.Pid}}' container_name_or_id)\nsudo nsenter -t $pid -n netstat\n")))}b.isMDXComponent=!0},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,s=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(s,i(i({ref:t},p),{},{components:r})):a.a.createElement(s,i({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);