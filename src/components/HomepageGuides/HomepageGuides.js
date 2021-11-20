import React from 'react';
import clsx from 'clsx';
import styles from './HomepageGuides.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const Guides = [
  {
    title: 'About ErgoDEX',
    link:  'docs/about-ergodex/intro',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'User guides',
    link: 'docs/user-guides/quick-start',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        aheaad and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Provide liquidity',
    link: 'docs/protocol-overview/intro',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Guide({Svg, title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles.guide)}>
      <div className="text--center padding-horiz--md">
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
