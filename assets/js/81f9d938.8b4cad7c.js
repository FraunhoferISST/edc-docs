"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[6721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l="Azure Data Factory module",u={unversionedId:"submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/README",id:"submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/README",title:"Azure Data Factory module",description:"This module for the Data Plane Framework provides a transfer service for",source:"@site/docs/submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/README.md",sourceDirName:"submodule/Connector/extensions/data-plane/data-plane-azure-data-factory",slug:"/submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/",permalink:"/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/README.md",tags:[],version:"current",frontMatter:{}},i={},s=[],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azure-data-factory-module"},"Azure Data Factory module"),(0,n.kt)("p",null,"This module for the Data Plane Framework provides a transfer service for\nperforming serverless data movement using Azure Data Factory."),(0,n.kt)("p",null,"The Azure Resource Manager module should be loaded as well. See its documentation for runtime settings required for authentication."),(0,n.kt)("p",null,"At this time, this module has the following limitations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A runtime thread is held on to for polling for transfer completion."),(0,n.kt)("li",{parentName:"ul"},"Only Azure blob is supported as both storage and destination."),(0,n.kt)("li",{parentName:"ul"},"Both Azure storage accounts must be accessible from the Internet."),(0,n.kt)("li",{parentName:"ul"},"Only a single named blob can be copied in a data transfer request."),(0,n.kt)("li",{parentName:"ul"},"The transfer must complete in at most 1 hour, or will time out."),(0,n.kt)("li",{parentName:"ul"},"Resources created in Data Factory and Key Vault secrets are not deleted after the run.")),(0,n.kt)("p",null,"Required runtime settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edc.data.factory.resource.id")," The Resource ID of the Azure Data Factory instance to be used for data transfers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edc.data.factory.key.vault.resource.id")," The Resource ID of the Azure Key Vault to be used for storing secrets.")),(0,n.kt)("p",null,"Optional runtime settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edc.data.factory.key.vault.linkedservicename")," name of the Data Factory linked service for the Azure Key Vault in the Data Factory instance. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"AzureKeyVault"),". The Linked Service must already exist.")))}d.isMDXComponent=!0}}]);