import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGuides.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from '../../../static/icons/external-arrow.svg'

const Guides = [
  {
    title: 'About Spectrum.DEX',
    link:  'docs/about-spectrumdex/intro',
    description: (
      <>
        Explore the first eUTxO DEX on the planet. Learn about the main principles and mission of the project.
      </>
    ),
  },
  {
    title: 'User guides',
    link: 'docs/user-guides/quick-start',
    description: (
      <>
          Start you journey in the eUTxO DeFi space. Learn about how to use DEX without pain.
      </>
    ),
  },
  {
    title: 'Protocol overview',
    link: 'docs/protocol-overview/intro',
    description: (
      <>
        Dive in the architecture of the protocol. What is pool, liquidity, swap and many more exciting things.
      </>
    ),
  },
];

function Guide({Svg, title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <ExternalArrow className={styles.arrow} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageGuides() {
  return (
    <section className={styles.guides}>
        {Guides.map((props, idx) => (
            <Guide key={idx} {...props} />
        ))}
    </section>
  );
}
