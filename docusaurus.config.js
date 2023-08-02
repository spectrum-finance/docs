// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Spectrum Finance',
    tagline: 'An open-source DEX built on top of trustless cross-chain messaging protocol',
    url: 'https://docs.spectrum.fi',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.svg',
    projectName: 'spectrum-finance-docs',

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: 'https://github.com/spectrum-finance/docs/tree/master/',
                    includeCurrentVersion: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    path: 'blog/',
                    blogTitle: 'Engineering Blog',
                    blogSidebarCount: 0,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        algolia: {
            appId: 'PM1ZVMEQRP',
            apiKey: 'c4845f3e80f1afb88561078aedc2b99c',
            indexName: 'spectrum',
        },
        announcementBar: {
            id: 'announcementBar-2', // Increment on change
            content: `⚠️ Note that the cross-chain solution is in progress. For updates, visit <a target="_blank" rel="noopener noreferrer" href="https://github.com/spectrum-finance/spectrum">GitHub</a> or join <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SpectrumLabs_">Twitter</a>`,
        },
        navbar: {
            title: '',
            logo: {
                alt: 'Logo',
                src: 'img/spectrum-finance-logo-light.svg',
                srcDark: 'img/spectrum-finance-logo-dark.svg',
            },
            items: [
                // Left side header
                {
                    to: '/concepts/overview',
                    position: 'left',
                    label: 'Concepts',
                },
                {
                    to: '/concepts/spectrum-network/overview',
                    position: 'left',
                    label: 'Spectrum Network',
                },
                {
                    label: 'Cardano AMM',
                    type: 'dropdown',
                    position: 'left',
                    items: [
                        {
                            to: '/cardano-amm/off-chain-execution-bots',
                            label: 'Off-chain execution',
                        },
                        // {
                        //     to: '/cardano-amm/analytics-api',
                        //     label: 'Analytics API',
                        // },
                        // {
                        //     to: '/cardano-amm/ts-sdk',
                        //     label: 'TypeScript SDK',
                        // },
                        // {
                        //     to: '/cardano-amm/haskell-sdk',
                        //     label: 'Haskell SDK',
                        // },
                    ]
                },
                {
                    label: 'Ergo AMM',
                    position: 'left',
                    type: 'dropdown',
                    items: [
                        {
                            to: '/ergo-amm/off-chain-execution-bots',
                            label: 'Off-chain execution',
                        },
                        {
                            to: '/ergo-amm/analytics-api',
                            label: 'Analytics API',
                        },
                        {
                            to: '/ergo-amm/for-projects/launch-liquidity-pool',
                            label: 'For projects',
                        },
                        // {
                        //     to: '/ergo-amm/ts-sdk',
                        //     label: 'TypeScript SDK',
                        // },
                    ]
                },

                // Right side header
                {
                    // href: 'https://spectrum.fi/spectrum-white-paper.pdf',
                    href: 'https://spectrum.fi/spectrum_wp_v1.pdf',
                    position: 'right',
                    label: 'White Paper'
                },
                {
                    href: 'https://github.com/spectrum-finance/docs',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
};

module.exports = config;
