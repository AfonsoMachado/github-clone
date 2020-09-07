import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'afonsomachado'}
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

        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
