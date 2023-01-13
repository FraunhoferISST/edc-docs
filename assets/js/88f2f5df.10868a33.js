"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[4277],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return t?i.createElement(h,r(r({ref:n},d),{},{components:t})):i.createElement(h,r({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const a={},r="Dependency resolution in the EDC",l={unversionedId:"submodule/Connector/docs/developer/dependency_resolution",id:"submodule/Connector/docs/developer/dependency_resolution",title:"Dependency resolution in the EDC",description:"The code base of the Eclipse Dataspace Connector is architected in away that allows for easily extending and swapping",source:"@site/docs/submodule/Connector/docs/developer/dependency_resolution.md",sourceDirName:"submodule/Connector/docs/developer",slug:"/submodule/Connector/docs/developer/dependency_resolution",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/dependency_resolution",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/dependency_resolution.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Registering a service implementation",id:"registering-a-service-implementation",level:2},{value:"Option 1: use <code>@Provider</code> methods (recommended)",id:"option-1-use-provider-methods-recommended",level:3},{value:"Provide &quot;defaults&quot;",id:"provide-defaults",level:4},{value:"Option 2: register manually",id:"option-2-register-manually",level:3},{value:"Injecting a service",id:"injecting-a-service",level:2},{value:"Option 1: use <code>@Inject</code> to declare dependencies (recommended)",id:"option-1-use-inject-to-declare-dependencies-recommended",level:3},{value:"Option 2: use <code>@Requires</code> to declare dependencies",id:"option-2-use-requires-to-declare-dependencies",level:3},{value:"Extension initialization sequence",id:"extension-initialization-sequence",level:2},{value:"Tests for classes using injection",id:"tests-for-classes-using-injection",level:2},{value:"Limitations and differences to fully-fledged IoC containers",id:"limitations-and-differences-to-fully-fledged-ioc-containers",level:2},{value:"Only available in <code>ServiceExtensions</code>",id:"only-available-in-serviceextensions",level:4},{value:"No multiple registrations",id:"no-multiple-registrations",level:4},{value:"No collection-based injection",id:"no-collection-based-injection",level:4},{value:"Only field injection",id:"only-field-injection",level:4},{value:"No named dependencies",id:"no-named-dependencies",level:4},{value:"Direct inheritors/implementors only",id:"direct-inheritorsimplementors-only",level:4},{value:"Cyclic dependencies",id:"cyclic-dependencies",level:4},{value:"No generic dependencies",id:"no-generic-dependencies",level:4}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dependency-resolution-in-the-edc"},"Dependency resolution in the EDC"),(0,o.kt)("p",null,"The code base of the Eclipse Dataspace Connector is architected in away that allows for easily extending and swapping\nthe core functionality using certain plug-points called ",(0,o.kt)("em",{parentName:"p"},"extensions"),". One example would be to swap out an in-memory\nimplementation for a datastore for one backed by an actual database. In order to achieve that there are several key\ncomponents:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a service interface, typically located in an SPI module"),(0,o.kt)("li",{parentName:"ul"},"a module providing the implementation, typically located in the ",(0,o.kt)("inlineCode",{parentName:"li"},"extensions")," directory"),(0,o.kt)("li",{parentName:"ul"},"the service registry, i.e. the ",(0,o.kt)("inlineCode",{parentName:"li"},"ServiceExtensionContext"),'. Since it is not quite an IoC container, we\'ll henceforth\nrefer to it as the "context".'),(0,o.kt)("li",{parentName:"ul"},"a hook point into the loading sequence: an extension that instantiates and registers the implementation class with the\ncontext")),(0,o.kt)("h2",{id:"registering-a-service-implementation"},"Registering a service implementation"),(0,o.kt)("p",null,"As a general rule the module that provides the implementation also should register it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtensionContext"),"\n. This is done in an accompanying service extension. For example, providing a CosmosDB based implementation for\na ",(0,o.kt)("inlineCode",{parentName:"p"},"FooStore")," (stores ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo")," objects) would require the following classes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"FooStore.java")," interface, located in SPI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface FooService {\n    void store(Foo foo);\n}   \n"))),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"CosmosFooStore.java")," class implementing the interface, located in ",(0,o.kt)("inlineCode",{parentName:"li"},":extensions:azure:cosmos:foo-store-cosmos"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class CosmosFooStore implements FooStore {\n    @Override\n    void store(Foo foo){\n        // ...\n    }    \n}\n"))),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"CosmosFooStoreExtension.java")," located also in ",(0,o.kt)("inlineCode",{parentName:"li"},":extensions:azure:cosmos:foo-store-cosmos"),". Must be accompanied by\na ",(0,o.kt)("em",{parentName:"li"},'"provider-configuration file"')," as required by\nthe ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/ServiceLoader.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ServiceLoader")," documentation"),". Code\nexamples will follow below.")),(0,o.kt)("h3",{id:"option-1-use-provider-methods-recommended"},"Option 1: use ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Provider")," methods (recommended)"),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtension")," may declare methods that are annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provider"),", which tells the dependency resolution\nmechanism, that this method contributes a dependency into the context. This is very similar to other DI containers, e.g.\nSpring's ",(0,o.kt)("inlineCode",{parentName:"p"},"@Bean"),"\nannotation. It looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class CosmosFooStoreExtension implements ServiceExtension {\n\n    @Override\n    public void initialize(ServiceExtensionContext context) {\n        // ...\n    }\n\n    //Example 1: no args\n    @Provider\n    public SomeService provideSomeService() {\n        return new SomeServiceImpl();\n    }\n\n    //Example 2: using context\n    @Provider\n    public FooStore provideFooStore(ServiceExtensionContext context) {\n        var setting = context.getSetting("...", null);\n        return new CosmosFooStore(setting);\n    }\n}\n')),(0,o.kt)("p",null,"As the previous code snipped shows, provider methods may have no args, or a single argument, which is\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtensionContext"),". There are a few other restrictions too. Violating these will raise an exception. Provider\nmethods must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"be public"),(0,o.kt)("li",{parentName:"ul"},"return a value (",(0,o.kt)("inlineCode",{parentName:"li"},"void")," is not allowed)"),(0,o.kt)("li",{parentName:"ul"},"either have no arguments, or a single ",(0,o.kt)("inlineCode",{parentName:"li"},"ServiceExtensionContext"),".")),(0,o.kt)("p",null,"Having a provider method is equivalent to invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"context.registerService(SomeService, new SomeServiceImpl())"),". Thus,\nthe return type of the method defines the service ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),", whatever is returned by the provider method determines the\nimplementation of the service."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Caution"),": there is a slight difference between declaring ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provider")," methods and\ncalling ",(0,o.kt)("inlineCode",{parentName:"p"},"service.registerService(...)")," with respect to sequence: the DI loader mechanism ",(0,o.kt)("em",{parentName:"p"},"first"),"\ninvokes ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtension#initialize()"),", and\n",(0,o.kt)("em",{parentName:"p"},"then")," invokes all provider methods. In most situations this difference is negligible, but there could be situations,\nwhere this matters."),(0,o.kt)("h4",{id:"provide-defaults"},'Provide "defaults"'),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provider")," methods really come into their own is when providing default implementations. This means we can have a\nfallback implementation. For example, going back to our ",(0,o.kt)("inlineCode",{parentName:"p"},"FooStore")," example, there could be an extension that provides a\ndefault (=in-mem)\nimplementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class DefaultsExtension implements ServiceExtension {\n\n    @Override\n    public void initialize(ServiceExtensionContext context) {\n        // ...\n    }\n\n    @Provider(isDefault = true)\n    public FooStore provideDefaultFooStore() {\n        return new InMemoryFooStore();\n    }\n}\n")),(0,o.kt)("p",null,"Provider methods configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"isDefault=true")," are only invoked, if the respective service (here: ",(0,o.kt)("inlineCode",{parentName:"p"},"FooStore"),") is not\nprovided by any other extension."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default provider methods are a tricky topic, please be sure to thoroughly read the additional documentation about\nthem ",(0,o.kt)("a",{parentName:"p",href:"/edc-docs/docs/submodule/Connector/docs/developer/default_provider_methods"},"here"),"!")),(0,o.kt)("h3",{id:"option-2-register-manually"},"Option 2: register manually"),(0,o.kt)("p",null,"Of course, it is also possible to manually register services by invoking the respective method on\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtensionContext")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n@Provides(FooStore.class/*, possibly others*/)\npublic class CosmosFooStoreExtension implements ServiceExtension {\n\n    @Override\n    public void initialize(ServiceExtensionContext context) {\n        var setting = context.getSetting("...", null);\n        var store = new CosmosFooStore(setting);\n        context.registerService(FooStore.class, store);\n    }\n}\n')),(0,o.kt)("p",null,"There are three important things to mention:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the call to ",(0,o.kt)("inlineCode",{parentName:"li"},"context#registerService")," makes the object available in the context. From this point on other extensions\ncan inject a ",(0,o.kt)("inlineCode",{parentName:"li"},"FooStore")," (and in doing so will receive a ",(0,o.kt)("inlineCode",{parentName:"li"},"CosmosFooStore"),")."),(0,o.kt)("li",{parentName:"ol"},"declaring the exposed interface in the ",(0,o.kt)("inlineCode",{parentName:"li"},"@Provides()")," annotation is required, as it helps the extension loader define\nthe order in which it needs to initialize extensions"),(0,o.kt)("li",{parentName:"ol"},"service registrations ",(0,o.kt)("strong",{parentName:"li"},"must")," be done in the ",(0,o.kt)("inlineCode",{parentName:"li"},"initialize()")," method.")),(0,o.kt)("h2",{id:"injecting-a-service"},"Injecting a service"),(0,o.kt)("p",null,"Services should only be referenced by the interface they implement. This will keep dependencies clean and maintain\nextensibility and modularity. Say we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"FooMaintenanceService")," that receives ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo")," objects over an arbitrary\nnetwork channel and stores them."),(0,o.kt)("h3",{id:"option-1-use-inject-to-declare-dependencies-recommended"},"Option 1: use ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Inject")," to declare dependencies (recommended)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class FooMaintenanceService {\n    private final FooStore fooStore;\n\n    public FooMaintenanceService(FooStore fooStore) {\n        this.fooStore = fooStore;\n    }\n}\n")),(0,o.kt)("p",null,"Note that the example uses what we call ",(0,o.kt)("em",{parentName:"p"},"constructor injection")," (even though nothing is actually ",(0,o.kt)("em",{parentName:"p"},"injected"),"), because\nthat is needed for object construction, and it increases testability. Also, those types of class fields should be\ndeclared ",(0,o.kt)("inlineCode",{parentName:"p"},"final")," to avoid programming errors."),(0,o.kt)("p",null,"In contrast to conventional DI frameworks the ",(0,o.kt)("inlineCode",{parentName:"p"},"fooStore")," dependency won't get auto-injected - rather, there has to be\nanother ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtension")," that has a reference to the ",(0,o.kt)("inlineCode",{parentName:"p"},"FooStore")," and that constructs the ",(0,o.kt)("inlineCode",{parentName:"p"},"FooMaintenanceService"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class FooMaintenanceExtension implements ServiceExtension {\n    @Inject\n    private FooStore fooStore;\n\n    @Override\n    public void initialize(ServiceExtensionContext context) {\n        var service = new FooMaintenanceService(fooStore); //use the injected field\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation on the ",(0,o.kt)("inlineCode",{parentName:"p"},"fooStore")," field tells the extension loading mechanism that ",(0,o.kt)("inlineCode",{parentName:"p"},"FooMaintenanceExtension"),"\ndepends on a ",(0,o.kt)("inlineCode",{parentName:"p"},"FooService")," and because of that, any provider of a ",(0,o.kt)("inlineCode",{parentName:"p"},"FooStore")," must be initialized ",(0,o.kt)("em",{parentName:"p"},"before"),"\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"FooMaintenanceExtension"),". The fact that ",(0,o.kt)("inlineCode",{parentName:"p"},"CosmosFooStoreExtension")," provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"FooStore")," is declared using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"@Provides")," annotation."),(0,o.kt)("h3",{id:"option-2-use-requires-to-declare-dependencies"},"Option 2: use ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Requires")," to declare dependencies"),(0,o.kt)("p",null,"In cases where defining a field seems unwieldy or is simply not desirable, we provide another way to dynamically resolve\nservice from the context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n@Requires({ FooService.class, /*maybe others*/ })\npublic class FooMaintenanceExtension implements ServiceExtension {\n\n    @Override\n    public void initialize(ServiceExtensionContext context) {\n        var fooStore = context.getService(FooStore.class);\n        var service = new FooMaintenanceService(fooStore); //use the resolved object\n    }\n}\n")),(0,o.kt)("p",null,"The important issue to mention is that ",(0,o.kt)("inlineCode",{parentName:"p"},"@Requires")," is absolutely necessary to inform the service loader about the\ndependency. Failing to add it this may potentially result in exceptions, and in further consequence, in\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"EdcInjectionException"),"."),(0,o.kt)("p",null,"Option 1 and 2 are almost semantically equivalent, with the small exception of optional dependencies:\nwhile ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject(required=false)")," allows for nullable dependencies, ",(0,o.kt)("inlineCode",{parentName:"p"},"@Requires")," has no such option and the service\ndependency must be resolved explicitly using a boolean parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"context.getService(FooStore.class, true)"),"."),(0,o.kt)("h2",{id:"extension-initialization-sequence"},"Extension initialization sequence"),(0,o.kt)("p",null,"The extension loading mechanism uses a two-pass procedure to resolve dependencies. First, all implementors\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtension")," are instantiated using their public default constructor, put in a list and sorted using a\ntopological sort algorithm based on their dependency graph. Cyclic dependencies would be reported in this stage."),(0,o.kt)("p",null,"Second, the extension is initialized by setting all fields annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," and by calling its ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize()"),"\nmethod. This implies that every extension can assume that by the time its ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize()")," method executes, all its\ndependencies are already instantiated and registered, because the extension(s) providing them were ordered at previous\npositions in the list, and thus have already been initialized."),(0,o.kt)("h2",{id:"tests-for-classes-using-injection"},"Tests for classes using injection"),(0,o.kt)("p",null,"To test classes using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation, use the appropriate JUnit extension:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If only basic dependency injection is needed (unit testing), use the ",(0,o.kt)("inlineCode",{parentName:"li"},"DependencyInjectionExtension"),"."),(0,o.kt)("li",{parentName:"ul"},"If the full EDC runtime should be run (integration testing), use the ",(0,o.kt)("inlineCode",{parentName:"li"},"EdcExtension"),".")),(0,o.kt)("h2",{id:"limitations-and-differences-to-fully-fledged-ioc-containers"},"Limitations and differences to fully-fledged IoC containers"),(0,o.kt)("h4",{id:"only-available-in-serviceextensions"},"Only available in ",(0,o.kt)("inlineCode",{parentName:"h4"},"ServiceExtensions")),(0,o.kt)("p",null,"Services can only be injected into ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceExtension")," objects at this time as they are the main hook points for plugins,\nand they have a clearly defined interface. All subsequent object creation must be done manually using conventional\nmechanisms like constructors or builders."),(0,o.kt)("h4",{id:"no-multiple-registrations"},"No multiple registrations"),(0,o.kt)("p",null,"Registering two implementations for an interface will result in the first registration being overwritten by the second\nregistration. If both providers have the same topological ordering it is undefined whichever comes first. A warning is\nposted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Monitor"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"It was a conscientious architectural decision to forego multiple service registrations for the sake of simplicity and\nclean design. Patterns like composites or delegators exist for those rare cases where having multiple implementors of\nthe same interface is indeed needed. Those should be used sparingly and not without a strong reason.")),(0,o.kt)("h4",{id:"no-collection-based-injection"},"No collection-based injection"),(0,o.kt)("p",null,"Because there can be only ever one implementation for a service, it is not possible to inject a collection of\nimplementors as it would be in other DI frameworks."),(0,o.kt)("h4",{id:"only-field-injection"},"Only field injection"),(0,o.kt)("p",null,"At the moment the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," annotation can only target fields, meaning, that we cannot perform constructor or setter\ninjection with it, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"public SomeExtension(@Inject SomeService someService){ ... }")," would not be possible."),(0,o.kt)("h4",{id:"no-named-dependencies"},"No named dependencies"),(0,o.kt)("p",null,"Dependencies cannot be decorated with an identifier, which would technically allow for multiple service registrations (\nusing different names). Technically this is linked to the limitation of single service registrations."),(0,o.kt)("h4",{id:"direct-inheritorsimplementors-only"},"Direct inheritors/implementors only"),(0,o.kt)("p",null,"This is not due to a limitation of the dependency injection mechanism, but rather due to the way how the context\nmaintains service registrations: it simply maintains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," containing interface class and implementation type."),(0,o.kt)("h4",{id:"cyclic-dependencies"},"Cyclic dependencies"),(0,o.kt)("p",null,"Cyclic dependencies are detected by the ",(0,o.kt)("inlineCode",{parentName:"p"},"TopologicalSort")," algorithm, but the error reporting is a bit limited."),(0,o.kt)("h4",{id:"no-generic-dependencies"},"No generic dependencies"),(0,o.kt)("p",null,"It's not possible to have dependencies with a type parameter."))}p.isMDXComponent=!0}}]);