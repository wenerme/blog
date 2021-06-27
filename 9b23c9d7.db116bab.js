(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{1096:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),s=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||p;return t?a.a.createElement(b,o(o({ref:n},i),{},{components:t})):a.a.createElement(b,o({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<p;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},689:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),p=(t(0),t(1096)),l={id:"php-pecl",title:"PHP Pecl"},o={unversionedId:"languages/php-pecl",id:"languages/php-pecl",isDocsHomePage:!1,title:"PHP Pecl",description:"PHP",source:"@site/notes/languages/php-pecl.md",slug:"/languages/php-pecl",permalink:"/notes/languages/php-pecl",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/php-pecl.md",version:"current",sidebar:"docs",previous:{title:"PEG.js",permalink:"/notes/languages/pegjs"},next:{title:"PHP",permalink:"/notes/languages/php"}},c=[{value:"Tips",id:"tips",children:[]},{value:"PECL",id:"pecl",children:[]}],i={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"php"},"PHP"),Object(p.b)("h2",{id:"tips"},"Tips"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"After Alpine v3.5, the ",Object(p.b)("inlineCode",{parentName:"li"},"/usr/bin/php")," is php7, before that is php5 in php5-cli package.")),Object(p.b)("h2",{id:"pecl"},"PECL"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},'# igbinary\n# https://pecl.php.net/package/igbinary\npecl install -o -f igbinary\n\n# redis\n# OPTIONS: igbinary, lzf\n# https://pecl.php.net/package/redis\npecl install -o -f redis <<<""\n# build \napk add xz-dev\npecl install -o -f redis < <(echo -e "yes\\nyes")\n# \u6709\u4e9b\u73af\u5883\u4e0b\u4e0d\u652f\u6301 < <() \u8bed\u6cd5\u53ef\u4ee5\u8fd9\u6837\necho -e "yes\\nyes" | pecl install -o -f redis\n\n# imagick\napk add imagemagick-dev\npecl install -o -f imagick <<<""\n\n# protobuf\npecl install -o -f protobuf\npecl install -o -f grpc\n\n# yaml\n# require php7\napk add yaml-dev\npecl install -o -f yaml <<<""\n\n# mongodb\npecl install -o -f mongodb\n\n# APCU\n# require php7\n# OPTIONS internal debug\npecl install -o -f apcu <<<no\n\n# AMQP\n# https://pecl.php.net/package/amqp\n# \u662f\u52a8\u6001\u7f16\u8bd1\u7684, \u8fd0\u884c\u65f6\u9700\u8981\u5b89\u88c5 rabbitmq-c\napk add rabbitmq-c-dev\npecl install -o -f amqp <<<""\n\n# swoole\n# https://pecl.php.net/package/swoole\n# Event-driven asynchronous and concurrent networking engine with high performance for PHP.\n# OPTIONS: debug/trace log, sockets, openssl, http2 -> nghttp2-dev, async-redis -> hiredis, mysqlnd\n# all no\npecl install -o -f swoole <<<""\n\napk add nghttp2-dev hiredis-dev\n# all yes except trace log\npecl install -o -f swoole < <(echo -e "no\\nyes\\nyes\\nyes\\nyes\\nyes")\n\n# memcached\n# require php7\n\n# memcache\n# php5\n')))}s.isMDXComponent=!0}}]);