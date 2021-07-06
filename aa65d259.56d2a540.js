(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1114:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return t?o.a.createElement(m,a(a({ref:n},s),{},{components:t})):o.a.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},770:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),c=(t(0),t(1114)),i={id:"nextcloud-config",title:"Nextcloud \u914d\u7f6e"},a={unversionedId:"service/file/nextcloud-config",id:"service/file/nextcloud-config",isDocsHomePage:!1,title:"Nextcloud \u914d\u7f6e",description:"Tips",source:"@site/notes/service/file/nextcloud-config.md",slug:"/service/file/nextcloud-config",permalink:"/notes/service/file/nextcloud-config",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/file/nextcloud-config.md",version:"current",sidebar:"docs",previous:{title:"filebrowser",permalink:"/notes/service/file/filebrowser"},next:{title:"Nextcloud \u5f00\u53d1",permalink:"/notes/service/file/nextcloud-dev"}},l=[{value:"Tips",id:"tips",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/nextcloud/server/blob/master/config/config.sample.php"},"config.sample.php"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$CONFIG = array(\n// \u5b9e\u4f8b\u552f\u4e00\u6807\u8bc6\u7b26\n'instanceid' => '',\n// \u9ed8\u8ba4\u8bed\u8a00 - \u9ed8\u8ba4 en\n'default_language' => 'zh_CN',\n'default_locale' => 'zh',\n// \u9ed8\u8ba4\u6253\u5f00\u5e94\u7528\n'defaultapp' => 'files',\n// \u4fe1\u4efb\u57df\u540d\n'trusted_domains' =>\n  [\n    'localhost',\n  ],\n\n// \u9ed8\u8ba4\u5f00\u542f\u5e2e\u52a9\u6587\u6863\n'knowledgebaseenabled' => false,\n\n// \u6a21\u677f\u6587\u4ef6\u76ee\u5f55 - \u65b0\u521b\u5efa\u7528\u6237\n'skeletondirectory' => 'core/skeleton',\n// 'skeletondirectory' => 'config/skeleton',\n\n// HTTP_PROXY\n'proxy' => '',\n'proxyuserpwd' => '',\n// NO_PROXY\n'proxyexclude' => [],\n\n// \u662f\u5426\u81ea\u52a8\u68c0\u67e5\u66f4\u65b0\n'updatechecker' => false,\n\n// \u662f\u5426\u6709\u7f51\u7edc\u94fe\u63a5 - false \u5219\u662f\u79bb\u7ebf\u72b6\u6001\n'has_internet_connection' => true,\n// \u68c0\u6d4b\u8054\u901a\u6027\n'connectivity_check_domains' => [\n    'www.nextcloud.com',\n    'www.startpage.com',\n    'www.eff.org',\n    'www.edri.org'\n],\n\n\n// \u4e2a\u4e2a\u5e73\u53f0\u7684\u5ba2\u6237\u7aef\u4e0b\u8f7d\u94fe\u63a5\u914d\u7f6e\n'customclient_desktop' =>\n    'https://nextcloud.com/install/#install-clients',\n'customclient_android' =>\n    'https://play.google.com/store/apps/details?id=com.nextcloud.client',\n'customclient_ios' =>\n    'https://itunes.apple.com/us/app/nextcloud/id1125420102?mt=8',\n'customclient_ios_appid' =>\n    '1125420102',\n    \n\n// \u662f\u5426\u542f\u7528\u5e94\u7528\u5546\u5e97\n'appstoreenabled' => true,\n\n// \u4fe1\u4efb\u7684\u53cd\u5411\u4ee3\u7406\n'trusted_proxies' => ['203.0.113.45', '198.51.100.128', '192.168.2.0/24'],\n'forwarded_for_headers' => ['HTTP_X_FORWARDED_FOR'],\n\n// \u4ee3\u7406\u914d\u7f6e\n// ==============================\n\n// \u8986\u76d6\u4e3b\u673a - \u7528\u4e8e\u68c0\u6d4b\u4e0d\u5230\u53cd\u5411\u4ee3\u7406\u7684 Host \u65f6\n'overwritehost' => '',\n\n// \u5982\u679c\u5728\u53cd\u5411\u4ee3\u7406\u4e4b\u540e\u68c0\u6d4b\u4e0d\u5230 schema \u65f6\u53ef\u4ee5\u8bbe\u7f6e - \u4f8b\u5982 https\n'overwriteprotocol' => '',\n\n// \u8986\u76d6 root \u8def\u5f84 - \u4f8b\u5982 www.example.com/nextcloud \u4f1a\u68c0\u6d4b\u4e3a /nextcloud\n// \u53cd\u5411\u4ee3\u7406\u7684\u65f6\u5019\u53ef\u80fd\u68c0\u6d4b\u4e0d\u5230\n'overwritewebroot' => '',\n\n// \u590d\u5199\u7684\u6761\u4ef6\u5730\u5740 - \u4f8b\u5982 10\\.0\\.0\\. \u5219\u53ea\u8986\u76d6 10.0.0.0/24 \u8fc7\u6765\u7684\u8bf7\u6c42\n// \u6b63\u5219\u8868\u8fbe\u5f0f\n'overwritecondaddr' => '',\n\n// \u8986\u76d6\u547d\u4ee4\u884c\u5de5\u5177\u5730\u5740 - \u4f8b\u5982 occ cron \u7b49\n'overwrite.cli.url' => '',\n\n)\n")))}p.isMDXComponent=!0}}]);