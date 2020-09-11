import React from 'react';
import { Link } from 'react-router-dom';
// Lista de possiveis lingaugens utilizadas
import { languages } from '../../data/languages';

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
  // verificando a existencia de uma linguagem registrada, se não exister, é usada a cor genérica
  let languageClass = languages.find((el) => el === language)
    ? language?.toLowerCase().replace(' ', '')
    : 'other';

  if (language === null) {
    languageClass = 'other';
    language = 'Text';
  }

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
