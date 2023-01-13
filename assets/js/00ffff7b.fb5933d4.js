"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[4817],{3905:(e,n,o)=>{o.d(n,{Zo:()=>g,kt:()=>m});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},g=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,p=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?t.createElement(p,a(a({ref:n},g),{},{components:o})):t.createElement(p,a({ref:n},g))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},63070:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(87462),r=(o(67294),o(3905));const i={},a="JDK Logger Monitor",l={unversionedId:"submodule/Connector/extensions/common/monitor/monitor-jdk-logger/README",id:"submodule/Connector/extensions/common/monitor/monitor-jdk-logger/README",title:"JDK Logger Monitor",description:"This extension provides a Logger which is an implementation of edc Monitor interface. It is based on java.util.logging package so it doesn't introduce any additional dependencies. As this extension is based on MonitorExtension which means this logger extension will load during the runtime initialization and all monitor logs (including edc core framework) will be forwarded to this logger.",source:"@site/docs/submodule/Connector/extensions/common/monitor/monitor-jdk-logger/README.md",sourceDirName:"submodule/Connector/extensions/common/monitor/monitor-jdk-logger",slug:"/submodule/Connector/extensions/common/monitor/monitor-jdk-logger/",permalink:"/edc-docs/docs/submodule/Connector/extensions/common/monitor/monitor-jdk-logger/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/common/monitor/monitor-jdk-logger/README.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Usages",id:"usages",level:2},{value:"Logging Configuration",id:"logging-configuration",level:2},{value:"Know limitation",id:"know-limitation",level:2}],g={toc:c};function d(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jdk-logger-monitor"},"JDK Logger Monitor"),(0,r.kt)("p",null,"This extension provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger")," which is an implementation of edc ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitor")," interface. It is based on ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.logging")," package so it doesn't introduce any additional dependencies. As this extension is based on ",(0,r.kt)("inlineCode",{parentName:"p"},"MonitorExtension")," which means this logger extension will load during the runtime initialization and all monitor logs (including edc core framework) will be forwarded to this logger."),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("p",null,"To use this logger extension just add this monitor-jdk-logger extension package in your project dependency."),(0,r.kt)("h2",{id:"logging-configuration"},"Logging Configuration"),(0,r.kt)("p",null,"As this extension usages ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.logging")," so to specify logger handler, format, level etc. provide a java properties file e.g. logging.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"handlers = java.util.logging.ConsoleHandler\n.level = INFO\njava.util.logging.ConsoleHandler.level = ALL\njava.util.logging.ConsoleHandler.formatter = java.util.logging.SimpleFormatter\njava.util.logging.SimpleFormatter.format = %1$tF %1$tT %4$s : %5$s %n\n")),(0,r.kt)("p",null,"To use this file pass it as jvm arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djava.util.logging.config.file=logging.properties")),(0,r.kt)("h2",{id:"know-limitation"},"Know limitation"),(0,r.kt)("p",null,"A class level logger cannot be created as current Monitor interface methods does not have class as method arguments . So instead a global or extension level can be used."))}d.isMDXComponent=!0}}]);