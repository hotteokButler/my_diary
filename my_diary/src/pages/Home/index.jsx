import React from 'react';

import MainLayout from '../../layout/MainLayout';

function Home() {
  const date = new Date();
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

  const headerData = {
    title: today,
  };
  return <MainLayout headerData={headerData}>Home 내용</MainLayout>;
}

export default Home;
