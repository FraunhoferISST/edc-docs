"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[3982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),u=a,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},36825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Aggregate Service layer",l={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/README",id:"submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/README",title:"Aggregate Service layer",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer",slug:"/submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/README.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Approach",id:"approach",level:2},{value:"SPI",id:"spi",level:3},{value:"Implementation classes",id:"implementation-classes",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregate-service-layer"},"Aggregate Service layer"),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,'An "aggregate service" layer will be explicitly defined to provide a clear and simple interface to interact with the\nentities in a safe way.'),(0,a.kt)("p",null,'Please note that in this document we\'re not referring to "services" as the components that are registered on the\nruntime to achieve extensibility.'),(0,a.kt)("h2",{id:"rationale"},"Rationale"),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateService")," we intend a component that provides a clear and simple interface to interact with entities (such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"Asset"),"s, ",(0,a.kt)("inlineCode",{parentName:"p"},"ContractNegotiation"),"s and so on) encapsulating some logic and features, like business validation,\ntransactional context, exception handling, ..."),(0,a.kt)("p",null,"Currently they are located into the ",(0,a.kt)("inlineCode",{parentName:"p"},"data-management-api"),". Moving them to a separate layer will permit other kinds of\nAPIs to use them in an equal manner benefiting from their offered features."),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("h3",{id:"spi"},"SPI"),(0,a.kt)("p",null,"The service layer will be described by a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate-service-spi")," module that will contain only the\n",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateServiceResult")," class, that represent a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," returned by an ",(0,a.kt)("inlineCode",{parentName:"p"},"*AggregateService")," method call."),(0,a.kt)("p",null,"Every component will define its own aggregate service layer spi, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane-spi")," will contain all the\n",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateService")," interfaces of the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"AssetAggregateService"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ContractNegotiationAggregateService"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"TransferProcessAggregateService"),", etc..."),(0,a.kt)("p",null,"That ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane-spi")," module could then be used as a dependency in an extension that exposes an API (for example a\nGraphQL one)."),(0,a.kt)("h3",{id:"implementation-classes"},"Implementation classes"),(0,a.kt)("p",null,"The implementation classes will be located in a component-related module in the ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," folder, for example\n",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane-aggregate-services"),", this module will be included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane-core")," BOM to register the\n",(0,a.kt)("inlineCode",{parentName:"p"},"*AggregateService"),"s."),(0,a.kt)("p",null,"For the control plane, the directory tree will look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 core\n\u2502   \u251c\u2500\u2500 control-plane\n\u2502   \u2502   \u251c\u2500\u2500 control-plane-aggregate-services\n\u251c\u2500\u2500 spi\n\u2502   \u251c\u2500\u2500 common\n\u2502   \u2502   \u251c\u2500\u2500 aggregate-service-spi\n\u2502   \u251c\u2500\u2500 control-plane\n\u2502   \u2502   \u251c\u2500\u2500 control-plane-spi\n")))}d.isMDXComponent=!0}}]);