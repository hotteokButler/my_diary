import { useCallback, useContext, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import DiaryList from '../../components/DiaryList';
import MainLayout from '../../layout/MainLayout';
import { DiaryStateContext } from '../../stores/DiaryStateContext';
import getMonthlyData from '../../util/get-monthly-data';

function Home() {
  const diary = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  let filteredData = getMonthlyData(pivotDate, diary);

  const onDecreaseMonth = useCallback(() => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  }, [pivotDate]);

  const onIncreaseMonth = useCallback(() => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  }, [pivotDate]);

  const headerData = {
    title: `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`,
    leftChildFn: onDecreaseMonth,
    leftChild: <FaChevronLeft />,
    rightChild: <FaChevronRight />,
    rightChildFn: onIncreaseMonth,
  };

  return (
    <MainLayout headerData={headerData}>
      <DiaryList diaryList={filteredData} />
    </MainLayout>
  );
}

export default Home;
