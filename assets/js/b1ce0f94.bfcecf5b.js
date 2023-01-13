"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[3215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,l={unversionedId:"submodule/FederatedCatalog/core/docs/README",id:"submodule/FederatedCatalog/core/docs/README",title:"README",description:"The catalog extensions",source:"@site/docs/submodule/FederatedCatalog/core/docs/README.md",sourceDirName:"submodule/FederatedCatalog/core/docs",slug:"/submodule/FederatedCatalog/core/docs/",permalink:"/edc-docs/docs/submodule/FederatedCatalog/core/docs/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/FederatedCatalog/core/docs/README.md",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"The catalog extensions",id:"the-catalog-extensions",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-catalog-extensions"},"The catalog extensions"),(0,o.kt)("p",null,"This extension includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"CatalogService")," interface, which serves as a generic convenience feature to issue a catalog query to any EDC-compliant connector. It hides all the technical details\nlike IDS-messages and the like from the user. "),(0,o.kt)("p",null,"All that's required is a ",(0,o.kt)("inlineCode",{parentName:"p"},"connectorName")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"connectorId")," of the connector, who's catalog is to be queried."),(0,o.kt)("p",null,"Implementors of connectors do not ",(0,o.kt)("em",{parentName:"p"},"need")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"CatalogService")," but it makes things a lot easier."))}u.isMDXComponent=!0}}]);