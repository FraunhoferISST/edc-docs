"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[9085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,b=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?i.createElement(b,o(o({ref:t},c),{},{components:a})):i.createElement(b,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const r={},o="Identity Hub",s={unversionedId:"Components/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/README",id:"Components/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/README",title:"Identity Hub",description:"An identity hub is a credential storage and message relay system run by a dataspace participant. In particular, the identity hub will be used to securely deliver Verifiable Credentials from a dataspace issuer to a dataspace participant. The hub will also be used to provide Verifiable Presentations on behalf of a participant. The Identity Hub will not be used as a message relay system.",source:"@site/docs/Components/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/README.md",sourceDirName:"Components/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub",slug:"/Components/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/",permalink:"/edc-docs/docs/Components/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/Components/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Decision Records",permalink:"/edc-docs/docs/Components/IdentityHub/docs/developer/decision-records/"},next:{title:"Identity Hub - Get claims",permalink:"/edc-docs/docs/Components/IdentityHub/docs/developer/decision-records/2022-07-01-get-claims/"}},l={},d=[{value:"Operations",id:"operations",level:2},{value:"Example Flows",id:"example-flows",level:2},{value:"Participant Authorization",id:"participant-authorization",level:3},{value:"Participant Onboarding",id:"participant-onboarding",level:3},{value:"Deployment",id:"deployment",level:2},{value:"References",id:"references",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"identity-hub"},"Identity Hub"),(0,n.kt)("p",null,"An identity hub is a credential storage and message relay system run by a dataspace participant. In particular, the identity hub will be used to securely deliver ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#what-is-a-verifiable-credential"},"Verifiable Credentials")," from a dataspace issuer to a dataspace participant. The hub will also be used to provide ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"Verifiable Presentations")," on behalf of a participant. The Identity Hub will not be used as a message relay system."),(0,n.kt)("p",null,"This document focuses on what the first version of the Identity Hub will have to enable the MVD (Minimum Viable Dataspace)."),(0,n.kt)("h2",{id:"operations"},"Operations"),(0,n.kt)("p",null,"The Identity Hub will adhere to the ",(0,n.kt)("a",{parentName:"p",href:"https://identity.foundation/decentralized-web-node/spec/"},"Decentralized Web Node specification")," implementing the following subset of operations."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/decentralized-web-node/spec/#query"},"Collections Query")," to query Verifiable Presentations"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/decentralized-web-node/spec/#write"},"Collections Write")," to push Verifiable Credentials"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/decentralized-web-node/spec/#feature-detection"},"Feature Detection")," listing the operations above as supported.")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"Verifiable Presentations")," returned by the Collections Query operation will be the available Verifiable Credentials. No ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"derived data")," will be extracted from the Verifiable Credentials to generate separate Presentations."),(0,n.kt)("p",null,"Each participant in the dataspace will have a single ",(0,n.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-web"},"decentralized identifier")," and a single Identity Hub instance available (no namespacing required). Communication with the Identity Hub will not be subject to authentication or authorization at this time."),(0,n.kt)("h2",{id:"example-flows"},"Example Flows"),(0,n.kt)("h3",{id:"participant-authorization"},"Participant Authorization"),(0,n.kt)("p",null,"During participant-to-participant communication via IDS REST, the request destination participant queries the Verifiable Presentations of the request originator participant. Access to resources is granted or denied according to the policies in place and the available Verifiable Presentations."),(0,n.kt)("p",null,"Verifiable Presentations are issued and signed by a trusted authority. Before applying any policies, participants access the public key of that trusted authority from its DID Document, and check that Verifiable Presentations are valid. Only valid Verifiable Presentations must be taken into account in policy evaluations. Participants are responsible for reacting to the presence of invalid Verifiable Presentations as they see fit."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Authorization",src:a(3645).Z,width:"860",height:"557"})),(0,n.kt)("p",null,"Note that complex IDS flows, such as negotiating a contract agreement, requires multiple IDS requests flowing back and forth between participants. In that case, participants will alternate in the flow above, and both participants require an Identity Hub."),(0,n.kt)("h3",{id:"participant-onboarding"},"Participant Onboarding"),(0,n.kt)("p",null,'When a participant is successfully onboarded to a dataspace, the dataspace authority pushes a "dataspace membership" Verifiable Credential into the participant\'s Identity Hub. This Verifiable Credential is then handed over to other participants during the authorization flow, which can enforce dataspace membership as a requirement for communication. '),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Onboarding",src:a(5635).Z,width:"759",height:"541"})),(0,n.kt)("h2",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"The Identity Hub will be developed as an EDC extension and will be deployed in a collocated test deployment topology. In this scenario, the Identity Hub and all participant agents (such as IDS Connector and Federated Catalog) run together in a single process. The Identity Hub leverages the EDC runtime to deploy as a set of extensions."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://identity.foundation/decentralized-web-node/spec/"},"Decentralized Web Node")," draft specification"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials")," W3C recommendation"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#presentations"},"Verifiable Presentations")," section of the previous document"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-method-web"},"Web DID")," draft specification"),(0,n.kt)("li",{parentName:"ul"},"Stefan van der Wiele - ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ic-XEGzdODM"},"Decentralized Identifiers and the Eclipse Dataspace Connector")," (YouTube video)")))}p.isMDXComponent=!0},3645:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/authorization-7fbfe78c3334d316a7fdd3c8c6af4006.png"},5635:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/onboarding-60721ab590eea61ce2c85ac750f36d32.png"}}]);