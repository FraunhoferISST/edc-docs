import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/edc-docs/markdown-page',
    component: ComponentCreator('/edc-docs/markdown-page', 'ed8'),
    exact: true
  },
  {
    path: '/edc-docs/docs',
    component: ComponentCreator('/edc-docs/docs', 'e5d'),
    routes: [
      {
        path: '/edc-docs/docs/',
        component: ComponentCreator('/edc-docs/docs/', '0c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/404',
        component: ComponentCreator('/edc-docs/docs/404', '668'),
        exact: true
      },
      {
        path: '/edc-docs/docs/hands-on',
        component: ComponentCreator('/edc-docs/docs/hands-on', 'd06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/publications',
        component: ComponentCreator('/edc-docs/docs/publications', '6bc'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Collateral/',
        component: ComponentCreator('/edc-docs/docs/submodule/Collateral/', '782'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/Collateral/Events/',
        component: ComponentCreator('/edc-docs/docs/submodule/Collateral/Events/', 'a32'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Collateral/Events/Conferences/',
        component: ComponentCreator('/edc-docs/docs/submodule/Collateral/Events/Conferences/', 'c19'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Collateral/Events/Hackathons/',
        component: ComponentCreator('/edc-docs/docs/submodule/Collateral/Events/Hackathons/', '8ae'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Collateral/Events/Workshops/',
        component: ComponentCreator('/edc-docs/docs/submodule/Collateral/Events/Workshops/', 'b64'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Collateral/Latest Presentations/',
        component: ComponentCreator('/edc-docs/docs/submodule/Collateral/Latest Presentations/', '259'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Collateral/Work Content/',
        component: ComponentCreator('/edc-docs/docs/submodule/Collateral/Work Content/', 'bde'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/', '23d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/CONTRIBUTING',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/CONTRIBUTING', 'd6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/Connector/contribution_categories',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/contribution_categories', '0a4'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/core/common/connector-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/core/common/connector-core/', '7f6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/core/control-plane/contract-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/core/control-plane/contract-core/', 'd1b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/core/control-plane/transfer-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/core/control-plane/transfer-core/', 'd99'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/core/data-plane/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/core/data-plane/', '778'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/core/data-plane/data-plane-framework/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/core/data-plane/data-plane-framework/', '659'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/core/data-plane/data-plane-util/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/core/data-plane/data-plane-util/', '876'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/data-protocols/ids/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/data-protocols/ids/', '373'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-api-configuration/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-api-configuration/', 'be0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-api-multipart-endpoint-v1/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-api-multipart-endpoint-v1/', 'afc'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-core/', '35b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-jsonld-serdes/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-jsonld-serdes/', 'aed'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-spi/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-spi/', '136'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-token-validation/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/data-protocols/ids/ids-token-validation/', '8e1'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/', '977'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/', 'b1f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/catalog/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/catalog/', '905'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/coding-principles',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/coding-principles', '43b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/configuration/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/configuration/', '72c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/data-transfer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/data-transfer/', 'cb2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/domain-model',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/domain-model', 'a8d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/identity-management/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/identity-management/', 'e34'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/ids/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/ids/', 'e5a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/terminology',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/terminology', '9eb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/', '3d8'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/contracts',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/contracts', '7cf'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/enforcement',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/enforcement', '802'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/policies',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/architecture/usage-control/policies', '345'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/autodoc',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/autodoc', '8ef'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/build-your-own-connector',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/build-your-own-connector', 'cd2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/cloud_testing',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/cloud_testing', 'af9'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/command-queue',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/command-queue', 'e30'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/custom_validation',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/custom_validation', '0b3'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/', '3b7'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-03-integration-testing/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-03-integration-testing/', '46d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-07-micrometer-metrics/', '288'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-07-tracing/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-07-tracing/', '5e9'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/', 'b5f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codacy',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codacy', '6e2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/codecov', '74c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/jacoco',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/jacoco', '0fd'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/jacoco_github_action',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/jacoco_github_action', 'a5e'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/sonarqube',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-10-code-coverage/sonarqube', 'e52'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-11-codeql/', '9ab'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-14-helm-chart/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-02-14-helm-chart/', '808'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-01-serverless-transfers/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-01-serverless-transfers/', '7e8'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-02-performance-tests/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-02-performance-tests/', 'ba0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-11-story-issues/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-11-story-issues/', 'ea1'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-14-cloud-testing/', '354'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-14-dependency-analysis/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-14-dependency-analysis/', '586'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-15-policy-scopes/', 'be6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-15-swagger-annotations/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-15-swagger-annotations/', 'a0b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-03-30-cosmosdb-lease-mechanism/', '65b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-04-21-dpf-blob-data-transfer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-04-21-dpf-blob-data-transfer/', '524'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-02-ids-serializer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-02-ids-serializer/', '1a2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-03-event-framework/', '2e1'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-09-shared-clock/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-09-shared-clock/', 'c73'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-19-json-web-token/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-06-19-json-web-token/', '4e6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-04-type-manager/', '09c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-05-ids-requests-pagination/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-05-ids-requests-pagination/', 'db8'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-06-release-automation/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-06-release-automation/', 'd86'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-22-simplify-fcc/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-22-simplify-fcc/', '4cb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-27-custom-dto-validation/', 'ee2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-28-transfer-process-new-state/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-07-28-transfer-process-new-state/', '261'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-01-entity-timestamp/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-01-entity-timestamp/', '05f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-04-async-code-testing-practices/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-04-async-code-testing-practices/', 'daa'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-04-documentation-automation/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-04-documentation-automation/', '8a0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-09-project-structure-review/', '4c6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-11-versioning_and_artifacts/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-11-versioning_and_artifacts/', '0d5'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-17-remove_h2_database_tests/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-08-17-remove_h2_database_tests/', '0f1'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-01-google-cloud-storage-integration/', 'e58'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-18-ids-catalog-request-filtering/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-18-ids-catalog-request-filtering/', '270'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-23-extract-metamodel-and-autodoc/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-23-extract-metamodel-and-autodoc/', '7fd'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-29-sql-query-streaming/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-09-29-sql-query-streaming/', '2c6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-10-naming-conventions/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-10-naming-conventions/', 'f21'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-20-trust-framework-adoption-repository/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-20-trust-framework-adoption-repository/', '199'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-21-gradle-versioncatalogs/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-21-gradle-versioncatalogs/', 'ea9'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-10-31-aggregate-service-layer/', 'c9b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-09-api-refactoring/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-09-api-refactoring/', 'db0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-09-api-refactoring/documentation',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-09-api-refactoring/documentation', 'f6d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-09-api-refactoring/renaming',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-09-api-refactoring/renaming', '909'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-28-release-management/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-11-28-release-management/', '4a6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-12-05-edc-http-client/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-12-05-edc-http-client/', 'e4f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-12-07-transaction-synchronization/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/decision-records/2022-12-07-transaction-synchronization/', 'd6a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/default_provider_methods',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/default_provider_methods', '718'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/dependency_resolution',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/dependency_resolution', '56a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/dpf_selector',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/dpf_selector', '1c3'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/events',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/events', '666'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/logging',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/logging', 'c85'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/metrics',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/metrics', 'b04'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/openapi',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/openapi', '884'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/performance-tuning',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/performance-tuning', '14b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/policy-engine',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/policy-engine', '3dc'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/releases',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/releases', '8ec'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/sql_queries',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/sql_queries', 'a70'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/state-machine',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/state-machine', '5d0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/testing',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/testing', '1e9'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/developer/version-catalogs',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/developer/version-catalogs', '169'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/templates/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/templates/', 'aef'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/templates/decision-record',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/templates/decision-record', '78e'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/templates/extension',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/templates/extension', '722'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/docs/templates/launcher',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/docs/templates/launcher', '920'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/', 'bb7'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/api/api-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/api/api-core/', 'f69'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/api/api-observability/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/api/api-observability/', 'f40'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/api/control-api-configuration/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/api/control-api-configuration/', '0e5'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/api/management-api-configuration/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/api/management-api-configuration/', '845'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/auth/auth-basic/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/auth/auth-basic/', 'cb9'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/auth/auth-tokenbased/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/auth/auth-tokenbased/', '7b2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/aws/aws-s3-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/aws/aws-s3-core/', 'fe6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/aws/aws-s3-test/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/aws/aws-s3-test/', 'e70'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/azure/azure-cosmos-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/azure/azure-cosmos-core/', 'fcb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/azure/azure-resource-manager/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/azure/azure-resource-manager/', '537'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/azure/azure-test/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/azure/azure-test/', '094'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/configuration/configuration-filesystem/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/configuration/configuration-filesystem/', 'f50'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/events/events-cloud-http/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/events/events-cloud-http/', '4eb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/http/jersey-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/http/jersey-core/', '77b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/http/jersey-micrometer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/http/jersey-micrometer/', 'dc1'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/http/jetty-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/http/jetty-core/', 'cf0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/http/jetty-micrometer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/http/jetty-micrometer/', 'b3d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/iam/decentralized-identity/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/iam/decentralized-identity/', 'f4c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/iam/decentralized-identity/identity-did-web/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/iam/decentralized-identity/identity-did-web/', '392'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/iam/oauth2/oauth2-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/iam/oauth2/oauth2-core/', 'faa'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/iam/oauth2/oauth2-daps/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/iam/oauth2/oauth2-daps/', '276'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/metrics/micrometer-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/metrics/micrometer-core/', '3d6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/monitor/monitor-jdk-logger/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/monitor/monitor-jdk-logger/', 'ef5'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/sql/sql-core/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/sql/sql-core/', 'c6d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/sql/sql-pool/sql-pool-apache-commons/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/sql/sql-pool/sql-pool-apache-commons/', 'd30'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/common/vault/vault-hashicorp/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/common/vault/vault-hashicorp/', '013'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/api/management-api/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/api/management-api/', 'b78'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/provision/provision-gcs/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/provision/provision-gcs/', '312'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/provision/provision-oauth2/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/provision/provision-oauth2/', '39f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/asset-index-cosmos/', 'd5f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-definition-store-cosmos/', '30d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-negotiation-store-cosmos/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/contract-negotiation-store-cosmos/', '9a1'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/policy-definition-store-cosmos/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/policy-definition-store-cosmos/', '6fb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/transfer-process-store-cosmos/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/cosmos/transfer-process-store-cosmos/', '00b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/asset-index-sql/', 'd7e'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/contract-definition-store-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/contract-definition-store-sql/', 'ecc'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/contract-negotiation-store-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/contract-negotiation-store-sql/', 'ce1'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/policy-definition-store-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/policy-definition-store-sql/', '4a7'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/transfer-process-store-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/store/sql/transfer-process-store-sql/', 'e5e'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/control-plane/transfer/transfer-data-plane/', '755'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane-selector/data-plane-selector-client/', '547'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-api/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-api/', 'b72'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-aws-s3/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-aws-s3/', '411'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-azure-data-factory/', '26b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-azure-storage/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-azure-storage/', '6d4'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-google-storage/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-google-storage/', 'cdf'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-http/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/data-plane-http/', '166'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/store/cosmos/data-plane-store-cosmos/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/store/cosmos/data-plane-store-cosmos/', 'c99'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/extensions/data-plane/store/sql/data-plane-store-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/extensions/data-plane/store/sql/data-plane-store-sql/', 'e4d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/known_friends',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/known_friends', 'fc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/Connector/launchers/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/launchers/', '482'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/launchers/generic/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/launchers/generic/', '0df'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/launchers/ids-connector/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/launchers/ids-connector/', '46d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/NOTICE',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/NOTICE', '23b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/onboarding',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/onboarding', '227'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/pr_etiquette',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/pr_etiquette', '1d5'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/', '081'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/04.0-file-transfer/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/04.0-file-transfer/', 'ef4'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/04.1-file-transfer-listener/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/04.1-file-transfer-listener/', '903'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/04.2-modify-transferprocess/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/04.2-modify-transferprocess/', '1b0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/04.3-open-telemetry/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/04.3-open-telemetry/', '37c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/basic-connector/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/basic-connector/', 'aa3'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/configuration/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/configuration/', '191'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/file-transfer-cloud/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/file-transfer-cloud/', '751'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/samples/health-endpoint/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/samples/health-endpoint/', '28f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/SECURITY',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/SECURITY', '5fb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/styleguide',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/styleguide', '312'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/system-tests/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/system-tests/', 'd16'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/system-tests/e2e-transfer-test/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/system-tests/e2e-transfer-test/', 'd70'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Connector/system-tests/minikube/',
        component: ComponentCreator('/edc-docs/docs/submodule/Connector/system-tests/minikube/', '3d8'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/', 'e1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/CHANGELOG',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/CHANGELOG', '68f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/CODE_OF_CONDUCT',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/CODE_OF_CONDUCT', '43e'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/docs/developer/continuous_deployment',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/docs/developer/continuous_deployment', '284'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/docs/developer/decision-records/',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/docs/developer/decision-records/', 'ea7'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/docs/templates/',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/docs/templates/', '793'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/docs/templates/decision-record',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/docs/templates/decision-record', '01c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/SECURITY',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/SECURITY', '046'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/src/modules/edc-dmgmt-client/',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/src/modules/edc-dmgmt-client/', '0fa'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/DataDashboard/SUPPORT',
        component: ComponentCreator('/edc-docs/docs/submodule/DataDashboard/SUPPORT', 'e31'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/', 'aee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/CONTRIBUTING',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/CONTRIBUTING', 'a7b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/core/docs/',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/core/docs/', '0a9'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/core/docs/federated_catalog',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/core/docs/federated_catalog', 'd1b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/core/federated-catalog/',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/core/federated-catalog/', 'f9c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/docs/developer/decision-records/',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/docs/developer/decision-records/', 'a8d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/docs/templates/',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/docs/templates/', 'd59'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/docs/templates/decision-record',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/docs/templates/decision-record', '475'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/extensions/store/fcc-node-directory-cosmos/', 'd02'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/NOTICE',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/NOTICE', '400'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/SECURITY',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/SECURITY', 'e20'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/FederatedCatalog/spi/federated-catalog-spi/',
        component: ComponentCreator('/edc-docs/docs/submodule/FederatedCatalog/spi/federated-catalog-spi/', 'a14'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/', '37d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/CONTRIBUTING',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/CONTRIBUTING', 'eb7'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/docs/developer/autodoc',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/docs/developer/autodoc', 'c6d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/NOTICE',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/NOTICE', 'ac4'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/plugins/autodoc/autodoc-plugin/',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/plugins/autodoc/autodoc-plugin/', '01d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/plugins/autodoc/autodoc-processor/',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/plugins/autodoc/autodoc-processor/', '09c'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/plugins/edc-build/',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/plugins/edc-build/', '23f'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/plugins/module-names/',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/plugins/module-names/', '086'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/plugins/openapi-merger/',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/plugins/openapi-merger/', 'b3d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/plugins/test-summary/',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/plugins/test-summary/', 'bd4'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/GradlePlugins/SECURITY',
        component: ComponentCreator('/edc-docs/docs/submodule/GradlePlugins/SECURITY', '9de'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/', 'a01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/CHANGELOG',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/CHANGELOG', '419'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/client-cli/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/client-cli/', 'f91'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/', '72d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-06-08-identity-hub/', '840'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-07-01-get-claims/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-07-01-get-claims/', '46a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-07-29-self-description/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-07-29-self-description/', 'ccc'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-08-12-code-quality-tooling/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/developer/decision-records/2022-08-12-code-quality-tooling/', 'f34'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/developer/openapi',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/developer/openapi', 'ebe'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/templates/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/templates/', 'c2b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/docs/templates/decision-record',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/docs/templates/decision-record', '07a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/extensions/store/sql/identity-hub-store-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/extensions/store/sql/identity-hub-store-sql/', 'a80'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/IdentityHub/system-tests/',
        component: ComponentCreator('/edc-docs/docs/submodule/IdentityHub/system-tests/', '64a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Publications/Dataspaces/Dataspace Context Model and Conceptual Architecture',
        component: ComponentCreator('/edc-docs/docs/submodule/Publications/Dataspaces/Dataspace Context Model and Conceptual Architecture', 'eed'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Publications/Dataspaces/Dataspaces Vocabulary and Operations',
        component: ComponentCreator('/edc-docs/docs/submodule/Publications/Dataspaces/Dataspaces Vocabulary and Operations', '305'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Publications/Dataspaces/Sovereign enterprise data sharing based on dataspaces',
        component: ComponentCreator('/edc-docs/docs/submodule/Publications/Dataspaces/Sovereign enterprise data sharing based on dataspaces', 'd93'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Publications/Identity Management/DID_EDC',
        component: ComponentCreator('/edc-docs/docs/submodule/Publications/Identity Management/DID_EDC', '55b'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Publications/White paper/A User Journey to Dataspaces',
        component: ComponentCreator('/edc-docs/docs/submodule/Publications/White paper/A User Journey to Dataspaces', '8c9'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/Publications/White paper/user_journey_images/',
        component: ComponentCreator('/edc-docs/docs/submodule/Publications/White paper/user_journey_images/', 'f67'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/', '5e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/CHANGELOG',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/CHANGELOG', 'bc2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/client-cli/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/client-cli/', '46d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/', 'eb3'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-09-cli/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-09-cli/', 'cc6'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-13-registration-service-api/', '977'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-15-state-machine/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-15-state-machine/', '1b2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-29-http-ports/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-06-29-http-ports/', 'adc'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-07-01-service-authentication/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-07-01-service-authentication/', '439'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-02-participant-status/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-02-participant-status/', 'b3a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-03-membership-credential/', '55a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-15-code-quality-tooling/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/decision-records/2022-08-15-code-quality-tooling/', '41d'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/developer/openapi',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/developer/openapi', 'adb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/templates/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/templates/', 'b3a'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/docs/templates/decision-record',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/docs/templates/decision-record', 'aa2'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/extensions/store/sql/participant-store-sql/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/extensions/store/sql/participant-store-sql/', '9cb'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/system-tests/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/system-tests/', '9ec'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/RegistrationService/system-tests/resources/webdid/',
        component: ComponentCreator('/edc-docs/docs/submodule/RegistrationService/system-tests/resources/webdid/', 'd92'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/TrustFrameworkAdoption/',
        component: ComponentCreator('/edc-docs/docs/submodule/TrustFrameworkAdoption/', '6c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/edc-docs/docs/submodule/TrustFrameworkAdoption/CONTRIBUTING',
        component: ComponentCreator('/edc-docs/docs/submodule/TrustFrameworkAdoption/CONTRIBUTING', '9c0'),
        exact: true
      },
      {
        path: '/edc-docs/docs/submodule/TrustFrameworkAdoption/extensions/common/trust-framework-policies/',
        component: ComponentCreator('/edc-docs/docs/submodule/TrustFrameworkAdoption/extensions/common/trust-framework-policies/', 'c9b'),
        exact: true
      }
    ]
  },
  {
    path: '/edc-docs/',
    component: ComponentCreator('/edc-docs/', 'e4f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
