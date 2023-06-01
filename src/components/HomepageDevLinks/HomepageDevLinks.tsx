import React from 'react';
import {TwoRow} from "@site/src/components/Row/Row";
import {FlexColumn} from "@site/src/components/FlexColumn/FlexColumn";
import {GithubExternalLinkTile} from "@site/src/components/LinkTile/GithubExternalLinkTile";

const devLinksCardano = [
    {
        title: 'cardano-dex-contracts',
        href: 'https://github.com/spectrum-finance/cardano-dex-contracts',
    },
    {
        title: 'cardano-dex-backend',
        href: 'https://github.com/spectrum-finance/cardano-dex-backend',
    },
    {
        title: 'cardano-dex-sdk-haskell',
        href: 'https://github.com/spectrum-finance/cardano-dex-sdk-haskell',
    },
    {
        title: 'cardano-dex-sdk-js',
        href: 'https://github.com/spectrum-finance/cardano-dex-sdk-js',
    },
]
const devLinksErgo = [
    {
        title: 'ergo-dex-contracts',
        href: 'https://github.com/spectrum-finance/ergo-dex',
    },
    {
        title: 'ergo-dex-backend',
        href: 'https://github.com/spectrum-finance/ergo-dex-backend',
    },
    {
        title: 'ergo-sdk-js',
        href: 'https://github.com/spectrum-finance/ergo-sdk-js',
    },
    {
        title: 'ergo-dex-sdk-js',
        href: 'https://github.com/spectrum-finance/ergo-dex-sdk-js',
    },
    {
        title: 'ergo-analytics',
        href: 'https://github.com/spectrum-finance/ergo-analytics',
    },
]

export const HomepageDevLinks = () => {
    return (
        <section>
            <h2>Dev Links</h2>
            <TwoRow>
                <FlexColumn>
                    <h2>Cardano related</h2>
                    {devLinksCardano.map((props, idx) => (
                        <GithubExternalLinkTile key={idx} {...props} />
                    ))}
                </FlexColumn>
                <FlexColumn>
                    <h2>Ergo related</h2>
                    {devLinksErgo.map((props, idx) => (
                        <GithubExternalLinkTile key={idx} {...props} />
                    ))}
                </FlexColumn>
            </TwoRow>
        </section>
    );
};
