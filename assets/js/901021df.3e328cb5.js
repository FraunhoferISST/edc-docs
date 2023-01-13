"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[1685],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},o="Transfer Data Plane",l={unversionedId:"submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/README",id:"submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/README",title:"Transfer Data Plane",description:"This extension provides services for delegating data transfer to the Data Plane. Especially two types of data transfers are supported:",source:"@site/docs/submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/README.md",sourceDirName:"submodule/Connector/extensions/control-plane/transfer/transfer-data-plane",slug:"/submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/",permalink:"/edc-docs/docs/submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/README.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Background",id:"background",level:2},{value:"Scope",id:"scope",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Consumer pull",id:"consumer-pull",level:4},{value:"Provider push",id:"provider-push",level:4},{value:"Technical Details",id:"technical-details",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Terminology",id:"terminology",level:2},{value:"Design Principles",id:"design-principles",level:2},{value:"Consumer pull",id:"consumer-pull-1",level:3},{value:"Provider push",id:"provider-push-1",level:3}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transfer-data-plane"},"Transfer Data Plane"),(0,r.kt)("p",null,"This extension provides services for delegating data transfer to the Data Plane. Especially two types of data transfers are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consumer Pull: data consumer pulls actively the data by hitting an endpoint exposed by the provider. This use-case is typically\nused in cases where the data provider wants to use its Data Plane as a http proxy to an internal backend API which serves data."),(0,r.kt)("li",{parentName:"ul"},"Provider Push: if data request is successfully processed, then the provider pushes data from its data source to the provider.")),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The Data Plane is the component performing the actual data exchange between the provider and the consumer. Once an agreement\nis established between the consumer and the provider, then the consumer can trigger the data request that will initiate the data exchange.\nWhen at this stage, the present extension is used for delegating the data transfer to the appropriate Data Plane instance."),(0,r.kt)("h3",{id:"scope"},"Scope"),(0,r.kt)("p",null,"This extension is to be used for every data transfer use-case relying on the EDC data plane."),(0,r.kt)("h3",{id:"use-cases"},"Use Cases"),(0,r.kt)("h4",{id:"consumer-pull"},"Consumer pull"),(0,r.kt)("p",null,"Let us consider that a data provider wants to expose a REST API serving flight schedule data. This REST API takes in input\na set of query parameters which enables to restrict the amount of data returned in the response, e.g. departure date, boarding airport...\nA consumer of this API will potentially be interested in hitting this API several times, potentially with different parameters, depending\non how the consumer backend application are exploiting the data."),(0,r.kt)("p",null,"For this use-case, the Provider Push data transfer type would not be relevant, as it would require to establish a new contract before\nthe consumer send a new http request, which would potentially overload the Control Plane. The Consumer Pull data transfer comes handy in that case."),(0,r.kt)("p",null,"To trigger this data transfer type, the destination type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataRequest")," must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpProxy"),"."),(0,r.kt)("h4",{id:"provider-push"},"Provider push"),(0,r.kt)("p",null,"A consumer wants to perform a one-time transfer of a large amount of data stored in a S3 bucket on provider side, and\nput these data into its Azure Blob Storage."),(0,r.kt)("h2",{id:"technical-details"},"Technical Details"),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"This extension introduces a Control Plane endpoint used by the Data Plane for validating the access token received in input\nof its public API. OpenApi documentation can be found ",(0,r.kt)("a",{parentName:"p",href:"../../../../resources/openapi/yaml/transfer-data-plane.yaml"},"here"),"."),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"edc.transfer.proxy.token.validity.seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Validity (in seconds) of tokens generated by the extension for accessing Data Plane public API"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"edc.transfer.client.selector.strategy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Strategy for Data Plane instance selection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"random")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"edc.transfer.proxy.token.signer.privatekey.alias")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias of private key used for signing tokens"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Random EC public key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"edc.transfer.proxy.token.verifier.publickey.alias")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias of public key used for verifying the tokens"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Random EC private key")))),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("h2",{id:"design-principles"},"Design Principles"),(0,r.kt)("h3",{id:"consumer-pull-1"},"Consumer pull"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:a(24490).Z,width:"1501",height:"1071"})),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Provider and consumer agree to a contract (not displayed in the diagram)"),(0,r.kt)("li",{parentName:"ol"},"Consumer initiates the transfer process, i.e. sends ",(0,r.kt)("inlineCode",{parentName:"li"},"DataRequest")," with destination type equals to ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProxy")),(0,r.kt)("li",{parentName:"ol"},"Provider Control Plane asks to the selector which Data Plane instance can be used for this data transfer"),(0,r.kt)("li",{parentName:"ol"},"Selector returns an eligible Data Plane instance (if any)"),(0,r.kt)("li",{parentName:"ol"},"Provider Control Plane generates an ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointDataReference")," with a signed token composed of:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"dad")," claim containing the encrypted ",(0,r.kt)("inlineCode",{parentName:"li"},"DataAddress")," of the actual data source (provider ecosystem)"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"cid")," claim containing the contract id"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"EndpointDataReference")," is sent to the consumer Control Plane (IDS protocol)"),(0,r.kt)("li",{parentName:"ol"},"Consumer Control Plane asks to the selector which Data Plane instance can be used for this data transfer"),(0,r.kt)("li",{parentName:"ol"},"Selector returns an eligible Data Plane instance (if any)"),(0,r.kt)("li",{parentName:"ol"},"Transform the ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointDataReference")," into another with a signed token composed of:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"dad")," claim containing the encrypted ",(0,r.kt)("inlineCode",{parentName:"li"},"DataAddress")," to the Provider Data Plane, i.e. a ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpDataAddress")," whose url is the public API of the Provider Data Plane."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"cid")," claim containing the contract id"))),(0,r.kt)("li",{parentName:"ol"},"Dispatch the resulting ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointDataReference")," to the appropriate backend services (consumer ecosystem), see ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointDataReferenceReceiver")),(0,r.kt)("li",{parentName:"ol"},"Consumer backend services hit the Consumer Data Plane public API with any verb (GET, POST, DELETE...) and pass the token of the ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointDataReference")," as input"),(0,r.kt)("li",{parentName:"ol"},"Consumer Data Plane sends the token to its Control Plane for validation"),(0,r.kt)("li",{parentName:"ol"},"Consumer Control Plane validates the token, check if contract is still valid and, if yes, decrypt the ",(0,r.kt)("inlineCode",{parentName:"li"},"DataAddress")),(0,r.kt)("li",{parentName:"ol"},"Consumer Control Plane returns the decrypted data address to the Data Plane"),(0,r.kt)("li",{parentName:"ol"},"Consumer Data Plane forwards the data request to the Provider Data Plane public API"),(0,r.kt)("li",{parentName:"ol"},"Consumer Data Plane sends the token to its Control Plane for validation"),(0,r.kt)("li",{parentName:"ol"},"Provider Control Plane validates the token, check if contract is still valid and, if yes, decrypt the ",(0,r.kt)("inlineCode",{parentName:"li"},"DataAddress")),(0,r.kt)("li",{parentName:"ol"},"Provider Control Plane returns the decrypted data address to the Data Plane"),(0,r.kt)("li",{parentName:"ol"},"Provider Data Plane forward data request to the backend services"),(0,r.kt)("li",{parentName:"ol"},"Backend services return data to Provider Data Plane"),(0,r.kt)("li",{parentName:"ol"},"Provider Data Plane returns data to Consumer Data Plane"),(0,r.kt)("li",{parentName:"ol"},"Consumer Data Plane returns data to the Consumer backend services")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:")),"  For a Data Plane instance to be eligible for the transfer, it must:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"contains ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProxy")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"allowedDestTypes")),(0,r.kt)("li",{parentName:"ul"},"contain a ",(0,r.kt)("inlineCode",{parentName:"li"},"property")," which key ",(0,r.kt)("inlineCode",{parentName:"li"},"publicApiUrl"),", which contains the actual URL of the Data Plane public API."))),(0,r.kt)("h3",{id:"provider-push-1"},"Provider push"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:a(31423).Z,width:"1251",height:"489"})),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Provider and consumer agree to a contract (not displayed in the diagram)"),(0,r.kt)("li",{parentName:"ol"},"Consumer initiates the transfer process, i.e. sends ",(0,r.kt)("inlineCode",{parentName:"li"},"DataRequest")," with any destination type other than ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProxy")),(0,r.kt)("li",{parentName:"ol"},"Provider Control Plane retrieves the ",(0,r.kt)("inlineCode",{parentName:"li"},"DataAddress")," of the actual data source and creates a ",(0,r.kt)("inlineCode",{parentName:"li"},"DataFlowRequest")," based on the received ",(0,r.kt)("inlineCode",{parentName:"li"},"DataRequest")," and this data address"),(0,r.kt)("li",{parentName:"ol"},"Provider Control Plane asks to the selector which Data Plane instance can be used for this data transfer"),(0,r.kt)("li",{parentName:"ol"},"Selector returns an eligible Data Plane instance (if any)"),(0,r.kt)("li",{parentName:"ol"},"Provider Control Plane sends the ",(0,r.kt)("inlineCode",{parentName:"li"},"DataFlowRequest")," to the selected Data Plane instance through its control API (see ",(0,r.kt)("inlineCode",{parentName:"li"},"DataPlaneControlApi"),")"),(0,r.kt)("li",{parentName:"ol"},"Provider Data Plane validates the incoming request"),(0,r.kt)("li",{parentName:"ol"},"If request is valid, Provider Data Plane returns acknowledgement"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"DataPlaneManager")," of the Provider Data Plane processes the request: it creates a ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSource"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"DataSink")," pair based on the source/destination data addresses"),(0,r.kt)("li",{parentName:"ol"},"Provider Data Plane fetches data from the actual data source (see ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSource"),")"),(0,r.kt)("li",{parentName:"ol"},"Provider Data Plane pushes data to the consumer services (see ",(0,r.kt)("inlineCode",{parentName:"li"},"DataSink"),")")))}c.isMDXComponent=!0},24490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transfer-data-plane-consumer-pull-c73a193decd9cd47851da088876d5b35.png"},31423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transfer-data-plane-provider-push-034ef24f33ecff2d7e711c1a17d18f9a.png"}}]);