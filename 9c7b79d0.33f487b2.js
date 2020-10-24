(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{392:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),s=(r(0),r(625)),b={id:"k8s-dashboard",title:"Kubernates \u9762\u677f"},o={unversionedId:"devops/kubernetes/k8s-dashboard",id:"devops/kubernetes/k8s-dashboard",isDocsHomePage:!1,title:"Kubernates \u9762\u677f",description:"Kubernates \u9762\u677f",source:"@site/notes/devops/kubernetes/k8s-dashboard.md",slug:"/devops/kubernetes/k8s-dashboard",permalink:"/notes/devops/kubernetes/k8s-dashboard",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/k8s-dashboard.md",version:"current",sidebar:"docs",previous:{title:"Kubernates",permalink:"/notes/devops/kubernetes/kubernetes"},next:{title:"K3S",permalink:"/notes/devops/kubernetes/distro/k3s"}},c=[{value:"Tips",id:"tips",children:[]},{value:"TLS",id:"tls",children:[]}],i={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"kubernates-\u9762\u677f"},"Kubernates \u9762\u677f"),Object(s.b)("h2",{id:"tips"},"Tips"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubernetes/dashboard"}),"kubernetes/dashboard"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u975e\u5e38\u7b80\u6d01\u7684 UI \u9762\u677f"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"}),"Web UI (Dashboard)")),Object(s.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://kube-web-view.readthedocs.io/en/latest/alternatives.html"}),"\u5176\u4ed6\u7684 UI"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/vmware-tanzu/octant"}),"https://github.com/vmware-tanzu/octant"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Highly extensible platform for developers to better understand the complexity of Kubernetes clusters. "))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/weaveworks/scope"}),"https://github.com/weaveworks/scope"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Monitoring, visualisation & management for Docker & Kubernetes"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/indeedeng/k8dash"}),"https://github.com/indeedeng/k8dash")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/hjacobs/kube-ops-view"}),"https://github.com/hjacobs/kube-ops-view"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Kubernetes Operational View - read-only system dashboard for multiple K8s clusters"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/hjacobs/kube-resource-report/"}),"https://github.com/hjacobs/kube-resource-report/"))))))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# HELM \u5b89\u88c5\u53c2\u8003 \n# ==========\n# https://hub.helm.sh/charts/k8s-dashboard/kubernetes-dashboard\nhelm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/\n# \u9ed8\u8ba4\u4e0d\u4f1a\u5b89\u88c5 metric scraper\nhelm install kubernetes-dashboard/kubernetes-dashboard --name kubernetes-dashboard --namespace kubernetes-dashboard\n\n# \u624b\u52a8\u5b89\u88c5\n# ==========\n# \u5b89\u88c5\u6700\u65b0\u53d1\u5e03\u7248\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/$(curl -Ls https://api.github.com/repos/kubernetes/dashboard/releases/latest | jq -r .tag_name)/aio/deploy/recommended.yaml\n\n# \u521b\u5efa\u7ba1\u7406\u5458\u7ea7\u522b\u8d26\u53f7\ncat <<YAML | kubectl apply -f -\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: admin-user\n  namespace: kubernetes-dashboard\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: admin-user\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: admin-user\n  namespace: kubernetes-dashboard\nYAML\n\n# \u83b7\u53d6 Token\nkubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token\n# \u5982\u679c\u662f macos \u5219\u53ef\u4ee5\u5b89\u88c5 yq \u7136\u540e\u76f4\u63a5\u590d\u5236\n# kubectl -n kubernetes-dashboard describe secret admin-user-token |grep ^token | yq r - 'token' | pbcopy\n\n# \u5f00\u542f\u4ee3\u7406\nkubectl proxy\n# \u8bbf\u95ee\n# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:https/proxy/\n")),Object(s.b)("h2",{id:"tls"},"TLS"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubernetes/dashboard/blob/master/docs/user/certificate-management.md"}),"Certificate management"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"'--tls-cert-file=/tls.crt'"),Object(s.b)("li",{parentName:"ul"},"'--tls-key-file=/tls.key'"),Object(s.b)("li",{parentName:"ul"},"'--auto-generate-certificates'"),Object(s.b)("li",{parentName:"ul"},"'--namespace=kubernetes-dashboard'")))}u.isMDXComponent=!0},625:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(b,".").concat(d)]||l[d]||p[d]||s;return r?a.a.createElement(m,o(o({ref:t},i),{},{components:r})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,b=new Array(s);b[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<s;i++)b[i]=r[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);