"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[7718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},s="CosmosDB implementation of AssetIndex",i={unversionedId:"submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/README",id:"submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/README",title:"CosmosDB implementation of AssetIndex",description:"This extension provides a persistent implementation of an AssetIndex using a CosmosDB container.",source:"@site/docs/submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/README.md",sourceDirName:"submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos",slug:"/submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/",permalink:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[],m={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmosdb-implementation-of-assetindex"},"CosmosDB implementation of AssetIndex"),(0,o.kt)("p",null,"This extension provides a persistent implementation of an ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetIndex")," using a CosmosDB container."),(0,o.kt)("p",null,"The setting parameters of this extensions are listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.assetindex.cosmos.account-name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Account name"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"null")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.assetindex.cosmos.database-name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the DB"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"null")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.cosmos.partition-key")),(0,o.kt)("td",{parentName:"tr",align:"left"},"This is the partition key that CosmosDB uses for r/w distribution. Contrary to what CosmosDB suggests, this key should be the same for all local (=clustered) connectors, otherwise queries in stored procedures might produce incomplete results."),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"dataspaceconnector")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.assetindex.cosmos.preferred-region")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Preferred region for Cosmos client instance"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"westeurope")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.assetindex.cosmos.container-name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of container used to store Assets"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"null")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"edc.cosmos.query-metrics-enabled")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enable metrics for query execution"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true")))))}d.isMDXComponent=!0}}]);