(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1096:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(a),o=n,O=u["".concat(b,".").concat(o)]||u[o]||m[o]||l;return a?r.a.createElement(O,c(c({ref:t},i),{},{components:a})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=o;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},841:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),l=(a(0),a(1096)),b={id:"apacheds-ops",title:"ApacheDS \u8fd0\u7ef4"},c={unversionedId:"service/auth/apacheds-ops",id:"service/auth/apacheds-ops",isDocsHomePage:!1,title:"ApacheDS \u8fd0\u7ef4",description:"ApacheDS \u76ee\u5f55\u8bbe\u8ba1",source:"@site/notes/service/auth/apacheds-ops.md",slug:"/service/auth/apacheds-ops",permalink:"/notes/service/auth/apacheds-ops",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/apacheds-ops.md",version:"current",sidebar:"docs",previous:{title:"ApacheDS Kerberos",permalink:"/notes/service/auth/apacheds-kerberos"},next:{title:"Apache Directory",permalink:"/notes/service/auth/apacheds"}},p=[{value:"ApacheDS \u76ee\u5f55\u8bbe\u8ba1",id:"apacheds-\u76ee\u5f55\u8bbe\u8ba1",children:[]},{value:"\u5220\u9664\u9ed8\u8ba4\u5206\u533a",id:"\u5220\u9664\u9ed8\u8ba4\u5206\u533a",children:[]},{value:"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801",id:"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801",children:[]},{value:"Nextcloud LDAP",id:"nextcloud-ldap",children:[]},{value:"\u5206\u533a",id:"\u5206\u533a",children:[]}],i={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"apacheds-\u76ee\u5f55\u8bbe\u8ba1"},"ApacheDS \u76ee\u5f55\u8bbe\u8ba1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"DN",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ou=users - \u7528\u6237",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"uid=test.cs"))),Object(l.b)("li",{parentName:"ul"},"ou=groups - \u5206\u7ec4\u3001\u7ec4\u7ec7\u67b6\u6784",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"uid=company",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"objectclass: groupOfNames"))))),Object(l.b)("li",{parentName:"ul"},"ou=roles - \u89d2\u8272",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"uid=admin",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"objectclass: groupOfNames"))))),Object(l.b)("li",{parentName:"ul"},"ou=services - \u670d\u52a1\u8d26\u53f7",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"uid=keycloak"),Object(l.b)("li",{parentName:"ul"},"uid=nextcloud"))),Object(l.b)("li",{parentName:"ul"},"dc=security - \u5b89\u5168\u76f8\u5173",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ou=services - \u5b89\u5168\u670d\u52a1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"uid=krbtgt",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"krb5PrincipalName: krbtgt/",Object(l.b)("a",{parentName:"li",href:"mailto:EXAMPLE.COM@EXAMPLE.COM"},"EXAMPLE.COM@EXAMPLE.COM")),Object(l.b)("li",{parentName:"ul"},"userPassword: randomKey"))),Object(l.b)("li",{parentName:"ul"},"uid=kpasswd",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"krb5PrincipalName: kadmin/",Object(l.b)("a",{parentName:"li",href:"mailto:changepw@EXAMPLE.COM"},"changepw@EXAMPLE.COM")))),Object(l.b)("li",{parentName:"ul"},"uid=ldap",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"krb5PrincipalName: ldap/",Object(l.b)("a",{parentName:"li",href:"mailto:example.net@EXAMPLE.COM"},"example.net@EXAMPLE.COM")))))))))),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u9009\u62e9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e3b\u4f53 inetOrgPerson",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u53c2\u7167 ",Object(l.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc2798"},"rfc2798")," \u9009\u7528\u5c5e\u6027"))),Object(l.b)("li",{parentName:"ul"},"\u5206\u7ec4 groupOfNames"),Object(l.b)("li",{parentName:"ul"},"\u89d2\u8272 groupOfNames"))),Object(l.b)("li",{parentName:"ul"},"\u5c5e\u6027\u9009\u62e9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"uid \u7528\u4e8e\u552f\u4e00\u6807\u793a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"uid \u4e0d\u662f inetOrgPerson \u5f3a\u5236\u5c5e\u6027"),Object(l.b)("li",{parentName:"ul"},"cn \u548c sn \u662f\u5f3a\u5236\u5c5e\u6027")))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ldif"},"# \u521b\u5efa\u57fa\u7840\u7ed3\u6784 - \u53ef\u66ff\u6362 basedn dc=example,dc=com\ndn: ou=users,dc=example,dc=com\nobjectclass: organizationalUnit\nou: users\n\ndn: ou=groups,dc=example,dc=com\nobjectclass: organizationalUnit\nou: groups\n\ndn: ou=roles,dc=example,dc=com\nobjectclass: organizationalUnit\nou: roles\n\ndn: ou=services,dc=example,dc=com\nobjectclass: organizationalUnit\nou: services\n\ndn: dc=security,dc=example,dc=com\nobjectclass: domain\ndc: security\n\ndn: ou=services,dc=security,dc=example,dc=com\nobjectclass: organizationalUnit\nou: services\n")),Object(l.b)("h2",{id:"\u5220\u9664\u9ed8\u8ba4\u5206\u533a"},"\u5220\u9664\u9ed8\u8ba4\u5206\u533a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u9012\u5f52\u5220\u9664\u914d\u7f6e\nldapdelete -r -H ldap://localhost:10389 -D uid=admin,ou=system -w secret ads-partitionId=example,ou=partitions,ads-directoryServiceId=default,ou=config\n")),Object(l.b)("h2",{id:"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801"},"\u4fee\u6539\u9ed8\u8ba4\u5bc6\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ldif"},"# \u4fee\u6539\u9ed8\u8ba4 admin \u5bc6\u7801\ndn:uid=admin,ou=system\nchangetype: modify\nreplace: userPassword\n# \u65b0\u7684\u5bc6\u7801\nuserPassword: secret\n")),Object(l.b)("h2",{id:"nextcloud-ldap"},"Nextcloud LDAP"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"./occ ldap:show-config s01\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Configuration"),Object(l.b)("th",{parentName:"tr",align:null},"s01"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hasMemberOfFilterSupport"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"homeFolderNamingRule"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lastJpegPhotoLookup"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapAgentName"),Object(l.b)("td",{parentName:"tr",align:null},"uid=admin,ou=system")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapAgentPassword"),Object(l.b)("td",{parentName:"tr",align:null},"secret")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapAttributesForGroupSearch"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapAttributesForUserSearch"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapBackupHost"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapBackupPort"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapBase"),Object(l.b)("td",{parentName:"tr",align:null},"dc=example,dc=com")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapBaseGroups"),Object(l.b)("td",{parentName:"tr",align:null},"ou=groups,dc=example,dc=com")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapBaseUsers"),Object(l.b)("td",{parentName:"tr",align:null},"ou=users,dc=example,dc=com")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapCacheTTL"),Object(l.b)("td",{parentName:"tr",align:null},"600")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapConfigurationActive"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapDefaultPPolicyDN"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapDynamicGroupMemberURL"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapEmailAttribute"),Object(l.b)("td",{parentName:"tr",align:null},"mail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapExperiencedAdmin"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapExpertUUIDGroupAttr"),Object(l.b)("td",{parentName:"tr",align:null},"enrtyUUID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapExpertUUIDUserAttr"),Object(l.b)("td",{parentName:"tr",align:null},"enrtyUUID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapExpertUsernameAttr"),Object(l.b)("td",{parentName:"tr",align:null},"uid")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapExtStorageHomeAttribute"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapGidNumber"),Object(l.b)("td",{parentName:"tr",align:null},"gidNumber")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapGroupDisplayName"),Object(l.b)("td",{parentName:"tr",align:null},"cn")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapGroupFilter"),Object(l.b)("td",{parentName:"tr",align:null},"(objectclass=groupOfNames)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapGroupFilterGroups"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapGroupFilterMode"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapGroupFilterObjectclass"),Object(l.b)("td",{parentName:"tr",align:null},"inetOrgPerson")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapGroupMemberAssocAttr"),Object(l.b)("td",{parentName:"tr",align:null},"member")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapHost"),Object(l.b)("td",{parentName:"tr",align:null},"ldap://192.168.1.1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapIgnoreNamingRules"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapLoginFilter"),Object(l.b)("td",{parentName:"tr",align:null},"`(&(")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapLoginFilterAttributes"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapLoginFilterEmail"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapLoginFilterMode"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapLoginFilterUsername"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapNestedGroups"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapOverrideMainServer"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapPagingSize"),Object(l.b)("td",{parentName:"tr",align:null},"500")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapPort"),Object(l.b)("td",{parentName:"tr",align:null},"10389")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapQuotaAttribute"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapQuotaDefault"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapTLS"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUserAvatarRule"),Object(l.b)("td",{parentName:"tr",align:null},"default")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUserDisplayName"),Object(l.b)("td",{parentName:"tr",align:null},"cn")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUserDisplayName2"),Object(l.b)("td",{parentName:"tr",align:null},"displayname")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUserFilter"),Object(l.b)("td",{parentName:"tr",align:null},"(objectclass=inetOrgPerson)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUserFilterGroups"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUserFilterMode"),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUserFilterObjectclass"),Object(l.b)("td",{parentName:"tr",align:null},"inetOrgPerson")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUuidGroupAttribute"),Object(l.b)("td",{parentName:"tr",align:null},"auto")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldapUuidUserAttribute"),Object(l.b)("td",{parentName:"tr",align:null},"auto")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"turnOffCertCheck"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"turnOnPasswordChange"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"useMemberOfToDetectMembership"),Object(l.b)("td",{parentName:"tr",align:null},"1")))),Object(l.b)("h2",{id:"\u5206\u533a"},"\u5206\u533a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-ldif"},"")))}d.isMDXComponent=!0}}]);