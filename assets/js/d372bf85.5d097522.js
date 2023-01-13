"use strict";(self.webpackChunkedc_docs=self.webpackChunkedc_docs||[]).push([[1371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},s="CodeQL",a={unversionedId:"submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/README",id:"submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/README",title:"CodeQL",description:"CodeQL is a semantic code analysis engine developed by GitHub to automate security checks. A database is extracted from source code that can be analysed with a powerful query language. Each single query can be thought of as a \u201ccheck\u201d or \u201crule\u201d representing a distinct security vulnerability that is being searched for. There is an available set of standard CodeQL queries, written by GitHub researchers and community contributors, and custom ones can be written too. See Writing queries in the CodeQL docs for more information.",source:"@site/docs/submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/README.md",sourceDirName:"submodule/Connector/docs/developer/decision-records/2022-02-11-codeql",slug:"/submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/",permalink:"/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/",draft:!1,editUrl:"https://github.com/FraunhoferISST/edc-docs/tree/master/docs/submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/README.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Extending the scope of CodeQL queries scan",id:"extending-the-scope-of-codeql-queries-scan",level:2},{value:"Suppressing the alerts",id:"suppressing-the-alerts",level:2},{value:"LGTM",id:"lgtm",level:3},{value:"Customization of Queries",id:"customization-of-queries",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"codeql"},"CodeQL"),(0,o.kt)("p",null,"CodeQL is a semantic code analysis engine developed by GitHub to automate security checks. A database is extracted from source code that can be analysed with a powerful query language. Each single query can be thought of as a \u201ccheck\u201d or \u201crule\u201d representing a distinct security vulnerability that is being searched for. There is an available set of standard CodeQL queries, written by GitHub researchers and community contributors, and custom ones can be written too. See ",(0,o.kt)("a",{parentName:"p",href:"https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/"},"Writing queries")," in the CodeQL docs for more information."),(0,o.kt)("h2",{id:"extending-the-scope-of-codeql-queries-scan"},"Extending the scope of CodeQL queries scan"),(0,o.kt)("p",null,"CodeQL is integrated in the EDC CI build in a dedicated ",(0,o.kt)("a",{parentName:"p",href:"../.github/workflows/codeql-analysis.yml"},"Github workflow"),".\nCurrently the workflow runs on PRs and commits to the main branch and runs the default set of queries as provided by CodeQL."),(0,o.kt)("p",null,"To have more detailed scan we decided to extend the CodeQL queries, by using the built in CodeQL query suite: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs"},"security-and-quality"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"      # Initializes the CodeQL tools for scanning.\n      - name: Initialize CodeQL\n        uses: github/codeql-action/init@v2\n        with:\n          languages: ${{ matrix.language }}\n          queries: +security-and-quality\n")),(0,o.kt)("p",null,"To reduce amount on false positive alerts we excluded the test code from the scan by replacing CodeQL Autobuild with a task that compiles only Java\nproduction sources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"      # Compiles production Java source (without tests)\n      - name: Build\n        run: ./gradlew compileJava\n")),(0,o.kt)("p",null,"The results can be visible in the Github Workflow check view under the PR and in Security Tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CodeQL",src:n(73681).Z,width:"1266",height:"879"})),(0,o.kt)("p",null,"After clicking on the alert we can see a view with more detailed explanations about it, references and examples."),(0,o.kt)("h2",{id:"suppressing-the-alerts"},"Suppressing the alerts"),(0,o.kt)("p",null,"The alerts can be suppressed or removed by users with Security permissions which are assigned by default to user roles Write, Maintain and Admin."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CodeQL",src:n(30816).Z,width:"751",height:"645"})),(0,o.kt)("p",null,"Users with Read permissions (repository Members by default) can see the alerts in the PRs, but they don't have access to suppress the alerts or to see\nthe details."),(0,o.kt)("p",null,"Users with the proper permissions can analyse the alerts and dismiss/remove them if they are not applicable from both views - under the PR and in the Security Tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CodeQL",src:n(17745).Z,width:"1000",height:"262"})),(0,o.kt)("p",null,"Dismissing the alerts will dismiss them on all branches. Dismissed alerts can be later reopened. Deleting the alerts doesn't prevent them from appearing on\nthe next scans.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts"},"Here")," you can find more information about dismissing/deleting CodeQL alerts."),(0,o.kt)("p",null,"In Settings tab we can also define the alert severities causing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure"},"pull request check failure")," (available also only for users with at least Write role)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CodeQL",src:n(51208).Z,width:"1221",height:"213"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/github/codeql/issues/7294#issuecomment-985496463"},"GitHub code scanning")," does not support alert suppression comments and annotations at\nthe moment."),(0,o.kt)("h3",{id:"lgtm"},"LGTM"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lgtm.com/"},"LGTM")," is an online analysis platform that automatically checks your code for real CVEs and vulnerabilities using CodeQL.\nIn contrast to running CodeQL as a Github Action, LGTM supports ",(0,o.kt)("a",{parentName:"p",href:"https://help.semmle.com/lgtm-enterprise/user/help/alert-suppression.html"},"alert suppression"),"\nthrough comments and annotations in the code.\nIt could be considered a useful addition to the project in the future as it seems more comfortable to use and mature alternative."),(0,o.kt)("h2",{id:"customization-of-queries"},"Customization of Queries"),(0,o.kt)("p",null,"After reviewing the current capabilities of CodeQL for the customization of queries with the intention of providing additional insight for the repo the following findings are presented:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The documentation for CodeQL is lacking in detail and provides little insight into the capabilities of the query language"),(0,o.kt)("li",{parentName:"ul"},"Customization of CodeQL at this time brings little benefit and would require addition review of the source code in order to fully expose a robust features to enable customizations"),(0,o.kt)("li",{parentName:"ul"},"CodeQL has valuable functionality in existing ",(0,o.kt)("inlineCode",{parentName:"li"},"packs")," which can and should be used when it benefits the needs for the project"),(0,o.kt)("li",{parentName:"ul"},"Development efforts for CodeQL remain strong and progress is expected to bring clarity and new features that will enable one to develop customizations in the future")))}u.isMDXComponent=!0},17745:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/codeql_dismiss_alerts-2e39b26485376e2c8322966a196ef64e.png"},73681:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/codeql_github_alerts-1681a0f8928939d8501dee9578a87031.png"},51208:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/codeql_severity_settings-76e2667c224668fb17e51bb465495d98.png"},30816:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/security_permissions-81bd1a7641ff851e36dea788b5033d3f.png"}}]);