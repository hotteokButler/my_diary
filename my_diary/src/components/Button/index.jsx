import React from 'react';

import * as S from './button.styled';

function Button({ text, type, onClick }) {
  return (
    <S.Button onClick={onClick} $type={type}>
      {text}
    </S.Button>
  );
}

export default Button;
