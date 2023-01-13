"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[189],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(87462),o=(t(67294),t(3905));const r={},a="Policy Engine",c={unversionedId:"submodule/Connector/docs/developer/policy-engine",id:"submodule/Connector/docs/developer/policy-engine",title:"Policy Engine",description:"Register policy functions",source:"@site/docs/submodule/Connector/docs/developer/policy-engine.md",sourceDirName:"submodule/Connector/docs/developer",slug:"/submodule/Connector/docs/developer/policy-engine",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/policy-engine",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/policy-engine.md",tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Register policy functions",id:"register-policy-functions",level:2},{value:"Step 1: Create an extension",id:"step-1-create-an-extension",level:3},{value:"Step 2: Implement a <code>ServiceExtension</code>",id:"step-2-implement-a-serviceextension",level:3},{value:"Step 3: Implement an <code>AtomicConstraintFunction</code>",id:"step-3-implement-an-atomicconstraintfunction",level:3},{value:"Absolute Spatial Position Constraint Function",id:"absolute-spatial-position-constraint-function",level:4},{value:"Partner Level Constraint Function",id:"partner-level-constraint-function",level:4},{value:"Policy scopes",id:"policy-scopes",level:3},{value:"Cataloging scope: <code>contract.cataloging</code>",id:"cataloging-scope-contractcataloging",level:4},{value:"Negotiation scope: <code>contract.negotiation</code>",id:"negotiation-scope-contractnegotiation",level:4},{value:"Manifest verification scope: <code>provision.manifest.verify</code>",id:"manifest-verification-scope-provisionmanifestverify",level:4}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policy-engine"},"Policy Engine"),(0,o.kt)("h2",{id:"register-policy-functions"},"Register policy functions"),(0,o.kt)("p",null,"The following will document how to register a constraint function to the policy engine."),(0,o.kt)("h3",{id:"step-1-create-an-extension"},"Step 1: Create an extension"),(0,o.kt)("p",null,"As an example, we create the module ",(0,o.kt)("inlineCode",{parentName:"p"},":extensions:policy:ids-policy"),". "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'val infoModelVersion: String by project\nval rsApi: String by project\n\nplugins {\n    `java-library`\n}\n\ndependencies {\n    api(project(":spi"))\n    implementation(project(":data-protocols:ids:ids-spi"))\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"IdsPolicyExtension")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services")," directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"org.eclipse.edc.protocol.ids.policy.IdsPolicyExtension\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ensure that the extension will be loaded, add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.gradle.kts")," at the root of the project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'include(":extensions:policy:ids-policy")\n')))),(0,o.kt)("h3",{id:"step-2-implement-a-serviceextension"},"Step 2: Implement a ",(0,o.kt)("inlineCode",{parentName:"h3"},"ServiceExtension")),(0,o.kt)("p",null,"The new policy extension will provide a service extension class and two constraint functions. In\n",(0,o.kt)("inlineCode",{parentName:"p"},"IdsPolicyExtension"),", first, the scope ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL_SCOPES")," is bound to the rule type ",(0,o.kt)("inlineCode",{parentName:"p"},"USE"),". Next, both policy\nfunctions are registered to the policy engine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class IdsPolicyExtension implements ServiceExtension {\n\n    private static final String ABS_SPATIAL_POSITION = "ids:absoluteSpatialPosition";\n    private static final String PARTNER_LEVEL = "ids:partnerLevel";\n\n    @Inject\n    private RuleBindingRegistry ruleBindingRegistry;\n\n    @Inject\n    private PolicyEngine policyEngine;\n\n    @Override\n    public String name() {\n        return "IDS Policy";\n    }\n\n    @Override\n    public void initialize(ServiceExtensionContext context) {\n        ruleBindingRegistry.bind(USE, ALL_SCOPES);\n\n        policyEngine.registerFunction(ALL_SCOPES, Permission.class, ABS_SPATIAL_POSITION, new AbsSpatialPositionConstraintFunction());\n        policyEngine.registerFunction(ALL_SCOPES, Permission.class, PARTNER_LEVEL, new PartnerLevelConstraintFunction());\n    }\n}\n')),(0,o.kt)("p",null,"In this example, the functions are registered for all policy scopes, meaning they will be used for every policy\nevaluation. Details on different policy scopes can be found ",(0,o.kt)("a",{parentName:"p",href:"#policy-scopes"},"here"),"."),(0,o.kt)("h3",{id:"step-3-implement-an-atomicconstraintfunction"},"Step 3: Implement an ",(0,o.kt)("inlineCode",{parentName:"h3"},"AtomicConstraintFunction")),(0,o.kt)("h4",{id:"absolute-spatial-position-constraint-function"},"Absolute Spatial Position Constraint Function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class AbsSpatialPositionConstraintFunction implements AtomicConstraintFunction<Permission> {\n    \n    @Override\n    public boolean evaluate(Operator operator, Object rightValue, Permission rule, PolicyContext context) {\n        var region = context.getParticipantAgent().getClaims().get("region");\n        switch (operator) {\n            case EQ:\n                return Objects.equals(region, rightValue);\n            case NEQ:\n                return !Objects.equals(region, rightValue);\n            case IN:\n                return ((Collection<?>) rightValue).contains(region);\n            default:\n                return false;\n        }\n    }\n}\n')),(0,o.kt)("h4",{id:"partner-level-constraint-function"},"Partner Level Constraint Function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class PartnerLevelConstraintFunction implements AtomicConstraintFunction<Permission> {\n    \n    @Override\n    public boolean evaluate(Operator operator, Object rightValue, Permission rule, PolicyContext context) {\n        String partnerLevel = context.getParticipantAgent().getClaims().get("partnerLevel");\n        switch (operator) {\n            case EQ:\n                return Objects.equals(partnerLevel, rightValue);\n            case NEQ:\n                return !Objects.equals(partnerLevel, rightValue);\n            case IN:\n                return ((Collection<?>) rightValue).contains(partnerLevel);\n            default:\n                return false;\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"policy-scopes"},"Policy scopes"),(0,o.kt)("p",null,"By binding a function to a specific scope instead of all scopes, the function will only be included in evaluations for\nthat scope. Currently, the EDC core provides 3 different policy scopes, which are explained in the following."),(0,o.kt)("h4",{id:"cataloging-scope-contractcataloging"},"Cataloging scope: ",(0,o.kt)("inlineCode",{parentName:"h4"},"contract.cataloging")),(0,o.kt)("p",null,"This scope is used when contract offers are generated from contract definitions. Here, each contract definition's access\npolicy is evaluated to decide which contract definitions may be used to generate offers for the requesting agent."),(0,o.kt)("h4",{id:"negotiation-scope-contractnegotiation"},"Negotiation scope: ",(0,o.kt)("inlineCode",{parentName:"h4"},"contract.negotiation")),(0,o.kt)("p",null,"This scope is used during the contract negotiation. The policies from each contract offer and agreement exchanged during\nthe negotiation are evaluated with this scope. This scope is also used to re-evaluate a contract agreement's policy\nbefore a data transfer is initiated."),(0,o.kt)("h4",{id:"manifest-verification-scope-provisionmanifestverify"},"Manifest verification scope: ",(0,o.kt)("inlineCode",{parentName:"h4"},"provision.manifest.verify")),(0,o.kt)("p",null,"This scope is used during the provisioning phase to evaluate the resource definitions of a generated resource manifest.\nFunctions registered in this scope may also modify resource definitions so that they comply with the policy.\nTherefore, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceManifestContext"),", which provides access to a manifest's resource definitions, is available\nthrough the ",(0,o.kt)("inlineCode",{parentName:"p"},"PolicyContext")," for functions registered in this scope. Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceManifestContext"),", resource\ndefinitions can be retrieved and updated by type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean evaluate(Operator operator, Object rightValue, Permission rule, PolicyContext context) {\n    var manifestContext = context.getContextData(ResourceManifestContext.class);\n\n    var bucketDefinitions = manifestContext.getDefinitions(S3BucketResourceDefinition.class);\n\n    // verify and/or modify definitions to comply with policy\n        \n     manifestContext.replaceDefinitions(S3BucketResourceDefinition.class, verifiedBucketDefinitions);\n     return true;\n}\n")),(0,o.kt)("p",null,"If any of the resource definitions cannot be modified to comply with the policy, the function should return ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."))}u.isMDXComponent=!0}}]);