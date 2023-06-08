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
    onBrokenLinks: 'ignore',
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
                    customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/colors.css')],
                },
            },
        ],
    ],

    themeConfig: {
        algolia: {
            // The application ID provided by Algolia
            appId: 'PM1ZVMEQRP',

            // Public API key: it is safe to commit it
            apiKey: 'c988cb79470522922539697deb7367cd',

            indexName: 'spectrum',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            // externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Algolia search parameters
            searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: 'search',

            //... other Algolia params
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
                    to: '/cardano-amm/ts-sdk',
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
                    to: '/ergo-amm/ts-sdk',
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
                    to: '/concepts/spectrum-network/white-paper',
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
