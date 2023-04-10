import Link from '@docusaurus/core/lib/client/exports/Link'
import styled from '@emotion/styled'
import clsx from 'clsx'
import React from 'react'

import ExternalArrow from '../../../static/icons/external-arrow.svg'
import styles from './HomepageGuides.module.css'

const Guides = [
  {
    title: 'About Spectrum Finance',
    link: 'docs/about-spectrum-finance/intro',
    description: (
      <>Explore the first eUTxO DEX on the planet. Learn about the main principles and mission of the project.</>
    ),
  },
  {
    title: 'User guides',
    link: 'docs/user-guides/quick-start',
    description: <>Start you journey in the eUTxO DeFi space. Learn about how to use DEX without pain.</>,
  },
  {
    title: 'Protocol overview',
    link: 'docs/protocol-overview/intro',
    description: (
      <>Dive in the architecture of the protocol. What is pool, liquidity, swap and many more exciting things.</>
    ),
  },
]

const GuideSection = styled.section`
  display: grid;
  padding: 0 1rem 3rem;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  gap: 1rem;
`

function Guide({ Svg, title, description, link }) {
  return (
    <Link isNavLink={true} to={link} className={clsx('col col--4', styles.guide)}>
      <div className={clsx('text--center', 'padding-horiz--md', styles.wrapper)}>
        <ExternalArrow className={styles.arrow} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default function HomepageGuides() {
  return (
    <GuideSection>
      {Guides.map((props, idx) => (
        <Guide key={idx} {...props} />
      ))}
    </GuideSection>
  )
}
