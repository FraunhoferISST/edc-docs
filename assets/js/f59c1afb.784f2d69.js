"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[8713],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>v});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),i=function(e){var o=r.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},l=function(e){var o=i(e.components);return r.createElement(d.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,c=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(t),v=n,h=u["".concat(d,".").concat(v)]||u[v]||p[v]||c;return t?r.createElement(h,a(a({ref:o},l),{},{components:t})):r.createElement(h,a({ref:o},l))}));function v(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=u;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<c;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43139:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var r=t(87462),n=(t(67294),t(3905));const c={},a="JaCoCo with Codecov",s={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov",id:"submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov",title:"JaCoCo with Codecov",description:"Evaluation",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage",slug:"/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov.md",tags:[],version:"current",frontMatter:{}},d={},i=[{value:"Evaluation",id:"evaluation",level:2},{value:"Using Codecov with forks",id:"using-codecov-with-forks",level:2},{value:"Codecov reports",id:"codecov-reports",level:2},{value:"Useful links",id:"useful-links",level:2}],l={toc:i};function p(e){let{components:o,...c}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,c,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jacoco-with-codecov"},"JaCoCo with Codecov"),(0,n.kt)("h2",{id:"evaluation"},"Evaluation"),(0,n.kt)("p",null,'Codecov is an online service for code coverage analysis that promises to "always be free for open source projects". We have been widely using it in various (open-source and proprietary) projects for years with good results.'),(0,n.kt)("p",null,"We modified the root ",(0,n.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," file to apply the JaCoCo plugin to all projects, and produce an XML format report that can be used by Codecov:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\n\nallprojects {\n     //...\n     apply(plugin = "jacoco")\n     \n     //...\n     tasks.jacocoTestReport {\n         reports {\n             xml.required.set(true)\n         }\n     }\n}\n\n')),(0,n.kt)("p",null,"We modified the ",(0,n.kt)("inlineCode",{parentName:"p"},".github/workflows/verify.yaml")," workflow as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: Gradle Test Core\n         run: ./gradlew clean check jacocoTestReport\n\n       - name: CodeCov\n         uses: codecov/codecov-action@v2\n         with:\n           token: ${{ secrets.CODECOV_TOKEN }}\n")),(0,n.kt)("p",null,"The token is supposedly not required for open-source projects, but we got an error running the action without providing a token."),(0,n.kt)("p",null,"By logging in at ",(0,n.kt)("a",{parentName:"p",href:"https://about.codecov.io"},"https://about.codecov.io")," with our GitHub Account, we were able to browse straight away to our EDC (fork) repository and obtain a token for the repository. We added the token as a GitHub secret."),(0,n.kt)("p",null,"We merged a PR with the action configuration above into the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," (default) branch of our fork repository, for Codecov to report code coverage differences in PRs."),(0,n.kt)("p",null,"Finally, we installed the Codecov GitHub app into the repository, to enable the Codecov bot to post comments directly into PRs."),(0,n.kt)("p",null,"The Codecov online site provides detailed coverage reports. These reports also measure cyclomatic complexity."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Code Coverage with Codecov",src:t(39561).Z,width:"2268",height:"434"})),(0,n.kt)("p",null,"In PRs, the Codecov bot automatically posts a report indicating coverage changes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Code Coverage with Codecov",src:t(23471).Z,width:"1934",height:"1048"})),(0,n.kt)("p",null,"These reports can also be accessed from the Codecov online service."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Code Coverage with Codecov",src:t(36050).Z,width:"2286",height:"212"})),(0,n.kt)("p",null,"The report can be drilled to highlight the code subjected to coverage changes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Code Coverage with Codecov",src:t(29607).Z,width:"2294",height:"494"})),(0,n.kt)("p",null,"The configuration of Codecov can be adjusted in a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codecov.com/docs/codecov-yaml"},(0,n.kt)("inlineCode",{parentName:"a"},"codecov.yaml")," configuration file"),". That allows for example configuration to ensure each new PR ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codecov.com/docs/common-recipe-list#increase-overall-coverage-on-each-pull-request"},"does not decrease coverage"),"."),(0,n.kt)("h2",{id:"using-codecov-with-forks"},"Using Codecov with forks"),(0,n.kt)("p",null,"Further tests showed that if Codecov is installed in the base repository then providing the Codecov token is indeed not required for open source projects:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"       - name: CodeCov\n         uses: codecov/codecov-action@v2\n")),(0,n.kt)("p",null,"The Codecov PR reports are available with no additional changes also for PRs between forks and the base repository."),(0,n.kt)("p",null,"If the owners of a fork repository want to use Codecov also for internal PRs (before merging to upstream) then Codecov App needs to be installed also in the\nfork, but in this case we also got the reports without providing the token. "),(0,n.kt)("h2",{id:"codecov-reports"},"Codecov reports"),(0,n.kt)("p",null,"We can download a report containing the data from (max) last 6 months about Line and Complexity Coverage from the Codecov dashboard.\nThe coverage on the chart can be aggregated per day, hour, month and commit."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Code Coverage with Codecov",src:t(21631).Z,width:"1155",height:"612"})),(0,n.kt)("p",null,"Codecov only shows commits that have uploaded coverage reports and are six months or less old (",(0,n.kt)("a",{parentName:"p",href:"https://docs.codecov.com/docs/frequently-asked-questions#where-are-my-older-commits-my-project-dashboard-doesnt-show-any-commit-data-in-the-line-graph"},"Codecov doc"),")."),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.codecov.com/docs/graphs"},"How to interpret Codecov graphs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.codecov.com/docs/codecov-delta"},"How to interpret delta in Codecov reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.codecov.com/docs/pull-request-comments"},"More information about Codecov Pull Request comments"))))}p.isMDXComponent=!0},21631:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/code-coverage-codecov-dashboard-489d174dabf4df91878f5c3126e88cc0.png"},29607:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/code-coverage-codecov-pr-detail-b9a04e92257ae008189fc417534686d3.png"},23471:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/code-coverage-codecov-pr-github-c57564700629970fa1097dc999a2f68b.png"},36050:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/code-coverage-codecov-pr-b37c62bc5b2cd1cf595d86ca0331237f.png"},39561:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/code-coverage-codecov-summary-7ca0121b327461828a5b5fd157bf552e.png"}}]);