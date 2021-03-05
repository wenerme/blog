(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),l=(n(0),n(787)),i={id:"k3s-faq",title:"K3S \u5e38\u89c1\u95ee\u9898"},o={unversionedId:"devops/kubernetes/distro/k3s-faq",id:"devops/kubernetes/distro/k3s-faq",isDocsHomePage:!1,title:"K3S \u5e38\u89c1\u95ee\u9898",description:"\u8bbf\u95ee K3S \u7684 ETCD",source:"@site/notes/devops/kubernetes/distro/k3s-faq.md",slug:"/devops/kubernetes/distro/k3s-faq",permalink:"/notes/devops/kubernetes/distro/k3s-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s-faq.md",version:"current",sidebar:"docs",previous:{title:"K3S Cookbook",permalink:"/notes/devops/kubernetes/distro/k3s-cookbook"},next:{title:"K3S Version",permalink:"/notes/devops/kubernetes/distro/k3s-version"}},c=[{value:"\u8bbf\u95ee K3S \u7684 ETCD",id:"\u8bbf\u95ee-k3s-\u7684-etcd",children:[]},{value:"docker vs containerd",id:"docker-vs-containerd",children:[]},{value:"k3s \u72b6\u6001\u6e05\u7406",id:"k3s-\u72b6\u6001\u6e05\u7406",children:[]},{value:"K3S \u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790",id:"k3s-\u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790",children:[]},{value:"\u533a\u5206 worker \u548c cp",id:"\u533a\u5206-worker-\u548c-cp",children:[]},{value:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d",id:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d",children:[]},{value:"x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0",id:"x509-certificate-relies-on-legacy-common-name-field-use-sans-or-temporarily-enable-common-name-matching-with-godebugx509ignorecn0",children:[]},{value:"k3s etcd \u5907\u4efd",id:"k3s-etcd-\u5907\u4efd",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u8bbf\u95ee-k3s-\u7684-etcd"},"\u8bbf\u95ee K3S \u7684 ETCD"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ea\u652f\u6301\u90e8\u5206\u63a5\u53e3")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# kine \u4e0d\u652f\u6301 --keys-only\nETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get /registry/clusterrolebindings/system:kube-dns\n# \u6240\u6709\n# ETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get / --prefix\n")),Object(l.b)("h2",{id:"docker-vs-containerd"},"docker vs containerd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 docker"),Object(l.b)("li",{parentName:"ul"},"docker",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u8fd0\u7ef4\u719f\u6089"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"docker \u547d\u4ee4\u597d\u7528"),Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf\u3001\u7f13\u5b58\u4f1a\u66f4\u52a0\u53cb\u597d - \u867d\u7136 containerd \u6709 docker shim"))),Object(l.b)("li",{parentName:"ul"},"containerd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"docker \u5e95\u5c42\u4e5f\u662f\u4f7f\u7528\u7684 containerd"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u4f7f\u7528 docker \u4f1a\u989d\u5916\u6d88\u8017\u4e00\u4e9b\u5185\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u4e13\u7528\u7684 cli - crictl \u4e3b\u8981\u7528\u4e8e\u8c03\u8bd5")))),Object(l.b)("h2",{id:"k3s-\u72b6\u6001\u6e05\u7406"},"k3s \u72b6\u6001\u6e05\u7406"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"K3S \u8282\u70b9\u91cd\u7f6e"),Object(l.b)("li",{parentName:"ul"},"cni0 \u548c flannel.1 \u4e0d\u4e00\u5b9a\u5b58\u5728",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53d6\u51b3\u4e8e\u5b89\u88c5\u65b9\u5f0f"),Object(l.b)("li",{parentName:"ul"},"/var/lib/cni")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u811a\u672c\u6e05\u7406")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u901a\u8fc7 get.k3s.io \u5b89\u88c5\u4f1a\u6709\u8be5\u811a\u672c\n/usr/local/bin/k3s-killall.sh\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u624b\u52a8\u6e05\u7406")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u6e05\u7406 iptables \u89c4\u5219\niptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore\niptables-save | grep -v 10.4[2,3] | iptables-restore\n\n# \u5bb9\u5668\u955c\u50cf\u6e05\u7406\n# \u505c\u6b62\u6240\u6709 pod\uff0c\u6e05\u9664\u505c\u6b62\u5bb9\u5668\uff0c\u6e05\u9664 volume\uff0c\u4f46\u4fdd\u7559\u4e0b\u8f7d\u7684\u955c\u50cf\ndocker stop $(docker ps -aq)\ndocker system prune --volumes -f\ndocker system prune -f\n# \u5982\u679c\u4e0d\u60f3\u4fdd\u7559\u955c\u50cf\n# docker system prune -a\n# \u53d6\u6d88\u6240\u6709\u6302\u8f7d\nsudo umount $(mount -v | grep '/var/lib/kubelet' | awk '{print $3}')\n# k3s \u548c kubelet \u72b6\u6001\nsudo rm -rf /var/lib/rancher\nsudo rm -rf /var/lib/kubelet\n# kubeconf\nsudo rm -f /etc/rancher/k3s/k3s.yaml\n# \u65e5\u5fd7\u6e05\u7406\nsudo rm -rf /var/log/containers/*\nsudo rm -rf /var/log/pods/*\nsudo rm -f /var/log/k3s.log\n\n# \u5982\u679c\u7528\u4e86\u6570\u636e\u5e93\necho drop table if exists kine | psql -d $DATABASE_URL\n\n# \u5982\u679c\u6709\u65e5\u5fd7\u6587\u4ef6\uff0c\u4f8b\u5982 --log k3s-server.log --alsologtostderr\nrm k3s{,-server,-agent}.log -f\n\nip li del cni0\nip li del flannel.1\nrm -rf /var/lib/cni/*\n")),Object(l.b)("h2",{id:"k3s-\u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790"},"K3S \u90e8\u7f72\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u5206\u6790"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AlpineLinux - 50M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u663e\u5b58 32M"),Object(l.b)("li",{parentName:"ul"},"sshd,tincd,dbus"))),Object(l.b)("li",{parentName:"ul"},"dockerd - 97M + shim/8M"),Object(l.b)("li",{parentName:"ul"},"containerd - 50M + shim/11M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"docker \u4e5f\u4f9d\u8d56 containerd"))),Object(l.b)("li",{parentName:"ul"},"server 550M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--disable=traefik\uff0cservicelb")),Object(l.b)("li",{parentName:"ul"},"server \u4e5f\u4f1a\u542f\u52a8 agent"),Object(l.b)("li",{parentName:"ul"},"\u5bb9\u5668",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"metrics-server"),Object(l.b)("li",{parentName:"ul"},"coredns"),Object(l.b)("li",{parentName:"ul"},"local-path-provisioner"))))),Object(l.b)("li",{parentName:"ul"},"agent 180M"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u57fa\u7840\u670d\u52a1 - ingress-nginx, metallb, cert-manager, kubernetes-dashboard",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"server - 1G"),Object(l.b)("li",{parentName:"ul"},"agent - 450M"),Object(l.b)("li",{parentName:"ul"},"+linkerd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"server 1.55G"),Object(l.b)("li",{parentName:"ul"},"agent 920M")))))),Object(l.b)("h2",{id:"\u533a\u5206-worker-\u548c-cp"},"\u533a\u5206 worker \u548c cp"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--node-taint k3s-controlplane=true:NoExecute"))),Object(l.b)("h2",{id:"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d"},"\u751f\u6210\u7684\u8bc1\u4e66\u81ea\u5b9a\u4e49\u57df\u540d"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--tls-san YOUR_IP_OR_HOSTNAME_HERE"))),Object(l.b)("h2",{id:"x509-certificate-relies-on-legacy-common-name-field-use-sans-or-temporarily-enable-common-name-matching-with-godebugx509ignorecn0"},"x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"E0905 23:03:57.992668   12600 controller.go:114] loading OpenAPI spec for \"v1alpha1.tap.linkerd.io\" failed with: failed to retrieve openAPI spec, http error: ResponseCode: 503, Body: Error trying to reach service: 'x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0', Header: map[Content-Type:[text/plain; charset=utf-8] X-Content-Type-Options:[nosniff]]\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\u65f6\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\nGODEBUG=x509ignoreCN=0\n")),Object(l.b)("h2",{id:"k3s-etcd-\u5907\u4efd"},"k3s etcd \u5907\u4efd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5feb\u7167\u76ee\u5f55 /server/db/snapshots")))}s.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);