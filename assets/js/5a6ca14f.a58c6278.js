"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[9219],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),u=s,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(h,r(r({ref:t},p),{},{components:o})):n.createElement(h,r({ref:t},p))}));function u(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=o.length,r=new Array(a);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},99321:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(87462),s=(o(67294),o(3905));const a={},r="Storage implementations based on CosmosDB",i={unversionedId:"submodule/Connector/extensions/common/azure/azure-cosmos-core/README",id:"submodule/Connector/extensions/common/azure/azure-cosmos-core/README",title:"Storage implementations based on CosmosDB",description:"CosmosDB is a NoSQL database (formerly known as DocumentDB) that offers geo-replication, geo-distribution, several",source:"@site/docs/submodule/Connector/extensions/common/azure/azure-cosmos-core/README.md",sourceDirName:"submodule/Connector/extensions/common/azure/azure-cosmos-core",slug:"/submodule/Connector/extensions/common/azure/azure-cosmos-core/",permalink:"/edc-docs/docs/submodule/Connector/extensions/common/azure/azure-cosmos-core/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/common/azure/azure-cosmos-core/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"General structure",id:"general-structure",level:2},{value:"Why the <code>CosmosDbApi</code>?",id:"why-the-cosmosdbapi",level:2},{value:"Using document wrappers",id:"using-document-wrappers",level:2},{value:"A word on partition keys",id:"a-word-on-partition-keys",level:3},{value:"SQL statement creation",id:"sql-statement-creation",level:2},{value:"Pessimistic locking",id:"pessimistic-locking",level:2},{value:"Explicit leases",id:"explicit-leases",level:3},{value:"Implicit leases",id:"implicit-leases",level:3},{value:"Stored Procedures",id:"stored-procedures",level:2},{value:"Module-specific configuration",id:"module-specific-configuration",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"storage-implementations-based-on-cosmosdb"},"Storage implementations based on CosmosDB"),(0,s.kt)("p",null,"CosmosDB is a NoSQL database (formerly known as DocumentDB) that offers geo-replication, geo-distribution, several\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels"},"consistency levels"),", of which we're\nusing ",(0,s.kt)("inlineCode",{parentName:"p"},"Session")," setting, and a variety of APIs (SQL, Mongo, Table, etc.)."),(0,s.kt)("h2",{id:"general-structure"},"General structure"),(0,s.kt)("p",null,"Generally there should be one submodule for every store implementation based on CosmosDB, postfixed with ",(0,s.kt)("inlineCode",{parentName:"p"},"-cosmos"),",\ne.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"asset-index-cosmos")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"policy-definition-store-cosmos"),". Those submodules should contain the implementation for\nthe\nstore as well as a ",(0,s.kt)("inlineCode",{parentName:"p"},"ServiceExtension")," implementor that registers the store."),(0,s.kt)("p",null,'Furthermore there is some common code, such as SQL statement interpreters and -converters, the "leasing" mechanism (see\n',(0,s.kt)("a",{parentName:"p",href:"/edc-docs/docs/#pessimistic-locking"},"Pessimistic Locking"),"), which is located in the ",(0,s.kt)("inlineCode",{parentName:"p"},"azure-cosmos-core")," module."),(0,s.kt)("h2",{id:"why-the-cosmosdbapi"},"Why the ",(0,s.kt)("inlineCode",{parentName:"h2"},"CosmosDbApi"),"?"),(0,s.kt)("p",null,"In order to hide some complexities of the Java SDK for CosmosDB we implemented a simpler and more tailored experience\nfor CosmosDB, called the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosDbApi")," which offers basic read-write methods."),(0,s.kt)("p",null,"The implementation of that interface targets one particular container, so in an application that uses EDC uses several\nCosmosDB-based stores, there would have to be several instances of the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosDbApiImpl"),", each targeting one container."),(0,s.kt)("p",null,"Typically, the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmodDbApiImpl")," gets instantiated in the accompanying extension class and then gets passed into the\nstore\nimplementation."),(0,s.kt)("p",null,"From a pure technical perspective, using the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosDbApi")," abstraction layer is not necessary - one could also use\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosClient")," directly. However, for most use cases the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosDbApi")," offers convenient methods and hides some of\nthe complexity of the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosClient"),"."),(0,s.kt)("p",null,"For more information please refer to the Javadoc of ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosDbApi")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosDbApiImpl"),"."),(0,s.kt)("h2",{id:"using-document-wrappers"},"Using document wrappers"),(0,s.kt)("p",null,"CosmosDB can essentially store any arbitrary JSON documents. However, for the purposes of EDC we've introduced a wrapper\nobject, named the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosDocument")," and as a subclass the ",(0,s.kt)("inlineCode",{parentName:"p"},"LeaseableCosmosDocument"),". Both offer a unified way of\ninteracting with CosmosDB documents."),(0,s.kt)("p",null,"All documents stored using EDC's CosmosDB stores must have:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"an ID"),(0,s.kt)("li",{parentName:"ul"},"a partition key"),(0,s.kt)("li",{parentName:"ul"},"a ",(0,s.kt)("inlineCode",{parentName:"li"},"wrappedInstance"),": by default this is the JSON representation of whatever object should be stored in CosmosDB.")),(0,s.kt)("h3",{id:"a-word-on-partition-keys"},"A word on partition keys"),(0,s.kt)("p",null,"Partition keys are used to help CosmosDB determine how data should be partitioned physically.\nWhile CosmosDB suggests\nto ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey"},"use an item's ID as partition keys"),"\n,\nthis will simply not be possible in our use case, because ",(0,s.kt)("a",{parentName:"p",href:"/edc-docs/docs/#stored-procedures"},"stored procedures"),", which we use\nfor ",(0,s.kt)("a",{parentName:"p",href:"/edc-docs/docs/#pessimistic-locking"},"pessimistic locking"),",\nonly work ",(0,s.kt)("em",{parentName:"p"},"within")," the same partition."),(0,s.kt)("p",null,"We therefore generally recommend to use a static partition key for all items in a particular store, especially if there\nare stored procedures involved."),(0,s.kt)("h2",{id:"sql-statement-creation"},"SQL statement creation"),(0,s.kt)("p",null,"CosmosDB offers an SQL-like API, which we use for queries. The ",(0,s.kt)("inlineCode",{parentName:"p"},"azure-cosmos-core")," module offers an easy way to fluently\ncreate SQL statements from a ",(0,s.kt)("inlineCode",{parentName:"p"},"Criterion"),", or rather, a ",(0,s.kt)("inlineCode",{parentName:"p"},"List<Criterion>"),". The entrypoint to every SQL statement should\nbe the ",(0,s.kt)("inlineCode",{parentName:"p"},"SqlStatement"),"\nclass (",(0,s.kt)("a",{target:"_blank",href:o(82634).Z},"here"),")."),(0,s.kt)("h2",{id:"pessimistic-locking"},"Pessimistic locking"),(0,s.kt)("p",null,"Some CosmosDB-based stores that are included in EDC, more specifically, the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosTransferProcessStore"),"\nand ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosContractNegotiationStore"),", require that items are locked against simultaneous access. For example, when\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"TransferProcessManager")," fetches the next couple of ",(0,s.kt)("inlineCode",{parentName:"p"},"TransferProcess")," items for processing, it needs to be\nguaranteed that no other process\nmodifies the same item in the meantime. This would lead to corrupted states and therefore invalid state transitions.\nThe same is true for the ",(0,s.kt)("inlineCode",{parentName:"p"},"ContractNegotiationManager")," (or rather: it's subtypes)."),(0,s.kt)("p",null,"As a consequence, the ",(0,s.kt)("inlineCode",{parentName:"p"},"read"),"-operation on the DB must lock the item to guard against illegal modifications. In the\ncontext\nof EDC we call this a ",(0,s.kt)("inlineCode",{parentName:"p"},'"lease"'),"."),(0,s.kt)("p",null,"Clients such as the ",(0,s.kt)("inlineCode",{parentName:"p"},"CosmosTransferProcessStore")," reference a ",(0,s.kt)("inlineCode",{parentName:"p"},"LeaseContext"),", which allows them to acquire the lease\n",(0,s.kt)("em",{parentName:"p"},"explicitly")," by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"LeaseContext#acquireLease()"),", or ",(0,s.kt)("em",{parentName:"p"},"implicitly"),"."),(0,s.kt)("h3",{id:"explicit-leases"},"Explicit leases"),(0,s.kt)("p",null,"The explicit case is the simpler one, as it simply updates the ",(0,s.kt)("inlineCode",{parentName:"p"},"Lease")," property of the document. This operation may\nfail, if the item\nin question is already leased. Note that the CosmosDB's consistency level may have an influence on this behaviour."),(0,s.kt)("p",null,"We generally recommend using explicit leases for ",(0,s.kt)("inlineCode",{parentName:"p"},"update")," operations. Every ",(0,s.kt)("inlineCode",{parentName:"p"},"acquireLease()")," operation should be\nfollowed by a\n",(0,s.kt)("inlineCode",{parentName:"p"},"breakLease()")," operation, similar to Java's ",(0,s.kt)("inlineCode",{parentName:"p"},"WriteLock")," class."),(0,s.kt)("h3",{id:"implicit-leases"},"Implicit leases"),(0,s.kt)("p",null,"Implicit leases are more difficult, as they require a more sophisticated write operation. Let's look at a situation,\nwhere a batch of items should be obtained from the database, and in the same transaction those objects should also be\nguarded\nagainst competing access (the ",(0,s.kt)("inlineCode",{parentName:"p"},"TransferProcessStore#nextForState()")," would be such a situation)."),(0,s.kt)("p",null,"There, we have multiple database operations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SELECT")," all items that are not leased and satisfy a particular condition"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"UPDATE")," every single item in the selected set -> write lease")),(0,s.kt)("p",null,'We need to "lease and return" the items in one fell swoop.\nIn relational SQL databases we could use transactions of some sort, or possibly even some variant\nof row-level locks, e.g. a ',(0,s.kt)("inlineCode",{parentName:"p"},"SELECT ... FOR UPDATE")," statement, the concrete syntax of which will depend largely on the\ndialect."),(0,s.kt)("p",null,"In CosmosDB, the only way to achieve atomic operations is through UDFs (User-defined functions) and SPROCs (Stored\nProcedures), the latter of which is far more powerful and versatile."),(0,s.kt)("p",null,"This means that for stores that require that sort of pessimistic locking, we've implemented (and recommend the use of)\nSPROCs."),(0,s.kt)("p",null,"Both ",(0,s.kt)("em",{parentName:"p"},"explicit")," and ",(0,s.kt)("em",{parentName:"p"},"implicit")," leases expire after some time (default = 60 seconds), at which point they can be\nre-leased."),(0,s.kt)("h2",{id:"stored-procedures"},"Stored Procedures"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Please be aware, that if the SPROCs mentioned below are not uploaded to the CosmosDB container, the CosmosDB\nimplementations provided by EDC won't work! Most likely logs will show repeated 404 errors.")),(0,s.kt)("p",null,"Currently, there are two different stored procedures available for use. Both are written in Javascript and are\nprovided as resources in the ",(0,s.kt)("inlineCode",{parentName:"p"},"azure-cosmos-core")," module."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:o(70579).Z},"lease.js"),": used for explicit leases. Simply updates the ",(0,s.kt)("inlineCode",{parentName:"li"},"lease")," property\nof a ",(0,s.kt)("inlineCode",{parentName:"li"},"LeaseableCosmosDocument"),".\nWill fail if the lease cannot be acquired."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{target:"_blank",href:o(76279).Z},"nextForState.js"),': used for explicit leases when performing "lease\nand return" operations.')),(0,s.kt)("h2",{id:"module-specific-configuration"},"Module-specific configuration"),(0,s.kt)("p",null,"Please find the specific configuration values for each module in the respective sub-folder:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/"},"AssetIndex")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/"},"ContractDefinitionStore")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-negotiation-store-cosmos/"},"ContractNegotiationStore")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/policy-definition-store-cosmos/"},"PolicyStore")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/transfer-process-store-cosmos/"},"TransferProcessStore"))))}m.isMDXComponent=!0},82634:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/SqlStatement-533cd5c3bdb988416c68084c9604613f.java"},70579:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/lease-eab925c0993be1a883db87be5c2a9fd8.js"},76279:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/nextForState-f1d7b3bbfe3d234ddfaccee14ad6c597.js"}}]);