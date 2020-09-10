import React, { useEffect, useState } from 'react';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { useParams } from 'react-router-dom';

import { APIUser, APIRepo } from '../../@types';

// Dados para exbir na aplicação
interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  // , capturando o username, sendo afonsomachado padrão
  const { username = 'AfonsoMachado' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      // dados do usuario
      fetch(`https://api.github.com/users/${username}`),
      // repositorios
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      // Armazenando as responses (array) um em cada variavel
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      // transformando dados recebidos em json
      const user = await userResponse.json();
      const repos = await reposResponse.json();

      // Para aparecer somente um numero limitado de repositorios na tela
      // "bagunça" os repositorios, tirando da ordem
      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      // lista com somente os 6 primeiros repositorios sorteados
      const slicedRepos = shuffledRepos.slice(0, 6);

      setData({
        user: user,
        repos: slicedRepos,
      });
    });
  }, [username]);

  // se houver erro na importação dos dados
  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  // Se os dados ainda nao foram carregados
  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />

            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
