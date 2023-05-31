import React from 'react';
import {Book, Globe} from 'react-feather'
import {TwoRow} from "@site/src/components/Raw/Raw";
import {InternalLinkActionTile} from "@site/src/components/InternalLinkActionTile/InternalLinkActionTile";

const actions = [
    {
        title: 'What is Spectrum Finance?',
        content: 'Learn the basics of Spectrum Finance cross-chain DEX, its protocols and roadmap',
        Icon: Book,
        to: '/concepts/overview',
    },
    {
        title: 'What is Spectrum Network?',
        content: 'Learn how we are aimed to achieve decentralized cross-chain interoperability',
        Icon: Globe,
        to: '/concepts/spectrum-network/overview',
    },
]

export const HomepageActions = () => {
  return (
      <section>
          <TwoRow>
              {actions.map((props, idx) => (
                  <InternalLinkActionTile key={idx} {...props} />
              ))}
          </TwoRow>
      </section>
  );
}
