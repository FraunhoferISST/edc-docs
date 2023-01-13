"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[0],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),v=n,f=u["".concat(c,".").concat(v)]||u[v]||d[v]||a;return r?i.createElement(f,o(o({ref:t},l),{},{components:r})):i.createElement(f,o({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={},o="Registration Service API",s={unversionedId:"submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/README",id:"submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/README",title:"Registration Service API",description:"Registration Service is a component of a Dataspace Authority.",source:"@site/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/README.md",sourceDirName:"submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api",slug:"/submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/",permalink:"/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/README.md",tags:[],version:"current",frontMatter:{}},c={},p=[{value:"OpenApi",id:"openapi",level:2},{value:"API Rest client",id:"api-rest-client",level:2},{value:"Participants store",id:"participants-store",level:2},{value:"API Operations",id:"api-operations",level:2},{value:"Add participant",id:"add-participant",level:3},{value:"List participants",id:"list-participants",level:3}],l={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registration-service-api"},"Registration Service API"),(0,n.kt)("p",null,"Registration Service is a component of a Dataspace Authority.\nThe Registration Service is responsible for the management of the participants in the Dataspace."),(0,n.kt)("p",null,"The Registration Service exposes an API that offers the following operations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a participant to the Dataspace"),(0,n.kt)("li",{parentName:"ul"},"List participants in the Dataspace")),(0,n.kt)("p",null,"The Registration Service is written in Java and uses the runtime framework and modules from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-dataspaceconnector/DataSpaceConnector"},"EDC"),"."),(0,n.kt)("h2",{id:"openapi"},"OpenApi"),(0,n.kt)("p",null,"The Registration Service API definition is available in an ",(0,n.kt)("a",{target:"_blank",href:r(28476).Z},"OpenApi yaml file"),". "),(0,n.kt)("h2",{id:"api-rest-client"},"API Rest client"),(0,n.kt)("p",null,"The Registration Service API can be called using the ",(0,n.kt)("a",{parentName:"p",href:"../../../../rest-client"},"rest-client")," generated from OpenApi definition."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ApiClient apiClient = ApiClientFactory.createApiClient(API_URL);\nRegistryApi api = new RegistryApi(apiClient);\n")),(0,n.kt)("p",null,"Currently the Registration Service client is not published to any public artifactory so the rest client can be used in local development after publishing the\nRegistration Service artifacts locally"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./gradlew publishToMavenLocal\n")),(0,n.kt)("p",null,"or by regenerating the client from ",(0,n.kt)("a",{target:"_blank",href:r(28476).Z},"OpenApi file"),"."),(0,n.kt)("h2",{id:"participants-store"},"Participants store"),(0,n.kt)("p",null,"The Registration Service stores participants in an in-memory hashmap store. "),(0,n.kt)("h2",{id:"api-operations"},"API Operations"),(0,n.kt)("h3",{id:"add-participant"},"Add participant"),(0,n.kt)("p",null,"Calling POST method to add participant triggers an enrollment process of a new Dataspace member. The new participant is saved to the store for further\nprocessing. "),(0,n.kt)("h3",{id:"list-participants"},"List participants"),(0,n.kt)("p",null,"Calling GET method to list participants returns a list of all participants that are saved in the store."))}d.isMDXComponent=!0},28476:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/files/registration-service-3b01f2b4d64ae07a0a50e703b7ac2916.yaml"}}]);