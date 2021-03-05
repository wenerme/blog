(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{787:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(787)),l={id:"traefik-v1",title:"Traefik V1"},c={unversionedId:"devops/web/traefik-v1",id:"devops/web/traefik-v1",isDocsHomePage:!1,title:"Traefik V1",description:"Notes",source:"@site/notes/devops/web/traefik-v1.md",slug:"/devops/web/traefik-v1",permalink:"/notes/devops/web/traefik-v1",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/web/traefik-v1.md",version:"current",sidebar:"docs",previous:{title:"Nginx",permalink:"/notes/devops/web/nginx"},next:{title:"Traefik",permalink:"/notes/devops/web/traefik"}},o=[{value:"Notes",id:"notes",children:[{value:"Docker",id:"docker",children:[]},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"admin",id:"admin",children:[]}]}],b={toc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("h3",{id:"docker"},"Docker"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u7b80\u5355\u542f\u52a8\ndocker run --rm -it -p 443:443 -p 80:80 -p 8080:8080 traefik --accesslog -l INFO --web\n# \u4f7f\u7528 consul\ndocker run --rm -it -p 443:443 -p 80:80 -p 8080:8080 traefik --accesslog -l INFO --web --consul.endpoint=consul:8500\n")),Object(i.b)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5165\u53e3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"http"),Object(i.b)("li",{parentName:"ul"},"https"))),Object(i.b)("li",{parentName:"ul"},"\u524d\u7aef",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u4ece\u5165\u53e3\u8fdb\u5165\u7684\u8bf7\u6c42\u5982\u4f55\u8f6c\u53d1\u5230\u540e\u7aef"),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f, \u6b63\u5219\u91cc\u7684\u540d\u5b57\u5e76\u6ca1\u6709\u4efb\u4f55\u610f\u4e49, \u53ea\u662f\u56e0\u4e3a\u4f9d\u8d56\u7684 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/gorilla/mux"},"gorilla/mux")," \u8981\u6c42\u5fc5\u987b\u8981\u6709"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"passHostHeader")," \u5c06\u5934\u5b8c\u5168\u4f20\u9012\u5230\u540e\u7aef"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"passTLSCert")," \u5c06\u5ba2\u6237\u7aef\u8bc1\u4e66\u4e5f\u8f6c\u53d1\u5230\u540e\u7aef"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f18\u5148\u7ea7\u4e3a\u89c4\u5219\u957f\u5ea6\u7684\u53cd\u5e8f, \u907f\u514d\u8def\u5f84\u91cd\u53e0, \u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"priority")," \u4fee\u6539"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5934"),Object(i.b)("li",{parentName:"ul"},"\u5b89\u5168\u76f8\u5173\u7684\u5934\u53ef\u4ee5\u4f7f\u7528\u7b80\u5316\u7684\u65b9\u5f0f\u542f\u7528",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/unrolled/secure#available-options"},"unrolled/secure#available-options")))),Object(i.b)("li",{parentName:"ul"},"Modifiers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u7ba1\u987a\u5e8f\u600e\u4e48\u6837, \u4f1a\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"Matchers")," \u4e4b\u540e\u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539\u8bf7\u6c42, \u4e0d\u5f71\u54cd\u8def\u7531"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AddPrefix: /products")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReplacePath: /serverless-path"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u66ff\u6362\u8def\u5f84\u5e76\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"li"},"X-Replaced-Path")," \u5934"))))),Object(i.b)("li",{parentName:"ul"},"Matchers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u8bf7\u6c42\u5982\u4f55\u8f6c\u53d1\u5230\u540e\u7aef"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},",")," \u5206\u9694\u7b26\u7528\u4e8e\u5b9a\u4e49\u591a\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"\u6216")," \u6761\u4ef6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},";")," \u5b9a\u4e49\u591a\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},"\u4e0e")," \u6761\u4ef6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Headers: Content-Type, application/json"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5934\u5339\u914d, \u63a5\u53d7\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},",")," \u5206\u5272\u7684 kv \u503c"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HeadersRegexp: Content-Type, application/(text/json)"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5934\u5339\u914d, \u63a5\u53d7\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},",")," \u5206\u5272\u7684 kv \u503c"),Object(i.b)("li",{parentName:"ul"},"\u503c\u53ef\u4ee5\u4e3a\u6b63\u5219"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Host: traefik.io, www.traefik.io")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HostRegexp: traefik.io, {subdomain:[a-z]+}.traefik.io")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Method: GET, POST, PUT")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Path: /products/, /articles/{category}/{id:[0-9]+}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PathStrip: /products/"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8def\u5f84\u5b8c\u5168\u5339\u914d, \u8f6c\u53d1\u5230\u540e\u7aef\u7684\u65f6\u5019\u4f1a\u53bb\u6389\u8def\u5f84"),Object(i.b)("li",{parentName:"ul"},"\u4f1a\u5c06\u539f\u8def\u5f84\u4fdd\u5b58\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"X-Forwarded-Prefix")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PathStripRegex: /articles/{category}/{id:[0-9]+}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PathPrefix: /products/, /articles/{category}/{id:[0-9]+}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PathPrefixStrip: /products/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PathPrefixStripRegex: /articles/{category}/{id:[0-9]+}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Query: foo=bar, bar=baz")))))),Object(i.b)("li",{parentName:"ul"},"\u540e\u7aef",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5c06\u524d\u7aef\u7684\u8bf7\u6c42\u8d1f\u8f7d\u5230\u4e00\u7ec4\u670d\u52a1\u5668"),Object(i.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u65b9\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"wrr \u57fa\u4e8e\u6743\u91cd\u7684\u8f6e\u8be2"),Object(i.b)("li",{parentName:"ul"},"drr \u52a8\u6001\u8f6e\u8be2"))),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u7194\u65ad\u673a\u5236",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5: LatencyAtQuantileMS, NetworkErrorRatio, ResponseCodeRatio"),Object(i.b)("li",{parentName:"ul"},"\u64cd\u4f5c: AND, OR, EQ, NEQ, LT, LE, GT, GE"))),Object(i.b)("li",{parentName:"ul"},"\u6700\u5927\u8fde\u63a5\u6570\u63a7\u5236",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5bf9\u94fe\u63a5\u5206\u7ec4\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"request.host")," , ",Object(i.b)("inlineCode",{parentName:"li"},"client.ip"),", ",Object(i.b)("inlineCode",{parentName:"li"},"request.header.ANY_HEADER")),Object(i.b)("li",{parentName:"ul"},"\u8fbe\u5230\u9600\u503c\u4f1a\u8fd4\u56de ",Object(i.b)("inlineCode",{parentName:"li"},"429 Too Many Requests")))),Object(i.b)("li",{parentName:"ul"},"\u7c98\u6027\u4f1a\u8bdd, \u9700\u8981\u6307\u5b9a ",Object(i.b)("inlineCode",{parentName:"li"},"cookieName")),Object(i.b)("li",{parentName:"ul"},"\u5065\u5eb7\u68c0\u67e5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u6307\u5b9a\u8def\u5f84, \u95f4\u9694, \u7aef\u53e3, \u8981\u6c42\u662f http"))),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u5b9a\u4e49",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e3b\u8981\u4e3a url, \u8def\u5f84\u53ef\u4ee5\u5728 Modifier \u4e2d\u6307\u5b9a"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6307\u5b9a weight")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-toml"},'# \u5165\u53e3\u5b9a\u4e49\n[entryPoints]\n  [entryPoints.http]\n  address = ":80"\n    # \u5f3a\u5236\u8df3\u8f6c\u5230 https\n    [entryPoints.http.redirect]\n    entryPoint = "https"\n    # url \u91cd\u5199\n    [entryPoints.http.redirect]\n    regex = "^http://localhost/(.*)"\n    replacement = "http://mydomain/$1"\n\n  [entryPoints.https]\n  address = ":443"\n  [entryPoints.https.tls]\n  clientCAFiles = ["tests/clientca1.crt", "tests/clientca2.crt"]\n    [entryPoints.https.tls]\n      [[entryPoints.https.tls.certificates]]\n      certFile = "tests/traefik.crt"\n      keyFile = "tests/traefik.key"\n\n# \u524d\u7aef\n[frontends]\n  # \u5b9a\u4e49\u4e00\u4e2a\u524d\u7aef\n  [frontends.frontend1]\n  # \u6307\u5b9a\u540e\u7aef\n  backend = "backend2"\n    # \u5b9a\u4e49\u8def\u7531\u89c4\u5219\n    [frontends.frontend1.routes.test_1]\n    rule = "Host:test.localhost,test2.localhost"\n    # \u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u5934\n    [frontends.frontend1.headers.customresponseheaders]\n    X-Custom-Response-Header = "True"\n    [frontends.frontend1.headers.customrequestheaders]\n    X-Script-Name = "test"\n  # \u5b9a\u4e49\u4e86\u4e00\u4e2a\u524d\u7aef\n  [frontends.frontend2]\n  # \u5747\u76f4\u63a5\u8f6c\u53d1\n  backend = "backend1"\n  passHostHeader = true\n  passTLSCert = true\n  # \u6307\u5b9a\u4f18\u5148\u7ea7\n  priority = 10\n  entrypoints = ["https"] # overrides defaultEntryPoints\n    [frontends.frontend2.routes.test_1]\n    rule = "HostRegexp:localhost,{subdomain:[a-z]+}.localhost"\n  [frontends.frontend3]\n  backend = "backend2"\n    # \u89c4\u5219\u53ef\u4ee5\u5199\u5728\u4e00\u8d77\u4e5f\u53ef\u4ee5\u5206\u5f00\u5199\n    [frontends.frontend3.routes.test_1]\n    rule = "Host:test3.localhost;Path:/test"\n    [frontends.frontend3.routes.test_2]\n    rule = "Query: test=1"\n\n# \u540e\u7aef\n[backends]\n  [backends.backend1]\n    # \u5b9a\u4e49\u7194\u65ad\u673a\u5236\n    [backends.backend1.circuitbreaker]\n    expression = "NetworkErrorRatio() > 0.5"\n    # \u8bbe\u7f6e\u6700\u5927\u8fde\u63a5\u6570\n    [backends.backend1.maxconn]\n    amount = 10\n    extractorfunc = "request.host"\n    # \u5b9a\u4e49\u540e\u7aef\u670d\u52a1\n    [backends.backend1.servers.server1]\n    url = "http://172.17.0.2:80"\n    weight = 10\n    [backends.backend1.servers.server2]\n    url = "http://172.17.0.3:80"\n    weight = 1\n    # \u5b9a\u4e49\u5065\u5eb7\u68c0\u67e5\n    [backends.backend1.healthcheck]\n    path = "/health"\n    interval = "10s"\n    port = 8080\n  [backends.backend2]\n    # \u8bbe\u7f6e\u8d1f\u8f7d\u65b9\u5f0f\n    [backends.backend2.LoadBalancer]\n    method = "drr"\n    [backends.backend2.loadbalancer.stickiness]\n    # \u5b9a\u4e49\u7c98\u6027\u4f1a\u8bdd\n    # \u53ef\u9009, \u9ed8\u8ba4\u4e3a sha1 \u516d\u4f4d\u5b57\u7b26\n    cookieName = "my_cookie"\n    [backends.backend2.servers.server1]\n    url = "http://172.17.0.4:80"\n    weight = 1\n    [backends.backend2.servers.server2]\n    url = "http://172.17.0.5:80"\n    weight = 2\n')),Object(i.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u8def\u5f84",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/etc/traefik/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$HOME/.traefik/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"."))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-toml"},'# \u5168\u5c40\u914d\u7f6e\ndebug=false\n# "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "PANIC"\nlogLevel = "ERROR"\n# \u524d\u7aef\u672a\u6307\u5b9a entrypoint \u7684\u9ed8\u8ba4\u503c\ndefaultEntryPoints = ["http"]\n\n# \u5b89\u5168\u505c\u6b62\u7684\u8d85\u65f6\u65f6\u95f4\ngraceTimeOut = "10s"\n\n# \u95f4\u9694\u68c0\u6d4b\u65b0\u7248\u672c\ncheckNewVersion = false\n\n# Backends throttle duration.\nProvidersThrottleDuration = "2s"\n\n# Controls the maximum idle (keep-alive) connections to keep per-host.\nMaxIdleConnsPerHost = 200\n\n# If set to true invalid SSL certificates are accepted for backends.\n# This disables detection of man-in-the-middle attacks so should only be used on secure backend networks.\nInsecureSkipVerify = true\n\n# Register Certificates in the RootCA.\nRootCAs = [ "/mycert.cert" ]\n\n# \u65e5\u5fd7\u914d\u7f6e\n[traefikLog]\n# \u9ed8\u8ba4\u4e3a os.Stdout\n# \u5982\u679c\u8def\u5f84\u4e0d\u5b58\u5728\u4f1a\u521b\u5efa\nfilePath = "log/traefik.log"\n# \u683c\u5f0f\u53ef\u4ee5\u4e3a json \u548c common\nformat = "common"\n\n\n# \u8bbf\u95ee\u65e5\u5fd7\n[accessLog]\n# \u9ed8\u8ba4\u4e3a os.Stdout\nfilePath = "/path/to/log/log.txt"\n# \u9ed8\u8ba4\u4e3a common log format - clf\nformat = "common"\n\n# \u6587\u4ef6\u914d\u7f6e\n[file]\n# \u6587\u4ef6\u5f15\u5165\nfilename = "rules.toml"\n# \u914d\u7f6e\u76ee\u5f55\ndirectory = "/path/to/config/"\n# \u68c0\u6d4b\u6539\u53d8\nwatch=true\n\n\n# \u6700\u5c0f\u5316\u914d\u7f6e\n[entryPoints]\n  [entryPoints.http]\n  address = ":8080"\n[web]\naddress=":8081"\n')),Object(i.b)("h3",{id:"admin"},"admin"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5065\u5eb7\u68c0\u67e5\n# \u53ef\u4ee5\u4f7f\u7528 -c \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\ntraefik healthcheck\n# \u5c06\u5f02\u5e38\u63d0\u4ea4\u5230 github\ntraefik bug\n")))}s.isMDXComponent=!0}}]);