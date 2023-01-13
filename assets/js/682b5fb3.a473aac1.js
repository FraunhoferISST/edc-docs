"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[4241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},i="CosmosDB implementation of `FederatedCacheNodeDirectory`",s={unversionedId:"submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/README",id:"submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/README",title:"CosmosDB implementation of `FederatedCacheNodeDirectory`",description:"This extension provides a persistent implementation of a the FederatedCacheNodeDirectory using a CosmosDB container.",source:"@site/docs/submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/README.md",sourceDirName:"submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos",slug:"/submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/",permalink:"/edc-docs/docs/submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/README.md",tags:[],version:"current",frontMatter:{}},l={},d=[],c={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmosdb-implementation-of-federatedcachenodedirectory"},"CosmosDB implementation of ",(0,a.kt)("inlineCode",{parentName:"h1"},"FederatedCacheNodeDirectory")),(0,a.kt)("p",null,"This extension provides a persistent implementation of a the ",(0,a.kt)("inlineCode",{parentName:"p"},"FederatedCacheNodeDirectory")," using a CosmosDB container."),(0,a.kt)("p",null,"The configuration values of this extension are listed below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"edc.cosmos.partition-key")),(0,a.kt)("td",{parentName:"tr",align:"left"},"This is the partition key that CosmosDB uses for r/w distribution. Contrary to what CosmosDB suggests, this key should be the same for all local (=clustered) connectors, otherwise queries in stored procedures might produce incomplete results."),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"dataspaceconnector")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"edc.cosmos.query-metrics-enabled")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enable metrics for query execution"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"edc.node.directory.cosmos.account-name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Account name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"edc.node.directory.cosmos.database-name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the DB"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"edc.node.directory.cosmos.preferred-region")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Preferred region for Cosmos client instance"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"westeurope")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"edc.node.directory.cosmos.container-name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of container used to store Assets"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")))))}m.isMDXComponent=!0}}]);