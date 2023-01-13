"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[4883],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=c(n),f=o,u=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(u,i(i({ref:e},m),{},{components:n})):r.createElement(u,i({ref:e},m))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47154:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="CosmosDB implementation of `ContractDefinitionStore`",s={unversionedId:"submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/README",id:"submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/README",title:"CosmosDB implementation of `ContractDefinitionStore`",description:"This extension provides a persistent implementation of a the ContractDefinitionStore using a CosmosDB container.",source:"@site/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/README.md",sourceDirName:"submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos",slug:"/submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/",permalink:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[],m={toc:c};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmosdb-implementation-of-contractdefinitionstore"},"CosmosDB implementation of ",(0,o.kt)("inlineCode",{parentName:"h1"},"ContractDefinitionStore")),(0,o.kt)("p",null,"This extension provides a persistent implementation of a the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractDefinitionStore")," using a CosmosDB container."),(0,o.kt)("p",null,"The configuration values of this extension are listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.cosmos.partition-key")),(0,o.kt)("td",{parentName:"tr",align:"left"},"This is the partition key that CosmosDB uses for r/w distribution. Contrary to what CosmosDB suggests, this key should be the same for all local (=clustered) connectors, otherwise queries in stored procedures might produce incomplete results."),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"dataspaceconnector")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.cosmos.query-metrics-enabled")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enable metrics for query execution"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.contractdefinitionstore.cosmos.account-name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Account name"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"null")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.contractdefinitionstore.cosmos.database-name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the DB"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"null")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.contractdefinitionstore.cosmos.preferred-region")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Preferred region for Cosmos client instance"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"westeurope")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.contractdefinitionstore.cosmos.container-name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of container used to store Assets"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"null")))))}p.isMDXComponent=!0}}]);