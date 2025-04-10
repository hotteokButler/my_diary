import { useNavigate } from 'react-router';

import getEmotionImages from '../../util/get-emotion-images';
import getRandomPastelColor from '../../util/get-random-pastel-color';
import Button from '../Button';
import * as S from './diaryList.styled';

function DiaryList({ diaryList }) {
  const navigate = useNavigate();

  if (!diaryList || diaryList.length < 1) {
    return <S.NoDiaryList>등록된 다이어리가 없습니다.</S.NoDiaryList>;
  }

  return (
    <S.DiaryListWrap>
      {diaryList &&
        diaryList.map((list) => (
          <S.DiaryList key={list.id}>
            <S.DiaryImg $color={getRandomPastelColor()}>
              <img src={getEmotionImages(list.emotionID)} alt="" />
            </S.DiaryImg>
            <S.DiaryLiContents>
              <div>
                <p>{new Date(list.createdDate).toLocaleDateString()}</p>
                <p>{list.content}</p>
              </div>
              <Button onClick={() => navigate(`/edit/${list.id}`)} text="수정하기" />
            </S.DiaryLiContents>
          </S.DiaryList>
        ))}
    </S.DiaryListWrap>
  );
}

export default DiaryList;
