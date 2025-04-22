import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { DiaryDispatchContext } from '../../stores/DiaryDispatchContext';
import { DiaryStateContext } from '../../stores/DiaryStateContext';
import Button from '../Button';
import * as S from './filter.styled';

function Filter() {
  const dispatchFn = useContext(DiaryDispatchContext);
  const diary = useContext(DiaryStateContext);
  const [sortType, setSortType] = useState('latest');
  const navigate = useNavigate();

  const getSortedDate = (type) => {
    if (type === 'latest') {
      dispatchFn.sortASC();
    }
    if (type === 'oldest') {
      dispatchFn.sortDESC();
    }
  };

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
    getSortedDate(sortType);
  };

  useEffect(() => {
    diary && getSortedDate(sortType);
  }, [sortType]);

  return (
    <S.FilterWrap>
      <select name="filter" id="" onChange={onChangeSortType}>
        <option value="latest" defaultChecked>
          최신순
        </option>
        <option value="oldest">오래된순</option>
      </select>

      <Button text="새 일기쓰기" type="POSITIVE" onClick={() => navigate('/new')} />
    </S.FilterWrap>
  );
}

export default Filter;
