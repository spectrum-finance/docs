import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styled from '@emotion/styled'
import Layout from '@theme/Layout'
import OriginalSearchBar from '@theme-original/SearchBar'
import clsx from 'clsx'
import React from 'react'

import HomepageGuides from '../components/HomepageGuides/HomepageGuides'
import HomepageSocials from '../components/HomepageSocials/HomepageSocials'
import Prism from './prism.svg'

function Glow() {
  return (
    <div>
      <Prism />
    </div>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding: 0 max(1rem, calc((100% - 1024px) / 2));
  margin: 0 auto;
`

export default function Home() {
  return (
    <Layout title="Spectrum Finance Docs" description="Protocol overview, user guides and technical documentation">
      <Glow />
      <Wrapper>
        <HomepageHeader />
        <main>
          <OriginalSearchBar />
          <HomepageGuides />
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>Join the community</h2>
          <HomepageSocials />
        </main>
      </Wrapper>
    </Layout>
  )
}
