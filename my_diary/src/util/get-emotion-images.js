import emotion01 from './../assets/emotion01.png';
import emotion02 from './../assets/emotion02.png';
import emotion03 from './../assets/emotion03.png';
import emotion04 from './../assets/emotion04.png';
import emotion05 from './../assets/emotion05.png';
import emotion06 from './../assets/emotion06.png';
import emotion07 from './../assets/emotion07.png';
import emotion08 from './../assets/emotion08.png';
import emotion09 from './../assets/emotion09.png';

const getEmotionImages = (emotionId) => {
  switch (emotionId) {
    case 1:
      return emotion01;
    case 2:
      return emotion02;
    case 3:
      return emotion03;
    case 4:
      return emotion04;
    case 5:
      return emotion05;
    case 6:
      return emotion06;
    case 7:
      return emotion07;
    case 8:
      return emotion08;
    case 9:
      return emotion09;
    default:
      return null;
  }
};

export default getEmotionImages;
