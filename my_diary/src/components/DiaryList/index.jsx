import DiaryItem from '../DiaryItem';
import * as S from './diaryList.styled';

function DiaryList({ diaryList }) {
  if (!diaryList || diaryList.length < 1) {
    return <S.NoDiaryList>등록된 다이어리가 없습니다.</S.NoDiaryList>;
  }

  return <S.DiaryListWrap>{diaryList && diaryList.map((item) => <DiaryItem key={item.id} {...item} />)}</S.DiaryListWrap>;
}

export default DiaryList;
