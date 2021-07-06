(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1114:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=o(a),u=r,h=s["".concat(l,".").concat(u)]||s[u]||m[u]||b;return a?n.a.createElement(h,i(i({ref:t},p),{},{components:a})):n.a.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<b;p++)l[p]=a[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},364:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),b=(a(0),a(1114)),l={id:"ldap",title:"LADP"},i={unversionedId:"service/auth/ldap",id:"service/auth/ldap",isDocsHomePage:!1,title:"LADP",description:"Tips",source:"@site/notes/service/auth/ldap.md",slug:"/service/auth/ldap",permalink:"/notes/service/auth/ldap",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/ldap.md",version:"current",sidebar:"docs",previous:{title:"LDAP Schema",permalink:"/notes/service/auth/ldap-schema"},next:{title:"Louketo Proxy",permalink:"/notes/service/auth/louketo"}},c=[{value:"Tips",id:"tips",children:[{value:"fortress",id:"fortress",children:[]}]},{value:"\u5e38\u89c1\u7ed3\u6784",id:"\u5e38\u89c1\u7ed3\u6784",children:[]}],p={toc:c};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"389 ldap"),Object(b.b)("li",{parentName:"ul"},"636 ldaps"))),Object(b.b)("li",{parentName:"ul"},"LDAP vs Kerberos",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"LDAP \u4e3b\u8981\u7528\u8fc7\u96c6\u4e2d\u8d26\u6237\u7ba1\u7406"),Object(b.b)("li",{parentName:"ul"},"Kerberos \u4e3b\u8981\u7528\u4e8e SSO"),Object(b.b)("li",{parentName:"ul"},"Kerberos \u53ef\u4ee5\u4f7f\u7528 LDAP \u4f5c\u4e3a\u8ba4\u8bc1\u6765\u6e90"))),Object(b.b)("li",{parentName:"ul"},"Reference",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://www.zytrax.com/books/ldap/"},"LDAP for Rocket Scientists")))),Object(b.b)("li",{parentName:"ul"},"LDAP \u4f7f\u7528",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_LDAP_software"},"List of LDAP software")),Object(b.b)("li",{parentName:"ul"},"iOS/macOS \u652f\u6301\u6dfb\u52a0 LDAP \u5bfc\u5165\u8054\u7cfb\u4eba"),Object(b.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"PowerDNS ",Object(b.b)("a",{parentName:"li",href:"https://doc.powerdns.com/md/authoritative/backend-ldap/"},"backend-ldap")))),Object(b.b)("li",{parentName:"ul"},"\u8ba4\u8bc1",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Gitlab ",Object(b.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ce/administration/auth/ldap.html"},"LDAP")),Object(b.b)("li",{parentName:"ul"},"Gogs/Gitea ",Object(b.b)("a",{parentName:"li",href:"https://github.com/go-gitea/gitea/tree/master/modules/auth/ldap"},"LDAP Authentication Module")),Object(b.b)("li",{parentName:"ul"},"Nexus ",Object(b.b)("a",{parentName:"li",href:"https://books.sonatype.com/nexus-book/reference/ldap.html"},"LDAP Integration")),Object(b.b)("li",{parentName:"ul"},"Nginx ",Object(b.b)("a",{parentName:"li",href:"https://github.com/kvspb/nginx-auth-ldap"},"nginx-auth-ldap")),Object(b.b)("li",{parentName:"ul"},"Linux",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/developerworks/cn/linux/1406_liulz_pamopenldap/"},"\u4f7f\u7528 PAM \u96c6\u6210 OpenLDAP \u5b9e\u73b0 Linux \u7edf\u4e00\u7ba1\u7406\u7cfb\u7edf\u7528\u6237")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.s3it.uzh.ch/use/2014-11-04.linux-ldap-auth/slides.pdf"},"Linux LDAP authentication")))),Object(b.b)("li",{parentName:"ul"},"SSH",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://serverfault.com/questions/653792"},"SSH key authentication using LDAP")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/jirutka/ssh-ldap-pubkey"},"ssh-ldap-pubkey")))),Object(b.b)("li",{parentName:"ul"},"Odoo ",Object(b.b)("a",{parentName:"li",href:"https://www.odoo.com/apps/modules/online/auth_ldap/"},"auth_ldap")),Object(b.b)("li",{parentName:"ul"},"Piwik ",Object(b.b)("a",{parentName:"li",href:"https://plugins.piwik.org/LoginLdap"},"LoginLdap")),Object(b.b)("li",{parentName:"ul"},"Rundeck ",Object(b.b)("a",{parentName:"li",href:"http://rundeck.org/2.5.1/administration/authenticating-users.html#ldap"},"ldap")),Object(b.b)("li",{parentName:"ul"},"Windows",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://pgina.org/"},"pgina")," \u4e0d\u6d3b\u8dc3"),Object(b.b)("li",{parentName:"ul"},"Samba \u63d0\u4f9b AD \u670d\u52a1, \u540e\u7aef\u5bf9\u63a5 LDAP"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://serverfault.com/q/2769/190601"},"Can Windows integrate with LDAP?")))),Object(b.b)("li",{parentName:"ul"},"Samba",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/developerworks/cn/education/linux/smb-ldap/smb-ldap.html"},"\u5c06 LDAP \u76ee\u5f55\u7528\u4e8e Samba \u8ba4\u8bc1")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wiki.samba.org/index.php/Samba_&_LDAP"},"Samba & LDAP")),Object(b.b)("li",{parentName:"ul"},"Ubuntu ",Object(b.b)("a",{parentName:"li",href:"https://help.ubuntu.com/lts/serverguide/samba-ldap.html"},"Samba and Ldap")))),Object(b.b)("li",{parentName:"ul"},"MySQL ",Object(b.b)("a",{parentName:"li",href:"https://dev.mysql.com/doc/mysql-security-excerpt/5.6/en/pam-authentication-ldap-without-proxy.html"},"LDAP Authentication without Proxy Users")),Object(b.b)("li",{parentName:"ul"},"MongoDB",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/core/security-ldap-external/"},"LDAP Authorization")))))),Object(b.b)("li",{parentName:"ul"},"\u5e93",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/pac4j/pac4j"},"pac4j")," \u652f\u6301 LDAP"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://projects.spring.io/spring-ldap/"},"spring-ldap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Java_Naming_and_Directory_Interface"},"JNDI")))))),Object(b.b)("li",{parentName:"ul"},"Kerberos \u4f7f\u7528",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u8ba4\u8bc1",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"SSH",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/en/ssw_aix_61/com.ibm.aix.security/using_openssh_with_kerberosv5.htm"},"Using OpenSSH with Kerberos")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://serverfault.com/q/329901/190601"},"How does Kerberos work with SSH?")),Object(b.b)("li",{parentName:"ul"},"sshd_config ",Object(b.b)("a",{parentName:"li",href:"http://man.openbsd.org/sshd_config#GSSAPIAuthentication"},"GSSAPIAuthentication")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://dovetail.com/docs/ssh/kerberos_sso.pdf"},"Using OpenSSH in a Single Sign-On Corporate Environment with z/OS,Windows and Linux")))),Object(b.b)("li",{parentName:"ul"},"MongoDB ",Object(b.b)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/core/kerberos/"},"Kerberos Authentication")),Object(b.b)("li",{parentName:"ul"},"Keycloak ",Object(b.b)("a",{parentName:"li",href:"https://keycloak.gitbooks.io/server-adminstration-guide/content/topics/authentication/kerberos.html"},"Kerberos")))),Object(b.b)("li",{parentName:"ul"},"\u5e93",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://projects.spring.io/spring-security-kerberos/"},"spring-security-kerberos")))))),Object(b.b)("li",{parentName:"ul"},"Reference",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"LDAP",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://quark.humbug.org.au/publications/ldap/ldap_tut_v2.pdf"},"LDAP tut v2"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6f14\u793a\u6587\u7a3f"),Object(b.b)("li",{parentName:"ul"},"\u975e\u5e38\u597d\u7684\u8bb2\u89e3"),Object(b.b)("li",{parentName:"ul"},"\u903b\u8f91\u68b3\u7406\u7684\u975e\u5e38\u6e05\u6670"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://blog.clanzx.net/2013/09/27/ldap-kerberos.html"},"\u4f7f\u7528 LDAP + Kerberos \u5b9e\u73b0\u96c6\u4e2d\u7528\u6237\u8ba4\u8bc1\u53ca\u6388\u6743\u7cfb\u7edf")),Object(b.b)("li",{parentName:"ul"},"MSDN ",Object(b.b)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/aa367008(v=vs.85).aspx"},"Lightweight Directory Access Protocol")))),Object(b.b)("li",{parentName:"ul"},"Kerberos",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://www.kerberos.org/software/adminkerberos.pdf"},"The MIT Kerberos Administrator\u2019s How-to Guide")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://www.kerberos.org/software/whykerberos.pdf"},"whykerberos")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://doc.lagout.org/network/Kerberos%20The%20Definitive%20Guide%202003.pdf"},"Kerberos: The Definitive Guide"))))))),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/github/github-ldap"},"https://github.com/github/github-ldap")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://www.zytrax.com/books/ldap/ape/"},"LDAP - Object Classes and Attributes"))),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://www.manageengine.com/products/ad-manager/help/csv-import-management/active-directory-ldap-attributes.html"},"https://www.manageengine.com/products/ad-manager/help/csv-import-management/active-directory-ldap-attributes.html")),Object(b.b)("p",null,"Kerberos 5\n",Object(b.b)("a",{parentName:"p",href:"http://searchsecurity.techtarget.com/definition/Kerberos"},"http://searchsecurity.techtarget.com/definition/Kerberos"),"\n",Object(b.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Authentication_server"},"https://en.wikipedia.org/wiki/Authentication_server"),"\nChange Password Protocol\n",Object(b.b)("a",{parentName:"p",href:"http://directory.apache.org/"},"http://directory.apache.org/")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"tools",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://linux.die.net/man/1/ldapsearch"},"ldapsearch.1")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://ldapwiki.com/wiki/GroupOfUniqueNames%20vs%20groupOfNames"},"GroupOfUniqueNames vs groupOfNames")),Object(b.b)("li",{parentName:"ul"},"acl",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://directory.apache.org/apacheds/advanced-ug/4.2.7.1-enable-authenticated-users-to-browse-and-read-entries.html"},"Enable Authenticated Users to Browse and Read Entries")))),Object(b.b)("li",{parentName:"ul"},"NOTE",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"LDAPS \u5df2\u7ecf\u5e9f\u5f03, \u5efa\u8bae\u4f7f\u7528 StartTLS"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://forum.forgerock.com/2015/04/ldaps-or-starttls-that-is-the-question/"},"https://forum.forgerock.com/2015/04/ldaps-or-starttls-that-is-the-question/")),Object(b.b)("li",{parentName:"ul"},"ldif",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format"},"https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format"))))),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/Pryz/terraform-provider-ldap"},"https://github.com/Pryz/terraform-provider-ldap")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5\u7b80\u5316\u64cd\u4f5c\nalias ldapsearch=\"ldapsearch -H ldap://127.0.0.1:10389 -D 'uid=admin,ou=system' -w secret\"\n# \u68c0\u6d4b\u7528\u6237\u662f\u5426\u5728\u7ec4\u4e2d\nldapsearch -b 'cn=developer,ou=groups,dc=example,dc=com' '(&(member=uid=wener,ou=users,dc=example,dc=com))'\n\n\n")),Object(b.b)("p",null,"cn=developer,ou=groups,dc=wener,dc=me"),Object(b.b)("h3",{id:"fortress"},"fortress"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/apache/directory-fortress-core/blob/master/README-QUICKSTART-DOCKER-APACHEDS.md"},"https://github.com/apache/directory-fortress-core/blob/master/README-QUICKSTART-DOCKER-APACHEDS.md")),Object(b.b)("li",{parentName:"ul"},"\u7528\u5230\u7684 schema",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/apache/directory-fortress-core/tree/master/ldap/schema"},"https://github.com/apache/directory-fortress-core/tree/master/ldap/schema"))))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u8f7d\u5e76\u52a0\u8f7d schema\nwget https://raw.githubusercontent.com/apache/directory-fortress-core/master/ldap/schema/apacheds-fortress.ldif\nldapmodify -h localhost -p 10389 -D uid=admin,ou=system -w secret -a -f apacheds-fortress.ldif\n\n# \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 jetty-runner \u6765\u6267\u884c war\nwget http://maven.aliyun.com/nexus/content/groups/public/org/eclipse/jetty/jetty-runner/9.4.6.v20170531/jetty-runner-9.4.6.v20170531.jar -O jetty-runner.jar\n\njava -jar jetty-runner.jar --port 8081 fortress-rest.war\n")),Object(b.b)("h2",{id:"\u5e38\u89c1\u7ed3\u6784"},"\u5e38\u89c1\u7ed3\u6784"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"http://www.zytrax.com/books/ldap/ch3/"},"LDAP Schemas, objectClasses and Attributes"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"http://www.ldapexplorer.com/en/manual/107060000-ldap-object-classes.htm"},"Ldap Object Class"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"https://ldapwiki.com/wiki/ObjectClass"},"ObjectClass"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",{parentName:"p",href:"https://directory.apache.org/apacheds/basic-ug/3.2-basic-authorization.html"},"basic auth acl"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"dc=wener,dc=me"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"ou=users",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"cn=USERNAME - \u7528\u6237 - inetOrgPerson",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"uid \u552f\u4e00\u6807\u8bc6\u7b26"),Object(b.b)("li",{parentName:"ul"},"cn \u540d\u79f0"),Object(b.b)("li",{parentName:"ul"},"cn \u59d3"))))),Object(b.b)("li",{parentName:"ul"},"ou=groups",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"cn=GROUPNAME - \u5206\u7ec4 - groupOfNames",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"member - \u6210\u5458"),Object(b.b)("li",{parentName:"ul"},"entryDN - \u7ec4\u6210\u5458\u5c5e\u6027\u3001\u7ec4 DN \u5c5e\u6027"),Object(b.b)("li",{parentName:"ul"},"displayName - \u5982\u679c\u4e0d\u60f3\u663e\u793a cn \u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u8be5\u5c5e\u6027")))))))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5\u7b80\u5316\u64cd\u4f5c\nalias ldapsearch=\"ldapsearch -H ldap://127.0.0.1:10389 -D 'uid=admin,ou=system' -w admin\"\n# \u68c0\u6d4b\u7528\u6237\u662f\u5426\u5728\u7ec4\u4e2d\nldapsearch -b 'cn=developer,ou=groups,dc=example,dc=com' '(&(member=uid=wener,ou=users,dc=example,dc=com))'\n\nldapsearch -b 'ou=users,dc=incos,dc=dev' '(uid=wener.cyw)'\n")))}o.isMDXComponent=!0}}]);