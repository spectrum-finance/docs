import React from 'react';
import clsx from 'clsx';
import styles from './HomepageSocials.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";
import ExternalArrow from "../../../static/icons/external-arrow.svg";

const socialsData = [
   {
        title: 'Twitter',
        link:  'https://twitter.com/spectrumlabs_',
        Icon:  require('../../../static/img/twitter.svg').default,
        description: 'Latest project status notifications!',
   },
   {
        title: 'Telegram',
        link: 'https://t.me/spectrum_labs_community',
        Icon:  require('../../../static/img/telegram.svg').default,
        description: 'Get more info about Spectrum Finance protocol.',
   },
   {
        title: 'Discord',
        link: 'https://discord.com/invite/zY2gmTYQVD',
        Icon:  require('../../../static/img/discord.svg').default,
        description: 'Discuss features, get support or contact devs.',
    },
    {
        title: 'Reddit',
        link: 'https://www.reddit.com/r/SpectrumLabs/',
        Icon:  require('../../../static/img/reddit.svg').default,
        description: 'Enjoy the subreddit community',
    },
];

const SocialsTile = ({Icon, title, description, link}) => {
  return (
    <Link sensitive={false} href={link} target="_blank" className={clsx('col col--4', styles.social)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <ExternalArrow className={styles.arrow} />
        <h3>{title}</h3>
        <Icon style={{ width: 100, height: 100, margin: '0 auto' }} />
        <p>{description}</p>
      </div>
    </Link>
  );
}

export const HomepageSocials = () => {
  return (
    <section className={styles.socials}>
        {socialsData.map((props, idx) => (
            <SocialsTile key={idx} {...props} />
        ))}
    </section>
  );
}
