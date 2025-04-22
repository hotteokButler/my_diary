const getStringedDate = (targetDate) => {
  // targetDate => yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  return `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
};

export default getStringedDate;
