import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {HomepageActions} from '@site/src/components/HomepageActions/HomepageActions';
import {HomepageSocials} from "../components/HomepageSocials/HomepageSocials";
import {Glow} from "@site/src/components/Glow/Glow";
import {Divider} from "@site/src/components/Divider/Divider";
import OriginalSearchBar from '@theme-original/SearchBar'
import styled from "@emotion/styled";
import {HomepageOffchainActions} from "@site/src/components/HomepageOffchainActions/HomepageOffchainActions";
import {
  HomepageProtocolIntegrations
} from "@site/src/components/HomepageProtocolIntegrations/HomepageProtocolIntegrations";
import {HomepageForProjects} from "@site/src/components/HomepageForProjects/HomepageForProjects";
import {HomepageDevLinks} from "@site/src/components/HomepageDevLinks/HomepageDevLinks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  padding: 0 max(1rem, calc((100% - 1024px) / 2));
  padding-bottom: 128px;
`

const HideMedium = styled.div`
  margin-top: 2rem;
  @media (max-width: 960px) {
    display: none;
  }
`

const HomepageHeader = styled.header`
  display: flex;
  padding: 4rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`

const SubTitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  color: var(--ifm-font-color-secondary);
`

const HomepageMain = styled.main``

export default function Home() {
  return (
    <Layout
      title="Spectrum Finance Docs"
      description="Learn about Spectrum Finance cross-chain decentralised exchange (DEX)"
    >
      <Glow />
      <Container>
        <HomepageHeader>
            <Title>Welcome to Spectrum Finance Docs</Title>
            <SubTitle>Your Gateway to Trustless Cross-Chain DeFi</SubTitle>
            <HideMedium>
              <OriginalSearchBar />
            </HideMedium>
        </HomepageHeader>
        <HomepageMain>
          <HomepageActions />
          <HomepageOffchainActions />
          <HomepageProtocolIntegrations />
          <Divider />
          <HomepageForProjects />
          <Divider />
          <HomepageDevLinks />
          <Divider />
          <HomepageSocials />
        </HomepageMain>
      </Container>
    </Layout>
  );
}
