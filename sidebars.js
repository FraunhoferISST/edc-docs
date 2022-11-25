/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually

    tutorialSidebar: [
        'README',
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                'hands-on',
                {
                    type: 'doc',
                    id: 'submodule/Connector/known_friends',
                    label: 'Adoptions',
                },
                {
                    type: 'doc',
                    id: 'submodule/Connector/CONTRIBUTING',
                    label: 'Contributing',
                },

            ],
        },
        {
            type: 'category',
            label: 'Components',

            items: [
                {
                    type: 'doc',
                    id: 'submodule/Connector/README',
                    label: 'Connector',
                },
                {
                    type: 'doc',
                    id: 'submodule/DataDashboard/README',
                    label: 'Data Dashboard',
                },
                {
                    type: 'doc',
                    id: 'submodule/FederatedCatalog/README',
                    label: 'Federated Catalog',
                },
                {
                    type: 'doc',
                    id: 'submodule/GradlePlugins/README',
                    label: 'Gradle Plugins',
                },
                {
                    type: 'doc',
                    id: 'submodule/IdentityHub/README',
                    label: 'Identity Hub',
                },
                {
                    type: 'doc',
                    id: 'submodule/RegistrationService/README',
                    label: 'Registration Service',
                },
                {
                    type: 'doc',
                    id: 'submodule/TrustFrameworkAdoption/README',
                    label: 'TrustFramework Adoption',
                },


            ],
        },
        {
            type: 'category',
            label: 'Documents',

            items: [
                {
                    type: 'doc',
                    id: 'submodule/Collateral/README',
                    label: 'Collateral',
                },
                'publications',
            ],
        },
    ],

};

module.exports = sidebars;