import React, {FC} from "react";
import Link from "@docusaurus/core/lib/client/exports/Link";
import {Icon} from "react-feather";
import styled from "@emotion/styled";

interface TilesProps {
    title: string;
    content?: string;
    Icon?: Icon;
    to: string;
}

const LinkTile = styled(Link)`
  border: 1px solid var(--ifm-toc-border-color);
  border-radius: var(--ifm-border-radius);
  padding: 1rem;
  transition: all .2s ease-in-out;
  
  p, h3 {
    margin: 0;
  }
  
  svg {
    color: var(--spectrum-primary-color);
    margin-right: 8px;
  }
  
  &:hover {
    text-decoration: none;
    transform: scale(1.02);
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

export const InternalLinkTile: FC<TilesProps> = ({Icon, title, content, to, ...props}) => {
    return (
        <LinkTile sensitive={false} isNavLink={true} to={to} {...props}>
            <TitleLine content={content}>
                {Icon && <Icon />}
                <h3>{title}</h3>
            </TitleLine>
            {content && <p>{content}</p>}
        </LinkTile>
    );
}