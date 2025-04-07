import React from 'react';

import Header from '../../components/Header';
import * as S from './mainLayout.styled';

function MainLayout({ children }) {
  return (
    <S.MainWrapper>
      <S.MainCon>
        <Header />

        {children}
      </S.MainCon>
    </S.MainWrapper>
  );
}

export default MainLayout;
