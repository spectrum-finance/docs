import React from 'react';
import {Server} from 'react-feather'
import {TwoRow} from "@site/src/components/Raw/Raw";
import {InternalLinkActionTile} from "@site/src/components/InternalLinkActionTile/InternalLinkActionTile";
import styled from "@emotion/styled";

const actions = [
    {
        title: 'Become a Cardano DEX off-chain operator',
        content: 'Learn how to start executing Cardano AMM orders and earn execution fees from each swap',
        Icon: Server,
        to: '/concepts/overview',
    },
    {
        title: 'Become an Ergo DEX off-chain operator',
        content: 'Learn how to start executing Ergo AMM orders and earn execution fees from each swap',
        Icon: Server,
        to: '/concepts/spectrum-network/overview',
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
