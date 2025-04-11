export const mockData = [
  { id: 1, emotionID: 1, createdDate: new Date('2025-03-01').getTime(), content: '1번 일기 내용' },
  { id: 2, emotionID: 2, createdDate: new Date('2025-03-02').getTime(), content: '2번 일기 내용' },
  { id: 3, emotionID: 3, createdDate: new Date('2025-03-21').getTime(), content: '3번 일기 내용' },
  { id: 4, emotionID: 4, createdDate: new Date('2025-04-09').getTime(), content: '4번 일기 내용' },
  { id: 5, emotionID: 5, createdDate: new Date('2025-04-10').getTime(), content: '5번 일기 내용' },
  { id: 6, emotionID: 6, createdDate: new Date('2025-04-11').getTime(), content: '6번 일기 내용' },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'UPDATE':
      return state.map((elem) => (String(elem.id) === String(action.data.id) ? action.data : elem));
    case 'DELETE':
      return state.filter((elem) => String(elem.id) !== String(action.data));
  }
};
