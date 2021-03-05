(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),a=(n(0),n(787)),s={title:"Tailwind CSS"},l={unversionedId:"web/style/tailwindcss",id:"web/style/tailwindcss",isDocsHomePage:!1,title:"Tailwind CSS",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/web/style/tailwindcss.md",slug:"/web/style/tailwindcss",permalink:"/notes/web/style/tailwindcss",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/style/tailwindcss.md",version:"current",sidebar:"docs",previous:{title:"CSS \u5e38\u89c1\u95ee\u9898",permalink:"/notes/web/style/css-faq"},next:{title:"\u8bed\u8a00",permalink:"/notes/languages/languages"}},c=[{value:"tailwind.css",id:"tailwindcss",children:[]},{value:"tailwind.config.js",id:"tailwindconfigjs",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"CSS \u6837\u5f0f\u5de5\u5177\u96c6 - \u901a\u8fc7 class \u540d\u5b57\u6765\u7ec4\u5408\u6837\u5f0f"),Object(a.b)("li",{parentName:"ul"},"\u5c06\u6837\u5f0f\u539f\u5b50\u5316"),Object(a.b)("li",{parentName:"ul"},"\u9ad8\u5ea6\u5b9a\u5236\u5316 - \u989c\u8272\u3001\u5927\u5c0f\u3001breackpoint\u3001extend \u7b49\u7b49"),Object(a.b)("li",{parentName:"ul"},"prune \u53ef\u7f29\u51cf\u5927\u5c0f - \u9ed8\u8ba4 \u672a\u538b\u7f29 3.8 MB,Minified 3 MB, Gzip 300 KB, Brotli 75 KB"))),Object(a.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/issues/12668"},"storybookjs/storybook#12668")," - PostCSS 8 \u517c\u5bb9\u95ee\u9898")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u57fa\u7840\u4f9d\u8d56\nnpm add tailwindcss postcss autoprefixer\n# \u517c\u5bb9 storybook - PostCSS 7\nnpm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9\n\n# \u521d\u59cb\u5316\u914d\u7f6e\n# postcss.config.js tailwind.config.js\nnpx tailwindcss init -p\n\n# \u5305\u542b\u9ed8\u8ba4\u914d\u7f6e\n# https://unpkg.com/browse/tailwindcss@2.0.1/stubs/defaultConfig.stub.js\nnpx tailwindcss init --full\n\n# \u81ea\u884c\u6784\u5efa\ntailwind build ./src/styles/tailwind.css -o ./public/tailwind.css\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"// \u9884\u6784\u5efa\u597d\u7684 css\nimport 'tailwindcss/dist/tailwind.css';\n// \u57fa\u4e8e PostCSS \u7684 css\nimport 'tailwindcss/tailwind.css';\n")),Object(a.b)("h2",{id:"tailwindcss"},"tailwind.css"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),Object(a.b)("h2",{id:"tailwindconfigjs"},"tailwind.config.js"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://tailwindcss.com/docs/configuration"},"\u914d\u7f6e")),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e ",Object(a.b)("a",{parentName:"li",href:"https://unpkg.com/browse/tailwindcss/stubs/defaultConfig.stub.js"},"stubs/defaultConfig.stub.js"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"84 \u989c\u8272"),Object(a.b)("li",{parentName:"ul"},"5 breakpoint")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // \u88c1\u526a\u7684\u57fa\u7840\u7528\u6cd5\n  purge: [\n    './src/**/*.html',\n    './src/**/*.vue',\n    './src/**/*.jsx',\n  ],\n  purge: {\n    enabled: false, // \u662f\u5426\u88c1\u526a\u4e0d\u5fc5\u8981\u7684\u5b9a\u4e49\n    preserveHtmlElements: true, // \u662f\u5426\u4fdd\u7559 HTML \u5143\u7d20\u57fa\u7840\u6837\u5f0f\n    layers: ['components', 'utilities'], // \u88c1\u526a\u5c42\n    mode: 'all', // \u662f\u5426\u88c1\u526a\u6240\u6709\u672a\u7528\u5230\u7684\u5b9a\u4e49 - \u4e0d\u5efa\u8bae\n    content: ['./src/**/*.html'],\n    // PurgeCSS \u76f4\u63a5\u4f20\u5165\u53c2\u6570\n    options: {\n      safelist: ['bg-red-500', 'px-4'],\n    },\n  },\n  // \u7981\u7528\u63d2\u4ef6\u53ef\u51cf\u5c11\u5927\u5c0f\n  corePlugins: {\n    float: false\n  }\uff0c\n  // \u6216\u8005\u6307\u5b9a\u9700\u8981\u7684\u63d2\u4ef6\n  corePlugins: [\n    'margin',\n    'padding',\n  ]\n};\n")))}p.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,l(l({ref:t},o),{},{components:n})):i.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var o=2;o<a;o++)s[o]=n[o];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);