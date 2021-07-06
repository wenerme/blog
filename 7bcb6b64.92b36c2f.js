(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||a;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},580:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(8),a=(n(0),n(1114)),o={title:"Ionic"},c={unversionedId:"web/framework/ionic",id:"web/framework/ionic",isDocsHomePage:!1,title:"Ionic",description:"- Codepen Ionic",source:"@site/notes/web/framework/ionic.md",slug:"/web/framework/ionic",permalink:"/notes/web/framework/ionic",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/framework/ionic.md",version:"current",sidebar:"docs",previous:{title:"Electron",permalink:"/notes/web/framework/electron"},next:{title:"NextJS Cookbook",permalink:"/notes/web/framework/nextjs-cookbook"}},l=[{value:"FAQ",id:"faq",children:[{value:"ISSUES",id:"issues",children:[]},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u6807",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u6807",children:[]},{value:"No provider for NavController",id:"no-provider-for-navcontroller",children:[]},{value:"\u6dfb\u52a0\u9875\u9762",id:"\u6dfb\u52a0\u9875\u9762",children:[]},{value:"\u8bbe\u7f6e\u6807\u9898",id:"\u8bbe\u7f6e\u6807\u9898",children:[]},{value:"\u8def\u7531",id:"\u8def\u7531",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Codepen ",Object(a.b)("a",{parentName:"li",href:"http://codepen.io/ionic/pens/public/"},"Ionic")),Object(a.b)("li",{parentName:"ul"},"Plugins",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/xu-li/cordova-plugin-wechat"},"cordova-plugin-wechat")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/yarnpkg/yarn/issues/648"},"https://github.com/yarnpkg/yarn/issues/648"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\nyarn global add ionic\n# \u786e\u4fdd ionic \u5728\u8def\u5f84\u4e0b\nexport PATH=\"$(yarn global bin):$PATH\"\n\n# \u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e web \u7684 tab \u5207\u6362 app\n# -s \u4f7f\u7528 SCSS\nionic start app-demo tabs\ncd app-demo\nionic serve\n\n# \u67e5\u770b\u53ef\u7528\u7684\u542f\u52a8\u6a21\u677f\nionic start -l\n\n# \u521b\u5efa\u4e00\u4e2a cordova \u5e94\u7528\n# --skip-link \u4e0d\u94fe\u63a5 ionic cloud \u8d26\u53f7\n# --skip-deps \u4e0d\u81ea\u52a8\u4e0b\u8f7d\u4f9d\u8d56\nionic start --cordova --skip-link --skip-deps -n '\u6211\u7684\u5e94\u7528' myapp tabs\n\n# \u53ef\u4ee5\u8003\u8651\u5c06 ionic \u4f5c\u4e3a\u5f00\u53d1\u4f9d\u8d56, \u4ee5\u907f\u514d\u548c\u5168\u5c40\u7684\u7248\u672c\u51b2\u7a81\n# \u8fd9\u6837\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 yarn \u6267\u884c ionic \u6765\u751f\u6210\u5185\u5bb9\n# \u4f8b\u5982 yarn run -- ionic g page MyHome\nyarn add --dev ionic\n")),Object(a.b)("h2",{id:"faq"},"FAQ"),Object(a.b)("h3",{id:"issues"},"ISSUES"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Tabs \u9875\u9762\u9ed1\u5c4f ",Object(a.b)("a",{parentName:"li",href:"https://github.com/driftyco/ionic/issues/8508"},"https://github.com/driftyco/ionic/issues/8508")),Object(a.b)("li",{parentName:"ul"},"Uncaught (in promise): nav controller was destroyed ",Object(a.b)("a",{parentName:"li",href:"https://github.com/driftyco/ionic/issues/11454"},"https://github.com/driftyco/ionic/issues/11454")),Object(a.b)("li",{parentName:"ul"},"Ionic v3 - Runtime Error Uncaught (in promise): removeView was not found ",Object(a.b)("a",{parentName:"li",href:"https://github.com/driftyco/ionic/issues/11443"},"https://github.com/driftyco/ionic/issues/11443")),Object(a.b)("li",{parentName:"ul"},"Deferred long-running timer task(s) ",Object(a.b)("a",{parentName:"li",href:"https://github.com/angular/material/issues/8236"},"https://github.com/angular/material/issues/8236"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},".md-scroll-mask { position: initial;}"))))),Object(a.b)("h3",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u6807"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u6807"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ion-icon")," \u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u56fe\u6807\u540d\u5b57, \u53ea\u9700\u8981\u6dfb\u52a0\u54cd\u5e94\u7684 css \u5373\u53ef."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* \u6dfb\u52a0\u81ea\u5b9a\u4e49\u56fe\u6807 */\n.ion-ios-MYICON,\n.ion-ios-MYICON-outline,\n.ion-md-MYICON {\n  content: url(../../images/MYICON.png); /* \u53ef\u4ee5\u7528\u56fe\u6807, svg \u6216\u8005 webfont */\n  width: 24px;\n  height: 32px;\n  padding: 6px 4px 2px;\n  margin: 5px;\n  opacity: 0.9;\n}\n")),Object(a.b)("h3",{id:"no-provider-for-navcontroller"},"No provider for NavController"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/ionic-team/ionic/issues/5543"},"#5543")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/ionic-team/ionic/issues/9581"},"#9581")),Object(a.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u5728 Service \u4e2d\u6ce8\u5165 NavController"),Object(a.b)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6cd5",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"li"},"Events")," \u8fdb\u884c\u4e2d\u8f6c"),Object(a.b)("li",{parentName:"ol"},"\u6ce8\u5165 ",Object(a.b)("inlineCode",{parentName:"li"},"App"),", \u7136\u540e")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"get navCtrl(){\n  return this.app.getRootNav()\n}\n")),Object(a.b)("h3",{id:"\u6dfb\u52a0\u9875\u9762"},"\u6dfb\u52a0\u9875\u9762"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210\u4e00\u4e2a\u9875\u9762\n# v2.2.3\n# \u4f1a\u751f\u6210\u4e00\u4e2a User \u9875\u9762, \u5982\u679c\u60f3\u8981\u4f7f\u7528 UserPage \u8fd9\u6837\u7684\u540d\u5b57, \u9700\u8981\u624b\u52a8\u8fdb\u884c\u91cd\u6784\n# \u9664\u4e86\u4f1a\u751f\u6210\u4e00\u4e2a\u9875\u9762, \u4e5f\u4f1a\u751f\u6210\u4e00\u4e2a\u6a21\u5757 user.module, \u5e94\u8be5\u5728 app.module \u4e2d\u5bfc\u5165\u8be5\u6a21\u5757\nyarn run -- i g page activity-detail\n")),Object(a.b)("p",null,"\u4fee\u6539 app.module.ts, \u5728 import \u90a3\u91cc\u6dfb\u52a0\u751f\u6210\u9875\u9762\u7684 Module, \u4f8b\u5982 ActivityDetailModule"),Object(a.b)("p",null,"\u9ed8\u8ba4\u751f\u6210\u7684\u9875\u9762\u540d\u5b57\u6ca1\u6709 Page \u540e\u7f00, \u4f8b\u5982\u4e0a\u9762\u7684\u751f\u6210\u7ed3\u679c\u4e3a ActivityDetail, \u5982\u679c\u8981\u6dfb\u52a0 Page \u540e\u7f00, \u53ef\u4ee5\u5728 activity-detail.ts, \u9009\u4e2d\u7c7b\u540d\u7136\u540e\u8fdb\u884c\u91cd\u547d\u540d\u91cd\u6784."),Object(a.b)("h3",{id:"\u8bbe\u7f6e\u6807\u9898"},"\u8bbe\u7f6e\u6807\u9898"),Object(a.b)("p",null,"\u5728\u8fdb\u884c Web \u7aef\u5f00\u53d1\u4f46\u4e0d\u9700\u8981 NavBar \u65f6, \u7f51\u9875\u7684 Header \u4e0d\u4f1a\u53d1\u751f\u6539\u53d8, \u6b64\u65f6\u9700\u8981\u624b\u52a8\u63a7\u5236"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class MyPage{\n  constructor(private app: App) {\n  }\n  ionViewDidEnter() {\n    // \u5f53\u8fdb\u5165\u8be5\u9875\u9762\u65f6\u4fee\u6539 title\n    this.app.setTitle('\u6211\u7684\u9875\u9762');\n  }\n}\n")),Object(a.b)("h3",{id:"\u8def\u7531"},"\u8def\u7531"),Object(a.b)("p",null,"Ionic \u4f7f\u7528\u7684\u5185\u7f6e\u72b6\u6001\u6765\u63a7\u5236\u8def\u7531, \u800c\u4e0d\u662f\u4f7f\u7528\u7684\u57fa\u4e8e URL \u7684\u8def\u7531, \u5728 Ionic \u4e2d,\u4f7f\u7528 URL \u6765\u63a7\u5236\u8def\u7531\u7684\u53eb\u505a DeepLinker, \u4f46\u662f\u7531\u4e8e Web \u7684\u4f18\u5148\u7ea7\u5bf9\u4e8e\u5f00\u53d1\u56e2\u961f\u6765\u8bf4\u76f8\u5bf9\u8f83\u4f4e, \u56e0\u6b64\u652f\u6301\u4e0a\u9762\u6709\u6240\u6b20\u7f3a."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Tab \u9875\u9762\u8def\u7531\u4f1a\u6709\u4e9b\u95ee\u9898",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/driftyco/ionic/issues/9012"},"DeepLinker generated URL names with tabbed pages causes double /")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/driftyco/ionic/issues/9183"},"DeepLinker doesn't work smooth with tabbed pages yet")))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://www.cnblogs.com/yanxiaodi/p/6086007.html"},"Ionic2 \u7cfb\u5217\u2014\u2014\u4f7f\u7528 DeepLinker \u5b9e\u73b0\u6307\u5b9a\u9875\u9762 URL"))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"IonicModule.forRoot(MyApp, null,{/* DeepLinkConfig */});\n")),Object(a.b)("p",null,"\u6bcf\u4e2a\u9875\u9762\u90fd\u53ef\u4ee5\u5bf9\u5e94\u4e00\u4e2a\u8def\u5f84\u4e0a\u7684\u540d\u5b57, \u5176\u5143\u6570\u636e\u53ef\u4ee5\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"@IonicPage")," \u6765\u914d\u7f6e, \u4e5f\u53ef\u4ee5\u518d ",Object(a.b)("inlineCode",{parentName:"p"},"DeepLinkConfig")," \u8fdb\u884c\u7edf\u4e00\u914d\u7f6e. \u5efa\u8bae\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"DeepLinkConfig")," \u914d\u7f6e\u4ee5\u4fbf\u4e8e\u7edf\u4e00\u7ba1\u7406."),Object(a.b)("p",null,"\u8def\u7531\u7684\u8df3\u8f6c\u53ef\u4ee5\u5728 html \u4e2d\u6dfb\u52a0 ",Object(a.b)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/components/nav/NavPush/"},"NavPush")," \u6216\u8005 ",Object(a.b)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/components/nav/NavPop/"},"NavPop")," \u6307\u4ee4\u63a7\u5236, \u6216\u8005\u901a\u8fc7\u76f4\u63a5\u6ce8\u5165 ",Object(a.b)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/navigation/NavController/"},"NavController")," \u6765\u63a7\u5236."))}b.isMDXComponent=!0}}]);