"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[6578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={},i="Title of the Decision Record",l={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/README",id:"submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/README",title:"Title of the Decision Record",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review",slug:"/submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/README.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Approach",id:"approach",level:2},{value:"Spi",id:"spi",level:3},{value:"Core",id:"core",level:3},{value:"Extensions",id:"extensions",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"title-of-the-decision-record"},"Title of the Decision Record"),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,'The project structure needs to be changed, to follow a "component" structure.'),(0,r.kt)("h2",{id:"rationale"},"Rationale"),(0,r.kt)("p",null,"Currently it's hard for a new developer or adopter to understand the different components of the application are composed, in particular\n",(0,r.kt)("inlineCode",{parentName:"p"},"control-plane"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data-plane"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"federated-catalog")," etc..."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A component is a particular EDC combination of dependencies that respond to a particular need, e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"control-plane"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data-plane"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data-plane-selector"),".\nThis would help developers to orient themselves in the codebase more easily and separate responsibilities in a better way.")),(0,r.kt)("p",null,"The goal of this review is to have a clearer structure."),(0,r.kt)("h2",{id:"approach"},"Approach"),(0,r.kt)("h3",{id:"spi"},"Spi"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"spi")," module should be refactored as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spi/common/catalog-spi\nspi/common/core-spi\nspi/common/transport-spi\nspi/common/web-spi\nspi/control-plane\nspi/control-plane/asset-spi\nspi/control-plane/contract-spi\nspi/control-plane/policy-spi\nspi/control-plane/transfer-spi\nspi/data-plane/data-plane-spi\nspi/data-plane/data-plane-selector-spi\n")),(0,r.kt)("p",null,"Every component should have its own ",(0,r.kt)("inlineCode",{parentName:"p"},"spi"),' module, then other "common" spi could exist as well (like ',(0,r.kt)("inlineCode",{parentName:"p"},"core"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"transport")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),")"),(0,r.kt)("p",null,"Some details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"asset-spi")," would be extracted from the ",(0,r.kt)("inlineCode",{parentName:"li"},"core-spi")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"*Service")," interfaces should be moved to the ",(0,r.kt)("inlineCode",{parentName:"li"},"control-plane/*-spi"))),(0,r.kt)("h3",{id:"core"},"Core"),(0,r.kt)("p",null,"The responsibility of the core modules is to provide a working base version of every component, so they should provide\na default implementation for every interface present in the relative ",(0,r.kt)("inlineCode",{parentName:"p"},"spi")," module, so these three modules will be introduced:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"control-plane-core"),": would contain all the default implementations of the stores and the services and an extension that register them as default"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-core"),": is the current ",(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-framework")," extension, will register all the default implementations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-selector-core"),": is the current ",(0,r.kt)("inlineCode",{parentName:"li"},"selector-core")," module")),(0,r.kt)("p",null,"All of them should extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"base-core")," module. The ",(0,r.kt)("inlineCode",{parentName:"p"},"defaults")," module would probably disappear (replaced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"<component>-core")," ones)"),(0,r.kt)("h3",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,"This component separation will be put in place also in the ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions")," folder, as some extensions are needed only by one of the components, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"control-plane"),': data management api, provisioners (s3, blobstorage, http...), "stores" sql/cosmos implementations (for assets, contracts, transfer process, policies...), data-plane-selector client, ...'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-plane"),": implementations of the source/sink interfaces like ",(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-http"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-s3"),", etc.., data plane specific api (",(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-api")," module)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-selector"),": implementations of the ",(0,r.kt)("inlineCode",{parentName:"li"},"DataPlaneInstanceStore")),(0,r.kt)("li",{parentName:"ul"},"common (needed by more than one component): observability api, vault, configuration, http, loggers, iam, ...")))}d.isMDXComponent=!0}}]);