import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
} from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  // verificando a existencia de uma liaguagem registrada
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          {/* atalho para nome do repositorio */}
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </Topside>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
