"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[2702],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(i),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return i?r.createElement(h,o(o({ref:t},p),{},{components:i})):r.createElement(h,o({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},39702:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=i(87462),n=(i(67294),i(3905));const a={},o="Participants onboarding in MVD",l={unversionedId:"submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-20-mvd-onboarding/README",id:"submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-20-mvd-onboarding/README",title:"Participants onboarding in MVD",description:"This document outlines the infrastructure steps for the scenario of onboarding participants to the Minimum Viable Dataspace (MVD).",source:"@site/docs/submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-20-mvd-onboarding/README.md",sourceDirName:"submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-20-mvd-onboarding",slug:"/submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-20-mvd-onboarding/",permalink:"/edc-docs/docs/submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-20-mvd-onboarding/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-20-mvd-onboarding/README.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Precondition - GAIA-X membership",id:"precondition---gaia-x-membership",level:2},{value:"Onboarding process - GAIA-X membership verification",id:"onboarding-process---gaia-x-membership-verification",level:2},{value:"Infrastructure",id:"infrastructure",level:2},{value:"Public key infrastructure",id:"public-key-infrastructure",level:3}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"participants-onboarding-in-mvd"},"Participants onboarding in MVD"),(0,n.kt)("p",null,"This document outlines the infrastructure steps for the scenario of onboarding participants to the Minimum Viable Dataspace (MVD)."),(0,n.kt)("h2",{id:"precondition---gaia-x-membership"},"Precondition - GAIA-X membership"),(0,n.kt)("p",null,"To join the MVD, each participant must have a Verifiable Credential (VC) signed by GAIA-X Authority which proves GAIA-X membership."),(0,n.kt)("p",null,"At present the MVD deployment pipeline does not interact with the real GAIA-X Authority. A simulated GAIA-X Authority DID document is deployed within MVD\nfor demonstration purposes. "),(0,n.kt)("h2",{id:"onboarding-process---gaia-x-membership-verification"},"Onboarding process - GAIA-X membership verification"),(0,n.kt)("p",null,"During the onboarding process, the GAIA-X membership claim is verified by the Dataspace Authority.\nThe onboarding flow is presented in the ",(0,n.kt)("a",{parentName:"p",href:"/edc-docs/docs/submodule/MinimumViableDataspace/docs/developer/decision-records/2022-06-16-distributed-authorization/"},"distributed authorisation sub-flow document"),".\nActors in the onboarding scenario:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Participant A")," is a putative participant that wants to join the MVD."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Participant B")," is the Registration Service with its ",(0,n.kt)("inlineCode",{parentName:"li"},"did:web")," document."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Authority")," is the simulated GAIA-X Authority.")),(0,n.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,n.kt)("p",null,"To enable above precondition and onboarding scenario in MVD, the following steps need to be implemented in the MVD infrastructure: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The MVD deployment workflow will generate the private and ",(0,n.kt)("a",{parentName:"li",href:"#public-key-infrastructure"},"public keys")," for GAIA-X Authority."),(0,n.kt)("li",{parentName:"ol"},"The MVD deployment workflow will deploy the GAIA-X Authority DID document containing the public key. For the simplicity the GAIA-X Authority DID document\nis deployed together with other Dataspace components, which means that each deployed Dataspace will have its own GAIA-X Authority instance. In a\nreal scenario the GAIA-X Authority is an external component and can communicate with multiple Dataspaces."),(0,n.kt)("li",{parentName:"ol"},"The GAIA-X private key will be used in the participant deployment workflow to generate GAIA-X membership Verifiable Credentials. Additionally,\nit will be made available to be used locally to onboard additional participants."),(0,n.kt)("li",{parentName:"ol"},"A CLI client for IdentityHub will be implemented. It will be used in the MVD deployment workflow to populate the participant's Identity Hub with GAIA-X\nmembership Verifiable Credentials."),(0,n.kt)("li",{parentName:"ol"},"A CLI client for the Registration Service will be implemented. It will be used in the MVD deployment workflow to start the participant onboarding process. The CLI\nclient can also be used locally to onboard additional participants. The CLI client needs access to the participant's DID private key."),(0,n.kt)("li",{parentName:"ol"},"The Registration Service will be configured at deployment with the environment variable pointing to GAIA-X Authority DID URL. This is required because each deployment will have a different URL for the GAIA-X Authority."),(0,n.kt)("li",{parentName:"ol"},"The Registration Service will be configured with a policy, that requires a GAIA-X membership Verifiable Credential issued by the GAIA-X\nAuthority to verify participant's GAIA-X membership.")),(0,n.kt)("h3",{id:"public-key-infrastructure"},"Public key infrastructure"),(0,n.kt)("p",null,"Public keys will be represented in ",(0,n.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517#section-4"},"JSON Web Key")," format. "),(0,n.kt)("p",null,"Example JWK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "kty": "EC",\n   "crv": "secp256k1",\n   "x": "wSwuib0Eyfsvdb_RPpQQLlFoHsQE4TSlFdncLePp6Zg",\n   "y": "uxjZNS8HQ9krKn5ZXpjBtSAAj9FQXSDlHlEMR2YA7Hs"\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"kty")," (Key Type) parameter in JWK is mandatory and defines the cryptographic algorithm family used with a key.\nIn MVD we are going to use ",(0,n.kt)("em",{parentName:"p"},"EC")," - ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"},"Elliptic Curve")," key."),(0,n.kt)("p",null,"The rationale for choosing this public key format is to reuse existing ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-dataspaceconnector/DataSpaceConnector/tree/main/extensions/iam/decentralized-identity"},"EDC libraries to manage the decentralized identity"),"."))}d.isMDXComponent=!0}}]);