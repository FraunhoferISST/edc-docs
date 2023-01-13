"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[2105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},i="Custom validation framework",s={unversionedId:"submodule/Connector/docs/developer/custom_validation",id:"submodule/Connector/docs/developer/custom_validation",title:"Custom validation framework",description:"The validation framework hooks into the normal Jetty/Jersey request dispatch mechanism and is designed to allow users to",source:"@site/docs/submodule/Connector/docs/developer/custom_validation.md",sourceDirName:"submodule/Connector/docs/developer",slug:"/submodule/Connector/docs/developer/custom_validation",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/custom_validation",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/custom_validation.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"Building blocks",id:"building-blocks",level:2},{value:"Limitations and caveats",id:"limitations-and-caveats",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-validation-framework"},"Custom validation framework"),(0,a.kt)("p",null,"The validation framework hooks into the normal Jetty/Jersey request dispatch mechanism and is designed to allow users to\nintercept the request chain to perform additional validation tasks. In its current form it is intended for intercepting\nREST requests. Users can elect any validation framework they desire, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta.validation")," or\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-validator/"},"Apache Commons Validator"),", or they can implement one\nthemselves."),(0,a.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,a.kt)("p",null,"This feature is intended for use cases where the standard DTO validation, that ships with EDC's APIs is not sufficient.\nPlease check out the ",(0,a.kt)("a",{target:"_blank",href:n(16888).Z},"OpenAPI spec")," to find out more about the object schema."),(0,a.kt)("p",null,"EDC features various data types that do not have a strict schema but are ",(0,a.kt)("em",{parentName:"p"},"extensible"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"Asset"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"AssetDto"),",\nor a ",(0,a.kt)("inlineCode",{parentName:"p"},"DataRequest"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"DataRequestDto"),". This was done by design, to allow for maximum flexibility and openness. However,\nusers may still want to put a more rigid schema on top of those data types, for example a use case may require an\n",(0,a.kt)("inlineCode",{parentName:"p"},"Asset")," to always have a ",(0,a.kt)("inlineCode",{parentName:"p"},"owner")," property or may require a ",(0,a.kt)("inlineCode",{parentName:"p"},"contentType")," to be present. The standard EDC validation\nscheme has no way of enforcing that, so this is where ",(0,a.kt)("em",{parentName:"p"},"custom validation")," enters the playing field."),(0,a.kt)("h2",{id:"building-blocks"},"Building blocks"),(0,a.kt)("p",null,"There are two important components necessary for custom validation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"InterceptorFunction"),": a function that accepts the intercepted method's parameters as argument (as ",(0,a.kt)("inlineCode",{parentName:"li"},"Object[]"),"),\nand returns a ",(0,a.kt)("inlineCode",{parentName:"li"},"Result<Void>")," to indicate the validation success. It ",(0,a.kt)("strong",{parentName:"li"},"must not")," throw an exception, or dispatch to\nthe target resource is not guaranteed."),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidationFunctionRegistry"),": all ",(0,a.kt)("inlineCode",{parentName:"li"},"InterceptorFunctions")," must be registered there, using one of three registration\nmethods (see below).")),(0,a.kt)("p",null,"Custom validation works by supplying an ",(0,a.kt)("inlineCode",{parentName:"p"},"InterceptorFunction")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidationFunctionRegistry")," in one of the\nfollowing ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"bound to a resource-method: here, we register the ",(0,a.kt)("inlineCode",{parentName:"p"},"InterceptorFunction")," to any of a controller's methods. That means,\nwe need compile-time access to the controller class, because we use reflection to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'var method = YourController.class.getDeclaredMethods("theMethod", /*parameter types*/)\nvar yourFunction = objects -> Result.success(); // you validation logic goes here\nregistry.addFunction(method, yourFunction);\n')),(0,a.kt)("p",{parentName:"li"},"Consequently ",(0,a.kt)("inlineCode",{parentName:"p"},"yourFunction")," will get invoked before ",(0,a.kt)("inlineCode",{parentName:"p"},"YourController#theMethod")," is invoked by the request dispatcher.\nNote that there is currently no way to bind an ",(0,a.kt)("inlineCode",{parentName:"p"},"InterceptorFunction")," directly to an HTTP endpoint.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"bound to an argument type: the interceptor function gets bound to all resource methods that have a particular type in\ntheir signature:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"var yourFunction = objects -> Result.success(); // your validation logic goes here\nregistry.addFunction(YourObjectDto.class, yourFunction);\n")),(0,a.kt)("p",{parentName:"li"},"The above function would therefore get invoked in all controllers on the classpath, that have a ",(0,a.kt)("inlineCode",{parentName:"p"},"YourObjectDto"),"\nin their signature, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"public void createObject(YourObjectDto dto)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"public boolean deleteObject\n(YourObjectDto dto)")," would both get intercepted, even if they are defined in different controller classes.\n",(0,a.kt)("em",{parentName:"p"},"This is the recommended way in the situation described above - adding additional schema restrictions on extensible\ntypes"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"globally, for all resource methods: this is intended for interceptor functions that should get invoked on ",(0,a.kt)("em",{parentName:"p"},"all"),"\nresource methods. ",(0,a.kt)("em",{parentName:"p"},"This is generally not recommended and should only be used in very specific situations such as\nlogging")))),(0,a.kt)("p",null,"Please check\nout ",(0,a.kt)("a",{target:"_blank",href:n(3817).Z},"this test"),"\nfor a comprehensive example how validation can be enabled. All functions are registered during the extension's\ninitialization phase."),(0,a.kt)("h2",{id:"limitations-and-caveats"},"Limitations and caveats"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InterceptorFunction")," objects ",(0,a.kt)("strong",{parentName:"li"},"must not")," throw exceptions"),(0,a.kt)("li",{parentName:"ul"},"all function registration must happen during the ",(0,a.kt)("inlineCode",{parentName:"li"},"initialize")," phase of the extension lifecycle."),(0,a.kt)("li",{parentName:"ul"},"interceptor functions ",(0,a.kt)("strong",{parentName:"li"},"should not")," perform time-consuming tasks, such as invoking other backend systems, so as not\nto cause timeouts in the request chain"),(0,a.kt)("li",{parentName:"ul"},"for method-based interception compile-time access to the resource is required. This might not be suitable for a lot of\nsituations."),(0,a.kt)("li",{parentName:"ul"},"returning a ",(0,a.kt)("inlineCode",{parentName:"li"},"Result.failure(...)")," will result in an ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP 400 BAD REQUEST")," status code. This is the only supported\nstatus code at this time. Note that the failure message will be part of the HTTP response body."),(0,a.kt)("li",{parentName:"ul"},'binding methods directly to paths ("endpoints") is not supported.')))}p.isMDXComponent=!0},3817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/ValidationIntegrationTest-38f28b20bf36003bfef071fa726ce2a2.java"},16888:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/openapi-63b151f1999c7974ca2527f1c3988074.yaml"}}]);