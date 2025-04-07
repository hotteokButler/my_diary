import React from 'react';

import MainLayout from '../../layout/MainLayout';
import getEmotionImages from '../../util/get-emotion-images';

function Diary() {
  return (
    <MainLayout>
      <img src={getEmotionImages(1)} alt="" />
    </MainLayout>
  );
}

export default Diary;
