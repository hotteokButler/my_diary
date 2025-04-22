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
  const navigate = useNavigate();
  const [input, setInput] = useState({ emotionID: 1, createdDate: new Date(), content: '' });

  const headerData = {
    title: '새 일기 쓰기',
    leftChildFn: () => navigate(-1),
    leftChild: <FaChevronLeft />,
  };

  const onChangeInput = (e) => {
    let { name, value } = e.target;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <MainLayout headerData={headerData}>
      <S.NewDiaryWrap onSubmit={handleSubmit}>
        <S.NewDiaryCon>
          <h4>오늘의 날짜</h4>
          <label htmlFor="createdDate">
            <input type="date" name="createdDate" id="createdDate" defaultValue={getStringedDate(input.createdDate)} onChange={onChangeInput} />
          </label>
        </S.NewDiaryCon>
        <S.NewDiaryCon>
          <h4>오늘의 감정</h4>

          <S.EmotionList>
            {emotion_state_data.map((elem) => (
              <EmotionElem
                key={elem.id}
                {...elem}
                isSelected={elem.id === input.emotionID}
                onClick={() =>
                  onChangeInput({
                    target: {
                      name: 'emotionID',
                      value: elem.id,
                    },
                  })
                }
              />
            ))}
          </S.EmotionList>
        </S.NewDiaryCon>
        <S.NewDiaryCon>
          <h4>오늘의 일기</h4>
          {<S.EmotionTextArea onChange={onChangeInput} name="content" />}
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
