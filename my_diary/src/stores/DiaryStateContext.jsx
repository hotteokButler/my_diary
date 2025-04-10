import { createContext } from 'react';

const DiaryStateContext = createContext();

function ProvideDiaryContext({ children, data }) {
  return <DiaryStateContext.Provider value={data}>{children}</DiaryStateContext.Provider>;
}

export default ProvideDiaryContext;
