// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Welcome to the ErgoDex Docs',
    tagline: 'A non-custodial, decentralised exchange that allows a quick, effortless and secure transfer of liquidity between the Ergo and Cardano networks',
    url: 'https://docs.ergodex.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ergodex',
    projectName: 'ergodex-docs',

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/ergolabs/ergodex-docs/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/ergolabs/ergodex-docs',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                    srcDark: 'img/logo-dark.svg',
                },
                items: [
                    {
                        to: '/docs/about-ergodex/intro',
                        position: 'left',
                        label: 'Explore ErgoDEX',
                    },
                    {to: '/docs/protocol-overview/intro', label: 'Protocol overview', position: 'left'},
                    {to: '/docs/user-guides/quick-start', label: 'User guides', position: 'left'},
                    {
                        to: '/docs/faq',
                        label: 'FAQ',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/ergolabs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'About ErgoDEX',
                                to: '/docs/about-ergodex/intro',
                            },
                            {
                                label: 'Protocol',
                                to: '/docs/protocol-overview/intro',
                            },
                            {
                                label: 'Quick start',
                                to: '/docs/user-guides/quick-start',
                            },
                        ],
                    },
                    {
                        title: 'Ergo Network',
                        items: [
                            {
                                label: 'Contracts',
                                href: 'https://github.com/ergolabs/ergo-dex',
                            },
                            {
                                label: 'SDK',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                            {
                                label: 'Bots',
                                href: 'https://github.com/ergolabs/ergo-dex-backend',
                            },
                        ],
                    },
                    {
                        title: 'Cardano Network',
                        items: [
                            {
                                label: 'Contracts',
                                href: 'https://github.com/ergolabs/cardano-dex-contracts',
                            },
                            {
                                label: 'SDK',
                                href: 'https://github.com/ergolabs/cardano-dex-sdk-haskell',
                            },
                            {
                                label: 'Bots',
                                href: 'https://github.com/ergolabs/cardano-dex-backend'
                            }
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/ErgoDex',
                            },
                            {
                                label: 'Telegram',
                                href: 'https://t.me/ergodex',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/6MFFG4Fn4Y',
                            },
                            {
                                label: 'Reddit',
                                href: 'https://www.reddit.com/r/ergodex/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} ErgoLabs`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
