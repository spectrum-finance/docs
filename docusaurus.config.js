// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Welcome to the Spectrum Finance Docs",
  tagline:
    "A non-custodial, decentralised exchange that allows a quick, effortless and secure transfer of liquidity between the Ergo and Cardano networks",
  url: "https://docs.spectrum.fi",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "Spectrum Labs, Inc",
  projectName: "spectrum-dex-docs",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ergolabs/ergodex-docs/tree/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ergolabs/ergodex-docs",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/fonts/fonts.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "38bc0b7dd098ab3180f761c798b36827",
        indexName: "spectrum",
        appId: "PM1ZVMEQRP",
      },
      navbar: {
        logo: {
          alt: "Spectrum Logo",
          src: "img/logo-spectrum.svg",
          srcDark: "img/logo-spectrum-dark.svg",
        },
        items: [
          {
            to: "/docs/about-spectrum-finance/intro",
            position: "left",
            label: "Explore Spectrum Finance",
          },
          {
            to: "/docs/protocol-overview/intro",
            label: "Protocol overview",
            position: "left",
          },
          {
            to: "/docs/user-guides/quick-start",
            label: "User guides",
            position: "left",
          },
          {
            to: "/docs/faq",
            label: "FAQ",
            position: "right",
          },
          {
            href: "https://github.com/ergolabs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "About Spectrum Finance",
                to: "/docs/about-spectrum-finance/intro",
              },
              {
                label: "Protocol",
                to: "/docs/protocol-overview/intro",
              },
              {
                label: "Quick start",
                to: "/docs/user-guides/quick-start",
              },
            ],
          },
          {
            title: "Ergo Network",
            items: [
              {
                label: "Contracts",
                href: "https://github.com/ergolabs/ergo-dex",
              },
              {
                label: "SDK",
                href: "https://github.com/ergolabs/ergo-dex-sdk-js",
              },
              {
                label: "Bots",
                href: "https://github.com/ergolabs/ergo-dex-backend",
              },
            ],
          },
          {
            title: "Cardano Network",
            items: [
              {
                label: "Contracts",
                href: "https://github.com/ergolabs/cardano-dex-contracts",
              },
              {
                label: "SDK",
                href: "https://github.com/ergolabs/cardano-dex-sdk-haskell",
              },
              {
                label: "Bots",
                href: "https://github.com/ergolabs/cardano-dex-backend",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/ErgoDex",
              },
              {
                label: "Telegram",
                href: "https://t.me/ergodex",
              },
              {
                label: "Discord",
                href: "https://discord.gg/zY2gmTYQVD",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/ergodex/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spectrum Labs, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
