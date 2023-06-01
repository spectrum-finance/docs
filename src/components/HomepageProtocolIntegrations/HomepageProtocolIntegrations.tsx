import React from 'react';

import {TwoRow} from "@site/src/components/Row/Row";
import styled from "@emotion/styled";
import {InternalLinkTile} from "@site/src/components/InternalLinkTile/InternalLinkTile";
import {Link} from "react-feather";
import {FlexColumn} from "@site/src/components/FlexColumn/FlexColumn";

const ergoIntegrations = [
    {
        title: 'Ergo TypeScript SDK Quick Start',
        to: '/concepts/overview',
    },
    {
        title: 'Ergo AMM Analytics API',
        to: '/concepts/overview',
    },
]

const cardanoIntegrations = [
    {
        title: 'Cardano TypeScript SDK Quick Start',
        to: '/concepts/overview',
    },
    {
        title: 'Haskell SDK Quick Start',
        to: '/concepts/overview',
    },
    {
        title: 'Cardano AMM Analytics API',
        to: '/concepts/overview',
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
