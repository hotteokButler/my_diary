export const mockData = [
  { id: 1, emotionId: 1, createdDate: new Date('2025-03-01').getTime(), content: '1번 일기 내용' },
  { id: 2, emotionId: 2, createdDate: new Date('2025-03-02').getTime(), content: '2번 일기 내용' },
  { id: 3, emotionId: 3, createdDate: new Date('2025-03-21').getTime(), content: '3번 일기 내용' },
  { id: 4, emotionId: 4, createdDate: new Date('2025-04-09').getTime(), content: '4번 일기 내용' },
  { id: 5, emotionId: 5, createdDate: new Date('2025-04-10').getTime(), content: '5번 일기 내용' },
  { id: 6, emotionId: 6, createdDate: new Date('2025-04-11').getTime(), content: '6번 일기 내용' },
  { id: 7, emotionId: 7, createdDate: new Date('2025-02-09').getTime(), content: '2월 일기 내용' },
  { id: 8, emotionId: 8, createdDate: new Date('2025-02-10').getTime(), content: '2월 일기 내용' },
  { id: 9, emotionId: 9, createdDate: new Date('2025-02-11').getTime(), content: '2월 일기 내용' },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((elem) => (String(elem.id) === String(action.data.id) ? action.data : elem));
    case 'DELETE':
      return state.filter((elem) => String(elem.id) !== String(action.data));
    case 'ASC':
      return state.toSorted((a, b) => b.createdDate - a.createdDate);
    case 'DESC':
      return state.toSorted((a, b) => a.createdDate - b.createdDate);
  }
};
