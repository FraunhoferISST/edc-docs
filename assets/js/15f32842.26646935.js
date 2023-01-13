"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[5445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s="IDS",i={unversionedId:"submodule/Connector/data-protocols/ids/README",id:"submodule/Connector/data-protocols/ids/README",title:"IDS",description:"This IDS extension represents a collection of all IDS extensions, that are required to run an IDS connector.",source:"@site/docs/submodule/Connector/data-protocols/ids/README.md",sourceDirName:"submodule/Connector/data-protocols/ids",slug:"/submodule/Connector/data-protocols/ids/",permalink:"/edc-docs/docs/submodule/Connector/data-protocols/ids/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/data-protocols/ids/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Included Extensions",id:"included-extensions",level:2},{value:"IDS Contracts",id:"ids-contracts",level:2},{value:"IDS Contract Offer",id:"ids-contract-offer",level:3},{value:"IDS Messaging",id:"ids-messaging",level:3},{value:"Description Request Message",id:"description-request-message",level:4}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ids"},"IDS"),(0,o.kt)("p",null,"This IDS extension represents a collection of all IDS extensions, that are required to run an IDS connector."),(0,o.kt)("p",null,"These extensions bridge between EDC core and IDS."),(0,o.kt)("h2",{id:"included-extensions"},"Included Extensions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-api-configuration/"},"data-protocols:ids:ids-api-configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-api-multipart-dispatcher-v1/"},"data-protocols:ids:ids-api-multipart-dispatcher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-api-multipart-endpoint-v1/"},"data-protocols:ids:ids-api-multipart-endpoint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-core/"},"data-protocols:ids:ids-core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-jsonld-serdes/"},"data-protocols:ids:ids-jsonld-serdes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-spi/"},"data-protocols:ids:ids-spi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-token-validation/"},"data-protocols:ids:ids-token-validation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"ids-transform-v1/"},"data-protocols:ids:ids-transform"))),(0,o.kt)("h2",{id:"ids-contracts"},"IDS Contracts"),(0,o.kt)("h3",{id:"ids-contract-offer"},"IDS Contract Offer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contract Offers, that are provided by the EDC Contract Offer Frameworks, are created in the IDS ecosystem"),(0,o.kt)("li",{parentName:"ul"},"Assets, that are not part of a Contract Offer, are not created in the IDS ecosystem"),(0,o.kt)("li",{parentName:"ul"},"In the IDS data model",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"each Contract Offer is mapped to its own IDS Resource"),(0,o.kt)("li",{parentName:"ul"},"each Asset is mapped to its own IDS Representation"),(0,o.kt)("li",{parentName:"ul"},"each Asset is mapped to its own IDS Artifact")))),(0,o.kt)("h3",{id:"ids-messaging"},"IDS Messaging"),(0,o.kt)("h4",{id:"description-request-message"},"Description Request Message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As not-negotiated ContractOffers are not persisted, it is not possible to send IDS DescriptionRequestMessages for the\ncorresponding IDS Resources, where they are mapped to.")))}p.isMDXComponent=!0}}]);