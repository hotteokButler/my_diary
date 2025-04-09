import React from 'react';
import { useMatch } from 'react-router';

import Filter from '../../components/Filter';
import Header from '../../components/Header';
import * as S from './mainLayout.styled';

function MainLayout({ children, headerData }) {
  const match = useMatch('/') || null;

  return (
    <S.MainWrapper>
      <S.MainCon>
        <Header header={headerData} />
        {match && <Filter />}

        {children}
      </S.MainCon>
    </S.MainWrapper>
  );
}

export default MainLayout;
