"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[2995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s="System tests",c={unversionedId:"submodule/Connector/system-tests/README",id:"submodule/Connector/system-tests/README",title:"System tests",description:"Tracing integration tests",source:"@site/docs/submodule/Connector/system-tests/README.md",sourceDirName:"submodule/Connector/system-tests",slug:"/submodule/Connector/system-tests/",permalink:"/edc-docs/docs/submodule/Connector/system-tests/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/system-tests/README.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Tracing integration tests",id:"tracing-integration-tests",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-tests"},"System tests"),(0,o.kt)("h2",{id:"tracing-integration-tests"},"Tracing integration tests"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{target:"_blank",href:r(39178).Z},"TracingIntegrationTest")," makes sure that tracing works correctly when triggering a file transfer.\nThis test triggers a file transfer with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation"},"opentelemetry java agent attached"),". The default trace exporter configured in the agent is the OTLP exporter based on gRPC protocol. Therefore, a test OtlpGrpcServer is started to collect the traces.\nTo be able to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"TracingIntegrationTest")," locally, you need to place the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.12.0/opentelemetry-javaagent.jar"},"opentelemetry java agent")," in the project root folder.\nThen you can run the test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'./gradlew -p system-tests/tests test -DincludeTags="OpenTelemetryIntegrationTest"\n')))}u.isMDXComponent=!0},39178:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/FileTransferIntegrationTest-511a3648e8559c582836402eb327c494.java"}}]);