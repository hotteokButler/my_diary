import './App.css';

import { Route, Routes } from 'react-router';

import Diary from './pages/Diary';
import Home from './pages/Home';
import NewDiary from './pages/NewDiary';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/new" element={<NewDiary />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
