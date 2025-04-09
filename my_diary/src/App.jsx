import { useReducer, useRef } from 'react';
import { Route, Routes } from 'react-router';

import Diary from './pages/Diary';
import Eidt from './pages/Edit';
import Home from './pages/Home';
import NewDiary from './pages/NewDiary';
import NotFound from './pages/NotFound';
import { mockData, reducer } from './stores/diary_reducer';

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: { id: idRef.current++, emotionId, createdDate, content },
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

  return (
    <div>
      <button type="button" onClick={() => onCreate(new Date().getTime(), 4, '4번 일기입니다.')}>
        추가
      </button>
      <button type="button" onClick={() => onUpdate(2, new Date().getTime(), 4, '2번 수정일기입니다.')}>
        수정
      </button>
      <button type="button" onClick={() => onDelete(2)}>
        삭제
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewDiary />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Eidt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
