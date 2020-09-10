import styled, { css } from 'styled-components';
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div``;

export const Breadcrumb = styled.div``;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookmarkLine)`
  ${iconCSS}
`;

export const Stats = styled.div``;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;

export const LinkButton = styled.a``;

export const GithubIcon = styled(FaGithub)`
  ${iconCSS}
`;
