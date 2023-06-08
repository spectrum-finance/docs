import React, {FC} from "react";
import Link from "@docusaurus/core/lib/client/exports/Link";
import {Link as LinkIcon, Icon} from "react-feather";
import styled from "@emotion/styled";

interface TilesProps {
    title: string;
    content?: string;
    Icon?: Icon;
    to: string;
    soon?: boolean;
}

const LinkTile = styled(Link)<{soon: boolean}>`
  border: 1px solid var(--ifm-toc-border-color);
  border-radius: var(--ifm-border-radius);
  padding: 1rem;
  transition: all .2s ease-in-out;
  position: relative;
  
  p, h3 {
    margin: 0;
  }
  
  svg {
    color: var(--spectrum-primary-color);
    margin-right: 8px;
  }

  &::after {
    display: ${props => props.soon ? 'block' : 'none'};
    content: "Soon";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    color: rgb(255, 255, 255);
    position: absolute;
    top: -8px;
    right: -16px;
    background: linear-gradient(71.04deg, rgb(59, 65, 197) 0%, rgb(169, 129, 187) 49%, rgb(255, 124, 50) 100%);
    padding: 1px 4px;
    border-radius: 6px;
    z-index: 100;
    transform: rotate(30deg);
  }
  
  &:hover {
    text-decoration: none;
    transform: scale(1.02);
    border-color: var(--spectrum-primary-color);
  }
`

interface TitleLineProps {
    content: string;
}

const TitleLine = styled.div<TitleLineProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.content ? '8px' : '0px')};
`

export const InternalLinkTile: FC<TilesProps> = ({Icon, title, content, to, soon, ...props}) => {
    return (
        <LinkTile soon={soon} sensitive={false} isNavLink={true} to={to} {...props}>
            <TitleLine content={content}>
                {Icon ? <Icon /> : <LinkIcon />}
                <h3>{title}</h3>
            </TitleLine>
            {content && <p>{content}</p>}
        </LinkTile>
    );
}