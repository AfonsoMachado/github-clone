import React, { useEffect } from 'react';

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

const Profile: React.FC = () => {
  // , capturando o username, sendo afonsomachado padrão
  const { username = 'AfonsoMachado' } = useParams();

  useEffect(() => {
    Promise.all([
      // dados do usuario
      fetch(`https://api.github.com/users/${username}`),
      // repositorios
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      console.log(await responses[0].json(), await responses[1].json());
    });
  }, [username]);

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">40</span>
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
            username={'AfonsoMachado'}
            name={'Afonso Machado'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/11397955?v=4'}
            followers={15}
            following={32}
            company={undefined}
            location={'Feira de Santana, Bahia, Brazil'}
            email={'afonsosmachado@gmail.com'}
            blog={'https://www.linkedin.com/in/afonsomachado/'}
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
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={'AfonsoMachado'}
                  reponame={'calculator-react'}
                  description={
                    'Implementation in ReactJS of a calculator based on macOS calculator'
                  }
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={3}
                  forks={4}
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
