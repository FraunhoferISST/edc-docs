"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[8258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},s="SQL Asset",l={unversionedId:"submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/README",id:"submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/README",title:"SQL Asset",description:"Provides SQL persistence for assets.",source:"@site/docs/submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/README.md",sourceDirName:"submodule/Connector/extensions/control-plane/store/sql/asset-index-sql",slug:"/submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/",permalink:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/README.md",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Entity Diagram",id:"entity-diagram",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql-asset"},"SQL Asset"),(0,a.kt)("p",null,"Provides SQL persistence for assets."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please apply this ",(0,a.kt)("a",{target:"_blank",href:n(37549).Z},"schema")," to your SQL database."),(0,a.kt)("h2",{id:"entity-diagram"},"Entity Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.plantuml.com/plantuml/png/ZP3D2i8m48JlUOez2ta1AQLtBxv1MDn58crQibiXDBwxGQfKhJ-tm3SpcPr65AEENMiugDS4J0U78gmm6O0DtDxEqnP4emz7gAhzhguBizPSp9lD4IeYKMIHNn653R4VEAfdMT2JzE7R5xCf_P-VNC2Exu9dSiPs_80q3KiortaibBErEQ_V_YBhfvN-fk50PVih",alt:"ER Diagram"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"edc.datasource.asset.name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Datasource used by this extension"),(0,a.kt)("td",{parentName:"tr",align:null},"X")))))}p.isMDXComponent=!0},37549:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/schema-e11d6a24048b86ea26eaba8a1a4b06ff.sql"}}]);