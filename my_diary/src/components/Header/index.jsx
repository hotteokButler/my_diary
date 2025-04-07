import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import Button from '../Button';
import * as S from './header.styled';

function Header({ header }) {
  if (!header) return null;

  return (
    <S.HeaderWarp>
      <Button text={header.leftChild ? header.leftChild : <FaChevronLeft />} type="DEFAULT" />
      <S.HeaderDate>{header.title}</S.HeaderDate>
      <Button text={header.leftChild ? header.rightChild : <FaChevronRight />} type="DEFAULT" />
    </S.HeaderWarp>
  );
}

export default Header;
