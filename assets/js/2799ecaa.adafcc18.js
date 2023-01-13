"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[6348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),v=a,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Event framework",s={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/README",id:"submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/README",title:"Event framework",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework",slug:"/submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Protocol level",id:"protocol-level",level:4},{value:"Instance level",id:"instance-level",level:4},{value:"Main differences between Events and Callbacks",id:"main-differences-between-events-and-callbacks",level:4},{value:"Approach",id:"approach",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-framework"},"Event framework"),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"This decision record covers concepts and semantics about asynchronous communication in the EDC.\nThis is needed to define what's an ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," and how this concept should be introduced into EDC."),(0,a.kt)("h2",{id:"rationale"},"Rationale"),(0,a.kt)("p",null,"There are two asynchronous communication levels in EDC:"),(0,a.kt)("h4",{id:"protocol-level"},"Protocol level"),(0,a.kt)("p",null,"Every call from a connector to another regards the communication protocol, currently the only protocol implemented in EDC is IDS.\nA protocol call could have an asynchronous response, and that's called ",(0,a.kt)("strong",{parentName:"p"},"callback"),"."),(0,a.kt)("h4",{id:"instance-level"},"Instance level"),(0,a.kt)("p",null,"The EDC should have the possibility to communicate with third party systems (known as subscribers) notifying them about what's happening in the connector. This communication needs to be made through ",(0,a.kt)("strong",{parentName:"p"},"events"),".\nAn event is a representation of something that happened in the past, and has very specific characteristics, like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'it\'s named with a short sentence in the past tense (e.g. "contract negotiation confirmed")'),(0,a.kt)("li",{parentName:"ul"},"it's serializable"),(0,a.kt)("li",{parentName:"ul"},"it contains the issue timestamp"),(0,a.kt)("li",{parentName:"ul"},"it describes which layer emitted the event: domain, system, security, and so on...")),(0,a.kt)("h4",{id:"main-differences-between-events-and-callbacks"},"Main differences between Events and Callbacks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Callbacks are always correlated with a request, events are not"),(0,a.kt)("li",{parentName:"ul"},"Callbacks are unicast, events are multicast"),(0,a.kt)("li",{parentName:"ul"},"Callbacks are at the protocol level, events can be at a different level"),(0,a.kt)("li",{parentName:"ul"},"Callbacks are critical for the correct operation of a connector, where events are optional")),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("p",null,"An event is generated after a specific state change happens.\nIn the EDC will be handled through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable")," pattern:"),(0,a.kt)("p",null,"For every entity type, or for other layers a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable")," implementation with a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," should exist.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," interface should have a method for every change that could happen on that entity. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class TransferProcessEventObservableImpl implements Observable<TransferProcessEventListener> {\n    ...\n}\n\npublic interface TransferProcessEventListener {\n\n    void created(TransferProcess process);\n\n    void provisioned(TransferProcess process);\n\n    ...\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Event")," will be the superclass that represents all the events, and every event class will extend it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class Event {\n    private final long createdAt;\n\n    ...\n}\n")),(0,a.kt)("p",null,"Event example implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class TransferProcessCreatedEvent extends Event {\n    private String id;\n    ...\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," would have a single implementation that will take care of generate the event class and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventRouter")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class TransferProcessEventListenerImpl implements TransferProcessEventListener {\n\n    private final EventRouter eventRouter;\n\n    public void created(TransferProcess process) {\n        var event = TransferProcessCreatedEvent.Builder().newInstance()\n            .id(process.getId())\n            ...\n            .build();\n\n        eventRouter.publish(event);\n    }\n\n    ...\n\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventRouter")," implementation will be a component that will permit the registration of ",(0,a.kt)("inlineCode",{parentName:"p"},"EventSubscriber"),"s and that will dispatch every event to every one of them, asynchronously:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface EventSubscriber {\n    void on(Event event);\n}\n\npublic class EventRouterImpl implements EventRouter {\n\n    private List<EventSubscriber> subscribers;\n\n    public void publish(Event event) {\n        subscribers.forEach(subscriber -> {\n            CompletableFuture.runAsync(() -> subscriber.on(event));\n        })\n    }\n}\n")),(0,a.kt)("p",null,"At this point, at the extension level, a ",(0,a.kt)("inlineCode",{parentName:"p"},"EventListener")," can be registered to the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventRouter")," and it will be able to get all the EDC events, filter them, publish them to some external event infrastructure."),(0,a.kt)("p",null,'Note that this implementation does not respect the "at-least-one" rule, as something can happen between event creation and its dispatch.\nTo achieve such a behavior events should be persisted. With this implementation we would have events that will be delivered "at most once", they\nshould not be used to trigger important business logic but only to give insights on what\'s happening in the EDC.'))}d.isMDXComponent=!0}}]);