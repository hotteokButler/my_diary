import { useCallback, useContext, useState } from 'react';

import DiaryList from '../../components/DiaryList';
import MainLayout from '../../layout/MainLayout';
import { DiaryStateContext } from '../../stores/DiaryStateContext';

function Home() {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const onDecreaseMonth = useCallback(() => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }, [pivotDate]);
  const onIncreaseMonth = useCallback(() => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }, [pivotDate]);

  const headerData = {
    title: `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`,
    leftChildFn: onDecreaseMonth,
    rightChildFn: onIncreaseMonth,
  };
  return (
    <MainLayout headerData={headerData}>
      <DiaryList diaryList={data} />
    </MainLayout>
  );
}

export default Home;
