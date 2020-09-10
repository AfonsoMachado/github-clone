import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/AfonsoMachado'}>
          AfonsoMachado
        </Link>
        <span>/</span>

        <Link className={'reponame'} to={'/AfonsoMachado/react-calculator'}>
          react-calculator
        </Link>
      </Breadcrumb>

      <p>Implementation in ReactJS of a calculator based on macOS calculator</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>2</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/AfonsoMachado/calculator-react'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
