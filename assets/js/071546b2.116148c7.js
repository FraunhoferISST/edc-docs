"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=s,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const o={},a="EndToEnd Transfer Test",l={unversionedId:"submodule/Connector/system-tests/e2e-transfer-test/README",id:"submodule/Connector/system-tests/e2e-transfer-test/README",title:"EndToEnd Transfer Test",description:"This tests verifies some complete scenarios of contract negotiation and data transfer between a consumer and a provider.",source:"@site/docs/submodule/Connector/system-tests/e2e-transfer-test/README.md",sourceDirName:"submodule/Connector/system-tests/e2e-transfer-test",slug:"/submodule/Connector/system-tests/e2e-transfer-test/",permalink:"/edc-docs/docs/submodule/Connector/system-tests/e2e-transfer-test/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/system-tests/e2e-transfer-test/README.md",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"Modules detail",id:"modules-detail",level:2},{value:"Postgresql",id:"postgresql",level:2},{value:"CosmosDB",id:"cosmosdb",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"endtoend-transfer-test"},"EndToEnd Transfer Test"),(0,s.kt)("p",null,"This tests verifies some complete scenarios of contract negotiation and data transfer between a consumer and a provider."),(0,s.kt)("h2",{id:"modules-detail"},"Modules detail"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./backend-service"},"backend-service"),": it represents an external application that interacts with the EDC."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./control-plane"},"control-plane"),": it's responsible for handling the contract negotiation phase using in-memory persistence"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./control-plane-postgresql"},"control-plane-postgresql"),": it's responsible for handling the contract negotiation phase using postgresql persistence"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./data-plane"},"data-plane"),": it handles the data transfer phase acting as a proxy"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./runner"},"runner"),": it contains the test implementation")),(0,s.kt)("h2",{id:"postgresql"},"Postgresql"),(0,s.kt)("p",null,"To run the ",(0,s.kt)("inlineCode",{parentName:"p"},"EndToEndTransferPostgresqlTest")," you need to spin the postgresql container:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm --name edc-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres\n")),(0,s.kt)("h2",{id:"cosmosdb"},"CosmosDB"),(0,s.kt)("p",null,"Check the instructions about how to run a local cosmos-emulator instance in the ",(0,s.kt)("a",{parentName:"p",href:"../../extensions/azure/azure-test/README.md"},"azure-test README")))}u.isMDXComponent=!0}}]);