(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1114:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return s}));var l=n(0),b=n.n(l);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,l,b=function(t,e){if(null==t)return{};var n,l,b={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var u=b.a.createContext({}),O=function(t){var e=b.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},j=function(t){var e=O(t.components);return b.a.createElement(u.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},o=b.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),j=O(n),o=l,s=j["".concat(p,".").concat(o)]||j[o]||i[o]||a;return n?b.a.createElement(s,r(r({ref:e},u),{},{components:n})):b.a.createElement(s,r({ref:e},u))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,p=new Array(a);p[0]=o;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r.mdxType="string"==typeof t?t:l,p[1]=r;for(var u=2;u<a;u++)p[u]=n[u];return b.a.createElement.apply(null,p)}return b.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},711:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return p})),n.d(e,"metadata",(function(){return r})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return O}));var l=n(3),b=n(8),a=(n(0),n(1114)),p={slug:"php-read-binary",title:"PHP \u64cd\u4f5c\u4e8c\u8fdb\u5236\u6d41\uff0c\u8bfb\u53d6\u6587\u4ef6\u7ed3\u6784",tags:["PHP","\u7f16\u7a0b","\u5e93"]},r={permalink:"/story/php-read-binary",editUrl:"https://github.com/wenerme/wener/edit/master/story/2011/2011-01-01-PHP \u64cd\u4f5c\u4e8c\u8fdb\u5236\u6d41\uff0c\u8bfb\u53d6\u6587\u4ef6\u7ed3\u6784.md",source:"@site/story/2011/2011-01-01-PHP \u64cd\u4f5c\u4e8c\u8fdb\u5236\u6d41\uff0c\u8bfb\u53d6\u6587\u4ef6\u7ed3\u6784.md",description:"\u672c\u6587\u5305\u542b\u7684\u5185\u5bb9\uff1a\u8be6\u7ec6\u7684pack\u548cunpack\u8c03\u7528\u8be6\u89e3\uff0c16\u8fdb\u5236\u6570\u5b57\u5b57\u7b26\u4e32\u4fdd\u5b58\u5230\u6587\u4ef6\uff0c\u8bfb\u53d6\u6587\u4ef6\u8fd4\u56de\u503c\uff0c\u7b49",date:"2011-01-01T00:00:00.000Z",tags:[{label:"PHP",permalink:"/story/tags/php"},{label:"\u7f16\u7a0b",permalink:"/story/tags/\u7f16\u7a0b"},{label:"\u5e93",permalink:"/story/tags/\u5e93"}],title:"PHP \u64cd\u4f5c\u4e8c\u8fdb\u5236\u6d41\uff0c\u8bfb\u53d6\u6587\u4ef6\u7ed3\u6784",readingTime:2.4,truncated:!0,prevItem:{title:"2011\u5e74\u7684\u7b2c\u4e00\u5929\uff0c\u4eca\u5929\u5f00\u901a\u535a\u5ba2\u4e86",permalink:"/story/start-blogging"},nextItem:{title:"\u4e00\u79cd\u7b80\u5355\u7684\u538b\u7f29\u7b97\u6cd5",permalink:"/story/simple-compress-algorithem"}},c=[],u={toc:c};function O(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(a.b)("wrapper",Object(l.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u672c\u6587\u5305\u542b\u7684\u5185\u5bb9\uff1a\u8be6\u7ec6\u7684pack\u548cunpack\u8c03\u7528\u8be6\u89e3\uff0c16\u8fdb\u5236\u6570\u5b57\u5b57\u7b26\u4e32\u4fdd\u5b58\u5230\u6587\u4ef6\uff0c\u8bfb\u53d6\u6587\u4ef6\u8fd4\u56de\u503c\uff0c\u7b49"),Object(a.b)("p",null,"\u672c\u6587\u5305\u542b\u7684\u5185\u5bb9\uff1a\u8be6\u7ec6\u7684pack\u548cunpack\u8c03\u7528\u8be6\u89e3\uff0c16\u8fdb\u5236\u6570\u5b57\u5b57\u7b26\u4e32\u4fdd\u5b58\u5230\u6587\u4ef6\uff0c\u8bfb\u53d6\u6587\u4ef6\u8fd4\u56de\u503c\uff0c\u7b49\u5305\u542b\u5b9e\u4f8b\uff1a\u8bfb\u53d6"),Object(a.b)("p",null,"BMP\u56fe\u7247\u4fe1\u606f\u51fd\u6570\uff1a"),Object(a.b)("p",null,"//\u5c0616\u8fdb\u5236\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6b64\u503c\u7684\u5b57\u7b26\u4e32\u3002"),Object(a.b)("p",null,"function hexstr_str( $hetstr)"),Object(a.b)("p",null,"//\u4e24\u4e2a\u7248\u672c\uff0c\u4e00\u4e2a\u662fpack\u5b9e\u73b0\uff0c\u4e00\u4e2a\u662fchr\u65b9\u6cd5\u5b9e\u73b0"),Object(a.b)("p",null,"\u66fe\u7ecf\u4e3a\u4e86\u5904\u7406\u6e90\u6587\u4ef6\u5c31\u767e\u5ea6\u4e86\u4e0bphp\xa02\n\u8fdb\u5236\u6587\u4ef6\uff0c\u7ed3\u679c\u51fa\u6765\u7684\u8c8c\u4f3c\u90fd\u662f\u4e00\u4e2a\u4eba\u5199\u7684\uff0c\u522b\u4eba\u590d\u5236\u548c\u8f6c\u8f7d\u7684\uff0c\u800c\u4e14\u6211\u4e5f\u504f\u504f\u6ca1\u6709\u770b\u61c2\u3002\u633a\u90c1\u95f7\u7684\u3002\u56e0\u6b64\u5c31\u6709\u4e86\u4e0b\u6587\uff0c\u6211\u5c31\u81ea\u5df1\u641e\u6253\uff0c\u7814\u7a76\u7814\u7a76\u3002Php\u5904\u7406"),Object(a.b)("p",null,"2\u8fdb\u5236\u65e0\u975e\u5c31\u662f\u4f7f\u7528pack\u548cunpack\uff0c\u5728\u540e\u6587\u8bb2\u8bb2\u5176\u4ed6\u7684\u529e\u6cd5\u3002"),Object(a.b)("p",null,"\u51fd\u6570\u539f\u578b\uff1a"),Object(a.b)("p",null,"string pack (\xa0string\xa0$format\xa0[, ",Object(a.b)("a",{parentName:"p",href:"http://cn2.php.net/manual/en/language.pseudo-types.php#language.types.mixed"},"mixed")," $args\xa0[, ",Object(a.b)("a",{parentName:"p",href:"http://cn2.php.net/manual/en/language.pseudo-types.php#language.types.mixed"},"mixed")," $...\xa0]]\xa0)"),Object(a.b)("p",null,"array unpack (\xa0string\xa0$format\xa0,\xa0string\xa0$data\xa0)"),Object(a.b)("p",null,"Pack\u662f\u8bb2\u6240\u7ed9\u7684\u53c2\u6570\u66f4\u5177\u6240\u7ed9\u7684\u683c\u5f0f\u6253\u5305\u62102\u8fdb\u5236\u5b57\u7b26\u4e32\u3002\u624b\u518c\u4e0a\u8bf4\u8fd9\u4e2a\u51fd\u6570\u548cPerl\u7684\u57fa\u672c\u76f8\u540c\uff0c\u53ea\u662f\u5728\u683c\u5f0f\u4e0a\u53bb\u6389\u4e86s,u\u7b49\u3002\u8fd9\u91cc\u6709\u4e00\u70b9\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7\u7684\u6570\u7531pack\u8f6c\u6362\u51fa\u6765\u7684\u7ed3\u679c\u76f8\u540c\uff0c\u4f46\u662f\u4f1a\u5f71\u54cdunpack\u7684\u7ed3\u679c\u3002"),Object(a.b)("p",null,"\u5148\u770b\u4e00\u4e2a\u5c0f\u5c0f\u7684\u5b9e\u4f8b\uff1a"),Object(a.b)("p",null,'$data = pack("N", 0x12345);'),Object(a.b)("p",null,"var_dump($data);"),Object(a.b)("p",null,"$fn = 'out.text';"),Object(a.b)("p",null,"$fp = fopen($fn,'w');"),Object(a.b)("p",null,"fwrite($fp,$data);"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-899.png"},Object(a.b)("img",{parentName:"a",src:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-899.png",alt:null,title:"php\u5904\u74062\u8fdb\u5236\u6587\u4ef6-899"}))),Object(a.b)("p",null,"\u7ed3\u679c\u5f88\u660e\u4e86\uff0c\u7528\u6cd5\u5f88\u7b80\u5355\u3002"),Object(a.b)("p",null,"\u5173\u4e8eN\u6a21\u5f0f\uff1a"),Object(a.b)("p",null,"unsigned\xa0long\xa0(always\xa032\xa0bit,\xa0big\xa0endian\xa0byte\xa0order)"),Object(a.b)("p",null,"\u65e0\u7b26\u53f7\u957f\u6574\u578b\uff0c\u603b\u662f\u8fd4\u56de32\u4f4d"),Object(a.b)("p",null,"\u683c\u5f0f\uff1a"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"mode"),Object(a.b)("th",{parentName:"tr",align:null},"\u8bf4\u561b"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"a"),Object(a.b)("td",{parentName:"tr",align:null},"\u5c06\u5b57\u7b26\u4e32\u7a7a\u767d\u4ee5 NULL \u5b57\u7b26\u586b\u6ee1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"A"),Object(a.b)("td",{parentName:"tr",align:null},"\u5c06\u5b57\u7b26\u4e32\u7a7a\u767d\u4ee5 SPACE \u5b57\u7b26 (\u7a7a\u683c) \u586b\u6ee1")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"h"),Object(a.b)("td",{parentName:"tr",align:null},"\u5341\u516d\u8fdb\u4f4d\u5b57\u7b26\u4e32\uff0c\u4f4e\u4f4d\u5728\u524d")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"H"),Object(a.b)("td",{parentName:"tr",align:null},"\u5341\u516d\u8fdb\u4f4d\u5b57\u7b26\u4e32\uff0c\u9ad8\u4f4d\u5728\u524d")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"c"),Object(a.b)("td",{parentName:"tr",align:null},"\u6709\u53f7\u5b57\u7b26")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"C"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u5b57\u7b26")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"s"),Object(a.b)("td",{parentName:"tr",align:null},"\u6709\u53f7\u77ed\u6574\u6570 (\u5341\u516d\u4f4d\uff0c\u4f9d\u8ba1\u7b97\u673a\u7684\u4f4d\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"S"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u77ed\u6574\u6570 (\u5341\u516d\u4f4d\uff0c\u4f9d\u8ba1\u7b97\u673a\u7684\u4f4d\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"n"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u77ed\u6574\u6570 (\u5341\u516d\u4f4d, \u9ad8\u4f4d\u5728\u540e\u7684\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"v"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u77ed\u6574\u6570 (\u5341\u516d\u4f4d, \u4f4e\u4f4d\u5728\u540e\u7684\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"i"),Object(a.b)("td",{parentName:"tr",align:null},"\u6709\u53f7\u6574\u6570 (\u4f9d\u8ba1\u7b97\u673a\u7684\u987a\u5e8f\u53ca\u8303\u56f4)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"I"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u6574\u6570 (\u4f9d\u8ba1\u7b97\u673a\u7684\u987a\u5e8f\u53ca\u8303\u56f4)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"l"),Object(a.b)("td",{parentName:"tr",align:null},"\u6709\u53f7\u957f\u6574\u6570 (32\u4f4d\uff0c\u4f9d\u8ba1\u7b97\u673a\u7684\u4f4d\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"L"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u957f\u6574\u6570 (32\u4f4d\uff0c\u4f9d\u8ba1\u7b97\u673a\u7684\u4f4d\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"N"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u77ed\u6574\u6570 (32\u4f4d, \u9ad8\u4f4d\u5728\u540e\u7684\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"V"),Object(a.b)("td",{parentName:"tr",align:null},"\u65e0\u53f7\u77ed\u6574\u6570 (32\u4f4d, \u4f4e\u4f4d\u5728\u540e\u7684\u987a\u5e8f)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"f"),Object(a.b)("td",{parentName:"tr",align:null},"\u5355\u7cbe\u786e\u6d6e\u70b9\u6570 (\u4f9d\u8ba1\u7b97\u673a\u7684\u8303\u56f4)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"d"),Object(a.b)("td",{parentName:"tr",align:null},"\u500d\u7cbe\u786e\u6d6e\u70b9\u6570 (\u4f9d\u8ba1\u7b97\u673a\u7684\u8303\u56f4)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"x"),Object(a.b)("td",{parentName:"tr",align:null},"\u7a7a\u4f4d")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"X"),Object(a.b)("td",{parentName:"tr",align:null},"\u5012\u56de\u4e00\u4f4d")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"@"),Object(a.b)("td",{parentName:"tr",align:null},"\u586b\u5165 NULL \u5b57\u7b26\u5230\u7edd\u5bf9\u4f4d\u7f6e")))),Object(a.b)("p",null,"\u5173\u4e8epack\u7684\u8c03\u7528\u65b9\u6cd5\u3002"),Object(a.b)("p",null,"\u56e0\u4e3apack\u662f\u652f\u6301\u591a\u4e2a\u4e0d\u5b9a\u4e2a\u6570\u53c2\u6570\u7684\uff0c\u6240\u4ee5\u6bcf\u4e2a\u53c2\u6570\u90fd\u8981\u6307\u5b9a\u4e00\u4e2a\u8f6c\u6362\u7684\u6a21\u5f0f\u3002"),Object(a.b)("p",null,'$data = pack("Nn", 0x12345, 0x12345);'),Object(a.b)("p",null,"\u5f53\u4f60\u53c2\u6570\u7684\u4e2a\u6570\u591a\u4e8e\u683c\u5f0f\u7684\u4e2a\u6570\u65f6\uff0c\u51fa\u73b0\uff1a"),Object(a.b)("p",null,"Warning:\xa0pack()\xa0[",Object(a.b)("a",{parentName:"p",href:"http://localhost/lab/function.pack"},"function.pack"),"]:\xa01\xa0arguments\xa0unused\xa0in E:\\host\\htdocs\\Lab\\Binary.php on\xa0line 4"),Object(a.b)("p",null,"Warning\u7ea7\u9519\u8bef\u3002"),Object(a.b)("p",null,"\u8fd9\u4e2a\u8fd8\u6709\u4e2a\u6ce8\u610f\u7684\u662f*\u6a21\u5f0f\u3002"),Object(a.b)("p",null,'$data = pack("Nn*", 0x12345, 0x12345, 0x12345);',"\\","\u6700\u540e\u4e24\u4e2a\u662f16\u4f4d\uff0c\u6240\u4ee5\u8f93\u51fa\u91cc\u9762\u662f2\u5b57\u8282"),Object(a.b)("p",null,"var_dump($data);"),Object(a.b)("p",null,"$fn = 'out.text';"),Object(a.b)("p",null,"$fp = fopen($fn,'w');"),Object(a.b)("p",null,"fwrite($fp,$data);"),Object(a.b)("p",null,"\u8f93\u51fa\uff1a"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-1934.png"},Object(a.b)("img",{parentName:"a",src:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-1934.png",alt:null,title:"php\u5904\u74062\u8fdb\u5236\u6587\u4ef6-1934"}))),Object(a.b)("p",null,"\u770b\u51fa\u6765\u4e86\u6700\u540e\u4e24\u4e2a\u662f\u4e00\u6837\u7684\u3002\u56e0\u4e3a\u624b\u518c\u4e0a\u6ca1\u8bf4\uff0c\u4f46\u662f\u6211\u731c\u6d4b*\u6a21\u5f0f\u5c31\u662f\u201c\u540c\u4e0a\u201d\u7684\u610f\u601d\u5427\u3002"),Object(a.b)("p",null,"\u57fa\u7840\u77e5\u8bc6\uff1a"),Object(a.b)("p",null,"1\u5b57\u8282 =\xa0\xa08\u4f4d = 2^8 =\xa0\xa0256"),Object(a.b)("p",null,"\u4e00\u4e2agb2312\u5b57\u7b262\u5b57\u8282\uff0c\u4e00\u4e2aascii\u5b57\u7b261\u5b57\u8282\u3002"),Object(a.b)("p",null,"\u5173\u4e8e\u6a21\u5f0f\u7684\u9009\u62e9\u90fd\u7531\u4e2a\u4eba\u4f7f\u7528\u7684\u60c5\u51b5\u51b3\u5b9a\uff0c\u8fd9\u91cc\u6211\u7ed9\u51fa\u6211\u81ea\u5df1\u5199\u7684\u4e00\u4e2a\u51fd\u6570\u3002"),Object(a.b)("p",null,"//\u5c0616\u8fdb\u5236\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6b64\u503c\u7684\u5b57\u7b26\u4e32\u3002"),Object(a.b)("p",null,"function hexstr_str( $hetstr)"),Object(a.b)("p",null," {"),Object(a.b)("p",null," $re = '';"),Object(a.b)("p",null," for( $i = 0;\xa0isset( $hetstr","[ $i + 4]","); $i += 4)"),Object(a.b)("p",null," //echo\xa0substr(\xa0$hetstr,\xa0$i,\xa02);"),Object(a.b)("p",null," $re .= pack('n',\xa0( '0x'.substr( $hetstr, $i, 4))\xa0* 1);"),Object(a.b)("p",null," $len = strlen( $hetstr)\xa0- $i;"),Object(a.b)("p",null," $hetstr = '0x'.substr( $hetstr, $i, strlen( $hetstr)\xa0- $i);"),Object(a.b)("p",null," $hetstr .=\xa0( $len % 2)\xa0? '0':'';"),Object(a.b)("p",null," $format = $len ","<"," 3 ? 'v': 'n';"),Object(a.b)("p",null," $re .= pack( $format, $hetstr * 1);"),Object(a.b)("p",null," return $re;"),Object(a.b)("p",null," }"),Object(a.b)("p",null,"\u6d4b\u8bd5\uff1a"),Object(a.b)("p",null,"$data = hexstr_str( 'ABCDc');"),Object(a.b)("p",null,"\u8f93\u51fa\uff1a"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-2766.png"},Object(a.b)("img",{parentName:"a",src:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-2766.png",alt:null,title:"php\u5904\u74062\u8fdb\u5236\u6587\u4ef6-2766"}))),Object(a.b)("p",null,"\u6709\u70b9\u9057\u61be\u7684\u662f\u5b83\u90fd\u8981\u75280\u6765\u8865\u6ee116\u4f4d\u3002\u4e0d\u8fc7\u603b\u7684\u6765\u8bf4\u8fd8\u662f\u5f88\u4e0d\u9519\u7684\u5566\u3002"),Object(a.b)("p",null,"Unpack\u7684\u4f7f\u7528\uff0c\u6211\u89c9\u5f97\u7528\u7740\u8fd9\u4e2a\u611f\u89c9\u633a\u63ea\u5fc3\u7684\u3002"),Object(a.b)("p",null,"unpack() works\xa0slightly\xa0different\xa0from\xa0Perl\xa0as\xa0the\xa0unpacked\xa0data\xa0is\xa0stored\xa0in\xa0an\xa0associative\xa0array.\xa0To\xa0accomplish\xa0this\xa0you\xa0have\xa0to\xa0name\xa0the\xa0different\xa0format\xa0codes\xa0and\xa0separate\xa0them\xa0by\xa0a\xa0slash\xa0/."),Object(a.b)("p",null,"Unpack\u7684\u8fd0\u884c\u548cPerl\u7684\u6709\u4e9b\u5fae\u4e0d\u540c\uff0c\u5728php\u4e2dunpack\u7684\u7ed3\u679c\u662f\u7531\u4e00\u4e2a\u6570\u7ec4\u8fd4\u56de\u7684\u3002\u56e0\u6b64\u4f60\u9700\u8981\u63a5\u53d7\u8fd9\u4e9b\u6570\u636e\u5c31\u8981\u7ed9\u683c\u5f0f\u547d\u540d\uff0c\u4ee5/\u5206\u9694\u3002"),Object(a.b)("p",null,"\u624b\u518c\u4e0a\u7684\u5b9e\u4f8b\uff1b"),Object(a.b)("p",null,"<","?php"),Object(a.b)("p",null,'$array = unpack("c2chars/nint", $binarydata);'),Object(a.b)("p",null,"?",">"),Object(a.b)("p",null,"\u770b\u4e00\u4e2a\u6211\u4e2a\u4eba\u7684\u8c03\u7528\u5b9e\u4f8b\uff1a"),Object(a.b)("p",null,"$data = pack(\"n\",\xa0('0x'.'abc' )\xa0* 1);"),Object(a.b)("p",null,"$data = hexstr_str( 'ABCDc');"),Object(a.b)("p",null,"$s = $data;"),Object(a.b)("p",null,'$array = unpack("Nwen/n2stort", $s.$s);'),Object(a.b)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),Object(a.b)("p",null,"array(3)\xa0{"),Object(a.b)("p",null," ",'["wen"]',"=",">"),Object(a.b)("p",null," int(-1412579328)"),Object(a.b)("p",null," ",'["stort1"]',"=",">"),Object(a.b)("p",null," int(43981)"),Object(a.b)("p",null," ",'["stort2"]',"=",">"),Object(a.b)("p",null," int(49152)"),Object(a.b)("p",null,"}"),Object(a.b)("p",null,"\u4e0a\u5f0f\u7ed3\u679c\u4e5f\u5c31\u662f"),Object(a.b)("p",null,"wen:abcdc000"),Object(a.b)("p",null,"stort1:abcd"),Object(a.b)("p",null,"stort2:c000"),Object(a.b)("p",null,"\u770b\u7740\u8fd9\u6837\u7684\u7ed3\u679c\u548c\u8f93\u5165\u7684\u683c\u5f0f\u6211\u89c9\u5f97\u5f88\u63ea\u5fc3\u7684\u3002\u4e0d\u8fc7\u8fd9\u91cc\u8fd8\u662f\u6709\u70b9\u597d\u5904\u7684\uff0c\u8fd9\u4e2a\u6211\u4eec\u53ef\u4ee5\u683c\u5f0f\u5316\u8f93\u51fa\u4e00\u4e2a\u6587\u4ef6\u7684\u5934\u4fe1\u606f\u4ec0\u4e48\u7684\u3002"),Object(a.b)("p",null,"\u8be6\u7ec6\u8bb2\u8bb2uppack\u7684\u683c\u5f0f\u548c\u8f93\u5165\u7684\u5173\u7cfb\u3002"),Object(a.b)("p",null,'"Nwen/n2stort"'),Object(a.b)("p",null,"\u5373\u7b2c\u4e00\u4e2a\u89e3\u6790\u4ee5N\u4e3a\u683c\u5f0f\uff0c\u4ee5wen\u4e3a\u540d\u5b57\u3002"),Object(a.b)("p",null," \u7b2c\u4e8c\u4e2a\u89e3\u6790\u4ee5n\u4e3a\u683c\u5f0f\u89e3\u6790\u4e24\u6b21\uff0c\u4ee5short\u4e3a\u540d\u5b57\u3002"),Object(a.b)("p",null,"\u751f\u6210\u7684short\u7684\u540d\u5b57\u662f\u4ee5short1\uff0cshort2\uff0c\u2026\u2026shortn\u8fd9\u6837\u7684\u5f62\u5f0f\u589e\u957f\u7684\u3002"),Object(a.b)("p",null,"\u89e3\u6790\u7684\u65b9\u6cd5\uff1a"),Object(a.b)("p",null,"N\uff0c\u5148\u5728\u8f93\u5165\uff08$s.$s\uff09\u4e2d\u8bfb\u516532\u4f4d\u957f\uff0c\u53734\u5b57\u8282\u3002\u7136\u540e\u518d\u7528N\u8f6c\u6362\uff0c\u6b64\u65f6\u6307\u5411$s.$s\u6307\u9488\u7684\u4f4d\u7f6e\u5df2\u7ecf\u5230\u4e864\u4e86\uff0c\u7b2c\u4e00\u4e2a$s\u5df2\u7ecf\u8bfb\u5b8c\u4e86\uff0c\u56e0\u6b64\u8981\u662f\u8f93\u5165\u662f$s\u7684\u8bdd\u4f1a\u62a5\u9519\uff1a"),Object(a.b)("p",null,"Warning:\xa0unpack()\xa0[",Object(a.b)("a",{parentName:"p",href:"http://localhost/lab/function.unpack"},"function.unpack"),"]:\xa0Type\xa0n:\xa0not\xa0enough\xa0input,\xa0need\xa02,\xa0have\xa00\xa0in E:\\host\\htdocs\\Lab\\Binary.php on\xa0line 7"),Object(a.b)("p",null,"bool(false)"),Object(a.b)("p",null,"\u6b64\u65f6\u7684\u8fd4\u56de\u503c\u4e3afalse\u3002"),Object(a.b)("p",null,"\u5728\u89e3\u6790\u5b8c\u7b2c\u4e00\u4e2aN\u540e\u9047\u5230\u4e86\u201c/\u201d\u8fdb\u5165\u4e0b\u4e00\u7ec4\u7684\u89e3\u6790\uff0c\u89e3\u6790\u7684\u683c\u5f0f\u4e3an\uff0c\u67092\u7ec4\uff0c\u540d\u5b57\u4e3ashort"),Object(a.b)("p",null,"\u6240\u4ee5short1\u4e3a\u8f93\u5165\u7684\u7b2c4-6\u89e3\u6790\u7684\u7ed3\u679c\uff0c\u800cshort2\u4e3a6-8\u7684\u7ed3\u679c\u3002\u90fd\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002"),Object(a.b)("p",null,"\u8fd9\u6837\u770b\u6765\u4e5f\u4e0d\u662f\u5f88\u96be\u561b\u662f\u5427\u3002"),Object(a.b)("p",null,"\u4e2a\u4eba\u65b9\u6cd5\uff1a"),Object(a.b)("p",null,"Perl\u601d\u60f3\u4e2d\u6709\u4e00\u6761\u662f\uff1a"),Object(a.b)("p",null,"There's More Than One Way To Do It."),Object(a.b)("p",null,"\u6211\u4e5f\u89c9\u5f97\u5982\u6b64\u3002"),Object(a.b)("p",null,"Php\u4e2d\u6709\u4e2a\u51fd\u6570\u53eb\u505a"),Object(a.b)("p",null,"String chr(\xa0int\xa0$ascii\xa0)"),Object(a.b)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b57\u8282\uff0c\u4ee5ascii\u503c\u4e3a\u53c2\u6570\u3002"),Object(a.b)("p",null,"\u539f\u672c\u7684ascii\u53ea\u6709127\u7684\uff0c\u4f46\u662f\u540e\u6765\u6269\u5c55\u5230\u4e86255\u52a0\u4e0a0\u90a3\u5c31\u662f256  \u5f88\u597d\xa0\u8fd9\u6837\u5c31\u90fd\u80fd\u8868\u793a\u4e86\u3002"),Object(a.b)("p",null,"\u628a\u4e0a\u9762\u90a3\u4e2a\u51fd\u6570\u7a0d\u5fae\u6539\u9020\u4e00\u4e0b\u5c31\u662f\uff1a"),Object(a.b)("p",null,"//\u5c0616\u8fdb\u5236\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6b64\u503c\u7684\u5b57\u7b26\u4e32\u3002"),Object(a.b)("p",null,"function hexstr_str( $hexstr)"),Object(a.b)("p",null,"{"),Object(a.b)("p",null," $re = '';"),Object(a.b)("p",null," for( $i = 0;\xa0isset( $hexstr","[ $i +1]","); $i += 2)"),Object(a.b)("p",null," $re .= chr(\xa0('0x'.$hexstr","[ $i]",".$hexstr","[ $i + 1]",")\xa0* 1);"),Object(a.b)("p",null," if( strlen( $hexstr)\xa0",">"," $i)"),Object(a.b)("p",null," $re .= chr(\xa0('0x'.$hexstr","[ $i]",".'0')\xa0* 1);"),Object(a.b)("p",null," return $re;"),Object(a.b)("p",null,"}"),Object(a.b)("p",null,"\u4ee3\u7801\u7b80\u6d01\u4e86\u5f88\u591a\u554a\u3002\u770b\u8d77\u6765\u987a\u773c\u591a\u4e86\u3002"),Object(a.b)("p",null,"\u7f6e\u4e8e\u6211\u4e3a\u5565\u7814\u7a76\u8fd9\u4e2a\u73a9\u610f\u513f\uff0c\u6211\u6700\u5f00\u59cb\u4e5f\u5c31\u662f\u4e3a\u4e86\u7528\u5566\u8bfb\u53d6BMP\u6e90\u6587\u4ef6\u7684\u3002"),Object(a.b)("p",null,"\u8fd9\u91cc\u6211\u4eec\u6765\u7b80\u5355\u5199\u4e2a\u8bfb\u53d6BMP\u5934\u4fe1\u606f\u7684\u51fd\u6570\u3002"),Object(a.b)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u662f\u4ee524/32\u4f4d\u56fe\u4e3e\u4f8b\uff0c16/8/2\u4f4d\u4f4d\u56fe\u5728\u8fd9\u91cc\u53ef\u80fd\u884c\u4e0d\u901a\u7684\uff0c\u56e0\u4e3a\u6570\u636e\u7ed3\u6784\u4e0d\u540c\u3002"),Object(a.b)("p",null,"BMP\u6587\u4ef6\u7ed3\u6784\uff1a"),Object(a.b)("p",null,"Begin"),Object(a.b)("p",null,"//\u6587\u4ef6\u5934"),Object(a.b)("p",null,' section "BMP\xa0File\xa0Header"'),Object(a.b)("p",null,"  read-only\xa0char","[2]",' "BMP_ID"  //\xa000'),Object(a.b)("p",null,'  uint32 "File\xa0size"    //\xa002'),Object(a.b)("p",null,'  uint32 "Reserved"    //\xa006'),Object(a.b)("p",null,'  uint32\xa0\xa0"ImageDataOffset"   //\xa00A'),Object(a.b)("p",null," endsection"),Object(a.b)("p",null,"//\u4fe1\u606f\u5934"),Object(a.b)("p",null,' section "BMP\xa0Info\xa0Header"'),Object(a.b)("p",null,'  uint32 "HeaderSize"    //\xa00E'),Object(a.b)("p",null,'  uint32 "Width"     //\xa012'),Object(a.b)("p",null,'  uint32 "Height"    //\xa016'),Object(a.b)("p",null,'  uint16 "Planes"    //\xa01A'),Object(a.b)("p",null,'  uint16 "BPP"     //\xa01C'),Object(a.b)("p",null,'  uint32 "CompessionMethod"   //\xa01E'),Object(a.b)("p",null,'  uint32 "ImageSize"    //\xa022'),Object(a.b)("p",null,'  uint32 "XPixelsPerMeter"   //\xa026'),Object(a.b)("p",null,'  uint32 "YPixelsPerMeter"   //\xa02A'),Object(a.b)("p",null,'  uint32 "PaletteSize"    //\xa02E'),Object(a.b)("p",null,'  uint32 "ColorsImportant"   //\xa032'),Object(a.b)("p",null," endsection"),Object(a.b)("p",null,"//\u8c03\u8272\u677f\u4fe1\u606f"),Object(a.b)("p",null,' section "Palette(If\xa0PaletteSize=0\xa0then\xa0no\xa0palette)"'),Object(a.b)("p",null,"  numbering\xa00"),Object(a.b)("p",null,"  {"),Object(a.b)("p",null,'   byte\xa0"B',"[~]",'"'),Object(a.b)("p",null,'   byte\xa0"G',"[~]",'"'),Object(a.b)("p",null,'   byte\xa0"R',"[~]",'"'),Object(a.b)("p",null,'   byte\xa0"A',"[~]",'"'),Object(a.b)("p",null,"  }\xa0","[PaletteSize]"),Object(a.b)("p",null," endsection"),Object(a.b)("p",null,"end"),Object(a.b)("p",null,"\u5b9e\u73b0\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(a.b)("p",null,"$data = file_get_contents( 'Wener.bmp');"),Object(a.b)("p",null,'$array = unpack("nBMP_ID/V\u6587\u4ef6\u5927\u5c0f/V\u4fdd\u7559\u5b57/V\u56fe\u7247\u4fe1\u606f\u504f\u79fb/V\u5934\u5927\u5c0f/V\u5bbd/V\u9ad8/vPlanes/vBPP/V\u538b\u7f29\u65b9\u6cd5/V\u56fe\u7247\u5927\u5c0f/V\u6a2a\u8f74\u4e0a\u6bcf\u50cf\u7d20\u5bbd/V\u7ad6\u8f74\u4e0a\u6bcf\u50cf\u7d20\u5bbd/V\u8c03\u8272\u677f\u5927\u5c0f/V\u91cd\u8981\u7684\u989c\u8272", $data);'),Object(a.b)("p",null,"echo '","<","pre",">","';"),Object(a.b)("p",null,"var_dump( $array);"),Object(a.b)("p",null,"foreach( $array as $k =",">"," $v)"),Object(a.b)("p",null," echo $k,':',( $v),'","<","br",">","';"),Object(a.b)("p",null,"\u8bf7\u66f4\u6539\u4e3a\u4f60\u81ea\u5df1\u7684\u56fe\u7247\u5730\u5740\u540e\u6d4b\u8bd5\u3002\u6211\u7684\u8f93\u5165\u5982\u4e0b\uff1a"),Object(a.b)("p",null,"BMP_ID:16973"),Object(a.b)("p",null,"\u6587\u4ef6\u5927\u5c0f:307254"),Object(a.b)("p",null,"\u4fdd\u7559\u5b57:0"),Object(a.b)("p",null,"\u56fe\u7247\u4fe1\u606f\u504f\u79fb:54"),Object(a.b)("p",null,"\u5934\u5927\u5c0f:40"),Object(a.b)("p",null,"\u5bbd:240"),Object(a.b)("p",null,"\u9ad8:320"),Object(a.b)("p",null,"Planes:1"),Object(a.b)("p",null,"BPP:32"),Object(a.b)("p",null,"\u538b\u7f29\u65b9\u6cd5:0"),Object(a.b)("p",null,"\u56fe\u7247\u5927\u5c0f:307200"),Object(a.b)("p",null,"\u6a2a\u8f74\u4e0a\u6bcf\u50cf\u7d20\u5bbd:0"),Object(a.b)("p",null,"\u7ad6\u8f74\u4e0a\u6bcf\u50cf\u7d20\u5bbd:0"),Object(a.b)("p",null,"\u8c03\u8272\u677f\u5927\u5c0f:0"),Object(a.b)("p",null,"\u91cd\u8981\u7684\u989c\u8272:0"),Object(a.b)("p",null,"\u6211\u7684\u6d4b\u8bd5\u6587\u4ef6\uff1a"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-6007.png"},Object(a.b)("img",{parentName:"a",src:"http://www.wener.me/wp-content/uploads/2011/01/php%E5%A4%84%E7%90%862%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6-6007-225x300.png",alt:null,title:"php\u5904\u74062\u8fdb\u5236\u6587\u4ef6-6007"}))),Object(a.b)("p",null,"\u603b\u7ed3\uff1a"),Object(a.b)("p",null,"\u603b\u7684\uff0c\u6765\u8bf4\uff0cphp\u7684\u8fd9\u4e24\u4e2a\u51fd\u6570\u65e0\u7591\u662f\u5f88\u5f3a\u5927\u7684\u3002\u7528\u6765\u5206\u6790\u6587\u4ef6\u4e5f\u5f88\u597d\u7528\u3002"),Object(a.b)("p",null,"\u6216\u8bb8\u4e0d\u8db3\u7684\u5c31\u662f\u7f3a\u5c11\u8fd9\u65b9\u9762\u7684\u6848\u4f8b\u5427\uff0c\u6ca1\u89c1\u5230\u5f88\u591a\u4eba\u7528\u8fc7\u8fd9\u4e2a\u3002"),Object(a.b)("p",null,"\u4ee5\u540e\u81ea\u5df1\u5b66\u4e60\u6587\u4ef6\u7684\u7ed3\u6784\u4e5f\u4f1a\u5e38\u5e38\u7528\u5230\u8fd9\u4e2a\u51fd\u6570\uff0c\u6709\u65f6\u5019\u89c9\u5f97unpack\u6bd4pack\u66f4\u6709\u9b45\u529b\u3002\u5173\u4e8e\u66f4\u8be6\u7ec6\u7684BMP\u6587\u4ef6\u7ed3\u6784\u548c\u4fe1\u606f\u7684\u83b7\u53d6\u6211\u4f1a\u53e6\u5916\u5199\u4e00\u7bc7\u6587\u7ae0\u7684\u3002\u8fd9\u7bc7\u53ea\u662f\u7565\u5fae\u7684\u6d89\u53ca\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u4f8b\u5b50\u800c\u5df2\u3002\u6211\u8fd8\u662f\u89c9\u5f97"),Object(a.b)("p",null,"Php\u5904\u74062\u8fdb\u5236\u6d41\u7684\u9b45\u529b\u662f\u975e\u5e38\u5f3a\u5927\u7684\u3002"),Object(a.b)("p",null,"\u7f6e\u4e8e\u5efa\u7acb\u5728\u8fd9\u4e2a\u4e4b\u4e0a\u5199\u66f4\u591a\u7684\u8fd0\u7528\uff08\u52a0\u5bc6\uff0c\u534f\u8bae\uff0c\u7834\u89e3\uff0c\u83b7\u53d6\u6587\u4ef6\u4fe1\u606f\uff09\u4ec0\u4e48\u7684\u5c31\u770b\u4e2a\u4eba\u53d1\u6325\u4e86\u3002"))}O.isMDXComponent=!0}}]);