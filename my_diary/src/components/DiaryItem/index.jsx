import React from 'react';
import { useNavigate } from 'react-router';

import getEmotionImages from '../../util/get-emotion-images';
import getRandomPastelColor from '../../util/get-random-pastel-color';
import Button from '../Button';
import * as S from '../DiaryList/diaryList.styled';

function DiaryItem({ item }) {
  const navigate = useNavigate();

  if (!item) return null;

  return (
    <S.DiaryList key={item.id}>
      <S.DiaryImg $color={getRandomPastelColor()}>
        <img src={getEmotionImages(item.emotionID)} alt="" />
      </S.DiaryImg>
      <S.DiaryLiContents>
        <div>
          <p>{new Date(item.createdDate).toLocaleDateString()}</p>
          <p>{item.content}</p>
        </div>
        <Button onClick={() => navigate(`/edit/${item.id}`)} text="수정하기" />
      </S.DiaryLiContents>
    </S.DiaryList>
  );
}

export default DiaryItem;
