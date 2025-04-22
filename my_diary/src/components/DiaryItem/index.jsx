import React from 'react';
import { useNavigate } from 'react-router';

import getEmotionImages from '../../util/get-emotion-images';
import getRandomPastelColor from '../../util/get-random-pastel-color';
import Button from '../Button';
import * as S from '../DiaryList/diaryList.styled';

function DiaryItem({ id, emotionId, createdDate, content }) {
  const navigate = useNavigate();

  if (!id) return null;

  return (
    <S.DiaryList key={id}>
      <S.DiaryImg $color={getRandomPastelColor()}>
        <img src={getEmotionImages(emotionId)} alt="" />
      </S.DiaryImg>
      <S.DiaryLiContents>
        <div onClick={() => navigate(`/diary/${id}`)}>
          <p>{new Date(createdDate).toLocaleDateString()}</p>
          <p>{content}</p>
        </div>
        <Button onClick={() => navigate(`/edit/${id}`)} text="수정하기" />
      </S.DiaryLiContents>
    </S.DiaryList>
  );
}

export default DiaryItem;
