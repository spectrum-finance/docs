import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {HomepageMainTiles} from '@site/src/components/HomepageMainTiles/HomepageMainTiles';
import {HomepageSocials} from "../components/HomepageSocials/HomepageSocials";
import {Glow} from "@site/src/components/Glow/Glow";
import {Divider} from "@site/src/components/Divider/Divider";

const HomepageHeader = () => {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to Spectrum Finance Docs</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Spectrum Finance Docs"
      description="Learn about Spectrum Finance cross-chain decentralised exchange (DEX)"
    >
      <Glow />
      <div className={styles.wrapper}>
        <HomepageHeader />
        <main>
          <HomepageMainTiles />
          <Divider />
          <HomepageSocials />
        </main>
      </div>
    </Layout>
  );
}
