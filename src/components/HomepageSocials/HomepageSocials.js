import React from 'react';
import clsx from 'clsx';
import styles from './HomepageSocials.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const TwitterIcon = ({ style }) => {
    const Icon = require('../../../static/img/twitter.svg').default;

    return (
        <div style={style} className={styles.twitter}>
            <Icon style={{ width: 66.67, height: 66.67 }}/>
        </div>
    )
}

const Socials = [
  {
    title: 'Twitter',
    link:  'docs/about-ergodex/intro',
    Icon:  TwitterIcon,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Telegram',
    link: 'docs/user-guides/quick-start',
    Icon:  require('../../../static/img/telegram.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        aheaad and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Discord',
    link: 'docs/protocol-overview/intro',
    Icon:  require('../../../static/img/discord.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Guide({Icon, title, description, link}) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles.social)}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <Icon style={{ width: 100, height: 100, margin: '0 auto' }} />
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageSocials() {
  return (
    <section className={styles.socials}>
        {Socials.map((props, idx) => (
            <Guide key={idx} {...props} />
        ))}
    </section>
  );
}
