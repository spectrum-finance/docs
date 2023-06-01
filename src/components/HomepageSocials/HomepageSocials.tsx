import React from 'react';
import styled from "@emotion/styled";
import {Row} from "@site/src/components/Row/Row";

import TwitterLogo from '@site/static/icons/twitter-mark.svg'
import TelegramLogo from '@site/static/icons/telegram-mark.svg'
import DiscordLogo from '@site/static/icons/discord-mark.svg'


const socialsData = [
    {
        title: 'Discord',
        href: 'https://discord.com/invite/zY2gmTYQVD',
        Icon:  DiscordLogo,
        content: 'Join our Discord Community',
    },
    {
        title: 'Twitter',
        href:  'https://twitter.com/spectrumlabs_',
        Icon:  TwitterLogo,
        content: 'Stay informed about the latest updates',
    },
    {
        title: 'Telegram',
        href: 'https://t.me/spectrum_labs_community',
        Icon:  TelegramLogo,
        content: 'Join our Telegram Community',
    },
    // {
    //     title: 'Reddit',
    //     href: 'https://www.reddit.com/r/SpectrumLabs/',
    //     Icon:  require('../../../static/icons/reddit-mark.svg').default,
    //     content: 'Enjoy the subreddit community',
    // },
];


const SocialsTileStyled = styled.a`
  cursor: pointer;
  border: 1px solid var(--ifm-toc-border-color);
  border-radius: var(--ifm-border-radius);
  padding: 1rem;
  transition: all .2s ease-in-out;

  p, h3 {
    margin: 0;
  }

  .social-icon {
    height: 96px;
    width: 96px;
    margin-right: 16px;
  }

  &:hover {
    text-decoration: none;
    transform: scale(1.02);
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const SocialsTile = ({Icon, title, content, href}) => {
    return (
        <SocialsTileStyled href={href} target="_blank">
            <Flex>
                <Icon className="social-icon" />
                <div>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </Flex>
        </SocialsTileStyled>
    )
}

export const HomepageSocials = () => {
  return (
    <section>
        <Row>
            {socialsData.map((props, idx) => (
                <SocialsTile key={idx} {...props} />
            ))}
        </Row>

    </section>
  );
}
