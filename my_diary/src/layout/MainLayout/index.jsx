import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import * as S from './mainLayout.styled';

function MainLayout({ children }) {
  return (
    <S.MainWrapper>
      <S.MainCon>
        <Header>
          <Button text="DEFAULT" type="DEFAULT" />
          <Button text="POSITIVE" type="POSITIVE" />
          <Button text="NEGATIVE" type="NEGATIVE" />
        </Header>

        {children}
      </S.MainCon>
    </S.MainWrapper>
  );
}

export default MainLayout;
