import styled from 'styled-components';

import getRandomPastelColor from '../../util/get-random-pastel-color';

export const EmotionElem = styled.li`
  width: calc(20% - 1.4rem);
  border-radius: 0.2rem;
  background: ${({ $isSelected }) => ($isSelected ? getRandomPastelColor() : '#efefef')};
  color: #232323;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  img {
    width: 70%;
    margin: 0 auto;
  }
  span {
    display: block;
    text-align: center;
    padding: 0 0 0.5rem;
    font-size: 0.95em;
    font-weight: bold;
  }
`;
