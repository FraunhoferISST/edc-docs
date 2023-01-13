"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[1713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},i="OAuth2 Provision",s={unversionedId:"submodule/Connector/extensions/control-plane/provision/provision-oauth2/README",id:"submodule/Connector/extensions/control-plane/provision/provision-oauth2/README",title:"OAuth2 Provision",description:"This extension can be used when there's a data endpoint that requires OAuth2 authentication through the",source:"@site/docs/submodule/Connector/extensions/control-plane/provision/provision-oauth2/README.md",sourceDirName:"submodule/Connector/extensions/control-plane/provision/provision-oauth2",slug:"/submodule/Connector/extensions/control-plane/provision/provision-oauth2/",permalink:"/edc-docs/docs/submodule/Connector/extensions/control-plane/provision/provision-oauth2/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/control-plane/provision/provision-oauth2/README.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"How to use it",id:"how-to-use-it",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oauth2-provision"},"OAuth2 Provision"),(0,r.kt)("p",null,"This extension can be used when there's a data endpoint that requires OAuth2 authentication through the\n",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow"},(0,r.kt)("em",{parentName:"a"},"client credentials flow")),"\nIt can be used both on ",(0,r.kt)("strong",{parentName:"p"},"source")," and ",(0,r.kt)("strong",{parentName:"p"},"sink")," side of the data transfer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"source"),": when the source data address contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"oauth2")," related properties, the ",(0,r.kt)("strong",{parentName:"li"},"provider"),"'s provisioner\nwill request a token and store it in the vault, then the ",(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-http")," extension will get the token\nto authenticate the data request call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink"),": when the destination data address contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"oauth2")," related properties, the provisioner of the\nparticipant that will store the data will request a token and store it in the vault, then the\n",(0,r.kt)("inlineCode",{parentName:"li"},"data-plane-http")," extension will get the token to authenticate the data request call.")),(0,r.kt)("p",null,"Please note that this extension doesn't currently support neither expiration nor refresh tokens, as they are not\nmandatory specifications that are up to the OAuth2 server implementation used."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8315).Z,width:"950",height:"852"})),(0,r.kt)("p",null,"The token will be requested in the provision phase and stored in the vault, then it will be used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"data-plane-http"),"\nextension and put in the request. This can happen either on source side (by the provisioner) or on the sink side (either\nby consumer or provider)."),(0,r.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,r.kt)("p",null,"The extension works for all the ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpData"),' addresses that contain the "oauth2" properties (defined in\n',(0,r.kt)("a",{target:"_blank",href:n(83603).Z},"Oauth2DataAddressSchema"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oauth2:clientId"),": the client id "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oauth2:clientSecret"),": the client secret"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oauth2:tokenUrl"),": the url where the token will be requested")))}c.isMDXComponent=!0},83603:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/Oauth2DataAddressSchema-bd45d6efb10997287c38219108592604.java"},8315:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/diagram-9fececa21e555bff595ab47d1312c721.png"}}]);