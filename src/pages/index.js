import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageGuides from '../components/HomepageGuides/HomepageGuides';
import HomepageSocials from "../components/HomepageSocials/HomepageSocials";

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
      title={`ErgoDex | Documentation`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.wrapper}>
        <HomepageHeader />
        <main>
          <HomepageGuides />
          <HomepageSocials />
        </main>
      </div>
    </Layout>
  );
}
