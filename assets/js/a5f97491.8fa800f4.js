"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[6005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="Data Plane HTTP extension",o={unversionedId:"submodule/Connector/extensions/data-plane/data-plane-http/README",id:"submodule/Connector/extensions/data-plane/data-plane-http/README",title:"Data Plane HTTP extension",description:"Background",source:"@site/docs/submodule/Connector/extensions/data-plane/data-plane-http/README.md",sourceDirName:"submodule/Connector/extensions/data-plane/data-plane-http",slug:"/submodule/Connector/extensions/data-plane/data-plane-http/",permalink:"/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-http/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/data-plane/data-plane-http/README.md",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"Background",id:"background",level:2},{value:"Scope",id:"scope",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Technical Details",id:"technical-details",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Design Principles",id:"design-principles",level:2}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-plane-http-extension"},"Data Plane HTTP extension"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("h3",{id:"scope"},"Scope"),(0,r.kt)("p",null,"This extension provides support for sending data sourced from an HTTP endpoint and posting data to an HTTP endpoint. By\nnature of the DPF design, which supports ",(0,r.kt)("em",{parentName:"p"},"n"),"-way transfers, HTTP-sourced data can be sent to any ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSink")," type and an\nHTTP endpoint can receive data from any ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSource")," type. The extension is designed to stream content to limit memory\nconsumption under load."),(0,r.kt)("h3",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Typically, this extension is used to fetch or post data from/to a REST endpoint."),(0,r.kt)("h2",{id:"technical-details"},"Technical Details"),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"extensions:data-plane:data-plane-spi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SPI of the data plane")))),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"The setting parameters of this extension are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"edc.dataplane.http.sink.partition.size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of partitions for parallel message push in the ",(0,r.kt)("inlineCode",{parentName:"td"},"HttpDataSink")),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5")))),(0,r.kt)("h2",{id:"design-principles"},"Design Principles"),(0,r.kt)("p",null,"This extension provides implementations for ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpDataSourceFactory"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpDataSinkFactory"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpDataSource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpDataSink"),", which are triggered when\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFlowRequest")," type is ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpData"),"."),(0,r.kt)("p",null,"Basically the role of these classes is to extract the parameters (query params, path, body, auth header...) required to hit the HTTP endpoint and then to perform the call."),(0,r.kt)("p",null,"The table below summarizes how each parameter is retrieved for the source/sink implementations."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"HttpDataSource")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"HttpDataSink")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Base url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source/destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Same"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"http://example.com"},"http://example.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Authorization header key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source/destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Same"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api-Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Authorization header code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source/destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress"),", which can either contains the secret value, or the ",(0,r.kt)("inlineCode",{parentName:"td"},"Vault")," secret name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Same"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8e631012-f6de-11ec-b939-0242ac120002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Headers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Source/destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Same"),(0,r.kt)("td",{parentName:"tr",align:"left"},"foo:bar;hello:world")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DataFlowRequest")," properties if path proxy enabled by the source ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"foo/bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Query params"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DataFlowRequest")," properties if query param proxy enabled by the source ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"hello=world&foo=bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Method"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DataFlowRequest")," properties if method proxy enabled by the source ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress"),", otherwise default to ",(0,r.kt)("inlineCode",{parentName:"td"},"GET")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")," if present, otherwise ",(0,r.kt)("inlineCode",{parentName:"td"},"POST")," by default"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GET, POST...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Content type"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DataFlowRequest")," properties if body proxy enabled by the source ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Body"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DataFlowRequest")," properties if body proxy enabled by the source ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Part")," stream fetched by the ",(0,r.kt)("inlineCode",{parentName:"td"},"DataSource")),(0,r.kt)("td",{parentName:"tr",align:"left"},'"hello world!"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NonChunkedTransfer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Not used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination ",(0,r.kt)("inlineCode",{parentName:"td"},"DataAddress")," if present, otherwise ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," by default"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"false"')))))}m.isMDXComponent=!0}}]);