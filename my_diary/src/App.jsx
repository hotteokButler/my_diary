import { Route, Routes } from 'react-router';

import MainLayout from './layout/MainLayout';
import Diary from './pages/Diary';
import Home from './pages/Home';
import NewDiary from './pages/NewDiary';
import NotFound from './pages/NotFound';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewDiary />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
