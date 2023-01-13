"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[4544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={},r="Custom DTO validation on REST APIs",l={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/README",id:"submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/README",title:"Custom DTO validation on REST APIs",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation",slug:"/submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/README.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Approach",id:"approach",level:2},{value:"Implementation considerations",id:"implementation-considerations",level:2},{value:"User requirements",id:"user-requirements",level:3},{value:"User-facing SPI",id:"user-facing-spi",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-dto-validation-on-rest-apis"},"Custom DTO validation on REST APIs"),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"In addition to the default validation that is already in place for REST APIs, in particular their DTOs, we will\nimplement an extensible and easy way to provide custom validation functions."),(0,o.kt)("h2",{id:"rationale"},"Rationale"),(0,o.kt)("p",null,"As some of our APIs accept extensible type, i.e. types that don't have a rigid schema, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"AssetDto"),", users\nmay superimpose a custom schema on those types, thus requiring additional validation. For example, in some imaginary use\ncase there could be a business requirement, that every ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset")," must have a property called ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),". The standard\nvalidation we provide cannot consider that, so in that use case an additional validation is needed, that checks\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," property for nullity, etc."),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("p",null,"Jersey offers a way to register one or more ",(0,o.kt)("inlineCode",{parentName:"p"},"InvocationHandler")," objects that get called whenever a resource method is\ninvoked (i.e. a REST call happens). This can be done ",(0,o.kt)("em",{parentName:"p"},"per-method"),", so a different ",(0,o.kt)("inlineCode",{parentName:"p"},"InvocationHandler")," can be registered\nfor every REST endpoint."),(0,o.kt)("p",null,"Three different objects are needed for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"ResourceMethodInvocationHandlerProvider"),": registers the ",(0,o.kt)("inlineCode",{parentName:"li"},"InvocationHandler"),", either globally or per-method"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"InvocationHandler"),": gets called whenever the associated resource method is invoked. As this is a generic interface\nfrom the ",(0,o.kt)("inlineCode",{parentName:"li"},"java.lang.reflect")," package, extra care must be taken when interpreting the method arguments to avoid class\ncast exceptions etc."),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("inlineCode",{parentName:"li"},"AbstractBinder"),": needs to be registered directly into Jersey's ",(0,o.kt)("inlineCode",{parentName:"li"},"ResourceConfig"))),(0,o.kt)("h2",{id:"implementation-considerations"},"Implementation considerations"),(0,o.kt)("h3",{id:"user-requirements"},"User requirements"),(0,o.kt)("p",null,"As a user, who wants to add validation functionality, I want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"register a validation function (e.g. a lambda) globally. I do not want to think about which endpoint is affected."),(0,o.kt)("li",{parentName:"ul"},"register a validation function (e.g. a lambda) for a particular type. Whenever there is a resource method, that has a\nparticular type in its argument list, my validation function should get invoked."),(0,o.kt)("li",{parentName:"ul"},"register a validation function (e.g. a lambda) for a particular resource method. I want to specify\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"java.lang.reflect.Method")," explicitly"),(0,o.kt)("li",{parentName:"ul"},"supply my custom messages whenever a validation fails")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: using this mechanism it is not possible to register an ",(0,o.kt)("inlineCode",{parentName:"em"},"InvocationHandler")," directly for the endpoint path, e.\ng. ",(0,o.kt)("inlineCode",{parentName:"em"},"/api/v1/data/asset"))),(0,o.kt)("h3",{id:"user-facing-spi"},"User-facing SPI"),(0,o.kt)("p",null,"I propose adding an interface called ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomValidationRegistry")," that could look roughly like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface CustomValidationRegistry {\n    /**\n     * Registers a validation function for a particular type (e.g. a DTO). The validation function gets applied to \n     * all resource methods that have a T object in their signature \n     * @param type The class of the object for which to register the function\n     * @param interceptorFunction A function that evaluates the object and returns a Result\n     */\n    <T> void registerForType(Class<T> type, Function<T, Result> interceptorFunction);\n\n    /**\n     * Registers a validation function for all resource methods. Conditional evaluation must be done in the \n     * evaluation function itself\n     * @param interceptorFunction Receives the list of arguments of the resource method, returns a Result\n     */\n    void register(Function<Object[], Result> interceptorFunction);\n\n    /**\n     * Registers a validation function for a particular resource method (= Controller method). The validation \n     * function only gets applied to that particular method.\n     * @param method The {@link java.lang.reflect.Method} (of a controller) for which to register the function\n     * @param interceptorFunction Receives the list of arguments of the resource method, returns a Result\n     */\n    void registerForMethod(Method method, Function<Object[], Result> interceptorFunction);\n}\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptorFunction")," returns a failed ",(0,o.kt)("inlineCode",{parentName:"p"},"Result"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"InvocationHandler")," will throw an\n",(0,o.kt)("inlineCode",{parentName:"p"},"InvalidRequestException"),", resulting in an HTTP 400 error code. As a side note is important to wrap that exception in\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"InvocationTargetException"),", so that it gets picked up by the method dispatcher."),(0,o.kt)("p",null,"Users can then ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," this interface into their extension and register their validation functions. They are free to\nuse whatever validation mechanism the desire."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," for that registry would under the hood contain the glue code to perform the correct registrations with the\nJersey ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceConfig"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Restrictions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all validation functions must be registered ",(0,o.kt)("em",{parentName:"li"},"before")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"start()")," phase of the extension lifecycle"),(0,o.kt)("li",{parentName:"ul"},"all validation functions are considered immutable"),(0,o.kt)("li",{parentName:"ul"},"validation functions cannot throw an exception"),(0,o.kt)("li",{parentName:"ul"},"validation functions are evaluated ",(0,o.kt)("em",{parentName:"li"},"after")," the default bean validation.")))}u.isMDXComponent=!0}}]);