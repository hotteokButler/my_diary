import React from 'react';

import getEmotionImages from '../../util/get-emotion-images';
import * as S from './emotionElem.styled';

function EmotionElem({ id, emotion, isSelected, onClick }) {
  return (
    <S.EmotionElem $isSelected={isSelected} onClick={onClick}>
      <img src={getEmotionImages(id)} alt="" />
      <span>{emotion}</span>
    </S.EmotionElem>
  );
}

export default EmotionElem;
