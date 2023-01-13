"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[9466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={},o="Type Manager Support for Serialization Configuration",l={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/README",id:"submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/README",title:"Type Manager Support for Serialization Configuration",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager",slug:"/submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/README.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Approach",id:"approach",level:2},{value:"Registering a serializer",id:"registering-a-serializer",level:3},{value:"Writing a Decorating Serializer",id:"writing-a-decorating-serializer",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"type-manager-support-for-serialization-configuration"},"Type Manager Support for Serialization Configuration"),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"As the EDC should integrate into several deployments and (possibly domain-specific) use cases, the\nEDC needs to support the configuration of multiple serialization contexts. This targets the serialization\nformats of Java objects that are converted to/from, e.g., JSON or JSON-LD. The enhanced capabilities\nshould be provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeManager"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A default context will define base configuration and be inherited by all other contexts. The existing\n",(0,i.kt)("inlineCode",{parentName:"p"},"TypeManager.getObjectMapper()")," will return the default context.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Serialization contexts will be created by invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeManager.getObjectMapper(String)"),". If a context\nis not already present, one will be created; otherwise the existing one will be returned. The returned\n",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectMapper")," can have configuration applied to it during runtime initialization.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeManager")," will track created contexts and ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectMapper")," instances. This will allow type\nregistrations with the default context to be propagated to other ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectMappers")," after they have been\ncreated."))),(0,i.kt)("h2",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"The EDC runtime requires the ability to support the configuration of multiple serialization contexts. For\nexample, provided interfaces may require different serialization characteristics. Naming, some connected\nsystems require JSON as input to further processing, whereas communication within an IDS ecosystem\nexpect a JSON-LD string with a specific date-time-format. "),(0,i.kt)("p",null,"Being able to adjust or replace (de-)serialization of objects and vice versa for specific\nextensions or added properties (e.g. required by a domain-specific extension of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Asset"),"), the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeManager"),"\nallows to register customized processors that extend or overwrite default functionalities."),(0,i.kt)("p",null,"This feature targets the adaptability to existing interfaces and systems and the interoperability\nrequirements within different data spaces. The goal is not to enable customization on the API level, such that e.g. each\nhttp endpoint provides a different output format."),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("h3",{id:"registering-a-serializer"},"Registering a serializer"),(0,i.kt)("p",null,"Serializers can be registered as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    typeManager.registerSerializer("foo", Bar.class, new JsonSerializer<>() {\n        @Override\n        public void serialize(Bar value, JsonGenerator generator, SerializerProvider serializers) throws IOException {\n            // handle serialization\n        }\n    });\n\n    // ...\n\n    var fooMapper = manager.getMapper("foo");\n    var serialized = fooMapper.writeValueAsString(new Bar());\n')),(0,i.kt)("p",null,"In the above example, a custom serializer is registered for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar")," type in the ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," context."),(0,i.kt)("h3",{id:"writing-a-decorating-serializer"},"Writing a Decorating Serializer"),(0,i.kt)("p",null,"A common use case for serialization contexts will be to decorate a serialized type with metadata.\nThe following is an example of a serializer that can be registered with the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeManager")," to add\n",(0,i.kt)("inlineCode",{parentName:"p"},"@context")," information for specific types. Please note that this example is user code and would\n",(0,i.kt)("strong",{parentName:"p"},"not")," be provided by the EDC:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    public class DecoratingSerializer<T> extends JsonSerializer<T> {\n        private Class<T> type;\n\n        public DecoratingSerializer(Class<T> type) {\n\n            this.type = type;\n        }\n\n        public void serialize(Object value, JsonGenerator generator, SerializerProvider provider) throws IOException {\n            generator.writeStartObject();\n            var javaType = provider.constructType(type);\n            var beanDescription = provider.getConfig().introspect(javaType);\n            var staticTyping = provider.isEnabled(MapperFeature.USE_STATIC_TYPING);\n            var serializer = BeanSerializerFactory.instance.findBeanOrAddOnSerializer(provider, javaType, beanDescription, staticTyping);\n            serializer.unwrappingSerializer(null).serialize(value, generator, provider);\n            generator.writeObjectField("@context", "some data");\n            generator.writeEndObject();\n        }\n    }\n')),(0,i.kt)("p",null,"The serializer can be registered for types as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    manager.registerSerializer("foo", Bar.class, new DecoratingSerializer<>(Bar.class));\n    manager.registerSerializer("foo", Baz.class, new DecoratingSerializer<>(Baz.class));\n')))}d.isMDXComponent=!0}}]);