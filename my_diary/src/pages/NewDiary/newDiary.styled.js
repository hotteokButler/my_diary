import styled from 'styled-components';

export const NewDiaryWrap = styled.form`
  padding: 0 1rem 1rem;
`;
export const NewDiaryCon = styled.div`
  padding: 2.5rem 0;
  h4 {
    font-weight: bold;
    padding: 0 0 1.2rem;
    margin: 0;
    font-size: 1.2em;
  }
  input {
    outline: none;
    border: none;
    background: #efefef;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }
`;

export const EmotionList = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
export const EmotionElem = styled.li`
  width: calc(20% - 1.4rem);
  border-radius: 0.2rem;
  background: #efefef;
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

export const EmotionTextArea = styled.textarea`
  background: #efefef;
  border: none;
  width: 100%;
  min-height: 10em;
  border-radius: 0.2rem;
  resize: none;
`;

export const EmotionButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
`;
