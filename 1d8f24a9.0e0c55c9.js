(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1065:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=b(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(n),p=t,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||l;return n?a.a.createElement(m,c(c({ref:r},s),{},{components:n})):a.a.createElement(m,c({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=p;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},191:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return o})),n.d(r,"default",(function(){return b}));var t=n(3),a=n(8),l=(n(0),n(1065)),i={id:"k3s-faq",title:"K3S \u5e38\u89c1\u95ee\u9898"},c={unversionedId:"devops/kubernetes/distro/k3s-faq",id:"devops/kubernetes/distro/k3s-faq",isDocsHomePage:!1,title:"K3S \u5e38\u89c1\u95ee\u9898",description:"\u8bbf\u95ee K3S \u7684 ETCD",source:"@site/notes/devops/kubernetes/distro/k3s-faq.md",slug:"/devops/kubernetes/distro/k3s-faq",permalink:"/notes/devops/kubernetes/distro/k3s-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s-faq.md",version:"current",sidebar:"docs",previous:{title:"K3S Cookbook",permalink:"/notes/devops/kubernetes/distro/k3s-cookbook"},next:{title:"K3S Version",permalink:"/notes/devops/kubernetes/distro/k3s-version"}},o=[{value:"\u8bbf\u95ee K3S \u7684 ETCD",id:"\u8bbf\u95ee-k3s-\u7684-etcd",children:[]},{value:"docker vs containerd",id:"docker-vs-containerd",children:[]},{value:"k3s \u72b6\u6001\u6e05\u7406",id:"k3s-\u72b6\u6001\u6e05\u7406",children:[]},{value:"K3S \u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790",id:"k3s-\u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790",children:[]},{value:"\u533a\u5206 worker \u548c cp",id:"\u533a\u5206-worker-\u548c-cp",children:[]},{value:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d",id:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d",children:[]},{value:"x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0",id:"x509-certificate-relies-on-legacy-common-name-field-use-sans-or-temporarily-enable-common-name-matching-with-godebugx509ignorecn0",children:[]},{value:"k3s etcd \u5907\u4efd",id:"k3s-etcd-\u5907\u4efd",children:[]},{value:"\u8fc1\u79fb k3s data-dir",id:"\u8fc1\u79fb-k3s-data-dir",children:[]},{value:"ContainerStatus from runtime service failed: rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial unix: missing address&quot;",id:"containerstatus-from-runtime-service-failed-rpc-error-code--unavailable-desc--connection-error-desc--transport-error-while-dialing-dial-unix-missing-address",children:[]},{value:"\u51fa\u73b0\u5f88\u5947\u602a\u7684 probe \u5931\u8d25\uff0c\u770b\u4e0d\u5230\u65e5\u5fd7\uff0c\u91cd\u542f pod \u4e5f\u65e0\u6cd5\u4fee\u590d",id:"\u51fa\u73b0\u5f88\u5947\u602a\u7684-probe-\u5931\u8d25\uff0c\u770b\u4e0d\u5230\u65e5\u5fd7\uff0c\u91cd\u542f-pod-\u4e5f\u65e0\u6cd5\u4fee\u590d",children:[]},{value:"k3s \u5360\u7528\u5927\u91cf\u5e26\u5bbd",id:"k3s-\u5360\u7528\u5927\u91cf\u5e26\u5bbd",children:[]}],s={toc:o};function b(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u8bbf\u95ee-k3s-\u7684-etcd"},"\u8bbf\u95ee K3S \u7684 ETCD"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u90e8\u5206\u63a5\u53e3")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# kine \u4e0d\u652f\u6301 --keys-only\nETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get /registry/clusterrolebindings/system:kube-dns\n# \u6240\u6709\n# ETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get / --prefix\n")),Object(l.b)("h2",{id:"docker-vs-containerd"},"docker vs containerd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 docker"),Object(l.b)("li",{parentName:"ul"},"docker",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u8fd0\u7ef4\u719f\u6089"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"docker \u547d\u4ee4\u597d\u7528"),Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf\u3001\u7f13\u5b58\u4f1a\u66f4\u52a0\u53cb\u597d - \u867d\u7136 containerd \u6709 docker shim"))),Object(l.b)("li",{parentName:"ul"},"containerd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"docker \u5e95\u5c42\u4e5f\u662f\u4f7f\u7528\u7684 containerd"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u4f7f\u7528 docker \u4f1a\u989d\u5916\u6d88\u8017\u4e00\u4e9b\u5185\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u4e13\u7528\u7684 cli - crictl \u4e3b\u8981\u7528\u4e8e\u8c03\u8bd5")))),Object(l.b)("h2",{id:"k3s-\u72b6\u6001\u6e05\u7406"},"k3s \u72b6\u6001\u6e05\u7406"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"K3S \u8282\u70b9\u91cd\u7f6e"),Object(l.b)("li",{parentName:"ul"},"cni0 \u548c flannel.1 \u4e0d\u4e00\u5b9a\u5b58\u5728",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53d6\u51b3\u4e8e\u5b89\u88c5\u65b9\u5f0f"),Object(l.b)("li",{parentName:"ul"},"/var/lib/cni")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u811a\u672c\u6e05\u7406")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u901a\u8fc7 get.k3s.io \u5b89\u88c5\u4f1a\u6709\u8be5\u811a\u672c\n/usr/local/bin/k3s-killall.sh\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u624b\u52a8\u6e05\u7406")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u6e05\u7406 iptables \u89c4\u5219\niptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore\niptables-save | grep -v 10.4[2,3] | iptables-restore\n\n# \u5bb9\u5668\u955c\u50cf\u6e05\u7406\n# \u505c\u6b62\u6240\u6709 pod\uff0c\u6e05\u9664\u505c\u6b62\u5bb9\u5668\uff0c\u6e05\u9664 volume\uff0c\u4f46\u4fdd\u7559\u4e0b\u8f7d\u7684\u955c\u50cf\ndocker stop $(docker ps -aq)\ndocker system prune --volumes -f\ndocker system prune -f\n# \u5982\u679c\u4e0d\u60f3\u4fdd\u7559\u955c\u50cf\n# docker system prune -a\n# \u53d6\u6d88\u6240\u6709\u6302\u8f7d\nsudo umount $(mount -v | grep '/var/lib/kubelet' | awk '{print $3}')\n# k3s \u548c kubelet \u72b6\u6001\nsudo rm -rf /var/lib/rancher\nsudo rm -rf /var/lib/kubelet\n# kubeconf\nsudo rm -f /etc/rancher/k3s/k3s.yaml\n# \u65e5\u5fd7\u6e05\u7406\nsudo rm -rf /var/log/containers/*\nsudo rm -rf /var/log/pods/*\nsudo rm -f /var/log/k3s.log\n\n# \u5982\u679c\u7528\u4e86\u6570\u636e\u5e93\necho drop table if exists kine | psql -d $DATABASE_URL\n\n# \u5982\u679c\u6709\u65e5\u5fd7\u6587\u4ef6\uff0c\u4f8b\u5982 --log k3s-server.log --alsologtostderr\nrm k3s{,-server,-agent}.log -f\n\nip li del cni0\nip li del flannel.1\nrm -rf /var/lib/cni/*\n")),Object(l.b)("h2",{id:"k3s-\u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790"},"K3S \u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AlpineLinux - 50M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u663e\u5b58 32M"),Object(l.b)("li",{parentName:"ul"},"sshd,tincd,dbus"))),Object(l.b)("li",{parentName:"ul"},"dockerd - 97M + shim/8M"),Object(l.b)("li",{parentName:"ul"},"containerd - 50M + shim/11M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"docker \u4e5f\u4f9d\u8d56 containerd"))),Object(l.b)("li",{parentName:"ul"},"server 550M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--disable=traefik\uff0cservicelb")),Object(l.b)("li",{parentName:"ul"},"server \u4e5f\u4f1a\u542f\u52a8 agent"),Object(l.b)("li",{parentName:"ul"},"\u5bb9\u5668",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"metrics-server"),Object(l.b)("li",{parentName:"ul"},"coredns"),Object(l.b)("li",{parentName:"ul"},"local-path-provisioner"))))),Object(l.b)("li",{parentName:"ul"},"agent 180M"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u57fa\u7840\u670d\u52a1 - ingress-nginx, metallb, cert-manager, kubernetes-dashboard",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"server - 1G"),Object(l.b)("li",{parentName:"ul"},"agent - 450M"),Object(l.b)("li",{parentName:"ul"},"+linkerd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"server 1.55G"),Object(l.b)("li",{parentName:"ul"},"agent 920M")))))),Object(l.b)("h2",{id:"\u533a\u5206-worker-\u548c-cp"},"\u533a\u5206 worker \u548c cp"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--node-taint k3s-controlplane=true:NoExecute"))),Object(l.b)("h2",{id:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d"},"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--tls-san YOUR_IP_OR_HOSTNAME_HERE"))),Object(l.b)("h2",{id:"x509-certificate-relies-on-legacy-common-name-field-use-sans-or-temporarily-enable-common-name-matching-with-godebugx509ignorecn0"},"x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"E0905 23:03:57.992668   12600 controller.go:114] loading OpenAPI spec for \"v1alpha1.tap.linkerd.io\" failed with: failed to retrieve openAPI spec, http error: ResponseCode: 503, Body: Error trying to reach service: 'x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0', Header: map[Content-Type:[text/plain; charset=utf-8] X-Content-Type-Options:[nosniff]]\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\u65f6\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\nGODEBUG=x509ignoreCN=0\n")),Object(l.b)("h2",{id:"k3s-etcd-\u5907\u4efd"},"k3s etcd \u5907\u4efd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5feb\u7167\u76ee\u5f55 /server/db/snapshots")),Object(l.b)("h2",{id:"\u8fc1\u79fb-k3s-data-dir"},"\u8fc1\u79fb k3s data-dir"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"data-dir \u5305\u542b etc, local-path StorageClass, longhorn \u5b58\u50a8 - \u5f71\u54cd\u6027\u80fd")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"service k3s stop\n# \u5982\u679c\u6ca1\u6709 k3s-killal \u53ef\u4ee5\u8003\u8651\u5173\u95ed k3s \u5f00\u673a\u81ea\u52a8\u542f\u52a8\u7136\u540e\u91cd\u542f\nk3s-killall\n\nmkdir -p /data/k3s\nrsync -aP /var/lib/rancher/k3s/ /data/k3s/\n\n# \u4fee\u6539 data-dir \u542f\u52a8\u670d\u52a1\necho 'data-dir: /data/k3s' >> /etc/rancher/k3s/config.yaml\nservice k3s start\n\n# busybox \u7684 lsof \u4e0d\u652f\u6301\u8fc7\u6ee4\u8def\u5f84\napk search lsof\nlsof +D /data/k3s | wc -l\n# \u8f93\u51fa 0 \u5219\u8fc1\u79fb\u5b8c\u6210\nlsof +D /var/lib/rancher/k3s | wc -l\n\n# \u6e05\u9664\nrm -rf /var/lib/rancher/k3s\n")),Object(l.b)("h2",{id:"containerstatus-from-runtime-service-failed-rpc-error-code--unavailable-desc--connection-error-desc--transport-error-while-dialing-dial-unix-missing-address"},'ContainerStatus from runtime service failed: rpc error: code = Unavailable desc = connection error: desc = "transport: Error while dialing dial unix: missing address"'),Object(l.b)("p",null,"\u4f3c\u4e4e\u662f containerd \u7684\u95ee\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/issues/1901"},"https://github.com/k3s-io/k3s/issues/1901"))),Object(l.b)("h2",{id:"\u51fa\u73b0\u5f88\u5947\u602a\u7684-probe-\u5931\u8d25\uff0c\u770b\u4e0d\u5230\u65e5\u5fd7\uff0c\u91cd\u542f-pod-\u4e5f\u65e0\u6cd5\u4fee\u590d"},"\u51fa\u73b0\u5f88\u5947\u602a\u7684 probe \u5931\u8d25\uff0c\u770b\u4e0d\u5230\u65e5\u5fd7\uff0c\u91cd\u542f pod \u4e5f\u65e0\u6cd5\u4fee\u590d"),Object(l.b)("p",null,"\u53ef\u80fd\u662f\u662f k3s \u7f51\u7edc proxy \u5f02\u5e38\u4e86\uff0c\u5c1d\u8bd5\u91cd\u542f k3s \u670d\u52a1\u3002"),Object(l.b)("h2",{id:"k3s-\u5360\u7528\u5927\u91cf\u5e26\u5bbd"},"k3s \u5360\u7528\u5927\u91cf\u5e26\u5bbd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"master \u4e4b\u95f4\u4ea4\u4e92\u8dd1\u5b8c\u4e86 50M \u5e26\u5bbd")),Object(l.b)("p",null,"\u91cd\u542f k3s \u89e3\u51b3"))}b.isMDXComponent=!0}}]);