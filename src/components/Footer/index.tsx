import { formatRFC3339 } from 'date-fns/esm/fp';

import React from 'react';

import { Container, Line, GithubLogo } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Line />
      <GithubLogo />
    </Container>
  );
};

export default Footer;
