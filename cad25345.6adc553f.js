(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{1096:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?a.a.createElement(d,o(o({ref:n},s),{},{components:t})):a.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},903:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(1096)),l={id:"ansible-version",title:"Ansible Version"},o={unversionedId:"ops/infra/ansible-version",id:"ops/infra/ansible-version",isDocsHomePage:!1,title:"Ansible Version",description:"2.10",source:"@site/notes/ops/infra/ansible-version.md",slug:"/ops/infra/ansible-version",permalink:"/notes/ops/infra/ansible-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/ansible-version.md",version:"current",sidebar:"docs",previous:{title:"Ansible \u53c2\u8003",permalink:"/notes/ops/infra/ansible-ref"},next:{title:"Ansible Windows",permalink:"/notes/ops/infra/ansible-windows"}},c=[{value:"2.10",id:"210",children:[]},{value:"2.19",id:"219",children:[]}],s={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"210"},"2.10"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5c06\u975e base \u6a21\u5757\u5212\u5206\u4e3a\u5c0f\u7684 collection\uff0c\u7531 galaxy \u5206\u53d1",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"collection \u80fd\u591f\u5305\u542b\u51e0\u4e4e\u6240\u6709\u7684 ansible \u6269\u5c55\u70b9 - roles, plugins, modules, playbooks"),Object(i.b)("li",{parentName:"ul"},"\u66ff\u4ee3\u4e4b\u524d galaxy \u7684 role \u5206\u53d1\u6a21\u5f0f"),Object(i.b)("li",{parentName:"ul"},"ansible-base 3 MB \u5b89\u88c5\u540e 14 MB"),Object(i.b)("li",{parentName:"ul"},"ansible 44 MB \u5b89\u88c5\u540e 334 MB"))),Object(i.b)("li",{parentName:"ul"},"\u5185\u7f6e ",Object(i.b)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/2.10/collections/index.html"},"collection")," \u5217\u8868"),Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e ansible-base \u5305"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ansible/ansible/blob/stable-2.10/changelogs/CHANGELOG-v2.10.rst"},"CHANGELOG-v2.10")),Object(i.b)("li",{parentName:"ul"},"unvault - \u65b0\u589e lookup \u63d2\u4ef6 - \u8bfb\u53d6\u52a0\u5bc6\u6587\u4ef6\u5185\u5bb9"),Object(i.b)("li",{parentName:"ul"},"\u5e9f\u5f03 hash_behaviour"),Object(i.b)("li",{parentName:"ul"},"\u505c\u6b62\u652f\u6301 Windows Server 2008"),Object(i.b)("li",{parentName:"ul"},"fact \u5305\u542b ansible_processor_nproc")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u5c1a\u4e14\u65e0\u6cd5\u6267\u884c collection \u4e2d\u7684 playbooks - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/ansible/ansible/pull/67435"},"#67435"))))),Object(i.b)("h2",{id:"219"},"2.19"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b0\u589e\u547d\u4ee4\u884c\u8865\u5168")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u53c2\u6570\u8865\u5168\npython -m pip install argcomplete\n\n# \u542f\u7528\u8865\u5168\nactivate-global-python-argcomplete\n# \u6216\neval $(register-python-argcomplete ansible)\neval $(register-python-argcomplete ansible-config)\neval $(register-python-argcomplete ansible-console)\neval $(register-python-argcomplete ansible-doc)\neval $(register-python-argcomplete ansible-galaxy)\neval $(register-python-argcomplete ansible-inventory)\neval $(register-python-argcomplete ansible-playbook)\neval $(register-python-argcomplete ansible-pull)\neval $(register-python-argcomplete ansible-vault)\n")))}b.isMDXComponent=!0}}]);