"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[5870],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=i.createContext({}),s=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,y=d["".concat(a,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(y,l(l({ref:n},u),{},{components:t})):i.createElement(y,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=t(87462),o=(t(67294),t(3905));const r={},l="Policy Scopes",c={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/README",id:"submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/README",title:"Policy Scopes",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes",slug:"/submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/README.md",tags:[],version:"current",frontMatter:{}},a={},s=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Rule Visibility Boundaries",id:"rule-visibility-boundaries",level:3},{value:"Semantic Boundaries",id:"semantic-boundaries",level:3},{value:"Approach",id:"approach",level:2},{value:"Policy Scope",id:"policy-scope",level:3},{value:"Rule Binding",id:"rule-binding",level:3},{value:"Rule and Constraint Functions",id:"rule-and-constraint-functions",level:3}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policy-scopes"},"Policy Scopes"),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"Implement policy scopes, which are runtime visibility and semantic boundaries for policy rules such that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is possible to specify which rules contained in a policy should be evaluated in a given runtime context. "),(0,o.kt)("li",{parentName:"ul"},"It is possible to specify which evaluation code is executed for a rule type in different runtime contexts.")),(0,o.kt)("h2",{id:"rationale"},"Rationale"),(0,o.kt)("h3",{id:"rule-visibility-boundaries"},"Rule Visibility Boundaries"),(0,o.kt)("p",null,"Policy rules may only be applicable in certain runtime contexts. For example, the following policy rule:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Data must be anonymized.")),(0,o.kt)("p",null,"That rule may be applicable to policy evaluation when a resource is provisioned but it may bot be applicable during data transfer. There must be a way to specify when a rule type\nis applicable during runtime evaluation."),(0,o.kt)("h3",{id:"semantic-boundaries"},"Semantic Boundaries"),(0,o.kt)("p",null,"Policy rules may have different implementation semantics in certain runtime contexts. For example:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Asset content (data) must remain in EU-based compute environments.")),(0,o.kt)("p",null,"When this rule is evaluated during authorization, a verifiable credential may be checked. When data transfer occurs, this rule may require data to be stored in a particular cloud\nregion. There must be a way to specify which evaluation code is executed in a given runtime context."),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("p",null,"The following concepts will be introduced."),(0,o.kt)("h3",{id:"policy-scope"},"Policy Scope"),(0,o.kt)("p",null,"A policy scope defines a visibility and semantic boundary for policy rules. Scopes are hierarchical and expressed using dot notation. For example, provision.verify and\nprovision.execution are child scopes of provision. If a rule is visible in a given scope, it will be included in policy evaluations for that scope; otherwise, it will be omitted.\nPolicy rule semantics are implemented at runtime by rule and constraint functions (described below)."),(0,o.kt)("h3",{id:"rule-binding"},"Rule Binding"),(0,o.kt)("p",null,"A rule binding makes a rule type visible in a policy scope. Since scopes are hierarchical, a binding that specifies a parent context will result in the rule type being visible in\nchild scopes. The * wildcard is used to denote all scopes. A rule binding specifies one rule type and one scope. Rule types may be bound to different scopes using\nmultiple bindings."),(0,o.kt)("h3",{id:"rule-and-constraint-functions"},"Rule and Constraint Functions"),(0,o.kt)("p",null,"Rule and constraint functions are registered for a policy scope and are code that is executed at runtime during policy evaluation. Rule and constraint functions implement rule\nsemantics."))}p.isMDXComponent=!0}}]);