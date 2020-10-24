(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{583:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),l=(a(0),a(625)),i={id:"k3s",title:"K3S"},b={unversionedId:"devops/kubernetes/distro/k3s",id:"devops/kubernetes/distro/k3s",isDocsHomePage:!1,title:"K3S",description:"K3S",source:"@site/notes/devops/kubernetes/distro/k3s.md",slug:"/devops/kubernetes/distro/k3s",permalink:"/notes/devops/kubernetes/distro/k3s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/distro/k3s.md",version:"current",sidebar:"docs",previous:{title:"Kubernates \u9762\u677f",permalink:"/notes/devops/kubernetes/k8s-dashboard"},next:{title:"K3S Version",permalink:"/notes/devops/kubernetes/distro/k3s-version"}},c=[{value:"Tips",id:"tips",children:[]},{value:"k3s server",id:"k3s-server",children:[{value:"get.k3s.io",id:"getk3sio",children:[]}]},{value:"\u624b\u52a8\u5b89\u88c5\u542f\u52a8",id:"\u624b\u52a8\u5b89\u88c5\u542f\u52a8",children:[]},{value:"containerd",id:"containerd",children:[]},{value:"registries",id:"registries",children:[]},{value:"\u7b14\u8bb0",id:"\u7b14\u8bb0",children:[{value:"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91",id:"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"K3S \u5b89\u88c5\u6e05\u7406",id:"k3s-\u5b89\u88c5\u6e05\u7406",children:[]}]},{value:"docker vs containerd",id:"docker-vs-containerd",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"k3s"},"K3S"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9\u7684\u540d\u5b57\u9700\u8981\u552f\u4e00",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 hostname "),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"K3S_NODE_NAME")," \u6216 ",Object(l.b)("inlineCode",{parentName:"li"},"--node-name")," \u4fee\u6539"))),Object(l.b)("li",{parentName:"ul"},"k3s \u4f1a\u8bfb\u53d6 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/machine-id")," \u6216 ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/dbus/machine-id")," \u4f5c\u4e3a\u8282\u70b9 UUID"),Object(l.b)("li",{parentName:"ul"},"kubconfig \u6587\u4ef6 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72 traefik \u4f5c\u4e3a ingress"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/"}),"\u73af\u5883\u8981\u6c42"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Linux 3.10+"),Object(l.b)("li",{parentName:"ul"},"Server \u5185\u5b58 512 MB+"),Object(l.b)("li",{parentName:"ul"},"Agent \u5185\u5b58 75 MB"),Object(l.b)("li",{parentName:"ul"},"\u78c1\u76d8 200 MB"),Object(l.b)("li",{parentName:"ul"},"\u67b6\u6784 x86_64, ARMv7, ARM64"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"}),"AlpineLinux \u989d\u5916\u914d\u7f6e")),Object(l.b)("li",{parentName:"ul"},"Production",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Small <= 10 \u8282\u70b9 - Server 2C4G - Database 1C2G"),Object(l.b)("li",{parentName:"ul"},"Medium <= 100 \u8282\u70b9 - Server 4C8G - Database 2C8G"))))),Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"6443 - server - \u8282\u70b9\u901a\u4fe1 - Kubernetes API"),Object(l.b)("li",{parentName:"ul"},"6444"),Object(l.b)("li",{parentName:"ul"},"8472/udp - server/agent - Flannel VXLAN"),Object(l.b)("li",{parentName:"ul"},"10250 -  server/agent - kubelet"),Object(l.b)("li",{parentName:"ul"},"10251"),Object(l.b)("li",{parentName:"ul"},"10010 - containerd"),Object(l.b)("li",{parentName:"ul"},"10248 - 10252"),Object(l.b)("li",{parentName:"ul"},"10249"),Object(l.b)("li",{parentName:"ul"},"30518"),Object(l.b)("li",{parentName:"ul"},"30643"),Object(l.b)("li",{parentName:"ul"},"46517"))),Object(l.b)("li",{parentName:"ul"},"K3S \u7ec4\u4ef6 - \u5b89\u88c5\u65f6\u53ef\u7981\u7528\u5185\u7f6e\u7ec4\u4ef6 ",Object(l.b)("inlineCode",{parentName:"li"},"--disable"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"containerd - \u53ef\u9009\u7528 docker"),Object(l.b)("li",{parentName:"ul"},"Flannel"),Object(l.b)("li",{parentName:"ul"},"coredns - CoreDNS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf ",Object(l.b)("inlineCode",{parentName:"li"},"rancher/coredns-coredns")))),Object(l.b)("li",{parentName:"ul"},"CNI"),Object(l.b)("li",{parentName:"ul"},"traefik - Ingress \u63a7\u5236\u5668",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf ",Object(l.b)("inlineCode",{parentName:"li"},"rancher/library-traefik")),Object(l.b)("li",{parentName:"ul"},"Traefik 2.0 integration - ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/issues/1141"}),"#1141"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"http 80"),Object(l.b)("li",{parentName:"ul"},"https 443"),Object(l.b)("li",{parentName:"ul"},"dash 8080"),Object(l.b)("li",{parentName:"ul"},"metric 9100"),Object(l.b)("li",{parentName:"ul"},"httpn 8880"))))),Object(l.b)("li",{parentName:"ul"},"servicelb - \u5185\u5d4c\u8d1f\u8f7d\u5747\u8861",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/klipper-lb"}),"rancher/klipper-lb"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/klipper-lb/blob/master/entry"}),"https://github.com/rancher/klipper-lb/blob/master/entry")),Object(l.b)("li",{parentName:"ul"},"This works by using a host port for each service load balancer and setting up iptables to forward the request to the cluster IP. The regular k8s scheduler will find a free host port. If there are no free host ports, the service load balancer will stay in pending."))))),Object(l.b)("li",{parentName:"ul"},"\u5185\u5d4c\u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668"),Object(l.b)("li",{parentName:"ul"},"local-storage"),Object(l.b)("li",{parentName:"ul"},"metrics-server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://hub.docker.com/r/rancher/metrics-server"}),"rancher/metrics-server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubernetes-sigs/metrics-server"}),"kubernetes-sigs/metrics-server")))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/better-programming/b0b035c291a9"}),"Using a k3s Kubernetes Cluster for Your GitLab Project")))),Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 Nginx \u66ff\u4ee3 Traefik - ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/pull/1466/files"}),"#1466"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5df2\u7ecf\u88ab\u56de\u9000"))),Object(l.b)("li",{parentName:"ul"},"K3S \u6709 ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/issues/684#issuecomment-517032871"}),"server-ca \u548c client-ca"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 CSR \u662f\u4f7f\u7528 servert-ca\uff0c\u5bfc\u81f4\u521b\u5efa\u7684\u8bc1\u4e66\u65e0\u6cd5\u4f7f\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"issuer \u662f k3s-server-ca"))),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u4ece\u670d\u52a1\u5668\u53d6 client-ca \u521b\u5efa\u8bc1\u4e66"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/pull/1768"}),"#1768")," - \u9ed8\u8ba4\u4f7f\u7528 ClientCA \u800c\u4e0d\u662f ServerCA"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/issues/684#issuecomment-517501120"}),"\u81ea\u884c\u521b\u5efa\u811a\u672c")))),Object(l.b)("li",{parentName:"ul"},"\u76ee\u524d(1.18) admin \u9ed8\u8ba4\u662f\u5bc6\u7801 - ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/issues/1616"}),"#1616")," - \u9ed8\u8ba4\u4f7f\u7528\u8bc1\u4e66"))),Object(l.b)("li",{parentName:"ul"},"\u8d44\u6e90\u5185\u5b58\u5360\u7528",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AlpineLinux - 50M ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u663e\u5b58 32M"),Object(l.b)("li",{parentName:"ul"},"sshd,tincd,dbus"))),Object(l.b)("li",{parentName:"ul"},"dockerd - 97M + shim/8M"),Object(l.b)("li",{parentName:"ul"},"containerd - 50M + shim/11M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"docker \u4e5f\u4f9d\u8d56 containerd"))),Object(l.b)("li",{parentName:"ul"},"server 550M",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--disable=traefik\uff0cservicelb")),Object(l.b)("li",{parentName:"ul"},"server \u4e5f\u4f1a\u542f\u52a8 agent"),Object(l.b)("li",{parentName:"ul"},"\u5bb9\u5668",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"metrics-server"),Object(l.b)("li",{parentName:"ul"},"coredns"),Object(l.b)("li",{parentName:"ul"},"local-path-provisioner"))))),Object(l.b)("li",{parentName:"ul"},"agent 180M"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u57fa\u7840\u670d\u52a1 - ingress-nginx, metallb, cert-manager, kubernetes-dashboard",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"server - 1G"),Object(l.b)("li",{parentName:"ul"},"agent - 450M"),Object(l.b)("li",{parentName:"ul"},"+linkerd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"server 1.55G"),Object(l.b)("li",{parentName:"ul"},"agent 920M")))))))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'apk add util-linux\n[ -f /etc/machine-id ] || ( uuidgen | sudo tee -a /etc/machine-id )\n\napk add wireguard-virt wireguard-tools\n\n# INSTALL_K3S_EXEC \u9ed8\u8ba4\u4e3a agent\n# flannel wireguard - https://github.com/coreos/flannel/blob/master/dist/extension-wireguard\nK3S_NODE_NAME=k3s-server INSTALL_K3S_EXEC="server --flannel-backend=wireguard" INSTALL_K3S_SKIP_START=true INSTALL_K3S_BIN_DIR=/opt/k3s/bin curl -sfL https://get.k3s.io | sh -\n\nk3s server --flannel-backend=wireguard\n\n# \u5982\u679c\u662f root \u5b89\u88c5 - \u4fee\u6539\u4e0b kubeconfig \u6743\u9650\nsudo chmod a+r /etc/rancher/k3s/k3s.yaml\n# k3s \u9ed8\u8ba4\u4f1a\u8bbf\u95ee\u8be5\u6587\u4ef6\n\n# \u5176\u4ed6\u8bbf\u95ee\nexport KUBECONFIG=/etc/rancher/k3s/k3s.yaml\n')),Object(l.b)("h2",{id:"k3s-server"},"k3s server"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/server-config/"}),"k3s server \u914d\u7f6e")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/advanced/"}),"Advanced Options and Configuration")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--docker")," - \u4f7f\u7528 docker - \u9ed8\u8ba4 ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://containerd.io/"}),"containerd")),Object(l.b)("li",{parentName:"ul"},"\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/manifests")," \u4e0b\u9762\u7684\u6587\u4ef6\u4f1a\u88ab\u81ea\u52a8\u90e8\u7f72 - kubectl apply",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u5185\u5bb9 - ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/tree/master/manifests"}),"rancher/k3s/tree/master/manifests")))),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"containerd"),", \u542f\u52a8 agent \u7684\u65f6\u5019\u6dfb\u52a0 ",Object(l.b)("inlineCode",{parentName:"li"},"--docker")," \u53ef\u4f7f\u7528 docker"),Object(l.b)("li",{parentName:"ul"},"\u9488\u5bf9 ",Object(l.b)("inlineCode",{parentName:"li"},"containerd")," \u751f\u6210\u7684\u914d\u7f6e\u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/etc/containerd/config.toml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u5728\u76ee\u5f55\u4e0b\u521b\u5efa\u4e86 ",Object(l.b)("inlineCode",{parentName:"li"},"config.toml.tmpl")," \u5219\u4f1a\u88ab\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u6a21\u677f\u53ef\u8bbf\u95ee ",Object(l.b)("inlineCode",{parentName:"li"},"config.Node")," \u5bf9\u8c61 ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/blob/master/pkg/agent/templates/templates.go#L16-L32"}),"https://github.com/rancher/k3s/blob/master/pkg/agent/templates/templates.go#L16-L32")))),Object(l.b)("li",{parentName:"ul"},"AlpineLinux \u9700\u8981\u989d\u5916\u7684\u914d\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/update-extlinux.conf"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"default_kernel_opts \u6dfb\u52a0 ",Object(l.b)("inlineCode",{parentName:"li"},"cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory")),Object(l.b)("li",{parentName:"ul"},"\u7136\u540e ",Object(l.b)("inlineCode",{parentName:"li"},"update-extlinux && reboot")))),Object(l.b)("li",{parentName:"ul"},"\u975e root \u6570\u636e\u5b58\u653e\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"~/.rancher/k3s/data")),Object(l.b)("li",{parentName:"ul"},"root \u6570\u636e\u5b58\u653e\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/data")),Object(l.b)("li",{parentName:"ul"},"\u96c6\u7fa4 cidr ",Object(l.b)("inlineCode",{parentName:"li"},"10.42.0.0/16"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9 IP"),Object(l.b)("li",{parentName:"ul"},"cni0 - \u672c\u5730\u7f51\u53e3 - \u9644\u5e26 IP"),Object(l.b)("li",{parentName:"ul"},"flannel1.1 - \u96c6\u7fa4\u901a\u4fe1"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u5206\u914d\u7ed9\u6bcf\u4e2a Pod"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"/24")," \u5730\u5740 - \u4e0d\u540c\u8282\u70b9\u4e4b\u95f4\u8fdb\u884c\u8f6c\u53d1"))),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1 cidr ",Object(l.b)("inlineCode",{parentName:"li"},"10.43.0.0/16"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1 IP"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd ping"),Object(l.b)("li",{parentName:"ul"},"\u865a\u62df\u5730\u5740\uff0c\u901a\u8fc7 iptables \u914d\u7f6e"))),Object(l.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u57df\u540d cluster.local"),Object(l.b)("li",{parentName:"ul"},"coredns ",Object(l.b)("inlineCode",{parentName:"li"},"10.43.0.10")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/networking/"}),"\u7f51\u7edc"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 flannel \u4f5c\u4e3a CNI\uff0c\u4f7f\u7528 VXLAN \u540e\u7aef"),Object(l.b)("li",{parentName:"ul"},"flannel ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/blob/fe7337937155af41f1aebeb87d1acd07091b71de/pkg/agent/flannel/setup.go#L42"}),"\u914d\u7f6e")))),Object(l.b)("li",{parentName:"ul"},"\u79c1\u6709\u4ed3\u5e93 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/registries.yaml")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/server-config/"}),"\u670d\u52a1\u914d\u7f6e"))),Object(l.b)("h3",{id:"getk3sio"},"get.k3s.io"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://get.k3s.io"}),"get.k3s.io")," \u5b89\u88c5\u811a\u672c"),Object(l.b)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5730\u5740\u4e3a STORAGE_URL=",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://storage.googleapis.com/k3s-ci-builds"}),"https://storage.googleapis.com/k3s-ci-builds")),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u5b89\u88c5 openrc \u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/etc/rancher/k3s/k3s.env"),Object(l.b)("li",{parentName:"ul"},"/etc/rancher/k3s/k3s-agent.env"),Object(l.b)("li",{parentName:"ul"},"/etc/init.d/k3s"),Object(l.b)("li",{parentName:"ul"},"/etc/init.d/k3s-agent"))),Object(l.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u6587\u4ef6 /var/log/k3s.log"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"}),"\u5b89\u88c5\u9009\u9879"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u4e3a server \u542f\u52a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"K3S_URL")," \u4e14\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"K3S_TOKEN")," \u6216 ",Object(l.b)("inlineCode",{parentName:"li"},"K3S_CLUSTER_SECRET")),Object(l.b)("li",{parentName:"ul"},"\u6216\u76f4\u63a5\u540e\u9762\u6307\u5b9a agent"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_SKIP_DOWNLOAD")," - \u4e0d\u4e0b\u8f7d"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_SYMLINK")," - \u521b\u5efa kubectl\uff0ccrictl\uff0cctr \u7b26\u53f7\u94fe\u63a5 - \u8bbe\u7f6e\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"skip")," \u4f1a\u8c03\u8fc7\uff0c\u8bbe\u7f6e\u4e3a force \u4f1a\u8986\u76d6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_SKIP_ENABLE")," - \u4e0d\u542f\u7528\u548c\u542f\u52a8 k3s - \u5373\u4e0d\u4f1a add openrc \u7684 service \u4e5f\u4e0d\u4f1a start"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_SKIP_START")," - \u4e0d\u542f\u52a8\u670d\u52a1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_BIN_DIR")," - \u5b89\u88c5\u76ee\u5f55 - \u9ed8\u8ba4 ",Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/bin")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_EXEC")," - \u6307\u5411\u547d\u4ee4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 agent \u9664\u975e\u6709 K3S_URL"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_CHANNEL_URL")," - \u9ed8\u8ba4 ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://update.k3s.io/v1-release/channels"}),"https://update.k3s.io/v1-release/channels")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"INSTALL_K3S_CHANNEL")," - \u9ed8\u8ba4 stable"),Object(l.b)("li",{parentName:"ul"},"\u989d\u5916\u5b89\u88c5",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s-killall.sh"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"service k3s stop")),Object(l.b)("li",{parentName:"ul"},"umount",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/run/k3s")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/kubelet/pods")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/run/netns/cni-")))),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664 ",Object(l.b)("inlineCode",{parentName:"li"},"cni0")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"flannel1.1")),Object(l.b)("li",{parentName:"ul"},"\u5220\u9664 ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/cni/")),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664 iptables \u91cc\u7684 KUBE \u548c CNI \u5185\u5bb9"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s-uninstall.sh")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.env"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"service \u542f\u52a8\u4f1a source \u8fd9\u4e2a\u6587\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/init.d/k3s"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u53c2\u6570\u4f1a\u76f4\u63a5\u5728\u8fd9\u91cc"),Object(l.b)("li",{parentName:"ul"},"\u65e5\u5fd7\u6587\u4ef6\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"/var/log/k3s.log")))))))),Object(l.b)("li",{parentName:"ul"},'INSTALL_K3S_EXEC="--disable=traefik" \u53ef\u7981\u7528\u5b89\u88c5\u67d0\u4e9b\u670d\u52a1')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -sfL https://get.k3s.io | sh -\n\n# \u53ef\u76f4\u63a5\u6307\u5b9a\u53c2\u6570\ncurl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644\n# \u4e5f\u53ef\u4ee5\u73af\u5883\u53d8\u91cf\u6307\u5b9a\ncurl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" sh -s -\n\n# INSTALL_K3S_EXEC \u6307\u5b9a\u547d\u4ee4\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--no-flannel" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --no-flannel" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server" sh -s - --no-flannel\ncurl -sfL https://get.k3s.io | sh -s - server --no-flannel\ncurl -sfL https://get.k3s.io | sh -s - --no-flannel\ncurl -sfL https://get.k3s.io | INSTALL_K3S_SKIP_ENABLE=1 sh -s -\n')),Object(l.b)("h2",{id:"\u624b\u52a8\u5b89\u88c5\u542f\u52a8"},"\u624b\u52a8\u5b89\u88c5\u542f\u52a8"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p /opt/k3s\ncd /opt/k3s\n# https://github.com/rancher/k3s/releases\nver=$(curl -sL https://api.github.com/repos/rancher/k3s/releases/latest | jq .tag_name -r)\n\ncurl -LOC- https://github.com/rancher/k3s/releases/download/$ver/k3s\ncurl -LOC- https://github.com/rancher/k3s/releases/download/$ver/k3s-images.txt\n\nssh k3s -- \"sudo sh -c 'mkdir -p /opt/k3s && chown admin:admin /opt/k3s'\"\nscp k3s k3s:/opt/k3s\nscp k3s-images.txt k3s:/opt/k3s\n\n# ssh k3s -- \ncat /opt/k3s/k3s-images.txt | xargs -n 1 docker pull\n\nk3s server --cluster-init --alsologtostderr --log $PWD/k3s-server.log --docker\n")),Object(l.b)("h2",{id:"containerd"},"containerd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f1a\u751f\u6210\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"/var/lib/rancher/k3s/agent/etc/containerd/config.toml"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u6709 config.toml.tmpl \u5219\u4f1a\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6a21\u677f ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rancher/k3s/blob/master/pkg/agent/templates/templates.go#L16-L72"}),"templates.go#ContainerdConfigTemplate")))),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709 docker \u53ef\u4ee5\u5c11 80m \u5185\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a containerd-shim \u6bd4 containerd-shim-runc-v2 \u5c11\u51e0 m \u5185\u5b58",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"containerd-shim \u662f docker \u7684"),Object(l.b)("li",{parentName:"ul"},"containerd-shim-runc-v2 \u662f containerd \u7684")))),Object(l.b)("h2",{id:"registries"},"registries"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/registries.yaml")),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u68c0\u6d4b\uff0ccontainerd \u4f1a\u4f7f\u7528\u8fd9\u91cc\u7684\u5b9a\u4e49")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'mirrors:\n  # \u955c\u50cf DockerHub\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  # \u6dfb\u52a0\u6388\u6743\u548c\u8bc1\u4e66\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n')),Object(l.b)("h2",{id:"\u7b14\u8bb0"},"\u7b14\u8bb0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"kubeconfig \u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")),Object(l.b)("li",{parentName:"ul"},"K3S_TOKEN \u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/node-token")),Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9\u9700\u8981\u6709\u552f\u4e00\u4e3b\u673a\u540d - ",Object(l.b)("inlineCode",{parentName:"li"},"K3S_NODE_NAME"))),Object(l.b)("h3",{id:"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91"},"\u4ee3\u7406\u8282\u70b9\u6ce8\u518c\u903b\u8f91"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"k3s agent \u521d\u59cb\u5316 Agent \u8282\u70b9\u7684 websocket \u94fe\u63a5\u3002\u94fe\u63a5\u4f1a\u6709\u5ba2\u6237\u7aef\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002"),Object(l.b)("li",{parentName:"ul"},"Agent \u4f1a\u4f7f\u7528\u96c6\u7fa4\u7684\u5bc6\u94a5\u548c\u968f\u673a\u751f\u6210\u7684\u5bc6\u7801\u6ce8\u518c\uff0c\u5bc6\u7801\u5b58\u50a8\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/node/password"),"\uff0c\u670d\u52a1\u7aef\u4f1a\u5b58\u50a8\u8282\u70b9\u7684\u5bc6\u7801\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/cred/node-passwd"),"\u3002"),Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9\u4e0a\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/rancher/node")," \u76ee\u5f55\u88ab\u79fb\u9664\u540e\u5bc6\u7801\u4f1a\u88ab\u4ece\u65b0\u751f\u6210\uff0c\u6216\u7531\u670d\u52a1\u7aef\u79fb\u9664\u3002"),Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u53ef\u4e3a\u8282\u70b9\u9644\u52a0\u552f\u4e00\u8282\u70b9\u6807\u793a\uff0c",Object(l.b)("inlineCode",{parentName:"li"},"--with-node-id"),"\u3002")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"k3s-\u5b89\u88c5\u6e05\u7406"},"K3S \u5b89\u88c5\u6e05\u7406"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# \u5982\u679c\u901a\u8fc7 get.k3s.io \u5b89\u88c5\u4f1a\u6709\u8be5\u811a\u672c\n/usr/local/bin/k3s-killall.sh\n# \u5220\u9664\u7684\u914d\u7f6e iptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore\n# iptable \u53ef\u80fd\u5220\u9664\u4e0d\u5e72\u51c0\uff0c\u53ef\u4ee5\u624b\u52a8\u6e05\u7406\n# iptables-save | grep -v 10.4[2,3] | iptables-restore\n\n# \u5e38\u89c4\u6e05\u7406\ndocker stop $(docker ps -aq)\ndocker system prune --volumes -f\ndocker system prune -f\nsudo umount $(mount -v | grep '/var/lib/kubelet' | awk '{print $3}')\nsudo rm -rf /var/lib/rancher\nsudo rm -rf /var/lib/kubelet\n\nsudo rm -rf /var/log/containers/*\nsudo rm -rf /var/log/pods/*\n\n# \u5982\u679c\u7528\u4e86\u6570\u636e\u5e93\necho drop table if exists kine | psql -d $DATABASE_URL\n# \u5982\u679c\u6709\u65e5\u5fd7\u6587\u4ef6\uff0c\u4f8b\u5982 --log k3s-server.log --alsologtostderr\nrm k3s-server.log -f\n")),Object(l.b)("h2",{id:"docker-vs-containerd"},"docker vs containerd"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 docker"),Object(l.b)("li",{parentName:"ul"},"docker",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u64cd\u4f5c\u8fd0\u7ef4\u719f\u6089"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u72ec\u7acb\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"docker \u547d\u4ee4\u597d\u7528"),Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf\u3001\u7f13\u5b58\u4f1a\u66f4\u52a0\u53cb\u597d - \u867d\u7136 containerd \u6709 docker shim"))),Object(l.b)("li",{parentName:"ul"},"containerd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"docker \u5e95\u5c42\u4e5f\u662f\u4f7f\u7528\u7684 containerd"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u6b64\u4f7f\u7528 docker \u4f1a\u989d\u5916\u6d88\u8017\u4e00\u4e9b\u5185\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u4e13\u7528\u7684 cli - crictl \u4e3b\u8981\u7528\u4e8e\u8c03\u8bd5")))))}p.isMDXComponent=!0},625:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=p(a),u=n,O=o["".concat(i,".").concat(u)]||o[u]||m[u]||l;return a?r.a.createElement(O,b(b({ref:t},s),{},{components:a})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);