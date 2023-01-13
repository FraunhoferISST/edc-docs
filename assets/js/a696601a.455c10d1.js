"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[1211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="IDS Connector Launcher",l={unversionedId:"submodule/Connector/launchers/ids-connector/README",id:"submodule/Connector/launchers/ids-connector/README",title:"IDS Connector Launcher",description:"This launcher includes all extensions that are required for an IDS Connector deployment. That",source:"@site/docs/submodule/Connector/launchers/ids-connector/README.md",sourceDirName:"submodule/Connector/launchers/ids-connector",slug:"/submodule/Connector/launchers/ids-connector/",permalink:"/edc-docs/docs/submodule/Connector/launchers/ids-connector/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/launchers/ids-connector/README.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Modules",id:"modules",level:2},{value:"Core",id:"core",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Getting the Certificate Identifier",id:"getting-the-certificate-identifier",level:3},{value:"1. Getting the Subject Key Identifier",id:"1-getting-the-subject-key-identifier",level:4},{value:"2. Getting the Authority Key Identifier",id:"2-getting-the-authority-key-identifier",level:4},{value:"3. Composing the Identifier",id:"3-composing-the-identifier",level:4},{value:"Running the launcher",id:"running-the-launcher",level:2},{value:"Local setup",id:"local-setup",level:3},{value:"Docker",id:"docker",level:3},{value:"Custom truststore",id:"custom-truststore",level:4},{value:"Setting up a local DAPS instance",id:"setting-up-a-local-daps-instance",level:3},{value:"Creating the keystore for the connector",id:"creating-the-keystore-for-the-connector",level:4}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ids-connector-launcher"},"IDS Connector Launcher"),(0,r.kt)("p",null,"This launcher includes all extensions that are required for an IDS Connector deployment. That\nincludes communication via an IDS protocol, currently IDS Multipart Messages, as well as using an\nIDS DAPS as the Identity Provider."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"As the connector defined in this launcher connects to an IDS DAPS, a running and reachable DAPS is\nrequired for the connector to be able to communicate via IDS protocol. In addition, you need a valid\ncertificate (located in a keystore, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},".p12")," format) provided by this DAPS that can be used to\nuniquely identify the connector."),(0,r.kt)("p",null,"In the case that you do not have access to a publicly available DAPS or do not have a certificate\nfor one, you can set up and configure a local DAPS instance for testing. To do so, please follow\n",(0,r.kt)("a",{parentName:"p",href:"#setting-up-a-local-daps-instance"},"this")," guide."),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"The following modules are used for this launcher:"),(0,r.kt)("h3",{id:"core"},"Core"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"core"),(0,r.kt)("td",{parentName:"tr",align:null},"all core modules, including e.g. the BaseRuntime as well as the modules for transfer and contract negotiation")))),(0,r.kt)("h3",{id:"extensions"},"Extensions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions:data-protocols:ids"),(0,r.kt)("td",{parentName:"tr",align:null},"contains all IDS modules, e.g. for dispatching and handling IDS multipart messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions:filesystem:configuration-fs"),(0,r.kt)("td",{parentName:"tr",align:null},"reads configuration properties from a file in the file-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions:filesystem:vault-fs"),(0,r.kt)("td",{parentName:"tr",align:null},"file-system based vault, required for using a certificate from the file-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions:iam:oauth2:oauth2-core"),(0,r.kt)("td",{parentName:"tr",align:null},"provides OAuth2 authentication, required as DAPS is OAuth2 based")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions:iam:oauth2:oauth2-daps"),(0,r.kt)("td",{parentName:"tr",align:null},"provides the DAPS specific extension for OAuth2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions:api:management-api"),(0,r.kt)("td",{parentName:"tr",align:null},"provides endpoints e.g. for initiating a contract negotiation or a data transfer")))),(0,r.kt)("p",null,"All stores used in this launcher are in-memory implementations, meaning ",(0,r.kt)("strong",{parentName:"p"},"all data will be lost\nonce the connector is shut down"),". If you want data to be persisted even after the connector shuts\ndown, you may want to exchange the in-memory implementations for e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"CosmosDB")," backed implementations."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Some extensions used in this launcher require certain configuration values to be provided at\napplication start. Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystem:configuration-fs")," extension is used, we can provide these\nvalues in a ",(0,r.kt)("inlineCode",{parentName:"p"},".properties")," file. You can find an example ",(0,r.kt)("a",{target:"_blank",href:n(92930).Z},"config.properties")," in\nthis launcher's directory. Please adjust this for your setup as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web.http.port"),": The EDC's port defaults to 8181. Adjust this property to run it on a different port."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web.http.path"),": The default path prefix under which endpoints are available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web.http.ids.port"),": The port on which IDS endpoints (currently only the Multipart endpoint) are available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web.http.ids.path"),": The path prefix under which IDS endpoints (currently only the Multipart endpoint) are available."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ids.webhook.address"),": Set this to the address at which another connector can reach your connector,\nas it is used as a callback address during the contract negotiation, where messages are exchanged\nasynchronously. If you change the IDS API port, make sure to adjust the webhook address accordingly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.api.auth.key"),": Value of the header used for authentication when calling\nendpoints of the management API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.oauth.token.url"),": Set this to the URL of the DAPS you want to use followed by ",(0,r.kt)("inlineCode",{parentName:"li"},"/token")," or\n",(0,r.kt)("inlineCode",{parentName:"li"},"/v2/token"),", depending on the DAPS used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.oauth.client.id"),": Identifier from the certificate for the DAPS. You can find instructions on\nhow to get the identifier from the certificate ",(0,r.kt)("a",{parentName:"li",href:"#getting-the-certificate-identifier"},"below"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.oauth.provider.audience"),": Audience used when requesting a token from the DAPS. This feature\ncan be used to limit the validity of the token to certain connectors, but is currently not\nsupported by the DAPS. Therefore, this property has to be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"idsc:IDS_CONNECTORS_ALL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.oauth.provider.jwks.url"),": Set this to the URL of the DAPS you want to use followed by\n",(0,r.kt)("inlineCode",{parentName:"li"},"/.well-known/jwks.json"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.oauth.certificate.alias"),": Set this to your certificate's ",(0,r.kt)("inlineCode",{parentName:"li"},"alias")," in the keystore."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.oauth.private.key.alias"),": Set this to your certificate's ",(0,r.kt)("inlineCode",{parentName:"li"},"alias")," in the keystore.")),(0,r.kt)("h3",{id:"getting-the-certificate-identifier"},"Getting the Certificate Identifier"),(0,r.kt)("p",null,"You can get the identifier of the certificate by using ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl"),". For this, a ",(0,r.kt)("inlineCode",{parentName:"p"},".cert")," file is\nrequired (not the ",(0,r.kt)("inlineCode",{parentName:"p"},".p12"),"). If you only have the ",(0,r.kt)("inlineCode",{parentName:"p"},".p12")," file available, you can extract the\ncertificate by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl pkcs12 -in <your-keystore>.p12 -out <output-name-of-your-cert>.cert -nodes\n")),(0,r.kt)("p",null,"When you have the ",(0,r.kt)("inlineCode",{parentName:"p"},".cert")," file available, you next need to extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject Key Identifier")," and\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority Key Identifier"),", as these two compose the complete identifier."),(0,r.kt)("h4",{id:"1-getting-the-subject-key-identifier"},"1. Getting the Subject Key Identifier"),(0,r.kt)("p",null,"To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject Key Identifier"),", run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'openssl x509 -in <your-cert>.cert -noout -text | grep -A1 "Subject Key Identifier"\n')),(0,r.kt)("p",null,"This will return output similar to the following, where the second line is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject Key Identifier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"X509v3 Subject Key Identifier: \n    52:71:9A:45:C9:78:EB:A3:0C:B5:57:25:87:35:3A:BF:94:46:A3:B8\n")),(0,r.kt)("h4",{id:"2-getting-the-authority-key-identifier"},"2. Getting the Authority Key Identifier"),(0,r.kt)("p",null,"To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority Key Identifier"),", run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'openssl x509 -in <your-cert>.cert -noout -text | grep -A1 "Authority Key Identifier"\n')),(0,r.kt)("p",null,"This will return output similar to the following, where the second line is the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Authority Key Identifier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"X509v3 Authority Key Identifier: \n    keyid:52:71:9A:45:C9:78:EB:A3:0C:B5:57:25:87:35:3A:BF:94:46:A3:B8\n")),(0,r.kt)("h4",{id:"3-composing-the-identifier"},"3. Composing the Identifier"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Subject Key Identifier")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority Key Identifier"),", separated by a colon, compose the\ncertificate identifier. So your resulting identifier should look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"52:71:9A:45:C9:78:EB:A3:0C:B5:57:25:87:35:3A:BF:94:46:A3:B8:keyid:52:71:9A:45:C9:78:EB:A3:0C:B5:57:25:87:35:3A:BF:94:46:A3:B8\n")),(0,r.kt)("p",null,"Set this identifier in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.properties")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"edc.oauth.client.id"),"."),(0,r.kt)("h2",{id:"running-the-launcher"},"Running the launcher"),(0,r.kt)("p",null,"After the configuration has been adjusted, the launcher can be run. As a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is provided,\nyou can either run the connector locally or as a Docker container."),(0,r.kt)("p",null,"When running the connector, some additional properties have to be provided as system properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.fs.config"),": The path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.properties")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.vault"),": The path to the ",(0,r.kt)("inlineCode",{parentName:"li"},"vault.properties")," file (required by the ",(0,r.kt)("inlineCode",{parentName:"li"},"vault-fs")," extension, can be\nset to point to the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.properties")," file)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.keystore"),": The path to the keystore."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc.keystore.password"),": The password for the keystore.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note, that in case you are using an external DAPS or running your local DAPS under HTTPS, the DAPS\nis likely to use a self-signed SSL certificate, which will not be trusted by the connector by\ndefault. In that case, supply a custom truststore and password via the system properties\n",(0,r.kt)("inlineCode",{parentName:"strong"},"javax.net.ssl.trustStore")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"javax.net.ssl.trustStorePassword")," in the same way as the other\nsystem properties.")),(0,r.kt)("h3",{id:"local-setup"},"Local setup"),(0,r.kt)("p",null,"To run the connector locally, build the ",(0,r.kt)("inlineCode",{parentName:"p"},".jar")," using the Gradle wrapper and then run it using Java.\nIn the run command, be sure to provide the aforementioned system properties. Run the following\ncommands in the root directory of the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean :launchers:ids-connector:build\njava -Dedc.fs.config=<path-to-config.properties> \\\n    -Dedc.vault=<path-to-config.properties> \\\n    -Dedc.keystore=<path-to-keystore> \\\n    -Dedc.keystore.password=<keystore-password> \\\n    -jar launchers/ids-connector/build/libs/dataspace-connector.jar\n")),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"This launcher provides a ",(0,r.kt)("a",{parentName:"p",href:"./Dockerfile"},"Dockerfile"),", which builds the connector and uses environment\nvariables for setting the system properties from the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," command. Thus, the image only has to be\nbuilt once and can then be used for different deployments. By default, no custom truststore is supplied in the\nDockerfile. If you need to use a custom truststore, please have a look at ",(0,r.kt)("a",{parentName:"p",href:"#custom-truststore"},"this section"),". "),(0,r.kt)("p",null,"To build the image, run the following command in the root directory of the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t edc-ids-connector -f launchers/ids-connector/Dockerfile .\n")),(0,r.kt)("p",null,"Before running the image, you need to create an ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file supplying the system properties. You can\nadjust the ",(0,r.kt)("a",{target:"_blank",href:n(34626).Z},"ids-connector.env")," supplied in this sample. The paths to the\nproperties and keystore files should not point to your local environment this time, but to the\nlocation where you mount the files in the container. Therefore, make sure that the paths match the mount paths in the\ncommand below."),(0,r.kt)("p",null,"In the following command, adjust the port if you changed it in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.properties")," and adjust\nthe mounted volumes to match your environment. The mounted volumes should contain the\n",(0,r.kt)("inlineCode",{parentName:"p"},"config.properties")," file as well as the keystore. If you added the system properties for a custom\ntruststore to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", make sure to mount the truststore as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8181:8181 -p 8282:8282 \\\n    --env-file ./launchers/ids-connector/ids-connector.env \\\n    -v '/directory/with/properties:/config/config.properties' \\\n    -v '/directory/with/keystore:/config/keystore.p12' \\\n    edc-ids-connector\n")),(0,r.kt)("h4",{id:"custom-truststore"},"Custom truststore"),(0,r.kt)("p",null,"If you need to use a custom truststore, add the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djavax.net.ssl.trustStore")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"-Djavax.net.ssl.trustStorePassword")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," in the Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'ENTRYPOINT java \\\n    -Djava.security.edg=file:/dev/.urandom \\\n    -Dedc.ids.id="urn:connector:edc-connector-24" \\\n    -Dedc.ids.title="Eclipse Dataspace Connector" \\\n    -Dedc.ids.description="Eclipse Dataspace Connector with IDS extensions" \\\n    -Dedc.ids.maintainer="https://example.maintainer.com" \\\n    -Dedc.ids.curator="https://example.maintainer.com" \\\n    -Djavax.net.ssl.trustStore=$JAVA_TRUSTSTORE \\\n    -Djavax.net.ssl.trustStorePassword=$JAVA_TRUSTSTORE_PASSWORD \\\n    -jar dataspace-connector.jar\n')),(0,r.kt)("p",null,"The corresponding values are added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env"},"JAVA_TRUSTSTORE=/config/truststore.p12\nJAVA_TRUSTSTORE_PASSWORD=<truststore-password>\n")),(0,r.kt)("p",null,"When running the image, make sure to mount the truststore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8181:8181 -p 8282:8282 \\\n    --env-file ./launchers/ids-connector/ids-connector.env \\\n    -v '/directory/with/properties:/config/config.properties' \\\n    -v '/directory/with/keystore:/config/keystore.p12' \\\n    -v '/directory/with/truststore:/config/truststore.p12' \\\n    edc-ids-connector\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setting-up-a-local-daps-instance"},"Setting up a local DAPS instance"),(0,r.kt)("p",null,"If you do not have access to an external DAPS, you can set up your own local instance for testing.\nTo do so, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Checkout the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/International-Data-Spaces-Association/omejdn-daps"},"Omejdn DAPS repository")),(0,r.kt)("li",{parentName:"ol"},"Retrieve the submodules: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git submodule update --init --remote\n"))),(0,r.kt)("li",{parentName:"ol"},"Generate a key and a certificate for the DAPS instance:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout keys/omejdn/omejdn.key -out daps.cert\n"))),(0,r.kt)("li",{parentName:"ol"},"Modify ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," in the project root: set ",(0,r.kt)("inlineCode",{parentName:"li"},"DAPS_DOMAIN")," to the URL your DAPS instance will be running at."),(0,r.kt)("li",{parentName:"ol"},"Register a connector (the security profile is optional and will default to ",(0,r.kt)("em",{parentName:"li"},"idsc:BASE_SECURITY_PROFILE")," if not\nspecified):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scripts/register_connector.sh <client-name-for-connector> <security-profile>\n"))),(0,r.kt)("li",{parentName:"ol"},"Optionally, you can register more connectors by running step 5 multiple times with different client names."),(0,r.kt)("li",{parentName:"ol"},"Run the DAPS:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f compose-development.yml up\n"))),(0,r.kt)("li",{parentName:"ol"},"When you see ",(0,r.kt)("inlineCode",{parentName:"li"},"omejdn-server_1  | == Sinatra (v2.1.0) has taken the stage on 4567 for development with backup from Thin"),"\nin the logs, the DAPS is ready to accept requests.")),(0,r.kt)("p",null,"The URL under which the connector can reach the DAPS is ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:80")," due to the ",(0,r.kt)("inlineCode",{parentName:"p"},"NGINX")," used in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file."),(0,r.kt)("h4",{id:"creating-the-keystore-for-the-connector"},"Creating the keystore for the connector"),(0,r.kt)("p",null,"After running step 5 from the above list, two files named ",(0,r.kt)("inlineCode",{parentName:"p"},"<client-name-from-step-5>.cert")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"<client-name-from-step-5>.key")," have been added in the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," directory. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"openssl")," and these\nfiles, a keystore can be created. The following command will create the keystore in the root\ndirectory of the DAPS repository. To create it in a specific directory, precede ",(0,r.kt)("inlineCode",{parentName:"p"},"<client-name>.p12"),"\nwith the desired output path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl pkcs12 -export -in keys/<client-name>.cert -inkey keys/<client-name>.key -out <client-name>.p12\n")),(0,r.kt)("p",null,"In the resulting keystore, the certificate will have alias ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."))}d.isMDXComponent=!0},92930:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/config-f1d77576d19dd6a402ea68df2068a39a.properties"},34626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/ids-connector-743a20e132dca5197fa9ad9ce0fab550.env"}}]);