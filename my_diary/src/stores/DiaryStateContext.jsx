import { createContext } from 'react';

export const DiaryStateContext = createContext();

export function ProvideDiaryContext({ children, data }) {
  return <DiaryStateContext.Provider value={data}>{children}</DiaryStateContext.Provider>;
}
