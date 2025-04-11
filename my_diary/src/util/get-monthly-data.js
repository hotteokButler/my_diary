// 다음달 0일로 설정 시 이전달 마지막 날로 설정됨

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 0, 0, 0).getTime();
  return data.filter((item) => beginTime <= item.createdDate && endTime >= item.createdDate);
};
export default getMonthlyData;
