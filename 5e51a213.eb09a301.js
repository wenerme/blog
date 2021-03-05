(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{335:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),l=(t(0),t(787)),i={id:"maven",title:"Maven",tags:["Maven","Java","\u7f16\u7a0b","\u6280\u5de7"]},c={unversionedId:"java/maven",id:"java/maven",isDocsHomePage:!1,title:"Maven",description:"Tips",source:"@site/notes/java/maven.md",slug:"/java/maven",permalink:"/notes/java/maven",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/maven.md",version:"current",sidebar:"docs",previous:{title:"\u70ed\u95e8\u95ee\u9898",permalink:"/notes/java/hot-qa"},next:{title:"Apache Wicket",permalink:"/notes/java/apache/wicket"}},p=[{value:"Tips",id:"tips",children:[]},{value:"pom.xml",id:"pomxml",children:[]},{value:"settings.xml",id:"settingsxml",children:[{value:"\u4ee3\u7406\u8bbe\u7f6e",id:"\u4ee3\u7406\u8bbe\u7f6e",children:[]}]},{value:"\u955c\u50cf",id:"\u955c\u50cf",children:[{value:"\u963f\u91cc\u4e91",id:"\u963f\u91cc\u4e91",children:[]},{value:"\u8c37\u6b4c",id:"\u8c37\u6b4c",children:[]},{value:"Settings",id:"settings",children:[]}]},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[{value:"maven-install-plugin",id:"maven-install-plugin",children:[]},{value:"maven-jar-plugin",id:"maven-jar-plugin",children:[]},{value:"maven-shade-plugin",id:"maven-shade-plugin",children:[]}]},{value:"maven-release-plugin",id:"maven-release-plugin",children:[{value:"maven-gpg-plugin",id:"maven-gpg-plugin",children:[]},{value:"spring-boot-maven-plugin",id:"spring-boot-maven-plugin",children:[]},{value:"\u751f\u6210 build-info",id:"\u751f\u6210-build-info",children:[]},{value:"git-commit-id-plugin",id:"git-commit-id-plugin",children:[]}]},{value:"\u4ed3\u5e93\u7ba1\u7406",id:"\u4ed3\u5e93\u7ba1\u7406",children:[]},{value:"\u4e2d\u592e\u4ed3\u5e93",id:"\u4e2d\u592e\u4ed3\u5e93",children:[{value:"Sonatype Central",id:"sonatype-central",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"optional vs provided",id:"optional-vs-provided",children:[]},{value:"Scope \u7684\u4f5c\u7528\u57df",id:"scope-\u7684\u4f5c\u7528\u57df",children:[]}]}],o={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Maven \u5305\u7c7b\u578b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pom - Project Object Model"),Object(l.b)("li",{parentName:"ul"},"jar - Java Application Archive"),Object(l.b)("li",{parentName:"ul"},"ear - Enterprise Application Archive"),Object(l.b)("li",{parentName:"ul"},"war - Web Application Archive "),Object(l.b)("li",{parentName:"ul"},"rar - Resource Adapter Archive")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),Object(l.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"maven.javadoc.skip"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e0d\u8c03\u7528 Javadoc \u63d2\u4ef6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"maven.test.skip"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e0d\u7f16\u8bd1\u6d4b\u8bd5\uff0c\u4e0d\u6267\u884c\u6d4b\u8bd5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"maven.test.skip.exec"),Object(l.b)("td",{parentName:"tr",align:null},"\u4e0d\u6267\u884c\u6d4b\u8bd5\uff0c\u4f46\u7f16\u8bd1\u6d4b\u8bd5\u5305")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"maven.repo.remote"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fdc\u7a0b\u4ed3\u5e93")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"maven.repo.local"),Object(l.b)("td",{parentName:"tr",align:null},"\u672c\u5730\u4ed3\u5e93")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"socksProxyHost",Object(l.b)("br",null),"socksProxyPort"),Object(l.b)("td",{parentName:"tr",align:null},"Socks \u4ee3\u7406")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"httpProxyHost",Object(l.b)("br",null),"httpProxyPort"),Object(l.b)("td",{parentName:"tr",align:null},"Http \u4ee3\u7406")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"httpsProxyHost",Object(l.b)("br",null),"httpsProxyPort"),Object(l.b)("td",{parentName:"tr",align:null},"Https \u4ee3\u7406")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"-pl, --projects\n        Build specified reactor projects instead of all projects\n-am, --also-make\n        If project list is specified, also build projects required by the list\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u4fee\u6539\u8fdc\u7a0b\u4ed3\u5e93\u548c\u672c\u5730\u4ed3\u5e93\nmvn package \\\n  -Dmaven.repo.remote=http://maven.aliyun.com/nexus/content/groups/public \\\n  -Dmaven.repo.local="$HOME/repo"\n\n# \u4e0b\u8f7d\u5305\nmvn dependency:get \\\n  -DrepoUrl=http://maven.aliyun.com/nexus/content/groups/public \\\n  -Dartifact=org.redisson:redisson:3.2.0\n\n# \u83b7\u53d6\u9879\u76ee\u4fe1\u606f,\u5728\u547d\u4ee4\u884c\u4e0b\u6bd4\u8f83\u6709\u7528\nmvn -q -Dexec.executable="echo" -Dexec.args=\'${project.artifactId}\' --non-recursive org.codehaus.mojo:exec-maven-plugin:exec\n\n# \u5f3a\u5236\u66f4\u65b0 SNAPSHOT\nmvn clean install -U\n')),Object(l.b)("p",null,"\u603b\u91cf\n",Object(l.b)("a",{parentName:"p",href:"https://search.maven.org/stats"},"https://search.maven.org/stats")),Object(l.b)("p",null,"\u5b98\u65b9 mirror\n",Object(l.b)("a",{parentName:"p",href:"http://repo.maven.apache.org/maven2/.meta/repository-metadata.xml"},"http://repo.maven.apache.org/maven2/.meta/repository-metadata.xml")),Object(l.b)("h2",{id:"pomxml"},"pom.xml"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/pom.html"},"POM Reference"))),Object(l.b)("h2",{id:"settingsxml"},"settings.xml"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"$HOME/.m2/settings.xml"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u4ece Maven \u5b89\u88c5\u76ee\u5f55\u62f7\u8d1d")))),Object(l.b)("h3",{id:"\u4ee3\u7406\u8bbe\u7f6e"},"\u4ee3\u7406\u8bbe\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<proxy>\n    <id>myproxy</id>\n    <active>true</active>\n    <protocol>http</protocol>\n    <host>127.0.0.1</host>\n    <port>8087</port>\n    <nonProxyHosts>localhost|127.0.0.1</nonProxyHosts>\n</proxy>\n")),Object(l.b)("h2",{id:"\u955c\u50cf"},"\u955c\u50cf"),Object(l.b)("p",null,"\u4e00\u822c\u4f7f\u7528\u955c\u50cf\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5728 POM \u4e2d\u6dfb\u52a0\u4ed3\u5e93",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7c98\u8d34\u590d\u5236\u4e0b\u5c31\u80fd\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u6301\u4e45\u5728\u9879\u76ee\u4e2d",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56e2\u961f\u4e2d\u5176\u4ed6\u4eba\u4e5f\u4e0d\u9700\u8981\u914d\u7f6e"))),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u5728\u955c\u50cf\u7684\u4ed3\u5e93\u4e2d\u627e\u4e0d\u5230\u4f1a\u5728\u4e2d\u592e\u4ed3\u5e93\u627e"))),Object(l.b)("li",{parentName:"ul"},"\u5728 setting \u4e2d\u6dfb\u52a0\u955c\u50cf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u8c03\u6574 setting.xml \u76f8\u5bf9\u9ebb\u70e6\u4e00\u4e9b"),Object(l.b)("li",{parentName:"ul"},"\u5728\u4ed3\u5e93\u4e2d\u627e\u4e0d\u5230\u4f1a\u51fa\u9519"),Object(l.b)("li",{parentName:"ul"},"\u5f53\u9879\u76ee\u4e2d\u6709\u591a\u4e2a\u6a21\u5757\u65f6,\u4f7f\u7528\u955c\u50cf\u53ef\u80fd\u4f1a\u51fa\u73b0\u627e\u4e0d\u5230\u672c\u5730\u6a21\u5757\u7684\u95ee\u9898"))),Object(l.b)("li",{parentName:"ul"},"\u5728 setting \u4e2d\u6dfb\u52a0 profile")),Object(l.b)("h3",{id:"\u963f\u91cc\u4e91"},"\u963f\u91cc\u4e91"),Object(l.b)("p",null,"\u53ef\u4ee5\u5728 POM \u4e2d\u52a0\u5165\u5982\u4e0b\u4ed3\u5e93\u914d\u7f6e\u6765\u4f7f\u7528 \u963f\u91cc\u4e91\u7684 Maven \u4ed3\u5e93\u955c\u50cf\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u6ce8\u610f\n\u963f\u91cc\u4e91 Maven \u4ed3\u5e93\u955c\u50cf\u540c\u6b65\u76f8\u5bf9\u8f83\u6162,\u53ef\u80fd\u51e0\u5929\u6216\u8005\u5341\u51e0\u5929\u624d\u80fd\u540c\u6b65")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/"},"https://repo.maven.apache.org/maven2/"),"\n",Object(l.b)("a",{parentName:"p",href:"https://repo1.maven.apache.org/maven2/"},"https://repo1.maven.apache.org/maven2/")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n    <repository>\n        <id>aliyun</id>\n        <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n    </repository>\n</repositories>\n<pluginRepositories>\n    <pluginRepository>\n        <id>aliyun</id>\n        <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n    </pluginRepository>\n</pluginRepositories>\n")),Object(l.b)("h3",{id:"\u8c37\u6b4c"},"\u8c37\u6b4c"),Object(l.b)("p",null,"\u540c\u6b65\u901f\u5ea6\u5feb,\u8bbf\u95ee\u901f\u5ea6\u4e5f\u5f88\u5feb,\u6ca1\u6709\u88ab\u5c01"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n    <repository>\n       <id>google</id>\n       <url>https://maven-central.storage.googleapis.com</url>\n    </repository>\n</repositories>\n<pluginRepositories>\n    <pluginRepository>\n        <id>google</id>\n        <url>https://maven-central.storage.googleapis.com</url>\n    </pluginRepository>\n</pluginRepositories>\n")),Object(l.b)("h3",{id:"settings"},"Settings"),Object(l.b)("p",null,"\u4e5f\u53ef\u4ee5\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"settings.xml")," \u91cc\u914d\u7f6e"),Object(l.b)("p",null,"Android\n",Object(l.b)("a",{parentName:"p",href:"https://maven.google.com/web/index.html"},"https://maven.google.com/web/index.html")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<settings>\n  <mirrors>\n    \x3c!-- Google --\x3e\n    <mirror>\n      <id>google-maven-central</id>\n      <name>Google Maven Central</name>\n      <url>https://maven-central.storage.googleapis.com</url>\n      <mirrorOf>central</mirrorOf>\n    </mirror>\n    \x3c!-- \u963f\u91cc --\x3e\n    <mirror>\n         <id>aliyun</id>\n         <mirrorOf>central</mirrorOf>\n         <name>aliyun</name>\n         <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n    </mirror>\n  </mirrors>\n</settings>\n")),Object(l.b)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u63d2\u4ef6\u5982\u679c\u4e0d\u5236\u5b9a groupId \u5219\u9ed8\u8ba4\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"org.apache.maven.plugins")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/plugins/"},"\u5b98\u65b9\u63d2\u4ef6\u5217\u8868")),Object(l.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u751f\u547d\u5468\u671f\u5305\u542b\u7684\u63d2\u4ef6 ",Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/ref/current/maven-core/default-bindings.html"},"Plugin Bindings for default Lifecycle Reference"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"pom \u5305",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"install - maven-install-plugin:install"),Object(l.b)("li",{parentName:"ul"},"deploy - maven-deploy-plugin:deploy"))),Object(l.b)("li",{parentName:"ul"},"jar \u5305",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"process-resources - maven-resources-plugin:resources"),Object(l.b)("li",{parentName:"ul"},"compile - maven-compiler-plugin:compile"),Object(l.b)("li",{parentName:"ul"},"process-test-resources - maven-resources-plugin:testResources"),Object(l.b)("li",{parentName:"ul"},"test-compile - maven-compiler-plugin:testCompile"),Object(l.b)("li",{parentName:"ul"},"test - maven-surefire-plugin:test"),Object(l.b)("li",{parentName:"ul"},"package - maven-jar-plugin:jar"),Object(l.b)("li",{parentName:"ul"},"install - maven-install-plugin:install"),Object(l.b)("li",{parentName:"ul"},"deploy - maven-deploy-plugin:deploy")))))),Object(l.b)("p",null,"mvn dependency:resolve -Dclassifier=javadoc\nmvn dependency:resolve -Dclassifier=sources"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"<profile>\n    <id>downloadSources</id>\n    <properties>\n        <downloadSources>true</downloadSources>\n        <downloadJavadocs>true</downloadJavadocs>           \n    </properties>\n</profile>\n")),Object(l.b)("activeProfiles",null,Object(l.b)("activeProfile",null,"downloadSources")),Object(l.b)("p",null,"mvn -N io.takari:maven:0.7.7:wrapper -Dmaven=3.6.3"),Object(l.b)("h3",{id:"maven-install-plugin"},"maven-install-plugin"),Object(l.b)("h4",{id:"\u5b89\u88c5-jar-\u5305\u5230\u672c\u5730\u4ed3\u5e93"},"\u5b89\u88c5 Jar \u5305\u5230\u672c\u5730\u4ed3\u5e93"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"mvn install:install-file \\\n  -Dfile=mylib-$VERSION.jar \\\n  -DgroupId=me.wener.lib \\\n  -DartifactId=mylib \\\n  -Dversion=$VERSION \\\n  -Dpackaging=jar \\\n  -DgeneratePom=true\n")),Object(l.b)("h3",{id:"maven-jar-plugin"},"maven-jar-plugin"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-jar-plugin"},"Apache Maven JAR Plugin"))),Object(l.b)("h3",{id:"maven-shade-plugin"},"maven-shade-plugin"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-shade-plugin/index.html"},"Apache Maven Shade Plugin"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- \u5e38\u7528\u914d\u7f6e\uff0c\u6309\u9700\u7c98\u8d34 --\x3e\n<configuration>\n    \x3c!-- \u4e0d\u521b\u5efa reduced pom \u6587\u4ef6 --\x3e\n    <createDependencyReducedPom>false</createDependencyReducedPom>\n    \x3c!-- \u9644\u52a0 shaded \u7684\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4f1a\u4e0a\u4f20 shaded \u7684\u95ee\u9898 --\x3e\n    <shadedArtifactAttached>true</shadedArtifactAttached>\n    \x3c!-- shaded \u7684 classfier\uff0c\u4f9d\u8d56\u65f6\u6307\u5b9a classfier \u5373\u53ef --\x3e\n    <shadedClassifierName>jar-with-dependencies</shadedClassifierName>\n    \x3c!-- \u6392\u9664\u7b7e\u540d\u76f8\u5173\uff0c\u5426\u5219 shade \u540e\u7b7e\u540d\u5f02\u5e38\uff0c\u5207\u6392\u9664 java9 \u540e\u7684 module \u4fe1\u606f --\x3e\n    <filters>\n        <filter>\n            <artifact>*:*</artifact>\n            <excludes>\n                <exclude>META-INF/*.SF</exclude>\n                <exclude>META-INF/*.DSA</exclude>\n                <exclude>META-INF/*.RSA</exclude>\n                <exclude>module-info.class</exclude>\n            </excludes>\n        </filter>\n    </filters>\n    <artifactSet>\n        <excludes>\n            \x3c!-- \u6392\u9664\u5305\uff0c\u4e0d\u505a shade --\x3e\n            <exclude>org.slf4j:*</exclude>\n        </excludes>\n    </artifactSet>\n    \x3c!-- \u8f6c\u6362\uff0c\u6309\u9700\u914d\u7f6e --\x3e\n    <transformers>\n        \x3c!-- \u5408\u5e76\u6587\u4ef6\u4e3a\u4e00\u4e2a\uff0c\u9644\u52a0\u7684\u65b9\u5f0f --\x3e\n        <transformer implementation="org.apache.maven.plugins.shade.resource.AppendingTransformer">\n            <resource>config.properties</resource>\n        </transformer>\n        \x3c!-- \u5904\u7406 ServiceLoader \u7684\u5b9a\u4e49 --\x3e\n        <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/>\n        \x3c!-- \u5408\u5e76 META-INF/NOTICE.TXT \u6587\u4ef6 --\x3e\n        <transformer implementation="org.apache.maven.plugins.shade.resource.ApacheNoticeResourceTransformer"/>\n    </transformers>\n    \x3c!-- \u907f\u514d\u7248\u672c\u51b2\u7a81\uff0c\u505a shade --\x3e\n    <relocations>\n        <relocation>\n            <pattern>com.google.common</pattern>\n            <shadedPattern>me.wener.shade.guava</shadedPattern>\n        </relocation>\n    </relocations>\n</configuration>\n')),Object(l.b)("h4",{id:"shade-one--relocation"},"shade one & relocation"),Object(l.b)("p",null,"\u5c06 guava \u91cd\u5b9a\u4f4d\u5230 ",Object(l.b)("inlineCode",{parentName:"p"},"me.wener.guava")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <artifactId>maven-shade-plugin</artifactId>\n    <executions>\n        <execution>\n            <phase>package</phase>\n            <goals>\n                <goal>shade</goal>\n            </goals>\n            <configuration>\n                <artifactSet>\n                    <includes>\n                        <include>com.google.guava:guava</include>\n                    </includes>\n                </artifactSet>\n                <relocations>\n                    <relocation>\n                        <pattern>com.google.common</pattern>\n                        <shadedPattern>me.wener.guava</shadedPattern>\n                    </relocation>\n                </relocations>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(l.b)("h4",{id:"shade-all--relocation--new-jar"},"shade all & relocation & new jar"),Object(l.b)("p",null,"\u4f1a\u751f\u6210\u53e6\u5916\u4e00\u4e2a jar ",Object(l.b)("inlineCode",{parentName:"p"},"jraphql-${project.version}-shaded")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n  <artifactId>maven-shade-plugin</artifactId>\n  <executions>\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <finalName>jraphql-${project.version}-shaded</finalName>\n        <relocations>\n          <relocation>\n            <pattern>com.google.common</pattern>\n            <shadedPattern>shaded.com.google.common</shadedPattern>\n          </relocation>\n        </relocations>\n        <artifactSet>\n          <includes>\n            <include>*:*</include>\n          </includes>\n        </artifactSet>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n")),Object(l.b)("h2",{id:"maven-release-plugin"},"maven-release-plugin"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://maven.apache.org/maven-release/maven-release-plugin/"},"Maven Release Plugin")),Object(l.b)("li",{parentName:"ul"},"\u6267\u884c\u76ee\u6807",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"release:clean \u5728\u51c6\u5907\u53d1\u5e03\u540e\u6e05\u7406"),Object(l.b)("li",{parentName:"ul"},"release:prepare \u5728 SCM \u4e2d\u751f\u6210\u51c6\u5907\u63d0\u4ea4"),Object(l.b)("li",{parentName:"ul"},"release:prepare-with-pom \u5728 SCM \u4e2d\u751f\u6210\u51c6\u5907\u63d0\u4ea4\u5e76\u751f\u6210 POM"),Object(l.b)("li",{parentName:"ul"},"release:rollback \u56de\u9000\u4e4b\u524d\u7684\u53d1\u5e03"),Object(l.b)("li",{parentName:"ul"},"release:perform \u4ece SCM \u6267\u884c\u53d1\u5e03"),Object(l.b)("li",{parentName:"ul"},"release:stage \u5728\u5236\u5b9a\u7684\u76ee\u5f55\u4ece SCM \u53d1\u5e03"),Object(l.b)("li",{parentName:"ul"},"release:branch \u521b\u5efa\u5206\u652f\u5e76\u66f4\u65b0\u7248\u672c"),Object(l.b)("li",{parentName:"ul"},"release:update-versions \u66f4\u65b0 POM \u4e2d\u7684\u7248\u672c"))),Object(l.b)("li",{parentName:"ul"},"\u57fa\u672c\u7684\u903b\u8f91\u662f\u5148\u63d0\u4ea4\u5230 SCM\uff0c\u5728\u4ece SCM \u62c9\u53d6\u5230\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55\u8fdb\u884c\u6784\u5efa\u53d1\u5e03")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5e2e\u52a9\nmvn release:help\n# \u51c6\u5907\u53d1\u5e03\nmvn release:clean release:prepare\n# \u6267\u884c\u53d1\u5e03\n# deploy & push\nmvn release:perform\n# \u56de\u6eda\u64cd\u4f5c\nmvn release:rollback\n")),Object(l.b)("h3",{id:"maven-gpg-plugin"},"maven-gpg-plugin"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-gpg-plugin"},"maven-gpg-plugin")),Object(l.b)("li",{parentName:"ul"},"\u5728\u90e8\u7f72\u5230\u4ed3\u5e93\u65f6\u4e00\u822c\u8981\u6c42\u505a gpg \u7b7e\u540d"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/sevntu-checkstyle/dsm-maven-plugin/wiki/How-to-config-GPG-and-sign-artifact-with-it"},"How to config GPG and sign artifact with it"))),Object(l.b)("p",null,"GPG \u7684\u57fa\u672c\u64cd\u4f5c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 key\ngpg --gen-key\n# \u67e5\u770b key\ngpg --list-keys\n# \u4e0a\u4f20\ngpg --keyserver hkp://pool.sks-keyservers.net --send-keys 09CB6FEF\n# \u751f\u6210\u7b7e\u540d\ngpg -ab artifact.jar\n# \u9a8c\u8bc1\u7b7e\u540d\ngpg --verify artifact.jar.asc\n")),Object(l.b)("p",null,"\u5728\u9a8c\u8bc1\u65f6\u8fdb\u884c\u7b7e\u540d\u64cd\u4f5c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-gpg-plugin</artifactId>\n    <version>1.4</version>\n    <executions>\n        <execution>\n            <id>sign-artifacts</id>\n            <phase>verify</phase>\n            <goals>\n                <goal>sign</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")),Object(l.b)("h3",{id:"spring-boot-maven-plugin"},"spring-boot-maven-plugin"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/maven-plugin"},"Spring Boot Maven Plugin"))),Object(l.b)("h3",{id:"\u751f\u6210-build-info"},"\u751f\u6210 build-info"),Object(l.b)("p",null,"\u9ed8\u8ba4\u4f4d\u7f6e\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"META-INF/build-info.properties")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<executions>\n  <execution>\n    <goals>\n      <goal>build-info</goal>\n    </goals>\n    <configuration>\n      <additionalProperties>\n        <encoding.source>UTF-8</encoding.source>\n        <encoding.reporting>UTF-8</encoding.reporting>\n        <java.source>${maven.compiler.source}</java.source>\n        <java.target>${maven.compiler.target}</java.target>\n      </additionalProperties>\n    </configuration>\n  </execution>\n</executions>\n")),Object(l.b)("h3",{id:"git-commit-id-plugin"},"git-commit-id-plugin"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/ktoso/maven-git-commit-id-plugin"},"ktoso/maven-git-commit-id-plugin"))),Object(l.b)("p",null,"Maven plugin which includes build-time git repository information into an POJO / *.properties"),Object(l.b)("h4",{id:"\u53ea\u751f\u6210\u90e8\u5206\u5c5e\u6027"},"\u53ea\u751f\u6210\u90e8\u5206\u5c5e\u6027"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>pl.project13.maven</groupId>\n    <artifactId>git-commit-id-plugin</artifactId>\n    <executions>\n        <execution>\n            <goals>\n                <goal>revision</goal>\n            </goals>\n        </execution>\n    </executions>\n    <configuration>\n        <verbose>false</verbose>\n        <dateFormat>yyyy-MM-dd'T'HH:mm:ssZ</dateFormat>\n        <generateGitPropertiesFile>true</generateGitPropertiesFile>\n        <generateGitPropertiesFilename>\n            ${project.build.outputDirectory}/git.properties\n        </generateGitPropertiesFilename>\n        <includeOnlyProperties>\n            <includeOnlyProperty>^git.branch$</includeOnlyProperty>\n            <includeOnlyProperty>^git.build.time$</includeOnlyProperty>\n            <includeOnlyProperty>^git.build.version$</includeOnlyProperty>\n            <includeOnlyProperty>^git.commit.id.abbrev$</includeOnlyProperty>\n            <includeOnlyProperty>^git.commit.time$</includeOnlyProperty>\n        </includeOnlyProperties>\n    </configuration>\n</plugin>\n")),Object(l.b)("h2",{id:"\u4ed3\u5e93\u7ba1\u7406"},"\u4ed3\u5e93\u7ba1\u7406"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/repository-management.html"},"Best Practice - Using a Repository Manager")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.jfrog.com/confluence/display/RTF/Artifactory+Comparison+Matrix"},"Artifactory \u7279\u6027\u6bd4\u8f83")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.sonatype.com/nexus-repository-oss"},"Nexus OSS"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6807\u51c6\u7684 Maven \u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 Bower,Docker,Git LFS,Maven,npm,NuGet,PyPI,Ruby Gems,Yum"),Object(l.b)("li",{parentName:"ul"},"3.x \u652f\u6301 Docker \u5c31\u50cf\u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u6709 Docker \u955c\u50cf"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://jfrog.com/open-source/"},"JFrog"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7b2c\u4e8c\u5927\u5f00\u6e90 Maven \u4ed3\u5e93"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://archiva.apache.org"},"Apache Archiva"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# ARCHIVA_BASE \u53ef\u4fee\u6539\u5b58\u50a8\u4f4d\u7f6e, \u9ed8\u8ba4\u4e3a /var/archiva\n# ARCHIVA_CONTEXT_PATH \u53ef\u5728\u53cd\u5411\u4ee3\u7406\u662f\u4f7f\u7528, \u9ed8\u8ba4\u4e3a /\ndocker run -v $PWD/archiva:/var/archiva -p 8080:8080 -d ninjaben/archiva-docker\n")),Object(l.b)("h2",{id:"\u4e2d\u592e\u4ed3\u5e93"},"\u4e2d\u592e\u4ed3\u5e93"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://maven.apache.org/guides/mini/guide-central-repository-upload.html"},"Guide to uploading artifacts to the Central Repository")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://dzone.com/articles/deploy-maven-central"},"Deploy to Maven Central Repository"))),Object(l.b)("h3",{id:"sonatype-central"},"Sonatype Central"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://central.sonatype.org/pages/ossrh-guide.html"},"OSSRH Guide")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://central.sonatype.org/pages/apache-maven.html"},"Deploying to OSSRH with Apache Maven")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://central.sonatype.org/pages/requirements.html"},"Requirements")),Object(l.b)("li",{parentName:"ul"},"\u53d1\u5e03\u5230 Sonatype \u540e\uff0c\u5927\u7ea6 10m \u540e\u4f1a\u540c\u6b65\u5230\u4e2d\u592e\u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u5750\u6807\u7533\u8bf7",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5728 ",Object(l.b)("a",{parentName:"li",href:"https://issues.sonatype.org/"},"https://issues.sonatype.org/")," \u521b\u5efa\u8d26\u53f7"),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a issues \u63cf\u8ff0\u5e0c\u671b\u4f7f\u7528\u7684 groupId \u5e76\u7b80\u5355\u9610\u8ff0\u653e\u7684\u5185\u5bb9"),Object(l.b)("li",{parentName:"ul"},"\u7b49\u5f85\u5ba1\u6279\u5b8c\u6210"))),Object(l.b)("li",{parentName:"ul"},"\u8981\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b Javadoc \u548c Sources"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 GPG/PGP \u7b7e\u540d\uff0c\u751f\u6210 ",Object(l.b)("inlineCode",{parentName:"li"},".asc")," \u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"pom \u8981\u6c42",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6b63\u786e\u7684\u5750\u6807"),Object(l.b)("li",{parentName:"ul"},"\u7248\u672c\u4e0d\u80fd\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"-SNAPSHOT")),Object(l.b)("li",{parentName:"ul"},"\u540d\u5b57\uff0c\u63cf\u8ff0\uff0c\u7f51\u5740 - name,description,url"),Object(l.b)("li",{parentName:"ul"},"name \u53ef\u63a5\u53d7 ",Object(l.b)("inlineCode",{parentName:"li"},"${project.groupId}:${project.artifactId}")),Object(l.b)("li",{parentName:"ul"},"\u8bb8\u53ef\u4fe1\u606f - licenses"),Object(l.b)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u4fe1\u606f - developers"),Object(l.b)("li",{parentName:"ul"},"SCM \u4fe1\u606f - scm")))))),Object(l.b)("h4",{id:"maven-\u90e8\u7f72"},"Maven \u90e8\u7f72"),Object(l.b)("h4",{id:"\u624b\u52a8\u90e8\u7f72"},"\u624b\u52a8\u90e8\u7f72"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide\n\n# \u7f16\u8bd1\u6253\u5305\nmvn jar:jar source:jar javadoc:jar\ncd target\ncp ../pom.xml .\n# \u7b7e\u540d\nNAME=MyLib-0.0.1\nrm *.asc\ngpg -ab pom.xml\ngpg -ab $NAME.jar\ngpg -ab $NAME-sources.jar\ngpg -ab $NAME-javadoc.jar\n\n# http://maven.apache.org/plugins/maven-gpg-plugin/sign-mojo.html\n# \u53ef\u4ee5\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4e0a\u6307\u5b9a\u5bc6\u7801\nPASSPHRASE=xxx\nmvn gpg:sign-and-deploy-file -Dgpg.passphrase=$PASSPHRASE \\\n    -Durl=https://oss.sonatype.org/service/local/staging/deploy/maven2/ \\\n  -DrepositoryId=sonatype-nexus-staging -DpomFile=pom.xml \\\n  -Dfile=NAME.jar\n\nmvn gpg:sign-and-deploy-file -Dgpg.passphrase=$PASSPHRASE \\\n    -Durl=https://oss.sonatype.org/service/local/staging/deploy/maven2/ \\\n  -DrepositoryId=sonatype-nexus-staging -DpomFile=pom.xml \\\n  -Dfile=$NAME-sources.jar -Dclassifier=sources\n\nmvn gpg:sign-and-deploy-file -Dgpg.passphrase=$PASSPHRASE \\\n    -Durl=https://oss.sonatype.org/service/local/staging/deploy/maven2/ \\\n  -DrepositoryId=sonatype-nexus-staging -DpomFile=pom.xml \\\n  -Dfile=$NAME-javadoc.jar -Dclassifier=javadoc\n\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"optional-vs-provided"},"optional vs provided"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"optional \u53ea\u5f71\u54cd\u5305\u7684\u4f20\u9012\u6027, \u4e0d\u5f71\u54cd\u5305\u7684 ClassPath"),Object(l.b)("li",{parentName:"ul"},"provided \u53ea\u5728 compile \u548c test \u4e0b\u5b58\u5728, \u5e76\u4e14\u4e0d\u4f1a\u4f20\u9012"),Object(l.b)("li",{parentName:"ul"},"\u6240\u4ee5\u533a\u522b\u5728\u4e8e optional \u5728 runtime \u65f6\u751f\u6548, \u800c provided \u4e0d\u751f\u6548")),Object(l.b)("h3",{id:"scope-\u7684\u4f5c\u7528\u57df"},"Scope \u7684\u4f5c\u7528\u57df"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"scope"),Object(l.b)("th",{parentName:"tr",align:null},"compile"),Object(l.b)("th",{parentName:"tr",align:null},"test"),Object(l.b)("th",{parentName:"tr",align:null},"runtime"),Object(l.b)("th",{parentName:"tr",align:null},"transitive"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"compile"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"test"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"provided"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"runtime"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"system"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"Y"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"Y")))))}b.isMDXComponent=!0},787:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=b(t),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return t?r.a.createElement(d,c(c({ref:n},o),{},{components:t})):r.a.createElement(d,c({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=t[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);