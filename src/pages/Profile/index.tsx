import React from 'react';

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

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">40</span>
    </div>
  );

  return (
    <Container>
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
