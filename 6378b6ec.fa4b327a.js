(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{345:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(787)),l={id:"infra",title:"\u57fa\u7840\u8bbe\u65bd"},b={unversionedId:"ops/infra/infra",id:"ops/infra/infra",isDocsHomePage:!1,title:"\u57fa\u7840\u8bbe\u65bd",description:"Tips",source:"@site/notes/ops/infra/README.md",slug:"/ops/infra/infra",permalink:"/notes/ops/infra/infra",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/infra/README.md",version:"current",sidebar:"docs",previous:{title:"Tmux",permalink:"/notes/ops/admin/tmux"},next:{title:"Ansible AWX",permalink:"/notes/ops/infra/ansible-awx"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Terraform vs Ansible",id:"terraform-vs-ansible",children:[]}],o={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u573a\u666f\u9886\u57df",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b89\u88c5\u90e8\u7f72"),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u72b6\u6001\u7ba1\u7406"),Object(i.b)("li",{parentName:"ul"},"\u4e91\u5e73\u53f0\u57fa\u7840\u8bbe\u65bd\u8d44\u6e90\u7ba1\u7406 - Terraform"))),Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u671f\u671b\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"Agent \u8d1f\u8d23\u7ef4\u62a4\u72b6\u6001"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 diff \u72b6\u6001\u6765\u51b3\u5b9a\u8981\u505a\u4ec0\u4e48\u64cd\u4f5c"))),Object(i.b)("li",{parentName:"ul"},"\u8fc7\u7a0b\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6267\u884c\u547d\u4ee4\uff0c\u63a8\u9001\u811a\u672c"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Infrastructure_as_code#Tools"},"Infrastructure as code \u5de5\u5177")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_open-source_configuration_management_software"},"Comparison of open-source configuration management software")))),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e - \u5e42\u7b49",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u9700\u8981\u66f4\u65b0"))),Object(i.b)("li",{parentName:"ul"},"\u5f00\u901a\u670d\u52a1 - Provisioning - \u901a\u5e38\u662f\u4e00\u6b21\u6027\u64cd\u4f5c")),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"terraform-vs-ansible"},"Terraform vs Ansible"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"\u90fd\u662f IaC - Infrastructure as code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ansible"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u64c5\u957f\u90e8\u7f72 - \u56e0\u4e3a\u6307\u4ee4\u5f0f\uff0c\u4e00\u6b21\u6027\u6267\u884c\uff0c\u65e0\u72b6\u6001"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Terraform"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u64c5\u957f\u8fd0\u7ef4 - \u5b9a\u4e49\u72b6\u6001\u8fdb\u884c\u7ef4\u62a4\uff0c\u901a\u8fc7 GitOps \u7ef4\u62a4\u8d44\u6e90")))),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Terraform",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u64cd\u4f5c ",Object(i.b)("strong",{parentName:"li"},"\u63a5\u53e3")),Object(i.b)("li",{parentName:"ul"},"\u53ea\u80fd\u662f Declarative - \u5b9a\u4e49\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u6709\u72b6\u6001 - \u901a\u8fc7\u72b6\u6001 diff \u6765\u51b3\u5b9a\u8981\u505a\u4ec0\u4e48"),Object(i.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u6307\u5b9a\u6761\u4ef6\u3001\u8fc7\u6ee4 - \u8fbe\u5230\u5168\u91cf\u72b6\u6001"))),Object(i.b)("li",{parentName:"ul"},"Ansible",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(i.b)("strong",{parentName:"li"},"\u4e3b\u673a")," \u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u662f Declarative \u548c Imperative - \u5b9a\u4e49\u5f0f\u6216\u8fc7\u7a0b\u5f0f"),Object(i.b)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\uff0c\u5728\u6267\u884c\u65f6\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u8fbe\u5230\u671f\u671b\u72b6\u6001\u518d\u51b3\u5b9a\u662f\u5426\u6267\u884c"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u6307\u5b9a\u5404\u79cd\u8bed\u4e49 - \u811a\u672c"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7406\u89e3\u6210\u662f Terraform \u7684\u8d85\u96c6\uff0c\u4f46\u5728 Terraform \u7684\u9886\u57df\u8fd8\u662f Terraform \u505a\u7684\u66f4\u597d"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u64cd\u4f5c Terraform\uff0c\u6700\u597d\u914d\u5408\u4f7f\u7528"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4e8e\u751f\u6210 Terraform \u811a\u672c")))))}p.isMDXComponent=!0},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,f=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return r?a.a.createElement(f,b(b({ref:t},o),{},{components:r})):a.a.createElement(f,b({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<i;o++)l[o]=r[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);