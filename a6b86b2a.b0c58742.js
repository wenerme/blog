(window.webpackJsonp=window.webpackJsonp||[]).push([[679],{1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=l.a.createContext({}),s=function(e){var n=l.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return l.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},p=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=s(t),p=a,d=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return t?l.a.createElement(d,i(i({ref:n},c),{},{components:t})):l.a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},752:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(3),l=t(8),r=(t(0),t(1114)),o={id:"longhorn",title:"Longhorn"},i={unversionedId:"devops/kubernetes/storage/longhorn",id:"devops/kubernetes/storage/longhorn",isDocsHomePage:!1,title:"Longhorn",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/kubernetes/storage/longhorn.md",slug:"/devops/kubernetes/storage/longhorn",permalink:"/notes/devops/kubernetes/storage/longhorn",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/longhorn.md",version:"current",sidebar:"docs",previous:{title:"Longhorn \u7248\u672c",permalink:"/notes/devops/kubernetes/storage/longhorn-version"},next:{title:"OpenEBS",permalink:"/notes/devops/kubernetes/storage/openebs"}},b=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"volume \u914d\u7f6e",id:"volume-\u914d\u7f6e",children:[]},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"Error response from daemon: path /var/lib/longhorn is mounted on / but it is not a shared mount",id:"error-response-from-daemon-path-varliblonghorn-is-mounted-on--but-it-is-not-a-shared-mount",children:[]},{value:"failed to start expansion: controller data doesn&#39;t support on-line expansion, frontend: tgt-blockdev",id:"failed-to-start-expansion-controller-data-doesnt-support-on-line-expansion-frontend-tgt-blockdev",children:[]},{value:"The volume <code>volume</code> share should be available before the mount",id:"the-volume-volume-share-should-be-available-before-the-mount",children:[]},{value:"Volume <code>volume</code> hasn&#39;t been attached yet",id:"volume-volume-hasnt-been-attached-yet",children:[]},{value:"snapshot vs backup",id:"snapshot-vs-backup",children:[]},{value:"controller doesn&#39;t support on-line expansion, frontend: tgt-blockdev",id:"controller-doesnt-support-on-line-expansion-frontend-tgt-blockdev",children:[]},{value:"\u76d1\u63a7",id:"\u76d1\u63a7",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"CRD",id:"crd",children:[]}],c={toc:b};function s(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Kubernetes \u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u670d\u52a1"),Object(r.b)("li",{parentName:"ul"},"\u589e\u91cf\u5feb\u7167"),Object(r.b)("li",{parentName:"ul"},"\u4e8c\u7ea7\u5907\u4efd - NFS\u3001S3"),Object(r.b)("li",{parentName:"ul"},"\u5feb\u7167\u3001\u5907\u4efd\u6062\u590d"),Object(r.b)("li",{parentName:"ul"},"\u5e73\u6ed1\u5347\u7ea7"),Object(r.b)("li",{parentName:"ul"},"\u5185\u5efa UI"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn"},"longhorn/longhorn"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u4f01\u4e1a\u7ea7\u5206\u5e03\u5f0f\u5757\u5b58\u50a8"))),Object(r.b)("li",{parentName:"ul"},"\u8981\u6c42",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.0.0/deploy/install/#installation-requirements"},"\u5b89\u88c5\u8981\u6c42"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"docker 1.13+"),Object(r.b)("li",{parentName:"ul"},"k8s 1.14+"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 3 \u526f\u672c - \u56e0\u6b64\u9700\u8981 3 \u8282\u70b9\uff0cnode level soft anti-affinity is disabled."),Object(r.b)("li",{parentName:"ul"},"open-iscsi \u5df2\u5b89\u88c5\uff0c\u6240\u6709\u8282\u70b9\u542f\u52a8 iscsid daemon"),Object(r.b)("li",{parentName:"ul"},"\u652f\u6301 file extents \u7279\u6027\u7684\u6587\u4ef6\u7cfb\u7edf ext4 XFS"),Object(r.b)("li",{parentName:"ul"},"curl, findmnt, grep, awk, blkid, lsblk"),Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8 ",Object(r.b)("a",{parentName:"li",href:"https://kubernetes-csi.github.io/docs/deploying.html#enabling-mount-propagation"},"Mount propagation")),Object(r.b)("li",{parentName:"ul"},"k3s \u9700\u8981",Object(r.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.0.0/advanced-resources/os-distro-specific/csi-on-k3s/"},"\u989d\u5916\u914d\u7f6e")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.0.0/best-practices/#minimum-recommended-hardware"},"\u6700\u4f4e\u786c\u4ef6\u8981\u6c42"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"3 \u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"4 vCPUs \u6bcf\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"4 GiB \u6bcf\u8282\u70b9"),Object(r.b)("li",{parentName:"ul"},"SSD/NVME \u4e0d\u63a8\u8350\u673a\u68b0\u786c\u76d8 - IOPS \u4f4e"))))),Object(r.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"~\u4e0d\u652f\u6301 ReadWriteMany ",Object(r.b)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn/issues/73#issuecomment-392869189"},"#73"),"~",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6700\u65b0\u901a\u8fc7\u5185\u7f6e NFS \u652f\u6301 RWX"))),Object(r.b)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406 UI \u4e0d\u884c ",Object(r.b)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn/issues/1082"},"#1082")),Object(r.b)("li",{parentName:"ul"},"\u6269\u5bb9\u53ea\u652f\u6301\u79bb\u7ebf"),Object(r.b)("li",{parentName:"ul"},"\u5fc5\u987b\u5b89\u88c5\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-system")," \u7a7a\u95f4"))),Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u5bf9\u5e94\u5173\u7cfb",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"PVC -> PV -> Volume -> Replica -> Node")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"v1.1.0 \u5355\u673a\u90e8\u7f72\u6bcf\u6b21\u91cd\u542f\u540e\u9700\u8981 \u6253\u635e/salvage \u4e4b\u524d\u7684 replica",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5f00\u542f\u4e86 Automatic salvage \u53d1\u73b0\u8fd8\u662f\u9700\u8981\u624b\u52a8"),Object(r.b)("li",{parentName:"ul"},"v1.1.1 \u4fee\u590d ",Object(r.b)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn/issues/2309"},"#2309"))))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl -sSfLO https://raw.githubusercontent.com/longhorn/longhorn/master/scripts/environment_check.sh\n\napk add jq curl findmnt grep awk coreutils util-linux\n# \u4f1a\u4f7f\u7528\u73b0\u5728\u7684\u73af\u5883\u8fdb\u884c\u68c0\u6d4b - kubectl apply\nbash environment_check.sh\n")),Object(r.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/references/settings/"},"https://longhorn.io/docs/1.1.0/references/settings/")),Object(r.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5728 UI \u4e0a\u4fee\u6539\u540e\u5728\u521d\u6b21\u90e8\u7f72\u4e4b\u524d\u4fee\u6539")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# \u914d\u7f6e\u8bf4\u660e https://longhorn.io/docs/1.1.0/references/settings\n\n# \u5907\u4efd\n# ============\n# \u5907\u4efd\u4f4d\u7f6e - \u652f\u6301 nfs \u548c s3\n# \u4f8b\u5982 s3://backupbucket@us-east-1/backupstore\nbackup-target:\n# \u5bc6\u94a5\u4fe1\u606f\nbackup-target-credential-secret:\n# \u62c9\u4e0a\u6b21\u5907\u4efd\u4fe1\u606f\u7684\u95f4\u9694 - \u7528\u4e8e\u6062\u590d\nbackupstore-poll-interval: 300\n\n# \u8c03\u5ea6\n# ============\n# \u8bbe\u7f6e\u4e3a true \u5219\u5141\u8bb8\u5355\u4e2a\u8282\u70b9\u90e8\u7f72\u591a\u4e2a\u526f\u672c\nreplica-node-level-soft-anti-affinity: false\nreplica-soft-anti-affinity:\n# \u5b58\u50a8\u5206\u914d\u5141\u8bb8\u8d85\u8fc7\u7684\u6bd4\u4f8b\nstorage-over-provisioning-percentage: 200\n# \u78c1\u76d8\u6700\u5c0f\u53ef\u7528\u6bd4\u4f8b\nstorage-minimal-available-percentage: 25\n# \u4e0d\u4f1a\u8c03\u5ea6\u5230 Kubernetes cordoned nodes\ndisable-scheduling-on-cordoned-node: true\n# \u5141\u8bb8\u526f\u672c\u5728\u76f8\u540c\u533a\nreplica-zone-soft-anti-affinity: true\n\n# \u5371\u9669\u533a\u57df\n# ============\n# \u4e3a\u5f15\u64ce\u9884\u7559 CPU\n# 0.25 * 8 = 2 vCPUs - \u6bcf\u4e2a\u8282\u70b9\u81f3\u5c11 2 vCPU\nguaranteed-engine-cpu: 0.25\n\ncreate-default-disk-labeled-nodes:\ndefault-data-path:\n\nupgrade-checker:\ndefault-replica-count:\n\ndefault-longhorn-static-storage-class:\n\ntaint-toleration:\nregistry-secret:\nauto-salvage:\n\nvolume-attachment-recovery-policy:\nmkfs-ext4-parameters:\n")),Object(r.b)("h2",{id:"volume-\u914d\u7f6e"},"volume \u914d\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# Longhorn \u6e05\u7406 ERROR Replica \u65f6\u95f4\n# \u5355\u4f4d\u5206\u949f - \u9ed8\u8ba4 2880 / 48 \u5c0f\u65f6\nstaleReplicaTimeout: 2880\n")),Object(r.b)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"lhe Engine - Volume \u5bf9\u5e94\u7684 Engine"),Object(r.b)("li",{parentName:"ul"},"lhr Replica - \u5377\u526f\u672c"),Object(r.b)("li",{parentName:"ul"},"lhs Setting - \u542f\u52a8\u540e\u6bcf\u4e2a\u914d\u7f6e\u9879\u4f1a\u6620\u5c04\u4e3a\u4e00\u4e2a Setting \u8d44\u6e90"),Object(r.b)("li",{parentName:"ul"},"lhv Volume - \u5b9a\u4e49\u5377"),Object(r.b)("li",{parentName:"ul"},"lhei EngineImage - \u5f15\u64ce\u955c\u50cf",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"image: 'longhornio/longhorn-engine:v1.1.0'")))),Object(r.b)("li",{parentName:"ul"},"lhn Node - \u8282\u70b9\u4fe1\u606f"),Object(r.b)("li",{parentName:"ul"},"lhim - Instance Manager - \u5f15\u64ce\u5b9e\u4f8b\u548c\u8d44\u6e90\u5b9e\u4f8b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5f15\u64ce\u5b9e\u4f8b - \u6bcf\u4e2a\u8282\u70b9\u8fd0\u884c"),Object(r.b)("li",{parentName:"ul"},"\u8d44\u6e90\u5b9e\u4f8b - \u6bcf\u4e2a Volume \u5728\u8282\u70b9\u4e0a\u7684\u6bcf\u4e2a Replica"))),Object(r.b)("li",{parentName:"ul"},"ShareManager - \u901a\u8fc7 NFS \u652f\u6301 RWM")),Object(r.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.0.0/deploy/install/install-with-kubectl/"},"kubectl \u5b89\u88c5")),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-system")," \u547d\u540d\u7a7a\u95f4"),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-service-account")," \u670d\u52a1\u8d26\u53f7"),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u96c6\u7fa4\u89d2\u8272 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-role"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6388\u6743\u7ed9 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-service-account")))),Object(r.b)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 - longhorn.io/v1beta1"),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u914d\u7f6e ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-default-setting")),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa DaemonSet - ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-manager"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-manager"),Object(r.b)("li",{parentName:"ul"},"\u542f\u52a8\u53c2\u6570",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"longhorn-manager"),Object(r.b)("li",{parentName:"ul"},"-d"),Object(r.b)("li",{parentName:"ul"},"daemon"),Object(r.b)("li",{parentName:"ul"},"--engine-image"),Object(r.b)("li",{parentName:"ul"},"longhornio/longhorn-engine:v1.0.0"),Object(r.b)("li",{parentName:"ul"},"--instance-manager-image"),Object(r.b)("li",{parentName:"ul"},"longhornio/longhorn-instance-manager:v1_20200514"),Object(r.b)("li",{parentName:"ul"},"--manager-image"),Object(r.b)("li",{parentName:"ul"},"longhornio/longhorn-manager:v1.0.0"),Object(r.b)("li",{parentName:"ul"},"--service-account"),Object(r.b)("li",{parentName:"ul"},"longhorn-service-account"))),Object(r.b)("li",{parentName:"ul"},"\u7aef\u53e3 9500 - manager"),Object(r.b)("li",{parentName:"ul"},"\u6302\u8f7d\u5377",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/host/dev")," - dev - ",Object(r.b)("inlineCode",{parentName:"li"},"/dev")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/host/proc")," - proc - ",Object(r.b)("inlineCode",{parentName:"li"},"/proc")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/var/run"),"- varrun - ",Object(r.b)("inlineCode",{parentName:"li"},"/var/run")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/var/lib/longhorn/")," - longhorn - ",Object(r.b)("inlineCode",{parentName:"li"},"/var/lib/longhorn/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/var/lib/longhorn-setting/")," - longhorn-default-setting"))),Object(r.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"DEFAULT_SETTING_PATH=/var/lib/longhorn-setting/default-setting.yaml"))))),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-backend")," \u6307\u5411 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-manager"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7aef\u53e3 9500"))),Object(r.b)("li",{parentName:"ul"},"\u90e8\u7f72 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-ui"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-ui"),Object(r.b)("li",{parentName:"ul"},"\u7aef\u53e3 8000"),Object(r.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf LONGHORN_MANAGER_IP=http://longhorn-backend:9500"))),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa\u670d\u52a1 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-frontend")," \u6307\u5411 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-ui"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7aef\u53e3 80"))),Object(r.b)("li",{parentName:"ul"},"\u90e8\u7f72 ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn-driver-deployer"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u521d\u59cb\u955c\u50cf longhornio/longhorn-manager",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u7b49\u5f85 http://longhorn-backend:9500/v1 \u542f\u52a8"))),Object(r.b)("li",{parentName:"ul"},"\u955c\u50cf longhornio/longhorn-manager",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"longhorn-manager"),Object(r.b)("li",{parentName:"ul"},"-d"),Object(r.b)("li",{parentName:"ul"},"deploy-driver"),Object(r.b)("li",{parentName:"ul"},"--manager-image"),Object(r.b)("li",{parentName:"ul"},"longhornio/longhorn-manager:v1.0.0"),Object(r.b)("li",{parentName:"ul"},"--manager-url"),Object(r.b)("li",{parentName:"ul"},"http://longhorn-backend:9500/v1"))))),Object(r.b)("li",{parentName:"ul"},"\u521b\u5efa StorageClass ",Object(r.b)("inlineCode",{parentName:"li"},"longhorn"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u8fd9\u4e00\u6b65\u53c2\u6570\u53ef\u9009\u62e9\u90a3\u4e9b\u8282\u70b9\u5b58\u50a8")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u51c6\u5907\nsudo apk add open-iscsi\nsudo service iscsid start\nsudo apk add curl findmnt grep gawk blkid lsblk util-linux\n\n# HELM \u5b89\u88c5\n# ==========\ngit clone https://github.com/longhorn/longhorn && cd longhorn\nhelm install longhorn ./longhorn/chart/ --namespace longhorn-system --create-namespace\n\n# \u624b\u52a8\u5b89\u88c5\n# ==========\n# \u5b89\u88c5\nkubectl apply -f https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n\n# \u6216\u8005\u4e0b\u8f7d\u4e0b\u6765\u5b89\u88c5\ncurl -LOC- https://raw.githubusercontent.com/longhorn/longhorn/master/deploy/longhorn.yaml\n# \u53ef\u4ee5\u4fee\u6539\u90e8\u5206\u53c2\u6570 - \u4f8b\u5982\u5b58\u50a8\u8282\u70b9\u9009\u62e9\u3001\u662f\u5426\u8fd0\u884c\u5355\u8282\u70b9\u6267\u884c\nkubectl applu -f longhorn.yaml\n\n# \u67e5\u770b\u5b89\u88c5\u72b6\u6001\nkubectl get pods \\\n--namespace longhorn-system \\\n--watch\n\n# \u5b89\u88c5\u5185\u5bb9\nkubectl -n longhorn-system get pod\n")),Object(r.b)("h1",{id:"faq"},"FAQ"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/yasker/longhorn/wiki/Troubleshooting-the-data-corruption-%5BDRAFT%5D"},"Troubleshooting the data corruption"))),Object(r.b)("h2",{id:"error-response-from-daemon-path-varliblonghorn-is-mounted-on--but-it-is-not-a-shared-mount"},"Error response from daemon: path /var/lib/longhorn is mounted on / but it is not a shared mount"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fail to start longhorn with k3d ",Object(r.b)("a",{parentName:"li",href:"https://github.com/rancher/k3d/issues/206"},"#206"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# \u8fd9\u4e2a\u4f4d\u7f6e\u662f\u53cc\u5411\u6302\u8f7d\nname: longhorn\nmountPath: /var/lib/longhorn/\nmountPropagation: Bidirectional\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5c06 root \u4fee\u6539\u4e3a share\nsudo mount --make-rshared /\n# sudo mount --make-rshared /var/lib/longhorn/\n")),Object(r.b)("h2",{id:"failed-to-start-expansion-controller-data-doesnt-support-on-line-expansion-frontend-tgt-blockdev"},"failed to start expansion: controller data doesn't support on-line expansion, frontend: tgt-blockdev"),Object(r.b)("p",null,"\u53ef\u80fd\u662f\u7531\u4e8e\u6302\u8f7d\u7684\u65f6\u5019\u8fdb\u884c\u6269\u5bb9\u5bfc\u81f4\uff0c\u5982\u679c\u4e00\u76f4\u4e0d\u6062\u590d\uff0c\u5c1d\u8bd5 detache"),Object(r.b)("h2",{id:"the-volume-volume-share-should-be-available-before-the-mount"},"The volume ",Object(r.b)("inlineCode",{parentName:"h2"},"volume")," share should be available before the mount"),Object(r.b)("h2",{id:"volume-volume-hasnt-been-attached-yet"},"Volume ",Object(r.b)("inlineCode",{parentName:"h2"},"volume")," hasn't been attached yet"),Object(r.b)("h2",{id:"snapshot-vs-backup"},"snapshot vs backup"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"snapshot",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u672c\u5730 Revision"),Object(r.b)("li",{parentName:"ul"},"Delta \u4fee\u6539"),Object(r.b)("li",{parentName:"ul"},"\u8ddf\u968f Volume - \u5220\u9664 Volume \u5219\u5220\u9664\u4e86 Snapshot"))),Object(r.b)("li",{parentName:"ul"},"backup",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u6570\u636e\u5b58\u50a8\u5728\u5916\u90e8 - S3/NFS"),Object(r.b)("li",{parentName:"ul"},"\u4e0d\u53d7\u96c6\u7fa4\u72b6\u6001\u5f71\u54cd"),Object(r.b)("li",{parentName:"ul"},"\u5907\u4efd\u57fa\u4e8e\u5feb\u7167 - backup \u4e4b\u524d\u4f1a\u521b\u5efa snapshot")))),Object(r.b)("h2",{id:"controller-doesnt-support-on-line-expansion-frontend-tgt-blockdev"},"controller doesn't support on-line expansion, frontend: tgt-blockdev"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn/issues/1674"},"https://github.com/longhorn/longhorn/issues/1674"))),Object(r.b)("h2",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://grafana.com/grafana/dashboards/13032"},"https://grafana.com/grafana/dashboards/13032"))),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.0.0/references/examples/"},"https://longhorn.io/docs/1.0.0/references/examples/"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: longhorn-block-vol\nspec:\n  accessModes:\n    - ReadWriteOnce\n  volumeMode: Block\n  storageClassName: longhorn\n  resources:\n    requests:\n      storage: 2Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: block-volume-test\n  namespace: default\nspec:\n  containers:\n    - name: block-volume-test\n      image: nginx:stable-alpine\n      imagePullPolicy: IfNotPresent\n      volumeDevices:\n        - devicePath: /dev/longhorn/testblk\n          name: block-vol\n      ports:\n        - containerPort: 80\n  volumes:\n    - name: block-vol\n      persistentVolumeClaim:\n        claimName: longhorn-block-vol\n")),Object(r.b)("h2",{id:"crd"},"CRD"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# PATCH \u4fee\u6539 Tag\napiVersion: longhorn.io/v1beta1\nkind: Node\nmetadata:\n  name: my-node-1\n  namespace: longhorn-system\nspec:\n  tags:\n    - node.can.longhorn\n---\n# \u5b9a\u4e49\u5377\napiVersion: longhorn.io/v1beta1\nkind: Volume\nmetadata:\n  name: test\n  namespace: longhorn-system\n  labels:\n    longhornvolume: test\nspec:\n  Standby: false\n  baseImage: ''\n  fromBackup: ''\n  disableFrontend: false\n  diskSelector: []\n  # \u6700\u597d\u6307\u5b9a - \u5426\u5219\u4f1a\u51fa\u73b0\u627e\u4e0d\u5230 engine\n  engineImage: 'longhornio/longhorn-engine:v1.0.0'\n  frontend: blockdev\n  nodeSelector:\n    - node.can.longhorn\n  numberOfReplicas: 3\n  recurringJobs: null\n  size: '20000000'\n  staleReplicaTimeout: 20\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"kind: Volume\napiVersion: longhorn.io/v1beta1\nmetadata:\n  name: test\n  namespace: longhorn-system\n  labels:\n    longhornvolume: test\nspec:\n  Standby: false\n  accessMode: rwx\n  baseImage: ''\n  dataLocality: best-effort\n  disableFrontend: false\n  diskSelector: []\n  engineImage: 'longhornio/longhorn-engine:v1.1.0'\n  fromBackup: ''\n  frontend: blockdev\n  lastAttachedBy: ''\n  nodeID: ''\n  nodeSelector: []\n  numberOfReplicas: 1\n  recurringJobs:\n    - cron: 0 0/6 * * ?\n      labels: null\n      name: c-75f2xa\n      retain: 5\n      task: backup\n    - cron: 0 1 * * *\n      labels: null\n      name: c-yywuyn\n      retain: 3\n      task: snapshot\n  revisionCounterDisabled: false\n  # 20G\n  size: '21474836480'\n  staleReplicaTimeout: 20\n# PV\n---\nkind: PersistentVolume\napiVersion: v1\nmetadata:\n  name: test\nspec:\n  capacity:\n    storage: 20Gi\n  csi:\n    driver: driver.longhorn.io\n    volumeHandle: test\n    fsType: ext4\n    volumeAttributes:\n      diskSelector: ''\n      nodeSelector: ''\n      numberOfReplicas: '1'\n      staleReplicaTimeout: '20'\n  accessModes:\n    - ReadWriteMany\n  claimRef:\n    kind: PersistentVolumeClaim\n    namespace: default\n    name: test\n    apiVersion: v1\n    resourceVersion: '147682602'\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: longhorn-static\n  volumeMode: Filesystem\n\n# PVC\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: test\n  namespace: default\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 20Gi\n  volumeName: test\n  storageClassName: longhorn-static\n  volumeMode: Filesystem\n")))}s.isMDXComponent=!0}}]);