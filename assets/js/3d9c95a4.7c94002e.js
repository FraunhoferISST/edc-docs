"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[2125],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:1,slug:"/"},r=void 0,s={unversionedId:"home",id:"home",title:"home",description:"Eclipse Dataspace Components",source:"@site/docs/home.md",sourceDirName:".",slug:"/",permalink:"/edc-docs/docs/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/home.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/edc-docs/docs/category/getting-started"}},c={},l=[{value:"Eclipse Dataspace Components",id:"eclipse-dataspace-components",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Statement: EDC vs. DSC",id:"statement-edc-vs-dsc",level:2},{value:"Correlating projects",id:"correlating-projects",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"eclipse-dataspace-components"},"Eclipse Dataspace Components"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note: All content of provided documentation reflects the current state of discussion.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Data spaces allow organizations to securely share data with others. They enable data cooperation in a multi-cloud\nfederation by focusing on identity, trust, sovereignty, and interoperability."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Identity: Each participant remains in control of their identity."),(0,o.kt)("li",{parentName:"ul"},"Trust: Each participant decides who to trust."),(0,o.kt)("li",{parentName:"ul"},"Sovereignty: Each participant decides under what policies their data is shared."),(0,o.kt)("li",{parentName:"ul"},"Interoperability: Each participant remains in control of their deployment.")),(0,o.kt)("p",null,'Since the concept of data spaces is emerging and promises new capabilities to the data exchange between participants\n(organizations) in terms of data sovereignty, many may ask the questions "What is a connector?" and "When and why should\nI use it?".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is a data space connector?")),(0,o.kt)("p",null,"A participant in a data space wants to share and consume data offers, transfer data, and - most important - maintain\ncontrol over its usage. All processes are based on the aforementioned principles of identity, trust, sovereignty, and\ninteroperability. This is why a connector component is used to participate in a data space and mainly focuses on\nthese aspects while ensuring data sovereignty along the entire data supply and value chain."),(0,o.kt)("p",null,"In order to build up and participate in a data space, it is not enough to consider existing communication protocols.\nThis means, besides the actual data transfer, a connector has to provide capabilities, i.e., for discovering,\nconnecting, automated contract negotiation, policy enforcement, and auditing processes. Data space connectors act as\nlogical gatekeepers that integrate into each participant\u2019s infrastructure and communicate with each other."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EDC Capabilities",src:a(8392).Z,width:"4069",height:"1919"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When to use a data space connector?")),(0,o.kt)("p",null,"A connector should be used each time the controlling (legal) entity of the data changes. A connector provides a\ngeneric way to express, negotiate, and document the rules under which data is shared, and also with whom. Not just\nin plain text but machine-readable and technically enforceable."),(0,o.kt)("p",null,"Existing open-source projects address the technical challenges of cataloguing and transferring data for a wide\nrange of use cases. However, there is no open-source effort aimed at providing an interoperable, cross-organization\nframework for data sharing that is built on a common identity model and uniform policy enforcement. This project\nwill integrate with existing data exchange technologies and provide these missing pieces to create a system for data\nsharing where each organization is able to exert control over how its shared data is used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"About the Eclipse Dataspace Components")),(0,o.kt)("p",null,"A data-sharing system requires a protocol implementation for policy enforcement among participants. The EDC will\nimplement the International Data Spaces (IDS) standard as well as relevant protocols and requirements associated\nwith Gaia-X, and thereby provide implementation and feedback to these initiatives. However, the EDC will be\nextensible in a way that it may support alternative protocols.\nIts added value is achieved through the separation of control and data plane, which enables a modular and\nthereby customizable way to build data spaces. Due to common interfaces and mapping of existing standards, the EDC\nadds capabilities of contract negotiating and policy handling in an interoperable manner."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open, community-driven and extensible")),(0,o.kt)("p",null,'As an open source project hosted by the Eclipse Foundation, the EDC provides a growing list of modules for many\nwidely-deployed cloud environments (AWS, Azure, GCP, OTC, etc.) "out-of-the-box" and can easily be extended for\nmore customized environments, while avoiding any intellectual property rights (IPR) headaches.'),(0,o.kt)("h2",{id:"statement-edc-vs-dsc"},"Statement: EDC vs. DSC"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Also to be read on ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/eclipse-dataspaceconnector/DataSpaceConnector/discussions/1037"},"GitHub"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Eclipse Dataspace Components expand and improve the Dataspace Connector (DSC) as a follow-up development\nby an OSS community that is being contributed to the various initiatives that are involved in building data spaces.\nBoth connectors do ",(0,o.kt)("em",{parentName:"strong"},"not")," have the same codebase, but follow the same ideas of sovereign data spaces.")),(0,o.kt)("p",null,"The DSC is a component previously developed by Fraunhofer ISST. The goal was to build an IDS-compliant connector\ndriven by a community (e.g., from initiatives as Catena-X, Gaia-X, Mobility Data Space) as OSS to foster distribution\nand usage. While some discussions with several partner organizations begin/mid last year, it became very clear that\nthe underlying governance and rules for contributions did not fit the requirements to form such a community and work\non the code together due to questions regarding intellectual property (IP), licensing, etc."),(0,o.kt)("p",null,"As a solution, partners agreed in June '21 to create a project within the Eclipse Foundation (EF), since EF provides\nclear governance structures and rules allowing exactly the collaboration and community building, it was aimed for.\nWhile the transfer process and meetings with initial committers (among others), the architecture was rethought to\ndirectly address future requirements in terms of applicability, robustness, scaling, etc. A much-discussed issue\ndealt with the limitation to a single data protocol such as the IDS vs. a solution that can support multiple such\nprotocols. The decision fell on the latter and so the EDC is now developed based on a new architecture and design\nprinciples but based on available parts (like the DSC) that were transferred as initial contributions to the EF\n(see the ",(0,o.kt)("a",{parentName:"p",href:"https://projects.eclipse.org/proposals/eclipse-dataspace-connector"},"project's proposal"),"). This time\nwith a ",(0,o.kt)("a",{parentName:"p",href:"https://projects.eclipse.org/projects/technology.dataspaceconnector/who"},"community of various companies"),"\nthat bring in requirements from different initiatives like Catena-X, Eona-X, IDSA, Gaia-X, or MDS, and work on\na decentralized data space implementation based on a data space connector that provides capabilities for data\nexchange and extensibility to various shared service implementations (catalog, identity, usage control, logging, etc.)\nthrough interfaces. Thereby, the EDC can support IDS(A)-based components like the DAPS (Identity), or Metadata Broker\n(Catalog) as well as other approaches like WEB-DID (Identity) or Federated Catalog (Catalog). All with the same core\nto enable organizations to use a single technology to participate in multiple data spaces/ecosystems/federations in\nparallel."),(0,o.kt)("h2",{id:"correlating-projects"},"Correlating projects"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note"),": Not every project may be mentioned here. If you want to add one, please feel free to open a PR\nor provide us with information via an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-dataspaceconnector/DataSpaceConnector/issues/new?assignees=&labels=adoption&template=adoption_request.md&title=Adoption+Request"},"adoption request"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Gaia-X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The EDC allows organizations to exchange data compliant to rules and policies of the Gaia-X AISBL according to the corresponding Trust Framework")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Catena-X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Uses the EDC as Connector component to build a data space between participants")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Tractus-X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Eclipse Foundation OSS project initiated by Catena-X consortia, where specific (Catena-X related) EDC-extensions can be implemented under clear governance and rules")))),(0,o.kt)("p",null,"To see EDC adoptions, please take a look at our ",(0,o.kt)("a",{parentName:"p",href:"submodule/Connector/known_friends.md"},"known friends")," list."))}d.isMDXComponent=!0},8392:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connector-701b4d8cefdca538349f7b8b8025cb98.png"}}]);