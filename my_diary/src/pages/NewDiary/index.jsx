import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import EmotionElem from '../../components/EmotionElem';
import MainLayout from '../../layout/MainLayout';
import emotion_state_data from '../../stores/get-emotion-state';
import getStringedDate from '../../util/get-stringed-date';
import * as S from './newDiary.styled';

function NewDiary() {
  const [selectedEmotion, setSelectedEmotion] = useState(1);
  const [input, setInput] = useState({ emotionID: 1, createdDate: new Date(), content: '' });

  const checkSelectedEmotion = (id) => {
    setSelectedEmotion(id);
  };

  const navigate = useNavigate();
  const headerData = {
    title: '새 일기 쓰기',
    leftChildFn: () => navigate(-1),
    leftChild: <FaChevronLeft />,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <MainLayout headerData={headerData}>
      <S.NewDiaryWrap onSubmit={handleSubmit}>
        <S.NewDiaryCon>
          <h4>오늘의 날짜</h4>
          <label htmlFor="today_date">
            <input type="date" name="today_date" id="today_date" defaultValue={getStringedDate(input.createdDate)} />
          </label>
        </S.NewDiaryCon>
        <S.NewDiaryCon>
          <h4>오늘의 감정</h4>

          <S.EmotionList>
            {emotion_state_data.map((elem) => (
              <EmotionElem key={elem.id} {...elem} isSelected={elem.id === selectedEmotion} onClick={() => checkSelectedEmotion(elem.id)} />
            ))}
          </S.EmotionList>
        </S.NewDiaryCon>
        <S.NewDiaryCon>
          <h4>오늘의 일기</h4>
          {<S.EmotionTextArea />}
        </S.NewDiaryCon>
        <S.EmotionButtonWrap>
          <Button text="취소하기" onClick={() => navigate(-1)} />
          <Button text="작성완료" type="POSITIVE" />
        </S.EmotionButtonWrap>
      </S.NewDiaryWrap>
    </MainLayout>
  );
}

export default NewDiary;
