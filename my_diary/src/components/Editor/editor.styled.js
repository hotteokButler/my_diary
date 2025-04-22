import styled from 'styled-components';

export const EditorWrap = styled.form`
  padding: 0 1rem 1rem;
`;
export const EditorCon = styled.div`
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
