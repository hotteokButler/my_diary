import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
  select {
    background: #eee;
    flex: 0.3;
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;
    font-size: 0.85em;
  }
  button {
    flex: auto;
  }
`;
