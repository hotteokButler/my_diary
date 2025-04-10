import styled from 'styled-components';

export const DiaryListWrap = styled.ul`
  position: relative;
  padding: 0;
`;

export const DiaryList = styled.li`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #efefef;
`;

export const DiaryImg = styled.div`
  flex: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ $color }) => ($color ? $color : '#feffe8')};
  padding: 0.5em 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const DiaryLiContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 7;
  div {
    display: flex;
    flex-direction: column;
    flex: auto;
    padding: 0 1rem;
    p {
      margin: 0;
    }
    & p:first-child {
      font-size: 2rem;
    }
    & p:last-child {
      font-size: 1.3rem;
    }
  }
`;

export const NoDiaryList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;
