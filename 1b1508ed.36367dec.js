(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(7),s=(t(0),t(556)),o={id:"ssh",title:"SSH"},c={unversionedId:"ops/admin/ssh",id:"ops/admin/ssh",isDocsHomePage:!1,title:"SSH",description:"SSH",source:"@site/contents/tricks/ops/admin/ssh.md",slug:"/ops/admin/ssh",permalink:"/notes/ops/admin/ssh",version:"current"},l=[{value:"Tips",id:"tips",children:[]},{value:"config",id:"config",children:[]},{value:"Key",id:"key",children:[]},{value:"Tunnel",id:"tunnel",children:[]},{value:"\u591a\u8def\u590d\u7528",id:"\u591a\u8def\u590d\u7528",children:[]},{value:"\u7f51\u5173",id:"\u7f51\u5173",children:[]},{value:"\u8df3\u677f\u673a",id:"\u8df3\u677f\u673a",children:[]},{value:"HTTP + SSH \u591a\u8def",id:"http--ssh-\u591a\u8def",children:[]},{value:"ForwardAgent",id:"forwardagent",children:[]},{value:"FAQ",id:"faq",children:[{value:"key_load_public: No such file or directory",id:"key_load_public-no-such-file-or-directory",children:[]},{value:"channel 0: open failed: administratively prohibited: open failed - stdio forwarding failed",id:"channel-0-open-failed-administratively-prohibited-open-failed---stdio-forwarding-failed",children:[]},{value:"\u7aef\u53e3\u8f6c\u53d1",id:"\u7aef\u53e3\u8f6c\u53d1",children:[]}]}],i={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"ssh"},"SSH"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"http://man.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man5/sshd_config.5"}),"sshd_config"))),Object(s.b)("h2",{id:"tips"},"Tips"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Host key ",Object(s.b)("inlineCode",{parentName:"li"},"/etc/ssh/ssh_host_*")),Object(s.b)("li",{parentName:"ul"},"\u5c06\u6307\u5b9a\u7528\u6237\u7684\u7aef\u53e3\u8f6c\u53d1\u4f7f\u5f97\u5916\u90e8\u90fd\u53ef\u89c1,\u53ef\u5728 ",Object(s.b)("inlineCode",{parentName:"li"},"/etc/ssh/sshd_config")," \u4e2d\u6dfb\u52a0,\u7136\u540e ",Object(s.b)("inlineCode",{parentName:"li"},"service sshd reload")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"http://quark.humbug.org.au/publications/ssh/ssh-tricks.html"}),"http://quark.humbug.org.au/publications/ssh/ssh-tricks.html")),Object(s.b)("li",{parentName:"ul"},"Verify that the .pem file has permissions of 0400, not 0777")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"ESCAPE")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{})," ~.   - terminate connection (and any multiplexed sessions)\n ~B   - send a BREAK to the remote system\n ~C   - open a command line\n ~R   - request rekey\n ~V/v - decrease/increase verbosity (LogLevel)\n ~^Z  - suspend ssh\n ~#   - list forwarded connections\n ~&   - background ssh (when waiting for connections to terminate)\n ~?   - this message\n ~~   - send the escape character by typing it twice\n(Note that escapes are only recognized immediately after newline.)\n\nssh> help\nCommands:\n      -L[bind_address:]port:host:hostport    Request local forward\n      -R[bind_address:]port:host:hostport    Request remote forward\n      -D[bind_address:]port                  Request dynamic forward\n      -KL[bind_address:]port                 Cancel local forward\n      -KR[bind_address:]port                 Cancel remote forward\n      -KD[bind_address:]port                 Cancel dynamic forward\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u5e38\u7528\u914d\u7f6e")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u914d\u7f6e\u4f7f\u7528\u7684\u7aef\u53e3\nPort 22\n\n# \u662f\u5426\u8f6c\u53d1\u7f51\u5173\nGatewayPorts no\n# \u662f\u5426\u5141\u8bb8\u4f7f\u7528 root \u767b\u9646\nPermitRootLogin yes\n# \u662f\u5426\u5141\u8bb8\u4f7f\u7528\u5bc6\u7801\u767b\u9646\nPasswordAuthentication yes\nChallengeResponseAuthentication yes\n\n# \u8f6c\u53d1\u7684\u7aef\u53e3\u5141\u8bb8\u5916\u90e8\u8bbf\u95ee\nMatch User dev\n   GatewayPorts yes\n\n# \u53ef\u53ea\u5bf9\u6307\u5b9a\u7684\u63a5\u53e3\u5bf9\u5916\u66b4\u9732\n# -R :8000:localhost:80\n# GatewayPorts clientspecified\n\n# \u7981\u6b62\u90e8\u5206\u7528\u6237\u4f7f\u7528 TTY\nMatch User player\n  PermitTTY no\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5f3a\u5236\u4f7f\u7528\u5bc6\u7801\nssh user:@example.com\nssh -o PreferredAuthentications=password -o PubkeyAuthentication=no example.com\n")),Object(s.b)("h2",{id:"config"},"config"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u7f51\u5173\u670d\u52a1\u5668\nHost my-gate\nUser root\nHostname 1.2.3.4\n\n# \u901a\u8fc7 my-gate \u94fe\u63a5 1.2.3.100\n# busybox \u7684 nc \u6ca1\u6709 -q, \u9700\u8981\nHost my-gate-110\nUser root\nProxyCommand ssh -q qc-sh-1 nc -q0 1.2.3.100 22\n")),Object(s.b)("h2",{id:"key"},"Key"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u751f\u6210 key\nssh-keygen -t rsa -b 2048 -C "email@example.com"\n\n# \u65e0\u5bc6\u7801\u4e0d\u8be2\u95ee\nssh-keygen -t rsa -b 2048 -f /tmp/sshkey -q -N ""\n')),Object(s.b)("h2",{id:"tunnel"},"Tunnel"),Object(s.b)("p",null,"\u5728\u5de5\u4f5c\u4e2d\u5e38\u5e38\u9700\u8981\u8f83\u591a\u7684\u4ee3\u7406\u548c\u8f6c\u53d1,\u4e3a\u6bcf\u4e2a\u4ee3\u7406\u548c\u8f6c\u53d1\u90fd\u8fdb\u884c\u4e00\u6b21 SSH \u672a\u514d\u592a\u8fc7\u9ebb\u70e6,\u4f7f\u7528 ",Object(s.b)("inlineCode",{parentName:"p"},"~/.ssh/config")," \u53ef\u4ee5\u5c06\u5e38\u7528\u7684\u8f6c\u53d1\u4e00\u6b21\u914d\u7f6e"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Host tunnel\nHostname my.host.com\nUser myUser\nCompression yes\nExitOnForwardFailure yes\nForwardAgent yes\nDynamicForward 8888\nRemoteForward 2222 127.0.0.1:22\nLocalForward 16379 myInternalRedis:6379\nLocalForward 13306 myInternalMySQL:3306\n")),Object(s.b)("p",null,"\u518d\u914d\u5408 autossh \u53ef\u5927\u5927\u51cf\u5c11\u5de5\u4f5c\u91cf"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"autossh -M 8889  -vNg tunnel > ssh.log 2>&1 &\n")),Object(s.b)("h2",{id:"\u591a\u8def\u590d\u7528"},"\u591a\u8def\u590d\u7528"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Multiplexing"}),"https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Multiplexing")),Object(s.b)("li",{parentName:"ul"},"\u597d\u5904",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u51cf\u5c11\u8fde\u63a5\u65f6\u95f4 - \u7279\u522b\u662f\u673a\u5668\u591a\u3001ssh\u547d\u4ee4\u591a\u3001ack\u5ef6\u65f6\u9ad8\u7684\u65f6\u5019"),Object(s.b)("li",{parentName:"ul"},"\u8fde\u63a5\u590d\u7528"))),Object(s.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"\u8fde\u63a5\u8fc7\u591a\u53ef\u80fd\u4e0d\u95ee\u9898"),Object(s.b)("li",{parentName:"ul"},"\u4e0d\u8981\u7528\u6765\u4f20\u5927\u6587\u4ef6 - \u76f4\u63a5\u8fde\u63a5\u4f1a\u66f4\u5feb")))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"Host *\nControlPath ~/.ssh/controlmasters/%r@%h:%p\nControlMaster auto\nControlPersist 10m\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u5fc5\u987b\u8981\u624b\u52a8\u521b\u5efa\u76ee\u5f55\nmkdir ~/.ssh/controlmasters\n\n# \u68c0\u6d4b\nssh -O check myhost\n# \u81ea\u52a8\u542f\u52a8 master\nssh myhost pwd\n# \u505c\u6b62 master\nssh -O stop myhost\n\n# \u624b\u52a8\u542f\u52a8 master\nssh -MNn user@server\n")),Object(s.b)("h2",{id:"\u7f51\u5173"},"\u7f51\u5173"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh -t gateway ssh internal\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"Host internal\n  ProxyCommand ssh gw nc -w 1 internal 22\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh internal\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ssh -f -nNT -R 1100:localhost:22 somehost\n\nssh localhost -p 1100\n")),Object(s.b)("h2",{id:"\u8df3\u677f\u673a"},"\u8df3\u677f\u673a"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# \u9ed8\u8ba4\u652f\u6301 -J \u7528\u4e8e\u8df3\u677f\u573a\u666f\n# \u9700\u8981 PortForward\nssh -J admin@jumphost admin@internal\n\n# \u591a\u6b21\u8df3\u8f6c\nssh -J user1@host1:port1,user2@host2:port2 user3@host3\n\n# \u4f7f\u7528 ProxyCommand\n# -W host:port\n# \u8bf7\u6c42\u8f6c\u53d1 IO \u5230\u6307\u5b9a\u673a\u5668\u7684\u7aef\u53e3\uff0c\u9690\u542b\u4e86 -N, -T, ExitOnForwardFailure, ClearAllForwardings\nssh -o ProxyCommand="ssh -W %h:%p -q admin@jumphost" admin@internal\n\n# nc \u8f6c\u53d1 - \u4e0d\u9700\u8981 PortForward\n# \u53ef\u4ee5\u6dfb\u52a0 -o StrictHostKeyChecking=no \u907f\u514d\u8be2\u95ee\u6307\u7eb9\nssh -o ProxyCommand="ssh -q admin@jumphost nc %h %p" admin@internal\n')),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"Host behindbeta\n  HostName behindbeta.example.org\n  ProxyJump  betajump\n")),Object(s.b)("h2",{id:"http--ssh-\u591a\u8def"},"HTTP + SSH \u591a\u8def"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/yrutschle/sslh"}),"https://github.com/yrutschle/sslh"))),Object(s.b)("h2",{id:"forwardagent"},"ForwardAgent"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ssh.com/ssh/agent/"}),"https://www.ssh.com/ssh/agent/")),Object(s.b)("li",{parentName:"ul"},"\u8f6c\u53d1 agent \u540e\u53ef\u4ee5\u76f4\u63a5\u5728\u8fdc\u7a0b\u8282\u70b9\u4f7f\u7528\u672c\u5730\u6dfb\u52a0\u7684 ssh \u5bc6\u94a5"),Object(s.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"root \u80fd\u8bbf\u95ee\u5176\u4ed6\u7528\u6237\u7684 auth sock")))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u4f1a\u66b4\u9732 SSH_AUTH_SOCK - \u4f8b\u5982 /tmp/ssh-abcd/agent.6379\n# \u53ef\u4ee5\u5728\u6ca1\u6709\u7684\u4f1a\u8bdd\u8bbe\u7f6e\u53d8\u91cf\u4e5f\u80fd\u76f4\u63a5\u4f7f\u7528\nssh -A user@myhost.com\n")),Object(s.b)("h2",{id:"faq"},"FAQ"),Object(s.b)("h3",{id:"key_load_public-no-such-file-or-directory"},"key_load_public: No such file or directory"),Object(s.b)("p",null,"\u627e\u4e0d\u5230 ",Object(s.b)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa.pub"),"\uff0c\u4e0d\u5f71\u54cd\u4f7f\u7528"),Object(s.b)("h3",{id:"channel-0-open-failed-administratively-prohibited-open-failed---stdio-forwarding-failed"},"channel 0: open failed: administratively prohibited: open failed - stdio forwarding failed"),Object(s.b)("p",null,"\u4e0d\u5141\u8bb8 PortForward\uff0c\u9700\u8981\u5f00\u542f"),Object(s.b)("h3",{id:"\u7aef\u53e3\u8f6c\u53d1"},"\u7aef\u53e3\u8f6c\u53d1"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"-L/LocalForward \u672c\u5730\u8f6c\u53d1"),Object(s.b)("li",{parentName:"ul"},"-R/RemoteForward \u8fdc\u7a0b\u8f6c\u53d1")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u8bbf\u95ee\u672c\u5730 80 \u4f1a\u88ab\u8f6c\u53d1\u5230 SERVER:8080\nssh -L 8080:localhost:80 SERVER -o ExitOnForwardFailure=yes\n\n# \u8bbf\u95ee SERVER:80 \u4f1a\u88ab\u8f6c\u53d1\u5230\u672c\u5730 8080 \u7aef\u53e3\n# -g \u5141\u8bb8\u5916\u90e8\u8bbf\u95ee\nssh -g -R 80:localhost:8080 SERVER -o ExitOnForwardFailure=yes\n")),Object(s.b)("p",null,"\u5141\u8bb8\u7aef\u53e3\u8f6c\u53d1"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"/etc/ssh/sshd_config")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-conf"}),"AllowAgentForwarding yes\nAllowTcpForwarding yes\n# \u5141\u8bb8 -g\nGatewayPorts yes\n")))}b.isMDXComponent=!0},556:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||s;return t?r.a.createElement(h,c(c({ref:n},i),{},{components:t})):r.a.createElement(h,c({ref:n},i))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=t[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);