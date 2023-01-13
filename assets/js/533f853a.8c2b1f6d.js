"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[7259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},a="Configuration",c={unversionedId:"submodule/Connector/docs/developer/architecture/configuration/README",id:"submodule/Connector/docs/developer/architecture/configuration/README",title:"Configuration",description:"It is possible to configure the Eclipse Dataspace Connector. All configuration are retrieved by their key from an",source:"@site/docs/submodule/Connector/docs/developer/architecture/configuration/README.md",sourceDirName:"submodule/Connector/docs/developer/architecture/configuration",slug:"/submodule/Connector/docs/developer/architecture/configuration/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/architecture/configuration/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/architecture/configuration/README.md",tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Create new Setting",id:"create-new-setting",level:2},{value:"Configuration Extension",id:"configuration-extension",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"It is possible to configure the Eclipse Dataspace Connector. All configuration are retrieved by their key from an\nextension, that implements the Configuration Extension interface."),(0,o.kt)("p",null,"Whether this configuration may happen when the application is running or only on start-up may vary for each\nconfiguration extension."),(0,o.kt)("h2",{id:"create-new-setting"},"Create new Setting"),(0,o.kt)("p",null,"Settings are identified by their key. When creation new setting please follow the best practices listed below."),(0,o.kt)("p",null,"Settings are retrieved from the ServiceExtensionContext interface."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Best practices for Settings"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setting keys start with ",(0,o.kt)("em",{parentName:"li"},"edc")),(0,o.kt)("li",{parentName:"ul"},"setting keys are defined in ",(0,o.kt)("em",{parentName:"li"},"private static final")," fields"),(0,o.kt)("li",{parentName:"ul"},"setting fields are annotated with the ",(0,o.kt)("em",{parentName:"li"},"@Setting")," marker interface"),(0,o.kt)("li",{parentName:"ul"},"settings have a valid default value")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Setting")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class ExampleSetting {\n\n    @Setting\n    private final static String EDC_IDS_TITLE = "edc.ids.title";\n\n    private final static String DEFAULT_TITLE = "Default Title";\n\n    private String getTitle(ServiceExtensionContext context) {\n        return context.getSetting(EDC_IDS_TITLE, DEFAULT_TITLE);\n    }\n\n}\n')),(0,o.kt)("h2",{id:"configuration-extension"},"Configuration Extension"),(0,o.kt)("p",null,"The integration of each configuration extension may vary. Please have a look at their corresponding README.md files."),(0,o.kt)("p",null,"The following extensions implement the ConfigurationExtension interface."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/edc-docs/docs/submodule/Connector/extensions/common/configuration/configuration-filesystem/"},"File System Configuration"))))}p.isMDXComponent=!0}}]);