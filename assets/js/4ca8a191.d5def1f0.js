"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=i,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return r?n.createElement(h,a(a({ref:t},m),{},{components:r})):n.createElement(h,a({ref:t},m))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={},a="Micrometer metrics",s={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/README",id:"submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/README",title:"Micrometer metrics",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics",slug:"/submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/README.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Spike",id:"spike",level:2},{value:"Micrometer registry",id:"micrometer-registry",level:3},{value:"Prometheus",id:"prometheus",level:3},{value:"Collecting System and JVM metrics",id:"collecting-system-and-jvm-metrics",level:3},{value:"Collecting OkHttp metrics",id:"collecting-okhttp-metrics",level:3},{value:"Collecting Jetty metrics",id:"collecting-jetty-metrics",level:3},{value:"Jersey",id:"jersey",level:3},{value:"ExecutorService",id:"executorservice",level:3}],m={toc:l};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"micrometer-metrics"},"Micrometer metrics"),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://micrometer.io/"},"Micrometer")," metrics library to automatically collect metrics from the host system, JVM, and frameworks and libraries used in EDC (including OkHttp, Jetty and Jersey). This enables users to integrate with most observability stacks in the market."),(0,i.kt)("p",null,"Micrometer dependencies are not introduced in core. Middleware and callbacks are used to optionally import dedicated monitoring modules in the runtime."),(0,i.kt)("p",null,"Metrics instrumentation is optional and can be disabled globally or for specific modules via runtime settings."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This decision record only deals with ",(0,i.kt)("em",{parentName:"p"},"automatically collected metrics"),". ",(0,i.kt)("em",{parentName:"p"},"Custom metrics")," will be addressed in further work."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The basic functionality in the EDC ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inversion_of_control"},"IoC")," container does not allow proper decoupling of Micrometer listener from factory logic. Therefore, it is currently necessary to write Micrometer binding code directly in factory classes (for example, the class that sets up the Jetty server)."),(0,i.kt)("h2",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"Capturing key system metrics, especially on I/O interfaces, is essential to system observability. Micrometer is a mature framework for collecting metrics, is well supported by vendors of metrics collector products, and can directly integrate with the popular open-source libraries used in EDC."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/reference/specification/metrics/"},"OpenTelemetry Metrics")," library standard was also considered, but it is currently experimental and still lacks broad vendor and library support. It is likely to catch up in the medium-term future, at which point Micrometer might be swapped."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/docs/supported-libraries.md#libraries--frameworks"},"OpenTelemetry agent")," already supports collecting metrics from Micrometer, and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/blob/main/sdk-extensions/autoconfigure/README.md"},"exposing them")," to a Prometheus endpoint. Prometheus is a widely used open source standard for exposing application metrics via an HTTP endpoint. On Azure, the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-monitor/app/java-in-process-agent"},"Application Insights agent")," natively forwards metrics from Micrometer to Azure Application Insights."),(0,i.kt)("h2",{id:"spike"},"Spike"),(0,i.kt)("p",null,"We built a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/compare/main...agera-edc:spike/419/7-micrometer-metrics?expand=1"},"spike")," in a repository fork. The spike configures Micrometer to collect metrics in multiple ways."),(0,i.kt)("h3",{id:"micrometer-registry"},"Micrometer registry"),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"https://micrometer.io/docs/concepts#_global_registry"},"global Micrometer registry")," to enable ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-monitor/app/java-in-process-agent"},"Application Insights agent")," integration. The registry does not require any configuration."),(0,i.kt)("h3",{id:"prometheus"},"Prometheus"),(0,i.kt)("p",null,"In our spike, we created ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agera-edc/DataSpaceConnector/tree/spike/419/7-micrometer-metrics/samples/04.3-open-telemetry"},"a sample 04.3")," to deploy an open-source Prometheus server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  prometheus:\n    image: prom/prometheus:v2.30.3\n    container_name: prometheus\n    volumes:\n      - ./prometheus/:/etc/prometheus/\n    ports:\n      - 9090:9090\n")),(0,i.kt)("p",null,"The server is the available at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:9090"},"http://localhost:9090"),"."),(0,i.kt)("p",null,"We added an environment variable for the OpenTelemetry agent to automatically expose a Prometheus endpoint on default port 9464."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"}," # Env var for consumer and producer\n OTEL_METRICS_EXPORTER: prometheus\n")),(0,i.kt)("p",null,"We created a suitable file at ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," for the Prometheus server to scrape those endpoints."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 10s\n  scrape_timeout: 10s\n\nscrape_configs:\n  - job_name: services\n    static_configs:\n      - targets:\n          - 'consumer:9464'\n        labels:\n          service: 'Consumer'\n      - targets:\n          - 'provider:9464'\n        labels:\n          service: 'Provider'\n")),(0,i.kt)("h3",{id:"collecting-system-and-jvm-metrics"},"Collecting System and JVM metrics"),(0,i.kt)("p",null,"At startup, we run the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"        new ClassLoaderMetrics().bindTo(registry);\n        new JvmMemoryMetrics().bindTo(registry);\n        new JvmGcMetrics().bindTo(registry);\n        new ProcessorMetrics().bindTo(registry);\n        new JvmThreadMetrics().bindTo(registry);\n")),(0,i.kt)("p",null,"This tracks among others the number of live threads:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jvm-metrics",src:r(52733).Z,width:"2022",height:"1340"})),(0,i.kt)("h3",{id:"collecting-okhttp-metrics"},"Collecting OkHttp metrics"),(0,i.kt)("p",null,"OkHttp is an HTTP client library used in EDC to perform outgoing REST calls. Micrometer ",(0,i.kt)("a",{parentName:"p",href:"https://micrometer.io/docs/ref/okhttpclient"},"natively integrates with OkHttp"),"."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"OkHttpClient")," instance is globally confirmed in the ",(0,i.kt)("inlineCode",{parentName:"p"},":core:base")," module. We instrument the client with a metrics listener:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' OkHttpClient client = new OkHttpClient.Builder()\n                .eventListener(OkHttpMetricsEventListener.builder(registry, "okhttp.requests").build())\n')),(0,i.kt)("p",null,"This yields count and duration histogram metrics, tagged by target URL."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"okhttp-metrics",src:r(95210).Z,width:"2032",height:"1308"})),(0,i.kt)("h3",{id:"collecting-jetty-metrics"},"Collecting Jetty metrics"),(0,i.kt)("p",null,"Jetty is the HTTP server and servlet container used in EDC to expose HTTP endpoints. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/micrometer-metrics/micrometer/tree/main/micrometer-core/src/main/java/io/micrometer/core/instrument/binder/jetty"},"Micrometer natively integrates with Jetty"),", although the integration is not documented. We referred to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/blob/ce6b12a02480f77ead612834123ba640509649c9/spring-boot-project/spring-boot-actuator/src/main/java/org/springframework/boot/actuate/metrics/web/jetty/JettyConnectionMetricsBinder.java#L49"},"Spring Boot code")," to understand how to achieve integration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JettyConnectionMetrics.addToAllConnectors(server, registry);\n")),(0,i.kt)("p",null,"This yields the count of connections, as well as counters and histograms of inbound and outbound bytes:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jetty-metrics",src:r(23958).Z,width:"2026",height:"1256"})),(0,i.kt)("h3",{id:"jersey"},"Jersey"),(0,i.kt)("p",null,"Jersey is the REST framework used in EDC to provide JAX-RS (JSR-370) endpoints (REST Controllers). ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/micrometer-metrics/micrometer/tree/main/micrometer-core/src/main/java/io/micrometer/core/instrument/binder/jersey/server"},"Micrometer natively integrates with Jersey")," although the integration is not documented. We also referred to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-boot/blob/d336a96b7f204a398b8237560c5dfa7095c53460/spring-boot-project/spring-boot-actuator-autoconfigure/src/main/java/org/springframework/boot/actuate/autoconfigure/metrics/jersey/JerseyServerMetricsAutoConfiguration.java#L81"},"Spring Boot code")," to understand how to achieve integration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'            resourceConfig.register(new MetricsApplicationEventListener(\n                    registry,\n                    new DefaultJerseyTagsProvider(),\n                    /* metricName = */ "jersey",\n                    /* autoTimeRequests = */ true));\n')),(0,i.kt)("p",null,"This yields count and duration histogram metrics, tagged by REST service as well as result status and exception thrown, if any."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jersey-metrics",src:r(89548).Z,width:"1902",height:"1366"})),(0,i.kt)("p",null,"The sample query below tracks a particular duration ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/histograms/#quantiles"},"histogram quantile"),". In this instance, 95% of queries to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/negotiation")," endpoint are served in under ~4.8 milliseconds."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jersey-quantile",src:r(3723).Z,width:"1768",height:"1326"})),(0,i.kt)("h3",{id:"executorservice"},"ExecutorService"),(0,i.kt)("p",null,"Micrometer can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/micrometer-metrics/micrometer/blob/708c62def62c477700a22e15145be689af95fbdb/micrometer-core/src/main/java/io/micrometer/core/instrument/binder/jvm/ExecutorServiceMetrics.java"},"automatically monitor ",(0,i.kt)("inlineCode",{parentName:"a"},"ExecutorService"))," and report of number of idle and active threads,  queued tasks etc. That will be particularly useful when managing thread pools for parallel data transfers."))}p.isMDXComponent=!0},89548:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jersey-metrics-7a27720da06e2febd2307cc2587c0582.png"},3723:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jersey-quantile-e7f69ade8b823107ad72572e883211c0.png"},23958:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jetty-metrics-1aca872370dd2dc24defd18ac5ffba2f.png"},52733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jvm-metrics-feaeaabb8298f4d44c94e4ce001cb3fc.png"},95210:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/okhttp-metrics-82fd5a8ebaec2f2cb2fec50180268a60.png"}}]);