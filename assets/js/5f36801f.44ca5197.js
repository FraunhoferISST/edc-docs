"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[3683],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3512:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="[HashiCorp Vault](https://www.vaultproject.io/) Extension",l={unversionedId:"submodule/Connector/extensions/common/vault/vault-hashicorp/README",id:"submodule/Connector/extensions/common/vault/vault-hashicorp/README",title:"[HashiCorp Vault](https://www.vaultproject.io/) Extension",description:"Configuration",source:"@site/docs/submodule/Connector/extensions/common/vault/vault-hashicorp/README.md",sourceDirName:"submodule/Connector/extensions/common/vault/vault-hashicorp",slug:"/submodule/Connector/extensions/common/vault/vault-hashicorp/",permalink:"/edc-docs/docs/submodule/Connector/extensions/common/vault/vault-hashicorp/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/extensions/common/vault/vault-hashicorp/README.md",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Setup vault for integration tests",id:"setup-vault-for-integration-tests",level:2}],s={toc:u};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hashicorp-vault-extension"},(0,o.kt)("a",{parentName:"h1",href:"https://www.vaultproject.io/"},"HashiCorp Vault")," Extension"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"edc.vault.hashicorp.url"),(0,o.kt)("td",{parentName:"tr",align:"left"},"URL to connect to the HashiCorp Vault"),(0,o.kt)("td",{parentName:"tr",align:null},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"edc.vault.hashicorp.token"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Value for ",(0,o.kt)("a",{parentName:"td",href:"https://www.vaultproject.io/docs/auth/token"},"Token Authentication")," with the vault"),(0,o.kt)("td",{parentName:"tr",align:null},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"edc.vault.hashicorp.timeout.seconds"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Request timeout in seconds when contacting the vault (default: 30)"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"setup-vault-for-integration-tests"},"Setup vault for integration tests"),(0,o.kt)("p",null,"The integration tests rely on a vault running locally.\nThis can be achieved by starting a docker container with the following configuration."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run  -e 'VAULT_DEV_ROOT_TOKEN_ID=test-token' -p \"8200:8200\" vault:1.9.7")))}p.isMDXComponent=!0}}]);