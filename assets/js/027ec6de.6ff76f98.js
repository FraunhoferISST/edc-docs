"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[9588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(m,".").concat(k)]||u[k]||c[k]||l;return a?n.createElement(N,o(o({ref:t},s),{},{components:a})):n.createElement(N,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},o="Extensions",i={unversionedId:"submodule/Connector/extensions/README",id:"submodule/Connector/extensions/README",title:"Extensions",description:"- Common",source:"@site/docs/submodule/Connector/extensions/README.md",sourceDirName:"submodule/Connector/extensions",slug:"/submodule/Connector/extensions/",permalink:"/edc-docs/docs/submodule/Connector/extensions/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/README.md",tags:[],version:"current",frontMatter:{}},m={},p=[],s={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extensions"},"Extensions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Common",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/api/api-core/"},"Core")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/api/api-observability/"},"Observability")))),(0,r.kt)("li",{parentName:"ul"},"Auth",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/auth/auth-basic/"},"Basic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/auth/auth-tokenbased/"},"Token-based")))),(0,r.kt)("li",{parentName:"ul"},"AWS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/aws/aws-s3-core/"},"S3 Core")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/aws/aws-s3-test/"},"Test")))),(0,r.kt)("li",{parentName:"ul"},"Azure",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/azure/azure-blob-core/"},"Blob Core")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/azure/azure-cosmos-core/"},"Cosmos Common")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/azure/azure-eventgrid/"},"Event Grid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/azure/azure-resource-manager/"},"Resource Manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/azure/azure-test/"},"Test")))),(0,r.kt)("li",{parentName:"ul"},"Configuration",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/configuration/configuration-filesystem/"},"Filesystem")))),(0,r.kt)("li",{parentName:"ul"},"Events",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/events/events-cloud-http/"},"Cloud HTTP")))),(0,r.kt)("li",{parentName:"ul"},"HTTP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/http/jersey-core/"},"Jersey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/http/jersey-micrometer/"},"Jersey Micrometer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/http/jetty-core/"},"Jetty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/http/jetty-micrometer/"},"Jetty Micrometer")))),(0,r.kt)("li",{parentName:"ul"},"IAM",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/iam/oauth2/oauth2-daps/"},"DAPS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/iam/decentralized-identity/"},"Decentralized Identity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/iam/oauth2/oauth2-core/"},"OAuth2")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/junit/"},"JUnit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/metrics/micrometer-core/"},"Micrometer")),(0,r.kt)("li",{parentName:"ul"},"Monitor",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/monitor/monitor-jdk-logger/"},"JDK Logger")))),(0,r.kt)("li",{parentName:"ul"},"SQL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/sql/sql-core/"},"Common")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/sql/sql-lease/"},"Lease")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/sql/sql-pool/"},"Pool")))),(0,r.kt)("li",{parentName:"ul"},"Transaction",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/transaction/transaction-atomikos/"},"Atomikos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/transaction/transaction-local/"},"Local")))),(0,r.kt)("li",{parentName:"ul"},"Vault",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/vault/vault-azure/"},"Azure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/vault/vault-filesystem/"},"Filesystem")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"common/vault/vault-hashicorp/"},"HashiCorp")))))),(0,r.kt)("li",{parentName:"ul"},"Control Plane",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/"},"Management API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/management-api-configuration/"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/asset-api/"},"Asset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/catalog-api/"},"Catalog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/contract-agreement-api/"},"Contract Agreement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/contract-definition-api/"},"Contract Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/contract-negotiation-api/"},"Contract Negotiation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/policy-definition-api/"},"Policy Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/api/management-api/transfer-process-api/"},"Transfer Process")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/data-plane-transfer/"},"Data Plane Transfer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/transfer-pull-http-receiver/"},"HTTP Receiver")),(0,r.kt)("li",{parentName:"ul"},"Provision",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/provision/provision-blob/"},"Blob")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/provision/provision-http/"},"HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/provision/provision-aws-s3/"},"S3")))),(0,r.kt)("li",{parentName:"ul"},"Store",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cosmos",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/cosmos/asset-index-cosmos/"},"Asset Index")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/cosmos/contract-definition-store-cosmos/"},"Contract Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/cosmos/contract-negotiation-store-cosmos/"},"Contract Negotiation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/cosmos/control-plane-cosmos/"},"Control Plane")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/cosmos/policy-definition-store-cosmos/"},"Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/cosmos/transfer-process-store-cosmos/"},"Transfer Process")))),(0,r.kt)("li",{parentName:"ul"},"SQL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/sql/asset-index-sql/"},"Asset Index")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/sql/contract-definition-store-sql/"},"Contract Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/sql/contract-negotiation-store-sql/"},"Contract Negotiation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/sql/control-plane-sql/"},"Control Plane")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/sql/policy-definition-store-sql/"},"Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"control-plane/store/sql/transfer-process-store-sql/"},"Transfer Process")))))))),(0,r.kt)("li",{parentName:"ul"},"Data Plane",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane/data-plane-api/"},"API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane/data-plane-azure-storage/"},"Azure Storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane/data-plane-azure-data-factory/"},"Data Factory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane/data-plane-http/"},"HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane/data-plane-aws-s3/"},"S3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane/data-plane-integration-tests/"},"Tests")))),(0,r.kt)("li",{parentName:"ul"},"Data Plane Selector",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane-selector/data-plane-selector-api/"},"API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"data-plane-selector/data-plane-selector-client/"},"Client"))))))}c.isMDXComponent=!0}}]);