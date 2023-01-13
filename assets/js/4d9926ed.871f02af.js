"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[3245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),v=r,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},s="Events",o={unversionedId:"submodule/Connector/docs/developer/events",id:"submodule/Connector/docs/developer/events",title:"Events",description:"EDC provides an eventing system that permits to developers to write extensions that could react to events that are",source:"@site/docs/submodule/Connector/docs/developer/events.md",sourceDirName:"submodule/Connector/docs/developer",slug:"/submodule/Connector/docs/developer/events",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/events",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/events.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Subscribe to events",id:"subscribe-to-events",level:2},{value:"Emit custom events",id:"emit-custom-events",level:2},{value:"Serialization / Deserialization",id:"serialization--deserialization",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"EDC provides an eventing system that permits to developers to write extensions that could react to events that are\nemitted from the core of the EDC and also emit custom events."),(0,r.kt)("h2",{id:"subscribe-to-events"},"Subscribe to events"),(0,r.kt)("p",null,"The entry point for event listening is the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventRouter")," component, on which an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventSubscriber")," can be registered."),(0,r.kt)("p",null,"Actually, there are two ways to register an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventSubscriber"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"async"),": every event will be sent to the subscriber in an asynchronous way. Features:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fast, as the main thread won't be blocked during dispatchment. "),(0,r.kt)("li",{parentName:"ul"},"not-reliable, as an eventual subscriber dispatch failure won't get handled."),(0,r.kt)("li",{parentName:"ul"},"to be used for notifications and for send-and-forget event dispatchment."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sync"),": every event will be sent to the subscriber in a synchronous way. Features:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"slow, as the subscriber will block the main thread until the event is dispatched"),(0,r.kt)("li",{parentName:"ul"},"reliable, an eventual exception will be thrown to the caller, and it could make a transactional context fail"),(0,r.kt)("li",{parentName:"ul"},'to be used for event persistence and to satisfy the "at-least-one" rule.')))),(0,r.kt)("p",null,"Extension example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleEventSubscriptionExtension implements ServiceExtension {\n    @Inject\n    private EventRouter eventRouter;\n\n    @Override\n    public void initialize(ServiceExtensionContext context) {\n        eventRouter.register(new ExampleEventSubscriber()); // asynchronous dispatch\n        eventRouter.registerSync(new ExampleEventSubscriber()); // synchronous dispatch\n    }\n}\n")),(0,r.kt)("p",null,"Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventSubscriber")," subscription will receive all the events emitted from the EDC and react to them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleEventSubscriber implements EventSubscriber {\n    \n    public void on(Event event) {\n        // react to event    \n    }\n    \n}\n")),(0,r.kt)("p",null,'To filter events, the payload classes of the events can be used. There are 5 "Intermediate superclasses" (AssetEventPayload,\nContractDefinitionEventPayload, ContractNegotiationEventPayload, PolicyDefinitionEventPayload, TransferProcessEventPayload) of\nwhich one payload class inherits in each case. These intermediate superclasses inherit again from the class EventPayload. Thus,\nin addition to filtering on a specific event, such as TransferProcessCompleted, it is possible to react to a group of events\nthat generally have to do with Assets, ContractDefinition, ContractNegotiation, PolicyDefinition and TransferProcess. You can\nalso filter for the EventClass directly, like seen in the example for the event AssetCreated.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleEventSubscriber implements EventSubscriber {\n    \n    public void on(Event event) {\n        if (event instanceof AssetCreated) {\n            // react only to AssetCreated events\n        }\n        \n        if (event.getPayload() instanceof TransferProcessEventPayload) {\n            // react on Events related to TransferProcessEvents\n        }\n    }\n    \n}\n")),(0,r.kt)("h2",{id:"emit-custom-events"},"Emit custom events"),(0,r.kt)("p",null,"It's also possible to create and publish custom events on top of the EDC eventing system.\nTo define the event, extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," class, if you need to attach data to an event you have to extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event.Payload")," class,\nand pass the class as ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," class parameter."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rule of thumb: events should be named at past tense, as they describe something that's already happened"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class SomethingHappened extends Event {\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"private SomethingHappened() {\n}\n\npublic static class Builder extends Event.Builder<SomethingHappened, Payload, Builder> {\n\n    public static Builder newInstance() {\n        return new Builder();\n    }\n\n    private Builder() {\n        super(new SomethingHappened(), new Payload());\n    }\n\n    public Builder description(String description) {\n        event.payload.description = description;\n        return this;\n    }\n\n    protected void validate() {\n        Objects.requireNonNull(event.payload.description);\n        // this validation helps to catch up missing properties in the test phase,\n        // but isn't supposed to fail in a production environment, so it's not mandatory.\n    }\n}\n\npublic static class Payload extends EventPayload {\n    private String description;\n\n    public String getDescription() {\n        return assetId;\n    }\n}\n")),(0,r.kt)("p",null,"}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'All the data regarding an event should be contained in the `Payload` class.\n\nAs you may notice, we use the builder pattern to construct objects, as stated in\nthe [Architecture Principles document](/edc-docs/docs/submodule/Connector/docs/developer/architecture/coding-principles).\nThe extended builder will inherit all the builder method from the superclass.\nThe `validate` method is the place where validations on the payload can be added.\n\nOnce the event is created, it can be published it through the `EventRouter` component:\n```java\npublic class ExampleBusinessLogic {\n    public void doSomething() {\n        // some business logic that does something\n        var event = SomethingHappened.Builder.newInstance()\n                .description("something interesting happened")\n                .at(clock.millis())\n                .build();\n        \n        eventRouter.publish(event);\n    }    \n}\n')),(0,r.kt)("p",null,"Please note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"at")," field is a timestamp that every event has, and it's mandatory\n(please use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Clock")," service to get the current timestamp)."),(0,r.kt)("h2",{id:"serialization--deserialization"},"Serialization / Deserialization"),(0,r.kt)("p",null,"By default, events must be serializable, because of this, every class that extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," will be serializable to json by default\n(through the ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeManager")," service).\nThe json will contain an additional field called ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," that describes the name of the event class. For example, a serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"SomethingHappened"),"\nevent will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "SomethingHappened",\n  "at": 1654764642188,\n  "payload": {\n    "description": "something interesting happened"  \n  }\n}\n')),(0,r.kt)("p",null,"To make such an event deserializable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeManager"),", is necessary to register the type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"typeManager.registerTypes(new NamedType(SomethingHappened.class, SomethingHappened.class.getSimpleName()));\n")),(0,r.kt)("p",null,"doing so, the event can be deserialized using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," superclass as type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var deserialized = typeManager.readValue(json, Event.class);\n// deserialized will have the `SomethingHappened` type at runtime\n")),(0,r.kt)("p",null,"(please take a look at the ",(0,r.kt)("a",{target:"_blank",href:n(73794).Z},(0,r.kt)("code",null,"EventTest"))," class for a serialization/deserialization example)"))}d.isMDXComponent=!0},73794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/EventTest-a4fd595cab7964c415e20709ae6fddcc.java"}}]);