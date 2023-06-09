import React from 'react';
import {Server} from 'react-feather'
import {TwoRow} from "@site/src/components/Row/Row";
import {InternalLinkActionTile} from "@site/src/components/LinkTile/InternalLinkActionTile";
import styled from "@emotion/styled";

const actions = [
    {
        title: 'Become a Cardano DEX Off-chain Operator',
        content: 'Learn how to start executing Cardano AMM orders and earn execution fees from each swap',
        Icon: Server,
        to: '/cardano-amm/off-chain-execution-bots',
        soon: true,
    },
    {
        title: 'Become an Ergo DEX Off-chain Operator',
        content: 'Learn how to start executing Ergo AMM orders and earn execution fees from each swap',
        Icon: Server,
        to: '/ergo-amm/off-chain-execution-bots',
    },
]

const Section = styled.section`
  margin-bottom: 5rem;
`

export const HomepageOffchainActions = () => {
  return (
      <Section>
          <TwoRow>
              {actions.map((props, idx) => (
                  <InternalLinkActionTile key={idx} {...props} />
              ))}
          </TwoRow>
      </Section>
  );
}
