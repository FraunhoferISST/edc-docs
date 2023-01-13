"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[5493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||c;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={},i="Cloud testing",s={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/README",id:"submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/README",title:"Cloud testing",description:"Decision",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing",slug:"/submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/README.md",tags:[],version:"current",frontMatter:{}},a={},l=[{value:"Decision",id:"decision",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-testing"},"Cloud testing"),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"A cloud deployment is used to test the integration with resources that cannot be run in a local emulator, such as Azure Data Factory."),(0,o.kt)("p",null,"The cloud testing pipeline detects whether credentials for an Azure environment are configured. If not, the cloud testing pipeline is skipped. This allows forks to opt-in to the cloud testing feature, by deciding whether to set up credentials."),(0,o.kt)("p",null,"The necessary resources are provisioned using Terraform. To simplify the configuration and reduce the risk of leakage of elevated credentials, Terraform is executed manually by privileged developers on their local machine (rather than in a GitHub workflow)."),(0,o.kt)("p",null,"When doing changes to the Terraform configuration, developers must keep in mind that the cloud resources, as well as the Terraform output values, are shared with other branches. Changes must be backward compatible."))}u.isMDXComponent=!0}}]);