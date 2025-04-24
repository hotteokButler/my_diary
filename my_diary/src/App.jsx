import { useEffect, useReducer, useRef } from 'react';
import { Route, Routes } from 'react-router';

import Diary from './pages/Diary';
import Eidt from './pages/Edit';
import Home from './pages/Home';
import NewDiary from './pages/NewDiary';
import NotFound from './pages/NotFound';
import { reducer } from './stores/diary_reducer';
import { ProvideDiaryDispatchContext } from './stores/DiaryDispatchContext';
import { ProvideDiaryContext } from './stores/DiaryStateContext';

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(data.length);

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if (!storedData) {
      return;
    }
    const parsedData = JSON.parse(storedData);

    dispatch({
      type: 'INIT',
      data: parsedData,
    });
  }, []);

  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: { id: ++idRef.current, emotionId, createdDate, content },
    });
  };
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: id,
    });
  };
  const sortASC = () => {
    dispatch({
      type: 'ASC',
    });
  };
  const sortDESC = () => {
    dispatch({
      type: 'DESC',
    });
  };

  return (
    <ProvideDiaryContext data={data}>
      <ProvideDiaryDispatchContext dispatchFn={{ onCreate, onUpdate, onDelete, sortASC, sortDESC }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewDiary onSubmit={(input) => onCreate(input.createdDate.getTime(), input.emotionId, input.content)} />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Eidt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProvideDiaryDispatchContext>
    </ProvideDiaryContext>
  );
}

export default App;
