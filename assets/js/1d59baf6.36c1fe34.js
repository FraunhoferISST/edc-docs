"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[1917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,b=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={},o="Membership Verifiable Credential",l={unversionedId:"submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/README",id:"submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/README",title:"Membership Verifiable Credential",description:"Decision",source:"@site/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/README.md",sourceDirName:"submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential",slug:"/submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/",permalink:"/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/README.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2}],s={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"membership-verifiable-credential"},"Membership Verifiable Credential"),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"During participant onboarding, the Registration Service issues a dataspace membership verifiable credential (VC) and store it in the participant's Identity Hub."),(0,a.kt)("p",null,"The participant's DID Document must contain a Service Endpoint of type ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityHub"),", indicating the URL at which the Identity Hub API is available. Access to Identity Hub is currently not authenticated."),(0,a.kt)("p",null,"After a participant has been authorised, the Registration Service creates a verifiable credential in JWT format (signed as JWS) and pushes it to the participant's Identity Hub endpoint. After that, the participant is fully onboarded."),(0,a.kt)("p",null,"The Verifiable Credential JWT contains the following claims. The JWT contains a combination of RFC 7519 ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.1"},"Registered Claim Names")," and ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4.3"},"Private Claim Names"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Claim"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Issuer (",(0,a.kt)("inlineCode",{parentName:"td"},"iss"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"The Dataspace ",(0,a.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-web/"},"did:web")," identifier (example: ",(0,a.kt)("inlineCode",{parentName:"td"},"did:web:example.com"),"). The Issuer Claim must resolve to a DID Document containing the public key of the key pair used to sign the JWS. This allows the server to verify the token signature against the source's public key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subject (",(0,a.kt)("inlineCode",{parentName:"td"},"sub"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"The Participant ",(0,a.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-web/"},"did:web")," identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Issue At (",(0,a.kt)("inlineCode",{parentName:"td"},"iat"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"The credential creation date.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JWT ID (",(0,a.kt)("inlineCode",{parentName:"td"},"jti"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"A random UUID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vc")," Private Claim"),(0,a.kt)("td",{parentName:"tr",align:null},"A JSON payload containing the verifiable credential claim.")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"vc")," claim payload has the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "<a random GUID>",\n    "credentialSubject": {\n        "memberOfDataspace": "<Dataspace did:web identifier>"\n    }\n}\n')),(0,a.kt)("h2",{id:"rationale"},"Rationale"),(0,a.kt)("p",null,"The membership credential can be used by participants' EDC policy engine to restrict assets to dataspace members."))}p.isMDXComponent=!0}}]);