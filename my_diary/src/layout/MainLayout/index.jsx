import React from 'react';

import Filter from '../../components/Filter';
import Header from '../../components/Header';
import * as S from './mainLayout.styled';

function MainLayout({ children, headerData }) {
  return (
    <S.MainWrapper>
      <S.MainCon>
        <Header header={headerData} />
        <Filter />

        {children}
      </S.MainCon>
    </S.MainWrapper>
  );
}

export default MainLayout;
