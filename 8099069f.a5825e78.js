(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{328:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return p})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return o}));var n=l(2),b=l(7),r=(l(0),l(561)),c={slug:"simple-compress-algorithem",title:"\u4e00\u79cd\u7b80\u5355\u7684\u538b\u7f29\u7b97\u6cd5",author:"wener",tags:["\u7f16\u7a0b","\u7b97\u6cd5","BBVM"]},p={permalink:"/blog/simple-compress-algorithem",source:"@site/contents/story/2010/2010-04-10-\u4e00\u79cd\u7b80\u5355\u7684\u538b\u7f29\u7b97\u6cd5.md",description:"\u4f7f\u7528\u73af\u5883\uff1a\u7b80\u5355\u52a0\u5bc6\uff0c\u4f7f\u7528\u5b57\u7b26\u4e32\u7684\u8bfb\u53d6\u65b9\u5f0f\uff0c\u538b\u7f29\u6742\u9879\u6570\u636e",date:"2010-04-10T00:00:00.000Z",tags:[{label:"\u7f16\u7a0b",permalink:"/blog/tags/\u7f16\u7a0b"},{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"},{label:"BBVM",permalink:"/blog/tags/bbvm"}],title:"\u4e00\u79cd\u7b80\u5355\u7684\u538b\u7f29\u7b97\u6cd5",readingTime:2.05,truncated:!0,prevItem:{title:"PHP \u64cd\u4f5c\u4e8c\u8fdb\u5236\u6d41\uff0c\u8bfb\u53d6\u6587\u4ef6\u7ed3\u6784",permalink:"/blog/php-read-binary"}},u=[],O={rightToc:u};function o(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u4f7f\u7528\u73af\u5883\uff1a\u7b80\u5355\u52a0\u5bc6\uff0c\u4f7f\u7528\u5b57\u7b26\u4e32\u7684\u8bfb\u53d6\u65b9\u5f0f\uff0c\u538b\u7f29\u6742\u9879\u6570\u636e"),Object(r.b)("p",null,"\u57fa\u672c\u539f\u7406\uff1a\u4e5f\u5c31\u662f\u628a\u6df7\u4e71\u7684\u6570\u636e\u4e2d\u768400\u5b57\u8282\u53bb\u6389\u3002"),Object(r.b)("p",null,"\u6211\u60f3\u5230\u4f7f\u7528\u8fd9\u4e2a\u538b\u7f29\u65b9\u6cd5\u7684\u65f6\u5019\u662f\u4e3a\u4e86\u5728\u6587\u4ef6io\u5f88\u6162\u7684\u73af\u5883\u4e0b\u4e00\u6b21\u6027\u8bfb\u53d6\u8f83\u591a\u7684\u6587\u4ef6\u5185\u5bb9\uff0c\u4ece\u800c\u8fdb\u884c\u7684\u538b\u7f29\u3002\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u5b57\u7b26\u4e32\u90fd\u662f\u4ee500\u7ed3\u5c3e\u7684\uff0c\u6240\u4ee5\u8fd9\u4e2a\u538b\u7f29\u7684\u7b97\u6cd5\u53ea\u662f\u628a\u6570\u636e\u4e2d\u768400\u5b57\u8282\u53bb\u6389\u4e86\u3002\u5f53\u88ab\u5904\u7406\u7684\u6587\u4ef6\u4e2d\u5f88\u591a00\u7684\u65f6\u5019\u538b\u7f29\u7387\u8f83\u5927\u3002\u4f46\u662f\u4e0d\u9002\u5b9c\u5bf9\u6587\u672c\uff0c\u56fe\u7247\u4e4b\u7c7b\u7684\u538b\u7f29\u3002\u6ce8\u610f\uff0c\u53ea\u662f\u7b80\u5355\u7684\u538b\u7f29\uff0c\u538b\u7f29\u540e\u80fd\u591f\u7b80\u5355\u7684\u89e3\u538b\u7f29\u3002\u5728\u538b\u7f29\u666e\u901a\u6570\u636e\u7684\u65f6\u5019\uff0c\u5927\u6982\u5e73\u5747\u538b\u7f29\u7387\u80fd\u591f\u8fbe\u5230 3 \uff1a4"),Object(r.b)("p",null,"E.g. \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 90 80 29 00 78 98 00 00"),Object(r.b)("p",null,"\u8fd9\u6bb5\u6570\u636e\u88ab\u538b\u7f29\u540e\u7684\u7ed3\u679c\u662f"),Object(r.b)("p",null,"{ 00 010011 } 90 80 29 78 98\xa0 \u6ce8\u610f\u53ea\u80fd\u8868\u793a 90 80 29 00 78 98 \u8fd96\u4f4d\u6570\u636e"),Object(r.b)("p",null,"{}\u4e3a1byte\u5927\u5c0f"),Object(r.b)("p",null,"\u4e00\u770b\u8fd9\u4e2a\u5217\u5b50\u5c31\u5f88\u7b80\u5355\u4e86\u5427"),Object(r.b)("p",null,"\u7b2c\u4e00byte\u4e3a\u6807\u5fd7\u4f4d\u3002"),Object(r.b)("p",null,"\u5177\u4f53\u8bf4\u660e"),Object(r.b)("p",null,"1\xa0\xa0\xa0\xa0 \u5168\u4e3a0\u4f4d \u82e5\u6570\u636e\u5168\u4e3a00 \u5219\u6b64\u4f4d\u4e3a1"),Object(r.b)("p",null,"E.g.\xa0 00 00 00 00 00 00 =",">"," \u6807\u5fd7\u4f4d{ 10 000000 }"),Object(r.b)("p",null,"2\xa0\xa0\xa0\xa0 \u5168\u4e3a1\u4f4d \u82e5\u6570\u636e\u5168\u4e0d\u4e3a00 \u5219\u6b64\u4f4d\u4e3a1"),Object(r.b)("p",null,"E.g.\xa0 01 02 03 04 05 06\xa0 =",">"," \u6807\u5fd7\u4f4d{ 01 000000 } 01 02 03 04 05 06"),Object(r.b)("p",null,"\u6b64\u65f6\u6570\u636e\u53d8\u5927"),Object(r.b)("p",null,"3-8 \u4f4d\u8868\u793a\u8be5\u4f4d\u662f\u5426\u4e3a00 \u82e5\u662f\u5219\u4e3a 1 \u5f53 1th \u62162ed \u4e0d\u5168\u4e3a0\u65f6\uff0c\u53ef\u4ee5\u5ffd\u7565\u540e\u9762\u7684 3-8\u4f4d"),Object(r.b)("p",null,"\u6240\u4ee5 \u4e00\u4e2a\u6807\u5fd7\u4f4d\u6700\u591a\u80fd\u591f\u8868\u793a\u540e\u9762\u76846\u5b57\u8282\u6570\u636e\uff0c\u6b64\u65f6\u6d88\u9664\u4e86\u6570\u636e\u4e2d\u768400\u4f4d\uff0c\u5c31\u53ef\u4ee5\u7528\u5b57\u7b26\u4e32\u7684\u8bfb\u53d6\u65b9\u5f0f\u6765\u4e00\u6b21\u6027\u8bfb\u53d6\uff0c\u6216\u8005\u505a\u7b80\u5355\u7684\u52a0\u5bc6\u3002"),Object(r.b)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u7684\u7a0b\u5e8f\uff1a"),Object(r.b)("p",null,"\u662f\u7528\u7684\u6b65\u6b65\u9ad8\u5b66\u4e60\u673a\u7684\u4e00\u79cd\u53eb\u505aBBasic\u7684\u73af\u5883\u4e0b\u5199\u7684\uff0c\u8fd9\u4e2a\u7b97\u6cd5\u5176\u5b9e\u5c31\u662f\u4e3a\u4e86\u5e94\u4ed8\u5b83io\u6781\u5176\u7684\u6162\u7684\u6bdb\u75c5\u3002"),Object(r.b)("p",null,"\u8fd9\u4e2a\u4ee3\u7801\u6211\u4e5f\u53ea\u80fd\u8bf4\u8868\u8fbe\u7684\u662f\u90a3\u4e2a\u610f\u601d\uff0c\u5982\u679c\u7a0d\u52a0\u6539\u9020\u4e0b\uff0c\u5927\u6982\u80fd\u591f\u63d0\u901f10\u500d - 100 +\u500d\u3002"),Object(r.b)("p",null,"declare function dechex$( decVal)"),Object(r.b)("p",null,"declare function bindec( binVal$)"),Object(r.b)("p",null,"'//\u628a\u6240\u7ed9\u7684\u4e00\u6bb5\u6570\u636e\u538b\u7f29"),Object(r.b)("p",null,"'//\u6b65\u9aa4\xa0\xa0 \u6211\u5148\u8003\u8651\u662f\u5185\u5b58\u7684\u60c5\u51b5\uff0c\u4e5f\u5c31\u662f\u7ed9\u51fa\u4e00\u4e2a\u4f4d\u7f6e\u504f\u79fb\uff0c\u7136\u540e\u6328\u4e2a\u53bb\u8bfb"),Object(r.b)("p",null,"dim XDB_GetOffset, XDB_GetLen, XDB_GetStr$, XDB_PutFp, XDB_I"),Object(r.b)("p",null,"dim XDB_GetCur, XDB_AllZ, XDB_AllO"),Object(r.b)("p",null,"dim Xbd_Offset_Cur"),Object(r.b)("p",null,"dim XDB_HStr$, XDB_CStr$"),Object(r.b)("p",null,"dim XDB_HCode"),Object(r.b)("p",null,"dim XDB_GetStr_len"),Object(r.b)("p",null,"asm"),Object(r.b)("p",null,"ld int ","[ vint_XDB_GetOffset]",", 0"),Object(r.b)("p",null,"endasm"),Object(r.b)("p",null,"XDB_GetLen = 7685 - 16"),Object(r.b)("p",null,"'ab cd 00 39 09 28"),Object(r.b)("p",null,"'19 08 02 18 00 00"),Object(r.b)("p",null,"'82 10 00 28 19 00"),Object(r.b)("p",null,'open "x.txt" for binary as #1'),Object(r.b)("p",null,"XDB_GetStr_len = 0"),Object(r.b)("p",null,"XDB_HCode = 0"),Object(r.b)("p",null,'XDB_GetStr$ = ""'),Object(r.b)("p",null,'XDB_CStr$ = ""'),Object(r.b)("p",null,'XDB_HStr$ = ""'),Object(r.b)("p",null,"t = gettick()"),Object(r.b)("p",null,"while XDB_I ","<","= XDB_GetLen"),Object(r.b)("p",null,"locate( 1, 1)"),Object(r.b)("p",null,"XDB_I = XDB_I + 1"),Object(r.b)("p",null,"Xbd_Offset_Cur = XDB_I mod 6"),Object(r.b)("p",null,"if Xbd_Offset_Cur = 0 then"),Object(r.b)("p",null,"if XDB_AllZ then"),Object(r.b)("p",null,'XDB_CStr$ = ""'),Object(r.b)("p",null,"end if"),Object(r.b)("p",null,"XDB_GetStr$ = XDB_GetStr$ + chr$( bindec( XDB_AllO$ + XDB_AllZ$ +XDB_HStr$ )) + XDB_CStr$"),Object(r.b)("p",null,'XDB_HStr$ = ""'),Object(r.b)("p",null,"XDB_HCode = 0"),Object(r.b)("p",null,'XDB_CStr$ = ""'),Object(r.b)("p",null,'XDB_AllZ$ = "1"'),Object(r.b)("p",null,'XDB_AllO$ = "1"'),Object(r.b)("p",null,"XDB_GetStr_len = XDB_GetStr_len + 1"),Object(r.b)("p",null,"if XDB_GetStr_len ",">"," 4088 * 4 then"),Object(r.b)("p",null,"print XDB_I"),Object(r.b)("p",null,"put #1, XDB_GetStr$"),Object(r.b)("p",null,'XDB_GetStr$ = ""'),Object(r.b)("p",null,"end if"),Object(r.b)("p",null,"end if"),Object(r.b)("p",null,'\'print "\u7b2c\u4e8c\u6b65"'),Object(r.b)("p",null,"asm"),Object(r.b)("p",null,"ld int ","[ vint_XDB_GetCur]",", 0"),Object(r.b)("p",null,"ld int r0, ","[ vint_XDB_GetOffset]"),Object(r.b)("p",null,"ld byte ","[ vint_XDB_GetCur]",", ","[ r0 ]"),Object(r.b)("p",null,"endasm"),Object(r.b)("p",null,"'=/\u5f53\u524d\u4f4d\u4e3a\u975e0"),Object(r.b)("p",null,"if XDB_GetCur then"),Object(r.b)("p",null,'XDB_CStr$ = XDB_CStr$ + chr$( XDB_GetCur)\'"." + dechex$( XDB_GetCur)'),Object(r.b)("p",null,'XDB_HStr$ = XDB_HStr$ + "0"'),Object(r.b)("p",null,"'==//\u5168\u4e3a0\u7684\u6807\u5fd7\u4f4d"),Object(r.b)("p",null,'XDB_AllZ$ = "0"'),Object(r.b)("p",null,"'=/\u5f53\u524d\u4f4d\u4e3a0"),Object(r.b)("p",null,"else"),Object(r.b)("p",null,'XDB_HStr$ = XDB_HStr$ + "1"'),Object(r.b)("p",null,"'==//\u5168\u4e3a1\u7684\u6807\u5fd7\u4f4d"),Object(r.b)("p",null,'XDB_AllO$ = "0"'),Object(r.b)("p",null,"end if"),Object(r.b)("p",null,"XDB_GetStr_len = XDB_GetStr_len + 1"),Object(r.b)("p",null,"'==//\u4e00\u6b21\u5904\u740612\u4f4d"),Object(r.b)("p",null,"XDB_GetOffset = XDB_GetOffset + 1"),Object(r.b)("p",null,"wend"),Object(r.b)("p",null,'print "\u7528\u65f6"; gettick() - t'),Object(r.b)("p",null,"put #1, XDB_GetStr$"),Object(r.b)("p",null,'put #1, "END"'),Object(r.b)("p",null,"close #1"),Object(r.b)("p",null,"asm"),Object(r.b)("p",null,"jmp QingWuShi_XDB:"),Object(r.b)("p",null,"XDB_Compression_HCode:"),Object(r.b)("p",null,".block 1 0"),Object(r.b)("p",null,"XDB_Compression_CCode:"),Object(r.b)("p",null,".block 6 0"),Object(r.b)("p",null,"XDB_Compression_Catch:"),Object(r.b)("p",null,".block 15 0"),Object(r.b)("p",null,"XDB_Compression_Base:"),Object(r.b)("p",null,"endasm"),Object(r.b)("p",null,"asm"),Object(r.b)("p",null,"ret"),Object(r.b)("p",null,"data x bin %abcd00390928190802180000821000281900%"),Object(r.b)("p",null,"QingWuShi_XDB:"),Object(r.b)("p",null,"endasm"))}o.isMDXComponent=!0},561:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return _}));var n=l(0),b=l.n(n);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var O=b.a.createContext({}),o=function(e){var t=b.a.useContext(O),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},i=function(e){var t=o(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},a=b.a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,O=u(e,["components","mdxType","originalType","parentName"]),i=o(l),a=n,_=i["".concat(c,".").concat(a)]||i[a]||j[a]||r;return l?b.a.createElement(_,p(p({ref:t},O),{},{components:l})):b.a.createElement(_,p({ref:t},O))}));function _(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,c=new Array(r);c[0]=a;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var O=2;O<r;O++)c[O]=l[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,l)}a.displayName="MDXCreateElement"}}]);