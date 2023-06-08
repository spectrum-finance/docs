import React from "react";
import {ExternalLinkTile} from "@site/src/components/LinkTile/ExternalLinkTile";
import GitHubLogo from "@site/static/icons/github-mark.svg"
import styled from "@emotion/styled";

const StyledGitHubLogo = styled(GitHubLogo)`
  width: 24px;
  height: 24px;
  color: var(--ifm-heading-color);
  
  path {
    fill: var(--ifm-heading-color);
  }
`

export const GithubExternalLinkTile = (props) => {
    return <ExternalLinkTile Icon={StyledGitHubLogo} {...props} />
}