import React from 'react';

import * as S from './mainLayout.styled';

function MainLayout({ children }) {
  return (
    <S.MainWrapper>
      <S.MainCon>{children}</S.MainCon>
    </S.MainWrapper>
  );
}

export default MainLayout;
