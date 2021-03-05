(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{540:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(8),r=(a(0),a(787)),i={id:"istio",title:"Istio \u670d\u52a1\u7f51\u683c"},b={unversionedId:"devops/kubernetes/platform/istio",id:"devops/kubernetes/platform/istio",isDocsHomePage:!1,title:"Istio \u670d\u52a1\u7f51\u683c",description:"Istio",source:"@site/notes/devops/kubernetes/platform/istio.md",slug:"/devops/kubernetes/platform/istio",permalink:"/notes/devops/kubernetes/platform/istio",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/platform/istio.md",version:"current",sidebar:"docs",previous:{title:"K8S \u5e73\u53f0",permalink:"/notes/devops/kubernetes/platform/platform"},next:{title:"Knative",permalink:"/notes/devops/kubernetes/platform/knative"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u5e38\u7528\u914d\u7f6e\u9879",id:"\u5e38\u7528\u914d\u7f6e\u9879",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u81ea\u5b9a\u4e49\u5b89\u88c5",id:"\u81ea\u5b9a\u4e49\u5b89\u88c5",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"istio"},"Istio"),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"connect, manage, and secure microservices by Google, IBM, and Lyft"),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ingressgateway \u9ed8\u8ba4\u9700\u8981 LoadBalaner - \u56e0\u6b64\u9700\u8981\u96c6\u7fa4\u80fd\u83b7\u53d6\u5230 IP - \u5728\u4e0d\u66f4\u6539\u914d\u7f6e\u7684\u524d\u63d0\u4e0b\u53ef\u4ee5\u4f7f\u7528 ",Object(r.b)("a",{parentName:"li",href:"../network/metallb"},"metallb")))),Object(r.b)("li",{parentName:"ul"},"\u67b6\u6784",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u5c42",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u63a7\u5236\u670d\u52a1\u4e4b\u95f4\u7684\u7f51\u7edc\u901a\u4fe1"))),Object(r.b)("li",{parentName:"ul"},"\u63a7\u5236\u5c42",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7ba1\u7406\u914d\u7f6e\u8def\u7531"),Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7b56\u7565\u548c\u91c7\u96c6"))))),Object(r.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Envoy \u4ee3\u7406/Sidecar",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u52a8\u6001\u670d\u52a1\u53d1\u73b0"),Object(r.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),Object(r.b)("li",{parentName:"ul"},"TLS \u7ec8\u6b62"),Object(r.b)("li",{parentName:"ul"},"HTTP/2 gRPC \u4ee3\u7406"),Object(r.b)("li",{parentName:"ul"},"\u7194\u65ad"),Object(r.b)("li",{parentName:"ul"},"\u5065\u5eb7\u68c0\u67e5"),Object(r.b)("li",{parentName:"ul"},"\u9636\u6bb5\u53d1\u5e03 - \u767e\u5206\u6bd4\u6d41\u91cf\u5207\u5206"),Object(r.b)("li",{parentName:"ul"},"\u9519\u8bef\u6ce8\u5165"),Object(r.b)("li",{parentName:"ul"},"\u6307\u6807\u76d1\u63a7"))),Object(r.b)("li",{parentName:"ul"},"Mixer - \u7b56\u7565\u548c\u8fdc\u7a0b\u63a7\u5236"),Object(r.b)("li",{parentName:"ul"},"Pilot - \u914d\u5408 Envoy \u5de5\u4f5c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0"),Object(r.b)("li",{parentName:"ul"},"\u6d41\u91cf\u7ba1\u7406 - A/B \u6d4b\u8bd5\u3001\u7070\u5ea6\u53d1\u5e03"),Object(r.b)("li",{parentName:"ul"},"\u5f39\u6027 - \u8d85\u65f6\u63a7\u5236\u3001\u91cd\u8bd5\u3001\u7194\u65ad"))),Object(r.b)("li",{parentName:"ul"},"Citadel",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u670d\u52a1\u5230\u670d\u52a1\u3001\u670d\u52a1\u5230\u7528\u6237 \u9274\u6743"),Object(r.b)("li",{parentName:"ul"},"\u53ef\u5c06\u7f51\u683c\u670d\u52a1\u5185\u7684\u672a\u52a0\u5bc6\u901a\u4fe1\u5347\u7ea7\u4e3a\u52a0\u5bc6\u901a\u4fe1"),Object(r.b)("li",{parentName:"ul"},"\u63a7\u5236\u8c01\u80fd\u8bbf\u95ee\u4ec0\u4e48 - \u800c\u4e0d\u662f\u7b80\u5355\u7684\u4f9d\u8d56\u5e95\u5c42\u7684 IP \u9650\u5236"))),Object(r.b)("li",{parentName:"ul"},"Galley",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6821\u9a8c\u3001\u8bfb\u53d6\u3001\u5904\u7406\u5206\u53d1"),Object(r.b)("li",{parentName:"ul"},"\u5c06\u5e95\u5c42\u7cfb\u7edf\u7684\u914d\u7f6e(\u4f8b\u5982 k8s)\u5e94\u7528\u5230 istio \u4f53\u7cfb\u4e2d"))))),Object(r.b)("li",{parentName:"ul"},"\u8bbe\u8ba1\u76ee\u6807",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6700\u5927\u7684\u900f\u660e\u6027"),Object(r.b)("li",{parentName:"ul"},"\u6269\u5c55\u6027"),Object(r.b)("li",{parentName:"ul"},"\u4fbf\u643a\u6027 - \u964d\u4f4e\u5bf9\u5e95\u5c42\u7684\u611f\u77e5\u3001\u8fd0\u884c\u5728\u4efb\u4f55\u4e91\u4e0a"),Object(r.b)("li",{parentName:"ul"},"\u7edf\u4e00\u7684\u7b56\u7565\u63a7\u5236"))),Object(r.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"base"),Object(r.b)("li",{parentName:"ul"},"pilot"),Object(r.b)("li",{parentName:"ul"},"proxy"),Object(r.b)("li",{parentName:"ul"},"telemetry"),Object(r.b)("li",{parentName:"ul"},"policy"),Object(r.b)("li",{parentName:"ul"},"ingressGateways"),Object(r.b)("li",{parentName:"ul"},"egressGateways"),Object(r.b)("li",{parentName:"ul"},"cni"),Object(r.b)("li",{parentName:"ul"},"istiod",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0"),Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7ba1\u7406"),Object(r.b)("li",{parentName:"ul"},"\u8bc1\u4e66\u7ba1\u7406"),Object(r.b)("li",{parentName:"ul"},"pilot citadel galley"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://istio.io/latest/docs/ops/deployment/architecture/"},"\u67b6\u6784")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://istio.io/latest/docs/ops/deployment/performance-and-scalability/"},"Performance and Scalability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"envoy - 0.5 vCPU, 50 MB / 1000 requests / second",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"envoy proxy +2.76 ms to the 90th percentile latency."))),Object(r.b)("li",{parentName:"ul"},"istio-telemetry - 0.6 vCPU / 1000 mesh-wide requests / second for deployments that use Mixer."),Object(r.b)("li",{parentName:"ul"},"pilot - 1 vCPU, 1.5 GB"),Object(r.b)("li",{parentName:"ul"},"istiod - 1 vCPU and 1.5 GB of memory support 1000 services, 2000 sidecars"))),Object(r.b)("li",{parentName:"ul"},"\u8d44\u6e90",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u81f3\u5c11\u51c6\u5907 4 CPU 8G"))),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://engineering.hellofresh.com/ff4c26844bfb"},"Everything We Learned Running Istio In Production \u2014 Part 2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.giantswarm.io/guides/deploying-istio/"},"How to deploy Istio in your Cluster"))))),Object(r.b)("h2",{id:"\u5e38\u7528\u914d\u7f6e\u9879"},"\u5e38\u7528\u914d\u7f6e\u9879"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),Object(r.b)("th",{parentName:"tr",align:null},"\u503c"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"values.global.mtls.enabled"),Object(r.b)("td",{parentName:"tr",align:null},"mTLS - \u4e0d\u5efa\u8bae\u5f00\u542f")))),Object(r.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u914d\u7f6e\u5217\u8868\n# demo empty minimal preview remote default\n# https://istio.io/latest/docs/setup/additional-setup/config-profiles/\nistioctl profile list\n\n# \u67e5\u770b\u914d\u7f6e\u7684\u5185\u5bb9\n# \u6240\u6709\u7684\u9009\u9879\u53ef\u4ee5\u5728 apply \u7684\u65f6\u5019\u4f7f\u7528 set \u4fee\u6539\nistioctl profile dump demo\n# \u67e5\u770b\u67d0\u9879\u914d\u7f6e\nistioctl profile dump --config-path trafficManagement.components.pilot demo\n\n# \u5b89\u88c5 demo \u914d\u7f6e\n# \u53ef\u9009 default    demo    minimal sds remote\n# https://istio.io/docs/setup/additional-setup/config-profiles/\nistioctl manifest apply --set profile=demo\n\n# \u67e5\u770b\u5b89\u88c5\u7684\u670d\u52a1\nkubectl get svc -n istio-system\n\n# \u4e3a\u7a7a\u95f4\u5f00\u542f\u6ce8\u5165\nkubectl label namespace default istio-injection=enabled\n# \u6216\u8005\u5728\u521b\u5efa\u5e94\u7528\u7684\u65f6\u5019\u914d\u7f6e\u6ce8\u5165\nkubectl create -n <namespace> -f <app-spec>.yaml\n\n# \u624b\u52a8\u6ce8\u5165\nistioctl kube-inject -f <app-spec>.yaml | kubectl apply -f -\n\n# \u5378\u8f7d\nistioctl manifest generate --set profile=demo | kubectl delete -f -\n# \u5220\u9664\u7a7a\u95f4\nkubectl delete namespace istio-system\n")),Object(r.b)("h2",{id:"\u81ea\u5b9a\u4e49\u5b89\u88c5"},"\u81ea\u5b9a\u4e49\u5b89\u88c5"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u53ef\u4ee5\u751f\u6210 Manifest \u7136\u540e kubectk \u5b89\u88c5 - \u4e5f\u53ef\u4ee5\u770b\u5230\u505a\u4e86\u4ec0\u4e48\nistioctl manifest generate\n\nistioctl manifest generate > istio-manifest.yaml\n# \u53ef\u4ee5\u9a8c\u8bc1\u914d\u7f6e\nistioctl verify-install -f istio-manifest.yaml\n")))}p.isMDXComponent=!0},787:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,O=u["".concat(i,".").concat(s)]||u[s]||m[s]||r;return a?l.a.createElement(O,b(b({ref:t},o),{},{components:a})):l.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<r;o++)i[o]=a[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);