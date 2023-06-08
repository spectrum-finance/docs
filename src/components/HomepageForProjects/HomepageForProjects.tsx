import React from 'react';
import {TwoRow} from "@site/src/components/Row/Row";
import {FlexColumn} from "@site/src/components/FlexColumn/FlexColumn";
import {InternalLinkTile} from "@site/src/components/LinkTile/InternalLinkTile";

const cardanoForProjectsLinks = [
    {
        title: 'Launch a Liquidity Pool',
        content: 'Establish a liquidity pool to promote unrestricted trading of your Cardano native token',
        to: '/cardano-amm/for-projects/launch-liquidity-pool',
        soon: true,
    },
    // {
    //     title: 'Launch a Yield Farming Program',
    //     content: 'Discover the process of initiating a dedicated Yield Farming program powered by smart contracts',
    //     to: '/concepts/overview',
    // },
    {
        title: 'Whitelist your token',
        content: 'Provide the details about your token to guarantee its visibility to all users within the interface',
        to: '/cardano-amm/for-projects/token-whitelist',
        soon: true,
    },
]
const ergoForProjectsLinks = [
    {
        title: 'Launch a Liquidity Pool',
        content: 'Establish a liquidity pool to promote unrestricted trading of your Ergo native token',
        to: '/ergo-amm/for-projects/launch-liquidity-pool',
        soon: true,
    },
    {
        title: 'Lock Liquidity',
        content: 'Ensure the security and confidence of your users by safeguarding liquidity to prevent rug pulls',
        to: '/ergo-amm/for-projects/lock-liquidity',
    },
    {
        title: 'Launch a Yield Farming Program',
        content: 'Discover the process of initiating a dedicated Yield Farming program powered by smart contracts',
        to: '/ergo-amm/for-projects/launch-yield-farming',
    },
    {
        title: 'Whitelist your token',
        content: 'Provide the details about your token to guarantee its visibility to all users within the interface',
        to: '/ergo-amm/for-projects/token-whitelist',
    },
]

export const HomepageForProjects = () => {
    return (
        <section>
            <h2>For projects</h2>
            <p>Explore the potential that Spectrum Finance offers for your Ergo or Cardano initiative</p>
            <TwoRow>
                <FlexColumn>
                    <h3>Cardano</h3>
                    {cardanoForProjectsLinks.map((props, idx) => (
                        <InternalLinkTile key={idx} {...props} />
                    ))}
                </FlexColumn>
                <FlexColumn>
                    <h3>Ergo</h3>
                    {ergoForProjectsLinks.map((props, idx) => (
                        <InternalLinkTile key={idx} {...props} />
                    ))}
                </FlexColumn>
            </TwoRow>
        </section>
    );
};