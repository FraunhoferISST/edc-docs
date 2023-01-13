"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[4027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={},a="Connector Observability API",s={unversionedId:"submodule/Connector/extensions/common/api/api-observability/README",id:"submodule/Connector/extensions/common/api/api-observability/README",title:"Connector Observability API",description:"This API exposes information about this runtime's health status by accessing the internal HealthCheckService. In order",source:"@site/docs/submodule/Connector/extensions/common/api/api-observability/README.md",sourceDirName:"submodule/Connector/extensions/common/api/api-observability",slug:"/submodule/Connector/extensions/common/api/api-observability/",permalink:"/edc-docs/docs/submodule/Connector/extensions/common/api/api-observability/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/common/api/api-observability/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Endpoint description",id:"endpoint-description",level:2},{value:"<code>GET /check/health</code>",id:"get-checkhealth",level:3},{value:"<code>GET /check/liveness</code>",id:"get-checkliveness",level:3},{value:"<code>GET /check/readiness</code>",id:"get-checkreadiness",level:3},{value:"<code>GET /check/startup</code>",id:"get-checkstartup",level:3},{value:"Usage in Dockerfiles",id:"usage-in-dockerfiles",level:2},{value:"Usage in Kubernetes files",id:"usage-in-kubernetes-files",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connector-observability-api"},"Connector Observability API"),(0,r.kt)("p",null,"This API exposes information about this runtime's health status by accessing the internal ",(0,r.kt)("inlineCode",{parentName:"p"},"HealthCheckService"),". In order\nto use it add the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle[.kts]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation(project(":extensions:common:api:api-observability"))\n// or using maven artifacts in downstream projects:\nimplementation("org.eclipse.edc:api-observability:${EDC_VERSION}")\n')),(0,r.kt)("p",null,"All endpoints described here have the same simple API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"they support the ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," method without query params"),(0,r.kt)("li",{parentName:"ul"},"if the health check is successful, i.e. ",(0,r.kt)("em",{parentName:"li"},"all")," systems are healthy, HTTP 200 is returned with the ",(0,r.kt)("inlineCode",{parentName:"li"},"HealthStatus")," object\nin the response body"),(0,r.kt)("li",{parentName:"ul"},"if one of the systems is unhealthy, an HTTP 503 is returned with the ",(0,r.kt)("inlineCode",{parentName:"li"},"HealthStatus")," object in the response body")),(0,r.kt)("h2",{id:"endpoint-description"},"Endpoint description"),(0,r.kt)("h3",{id:"get-checkhealth"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET /check/health")),(0,r.kt)("p",null,"returns information about the system status. This is primarily intended to be used\nin ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#healthcheck"},(0,r.kt)("inlineCode",{parentName:"a"},"HEALTHCHECK")," instructions in Docker files"),". Here,\nthis endpoint will return HTTP 200 indicating that the system is healthy as soon as the connector has finished starting.\nTherefore, the ",(0,r.kt)("inlineCode",{parentName:"p"},"/check/health")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/check/startup")," endpoints will have the same behaviour."),(0,r.kt)("h3",{id:"get-checkliveness"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET /check/liveness")),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes"},"Kubernetes docs"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"indicates whether the container is running.")),(0,r.kt)("p",null,"We can assume, that in the event that the connector crashes, all REST endpoints become unavailable."),(0,r.kt)("h3",{id:"get-checkreadiness"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET /check/readiness")),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes"},"Kubernetes docs"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates whether the container is ready to respond to requests.")),(0,r.kt)("p",null,"Thus, the readiness endpoint must return a value indicating success ",(0,r.kt)("em",{parentName:"p"},"only after"),' all extensions that contribute an API\nhave started successfully. Note, that other subsystems like the catalog crawlers might not yet be completed at that\npoint, but technically the connector is "ready to respond to requests", even if they might not produce the desired - or\neven a sensible - outcome. Catalog queries may produce an empty or incomplete result until crawlers have completed.'),(0,r.kt)("h3",{id:"get-checkstartup"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET /check/startup")),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes"},"Kubernetes docs"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates whether the application within the container is started")),(0,r.kt)("p",null,"This is very similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/check/readiness")," endpoint, but a connector may be able to respond to requests as soon as\nall extensions contributing APIs (e.g. REST controllers) have been registered, thus being ",(0,r.kt)("inlineCode",{parentName:"p"},"ready"),", whereas the startup\nis only completed after ",(0,r.kt)("em",{parentName:"p"},"all")," extensions have started. This can only be determined by the runtime. Again, parallel\nsubsystems like crawlers will ",(0,r.kt)("strong",{parentName:"p"},"not")," affect system startup state."),(0,r.kt)("h2",{id:"usage-in-dockerfiles"},"Usage in Dockerfiles"),(0,r.kt)("p",null,"Docker supports ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#healthcheck"},"health check")," commands. In order to use\nthe Observability API for that, simply add this line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM openjdk:17-slim-buster\n\n# by default curl is not available, so install it\nRUN apt update && apt install curl -y\n\n# HERE you should put all your other instructions, like exposing ports, etc.\n\n# health status is determined by the availability of the /health endpoint\nHEALTHCHECK --interval=5s --timeout=5s --retries=10 CMD curl --fail -X GET http://localhost:8181/api/check/health || exit 1\n\n# ENTRYPOINT left out for clarity\n")),(0,r.kt)("p",null,"Adjust the interval, timeout and retries to your convenience. Depending on your base image, you might not need to\ninstall ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),". However, if it is not present at container runtime, the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," will always fail and the container\nwill eventually become ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy"),"."),(0,r.kt)("h2",{id:"usage-in-kubernetes-files"},"Usage in Kubernetes files"),(0,r.kt)("p",null,"Regardless of how you deploy the connector to K8S (perhaps a ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment"),"), you can add the following section to your\ncontainer definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kubernetes",metastring:"helm",helm:!0},"# ...\n    spec:\n      containers:\n        - name: yourContainerName\n          imagePullPolicy: IfNotPresent\n          image: yourRepo/YourImageName\n          ports:\n            - name: http\n              containerPort: 8181\n\n          readinessProbe:\n            initialDelaySeconds: 1\n            periodSeconds: 5\n            httpGet:\n              port: http\n              path: /api/check/readiness\n\n          livenessProbe:\n            initialDelaySeconds: 3\n            periodSeconds: 5\n            httpGet:\n              port: http\n              path: /api/check/liveness\n\n          startupProbe:\n            initialDelaySeconds: 1\n            periodSeconds: 3\n            httpGet:\n              port: http\n              path: /api/startup\n")))}u.isMDXComponent=!0}}]);