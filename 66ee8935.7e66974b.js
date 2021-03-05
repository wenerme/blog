(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(787)),c={title:"React Route"},i={unversionedId:"web/react/react-router",id:"web/react/react-router",isDocsHomePage:!1,title:"React Route",description:"`bash",source:"@site/notes/web/react/react-router.md",slug:"/web/react/react-router",permalink:"/notes/web/react/react-router",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/react/react-router.md",version:"current",sidebar:"docs",previous:{title:"React Query",permalink:"/notes/web/react/react-query"},next:{title:"NodeJS \u7248\u672c",permalink:"/notes/web/node/nodejs-version"}},u=[{value:"Switch vs Route",id:"switch-vs-route",children:[]}],p={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"yarn add react-router-dom\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { HashRouter as Router, Link, Route, Switch } from \'react-router-dom\';\n\nexport const MainRoute: React.FC = () => {\n  return (\n    <Router>\n      <nav>\n        <ul>\n          <li>\n            <Link to="/">Home</Link>\n          </li>\n          <li>\n            <Link to="/about">About</Link>\n          </li>\n          <li>\n            <Link to="/users">Users</Link>\n          </li>\n        </ul>\n      </nav>\n\n      {/* Switch \u6e32\u67d3\u5339\u914d\u7684\u7b2c\u4e00\u4e2a */}\n      <Switch>\n        <Route path="/about">\n          <About />\n        </Route>\n        <Route path="/users">\n          <Users />\n        </Route>\n        <Route path="/">\n          <Home />\n        </Route>\n      </Switch>\n    </Router>\n  );\n};\n\n')),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"switch-vs-route"},"Switch vs Route"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"<Switch>")," \u53ea\u6e32\u67d3\u4e00\u4e2a\u8def\u7531. \u800c ",Object(a.b)("inlineCode",{parentName:"p"},"<Route>")," \u4f1a\u6e32\u67d3\u6240\u6709\u5339\u914d\u7684\u8def\u7531\u3002"))}l.isMDXComponent=!0},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);