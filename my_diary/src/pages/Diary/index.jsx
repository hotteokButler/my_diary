import React from 'react';

import getEmotionImages from '../../util/get-emotion-images';

function Diary() {
  return (
    <div>
      <img src={getEmotionImages(1)} alt="" />
    </div>
  );
}

export default Diary;
