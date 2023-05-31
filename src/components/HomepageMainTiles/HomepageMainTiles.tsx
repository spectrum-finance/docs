import React, {FC} from 'react';
import clsx from 'clsx';
import styles from './HomepageMainTiles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

interface MainTilesProps {
    title: string;
    content: string;
    icon: string;
    link: string;
}

const mainTiles: MainTilesProps[] = [
    {
        title: "",
        content: "",
        icon: "",
        link: '',
    },
    {
        title: "",
        content: "",
        icon: "",
        link: '',
    },
]



const MainTile: FC<MainTilesProps> = ({icon, title, content, link}) => {
  return (
    <Link sensitive={false} isNavLink={true} to={link} className={clsx('col col--4', styles.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Link>
  );
}

export const HomepageMainTiles = () => {
  return (
    <section className={styles.guides}>
        {mainTiles.map((props, idx) => (
            <MainTile key={idx} {...props} />
        ))}
    </section>
  );
}
