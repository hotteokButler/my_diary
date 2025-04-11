import { createContext, useState } from 'react';

export const DiaryStateContext = createContext();

export function ProvideDiaryContext({ children, data }) {
  const [diary, setDiary] = useState(data);

  return <DiaryStateContext.Provider value={{ diary, setDiary }}>{children}</DiaryStateContext.Provider>;
}
