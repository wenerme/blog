(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,b=p["".concat(i,".").concat(h)]||p[h]||m[h]||o;return n?r.a.createElement(b,s(s({ref:t},u),{},{components:n})):r.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),o=(n(0),n(1114)),i={id:"oauth2-proxy",title:"oauth2-proxy"},s={unversionedId:"service/auth/oauth2-proxy",id:"service/auth/oauth2-proxy",isDocsHomePage:!1,title:"oauth2-proxy",description:"Tips",source:"@site/notes/service/auth/oauth2-proxy.md",slug:"/service/auth/oauth2-proxy",permalink:"/notes/service/auth/oauth2-proxy",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/oauth2-proxy.md",version:"current",sidebar:"docs",previous:{title:"OAuth",permalink:"/notes/service/auth/oauth"},next:{title:"OpenLDAP",permalink:"/notes/service/auth/openldap"}},l=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"Ingress",id:"ingress",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/oauth2-proxy/oauth2-proxy"},"oauth2-proxy/oauth2-proxy")),Object(o.b)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf + ",Object(o.b)("inlineCode",{parentName:"li"},"OAUTH2_PROXY_")," \u524d\u7f00"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://oauth2-proxy.github.io/oauth2-proxy/configuration/sessions"},"\u4f1a\u8bdd")," - ",Object(o.b)("inlineCode",{parentName:"li"},"--session-store-type"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"cookie - \u9ed8\u8ba4",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4ee3\u7406\u65e0\u72b6\u6001"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"cookie-secret")," \u52a0\u5bc6 cookie"),Object(o.b)("li",{parentName:"ul"},"\u5e76\u53d1\u64cd\u4f5c\u53ef\u80fd\u4f1a\u51b2\u7a81\u5bfc\u81f4\u9700\u8981\u4ece\u65b0\u8ba4\u8bc1"))),Object(o.b)("li",{parentName:"ul"},"redis",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Cookie \u8bb0\u5f55 ticket"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{CookieName}-{ticketID}.{secret}"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"CookieName \u9ed8\u8ba4 _oauth2_proxy"),Object(o.b)("li",{parentName:"ul"},"ticketID - 128 bit, hex"),Object(o.b)("li",{parentName:"ul"},"secret - 128 bit, base64url, no padding"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--session-store-type=redis")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--redis-connection-url=redis://host[:port][/db-number]")))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://oauth2-proxy.github.io/oauth2-proxy/endpoints"},"Endpoints"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"/robots.txt"),Object(o.b)("li",{parentName:"ul"},"/ping - \u5065\u5eb7\u68c0\u67e5"),Object(o.b)("li",{parentName:"ul"},"/oauth2/sign_in"),Object(o.b)("li",{parentName:"ul"},"/oauth2/sign_out",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"rd \u53c2\u6570\u91cd\u5b9a\u5411 \u6216\u8005 \u5934 ",Object(o.b)("inlineCode",{parentName:"li"},"X-Auth-Request-Redirect")))),Object(o.b)("li",{parentName:"ul"},"/oauth2/start - \u5f00\u59cb OAuth\uff0crd \u53c2\u6570\u4e3a\u91cd\u5b9a\u5411\u5730\u5740"),Object(o.b)("li",{parentName:"ul"},"/oauth2/callback - OAuth2 \u56de\u8c03\u5730\u5740"),Object(o.b)("li",{parentName:"ul"},"/oauth2/userinfo - \u8fd4\u56de\u7528\u6237\u4fe1\u606f"),Object(o.b)("li",{parentName:"ul"},"/oauth2/auth - \u8fd4\u56de 202 Accepted \u6216 401 Unauthorized\uff1b\u7528\u4e8e nginx auth_request"))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ingress-nginx ",Object(o.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/"},"oauth external auth")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.syseleven.de/metakube/de/tutorials/setup-ingress-auth-to-use-keycloak-oauth"},"Setup ingress auth to use keycloak oauth"))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"# Keycloak\n- args:\n  - --provider=keycloak\n  - --email-domain=*\n  - --upstream=file:///dev/null\n  - --http-address=0.0.0.0:4180\n  - --login-url=https://my.domain.com/auth/realms/authentication/protocol/openid-connect/auth\n  - --redeem-url=https://my.domain.com/auth/realms/authentication/protocol/openid-connect/token\n  - --validate-url=https://my.domain.com/auth/realms/authentication/protocol/openid-connect/userinfo\n  - --whitelist-domain=.my.domain.com\n  - --cookie-domain=.my.domain.com\n  - --oidc-issuer-url=https://my.domain.com/auth/realms/authentication\n  - --keycloak-group=/admin\n  - --cookie-name=keycloak\n  - --proxy-prefix=/second-oauth2\n")),Object(o.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ini"},'## <addr>:<port> to listen on for HTTP/HTTPS clients\n# http_address = "127.0.0.1:4180"\n# https_address = ":443"\n\n## Are we running behind a reverse proxy? Will not accept headers like X-Real-Ip unless this is set.\n# reverse_proxy = true\n\n## TLS Settings\n# tls_cert_file = ""\n# tls_key_file = ""\n\n## the OAuth Redirect URL.\n# defaults to the "https://" + requested host header + "/oauth2/callback"\n# redirect_url = "https://internalapp.yourcompany.com/oauth2/callback"\n\n## the http url(s) of the upstream endpoint. If multiple, routing is based on path\n# upstreams = [\n#     "http://127.0.0.1:8080/"\n# ]\n\n## Logging configuration\n#logging_filename = ""\n#logging_max_size = 100\n#logging_max_age = 7\n#logging_local_time = true\n#logging_compress = false\n#standard_logging = true\n#standard_logging_format = "[{{.Timestamp}}] [{{.File}}] {{.Message}}"\n#request_logging = true\n#request_logging_format = "{{.Client}} - {{.Username}} [{{.Timestamp}}] {{.Host}} {{.RequestMethod}} {{.Upstream}} {{.RequestURI}} {{.Protocol}} {{.UserAgent}} {{.StatusCode}} {{.ResponseSize}} {{.RequestDuration}}"\n#auth_logging = true\n#auth_logging_format = "{{.Client}} - {{.Username}} [{{.Timestamp}}] [{{.Status}}] {{.Message}}"\n\n## pass HTTP Basic Auth, X-Forwarded-User and X-Forwarded-Email information to upstream\n# pass_basic_auth = true\n# pass_user_headers = true\n## pass the request Host Header to upstream\n## when disabled the upstream Host is used as the Host Header\n# pass_host_header = true\n\n## Email Domains to allow authentication for (this authorizes any email on this domain)\n## for more granular authorization use `authenticated_emails_file`\n## To authorize any email addresses use "*"\n# email_domains = [\n#     "yourcompany.com"\n# ]\n\n## The OAuth Client ID, Secret\n# client_id = "123456.apps.googleusercontent.com"\n# client_secret = ""\n\n## Pass OAuth Access token to upstream via "X-Forwarded-Access-Token"\n# pass_access_token = false\n\n## Authenticated Email Addresses File (one email per line)\n# authenticated_emails_file = ""\n\n## Htpasswd File (optional)\n## Additionally authenticate against a htpasswd file. Entries must be created with "htpasswd -s" for SHA encryption\n## enabling exposes a username/login signin form\n# htpasswd_file = ""\n\n## Templates\n## optional directory with custom sign_in.html and error.html\n# custom_templates_dir = ""\n\n## skip SSL checking for HTTPS requests\n# ssl_insecure_skip_verify = false\n\n\n## Cookie Settings\n## Name     - the cookie name\n## Secret   - the seed string for secure cookies; should be 16, 24, or 32 bytes\n##            for use with an AES cipher when cookie_refresh or pass_access_token\n##            is set\n## Domain   - (optional) cookie domain to force cookies to (ie: .yourcompany.com)\n## Expire   - (duration) expire timeframe for cookie\n## Refresh  - (duration) refresh the cookie when duration has elapsed after cookie was initially set.\n##            Should be less than cookie_expire; set to 0 to disable.\n##            On refresh, OAuth token is re-validated.\n##            (ie: 1h means tokens are refreshed on request 1hr+ after it was set)\n## Secure   - secure cookies are only sent by the browser of a HTTPS connection (recommended)\n## HttpOnly - httponly cookies are not readable by javascript (recommended)\n# cookie_name = "_oauth2_proxy"\n# cookie_secret = ""\n# cookie_domains = ""\n# cookie_expire = "168h"\n# cookie_refresh = ""\n# cookie_secure = true\n# cookie_httponly = true\n')),Object(o.b)("h2",{id:"ingress"},"Ingress"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'# \u539f\u59cb Ingress\nkind: Ingress\nmetdata:\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/auth-url: "https://$host/oauth2/auth"\n    nginx.ingress.kubernetes.io/auth-signin: "https://$host/oauth2/start?rd=$escaped_request_uri"\n    # \u9700\u8981 set-xauthrequest: true\n    nginx.ingress.kubernetes.io/auth-response-headers: "x-auth-request-user, x-auth-request-email"\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u6620\u5c04\u5230\u5176\u4ed6\u7a7a\u95f4")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"kind: Service\napiVersion: v1\nmetadata:\n  name: oauth2-proxy\n  namespace: longhorn-system\nspec:\n  type: ExternalName\n  externalName: oauth2-proxy.auth.svc.cluster.local\n  ports:\n    - port: 80\n      name: http\n      targetPort: 80\n---\n# \u4f8b\u5982 \u4e3a Longhorn UI \u6dfb\u52a0\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: longhorn-oauth2-ingress\n  namespace: longhorn-system\nspec:\n  tls:\n  - hosts:\n    - longhorn.example.com\n    secretName: longhorn-example-com-cert\n  rules:\n  - host: longhorn.example.com\n    http:\n      paths:\n      - backend:\n          service:\n            name: oauth2-proxy\n            port:\n              name: http\n        path: /oauth2\n        pathType: ImplementationSpecific\n")))}c.isMDXComponent=!0}}]);