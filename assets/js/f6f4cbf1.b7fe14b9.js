"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[1692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(i,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="Onboarding and first steps",s={unversionedId:"submodule/Connector/onboarding",id:"submodule/Connector/onboarding",title:"Onboarding and first steps",description:"This document serves as step-by-step guide for new community members and assumes a working knowledge of the Eclipse",source:"@site/docs/submodule/Connector/onboarding.md",sourceDirName:"submodule/Connector",slug:"/submodule/Connector/onboarding",permalink:"/edc-docs/docs/submodule/Connector/onboarding",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/onboarding.md",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Example 1: Run a simple connector",id:"example-1-run-a-simple-connector",level:2},{value:"Example 2: Write your first extension",id:"example-2-write-your-first-extension",level:2},{value:"Example 3: Use the file-system based configuration",id:"example-3-use-the-file-system-based-configuration",level:2},{value:"Example 4.0: Implement a simple file transfer",id:"example-40-implement-a-simple-file-transfer",level:2},{value:"Example 4.1: Implement a simple file transfer listener",id:"example-41-implement-a-simple-file-transfer-listener",level:2},{value:"Example 4.2: Modify a TransferProcess",id:"example-42-modify-a-transferprocess",level:2},{value:"Example 5: Improve the file transfer",id:"example-5-improve-the-file-transfer",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onboarding-and-first-steps"},"Onboarding and first steps"),(0,o.kt)("p",null,"This document serves as step-by-step guide for new community members and assumes a working knowledge of the Eclipse\nDataspace Connector (EDC) nomenclature. If you do not know about the EDC nomenclature we strongly advise reading the\ndocumentation and/or watch the introductory video."),(0,o.kt)("p",null,"All chapters of this guide are incremental, so e.g. example 3 uses code from example 2. All code resides in\nthe ",(0,o.kt)("a",{parentName:"p",href:"./samples"},(0,o.kt)("inlineCode",{parentName:"a"},"samples"))," directory of this repository."),(0,o.kt)("p",null,"Also, a working knowledge of Git, Gradle, Java and HTTP is presumed."),(0,o.kt)("p",null,"We'll assume that you've just checked out the EDC code base and have Java 11+ installed on your development machine.\nIf not, please download and install JDK 11+ for your OS."),(0,o.kt)("p",null,"Command examples in this document will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," syntax and use Unix-style paths, but any other shell should be\nfine as well. If you're using Windows you either need to adapt the paths or use WSL2."),(0,o.kt)("p",null,"Please simply follow the following links to the respective samples."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Please note that the entire Eclipse Dataspace Connector is under heavy development, so things are likely to change significantly\nin the future. Be sure to check back regularly to stay updated!"))),(0,o.kt)("h2",{id:"example-1-run-a-simple-connector"},(0,o.kt)("a",{parentName:"h2",href:"/edc-docs/docs/submodule/Connector/samples/basic-connector/"},"Example 1: Run a simple connector")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"The complete sample code for this chapter is in ",(0,o.kt)("inlineCode",{parentName:"em"},"samples/01-basic-connector/"),"."))),(0,o.kt)("h2",{id:"example-2-write-your-first-extension"},(0,o.kt)("a",{parentName:"h2",href:"/edc-docs/docs/submodule/Connector/samples/health-endpoint/"},"Example 2: Write your first extension")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"The complete sample code for this chapter is in ",(0,o.kt)("inlineCode",{parentName:"em"},"samples/02-health-endpoint"),"."))),(0,o.kt)("h2",{id:"example-3-use-the-file-system-based-configuration"},(0,o.kt)("a",{parentName:"h2",href:"/edc-docs/docs/submodule/Connector/samples/configuration/"},"Example 3: Use the file-system based configuration")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"The complete sample code for this chapter is in ",(0,o.kt)("inlineCode",{parentName:"em"},"samples/03-configuration"),"."))),(0,o.kt)("h2",{id:"example-40-implement-a-simple-file-transfer"},(0,o.kt)("a",{parentName:"h2",href:"/edc-docs/docs/submodule/Connector/samples/04.0-file-transfer/"},"Example 4.0: Implement a simple file transfer")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"The complete sample code for this chapter is in ",(0,o.kt)("inlineCode",{parentName:"em"},"samples/04.0-file-transfer"),"."))),(0,o.kt)("h2",{id:"example-41-implement-a-simple-file-transfer-listener"},(0,o.kt)("a",{parentName:"h2",href:"/edc-docs/docs/submodule/Connector/samples/04.1-file-transfer-listener/"},"Example 4.1: Implement a simple file transfer listener")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"The complete sample code for this chapter is in ",(0,o.kt)("inlineCode",{parentName:"em"},"samples/04.1-file-transfer-listener"),"."))),(0,o.kt)("h2",{id:"example-42-modify-a-transferprocess"},(0,o.kt)("a",{parentName:"h2",href:"/edc-docs/docs/submodule/Connector/samples/04.2-modify-transferprocess/"},"Example 4.2: Modify a TransferProcess")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"The complete sample code for this chapter is in ",(0,o.kt)("inlineCode",{parentName:"em"},"samples/04.2-modify-transferprocess"),"."))),(0,o.kt)("h2",{id:"example-5-improve-the-file-transfer"},(0,o.kt)("a",{parentName:"h2",href:"/edc-docs/docs/submodule/Connector/samples/file-transfer-cloud/"},"Example 5: Improve the file transfer")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"The complete sample code for this chapter is in ",(0,o.kt)("inlineCode",{parentName:"em"},"samples/05-file-transfer-cloud"),"."))))}c.isMDXComponent=!0}}]);