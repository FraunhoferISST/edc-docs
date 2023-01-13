"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[5448],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(o),m=n,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(g,i(i({ref:t},d),{},{components:o})):r.createElement(g,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},70274:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={},i="Integration of Google Cloud Storage",l={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/README",id:"submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/README",title:"Integration of Google Cloud Storage",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration",slug:"/submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/README.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Approach",id:"approach",level:2},{value:"GCS Implementations for the Data Plane Framework:",id:"gcs-implementations-for-the-data-plane-framework",level:3},{value:"Future improvements",id:"future-improvements",level:3}],d={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integration-of-google-cloud-storage"},"Integration of Google Cloud Storage"),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"Google Cloud Storage (GCS) is the object storage on Google Cloud Platform. Data transfer should be enabled from and to\nGCS using the Data Plane Framework."),(0,n.kt)("h2",{id:"rationale"},"Rationale"),(0,n.kt)("p",null,"Integrating Google Cloud Platform will enable many users to join data spaces. By using the Data Plane Framework we\nenable users to transfer files or blobs across cloud providers."),(0,n.kt)("h2",{id:"approach"},"Approach"),(0,n.kt)("p",null,"Implementation should mostly follow ",(0,n.kt)("a",{parentName:"p",href:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-04-21-dpf-blob-data-transfer/"},"dpf-blob-data-transfer")),(0,n.kt)("h3",{id:"gcs-implementations-for-the-data-plane-framework"},"GCS Implementations for the Data Plane Framework:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A GcsProvisioner that creates the bucket and provides write access to provider via service account\nand ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/authentication#oauth"},"OAuth 2.0 token"),":",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Create Bucket"),(0,n.kt)("li",{parentName:"ol"},"Create service account"),(0,n.kt)("li",{parentName:"ol"},"Grant service account write permission on the created bucket"),(0,n.kt)("li",{parentName:"ol"},"Create OAuth Token"),(0,n.kt)("li",{parentName:"ol"},"Create and return response object that contains all required information to authenticate as the service account"),(0,n.kt)("li",{parentName:"ol"},"During deprovisioning delete/deactivate service account to remove access rights"))),(0,n.kt)("li",{parentName:"ol"},"GcsSink, GcsSource and the correlating Factories. Sink uses the provided token to authenticate")),(0,n.kt)("h3",{id:"future-improvements"},"Future improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GCP Vault implementation using\nGoogle ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"},"Secret Manager"))))}u.isMDXComponent=!0}}]);