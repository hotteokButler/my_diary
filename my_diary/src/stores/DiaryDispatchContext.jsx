import { createContext } from 'react';

export const DiaryDispatchContext = createContext();

export function ProvideDiaryDispatchContext({ children, dispatchFn }) {
  return <DiaryDispatchContext.Provider value={dispatchFn}>{children}</DiaryDispatchContext.Provider>;
}
