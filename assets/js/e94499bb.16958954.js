"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[4325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},s="Browsing the Transfer History",i={unversionedId:"submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/transfer-history",id:"submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/transfer-history",title:"Browsing the Transfer History",description:"Overview",source:"@site/docs/submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/transfer-history.md",sourceDirName:"submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard",slug:"/submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/transfer-history",permalink:"/edc-docs/docs/submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/transfer-history",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/transfer-history.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Browsing the Transfer History",id:"browsing-the-transfer-history-1",level:2}],d={toc:l};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"browsing-the-transfer-history"},"Browsing the Transfer History"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Transfer History pane shows Data Transfers for which the connector was a participant, either as Consumer or Provider."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/edc-docs/docs/submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/initiate-transfer"},"Initiating a Data Transfer")," for more details about the transfer process."),(0,n.kt)("h2",{id:"browsing-the-transfer-history-1"},"Browsing the Transfer History"),(0,n.kt)("p",null,"Browse to the ",(0,n.kt)("em",{parentName:"p"},"Transfer History")," pane."),(0,n.kt)("p",null,"For each transfer, the UI shows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Transfer Process ID"),(0,n.kt)("li",{parentName:"ul"},"Type: whether the connector was the Consumer or Provider side of the transfer"),(0,n.kt)("li",{parentName:"ul"},"State: transfer completion state (see caveats in ",(0,n.kt)("a",{parentName:"li",href:"/edc-docs/docs/submodule/MinimumViableDataspace/docs/developer/edc-data-dashboard/initiate-transfer"},"Initiating a Data Transfer"),")"),(0,n.kt)("li",{parentName:"ul"},"ConnectorId: the counterpart Connector ID"),(0,n.kt)("li",{parentName:"ul"},"Protocol: unused"),(0,n.kt)("li",{parentName:"ul"},"AssetId: the transferred Asset ID"),(0,n.kt)("li",{parentName:"ul"},"ContractId: the Contract Agreement ID used to execute the transfer"),(0,n.kt)("li",{parentName:"ul"},"Error: error message if any"),(0,n.kt)("li",{parentName:"ul"},"Action: link to a data browser, if available")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"transfer-history",src:r(80383).Z,width:"2126",height:"768"})),(0,n.kt)("p",null,"For data transferred to Azure Storage, The ",(0,n.kt)("em",{parentName:"p"},"Open Storage Explorer")," link opens the destination storage container in ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/features/storage-explorer"},"Azure Storage Explorer")," (you will need to install the software beforehand if not available on your machine)."),(0,n.kt)("p",null,"You can see the created assets, as well as a ",(0,n.kt)("inlineCode",{parentName:"p"},".complete")," marker blob used for the Consumer to detect transfer completion."))}p.isMDXComponent=!0},80383:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/transfer-history-8e976079ed6a69110bc6cf61515d2dd4.png"}}]);