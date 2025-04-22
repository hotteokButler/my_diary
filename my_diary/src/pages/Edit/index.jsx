import React, { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';

import MainLayout from '../../layout/MainLayout';
import { DiaryDispatchContext } from '../../stores/DiaryDispatchContext';

function Eidt() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatchFn = useContext(DiaryDispatchContext);

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
      dispatchFn.onDelete(params.id);
      navigate(-1, { replace: true });
    },
  };

  return <MainLayout headerData={headerData}>{params.id}번 일기 수정페이지입니다.</MainLayout>;
}

export default Eidt;
