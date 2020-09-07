import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;
`;

export const Row = styled.ul`
  display: flex;
  align-items: center;
  /* permite quebrar a linha */
  flex-wrap: wrap;
  margin: 20px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    > * {
      margin-right: 5px;
    }
  }
`;

// css global para os icones
const iconCss = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCss}
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  /* a partir do segundo li */
  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;
    overflow: hidden;
    /* para nao sair para fora da pagina, é colocado uma reticencias em caso de telas muito pequenas */
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCss}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCss}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCss}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCss}
`;
