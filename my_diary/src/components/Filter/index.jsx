import React, { useContext, useState } from 'react';

import { DiaryStateContext } from '../../stores/DiaryStateContext';
import Button from '../Button';
import * as S from './filter.styled';

function Filter() {
  const { diary, setDiary } = useContext(DiaryStateContext);
  const [sortType, setSortType] = useState('latest');

  const getSortedDate = () =>
    diary.toSorted((a, b) => {
      if (sortType === 'latest') {
        return a.createdDate - b.createdDate;
      } else if (sortType === 'oldest') {
        return b.createdDate - a.createdDate;
      }
    });

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
    setDiary(() => getSortedDate());
  };
  return (
    <S.FilterWrap>
      <select name="filter" id="" onChange={onChangeSortType}>
        <option value="latest" defaultChecked>
          최신순
        </option>
        <option value="oldest" defaultChecked>
          오래된순
        </option>
        <option value="this_month" defaultChecked>
          이번달
        </option>
      </select>

      <Button text="새 일기쓰기" type="POSITIVE" />
    </S.FilterWrap>
  );
}

export default Filter;
