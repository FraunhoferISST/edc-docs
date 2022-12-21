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
    component: ComponentCreator('/edc-docs/docs', '3bc'),
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
