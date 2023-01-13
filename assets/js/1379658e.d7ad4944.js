"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[8795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={},a=void 0,i={unversionedId:"submodule/IdentityHub/system-tests/README",id:"submodule/IdentityHub/system-tests/README",title:"README",description:"System tests",source:"@site/docs/submodule/IdentityHub/system-tests/README.md",sourceDirName:"submodule/IdentityHub/system-tests",slug:"/submodule/IdentityHub/system-tests/",permalink:"/edc-docs/docs/submodule/IdentityHub/system-tests/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/IdentityHub/system-tests/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"System tests",id:"system-tests",level:2},{value:"Local test resources",id:"local-test-resources",level:4},{value:"Running tests locally",id:"running-tests-locally",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"system-tests"},"System tests"),(0,s.kt)("p",null,"System tests run a sample EDC connector with the Identity Hub extension and a DID server using docker. The DID server provides sample DID documents for the EDC connector and an external authority."),(0,s.kt)("p",null,"The test checks that verifiable credentials can be added to the Identity Hub of the EDC connector using the CLI. In addition, an instance of ",(0,s.kt)("inlineCode",{parentName:"p"},"CredentialsVerifier")," is injected (hence the ",(0,s.kt)("inlineCode",{parentName:"p"},"@ExtendWith(EdcExtension.class)")," annotation) to verify that another EDC connector is able to retrieve and verify the signature of these verifiable credentials."),(0,s.kt)("h4",{id:"local-test-resources"},"Local test resources"),(0,s.kt)("p",null,"The following test resources are used to run system tests:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"A set of private and public keys for both the external authority and the EDC connector (identity hub owner) at ",(0,s.kt)("inlineCode",{parentName:"p"},"system-tests/resources/jwt/authority"),". These keys were generated with the following commands and are commited into the git repository:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# generate a private key\nopenssl ecparam -name prime256v1 -genkey -noout -out private-key.pem\n# generate corresponding public key\nopenssl ec -in private-key.pem -pubout -out public-key.pem\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Web DIDs are available under ",(0,s.kt)("inlineCode",{parentName:"p"},"system-tests/resources/webdid")," folder. The ",(0,s.kt)("inlineCode",{parentName:"p"},"publicKeyJwk")," section of each ",(0,s.kt)("inlineCode",{parentName:"p"},"did.json")," was generated by converting the corresponding public key to JWK format, for example the authority public key was converted to JWK using following command:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -i danedmunds/pem-to-jwk:1.2.1 --public --pretty < system-tests/resources/jwt/participant/public-key.pem\n")))),(0,s.kt)("h2",{id:"running-tests-locally"},"Running tests locally"),(0,s.kt)("p",null,"Run test components with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f system-tests/docker-compose.yml up --build\n")),(0,s.kt)("p",null,"Run test with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"INTEGRATION_TEST=true ./gradlew :system-tests:test\n")))}p.isMDXComponent=!0}}]);