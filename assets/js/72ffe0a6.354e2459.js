"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[5236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Running a simple connector",c={unversionedId:"submodule/Connector/samples/basic-connector/README",id:"submodule/Connector/samples/basic-connector/README",title:"Running a simple connector",description:"A runnable connector consists of a Runtime and a build file, in our case this is a build.gradle.kts.",source:"@site/docs/submodule/Connector/samples/01-basic-connector/README.md",sourceDirName:"submodule/Connector/samples/01-basic-connector",slug:"/submodule/Connector/samples/basic-connector/",permalink:"/edc-docs/docs/submodule/Connector/samples/basic-connector/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/samples/01-basic-connector/README.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-simple-connector"},"Running a simple connector"),(0,o.kt)("p",null,"A runnable connector consists of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," and a build file, in our case this is a ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle.kts"),"."),(0,o.kt)("p",null,"The first thing we need is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," which is the main entry point to the connector application, same as with any\nother Java program. In this sample we use the ",(0,o.kt)("a",{target:"_blank",href:n(87683).Z},(0,o.kt)("code",null,"BaseRuntime")),",\nbut this can be extended (take a look at the ",(0,o.kt)("a",{parentName:"p",href:"../other/custom-runtime"},(0,o.kt)("inlineCode",{parentName:"a"},"custom-runtime"))," sample for more information)"),(0,o.kt)("p",null,"The second thing we need is a ",(0,o.kt)("a",{target:"_blank",href:n(8236).Z},"gradle build file"),"\nthat contains the essential dependencies. We'll need at least the following things:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation(project(":core:control-plane:control-plane-core"))\n    \n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Additional dependencies will be added to this list in the future, so be sure to check back regularly!"))),(0,o.kt)("p",null,"with that we can build and run the connector from the root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew clean samples:01-basic-connector:build\njava -jar samples/01-basic-connector/build/libs/basic-connector.jar\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: the above snippet assumes that you did not alter the build file, i.e. the ",(0,o.kt)("inlineCode",{parentName:"em"},"shadow")," plugin is used and the build\nartifact resides at the path mentioned above. Also, we assume usage of the Gradle Wrapper, as opposed to a local Gradle\ninstallation.")),(0,o.kt)("p",null,"If everything works as intended you should see command-line output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"INFO 2022-01-13T13:43:57.677973407 Secrets vault not configured. Defaulting to null vault.\nINFO 2022-01-13T13:43:57.680158117 Initialized Null Vault\nINFO 2022-01-13T13:43:57.851181615 Initialized Core Services\nINFO 2022-01-13T13:43:57.852046576 Initialized Schema Registry\nINFO 2022-01-13T13:43:57.853010987 Initialized In-Memory Transfer Process Store\nINFO 2022-01-13T13:43:57.856956651 Initialized Core Transfer\nINFO 2022-01-13T13:43:57.857664924 Initialized In-Memory Asset Index\nINFO 2022-01-13T13:43:57.857957714 Initialized In-Memory Contract Definition Store\nINFO 2022-01-13T13:43:57.860738605 Initialized Core Contract Service\nINFO 2022-01-13T13:43:57.861390422 Initialized In-Memory Contract Negotiation Store\nINFO 2022-01-13T13:43:57.862002044 Started Core Services\nINFO 2022-01-13T13:43:57.862247712 Started Schema Registry\nINFO 2022-01-13T13:43:57.862782289 Started In-Memory Transfer Process Store\nINFO 2022-01-13T13:43:57.8635804 Started Core Transfer\nINFO 2022-01-13T13:43:57.86371948 Started In-Memory Asset Index\nINFO 2022-01-13T13:43:57.863838751 Started In-Memory Contract Definition Store\nINFO 2022-01-13T13:43:57.86497334 Started Core Contract Service\nINFO 2022-01-13T13:43:57.865146132 Started In-Memory Contract Negotiation Store\nINFO 2022-01-13T13:43:57.866073376 edc-e796b518-35f0-4c45-a333-79ca20a6be06 ready\n")),(0,o.kt)("p",null,"This basic connector - while perfectly fine - does not offer any outward-facing API, nor does it provide any\nconnector-to-connector communication protocols. However, it will serve us as platform to build out more complex\nscenarios."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/edc-docs/docs/submodule/Connector/samples/health-endpoint/"},"Next Chapter")))}d.isMDXComponent=!0},87683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/BaseRuntime-558eeb2fa5f36c7cbd484822b5fab965.java"},8236:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/build.gradle-203a9c1ea5c0f96af0ddb22daa7205ed.kts"}}]);