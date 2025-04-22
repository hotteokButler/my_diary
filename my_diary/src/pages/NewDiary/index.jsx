import { FaChevronLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

import Editor from '../../components/Editor';
import MainLayout from '../../layout/MainLayout';

function NewDiary({ onSubmit }) {
  const navigate = useNavigate();
  const headerData = {
    title: '새 일기 쓰기',
    leftChildFn: () => navigate(-1),
    leftChild: <FaChevronLeft />,
  };

  return (
    <MainLayout headerData={headerData}>
      <Editor onSubmit={onSubmit} />
    </MainLayout>
  );
}

export default NewDiary;
