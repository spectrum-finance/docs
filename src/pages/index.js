import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import OriginalSearchBar from '@theme-original/SearchBar'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageGuides from "../components/HomepageGuides/HomepageGuides";
import HomepageSocials from "../components/HomepageSocials/HomepageSocials";

function Glow() {
  return (
    <div className={styles.glow}>
      <div className={styles.glowImage}/>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Spectrum Finance Docs`}
      description="Learn the pure and decentralized cross-chain technology - Spectrum Finance protocol, user guides, smart contracts, SDKs and more"
    >
      <Glow />
      <div className={styles.wrapper}>
        <HomepageHeader />
        <main>
          <div className={styles.search}>
            <OriginalSearchBar />
          </div>
          <HomepageGuides />
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Join the community
          </h2>
          <HomepageSocials />
        </main>
      </div>
    </Layout>
  );
}
