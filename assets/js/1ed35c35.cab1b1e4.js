"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[7864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="Templates",s={unversionedId:"Components/IdentityHub/docs/templates/README",id:"Components/IdentityHub/docs/templates/README",title:"Templates",description:"Find all provided documentation templates in this folder. Please note that the _italic text",source:"@site/docs/Components/IdentityHub/docs/templates/README.md",sourceDirName:"Components/IdentityHub/docs/templates",slug:"/Components/IdentityHub/docs/templates/",permalink:"/edc-docs/docs/Components/IdentityHub/docs/templates/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/Components/IdentityHub/docs/templates/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generating the OpenApi Spec",permalink:"/edc-docs/docs/Components/IdentityHub/docs/developer/openapi"},next:{title:"Title of the Decision Record",permalink:"/edc-docs/docs/Components/IdentityHub/docs/templates/decision-record"}},c={},d=[{value:"Decision Records",id:"decision-records",level:2}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"templates"},"Templates"),(0,o.kt)("p",null,"Find all provided documentation templates in this folder. Please note that the ",(0,o.kt)("em",{parentName:"p"},"italic text\nand sentences"),' should be removed. Feel free to add additional sections and subsections, however, make sure\nthat at least the sections of the templates marked as "mandatory" are filled.'),(0,o.kt)("h2",{id:"decision-records"},"Decision Records"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/edc-docs/docs/Components/IdentityHub/docs/templates/decision-record"},"Link")," to template."),(0,o.kt)("p",null,"Each decision record should be put in an appropriate folder that is following a naming pattern:\n",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD-title-of-decision-record"),". This should be located at the ",(0,o.kt)("a",{parentName:"p",href:"../developer/decision-records"},"decision record folder"),"\nand contain all relevant files, at least a filled-out template named ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," and any additional images."),(0,o.kt)("p",null,"As of now, every merged decision record is in state ",(0,o.kt)("inlineCode",{parentName:"p"},"accepted"),". Please make sure to add a comment to\na decision record that replaces a previous one with adding a hint: ",(0,o.kt)("inlineCode",{parentName:"p"},"superseded by [...]"),"."))}p.isMDXComponent=!0}}]);