import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import Button from '../Button';
import * as S from './header.styled';

function Header({ header }) {
  if (!header) return null;

  return (
    <S.HeaderWarp>
      {header.leftChild && <Button onClick={header.leftChildFn && header.leftChildFn} text={header.leftChild} type="DEFAULT" />}
      <S.HeaderDate>{header.title || ''}</S.HeaderDate>
      {header.rightChild && <Button onClick={header.rightChildFn && header.rightChildFn} text={header.rightChild} type="DEFAULT" />}
    </S.HeaderWarp>
  );
}

export default Header;
