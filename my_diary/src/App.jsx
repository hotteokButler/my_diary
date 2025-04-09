import { useReducer } from 'react';
import { Route, Routes } from 'react-router';

import Diary from './pages/Diary';
import Eidt from './pages/Edit';
import Home from './pages/Home';
import NewDiary from './pages/NewDiary';
import NotFound from './pages/NotFound';

const mockData = [
  { id: 1, emotinoID: 1, createdDate: new Date().getTime(), content: '1번 일기 내용' },
  { id: 2, emotinoID: 2, createdDate: new Date().getTime(), content: '2번 일기 내용' },
  { id: 3, emotinoID: 3, createdDate: new Date().getTime(), content: '3번 일기 내용' },
];

const reducer = (state, action) => {
  return state;
};

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDiary />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/edit/:id" element={<Eidt />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
