"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[2933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},l="DataPlane Selector Client",c={unversionedId:"submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/README",id:"submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/README",title:"DataPlane Selector Client",description:"this module contains implementations for running a DPF Selector embedded in the Control Plane, or as remote instance,",source:"@site/docs/submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/README.md",sourceDirName:"submodule/Connector/extensions/data-plane-selector/data-plane-selector-client",slug:"/submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/",permalink:"/edc-docs/docs/submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/README.md",tags:[],version:"current",frontMatter:{}},s={},i=[],p={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dataplane-selector-client"},"DataPlane Selector Client"),(0,o.kt)("p",null,"this module contains implementations for running a DPF Selector embedded in the Control Plane, or as remote instance,\naccessing it's REST API."),(0,o.kt)("p",null,"There are two implementations at the moment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"EmbeddedDataPlaneSelectorClient"),": when the DPF selector runs embedded in the control plane"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RemoteDataPlaneSelectorClient"),": when the DPF selector runs as stand-alone process and is accessible via REST API.\nRequires URL to the DPF selector as constructor param.")))}d.isMDXComponent=!0}}]);