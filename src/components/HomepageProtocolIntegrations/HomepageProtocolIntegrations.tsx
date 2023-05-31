import React from 'react';

import {TwoRow} from "@site/src/components/Raw/Raw";
import styled from "@emotion/styled";
import {InternalLinkTile} from "@site/src/components/InternalLinkTile/InternalLinkTile";
import {Link} from "react-feather";

const ergoIntegrations = [
    {
        title: 'Ergo TypeScript SDK quick start',
        to: '/concepts/overview',
        Icon: Link,
    },
    {
        title: 'Ergo AMM protocol analytics API',
        to: '/concepts/overview',
        Icon: Link,
    },
]

const cardanoIntegrations = [
    {
        title: 'Cardano TypeScript SDK quick start',
        to: '/concepts/overview',
        Icon: Link,
    },
    {
        title: 'Haskell SDK quick start',
        to: '/concepts/overview',
        Icon: Link,
    },
    {
        title: 'Cardano AMM protocol analytics API',
        to: '/concepts/overview',
        Icon: Link,
    },
]

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  
  a:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const HomepageProtocolIntegrations = () => {
    return (
        <section>
            <TwoRow>
                <Flex>
                    <h2>Integrate your Cardano App</h2>
                    <p>Explore these guided tutorials to get started integrating with Spectrum Finance Cardano AMM in your App or dApp</p>
                    {cardanoIntegrations.map((props, idx) => (
                        <InternalLinkTile key={idx} {...props} />
                    ))}
                </Flex>
                <Flex>
                    <h2>Integrate your Ergo App</h2>
                    <p>Explore these guided tutorials to get started integrating with Spectrum Finance Ergo AMM in your App or dApp</p>
                    {ergoIntegrations.map((props, idx) => (
                        <InternalLinkTile key={idx} {...props} />
                    ))}
                </Flex>
            </TwoRow>
        </section>
    );
};
