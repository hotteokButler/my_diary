import { createContext } from 'react';

const DiaryDispatchContext = createContext();

function ProvideDiaryDispatchContext({ children, dispatchFn }) {
  return <DiaryDispatchContext.Provider value={dispatchFn}>{children}</DiaryDispatchContext.Provider>;
}

export default ProvideDiaryDispatchContext;
