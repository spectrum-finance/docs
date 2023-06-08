import React from 'react';

import {TwoRow} from "@site/src/components/Row/Row";
import {InternalLinkTile} from "@site/src/components/LinkTile/InternalLinkTile";
import {FlexColumn} from "@site/src/components/FlexColumn/FlexColumn";

const ergoIntegrations = [
    {
        title: 'Ergo AMM Analytics API',
        to: '/ergo-amm/analytics-api',
    },
    {
        title: 'Ergo AMM TypeScript SDK',
        to: '/',
        soon: true,
    },
]

const cardanoIntegrations = [
    {
        title: 'Cardano AMM Analytics API',
        to: '/',
        soon: true,
    },
    {
        title: 'Cardano AMM TypeScript SDK',
        to: '/',
        soon: true,
    },
    {
        title: 'Haskell SDK',
        to: '/',
        soon: true,
    },
]

export const HomepageProtocolIntegrations = () => {
    return (
        <section>
            <TwoRow>
                <FlexColumn>
                    <h2>Integrate your Cardano App</h2>
                    <p>Explore these guided tutorials to get started integrating with Spectrum Finance Cardano AMM in your App or dApp</p>
                    {cardanoIntegrations.map((props, idx) => (
                        <InternalLinkTile key={idx} {...props} />
                    ))}
                </FlexColumn>
                <FlexColumn>
                    <h2>Integrate your Ergo App</h2>
                    <p>Explore these guided tutorials to get started integrating with Spectrum Finance Ergo AMM in your App or dApp</p>
                    {ergoIntegrations.map((props, idx) => (
                        <InternalLinkTile key={idx} {...props} />
                    ))}
                </FlexColumn>
            </TwoRow>
        </section>
    );
};
