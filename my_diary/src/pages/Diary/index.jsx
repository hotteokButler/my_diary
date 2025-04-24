import React, { useContext, useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';

import MainLayout from '../../layout/MainLayout';
import { DiaryStateContext } from '../../stores/DiaryStateContext';
import emotion_state_data from '../../stores/get-emotion-state';
import changeTitle from '../../util/change-page-title';
import getEmotionImages from '../../util/get-emotion-images';
import getStringedDate from '../../util/get-stringed-date';
import * as S from './diary.styled';

function Diary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useContext(DiaryStateContext) || null;

  const [diary, setDiary] = useState(null);

  useEffect(() => {
    changeTitle(`${id}번 일기`);
    data && setDiary(data.find((elem) => String(elem.id) === String(id)));
  }, [data]);

  if (!diary) return null;

  const headerData = {
    title: `${getStringedDate(new Date(diary.createdDate))} 기록`,
    leftChildFn: () => navigate(-1),
    leftChild: (
      <>
        <FaChevronLeft /> <span>뒤로 가기</span>
      </>
    ),
    rightChild: '수정하기',
    rightChildFn: () => {
      navigate(`/edit/${id}`);
    },
  };

  return (
    <MainLayout headerData={headerData}>
      <S.DiaryWrap>
        <S.DiaryCon>
          <S.DiarySubTit>오늘의 감정</S.DiarySubTit>
          <S.DiaryEmotion>
            <img src={getEmotionImages(diary.emotionId)} alt="" />
            <span>{emotion_state_data.find((elem) => String(elem.id) === String(diary.emotionId)).emotion}</span>
          </S.DiaryEmotion>
        </S.DiaryCon>
        <S.DiaryCon>
          <S.DiarySubTit>오늘의 일기</S.DiarySubTit>
          <S.DiaryTextCon>{diary.content}</S.DiaryTextCon>
        </S.DiaryCon>
      </S.DiaryWrap>
    </MainLayout>
  );
}

export default Diary;
