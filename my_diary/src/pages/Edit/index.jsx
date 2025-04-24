import React, { useContext, useEffect, useMemo, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';

import Editor from '../../components/Editor';
import MainLayout from '../../layout/MainLayout';
import { DiaryDispatchContext } from '../../stores/DiaryDispatchContext';
import { DiaryStateContext } from '../../stores/DiaryStateContext';
import changeTitle from '../../util/change-page-title';

function Eidt() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currentDiary, setCurrentDiary] = useState(null);

  let isDelete = false;

  const headerData = useMemo(
    () => ({
      title: '일기 수정하기',
      leftChildFn: () => navigate(-1),
      leftChild: (
        <>
          <FaChevronLeft /> <span>뒤로 가기</span>
        </>
      ),
      rightChild: '삭제하기',
      rightType: 'NEGATIVE',
      rightChildFn: () => {
        onClickDelete();
      },
    }),
    []
  );

  const onClickDelete = () => {
    isDelete = window.confirm('일기를 정말 삭제할까요?\n다시 복구되지 않습니다.');
    if (isDelete) {
      onDelete(id);
      navigate('/', { replace: true });
    } else {
      return;
    }
  };

  const getCurrentDiaryItem = (currentDiaryId) => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(currentDiaryId));

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      navigate('/', { replace: true });
    }

    return currentDiaryItem;
  };

  useEffect(() => {
    changeTitle(`${id}번 일기 수정하기`);
    currentDiary || setCurrentDiary(getCurrentDiaryItem(id));
  }, [id]);

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(id, input.createdDate.getTime(), input.emotionId, input.content);
    }

    return;
  };

  return <MainLayout headerData={headerData}>{currentDiary && <Editor initData={currentDiary} onSubmit={onSubmit} />}</MainLayout>;
}

export default Eidt;
