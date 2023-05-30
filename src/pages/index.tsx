import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageGuides from '../components/HomepageGuides/HomepageGuides';
import HomepageSocials from "../components/HomepageSocials/HomepageSocials";
import Prism from './prism.svg';
import {Glow} from "@site/src/components/Glow/Glow";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Spectrum | Documentation`}
      description="Learn about Spectrum Finance cross-chain decentralised exchange (DEX)"
    >
      <Glow />
      <div className={styles.wrapper}>
        <HomepageHeader />
        <main>
          <HomepageGuides />
          <h2 style={{display: 'flex', justifyContent: 'center'}}>Join the community</h2>
          <HomepageSocials />
        </main>
      </div>
    </Layout>
  );
}
