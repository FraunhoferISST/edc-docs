"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[9090],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>p});var s=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,s,r=function(e,o){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=s.createContext({}),l=function(e){var o=s.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},d=function(e){var o=l(e.components);return s.createElement(i.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return s.createElement(s.Fragment,{},o)}},u=s.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),p=r,h=u["".concat(i,".").concat(p)]||u[p]||m[p]||n;return t?s.createElement(h,a(a({ref:o},d),{},{components:t})):s.createElement(h,a({ref:o},d))}));function p(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,a=new Array(n);a[0]=u;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<n;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84039:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=t(87462),r=(t(67294),t(3905));const n={},a="Cosmos DB lease mechanism",c={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/README",id:"submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/README",title:"Cosmos DB lease mechanism",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism",slug:"/submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/README.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Approach",id:"approach",level:2}],d={toc:l};function m(e){let{components:o,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cosmos-db-lease-mechanism"},"Cosmos DB lease mechanism"),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"Cosmos DB stores for managing contract negotiations and data transfers use a lease mechanism to control the processing of the items."),(0,r.kt)("h2",{id:"rationale"},"Rationale"),(0,r.kt)("p",null,"If a connector fails after receiving a request, a process needs to be picked up by another connector instance. This is specially important when deploying to Kubernetes, since pods can be restarted at any time (e.g. VM autoscale). To ensure a resilient behavior a lease mechanism must be introduced in the transfer and contract negotiation processes."),(0,r.kt)("h2",{id:"approach"},"Approach"),(0,r.kt)("p",null,"Cosmos document is extended with lease information: a lease holder, time when the lease was acquired and a lease duration."),(0,r.kt)("p",null,"Lease acts as an exclusive lock: a party leasing a document owns an exclusive lock until the lease expires or it has been explicitly broken. Any attempt to acquire or break the lease on a document that has been leased by someone else results in an exception. Currently, the lease expiration time is hardcoded to 60 seconds."),(0,r.kt)("p",null,"Cosmos DB stores are using stored procedures written in JavaScript to guarantee ACID for the lease operations. Requests made within stored\nprocedures execute in the same scope of a database session, because in Azure Cosmos DB, JavaScript is hosted in the same memory\nspace as the database. More about stored procedures in Cosmos DB: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/rest/api/cosmos-db/stored-procedures"},"stored procedures doc"),"."),(0,r.kt)("p",null,"Cosmos DB stores are using 2 stored procedures that handle the lease logic:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/extensions/azure/cosmos/cosmos-common/src/main/resources/lease.js"},(0,r.kt)("inlineCode",{parentName:"a"},"lease.js"))," - queries the database to look for an item and if an item is found applies a lease on it. It's used to acquire the lock on single item in the database before an update and to remove the lock after.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   leaseContext.acquireLease(process.getId());\n   failsafeExecutor.run(() -> cosmosDbApi.saveItem(document));\n   leaseContext.breakLease(process.getId());\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/extensions/azure/cosmos/cosmos-common/src/main/resources/nextForState.js"},(0,r.kt)("inlineCode",{parentName:"a"},"nextForState.js"))," - queries the database to look for all items that has no lease or expired lease. It applies a new lease on all returned items. This stored procedure is used to get a batch of elements that are next to be processed for given state.")),(0,r.kt)("p",null,"More about stored procedures in Cosmos DB: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/rest/api/cosmos-db/stored-procedures"},"stored procedures doc"),"."))}m.isMDXComponent=!0}}]);