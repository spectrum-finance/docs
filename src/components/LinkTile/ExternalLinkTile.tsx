import React, {ComponentType, FC, SVGProps} from "react";
import {Icon, ExternalLink} from "react-feather";
import styled from "@emotion/styled";

interface TilesProps {
    title: string;
    content?: string;
    Icon?: Icon | ComponentType<SVGProps<SVGSVGElement>>;
    href: string;
}

const LinkTile = styled.a`
  cursor: pointer;
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  & > svg {
    color: var(--ifm-color-secondary);
    margin: 0;
  }
`

const TitleLine = styled.div<TitleLineProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.content ? '8px' : '0px')};
`

export const ExternalLinkTile: FC<TilesProps> = ({Icon, title, content, href, ...props}) => {
    return (
        <LinkTile href={href} target="_blank" {...props}>
            <TitleContainer>
                <TitleLine content={content}>
                    {Icon && <Icon />}
                    <h3>{title}</h3>
                </TitleLine>
                <ExternalLink />
            </TitleContainer>
            {content && <p>{content}</p>}
        </LinkTile>
    );
}