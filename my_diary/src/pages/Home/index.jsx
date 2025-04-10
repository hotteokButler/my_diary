import { useContext } from 'react';

import DiaryList from '../../components/DiaryList';
import MainLayout from '../../layout/MainLayout';
import { DiaryStateContext } from '../../stores/DiaryStateContext';

function Home() {
  const date = new Date();
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  const data = useContext(DiaryStateContext);

  const headerData = {
    title: today,
  };
  return (
    <MainLayout headerData={headerData}>
      <DiaryList diaryList={data} />
    </MainLayout>
  );
}

export default Home;
