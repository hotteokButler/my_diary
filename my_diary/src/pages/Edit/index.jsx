import React, { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';

import Editor from '../../components/Editor';
import MainLayout from '../../layout/MainLayout';
import { DiaryDispatchContext } from '../../stores/DiaryDispatchContext';

function Eidt() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatchFn = useContext(DiaryDispatchContext);

  let isDelete = false;

  const onClickDelete = () => {
    isDelete = window.confirm('일기를 정말 삭제할까요?\n다시 복구되지 않습니다.');
    if (isDelete) {
      dispatchFn.onDelete(params.id);
      navigate(-1, { replace: true });
    } else {
      return;
    }
  };

  const headerData = {
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
  };

  return (
    <MainLayout headerData={headerData}>
      <Editor />
    </MainLayout>
  );
}

export default Eidt;
