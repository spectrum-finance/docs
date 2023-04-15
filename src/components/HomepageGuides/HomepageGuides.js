import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGuides.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const Guides = [
  {
    title: (<>What is<br/> Spectrum Finance?</>),
    link:  'docs/about-spectrum-finance/intro',
    description: "Learn about the core concepts of Spectrum Finance and cross-chain technology",
  },
  {
    title: (<>Protocol<br/> overview</>),
    link: 'docs/protocol-overview/intro',
    description: (
      <>
        Dive in the architecture of the protocol. What is pool, liquidity, swap and many more exciting things.
      </>
    ),
  },
  {
    title: (<>User<br/> guides</>),
    link: 'docs/user-guides/quick-start',
    description: "Start you journey in the eUTxO DeFi space. Learn about how to use DEX without pain.",
  },
];

function Guide({ title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col', styles.guide)}>
      <div className={clsx( 'padding-horiz--md', styles.wrapper)}>
        <h2>{title}</h2>
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
