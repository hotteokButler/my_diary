import React from 'react';

import * as S from './header.styled';

function Header({ children }) {
  return <S.HeaderWarp>{children}</S.HeaderWarp>;
}

export default Header;
