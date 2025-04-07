import React from 'react';

import Button from '../Button';
import * as S from './header.styled';

function Header() {
  const date = new Date();
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  return (
    <S.HeaderWarp>
      <Button text="&lt;" type="DEFAULT" />
      <S.HeaderDate>{today}</S.HeaderDate>
      <Button text="&gt;" type="DEFAULT" />
    </S.HeaderWarp>
  );
}

export default Header;
