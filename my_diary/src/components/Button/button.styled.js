import styled, { css } from 'styled-components';

import { NEGATIVE, POSITIVE, PRIMARY } from '../../constants/color-map';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  font-size: 1.3rem;

  svg {
    font-size: 1rem;
    padding: 0.2rem 0;
  }

  ${({ $type }) => {
    switch ($type) {
      case 'POSITIVE':
        return css`
          background-color: ${POSITIVE.BUTTON.DEFAULT.BACKGROUND};
          color: ${POSITIVE.BUTTON.DEFAULT.COLOR};
          &:hover {
            background-color: ${POSITIVE.BUTTON.HOVER.BACKGROUND};
            color: ${POSITIVE.BUTTON.HOVER.COLOR};
          }
          &:active {
            background-color: ${POSITIVE.BUTTON.PRESSED.BACKGROUND};
            color: ${POSITIVE.BUTTON.PRESSED.COLOR};
          }
          &:disabled {
            background-color: ${POSITIVE.BUTTON.DISABLED.BACKGROUND};
            color: ${POSITIVE.BUTTON.DISABLED.COLOR};
          }
        `;
      case 'NEGATIVE':
        return css`
          background-color: ${NEGATIVE.BUTTON.DEFAULT.BACKGROUND};
          color: ${NEGATIVE.BUTTON.DEFAULT.COLOR};
          &:hover {
            background-color: ${NEGATIVE.BUTTON.HOVER.BACKGROUND};
            color: ${NEGATIVE.BUTTON.HOVER.COLOR};
          }
          &:active {
            background-color: ${NEGATIVE.BUTTON.PRESSED.BACKGROUND};
            color: ${NEGATIVE.BUTTON.PRESSED.COLOR};
          }
          &:disabled {
            background-color: ${NEGATIVE.BUTTON.DISABLED.BACKGROUND};
            color: ${NEGATIVE.BUTTON.DISABLED.COLOR};
          }
        `;

      default:
        return css`
          background-color: ${PRIMARY.BUTTON.DEFAULT.BACKGROUND};
          color: ${PRIMARY.BUTTON.DEFAULT.COLOR};
          &:hover {
            background-color: ${PRIMARY.BUTTON.HOVER.BACKGROUND};
            color: ${PRIMARY.BUTTON.HOVER.COLOR};
          }
          &:active {
            background-color: ${PRIMARY.BUTTON.PRESSED.BACKGROUND};
            color: ${PRIMARY.BUTTON.PRESSED.COLOR};
          }
          &:disabled {
            background-color: ${PRIMARY.BUTTON.DISABLED.BACKGROUND};
            color: ${PRIMARY.BUTTON.DISABLED.COLOR};
          }
        `;
    }
  }}
`;
