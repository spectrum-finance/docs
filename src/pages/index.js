import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageGuides from "../components/HomepageGuides/HomepageGuides";
import HomepageSocials from "../components/HomepageSocials/HomepageSocials";
import GlowLight from "@site/static/img/glow-v2.png";

function Glow() {
  return (
    <div className={styles.glow}>
      <img src={GlowLight} />
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
