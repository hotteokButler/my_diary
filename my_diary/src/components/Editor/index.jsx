import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import EmotionElem from '../../components/EmotionElem';
import emotion_state_data from '../../stores/get-emotion-state';
import getStringedDate from '../../util/get-stringed-date';
import Button from '../Button';
import * as S from './editor.styled';

function Editor({ onSubmit, initData }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({ emotionId: 1, createdDate: new Date(), content: '' });

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
    onSubmit(input);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (initData) {
      setInput({ ...initData, createdDate: new Date(Number(initData.createdDate)) });
    }
  }, [initData]);

  return (
    <S.EditorWrap onSubmit={handleSubmit}>
      <S.EditorCon>
        <h4>오늘의 날짜</h4>
        <label htmlFor="createdDate">
          <input type="date" name="createdDate" id="createdDate" value={getStringedDate(input.createdDate)} onChange={onChangeInput} />
        </label>
      </S.EditorCon>
      <S.EditorCon>
        <h4>오늘의 감정</h4>

        <S.EmotionList>
          {emotion_state_data.map((elem) => (
            <EmotionElem
              key={elem.id}
              {...elem}
              isSelected={elem.id === input.emotionId}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: elem.id,
                  },
                })
              }
            />
          ))}
        </S.EmotionList>
      </S.EditorCon>
      <S.EditorCon>
        <h4>오늘의 일기</h4>
        {<S.EmotionTextArea onChange={onChangeInput} name="content" value={input.content ? input.content : ''} />}
      </S.EditorCon>
      <S.EmotionButtonWrap>
        <Button text="취소하기" onClick={() => navigate(-1)} />
        <Button text="작성완료" type="POSITIVE" />
      </S.EmotionButtonWrap>
    </S.EditorWrap>
  );
}

export default Editor;
