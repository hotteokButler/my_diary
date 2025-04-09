import React from 'react';
import { useParams } from 'react-router';

import MainLayout from '../../layout/MainLayout';

function Eidt() {
  const params = useParams();

  return <MainLayout>{params.id}번 일기 수정페이지입니다.</MainLayout>;
}

export default Eidt;
