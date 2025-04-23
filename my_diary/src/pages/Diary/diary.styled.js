import styled from 'styled-components';

import getRandomPastelColor from '../../util/get-random-pastel-color';

export const DiaryWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const DiaryCon = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const DiarySubTit = styled.h3`
  font-weight: bold;
  font-size: 1.15em;
  text-align: center;
`;

export const DiaryEmotion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vw;
  max-width: 350px;
  max-height: 350px;
  text-align: center;
  border-radius: 0.5rem;
  margin: 0 auto;
  background: ${getRandomPastelColor()};
  img {
    width: 50%;
    margin: 0 0 1em;
  }
  span {
    display: block;
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    backdrop-filter: hue-rotate(225deg);
    padding: 0.25em 1em;
    border-radius: 0.2rem;
    overflow: hidden;
  }
`;

export const DiaryTextCon = styled.pre`
  font-family: inherit;
  width: 85%;
  margin: 0 auto;
  padding: 1em;
  background: #e7f0f08c;
  border-radius: 0.2rem;
  line-height: 1.2;
  max-height: 150px;
  overflow: auto;
  margin-bottom: 3rem;
`;
