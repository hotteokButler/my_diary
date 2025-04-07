import React from 'react';

import Button from '../Button';
import * as S from './filter.styled';

function Filter() {
  return (
    <S.FilterWrap>
      <select name="filter" id="">
        <option value="new" defaultChecked>
          최신순
        </option>
        <option value="old" defaultChecked>
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
